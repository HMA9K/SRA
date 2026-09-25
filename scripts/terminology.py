"""Source-grounded terminology for the SRA lessons and interactive experiments.

The short examples are original teaching examples, not additional exam data.
References use the same source identifiers and PDF page numbering as the course.
Aliases deliberately omit isolated mathematical letters such as B, n, s or beta.
Q-Q terminology explains the existing teaching diagram; its reference points to
the source's normality analysis, not to a separate examination requirement.
"""

_REFS = {
    'beginnen': [('slides', 12, 'Inleiding schatten, PDF-pagina 12 tot en met 15')],
    'rekenen': [('formules', 1, 'Formule 1 en 7: gemiddelde en steekproefspreiding')],
    'onzekerheid': [('slides', 3, 'Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17'), ('programma', 4, 'Tabelregels')],
    'mpu': [('formules', 1, 'Formules 1 tot en met 5: directe schatter'), ('slides', 13, 'MPU, PDF-pagina 13 tot en met 19')],
    'verschil': [('formules', 1, 'Formules 6 tot en met 11: verschilschatter'), ('slides', 20, 'Verschilschatter en toepassingsvoorwaarden')],
    'quotient': [('formules', 1, 'Formules 12 tot en met 17: quotiëntschatter'), ('slides', 23, 'Quotiëntschatter en toepassingsvoorwaarden')],
    'regressieschatter': [('formules', 2, 'Formules 18 tot en met 24: regressieschatter'), ('exam2024', 1, 'Vraag 1 tot en met 3')],
    'steekproefomvang': [('formules', 2, 'Formule 24; vergelijk ook formule 5 en 11 op PDF-pagina 1'), ('exam2024', 1, 'Vraag 2: omvang en uitbreiding')],
    'stratificatie': [('formules', 2, 'Formules 25 tot en met 29'), ('exam2025', 12, 'Vraag 4 tot en met 6: allocatie en topstratum')],
    'regressielijn': [('formules', 2, 'Formules 30 tot en met 34'), ('attentie', 3, 'Enkelvoudige regressie, PDF-pagina 3 tot en met 4')],
    'anova': [('formules', 3, 'Formules 35 tot en met 43'), ('exam2024', 4, 'Vraag 9 tot en met 10: ANOVA')],
    'toetsen': [('formules', 3, 'Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4'), ('attentie', 4, 'Toetsen, PDF-pagina 4 tot en met 5 en 8')],
    'diagnostiek': [('formules', 3, 'Formules 44 tot en met 49'), ('attentie', 5, 'Regressiediagnostiek, PDF-pagina 5 tot en met 6')],
    'voorspellen': [('formules', 3, 'Formule 50: individueel voorspellingsinterval'), ('attentie', 6, 'Voorspelling')],
    'meervoudig': [('formules', 3, 'Formules 51 tot en met 54; vergelijk formule 61 en 62 op PDF-pagina 4'), ('attentie', 7, 'Meervoudige regressie'), ('exam2025', 14, 'Vraag 19 tot en met 20: salaris en dummyvariabelen')],
    'transformaties': [('formules', 3, 'Formules 55 tot en met 58'), ('attentie', 7, 'Transformaties, PDF-pagina 7 tot en met 8')],
    'modelbouw': [('formules', 4, 'Formules 59 tot en met 63'), ('attentie', 7, 'Modelbouw en multicollineariteit, PDF-pagina 7 tot en met 8')],
    'validatie': [('formules', 4, 'Formule 64: voorspelfout op testgegevens'), ('attentie', 9, 'Validatie, zie ook PDF-pagina 8')],
    'tentamen': [('programma', 4, 'Toetsing en literatuur, PDF-pagina 4 tot en met 5'), ('exam2025', 11, 'Uitwerkingen met berekening en conclusie')],
}

TERMS = []


def _add(id, term, aliases, definition, example, lesson, refs=None):
    """Build the JSON-compatible schema without importing the course builder."""
    TERMS.append({
        'id': id,
        'term': term,
        'aliases': aliases,
        'definition': definition,
        'example': example,
        'lesson': lesson,
        'refs': [dict(source=source, page=page, locator=locator)
                 for source, page, locator in (refs or _REFS[lesson])],
    })


# Basis: van de onderzoeksvraag naar meetbare gegevens.
_add('populatie', 'Populatie', ['populaties'],
     'De volledige verzameling waarover je een uitspraak wilt doen. N is het aantal elementen in die verzameling.',
     'Alle 1.000 facturen van een onderneming vormen de populatie; N = 1.000.', 'beginnen')
_add('populatieomvang', 'Populatieomvang', ['populatiegrootte'],
     'Het aantal elementen in de populatie, aangeduid met hoofdletter N. Het is een aantal, geen geldbedrag.',
     'Bij een voorraad van 2.500 artikelen is de populatieomvang 2.500, ongeacht hun waarde.', 'beginnen')
_add('steekproef', 'Steekproef', ['steekproeven'],
     'De onderzochte selectie uit de populatie. Je gebruikt gegevens uit die selectie om iets over de hele populatie te schatten of te toetsen.',
     'Je controleert 100 van de 1.000 facturen; die 100 vormen de steekproef.', 'beginnen')
_add('steekproefgrootte', 'Steekproefgrootte', ['steekproefgroottes', 'steekproefomvang', 'steekproefomvangen', 'steekproefaantal', 'steekproefaantallen'],
     'Het aantal onderzochte elementen, aangeduid met kleine letter n. Bij evaluatie gebruik je het werkelijk onderzochte aantal.',
     'Er waren 80 controles gepland, maar er zijn er 85 uitgevoerd. Voor de berekening gebruik je n = 85.', 'steekproefomvang')
_add('aselect', 'Aselecte steekproef', ['aselect', 'aselecte', 'aselecte steekproeven'],
     'Een steekproef die met een toevalsprocedure wordt getrokken, zodat persoonlijke voorkeur de selectie niet bepaalt. De SRA-schatters veronderstellen een passende steekproeftrekking.',
     'Je loot factuurnummers in plaats van alleen eenvoudig te controleren facturen te kiezen.', 'mpu')
_add('selectiebias', 'Selectieve steekproef', ['selectieve steekproeven', 'selectiebias', 'verkeerde selectie'],
     'Een selectie die bepaalde soorten elementen systematisch bevoordeelt. Een groter aantal controles verhelpt zo’n selectieprobleem niet automatisch.',
     'Alleen goedkope artikelen controleren geeft hier een te laag beeld van de gemiddelde voorraadwaarde.', 'beginnen')
_add('waarneming', 'Waarneming', ['waarnemingen', 'observatie', 'observaties'],
     'Eén vastgelegd onderzoeksgeval met de bijbehorende gemeten waarden. Leg vast of één geval bijvoorbeeld een artikel, persoon of tijdstip is.',
     'Eén werknemer met leeftijd 40 en salaris € 3.500 vormt één waarneming in een salarisbestand.', 'beginnen')
_add('variabele', 'Variabele', ['variabelen'],
     'Een kenmerk dat je per waarneming vastlegt en dat verschillende waarden kan aannemen.',
     'Leeftijd en salaris zijn twee variabelen die je voor dezelfde werknemers kunt meten.', 'beginnen')
_add('parameter', 'Parameter', ['parameters', 'populatieparameter', 'populatieparameters'],
     'Een meestal onbekend kenmerk van de populatie of het populatiemodel. Je schat het met gegevens uit een steekproef.',
     'De werkelijke gemiddelde waarde van alle artikelen is een parameter; het gemiddelde van 100 gecontroleerde artikelen schat die waarde.', 'beginnen')
_add('steekproefgrootheid', 'Steekproefgrootheid', ['steekproefgrootheden'],
     'Een getal dat je uit de steekproef berekent. De uitkomst kan anders zijn als je een andere steekproef trekt.',
     'Het gemiddelde van de gecontroleerde artikelen is een steekproefgrootheid.', 'beginnen')
_add('boekwaarde', 'Boekwaarde', ['boekwaarden', 'boekwaardetotaal'],
     'De administratief geregistreerde waarde. In de schatters staat bᵢ voor een post en B voor het bekende boekwaardetotaal van de populatie.',
     'Een artikel staat voor € 100 in de administratie: de boekwaarde is € 100.', 'beginnen')
_add('werkelijke-waarde', 'Werkelijke waarde', ['werkelijke waarden', 'werkelijk totaal'],
     'De waarde die je voor het onderzoek wilt vaststellen. Bij geldbedragschattingen vergelijk je deze met de boekwaarde; het volledige werkelijke populatietotaal is meestal onbekend.',
     'Een artikel met boekwaarde € 100 blijkt na controle € 90 waard.', 'beginnen')
_add('eenheid', 'Meeteenheid', ['meeteenheden', 'eenheden'],
     'De schaal waarin een variabele is gemeten, zoals euro’s, jaren of centimeters. De eenheid bepaalt hoe je coëfficiënten en uitkomsten uitlegt.',
     'Een voorspelling van 3,5 betekent € 3.500 als de salarisvariabele in duizenden euro’s staat.', 'beginnen')

# Rekenen en spreiding.
_add('gemiddelde', 'Gemiddelde', ['gemiddelden', 'steekproefgemiddelde', 'rekenkundig gemiddelde', 'Mean'],
     'De som van de waarden gedeeld door het aantal waarden. Een streep boven een letter geeft vaak dit gemiddelde aan.',
     'Bij 80, 100 en 120 is het gemiddelde (80 + 100 + 120) / 3 = 100.', 'rekenen')
_add('somteken', 'Somteken', ['somnotatie', 'sigma', 'sommatie'],
     'Het teken Σ betekent: tel de aangegeven termen op. Let erop of je eerst kwadrateert of pas na het optellen.',
     'Bij 2 en 4 is Σw² = 4 + 16 = 20, maar (Σw)² = 6² = 36.', 'rekenen')
_add('kwadraat', 'Kwadraat', ['kwadraten', 'kwadrateren', 'gekwadrateerd', 'gekwadrateerde'],
     'Een getal vermenigvuldigd met zichzelf. Ook een negatief getal heeft een niet-negatief kwadraat.',
     '(−3)² = (−3) × (−3) = 9.', 'rekenen')
_add('vierkantswortel', 'Vierkantswortel', ['vierkantswortels', 'worteltrekken'],
     'De niet-negatieve waarde die, met zichzelf vermenigvuldigd, het getal onder het wortelteken oplevert.',
     '√225 = 15, want 15 × 15 = 225.', 'rekenen')
_add('spreiding', 'Spreiding', ['spreiden'],
     'Hoe sterk waarden van elkaar en van hun centrum verschillen. Standaardafwijking en variantie zijn manieren om die verschillen in een getal samen te vatten.',
     '90, 100 en 110 hebben hetzelfde gemiddelde als 0, 100 en 200, maar veel minder spreiding.', 'rekenen')
