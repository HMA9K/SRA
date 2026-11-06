"""Source-grounded terminology for the SRA lessons and interactive experiments.

The short examples are original teaching examples, not additional exam data.
Text between dollar signs is typeset as MathML; see presentation.formula.
References use the same source identifiers and PDF page numbering as the course.
Aliases deliberately omit isolated mathematical letters such as B, n, s or beta.
Q-Q terminology explains the existing teaching diagram; its reference points to
the source's normality analysis, not to a separate examination requirement.
"""

from presentation import plain_text, rich_text

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
        'definition': plain_text(definition),
        'definitionHtml': rich_text(definition),
        'example': plain_text(example),
        'exampleHtml': rich_text(example),
        'lesson': lesson,
        'refs': [dict(source=source, page=page, locator=locator)
                 for source, page, locator in (refs or _REFS[lesson])],
    })


# Basis: van de onderzoeksvraag naar meetbare gegevens.
_add('populatie', 'Populatie', ['populaties'],
     'De volledige groep waarover je iets wilt weten, bijvoorbeeld alle facturen of alle voorraadartikelen van een onderneming. De letter $N$ staat voor het aantal elementen in die groep.',
     'Een accountant wil een uitspraak doen over alle 1.000 facturen van dit jaar. Die 1.000 facturen zijn de populatie, dus $N$ = 1.000. Ook de facturen die niet gecontroleerd worden, horen erbij.', 'beginnen')
_add('populatieomvang', 'Populatieomvang', ['populatiegrootte'],
     'Het aantal elementen in de populatie, geschreven als hoofdletter $N$. Het is een aantal, geen geldbedrag.',
     'Een voorraad bestaat uit 2.500 artikelen met samen een boekwaarde van € 400.000. De populatieomvang is $N$ = 2.500, niet € 400.000.', 'beginnen')
_add('steekproef', 'Steekproef', ['steekproeven'],
     'Het deel van de populatie dat je echt onderzoekt. Omdat je niet alles controleert, gebruik je de uitkomsten van dit deel om iets over de hele populatie te zeggen.',
     'Van de 1.000 facturen controleer je er 100. Die 100 vormen de steekproef. Wat je daarin vindt, gebruik je voor een uitspraak over alle 1.000 facturen.', 'beginnen')
_add('steekproefgrootte', 'Steekproefgrootte', ['steekproefgroottes', 'steekproefomvang', 'steekproefomvangen', 'steekproefaantal', 'steekproefaantallen'],
     'Het aantal elementen dat je in de steekproef onderzoekt, geschreven als kleine letter $n$. Reken altijd met het aantal dat echt onderzocht is, ook als dat afwijkt van het plan.',
     'Er waren 80 controles gepland, maar er zijn er 85 uitgevoerd. Voor de berekening gebruik je $n$ = 85.', 'steekproefomvang')
_add('aselect', 'Aselecte steekproef', ['aselect', 'aselecte', 'aselecte steekproeven'],
     'Een steekproef waarbij het toeval bepaalt welke elementen je onderzoekt, en niet je persoonlijke voorkeur. De SRA-schatters gaan uit van een passende steekproeftrekking.',
     'Je laat 100 factuurnummers loten uit alle 1.000 nummers. Pak je alleen de facturen die makkelijk te vinden zijn, dan is de steekproef niet aselect.', 'mpu')
_add('selectiebias', 'Selectieve steekproef', ['selectieve steekproeven', 'selectiebias', 'verkeerde selectie'],
     'Een steekproef waarin bepaalde soorten elementen vaker terechtkomen dan andere, doordat de keuze niet door toeval is bepaald. De uitkomst geeft dan een vertekend beeld. Meer elementen controleren lost dat niet automatisch op.',
     'Je controleert alleen goedkope artikelen. Het steekproefgemiddelde valt dan te laag uit voor de hele voorraad, ook als je er 500 in plaats van 100 controleert.', 'beginnen')
_add('waarneming', 'Waarneming', ['waarnemingen', 'observatie', 'observaties'],
     'Eén onderzocht geval met de gegevens die je daarvan hebt vastgelegd. Spreek af wat één geval is: bijvoorbeeld een artikel, een persoon of een tijdstip.',
     'In een salarisbestand is één werknemer één waarneming: leeftijd 40 en salaris € 3.500 horen bij dezelfde persoon. Een bestand met 200 werknemers heeft 200 waarnemingen.', 'beginnen')
_add('variabele', 'Variabele', ['variabelen'],
     'Een kenmerk dat je per waarneming vastlegt en dat van geval tot geval kan verschillen.',
     'In een salarisbestand zijn leeftijd en salaris variabelen: je noteert ze voor elke werknemer en de waarden verschillen per werknemer.', 'beginnen')
_add('parameter', 'Parameter', ['parameters', 'populatieparameter', 'populatieparameters'],
     'Een getal dat de hele populatie of het populatiemodel beschrijft, maar dat je meestal niet kent. Je schat het daarom met gegevens uit een steekproef.',
     'De gemiddelde werkelijke waarde van alle 1.000 artikelen is een parameter: om die precies te weten zou je alles moeten controleren. Het gemiddelde van 100 gecontroleerde artikelen gebruik je als schatting daarvan.', 'beginnen')
_add('steekproefgrootheid', 'Steekproefgrootheid', ['steekproefgrootheden'],
     'Een getal dat je berekent uit de gegevens van de steekproef. Trek je een andere steekproef, dan komt er meestal een ander getal uit.',
     'Steekproef A van 100 artikelen heeft gemiddelde € 80, steekproef B van 100 andere artikelen € 83. Beide gemiddelden zijn steekproefgrootheden.', 'beginnen')
_add('boekwaarde', 'Boekwaarde', ['boekwaarden'],
     'De waarde die in de administratie staat. In de formules is $b_i$ de boekwaarde van één post en $B$ het totaal van alle boekwaarden in de populatie. Dat totaal is bekend, omdat het in de administratie staat.',
     'Een artikel staat voor € 100 in de administratie, dus de boekwaarde is $b$ = € 100. Tel je de boekwaarden van alle artikelen op, dan krijg je $B$.', 'beginnen')
_add('werkelijke-waarde', 'Werkelijke waarde', ['werkelijke waarden', 'werkelijk totaal'],
     'De waarde die je met het onderzoek wilt vaststellen, geschreven als $w$. Je vergelijkt haar bij geldbedragen met de boekwaarde. Het werkelijke totaal van de hele populatie is meestal onbekend; dat wil je juist schatten.',
     'Een artikel staat voor € 100 in de boeken. Bij controle blijkt het € 90 waard te zijn. De werkelijke waarde is dus $w$ = € 90, en de boekwaarde is € 10 te hoog.', 'beginnen')
_add('eenheid', 'Meeteenheid', ['meeteenheden', 'eenheden'],
     'De schaal waarin een variabele is gemeten, zoals euro’s, jaren of centimeters. Je hebt de eenheid nodig om een uitkomst goed in woorden uit te leggen.',
     'Het salaris staat in duizenden euro’s. Een voorspelling van 3,5 betekent dan € 3.500, niet € 3,50.', 'beginnen')

# Rekenen en spreiding.
_add('gemiddelde', 'Gemiddelde', ['gemiddelden', 'steekproefgemiddelde', 'rekenkundig gemiddelde', 'Mean'],
     'Tel alle waarden op en deel door het aantal waarden. Een streep boven een letter betekent meestal gemiddelde: $w̄$ is het gemiddelde van de waarden $w$.',
     'Drie artikelen zijn € 80, € 100 en € 120 waard. Dan is $w̄$ = (80 + 100 + 120) / 3 = 300 / 3 = € 100.', 'rekenen')
_add('somteken', 'Somteken', ['somnotatie', 'sigma', 'sommatie'],
     'Het teken $Σ$ betekent: tel op. $Σw$ betekent dus: tel alle waarden $w$ bij elkaar. Let op de volgorde: bij $Σw²$ kwadrateer je eerst en tel je daarna op, bij $(Σw)²$ tel je eerst op en kwadrateer je daarna.',
     'Neem de waarden 2 en 4. $Σw$ = 2 + 4 = 6. $Σw²$ = 4 + 16 = 20. $(Σw)²$ = 6² = 36. De laatste twee uitkomsten verschillen dus.', 'rekenen')
_add('kwadraat', 'Kwadraat', ['kwadraten', 'kwadrateren', 'gekwadrateerd', 'gekwadrateerde'],
     'Een getal vermenigvuldigd met zichzelf, geschreven met een kleine 2 rechtsboven. De uitkomst is nooit negatief, want min maal min is plus.',
     '5² = 5 × 5 = 25 en (−3)² = (−3) × (−3) = 9. Daarom tellen afwijkingen naar boven en naar beneden in de variantie allebei mee.', 'rekenen')
_add('vierkantswortel', 'Vierkantswortel', ['vierkantswortels', 'worteltrekken'],
     'Het omgekeerde van kwadrateren: het niet-negatieve getal dat, met zichzelf vermenigvuldigd, het getal onder het wortelteken geeft.',
     '$√225$ = 15, want 15 × 15 = 225. Zo maak je van een variantie van 225 een standaardafwijking van 15.', 'rekenen')
_add('spreiding', 'Spreiding', ['spreiden'],
     'Hoe ver waarden uit elkaar liggen. Liggen ze dicht bij elkaar, dan is de spreiding klein; liggen ze ver uiteen, dan is ze groot. Variantie en standaardafwijking vatten spreiding samen in één getal.',
     'De reeksen 90, 100, 110 en 0, 100, 200 hebben allebei gemiddelde 100. In de tweede reeks liggen de waarden veel verder uiteen, dus daar is de spreiding groter.', 'rekenen')
_add('afwijking', 'Afwijking van het gemiddelde', ['afwijkingen van het gemiddelde'],
     'Hoeveel een waarde boven of onder het gemiddelde ligt: de waarde min het gemiddelde. Alle afwijkingen samen tellen op tot nul, omdat plussen en minnen elkaar opheffen.',
     'De waarden 80, 100 en 120 hebben gemiddelde 100. De afwijkingen zijn −20, 0 en +20. Die tellen op tot 0.', 'rekenen')
_add('variantie', 'Variantie', ['varianties', 'steekproefvariantie', 'steekproefvarianties'],
     'Een maat voor spreiding, geschreven als $s²$. Neem van elke waarde de afwijking van het gemiddelde, kwadrateer die, tel alles op en deel door $n − 1$. De uitkomst staat in gekwadrateerde eenheden, bijvoorbeeld euro².',
     'De waarden 90 en 110 hebben gemiddelde 100. De afwijkingen −10 en +10 geven de kwadraten 100 en 100. Dan is $s²$ = (100 + 100) / (2 − 1) = 200.', 'rekenen')
_add('standaardafwijking', 'Standaardafwijking', ['standaardafwijkingen', 'standaarddeviatie', 'Std. Deviation', 'Std.Deviation', 'Std. dev'],
     'De wortel uit de variantie, geschreven als $s$. Zij beschrijft de spreiding van losse waarden, in dezelfde eenheid als die waarden.',
     'Een variantie van 225 euro² geeft $s$ = $√225$ = € 15. De spreiding van de losse waarden is dus € 15, niet 225 euro².', 'rekenen')
_add('standaardfout', 'Standaardfout', ['standaardfouten', 'standard error', 'Std. Error', 'Std.Error', {'text': 'SE', 'caseSensitive': True}],
     'Geeft aan hoeveel een schatting van steekproef tot steekproef kan schommelen. De standaardafwijking gaat over losse waarden; de standaardfout gaat over de onzekerheid van de schatting.',
     'Bij $s$ = 20 en $n$ = 100 is de standaardfout van het gemiddelde, vóór eindigheidscorrectie, 20 / $√100$ = 2. Losse waarden spreiden dus met 20, maar het steekproefgemiddelde schommelt veel minder: met 2.', 'rekenen',
     [('formules', 1, 'Formules 4, 10 en 17: standaardfouten van de geschatte totalen'),
      ('slides', 13, 'Onzekerheid van populatiegemiddelde en populatietotaal')])
_add('tussenafronding', 'Tussenafronding', ['tussenafrondingen', 'tussenuitkomst', 'tussenuitkomsten'],
     'Een tussenuitkomst afronden voordat de berekening klaar is. Daardoor kan de einduitkomst veranderen. Reken in SRA bij voorkeur door met de onafgeronde waarde en rond pas aan het eind af.',
     'Je rekenmachine toont standaardfout 1.898,31599. Je mag 1.898,32 opschrijven, maar in de volgende stap reken je verder met 1.898,31599.', 'rekenen')

# Kans, schatten en intervallen.
_add('kans', 'Kans', ['kansen', 'kanswaarde'],
     'Een getal van 0 tot en met 1 dat aangeeft hoe waarschijnlijk een uitkomst is binnen het gebruikte kansmodel. 0 is onmogelijk, 1 is zeker. Je kunt een kans ook als percentage schrijven.',
     'Als 5 van de 100 facturen fout zijn en je er willekeurig één trekt, is de kans op een foute factuur 5 / 100 = 0,05, oftewel 5%.', 'onzekerheid')
_add('verdeling', 'Verdeling', ['verdelingen', 'kansverdeling', 'kansverdelingen'],
     'Een overzicht van welke waarden kunnen voorkomen en hoe vaak of met welke kans. Een verdeling laat de vorm zien: waar de meeste waarden liggen en hoe ver ze uitlopen.',
     'Van 100 artikelen zijn er 70 rond € 100 waard, 25 rond € 150 en 5 rond € 200. Dat is de verdeling: de meeste waarden liggen laag, enkele veel hoger.', 'onzekerheid')
_add('normale-verdeling', 'Normale verdeling', ['normaalverdeling', 'normaal verdeeld', 'normaal verdeelde', 'klokvorm'],
     'Een symmetrische kansverdeling in de vorm van een klok: de meeste waarden liggen rond het gemiddelde, en hoe verder daarvan af, hoe minder waarden.',
     'Bij een normale verdeling met gemiddelde 100 komen waarden rond 100 het meest voor. De waarden 90 en 110 liggen even ver van het midden.', 'onzekerheid')
