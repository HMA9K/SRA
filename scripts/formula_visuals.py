"""Gerichte figuren bij bestaande formulegidsen; geen nieuwe cursusmethoden.

Elke visuele familie wordt eenmaal per onderwerp geplaatst. De getallen van eigen
didactische voorbeelden worden uit hun invoer berekend. Bestaande brontabellen
blijven behouden. SVG bevat een leesbare titel, assen en een tekstuele uitwerking.
"""
from html import escape
from math import sqrt, exp, log, gamma, pi, isfinite
import re

VERSION = '2026-09-26'
GREEN, PURPLE, ORANGE = 'var(--fv-green)', 'var(--fv-purple)', 'var(--fv-orange)'


def num(v, digits=2):
    return f'{v:,.{digits}f}'.replace(',', '@').replace('.', ',').replace('@', '.')


def table(headers, rows, caption):
    return ('<table class="fv-table"><caption>' + escape(caption) + '</caption><thead><tr>' +
            ''.join('<th scope="col">' + escape(str(h)) + '</th>' for h in headers) +
            '</tr></thead><tbody>' + ''.join('<tr>' + ''.join('<td>' + escape(str(c)) +
            '</td>' for c in row) + '</tr>' for row in rows) + '</tbody></table>')


def plot(title, series, xlabel, ylabel, domain=None, vertical=(), horizontal=(), segments=(), bands=(), shade=()):
    """series=(name, [(x,y),...], color, points); all coordinates use stated axes."""
    pts = [p for _, data, _, _ in series for p in data]
    pts += [p for _, low, high in bands for p in low + high]
    if not pts or any(not isfinite(float(v)) for p in pts for v in p):
        raise ValueError('Ongeldige grafiek: ' + title)
    xmin, xmax, ymin, ymax = domain or (min(p[0] for p in pts), max(p[0] for p in pts),
                                       min(0, min(p[1] for p in pts)), max(p[1] for p in pts))
    if xmax <= xmin or ymax <= ymin:
        raise ValueError('Ongeldig bereik: ' + title)
    X = lambda v: 58 + (v - xmin) * 276 / (xmax - xmin)
    Y = lambda v: 180 - (v - ymin) * 156 / (ymax - ymin)
    out = [f'<svg class="fv-chart" viewBox="0 0 360 238" role="img" aria-label="{escape(title + "; x-as: " + xlabel + "; y-as: " + ylabel, quote=True)}" xmlns="http://www.w3.org/2000/svg">']
    for i in range(5):
        x, y = xmin + (xmax-xmin)*i/4, ymin + (ymax-ymin)*i/4
        out.append(f'<path class="fv-gridline" d="M58 {Y(y):.2f}H334"/><text x="51" y="{Y(y)+4:.2f}" text-anchor="end">{num(y, 1)}</text>')
    discrete=xlabel in ('Postnummer','Testwaarneming','Tijdstip t')
    xticks=sorted(set(p[0] for p in pts)) if discrete else [xmin+(xmax-xmin)*i/4 for i in range(5)]
    for x in xticks:
        out.append(f'<text x="{X(x):.2f}" y="200" text-anchor="middle">{num(x,0 if discrete else 1)}</text>')
    for color, low, high in bands:
        path = ' '.join(f'{X(x):.2f},{Y(y):.2f}' for x, y in high + low[::-1])
        out.append(f'<polygon points="{path}" fill="{color}" fill-opacity="0.14"/>')
    for data, color in shade:
        if data:
            path = [(data[0][0], 0)] + data + [(data[-1][0], 0)]
            out.append('<polygon points="' + ' '.join(f'{X(x):.2f},{Y(y):.2f}' for x,y in path) + f'" fill="{color}" fill-opacity="0.25"/>')
    for x, label, color in vertical:
        out.append(f'<path d="M{X(x):.2f} 24V180" stroke="{color}" stroke-dasharray="5 4"/><text x="{X(x):.2f}" y="16" text-anchor="middle" fill="{color}">{escape(label)}</text>')
    for y, label, color in horizontal:
        out.append(f'<path d="M58 {Y(y):.2f}H334" stroke="{color}" stroke-dasharray="5 4"/><text x="330" y="{Y(y)-5:.2f}" text-anchor="end" fill="{color}">{escape(label)}</text>')
    for p, q, color in segments:
        out.append(f'<path d="M{X(p[0]):.2f} {Y(p[1]):.2f}L{X(q[0]):.2f} {Y(q[1]):.2f}" stroke="{color}" stroke-width="2"/>')
    for name, data, color, points in series:
        if not points:
            out.append('<polyline points="' + ' '.join(f'{X(x):.2f},{Y(y):.2f}' for x,y in data) + f'" fill="none" stroke="{color}" stroke-width="2.5"/>')
        else:
            for x,y in data:
                out.append(f'<circle cx="{X(x):.2f}" cy="{Y(y):.2f}" r="4" fill="{color}"/>')
    out.append('<path class="fv-axis" d="M58 24V180H334"/><text x="196" y="224" text-anchor="middle">' + escape(xlabel) + '</text><text transform="translate(15 104) rotate(-90)" text-anchor="middle">' + escape(ylabel) + '</text></svg>')
    legend = '<div class="fv-legend">' + ''.join('<span><i style="background:' + color + '"></i>' + escape(name) + '</span>' for name, _, color, _ in series) + '</div>'
    return ''.join(out) + legend


def panel(title, body, work):
    return '<figure class="fv-panel"><figcaption>' + escape(title) + '</figcaption>' + body + '<p class="fv-work">' + work + '</p></figure>'


def block(key, title, panels, meaning, provenance='Eigen didactisch rekenvoorbeeld bij de formules en voorwaarden van dit onderwerp.'):
    return ('<section class="formula-visual" data-formula-visual="' + escape(key, quote=True) + '"><h3>' + escape(title) +
            '</h3><p class="fv-provenance">' + escape(provenance) + '</p><div class="fv-panels">' +
            ''.join(panels) + '</div><p class="fv-meaning"><strong>Lees het beeld:</strong> ' + meaning + '</p></section>')


def curve(fn, start, stop, n=80):
    return [(start+(stop-start)*i/n, fn(start+(stop-start)*i/n)) for i in range(n+1)]


