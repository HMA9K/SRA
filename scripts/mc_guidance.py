"""Vraaggerichte basisregels. Eigen uitleg bij gecontroleerde cursusbronnen.

Geen antwoordtekst of ingevulde berekeningen: dit is optionele hulp voor het oplossen.
De expliciete ID-koppeling voorkomt dat nieuwe vragen ongemerkt algemene hulp erven.
"""
from copy import deepcopy

def ref(source, page, locator):
    return dict(source=source, page=page, locator=locator)

TOPICS = {
 'beginnen': ('Populatie, steekproef en schatting', [
  'N is het aantal posten in de volledige populatie; n is het aantal onderzochte posten. Een hoofdletter W duidt hier het werkelijke populatietotaal aan; een dakje betekent dat dit totaal wordt geschat.',
  'Een schatting gebruikt steekproefgegevens om iets over de populatie te zeggen. Benoem eerst of een aantal, gemiddelde, totaal of onzekerheidsinterval wordt gevraagd.'], [ref('boek-h8a',1,'Boek p. 201; oorspronkelijke PDF p. 219'),ref('formules',1,'Formules 2-4: schatting, totaal en onzekerheid')]),
 'rekenen': ('Som, spreiding en standaardfout', [
  'Bij Σw² kwadrateer je iedere waarneming en tel je daarna op. Bij (Σw)² tel je eerst op en kwadrateer je de som. Dit zijn verschillende bewerkingen.',
  'De steekproefvariantie is s² = [Σw² − (Σw)²/n]/(n − 1). De standaardafwijking s is de wortel van s² en heeft weer dezelfde eenheid als de waarnemingen.'], [ref('formules',1,'Formule 1: steekproefvariantie; formule 4: onzekerheid van de schatting')]),
 'onzekerheid': ('Schatting, marge en interval', [
  'Een interval bestaat uit een puntschatting plus en/of min een marge E. Die marge is een kritieke t-waarde maal de standaardfout van de gevraagde schatting. De totale breedte van een tweezijdig interval is 2E.',
  'Bij betrouwbaarheid 1 − α gebruik je voor twee grenzen α/2 per staart; bij één grens gebruik je α in één staart. Kies ook de juiste vrijheidsgraden en volg de gevraagde afronding.'], [ref('formules',1,'Formules 2 en 4: interval en standaardfout'),ref('programma',4,'Afspraken over het gebruik van de tabellenbundel')]),
 'mpu': ('Directe schatter van een populatietotaal', [
  'De MPU-schatter gebruikt de werkelijke waarden: Ŵ = N × w̄. N hoort bij de hele populatie; w̄ en de spreiding s_w worden uit de steekproef bepaald.',
  'De standaardfout van dit totaal is N × s_w/√n × √((N − n)/(N − 1)). Een interval volgt uit Ŵ ± t × standaardfout. Laat de eindigheidscorrectie alleen weg als dat is toegestaan of expliciet wordt gevraagd.'], [ref('formules',1,'Formules 1-5: directe schatter'),ref('boek-basis',1,'Boek p. 92; oorspronkelijke PDF p. 110: voorwaarden en scheefheid')]),
 'verschil': ('Verschilschatter: teken en controledoel', [
  'In SRA is een verschil e = boekwaarde b − werkelijke waarde w. Een positief verschil is overwaardering; een negatief verschil betekent dat de werkelijke waarde hoger is.',
  'Schat de totale werkelijke waarde met Ŵ_V = B − N × ē. Voor de onzekerheid gebruik je de spreiding van de verschillen s_e, niet de spreiding van de boekwaarden of de werkelijke waarden.'], [ref('formules',1,'Formules 6-11: verschildefinitie, schatting en spreiding'),ref('slides',20,'PDF p. 20-22: toepassing en voorwaarden van de verschilschatter')]),
 'quotient': ('Quotiëntschatter: verhouding en totaal', [
  'De goedratio is q = Σw/Σb, berekend over dezelfde gecontroleerde posten. Gebruik de verhouding van de sommen; het ongewogen gemiddelde van afzonderlijke ratio’s hoeft niet gelijk te zijn.',
  'De geschatte werkelijke waarde van de hele populatie is Ŵ_Q = q × B, met B het bekende boektotaal van de populatie. Een totale overwaardering is B − Ŵ_Q.'], [ref('formules',1,'Formules 12-17: quotiëntschatter'),ref('boek-h8b',1,'Boek p. 211; oorspronkelijke PDF p. 229: verhouding tussen boekwaarde en werkelijke waarde')]),
 'regressieschatter': ('Regressieschatter met boekwaarden als hulpinformatie', [
  'De regressieschatter schat het totale W van de populatie. Zij corrigeert de directe schatting: Ŵ_R = Nw̄ + b₁(B − Nb̄), waarbij b₁ = R_bw × s_w/s_b.',
  'Bij dezelfde gegevens is s_R = s_MPU × √(1 − R_bw²). Deze berekende standaardfout is kleiner dan of gelijk aan die van MPU en vervangt niet de controle van de toepassingsvoorwaarden.'], [ref('formules',2,'Formules 18-24: regressieschatter'),ref('boek-h8b',6,'Boek p. 216; oorspronkelijke PDF p. 234: onzekerheid en voorwaarden')]),
 'steekproefomvang': ('Benodigde omvang en extra controles', [
  'E is de gewenste halve intervalbreedte. Gebruik de spreiding die bij de gekozen schatter hoort: s_w voor MPU, s_e voor verschil en s_q voor quotiënt. De kritieke t-waarde hangt af van de betrouwbaarheid, een- of tweezijdigheid en vrijheidsgraden.',
  'De berekende omvang is een totaal. Rond dat aantal naar boven af en trek pas daarna de al gecontroleerde posten af als de uitbreiding wordt gevraagd.'], [ref('formules',1,'Formules 5 en 11: steekproefomvang; formule 17: onzekerheid quotiëntschatter'),ref('formules',2,'Formule 24: omvang bij de regressieschatter')]),
 'stratificatie': ('Strata afzonderlijk berekenen en combineren', [
  'Maak onderscheid tussen Nᵢ (alle posten), nᵢ (gecontroleerde posten) en het steekproefgemiddelde w̄ᵢ per stratum. Tel Nᵢw̄ᵢ op over de bemonsterde strata en voeg het bekende totaal van een eventueel afzonderlijk, volledig gecontroleerd topstratum eenmaal toe.',
  'Bij onafhankelijke strata tel je de variantiebijdragen op. Neem daarna de wortel voor de gezamenlijke standaardfout. Een integraal gecontroleerd topstratum draagt wel waarde bij, maar geen steekproefvariantie.'], [ref('formules',2,'Formules 25-29: allocatie en combinatie van strata')]),
 'regressielijn': ('Voorspelling, residu en kleinste kwadraten', [
  'De geschatte lijn is ŷ = b₀ + b₁x. Vul eerst x in om de voorspelling ŷ te bepalen. Het residu is e = y − ŷ, dus waarneming min voorspelling.',
  'OLS kiest de coëfficiënten die de som van gekwadrateerde residuen (SSE) minimaliseren. Alleen de som van residuen vergelijken kan misleiden doordat positieve en negatieve fouten elkaar opheffen.'], [ref('formules',2,'Formules 30-34: model, regressielijn en residuele variantie'),ref('boek-h9a',1,'Boek p. 233 en verder; oorspronkelijke PDF p. 251 en verder')]),
 'anova': ('ANOVA: verklaarde en onverklaarde variatie', [
  'TotalSS = SSR + SSE. SSR is de verklaarde kwadratensom en SSE de resterende kwadratensom. Het verklaarde aandeel is R² = SSR/TotalSS.',
  'Bij een model met constante is k het aantal verklarende variabelen; de constante telt niet mee in k. De vrijheidsgraden zijn k voor regressie, n − k − 1 voor residu en n − 1 voor totaal. MSE = SSE/(n − k − 1), MSR = SSR/k en F = MSR/MSE.'], [ref('formules',3,'Formules 35-43: variantieanalyse en globale F-toets')]),
 'toetsen': ('Hypothese, toetsingsgrootheid en conclusie', [
  'De hypothese gaat over een populatieparameter zoals β of ρ. Een stijging hoort bij een positieve alternatieve richting, een daling bij een negatieve; een verband zonder richting is tweezijdig.',
  'Voor H₀: β = 0 gebruik je t = B/Std. Error. Vergelijk een tweezijdige p-waarde met α. Bij een eenzijdige conclusie moet ook het teken van het gevonden effect bij de gevraagde richting passen.'], [ref('formules',3,'Formules 39-43: t- en F-toets'),ref('formules',4,'Formules 61-62: globale en individuele toets'),ref('attentie',4,'PDF p. 4-5: hypothesen en conclusies')]),
 'diagnostiek': ('Diagnose onderbouwen met de juiste uitvoer', [
  'Benoem eerst welke aanname of welk soort afwijking wordt onderzocht. Gestandaardiseerde residuen betreffen uitbijters in y, Mahalanobis Distance uitbijters in x en Cook’s Distance de mogelijke invloed op het model.',
  'Een opvallende waarde is aanleiding tot onderzoek. Koppel de uitvoer aan een conclusie en een onderbouwde remedie; verwijder een geldige waarneming niet uitsluitend om het model mooier te maken.'], [ref('formules',3,'Formules 44-49: regressiediagnostiek'),ref('attentie',5,'PDF p. 5-6: analyses, oorzaken en remedies')]),
 'voorspellen': ('Voorspelling en voorspellingsinterval', [
  'Bepaal of één nieuwe waarneming of het gemiddelde bij x₀ wordt gevraagd. Voor één waarneming bevat de marge de extra term 1 onder de wortel: t × s_e × √(1 + 1/n + (x₀ − x̄)²/((n − 1)s_x²)).',
  'Het interval is bij gelijk model het smalst rond x̄. Verder weg neemt de onzekerheid toe. Controleer bovendien of x₀ binnen het gebied ligt waarop het model is geschat.'], [ref('formules',3,'Formule 50: individuele voorspelling'),ref('attentie',6,'Voorspelling en nadere controle bij een afwijkende realisatie')]),
 'meervoudig': ('Meervoudige regressie: model en vergelijking', [
  'Vul alle verklarende variabelen in dezelfde modelvergelijking in: ŷ = b₀ + b₁x₁ + … + bₖxₖ. De constante telt niet mee in k. Gebruik in oorspronkelijke eenheden de B-coëfficiënten.',
  'Een dummy is 0 of 1 volgens de gegeven codering. Een coëfficiënt beschrijft het verschil bij gelijkblijvende andere kenmerken. Vergelijk modellen alleen op passende, onderling vergelijkbare gegevens en uitkomstschaal.'], [ref('formules',3,'Formules 51-54: model, adjusted R² en aantal variabelen'),ref('attentie',7,'PDF p. 7-8: meervoudige regressie en uitvoer')]),
 'transformaties': ('Welke variabele is getransformeerd?', [
  'Logarithmic gebruikt ln(x) en laat y op de oorspronkelijke schaal. Exponential gebruikt ln(ŷ) met x. Power gebruikt zowel ln(ŷ) als ln(x). Lees dus eerst op welke schaal de vergelijking staat.',
  'Terugtransformeren van ln(ŷ) doe je met exp: ŷ = exp(de volledige rechterkant). Het oorspronkelijke getal binnen ln moet positief zijn; de logwaarde zelf mag nul of negatief zijn.'], [ref('formules',3,'Formules 55-58: exponentieel, macht en logaritmisch'),ref('attentie',7,'PDF p. 7-8: transformaties en meervoudige terugtransformatie')]),
 'modelbouw': ('Variabelenselectie en multicollineariteit', [
  'Backward begint met alle kandidaatvariabelen; forward bouwt het model op. Na toevoegen of verwijderen wordt het model opnieuw geschat, omdat coëfficiënten en p-waarden kunnen veranderen.',
  'VIF = 1/Tolerance. De in SRA gebruikte signaleringsgrens is VIF > 10. Bij modelselectie moet je de opgegeven selectiegrens en de bijbehorende modeluitvoer volgen.'], [ref('formules',4,'Formules 59-63: VIF, toetsen en modelvergelijking'),ref('attentie',7,'PDF p. 7-8: modelbouw en multicollineariteit')]),
 'validatie': ('Uitvoer lezen en op nieuwe gegevens beoordelen', [
  'De vergelijking in oorspronkelijke eenheden gebruikt de kolom Unstandardized Coefficients B, inclusief Constant. In een ANOVA-tabel is Total df = n − 1.',
  'MSPR is het gemiddelde van (yᵢ − ŷᵢ)² op nieuwe testwaarnemingen. Deel door het aantal testwaarnemingen. Een model dat goed past op trainingsdata hoeft nog niet goed te voorspellen op nieuwe data.'], [ref('formules',4,'Formule 64: gemiddelde kwadratische voorspelfout'),ref('attentie',8,'PDF p. 8-9: validatie')]),
 'tentamen': ('Van de vraag naar een onderbouwd antwoord', [
  'Benoem wat gevraagd wordt, selecteer de relevante casusgegevens en kies daarna de methode. Maak onderscheid tussen een totaal en een uitbreiding, een puntschatting en een interval, en een signaal en bewijs.',
  'Een volledig antwoord bevat berekening of relevante uitvoer, een conclusie in de context van de casus en een eventuele vervolgactie. Alleen een formule noemen of een keuze aankruisen oefent niet de hele open uitwerking.'], [ref('programma',4,'PDF p. 4-5: toetsing en toepassing van de leerstof'),ref('attentie',5,'PDF p. 5-6: bij analyses uitvoer, conclusie en remedie')])
}

