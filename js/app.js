(function(){
 'use strict';
 const C=window.SRA,KEY='sra-learning-v1',LESSONS=C.lessons;
 const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const historyBack=$('#history-back');
 const metric=(value,label)=>`<div class="metric"><b>${esc(value)}</b><span>${esc(label)}</span></div>`;
 const validIds=new Set(LESSONS.map(l=>l.id)),questionMap=new Map(LESSONS.flatMap(l=>l.questions.map(q=>[q.id,q])));
 let state={version:1,read:[],answers:{},notes:{},font:16,directCheck:false},storageAvailable=true,sidebarLessonId=null;
 function sanitize(obj){if(!obj||obj.version!==1||typeof obj!=='object')throw Error('Dit is geen ondersteund SRA-voortgangsbestand.');const s={version:1,read:[],answers:{},notes:{},font:16,directCheck:obj.directCheck===true};if(Array.isArray(obj.read))s.read=[...new Set(obj.read.filter(id=>validIds.has(id)))];if(obj.answers&&typeof obj.answers==='object'){for(const [id,a] of Object.entries(obj.answers)){const q=questionMap.get(id);if(q&&a&&Number.isInteger(a.choice)&&a.choice>=0&&a.choice<q.options.length){s.answers[id]={choice:a.choice,correct:a.choice===q.correct,attempts:Number.isInteger(a.attempts)?Math.max(1,Math.min(999,a.attempts)):1,firstCorrect:typeof a.firstCorrect==='boolean'?a.firstCorrect:a.choice===q.correct};}}}if(obj.notes&&typeof obj.notes==='object'){for(const c of C.examCases)if(typeof obj.notes[c.id]==='string')s.notes[c.id]=obj.notes[c.id].slice(0,30000);}if(Number.isInteger(obj.font))s.font=Math.max(14,Math.min(22,obj.font));if(Number.isInteger(obj.cirrusFont))s.cirrusFont=Math.max(10,Math.min(24,obj.cirrusFont));return s;}
 try{const saved=localStorage.getItem(KEY);if(saved)state=sanitize(JSON.parse(saved));}catch(e){storageAvailable=false;}
 function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){storageAvailable=false;toast('Opslag is niet beschikbaar. Exporteer je voortgang om deze te bewaren.');}}
 window.SRAAnswerSettings={enabled:()=>state.directCheck===true,set(enabled){state.directCheck=enabled===true;save();document.querySelectorAll('[data-direct-check]').forEach(input=>{input.checked=state.directCheck;});}};
 function toast(s){$('#toast').textContent=s;$('#toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('#toast').classList.remove('show'),3500);}
 function askConfirmation(message){return new Promise(resolve=>{const d=$('#confirmation');$('#confirm-message').textContent=message;d.returnValue='cancel';d.addEventListener('close',()=>resolve(d.returnValue==='confirm'),{once:true});d.showModal();});}
 function href(id,page=1){return `bronnen/${C.sources[id].file}#page=${page}`;}
 function sourceLink(id,page,label){return `<a href="${href(id,page)}" target="_blank" rel="noopener">${esc(label||C.sources[id].title)} ↗</a>`;}
 function score(l){return l.questions.filter(q=>state.answers[q.id]?.correct).length;}
 function mastered(l){return score(l)===l.questions.length;}
 const phases=[...new Set(LESSONS.map(l=>l.phase))];
 const allPracticeItems=LESSONS.flatMap(l=>l.questions.map((q,i)=>({lesson:l,q,first:i===0})));
 const pageHead=(title)=>`<header class="study-page-title"><h1>${esc(title)}</h1></header>`;
 const breadcrumb=(label,parent)=>`<nav class="sra-breadcrumb" aria-label="Kruimelpad"><a href="#home">Home</a><span aria-hidden="true">/</span>${parent?`<a href="${esc(parent.href)}">${esc(parent.label)}</a><span aria-hidden="true">/</span>`:''}<span>${esc(label)}</span></nav>`;
 function resultBadge(correct,total,attempted){return `<span class="study-score ${!attempted?'ungraded':correct===total?'full':correct===0?'zero':'partial'}">${attempted?`${correct} / ${total} goed`:'Nog niet gemaakt'}</span>`;}
 function renderHome(){
  const icons={learn:'<path d="M3 5h6a4 4 0 0 1 4 4v12a4 4 0 0 0-4-4H3V5Zm20 0h-6a4 4 0 0 0-4 4v12a4 4 0 0 1 4-4h6V5Z"/>',practice:'<path d="m4 7 2 2 4-4M13 7h10M4 15l2 2 4-4M13 15h10M4 23l2 2 4-4M13 23h10"/>',exam:'<rect x="5" y="4" width="18" height="23" rx="2"/><path d="M10 4V2h8v2M10 11h8M10 16h8M10 21h5"/>'};
  const choices=[{id:'leren',icon:'learn',title:'Leren',description:'Begin bij nul. Begrijp de theorie met uitleg, formules, voorbeelden en interactieve rekenbladen.',count:`${LESSONS.length} lessen · stap voor stap`},{id:'tentamen/mc',icon:'practice',title:'Oefenvragen maken',description:'Kies een onderwerp en beantwoord telkens één vraag. Controleer je antwoord en lees de uitleg.',count:`${window.SRAMCData.topics.reduce((sum,t)=>sum+t.questions.length,0)} MC-vragen · ${window.SRAMCData.topics.length} onderwerpen · 3 niveaus`},{id:'tentamen/analyse',icon:'exam',title:'Tentamenanalyse',description:'Ontdek de opbouw, terugkerende onderwerpen en vraagtypen. Bekijk wat elke opgave van je vraagt.',count:`${window.SRAExamData.exams.filter(e=>!e.duplicateOf).length} verschillende tentamens · structuur en leeradvies`},{id:'tentamen',icon:'exam',title:'Tentamens oefenen',description:'Maak een volledig tentamen in de Cirrus-omgeving. Bekijk daarna je antwoorden en het antwoordmodel.',count:`${window.SRA_CIRRUS_EXAMS.length} volledige tentamens · originele vragen`}];
  $('#main').innerHTML=`<section class="sra-home"><header class="sra-home-intro"><p class="eyebrow">Sampling & Regression Analysis</p><h1>Wat wil je doen?</h1><p>Van de eerste begrippen naar zelfstandig een tentamenopgave oplossen.</p></header><div class="sra-home-choices">${choices.map((c,i)=>`<a class="sra-home-choice" href="#${c.id}"><span class="sra-choice-icon" aria-hidden="true"><svg viewBox="0 0 28 30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${icons[c.icon]}</svg></span><h2>${c.title}</h2><p>${c.description}</p><span class="sra-choice-count">${esc(c.count)}</span><span class="sra-choice-action">${['Open de leerroute','Kies je oefenvragen','Bekijk de tentamenanalyse','Open het tentamendashboard'][i]} <span aria-hidden="true">→</span></span></a>`).join('')}</div><a class="sra-formula-entry" href="#formules"><span><strong>Formules begrijpen en uitproberen</strong><br>Alle onderwerpen bij elkaar: betekenis van symbolen, voorwaarden, rekenstappen en interactieve berekeningen.</span><span aria-hidden="true">→</span></a><p class="sra-home-help">Nieuw met statistiek? Begin bij <strong>Leren</strong>. Je antwoorden en uitwerkingen blijven in deze browser bewaard.</p></section>`;
 }
 function renderLearning(){
  const next=LESSONS.find(l=>!state.read.includes(l.id))||LESSONS[0];
  $('#main').innerHTML=`${pageHead('Leren')}<div class="sra-course-overview">${breadcrumb('Leren')}<header class="sra-mode-intro"><div><h2>De leerroute vanaf nul</h2><p>Volg de lessen van boven naar beneden. Elke les verbindt de uitleg met een voorbeeld, zelf onderzoeken en korte begripchecks.</p></div><a class="study-btn primary" href="#les/${next.id}">${state.read.length?'Verder leren':'Begin bij les 1'}</a></header><div class="sra-learning-phases">${phases.map((phase,i)=>{const lessons=LESSONS.filter(l=>l.phase===phase);return `<section class="sra-learning-phase"><header><span class="sra-phase-no">${i+1}</span><div><h2>${esc(phase)}</h2><p>${lessons.length} lessen</p></div></header><ol>${lessons.map(l=>`<li><a href="#les/${l.id}" class="sra-learning-item"><span class="sra-learning-no">${LESSONS.indexOf(l)+1}</span><span class="sra-learning-name">${esc(l.title)}</span><span class="sra-learning-status${state.read.includes(l.id)?' is-read':''}">${state.read.includes(l.id)?'Gelezen':'Nog te lezen'}</span><span aria-hidden="true">→</span></a></li>`).join('')}</ol></section>`;}).join('')}</div><p class="footer-note">Je kunt ook rechtstreeks een onderwerp kiezen. Wil je alleen vragen beantwoorden? Ga naar <a href="#oefenen">Oefenvragen maken</a>.</p></div>`;
 }
 function practiceSet(scope){
  if(scope==='alles')return {scope,title:'Alle oefenvragen',items:allPracticeItems};
  const phaseMatch=/^fase-(\d+)$/.exec(scope||'');
  if(phaseMatch){const phase=phases[Number(phaseMatch[1])-1];if(phase)return {scope,title:phase,items:allPracticeItems.filter(item=>item.lesson.phase===phase)};}
  if(scope?.startsWith('les-')){const lesson=LESSONS.find(l=>l.id===scope.slice(4));if(lesson)return {scope,title:lesson.title,items:allPracticeItems.filter(item=>item.lesson.id===lesson.id)};}
  return null;
 }
 function practiceStart(set){return `#oefenen/${set.scope}/${(set.items.find(item=>!state.answers[item.q.id])||set.items[0]).q.id}`;}
 function renderPracticeSelection(){
  $('#main').innerHTML=`${pageHead('Oefenvragen maken')}<div class="sra-course-overview">${breadcrumb('Oefenvragen maken')}<header class="sra-mode-intro"><div><h2>Welk onderwerp wil je oefenen?</h2><p>Oefen een hele fase of kies één les. Je krijgt steeds één vraag met uitleg na het controleren. De antwoorden zijn dezelfde als de begripchecks in de lessen.</p></div><a class="study-btn" href="${practiceStart(practiceSet('alles'))}">Alle ${questionMap.size} vragen</a></header><div class="sra-practice-phases">${phases.map((phase,i)=>{const set=practiceSet('fase-'+(i+1)),lessons=LESSONS.filter(l=>l.phase===phase),done=set.items.filter(item=>state.answers[item.q.id]).length;return `<section class="sra-practice-phase"><header><div><h2>${esc(phase)}</h2><p>${set.items.length} vragen · ${done} beantwoord</p></div><a class="study-btn primary" href="${practiceStart(set)}">${done?'Verder oefenen':'Start deze fase'}</a></header><details><summary>Kies één les</summary><ul>${lessons.map(l=>`<li><a href="${practiceStart(practiceSet('les-'+l.id))}"><span>${esc(l.title)}</span><span>${l.questions.length} vragen <span aria-hidden="true">→</span></span></a></li>`).join('')}</ul></details></section>`;}).join('')}</div><p class="footer-note">Een overgeslagen vraag blijft onbeantwoord. Je eerste en laatste gecontroleerde poging worden apart bewaard.</p></div>`;
 }
 function renderPractice(scope,id){
  const set=practiceSet(scope);
  if(!set){renderPracticeSelection();return;}
  if(id==='resultaat'){renderPracticeResults(set);return;}
  if(id&&!set.items.some(item=>item.q.id===id)){renderPracticeSelection();return;}
  const item=set.items.find(item=>item.q.id===id)||set.items.find(item=>!state.answers[item.q.id])||set.items[0],index=set.items.indexOf(item),q=item.q;
  $('#main').innerHTML=`${pageHead('Oefenvragen maken')}<div class="sra-practice-runner">${breadcrumb(set.title,{label:'Oefenvragen',href:'#oefenen'})}<header class="sra-practice-heading"><h2>${esc(set.title)}</h2><a class="study-btn" href="#oefenen">Andere reeks kiezen</a></header><article class="sra-practice-paper"><header class="sra-question-identity"><span class="sra-question-number">${index+1}</span><span>${esc(item.lesson.title)}</span><span class="sra-question-position">VRAAG <strong>${index+1}</strong> / ${set.items.length}</span></header><div class="sra-practice-question">${renderQuestion(q,index)}<details class="sra-question-help"><summary>Bijbehorende uitleg</summary><p>Deze vraag hoort bij <a href="#les/${item.lesson.id}/${q.id}">${esc(item.lesson.title)}</a>. Je kunt na het lezen via de terugknop van je browser naar deze vraag terug.</p></details></div><nav class="sra-practice-footer" aria-label="Navigatie oefenvragen"><div>${index?`<a class="study-btn" href="#oefenen/${set.scope}/${set.items[index-1].q.id}">Vorige</a>`:'<button class="study-btn" disabled>Vorige</button>'}<button class="study-btn" id="practice-overview" type="button">Overzicht</button></div><span id="practice-count" class="sra-practice-count"></span><div><a class="study-btn" href="#oefenen/${set.scope}/resultaat">Resultaten</a><a class="study-btn primary" href="#oefenen/${set.scope}/${index<set.items.length-1?set.items[index+1].q.id:'resultaat'}">${index<set.items.length-1?'Volgende':'Reeks afronden'}</a></div></nav></article><p class="footer-note">Je gecontroleerde antwoord wordt bewaard. Vink ‘Direct nakijken bij antwoordkeuze’ aan om na elke keuze meteen uitleg te zien.</p></div>`;
  const update=()=>{$('#practice-count').textContent=`${set.items.filter(item=>state.answers[item.q.id]).length} / ${set.items.length} beantwoord`;};
  bindQuestionChecks(update);update();
  $('#practice-overview').onclick=()=>showQuestionOverview(item.lesson,set,q.id);
 }
 function renderPracticeResults(set){
  const attempted=set.items.filter(item=>state.answers[item.q.id]),correct=attempted.filter(item=>state.answers[item.q.id].correct).length,first=attempted.filter(item=>state.answers[item.q.id].firstCorrect).length;
  $('#main').innerHTML=`${pageHead('Resultaten oefenvragen')}<div class="sra-course-overview">${breadcrumb(set.title,{label:'Oefenvragen',href:'#oefenen'})}<h2>${esc(set.title)}</h2><p class="muted">Je opgeslagen antwoorden voor deze reeks. Eerste pogingen blijven behouden als je een vraag herhaalt.</p><div class="stats">${metric(`${attempted.length}/${set.items.length}`,'Vragen beantwoord')}${metric(`${correct}/${set.items.length}`,'Laatste poging goed')}${metric(`${first}/${attempted.length}`,'Begripchecks: eerste poging goed / gemaakt')}</div><div class="actions"><a class="study-btn primary" href="${practiceStart(set)}">${attempted.length<set.items.length?'Verder met onbeantwoorde vragen':'Reeks herhalen'}</a><a class="study-btn" href="#oefenen">Andere reeks kiezen</a></div><ol class="sra-practice-results">${set.items.map((item,i)=>{const a=state.answers[item.q.id];return `<li><a class="study-result-row" href="#oefenen/${set.scope}/${item.q.id}"><span>${i+1}</span><span>${esc(item.q.prompt)}</span>${resultBadge(a?.correct?1:0,1,!!a)}</a></li>`;}).join('')}</ol><p class="footer-note">Dit is een overzicht van begripchecks, geen tentamencijfer.</p></div>`;
 }
 function resultOverview(){
  return `<section class="sra-results" aria-label="Resultaten per onderdeel">${phases.map(phase=>{const lessons=LESSONS.filter(l=>l.phase===phase),questions=lessons.flatMap(l=>l.questions),correct=questions.filter(q=>state.answers[q.id]?.correct).length,attempted=questions.some(q=>state.answers[q.id]);return `<section class="result-group"><h2 class="study-result-row"><span>${esc(phase)}</span>${resultBadge(correct,questions.length,attempted)}</h2>${lessons.map(l=>`<details class="result-lesson"><summary class="study-result-row"><span>${esc(l.title)}</span>${resultBadge(score(l),l.questions.length,l.questions.some(q=>state.answers[q.id]))}</summary><div class="result-expanded"><p class="muted">${state.read.includes(l.id)?'Als gelezen gemarkeerd.':'Nog niet als gelezen gemarkeerd.'} <a href="#les/${l.id}">Open de les</a></p>${l.questions.map((q,i)=>{const a=state.answers[q.id];return `<details class="result-question"><summary class="study-result-row"><span>${i+1}. ${esc(q.prompt)}</span>${resultBadge(a?.correct?1:0,1,!!a)}</summary><div class="result-answer question-feedback">${a?feedback(q,a):'<p>Maak eerst de begripcheck in de les.</p>'}</div></details>`;}).join('')}</div></details>`).join('')}</section>`;}).join('')}</section>`;
 }
 function focusQuestion(id){
  const box=[...document.querySelectorAll('[data-question]')].find(el=>el.dataset.question===id);
  if(!box)return;
  box.scrollIntoView({block:'center',behavior:'instant'});
  box.querySelector('input').focus({preventScroll:true});
 }
 function showCurrentSidebarLesson(){
  const sidebar=$('#sidebar'),link=sidebar.querySelector('[aria-current="page"]');
  if(!link||!sidebar.clientHeight)return;
  const frame=sidebar.getBoundingClientRect(),item=link.getBoundingClientRect(),padding=12;
  if(item.top<frame.top+padding)sidebar.scrollTop-=frame.top+padding-item.top;
  else if(item.bottom>frame.bottom-padding)sidebar.scrollTop+=item.bottom-frame.bottom+padding;
 }
 function showQuestionOverview(lesson,set=null,currentId=null){
  const items=set?set.items:allPracticeItems.filter(item=>item.lesson.phase===lesson.phase);
  const remaining=items.filter(item=>!state.answers[item.q.id]).length,dialog=$('#question-overview');
  const columns=Math.min(3,Math.ceil(items.length/10));
  $('#question-overview-title').textContent='Vragenoverzicht';
  $('#question-overview-content').innerHTML=`<p class="muted">${esc(set?set.title:lesson.phase)} · ${items.length} vragen. Kies een vraag om verder te gaan.</p><div class="study-overview-body-inner"><div class="study-overview-remaining">NOG TE DOEN <strong>${remaining}</strong></div><ol class="study-overview-grid" style="--overview-columns:${columns};--overview-rows:${Math.ceil(items.length/columns)}">${items.map((item,i)=>{const target=set?`#oefenen/${set.scope}/${item.q.id}`:`#les/${item.lesson.id}/${item.q.id}`;return `<li class="${item.first&&i?'study-overview-divider':''}">${item.first?`<span class="sr-only">${esc(item.lesson.title)}</span>`:''}<a href="${target}" data-overview-question="${item.q.id}" class="study-overview-item ${state.answers[item.q.id]?'is-answered':''}" aria-label="Vraag ${i+1}: ${esc(item.q.prompt)}. ${state.answers[item.q.id]?'Beantwoord':'Niet beantwoord'}. ${esc(item.lesson.title)}" ${currentId===item.q.id||location.hash===target?'aria-current="step"':''}><span class="study-overview-number">${i+1}</span><span class="study-overview-state">${state.answers[item.q.id]?'Beantwoord':'Niet<br>beantwoord'}</span></a></li>`;}).join('')}</ol></div>`;
  $('#question-overview-range').textContent=`1–${items.length}`;
  dialog.querySelectorAll('[data-overview-question]').forEach(a=>a.onclick=e=>{dialog.close();if(location.hash===a.hash){e.preventDefault();focusQuestion(a.dataset.overviewQuestion);}});
  dialog.showModal();
 }
 function renderSidebar(current){let phase='';$('#sidebar').innerHTML=`<a class="sra-side-back" href="#leren">← Alle lessen</a><div class="side-head">Jouw leerroute</div><div class="progress-label"><span>${LESSONS.filter(mastered).length} van ${LESSONS.length} lessen: checks goed</span></div><div class="track"><span style="width:${LESSONS.filter(mastered).length/LESSONS.length*100}%"></span></div><p class="muted">Begin bovenaan. Herhalen mag altijd.</p>`+LESSONS.map((l,i)=>{const head=phase!==l.phase?`<div class="phase-title">${esc(l.phase)}</div>`:'';phase=l.phase;return head+`<a class="lesson-link ${mastered(l)?'mastered':''}" href="#les/${l.id}" ${current===l.id?'aria-current="page"':''}><span class="lesson-no">${mastered(l)?'✓':String(i+1).padStart(2,'0')}</span><span>${esc(l.title)}</span>${state.read.includes(l.id)?'<span class="read-dot" title="Als gelezen gemarkeerd" aria-label="Gelezen">●</span>':''}</a>`;}).join('')+`<p class="footer-note">Gelezen en checks goed zijn aparte stappen. Je voortgang blijft in deze browser.</p>`;}
 function wrapTables(){document.querySelectorAll('.section-body table,.formula-guide-card table').forEach(table=>{const wrapper=document.createElement('div');wrapper.className='table-scroll';wrapper.tabIndex=0;wrapper.setAttribute('role','region');wrapper.setAttribute('aria-label','Tabel; horizontaal scrollbaar op kleine schermen');table.before(wrapper);wrapper.append(table);});}
 function renderQuestion(q,i){const a=state.answers[q.id];return `<div class="question" data-question="${q.id}"><fieldset><legend>${i+1}. ${esc(q.prompt)}</legend><div class="answers">${q.options.map((o,j)=>`<div class="answer-option"><label class="answer ${a?.choice===j?(a.correct?'is-correct':'is-incorrect'):''}"><input type="radio" name="${q.id}" value="${j}" aria-describedby="${q.id}-feedback-${j}" ${a?.choice===j?'checked':''}><span>${esc(o)}</span></label><div class="question-feedback" id="${q.id}-feedback-${j}" data-option-feedback="${j}" aria-live="polite" ${a?.choice===j?'':'hidden'}>${a?.choice===j?feedback(q,a,true):''}</div></div>`).join('')}</div></fieldset><div class="actions question-check-actions"><button class="btn small" data-check="${q.id}" ${a?'disabled':''}>Controleer mijn antwoord</button><label class="direct-check-option"><input type="checkbox" data-direct-check data-note="direct-check" ${window.SRAAnswerSettings.enabled()?'checked':''}> Direct nakijken bij antwoordkeuze</label></div></div>`;}
 function recognitionFeedback(q){
  const r=q.recognition;
  if(!r)return q.pattern?`<div class="question-pattern"><h4>Patroonherkenning</h4><p>${esc(q.pattern)}</p></div>`:'';
  const steps=[['Dit herken je in de vraag',r.signals],['Dit betekent het',r.meaning],['Zo kies je de aanpak',r.approach],['Dit moet je antwoord bevatten',r.answer]];
  return `<div class="question-pattern"><h4>Patroonherkenning</h4><dl class="question-recognition">${steps.map(([label,value])=>`<dt>${esc(label)}</dt><dd>${Array.isArray(value)?`<ul>${value.map(item=>`<li>${esc(item)}</li>`).join('')}</ul>`:esc(value||'')}</dd>`).join('')}</dl></div>`;
 }
 function feedback(q,a,choiceVisible=false){const lesson=LESSONS.find(l=>l.questions.some(item=>item.id===q.id)),refs=q.refs||lesson?.refs||[];return `<div class="feedback ${a.correct?'':'wrong'}"><h3>${a.correct?'Goed beantwoord':'Nog niet goed'}</h3>${a.correct&&choiceVisible?'':`<p><strong>Jouw antwoord:</strong> ${esc(q.options[a.choice])}</p>`}${q.optionExplanations?.[a.choice]?`<p>${esc(q.optionExplanations[a.choice])}</p>`:''}${!a.correct?`<p><strong>Het juiste antwoord:</strong> ${esc(q.options[q.correct])}</p>`:''}<h4>Zo werk je het uit</h4>${q.explanation&&!q.steps?.length?`<p>${esc(q.explanation)}</p>`:''}${q.steps?.length?`<ol>${q.steps.map(step=>`<li>${esc(step)}</li>`).join('')}</ol>`:''}${recognitionFeedback(q)}${q.trap?`<div class="question-trap"><h4>Let op deze valkuil</h4><p>${esc(q.trap)}</p></div>`:''}${q.optionExplanations?.length?`<details class="answer-reasons"><summary>${a.correct?'Waarom de andere antwoorden niet kloppen':'De andere antwoordmogelijkheden'}</summary>${q.options.map((option,index)=>index===a.choice?'':`<p><strong>${esc(option)}${index===q.correct?' (juist)':''}</strong><br>${esc(q.optionExplanations[index])}</p>`).join('')}</details>`:''}${refs.length?`<p class="question-sources">Bronnen: ${refs.map(r=>sourceLink(r.source,r.page,`${C.sources[r.source].title}, p. ${r.page}`)).join(' · ')}</p>`:''}</div><div class="question-result">Eerste poging: ${a.firstCorrect?'goed':'nog niet goed'} · Laatste poging: ${a.correct?'goed':'nog niet goed'}</div>`;}
 function bindQuestionChecks(onUpdate=()=>{}){
  $('#main').querySelectorAll('[data-check]').forEach(btn=>{
   const q=questionMap.get(btn.dataset.check),box=btn.closest('.question');
   const showFeedback=answer=>{box.querySelectorAll('[data-option-feedback]').forEach(panel=>{const active=!!answer&&Number(panel.dataset.optionFeedback)===answer.choice;panel.innerHTML=active?feedback(q,answer,true):'';panel.hidden=!active;const label=panel.previousElementSibling;label.classList.toggle('is-correct',active&&answer.correct);label.classList.toggle('is-incorrect',active&&!answer.correct);});btn.disabled=!!answer;};
   box.querySelectorAll('input[type="radio"]').forEach(input=>input.addEventListener('change',event=>{const previous=state.answers[q.id];showFeedback(previous&&previous.choice===Number(input.value)?previous:null);if(window.SRAAnswerSettings.enabled()&&event.isTrusted!==false)btn.onclick();}));
   box.querySelector('[data-direct-check]').onchange=event=>window.SRAAnswerSettings.set(event.target.checked);
   btn.onclick=()=>{
    const radio=box.querySelector('input[type="radio"]:checked');
    if(!radio){toast('Kies eerst een antwoord.');box.querySelector('input').focus();return;}
    const choice=Number(radio.value),previous=state.answers[q.id];
    if(!previous||previous.choice!==choice){if(window.StudyMeasure){const lesson=LESSONS.find(l=>l.questions.some(item=>item.id===q.id));window.StudyMeasure.answer('lesson:'+q.id+':'+((previous?.attempts||0)+1),choice,location.hash.startsWith('#oefenen/')?window.StudyMeasure.describe().names:['Leren',lesson.title,'Kennischeck '+(lesson.questions.findIndex(item=>item.id===q.id)+1)],true);window.StudyMeasure.activity('Uitwerking bekeken',location.hash.startsWith('#oefenen/')?window.StudyMeasure.describe().names:['Leren',lesson.title,'Kennischeck '+(lesson.questions.findIndex(item=>item.id===q.id)+1)]);}const correct=choice===q.correct;state.answers[q.id]={choice,correct,attempts:(previous?.attempts||0)+1,firstCorrect:previous?previous.firstCorrect:correct};save();}
    showFeedback(state.answers[q.id]);onUpdate();
   };
  });
 }
 function renderLesson(id){const l=LESSONS.find(x=>x.id===id)||LESSONS[0],i=LESSONS.indexOf(l),words=l.sections.reduce((n,s)=>n+s.html.split(/\s+/).length,0),minutes=Math.ceil(words/150)+5;
  $('#main').innerHTML=`<article><header class="lesson-top"><div class="eyebrow"><span>${esc(l.phase)}</span><span class="pill">Les ${i+1} / ${LESSONS.length}</span></div><h1>${esc(l.title)}</h1><p class="lead">${esc(l.intro)}</p><div class="lesson-meta"><span>± ${minutes} min uitleg & oefenen</span><span>${l.questions.length} begripchecks</span><span id="lesson-score">${score(l)}/${l.questions.length} checks goed</span></div><nav class="jump" aria-label="Onderdelen van deze les"><a href="#uitleg" data-scroll="uitleg">Uitleg</a>${l.lab?'<a href="#onderzoek" data-scroll="onderzoek">Zelf onderzoeken</a>':''}<a href="#voorbeeld" data-scroll="voorbeeld">Stap voor stap</a><a href="#begrip" data-scroll="begrip">Check je begrip</a><a href="#formules/${l.id}">Formules uitgelegd</a><button class="study-btn small" id="question-overview-open" type="button">Vragenoverzicht</button></nav></header><section class="lesson-start"><div><h2>Dit heb je vooraf nodig</h2><ul>${l.prerequisites.map(g=>`<li>${esc(g)}</li>`).join('')}</ul></div><div><h2>Dit ga je leren</h2><ul>${l.goals.map(g=>`<li>${esc(g)}</li>`).join('')}</ul></div></section><p class="term-hint">Klik op een <span>onderstreepte vakterm</span> voor een korte uitleg. Je blijft op deze pagina.</p><div id="uitleg">${l.sections.map((s,j)=>`<details class="section" open><summary><span class="section-number">${j+1}</span>${esc(s.title)}</summary><div class="section-body">${s.html}</div></details>`).join('')}</div>${l.lab?'<section id="onderzoek" class="lab"></section>':''}<section class="example" id="voorbeeld"><div class="block-label">Stap voor stap</div><h2>${esc(l.example.title)}</h2><p class="muted">Lees een stap, reken mee en open dan de volgende.</p><ol class="steps" id="example-steps"></ol><div class="step-placeholder" id="step-placeholder">Open de eerste stap om te beginnen.</div><div class="actions"><button class="btn primary" id="next-step">Toon stap 1</button><button class="btn" id="all-steps">Toon alle stappen</button><button class="btn small" id="reset-steps">Opnieuw</button></div></section><aside class="pitfalls"><h2>Hier gaat het vaak mis</h2><ul>${l.pitfalls.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></aside><section class="quiz" id="begrip"><div class="block-label">Actief ophalen</div><h2>Kun je het zelf uitleggen?</h2><p class="muted">Probeer eerst zonder terug te kijken. Je eerste en laatste poging worden apart bewaard.</p>${l.questions.map(renderQuestion).join('')}</section>${l.exam?renderExamBridge(l.exam):''}<div class="actions"><button class="btn primary" id="mark-read">${state.read.includes(l.id)?'✓ Als gelezen gemarkeerd':'Markeer deze les als gelezen'}</button><span class="lesson-status" id="mastery-label">${mastered(l)?'Alle begripchecks zijn goed.':'Maak de checks om je begrip te controleren.'}</span></div><div class="sources"><strong>Bronnen bij deze les</strong><ul>${l.refs.map(r=>`<li>${sourceLink(r.source,r.page)} · ${esc(r.locator)}</li>`).join('')}</ul><p>Uitleg in eigen woorden. De voorbeelden sluiten aan bij deze bronnen. Paginanummers verwijzen naar de PDF.</p></div><nav class="lesson-bottom" aria-label="Vorige en volgende les">${i>0?`<a class="btn" href="#les/${LESSONS[i-1].id}">← Vorige les</a>`:'<a class="btn" href="#voortgang">Bekijk je leerroute</a>'}${i<LESSONS.length-1?`<a class="btn primary" href="#les/${LESSONS[i+1].id}">Volgende les →</a>`:'<a class="btn primary" href="#tentamen">Naar het tentamen →</a>'}</nav></article>`;
  $('#question-overview-open').onclick=()=>showQuestionOverview(l);
  $('#main article').insertAdjacentHTML('afterbegin',breadcrumb(l.title,{label:'Leren',href:'#leren'}));
  if(i===0){const first=$('.lesson-bottom a');first.href='#leren';first.textContent='Alle lessen';}
  wrapTables();if(l.lab)window.SRALabs.mount(l.lab,$('#onderzoek'));
  let step=0;const renderSteps=()=>{$('#example-steps').innerHTML=l.example.steps.slice(0,step).map(s=>`<li>${esc(s)}</li>`).join('');$('#step-placeholder').hidden=step>0;$('#next-step').disabled=step>=l.example.steps.length;$('#next-step').textContent=step>=l.example.steps.length?'Alle stappen geopend':`Toon stap ${step+1}`;};
  $('#next-step').onclick=()=>{step++;renderSteps();};$('#all-steps').onclick=()=>{step=l.example.steps.length;renderSteps();};$('#reset-steps').onclick=()=>{step=0;renderSteps();};
  $('#mark-read').onclick=()=>{if(!state.read.includes(l.id))state.read.push(l.id);save();$('#mark-read').textContent='✓ Als gelezen gemarkeerd';renderSidebar(l.id);toast('Les als gelezen opgeslagen.');};
  bindQuestionChecks(()=>{$('#lesson-score').textContent=`${score(l)}/${l.questions.length} checks goed`;$('#mastery-label').textContent=mastered(l)?'Alle begripchecks zijn goed.':'Maak de checks om je begrip te controleren.';renderSidebar(l.id);});
  document.querySelectorAll('[data-scroll]').forEach(a=>a.onclick=e=>{e.preventDefault();document.getElementById(a.dataset.scroll).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});
  return l.id;
 }
 function renderExamBridge(value){const [source,page,label]=value.split(':');return `<div class="card"><div class="block-label">Verbinding met het tentamen</div><h2>${esc(label)}</h2><p class="muted">Werk de bronopgave zelfstandig uit. Open het tentamendashboard om per datum te oefenen.</p><div class="actions">${sourceLink(source,Number(page),'Open de bron')}<a class="btn small" href="#tentamen">Bekijk de tentamens</a></div></div>`;}
 function renderGlossary(){
  $('#main').innerHTML='<div class="eyebrow">Naslag</div><h1>Een begrip even terugzoeken</h1><p class="lead">Klik op een begrip voor de betekenis en een kort voorbeeld. De uitleg opent in een klein venster.</p><label class="field searchbar">Zoek op begrip of betekenis<input type="search" id="glossary-search" placeholder="Bijvoorbeeld: standaardfout, residu of ANOVA"></label><p id="search-count" class="muted" aria-live="polite"></p><div id="glossary-results" class="glossary-grid" data-no-terms></div>';
  const update=()=>{const search=$('#glossary-search').value.toLocaleLowerCase('nl'),items=C.terms.filter(g=>(g.term+' '+g.definition+' '+g.aliases.map(a=>typeof a==='string'?a:a.text).join(' ')).toLocaleLowerCase('nl').includes(search)).sort((a,b)=>a.term.localeCompare(b.term,'nl'));$('#search-count').textContent=`${items.length} van ${C.terms.length} begrippen`;$('#glossary-results').innerHTML=items.length?items.map(g=>`<section class="glossary-term"><h2><button type="button" class="sra-term" data-sra-term="${esc(g.id)}" aria-haspopup="dialog">${esc(g.term)}</button></h2><p>${esc(g.definition)}</p><p class="term-open-hint">Klik op het begrip voor uitleg en voorbeeld</p></section>`).join(''):'<p class="empty">Geen begrip gevonden. Probeer een korter zoekwoord.</p>';};$('#glossary-search').oninput=update;update();
 }
 function renderFormulas(id){
  if(!id){
   $('#main').innerHTML=`<article class="formula-overview">${breadcrumb('Formuleoverzicht')}<header><p class="eyebrow">Formules als zelfstandig naslagwerk</p><h1>Formuleoverzicht</h1><p class="lead">Klap een onderwerp open voor de formules, hun betekenis en toepassing. De uitleg verschijnt hier, op deze pagina. Klik op een statistisch symbool voor een korte toelichting.</p></header><label class="field searchbar">Zoek een onderwerp of formule<input id="formula-search" type="search" placeholder="Bijvoorbeeld: variantie, interval of ANOVA"></label><div id="formula-topics"></div><p>${sourceLink('formules',1,'Oorspronkelijk formuleblad')}</p></article>`;
   const update=()=>{
    const text=$('#formula-search').value.toLocaleLowerCase('nl');
    $('#formula-topics').innerHTML=phases.map(phase=>{
     const items=LESSONS.filter(l=>l.phase===phase&&[l.title,...l.formulaGuide.map(g=>g.title+' '+g.html.replace(/<[^>]+>/g,' '))].join(' ').toLocaleLowerCase('nl').includes(text));
     return items.length?`<section class="formula-topic-group"><h2>${esc(phase)}</h2><div class="formula-reference-list">${items.map(l=>`<details class="formula-reference-topic" data-formula-context="${l.id}"><summary data-no-terms><strong>${esc(l.title)}</strong><span>${l.formulaGuide.map(g=>esc(g.title)).join(' · ')}</span><span class="formula-reference-action">Formules en uitleg bekijken</span></summary><div class="formula-reference-content">${l.formulaGuide.map(g=>`<section class="formula-guide-card"><h2>${esc(g.title)}</h2>${g.html}</section>`).join('')}<div class="actions"><a class="study-btn" href="#formules/${l.id}">Open apart met interactief rekenblad</a></div><p class="formula-reference-sources">Bronnen: ${l.refs.map(r=>sourceLink(r.source,r.page)).join(' · ')}</p></div></details>`).join('')}</div></section>`:'';
    }).join('')||'<p>Geen formule gevonden. Probeer een kortere zoekterm.</p>';
    wrapTables();
    window.SRAFormulaHelp.annotate();
    window.SRATerms.annotate($('#main'));
   };
   $('#formula-search').oninput=update;update();return null;
  }
  const l=LESSONS.find(x=>x.id===id)||LESSONS[0];
  $('#main').innerHTML=`<article class="formula-guide">${breadcrumb(l.title,{label:'Formuleoverzicht',href:'#formules'})}<header><div class="eyebrow">Formules bij dit onderwerp</div><h1>Formules: ${esc(l.title)}</h1><p class="lead">Wanneer gebruik je de formule, wat betekenen de symbolen en hoe reken je ermee?</p><div class="actions"><a class="study-btn" href="#formules">Alle formules</a><a class="study-btn" href="#les/${l.id}">Naar de les</a><a class="study-btn primary" href="#formule-rekenblad" data-formula-lab>Zelf rekenen</a></div></header><p class="term-hint">Klik op een <span>onderstreepte vakterm</span> voor de betekenis. Gebruik Terug om je vorige leespositie te hervatten.</p>${l.formulaGuide.map(g=>`<section class="formula-guide-card"><h2>${esc(g.title)}</h2>${g.html}</section>`).join('')}${l.lab?'<section id="formule-rekenblad" class="lab"></section>':''}<div class="sources"><strong>Bronnen bij deze formules</strong><ul>${l.refs.map(r=>`<li>${sourceLink(r.source,r.page)} · ${esc(r.locator)}</li>`).join('')}</ul><p>De rekenvoorbeelden lichten de formules toe. De oorspronkelijke notatie en voorwaarden staan in de bronnen.</p></div></article>`;
  if(l.lab)window.SRALabs.mount(l.lab,$('#formule-rekenblad'));
  $('[data-formula-lab]').onclick=ev=>{ev.preventDefault();$('#formule-rekenblad')?.scrollIntoView({behavior:'smooth',block:'start'});};
  wrapTables();return null;
 }
 function renderExams(id,part,item){
  if(window.SRAExams.render(id,part,{pageHead,breadcrumb,sourceLink,practiceStart:()=>practiceStart(practiceSet('alles')),askConfirmation},item))return;
  location.replace('#tentamen');
 }
 function renderSavedNotes(){
  const notes=C.examCases.filter(c=>state.notes[c.id]?.trim());
  if(!notes.length)return '';
  return '<details class="card saved-exam-notes"><summary>Eerdere tentamenaantekeningen ('+notes.length+')</summary><p>Je eerder opgeslagen berekeningen en redeneringen blijven hier beschikbaar en gaan mee bij het exporteren van je voortgang.</p>'+notes.map(c=>'<section><h3>'+esc(c.title)+'</h3><p class="saved-exam-note">'+esc(state.notes[c.id])+'</p></section>').join('')+'</details>';
 }
 function renderProgress(){const questions=[...questionMap.values()],done=Object.values(state.answers),first=done.filter(a=>a.firstCorrect).length,correct=done.filter(a=>a.correct).length;
  $('#main').innerHTML=`<div class="eyebrow">Zelf bijhouden</div><h1>Waar sta je nu?</h1><p class="lead">Hier zie je welke lessen je zelf als gelezen hebt gemarkeerd en hoe je de 57 begripchecks binnen die lessen hebt gemaakt. Het openen van een les of bronbestand markeert deze niet automatisch als gelezen.</p><div class="stats">${metric(`${state.read.length}/${LESSONS.length}`,'Lessen als gelezen')}${metric(`${correct}/${questions.length}`,'Checks laatste poging goed')}${metric(`${first}/${done.length}`,'Eerste poging goed / gemaakt')}</div><p class="muted">De 134 losse MC-oefenvragen en volledige tentamens hebben aparte resultaten: <a href="#tentamen/mc/resultaten">bekijk je MC-resultaten</a> of <a href="#tentamen/voltooid">voltooide tentamens</a>.</p><p class="muted">Een hoofdstuk krijgt een groen vinkje als alle drie begripchecks bij de laatste poging goed zijn. Dit is geen tentamencijfer.</p>${resultOverview()}${renderSavedNotes()}<section class="card"><h2>Bewaar je voortgang</h2><p>Antwoorden, eerste pogingen en tentamenaantekeningen staan alleen in deze browser. Exporteer ze om op een ander apparaat verder te gaan.</p><div class="actions"><button class="btn primary" id="export">Exporteer voortgang</button><button class="btn" id="import">Importeer voortgang</button><input type="file" id="import-file" accept="application/json,.json" hidden></div><p id="import-status" role="status" class="muted"></p><details style="margin-top:20px"><summary>Voortgang wissen</summary><p class="muted">Hiermee wis je antwoorden, gelezen-markeringen en aantekeningen in deze browser. Een eerder geëxporteerd bestand blijft bestaan.</p><button class="btn danger" id="reset-progress">Wis mijn lokale voortgang</button></details></section>`;
  $('#export').onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='SRA voortgang.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Voortgang geëxporteerd.');};
  $('#import').onclick=()=>$('#import-file').click();$('#import-file').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>1000000)throw Error('Het bestand is te groot.');const imported=sanitize(JSON.parse(await file.text()));if(!await askConfirmation('De geïmporteerde voortgang vervangt je huidige lokale voortgang. Doorgaan?'))return;state=imported;save();applyFont();route(false);toast('Voortgang geïmporteerd.');}catch(error){$('#import-status').textContent='Import niet uitgevoerd: '+error.message;}};
  $('#reset-progress').onclick=async()=>{if(!await askConfirmation('Alle lokale voortgang en aantekeningen wissen?'))return;state={version:1,read:[],answers:{},notes:{},font:state.font,directCheck:state.directCheck};save();route(false);toast('Lokale voortgang gewist.');};
 }
 function renderSources(){
  $('#main').innerHTML=`<div class="eyebrow">Herkomst & afbakening</div><h1>Gebouwd op jouw SRA-materiaal</h1><p class="lead">De leerroute volgt het onderwijsprogramma najaar 2026. De uitleg gebruikt het voorgeschreven boek, het formuleblad, de slides, de attentiepunten, opgavenbundels en tentamenuitwerkingen.</p><section class="card"><h2>Wat de samenvatting afdekt</h2><p>Basisvaardigheden, hoofdstuk 8 (de vier schatters, omvang en stratificatie), hoofdstuk 9 (enkelvoudige regressie) en hoofdstuk 10 (meervoudige regressie, transformaties, modelbouw en validatie). De inverse functie is volgens het onderwijsprogramma geen tentamenstof. De lessen zijn een leerroute naast de oorspronkelijke open opgaven.</p><p class="muted">De lessen verwijzen naar relevante passages uit hoofdstukken 8–10 van <em>Statistiek voor audit en controlling</em> en de noodzakelijke basis. Bronlinks openen uitsneden; bij de les staan het gedrukte boeknummer en de oorspronkelijke PDF-pagina. SET-opfrissers gebruiken alleen de voor SRA benodigde voorkennis. Validatie volgt de aanvullende attentiepunten, niet het boek.</p></section><section class="card"><h2>Bronverschillen die je moet herkennen</h2><ul><li><strong>Tweezijdige Sig.:</strong> de attentiepunten noemen bij backward ½α. In de uitleg wordt een reeds tweezijdige p-waarde met α vergeleken; α/2 hoort bij de t-staartgrens. Een expliciete selectiegrens uit de opgave blijft leidend.</li><li><strong>Meervoudige t-toets:</strong> gebruik B / Std. Error uit formule 62. De formule met een gewone r hoort bij enkelvoudige regressie, niet bij de totale R van een meervoudig model.</li><li><strong>Model Summary R:</strong> die is niet-negatief. Gebruik de correlatietabel of het teken van B voor de richting.</li><li><strong>Maart 2025, vraag 20:</strong> de getoonde coëfficiënten leveren € 5.617,705, oftewel € 5.618 afgerond. De uitwerking vermeldt € 5.617.</li></ul><p>De oorspronkelijke bestanden blijven ongewijzigd. De lessen benoemen waar een bronregel of uitkomst extra uitleg nodig heeft.</p></section><div class="card-grid">${Object.entries(C.sources).map(([id,s])=>`<section class="card source-card"><h2>${esc(s.title)}</h2><p>${sourceLink(id,1,'Open PDF')}</p></section>`).join('')}</div><p class="footer-note">De bronbestanden in deze lokale versie zijn kopieën van je aangeleverde projectdocumenten. Antwoorden en notities worden in deze browser opgeslagen. De onlineversie gebruikt Cloudflare Web Analytics voor bezoekstatistieken.</p><p><a href="SRA leesversie.html">Open de zelfstandige leesversie zonder scripts</a></p>`;
 }
 // Codex: the exam shell uses CAFA2's 14px base independently of the 16px lessons.
 function applyFont(){
  const cirrus=document.body.classList.contains('cirrus-mode'),size=cirrus?(state.cirrusFont||14):state.font;
  document.documentElement.style.setProperty('--font',state.font+'px');
  document.documentElement.style.setProperty('--sra-cirrus-font',(state.cirrusFont||14)+'px');
  $('#font-minus').disabled=size<=(cirrus?10:14);$('#font-plus').disabled=size>=(cirrus?24:22);
  $('#font-reset').hidden=size===(cirrus?14:16);
 }
 function route(focus=true){
  const legacyExam={e1:'20250317/1',e2:'20250317/4',e3:'20241028/1',e4:'20241028/9',e5:'20250317/19',e6:'20250317/1'};
  const legacyId=/^#tentamen\/(e[1-6])(?:\/|$)/.exec(location.hash)?.[1];
  if(legacyId){location.replace('#welkom/'+legacyExam[legacyId]);return;}
  const previousView=window.SRANavigation.before();
  window.SRATerms.close({restoreFocus:false});
  window.SRAFormulaHelp.close(false);
  if($('#question-overview').open)$('#question-overview').close();
  let parts;try{parts=decodeURIComponent(location.hash.slice(1)).split('/');}catch(e){parts=['home'];}
  const requested=parts[0]==='dashboard'?'home':parts[0];
  let tab=['home','leren','les','formules','oefenen','begrippen','tentamen','welkom','toets','inzage','voortgang','bronnen'].includes(requested)?requested:'home';
  if((tab==='les'||tab==='formules')&&parts[1]&&!validIds.has(parts[1]))tab='leren';
  const isLesson=tab==='les';
  const isCirrus=['welkom','toets','inzage'].includes(tab)||(tab==='tentamen'&&(!parts[1]||parts[1]==='voltooid'));
  // Disable the complete lesson cascade, including in the portable HTML version.
  document.querySelectorAll('[data-study-style]').forEach(sheet=>{
   if(sheet.dataset.studyMedia===undefined)sheet.dataset.studyMedia=sheet.media||'';
   sheet.media=isCirrus?'not all':sheet.dataset.studyMedia;
  });
  document.documentElement.classList.toggle('enhanced',isCirrus);
  if(!isCirrus)window.SRACirrus.leave();
  $('#main').toggleAttribute('data-no-terms',!isLesson&&tab!=='formules'&&tab!=='begrippen');
  document.body.classList.toggle('sra-full-page',!isLesson);
  document.body.dataset.page=tab;
  $('#menu-toggle').hidden=!isLesson;
  $('#sidebar').hidden=!isLesson;
  $('.sra-navigation').hidden=isCirrus||tab==='tentamen';
  $('#tools-menu').open=false;
  let current=null;
  if(isCirrus)window.SRACirrus.mount();else if(tab==='home')renderHome();else if(tab==='leren')renderLearning();else if(tab==='les')current=renderLesson(parts[1]);else if(tab==='formules')current=renderFormulas(parts[1]);else if(tab==='oefenen')renderPractice(parts[1],parts[2]);else if(tab==='begrippen')renderGlossary();else if(tab==='tentamen')renderExams(parts[1],parts[2],parts[3]);else if(tab==='voortgang')renderProgress();else renderSources();
  let trail=$('#main .sra-breadcrumb, #main .exam-breadcrumb');
  if(!trail&&!isCirrus&&!$('#main .mc-home')&&!$('#main .mc-page')){
   const host=$('#main .sra-home')||$('#main');
   host.insertAdjacentHTML('afterbegin',tab==='home'?'<nav class="sra-breadcrumb" aria-label="Kruimelpad"><span>Home</span></nav>':breadcrumb($('#main h1')?.textContent||'Tentamens oefenen'));
   trail=$('#main .sra-breadcrumb');
  }
  const questionView=document.body.classList.contains('exam-running')||!!$('#main').querySelector?.('.mc-page, .sra-practice-runner, .sra-exam-runner');
  const resultView=tab==='inzage'||(tab==='tentamen'&&(parts.includes('resultaat')||parts[2]==='resultaten'));
  const showReturnLinks=questionView||resultView;
  $('#question-return-links').hidden=!showReturnLinks;
  if(questionView){historyBack.hidden=true;$('.sra-navigation').hidden=true;}
  $('#study-returnbar').hidden=!showReturnLinks&&historyBack.hidden;
  $('.study-navigation-row').hidden=!showReturnLinks&&historyBack.hidden&&$('.sra-navigation').hidden;
  if(current)renderSidebar(current);else $('#sidebar').innerHTML='';
  if(current&&current!==sidebarLessonId)showCurrentSidebarLesson();
  sidebarLessonId=current;
  document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===(isLesson?'leren':tab))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  if(!isCirrus)document.querySelectorAll('.btn').forEach(button=>button.classList.add('study-btn'));
  document.body.classList.remove('menu-open');$('#menu-toggle').setAttribute('aria-expanded','false');
  document.title=`${$('#main h1')?.textContent||'Tentamens oefenen'} · SRA`;
  if(!isCirrus){window.SRAFormulaHelp.annotate();window.SRATerms.annotate($('#main'));}
  applyFont();
  if(focus){window.scrollTo({top:0,left:0,behavior:'instant'});$('#main').focus({preventScroll:true});}
  if(tab==='les'&&parts[2]&&!previousView)focusQuestion(parts[2]);
  window.SRANavigation.after(previousView);
 }
 function changeFont(delta){const cirrus=document.body.classList.contains('cirrus-mode'),key=cirrus?'cirrusFont':'font',base=cirrus?14:16;state[key]=delta===0?base:Math.max(cirrus?10:14,Math.min(cirrus?24:22,(state[key]||base)+delta));applyFont();save();}
 $('#font-minus').onclick=()=>changeFont(-1);$('#font-plus').onclick=()=>changeFont(1);$('#font-reset').onclick=()=>changeFont(0);
 $('#menu-toggle').onclick=()=>{const open=document.body.classList.toggle('menu-open');$('#menu-toggle').setAttribute('aria-expanded',String(open));if(open)showCurrentSidebarLesson();};
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.body.classList.remove('menu-open');$('#menu-toggle').setAttribute('aria-expanded','false');if($('#tools-menu').open){$('#tools-menu').open=false;$('#tools-menu summary').focus();}}});
 document.addEventListener('click',e=>{if(document.body.classList.contains('menu-open')&&!e.target.closest('#sidebar,#menu-toggle')){document.body.classList.remove('menu-open');$('#menu-toggle').setAttribute('aria-expanded','false');}if(!e.target.closest('#tools-menu'))$('#tools-menu').open=false;});
 function initCalculator(){
function setupHistoryCalculator(panel, opener, evaluate, options) {
  const find = selector => panel.querySelector(selector);
  const input=find('[data-calc-input]'), output=find('[data-calc-output]'), body=find('[data-calc-body]');
  const historyBox=find('.calc-history'), historyList=find('.calc-history-list'), handle=find('[data-calc-move]');
  const minimize=find('[data-calc-minimize]'), resizer=find('[data-calc-resize]'), compact=find('[data-calc-compact]');
  const fmt=value=>Number(value.toPrecision(13)).toLocaleString('nl-NL',{maximumFractionDigits:12});
  const raw=value=>String(Number(value.toPrecision(13)));
  let entries=[], memory=0, lastValue=0, position=null, size=null, expandedSize=null, drag=null, sizing=null, returnFocus=opener;
  let errorShown=false, storageOK=true;
  const viewport=()=>{const v=window.visualViewport;return {x:v?.offsetLeft||0,y:v?.offsetTop||0,w:v?.width||document.documentElement.clientWidth,h:v?.height||innerHeight};};
  const currentValue=()=>input.value.trim()?evaluate(input.value):lastValue;
  try {
    const stored=localStorage.getItem(options.storageKey);
    const saved=JSON.parse(stored||'null');
    if(saved){
      entries=Array.isArray(saved.entries)?saved.entries.filter(e=>e&&typeof e.id==='string'&&typeof e.expression==='string'&&e.expression.length<=180&&Number.isFinite(e.value)):[];
      memory=Number.isFinite(saved.memory)?saved.memory:0;
      lastValue=Number.isFinite(saved.lastValue)?saved.lastValue:0;
      input.value=typeof saved.formula==='string'?saved.formula.slice(0,180):'';
      if(saved.size&&Number.isFinite(saved.size.w)&&Number.isFinite(saved.size.h))size={w:saved.size.w,h:saved.size.h};
    } else if(options.legacyKey){
      const old=JSON.parse(sessionStorage.getItem(options.legacyKey)||'{}');
      input.value=typeof old.formula==='string'?old.formula.slice(0,180):'';
      memory=Number.isFinite(old.memory)?old.memory:0;
      if(old.justResult&&input.value)lastValue=evaluate(input.value);
    }
  } catch (_) {storageOK=false;}
  function save(){
    try{localStorage.setItem(options.storageKey,JSON.stringify({version:1,entries,memory,lastValue,formula:input.value,size}));storageOK=true;}
    catch(_){storageOK=false;}
    find('.calc-storage-note').textContent=storageOK?'Bewaard in deze browser':'Browseropslag niet beschikbaar';
  }
  function clearError(){errorShown=false;output.hidden=true;output.textContent='';input.removeAttribute('aria-invalid');}
  function showError(message){errorShown=true;output.hidden=false;output.textContent=message;input.setAttribute('aria-invalid','true');}
  function renderHistory(toEnd=false){
    const previous=historyBox.scrollTop;
    historyList.replaceChildren();
    for(const entry of entries){
      const row=document.createElement('li');row.dataset.calcHistoryId=entry.id;
      const reuse=document.createElement('button');reuse.type='button';reuse.className='calc-history-reuse';reuse.dataset.calcHistoryReuse='';
      reuse.setAttribute('aria-label','Hergebruik '+entry.expression+', uitkomst '+fmt(entry.value));reuse.title=entry.expression;
      const expression=document.createElement('span');expression.className='calc-history-expression';expression.textContent=entry.expression;
      const result=document.createElement('span');result.className='calc-history-value';result.textContent='= '+fmt(entry.value);
      reuse.append(expression,result);
      reuse.onclick=()=>{input.value=entry.expression;clearError();save();input.focus({preventScroll:true});input.setSelectionRange(input.value.length,input.value.length);};
      const remove=document.createElement('button');remove.type='button';remove.className='calc-history-remove';remove.dataset.calcHistoryRemove='';remove.textContent='×';
      remove.setAttribute('aria-label','Verwijder berekening '+entry.expression);remove.title='Deze berekening verwijderen';
      remove.onclick=()=>{const index=entries.findIndex(e=>e.id===entry.id);entries=entries.filter(e=>e.id!==entry.id);renderHistory();save();const next=historyList.children[Math.min(index,entries.length-1)];(next?.querySelector('.calc-history-remove')||historyBox).focus({preventScroll:true});};
      row.append(reuse,remove);historyList.append(row);
    }
    find('.calc-history-count').textContent=entries.length+' '+(entries.length===1?'regel':'regels');
    find('.calc-history-empty').hidden=entries.length>0;
    find('.calc-history-older').textContent=entries.length>4?'↑ Scroll voor oudere regels':'Laatste berekeningen';
    historyBox.scrollTop=toEnd?historyBox.scrollHeight:previous;
  }
  function paint(){
    const memoryLabel=find('.calc-memory');memoryLabel.textContent='M: '+fmt(memory);memoryLabel.title='Geheugen: '+fmt(memory);
    const flag=find('.calc-memory-flag');if(flag)flag.hidden=memory===0;
  }
  function insert(text){
    let start=input.selectionStart??input.value.length,end=input.selectionEnd??start;
    if(!input.value&&/^[+*/^%]$/.test(text)){input.value=raw(lastValue);start=end=input.value.length;}
    if(input.value.length-(end-start)+text.length>180)throw Error('Berekening te lang');
    input.setRangeText(text,start,end,'end');
  }
  function calculate(){
    if(!input.value.trim())return;
    const expression=input.value,value=evaluate(expression);
    entries.push({id:typeof crypto.randomUUID==='function'?crypto.randomUUID():Date.now()+'-'+Math.random(),expression,value});
    lastValue=value;input.value='';renderHistory(true);
  }
  function perform(key){
    clearError();const copy=find('.calc-copy-result');if(copy)copy.textContent='';
    try{
      if(key==='=')calculate();
      else if(key==='C'){input.value='';lastValue=0;}
      else if(key==='CE')input.value=input.value.replace(/(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:[eE][+-]?\d+)?%?$/,'');
      else if(key==='back'||key==='⌫'){let start=input.selectionStart??input.value.length,end=input.selectionEnd??start;if(start===end)start=Math.max(0,start-1);input.setRangeText('',start,end,'end');}
      else if(key==='MC')memory=0;
      else if(key==='MR')insert(memory<0?'('+raw(memory)+')':raw(memory));
      else if(key==='MS')memory=currentValue();
      else if(key==='M+'||key==='M-'){const next=memory+(key==='M+'?1:-1)*currentValue();if(!Number.isFinite(next))throw Error('Geheugen buiten bereik');memory=next;}
      else if(['sqrt','square','reciprocal','sign'].includes(key)){
        let value=currentValue();if(key==='sqrt'){if(value<0)throw Error('Geen reële wortel');value=Math.sqrt(value);}else if(key==='square')value*=value;else if(key==='reciprocal'){if(value===0)throw Error('Delen door nul');value=1/value;}else value=-value;
        if(!Number.isFinite(value))throw Error('Ongeldige berekening');input.value=raw(value);lastValue=value;
      }else if(/^(?:[0-9.,()+\-*/%^]|sqrt\(|ln\(|exp\()$/.test(key))insert(key);
    }catch(error){showError(error.message);}
    paint();save();
  }
  function applySize(){
    const v=viewport();panel.style.maxWidth=Math.max(1,v.w-16)+'px';panel.style.maxHeight=Math.max(44,v.h-16)+'px';
    if(size){panel.style.width=Math.min(Math.max(280,size.w),Math.max(1,v.w-16))+'px';panel.style.height=body.hidden?'auto':Math.min(Math.max(580,size.h),Math.max(44,v.h-16))+'px';}
    else{panel.style.width='';panel.style.height='';}
  }
  function place(next=position){
    if(panel.hidden)return;
    applySize();const v=viewport(),r=panel.getBoundingClientRect();
    const maxX=Math.max(v.x+8,v.x+v.w-r.width-8),maxY=Math.max(v.y+8,v.y+v.h-r.height-8);
    if(!next){const header=document.querySelector('.topbar,.reader-topbar,.study-header');next={x:maxX,y:Math.max(v.y+8,header?header.getBoundingClientRect().bottom+12:v.y+104)};}
    position={x:Math.max(v.x+8,Math.min(maxX,next.x)),y:Math.max(v.y+8,Math.min(maxY,next.y))};
    panel.style.left=position.x+'px';panel.style.top=position.y+'px';panel.style.right='auto';panel.style.bottom='auto';
  }
  function expand(value){panel.classList.toggle('calc-collapsed',!value);body.hidden=!value;find('.calc-window-footer').hidden=!value;minimize.textContent=value?'−':'+';minimize.setAttribute('aria-expanded',String(value));minimize.setAttribute('aria-label',value?'Rekenmachine inklappen':'Rekenmachine uitklappen');place();}
  function open(from=opener){returnFocus=from;panel.hidden=false;expand(true);opener.setAttribute('aria-expanded','true');place();renderHistory(true);if(window.matchMedia('(pointer: fine)').matches)input.focus({preventScroll:true});else panel.focus({preventScroll:true});}
  function close(){const hadFocus=panel.contains(document.activeElement);if(drag&&handle.hasPointerCapture(drag.id))handle.releasePointerCapture(drag.id);if(sizing&&resizer.hasPointerCapture(sizing.id))resizer.releasePointerCapture(sizing.id);drag=null;sizing=null;panel.hidden=true;opener.setAttribute('aria-expanded','false');save();if(hadFocus)(returnFocus?.isConnected?returnFocus:opener).focus({preventScroll:true});}
  find('[data-calc-close]').onclick=close;minimize.onclick=()=>expand(body.hidden);
  compact.onclick=()=>{if(!expandedSize){const r=panel.getBoundingClientRect();expandedSize={w:r.width,h:r.height};size={w:280,h:680};compact.setAttribute('aria-label','Rekenmachine normale grootte');compact.title='Normale grootte';}else{size=expandedSize;expandedSize=null;compact.setAttribute('aria-label','Rekenmachine verkleinen');compact.title='Verkleinen';}expand(true);place();save();};
  panel.querySelectorAll('[data-calc-key],[data-key]').forEach(button=>{button.addEventListener('pointerdown',e=>{if(e.button===0)e.preventDefault();});button.onclick=()=>perform(button.dataset.calcKey??button.dataset.key);});
  input.oninput=()=>{clearError();save();};
  panel.addEventListener('keydown',event=>{
    if(event.key==='Escape'){event.preventDefault();event.stopPropagation();close();return;}
    if(event.ctrlKey||event.metaKey||event.altKey||event.target.closest('[data-calc-move],[data-calc-resize],.calc-history'))return;
    if(event.target===input){if(event.key==='Enter'||event.key==='='){event.preventDefault();perform('=');}return;}
    if(event.key==='Enter'&&event.target.tagName==='BUTTON')return;
    if(event.key==='Enter'||event.key==='='){event.preventDefault();perform('=');}else if(event.key==='Backspace'){event.preventDefault();perform('back');}else if(event.key==='Delete'){event.preventDefault();perform('C');}else if(/^[0-9()+\-*/%^,.]$/.test(event.key)){event.preventDefault();perform(event.key);}
  });
  handle.addEventListener('pointerdown',event=>{if(event.button!==0)return;const r=panel.getBoundingClientRect();drag={id:event.pointerId,x:event.clientX-r.left,y:event.clientY-r.top};handle.setPointerCapture(event.pointerId);event.preventDefault();});
  handle.addEventListener('pointermove',event=>{if(drag?.id===event.pointerId)place({x:event.clientX-drag.x,y:event.clientY-drag.y});});
  const endDrag=event=>{if(drag?.id!==event.pointerId)return;drag=null;if(handle.hasPointerCapture(event.pointerId))handle.releasePointerCapture(event.pointerId);};handle.addEventListener('pointerup',endDrag);handle.addEventListener('pointercancel',endDrag);handle.addEventListener('lostpointercapture',endDrag);
  handle.addEventListener('keydown',event=>{const delta={ArrowLeft:[-10,0],ArrowRight:[10,0],ArrowUp:[0,-10],ArrowDown:[0,10]}[event.key];if(event.key==='Home'){event.preventDefault();position=null;place();}else if(delta){event.preventDefault();const r=panel.getBoundingClientRect();place({x:r.left+delta[0]*(event.shiftKey?4:1),y:r.top+delta[1]*(event.shiftKey?4:1)});}});
  function resize(w,h){const v=viewport();size={w:Math.min(Math.max(280,w),Math.max(1,v.w-16)),h:Math.min(Math.max(580,h),Math.max(44,v.h-16))};expandedSize=null;compact.setAttribute('aria-label','Rekenmachine verkleinen');compact.title='Verkleinen';place();save();}
  resizer.addEventListener('pointerdown',event=>{if(event.button!==0)return;const r=panel.getBoundingClientRect();sizing={id:event.pointerId,x:event.clientX,y:event.clientY,w:r.width,h:r.height};resizer.setPointerCapture(event.pointerId);event.preventDefault();});
  resizer.addEventListener('pointermove',event=>{if(sizing?.id===event.pointerId)resize(sizing.w+event.clientX-sizing.x,sizing.h+event.clientY-sizing.y);});
  const endResize=event=>{if(sizing?.id!==event.pointerId)return;sizing=null;if(resizer.hasPointerCapture(event.pointerId))resizer.releasePointerCapture(event.pointerId);};resizer.addEventListener('pointerup',endResize);resizer.addEventListener('pointercancel',endResize);resizer.addEventListener('lostpointercapture',endResize);
  resizer.addEventListener('keydown',event=>{const delta={ArrowLeft:[-10,0],ArrowRight:[10,0],ArrowUp:[0,-10],ArrowDown:[0,10]}[event.key];if(delta){event.preventDefault();const r=panel.getBoundingClientRect();resize(r.width+delta[0],r.height+delta[1]);}});
  const copy=find('[data-copy-calc]');if(copy)copy.onclick=()=>{try{const value=raw(currentValue()).replace('.',',');if(navigator.clipboard?.writeText)navigator.clipboard.writeText(value).then(()=>find('.calc-copy-result').textContent='Gekopieerd',()=>find('.calc-copy-result').textContent='Uitkomst: '+value);else find('.calc-copy-result').textContent='Uitkomst: '+value;}catch(error){showError(error.message);}};
  document.addEventListener('focusin',event=>{if(!panel.hidden&&!panel.contains(event.target))returnFocus=event.target;});
  window.addEventListener('resize',()=>place());window.visualViewport?.addEventListener('resize',()=>place());window.visualViewport?.addEventListener('scroll',()=>place());window.addEventListener('pagehide',save);
  renderHistory();paint();save();
  return {open,close,perform,getState:()=>({formula:input.value,memory,history:entries.map(e=>({...e})),size,lastValue,errorShown})};
}

  const panel=$('#calculator'),opener=$('#calc-open');panel.tabIndex=-1;const api=setupHistoryCalculator(panel,opener,window.SRAMath.calc,{storageKey:'sra-calculator-history-v1'});opener.onclick=()=>api.open(opener);window.SRACalculator=api;
 }
 initCalculator();
 $('.skip').onclick=e=>{e.preventDefault();$('#main').focus();};
 window.SRAFormulaHelp.init($('#main'),C);
 window.SRATerms.init($('#main'),C.terms,C.sources);
 window.SRANavigation.init($('#main'),historyBack);
 window.addEventListener('hashchange',()=>route());applyFont();route(false);if(!storageAvailable)toast('Browseropslag is niet beschikbaar. Je kunt voortgang handmatig exporteren.');
})();