_add('afwijking', 'Afwijking van het gemiddelde', ['afwijkingen van het gemiddelde'],
     'De waarde van een waarneming minus het gemiddelde. Afwijkingen boven en onder het gemiddelde tellen samen op tot nul.',
     'Bij een gemiddelde van 100 is de afwijking van 80 gelijk aan −20.', 'rekenen')
_add('variantie', 'Variantie', ['varianties', 'steekproefvariantie', 'steekproefvarianties'],
     'Een maat voor gekwadrateerde spreiding. De steekproefvariantie is de som van de gekwadrateerde afwijkingen van het gemiddelde, gedeeld door n − 1.',
     'Bij 90 en 110 is het gemiddelde 100 en s² = (100 + 100) / 1 = 200.', 'rekenen')
_add('standaardafwijking', 'Standaardafwijking', ['standaardafwijkingen', 'standaarddeviatie', 'Std. Deviation', 'Std.Deviation', 'Std. dev'],
     'De wortel uit de variantie. Zij beschrijft de spreiding van individuele waarden in dezelfde eenheid als die waarden.',
     'Een variantie van 225 euro² hoort bij een standaardafwijking van 15 euro.', 'rekenen')
_add('standaardfout', 'Standaardfout', ['standaardfouten', 'standard error', 'Std. Error', 'Std.Error', {'text': 'SE', 'caseSensitive': True}],
     'De spreiding van een schatter over mogelijke steekproeven. Zij beschrijft de onzekerheid van een schatting, niet de spreiding van individuele posten.',
     'Bij s = 20 en n = 100 is de standaardfout van het gemiddelde vóór eindigheidscorrectie 20 / √100 = 2.', 'rekenen',
     [('formules', 1, 'Formules 4, 10 en 17: standaardfouten van de geschatte totalen'),
      ('slides', 13, 'Onzekerheid van populatiegemiddelde en populatietotaal')])
_add('tussenafronding', 'Tussenafronding', ['tussenafrondingen', 'tussenuitkomst', 'tussenuitkomsten'],
     'Afronden voordat de hele berekening af is. Dit kan de einduitkomst veranderen; reken in SRA bij voorkeur verder met onafgeronde tussenwaarden.',
     'Gebruik een berekende standaardfout van 1.898,31599 in de volgende stap, ook als je 1.898,32 toont.', 'rekenen')

# Kans, schatten en intervallen.
_add('kans', 'Kans', ['kansen', 'kanswaarde'],
     'Een getal tussen 0 en 1 dat aangeeft hoe waarschijnlijk een uitkomst of gebeurtenis is binnen het gebruikte kansmodel.',
     'Een kans van 0,05 is hetzelfde als 5%.', 'onzekerheid')
_add('verdeling', 'Verdeling', ['verdelingen', 'kansverdeling', 'kansverdelingen'],
     'Een beschrijving van welke waarden voorkomen of mogelijk zijn en hoe vaak of met welke kans dat gebeurt.',
     'Een verdeling kan laten zien dat de meeste waarden rond 100 liggen en slechts enkele rond 200.', 'onzekerheid')
_add('normale-verdeling', 'Normale verdeling', ['normaalverdeling', 'normaal verdeeld', 'normaal verdeelde', 'klokvorm'],
     'Een symmetrische, klokvormige kansverdeling met veel waarden rond het gemiddelde en minder waarden verder daarvan af.',
     'Bij een gemiddelde van 100 liggen waarden 90 en 110 even ver van het midden van dezelfde normale verdeling.', 'onzekerheid')
_add('standaardnormaal', 'Standaardnormale verdeling', ['z-verdeling', 'standaardnormale z-verdeling'],
     'De normale verdeling op een gestandaardiseerde schaal, met gemiddelde 0 en standaardafwijking 1. Bij veel vrijheidsgraden nadert de t-verdeling deze vorm.',
     'Een z-waarde van 2 ligt twee standaardafwijkingen boven het gemiddelde.', 'onzekerheid')
_add('t-verdeling', 'Student-t-verdeling', ['t-verdeling', 'Student t', 'Student-t'],
     'Een symmetrische verdeling die rekening houdt met onzekerheid door het schatten van spreiding. De vorm hangt af van de vrijheidsgraden; bij weinig vrijheidsgraden zijn de staarten zwaarder.',
     'Voor dezelfde betrouwbaarheid is bij weinig vrijheidsgraden doorgaans een grotere kritieke t nodig.', 'onzekerheid')
_add('staart', 'Staart', ['staarten', 'staartkans', 'staartkansen', 'linkerstaart', 'rechterstaart'],
     'Het uiterste linker- of rechterdeel van een verdeling. De staartkans is de kans op uitkomsten in dat gebied.',
     'Een tweezijdig 95%-interval laat 2,5% in elke staart over.', 'onzekerheid')
_add('betrouwbaarheid', 'Betrouwbaarheid', ['betrouwbaarheidsniveau'],
     'De gekozen dekking van een intervalmethode, 1 − α. Bij herhaalde geschikte steekproeven bevat ongeveer dit aandeel van de op dezelfde manier gemaakte intervallen de vaste werkelijke parameter.',
     'Bij een 95%-methode bevatten op lange termijn ongeveer 95 van 100 intervallen de werkelijke waarde.', 'onzekerheid')
_add('betrouwbaarheidsinterval', 'Betrouwbaarheidsinterval', ['betrouwbaarheidsintervallen', 'schattingsinterval', 'schattingsintervallen'],
     'Een onder- en bovengrens voor een onbekende parameter, gemaakt met een gekozen intervalmethode en betrouwbaarheid. Het is geen interval waarin datzelfde percentage individuele waarnemingen moet vallen.',
     'Een interval voor de totale voorraadwaarde is [€ 96.000; € 104.000], niet een bereik voor losse artikelen.', 'onzekerheid')
_add('puntschatting', 'Puntschatting', ['puntschattingen'],
     'Eén getal als schatting van een onbekende populatiewaarde. Een puntschatting alleen laat de onzekerheid nog niet zien.',
     '€ 100.000 is de puntschatting van de totale voorraadwaarde.', 'onzekerheid')
_add('marge', 'Onnauwkeurigheidsmarge', ['onnauwkeurigheidsmarges', 'onzekerheidsmarge', 'onzekerheidsmarges', 'marge', 'marges', 'onnauwkeurigheid'],
     'De afstand van de puntschatting tot één intervalgrens bij een symmetrisch interval. Deze marge E is de kritieke waarde maal de standaardfout.',
     'Een standaardfout van € 2.000 en kritieke t = 2 geven E = € 4.000.', 'onzekerheid')
_add('intervalbreedte', 'Intervalbreedte', ['totale breedte', 'totale intervalbreedte'],
     'Het verschil tussen bovengrens en ondergrens. Bij een symmetrisch interval is de totale breedte tweemaal de marge E.',
     'Bij [96; 104] is de breedte 8 en de marge 4.', 'onzekerheid')
_add('intervalgrenzen', 'Intervalgrenzen', ['ondergrens', 'bovengrens'],
     'De laagste en hoogste waarde van het berekende interval. Bij een symmetrisch interval trek je de marge van het midden af en tel je haar erbij op.',
     'Bij puntschatting 100 en marge 4 zijn de grenzen 96 en 104.', 'onzekerheid')
_add('kritieke-waarde', 'Kritieke waarde', ['kritieke waarden', 'kritieke t', 'tabelwaarde', 'tabelwaarden', 'kritieke grens', 'F-grens'],
     'Een grens uit de passende kansverdeling. Je kiest haar met de gewenste betrouwbaarheid of α, de toetsrichting en de juiste vrijheidsgraden.',
     'Gebruik een gegeven kritieke t van 2 om de standaardfout met 2 te vermenigvuldigen.', 'onzekerheid')
_add('vrijheidsgraden', 'Vrijheidsgraden', ['vrijheidsgraad', 'degrees of freedom', 'df', 'residual df'],
     'Het aantal vrij variërende componenten nadat parameters zijn geschat. Bij steekproefvariantie is dit n − 1; bij regressieresiduen met k verklarende variabelen is het n − k − 1.',
     'Bij n = 50 en k = 3 zijn er 50 − 3 − 1 = 46 residuele vrijheidsgraden.', 'anova')
_add('eindigheidscorrectie', 'Eindigheidscorrectie', ['eindige-populatiecorrectie', 'finite population correction'],
     'De factor √((N − n)/(N − 1)) die de steekproefonzekerheid verkleint bij trekking zonder teruglegging uit een eindige populatie. Bij volledige controle wordt de factor nul.',
     'Als je alle 100 van de 100 posten controleert, is de resterende steekproefonzekerheid nul.', 'mpu')
_add('afronden-buiten', 'Afronden naar buiten', ['afronding naar buiten', 'naar buiten afronden'],
     'Een interval afronden zonder het smaller te maken: de ondergrens omlaag en de bovengrens omhoog, op de gevraagde afrondingseenheid.',
     '[€ 1.234; € 1.876] wordt op € 100 naar buiten [€ 1.200; € 1.900].', 'onzekerheid')

# Vier schatters, planning en stratificatie.
_add('schatter', 'Schatter', ['schatters', 'schattingsmethode', 'schattingsmethoden'],
     'Een rekenregel waarmee je uit steekproefgegevens een onbekende populatiewaarde schat. De uitkomst van de regel is de schatting.',
     'De regel N × steekproefgemiddelde is een schatter van het populatietotaal.', 'mpu')
_add('mpu', 'Directe schatter (MPU)', ['directe schatter', 'MPU', 'Mean Per Unit', 'MPU-schatter'],
     'De schatter die het gemiddelde van de gecontroleerde werkelijke waarden met N vermenigvuldigt. MPU betekent Mean Per Unit: gemiddelde per eenheid.',
     'Bij N = 1.000 en een steekproefgemiddelde van € 80 is Ŵ_MPU = € 80.000.', 'mpu')
_add('controlefout', 'Controlefout', ['controlefouten', 'boekwaardefout', 'verschil per post'],
     'In de schattingslessen is dit boekwaarde minus werkelijke waarde: e = b − w. Een positieve e betekent dat de boekwaarde te hoog is. Deze e is iets anders dan een regressieresidu.',
     'Boekwaarde € 100 en werkelijke waarde € 90 geven e = +€ 10.', 'verschil')
_add('verschilschatter', 'Verschilschatter', ['verschilschatting', 'verschilschattingen'],
     'Een methode die de gemiddelde boekwaardefout naar de populatie doorrekent en van B aftrekt: Ŵ = B − Nē. Zij past bij ongeveer constante foutbedragen; de cursus noemt minstens 30 afwijkende posten als voorwaarde.',
     'Bij B = € 100.000, N = 1.000 en ē = € 10 wordt het geschatte werkelijke totaal € 90.000.', 'verschil')
