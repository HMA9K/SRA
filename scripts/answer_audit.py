"""Koppel de handmatige inhoudscontrole aan oorspronkelijke vragen en bronnen."""
from pathlib import Path
from collections import Counter
import hashlib, json, re
from answer_audit_records import REVIEW

ROOT = Path(__file__).resolve().parents[1]
DATE = '2026-09-20'
LABELS = {'G':'Gecontroleerd', 'N':'Nuance bij het antwoord',
          'C':'Correctie bij het antwoord', 'B':'Onjuistheid of tegenstrijdigheid in de bron'}

def readable(note):
    note=note.replace('H0','H₀').replace('H1','H₁').replace('b1','b₁')
    note=re.sub(r'([A-Za-zÀ-ÿ²])(?=\d|√|\[)',r'\1 ',note)
    note=re.sub(r'(?<=\d)(?=[A-Za-zÀ-ÿ])',' ',note)
    note=re.sub(r'\s*([=+×<>≤≥±])\s*',r' \1 ',note)
    return re.sub(r' {2,}',' ',note).strip()

def attach(exams):
    assert set(REVIEW) == {e['id'] for e in exams}, 'Niet alle tentamens beoordeeld'
    for exam in exams:
        reviews=REVIEW[exam['id']]
        assert len(reviews)==len(exam['questions']), (exam['id'],'ontbrekende beoordeling')
        for q,(status,note) in zip(exam['questions'],reviews):
            assert status in LABELS and len(note)>30
            q['answerAudit']=dict(status=status,label=LABELS[status],note=readable(note),reviewed=DATE,
                sourcePage=q['page'],answerPage=q['solutionPage'])
    write_report(exams)

def write_report(exams):
    counts=Counter(q['answerAudit']['status'] for e in exams for q in e['questions'])
    unique=[e for e in exams if not e.get('duplicateOf')]
    unique_counts=Counter(q['answerAudit']['status'] for e in unique for q in e['questions'])
    payload=dict(reviewed=DATE,totalQuestions=sum(counts.values()),uniqueQuestions=sum(unique_counts.values()),
                 counts=dict(counts),uniqueCounts=dict(unique_counts),exams=[])
    lines=['# Controle oorspronkelijke SRA-antwoordmodellen', '',
      'Alle 224 vraagnummers in tien versies zijn handmatig langs de opgave, het antwoordmodel en de gegeven tabellen gelegd. Maart en juni 2020 bevatten dezelfde 28 vragen: 196 inhoudelijk verschillende vragen. Deelvragen vallen onder hun oorspronkelijke vraagnummer.', '',
      'G betekent in overeenstemming met de gegeven bron en cursusconventies. N betekent een noodzakelijke nuance of voorwaarde. C betekent een inhoudelijke correctie. B betekent een verkeerde verwijzing, drukfout of interne tegenstrijdigheid. Een nuance is geen getelde rekenfout.', '',
      'De controle is gebaseerd op de aangeleverde opgaven, uitwerkingen, het [formuleblad](../bronnen/formuleblad.pdf), [attentiepunten](../bronnen/attentiepunten.pdf) en het boekmateriaal van de lessen. De bron-PDF’s zijn ongewijzigd. De toelichtingen zijn afzonderlijk herkenbaar bij het nakijken, ook bij eerder opgeslagen pogingen.', '',
      'De numerieke hoofdresultaten zijn onafhankelijk herberekend in [de rekencontrole](../tests/exam-answer-calculations.py); de uitkomsten staan in [het rekenlog](antwoordmodel-rekencontrole.json). Ruwe SPSS-datasets zijn niet meegeleverd. Intern tegenstrijdige uitvoertabellen worden daarom uitdrukkelijk als zodanig gemarkeerd; er is geen unieke vervangende dataset of gecorrigeerde tabel verzonnen.', '',
      '| Uitkomst | Alle versies | Inhoudelijk verschillend |','|---|---:|---:|']
    for status,label in LABELS.items(): lines.append(f'| {status}: {label} | {counts[status]} | {unique_counts[status]} |')
    for e in exams:
        sources={}
        for kind,key in [('opgaven','source'),('uitwerking','answerSource')]:
            copy=ROOT/'bronnen/tentamens'/e['id']/(kind+'.pdf')
            original=ROOT.parent/'Tentamenopgaven & Uitwerkingen'/e[key]
            digest=hashlib.sha256(copy.read_bytes()).hexdigest()
            assert digest==hashlib.sha256(original.read_bytes()).hexdigest(), (e['id'],kind,'bron veranderd')
            sources[kind]=dict(file=copy.relative_to(ROOT).as_posix(),original=e[key],sha256=digest)
        payload['exams'].append(dict(id=e['id'],duplicateOf=e.get('duplicateOf'),sources=sources,
             questions=[dict(number=q['number'],displayNumber=q['displayNumber'],**q['answerAudit']) for q in e['questions']]))
        lines.extend(['',f'## {e["date"]}', '',f'[Opgaven](../{sources["opgaven"]["file"]}) · [Oorspronkelijk antwoordmodel](../{sources["uitwerking"]["file"]})', '',
                      '| Vraag | Uitkomst | Beoordeling en bronpagina |','|---|---|---|'])
        for q in e['questions']:
            a=q['answerAudit']; note=a['note'].replace('|','\\|')
            links=f'[Opgave p. {q["page"]}](../{sources["opgaven"]["file"]}#page={q["page"]}); [antwoord p. {q["solutionPage"]}](../{sources["uitwerking"]["file"]}#page={q["solutionPage"]})'
            lines.append(f'| {q["displayNumber"]} | {a["status"]} | {note} {links} |')
    (ROOT/'data/answer-audit.json').write_text(json.dumps(payload,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
    (ROOT/'docs/antwoordmodelcontrole-sra-2026-09-20.md').write_text('\n'.join(lines)+'\n',encoding='utf8')
