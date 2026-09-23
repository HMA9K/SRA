/* Controleer de aansluiting tussen vraag, bronpagina, antwoordmodel en analyse. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),sandbox={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'data/exams.js'),'utf8'),sandbox);
const D=sandbox.window.SRAExamData;
assert.equal(D.exams.length,10);assert.equal(new Set(D.exams.map(e=>e.id)).size,10);
assert.equal(D.exams.reduce((n,e)=>n+e.questions.length,0),224);
assert.equal(D.exams.filter(e=>e.onlyAnswers).length,0);
assert.equal(D.exams.filter(e=>!e.duplicateOf).length,9);
assert.equal(D.exams.find(e=>e.id==='20200626').duplicateOf,'20200323');
for(const e of D.exams){
 assert.equal(e.questions.reduce((n,q)=>n+q.points,0),100);
 assert.equal(e.questions.filter(q=>q.number<=e.cut).reduce((n,q)=>n+q.points,0),35);
 assert.equal(e.questions.filter(q=>q.number>e.cut).reduce((n,q)=>n+q.points,0),65);
 for(const q of e.questions){
  const re=new RegExp('Vraag\\s+'+q.originalNumber+'\\s*[.:(]','i');
  assert.match(e.pageText[q.page-1],re,`${e.id} vraag ${q.number}: bronpagina`);
  assert.match(e.answerText[q.solutionPage-1],re,`${e.id} vraag ${q.number}: antwoordpagina`);
  if(e.id==='20250317'){assert.ok(q.page<=10);assert.ok(q.solutionPage>=11);}
 }
 for(const s of e.sections)assert.equal(e.questions.filter(q=>q.sectionId===s.id).reduce((n,q)=>n+q.points,0),s.points);
 for(const qs of Object.values(e.evidence))for(const q of qs)assert.ok(e.questions.some(item=>item.number===q));
 if(process.argv.includes('--sources'))for(const images of Object.values(e.documents))for(const image of images)assert.ok(fs.existsSync(path.join(root,image)),image);
}
for(const [topic,count] of Object.entries(D.frequencies))assert.equal(D.exams.filter(e=>!e.duplicateOf&&e.evidence[topic].length).length,count);
for(const file of ['js/exams.js','data/exams.js'])new vm.Script(fs.readFileSync(path.join(root,file),'utf8'),{filename:file});
const portable=fs.readFileSync(path.join(root,'SRA interactieve samenvatting.html'),'utf8');
assert.ok(portable.includes('window.SRAExams='));assert.ok(portable.includes('window.SRAExamData ='));
assert.ok(!portable.includes('src="js/exams.js"'));
console.log('OK: 10 tentamendata / 224 vragen, 9 inhoudelijk verschillende tentamens, oorspronkelijke opgaven, 35/65 punten, bron- en antwoordpagina’s en onderwerpverwijzingen.');
