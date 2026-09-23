/* Audit completeness, source preservation, and corrections on saved attempts. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),ctx={window:{}};
for(const f of ['data/exams.js','data/cirrus-exams.js'])vm.runInNewContext(read(f),ctx);
const catalog=ctx.window.SRA_CIRRUS_EXAMS, originals=ctx.window.SRAExamData.exams,report=JSON.parse(read('data/answer-audit.json'));
assert.equal(report.totalQuestions,224);assert.equal(report.uniqueQuestions,196);
let count=0;
for(const e of catalog){
 const source=originals.find(x=>x.id===e.id),row=report.exams.find(x=>x.id===e.id);
 assert.equal(row.questions.length,e.questions.length);
 for(const q of e.questions){
  count++;assert.deepEqual(q.answerAudit,source.questions[q.number-1].answerAudit);
  assert.ok(['G','N','C','B'].includes(q.answerAudit.status));assert.ok(q.answerAudit.note.length>30);
  assert.equal(q.answerAudit.sourcePage,q.sourcePage);
  assert.ok(q.answerAudit.answerPage>=source.answerStartPage&&q.answerAudit.answerPage<=source.answerText.length);
  assert.ok(!q.promptHtml.includes('answer-audit'),'Geen feedback voor controleren');
  assert.ok(!e.sections.some(s=>s.contentHtml.includes(q.answerAudit.note)),'Geen antwoord in sectie');
 }
 for(const s of Object.values(row.sources)){
  assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,s.file))).digest('hex'),s.sha256);
 }
}
assert.equal(count,224);
const js=read('js/cirrus.js'),start=js.indexOf('  function auditedAnswer('),end=js.indexOf('  function ownAnswer(',start);
assert.ok(start>0&&end>start);
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sandbox={catalog,esc,documentHtml:(e,kind,html)=>html};vm.runInNewContext(js.slice(start,end),sandbox);
const exam=catalog.find(e=>e.id==='20250317'),saved=JSON.parse(JSON.stringify(exam));
saved.questions.forEach(q=>delete q.answerAudit);
const attempt={exam:saved,answers:{'vraag-20':{html:'Mijn eigen antwoord'}},scores:{'vraag-20':2}},before=JSON.stringify(attempt);
const rendered=sandbox.auditedAnswer(attempt,saved.questions[19]);
assert.match(rendered,/Correctie bij het antwoord/);assert.match(rendered,/5.618/);
assert.ok(rendered.endsWith(saved.questions[19].solutionHtml),'Origineel antwoordmodel blijft behouden');
assert.equal(JSON.stringify(attempt),before,'Geen mutatie van historische poging of score');
assert.match(sandbox.auditedAnswer(attempt,saved.questions[0]),/<details class="answer-audit/,'Gewone controle is uitklapbaar');
assert.equal((js.slice(end).match(/auditedAnswer\(a,q\)/g)||[]).length,3,'Feedback, zijbalk en resultaten gebruiken dezelfde broncontrole');
const q=exam.questions[19],note=q.answerAudit.note;q.answerAudit.note='<script>alert(1)</script>';
assert.ok(!sandbox.auditedAnswer(attempt,saved.questions[19]).includes('<script>'),'Toelichtingen worden geescaped');q.answerAudit.note=note;
assert.equal(catalog.find(e=>e.id==='20241028').questions[12].answerAudit.status,'C');
assert.match(catalog.find(e=>e.id==='20240318').questions[16].answerAudit.note,/inconsistent/);
assert.equal(catalog.find(e=>e.id==='20200323').questions[16].answerAudit.status,'B');
assert.equal(catalog.find(e=>e.id==='20200626').questions[16].answerAudit.status,'N');
console.log('OK: 224 inhoudscontroles, bronhashes, juiste vraagkoppeling, correcties bij oude pogingen, behoud antwoorden/scoring, geen antwoordlekkage.');
