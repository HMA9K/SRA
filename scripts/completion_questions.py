"""Extra eigen oefenvarianten bij de geverifieerde cursusaanvullingen.

Nieuwe ID's, zodat opgeslagen antwoorden op de oorspronkelijke 114 vragen geldig blijven.
"""
from copy import deepcopy
from question_patterns import apply_pattern
QUESTIONS={}

def q(topic,key,level,prompt,options,steps,pattern,trap):
    QUESTIONS.setdefault(topic,[]).append(dict(id=f'mc-{topic}-aanvulling-{key}',level=level,
        prompt='Eigen oefenvraag. '+prompt,options=[o[0] for o in options],correct=0,
        optionExplanations=[o[1] for o in options],steps=steps,explanation=' '.join(steps),pattern=pattern,trap=trap))

q('onzekerheid','bovengrens',2,'Een gemiddelde is 80, de standaardfout is 2 en de gegeven eenzijdige t-waarde is 1,711. Wat is de 95%-bovengrens?',[
 ('83,422','Tel de eenzijdige marge 1,711 × 2 = 3,422 bij het gemiddelde 80 op.'),
 ('76,578','Aftrekken geeft een ondergrens. Hier wordt juist om de bovengrens gevraagd.'),
 ('81,711','Dit telt alleen t bij het gemiddelde op en laat de standaardfout 2 weg.'),
 ('86,844','Dit verdubbelt de marge. Voor één bovengrens gebruik je één keer t maal standaardfout.')],
 ['Gevraagd is één bovengrens, dus gebruik de gegeven eenzijdige t.','Marge = 1,711 × 2 = 3,422.','Bovengrens = 80 + 3,422 = 83,422. Dit begrenst het populatiegemiddelde, niet iedere losse waarneming.'],
 'Alleen een bovengrens gevraagd: tel de eenzijdige marge bij de schatting op.',
 'Gebruik niet automatisch de tweezijdige t-waarde of de volledige intervalbreedte.')
q('mpu','scheef',2,'Je hebt aselect 120 posten gekozen uit een extreem scheve populatie. Welke uitspraak is juist?',[
 ('Beoordeel of de normale benadering bruikbaar is','n ≥ 100 is een cursusvuistregel; extreme scheefheid kan een grotere steekproef noodzakelijk maken.'),
 ('Vanaf n = 100 is ieder interval gegarandeerd geldig','De vuistregel garandeert geen geldige benadering bij iedere mogelijke populatieverdeling.'),
 ('De populatie wordt normaal verdeeld door de steekproef','Meer controles veranderen de verdeling van de oorspronkelijke populatie niet.'),
 ('De t-waarde mag altijd nul worden','Een grotere steekproef neemt de gekozen onzekerheidsmarge niet automatisch volledig weg.')],
 ['De selectie is aselect, maar de populatie is extreem scheef.','Het boek nuanceert de cursusgrens n ≥ 100.','Beoordeel de benadering en de spreiding voordat je de intervaluitkomst gebruikt.'],
 'Een omvangsgrens en extreme scheefheid samen vragen om controle van de benadering.',
 'Een cursusvuistregel is geen garantie voor iedere verdeling.')
q('regressieschatter','dekking',2,'Bij gelijk betrouwbaarheidsniveau is het berekende regressieschattingsinterval smaller dan het MPU-interval. Wat volgt daaruit?',[
 ('Meer berekende precisie, mits de voorwaarden passen','De kleinere marge is meer berekende precisie. De geldigheid blijft afhangen van selectie en foutstructuur.'),
 ('De gekozen betrouwbaarheid is automatisch hoger','Bij hetzelfde gekozen niveau stijgt de betrouwbaarheid niet door een kleinere standaardfout.'),
 ('De werkelijke waarde ligt zeker in het interval','Een interval uit een steekproef geeft geen zekerheid dat de onbekende waarde erin ligt.'),
 ('Diagnostiek en voorwaarden zijn overbodig','Juist een ongeschikte foutstructuur kan een te smal en slecht dekkend interval opleveren.')],
 ['De betrouwbaarheid wordt in de vraag gelijk gehouden.','De factor √(1 − R²) verkleint de berekende standaardfout.','Controleer of het verband en de foutverdeling die berekening rechtvaardigen.'],
 'Vergelijk eerst het betrouwbaarheidsniveau en daarna de berekende marge en voorwaarden.',
 'Verwar een kleinere marge niet met gegarandeerde dekking.')
