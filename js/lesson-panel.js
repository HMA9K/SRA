(function(){
 'use strict';
 const key='sra-lesson-panel-v1',desktop=matchMedia('(min-width:761px)');
 let width=248,open=true;
 try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved){if(Number.isFinite(saved.width))width=Math.max(200,Math.min(420,saved.width));if(typeof saved.open==='boolean')open=saved.open;}}catch(_){}
 const handle=document.createElement('div');handle.id='lesson-panel-resizer';handle.tabIndex=0;
 Object.entries({role:'separator','aria-orientation':'vertical','aria-label':'Breedte van het lesmenu','aria-controls':'sidebar','aria-valuemin':'200','aria-valuemax':'420'}).forEach(([k,v])=>handle.setAttribute(k,v));document.body.append(handle);
 function remember(){try{localStorage.setItem(key,JSON.stringify({width,open}));}catch(_){}}
 function sync(){const lesson=document.body.dataset.page==='les';document.body.classList.toggle('lesson-panel-closed',desktop.matches&&!open);document.body.style.setProperty('--lesson-panel-width',width+'px');handle.hidden=!lesson||!desktop.matches||!open;handle.setAttribute('aria-valuenow',Math.round(width));handle.setAttribute('aria-valuetext',Math.round(width)+' pixels');const button=document.getElementById('menu-toggle');if(button&&desktop.matches&&lesson){button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Lesmenu inklappen':'Lesmenu openen');}}
 function resize(value){width=Math.max(200,Math.min(420,value));sync();}
 handle.addEventListener('pointerdown',event=>{if(event.button!==0)return;event.preventDefault();handle.focus({preventScroll:true});handle.setPointerCapture(event.pointerId);handle.dataset.dragging='true';});
 handle.addEventListener('pointermove',event=>{if(handle.dataset.dragging==='true')resize(event.clientX);});
 function end(event){delete handle.dataset.dragging;if(handle.hasPointerCapture(event.pointerId))handle.releasePointerCapture(event.pointerId);remember();}
 handle.addEventListener('pointerup',end);handle.addEventListener('pointercancel',end);
 handle.addEventListener('keydown',event=>{let value=width;if(event.key==='ArrowLeft')value-=20;else if(event.key==='ArrowRight')value+=20;else if(event.key==='Home')value=200;else if(event.key==='End')value=420;else return;event.preventDefault();resize(value);remember();});
 desktop.addEventListener('change',sync);
 window.SRALessonPanel={sync,toggle(){if(!desktop.matches)return false;open=!open;sync();remember();return true;}};
 sync();
})();
