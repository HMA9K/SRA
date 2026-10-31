"""Bronnen per les: genummerd onderaan de pagina, met een verwijzing per blok.

Laatste bouwstap. Blokken bevatten zelf geen bronlinks meer; ieder blok noemt
zijn bronnen in `refs`. Bronfiguren linken naar hun PDF-pagina en tellen ook
als bron van het blok. Daarna volgen de algemene lesbronnen, de bronnen van de
begripchecks en de bronnen van het onderwijsprogramma.
"""
import re

FIGURE = re.compile(r'<figure class="learning-figure"><a href="bronnen/([^"#]+)#page=(\d+)"')


def note_html(lesson_id, numbers):
    links = ' '.join(f'<a class="source-note" href="#bron-{lesson_id}-{n}" data-source-note="{n}" '
                     f'aria-label="Bron {n}">[{n}]</a>' for n in numbers)
    return f'<p class="source-notes" data-no-terms>Bronnen: {links}</p>'


def enhance(lessons, sources):
    by_file = {source['file']: key for key, source in sources.items()}
    for lesson in lessons:
        listed = []

        def number(ref):
            key = (ref['source'], ref['page'], ref['locator'])
            if key not in listed:
                listed.append(key)
            return listed.index(key) + 1

        for section in lesson['sections']:
            refs = list(section.get('refs', []))
            for file, page in FIGURE.findall(section['html']):
                refs.append(dict(source=by_file[file], page=int(page), locator=f'Figuur, PDF-pagina {page}'))
            numbers = list(dict.fromkeys(number(r) for r in refs))
            section['sourceNotes'] = numbers
            if numbers:
                section['html'] += note_html(lesson['id'], numbers)
        example = lesson['example']
        example['sourceNotes'] = list(dict.fromkeys(number(r) for r in example.get('refs', [])))
        example['notesHtml'] = note_html(lesson['id'], example['sourceNotes']) if example['sourceNotes'] else ''
        for ref in lesson['refs'] + lesson['curriculum']['refs']:
            number(ref)
        for question in lesson['questions']:
            for ref in question.get('refs', []):
                number(ref)
        lesson['sourceList'] = [dict(source=s, page=p, locator=l) for s, p, l in listed]
    return lessons
