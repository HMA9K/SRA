/* Gemaakt met Codex: controle op gekoppelde grafieken en behouden kernuitkomsten. */
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const layout=require('../js/lab-layout.js');
const fixture='<div class="results"><div class="metric"><b>80.000</b><span>Geschat totaal (&euro;)</span></div><div class="metric"><b>1.234</b><span>Marge <em>E</em></span></div></div><details><summary>Details</summary><div class="table-scroll"><table><caption>Tussenstappen</caption><tr><td>1</td></tr></table></div></details><figure class="chart-figure"><figcaption>Interval &amp; schatting</figcaption><div class="chart-scroll"><svg role="img"><g><text>Grafiek</text></g></svg></div><p class="chart-note">Lange uitleg</p></figure><div class="table-scroll" tabindex="0"><table><caption>ANOVA &#183; variatie</caption><tr><td>2</td></tr></table></div><div class="lab-interpretation"><strong>Wat zie je?</strong><p>Het interval wordt breder.</p></div>';
const parsed=layout.analyse(fixture);
assert.equal(parsed.metrics,fixture.slice(0,fixture.indexOf('<details>')),'Nested metrics remain balanced and complete');
assert.equal(parsed.views[0].title,'Interval & schatting');
assert.match(parsed.views[0].html,/<svg role="img"><g>/);
assert.doesNotMatch(parsed.views[0].html,/Lange uitleg|chart-note/);
assert.equal(parsed.views.find(v=>v.key==='table-0').title,'ANOVA · variatie','Visible tables precede detail tables');
assert.equal(parsed.views.find(v=>v.key==='table-1').title,'Tussenstappen');
assert.equal(parsed.views.at(-1).key,'uitleg');
assert.match(parsed.summary,/Marge E: 1.234/);
assert.match(parsed.summary,/Geschat totaal \(€\)/);
assert.doesNotMatch(parsed.summary,/<[^>]+>/);
assert.deepEqual(layout.analyse(''),{metrics:'',views:[],summary:''});
const route=layout.analyse('<ol class="lab-route"><li>MPU</li></ol><div class="lab-interpretation"><p>Kies de methode.</p></div>');
assert.equal(route.views.length,1);assert.equal(route.views[0].key,'route');assert.match(route.views[0].html,/lab-route/);

const views=['chart-0','chart-1','chart-2','table-0','table-1','uitleg'].map(key=>({key}));
const selected=(id,field,current='chart-0',mode)=>layout.choose(id,field,current,views,mode);
for(const id of ['interval','schatter','verschil','quotient','regressieschatter','anova','modelbouw','diagnose']){
 for(const field of ['n','mean','confidence','sdError','r','mode']){
  for(const current of views.map(v=>v.key))assert.equal(selected(id,field,current),current,id+' behoudt '+current+' bij '+field);
 }
}
assert.equal(layout.choose('none',null,'missing',[]),null);
assert.equal(layout.choose('none',null,'missing',views),'chart-0');

// Evaluate the actual lab configs with their normal default controls. No browser
// replacement or duplicate statistical implementation is used in this check.
let source=fs.readFileSync(path.join(__dirname,'../js/labs.js'),'utf8');
source=source.replace('window.SRALabs={','window.__labConfigs=configs;window.SRALabs={');
const sandbox={window:{SRAMath:require('../js/math.js')}};
vm.runInNewContext(source,sandbox);
const configs=sandbox.window.__labConfigs;
assert.ok(configs,'Production configuration capture remains available');
let actualViews=0;
for(const [id,config] of Object.entries(configs)){
 assert.doesNotMatch(config.fields,/<select\b/,'Geen dropdown in '+id);
 const values={},controls={};
 for(const match of config.fields.matchAll(/<input\b([^>]+)>/g)){
  const attrs=Object.fromEntries(Array.from(match[1].matchAll(/([\w-]+)="([^"]*)"/g),m=>[m[1],m[2]]));
  if(attrs.name){controls[attrs.name]={value:attrs.value||''};if(attrs.type==='number')values[attrs.name]=Number(attrs.value);}
 }
 const el={querySelector(selector){return selector==='.lab-result'?{clientWidth:650}:controls[selector.match(/\[name=["']?([^\]"']+)/)?.[1]];}};
 const modes=id==='diagnose'?['residual','normal','outlier','distance','dw']:[null];
 for(const mode of modes){
  if(mode)controls.mode.value=mode;
  const html=config.run(el,values),result=layout.analyse(html);
  assert.ok(result.views.length,id+': at least one directly visible output');
  assert.ok(result.summary.length,id+': short accessible summary');
  assert.doesNotMatch(result.summary,/<[^>]+>/);
  assert.ok(result.views.every(v=>v.html.length>20),id+': complete views');
  for(const view of result.views){const label=layout.describe(id,view,mode);assert.ok(label.title.length>1&&label.description.length>15,id+': duidelijke keuzekaart');assert.doesNotMatch(label.description,/undefined|<[^>]*>/);}
  actualViews+=result.views.length;
 }
}
console.log(`OK: ${Object.keys(configs).length} labindelingen, alle diagnosemodi, ${actualViews} resultaatweergaven en veldkoppelingen.`);