_add('standaardnormaal', 'Standaardnormale verdeling', ['z-verdeling', 'standaardnormale z-verdeling'],
     'Een normale verdeling met gemiddelde 0 en standaardafwijking 1. Een waarde op deze schaal heet $z$: het aantal standaardafwijkingen boven of onder het gemiddelde. Bij veel vrijheidsgraden lijkt de $t$-verdeling hier sterk op.',
     'Bij gemiddelde 100 en standaardafwijking 10 ligt de waarde 120 op $z$ = (120 − 100) / 10 = 2. Dat is twee standaardafwijkingen boven het gemiddelde.', 'onzekerheid')
_add('t-verdeling', 'Student-t-verdeling', ['t-verdeling', 'Student t', 'Student-t'],
     'Een symmetrische verdeling die lijkt op de normale verdeling, maar die rekening houdt met de onzekerheid doordat je de spreiding moet schatten. De vorm hangt af van de vrijheidsgraden: hoe minder vrijheidsgraden, hoe zwaarder de staarten.',
     'Voor een tweezijdig 95%-interval is de kritieke $t$ bij 5 vrijheidsgraden 2,571 en bij 120 vrijheidsgraden 1,980. Weinig vrijheidsgraden geven dus een breder interval.', 'onzekerheid')
_add('staart', 'Staart', ['staarten', 'staartkans', 'staartkansen', 'linkerstaart', 'rechterstaart'],
     'Het uiterste linker- of rechterdeel van een verdeling. De staartkans is de kans op een uitkomst in dat deel.',
     'Bij een tweezijdig 95%-interval blijft 5% over. Dat verdeel je over twee staarten: 2,5% links en 2,5% rechts.', 'onzekerheid')
_add('betrouwbaarheid', 'Betrouwbaarheid', ['betrouwbaarheidsniveau'],
     'Hoe vaak de intervalmethode de werkelijke waarde bevat als je de steekproef steeds zou herhalen. Je kiest dit percentage vooraf en schrijft het als $1 − α$. Het gaat dus over de methode, niet over één berekend interval.',
     'Je kiest 95% betrouwbaarheid, dus $α$ = 0,05. Trek je 100 keer een steekproef en maak je telkens op dezelfde manier een interval, dan bevatten ongeveer 95 intervallen de werkelijke waarde.', 'onzekerheid')
_add('betrouwbaarheidsinterval', 'Betrouwbaarheidsinterval', ['betrouwbaarheidsintervallen', 'schattingsinterval', 'schattingsintervallen'],
     'Een bereik met een onder- en bovengrens voor een onbekende populatiewaarde. Je berekent het als puntschatting ± marge. Het percentage zegt hoe vaak deze methode de werkelijke waarde bevat. Het zegt niet dat dat percentage van de losse waarnemingen binnen het bereik valt.',
     'De totale voorraadwaarde is geschat op € 100.000, met standaardfout € 2.000. Bij kritieke waarde $t$ = 2 is de marge 2 × € 2.000 = € 4.000. Het interval is [€ 96.000; € 104.000]. Dit gaat over het totaal van de voorraad, niet over losse artikelen.', 'onzekerheid')
_add('puntschatting', 'Puntschatting', ['puntschattingen'],
     'Eén getal waarmee je een onbekende populatiewaarde schat. Je ziet daaraan nog niet hoe zeker die schatting is; daarvoor heb je een interval nodig.',
     'Je schat de totale voorraadwaarde op € 100.000. Dat is de puntschatting. Pas het interval [€ 96.000; € 104.000] laat zien hoeveel onzekerheid eromheen zit.', 'onzekerheid')
_add('marge', 'Onnauwkeurigheidsmarge', ['onnauwkeurigheidsmarges', 'onzekerheidsmarge', 'onzekerheidsmarges', 'marge', 'marges', 'onnauwkeurigheid', 'halve intervalbreedte'],
     'De afstand van de puntschatting tot een intervalgrens bij een symmetrisch interval. Je schrijft de marge als $E$ en berekent haar als kritieke waarde × standaardfout.',
     'Standaardfout € 2.000 en kritieke $t$ = 2 geven $E$ = 2 × € 2.000 = € 4.000. Bij puntschatting € 100.000 wordt het interval € 100.000 ± € 4.000.', 'onzekerheid')
_add('intervalbreedte', 'Intervalbreedte', ['totale breedte', 'totale intervalbreedte'],
     'De afstand van ondergrens tot bovengrens: bovengrens min ondergrens. Bij een symmetrisch interval is dat twee keer de marge $E$.',
     'Het interval [96; 104] heeft breedte 104 − 96 = 8. De marge is de helft daarvan: $E$ = 4.', 'onzekerheid')
_add('intervalgrenzen', 'Intervalgrenzen', ['ondergrens', 'bovengrens'],
     'De laagste en hoogste waarde van een interval. Bij een symmetrisch interval is de ondergrens de puntschatting min de marge en de bovengrens de puntschatting plus de marge.',
     'Puntschatting 100 en marge 4 geven ondergrens 100 − 4 = 96 en bovengrens 100 + 4 = 104.', 'onzekerheid')
_add('kritieke-waarde', 'Kritieke waarde', ['kritieke waarden', 'kritieke t', 'tabelwaarde', 'tabelwaarden', 'kritieke grens', 'F-grens'],
     'Het getal dat je in de statistische tabel opzoekt. Bij een $t$-interval vermenigvuldig je de standaardfout met dit getal om de marge te berekenen. Bij een toets is het de grens waarmee je de berekende toetsingsgrootheid vergelijkt. De rij hangt af van de vrijheidsgraden; de kolom van de staartkans en de toetsrichting.',
     'Bij 24 vrijheidsgraden en een eenzijdige 95%-bovengrens zoek je rij 24 en rechterstaart 0,05: $t$ = 1,711. Met gemiddelde 80 en standaardfout 2 wordt de bovengrens 80 + 1,711 × 2 = 83,422. Voor een tweezijdig 95%-interval gebruik je 0,025 per staart: $t$ = 2,064.', 'onzekerheid', refs=[('tabellen', 12, 'Tabel 13.4, rij 24'), ('programma', 4, 'Tabelregels')])
_add('vrijheidsgraden', 'Vrijheidsgraden', ['vrijheidsgraad', 'aantal vrijheidsgraden', 'degrees of freedom', 'df', 'residual df'],
     'Het aantal waarden dat vrij kan variëren nadat je parameters hebt geschat. Je hebt dit getal nodig om de juiste rij in de $t$- of $F$-tabel te kiezen. Bij een steekproefvariantie is het $n − 1$, bij regressieresiduen met $k$ verklarende variabelen $n − k − 1$.',
     'Een regressie met $n$ = 50 waarnemingen en $k$ = 3 verklarende variabelen heeft 50 − 3 − 1 = 46 residuele vrijheidsgraden. Daarmee zoek je de kritieke $t$ op.', 'anova')
_add('eindigheidscorrectie', 'Eindigheidscorrectie', ['eindige-populatiecorrectie', 'finite population correction'],
     'De factor $√{(N − n)/(N − 1)}$ die de standaardfout verkleint als je zonder teruglegging trekt uit een eindige populatie. Hoe groter het gecontroleerde deel, hoe kleiner de factor. Bij volledige controle is hij nul.',
     'Bij $N$ = 1.000 en $n$ = 100 is de factor $√{900/999}$ ≈ 0,949: de standaardfout wordt ongeveer 5% kleiner. Controleer je alle 1.000 posten, dan is de factor 0 en is er geen steekproefonzekerheid meer.', 'mpu')
_add('afronden-buiten', 'Afronden naar buiten', ['afronding naar buiten', 'naar buiten afronden'],
     'Een interval zo afronden dat het nooit smaller wordt: de ondergrens rond je omlaag af en de bovengrens omhoog, op de gevraagde afrondingseenheid.',
     'Het interval [€ 1.234; € 1.876] wordt, op € 100 naar buiten afgerond, [€ 1.200; € 1.900].', 'onzekerheid')

# Vier schatters, planning en stratificatie.
_add('schatter', 'Schatter', ['schatters', 'schattingsmethode', 'schattingsmethoden'],
     'De rekenregel waarmee je uit steekproefgegevens een onbekende populatiewaarde schat. De schatter is dus de formule; de uitkomst daarvan heet de schatting.',
     'De regel $N × w̄$ is een schatter van het populatietotaal. Vul je $N$ = 1.000 en $w̄$ = € 80 in, dan is € 80.000 de schatting.', 'mpu')
_add('mpu', 'Directe schatter (MPU)', ['directe schatter', 'directe schatting', 'MPU', 'Mean Per Unit', 'MPU-schatter'],
     'Schat het populatietotaal uit alleen de gecontroleerde werkelijke waarden: neem hun gemiddelde en vermenigvuldig dat met het aantal elementen in de populatie, $Ŵ_MPU = N × w̄$. MPU staat voor Mean Per Unit: gemiddelde per eenheid.',
     'Een voorraad telt $N$ = 1.000 artikelen. Je controleert er 100 en hun gemiddelde werkelijke waarde is $w̄$ = € 80. Dan is $Ŵ_MPU$ = 1.000 × € 80 = € 80.000: de geschatte werkelijke waarde van de hele voorraad.', 'mpu')
_add('controlefout', 'Controlefout', ['controlefouten', 'boekwaardefout', 'verschil per post'],
     'Het verschil tussen boekwaarde en werkelijke waarde van één post: $e = b − w$. Een positieve $e$ betekent dat de boekwaarde te hoog is. Deze $e$ is iets anders dan een regressieresidu.',
     'Boekwaarde € 100 en werkelijke waarde € 90 geven $e$ = 100 − 90 = +€ 10: de post staat € 10 te hoog in de boeken.', 'verschil')
_add('verschilschatter', 'Verschilschatter', ['verschilschatting', 'verschilschattingen', 'verschil-'],
     'Schat het werkelijke totaal door de gemiddelde fout uit de steekproef door te rekenen naar de populatie en van het boekwaardetotaal af te trekken: $Ŵ_V = B − N × ē$. Deze methode past bij ongeveer constante foutbedragen. De cursus noemt minstens 30 afwijkende posten als voorwaarde.',
     'Stel $B$ = € 100.000, $N$ = 1.000 en gemiddelde fout $ē$ = € 10. Dan is $Ŵ_V$ = € 100.000 − 1.000 × € 10 = € 90.000.', 'verschil')
_add('goedratio', 'Goedratio', ['goedratio’s', 'goedratios', 'verhouding van de sommen', 'goedratio q', 'dimensieloze goedratio', 'dimensieloze goedratio q'],
     'De verhouding tussen werkelijke waarde en boekwaarde in de steekproef: $q = {Σw}/{Σb}$. Je telt dus eerst alle werkelijke waarden en alle boekwaarden op en deelt daarna. Dit is niet in het algemeen het gemiddelde van de verhoudingen per post.',
     'In de steekproef is $Σw$ = € 19.000 en $Σb$ = € 20.000. Dan is $q$ = 19.000 / 20.000 = 0,95: per euro boekwaarde is € 0,95 werkelijk aanwezig.', 'quotient')
_add('quotientschatter', 'Quotiëntschatter', ['quotiëntschatting', 'quotientschatter', 'ratioschatter'],
     'Schat het werkelijke totaal door het bekende boekwaardetotaal met de goedratio te vermenigvuldigen: $Ŵ_Q = q × B$. Deze methode past bij een ongeveer vaste verhouding tussen $w$ en $b$. Controleer ook de voorwaarde van minstens 30 afwijkende posten.',
     'Bij $q$ = 0,95 en $B$ = € 500.000 is $Ŵ_Q$ = 0,95 × € 500.000 = € 475.000.', 'quotient')
_add('regressieschatter', 'Regressieschatter', ['regressieschatting'],
     'Begint bij de directe schatting $N w̄$ en corrigeert die met het verschil tussen het bekende boekwaardetotaal $B$ en de doorgerekende steekproefboekwaarde $N b̄$: $Ŵ_R = N w̄ + b_1(B − N b̄)$. Je schat hier een populatietotaal; dat is iets anders dan een nieuwe $y$ voorspellen.',
     'Stel $N$ = 1.000, $w̄$ = € 80, $b̄$ = € 90, $B$ = € 89.000 en $b_1$ = 0,8. Dan is $Ŵ_R$ = € 80.000 + 0,8 × (€ 89.000 − € 90.000) = € 80.000 − € 800 = € 79.200.', 'regressieschatter')
_add('boekwaardecorrectie', 'Correctieterm', ['correctietermen', 'boekwaardecorrectie'],
     'Het deel $b_1(B − N b̄)$ van de regressieschatter. Het past de directe schatting aan met behulp van de bekende boekwaarden. Is $B$ gelijk aan $N b̄$, dan is de correctie nul.',
     'Bij $b_1$ = 0,8 en $B − N b̄$ = −€ 1.000 is de correctieterm 0,8 × −€ 1.000 = −€ 800. De schatting gaat dus € 800 omlaag.', 'regressieschatter')
_add('planningsformule', 'Planningsformule', ['omvangsformule', 'benodigde omvang', 'vereiste omvang'],
     'De formule waarmee je vooraf berekent hoeveel posten je moet controleren. Je vult in: $N$, de gewenste marge $E$, de variantie die bij de schatter hoort en de kritieke $t$. Rond de uitkomst altijd naar boven af.',
     'De formule geeft $n$ = 520,122. Je moet dan minstens 521 posten controleren, want met 520 haal je de gewenste marge net niet.', 'steekproefomvang')
_add('gamma', 'Gamma bij steekproefplanning', ['gamma', 'tussenstap gamma'],
     'Een tussenstap in de omvangsformule. Eerst bereken je $γ = {E²}/{t² × N × s²}$ en daarna $n = N/(1 + γ)$. De variantie $s²$ moet passen bij de gekozen schatter.',
     'Bij $N$ = 1.000 en $γ$ = 3 volgt $n$ = 1.000 / (1 + 3) = 1.000 / 4 = 250.', 'steekproefomvang')
