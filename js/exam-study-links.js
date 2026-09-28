/* Vraaggerichte koppelingen naar bestaande lessen, met terugkeer naar de poging. */
(function(){
  'use strict';
  const key='sra-exam-study-origin-v1';
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const topics={'Stratificatie':'stratificatie','Verklaarde variatie / modelvergelijking':'anova','Hypothesen / significantie':'toetsen','Uitschieters / invloed':'diagnostiek','Normaliteit':'diagnostiek','Heteroscedasticiteit':'diagnostiek','Multicollineariteit':'modelbouw','Variabelenselectie':'modelbouw','Niet-lineaire modellen':'transformaties','Voorspellingsinterval regressie':'voorspellen','Benodigde steekproefomvang':'steekproefomvang'};
  // Deze korte vragen benoemen hun onderwerp alleen in de bijbehorende casus.
  // Koppelingen volgen de bestaande opgaven en uitwerkingen in het project.
  const sourceLessons={
    '20200323':{2:'verschil',3:'verschil',6:'quotient'},
    '20200626':{2:'verschil',3:'verschil',6:'quotient'},
    '20211101':{1:'mpu',3:'quotient',4:'quotient',9:'anova',21:'meervoudig'},
    '20220316':{12:'diagnostiek',19:'regressielijn'},
    '20230315':{1:'regressieschatter',2:'regressieschatter'},
    '20241028':{1:'regressieschatter'}
  };
  function lesson(exam,q){
    const source=sourceLessons[exam.id]?.[q.number];if(source)return source;
    const prompt=(q.prompt||'').toLowerCase();
    const rules=[[/stratific|allocatie|strata|stratum/,'stratificatie'],[/quoti[eë]ntschatter/,'quotient'],[/verschilschatter/,'verschil'],[/regressieschatter/,'regressieschatter'],[/directe schatter|\bmpu\b/,'mpu'],[/steekproefomvang|steekproefgrootte|hoeveel.*(?:posten|artikelen|waarnemingen)|steekproef.*(?:uitbreid|beperk|verklein)/,'steekproefomvang'],[/voorspellingsinterval|predictie.interval/,'voorspellen'],[/multicollinear|selectie|modelbouw|stepwise|backward|forward/,'modelbouw'],[/normaliteit|normaal verdeeld|homoscedast|heteroscedast|uitbijter|uitschieter|invloedrijk|residu/,'diagnostiek'],[/logarit|niet.lineair|transformat|power model/,'transformaties'],[/hypothese|kritiek gebied|kritieke gebied|significan|voer.*toets/,'toetsen'],[/verklaarde variatie|verklaarde variantie|anova|model summary|r.?kwadraat/,'anova']];
    if(/samengevoegde groepen/.test(prompt))return 'diagnostiek';
    const explicit=rules.find(([re])=>re.test(prompt));if(explicit)return explicit[1];
    const original=(window.SRAExamData?.exams||[]).find(e=>e.id===exam.id);
    const evidence=Object.entries(original?.evidence||{}).filter(([,numbers])=>numbers.includes(q.number));
    const mapped=evidence.map(([topic])=>topics[topic]).find(Boolean);if(mapped)return mapped;
    const section=(exam.sections||[]).find(s=>s.id===q.sectionId),context=(section?.caseText||section?.caseHtml||'').toLowerCase();
    if(/steekproeven/i.test(section?.title||'')){
      if(/quoti[eë]ntschatter/.test(context)&&!/verschilschatter/.test(context))return 'quotient';
      if(/verschilschatter/.test(context)&&!/quoti[eë]ntschatter/.test(context))return 'verschil';
      return 'tentamen';
    }
    if(/meervoudig|dummy|wo.er|hbo.er|vrouw|man van|salaris/.test(prompt))return 'meervoudig';
    if(/regressie|correlatie/.test(prompt))return 'regressielijn';
    return 'tentamen';
  }
  function link(a,q){const id=lesson(a.exam,q);return '<a class="btn study-exam-link cirrus-summary-link" data-exam-study href="#les/'+esc(id)+'">Uitleg bij deze vraag in de samenvatting →</a>';}
  function origin(){try{const value=JSON.parse(sessionStorage.getItem(key)||'null');return value&&typeof value.attempt==='string'&&typeof value.question==='string'?value:null;}catch(_){return null;}}
  function renderReturn(){
    document.querySelector('[data-exam-study-return]')?.remove();const o=origin();
    if(!o||!/^#(?:les|formules)\//.test(location.hash))return;
    const a=window.SRACirrus?.getAttempts().find(a=>a.id===o.attempt);
    if(!a||a.status!=='active'||!a.exam.questions.some(q=>q.id===o.question))return;
    const nav=document.createElement('nav');nav.dataset.examStudyReturn='';nav.className='sra-exam-study-return';nav.setAttribute('aria-label','Terug naar je tentamenvraag');
    nav.innerHTML='<a class="study-btn" href="#toets/'+esc(a.id)+'">← Terug naar vraag '+esc(o.label)+'</a>';
    const title=document.querySelector('#main .lesson-top,#main .study-page-title');if(title)title.before(nav);else document.getElementById('main').prepend(nav);
  }
  document.addEventListener('click',e=>{
    const link=e.target.closest('[data-exam-study]');
    if(link&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&!e.altKey&&e.button===0){
      const id=location.hash.slice('#toets/'.length),a=window.SRACirrus?.getAttempts().find(a=>a.id===id),q=a?.exam.questions[a.currentIndex];
      if(q)try{sessionStorage.setItem(key,JSON.stringify({attempt:a.id,question:q.id,index:a.currentIndex,label:q.displayNumber||q.number}));}catch(_){}
    }
    if(e.target.closest('[data-exam-study-return] a')){const o=origin();if(o)window.SRACirrus?.restorePosition(o.attempt,o.index);}
  });
  window.SRAExamStudy={link,lesson,renderReturn};
})();