_add('goedratio', 'Goedratio', ['goedratio’s', 'goedratios', 'verhouding van de sommen'],
     'De verhouding van de som van werkelijke waarden tot de som van boekwaarden in de steekproef: q = Σw/Σb. Dit is niet in het algemeen het gemiddelde van losse postverhoudingen.',
     'Σw = € 19.000 en Σb = € 20.000 geven q = 0,95.', 'quotient')
_add('quotientschatter', 'Quotiëntschatter', ['quotiëntschatting', 'quotientschatter', 'ratioschatter'],
     'Een methode die de goedratio met het bekende boekwaardetotaal vermenigvuldigt: Ŵ = qB. Zij past bij een ongeveer vaste verhouding; controleer ook de cursusvoorwaarde van minstens 30 afwijkende posten.',
     'Bij q = 0,95 en B = € 500.000 is het geschatte werkelijke totaal € 475.000.', 'quotient')
_add('regressieschatter', 'Regressieschatter', ['regressieschatting'],
     'De schatter van een populatietotaal die MPU corrigeert met het verschil tussen het bekende boekwaardetotaal B en de uit de steekproef doorgerekende boekwaarde Nb̄. Dit is een andere vraag dan een nieuwe y voorspellen.',
     'Als B en Nb̄ gelijk zijn, is de correctieterm b₁(B − Nb̄) nul.', 'regressieschatter')
_add('boekwaardecorrectie', 'Correctieterm', ['correctietermen', 'boekwaardecorrectie'],
     'Bij de regressieschatter is dit b₁(B − Nb̄): de aanpassing van de directe schatting met behulp van de bekende boekwaarden.',
     'Bij b₁ = 0,8 en B − Nb̄ = −€ 1.000 verlaagt de correctieterm de schatting met € 800.', 'regressieschatter')
_add('planningsformule', 'Planningsformule', ['omvangsformule', 'benodigde omvang', 'vereiste omvang'],
     'De formulebladroute waarmee je vooraf de benodigde steekproefomvang berekent uit N, gewenste marge, passende variantie en kritieke t. De benodigde omvang wordt naar boven afgerond.',
     'Een berekende omvang van 520,122 vraagt minstens 521 controles.', 'steekproefomvang')
_add('gamma', 'Gamma bij steekproefplanning', ['gamma', 'tussenstap gamma'],
     'De tussenuitkomst γ waarmee de cursus de omvangsformule schrijft als n = N/(1 + γ). γ hangt af van de gewenste marge en de variantie die bij de gekozen schatter hoort.',
     'Bij N = 1.000 en γ = 3 volgt n = 1.000 / 4 = 250.', 'steekproefomvang')
_add('uitbreiding', 'Steekproefuitbreiding', ['uitbreiding', 'uitbreiding van de steekproef', 'extra controles'],
     'Het aantal nog te controleren posten nadat je de totale vereiste omvang hebt bepaald. Trek het al gecontroleerde aantal af; de uitbreiding kan niet negatief zijn.',
     'Een vereiste omvang van 521 en 180 bestaande controles betekenen 341 extra controles.', 'steekproefomvang')
_add('stratificatie', 'Stratificatie', ['stratificeren', 'gestratificeerd', 'gestratificeerde steekproef'],
     'Een populatie verdelen in deelpopulaties en per groep steekproeven of controles uitvoeren. Relatief gelijksoortige groepen kunnen de precisie verbeteren.',
     'Verdeel voorraadartikelen in lage, middelhoge en hoge boekwaarden en schat elke groep afzonderlijk.', 'stratificatie')
_add('stratum', 'Stratum', ['strata', 'stratums', 'deelpopulatie', 'deelpopulaties'],
     'Eén van de groepen waarin een populatie bij stratificatie is verdeeld. Elke groep heeft haar eigen omvang, gemiddelde en spreiding.',
     'Alle artikelen met boekwaarde van € 100 tot € 500 vormen één stratum.', 'stratificatie')
_add('topstratum', 'Topstratum', ['topstrata'],
     'Een apart stratum met bijvoorbeeld de posten boven een hoog grensbedrag. Bij integrale controle ken je de werkelijke waarde ervan en is er voor dat deel geen steekproefonzekerheid.',
     'Je controleert alle zeer dure machines en telt hun vastgestelde werkelijke waarde bij de overige schattingen op.', 'stratificatie')
_add('integrale-controle', 'Integrale controle', ['integraal gecontroleerd', 'integraal gecontroleerde', 'volledige controle'],
     'Alle elementen van de bedoelde populatie of groep controleren. Daardoor resteert voor die groep geen onzekerheid door steekproeftrekking.',
     'Van een topstratum met 12 posten controleer je alle 12.', 'stratificatie')
_add('allocatie', 'Allocatie', ['allocatiemethode', 'allocatiemethoden', 'alloceren'],
     'De verdeling van het beschikbare steekproefaantal over strata. Na afronden moeten de aantallen samen nog steeds het gewenste totaal vormen.',
     'Van 100 controles gaan er 60 naar stratum 1 en 40 naar stratum 2.', 'stratificatie')
_add('evenredige-allocatie', 'Evenredige allocatie', ['evenredig alloceren', 'proportionele allocatie'],
     'De steekproef verdelen naar groepsomvang: nᵢ = (Nᵢ/N)n. De spreiding per groep speelt in deze verdeling geen rol.',
     'Een stratum met 60% van alle posten krijgt bij deze methode 60% van de controles.', 'stratificatie')
_add('neyman', 'Neyman-allocatie', ['Neyman', 'Neyman allocatie'],
     'Bij gelijke kosten de controles verdelen in verhouding tot Nᵢsᵢ. Een grotere groep of een groep met meer spreiding krijgt dan meer controles.',
     'Twee even grote strata met spreiding 10 en 30 krijgen controles in de verhouding 1 op 3.', 'stratificatie')

# Regressie en de ANOVA-tabel.
_add('regressie', 'Regressie', ['regressieanalyse', 'regressiemodel', 'regressiemodellen'],
     'Een model voor de samenhang tussen een uitkomst y en één of meer verklarende variabelen. Het model kan voorspellen, maar toont op zichzelf geen oorzaak-gevolgrelatie aan.',
     'Je beschrijft hoe voorspelde kosten samenhangen met productie.', 'regressielijn')
_add('enkelvoudige-regressie', 'Enkelvoudige regressie', ['enkelvoudig regressiemodel', 'enkelvoudige lineaire regressie'],
     'Regressie met één verklarende variabele. Bij een rechte lijn is de geschatte vergelijking ŷ = b₀ + b₁x.',
     'Voorspel kosten uitsluitend uit het aantal geproduceerde artikelen.', 'regressielijn')
_add('afhankelijke-variabele', 'Afhankelijke variabele', ['afhankelijke variabelen', 'te verklaren variabele', 'uitkomstvariabele', 'Dependent Variable'],
     'De uitkomst y die je met het model wilt beschrijven of voorspellen. Een meervoudig regressiemodel heeft nog steeds één afhankelijke variabele.',
     'In een salarisregressie is salaris de afhankelijke variabele.', 'regressielijn')
_add('verklarende-variabele', 'Verklarende variabele', ['verklarende variabelen', 'onafhankelijke variabele', 'onafhankelijke variabelen', 'predictor', 'predictoren'],
     'Een x-variabele die je in het model opneemt om verschillen in y te beschrijven. De naam betekent niet dat een causaal effect is aangetoond.',
     'Leeftijd kan een verklarende variabele zijn in een model voor salaris.', 'regressielijn')
_add('coefficient', 'Regressiecoëfficiënt', ['regressiecoëfficiënten', 'coëfficiënt', 'coëfficiënten'],
     'Een getal in de regressievergelijking, zoals de constante of een helling. De geschatte coëfficiënten b worden uit de data berekend; de populatiecoëfficiënten β zijn onbekend.',
     'In ŷ = 200 + 3x zijn 200 en 3 de geschatte coëfficiënten.', 'regressielijn')
_add('constante', 'Constante', ['intercept', 'Constant'],
     'De voorspelde y wanneer alle verklarende variabelen nul zijn. Als nul buiten het onderzochte gebied ligt, heeft deze waarde niet vanzelf een praktische interpretatie.',
     'In ŷ = 200 + 3x is 200 de voorspelling bij x = 0.', 'regressielijn')
_add('helling', 'Richtingscoëfficiënt', ['richtingscoëfficiënten', 'helling', 'hellingscoëfficiënt', 'hellingscoëfficiënten', 'slope'],
     'De verandering in voorspelde y bij één extra eenheid x. In meervoudige regressie geldt dit bij gelijkblijvende overige opgenomen variabelen.',
     'Bij ŷ = 200 + 3x gaat de voorspelling met 3 omhoog als x van 50 naar 51 gaat.', 'regressielijn')
_add('storingsterm', 'Storingsterm', ['storingstermen', 'storing', 'epsilon'],
     'Het onbekende deel van y dat het populatiemodel niet verklaart. De storing ε is niet direct waarneembaar; na schatting bereken je residuen als benadering.',
     'Twee personen met dezelfde opgenomen kenmerken kunnen toch een ander salaris hebben.', 'regressielijn')
_add('residu', 'Residu', ['residuen', 'residuele afwijking', 'Unstandardized Residual'],
     'De waargenomen y minus de door het geschatte model voorspelde ŷ: e = y − ŷ. Een positief residu betekent dat de waarneming boven de voorspelling ligt.',
     'Bij werkelijke kosten 380 en voorspelde kosten 350 is het residu +30.', 'regressielijn')
_add('ols', 'Kleinste-kwadratenmethode', ['kleinste kwadraten', 'OLS', 'Ordinary Least Squares'],
     'De methode die coëfficiënten kiest waarmee de som van de gekwadrateerde residuen zo klein mogelijk is.',
     'Vergelijk twee lijnen: OLS kiest de lijn met de laagste Σ(yᵢ − ŷᵢ)².', 'regressielijn')
_add('ongestandaardiseerde-coefficient', 'Ongestandaardiseerde coëfficiënt', ['ongestandaardiseerde coëfficiënten', 'Unstandardized Coefficients', 'Unstandardized B'],
     'Een geschatte coëfficiënt in de oorspronkelijke meeteenheden. Gebruik in SPSS de kolom B van Coefficients voor de gewone regressievergelijking.',
     'B = 30 bij leeftijd betekent 30 salariseenheden meer per extra jaar, bij gelijkblijvende andere kenmerken.', 'regressielijn')
