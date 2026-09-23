"""Expliciete herkenningsroutes voor iedere bestaande SRA-oefenvraag.

De route koppelt gegevens/woorden in de vraag aan een begrip, aanpak en
antwoordvorm. Zij geeft geen antwoordletter of uitgerekende vraaguitkomst.
Basisvragen delen hun route met de lescheck. Een ontbrekende route is een fout.
De inhoud volgt de bestaande lessen, uitleg en bronverwijzingen van de vraag.
"""
from copy import deepcopy
import re

PATTERNS = {}


def p(key, signals, meaning, approach, answer):
    if key in PATTERNS:
        raise ValueError(f'Dubbele herkenningsroute: {key}')
    PATTERNS[key] = dict(signals=signals, meaning=meaning, approach=approach, answer=answer)


# Beginnen: populatie, selectie en de gevraagde uitspraak.
p('beginnen-1', '“80 van 2.000 facturen” en de kleine letter n.',
  'Er zijn twee aantallen: onderzochte posten en de volledige populatie.',
  'Koppel n aan de werkelijk onderzochte posten en N aan alle posten.',
  'Een aantal onderzochte facturen, geen bedrag of populatieomvang.')
p('beginnen-2', 'Het dakje boven W in Ŵ.',
  'Het symbool maakt onderscheid tussen een onbekend populatietotaal en een schatting daarvan.',
  'Lees het dakje als “geschat uit gegevens”; het zegt niets over afronden.',
  'De betekenis van de notatie, niet een numerieke berekening.')
p('beginnen-3', 'Vergelijk in de antwoordopties “hoe groot”, “significant” en “H₀ verwerpen”.',
  'Een omvang bepalen hoort bij schatten; bewijs tegen een bewering beoordelen hoort bij toetsen.',
  'Zoek de vraag die een onbekende populatiegrootheid wil benaderen.',
  'De vraag naar een geschatte waarde, eventueel met een onzekerheidsinterval.')
p('mc-beginnen-toepassing-1', '“Willekeurig gekozen”, een gemiddelde per factuur en “populatietotaal”.',
  'Een aselect steekproefgemiddelde wordt gebruikt om een totaal te schatten: MPU.',
  'Vermenigvuldig het gemiddelde met alle facturen N, niet met de onderzochte n.',
  'Een geschat totaalbedrag in euro, geen gemiddelde per factuur.')
p('mc-beginnen-toepassing-2', '“De 1.000 goedkoopste” worden gebruikt voor een uitspraak over alle 10.000.',
  'De selectie hangt van de factuurwaarde af en vertegenwoordigt dure facturen niet.',
  'Beoordeel de selectiegrond voordat je de grote steekproefomvang als voordeel ziet.',
  'Een kritiek op mogelijke selectiebias, niet alleen op het aantal controles.')
p('mc-beginnen-toepassing-3', 'Ŵ, een standaardfout, t en de vraag naar een volledige uitspraak.',
  'Naast de puntschatting is ook de onzekerheid van het totaal gegeven.',
  'Bereken de marge t × standaardfout en plaats die aan beide kanten van Ŵ.',
  'Een geschat totaal met onder- en bovengrens, zonder zekerheid over de werkelijke waarde te claimen.')

# Rekenen: volgorde, eenheden en welke spreiding wordt bedoeld.
p('rekenen-1', 'Σw² zonder haakjes rond de som.',
  'De macht hoort bij iedere w en niet bij de totale som.',
  'Kwadrateer de afzonderlijke waarden en tel hun kwadraten op.',
  'Een som van kwadraten; onderscheid die van (Σw)².')
p('rekenen-2', '“Variantie”, euro² en gevraagd s zonder kwadraat.',
  'De gegeven maat is s²; gevraagd is de standaardafwijking.',
  'Neem de vierkantswortel van de variantie en controleer de eenheid.',
  'Een spreidingsmaat in euro, de oorspronkelijke eenheid.')
p('rekenen-3', 'De formule s/√n, met een spreiding gedeeld door de wortel van het aantal.',
  'Die deling verandert spreiding tussen waarnemingen in onzekerheid van het gemiddelde.',
  'Koppel de formule aan een standaardfout; let erop dat hier nog geen eindigheidscorrectie staat.',
  'Een uitleg van de onzekerheid van het gemiddelde, niet van een populatietotaal.')
p('mc-rekenen-toepassing-1', 'Een rij losse waarden en het woord “steekproefvariantie s²”.',
  'De spreiding moet uit de waarnemingen worden opgebouwd.',
  'Bepaal het gemiddelde, kwadrateer de afwijkingen en deel hun som door n − 1.',
  'Een variantie; neem geen wortel als s² gevraagd blijft.')
p('mc-rekenen-toepassing-2', 'n, Σw en Σw² zijn gegeven; gevraagd is s op twee decimalen.',
  'Dit zijn samenvattingen voor de rekenformule van de steekproefvariantie.',
  'Bereken s² = [Σw² − (Σw)²/n]/(n − 1), neem daarna de wortel en rond pas af.',
  'De standaardafwijking in oorspronkelijke eenheden op twee decimalen.')
p('mc-rekenen-toepassing-3', 's en n zijn gegeven; de eindigheidscorrectie moet worden genegeerd.',
  'Je moet de individuele spreiding onderscheiden van de onzekerheid van het gemiddelde.',
  'Behoud s als spreiding en bereken daarnaast s/√n als standaardfout.',
  'Een combinatie van beide maten met hun juiste betekenis.')

# Onzekerheid: staarten, grenzen, precisie en tabelkeuze.
p('onzekerheid-1', '“Tweezijdig”, 90% en “per staart”.',
  'De kans buiten het centrale interval wordt over twee uiteinden verdeeld.',
  'Bepaal eerst α = 1 − betrouwbaarheid en neem daarna α/2.',
  'De overschrijdingskans aan één kant, niet de totale α.')
p('onzekerheid-2', '“Totale breedte” en de gevraagde marge E.',
  'Het interval bevat links én rechts een marge E.',
  'Gebruik breedte = 2E en halveer de gegeven afstand tussen de grenzen.',
  'Een halve intervalbreedte in euro.')
p('onzekerheid-3', 'De berekende df ontbreken, maar een lagere en hogere tabelrij zijn beschikbaar.',
  'Dit is een tabelkeuze volgens de cursusafspraak, geen nieuwe df-berekening.',
  'Kies de naast lagere beschikbare rij; interpoleer niet.',
  'De te gebruiken tabelrij, met behoud van de oorspronkelijk berekende df.')
p('mc-onzekerheid-toepassing-1', '“Tweezijdig 95%” en “per staart”.',
  'De totale overschrijdingskans ligt buiten het middengebied.',
  'Trek de betrouwbaarheid van 1 af en verdeel de rest gelijk over twee staarten.',
  'Een kans per staart, passend bij de kolom van een tweezijdige t-tabel.')
