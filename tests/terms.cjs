/* Contract checks for terminology matching and the source-grounded catalogue.
   DOM interaction is verified separately in the browser. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {createMatcher,collectMatches}=require('../js/terms.js');

const terms=[
  {id:'residu',term:'Residu',aliases:['residuen']},
  {id:'sd',term:'Standaardafwijking',aliases:['standaardafwijkingen']},
  {id:'se',term:'Standaardfout'},
  {id:'se-mean',term:'Standaardfout van het gemiddelde'},
  {id:'p',term:'p-waarde',aliases:['p-waarden']},
  {id:'vif',term:'Variance Inflation Factor',aliases:['VIF']},
  {id:'r2',term:'Determinatiecoëfficiënt',aliases:['R²','R2']},
  {id:'dummy',term:'Dummyvariabele',aliases:["dummy's"]},
  {id:'n',term:'N'},
  {id:'lower-n',term:'n'},
  {id:'explicit',term:'Speciaal',aliases:[{text:'XYZ',caseSensitive:false}]},
  {id:'exact',term:'Exact',aliases:[{text:'AbC',caseSensitive:true}]},
  {id:'sensitive',term:'MiXeD',caseSensitive:true}
];
const matcher=createMatcher(terms);
const matchIds=text=>matcher.find(text).map(match=>match.id);

// Terms must not turn substrings of Dutch words, identifiers or numbers into links.
assert.deepEqual(matchIds('residu residuen residueel residuenboek boekresidu residu2 2residu _residu residu_ éresidu residué e\u0301residu residu\u0301'),['residu','residu']);
assert.deepEqual(matchIds('ReSiDu; (standaardafwijking), STANDAARDAFWIJKINGEN!'),['residu','sd','sd']);
assert.deepEqual(matchIds('R² R2 r² r2 R²x R20 VIF vif ViF eenVIF VIF2'),['r2','r2','vif']);
assert.deepEqual(matchIds('N n nN Nn'),['n','lower-n']);
assert.deepEqual(matchIds('xyz XYZ xYz AbC abc ABC MiXeD mixed MIXED'),['explicit','explicit','explicit','exact','sensitive']);

// Longer aliases win; no nested match is returned for the shorter term.
assert.deepEqual(matchIds('standaardfout van het gemiddelde; standaardfout'),['se-mean','se']);
assert.deepEqual(createMatcher(terms.slice().reverse()).find('standaardfout van het gemiddelde').map(match=>match.id),['se-mean']);
assert.equal(matcher.find('standaardfout van het gemiddelde')[0].text,'standaardfout van het gemiddelde');
assert.deepEqual(matchIds('p-waarde p‐waarde p‑waarde p–waarde p−waarde p-waarden p-waardevol'),['p','p','p','p','p','p']);
assert.deepEqual(matchIds("dummy's dummy’s DUMMY’S"),['dummy','dummy','dummy']);
assert.deepEqual(matchIds('standaardfout\u00a0van\nhet\tgemiddelde'),['se-mean']);

// Offsets refer to the original UTF-16 string, preserving emoji, spaces and spelling.
const offsetText='📊 ReSiDu / p‑waarde / standaardfout\u00a0 van\nhet\tgemiddelde / VIF.';
const offsetMatches=matcher.find(offsetText);
assert.deepEqual(offsetMatches.map(match=>match.id),['residu','p','se-mean','vif']);
assert.equal(offsetMatches[0].start,3);
let previousEnd=0;
for(const match of offsetMatches){
  assert.ok(Number.isInteger(match.start)&&Number.isInteger(match.end)&&match.start>=previousEnd&&match.end>match.start);
  assert.equal(offsetText.slice(match.start,match.end),match.text);
  assert.equal(match.term,terms.find(term=>term.id===match.id));
  previousEnd=match.end;
}
assert.deepEqual(collectMatches(offsetText,terms),offsetMatches);
assert.deepEqual(collectMatches(offsetText,matcher),offsetMatches);
assert.deepEqual(createMatcher(Object.fromEntries(terms.map(term=>[term.id,term]))).find(offsetText),offsetMatches);
assert.deepEqual(matcher.find(''),[]);
assert.deepEqual(matcher.find(null),[]);
assert.deepEqual(createMatcher([]).find('Residu'),[]);
assert.deepEqual(createMatcher([{id:'duplicate',term:'Residu',aliases:['Residu','residu']}]).find('Residu').map(match=>match.id),['duplicate']);

// The checked-in data must include useful explanations and valid course references.
const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../data/course.js'),'utf8'),sandbox);
const course=sandbox.window.SRA;
assert.ok(Array.isArray(course.terms)&&course.terms.length>=course.glossary.length,'Bouw de begrippencatalogus mee in data/course.js.');
const lessonIds=new Set(course.lessons.map(lesson=>lesson.id));
const coveredLessons=new Set();
const termIds=new Set();
const catalogueMatcher=createMatcher(course.terms);
for(const term of course.terms){
  assert.match(term.id,/^[a-z0-9]+(?:-[a-z0-9]+)*$/,`Ongeldige termcode: ${term.id}`);
  assert.ok(!termIds.has(term.id),`Dubbele termcode: ${term.id}`);termIds.add(term.id);
  for(const field of ['term','definition','example'])assert.ok(typeof term[field]==='string'&&term[field].trim(),`${term.id}: ${field} ontbreekt.`);
  assert.ok(lessonIds.has(term.lesson),`${term.id}: onbekende les ${term.lesson}`);coveredLessons.add(term.lesson);
  assert.ok(Array.isArray(term.aliases),`${term.id}: aliases ontbreekt.`);
  assert.ok(Array.isArray(term.refs)&&term.refs.length,`${term.id}: bronverwijzing ontbreekt.`);
  for(const ref of term.refs){
    assert.ok(Object.hasOwn(course.sources,ref.source),`${term.id}: onbekende bron ${ref.source}`);
    assert.ok(Number.isInteger(ref.page)&&ref.page>0,`${term.id}: ongeldige bronpagina.`);
    assert.ok(typeof ref.locator==='string'&&ref.locator.trim(),`${term.id}: bronlocatie ontbreekt.`);
  }
  for(const value of [term.term,...term.aliases]){
    const alias=typeof value==='string'?value:value?.text;
    assert.ok(typeof alias==='string'&&alias.trim(),`${term.id}: lege alias.`);
    const matches=catalogueMatcher.find(alias);
    assert.equal(matches.length,1,`${term.id}: alias ${alias} wordt niet als één begrip herkend.`);
    assert.equal(matches[0].id,term.id,`${term.id}: alias ${alias} verwijst naar ${matches[0].id}.`);
    assert.equal(matches[0].text,alias,`${term.id}: alias wordt gedeeltelijk herkend.`);
  }
}
assert.deepEqual([...coveredLessons].sort(),[...lessonIds].sort(),'Elk van de 19 lessen moet begrippenuitleg hebben.');

// Key terminology used in explanations and labs must resolve without prior knowledge.
for(const phrase of ['waarneming','populatie','steekproef','gemiddelde','standaardafwijking',
  'standaardfout','betrouwbaarheid','eindigheidscorrectie','MPU','verschilschatter',
  'quotiëntschatter','regressieschatter','stratificatie','Neyman','regressie','OLS',
  'ANOVA','R²','nulhypothese','p-waarde','heteroscedasticiteit','Cook’s Distance',
  'Mahalanobis Distance','Durbin-Watson','voorspellingsinterval','dummyvariabele',
  'logaritme','VIF','MSPR','trainingsset','testset']){
  const matches=catalogueMatcher.find(phrase);
  assert.ok(matches.length===1&&matches[0].text===phrase,`Begrip uit de cursus mist klikbare uitleg: ${phrase}`);
}
console.log(`OK: termgrenzen, langste aliassen, hoofdletters, tekstposities en ${course.terms.length} begrippen met bronnen voor alle 19 lessen.`);
