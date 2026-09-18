/* Numerical acceptance cases for the experiments. The expected values come
   from the course examples and independently evaluated arithmetic. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const M=require('../js/math.js');
const sandbox={window:{SRAMath:M}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../js/labs.js'),'utf8'),sandbox);
const L=sandbox.window.SRALabs,calc=L.calculations;
const close=(actual,expected,tolerance=1e-8)=>assert.ok(Number.isFinite(actual)&&Math.abs(actual-expected)<=tolerance,`${actual} ≠ ${expected}`);
assert.equal(L.ids.length,19);
assert.equal(new Set(L.ids).size,19);

// Course planning route, which differs slightly from the exact inverse FPC.
const input={N:2130,sd:82.1,r:.925,t:1.974,E:5000,already:180};
const planned=calc.planning(input);
close(planned.gamma,3.095193445895,1e-10);
close(planned.raw,520.12194982759,1e-8);
assert.equal(planned.required,521);
assert.equal(planned.extra,341);
assert.ok(calc.planning({...input,E:2500}).required>planned.required);
assert.equal(calc.planning({...input,already:1000}).extra,0);
assert.equal(calc.planning({...input,E:1e10}).required,2);
assert.equal(calc.planning({...input,E:.0001}).required,2130);
assert.throws(()=>calc.planning({...input,already:2200}));
assert.throws(()=>calc.planning({...input,r:1}));
assert.throws(()=>calc.planning({...input,sd:0}));
assert.throws(()=>calc.planning({...input,E:0}));
assert.throws(()=>calc.planning({...input,N:2.5}));

// A negative book-minus-actual difference raises the estimate; spread is unchanged.
const difference={N:1000,n:100,B:100000,meanError:10,sdError:5,t:2};
close(M.difference(difference).point,90000);
close(M.difference({...difference,meanError:-10}).point,110000);
close(M.difference(difference).margin,M.difference({...difference,meanError:-10}).margin);
const ratio=M.ratio({N:1000,n:100,B:500000,sumW:19000,sumB:20000,sw:38,sb:40,r:.98,t:1.987});
close(ratio.q,.95);close(ratio.sq,7.6);close(ratio.point,475000);close(ratio.margin,1433.34247254577,1e-8);
const regInput={N:2130,n:180,B:1810500,mw:161300/180,mb:164500/180,sw:82.1,sb:83.3,r:.925,t:1.974};
const reg=M.regressionEstimator(regInput);
close(reg.point,1784652.93867547,1e-7);close(reg.se,4739.821445225104,1e-8);
const mpu=M.estimate({N:regInput.N,n:regInput.n,mean:regInput.mw,sd:regInput.sw,t:regInput.t});
close(M.regressionEstimator({...regInput,r:0}).point,mpu.point);
close(M.regressionEstimator({...regInput,r:.8}).se/mpu.se,.6);

// Individual prediction includes the additional 1; mean-response interval does not.
const predInput={n:30,b0:7.159,b1:.099,xbar:228.1,x0:228.1,sx:30,se:1.25506,t:2.048};
const center=calc.predictionBands(predInput),away=calc.predictionBands({...predInput,x0:258.1});
close(center.point,29.7409);close(center.margin,2.612851095268276);close(center.meanMargin,.469281910116648);
close(away.margin,2.656089294498756);close(away.meanMargin,.669361640273031);
assert.ok(away.margin>center.margin&&away.meanMargin>center.meanMargin);
assert.ok(center.margin>center.meanMargin&&away.margin>away.meanMargin);
close(calc.predictionBands({...predInput,x0:198.1}).margin,away.margin);
close(calc.predictionBands({...predInput,se:0}).meanMargin,0);
assert.throws(()=>calc.predictionBands({...predInput,sx:0}));

// The course threshold is strictly VIF > 10; floating point 1/(1-.9) must not flag it.
const vif=calc.collinearity(.92);
close(vif.tolerance,.08);close(vif.vif,12.5);assert.equal(vif.flag,true);
assert.equal(calc.collinearity(.9).flag,false);
assert.equal(calc.collinearity(.9001).flag,true);
assert.throws(()=>calc.collinearity(1));assert.throws(()=>calc.collinearity(-.1));
const fInput={n:100,k:3,q:1,SSRsmall:800,SSRfull:850,MSE:10};
const f=calc.partialF(fInput);close(f.F,5);assert.equal(f.df1,1);assert.equal(f.df2,96);
close(calc.partialF({...fInput,q:2}).F,2.5);
assert.throws(()=>calc.partialF({...fInput,n:4}));
assert.throws(()=>calc.partialF({...fInput,q:3})); // intercept-only small model cannot have SSR = 800
close(calc.partialF({...fInput,q:3,SSRsmall:0}).F,850/30);
assert.throws(()=>calc.partialF({...fInput,SSRfull:799}));

// Test outcomes never refit the fixed predictions, and denominator is n_test.
const actual=[10,14,20],pred=[12,13,17],validation=calc.validation(actual,pred);
close(validation.sum,14);close(validation.mspr,14/3);
assert.deepEqual(Array.from(validation.residuals),[-2,1,3]);
assert.deepEqual(Array.from(validation.squares),[4,1,9]);
close(calc.validation([12,13,17],pred).mspr,0);
assert.deepEqual(pred,[12,13,17]);
assert.throws(()=>calc.validation([1,2],[1]));
assert.throws(()=>calc.validation([1e308],[0]));
console.log('OK: 19 labs; planning, verschil/ratio/regressieschatter, voorspellingsbanden, VIF-grens, partiële F en MSPR.');
