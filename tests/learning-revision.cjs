const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),box={window:{}};
for(const f of ['data/course.js','data/mc.js','data/mc-exam-frequency.js'])vm.runInNewContext(fs.readFileSync(path.join(root,f),'utf8'),box);
const C=box.window.SRA,D=box.window.SRAMCData,F=box.window.SRAMCExamFrequency;
const sampling=new Set(['beginnen','rekenen','onzekerheid','mpu','verschil','quotient','regressieschatter','steekproefomvang','stratificatie']);
let refs=0,images=0;
for(const l of C.lessons){
 assert.ok(l.curriculum?.book&&l.curriculum?.college&&l.curriculum?.focus,l.id+' mist boek/college of leerdoel');
 assert.ok(F.topics[l.id],l.id+' mist controleerbare tentamenkoppeling');
 assert.equal(l.questions.length,3,l.id+' bestaande checks behouden');
 assert.ok(l.sections.length>=3,l.id+' mist inhoudsblokken na samenvoegen');
 assert.ok(l.sections.some(s=>s.learningVersion==='2026-09-25'||s.regressionVersion==='2026-09-25'),l.id+' mist nieuwe brongebonden verdieping');
 if(sampling.has(l.id))assert.equal(l.samplingVersion,'2026-09-25');
 for(const section of l.sections){
  for(const ref of section.refs||[]){refs++;assert.ok(C.sources[ref.source]&&ref.page>=1,`${l.id}: ongeldige bronpagina`);}
  for(const match of section.html.matchAll(/<img\b[^>]*>/g)){
   images++;assert.match(match[0],/alt="[^"]+"/);
   const src=/src="([^"]+)"/.exec(match[0])[1];assert.ok(fs.existsSync(path.join(root,src)),src);
  }
 }
 const added=D.topics.find(t=>t.id===l.id).questions.filter(q=>q.id.includes('-leertoepassing-'));
 assert.ok(added.length>=1,l.id+' mist een zelfstandige toepassing');
 assert.ok(added.every(q=>q.stimulusHtml&&q.refs.length),l.id+' toepassing mist casus of bron');
}
const diagnostic=C.lessons.find(l=>l.id==='diagnostiek').sections.map(s=>s.html).join(' ');
// Controleer de nieuw getoonde antwoordtabel via ANOVA-relaties, niet alleen op tekstaanwezigheid.
const anova=C.lessons.find(l=>l.id==='anova').sections.find(s=>s.title==='Een volledige ANOVA-tabel reconstrueren').html;
const completed=anova.match(/<table><caption>Uitwerking H9\.1:[\s\S]*?<\/table>/)[0];
const rows=[...completed.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].slice(1).map(r=>[...r[1].matchAll(/<td>([\s\S]*?)<\/td>/g)].map(c=>Number(c[1].replaceAll('.','').replace(',','.'))));
const [reg,res,total]=rows;
assert.ok(Math.abs(reg[1]+res[1]-total[1])<1e-5);
assert.equal(reg[2]+res[2],total[2]);
assert.ok(Math.abs(reg[3]-reg[1]/reg[2])<1e-5);
assert.ok(Math.abs(res[3]-res[1]/res[2])<1e-5);
assert.ok(Math.abs(reg[4]-(reg[1]/reg[2])/(res[1]/res[2]))<1e-5);
assert.match(diagnostic,/2,490/);assert.match(diagnostic,/0,963/);assert.match(diagnostic,/Durbin/);
const strat=C.lessons.find(l=>l.id==='stratificatie').sections.map(s=>s.html).join(' ');
for(const value of ['513.513','14.306.659','475.000','621.778'])assert.ok(strat.includes(value),value+' ontbreekt in bronvoorbeeld');
assert.ok(refs>100&&images>=2,'Bronkoppelingen en bronfiguren zijn geïntegreerd');
console.log(`OK: 19 volledige lesuitbreidingen, ${refs} sectiebronverwijzingen, ${images} bronfiguren, collegekoppen en toepassingen over alle onderwerpen.`);
