"""Didactische aanvulling van hoofdstuk 8, broncontrole 25 september 2026.

Pas toe na course_completion.enhance. Bestaande les- en vraag-ID's blijven gelijk.
Numerieke voorbeelden worden uit de vermelde invoer berekend; tussenwaarden
worden alleen voor weergave afgerond. Eigen oefeningen zijn herkenbaar gelabeld.
"""
from math import ceil, sqrt
from course_completion import bookref

VERSION = '2026-09-25'
IDS = ('beginnen', 'rekenen', 'onzekerheid', 'mpu', 'verschil', 'quotient',
       'regressieschatter', 'steekproefomvang', 'stratificatie')


def number(value, decimals=2):
    return f'{value:,.{decimals}f}'.replace(',', '@').replace('.', ',').replace('@', '.')


def money(value, decimals=2):
    return '€ ' + number(value, decimals)


def ref(source, page, locator):
    return dict(source=source, page=page, locator=locator)


def table(caption, headers, rows):
    return ('<div class="table-wrap"><table><caption>' + caption + '</caption><thead><tr>'
            + ''.join('<th scope="col">' + x + '</th>' for x in headers)
            + '</tr></thead><tbody>'
            + ''.join('<tr>' + ''.join('<td>' + str(x) + '</td>' for x in row) + '</tr>' for row in rows)
            + '</tbody></table></div>')


def steps(items):
    return '<ol>' + ''.join('<li>' + item + '</li>' for item in items) + '</ol>'


def exercise(question, answer):
    return ('<div class="learning-exercise"><h3>Zelf toepassen</h3>' + question
            + '<details class="learning-solution"><summary>Bekijk de uitwerking en onderbouwing</summary>'
            + answer + '</details></div>')


def mpu(N, n, total, total_squares):
    variance = (total_squares - total * total / n) / (n - 1)
    return dict(mean=total / n, variance=variance, sd=sqrt(variance),
                estimate=N * total / n,
                se=N * sqrt(variance / n * (N - n) / (N - 1)))


SLIDE_STRATA = ((2700, 114, 7000, 475000), (1111, 58, 8000, 1175000),
               (567, 36, 12000, 4030000), (397, 42, 20000, 9600000))
SLIDE_CLASSES = (
    ('0 tot < 1.000', 1127, 513513), ('1.000 tot < 2.000', 813, 1195110),
    ('2.000 tot < 3.000', 760, 1846186), ('3.000 tot < 4.000', 699, 2394075),
    ('4.000 tot < 5.000', 412, 1858944), ('5.000 tot < 6.000', 300, 1651237),
    ('6.000 tot < 7.000', 267, 1717729), ('7.000 tot < 8.000', 217, 1588182),
    ('8.000 tot < 9.000', 110, 892584), ('9.000 tot < 10.000', 70, 649099),
)
ROOT_CLASSES = (
    ('0 tot < 400', 400, 772), ('400 tot < 800', 400, 1016),
    ('800 tot < 1.200', 400, 1408), ('1.200 tot < 1.600', 400, 882),
    ('1.600 tot < 2.000', 400, 812), ('2.000 tot < 2.500', 500, 635),
    ('2.500 tot < 3.000', 500, 480), ('3.000 tot < 4.000', 1000, 336),
    ('4.000 tot < 5.000', 1000, 771), ('5.000 tot < 7.500', 2500, 418),
    ('7.500 tot < 10.000', 2500, 129),
)