q('stratificatie','boekgrens',2,'Zonder topstratum is de boekwaarde € 15.872.128. Je wilt vier strata. Wat is het eerste cumulatieve doel?',[
 ('€ 3.968.032','De resterende boekwaarde gedeeld door vier geeft het eerste cumulatieve streefbedrag.'),
 ('€ 7.936.064','Dit is twee maal het streefbedrag en hoort bij de tweede grens, niet de eerste.'),
 ('€ 15.872.128','Dit is het totaal van alle vier strata, niet het doel voor de eerste grens.'),
 ('Vier even grote aantallen posten','Cumulatieve boekwaarde verdeelt bedragen. De aantallen posten hoeven niet gelijk te zijn.')],
 ['Het volledig gecontroleerde topstratum is al uitgesloten.','Deel 15.872.128 door vier: 3.968.032.','Kies daarna een beschikbare klassegrens bij dat cumulatieve bedrag.'],
 'Bij cumulatieve boekwaarde verdeel je de resterende totale boekwaarde over de strata.',
 'Bepalen van groepsgrenzen komt vóór het verdelen van controles.')
q('stratificatie','wortel',3,'Een klasse is € 400 breed en bevat 772 posten. Wat voeg je toe aan de cumulatieve wortelsom?',[
 ('Ongeveer 555,70','De bijdrage is √(400 × 772) = √308.800 ≈ 555,70.'),
 ('Ongeveer 27,78','Dit is alleen √772. Bij deze methode moet ook de klassebreedte meetellen.'),
 ('308.800','Dit is het product breedte × frequentie. De methode neemt daarvan eerst de wortel.'),
 ('1.172','Optellen van breedte en frequentie is niet de berekening uit deze stratificatiemethode.')],
 ['De klassebreedte is 400 en de frequentie is 772.','Bereken het product: 400 × 772 = 308.800.','Neem de wortel en tel 555,70 bij de eerdere wortelbijdragen op.'],
 'Bij ongelijke klassebreedtes gebruik je per klasse √(breedte × frequentie).',
 'Neem de wortel per klasse, niet pas na het cumuleren.')
q('stratificatie','uitbreiding',3,'Voor één stratum volgt een benodigde totale steekproefomvang van 32,65. Er zijn al 30 posten gecontroleerd. Hoeveel komen erbij?',[
 ('3','Rond de totale behoefte omhoog naar 33 en trek de 30 bestaande controles af.'),
 ('33','33 is het nieuwe totaal. De vraag vraagt alleen naar de aanvullende controles.'),
 ('2','Afronden naar 32 kan de vereiste nauwkeurigheid missen; de totale behoefte moet omhoog.'),
 ('63','Dit telt de bestaande controles nog eens bij de totale behoefte op en telt ze dubbel.')],
 ['32,65 is de nieuwe totale behoefte voor dit stratum.','Een minimumomvang rond je naar boven af: 33.','Aanvulling = 33 − 30 = 3. Je rapporteert dus drie extra controles en een nieuw stratumtotaal van 33 controles.'],
 'Bij uitbreiding: eerst de totale behoefte omhoog afronden, daarna bestaand n aftrekken.',
 'Verwar nieuwe totale omvang niet met het aanvullende aantal.')
