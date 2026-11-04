"""Onafhankelijke herberekening uit de getallen in de originele SRA-opgaven.

Gebruikt uitsluitend de standaardbibliotheek, niet de rekenfuncties van de app.
De afgedrukte cursus-t-waarden blijven behouden; afronding gebeurt pas op het eind.
"""
from math import sqrt, ceil, floor, log, isclose
from pathlib import Path
import json

RESULTS = []
def check(question, label, value, expected, tolerance=0.01):
    RESULTS.append(dict(question=question, calculation=label, value=value,
                        expected=expected, tolerance=tolerance))
    assert isclose(value, expected, rel_tol=0, abs_tol=tolerance), (question,label,value,expected)

def se(N,n,s): return N*s/sqrt(n)*sqrt((N-n)/(N-1))
def sd(n,total,squares): return sqrt((squares-total*total/n)/(n-1))
def strata(rows): return sqrt(sum(se(N,n,s)**2 for N,n,s in rows))
def out(lo,hi,unit): return floor(lo/unit)*unit,ceil(hi/unit)*unit
def interval(q,center,error,t,unit,expected):
    check(q,'puntschatting',center,expected[0],0.6)
    low,high=out(center-t*error,center+t*error,unit)
    check(q,'ondergrens naar buiten',low,expected[1],0.001)
    check(q,'bovengrens naar buiten',high,expected[2],0.001)

# Maart en juni 2020, inhoudelijk dezelfde opgaven.
s=sd(50,170000,996000000)
check('20200323/3','standaardafwijking fout',s,2920.721,0.001)
check('20200323/3','foutbovengrens',ceil((912*3400+1.679*se(912,50,s))/1000)*1000,3717000)
center=10570000/10740000*181000000
check('20200323/6','ratio-totaal onafgerond',center,178135009.31)
check('20200323/7','ratio-ondergrens',floor((center-1.679*se(912,50,2710))/1000)*1000,177564000)
check('20200323/11','stratumvarianties',strata([(503,44,170),(321,46,214),(88,20,456)])**2,303034007,2)
check('20200323/11','ondergrens',floor((178158000-1.667*strata([(503,44,170),(321,46,214),(88,20,456)]))/1000)*1000,178128000)
check('20200323/16','R-kwadraat',13.449/18.029,.7459648,.000001)
check('20200323/18','F zonder tussentijds afronden',13.449/(4.580/19),55.792795,.000001)
check('20200323/20','individuele bovengrens',1.693+1.729*.49095*sqrt(1+1/21+(5-5.6871)**2/(20*1.25505**2)),2.568020,.000001)
# De verhoudingen raw/std moeten voor iedere waarneming dezelfde s_e geven.
assert not isclose(2.01152/1.752,1.6504/1.258,rel_tol=.001)

# November 2021.
s=sd(100,84200,85570675)
check('20211101/1','standaardafwijking',s,385)
interval('20211101/1',1510*842,se(1510,100,s),1.985,1000,(1271420,1159000,1383000))
check('20211101/2','extra steekproef',ceil(1510/(1+60000**2/(1.985**2*1510*385**2)))-100,198)
check('20211101/3','ondergrens',floor((.94*1672000-1.282*se(1510,275,208))/1000)*1000,1549000)
center=sum(B-N*error/n for N,n,error,B in [(1000,100,15400,6500000),(1200,120,19800,8000000),(1800,180,57200,10500000)])
interval('20211101/7',center,strata([(1000,100,300),(1200,120,400),(1800,180,800)]),1.974,1000,(24076000,23851000,24301000))
check('20211101/9','TotalSS uit afgeronde s',49*.876**2,37.601424,.000001)

# Maart 2022.
center=3450*490000/160
check('20220316/1','totaal',center,10565625)
check('20220316/2','bovengrens',ceil((center+1.287*se(3450,160,4969.13))/1000)*1000,12270000)
check('20220316/3','benodigde steekproef',ceil(3450/(1+45000**2/(1.287**2*3450*4969.13**2))),3402)
error=517990-490000;s=sd(160,error,7150220);center=11330000-3450*error/160
check('20220316/5','verschilschatting',center,10726465.625)
check('20220316/5','bovengrens',ceil((center+1.287*se(3450,160,s))/1000)*1000,10768000)
check('20220316/8','bovengrens uit gegeven afgeronde marges',284490+1.660*sqrt((6496/1.703)**2+(9410/1.725)**2+(11681/1.663)**2),300553.8884,.0001)
check('20220316/10','correct R-kwadraat',.725**2,.525625,.0000001)
check('20220316/23','korting man',1971.726-.035*35000+9.490*40,1126.326,.00001)