_add('uitbreiding', 'Steekproefuitbreiding', ['uitbreiding', 'uitbreiding van de steekproef', 'extra controles'],
     'Het aantal posten dat je nog extra moet controleren: de totale vereiste omvang min wat al gecontroleerd is. De uitbreiding kan niet negatief zijn.',
     'Je hebt 521 controles nodig en 180 zijn al gedaan. De uitbreiding is 521 − 180 = 341 extra controles.', 'steekproefomvang')
_add('stratificatie', 'Stratificatie', ['stratificeren', 'gestratificeerd', 'gestratificeerde steekproef'],
     'De populatie eerst in groepen verdelen en per groep steekproeven of controles uitvoeren. Als de waarden binnen elke groep meer op elkaar lijken, kan de schatting nauwkeuriger worden.',
     'Je verdeelt voorraadartikelen in lage, middelhoge en hoge boekwaarden, schat elke groep apart en telt de schattingen op tot één totaal.', 'stratificatie')
_add('stratum', 'Stratum', ['strata', 'stratums', 'deelpopulatie', 'deelpopulaties'],
     'Eén van de groepen waarin je de populatie bij stratificatie verdeelt. Elk stratum heeft een afzonderlijke omvang $N_i$, gemiddelde en spreiding $s_i$.',
     'Alle artikelen met een boekwaarde van € 100 tot € 500 vormen samen één stratum. Zijn dat er 400, dan is $N_1$ = 400.', 'stratificatie')
_add('topstratum', 'Topstratum', ['topstrata', 'gecontroleerd topstratum', 'gecontroleerde topstratum', 'integraal gecontroleerd topstratum', 'integraal gecontroleerde topstratum', 'volledig gecontroleerd topstratum'],
     'Een apart stratum met de hoogste posten, bijvoorbeeld alles boven een grensbedrag. Controleer je dit stratum volledig, dan ken je de werkelijke waarde en is er voor dat deel geen steekproefonzekerheid.',
     'De 12 duurste machines controleer je allemaal: samen zijn ze € 900.000 waard. Dat bedrag tel je zonder onzekerheid op bij de schattingen van de andere strata.', 'stratificatie')
_add('integrale-controle', 'Integrale controle', ['integraal gecontroleerd', 'integraal gecontroleerde', 'volledige controle'],
     'Alle elementen van de populatie of groep controleren, dus geen steekproef trekken. Daardoor is er voor die groep geen onzekerheid door steekproeftrekking.',
     'Een topstratum heeft 12 posten en je controleert alle 12. De werkelijke waarde van dit stratum is dan bekend en hoeft niet geschat te worden.', 'stratificatie')
_add('allocatie', 'Allocatie', ['allocatiemethode', 'allocatiemethoden', 'alloceren'],
     'De verdeling van het totale aantal controles over de strata. Na afronden moeten de aantallen per stratum samen weer het gewenste totaal zijn.',
     'Je hebt 100 controles en twee strata: 60 gaan naar stratum 1 en 40 naar stratum 2. Samen is dat weer 100.', 'stratificatie')
_add('evenredige-allocatie', 'Evenredige allocatie', ['evenredig alloceren', 'proportionele allocatie'],
     'De controles verdelen naar de grootte van de strata: $n_i = N_i/N × n$. Een groter stratum krijgt meer controles. De spreiding per stratum speelt hierbij geen rol.',
     'Stratum 1 heeft 600 van de 1.000 posten en je hebt $n$ = 100. Dan krijgt het 600 / 1.000 × 100 = 60 controles.', 'stratificatie')
_add('neyman', 'Neyman-allocatie', ['Neyman', 'Neyman allocatie'],
     'De controles verdelen naar grootte én spreiding van de strata: $n_i = {N_i s_i}/{Σ(N_i s_i)} × n$. Een grotere groep of een groep met meer spreiding krijgt meer controles. Dit geldt bij gelijke kosten per controle.',
     'Twee strata van elk 500 posten hebben spreiding 10 en 30. $N_i s_i$ is dan 5.000 en 15.000, samen 20.000. Van 100 controles gaan er 5.000 / 20.000 × 100 = 25 naar stratum 1 en 75 naar stratum 2.', 'stratificatie')

# Regressie en de ANOVA-tabel.
_add('regressie', 'Regressie', ['regressieanalyse', 'regressiemodel', 'regressiemodellen'],
     'Een model dat beschrijft hoe een uitkomst $y$ samenhangt met één of meer verklarende variabelen. Je kunt er voorspellingen mee maken, maar het toont op zichzelf geen oorzaak en gevolg aan.',
     'Je schat $ŷ = 200 + 3x$, met $x$ het aantal geproduceerde stuks en $y$ de kosten in euro’s. Bij 100 stuks voorspelt het model 200 + 3 × 100 = € 500 aan kosten.', 'regressielijn')
_add('enkelvoudige-regressie', 'Enkelvoudige regressie', ['enkelvoudig regressiemodel', 'enkelvoudige lineaire regressie'],
     'Regressie met precies één verklarende variabele. Bij een rechte lijn is de geschatte vergelijking $ŷ = b_0 + b_1 x$.',
     'Je voorspelt kosten alleen uit het aantal geproduceerde artikelen: $ŷ = 200 + 3x$. Er is één $x$-variabele, dus dit is enkelvoudig.', 'regressielijn')
_add('afhankelijke-variabele', 'Afhankelijke variabele', ['afhankelijke variabelen', 'te verklaren variabele', 'uitkomstvariabele', 'Dependent Variable'],
     'De uitkomst $y$ die je wilt beschrijven of voorspellen. Een regressiemodel heeft één afhankelijke variabele, ook als er meerdere verklarende variabelen zijn.',
     'Je onderzoekt of salaris samenhangt met leeftijd en opleiding. Salaris is de afhankelijke variabele, want dat wil je verklaren.', 'regressielijn')
_add('verklarende-variabele', 'Verklarende variabele', ['verklarende variabelen', 'onafhankelijke variabele', 'onafhankelijke variabelen', 'predictor', 'predictoren'],
     'Een $x$-variabele waarmee je verschillen in $y$ probeert te beschrijven. De naam betekent niet dat een oorzakelijk effect is aangetoond.',
     'In een model voor salaris zijn leeftijd en opleiding verklarende variabelen. Ze helpen het salaris voorspellen, maar dat bewijst niet dat ze het salaris veroorzaken.', 'regressielijn')
_add('coefficient', 'Regressiecoëfficiënt', ['regressiecoëfficiënten', 'coëfficiënt', 'coëfficiënten'],
     'Een getal in de regressievergelijking, zoals de constante of een helling. De letter $b$ staat voor de geschatte waarde uit de gegevens, $β$ voor de onbekende waarde in de populatie.',
     'In $ŷ = 200 + 3x$ zijn 200 (dat is $b_0$) en 3 (dat is $b_1$) de geschatte coëfficiënten.', 'regressielijn')
_add('constante', 'Constante', ['intercept', 'Constant'],
     'De voorspelde $y$ als alle verklarende variabelen nul zijn, geschreven als $b_0$. Ligt nul buiten het onderzochte gebied, dan heeft deze waarde niet vanzelf een praktische betekenis.',
     'In $ŷ = 200 + 3x$, met $x$ het aantal stuks, zijn 200 de voorspelde kosten bij 0 stuks. In een model voor salaris op leeftijd zegt leeftijd 0 juist niets.', 'regressielijn')
_add('helling', 'Richtingscoëfficiënt', ['richtingscoëfficiënten', 'helling', 'hellingscoëfficiënt', 'hellingscoëfficiënten', 'slope'],
     'Hoeveel de voorspelde $y$ verandert als $x$ één eenheid groter wordt, geschreven als $b_1$. Bij meervoudige regressie geldt dat als de andere opgenomen variabelen gelijk blijven.',
     'Bij $ŷ = 200 + 3x$ is de voorspelling bij $x$ = 50 gelijk aan 350 en bij $x$ = 51 gelijk aan 353. Eén extra $x$ geeft dus 3 meer.', 'regressielijn')
_add('storingsterm', 'Storingsterm', ['storingstermen', 'storing', 'epsilon'],
     'Het deel van $y$ dat het populatiemodel niet verklaart, geschreven als $ε$. Je kunt de storing niet direct waarnemen. Na het schatten bereken je residuen als benadering.',
     'Twee werknemers met dezelfde opgenomen kenmerken verdienen toch verschillend. Dat verschil, dat het model niet vangt, valt onder de storingsterm.', 'regressielijn')
_add('residu', 'Residu', ['residuen', 'residuele afwijking', 'Unstandardized Residual'],
     'Het verschil tussen de gemeten waarde en de voorspelling van het model: $e = y − ŷ$. Positief betekent dat de waarneming boven de voorspelling ligt, negatief eronder.',
     'De werkelijke kosten zijn 380 en het model voorspelt 350. Het residu is 380 − 350 = +30: de kosten liggen 30 boven de voorspelling.', 'regressielijn')
_add('ols', 'Kleinste-kwadratenmethode', ['kleinste kwadraten', 'OLS', 'Ordinary Least Squares'],
     'De methode die de coëfficiënten kiest waarmee de som van de gekwadrateerde residuen zo klein mogelijk is. De afkorting is OLS.',
     'Lijn A heeft residuen −2, 1 en 1, dus $Σe²$ = 4 + 1 + 1 = 6. Lijn B heeft residuen 3, −3 en 0, dus $Σe²$ = 9 + 9 + 0 = 18. Tussen deze twee kiest OLS lijn A.', 'regressielijn')
_add('ongestandaardiseerde-coefficient', 'Ongestandaardiseerde coëfficiënt', ['ongestandaardiseerde coëfficiënten', 'Unstandardized Coefficients', 'Unstandardized B'],
     'Een geschatte coëfficiënt in de oorspronkelijke eenheden van de variabelen. In SPSS staat die in kolom B van de tabel Coefficients. Deze kolom gebruik je voor de gewone regressievergelijking.',
     'B = 30 bij leeftijd betekent: per extra jaar 30 salariseenheden meer, bij gelijkblijvende andere kenmerken.', 'regressielijn')
_add('gestandaardiseerde-coefficient', 'Gestandaardiseerde coëfficiënt', ['gestandaardiseerde coëfficiënten', 'Standardized Coefficients', 'kolom Beta', {'text': 'Beta', 'caseSensitive': True}],
     'Een coëfficiënt nadat de variabelen op een schaal van standaardafwijkingen zijn gezet. SPSS noemt deze kolom Beta. Gebruik haar niet in een vergelijking met de oorspronkelijke eenheden.',
     'Bij leeftijd staat B = 30 en Beta = 0,6. Voor een salarisvoorspelling in euro’s vul je 30 in, niet 0,6.', 'regressielijn')
_add('correlatie', 'Correlatie', ['correlaties', 'correlatiecoëfficiënt', 'correlatiecoëfficiënten', 'Pearsons correlatie', 'Pearson'],
     'Een getal $r$ tussen −1 en 1 dat de richting en sterkte van een lineair verband beschrijft. Dicht bij −1 of 1 is het verband sterk. Een $r$ dicht bij nul sluit een krom verband niet uit.',
     '$r$ = −0,8 wijst op een sterk dalend lineair verband: als de ene variabele stijgt, daalt de andere meestal. Dat bewijst geen oorzaak en gevolg.', 'regressielijn')
_add('causaliteit', 'Causaliteit', ['causaal', 'causale', 'causaal verband', 'oorzaak-gevolgrelatie'],
     'Een oorzaak-gevolgrelatie: de ene variabele veroorzaakt de verandering in de andere. Een correlatie of regressie laat dit op zichzelf niet zien, want andere variabelen of groepsverschillen kunnen de samenhang verklaren.',
     'Salaris hangt samen met leeftijd. Dat toont op zichzelf niet aan dat één extra verjaardag het salaris veroorzaakt.', 'regressielijn')
_add('scatterplot', 'Spreidingsdiagram', ['spreidingsdiagrammen', 'scatterplot', 'scatter plot', 'scatterplots', 'puntenwolk'],
     'Een grafiek waarin elke waarneming één punt is, met $x$ op de horizontale en $y$ op de verticale as. Je ziet zo de vorm, richting en spreiding van een verband en mogelijke groepen of uitschieters.',
     'Zet leeftijd horizontaal en salaris verticaal. Iedere werknemer wordt één punt. Lopen de punten van linksonder naar rechtsboven, dan hoort bij een hogere leeftijd meestal een hoger salaris.', 'regressielijn',
     [('spss', 13, 'Spreidingsdiagrammen bij opdracht 4B'), ('attentie', 3, 'Regressie en spreidingsdiagram')])
_add('anova', 'ANOVA', ['variantieanalyse', 'Analysis of Variance', 'ANOVA-tabel'],
     'De tabel die de variatie in $y$ bij gewone OLS-regressie met constante splitst in een verklaard en een resterend deel. Je leest er kwadratensommen, vrijheidsgraden, gemiddelde kwadratensommen en $F$ af.',
     'TotalSS = 100 wordt gesplitst in SSR = 80 (verklaard) en SSE = 20 (resterend). Samen is dat weer 100.', 'anova')
_add('kwadratensom', 'Kwadratensom', ['kwadratensommen', 'Sum of Squares', 'SS'],
     'Een som van gekwadrateerde afwijkingen. Welke afwijkingen je neemt, bepaalt of het om totale, verklaarde of resterende variatie gaat.',
     'Residuen −2 en 3 geven een residuele kwadratensom van (−2)² + 3² = 4 + 9 = 13.', 'anova')
_add('totalss', 'Totale kwadratensom', ['TotalSS', 'Total SS', 'SST', 'totale variatie'],
     '$Σ(y_i − ȳ)²$: alle gekwadrateerde afwijkingen van $y$ ten opzichte van het gemiddelde. Dit is de totale variatie die er te verklaren valt. Bij gewone OLS met constante geldt TotalSS = SSR + SSE.',
     'De waarden 2, 4 en 6 hebben gemiddelde 4. Dan is TotalSS = (−2)² + 0² + 2² = 8.', 'anova')
_add('ssr', 'Verklaarde kwadratensom', ['SSR', 'verklaarde variatie', 'Regression Sum of Squares'],
     '$Σ(ŷ_i − ȳ)²$: het deel van de variatie dat de geschatte regressie verklaart. In de SRA-ANOVA-tabel staat dit in de rij Regression.',
     'Bij SSR = 80 en TotalSS = 100 verklaart het model 80 / 100 = 80% van de variatie.', 'anova')