_add('gestandaardiseerde-coefficient', 'Gestandaardiseerde coëfficiënt', ['gestandaardiseerde coëfficiënten', 'Standardized Coefficients', 'kolom Beta', {'text': 'Beta', 'caseSensitive': True}],
     'Een coëfficiënt nadat variabelen op een standaardafwijkingsschaal zijn uitgedrukt. SPSS noemt deze kolom Beta; gebruik haar niet in een vergelijking met de oorspronkelijke eenheden.',
     'Vul een Beta van 0,6 niet als eurocoëfficiënt in wanneer de vergelijking het salaris in euro’s moet voorspellen.', 'regressielijn')
_add('correlatie', 'Correlatie', ['correlaties', 'correlatiecoëfficiënt', 'correlatiecoëfficiënten', 'Pearsons correlatie', 'Pearson'],
     'Pearsons r beschrijft richting en sterkte van lineaire samenhang en ligt tussen −1 en 1. Een r dicht bij nul sluit een krom verband niet uit.',
     'r = −0,8 wijst op een sterk dalend lineair verband; het bewijst geen oorzaak-gevolgrelatie.', 'regressielijn')
_add('causaliteit', 'Causaliteit', ['causaal', 'causale', 'oorzaak-gevolgrelatie'],
     'Een oorzaak-gevolgrelatie. Een correlatie of regressie op zichzelf laat zo’n relatie niet zien; andere variabelen of groepsverschillen kunnen de samenhang beïnvloeden.',
     'Dat salaris met leeftijd samenhangt, toont op zichzelf niet aan dat één extra verjaardag het salaris veroorzaakt.', 'regressielijn')
_add('scatterplot', 'Spreidingsdiagram', ['spreidingsdiagrammen', 'scatterplot', 'scatter plot', 'scatterplots', 'puntenwolk'],
     'Een grafiek waarin elke waarneming een punt krijgt op de x- en y-as. Zo zie je de vorm, richting en spreiding van een verband en mogelijke groepen of uitschieters.',
     'Zet leeftijd horizontaal en salaris verticaal; iedere werknemer wordt één punt.', 'regressielijn',
     [('spss', 13, 'Spreidingsdiagrammen bij opdracht 4B'), ('attentie', 3, 'Regressie en spreidingsdiagram')])
_add('anova', 'ANOVA', ['variantieanalyse', 'Analysis of Variance', 'ANOVA-tabel'],
     'De tabel die de variatie in y bij gewone OLS-regressie met constante splitst in verklaarde en resterende variatie. De tabel bevat kwadratensommen, vrijheidsgraden, gemiddelde kwadratensommen en F.',
     'Een totale kwadratensom van 100 kan worden gesplitst in 80 verklaard en 20 resterend.', 'anova')
_add('kwadratensom', 'Kwadratensom', ['kwadratensommen', 'Sum of Squares', 'SS'],
     'Een som van gekwadrateerde afwijkingen. Welke afwijkingen worden gebruikt, bepaalt of het om totale, verklaarde of residuele variatie gaat.',
     'Residuen −2 en 3 leveren een residuele kwadratensom van 4 + 9 = 13.', 'anova')
_add('totalss', 'Totale kwadratensom', ['TotalSS', 'Total SS', 'SST', 'totale variatie'],
     'Σ(yᵢ − ȳ)²: alle gekwadrateerde afwijkingen van y ten opzichte van het gemiddelde. Bij gewone OLS met constante geldt TotalSS = SSR + SSE.',
     'Bij SSR = 80 en SSE = 20 is TotalSS = 100.', 'anova')
_add('ssr', 'Verklaarde kwadratensom', ['SSR', 'verklaarde variatie', 'Regression Sum of Squares'],
     'Σ(ŷᵢ − ȳ)²: het deel van de variatie dat de geschatte regressie verklaart. Gebruik de betekenis van de rij Regression in de SRA-ANOVA-tabel.',
     'Bij SSR = 80 en TotalSS = 100 verklaart het model 80% van de variatie.', 'anova')
_add('sse', 'Residuele kwadratensom', ['SSE', 'resterende kwadratensom', 'Sum of Squared Errors', 'Sum of Squared Residuals'],
     'Σ(yᵢ − ŷᵢ)²: de som van de gekwadrateerde residuen. OLS kiest de coëfficiënten die deze som minimaliseren.',
     'Residuen −2, 1 en 3 geven SSE = 4 + 1 + 9 = 14.', 'anova')
_add('ms', 'Gemiddelde kwadratensom', ['Mean Square', 'MS'],
     'Een kwadratensom gedeeld door de bijbehorende vrijheidsgraden. In ANOVA zijn MSR en MSE de waarden die je voor de F-verhouding gebruikt.',
     'Een SS van 80 met 2 vrijheidsgraden geeft MS = 40.', 'anova')
_add('msr', 'MSR', ['Mean Square Regression'],
     'De verklaarde kwadratensom gedeeld door het aantal verklarende variabelen: SSR/k. Dit is de teller van de globale F-verhouding.',
     'SSR = 80 en k = 2 geven MSR = 40.', 'anova')
_add('mse', 'MSE', ['Mean Squared Error', 'Mean Square Error', 'Mean Square Residual', 'residuele variantie', 'trainings-MSE'],
     'De residuele kwadratensom gedeeld door de residuele vrijheidsgraden: SSE/(n − k − 1). De wortel is de geschatte residuele standaardfout.',
     'SSE = 112 en 28 residuele vrijheidsgraden geven MSE = 4.', 'anova')
_add('residuele-standaardfout', 'Residuele standaardfout', ['Std. Error of the Estimate', 'standaardfout van het regressiemodel'],
     'De wortel uit MSE, in de eenheid van y. Zij beschrijft de geschatte spreiding rond de regressielijn en wordt in het voorspellingsinterval gebruikt.',
     'MSE = 16 geeft Std. Error of the Estimate = 4.', 'anova')
_add('r-kwadraat', 'R²', ['R-kwadraat', 'R2', 'R Square', 'determinatiecoëfficiënt'],
     'Het aandeel van de totale variatie in y dat het model verklaart: SSR/TotalSS. Het is niet het percentage waarnemingen dat exact goed voorspeld is.',
     'R² = 0,70 betekent 70% verklaarde variatie in y binnen de gebruikte gegevens.', 'anova')

# Hypothesetoetsen en betekenis van beslissingen.
_add('hypothese', 'Hypothese', ['hypothesen', 'hypotheses'],
     'Een toetsbare uitspraak over een populatie of modelparameter. Bij een toets schrijf je een nulhypothese en een alternatief op voordat je de uitkomst beoordeelt.',
     'De uitspraak dat de populatiehelling nul is, kan als nulhypothese worden getoetst.', 'toetsen')
_add('nulhypothese', 'Nulhypothese', ['nulhypothesen', 'nulhypotheses', 'H₀', 'H0'],
     'De uitspraak waarvan je bij de toetsberekening uitgaat. Je verwerpt haar als de gegevens voldoende tegenbewijs geven volgens de vooraf gekozen toets.',
     'H₀: β₁ = 0 zegt dat de populatiehelling in het onderzochte model nul is.', 'toetsen')
_add('alternatieve-hypothese', 'Alternatieve hypothese', ['alternatieve hypothesen', 'alternatieve hypotheses', 'H₁', 'H1'],
     'De uitspraak waarvoor je met de toets bewijs zoekt. Zij kan een verschil in beide richtingen of juist een vooraf gekozen positieve of negatieve richting betreffen.',
     'H₁: β₁ < 0 past bij de vraag of het verband dalend is.', 'toetsen')
_add('toetsingsgrootheid', 'Toetsingsgrootheid', ['toetsingsgrootheden', 'toetsingsuitkomst', 'toetsstatistiek'],
     'Een uit de steekproef berekend getal dat je met een toetsverdeling of kritieke grens vergelijkt, zoals t of F.',
     'Bij B = 6 en Std. Error = 2 is t = 6/2 = 3 voor een nulhypothese met coëfficiënt nul.', 'toetsen')
_add('p-waarde', 'p-waarde', ['p-waarden', 'p-value', 'p-values', 'Sig.', 'Sig'],
     'De kans, uitgaande van H₀ en de toetsaannames, op een minstens zo extreme toetsingsuitkomst. Dit is niet de kans dat H₀ waar is. SPSS noemt deze waarde vaak Sig.',
     'Een tweezijdige p = 0,03 is kleiner dan α = 0,05; bij deze toets verwerp je H₀.', 'toetsen')
_add('significantieniveau', 'Significantieniveau', ['significantieniveaus', 'alfa', 'alpha'],
     'De vooraf gekozen grens α voor de toets. Zij begrenst onder de toetsaannames het risico dat je een ware nulhypothese verwerpt.',
     'Bij α = 0,05 vergelijk je een tweezijdige p-waarde met 0,05, niet opnieuw met 0,025.', 'toetsen')
_add('significant', 'Statistische significantie', ['statistisch significant', 'significant', 'significante', 'significantie'],
     'Een toetsuitkomst die volgens het gekozen α voldoende bewijs tegen H₀ geeft. Zij zegt op zichzelf niets over de praktische grootte van een verband of causaliteit.',
     'Een significant positieve helling kan nog steeds een kleine verandering in euro’s per jaar betekenen.', 'toetsen')
_add('eenzijdig', 'Eenzijdig', ['eenzijdige toets', 'eenzijdige', 'eenzijdige toetsen', 'eenzijdig interval'],
     'Gericht op één kant: bij een toets een vooraf gekozen richting in H₁, bij een interval één relevante grens. Een tweezijdige SPSS-p mag voor een eenzijdige toets alleen worden gehalveerd als het teken bij H₁ past; anders gebruik je 1 − p/2.',
     'Bij H₁: β₁ > 0, positief B en tweezijdige p = 0,04 is de eenzijdige p = 0,02.', 'toetsen')
_add('tweezijdig', 'Tweezijdig', ['tweezijdige toets', 'tweezijdige', 'tweezijdige toetsen', 'tweezijdig interval'],
     'Gericht op beide kanten: bij een toets afwijkingen in beide richtingen, bij een interval een onder- en bovengrens. Bij de symmetrische t-verdeling krijgt elke staart α/2; een al tweezijdige p vergelijk je met de totale α.',
     'H₁: β₁ ≠ 0 vraagt of de helling positief of negatief van nul afwijkt.', 'toetsen')
_add('t-toets', 't-toets', ['t-toetsen', 'individuele t-toets'],
     'De toets van één coëfficiënt met t = (bⱼ − βⱼ,₀)/s_bⱼ. Bij toetsing tegen nul wordt dit B/Std. Error. In regressie horen n − k − 1 vrijheidsgraden bij de toets.',
     'B = −6 en Std. Error = 2 geven t = −3 voor toetsing tegen nul.', 'toetsen')
