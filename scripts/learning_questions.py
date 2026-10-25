"""Eigen brongebonden oefenvragen met tabellen, grafieken en volledige casusgegevens.

De oorspronkelijke 134 vraag-ID's en antwoordvolgorden blijven intact. Deze vragen
worden pas daarna toegevoegd. Brondata en eigen oefendata zijn zichtbaar onderscheiden.
"""
from copy import deepcopy
from html import escape
from question_patterns import p, apply_pattern
from mc_guidance import FOCUS

QUESTIONS = {}


def ref(source, page, locator):
    return dict(source=source, page=page, locator=locator)


def table(caption, headings, rows):
    head = ''.join(f'<th scope="col">{escape(str(c))}</th>' for c in headings)
    body = ''.join('<tr>' + ''.join(
        f'<th scope="row">{escape(str(c))}</th>' if i == 0 else f'<td>{escape(str(c))}</td>'
        for i, c in enumerate(row)) + '</tr>' for row in rows)
    return f'<div class="table-wrap"><table><caption>{escape(caption)}</caption><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table></div>'


def case(text, content='', origin='Eigen oefengegevens, volgens de genoemde cursusbronnen.'):
    return f'<p class="mc-data-origin">{escape(origin)}</p><p>{escape(text)}</p>{content}'


def bundle(page, label):
    return f'<p><a href="bronnen/tabellenbundel.pdf#page={page}" target="_blank" rel="noopener">Open tabellenbundel: {escape(label)}, PDF-pagina {page}</a>. Zoek de benodigde grens zelf op.</p>'


def q(topic, key, level, prompt, stimulus, options, steps, meaning, approach, answer, trap, refs,
      guided=False, kind='tabel', origin='eigen'):
    qid = f'mc-{topic}-leertoepassing-{key}'
    p(qid, prompt, meaning, approach, answer)
    FOCUS[topic].append((f'leertoepassing-{key}', approach))
    QUESTIONS.setdefault(topic, []).append(dict(
        id=qid, level=level, prompt='Eigen oefenvraag. '+prompt, stimulusHtml=stimulus,
        options=[row[0] for row in options], optionExplanations=[row[1] for row in options], correct=0,
        steps=steps, explanation=' '.join(steps), pattern=meaning, trap=trap, refs=refs,
        practiceMode='begeleid' if guided else 'zelfstandig', kind=kind, dataOrigin=origin))


q('beginnen', 'controlebestand', 2,
  'Welke schatting beantwoordt de vraag naar de werkelijke waarde van alle openstaande facturen?',
  case('Een accountant trekt zonder teruglegging aselect uit het volledige bestand. Alle geselecteerde facturen worden onderzocht.',
       table('Controlebestand', ['Gegeven', 'Waarde'], [('Aantal openstaande facturen N','2.400'),('Onderzochte facturen n','120'),('Som werkelijke waarden in steekproef','€ 9.600'),('Boektotaal volledig bestand','€ 205.000')])),
  [('€ 192.000, nog aan te vullen met schattingsonzekerheid','Het gemiddelde is 9.600/120 = 80. Het geschatte populatietotaal is 2.400 × 80 = 192.000; een puntschatting is nog geen interval.'),
   ('€ 9.600, want alleen die facturen zijn gecontroleerd','Dit is het gecontroleerde steekproeftotaal. De vraag gaat over alle 2.400 facturen, zodat nog projectie nodig is.'),
   ('€ 205.000, want de administratie kent het totaal','De boekwaarde is bekend, maar de werkelijke waarde is juist onderwerp van controle; deze bedragen zijn niet zonder meer gelijk.'),
   ('€ 23.040.000, berekend als 2.400 × 9.600','Vermenigvuldig N met het gemiddelde per post, niet met het totale bedrag van 120 onderzochte posten.')],
  ['Selectie en controledoel betreffen dezelfde volledige populatie van 2.400 facturen.','Bereken de werkelijke waarde per onderzochte post: 9.600/120 = 80.','Projecteer het gemiddelde met MPU: 2.400 × 80 = 192.000. Voor een oordeel over nauwkeurigheid ontbreken nog spreidingsgegevens.'],
  'Een gecontroleerd deelbestand levert het gemiddelde voor een uitspraak over het hele bestand.',
  'Koppel N en n aan de juiste rijen en bereken eerst een bedrag per post voordat je naar de populatie projecteert.',
  'Een werkelijk populatietotaal met erkenning van resterende steekproefonzekerheid.',
  'Een bekend boektotaal bewijst niet de werkelijke waarde van de te controleren populatie.',
  [ref('slides',12,'PDF p. 12-15: directe schatter'),ref('formules',1,'Formules 2-4: schatting en onzekerheid')], guided=True)

q('rekenen','kwadratenkolom',2,
  'Welke combinatie van steekproefvariantie en standaardafwijking volgt uit deze tabel?',
  case('De accountant vergelijkt de spreiding van vier gecontroleerde posten. Bedragen staan in euro.',
       table('Werkelijke waarden', ['Post','w','w²'],[(1,10,100),(2,20,400),(3,30,900),(4,40,1600),('Som',100,3000)])),
  [('s² ≈ 166,67 en s ≈ 12,91','Gebruik [3.000 − 100²/4]/3 = 500/3 voor de variantie en neem daarvan de wortel voor de standaardafwijking.'),
   ('s² = 125 en s ≈ 11,18','Dit deelt door n in plaats van n − 1. Voor de in deze cursus gebruikte steekproefvariantie is de noemer 3.'),
   ('s² ≈ 166,67 en s ≈ 83,33','Een wortel nemen is niet delen door twee. √166,6667 ≈ 12,91 euro.'),
   ('s² = 3.000 en s ≈ 54,77','De som van kwadraten is nog geen variantie: corrigeer voor het geschatte gemiddelde en deel door n − 1.')],
  ['Lees n = 4, Σw = 100 en Σw² = 3.000 uit verschillende onderdelen van de tabel.','s² = [3.000 − 100²/4]/(4 − 1) = 166,6667 euro².','s = √166,6667 ≈ 12,91 euro. Deze spreiding van posten is niet de standaardfout van een populatietotaal.'],
  'De tabel biedt zowel de som als de som van afzonderlijke kwadraten voor de rekenformule.',
  'Vul de som en kwadratensom afzonderlijk in en controleer of de uitkomst in euro of euro² gevraagd is.',
  'Een variantie in euro² en de bijbehorende standaardafwijking in euro.',
  'Σw² en (Σw)² verschillen; de somregel is geen extra waarneming.',
  [ref('formules',1,'Formule 1: steekproefvariantie')],guided=True)

q('onzekerheid','t-tabel-interval',2,
  'Zoek de tabelwaarde op. Wat is het tweezijdige 95%-interval voor het populatiegemiddelde?',
  case('Een aselecte steekproef levert de volgende al berekende samenvatting. De benodigde standaardfout is gegeven.',
       table('Schatting', ['Grootheid','Waarde'],[('Gemiddelde','80'),('Standaardfout van gemiddelde','2'),('Vrijheidsgraden','24')]))+bundle(12,'13.4 Student t-verdeling'),
  [('[75,872; 84,128]','In rij df = 24 en kolom overschrijdingskans 0,025 staat 2,064. De marge is 2,064 × 2 = 4,128.'),
   ('[76,578; 83,422]','Dit gebruikt de eenzijdige 0,05-kolom met t = 1,711. Een tweezijdig 95%-interval verlangt 0,025 per staart.'),
   ('[78; 82]','Dit neemt één standaardfout als marge en negeert de betrouwbaarheid en de t-verdeling.'),
   ('[75,08; 84,92]','Deze marge hoort niet bij de vereiste rij en kolom. Lees df = 24 en 0,025 af in de echte bundel.')],
  ['Bij 95% is α = 0,05. Voor twee grenzen gaat 0,025 naar iedere staart.','Zoek in tabel 13.4 de rij 24 en kolom 0,025: t = 2,064.','80 ± 2,064 × 2 geeft [75,872; 84,128]. Het interval betreft het gemiddelde, niet alle afzonderlijke posten.'],
  'Betrouwbaarheid en vrijheidsgraden bepalen samen de rij en overschrijdingskolom.',
  'Zet de betrouwbaarheid om in de staartkans, lees de echte t-tabel en vermenigvuldig de grens met de gegeven standaardfout.',
  'Twee intervalgrenzen voor het onbekende populatiegemiddelde.',
  'Gebruik niet de eenzijdige kolom voor een tweezijdig interval.',
  [ref('tabellen',12,'Tabel 13.4: df 24, kolom 0,025'),ref('programma',4,'Tabelregels bij toetsing')],guided=True)

q('onzekerheid','ontbrekende-df',3,
  'Welke tabelrij en kritieke t gebruik je voor het tweezijdige 95%-interval?',
  case('Het effectief aantal vrijheidsgraden van een schatting is 99. Volg de tabelafspraak in het onderwijsprogramma. Er wordt geen interpolatie gevraagd.')+bundle(13,'13.4 Student t-verdeling'),
  [('df = 95 en t = 1,985','Rij 99 ontbreekt, rij 95 is wel aanwezig en is de naast lagere rij. De 0,025-kolom geeft 1,985.'),
   ('df = 90 en t = 1,987','Rij 90 ligt lager, maar is niet de naast lagere beschikbare rij: 95 staat ertussen.'),
   ('df = 100 en t = 1,984','Afronden naar de dichtstbijzijnde rij is hier niet toegestaan: de cursus verlangt de naast lagere beschikbare rij.'),
   ('df = oneindig en t = 1,960','De afspraak voor de onderste rij geldt bij df > 200. Met df = 99 is zij niet van toepassing.')],
  ['Een tweezijdig 95%-interval gebruikt overschrijdingskans 0,025.','Zoek de aangrenzende rijen in de bundel: 95 en 100. Kies de naast lagere rij 95.','Lees t = 1,985 af. De effectieve df blijven inhoudelijk 99; alleen voor het tabelgebruik neem je rij 95.'],
  'Een ontbrekende exacte rij vereist de concrete cursusafspraak over tabelgebruik.',
  'Bekijk daadwerkelijk welke rijen aanwezig zijn en kies de naast lagere beschikbare rij bij dezelfde staartkans.',
  'De gebruikte tabelrij en bijbehorende kritieke waarde.',
  'Een eerder onthouden tabelwaarde vervangt het aflezen van de aangeleverde bundel niet.',
  [ref('tabellen',13,'Tabel 13.4 vervolg: rij 95, kolom 0,025'),ref('programma',4,'Naast lagere t-rij; uitzondering df > 200')])

q('mpu','controleoverzicht',3,
  'Welk MPU-interval volgt, op hele euro’s naar buiten afgerond, met gegeven t = 2?',
  case('Een accountant wil de totale werkelijke voorraadwaarde schatten. Gebruik de eindigheidscorrectie.',
       table('Steekproefoverzicht',['Grootheid','Waarde'],[('N','1.000'),('n','100'),('Σw','8.000'),('Σw²','679.600')])) ,
  [('[€ 76.203; € 83.797]','w̄ = 80, s² = 400 en s = 20. De standaardfout is 1.898,315992; de grenzen zijn 76.203,368 en 83.796,632.'),
   ('[€ 79.996; € 80.004]','Dit gebruikt ongeveer de onzekerheid van het gemiddelde. Het gevraagde totaal verlangt de factor N in de standaardfout.'),
   ('[€ 76.000; € 84.000]','Dit laat de uitdrukkelijk gevraagde eindigheidscorrectie weg. Daardoor ontstaat hier een ruimere marge dan volgens de gegeven formule.'),
   ('[€ 72.203; € 79.797]','Dit centreert het interval rond een verkeerd totaal. De steekproefsom 8.000 levert gemiddelde 80 en populatieschatting 80.000.')],
  ['Gemiddelde: 8.000/100 = 80. Variantie: [679.600 − 8.000²/100]/99 = 400, dus s_w = 20.','Ŵ = 1.000 × 80 = 80.000; SE = 1.000 × 20/√100 × √(900/999) ≈ 1.898,316.','80.000 ± 2 × 1.898,316 geeft [76.203,368; 83.796,632]. Naar buiten op euro’s: [76.203; 83.797].'],
  'De samenvatting bevat voldoende gegevens voor gemiddelde, spreiding en totale schattingsonzekerheid.',
  'Bereken eerst gemiddelde en spreiding uit de somkolommen, schaal vervolgens naar N en pas de eindigheidscorrectie toe.',
  'Een interval voor de gehele voorraadwaarde, naar buiten afgerond op euro’s.',
  'Rond tussenuitkomsten niet vroeg af en gebruik de standaardfout van het totaal.',
  [ref('formules',1,'Formules 1-4: MPU en eindigheidscorrectie')])

