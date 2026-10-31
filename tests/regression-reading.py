"""Controleer de leesroute en bronannotaties van lessen 10 tot en met 19."""
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
from build_content import lessons, summaries

IDS = {
    'regressielijn', 'anova', 'toetsen', 'diagnostiek', 'voorspellen',
    'meervoudig', 'transformaties', 'modelbouw', 'validatie', 'tentamen',
}
EXCEPTIONS = {'Zelf oefenen met deze aanvulling', 'Studieroute en puntengewicht'}
selected = {lesson['id']: lesson for lesson in lessons if lesson['id'] in IDS}
assert set(selected) == IDS
blocks = 0
for lesson_id, lesson in selected.items():
    for field, minimum_length, minimum_sentences in [('kern', 300, 4), ('vervolg', 150, 2)]:
        text = lesson['reading'][field]
        sentences = re.split(r'(?<=[.!?])\s+(?=[A-ZÀ-Ý])', text.strip())
        assert len(text) >= minimum_length, (lesson_id, field, len(text))
        assert len(sentences) >= minimum_sentences, (lesson_id, field, sentences)
    for section in lesson['sections']:
        if section['title'] in EXCEPTIONS:
            continue
        notes = [int(n) for n in re.findall(r'data-source-note="(\d+)"', section['html'])]
        assert section.get('refs'), (lesson_id, section['title'], 'gestructureerde bron ontbreekt')
        assert notes and notes == section['sourceNotes'], (lesson_id, section['title'], 'bronnummer ontbreekt')
        assert all(1 <= n <= len(lesson['sourceList']) for n in notes)
        text = re.sub(r'<[^>]+>', ' ', section['html'])
        assert not re.search(r'(?i)\b(?:PDF(?:-pagina)?|slides?|bronpagina|boek p\.)\s*\d+', text), (lesson_id, section['title'], 'bronlocatie in uitleg')
        blocks += 1
opening = selected['validatie']['reading']['opening'].lower()
assert 'niet getentamineerd' in opening and '0/900' in opening
for topic in ['Regressie', 'Meervoudige regressie en modelcontrole']:
    assert summaries[topic].strip()
    assert 'data-source-note' not in summaries[topic]
assert 'niet getentamineerd' in summaries['Meervoudige regressie en modelcontrole']
print(f'OK: 10 lessen met volledige Kern/Vervolg; {blocks} uitlegblokken met gestructureerde, genummerde bronnen.')