p('mc-onzekerheid-toepassing-2', 'Ŵ, standaardfout, t en “naar buiten afronden op honderden”.',
  'Je zoekt een interval dat door afronding niet smaller wordt.',
  'Bereken Ŵ ± t × standaardfout; rond de ondergrens omlaag en de bovengrens omhoog.',
  'Twee grenzen in honderden euro, met de juiste afrondingsrichting.')
p('mc-onzekerheid-toepassing-3', '“Smallere intervalmarge” terwijl betrouwbaarheid en spreiding gelijk blijven.',
  'Bij gelijke t en s moet de standaardfout kleiner worden.',
  'Kijk naar n in s/√n: meer waarnemingen verlagen deze onzekerheid.',
  'Een ingreep die de marge verkleint zonder het gekozen betrouwbaarheidsniveau te verlagen.')
p('mc-onzekerheid-aanvulling-bovengrens', '“95%-bovengrens” en een expliciet gegeven eenzijdige t-waarde.',
  'Er wordt één grens voor het populatiegemiddelde gevraagd.',
  'Bereken gemiddelde + t × standaardfout met de gegeven eenzijdige t.',
  'Eén bovengrens; geen tweezijdig interval of grens voor iedere losse waarneming.')

# MPU en voorwaarden.
p('mpu-1', 'N en w̄, met Ŵ_MPU als gevraagde grootheid.',
  'De directe schatter projecteert het werkelijke gemiddelde naar de populatie.',
  'Gebruik Ŵ_MPU = Nw̄: aantal populatieposten maal bedrag per post.',
  'Een geschat werkelijk populatietotaal.')
p('mpu-2', '“Welke spreiding” in combinatie met MPU.',
  'De onzekerheid moet aansluiten bij de gegevens waarop de schatter berust.',
  'MPU gebruikt werkelijke waarden w; zoek dus hun standaardafwijking s_w.',
  'De bijbehorende spreidingsmaat, geen spreiding van boekwaarden of controlefouten.')
p('mpu-3', 'n = N bij de eindigheidscorrectie.',
  'Iedere populatiepost is onderzocht: er blijft geen onzekerheid door steekproeftrekking over.',
  'Vul n = N in √((N − n)/(N − 1)) in en bekijk de teller.',
  'Het gevolg voor correctiefactor en standaardfout, niet voor de spreiding tussen posten.')
p('mc-mpu-toepassing-1', '“Standaardfout van het geschatte totaal”, N, n en s_w; zonder eindigheidscorrectie.',
  'De standaardfout van een gemiddelde moet worden opgeschaald naar alle posten.',
  'Bereken eerst s_w/√n en vermenigvuldig daarna met N.',
  'Een standaardfout van het totaal, geen totaalschatting Nw̄.')
p('mc-mpu-toepassing-2', 'MPU-gegevens, t en een expliciete eindigheidscorrectie; gevraagd is een interval.',
  'Het middelpunt en de marge gebruiken verschillende gegevens.',
  'Neem Nw̄ als middelpunt en t × N × s_w/√n × correctiefactor als marge.',
  'Een onder- en bovengrens voor het werkelijke populatietotaal.')
p('mc-mpu-toepassing-3', '“Alle 500 posten” gecontroleerd en een werkelijk gemiddelde.',
  'Dit is integrale controle: n = N.',
  'Vermenigvuldig N met het gemiddelde en pas de eindigheidscorrectie voor n = N toe.',
  'Het totaal met nul steekproefonzekerheid; niet de uitspraak dat alle posten gelijk zijn.')
p('mc-mpu-aanvulling-scheef', 'Een aselecte steekproef boven de cursusgrens én “extreem scheve populatie”.',
  'Aselecte selectie en bruikbaarheid van de normale benadering zijn afzonderlijke voorwaarden.',
  'Beoordeel of de scheefheid de benadering problematisch maakt ondanks de omvangsvuistregel.',
  'Een voorwaardelijk oordeel over het interval, geen automatische garantie door n alleen.')

# Verschilschatter: absolute fout, teken en spreiding.
p('verschil-1', 'Een boekwaarde, een werkelijke waarde en de letter e.',
  'Hier betekent e een controlefout volgens de afspraak b − w.',
  'Trek de werkelijke waarde van de boekwaarde af en behoud het teken.',
  'Een getekend verschil: positief is overwaardering, negatief onderwaardering.')
p('verschil-2', 'Een aantal gecontroleerde posten én een apart aantal aangetroffen fouten.',
  'De genoemde cursusvoorwaarde gaat over fouten, niet over alle controles.',
  'Vergelijk het aantal aangetroffen fouten met het cursusminimum van 30.',
  'Een oordeel of juist deze toepassingsvoorwaarde is vervuld.')
p('verschil-3', '“Waarom nauwkeurig” bij de verschilschatter.',
  'De onzekerheid hangt af van de variatie in de absolute controlefouten.',
  'Zoek een geringe spreiding s_e van b − w, niet alleen een kleine gemiddelde fout.',
  'Een verklaring waarom de standaardfout van de correctie klein kan zijn.')
p('mc-verschil-toepassing-1', 'B, N en een positieve gemiddelde fout ē; gevraagd is de werkelijke waarde.',
  'Het bekende boektotaal moet worden gecorrigeerd voor totale overwaardering.',
  'Schat de totale fout als Nē en trek die van B af.',
  'Een geschat werkelijk totaal B − Nē, niet alleen het foutbedrag.')
p('mc-verschil-toepassing-2', 'B, N en een negatieve gemiddelde fout ē.',
  'Een negatieve b − w duidt op onderwaardering in de boeken.',
  'Vul het minteken mee in B − Nē; werk de aftrekking van een negatief bedrag uit.',
  'Een geschat werkelijk totaal met het juiste teken van de correctie.')
p('mc-verschil-toepassing-3', 'B, ē en s_e met n, N en t; gevraagd is een interval zonder eindigheidscorrectie.',
  'De fout bepaalt zowel de correctie op het boektotaal als de onzekerheid daarvan.',
  'Gebruik B − Nē als middelpunt en t × N × s_e/√n als marge.',
  'Twee grenzen voor de werkelijke totale waarde, geen interval rond alleen ē.')

# Quotiënt: relatieve fout en welk bedrag wordt gevraagd.
p('quotient-1', 'Σw en Σb, met de goedratio q als vraag.',
  'De ratio geeft de werkelijke waarde per euro boekwaarde in de steekproef.',
  'Deel de som van de werkelijke waarden door de som van de boekwaarden.',
  'Een dimensieloze goedratio, niet haar omgekeerde of het foutaandeel.')