q('verschil','verschillentabel',3,
  'Wat is de verschilschatting van de werkelijke voorraadwaarde?',
  case('In 100 aselect gecontroleerde posten zijn 40 verschillen gevonden. Het foutenpatroon past bij een absolute correctie. N = 2.000 en B = € 210.000.',
       table('Samenvatting van alle 100 controles',['Gegeven','Bedrag'],[('Σb','10.500'),('Σw','10.200'),('Σ(b − w)²','2.880')])) ,
  [('€ 204.000','Het gemiddelde verschil is (10.500 − 10.200)/100 = 3 euro. Corrigeer B met N × 3 = 6.000 euro.'),
   ('€ 216.000','Dit telt de geschatte overwaardering op. Met e = b − w moet een positief verschil juist van B af.'),
   ('€ 209.700','Dit trekt alleen de steekproeffout 300 af. Projecteer de gemiddelde fout naar alle 2.000 posten.'),
   ('€ 198.000','De gegeven sommen leveren geen gemiddelde fout van 6. Het steekproefverschil 300 moet door alle 100 onderzochte posten worden gedeeld.')],
  ['Definieer e = b − w. Over alle gecontroleerde posten is Σe = 300.','Deel door n = 100, ook al hebben slechts 40 posten een niet-nulverschil: ē = 3.','Ŵ_V = 210.000 − 2.000 × 3 = 204.000. Voor het interval gebruik je de spreiding van e; de kwadratensom ondersteunt die vervolgstap.'],
  'De bekende populatieboekwaarde wordt met een geprojecteerd absoluut controleverschil gecorrigeerd.',
  'Trek de twee steekproefsommen af, deel door alle gecontroleerde posten en trek N maal dat gemiddelde van het boektotaal af.',
  'Een geschatte werkelijke populatiewaarde na correctie van de boeken.',
  'Deel de som van verschillen niet uitsluitend door het aantal posten met een fout.',
  [ref('formules',1,'Formules 6-11: verschilschatter'),ref('slides',20,'PDF p. 20-22: verschilvoorwaarden')])

q('quotient','ratio-uit-tabel',3,
  'Welke goedratio gebruik je en welke werkelijke populatiewaarde volgt bij B = € 1.000.000?',
  case('De 100 aselect gecontroleerde posten zijn hieronder naar twee groepen samengevat. Gebruik de verhouding van steekproefsommen.',
       table('Gecontroleerde bedragen',['Groep','Aantal','Σb','Σw'],[('Klein',80,'8.000','7.200'),('Groot',20,'12.000','10.200'),('Totaal',100,'20.000','17.400')])) ,
  [('q = 0,87; Ŵ_Q = € 870.000','De verhouding van de totale werkelijke waarde tot de totale boekwaarde is 17.400/20.000 = 0,87; vermenigvuldig met B.'),
   ('q = 0,875; Ŵ_Q = € 875.000','Dit neemt het ongewogen gemiddelde van de groepsratio’s 0,90 en 0,85. De groepen dragen verschillende boekbedragen bij.'),
   ('q = 0,89; Ŵ_Q = € 890.000','Dit weegt de groepsratio’s naar aantallen, terwijl de quotiëntschatter de verhouding van geldsommen gebruikt.'),
   ('q = 0,13; Ŵ_Q = € 130.000','0,13 is de geschatte foutratio. De vraag vraagt de goedratio en de werkelijke waarde, niet de overwaardering.')],
  ['Tel de bedragen over dezelfde gecontroleerde posten op: Σb = 20.000 en Σw = 17.400.','q = 17.400/20.000 = 0,87. Deze verhouding weegt individuele ratio’s impliciet met hun boekwaarde.','Ŵ_Q = 0,87 × 1.000.000 = 870.000. De geschatte overwaardering is afzonderlijk 130.000.'],
  'De groepen hebben verschillende boekbedragen; ratio’s kun je daarom niet ongewogen middelen.',
  'Gebruik de totaalregels voor de verhouding van sommen en bepaal of werkelijke waarde of fout gevraagd wordt.',
  'Een goedratio en de daarop gebaseerde geschatte populatiewaarde.',
  'Middel de groepspercentages niet zonder rekening te houden met hun boekwaarde.',
  [ref('formules',1,'Formules 12-17: quotiëntschatter')])

q('regressieschatter','hulpinformatie',3,
  'Welke regressieschatting en standaardfout volgen uit het overzicht?',
  case('De steekproef is aselect en de voorwaarden zijn beoordeeld. Alle spreidingen staan in euro. De MPU-standaardfout is reeds inclusief eindigheidscorrectie.',
       table('Boekwaarde b en werkelijke waarde w',['Grootheid','Waarde'],[('N','1.000'),('B','105.000'),('b̄','100'),('w̄','90'),('s_b','20'),('s_w','30'),('R_bw','0,80'),('SE_MPU','3.000')])) ,
  [('Ŵ_R = € 96.000 en SE_R = € 1.800','b₁ = 0,80 × 30/20 = 1,2. De correctie is 1,2 × 5.000 = 6.000; SE_R = 3.000√(1 − 0,64) = 1.800.'),
   ('Ŵ_R = € 94.000 en SE_R = € 1.800','De standaardfout klopt, maar voor de correctie is de helling 1,2 nodig. Correlatie 0,80 is niet dezelfde grootheid als b₁.'),
   ('Ŵ_R = € 96.000 en SE_R = € 1.080','Dit vermenigvuldigt de standaardfout met 1 − R². Op een standaardfout werkt de wortel van deze factor.'),
   ('Ŵ_R = € 105.000 en SE_R = € 0','B is de bekende boekwaarde, niet de onbekende werkelijke waarde. Een correlatie van 0,80 verwijdert niet alle onzekerheid.')],
  ['Bereken b₁ = R_bw × s_w/s_b = 1,2. De directe MPU-schatting is 90.000.','Het bekende B overschrijdt N × b̄ met 5.000. De regressiecorrectie van 6.000 geeft Ŵ_R = 96.000.','SE_R = 3.000 × √(1 − 0,80²) = 1.800. Dit is meer berekende precisie, geen garantie dat het model passend is.'],
  'Boekwaarden geven bekende hulpinformatie en de tabel geeft het verband met werkelijke waarden.',
  'Bepaal de regressiehelling uit correlatie en spreidingen, corrigeer de MPU-schatting en bereken afzonderlijk de resterende onzekerheid.',
  'Een totale schatting plus de standaardfout van datzelfde totaal.',
  'Gebruik de correlatie niet rechtstreeks als helling en verwar variantiefactor niet met standaardfoutfactor.',
  [ref('formules',2,'Formules 18-24: regressieschatter')])

q('steekproefomvang','uitbreidingsplan',3,
  'Hoeveel aanvullende controles zijn minimaal nodig volgens de gegeven planningsformule?',
  case('De accountant wil bij gelijkblijvende voorlopige spreiding een totale intervalbreedte van € 800. Gebruik n = N/(1 + γ), met γ = E²/(t²Ns²).',
       table('Vooronderzoek',['Grootheid','Waarde'],[('N','1.000'),('Al gecontroleerd','200'),('s','10'),('t voor planning','2'),('Gewenste totale breedte','800')])) ,
  [('515 extra controles; totaal 715','E = 400, γ = 0,4 en n = 714,2857. Rond de totale behoefte naar boven af en trek 200 af.'),
   ('185 extra controles; totaal 385','Dit vult de volledige breedte 800 in als E. In de formule is E de halve breedte.'),
   ('715 extra controles; totaal 915','715 is al de totale behoefte. De 200 uitgevoerde controles zijn daarin inbegrepen.'),
   ('514 extra controles; totaal 714','Naar beneden afronden voldoet niet aan de berekende minimale omvang. Rond 714,2857 naar boven af.')],
  ['De totale breedte is 2E, dus E = 800/2 = 400.','γ = 400²/(2² × 1.000 × 10²) = 0,4; n = 1.000/1,4 = 714,2857.','Rond omhoog naar 715. Er zijn 200 bruikbare controles uitgevoerd: uitbreiding = 715 − 200 = 515.'],
  'De gewenste breedte en een vooronderzoek bepalen de aanvullende controle-inspanning.',
  'Halveer de breedte, gebruik de passende spreiding, rond de totale behoefte omhoog af en trek bestaande controles af.',
  'Het extra aantal controles met het nieuwe totaal ter controle.',
  'De formule berekent het totaal; de vraag vraagt de uitbreiding.',
  [ref('formules',1,'Formule 5: gewenste omvang bij MPU')])

CUMULATIVE = table('Cumulatieve boekwaarde uit het collegevoorbeeld',
 ['Boekwaardeklasse','Aantal','Som boekwaarden','Cumulatief'],
 [('0 tot <1.000','1.127','513.513','513.513'),('1.000 tot <2.000',813,'1.195.110','1.708.623'),
  ('2.000 tot <3.000',760,'1.846.186','3.554.809'),('3.000 tot <4.000',699,'2.394.075','5.948.884'),
  ('4.000 tot <5.000',412,'1.858.944','7.807.828'),('5.000 tot <6.000',300,'1.651.237','9.459.065'),
  ('6.000 tot <7.000',267,'1.717.729','11.176.794'),('7.000 tot <8.000',217,'1.588.182','12.764.976'),
  ('8.000 tot <9.000',110,'892.584','13.657.560'),('9.000 tot <10.000',70,'649.099','14.306.659'),
  ('Topstratum ≥10.000',48,'621.778','Buiten cumulatie')])
q('stratificatie','cumulatieve-grens',3,
  'Je wilt vier bemonsterde strata. Welke eerste klassegrens ligt het dichtst bij het eerste cumulatieve streefbedrag?',
  case('Het topstratum wordt afzonderlijk integraal gecontroleerd. Kies een beschikbare klassegrens zonder interpolatie.',CUMULATIVE,
       'Brongegevens: slides SRA NJ26, PDF-pagina 40. Eigen vraag bij de oorspronkelijke tabel.'),
  [('€ 3.000; cumulatief € 3.554.809','Het eerste streefbedrag is 14.306.659/4 = 3.576.664,75. De klassegrens 3.000 ligt met cumulatief 3.554.809 het dichtst erbij.'),
   ('€ 4.000; cumulatief € 5.948.884','Deze grens ligt boven het streefbedrag, maar veel verder weg dan de grens 3.000. De vraag verlangt de dichtstbijzijnde grens.'),
   ('€ 2.500, omdat 10.000/4 = 2.500','Dit verdeelt de schaal van boekwaarden in gelijke breedtes. De gevraagde methode verdeelt cumulatieve geldbedragen.'),
   ('De klasse met de eerste 1.194 posten','Dit verdeelt aantallen posten ongeveer gelijk. Cumulatieve boekwaarde gebruikt de geldsom en kan ongelijke aantallen opleveren.')],
  ['Houd de integraal gecontroleerde topgroep buiten de indeling van de bemonsterde strata.','Het eerste cumulatieve doel is 14.306.659/4 = 3.576.664,75.','Bij boekwaardegrens 3.000 bedraagt de cumulatieve som 3.554.809, slechts 21.855,75 lager. De aangrenzende grenzen liggen verder weg.'],
  'Het topstratum staat apart en de cumulatieve kolom bepaalt grenzen op basis van geldbedragen.',
  'Deel het resterende boekbedrag door het aantal strata en vergelijk het doel met de beschikbare cumulatieve klassegrenzen.',
  'Een klassegrens in boekwaarde en de bijbehorende cumulatieve geldsom.',
  'Verdeel niet de boekwaardeschaal of het aantal posten wanneer cumulatieve boekwaarde gevraagd wordt.',
  [ref('slides',40,'PDF p. 40-41: cumulatieve boekwaarde'),ref('boek-h8c',2,'Boek p. 222: keuze van strata')], origin='bron')

STRATA = table('Steekproeven per stratum uit het collegevoorbeeld',['Stratum','Nᵢ','nᵢ','Σwᵢ','Σwᵢ²'],
 [(1,2700,114,'7.000','475.000'),(2,1111,58,'8.000','1.175.000'),(3,567,36,'12.000','4.030.000'),(4,397,42,'20.000','9.600.000')])