# Per regel: vraag-ID-suffixen die dezelfde concrete beslisstap oefenen, gevolgd door de hulp.
FOCUS = {
 'beginnen': [
  ('basis-1', 'Houd het aantal onderzochte posten en het aantal posten waarover je een uitspraak wilt doen uit elkaar.'),
  ('basis-2 basis-3', 'Een geschatte grootheid is nog niet de onbekende werkelijke waarde. Bepaal op welke populatiegrootheid de uitspraak betrekking heeft.'),
  ('toepassing-1', 'Gebruik bij een populatietotaal het populatieaantal en het steekproefgemiddelde. Het steekproeftotaal beantwoordt een andere vraag.'),
  ('toepassing-2', 'Controleer hoe de posten zijn gekozen. Selecteren op lage waarden kan systematisch afwijken van de hele populatie; een grotere selectieve steekproef neemt die vertekening niet vanzelf weg.'),
  ('toepassing-3', 'De onzekerheid hoort bij de geschatte grootheid. Een interval voor het totaal zegt niet waar individuele posten liggen.')],
 'rekenen': [
  ('basis-1', 'Let op de plaats van het kwadraat: schrijf bij een som van kwadraten eerst voor elke waarneming haar eigen kwadraat op.'),
  ('basis-2', 'Een variantie heeft een gekwadrateerde eenheid. Neem de wortel om de standaardafwijking in de oorspronkelijke eenheid te krijgen.'),
  ('basis-3 toepassing-3', 's beschrijft spreiding tussen posten. s/√n beschrijft, zonder eindigheidscorrectie, de standaardfout van het geschatte gemiddelde. Voor een populatietotaal komt daar een factor N bij.'),
  ('toepassing-1 toepassing-2', 'Bij een uit de steekproef geschat gemiddelde heeft de steekproefvariantie n − 1 in de noemer. Neem pas daarna een wortel als s wordt gevraagd.')],
 'onzekerheid': [
  ('basis-1 toepassing-1', 'Zet betrouwbaarheid eerst om in α. Verdeel die resterende kans alleen over twee staarten wanneer twee grenzen worden gevraagd.'),
  ('basis-2', 'Breedte loopt van ondergrens tot bovengrens; de marge E loopt van de puntschatting tot één grens.'),
  ('basis-3', 'Volgens de cursusafspraak kies je bij ontbrekende exacte vrijheidsgraden de eerst lagere beschikbare rij in de t-tabel. Bij df > 200 gebruik je echter de onderste rij van de tabel. Houd de staartkans hetzelfde.'),
  ('aanvulling-bovengrens', 'Gebruik voor een bovengrens de puntschatting plus de marge en de gegeven eenzijdige kritieke waarde.'),
  ('toepassing-2', 'Werk eerst de berekening uit met ongeronde tussenwaarden. Bij naar buiten afronden gaat de ondergrens omlaag en de bovengrens omhoog op de gevraagde eenheid.'),
  ('toepassing-3', 'Bij gelijkblijvende betrouwbaarheid en spreiding vermindert een grotere geschikte steekproef de standaardfout. Afronden is geen statistische verbetering.')],
 'mpu': [
  ('basis-1', 'Verwar de onderzochte n posten niet met alle N posten: de vraag gaat over het totale bedrag van de populatie.'),
  ('basis-2', 'Kies de spreiding van werkelijke waarden. MPU gebruikt geen verschil- of ratiocorrectie op een bekend boektotaal.'),
  ('basis-3 toepassing-3', 'Wanneer alle posten zijn gecontroleerd, resteert geen steekproefonzekerheid over hun totaal. De posten zelf kunnen nog steeds onderling verschillen.'),
  ('toepassing-1', 'Gevraagd is de standaardfout van het totaal, niet die van één post of alleen het gemiddelde. Volg de expliciete aanname over de eindigheidscorrectie.'),
  ('aanvulling-scheef', 'Aselecte selectie en een grote n zijn belangrijk, maar bij een extreem scheve populatie kan een gebruikelijke omvangsgrens onvoldoende zijn voor de normale benadering.'),
  ('toepassing-2', 'Bereken achtereenvolgens de puntschatting, standaardfout en marge. De eindigheidscorrectie hoort in de standaardfout, niet in de puntschatting.')],
 'verschil': [
  ('basis-1', 'Gebruik consequent boekwaarde min werkelijke waarde. Kies het teken vóór je de getallen invult.'),
  ('basis-2', 'De SRA-cursus gebruikt voor deze methode als aantalsvoorwaarde ten minste 30 fouten in de steekproef: posten waarvan de boekwaarde afwijkt van de werkelijke waarde (b ≠ w). Tel deze afwijkende posten, niet het totale aantal controles.'),
  ('basis-3', 'De nauwkeurigheid hangt af van de spreiding van de verschillen. Vergelijk die met de spreiding van werkelijke waarden bij MPU.'),
  ('toepassing-1 toepassing-2', 'B betreft de hele populatie. Trek N maal het gemiddelde verschil af; bij een negatief gemiddeld verschil werkt de correctie juist verhogend.'),
  ('toepassing-3', 'Gebruik s_V = N × s_e/√n wanneer de eindigheidscorrectie expliciet buiten beschouwing blijft. Vorm het interval rond B − Nē.')],
 'quotient': [
  ('basis-1', 'De teller en noemer moeten op dezelfde steekproef slaan: werkelijke waarde boven, boekwaarde onder.'),
  ('basis-2 toepassing-2', 'Onderzoek of de afwijking vooral een vast bedrag of een vaste verhouding is. Vergelijk boekwaarde en werkelijke waarde van dezelfde post.'),
  ('basis-3 toepassing-1', 'Bereken q uit de gecontroleerde posten en pas deze vervolgens toe op B van de volledige populatie.'),
  ('toepassing-3', 'Lees of de werkelijke waarde of juist de overwaardering wordt gevraagd. De overwaardering is het verschil tussen boektotaal en geschatte werkelijke waarde.')],
 'regressieschatter': [
  ('basis-1 toepassing-2', 'De hulpinformatie corrigeert voor het verschil tussen het bekende boektotaal B en het uit de steekproef opgeschaalde boektotaal Nb̄. Werk dit verschil afzonderlijk uit.'),
  ('basis-2 toepassing-3', 'De vermenigvuldigingsfactor zet s_MPU om in s_R. Kwadrateer eerst R, trek af van 1 en neem daarna de wortel; de factor is niet R² zelf.'),
  ('basis-3', 'Deze schattingsmethode gebruikt het verband tussen boekwaarde en werkelijke waarde om een populatietotaal te schatten. Dat is een ander doel dan een nieuwe individuele y voorspellen.'),
  ('toepassing-1', 'De helling gebruikt correlatie maal de verhouding van de spreidingen: s_w staat boven s_b. Het teken komt uit de correlatie.'),
  ('aanvulling-dekking', 'Een smaller berekend interval bewijst op zichzelf niet dat de beoogde betrouwbaarheid wordt gehaald. De gegevens en toepassingsvoorwaarden moeten bij de methode passen.')],
 'steekproefomvang': [
  ('basis-1 basis-2 toepassing-3', 'Een fractie van een controle is niet mogelijk. Rond het vereiste totale aantal omhoog; bereken de extra controles ten opzichte van wat al is gedaan.'),
  ('basis-3', 'Bij de verschilschatter bepaalt s_e² de benodigde omvang. Gebruik niet automatisch de variantie van alle werkelijke waarden.'),
  ('toepassing-1', 'Zet een gevraagde totale intervalbreedte eerst om in E. De formule gebruikt de halve breedte.'),
  ('toepassing-2 aanvulling-quotient', 'Vul γ = E²/(t²Ns²) in met de spreiding van de opgegeven methode. Bereken daarna n = N/(1 + γ) en rond het totale n omhoog.')],
 'stratificatie': [
  ('basis-1', 'Bij evenredige allocatie is het aandeel in de steekproef gelijk aan het aandeel in de populatie: nᵢ = n × Nᵢ/ΣNᵢ.'),
  ('basis-2 toepassing-3', 'Kwadrateer de standaardfouten, tel de varianties op en neem de wortel. Gebruik voor een totaalinterval één bijpassende kritieke t met de opgegeven effectieve vrijheidsgraden.'),
  ('basis-3', 'Integraal gecontroleerd betekent nᵢ = Nᵢ. Hierdoor is de eindigheidscorrectie nul; dit zegt niets over verschillen tussen de bedragen binnen dat stratum.'),
  ('toepassing-1', 'Een bekend topstratumtotaal tel je eenmaal op. Het is geen steekproefgemiddelde dat opnieuw met een populatieaantal moet worden vermenigvuldigd.'),
  ('aanvulling-boekgrens', 'Bij grenzen via gelijke cumulatieve boekwaarde deel je het boektotaal zonder topstratum door het gewenste aantal strata. Zoek de cumulatieve doelen vervolgens in de klassetabel.'),
  ('toepassing-2', 'Neyman gebruikt bij gelijke controlekosten de gewichten Nᵢsᵢ. Deel elk gewicht door de som van de gewichten en vermenigvuldig met de totale n.'),
  ('aanvulling-wortel', 'Bij de cumulatieve wortelmethode neem je per klasse √(klassebreedte × frequentie). Tel de wortels op; neem niet achteraf één wortel van de som van producten.'),
  ('aanvulling-uitbreiding', 'Maak onderscheid tussen de benodigde totale nᵢ en de uitbreiding binnen dat ene stratum. Rond het totaal eerst omhoog.'),
  ('aanvulling-varianties', 'De maximaal toegestane totale variantie is (E/t)². Trek de variantiebijdragen van de overige strata daarvan af om de ruimte voor het aan te passen stratum te bepalen.')],
 'regressielijn': [
  ('basis-1', 'De lijn levert een voorspelde y. Vul de gegeven x in en voer vermenigvuldiging vóór optelling uit.'),
  ('basis-2 toepassing-1', 'Het residu is waargenomen y min voorspelde ŷ. Een positief residu ligt boven de lijn, een negatief residu eronder.'),
  ('basis-3 toepassing-2', 'Het OLS-criterium vergelijkt gekwadrateerde fouten voor dezelfde gegevens. Tel de kwadraten, niet alleen de getekende residuen.'),
  ('toepassing-3', 'Samenhang is geen bewijs van causaliteit en een gemiddelde tendens geldt niet noodzakelijk voor elk individu.'),
  ('aanvulling-mse', 'Zonder ANOVA-uitvoer kun je bij enkelvoudige regressie formule 34 gebruiken: s_e² = (n − 1)/(n − 2) × (1 − r²) × s_y². Dit geeft een variantie, geen standaardafwijking.')],
 'anova': [
  ('basis-1 toepassing-1', 'Het verklaarde aandeel heeft TotalSS in de noemer. De niet-verklaarde fractie is 1 − R².'),
  ('basis-2', 'Trek voor residuele vrijheidsgraden zowel de k verklarende variabelen als de constante van n af.'),
  ('basis-3 toepassing-3', 'Std. Error of the Estimate is √MSE. R² betreft verklaarde variatie, niet het percentage exact voorspelde waarnemingen.'),
  ('toepassing-2', 'Bereken eerst de twee mean squares met hun eigen vrijheidsgraden. SSR/SSE rechtstreeks delen geeft niet de globale F.')],
 'toetsen': [
  ('basis-1', 'Formuleer de verwachte richting voor de populatiehelling, niet voor één losse waarneming.'),
  ('basis-2', 'Vergelijk de volledige tweezijdige p met α. H₀ niet verwerpen is iets anders dan bewijzen dat H₀ waar is.'),
  ('basis-3 toepassing-3', 'De globale F toetst gezamenlijk of alle hellingen nul zijn. Een individuele t-toets gaat over één bijdrage gegeven de overige voorspellers; de conclusies hoeven niet gelijk te zijn.'),
  ('toepassing-1', 'Gebruik de B-coëfficiënt en haar eigen Std. Error uit dezelfde modelrij. De hypothese bepaalt welke nulwaarde je van B aftrekt.'),
  ('toepassing-2', 'Controleer de gevonden richting vóór je een eenzijdige p afleidt. Een klein tweezijdig p-getal bewijst geen stijging als de helling negatief is.'),
  ('aanvulling-hellingse', 'Bij enkelvoudige regressie: s_b1 = (s_y/s_x) × √((1 − r²)/(n − 2)). Verwar deze standaardfout niet met s_y of de residuele spreiding.'),
  ('aanvulling-correlatie', 'Voor H₀: ρ = 0 bij enkelvoudige regressie geldt t = r√(n − 2)/√(1 − r²). Het teken van r blijft behouden.'),
  ('aanvulling-interval', 'Het interval voor de populatiehelling is b₁ ± t × s_b1. Nul buiten het bijpassende tweezijdige interval betekent verwerping van H₀: β₁ = 0 op dat niveau.')],
 'diagnostiek': [
  ('basis-1', 'De SRA-grenzen voor gestandaardiseerde residuen zijn ±2 bij n ≤ 100 en ±3 bij n > 100. Overschrijding duidt op een mogelijke uitbijter, niet meteen op een verwijderbesluit.'),
  ('basis-2 toepassing-3', 'Cook’s Distance signaleert potentiële invloed. Onderzoek daarna de positie in het spreidingsdiagram en de casusoorzaak. Een grote waarde alleen rechtvaardigt geen automatische verwijdering.'),
  ('basis-3 toepassing-2', 'Bij normaliteit is H₀ dat de residuen normaal verdeeld zijn. Gebruik de gegeven toets; bij eigen keuze volgt SRA Shapiro-Wilk voor n ≤ 50 en Kolmogorov-Smirnov voor n > 50. Vergelijk p met de opgegeven α.'),
  ('toepassing-1', 'Homoscedasticiteit betekent constante spreiding van residuen. Let op de breedte van de residuwolk over x of de voorspelde waarden, niet alleen op het gemiddelde residu.'),
  ('aanvulling-uitbijter', 'Onderscheid een invoerfout, een eenmalige bijzondere oorzaak en een terugkerende omstandigheid. Een terugkerende omstandigheid kan aanleiding zijn om het model inhoudelijk uit te breiden.'),
  ('aanvulling-autocorrectie', 'Gebruik in de extra term het residu van de vorige periode met zijn eigen teken. Vul niet het huidige residu of de vorige voorspelling in.'),
  ('aanvulling-dw', 'Durbin-Watson deelt Σ(e_t − e_(t−1))² door Σe_t². De teller begint bij het tweede residu; de noemer omvat alle residuen.'),
  ('aanvulling-absres', 'Een correlatietoets tussen x en de absolute residuen onderzoekt samenhang tussen x en de foutgrootte. Vergelijk de absolute t met de tweezijdige kritieke grens en concludeer over de spreiding.')],
 'voorspellen': [
  ('basis-1 toepassing-3', 'De afstandsterm (x₀ − x̄)² wordt groter naarmate de nieuwe x verder van het steekproefgemiddelde ligt. Houd bij vergelijken het model en de overige gegevens gelijk.'),
  ('basis-2', 'Een interval voor één nieuwe waarneming omvat zowel onzekerheid in de geschatte lijn als individuele spreiding. Het interval voor het gemiddelde heeft die extra individuele spreiding niet.'),
  ('basis-3 aanvulling-controleperiode', 'Een realisatie buiten het interval is een controlesignaal. Onderzoek gegevens, omstandigheden en modelaannamen voordat je een oorzaak concludeert.'),
  ('toepassing-1', 'Een voorspelling buiten het gebruikte x-bereik is extrapolatie. Dat de formule een getal oplevert, betekent niet dat het verband daar is onderbouwd.'),
  ('toepassing-2', 'Bij x₀ = x̄ vervalt alleen de afstandsterm. Voor één nieuwe waarneming blijven 1 en 1/n onder de wortel staan.')],
 'meervoudig': [
  ('basis-1', 'Vergelijk dummycoëfficiënten alleen binnen hetzelfde model en ten opzichte van dezelfde referentiecategorie. Bij gelijke overige kenmerken is het contrast B_groep2 − B_groep1.'),
  ('basis-2', 'k telt uitsluitend de verklarende variabelen. De constante wordt apart geschat en heeft haar eigen vrijheidsgraad.'),
  ('basis-3 toepassing-3', 'R² kan door toevoegen van variabelen stijgen zonder nuttige verbetering. Adjusted R² houdt rekening met n en k; vergelijk modellen voor dezelfde y en dezelfde waarnemingen.'),
  ('toepassing-1 toepassing-2', 'Vul voor iedere persoon haar of zijn eigen x-waarden en dummycodes in. Bereken bij een verschil twee voorspellingen of trek de modeltermen zorgvuldig van elkaar af.'),
  ('aanvulling-beta', 'Beta is een gestandaardiseerde coëfficiënt. Vergelijk teken en absolute grootte binnen hetzelfde model; Beta is niet de B waarmee je in oorspronkelijke eenheden voorspelt en bewijst geen causaliteit.')],
 'transformaties': [
  ('basis-1', 'Bij een machtsmodel worden beide variabelen logaritmisch beschreven. Terugtransformeren levert een constante maal x tot een macht.'),
  ('basis-2 toepassing-2', 'Voer exp uit op de volledige voorspelde logwaarde. Terugtransformeer niet afzonderlijk alleen de constante of alleen de x-term.'),
  ('aanvulling-domein', 'Controleer het oorspronkelijke argument van ln. Een positief getal kleiner dan 1 heeft een negatieve logwaarde, maar is wel toegestaan.'),
  ('basis-3', 'In een exponentieel model is de factor per extra eenheid x gelijk aan exp(b₁). Dat is een vermenigvuldigingsfactor, geen vaste optelling op de y-schaal.'),
  ('toepassing-1', 'Als alleen x is gelogaritmeerd, blijft de voorspelde y op de oorspronkelijke schaal. Gebruik de natuurlijke logaritme uit de vergelijking.'),
  ('toepassing-3', 'In ŷ = a × x^b geeft vermenigvuldiging van x met c een factor c^b in de voorspelling.'),
  ('aanvulling-meervoudig', 'Bij ln(ŷ) = b₀ + b₁ln(x₁) + b₂ln(x₂) wordt ŷ = exp(b₀) × x₁^b₁ × x₂^b₂. Een negatieve macht betekent delen.')],
 'modelbouw': [
  ('basis-1 toepassing-1', 'Tolerance en VIF zijn elkaars omgekeerde. Een lage Tolerance betekent een hoge VIF; vergelijk met de expliciet gebruikte cursusgrens.'),
  ('basis-2', 'Let op het beginpunt van de procedure: alle kandidaatvariabelen tegelijk, of juist één voor één toevoegen.'),
  ('basis-3 toepassing-3', 'Een selectiebesluit verandert het geschatte model. Gebruik voor een volgende beslissing de nieuwe coëfficiënten en p-waarden, niet die van het vorige model.'),
  ('toepassing-2', 'Voor één toegevoegde variabele in geneste modellen op dezelfde data is de partiële F gelijk aan (SSR_groot − SSR_klein)/MSE_groot. Gebruik het uitgebreide model in de noemer.')],
 'validatie': [
  ('basis-1 toepassing-1', 'Koppel iedere waarneming aan haar eigen voorspelling. Kwadrateer de fouten en deel de som door het aantal testwaarnemingen, niet door n − k − 1.'),
  ('basis-2', 'Voor de vergelijking lees je B in de Coefficients-tabel. Beta is gestandaardiseerd en de t- of Sig.-kolom is geen regressiecoëfficiënt.'),
  ('basis-3', 'De totale kwadratensom gebruikt afwijkingen rond een geschat gemiddelde. Daarom is Total df één kleiner dan n.'),
  ('toepassing-2', 'Vergelijk trainingsfout en fout op ongebruikte testdata op dezelfde uitkomstschaal. Een veel grotere testfout is aanleiding om generaliseerbaarheid en modelkeuze te onderzoeken.'),
  ('toepassing-3', 'Een testset die herhaaldelijk voor modelkeuze wordt gebruikt, beïnvloedt die keuze. Voor een onafhankelijke eindcontrole zijn nog niet gebruikte gegevens nodig.')],
 'tentamen': [
  ('basis-1', 'Lees het werkwoord en het doel van de vraag voordat je een bekende formule kiest. Noteer welke grootheid of conclusie je uiteindelijk moet geven.'),
  ('basis-2 toepassing-1', 'Vermeld bij een diagnose de relevante tabel/grafiek en waarden, de conclusie, en waar nodig hypothesen en een passende remedie.'),
  ('basis-3', 'Goede begripchecks tonen niet automatisch dat je een open casus zelfstandig kunt uitwerken. Oefen ook gegevensselectie, berekening en onderbouwing zonder antwoordopties.'),
  ('toepassing-2', 'Bij uitbreiding vraagt men het nog te verrichten werk. Maak in het antwoord het onderscheid tussen vereist totaal en extra controles zichtbaar.'),
  ('toepassing-3', 'Een afwijkend resultaat wijst op nadere controle. Een statistisch interval kan op zichzelf geen specifieke oorzaak, zoals fraude, bewijzen.')]
}

