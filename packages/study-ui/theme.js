/* Based on CAFA2 js/study-theme.js. Session choice; system preference by default. */
(function(root){
 'use strict';
 const doc=root.document,html=doc.documentElement,key=html.dataset.studyStorage||'study-display-session-v1';
 const media=root.matchMedia?root.matchMedia('(prefers-color-scheme: dark)'):{matches:false};
 let mode='auto';
 try{const stored=root.sessionStorage.getItem(key);if(['auto','light','dark'].includes(stored))mode=stored;}catch(_){}
 function apply(){
  const effective=mode==='auto'?(media.matches?'dark':'light'):mode;
  html.dataset.studyTheme=effective;html.dataset.studyMode=mode;html.style.colorScheme=effective;
  doc.querySelectorAll('[data-theme-choice]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.themeChoice===mode)));
  doc.querySelectorAll('[data-theme-label]').forEach(label=>{label.textContent=mode==='auto'?'Automatisch':mode==='light'?'Aan':'Uit';});
  root.dispatchEvent(new CustomEvent('study:theme',{detail:{mode,effective}}));
 }
 root.StudyTheme={getMode:()=>mode,setMode(value){if(!['auto','light','dark'].includes(value))return;mode=value;try{root.sessionStorage.setItem(key,mode);}catch(_){}apply();},refresh:apply};
 if(media.addEventListener)media.addEventListener('change',apply);else if(media.addListener)media.addListener(apply);
 function close(restoreFocus=false){const menu=doc.getElementById('study-theme-control');if(menu?.open){menu.open=false;if(restoreFocus)menu.querySelector('summary').focus();}}
 doc.addEventListener('click',event=>{const choice=event.target.closest('[data-theme-choice]');if(choice)root.StudyTheme.setMode(choice.dataset.themeChoice);else if(!event.target.closest('#study-theme-control'))close();});
 doc.addEventListener('keydown',event=>{if(event.key==='Escape')close(true);});
 root.addEventListener('hashchange',()=>close());
 function ready(){
  apply();const header=doc.querySelector('.study-topbar');
  if(header){const measure=()=>doc.body.style.setProperty('--study-header-height',header.offsetHeight+'px');measure();if(root.ResizeObserver)new root.ResizeObserver(measure).observe(header);else root.addEventListener('resize',measure);}
 }
 if(doc.readyState==='loading')doc.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
 apply();
})(window);