_add('f-toets', 'Globale F-toets', ['F-toets', 'F-toetsen', 'globale toets'],
     'De toets of alle hellingscoëfficiënten tegelijk nul zijn. F = MSR/MSE gebruikt k en n − k − 1 vrijheidsgraden. Een significante uitkomst wijst op minstens één niet-nulle helling.',
     'Een significante F bij drie x-variabelen betekent niet dat alle drie afzonderlijk significant zijn.', 'toetsen')
_add('kritiek-gebied', 'Kritiek gebied', ['kritieke gebied', 'verwerpingsgebied'],
     'De toetsuitkomsten waarbij je H₀ verwerpt volgens de gekozen toetsrichting en α.',
     'Bij een linkse grens −1,70 ligt t = −3 in het kritieke gebied.', 'toetsen')
_add('alpha-risico', 'α-risico', ['alfa-risico', 'alpha-risico', 'type-I-fout', 'type I-fout'],
     'Het risico een ware nulhypothese te verwerpen. α is niet de kans dat een al verworpen individuele hypothese toch waar blijkt.',
     'Je concludeert ten onrechte dat de populatiehelling afwijkt van nul terwijl zij in werkelijkheid nul is.', 'toetsen')
_add('beta-risico', 'β-risico', ['bèta-risico', 'beta-risico', 'type-II-fout', 'type II-fout'],
     'Het risico een onware nulhypothese niet te verwerpen. De waarde van dit risico is niet automatisch 1 − α.',
     'Er bestaat een populatieverband, maar de steekproef levert onvoldoende bewijs op om H₀ te verwerpen.', 'toetsen')
_add('niet-verwerpen', 'H₀ niet verwerpen', ['niet verwerpen', 'onvoldoende bewijs'],
     'De gegevens leveren bij de gekozen toets niet genoeg bewijs tegen H₀. Dit is geen bewijs dat H₀ waar is.',
     'p = 0,20 bij α = 0,05 betekent onvoldoende bewijs tegen H₀; niet dat geen enkel verband kan bestaan.', 'toetsen')

# Diagnostiek en het lezen van grafieken.
_add('crosssectie', 'Crosssectie', ['cross-section', 'crosssectioneel', 'crosssectionele gegevens'],
     'Gegevens van verschillende personen, bedrijven of andere eenheden op ongeveer hetzelfde moment.',
     'De salarissen van 200 werknemers in dezelfde maand vormen crosssectiegegevens.', 'diagnostiek')
_add('tijdreeks', 'Tijdreeks', ['tijdreeksen', 'tijdsreeks', 'tijdsreeksen'],
     'Waarnemingen die op opeenvolgende tijdstippen zijn gemeten. Hun tijdsvolgorde is relevant bij vertraging en autocorrelatie.',
     'De maandelijkse omzet van één onderneming gedurende drie jaar is een tijdreeks.', 'diagnostiek')
_add('tijdsvertraging', 'Tijdsvertraging', ['tijdsvertragingen', 'vertraagde variabele', 'lag'],
     'Een verband waarbij de relevante x eerder optreedt dan de bijbehorende y. De koppeling moet inhoudelijk passen bij de casus.',
     'Je onderzoekt of reclame-uitgaven in maand t − 1 samenhangen met omzet in maand t.', 'diagnostiek')
_add('modelaanname', 'Modelaanname', ['modelaannames', 'regressieaannames', 'modelvoorwaarden', 'aannames'],
     'Een voorwaarde waaronder de gebruikte modelberekeningen en gevolgtrekkingen passend zijn. SRA onderzoekt onder meer normaliteit, constante spreiding en autocorrelatie.',
     'Een hoge R² maakt een trechtervorm in de residuen niet onbelangrijk.', 'diagnostiek')
_add('regressiediagnostiek', 'Regressiediagnostiek', ['regressiediagnose', 'diagnostiek', 'diagnoses'],
     'Het onderzoeken van data, tabellen en residuen om te beoordelen of het regressiemodel bruikbaar is en welke problemen nader onderzoek vragen.',
     'Je bekijkt uitbijters, normaliteit en veranderende spreiding voordat je het voorspellingsinterval gebruikt.', 'diagnostiek')
_add('residuendiagram', 'Residuendiagram', ['residuenplot', 'residuendiagrammen', 'residual plot'],
     'Een grafiek van residuen tegenover bijvoorbeeld x, voorspelde y of de tijd. Een systematisch patroon kan aangeven wat het model mist.',
     'Een boog in de residuen kan erop wijzen dat een rechte lijn het verband onvoldoende beschrijft.', 'diagnostiek')
_add('uitbijter', 'Uitbijter', ['uitbijters', 'uitschieter', 'uitschieters', 'outlier', 'outliers'],
     'Een waarneming die ongewoon ver van het patroon ligt. Onderscheid afwijking in y, afwijking in x en invloed op het model; een signaal is geen automatische reden om een geldige waarneming te verwijderen.',
     'Een ongewoon salaris kan een invoerfout zijn, maar ook een geldige bijzondere functie betreffen.', 'diagnostiek')
_add('gestandaardiseerd-residu', 'Gestandaardiseerd residu', ['gestandaardiseerde residuen', 'Standardized Residual', 'Standardized Residuals', 'Std. Residual'],
     'Een residu uitgedrukt op een standaardafwijkingsschaal. De cursus signaleert een y-uitbijter bij |z| > 2 als n ≤ 100 en bij |z| > 3 als n > 100.',
     'z = 2,5 overschrijdt de cursusgrens bij n = 100, maar niet bij n = 101.', 'diagnostiek')
_add('mahalanobis', 'Mahalanobis Distance', ['Mahalanobis', 'MD', 'Mahal.Distance', 'uitbijter in x'],
     'Een maat voor een ongebruikelijke positie in de verklarende variabelen. De SRA-cursus vergelijkt het maximum met gemiddelde MD + 3 × standaardafwijking MD.',
     'Gemiddelde MD = 1 en s_MD = 0,5 geven een cursusgrens van 2,5.', 'diagnostiek')
_add('cooks-distance', 'Cook’s Distance', ["Cook's Distance", 'Cooks Distance', 'Cook’s', 'CD'],
     'Een maat voor de potentiële invloed van een waarneming op de geschatte regressie. De cursusgrens is gemiddelde CD + 3 × standaardafwijking CD.',
     'Gemiddelde CD = 0,04 en s_CD = 0,07 geven een grens van 0,25.', 'diagnostiek')
_add('invloedrijk-punt', 'Invloedrijk punt', ['invloedrijke punten', 'invloedrijke waarneming', 'invloedrijke waarnemingen'],
     'Een waarneming waarvan de aanwezigheid de geschatte regressie sterk kan veranderen. Grootte van een residu alleen is daarvoor niet voldoende; SRA gebruikt Cook’s Distance.',
     'Een ver weg gelegen punt kan de helling sterk sturen, ook als het dicht bij de geschatte lijn ligt.', 'diagnostiek')
_add('normaliteit', 'Normaliteit', ['normaliteitsaanname', 'niet-normaliteit', 'normaliteit van de residuen'],
     'De aanname dat de relevante storingsterm normaal verdeeld is, onderzocht via de residuen. Een niet-significante normaliteitstoets bewijst deze aanname niet.',
     'Bij Shapiro-Wilk p = 0,20 en α = 0,05 wordt normaliteit van de residuen niet verworpen.', 'diagnostiek')
_add('shapiro-wilk', 'Shapiro-Wilk', ['Shapiro Wilk', 'Shapiro-Wilk-toets'],
     'Een normaliteitstoets. De SRA-analyseroute gebruikt haar voor residuen bij n ≤ 50. H₀ is normaliteit; een kleine p geeft aanleiding H₀ te verwerpen.',
     'Bij n = 30 en p = 0,01 verwerp je normaliteit op niveau 0,05.', 'diagnostiek')
_add('kolmogorov-smirnov', 'Kolmogorov-Smirnov', ['Kolmogorov Smirnov', 'Kolmogorov-Smirnov-toets'],
     'De normaliteitstoets die de SRA-analyseroute gebruikt voor residuen bij n > 50. Beoordeel de p-waarde tegenover α.',
     'Bij n = 59 en p = 0,20 is er op niveau 0,05 onvoldoende bewijs om normaliteit te verwerpen.', 'diagnostiek',
     [('attentie', 5, 'Normaliteit van residuen'), ('spss', 19, 'Tests of Normality bij n = 59')])
_add('histogram', 'Histogram', ['histogrammen'],
     'Een grafiek die numerieke waarden groepeert in aaneengesloten klassen. Bij gelijke klassebreedte laat de hoogte zien hoeveel waarnemingen in elke klasse vallen.',
     'Van 12 residuen liggen er 5 tussen −1 en 0; die klasse krijgt frequentie 5.', 'diagnostiek',
     [('spss', 19, 'Histogram van de gestandaardiseerde residuen bij de normaliteitsanalyse')])
_add('frequentie', 'Frequentie', ['frequenties', 'Frequency', 'frequentietabel'],
     'Het aantal waarnemingen dat een bepaalde waarde heeft of binnen een gekozen klasse valt.',
     'Als vier residuen tussen 0 en 1 liggen, is de frequentie van die klasse 4.', 'diagnostiek',
     [('spss', 19, 'Histogram met Frequency op de verticale as')])
_add('klassebreedte', 'Klassebreedte', ['klassebreedten', 'klassebreedtes', 'histogramklasse', 'klassen'],
     'Het verschil tussen de onder- en bovengrens van een histogramklasse. In de didactische histogramtool zijn alle klassen even breed.',
     'De klasse van −1 tot 0 heeft breedte 1, net als de klasse van 0 tot 1.', 'diagnostiek',
     [('spss', 19, 'Klassen in het residuenhistogram')])
_add('qq-plot', 'Q-Q-plot', ['Q-Q', 'QQ-plot', 'QQ', 'Q-Q-plots', 'normaliteitsplot'],
     'De didactische grafiek vergelijkt overeenkomstige kwantielen van geordende residuen en een theoretische normaalreferentie. Een ongeveer rechte puntenrij past bij een overeenkomstige verdelingsvorm; de grafiek berekent geen p-waarde.',
     'In het lab buigt de puntenrij wanneer je de verdelingsvorm schever maakt.', 'diagnostiek',
     [('spss', 19, 'Normaliteitsanalyse; aanvullende uitleg bij de didactische Q-Q-grafiek in het SRA-lab')])