q('stratificatie','stratum-uitwerken',3,
  'Welke combinatie hoort bij stratum 1: puntschatting en standaardfout van het stratumtotaal?',
  case('Werk stratum 1 uit met MPU en de eindigheidscorrectie. Houd tussenwaarden ongerond; de antwoordopties zijn afgerond.',STRATA,
       'Brongegevens: slides SRA NJ26, PDF-pagina 48. Eigen vraag bij de oorspronkelijke tabel.'),
  [('Ŵ₁ ≈ € 165.789 en SE₁ ≈ € 4.949','w̄₁ = 7.000/114; s_w1 = √([475.000 − 7.000²/114]/113) ≈ 19,9946. Schaal gemiddelde en onzekerheid met N₁ = 2.700.'),
   ('Ŵ₁ = € 7.000 en SE₁ ≈ € 20','Dit zijn het steekproeftotaal en de spreiding per post. Er is nog niet naar het gehele stratum geprojecteerd.'),
   ('Ŵ₁ ≈ € 293.202 en SE₁ ≈ € 4.949','De standaardfout hoort bij stratum 1, maar het gemiddelde vermenigvuldigen met het totale aantal van alle strata telt andere strata verkeerd mee.'),
   ('Ŵ₁ ≈ € 165.789 en SE₁ ≈ € 20','De puntschatting klopt. De spreiding van individuele werkelijke waarden is geen standaardfout van een totaal.')],
  ['Gebruik uitsluitend de eerste rij: N₁ = 2.700, n₁ = 114, Σw₁ = 7.000, Σw₁² = 475.000.','Ŵ₁ = 2.700 × 7.000/114 ≈ 165.789,474; s_w1² = [475.000 − 7.000²/114]/113 ≈ 399,782642.','SE₁ = 2.700 × √399,782642/√114 × √(2.586/2.699) ≈ 4.949,213. Ieder ander stratum moet eerst op dezelfde wijze afzonderlijk worden uitgewerkt.'],
  'Per stratum horen populatieaantal, steekproefaantal en somkolommen bij dezelfde rij.',
  'Werk één rij volledig uit: gemiddelde, postvariantie, totaal en standaardfout van het totaal met eindigheidscorrectie.',
  'De puntschatting en de standaardfout van het gevraagde stratum.',
  'Gebruik bij een stratum niet de N of n van de gehele gestratificeerde steekproef.',
  [ref('slides',48,'PDF p. 48: stratum 1 uitwerken'),ref('formules',2,'Formules 26-29: strata combineren')],guided=True,origin='bron')

q('stratificatie','onzekerheid-combineren',3,
  'Welk totaalinterval volgt bij t = 2 uit deze onafhankelijk getrokken strata?',
  case('Alle bedragen zijn euro. Het werkelijke totaal van de topgroep is integraal vastgesteld; de getoonde SE’s zijn al voor de stratumtotalen.',
       table('Afgeronde stratumresultaten',['Groep','Geschat of vastgesteld werkelijk totaal','SE totaal'],[('Stratum 1','160.000','3.000'),('Stratum 2','240.000','4.000'),('Integraal topstratum','50.000','0')])) ,
  [('[€ 440.000; € 460.000]','Het centrum is 160.000 + 240.000 + 50.000 = 450.000. De gezamenlijke SE is √(3.000² + 4.000²) = 5.000 en de marge 10.000.'),
   ('[€ 436.000; € 464.000]','Dit telt de standaardfouten rechtstreeks op. Bij onafhankelijke strata moet je eerst hun varianties optellen.'),
   ('[€ 390.000; € 410.000]','Dit laat de werkelijke waarde van het integraal gecontroleerde topstratum weg. Geen steekproefvariantie betekent niet geen waarde.'),
   ('[€ 490.000; € 510.000]','Dit telt de topgroep dubbel. Het werkelijke totaal van de topgroep wordt precies eenmaal aan de bemonsterde strata toegevoegd.')],
  ['Tel de werkelijke totalen op: Ŵ = 450.000, inclusief het topstratum eenmaal.','Tel de onafhankelijke variantiebijdragen op: 9.000.000 + 16.000.000 + 0 = 25.000.000; SE = 5.000.','De marge is 2 × 5.000 = 10.000. Het interval is [440.000; 460.000]; de topgroep vergroot het centrum zonder steekproefvariantie toe te voegen.'],
  'Afzonderlijke stratumresultaten moeten worden gecombineerd tot één populatie-uitspraak.',
  'Tel de totalen op, combineer onafhankelijke onzekerheden via de som van varianties en voeg de topgroep eenmaal toe.',
  'Eén totaalinterval voor alle strata inclusief de gecontroleerde topgroep.',
  'Standaardfouten optellen overschat de gecombineerde fout en heeft een andere betekenis dan varianties optellen.',
  [ref('formules',2,'Formules 26-29: stratificatieschatting'),ref('slides',49,'PDF p. 49: totaal en onzekerheid combineren')])

q('stratificatie','neyman-allocatie',3,
  'Hoe verdeel je 100 controles volgens Neyman-allocatie over de twee strata?',
  case('Er zijn geen minimumaantallen of verschillende controlekosten gegeven. Gebruik nᵢ evenredig met Nᵢsᵢ.',
       table('Vooronderzoek',['Stratum','Nᵢ','sᵢ'],[('A',800,10),('B',200,40)])),
  [('50 in A en 50 in B','N_A s_A = 8.000 en N_B s_B = 8.000. Beide krijgen dus de helft van de controles.'),
   ('80 in A en 20 in B','Dit is proportionele allocatie naar populatieaantallen. Neyman houdt ook rekening met de grotere spreiding in B.'),
   ('20 in A en 80 in B','Dit weegt alleen met spreiding en laat de verschillende populatieaantallen weg.'),
   ('100 in A en 0 in B','B draagt ondanks zijn kleinere omvang evenveel Nᵢsᵢ bij. Geen controles toekennen volgt niet uit Neyman-allocatie.')],
  ['Bereken per stratum omvang maal spreiding: A = 800 × 10 = 8.000 en B = 200 × 40 = 8.000.','Het totaal van de gewichten is 16.000, zodat elk stratum 8.000/16.000 = 50% krijgt.','Verdeel 100 controles als 50 en 50. Het kleinere maar sterker spreidende stratum krijgt relatief intensievere controle om onzekerheid doelmatiger te verminderen.'],
  'Verschillende populatieaantallen en spreidingen sturen de verdeling van controlecapaciteit.',
  'Bereken Nᵢsᵢ en verdeel het totale aantal controles naar deze gewichten; vergelijk dit met proportionele allocatie.',
  'Twee gehele controleaantallen die samen de beschikbare omvang vormen.',
  'Een groot stratum krijgt niet automatisch de meeste controles als de spreiding elders veel groter is.',
  [ref('formules',2,'Formule 25: Neyman-allocatie'),ref('slides',45,'PDF p. 44-46: allocatie')])

q('regressielijn','residu-uitvoer',2,
  'Wat zijn de voorspelde kosten en het residu van de getoonde controlemaand?',
  case('Kosten staan in duizenden euro’s; productie staat in honderden eenheden. Het model is met een constante geschat.',
       table('Coefficients: afhankelijke variabele kosten',['Modelterm','Unstandardized B','Std. Error'],[('(Constant)',12,2),('Productie',3,0.5)])+
       table('Controlemaand',['Productie x','Werkelijke kosten y'],[(8,41)])),
  [('ŷ = 36 en e = 5','De lijn geeft 12 + 3 × 8 = 36. Het residu is werkelijk min voorspeld: 41 − 36 = 5 duizend euro.'),
   ('ŷ = 36 en e = −5','De voorspelling klopt, maar het teken van het residu is omgekeerd: SRA gebruikt e = y − ŷ.'),
   ('ŷ = 24 en e = 17','Dit vergeet de constante 12. De voorspelling omvat alle termen van de geschatte lijn.'),
   ('ŷ = 16 en e = 25','Dit gebruikt Std. Error = 0,5 als helling. Voor voorspellen heb je de B-kolom nodig.')],
  ['Lees de vergelijking uit B: ŷ = 12 + 3x. Std. Error beschrijft coëfficiëntonzekerheid en is geen helling.','Vul x = 8 in: ŷ = 36 duizend euro.','e = y − ŷ = 41 − 36 = 5 duizend euro. De kosten liggen boven de verwachting; de oorzaak moet inhoudelijk worden onderzocht.'],
  'Coëfficiënten en de waargenomen uitkomst komen uit verschillende tabellen.',
  'Lees B inclusief de constante, bereken de verwachting en trek deze van de werkelijke uitkomst af.',
  'Een voorspelling en een residu in de oorspronkelijke kosten-eenheid.',
  'Een positief residu betekent hogere werkelijke kosten dan voorspeld; het is nog geen verklaring van de oorzaak.',
  [ref('formules',2,'Formules 30-34: regressielijn en residu')],guided=True)

ANOVA = table('ANOVA: kosten verklaard door productie en bezetting',
 ['Bron','Sum of Squares','df','Mean Square','F'],[('Regression','180','2','?','?'),('Residual','40','20','?',''),('Total','220','22','','')])
q('anova','volledige-tabel',3,
  'Welke combinatie vult de ANOVA-uitvoer correct aan?',
  case('Het regressiemodel heeft een constante. Bereken uit de uitvoer ook het aantal gebruikte waarnemingen.',ANOVA),
  [('n = 23; MSE = 2; F = 45; R² ≈ 0,818','Total df = n − 1 geeft 23. MSE = 40/20 = 2; MSR = 180/2 = 90; F = 90/2 = 45 en R² = 180/220.'),
   ('n = 22; MSE = 2; F = 45; R² ≈ 0,818','De rekenmaten kloppen, maar Total df is n − 1 en dus één lager dan het aantal waarnemingen.'),
   ('n = 23; MSE = 40; F = 4,5; R² ≈ 0,818','De som van residukwadraten 40 moet door zijn vrijheidsgraden worden gedeeld. F vergelijkt gemiddelde kwadratensommen.'),
   ('n = 23; MSE = 2; F = 45; R² ≈ 0,182','0,182 is SSE/TotalSS, het onverklaarde aandeel. R² vraagt juist het verklaarde aandeel SSR/TotalSS.')],
  ['Total df = 22 betekent n = 23; de regressierij heeft k = 2 verklarende variabelen.','MSR = 180/2 = 90 en MSE = 40/20 = 2, zodat F = 45.','R² = 180/220 ≈ 0,818: circa 81,8% van de kostenvariatie is verklaard in deze steekproef. Dat bewijst geen causaliteit of geldige residuvoorwaarden.'],
  'De ANOVA-tabel biedt aantallen, verklaarde variatie en resterende spreiding in één samenhangend geheel.',
  'Koppel iedere kwadratensom aan de df van dezelfde rij en bereken daarna F en het verklaarde aandeel.',
  'Een consistente combinatie van aantal waarnemingen, residuele variantie, F en R².',
  'Verwar Sum of Squares niet met Mean Square en Total df niet met n.',
  [ref('formules',3,'Formules 35-43: ANOVA en F-toets')])

q('anova','f-grens-bundel',3,
  'Toets het gehele model bij α = 0,05. Welke kritieke F en conclusie volgen uit de tabellenbundel?',
  case('Gebruik de ANOVA-uitvoer. De hypothesen gaan over beide regressiehellingen samen.',ANOVA)+bundle(21,'13.8 F-verdeling'),
  [('F_kritiek = 3,493; verwerp H₀ dat beide hellingen nul zijn','Gebruik teller-df 2 en noemer-df 20 bij α = 0,05. F = (180/2)/(40/20) = 45 overschrijdt 3,493.'),
   ('F_kritiek = 4,461; verwerp H₀','De conclusie blijft hier hetzelfde, maar 4,461 hoort bij α = 0,025. Voor deze F-toets halveer je 0,05 niet.'),
   ('F_kritiek = 3,493; iedere afzonderlijke helling is significant','De globale F-toets verwerpt dat alle hellingen tegelijk nul zijn. Zij toont niet dat iedere losse helling significant is.'),
   ('F_kritiek = 3,493; H₀ niet verwerpen','De berekende F = 45 is groter dan de kritieke waarde; de beslisregel is dus omgekeerd toegepast.')],
  ['H₀: β_productie = β_bezetting = 0; H₁: ten minste één helling wijkt van nul af.','Bereken F = 45 en lees tabel 13.8: kolom teller-df 2, rij noemer-df 20 en α = 0,05 geeft 3,493.','45 > 3,493, dus verwerp H₀. Het model bevat gezamenlijk verklarende informatie; individuele effecten vereisen afzonderlijke t-toetsen.'],
  'De globale toets vergelijkt verklaarde variatie per vrijheidsgraad met residuele variatie.',
  'Bepaal teller- en noemervrijheidsgraden, kies de α-rij zonder halvering en vergelijk de berekende F met de tabelgrens.',
  'Een globale toetsconclusie over de gezamenlijke regressiehellingen.',
  'Een significant geheel garandeert niet dat iedere afzonderlijke variabele significant is.',
  [ref('tabellen',21,'Tabel 13.8: teller-df 2, noemer-df 20, α 0,05'),ref('formules',3,'Formule 43: F-toets')])