_add('sse', 'Residuele kwadratensom', ['SSE', 'resterende kwadratensom', 'Sum of Squared Errors', 'Sum of Squared Residuals'],
     '$Σ(y_i − ŷ_i)²$: de som van de gekwadrateerde residuen, dus de variatie die na het model overblijft. OLS kiest de coëfficiënten die deze som zo klein mogelijk maken.',
     'Residuen −2, 1 en 3 geven SSE = 4 + 1 + 9 = 14.', 'anova')
_add('ms', 'Gemiddelde kwadratensom', ['Mean Square', 'MS'],
     'Een kwadratensom gedeeld door de bijbehorende vrijheidsgraden. In ANOVA zijn MSR en MSE de twee waarden waarmee je $F$ berekent.',
     'Een SS van 80 met 2 vrijheidsgraden geeft MS = 80 / 2 = 40.', 'anova')
_add('msr', 'MSR', ['Mean Square Regression'],
     'De verklaarde kwadratensom gedeeld door het aantal verklarende variabelen: $MSR = SSR/k$. Dit is de teller van de globale $F$.',
     'SSR = 80 en $k$ = 2 geven MSR = 80 / 2 = 40.', 'anova')
_add('mse', 'MSE', ['Mean Squared Error', 'Mean Square Error', 'Mean Square Residual', 'residuele variantie', 'trainings-MSE'],
     'De residuele kwadratensom gedeeld door de residuele vrijheidsgraden: $MSE = SSE/(n − k − 1)$. De wortel hieruit is de residuele standaardfout.',
     'SSE = 112 en 28 residuele vrijheidsgraden geven MSE = 112 / 28 = 4. De residuele standaardfout is dan $√4$ = 2.', 'anova')
_add('residuele-standaardfout', 'Residuele standaardfout', ['Std. Error of the Estimate', 'standaardfout van het regressiemodel', 'residuele standaardafwijking'],
     'De wortel uit MSE, in de eenheid van $y$. Zij beschrijft de geschatte spreiding rond de regressielijn en je gebruikt haar in het voorspellingsinterval. SPSS noemt haar Std. Error of the Estimate.',
     'MSE = 16 geeft Std. Error of the Estimate = $√16$ = 4. Staat $y$ in euro’s, dan is deze spreiding € 4.', 'anova')
_add('r-kwadraat', 'R²', ['R-kwadraat', 'R2', 'R Square', 'determinatiecoëfficiënt'],
     'R² zegt welk deel van de verschillen in $y$ het model verklaart. Het ligt tussen 0 en 1. Je rekent het uit als $R² = SSR/TotalSS$. Het is niet het percentage waarnemingen dat precies goed voorspeld is.',
     'Huren verschillen per woning. Bij $R²$ = 0,80 hangt 80% van die verschillen samen met de oppervlakte; 20% blijft onverklaard. In de tabel: SSR = 80 en TotalSS = 100 geven 80 / 100 = 0,80.', 'anova')

# Hypothesetoetsen en betekenis van beslissingen.
_add('hypothese', 'Hypothese', ['hypothesen', 'hypotheses'],
     'Een uitspraak over een populatie of modelparameter die je kunt toetsen. Bij een toets schrijf je een nulhypothese en een alternatief op voordat je de uitkomst beoordeelt.',
     'De uitspraak dat de populatiehelling nul is, kun je als nulhypothese toetsen: $H_0: β_1 = 0$.', 'toetsen')
_add('nulhypothese', 'Nulhypothese', ['nulhypothesen', 'nulhypotheses', 'H₀', 'H0'],
     'De uitspraak waar je bij de toetsberekening van uitgaat, geschreven als $H_0$. Je verwerpt haar alleen als de gegevens volgens de vooraf gekozen toets voldoende tegenbewijs geven.',
     '$H_0: β_1 = 0$ zegt dat de populatiehelling in het onderzochte model nul is. De toets kijkt of de steekproef daar genoeg tegen inbrengt.', 'toetsen')
_add('alternatieve-hypothese', 'Alternatieve hypothese', ['alternatieve hypothesen', 'alternatieve hypotheses', 'H₁', 'H1'],
     'De uitspraak waarvoor je met de toets bewijs zoekt, geschreven als $H_1$. Die kan beide richtingen betreffen of juist één vooraf gekozen richting.',
     'Wil je weten of het verband dalend is, dan neem je $H_1: β_1 < 0$. Wil je weten of er in welke richting dan ook een verband is, dan neem je $H_1: β_1 ≠ 0$.', 'toetsen')
_add('toetsingsgrootheid', 'Toetsingsgrootheid', ['toetsingsgrootheden', 'toetsingsuitkomst', 'toetsstatistiek'],
     'Het getal dat je uit de steekproef berekent om een hypothese te beoordelen, zoals $t$ of $F$. Je vergelijkt het met een toetsverdeling of kritieke grens.',
     'Bij B = 6 en Std. Error = 2 is $t$ = 6 / 2 = 3 voor een nulhypothese met coëfficiënt nul. Is de kritieke waarde 2, dan ligt 3 verder van nul en verwerp je $H_0$.', 'toetsen')
_add('p-waarde', 'p-waarde', ['p-waarden', 'p-value', 'p-values', 'Sig.', 'Sig'],
     'De kans op een uitkomst die minstens zo extreem is als de gevonden uitkomst, uitgaande van $H_0$ en de toetsaannames. Dit is niet de kans dat $H_0$ waar is. SPSS noemt deze waarde vaak Sig.',
     'Een tweezijdige $p$ = 0,03 is kleiner dan $α$ = 0,05, dus bij deze toets verwerp je $H_0$.', 'toetsen')
_add('significantieniveau', 'Significantieniveau', ['significantieniveaus', 'alfa', 'alpha'],
     'De grens $α$ die je vooraf kiest, bijvoorbeeld 0,05. Zij begrenst onder de toetsaannames het risico dat je een ware nulhypothese verwerpt.',
     'Bij $α$ = 0,05 vergelijk je een tweezijdige $p$-waarde met 0,05, niet nog eens met 0,025.', 'toetsen')
_add('significant', 'Statistische significantie', ['statistisch significant', 'significant', 'significante', 'significantie'],
     'Een toetsuitkomst die bij het gekozen $α$ voldoende bewijs tegen $H_0$ geeft. Dat zegt op zichzelf niets over hoe groot een verband in de praktijk is, en niets over oorzaak en gevolg.',
     'Een helling van € 2 per jaar kan significant positief zijn en toch in de praktijk maar een kleine verandering betekenen.', 'toetsen')
_add('eenzijdig', 'Eenzijdig', ['eenzijdige toets', 'eenzijdige', 'eenzijdige toetsen', 'eenzijdig interval'],
     'Gericht op één kant: bij een toets kies je vooraf één richting in $H_1$, bij een interval is één grens relevant. Een tweezijdige SPSS-$p$ mag je voor een eenzijdige toets alleen halveren als het teken bij $H_1$ past; anders gebruik je $1 − p/2$.',
     'Bij $H_1: β_1 > 0$, positieve B en tweezijdige $p$ = 0,04 is de eenzijdige $p$ = 0,04 / 2 = 0,02. Is B negatief, dan is de eenzijdige $p$ = 1 − 0,02 = 0,98.', 'toetsen')
_add('tweezijdig', 'Tweezijdig', ['tweezijdige toets', 'tweezijdige', 'tweezijdige toetsen', 'tweezijdig interval'],
     'Gericht op beide kanten: bij een toets tellen afwijkingen in beide richtingen mee, bij een interval heb je een onder- en bovengrens. Bij de symmetrische $t$-verdeling krijgt elke staart $α/2$. Een tweezijdige $p$ vergelijk je wel met de totale $α$.',
     '$H_1: β_1 ≠ 0$ vraagt of de helling positief of negatief van nul afwijkt. Bij $α$ = 0,05 krijgt elke staart 0,025.', 'toetsen')
_add('t-toets', 't-toets', ['t-toetsen', 'individuele t-toets'],
     'De toets van één coëfficiënt: $t = {b_j − β_{j,0}}/{s_{b_j}}$. Bij toetsing tegen nul is dat B gedeeld door Std. Error. In regressie horen hier $n − k − 1$ vrijheidsgraden bij.',
     'B = −6 en Std. Error = 2 geven $t$ = −6 / 2 = −3 voor toetsing tegen nul. Je vergelijkt −3 met de kritieke waarde bij $n − k − 1$ vrijheidsgraden.', 'toetsen')
_add('f-toets', 'Globale F-toets', ['F-toets', 'F-toetsen', 'globale toets'],
     'De toets of alle hellingscoëfficiënten tegelijk nul zijn. $F = MSR/MSE$ gebruikt $k$ en $n − k − 1$ vrijheidsgraden. Een significante uitkomst wijst op minstens één helling die niet nul is.',
     'MSR = 40 en MSE = 4 geven $F$ = 40 / 4 = 10. Een significante $F$ bij drie $x$-variabelen betekent niet dat alle drie afzonderlijk significant zijn.', 'toetsen')
_add('kritiek-gebied', 'Kritiek gebied', ['kritieke gebied', 'verwerpingsgebied'],
     'De toetsuitkomsten waarbij je $H_0$ verwerpt. Waar dit gebied ligt, hangt af van de toetsrichting en $α$.',
     'Bij een linkse grens van −1,70 ligt $t$ = −3 in het kritieke gebied, dus je verwerpt $H_0$. $t$ = −1 ligt er niet in.', 'toetsen')
_add('alpha-risico', 'α-risico', ['alfa-risico', 'alpha-risico', 'type-I-fout', 'type I-fout'],
     'Het risico dat je een ware nulhypothese toch verwerpt, ook wel type-I-fout. $α$ is niet de kans dat een al verworpen hypothese toch waar blijkt.',
     'In de populatie is de helling echt nul, maar de steekproef geeft toevallig een significante uitkomst. Je concludeert dan ten onrechte dat de helling afwijkt van nul.', 'toetsen')
_add('beta-risico', 'β-risico', ['bèta-risico', 'beta-risico', 'type-II-fout', 'type II-fout'],
     'Het risico dat je een onware nulhypothese niet verwerpt, ook wel type-II-fout. De waarde van dit risico is niet automatisch $1 − α$.',
     'In de populatie bestaat een verband, maar de steekproef levert te weinig bewijs. Je verwerpt $H_0$ dan niet, terwijl die eigenlijk niet klopt.', 'toetsen')
_add('niet-verwerpen', 'H₀ niet verwerpen', ['niet verwerpen', 'onvoldoende bewijs'],
     'De gegevens leveren bij deze toets niet genoeg bewijs tegen $H_0$. Dat is geen bewijs dat $H_0$ waar is.',
     'Bij $p$ = 0,20 en $α$ = 0,05 schrijf je: onvoldoende bewijs tegen $H_0$. Je schrijft niet: er is geen enkel verband.', 'toetsen')

# Diagnostiek en het lezen van grafieken.
_add('crosssectie', 'Crosssectie', ['cross-section', 'crosssectioneel', 'crosssectionele gegevens'],
     'Gegevens van verschillende personen, bedrijven of andere eenheden op ongeveer hetzelfde moment.',
     'De salarissen van 200 werknemers in dezelfde maand zijn crosssectiegegevens: veel eenheden, één moment.', 'diagnostiek')
_add('tijdreeks', 'Tijdreeks', ['tijdreeksen', 'tijdsreeks', 'tijdsreeksen'],
     'Waarnemingen die op opeenvolgende tijdstippen zijn gemeten. De volgorde in de tijd is van belang, bijvoorbeeld bij vertraging en autocorrelatie.',
     'De maandelijkse omzet van één onderneming gedurende drie jaar is een tijdreeks met 36 waarnemingen.', 'diagnostiek')
_add('tijdsvertraging', 'Tijdsvertraging', ['tijdsvertragingen', 'vertraagde variabele', 'lag'],
     'Een verband waarbij de relevante $x$ eerder optreedt dan de $y$ die erbij hoort. De koppeling moet inhoudelijk passen bij de casus.',
     'Je onderzoekt of reclame-uitgaven in maand $t − 1$ samenhangen met de omzet in maand $t$.', 'diagnostiek')
_add('modelaanname', 'Modelaanname', ['modelaannames', 'regressieaannames', 'modelvoorwaarden', 'aannames'],
     'Een voorwaarde waaronder de modelberekeningen en de conclusies daaruit passend zijn. SRA onderzoekt onder meer normaliteit, constante spreiding en autocorrelatie.',
     'Een model heeft $R²$ = 0,90, maar de residuen vormen een trechter. De hoge $R²$ maakt die trechter niet onbelangrijk.', 'diagnostiek')
_add('regressiediagnostiek', 'Regressiediagnostiek', ['regressiediagnose', 'diagnostiek', 'diagnoses'],
     'Data, tabellen en residuen onderzoeken om te beoordelen of het regressiemodel bruikbaar is en welke problemen nader onderzoek vragen.',
     'Voordat je het voorspellingsinterval gebruikt, bekijk je uitbijters, normaliteit en veranderende spreiding.', 'diagnostiek')
_add('residuendiagram', 'Residuendiagram', ['residuenplot', 'residuendiagrammen', 'residual plot'],
     'Een grafiek van de residuen tegenover bijvoorbeeld $x$, de voorspelde $y$ of de tijd. Een systematisch patroon kan aangeven wat het model mist.',
     'De residuen zijn links en rechts positief en in het midden negatief. Die boog kan erop wijzen dat een rechte lijn het verband onvoldoende beschrijft.', 'diagnostiek')
_add('uitbijter', 'Uitbijter', ['uitbijters', 'uitschieter', 'uitschieters', 'outlier', 'outliers'],
     'Een waarneming die ongewoon ver van het patroon ligt. Kijk apart naar afwijking in $y$, afwijking in $x$ en invloed op het model. Een signaal is geen automatische reden om een geldige waarneming te verwijderen.',
     'Eén salaris is veel hoger dan de rest. Dat kan een invoerfout zijn, maar ook een geldige bijzondere functie. Eerst onderzoek je welke van de twee het is.', 'diagnostiek')