# Oktober 2022.
q=4580072/5660000;s=sqrt(12600**2-2*q*.88*11500*12600+q*q*11500**2)
check('20221031/2','ratio',q,.8092,.0000001)
check('20221031/2','bovengrens',q*56000000+1.977*se(1375,145,s),46648953,20)
s=sd(190,438000,6507800000)
interval('20221031/4',5700*438000/190,se(5700,190,s),1.653,1000,(13140000,9514000,16766000))
center=1230*552000/160+4470*102300/60
interval('20221031/6',center,strata([(1230,160,6950),(4470,60,1250)]),1.658,1000,(11864850,10282000,13448000))
check('20221031/13','extra prijs',4*85.570,342.28)
SSE=902604.839-718123.926
check('20221031/15','SSE',SSE,184480.913)
check('20221031/15','MSE',SSE/29,6361.410793,.00001)
check('20221031/15','R-kwadraat',718123.926/902604.839,.795613,.000001)
check('20221031/15','F',718123.926/(SSE/29),112.8875,.0001)

# Maart 2023.
b=.942*81.7/83
center=1935*(904498/190+b*(9350480/1935-920345/190))
interval('20230315/1',center,se(1935,190,81.7)*sqrt(1-.942**2),2.603,1000,(9190728.25,9181000,9201000))
center=560*1332+1240*1754.6+1135*2349.2
interval('20230315/5',center,sqrt(22155.05**2+46306.90**2+41833.92**2),1.96,100,(5587966,5458100,5717800))
check('20230315/14','residuele standaardafwijking',sqrt(286.296),16.920284,.00001)
center=71.129+4.078*20
interval('20230315/16',center,sqrt(286.296)*sqrt(1+1/55+(20-18.04)**2/(54*3.522**2)),1.676,1,(152.689,123,182))

# Oktober 2023.
check('20231030/2','MPU-ondergrens',floor((2700*416-1.658*se(2700,130,210))/1000)*1000,1042000)
center=1233000-2700*24
check('20231030/4','verschil-ondergrens',floor((center-1.658*se(2700,130,96))/1000)*1000,1131000)
check('20231030/5','extra steekproef',ceil(2700/(1+31000**2/(1.658**2*2700*96**2)))-130,50)
weights=[831*127.2,587*109.3,551*92.3,504*89.3]
assert [round(100*w/sum(weights)) for w in weights]==[40,24,19,17]
center=387*517+240*383+204*337
interval('20231030/7',center,strata([(387,17,124),(240,13,105),(204,10,88)]),2,100,(360747,331900,389600))
interval('20231030/12',192-.99*55,22.678*sqrt(1+1/746+(55-52.88)**2/(745*9.506**2)),1.96,1,(137.55,93,183))
check('20231030/21','hartritme',189.596-.971*60+8.081,139.417,.000001)

# Maart 2024.
s=sd(100,927800,8640519616)
check('20240318/1','standaardafwijking',s,572)
check('20240318/1','MPU-ondergrens',floor((4750*9278-1.661*se(4750,100,s))/1000)*1000,43623000)
q=9278/9780;sq=sqrt(s*s-2*q*.87*610*s+q*q*610**2)
check('20240318/3','ratio-ondergrens',floor((q*41650370-1.661*se(4750,100,sq))/1000)*1000,39283000)
center=sum(N*total/n for N,n,total in [(1515,32,70432),(529,33,89265),(382,37,94535),(242,29,80185)])
interval('20240318/7',center,strata([(1515,32,232),(529,33,326),(382,37,457),(242,29,320)]),1.663,1000,(6410600,6286000,6535000))
SSE=14664511656-13821483873
check('20240318/12','SSE',SSE,843027783)
check('20240318/12','MSE',SSE/958,879987.24739,.00001)
check('20240318/12','F',13821483873/(SSE/958),15706.459286,.000001)
check('20240318/14','logvoorspelling',-27191.866+9496.388*log(61),11846.587233,.000001)
interval('20240318/15',-3660.428+271.158*61,sqrt(SSE/958)*sqrt(1+1/960+(61-39.47)**2/(959*14**2)),1.96,100,(12880.210,11000,14800))
check('20240318/17','raw-residu gedeeld door s_e',3248.623/938.0776,3.463064,.000001)
check('20240318/22','meervoudige voorspelling',-4195.957+269.056*61+400.700,12617.159,.000001)

# Oktober 2024.
b=.925*82.1/83.3;center=2130*(161300/180+b*(1810500/2130-164500/180))
interval('20241028/1',center,se(2130,180,82.1)*sqrt(1-.925**2),1.974,100,(1784652.9,1775200,1794100))
check('20241028/2','extra steekproef',ceil(2130/(1+5000**2/(1.974**2*2130*82.1**2*(1-.925**2))))-180,341)
center=1150*140000/100+800*128898/77+600*123495/60+500*93176/38+1107500
interval('20241028/6',center,sqrt(36600**2+59600**2+47710**2+15350**2),1.654,10000,(6517650,6370000,6660000))
check('20241028/9','juiste SSE',1395.367-1351.262,44.105,.0000001)
check('20241028/10','F',1351.262/(44.105/28),857.846865,.000001)
center=7.159+.099*228.1;margin=2.048*1.25506/sqrt(30)
check('20241028/13','correct gemiddelde-ondergrens',center-margin,29.271615,.00001)
check('20241028/13','correct gemiddelde-bovengrens',center+margin,30.210185,.00001)

