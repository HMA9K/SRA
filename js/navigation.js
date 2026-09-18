/* Terug/vooruit herstelt de eigen pagina, invoer en leespositie. */
(function(global){
 'use strict';
 let root,button,activeHash,activeKey,depth=0,serial=0,restoring=false;
 const visits=new Map();
 const key=()=>Date.now().toString(36)+'-'+(++serial);
 function capture(){
  if(!root||!activeKey||restoring)return;
  const fields=[...root.querySelectorAll('input,select,textarea')].filter(e=>e.type!=='file'&&!e.hasAttribute('data-note')).map(e=>({id:e.id,name:e.name,type:e.type,value:e.value,checked:e.checked}));
  visits.set(activeKey,{x:global.scrollX,y:global.scrollY,details:[...root.querySelectorAll('details')].map(e=>e.open),fields,steps:root.querySelectorAll('#example-steps>li').length,focus:document.activeElement?.id});
 }
 function init(main,back){
  root=main;button=back;
  if('scrollRestoration' in history)history.scrollRestoration='manual';
  button.onclick=()=>{if(depth>0)history.back();};
  document.addEventListener('click',event=>{
   const link=event.target.closest('a[href]');
   if(link&&!event.defaultPrevented&&!link.hasAttribute('data-scroll'))capture();
  },true);
  global.addEventListener('scroll',()=>{if(location.hash===activeHash&&!restoring&&visits.has(activeKey))Object.assign(visits.get(activeKey),{x:global.scrollX,y:global.scrollY});},{passive:true});
  root.addEventListener('input',capture);root.addEventListener('change',capture);root.addEventListener('toggle',capture,true);
  global.addEventListener('pagehide',capture);
 }
 function before(){
  // De vorige entry is al verlaten bij hashchange; schrijf daar niet overheen.
  if(activeKey&&location.hash!==activeHash&&visits.has(activeKey)){
   const position=visits.get(activeKey);const y=position.y,x=position.x;capture();Object.assign(visits.get(activeKey),{x,y});
  }
  const saved=history.state?.sraVisit;
  if(saved&&visits.has(saved.key)){activeKey=saved.key;depth=saved.depth;}
  else{depth=activeKey?depth+1:0;activeKey=key();history.replaceState({...history.state,sraVisit:{key:activeKey,depth}},'');}
  activeHash=location.hash;button.hidden=depth===0;
  return visits.get(activeKey);
 }
 function after(snapshot){
  if(!snapshot){capture();return;}
  restoring=true;
  try{
   for(let i=0;i<snapshot.steps;i++){const next=root.querySelector('#next-step');if(next&&!next.disabled)next.click();}
   for(const field of snapshot.fields){
    const input=field.id?document.getElementById(field.id):[...root.querySelectorAll('input')].find(e=>e.name===field.name&&e.type===field.type&&e.value===field.value);
    if(!input||!root.contains(input)||input.disabled||input.hasAttribute('data-note'))continue;
    const changed=input.value!==field.value;input.value=field.value;
    if(input.type==='checkbox'||input.type==='radio'){
     const changedChoice=input.checked!==field.checked;input.checked=field.checked;
     if(changedChoice&&input.checked)input.dispatchEvent(new Event('change',{bubbles:true}));
    }
    else if(changed)input.dispatchEvent(new Event(input.tagName==='SELECT'?'change':'input',{bubbles:true}));
   }
   [...root.querySelectorAll('details')].forEach((element,i)=>{if(i<snapshot.details.length)element.open=snapshot.details[i];});
   const focus=snapshot.focus&&document.getElementById(snapshot.focus);if(focus&&root.contains(focus))focus.focus({preventScroll:true});
   global.scrollTo({left:snapshot.x,top:snapshot.y,behavior:'instant'});
   const expected=activeKey;
   requestAnimationFrame(()=>{if(expected===activeKey)global.scrollTo({left:snapshot.x,top:snapshot.y,behavior:'instant'});restoring=false;capture();});
  }catch(error){restoring=false;throw error;}
 }
 global.SRANavigation={init,before,after};
})(window);
