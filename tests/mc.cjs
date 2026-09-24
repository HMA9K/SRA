const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),sandbox={window:{}};
for(const file of ['data/course.js','data/mc.js'])vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),sandbox);
const D=sandbox.window.SRAMCData,C=sandbox.window.SRA;
assert.equal(D.topics.length,19);assert.equal(D.topics.flatMap(t=>t.questions).length,134);
const all=new Map();
for(const t of D.topics){
 assert.ok(C.lessons.some(l=>l.id===t.lesson));
 assert.deepEqual(Array.from(t.questions,q=>q.level),Array.from(t.questions,q=>q.level).sort());
 assert.deepEqual(Array.from(t.questions.filter(q=>!q.id.includes('-aanvulling-')),q=>q.level),[1,1,2,2,3,3]);
 for(const r of t.refs)assert.ok(C.sources[r.source]&&r.page>0);
 for(const q of t.questions){assert.ok(!all.has(q.id));all.set(q.id,q);assert.equal(new Set(q.options).size,q.options.length);assert.ok(q.correct>=0&&q.correct<q.options.length);assert.ok(q.steps.length&&q.steps.every(s=>s.trim().length>0));assert.ok(q.pattern.length>35&&q.trap.length>20);}
}
const answer=id=>{const q=all.get(id);return q.options[q.correct];};
// Onafhankelijke controles op rekenvragen, ongeacht de antwoordletter.
assert.equal(answer('mc-beginnen-toepassing-1'),'€ '+(4000*70).toLocaleString('nl-NL'));
assert.equal(answer('mc-rekenen-toepassing-2'),Math.sqrt((120-20**2/4)/3).toFixed(2).replace('.',','));
assert.equal(answer('mc-verschil-toepassing-2'),'€ '+(10000-500*(-3)).toLocaleString('nl-NL'));
assert.equal(answer('mc-regressieschatter-toepassing-2'),'€ '+(1000*90+.8*(105000-1000*100)).toLocaleString('nl-NL'));
assert.equal(answer('mc-steekproefomvang-toepassing-2'),String(Math.ceil(1000/(1+400**2/(2**2*1000*100)))));
assert.equal(answer('mc-anova-toepassing-2'),String((180/2)/(34/(20-2-1))));
assert.equal(answer('mc-meervoudig-toepassing-2'),String((1000+50*4+200)-(1000+50*6)));
assert.equal(answer('mc-transformaties-toepassing-3'),String((3*(2*10)**2)/(3*10**2)));
assert.equal(answer('mc-mpu-toepassing-2'),'[€ '+Math.round(80000-2*1000*20/10*Math.sqrt(900/999)).toLocaleString('nl-NL')+'; € '+Math.round(80000+2*1000*20/10*Math.sqrt(900/999)).toLocaleString('nl-NL')+']');
assert.equal(answer('mc-voorspellen-toepassing-2'),'['+(50-2*5*Math.sqrt(1+1/25)).toFixed(2).replace('.',',')+'; '+(50+2*5*Math.sqrt(1+1/25)).toFixed(2).replace('.',',')+']');
const {create}=require('../js/mc-state.js');let value=null;
const storage={getItem:()=>value,setItem:(k,v)=>{value=v;}},model=create(D,storage),t=D.topics[0],q=t.questions[0],wrong=(q.correct+1)%q.options.length;
model.record(q.id,wrong);model.record(q.id,q.correct);
assert.equal(model.summary(t).correct,1);assert.equal(model.summary(t).first,0);assert.equal(model.get(q.id).attempts,2);
model.mark(q.id,true);const reloaded=create(D,storage);assert.ok(reloaded.isMarked(q.id));assert.equal(reloaded.get(q.id).choice,q.correct);assert.equal(reloaded.get(q.id).firstChoice,wrong);
assert.throws(()=>reloaded.record(q.id,999));
const before=JSON.stringify(reloaded.snapshot());assert.throws(()=>reloaded.restore({version:1,answers:{[q.id]:{choice:999,firstChoice:0}},marked:{}}));assert.equal(JSON.stringify(reloaded.snapshot()),before);
const imported=create(D,{getItem:()=>null,setItem(){}});imported.restore(reloaded.snapshot());assert.deepEqual(imported.summary(),reloaded.summary());
const unavailable=create(D,{getItem:()=>null,setItem(){throw Error('Vol');}});unavailable.record(q.id,q.correct);assert.ok(unavailable.status());assert.equal(unavailable.summary().correct,1);
let overwritten=false;const corrupt=create(D,{getItem:()=>'{ kapot',setItem(){overwritten=true;}});corrupt.record(q.id,q.correct);assert.equal(overwritten,false);assert.ok(corrupt.status());
// Doorloop dezelfde vragen via hoofd- en deelonderwerp: opslag, bronnen en feedback moeten gelijk blijven.
function renderFixture(data=D,snapshot=null){
 let raw=snapshot?JSON.stringify(snapshot):null,selected=null;const nodes=new Map(),panels=Array.from({length:4},(_,i)=>({dataset:{mcFeedback:String(i)},previousElementSibling:{classList:{toggle(){}}}}));
 const node=selector=>{if(selector==='input[name="mc-choice"]:checked')return selected;if(!nodes.has(selector))nodes.set(selector,{innerHTML:'',textContent:'',querySelectorAll:()=>[],showModal(){this.open=true;},close(){this.open=false;}});return nodes.get(selector);};
 const window={SRAMCData:data,SRAMCState:{create},localStorage:{getItem:()=>raw,setItem:(key,value)=>{raw=value;}},SRAAnswerSettings:{enabled:()=>false,set(){}}};
 vm.runInNewContext(fs.readFileSync(path.join(root,'js/mc.js'),'utf8'),{window,document:{querySelector:node,querySelectorAll:selector=>selector==='[data-mc-feedback]'?panels:[]}});
 const context={pageHead:label=>`<h1>${label}</h1>`,breadcrumb:label=>`<nav>${label}</nav>`,sourceLink:(source,page)=>`<a href="source:${source}:${page}">${source}:${page}</a>`};
 return {api:window.SRAMC,node,select:value=>{selected={value:String(value)};},render:(topic,item)=>{window.SRAMC.render(topic,item,context);return node('#main').innerHTML;}};
}
const ui=renderFixture(),groups=ui.api.groups;
assert.deepEqual(Array.from(groups,g=>g.questions.length),[19,43,39,27,6]);
assert.equal(new Set(groups.flatMap(g=>g.questions.map(q=>q.id))).size,134);
assert.deepEqual(Array.from(groups.flatMap(g=>g.questions.map(q=>q.id))).sort(),Array.from(all.keys()).sort());
for(const group of groups){
 assert.deepEqual(Array.from(group.questions,q=>q.level),Array.from(group.questions,q=>q.level).sort());
 for(const item of group.questions)assert.equal(item,all.get(item.id));
 assert.ok(ui.render(group.id,String(group.questions.length)).includes(`href="#tentamen/mc/${group.id}/resultaat"`));
}
const home=ui.render(),partsStart=home.indexOf('aria-labelledby="mc-parts-title"'),subjectsStart=home.indexOf('aria-labelledby="mc-subjects-title"');
assert.ok(partsStart>=0&&subjectsStart>partsStart,'Het overzicht biedt eerst oefenen per deel en daarna oefenen per onderwerp.');
const parts=home.slice(partsStart,subjectsStart),subjects=home.slice(subjectsStart);
assert.equal((parts.match(/class="mc-part-card"/g)||[]).length,4);assert.equal((subjects.match(/class="mc-main-card"/g)||[]).length,19);assert.equal((subjects.match(/class="mc-topic-group"/g)||[]).length,5);
for(const group of groups.filter(g=>g.id!=='hoofd-tentamen'))assert.ok(parts.includes(`href="#tentamen/mc/${group.id}/1"`),'Elk deel start de bestaande groepsreeks.');
assert.equal((home.match(/<details class="mc-subtopics">/g)||[]).length,0,'Alle deelonderwerpen zijn direct zichtbaar.');
assert.ok(home.indexOf('data-topic="stratificatie"')<home.indexOf('data-topic="steekproefomvang"'),'Stratificatie komt voor uitbreiding van de steekproef in hoofdstuk 8.');
assert.ok(!home.includes('class="mc-levels"'),'Moeilijkheid wordt niet meer als drie tegels getoond.');
const regression=groups.find(g=>g.id==='hoofd-regressie'),anova=D.topics.find(t=>t.id==='anova'),aq=anova.questions[0],groupNumber=regression.questions.indexOf(aq)+1,aqWrong=(aq.correct+1)%aq.options.length;
let html=ui.render(regression.id,String(groupNumber));assert.ok(html.includes('href="#les/anova"'));assert.ok(html.includes('<h2 class="mc-question-title">ANOVA en verklaarde variatie</h2>'));assert.ok(!html.includes('Patroonherkenning'));
assert.ok(html.includes('SRA oefenvragen · Regressie en toetsen'));assert.ok(html.includes('Basisregels bij deze vraag'));assert.ok(html.includes('class="mc-answer-grid"'));
ui.node('#mc-introduction').onclick();assert.ok(ui.node('#question-overview').open);assert.ok(ui.node('#question-overview-content').innerHTML.includes('Je eerste gecontroleerde antwoord blijft bewaard'));
ui.node('#mc-mark').onchange({target:{checked:true}});ui.select(aqWrong);ui.node('#mc-check').onclick();
assert.equal(ui.api.summary(regression).done,1);assert.equal(ui.api.summary(anova).done,1);assert.equal(ui.api.summary().done,1);
html=ui.render(anova.id,'1');assert.ok(/id="mc-mark"[^>]+checked/.test(html));assert.ok(html.includes('Patroonherkenning'));
for(const ref of anova.refs)assert.ok(html.includes(`source:${ref.source}:${ref.page}`));
ui.select(aq.correct);ui.node('#mc-check').onclick();
assert.equal(ui.api.snapshot().answers[aq.id].firstChoice,aqWrong);assert.equal(ui.api.snapshot().answers[aq.id].attempts,2);assert.equal(ui.api.summary(regression).correct,1);assert.equal(ui.api.summary(regression).first,0);
const reloadUI=renderFixture(D,ui.api.snapshot());html=reloadUI.render(regression.id,String(groupNumber));assert.ok(html.includes('Eerste poging: nog niet goed'));assert.ok(/id="mc-mark"[^>]+checked/.test(html));
html=reloadUI.render(regression.id,'resultaat');assert.ok(html.includes('href="#les/anova"'));assert.ok(!html.includes('#les/undefined'));assert.ok(!html.includes('Patroonherkenning</h4></div>'));
const completedGroup={version:1,answers:Object.fromEntries(regression.questions.map(item=>[item.id,{choice:item.correct,firstChoice:item.correct,attempts:1}])),marked:{}};
const completeUI=renderFixture(D,completedGroup);assert.ok(completeUI.render().includes(`href="#tentamen/mc/${regression.id}/1"`));assert.ok(completeUI.render(regression.id,'resultaat').includes('Alle vragen zijn gecontroleerd.'));
// Herkenningsstappen zijn uitsluitend antwoordfeedback en worden als tekst weergegeven.
const richData=JSON.parse(JSON.stringify(D)),richQuestion=richData.topics[0].questions[0];richQuestion.recognition={signals:'<signaal> & gegeven',meaning:'Betekenis van dit gegeven',approach:'Kies de aanpak op grond van de vraag',answer:'Noem de gevraagde grootheid en eenheid'};
const richUI=renderFixture(richData);assert.ok(!richUI.render(richData.topics[0].id,'1').includes('Dit herken je in de vraag'));
richUI.select(richQuestion.correct);richUI.node('#mc-check').onclick();html=richUI.render(richData.topics[0].id,'1');
for(const label of ['Dit herken je in de vraag','Dit betekent het','Zo kies je de aanpak','Dit moet je antwoord bevatten'])assert.ok(html.includes(label));
assert.ok(html.includes('&lt;signaal&gt; &amp; gegeven'));assert.ok(!html.includes('<signaal>'));
delete richQuestion.recognition;assert.ok(richUI.render(richData.topics[0].id,'1').includes(richQuestion.pattern.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')));
for(const file of ['js/mc.js','js/mc-state.js','js/exams.js','js/app.js'])new vm.Script(fs.readFileSync(path.join(root,file),'utf8'),{filename:file});
const portable=fs.readFileSync(path.join(root,'SRA interactieve samenvatting.html'),'utf8');assert.ok(portable.includes('window.SRAMCData ='));assert.ok(portable.includes('window.SRAMC='));
console.log('OK: 134 vragen, eerst 4 delen en daarna 19 gegroepeerde onderwerpen, gedeelde voortgang en markeringen, juiste les/bronnen, herkenning na nakijken, rekenantwoorden, eerste poging, herladen, back-up en opslagfouten.');
