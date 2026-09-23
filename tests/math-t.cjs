/* Gemaakt met Codex. Numerical checks for the central two-sided t quantile.
 * Table anchors: bronnen/tabellenbundel.pdf, PDF pages 12-13,
 * section 13.4, Student t-verdeling: overschrijdingskansen.
 * The other references below use closed forms and an independent trigonometric
 * integral, not the incomplete-beta implementation under test.
 */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {studentTCritical:t}=require('../js/math.js');
const close=(actual,expected,tolerance,label)=>assert.ok(Number.isFinite(actual)&&Math.abs(actual-expected)<=tolerance,`${label}: ${actual} != ${expected} (tol ${tolerance})`);

// Columns are upper-tail probabilities .10, .05, .025, .01, .005, .001.
// The corresponding *central* confidences are .80, .90, .95, .98, .99, .998.
const confidences=[.8,.9,.95,.98,.99,.998];
const table=[
  [1,[3.078,6.314,12.706,31.821,63.656,318.289]],
  [2,[1.886,2.920,4.303,6.965,9.925,22.328]],
  [5,[1.476,2.015,2.571,3.365,4.032,5.894]],
  [30,[1.310,1.697,2.042,2.457,2.750,3.385]],
  [90,[1.291,1.662,1.987,2.368,2.632,3.183]],
  [100,[1.290,1.660,1.984,2.364,2.626,3.174]],
  [160,[1.287,1.654,1.975,2.350,2.607,3.142]],
  [200,[1.286,1.653,1.972,2.345,2.601,3.131]]
];
// A few printed tail entries are less accurate than their last decimal suggests.
// In particular df=1/C=.998 prints 318.289, while the exact Cauchy value is
// 318.30883898555. Keep that source discrepancy visible; the exact anchors below
// prevent these wider, explicitly listed table tolerances from hiding an error.
const tableTolerance=new Map([['1/.99',.0008],['1/.998',.02],['2/.998',.0009],['5/.998',.0006]]);
for(const [df,row] of table)row.forEach((expected,i)=>{
  const confidence=confidences[i],key=df+'/'+String(confidence).replace(/^0/,'');
  close(t(confidence,df),expected,tableTolerance.get(key)??.000500001,`table df=${df}, C=${confidence}`);
});

// Independent exact quantiles for df=1 (Cauchy) and df=2.
for(const c of [1e-12,1e-7,.0009,.001,.01,.2,.5,.8,.9,.95,.99,.999,.999999,1-Number.EPSILON/2]){
  const cauchy=c<.5?Math.tan(Math.PI*c/2):1/Math.tan(Math.PI*(1-c)/2);
  const df2=Math.SQRT2*c/Math.sqrt((1-c)*(1+c));
  close(t(c,1),cauchy,Math.max(Number.MIN_VALUE,Math.abs(cauchy)*4e-13),`Cauchy C=${c}`);
  close(t(c,2),df2,Math.max(Number.MIN_VALUE,Math.abs(df2)*4e-13),`df2 C=${c}`);
}

// Substitute x=sqrt(df)*tan(theta) in the t density. The central probability
// becomes the ratio of integrals of cos(theta)^(df-1). Integration by parts
// supplies a recurrence for integer df, independent of beta, gamma and inversion.
function centralProbability(value,df){
  const theta=Math.atan(value/Math.sqrt(df)),s=Math.sin(theta),c=Math.cos(theta);
  let integral=df%2?theta:s,total=df%2?Math.PI/2:1;
  for(let m=df%2?2:3;m<df;m+=2){integral=s*c**(m-1)/m+(m-1)*integral/m;total=(m-1)*total/m;}
  return integral/total;
}
for(const df of [3,5,10,30,63,64,65,99,100,200,999,99999,100000,1000000]){
  for(const confidence of [.01,.5,.8,.85,.9,.95,.975,.99,.995,.999]){
    const critical=t(confidence,df);
    close(centralProbability(critical,df),confidence,df>=99999?3e-10:2e-12,`independent integral df=${df}, C=${confidence}`);
  }
}

// Large-df normal limits, also matching the final table row to three decimals.
for(const [confidence,z] of [[.8,1.2815515655446004],[.9,1.6448536269514722],[.95,1.959963984540054],[.98,2.3263478740408408],[.99,2.5758293035489004],[.999,3.2905267314919255]]){
  close(t(confidence,1e12),z,2e-11,`normal limit C=${confidence}`);
  close(t(confidence,Number.MAX_VALUE),z,3e-12,`largest finite df C=${confidence}`);
}

// Monotonicity through the beta/asymptotic boundary, and across the UI range.
for(const confidence of [.8,.9,.95,.99,.999]){
  const values=[1,2,5,30,99,1000,99998,99999,100000,100001,1e6,1e12].map(df=>t(confidence,df));
  values.slice(1).forEach((v,i)=>assert.ok(v<values[i],`t must decrease with df at C=${confidence}`));
}
for(const df of [1,2,5,30,99,1e6]){
  let previous=0;
  for(const confidence of [Number.MIN_VALUE,1e-12,.0009999,.001,.01,.5,.8,.85,.9,.95,.975,.99,.995,.999]){
    const value=t(confidence,df);assert.ok(Number.isFinite(value)&&value>previous,`t must increase with confidence: df=${df}, C=${confidence}`);previous=value;
  }
}
for(const [confidence,df] of [[0,10],[1,10],[-.1,10],[1.1,10],[NaN,10],[Infinity,10],[.95,0],[.95,-1],[.95,2.5],[.95,NaN],[.95,Infinity],['.95',10],[.95,'10']])assert.throws(()=>t(confidence,df),`invalid ${confidence}, ${df}`);

// Browser API and CommonJS export must be the same public interface.
const context={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../js/math.js'),'utf8'),context);
close(context.window.SRAMath.studentTCritical(.95,99),t(.95,99),0,'browser export');
console.log('OK: t-kritiek, 48 lokale tabelwaarden, exacte df1/df2-ankers, 140 onafhankelijke integraalcontroles, grote df, monotoniciteit en grensinvoer.');
