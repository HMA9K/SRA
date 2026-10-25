"""Regressiecontrole voor formuleopmaak zonder inhoud of HTML te beschadigen."""
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
from presentation import inline_formulas
from build_content import lessons

source = '<p data-example="s/√n">Standaardfout s/√n; s_w/s_b en R²_adj.</p>'
formatted = inline_formulas(source)
tree = ET.fromstring(formatted)
ns = {'m': 'http://www.w3.org/1998/Math/MathML'}
assert tree.attrib['data-example'] == 's/√n', 'Attributen blijven intact'
assert len(tree.findall('.//m:mfrac', ns)) == 2
assert len(tree.findall('.//m:msqrt', ns)) == 1
assert inline_formulas(formatted) == formatted, 'Bestaande MathML niet opnieuw omzetten'
protected = '<svg><text>s/√n</text></svg><!-- s/√n --><p>&amp; &#8594;</p>'
assert inline_formulas(protected) == protected
assert inline_formulas('<a href="s_w.pdf">bron</a>') == '<a href="s_w.pdf">bron</a>'
assert inline_formulas('bestands_naam en een gewoon woord') == 'bestands_naam en een gewoon woord'
assert inline_formulas('ns/√n en s/√naam') == 'ns/√n en s/√naam'
assert len(lessons) == 19
for lesson in lessons:
    assert len(lesson['reading']['opening']) > 150
    assert len(lesson['reading']['conclusion']) > 150
    assert '?' in lesson['example']['context']
    assert len(lesson['example']['stepsHtml']) == len(lesson['example']['steps'])
    for step in lesson['example']['stepsHtml']:
        ET.fromstring('<div>' + step + '</div>')
print('OK: 19 lesverhalen en voorbeeldvragen; breuken, wortels, indices, HTML-behoud en herhaalbare opmaak.')
