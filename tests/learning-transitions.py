"""Controleer behoud, volgorde en de rekenbasis van de zes leesbruggen."""
import copy
import math
import sys
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
import learning_transitions as transitions

# Bouw dezelfde cursus zonder de nieuwe stap: alle eerdere leerstof moet overleven.
with patch.object(transitions, 'enhance', lambda lessons: None):
    from build_content import lessons
before = copy.deepcopy(lessons)
transitions.enhance(lessons)
assert len(lessons) == 19
keys = []
for old, new in zip(before, lessons):
    assert old['id'] == new['id']
    assert len(old['sections']) == len(new['sections'])
    assert {k:v for k,v in old.items() if k != 'sections'} == {k:v for k,v in new.items() if k != 'sections'}
    for original in old['sections']:
        updated = next(s for s in new['sections'] if s['title'] == original['title'])
        assert original['html'] in updated['html'], (old['id'], original['title'])
        assert {k:v for k,v in original.items() if k != 'html'} == {k:v for k,v in updated.items() if k != 'html'}
        import re
        keys.extend(re.findall('data-learning-transition="([^"]+)"', updated['html']))
        additions = updated['html'].replace(original['html'], '')
        assert '<button' not in additions and '<details' not in additions
assert len(keys) == len(set(keys)) == 6, keys
def order(slug, a, b):
    titles = [s['title'] for l in lessons if l['id'] == slug for s in l['sections']]
    assert titles.index(a) < titles.index(b), slug
order('beginnen', 'Een klein woordenboek voor formules', 'SET-opfrisser: populatie en een eerlijke steekproef')
order('rekenen', 'Waarom kwadrateren?', 'SET-opfrisser: spreiding tegenover onzekerheid')
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
print('OK: zes leesbruggen; alle eerdere blokken, bronnen, vragen en overige velden behouden; volgorde en berekeningen correct.')
