/* PDF-panelen gebaseerd op HMA9K/CAFA2, commit 2450804. SRA-aansluiting. */
(function(){
'use strict';
const originalPdfs=window.SRAOriginalPdfs;
/** Layout only: reserve a right column without reading or changing study data. */
const DEFAULT_WIDTH=100/3,KEY='sra-pdf-panel-v1',DIVIDER=14;
const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
function move(parent,node,before=null){
  const editor=parent.ownerDocument.defaultView?.CafaAnswerEditor;
  if(editor?.moveNode)editor.moveNode(parent,node,before);
  else if(typeof parent.moveBefore==='function'&&node.isConnected&&parent.isConnected)parent.moveBefore(node,before);
  else parent.insertBefore(node,before);
}
function panelPreference(value){return Number.isFinite(value?.width)&&value.width>=20&&value.width<=50?value.width:DEFAULT_WIDTH;}
function panelMetrics(width,preference=DEFAULT_WIDTH,hasCase=false){
  const fraction=typeof hasCase==='number'?clamp(hasCase,.25,.6):hasCase?1/3:0;
  const primaryMin=fraction?Math.max(560,Math.ceil(354/(1-fraction))):400,max=Math.min(width/2,width-primaryMin-DIVIDER);
  const stacked=width<860||max<320;
  return {stacked,width:stacked?Math.max(0,width):Math.round(clamp(width*clamp(preference,20,50)/100,320,max))};
}

function createAssistantPanel(panel,options={}){
  const doc=panel.ownerDocument,win=doc.defaultView;
  // PDF browsing contexts stay under body; only their empty layout slot moves.
  const slot=options.preserveContent?doc.createElement('div'):panel;
  if(slot!==panel){slot.className='study-assistant study-assistant-persistent-slot';slot.setAttribute('aria-hidden','true');}
  let width=DEFAULT_WIDTH,layout=null,primary=null,separator=null,page=null,modal=null,anchor=null,hash='',drag=null,queued=false,returnScroll=null,alignNext=false;
  try{width=panelPreference(JSON.parse(win.localStorage.getItem(KEY)||'null'));}catch{}
  const viewport=()=>{const v=win.visualViewport;return {y:v?.offsetTop||0,w:v?.width||doc.documentElement.clientWidth,h:v?.height||win.innerHeight};};
  const save=()=>{try{win.localStorage.setItem(KEY,JSON.stringify({width}));}catch{}};
  function detach(){
    if(!layout)return;
    drag=null;
    resizeObserver?.unobserve(layout);
    if(layout.contains(panel))move(doc.body,panel);
    // A question route can mount its case wrapper after a queued resize has
    // already docked the answer body. Preserve that new wrapper before removal.
    if(primary&&layout.contains(primary)){
      let content=primary;while(content.parentElement!==layout)content=content.parentElement;
      // A rendered exam route may already have removed the old layout.
      // Restore content only into a parent that still exists.
      if(layout.parentElement)move(layout.parentElement,content,layout);
    }
    primary?.classList.remove('study-assistant-primary');
    page?.classList.remove('study-assistant-page','study-assistant-short-page');page?.style.removeProperty('--sa-page-height');
    modal?.classList.remove('study-assistant-modal-host');
    layout.remove();layout=null;primary=null;separator=null;page=null;modal=null;
  }
  function target(){
    const activeModal=Array.from(doc.querySelectorAll('dialog[open]')).filter(el=>el!==panel&&el.matches(':modal')).at(-1);
    if(activeModal){
      if(!options.preserveContent)return null;
      const body=activeModal.querySelector('.exam-modal-body,.dialog-body');
      if(body&&!body.contains(panel))return {element:body,modal:activeModal};
      if(body&&modal===activeModal)return {element:primary,modal:activeModal};
      // Confirmation and law dialogs keep their own modal interaction until closed.
      return null;
    }
    const row=anchor?.isConnected&&anchor.closest('.result-expanded,article.exam-review-item');
    if(row)return {element:row};
    if(hash===win.location.hash&&primary?.isConnected&&!modal&&primary.matches('.result-expanded,article.exam-review-item'))return {element:primary};
    const question=doc.getElementById(win.location.hash.slice(1));
    if(question?.matches('.question'))return {element:question.querySelector('.practice-case-layout')||question.querySelector('.qbody'),page:question};
    const mc=doc.querySelector('.mc-page');if(mc)return {element:mc.querySelector('.exam-case-layout,.mc-question-layout')||mc};
    const host=doc.getElementById('exam-app');if(!host||host.hidden)return null;
    return {element:host.querySelector('.exam-case-layout,.exam-question-body,.review-detail-layout,.exam-results-panel')||
      (options.fallbackSelector?host.querySelector(options.fallbackSelector):null)};
  }
  function attach(destination){
    if(!destination?.element)return;
    if(destination.element===primary&&(destination.modal||null)===modal)return;
    detach();primary=destination.element;page=destination.page||null;modal=destination.modal||null;hash=win.location.hash;
    layout=doc.createElement('div');layout.className='study-assistant-layout';
    if(primary.matches('.exam-case-layout,.exam-question-body'))layout.classList.add('is-exam');
    if(modal)layout.classList.add('is-modal');
    separator=doc.createElement('div');separator.className='study-assistant-resizer';separator.tabIndex=0;
    separator.setAttribute('role','separator');separator.setAttribute('aria-orientation','vertical');
    separator.setAttribute('aria-label','Breedte van de uitwerking rechts aanpassen');separator.setAttribute('aria-controls',panel.id);
    separator.setAttribute('aria-valuemin','20');separator.setAttribute('aria-valuemax','50');
    separator.title='Sleep naar links voor een bredere uitwerking of naar rechts voor een smallere uitwerking. Gebruik ook de pijltoetsen, Home en End.';
    separator.innerHTML='<span aria-hidden="true">⋮</span>';
    primary.before(layout);primary.classList.add('study-assistant-primary');move(layout,primary);layout.append(separator);move(layout,slot);
    alignNext=true;
    page?.classList.add('study-assistant-page');modal?.classList.add('study-assistant-modal-host');
    separator.addEventListener('pointerdown',event=>{if(event.button!==0)return;event.preventDefault();
      drag={id:event.pointerId,right:layout.getBoundingClientRect().right};separator.setPointerCapture(event.pointerId);layout.classList.add('is-resizing');});
    separator.addEventListener('pointermove',event=>{if(drag?.id!==event.pointerId)return;
      width=clamp(100*(drag.right-event.clientX-DIVIDER/2)/layout.getBoundingClientRect().width,20,50);place();});
    function finish(event){if(drag?.id!==event.pointerId)return;const id=drag.id;drag=null;layout.classList.remove('is-resizing');
      if(separator.hasPointerCapture(id))separator.releasePointerCapture(id);save();}
    for(const event of ['pointerup','pointercancel','lostpointercapture'])separator.addEventListener(event,finish);
    separator.addEventListener('keydown',event=>{
      const step=event.shiftKey?10:5;
      if(event.key==='ArrowLeft')width+=step;else if(event.key==='ArrowRight')width-=step;
      else if(event.key==='Home')width=DEFAULT_WIDTH;else if(event.key==='End')width=50;else return;
      event.preventDefault();width=clamp(width,20,50);place();save();
    });
    resizeObserver?.observe(layout);
  }
  function safeTop(v){
    let top=v.y;
    if(modal){const head=modal.querySelector('.exam-modal-head,.dialog-header');return head?.getBoundingClientRect().height||48;}
    for(const selector of ['.topbar','#study-returnbar']){const r=doc.querySelector(selector)?.getBoundingClientRect();
      if(r&&r.height&&r.bottom>v.y&&r.top<v.y+v.h)top=Math.max(top,r.bottom);}
    return top;
  }
  function place(){
    if(!panel.open)return;
    // Exam information dialogs never host or reveal the question assistant.
    const blocked=!options.preserveContent&&Array.from(doc.querySelectorAll('dialog[open]')).some(el=>el!==panel&&el.matches(':modal'));
    panel.style.visibility=blocked?'hidden':'';panel.inert=blocked;
    if(blocked)return;
    const destination=target();if(destination)attach(destination);
    if(!layout?.isConnected)return;
    const v=viewport(),casePanel=primary.querySelector('.exam-case-panel:not([hidden])');
    const fraction=casePanel?(parseFloat(primary.style.getPropertyValue('--case-width'))||100/3)/100:false;
    const metrics=panelMetrics(layout.getBoundingClientRect().width/(win.StudyScale?.get()||1),width,fraction);
    const stacked=metrics.stacked||v.w<900;
    layout.classList.toggle('is-stacked',stacked);separator.hidden=stacked;
    doc.body.classList.toggle('study-assistant-stacked',stacked&&!modal);
    layout.style.setProperty('--sa-column-width',metrics.width+'px');
    separator.setAttribute('aria-valuenow',String(Math.round(width)));separator.setAttribute('aria-valuetext',Math.round(width)+' procent uitwerkingbreedte');
    const short=stacked&&v.h<500;doc.body.classList.toggle('study-assistant-short',short);
    page?.classList.toggle('study-assistant-short-page',v.h<600);
    const footer=page?.querySelector('.question-nav')||doc.querySelector('#exam-app:not([hidden]) .exam-footer');
    const top=safeTop(v),footerHeight=!short&&!modal?(footer?.getBoundingClientRect().height||0):0;
    const scale=win.StudyScale?.get()||1;
    const available=Math.max(100,(v.h-top+v.y-footerHeight)/scale-12);
    layout.style.setProperty('--sa-pane-height',Math.min(modal?620:680,available)+'px');
    if(page)page.style.setProperty('--sa-page-height',Math.max(160,(v.h-Math.max(top,page.getBoundingClientRect().top)+v.y)/scale-12)+'px');
    const renderedHeight=stacked?Math.min(680,available):layout.getBoundingClientRect().height;
    if(slot!==panel){
      const height=stacked?Math.min(680,available)+'px':'100%';if(slot.style.height!==height)slot.style.height=height;
      const rect=slot.getBoundingClientRect();
      for(const [key,value] of Object.entries({position:'fixed',left:rect.left/scale+'px',top:rect.top/scale+'px',width:rect.width/scale+'px',height:rect.height/scale+'px',margin:'0px',zIndex:'90'})){
        if(panel.style[key]!==value)panel.style[key]=value;
      }
    }
    panel.classList.toggle('is-short',renderedHeight<500);panel.classList.toggle('is-tiny',renderedHeight<280);
    if(alignNext){alignNext=false;if(stacked)win.requestAnimationFrame(()=>{
      if(!panel.open)return;
      if(modal)panel.scrollIntoView({block:'nearest',behavior:'instant'});
      else win.scrollTo({top:Math.max(0,win.scrollY+panel.getBoundingClientRect().top-safeTop(viewport())-6),behavior:'instant'});
    });}
  }
  function queue(){if(queued)return;queued=true;win.requestAnimationFrame(()=>{queued=false;place();});}
  const resizeObserver=win.ResizeObserver?new win.ResizeObserver(queue):null;
  for(const element of doc.querySelectorAll('.topbar,#study-returnbar'))resizeObserver?.observe(element);
  const observer=new win.MutationObserver(records=>{
    if(records.some(r=>!panel.contains(r.target)&&(r.type==='childList'||r.target.tagName==='DIALOG'||r.target.id==='exam-case-panel'||r.target.matches?.('.exam-case-layout'))))queue();
  });
  observer.observe(doc.body,{subtree:true,childList:true,attributes:true,attributeFilter:['open','hidden','style']});
  function show(opener){
    anchor=opener?.closest('.study-inline-launch')?opener:null;
    const first=!panel.open;if(first)returnScroll={x:win.scrollX,y:win.scrollY,hash:win.location.hash};
    if(!panel.open)panel.show();panel.setAttribute('aria-modal','false');place();
  }
  panel.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();event.stopPropagation();panel.close();}});
  panel.addEventListener('close',()=>{
    if(panel.open)return; // A queued close event must not detach a newly reopened pane.
    const wasStacked=layout?.classList.contains('is-stacked');save();detach();doc.body.classList.remove('study-assistant-short','study-assistant-stacked');
    if(wasStacked&&returnScroll?.hash===win.location.hash)win.scrollTo(returnScroll.x,returnScroll.y);returnScroll=null;anchor=null;
  });
  const resized=()=>{alignNext=true;queue();};
  win.addEventListener('resize',resized);win.visualViewport?.addEventListener('resize',resized);win.visualViewport?.addEventListener('scroll',queue);
  win.addEventListener('pagehide',save);
  win.addEventListener('cafa:question-unmount',event=>{
    if(page!==event.detail&&!event.detail.contains(primary))return;
    detach();
    if(/^#(?:kap|val|nvw|hk)-\d+$/.test(win.location.hash))panel.hidden=true;
    else if(panel.open)panel.close();
  });
  win.addEventListener('cafa:question-mounted',()=>{panel.hidden=false;queue();});
  return {show,refresh:queue,hide(){if(panel.open)panel.close();detach();}};
}