_add('kwantiel', 'Kwantiel', ['kwantielen', 'quantile', 'theoretische kwantielen'],
     'Een grenswaarde bij een bepaalde positie in een verdeling. De Q-Q-tool vergelijkt gelijke posities, bijvoorbeeld een lage positie in de residuen met dezelfde lage positie in de normaalreferentie.',
     'Vergelijk een punt uit de onderste helft van de residuen met de overeenkomstige positie in de normaalreferentie.', 'diagnostiek',
     [('spss', 19, 'Normaliteitsanalyse; begripsuitleg bij de didactische Q-Q-grafiek')])
_add('homoscedasticiteit', 'Homoscedasticiteit', ['homoscedastisch', 'homoscedastische', 'constante spreiding'],
     'De aanname dat de spreiding van de storingsterm niet verandert met de verklarende waarden. Je beoordeelt dit met de residuen.',
     'Rond zowel lage als hoge x-waarden blijft de verticale spreiding van residuen ongeveer even groot.', 'diagnostiek')
_add('heteroscedasticiteit', 'Heteroscedasticiteit', ['heteroscedastisch', 'heteroscedastische', 'veranderende spreiding', 'trechtervorm', 'waaier'],
     'Een situatie waarin de spreiding van de storingsterm verandert met de verklarende waarden. Een trechter in het residuendiagram is een onderzoekssignaal.',
     'Bij hoge productie lopen de residuen veel verder uiteen dan bij lage productie.', 'diagnostiek')
_add('absres', 'Absolute residuen', ['absoluut residu', 'ABSRES', 'absolute gestandaardiseerde residuen'],
     'De grootte van residuen zonder hun plus- of minteken. SRA gebruikt absolute residuen in het onderzoek naar samenhang tussen spreiding en verklarende variabelen.',
     'De absolute waarden van residuen −3 en +2 zijn 3 en 2.', 'diagnostiek',
     [('attentie', 5, 'Onderzoek heteroscedasticiteit'), ('spss', 20, 'ABSRES aanmaken voor de analyse')])
_add('wls', 'Gewogen kleinste kwadraten', ['WLS', 'Weighted Least Squares', 'gewogen regressie'],
     'Regressie waarbij waarnemingen verschillende gewichten krijgen. Dit kan passen bij verschillen in spreiding; het juiste gewicht hangt af van het probleem.',
     'Het cursusvoorbeeld met gewicht 1/x² is een specifieke correctie, geen algemene keuze voor elk model.', 'diagnostiek')
_add('autocorrelatie', 'Autocorrelatie', ['autocorrelaties'],
     'Samenhang tussen storingen op verschillende tijdstippen. Bij tijdreeksen kunnen residuen daardoor systematisch na elkaar bewegen.',
     'Meerdere opeenvolgende positieve residuen gevolgd door negatieve residuen kunnen aanleiding geven dit te onderzoeken.', 'diagnostiek')
_add('durbin-watson', 'Durbin-Watson', ['Durbin Watson', 'DW', 'Durbin-Watson-toets'],
     'De SRA-toets voor autocorrelatie bij tijdreeksen. De grootheid d ligt tussen 0 en 4; vergelijk haar met dL, dU en de afgeleide grenzen 4 − dU en 4 − dL.',
     'd = 2 moet met de passende tabelgrenzen worden beoordeeld; de afstand tot 2 alleen is niet de volledige toets.', 'diagnostiek')
_add('onbeslist-gebied', 'Onbeslist gebied', ['onbesliste gebieden', 'onbeslist'],
     'Een gebied waarin de Durbin-Watson-regel geen eenduidige beslissing geeft. Het ligt tussen dL en dU en tussen 4 − dU en 4 − dL.',
     'Bij dL = 1,35, dU = 1,49 en d = 1,40 is de uitkomst onbeslist.', 'diagnostiek')

# Voorspellen, meervoudige modellen en transformaties.
_add('puntvoorspelling', 'Puntvoorspelling', ['puntvoorspellingen', 'voorspelde waarde', 'voorspelde waarden', 'Predicted Value'],
     'De voorspelde y nadat je de gekozen x-waarden in het geschatte model hebt ingevuld. Zij beschrijft nog geen interval.',
     'Bij ŷ = 10 + 2x en x = 4 is de puntvoorspelling 18.', 'voorspellen')
_add('voorspellingsinterval', 'Individueel voorspellingsinterval', ['voorspellingsinterval', 'voorspellingsintervallen', 'individuele voorspelling'],
     'Een interval voor één nieuwe waarneming. Het neemt zowel onzekerheid in de geschatte lijn als individuele spreiding rond de lijn mee; daarom staat in formule 50 de extra 1 onder de wortel.',
     'Voor één nieuw artikel kan het interval [27; 33] zijn terwijl de puntvoorspelling 30 is.', 'voorspellen')
_add('gemiddelde-respons', 'Gemiddelde respons', ['gemiddelde respons bij x', 'interval voor de gemiddelde respons'],
     'De gemiddelde y bij bepaalde verklarende waarden. Het interval hiervoor mist de extra individuele spreiding en is bij dezelfde invoer smaller dan een individueel voorspellingsinterval.',
     'Het gemiddelde salaris bij leeftijd 40 is een andere vraag dan het salaris van één nieuwe 40-jarige.', 'voorspellen')
_add('interpolatie', 'Interpolatie', ['interpoleren'],
     'Voorspellen binnen het onderzochte bereik van de verklarende variabele.',
     'Je gegevens bevatten leeftijden van 20 tot 60; een voorspelling bij 40 ligt binnen dat bereik.', 'voorspellen')
_add('extrapolatie', 'Extrapolatie', ['extrapoleren'],
     'Voorspellen buiten het onderzochte bereik. Het waargenomen verband hoeft buiten dat bereik niet op dezelfde manier door te lopen.',
     'Bij gegevens van leeftijden 20 tot 60 is voorspellen voor leeftijd 85 extrapolatie.', 'voorspellen')
_add('meervoudige-regressie', 'Meervoudige regressie', ['meervoudig regressiemodel', 'multiple regression'],
     'Regressie met meerdere verklarende variabelen en één afhankelijke variabele. Elke helling beschrijft samenhang bij gelijkblijvende overige opgenomen kenmerken.',
     'Je voorspelt salaris uit leeftijd, beoordelingsscore en leidinggeven samen.', 'meervoudig')
_add('dummy', 'Dummyvariabele', ['dummy', 'dummy’s', "dummy's", 'dummies', 'dummyvariabelen'],
     'Een variabele met waarde 0 of 1 die een categorie aanduidt. Haar coëfficiënt vergelijkt die categorie met de referentiegroep, bij gelijke andere kenmerken.',
     'Leidinggevende = 1 voor ja en 0 voor nee. Een coëfficiënt van 500 geeft een verschil van 500 eenheden.', 'meervoudig')
_add('referentiegroep', 'Referentiegroep', ['referentiecategorie', 'referentiegroepen'],
     'De categorie waarmee de opgenomen dummycategorieën worden vergeleken. Bij drie exclusieve categorieën en een constante gebruik je doorgaans twee dummy’s; beide nul duidt de referentie aan.',
     'Als HBO en WO de dummy’s zijn, vormt de groep met beide op nul de referentie.', 'meervoudig')
_add('adjusted-r2', 'Adjusted R²', ['Adjusted R Square', 'adjusted R2', 'gecorrigeerde R²', 'gecorrigeerde determinatiecoëfficiënt'],
     'R² gecorrigeerd voor het aantal verklarende variabelen en de beschikbare waarnemingen. Deze maat kan dalen als een extra variabele onvoldoende toevoegt.',
     'Gewone R² stijgt na toevoeging van x₂, maar adjusted R² kan dalen doordat de extra verbetering te klein is.', 'meervoudig')
_add('overfitting', 'Overfitting', ['overfit', 'overfitted'],
     'Een model past ook toevalligheden van de trainingsgegevens aan en kan daardoor op nieuwe gegevens minder goed werken. De cursusvuistregel n ≥ 10k vervangt geen validatie.',
     'Een model met veel variabelen voorspelt de trainingsdata goed, maar maakt grote fouten op een ongebruikte testset.', 'meervoudig')
_add('transformatie', 'Transformatie', ['transformaties', 'transformeren', 'getransformeerd', 'getransformeerde'],
     'Een variabele via een wiskundige bewerking op een andere schaal uitdrukken, bijvoorbeeld ln(x). Hierdoor kan een krom verband beter bij een lineair geschatte vorm passen.',
     'Je gebruikt ln(x) als verklarende variabele in plaats van x zelf.', 'transformaties')
_add('logaritme', 'Natuurlijke logaritme', ['logaritme', 'logaritmen', 'natuurlijke logaritmen', 'ln-functie'],
     'De bewerking ln(x) vraagt tot welke macht je e moet verheffen om x te krijgen. Zij is alleen gedefinieerd voor x > 0.',
     'ln(1) = 0, want e⁰ = 1.', 'transformaties')
_add('exp', 'Exponentiële functie', ['exp', 'exp-functie', 'exponentiëren'],
     'De bewerking exp(z) = eᶻ, die ln omkeert. Zij zet een voorspelling op logschaal terug naar de oorspronkelijke schaal volgens de gebruikte modelvorm.',
     'exp(ln(16)) = 16.', 'transformaties')
_add('logaritmisch-model', 'Logaritmisch model', ['logaritmische functie', 'logaritmisch'],
     'Een model met ln(x) als verklarende grootheid en y op de oorspronkelijke schaal: ŷ = b₀ + b₁ln(x).',
     'Bij b₁ = 2 verhoogt een verdubbeling van x de voorspelde y met 2ln(2).', 'transformaties')
_add('exponentieel-model', 'Exponentieel model', ['exponentiële regressie', 'exponentieel'],
     'Een model met ln(y) lineair in x. Na terugtransformatie is de cursusvorm ŷ = exp(b₀ + b₁x).',
     'Bij één extra x vermenigvuldigt de voorspelde y met exp(b₁).', 'transformaties')
_add('machtsmodel', 'Machtsmodel', ['machtsfunctie', 'machtsfuncties', 'Power', 'power-model'],
     'Een model dat lineair wordt geschreven met ln(y) en ln(x). Op de oorspronkelijke schaal is de cursusvorm ŷ = exp(b₀) × xᵇ¹.',
     'Bij b₁ = 0,5 vermenigvuldigt een verdubbeling van x de voorspelde y met √2.', 'transformaties')
_add('terugtransformatie', 'Terugtransformatie', ['terugtransformeren', 'teruggetransformeerd'],
     'De voorspelde uitkomst terugzetten naar de oorspronkelijke schaal volgens de gekozen modelvorm. Als y is gelogaritmeerd, is alleen de lineaire uitkomst nog geen voorspelling in de oorspronkelijke eenheid.',
     'Een voorspelde logwaarde van 2 wordt op de oorspronkelijke schaal exp(2), ongeveer 7,39.', 'transformaties')

