/* Klikbare vaktermen. Matcher en catalogus zijn ook zonder browser te gebruiken. */
(function (global, factory) {
  'use strict';
  const api = factory(global);
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (global && global.document) global.SRATerms = api;
})(typeof window !== 'undefined' ? window : globalThis, function (global) {
  'use strict';

  const WORD = /[\p{L}\p{N}\p{M}_]/u;
  const HYPHEN = /[\u2010\u2011\u2012\u2013\u2212]/u;
  const APOSTROPHE = /[\u2018\u2019\u02bc]/u;
  const SKIP = 'script,style,noscript,template,input,textarea,select,option,optgroup,button,a,nav,code,pre,kbd,samp,math,svg,canvas,iframe,object,embed,[role="button"],[contenteditable="true"],[contenteditable=""],[contenteditable="plaintext-only"],[aria-hidden="true"],[data-no-terms],[data-sra-term],.sr-only,.sra-term-popup';
  const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';

  function catalogEntries(terms) {
    const entries = Array.isArray(terms) ? terms : terms && typeof terms === 'object' ? Object.values(terms) : [];
    return entries.filter(term => term && typeof term.id === 'string' && term.id && typeof term.term === 'string' && term.term.trim());
  }

  // Houd originele posities vast, ook bij emoji, niet-afbrekende spaties en liggende streepjes.
  function unitsFor(value) {
    const units = [];
    let offset = 0;
    for (const original of value) {
      const start = offset;
      offset += original.length;
      let exact = original;
      if (/\s/u.test(original)) {
        if (units.length && units[units.length - 1].exact === ' ') {
          units[units.length - 1].end = offset;
          continue;
        }
        exact = ' ';
      } else if (HYPHEN.test(original)) exact = '-';
      else if (APOSTROPHE.test(original)) exact = "'";
      units.push({ key: exact.toLocaleLowerCase('nl'), exact, start, end: offset });
    }
    return units;
  }

  function automaticCaseSensitivity(alias) {
    const letters = alias.replace(/[^\p{L}]/gu, '');
    if (letters.length === 1) return true;
    return letters.length >= 2 && letters.length <= 6 && letters === letters.toLocaleUpperCase('nl') && letters !== letters.toLocaleLowerCase('nl');
  }

  function createMatcher(terms) {
    const entries = catalogEntries(terms);
    const trie = { next: new Map(), matches: [] };
    for (const term of entries) {
      const aliases = [term.term, ...(Array.isArray(term.aliases) ? term.aliases : [])];
      const seen = new Set();
      for (const value of aliases) {
        const alias = typeof value === 'string' ? value : value && typeof value.text === 'string' ? value.text : '';
        if (!alias.trim()) continue;
        const units = unitsFor(alias.trim());
        const exact = units.map(unit => unit.exact).join('');
        const caseSensitive = value && typeof value === 'object' && typeof value.caseSensitive === 'boolean'
          ? value.caseSensitive : typeof term.caseSensitive === 'boolean' ? term.caseSensitive : automaticCaseSensitivity(alias.trim());
        const identity = exact + '|' + caseSensitive;
        if (seen.has(identity)) continue;
        seen.add(identity);
        let node = trie;
        for (const unit of units) {
          if (!node.next.has(unit.key)) node.next.set(unit.key, { next: new Map(), matches: [] });
          node = node.next.get(unit.key);
        }
        node.matches.push({ id: term.id, term, alias: exact, caseSensitive });
      }
    }

    function find(value) {
      const text = String(value == null ? '' : value);
      const units = unitsFor(text);
      const result = [];
      for (let i = 0; i < units.length; i++) {
        if (i > 0 && WORD.test(units[i].exact) && WORD.test(units[i - 1].exact)) continue;
        let node = trie;
        let best = null;
        let actualCase = '';
        for (let j = i; j < units.length; j++) {
          node = node.next.get(units[j].key);
          if (!node) break;
          actualCase += units[j].exact;
          if (!node.matches.length) continue;
          if (WORD.test(units[j].exact) && j + 1 < units.length && WORD.test(units[j + 1].exact)) continue;
          const candidate = node.matches.find(match => !match.caseSensitive || match.alias === actualCase);
          if (candidate) best = { candidate, last: j };
        }
        if (!best) continue;
        const start = units[i].start;
        const end = units[best.last].end;
        result.push({ start, end, text: text.slice(start, end), id: best.candidate.id, term: best.candidate.term });
        i = best.last;
      }
      return result;
    }

    return { find, terms: entries };
  }

  function collectMatches(text, matcherOrTerms) {
    const matcher = matcherOrTerms && !Array.isArray(matcherOrTerms) && typeof matcherOrTerms.find === 'function' ? matcherOrTerms : createMatcher(matcherOrTerms);
    return matcher.find(text);
  }

  let appRoot = null;
  let documentRef = null;
  let matcher = createMatcher([]);
  let termsById = new Map();
  let sources = {};
  let observer = null;
  let popup = null;
  let trigger = null;
  let restoreOnClose = true;
  let queued = new Set();
  let scheduled = null;
  let active = false;

  function excluded(element) {
    if (!element) return true;
    if (element.namespaceURI && element.namespaceURI !== HTML_NAMESPACE) return true;
    return !!element.closest(SKIP);
  }

  function element(tag, className, text) {
    const node = documentRef.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = String(text);
    return node;
  }

  function ensurePopup() {
    if (popup && popup.ownerDocument === documentRef && popup.isConnected) return;
    popup = element('dialog', 'sra-term-popup');
    popup.id = 'sra-term-popup';
    popup.setAttribute('aria-labelledby', 'sra-term-title');
    popup.setAttribute('aria-describedby', 'sra-term-definition');
    const head = element('header', 'sra-term-head');
    const title = element('h2');
    title.id = 'sra-term-title';
    const closeButton = element('button', 'sra-term-close', '×');
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Uitleg sluiten');
    closeButton.autofocus = true;
    closeButton.addEventListener('click', () => close());
    head.append(title, closeButton);
    const content = element('div', 'sra-term-content');
    popup.append(head, content);
    popup.addEventListener('close', () => {
      const previous = trigger;
      trigger = null;
      if (restoreOnClose && previous && previous.isConnected) previous.focus({ preventScroll: true });
      restoreOnClose = true;
    });
    popup.addEventListener('click', event => {
      if (event.target !== popup) return;
      const rect = popup.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
    });
    documentRef.body.append(popup);
  }

  function openTerm(id, from) {
    const term = termsById.get(id);
    if (!term) return;
    ensurePopup();
    const content = popup.querySelector('.sra-term-content');
    content.replaceChildren();
    popup.querySelector('#sra-term-title').textContent = term.term;
    const definition = element('p', 'sra-term-definition', term.definition || '');
    definition.id = 'sra-term-definition';
    content.append(definition);
    if (term.example) {
      const example = element('section', 'sra-term-example');
      example.append(element('h3', '', 'Voorbeeld'), element('p', '', term.example));
      content.append(example);
    }
    if (Array.isArray(term.refs) && term.refs.length) {
      const references = element('section', 'sra-term-sources');
      references.append(element('h3', '', 'Bronnen'));
      const list = element('ul');
      for (const ref of term.refs) {
        if (!ref || typeof ref.source !== 'string') continue;
        const source = sources[ref.source];
        const item = element('li');
        if (source && typeof source.file === 'string' && source.file) {
          const link = element('a', '', source.title || ref.source);
          const page = Number.isFinite(Number(ref.page)) ? Math.max(1, Math.floor(Number(ref.page))) : 1;
          link.href = 'bronnen/' + encodeURIComponent(source.file) + '#page=' + page;
          link.target = '_blank';
          link.rel = 'noopener';
          item.append(link);
        } else item.append(documentRef.createTextNode(source && source.title || ref.source));
        if (ref.locator) item.append(documentRef.createTextNode(' · ' + String(ref.locator)));
        list.append(item);
      }
      if (list.children.length) {
        references.append(list);
        content.append(references);
      }
    }
    trigger = from;
    restoreOnClose = true;
    if (!popup.open) popup.showModal();
    popup.querySelector('.sra-term-close').focus({ preventScroll: true });
  }

  function close(options) {
    if (!popup || !popup.open) return;
    restoreOnClose = !options || options.restoreFocus !== false;
    popup.close();
  }

  function termTarget(event) {
    const target = event.target && event.target.nodeType === 1 ? event.target : event.target && event.target.parentElement;
    const term = target && target.closest('[data-sra-term]');
    return term && appRoot && appRoot.contains(term) ? term : null;
  }

  function onClick(event) {
    const term = termTarget(event);
    if (!term) return;
    event.preventDefault();
    if (term.tagName !== 'BUTTON') event.stopPropagation();
    openTerm(term.dataset.sraTerm, term);
  }

  function onKeyDown(event) {
    const term = termTarget(event);
    if (!term || term.tagName === 'BUTTON' || (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'Spacebar')) return;
    event.preventDefault();
    event.stopPropagation();
    openTerm(term.dataset.sraTerm, term);
  }

  function reconnectObserver() {
    if (observer && appRoot) observer.observe(appRoot, { subtree: true, childList: true, characterData: true });
  }

  function addToQueue(node) {
    if (!node || !appRoot || (!appRoot.contains(node) && node !== appRoot)) return;
    const parent = node.nodeType === 1 ? node : node.parentElement;
    if (excluded(parent)) return;
    queued.add(node);
    if (queued.size > 80) queued = new Set([appRoot]);
  }

  function collectRecords(records) {
    for (const record of records) {
      if (record.type === 'characterData') addToQueue(record.target);
      else for (const node of record.addedNodes) addToQueue(node);
    }
  }

  function schedule() {
    if (!queued.size || scheduled !== null) return;
    const requestFrame = global.requestAnimationFrame || (fn => global.setTimeout(fn, 0));
    scheduled = requestFrame(() => {
      scheduled = null;
      const work = [...queued].filter(node => appRoot && (node === appRoot || appRoot.contains(node)));
      queued.clear();
      const roots = work.filter(node => !work.some(parent => parent !== node && parent.contains(node)));
      for (const root of roots) annotate(root);
    });
  }

  function annotate(root) {
    root = root || appRoot;
    if (!root || !appRoot || active || (root !== appRoot && !appRoot.contains(root))) return 0;
    if (excluded(root.nodeType === 1 ? root : root.parentElement)) return 0;
    if (observer) {
      collectRecords(observer.takeRecords());
      observer.disconnect();
    }
    active = true;
    let inserted = 0;
    try {
      const nodes = [];
      if (root.nodeType === 3) nodes.push(root);
      else {
        const walker = documentRef.createTreeWalker(root, 4, {
          acceptNode(node) { return node.nodeValue.trim() && !excluded(node.parentElement) ? 1 : 2; }
        });
        while (walker.nextNode()) nodes.push(walker.currentNode);
      }
      for (const textNode of nodes) {
        if (!textNode.parentElement || excluded(textNode.parentElement)) continue;
        const matches = matcher.find(textNode.nodeValue);
        if (!matches.length) continue;
        const fragment = documentRef.createDocumentFragment();
        const useSpan = !!textNode.parentElement.closest('label,summary,legend');
        let offset = 0;
        for (const match of matches) {
          if (match.start > offset) fragment.append(documentRef.createTextNode(textNode.nodeValue.slice(offset, match.start)));
          const term = element(useSpan ? 'span' : 'button', 'sra-term', match.text);
          term.dataset.sraTerm = match.id;
          term.setAttribute('aria-haspopup', 'dialog');
          term.setAttribute('aria-label', match.text + ': uitleg openen');
          if (useSpan) {
            term.setAttribute('role', 'button');
            term.tabIndex = 0;
          } else term.type = 'button';
          fragment.append(term);
          offset = match.end;
          inserted++;
        }
        if (offset < textNode.nodeValue.length) fragment.append(documentRef.createTextNode(textNode.nodeValue.slice(offset)));
        textNode.replaceWith(fragment);
      }
    } finally {
      active = false;
      reconnectObserver();
      schedule();
    }
    return inserted;
  }

  function init(root, terms, sourceMap) {
    if (!root || !root.ownerDocument) throw new TypeError('SRATerms.init verwacht een DOM-element als root.');
    if (observer) observer.disconnect();
    if (appRoot) {
      appRoot.removeEventListener('click', onClick, true);
      appRoot.removeEventListener('keydown', onKeyDown, true);
    }
    close({ restoreFocus: false });
    appRoot = root;
    documentRef = root.ownerDocument;
    matcher = createMatcher(terms);
    termsById = new Map(matcher.terms.map(term => [term.id, term]));
    sources = sourceMap && typeof sourceMap === 'object' ? sourceMap : {};
    queued.clear();
    appRoot.addEventListener('click', onClick, true);
    appRoot.addEventListener('keydown', onKeyDown, true);
    const Observer = documentRef.defaultView && documentRef.defaultView.MutationObserver;
    observer = Observer ? new Observer(records => { collectRecords(records); schedule(); }) : null;
    ensurePopup();
    annotate(appRoot);
    reconnectObserver();
    return api;
  }

  const api = { init, annotate, close, createMatcher, collectMatches };
  return api;
});
