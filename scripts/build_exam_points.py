"""Reproduceer de puntenanalyse zonder punten uit frequenties of MC's af te leiden."""
from pathlib import Path
import argparse
import hashlib
import json
import re
import statistics
from decimal import Decimal, ROUND_HALF_UP

from exam_point_rules import BASE, SPLITS, TOPICS, JOINT_TOPICS, TOPIC_GROUPS, TOPIC_LESSONS, TOPIC_SHORT, SKILLS, NOT_ASKED, PRIORITY_LEVELS, PRIORITY_PACKAGES

ROOT = Path(__file__).resolve().parents[1]
WORDS = {9:'Negen',10:'Tien',11:'Elf',12:'Twaalf'}
RECENT = '20250317'  # de drie recentste unieke tentamens, vooraf afgebakend


def load_exams():
    text = (ROOT / 'data/exams.js').read_text(encoding='utf8')
    return json.loads(text.split('window.SRAExamData = ', 1)[1].rstrip(';\n'))['exams']


def analyze():
    all_exams = load_exams()
    exams = [e for e in all_exams if not e['duplicateOf']]
    assert {e['id'] for e in exams} == set(BASE)
    total_points = 100 * len(exams)
    rows = []
    for e in exams:
        topics = BASE[e['id']].split()
        assert len(topics) == len(e['questions']), e['id']
        for q, topic in zip(e['questions'], topics):
            key = (e['id'], q['number'])
            allocations = SPLITS.get(key, [('-', topic, q['points'], 'Volledige bronvraag binnen dit onderwerp; geen punten bij ondersteunende onderwerpen opnieuw geteld.')])
            assert sum(a[2] for a in allocations) == q['points'], key
            for part, topic, points, reason in allocations:
                assert topic in TOPICS and points > 0, key
                rows.append(dict(exam=e['id'], question=q['number'], displayQuestion=q['displayNumber'],
                                 part=part, topic=topic, points=points, reason=reason,
                                 sharedWith=JOINT_TOPICS.get(key, []) if topic == 'gezamenlijk' else [],
                                 questionPage=q['page'], answerPage=q['solutionPage']))
    result = dict(method='Bronvragen en officiële normering. Iedere punt eenmaal. Rubricregels zijn geen extra oorspronkelijke deelvragen.',
                  recentFrom=RECENT, excluded=[dict(exam=e['id'], duplicateOf=e['duplicateOf']) for e in all_exams if e['duplicateOf']],
                  exams=[dict(id=e['id'], date=e['date'], questions=len(e['questions']), points=sum(q['points'] for q in e['questions']),
                              source=e['source'], answerSource=e['answerSource']) for e in exams], rows=rows, topics=[])
    for topic, label in TOPICS.items():
        own = [r for r in rows if r['topic'] == topic]
        scores = {e['id']: sum(r['points'] for r in own if r['exam'] == e['id']) for e in exams}
        values = list(scores.values())
        present = [v for v in values if v > 0]
        recent = [v for k, v in scores.items() if k >= RECENT]
        recent_rows = [r for r in own if r['exam'] >= RECENT]
        result['topics'].append(dict(id=topic, label=label, byExam=scores,
            exams=sum(v > 0 for v in values), questions=len({(r['exam'], r['question']) for r in own}),
            subquestions=len({(r['exam'],r['question'],r['part']) for r in own}),
            points=sum(values), mean=statistics.mean(values), share=100*sum(values)/total_points,
            meanWhenPresent=statistics.mean(present) if present else None,
            minimum=min(values), maximum=max(values), sd=statistics.pstdev(values),
            recentPoints=sum(recent), recentMean=statistics.mean(recent), recentShare=100*sum(recent)/300,
            recentMinimum=min(recent), recentMaximum=max(recent), recentSd=statistics.pstdev(recent),
            recentExams=sum(v > 0 for v in recent),
            recentQuestions=len({(r['exam'],r['question']) for r in recent_rows}),
            recentSubquestions=len({(r['exam'],r['question'],r['part']) for r in recent_rows})))
    assert sum(r['points'] for r in rows) == total_points
    for e in exams:
        assert sum(r['points'] for r in rows if r['exam'] == e['id']) == 100
    return result


def priority_level(seen, count, weight):
    share = seen / count
    if share < 1 / 3:
        return 4
    if share > 2 / 3 and weight >= 5.5:
        return 1
    if share > 2 / 3 and weight >= 2.5:
        return 2
    return 3