def enhance(lessons, sources):
    L = {lesson['id']: lesson for lesson in lessons}
    if all(L[slug].get('samplingVersion') == VERSION for slug in IDS):
        return

    def add(slug, title, body, refs, after=None, formula_guide=False):
        lesson = L[slug]
        section = dict(title=title, html=body, refs=list(refs), learningVersion=VERSION)
        if after is None:
            position = next((i for i, s in enumerate(lesson['sections'])
                             if s['title'] == 'Zelf oefenen met deze aanvulling'), len(lesson['sections']))
        else:
            position = next(i + 1 for i, s in enumerate(lesson['sections']) if s['title'] == after)
        lesson['sections'].insert(position, section)
        if formula_guide:
            lesson['formulaGuide'].append(dict(section))
        for r in refs:
            if r not in lesson['refs']:
                lesson['refs'].append(r)

    def extend(slug, title, body, refs):
        section = next(s for s in L[slug]['sections'] if s['title'] == title)
        section['html'] += body
        section['refs'] = section.get('refs', []) + [r for r in refs if r not in section.get('refs', [])]
        section['learningVersion'] = VERSION
        for r in refs:
            if r not in L[slug]['refs']:
                L[slug]['refs'].append(r)

    # Eerst de betekenis van de accountantsvraag; dit bepaalt de rekenroute.
    extend('beginnen', 'Begin met een concrete vraag',
        '<h3>Van controledoel naar onderzoeksopzet</h3>'
        '<p>Leg vóór de selectie vast <strong>welke uitspraak</strong> je wilt doen: over het aantal foutieve posten, '
        'de totale fout in euro of de werkelijke totale waarde. Die grootheden vragen andere gegevens. '
        'Een telling van foutieve facturen vertelt nog niet hoeveel euro de verantwoording afwijkt. '
        'Bij een waardeschatting controleer je daarom ook de bedragen van de geselecteerde posten.</p>'
        '<p>De selectie-eenheid moet aansluiten op de populatieomvang N. Als één regel een artikel is, '
        'telt n gecontroleerde artikelen. Als één regel een factuur is, telt n facturen. '
        'De bekende boekwaarde B en de gecontroleerde werkelijke waarden moeten betrekking hebben op '
        'dezelfde populatie, periode en waarderingsvraag. Anders corrigeert een goede formule voor een verkeerd geheel.</p>',
        [bookref('boek-h8a', 202), ref('slides', 6, 'PDF 6-12: doel, schatten en populatiegegevens')])
    extend('beginnen', 'Twee soorten vragen',
        '<h3>Goedkeuren of de afwijking in kaart brengen</h3>'
        '<p>De colleges koppelen weinig verwachte fouten aan een toets die goedkeuring kan onderbouwen. '
        'Bij veel verwachte fouten is vooral de omvang van de afwijking van belang: een schattingsinterval '
        'maakt die omvang en de onzekerheid zichtbaar. Dit is een keuze vanuit de onderzoeksvraag. '
        'Het betekent niet dat iedere regressietoets een goedkeuringsvraag is.</p>'
        '<p>Een accountant moet een bedrag én de onzekerheid kunnen uitleggen. Twee schattingen van '
        '€ 100.000 met marges van € 2.000 en € 25.000 bieden bijvoorbeeld een heel andere basis '
        'voor dezelfde beslissing. Vergelijk de marge met de in de opgave toegestane onnauwkeurigheid.</p>'
        + exercise('<p><strong>Eigen herkenningsoefening.</strong> Een voorraad bevat 5.000 posten. '
                   'De accountant verwacht veel verschillen en wil de werkelijke totale waarde bepalen. '
                   'Een medewerker stelt voor uitsluitend het percentage posten met een verschil te rapporteren. '
                   'Wat ontbreekt in dat voorstel?</p>',
                   '<p>De hoogte van de bedragen ontbreekt. Eén verschil van € 10.000 weegt voor het eurototaal '
                   'anders dan honderd verschillen van € 1. Controleer de werkelijke waarden of foutbedragen, '
                   'kies een passende totaalschatter en rapporteer een interval bij het gevraagde betrouwbaarheidsniveau. '
                   'Het foutenpercentage kan aanvullende informatie geven, maar beantwoordt deze waardevraag niet.</p>'),
        [ref('slides', 6, 'PDF 6-10: veel of weinig verwachte fouten'), bookref('boek-h8a', 202)])
    add('beginnen', 'Een aselecte selectie navolgbaar uitvoeren',
        '<p>Het boek laat een praktische trekking zien: geef iedere populatiepost een '
        'willekeurig getal, leg de getallen vast, sorteer de gehele tabel daarop en '
        'neem de eerste n posten. Daarmee voorkom je dat volgorde, bereikbaarheid '
        'of een persoonlijke voorkeur de selectie bepaalt.</p>'
        + steps(['Controleer dat het populatiebestand alle bedoelde posten bevat en '
                 'dat elke post een herkenbaar uniek nummer heeft.',
                 'Voeg per post een onafhankelijk willekeurig getal toe. Bewaar '
                 'de getallen als vaste waarden voordat je sorteert, zodat ze '
                 'niet bij een herberekening wijzigen.',
                 'Sorteer alle bij elkaar horende kolommen gezamenlijk. Alleen de '
                 'kolom boekwaarde sorteren zou de koppeling met de post verbreken.',
                 'Selecteer de eerste n unieke posten en bewaar de selectie. '
                 'Controleer hun werkelijke waarden volgens dezelfde waarderingsvraag.',
                 'Bij stratificatie voer je de trekking per stratum uit; bij '
                 'uitbreiding trek je uit de nog niet gecontroleerde posten.'])
        + '<p>Dit is de werkwijze uit het boek, vertaald naar algemene handelingen. '
        'De historische Excel-menuvolgorde is niet nodig om de statistische '
        'redenering te volgen. Een steekproef die al in de opgave is gegeven '
        'hoef je niet opnieuw te trekken. Benoem wel waarop de uitspraak kan '
        'worden gebaseerd: een groter n herstelt geen onvolledig bestand.</p>',
        [bookref('boek-h8a', 204)])

    # Het rekenwerk krijgt een controleerbare tabel met eenheden.
    values = [80, 90, 110, 120]
    body = '<p>Een opgave kan losse waarden geven of alleen sommen. Onderstaande eigen oefentabel '
    body += 'laat zien dat de twee variantieformules hetzelfde meten. De ene route begint bij afwijkingen '
    body += 'van het gemiddelde; de andere gebruikt direct de kolomsommen.</p>'
    body += table('Eigen rekenvoorbeeld: vier gecontroleerde waarden in euro',
                  ['Post', 'wᵢ', 'wᵢ²', 'wᵢ − 100', '(wᵢ − 100)²'],
                  [[i + 1, w, number(w*w, 0), w-100, (w-100)**2] for i, w in enumerate(values)]
                  + [['Totaal', '400', '41.000', '0', '1.000']])
    body += steps(['Het gemiddelde is 400/4 = 100. De gewone afwijkingen tellen op tot nul, '
                   'terwijl de waarden duidelijk uiteenlopen. Kwadrateren voorkomt die opheffing.',
                   'Afwijkingenroute: s² = 1.000/(4 − 1) = 333,3333 euro².',
                   'Somroute: s² = [41.000 − 400²/4]/3 = [41.000 − 40.000]/3 = 333,3333 euro².',
                   'Neem de wortel om terug te keren naar euro: s = 18,2574. '
                   'Voor de onzekerheid van het gemiddelde deel je daarna pas door √n.'])
    body += '<p>Met een berekend gemiddelde zijn maar n − 1 afwijkingen vrij te kiezen: '
    body += 'de laatste afwijking ligt vast doordat ze samen nul moeten zijn. '
    body += 'Daarom staat bij de steekproefvariantie n − 1 in de noemer.</p>'
    body += exercise('<p>In een eigen oefening zijn n = 5, Σw = 500 en Σw² = 52.000. '
                     'Bereken gemiddelde, variantie en standaardafwijking. Welke eenheid hoort bij elk antwoord?</p>',
                     '<p>w̄ = € 100. s² = (52.000 − 500²/5)/4 = 500 euro²; '
                     's = √500 ≈ € 22,36. De standaardfout van het gemiddelde vóór eindigheidscorrectie '
                     'is 22,3607/√5 = € 10. Een gemiddelde en een standaardafwijking hebben beide '
                     'de eenheid euro, maar beantwoorden verschillende vragen.</p>')
    add('rekenen', 'Een gegevenstabel in beide richtingen doorrekenen', body,
        [ref('formules', 1, 'Formule 1: variantie uit som en kwadratensom'),
         ref('slides', 15, 'PDF 15-16: equivalente variantieformules')])
    extend('rekenen', 'De rekenvorm op het formuleblad',
        '<h3>Controleer de betekenis vóór het getal</h3>'
        + table('Drie verschillende soorten spreiding', ['Grootheid', 'Wat varieert?', 'Waarvoor gebruik je haar?'], [
            ['s<sub>w</sub>', 'Werkelijke waarden van individuele posten', 'Invoer voor MPU of regressieschatter'],
            ['s<sub>w</sub>/√n, met eindigheidscorrectie', 'Het gemiddelde bij herhaalde steekproeven', 'Interval voor een gemiddelde'],
            ['N × s<sub>w</sub>/√n, met eindigheidscorrectie', 'De schatting van het populatietotaal', 'Interval in euro voor de gehele populatie'],
        ])
        + '<p>Een negatieve berekende variantie is een controlesignaal: bekijk de invoer, haakjes, '
        'eenheden en afgeronde totalen. Maak die uitkomst niet positief met een absolute waarde. '
        'En als Σw² in duizenden euro² is weergegeven, herstel dan eerst de schaal.</p>',
        [ref('formules', 1, 'Formules 1, 3 en 4'), bookref('boek-h8a', 205)])

    body = '<p>Een <strong>overschrijdingskans</strong> in de Student-t-tabel is de kans rechts van '
    body += 'de positieve tabelwaarde. Bij een tweezijdig interval gaat slechts de helft van α naar '
    body += 'die rechterstaart. De tabelkolom geeft dus niet rechtstreeks de betrouwbaarheid weer.</p>'
    body += table('Selectie uit tabel 13.4; PDF 12-13 van de tabellenbundel',
                  ['Vrijheidsgraden', 'Rechterstaart 0,05', 'Rechterstaart 0,025', 'Rechterstaart 0,005'], [
                      ['24 (PDF 12)', '1,711', '2,064', '2,797'],
                      ['95 (PDF 13)', '1,661', '1,985', '2,629'],
                      ['160 (PDF 13)', '1,654', '1,975', '2,607'],
                      ['170 (PDF 13)', '1,654', '1,974', '2,605'],
                      ['200 (PDF 13)', '1,653', '1,972', '2,601'],
                      ['inf. = z (PDF 13)', '1,645', '1,960', '2,576']])
    body += steps(['Neem een 95%-interval bij n = 165 voor een hoofdstuk-8-schatter: α = 0,05; '
                   'twee staarten geven α/2 = 0,025.',
                   'Bereken df = 165 − 1 = 164. Rij 164 ontbreekt; het onderwijsprogramma schrijft '
                   'de naast lagere beschikbare rij voor: 160. Interpoleer niet.',
                   'Open PDF-pagina 13, kies rij 160 en kolom 0,025. Het snijpunt geeft 1,975.',
                   'Bij een eenzijdige 95%-grens gebruik je in dezelfde rij kolom 0,05: 1,654. '
                   'De hele foutkans zit nu aan één kant. Een tweezijdig 90%-interval gebruikt '
                   'eveneens kolom 0,05, maar heeft wél twee grenzen.',
                   'Bij df = 200 blijf je op rij 200. Alleen bij df > 200 schrijft de cursus '
                   'de onderste rij inf. voor. Bijvoorbeeld df = 249 geeft bij 95% tweezijdig 1,960.'])
    body += '<p><strong>Toepassing:</strong> bij een schatting van € 100.000 en een standaardfout '
    body += 'van € 2.000 is het tweezijdige 95%-interval met df = 164 gelijk aan '
    body += '[€ 96.050; € 103.950]. Een eenzijdige 95%-ondergrens is € 96.692. '
    body += 'Kies eerst de gevraagde uitspraak; de ondergrens van een tweezijdig 95%-interval '
    body += 'is geen eenzijdige 95%-ondergrens.</p>'
    body += exercise('<p>Zoek met de bundel de kritieke waarde voor (a) een tweezijdig 99%-interval '
                     'bij df = 164, (b) een tweezijdig 95%-interval bij df = 99 en '
                     '(c) een eenzijdige 95%-bovengrens bij df = 24. Noteer pagina, rij en kolom.</p>',
                     '<p>(a) PDF 13, rij 160, kolom 0,005: 2,607. '
                     '(b) PDF 13, rij 95, kolom 0,025: 1,985. Rij 95 staat werkelijk in deze bundel; '
                     'rij 90 is daarom niet de naast lagere rij. '
                     '(c) PDF 12, rij 24, kolom 0,05: 1,711. Voor de bovengrens tel je '
                     '1,711 × de standaardfout bij de schatting op.</p>')
    add('onzekerheid', 'De tabellenbundel gebruiken: pagina, rij, kolom en conclusie', body,
        [ref('tabellen', 12, 'Tabel 13.4, PDF 12-13; kolommen zijn rechterstaartkansen'),
         ref('programma', 4, 'Tabelregels: naast lagere df; bij df > 200 onderste rij')],
        after='Waar komt de t-waarde vandaan?', formula_guide=True)
    extend('onzekerheid', 'Wat maakt een interval breder?',
        '<p>De <strong>precisie</strong> van de schatting beschrijf je met de marge E: kleiner is '
        'preciezer. De <strong>betrouwbaarheid</strong> is het vooraf gekozen dekkingsniveau van '
        'de intervalmethode. Een kleinere standaardfout bij hetzelfde t maakt de marge kleiner '
        'zonder dat je het betrouwbaarheidspercentage wijzigt. Het is daarom onjuist om een '
        'smaller interval automatisch betrouwbaarder te noemen.</p>'
        '<p>Voor controle van een waarde B kan een interval richting geven aan nader onderzoek. '
        'Als B buiten het interval valt, sluit de boekwaarde niet aan bij de schatting op dit niveau. '
        'Als B erin valt, is daarmee niet bewezen dat iedere post juist is. '
        'De gekozen schatter en intervalaannamen moeten ook passen bij de gegevens.</p>',
        [bookref('boek-h8b', 216), ref('slides', 34, 'PDF 34: vergelijking van onnauwkeurigheidsmarges')])
    add('onzekerheid', 'Intervalgrafieken lezen: één vaste populatiewaarde, verschillende schattingen',
        '<p>De intervalgrafieken in het boek tonen '
        'twintig opnieuw getrokken steekproeven uit dezelfde populatie. '
        'De horizontale referentielijn is het vaste werkelijke totaal van '
        '€ 7.029.580. Elke verticale lijn is één berekend interval; het midden '
        'en de lengte kunnen per steekproef verschillen.</p>'
        + steps(['Kijk of het interval de horizontale populatielijn kruist. '
                 'Dan bevat die ene uitkomst het werkelijke totaal.',
                 'Vergelijk de lengtes: kortere intervallen betekenen kleinere '
                 'gerealiseerde marges. Alleen een lijn dicht bij het juiste '
                 'totaal zegt nog niets over de precisie.',
                 'Kijk over meerdere steekproeven hoe vaak de waarde buiten '
                 'het interval valt. Het betrouwbaarheidsniveau betreft '
                 'de methode bij herhaling, niet de verdeling van losse posten.'])
        + table('Twintig steekproeven van dezelfde populatie',
                ['Schatter', 'Aantal intervallen dat W mist', 'Gemiddelde marge (€)'], [
                    ['MPU', '2 van 20', '221.864'], ['Verschil', '2 van 20', '108.856'],
                    ['Quotiënt', '2 van 20', '109.117'], ['Regressie', '2 van 20', '108.751']])
        + '<p>In deze reeks missen alle methoden twee keer de werkelijke waarde. '
        'Daaruit volgt niet dat een 95%-methode per reeks van twintig exact één '
        'keer moet missen: ook die telling is toevallig. De drie methoden met '
        'boekwaarde-informatie zijn in dit voorbeeld gemiddeld preciezer dan '
        'MPU. De tabel bewijst geen algemene rangorde voor iedere populatie.</p>'
        + exercise('<p>Een student zegt: “Het interval van steekproef 1 bevat de '
                   'werkelijke waarde, dus deze methode is betrouwbaar.” '
                   'Welke informatie ontbreekt in die conclusie?</p>',
                   '<p>Eén getroffen interval laat niet zien hoe vaak de methode '
                   'bij herhaalde steekproeven de waarde bevat. Je moet de '
                   'selectie, modelvoorwaarden en langetermijndekking beoordelen. '
                   'Ook een heel breed interval kan de waarde toevallig bevatten; '
                   'voor bruikbaarheid telt daarnaast de marge.</p>'),
        [bookref('boek-h8a', 207), bookref('boek-h8b', 212),
         bookref('boek-h8b', 216), bookref('boek-h8b', 219)])

    # Corrigeer aantoonbare bestaande tabelkeuze in het MPU-voorbeeld.
    L['mpu']['example']['steps'] = [
        'Gegeven: N = 1.000, n = 100, w̄ = € 80, s_w = € 20. Voor een tweezijdig 95%-interval is df = 99. '
        'Tabellenbundel PDF 13: naast lagere rij 95, kolom 0,025; t = 1,985.',
        'Ŵ = 1.000 × 80 = € 80.000. Het gemiddelde wordt naar alle 1.000 artikelen doorgerekend.',
        'Eindigheidscorrectie = √(900/999) ≈ 0,9492. De 100 al gecontroleerde posten verkleinen de resterende steekproefonzekerheid.',
        's_MPU = 1.000 × (20/10) × √(900/999) ≈ € 1.898,32. Dit is de standaardfout van het totaal.',
        'Reken met onafgeronde tussenwaarden: E = 1,985 × 1.898,31599 ≈ € 3.768,16. '
        'Interval ≈ [€ 76.231,84; € 83.768,16].']
    # Ook de formulegids bevat een kopie van het oude voorbeeld.
    for guide in L['mpu']['formulaGuide']:
        for old, new in [('tabelrij 90 en t = 1,987', 'tabelrij 95 en t = 1,985'),
                         ('1,987 × 1.898,31599', '1,985 × 1.898,31599'),
                         ('3.771,95', '3.768,16'), ('76.228,05', '76.231,84'), ('83.771,95', '83.768,16')]:
            guide['html'] = guide['html'].replace(old, new)

    extend('mpu', 'Wanneer gebruik je deze schatter?',
        '<p>Een paar zeer grote posten tussen veel kleine kunnen s<sub>w</sub> sterk vergroten. '
        'Kies een alternatief dan op basis van populatie en foutpatroon, niet alleen omdat het '
        'berekende interval smaller uitvalt.</p>',
        [bookref('boek-h8a', 203), bookref('boek-h8b', 217)])
    result = mpu(5230, 180, 398000, 5378400500)
    body = '<p>De slides geven de onderstaande voorraadgegevens. De kwadratensom is in euro²; '
    body += 'deze is dus niet de som van de waarden nogmaals in euro.</p>'
    body += table('Voorraadcontrole uit de colleges', ['Gegeven', 'Waarde', 'Functie in de berekening'], [
        ['N', '5.230', 'Van gemiddelde naar populatietotaal'],
        ['n', '180', 'Gemiddelde, spreiding, standaardfout en vrijheidsgraden'],
        ['Σw', '€ 398.000', 'Totaal van de gecontroleerde werkelijke waarden'],
        ['Σw²', '5.378.400.500 euro²', 'Berekening van de steekproefvariantie'],
        ['Betrouwbaarheid', '95%, tweezijdig', 'Kolom 0,025 van de t-tabel'],
    ])
    body += steps(['w̄ = 398.000/180 = € 2.211,1111; Ŵ = 5.230 × w̄ = ' + money(result['estimate']) + '.',
                   's² = [5.378.400.500 − 398.000²/180]/179 = ' + number(result['variance'])
                   + ' euro². Neem de wortel: s<sub>w</sub> = ' + money(result['sd'], 4) + '.',
                   's<sub>MPU</sub> = 5.230 × (s<sub>w</sub>/√180) × √(5.050/5.229) = '
                   + money(result['se']) + '. Elke factor heeft een doel: gemiddelde, totaal en resterende populatie.',
                   'df = 179. Tabellenbundel PDF 13, rij 170, kolom 0,025 geeft t = 1,974.',
                   'E = 1,974 × s<sub>MPU</sub> = ' + money(1.974*result['se']) + '. Interval: ['
                   + money(result['estimate']-1.974*result['se']) + '; '
                   + money(result['estimate']+1.974*result['se']) + '].'])
    body += '<p class="note">De slides rekenen met afgeronde s<sub>w</sub> = 5.013 en tonen '
    body += 'een marge van € 3.790.938. Hier wordt met de gegeven sommen onafgerond doorgerekend: '
    body += '€ 3.790.970,67. Dit verschil komt door tussenafronding. '
    body += 'De marge is groot doordat de afzonderlijke voorraadwaarden sterk uiteenlopen.</p>'
    body += exercise('<p>Gebruik dezelfde gegevens. De accountant mag een totale intervalbreedte '
                     'van € 2.000.000 accepteren. Voldoet deze controle? Noem twee inhoudelijke '
                     'vervolgroutes en motiveer welke aanvullende informatie daarvoor nodig is.</p>',
                     '<p>Nee: de toegestane marge E is € 1.000.000, terwijl de berekende marge '
                     'ongeveer € 3.790.971 is. Route 1 is een grotere aselecte steekproef, te plannen '
                     'met s²<sub>w</sub>. Route 2 is een passende hulpvariabeleschatter of stratificatie. '
                     'Daarvoor onderzoek je het verband met boekwaarden, het foutpatroon of de '
                     'groepsindeling. Het alleen verhogen van het betrouwbaarheidsniveau vergroot '
                     'de marge juist.</p>')
    add('mpu', 'Van samenvattingstabel naar een volledig voorraadinterval', body,
        [ref('slides', 18, 'PDF 18-19: voorraadcontrole MPU'), ref('formules', 1, 'Formules 1-4'),
         ref('tabellen', 13, 'Tabel 13.4, rij 170, kolom 0,025')])

    extend('verschil', 'Wat is hier een fout?',
        table('Eigen patroonvoorbeeld: een vast foutbedrag', ['Boekwaarde b', 'Werkelijke waarde w', 'Verschil e = b − w'], [
            ['€ 100', '€ 90', '€ 10'], ['€ 200', '€ 190', '€ 10'], ['€ 500', '€ 490', '€ 10']])
        + '<p>Het bedrag is constant, het foutpercentage is dat niet: 10%, 5% en 2%. '
        'De verschilschatter verwijdert het gemeenschappelijke niveau van de boekwaarde en '
        'schat de resterende fout. Een quotiëntschatter zou hier ten onrechte een vast percentage '
        'als beste beschrijving kiezen. Drie regels tonen het patroon; ze zijn op zichzelf geen '
        'steekproef die aan de cursusvoorwaarde van dertig fouten voldoet.</p>'
        '<p>Houd de tekenafspraak e = b − w vast. Een positieve e betekent overwaardering; '
        'een negatieve e onderwaardering. De voorbeelden met uitsluitend positieve fouten '
        'in het boek horen bij hun specifieke controlevraag. Verander bij gemengde verschillen '
        'de tekens niet zonder een expliciete opdracht of afbakening.</p>'
        '<p><strong>Bronnuance bij H8, opgave 5:</strong> de kolom <em>Fout</em> gebruikt '
        'juist w − b. Daarom hoort bij boekwaarde € 513 en Fout −€ 48 een werkelijke '
        'waarde van € 465; in onze formuleconventie is e = +€ 48. Lees eerst een '
        'controleregel en vertaal daarna het teken. Hier is Σw = € 179.044 + € 1.606 '
        '= € 180.650. De opgave bevat 22 fouten in 148 posten; de officiële uitwerking '
        'gebruikt MPU. Een andere kolomtitel heft de cursusvoorwaarde van dertig fouten '
        'voor de verschilschatter niet op.</p>',
        [ref('slides', 20, 'PDF 20-22: constant verschil en minimaal 30 fouten'),
         ref('formules', 1, 'Formule 6: e = b − w'), bookref('boek-h8a', 208),
         ref('opgaven', 5, 'H8, opgave 5: tegengestelde tekenrichting in kolom Fout'),
         ref('uitwerkingen', 6, 'H8, opgave 5: werkelijke som en MPU-uitwerking')])
    body = '<p>De cijfers uit tentamen maart 2025 vragen om twee vertalingen: van een '
    body += 'gegeven gemiddelde boekwaarde naar een steekproeftotaal, en van een totale fout '
    body += 'naar een werkelijke populatiewaarde. Schrijf die vertalingen op vóór de variantieformule.</p>'
    body += table('Elektroconsum: gegevens voor de verschilschatter', ['Invoer', 'Waarde', 'Betekenis'], [
        ['N / n', '3.740 / 165', 'Populatie tegenover gecontroleerde steekproef'],
        ['B', '€ 1.980.000', 'Bekende boekwaarde van de gehele populatie'],
        ['b̄', '€ 636', 'Gemiddelde boekwaarde van de steekproef'],
        ['Σw', '€ 97.185', 'Som gecontroleerde werkelijke waarden'],
        ['Σe²', '395.000 euro²', 'Kwadratensom van de verschillen'],
        ['Aantal afwijkende posten', '43', 'Cursusvoorwaarde minstens 30 fouten is vervuld'],
    ])
    body += steps(['Σb = 165 × 636 = € 104.940. Daardoor Σe = 104.940 − 97.185 = € 7.755 en ē = € 47.',
                   'De geschatte totale fout is Nē = 3.740 × 47 = € 175.780. '
                   'De geschatte werkelijke waarde is B − Nē = € 1.804.220. Dit zijn twee verschillende antwoorden.',
                   'Gebruik alle 165 posten, ook de 122 posten met e = 0: '
                   's²<sub>e</sub> = [395.000 − 7.755²/165]/164 = 186,0671 euro².',
                   'Vermenigvuldig √186,0671/√165 met N en de eindigheidscorrectie. '
                   's<sub>V</sub> = € 3.883,5123; met t = 1,975 is E = € 7.669,9368.',
                   'Het interval voor W is [€ 1.796.550,06; € 1.811.889,94]. '
                   'Afronden naar buiten op € 10.000 geeft [€ 1.790.000; € 1.820.000].'])
    body += ('<p class="note"><strong>Bronnuance.</strong> De opgavecijfers zijn onderling niet helemaal '
             'consistent. Als alle € 7.755 aan fouten in 43 posten zit, is de kleinst mogelijke '
             'kwadratensom 7.755²/43 ≈ 1.398.605 euro², ruim meer dan de gegeven 395.000. '
             'De officiële uitwerking rekent toch met de gegeven Σe². Volg op het tentamen de '
             'gegeven cijfers en deze rekenroute. Uit deze tegenstrijdige gegevens kan de werkelijke '
             'spreiding niet worden vastgesteld. Als het fouttotaal en het aantal foutposten kloppen, '
             'is de opgegeven kwadratensom te laag.</p>')
    body += exercise('<p>Gebruik dit interval om ook een interval voor de totale fout F = B − W '
                     'te bepalen. Welke grens moet je van B aftrekken voor de ondergrens van F?</p>',
                     '<p>Bij F = B − W keert de volgorde om. De kleinste fout hoort bij de grootste '
                     'W. Gebruik dus [B − bovengrens W; B − ondergrens W] = '
                     '[€ 168.110,06; € 183.449,94], vóór eventuele gevraagde afronding. '
                     'Een interval voor de totale fout mag je niet als interval voor de werkelijke waarde presenteren.</p>')
    add('verschil', 'De gegevenstabel lezen en de juiste waarde rapporteren', body,
        [ref('exam2025', 1, 'Elektroconsum, vraag 1-3; uitwerking PDF 11'),
         ref('formules', 1, 'Formules 6-11'), ref('tabellen', 13, 'Rij 160; kolom 0,025')])

    extend('quotient', 'Een vast percentage herkennen',
        table('Eigen patroonvoorbeeld: een vaste goedratio', ['Boekwaarde b', 'Werkelijke waarde w', 'Verschil e', 'w/b'], [
            ['€ 100', '€ 90', '€ 10', '0,90'], ['€ 200', '€ 180', '€ 20', '0,90'],
            ['€ 500', '€ 450', '€ 50', '0,90']])
        + '<p>Bij grotere boekwaarden groeit het foutbedrag mee. Een vast bedrag aftrekken '
        'past dan minder goed dan vermenigvuldigen met een verhouding. De goedratio gebruikt '
        'Σw/Σb en geeft daardoor grote boekwaarden het passende gewicht in de totale verhouding. '
        'Bijvoorbeeld b = 100 en 900 met w = 50 en 900 geven q = 950/1.000 = 0,95; '
        'het ongewogen gemiddelde van 0,50 en 1,00 zou 0,75 zijn en beantwoordt een andere vraag.</p>'
        '<p><strong>Een eerdere meting als hulpvariabele:</strong> in H8, opgave 6 is b '
        'het gedeclareerde bedrag van vorig jaar en w dat van dit jaar; B = € 125.000 '
        'is het bekende totaal van vorig jaar voor alle werknemers. In opgave 7 zijn '
        'b en w de winkelomzetten vóór en tijdens de campagne; B = € 1.282.000. '
        'Dezelfde schatters gebruiken nu een verandering in plaats van een administratieve '
        'fout. Een ratio boven één kan dus groei betekenen. Koppel steeds dezelfde werknemer '
        'of winkel en gebruik het bekende totaal van de gehele populatie.</p>'
        '<p>Maak ook de beperking zichtbaar: de eerste honderd binnengekomen declaraties '
        'in opgave 6 vormen niet vanzelf een aselecte steekproef. Een rekenuitkomst herstelt '
        'die selectie niet. De vergelijking vóór en tijdens de campagne in opgave 7 '
        'bewijst op zichzelf geen oorzakelijk campagne-effect.</p>',
        [ref('slides', 23, 'PDF 23-26: quotiëntschatter'), bookref('boek-h8b', 211),
         ref('opgaven', 5, 'H8, opgave 6, PDF 5-6: declaraties vorig en huidig jaar'),
         ref('opgaven', 6, 'H8, opgave 7: omzet voor en tijdens de campagne'),
         ref('uitwerkingen', 6, 'H8, opgave 6, PDF 6-8: betekenis b en w'),
         ref('uitwerkingen', 8, 'H8, opgave 7, PDF 8-9: betekenis b en w')])
    extend('quotient', 'Spreiding die na de verhouding overblijft',
        '<p>De term −2qR<sub>bw</sub>s<sub>b</sub>s<sub>w</sub> corrigeert voor de samenhang '
        'tussen boekwaarde en werkelijke waarde. De twee variaties onafhankelijk optellen '
        'zou de resterende onzekerheid verkeerd berekenen. q is dimensieloos, maar '
        's<sub>q</sub> staat hier in euro en is geen standaardfout van een percentage.</p>',
        [ref('formules', 1, 'Formules 12-17; twee routes voor s_q'), bookref('boek-h8b', 212)])
    N, n, q, sw, sb, r = 2500, 100, .95, 38, 40, .98
    sq = sqrt(sw*sw - 2*q*r*sb*sw + q*q*sb*sb)
    se = N*sq/sqrt(n)*sqrt((N-n)/(N-1))
    body = '<p><strong>Eigen oefencasus op basis van de cursusformules.</strong> Een voorraad '
    body += 'bevat 2.500 posten met een totale boekwaarde van € 500.000. In een aselecte '
    body += 'steekproef van 100 posten zijn 70 afwijkingen gevonden; het foutpatroon is ongeveer '
    body += 'proportioneel met de boekwaarde. Bereken een tweezijdig 95%-interval.</p>'
    body += table('Gegevens voor een volledige quotiëntschatting', ['Grootheid', 'Waarde'], [
        ['Σb / Σw', '€ 20.000 / € 19.000'], ['s<sub>b</sub> / s<sub>w</sub>', '€ 40 / € 38'],
        ['R<sub>bw</sub>', '0,98'], ['N / n / B', '2.500 / 100 / € 500.000']])
    body += steps(['q = 19.000/20.000 = 0,95; Ŵ<sub>Q</sub> = 0,95 × 500.000 = € 475.000.',
                   's²<sub>q</sub> = 38² − 2 × 0,95 × 0,98 × 40 × 38 + 0,95² × 40² '
                   '= 57,76 euro²; s<sub>q</sub> = € 7,60.',
                   's<sub>Q</sub> = 2.500 × (7,60/√100) × √(2.400/2.499) = ' + money(se) + '.',
                   'df = 99: tabellenbundel PDF 13, rij 95, kolom 0,025 geeft t = 1,985.',
                   'E = ' + money(1.985*se) + '; interval [' + money(475000-1.985*se)
                   + '; ' + money(475000+1.985*se) + '].'])
    body += exercise('<p>De accountant wil daarnaast de geschatte totale overwaardering rapporteren. '
                     'Bereken dat bedrag. Leg uit waarom € 7,60 niet de marge van deze schatting is.</p>',
                     '<p>De geschatte overwaardering is B − Ŵ = € 25.000, ook te berekenen '
                     'als (1 − q)B = 0,05 × € 500.000. € 7,60 is de resterende spreiding '
                     'op het niveau van een post. Die moet eerst naar de standaardfout van '
                     'het totale bedrag worden omgerekend, en daarna met de kritieke waarde '
                     'worden vermenigvuldigd.</p>')
    add('quotient', 'Een volledige casus: van goedratio tot interval', body,
        [ref('formules', 1, 'Eigen oefening volgens formules 12-17'),
         ref('slides', 23, 'Methode en voorwaarden: PDF 23-26'), ref('tabellen', 13, 'Rij 95; kolom 0,025')])
    q = 803403/830066
    sq = sqrt((34730934-2*(1-q)*53988529+(1-q)**2*1871695609)/399)
    se = 3500*sq/sqrt(400)*sqrt(3100/3499)
    W = q*7360817
    add('quotient', 'De tweede rekenroute: fouttotalen en productsommen',
        '<p>Het boek geeft sommen waarmee je formule 14 kunt invullen '
        'zonder eerst s<sub>b</sub>, s<sub>w</sub> en R afzonderlijk te berekenen. '
        'Dit is nuttig wanneer een tentamencasus juist zulke kolommen aanlevert.</p>'
        + table('Sommen en populatiegegevens van de voorraadcasus uit het boek',
                ['Grootheid', 'Waarde'], [
                    ['N / n / B', '3.500 / 400 / € 7.360.817'],
                    ['Σw / Σb', '€ 803.403 / € 830.066'],
                    ['Σe²', '34.730.934 euro²'],
                    ['Σbe', '53.988.529 euro²'],
                    ['Σb²', '1.871.695.609 euro²'],
                ])
        + steps(['q = 803.403/830.066 = ' + number(q, 8) + '.',
                 's²<sub>q</sub> = [34.730.934 − 2(1 − q) × 53.988.529 '
                 '+ (1 − q)² × 1.871.695.609]/399. Neem de wortel: '
                 's<sub>q</sub> = ' + money(sq, 4) + '.',
                 'Ŵ<sub>Q</sub> = qB = ' + money(W) + '; s<sub>Q</sub> = '
                 + money(se) + '.',
                 'De actuele cursusregel geeft bij df = 399 de onderste t-rij: '
                 't = 1,960 bij 95% tweezijdig. Daarmee wordt het interval ['
                 + money(W-1.96*se) + '; ' + money(W+1.96*se) + '].'])
        + '<p class="note">Dit is een rekenillustratie uit het boek. Het boek '
        'meldt voor deze steekproef 28 fouten en rekent ondanks die uitzondering '
        'verder. Op het tentamen toets je de expliciete cursusvoorwaarde van '
        'minstens 30 fouten; deze boekuitzondering heft die niet op. '
        'Ook gebruikt het boek afgeronde invoer en t = 1,966. De uitkomst '
        'hierboven gebruikt de gepubliceerde sommen en de huidige tabelregel. '
        'Daarom wijkt zij enigszins af van het afgedrukte boekinterval.</p>',
        [bookref('boek-h8a', 209), bookref('boek-h8b', 213),
         ref('formules', 1, 'Formule 14: resterende spreiding uit fouttotalen'),
         ref('programma', 4, 'Huidige cursusregel voor df > 200')])
    add('quotient', 'Boekverdieping: wanneer verbetert de quotiëntschatter MPU?',
        '<p>De <strong>variatiecoëfficiënt</strong> vergelijkt spreiding met het '
        'gemiddelde: VC<sub>b</sub> = s<sub>b</sub>/b̄ en '
        'VC<sub>w</sub> = s<sub>w</sub>/w̄. Het is relatieve spreiding en '
        'heeft geen geldeenheid. Bij positieve gemiddelden geeft het boek '
        'de volgende voorwaarde voor een kleinere berekende onzekerheid '
        'van quotiënt dan van MPU:</p>'
        '<div class="formula">R<sub>bw</sub> > ½ × '
        'VC<sub>b</sub>/VC<sub>w</sub></div>'
        '<p>Als beide variatiecoëfficiënten ongeveer gelijk zijn, vereenvoudigt '
        'dit tot R<sub>bw</sub> > 0,5. In de eigen quotiëntcasus hierboven is '
        'VC<sub>b</sub> = 40/200 = 0,20 en VC<sub>w</sub> = 38/190 = 0,20. '
        'R = 0,98 ligt boven 0,5. Het verband met boekwaarde laat dus '
        'minder restspreiding over dan MPU. Deze vergelijking vervangt '
        'de overige voorwaarden voor een bruikbaar interval niet.</p>',
        [bookref('boek-h8b', 212), bookref('boek-h8b', 213)])

    body = '<p>De regressieschatter gebruikt een lineair verband met een vrije constante '
    body += 'en helling. Het volgende eigen invulvoorbeeld maakt zichtbaar wat de correctie op '
    body += 'MPU doet. Neem N = 1.000, n = 100, B = € 105.000, b̄ = € 100, w̄ = € 95, '
    body += 's<sub>b</sub> = € 40, s<sub>w</sub> = € 38 en R<sub>bw</sub> = 0,98.</p>'
    body += table('De regressiecorrectie lezen', ['Onderdeel', 'Berekening', 'Betekenis'], [
        ['MPU', '1.000 × 95 = € 95.000', 'Directe schatting uit werkelijke waarden'],
        ['b₁', '0,98 × 38/40 = 0,931', 'Verwachte verandering in w bij één euro meer b'],
        ['B − Nb̄', '105.000 − 1.000 × 100 = € 5.000', 'Steekproef bevat gemiddeld relatief lage boekwaarden'],
        ['Correctie', '0,931 × 5.000 = € 4.655', 'Verwachte waardeverandering op basis van die boekwaarde-afwijking'],
        ['Ŵ<sub>R</sub>', '95.000 + 4.655 = € 99.655', 'Voor de hulpvariabele gecorrigeerde totaalschatting'],
    ])
    body += '<p>De correctie is positief omdat de echte gemiddelde boekwaarde € 105 is, '
    body += 'terwijl de steekproef gemiddeld € 100 bevat. Alleen MPU gebruiken zou die '
    body += 'bekende informatie onbenut laten. Bij een negatieve helling zou de richting '
    body += 'van de correctie omkeren. Schrijf daarom steeds beide tekens uit.</p>'
    body += '<h3>Als de opgave productsommen geeft</h3><div class="formula">'
    body += 'b₁ = [Σbw − (Σb × Σw)/n] / [Σb² − (Σb)²/n]</div>'
    body += '<p>Met dezelfde oefengegevens zijn Σb = 10.000, Σw = 9.500, '
    body += 'Σb² = 1.158.400 en Σbw = 1.097.470,4. De gecentreerde teller is 147.470,4; '
    body += 'de noemer is 158.400. Hun verhouding is opnieuw 0,931. '
    body += 'De teller meet gezamenlijk variëren; de noemer corrigeert voor de spreiding in b. '
    body += 'Als alle boekwaarden gelijk zijn, is die noemer nul en is deze helling niet te bepalen.</p>'
    body += exercise('<p>Gebruik dezelfde oefengegevens, maar neem B = € 95.000. '
                     'Wat wordt Ŵ<sub>R</sub>? Verandert bij gelijkblijvende overige gegevens '
                     'de berekende standaardfout?</p>',
                     '<p>B − Nb̄ = −€ 5.000, dus de correctie is −€ 4.655. '
                     'Ŵ<sub>R</sub> = € 90.345. De standaardfout blijft gelijk: B '
                     'staat niet in de standaardfoutformule. De plaats van het interval '
                     'verschuift, terwijl de marge bij dezelfde N, n, s<sub>w</sub>, R en t gelijk blijft.</p>')
    add('regressieschatter', 'De correctie verklaren en de helling uit productsommen berekenen', body,
        [ref('slides', 27, 'PDF 27-33: regressieschatter en correctieterm'),
         ref('formules', 2, 'Formules 18-24'), bookref('boek-h8b', 214)],
        after='Corrigeren voor een afwijkende steekproef')
    add('regressieschatter', 'De vier schatters vergeleken',
        '<p>Alle vier schatters schatten hetzelfde: het werkelijke populatietotaal W. '
        'Ze verschillen in de informatie die ze gebruiken en daardoor in de spreiding '
        'die in de standaardfout terechtkomt. De standaardfout heeft steeds dezelfde vorm, '
        'N × s/√n × √((N − n)/(N − 1)); alleen s verschilt. Datzelfde geldt voor de '
        'formule voor de benodigde steekproefomvang.</p>'
        + table('Welke schatter kies je?', ['Schatter', 'Kies deze als', 'Nodig naast N en n', 'Puntschatting', 'Spreiding s in de standaardfout', 'Voorwaarde'], [
            ['Direct (MPU)', 'Er geen bruikbare boekwaarden zijn, of de werkelijke waarden weinig uiteenlopen', 'w̄ en s<sub>w</sub>', 'N × w̄', 's<sub>w</sub>: spreiding van de werkelijke waarden', 'Aselecte steekproef; bij n &lt; 100 normaliteit beoordelen'],
            ['Verschil', 'Het foutbedrag per post ongeveer gelijk is, los van de postgrootte', 'B, ē en s<sub>e</sub>', 'B − N × ē', 's<sub>e</sub>: spreiding van de fouten e = b − w', 'Minstens 30 fouten in de steekproef'],
            ['Quotiënt', 'Het foutpercentage ongeveer gelijk is: grote posten hebben grote fouten', 'B, Σw en Σb (of w̄, b̄), s<sub>w</sub>, s<sub>b</sub>, R<sub>bw</sub>', 'q × B met q = Σw/Σb', 's<sub>q</sub>: spreiding van w − q × b', 'Minstens 30 fouten in de steekproef'],
            ['Regressie', 'Er een lineair verband tussen b en w is, zonder vast bedrag of vast percentage', 'B, w̄, b̄, s<sub>w</sub>, s<sub>b</sub>, R<sub>bw</sub> en b₁', 'N × w̄ + b₁(B − N × b̄)', 's<sub>w</sub> × √(1 − R²<sub>bw</sub>): het onverklaarde deel', 'Lineair verband; foutverdeling beoordelen'],
        ])
        + '<h3>Zo kies je op het tentamen</h3>'
        + steps(['Zijn de boekwaarden per post en het boektotaal B bekend? Zo nee, dan kan alleen MPU.',
                 'Bevat de steekproef minstens 30 fouten? Zo nee, dan vallen verschil- en quotiëntschatter af.',
                 'Kijk naar het foutpatroon: een vast foutbedrag wijst op de verschilschatter, een vast foutpercentage op de quotiëntschatter, een algemeen lineair verband op de regressieschatter.',
                 'Onderbouw je keuze in woorden met het patroon uit de gegevens, niet alleen met het kleinste interval.'])
        + '<h3>Hoe goed werken ze? De resultaten uit het boek</h3>'
        + '<p>Het boek past alle schatters toe op dezelfde voorraadcase (N = 3.500, n = 400, '
        'gewenste marge € 150.000) en herhaalt dat met twintig steekproeven.</p>'
        + table('Gerealiseerde marge per schatter in de boekcase', ['Schatter', 'Marge steekproef 1', 'Gemiddelde marge', 'Interval mist W'], [
            ['Direct (MPU)', '€ 220.399', '€ 221.864 (20 steekproeven)', '2 van 20'],
            ['Verschil', '€ 93.068', '€ 108.856 (20 steekproeven)', '2 van 20'],
            ['Quotiënt', '€ 93.409', '€ 109.117 (20 steekproeven)', '2 van 20'],
            ['Regressie', '€ 93.051', '€ 108.751 (20 steekproeven)', '2 van 20'],
            ['MPU, 5 strata (cumulatieve boekwaarde)', '€ 190.343', '€ 148.012 (10 steekproeven)', 'niet vermeld'],
            ['MPU, 5 strata (cumulatieve wortel f)', '€ 121.938', '€ 123.673 (10 steekproeven)', 'niet vermeld'],
        ])
        + '<p>Wat leer je hieruit? MPU is duidelijk het minst nauwkeurig. De drie schatters die '
        'de boekwaarde gebruiken, liggen dicht bij elkaar; de regressieschatter is net de beste, '
        'maar vraagt de meeste invoer. Stratificatie maakt MPU flink nauwkeuriger, zeker met de '
        'wortelmethode, maar haalt in deze populatie niet de hulpvariabeleschatters. Het boek '
        'benadrukt dat dit bij een andere populatie anders kan uitpakken: hoe beter de populatie '
        'in homogene strata te splitsen is, hoe meer stratificatie oplevert.</p>'
        + '<h3>De onderlinge relaties verklaren</h3>'
        + table('Bijzondere gevallen van de puntschatting', ['Voorwaarde in de regressieschatter', 'Wat blijft over?', 'Verklaring'], [
            ['b₁ = 0', 'MPU: Nw̄', 'Boekwaarden geven geen lineaire correctie'],
            ['b₁ = 1', 'Verschil: B − N(b̄ − w̄)', 'Eén euro boekwaarde hangt samen met één euro werkelijke waarde'],
            ['b₁ = w̄/b̄ en b₀ = 0', 'Quotiënt: (w̄/b̄)B', 'Het verband loopt door de oorsprong'],
            ['B = Nb̄', 'Regressie, verschil en quotiënt hebben dezelfde puntschatting als MPU', 'De gemiddelde boekwaarde van steekproef en populatie is gelijk'],
        ])
        + '<p>De regressieschatter is dus de algemene vorm; de andere drie zijn bijzondere gevallen '
        'met een vaste helling of een lijn door de oorsprong. Omdat de regressieschatter minder '
        'beperkingen heeft, is hij in principe het nauwkeurigst. Gelijke puntschattingen betekenen '
        'niet automatisch gelijke standaardfouten.</p>'
        '<p>Eén waarschuwing uit het boek geldt voor alle schatters die met fouten werken: het '
        'interval heeft alleen de gekozen betrouwbaarheid als de verschillen ongeveer normaal '
        'verdeeld zijn. In de praktijk zijn veel verschillen nul. Dan valt het berekende interval '
        'vaak te smal uit en mist het de werkelijke waarde vaker dan de gekozen α.</p>',
        [bookref('boek-h8b', 217), bookref('boek-h8b', 218), bookref('boek-h8b', 219),
         bookref('boek-h8c', 230), ref('slides', 34, 'Gerealiseerde marges per schatter')])

    extend('steekproefomvang', 'Werk terug vanaf de gewenste precisie',
        '<p>De omvangsformule is een <strong>planningsberekening</strong>: zij voorspelt welke '
        'omvang bij vastgehouden spreiding en kritieke waarde nodig is. In een volgende '
        'steekproef kunnen de geschatte spreiding en het foutpatroon veranderen. Bereken '
        'het interval daarom opnieuw na uitvoering.</p>'
        + table('Welke s² gaat in de planningsformule?', ['Schatter', 'Te gebruiken variantie', 'Reden'], [
            ['MPU', 's²<sub>w</sub>', 'Werkelijke postwaarden worden rechtstreeks opgeschaald'],
            ['Verschil', 's²<sub>e</sub>', 'Alleen de resterende foutbedragen worden geschat'],
            ['Quotiënt', 's²<sub>q</sub>', 'Restspreiding na de vaste verhouding'],
            ['Regressie', 's²<sub>w</sub>(1 − R²<sub>bw</sub>)', 'Alleen onverklaarde spreiding blijft over'],
        ])
        + '<p>Het boek benadert in de omvangsformule N − 1 door N. Daardoor krijg je '
        'n = N/(1 + γ). Gebruik bij het evalueren van het werkelijke interval wel de '
        'eindigheidscorrectie uit het formuleblad. Kies niet willekeurig een t-waarde '
        'die een gunstiger aantal oplevert; volg de opgave of de gegeven planningswaarde.</p>',
        [ref('formules', 1, 'Formules 5 en 11'), ref('formules', 2, 'Formule 24'),
         ref('slides', 35, 'Quotiëntschatter plannen met s_q²'), bookref('boek-h8a', 207)])
    N, t, sq, E, old_n = 28946, 1.96, 213.51, 310000, 1000
    gamma = E*E/(t*t*N*sq*sq)
    required = N/(1+gamma)
    add('steekproefomvang', 'De slides doorrekenen: van gewenste marge naar extra controles',
        '<p>De slides vergelijken vier gerealiseerde marges en willen de quotiëntschatter '
        'nauwkeuriger maken. De gewenste <em>marge</em> is € 310.000, dus de gewenste '
        'totale breedte € 620.000.</p>'
        + table('Invoer uit de colleges', ['Grootheid', 'Waarde'], [
            ['N', '28.946'], ['Reeds gecontroleerd n', '1.000'], ['s<sub>q</sub>', '€ 213,51'],
            ['t', '1,960'], ['E', '€ 310.000']])
        + steps(['γ = 310.000²/(1,960² × 28.946 × 213,51²) = ' + number(gamma, 5) + '.',
                 'n = 28.946/(1 + γ) = ' + number(required, 5) + '; rond omhoog naar '
                 + number(ceil(required), 0) + '.',
                 'Er zijn al 1.000 controles: aanvullend nodig ' + str(ceil(required)-1000) + '.',
                 'Na uitbreiding tonen de slides een nieuwe s<sub>q</sub> van € 195,17 en '
                 'een gerealiseerde marge van circa € 283.305. Die is kleiner dan de '
                 'geplande € 310.000 doordat de nieuwe spreiding lager is.'])
        + exercise('<p><strong>Eigen vervolg op de cursuscasus.</strong> Een collega wil in γ '
                   '€ 620.000 invullen, omdat dat de toegestane totale breedte is. '
                   'Wat gebeurt er en waarom is dat onjuist?</p>',
                   '<p>De ingevoerde E verdubbelt. Door E² wordt γ vier keer zo groot '
                   'en wordt n kleiner. Je zou dus te weinig posten plannen voor de '
                   'werkelijk toegestane marge. Het interval heeft breedte 2E; '
                   'in de formule hoort € 310.000.</p>'),
        [ref('slides', 34, 'PDF 34-36: vergelijking, uitbreiding en nieuwe evaluatie')])

    # De twee stratificatiebeelden uit de gebruikersvoorbeelden volledig reconstrueren.
    extend('stratificatie', 'Waarom opdelen?',
        '<p>Waarop deel je in? Op de <strong>boekwaarde</strong>: die ken je al vóór de '
        'controle, terwijl de werkelijke waarden pas na de controle bekend zijn. De slides '
        'noemen vier à vijf strata als vuistregel. Dat is geen garantie: beoordeel of de '
        'groepen echt homogener worden en of ieder stratum genoeg controles krijgt.</p>',
        [ref('slides', 38, 'PDF 38-39: nut, eigen inzicht en indelingsmethoden'), bookref('boek-h8b', 219)])
    cumulative, rows = 0, []
    for label, count, amount in SLIDE_CLASSES:
        cumulative += amount
        rows.append([label, number(count, 0), number(amount, 0), number(cumulative, 0)])
    rows.append(['≥ 10.000: volledige controle', '48', '621.778', 'Buiten de cumulatie'])
    body = '<p>Dit is de volledige tabel uit de colleges. De grenzen in de eerste kolom '
    body += 'betreffen <strong>boekwaarde per post</strong>; de laatste kolom telt eurobedragen '
    body += 'van alle posten tot die grens op. Verwar die twee eurogrootheden niet.</p>'
    body += table('Collegetabel: boekwaarde per klasse en cumulatief bedrag',
                  ['Boekwaarde per post (€)', 'Aantal posten', 'Som boekwaarden (€)', 'Cumulatief (€)'], rows)
    body += steps(['Haal de 48 posten met boekwaarde ≥ € 10.000 apart voor volledige controle. '
                   'De overige 4.775 posten hebben samen € 14.306.659 boekwaarde.',
                   'Voor vier steekproefstrata is het streefbedrag per groep '
                   '14.306.659/4 = € 3.576.664,75. Cumulatieve doelen: '
                   '€ 3.576.664,75; € 7.153.329,50; € 10.729.994,25.',
                   'Vergelijk ieder doel met de beschikbare cumulatieve bedragen. '
                   'Bij het eerste doel ligt € 3.554.809 dichtbij: de bijbehorende '
                   'boekwaardegrens per post is € 3.000, niet € 3.554.809.',
                   'Bij het tweede doel kies je € 7.807.828 (grens € 5.000); '
                   'bij het derde € 11.176.794 (grens € 7.000). Zonder individuele '
                   'postgegevens splits je de beschikbare klassen niet willekeurig.'])
    body += table('Resultaat: van cumulatieve bedragen naar afzonderlijke strata',
                  ['Stratum', 'Boekwaarde per post (€)', 'Nᵢ', 'Boekwaarde in stratum (€)'], [
                      [1, '0 tot < 3.000', '2.700', '3.554.809'],
                      [2, '3.000 tot < 5.000', '1.111', '4.253.019'],
                      [3, '5.000 tot < 7.000', '567', '3.368.966'],
                      [4, '7.000 tot < 10.000', '397', '3.129.865'],
                      ['Totaal zonder topstratum', '', '4.775', '14.306.659']])
    body += '<p>Het tweede stratum bevat bijvoorbeeld € 7.807.828 − € 3.554.809 '
    body += '= € 4.253.019. Een cumulatief totaal is dus niet hetzelfde als de '
    body += 'boekwaarde van dat ene stratum. De aantallen hoeven niet gelijk te zijn: '
    body += 'deze methode streeft naar ongeveer gelijke totale boekwaarde.</p>'
    body += exercise('<p>Verklaar met de oorspronkelijke tabel waarom de grens tussen '
                     'stratum 2 en 3 bij € 5.000 ligt en niet bij € 4.000. '
                     'Bereken ook het aantal posten in stratum 3.</p>',
                     '<p>Doel 2 is € 7.153.329,50. Bij grens € 4.000 is het cumulatieve '
                     'bedrag € 5.948.884, een afstand van € 1.204.445,50. Bij grens '
                     '€ 5.000 is dat € 7.807.828, afstand € 654.498,50. De laatste '
                     'ligt dichterbij. Stratum 3 bevat de klassen € 5.000 tot € 6.000 '
                     'en € 6.000 tot € 7.000: 300 + 267 = 567 posten.</p>')
    add('stratificatie', 'De volledige collegestabel: cumulatieve boekwaarde en grenzen', body,
        [ref('slides', 40, 'PDF 40-41: oorspronkelijke klassen en gekozen strata'),
         bookref('boek-h8c', 221)], after='Waarom opdelen?')

    cumulative, rows = 0, []
    for label, width, count in ROOT_CLASSES:
        root = sqrt(width*count)
        cumulative += root
        rows.append([label, number(width, 0), number(count, 0), number(width*count, 0),
                     number(root), number(cumulative)])
    body = '<p>De tweede boekmethode houdt rekening met de verdeling van de aantallen '
    body += 'en de breedte van de boekwaardeklassen. In cursusopgave H8.8 hebben de '
    body += 'klassen verschillende breedtes. Bereken per klasse √(breedte × frequentie) '
    body += 'en tel die <em>wortels</em> op. Neem niet eerst de totale frequentie en '
    body += 'daarna één wortel.</p>'
    body += table('H8.8b: volledige rekenkolommen, zonder het 100%-stratum',
                  ['Boekwaardeklasse (€)', 'Breedte', 'Frequentie', 'Breedte × frequentie', 'Wortel', 'Cumulatief'], rows)
    body += steps(['Het cumulatieve worteltotaal is ' + number(cumulative) + '. '
                   'De vier streefdelen zijn elk ' + number(cumulative/4) + '.',
                   'Vergelijk doelen 1.802,20; 3.604,40 en 5.406,60 met de cumulatieve '
                   'kolom. De nabije beschikbare grenzen zijn 1.943,67; 3.671,02 en 5.618,65.',
                   'Lees vervolgens de bijbehorende bovengrenzen uit de boekwaardeklassen: '
                   '€ 1.200, € 2.500 en € 5.000. De vierde groep eindigt bij € 10.000.',
                   'Tel de frequenties binnen de nieuwe groepen op. Gebruik pas die '
                   'groepsomvangen bij de allocatie.'])
    body += table('Twee indelingen van dezelfde cursuspopulatie H8.8',
                  ['Methode', 'Grenzen van vier strata (€)', 'Aantallen Nᵢ'], [
                      ['Cumulatieve boekwaarde', '0 / 1.600 / 3.000 / 5.000 / 10.000', '4.078 / 1.927 / 1.107 / 547'],
                      ['Cumulatieve wortel', '0 / 1.200 / 2.500 / 5.000 / 10.000', '3.196 / 2.329 / 1.587 / 547']])
    body += '<p>Beide indelingen tellen op tot 7.659 posten. De verschillen zijn '
    body += 'inhoudelijk: de eerste verdeelt ongeveer het bedrag, de tweede benut '
    body += 'de vorm van de frequentieverdeling. Het boek vindt in zijn voorbeeld '
    body += 'een betere precisie met de wortelmethode; dat is geen garantie voor '
    body += 'iedere populatie. Vergelijk uiteindelijk de gerealiseerde standaardfouten.</p>'
    body += exercise('<p>Waarom is voor de klasse € 5.000 tot € 7.500 de rekenwaarde '
                     '√(2.500 × 418) en niet √418? Welke gegeven informatie gaat '
                     'verloren als je alleen de frequentie gebruikt?</p>',
                     '<p>De klassen zijn ongelijk breed. Deze klasse beslaat € 2.500, '
                     'terwijl de eerste klassen € 400 breed zijn. Breedte × frequentie '
                     'neemt dat verschil mee volgens de boekmethode. Alleen √frequentie '
                     'gebruiken zou een andere indeling opleveren. Bij gelijke breedtes '
                     'is de breedte een gemeenschappelijke factor; hier niet.</p>')
    add('stratificatie', 'Ook de wortelmethode volledig uit een klassentabel opbouwen', body,
        [ref('opgaven', 7, 'H8.8a-b, oorspronkelijke klassegegevens'),
         ref('uitwerkingen', 10, 'H8.8b, volledige worteltabel'), bookref('boek-h8c', 222)])

    ni = [2700, 1111, 567, 397]
    si = [200, 250, 300, 500]
    denominator = sum(N*s for N, s in zip(ni, si))
    alloc_rows = []
    for i, (N, s, assigned) in enumerate(zip(ni, si, [114, 58, 36, 42]), 1):
        alloc_rows.append([i, number(N, 0), number(s, 0), number(N*s, 0),
                           number(250*N*s/denominator, 3), assigned,
                           number(250*N/sum(ni), 3)])
    body = '<p><strong>Allocatie</strong> bepaalt hoeveel controles ieder al gevormd '
    body += 'stratum krijgt. De stratumgrenzen veranderen hierbij niet. '
    body += 'Neyman-allocatie gebruikt omvang én vooraf geschatte spreiding. '
    body += 'Bij gelijke controlekosten krijgen grotere en meer variabele groepen '
    body += 'meer waarnemingen, omdat daar meer onzekerheid te verminderen is.</p>'
    body += table('Collegevoorbeeld: 250 controles verdelen over 4.775 posten',
                  ['Stratum', 'Nᵢ', 'Vooraf sᵢ', 'Nᵢsᵢ', 'Neyman onafgerond', 'Neyman geheel', 'Evenredig onafgerond'], alloc_rows)
    body += '<div class="formula">Neyman: nᵢ = n × Nᵢsᵢ / ΣNᵢsᵢ<br>'
    body += 'Evenredig: nᵢ = n × Nᵢ / N</div>'
    body += steps(['ΣNᵢsᵢ = 1.186.350. Voor stratum 1: 250 × 540.000/1.186.350 '
                   '= 113,794 en dus 114 controles.',
                   'Bij Neyman worden de aantallen 114, 58, 36 en 42. Controleer '
                   'dat ze samen 250 zijn. De 48 integraal gecontroleerde posten '
                   'vallen buiten deze verdeling; totale controle-inspanning is dan 298 posten.',
                   'Bij evenredige verdeling zijn de onafgeronde aantallen circa '
                   '141,361; 58,168; 29,686 en 20,785. Een verdeling met som 250 '
                   'is 141, 58, 30 en 21.',
                   'Stratum 4 krijgt bij Neyman meer controles: zijn sᵢ = 500 is '
                   'groter dan bij de andere strata. Bij gelijke sᵢ vallen die '
                   'spreidingsfactoren weg en wordt Neyman gelijk aan evenredige allocatie.'])
    body += '<p>Een vast totaal n moet behouden blijven. Als gewoon afronden een '
    body += 'ander totaal geeft, verdeel de resterende plaatsen na afronden naar '
    body += 'beneden op basis van de grootste fracties, tenzij de opgave een andere '
    body += 'afspraak geeft. Dit is een praktische afrondingsregel. Geen groep '
    body += 'kan meer unieke controles krijgen dan Nᵢ; een volledig gecontroleerde '
    body += 'groep wordt vervolgens apart behandeld.</p>'
    body += '<p><strong>Planning versus uitvoering:</strong> de vooraf geschatte '
    body += 'sᵢ uit deze allocatietabel is niet automatisch de werkelijk gevonden '
    body += 's<sub>w,i</sub>. Gebruik bij de schatting de na controle gegeven '
    body += 'sommen, kwadratensommen en gerealiseerde nᵢ. De collegecasus hieronder '
    body += 'illustreert dat onderscheid.</p>'
    body += '<p><strong>Aanvullende boekvariant:</strong> het boek noemt '
    body += 'ook allocatie evenredig aan de totale <em>boekwaarde</em> per '
    body += 'stratum. Als die bedragen ongeveer gelijk zijn, leidt dat '
    body += 'tot ongeveer gelijke aantallen controles. Dat is een andere '
    body += 'keuze dan de standaard evenredige allocatie Nᵢ/N. '
    body += 'Lees daarom expliciet of de opdracht op aantallen of bedragen '
    body += 'wil verdelen.</p>'
    body += exercise('<p>Een tweede eigen planning heeft twee even grote groepen. '
                     's₁ = 100 en s₂ = 300; totaal n = 80. Verdeel evenredig en volgens Neyman. '
                     'Wanneer heeft evenredige allocatie hier toch een praktische reden?</p>',
                     '<p>Evenredig: 40 en 40. Neyman: verhouding 100:300, dus 20 en 60. '
                     'Als betrouwbare voorafgaande spreidingsschattingen ontbreken, kan '
                     'evenredige allocatie een uitvoerbare keuze zijn. Neyman met verzonnen '
                     'spreidingen heeft geen onderbouwd voordeel. Onder de gegeven '
                     'betrouwbare spreidingen en gelijke kosten richt Neyman meer '
                     'controle-inspanning op de variabelere groep.</p>')
    add('stratificatie', 'Neyman en evenredige allocatie naast elkaar uitrekenen', body,
        [ref('slides', 42, 'PDF 42-46: allocatieformules en volledige tabellen'),
         bookref('boek-h8c', 224), bookref('boek-h8c', 226)], after='Hoe verdeel je de steekproef?')

    estimates = [mpu(*data) for data in SLIDE_STRATA]
    W = sum(v['estimate'] for v in estimates) + 621778
    se = sqrt(sum(v['se']**2 for v in estimates))
    body = '<p>Na de controles worden per stratum de werkelijke waarden '
    body += 'samengevat. Deze oorspronkelijke collegedata sluiten aan op de '
    body += 'Neyman-aantallen hierboven. Gebruik bij elke rij de eigen Nᵢ en nᵢ, '
    body += 'ook in de eindigheidscorrectie.</p>'
    body += table('Collegevoorbeeld: invoer voor de gestratificeerde MPU-schatting',
                  ['Stratum', 'Nᵢ', 'nᵢ', 'Σwᵢ (€)', 'Σwᵢ² (euro²)'],
                  [[i, number(N, 0), n, number(total, 0), number(square, 0)]
                   for i, (N, n, total, square) in enumerate(SLIDE_STRATA, 1)])
    body += steps(['Stratum 1: gemiddelde = 7.000/114 = € 61,4035. '
                   'Ŵ₁ = 2.700 × 61,4035 = € 165.789,47. De factor is 2.700 '
                   'omdat dit stratum die omvang heeft.',
                   's²<sub>w,1</sub> = [475.000 − 7.000²/114]/113 = 399,7826 euro². '
                   'De wortel is € 19,9946. De vooraf gebruikte 200 uit de allocatie '
                   'vervang je dus door de werkelijk gevonden spreiding.',
                   's<sub>Ŵ₁</sub> = 2.700 × (19,9946/√114) × √(2.586/2.699) '
                   '= € 4.949,21. Dit is de standaardfout van het stratumtotaal, '
                   'niet de spreiding van een losse post.',
                   'Herhaal dezelfde route voor alle vier strata. De onderstaande '
                   'weergave is afgerond; de verdere berekening gebruikt onafgeronde waarden.'])
    body += table('Uitkomsten en variantiebijdragen per stratum',
                  ['Stratum', 'Gemiddelde (€)', 'Ŵᵢ (€)', 's<sub>w,i</sub> (€)',
                   'Standaardfout totaal (€)', 'Variantiebijdrage (euro²)'],
                  [[i, number(v['mean']), number(v['estimate']), number(v['sd'], 4),
                    number(v['se']), number(v['se']**2)] for i, v in enumerate(estimates, 1)])
    body += '<p>De vier puntschattingen tellen op tot € 697.078,47. '
    body += 'De controle van de 48 grote posten levert volgens het collegevoorbeeld '
    body += 'een werkelijk totaal van € 621.778 op. Tel dit één keer erbij: '
    body += 'Ŵ = ' + money(W) + '. Als bij volledige controle een ander werkelijk '
    body += 'totaal wordt gevonden dan de boekwaarde, gebruik je dat gecontroleerde totaal.</p>'
    body += '<div class="formula">s²<sub>tot</sub> = Σs²<sub>Ŵᵢ</sub> = '
    body += number(sum(v['se']**2 for v in estimates)) + ' euro²<br>s<sub>tot</sub> = '
    body += money(se) + '</div>'
    body += '<p>Bij onafhankelijke steekproeven per stratum tellen varianties op. '
    body += 'Afwijkingen van schattingen kunnen elkaar in het totaal deels compenseren; '
    body += 'standaardfouten rechtstreeks optellen telt hun onzekerheden verkeerd samen. '
    body += 'Het integraal gecontroleerde topstratum voegt een waarde toe en heeft '
    body += 'geen steekproefvariantie.</p>'
    body += '<p>Gegeven effectieve df > 200: tabellenbundel PDF 13, rij inf., '
    body += 'kolom 0,025 geeft t = 1,960. E = ' + money(1.96*se) + '. '
    body += 'Het tweezijdige 95%-interval is [' + money(W-1.96*se) + '; '
    body += money(W+1.96*se) + ']. Bij afronding naar buiten op € 1.000 '
    body += 'wordt dit [€ 1.303.000; € 1.335.000]. De collegedia rondt het '
    body += 'midden tot € 1.318.856 en de marge tot € 15.590 af.</p>'
    body += exercise('<p>Stel dat dezelfde integrale controle een werkelijke topwaarde '
                     'van € 600.000 oplevert. De vier steekproeven blijven gelijk. '
                     'Wat verandert aan het midden en de marge?</p>',
                     '<p>De nieuwe puntschatting is € 697.078,47 + € 600.000 = '
                     '€ 1.297.078,47. De marge blijft € 15.590,31, omdat de '
                     'steekproefvarianties niet veranderen en de topgroep geheel is '
                     'gecontroleerd. De oude ongecontroleerde boekwaarde van de '
                     'topgroep nogmaals optellen zou de schatting te hoog maken.</p>')
    add('stratificatie', 'De volledige MPU-stratacase: iedere rij tot en met het interval', body,
        [ref('slides', 48, 'PDF 48-49: invoer, vier uitkomsten en totaalschatting'),
         ref('formules', 2, 'Formules 25-27: combinatie van strata; df wordt gegeven'),
         ref('tabellen', 13, 'Rij inf.; kolom 0,025'), bookref('boek-h8c', 226)],
        after='De groepen samenvoegen', formula_guide=True)

    # Boek 8.20 was in de eerdere aanvulling alleen genoemd, niet als route uitgewerkt.
    body = '<p>Een te brede gestratificeerde schatting kun je op twee manieren '
    body += 'verbeteren: opnieuw over alle groepen verdelen, of gericht groepen met '
    body += 'een grote variantiebijdrage uitbreiden. Het boek behandelt beide. '
    body += 'De volgende algemene route is formule 8.20 en gebruikt een directe '
    body += 'schatter per stratum.</p>'
    body += '<div class="formula">γ = E² / [t² × Σ(Nᵢs²ᵢ)]<br>n = N / (1 + γ)</div>'
    body += '<p>N betreft de populatie waaruit wordt getrokken; een integraal '
    body += 'gecontroleerd topstratum staat daarbuiten. De formule sluit aan op '
    body += 'de cursusbenadering bij evenredige verdeling en vastgehouden '
    body += 'stratumspreidingen. Voor een andere allocatie mag je niet zonder '
    body += 'controle dezelfde n-verdeling invullen. E is de gewenste marge voor '
    body += 'de totaalschatting.</p>'
    body += table('Eigen invulvoorbeeld bij boekformule 8.20', ['Stratum', 'Nᵢ', 'sᵢ', 'Nᵢs²ᵢ'], [
        [1, 600, 20, '240.000'], [2, 400, 40, '640.000'], ['Som', '1.000', '', '880.000']])
    gamma = 3000**2/(2**2*880000)
    required = 1000/(1+gamma)
    body += steps(['Gegeven planningswaarde t = 2 en gewenste marge E = € 3.000.',
                   'γ = 3.000²/(2² × 880.000) = ' + number(gamma, 6) + '.',
                   'n = 1.000/(1 + γ) = ' + number(required, 6) + '; naar boven '
                   'afgerond 282. Een evenredige verdeling is 169 en 113 controles.',
                   'Reken de marge vervolgens na met deze gehele aantallen en '
                   'de twee afzonderlijke eindigheidscorrecties. Die is ongeveer '
                   '€ 2.995,10 en voldoet dus aan de gestelde € 3.000.'])
    body += '<p>Het alternatief is de al behandelde uitbreiding van één stratum: '
    body += 'doelvariantie (E/t)² minus de ongewijzigde bijdragen van andere strata '
    body += 'geeft de maximaal toegestane bijdrage van de te vergroten groep. '
    body += 'Vergelijk variantiebijdragen, niet alleen sᵢ of aantallen posten. '
    body += 'De bijdrage bevat ook Nᵢ, nᵢ en de eindigheidscorrectie.</p>'
    body += exercise('<p>Stel: de gewenste totale variantie is 100, terwijl '
                     'de ongewijzigde andere strata samen al 120 bijdragen. '
                     'Kan extra controle uitsluitend in één geselecteerd stratum '
                     'voldoende zijn?</p>',
                     '<p>Nee. Voor dat stratum zou maximaal 100 − 120 = −20 '
                     'variantie overblijven; een variantie kan niet negatief zijn. '
                     'Zelfs integrale controle van die ene groep laat 120 over. '
                     'Ook andere groepen moeten worden uitgebreid of de opzet '
                     'moet inhoudelijk opnieuw worden beoordeeld.</p>')
    add('steekproefomvang', 'Alle strata uitbreiden of gericht één bijdrage verkleinen', body,
        [bookref('boek-h8c', 230), bookref('boek-h8c', 231),
         ref('uitwerkingen', 13, 'H8.9c: gerichte uitbreiding van stratum 3')], formula_guide=True)
    add('stratificatie', 'Van tabel naar een onderbouwde tentamenuitwerking',
        '<p>Bij een stratificatiecasus horen verschillende beslissingen achter elkaar. '
        'Maak zichtbaar welke informatie je in iedere stap gebruikt; daarmee is '
        'ook een tussenuitkomst controleerbaar.</p>'
        + table('Werkvolgorde en de reden achter iedere stap', ['Stap', 'Wat je noteert', 'Wat dit voorkomt'], [
            ['1. Populatie afbakenen', 'N, B en apart volledig gecontroleerde posten', 'Topgroep dubbel tellen of in een verkeerde noemer opnemen'],
            ['2. Grenzen bepalen', 'Cumulatieve doelwaarden, gekozen klassegrenzen, nieuwe Nᵢ', 'Cumulatieve bedragen als individuele boekwaardegrenzen lezen'],
            ['3. Allocatie plannen', 'Evenredig of Neyman, invoer en som van nᵢ', 'Gelijke aantallen verwarren met evenredige verdeling'],
            ['4. Gegevens evalueren', 'Werkelijke nᵢ, Σwᵢ, Σwᵢ² of andere schattergegevens', 'Voorafgaande spreidingen blijven gebruiken na de controle'],
            ['5. Schattingen combineren', 'Som geschatte totalen plus gecontroleerde topwaarde', 'Een ongewogen gemiddelde van stratumgemiddelden nemen'],
            ['6. Onzekerheid combineren', 'Som van varianties, daarna wortel en t', 'Standaardfouten optellen of eigen df verzinnen'],
            ['7. Eis beoordelen', 'Marge E tegenover toegestane marge; uitbreiding indien nodig', 'Totale breedte vergelijken met een halve breedte'],
        ])
        + '<p>Ook binnen strata kan een verschil-, quotiënt- of regressieschatter '
        'passend zijn. Dan bereken je per groep de bij die methode horende '
        'puntschatting en standaardfout; de combinatie van onafhankelijke '
        'stratumtotalen blijft via optellen van schattingen en varianties lopen. '
        'Controleer de methodevoorwaarden binnen de gebruikte groepen. '
        'Stratificatie en een hulpvariabeleschatter zijn dus verschillende '
        'keuzen die je onder passende omstandigheden kunt combineren.</p>'
        '<p>Voor het tentamen hoef je de effectieve vrijheidsgraden van een '
        'gestratificeerde schatting niet zelf af te leiden als deze gegeven zijn. '
        'Het formuleblad zegt dat ze in de opgave worden meegedeeld. Gebruik '
        'niet automatisch totaal n − 1; de bijdragen van strata zijn verschillend.</p>',
        [ref('slides', 47, 'PDF 47-49: methode per stratum en totale evaluatie'),
         ref('formules', 2, 'Effectieve vrijheidsgraden worden meegedeeld'), bookref('boek-h8c', 231)])

    # Dezelfde casusuitwerking is ook bereikbaar vanuit de formulegids.
    formula_cases = {
        'rekenen': ['Een gegevenstabel in beide richtingen doorrekenen'],
        'mpu': ['Van samenvattingstabel naar een volledig voorraadinterval'],
        'verschil': ['De gegevenstabel lezen en de juiste waarde rapporteren'],
        'quotient': ['Een volledige casus: van goedratio tot interval',
                    'De tweede rekenroute: fouttotalen en productsommen'],
        'regressieschatter': ['De correctie verklaren en de helling uit productsommen berekenen'],
        'steekproefomvang': ['De slides doorrekenen: van gewenste marge naar extra controles'],
        'stratificatie': ['De volledige collegestabel: cumulatieve boekwaarde en grenzen',
                         'Ook de wortelmethode volledig uit een klassentabel opbouwen',
                         'Neyman en evenredige allocatie naast elkaar uitrekenen'],
    }
    for slug, titles in formula_cases.items():
        for title in titles:
            section = next(s for s in L[slug]['sections'] if s['title'] == title)
            if not any(g['title'] == title for g in L[slug]['formulaGuide']):
                L[slug]['formulaGuide'].append(dict(section))
    # Leesvolgorde stratificatie: opdelen, grenzen, allocatie, schatten, uitbreiden.
    order = ['SET-opfrisser', 'Waarom opdelen?', 'Hoe kies je de grenzen van de strata?',
             'De volledige collegestabel: cumulatieve boekwaarde en grenzen',
             'Ook de wortelmethode volledig uit een klassentabel opbouwen',
             'Stratagrenzen bepalen vanuit de cursusopgave',
             'Hoe verdeel je de steekproef?', 'Neyman en evenredige allocatie naast elkaar uitrekenen',
             'De groepen samenvoegen', 'De volledige MPU-stratacase: iedere rij tot en met het interval',
             'Van tabel naar een onderbouwde tentamenuitwerking', 'Gericht extra controles in één stratum']
    rank = {title: i for i, title in enumerate(order)}
    L['stratificatie']['sections'].sort(key=lambda s: rank.get(s['title'], len(order)))
    for slug in IDS:
        L[slug]['samplingVersion'] = VERSION


