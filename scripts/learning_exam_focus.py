"""Tentamenweging en herberekende college-8-casus, zonder bestaande antwoorden te wijzigen."""
import json
from pathlib import Path
from html import escape
from build_exam_points import analyze
from course_completion import table
from learning_regression import add, answer, ref

ROOT=Path(__file__).resolve().parents[1]

# Elke puntenrubriek heeft precies één eigenaar in deze leesroute. Voorkennis
# mag naar meerdere lessen verwijzen, maar krijgt daardoor geen extra punten.
ROUTES={
 'beginnen':([], 'Noodzakelijke basis', 'Bepaal populatie, steekproef, eenheid en het gevraagde totaal. Doe één uitgewerkt voorbeeld en ga daarna door naar de schatters. De punten voor deze basis zitten in de toepassingsvragen; er is geen afzonderlijke puntentoerekening.'),
 'rekenen':([], 'Noodzakelijke basis', 'Bereken gemiddelde en spreiding uit sommen en kwadratensommen. Onderscheid standaardafwijking van standaardfout. Controleer dit met één voorbeeld; oefen daarna de volledige intervalvragen waarin deze rekenstappen punten opleveren.'),
 'onzekerheid':([], 'Noodzakelijke basis', 'Vertaal een- of tweezijdige betrouwbaarheid naar de juiste staartkans. Lees de tabelrij, onderscheid marge en breedte en rond pas de eindgrenzen naar buiten af. Deze stappen zijn onderdeel van de puntenrijke schattingsvragen, geen extra puntenpot.'),
 'mpu':(['mpu','schatterkeuze'],'Volledige rekenroute', 'Kies de schatter uit het gegevenspatroon, bereken het werkelijke totaal en de standaardfout met eindigheidscorrectie. Werk een volledig interval uit en vergelijk de benodigde hulpinformatie met verschil-, quotiënt- en regressieschatter. De vergelijkingspunten zijn hier een eigen rubriek; zij worden bij de andere schatters niet herhaald.'),
 'verschil':(['verschil'],'Volledige rekenroute', 'Leg eerst het teken van de fout vast en controleer de toepassingsvoorwaarde. Bereken foutgemiddelde, foutspreiding, totaalschatting en interval zelfstandig. Oefen ook een grens voor de totale fout: dat is een andere gevraagde uitkomst dan een grens voor de werkelijke waarde.'),
 'quotient':(['quotient'],'Volledige rekenroute', 'Gebruik de verhouding van sommen, niet het gemiddelde van losse verhoudingen. Onderbouw evenredigheid en de cursusvoorwaarde voor het aantal fouten. Reken de resterende spreiding en het volledige interval uit. Een lagere historische frequentie vervangt deze complete vaardigheid niet.'),
 'regressieschatter':(['regressieschatter'],'Gerichte volledige toepassing', 'Deze schatter komt in twee tentamens voor, maar kan in één tentamen veel punten omvatten. Reken daarom één volledige casus uit: helling, correctie met het bekende boektotaal, onzekerheid en conclusie. Onderscheid dit hoofdstuk-8-doel van voorspellen van een losse waarneming met regressie.'),
 'steekproefomvang':(['omvang'],'Gerichte rekenvaardigheid', 'Werk één volledige uitbreiding uit, inclusief breedte naar marge, totale n naar boven afronden en bestaande controles aftrekken. Controleer of de gevraagde nauwkeurigheid haalbaar is. Extra softwarehandelingen zijn voor deze vragen niet nodig.'),
 'stratificatie':(['strata-ontwerp','strata-schatten'],'Uitgebreid oefenen', 'Oefen achtereenvolgens strata begrenzen, evenredige en Neyman-allocatie, puntschattingen optellen en varianties optellen. Een volledig gecontroleerd topstratum telt mee in het bedrag, maar heeft geen steekproefvariantie. Gebruik bij de evaluatie de werkelijk gegeven n per stratum, ook als de geplande allocatie anders was. Maak minstens één volledige open casus met een topstratum.'),
 'regressielijn':(['basis','correlatie'],'Basis met zelfstandige uitleg', 'Leg OLS en residuen zonder formuleblad in woorden uit. Lees richting, sterkte en significantie afzonderlijk. Een significante correlatie met y bewijst nog geen zelfstandige bijdrage na toevoeging van andere x-variabelen. Gebruik daarna de ANOVA- en toetsroutes.'),
 'anova':(['anova'],'Uitgebreid reconstrueren', 'Vul vanuit SS en vrijheidsgraden de hele ANOVA-tabel aan. Controleer de sommen, bereken MSE, residuele standaardafwijking, R² en F en leg elk getal in de casus uit. Alleen een getal zonder betekenis is geen volledige voorbereiding.'),
 'toetsen':(['toetsen'],'Uitgebreid oefenen', 'Werk zowel een gerichte t-toets als een globale F-toets uit. Benoem populatieparameter, hypothesen, α, vrijheidsgraden, kritiek gebied of p, beslissing en betekenis in de casus. Voor een eenzijdige toets moeten teken en richting kloppen. Herhaal de route met een dalend verband en een dummyverschil.'),
 'diagnostiek':(['groepen','tijd','uitbijters-x','uitbijters-y','invloed','normaliteit','hetero'],'Uitgebreid per diagnose', 'Gebruik bij iedere diagnose de juiste actuele modeluitvoer, grens, conclusie en remedie. Oefen x-uitbijters, y-uitbijters, Cook, normaliteit en heteroscedasticiteit apart én gecombineerd. Tijdsvertraging en autocorrelatie leveren hier alleen punten op voor het herkennen van toepasselijkheid; de uitwerking met tijdreeksen blijft naslag en actuele collegestof.'),
 'voorspellen':(['puntvoorspelling','interval'],'Volledige rekenroute', 'Geef eerst de regressievergelijking, vul de kenmerken correct in en controleer extrapolatie. Onderscheid het gemiddelde en een nieuwe individuele waarneming: alleen de laatste heeft de extra 1 onder de wortel. Oefen ook terugtransformeren en leg uit waarom een interval uit een ongeschikt model geen betrouwbare controlegrens is.'),
 'meervoudig':(['coefficienten'],'Interpretatie als noodzakelijke verbinding', 'Leg B, Beta en dummyreferenties uit. Vergelijk personen of objecten terwijl de andere kenmerken gelijk blijven. De losse interpretatiepunten zijn beperkt, maar deze uitleg is noodzakelijk voor toetsen, modelbouw en college 8; werk daarom één volledige meervoudige casus uit.'),
 'transformaties':(['transformaties'],'Gerichte modellenvergelijking', 'Herken lineair, logaritmisch, exponentieel en machtsmodel. Noteer of x, y of beide zijn getransformeerd en reken op de juiste schaal terug. Een getransformeerde y verandert alle relaties; vergelijk geen R² alsof y en ln(y) dezelfde uitkomst zijn. De uitgesloten inverse functie blijft buiten de kern.'),
 'modelbouw':(['modelvergelijking','multicol','selectie'],'Uitgebreid selecteren en beoordelen', 'Beoordeel VIF, selectiecriteria, adjusted R² en spaarzaamheid afzonderlijk. Verwijder bij backward steeds één kandidaat en schat opnieuw. Leg uit waarom meer significantie of meer verklaarde variatie geen bewijs is dat alle modelvoorwaarden goed zijn. Vergelijk alleen dezelfde waarnemingen en y-schaal rechtstreeks.'),
 'validatie':(['validatie'],'Compacte kern met naslag', 'De negen tentamens kennen geen afzonderlijke MSPR/testset-vraag. Het huidige programma bevat validatie wel. Behoud daarom de kern: training en test scheiden, het vaste model op de test toepassen, MSPR berekenen en met passende MSE vergelijken. Eén volledig voorbeeld volstaat als basis; de aanvullende uitleg blijft beschikbaar.'),
 'tentamen':(['gezamenlijk'],'Gecombineerd zelfstandig toepassen', 'Werk volledige bronvragen uit voordat je het antwoordmodel opent. Gebruik de puntenweging om je zwakke routes te kiezen. Gezamenlijke rubricpunten, zoals één punt voor twee sets hypothesen, blijven hieronder afzonderlijk zichtbaar en worden niet aan twee onderwerpen tegelijk toegekend.'),
}