_add('gestandaardiseerd-residu', 'Gestandaardiseerd residu', ['gestandaardiseerde residuen', 'gestandaardiseerde residu', 'Standardized Residual', 'Standardized Residuals', 'Std. Residual'],
     'Een residu uitgedrukt op een schaal van standaardafwijkingen, geschreven als $z$. De cursus signaleert een $y$-uitbijter bij $|z| > 2$ als $n ≤ 100$, en bij $|z| > 3$ als $n > 100$.',
     '$z$ = 2,5 ligt bij $n$ = 100 boven de grens 2 en is dan een signaal. Bij $n$ = 101 geldt grens 3 en is het geen signaal.', 'diagnostiek')
_add('mahalanobis', 'Mahalanobis Distance', ['Mahalanobis', 'MD', 'Mahal.Distance', 'uitbijter in x'],
     'Een maat voor hoe ongewoon een waarneming ligt qua verklarende variabelen. De SRA-cursus vergelijkt het maximum met gemiddelde MD + 3 × standaardafwijking MD.',
     'Gemiddelde MD = 1 en $s_MD$ = 0,5 geven een grens van 1 + 3 × 0,5 = 2,5. Een maximum van 3 ligt daarboven.', 'diagnostiek')
_add('cooks-distance', 'Cook’s Distance', ["Cook's Distance", 'Cooks Distance', 'Cook’s', 'CD'],
     'Een maat voor de mogelijke invloed van één waarneming op de geschatte regressie. De grens is gemiddelde CD + 3 × standaardafwijking CD.',
     'Gemiddelde CD = 0,04 en $s_CD$ = 0,07 geven een grens van 0,04 + 3 × 0,07 = 0,25. Een maximum van 0,30 ligt daarboven en vraagt om onderzoek.', 'diagnostiek')
_add('invloedrijk-punt', 'Invloedrijk punt', ['invloedrijke punten', 'invloedrijke waarneming', 'invloedrijke waarnemingen'],
     'Een waarneming waarvan de aanwezigheid de geschatte regressie sterk kan veranderen. Een groot residu alleen is daarvoor niet genoeg; SRA gebruikt Cook’s Distance.',
     'Een ver weg gelegen punt kan de helling sterk sturen, ook als het dicht bij de geschatte lijn ligt.', 'diagnostiek')
_add('normaliteit', 'Normaliteit', ['normaliteitsaanname', 'niet-normaliteit', 'normaliteit van de residuen'],
     'De aanname dat de relevante storingsterm normaal verdeeld is. Je onderzoekt dat via de residuen. Een niet-significante normaliteitstoets bewijst de aanname niet.',
     'Shapiro-Wilk geeft $p$ = 0,20. Bij $α$ = 0,05 verwerp je normaliteit van de residuen niet.', 'diagnostiek')
_add('shapiro-wilk', 'Shapiro-Wilk', ['Shapiro Wilk', 'Shapiro-Wilk-toets', 'SW'],
     'Een normaliteitstoets. De SRA-werkwijze gebruikt haar voor residuen bij $n ≤ 50$. $H_0$ is normaliteit, dus een kleine $p$ geeft aanleiding om $H_0$ te verwerpen.',
     'Bij $n$ = 30 en $p$ = 0,01 is $p$ kleiner dan 0,05: je verwerpt normaliteit op niveau 0,05.', 'diagnostiek')
_add('kolmogorov-smirnov', 'Kolmogorov-Smirnov', ['Kolmogorov Smirnov', 'Kolmogorov-Smirnov-toets', 'KS'],
     'De normaliteitstoets die de SRA-werkwijze gebruikt voor residuen bij $n > 50$. Beoordeel de $p$-waarde tegenover $α$.',
     'Bij $n$ = 59 en $p$ = 0,20 is er op niveau 0,05 onvoldoende bewijs om normaliteit te verwerpen.', 'diagnostiek',
     [('attentie', 5, 'Normaliteit van residuen'), ('spss', 19, 'Tests of Normality bij n = 59')])
_add('histogram', 'Histogram', ['histogrammen'],
     'Een grafiek die numerieke waarden indeelt in aansluitende klassen. Bij gelijke klassebreedte laat de hoogte van elke staaf zien hoeveel waarnemingen in die klasse vallen.',
     'Van 12 residuen liggen er 5 tussen −1 en 0. De staaf van die klasse krijgt frequentie 5.', 'diagnostiek',
     [('spss', 19, 'Histogram van de gestandaardiseerde residuen bij de normaliteitsanalyse')])
_add('frequentie', 'Frequentie', ['frequenties', 'Frequency', 'frequentietabel'],
     'Het aantal waarnemingen dat een bepaalde waarde heeft of binnen een gekozen klasse valt.',
     'Als vier residuen tussen 0 en 1 liggen, is de frequentie van die klasse 4.', 'diagnostiek',
     [('spss', 19, 'Histogram met Frequency op de verticale as')])
_add('klassebreedte', 'Klassebreedte', ['klassebreedten', 'klassebreedtes', 'histogramklasse', 'klassen'],
     'De afstand tussen de onder- en bovengrens van een histogramklasse. In de histogramtool zijn alle klassen even breed.',
     'De klasse van −1 tot 0 heeft breedte 0 − (−1) = 1, net als de klasse van 0 tot 1.', 'diagnostiek',
     [('spss', 19, 'Klassen in het residuenhistogram')])
_add('qq-plot', 'Q-Q-plot', ['Q-Q', 'QQ-plot', 'QQ', 'Q-Q-plots', 'normaliteitsplot'],
     'Een grafiek die de geordende residuen vergelijkt met een theoretische normaalreferentie. Liggen de punten ongeveer op een rechte lijn, dan past dat bij een overeenkomstige vorm. De grafiek berekent geen $p$-waarde.',
     'Maak in het lab de verdelingsvorm schever: de puntenrij gaat dan buigen.', 'diagnostiek',
     [('spss', 19, 'Normaliteitsanalyse; aanvullende uitleg bij de didactische Q-Q-grafiek in het SRA-lab')])
_add('kwantiel', 'Kwantiel', ['kwantielen', 'quantile', 'theoretische kwantielen'],
     'Een grenswaarde bij een bepaalde positie in een verdeling. De Q-Q-tool vergelijkt gelijke posities in de residuen en in de normaalreferentie.',
     'Het 25%-kwantiel is de waarde waaronder 25% van de waarden ligt. De Q-Q-tool vergelijkt zo’n lage positie in de residuen met dezelfde lage positie in de normaalreferentie.', 'diagnostiek',
     [('spss', 19, 'Normaliteitsanalyse; begripsuitleg bij de didactische Q-Q-grafiek')])
_add('homoscedasticiteit', 'Homoscedasticiteit', ['homoscedastisch', 'homoscedastische', 'constante spreiding'],
     'De aanname dat de spreiding van de storingsterm niet verandert met de verklarende waarden. Je beoordeelt dit met de residuen.',
     'Rond zowel lage als hoge $x$-waarden blijft de verticale spreiding van de residuen ongeveer even groot.', 'diagnostiek')
_add('heteroscedasticiteit', 'Heteroscedasticiteit', ['heteroscedastisch', 'heteroscedastische', 'veranderende spreiding', 'trechtervorm', 'waaier'],
     'De spreiding van de storingsterm verandert mee met de verklarende waarden. Een trechter in het residuendiagram is een signaal om dit te onderzoeken.',
     'Bij hoge productie lopen de residuen veel verder uiteen dan bij lage productie.', 'diagnostiek')
_add('absres', 'Absolute residuen', ['absoluut residu', 'ABSRES', 'absolute gestandaardiseerde residuen'],
     'De grootte van residuen zonder plus- of minteken. SRA gebruikt ze om te onderzoeken of de spreiding samenhangt met de verklarende variabelen.',
     'De residuen −3 en +2 hebben absolute waarden 3 en 2.', 'diagnostiek',
     [('attentie', 5, 'Onderzoek heteroscedasticiteit'), ('spss', 20, 'ABSRES aanmaken voor de analyse')])
_add('wls', 'Gewogen kleinste kwadraten', ['WLS', 'Weighted Least Squares', 'gewogen regressie'],
     'Regressie waarbij waarnemingen verschillende gewichten krijgen. Dit kan passen bij verschillen in spreiding. Het juiste gewicht hangt af van het probleem.',
     'Het cursusvoorbeeld met gewicht $1/x²$ is een specifieke correctie, geen algemene keuze voor elk model.', 'diagnostiek')
_add('autocorrelatie', 'Autocorrelatie', ['autocorrelaties'],
     'Samenhang tussen storingen op verschillende tijdstippen. Bij tijdreeksen kunnen residuen daardoor systematisch na elkaar bewegen.',
     'Meerdere positieve residuen achter elkaar, gevolgd door meerdere negatieve, kunnen aanleiding geven dit te onderzoeken.', 'diagnostiek')
_add('durbin-watson', 'Durbin-Watson', ['Durbin Watson', 'DW', 'Durbin-Watson-toets'],
     'De SRA-toets voor autocorrelatie bij tijdreeksen. De uitkomst $d$ ligt tussen 0 en 4. Je vergelijkt haar met de tabelgrenzen $d_L$ en $d_U$ en de afgeleide grenzen $4 − d_U$ en $4 − d_L$.',
     'Bij $d_L$ = 1,35 en $d_U$ = 1,49 zijn de afgeleide grenzen 4 − 1,49 = 2,51 en 4 − 1,35 = 2,65. Een $d$ van 2 ligt tussen 1,49 en 2,51: dan is er geen autocorrelatie. De afstand tot 2 alleen is niet de volledige toets.', 'diagnostiek')
_add('onbeslist-gebied', 'Onbeslist gebied', ['onbesliste gebieden', 'onbeslist'],
     'Een gebied waarin de Durbin-Watson-regel geen eenduidige beslissing geeft: tussen $d_L$ en $d_U$ en tussen $4 − d_U$ en $4 − d_L$.',
     'Bij $d_L$ = 1,35, $d_U$ = 1,49 en $d$ = 1,40 ligt $d$ tussen beide grenzen, dus de uitkomst is onbeslist.', 'diagnostiek')

# Voorspellen, meervoudige modellen en transformaties.
_add('puntvoorspelling', 'Puntvoorspelling', ['puntvoorspellingen', 'voorspelde waarde', 'voorspelde waarden', 'Predicted Value'],
     'De voorspelde $y$ die je krijgt door gekozen $x$-waarden in het geschatte model in te vullen. Dit is één getal, nog zonder interval.',
     'Bij $ŷ = 10 + 2x$ en $x$ = 4 is de puntvoorspelling 10 + 2 × 4 = 18.', 'voorspellen')
_add('voorspellingsinterval', 'Individueel voorspellingsinterval', ['voorspellingsinterval', 'voorspellingsintervallen', 'individuele voorspelling'],
     'Een interval voor één nieuwe waarneming. Het neemt zowel de onzekerheid in de geschatte lijn als de spreiding van losse waarnemingen rond de lijn mee. Daarom staat in formule 50 de extra 1 onder de wortel.',
     'De puntvoorspelling is 30 en de marge 3. Het interval [27; 33] gaat over één nieuw artikel, niet over het gemiddelde van alle artikelen.', 'voorspellen')
_add('gemiddelde-respons', 'Gemiddelde respons', ['gemiddelde respons bij x', 'interval voor de gemiddelde respons'],
     'De gemiddelde $y$ bij bepaalde verklarende waarden. Het interval hiervoor mist de extra spreiding van losse waarnemingen en is bij dezelfde invoer smaller dan een individueel voorspellingsinterval.',
     'Het gemiddelde salaris bij leeftijd 40 is een andere vraag dan het salaris van één nieuwe 40-jarige.', 'voorspellen')
_add('interpolatie', 'Interpolatie', ['interpoleren'],
     'Voorspellen binnen het onderzochte bereik van de verklarende variabele.',
     'Je gegevens bevatten leeftijden van 20 tot 60. Een voorspelling bij leeftijd 40 ligt binnen dat bereik.', 'voorspellen')
_add('extrapolatie', 'Extrapolatie', ['extrapoleren'],
     'Voorspellen buiten het onderzochte bereik. Het waargenomen verband hoeft daar niet op dezelfde manier door te lopen.',
     'Je gegevens bevatten leeftijden van 20 tot 60. Een voorspelling voor leeftijd 85 is extrapolatie.', 'voorspellen')
_add('meervoudige-regressie', 'Meervoudige regressie', ['meervoudig regressiemodel', 'multiple regression'],
     'Regressie met meerdere verklarende variabelen en één afhankelijke variabele. Elke helling beschrijft de samenhang bij gelijkblijvende overige opgenomen kenmerken.',
     'Je voorspelt salaris met $ŷ = 1.000 + 30x_1 + 500x_2$, met $x_1$ leeftijd en $x_2$ leidinggeven (0 of 1). Bij leeftijd 40 en leidinggeven is de voorspelling 1.000 + 30 × 40 + 500 × 1 = 2.700.', 'meervoudig')
_add('dummy', 'Dummyvariabele', ['dummy', 'dummy’s', "dummy's", 'dummies', 'dummyvariabelen'],
     'Een variabele met waarde 0 of 1 die een categorie aanduidt. Haar coëfficiënt vergelijkt die categorie met de referentiegroep, bij gelijke andere kenmerken.',
     'Leidinggevende = 1 voor ja en 0 voor nee. Een coëfficiënt van 500 betekent: volgens het model 500 eenheden meer dan niet-leidinggevenden met dezelfde andere kenmerken.', 'meervoudig')
_add('referentiegroep', 'Referentiegroep', ['referentiecategorie', 'referentiegroepen'],
     'De categorie waarmee je de opgenomen dummycategorieën vergelijkt. Bij drie exclusieve categorieën en een constante gebruik je doorgaans twee dummy’s; beide nul duidt de referentiegroep aan.',
     'Opleiding is MBO, HBO of WO. Met dummy’s voor HBO en WO is MBO de referentiegroep: daar zijn beide dummy’s 0.', 'meervoudig')
