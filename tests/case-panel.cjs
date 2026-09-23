/* The real case-panel handlers run against a small DOM fixture, without an editor rebuild. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),read=file=>fs.readFileSync(path.join(root,file),'utf8');
const source=read('js/cirrus.js'),start=source.indexOf('  var casePreferences='),end=source.indexOf('  function updateQuestionNav',start);
assert.ok(start>0&&end>start);
function fixture(stored){
 const nodes=[],buttons=[],storage=new Map(stored===undefined?[]:[['sra-exam-case-panel-v1',stored]]);
 function element(tag){
  const attrs={},handlers={},classes=new Set(),props={},captures=new Set();
  const node={tag,children:[],hidden:false,dataset:{},className:'',innerHTML:'',style:{setProperty(k,v){props[k]=v;}},
   classList:{toggle(k,on){if(on)classes.add(k);else classes.delete(k);},add:k=>classes.add(k),remove:k=>classes.delete(k),contains:k=>classes.has(k)},
   setAttribute(k,v){attrs[k]=String(v);},getAttribute:k=>attrs[k],removeAttribute:k=>delete attrs[k],
   appendChild(child){node.children.push(child);child.parent=node;},before(other){other.parent=node.parent;},
   addEventListener(k,f){handlers[k]=f;},focus(){},setPointerCapture:id=>captures.add(id),hasPointerCapture:id=>captures.has(id),releasePointerCapture:id=>captures.delete(id),
   emit(k,data={}){handlers[k]({button:0,pointerId:1,preventDefault(){},...data});},
   querySelector(selector){return node.children.find(n=>selector==='.exam-case-resizer'&&n.className==='exam-case-resizer')||null;},
   getBoundingClientRect(){return {left:100,right:1100,width:1000};}};
  nodes.push(node);return node;
 }
 const body=element('div');body.className='exam-question-body';body.innerHTML='<textarea>Mijn uitwerking blijft bewaard</textarea>';
 const caseData={id:'opgave-1',title:'Steekproeven',caseHtml:'<p>Nieuwe schone casusgegevens</p>'};
 for(let i=0;i<2;i++){const button=element('button');button.setAttribute('aria-haspopup','dialog');buttons.push(button);}
 const host={querySelector(s){if(s==='.exam-question-body')return body;return nodes.find(n=>s==='#exam-case-panel'?n.id==='exam-case-panel':n.className==='exam-case-layout')||null;},querySelectorAll:()=>buttons};
 const sandbox={host,window:{innerHeight:800,addEventListener(){},requestAnimationFrame:f=>f()},document:{createElement:element},sessionStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},examById:()=>({sections:[caseData]}),esc:String,documentHtml:(exam,kind,html)=>html};
 vm.createContext(sandbox);vm.runInContext(source.slice(start,end),sandbox);
 const attempt={exam:{id:'test',sections:[{id:'opgave-1',contentHtml:'Oude volledige sectie'}]},answers:{q1:{html:body.innerHTML}}},question={sectionId:'opgave-1'};
 return {sandbox,host,buttons,body,storage,attempt,question,nodes};
}
const f=fixture(),originalAnswer=JSON.stringify(f.attempt.answers);
f.sandbox.mountCasePanel(f.attempt,f.question);
const panel=f.host.querySelector('#exam-case-panel'),layout=f.host.querySelector('.exam-case-layout'),handle=layout.querySelector('.exam-case-resizer');
assert.equal(panel.hidden,false);assert.deepEqual(layout.children,[panel,handle,f.body],'Casus links, schuiver in het midden en de bestaande antwoordnode rechts');
assert.match(panel.innerHTML,/Nieuwe schone casusgegevens/);assert.doesNotMatch(panel.innerHTML,/Oude volledige sectie/);
assert.equal(handle.getAttribute('aria-valuenow'),'33');
for(const b of f.buttons){assert.equal(b.getAttribute('aria-expanded'),'true');assert.equal(b.getAttribute('aria-haspopup'),undefined);}
vm.runInContext('casePreferences.open=false;updateCasePanel();saveCasePreferences();',f.sandbox);
assert.equal(panel.hidden,true);assert.equal(handle.hidden,true);
for(const b of f.buttons)assert.equal(b.getAttribute('aria-expanded'),'false');
vm.runInContext('casePreferences.open=true;updateCasePanel();',f.sandbox);
for(const [key,value] of [['Home','25'],['ArrowLeft','25'],['ArrowRight','30'],['End','60'],['ArrowRight','60'],['ArrowLeft','55']]){handle.emit('keydown',{key});assert.equal(handle.getAttribute('aria-valuenow'),value);}
handle.emit('pointerdown');handle.emit('pointermove',{clientX:560});handle.emit('pointerup');assert.equal(handle.getAttribute('aria-valuenow'),'46');
handle.emit('pointerdown');handle.emit('pointermove',{clientX:1000});handle.emit('pointercancel');assert.equal(handle.getAttribute('aria-valuenow'),'60');
assert.equal(JSON.stringify(f.attempt.answers),originalAnswer);assert.equal(layout.children[2],f.body);
const restored=fixture(f.storage.get('sra-exam-case-panel-v1'));restored.sandbox.mountCasePanel(restored.attempt,restored.question);assert.equal(restored.host.querySelector('.exam-case-layout').querySelector('.exam-case-resizer').getAttribute('aria-valuenow'),'60');
const invalid=fixture('{broken');invalid.sandbox.mountCasePanel(invalid.attempt,invalid.question);assert.equal(invalid.host.querySelector('#exam-case-panel').hidden,false);
const missing=fixture();missing.sandbox.mountCasePanel(missing.attempt,{sectionId:'unknown'});assert.equal(missing.host.querySelector('#exam-case-panel'),null);assert.ok(missing.buttons.every(b=>b.hidden));
const data={window:{}};vm.runInNewContext(read('data/cirrus-exams.js'),data);
for(const exam of data.window.SRA_CIRRUS_EXAMS)for(const section of exam.sections){
 assert.ok(section.caseHtml&&section.caseText,exam.id+' '+section.id);
 assert.doesNotMatch(section.caseHtml,/antwoord-|uitwerking|sectie-/,'Alleen losse casusuitsneden');
 assert.doesNotMatch(section.caseText,/^Vraag\s+\d+\s*[.:]?\s*\(\d+\s*punt/im,'Geen vraagtekst in de casus');
 assert.doesNotMatch(section.caseText,/Nyenrode|\bNBU\b|Business University/i,'Geen bronlogo of colofon');
 for(const match of section.caseHtml.matchAll(/src="([^"]+)"/g))assert.ok(fs.existsSync(path.join(root,match[1])),match[1]);
}
assert.doesNotMatch(source,/exam-question-context/);
assert.match(read('scripts/integrate_cirrus.py'),/adapt_case_panel/);
assert.match(read('css/cirrus-integration.css'),/grid-template-columns:minmax\(0,var\(--exam-case-width,33\.333333%\)\) 14px minmax\(0,1fr\)/,'De linker kolom gebruikt de casusbreedte');
assert.match(handle.getAttribute('aria-label'),/casus links/);
console.log('OK: case-only data, default left panel, current section for old attempts, toggle without answer changes, left-offset pointer resize, right-arrow growth, bounds, display preference restore and absent case.');
