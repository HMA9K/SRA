/* Gemaakt met Codex. Interaction regression checks for all SRA experiments.
 * No browser dependency is needed: this deliberately small DOM implements the
 * controls/events used by mount(). It is not a substitute for visual browser QA.
 * The production rendering and handlers run unchanged, including the actual SVG.
 */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const M = require('../js/math.js');
const LabLayout = require('../js/lab-layout.js');

const decode = text => String(text).replace(/&(?:amp|lt|gt|quot|#39);/g, x => ({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"}[x]));
class Element {
  constructor(tag='div', attrs={}, parent=null) {
    this.tagName=tag.toLowerCase(); this.attrs=attrs; this.parentElement=parent;
    this.children=[]; this.listeners={}; this._html=''; this._value=attrs.value;this.renderCount=0;
    this.clientWidth=900; this.isConnected=true;
    this.dataset=Object.fromEntries(Object.entries(attrs).filter(([k])=>k.startsWith('data-')).map(([k,v])=>[k.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase()),v]));
    this.classList={contains:c=>(this.attrs.class||'').split(/\s+/).includes(c),add:c=>{if(!this.classList.contains(c))this.attrs.class=((this.attrs.class||'')+' '+c).trim();},remove:c=>{this.attrs.class=(this.attrs.class||'').split(/\s+/).filter(x=>x!==c).join(' ');},toggle:(c,on)=>{if(on===undefined)on=!this.classList.contains(c);this.classList[on?'add':'remove'](c);return on;}};
  }
  get name(){return this.attrs.name||'';}
  get type(){return this.attrs.type||'';}
  get hidden(){return Object.hasOwn(this.attrs,'hidden');}
  set hidden(v){if(v)this.attrs.hidden='';else delete this.attrs.hidden;}
  get disabled(){return Object.hasOwn(this.attrs,'disabled');}
  set disabled(v){if(v)this.attrs.disabled='';else delete this.attrs.disabled;}
  get readOnly(){return Object.hasOwn(this.attrs,'readonly');}
  set readOnly(v){if(v)this.attrs.readonly='';else delete this.attrs.readonly;}
  get value(){return String(this._value??(this.tagName==='select'?this.querySelector('option')?.value??'':''));}
  set value(v){
    if(this.type==='range'){
      const low=Number(this.attrs.min??0), high=Number(this.attrs.max??100);
      v=Number(v);v=Number.isFinite(v)?Math.max(low,Math.min(high,v)):(low+high)/2;
      // Native ranges quantize to their step; number inputs preserve typed precision.
      if(this.attrs.step!=='any'){
        const step=Number(this.attrs.step||1);
        v=Math.max(low,Math.min(high,Number((low+Math.round((v-low)/step)*step).toPrecision(15))));
      }
    }
    this._value=String(v);
  }
  set step(v){this.attrs.step=String(v);}
  get step(){return this.attrs.step;}
  set min(v){this.attrs.min=String(v);}
  get min(){return this.attrs.min;}
  set max(v){this.attrs.max=String(v);}
  get max(){return this.attrs.max;}
  setAttribute(k,v){this.attrs[k]=String(v);}
  getAttribute(k){return this.attrs[k]??null;}
  removeAttribute(k){delete this.attrs[k];}
  hasAttribute(k){return Object.hasOwn(this.attrs,k);}
  get innerHTML(){return this._html;}
  set innerHTML(html){
    this._html=String(html); this.children=[];this.renderCount++;
    const stack=[this], voids=new Set(['input','br','hr','img','meta','link','source']);
    for(const match of this._html.matchAll(/<\/?[a-zA-Z](?:[^"'<>]|"[^"]*"|'[^']*')*>/g)){
      const token=match[0];
      if(token.startsWith('</')) {const tag=token.match(/^<\/(\w+)/)?.[1];while(stack.length>1){if(stack.pop().tagName===tag)break;}continue;}
      const tag=token.match(/^<(\w[\w-]*)/)[1], attrs={};
      const body=token.slice(tag.length+1,token.endsWith('/>')?-2:-1);
      for(const a of body.matchAll(/([^\s=<>/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g))attrs[a[1]]=decode(a[2]??a[3]??a[4]??'');
      const parent=stack[stack.length-1], child=new Element(tag,attrs,parent);parent.children.push(child);
      if(!voids.has(tag)&&!token.endsWith('/>'))stack.push(child);
    }
  }
  matches(selector){
    return selector.split(',').some(s=>{
      s=s.trim();const not=s.match(/:not\(([^)]+)\)/);if(not){if(this.matches(not[1]))return false;s=s.replace(not[0],'');}
      const base=s.replace(/\[[^\]]*\]/g,''),tag=base.match(/^[a-z][\w-]*/i)?.[0];if(tag&&tag!==this.tagName)return false;
      for(const m of base.matchAll(/#([\w-]+)/g))if(this.attrs.id!==m[1])return false;
      for(const m of base.matchAll(/\.([\w-]+)/g))if(!this.classList.contains(m[1]))return false;
      for(const m of s.matchAll(/\[([^\]=\s]+)(?:\s*=\s*["']?([^\]"']*)["']?)?\]/g)){if(!this.hasAttribute(m[1]))return false;if(m[2]!==undefined&&this.attrs[m[1]]!==m[2])return false;}
      return true;
    });
  }
  querySelectorAll(s){return this.children.flatMap(c=>[...(c.matches(s)?[c]:[]),...c.querySelectorAll(s)]);}
  querySelector(s){return this.querySelectorAll(s)[0]||null;}
  closest(s){for(let el=this;el;el=el.parentElement)if(el.matches(s))return el;return null;}
  addEventListener(type,fn){(this.listeners[type]??=[]).push(fn);}
  removeEventListener(type,fn){this.listeners[type]=(this.listeners[type]||[]).filter(x=>x!==fn);}
  emit(type){const event={target:this,type,preventDefault(){}};for(let el=this;el;el=el.parentElement)for(const listener of el.listeners[type]||[])listener(event);}
}
const observers=[];
class ResizeObserver {
  constructor(fn){this.fn=fn;this.active=false;observers.push(this);}
  observe(el){this.el=el;this.active=true;}
  disconnect(){this.active=false;}
  fire(){if(this.active)this.fn([{target:this.el}]);}
}
const sandbox={window:{SRAMath:M,SRALabLayout:LabLayout},ResizeObserver};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../js/labs.js'),'utf8'),sandbox);
const L=sandbox.window.SRALabs;
const html=c=>c.querySelector('.lab-result').innerHTML;
const charts=c=>Array.from(html(c).matchAll(/<svg\b[\s\S]*?<\/svg>|<div class="variance-bar"[^>]*>[\s\S]*?<\/div>/g),m=>m[0]);
const healthy=(c,label)=>{assert.doesNotMatch(html(c),/class="lab-error"/,label+': '+html(c));assert.doesNotMatch(html(c),/NaN|Infinity|∞/,label);assert.ok(html(c).length>100,label);};
const control=(c,name)=>{const el=c.querySelector(`[name="${name}"]`);assert.ok(el,'Missing control '+name);return el;};
function change(c,name,value,event='input',useSlider=true){
  const number=control(c,name), range=c.querySelector(`[data-sync="${name}"]`), target=useSlider&&range?range:number;
  target.value=value;target.emit(event);
  if(range){assert.equal(Number(number.value),Number(value),name+' slider → number');assert.equal(Number(range.value),Math.max(Number(range.min),Math.min(Number(range.max),Number(value))),name+' number → slider');}
  return html(c);
}
let interactions=0;
function mount(id){const c=new Element();L.mount(id,c);healthy(c,id+' default');assert.equal(observers.filter(o=>o.active&&o.el===c).length,1,'One observer per mounted lab');assert.ok(c.querySelector('.lab-live').innerHTML.length>50,id+' has a direct visible result');assert.equal(c.querySelector('.lab-all-results').hasAttribute('open'),false,'Long calculation starts collapsed');return c;}
function changed(id,name,value,setup={},graph=true){
  const c=mount(id);for(const [key,v]of Object.entries(setup))change(c,key,v,'change',false);
  if(id==='interval'&&name==='t')change(c,'criticalMode','manual','change',false);
  assert.equal(control(c,name).disabled,false,id+'.'+name+' is usable in this mode');
  const before=html(c),beforeChart=charts(c).join('');change(c,name,value,'input');healthy(c,id+'.'+name);
  assert.notEqual(html(c),before,id+'.'+name+' must update the result');
  const analysed=LabLayout.analyse(html(c)),chosen=c.querySelector('[data-lab-view]').value;
  const expectedView=LabLayout.choose(id,name,chosen,analysed.views,c.querySelector('[name="mode"]')?.value);
  assert.equal(chosen,expectedView,id+'.'+name+' shows the relevant result');
  assert.equal(c.querySelector('.lab-live').innerHTML,analysed.metrics+analysed.views.find(v=>v.key===chosen).html,id+'.'+name+' direct preview matches current calculation');
  if(graph)assert.notEqual(charts(c).join(''),beforeChart,id+'.'+name+' must update a chart');
  // The number control must drive exactly the same calculation as its slider.
  if(c.querySelector(`[data-sync="${name}"]`)){
    const expected=html(c);change(c,name,value,'change',false);assert.equal(html(c),expected,id+'.'+name+' input/change agreement');
  }
  interactions++;
}

// Every named control is exercised with a valid, materially different input.
// False = it affects a numerical answer, not the statistical object in the chart.
const scenarios={
  spreiding:{values:'80; 90; 110; 200'},
  interval:{N:1200,n:200,mean:100,sd:50,t:2.5,confidence:98},
  schatter:{N:1200,n:200,mean:100,sd:50,t:2.5},
  strata:{n:150,N1:800,N2:600,s1:40,s2:50,method:'evenredig'},
  regressie:{b0:12,b1:3},
  anova:{n:[50,false],k:[2,false],SSR:700,SSE:201},
  toets:{p:.2,alpha:.08,direction:'negative',sign:'negative'},
  diagnose:{strength:2},
  voorspelling:{b0:10,b1:.15,x0:280,xbar:250,n:80,sx:45,se:2,t:2.5},
  transformatie:{model:'log',b0:2,b1:.7,x:25},
  populatie:{n:10,selection:'cheap',offset:5},
  verschil:{N:4000,n:200,B:2000000,meanError:-47,sdError:30,t:2.5},
  quotient:{N:1200,n:200,B:600000,sumW:18000,sumB:22000,sw:45,sb:50,r:.7,t:2.5},
  regressieschatter:{N:2300,n:200,B:2000000,mw:1000,mb:950,sw:100,sb:100,r:.7,t:2.5},
  omvang:{N:2500,E:2500,sd:110,r:.5,t:2.5,already:[250,false]},
  meervoudig:{age:40,rating:5,group:'1',b0:1000,bAge:60,bRating:100,bDummy:1500},
  modelbouw:{auxR2:.5,n:[120,false],k:[4,false],q:[2,false],SSRsmall:[750,false],SSRfull:[900,false],MSE:[20,false]},
  validatie:{y1:20,y2:25,y3:30,trainMSE:[10,false]},
  keuzeroute:{goal:['prediction',false],pattern:['ratio',false]}
};
assert.deepEqual([...L.ids].sort(),Object.keys(scenarios).sort());
for(const [id,fields]of Object.entries(scenarios)){
  if(id!=='keuzeroute')assert.ok(charts(mount(id)).length,id+' has a chart');
  for(const [name,entry]of Object.entries(fields)){
    const [value,graph]=Array.isArray(entry)?entry:[entry,true];
    const setup=id==='strata'?{method:'neyman'}:id==='toets'&&name==='sign'?{direction:'positive'}:{};
    changed(id,name,value,setup,graph);
  }
  // Resizing must not reset the typed values or leave an invalid graph behind.
  const c=mount(id),state=c.querySelectorAll('[name]').map(el=>[el.name,el.value]);
  const result=c.querySelector('.lab-result'),renders=result.renderCount;
  c.clientWidth=350;c.querySelector('.lab-result').clientWidth=316;observers.at(-1).fire();healthy(c,id+' resized');
  assert.equal(result.renderCount,renders+1,id+' resize recalculates exactly once');
  assert.deepEqual(c.querySelectorAll('[name]').map(el=>[el.name,el.value]),state,id+' resize preserves inputs');
}

// All select options and diagnosis submodes are exercised through change events.
for(const [id,names]of Object.entries({strata:['method'],toets:['direction','sign'],transformatie:['model'],populatie:['selection'],keuzeroute:['goal','pattern']})){
  const c=mount(id);for(const name of names){
    if(id==='keuzeroute'&&name==='pattern')change(c,'goal','total','change',false);
    if(id==='toets'&&name==='sign')change(c,'direction','positive','change',false);
    for(const option of control(c,name).querySelectorAll('option')){change(c,name,option.value,'change',false);healthy(c,id+'.'+name+'='+option.value);interactions++;}
  }
}
for(const [mode,fields]of Object.entries({residual:{pattern:'funnel',strength:2},normal:{skew:1,n:[40,false]},outlier:{z:3.5,n:101},distance:{distance:'cd',average:1.5,distanceSD:1.5,maximum:7},dw:{d:1,dL:1.2,dU:1.6}})){
  const c=mount('diagnose');change(c,'mode',mode,'change',false);healthy(c,'diagnose '+mode);
  for(const group of c.querySelectorAll('[data-modes]'))assert.equal(group.hidden,!group.dataset.modes.split(' ').includes(mode),'mode field visibility');
  for(const [name,entry]of Object.entries(fields)){const [value,graph]=Array.isArray(entry)?entry:[entry,true];changed('diagnose',name,value,{mode},graph);}
  if(mode==='residual')for(const option of control(c,'pattern').querySelectorAll('option')){change(c,'pattern',option.value,'change',false);healthy(c,'residual '+option.value);}
}

// Statistically intentional independence: do not make irrelevant sliders alter data.
{
  const c=mount('interval'),margin=c=>charts(c).find(s=>s.includes('onzekerheidsmarge')),before=margin(c);assert.ok(before);change(c,'mean',120);assert.equal(margin(c),before,'Mean does not change the sampling margin');
  const selected=html(c);change(c,'confidence',98);assert.notEqual(html(c),selected,'Confidence changes the tail schema');
}
// Mode-specific controls must be visibly unavailable when they cannot matter.
{
  const c=mount('interval');
  assert.ok(c.querySelector('[name="criticalMode"]'),'Interval supports automatic and manual critical t');
  assert.equal(control(c,'t').readOnly,true,'Automatic t cannot be edited independently');
  const t=Number(control(c,'t').value),before=html(c);change(c,'confidence',99);healthy(c,'Confidence changes automatic t');
  assert.ok(Number(control(c,'t').value)>t,'Higher confidence requires a larger t');assert.notEqual(html(c),before);
  change(c,'criticalMode','manual','change',false);assert.equal(control(c,'t').readOnly,false);assert.equal(control(c,'confidence').disabled,true);
  const fixedT=control(c,'t').value;change(c,'n',200);assert.equal(control(c,'t').value,fixedT,'Manual t is retained when n changes');
  change(c,'t','','input',false);assert.match(html(c),/lab-error/,'Empty manual t is reported');
  change(c,'criticalMode','auto','change',false);healthy(c,'Automatic t recovers from an empty manual value');
  change(c,'N',500,'input',false);assert.equal(Number(c.querySelector('[data-sync="n"]').max),500,'Sample slider follows population N');
  for(const [id,selector,initial,other]of [
    ['strata','method','evenredig','neyman'],['populatie','selection','cheap','spread'],['toets','direction','two','positive'],['keuzeroute','goal','prediction','total']
  ]){
    const names={strata:['s1','s2'],populatie:['offset'],toets:['sign'],keuzeroute:['pattern']}[id],el=mount(id);
    change(el,selector,initial,'change',false);for(const name of names)assert.equal(control(el,name).disabled,true,id+'.'+name+' is inactive');
    change(el,selector,other,'change',false);for(const name of names)assert.equal(control(el,name).disabled,false,id+'.'+name+' reactivates');
  }
  for(const [id,name,bad,activeName,active,inactive]of [
    ['strata','s1',-1,'method','neyman','evenredig'],
    ['strata','s2','','method','neyman','evenredig'],
    ['populatie','offset','','selection','spread','cheap'],
    ['populatie','offset',-1,'selection','spread','cheap']
  ]){
    const el=mount(id);change(el,activeName,active,'change',false);
    const input=control(el,name);input.value=bad;input.emit('input');assert.match(html(el),/lab-error/);
    change(el,activeName,inactive,'change',false);healthy(el,id+' ignores inactive invalid '+name);
    assert.equal(input.value,String(bad),'Mode switch retains typed value');
    change(el,activeName,active,'change',false);assert.match(html(el),/lab-error/,'Invalid value is checked again in its active mode');
  }
  const el=mount('regressie');L.mount('regressie',el);
  const result=el.querySelector('.lab-result'),count=result.renderCount;change(el,'b1',3);
  assert.equal(result.renderCount,count+1,'Remount removes previous input handler');
  for(const [id,name,value,setup]of [
    ['regressie','b1',.123456789],['anova','SSR',1351.262],['anova','SSE',44.105],
    ['voorspelling','x0',228.12345],['verschil','sdError',13.6406405],
    ['regressieschatter','mb',164500/180],['omvang','sd',82.12345],
    ['meervoudig','bAge',38.495],['meervoudig','bDummy',2237.947],
    ['toets','p',.03012345],['diagnose','maximum',4.245,{mode:'distance'}]
  ]){
    const c=mount(id);for(const [key,v]of Object.entries(setup||{}))change(c,key,v,'change',false);
    change(c,name,value,'input',false);healthy(c,id+' typed precision');
    assert.equal(Number(c.querySelector(`[data-sync="${name}"]`).value),value,id+'.'+name+' slider preserves typed precision');interactions++;
  }
}
// Check geometry, not merely changing labels. A reference trace prevents auto
// scaling from making a changed statistical result look like the same graph.
function svgShapes(svg,selector){const root=new Element();root.innerHTML=svg;return root.querySelectorAll(selector);}
function polyline(svg,color){const p=svgShapes(svg,`polyline[stroke="${color}"]`)[0];assert.ok(p,'Missing '+color+' trace');return p.getAttribute('points');}
function intervalRatio(svg){
  const width=color=>{const points=polyline(svg,color).split(' ').map(p=>Number(p.split(',')[0]));return Math.abs(points.at(-1)-points[0]);};
  return width('#008859')/width('#9aa3ab');
}
{
  const c=mount('interval'),before=charts(c),margin=before.find(s=>s.includes('onzekerheidsmarge'));
  assert.equal(polyline(margin,'#008859'),polyline(margin,'#9aa3ab'),'Initial margin equals its reference');
  change(c,'confidence',99);const after=charts(c),afterMargin=after.find(s=>s.includes('onzekerheidsmarge'));
  assert.notEqual(polyline(afterMargin,'#008859'),polyline(afterMargin,'#9aa3ab'),'Confidence visibly separates the margin curves');
  assert.ok(intervalRatio(after[0])>intervalRatio(before[0]),'Confidence visibly widens the interval against its reference');
  const currentMargin=afterMargin;change(c,'mean',120);assert.equal(charts(c).find(s=>s.includes('onzekerheidsmarge')),currentMargin,'Mean alone cannot change uncertainty');
  assert.notEqual(charts(c)[0],after[0],'Mean moves the interval visibly');
  for(const [name,value]of [['sd',50],['t',3]]){
    const el=mount('interval');if(name==='t')change(el,'criticalMode','manual','change',false);
    const before=charts(el);change(el,name,value,'input',false);const after=charts(el),curve=after.find(s=>s.includes('onzekerheidsmarge'));
    assert.notEqual(polyline(curve,'#008859'),polyline(curve,'#9aa3ab'),name+' visibly separates margin curves');
    assert.ok(intervalRatio(after[0])>intervalRatio(before[0]),name+' visibly widens interval against reference');
  }
  for(const model of ['power','exponential','log']){
    const el=mount('transformatie');change(el,'model',model,'change',false);
    const selected=svg=>svgShapes(svg,'circle[fill="#c85209"]').map(p=>[p.getAttribute('cx'),p.getAttribute('cy')]);
    const before=charts(el).map(selected);assert.ok(before.every(points=>points.length===1));
    change(el,'x',25);const after=charts(el).map(selected);for(let i=0;i<2;i++)assert.notDeepEqual(after[i],before[i],model+' selected x moves in plot '+i);
    change(el,'b0',2);for(const svg of charts(el))assert.notEqual(polyline(svg,'#008859'),polyline(svg,'#9aa3ab'),model+' coefficient visibly changes curve against reference');
  }
}
{
  const c=mount('strata'),before=charts(c)[0];
  if(!control(c,'s1').disabled)change(c,'s1',40);
  else {const range=c.querySelector('[data-sync="s1"]');range.value=40;range.emit('input');assert.equal(control(c,'s1').value,'10','Disabled slider cannot mutate paired input');}
  assert.equal(charts(c)[0],before,'Proportional allocation ignores spread');change(c,'method','neyman','change',false);assert.notEqual(charts(c)[0],before,'Neyman uses spread');
}
{
  const c=mount('toets'),before=charts(c)[0];change(c,'sign','negative','change',false);assert.equal(charts(c)[0],before,'Two-sided p ignores coefficient sign');
}
{
  const c=mount('voorspelling'),before=charts(c)[0];change(c,'sx',60);assert.notEqual(charts(c)[0],before,'Spread changes the band away from xbar, even at selected x0=xbar');
}

// Invalid edits must show an accessible error and recover after valid input.
for(const [id,name,bad]of [['interval','n',1001],['strata','n',1001],['anova','k',29],['toets','p',2],['voorspelling','sx',0],['transformatie','x',0],['populatie','n',21],['verschil','n',1],['quotient','sumB',0],['regressieschatter','sb',0],['omvang','E',0],['meervoudig','age',-1],['modelbouw','auxR2',1],['validatie','trainMSE',-1]]){
  const c=mount(id),value=control(c,name).value;change(c,name,bad,'input',false);assert.match(html(c),/class="lab-error"[^>]*role="status"/,id+' error');change(c,name,value,'input',false);healthy(c,id+' recovered');interactions++;
}
{
  const c=mount('diagnose');change(c,'mode','normal','change',false);change(c,'n','','input',false);assert.match(html(c),/lab-error/);
  change(c,'mode','dw','change',false);healthy(c,'Hidden invalid n cannot break the DW graph');
  change(c,'mode','normal','change',false);assert.match(html(c),/lab-error/,'Invalid field matters again when shown');change(c,'n',100,'input',false);healthy(c,'Diagnosis recovers');
}
{
  const c=mount('spreiding');change(c,'values','80;','input',false);assert.match(html(c),/lab-error/);change(c,'values','80;90;110;120','input',false);healthy(c,'Spread recovers');
}
{
  const c=mount('regressie');c.querySelector('#lab-fit').emit('click');healthy(c,'OLS fit');
  const fit=M.ols([1,2,3,4,5,6,7,8],[9,10,15,15,21,21,26,27]);
  for(const name of ['b0','b1'])assert.equal(Number(control(c,name).value),fit[name],'OLS button keeps full coefficient precision');
  const before=html(c);c.clientWidth=360;c.querySelector('.lab-result').clientWidth=320;observers.at(-1).fire();assert.notEqual(html(c),before,'Responsive regression SVG is redrawn');healthy(c,'OLS resized');
}
console.log(`OK: ${L.ids.length} labs; ${interactions} control changes; input/change sync, select modes, graph responses, invalid-input recovery, OLS and resizing.`);

// Focusing a control exposes its result before the next keystroke; range drags
// preserve their actual control node and the view selector stays in the DOM.
{
  const c=mount('interval'),view=c.querySelector('[data-lab-view]'),confidence=control(c,'confidence'),range=c.querySelector('[data-sync="confidence"]');
  confidence.emit('focusin');assert.equal(view.value,'chart-2');assert.match(c.querySelector('.lab-live').innerHTML,/Betrouwbaarheid en de twee staarten/);
  change(c,'confidence',98);assert.match(c.querySelector('.lab-live').innerHTML,/Midden: 98%/);
  assert.equal(control(c,'confidence'),confidence,'Typing preserves number focus');assert.equal(c.querySelector('[data-sync="confidence"]'),range,'Dragging preserves range node');assert.equal(c.querySelector('[data-lab-view]'),view,'Result selector stays stable');
  view.value='chart-1';view.emit('change');assert.match(c.querySelector('.lab-live').innerHTML,/Meer controles en de onzekerheidsmarge/);
  c.clientWidth=640;observers.at(-1).fire();assert.equal(view.value,'chart-1','Resize preserves selected result');
  control(c,'mean').emit('focusin');assert.equal(view.value,'chart-0');assert.match(c.querySelector('.lab-live').innerHTML,/Schatting en onzekerheidsinterval/);
}
{
  const c=mount('anova');control(c,'k').emit('focusin');assert.equal(c.querySelector('[data-lab-view]').value,'table-0');assert.match(c.querySelector('.lab-live').innerHTML,/ANOVA · opsplitsing/);
  change(c,'SSE',150);assert.equal(c.querySelector('[data-lab-view]').value,'chart-0');assert.match(c.querySelector('.lab-live').innerHTML,/variance-bar/);
}
{
  const c=mount('modelbouw');control(c,'q').emit('focusin');assert.match(c.querySelector('.lab-live').innerHTML,/Geneste modellen vergelijken/);
  change(c,'auxR2',.95);assert.equal(c.querySelector('[data-lab-view]').value,'chart-0');assert.match(c.querySelector('.lab-live').innerHTML,/Sterkere overlap vergroot VIF/);
}
{
  const c=mount('diagnose');change(c,'mode','normal','change',false);change(c,'n',40,'input',false);
  assert.equal(c.querySelector('[data-lab-view]').value,'uitleg');assert.match(c.querySelector('.lab-live').innerHTML,/Shapiro-Wilk/);
  change(c,'n',51,'input',false);assert.match(c.querySelector('.lab-live').innerHTML,/Kolmogorov-Smirnov/);
  change(c,'skew',1);assert.equal(c.querySelector('[data-lab-view]').value,'chart-0');assert.match(c.querySelector('.lab-live').innerHTML,/Q-Q-plot/);
  change(c,'mode','residual','change',false);assert.equal(c.querySelector('[data-lab-view]').value,'chart-0');
}
console.log('OK: live weergave bij focus en invoer, handmatige grafiekkeuze, mobiele resize en stabiele bedieningsvelden.');