p('quotient-2', 'Vergelijk in de opties een vast euroverschil met een vast foutpercentage.',
  'Een quotiëntschatter past bij een ongeveer constante verhouding w/b.',
  'Zoek het patroon waarbij kleine en grote posten relatief ongeveer evenveel afwijken.',
  'Een herkenning van relatieve afwijkingen als grond voor de schatterkeuze.')
p('quotient-3', 'Een goedratio q en boektotaal B; gevraagd is de werkelijke waarde.',
  'q is het deel van B dat als werkelijk aanwezig wordt geschat.',
  'Vermenigvuldig q met B; gebruik 1 − q alleen bij een vraag naar de fout.',
  'Een geschat werkelijk totaalbedrag, geen overwaardering.')
p('mc-quotient-toepassing-1', 'Beide steekproefsommen én het boektotaal van de populatie.',
  'Eerst moet een steekproefratio worden bepaald, daarna toegepast op de populatie.',
  'Bereken q = Σw/Σb en vervolgens Ŵ_Q = qB.',
  'Een geschat werkelijk populatietotaal in euro.')
p('mc-quotient-toepassing-2', 'Paarsgewijze boekwaarden en werkelijke waarden voor kleine en grote posten.',
  'Het relevante onderscheid is een vast bedrag tegenover een vaste verhouding.',
  'Vergelijk per post zowel b − w als w/b en herken welk patroon gelijk blijft.',
  'Het constante foutbedrag of de constante goedratio, als herkenningsgrond voor een passende schatter.')
p('mc-quotient-toepassing-3', '“Goedratio” gegeven, maar “totale overwaardering” gevraagd.',
  'Je zoekt het foutdeel van de boekwaarde, niet het goede deel.',
  'Bereken eerst 1 − q en pas dat aandeel toe op B.',
  'Een geschat totaal foutbedrag in euro.')

# Regressieschatter: het populatiedoel en de correctieterm.
p('regressieschatter-1', 'B = Nb̄ en “correctie op MPU”.',
  'De regressieschatter corrigeert het verschil tussen bekend en via de steekproef geschat boektotaal.',
  'Bekijk de factor B − Nb̄ in b₁(B − Nb̄) voordat je verder rekent.',
  'De correctieterm; onderscheid die van de volledige schatting.')
p('regressieschatter-2', 'R gegeven en gevraagd naar een factor voor s_MPU.',
  'Een standaardfout gebruikt de wortel uit het onverklaarde variantieaandeel.',
  'Bereken achtereenvolgens R², 1 − R² en √(1 − R²).',
  'Een vermenigvuldigingsfactor voor de standaardfout, niet R of R².')
p('regressieschatter-3', '“Hier” verwijst naar de regressieschatter met W, N en B in deze les.',
  'Regressie wordt hier ingezet om een werkelijk populatietotaal te schatten.',
  'Koppel W aan het totale bedrag en B aan de beschikbare hulpinformatie.',
  'Het schattingsdoel: een populatietotaal, geen voorspelling voor één persoon.')
p('mc-regressieschatter-toepassing-1', 'R_bw en de spreidingen van w en b; gevraagd is b₁.',
  'Dit zijn de onderdelen van de regressiehelling van werkelijk op geboekt.',
  'Gebruik b₁ = R_bw × s_w/s_b en zet de spreidingen niet omgekeerd.',
  'Een hellingscoëfficiënt in werkelijke waarde per eenheid boekwaarde.')
p('mc-regressieschatter-toepassing-2', 'Nw̄, Nb̄, bekend B en een helling b₁ kunnen uit de gegevens worden opgebouwd.',
  'Het verschil in boektotalen corrigeert de directe schatting van W.',
  'Bereken Nw̄ + b₁(B − Nb̄), met haakjes rond het hele verschil.',
  'De volledige regressieschatting van het werkelijke populatietotaal.')
p('mc-regressieschatter-toepassing-3', 'De standaardfout van MPU en R_bw; gevraagd is de nieuwe standaardfout.',
  'Het verband met boekwaarde vermindert volgens de behandelde formule de resterende onzekerheid.',
  'Vermenigvuldig de bestaande standaardfout met √(1 − R_bw²).',
  'Een standaardfout in dezelfde eenheid als de gegeven MPU-standaardfout.')
p('mc-regressieschatter-aanvulling-dekking', '“Gelijk betrouwbaarheidsniveau” en een “smaller” regressieschattingsinterval.',
  'De vergelijking gaat over precisie bij een gelijk gekozen niveau.',
  'Verbind de kleinere marge met berekende precisie en controleer of de modelvoorwaarden passen.',
  'Een voorwaardelijk precisieoordeel, geen hogere betrouwbaarheid of gegarandeerde dekking.')

# Planning: minimale gehele omvang, aanvullende controles en passende spreiding.
p('steekproefomvang-1', 'Een berekende n met decimalen en “hoeveel posten”.',
  'De formule levert een minimum; posten zijn alleen in gehele aantallen te controleren.',
  'Neem het kleinste gehele aantal dat minstens de berekende n is.',
  'Een naar boven afgeronde totale steekproefomvang.')
p('steekproefomvang-2', '“Al gedaan”, “totaal nodig” en “uitbreiding”.',
  'Bestaande controles zijn onderdeel van het benodigde totaal.',
  'Trek het al gecontroleerde aantal af van de totale behoefte.',
  'Het aantal extra controles, niet het nieuwe totaal.')
p('steekproefomvang-3', '“Omvangsformule” samen met “verschilschatter”.',
  'De planning moet dezelfde onzekerheidsbron gebruiken als de gekozen schatter.',
  'Selecteer de variantie van e = b − w in plaats van die van w of b.',
  'De passende foutvariantie s_e² voor de omvangsberekening.')
p('mc-steekproefomvang-toepassing-1', 'Een “totale intervalbreedte” wordt gegeven; de formule vraagt E.',
  'E is de marge aan één kant van het middelpunt.',
  'Halveer de totale breedte vóór je E kwadrateert in γ.',
  'De halve breedte die als invoer voor de omvangsformule dient.')
p('mc-steekproefomvang-toepassing-2', 'De twee formules voor γ en n, met E, t, N en s².',
  'Een maximale marge wordt teruggerekend naar benodigde totale omvang.',
  'Bereken eerst γ, daarna N/(1 + γ), en rond alleen de uiteindelijke n omhoog af.',
  'Een minimaal geheel aantal te controleren posten.')
p('mc-steekproefomvang-toepassing-3', 'Een totale omvang met decimalen, een bestaand aantal en “extra”.',
  'De minimumomvang en de uitbreiding zijn twee opeenvolgende stappen.',
  'Rond de totale behoefte eerst omhoog af en trek daarna bestaande controles af.',
  'Een geheel aantal aanvullende controles.')
p('mc-steekproefomvang-aanvulling-quotient', '“Quotiëntschatter” en s_q in de gegeven γ-formule.',
  'De planning gebruikt resterende spreiding s_q, niet de dimensieloze goedratio q.',
  'Vul s_q² in γ in, bereken N/(1 + γ) en rond de uitkomst naar boven af.',
  'Een minimale totale n; geen ratio of aanvullend aantal.')

