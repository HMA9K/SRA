/* Actual controller + parser; layout, four visible history rows and row deletion use browser QA. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),source=fs.readFileSync(path.join(root,'js/app.js'),'utf8'),html=fs.readFileSync(path.join(root,'index.html'),'utf8'),math=require('../js/math.js');
const storageKey='sra-calculator-history-v1',start=source.indexOf(' function initCalculator(){'),end=source.indexOf(' initCalculator();',start);
assert.ok(start>=0&&end>start,'Execute the real calculator controller');
const markup=html.match(/<section\b[^>]*id="calculator"[^>]*>[\s\S]*?<\/section>/)?.[0];
assert.ok(markup);assert.match(markup,/<section[^>]*role="dialog"[^>]*aria-modal="false"[^>]*hidden>/);assert.doesNotMatch(markup,/<dialog\b/);
function events(target={}){
 const handlers={};target.addEventListener=(type,handler)=>(handlers[type]??=[]).push(handler);
 target.dispatch=(type,e)=>{target['on'+type]?.(e);for(const handler of handlers[type]||[])handler(e);if(!e.stopped&&target.parent)target.parent.dispatch(type,e);};
 target.emit=(type,fields={})=>{const e={type,target,defaultPrevented:false,stopped:false,preventDefault(){this.defaultPrevented=true;},stopPropagation(){this.stopped=true;},...fields};target.dispatch(type,e);return e;};return target;
}
function fixture({storage=new Map(),finePointer=true,storageBlocked=false}={}){
 const document=events({documentElement:{clientWidth:1200}}),window=events({innerHeight:800,SRAMath:math,matchMedia:()=>({matches:finePointer})});
 const view=window.visualViewport=events({width:1200,height:800,offsetLeft:0,offsetTop:0}),camel=s=>s.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());let sequence=0;
 function element(tag){
  const attrs={},classes=new Set(),captures=new Set();let value='';
  const n=events({tagName:tag.toUpperCase(),parent:null,children:[],dataset:{},hidden:false,style:{},textContent:'',scrollTop:0,scrollHeight:0,
   classList:{add:k=>classes.add(k),remove:k=>classes.delete(k),contains:k=>classes.has(k),toggle(k,on){on=on??!classes.has(k);if(on)classes.add(k);else classes.delete(k);return on;}},
   setAttribute(k,v){attrs[k]=String(v);if(k==='class')n.className=v;else if(k==='id')n.id=v;else if(k.startsWith('data-'))n.dataset[camel(k.slice(5))]=String(v);else if(k==='hidden')n.hidden=true;},
   getAttribute(k){return k==='class'?n.className:k.startsWith('data-')?n.dataset[camel(k.slice(5))]??null:attrs[k]??null;},removeAttribute:k=>delete attrs[k],
   append(...xs){for(const x of xs){n.children.push(x);x.parent=n;}},replaceChildren(...xs){for(const x of n.children)x.parent=null;n.children=[];n.append(...xs);},
   contains(x){return x===n||n.children.some(c=>c.contains(x));},
   matches(s){return s.split(',').some(p=>{p=p.trim();if(p[0]==='#')return n.id===p.slice(1);if(p[0]==='.')return classes.has(p.slice(1));const a=p.match(/^\[([^=\]]+)(?:="([^"]*)")?\]$/);return a?n.getAttribute(a[1])!==null&&(a[2]===undefined||n.getAttribute(a[1])===a[2]):n.tagName===p.toUpperCase();});},
   closest(s){return n.matches(s)?n:n.parent?.closest?.(s)||null;},querySelectorAll(s){return n.children.flatMap(c=>[...(c.matches(s)?[c]:[]),...c.querySelectorAll(s)]);},querySelector(s){return n.querySelectorAll(s)[0]||null;},
   focus(){document.activeElement=n;n.emit('focusin');},setSelectionRange(a,b){n.selectionStart=a;n.selectionEnd=b;},
   setRangeText(text,a,b){value=value.slice(0,a)+text+value.slice(b);n.selectionStart=n.selectionEnd=a+text.length;},
   setPointerCapture:id=>captures.add(id),hasPointerCapture:id=>captures.has(id),releasePointerCapture:id=>captures.delete(id),
   getBoundingClientRect(){const width=Math.min(parseFloat(n.style.width)||304,parseFloat(n.style.maxWidth)||Infinity),height=Math.min(n.querySelector('[data-calc-body]')?.hidden?44:parseFloat(n.style.height)||450,parseFloat(n.style.maxHeight)||Infinity),left=parseFloat(n.style.left)||0,top=parseFloat(n.style.top)||0;return {left,top,width,height,right:left+width,bottom:top+height};}
  });
  Object.defineProperties(n,{className:{get:()=>[...classes].join(' '),set:v=>{classes.clear();String(v).split(/\s+/).filter(Boolean).forEach(k=>classes.add(k));}},value:{get:()=>value,set:v=>{value=String(v);n.selectionStart=n.selectionEnd=value.length;}},isConnected:{get:()=>n.parent===document||!!n.parent?.isConnected}});n.value='';return n;
 }
 document.body=element('body');document.body.parent=document;document.createElement=element;document.querySelector=s=>document.body.querySelector(s);
 // Parse the real calculator markup: missing or renamed controls fail this fixture.
 const stack=[document.body],voids=new Set(['input','br','hr','img','meta','link']);
 for(const [,closing,tag,attrs] of markup.matchAll(/<(\/?)([a-z][\w-]*)([^>]*)>/gi)){
  if(closing){stack.pop();continue;}const n=element(tag);for(const a of attrs.matchAll(/([^\s=/>]+)(?:="([^"]*)")?/g))n.setAttribute(a[1],a[2]??'');stack.at(-1).append(n);if(!voids.has(tag.toLowerCase()))stack.push(n);
 }
 const opener=element('button');opener.setAttribute('id','calc-open');document.body.append(opener);const answer=element('textarea');document.body.append(answer);
 const localStorage={getItem(k){if(storageBlocked)throw Error('Opslag geblokkeerd');return storage.get(k)??null;},setItem(k,v){if(storageBlocked)throw Error('Opslag geblokkeerd');storage.set(k,String(v));}};
 vm.runInNewContext(source.slice(start,end)+'\ninitCalculator();',{window,document,localStorage,sessionStorage:localStorage,innerHeight:800,navigator:{},crypto:{randomUUID:()=>`test-${++sequence}`},$:s=>document.querySelector(s)});
 const panel=document.querySelector('#calculator'),input=panel.querySelector('[data-calc-input]');
 const key=k=>{const b=panel.querySelectorAll('[data-calc-key],[data-key]').find(n=>(n.dataset.calcKey??n.dataset.key)===k);assert.ok(b,`Knop ${k} bestaat`);b.emit('click');};
 return {window,document,view,storage,panel,input,opener,answer,key,type(v){input.value=v;input.emit('input');},api:window.SRACalculator,find:s=>panel.querySelector(s)};
}
// Precedence, Dutch notation, functions, scientific notation and safe input.
for(const [expression,expected] of [['2+3*4',14],['(2+3)*4',20],['-2^2',-4],['2^3^2',512],['1,5×4',6],['sqrt(81)+2^3',17],['1e3/4',250],['ln(exp(2))',2]])assert.equal(math.calc(expression),expected,expression);
for(const expression of ['1/0','sqrt(-1)','ln(0)','2+','(2+3','globalThis.process.exit()'])assert.throws(()=>math.calc(expression),undefined,expression);
const f=fixture(),{panel,input,opener,answer,key,api}=f,type=f.type;
const output=f.find('[data-calc-output]'),body=f.find('[data-calc-body]'),handle=f.find('[data-calc-move]'),minimize=f.find('[data-calc-minimize]');
opener.focus();opener.emit('click');assert.equal(panel.hidden,false);assert.equal(opener.getAttribute('aria-expanded'),'true');assert.equal(f.document.activeElement,input);assert.equal(panel.style.left,'888px');assert.equal(panel.style.top,'104px');
// Caret replacement and Enter commit: result in history, empty next input.
type('2+3');input.setSelectionRange(2,3);key('7');assert.equal(input.value,'2+7');assert.equal(input.emit('keydown',{key:'Enter'}).defaultPrevented,true);
assert.equal(api.getState().lastValue,9);assert.equal(input.value,'');assert.equal(api.getState().history.at(-1).expression,'2+7');assert.equal(api.getState().history.at(-1).value,9);assert.equal(output.hidden,true);
type('2+7');input.setSelectionRange(3,3);key('⌫');assert.equal(input.value,'2+');key('sqrt(');assert.equal(input.value,'2+sqrt(');
type('sqrt(81)+2^3');input.emit('keydown',{key:'='});assert.equal(api.getState().lastValue,17);key('+');key('5');assert.equal(input.value,'17+5');key('=');assert.equal(api.getState().lastValue,22);key('2');assert.equal(input.value,'2');
// Invalid input retains the last valid result and creates no history entry.
const historyCount=api.getState().history.length;
type('1/0');key('=');assert.equal(api.getState().errorShown,true);assert.equal(input.getAttribute('aria-invalid'),'true');assert.equal(output.hidden,false);assert.equal(input.value,'1/0');assert.equal(api.getState().lastValue,22);assert.equal(api.getState().history.length,historyCount);
type('4+5');assert.equal(api.getState().errorShown,false);assert.equal(output.hidden,true);assert.equal(input.getAttribute('aria-invalid'),null);type('8'.repeat(180));key('1');assert.equal(input.value.length,180);assert.equal(api.getState().errorShown,true);
// Memory survives C and negative recall keeps its sign when used in multiplication.
type('12');key('M+');assert.equal(api.getState().memory,12);type('3');key('M-');assert.equal(api.getState().memory,9);key('C');assert.equal(api.getState().memory,9);key('MR');assert.equal(input.value,'9');key('MC');assert.equal(api.getState().memory,0);
type('4');key('M-');assert.equal(api.getState().memory,-4);type('2*');key('MR');assert.equal(input.value,'2*(-4)');key('=');assert.equal(api.getState().lastValue,-8);type('7+1');
// Outside editors retain their own keyboard behavior and receive focus on close.
answer.value='Mijn eigen uitwerking';answer.focus();const outsideValue=input.value;
for(const k of ['7','Enter','Tab','Escape'])assert.equal(answer.emit('keydown',{key:k}).defaultPrevented,false);
assert.equal(answer.value,'Mijn eigen uitwerking');assert.equal(input.value,outsideValue);assert.equal(panel.hidden,false);assert.equal(f.document.activeElement,answer);assert.equal(panel.emit('keydown',{key:'Tab'}).defaultPrevented,false);assert.equal(panel.emit('keydown',{key:'7',ctrlKey:true}).defaultPrevented,false);
// Fixture dimensions test controller clamping only; actual CSS is browser-tested.
handle.emit('pointerdown',{isPrimary:true,button:0,pointerId:4,clientX:908,clientY:124});handle.emit('pointermove',{pointerId:5,clientX:-500,clientY:-500});assert.equal(panel.style.left,'888px');
handle.emit('pointermove',{pointerId:4,clientX:-500,clientY:-500});assert.equal(panel.style.left,'8px');assert.equal(panel.style.top,'8px');handle.emit('pointermove',{pointerId:4,clientX:5000,clientY:5000});assert.equal(panel.style.left,'888px');assert.equal(panel.style.top,'342px');
handle.emit('pointerup',{pointerId:4});assert.equal(handle.hasPointerCapture(4),false);handle.emit('pointermove',{pointerId:4,clientX:0,clientY:0});assert.equal(panel.style.left,'888px');
Object.assign(f.view,{width:256,height:188,offsetLeft:37,offsetTop:55});f.view.emit('resize');assert.equal(panel.style.left,'45px');assert.equal(panel.style.top,'63px');assert.equal(panel.getBoundingClientRect().width,240);assert.equal(panel.getBoundingClientRect().height,172);
Object.assign(f.view,{offsetLeft:67,offsetTop:85});f.view.emit('scroll');assert.equal(panel.style.left,'75px');assert.equal(panel.style.top,'93px');minimize.focus();minimize.emit('click');assert.equal(body.hidden,true);assert.equal(minimize.getAttribute('aria-expanded'),'false');assert.equal(input.value,outsideValue);
minimize.emit('click');assert.equal(body.hidden,false);assert.equal(minimize.getAttribute('aria-expanded'),'true');assert.equal(api.getState().lastValue,-8);Object.assign(f.view,{width:1200,height:800,offsetLeft:0,offsetTop:0});f.window.emit('resize');
handle.focus();handle.emit('keydown',{key:'Home'});assert.equal(panel.style.left,'888px');assert.equal(panel.style.top,'104px');handle.emit('keydown',{key:'ArrowLeft',shiftKey:true});assert.equal(panel.style.left,'848px');handle.emit('keydown',{key:'ArrowUp'});assert.equal(panel.style.top,'94px');assert.equal(handle.emit('keydown',{key:'Tab'}).defaultPrevented,false);
input.focus();input.emit('keydown',{key:'Escape'});assert.equal(panel.hidden,true);assert.equal(f.document.activeElement,answer,'Sluiten keert terug naar de laatst gebruikte vraag');assert.equal(opener.getAttribute('aria-expanded'),'false');
// New controller instance tests persisted formula, result, memory and history.
type('19+4');f.window.emit('pagehide');const saved=JSON.parse(f.storage.get(storageKey));assert.equal(saved.formula,'19+4');assert.equal(saved.memory,-4);assert.equal(saved.lastValue,-8);assert.equal(saved.entries.length,historyCount+1);
const restored=fixture({storage:new Map(f.storage)});restored.opener.emit('click');assert.equal(restored.input.value,'19+4');assert.equal(restored.api.getState().memory,-4);assert.equal(restored.api.getState().lastValue,-8);assert.equal(JSON.stringify(restored.api.getState().history),JSON.stringify(saved.entries));restored.input.emit('keydown',{key:'Enter'});assert.equal(restored.api.getState().lastValue,23);assert.equal(restored.api.getState().history.length,saved.entries.length+1);
const touch=fixture({finePointer:false});touch.opener.emit('click');assert.equal(touch.document.activeElement,touch.panel);
const corrupt=fixture({storage:new Map([[storageKey,'{broken']])});corrupt.type('6*7');corrupt.key('=');assert.equal(corrupt.api.getState().lastValue,42);
const invalid=fixture({storage:new Map([[storageKey,JSON.stringify({memory:'9',lastValue:null,entries:[{id:'valid',expression:'2+2',value:4},{id:'bad',expression:'1/0',value:null},{id:3,expression:'3',value:3}],formula:'5'.repeat(200)})]])});assert.equal(invalid.api.getState().memory,0);assert.equal(invalid.api.getState().lastValue,0);assert.equal(invalid.api.getState().history.length,1);assert.equal(invalid.input.value.length,180);
const blocked=fixture({storageBlocked:true});blocked.type('6*7');blocked.key('=');assert.equal(blocked.api.getState().lastValue,42);assert.equal(blocked.find('.calc-storage-note').textContent,'Browseropslag niet beschikbaar');
console.log('Calculator: parser, niet-modale invoer, caret, toetsen, fouten, geheugen, historieopslag, herladen, viewport en terugfocus geslaagd.');