def interval_graphic(title, midpoint, lo, hi, limits, xlabel):
    X=lambda v:30+(v-limits[0])*300/(limits[1]-limits[0])
    out=[f'<svg class="fv-chart" viewBox="0 0 360 165" role="img" aria-label="{escape(title,quote=True)}: {num(lo)} tot {num(hi)}; puntschatting {num(midpoint)}" xmlns="http://www.w3.org/2000/svg">']
    out.append('<path class="fv-axis" d="M25 92H335"/>')
    out.append(f'<path d="M{X(lo):.2f} 65H{X(hi):.2f}" stroke="{GREEN}" stroke-width="3"/>')
    for value,label,color in [(lo,'Ondergrens',GREEN),(midpoint,'Puntschatting',PURPLE),(hi,'Bovengrens',GREEN)]:
        out.append(f'<path d="M{X(value):.2f} 55V102" stroke="{color}"/><text x="{X(value):.2f}" y="{33 if value==midpoint else 123}" text-anchor="middle">{escape(label)}</text><text x="{X(value):.2f}" y="{49 if value==midpoint else 139}" text-anchor="middle">{num(value)}</text>')
    if limits[0]<0<limits[1]:
        out.append(f'<path d="M{X(0):.2f} 55V102" stroke="{ORANGE}" stroke-dasharray="4 3"/><text x="{X(0):.2f}" y="49" text-anchor="middle">nul</text>')
    out.append('<text x="180" y="161" text-anchor="middle">'+escape(xlabel)+'</text></svg>')
    return ''.join(out)


def interval_panel(title, midpoint, margin, limits, work, xlabel='Bedrag (€)'):
    lo, hi = midpoint-margin, midpoint+margin
    graphic = interval_graphic(title,midpoint,lo,hi,limits,xlabel)
    return panel(title, graphic, work + f'<br>Ondergrens {num(lo)}; bovengrens {num(hi)}.')


def regions(title, edges, labels):
    out=[f'<svg class="fv-chart" viewBox="0 0 360 180" role="img" aria-label="{escape(title,quote=True)}" xmlns="http://www.w3.org/2000/svg">']
    colors=[ORANGE,PURPLE,GREEN,PURPLE,ORANGE]
    for i,(a,b) in enumerate(zip(edges,edges[1:])):
        x=20+80*a;width=80*(b-a)
        out.append(f'<rect x="{x:.2f}" y="55" width="{width:.2f}" height="40" fill="{colors[i]}" fill-opacity="0.3"/>')
        out.append(f'<text x="{x+width/2:.2f}" y="{118 if i%2==0 else 140}" text-anchor="middle">{escape(labels[i])}</text>')
    for i,v in enumerate(edges):
        out.append(f'<path class="fv-axis" d="M{20+80*v:.2f} 51V99"/><text x="{20+80*v:.2f}" y="{22 if i%2==0 else 42}" text-anchor="middle">{num(v,2)}</text>')
    return ''.join(out)+'<text x="180" y="173" text-anchor="middle">Durbin-Watson d</text></svg>'