def verify_examples():
    """Rekenkundige checks van broninvoer, keuzegrenzen en onafhankelijke routes."""
    assert sum(row[1] for row in SLIDE_CLASSES) == 4775
    assert sum(row[2] for row in SLIDE_CLASSES) == 14306659
    assert sum(row[2] for row in ROOT_CLASSES) == 7659
    assert abs(sum(sqrt(w*n) for _, w, n in ROOT_CLASSES)-7208.79) < .02
    values = [mpu(*data) for data in SLIDE_STRATA]
    W = sum(v['estimate'] for v in values)+621778
    se = sqrt(sum(v['se']**2 for v in values))
    assert abs(W-1318856.4720421745) < 1e-6
    assert abs(se-7954.238637086968) < 1e-6
    assert abs(1.96*se-15590.307728690457) < 1e-6
    # Equivalent variance routes from individual values.
    raw = [80, 90, 110, 120]
    assert abs(sum((x-100)**2 for x in raw)/3-(sum(x*x for x in raw)-sum(raw)**2/4)/3) < 1e-9
    # Source-sum variance and rounded slide SE differ only by documented rounding.
    large = mpu(5230, 180, 398000, 5378400500)
    assert abs(large['estimate']-11564111.11111111) < 1e-6
    assert abs(large['se']*1.974-3790970.666392443) < 1e-6
    # Product-sum slope equals the correlation slope used in the new exercise.
    assert abs((1097470.4-10000*9500/100)/(1158400-10000**2/100)-.98*38/40) < 1e-10
    # Check exact evaluation after the integer planning allocation.
    planned_se = sqrt(600**2*20**2/169*(600-169)/(600-1)
                      + 400**2*40**2/113*(400-113)/(400-1))
    assert 2*planned_se <= 3000
    # Eigen quotiëntcasus: k foutposten met som Σe vragen Σe² ≥ (Σe)²/k; 70 past, 40 niet.
    sum_e2 = 99*(40**2 + 38**2 - 2*.98*40*38) + 1000**2/100
    assert 1000**2/70 <= sum_e2 < 1000**2/40
    return dict(slideEstimate=W, slideSE=se, plannedMargin=2*planned_se,
                sourceMPUMargin=1.974*large['se'])


if __name__ == '__main__':
    print(verify_examples())