# Modelbouw, validatie en SPSS-naslag.
_add('enter', 'Enter-methode', ['Enter'],
     'Een modelbouwmethode waarbij alle opgegeven verklarende variabelen tegelijk in het model worden opgenomen.',
     'Neem leeftijd, beoordeling en leidinggeven in één keer op.', 'modelbouw')
_add('backward', 'Backward elimination', ['Backward', 'backward-methode'],
     'Een methode die begint met alle kandidaatvariabelen en stapsgewijs een onvoldoende bijdragende variabele verwijdert. Na verwijderen wordt opnieuw geschat.',
     'De variabele met de grootste p boven de gegeven verwijderingsgrens is de eerste kandidaat.', 'modelbouw')
_add('forward', 'Forward selection', ['Forward', 'forward-methode'],
     'Een methode die klein begint en stapsgewijs verklarende variabelen toevoegt volgens het selectiecriterium.',
     'Na een eerste variabele onderzoekt de procedure welke volgende variabele nog voldoende toevoegt.', 'modelbouw')
_add('stepwise', 'Stepwise', ['stepwise-methode', 'stapsgewijze selectie'],
     'Een selectiemethode die bij toevoeging van variabelen ook opnieuw controleert of eerder opgenomen variabelen moeten vervallen.',
     'Na toevoeging van x₃ kan x₁ alsnog onvoldoende bijdragen en worden verwijderd.', 'modelbouw')
_add('multicollineariteit', 'Multicollineariteit', ['multicollineair', 'multicollineaire'],
     'Sterke onderlinge samenhang tussen verklarende variabelen, waardoor hun afzonderlijke bijdragen moeilijker te onderscheiden zijn. Dit is iets anders dan een sterk verband tussen x en y.',
     'Twee x-variabelen meten bijna hetzelfde kenmerk; hun afzonderlijke coëfficiënten worden moeilijker te interpreteren.', 'modelbouw')
_add('hulpregressie', 'Hulpregressie', ['hulpregressies', 'hulp-R²', 'hulpregressie R²'],
     'Bij VIF: een regressie van één verklarende variabele op de overige verklarende variabelen. De R² hiervan meet hoeveel overlap die variabele met de andere x-variabelen heeft.',
     'Voor VIF van x₁ voorspel je x₁ met de overige x-variabelen, niet met de oorspronkelijke y.', 'modelbouw')
_add('tolerance', 'Tolerance', ['tolerantie'],
     'Bij een verklarende variabele: 1 − R² van haar hulpregressie. Een lage tolerance betekent veel overlap met de overige verklarende variabelen.',
     'Hulp-R² = 0,92 geeft tolerance = 0,08.', 'modelbouw')
_add('vif', 'Variance Inflation Factor', ['VIF', 'variance-inflatiefactor'],
     'De maat VIF = 1/tolerance = 1/(1 − R²ᵢ) op basis van de hulpregressie. De cursus gebruikt VIF > 10 als probleemsignaal voor multicollineariteit.',
     'Tolerance 0,08 geeft VIF 12,5; VIF precies 10 overschrijdt de strikte grens niet.', 'modelbouw')
_add('geneste-modellen', 'Geneste modellen', ['genest model', 'geneste regressiemodellen'],
     'Modellen waarbij het uitgebreide model alle verklarende variabelen van het kleinere model bevat, plus extra variabelen. Vergelijk ze op dezelfde y en dezelfde waarnemingen.',
     'Een model met x₁ en x₂ is genest in een model met x₁, x₂ en x₃ op dezelfde dataset.', 'modelbouw')
_add('partiele-f', 'Partiële F-toets', ['partiële F', 'extra bijdrage', 'toets van extra variabelen'],
     'Een F-toets van de verbetering door extra variabelen in geneste modellen. Deel de extra SSR door het aantal toegevoegde variabelen en vervolgens door MSE van het uitgebreide model.',
     'Voor één extra variabele: (850 − 800)/10 = F van 5; vergelijk daarna met de passende grens.', 'modelbouw')
_add('validatie', 'Validatie', ['valideren', 'modelvalidatie'],
     'Onderzoeken hoe bruikbaar het geschatte model is op gegevens die niet voor schatting en selectie zijn gebruikt.',
     'Schat het model op de training en vergelijk de vaste voorspellingen met werkelijke testuitkomsten.', 'validatie')
_add('data-splitting', 'Data splitting', ['datasplitsing', 'data-splitting'],
     'Gegevens opsplitsen in een trainingsset en een testset. De scheiding voorkomt dat beoordeling op nieuwe data in feite dezelfde gegevens als de modelkeuze gebruikt.',
     'Een deel van de waarnemingen blijft buiten de schatting en wordt pas voor beoordeling gebruikt.', 'validatie')
_add('trainingsset', 'Trainingsset', ['trainingsdata', 'trainingsgegevens', 'training set', 'trainings-set'],
     'De gegevens waarop je het model schat en selecteert. Een goede passing op deze gegevens is op zichzelf nog geen bewijs voor goede voorspellingen op nieuwe gevallen.',
     'De coëfficiënten worden berekend uit de training en daarna vastgehouden voor de test.', 'validatie')
_add('testset', 'Testset', ['testdata', 'testgegevens', 'test set', 'test-set'],
     'Gegevens die buiten de schatting en modelselectie zijn gehouden en waarmee je de voorspelfouten van het vaste model beoordeelt.',
     'Verandering van een werkelijke testuitkomst verandert de testfout, niet de al geschatte coëfficiënten.', 'validatie')
_add('mspr', 'MSPR', ['MSPE', 'MSRP', 'MPSR', 'Mean Squared Prediction Error', 'gemiddelde gekwadrateerde voorspelfout'],
     'De som van gekwadrateerde voorspelfouten op de testset gedeeld door n_test. Deel hier niet door de residuele vrijheidsgraden van de training. De aangeleverde bronnen gebruiken ook de lettervolgorden MSRP en MPSR voor deze formule.',
     'Testfouten −2, 1 en 3 geven MSPR = (4 + 1 + 9)/3 = 4,6667.', 'validatie')
_add('generalisatie', 'Generalisatie', ['generaliseren', 'generaliseerbaarheid'],
     'De mate waarin het op trainingsgegevens gevonden model ook bruikbaar is op nieuwe gegevens.',
     'Een veel grotere MSPR dan trainings-MSE wijst op minder goede voorspellingen buiten de training.', 'validatie')
_add('spss', 'SPSS', ['SPSS-uitvoer', 'SPSS-output'],
     'Het statistische programma waarvan de tabellen en grafieken in de SRA-opgaven worden gebruikt. Je moet niet alleen de getallen, maar ook tabelnamen en voetnoten lezen.',
     'Coefficients geeft coëfficiënten; ANOVA geeft kwadratensommen en de globale F-toets.', 'validatie',
     [('spss', 5, 'SPSS gebruiken voor de regressieopgave'), ('attentie', 3, 'Lezen en interpreteren van regressie-uitvoer')])
_add('correlations', 'Correlations', ['correlatietabel', 'correlatiematrix'],
     'De SPSS-tabel met correlaties tussen variabelen. Gebruik haar voor richting en lineaire samenhang, niet als regressievergelijking.',
     'Een negatieve r in Correlations geeft de richting die een niet-negatieve model-R niet laat zien.', 'validatie',
     [('spss', 16, 'Correlations bij leeftijd en bloeddruk'), ('attentie', 3, 'Correlatie en regressie')])
_add('model-summary', 'Model Summary', ['modeloverzicht'],
     'De SPSS-tabel met onder meer R, R², adjusted R² en Std. Error of the Estimate; soms staat ook Durbin-Watson hier.',
     'Lees R² af voor verklaarde variatie en gebruik het teken van B of r voor de richting.', 'validatie',
     [('spss', 9, 'Model Summary bij bouwjaar en gewicht'), ('attentie', 4, 'Beoordeling van de regressie')])
_add('coefficients', 'Coefficients', ['coëfficiëntentabel', 'coefficiententabel'],
     'De SPSS-tabel met onder meer B, Std. Error, t, Sig. en eventueel Beta, tolerance en VIF. De kolom B levert de gewone regressievergelijking.',
     'Gebruik B = 6 en Std. Error = 2 om t = 3 te controleren.', 'validatie',
     [('spss', 9, 'Coefficients bij bouwjaar en gewicht'), ('attentie', 3, 'De regressievergelijking aflezen')])
_add('residuals-statistics', 'Residuals Statistics', ['residuentabel', 'residuenstatistieken'],
     'De SPSS-tabel met samenvattingen van voorspelde waarden, residuen en eventueel afstandsmaten. Voor diagnostiek lees je onder meer minimum, maximum, gemiddelde en standaardafwijking.',
     'Vergelijk de grootste Cook’s Distance met gemiddelde plus drie standaardafwijkingen uit de bijbehorende rij.', 'validatie',
     [('spss', 16, 'Residuals Statistics bij uitbijters en invloedrijke punten'), ('attentie', 5, 'Diagnostiek')])
_add('tests-normality', 'Tests of Normality', ['normaliteitstoetsen'],
     'De SPSS-tabel met normaliteitstoetsen zoals Shapiro-Wilk en Kolmogorov-Smirnov. Controleer dat de getoetste variabele de juiste residuen bevat.',
     'Lees de p-waarde bij de volgens de cursus passende toets voor het aantal waarnemingen.', 'validatie',
     [('spss', 19, 'Tests of Normality voor Standardized Residual')])

# De volledige antwoordroute.
_add('toepassingsvoorwaarde', 'Toepassingsvoorwaarde', ['toepassingsvoorwaarden'],
     'Een eis die je controleert voordat je een methode gebruikt. Een rekenbare formule betekent nog niet dat de methode inhoudelijk past.',
     'Bij de verschilschatter controleer je het foutpatroon en de cursusvoorwaarde van minstens 30 afwijkende posten.', 'tentamen')
_add('interpretatie', 'Interpretatie', ['interpreteren'],
     'De uitkomst in woorden verbinden met de variabelen, eenheden en vraag van de casus. Benoem wat de berekening ondersteunt en wat daar niet uit volgt.',
     'Schrijf bij R² = 0,70 dat het model 70% van de variatie in salaris verklaart, niet alleen het getal.', 'tentamen')
_add('remedie', 'Remedie', ['remedies', 'modelaanpassing'],
     'Een inhoudelijk passende reactie op een vastgesteld modelprobleem, gevolgd door opnieuw schatten en controleren waar nodig.',
     'Bij een duidelijke kromming onderzoek je een passende modelvorm in plaats van willekeurig punten weg te laten.', 'tentamen')