q('stratificatie','varianties',3,'De gewenste totale marge E is 10 en t = 2. De andere strata hebben samen variantiebijdrage 16. Hoe groot mag de variantiebijdrage van het uit te breiden stratum maximaal zijn?',[
 ('9','De totale variantie mag maximaal (10/2)² = 25 zijn. Na aftrek van de andere strata resteert 25 − 16 = 9.'),
 ('25','Dit is de maximaal toegestane totale variantie. De bijdrage 16 van de andere strata moet er nog af.'),
 ('3','3 is de maximaal toegestane standaardfout van dit stratum. Gevraagd is de variantiebijdrage.'),
 ('−11','Dit trekt variantie 16 af van standaardfout 5. Die grootheden hebben verschillende eenheden.')],
 ['De maximaal toegestane totale standaardfout is E/t = 5.','Kwadrateer: de totale variantie mag maximaal 25 zijn.','Voor dit stratum resteert maximaal 25 − 16 = 9 aan variantiebijdrage; dat komt overeen met standaardfout 3.'],
 'Reken de gewenste totale marge eerst terug naar totale variantie en trek daarna de andere bijdragen af.',
 'Trek geen variantie af van een standaardfout.')
q('steekproefomvang','quotient',3,'Bij steekproefplanning met de quotiëntschatter zijn N = 1.000, t = 2, s_q = 7,60 en E = 1.000 gegeven. Gebruik γ = E²/(t²Ns_q²). Wat is de minimaal geplande totale n?',[
 ('188','γ ≈ 4,32825 en N/(1 + γ) ≈ 187,679. Afronden naar boven geeft 188.'),
 ('187','Dit rondt naar beneden af en kan daardoor de vereiste marge overschrijden.'),
 ('760','Dit vermenigvuldigt de resterende spreiding willekeurig en volgt de omvangsformule niet.'),
 ('1.000','Alle posten controleren is hier niet de minimaal berekende omvang volgens de gegeven formule.')],
 ['Gebruik s_q = 7,60 als resterende spreiding, niet de dimensieloze goedratio q.','γ = 1.000²/(2² × 1.000 × 7,60²) ≈ 4,32825.','n = 1.000/(1 + γ) ≈ 187,679; rond naar boven af op 188.'],
 'De omvangsformule gebruikt de resterende spreiding van de gekozen schatter.',
 'Vul niet de goedratio q in waar de spreiding s_q moet staan.')
q('regressielijn','mse',3,'Bij enkelvoudige regressie zijn n = 12, r = 0,80 en s_y = 5. Wat is de residuele variantie volgens formule 34?',[
 ('9,9','(11/10) × (1 − 0,80²) × 5² = 1,1 × 0,36 × 25 = 9,9.'),
 ('9','Dit mist de factor (n − 1)/(n − 2), die hier gelijk is aan 11/10.'),
 ('17,6','Dit gebruikt r² in plaats van het onverklaarde aandeel 1 − r².'),
 ('Ongeveer 3,146','Dit is de wortel van 9,9, dus de residuele standaardafwijking en niet de variantie.')],
 ['Het model heeft één verklarende variabele en een constante: df = n − 2 = 10.','Het onverklaarde aandeel is 1 − 0,80² = 0,36.','Residuele variantie = 11/10 × 0,36 × 25 = 9,9.'],
 'Zijn n, r en s_y gegeven zonder ANOVA, dan past formule 34 bij enkelvoudige regressie.',
 'Varianties zijn gekwadrateerd; neem alleen een wortel als s_e gevraagd wordt.')
q('toetsen','hellingse',3,'n = 12, r = 0,80, s_x = 2 en s_y = 5. Wat is s_b1 volgens formule 39?',[
 ('Ongeveer 0,47434','(5/2) × √((1 − 0,80²)/10) ≈ 0,47434.'),
 ('2,5','Dit is alleen de verhouding s_y/s_x. De wortelfactor ontbreekt.'),
 ('2','Dit is de regressiehelling r × s_y/s_x, niet de onzekerheid van die helling.'),
 ('0,036','Dit is alleen (1 − r²)/(n − 2), zonder wortel en zonder de verhouding van spreidingen.')],
 ['Vrijheidsgraden: 12 − 2 = 10.','De wortelfactor is √(0,36/10).','Vermenigvuldig met s_y/s_x = 5/2: s_b1 ≈ 0,47434. Dit is de onzekerheid van de geschatte helling, niet de helling zelf.'],
 'De standaardfout van de helling combineert beide spreidingen, r en de vrijheidsgraden.',
 'De geschatte helling b1 en haar standaardfout s_b1 zijn verschillende grootheden.')