def num(value, digits=3):
    return f'{value:,.{digits}f}'.replace(',','_').replace('.',',').replace('_','.')


def pvalue(value):
    return '&lt; 0,001' if value < .001 else num(value)


def enhance(lessons, sources):
    # Nieuwe blokken hebben eigen bronlinks. De bestaande algemene lesbronnen
    # voeden ook de opgeslagen oefenvragen en blijven daarom exact gelijk.
    original_refs={l['id']:list(l['refs']) for l in lessons}
    point_data=analyze()
    topics={t['id']:t for t in point_data['topics']}
    assert sorted(t for ids,_,_ in ROUTES.values() for t in ids)==sorted(topics)
    for lesson in lessons:
        ids, depth, route=ROUTES[lesson['id']]
        body=f'<p><strong>{depth}.</strong> {route}</p>'
        if ids:
            rows=[]
            for key in ids:
                t=topics[key]
                rows.append([t['label'],f"{t['exams']}/9",str(t['subquestions']),str(t['points']),num(t['mean'],2),num(t['share'],2)+'%',f"{t['minimum']}–{t['maximum']}",num(t['recentMean'],2)])
            body+=table('Historische punten, geen voorspelling',['Onderwerp','Tentamens','Deelvragen','Totaal /900','Gem. /100','Aandeel','Min–max','Recent gem. /100'],rows)
            body+='<p class="note">Gemiddelden omvatten nullen. Recent: maart 2024, oktober 2024 en maart 2025. '
            body+='Een oorspronkelijke deelvraag kan meerdere onderwerpen bevatten; haar punten zijn gesplitst volgens de normering. '
            body+='Geïntegreerde stratificatievragen tellen bij stratificatie, zonder dezelfde punten bij de schatter te herhalen. '
            body+='Niet aantoonbaar te splitsen punten staan uitsluitend in de gezamenlijke rubriek van de tentamenles.</p>'
        body+='<p><a href="docs/tentamen-puntenanalyse-2026-10-25.md" target="_blank" rel="noopener">Bekijk alle tentamens, spreiding en puntentoerekeningen met bronpagina’s</a>.</p>'
        add(lesson,sources,'Studieroute en puntengewicht',body,[ref('programma',4,'Onderwijsprogramma: toetsing en afbakening, PDF 4–5')],first=True)

    L={l['id']:l for l in lessons}
    data=json.loads((ROOT/'data/college8-analysis.json').read_text(encoding='utf8'))
    models={m['name']:m for m in data['models']}
    body='<p>De volgende tabellen zijn <strong>eigen herberekeningen uit het oorspronkelijke Excelblad College8</strong>. '
    body+='Het blad bevat 162 auto’s: 81 benzine, 41 diesel en 40 elektrisch. Alle gegevens zijn compleet en alle verkoopwaarden zijn positief. '
    body+='De vijf regressies gebruiken de variabelen uit de oorspronkelijke eindtabellen, met constante. '
    body+='De gepubliceerde coëfficiënten zijn binnen hun afronding gereproduceerd. Dit is geen nieuwe SPSS-uitvoering of reconstructie van alle selectiestappen.</p>'
    body+=table('Dezelfde brondata, vijf verschillende modellen',['Model','n','k zonder constante','n − k − 1','R²','Adjusted R²','sₑ in euro','n ≥ 10k'],[
        [name,str(m['n']),str(m['k']),str(m['df']),num(m['r2']),num(m['adjustedR2']),num(m['se'],2),'Ja' if m['rule10k'] else f"Nee: {m['n']} &lt; {10*m['k']}"] for name,m in models.items()])
    body+='<p>De enkelvoudige lijn verklaart ongeveer 61,8% van de variatie in verkoopwaarde. Het gezamenlijke model heeft een hogere adjusted R² '
    body+='op dezelfde 162 auto’s. De drie groepsscores hebben verschillende y-variaties en verschillende waarnemingen als basis; '
    body+='je mag 0,919 voor benzine dus niet als bewijs gebruiken dat opsplitsen voor alle auto’s beter voorspelt. '
    body+='Alle drie groepsmodellen blijven onder de cursusvuistregel n ≥ 10k. Dat is een waarschuwing voor overfitting, geen wiskundig bewijs dat iedere coëfficiënt onjuist is.</p>'
    body+='<p>Een dummy voor diesel verschuift in het gezamenlijke model alleen het niveau. De hellingen blijven gelijk voor de groepen. '
    body+='Afzonderlijke modellen laten ook de hellingen verschillen. Een gezamenlijk model met passende interacties kan eveneens verschillende hellingen toestaan; '
    body+='dat is een inhoudelijke vervolgmogelijkheid, geen hier berekende of goedgekeurde verbetering.</p>'
    add(L['tentamen'],sources,'College 8: brondata en modelkeuze',body,[ref('spss',37,'College 8: opdracht, PDF 37'),ref('spss',45,'Gezamenlijke en groepsmodellen, PDF 45–47')])

    for name,model in models.items():
        d=model['diagnostics']
        body='<p>Gebruik steeds de residuen van <strong>dit</strong> model. De onderstaande getallen zijn berekend met alle waarnemingen uit deze groep; er zijn geen auto’s verwijderd.</p>'
        a=model['anova']
        body+=table('ANOVA van '+name,['Variatiebron','SS','df','MS','F','p'],[
            ['Regressie',num(a['ssRegression'],2),str(model['k']),num(a['msRegression'],2),num(a['f']),pvalue(a['p'])],
            ['Residu',num(a['ssResidual'],2),str(model['df']),num(a['msResidual'],2),'',''],
            ['Totaal',num(a['ssTotal'],2),str(model['n']-1),'','','']])
        body+=f"<p>Controle: SS totaal = SS regressie + SS residu. MSE = SS residu / {model['df']}; "
        body+=f"de wortel uit MSE is sₑ = € {num(model['se'],2)}. R² = SS regressie / SS totaal = {num(model['r2'])}. "
        body+='De globale F-toets toetst H₀: alle opgenomen hellingscoëfficiënten zijn nul, tegen H₁: minstens één is niet nul. '
        body+='Bij α = 0,05 verwerpen we H₀. Dat toont een gezamenlijk verband, maar bewijst niet dat het model aan alle voorwaarden voldoet.</p>'
        body+=table('Coëfficiënten van '+name,['Term','B','SE(B)','t','p (tweezijdig)','VIF'],[
            [escape(c['term']),num(c['b']),num(c['se']),num(c['t']),pvalue(c['p']),num(c['vif']) if c['vif'] is not None else 'n.v.t.'] for c in model['coefficients']])
        body+='<p>De voorspelling is de constante plus de som van B × kenmerk. Een dummy is 1 als de genoemde categorie geldt en anders 0. '
        body+='Een B bij kilometerstand is euro per kilometer, bij bouwjaar euro per later bouwjaar en bij een rapportscoreschaal euro per extra scorepunt, bij gelijkblijvende andere kenmerken.</p>'
        asset=f'assets/learning/college8-{name.lower()}.png'
        body+=f'<figure class="learning-figure"><a href="{asset}" target="_blank" rel="noopener"><img src="{asset}" loading="lazy" style="max-width:100%;height:auto" alt="Werkelijke tegen voorspelde waarde en residuen voor {name}; gemarkeerde auto’s staan ook in de diagnosetabel."></a><figcaption>Eigen figuren uit College8. De diagonale lijn geeft werkelijke waarde = voorspelling; de tweede grafiek toont residuen en auto-nummers voor nader onderzoek. Open voor vergroting.</figcaption></figure>'
        listed=lambda xs:', '.join(map(str,xs)) if xs else 'Geen'
        body+=table('Diagnoses met de cursusgrenzen',['Controle','Uitkomst','Grens','Auto-nummers voor nader onderzoek'],[
            ['Uitbijters y',f"z min {num(d['zMin'])}; max {num(d['zMax'])}",f"±{d['zLimit']}",listed(d['zCandidates'])],
            ['Uitbijters x',f"MD max {num(d['mdMax'])}",f"Gemiddelde + 3s = {num(d['mdLimit'])}",listed(d['mdCandidates'])],
            ['Invloed',f"Cook max {num(d['cookMax'])}",f"Gemiddelde + 3s = {num(d['cookLimit'])}",listed(d['cookCandidates'])],
            ['Multicollineariteit',f"VIF max {num(d['vifMax'])}",'10','Geen overschrijding'],
        ])
        body+=f"<p><strong>Normaliteit:</strong> {escape(d['normalityTest'])}, toetsingsgrootheid {num(d['normalityStatistic'])}, p {pvalue(d['normalityP'])}. "
        body+='Bij α = 0,05 verwerpen we H₀ van normale residuen.' if d['normalityP']<.05 else 'Bij α = 0,05 verwerpen we H₀ van normale residuen niet. Dit bewijst niet dat de verdeling exact normaal is.'
        body+='</p>'
        if model['n']>50:
            body+='<p class="note">De KS-p is een Lilliefors-benadering uit de herberekening. De SPSS-tabel kan p boven 0,200 afkappen als 0,200*. '
            body+='Bij het enkelvoudige model is 0,059 de Statistic; de oorspronkelijke tabel heeft Sig. 0,200*. De tekst onder die brontabel verwisselt die kolommen.</p>'
        body+=table('Heteroscedasticiteit: Pearsoncorrelatie van ABSRES met elke opgenomen x',['Verklarende variabele','r','p tweezijdig','Signaal bij 0,05'],[
            [escape(h['term']),num(h['r']),pvalue(h['p']),'Ja' if h['p']<.05 else 'Nee'] for h in d['heteroscedasticity']])
        body+='<p>H₀: geen correlatie tussen de absolute residuen en de betreffende x. Een significante samenhang is volgens de cursus een signaal van heteroscedasticiteit. '
        body+='Dit zijn afzonderlijke verkennende controles, zonder correctie voor meerdere toetsen. Ook een niet-significante correlatie sluit andere vormen van heteroscedasticiteit niet uit. '
        body+='De grafiek van residuen tegen voorspelde waarde en de inhoud van de kenmerken blijven nodig.</p>'
        body+='<p><strong>Vervolgactie:</strong> onderzoek gemarkeerde auto’s op invoerfouten of bijzondere omstandigheden. De dataset geeft geen vastgestelde fout die automatisch verwijderen rechtvaardigt. '
        body+='Behoud ze in deze analyse. Alle vijf modellen geven signalen van heteroscedasticiteit. Onderzoek daarom een beter passende modelvorm of weging en herhaal daarna de diagnoses. '
        body+='Een hoge R² en VIF onder 10 lossen ongelijke residuspreiding niet op. Tijdsvertraging en autocorrelatie passen niet bij deze crosssectie; Auto is een identificatie, geen tijdsvolgorde.</p>'
        if name=='Electrisch':
            body+='<p>De bron houdt Kilometerstand (p ≈ 0,085) en Aantal opknapbeurten (p ≈ 0,078) in dit eindmodel. '
            body+='Die zijn bij een tweezijdige α van 0,05 niet significant. De getoonde eindselectie is dus niet hetzelfde als backward met een verwijderingsgrens van 0,05. '
            body+='Vermeld het gekozen criterium; bij een andere grens moet het model opnieuw worden geschat. Een variabele wegstrepen terwijl de andere B’s gelijk blijven is onjuist.</p>'
        add(L['tentamen'],sources,'College 8: volledige uitwerking '+name,body,[ref('spss',39,'Enkelvoudige diagnoses, PDF 39–42'),ref('spss',45,'Gepubliceerde eindmodellen, PDF 45–47'),ref('formules',3,'Cursusgrenzen voor regressiediagnostiek')])

    body='<p>Werk eerst zelf. Gebruik de tabellen hierboven als uitvoer, net als bij een tentamen. Schrijf bij ieder antwoord de gebruikte modelnaam op.</p>'
    body+=answer('1. Wat betekent B = −2.879,450 bij Aandrijving=Diesel in het gezamenlijke model?',
        '<p>Bij gelijk bouwjaar, kilometerstand, nieuwprijs nu, aantal schademeldingen, lakscore en motorscore is de voorspelde verkoopwaarde van een dieselauto € 2.879,45 lager. '
        'De referentie bestaat in dit geselecteerde model uit benzine en elektrisch samen. Het is geen uitspraak dat diesel de waardedaling veroorzaakt en ook geen afzonderlijke helling voor diesel.</p>')
    body+=answer('2. Een benzineauto heeft 10.000 km meer gereden. Hoeveel verandert de voorspelling als alle andere kenmerken gelijk blijven?',
        '<p>Gebruik de B uit het benzinemodel, niet die uit het gezamenlijke model. Met de bronafronding −0,019 wordt het verschil −0,019 × 10.000 = −€ 190. '
        'Met de ongeronde herberekening is de uitkomst circa −€ '+num(abs(models['Benzine']['coefficients'][1]['b'])*10000,2)+'. '
        'Het verschil ontstaat door afronding van een kleine coëfficiënt die met een groot aantal kilometers wordt vermenigvuldigd.</p>')
    body+=answer('3. Is het benzinemodel met adjusted R² 0,919 gereed voor een betrouwbare controleverwachting?',
        '<p>Nee. Het model heeft 81 waarnemingen en 9 verklarende variabelen: 81 &lt; 90. Er zijn potentiële uitbijters en invloedrijke auto’s, '
        'en significante ABSRES-verbanden. Normaliteit wordt niet verworpen en VIF blijft onder 10, maar dat neemt de overige signalen niet weg. '
        'Onderzoek de waarnemingen en modelvorm, schat een onderbouwd aangepast model en beoordeel het daarna op onafhankelijke gegevens.</p>')
    body+=answer('4. Welke vergelijking onderbouwt de keuze tussen één model en drie groepsmodellen?',
        '<p>Vergelijk voorspelfouten op dezelfde onafhankelijke auto’s en dezelfde euroschaal. Pas bij elk testobject het juiste groepsmodel toe en aggregeer de kwadratische fouten over alle testauto’s. '
        'Gebruik geen gemiddelde van drie R²-waarden en kies niet uitsluitend de hoogste groeps-R². De beschikbare bron bevat geen onafhankelijke testset; een werkelijk berekende MSPR wordt hier daarom niet voorgesteld.</p>')
    body+=answer('5. Waarom is ln(Kilometerstand) iets anders dan een exponentieel model voor verkoopwaarde?',
        '<p>Met Verkoopwaarde = b₀ + b₁ ln(Kilometerstand) is alleen x getransformeerd: een logaritmisch model. '
        'Bij een exponentieel model wordt ln(Verkoopwaarde) lineair in x gemaakt. De bron noemt een mogelijk exponentieel verband en maakt daarna LnKmStand; '
        'benoem de werkelijk gebruikte modelvorm. De gepubliceerde eindtabellen gebruiken Kilometerstand zonder logaritme.</p>')
    add(L['tentamen'],sources,'College 8: zelfstandig onderbouwen en afronden',body,[ref('spss',44,'Transformatie en modelkeuze, PDF 44–47'),ref('attentie',9,'Validatie en MSPR, PDF 9')])
    for lesson in lessons:
        lesson['refs']=original_refs[lesson['id']]
