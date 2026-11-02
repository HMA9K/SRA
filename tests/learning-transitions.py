"""Controleer behoud, volgorde en de rekenbasis van de zes leesbruggen."""
import copy
import math
import re
import sys
from html import unescape
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
import learning_transitions as transitions

# Vergelijk direct rondom de bouwstap, vóór formuleopmaak en bronnummering.
before, lessons = [], []
enhance = transitions.enhance
def capture(course):
    before.extend(copy.deepcopy(course))
    enhance(course)
    lessons.extend(copy.deepcopy(course))
with patch.object(transitions, 'enhance', capture):
    import build_content
assert len(lessons) == 19
keys = []
for old, new in zip(before, lessons):
    assert old['id'] == new['id']
    assert len(old['sections']) - (old['id'] == 'rekenen') == len(new['sections'])
    assert {k:v for k,v in old.items() if k != 'sections'} == {k:v for k,v in new.items() if k != 'sections'}
    for original in old['sections']:
        merged = old['id'] == 'rekenen' and original['title'] in ('Rekenen zonder verborgen stappen', 'Waarom kwadrateren?')
        title = 'Rekenen zonder verborgen stappen' if merged else original['title']
        updated = next(s for s in new['sections'] if s['title'] == title)
        if merged:
            text = unescape(re.sub(r'<[^>]+>', '', updated['html']))
            for paragraph in re.findall(r'<p>(.*?)</p>', original['html']):
                for sentence in unescape(re.sub(r'<[^>]+>', '', paragraph)).split('. '):
                    assert sentence in text, sentence
            for formula in re.findall(r'<div class="formula">.*?</div>', original['html']):
                assert formula in updated['html']
            for formula in re.findall(r'<math\b.*?</math>', original['html']):
                assert formula in updated['html'], 'Opgemaakte formule ontbreekt na samenvoegen'
            if original['title'] == 'Waarom kwadrateren?':
                assert original['html'].split('</p>', 2)[2] in updated['html'], 'Formulekader met symbolen en toelichting moet volledig behouden blijven'
            assert all(ref in updated['refs'] for ref in original['refs'])
        else:
            assert original['html'] in updated['html'], (old['id'], original['title'])
            assert {k:v for k,v in original.items() if k != 'html'} == {k:v for k,v in updated.items() if k != 'html'}
    for updated in new['sections']:
        keys.extend(re.findall('data-learning-transition="([^"]+)"', updated['html']))
        for example in re.findall(r'<section class="transition-panel">.*?</section>', updated['html']):
            assert '<button' not in example and '<details' not in example
assert len(keys) == len(set(keys)) == 6, keys
def order(slug, a, b):
    titles = [s['title'] for l in lessons if l['id'] == slug for s in l['sections']]
    assert titles.index(a) < titles.index(b), slug
order('beginnen', 'Een klein woordenboek voor formules', 'SET-opfrisser: populatie en een eerlijke steekproef')
order('rekenen', 'Rekenen zonder verborgen stappen', 'SET-opfrisser: spreiding tegenover onzekerheid')
arithmetic = next(s for l in lessons if l['id'] == 'rekenen' for s in l['sections'] if s['title'] == 'Rekenen zonder verborgen stappen')
assert arithmetic['html'].count('class="transition-panel"') == 3
assert not any(s['title'] == 'Waarom kwadrateren?' for l in lessons if l['id'] == 'rekenen' for s in l['sections'])
assert 'viewBox="0 0 260 68"' in transitions.population_example()
order('rekenen', 'SET-opfrisser: spreiding tegenover onzekerheid', 'De rekenvorm op het formuleblad')
order('transformaties', 'Wat doet een logaritme?', 'Een transformatie verandert welk patroon lineair wordt')
assert transitions.MEAN == 100 and sum(transitions.DEVIATIONS) == 0
assert sum(transitions.SQUARES) == 1000
assert math.isclose(transitions.SD, 18.257418583505537)
assert sum(transitions.PAIR_MEANS.values()) == 16 and transitions.PAIR_MEANS[100] == 4
weighted_mean = sum(value * count for value,count in transitions.PAIR_MEANS.items()) / 16
variance_means = sum((value-weighted_mean)**2*count for value,count in transitions.PAIR_MEANS.items())/16
variance_values = sum((value-100)**2 for value in transitions.VALUES)/4
assert weighted_mean == 100 and variance_means == variance_values/2
# Asgetallen staan op hun eigen waarde; eerder stond een afgeronde "2" op x = 1,5.
assert transitions.axis_ticks(0, 3) == [0, 1, 2, 3]
assert transitions.axis_ticks(transitions.SD/8, transitions.SD/2) == [4, 6, 8]
assert transitions.axis_ticks(1, math.exp(3)) == [5, 10, 15, 20]
assert re.findall(r'y="148" text-anchor="middle">([^<]+)<', transitions.log_example()) == ['0', '1', '2', '3'] * 2
spread_text = re.sub(r'<[^>]+>', ' ', transitions.spread_example('<p>a. b. c. d.</p><p>e</p>', '<p>f</p><p>g</p>h'))
assert not re.search(r'-\d', spread_text) and '(+10)²' in spread_text, 'Negatieve getallen gebruiken het minteken'
print('OK: zes leesbruggen; twee rekenblokken samengevoegd; alle eerdere leerstof, bronnen, vragen en overige velden behouden; volgorde en berekeningen correct.')