def attach_guidance(topics):
    expected = set()
    for topic in topics:
        title, rules, refs = TOPICS[topic['id']]
        specific = {}
        for suffixes, focus in FOCUS[topic['id']]:
            for suffix in suffixes.split():
                qid = f"mc-{topic['id']}-{suffix}"
                assert qid not in expected, qid
                specific[qid] = focus
                expected.add(qid)
        for q in topic['questions']:
            assert q['id'] in specific, f"Vraaggerichte basisregel ontbreekt: {q['id']}"
            sources = deepcopy(refs)
            if topic['id'] == 'stratificatie' and '-aanvulling-' in q['id']:
                sources.append(ref('boek-h8c',1,'Boek p. 221-232; oorspronkelijke PDF p. 239-250: grenzen en uitbreiding'))
            if q['id'].endswith(('diagnostiek-aanvulling-dw','diagnostiek-aanvulling-autocorrectie')):
                sources.append(ref('boek-h9d',7,'Boek p. 279-283; oorspronkelijke PDF p. 297-301: autocorrelatie'))
            if q['id'].endswith('toetsen-aanvulling-interval'):
                sources.append(ref('boek-h9b',7,'Boek p. 255; oorspronkelijke PDF p. 273: interval van de helling'))
            if q['id'].endswith('meervoudig-aanvulling-beta'):
                sources.append(ref('boek-h10c',5,'Boek p. 318; oorspronkelijke PDF p. 336: gestandaardiseerde coëfficiënten'))
            q['guidance'] = dict(title=title, focus=specific[q['id']], rules=rules[:], refs=sources)
    actual = {q['id'] for t in topics for q in t['questions']}
    assert actual == expected, f"Basisregels zonder vraag: {expected - actual}"
