"""Controle op volledige puntentoerekening, dubbelen en gedeelde rubricpunten."""
from pathlib import Path
import sys
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'scripts'))
from build_exam_points import analyze, load_exams

d=analyze()
assert len(d['exams'])==9
assert sum(e['questions'] for e in d['exams'])==196
assert len({(r['exam'],r['question'],r['part']) for r in d['rows']})==221
assert d['excluded']==[{'exam':'20200626','duplicateOf':'20200323'}]
for e in load_exams():
    if e['duplicateOf']: continue
    sampling=sum(r['points'] for r in d['rows'] if r['exam']==e['id'] and r['question']<=e['cut'])
    assert sampling==35, e['id']
    for q in e['questions']:
        assert sum(r['points'] for r in d['rows'] if r['exam']==e['id'] and r['question']==q['number'])==q['points']
for topic in d['topics']:
    own = [r for r in d['rows'] if r['topic'] == topic['id']]
    assert topic['exams'] == len({r['exam'] for r in own})
    assert topic['subquestions'] == len({(r['exam'], r['question'], r['part']) for r in own})
    assert topic['points'] == sum(r['points'] for r in own)
    if own:
        assert abs(topic['meanWhenPresent'] - sum(r['points'] for r in own) / len({r['exam'] for r in own})) < 1e-10
    else:
        assert topic['meanWhenPresent'] is None
    assert len(topic['byExam'])==9
    assert abs(topic['mean']-topic['points']/9)<1e-10
    assert abs(topic['share']-topic['points']/9)<1e-10
    assert abs(topic['recentMean']-topic['recentPoints']/3)<1e-10
assert sum(t['recentPoints'] for t in d['topics'])==300
assert sum(t['points'] for t in d['topics'])==900
# Gezamenlijke hypothesen worden nooit met een verzonnen halve punt verdeeld.
q=[r for r in d['rows'] if r['exam']=='20240318' and r['question']==19]
assert [(r['topic'],r['points']) for r in q]==[('normaliteit',2),('hetero',2),('gezamenlijk',1)]
assert all(r['sharedWith'] for r in d['rows'] if r['topic']=='gezamenlijk')
assert next(t for t in d['topics'] if t['id']=='validatie')['points']==0
print('OK: 900 punten, 315 sampling/585 regressie, 221 oorspronkelijke deelvragen, recente nullen en gedeelde punten.')

basis = next(t for t in d['topics'] if t['id'] == 'basis')
assert (basis['points'], basis['exams'], basis['subquestions']) == (26, 6, 8)
assert round(basis['share'], 2) == 2.89  # Alle negen tentamens, ook de drie nullen.
assert round(basis['meanWhenPresent'], 2) == 4.33  # Alleen de zes tentamens met regressiebasis.