q('toetsen','correlatie',3,'Bij enkelvoudige regressie zijn n = 12 en r = −0,80. Welke t hoort bij H0: rho = 0?',[
 ('Ongeveer −4,21637','Het teken van r blijft staan: −0,80√10/√0,36 ≈ −4,21637.'),
 ('Ongeveer 4,21637','De absolute grootte klopt, maar de richting is omgedraaid door het minteken te verliezen.'),
 ('−0,80','Dit is de correlatie zelf. Een correlatie is nog niet de t-toetsingsgrootheid.'),
 ('0,64','Dit is r² en beschrijft verklaarde variatie, niet de toetsingsgrootheid.')],
 ['Voor de correlatietoets is df = n − 2 = 10.','Vul r = −0,80 in, inclusief het teken.','t = −0,80√10/√(1 − 0,64) ≈ −4,21637. Het negatieve teken blijft behouden en beschrijft de richting van het verband.'],
 'Een negatieve Pearson-correlatie geeft bij deze toets ook een negatieve t.',
 'Gebruik de gewone r van enkelvoudige regressie, niet de meervoudige Model Summary R.')
q('toetsen','interval',3,'b1 = 2, s_b1 = 0,5 en de gegeven tweezijdige kritieke t = 2. Wat volgt uit het bijpassende interval?',[
 ('Interval [1; 3]; H0: beta1 = 0 verwerpen','2 ± 2 × 0,5 geeft [1; 3]. Nul ligt er buiten, dus de passende tweezijdige toets verwerpt H0.'),
 ('Interval [1; 3]; H0 niet verwerpen','Het interval is goed, maar het uitsluiten van nul betekent juist verwerpen op het passende niveau.'),
 ('Interval [1,5; 2,5]; H0 verwerpen','Dit gebruikt alleen de standaardfout als marge en vergeet de kritieke t-waarde.'),
 ('Interval [0; 4]; alle hellingen zijn even waarschijnlijk','Dit gebruikt een verkeerde marge en een betrouwbaarheidsinterval verdeelt geen gelijke kansen over parameters.')],
 ['Marge = t × s_b1 = 2 × 0,5 = 1.','Interval = [2 − 1; 2 + 1] = [1; 3].','Nul ligt buiten het interval: verwerp H0 bij de bijpassende tweezijdige toets op hetzelfde significantieniveau.'],
 'Interval en toets horen bij elkaar als model, betrouwbaarheid en toetsrichting overeenkomen.',
 'Trek deze conclusie niet met een interval van een ander niveau.')
q('meervoudig','beta',2,'In hetzelfde model heeft X1 Beta = −0,385 en X2 Beta = 0,592. Welke interpretatie is passend?',[
 ('X2 heeft de grootste absolute gestandaardiseerde coëfficiënt','Vergelijk |−0,385| met |0,592|. X2 heeft de grotere gestandaardiseerde coëfficiënt in dit model.'),
 ('X1 heeft geen verband omdat Beta negatief is','Negatief geeft de richting aan. Het betekent niet dat er geen verband is.'),
 ('Gebruik Beta om bedragen in euro te voorspellen','Voor voorspellen in de oorspronkelijke modeleeneenheden gebruik je B, niet de gestandaardiseerde Beta.'),
 ('X2 is bewezen de belangrijkste oorzaak','De vergelijking binnen één model levert geen bewijs van causaliteit of universeel belang.')],
 ['Het gaat om Beta binnen hetzelfde model.','De absolute waarden zijn 0,385 en 0,592.','X2 heeft de grootste absolute Beta; het verband is positief, dat van X1 negatief.'],
 'Beta vergelijkt gestandaardiseerde coëfficiënten binnen hetzelfde gekozen model.',
 'Gebruik B voor de regressievergelijking en maak van samenhang geen causaliteit.')
