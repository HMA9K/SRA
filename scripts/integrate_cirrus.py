"""Gemaakt met Codex. Eenmalige integratie van de actuele CAFA2-bediening.
De originele bestanden blijven herkenbaar in vendor/cafa2-cirrus.
"""
from pathlib import Path
import shutil,re,json,hashlib
R=Path(__file__).resolve().parents[1]
source=R/'tmp/cafa2-layout-reference'; vendor=R/'vendor/cafa2-cirrus'
vendor.mkdir(parents=True,exist_ok=True)
files=['css/app.css','js/exam-engine.js','js/answer-editor.js','css/exams.css','css/exam-experience.css','css/answer-editor.css','css/question-overview.css','css/exam-document.css']
for name in files:
    target=vendor/name;target.parent.mkdir(parents=True,exist_ok=True)
    # Match .gitattributes so the provenance hashes also survive a fresh checkout.
    target.write_bytes((source/name).read_text(encoding='utf8').encode('utf8'))
(vendor/'js/exams.js').write_bytes((source/'js/exams.js').read_text(encoding='utf8').encode('utf8'))
(vendor/'provenance.json').write_text(json.dumps(dict(repository='https://github.com/HMA9K/CAFA2',commit='639f4c2e8adf2f26d7e1992aadb52b8fbb9e3d42',files={str(p.relative_to(vendor)).replace('\\','/'):hashlib.sha256(p.read_bytes()).hexdigest() for p in vendor.rglob('*') if p.is_file() and p.name!='provenance.json'}),indent=2),encoding='utf8')
s=(source/'js/exams.js').read_text(encoding='utf8')
s=s.replace("var host = document.getElementById('exam-app');", "var host = document.createElement('div'); host.id='exam-app'; host.className='exams-app';")
s=s.replace("'cafa2-full-exams-v1'","'sra-cirrus-exams-v1'").replace('window.CAFA2_EXAMS','window.SRA_CIRRUS_EXAMS')
s=s.replace('CAFA2','SRA')
# Route names avoid collision with the SRA analysis and MC routes.
s=s.replace("'tentamen'","'toets'").replace("tentamen/","toets/")
s=s.replace('dashboard','tentamen')
# Keep the original CSS class and function names stable.
s=s.replace('exam-tentamen','exam-dashboard')
s=s.replace("document.querySelector('.top-controls')","document.querySelector('.top-tools')")
s=s.replace("window.CafaPractice ? window.CafaPractice.getCompleted() : []", "window.SRAMC ? window.SRAMC.completed().map(function(t){return {id:t.id,code:'SRA-MC',title:'SRA oefenvragen · '+t.title,href:'#tentamen/mc/'+t.id+'/resultaat',answered:t.done,total:t.total,good:t.correct,auto:t.total};}) : []")
s=s.replace('#welkom/practice','#tentamen/mc').replace('href="#voortgang"','href="#tentamen/mc/resultaten"')
s=s.replace("function examById(id) {", "function examById(id) { id=id.split('/')[0];")
s=s.replace("function welcome(id) {", "function welcome(id) { var startIndex=Math.max(0,Number(id.split('/')[1]||1)-1);id=id.split('/')[0];")
s=s.replace("'data-exam-id=\"'+esc(exam.id)+'\" '", "'data-exam-id=\"'+esc(exam.id)+'\" data-exam-start-index=\"'+startIndex+'\" '")
s=s.replace("attempts().push(a);save();go('toets/'+a.id)", "a.currentIndex=Math.min(a.exam.questions.length-1,Number(button.dataset.examStartIndex)||0);attempts().push(a);save();go('toets/'+a.id)")
# Render only validated local source images. User answers still use the unmodified editor sanitizer.
a=s.index('  function documentHtml(');b=s.index('  function byId',a)
s=s[:a]+'''  function documentHtml(exam,kind,html,plain) {
    var source=document.createElement('template'); source.innerHTML=html||'<p>'+esc(plain||'')+'</p>';
    var images=[];
    source.content.querySelectorAll('img').forEach(function(img){
      var src=img.getAttribute('src')||'', marker='SRA-SOURCE-IMAGE-'+images.length;
      if(/^bronnen\\/tentamens\\/\\d{8}\\/[a-z0-9-]+\\.jpg$/.test(src)){
        images.push('<a class="sra-source-enlarge" href="'+src+'" target="_blank" rel="noopener" aria-label="'+esc(img.alt)+' vergroten"><img class="sra-cirrus-source" loading="lazy" src="'+src+'" alt="'+esc(img.alt)+'"></a>');
        img.replaceWith(document.createTextNode(marker));
      }else img.remove();
    });
    var content=Editor.sanitize(source.innerHTML).replace(/SRA-SOURCE-IMAGE-(\\d+)/g,function(_,i){return images[Number(i)]||'';});
    if(kind==='question'&&images.length&&plain)content+='<details class="sra-source-text"><summary>Tekstversie van de vraag</summary><p>'+esc(plain)+'</p></details>';
    return '<div class="exam-document exam-source-document exam-source-'+kind+'">'+content+'</div>';
  }
''' +s[b:]
# Unknown original duration is an explicit configurable practice duration, never a source claim.
s=s.replace("exam.durationMinutes+' minuten'", "exam.durationMinutes+' minuten'")
s=s.replace("(exam.durationMinutes+(resume?resume.extraMinutes:0))+' minuten</td>", "(exam.durationUnconfirmed&&!resume?'Zelf kiezen':(exam.durationMinutes+(resume?resume.extraMinutes:0))+' minuten')+'</td>")
s=s.replace("+introduction(exam)+details(exam,false)", "+introduction(exam)+(exam.durationUnconfirmed?'<label class=\"exam-practice-duration\">Oefenduur in minuten <input type=\"number\" min=\"1\" max=\"600\" value=\"150\" data-practice-duration></label><p class=\"small\">De bron vermeldt geen duur. Kies zelf je oefenduur, of oefen zonder tijdslimiet. 150 minuten is hier alleen een instelbare beginwaarde.</p>':'')+details(exam,false)")
s=s.replace("try{var a=Engine.createAttempt(exam,", "try{var duration=host.querySelector('[data-practice-duration]'); if(duration){if(!duration.reportValidity())return;exam=Object.assign({},exam,{durationMinutes:Number(duration.value)});}var a=Engine.createAttempt(exam,")
s=s.replace("host.addEventListener('change',function(e){", """host.addEventListener('change',function(e){
    if(e.target.matches('[data-practice-duration],[data-exam-extra],[data-exam-untimed]')){
      var durationField=host.querySelector('[data-practice-duration]');
      if(durationField){var minutes=Number(durationField.value),extraField=host.querySelector('[data-exam-extra]'),untimed=host.querySelector('[data-exam-untimed]').checked;
        extraField.disabled=untimed;host.querySelector('[data-exam-total]').textContent=minutes+(extraField.checked?30:0);host.querySelector('[data-exam-detail-duration]').textContent=untimed?'Zonder tijdslimiet':(minutes+(extraField.checked?30:0))+' minuten';return;}
    }
""")
# Leave local legacy work intact and offer it from the dashboard.
s=s.replace("<footer class=\"exam-dashboard-help\">", "<footer class=\"exam-dashboard-help\"><p><a href=\"#formules\">Formules met uitleg en interactieve berekeningen</a> · <a href=\"#tentamen/analyse\">Tentamenanalyse</a> · <a href=\"#tentamen/oud\">Eerder opgeslagen uitwerkingen</a></p>")
# A persistent host retains listeners while the application moves between learning and exams.
s=s.replace("window.addEventListener('hashchange',route);",'')
s=s.replace("  if(!location.hash)history.replaceState(null,'','#tentamen');\n  route();setInterval(tick,1000);", "  setInterval(tick,1000);")
s=s.replace("window.CafaExams={catalog:catalog,", "window.SRACirrus={mount:function(){document.body.classList.add('cirrus-mode');document.getElementById('main').replaceChildren(host);route();},leave:function(){dropEditor();selectedAttempt=null;clock.hidden=true;document.body.classList.remove('cirrus-mode','exam-running','exam-dashboard','exam-surface');var d=document.getElementById('exam-info-dialog');if(d)d.close();},catalog:catalog,")
# Outside these routes, a storage event must not paint over a lesson or MC page.
s=s.replace("var isExam=['tentamen','welkom','toets','inzage','mc-inzage'].includes(kind);", "var isExam=host.isConnected&&(['welkom','toets','inzage'].includes(kind)||(kind==='tentamen'&&(!id||id==='voltooid')));")
s=s.replace("else if(location.hash.indexOf('#tentamen')===0)tentamen", "else if(location.hash==='#tentamen'||location.hash==='#tentamen/voltooid')tentamen")
s=s.replace("label:'Antwoord op vraag '+(i+1)", "label:'Antwoord op vraag '+questionNumber(q,i)")
# Preserve original per-section question numbering while progress uses the global index.
s=s.replace('  function rich(', "  function questionNumber(q,index) { return esc(q.displayNumber || String(index+1)); }\n  function rich(")
s=s.replace("el.setAttribute('aria-label','Vraag '+(i+1)", "el.setAttribute('aria-label','Vraag '+questionNumber(q,i)")
s=s.replace("<span class=\"qnum\">'+(i+1)", "<span class=\"qnum\">'+questionNumber(q,i)")
s=s.replace("aria-label=\"Vraag '+(i+1)", "aria-label=\"Vraag '+questionNumber(q,i)")
s=s.replace("<span class=\"compact-overview-number\">'+(i+1)", "<span class=\"compact-overview-number\">'+questionNumber(q,i)")
s=s.replace("'Antwoord controleren · Vraag '+(a.currentIndex+1)", "'Antwoord controleren · Vraag '+questionNumber(q,a.currentIndex)")
s=s.replace("<span>/ Vraag '+(i+1)", "<span>/ Vraag '+questionNumber(q,i)")
s=s.replace("'>Vraag '+(n+1)+'</option>'", "'>Vraag '+questionNumber(a.exam.questions[n],n)+'</option>'")
s=s.replace("<summary>Vraag '+(i+1)", "<summary>Vraag '+questionNumber(q,i)")
s=s.replace("<span class=\"result-number\">'+(i+1)", "<span class=\"result-number\">'+questionNumber(q,i)")

