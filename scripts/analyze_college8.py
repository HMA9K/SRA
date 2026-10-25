"""Herbereken de gepubliceerde college-8-modellen uit het originele Excelblad.

Gebruik --source met een lokale bron. De bron blijft alleen-lezen.
Analyseafhankelijkheden: numpy, scipy, statsmodels, openpyxl; niet nodig voor de webapp.
"""
from pathlib import Path
import argparse
import hashlib
import json
import numpy as np
import openpyxl
from scipy import stats
import statsmodels.api as sm
from statsmodels.stats.diagnostic import lilliefors

ROOT = Path(__file__).resolve().parents[1]
MODELS = {
 'enkelvoudig': ['Bouwjaar'],
 'gezamenlijk': ['Kilometerstand','Bouwjaar','Nieuwprijs nu','Aantal schademeldingen','Score lak','Score motor','Aandrijving=Diesel'],
 'Benzine': ['Kilometerstand','Bouwjaar','Nieuwprijs bij aanschaf','Aantal opknapbeurten','Score lak','Score motor','Kleur=Grijs','Kleur=Rood','Kleur=Wit'],
 'Diesel': ['Nieuwprijs bij aanschaf','Aantal schademeldingen','Score motor','Merk=Suzuki','Merk=Honda'],
 'Electrisch': ['Kilometerstand','Nieuwprijs bij aanschaf','Nieuwprijs nu','Aantal opknapbeurten','Aantal schademeldingen'],
}
# Afgelezen uit de oorspronkelijke tabellen, SPSS-uitwerkingen PDF 45–47.
EXPECTED = {
 'gezamenlijk': [-1871732.752,-.024,932.422,.385,-508.075,224.918,737.732,-2879.450],
 'Benzine': [-2378085.636,-.019,1183.081,.373,-356.713,392.621,912.770,-2325.143,-2152.073,-1538.502],
 'Diesel': [49704.668,-1.244,-669.362,790.780,-2141.037,10242.424],
 'Electrisch': [12054.399,-.031,-.553,1.015,1080.180,-2042.942],
}


def column(rows, name):
    if '=' in name:
        field, value = name.split('=',1)
        return np.array([r[field] == value for r in rows],dtype=float)
    return np.array([r[name] for r in rows],dtype=float)