# Stratificatie: bedragen, varianties, grenzen en allocatie uit elkaar houden.
p('stratificatie-1', 'Stratumomvangen N₁ en N₂, totale n en “evenredig”.',
  'De controles worden verdeeld naar het aandeel posten per stratum.',
  'Bereken N₁/(N₁ + N₂) en vermenigvuldig dat aandeel met n.',
  'Het aantal controles voor stratum 1, niet de omvang van dat stratum.')
p('stratificatie-2', '“Onafhankelijke strata” met elk een standaardfout.',
  'Bij optellen van onafhankelijke schattingen tel je varianties op.',
  'Kwadrateer beide standaardfouten, tel op en neem de wortel.',
  'De gecombineerde standaardfout, niet de som van de twee standaardfouten.')
p('stratificatie-3', 'Een “integraal gecontroleerd topstratum” en de steekproefvariantie van zijn totaal.',
  'Alle posten in dit stratum zijn onderzocht.',
  'Stel n_h = N_h: er resteert geen onzekerheid door steekproeftrekking binnen dit stratum.',
  'De variantiebijdrage aan de totaalschatting, niet de onderlinge spreiding van topstratumposten.')
p('mc-stratificatie-toepassing-1', 'Twee stratumomvangen met gemiddelden én een bekend werkelijk topstratumtotaal.',
  'De gewone strata worden geschat; het gecontroleerde topstratum staat al vast.',
  'Bereken per gewoon stratum N_h × gemiddelde en tel het bekende toptotaal eenmaal erbij.',
  'Eén totaalbedrag voor alle strata samen.')
p('mc-stratificatie-toepassing-2', 'N_h én s_h per stratum, “gelijke controlekosten” en “Neyman-allocatie”.',
  'De optimale verdeling weegt zowel omvang als spreiding mee.',
  'Bereken gewichten N_hs_h en verdeel n naar elk gewicht gedeeld door hun som.',
  'Aantallen controles per stratum die samen n vormen.')
p('mc-stratificatie-toepassing-3', 'Standaardfouten van onafhankelijke stratumtotalen, een totaalschatting en t.',
  'De intervalmarge vraagt eerst gecombineerde onzekerheid.',
  'Neem √(s₁² + s₂²), vermenigvuldig met t en zet de marge rond het gegeven totaal.',
  'Een interval voor alle strata samen; het bekende topstratum voegt geen steekproefvariantie toe.')
p('mc-stratificatie-aanvulling-boekgrens', '“Zonder topstratum”, “vier strata” en “eerste cumulatieve doel”.',
  'Je bepaalt grenzen op basis van de resterende boekwaarde, nog geen controleaantallen.',
  'Deel de resterende totale boekwaarde door het aantal strata voor het eerste streefbedrag.',
  'Een cumulatief bedrag voor de eerste grens, niet een gelijk aantal posten.')
p('mc-stratificatie-aanvulling-wortel', 'Klassebreedte én frequentie, met “toevoegen aan de cumulatieve wortelsom”.',
  'De wortelmethode verwerkt per klasse zowel breedte als aantal posten.',
  'Bereken √(klassebreedte × frequentie) vóór je de klassebijdragen cumuleert.',
  'De bijdrage van deze klasse aan de wortelsom, niet de ruwe frequentie.')
p('mc-stratificatie-aanvulling-uitbreiding', 'Een benodigde n met decimalen voor één stratum en reeds gecontroleerde posten.',
  'De gevraagde uitbreiding betreft alleen het verschil met het nieuwe minimum.',
  'Rond de totale stratumbehoefte naar boven af en trek het bestaande stratum-n af.',
  'Het extra aantal in dit stratum, met het nieuwe totaal als controle.')
p('mc-stratificatie-aanvulling-varianties', 'Een gewenste totale marge E, t en de variantiebijdrage van andere strata.',
  'Van de maximaal toegestane totale variantie is al een deel in gebruik.',
  'Bereken (E/t)² en trek de varianties van de overige strata af.',
  'De maximaal toegestane variantiebijdrage van het aan te passen stratum.')

# Regressielijn: voorspelling, residu, OLS en oorzaak.
p('regressielijn-1', 'Een vergelijking voor ŷ en een concrete x.',
  'De vraag gaat om invullen in een geschat model.',
  'Vermenigvuldig de helling met x en tel de constante erbij op.',
  'Een voorspelde y-waarde, niet het residu of de helling.')
p('regressielijn-2', 'Een waargenomen y én een voorspelde ŷ; gevraagd is het residu.',
  'Het residu is de verticale afwijking van de waarneming ten opzichte van de voorspelling.',
  'Bereken e = y − ŷ en behoud het teken.',
  'Een getekende voorspelfout in de eenheid van y.')
p('regressielijn-3', 'Het werkwoord “minimaliseert” bij OLS.',
  'De kleinste-kwadratenmethode kiest coëfficiënten via een foutcriterium.',
  'Koppel OLS aan kwadraten van residuen en de som daarvan.',
  'Het te minimaliseren criterium, niet de gewone som van getekende residuen.')
p('mc-regressielijn-toepassing-1', 'Een regressievergelijking, x én een werkelijke y; gevraagd is het residu.',
  'Een voorspelling is hier een tussenstap naar de afwijking.',
  'Bereken eerst ŷ uit x en daarna y − ŷ.',
  'Het getekende residu, niet alleen de modelvoorspelling.')
p('mc-regressielijn-toepassing-2', 'Twee modellen voor dezelfde data, met hun residuen en “OLS-criterium”.',
  'De vergelijking gaat om de som van gekwadrateerde fouten.',
  'Bereken voor elk model Σe²; laat positieve en negatieve fouten elkaar niet opheffen.',
  'Het model met de kleinste kwadratensom, met dat criterium als onderbouwing.')
p('mc-regressielijn-toepassing-3', '“Sterk positief verband” tussen leeftijd en salaris zonder onderzoeksopzet die oorzaken vaststelt.',
  'Samenhang beschrijft gezamenlijk variëren, niet automatisch een oorzakelijk effect.',
  'Beperk de conclusie tot de waargenomen richting van de samenhang.',
  'Een verdedigbare associatie-uitspraak zonder bewezen causaliteit.')
p('mc-regressielijn-aanvulling-mse', 'Enkelvoudige regressie, n, r en s_y; gevraagd is residuele variantie volgens formule 34.',
  'De onverklaarde variatie moet worden aangepast voor twee geschatte coëfficiënten.',
  'Bereken [(n − 1)/(n − 2)] × (1 − r²) × s_y².',
  'Een residuele variantie in y-eenheden², geen residuele standaardafwijking.')