# Maart 2025.
error=165*636-97185
interval('20250317/3',1980000-3740*error/165,se(3740,165,sd(165,error,395000)),1.975,10000,(1804220,1790000,1820000))
center=sum(N*mean for N,mean in [(940,60),(677,53),(639,50),(592,41)])+22580
interval('20250317/6',center,strata([(940,45,16),(677,32,13),(639,30,14),(592,30,13)]),1.660,100,(171083,165400,176800))
check('20250317/8','verklaarde variatie',.682**2,.465124,.0000001)
check('20250317/19','WO-HBO',1010.210-644.888,365.322,.000001)
check('20250317/20','salaris onafgerond',739.508+38.495*50+71.550*10+2237.947,5617.705,.000001)
check('20250317/20','salaris hele euro',round(739.508+38.495*50+71.550*10+2237.947),5618)

# Oktober 2025.
s=sd(120,1112400,10905600000)
check('20251028/1','standaardafwijking',s,2233.534,.001)
interval('20251028/1',6200*1112400/120,se(6200,120,s),1.982,1000,(57474000,54992000,59956000))
check('20251028/2','extra steekproef',ceil(6200/(1+2000000**2/(1.982**2*6200*s**2)))-120,63)
interval('20251028/4',58420000-6200*50020/120,se(6200,120,314.80),1.982,1000,(55835633.33,55485000,56186000))
check('20251028/5','evenredige allocatie',sum(round(N/3000*200) for N in (850,920,780,450)),200)
rows=[(1240,28,65820,210),(610,36,92475,340),(455,41,98230,480),(310,31,84360,295)]
center=sum(N*total/n for N,n,total,_ in rows)
check('20251028/7','puntschatting',round(center),6415537)
error=strata([(N,n,spread) for N,n,_,spread in rows])
check('20251028/8','standaardfout',error,69279.11,.01)
check('20251028/8','bovengrens naar boven',ceil((center+1.292*error)/1000)*1000,6506000)
check('20251028/11','verklaarde variatie',.427**2,.182329,.0000001)
check('20251028/13','MD-grens',1.980+3*3.977,13.911,.000001)
check('20251028/13','Cook-grens',.009+3*.015,.054,.000001)
check('20251028/17','voorspelling',91.008-.142*27+.027*126,90.576,.000001)
check('20251028/18','eenzijdige significantie',.009/2,.0045,.0000001)
check('20251028/21','logaritmische voorspelling',81.361+1.864*log(126),90.3758,.0001)

# Maart 2026.
s=sd(110,50200,96000000)
check('20260323/1','standaardafwijking verschillen',s,818.8745,.0001)
interval('20260323/1',46880000-5750*50200/110,se(5750,110,s),1.984,1000,(44255909,43373000,45139000))
check('20260323/2','extra steekproef',ceil(5750/(1+800000**2/(1.984**2*5750*s**2)))-110,24)
b=.98*3000/4000
error=se(5750,110,3000)*sqrt(1-.98**2)
check('20260323/4','regressiestandaardfout',error,324178.2,.1)
interval('20260323/4',5750*7543+b*(46880000-5750*8000),error,1.984,1000,(44019050,43375000,44663000))
check('20260323/5','Neyman-allocatie',sum(round(N*spread/444600*220) for N,spread in [(1020,200),(890,150),(210,510)]),220)
rows=[(1350,32,72640,225),(580,38,88540,360),(30,30,101880,510)]
center=sum(N*total/n for N,n,total,_ in rows)
check('20260323/7','puntschatting',center,4517780,.001)
error=strata([(N,n,spread) for N,n,_,spread in rows])
check('20260323/8','standaardfout zonder integraal stratum',error,62377.72,.01)
check('20260323/8','ondergrens naar beneden',floor((center-2.368*error)/1000)*1000,4370000)
check('20260323/14','puntschatting exact',-667785.451+137146.104*log(5000),500314.41,.01)
check('20260323/15','MD-grens',.993+3*1.745,6.228,.000001)
check('20260323/15','Cook-grens',.008+3*.020,.068,.000001)
center=112147.991+162.089*3500;spread=sqrt(12676976764)
margin=1.977*spread*sqrt(1+1/142+(3500-1943.27)**2/(141*804.954**2))
check('20260323/17','puntvoorspelling',center,679459.491,.001)
check('20260323/17','marge',margin,226299.8,.1)

if __name__ == '__main__':
    target=Path(__file__).resolve().parents[1]/'docs/antwoordmodel-rekencontrole.json'
    target.write_text(json.dumps(RESULTS,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
    print(f'OK: {len(RESULTS)} onafhankelijke numerieke controles uit elf verschillende tentamens; 2020 geldt voor beide versies.')