_add('adjusted-r2', 'Adjusted R²', ['Adjusted R Square', 'adjusted R2', 'gecorrigeerde R²', 'gecorrigeerde determinatiecoëfficiënt'],
     '$R²$ gecorrigeerd voor het aantal verklarende variabelen en de beschikbare waarnemingen. Deze maat kan dalen als een extra variabele onvoldoende toevoegt.',
     'Na toevoegen van $x_2$ stijgt $R²$ van 0,70 naar 0,71, maar adjusted $R²$ daalt van 0,68 naar 0,67. De extra verbetering is dan te klein.', 'meervoudig')
_add('overfitting', 'Overfitting', ['overfit', 'overfitted'],
     'Een model past zich ook aan toevalligheden in de trainingsgegevens aan en werkt daardoor op nieuwe gegevens minder goed. De vuistregel $n ≥ 10k$ vervangt geen validatie.',
     'Een model met veel variabelen voorspelt de trainingsgegevens goed, maar maakt grote fouten op een ongebruikte testset.', 'meervoudig')
_add('transformatie', 'Transformatie', ['transformaties', 'transformeren', 'getransformeerd', 'getransformeerde'],
     'Een variabele met een wiskundige bewerking op een andere schaal zetten, bijvoorbeeld $ln(x)$. Hierdoor kan een krom verband beter bij een lineair geschatte vorm passen.',
     'Je gebruikt $ln(x)$ als verklarende variabele in plaats van $x$ zelf.', 'transformaties')
_add('logaritme', 'Natuurlijke logaritme', ['logaritme', 'logaritmen', 'natuurlijke logaritmen', 'ln-functie'],
     '$ln(x)$ vraagt tot welke macht je $e$ moet verheffen om $x$ te krijgen. Het bestaat alleen voor $x > 0$.',
     '$ln(1)$ = 0, want $e^0$ = 1.', 'transformaties')
_add('exp', 'Exponentiële functie', ['exp', 'exp-functie', 'exponentiëren'],
     'De bewerking $exp(z) = e^z$, die ln omkeert. Hiermee zet je een voorspelling op logschaal terug naar de oorspronkelijke schaal, volgens de gebruikte modelvorm.',
     '$exp(ln(16))$ = 16. Een voorspelde logwaarde van 2 wordt $exp(2)$ ≈ 7,39.', 'transformaties')
_add('logaritmisch-model', 'Logaritmisch model', ['logaritmische functie', 'logaritmisch'],
     'Een model met $ln(x)$ als verklarende grootheid en $y$ op de oorspronkelijke schaal: $ŷ = b_0 + b_1 ln(x)$.',
     'Bij $b_1$ = 2 gaat de voorspelde $y$ bij een verdubbeling van $x$ omhoog met 2 × $ln(2)$ ≈ 1,39.', 'transformaties')
_add('exponentieel-model', 'Exponentieel model', ['exponentiële regressie', 'exponentieel'],
     'Een model met $ln(y)$ lineair in $x$: $ln(ŷ) = b_0 + b_1 x$. Na terugtransformatie is de vorm $ŷ = exp(b_0 + b_1 x)$.',
     'Bij $b_1$ = 0,1 wordt de voorspelde $y$ per extra $x$ vermenigvuldigd met $exp(0,1)$ ≈ 1,105.', 'transformaties')
_add('machtsmodel', 'Machtsmodel', ['machtsfunctie', 'machtsfuncties', 'Power', 'power-model'],
     'Een model dat lineair wordt geschreven met $ln(y)$ en $ln(x)$: $ln(ŷ) = b_0 + b_1 ln(x)$. Op de oorspronkelijke schaal is de vorm $ŷ = exp(b_0) × x^{b_1}$.',
     'Bij $b_1$ = 0,5 wordt de voorspelde $y$ bij een verdubbeling van $x$ vermenigvuldigd met $2^{0,5}$ = $√2$ ≈ 1,41.', 'transformaties')
_add('terugtransformatie', 'Terugtransformatie', ['terugtransformeren', 'teruggetransformeerd'],
     'De voorspelde uitkomst terugzetten naar de oorspronkelijke schaal, volgens de gekozen modelvorm. Is $y$ gelogaritmeerd, dan is de lineaire uitkomst nog geen voorspelling in de oorspronkelijke eenheid.',
     'De vergelijking geeft $ln(ŷ)$ = 2. In de oorspronkelijke eenheid is de voorspelling $exp(2)$ ≈ 7,39.', 'transformaties')

# Modelbouw, validatie en SPSS-naslag.
_add('enter', 'Enter-methode', ['Enter'],
     'Een modelbouwmethode waarbij alle opgegeven verklarende variabelen tegelijk in het model gaan.',
     'Je neemt leeftijd, beoordeling en leidinggeven in één keer op.', 'modelbouw')
_add('backward', 'Backward elimination', ['Backward', 'backward-methode'],
     'Begint met alle kandidaatvariabelen en verwijdert stap voor stap een variabele die onvoldoende bijdraagt. Na elke verwijdering schat je opnieuw.',
     'Drie variabelen hebben $p$ = 0,02, 0,04 en 0,30. Bij verwijderingsgrens 0,10 gaat de variabele met 0,30 er als eerste uit. Daarna schat je opnieuw.', 'modelbouw')
_add('forward', 'Forward selection', ['Forward', 'forward-methode'],
     'Begint klein en voegt stap voor stap verklarende variabelen toe volgens het selectiecriterium.',
     'Na een eerste variabele onderzoekt de procedure welke volgende variabele nog voldoende toevoegt.', 'modelbouw')
_add('stepwise', 'Stepwise', ['stepwise-methode', 'stapsgewijze selectie'],
     'Een selectiemethode die variabelen toevoegt en daarbij ook opnieuw controleert of eerder opgenomen variabelen moeten vervallen.',
     'Na toevoeging van $x_3$ draagt $x_1$ onvoldoende bij en wordt alsnog verwijderd.', 'modelbouw')
_add('multicollineariteit', 'Multicollineariteit', ['multicollineair', 'multicollineaire'],
     'Verklarende variabelen hangen onderling sterk samen, waardoor hun afzonderlijke bijdragen moeilijk te onderscheiden zijn. Het gaat om samenhang tussen de $x$-variabelen, niet tussen $x$ en $y$.',
     'Twee $x$-variabelen meten bijna hetzelfde kenmerk. Hun afzonderlijke coëfficiënten worden dan moeilijk te interpreteren.', 'modelbouw')
_add('hulpregressie', 'Hulpregressie', ['hulpregressies', 'hulp-R²', 'hulpregressie R²'],
     'Bij VIF: een regressie van één verklarende variabele op de overige verklarende variabelen. De $R²$ daarvan meet hoeveel die variabele overlapt met de andere $x$-variabelen.',
     'Voor de VIF van $x_1$ voorspel je $x_1$ met de overige $x$-variabelen, dus niet met de oorspronkelijke $y$.', 'modelbouw')
_add('tolerance', 'Tolerance', ['tolerantie'],
     'Bij een verklarende variabele: $1 − R²$ van haar hulpregressie. Een lage tolerance betekent veel overlap met de overige verklarende variabelen.',
     'Hulp-$R²$ = 0,92 geeft tolerance = 1 − 0,92 = 0,08.', 'modelbouw')
_add('vif', 'Variance Inflation Factor', ['VIF', 'variance-inflatiefactor'],
     'De maat $VIF_i = 1/Tolerance_i = 1/(1 − R_i²)$ op basis van de hulpregressie. De cursus gebruikt VIF > 10 als probleemsignaal voor multicollineariteit.',
     'Tolerance 0,08 geeft VIF = 1 / 0,08 = 12,5, dus boven de grens. VIF precies 10 overschrijdt de strikte grens niet.', 'modelbouw')
_add('geneste-modellen', 'Geneste modellen', ['genest model', 'geneste regressiemodellen'],
     'Modellen waarbij het uitgebreide model alle verklarende variabelen van het kleinere model bevat, plus extra variabelen. Vergelijk ze op dezelfde $y$ en dezelfde waarnemingen.',
     'Een model met $x_1$ en $x_2$ is genest in een model met $x_1$, $x_2$ en $x_3$ op dezelfde dataset.', 'modelbouw')
_add('partiele-f', 'Partiële F-toets', ['partiële F', 'extra bijdrage', 'toets van extra variabelen'],
     'Een $F$-toets die kijkt of extra variabelen in geneste modellen genoeg verbetering geven. Deel de extra SSR door het aantal toegevoegde variabelen en vervolgens door MSE van het uitgebreide model.',
     'SSR stijgt met één extra variabele van 800 naar 850 en MSE van het uitgebreide model is 10. Dan is $F$ = (850 − 800) / 10 = 5. Vergelijk dat met de passende grens.', 'modelbouw')
_add('validatie', 'Validatie', ['valideren', 'modelvalidatie'],
     'Onderzoeken hoe bruikbaar het geschatte model is op gegevens die niet voor schatting en selectie zijn gebruikt.',
     'Je schat het model op de trainingsset en vergelijkt de vaste voorspellingen met de werkelijke uitkomsten in de testset.', 'validatie')
_add('data-splitting', 'Data splitting', ['datasplitsing', 'data-splitting'],
     'De gegevens opsplitsen in een trainingsset en een testset. Zo beoordeel je het model niet op dezelfde gegevens als waarmee je het hebt gekozen.',
     'Van 100 waarnemingen gebruik je er 70 voor schatting en selectie. De overige 30 blijven daarbuiten en gebruik je pas voor de beoordeling.', 'validatie')
_add('trainingsset', 'Trainingsset', ['trainingsdata', 'trainingsgegevens', 'training set', 'trainings-set'],
     'De gegevens waarmee je het model schat en selecteert. Een goede passing op deze gegevens is nog geen bewijs voor goede voorspellingen op nieuwe gevallen.',
     'De coëfficiënten worden berekend uit de training en daarna vastgehouden voor de test.', 'validatie')
_add('testset', 'Testset', ['testdata', 'testgegevens', 'test set', 'test-set'],
     'Gegevens die buiten de schatting en modelselectie zijn gehouden. Hiermee beoordeel je de voorspelfouten van het vaste model.',
     'Verandert een werkelijke testuitkomst, dan verandert de testfout, maar niet de al geschatte coëfficiënten.', 'validatie')
_add('mspr', 'MSPR', ['MSPE', 'MSRP', 'MPSR', 'Mean Squared Prediction Error', 'gemiddelde gekwadrateerde voorspelfout'],
     'De gemiddelde gekwadrateerde voorspelfout op de testset: $MSPR = {Σ(y_i − ŷ_i)²}/n_test$. Deel hier niet door de residuele vrijheidsgraden van de training. De aangeleverde bronnen gebruiken ook de lettervolgorden MSRP en MPSR voor deze formule.',
     'Testfouten −2, 1 en 3 geven MSPR = (4 + 1 + 9) / 3 = 14 / 3 = 4,6667.', 'validatie')
_add('generalisatie', 'Generalisatie', ['generaliseren', 'generaliseerbaarheid'],
     'De mate waarin het op trainingsgegevens gevonden model ook bruikbaar is op nieuwe gegevens.',
     'Een veel grotere MSPR dan trainings-MSE wijst op minder goede voorspellingen buiten de training.', 'validatie')
_add('spss', 'SPSS', ['SPSS-uitvoer', 'SPSS-output'],
     'Het statistische programma waarvan je de tabellen en grafieken in de SRA-opgaven leest. Lees niet alleen de getallen, maar ook de tabelnamen en voetnoten.',
     'Coefficients geeft de coëfficiënten; ANOVA geeft de kwadratensommen en de globale $F$-toets.', 'validatie',
     [('spss', 5, 'SPSS gebruiken voor de regressieopgave'), ('attentie', 3, 'Lezen en interpreteren van regressie-uitvoer')])
_add('correlations', 'Correlations', ['correlatietabel', 'correlatiematrix'],
     'De SPSS-tabel met correlaties tussen variabelen. Gebruik haar voor richting en lineaire samenhang, niet als regressievergelijking.',
     'Correlations toont $r$ = −0,8. Het minteken geeft de richting die de niet-negatieve R in Model Summary niet laat zien.', 'validatie',
     [('spss', 16, 'Correlations bij leeftijd en bloeddruk'), ('attentie', 3, 'Correlatie en regressie')])
_add('model-summary', 'Model Summary', ['modeloverzicht'],
     'De SPSS-tabel met onder meer R, $R²$, adjusted $R²$ en Std. Error of the Estimate. Soms staat hier ook Durbin-Watson.',
     'Lees $R²$ af voor de verklaarde variatie en gebruik het teken van B of $r$ voor de richting.', 'validatie',
     [('spss', 9, 'Model Summary bij bouwjaar en gewicht'), ('attentie', 4, 'Beoordeling van de regressie')])
_add('coefficients', 'Coefficients', ['coëfficiëntentabel', 'coefficiententabel'],
     'De SPSS-tabel met onder meer B, Std. Error, $t$, Sig. en eventueel Beta, tolerance en VIF. Kolom B levert de gewone regressievergelijking.',
     'Bij B = 6 en Std. Error = 2 controleer je $t$ = 6 / 2 = 3.', 'validatie',
     [('spss', 9, 'Coefficients bij bouwjaar en gewicht'), ('attentie', 3, 'De regressievergelijking aflezen')])
_add('residuals-statistics', 'Residuals Statistics', ['residuentabel', 'residuenstatistieken'],
     'De SPSS-tabel met samenvattingen van voorspelde waarden, residuen en eventueel afstandsmaten. Voor diagnostiek lees je onder meer minimum, maximum, gemiddelde en standaardafwijking.',
     'Vergelijk de grootste Cook’s Distance met gemiddelde plus drie standaardafwijkingen uit dezelfde rij.', 'validatie',
     [('spss', 16, 'Residuals Statistics bij uitbijters en invloedrijke punten'), ('attentie', 5, 'Diagnostiek')])
_add('tests-normality', 'Tests of Normality', ['normaliteitstoetsen'],
     'De SPSS-tabel met normaliteitstoetsen zoals Shapiro-Wilk en Kolmogorov-Smirnov. Controleer dat de getoetste variabele de juiste residuen bevat.',
     'Lees de $p$-waarde bij de toets die volgens de cursus past bij het aantal waarnemingen.', 'validatie',
     [('spss', 19, 'Tests of Normality voor Standardized Residual')])

