const assert=require('assert'),fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'),context={window:{}};vm.createContext(context);
for(const file of ['data/course.js','data/mc.js','data/exam-practice.js','data/step-formulas.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context);
const {SRA,SRAMCData,SRAExamPractice,SRAStepFormulas:data}=context.window;
const questions=new Map([...SRA.lessons.flatMap(l=>l.questions),...SRAMCData.topics.flatMap(t=>t.questions),...SRAExamPractice.questions].map(q=>[q.id,q]));

// De koppeling loopt per stapnummer: een gewijzigde uitwerking vraagt om een nieuwe bouw.
for(const [id,steps] of Object.entries(data.questions)){
 assert.ok(questions.has(id),`Onbekende vraag: ${id}`);
 assert.equal(steps.length,questions.get(id).steps.length,`Stappen verschoven: ${id}`);
 const keys=steps.flat().map(key=>key.replace(/^=/,''));
 assert.equal(new Set(keys).size,keys.length,`Formule dubbel getoond: ${id}`);
 for(const key of keys)assert.ok(data.formulas[key],`Formule ontbreekt: ${key}`);
}
for(const [key,formula] of Object.entries(data.formulas))assert.match(formula.source,/^(Formules? \d|Afgeleid van formules? \d)/,`Geen verwijzing: ${key}`);

// Het voorbeeld van de gebruiker: variantie uit strata en het interval.
const stratified=data.html('exam-20200323-vraag-11',0);
assert.match(stratified,/class="formula-number">Formule 29</);
assert.match(stratified,/<math/);
assert.match(data.html('exam-20200323-vraag-11',5),/Formule 27/);
assert.equal(data.html('exam-20200323-vraag-11',1),'','Dezelfde formule staat niet bij iedere stratumregel.');

// Schatter bepaalt het nummer: dezelfde stap verwijst per schatter naar een andere formule.
assert.match(data.html('exam-20231030-vraag-4',0),/Formule 9</);
assert.match(data.html('exam-20240318-vraag-3',0),/Formule 12</);
assert.match(data.html('exam-20260323-vraag-2',2),/Formule 11</);
assert.match(data.html('exam-20200323-vraag-20',0),/Formule 50</);
assert.equal(data.html('exam-20260323-vraag-18',0),'','Een afgelezen waarde krijgt geen formule.');
// Afgeleide formules noemen de bron op het blad.
assert.match(data.html('exam-20241028-vraag-10',6),/Afgeleid van formules 40 en 42</);
assert.match(data.html('exam-20241028-vraag-13',4),/Afgeleid van formule 50</);
assert.match(data.html('mc-regressielijn-basis-2',0),/Afgeleid van formules 30 en 31</);
assert.equal(data.formulas['onzekerheid|Totale breedte'].source,'Afgeleid van formule 2');
// Open tentamens: formuleblok boven het antwoordmodel, ook bij het gelijke tentamen van juni 2020.
assert.match(data.exam('20200323','vraag-11'),/Formules bij deze vraag.*Formule 29/s);
assert.equal(data.exam('20200626','vraag-11'),data.exam('20200323','vraag-11'));
assert.equal(data.exam('20200323','bestaat-niet'),'');
assert.match(fs.readFileSync(path.join(root,'js/cirrus.js'),'utf8'),/SRAStepFormulas\.exam\(a\.exam\.id,q\.id\)/);
// Staat de formule al in letters in de stap, dan alleen de verwijzing.
assert.doesNotMatch(data.html('mc-anova-basis-1',1),/<math/);
assert.match(data.html('mc-anova-basis-1',1),/Formule 38</);

for(const file of ['js/app.js','js/mc.js'])assert.match(fs.readFileSync(path.join(root,file),'utf8'),/SRAStepFormulas\?\.html\(q\.id,i\)/,file);
console.log(`Formules bij uitwerkingen: ${Object.keys(data.questions).length} vragen, ${Object.keys(data.formulas).length} formules.`);