# Keep the case action beside the question number as well as in the footer.
s=s.replace("questionNumber(q,i)+'</span></div><div class=\"exam-position\">", "questionNumber(q,i)+'</span>'+(section?btn('Casus','section',false,'aria-haspopup=\"dialog\"'):'')+'</div><div class=\"exam-position\">")
s=s.replace("btn('Sectie','section')", "btn('Casus','section')").replace('>Sectie</button>', '>Casus</button>').replace('<h2>SECTIE</h2>', '<h2>CASUS</h2>')

from cirrus_results import adapt as adapt_results
s = adapt_results(s)
from cirrus_feedback import adapt as adapt_feedback
s = adapt_feedback(s)
from cirrus_case_panel import adapt as adapt_case_panel
s = adapt_case_panel(s)
s = re.sub(r'(?m)^[ \t]+$', '', s)
(R/'js/cirrus.js').write_text('/* Gemaakt met Codex: SRA-integratie, bediening rechtstreeks uit CAFA2 639f4c2. */\n'+s,encoding='utf8')

# Scope imported CSS to this environment so lesson and MC components retain their own styles.
from cirrus_styles import scope
styles='\n'.join(scope((vendor/('css/'+name+'.css')).read_text(encoding='utf8')) for name in ['app','answer-editor','exams','exam-document','exam-experience','question-overview'])
(R/'css/cirrus.css').write_text('/* Gemaakt met Codex: geïsoleerde CAFA2-stijlen, bron in vendor/cafa2-cirrus. */\n'+styles,encoding='utf8')
