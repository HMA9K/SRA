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
        'Een regressiemodel beschrijft een onbekend populatieverband met een storingsterm. Uit de steekproef schat je een lijn: constante plus helling maal x. De helling geeft de verandering in de voorspelde y per eenheid x; het residu is waargenomen y min voorspelde y. De kleinste-kwadratenmethode minimaliseert de som van gekwadrateerde residuen. Correlatie geeft richting en sterkte van een lineair patroon, maar bewijst geen oorzaak of significantie. Controleer steeds de eenheden en het onderzochte bereik.',
        'Bij ANOVA vergelijken we voorspellen met de lijn met voorspellen door alleen het gemiddelde. Daarvoor heb je het verschil tussen waarneming, voorspelling en residu nodig: die drie bepalen welk deel van de variatie de lijn verklaart.',
    ),
    'anova': (
        'Een regressielijn sluit meestal niet precies op alle waarnemingen aan. Om de kwaliteit van de aansluiting te beschrijven, splitsen we de totale variatie in een verklaard deel en een resterend deel. De ANOVA-tabel brengt die onderdelen bij elkaar.',
        'Wat vertelt de ANOVA-uitvoer over spronghoogte en beenkracht? Vanuit de gegeven kwadratensommen berekenen we vrijheidsgraden, gemiddelde kwadraten, F, de residuele standaardafwijking en R².',
        'ANOVA verdeelt de totale variatie in een verklaard deel SSR en een resterend deel SSE. Bij OLS met constante tellen die delen op tot TotalSS. De vrijheidsgraden zijn k, n − k − 1 en n − 1; de constante telt niet mee in k. Deel iedere kwadratensom door haar eigen vrijheidsgraden voor de Mean Square. R² is het verklaarde aandeel, de wortel uit MSE geeft de residuele spreiding en F is MSR gedeeld door MSE. Een hoge R² vervangt de controle van het model niet.',
        'In de volgende les gebruiken we F en de onzekerheid van de helling om hypothesen te toetsen. Houd daarvoor n, k, MSE en het modelnummer bij elkaar; een berekende fitmaat is op zichzelf nog geen toetsbesluit.',
    ),
    'toetsen': (
        'Een berekende helling of een hoge verklaarde variatie vertelt nog niet of de gegevens voldoende bewijs leveren voor de onderzoeksvraag. Een toets begint daarom met een uitspraak over de populatie. Daarna kies je de richting, toetsingsgrootheid en beslisgrens.',
        'Geven de gegevens uit de salariscasus voldoende bewijs voor een negatieve coëfficiënt bij de dummy Vrouw? We vertalen de vraag naar hypothesen, vergelijken t met de eenzijdige grens en formuleren de conclusie binnen het model.',
        'Een toets begint met H₀ en H₁ over de populatie, de gekozen richting en α. De t-waarde vergelijkt één coëfficiënt met haar standaardfout; de globale F beoordeelt alle hellingen samen. Bij een tweezijdige t-grens gebruik je α/2 per staart, maar een tweezijdige p-waarde vergelijk je met de volledige α. Let bij een eenzijdige toets ook op het teken. Geef na de berekening een beslissing, een conclusie over de genoemde variabelen en het relevante α- of β-risico. Niet verwerpen bewijst H₀ niet, en significantie bewijst geen causaliteit.',
        'Daarna onderzoeken we of de gegevens en residuen bij de modelaannames passen. Neem het onderscheid tussen een toetsbeslissing en bewijs mee: ook een niet-significante diagnosetoets bewijst niet dat een aanname exact geldt.',
    ),
    'diagnostiek': (
        'Een regressietoets steunt op aannames over model en gegevens. Voordat je de uitkomst gebruikt, onderzoek je of die aannames voldoende passen en of enkele waarnemingen het resultaat sterk bepalen. Elke controle vraagt om een signaal, betekenis en passende vervolgstap.',
        'Welke signalen voor afwijkende waarnemingen of modelproblemen bevat de tentamenuitvoer van 28 oktober 2024? We vergelijken de gegeven waarden met de cursuscriteria en onderscheiden een signaal van bewijs.',
        'Controleer eerst de gegevensstructuur: groepen en, bij tijdreeksen, een mogelijke vertraging. Gestandaardiseerde residuen signaleren uitbijters in y, Mahalanobis Distance uitzonderlijke x-waarden en Cook’s Distance invloed op de geschatte lijn. Vergelijk iedere maat met haar eigen cursusgrens en onderzoek de betreffende waarneming. Beoordeel vervolgens normaliteit, constante residuspreiding en bij tijdreeksen autocorrelatie. Een overschrijding vraagt om een verklaring en een passende reactie, niet om automatisch verwijderen. Schat na iedere onderbouwde aanpassing opnieuw en controleer de nieuwe residuen.',
        'Met een beoordeeld model kun je een voorspelling en een bijpassende onzekerheidsmarge maken. Daarvoor heb je actuele coëfficiënten, de residuele spreiding en het bereik van de basisgegevens nodig; oude modeluitvoer mag niet worden gemengd met nieuwe.',
    ),
    'voorspellen': (
        'Met een beoordeeld regressiemodel kun je een uitkomst bij een gekozen x-waarde voorspellen. De benodigde onzekerheidsmarge hangt af van de vraag: gaat het om een gemiddelde of om één nieuwe waarneming? We houden die twee doelen vanaf het begin uit elkaar.',
        'Welk interval hoort bij de gevraagde gemiddelde spronghoogte? We berekenen de voorspelling en de marge voor het gemiddelde en verklaren waarom de bronuitwerking met een extra 1 een individueel interval oplevert.',
        'Bepaal eerst of je één nieuwe waarneming of de gemiddelde respons bij x₀ wilt voorspellen. De puntvoorspelling volgt uit de regressielijn, met invoer en uitkomst in de juiste eenheden. Het individuele interval bevat naast onzekerheid over de lijn ook de extra storing van één waarneming; daarvoor staat de eerste 1 onder de wortel. De marge groeit als x₀ verder van x̄ ligt. Extrapolatie en veranderde omstandigheden vragen een inhoudelijke beoordeling. Een realisatie buiten het interval is aanleiding voor onderzoek, geen bewijs van een fout.',
        'Bij meervoudige regressie krijgt de voorspelling bijdragen van meerdere kenmerken tegelijk. Bewaar daarom de gewoonte om eerst het juiste model, de eenheden en de gevraagde uitkomst vast te stellen; daar komen de codering van dummy’s en de overige kenmerken bij.',
    ),
    'meervoudig': (
        'Een uitkomst hangt vaak met meerdere kenmerken tegelijk samen. Een meervoudig regressiemodel neemt die kenmerken samen op. Daardoor lees je elke coëfficiënt bij gelijkblijvende overige opgenomen variabelen, en vergelijk je dummy’s met hun referentiegroep.',
        'Hoe vergelijk je opleidingsgroepen en bereken je het salaris voor een gegeven profiel? We gebruiken de coëfficiënten uit één model en maken het afrondingsverschil met de bronuitwerking zichtbaar.',
        'Een meervoudig model voorspelt y met meerdere kenmerken tegelijk. Iedere B beschrijft een verandering bij gelijkblijvende overige opgenomen variabelen. Dummy’s vergelijken categorieën met een referentiegroep; een verschil tussen twee andere groepen volgt uit het verschil van hun coëfficiënten. Gebruik B voor voorspellingen en absolute Beta voor een gestandaardiseerde vergelijking binnen hetzelfde model. Gewone R² kan bij uitbreiding op dezelfde data niet dalen, adjusted R² corrigeert voor modelomvang. Toets het geheel met F, afzonderlijke coëfficiënten met t, en controleer ook de modelaannames.',
        'Niet ieder verband is recht op de oorspronkelijke schaal. In de volgende les bepaal je welke variabelen een transformatie nodig hebben en hoe je de voorspelling terugrekent; het onderscheid tussen een coëfficiënt en een verandering in oorspronkelijke eenheden blijft daarbij nodig.',
    ),
    'transformaties': (
        'Een lineair model hoeft geen rechte lijn in de oorspronkelijke variabelen te beschrijven. Door de schaal van x, y of beide te veranderen, kun je bepaalde kromme verbanden als een lineair model schrijven. De gekozen schaal bepaalt hoe je rekent en de uitkomst terugvertaalt.',
        'Hoe bereken je de voorspelling bij x = 16 uit een model met ln(x) en ln(y)? We rekenen eerst op logschaal, transformeren terug en controleren de uitkomst met de machtsvorm.',
        'Een transformatie verandert de schaal waarop je een verband lineair beschrijft. Het logaritmische model gebruikt ln(x), het exponentiële model ln(y) en het machtsmodel beide. Controleer of de oorspronkelijke waarden die je logaritmeert positief zijn. Vul de juiste getransformeerde variabelen in en reken de volledige voorspelde logwaarde terug met exp. Transformeer intervalgrenzen afzonderlijk terug. Vergelijk R² van y en ln(y) niet alsof zij dezelfde variatie meten, en controleer de residuen na de aanpassing opnieuw.',
        'Bij modelbouw kiezen we vervolgens welke verklarende variabelen naast elkaar nodig zijn. Neem je kennis van de y-schaal mee: een vergelijking van modellen of een partiële F-toets vereist dezelfde uitkomst en dezelfde waarnemingen.',
    ),
    'modelbouw': (
        'Je kunt vaak meerdere modellen voor dezelfde uitkomst maken. Extra variabelen kunnen nuttige informatie toevoegen, maar ook overlappen met bestaande kenmerken. Daarom beoordelen we zowel de toegevoegde bijdrage als de stabiliteit en bruikbaarheid van het model.',
        'Wat vertelt een lage tolerance over overlap, en hoe toets je daarna de extra bijdrage van één variabele? Dit zijn twee afzonderlijke controles. Het voorbeeld laat zien welke aanvullende grens nodig is voor een significantieoordeel.',
        'Kies kandidaten eerst op inhoud en beoordeel daarna hun extra bijdrage binnen het gezamenlijke model. Backward verwijdert, forward voegt toe en stepwise controleert ook eerdere keuzes opnieuw. Schat na elke selectiestap opnieuw; oude coëfficiënten en p-waarden blijven niet vanzelf geldig. VIF meet overlap van een x met de andere x-variabelen, met VIF groter dan 10 als cursusgrens. Vergelijk modelomvang met adjusted R² en toets een uitbreiding met de partiële F op dezelfde data en y-schaal. Een betere fit betekent nog niet dat het model in nieuwe situaties bruikbaar is.',
        'De volgende les behandelt validatie, dat in geen van de negen onderzochte tentamens voorkwam maar wel in het huidige programma staat. Je gebruikt daar het onderscheid tussen het model waarmee je hebt geschat en gegevens die niet voor de modelkeuze zijn gebruikt.',
    ),
    'validatie': (
        'Niet getentamineerd in de negen onderzochte tentamens: validatie met testset en MSPR (0/900 punten). Dit onderwerp blijft in het huidige programma staan. Een model wordt afgestemd op de gegevens waarmee het is gemaakt. De aansluiting op die trainingsgegevens kan daarom gunstiger lijken dan de prestatie op nieuwe gegevens. Validatie houdt gegevens apart om juist die voorspelfout te onderzoeken.',
        'Hoe groot is de gemiddelde gekwadrateerde voorspelfout voor drie testwaarnemingen? We berekenen MSPR en vergelijken die met de gegeven trainings-MSE.',
        'Validatie met testset en MSPR is niet getentamineerd in de negen onderzochte tentamens. Het blijft een leerdoel in het huidige programma. Kies en schat het model met de trainingsgegevens en houd de testgegevens buiten die keuze. Bereken MSPR door de gekwadrateerde testfouten op te tellen en door het aantal testwaarnemingen te delen. Vergelijk met de trainings-MSE op dezelfde schaal; een veel grotere testfout wijst op een te gunstig trainingsbeeld. Voor ongeveer gelijke fouten bestaat geen vaste algemene grens.',
        'De laatste les verbindt de onderdelen tot een volledig tentamenantwoord. Neem de gewoonte mee om de gebruikte gegevens, tabel en betekenis van ieder getal te benoemen; de nadruk ligt daar op de daadwerkelijk getoetste reken- en redeneerstappen.',
    ),
    'tentamen': (
        'Een tentamenopgave geeft vaak meer informatie dan je voor één berekening nodig hebt. Je begint daarom bij de gevraagde uitspraak en selecteert daarna gegevens, methode en voorwaarden. Zo verbind je de losse onderwerpen tot een controleerbaar antwoord.',
        'Hoe schrijf je een volledig antwoord op de vraag of productie en kosten positief lineair samenhangen? Het voorbeeld loopt van de gerichte hypothesen via de gegeven t-waarden naar een inhoudelijke conclusie.',
        'Begin iedere opgave bij de uitspraak die wordt gevraagd en kies daarna de methode. Gebruik het puntengewicht om vooral toetsen, multicollineariteit, ANOVA en modelkeuze zelfstandig te oefenen. Houd coëfficiënten, vrijheidsgraden, diagnoses en voorspellingen steeds bij hetzelfde model. Een volledig antwoord bevat de methode, invulling, uitkomst en betekenis voor de casus. Benoem bij een toets ook hypothesen, richting, beslissing en risico, en bij een diagnose de onderbouwde vervolgstap. Controleer ten slotte eenheden, voorwaarden en afronding.',
        'Werk nu een volledige oorspronkelijke opgave uit zonder tussentijds de uitwerking te lezen. Noteer daarna per fout of begrip, methodekeuze, rekenen of formuleren de oorzaak was en herhaal de bijbehorende les voordat je een nieuwe opgave maakt.',
    ),
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
