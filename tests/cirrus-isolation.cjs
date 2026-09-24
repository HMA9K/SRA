/* Gemaakt met Codex: route-overgangen houden de twee stylesheetomgevingen gescheiden.
   De echte route- en lettergroottefuncties draaien met een kleine DOM-fixture. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const source=read('js/app.js'),index=read('index.html');

const links=[...index.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*>/g)].map(match=>({
 tag:match[0],href:match[0].match(/href="([^"]+)"/)[1]
}));
assert.ok(links.length>5);
for(const {tag,href} of links){
 const shared=/^(css\/(?:cirrus(?:-integration)?|study-dark)\.css|vendor\/study-ui\/(?:header|theme)\.css)$/.test(href);
 assert.equal(/\bdata-study-style\b/.test(tag),!shared,href);
}

function classes(...initial){
 const values=new Set(initial);
 return {contains:key=>values.has(key),add:(...keys)=>keys.forEach(key=>values.add(key)),
  remove:(...keys)=>keys.forEach(key=>values.delete(key)),
  toggle(key,enabled){if(enabled===undefined)enabled=!values.has(key);enabled?values.add(key):values.delete(key);return enabled;}};
}
const elements=new Map();
function element(selector){
 if(!elements.has(selector))elements.set(selector,{hidden:false,disabled:false,open:false,dataset:{},
  textContent:'Controlescherm',innerHTML:'',classList:classes(),
  toggleAttribute(){},setAttribute(){},removeAttribute(){},prepend(){},before(){},focus(){}});
 return elements.get(selector);
}
const sheets=links.filter(link=>/data-study-style/.test(link.tag)).map((link,i)=>({
 href:link.href,media:i===0?'screen':'',dataset:{}
}));
const originalMedia=sheets.map(sheet=>sheet.media),properties=new Map(),calls={};
const count=name=>{calls[name]=(calls[name]||0)+1;};
const body={classList:classes('study-shell'),dataset:{},style:{setProperty:(key,value)=>properties.set(key,value)}},documentElement={
 classList:classes(),style:{setProperty:(key,value)=>properties.set(key,value)}
};
const document={body,documentElement,title:'',querySelectorAll(selector){
 if(selector==='[data-study-style]')return sheets;
 if(selector==='[data-nav]')return [];
 if(selector==='.btn'){count('study-buttons');return [];}
 throw Error('Onverwachte selector: '+selector);
}};
const sandbox={document,location:{hash:''},state:{font:18},validIds:new Set(['regressielijn']),
 sidebarLessonId:null,historyBack:element('#history-back'),$:element,
 renderSidebar:()=>{},showCurrentSidebarLesson:()=>{},save:()=>count('save'),
 window:{
  SRANavigation:{before(){},after(){}},
  SRATerms:{close:()=>{},annotate:()=>count('terms')},
  SRAFormulaHelp:{close:()=>{},annotate:()=>count('formulas')},
  SRACirrus:{mount(){count('cirrus');body.classList.add('cirrus-mode');},leave(){count('leave');body.classList.remove('cirrus-mode');}}
 }};
for(const name of ['renderHome','renderLearning','renderFormulas','renderPractice','renderGlossary','renderExams','renderProgress','renderSources'])sandbox[name]=()=>count(name);
sandbox.renderLesson=id=>{count('renderLesson');return id;};
const start=source.indexOf(' function applyFont()'),end=source.indexOf(" $('#font-minus').onclick=",start);
assert.ok(start>=0&&end>start,'De route- en fontfuncties moeten testbaar blijven');
vm.createContext(sandbox);
vm.runInContext(source.slice(start,end),sandbox,{filename:'app.js:route'});
function visit(hash,cirrus){
 sandbox.location.hash=hash;
 const termsBefore=calls.terms||0,formulasBefore=calls.formulas||0;
 sandbox.route(false);
 assert.equal(body.classList.contains('cirrus-mode'),cirrus,hash+' omgevingsklasse');
 assert.equal(documentElement.classList.contains('enhanced'),cirrus,hash+' CAFA2-featureklasse');
 assert.deepEqual(sheets.map(sheet=>sheet.media),cirrus?sheets.map(()=>'not all'):originalMedia,hash+' stylesheets');
 assert.equal(calls.terms||0,termsBefore+(cirrus?0:1),hash+' begrippenannotatie');
 assert.equal(calls.formulas||0,formulasBefore+(cirrus?0:1),hash+' formuleannotatie');
 assert.equal(element('.sra-navigation').hidden,cirrus||hash.startsWith('#tentamen'),hash+' hoofdnavigatie');
 assert.equal(element('#study-returnbar').hidden,sandbox.historyBack.hidden,hash+' terugbalk');
 assert.equal(element('.study-navigation-row').hidden,sandbox.historyBack.hidden&&element('.sra-navigation').hidden,hash+' gezamenlijke navigatieregel');
}
visit('#les/regressielijn',false);
assert.equal(properties.get('--font'),'18px');
visit('#tentamen',true);
assert.equal(properties.get('--sra-cirrus-font'),'14px');
sandbox.changeFont(1);
assert.equal(sandbox.state.cirrusFont,15);
assert.equal(sandbox.state.font,18,'Tentamenletters wijzigen de lesvoorkeur niet');
visit('#welkom/20250317',true);
visit('#toets/controlepoging',true);
visit('#inzage/controlepoging',true);
visit('#tentamen/voltooid',true);
visit('#tentamen/mc',false);
assert.equal(properties.get('--font'),'18px','MC herstelt de SRA-lettergrootte');
visit('#tentamen/analyse',false);
visit('#formules/regressielijn',false);
visit('#les/regressielijn',false);
sandbox.changeFont(-1);
assert.equal(sandbox.state.font,17);
assert.equal(sandbox.state.cirrusFont,15,'Lesletters wijzigen de tentamenvoorkeur niet');
visit('#tentamen',true);
assert.equal(properties.get('--sra-cirrus-font'),'15px','Tentamenvoorkeur blijft bewaard');
sandbox.changeFont(0);
assert.equal(sandbox.state.cirrusFont,14);
visit('#home',false);
assert.equal(properties.get('--font'),'17px');
sandbox.historyBack.hidden=true;
visit('#les/regressielijn',false);
visit('#tentamen',true);
sandbox.historyBack.hidden=false;
visit('#tentamen',true);

// Een downloadbare HTML moet dezelfde uitschakelbare stylesheets bevatten.
const portable=read('SRA interactieve samenvatting.html');
const styleTags=[...portable.matchAll(/<style\b([^>]*)>([\s\S]*?)<\/style>/g)];
const studyStyles=styleTags.filter(match=>/\bdata-study-style\b/.test(match[1]));
assert.equal(studyStyles.length,sheets.length,'Portable HTML bewaart alle stylesheetmarkeringen');
const normalized=value=>value.replace(/\r\n/g,'\n').replace(/(?<=\n)[ \t]+(?=\n)/g,'').trim();
for(const sheet of sheets)assert.ok(studyStyles.some(match=>normalized(match[2])===normalized(read(sheet.href))),'Portable stylesheet actueel: '+sheet.href);
for(const id of ['calc-open','calculator','calc-expression','calc-result','calc-keys','history-back']){
 assert.equal([...index.matchAll(new RegExp('id="'+id+'"','g'))].length,1,id+' blijft een uniek bereikbaar element');
}
assert.match(read('css/cirrus-integration.css'),/#calculator\s+\[data-calc-input\]\{/,'Rekenmachine heeft een invoerstijl in Cirrus');
assert.match(read('css/cirrus-integration.css'),/#history-back\{/,'Terugknop heeft een eigen Cirrus-adapter');
console.log('OK: les/dashboard/welkom/toets/inzage/MC/analyse-routeisolatie, mediaherstel, afzonderlijke lettergrootte en zelfstandige HTML.');
