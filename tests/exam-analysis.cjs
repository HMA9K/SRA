/* Rendert de tentamenanalyse zonder browser: vier weergaven, filter, voortgang en punten per tentamen. */
const assert=require('assert'),fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const handlers={},elements={},element=s=>elements[s]||(elements[s]={value:'',innerHTML:'',addEventListener(type,fn){handlers[s+type]=fn;}});
const saved={'sra-learning-v1':JSON.stringify({read:['mpu']}),'sra-exams-v1':JSON.stringify({20200626:{answers:{3:'Uitwerking'}}}),'sra-cirrus-exams-v1':JSON.stringify({attempts:[{exam:{id:'20211101',questions:[{id:'vraag-1',number:1,type:'open'},{id:'vraag-2',number:2,type:'open'}]},answers:{'vraag-1':{html:'x'}}}]})};
const localStorage={getItem:k=>saved[k]??null,setItem:(k,v)=>{saved[k]=v;}};
const answered=new Set(['les-1','exam-20220316-vraag-1']);
const ctx={window:{localStorage,CafaExamEngine:{answeredCount:a=>a.exam.questions.filter(q=>a.answers[q.id]).length},SRAMCData:{topics:[{id:'mpu',questions:[{id:'les-1'},{id:'les-2'},{id:'exam-20220316-vraag-1',sourceExamId:'20220316',sourceQuestionId:'vraag-1'}]}]},SRAMC:{summary:t=>({total:t.questions.length,correct:t.questions.filter(q=>answered.has(q.id)).length,done:t.questions.filter(q=>answered.has(q.id)).length})}},localStorage,console,document:{querySelector:element,querySelectorAll:()=>[]},location:{hash:''}};
vm.createContext(ctx);
for(const f of ['data/exams.js','data/exam-topics.js','js/exam-topic-views.js','js/exams.js'])vm.runInContext(read(f),ctx,{filename:f});
const D=ctx.window.SRAExamData,T=ctx.window.SRAExamTopics,V=ctx.window.SRAExamTopicViews;
ctx.window.SRAExams.render('analyse',undefined,{pageHead:t=>`<h1>${t}</h1>`,breadcrumb:t=>t,sourceLink:(id,page,label)=>label});
const html=element('#main').innerHTML,views=element('#exam-topic-views');
const clean=(text,label)=>{assert.ok(!/undefined|NaN|\[object/.test(text),'Lege waarde: '+label);assert.ok(!/eigen vraag|eigen tentamenvraag/i.test(text),'Verboden tekst: '+label);};
clean(html,'analyse');
assert.ok(!html.includes('BELRE3: kies')&&!html.includes('ratio-'),'Oude tekst op de analysepagina');
const plain=s=>s.replace(/&/g,'&amp;').replace(/'/g,'&#39;');
for(const s of T.skills)assert.ok(html.includes(`>${plain(s.label)}</a>`),s.label);
for(const n of T.notAsked)assert.ok(html.includes(`>${plain(n.label)}</a>`),n.label);
assert.equal((html.match(/<h2>\d\. /g)||[]).length,6);
for(const id of ['analyse-structuur','analyse-typen','analyse-onderwerpen','analyse-vaardigheden','analyse-per-tentamen','analyse-aanpak'])assert.ok(html.includes(`id="${id}"`),id);

// Vier knoppen en één filter in elke weergave, via dezelfde afhandeling als op de site.
const click=dataset=>handlers['#exam-topic-viewsclick']({target:{closest:()=>({dataset})}});
const change=(dataset,extra)=>handlers['#exam-topic-viewschange']({target:Object.assign({dataset},extra)});
for(const [view] of V.VIEWS){
 click({view});
 const text=views.innerHTML;clean(text,view);
 assert.equal((text.match(/data-view="/g)||[]).length,4,view);
 assert.equal((text.match(/data-filter/g)||[]).length,1,view);
 assert.ok(text.includes(`data-view="${view}" aria-pressed="true"`),view);
}
const options={lessonHref:id=>'#les/'+id,evidence:()=>'<p>vraag</p>',progress:()=>({read:['mpu'],practice:Object.fromEntries([...new Set(Object.values(T.topics).map(t=>t.lesson))].map(id=>[id,{total:10,correct:5}])),made:new Set()})};
const render=(view,filter='')=>{const s=V.initial();s.view=view;s.filter=filter;return V.render(T,s,options);};
const noControls=text=>text.replace(/<select.*?<\/select>/gs,'').replace(/<details class="tv-how".*?<\/details>/s,'').replace(/<div class="tv-tabs".*?<\/div>/s,'');
for(const t of Object.values(T.topics))for(const view of ['tabel','heatmap'])assert.ok(render(view).includes(`>${plain(t.label)}</a>`),view+' '+t.label);
for(const p of T.packages)assert.ok(render('kaart').includes(`>${plain(p.label)}</a>`),p.label);
for(const t of Object.values(T.topics))if(t.lesson!=='tentamen')assert.ok(render('voortgang').includes(`>${plain(t.label)}</a>`),t.label);
// Het filter werkt in iedere weergave; prioriteit staat alleen op de kaart.
for(const view of ['tabel','heatmap','kaart','voortgang']){
 const steek=noControls(render(view,'opgave:1')),reg=noControls(render(view,'opgave:2')),group=noControls(render(view,'group:Toetsen'));
 assert.ok(steek.includes('Stratificatie')&&!steek.includes('Multicollineariteit'),view);
 assert.ok(reg.includes('Multicollineariteit')&&!reg.includes('Stratificatie'),view);
 assert.ok(group.includes('Hypothesen')&&!group.includes('Multicollineariteit'),view);
 if(view!=='kaart')assert.ok(!/Prioriteit|Altijd beheersen/.test(noControls(render(view))),view);
}
// Tabel: past zonder scrollbalk, sorteert, en de vragen openen onder de rij.
const table=render('tabel');assert.ok(table.includes('class="tv-fit"')&&!/tv-scroll/.test(table));
const first=html=>html.match(/<tbody><tr><td><a[^>]*>([^<]+)/)[1];
click({view:'tabel'});click({sort:'perExam'});assert.equal(first(views.innerHTML),T.topics['strata-schatten'].label);
click({sort:'meanShown'});assert.equal(first(views.innerHTML),T.topics.regressieschatter.label);
click({sort:'group'});assert.equal((views.innerHTML.match(/class="tv-group"/g)||[]).length,9);
click({open:'mpu'});assert.ok(views.innerHTML.includes('class="tv-detail"'));
// Heatmap: groepen en gemiddelde; nullen zijn leeg.
const heat=render('heatmap');assert.equal((heat.match(/class="tv-avg"/g)||[]).length,28);assert.equal((heat.match(/class="tv-group"/g)||[]).length,9);assert.ok(!/tv-cell[^>]*>0</.test(heat));
// Kaart: vier vakken met de doorgerekende aantallen.
assert.deepEqual(render('kaart').match(/<h3>[^<]+/g).map(x=>x.slice(4)),['Altijd beheersen (7)','Goed oefenen (6)','Gericht oefenen (5)','Kern kennen (2)']);
// Voortgang: leerstof, oefenvragen en tentamenvragen komen uit de bestaande opslag.
click({view:'voortgang'});
const row=label=>views.innerHTML.split('<tr>').find(r=>r.includes(`>${label}</a>`));
const mpu=row('Directe schatter (MPU)');
assert.ok(mpu.includes('tv-pill tv-on')&&mpu.includes('1 / 2 goed'),'les en oefenvragen');
const made=T.rows.filter(r=>r.topic==='mpu').map(r=>r.exam+'-'+r.question);
assert.ok(made.includes('20220316-1')&&made.includes('20211101-1'));
assert.ok(mpu.includes('2 / '+new Set(made).size+' gemaakt'),'pogingen en tentamenoefeningen tellen mee');
assert.ok(row('Verschilschatter').includes('1 / '),'dubbele datum telt mee bij maart 2020');
// Handmatig aanpassen wordt bewaard en gaat terug naar automatisch.
click({edit:''});assert.ok(views.innerHTML.includes('type="number"'));
change({set:'read',id:'quotient'},{checked:true});change({set:'exam',id:'quotient'},{max:7,value:'99'});
click({edit:''});
assert.equal((views.innerHTML.match(/class="tv-mark"/g)||[]).length,2);assert.ok(/7 \/ 7 gemaakt/.test(views.innerHTML));
assert.deepEqual(JSON.parse(saved['sra-topic-progress-v1']).quotient,{read:true,exam:7});
click({edit:''});click({reset:'quotient'});click({edit:''});assert.ok(!views.innerHTML.includes('tv-mark'));assert.equal(saved['sra-topic-progress-v1'],'{}');

// Iedere gekozen tentamendatum toont onderwerpen die samen 100 punten vormen.
const pick=element('#analysis-exam');
for(const e of D.exams){
 pick.value=e.id;pick.onchange();
 const detail=element('#analysis-exam-detail').innerHTML,part=detail.split('Punten per onderwerp')[1];
 const sum=[...part.matchAll(/<td><strong>(\d+)<\/strong><\/td>/g)].reduce((total,m)=>total+Number(m[1]),0);
 assert.equal(sum,100,e.id);assert.ok(!/undefined|NaN/.test(detail),e.id);
}
assert.ok(read('index.html').includes('js/exam-topic-views.js'));
const portable=read('SRA interactieve samenvatting.html');
assert.ok(portable.includes('window.SRAExamTopics')&&portable.includes('root.SRAExamTopicViews'));
console.log(`OK: tentamenanalyse met vier weergaven, ${Object.keys(T.topics).length} onderwerpen, ${T.packages.length} prioriteitspakketten, voortgang en ${D.exams.length} tentamendata van 100 punten.`);
