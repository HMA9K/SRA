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
assert.equal(selected('interval','confidence'),'chart-2');
assert.equal(selected('interval','mean','chart-2'),'chart-0');
assert.equal(selected('interval','n'),'chart-1');
assert.equal(selected('schatter','n'),'chart-1');
assert.equal(selected('schatter','sd','chart-1'),'chart-0');
assert.equal(selected('verschil','sdError'),'chart-2');
assert.equal(selected('verschil','meanError','chart-2'),'chart-0');
assert.equal(selected('quotient','r'),'chart-2');
assert.equal(selected('quotient','sumW','chart-2'),'chart-0');
assert.equal(selected('regressieschatter','t'),'chart-2');
assert.equal(selected('regressieschatter','mb','chart-2'),'chart-0');
for(const field of ['n','k'])assert.equal(selected('anova',field),'table-0');
for(const field of ['SSR','SSE'])assert.equal(selected('anova',field,'table-0'),'chart-0');
assert.equal(selected('modelbouw','auxR2','table-0'),'chart-0');
for(const field of ['n','k','q','SSRsmall','SSRfull','MSE'])assert.equal(selected('modelbouw',field),'table-0');
assert.equal(selected('diagnose','n','chart-0','normal'),'uitleg');
assert.equal(selected('diagnose','mode','uitleg','residual'),'chart-0');
assert.equal(selected('diagnose','skew','uitleg','normal'),'chart-0');
assert.equal(selected('diagnose','skew','chart-1','normal'),'chart-1');
assert.equal(selected('transformatie','b1','chart-1'),'chart-1','Other labs preserve the chosen relevant view');
assert.equal(selected('interval',null,'chart-2'),'chart-2','Resize preserves selection');
assert.equal(layout.choose('anova','n','chart-0',[{key:'chart-0'}]),'chart-0','Missing mapped view falls back safely');
assert.equal(layout.choose('none',null,'missing',[]),null);

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
 const values={},controls={};
 for(const match of config.fields.matchAll(/<input\b([^>]+)>/g)){
  const attrs=Object.fromEntries(Array.from(match[1].matchAll(/([\w-]+)="([^"]*)"/g),m=>[m[1],m[2]]));
  if(attrs.name){controls[attrs.name]={value:attrs.value||''};if(attrs.type==='number')values[attrs.name]=Number(attrs.value);}
 }
 for(const match of config.fields.matchAll(/<select\b[^>]*name="([^"]+)"[^>]*>([\s\S]*?)<\/select>/g))controls[match[1]]={value:match[2].match(/<option value="([^"]*)"/)?.[1]||''};
 const el={querySelector(selector){return selector==='.lab-result'?{clientWidth:650}:controls[selector.match(/\[name=["']?([^\]"']+)/)?.[1]];}};
 const modes=id==='diagnose'?['residual','normal','outlier','distance','dw']:[null];
 for(const mode of modes){
  if(mode)controls.mode.value=mode;
  const html=config.run(el,values),result=layout.analyse(html);
  assert.ok(result.views.length,id+': at least one directly visible output');
  assert.ok(result.summary.length,id+': short accessible summary');
  assert.doesNotMatch(result.summary,/<[^>]+>/);
  assert.ok(result.views.every(v=>v.html.length>20),id+': complete views');
  actualViews+=result.views.length;
  if(id==='interval')assert.match(result.views.find(v=>v.key===layout.choose(id,'confidence',null,result.views))?.title||'',/staarten/);
  if(id==='anova')assert.match(result.views.find(v=>v.key===layout.choose(id,'n',null,result.views))?.title||'',/ANOVA/);
  if(id==='modelbouw')assert.match(result.views.find(v=>v.key===layout.choose(id,'q',null,result.views))?.title||'',/Geneste/);
  if(id==='diagnose'&&mode==='normal')assert.match(result.views.find(v=>v.key===layout.choose(id,'n',null,result.views,mode))?.html||'',/Kolmogorov/);
 }
}
console.log(`OK: ${Object.keys(configs).length} labindelingen, alle diagnosemodi, ${actualViews} resultaatweergaven en veldkoppelingen.`);