q('toetsen','p-en-t-route',3,
  'Welke conclusie volgt bij H₁: β ≠ 0 en α = 0,05, via zowel Sig. als de kritieke t?',
  case('Het model heeft n = 22 waarnemingen, één verklarende variabele en een constante. SPSS toont een tweezijdige Sig.',
       table('Coefficients: kosten',['Term','B','Std. Error','t','Sig. (2-tailed)'],[('Productie','0,460','0,200','2,300','0,032')]))+bundle(12,'13.4 Student t-verdeling'),
  [('Beide routes verwerpen H₀: p < 0,05 en |t| > 2,086','De tweezijdige p-waarde 0,032 vergelijk je met α = 0,05. Bij df = 20 geeft kolom 0,025 t_kritiek = 2,086.'),
   ('Beide routes verwerpen niet: p > 0,025','Een reeds tweezijdige Sig. moet met de totale α worden vergeleken. α/2 is alleen de staartkans voor het aflezen van de t-grens.'),
   ('Alleen de p-route verwerpt, want t moet groter zijn dan 5','De grens 5 is niet uit de t-tabel afgeleid. De passende df en betrouwbaarheid geven hier 2,086.'),
   ('Beide routes bewijzen dat β exact 0,460 is','De toetsen ondersteunen een niet-nulhelling. Zij bewijzen niet dat de geschatte waarde exact gelijk is aan de populatieparameter.')],
  ['Stel H₀: β = 0 en H₁: β ≠ 0; df = 22 − 1 − 1 = 20.','P-route: 0,032 < 0,05. Kritieke route: B/SE = 2,3 en bij df = 20, staartkans 0,025 is t = 2,086.','Beide verwerpen H₀ omdat 2,3 > 2,086. De positieve samenhang is statistisch ondersteund; causaliteit volgt niet uit deze toets.'],
  'Een tweezijdige Sig. en de t-statistiek zijn twee weergaven van dezelfde coëfficiënttoets.',
  'Vergelijk de volledige tweezijdige p met α en vergelijk daarnaast de absolute t met de α/2-grens bij de juiste df.',
  'Twee overeenstemmende, onderbouwde beslissingen over een populatiehelling.',
  'Halveer niet zowel de p-waarde als de grens en vergelijk een tweezijdige Sig. niet automatisch met α/2.',
  [ref('tabellen',12,'Tabel 13.4: df 20 en kolom 0,025'),ref('formules',3,'Formules 39-43: hypothesetoetsen')],guided=True)

q('toetsen','richting-eenzijdig',3,
  'De hypothese vooraf is dat meer controles de foutfractie verlagen: H₁: β < 0. Wat volgt bij α = 0,05?',
  case('De gerichte hypothese is vóór de analyse gekozen. De tabel toont een positieve helling en een tweezijdige p-waarde.',
       table('Coefficients',['Term','B','Std. Error','t','Sig. (2-tailed)'],[('Controle-intensiteit','0,44','0,20','2,20','0,040')])) ,
  [('H₀ niet verwerpen in de gevraagde richting; p_eenzijdig ≈ 0,980','Het geschatte effect is positief, tegengesteld aan H₁. Voor de negatieve richting is de p-waarde 1 − 0,040/2 = 0,980.'),
   ('H₀ verwerpen: 0,040/2 = 0,020','Blind halveren negeert dat de waargenomen helling de andere kant op wijst. Voor H₁: β < 0 ligt t juist verkeerd.'),
   ('Een negatieve werking is bewezen omdat Sig. < 0,05','De tweezijdige toets ondersteunt een verschil van nul; het teken van B is positief en ondersteunt geen verlaging.'),
   ('H₁ achteraf wijzigen naar β > 0 en dezelfde claim behouden','Een achteraf gewijzigde richting is een andere toetsvraag. Zij bevestigt niet de oorspronkelijk vooraf gekozen hypothese.')],
  ['H₁ verlangt een negatieve populatiehelling. Het geschatte B en t zijn positief.','Bij een symmetrische t-verdeling is de negatieve eenzijdige p hier 1 − 0,040/2 = 0,980.','Verwerp H₀ niet ten gunste van een daling. Benoem dat het effect tegengesteld ligt aan de vooraf geformuleerde verwachting.'],
  'Een directionele uitspraak moet passen bij zowel de p-waarde als het teken van de coëfficiënt.',
  'Lees eerst de vooraf gekozen richting, controleer het teken van t en pas daarna de tweezijdige p aan.',
  'Een toetsconclusie voor precies de vooraf gestelde negatieve hypothese.',
  'Een kleine tweezijdige p ondersteunt niet automatisch elke gewenste eenzijdige richting.',
  [ref('attentie',4,'PDF p. 4-5: hypothesen en toetsrichting'),ref('formules',4,'Formule 62: individuele t-toets')])

q('toetsen','niet-nul-hypothese',3,
  'Toets H₀: β = 1 tegenover H₁: β ≠ 1 bij α = 0,05. Welke conclusie is juist?',
  case('Er zijn 26 waarnemingen, één verklarende variabele en een constante. De gebruikelijke SPSS-t toetst tegen nul; deze eigen oefenvariant vraagt tegen één. Gebruik hiervoor t = (B − β₀)/Std. Error.',
       table('Coefficients',['Term','B','Std. Error','SPSS t tegen nul'],[('Activiteit','1,20','0,10','12,00')]))+bundle(12,'13.4 Student t-verdeling'),
  [('t = 2; H₀ niet verwerpen, want 2 < 2,064','Tegen β₀ = 1 is t = (1,20 − 1)/0,10 = 2. Bij df = 24 is de tweezijdige grens 2,064.'),
   ('t = 12; H₀ verwerpen','SPSS t = B/SE toetst standaard tegen nul. Dat is niet de nulhypothese β = 1 uit deze opgave.'),
   ('t = 0,20; H₀ niet verwerpen','0,20 is alleen het verschil tussen de schatting en de nulwaarde. Deel dit verschil nog door de standaardfout.'),
   ('t = 2; β is daarmee exact 1 bewezen','Niet verwerpen betekent onvoldoende bewijs tegen β = 1 op dit niveau; het bewijst geen exacte parameterwaarde.')],
  ['Neem de nulwaarde uit de hypothese: β₀ = 1, niet de standaardwaarde nul van SPSS.','t = (B − β₀)/SE = 0,20/0,10 = 2; df = 26 − 2 = 24.','Lees 2,064 bij df = 24 en staartkans 0,025. Omdat |2| < 2,064 verwerp je H₀ niet; de gegeven t = 12 beantwoordt een andere toetsvraag.'],
  'De gevraagde hypothese wijkt af van de nulwaarde van de standaardcoëfficiëntentabel.',
  'Bereken een nieuwe t met de gevraagde parameterwaarde en vergelijk die met de passende kritieke grens.',
  'Een toetsbeslissing over de specifieke waarde één voor de populatiehelling.',
  'Neem de standaard t-kolom niet over wanneer de nulhypothese een andere parameterwaarde bevat.',
  [ref('formules',4,'Formule 62 toetst tegen nul; aangepaste nulwaarde en formule expliciet gegeven in eigen oefenvariant'),ref('tabellen',12,'Tabel 13.4: df 24 en 0,025')])


def scatter(title, points, xlabel='x', ylabel='residu', xlim=None, ylim=None):
    """Eigen SVG met een beschrijving en puntsgewijs alternatief in een inklapbare tabel."""
    xlo, xhi = xlim or (min(x for x, _ in points), max(x for x, _ in points))
    ylo, yhi = ylim or (min(y for _, y in points), max(y for _, y in points))
    dx, dy = max(xhi-xlo, 1), max(yhi-ylo, 1)
    circles = ''.join(f'<circle cx="{55+(x-xlo)/dx*445:.2f}" cy="{190-(y-ylo)/dy*145:.2f}" r="4" fill="currentColor"/>' for x,y in points)
    zero = '' if not ylo <= 0 <= yhi else f'<path d="M55 {190-(-ylo)/dy*145:.2f} H500" stroke="currentColor" stroke-dasharray="5 5" opacity="0.4"/>'
    svg = (f'<figure><svg viewBox="0 0 560 245" role="img" aria-label="{escape(title)}" style="width:100%;max-width:640px;height:auto">'
           f'<title>{escape(title)}</title><desc>{escape(xlabel)} horizontaal van {xlo} tot {xhi}; {escape(ylabel)} verticaal van {ylo} tot {yhi}. De waarden zijn ook in de gegevenstabel beschikbaar.</desc>'
           '<path d="M55 40 V190 H505" stroke="currentColor" fill="none"/>'+zero+circles+
           f'<g fill="currentColor" font-size="12"><text x="50" y="210">{xlo}</text><text x="492" y="210">{xhi}</text><text x="18" y="193">{ylo}</text><text x="18" y="48">{yhi}</text><text x="245" y="232">{escape(xlabel)}</text><text x="55" y="25">{escape(ylabel)}</text></g></svg>'
           f'<figcaption>{escape(title)}</figcaption></figure>')
    return svg + '<details><summary>Bekijk de grafiekgegevens</summary>'+table(title,[xlabel,ylabel],points)+'</details>'

q('diagnostiek','residual-statistics',3,
  'Welke diagnose kun je uit deze samengevatte SPSS-uitvoer onderbouwen?',
  case('Gebruik de cursusgrenzen voor uitbijters en invloedrijke punten. De afhankelijke variabele is huur per maand in euro.',
       table('Residuals Statistics: geselecteerde rijen',['Rij','Minimum','Maximum','Mean','Std. Deviation','N'],
             [('Std. Residual','−1,352','2,490','0,000','0,987',40),('Mahal. Distance','0,000','2,388','0,975','0,815',40),("Cook’s Distance",'0,000','0,313','0,030','0,060',40)]),
       'Brongegevens: geselecteerde rijen uit slides SRA NJ26, PDF-pagina 100. Eigen diagnosevraag.'),
  [('Aanwijzing voor uitbijter(s) in y en invloed; geen MD-overschrijding','Bij n = 40 geldt |z| > 2. MD-grens = 0,975 + 3 × 0,815 = 3,420; CD-grens = 0,030 + 3 × 0,060 = 0,210. Alleen z_max en CD_max overschrijden hun grens.'),
   ('Alleen een uitbijter in x, want MD_max > 2','Voor Mahalanobis Distance geldt hier de eigen cursusgrens mean + 3 × sd. De grens ±2 hoort bij gestandaardiseerde residuen.'),
   ('Geen afwijkingen, omdat gemiddeld residu nul is','Een gemiddeld residu rond nul kan samengaan met grote individuele residuen. Onderzoek minimum en maximum.'),
   ('De waarneming met z = 2,490 moet direct worden verwijderd','De tabel signaleert mogelijke afwijkingen. Zij geeft geen inhoudelijke rechtvaardiging voor automatisch verwijderen en identificeert ook niet zelf de rij.')],
  ['Met n = 40 is de cursusgrens voor gestandaardiseerde residuen ±2; 2,490 overschrijdt deze, −1,352 niet.','MD_kritiek = 0,975 + 3 × 0,815 = 3,420; het maximum 2,388 blijft eronder. CD_kritiek = 0,030 + 3 × 0,060 = 0,210; 0,313 ligt erboven.','Onderzoek betrokken waarnemingen in detail. Deze samenvatting toont niet of het grote residu en de grote Cook’s Distance bij dezelfde waarneming horen.'],
  'Drie verschillende diagnosematen staan in één tabel en vragen ieder hun eigen grens.',
  'Lees N, controleer beide residu-extremen en bereken afzonderlijk de grenzen voor Mahalanobis en Cook.',
  'Een onderscheiden oordeel over uitbijters in y, uitbijters in x en invloed.',
  'Maak van een samengevatte tabel geen bewijs dat verschillende maxima dezelfde waarneming betreffen.',
  [ref('slides',100,'PDF p. 100: Residuals Statistics'),ref('formules',3,'Formules 44-45: uitbijters en invloed')],origin='bron')

