"""Keep the active opgave beside the answer without remounting the editor."""

HELPERS = r'''
  var casePreferences={open:true,width:100/3}, CASE_PREF_KEY='sra-exam-case-panel-v1';
  var caseScrollPositions=Object.create(null);
  try {
    var storedCase=JSON.parse(sessionStorage.getItem(CASE_PREF_KEY)||'null');
    if(storedCase&&typeof storedCase.open==='boolean')casePreferences.open=storedCase.open;
    if(storedCase&&Number.isFinite(storedCase.width))casePreferences.width=Math.max(25,Math.min(60,storedCase.width));
  } catch(ignore) {}
  function saveCasePreferences(){try{sessionStorage.setItem(CASE_PREF_KEY,JSON.stringify(casePreferences));}catch(ignore){}}
  function rememberCaseScroll(){
    var panel=host.querySelector('#exam-case-panel');
    if(panel&&panel.dataset.caseKey)caseScrollPositions[panel.dataset.caseKey]=panel.scrollTop;
  }
  function caseSection(attempt,q){
    // Saved attempts keep their original questions and answers; case excerpts are display data.
    var current=examById(attempt.exam.id),section=(current&&current.sections||attempt.exam.sections||[]).find(function(s){return s.id===q.sectionId;});
    return section&&section.caseHtml&&section.caseHtml.trim()?section:null;
  }
  function updateCasePanel(){
    var layout=host.querySelector('.exam-case-layout'),panel=host.querySelector('#exam-case-panel');
    if(!layout||!panel)return;
    var open=casePreferences.open,handle=layout.querySelector('.exam-case-resizer');
    layout.classList.toggle('is-case-hidden',!open);panel.hidden=!open;handle.hidden=!open;
    layout.style.setProperty('--exam-case-width',casePreferences.width+'%');
    handle.setAttribute('aria-valuenow',Math.round(casePreferences.width));
    handle.setAttribute('aria-valuetext',Math.round(casePreferences.width)+' procent casusbreedte');
    host.querySelectorAll('[data-exam-action="section"]').forEach(function(button){
      button.setAttribute('aria-controls','exam-case-panel');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-pressed',String(open));
      button.removeAttribute('aria-haspopup');
    });
  }
  function resizeCasePanel(value){casePreferences.width=Math.max(25,Math.min(60,value));updateCasePanel();}
  function mountCasePanel(attempt,q){
    var section=caseSection(attempt,q),body=host.querySelector('.exam-question-body');
    if(!section){host.querySelectorAll('[data-exam-action="section"]').forEach(function(button){button.hidden=true;});return;}
    var layout=document.createElement('div');layout.className='exam-case-layout';body.before(layout);
    var handle=document.createElement('div');handle.className='exam-case-resizer';handle.tabIndex=0;
    handle.setAttribute('role','separator');handle.setAttribute('aria-orientation','vertical');handle.setAttribute('aria-label','Breedte van de casus links aanpassen');
    handle.setAttribute('aria-controls','exam-case-panel');handle.setAttribute('aria-valuemin','25');handle.setAttribute('aria-valuemax','60');
    handle.title='Sleep naar rechts voor een bredere casus of naar links voor een smallere casus. Gebruik ook de pijltjestoetsen, Home en End.';
    var panel=document.createElement('aside');panel.id='exam-case-panel';panel.className='exam-case-panel';panel.setAttribute('aria-labelledby','exam-case-heading');
    panel.dataset.caseKey=attempt.id+':'+section.id;
    panel.innerHTML='<h2 id="exam-case-heading">Casus · '+esc(section.title)+'</h2>'+documentHtml(attempt.exam,'case',section.caseHtml);
    layout.appendChild(panel);layout.appendChild(handle);layout.appendChild(body);
    panel.scrollTop=caseScrollPositions[panel.dataset.caseKey]||0;
    handle.addEventListener('pointerdown',function(e){if(e.button!==0)return;e.preventDefault();handle.focus({preventScroll:true});handle.setPointerCapture(e.pointerId);handle.dataset.dragging='true';layout.classList.add('is-resizing');});
    handle.addEventListener('pointermove',function(e){if(handle.dataset.dragging!=='true')return;var rect=layout.getBoundingClientRect();if(rect.width)resizeCasePanel(100*(e.clientX-rect.left)/rect.width);});
    function endDrag(e){delete handle.dataset.dragging;layout.classList.remove('is-resizing');if(handle.hasPointerCapture(e.pointerId))handle.releasePointerCapture(e.pointerId);saveCasePreferences();}
    handle.addEventListener('pointerup',endDrag);handle.addEventListener('pointercancel',endDrag);
    handle.addEventListener('keydown',function(e){
      var value=casePreferences.width;
      if(e.key==='ArrowLeft')value-=5;else if(e.key==='ArrowRight')value+=5;else if(e.key==='Home')value=25;else if(e.key==='End')value=60;else return;
      e.preventDefault();resizeCasePanel(value);saveCasePreferences();
    });
    updateCasePanel();
  }
'''


def adapt(source):
    source=source.replace('  function updateQuestionNav(attempt) {',HELPERS+'\n  function updateQuestionNav(attempt) {',1)
    route_start='  function route() {\n    dropEditor();'
    assert route_start in source
    source=source.replace(route_start,'  function route() {\n    rememberCaseScroll();\n    dropEditor();',1)
    leave_start='leave:function(){dropEditor();'
    assert leave_start in source
    source=source.replace(leave_start,'leave:function(){rememberCaseScroll();dropEditor();',1)
    context='    if(section){\n      var context=document.createElement(\'details\');'
    if context in source:
        start=source.index(context)
        end=source.index('    var answerHost=',start)
        source=source[:start]+source[end:]
    source=source.replace('    var answerHost=host.querySelector(\'[data-exam-answer]\');','    mountCasePanel(attempt,q);\n    var answerHost=host.querySelector(\'[data-exam-answer]\');',1)
    previous="if(action==='section'){var section=sectionFor(attempt,q);if(section)showModal(section.title,documentHtml(attempt.exam,'exam',section.contentHtml));}"
    assert previous in source
    source=source.replace(previous,"if(action==='section'){casePreferences.open=!casePreferences.open;updateCasePanel();saveCasePreferences();}")
    source=source.replace('function sidebar(a,q){var section=sectionFor(a,q);','function sidebar(a,q){var section=caseSection(a,q);')
    source=source.replace("documentHtml(a.exam,'exam',section.contentHtml)","documentHtml(a.exam,'case',section.caseHtml)")
    return source
