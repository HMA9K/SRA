/* Onafhankelijke rekencontroles op brongegevens en nieuwe oefenvragen. */
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const sandbox={window:{}};
for(const file of ['data/course.js','data/mc.js'])vm.runInNewContext(fs.readFileSync(file,'utf8'),sandbox);
const C=sandbox.window.SRA,D=sandbox.window.SRAMCData;
const questions=D.topics.flatMap(t=>t.questions),added=questions.filter(q=>q.id.includes('-aanvulling-'));
assert.equal(added.length,20);
const answer=id=>{const q=questions.find(q=>q.id===id);assert.ok(q,id);return q.options[q.correct];};
const num=s=>Number(s.replace(/^Ongeveer /i,'').replace('−','-').replace(',','.'));
const near=(a,b,t=1e-5)=>assert.ok(Math.abs(a-b)<t,`${a} != ${b}`);
near(num(answer('mc-regressielijn-aanvulling-mse')),11/10*(1-.8**2)*25);
near(num(answer('mc-toetsen-aanvulling-hellingse')),5/2*Math.sqrt((1-.8**2)/10));
near(num(answer('mc-toetsen-aanvulling-correlatie')).valueOf(),-.8*Math.sqrt(10)/Math.sqrt(1-.8**2));
assert.equal(answer('mc-stratificatie-aanvulling-uitbreiding'),String(Math.ceil(32.65)-30));
assert.equal(answer('mc-stratificatie-aanvulling-varianties'),String((10/2)**2-16));
assert.equal(answer('mc-steekproefomvang-aanvulling-quotient'),String(Math.ceil(1000/(1+1000**2/(4*1000*7.6**2)))));
near(num(answer('mc-transformaties-aanvulling-meervoudig')),Math.exp(Math.log(2)+.5*Math.log(16)-Math.log(4)));
assert.equal(answer('mc-diagnostiek-aanvulling-autocorrectie'),String(10+2*4+.5*(-2)));
const residuals=[1,1,-1,-1];
assert.equal(answer('mc-diagnostiek-aanvulling-dw'),String(residuals.slice(1).reduce((s,e,i)=>s+(e-residuals[i])**2,0)/residuals.reduce((s,e)=>s+e**2,0)));
// Opgavenbundel H9.1, tien oorspronkelijke autogewichten: onafhankelijke OLS.
const x=[1,2,3,4,5,6,7,8,9,10],y=[946,950,965,978,980,990,1055,1015,1055,1080];
const mean=a=>a.reduce((s,v)=>s+v,0)/a.length,xm=mean(x),ym=mean(y);
const sxx=x.reduce((s,v)=>s+(v-xm)**2,0),syy=y.reduce((s,v)=>s+(v-ym)**2,0),sxy=x.reduce((s,v,i)=>s+(v-xm)*(y[i]-ym),0);
const slope=sxy/sxx,r=sxy/Math.sqrt(sxx*syy),mse=(syy-sxy*sxy/sxx)/8,seSlope=Math.sqrt(mse/sxx);
near(slope,14.739393939,1e-8);near(mse,294.662121212,1e-8);
near(mse,9/8*(1-r*r)*(syy/9),1e-8);
near(slope/seSlope,r*Math.sqrt(8)/Math.sqrt(1-r*r),1e-10);
// H8.9: minimale uitbreiding stratum 3, vastgehouden t en spreidingen.
const N=[1200,600,300,200,100],sum=[38000,84000,160000,162000,210000],sum2=[55629508,265698277,1050302311,1200667252,2737241390];
const variance=N.map((_,i)=>(sum2[i]-sum[i]**2/30)/29);
const margin=n3=>1.978*Math.sqrt(N.reduce((total,Ni,i)=>{const ni=i===2?n3:30;return total+Ni**2*variance[i]/ni*(Ni-ni)/(Ni-1);},0));
assert.ok(margin(32)>500000);assert.ok(margin(33)<500000);near(margin(33),499443.383071,1e-5);
for(const l of C.lessons){
  if(!['validatie','tentamen'].includes(l.id))assert.ok(l.refs.some(r=>r.source.startsWith('boek-')),l.id);
  const text=JSON.stringify(l);
  assert.ok(!text.includes('gelogaritmeerde waarden positief'),l.id);
  for(const ref of l.refs)assert.ok(C.sources[ref.source],ref.source);
}
for(const id of ['beginnen','rekenen','onzekerheid','toetsen'])assert.ok(C.lessons.find(l=>l.id===id).sections.some(s=>s.title.startsWith('SET-opfrisser')));
// Klik-uitleg onderscheidt een berekende t van de kritieke t in een interval.
const help=require('../js/formula-help.js');
assert.match(help.lookup('t','toetsen','b1 ± t × sb1').title,/kritieke/);
assert.match(help.lookup('sb1','toetsen').title,/standaardfout/);
console.log('OK: 20 aanvullingen, bronberekeningen H8.9/H9.1, SET-afbakening, boekverwijzingen en logvoorwaarde.');
