"""Brongebonden aanvullingen na de boekcontrole van 18 september 2026.

Wordt na typografie/formulegidsen toegepast, zodat bestaande vraag-ID's behouden blijven.
Boekpaginering: oorspronkelijke PDF-pagina = gedrukte pagina + 18.
"""
from html import escape
import presentation as p

BOOK_PARTS = {
    'boek-basis': (110,117), 'boek-h8a': (219,228), 'boek-h8b': (229,238),
    'boek-h8c': (239,250), 'boek-h9a': (251,266), 'boek-h9b': (267,277),
    'boek-h9c': (278,290), 'boek-h9d': (291,304), 'boek-h10a': (305,318),
    'boek-h10b': (321,331), 'boek-h10c': (332,341),
}
BOOK_LESSONS = {
    'beginnen': ('boek-h8a',201), 'rekenen': ('boek-h8a',205),
    'onzekerheid': ('boek-basis',92), 'mpu': ('boek-h8a',203),
    'verschil': ('boek-h8a',207), 'quotient': ('boek-h8b',211),
    'regressieschatter': ('boek-h8b',213), 'steekproefomvang': ('boek-h8c',230),
    'stratificatie': ('boek-h8c',221), 'regressielijn': ('boek-h9a',238),
    'anova': ('boek-h9a',248), 'toetsen': ('boek-h9b',252),
    'diagnostiek': ('boek-h9c',260), 'voorspellen': ('boek-h9d',283),
    'meervoudig': ('boek-h10a',290), 'transformaties': ('boek-h10a',292),
    'modelbouw': ('boek-h10b',305),
}

def bookref(source, printed):
    first,last=BOOK_PARTS[source]
    return dict(source=source,page=printed+18-first+1,
                locator=f'Boek p. {printed}; oorspronkelijke PDF p. {printed+18}; uitsnede p. {printed+18-first+1}')

def formula(label, expr):
    return ('<div class="formula formula-typeset"><div class="formula-row">'
            f'<span class="formula-label">{escape(label)}</span><div class="math-scroll" tabindex="0" '
            f'role="region" aria-label="Formule: {escape(label)}">{p.mathml(expr)}</div></div></div>')

def table(caption, heads, rows):
    return '<table><caption>'+caption+'</caption><thead><tr>'+''.join('<th scope="col">'+x+'</th>' for x in heads)+'</tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+str(x)+'</td>' for x in row)+'</tr>' for row in rows)+'</tbody></table>'

def steps(items):
    return '<ol>'+''.join('<li>'+x+'</li>' for x in items)+'</ol>'

def add(lesson,title,body,guide=True):
    lesson['sections'].append(dict(title=title,html=body))
    if guide: lesson['formulaGuide'].append(dict(title=title,html=body))