# De volledige antwoordroute.
_add('toepassingsvoorwaarde', 'Toepassingsvoorwaarde', ['toepassingsvoorwaarden'],
     'Een eis die je controleert voordat je een methode gebruikt. Dat je een formule kunt uitrekenen, betekent nog niet dat de methode inhoudelijk past.',
     'Bij de verschilschatter controleer je het foutpatroon en de voorwaarde van minstens 30 afwijkende posten.', 'tentamen')
_add('interpretatie', 'Interpretatie', ['interpreteren'],
     'De uitkomst in woorden verbinden met de variabelen, eenheden en vraag van de casus. Benoem wat de berekening ondersteunt en wat daar niet uit volgt.',
     'Schrijf bij $R²$ = 0,70 dat het model 70% van de variatie in salaris verklaart, niet alleen het getal.', 'tentamen')
_add('remedie', 'Remedie', ['remedies', 'modelaanpassing'],
     'Een inhoudelijk passende reactie op een vastgesteld modelprobleem, gevolgd door opnieuw schatten en controleren waar nodig.',
     'Bij een duidelijke kromming onderzoek je een passende modelvorm in plaats van willekeurig punten weg te laten.', 'tentamen')

# Aanvullende woorden die in formules, grafiekbijschriften en rekenstappen staan.
_add('schatting', 'Schatting', ['schattingen', 'schatten', 'geschatte waarde'],
     'Het getal waarmee je een onbekende populatiewaarde benadert. Omdat je maar een deel van de populatie onderzoekt, is het een onderbouwde benadering en geen vaststaand feit. De schatter is de rekenregel; de schatting is het getal dat daaruit komt.',
     'Je wilt de totale werkelijke waarde van 1.000 voorraadartikelen weten. In een steekproef van 100 artikelen is het gemiddelde € 80. De regel $N × w̄$ geeft 1.000 × € 80 = € 80.000. Die € 80.000 is de schatting van het totaal.', 'beginnen')
_add('populatietotaal', 'Populatietotaal', ['populatietotalen', 'totale populatiewaarde'],
     'De som van de waarden van alle elementen in de populatie. Bij SRA-geldbedragschattingen is dat het werkelijke totaal $W$: de onbekende waarde die je wilt schatten.',
     'Drie artikelen zijn € 10, € 20 en € 30 waard. Het populatietotaal is 10 + 20 + 30 = € 60.', 'beginnen')
_add('toets', 'Statistische toets', ['statistische toetsen', 'toets', 'toetsen', 'toetsing'],
     'Een procedure waarmee je beoordeelt of de steekproef voldoende bewijs tegen een nulhypothese geeft, met een vooraf gekozen risicogrens en toetsrichting.',
     'Je toetst of de populatiehelling positief is, in plaats van alleen te kijken of de getekende lijn stijgt.', 'toetsen')
_add('lineair-verband', 'Lineair verband', ['lineaire samenhang', 'lineair', 'lineaire', 'lineaire verbanden'],
     'Een verband dat je met een rechte lijn beschrijft. Bij één extra eenheid $x$ hoort steeds dezelfde verandering in de voorspelde $y$.',
     'Bij $ŷ = 10 + 2x$ is de voorspelling 12, 14 en 16 bij $x$ = 1, 2 en 3: steeds 2 erbij.', 'regressielijn')
_add('symmetrie', 'Symmetrie', ['symmetrisch', 'symmetrische'],
     'Een vorm waarvan de linker- en rechterkant elkaars spiegelbeeld zijn. Bij een symmetrisch interval liggen beide grenzen even ver van het midden.',
     'De grenzen 96 en 104 liggen allebei 4 van het midden 100.', 'onzekerheid')
_add('homogene-groep', 'Homogene groep', ['homogene groepen', 'homogeen', 'homogene'],
     'Een groep waarvan de waarden weinig uiteenlopen. Bij stratificatie probeer je zulke groepen te maken, omdat je dan binnen een groep minder spreiding hebt.',
     'Artikelen uit dezelfde prijsklasse lijken meer op elkaar dan een gemengde voorraad. Zo’n prijsklasse vormt daardoor een homogenere groep.', 'stratificatie')
_add('foutpercentage', 'Foutpercentage', ['foutpercentages'],
     'De fout als deel van een gekozen basis. Bij de quotiëntschatter is $1 − q$ de foutfractie ten opzichte van de totale boekwaarde in de steekproef.',
     'Bij $q$ = 0,95 is de foutfractie 1 − 0,95 = 0,05, oftewel 5% van de boekwaarde.', 'quotient')
_add('resterende-ratiospreiding', 'Resterende spreiding bij de quotiëntschatter', ['resterende spreiding', 's_q'],
     'De tussenmaat $s_q$ uit formule 13: wat na de geschatte verhouding aan spreiding overblijft. Ondanks de aanduiding in het formuleblad heeft deze uitkomst de geldeenheid van $b$ en $w$. Zij is niet de standaardfout van het populatietotaal.',
     '$s_q$ = € 7,60 is nog geen eindantwoord. Je rekent door met $N/√n$ en de eindigheidscorrectie naar de standaardfout van het totaal.', 'quotient')
_add('effectieve-vrijheidsgraden', 'Effectieve vrijheidsgraden', ['effectieve df'],
     'De vrijheidsgraden die bij het samengestelde interval van strata horen. Volgens het SRA-formuleblad worden ze in de opgave gegeven; neem niet automatisch het totale $n − 1$.',
     'De opgave geeft effectieve df = 109. Dan kies je de rij in de $t$-tabel volgens de bijbehorende regel.', 'stratificatie')
_add('kromming', 'Kromming', ['krom verband', 'kromme verbanden', 'boogvorm'],
     'Een verandering van richting of helling, waardoor één rechte lijn het patroon niet goed beschrijft. Kromming in residuen kan wijzen op een ongeschikte lineaire modelvorm.',
     'Negatieve residuen in het midden en positieve aan beide randen vormen een boog.', 'diagnostiek')
_add('dw-grenzen', 'Durbin-Watson-tabelgrenzen', ['dL', 'dU', 'Durbin-Watson-grenzen'],
     'De twee tabelgrenzen $d_L$ en $d_U$ waarmee je de Durbin-Watson-uitkomst beoordeelt. Ze horen bij de steekproefomvang $n$ en het aantal verklarende variabelen $k$.',
     'Bij $d_L$ = 1,35 en $d_U$ = 1,49 is $d$ = 1,40 onbeslist, omdat 1,40 tussen deze grenzen ligt.', 'diagnostiek')
_add('realisatie', 'Realisatie', ['realisaties', 'gerealiseerde waarde', 'gerealiseerde uitkomst'],
     'De werkelijk waargenomen nieuwe uitkomst die je met een voorspelling kunt vergelijken. Buiten een voorspellingsinterval vallen is een signaal voor onderzoek, geen automatische verklaring.',
     'De voorspelling is 30, maar de later gemeten uitkomst is 35. Die 35 is de realisatie.', 'voorspellen')
_add('model-r', 'Model-R', ['Model Summary R', 'modelcorrelatie'],
     'De niet-negatieve R uit SPSS Model Summary. Gebruik het teken van de coëfficiënt B of de correlatie $r$ uit Correlations om de richting van het verband te bepalen.',
     'Een dalend enkelvoudig verband kan $r$ = −0,8 hebben terwijl Model Summary R = 0,8 toont.', 'regressielijn')
_add('model-fit', 'Model fit', ['fitmaat', 'fitmaten', 'passing', 'modelpassing'],
     'Hoe goed het model de gebruikte gegevens beschrijft. $R²$ en adjusted $R²$ geven aspecten daarvan weer. Goede passing vervangt geen diagnose of validatie.',
     'Een hoge $R²$ op de training kan samengaan met een hoge MSPR op nieuwe gegevens.', 'anova')
_add('kandidaatvariabele', 'Kandidaatvariabele', ['kandidaatvariabelen', 'kandidaten'],
     'Een verklarende variabele die je bij modelselectie overweegt, maar die niet per se in het uiteindelijke model blijft.',
     'Backward begint met alle kandidaten en kan een variabele met te hoge $p$ verwijderen.', 'modelbouw')
_add('verwijderingsgrens', 'Verwijderingsgrens', ['selectiegrens', 'selectiecriterium', 'selectiecriteria'],
     'Het opgegeven criterium waarmee een selectieprocedure beslist of een variabele voldoende bijdraagt. Gebruik de grens uit de opgave en halveer een tweezijdige $p$ niet automatisch.',
     'Bij een gegeven verwijderingsgrens van 0,10 is een $p$ van 0,18 een kandidaat voor verwijderen, want 0,18 is groter dan 0,10.', 'modelbouw')
_add('voetnoot', 'Tabelvoetnoot', ['tabelvoetnoten', 'voetnoot', 'voetnoten'],
     'Toelichting onder een tabel met informatie die de interpretatie bepaalt, zoals de afhankelijke variabele, de opgenomen verklarende variabelen, de selectieprocedure of de weging.',
     'Controleer in de voetnoot of $y$ het salaris of $ln$(salaris) is voordat je de coëfficiënten gebruikt.', 'validatie')
_add('anova-rijen', 'Regression, Residual en Total', ['Regression', 'Residual', 'Total'],
     'De drie rijen van de SRA-ANOVA-tabel. Regression is de door het model verklaarde variatie, Residual de resterende variatie en Total de totale variatie in $y$.',
     'De kolom Sum of Squares toont bijvoorbeeld 80, 20 en 100: verklaard plus resterend is totaal.', 'anova')
_add('onafhankelijke-strata', 'Onafhankelijke strata', ['onafhankelijke schattingen'],
     'Als je per stratum een aparte, onafhankelijke steekproef trekt, hangen de toevallige afwijkingen van de schattingen niet samen. Daarom tel je voor het totaal de varianties op en neem je daarna de wortel.',
     'Standaardfouten 3 en 4 geven samen $√(3² + 4²)$ = $√25$ = 5, niet 3 + 4 = 7.', 'stratificatie')
_add('interval', 'Interval', ['intervallen'],
     'Een bereik tussen een onder- en bovengrens. Wat dat bereik zegt, hangt af van het soort interval: bijvoorbeeld een schatting van een populatiewaarde of een voorspelling van een nieuwe waarneming.',
     '[96; 104] loopt van 96 tot 104. Lees in de vraag of dit een interval is voor een totaal, een gemiddelde of een nieuwe uitkomst.', 'onzekerheid')
_add('voorspelling', 'Voorspelling', ['voorspellingen', 'voorspellen'],
     'Een met het geschatte model berekende uitkomst bij gekozen verklarende waarden. Een puntvoorspelling geeft één getal; een passend interval beschrijft de onzekerheid eromheen.',
     'Vul $x$ = 4 in bij $ŷ = 10 + 2x$: de voorspelling is 10 + 2 × 4 = 18. De werkelijke nieuwe uitkomst kan daarvan afwijken.', 'voorspellen')
_add('nauwkeurigheid', 'Nauwkeurigheid', ['precisie', 'preciezer', 'nauwkeuriger'],
     'In de SRA-intervalberekeningen: hoe klein de marge $E$ is. Een smaller interval is preciezer. Betrouwbaarheid is iets anders: dat gaat over hoe vaak de intervalmethode de werkelijke waarde bevat.',
     'Twee intervallen hebben allebei 95% betrouwbaarheid. Het interval met marge € 1.000 is preciezer dan dat met marge € 2.000.', 'onzekerheid')
_add('referentieverdeling', 'Referentieverdeling', ['referentieverdelingen', 'normaalreferentie'],
     'De theoretische verdeling waarmee je de waargenomen vorm vergelijkt. In het Q-Q-lab is dat een normaalreferentie. De vergelijking is een grafische aanwijzing en berekent geen $p$-waarde.',
     'De horizontale coördinaten in het Q-Q-lab komen uit de normaalreferentie, de verticale uit de geordende demo-residuen.', 'diagnostiek',
     [('spss', 19, 'Normaliteitsanalyse; aanvullende uitleg bij de didactische Q-Q-grafiek in het SRA-lab')])
_add('scheefheid', 'Scheefheid', ['scheef', 'scheve', 'schevere'],
     'Een asymmetrische verdelingsvorm: de waarden lopen aan de ene kant anders uit dan aan de andere kant. In het normaliteitslab kun je dit vergelijken met de symmetrische normaalreferentie.',
     'Enkele grote positieve residuen kunnen de rechterkant verder laten uitlopen dan de linkerkant.', 'diagnostiek',
     [('spss', 19, 'Residuenhistogram bij de normaliteitsanalyse; vormillustratie in het SRA-lab')])


# Samengestelde begrippen: de combinatie heeft een eigen betekenis en krijgt daarom een eigen uitleg.
_BOOK_PARTS = {'boek-basis': (92, 99, 110), 'boek-h8a': (201, 210, 219), 'boek-h8b': (211, 220, 229), 'boek-h8c': (221, 232, 239),
               'boek-h9a': (233, 248, 251), 'boek-h9b': (249, 259, 267), 'boek-h9c': (260, 272, 278), 'boek-h9d': (273, 286, 291)}


def _book(printed, subject):
    """Verwijs naar de bronuitsnede die de gedrukte boekpagina bevat."""
    for source, (first, last, pdf) in _BOOK_PARTS.items():
        if first <= printed <= last:
            return [(source, printed + 18 - pdf + 1, f'Boek p. {printed}: {subject}')]
    raise ValueError(f'Geen bronuitsnede voor boekpagina {printed}')


_add('totale-boekwaarde', 'Totale boekwaarde', ['boekwaardetotaal', 'boektotaal', 'bekende boekwaardetotaal', 'bekend boekwaardetotaal'],
     'De som van de boekwaarden van alle posten in de populatie, geschreven als $B$. Dit bedrag staat al in de administratie; je hoeft het dus niet te schatten.',
     'Een voorraad van 3.500 artikelen heeft in het boek een totale boekwaarde van € 7.360.817.', 'verschil', _book(209, 'B als totale boekwaarde'))