# Aanvullende woorden die in formules, grafiekbijschriften en rekenstappen staan.
_add('schatting', 'Schatting', ['schattingen', 'schatten', 'geschatte waarde'],
     'De uitkomst waarmee je een onbekende populatiewaarde benadert. De schatter is de rekenregel; de schatting is het getal dat deze regel met jouw gegevens oplevert.',
     'De directe schatter Nw̄ levert met jouw invoer de schatting € 80.000 op.', 'beginnen')
_add('populatietotaal', 'Populatietotaal', ['populatietotalen', 'totale populatiewaarde'],
     'De som van de betreffende waarden van alle elementen in de populatie. Bij SRA-geldbedragschattingen is het werkelijke totaal W de onbekende grootheid die je wilt schatten.',
     'Drie artikelen met werkelijke waarden 10, 20 en 30 vormen samen een populatietotaal van 60.', 'beginnen')
_add('toets', 'Statistische toets', ['statistische toetsen', 'toets', 'toetsen', 'toetsing'],
     'Een procedure waarmee je beoordeelt of de steekproef voldoende bewijs tegen een nulhypothese geeft, met een vooraf gekozen risicogrens en toetsrichting.',
     'Je toetst of de populatiehelling positief is in plaats van alleen te kijken of de getekende lijn stijgt.', 'toetsen')
_add('lineair-verband', 'Lineair verband', ['lineaire samenhang', 'lineair', 'lineaire', 'lineaire verbanden'],
     'Een verband dat met een rechte lijn wordt beschreven. Bij een vaste helling hoort bij één extra eenheid x steeds dezelfde verandering in de voorspelde y.',
     'Bij ŷ = 10 + 2x geeft iedere extra x steeds 2 extra voorspelde y.', 'regressielijn')
_add('symmetrie', 'Symmetrie', ['symmetrisch', 'symmetrische'],
     'Een vorm waarvan de linker- en rechterkant elkaars spiegelbeeld zijn. Bij een symmetrisch interval liggen de grenzen even ver van het midden.',
     'De grenzen 96 en 104 liggen beide 4 van het midden 100.', 'onzekerheid')
_add('homogene-groep', 'Homogene groep', ['homogene groepen', 'homogeen', 'homogene'],
     'Een groep waarvan de relevante waarden relatief weinig uiteenlopen. Bij stratificatie probeer je binnen groepen minder spreiding te krijgen.',
     'Artikelen in dezelfde prijsklasse kunnen onderling gelijksoortiger zijn dan een gemengde voorraad.', 'stratificatie')
_add('foutpercentage', 'Foutpercentage', ['foutpercentages'],
     'De fout uitgedrukt als aandeel van een gekozen basis. Bij de quotiëntschatter is 1 − q de foutfractie ten opzichte van de totale boekwaarde in de steekproef.',
     'Goedratio q = 0,95 betekent een foutfractie van 0,05, oftewel 5% van de boekwaarde.', 'quotient')
_add('resterende-ratiospreiding', 'Resterende spreiding bij de quotiëntschatter', ['resterende spreiding', 's_q'],
     'De tussenmaat s_q uit formule 13 voor wat na de geschatte verhouding overblijft. Ondanks de aanduiding in het formuleblad heeft deze berekening de geldeenheid van b en w; zij is niet de standaardfout van het populatietotaal.',
     's_q = € 7,60 wordt nog met N/√n en de eindigheidscorrectie doorgerekend naar de totale standaardfout.', 'quotient')
_add('effectieve-vrijheidsgraden', 'Effectieve vrijheidsgraden', ['effectieve df'],
     'De vrijheidsgraden die bij het samengestelde interval horen. Volgens de SRA-formulebladroute voor strata worden ze in de opgave gegeven; neem niet automatisch het totale n − 1.',
     'Geeft een strata-opgave effectieve df = 109, dan kies je de t-tabelrij volgens de bijbehorende cursusregel.', 'stratificatie')
_add('kromming', 'Kromming', ['krom verband', 'kromme verbanden', 'boogvorm'],
     'Een verandering van richting of helling waardoor het patroon niet goed met één rechte lijn wordt beschreven. Kromming in residuen kan op een ongeschikte lineaire modelvorm wijzen.',
     'Negatieve residuen in het midden en positieve aan beide randen vormen een boog.', 'diagnostiek')
_add('dw-grenzen', 'Durbin-Watson-tabelgrenzen', ['dL', 'dU', 'Durbin-Watson-grenzen'],
     'De twee tabelgrenzen dL en dU waarmee de Durbin-Watson-uitkomst wordt beoordeeld. Ze horen bij de steekproefomvang n en het aantal verklarende variabelen k.',
     'Bij dL = 1,35 en dU = 1,49 is 1,40 tussen de grenzen onbeslist.', 'diagnostiek')
_add('realisatie', 'Realisatie', ['realisaties', 'gerealiseerde waarde', 'gerealiseerde uitkomst'],
     'De werkelijk waargenomen nieuwe uitkomst die je met een voorspelling kunt vergelijken. Buiten een voorspellingsinterval vallen is een signaal voor onderzoek, geen automatische verklaring.',
     'De voorspelling is 30, maar de later gemeten uitkomst is 35; 35 is de realisatie.', 'voorspellen')
_add('model-r', 'Model-R', ['Model Summary R', 'modelcorrelatie'],
     'De niet-negatieve R uit SPSS Model Summary. Gebruik het teken van de coëfficiënt B of de correlatie r uit Correlations om de richting van het verband te bepalen.',
     'Een dalend enkelvoudig verband kan r = −0,8 hebben terwijl Model Summary R = 0,8 toont.', 'regressielijn')
_add('model-fit', 'Model fit', ['fitmaat', 'fitmaten', 'passing', 'modelpassing'],
     'Hoe goed het model de gebruikte gegevens beschrijft. R² en adjusted R² geven aspecten van die passing weer; goede passing vervangt geen diagnose of validatie.',
     'Een hoge R² op de training kan samengaan met een hoge MSPR op nieuwe gegevens.', 'anova')
_add('kandidaatvariabele', 'Kandidaatvariabele', ['kandidaatvariabelen', 'kandidaten'],
     'Een verklarende variabele die bij modelselectie overwogen wordt, maar niet noodzakelijk in het uiteindelijke model blijft.',
     'Backward begint met alle kandidaten en kan een variabele met te hoge p verwijderen.', 'modelbouw')
_add('verwijderingsgrens', 'Verwijderingsgrens', ['selectiegrens', 'selectiecriterium', 'selectiecriteria'],
     'Het opgegeven criterium waarmee een selectieprocedure beslist of een variabele voldoende bijdraagt. Gebruik de grens uit de opgave en verwar haar niet met het automatisch halveren van een tweezijdige p.',
     'Bij een gegeven verwijderingsgrens 0,10 is een p van 0,18 een kandidaat voor verwijderen.', 'modelbouw')
_add('voetnoot', 'Tabelvoetnoot', ['tabelvoetnoten', 'voetnoot', 'voetnoten'],
     'Toelichting onder een tabel met informatie die de interpretatie bepaalt, zoals afhankelijke variabele, opgenomen verklarende variabelen, selectieprocedure of weging.',
     'Controleer in de voetnoot of y het salaris of ln(salaris) is voordat je de coëfficiënten gebruikt.', 'validatie')
_add('anova-rijen', 'Regression, Residual en Total', ['Regression', 'Residual', 'Total'],
     'De drie rijen van de SRA-ANOVA-tabel: Regression is de door het model verklaarde variatie, Residual de resterende variatie en Total de totale variatie in y.',
     'De SS-kolom kan achtereenvolgens 80, 20 en 100 tonen; verklaard plus resterend is totaal.', 'anova')
_add('onafhankelijke-strata', 'Onafhankelijke strata', ['onafhankelijke schattingen'],
     'Bij afzonderlijke onafhankelijke steekproeven per stratum hangen de toevallige schattingsafwijkingen niet met elkaar samen. Daarom tel je voor het totaal de varianties op en neem je daarna de wortel.',
     'Standaardfouten 3 en 4 combineren tot √(3² + 4²) = 5, niet tot 7.', 'stratificatie')
_add('interval', 'Interval', ['intervallen'],
     'Een bereik tussen een onder- en bovengrens. Welke uitspraak je met dat bereik doet, hangt af van het soort interval: bijvoorbeeld een populatieparameter schatten of een nieuwe waarneming voorspellen.',
     '[96; 104] loopt van 96 tot 104. Lees de vraag om te bepalen of dit een interval voor een totaal, gemiddelde of nieuwe uitkomst is.', 'onzekerheid')
_add('voorspelling', 'Voorspelling', ['voorspellingen', 'voorspellen'],
     'Een met het geschatte model berekende uitkomst bij gekozen verklarende waarden. Een puntvoorspelling geeft één getal; een passend interval beschrijft de bijbehorende onzekerheid.',
     'Vul x = 4 in ŷ = 10 + 2x in: de voorspelling is 18. De werkelijke nieuwe uitkomst kan daarvan afwijken.', 'voorspellen')
_add('nauwkeurigheid', 'Nauwkeurigheid', ['precisie', 'preciezer', 'nauwkeuriger'],
     'In de SRA-intervalberekeningen: hoe klein de onzekerheidsmarge E is. Een smaller interval is preciezer. Betrouwbaarheid gaat over de dekking van de intervalmethode en is dus een ander begrip.',
     'Twee intervallen gebruiken beide 95% betrouwbaarheid. Het interval met marge € 1.000 is preciezer dan dat met marge € 2.000.', 'onzekerheid')
_add('referentieverdeling', 'Referentieverdeling', ['referentieverdelingen', 'normaalreferentie'],
     'De theoretische verdeling waarmee je de waargenomen vorm vergelijkt. In het Q-Q-lab is dat een normaalreferentie; de vergelijking is een grafische aanwijzing en berekent geen p-waarde.',
     'De horizontale coördinaten in het Q-Q-lab komen uit de normaalreferentie; de verticale uit de geordende demo-residuen.', 'diagnostiek',
     [('spss', 19, 'Normaliteitsanalyse; aanvullende uitleg bij de didactische Q-Q-grafiek in het SRA-lab')])
_add('scheefheid', 'Scheefheid', ['scheef', 'scheve', 'schevere'],
     'Een asymmetrische verdelingsvorm waarbij de waarden aan de ene kant anders uitlopen dan aan de andere kant. In het normaliteitslab kun je zo’n vormverschil tegenover de symmetrische normaalreferentie bekijken.',
     'Enkele grote positieve residuen kunnen de rechterkant verder laten uitlopen dan de linkerkant.', 'diagnostiek',
     [('spss', 19, 'Residuenhistogram bij de normaliteitsanalyse; vormillustratie in het SRA-lab')])