q('diagnostiek','normaliteit-tabel',3,
  'Welke normaliteitsconclusie past bij de cursusroute en α = 0,05?',
  case('De tests zijn uitgevoerd op de residuen van een regressiemodel. Er zijn 40 waarnemingen.',
       table('Tests of Normality: residuen',['Toets','Statistic','df','Sig.'],[('Kolmogorov-Smirnov','0,130',40,'0,084'),('Shapiro-Wilk','0,928',40,'0,014')])) ,
  [('Verwerp residunormaliteit op basis van Shapiro-Wilk p = 0,014','Bij n ≤ 50 kiest de cursus Shapiro-Wilk. 0,014 < 0,05 geeft bewijs tegen de normaliteitshypothese.'),
   ('Normaliteit bewezen, want Kolmogorov-Smirnov p = 0,084','Dit kiest de andere toets om een gunstige uitkomst te krijgen. Bovendien bewijst een grote p de aanname niet.'),
   ('Geen van beide toetsen is bruikbaar omdat de p-waarden verschillen','Verschillende toetsen kunnen verschillende gevoeligheid hebben. Volg de vooraf bepaalde cursuskeuze en interpreteer die toets.'),
   ('De afhankelijke variabele y is niet normaal verdeeld','De gegeven tabel toetst de residuen. De verdeling van y zelf is niet de getoetste regressievoorwaarde.')],
  ['De modelvoorwaarde betreft de residuen. H₀: deze zijn normaal verdeeld; H₁: zij wijken daarvan af.','Volgens de cursus gebruik je bij n = 40 Shapiro-Wilk. De bijbehorende Sig. is 0,014.','Omdat 0,014 < 0,05 verwerp je H₀. Onderzoek bijvoorbeeld afwijkende waarnemingen en modelvorm; verwijder geldige waarnemingen niet alleen om p te verhogen.'],
  'Twee normaliteitstoetsen staan naast elkaar, maar n stuurt de cursuskeuze vooraf.',
  'Bepaal waarop de test is uitgevoerd, kies de toets volgens n en vergelijk haar Sig. met het afgesproken significantieniveau.',
  'Een conclusie over residunormaliteit met benoeming van toets, p en vervolgonderzoek.',
  'Kies niet achteraf de normaliteitstoets met de prettigste p-waarde.',
  [ref('attentie',6,'PDF p. 6: normaliteit en cursuskeuze'),ref('slides',110,'PDF p. 110: normaliteitstoetsen')])

FAN = [(1,-0.4),(1.5,0.3),(2,-0.6),(2.5,0.7),(3,-1.0),(3.5,1.2),(4,-1.4),(4.5,1.6),(5,-2.1),(5.5,2.2),(6,-2.6),(6.5,2.8)]
q('diagnostiek','trechtergrafiek',3,
  'Welk modelprobleem vraagt deze residugrafiek vooral om te onderzoeken?',
  case('De horizontale as toont productieomvang. De verticale as toont residuen van het kostenmodel.',
       scatter('Residu tegenover productie', FAN,'productie','residu', (0,7),(-3,3))),
  [('Heteroscedasticiteit: de residuspreiding neemt toe met productie','Bij lage x liggen de residuen dicht bij nul en bij hoge x veel verder weg. Dat patroon betreft veranderende foutspreiding.'),
   ('Autocorrelatie: opeenvolgende maanden hebben hetzelfde residu','De horizontale as is productie, niet tijd. Een patroon in foutgrootte tegen x stelt geen samenhang tussen opeenvolgende maanden vast.'),
   ('Het model is goed, want positieve en negatieve residuen wisselen af','Afwisseling van tekens sluit een toenemende spreiding niet uit. De breedte van de residuwolk is hier het relevante signaal.'),
   ('Iedere waarneming rechts moet uit de dataset worden verwijderd','Grote productie is niet automatisch fout. Onderzoek modelvorm en een passende spreidingscorrectie, zoals een onderbouwd WLS-model.')],
  ['Lees de assen: x is productie en y is het residu. De grafiek toont geen tijdsvolgorde.','De verticale spreiding groeit bij hogere productie; dat is een visueel signaal van heteroscedasticiteit.','Onderzoek de samenhang tussen x en absolute residuen en een inhoudelijk passende remedie. WLS-gewichten moeten bij de foutstructuur passen; 1/x² is geen universele oplossing.'],
  'De residuwolk wordt breder naarmate de verklarende variabele groter is.',
  'Beoordeel de breedte rond nul over het x-bereik en onderscheid veranderende spreiding van tijdsafhankelijkheid.',
  'Een diagnose van mogelijke veranderende foutspreiding met gerichte vervolgstap.',
  'Een gemiddeld residu rond nul sluit heteroscedasticiteit niet uit.',
  [ref('attentie',6,'PDF p. 6: homoscedasticiteit'),ref('slides',111,'PDF p. 111-112: onderzoek absolute residuen')],kind='grafiek')

q('diagnostiek','absres-correlations',3,
  'Welke conclusie over de foutspreiding volgt bij α = 0,05 uit deze Correlations-tabel?',
  case('ABSRES is de absolute waarde van de modelresiduen; productie is de verklarende variabele.',
       table('Correlations: productie met ABSRES',['Statistiek','Waarde'],[('Pearson Correlation','0,550'),('Sig. (2-tailed)','0,008'),('N','22')])) ,
  [('Aanwijzing voor toenemende foutspreiding bij grotere productie','De positieve correlatie van productie met foutgrootte is significant. Dit ondersteunt nader onderzoek naar heteroscedasticiteit.'),
   ('De residuen zijn zeker normaal verdeeld','Deze tabel toetst samenhang tussen productie en absolute residuen. Voor normaliteit gebruik je andere uitvoer.'),
   ('Geen probleem, want 0,550 is kleiner dan 1','De toetsbeslissing gebruikt Sig. ten opzichte van α. Een correlatie hoeft niet gelijk aan één te zijn om significant te zijn.'),
   ('De productie veroorzaakt fouten met kans 0,008','Een p-waarde is geen kans op causaliteit. De positieve samenhang zegt ook niet welke oorzaak de grotere fouten verklaart.')],
  ['H₀: de populatiecorrelatie tussen productie en |e| is nul. H₁: deze verschilt van nul.','Sig. = 0,008 < 0,05; verwerp H₀. De positieve r = 0,550 betekent dat grotere productie samenhangt met grotere absolute residuen.','Dat is een aanwijzing voor heteroscedasticiteit. Onderzoek modelvorm en spreidingscorrectie en controleer het aangepaste model opnieuw.'],
  'De absolute residuen meten foutgrootte en zijn niet hetzelfde als de oorspronkelijke uitkomst y.',
  'Lees eerst de variabelen van de correlatie, gebruik de tweezijdige p voor de toets en interpreteer vervolgens het teken van r.',
  'Een onderbouwde conclusie over veranderende residuspreiding.',
  'Verwar een correlatietoets met een normaliteitstoets of een bewijs van causaliteit.',
  [ref('formules',3,'Formule 40: toets op correlatie met absolute residuen'),ref('attentie',6,'PDF p. 6: homoscedasticiteit'),ref('slides',111,'PDF p. 111-112: absolute residuen')])

q('diagnostiek','dw-echte-tabel',3,
  'Toets uitsluitend op positieve autocorrelatie bij α = 0,05. Welke conclusie volgt?',
  case('Een tijdreeksmodel bevat n = 30 maanden en twee verklarende variabelen naast de constante.',
       table('Model Summary',['R Square','Std. Error of the Estimate','Durbin-Watson'],[('0,820','12,5','1,400')]))+bundle(30,'13.9 Durbin-Watson'),
  [('Onbeslist: d = 1,400 ligt tussen d_L = 1,28 en d_U = 1,57','Bij n = 30 en k = 2 geeft de α = 0,05-rij 1,28 en 1,57. Tussen die twee grenzen is de toets onbeslist.'),
   ('Positieve autocorrelatie bewezen, want d < 2','Een d onder 2 is niet voldoende voor de toetsbeslissing. Bij d_L < d < d_U geeft de tabel een onbeslist gebied.'),
   ('Geen positieve autocorrelatie, want R² is hoog','R² meet verklaarde variatie en vervangt de tijdreeksdiagnose niet. De relevante waarde is Durbin-Watson.'),
   ('Onbeslist tussen 1,21 en 1,65, omdat k = 3','De constante telt niet als verklarende variabele k. De vraag geeft twee verklarende variabelen, dus gebruik k = 2.')],
  ['Voor deze gerichte toets is H₀: geen autocorrelatie; H₁: positieve autocorrelatie. Gebruik n = 30 en k = 2.','Lees tabel 13.9, α = 0,05: d_L = 1,28 en d_U = 1,57.','1,28 < 1,400 < 1,57: de toets is onbeslist. Dat is een geldige uitkomst; rapporteer de onzekerheid en onderzoek de tijdsstructuur verder.'],
  'Durbin-Watson heeft twee tabelgrenzen en daardoor ook een onbeslist gebied.',
  'Lees n en k zonder constante af, zoek beide DW-grenzen en plaats d in het bijbehorende beslisgebied.',
  'Een gerichte toetsconclusie over positieve autocorrelatie, inclusief een eventuele onbesliste uitkomst.',
  'Vervang de twee tabelgrenzen niet door de vuistregel dat d ongeveer twee moet zijn.',
  [ref('tabellen',30,'Tabel 13.9: n 30, k 2, α 0,05'),ref('formules',3,'Formules 47-49: beslisgebieden Durbin-Watson')])

# De grafiekdata zijn eigen, reproduceerbare oefendata. Correlaties worden uit
# precies de getekende punten berekend, niet op het oog verzonnen.
from statistics import correlation
LAG_X = [10,16,8,20,12,18,6,14,22,10,18,8]
LAG_Y = [18,22,21,31,17,39,25,35,13,29,43,21]
LAG_PAIRS = [list(zip(LAG_X[:len(LAG_X)-lag], LAG_Y[lag:])) for lag in range(4)]
LAG_ROWS = [(lag,len(points),f'{correlation([p[0] for p in points],[p[1] for p in points]):.3f}'.replace('.',',')) for lag,points in enumerate(LAG_PAIRS)]
q('diagnostiek','tijdsvertraging-grafieken',3,
  'Welke koppeling verdient op basis van deze uitvoer verder onderzoek voor een vertraagd reclame-effect?',
  case('x is reclame in maand t, y is afzet. Bij verschuiving j wordt afzet y_t gekoppeld aan reclame x_(t−j). Onderzoek ook of een vertraagd effect inhoudelijk plausibel is.',
       table('Correlaties uit dezelfde eigen tijdreeks',['Verschuiving j','Geldige paren N','Pearson r'],LAG_ROWS)+
       scatter('Verschuiving 0',LAG_PAIRS[0],'reclame x_t','afzet y_t',(5,23),(10,45))+
       scatter('Verschuiving 2',LAG_PAIRS[2],'reclame x_(t−2)','afzet y_t',(5,23),(10,45))),
  [('Afzet deze maand koppelen aan reclame twee maanden eerder','Verschuiving 2 laat hier de sterkste positieve lineaire samenhang zien. Die koppeling moet inhoudelijk worden beoordeeld en daarna in een nieuw model worden gecontroleerd.'),
   ('Afzet deze maand koppelen aan reclame twee maanden later','Dit keert de tijdsrichting om. Het gegeven vertraagde-effectmodel gebruikt eerdere reclame om huidige afzet te verklaren.'),
   ('Verschuiving 0 handhaven omdat die de meeste paren heeft','Meer paren zijn een voordeel, maar wegen niet automatisch op tegen een verkeerd tijdsverband. Bekijk inhoud, patroon en modeldiagnostiek samen.'),
   ('Verschuiving 2 bewijst dat reclame de afzet veroorzaakt','De sterke samenhang is een reden om dit model te onderzoeken. Gemeenschappelijke trends en andere factoren kunnen nog steeds een rol spelen.')],
  ['Vergelijk richting en sterkte van de correlaties en spreidingsdiagrammen; verschuiving 2 toont het sterkste positieve lineaire patroon.','Bij j = 2 hoort x_(t−2) bij y_t. Er blijven 10 paren over omdat de eerste twee afzetmaanden geen twee maanden eerdere reclame binnen deze reeks hebben.','Beoordeel het veronderstelde uitgestelde reclame-effect inhoudelijk, schat het aangepaste model en controleer de residuen opnieuw. Maximale correlatie alleen bewijst geen oorzaak.'],
  'Verschuivingsdiagrammen laten zien op welke tijdsafstand het verband het duidelijkst is.',
  'Vergelijk de grafieken en correlaties, lees de lag-richting zorgvuldig en controleer welke beginwaarnemingen wegvallen.',
  'Een inhoudelijk te onderzoeken koppeling van huidige afzet met eerdere reclame.',
  'Een tijdsverschuiving en autocorrelatie zijn verschillende problemen; een sterke lag-correlatie vervangt residudiagnostiek niet.',
  [ref('slides',95,'PDF p. 95-99: tijdsvertraging en spreidingsdiagrammen'),ref('attentie',5,'PDF p. 5: analyseroute tijdreeks')],kind='grafiek')

