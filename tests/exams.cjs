/* Controleer de aansluiting tussen vraag, bronpagina, antwoordmodel en analyse. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),sandbox={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'data/exams.js'),'utf8'),sandbox);
const D=sandbox.window.SRAExamData;
assert.equal(D.exams.length,12);assert.equal(new Set(D.exams.map(e=>e.id)).size,12);
assert.equal(D.exams.reduce((n,e)=>n+e.questions.length,0),267);
assert.equal(D.exams.filter(e=>e.onlyAnswers).length,0);
assert.equal(D.exams.filter(e=>!e.duplicateOf).length,11);
assert.equal(D.exams.find(e=>e.id==='20200626').duplicateOf,'20200323');
for(const e of D.exams){
 assert.equal(e.questions.reduce((n,q)=>n+q.points,0),100);
 assert.equal(e.questions.filter(q=>q.number<=e.cut).reduce((n,q)=>n+q.points,0),35);
 assert.equal(e.questions.filter(q=>q.number>e.cut).reduce((n,q)=>n+q.points,0),65);
 for(const q of e.questions){
  const re=new RegExp('(?:Vraag\\s+|\\d\\.)'+q.originalNumber+'\\s*[.:()]','i');
  assert.match(e.pageText[q.page-1],re,`${e.id} vraag ${q.number}: bronpagina`);
  assert.match(e.answerText[q.solutionPage-1],re,`${e.id} vraag ${q.number}: antwoordpagina`);
  if(e.id==='20250317'){assert.ok(q.page<=10);assert.ok(q.solutionPage>=11);}
  if(e.id==='20251028'){assert.ok(q.page<=9);assert.ok(q.solutionPage>=10);}
  if(e.id==='20260323'){assert.ok(q.page<=7);assert.ok(q.solutionPage>=8);}
 }
 for(const s of e.sections)assert.equal(e.questions.filter(q=>q.sectionId===s.id).reduce((n,q)=>n+q.points,0),s.points);
 for(const qs of Object.values(e.evidence))for(const q of qs)assert.ok(e.questions.some(item=>item.number===q));
 if(process.argv.includes('--sources'))for(const images of Object.values(e.documents))for(const image of images)assert.ok(fs.existsSync(path.join(root,image)),image);
}
for(const [topic,count] of Object.entries(D.frequencies))assert.equal(D.exams.filter(e=>!e.duplicateOf&&e.evidence[topic].length).length,count);
// Een gecombineerd bronbestand wordt gesplitst: geen antwoorden in de opgaven-PDF.
vm.runInNewContext(fs.readFileSync(path.join(root,'data/exam-original-pdfs.js'),'utf8'),sandbox);
const combined=D.exams.filter(e=>e.source===e.answerSource);
assert.equal(combined.map(e=>e.id).join(),'20250317,20251028,20260323');
for(const e of combined){const pdf=sandbox.window.SRAOriginalPdfs[e.id];
 assert.equal(pdf.questions.pages,e.questionPages,e.id);assert.equal(pdf.solutions.pages,e.answerText.length-e.answerStartPage+1,e.id);
 assert.notEqual(pdf.questions.sha256,pdf.solutions.sha256,e.id);
}
for(const file of ['js/exams.js','data/exams.js'])new vm.Script(fs.readFileSync(path.join(root,file),'utf8'),{filename:file});
const portable=fs.readFileSync(path.join(root,'SRA interactieve samenvatting.html'),'utf8');
assert.ok(portable.includes('window.SRAExams='));assert.ok(portable.includes('window.SRAExamData ='));
assert.ok(!portable.includes('src="js/exams.js"'));
console.log('OK: 12 tentamendata / 267 vragen, 11 inhoudelijk verschillende tentamens, oorspronkelijke opgaven, 35/65 punten, bron- en antwoordpagina’s en onderwerpverwijzingen.');
// De zoomknoppen schakelen de inhoudsbreedte uit; hun id's moeten bestaan in de lezer.
for(const id of fs.readFileSync(path.join(root,'pdf-reader/web/content-view.mjs'),'utf8').match(/closest\('([^']+)'\)/)[1].split(',')){if(!fs.readFileSync(path.join(root,'pdf-reader/web/viewer.html'),'utf8').includes('id="'+id.slice(1)+'"'))throw Error('Onbekende zoomknop: '+id);}
