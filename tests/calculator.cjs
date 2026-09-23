const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const source=fs.readFileSync(path.join(root,'js/app.js'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.match(html,/<section id="calculator" role="region"[^>]*hidden>/);
assert.doesNotMatch(html,/<dialog id="calculator"/,'De vraag moet bedienbaar blijven naast de rekenmachine');
const start=source.indexOf(' function initCalculator(){'),end=source.indexOf(' initCalculator();',start);
assert.ok(start>=0&&end>start);

function events(target={}){
 const handlers={};
 target.addEventListener=(type,handler)=>(handlers[type]??=[]).push(handler);
 target.emit=(type,fields={})=>{
  const e={type,target,defaultPrevented:false,stopped:false,preventDefault(){this.defaultPrevented=true;},stopPropagation(){this.stopped=true;},...fields};
  target['on'+type]?.(e);for(const handler of handlers[type]||[])handler(e);
  if(!e.stopped&&target.parent)target.parent.dispatch(type,e);
  return e;
 };
 target.dispatch=(type,e)=>{for(const handler of handlers[type]||[])handler(e);if(!e.stopped&&target.parent)target.parent.dispatch(type,e);};
 return target;
}
const document=events({documentElement:{clientWidth:1200}}),window=events({innerHeight:800,SRAMath:require('../js/math.js')});
const view=window.visualViewport=events({width:1200,height:800,offsetLeft:0,offsetTop:0});
const nodes=new Map();
function element(id,parent=document){
 const attributes={},props={},classes=new Set(),captures=new Set();
 const node=events({id,parent,hidden:false,isConnected:true,value:'',selectionStart:0,selectionEnd:0,textContent:'',
  style:{setProperty(k,v){props[k]=v;}},
  classList:{add:k=>classes.add(k),remove:k=>classes.delete(k),contains:k=>classes.has(k)},
  setAttribute:(k,v)=>attributes[k]=v,getAttribute:k=>attributes[k],
  focus(){document.activeElement=node;node.emit('focusin');},
  contains(other){return other===node||!!other?.parent&&node.contains(other.parent);},
  setPointerCapture:id=>captures.add(id),hasPointerCapture:id=>captures.has(id),releasePointerCapture:id=>captures.delete(id),
  setRangeText(text,from,to){node.value=node.value.slice(0,from)+text+node.value.slice(to);node.selectionStart=node.selectionEnd=from+text.length;},
  getBoundingClientRect(){return {left:parseFloat(node.style.left)||0,top:parseFloat(node.style.top)||0,width:Math.min(304,parseFloat(props['--calc-max-width'])||304),height:Math.min(nodes.get('#calc-body').hidden?44:450,parseFloat(props['--calc-max-height'])||450)};}
 });
 nodes.set(id,node);return node;
}
const panel=element('#calculator'),opener=element('#calc-open');panel.hidden=true;
for(const id of ['#calc-expression','#calc-result','#calc-body','#calc-move','#calc-minimize','#calc-close','#calc-keys'])element(id,panel);
const input=nodes.get('#calc-expression'),result=nodes.get('#calc-result'),body=nodes.get('#calc-body'),handle=nodes.get('#calc-move'),minimize=nodes.get('#calc-minimize');
const answer=element('#answer-editor');answer.contentEditable='true';
let resizeObserver;
window.ResizeObserver=class{constructor(callback){resizeObserver=callback;}observe(){}};
vm.runInNewContext(source.slice(start,end)+'\ninitCalculator();',{window,document,$:id=>nodes.get(id),esc:s=>String(s)});
opener.focus();opener.emit('click');
assert.equal(panel.hidden,false);assert.equal(opener.getAttribute('aria-expanded'),'true');
assert.equal(document.activeElement,input);assert.equal(panel.style.left,'888px');assert.equal(panel.style.top,'104px');

// The real evaluator still supports keyboard entry and inserting calculator keys at the caret.
input.value='2+3';input.selectionStart=2;input.selectionEnd=3;
const key=k=>nodes.get('#calc-keys').emit('click',{target:{closest:()=>({dataset:{key:k}})}});
key('7');assert.equal(input.value,'2+7');input.emit('keydown',{key:'Enter'});assert.equal(result.textContent,'9');
key('⌫');assert.equal(input.value,'2+');key('sqrt(');assert.equal(input.value,'2+sqrt(');
input.value='sqrt(81)+2^3';input.emit('keydown',{key:'Enter'});assert.equal(result.textContent,'17');

// An editor outside the panel keeps its input, Enter, Tab and Escape behavior.
answer.focus();const outsideValue=input.value;
for(const key of ['7','Enter','Tab','Escape'])assert.equal(answer.emit('keydown',{key}).defaultPrevented,false);
assert.equal(input.value,outsideValue);assert.equal(panel.hidden,false);assert.equal(document.activeElement,answer);

// Mouse and touch use pointer capture; an unrelated pointer must not move the panel.
handle.emit('pointerdown',{isPrimary:true,button:0,pointerId:4,clientX:908,clientY:124});
handle.emit('pointermove',{pointerId:5,clientX:-500,clientY:-500});assert.equal(panel.style.left,'888px');
handle.emit('pointermove',{pointerId:4,clientX:-500,clientY:-500});assert.equal(panel.style.left,'8px');assert.equal(panel.style.top,'8px');
handle.emit('pointermove',{pointerId:4,clientX:5000,clientY:5000});assert.equal(panel.style.left,'888px');assert.equal(panel.style.top,'342px');
handle.emit('pointerup',{pointerId:4});assert.equal(handle.hasPointerCapture(4),false);
handle.emit('pointermove',{pointerId:4,clientX:0,clientY:0});assert.equal(panel.style.left,'888px');

// Panning/zooming and the mobile keyboard may shrink and offset the visible viewport.
Object.assign(view,{width:256,height:188,offsetLeft:37,offsetTop:55});view.emit('resize');
assert.equal(panel.style.left,'45px');assert.equal(panel.style.top,'63px');
assert.equal(panel.getBoundingClientRect().width,240);assert.equal(panel.getBoundingClientRect().height,172);
Object.assign(view,{offsetLeft:67,offsetTop:85});view.emit('scroll');
assert.equal(panel.style.left,'75px');assert.equal(panel.style.top,'93px');

// Minimize and restore preserve the expression and result, including on a small viewport.
minimize.focus();minimize.emit('click');assert.equal(body.hidden,true);assert.equal(minimize.getAttribute('aria-expanded'),'false');
assert.equal(input.value,outsideValue);assert.equal(result.textContent,'17');
minimize.emit('click');assert.equal(body.hidden,false);assert.equal(minimize.getAttribute('aria-expanded'),'true');
assert.equal(panel.style.top,'93px');assert.equal(input.value,outsideValue);

// Keyboard positioning cannot escape the visible area; Home restores the side position.
Object.assign(view,{width:1200,height:800,offsetLeft:0,offsetTop:0});window.emit('resize');
handle.focus();handle.emit('keydown',{key:'Home'});assert.equal(panel.style.left,'888px');assert.equal(panel.style.top,'104px');
handle.emit('keydown',{key:'ArrowLeft',shiftKey:true});assert.equal(panel.style.left,'848px');
handle.emit('keydown',{key:'ArrowUp'});assert.equal(panel.style.top,'94px');
assert.equal(handle.emit('keydown',{key:'Tab'}).defaultPrevented,false,'Geen focusval');
resizeObserver();assert.equal(panel.style.left,'848px');
input.focus();input.emit('keydown',{key:'Escape'});assert.equal(panel.hidden,true);assert.equal(document.activeElement,answer,'Sluiten keert terug naar de laatst gebruikte vraag');
assert.equal(opener.getAttribute('aria-expanded'),'false');
opener.emit('click');assert.equal(input.value,outsideValue);assert.equal(result.textContent,'17');assert.equal(panel.hidden,false);
console.log('Calculator: niet-modaal, invoerfocus, evaluator, pointer/toetsenbord, viewport en behoud van berekening geslaagd.');
