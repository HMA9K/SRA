/* Gemaakt met Codex: dekking van alle lesformules en betekenis per context. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const H = require('../js/formula-help.js');
const sandbox = {window:{}};
vm.runInNewContext(fs.readFileSync(require.resolve('../data/course.js'),'utf8'),sandbox);
const C = sandbox.window.SRA;
const decode = text => text.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"');
function parse(xml) {
  const top = {children:[],localName:'root'}, stack=[top];
  for (const token of xml.match(/<[^>]+>|[^<]+/g)) {
    if (token.startsWith('</')) stack.pop();
    else if(token.startsWith('<')) {
      const node = {localName:token.match(/^<([\w]+)/)[1],children:[],textContent:''};
      stack.at(-1).children.push(node);stack.push(node);
    } else for(const node of stack) node.textContent=(node.textContent||'')+decode(token);
  }
  return top.children[0];
}
let formulas=0, components=0;
const missing=[];
for(const lesson of C.lessons) {
  for(const block of [...lesson.sections,...lesson.formulaGuide]) {
    for(const xml of block.html.match(/<math\b[\s\S]*?<\/math>/g)||[]) {
      formulas++;const tree=parse(xml);
      function visit(node) {
        const info=H.describe(node,lesson.id,tree.textContent);
        if (['mi','mn','mo','mtext','msub','mover','msup'].includes(node.localName) && info && !info.title.startsWith('Macht:')) {
          components++;
          assert.ok(info.text.length>50 && info.text.length<550,info.title);
          assert.ok(info.text.split(/(?<=[.!?])\s+(?=[A-ZÉ])/u).length<=3,info.title);
          return;
        }
        if(['mi','mtext'].includes(node.localName)) missing.push(lesson.id+': '+node.textContent);
        node.children.forEach(visit);
      }
      visit(tree);
    }
  }
}
assert.deepEqual(missing,[],'Elk variabel symbool in de les- en formulepagina’s heeft uitleg');
assert.ok(formulas>100);
assert.match(H.lookup('e','transformaties').text,/2,718/);
assert.match(H.lookup('e','verschil').text,/b − w/);
assert.match(H.lookup('e','regressielijn').text,/residu|waargenomen/);
assert.match(H.lookup('sₑ','verschil').title,/verschillen/);
assert.match(H.lookup('sₑ','anova').title,/residuele/);
assert.match(H.lookup('t','toetsen').title,/berekende/);
assert.match(H.lookup('t','voorspellen').title,/kritieke/);
assert.match(H.lookup('R²ᵢ','modelbouw').text,/niet de R² van het hoofdmodel/);
assert.match(H.lookup('b','transformaties').title,/coëfficiënt/);
assert.match(H.lookup('b','quotient').title,/boekwaarde/);
assert.match(H.lookup('ē','verschil').title,/gemiddeld verschil/);
assert.notEqual(H.lookup('N').title,H.lookup('n').title);
assert.equal(H.textMatches('en ben nemen test expeditie maximum', 'transformaties').length,0,'Geen losse letters in gewone woorden');
assert.equal(H.textMatches('Machtsfunctie / Power', 'transformaties').length,0,'Een scheiding tussen namen is geen breuk');
assert.equal(H.textMatches('b₁ln(x) + b₀', 'transformaties').length,4,'Wel coëfficiënten en functies, geen uitleg over optellen');
for (const token of ['+','−','-','×','*','/','=','(',')','√','^']) assert.equal(H.lookup(token),null,'Geen basisrekenuitleg bij '+token);
for (const tag of ['mn','mfrac','msqrt']) assert.equal(H.describe({localName:tag,textContent:'2'},'rekenen',''),null);
assert.equal(H.describe({localName:'msup',textContent:'w2'},'rekenen',''),null,'Geen algemene uitleg van kwadrateren');
for (const token of ['s²','Σ','±','w̄','n','ln','exp']) assert.ok(H.lookup(token),'Statistische uitleg behouden: '+token);
assert.equal(H.textMatches('s_Q en s_q', 'quotient').length,2);
assert.notEqual(H.lookup('s_Q').title,H.lookup('s_q').title);
assert.equal(H.lookup('onbekend'),null);
console.log(`OK: ${formulas} formules / ${components} componenten; volledige symbooldekking, context en tekstgrenzen.`);