# ANOVA: welk onderdeel van de tabel beantwoordt de vraag?
p('anova-1', 'SSR en TotalSS, met R² als gevraagde maat.',
  'Je zoekt het aandeel verklaarde variatie in de totale variatie.',
  'Deel SSR door TotalSS en herken het verschil met het onverklaarde aandeel.',
  'Een verklaarde fractie of percentage, geen fout in de oorspronkelijke meeteenheid.')
p('anova-2', 'n en het aantal verklarende variabelen k; gevraagd is “residual df”.',
  'Residu-vrijheidsgraden houden rekening met alle geschatte coëfficiënten inclusief constante.',
  'Gebruik n − k − 1; tel de constante niet nogmaals bij k.',
  'Het aantal vrijheidsgraden van de residuen.')
p('anova-3', 'MSE gegeven en “Std. Error of the Estimate” gevraagd.',
  'MSE is een variantie; de gevraagde uitvoermaat is een standaardafwijking.',
  'Neem √MSE en controleer dat de eenheid teruggaat naar die van y.',
  'De residuele standaardafwijking, geen R² of standaardfout van een coëfficiënt.')
p('mc-anova-toepassing-1', 'TotalSS en SSR als twee delen van de ANOVA-opsplitsing.',
  'Hieruit volgen de onverklaarde kwadratensom en het verklaarde aandeel.',
  'Gebruik SSE = TotalSS − SSR en R² = SSR/TotalSS.',
  'Een combinatie van een kwadratensom en een dimensieloos verklaard aandeel.')
p('mc-anova-toepassing-2', 'n, k, SSR en SSE; gevraagd is de globale F.',
  'F vergelijkt verklaarde en onverklaarde variatie per vrijheidsgraad.',
  'Bereken (SSR/k)/(SSE/(n − k − 1)).',
  'Een globale F-toetsingsgrootheid, nog zonder significantiebeslissing als grens of p ontbreekt.')
p('mc-anova-toepassing-3', 'R² én MSE bij een salaris-model; gevraagd is interpretatie.',
  'R² beschrijft een variatieaandeel, terwijl √MSE de residuele spreiding beschrijft.',
  'Vertaal R² naar verklaarde variatie en neem de wortel van MSE voor de salariseenheid.',
  'Twee onderscheiden interpretaties; geen individuele juistheidskans of causaliteitsbewijs.')

# Toetsen: richting, toetsdoel en inferentie.
p('toetsen-1', '“Dalend verband” bij het formuleren van H₁.',
  'De onderzoeksvraag is gericht op een negatieve populatiehelling.',
  'Vertaal de richting naar β₁ < 0, niet naar een uitspraak over alleen de geschatte b₁.',
  'Een eenzijdige alternatieve hypothese over de populatieparameter.')
p('toetsen-2', 'Een tweezijdige p-waarde en α.',
  'De p-waarde hoort al bij de gevraagde toetsrichting.',
  'Vergelijk p rechtstreeks met α; halveer de p niet zonder eenzijdige vraag.',
  'H₀ wel of niet verwerpen op het gegeven significantieniveau.')
p('toetsen-3', 'Een significante globale F bij meerdere verklarende variabelen.',
  'De nulhypothese stelt dat alle populatiehellingen tegelijk nul zijn.',
  'Koppel verwerpen aan ten minste één niet-nulle helling; benoem geen specifieke variabele zonder t-toets.',
  'Een conclusie over het model als geheel, niet over iedere voorspeller afzonderlijk.')
p('mc-toetsen-toepassing-1', 'B en Std. Error uit Coefficients, met H₀: β = 0.',
  'De geschatte coëfficiënt wordt uitgedrukt in aantallen standaardfouten van nul.',
  'Bereken t = (B − 0)/Std. Error en behoud het teken.',
  'Een t-toetsingsgrootheid voor deze coëfficiënt.')
p('mc-toetsen-toepassing-2', 'H₁: β > 0, een negatieve geschatte helling en een tweezijdige p.',
  'De gevonden richting is tegengesteld aan de gevraagde stijging.',
  'Controleer eerst het teken; voor deze eenzijdige richting hoort 1 − p_tweezijdig/2 bij de p-waarde.',
  'Een toetsbeslissing over de gevraagde stijging, niet over een willekeurig verband.')
p('mc-toetsen-toepassing-3', 'Een significante globale F en enkele niet-significante individuele t-toetsen.',
  'F toetst alle hellingen gezamenlijk; t toetst één bijdrage gegeven de andere voorspellers.',
  'Vergelijk de nulhypothesen voordat je de uitslagen tegenstrijdig noemt.',
  'Een uitleg waarom deze uitkomsten naast elkaar kunnen voorkomen.')
p('mc-toetsen-aanvulling-hellingse', 'n, r, s_x en s_y; gevraagd is s_b1 volgens formule 39.',
  'De vraag betreft onzekerheid van de helling, niet de helling zelf.',
  'Bereken (s_y/s_x) × √((1 − r²)/(n − 2)).',
  'Een standaardfout van b₁, in dezelfde eenheid als de helling.')
p('mc-toetsen-aanvulling-correlatie', 'Een negatieve Pearson-r, n en H₀: ρ = 0 bij enkelvoudige regressie.',
  'De correlatie wordt omgezet naar een getekende t met n − 2 vrijheidsgraden.',
  'Gebruik t = r√(n − 2)/√(1 − r²) en behoud het minteken van r.',
  'Een t-toetsingsgrootheid, geen R² of alleen absolute sterkte.')
p('mc-toetsen-aanvulling-interval', 'b₁, zijn standaardfout en een passende tweezijdige kritieke t.',
  'Een coëfficiëntinterval kan aan de bijbehorende toets tegen nul worden gekoppeld.',
  'Vorm b₁ ± t × s_b1 en controleer of nul binnen de grenzen ligt.',
  'Het interval plus de passende tweezijdige toetsbeslissing op hetzelfde niveau.')

# Diagnostiek: herken het aspect van de residuen, niet alleen een toetsnaam.
p('diagnostiek-1', 'n en “cursusgrenzen voor gestandaardiseerde residuen”.',
  'Je zoekt de cursusregel voor opvallende residuen, afhankelijk van de omvangscategorie.',
  'Vergelijk n met 100: de cursus gebruikt ±2 bij n ≤ 100 en ±3 bij n > 100.',
  'Twee residugrenzen, geen Cook-grens of toets op normaliteit.')
p('diagnostiek-2', 'Het woord “invloedrijke” bij waarnemingen.',
  'Invloed gaat over hoeveel een punt de geschatte regressie verandert.',
  'Koppel dit aan Cook’s Distance; een groot residu en een extreme x zijn afzonderlijke kenmerken.',
  'De diagnostische maat voor invloed op het model.')
