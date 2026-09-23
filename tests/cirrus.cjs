/* Gemaakt met Codex. Controle op bronbehoud, tentamenpogingen en integratie. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),sandbox={window:{}};
vm.runInNewContext(read('data/cirrus-exams.js'),sandbox);
vm.runInNewContext(read('data/course.js'),sandbox);
const exams=sandbox.window.SRA_CIRRUS_EXAMS, E=require('../vendor/cafa2-cirrus/js/exam-engine.js');
assert.equal(exams.length,10);assert.equal(exams.reduce((n,e)=>n+e.questions.length,0),224);
assert.equal(exams.find(e=>e.id==='20241028').questions.length,18);
assert.deepEqual(Array.from(exams.filter(e=>e.id.startsWith('2020')),e=>e.id),['20200323','20200626']);
const cuts=JSON.parse(read('data/exam-question-boundaries.json'));
for(const exam of exams){
 assert.deepEqual(E.validateExam(exam),{valid:true,errors:[]},exam.id);
 assert.equal(exam.questions.reduce((n,q)=>n+q.points,0),100);
 for(const [i,s] of exam.sections.entries()){
  const weights=exam.id.startsWith('2020')?[35,40,25]:[35,65];
  assert.equal(exam.questions.filter(q=>q.sectionId===s.id).reduce((n,q)=>n+q.points,0),weights[i]);
  assert.ok(!/antwoord-|uitwerking/.test(s.contentHtml),'Sectie mag geen antwoordmodel bevatten');
 }
 for(const q of exam.questions){
  assert.ok(q.prompt.length>15,exam.id+' '+q.id);
  assert.ok(q.solutionHtml.length>10);
  if(q.hasSourceVisual)assert.match(q.promptHtml,/<img /,'Ingesloten tabellen en grafieken mogen niet verdwijnen: '+exam.id+' '+q.id);
  const boundary=cuts[exam.id]?.[q.number];if(boundary)assert.ok(!q.prompt.includes(boundary),'Casus voor volgende vraag hoort onder Sectie: '+exam.id+' '+q.number);
 }
 const all=[exam.introductionHtml,...exam.sections.map(s=>s.contentHtml),...exam.questions.flatMap(q=>[q.promptHtml,q.solutionHtml])].join('');
 for(const m of all.matchAll(/src="([^"]+)"/g)){
  assert.match(m[1],/^bronnen\/tentamens\/\d{8}\/[a-z0-9-]+\.jpg$/);
  if(process.argv.includes('--sources'))assert.ok(fs.existsSync(path.join(root,m[1])),m[1]);
 }
}
for(const exam of exams.filter(e=>e.id.startsWith('2020'))){
 assert.equal(exam.sections.length,3);
 assert.equal(exam.questions[11].displayNumber,'2.1');
 assert.equal(exam.questions[20].displayNumber,'3.1');
 for(const n of [2,3,6,7,11,20])assert.match(exam.questions[n-1].solutionHtml,/<img /,'Rasterformules behouden: '+exam.id+' '+n);
}
const october=exams.find(e=>e.id==='20241028');
for(const n of [9,10,11,12,13,16,17])assert.match(october.questions[n-1].promptHtml,/<img /,'SPSS-bronbeeld behouden: '+n);
for(const n of [8,12])assert.match(october.questions[n-1].solutionHtml,/<img /,'Hypothesen met subscripts behouden: '+n);
for(const n of [3,7,18])assert.ok(!/\n\s*\d+\s*$/.test(october.questions[n-1].prompt),'Paginanummer hoort niet in vraagtekst: '+n);
assert.ok(!october.questions[6].solution.includes('opgave regressie'));
assert.ok(!october.questions[13].solution.includes('Deel B: meervoudige regressie'));
assert.match(october.questions[12].solutionHtml,/Bronverschil/);
assert.match(october.questions[8].solutionHtml,/44,105/);
assert.equal(exams.find(e=>e.id==='20250317').durationUnconfirmed,true);
assert.equal(exams.find(e=>e.id==='20240318').durationUnconfirmed,false);
const exam=exams[0],now=1800000000000,a=E.createAttempt(exam,{now,id:'test'});
assert.equal(E.remainingSeconds(a,now),exam.durationMinutes*60);
E.pauseAttempt(a,now+30000);assert.equal(E.remainingSeconds(a,now+1000000),exam.durationMinutes*60-30);
E.resumeAttempt(a,now+1000000);assert.equal(E.remainingSeconds(a,now+1000000),exam.durationMinutes*60-30);
a.answers[a.exam.questions[0].id]={html:'<p>Controleantwoord</p>'};assert.equal(E.answeredCount(a),1);
const submitted=E.finishAttempt(a,{now:now+1000001,reason:'submitted'});assert.equal(submitted.status,'completed');assert.equal(a.status,'active');
const timeout=E.finishAttempt(a,{now:a.deadlineAt+1000});assert.equal(timeout.submittedAt,a.deadlineAt);assert.equal(timeout.finishReason,'timeout');
const untimed=E.createAttempt(exam,{now,id:'untimed',untimed:true});assert.equal(E.remainingSeconds(untimed,now+99999999),Infinity);
const next=E.createAttempt(exam,{now:now+1000,id:'second',extraTime:true});assert.equal(next.extraMinutes,30);assert.equal(E.answeredCount(next),0);assert.equal(E.answeredCount(submitted),1);
assert.notEqual(a.exam,exam);assert.notEqual(a.exam.questions,exam.questions,'Poging bewaart een eigen inhoudskopie');
const manifest=JSON.parse(read('vendor/cafa2-cirrus/provenance.json'));
for(const [file,hash] of Object.entries(manifest.files))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,'vendor/cafa2-cirrus',file))).digest('hex'),hash,file);
for(const l of sandbox.window.SRA.lessons){assert.ok(l.formulaGuide.length);assert.ok(l.lab,l.id+' heeft een interactief rekenblad');}
for(const file of ['js/cirrus.js','js/app.js','js/exams.js'])new vm.Script(read(file),{filename:file});
const portable=read('SRA interactieve samenvatting.html');assert.ok(portable.includes('window.SRACirrus='));assert.ok(portable.includes('window.SRA_CIRRUS_EXAMS ='));
console.log('OK: 10 Cirrus-tentamens / 224 vragen, originele secties en nummering, bronbeelden en formules, contextgrenzen, punten, pogingen, klok/pauze/inleveren en CAFA2-herkomst.');
