"""Behoud de bestaande broncontrole en directe feedback bij Cirrus-regeneratie."""

AUDITED_ANSWER = r'''  function auditedAnswer(a,q){
    // Saved attempts keep their original questions and answers. Show the current
    // source review alongside them without rewriting scores or stored work.
    var current=catalog.find(function(e){return e.id===a.exam.id;});
    var latest=current&&current.questions.find(function(item){return item.id===q.id&&item.originalNumber===q.originalNumber;});
    var audit=(latest||q).answerAudit, note='';
    if(audit&&['G','N','C','B'].indexOf(audit.status)>=0){
      var body='<p>'+esc(audit.note)+'</p><p class="answer-audit-meta">Afzonderlijke broncontrole · '+esc(audit.reviewed)+' · het oorspronkelijke antwoord staat hieronder.</p>';
      note=audit.status==='G'?'<details class="answer-audit answer-audit-checked"><summary>Gecontroleerd aan de bron</summary>'+body+'</details>':'<aside class="answer-audit" role="note"><h3>'+esc(audit.label)+'</h3>'+body+'</aside>';
    }
    return note+documentHtml(a.exam,'solution',q.solutionHtml,q.solution||'Er is nog geen antwoordmodel toegevoegd.');
  }
'''

FEEDBACK = r'''  function renderAnswerFeedback(a,q){
    var feedback=host.querySelector('[data-exam-feedback]');if(!feedback)return;
    feedback.innerHTML='<h3 id="exam-feedback-heading" tabindex="-1">Antwoordmodel bij vraag '+questionNumber(q,a.currentIndex)+'</h3><p>Vergelijk je redenering, berekening en conclusie met de officiële uitwerking. Ken jezelf punten toe voor de onderdelen die je goed hebt uitgewerkt.</p>'+auditedAnswer(a,q)+scoreInput(a,q);
    feedback.hidden=false;
    if(window.CafaStockTable)window.CafaStockTable.enhance(feedback);
  }
  function checkAnswer(a,q){
    a.checked=a.checked||{};a.checked[q.id]=true;save();renderAnswerFeedback(a,q);
    var heading=host.querySelector('#exam-feedback-heading');
    if(heading){heading.focus({preventScroll:true});heading.scrollIntoView({block:'nearest',behavior:'smooth'});}
    announce('Het antwoordmodel staat direct onder je antwoord. Bij open vragen beoordeel je zelf de uitwerking.');
  }
'''


def adapt(source):
    def replace(old, new):
        nonlocal source
        if old not in source:
            raise ValueError('Cirrus feedback: het verwachte bronblok ontbreekt: ' + old[:90])
        source = source.replace(old, new, 1)

    anchor = "      attempt.marked = attempt.marked && typeof attempt.marked === 'object' ? attempt.marked : {};"
    replace(anchor, anchor + "\n      attempt.checked = attempt.checked && typeof attempt.checked === 'object' && !Array.isArray(attempt.checked) ? attempt.checked : {};")
    anchor = "    var answerHost=host.querySelector('[data-exam-answer]');"
    replace(anchor, anchor + '''
    var feedback=document.createElement('section');feedback.className='exam-inline-feedback';feedback.hidden=true;
    feedback.setAttribute('data-exam-feedback','');feedback.setAttribute('aria-labelledby','exam-feedback-heading');
    answerHost.after(feedback);
    host.querySelector('[data-exam-action="check"]').textContent='Controleer mijn antwoord';''')
    replace('    updateSaveStatus();\n  }\n  function showModal',
            '    if(attempt.checked&&attempt.checked[q.id])renderAnswerFeedback(attempt,q);\n    updateSaveStatus();\n  }\n  function showModal')
    replace('  function invalidateScore(a,q){if(a.scores)delete a.scores[q.id];}', '''  function invalidateScore(a,q){
    if(a.scores)delete a.scores[q.id];
    if(a.checked)delete a.checked[q.id];
    var feedback=host.querySelector('[data-exam-feedback]');
    if(feedback){feedback.hidden=true;feedback.innerHTML='';}
  }''')
    # Adapt the two existing answer-model locations before adding the audit helper.
    model = "documentHtml(a.exam,'solution',q.solutionHtml,q.solution||'Er is nog geen antwoordmodel toegevoegd.')"
    if source.count(model) != 2:
        raise ValueError('Cirrus feedback: verwacht antwoordmodel in zijbalk en resultaten.')
    source = source.replace(model, 'auditedAnswer(a,q)')
    replace('  function ownAnswer(', AUDITED_ANSWER + '  function ownAnswer(')
    start = source.index('  function checkAnswer(')
    end = source.index('  function resultSummary(', start)
    source = source[:start] + FEEDBACK + source[end:]
    replace("    if(parts.length>1){reviewQuestion(a,Number(parts[1])||0);return;}", '''    if(parts.length>1){
      var reviewIndex=Math.max(0,Math.min(a.exam.questions.length-1,Number(parts[1])||0));
      reviewQuestion(a,reviewIndex);
      host.insertAdjacentHTML('afterbegin','<h1 class="exam-review-title">'+esc(label(a.exam))+' · Vraag '+questionNumber(a.exam.questions[reviewIndex],reviewIndex)+'</h1>');
      return;
    }''')
    return source