p('diagnostiek-3', 'Shapiro-Wilk met p en α.',
  'Dit is een toets op normaliteit van de residuen.',
  'Vergelijk p met α en verbind de beslissing expliciet aan de normaliteitsaanname.',
  'Een toetsconclusie over residunormaliteit, niet over verbandsterkte of constante variantie.')
p('mc-diagnostiek-toepassing-1', 'De residuwolk wordt breder bij hogere voorspelde waarden.',
  'De spreiding verandert langs het voorspelde niveau.',
  'Koppel een trechtervorm aan mogelijke heteroscedasticiteit en controleer die aanname verder.',
  'Een aanwijzing voor niet-constante residuvariantie, geen automatisch bewijs van causaliteit.')
p('mc-diagnostiek-toepassing-2', 'Shapiro-Wilk en een p-waarde boven α; gevraagd is de zorgvuldigste formulering.',
  'Onvoldoende bewijs tegen een aanname is geen bewijs dat de aanname waar is.',
  'Formuleer de conclusie als niet verwerpen van normaliteit op het gekozen niveau.',
  'Een beperkte toetsconclusie zonder normaliteit als bewezen feit te presenteren.')
p('mc-diagnostiek-toepassing-3', 'Een grote Cook’s Distance en de vraag naar een vervolgstap.',
  'Het punt kan de regressieschatting sterk beïnvloeden, maar hoeft niet fout te zijn.',
  'Onderzoek invoer, context en gevoeligheid van het model voordat je over uitsluiten beslist.',
  'Een gemotiveerde onderzoeksstap, geen automatische verwijdering.')
p('mc-diagnostiek-aanvulling-uitbijter', 'De waarneming is juist ingevoerd en heeft een jaarlijks terugkerende verklaring.',
  'De afwijking kan een structureel patroon weerspiegelen in plaats van een invoerfout.',
  'Onderzoek of een dummy het terugkerende effect inhoudelijk kan weergeven en beoordeel daarna de diagnostiek opnieuw.',
  'Een onderbouwde modelbeoordeling; verander of verwijder de waarneming niet alleen om haar afwijking.')
p('mc-diagnostiek-aanvulling-autocorrectie', 'Een vergelijking met x_t én het vertraagde residu e_(t−1).',
  'Het vorige residu is een bekende extra voorspeller in het opnieuw geschatte model.',
  'Vul x_t en het vorige residu met hun tekens in alle termen van de vergelijking in.',
  'Een voorspelling voor tijdstip t, zonder een onbekend huidig residu te gebruiken.')
p('mc-diagnostiek-aanvulling-dw', 'Een geordende reeks residuen en de naam Durbin-Watson.',
  'd vergelijkt opeenvolgende verschillen met de totale residugrootte.',
  'Behoud de tijdsvolgorde; deel Σ(e_t − e_(t−1))² door Σe_t².',
  'De d-grootheid; een toetsbeslissing vraagt daarnaast passende tabelgrenzen.')
p('mc-diagnostiek-aanvulling-absres', 'r(x, |e|), een berekende t en een kritieke tweezijdige t.',
  'Absolute residuen meten foutgrootte; samenhang met x wijst op veranderende spreiding.',
  'Vergelijk |t| met de kritieke grens en koppel de beslissing aan constante variantie.',
  'Een aanwijzing over heteroscedasticiteit, niet over autocorrelatie of een causaal x-effect.')

# Voorspellen: individu/gemiddelde, toepassingsgebied en interpretatie.
p('voorspellen-1', '“Waar het smalst” bij een voorspellingsinterval.',
  'De afstand tussen x₀ en het steekproefgemiddelde van x beïnvloedt de onzekerheid.',
  'Zoek waar de term (x₀ − x̄)² minimaal is.',
  'Een plaats op de x-as, geen betrouwbaarheidspercentage.')
p('voorspellen-2', 'Een vergelijking tussen een interval voor het gemiddelde en voor één nieuwe waarneming.',
  'Een individueel interval bevat naast schattingsonzekerheid ook individuele residuspreiding.',
  'Herken in de individuele formule de extra 1 onder de wortel bij gelijk model en niveau.',
  'Welk interval breder is en welke extra onzekerheid dat verklaart.')
p('voorspellen-3', 'Een realisatie buiten het interval en de vraag wat daaruit volgt.',
  'Het interval signaleert een modelmatige afwijking, geen oorzaak.',
  'Scheid het statistische signaal van een bewijs van fout of fraude.',
  'Een aanleiding voor onderzoek, zonder een ongefundeerde oorzakelijke conclusie.')
p('mc-voorspellen-toepassing-1', 'Een voorspelde leeftijd buiten de leeftijden waarop het model is geschat.',
  'De voorspelling gebruikt een x buiten het waargenomen toepassingsgebied.',
  'Vergelijk de nieuwe x met de laagste en hoogste trainings-x en herken extrapolatie.',
  'Een kwalificatie van de voorspelling met aandacht voor onzekere geldigheid buiten het bereik.')
p('mc-voorspellen-toepassing-2', '“Eén nieuwe waarneming”, x₀ = x̄ en de formule met 1 + 1/n.',
  'Dit is een individueel voorspellingsinterval in het centrum van de data.',
  'Gebruik de extra 1 voor individuele spreiding en bereken ŷ ± t s_e√(1 + 1/n).',
  'Twee grenzen voor één toekomstige waarneming, niet voor het groepsgemiddelde.')
p('mc-voorspellen-toepassing-3', 'x₀ verschuift weg van x̄ terwijl alle overige modelgegevens gelijk blijven.',
  'Alleen de afstandsterm in de voorspellingsonzekerheid neemt toe.',
  'Volg de term (x₀ − x̄)² in de intervalformule om het effect op de marge te bepalen.',
  'De richting van de verandering in intervalbreedte, niet een nieuw betrouwbaarheidsniveau.')
p('mc-voorspellen-aanvulling-controleperiode', 'Een model uit basismaanden en een nieuwe controlemaand buiten het interval.',
  'De nieuwe maand wordt beoordeeld met een vooraf geschat basismodel.',
  'Onderzoek de afwijking en haar context zonder de controlemaand stilzwijgend als training te gebruiken.',
  'Een passende onderzoeksstap; geen automatisch foutbewijs of vervanging door de voorspelling.')

# Meervoudig: conditionele effecten en vergelijkbare modelmaten.
p('meervoudig-1', 'Twee dummycoëfficiënten B_HBO en B_WO; gevraagd is WO tegenover HBO.',
  'Beide coëfficiënten zijn verschillen met dezelfde referentiegroep.',
  'Trek B_HBO van B_WO af, bij gelijk gehouden overige voorspellers.',
  'Het voorspelde groepsverschil WO − HBO, niet het verschil met de referentiegroep.')
p('meervoudig-2', 'Een aantal verklarende variabelen “plus constante”, met k als vraag.',
  'k telt de voorspellers; de constante krijgt een aparte plaats in n − k − 1.',
  'Tel de verklarende variabelen en laat de constante buiten k.',
  'Het aantal voorspellers voor de model- en vrijheidsgradenformules.')