def analyze(rows, name, terms):
    chosen=rows if name in ('enkelvoudig','gezamenlijk') else [r for r in rows if r['Aandrijving']==name]
    x=np.column_stack([column(chosen,t) for t in terms])
    y=column(chosen,'Verkoopwaarde')
    design=sm.add_constant(x)
    n,k=len(y),len(terms)
    assert np.linalg.matrix_rank(design)==k+1
    model=sm.OLS(y,design).fit()
    # Onafhankelijke oplossing via gecentreerde normale vergelijkingen.
    centered=x-x.mean(axis=0)
    beta=np.linalg.solve(centered.T@centered,centered.T@(y-y.mean()))
    independent=np.r_[y.mean()-x.mean(axis=0)@beta,beta]
    np.testing.assert_allclose(model.params,independent,rtol=1e-7,atol=1e-5)
    if name in EXPECTED:
        np.testing.assert_allclose(model.params,EXPECTED[name],rtol=0,atol=.00051,
                                   err_msg=name+': wijkt af van op 3 decimalen gepubliceerde broncoëfficiënten')
    residual=np.asarray(model.resid)
    se=float(np.sqrt(model.mse_resid))
    z=residual/se  # SPSS Standardized Residual, niet studentized deleted residual
    hat=model.get_influence().hat_matrix_diag
    md=(n-1)*(hat-1/n)
    cook=model.get_influence().cooks_distance[0]
    # Controleer Cook ook onafhankelijk met e² / ((k+1) MSE) * h/(1-h)².
    np.testing.assert_allclose(cook,residual**2/((k+1)*model.mse_resid)*hat/(1-hat)**2)
    md_limit=float(md.mean()+3*md.std(ddof=1))
    cook_limit=float(cook.mean()+3*cook.std(ddof=1))
    z_limit=3 if n>100 else 2
    ids=lambda mask:[int(r['Auto']) for r,keep in zip(chosen,mask) if keep]
    vifs=np.diag(np.linalg.inv(np.corrcoef(x,rowvar=False))) if k>1 else [1.]
    normal_stat,normal_p=(lilliefors(residual,dist='norm',pvalmethod='table') if n>50 else stats.shapiro(residual))
    hetero=[]
    for term,values in zip(terms,x.T):
        corr,p=stats.pearsonr(np.abs(residual),values)
        hetero.append(dict(term=term,r=float(corr),p=float(p)))
    return dict(name=name,n=n,k=k,df=n-k-1,rule10k=n>=10*k,
        r2=float(model.rsquared),adjustedR2=float(model.rsquared_adj),se=se,
        anova=dict(ssRegression=float(model.ess),ssResidual=float(model.ssr),ssTotal=float(model.centered_tss),
                   msRegression=float(model.mse_model),msResidual=float(model.mse_resid),f=float(model.fvalue),p=float(model.f_pvalue)),
        coefficients=[dict(term=t,b=float(b),se=float(s),t=float(tv),p=float(p),vif=None if i==0 else float(vifs[i-1]))
                      for i,(t,b,s,tv,p) in enumerate(zip(['Constante']+terms,model.params,model.bse,model.tvalues,model.pvalues))],
        diagnostics=dict(zMin=float(min(z)),zMax=float(max(z)),zLimit=z_limit,zCandidates=ids(abs(z)>z_limit),
            mdMax=float(max(md)),mdLimit=md_limit,mdCandidates=ids(md>md_limit),
            cookMax=float(max(cook)),cookLimit=cook_limit,cookCandidates=ids(cook>cook_limit),
            normalityTest='KS met Lilliefors-correctie (benadering)' if n>50 else 'Shapiro-Wilk',
            normalityStatistic=float(normal_stat),normalityP=float(normal_p),heteroscedasticity=hetero,
            vifMax=float(max(vifs)),timeDiagnostics='Niet toegepast: crosssectie, Auto is een identificatie en geen tijdsvolgorde.'),
        rows=[dict(auto=int(r['Auto']),observed=float(yv),predicted=float(pred),residual=float(res),z=float(zv),md=float(m),cook=float(c))
              for r,yv,pred,res,zv,m,c in zip(chosen,y,model.fittedvalues,residual,z,md,cook)])


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source',type=Path,required=True)
    parser.add_argument('--output',type=Path,default=ROOT/'data/college8-analysis.json')
    parser.add_argument('--figures',action='store_true',help='Maak de controlefiguren met matplotlib.')
    args=parser.parse_args()
    before=hashlib.sha256(args.source.read_bytes()).hexdigest()
    workbook=openpyxl.load_workbook(args.source,read_only=True,data_only=True)
    values=list(workbook['College8'].values)
    rows=[dict(zip(values[0],r)) for r in values[1:] if any(v is not None for v in r)]
    workbook.close()
    assert len(rows)==162 and len({r['Auto'] for r in rows})==162
    assert all(all(v is not None for v in r.values()) for r in rows)
    result=dict(source='SRA SPSS data.xlsx',sheet='College8',range='A1:Q163',sourceSha256=before,
        sourceRows=len(rows),zeroSales=sum(r['Verkoopwaarde']==0 for r in rows),
        note='Eigen herberekening van de in de cursus gepubliceerde eindmodellen. Geen nieuwe SPSS-bediening en geen gereconstrueerde backwardselectie.',
        models=[analyze(rows,name,terms) for name,terms in MODELS.items()])
    assert before==hashlib.sha256(args.source.read_bytes()).hexdigest()
    args.output.write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
    if args.figures:
        import matplotlib
        matplotlib.use('Agg')
        import matplotlib.pyplot as plt
        for model in result['models']:
            fig,axes=plt.subplots(1,2,figsize=(10,4),layout='constrained')
            fitted=np.array([r['predicted'] for r in model['rows']])/1000
            actual=np.array([r['observed'] for r in model['rows']])/1000
            residual=actual-fitted
            axes[0].scatter(fitted,actual,s=18,color='#167350',alpha=.75)
            low,high=min(fitted.min(),actual.min()),max(fitted.max(),actual.max())
            axes[0].plot([low,high],[low,high],color='#555555',lw=1)
            axes[0].set(xlabel='Voorspelde waarde (duizend euro)',ylabel='Werkelijke waarde (duizend euro)',title='Ligging ten opzichte van de voorspelling')
            axes[1].scatter(fitted,residual,s=18,color='#2563a1',alpha=.75)
            axes[1].axhline(0,color='#555555',lw=1)
            axes[1].set(xlabel='Voorspelde waarde (duizend euro)',ylabel='Residu (duizend euro)',title='Spreiding en gemarkeerde auto’s')
            candidates=set(model['diagnostics']['zCandidates']+model['diagnostics']['mdCandidates']+model['diagnostics']['cookCandidates'])
            for x,y,row in zip(fitted,residual,model['rows']):
                if row['auto'] in candidates:
                    offset={155:(-15,13),35:(6,-10)}.get(row['auto'],(4,4)) if model['name']=='gezamenlijk' else (4,4)
                    axes[1].annotate(str(row['auto']),(x,y),xytext=offset,textcoords='offset points',fontsize=9)
            for ax in axes:
                ax.grid(alpha=.18)
                ax.spines[['top','right']].set_visible(False)
            fig.suptitle(f"College 8: {model['name']} (n = {model['n']})",fontsize=14)
            fig.savefig(ROOT/'assets/learning'/f"college8-{model['name'].lower()}.png",dpi=140,metadata={'Software':'SRA rekencontrole'})
            plt.close(fig)
    for model in result['models']:
        d=model['diagnostics']
        print(model['name'],model['n'],model['k'],round(model['adjustedR2'],6),'normaliteit',round(d['normalityP'],6),'VIF',round(d['vifMax'],3))
    print('Bron ongewijzigd; alle gepubliceerde coëfficiënten gereproduceerd binnen bronafronding.')


if __name__=='__main__':
    main()