def visuals():
    V = []
    def add(lesson, title, key, heading, panels, meaning, provenance=None):
        V.append(dict(lesson=lesson, title=title, key=key, html=block(key,heading,panels,meaning,**({'provenance':provenance} if provenance else {}))))
    add('beginnen','Van steekproefsom naar gemiddelde en geschat totaal','mean-total','Van de gecontroleerde posten naar het totaal',[
        panel('Eerst het bedrag per post',table(['Gegeven','Rekenstap'],[['100 gecontroleerde artikelen','€ 8.000 / 100'],['Gemiddelde','€ 80 per artikel']],'De steekproef vertalen'),'Deel door het aantal gecontroleerde posten: de som wordt een gemiddelde.'),
        panel('Daarna het populatietotaal',table(['Gegeven','Rekenstap'],[['1.000 artikelen','1.000 × € 80'],['Puntschatting','€ 80.000']],'Het gemiddelde opschalen'),'De populatieomvang schaalt een bedrag per post op naar een geschat totaal.')],
        'Dezelfde € 80 krijgt een andere functie door vermenigvuldiging met N. Deze tabel voegt nog geen onzekerheidsmarge toe.',
        'Uitwerking van het bestaande voorbeeld: N = 1.000, n = 100 en Σw = € 8.000.')
    vals=[80,90,110,120]
    add('rekenen','Gemiddelde, variantie en standaardafwijking uitrekenen','spread','Van afwijking naar gekwadrateerde afwijking',[
        panel('De afwijkingen blijven zichtbaar',plot('Waarden rond het gemiddelde', [('Waarde',list(enumerate(vals,1)),GREEN,True)],'Postnummer','Waarde (€)',(0,5,60,140),horizontal=[(100,'gem. 100',PURPLE)],segments=[((i,100),(i,v),ORANGE) for i,v in enumerate(vals,1)]),'Afwijkingen: −20, −10, +10, +20. Hun som is nul, terwijl de posten wel verschillen.'),
        panel('Kwadraten heffen elkaar niet op',plot('Gekwadrateerde afwijkingen',[('Afwijking²',list(enumerate([(v-100)**2 for v in vals],1)),ORANGE,True)],'Postnummer','Afwijking² (euro²)',(0,5,0,500)),'400 + 100 + 100 + 400 = 1.000.<br>s² = 1.000 / 3 = 333,33 euro²; s = √333,33 ≈ € 18,26.')],
        'Kwadrateren voorkomt opheffing; de wortel brengt de uitkomst terug naar euro. De volledige kolomtabel staat verderop bij de tweede rekenroute.',
        'Dezelfde vier waarden als in de formule-uitleg en de bestaande rekentabel: 80, 90, 110 en 120.')
    add('onzekerheid','Van puntschatting naar betrouwbaarheidsinterval','interval-width','De marge is de halve intervalbreedte',[
        interval_panel('Gegeven t = 2,00',100000,4000,(93000,107000),'Standaardfout € 2.000. E = 2 × 2.000 = € 4.000; breedte = € 8.000.'),
        interval_panel('Gegeven t = 2,60',100000,5200,(93000,107000),'Dezelfde standaardfout. E = 2,60 × 2.000 = € 5.200; breedte = € 10.400.')],
        'De puntschatting blijft gelijk. Een grotere kritieke waarde geeft een breder interval; beide grafieken gebruiken dezelfde schaal.',
        'Visualisatie van de twee gegeven t-waarden in het bestaande rekenvoorbeeld; geen nieuwe tabelkeuze.')
    df=24
    density=lambda x:gamma((df+1)/2)/(sqrt(df*pi)*gamma(df/2))*(1+x*x/df)**(-(df+1)/2)
    points=curve(density,-4,4,160)
    def tpanel(title,critical,two,work,stat=None):
        vertical=[(critical,num(critical,3),ORANGE)] + ([(-critical,'−'+num(critical,3),ORANGE)] if two else [])
        if stat is not None: vertical.append((stat,'t = '+num(stat,1),GREEN))
        return panel(title,plot(title,[('Student-t, df = 24',points,PURPLE,False)],'t','Kansdichtheid',(-4,4,0,.45),vertical=vertical,
                           shade=[([p for p in points if p[0]>=critical],ORANGE)] + ([([p for p in points if p[0]<=-critical],ORANGE)] if two else [])),work)
    add('onzekerheid','De tabellenbundel gebruiken: pagina, rij, kolom en conclusie','table-tails','Eén tabel, verschillende staartkansen',[
        tpanel('95% tweezijdig',2.064,True,'α = 0,05 → 0,025 per staart.<br>Rij 24, kolom 0,025 → t = 2,064.'),
        tpanel('95% eenzijdig',1.711,False,'α = 0,05 in één staart.<br>Rij 24, kolom 0,05 → t = 1,711.')],
        'De gekleurde oppervlakte is de foutkans. De hoogte van de curve is geen p-waarde. De bestaande tabel geeft de exacte snijpunten.',
        'Tabellenbundel, tabel 13.4, PDF 12: de reeds opgenomen waarden bij 24 vrijheidsgraden.')
    N,n,sw=1000,100,20
    corrected=N*sw/sqrt(n)*sqrt((N-n)/(N-1))
    add('mpu','De directe totaalschatting met haar standaardfout','finite-total','De standaardfout verschilt van de spreiding per post',[
        panel('Van post naar totaal',table(['Stap','Uitkomst'],[['s_w','€ 20'],['s_w / √100','€ 2 per gemiddeld bedrag'],['N × s_w / √100','€ 2.000'],['Met eindigheidscorrectie','€ '+num(corrected)]],'De vier verschillende grootheden'),'De eindigheidscorrectie is √(900/999) ≈ 0,9492.'),
        panel('Meer van de populatie gecontroleerd',plot('Eindigheidscorrectie',[('Factor',curve(lambda f:sqrt((N-N*f)/(N-1)),0,1),GREEN,False)],'Steekproeffractie n/N','Correctiefactor',(0,1,0,1.05)),'Bij n = N is de factor nul. Binnen deze steekproefformule resteert dan geen steekproefonzekerheid over het totaal.')],
        'De factor werkt op de standaardfout, niet op het geschatte gemiddelde of de spreiding van losse posten. Andere controleonzekerheden worden er niet mee gemeten.',
        'Uitwerking van het bestaande MPU-voorbeeld: N = 1.000, n = 100 en s_w = € 20.')
    pairs=[(20,18),(40,38),(60,58),(80,78)]
    add('verschil','Boekwaarde corrigeren met het gemiddelde controleverschil','absolute-errors','Een vaste absolute afwijking',[
        panel('Boekwaarde tegenover werkelijke waarde',plot('Vaste euro-afwijking',[('w = b − 2',pairs,GREEN,True),('w = b',[(0,0),(90,90)],PURPLE,False)],'Boekwaarde b (€)','Werkelijke waarde w (€)',(0,90,0,90)),'Iedere werkelijke waarde ligt € 2 onder de boekwaarde.'),
        panel('De verschillen tegenover de boekwaarde',plot('Absolute verschillen',[('e = b − w',[(b,b-w) for b,w in pairs],ORANGE,True)],'Boekwaarde b (€)','Verschil e (€)',(0,90,0,4),horizontal=[(2,'e = 2',ORANGE)]),'Voor N = 1.000 en B = € 50.000: Nē = € 2.000; Ŵ_V = € 48.000.')],
        'De verhouding verandert per post, maar de euro-afwijking blijft gelijk. Dit kleine beeld verduidelijkt het patroon; vier posten voldoen niet aan de cursusvoorwaarde voor toepassing van de schatter.')
    pairs=[(20,19),(40,38),(60,57),(80,76)]
    add('quotient','Een redelijk vaste verhouding gebruiken','ratio-pattern','Een vaste verhouding is geen vast euroverschil',[
        panel('Een lijn door de oorsprong',plot('Proportioneel verband',[('w = 0,95b',[(0,0),(90,85.5)],GREEN,False),('Gecontroleerde posten',pairs,GREEN,True),('w = b',[(0,0),(90,90)],PURPLE,False)],'Boekwaarde b (€)','Werkelijke waarde w (€)',(0,90,0,90)),'Σw / Σb = 190 / 200 = 0,95. Elke post behoudt dezelfde verhouding.'),
        panel('Euroverschillen nemen mee toe',plot('Proportionele controleverschillen',[('e = 0,05b',[(b,b-w) for b,w in pairs],ORANGE,True)],'Boekwaarde b (€)','Verschil e (€)',(0,90,0,5)),'Verschillen: € 1, € 2, € 3, € 4. Bij B = € 500.000 is de puntschatting 0,95B = € 475.000.')],
        'De richting van de fout is dezelfde, maar haar omvang schaalt mee met b. Het exacte patroon illustreert de ratio; toets de toepassingsvoorwaarden met de echte casusgegevens.')
    add('regressieschatter','De directe schatting aanpassen met de boekwaarde','regression-precision','Wat correlatie met de standaardfout doet',[
        panel('De resterende onzekerheidsfactor',plot('Factor bij correlatie',[('√(1 − R²)',curve(lambda r:sqrt(1-r*r),-1,1),GREEN,False)],'Correlatie R','Factor',( -1,1,0,1.05)),'R = 0 → factor 1; R = ±0,80 → factor 0,60. Het kwadraat maakt het teken hier irrelevant.'),
        panel('Dezelfde MPU-standaardfout als vertrekpunt',table(['R','Factor','s_R bij s_MPU = € 2.000'],[['0','1,00','€ 2.000'],['0,60','0,80','€ 1.600'],['0,80','0,60','€ 1.200']],'Alleen de factor verandert'),'Het kleinere berekende interval blijft afhankelijk van een bruikbaar model en passend foutpatroon.')],
        'Hier gaat het om precisie, niet om een hogere gekozen betrouwbaarheid. De correctie op het midden van de schatting wordt apart in het volgende voorbeeld uitgewerkt.')
    add('regressieschatter','De correctie verklaren en de helling uit productsommen berekenen','regression-correction','De bekende boekwaarde verschuift het midden',[
        panel('Steekproefgemiddelde tegenover populatiegemiddelde',plot('Regressiecorrectie per post',[('Lijn door (100;95)',[(95,90.345),(110,104.31)],GREEN,False),('Steekproef',[(100,95)],PURPLE,True),('Bij bekende gemiddelde boekwaarde',[(105,99.655)],ORANGE,True)],'Boekwaarde per post (€)','Verwachte werkelijke waarde (€)',(95,110,88,106)),'B/N = € 105 tegenover b̄ = € 100. b₁ = 0,931 geeft 0,931 × € 5 = € 4,655 per post.')],
        'Bij N = 1.000 is de totale correctie € 4.655. Ŵ verschuift van € 95.000 naar € 99.655. De bestaande tabel toont dezelfde stappen op totaalniveau.',
        'Dezelfde invoer als de bestaande correctietabel; de getekende lijn heeft helling 0,931 en gaat door (100;95).')
    factor=lambda n:1985*20/sqrt(n)*sqrt((1000-n)/999)
    add('steekproefomvang','Terugrekenen vanaf de toegestane marge','sample-margin','Meer controles verkleinen de marge',[
        panel('Marge bij een vaste spreiding en t',plot('Marge tegenover omvang',[('E(n)',curve(factor,25,1000),GREEN,False)],'Gecontroleerde posten n','Marge E (€)',(0,1000,0,8000)),'Voor dit beeld blijven N = 1.000, s = € 20 en t = 1,985 vast. Alleen n verandert.'),
        panel('Dezelfde curve in getallen',table(['n','E'],[[str(k),'€ '+num(factor(k))] for k in [25,100,400,1000]],'Controle van vier punten op de curve'),'Zonder eindigheidscorrectie geeft vier keer zoveel posten de helft van de marge. De correctie verlaagt de marge hier nog verder.')],
        'Deze gevoeligheidsvergelijking houdt t bewust vast. Bij een echte planning volg je de cursusroute en bepaal je de vereiste kritieke waarde en afronding.')
    add('stratificatie','De steekproef verdelen over strata','allocation','Evenredig en Neyman verdelen anders',[
        panel('Evenredig naar omvang',table(['Stratum','N_i','s_i','n_i'],[['1','500','10','50'],['2','500','30','50']],'N = 1.000; n = 100'),'De omvang is gelijk, dus ieder stratum krijgt 50 controles.'),
        panel('Neyman naar omvang én spreiding',table(['Stratum','N_i × s_i','Aandeel','n_i'],[['1','5.000','25%','25'],['2','15.000','75%','75']],'Dezelfde populatie en totale steekproef'),'Het tweede stratum heeft driemaal zoveel spreiding. Bij gelijke kosten geeft de Neyman-route 25 en 75 controles.')],
        'Hier is een vergelijkingstabel duidelijker dan een extra grafiek: je ziet rechtstreeks welke gewichten de twee formules gebruiken.')
    add('stratificatie','De schattingen en onzekerheid samenvoegen','strata-variance','Totalen optellen, onzekerheid via kwadraten combineren',[
        panel('De puntschattingen',table(['Deel','Geschat totaal'],[['Stratum 1','€ 40'],['Stratum 2','€ 60'],['Volledig gecontroleerde topgroep','€ 100'],['Samen','€ 200']],'Eigen vereenvoudigd voorbeeld'),'De topgroep draagt haar gecontroleerde werkelijke totaal één keer bij.'),
        panel('De standaardfouten',table(['Deel','s_i','s_i²'],[['Stratum 1','3','9'],['Stratum 2','4','16'],['Topgroep','0','0'],['Totaal','√25 = 5','25']],'Onafhankelijke steekproeven binnen strata'),'Niet 3 + 4 = 7, maar √(3² + 4²) = 5. Het totaal en de standaardfout hebben dezelfde oorspronkelijke eenheid.')],
        'De twee kolommen volgen verschillende regels. Een volledig gecontroleerd stratum voegt binnen deze schattingsmethode geen steekproefvariantie toe.')
    cumulative=[513513,1708623,3554809,5948884,7807828,9459065,11176794,12764976,13657560,14306659]
    add('stratificatie','De volledige collegestabel: cumulatieve boekwaarde en grenzen','cumulative-strata','De klassentabel als cumulatieve lijn',[
        panel('De boekwaarde stapelt op',plot('Cumulatieve boekwaarde',[('Cumulatieve som',[(0,0)]+[(i+1,v/1e6) for i,v in enumerate(cumulative)],GREEN,False)],'Bovengrens klasse (× € 1.000)','Cumulatief (miljoen €)',(0,10,0,15)),'Bij € 5.000 loopt de cumulatieve boekwaarde op tot € 7.807.828. De volledige klassentabel hierboven geeft de exacte waarden.')],
        'Dit beeld helpt klassengrenzen lokaliseren. Lees de uiteindelijke bedragen uit de tabel. De aparte topgroep ≥ € 10.000 is niet in deze lijn opgenomen.',
        'Slides: bestaande collegestabel met cumulatieve boekwaarden. De grafiek zet de tien cumulatieve bedragen om naar miljoenen euro.')
    xs=[1,2,3];ys=[3,4,8];fit=[2.5*x for x in xs];res=[y-f for y,f in zip(ys,fit)]
    add('regressielijn','De lijn berekenen, invullen en het residu lezen','line-residual','Eén dataset, twee manieren om de afwijkingen te zien',[
        panel('Waarnemingen en geschatte lijn',plot('Regressielijn en residuen',[('y',list(zip(xs,ys)),GREEN,True),('ŷ = 2,5x',[(0,0),(3.5,8.75)],PURPLE,False)],'x','y',(0,3.5,0,10),segments=[((x,f),(x,y),ORANGE) for x,y,f in zip(xs,ys,fit)]),'x̄ = 2; ȳ = 5; Sxx = 2; Sxy = 5.<br>b₁ = 5/2 = 2,5; b₀ = 5 − 2,5 × 2 = 0.'),
        panel('Residuen tegenover x',plot('Residuen van hetzelfde model',[('e = y − ŷ',list(zip(xs,res)),ORANGE,True)],'x','Residu e',(0,3.5,-1.5,1.5),horizontal=[(0,'nul',PURPLE)]),'Residuen: +0,5; −1; +0,5. Een punt boven de lijn heeft een positief residu.')],
        'Het residu is een verticale afstand op de y-schaal. Drie punten verduidelijken het rekenen; zij vormen geen voldoende onderbouwing voor modeldiagnoses.')
    add('regressielijn','Residuele variantie berekenen zonder ANOVA-tabel','residual-df','Dezelfde residuen, een andere noemer',[
        panel('Kwadratensom van de modelafwijkingen',table(['Residu','Kwadraat'],[['+0,5','0,25'],['−1','1'],['+0,5','0,25'],['SSE','1,50']],'De drie punten van het voorgaande beeld'),'De residuen horen bij de geschatte lijn, niet bij het gewone gemiddelde.'),
        panel('Vrijheidsgraden van het model',table(['Grootheid','Uitkomst'],[['n','3'],['Geschatte parameters','2: constante en helling'],['Residual df','3 − 2 = 1'],['MSE / s_e','1,50 / √1,50 ≈ 1,225']],'Enkelvoudige regressie met constante'),'s_e² = SSE/(n − 2). Dit is een rekenillustratie met bewust weinig waarnemingen.')],
        'De noemer past bij de parameters die zijn geschat. Gebruik bij k verklarende variabelen en een constante n − k − 1.')
    add('anova','De ANOVA-tabel en verklaarde variatie aanvullen','anova-decomposition','Drie afstanden bij één waarneming',[
        panel('Totale afwijking tegenover modelresidu',plot('Gemiddelde en geschatte lijn',[('y',list(zip(xs,ys)),GREEN,True),('ŷ',[(1,2.5),(3,7.5)],PURPLE,False)],'x','y',(0,3.5,0,10),horizontal=[(5,'ȳ = 5',ORANGE)]),'Voor x = 3: y − ȳ = 8 − 5 = 3; ŷ − ȳ = 7,5 − 5 = 2,5; y − ŷ = 0,5.'),
        panel('Kwadratensommen over alle punten',table(['Bron','SS'],[['Total: Σ(y − ȳ)²','14'],['Regression: Σ(ŷ − ȳ)²','12,50'],['Residual: Σ(y − ŷ)²','1,50'],['R² = 12,50/14','0,8929']],'Dezelfde drie punten als bij regressie'),'Bij kleinste kwadraten met constante: 14 = 12,50 + 1,50. R² betreft het verklaarde aandeel, niet het percentage juiste voorspellingen.')],
        'De kwadratensommen tellen over de hele dataset op. De gekwadrateerde afstanden van één afzonderlijk punt hoeven die optelregel niet te volgen.')
    add('toetsen','Eén coëfficiënt toetsen met t','t-decisions','Dezelfde toetsingsgrootheid, een andere hypothese',[
        tpanel('Tweezijdig bij α = 0,05',2.064,True,'Gegeven b₁ = 0,40 en s_b₁ = 0,20: t = 2,00. Bij df = 24 valt t binnen ±2,064: H₀ niet verwerpen.',2),
        tpanel('Positief eenzijdig bij α = 0,05',1.711,False,'Dezelfde t = 2,00 ligt boven 1,711: H₀ verwerpen ten gunste van een positief verband, als deze richting vooraf is gekozen.',2)],
        'De richting van de hypothese bepaalt het verwerpingsgebied. Kies niet achteraf eenzijdig om een gunstiger resultaat te krijgen.')
    fdf1,fdf2=2,24
    fdensity=lambda x:(fdf1/fdf2)**(fdf1/2)*x**(fdf1/2-1)/(gamma(fdf1/2)*gamma(fdf2/2)/gamma((fdf1+fdf2)/2))*(1+fdf1*x/fdf2)**(-(fdf1+fdf2)/2)
    fpoints=curve(fdensity,0,8,160);critical=12*(.05**(-1/12)-1)
    add('toetsen','Het gehele regressiemodel toetsen met F','global-f','De F-toets ligt in de rechterstaart',[
        panel('Globale modeltoets',plot('F-verdeling, 2 en 24 vrijheidsgraden',[('F(2;24)',fpoints,PURPLE,False)],'F','Kansdichtheid',(0,8,0,1.1),vertical=[(critical,'grens 3,403',ORANGE),(4,'F = 4',GREEN)],shade=[([p for p in fpoints if p[0]>=critical],ORANGE)]),'Gegeven MSR = 8 en MSE = 2: F = 4. Bij α = 0,05, ν₁ = 2 en ν₂ = 24 ligt dit in het verwerpingsgebied.')],
        'De globale toets beoordeelt de gezamenlijke bijdrage van de opgenomen x-variabelen. Zij maakt niet automatisch iedere afzonderlijke coëfficiënt significant.')
    slope,slopese=14.73939,1.88988
    add('toetsen','Toetsen en het interval voor de regressiehelling','slope-zero','Het interval koppelen aan de passende tweezijdige toets',[
        interval_panel('Het 95%-interval voor de helling',slope,2.306*slopese,(-1,22),'Marge = 2,306 × 1,88988 ≈ 4,3581. Nul ligt buiten het interval.',xlabel='Helling (kg/jaar)'),
        panel('De twee equivalente t-routes',table(['Route','Uitkomst'],[['b₁/s_b₁','14,73939/1,88988 ≈ 7,7991'],['r√(n−2)/√(1−r²)','Bij onafgeronde casusgegevens: dezelfde t'],['Vrijheidsgraden','10 − 2 = 8']],'Enkelvoudige regressie met constante'),'Deze overeenkomst geldt voor toetsen op nul in dit model. Een andere nulwaarde of een meervoudig model vraagt de bijpassende route.')],
        'Een tweezijdig 95%-interval dat nul uitsluit past bij verwerpen van H₀: β₁ = 0 op 5%. Het is niet dezelfde afleesregel als een eenzijdige toets.',
        'Dezelfde b₁, s_b₁ en t-waarde als de reeds uitgewerkte cursusopgave H9.1 en het hellingsinterval.')
    add('diagnostiek','Signalen voor uitbijters en invloedrijke waarnemingen berekenen','diagnostic-signals','Een y-uitbijter en invloed zijn verschillende signalen',[
        panel('Gestandaardiseerd residu bij n = 40',plot('Minimum en maximum gestandaardiseerd residu',[('Minimum / maximum',[(-1.352,.4),(2.490,.6)],GREEN,True)],'Gestandaardiseerd residu z','Signaalpositie',(-3,3,0,1),vertical=[(-2,'−2',ORANGE),(2,'+2',ORANGE)]),'Maximum 2,490 > 2. Minimum −1,352 blijft binnen de cursusgrens. Dit zijn geen t-waarden uit Coefficients.'),
        panel('Cook’s Distance uit dezelfde uitvoer',table(['Grootheid','Waarde'],[['Gemiddelde / s','0,030 / 0,060'],['Grens: gemiddelde + 3s','0,210'],['Maximum','0,313 > 0,210']],'De invloed apart beoordelen'),'Cook signaleert invloed op de schatting. Voor Mahalanobis: 0,975 + 3 × 0,815 = 3,420; maximum 2,388 blijft daaronder.')],
        'Onderzoek de betreffende waarnemingen. Een overschrijding geeft geen automatische opdracht om een post te verwijderen.',
        'De waarden uit de reeds opgenomen Residuals Statistics van de slides: n = 40, Std. Residual, Mahalanobis en Cook’s Distance.')
    add('diagnostiek','Autocorrelatie corrigeren en opnieuw controleren','autocorrelation','Residuen in tijdsvolgorde houden',[
        panel('Opeenvolgende residuen lijken op elkaar',plot('Positief samenhangende residuen',[('e_t',[(i+1,v) for i,v in enumerate([1,2,3,2,1,-1,-2,-3])],GREEN,False)],'Tijdstip t','Residu e',(1,8,-4,4),horizontal=[(0,'nul',PURPLE)]),'Σ(e_t − e_(t−1))² = 10; Σe_t² = 33; d = 10/33 ≈ 0,303.'),
        panel('De verschillen gebruiken maar n − 1 paren',table(['t','e_t','e_t − e_(t−1)'],[['1','1','geen voorganger'],['2','2','1'],['3','3','1'],['…','…','…'],['8','−3','−1']],'De teller van Durbin-Watson'),'Kleine opeenvolgende verschillen tegenover de totale residuele grootte leiden hier tot een lage d.')],
        'Dit is alleen een illustratieve residureeks, geen nieuw geschat model. Gebruik voor de formele conclusie de cursusvoorwaarden en grenzen uit de tabellenbundel. Controleer een aangepast model opnieuw.')
    residuals=[(i,(-1 if i%2 else 1)*i*.3) for i in range(1,9)]
    add('diagnostiek','Diagnostische toetsingsgrootheden zelf berekenen','absres','De absolute residuen maken toenemende spreiding zichtbaar',[
        panel('Residuen hebben beide tekens',plot('Residuen met toenemende grootte',[('e',residuals,GREEN,True)],'x','Residu e',(0,9,-3,3),horizontal=[(0,'nul',PURPLE)]),'De negatieve en positieve afwijkingen wisselen elkaar af, maar worden groter bij grotere x.'),
        panel('De absolute waarden houden de grootte vast',plot('Absolute residuen',[('|e|',[(x,abs(y)) for x,y in residuals],ORANGE,True)],'x','Absoluut residu |e|',(0,9,0,3)),'Na de absolute waarde zijn alle afstanden positief. De correlatie met x kan nu de samenhang met de foutgrootte zichtbaar maken.')],
        'Dit is een bewust eenvoudig patroon, geen echte diagnosetoets. De n = 22, r = 0,50 en t ≈ 2,582 in de bestaande uitwerking horen bij een andere, gegeven dataset.')
    add('diagnostiek','Durbin-Watson: van tabellenbundel naar beslissing','dw-regions','Twee onbesliste gebieden blijven zichtbaar',[
        panel('De vijf gebieden op één as',regions('Durbin-Watson bij n = 24, k = 1, α = 0,05',[0,1.27,1.45,2.55,2.73,4],['positief','onbeslist','geen signaal','onbeslist','negatief']),'d_L = 1,27; d_U = 1,45.<br>Spiegelen: 4 − d_U = 2,55; 4 − d_L = 2,73.'),
        panel('De gegeven afleesvarianten',table(['d','Gebied'],[['1,35','Onbeslist'],['1,90','Geen autocorrelatie aangetoond'],['2,80','Aanwijzing voor negatieve autocorrelatie']],'Dezelfde grenzen gebruiken'),'Kies bij ander n, k of α opnieuw de juiste tabelwaarden. Het middengebied bewijst geen perfecte onafhankelijkheid.')],
        'De kleine onbesliste intervallen zijn wezenlijk. Alleen kijken of d ongeveer 2 is, slaat deze tabelbeslissing over.',
        'Dezelfde grenzen en afleesvarianten als tabel 13.9 in de bestaande formule-uitleg: n = 24, k = 1, α = 0,05.')
    n=10;se=2;t=2.306;ssx=82.5
    xs=curve(lambda x:5+2*x,1,10,40)
    meanlo=[(x,y-t*se*sqrt(1/n+(x-5.5)**2/ssx)) for x,y in xs]
    meanhi=[(x,y+t*se*sqrt(1/n+(x-5.5)**2/ssx)) for x,y in xs]
    predlo=[(x,y-t*se*sqrt(1+1/n+(x-5.5)**2/ssx)) for x,y in xs]
    predhi=[(x,y+t*se*sqrt(1+1/n+(x-5.5)**2/ssx)) for x,y in xs]
    add('voorspellen','Een individueel voorspellingsinterval opbouwen','prediction-bands','De extra 1 onder de wortel maakt verschil',[
        panel('Onzekerheid over het gemiddelde',plot('Betrouwbaarheidsband voor gemiddelde y',[('ŷ = 5 + 2x',xs,GREEN,False)],'x','y',(1,10,0,32),bands=[(GREEN,meanlo,meanhi)]),'Bij x₀ = x̄ = 5,5 is de afstandsterm nul.<br>Marge = 2,306 × 2 × √0,1 ≈ 1,46.'),
        panel('Onzekerheid over één nieuwe y',plot('Individuele voorspellingsband',[('Dezelfde geschatte lijn',xs,GREEN,False)],'x','y',(1,10,0,32),bands=[(ORANGE,predlo,predhi)]),'Bij hetzelfde x₀: marge = 2,306 × 2 × √1,1 ≈ 4,84. De individuele spreiding blijft bestaan.')],
        'Beide grafieken hebben dezelfde assen en gegeven t. Naar de randen neemt de onzekerheid over de lijn toe. De formule veronderstelt een bruikbaar model.',
        'Eigen vergelijking bij enkelvoudige regressie: n = 10, x̄ = 5,5, Sxx = 82,5, s_e = 2 en gegeven t = 2,306.')
    add('meervoudig','Meerdere verklarende variabelen en dummy’s invullen','dummy-lines','Een dummy verschuift de voorspelling bij gelijke overige kenmerken',[
        panel('Twee categorieën binnen hetzelfde model',plot('Salaris bij gelijke overige kenmerken',[('Vrouw = 0',[(a,739.508+38.495*a+715.5+2237.947) for a in [20,60]],GREEN,False),('Vrouw = 1',[(a,739.508+38.495*a+715.5+2237.947-273.746) for a in [20,60]],PURPLE,False)],'Leeftijd (jaar)','Voorspeld salaris (€)',(20,60,3500,6300)),'Beoordeling = 10, leidinggevende = 1, HBO = WO = 0. Het verticale verschil blijft € 273,746.'),
        panel('Invullen bij leeftijd 50',table(['Dummy Vrouw','Voorspelling'],[['0','€ 5.617,705'],['1','€ 5.343,959'],['Verschil categorie 1 minus 0','−€ 273,746']],'Alle andere modelwaarden blijven gelijk'),'Een interactieterm zou het verschil met leeftijd kunnen laten veranderen. Zo’n term staat niet in dit model.')],
        'De getekende lijnen zijn een vergelijking binnen de gegeven regressie. Zij bewijzen geen causaal verschil.',
        'Dezelfde B-coëfficiënten en gekozen kenmerken als de salarisuitvoer van tentamen 17 maart 2025 in de formule-uitleg.')
    add('meervoudig','R² corrigeren voor het aantal verklarende variabelen','adjusted-r2','De correctie voor modelomvang zichtbaar maken',[
        panel('Dezelfde n en R², andere k',table(['n','R²','k','Adjusted R²'],[['30','0,80','1',num(1-.2*29/28,5)],['30','0,80','2',num(1-.2*29/27,5)],['30','0,80','5',num(1-.2*29/24,5)]],'Gevoeligheidsvergelijking van de formule'),'Bij gelijke fit betekent meer k een grotere correctie. De middelste rij is het bestaande voorbeeld.')],
        'Dit zijn formulevergelijkingen met R² vastgezet, geen claim dat drie werkelijk geschatte modellen identiek presteren. Bij echte modeluitbreiding kan R² stijgen en adjusted R² ook.')
    add('meervoudig','B en gestandaardiseerde Beta vergelijken','beta-units','Van oorspronkelijke eenheden naar standaardafwijkingen',[
        panel('De omzetting',table(['Invoer','Waarde'],[['B','2 y-eenheden per x-eenheid'],['s_x','3 x-eenheden'],['s_y','10 y-eenheden'],['Beta = B × s_x / s_y','0,60']],'Eigen schaalvoorbeeld'),'Eén standaardafwijking meer x is 3 eenheden: voorspelde y stijgt 2 × 3 = 6, dus 0,6 standaardafwijking van y.')],
        'Voorspellen met oorspronkelijke x doe je met B. Beta beschrijft een verandering op een gestandaardiseerde schaal binnen hetzelfde model.')
    for index,(title,key,original,transformed,xlab,ylab,eq,work) in enumerate([
        ('Een logaritmisch model: alleen x wordt getransformeerd','log-x',curve(lambda x:1+.5*log(x),.5,16),curve(lambda z:1+.5*z,log(.5),log(16)),'ln(x)','y','y = 1 + 0,5 ln(x)','x = 16 → ln(x) ≈ 2,7726 → ŷ ≈ 2,3863. Geen exp op de uitkomst.'),
        ('Een exponentieel model: terug van ln(y) naar y','log-y',curve(lambda x:exp(1+.5*x),0,4),curve(lambda x:1+.5*x,0,4),'x','ln(y)','ln(y) = 1 + 0,5x','x = 2 → voorspelde logwaarde 2 → exp(2) ≈ 7,3891.'),
        ('Een machtsmodel: zowel x als y heeft een logvorm','log-xy',curve(lambda x:exp(1)*sqrt(x),.5,16),curve(lambda z:1+.5*z,log(.5),log(16)),'ln(x)','ln(y)','ln(y) = 1 + 0,5 ln(x)','x = 16 → logwaarde ≈ 2,3863 → exp(2,3863) ≈ 10,8731.')]):
        add('transformaties',title,key,'Dezelfde modelvorm op twee schalen',[
            panel('Oorspronkelijke schaal',plot('Oorspronkelijke schaal: '+eq,[('Modelcurve',original,GREEN,False)],'x','y'),work),
            panel('Schaal waarop de lijn wordt geschat',plot('Getransformeerde schaal: '+eq,[('Lineaire vorm',transformed,PURPLE,False)],xlab,ylab),'Let op de asnamen. '+('Alleen x is getransformeerd; y blijft in zijn oorspronkelijke eenheid.' if index==0 else 'y is gelogaritmeerd: transformeer de volledige voorspelde logwaarde terug.'))],
            'De schalen verschillen bewust. Een rechte lijn op de getransformeerde schaal hoort bij een kromme op de oorspronkelijke schaal. De geldige oorspronkelijke log-invoer moet positief zijn.',
            'Visualisatie van de modelvergelijking en invoer die al in deze formulekaart staan; geen afzonderlijk geschatte dataset.')
    add('transformaties','Terugtransformeren: de hele logwaarde en beide intervalgrenzen','log-interval','Symmetrie op logschaal wordt asymmetrie op de oorspronkelijke schaal',[
        interval_panel('Op logschaal',3.2,.4,(2.6,3.8),'De gegeven grenzen 2,8 en 3,6 liggen beide 0,4 van 3,2.',xlabel='Logwaarde ln(y)'),
        panel('Na afzonderlijke terugtransformatie',interval_graphic('Getransformeerde intervalgrenzen',exp(3.2),exp(2.8),exp(3.6),(10,43),'Oorspronkelijke y-eenheid'),'exp(2,8) ≈ 16,4446; exp(3,2) ≈ 24,5325; exp(3,6) ≈ 36,5982.<br>Afstanden: circa 8,09 omlaag en 12,07 omhoog.')],
        'Gebruik de teruggetransformeerde grenzen. Een symmetrische ±-marge op de oorspronkelijke schaal zou hier de gegeven intervaltransformatie veranderen.',
        'Dezelfde logwaarde en grenzen als het bestaande rekenvoorbeeld. In het linkerbeeld worden log-eenheden gebruikt, geen euro.')
    add('modelbouw','Overlap tussen verklarende variabelen meten met VIF','vif','Een kleine tolerance geeft een grote VIF',[
        panel('De omgekeerde relatie',plot('VIF tegenover tolerance',[('VIF = 1/tolerance',curve(lambda v:1/v,.05,1),GREEN,False)],'Tolerance','VIF',(.05,1,0,21),horizontal=[(10,'cursusgrens 10',ORANGE)]),'Tolerance 0,08 → VIF 12,5. Tolerance 0,10 → VIF 10.'),
        panel('De hulpregressie herkennen',table(['R_i²','Tolerance','VIF'],[['0,50','0,50','2'],['0,90','0,10','10'],['0,92','0,08','12,5']],'x_i verklaard uit de overige x-variabelen'),'Het gaat om onderlinge overlap tussen verklarende variabelen; niet om R² van y in het hoofdmodel.')],
        'De cursusgrens is een onderzoekssignaal. Weglaten van een variabele vraagt een inhoudelijke keuze en opnieuw schatten.')
    add('modelbouw','Geneste modellen: de extra bijdrage zichtbaar berekenen','nested-model','De extra verklaring tegenover de resterende foutvariatie',[
        panel('Dezelfde totale variatie',table(['Model','SSR','SSE','Totaal'],[['Klein','800','200','1.000'],['Uitgebreid','850','150','1.000'],['Verschil','+50','−50','0']],'De bestaande casus: dezelfde 50 waarnemingen'),'De extra variabele verklaart 50 van de voorheen onverklaarde variatie.'),
        panel('De partiële F afmaken',table(['Stap','Waarde'],[['Extra variabelen','1'],['Residual df uitgebreid','50 − 3 − 1 = 46'],['MSE uitgebreid','150/46 ≈ 3,26087'],['F','50/3,26087 ≈ 15,3333']],'De noemer hoort bij het uitgebreide model'),'De verbetering wordt gedeeld door de foutvariatie na uitbreiding, niet door die van het kleine model.')],
        'De getallen horen bij dezelfde bestaande casus. Een andere dataset of andere y laat deze vergelijking niet toe. Significant verklaren vraagt daarnaast α en de juiste F-grens.')
    add('validatie','De voorspelfout op ongebruikte testgegevens meten','test-errors','De fouten op nieuwe gegevens zichtbaar maken',[
        panel('Werkelijk tegenover voorspeld',plot('Testwaarden en vaste voorspellingen',[('Werkelijk y',[(1,10),(2,14),(3,20)],GREEN,True),('Voorspeld ŷ',[(1,12),(2,13),(3,17)],PURPLE,True)],'Testwaarneming','y',(0,4,8,22),segments=[((1,10),(1,12),ORANGE),((2,14),(2,13),ORANGE),((3,20),(3,17),ORANGE)]),'Fouten y − ŷ: −2, +1, +3. De volledige foutentabel staat in het volgende voorbeeld.'),
        panel('Training tegenover test',table(['Gegevens','Gemiddelde kwadratische fout'],[['Training: gegeven MSE','1'],['Test: (4 + 1 + 9)/3','4,6667']],'Dezelfde eenheid: y²'),'De grotere testfout geeft aanleiding om de overdraagbaarheid van de trainingsprestatie te onderzoeken.')],
        'MSPR deelt door het aantal testwaarnemingen. Het model is op deze testset niet opnieuw geschat. Drie punten leveren geen universele afkeurgrens.',
        'Dezelfde testwaarden en voorspellingen als de bestaande MSPR-uitleg: y = 10, 14, 20; ŷ = 12, 13, 17.')
    return V


