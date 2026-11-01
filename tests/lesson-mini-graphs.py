"""Behoud alle oorspronkelijke uitleg en controleer de rekenvoorbeelden."""
import copy
import math
import re
import sys
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
import lesson_mini_graphs as graphs

original, updated = [], []
enhance = graphs.enhance
def capture(lessons):
    original.extend(copy.deepcopy(lessons))
    enhance(lessons)
    updated.extend(copy.deepcopy(lessons))
with patch.object(graphs, 'enhance', capture):
    import build_content

count = 0
for old, new in zip(original, updated):
    assert {k:v for k,v in old.items() if k != 'sections'} == {k:v for k,v in new.items() if k != 'sections'}
    assert len(old['sections']) == len(new['sections'])
    for a, b in zip(old['sections'], new['sections']):
        assert {k:v for k,v in a.items() if k != 'html'} == {k:v for k,v in b.items() if k != 'html'}
        html, n = re.subn(r'<div class="mini-explanation"[^>]*><div class="mini-copy">(.*?)</div><figure>.*?</figure></div>', r'\1', b['html'], flags=re.S)
        assert a['html'] == html, (new['id'], b['title'], 'Leerstof gewijzigd bij invoegen figuur')
        count += n
assert count == 13
assert sum([141, 58, 30, 21]) == sum([114, 58, 36, 42]) == 250
assert 95000 + .931 * 5000 == 99655
assert math.isclose((4+1+9)/3, 4.666666666666667)
assert [round(16+s*2.306*2/math.sqrt(10),2) for s in (-1,1)] == [14.54,17.46]
assert [round(16+s*2.306*2*math.sqrt(1.1),2) for s in (-1,1)] == [11.16,20.84]
assert sum([1,-2,1]) == sum(x*r for x,r in zip([1,2,3],[1,-2,1])) == 0

def check_words(value, path=''):
    if isinstance(value, dict):
        for k,v in value.items():
            if k not in ('origin', 'dataOrigin'): check_words(v, path+'/'+k)
    elif isinstance(value, list):
        for i,v in enumerate(value): check_words(v, path+'/'+str(i))
    elif isinstance(value, str):
        assert not re.search(r'\beigen\b',value,re.I), path
for data in (build_content.lessons, build_content.TERMS, build_content.summaries): check_words(data)
import build_mc
check_words(build_mc.make_topics())
print('13 mini-grafieken: uitleg, formules, vragen en bronnen volledig behouden; rekenbasis en formulering gecontroleerd.')
