/* Coverage, source preservation and shared state: no PDF transcription here. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const context={window:{}};vm.createContext(context);
for(const file of ['data/mc.js','data/cirrus-exams.js'])vm.runInContext(fs.readFileSync(file,'utf8'),context);
const before=JSON.stringify(context.window.SRAMCData);
vm.runInContext(fs.readFileSync('data/exam-practice.js','utf8'),context);
vm.runInContext(fs.readFileSync('js/mc-state.js','utf8'),context);
const {SRAMCData:data,SRAExamPractice:practice,SRA_CIRRUS_EXAMS:exams,SRAMCState}=context.window;
const coverage=JSON.parse(fs.readFileSync('docs/exam-practice-coverage.json'));
assert.equal(coverage.total,224);assert.equal(coverage.mapped,224);assert.equal(coverage.questions.length,224);
assert.equal(JSON.stringify({...data,topics:data.topics.map(t=>({...t,questions:t.questions.filter(q=>!q.sourceExamId)}))}),before,'Existing questions and answer indices must stay intact');
const ids=new Set(practice.questions.map(q=>q.id));assert.equal(ids.size,practice.questions.length);
for(const exam of exams)for(const source of exam.questions){
 const entry=coverage.questions.find(x=>x.exam===exam.id&&x.question===source.id);assert.ok(entry?.practiceIds.length,exam.id+':'+source.id);
 for(const id of entry.practiceIds)assert.ok(ids.has(id));
 if(exam.id==='20200626')assert.deepEqual(entry.practiceIds,coverage.questions.find(x=>x.exam==='20200323'&&x.displayNumber===source.displayNumber).practiceIds);
}
for(const q of practice.questions){
 const exam=exams.find(e=>e.id===q.sourceExamId),source=exam.questions.find(x=>x.id===q.sourceQuestionId),section=exam.sections.find(s=>s.id===source.sectionId);
 assert.equal(q.caseHtml,section.caseHtml);assert.equal(q.originalPrompt,source.prompt);assert.equal(q.originalPromptHtml,source.promptHtml);assert.equal(q.officialSolutionHtml,source.solutionHtml);assert.equal(q.sourceNote,source.answerAudit.note);
 if(source.hasSourceVisual)assert.equal(q.sourceVisualHtml,source.promptHtml);
 assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.ok(q.correct>=0&&q.correct<4);assert.ok(q.explanation.includes(q.options[q.correct]));
 for(const field of ['signals','meaning','approach','answer'])assert.ok(q.recognition[field].length>15);
 for(const id of q.prerequisiteIds){const prior=exam.questions.find(p=>p.id===id);assert.ok(prior.number<source.number);assert.ok(q.prerequisitesHtml.includes(prior.solutionHtml));}
 for(const topic of q.topics)assert.equal(data.topics.find(t=>t.id===topic).questions.filter(x=>x.id===q.id).length,1);
 for(const match of (q.caseHtml+q.originalPromptHtml+q.officialSolutionHtml+q.prerequisitesHtml).matchAll(/src="([^"]+)"/g))assert.ok(fs.existsSync(match[1]),match[1]);
}
let value=null,fail=false;const storage={getItem:()=>value,setItem:(k,v)=>{if(fail)throw Error('quota');value=v;}};
const state=SRAMCState.create(data,storage),q=practice.questions.find(q=>q.topics.length>1),old=data.topics[0].questions.find(q=>!q.sourceExamId);
state.record(q.id,q.correct);state.record(old.id,old.correct);state.saveDraft(q.id,'<p>Eigen uitwerking</p>');
const saved=state.snapshot();for(const id of q.topics)assert.ok(state.summary(data.topics.find(t=>t.id===id)).done>=1);
assert.equal(state.summary().total,175+ids.size);fail=true;assert.equal(state.reset([q.id]),false);assert.deepEqual(state.snapshot(),saved);
fail=false;assert.equal(state.reset([q.id]),true);assert.ok(state.get(old.id));assert.equal(state.get(q.id),undefined);
const restored=SRAMCState.create(data,{getItem:()=>JSON.stringify(saved),setItem(){}});assert.equal(restored.draft(q.id),'<p>Eigen uitwerking</p>');assert.equal(restored.get(q.id).choice,q.correct);
console.log(`OK: 224/224 source mappings, ${ids.size} unique exam exercises, preserved sources, shared progress, draft roundtrip and selective reset.`);