p('meervoudig-3', '“Waarom adjusted R²” bij modellen met meer voorspellers.',
  'Gewone R² houdt geen rekening met de prijs van extra modelomvang.',
  'Koppel adjusted R² aan correctie voor het aantal voorspellers en waarnemingen.',
  'Een reden om de gecorrigeerde fitmaat te gebruiken bij passende modelvergelijkingen.')
p('mc-meervoudig-toepassing-1', 'Een vergelijking met x én een dummy D, plus de codering voor groep B.',
  'Groepslidmaatschap wordt via de dummy als extra modelterm verwerkt.',
  'Zet D op de code van de genoemde groep en vul zowel x als D in.',
  'Eén voorspelde y inclusief constante, continue bijdrage en groepsbijdrage.')
p('mc-meervoudig-toepassing-2', 'Twee personen verschillen zowel in x als in dummycode; gevraagd is hoeveel hoger B is.',
  'Het totale voorspelde verschil bevat meer dan alleen het dummy-effect.',
  'Bereken voorspelling B − voorspelling A, of tel b_x(x_B − x_A) en b_D(D_B − D_A) op.',
  'Een getekend totaalverschil; de gelijke constante valt weg.')
p('mc-meervoudig-toepassing-3', 'Zelfde y en waarnemingen, meer voorspellers, hogere R² maar lagere adjusted R².',
  'De extra fit wordt afgewogen tegen extra modelomvang.',
  'Gebruik adjusted R² voor deze afweging en lees haar verandering apart van gewone R².',
  'Een onderbouwd fit-oordeel volgens deze maat, geen bewijs van causaliteit of universele modelkwaliteit.')
p('mc-meervoudig-aanvulling-beta', '“Beta” voor twee voorspellers in hetzelfde model, met een positief en een negatief teken.',
  'Gestandaardiseerde coëfficiënten kunnen in absolute grootte binnen dat model worden vergeleken.',
  'Vergelijk |Beta| voor grootte en behoud het teken apart voor richting.',
  'De grootste absolute gestandaardiseerde coëfficiënt; geen eurovoorspelling of causale rangorde.')

# Transformaties: welke kant is gelogaritmeerd en wat vraagt de uitkomst?
p('transformaties-1', 'De modelnaam “Power”.',
  'Een machtsverband wordt lineair door beide variabelen te logaritmeren.',
  'Koppel y = ax^b aan ln(y) = ln(a) + b ln(x).',
  'De passende transformatie van zowel y als x.')
p('transformaties-2', 'ln(ŷ) is gegeven, maar de oorspronkelijke voorspelling wordt gevraagd.',
  'De berekende waarde staat op de logschaal van de respons.',
  'Keer de natuurlijke logaritme om met exp op de volledige logvoorspelling.',
  'Een teruggetransformeerde voorspelling in de oorspronkelijke y-eenheid.')
p('transformaties-3', 'ln(ŷ) = b₀ + b₁x en “factor bij één extra x”.',
  'Een vaste toename op de logschaal wordt een vermenigvuldigingsfactor op de oorspronkelijke schaal.',
  'Neem exp van de verandering b₁ × 1 in de logvoorspelling.',
  'Een vermenigvuldigingsfactor, geen absoluut verschil van b₁ y-eenheden.')
p('mc-transformaties-toepassing-1', 'ŷ staat links; alleen x staat binnen ln(x).',
  'Het logaritmische model voorspelt y direct op de oorspronkelijke schaal.',
  'Bereken eerst ln(x) en vul dat in; exponentieer de uitkomst niet als y zelf ongelogd is.',
  'De voorspelde y-waarde in oorspronkelijke eenheden.')
p('mc-transformaties-toepassing-2', 'ln(ŷ) staat links en een concrete x wordt gegeven.',
  'Invullen geeft eerst een voorspelling op de logschaal.',
  'Bereken de volledige lineaire combinatie en pas daarna exp toe op die hele som.',
  'Een teruggetransformeerde puntschatting, niet de tussenuitkomst ln(ŷ).')
p('mc-transformaties-toepassing-3', 'Een machtsmodel ax^b en een verdubbeling van x; gevraagd is een factor.',
  'De verhouding tussen nieuwe en oude voorspelling wordt door de exponent bepaald.',
  'Deel a(2x)^b door ax^b; de voorfactor a valt weg.',
  'Een vermenigvuldigingsfactor voor ŷ, geen nieuwe absolute voorspelling.')
p('mc-transformaties-aanvulling-domein', 'Een positieve x kleiner dan 1 die in ln(x) wordt ingevuld.',
  'Het domein van ln vraagt positieve invoer; de loguitkomst mag negatief zijn.',
  'Controleer x > 0 en beoordeel het teken van ln(x) niet als domeinvoorwaarde.',
  'Een ja/nee-oordeel over toegestane invoer met de juiste voorwaarde.')
p('mc-transformaties-aanvulling-meervoudig', 'ln(ŷ), een logconstante en meerdere gewogen ln(x)-termen.',
  'Terugtransformeren zet een som van logtermen om in een product van machten.',
  'Gebruik exp van de hele som, of schrijf a × x₁^b₁ × x₂^b₂; behoud negatieve exponenten.',
  'Eén voorspelling op de oorspronkelijke y-schaal.')

# Modelbouw: overlap, geneste vergelijking en opnieuw schatten.
p('modelbouw-1', 'Tolerance gegeven en VIF gevraagd.',
  'De twee maten beschrijven dezelfde overlap tussen voorspellers in omgekeerde vorm.',
  'Gebruik VIF = 1/tolerance, niet 1 − tolerance.',
  'Een dimensieloze VIF-waarde.')
p('modelbouw-2', '“Begint met alle kandidaatvariabelen” bij een selectiemethode.',
  'De startpositie en de richting van selectie onderscheiden de methoden.',
  'Koppel starten met het volledige model en stapsgewijs verwijderen aan backward-selectie.',
  'De naam van de passende selectiemethode.')
p('modelbouw-3', 'Een variabele wordt verwijderd en het model moet opnieuw worden geschat.',
  'Coëfficiënten en toetsen zijn conditioneel op welke voorspellers zijn opgenomen.',
  'Beoordeel de resterende effecten met uitvoer uit het gewijzigde model.',
  'Een verklaring waarom oude coëfficiënten en p-waarden niet klakkeloos door kunnen worden gebruikt.')
p('mc-modelbouw-toepassing-1', 'Tolerance en een expliciete cursusgrens VIF > 10.',
  'Je moet eerst de maat omzetten en daarna het aangegeven criterium toepassen.',
  'Bereken 1/tolerance en vergelijk de VIF met de cursusgrens.',
  'De VIF én een oordeel over een multicollineariteitssignaal volgens die grens.')
