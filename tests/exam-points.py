"""Controle op volledige puntentoerekening, dubbelen en gedeelde rubricpunten."""
from pathlib import Path
import sys
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'scripts'))
from build_exam_points import analyze, browser_data, load_exams, package_level, priority_packages
from exam_point_rules import PRIORITY_PACKAGES

d=analyze()
assert len(d['exams'])==11
assert sum(e['questions'] for e in d['exams'])==239
assert len({(r['exam'],r['question'],r['part']) for r in d['rows']})==265
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
    assert len(topic['byExam'])==11
    assert abs(topic['mean']-topic['points']/11)<1e-10
    assert abs(topic['share']-topic['points']/11)<1e-10
    assert abs(topic['recentMean']-topic['recentPoints']/3)<1e-10
assert sum(t['recentPoints'] for t in d['topics'])==300
assert sum(t['points'] for t in d['topics'])==1100
# Gezamenlijke hypothesen worden nooit met een verzonnen halve punt verdeeld.
q=[r for r in d['rows'] if r['exam']=='20240318' and r['question']==19]
assert [(r['topic'],r['points']) for r in q]==[('normaliteit',2),('hetero',2),('gezamenlijk',1)]
assert all(r['sharedWith'] for r in d['rows'] if r['topic']=='gezamenlijk')
assert next(t for t in d['topics'] if t['id']=='validatie')['points']==0
print('OK: 1100 punten, 385 sampling/715 regressie, 265 oorspronkelijke deelvragen, recente nullen en gedeelde punten.')

basis = next(t for t in d['topics'] if t['id'] == 'basis')
assert (basis['points'], basis['exams'], basis['subquestions']) == (34, 8, 11)
assert round(basis['share'], 2) == 3.09  # Alle elf tentamens, ook de drie nullen.
assert round(basis['meanWhenPresent'], 2) == 4.25  # Alleen de acht tentamens met regressiebasis.

# De tentamenanalyse toont ieder onderwerp eenmaal en sluit per opgave aan op 35 en 65 punten.
b=browser_data(d)
assert [g['points'] for g in b['groups']]==[35,65]
assert abs(sum(block['mean'] for g in b['groups'] for block in g['blocks'])-100)<1e-9
assert sorted(t for g in b['groups'] for block in g['blocks'] for t in block['topics'])==sorted(b['topics'])
assert len(b['skills'][0]['questions'])==11  # t- en F-tabel: over alle tentamens nagelopen.

# Prioriteit: geen enkel pakket verschuift als één tentamen wegvalt.
packages=priority_packages(d)
assert all(p['stable'] for p in packages),[p['id'] for p in packages if not p['stable']]
levels={p['id']:p['level'] for p in packages}
assert [sum(v==n for v in levels.values()) for n in (1,2,3,4)]==[7,6,5,2]
# Elk tentamen bevat minstens één van de vier schatters, dus overslaan kan niet.
assert min(next(p for p in packages if p['id']=='schatters')['byExam'])>0
# Grensgevallen uit de rubricering veranderen de indeling niet als ze anders uitvallen.
by_exam={t['id']:dict(t['byExam']) for t in d['topics']}
exam_ids=[e['id'] for e in d['exams']]
for topic,exam,change in [('normaliteit','20251028',-6),('transformaties','20251028',-4),('transformaties','20260323',-4),
                          ('selectie','20260323',-1),('toetsen','20221031',3),('correlatie','20221031',-3),
                          ('verschil','20250317',2),('schatterkeuze','20250317',-2),('puntvoorspelling','20251028',2),('basis','20251028',-2)]:
    by_exam[topic][exam]+=change
    assert all(package_level(p,by_exam,exam_ids)==levels[p['id']] for p in PRIORITY_PACKAGES),(topic,exam)
    by_exam[topic][exam]-=change
