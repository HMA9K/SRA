"""Regressiecontrole voor formuleopmaak zonder inhoud of HTML te beschadigen."""
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
from presentation import inline_formulas
from build_content import lessons, sources, summaries
import re

source = '<p data-example="s/√n">Standaardfout s/√n; s_w/s_b en R²_adj.</p>'
formatted = inline_formulas(source)
tree = ET.fromstring(formatted)
ns = {'m': 'http://www.w3.org/1998/Math/MathML'}
assert tree.attrib['data-example'] == 's/√n', 'Attributen blijven intact'
assert len(tree.findall('.//m:mfrac', ns)) == 2
assert len(tree.findall('.//m:msqrt', ns)) == 1
total_error = ET.fromstring(inline_formulas('<p>N × s_w/√n, met eindigheidscorrectie</p>'))
assert len(total_error.findall('.//m:math', ns)) == 1
assert len(total_error.findall('.//m:mfrac', ns)) == 1
assert len(total_error.findall('.//m:msub', ns)) == 1
assert ''.join(total_error.itertext()) == 'N×swn, met eindigheidscorrectie'
assert inline_formulas(formatted) == formatted, 'Bestaande MathML niet opnieuw omzetten'
protected = '<svg><text>s/√n</text></svg><!-- s/√n --><p>&amp; &#8594;</p>'
assert inline_formulas(protected) == protected
assert inline_formulas('<a href="s_w.pdf">bron</a>') == '<a href="s_w.pdf">bron</a>'
assert inline_formulas('bestands_naam en een gewoon woord') == 'bestands_naam en een gewoon woord'
assert inline_formulas('ns/√n en s/√naam') == 'ns/√n en s/√naam'
for expression in ('n/N &lt; 0,10', 'df &gt; 200', 'α = 0,05', 'n − k − 1', '80 + 1,711 × 2 = 83,422'):
    shown = inline_formulas('<p>' + expression + '</p>')
    assert 'class="inline-expression"' in shown, expression
    assert inline_formulas(shown) == shown, expression
    ET.fromstring(shown)
for plain in ('2024/2025', '2026-11-01', 'https://example.com/n/N', '<code>n/N &lt; 0,10</code>', '<a href="n/N">n/N</a>'):
    assert inline_formulas(plain) == plain, plain
for value in ('95%', '€ 100.000', '0,025', '123.456,789'):
    shown = inline_formulas('<p>' + value + '</p>')
    assert '<span class="inline-value">' + value + '</span>' in shown
    assert ''.join(ET.fromstring(shown).itertext()) == value
    assert inline_formulas(shown) == shown
    assert '<span class="inline-value">' + value + '</span>.' in inline_formulas('<p>' + value + '.</p>')
assert inline_formulas('PDF 13, rij 160, 3 lessen') == 'PDF 13, rij 160, 3 lessen'
assert len(lessons) == 19
uncertainty = next(lesson for lesson in lessons if lesson['id'] == 'onzekerheid')
titles = [title for section in uncertainty['sections'] for title in section.get('sourceTitles', [section['title']])]
assert titles.index('Van kans naar interval') < titles.index('Waar komt de t-waarde vandaan?') < titles.index('Eén of twee grenzen: uitgewerkt voorbeeld') < titles.index('De tabellenbundel gebruiken: pagina, rij, kolom en conclusie')
assert any('data-mini-table="t-waarde"' in section['html'] and '1,711' in section['html'] and '2,064' in section['html'] for section in uncertainty['sections'])
for lesson in lessons:
    assert len(lesson['reading']['opening']) > 150
    assert lesson['reading']['kern'] and lesson['reading']['vervolg']
    assert '?' in lesson['example']['context']
    assert len(lesson['example']['stepsHtml']) == len(lesson['example']['steps'])
    for step in lesson['example']['stepsHtml']:
        ET.fromstring('<div>' + step + '</div>')
    # Bronnen staan alleen onderaan; blokken verwijzen er met geldige nummers naar.
    listed = lesson['sourceList']
    assert len(listed) == len({(r.get('source'), r.get('page', r.get('href')), r['locator']) for r in listed})
    assert all(sources[r['source']] and r['page'] >= 1 if 'source' in r else r['href'].startswith('docs/') for r in listed)
    for section in lesson['sections']:
        assert not re.search(r'learning-source|Bronnen bij dit onderdeel|Zie boek p\.|Bron: (slides|opgavenbundel)', section['html']), (lesson['id'], section['title'])
        assert "</caption><caption>" not in section["html"], (lesson["id"], section["title"])
        notes = [int(n) for n in re.findall(r'data-source-note="(\d+)"', section['html'])]
        assert notes == section['sourceNotes'] and all(1 <= n <= len(listed) for n in notes), (lesson['id'], section['title'])
assert set(summaries) == {'Basis', 'Schatten', 'Regressie', 'Meervoudige regressie en modelcontrole'}
# Herziene lessen 1-9: uitgebreide kern en vervolg, en een bron bij ieder uitlegblok.
sentences = lambda text: len(re.findall(r'[.!?](?:\s|$)', text))
for lesson in lessons[:9]:
    kern, vervolg = lesson['reading']['kern'], lesson['reading']['vervolg']
    assert len(kern) >= 300 and sentences(kern) >= 4, lesson['id']
    assert len(vervolg) >= 150 and sentences(vervolg) >= 2, lesson['id']
    for section in lesson['sections']:
        if 'Zelf oefenen met deze aanvulling' not in section.get('sourceTitles', [section['title']]):
            assert section['sourceNotes'], (lesson['id'], section['title'])
for phase in ('Basis', 'Schatten'):
    assert len(summaries[phase]) > 800, phase
# Rustige tekst: geen vette begrippen midden in een zin; koplabels en uitkomsten blijven vet.
from lesson_reading import calm_emphasis
assert calm_emphasis('<p>De <strong>populatie</strong> is het geheel.</p>') == '<p>De populatie is het geheel.</p>'
for kept in ('<p><strong>Noodzakelijke basis</strong> eerst.</p>', '<p>Zie hier. <strong>Let op:</strong> t.</p>',
             '<td><strong><span class="inline-value">1,711</span></strong></td>'):
    assert calm_emphasis(kept) == kept, kept
running_bold = [s['title'] for l in lessons for s in l['sections'] if '<strong>populatie</strong>' in s['html']]
assert not running_bold, running_bold
print('OK: 19 lesverhalen, voorbeeldvragen en bronnummering; breuken, wortels, indices, HTML-behoud, herhaalbare opmaak en rustige nadruk.')