def package_scores(package, by_exam, exams):
    """Punten per tentamen van een pakket; by_exam is {onderwerp: {tentamen: punten}}."""
    return [sum(by_exam[t][e] for t in package['topics']) for e in exams]


def package_level(package, by_exam, exams):
    scores = package_scores(package, by_exam, exams)
    return priority_level(sum(v > 0 for v in scores), len(scores), sum(scores) / len(scores))


def priority_packages(data):
    exams = [e['id'] for e in data['exams']]
    recent = [e for e in exams if e >= RECENT]
    by_exam = {t['id']: t['byExam'] for t in data['topics']}
    result = []
    for package in PRIORITY_PACKAGES:
        scores = package_scores(package, by_exam, exams)
        level = package_level(package, by_exam, exams)
        stable = all(package_level(package, by_exam, [e for e in exams if e != left]) == level for left in exams)
        recent_scores = package_scores(package, by_exam, recent)
        result.append(dict(package, level=level, stable=stable, exams=sum(v > 0 for v in scores),
                           recentExams=sum(v > 0 for v in recent_scores), weight=sum(scores) / len(scores),
                           recentWeight=sum(recent_scores) / len(recent_scores), byExam=scores))
    return result


def browser_data(data):
    """Gegevens voor de tentamenanalyse op de site; geen nieuwe telling, alleen een selectie."""
    count = len(data['exams'])
    topics = {t['id']: t for t in data['topics']}
    grouped = [topic for _, blocks in TOPIC_GROUPS for _, ids in blocks for topic in ids]
    assert sorted(grouped) == sorted(TOPICS) == sorted(TOPIC_LESSONS)
    questions = {(r['exam'], r['question']) for r in data['rows']}
    for skill in SKILLS:
        assert all((exam, n) in questions for exam, numbers in skill['questions'].items() for n in numbers), skill['label']
    def total(ids):
        return sum(topics[t]['points'] for t in ids)
    groups = [dict(title=title, points=round(sum(total(ids) for _, ids in blocks) / count),
                   blocks=[dict(title=name, mean=total(ids) / count, topics=ids) for name, ids in blocks])
              for title, blocks in TOPIC_GROUPS]
    shown = {}
    for key, t in topics.items():
        present = [v for v in t['byExam'].values() if v]
        shown[key] = dict(label=t['label'], short=TOPIC_SHORT[key], lesson=TOPIC_LESSONS[key], exams=t['exams'], recentExams=t['recentExams'],
                          points=t['points'], mean=t['meanWhenPresent'],
                          low=min(present, default=0), high=max(present, default=0))
    packages = priority_packages(data)
    assert sorted(t for p in packages for t in p['topics']) == sorted(set(TOPICS) - {'gezamenlijk'})
    for package in packages:
        for topic in package['topics']:
            shown[topic].update(level=package['level'], package=package['id'])
    rows = [dict(exam=r['exam'], question=r['question'], part=r['part'], topic=r['topic'],
                 points=r['points'], sharedWith=r['sharedWith']) for r in data['rows']]
    return dict(recentCount=sum(e['id'] >= RECENT for e in data['exams']), groups=groups, topics=shown,
                rows=rows, skills=SKILLS, notAsked=NOT_ASKED, levels=PRIORITY_LEVELS, packages=packages,
                exams=[dict(id=e['id'], date=e['date']) for e in data['exams']], byExam={t['id']: list(t['byExam'].values()) for t in data['topics']})


def browser_script(data):
    return ('/* Gegenereerd met scripts/build_exam_points.py uit scripts/exam_point_rules.py. */\n'
            'window.SRAExamTopics = ' + json.dumps(browser_data(data), ensure_ascii=False) + ';\n')


def verify_sources():
    from pypdf import PdfReader
    from build_exams import pdf_pages, QUESTION
    evidence = []
    for e in load_exams():
        folder = ROOT / 'bronnen/tentamens' / e['id']
        pages = pdf_pages(folder / 'opgaven.pdf')
        markers = [(int(m[1]), int(m[2])) for p in pages[:e['questionPages']] for m in QUESTION.finditer(p)]
        assert markers == [(q['originalNumber'],q['points']) for q in e['questions']], e['id']
        evidence.append(dict(exam=e['id'], questions=len(markers), points=sum(p for _,p in markers),
                             questionSha256=hashlib.sha256((folder/'opgaven.pdf').read_bytes()).hexdigest(),
                             answerSha256=hashlib.sha256((folder/'uitwerking.pdf').read_bytes()).hexdigest()))
    # De dubbele 2020-set heeft dezelfde genummerde vragen, punten en inhoud.
    a, b = load_exams()[:2]
    assert b['duplicateOf'] == a['id'] == '20200323'
    assert [(q['originalNumber'],q['points']) for q in a['questions']] == [(q['originalNumber'],q['points']) for q in b['questions']]
    normalized=[]
    for exam in (a,b):
        text='\n'.join(p.extract_text() for p in PdfReader(ROOT/'bronnen/tentamens'/exam['id']/'opgaven.pdf').pages)
        text=re.sub(r'Sampling & Regression Analysis [0-9-]+\s+[0-9]+/16','',text)
        text=re.sub(r'23 maart 2020|26 juni 2020|23-03-2020|26-06-2020','DATUM',text)
        normalized.append(re.sub(r'\s+','',text))
    assert normalized[0] == normalized[1], 'Dubbele set heeft gewijzigde opgavetekst'
    return evidence


