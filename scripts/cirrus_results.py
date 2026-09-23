"""Gemaakt met Codex: compacte Cirrus-inzage voor de SRA-integratie."""

def adapt(source):
    old = '''<div class="result-expanded">'+btn('Vraag bekijken','review-question',true,'data-attempt="'+esc(a.id)+'" data-index="'+i+'"')+documentHtml(a.exam,'question',q.promptHtml,q.prompt)+comparison(a,q)+'</div>'''
    new = '''<div class="result-expanded"><h4>Antwoord</h4><div class="result-inline-answer">'+documentHtml(a.exam,'solution',q.solutionHtml,q.solution||'Er is nog geen antwoordmodel toegevoegd.')+'</div><div class="result-inline-actions">'+btn('Vraag bekijken en beoordelen','review-question',false,'data-attempt="'+esc(a.id)+'" data-index="'+i+'"')+'</div></div>'''
    if old not in source:
        raise ValueError('Cirrus resultaten: het verwachte antwoordblok ontbreekt.')
    source = source.replace(old, new)
    old_print = "btn('Scorerapport afdrukken','print-report')"
    new_print = """'<button type="button" class="btn result-print" data-action="print-report" aria-label="Scorerapport afdrukken" title="Scorerapport afdrukken"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8V3h10v5M7 17H4V8h16v9h-3M7 14h10v7H7zM17 11h1" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>'"""
    if old_print not in source:
        raise ValueError('Cirrus resultaten: de afdrukknop ontbreekt.')
    source = source.replace(old_print, new_print)
    return source
