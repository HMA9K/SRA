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
  const OPERATORS = {'+':'+','−':'−','-':'−','×':'×','*':'×','·':'·','=':'=','≈':'≈','≠':'≠','<':'&lt;','>':'&gt;','≤':'≤','≥':'≥','±':'±'};
  const SKIP = 'script,style,textarea,input,select,option,svg,math,code,pre,[contenteditable],[data-no-formula-text]';

  const parens = (inner => `\\((?:[^()]|${inner})*\\)`);
  const GROUP = parens(parens('\\([^()]*\\)'));
  const ATOM = `(?:Σ\\s*)?(?:\\d+(?:[.,]\\d+)*|(?:${WORDS}|[A-Za-zα-ωŴŵŷȳē]{1,2})[\\u0302\\u0304]?(?:_\\([^()\\s]+\\)|_[A-Za-z0-9]+)?[${SUB}²³]*)`;
  const ROOT = `√(?:${GROUP}|\\[[^\\[\\]]*\\]|${ATOM})`;
  // Een wortel mag direct na een getal staan (0,49 √2); de teller van een breuk niet midden in een woord.
  const FORMULA = new RegExp(
    `(?:(?<![\\p{L}\\p{N}_/.,])(?:${ATOM}|${GROUP})\\s*[/÷]\\s*)?${ROOT}(?:\\s*[/÷]\\s*(?:${ROOT}|${ATOM}|${GROUP}))?(?![\\p{L}\\p{N}_])`
    + `|(?<![\\p{L}\\p{N}_/])(?:${ATOM}\\s*=\\s*)?(?:\\[[^\\[\\]]*\\]|${GROUP})\\s*/\\s*${GROUP}`, 'gu');
  const CANDIDATE = /√|[\])]\s*\/\s*\(/;

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

  function annotate(container) {
    const documentRef = container.ownerDocument || root.document;
    const walker = documentRef.createTreeWalker(container, 4), nodes = [];
    while (walker.nextNode()) if (CANDIDATE.test(walker.currentNode.nodeValue) && !walker.currentNode.parentElement.closest(SKIP)) nodes.push(walker.currentNode);
    const element = html => {
      const template = documentRef.createElement('template');
      template.innerHTML = html;
      return template.content.firstChild;
    };
    for (const node of nodes) {
      const whole = node.parentElement.matches('.inline-expression') && node.parentElement.childNodes.length === 1 && toMathML(node.nodeValue);
      const parts = whole ? [{math: whole}] : split(node.nodeValue);
      if (parts) node.replaceWith(...parts.map(part => typeof part === 'string' ? part : element(part.math)));
    }
  }

  return {toMathML, split, annotate};
});
