/* Zet platte formules met een wortel of samengestelde breuk om naar MathML, op één gedeelde plek. */
(function (root, factory) {
  'use strict';
  const api = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root.document) root.SRAFormulaText = api;
})(typeof window !== 'undefined' ? window : globalThis, function (root) {
  'use strict';

  const WORDS = 'TotalSS|MSPR|SSR|SSE|MSR|MSE|VIF|ln|exp|df';
  const SUB = '₀₁₂₃₄₅₆₇₈₉ᵢⱼₖₑ';
  const SUB_VALUE = {'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9','ᵢ':'i','ⱼ':'j','ₖ':'k','ₑ':'e'};
  const TOKEN = new RegExp(`\\s+|\\d+(?:[.,]\\d+)*|_\\([^()\\s]+\\)|_[A-Za-z0-9]+|${WORDS}|[a-zà-ÿ]{3,}|[A-Za-zα-ωΑ-Ω][\\u0302\\u0304]?|.`, 'gsu');
  const OPERATORS = {'+':'+','−':'−','-':'−','×':'×','*':'×','∗':'×','·':'·','=':'=','≈':'≈','≠':'≠','<':'&lt;','>':'&gt;','≤':'≤','≥':'≥','±':'±'};
  const SKIP = 'script,style,textarea,input,select,option,svg,math,code,pre,[contenteditable],[data-no-formula-text]';

  const parens = (inner => `\\((?:[^()]|${inner})*\\)`);
  const GROUP = parens(parens('\\([^()]*\\)'));
  const ATOM = `(?:Σ\\s*)?(?:\\d+(?:[.,]\\d+)*[²³]*|(?:${WORDS}|[A-Za-zα-ωŴŵŷȳē]{1,2})[\\u0302\\u0304]?(?:_\\([^()\\s]+\\)|_[A-Za-z0-9]+)?[${SUB}²³]*)`;
  const ROOT = `√(?:${GROUP}|\\[[^\\[\\]]*\\]|${ATOM})`;
  // Eén letter met index, zoals s_w of Ŵ_MPU; bestandsnamen als LN_MORT vallen hierbuiten.
  const INDEXED = `(?<![\\p{L}\\p{N}_.])[A-Za-zα-ωŴŵŷȳē][\\u0302\\u0304]?[²³]?_(?:\\([^()\\s]+\\)|[A-Za-z0-9]+)[²³]?(?![\\p{L}\\p{N}_])`;
  const BASE = new RegExp(`(?<![\\p{L}\\p{N}_.])(${WORDS}|MD|CD|VC|[A-Za-zα-ωŴŵŷȳē][\\u0302\\u0304]?)([²³]?)$`, 'u');
  // Een wortel mag direct na een getal staan (0,49 √2); de teller van een breuk niet midden in een woord.
  const FORMULA = new RegExp(
    `(?:(?<![\\p{L}\\p{N}_/.,])${ATOM}\\s*=\\s*)?(?:(?<![\\p{L}\\p{N}_/.,])(?:${ATOM}|${GROUP})\\s*[/÷]\\s*)?${ROOT}(?:\\s*[/÷]\\s*(?:${ROOT}|${ATOM}|${GROUP}))?(?![\\p{L}\\p{N}_])`
    + `|(?<![\\p{L}\\p{N}_/])(?:${ATOM}\\s*=\\s*)?(?:\\[[^\\[\\]]*\\]\\s*/\\s*\\d[\\d.,]*\\d|(?:\\[[^\\[\\]]*\\]|${GROUP})\\s*/\\s*${GROUP})`
    + `|(?<![\\p{L}\\p{N}_/.,])\\d[\\d.,]*\\d?\\s+/\\s+\\d[\\d.,]*\\d?(?![\\p{L}\\p{N}_/])`
    + `|(?<![\\p{L}\\p{N}_/])${ATOM}\\s*/\\s*${GROUP}`
    + `|${INDEXED}(?:\\s*/\\s*${ROOT})?`, 'gu');
  // Alleen tussen twee waarden: +€ 48 aan het begin blijft het teken van een bedrag.
  const VALUE_END = /[\p{L}\p{N})\]²³%]$/u, VALUE_START = /^[\p{L}\p{N}(\[√Σ€−]/u;
  const CANDIDATE = /√|[\])]\s*\/\s*[(\d]|_|\d\s+\/\s+\d|[\p{L}\d²³]\s*\/\s*\(/u;

  /* Geeft MathML terug, of null als de tekst geen veilig leesbare formule is. */
  function toMathML(source) {
    // Woorden horen alleen onder een wortel, zoals √(breedte × frequentie); anders is het gewone tekst.
    if (!source.includes('√') && /[a-zà-ÿ]{3,}/.test(source.replace(new RegExp(WORDS, 'g'), ''))) return null;
    const tokens = source.normalize('NFD').replace(/≠/g, '≠').match(TOKEN).filter(token => token.trim());
    let position = 0;
    const peek = () => tokens[position], take = () => tokens[position++];
    const fail = () => { throw Error('Geen formule'); };

    function sequence(closing) {
      const parts = [];
      while (peek() !== closing) {
        if (peek() === undefined) fail();
        parts.push(OPERATORS[peek()] ? `<mo>${OPERATORS[take()]}</mo>` : term());
      }
      take();
      return `<mrow>${parts.join('')}</mrow>`;
    }
    function primary() {
      const token = take();
      if (token === undefined) fail();
      if (token === '(' || token === '[') {
        const closing = token === '(' ? ')' : ']', inner = sequence(closing);
        return {html: `<mrow><mo>${token}</mo>${inner}<mo>${closing}</mo></mrow>`, bare: inner};
      }
      let html;
      if (token === '√') html = `<msqrt>${factor().bare}</msqrt>`;
      else if (token === 'Σ' || token === '∑') html = `<mrow><mo>∑</mo>${factor().html}</mrow>`;
      else if (/^\d/.test(token)) html = `<mn>${token}</mn>`;
      else if (new RegExp(`^(?:${WORDS})$`).test(token)) html = `<mi mathvariant="normal">${token}</mi>`;
      else if (/^[a-zà-ÿ]{3,}$/.test(token)) html = `<mtext>${token}</mtext>`;
      else if (/^[A-Za-zα-ωΑ-Ω]$/.test(token)) html = `<mi>${token}</mi>`;
      else if (/^.[̂̄]$/su.test(token)) html = `<mover accent="true"><mi>${token[0]}</mi><mo>${token[1] === '̂' ? '^' : '¯'}</mo></mover>`;
      else fail();
      return {html, bare: html};
    }
    function factor() {
      const value = primary();
      let lower = '', upper = '';
      while (peek() !== undefined) {
        const token = peek();
        if (token === '²' || token === '³') upper = `<mn>${token === '²' ? 2 : 3}</mn>`;
        else if (SUB_VALUE[token]) lower = /\d/.test(SUB_VALUE[token]) ? `<mn>${SUB_VALUE[token]}</mn>` : `<mi>${SUB_VALUE[token]}</mi>`;
        else if (token[0] === '_' && token.length > 1) {
          const index = token.slice(1).replace(/^\((.*)\)$/, '$1');
          lower = index.length === 1 ? `<mi>${index}</mi>` : `<mtext>${index}</mtext>`;
        } else break;
        take();
      }
      if (!lower && !upper) return value;
      const html = lower && upper ? `<msubsup>${value.html}${lower}${upper}</msubsup>` : lower ? `<msub>${value.html}${lower}</msub>` : `<msup>${value.html}${upper}</msup>`;
      return {html, bare: html};
    }
    function term() {
      let value = factor();
      while (peek() === '/' || peek() === '÷') {
        take();
        const html = `<mfrac>${value.bare}${factor().bare}</mfrac>`;
        value = {html, bare: html};
      }
      return value.html;
    }
    try {
      const content = sequence(undefined);
      return `<math xmlns="http://www.w3.org/1998/Math/MathML" display="inline">${content}</math>`;
    } catch {
      return null;
    }
  }

  /* Deelt tekst in gewone stukken en stukken {math}. */
  function split(text) {
    const parts = [];
    let offset = 0;
    for (const match of text.matchAll(FORMULA)) {
      const math = toMathML(match[0]);
      if (!math) continue;
      parts.push(text.slice(offset, match.index), {math});
      offset = match.index + match[0].length;
    }
    if (!offset) return null;
    parts.push(text.slice(offset));
    return parts.filter(Boolean);
  }

  /* Maak van s<sub>w</sub> één geheel: eenvoudige indexen als s_w, andere direct als formule. */
  function joinIndexes(container, element) {
    for (const index of container.querySelectorAll('sub')) {
      const previous = index.previousSibling, value = index.textContent;
      if (index.closest(SKIP) || previous?.nodeType !== 3 || !/^[\p{L}\p{N},ᵢⱼₖ]+$/u.test(value)) continue;
      const base = previous.nodeValue.match(BASE);
      if (!base) continue;
      if (/^[A-Za-z0-9]+$/.test(value) && base[1].length === 1) {
        previous.nodeValue += '_' + value;
        index.remove();
      } else {
        const symbol = base[1].length > 1 ? `<mi mathvariant="normal">${base[1]}</mi>` : `<mi>${base[1]}</mi>`;
        const lower = value.length > 1 ? `<mtext>${value}</mtext>` : `<mi>${value}</mi>`;
        const power = base[2] ? `<mn>${base[2] === '²' ? 2 : 3}</mn>` : '';
        previous.nodeValue = previous.nodeValue.slice(0, base.index);
        index.replaceWith(element(`<math xmlns="http://www.w3.org/1998/Math/MathML" display="inline">${power ? `<msubsup>${symbol}${lower}${power}</msubsup>` : `<msub>${symbol}${lower}</msub>`}</math>`));
      }
      previous.parentNode.normalize();
    }
  }

  /* Rekentekens worden vet; het teken van een bedrag blijft gewoon. */
  function markOperators(container, element) {
    for (const mo of container.querySelectorAll('math mo:not(.math-operator)')) {
      if (!/^[+−×÷±=]$/.test(mo.textContent.trim())) continue;
      const previous = mo.previousElementSibling;
      if (previous && !(previous.localName === 'mo' && !/^[)\]]$/.test(previous.textContent.trim()))) mo.classList.add('math-operator');
    }
    const walker = (container.ownerDocument || root.document).createTreeWalker(container, 4), nodes = [];
    while (walker.nextNode()) {
      if (/[+−×÷±=]/.test(walker.currentNode.nodeValue) && !walker.currentNode.parentElement.closest(SKIP + ',.math-operator,button,a')) nodes.push(walker.currentNode);
    }
    // Een buurformule telt ook als waarde: s_w × √n staat in drie losse stukken.
    const neighbour = node => node && (node.nodeType === 1 && !/^(BR|P|LI|DIV)$/.test(node.nodeName));
    for (const node of nodes) {
      const value = node.nodeValue, parts = [];
      let offset = 0;
      for (const match of value.matchAll(/[+−×÷±=]/g)) {
        const before = value.slice(0, match.index).trimEnd(), after = value.slice(match.index + 1).trimStart();
        const left = before ? VALUE_END.test(before) : neighbour(node.previousSibling);
        const right = after ? VALUE_START.test(after) : neighbour(node.nextSibling);
        if (!left || !right) continue;
        parts.push(value.slice(offset, match.index), element(`<span class="math-operator">${match[0]}</span>`));
        offset = match.index + 1;
      }
      if (offset) node.replaceWith(...[...parts, value.slice(offset)].filter(Boolean));
    }
  }

  /* Twee formules met alleen een schuine streep ertussen zijn samen één breuk. */
  function joinFractions(container, element) {
    for (const math of [...container.querySelectorAll('math')]) {
      const slash = math.nextSibling, next = slash?.nextSibling;
      if (slash?.nodeType !== 3 || slash.nodeValue.trim() !== '/' || next?.nodeName?.toLowerCase() !== 'math' || math.closest(SKIP.replace('math,', ''))) continue;
      next.replaceWith(element(`<math xmlns="http://www.w3.org/1998/Math/MathML" display="inline"><mfrac><mrow>${math.innerHTML}</mrow><mrow>${next.innerHTML}</mrow></mfrac></math>`));
      slash.remove();
      math.remove();
    }
  }

  function annotate(container) {
    const documentRef = container.ownerDocument || root.document;
    const element = html => {
      const template = documentRef.createElement('template');
      template.innerHTML = html;
      return template.content.firstChild;
    };
    joinIndexes(container, element);
    const walker = documentRef.createTreeWalker(container, 4), nodes = [];
    while (walker.nextNode()) {
      const value = walker.currentNode.nodeValue, parent = walker.currentNode.parentElement;
      if ((CANDIDATE.test(value) || (value.includes('/') && parent.matches('.inline-expression'))) && !parent.closest(SKIP)) nodes.push(walker.currentNode);
    }
    for (const node of nodes) {
      const whole = node.parentElement.matches('.inline-expression') && node.parentElement.childNodes.length === 1 && toMathML(node.nodeValue);
      const parts = whole ? [{math: whole}] : split(node.nodeValue);
      if (parts) node.replaceWith(...parts.map(part => typeof part === 'string' ? part : element(/<m(?:frac|sqrt)/.test(part.math) && !node.parentElement.closest('.inline-expression') ? `<span class="inline-expression">${part.math}</span>` : part.math)));
    }
    // Een grote wortel met breuk krijgt een eigen regel, met het leesteken erachter.
    for (const math of container.querySelectorAll('.inline-expression:not(.formula-line) msqrt mfrac')) {
      const line = math.closest('.inline-expression'), next = line.nextSibling;
      if (line.textContent.length < 24 || line.closest(SKIP.replace('math,', '') + ',table')) continue;
      line.classList.add('formula-line');
      if (next?.nodeType === 3 && /^[.,;:]/.test(next.nodeValue)) {
        line.append(next.nodeValue[0]);
        next.nodeValue = next.nodeValue.slice(1).replace(/^\s+/, '');
      }
    }
    joinFractions(container, element);
    markOperators(container, element);
  }

  return {toMathML, split, annotate};
});