q('diagnostiek','minimum-residu',2,
  'Welke waarnemingen zijn volgens de cursusgrens kandidaat-uitbijters in y?',
  case('Het model is op 80 waarnemingen geschat. De tabel toont vier geselecteerde waarnemingen, niet alle 80.',
       table('Casewise Diagnostics',['Waarneming','Std. Residual'],[(4,'−2,60'),(18,'−1,10'),(35,'1,95'),(67,'2,20')])) ,
  [('Waarnemingen 4 en 67','Bij n = 80 ligt de grens op |z| > 2. Zowel −2,60 als +2,20 ligt buiten de grenzen.'),
   ('Alleen waarneming 67','Dit kijkt alleen naar positieve residuen. Een grote negatieve afwijking kan eveneens een uitbijter in y zijn.'),
   ('Geen waarnemingen, want de grens is ±3','De cursus gebruikt ±3 bij n > 100. Voor het model met 80 waarnemingen geldt ±2.'),
   ('Waarnemingen 4, 35 en 67','1,95 ligt nog binnen de grens +2. Rond een residu niet op om alsnog de signaalgrens te overschrijden.')],
  ['Gebruik de omvang van het gehele model n = 80, niet het aantal weergegeven rijen.','Bij n ≤ 100 is de cursusgrens ±2: |−2,60| = 2,60 en |2,20| = 2,20 overschrijden deze grens.','Onderzoek waarnemingen 4 en 67 inhoudelijk. De diagnose is een signaal, geen automatische verwijderopdracht.'],
  'Een geselecteerde uitvoertabel kan zowel negatieve als positieve grote residuen bevatten.',
  'Neem de modelomvang voor de grens en vergelijk de absolute waarde van ieder getoond residu met die grens.',
  'De nummers van de waarnemingen die nader onderzoek verdienen.',
  'Het aantal afgedrukte probleemrijen is niet de steekproefomvang van het model.',
  [ref('slides',100,'PDF p. 100-102: beide grenzen en waarnemingen in y'),ref('formules',3,'Formule 44: gestandaardiseerde residuen')],guided=True)

q('voorspellen','gemiddelde-individu',3,
  'Welke combinatie geeft de marge voor een gemiddelde respons en voor één nieuwe maand bij x₀ = x̄?',
  case('De voorspelling is 50. Er zijn n = 25 basiswaarnemingen, s_e = 5 en de gegeven kritieke t = 2. Het model is passend beoordeeld.',
       table('Twee doelen',['Doel','Wortelfactor bij x₀ = x̄'],[('Gemiddelde respons','√(1/n)'),('Eén nieuwe maand','√(1 + 1/n)')])) ,
  [('Gemiddelde: ±2; nieuwe maand: ongeveer ±10,20','Voor een gemiddelde is 2 × 5/√25 = 2. Voor een individu is 2 × 5√(1 + 1/25) ≈ 10,198.'),
   ('Beide: ±2','Dit laat voor één nieuwe maand de eigen onverklaarde variatie weg. De extra 1 onder de wortel is daarvoor nodig.'),
   ('Gemiddelde: ongeveer ±10,20; nieuwe maand: ±2','De betekenissen zijn verwisseld. Een individuele uitkomst omvat extra spreiding en heeft bij dezelfde gegevens het bredere interval.'),
   ('Beide: ±10','Dit gebruikt alleen t × s_e. De onzekerheid van de geschatte lijn verdwijnt niet helemaal wanneer x₀ = x̄.')],
  ['Bij x₀ = x̄ is alleen de afstandsterm nul. De onzekerheid van de geschatte lijn blijft bestaan.','Marge gemiddelde: 2 × 5 × √(1/25) = 2. Dit geeft [48; 52].','Marge individu: 2 × 5 × √(1 + 1/25) ≈ 10,198. Eén nieuwe maand is minder precies voorspelbaar door haar eigen residuele variatie.'],
  'Het doel van de uitspraak bepaalt of de toekomstige individuele storing moet worden meegerekend.',
  'Markeer gemiddelde of individu en kies daarna de bijbehorende wortelfactor bij dezelfde voorspelling.',
  'Twee verschillende marges met de juiste betekenis voor de controle-uitspraak.',
  'De extra 1 is individuele spreiding en geen optionele veiligheidsopslag.',
  [ref('formules',3,'Formule 50: individueel voorspellingsinterval'),ref('boek-h9d',12,'Boek p. 284: voorspelling en onzekerheid')])

q('meervoudig','dummy-contrast',3,
  'Wat is volgens dit model het voorspelde salarisverschil tussen WO en HBO bij gelijke ervaring?',
  case('Salaris staat in euro per maand. Opleiding is gecodeerd met HBO en WO; de referentiegroep is MBO. Iedere persoon heeft precies één opleidingscategorie.',
       table('Coefficients',['Term','B','Beta'],[('(Constant)','2.000',''),('Ervaring (jaren)','80','0,40'),('HBO (0/1)','350','0,20'),('WO (0/1)','700','0,32')])) ,
  [('WO ligt € 350 hoger dan HBO','WO en HBO worden allebei met MBO vergeleken. Het onderlinge contrast is daarom 700 − 350 = 350 euro.'),
   ('WO ligt € 700 hoger dan HBO','700 is het verschil tussen WO en de referentiegroep MBO, niet tussen WO en HBO.'),
   ('WO ligt € 1.050 hoger dan HBO','Dit telt de twee dummy-effecten op. Voor een contrast tussen de groepen moet je hun voorspellingen aftrekken.'),
   ('WO ligt 0,12 euro hoger dan HBO','0,32 − 0,20 gebruikt de gestandaardiseerde Beta-kolom. Voor bedragen in euro gebruik je Unstandardized B.')],
  ['Voor HBO geldt HBO = 1 en WO = 0; voor WO geldt HBO = 0 en WO = 1.','Bij gelijke ervaring vallen de constante en ervaringsterm weg wanneer je de voorspellingen aftrekt.','Het resterende verschil is 700 − 350 = 350 euro per maand. Dit is een modelmatig verschil bij gelijke opgenomen kenmerken, geen bewezen opleidingseffect.'],
  'Dummycoëfficiënten zijn verschillen ten opzichte van een gezamenlijke referentiegroep.',
  'Schrijf de codes voor beide groepen op en trek de twee B-bijdragen van elkaar af bij gelijke overige kenmerken.',
  'Een salariscontrast in euro tussen twee niet-referentiecategorieën.',
  'Gebruik niet zonder meer één dummycoëfficiënt als contrast tussen twee andere groepen.',
  [ref('attentie',7,'PDF p. 7-8: dummyvariabelen en meervoudige regressie'),ref('formules',3,'Formules 51-54: meervoudig model')])

q('meervoudig','adjusted-vergelijking',3,
  'Welke uitspraak over toevoeging van twee variabelen wordt door deze vergelijking ondersteund?',
  case('Beide modellen zijn op dezelfde 30 complete waarnemingen en dezelfde afhankelijke variabele geschat.',
       table('Model Summary',['Model','k','R²'],[('Klein',1,'0,800'),('Groot',3,'0,810')])) ,
  [('Adjusted R² daalt van circa 0,793 naar 0,788','Klein: 0,800 − 1 × 0,200/28 = 0,792857. Groot: 0,810 − 3 × 0,190/26 = 0,788077. De kleine winst compenseert de extra complexiteit niet volgens deze maat.'),
   ('Adjusted R² stijgt altijd mee met R²','Gewone R² daalt bij toevoegen op dezelfde data niet. Adjusted R² corrigeert voor het aantal variabelen en kan wel dalen.'),
   ('Het grote model is bewezen slechter op elke nieuwe waarneming','De maat vergelijkt fit en complexiteit op deze steekproef. Prestatie op nieuwe gegevens moet met validatie worden beoordeeld.'),
   ('Je mag R² niet vergelijken omdat k verschilt','Het verschil in k is juist waarom een gecorrigeerde maat zinvol is. Dezelfde uitkomst en waarnemingen maken de modellen vergelijkbaar.')],
  ['Gebruik R²_adj = R² − k(1 − R²)/(n − k − 1), met k zonder constante.','Klein: 0,792857; groot: 0,788077. De gewone R² stijgt, maar de aangepaste maat daalt.','Volgens adjusted R² leveren de twee extra variabelen onvoldoende winst voor hun extra complexiteit. Combineer dat met inhoudelijke reden, diagnose en validatie.'],
  'Een stijgende gewone R² kan een kleine fitwinst verbergen tegenover extra modelcomplexiteit.',
  'Controleer vergelijkbare data en uitkomst en bereken de correctie voor het eigen k van ieder model.',
  'Een vergelijking van adjusted R² met een begrensde modelkeuzeconclusie.',
  'Een fitmaat op trainingsdata is geen onafhankelijke voorspelfout op nieuwe gegevens.',
  [ref('formules',3,'Formule 51: adjusted R²')])

q('transformaties','terugtransformeren-tabel',3,
  'Wat is de teruggetransformeerde voorspelling bij x = 10 volgens dit exponentiële model?',
  case('De afhankelijke variabele in deze uitvoer is LN(omzet). Gebruik de in de cursus gehanteerde terugtransformatie exp van de voorspelde logwaarde.',
       table('Coefficients: Dependent Variable LN(omzet)',['Term','B'],[('(Constant)','2,000'),('x','0,100')])) ,
  [('Ongeveer 20,09','De voorspelde logwaarde is 2 + 0,1 × 10 = 3. Terugtransformeren geeft exp(3) ≈ 20,0855.'),
   ('3,00','Dit is de voorspelde logwaarde. De vraag verlangt de oorspronkelijke schaal van omzet.'),
   ('Ongeveer 8,39','Dit doet exp alleen op de constante en telt vervolgens 1 op. De volledige rechterkant moet worden geëxponentieerd.'),
   ('Ongeveer 9,20','Dit vult ln(10) in voor x. In het exponentiële model is hier alleen de afhankelijke variabele gelogaritmeerd.')],
  ['Lees de afhankelijke variabele van de tabel: LN(omzet). De formule staat dus op logschaal.','Voorspelde logwaarde: 2 + 0,100 × 10 = 3.','De cursus-terugtransformatie is exp(3) ≈ 20,09. Beoordeel modelvoorwaarden op de juiste modelschaal; voeg geen niet-gegeven correctiefactor toe.'],
  'De voetnoot of titel van de coëfficiëntentabel bepaalt op welke schaal de voorspelling staat.',
  'Lees welke variabele is getransformeerd, vul x op de juiste schaal in en transformeer de gehele voorspelde logwaarde terug.',
  'Een voorspelling op de oorspronkelijke omzet-schaal volgens de opgegeven cursusroute.',
  'Dezelfde tabelvorm kan een ander model beschrijven zodra de afhankelijke variabele LN(y) is.',
  [ref('formules',3,'Formules 55-58: exponentiële en logaritmische modellen'),ref('attentie',7,'PDF p. 7-8: transformaties')])

q('transformaties','modelvorm-verdubbeling',3,
  'Welke voorspelde verandering hoort bij verdubbeling van x van 10 naar 20?',
  case('Vergelijk drie afzonderlijke modellen op hun eigen aangegeven schaal; er wordt alleen naar de gevolgen binnen ieder model gevraagd.',
       table('Modelvergelijkingen',['Model','Vergelijking'],[('Lineair','ŷ = 5 + 3x'),('Logaritmisch','ŷ = 5 + 3 ln(x)'),('Macht','ln(ŷ) = 5 + 3 ln(x)')])) ,
  [('Lineair: +30; logaritmisch: +3 ln(2); macht: factor 8','De veranderingen volgen uit respectievelijk 3 × (20 − 10), 3 × ln(20/10) en (20/10)³.'),
   ('Alle drie: +30','De coëfficiënt 3 heeft door de verschillende transformaties niet in ieder model dezelfde betekenis.'),
   ('Lineair: factor 2; logaritmisch: factor 2; macht: factor 3','Constanten en transformaties veranderen de verdubbelingsreactie. Een helling van 3 betekent niet overal een factor 3.'),
   ('Lineair: +30; logaritmisch: factor 8; macht: +3 ln(2)','Dit verwisselt het model met alleen ln(x) met het model waarin ook y gelogaritmeerd is.')],
  ['Lineair: verschil = 3 × (20 − 10) = 30; de constante valt weg.','Logaritmisch: verschil = 3[ln(20) − ln(10)] = 3 ln(2) ≈ 2,079.','Machtsmodel: ŷ = exp(5) × x³. De verhouding na verdubbelen is 2³ = 8; dit is een factor en geen vaste optelling.'],
  'Een coëfficiënt krijgt een andere betekenis wanneer x, y of beide zijn gelogaritmeerd.',
  'Vergelijk twee voorspellingen binnen ieder model en let op het onderscheid tussen verschil en verhouding.',
  'Twee absolute toenamen en één vermenigvuldigingsfactor in de juiste modellen.',
  'Lees de modelvergelijking zelf; de waarde van de coëfficiënt alleen bepaalt de interpretatie niet.',
  [ref('formules',3,'Formules 55-58: modelvorm en terugtransformatie')])