q('transformaties','domein',1,'Mag x = 0,5 worden gebruikt als verklarende variabele in ln(x)?',[
 ('Ja, want x is positief','De oorspronkelijke waarde 0,5 is positief. ln(0,5) is negatief, maar dat is toegestaan.'),
 ('Nee, want ln(0,5) is negatief','De logwaarde hoeft niet positief te zijn; alleen de oorspronkelijke invoer moet positief zijn.'),
 ('Alleen als ook ln(x) positief is','Dat voegt een voorwaarde toe die niet geldt voor de natuurlijke logaritme.'),
 ('Alleen als x wordt vervangen door nul','ln(0) is niet gedefinieerd. Nul invullen maakt deze geldige invoer juist ongeldig.')],
 ['Controleer de oorspronkelijke invoer: 0,5 > 0.','Daarom is ln(0,5) gedefinieerd.','De negatieve logwaarde ongeveer −0,693 is toegestaan. Waarden tussen nul en één hebben juist een negatieve natuurlijke logaritme.'],
 'Controleer het logaritmedomein vóór het nemen van de logaritme, dus bij de oorspronkelijke waarde.',
 'Positieve invoer betekent niet dat de logwaarde ook positief moet zijn.')
q('transformaties','meervoudig',3,'ln(y-hat) = ln(2) + 0,5 ln(x1) − ln(x2). Wat is de teruggetransformeerde voorspelling bij x1 = 16 en x2 = 4?',[
 ('2','exp(ln(2)) × 16^0,5 × 4^−1 = 2 × 4 / 4 = 2.'),
 ('32','Dit vermenigvuldigt met x2 in plaats van te delen; de coëfficiënt van ln(x2) is negatief.'),
 ('8','Dit laat de tweede verklarende variabele weg en berekent alleen 2 × √16.'),
 ('Ongeveer 0,693','Dit is de voorspelde logwaarde. De vraag vraagt om de teruggetransformeerde voorspelling.')],
 ['exp(ln(2)) = 2 is de constante factor.','De machten worden x1^0,5 en x2^−1.','Vul x1 = 16 en x2 = 4 in: 2 × √16 / 4 = 2. De negatieve exponent bij x2 wordt een deling; je telt de teruggetransformeerde termen niet op.'],
 'Exponentiëren zet een som van logtermen om in een product van machten.',
 'Een negatieve macht wordt delen; vergeet de terugtransformatie niet.')
q('diagnostiek','uitbijter',2,'Een opvallende waarneming blijkt juist ingevoerd en hangt samen met een jaarlijks terugkerende sluitingsweek. Wat is een passende vervolgstap?',[
 ('Onderzoek een inhoudelijk onderbouwde dummy en controleer opnieuw','Een terugkerende bijzondere omstandigheid kan met een passende indicator worden gemodelleerd; toets het aangepaste model opnieuw.'),
 ('Verwijder de waarneming om R² te verhogen','Een geldige waarneming weglaten uitsluitend voor een betere fit heeft geen inhoudelijke rechtvaardiging.'),
 ('Vervang de waarneming door de voorspelde waarde','Dit wist het te onderzoeken verschil en verandert geldige gegevens zonder grond.'),
 ('Concludeer direct dat sprake is van fraude','Een statistisch signaal met een mogelijke operationele verklaring bewijst geen fraude.')],
 ['De invoer is gecontroleerd en de waarneming is geldig.','De bijzondere omstandigheid keert jaarlijks terug.','Onderzoek een dummy, schat opnieuw en controleer de residuen.'],
 'Een terugkerende bijzondere omstandigheid vraagt om inhoudelijke modelaanpassing.',
 'Verwijder geen geldige waarneming uitsluitend om de fit te verbeteren.')
q('diagnostiek','autocorrectie',3,'Een opnieuw geschat model is y-hat_t = 10 + 2x_t + 0,5e_(t−1). Bij x_t = 4 en vorig residu −2 is de voorspelling:',[
 ('17','10 + 2 × 4 + 0,5 × (−2) = 18 − 1 = 17.'),
 ('19','Dit verliest het negatieve teken van het vorige residu en telt 1 op.'),
 ('18','Dit laat de autocorrelatiecorrectie met het vorige residu weg.'),
 ('Niet te bepalen zonder het huidige residu','Het model gebruikt het bekende vorige residu. Het huidige residu is niet nodig voor deze voorspelling.')],
 ['De lineaire component is 10 + 2 × 4 = 18.','De correctieterm is 0,5 × (−2) = −1.','De voorspelling is 17; beoordeel daarna de residuen van het aangepaste model.'],
 'Bij een lag-1-correctie gebruik je het residu van de vorige periode.',
 'Verwar het bekende vorige residu niet met het nog onbekende huidige residu.')
