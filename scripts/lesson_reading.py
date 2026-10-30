"""Leesverband en voorbeeldcontext, uitsluitend uit de bestaande lesinhoud.

De volgorde is steeds: vertrekpunt, toepassing en conclusie. Bestaande
berekeningen, voorwaarden en bronverwijzingen blijven in hun eigen blok staan.
"""
import html
from presentation import inline_formulas

# Per les: inhoudelijk begin, vraag bij het bestaande voorbeeld, de kern en het vervolg.
READING = {
    'beginnen': (
        'Een accountant controleert vaak een deel van de posten en wil daarmee iets zeggen over het geheel. Voordat je kunt rekenen, moet duidelijk zijn wat één post is, wat je daarvan meet en over welke verzameling je een uitspraak wilt doen.',
        'Hoe schat je de totale voorraadwaarde wanneer je 100 van de 1.000 artikelen controleert? Het voorbeeld verbindt populatie en steekproef met een eerste totaalschatting.',
        'De controlevraag bepaalt dus de populatie, de steekproef en de te meten waarde.',
        'Een steekproef levert een schatting op; om de onzekerheid daarvan te begrijpen, heb je vervolgens gemiddelde en spreiding nodig.'),
    'rekenen': (
        'Na het afbakenen van de steekproef heb je een reeks gemeten waarden. Om die samen te vatten, bepaal je waar de waarden gemiddeld liggen en hoeveel ze onderling verschillen. Dat onderscheid is ook nodig om later de onzekerheid van een schatting te berekenen.',
        'Hoe bereken je gemiddelde, variantie en standaardafwijking van 80, 90, 110 en 120? We rekenen eerst de afwijkingen uit en brengen de spreiding daarna terug naar de oorspronkelijke eenheid.',
        'Het gemiddelde beschrijft het niveau; variantie en standaardafwijking beschrijven de spreiding van de waarden. De standaardfout gaat over de onzekerheid van een schatting.',
        'Met dat onderscheid kun je nu betrouwbaarheidsintervallen lezen en berekenen.'),
    'onzekerheid': (
        'Een steekproefschatting verandert als je andere posten trekt. Daarom hoort bij één geschatte waarde ook een uitspraak over de onzekerheid. We verbinden de standaardfout met een kritieke tabelwaarde en bouwen daarmee een interval op.',
        'Welk 95%-interval hoort bij een schatting van € 100.000, een standaardfout van € 2.000 en een gegeven kritieke waarde van 2,00? Daarna vergelijken we de marge bij een hogere kritieke waarde.',
        'Een interval ontstaat uit een schatting plus en min een marge. Die marge hangt af van de standaardfout en de gekozen betrouwbaarheid.',
        'De volgende lessen passen dit toe op verschillende manieren om een populatietotaal te schatten.'),
    'mpu': (
        'Je kent nu het verschil tussen een schatting en haar onzekerheid. De directe schatter gebruikt het gemiddelde van gecontroleerde werkelijke waarden om het totale bedrag te schatten. We volgen de route van steekproefgemiddelde naar totaalschatting en interval.',
        'Wat is de geschatte waarde van 1.000 artikelen als de 100 gecontroleerde artikelen gemiddeld € 80 waard zijn? Met de gegeven spreiding berekenen we ook een tweezijdig 95%-interval.',
        'Bij MPU reken je het steekproefgemiddelde door naar de populatie en bepaal je de onzekerheid van dat totaal. Als daarnaast bruikbare boekwaarden bekend zijn, kunnen andere schatters die informatie benutten.',
        'De verschilschatter doet dat via fouten per post.'),
    'verschil': (
        'Als de totale boekwaarde bekend is, hoef je niet altijd het werkelijke totaal rechtstreeks op te bouwen. Je kunt ook de totale boekwaarde corrigeren voor het geschatte verschil. Eerst moet duidelijk zijn hoe je een fout definieert en of het foutpatroon bij deze methode past.',
        'Hoe corrigeer je de boekwaarde in de Elektroconsum-casus voor de gevonden fouten? We bepalen het gemiddelde verschil, de totaalschatting en het 95%-interval, met de afronding uit de opgave.',
        'De verschilschatter corrigeert een bekend boektotaal met het geschatte totale verschil. Het teken van de fout en de spreiding van verschillen bepalen de berekening.',
        'Wanneer vooral een vast percentage herkenbaar is, komt de quotiëntschatter in beeld.'),
    'quotient': (
        'Bij de verschilschatter stond het verschil in euro’s centraal. Soms groeit de fout juist mee met de boekwaarde: grotere posten hebben dan ook grotere afwijkingen. We onderzoeken daarom eerst een vast percentage en gebruiken daarna de verhouding tussen werkelijke en geboekte waarden.',
        'Hoe schat je het werkelijke totaal wanneer de gecontroleerde waarden samen 95% van de boekwaarden zijn? Het voorbeeld berekent de totaalschatting en de resterende spreiding; voor een volledig interval zijn daarnaast N, n en de passende kritieke waarde nodig.',
        'De quotiëntschatter past één verhouding van sommen toe op de totale boekwaarde. De onzekerheid hangt af van de spreiding die na die verhouding overblijft.',
        'Is het verband wel lineair maar niet evenredig, dan biedt de regressieschatter een andere route.'),
    'regressieschatter': (
        'Boekwaarden en werkelijke waarden kunnen samenhangen zonder een vast verschil of percentage. De regressieschatter gebruikt die samenhang én het bekende boektotaal. Zo corrigeer je voor een steekproef die toevallig relatief hoge of lage boekwaarden bevat.',
        'Hoe gebruik je het bekende boektotaal uit de tentamencasus van 28 oktober 2024 om de schatting te corrigeren? We berekenen helling, totaalschatting en interval en benoemen het afrondingsverschil met de bronuitwerking.',
        'De regressieschatter benut het lineaire verband om een totaalschatting te corrigeren en de resterende onzekerheid te bepalen. De methodekeuze moet bij de gegevens passen.',
        'Blijft het interval te breed, dan is de vervolgvraag hoeveel extra controles nodig zijn.'),
    'steekproefomvang': (
        'Een berekend interval kan te breed zijn voor de controlevraag. Je werkt dan terug: vanuit de gewenste marge bepaal je hoeveel waarnemingen nodig zijn. Daarbij horen de spreiding van de gekozen schatter en het onderscheid tussen totale en aanvullende controles.',
        'Hoeveel controles zijn nodig om de totale intervalbreedte terug te brengen tot € 10.000? We gebruiken de regressieschatter uit de vorige casus en trekken de 180 reeds gecontroleerde posten van de benodigde omvang af.',
        'Reken een gevraagde intervalbreedte eerst om naar de halve breedte, de marge. Rond de benodigde totale steekproefomvang naar boven af en bepaal pas daarna de extra controles.',
        'Bij een verdeelde populatie moet ook de verdeling over strata worden gekozen.'),
    'stratificatie': (
        'Een populatie kan uit sterk verschillende groepen bestaan. Eén gezamenlijke steekproef benut die structuur niet altijd goed. Door eerst strata te vormen, kun je de controles verdelen, per groep schatten en de uitkomsten samenvoegen.',
        'Hoe combineer je vier bemonsterde strata met een volledig gecontroleerd topstratum? De tentamencasus laat eerst de allocatie zien en gebruikt daarna de werkelijk gegeven steekproefgroottes voor het totale interval.',
        'Bij stratificatie bepaal je eerst de groepen en de verdeling van controles. Daarna tel je de schattingen en varianties volgens de bijbehorende regels op; een volledig gecontroleerd topstratum blijft apart herkenbaar.',
        'Hiermee is de route van steekproef naar totaal compleet en verschuift de aandacht naar regressiemodellen.'),

    # Regressie en meervoudige regressie (lessen 10-19).
    'regressielijn': (
        'Bij schatten stond een populatietotaal centraal. Bij regressie onderzoek je hoe een uitkomst samenhangt met een of meer verklarende kenmerken. We beginnen met één verklarende variabele en bekijken zowel de voorspelde lijn als de afwijkingen daarvan.',
        'Welke kosten voorspelt de lijn bij een productie van 50 en wat betekent de afwijking van de werkelijke kosten? Dit voorbeeld maakt constante, helling en residu concreet.',
        'De regressielijn geeft een voorspelling; het residu beschrijft het verschil met de waarneming. De eenheden en de betekenis van de helling horen bij de uitleg van het model.',
        'Met ANOVA onderzoeken we vervolgens hoeveel variatie de lijn verklaart.'),
    'anova': (
        'Een regressielijn sluit meestal niet precies op alle waarnemingen aan. Om de kwaliteit van de aansluiting te beschrijven, splitsen we de totale variatie in een verklaard deel en een resterend deel. De ANOVA-tabel brengt die onderdelen bij elkaar.',
        'Wat vertelt de ANOVA-uitvoer over spronghoogte en beenkracht? Vanuit de gegeven kwadratensommen berekenen we vrijheidsgraden, gemiddelde kwadraten, F, de residuele standaardafwijking en R².',
        'De ANOVA-tabel verbindt verklaarde en onverklaarde variatie met vrijheidsgraden. Daaruit volgen onder meer R², MSE en F.',
        'Een goede aansluiting alleen is nog geen toetsbesluit: daarvoor formuleren we eerst een hypothese en kiezen we een passende grens.'),
    'toetsen': (
        'Een berekende helling of een hoge verklaarde variatie vertelt nog niet of de gegevens voldoende bewijs leveren voor de onderzoeksvraag. Een toets begint daarom met een uitspraak over de populatie. Daarna kies je de richting, toetsingsgrootheid en beslisgrens.',
        'Geven de gegevens uit de salariscasus voldoende bewijs voor een negatieve coëfficiënt bij de dummy Vrouw? We vertalen de vraag naar hypothesen, vergelijken t met de eenzijdige grens en formuleren de conclusie binnen het model.',
        'Een volledig toetsantwoord verbindt hypothesen, grenswaarde, berekening en een conclusie over de benoemde variabelen. Significant betekent niet automatisch bruikbaar of oorzakelijk.',
        'Daarom controleren we hierna ook de aannames en opvallende waarnemingen.'),
    'diagnostiek': (
        'Een regressietoets steunt op aannames over model en gegevens. Voordat je de uitkomst gebruikt, onderzoek je of die aannames voldoende passen en of enkele waarnemingen het resultaat sterk bepalen. Elke controle vraagt om een signaal, betekenis en passende vervolgstap.',
        'Welke signalen voor afwijkende waarnemingen of modelproblemen bevat de tentamenuitvoer van 28 oktober 2024? We vergelijken de gegeven waarden met de cursuscriteria en onderscheiden een signaal van bewijs.',
        'Diagnostiek leidt tot een onderbouwd oordeel over het gebruik van het model, niet alleen tot een lijst vinkjes. Een gesignaleerd probleem vraagt om onderzoek; geen signaal bewijst geen perfecte aanname.',
        'Pas met die beoordeling kun je voorspellingen en intervallen verantwoord interpreteren.'),
    'voorspellen': (
        'Met een beoordeeld regressiemodel kun je een uitkomst bij een gekozen x-waarde voorspellen. De benodigde onzekerheidsmarge hangt af van de vraag: gaat het om een gemiddelde of om één nieuwe waarneming? We houden die twee doelen vanaf het begin uit elkaar.',
        'Welk interval hoort bij de gevraagde gemiddelde spronghoogte? We berekenen de voorspelling en de marge voor het gemiddelde en verklaren waarom de bronuitwerking met een extra 1 een individueel interval oplevert.',
        'Bepaal vóór het invullen van een formule of je een gemiddelde of een individu voorspelt. Dat bepaalt de onzekerheidsterm en de betekenis van het interval.',
        'Dezelfde zorg bij interpretatie blijft nodig wanneer het model meerdere verklarende variabelen bevat.'),
    'meervoudig': (
        'Een uitkomst hangt vaak met meerdere kenmerken tegelijk samen. Een meervoudig regressiemodel neemt die kenmerken samen op. Daardoor lees je elke coëfficiënt bij gelijkblijvende overige opgenomen variabelen, en vergelijk je dummy’s met hun referentiegroep.',
        'Hoe vergelijk je opleidingsgroepen en bereken je het salaris voor een gegeven profiel? We gebruiken de coëfficiënten uit één model en maken het afrondingsverschil met de bronuitwerking zichtbaar.',
        'Bij meervoudige regressie horen de coëfficiënten bij hetzelfde model en dezelfde codering. Een groepsverschil of voorspelling moet dus rekening houden met de overige kenmerken en de referentiegroep.',
        'Als het verband op de oorspronkelijke schaal krom is, kan een transformatie nodig zijn.'),
    'transformaties': (
        'Een lineair model hoeft geen rechte lijn in de oorspronkelijke variabelen te beschrijven. Door de schaal van x, y of beide te veranderen, kun je bepaalde kromme verbanden als een lineair model schrijven. De gekozen schaal bepaalt hoe je rekent en de uitkomst terugvertaalt.',
        'Hoe bereken je de voorspelling bij x = 16 uit een model met ln(x) en ln(y)? We rekenen eerst op logschaal, transformeren terug en controleren de uitkomst met de machtsvorm.',
        'Controleer bij een transformatie welke variabelen van schaal zijn veranderd en vertaal de voorspelling passend terug. Vergelijk modellen alleen op een betekenisvolle basis.',
        'Bij modelkeuze beoordelen we vervolgens ook de extra bijdrage en overlap van verklarende variabelen.'),
    'modelbouw': (
        'Je kunt vaak meerdere modellen voor dezelfde uitkomst maken. Extra variabelen kunnen nuttige informatie toevoegen, maar ook overlappen met bestaande kenmerken. Daarom beoordelen we zowel de toegevoegde bijdrage als de stabiliteit en bruikbaarheid van het model.',
        'Wat vertelt een lage tolerance over overlap, en hoe toets je daarna de extra bijdrage van één variabele? Dit zijn twee afzonderlijke controles. Het voorbeeld laat zien welke aanvullende grens nodig is voor een significantieoordeel.',
        'Modelkeuze vraagt om meer dan een hogere R²: bekijk de extra bijdrage, overlap en aannames opnieuw. Daarmee is nog niet vastgesteld hoe goed het model buiten de gebruikte gegevens voorspelt.',
        'Dat onderzoeken we met validatie.'),
    'validatie': (
        'Een model wordt afgestemd op de gegevens waarmee het is gemaakt. De aansluiting op die trainingsgegevens kan daarom gunstiger lijken dan de prestatie op nieuwe gegevens. Validatie houdt gegevens apart om juist die voorspelfout te onderzoeken.',
        'Hoe groot is de gemiddelde gekwadrateerde voorspelfout voor drie testwaarnemingen? We berekenen MSPR en vergelijken die met de gegeven trainings-MSE.',
        'Validatie vergelijkt voorspellingen met waarnemingen die niet voor het afstemmen van het model zijn gebruikt. Een grotere testfout dan trainingsfout kan een te gunstig trainingsbeeld zichtbaar maken.',
        'De laatste les brengt methodekeuze, rekenen en interpreteren samen in een tentamenantwoord.'),
    'tentamen': (
        'Een tentamenopgave geeft vaak meer informatie dan je voor één berekening nodig hebt. Je begint daarom bij de gevraagde uitspraak en selecteert daarna gegevens, methode en voorwaarden. Zo verbind je de losse onderwerpen tot een controleerbaar antwoord.',
        'Hoe schrijf je een volledig antwoord op de vraag of productie en kosten positief lineair samenhangen? Het voorbeeld loopt van de gerichte hypothesen via de gegeven t-waarden naar een inhoudelijke conclusie.',
        'Een volledig antwoord laat zien wat je onderzoekt, waarom de methode past, hoe je rekent en wat de uitkomst betekent. Controleer tot slot voorwaarden, eenheden, afronding en de aansluiting op de vraag.',
        'Gebruik die volgorde nu bij het zelfstandig oefenen van een volledige opgave.'),
}


def enhance(lessons):
    assert set(READING) == {lesson['id'] for lesson in lessons}
    for lesson in lessons:
        opening, example, kern, vervolg = READING[lesson['id']]
        lesson['reading'] = {'opening': opening, 'kern': kern, 'vervolg': vervolg}
        lesson['example']['context'] = example
        for section in lesson['sections'] + lesson['formulaGuide']:
            section['html'] = inline_formulas(section['html'])
        # Steps retain their plain-text source for checks and other consumers.
        lesson['example']['stepsHtml'] = [inline_formulas(html.escape(step)) for step in lesson['example']['steps']]
