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
          assert.match(info.title,/^\S.*?: \S/u,'De symbolenlijst splitst op symbool en betekenis: '+info.title);
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
assert.match(H.lookup('s_y').title,/standaardafwijking van y/);
assert.equal(H.lookup('s_e','verschil').text.includes('verschilsschatter'),false);
assert.match(H.lookup('Ŵ_Q').title,/quotiëntschatter/,'Zelfde naam als het formuleblad');
assert.match(H.lookup('MDkritiek').title,/^MD_kritiek: .*Mahalanobis/);
const regression=C.lessons.find(l=>l.id==='regressieschatter').sections.map(s=>s.html).join('');
assert.ok(regression.indexOf('De factor')>regression.indexOf('Vergelijk met MPU'),'De toelichting op de factor staat onder de formule met die factor');
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
for (const token of ['s²','Σ','±','…','w̄','n','ln','exp']) assert.ok(H.lookup(token),'Statistische uitleg behouden: '+token);
assert.equal(H.textMatches('s_Q en s_q', 'quotient').length,2);
assert.notEqual(H.lookup('s_Q').title,H.lookup('s_q').title);
assert.equal(H.lookup('onbekend'),null);
// Platte formulebladnotatie wordt subscript; SPSS-variabelen en bestandsnamen blijven letterlijk.
const subs = text => H.notationParts(text).filter(part => typeof part !== 'string').map(part => part.sub);
assert.deepEqual(subs('Wat is Ŵ_MPU? s_e = √MSE; b₁s_x/s_y; 2x_t + 0,5e_(t−1); t²Ns_q²; w̄_i; SSR_klein'), ['MPU','e','x','y','t','t−1','q','i','klein']);
assert.deepEqual(subs('s_3,totaal en d_L, d_U'), ['3,totaal','L','U']);
for (const literal of ['LN_MORT en LN_ELECT','ln_dens','ZRE_1 en MAH_1','College8_data.sav','20241028_SRA_uitwerkingen.pdf']) assert.deepEqual(H.notationParts(literal), [], literal);
assert.match(H.lookup('sₑ','steekproefomvang').title,/verschillen/,'s_e is bij de schatters de spreiding van de fouten');
assert.equal(H.textMatches('n.v.t.','anova').length,0,'Een afkorting is geen symbool');
assert.equal(H.textMatches('(b) een tweezijdig','onzekerheid').length,0,'Een opsomming is geen symbool');
assert.equal(H.textMatches('B: 2 controles','steekproefomvang').filter(m=>m.start===0).length,0,'Een stratumnaam is geen symbool');
assert.match(H.lookup('t','diagnostiek','d = Σ(e_t − e_(t−1))²').title,/tijdsperiode/);
console.log(`OK: ${formulas} formules / ${components} componenten; volledige symbooldekking, context en tekstgrenzen.`);