// Original source documents only. No attempt, answer or assistant conversation is written here.
let left=null,right=null,dock=null,queued=false,currentKey='',rightRequest=0;
const viewers=new Map();
const idleReaders=new Map(),IDLE_READER_MS=60000;
function forgetViewer(key,box){clearTimeout(idleReaders.get(key));idleReaders.delete(key);box.remove();viewers.delete(key);}
function scheduleIdleReaders(){
  for(const [key,box] of viewers){
    if(activeViewer(box)){clearTimeout(idleReaders.get(key));idleReaders.delete(key);continue;}
    if(idleReaders.has(key))continue;
    idleReaders.set(key,setTimeout(async()=>{
      idleReaders.delete(key);
      if(activeViewer(box)||viewers.get(key)!==box)return;
      try{const reader=box.querySelector('iframe')?.contentWindow?.CafaPdfReader;
        if(!reader?.ready){scheduleIdleReaders();return;}
        await reader.flush();
        if(!reader.pending&&!activeViewer(box)&&viewers.get(key)===box)forgetViewer(key,box);
      }catch{}
      scheduleIdleReaders();
    },IDLE_READER_MS));
  }
}
let pruning=false;
const activeViewer=box=>box===left?.viewer||(right?.open&&box.parentElement===right&&!box.inert);
async function pruneViewers(){
  if(pruning)return;pruning=true;
  const failed=new Set();
  try{
    while(viewers.size>2){
      const candidate=[...viewers].find(([key,box])=>!activeViewer(box)&&!failed.has(key));
      if(!candidate)break;
      const [key,box]=candidate;
      try{
        const reader=box.querySelector('iframe')?.contentWindow?.CafaPdfReader;
        // Finish the IndexedDB transaction before releasing the browsing context.
        // Keep unsaved annotations accessible if local storage fails.
        await reader?.flush();
        if(reader?.pending){failed.add(key);continue;}
      }catch{failed.add(key);continue;}
      // The user may have reopened this document while saving was in progress.
      if(activeViewer(box)||viewers.get(key)!==box)continue;
      forgetViewer(key,box);
    }
  }finally{pruning=false;scheduleIdleReaders();}
}
const htmlEscape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function context(){
 const mc=document.querySelector('.mc-page');if(mc)return {id:mc.dataset.sourceExam,host:mc,key:location.hash};
 const position=window.SRACirrus?.getPosition();
 if(position){const ctx=SRACirrus.getQuestionContext(position.attempt,position.index);return {id:ctx?.question?.sourceExamId||ctx?.exam.id,host:document.getElementById('exam-app'),key:position.attempt+':'+position.index};}
 const match=location.hash.match(/^#welkom\/([^/]+)/);
 return {id:match?.[1],host:document.getElementById('exam-app'),key:location.hash};
}

function actions(id,download=false){
  const source=originalPdfs[id];if(!source)return null;
  const group=document.createElement('span');group.className='original-pdf-actions';group.dataset.pdfExam=id;
  for(const [kind,label] of [['questions','Tentamen PDF'],['solutions','Uitwerking PDF']]){
    const directDownload=false;
    const button=document.createElement(directDownload&&source[kind].url?'a':'button');button.className='btn';
    button.dataset.pdfExam=id;button.textContent=label+(kind==='questions'&&directDownload?' downloaden':'');
    if(directDownload&&source[kind].url){
      button.href=source[kind].url;button.download='CAFA2-'+source.date+'-'+(kind==='questions'?'tentamen':'uitwerking')+'.pdf';
      button.dataset.pdfDownload=kind;button.title=kind==='questions'?'Download het originele tentamen als PDF':'Download de officiële uitwerking als PDF';
    }else{button.type='button';button.dataset.originalPdf=kind;button.setAttribute('aria-pressed','false');}
    if(!source[kind].url){button.disabled=true;button.title=source[kind].reason;button.setAttribute('aria-describedby','original-pdf-missing');}
    group.append(button);
  }
  return group;
}
function viewer(id,kind){
  const key=id+':'+kind;if(viewers.has(key)){
    clearTimeout(idleReaders.get(key));idleReaders.delete(key);
    const box=viewers.get(key);viewers.delete(key);viewers.set(key,box);return box;
  }
  const source=originalPdfs[id],file=source[kind],label=kind==='questions'?'Origineel tentamen':'Officiële uitwerking';
  const box=document.createElement('section');box.className='original-pdf-viewer';box.dataset.pdfExam=id;
  box.innerHTML='<header class="original-pdf-head"><strong>'+label+' · '+htmlEscape(source.date.split('-').reverse().join('-'))+'</strong><button type="button" class="btn" data-pdf-close="'+kind+'">'+(kind==='questions'?'Terug naar casus':'Sluiten')+'</button></header>'+
    '<p class="original-pdf-link"><a target="_blank" rel="noopener" href="'+file.url+'">Open PDF in een nieuw tabblad</a></p>'+
    '<iframe title="'+htmlEscape(label+' '+file.title)+'" src="pdf-reader/web/viewer.html?file='+encodeURIComponent(new URL(file.url,document.baseURI).href)+'&amp;key='+encodeURIComponent(key+':'+file.sha256)+'" loading="eager"></iframe>';
  viewers.set(key,box);return box;
}
function placeLeft(){
  if(!left)return;
  const rect=left.panel.getBoundingClientRect(),box=left.viewer;
  const scale=window.StudyScale?.get()||1;
  for(const [key,value] of Object.entries({left:rect.left/scale+'px',top:rect.top/scale+'px',width:rect.width/scale+'px',height:rect.height/scale+'px'})){
    if(box.style[key]!==value)box.style[key]=value;
  }
  box.style.visibility=left.panel.isConnected&&rect.width&&rect.height?'visible':'hidden';
}
const leftObserver=new ResizeObserver(placeLeft);
function closeLeft(){
  if(!left)return;
  leftObserver.unobserve(left.panel);left.viewer.style.visibility='hidden';left.viewer.inert=true;
  for(const item of left.children)item.node.hidden=item.hidden;
  left.panel.classList.remove('original-pdf-left');
  if(left.wrapper){let content=left.primary;while(content.parentElement&&content.parentElement!==left.wrapper)content=content.parentElement;
    left.wrapper.before(content);left.wrapper.remove();}
  left=null;updatePressed();scheduleIdleReaders();
}
function closeRight(){rightRequest++;if(right?.open)dock.hide();document.body.classList.remove('original-pdf-open');scheduleIdleReaders();}
function updatePressed(){
  document.querySelectorAll('[data-original-pdf]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.originalPdf==='questions'?left?.id===b.dataset.pdfExam:right?.open&&right.dataset.pdfExam===b.dataset.pdfExam)));
}
function openLeft(id,opener,restore=false){
  if(left?.id===id&&!restore){closeLeft();return;}
  closeLeft();document.querySelector('.cirrus-case-float [data-float-close]')?.click();
  const ctx=context();let panel=ctx.host?.querySelector('.exam-case-panel'),wrapper=null,primary=null;
  if(panel){
    if(panel.hidden){const toggle=ctx.host.querySelector('[data-exam-action="section"],[data-practice-case]');toggle?.click();panel=ctx.host.querySelector('.exam-case-panel');}
  }else{
    primary=ctx.host?.querySelector('.exam-dashboard-content,.exam-paper,.exam-results-panel');if(!primary)return;
    wrapper=document.createElement('div');wrapper.className='original-pdf-dashboard-layout';
    panel=document.createElement('aside');panel.className='original-pdf-dashboard-pane';
    primary.before(wrapper);wrapper.append(panel,primary);
  }
  if(!panel||panel.hidden)return;
  const children=[...panel.children].map(node=>({node,hidden:node.hidden}));children.forEach(({node})=>node.hidden=true);
  const box=viewer(id,'questions');panel.classList.add('original-pdf-left');
  box.classList.add('original-pdf-left-viewer');box.inert=false;
  if(!box.isConnected)document.body.append(box);
  left={id,panel,children,viewer:box,wrapper,primary,opener};updatePressed();
  leftObserver.observe(panel);placeLeft();
  void pruneViewers();
}
async function openRight(id,opener){
  if(right?.open&&right.dataset.pdfExam===id){closeRight();return;}
  const request=++rightRequest;
  if(!right){
    right=document.createElement('dialog');right.id='exam-original-solutions';right.className='study-assistant original-pdf-right';right.setAttribute('aria-label','Officiële uitwerking PDF');document.body.append(right);
    dock=createAssistantPanel(right,{fallbackSelector:'.exam-dashboard-content,.exam-paper',preserveContent:true});
    right.addEventListener('close',()=>{if(right.open)return;document.body.classList.remove('original-pdf-open');updatePressed();scheduleIdleReaders();});
  }
  const assistant=document.getElementById('study-assistant'),key=context().key;
  if(assistant?.open)await new Promise(resolve=>{assistant.addEventListener('close',resolve,{once:true});assistant.close();});
  if(context().key!==key||request!==rightRequest)return;
  right.dataset.pdfExam=id;const box=viewer(id,'solutions');
  if(window.StudyAssistant&&!box.querySelector('[data-pdf-assistant]')){
    const restore=document.createElement('button');restore.type='button';restore.className='btn';restore.dataset.pdfAssistant='';restore.textContent='Terug naar assistent';box.querySelector('header').append(restore);
  }
  // Keep the current documents attached across question changes and toggles.
  // Older, inactive readers are released after saving their annotations.
  for(const item of right.children){item.style.visibility='hidden';item.inert=true;}
  if(!box.isConnected)right.append(box);
  box.style.visibility='visible';box.inert=false;dock.show(opener);document.body.classList.add('original-pdf-open');updatePressed();
  void pruneViewers();
}
function mount(){
  queued=false;const ctx=context();
  if(ctx.loading){placeLeft();return;}
  if(currentKey&&currentKey!==ctx.key){
    if(left&&left.id!==ctx.id)closeLeft();
    if(right?.open&&right.dataset.pdfExam!==ctx.id)closeRight();
  }currentKey=ctx.key;
  if(left&&(!left.panel.isConnected||!ctx.host?.contains(left.panel)))openLeft(left.id,left.opener,true);
  placeLeft();if(right?.open)dock.refresh();
  const target=ctx.host?.querySelector('.exam-footer .actions,.mc-footer-tools,.question-nav .nav-left')||ctx.host?.querySelector('.question-nav,.exam-welcome-actions,.exam-paper .actions');
  if(target&&originalPdfs[ctx.id]&&!target.querySelector('.original-pdf-actions'))target.append(actions(ctx.id));
  const welcome=ctx.host?.querySelector('.exam-paper');
  if(location.hash.startsWith('#welkom/')&&welcome&&originalPdfs[ctx.id]&&!welcome.querySelector('.original-pdf-actions'))welcome.append(actions(ctx.id));
  document.querySelectorAll('#exam-app a.exam-name').forEach(link=>{
    const href=link.getAttribute('href'),m=href?.match(/^#(welkom|toets|inzage)\/([^/]+)/);if(!m)return;
    const id=m[1]==='welkom'?m[2]:SRACirrus.getQuestionContext(m[2])?.exam.id;
    if(originalPdfs[id]&&!link.parentElement.querySelector('.original-pdf-actions'))link.parentElement.append(actions(id,true));
  });
  if(document.querySelector('[data-original-pdf]:disabled')&&!document.getElementById('original-pdf-missing')){
    const notice=document.createElement('p');notice.id='original-pdf-missing';notice.className='original-pdf-missing';notice.textContent='Een oorspronkelijk PDF-document ontbreekt. Er wordt geen reconstructie als origineel aangeboden.';
    (document.querySelector('#exam-app .exam-dashboard-help')||ctx.host)?.append(notice);
  }
  updatePressed();
}
function schedule(){if(!queued){queued=true;requestAnimationFrame(mount);}}
document.addEventListener('click',event=>{
  if(event.target.closest('[data-cirrus-float],[data-exam-action="section"],[data-practice-case]')&&left)closeLeft();
  const close=event.target.closest('[data-pdf-close]');if(close){if(close.dataset.pdfClose==='questions')closeLeft();else closeRight();return;}
  if(event.target.closest('[data-pdf-assistant]')){window.StudyAssistant?.resume();return;}
  const button=event.target.closest('[data-original-pdf]');if(!button||button.disabled)return;
  if(button.dataset.originalPdf==='questions')openLeft(button.dataset.pdfExam,button);else openRight(button.dataset.pdfExam,button);
},true);
// Keep the source PDF visible until the introductory Continue action is accepted.
window.addEventListener('cafa:assistant-start',event=>{
  const closed=right?.open?new Promise(resolve=>right.addEventListener('close',resolve,{once:true})):null;
  closeRight();if(closed)event.detail?.waitUntil?.(closed);
});
window.addEventListener('hashchange',schedule);
window.addEventListener('resize',placeLeft);
document.addEventListener('scroll',placeLeft,true);
window.addEventListener('cafa:ready',schedule);
new MutationObserver(records=>{if(records.some(r=>r.type==='childList'||r.target.matches?.('.question')))schedule();}).observe(document.getElementById('main'),{childList:true,subtree:true});
mount();

})();