_SOMMEN = [('formules', 1, 'Formule 14: sommen voor s_q')]
_add('som-gekwadrateerde-fouten', 'Som van de gekwadrateerde fouten', ['Σe²'],
     'Kwadrateer per post de fout $e = b − w$ en tel de uitkomsten op. Bij regressie staat $e$ voor het residu, maar de rekenstap is hetzelfde.',
     'Fouten 1, −2 en 3 geven $Σe²$ = 1 + 4 + 9 = 14.', 'quotient', _SOMMEN)
_add('som-boekwaarde-maal-fout', 'Som van boekwaarde maal fout', ['Σbe'],
     'Vermenigvuldig per post de boekwaarde $b$ met de fout $e$ en tel de uitkomsten op. Deze som laat zien of grote posten ook grote fouten hebben.',
     'Een post met $b$ = 100 en $e$ = 10 en een post met $b$ = 200 en $e$ = 20 geven $Σbe$ = 1.000 + 4.000 = 5.000.', 'quotient', _SOMMEN)
_add('som-gekwadrateerde-boekwaarden', 'Som van de gekwadrateerde boekwaarden', ['Σb²'],
     'Kwadrateer per post de boekwaarde $b$ en tel de uitkomsten op. Dit is iets anders dan eerst optellen en daarna kwadrateren.',
     'Boekwaarden 100 en 200 geven $Σb²$ = 10.000 + 40.000 = 50.000. Eerst optellen zou 300² = 90.000 geven.', 'quotient', _SOMMEN)
_add('gemiddelde-boekwaarde', 'Gemiddelde boekwaarde', ['gemiddelde boekwaarden'],
     'Het gemiddelde van de boekwaarden in de steekproef, geschreven als $b̄ = {Σb}/n$.',
     'Boekwaarden van 100, 200 en 300 geven een gemiddelde boekwaarde van 600 / 3 = 200.', 'regressieschatter', _book(214, 'gemiddelde boekwaarde in de steekproef'))
_add('gemiddelde-werkelijke-waarde', 'Gemiddelde werkelijke waarde', ['gemiddelde werkelijke waarden'],
     'Het gemiddelde van de gecontroleerde werkelijke waarden in de steekproef, geschreven als $w̄ = {Σw}/n$.',
     'Werkelijke waarden van 90, 200 en 310 geven een gemiddelde werkelijke waarde van 600 / 3 = 200.', 'mpu', _book(205, 'gemiddelde werkelijke waarde'))
_add('totale-werkelijke-waarde', 'Totale werkelijke waarde', ['werkelijk populatietotaal', 'werkelijke populatietotaal'],
     'De som van de juiste waarden van alle posten in de populatie, geschreven als $W$. Dit bedrag is onbekend; daarom schat je het uit de steekproef.',
     'In het boek is het werkelijke populatietotaal alleen bekend omdat het om een oefenbestand gaat. In een echte controle ken je $W$ niet.', 'mpu', _book(205, 'totale werkelijke waarde als populatietotaal'))
_add('geschatte-werkelijke-waarde', 'Geschatte werkelijke waarde', ['geschatte totale werkelijke waarde', 'geschat totaal', 'geschatte totaal'],
     'De puntschatting van de totale werkelijke waarde, geschreven als $Ŵ$. Het dakje laat zien dat dit een schatting is en niet de echte $W$.',
     'Bij $N$ = 1.000 en $w̄$ = 95 geeft de directe schatter $Ŵ$ = 1.000 × 95 = € 95.000.', 'mpu', _book(205, 'schatting van de totale werkelijke waarde'))
_add('gemiddelde-fout', 'Gemiddeld verschil', ['gemiddelde verschil', 'gemiddelde fout', 'gemiddelde boekwaardefout', 'gemiddelde fouten'],
     'Het gemiddelde van de verschillen tussen boekwaarde en werkelijke waarde in de steekproef: $ē = {Σe}/n$, wat gelijk is aan $b̄ − w̄$. Het boek noemt dit de gemiddelde fout.',
     'In het boek is de gemiddelde fout € 66,66 per artikel. Bij $N$ = 3.500 is de geschatte totale fout dus 3.500 × 66,66 = € 233.310.', 'verschil', _book(209, 'gemiddelde fout'))
_add('geschatte-totale-fout', 'Geschatte totale fout', ['totale fout'],
     'Het gemiddelde verschil doorgerekend naar de hele populatie: $Ê = N × ē$. De verschilschatter trekt dit bedrag af van de totale boekwaarde.',
     '€ 7.360.817 − € 233.310 = € 7.127.507 is de schatting van het werkelijke populatietotaal in het boek.', 'verschil', _book(209, 'geschatte totale fout'))
_add('variantie-verschillen', 'Variantie van de verschillen', ['variantie verschillen', 'variantie van de fout', 'variantie van de fouten'],
     'De steekproefvariantie van de verschillen $e$, geschreven als $s²_e$. Zij meet hoe sterk de fouten per post uiteenlopen, niet hoe groot de fout gemiddeld is.',
     'De verschillen 1, 2 en 3 hebben $ē$ = 2 en een variantie van (1 + 0 + 1) / 2 = 1.', 'verschil', _book(209, 'spreiding van de fout'))
_add('standaardafwijking-verschillen', 'Standaardafwijking van de verschillen', ['standaardafwijking van de fout', 'standaardafwijking van de fouten', 'spreiding van de verschillen', 'spreiding van de fouten', 'spreiding in de fout'],
     'De wortel uit de variantie van de verschillen, geschreven als $s_e$. De verschilschatter werkt het best als deze spreiding klein is, dus als fouten ongeveer even groot zijn, ongeacht de boekwaarde.',
     'Een variantie van de verschillen van 16 geeft $s_e$ = $√16$ = 4.', 'verschil', _book(210, 'kleine spreiding in de fout'))
_add('gewenste-nauwkeurigheid', 'Gewenste nauwkeurigheid', ['vereiste nauwkeurigheid', 'gewenste marge', 'vereiste marge', 'nauwkeurigheidseis'],
     'De grootste marge $E$ die je vooraf accepteert. Samen met de betrouwbaarheid en de spreiding bepaalt zij hoe groot de steekproef moet zijn.',
     'Wil je het totaal tot op € 500.000 kennen, dan is $E$ = € 500.000 de gewenste nauwkeurigheid.', 'steekproefomvang', _book(210, 'nauwkeurigheidseis'))
_add('maximaal-toegestane-standaardfout', 'Maximaal toegestane standaardfout', ['maximale standaardfout', 'toegestane standaardfout'],
     'De grootste standaardfout waarbij je de gewenste marge nog haalt. Uit $E$ = $t$ × standaardfout volgt dat dit $E/t$ is. Dit is een rekenstap van de leeromgeving, geen vaste boekterm.',
     'Bij $E$ = € 500.000 en $t$ = 1,978 is de maximaal toegestane standaardfout 500.000 / 1,978 ≈ € 252.780.', 'steekproefomvang')
_add('benodigde-steekproefomvang', 'Benodigde steekproefomvang', ['benodigde steekproefgrootte', 'benodigde steekproef', 'vereiste steekproefomvang'],
     'Het aantal posten dat je minimaal moet controleren om bij de gekozen betrouwbaarheid de gewenste nauwkeurigheid te halen. Rond dit aantal naar boven af.',
     'Levert de formule 94,2 op, dan is de benodigde steekproefomvang 95 posten.', 'steekproefomvang', _book(210, 'benodigde steekproefgrootte'))
_add('cumulatieve-boekwaarde', 'Cumulatieve boekwaarde', ['cumulatieve boekwaarden'],
     'De opgetelde boekwaarde nadat je de posten van laag naar hoog hebt gesorteerd. Bij stratificatie op deze basis krijgt elk stratum ongeveer hetzelfde deel van de totale boekwaarde.',
     'Het boek verdeelt € 7.360.817 over 5 strata: ongeveer € 1.472.163 boekwaarde per stratum.', 'stratificatie', _book(221, 'stratificatie op basis van de cumulatieve boekwaarde'))
_add('gestratificeerde-schatter', 'Gestratificeerde schatter', ['gestratificeerde schatting', 'gestratificeerde schattingen'],
     'Een schatting die je per stratum maakt en daarna optelt tot één totaal. De onnauwkeurigheid volgt uit de opgetelde variantiebijdragen van de strata.',
     'Stratum 1 geeft € 40.000 en stratum 2 € 60.000; de gestratificeerde schatting is € 100.000.', 'stratificatie', _book(230, 'gestratificeerde schatter'))
_add('bemonsterde-strata', 'Bemonsterde strata', ['bemonsterd stratum', 'bemonsterde stratum'],
     'De strata waarin je een steekproef trekt, tegenover een topstratum dat je volledig controleert. Alleen bemonsterde strata dragen bij aan de steekproefonzekerheid.',
     'Vier bemonsterde strata hebben elk een standaardfout; een integraal gecontroleerd topstratum voegt alleen een bekend bedrag toe.', 'stratificatie')
_add('gecombineerde-standaardfout', 'Gecombineerde standaardfout', ['gezamenlijke standaardfout', 'gecombineerde standaardfouten'],
     'De standaardfout van het totaal over onafhankelijke strata, geschreven als $s_tot$. Je telt de varianties op en neemt daarna de wortel; je telt de standaardfouten dus niet zelf op.',
     'Standaardfouten 3 en 4 geven $√(3² + 4²)$ = $√25$ = 5, niet 7.', 'stratificatie')
_add('significant-verband', 'Significant verband', ['significant lineair verband', 'significante verband', 'significant lineaire verband'],
     'Een verband waarvan de toets laat zien dat het waarschijnlijk niet door toeval in de steekproef komt. Dit zegt niets over oorzaak en gevolg: een significant verband is nog geen causaal verband.',
     'Bij $p$ = 0,001 en $α$ = 0,05 verwerp je $H_0$: er is een significant lineair verband. Dat bewijst niet dat $x$ de oorzaak is van $y$.', 'toetsen', _book(246, 'significant verband en causaal verband'))
_add('gekwadrateerde-residuen', 'Gekwadrateerde residuen', ['gekwadrateerd residu'],
     'De residuen na kwadrateren: $e²$. Hun som is SSE. De kleinste-kwadratenmethode kiest de lijn waarbij deze som zo klein mogelijk is.',
     'De residuen 2 en −3 geven gekwadrateerde residuen 4 en 9, samen 13.', 'regressielijn', _book(240, 'kleinste-kwadratenmethode'))
_add('samengevoegde-groepen', 'Samengevoegde groepen', ['samengevoegde groep'],
     'Gegevens die in het spreidingsdiagram uiteenvallen in te onderscheiden subgroepen. Daardoor kun je een verband vinden dat er in werkelijkheid niet is, of juist een verband missen.',
     'Twee vestigingen met een verschillend niveau kunnen samen een schijnbaar stijgende lijn geven, terwijl er binnen elke vestiging geen verband is.', 'diagnostiek', _book(261, 'samengevoegde groepen'))
_add('positieve-autocorrelatie', 'Positieve autocorrelatie', [],
     'Opeenvolgende residuen lijken op elkaar: na een relatief hoge waarneming verwacht je weer een relatief hoge, na een lage weer een lage. De Durbin-Watson-waarde ligt dan onder 2.',
     'Maandcijfers die maanden achter elkaar boven de lijn liggen en daarna maanden eronder, wijzen op positieve autocorrelatie.', 'diagnostiek', _book(278, 'positieve autocorrelatie'))
_add('negatieve-autocorrelatie', 'Negatieve autocorrelatie', [],
     'Opeenvolgende residuen wisselen steeds van teken: na een relatief hoge waarneming volgt een relatief lage en andersom. De Durbin-Watson-waarde ligt dan boven 2.',
     'Residuen die elke maand om en om positief en negatief zijn, wijzen op negatieve autocorrelatie.', 'diagnostiek', _book(280, 'Durbin-Watson-waarde bij negatieve autocorrelatie'))
_add('individuele-storing', 'Individuele storing', ['individuele storingen'],
     'De afwijking van één nieuwe waarneming ten opzichte van de echte regressielijn. Deze zit wel in het voorspellingsinterval, maar niet in het interval voor de gemiddelde respons. Daarom is dat laatste smaller.',
     'Twee maanden met dezelfde x kunnen toch een andere y hebben. Dat verschil is de individuele storing.', 'voorspellen')
_add('aantal-verklarende-variabelen', 'Aantal verklarende variabelen', ['aantal x-variabelen'],
     'Het aantal x-variabelen in het model, geschreven als k. De constante telt niet mee. Je gebruikt k onder meer in de residuele vrijheidsgraden n − k − 1.',
     'Een model met omzet, activa en een dummy heeft k = 3.', 'meervoudig')
_add('centrale-limietstelling', 'Centrale limietstelling', [],
     'Hoe groter de steekproef, hoe meer de verdeling van het steekproefgemiddelde op een normale verdeling gaat lijken, ook als de losse waarden dat niet doen. Het boek hanteert n = 100 als grens.',
     'Bij n = 150 mag je het steekproefgemiddelde normaal verdeeld nemen, ook als de boekwaarden scheef zijn.', 'onzekerheid', _book(92, 'Centrale Limietstelling'))
_add('zonder-teruglegging', 'Zonder teruglegging', ['zonder terugleggen'],
     'Een getrokken post gaat niet terug in de populatie en kan dus niet nog eens worden getrokken. Daarom is de eindigheidscorrectie nodig als je een flink deel van de populatie controleert.',
     'Trek je 100 van de 1.000 posten zonder teruglegging, dan blijven na de eerste trekking 999 posten over.', 'mpu')


# Basisstof: bekende begrippen uit hoofdstuk Basis. Deze zijn in de hoofdstukken
# Schatten, Regressie en Verdieping niet meer klikbaar; alle andere blijven dat wel.
_BASIS_TERMS = {'populatie', 'populatieomvang', 'steekproef', 'selectiebias', 'waarneming',
                'boekwaarde', 'werkelijke-waarde', 'eenheid', 'gemiddelde'}
for _term in TERMS:
    _term['basis'] = _term['id'] in _BASIS_TERMS