q('modelbouw','backward-uitvoer',3,
  'Welke variabele is de eerste verwijderkandidaat en wat doe je daarna?',
  case('Voer backward elimination uit. De opgave geeft expliciet: verwijderen als Sig. > 0,10. Begin met het weergegeven model.',
       table('Coefficients: model 1',['Term','B','Sig.'],[('(Constant)','1.400','0,280'),('Omzet','0,030','0,002'),('Omvang','4,200','0,074'),('Leeftijd','−0,800','0,310')])) ,
  [('Leeftijd verwijderen en het model opnieuw schatten','Leeftijd heeft van de verklarende variabelen de grootste p boven 0,10. Na verwijderen kunnen andere coëfficiënten en p-waarden wijzigen.'),
   ('De constante verwijderen en verder dezelfde tabel gebruiken','De constante is geen gewone kandidaat in deze backward-opdracht. Bovendien hoort een nieuwe selectie bij opnieuw geschatte uitvoer.'),
   ('Leeftijd en omvang tegelijk verwijderen','Omvang heeft p = 0,074 en voldoet aan de expliciet gegeven grens 0,10. Backward verwijdert hier eerst één kandidaat en schat opnieuw.'),
   ('Omzet verwijderen omdat de coëfficiënt het kleinst is','Coëfficiënten hebben verschillende eenheden. De kleinste B is geen criterium voor de geringste statistische bijdrage.')],
  ['De verwijderingsgrens is expliciet 0,10; gebruik die grens, zonder deze te vervangen door 0,05 of 0,025.','Onder de verklarende variabelen is Leeftijd met p = 0,310 de grootste overschrijding.','Verwijder deze kandidaat, schat het resterende model opnieuw en beoordeel de nieuwe uitvoer. Omvang mag later veranderen van betekenis of significantie.'],
  'Een expliciete proceduregrens en tabel met meerdere p-waarden bepalen de eerste selectiestap.',
  'Selecteer onder verklarende variabelen de grootste p boven de opgegeven grens en gebruik daarna opnieuw geschatte uitvoer.',
  'Eén eerste verwijderkandidaat met de noodzakelijke vervolgstap.',
  'Een eigen vaste α of de grootte van B vervangt de expliciete verwijderingsregel niet.',
  [ref('attentie',7,'PDF p. 7-8: backward en modelbouw'),ref('formules',4,'Formules 59-63: modelkeuze')])

q('modelbouw','vif-tolerance',3,
  'Welke modelbeoordeling volgt uit deze tabel volgens de cursusgrens?',
  case('Het model verklaart voorraadwaarde uit omzet en activa. Beide bedragen kunnen veel gezamenlijke informatie bevatten.',
       table('Coefficients: Collinearity Statistics',['Term','Tolerance','VIF'],[('Omzet','0,080','?'),('Activa','0,080','?'),('Aantal vestigingen','0,500','?')])) ,
  [('Omzet en activa hebben VIF = 12,5; onderzoek hun overlap','VIF = 1/Tolerance. Voor 0,080 is dat 12,5, boven de cursusgrens 10; voor vestigingen is VIF = 2.'),
   ('Alle variabelen hebben een probleem omdat Tolerance < 1','Tolerance ligt tussen nul en één. De cursusgrens VIF > 10 komt overeen met Tolerance < 0,10.'),
   ('Omzet heeft bewezen geen effect en moet altijd weg','Multicollineariteit maakt afzonderlijke bijdragen minder precies identificeerbaar; de tabel bepaalt niet zelfstandig welke inhoudelijke variabele moet vervallen.'),
   ('VIF = 0,08 voor omzet, dus er is geen probleem','Tolerance en VIF zijn omgekeerden. De kleine tolerance betekent hier juist een hoge VIF.')],
  ['Bereken VIF per rij: 1/0,080 = 12,5; 1/0,500 = 2.','De waarden 12,5 overschrijden de cursusgrens 10 en wijzen op sterke overlap in verklarende informatie.','Onderzoek inhoudelijke betekenis en stabiliteit van individuele effecten en beoordeel een aangepast model opnieuw. Verwijder niet blind een variabele uitsluitend op basis van één tabelcel.'],
  'Tolerance en VIF meten overlap van iedere verklarende variabele met de overige verklarende variabelen.',
  'Neem de reciproke van Tolerance, vergelijk met de cursusgrens en vertaal de uitkomst naar onzekerheid van afzonderlijke effecten.',
  'Een rekenkundige VIF en een inhoudelijk begrensde multicollineariteitsdiagnose.',
  'Een goede totale fit sluit onzekere afzonderlijke coëfficiënten door overlap niet uit.',
  [ref('formules',4,'Formules 59-60: VIF en cursusgrens')])

q('modelbouw','extra-variabele',3,
  'Is de extra variabele volgens de partiële F-toets significant bij α = 0,05?',
  case('Beide geneste modellen gebruiken dezelfde 23 waarnemingen en dezelfde y. Het uitgebreide model bevat alle termen van het kleine model plus één variabele.',
       table('Twee ANOVA-samenvattingen',['Model','k','SSR','SSE'],[('Klein',1,120,100),('Uitgebreid',2,180,40)]))+bundle(21,'13.8 F-verdeling'),
  [('Ja: F = 30 > 4,351 bij df 1 en 20','De extra SSR is 60 en MSE_uitgebreid = 40/(23 − 2 − 1) = 2. F = 60/2 = 30; de kritieke grens is 4,351.'),
   ('Ja: F = 45 > 3,493 bij df 2 en 20','Dit is de globale toets van het uitgebreide model. De vraag betreft alleen de extra bijdrage en verlangt teller-df 1.'),
   ('Nee: F = 0,6 < 4,351','Dit deelt de extra verklaarde som door SSE van het kleine model. De juiste noemer is MSE van het uitgebreide model.'),
   ('Niet te bepalen omdat SSR groter wordt','De vraag is juist of de toename groot genoeg is ten opzichte van de resterende variatie. De gegeven tabel bevat de benodigde informatie.')],
  ['Er is één extra variabele: teller-df = 1. Noemer-df = 23 − 2 − 1 = 20.','Extra SSR = 180 − 120 = 60 en MSE_uitgebreid = 40/20 = 2; partiële F = 60/2 = 30.','Lees F_0,05(1,20) = 4,351. Omdat 30 > 4,351 verwerp je dat de extra bijdrage nul is, onder de voorwaarden van deze modelvergelijking.'],
  'Geneste modellen isoleren de bijdrage van de nieuwe variabele ten opzichte van het kleinere model.',
  'Gebruik het verschil in SSR in de teller en de residuele gemiddelde kwadratensom van het uitgebreide model in de noemer.',
  'Een toetsconclusie over de extra variabele met eigen teller- en noemervrijheidsgraden.',
  'De globale F van het uitgebreide model toetst een andere nulhypothese dan de partiële F.',
  [ref('formules',4,'Formule 63: bijdrage van één extra variabele'),ref('tabellen',21,'Tabel 13.8: teller-df 1, noemer-df 20, α 0,05')])

q('validatie','testset-tabel',3,
  'Wat is de MSPR op deze ongebruikte testset en hoe verhoudt zij zich tot trainings-MSE = 2?',
  case('De drie testwaarnemingen zijn vooraf apart gehouden en zijn niet gebruikt voor modelkeuze. y en ŷ staan op dezelfde schaal.',
       table('Voorspellen op testgegevens',['Testwaarneming','y','ŷ'],[(1,10,12),(2,14,13),(3,20,17)])),
  [('MSPR = 14/3 ≈ 4,67; de testfout ligt hoger','De fouten zijn −2, 1 en 3; de kwadratensom is 14. Deel door drie testwaarnemingen, niet door regressievrijheidsgraden.'),
   ('MSPR = 14; de testfout ligt hoger','14 is de som van gekwadrateerde voorspelfouten. MSPR is het gemiddelde daarvan.'),
   ('MSPR = 2/3; de testfout ligt lager','Dit middelt getekende fouten die elkaar deels opheffen. MSPR kwadrateert iedere fout vóór het middelen.'),
   ('MSPR = 4,67; fraude is daardoor bewezen','De foutmaat toont slechtere voorspelling op deze kleine testset. Zij identificeert geen inhoudelijke oorzaak of fraude.')],
  ['Bereken per testwaarneming y − ŷ: −2, 1 en 3. De kwadraten zijn 4, 1 en 9.','MSPR = (4 + 1 + 9)/3 = 4,6667. De noemer is het aantal testwaarnemingen.','De waarde ligt hoger dan trainings-MSE = 2. Onderzoek generalisatie; drie testwaarnemingen alleen geven nog geen nauwkeurig beeld van alle toekomstige gevallen.'],
  'Nieuwe gegevens beoordelen voorspellen buiten de gegevens waarmee het model is gekozen.',
  'Bereken voorspelfouten per testgeval, kwadrateer ze en deel hun som door het testsetaantal.',
  'Een gemiddelde kwadratische voorspelfout met passende vergelijking met training.',
  'Een regressie-vrijheidsgradencorrectie hoort niet in de gegeven MSPR-formule.',
  [ref('formules',4,'Formule 64: MSPR'),ref('attentie',8,'PDF p. 8-9: validatie')])

q('validatie','uitvoer-kruiscontrole',3,
  'Welke reconstructie van het SPSS-model klopt met alle drie tabellen?',
  case('De getoonde tabellen behoren tot hetzelfde model met constante.',
       table('Model Summary',['R','R Square','Std. Error of the Estimate'],[('0,900','0,810','3,000')])+
       table('ANOVA: vrijheidsgraden',['Rij','df'],[('Regression',2),('Residual',17),('Total',19)])+
       table('Coefficients',['Term','B','Beta'],[('(Constant)',10,''),('x₁',2,'0,70'),('x₂',-1,'−0,25')])) ,
  [('n = 20; k = 2; ŷ = 10 + 2x₁ − x₂; MSE = 9','Total df = 19 geeft n = 20, Regression df = 2 geeft k = 2, B geeft de vergelijking en de gekwadrateerde schattingsstandaardfout is MSE.'),
   ('n = 19; k = 2; ŷ = 10 + 2x₁ − x₂; MSE = 9','De andere onderdelen kloppen, maar Total df is n − 1 en niet n.'),
   ('n = 20; k = 3; ŷ = 10 + 2x₁ − x₂; MSE = 3','Dit telt de constante mee in k en verwart de residuele standaardafwijking 3 met de residuele variantie 9.'),
   ('n = 20; k = 2; ŷ = 10 + 0,70x₁ − 0,25x₂; MSE = 9','Dit gebruikt Beta voor een vergelijking in oorspronkelijke eenheden. Gebruik daarvoor de B-kolom.')],
  ['Lees n = Total df + 1 = 20 en k = Regression df = 2; controleer 20 − 2 − 1 = 17 bij Residual.','De vergelijking gebruikt Unstandardized B: ŷ = 10 + 2x₁ − x₂.','Std. Error of the Estimate = s_e = 3, dus MSE = s_e² = 9. Kruiscontrole voorkomt dat je waarden uit gelijkende kolommen verwisselt.'],
  'Verschillende SPSS-tabellen bevatten samen de structuur, vergelijking en foutmaat van hetzelfde model.',
  'Lees n en k uit ANOVA, de vergelijking uit B en de residuele variantie uit het kwadraat van de schattingsstandaardfout.',
  'Een samenhangende reconstructie van aantal, model en residuele variatie.',
  'Beta, B, standaardfout en variantie zijn verschillende grootheden ondanks hun plaats in dezelfde uitvoer.',
  [ref('formules',3,'Formules 35-38 en 51-54: SPSS-model reconstrueren'),ref('spss',9,'Uitwerkingen college 3, §3.4: Coefficients, Model Summary en ANOVA lezen')],guided=True)

