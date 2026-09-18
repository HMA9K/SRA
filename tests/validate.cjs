const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const M=require('../js/math.js');
const close=(a,b,tolerance=1e-6)=>assert.ok(Math.abs(a-b)<=tolerance,`${a} ≠ ${b}`);
const sandbox={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'data/course.js'),'utf8'),sandbox);
const C=sandbox.window.SRA;
const checkSourceFiles=process.argv.includes('--sources');
assert.ok(process.argv.slice(2).every(arg=>arg==='--sources'),'Onbekende testoptie; gebruik eventueel --sources.');
const sourceFiles=new Set();
for(const [id,source] of Object.entries(C.sources)){
  assert.match(id,/^[a-zA-Z0-9_-]+$/,`Ongeldige broncode: ${id}`);
  assert.ok(typeof source.title==='string'&&source.title.trim(),`Brontitel ontbreekt: ${id}`);
  assert.ok(typeof source.file==='string'&&/^[^/\\]+\.pdf$/i.test(source.file),`Ongeldige bronbestandsnaam: ${id}`);
  assert.ok(!path.isAbsolute(source.file)&&!path.win32.isAbsolute(source.file),`Absoluut bronpad: ${id}`);
  assert.ok(!sourceFiles.has(source.file.toLowerCase()),`Dubbele bronbestandsnaam: ${source.file}`);
  sourceFiles.add(source.file.toLowerCase());
  assert.ok(typeof source.original==='string'&&source.original.toLowerCase().endsWith('.pdf'),`Origineel bronpad ontbreekt: ${id}`);
  assert.ok(!path.isAbsolute(source.original)&&!path.win32.isAbsolute(source.original)
    &&source.original.split(/[\\/]/).every(part=>part&&part!=='.'&&part!=='..'),`Ongeldig origineel bronpad: ${id}`);
  if(checkSourceFiles){
    const file=path.join(root,'bronnen',source.file);
    assert.ok(fs.existsSync(file)&&fs.statSync(file).isFile(),`Bron-PDF ontbreekt: ${source.file}. Bouw eerst met de lokale cursusbronnen.`);
    const header=Buffer.alloc(5),fd=fs.openSync(file,'r');
    try{assert.equal(fs.readSync(fd,header,0,5,0),5);assert.equal(header.toString('ascii'),'%PDF-',`Geen PDF-bestand: ${source.file}`);}
    finally{fs.closeSync(fd);}
  }
}
const labSandbox={window:{SRAMath:M}};
vm.runInNewContext(fs.readFileSync(path.join(root,'js/labs.js'),'utf8'),labSandbox);
const availableLabs=new Set(labSandbox.window.SRALabs.ids);
for(const l of C.lessons)assert.ok(l.lab&&availableLabs.has(l.lab),`Les ${l.id} mist een werkende interactieve tool (${l.lab}).`);
assert.equal(C.lessons.length,19);assert.equal(C.lessons.flatMap(l=>l.questions).length,57);
const ids=new Set(),qids=new Set();
for(const l of C.lessons){assert.ok(!ids.has(l.id));ids.add(l.id);assert.ok(l.sections.length>=2);assert.ok(l.example.steps.length>=3);assert.equal(l.questions.length,3);for(const q of l.questions){assert.ok(!qids.has(q.id));qids.add(q.id);assert.ok(q.correct>=0&&q.correct<q.options.length);assert.ok(q.explanation.trim().length>0);}for(const r of l.refs){assert.ok(Object.hasOwn(C.sources,r.source));assert.ok(Number.isInteger(r.page)&&r.page>0);}}
for(const c of C.examCases){assert.ok(Object.hasOwn(C.sources,c.source));assert.ok(Number.isInteger(c.page)&&c.page>0);assert.ok(Number.isInteger(c.solutionPage)&&c.solutionPage>0);c.lessons.forEach(id=>assert.ok(ids.has(id)));}
const s=M.stats([80,90,110,120]);close(s.mean,100);close(s.variance,1000/3);close(s.sd,18.257418583505537);
const full=M.estimate({N:100,n:100,mean:80,sd:20,t:1.984});close(full.se,0);close(full.point,8000);
assert.throws(()=>M.estimate({N:100,n:101,mean:80,sd:20,t:1.984}));
const sd=Math.sqrt((395000-7755**2/165)/164),d=M.difference({N:3740,n:165,B:1980000,meanError:47,sdError:sd,t:1.975});
close(d.point,1804220);close(d.se,3883.51229,.001);close(d.low,1796550.06,.01);close(d.high,1811889.94,.01);
const r=M.regressionEstimator({N:2130,n:180,B:1810500,mw:161300/180,mb:164500/180,sw:82.1,sb:83.3,r:.925,t:1.974});
close(r.point,1784652.93867547,.00001);close(r.se,4739.821445225104,.000001);close(r.low,1775296.5311425962,.00001);
const ratio=M.ratio({N:1000,n:100,B:500000,sumW:19000,sumB:20000,sw:38,sb:40,r:.98,t:1.984});close(ratio.point,475000);close(ratio.sq,7.6);
const st=M.stratified([{N:940,n:45,mean:60,sd:16},{N:677,n:32,mean:53,sd:13},{N:639,n:30,mean:50,sd:14},{N:592,n:30,mean:41,sd:13}],22580,1.660);
close(st.point,171083);close(st.se,3394.782723,.001);close(st.low,165447.661,.01);
assert.deepEqual(M.allocate([940,677,639,592],[1,1,1,1],130,'evenredig').rounded,[43,31,29,27]);
assert.deepEqual(M.allocate([600,400],[10,30],100,'neyman').rounded,[33,67]);
assert.throws(()=>M.allocate([2,998],[10000,1],100,'neyman'));
const a=M.anova(30,1,1351.262,44.105);close(a.R2,.968392,.00001);close(a.F,857.85,.02);close(a.se,1.25506,.0001);
assert.throws(()=>M.anova(4,3,100,20));
const p=M.predict({n:30,b0:7.159,b1:.099,x0:228.1,xbar:228.1,sx:30,se:1.25506,t:2.048});close(p.point,29.7409);close(p.margin,2.613,.002);
const away=M.predict({n:30,b0:7.159,b1:.099,x0:300,xbar:228.1,sx:30,se:1.25506,t:2.048});assert.ok(away.margin>p.margin);
const ols=M.ols([1,2,3,4],[3,5,7,9]);close(ols.b0,1);close(ols.b1,2);close(ols.sse,0);
close(M.calc('3740*(636-97185/165)'),175780);close(M.calc('sqrt(16)+2^3'),12);close(M.calc('2,5 * 4'),10);close(M.calc('exp(ln(16))'),16);close(M.calc('-2^2'),-4);close(M.calc('2^-2'),.25);
for(const invalid of ['1/0','sqrt(-1)','alert(1)','2+','()','2**3','ln(0)'])assert.throws(()=>M.calc(invalid));
for(const file of ['js/math.js','js/labs.js','js/app.js','data/course.js'])new vm.Script(fs.readFileSync(path.join(root,file),'utf8'),{filename:file});
assert.ok(fs.readFileSync(path.join(root,'SRA interactieve samenvatting.html'),'utf8').includes('window.SRA ='));
console.log('OK: 19 lessen, 57 checks, bronpaden, syntax en statistische berekeningen (incl. officiële 2024/2025-casussen).');
console.log(checkSourceFiles?'OK: alle lokale bron-PDF\'s zijn aanwezig en hebben een PDF-header.':'Bron-PDF\'s zijn optioneel; controleer lokale exemplaren met npm run test:sources.');