def enhance(lessons,sources):
    L={x['id']:x for x in lessons}
    for source,(first,last) in BOOK_PARTS.items():
        file=source+'.pdf'
        sources[source]=dict(title=f'Statistiek voor audit en controlling, boek p. {first-18}–{last-18}',file=file,
                             original='sra-interactief/source-excerpts/'+file)
    sources['set-basis']=dict(title='SET-attentiepunten: noodzakelijke basis voor SRA (oorspronkelijke PDF p. 3–7)',
        file='set-basis.pdf',original='sra-interactief/source-excerpts/set-basis.pdf')
    for slug,(source,printed) in BOOK_LESSONS.items():
        L[slug]['refs'].append(bookref(source,printed))
    # Deze twee lessen zijn gebaseerd op aanvullende cursusinhoud, niet op een verzonnen boekpassage.
    L['validatie']['sections'].append(dict(title='Herkomst van validatie',html='<p>De MSPR-validatie staat in de aanvullende attentiepunten, PDF-pagina 8, en niet in het boek. Gebruik deze cursusaanvulling naast hoofdstuk 10.</p>'))
    L['tentamen']['sections'][1]['title']='Een waarde schatten: werkvolgorde'
    L['tentamen']['sections'][2]['title']='Een regressieonderzoek beoordelen: werkvolgorde'
    for lesson in lessons:
        for section in lesson['sections']+lesson['formulaGuide']:
            section['html']=section['html'].replace('Voor het model moeten de gelogaritmeerde waarden positief zijn.',
                'De oorspronkelijke waarden x en y waarop je een logaritme toepast moeten positief zijn. De logwaarden zelf mogen nul of negatief zijn: ln(1) = 0 en ln(0,5) ≈ −0,693.')
    L['rekenen']['prerequisites'][1]='Gemiddelde en spreiding uit SET worden hier opgefrist; elementaire rekenbewerkingen worden bekend verondersteld.'
    set_blocks={
      'beginnen': ('SET-opfrisser: populatie en een eerlijke steekproef', '<p>Een parameter zoals μ beschrijft de populatie; een steekproefgemiddelde schat die parameter. Een aselecte selectie geeft de posten de voorgeschreven trekkingskansen. Een grotere selectieve steekproef kan nog steeds systematisch verkeerd uitkomen. In SRA bepaal je eerst welke populatie en periode je onderzoekt en welke selectie bij de uitspraak past.</p>',1),
      'rekenen': ('SET-opfrisser: spreiding tegenover onzekerheid', '<p>De standaardafwijking s beschrijft verschillen tussen losse waarnemingen. De standaardfout s/√n beschrijft de onzekerheid van het steekproefgemiddelde. Voor een populatietotaal vermenigvuldig je die standaardfout met N. Bij trekken zonder teruglegging kan de eindigheidscorrectie nodig zijn. De variantie heeft gekwadrateerde eenheden; de standaardafwijking en standaardfout hebben de eenheid van de bijbehorende grootheid.</p>',1),
      'onzekerheid': ('SET-opfrisser: betrouwbaarheid, staarten en tabellen', '<p>Bij 95% tweezijdige betrouwbaarheid is α = 0,05 en ligt 0,025 in iedere staart. Bij een eenzijdige bovengrens ligt de volledige α = 0,05 in de rechterstaart. Betrouwbaarheid gaat over de dekking van de methode bij herhaalde steekproeven, niet over 95% van de losse waarnemingen.</p><p>De SET-attentiepunten gebruiken bij n/N &lt; 0,10 vaak geen eindigheidscorrectie en bij df &gt; 200 de oneindigrij. Het actuele SRA-formuleblad en de SRA-opgave zijn hier leidend: schatters bevatten de eindigheidscorrectie en regressie gebruikt eigen vrijheidsgraden. Neem een SET-vuistregel dus niet automatisch over.</p><h3>Voorbeeld: alleen een bovengrens</h3>'+steps(['Gegeven: gemiddelde 80, standaardfout 2, df = 24. Gevraagd: een 95%-bovengrens voor het populatiegemiddelde.','Gebruik de eenzijdige tabelwaarde t = 1,711, dus geen 0,025-staart.','Bovengrens = 80 + 1,711 × 2 = 83,422. Het eenzijdige interval is (−∞; 83,422].','Bij een eenzijdige ondergrens gebruik je 80 − 1,711 × 2 = 76,578 en [76,578; ∞). Een tweezijdig 95%-interval gebruikt een andere t-waarde.']),1),
      'toetsen': ('SET-opfrisser: hypothesen en foutkansen', '<p>Formuleer H₀ en H₁ over een populatieparameter. Bij een positief regressieverband: H₀: β₁ ≤ 0, H₁: β₁ &gt; 0. Het α-risico is het ten onrechte verwerpen van een ware H₀. Het β-risico is het niet verwerpen van een onware H₀. Niet verwerpen betekent dat het bewijs onvoldoende is, niet dat H₀ bewezen is.</p><p>Schrijf steeds parameter, hypothesen, toetsingsgrootheid, grens of p-waarde en conclusie in de context op. Voor het gemiddelde gebruikte SET vaak n − 1 vrijheidsgraden; bij enkelvoudige regressie zijn dat n − 2 en bij meervoudige regressie n − k − 1.</p>',3),
    }
    for slug,(title,body,page) in set_blocks.items():
        L[slug]['sections'].insert(0,dict(title=title,html=body))
        L[slug]['refs'].append(dict(source='set-basis',page=page,locator=f'SET-attentiepunten, oorspronkelijke PDF p. {page+2}; uitsnede p. {page}'))

    add(L['mpu'],'Wanneer een grote steekproef toch onvoldoende kan zijn',
        '<p>n ≥ 100 is de cursusvuistregel voor de normale benadering, geen garantie voor iedere populatie. Het boek waarschuwt dat extreem scheve verdelingen een grotere steekproef kunnen vragen. Beoordeel daarom selectie, verdeling en opvallende posten voordat je het interval interpreteert. Zie boek p. 92, voetnoot 2.</p>',False)
    L['mpu']['refs'].append(bookref('boek-basis',92))
    add(L['regressieschatter'],'Een smaller interval moet ook geldig zijn',
        '<p>De factor √(1 − R²) verkleint de berekende standaardfout, maar maakt een ongeschikte foutverdeling niet geschikt. Het boek bespreekt dat het interval bij ongunstige foutpatronen de werkelijke waarde te vaak kan missen. Kies dus op grond van het verband en de foutstructuur, en controleer de voorwaarden. Een smaller interval is meer berekende precisie, geen hogere gekozen betrouwbaarheid.</p>')
    L['regressieschatter']['refs'].append(bookref('boek-h8b',216))

    boundary='<p><strong>Stratificatie</strong> bepaalt de groepsgrenzen; <strong>allocatie</strong> verdeelt daarna de controles over die groepen. Haal het volledig te controleren topstratum eerst uit de berekening.</p><h3>Cursusopgave H8.8a: cumulatieve boekwaarde</h3>'+steps([
        'Van € 16.647.206 totale boekwaarde gaat € 775.078 naar het 100%-stratum. Er resteert € 15.872.128 voor vier strata.',
        'Doel per stratum: 15.872.128 / 4 = € 3.968.032. Cumulatieve doelen: € 3.968.032, € 7.936.064 en € 11.904.096.',
        'Vergelijk ieder doel met de cumulatieve bedragen op bestaande klassegrenzen. De uitwerking kiest de dichtstbijzijnde beschikbare grenzen; je splitst geen klasse met verzonnen individuele gegevens.',
        'De bedragen € 3.405.577, € 7.496.144 en € 12.137.408 horen bij bovengrenzen € 1.600, € 3.000 en € 5.000. De laatste grens is € 10.000.'])
    boundary+=table('Cumulatieve boekwaarde: doel en gekozen grens',['Doel','Cumulatief gekozen','Bovengrens'],[['€ 3.968.032','€ 3.405.577','€ 1.600'],['€ 7.936.064','€ 7.496.144','€ 3.000'],['€ 11.904.096','€ 12.137.408','€ 5.000']])
    boundary+='<h3>Cursusopgave H8.8b: cumulatieve wortel</h3><p>Bereken per klasse de wortel van <strong>klassebreedte × frequentie</strong> en tel deze wortels cumulatief op. Neem niet de wortel van de totale cumulatieve frequentie. Bij ongelijke klassen moet de breedte meetellen.</p>'
    boundary+=table('Begin van de oorspronkelijke berekening',['Klasse','Breedte','Frequentie','√(breedte × frequentie)','Cumulatief'],[['0–400',400,772,'555,70','555,70'],['400–800',400,1016,'637,50','1.193,20'],['800–1.200',400,1408,'750,47','1.943,67']])
    boundary+=steps(['Voor alle elf klassen samen is het worteltotaal 7.208,79. Doel per stratum: 7.208,79 / 4 ≈ 1.802,20.',
        'Vergelijk cumulatieve doelen 1.802,20, 3.604,40 en 5.406,60 met de beschikbare klassegrenzen.',
        'De uitwerking kiest 1.943,67, 3.671,02 en 5.618,65. Dat geeft bovengrenzen € 1.200, € 2.500, € 5.000 en € 10.000.',
        'Gebruik de nieuwe groepsomvangen 3.196, 2.329, 1.587 en 547 pas daarna voor de allocatie van 300 controles. De 54 topstratumposten komen daar apart bij.'])
    boundary+='<p class="note">Bron: opgavenbundel PDF 7 en uitwerkingenbundel PDF 10–11. De twee methoden verdelen verschillende grootheden en hoeven dus niet dezelfde grenzen op te leveren. In boektabel 8.6 is 2.500 × 23 gelijk aan 57.500; de gedrukte 75.500 is een drukfout.</p>'
    add(L['stratificatie'],'Stratagrenzen bepalen vanuit de cursusopgave',boundary)
    L['stratificatie']['refs'].extend([dict(source='opgaven',page=7,locator='H8 opgave 8a/b, PDF 7'),dict(source='uitwerkingen',page=10,locator='H8 opgave 8a/b, PDF 10–11')])

    extension='<p>De totale variantie is de som van de variantiebijdragen van de strata. Bij een gewenste marge E hoort maximaal (E/t)² totale variantie. Houd voor een planningsberekening de gegeven t-waarde en geschatte spreidingen vast; na de aanvullende controle beoordeel je de nieuwe uitkomsten opnieuw.</p><h3>Cursusopgave H8.9b/c</h3>'+steps([
        'De oorspronkelijke schatting is € 6.678.000 met s_tot ≈ € 256.153 en t = 1,978. De marge is circa € 506.670, dus meer dan de gewenste € 500.000.',
        'De maximaal toegestane standaardfout is 500.000 / 1,978 ≈ € 252.780. De totale variantie moet ongeveer 1,717 × 10⁹ afnemen.',
        'Stratum 3 draagt het meest bij: s_3,totaal ≈ € 135.645,95. Trek de benodigde vermindering van deze gekwadrateerde bijdrage af. De gewenste bijdrage wordt circa 1,6683 × 10¹⁰.',
        'Gebruik de cursusbenadering γ₃ = gewenste variantiebijdrage / (N₃ × s₃²). Met N₃ = 300 en s₃ = 2.606,15 volgt γ₃ ≈ 8,1876.',
        'Nieuwe totale n₃ = 300 / (1 + 8,1876) ≈ 32,65. Rond omhoog naar 33. Er waren 30 controles, dus voeg 3 toe.',
        'Controleer de marge met n₃ = 33 en de overige strata ongewijzigd. Bij de vastgehouden planningswaarden daalt die tot ongeveer € 499.443.'])
    extension+='<p class="note">De cursusuitwerking gebruikt de gebruikelijke N − 1 ≈ N-benadering bij het terugrekenen van n. Met de exacte eindigheidscorrectie volgt hier eveneens 33. Wordt de benodigde bijdrage negatief, dan kan uitbreiding van alleen dit stratum niet volstaan. Meer controles dan Nᵢ zijn onmogelijk. Voeg varianties samen, niet standaardfouten.</p>'
    add(L['stratificatie'],'Gericht extra controles in één stratum',extension)
    add(L['steekproefomvang'],'Uitbreiding na stratificatie',extension)
    add(L['steekproefomvang'],'Omvang bij de quotiëntschatter',
        '<p>Gebruik dezelfde planningsstructuur als bij de andere totaalschatters, met de resterende spreiding s_q van de quotiëntschatter: γ = E²/(t² × N × s_q²) en n = N/(1 + γ). Dit is de cursusbenadering met N − 1 ≈ N. s_q heeft een waarde-eenheid; vul hier niet de dimensieloze goedratio q in. Houd bij planning de gegeven t en spreiding vast en rond n naar boven af.</p><h3>Voorbeeld bij slides PDF 34–36</h3>'+steps(['N = 1.000, t = 2, s_q = 7,60 en gewenste marge E = € 1.000.','γ = 1.000²/(2² × 1.000 × 7,60²) ≈ 4,32825.','n = 1.000/(1 + 4,32825) ≈ 187,679. Plan dus minimaal 188 controles.','Als al 100 posten zijn gecontroleerd, zijn volgens deze planning nog 88 nodig. Herbeoordeel het interval na de uitbreiding.']))
    for slug in ['stratificatie','steekproefomvang']:
        L[slug]['refs'].extend([dict(source='opgaven',page=8,locator='H8 opgave 9b/c, PDF 8'),dict(source='uitwerkingen',page=13,locator='H8 opgave 9c, PDF 13')])
    L['stratificatie']['goals'].extend(['Stratagrenzen bepalen met beide cursusmethoden','De steekproef gericht binnen één stratum uitbreiden'])

    n,r,sx,sy=p.n,p.v('r'),p.sub(p.s,p.x),p.sub(p.s,p.y)
    se=p.sub(p.s,p.v('e')); sb1=p.sub(p.s,p.sub(p.b,p.num(1)))
    remainder=p.minus(p.num(1),p.sq(r)); df=p.minus(n,p.num(2))
    residual=formula('Formule 34: residuele variantie',p.eq(p.sq(se),p.mul(p.frac(p.minus(n,p.num(1)),df),p.group(remainder),p.sq(sy))))
    residual+='<p>Je gebruikt deze vorm bij enkelvoudige regressie met een constante wanneer n, r en sᵧ gegeven zijn. sₑ² is de resterende variantie rond de regressielijn; sₑ = √sₑ². Vanuit een ANOVA-tabel krijg je hetzelfde met SSE/(n − 2). Het aandeel 1 − r² is niet verklaard door de lijn.</p><h3>Cursusopgave H9.1: autogewichten</h3>'+steps([
        'De tien oorspronkelijke gewichten zijn 946, 950, 965, 978, 980, 990, 1.055, 1.015, 1.055 en 1.080 kg; x loopt van 1 tot en met 10.',
        'Met de onafgeronde brongegevens: sᵧ ≈ 47,46976, sₓ ≈ 3,02765 en r ≈ 0,940088. Gebruik de afgeronde r = 0,940 alleen als niet meer cijfers beschikbaar zijn.',
        'sₑ² = (9/8) × (1 − r²) × sᵧ² ≈ 294,66212 kg². Neem de wortel: sₑ ≈ 17,16572 kg.',
        'Controle: de ANOVA-tabel geeft SSE = 2.357,29697 en df = 8. SSE/df = 294,66212. Beide berekeningen beschrijven dezelfde resterende spreiding.'])
    add(L['regressielijn'],'Residuele variantie berekenen zonder ANOVA-tabel',residual)
    infer=formula('Formule 39: standaardfout van de helling',p.eq(sb1,p.mul(p.frac(sy,sx),p.root(p.frac(remainder,df)))))
    infer+=formula('Formule 40: correlatie toetsen',p.eq(p.t,p.frac(p.mul(r,p.root(df)),p.root(remainder))))
    infer+=formula('Interval voor de populatiehelling',p.row(p.sub(p.b,p.num(1)),p.op('±'),p.mul(p.t,sb1)))
    infer+='<p>Deze vormen met de gewone Pearson-correlatie r horen bij enkelvoudige regressie met constante. Voor H₀: ρ = 0 of H₀: β₁ = 0 geven ze dezelfde t als b₁/s_b₁. Gebruik ze niet met de totale R van een meervoudig model. Voor H₀: β₁ = een andere waarde neem je (b₁ − die waarde)/s_b₁.</p><h3>Vervolg op cursusopgave H9.1</h3>'+steps([
        'De regressiehelling is b₁ ≈ 14,73939 kg/jaar. Met n = 10, r ≈ 0,940088, sᵧ ≈ 47,46976 en sₓ ≈ 3,02765 volgt s_b₁ ≈ 1,88988 kg/jaar.',
        't = b₁/s_b₁ ≈ 7,79910. Formule 40 geeft dezelfde waarde; df = 10 − 2 = 8.',
        'De cursusvraag vraagt een positief verband: H₀: β₁ ≤ 0, H₁: β₁ > 0. Bij α = 0,05 is de eenzijdige grens 1,860. Verwerp H₀: er is statistisch bewijs voor een positief lineair verband.',
        'Aanvullende toepassing uit boek p. 255: voor een tweezijdig 95%-interval gebruik je t = 2,306. Het interval is 14,73939 ± 2,306 × 1,88988 ≈ [10,38; 19,10] kg/jaar.',
        'Nul ligt buiten dit tweezijdige interval. Daarmee verwerp je ook H₀: β₁ = 0 bij een tweezijdige toets met α = 0,05. Koppel een interval alleen aan een toets met passend niveau en passende richting.'])
    add(L['toetsen'],'Toetsen en het interval voor de regressiehelling',infer)
    for slug in ['regressielijn','toetsen']:
        L[slug]['refs'].extend([dict(source='opgaven',page=10,locator='H9 opgave 1, PDF 10'),dict(source='uitwerkingen',page=14,locator='H9 opgave 1, PDF 14–15')])
    L['regressielijn']['refs'].append(bookref('boek-h9a',246))
    L['toetsen']['refs'].append(bookref('boek-h9b',255))

    add(L['meervoudig'],'B en gestandaardiseerde Beta vergelijken',
        '<p><strong>B</strong> is de coëfficiënt in de eenheden van het gekozen model. <strong>Beta</strong> drukt de verandering uit in standaardafwijkingen: bij één standaardafwijking meer x verandert de voorspelde y met Beta standaardafwijkingen, bij gelijkblijvende andere verklarende variabelen. Het teken geeft de richting; vergelijk absolute waarden voor een vergelijking binnen hetzelfde model.</p><h3>Boekvoorbeeld GDP, tabel 10.24</h3>'+table('B en Beta in hetzelfde logmodel',['Variabele','B','Beta'],[['LN_MORT','−0,434','−0,385'],['LN_ELECT','0,353','0,592']])+'<p>LN_ELECT heeft in dit model de grootste absolute Beta: 0,592 &gt; 0,385. Het verband is positief; dat van LN_MORT is negatief. Dit is geen ranglijst van causale invloed. Onderlinge samenhang en de keuze van het model blijven relevant. Voorspellen in de gekozen modeleenheden doe je met B, niet met Beta.</p>')
    L['meervoudig']['refs'].append(bookref('boek-h10c',318))
    log='<p>Bij meerdere verklarende variabelen transformeer je de volledige voorspelde logwaarde terug. De constante wordt een vermenigvuldigingsfactor; coëfficiënten bij ln(x) worden machten van x.</p>'
    log+=formula('Meervoudig machtsmodel',p.eq(p.row(p.v('ln'),p.group(p.hat(p.y))),p.add(p.sub(p.b,p.num(0)),p.mul(p.sub(p.b,p.num(1)),p.row(p.v('ln'),p.group(p.sub(p.x,p.num(1))))),p.mul(p.sub(p.b,p.num(2)),p.row(p.v('ln'),p.group(p.sub(p.x,p.num(2))))))))
    log+=formula('Terug naar de oorspronkelijke schaal',p.eq(p.hat(p.y),p.mul(p.row(p.v('exp'),p.group(p.sub(p.b,p.num(0)))),p.sup(p.sub(p.x,p.num(1)),p.sub(p.b,p.num(1))),p.sup(p.sub(p.x,p.num(2)),p.sub(p.b,p.num(2))))))
    log+='<h3>Boekvoorbeeld GDP, p. 321</h3><p>ln(ŷ) = 9,080 + 0,353 ln(elect) − 0,434 ln(mort) wordt ŷ = exp(9,080) × elect<sup>0,353</sup> × mort<sup>−0,434</sup>. De constante factor is ongeveer 8.778. De negatieve macht kun je ook als delen door mort<sup>0,434</sup> schrijven.</p><h3>Voorbeeld bij die boekvergelijking</h3>'+steps(['Neem elect = 100 en mort = 10, beide positief.','De voorspelde logwaarde is 9,080 + 0,353 × ln(100) − 0,434 × ln(10) ≈ 9,70630.','Terugtransformeren met de onafgeronde logwaarde geeft ongeveer 16.420,78. De productvorm geeft dezelfde uitkomst.','Bij verdubbeling van elect en gelijkblijvende mort verandert de teruggetransformeerde voorspelling met factor 2^0,353 ≈ 1,277. Het gaat dus niet om 0,353 extra oorspronkelijke eenheden.'])+'<p class="note">Dit is de directe terugtransformatie van de geschatte logwaarde volgens de cursus. Noem dit niet zonder aanvullende aannames het rekenkundige gemiddelde op de oorspronkelijke schaal. Bij een interval op logschaal transformeer je de twee grenzen afzonderlijk terug.</p>'
    add(L['transformaties'],'Een meervoudig logmodel terugtransformeren',log)
    L['transformaties']['refs'].append(bookref('boek-h10c',321))

    remedies=table('Na een uitbijtersignaal',['Onderzoek','Vervolgactie'],[
        ['Invoer- of meetfout?','Controleer de bron en herstel alleen een aantoonbare fout. Schat daarna opnieuw.'],
        ['Terugkerende bijzondere omstandigheid?','Overweeg een inhoudelijk verdedigbare extra variabele of dummy, bijvoorbeeld voor een terugkerend seizoen.'],
        ['Eenmalige gebeurtenis?','Onderzoek of de waarneming bij het doel en de relevante populatie hoort. Motiveer iedere behandeling en vergelijk de gevolgen.'],
        ['Geldige waarneming zonder verklaring?','Behoud die als uitgangspunt; verwijder niet uitsluitend om R² of significantie te verbeteren.']])
    add(L['diagnostiek'],'Van uitbijtersignaal naar onderbouwde aanpassing',remedies)
    ac='<p>Bij eerste-orde autocorrelatie hangen opeenvolgende storingen samen. In het boek wordt de vorige storing meegenomen: ŷ_t = b₀ + b₁x_t + r₁e_(t−1). r₁ is de geschatte autocorrelatiecoëfficiënt; e_(t−1) is het residu van de vorige periode. De coëfficiënten worden bij de correctie opnieuw geschat.</p><h3>Boekmodel met voorbeeld</h3>'+steps(['Het boek geeft na correctie: ŷ_t = 14,92 + 0,2154x_t + 0,6496e_(t−1).','Neem voor het invulvoorbeeld x_t = 20 en het vorige residu e_(t−1) = 1,5. De correctieterm is 0,6496 × 1,5 = 0,9744.','De voorspelling is 14,92 + 0,2154 × 20 + 0,9744 = 20,2024. Gebruik het vorige residu, niet het nog onbekende residu van de periode die je voorspelt.','Controleer de nieuwe residuen opnieuw. In het boek is de nieuwe Durbin-Watson d = 1,2048, net boven d_U = 1,20 en onder 4 − d_U. De toets toont op het gebruikte niveau geen autocorrelatie aan. Dat is geen bewijs dat iedere modelaanname klopt.'])
    add(L['diagnostiek'],'Autocorrelatie corrigeren en opnieuw controleren',ac)
    diagnose='<h3>Durbin-Watson uit residuen</h3><p>d = Σ(e_t − e_(t−1))² / Σe_t². De teller begint bij de tweede waarneming, want de eerste heeft geen voorganger in de reeks. De noemer bevat alle residuen. De tijdsvolgorde is essentieel.</p><p><strong>Voorbeeld:</strong> voor residuen 1, 1, −1, −1 is de teller 0² + (−2)² + 0² = 4 en de noemer 1 + 1 + 1 + 1 = 4. Dus d = 1. Voor een toetsbeslissing zijn passende d_L en d_U uit de tabel nodig; dit kleine voorbeeld oefent alleen de berekening.</p><h3>ABSRES en heteroscedasticiteit</h3><p>Maak de absolute residuen |eᵢ| en bepaal hun correlatie met de verklarende variabele volgens de cursusdiagnose. Toets H₀: ρ = 0 met de correlatie-t-toets. Een significant verband is een aanwijzing dat de spreiding samenhangt met x. Controleer daarnaast het residudiagram; een niet-significante toets bewijst geen constante spreiding.</p><p><strong>Voorbeeld:</strong> n = 22, r(x, |e|) = 0,50 geeft t = 0,50√20/√0,75 ≈ 2,582. Bij tweezijdig α = 0,05 en df = 20 is de grens 2,086. Onderzoek heteroscedasticiteit en een passende transformatie of gewogen regressie; controleer het aangepaste model opnieuw.</p>'
    add(L['diagnostiek'],'Diagnostische toetsingsgrootheden zelf berekenen',diagnose)
    L['diagnostiek']['refs'].extend([bookref('boek-h9c',267),bookref('boek-h9d',274),bookref('boek-h9d',279),bookref('boek-h9d',282)])
    add(L['voorspellen'],'Basisperiode en controleperiode gescheiden houden',
        '<p>In de <strong>basisperiode</strong> schat en beoordeel je het model. In de <strong>controleperiode</strong> gebruik je dat model om nieuwe waarnemingen op plausibiliteit te onderzoeken. Het boek gebruikt 24 maanden als basis en daarna 12 maanden voor controle. Bepaal voor iedere nieuwe x de voorspelling en het individuele voorspellingsinterval. Een nieuwe realisatie buiten het interval is aanleiding voor onderzoek, geen automatisch bewijs van een boekingsfout of fraude.</p><p>Pas het model niet stilzwijgend aan met dezelfde controlewaarneming die je wilt beoordelen. Als het proces aantoonbaar verandert, motiveer een nieuwe basisperiode en controleer het model opnieuw.</p>',False)
    add(L['transformaties'],'R² vergelijken na een transformatie',
        '<p>R² is verklaarde variatie gedeeld door totale variatie in de gekozen afhankelijke variabele. Linear en Logarithmic gebruiken dezelfde y; Power en Exponential gebruiken ln(y). Een ranglijst van hun R²-waarden vergelijkt daardoor verschillende grootheden. Enkele tentamenmodellen maken deze vergelijking toch: bij de oorspronkelijke vraag staat nu welke keuze de sleutel verwacht en welk voorbehoud daarbij hoort.</p><p>Vergelijk de voorspelkwaliteit op dezelfde y-schaal en dezelfde waarnemingen, en controleer de residuen. Het hoogste getal in een tabel met verschillende y-transformaties bewijst op zichzelf niet dat het model op de oorspronkelijke schaal het beste voorspelt.</p>',False)
    # Verwijzingen en leerdoelen gelden eveneens voor de aangevulde oefeningen.
    for slug in ['regressielijn','toetsen','transformaties','diagnostiek','meervoudig','stratificatie','steekproefomvang']:
        L[slug]['completionVersion']='2026-09-20'
        L[slug]['sections'].append(dict(title='Zelf oefenen met deze aanvulling',html=f'<p>Maak de eigen oefenvarianten bij dit onderwerp. Je krijgt na controle rekenstappen, uitleg per antwoord en de gebruikte bronnen.</p><p><a class="study-btn" href="#tentamen/mc/{slug}">Oefen {escape(L[slug]["title"])}</a></p>'))
