"""Gemaakt met Codex. Originele SRA-opgaven en antwoorden, per bronsectie."""
from pathlib import Path
import json, re, subprocess, shutil
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
QUESTION = re.compile(r'(?im)^\s*Vraag\s+(\d+)\s*[\.:]?\s*\((\d+)\s*punt(?:en)?[^)]*\)')
ANSWER = re.compile(r'(?im)^\s*Vraag\s+(\d+)\s*[.:(]')

def page_text(page):
    # Some 2020 PDFs store the first capital of a heading as a separate text run.
    return re.sub(r'\bV\s*\n\s*raag\b', 'Vraag', page.extract_text() or '')


def build():
    analysis = json.loads((ROOT / 'data/exam-analysis.json').read_text(encoding='utf8'))
    exams = []
    for record in analysis['tentamens']:
        d, m, y = record['datum'].split('-')
        code = y + m + d
        dest = ROOT / 'bronnen/tentamens' / code
        src = ROOT.parent / 'Tentamenopgaven & Uitwerkingen' / record['bron']
        answer = ROOT.parent / 'Tentamenopgaven & Uitwerkingen' / (record['uitwerking'] or record['bron'])
        pages = [page_text(p) for p in PdfReader(src).pages]
        apages = [page_text(p) for p in PdfReader(answer).pages]
        last = record.get('vraag_paginas', len(pages))
        answer_start = record.get('antwoord_vanaf_pagina', 1)
        sections = record['secties']
        markers = [(int(m[1]), int(m[2]), pi) for pi, text in enumerate(pages[:last], 1) for m in QUESTION.finditer(text)]
        amarkers = [(int(m[1]), pi) for pi, text in enumerate(apages, 1) if pi >= answer_start for m in ANSWER.finditer(text)]
        assert len(markers) == len(amarkers) == record['aantal_vragen'], (code, 'vraag- of antwoordmarkeringen', markers, amarkers)
        questions = []
        for index, (original, points, page) in enumerate(markers, 1):
            section = next(s for s in sections if s['firstQuestion'] <= index <= s['lastQuestion'])
            aoriginal, apage = amarkers[index - 1]
            assert original == aoriginal, (code, index, 'antwoord sluit niet aan')
            assert points == record['punten'][str(index)], (code, index, 'puntental')
            questions.append(dict(number=index, originalNumber=original, sectionId=section['id'], sectionNumber=section['number'],
                                  displayNumber=f'{section["number"]}.{original}' if record.get('herstart_nummering') else str(original),
                                  points=points, page=page, solutionPage=apage))
        assert sum(q['points'] for q in questions) == 100, code
        for section in sections:
            assert sum(q['points'] for q in questions if q['sectionId'] == section['id']) == section['points'], (code, section['id'])
        dest.mkdir(parents=True, exist_ok=True)
        docs = {}
        for kind, file in [('opgaven', src), ('uitwerking', answer)]:
            target = dest / (kind + '.pdf')
            changed = not target.exists() or target.stat().st_size != file.stat().st_size or target.stat().st_mtime < file.stat().st_mtime
            if changed:
                shutil.copy2(file, target)
            if changed or not list(dest.glob(kind + '-*.jpg')):
                subprocess.run(['pdftoppm', '-jpeg', '-jpegopt', 'quality=88', '-scale-to', '1800', str(target), str(dest / kind)],
                               check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
            count = len(pages) if kind == 'opgaven' else len(apages)
            images = sorted(dest.glob(kind + '-*.jpg'), key=lambda p: int(p.stem.rsplit('-', 1)[1]))
            images = [p for p in images if int(p.stem.rsplit('-', 1)[1]) <= count]
            assert len(images) == count, (code, kind, 'ontbrekende bronpagina')
            docs[kind] = [p.relative_to(ROOT).as_posix() for p in images]
        cut = sections[0]['lastQuestion']
        exams.append(dict(id=code, date=record['datum'], title=f'SRA {d}-{m}-{y}', onlyAnswers=False,
                          duration=record.get('duur_minuten'), questions=questions, cut=cut, sections=sections,
                          descriptions=[s['description'] for s in sections], documents=docs, questionPages=last,
                          answerStartPage=answer_start, pageText=pages[:last], answerText=apages, source=record['bron'],
                          answerSource=record['uitwerking'] or record['bron'], evidence=record['themas'],
                          duplicateOf=record.get('duplicateOf'), sourceNotes=record.get('bronopmerkingen', []),
                          answerBoundaries=record.get('antwoord_grenzen', {})))
    unique = [e for e in exams if not e['duplicateOf']]
    frequencies = {topic: sum(bool(e['evidence'].get(topic)) for e in unique) for topic in analysis['frequenties']}
    assert frequencies == analysis['frequenties'], 'Actualiseer frequenties op basis van inhoudelijk verschillende tentamens.'
    from answer_audit import attach
    attach(exams)
    payload = dict(exams=exams, frequencies=frequencies)
    (ROOT / 'data/exams.js').write_text('/* Gemaakt met Codex. Gegenereerd uit de originele SRA-bestanden. */\nwindow.SRAExamData = ' + json.dumps(payload, ensure_ascii=False) + ';\n', encoding='utf8')
    print(f'{len(exams)} tentamens, {sum(len(e["questions"]) for e in exams)} vraagnummers; originele bronpagina’s en antwoordmodellen gereed.')


if __name__ == '__main__':
    build()
