"""Controle van behoud, eenmalige plaatsing en rekenbetekenis van formulefiguren."""
import sys, re, json, copy
from pathlib import Path
from math import exp, sqrt
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'scripts'))
from formula_visuals import enhance, visuals
root=Path(__file__).resolve().parents[1]
course=json.loads((root/'data/course.js').read_text(encoding='utf-8').split('window.SRA = ',1)[1].rstrip(';\n'))
lessons=course['lessons']
strip=lambda s:re.sub(r'<!-- formula-visual:start -->[\s\S]*?<!-- formula-visual:end -->','',s)
original=[strip(g['html']) for l in lessons for g in l['formulaGuide']]
enhance(lessons);first=copy.deepcopy(lessons);enhance(lessons)
assert lessons==first,'Opnieuw bouwen mag geen figuren verdubbelen'
assert original==[strip(g['html']) for l in lessons for g in l['formulaGuide']],'De oorspronkelijke formules en brontabellen blijven exact behouden'
keys=[]
for l in lessons:
    found=re.findall(r'data-formula-visual="([^"]+)"',''.join(g['html'] for g in l['formulaGuide']))
    assert len(found)==len(set(found)),l['id']+' heeft dubbele visuele families'
    assert found==[v['key'] for v in l['formulaVisuals']]
    keys.extend(found)
assert len(keys)==len(visuals())
assert not next(l for l in lessons if l['id']=='tentamen')['formulaVisuals'],'Geen nieuw beeld bij een herhaling zonder nieuwe formule'
html=''.join(v['html'] for v in visuals())
assert not re.search(r'(?:points|d|cx|cy|x|y)="[^"<>]*\b(?:nan|inf)\b',html,re.I),'Niet-eindige SVG-coördinaten'
for graphic in re.findall(r'<svg\b[\s\S]*?</svg>',html):
    assert 'role="img"' in graphic and 'aria-label="' in graphic
    assert 'viewBox="' in graphic
# Verify concrete examples independently of the generator's calculations.
assert '1.000 / 3 = 333,33' in html and abs(sqrt(1000/3)-18.25741858)<1e-7
assert '0,931 × € 5 = € 4,655' in html and .931*(105000-1000*100)==4655
assert '12,50' in html and '1,50' in html
y=[3,4,8];f=[2.5,5,7.5]
assert sum((v-5)**2 for v in y)==14
assert sum((v-p)**2 for v,p in zip(y,f))==1.5
assert sum((p-5)**2 for p in f)==12.5
assert '0,303' in html
e=[1,2,3,2,1,-1,-2,-3]
assert sum((b-a)**2 for a,b in zip(e,e[1:]))==10 and sum(v*v for v in e)==33
assert '2,73' in html and '2,55' in html
assert abs((exp(3.6)-exp(3.2))-12.0657)<.0001
assert abs((exp(3.2)-exp(2.8))-8.0878)<.0001
assert 'Logwaarde ln(y)' in next(v for v in visuals() if v['key']=='log-interval')['html']
assert '€ 5.343,959' in html and abs(5617.705-273.746-5343.959)<1e-8
print(f'OK: {len(keys)} gerichte visuele families; behoud originele inhoud, eenmalige plaatsing, idempotentie en onafhankelijke rekencontroles.')