q('validatie','software-uitvoer-keuze',2,
  'Welke uitvoer moet je bewaren om uitbijters in y én veranderende residuspreiding te onderzoeken?',
  case('Je voert de voorgeschreven regressieanalyse in SPSS uit. Het model levert al Model Summary, ANOVA en Coefficients. De opdracht verlangt daarna modeldiagnostiek.',
       table('Beschikbare aanvullende uitvoer',['Keuze','Inhoud'],[('A','Gestandaardiseerde residuen en absolute residuen tegenover x'),('B','Alleen een extra Coefficients-tabel'),('C','Alleen een histogram van de oorspronkelijke y'),('D','Alleen een groter aantal decimalen bij R²')])) ,
  [('Keuze A','Gestandaardiseerde residuen ondersteunen uitbijteranalyse in y. Absolute residuen tegenover x ondersteunen onderzoek naar veranderende foutspreiding.'),
   ('Keuze B','Coëfficiënten en hun toetsen zijn onvoldoende om beide gevraagde residuproblemen te beoordelen.'),
   ('Keuze C','De verdeling van de oorspronkelijke y is niet dezelfde als die van de residuen, en een histogram toont geen spreiding afhankelijk van x.'),
   ('Keuze D','Meer decimalen verbeteren de diagnostische dekking niet. R² onderzoekt niet de gevraagde afwijkende residuen of veranderende spreiding.')],
  ['Vertaal de opdracht eerst naar twee diagnosevragen: uitzonderlijke y-afwijkingen en samenhang van foutgrootte met x.','Bewaar gestandaardiseerde residuen voor de eerste vraag en absolute residuen met x voor de tweede.','Maak de passende tabel/grafiek en beoordeel de cursusgrenzen en p-waarden. De softwarehandeling krijgt zo een inhoudelijk doel in plaats van alleen een menuvolgorde.'],
  'Een SPSS-praktijkopdracht vraagt doelgerichte uitvoer die de gekozen modelvoorwaarden controleerbaar maakt.',
  'Bepaal eerst de gewenste diagnose en selecteer daarna de residumaten die daarvoor nodig zijn.',
  'Een uitvoerkeuze gekoppeld aan beide te onderzoeken modelproblemen.',
  'Een succesvol uitgevoerde regressie levert niet vanzelf alle benodigde diagnose-uitvoer.',
  [ref('spss',16,'Uitwerkingen college 5, §5.2-5.3: diagnose-uitvoer en residuen'),ref('attentie',5,'PDF p. 5-6: diagnosematen')])

q('tentamen','casusconclusie',3,
  'Welke rapportage bevat een controleerbare berekening, een begrensde conclusie en een passende vervolgactie?',
  case('Een accountant beoordeelt één nieuwe maand met een vooraf vastgelegd, passend basismodel. Het individuele 95%-voorspellingsinterval is [€ 88.000; € 112.000]. De werkelijke kosten bedragen € 118.000.',
       table('Aanvullende context',['Onderdeel','Informatie'],[('Puntvoorspelling','€ 100.000'),('Nieuwe maand','Niet gebruikt om model of interval te schatten'),('Mogelijke veranderingen','Nog niet onderzocht')])) ,
  [('€ 6.000 boven de bovengrens; onderzoek gegevens en bijzondere omstandigheden','118.000 − 112.000 = 6.000. De afwijking is een statistisch signaal onder het model, waarna inhoudelijk controlebewijs nodig is.'),
   ('€ 18.000 fraude, want realisatie min voorspelling is 18.000','Het residu is inderdaad 18.000, maar het model bewijst niet dat dit fraude of zelfs een administratieve fout is.'),
   ('Geen afwijking, want 95% laat vijf procent fouten toe','De betrouwbaarheid van de methode maakt een buitenliggende waarneming niet irrelevant. Zij vraagt om een begrensde interpretatie en onderzoek.'),
   ('Neem € 118.000 op in de basisperiode totdat de maand binnen het interval valt','De te beoordelen waarneming achteraf gebruiken om haar eigen beoordelingsgrens aan te passen maakt de controle niet onafhankelijk.')],
  ['Vergelijk de realisatie met de passende bovengrens voor één nieuwe maand: 118.000 − 112.000 = 6.000.','Het residu ten opzichte van de puntvoorspelling is 18.000, maar de overschrijding van de intervalgrens is 6.000. Benoem welk verschil je rapporteert.','Onderzoek invoer, bronboekingen en gewijzigde omstandigheden met het vastgelegde model. Een statistisch signaal bewijst geen foutoorzaak of fraude.'],
  'Een nieuwe controlewaarneming wordt met een vooraf bepaald individueel interval vergeleken.',
  'Bereken de relevante overschrijding, onderscheid die van het residu en verbind de statistische conclusie aan controlewerk.',
  'Een onderbouwde auditconclusie met concrete, passende vervolgactie.',
  'Een voorspelfout, een grensoverschrijding en een bewezen administratieve fout zijn verschillende uitspraken.',
  [ref('attentie',6,'PDF p. 6: voorspelling en controleperiode'),ref('programma',4,'Toetsing: toepassing en onderbouwing')])

q('mpu','schatterkeuze-patronen',3,
  'Bij welk gegevenspatroon biedt de verschilschatter het meest directe alternatief voor MPU?',
  case('De tabel toont illustratieve patronen voor b (boekwaarde) en w (werkelijke waarde), geen volledige steekproeven. De toepassingsvoorwaarden zijn voor de werkelijke steekproeven afzonderlijk gecontroleerd.',
       table('Drie patronen',['Patroon','b-waarden','w-waarden'],[('A','100; 200; 400','90; 190; 390'),('B','100; 200; 400','90; 180; 360'),('C','100; 200; 400','240; 80; 190')])) ,
  [('Patroon A: verschillen zijn constant, terwijl werkelijke waarden sterk spreiden','In A is b − w steeds 10. De werkelijke waarden lopen sterk uiteen, zodat corrigeren met vrijwel constante verschillen een precieze route kan bieden.'),
   ('Patroon B: de verhouding is constant, dus het absolute verschil ook','Bij B is w/b constant op 0,90, maar de verschillen zijn 10, 20 en 40. Dat past directer bij quotiëntschatten.'),
   ('Patroon C: geen duidelijk hulpverband is altijd het beste','Zonder bruikbaar verband bieden hulpvariabelen niet vanzelf winst. MPU kan dan juist een geschikte directe basis blijven.'),
   ('Alle patronen, want een bekend B maakt de foutvariantie altijd nul','Een bekend boektotaal verwijdert alleen onzekerheid over B. De controleverschillen of verhoudingen kunnen nog steeds sterk spreiden.')],
  ['Vergelijk absolute afwijkingen: A heeft steeds b − w = 10. B heeft verschillen 10, 20 en 40 maar telkens ratio 0,90.','De verschilschatter gebruikt de spreiding van de verschillen. Als die klein is tegenover s_w, kan zij preciezer zijn dan MPU.','In A is het patroon daarom direct passend, mits de volledige steekproef en toepassingsvoorwaarden dat ondersteunen. Drie illustratieve posten bewijzen die voorwaarden niet.'],
  'Schatterkeuze hangt af van het foutpatroon en de resterende spreiding na de correctie.',
  'Vergelijk absolute verschillen en relatieve verhoudingen voordat je kiest welke informatie naast de werkelijke waarden nuttig is.',
  'Een beargumenteerde keuze voor de verschilschatter op basis van het gegevenspatroon.',
  'Een kleine illustratieve tabel toont een patroon, maar bewijst niet dat de werkelijke steekproef aan alle voorwaarden voldoet.',
  [ref('slides',20,'PDF p. 20-25: verschil- en quotiëntschatter'),ref('formules',1,'Formules 4, 7 en 12: schatters vergelijken')])

q('verschil','verschilvariantie',3,
  'Welke spreiding hoort bij de onzekerheid van de verschilschatter?',
  case('N = 2.000 en n = 100. De fouten in de volledige gecontroleerde steekproef voldoen aan de cursusvoorwaarden. De tabel bevat alle 100 controles, ook de nulverschillen.',
       table('Samenvatting controleverschillen e = b − w',['Grootheid','Waarde'],[('Σe','300'),('Σe²','2.880'),('s_w','30')])) ,
  [('s_e = √20 ≈ 4,47; gebruik deze in de standaardfout van het totaal','s_e² = [2.880 − 300²/100]/99 = 20. Deze resterende verschilspreiding hoort bij de verschilschatter.'),
   ('s_e = 30; gebruik altijd de spreiding van werkelijke waarden','s_w = 30 hoort bij MPU. De verschilschatter projecteert de verschillen en gebruikt daarom hun spreiding.'),
   ('s_e = 3; gebruik de gemiddelde fout als spreiding','3 is Σe/n, dus de gemiddelde fout. Het gemiddelde zegt niet hoe sterk de verschillen onderling variëren.'),
   ('s_e = 20; een variantie hoeft niet te worden geworteld','20 is de variantie in euro². De standaardfoutformule met s_e verlangt de standaardafwijking in euro.')],
  ['Het gemiddelde verschil is 300/100 = 3. Corrigeer de som van kwadraten voor dit geschatte gemiddelde.','s_e² = [2.880 − 300²/100]/99 = 20 euro², dus s_e = √20 ≈ 4,4721 euro.','Voor de standaardfout van het totaal gebruik je N × s_e/√n × √((N − n)/(N − 1)). De relatief kleine verschilspreiding verklaart de mogelijke precisiewinst tegenover MPU.'],
  'De samenvatting van controleverschillen bepaalt de resterende onzekerheid na correctie op B.',
  'Bereken de variantie uit de verschilkolommen, neem de wortel en gebruik die spreiding in de passende totaalfoutformule.',
  'De standaardafwijking van controleverschillen met haar rol in de schattingsonzekerheid.',
  'Gemiddelde fout, verschilvariantie en standaardfout van het totaal zijn drie verschillende grootheden.',
  [ref('formules',1,'Formules 6-11: verschilspreiding en onzekerheid')])

q('regressieschatter','schatters-nauwkeurigheid',3,
  'Welke vergelijking van de twee schattingen is inhoudelijk juist?',
  case('Beide methoden zijn toegepast op dezelfde geschikte aselecte steekproef met dezelfde gekozen betrouwbaarheid van 95%. Beide toepassingsvoorwaarden zijn beoordeeld.',
       table('Resultaten',['Schatter','Puntschatting','Standaardfout totaal'],[('MPU','€ 100.000','€ 5.000'),('Regressieschatter','€ 102.000','€ 3.000')])) ,
  [('Regressie heeft een kleinere berekende marge, maar niet automatisch hogere gekozen betrouwbaarheid','Bij dezelfde kritieke waarde geeft SE 3.000 een kleinere marge dan SE 5.000. Het gekozen betrouwbaarheidsniveau blijft voor beide 95%.'),
   ('Regressie is bewezen dichter bij de werkelijke waarde omdat 102.000 hoger is','De werkelijke waarde is onbekend. Een andere puntschatting en kleinere standaardfout bewijzen niet welke schatting in deze trekking dichterbij ligt.'),
   ('MPU is betrouwbaarder omdat zijn interval breder is','De gekozen betrouwbaarheid is voor beide gelijk gegeven. Breedte beschrijft precisie binnen de gehanteerde model- en steekproefvoorwaarden.'),
   ('Neem altijd het gemiddelde 101.000 en deel de fouten door twee','De schattingen komen uit dezelfde steekproef en zijn niet onafhankelijk. Blind middelen met zo’n foutberekening is niet onderbouwd.')],
  ['Vergelijk eerst of steekproef, populatie en betrouwbaarheidsniveau overeenkomen; dat is hier expliciet gegeven.','De regressieschatter gebruikt bekende hulpinformatie om de resterende standaardfout te verkleinen van 5.000 naar 3.000.','Dat is hogere berekende precisie bij hetzelfde gekozen niveau. Beoordeel nog steeds of het hulpverband passend blijft en presenteer de onbekende werkelijke waarde niet als vastgesteld.'],
  'Twee schatters uit dezelfde gegevens kunnen verschillende centra en verschillende marges opleveren.',
  'Houd gekozen betrouwbaarheid gelijk en vergelijk de resterende onzekerheid zonder onbekende werkelijke waarden als gegeven te behandelen.',
  'Een onderscheid tussen precisie, betrouwbaarheid en onbekende daadwerkelijke schattingsfout.',
  'Kleinere berekende onzekerheid bewijst niet dat deze ene puntschatting dichter bij de werkelijkheid ligt.',
  [ref('formules',2,'Formules 18-23: regressieschatter en onzekerheid'),ref('boek-h8b',6,'Boek p. 216: nauwkeurigheid en voorwaarden')])


def for_lesson(lesson):
    result = deepcopy(QUESTIONS.get(lesson['id'], []))
    for item in result:
        apply_pattern(item)
    return result


ADDED_COUNT = sum(map(len, QUESTIONS.values()))
