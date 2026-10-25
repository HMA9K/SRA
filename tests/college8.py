"""Bronankers en onafhankelijke rekenrelaties van de college-8-uitvoer."""
from pathlib import Path
import json,math
ROOT=Path(__file__).resolve().parents[1]
data=json.loads((ROOT/'data/college8-analysis.json').read_text(encoding='utf8'))
assert data['sourceRows']==162 and data['zeroSales']==0
models={m['name']:m for m in data['models']}
for name,n,k,adj,se in [('Benzine',81,9,.919,2367.138),('Diesel',41,5,.817,2332.581),('Electrisch',40,5,.808,4014.791)]:
    m=models[name]
    assert (m['n'],m['k'],m['rule10k'])==(n,k,False)
    assert abs(m['adjustedR2']-adj)<.0005
    assert abs(m['se']-se)<.0006
    assert 0<m['diagnostics']['vifMax']<10
for m in models.values():
    rows=m['rows']
    assert len(rows)==m['n']==len({r['auto'] for r in rows})
    assert abs(sum(r['residual'] for r in rows))<.001
    sse=sum(r['residual']**2 for r in rows)
    assert math.isclose(m['se']**2,sse/(m['n']-m['k']-1),rel_tol=1e-10)
    mean=sum(r['observed'] for r in rows)/m['n']
    sst=sum((r['observed']-mean)**2 for r in rows)
    a=m['anova']
    assert math.isclose(a['ssResidual'],sse,rel_tol=1e-10)
    assert math.isclose(a['ssTotal'],sst,rel_tol=1e-10)
    assert math.isclose(a['ssRegression'],sst-sse,rel_tol=1e-10)
    assert math.isclose(a['f'],((sst-sse)/m['k'])/(sse/m['df']),rel_tol=1e-10)
    assert a['p']<.05
    assert math.isclose(m['r2'],1-sse/sst,rel_tol=1e-10)
    assert math.isclose(m['adjustedR2'],1-(1-m['r2'])*(m['n']-1)/m['df'],rel_tol=1e-10)
    assert any(h['p']<.05 for h in m['diagnostics']['heteroscedasticity'])
d=models['enkelvoudig']['diagnostics']
assert abs(d['zMax']-3.469)<.0005 and abs(d['mdMax']-2.813)<.0005
assert abs(d['normalityStatistic']-.059)<.0005
assert d['normalityP']>.2  # Statistic .059 is NIET Sig .059.
assert models['gezamenlijk']['diagnostics']['normalityP']<.05
assert all(models[k]['diagnostics']['normalityP']>.05 for k in ['Benzine','Diesel','Electrisch'])
print('OK: broncoëfficiënten/fit, n, onafhankelijke residu- en ANOVA-relaties, normaliteitskolom en groepsdiagnoses.')
