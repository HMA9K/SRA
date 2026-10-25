/* Case layout follows the existing SRA exam panel; answers stay in their DOM nodes. */
(function(){
 'use strict';const key='sra-mc-case-panel-v1';let width=33,open=true;
 try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(Number.isFinite(saved?.width))width=Math.max(25,Math.min(55,saved.width));if(typeof saved?.open==='boolean')open=saved.open;}catch(_){}
 function remember(){try{localStorage.setItem(key,JSON.stringify({width,open}));}catch(_){}}
 function mount(q){
  const html=q.caseHtml||q.stimulusHtml;if(!html)return;
  const layout=document.querySelector('.mc-question-layout'),body=layout.querySelector('.mc-question-body'),help=layout.querySelector('.mc-question-help');layout.classList.add('exam-case-layout','mc-case-layout');
  const panel=document.createElement('aside');panel.id='exam-case-panel';panel.className='exam-case-panel mc-case-panel';panel.setAttribute('aria-label','Casus bij de oefenvraag');panel.innerHTML='<h2>Casus</h2><section class="mc-stimulus">'+html+'</section>'+(q.sourceVisualHtml?'<section class="mc-stimulus"><h3>Bronuitvoer bij deze vraag</h3>'+q.sourceVisualHtml+'</section>':'')+(q.prerequisitesHtml||'');
  const primary=document.createElement('div');primary.className='mc-primary';primary.append(body);
  const handle=document.createElement('div');handle.className='exam-case-resizer mc-case-resizer';handle.tabIndex=0;
  Object.entries({role:'separator','aria-orientation':'vertical','aria-label':'Breedte van de casus','aria-controls':'exam-case-panel','aria-valuemin':25,'aria-valuemax':55}).forEach(([k,v])=>handle.setAttribute(k,v));
  layout.append(panel,handle,primary);
  const button=document.createElement('button');button.type='button';button.className='study-btn';button.dataset.practiceCase='';button.textContent='Casus';button.setAttribute('aria-controls',panel.id);
  const tools=document.createElement('div');tools.className='mc-question-tools';tools.append(button,help);body.prepend(tools);
  function update(){panel.hidden=!open;handle.hidden=!open;layout.classList.toggle('mc-case-closed',!open);layout.style.setProperty('--mc-case-width',width+'%');handle.setAttribute('aria-valuenow',Math.round(width));button.setAttribute('aria-expanded',String(open));}
  button.onclick=()=>{open=!open;update();remember();};
  function resize(value){width=Math.max(25,Math.min(55,value));update();}
  handle.onpointerdown=e=>{if(e.button!==0)return;e.preventDefault();handle.focus({preventScroll:true});handle.setPointerCapture(e.pointerId);handle.dataset.dragging='true';};
  handle.onpointermove=e=>{if(handle.dataset.dragging!=='true')return;const r=layout.getBoundingClientRect();resize(100*(e.clientX-r.left)/r.width);};
  handle.onpointerup=handle.onpointercancel=e=>{delete handle.dataset.dragging;if(handle.hasPointerCapture(e.pointerId))handle.releasePointerCapture(e.pointerId);remember();};
  handle.onkeydown=e=>{let value=width;if(e.key==='ArrowLeft')value-=5;else if(e.key==='ArrowRight')value+=5;else if(e.key==='Home')value=25;else if(e.key==='End')value=55;else return;e.preventDefault();resize(value);remember();};
  update();
 }
 window.SRAMCCase={mount};
})();
