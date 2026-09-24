/* Regression checks for checking, inline feedback, preferences and old bookmarks. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
const data={window:{}};for(const file of ['data/course.js','data/mc.js'])vm.runInNewContext(read(file),data);
const C=data.window.SRA,D=data.window.SRAMCData;
const classes=()=>{const values=new Set();return {toggle(key,value){if(value)values.add(key);else values.delete(key);},contains:key=>values.has(key),add:key=>values.add(key),remove:key=>values.delete(key)};};
const input=value=>({value:String(value),checked:false,listeners:{},addEventListener(name,fn){this.listeners[name]=fn;},focus(){},change(trusted=true){const event={target:this,isTrusted:trusted};(this.onchange||this.listeners.change)?.(event);}});
const storage=new Map(),localStorage={getItem:key=>storage.get(key)||null,setItem:(key,value)=>storage.set(key,value)};

function loadApp(){
 const q=C.lessons[0].questions[0],radios=q.options.map((_,i)=>input(i)),preference=input('on');
 const panels=q.options.map((_,i)=>({dataset:{optionFeedback:String(i)},hidden:true,innerHTML:'',previousElementSibling:{classList:classes()}}));
 const button={dataset:{check:q.id},disabled:false,closest:()=>box};
 const box={querySelectorAll(selector){if(selector==='input[type="radio"]')return radios;if(selector==='[data-option-feedback]')return panels;throw Error(selector);},querySelector(selector){if(selector==='[data-direct-check]')return preference;if(selector==='input[type="radio"]:checked')return radios.find(r=>r.checked);if(selector==='input')return radios[0];throw Error(selector);}};
 const toast={classList:classes()},main={querySelectorAll:selector=>selector==='[data-check]'?[button]:[]};
 const document={querySelector:selector=>({'#main':main,'#toast':toast,'#history-back':{}}[selector]),querySelectorAll:selector=>selector==='[data-direct-check]'?[preference]:[]};
 const location={hash:'',replace(value){this.hash=value;}};
 const window={SRA:C},sandbox={window,document,localStorage,location,setTimeout:()=>1,clearTimeout(){}};
 // Execute production declarations while leaving page mounting to the fixture.
 const source=read('js/app.js').split(" $('#font-minus').onclick=")[0]+"window.testApp={renderQuestion,resultOverview,bindQuestionChecks,sanitize,renderSavedNotes,route,answer:id=>state.answers[id]};})();";
 vm.runInNewContext(source,sandbox,{filename:'app.js'});
 let updates=0;window.testApp.bindQuestionChecks(()=>updates++);
 function choose(index,trusted=true){radios.forEach((radio,i)=>{radio.checked=i===index;});radios[index].change(trusted);}
 return {q,panels,radios,preference,button,choose,api:window.testApp,settings:window.SRAAnswerSettings,location,get updates(){return updates;}};
}

let app=loadApp(),q=app.q,wrong=(q.correct+1)%q.options.length;
assert.equal(app.settings.enabled(),false,'Direct controleren begint als bewuste keuze.');
app.choose(wrong);assert.equal(app.api.answer(q.id),undefined,'Selecteren in handmatige modus telt niet als poging.');
app.button.onclick();assert.equal(app.api.answer(q.id).choice,wrong);assert.equal(app.panels[wrong].hidden,false);
assert.match(app.panels[wrong].innerHTML,/Nog niet goed/);assert.equal(app.panels[q.correct].hidden,true);
assert.match(app.panels[wrong].innerHTML,/Het juiste antwoord:/,'Een fout antwoord toont nog steeds de juiste keuze.');
app.choose(q.correct);assert.ok(app.panels.every(panel=>panel.hidden&&panel.innerHTML===''),'Oude feedback verdwijnt direct bij een andere keuze.');
assert.equal(app.api.answer(q.id).choice,wrong,'Een nog niet gecontroleerde wijziging overschrijft de vorige poging niet.');
app.preference.checked=true;app.preference.change();assert.equal(app.settings.enabled(),true);
app.choose(q.correct);assert.equal(app.api.answer(q.id).correct,true);assert.equal(app.api.answer(q.id).firstCorrect,false);
assert.equal(app.api.answer(q.id).attempts,2);assert.equal(app.panels[q.correct].hidden,false);
assert.doesNotMatch(app.panels[q.correct].innerHTML,/Jouw antwoord:|Het juiste antwoord:/,'Een goed gekozen antwoord wordt onder dezelfde optie niet herhaald.');
assert.match(app.panels[q.correct].innerHTML,/Zo werk je het uit/,'De inhoudelijke uitleg blijft staan.');
app.button.onclick();assert.equal(app.api.answer(q.id).attempts,2,'Dezelfde controle mag niet dubbel tellen.');
app.choose(wrong,false);assert.equal(app.api.answer(q.id).choice,q.correct,'Terugnavigatie mag geen automatische nieuwe poging opslaan.');
app.settings.set(false);app.choose(wrong);assert.equal(app.api.answer(q.id).choice,q.correct);
app.settings.set(true);app=loadApp();assert.equal(app.settings.enabled(),true,'Voorkeur blijft behouden na herladen.');
assert.equal(app.api.answer(q.id).firstCorrect,false);
const html=app.api.renderQuestion(q,0),chosen=html.indexOf(`data-option-feedback="${q.correct}"`);
assert.ok(chosen>html.indexOf(`value="${q.correct}"`));assert.ok(chosen<html.indexOf('data-check='),'Feedback staat binnen de opties en vóór de controleknop.');
assert.ok(html.includes('data-note="direct-check"'),'Terugnavigatie mag geen oude voorkeur herstellen.');
assert.doesNotMatch(html,/Jouw antwoord:|Het juiste antwoord:/,'Ook na herladen blijft de juiste optie zonder duplicaat.');
assert.match(app.api.resultOverview(),/Jouw antwoord:/,'Het zelfstandige lesresultaat bewaart het antwoord, omdat de optie daar niet zichtbaar is.');
assert.equal(app.api.sanitize({version:1,directCheck:'true'}).directCheck,false,'Alleen een boolean wordt als voorkeur geïmporteerd.');
const saved=JSON.parse(storage.get('sra-learning-v1'));saved.notes.e1='Oude berekening: 4 < 5';storage.set('sra-learning-v1',JSON.stringify(saved));
app=loadApp();assert.match(app.api.renderSavedNotes(),/Oude berekening: 4 &lt; 5/,'Eerdere notities blijven leesbaar en worden veilig weergegeven.');
assert.ok(!app.api.renderSavedNotes().includes('<textarea'),'Het archief herintroduceert geen oude bewerkbare oefenroute.');
const legacy={e1:'20250317/1',e2:'20250317/4',e3:'20241028/1',e4:'20241028/9',e5:'20250317/19',e6:'20250317/1'};
for(const [id,target]of Object.entries(legacy)){app.location.hash='#tentamen/'+id;app.api.route();assert.equal(app.location.hash,'#welkom/'+target);}

function loadMC(){
 const topic=D.topics[0],q=topic.questions[0],radios=q.options.map((_,i)=>input(i)),preference=input('on');
 const panels=q.options.map((_,i)=>({dataset:{mcFeedback:String(i)},hidden:true,innerHTML:'',previousElementSibling:{classList:classes()}}));
 const nodes={'#main':{innerHTML:''},'#mc-mark':input('on'),'#mc-check':{},'#mc-overview':{},'#mc-introduction':{},'#mc-count':{},'#mc-choice-status':{},'#mc-answer-status':{}};
 const document={querySelector(selector){if(selector==='[data-direct-check]')return preference;if(selector==='input[name="mc-choice"]:checked')return radios.find(r=>r.checked);return nodes[selector];},querySelectorAll(selector){if(selector==='input[name="mc-choice"]')return radios;if(selector==='[data-mc-feedback]')return panels;return [];}};
 const window={SRAMCData:D,SRAMCState:require('../js/mc-state.js'),localStorage,SRAAnswerSettings:app.settings};
 vm.runInNewContext(read('js/mc.js'),{window,document},{filename:'mc.js'});
 window.SRAMC.render(topic.id,'1',{pageHead:()=>'',breadcrumb:()=>'',sourceLink:()=>''});
 function choose(index,trusted=true){radios.forEach((radio,i)=>{radio.checked=i===index;});radios[index].change(trusted);}
 return {q,panels,radios,preference,nodes,choose,api:window.SRAMC};
}
let mc=loadMC();q=mc.q;wrong=(q.correct+1)%q.options.length;
mc.choose(wrong);assert.equal(mc.api.snapshot().answers[q.id].choice,wrong,'MC gebruikt de gedeelde directe voorkeur.');
assert.equal(mc.panels[wrong].hidden,false);assert.match(mc.panels[wrong].innerHTML,/Patroonherkenning/);
assert.match(mc.panels[wrong].innerHTML,/Het juiste antwoord is:/);
mc.choose(q.correct);assert.equal(mc.api.snapshot().answers[q.id].firstChoice,wrong);assert.equal(mc.api.snapshot().answers[q.id].attempts,2);
assert.equal(mc.panels[wrong].innerHTML,'');assert.equal(mc.panels[q.correct].hidden,false);
assert.doesNotMatch(mc.panels[q.correct].innerHTML,/Jouw antwoord:|Het juiste antwoord is:/);
assert.match(mc.panels[q.correct].innerHTML,/Zo werk je het uit/);
mc.api.render(D.topics[0].id,'resultaat',{pageHead:()=>'',breadcrumb:()=>'',sourceLink:()=>''});
assert.match(mc.nodes['#main'].innerHTML,/Jouw antwoord:/,'Op de aparte MC-resultaten blijft het juiste antwoord beschikbaar.');
mc=loadMC();assert.doesNotMatch(mc.nodes['#main'].innerHTML,/Jouw antwoord:|Het juiste antwoord is:/,'Een opgeslagen goed MC-antwoord wordt bij herladen niet herhaald.');
mc.nodes['#mc-check'].onclick();assert.equal(mc.api.snapshot().answers[q.id].attempts,2);
mc.preference.checked=false;mc.preference.change();mc.choose(wrong);assert.equal(mc.api.snapshot().answers[q.id].choice,q.correct);
assert.ok(mc.panels.every(panel=>panel.hidden));mc.nodes['#mc-check'].onclick();assert.equal(mc.api.snapshot().answers[q.id].attempts,3);
mc=loadMC();assert.ok(mc.nodes['#main'].innerHTML.indexOf('data-mc-feedback=')<mc.nodes['#main'].innerHTML.indexOf('id="mc-check"'));
assert.equal(mc.api.snapshot().answers[q.id].firstChoice,wrong);
console.log('OK: handmatig en direct nakijken, geen dubbel goed antwoord bij opties, volledige losse resultaten en foutfeedback, bewaarde voorkeur, eerste poging, herladen en zes oude tentamenlinks.');