p('mc-modelbouw-toepassing-2', 'Geneste modellen met dezelfde data en y, één extra variabele, twee SSR’s en MSE van het grote model.',
  'Een partiële F-toets beoordeelt de extra verklaarde variatie van de toegevoegde voorspeller.',
  'Deel de SSR-toename per extra vrijheid door MSE_groot en vergelijk F met de gegeven grens.',
  'Een toetsingsgrootheid plus een conclusie over de extra bijdrage.')
p('mc-modelbouw-toepassing-3', 'Backward-selectie, één verwijderde variabele en een volgende verwijderbeslissing.',
  'De oude p-waarden horen bij een andere combinatie van voorspellers.',
  'Schat het resterende model opnieuw en gebruik zijn nieuwe uitvoer voor de volgende stap.',
  'De eerstvolgende modelbouwactie, geen keuze op basis van de oude rangorde.')

# Validatie en tentamenantwoord: doel, gegevensgebruik en onderbouwing.
p('validatie-1', 'Voorspelfouten op een testset en de maat MSPR.',
  'MSPR is de gemiddelde gekwadrateerde voorspelfout op nieuwe waarnemingen.',
  'Kwadrateer alle testfouten, tel ze op en deel door het aantal testwaarnemingen.',
  'Een gemiddelde kwadratische fout; geen trainingsnoemer n − k − 1.')
p('validatie-2', '“Coëfficiënten voor de vergelijking” in de regressie-uitvoer.',
  'Een vergelijking in oorspronkelijke modeleenheden gebruikt ongestandaardiseerde coëfficiënten.',
  'Zoek de kolom B in Coefficients, inclusief de constante.',
  'De juiste tabel en kolom, geen Beta-kolom of ANOVA-waarde.')
p('validatie-3', '“Total df” in de ANOVA-tabel en gevraagd n.',
  'De totale kwadratensom gebruikt n − 1 vrijheidsgraden.',
  'Keer Total df = n − 1 om tot n = Total df + 1.',
  'Het aantal gebruikte waarnemingen, zonder aftrek voor k.')
p('mc-validatie-toepassing-1', 'Werkelijke testwaarden én voorspellingen, met MSPR als vraag.',
  'Eerst ontbreken de voorspelfouten; daarna volgt hun gemiddelde kwadraat.',
  'Bereken per testwaarneming y − ŷ, kwadrateer, tel op en deel door het aantal testwaarden.',
  'De MSPR op de testset, niet de som van fouten of de trainings-MSE.')
p('mc-validatie-toepassing-2', 'Trainings-MSE tegenover MSPR op een expliciet ongebruikte testset.',
  'De vergelijking gaat over generalisatie: prestaties op nieuwe gegevens.',
  'Vergelijk de foutmaten en onderzoek een duidelijke verslechtering buiten de training.',
  'Een signaal over voorspelprestatie, zonder één specifieke oorzaak of fraude als bewezen te stellen.')
p('mc-validatie-toepassing-3', 'Herhaald modellen kiezen op basis van dezelfde “testset”.',
  'Die gegevens sturen de modelkeuze en zijn daardoor onderdeel van de selectie geworden.',
  'Beoordeel hoe de set feitelijk is gebruikt, niet alleen haar naam.',
  'Een oordeel over de onafhankelijkheid van de eindcontrole.')
p('tentamen-1', 'Een nieuwe vraag kan een waarde, methode, toets of gemotiveerde conclusie verlangen.',
  'Het gevraagde eindresultaat bepaalt welke gegevens en bewerkingen relevant zijn.',
  'Markeer eerst het vraagwerkwoord en de grootheid of beslissing die je moet opleveren.',
  'Een passende eerste aanpakstap voordat je een formule of tabel kiest.')
p('tentamen-2', 'Het woord “volledige” bij regressiediagnose.',
  'De vraag gaat om de onderdelen van een navolgbaar diagnoseantwoord.',
  'Verbind de gebruikte tabel of afbeelding aan een berekening of signaal, trek de conclusie en geef bij een probleem een onderbouwde remedie.',
  'Een onderbouwde diagnose met passende vervolgstap, geen los getal of ja/nee.')
p('tentamen-3', 'Alle korte checks zijn goed, maar gevraagd wordt of de voorbereiding klaar is.',
  'Herkenning in korte vragen is iets anders dan zelfstandig een volledige open opgave uitwerken.',
  'Beoordeel ook methodekeuze, tussenstappen en conclusie in complete tentamenopgaven.',
  'Een vervolgstap om toepassen te oefenen, geen garantie van beheersing door alleen check-scores.')
p('mc-tentamen-toepassing-1', '“Beoordeel normaliteit” én “motiveer met de uitvoer”.',
  'De vraag vraagt een onderbouwde beslissing over residunormaliteit.',
  'Noem de passende toets, vergelijk p met α en verbind de uitkomst aan de residuen.',
  'Een controleerbare toetsconclusie met uitvoerbewijs, geen losse ja/nee of R².')
p('mc-tentamen-toepassing-2', 'Een al berekende totale n, uitgevoerde controles en expliciet “de uitbreiding”.',
  'De juiste tussenuitkomst is nog niet het gevraagde extra aantal.',
  'Trek het bestaande aantal van de totale behoefte af en controleer de optelsom terug.',
  'Extra controles met eventueel het nieuwe totaal ter verduidelijking.')
p('mc-tentamen-toepassing-3', 'Een interval, een opvallende realisatie en het werkwoord “bewijst” bij fraude.',
  'Een statistische grens beschrijft onzekerheid en bevat geen bewijs over intentie of oorzaak.',
  'Onderscheid een afwijkingssignaal van een inhoudelijke fraudeverklaring.',
  'Een beperkte statistische conclusie met aanleiding tot onderzoek, geen automatische fraudebeslissing.')


def key_for(question_id):
    """Basisvragen hebben in les en MC een andere, al bestaande ID."""
    match = re.fullmatch(r'mc-(.+)-basis-([1-3])', question_id)
    return f'{match[1]}-{match[2]}' if match else question_id


def apply_pattern(question):
    key = key_for(question['id'])
    if key not in PATTERNS:
        raise ValueError(f'Vraaggerichte herkenningsroute ontbreekt: {question["id"]}')
    route = deepcopy(PATTERNS[key])
    question['recognition'] = route
    question['pattern'] = (f'Herken: {route["signals"]} → Betekenis: {route["meaning"]} '
                           f'→ Aanpak: {route["approach"]} → Gevraagd antwoord: {route["answer"]}')
    return question


def validate_coverage(questions):
    keys = {key_for(question['id']) for question in questions}
    if keys != set(PATTERNS):
        raise ValueError(f'Herkenningsroutes ontbreken of zijn verouderd: {keys ^ set(PATTERNS)}')
