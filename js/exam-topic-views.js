/* Vier weergaven van de tentamenonderwerpen met één filter. Uitvoer is HTML-tekst, zodat dit ook zonder browser te testen is. */
(function(root){
 'use strict';
 const STORE='sra-topic-progress-v1';
 const VIEWS=[['tabel','Tabel'],['heatmap','Heatmap'],['kaart','Prioriteitenkaart'],['voortgang','Voortgang']];
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const decimal=n=>n.toFixed(1).replace('.',',');
 const blocksOf=T=>T.groups.flatMap((g,gi)=>g.blocks.map(b=>Object.assign({opgave:gi+1},b)));
 const topicList=T=>blocksOf(T).flatMap(b=>b.topics.map(id=>Object.assign({id,group:b.title,opgave:b.opgave,perExam:T.topics[id].points/T.exams.length,meanShown:T.topics[id].mean||0},T.topics[id])));
 function matches(t,filter){if(!filter)return true;const at=filter.indexOf(':'),kind=filter.slice(0,at),value=filter.slice(at+1);return kind==='group'?t.group===value:t[kind]===Number(value);}
 const topicLink=(t,o)=>`<a href="${o.lessonHref(t.lesson)}" title="${esc(t.label)}">${esc(t.short)}</a>`;
 const inGroup=(list,b)=>list.filter(t=>t.group===b.title).sort((x,y)=>y.exams-x.exams||y.points-x.points);
 function filter(T,s){
  const option=(value,text)=>`<option value="${esc(value)}"${s.filter===value?' selected':''}>${esc(text)}</option>`;
  return `<label for="tv-toon">Toon <select id="tv-toon" data-filter>${option('','Alles')}<optgroup label="Opgave">${T.groups.map((g,i)=>option('opgave:'+(i+1),g.title)).join('')}</optgroup><optgroup label="Groep">${blocksOf(T).map(b=>option('group:'+b.title,b.title)).join('')}</optgroup></select></label>`;
 }

 const COLUMNS=[['label','Onderwerp','tv-c-name'],['exams','Tentamens','tv-c-exams tv-num'],['recentExams','Laatste 3','tv-c-recent tv-num tv-hide-s'],['perExam','Per tentamen','tv-c-per tv-num'],['meanShown','Als het voorkomt','tv-c-mean tv-num tv-hide-s']];
 function table(T,s,o){
  const list=topicList(T).filter(t=>matches(t,s.filter)),count=T.exams.length,flat=s.sort.key!=='group';
  const row=t=>{const open=s.open.has(t.id),evidence=o.evidence?o.evidence(t.id):'';return `<tr><td>${topicLink(t,o)}</td><td class="tv-num">${t.exams} / ${count}</td><td class="tv-num tv-hide-s">${t.recentExams} / ${T.recentCount}</td><td class="tv-num">${decimal(t.perExam)}</td><td class="tv-num tv-hide-s">${decimal(t.meanShown)}</td><td>${evidence?`<button type="button" class="tv-link" data-open="${t.id}" aria-expanded="${open}">${open?'Verberg':'Bekijk'}</button>`:''}</td></tr>${open&&evidence?`<tr class="tv-detail"><td colspan="6">${evidence}</td></tr>`:''}`;};
  let body;
  if(flat){const key=s.sort.key;body=[...list].sort((x,y)=>key==='label'?s.sort.dir*x.label.localeCompare(y.label,'nl'):s.sort.dir*(x[key]-y[key])||y.points-x.points).map(row).join('');}
  else body=blocksOf(T).map(b=>{const rows=inGroup(list,b);return rows.length?`<tr class="tv-group"><th colspan="6" scope="colgroup">${esc(b.title)}</th></tr>${rows.map(row).join('')}`:'';}).join('');
  const head=COLUMNS.map(([key,title,cls])=>{const on=s.sort.key===key;return `<th scope="col" class="${cls}"${on?` aria-sort="${s.sort.dir>0?'ascending':'descending'}"`:''}><button type="button" data-sort="${key}">${title}${on?(s.sort.dir>0?' ▲':' ▼'):''}</button></th>`;}).join('');
  return `<div class="tv-bar">${filter(T,s)}<label class="tv-sortpick" for="tv-sortpick">Sorteer op <select id="tv-sortpick" data-sortpick><option value="group">Groep</option>${COLUMNS.map(([key,title])=>`<option value="${key}"${s.sort.key===key?' selected':''}>${title}</option>`).join('')}</select></label>${flat?'<button type="button" class="tv-small" data-sort="group">Terug naar groepen</button>':''}</div><div class="tv-frame"><table class="tv-fit"><thead><tr>${head}<th scope="col" class="tv-plain tv-c-q">Vragen</th></tr></thead><tbody>${body}</tbody></table></div>`;
 }

 function heatmap(T,s,o){
  const list=topicList(T).filter(t=>matches(t,s.filter)),count=T.exams.length,first=count-T.recentCount;
  const max=Math.max(...Object.values(T.byExam).flat()),shade=v=>Math.round(18+82*v/max);
  const months=['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'],label=e=>{const [,m,y]=e.date.split('-');return months[Number(m)-1]+' '+y.slice(2);};
  const cell=(v,i)=>{const gap=i===first?' tv-gap':'';if(!v)return `<td class="tv-cell${gap}" aria-label="0 punten"></td>`;const share=shade(v);return `<td class="tv-cell${gap}" style="background:color-mix(in srgb,var(--tv-heat) ${share}%,var(--tv-panel));color:${share>58?'#fff':'var(--tv-ink)'}">${v}</td>`;};
  const body=blocksOf(T).map(b=>{const rows=list.filter(t=>t.group===b.title);return rows.length?`<tr class="tv-group"><th colspan="${count+2}" scope="colgroup">${esc(b.title)}</th></tr>${rows.map(t=>`<tr><th class="tv-name" scope="row">${topicLink(t,o)}</th>${T.byExam[t.id].map(cell).join('')}<td class="tv-avg">${decimal(t.perExam)}</td></tr>`).join('')}`:'';}).join('');
  return `<div class="tv-bar">${filter(T,s)}</div><div class="tv-frame tv-scroll" tabindex="0" role="region" aria-label="Heatmap"><table class="tv-heat"><thead><tr><th class="tv-name" scope="col">Onderwerp</th>${T.exams.map((e,i)=>`<th scope="col" class="${i>=first?'tv-recent':''}">${label(e)}</th>`).join('')}<th scope="col">Gem.</th></tr></thead><tbody>${body}</tbody></table></div><div class="tv-legend"><span>Punten in dat tentamen:</span>${[1,4,8,max].map(v=>`<span><i style="background:color-mix(in srgb,var(--tv-heat) ${shade(v)}%,var(--tv-panel))"></i>${v}</span>`).join('')}<span>Gem. is het gemiddelde per tentamen</span></div>`;
 }

 function map(T,s,o){
  const count=T.exams.length,ids=new Set(topicList(T).filter(t=>matches(t,s.filter)).map(t=>t.package)),list=T.packages.filter(p=>ids.has(p.id)),weights=level=>T.packages.filter(p=>p.level===level).map(p=>p.weight);
  const boxes=T.levels.map(l=>{const items=list.filter(p=>p.level===l.level).sort((a,b)=>b.weight-a.weight);return `<div class="tv-box${l.level===1?' tv-first':''}"><h3>${esc(l.label)} (${items.length})</h3><ul>${items.map(p=>`<li><a href="${o.lessonHref(T.topics[p.topics[0]].lesson)}">${esc(p.label)}</a><b>${p.exams}/${count} · ${decimal(p.weight)}</b></li>`).join('')}</ul></div>`;}).join('');
  return `<div class="tv-bar">${filter(T,s)}</div><div class="tv-quad">${boxes}</div><details class="tv-how"><summary>Hoe is deze indeling bepaald?</summary><p>Achter elk onderwerp: aantal tentamens en gemiddelde punten per tentamen.</p><ol><li>Onderwerpen die in één vraag samenkomen of elkaar afwisselen, zijn samen beoordeeld.</li><li>De grenzen liggen in gaten in de cijfers. Altijd beheersen begint bij ${decimal(Math.min(...weights(1)))} punten, Goed oefenen stopt bij ${decimal(Math.max(...weights(2)))}. Goed oefenen begint bij ${decimal(Math.min(...weights(2)))} punten, Gericht oefenen stopt bij ${decimal(Math.max(...weights(3)))}.</li>${T.packages.every(p=>p.stable)?'<li>De indeling is getest: laat je één voor één elk tentamen weg, dan blijft alles in hetzelfde vak. Dat geldt ook als grensgevallen in de puntenindeling anders vallen.</li>':''}<li>Een nieuw tentamen is gebaseerd op het onderwijsmateriaal en kan afwijken.</li></ol><h4>Waarom staat iets waar het staat?</h4><ul>${T.packages.map(p=>`<li><strong>${esc(p.label)}:</strong> ${esc(p.why)}</li>`).join('')}</ul></details>`;
 }

 function examQuestions(T,id){return [...new Set(T.rows.filter(r=>r.topic===id).map(r=>r.exam+'-'+r.question))];}
 function progressModel(T,s,o){
  const data=o.progress?o.progress():{},read=new Set(data.read||[]),practice=data.practice||{},made=data.made||new Set();
  const list=topicList(T).filter(t=>t.id!=='gezamenlijk');
  const auto=Object.fromEntries(list.map(t=>{const questions=examQuestions(T,t.id),p=practice[t.lesson]||{total:0,correct:0};return [t.id,{read:read.has(t.lesson),mc:p.correct,mcTotal:p.total,exam:questions.filter(q=>made.has(q)).length,examTotal:questions.length}];}));
  const value=(id,key)=>s.manual[id]&&key in s.manual[id]?s.manual[id][key]:auto[id][key];
  const stand=id=>{const a=auto[id],parts=[value(id,'read')?1:0];if(a.mcTotal)parts.push(value(id,'mc')/a.mcTotal);if(a.examTotal)parts.push(value(id,'exam')/a.examTotal);return parts.reduce((x,y)=>x+y,0)/parts.length;};
  return {list,auto,value,left:t=>t.perExam*(1-stand(t.id))};
 }
 function progress(T,s,o){
  const {list:all,auto,value,left}=progressModel(T,s,o),list=all.filter(t=>matches(t,s.filter));
  if(!list.length)return `<div class="tv-bar">${filter(T,s)}</div><p class="tv-note">Voor deze keuze is geen voortgang bij te houden.</p>`;
  const top=Math.max(...list.map(left),.1),best=[...list].sort((a,b)=>left(b)-left(a))[0];
  const isManual=(id,key)=>!!s.manual[id]&&key in s.manual[id],mark=(id,key)=>isManual(id,key)?'<span class="tv-mark">handmatig</span>':'';
  const row=t=>{const id=t.id,a=auto[id],l=left(t);
   const leerstof=s.edit?`<label class="tv-edit"><input type="checkbox" id="tv-r-${id}" data-set="read" data-id="${id}"${value(id,'read')?' checked':''}> Gelezen</label>`:`<span class="tv-pill${value(id,'read')?' tv-on':''}">${value(id,'read')?'Gelezen':'Niet gelezen'}</span>${mark(id,'read')}`;
   const number=(key,total,word,label)=>s.edit?`<span class="tv-edit"><input type="number" id="tv-${key}-${id}" aria-label="${label}, ${esc(t.label)}" min="0" max="${total}" data-set="${key}" data-id="${id}" value="${value(id,key)}"> / ${total}</span>`:`${value(id,key)} / ${total} ${word}${mark(id,key)}`;
   const reset=s.edit&&s.manual[id]?` <button type="button" class="tv-link" data-reset="${id}">Automatisch</button>`:'';
   return `<tr><td>${topicLink(t,o)}${reset}</td><td>${leerstof}</td><td>${a.mcTotal?number('mc',a.mcTotal,'goed','Goed beantwoorde oefenvragen'):''}</td><td>${a.examTotal?number('exam',a.examTotal,'gemaakt','Gemaakte tentamenvragen'):''}</td><td class="tv-hide-s"><div class="tv-gain"><span><i style="width:${(100*l/top).toFixed(1)}%"></i></span>${decimal(l)}</div></td></tr>`;};
  const pct=(a,b)=>b?Math.round(100*a/b):0,lessons=[...new Map(list.map(t=>[t.lesson,t])).values()];
  const tile=(name,p)=>`<div class="tv-tile"><span>${name}</span><div class="tv-meter"><i style="width:${p}%"></i></div><strong>${p}%</strong></div>`;
  const tiles=tile('Leerstof gelezen',pct(list.filter(t=>value(t.id,'read')).length,list.length))+tile('Oefenvragen goed',pct(lessons.reduce((n,t)=>n+value(t.id,'mc'),0),lessons.reduce((n,t)=>n+auto[t.id].mcTotal,0)))+tile('Tentamenvragen gemaakt',pct(list.reduce((n,t)=>n+value(t.id,'exam'),0),list.reduce((n,t)=>n+auto[t.id].examTotal,0)));
  const body=blocksOf(T).map(b=>{const rows=inGroup(list,b);return rows.length?`<tr class="tv-group"><th colspan="5" scope="colgroup">${esc(b.title)} <span>· nog ${decimal(rows.reduce((n,t)=>n+left(t),0))} punten te winnen</span></th></tr>${rows.map(row).join('')}`:'';}).join('');
  return `<div class="tv-bar">${filter(T,s)}<button type="button" class="tv-small" data-edit aria-pressed="${s.edit}">${s.edit?'Klaar met aanpassen':'Handmatig aanpassen'}</button><p class="tv-callout" role="status">Oefen eerst: ${esc(best.short)}, nog ${decimal(left(best))} punten</p></div><div class="tv-tiles">${tiles}</div><div class="tv-frame"><table class="tv-fit"><thead><tr><th scope="col" class="tv-plain">Onderwerp</th><th scope="col" class="tv-plain tv-c-read">Leerstof</th><th scope="col" class="tv-plain tv-c-mc">Oefenvragen</th><th scope="col" class="tv-plain tv-c-ex">Tentamenvragen</th><th scope="col" class="tv-plain tv-c-gain tv-hide-s">Nog te winnen</th></tr></thead><tbody>${body}</tbody></table></div><p class="tv-note">Wordt automatisch bijgehouden op dit apparaat. Nog te winnen: punten per tentamen, keer wat nog openstaat.</p>`;
 }

 const RENDER={tabel:table,heatmap,kaart:map,voortgang:progress};
 function render(T,s,o){return `<div class="tv-tabs" role="group" aria-label="Kies een weergave">${VIEWS.map(([id,label])=>`<button type="button" data-view="${id}" aria-pressed="${id===s.view}">${label}</button>`).join('')}</div>${RENDER[s.view](T,s,o)}`;}
 const initial=()=>({view:'tabel',filter:'',sort:{key:'group',dir:1},open:new Set(),edit:false,manual:{}});
 function setSort(s,key){if(key==='group')s.sort={key,dir:1};else if(s.sort.key===key)s.sort.dir*=-1;else s.sort={key,dir:key==='label'?1:-1};}
 function loadManual(storage,T){try{const raw=JSON.parse(storage.getItem(STORE)||'{}'),clean={};for(const [id,v] of Object.entries(raw))if(T.topics[id]&&v&&typeof v==='object'){const item={};if(typeof v.read==='boolean')item.read=v.read;for(const key of ['mc','exam'])if(Number.isInteger(v[key])&&v[key]>=0)item[key]=v[key];if(Object.keys(item).length)clean[id]=item;}return clean;}catch(_){return {};}}
 function mount(el,T,o){
  const s=initial(),storage=o.storage;s.manual=storage?loadManual(storage,T):{};
  const save=()=>{try{storage?.setItem(STORE,JSON.stringify(s.manual));}catch(_){}},draw=()=>{el.innerHTML=render(T,s,o);};
  el.addEventListener('click',event=>{const b=event.target.closest('button');if(!b)return;const d=b.dataset;
   if(d.view)s.view=d.view;else if(d.sort)setSort(s,d.sort);else if(d.open){if(s.open.has(d.open))s.open.delete(d.open);else s.open.add(d.open);}else if('edit' in d)s.edit=!s.edit;else if(d.reset){delete s.manual[d.reset];save();}else return;draw();});
  el.addEventListener('change',event=>{const t=event.target,d=t.dataset;
   if('filter' in d)s.filter=t.value;
   else if('sortpick' in d)s.sort=t.value==='group'?{key:'group',dir:1}:{key:t.value,dir:t.value==='label'?1:-1};
   else if(d.set){s.manual[d.id]=s.manual[d.id]||{};s.manual[d.id][d.set]=d.set==='read'?t.checked:Math.max(0,Math.min(Number(t.max),Math.round(Number(t.value)||0)));save();}
   else return;draw();});
  draw();
 }
 root.SRAExamTopicViews={mount,render,initial,VIEWS};
})(typeof window==='undefined'?globalThis:window);