def enhance(lessons):
    by_id = {l['id']: l for l in lessons}
    for lesson in lessons:
        lesson['formulaVisuals'] = []
        for guide in lesson['formulaGuide']:
            guide['html'] = re.sub(r'<!-- formula-visual:start -->[\s\S]*?<!-- formula-visual:end -->', '', guide['html'])
    seen=set()
    for visual in visuals():
        lesson=by_id[visual['lesson']]
        guides=[g for g in lesson['formulaGuide'] if g['title']==visual['title']]
        if len(guides)!=1 or (lesson['id'],visual['key']) in seen:
            raise ValueError('Niet-unieke plaatsing: '+str(visual))
        seen.add((lesson['id'],visual['key']))
        guide=guides[0];html=guide['html']
        # Immediately after formula/symbol explanation, or after the existing
        # source table and before its exercise. Never duplicate the whole table.
        anchors=['<h3>Zo reken je stap voor stap</h3>','<div class="learning-application">','<h3>Zelf toepassen</h3>']
        at=next((html.index(a) for a in anchors if a in html),len(html))
        content='<!-- formula-visual:start -->'+visual['html']+'<!-- formula-visual:end -->'
        guide['html']=html[:at]+content+html[at:]
        lesson['formulaVisuals'].append(dict(key=visual['key'],title=visual['title']))
    return lessons
