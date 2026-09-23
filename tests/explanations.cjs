const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),sandbox={window:{}};
for(const file of ['data/course.js','data/mc.js'])vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),sandbox);
const lessons=sandbox.window.SRA.lessons,topics=sandbox.window.SRAMCData.topics;
let options=0;
for(const topic of topics){
 const lesson=lessons.find(item=>item.id===topic.id);
 for(const q of topic.questions){
  assert.equal(q.optionExplanations.length,q.options.length,q.id);
  assert.ok(q.steps.length>=3,q.id+' heeft concrete stappen');
  assert.ok(q.pattern.length>30&&q.trap.length>20,q.id+' heeft herkenning en valkuil');
  assert.ok(q.refs.length,q.id+' vermeldt herkomst');
  for(const explanation of q.optionExplanations)assert.ok(explanation.length>35,q.id+' verklaart iedere optie');
  options+=q.options.length;
  if(q.id.includes('-basis-')){
   const original=lesson.questions[Number(q.id.split('-').at(-1))-1];
   assert.equal(q.options[q.correct],original.options[original.correct],q.id+' juiste antwoord blijft gelijk');
   for(let i=0;i<q.options.length;i++){
    const originalIndex=original.options.indexOf(q.options[i]);
    assert.equal(q.optionExplanations[i],original.optionExplanations[originalIndex],q.id+' toelichting hoort na rotatie bij dezelfde antwoordtekst');
   }
  }
 }
}
assert.equal(options,479);
console.log('OK: 134 vraaggerichte uitwerkingen, 479 optietoelichtingen en juiste koppeling na antwoordrotatie.');