def markdown(data):
    def f(v): return f'{v:.2f}'.replace('.', ',')
    count = exam_count = len(data['exams'])
    questions = sum(e['questions'] for e in data['exams'])
    lines = ['# SRA: puntengewicht uit oorspronkelijke tentamens', '',
        f'Gecontroleerd op 4 november 2026. {WORDS[count]} unieke tentamens, {questions} vraagnummers en {100*count} punten. '
        'Juni 2020 is dezelfde vraagverzameling als maart 2020 en telt niet opnieuw mee.', '',
        '## Leeswijze', '',
        '- Punten komen uit oorspronkelijke opgaven en officiële normering, niet uit MC-aantallen of themafrequenties.',
        '- Een genummerde vraag zonder letteronderdelen telt als één deelvraag. Bij expliciete a/b/c-onderdelen tellen die afzonderlijk. Rubricregels binnen een deelvraag leveren geen extra deelvragen op. Een deelvraag met meerdere onderwerpen kan in meerdere tellingen voorkomen; de punten nooit.',
        '- Een geïntegreerde stratificatieberekening telt onder stratificatie: totaalschatting en interval. MPU, verschil, t-tabellen en spreiding zijn daarbij noodzakelijke voorkennis, zonder dezelfde punten opnieuw te boeken.',
        '- Een onderwerp met nul afzonderlijke punten kan noodzakelijke voorkennis of een actueel leerdoel zijn. Nul betekent niet dat het onderwerp mag verdwijnen.',
        '- Het gemiddelde puntengewicht in de lessen telt alleen tentamens mee waarin het onderwerp voorkomt: totaalpunten gedeeld door het aantal van die tentamens. Elk tentamen heeft 100 punten, dus het aantal punten is ook het percentage. Bij geen voorkomen is er geen gemiddelde.',
        '- De kolom Gem./100 en de standaarddeviatie in dit rapport gebruiken alle tentamens, inclusief nullen. De kolom Gem. bij voorkomen (%) sluit aan op de lessen. Spreiding is minimum, maximum en populatiestandaarddeviatie van de historische scores.',
        '- Recent = de drie recentste unieke tentamens: maart 2025, oktober 2025 en maart 2026. Ook het recente gemiddelde bevat nullen. Dit is een beschrijving, geen voorspelling.',
        '- Gezamenlijke punten blijven in een afzonderlijke rij en staan met betrokken onderwerpen in het detailregister. Bronfouten in de bestaande antwoordcontrole veranderen de historische puntentoekenning niet.', '',
        '## Aansluiting per tentamen', '', '| Tentamen | Vraagnummers | Deelvragen | Punten |', '|---|---:|---:|---:|']
    for e in data['exams']:
        count=len({(r['question'],r['part']) for r in data['rows'] if r['exam']==e['id']})
        lines.append(f"| {e['date']} | {e['questions']} | {count} | {e['points']} |")
    parts=len({(r['exam'],r['question'],r['part']) for r in data['rows']})
    lines += [f'| Totaal | {questions} | {parts} | {100*exam_count} |', '', '## Punten per onderwerp', '',
        '| Onderwerp | Tentamens | Vragen | Deelvragen | Totaal | Gem./100 | Aandeel | Gem. bij voorkomen (%) | Min–max | SD |',
        '|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|']
    for t in sorted(data['topics'],key=lambda t:-t['points']):
        conditional = f(Decimal(str(t['meanWhenPresent'])).quantize(Decimal('.01'), rounding=ROUND_HALF_UP))+'%' if t['meanWhenPresent'] is not None else 'n.v.t.'
        lines.append(f"| {t['label']} | {t['exams']}/{exam_count} | {t['questions']} | {t['subquestions']} | {t['points']} | {f(t['mean'])} | {f(t['share'])}% | {conditional} | {t['minimum']}–{t['maximum']} | {f(t['sd'])} |")
    lines += ['', '## Punten per tentamen en recente periode', '',
        '| Onderwerp | '+' | '.join(e['id'] for e in data['exams'])+' | Recent totaal | Recent gem./100 | Recent aandeel | Recent min–max |',
        '|---|'+ '---:|'*(len(data['exams'])+4)]
    for t in data['topics']:
        lines.append('| '+t['label']+' | '+' | '.join(str(v) for v in t['byExam'].values())+f" | {t['recentPoints']} | {f(t['recentMean'])} | {f(t['recentShare'])}% | {t['recentMinimum']}–{t['recentMaximum']} |")
    lines += ['| Totaal | '+' | '.join('100' for e in data['exams'])+' | 300 | 100 | 100% | 100–100 |', '',
        '### Aantallen en spreiding recente periode', '',
        '| Onderwerp | Tentamens | Vragen | Deelvragen | SD punten |',
        '|---|---:|---:|---:|---:|']
    for t in data['topics']:
        lines.append(f"| {t['label']} | {t['recentExams']}/3 | {t['recentQuestions']} | {t['recentSubquestions']} | {f(t['recentSd'])} |")
    lines += ['',
        '## Controleerbaar detailregister', '',
        'Q is het doorgaande vraagnummer. Bij maart 2020 staat daarnaast het oorspronkelijke opgave.vraagnummer. '
        'Paginanummers hieronder zijn PDF-pagina’s, inclusief voorbladen. Bij een antwoord dat doorloopt: lees ook de volgende pagina. '
        'Alle oorspronkelijke PDF’s blijven ongewijzigd lokaal beschikbaar; de website heeft gecontroleerde readerkopieën.', '',
        '| Tentamen | Q (bron) | Deel | Onderwerp | Punten | Opgave PDF | Model PDF | Onderbouwing |',
        '|---|---|---|---|---:|---:|---:|---|']
    for r in data['rows']:
        shared=' Betrokken: '+', '.join(TOPICS[t] for t in r['sharedWith'])+'.' if r['sharedWith'] else ''
        base=f"https://sra-2xt.pages.dev/bronnen/tentamens/{r['exam']}/"
        lines.append(f"| {r['exam']} | {r['question']} ({r['displayQuestion']}) | {r['part']} | {TOPICS[r['topic']]} | {r['points']} | [p. {r['questionPage']}]({base}opgaven.pdf#page={r['questionPage']}) | [p. {r['answerPage']}]({base}uitwerking.pdf#page={r['answerPage']}) | {r['reason']}{shared} |")
    lines += ['', '## Reproductie', '',
        '`python scripts/build_exam_points.py --check --sources` controleert de bestanden en oorspronkelijke puntmarkeringen. '
        '`scripts/exam_point_rules.py` bevat de beoordeelde toerekeningen; `data/exam-point-analysis.json` bevat alle uitkomsten. '
        'De broncontrole controleert cijfers automatisch; de inhoudelijke rubricering is handmatig beoordeeld.', '',
        'Bronnen: oorspronkelijke SRA-tentamens en officiële uitwerkingen 2020–2026, per regel gekoppeld. '
        '[Bronnenoverzicht](https://sra-2xt.pages.dev/#bronnen).']
    return '\n'.join(lines)+'\n'


if __name__ == '__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check',action='store_true')
    parser.add_argument('--sources',action='store_true')
    args=parser.parse_args()
    data=analyze()
    outputs={'data/exam-point-analysis.json':json.dumps(data,ensure_ascii=False,indent=2)+'\n',
             'data/exam-topics.js':browser_script(data),
             'docs/tentamen-puntenanalyse-2026-10-25.md':markdown(data)}
    for relative, content in outputs.items():
        target=ROOT/relative
        if args.check:
            assert target.read_text(encoding='utf8')==content, relative+' is niet actueel'
        else:
            target.write_text(content,encoding='utf8')
    if args.sources:
        evidence=verify_sources()
        dest=ROOT/'tmp/puntenanalyse/source-verification.json'
        dest.parent.mkdir(parents=True,exist_ok=True)
        dest.write_text(json.dumps(evidence,indent=2)+'\n',encoding='utf8')
    print(f"OK: {len(data['exams'])} unieke tentamens, {sum(e['questions'] for e in data['exams'])} vraagnummers, {100*len(data['exams'])} punten; elke vraag sluit aan; gezamenlijke punten eenmaal.")