q('diagnostiek','dw',3,'Residuvolgorde: 1, 1, −1, −1. Wat is de Durbin-Watson-grootheid d?',[
 ('1','Teller 0² + (−2)² + 0² = 4; noemer 1² + 1² + (−1)² + (−1)² = 4. Dus d = 1.'),
 ('0','Alleen de som van de residuen is nul. De Durbin-Watson-formule gebruikt gekwadrateerde verschillen.'),
 ('4','4 is de teller. Je moet nog delen door de som van alle gekwadrateerde residuen.'),
 ('2','Dit is geen uitkomst van de gegeven residuen; d moet uit hun opeenvolgende verschillen worden berekend.')],
 ['Opeenvolgende verschillen zijn 0, −2 en 0.','De som van de gekwadrateerde verschillen is 4.','De som van alle gekwadrateerde residuen is 4: d = 4/4 = 1. Voor een toetsbeslissing heb je vervolgens de passende tabelgrenzen nodig.'],
 'Durbin-Watson gebruikt de oorspronkelijke tijdsvolgorde van de residuen.',
 'Een berekende d alleen is nog geen toetsbeslissing zonder geschikte tabelgrenzen.')
q('diagnostiek','absres',3,'Voor n = 22 is r(x, |e|) = 0,50. De tweezijdige kritieke t is 2,086. Wat concludeer je met t ≈ 2,582?',[
 ('Een aanwijzing voor heteroscedasticiteit onderzoeken','De correlatie tussen x en de absolute residuen is significant; onderzoek of de spreiding met x verandert.'),
 ('Homoscedasticiteit is bewezen','De significante correlatie wijst juist op samenhang tussen x en de omvang van de residuen.'),
 ('Autocorrelatie is bewezen','Deze toets gebruikt absolute residuen en x, niet de opeenvolgende samenhang in een tijdreeks.'),
 ('Het oorspronkelijke verband tussen y en x is causaal','Deze diagnose gaat over spreiding van residuen en bewijst geen oorzakelijk verband.')],
 ['H0 luidt dat de populatiecorrelatie tussen x en de absolute residuen nul is.','De berekende t = 2,582 is groter dan 2,086.','Verwerp H0 en onderzoek een passende correctie op veranderende spreiding.'],
 'Samenhang van x met absolute residuen wijst op een mogelijke verandering in spreiding.',
 'Verwar heteroscedasticiteit niet met autocorrelatie of causaliteit.')
q('voorspellen','controleperiode',2,'Een model is geschat op 24 basismaanden. Een nieuwe controlemaand ligt buiten het voorspellingsinterval. Wat is passend?',[
 ('Onderzoek de oorzaak met het vastgelegde basismodel','Een afwijkende controlewaarneming is een onderzoekssignaal; beoordeel brongegevens en eventuele procesverandering.'),
 ('Bewijs van een boekingsfout vaststellen','Een statistische afwijking alleen bewijst niet dat een boeking fout is.'),
 ('De maand direct opnemen om het interval passend te maken','Daarmee gebruik je de te beoordelen waarneming om het beoordelingsmodel aan te passen.'),
 ('De realisatie vervangen door de voorspelling','Een modelvoorspelling vervangt niet zonder grond de werkelijke waarneming.')],
 ['De basisperiode leverde het model en de schattingen.','De nieuwe waarneming behoort tot de controleperiode.','Onderzoek de afwijking; motiveer een eventuele herziening van model of basisperiode.'],
 'Basisdata bouwen het model; nieuwe controledata worden daarmee beoordeeld.',
 'Een afwijking van een model is een signaal en geen bewezen administratieve fout.')

def for_lesson(lesson):
    result=deepcopy(QUESTIONS.get(lesson['id'],[]))
    for item in result:
        item['refs']=deepcopy(lesson['refs'])
        apply_pattern(item)
    return result
