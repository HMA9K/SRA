"""Brongebonden regressieonderwijs, goedgekeurde herziening 25 september 2026.

Aanroep na course_completion.enhance. Bestaande begripcheck-ID's blijven intact.
Brontabellen zijn handmatig tegen PDF-weergaven gecontroleerd; eigen invulvoorbeelden
zijn als zodanig benoemd. Deze module doet geen I/O en wijzigt geen examenvragen.
"""
from html import escape
from course_completion import bookref, table, steps


def ref(source, page, locator):
    return dict(source=source, page=page, locator=locator)


def answer(question, body):
    return ('<div class="learning-application"><h3>Zelf toepassen</h3><p>' + question +
            '</p><details class="worked-answer"><summary>Bekijk de uitwerking en afweging</summary>' +
            body + '</details></div>')


def figure(name, page, alt, caption):
    return (f'<figure class="learning-figure"><a href="bronnen/slides.pdf#page={page}" '
            'target="_blank" rel="noopener">'
            f'<img src="assets/learning/regression-{name}.png" alt="{escape(alt)}" '
            'loading="lazy" style="max-width:100%;height:auto"></a>'
            f'<figcaption>{caption} Open de afbeelding op volledig formaat.</figcaption></figure>')


def add(lesson, sources, title, body, refs, first=False):
    # De bronnen verschijnen genummerd onderaan de les (lesson_sources.py).
    for r in refs:
        if r not in lesson['refs']:
            lesson['refs'].append(r)
    section = dict(title=title, html=body, refs=refs, regressionVersion='2026-09-25')
    if first:
        lesson['sections'].insert(0, section)
    else:
        pos = next((i for i, s in enumerate(lesson['sections'])
                    if s['title'] == 'Zelf oefenen met deze aanvulling'), len(lesson['sections']))
        lesson['sections'].insert(pos, section)
    lesson['learningVersion'] = '2026-09-25'


def enhance(lessons, sources):
    L = {lesson['id']: lesson for lesson in lessons}
    # Idempotent voor previews; oudere aanvullingen en begripchecks blijven staan.
    for slug in ['regressielijn','anova','toetsen','diagnostiek','voorspellen','meervoudig',
                 'transformaties','modelbouw','validatie','tentamen']:
        lesson = L[slug]
        lesson['sections'] = [s for s in lesson['sections'] if s.get('regressionVersion') != '2026-09-25']
        lesson['formulaGuide'] = [s for s in lesson.get('formulaGuide', []) if s.get('regressionVersion') != '2026-09-25']

    add(L['regressielijn'], sources, 'Van controleverwachting naar regressiemodel',
        '<p>Bij <strong>cijferbeoordeling</strong> onderzoekt de accountant of financiële of operationele '
        'cijfers passen bij een verklaarbaar patroon. In het boek voorspellen arbeidsuren de productie. '
        'Een model maakt de verwachte uitkomst én de normale afwijking daarvan meetbaar. Daardoor kun je '
        'gericht onderzoeken welke maanden of posten afwijken. Alleen een gemiddeld productiegetal gebruiken '
        'zou een drukke maand en een rustige maand ten onrechte langs dezelfde maatstaf leggen.</p>'
        '<p>Kies daarom eerst de te beoordelen uitkomst <strong>y</strong>, de inhoudelijk passende '
        'verklarende variabele <strong>x</strong>, de eenheden en de onderzoekspopulatie. De regressielijn '
        'is een schatting uit gegevens; het onbekende populatiemodel bevat daarnaast een storingsterm. '
        'Regressie helpt een controleverwachting opbouwen, maar vervangt de beoordeling van de kwaliteit '
        'van de onderliggende gegevens niet.</p>'
        + table('Welke vraag stelt de accountant?', ['Vraag', 'Passende aanpak', 'Reden'], [
            ['Wat is het totale werkelijke bedrag van een populatie?', 'Een schatter uit hoofdstuk 8.',
             'Je trekt een steekproef en extrapoleert naar een populatietotaal.'],
            ['Past een nieuwe productie bij het aantal arbeidsuren?', 'Regressie met een individueel voorspellingsinterval.',
             'Je voorspelt y bij een gegeven x en beoordeelt de afwijking.'],
            ['Is een getekende stijgende lijn ook statistisch aantoonbaar?', 'Een t-toets op de populatiehelling.',
             'De steekproeflijn kan ook door toevalsvariatie stijgen.'],
        ])
        + '<p>De regressieschatter uit hoofdstuk 8 en de regressieanalyse uit hoofdstuk 9 gebruiken allebei '
        'samenhang. Hun eindvraag verschilt. De eerste schat een totaal met bekende hulpinformatie; '
        'de tweede beschrijft of voorspelt een uitkomst gegeven verklarende variabelen.</p>',
        [bookref('boek-h9a',233), bookref('boek-h9a',237), ref('attentie',3,'Attentiepunten, PDF 3: doel en regressiemodel')], first=True)

    car_rows = [[i, w] for i, w in enumerate([946,950,965,978,980,990,1055,1015,1055,1080],1)]
    add(L['regressielijn'], sources, 'Van gegevens naar Coefficients: cursusopgave H9.1',
        '<p>De cursusopgave bevat tien autogewichten. x is het gecodeerde bouwjaar 1 tot en met 10; '
        'y is het gewicht in kg. De codering is onderdeel van het model: vul niet ongemerkt een volledig '
        'kalenderjaar in een vergelijking in die op x = 1, …, 10 is geschat.</p>'
        + table('Oorspronkelijke gegevens H9.1', ['x: gecodeerd bouwjaar', 'y: gewicht in kg'], car_rows)
        + '<p>Gemiddelden zijn x̄ = 5,5 en ȳ = 1.001,4. Met de oorspronkelijke waarnemingen volgt '
        'b₁ = 14,73939 en b₀ = 920,33333. De kleinste-kwadratenmethode kiest deze waarden doordat '
        'Σ(yᵢ − ŷᵢ)² minimaal is. De lijn loopt bij een model met constante door (x̄, ȳ).</p>'
        + table('Kern van de SPSS-uitvoer, afgerond', ['Uitvoer', 'Waarde', 'Betekenis'], [
            ['Coefficients: B (Constant)', '920,333', 'Voorspeld gewicht bij gecodeerd jaar 0; beoordeel of dat binnen het relevante bereik ligt.'],
            ['Coefficients: B voor x', '14,739', 'Per jaar neemt het voorspelde gewicht met circa 14,74 kg toe.'],
            ['Model Summary: R Square', '0,884', 'Circa 88,4% van de waargenomen variatie in gewicht wordt lineair verklaard.'],
            ['Model Summary: Std. Error of the Estimate', '17,166', 'Resterende spreiding rond de lijn, in kg.'],
        ])
        + answer('Bereken de voorspelling en het residu voor x = 7, y = 1.055. Waarom is dit residu '
                 'geen bewijs van een fout in het gewicht?',
                 steps(['ŷ = 920,33333 + 14,73939 × 7 ≈ 1.023,51 kg.',
                        'e = y − ŷ = 1.055 − 1.023,51 ≈ +31,49 kg. Het gewicht ligt boven de lijn.',
                        'Een regressielijn voorspelt niet elke waarneming exact. De afwijking moet worden '
                        'beoordeeld met de resterende spreiding, relevante diagnoses en inhoudelijke informatie.',
                        'Het getal +31,49 is een residu in kg, geen p-waarde en geen standaardfout.']))
        + '<p class="note">De oorspronkelijke uitwerking rondt r tussentijds af op 0,940 en vindt '
        'daardoor sₑ ≈ 17,18. Rekenen met de ongeronde brongegevens geeft circa 17,166. '
        'Gebruik in een eigen berekening zoveel mogelijk ongeronde tussenuitkomsten.</p>',
        [ref('opgaven',10,'Opgavenbundel, H9.1, PDF 10'),ref('uitwerkingen',14,'Uitwerkingenbundel, H9.1, PDF 14–15'),
         ref('spss',9,'SPSS-uitwerkingen, college 3, PDF 9')])

    add(L['regressielijn'], sources, 'SPSS-praktijkroute college 3: de handberekening terugvinden',
        '<p><strong>Doel:</strong> verbinden wat je zelf berekent met de software-uitvoer. '
        'Gebruik het tabblad College3 van de aangeleverde SRA-dataset en cursusopgave H9.1.</p>'
        + steps(['Open de Excelgegevens via <strong>File → Open → Data</strong>; kies het tabblad College3. '
                 'Controleer in Variable View of x en Gewicht als kwantitatieve variabelen (Scale) worden behandeld.',
                 'Maak via <strong>Graphs → Chart Builder → Scatter/Dot → Simple Scatter</strong> '
                 'een diagram met x horizontaal en Gewicht verticaal. Bekijk richting, kromming en opvallende punten vóór het rekenen.',
                 'Vraag eventueel via <strong>Analyze → Descriptive Statistics → Descriptives</strong> de '
                 'gemiddelden, sommen en standaardafwijkingen op. Vergelijk die met de gegevens uit de handopgave.',
                 'Kies <strong>Analyze → Regression → Linear</strong>: Dependent = Gewicht, Independent = x. '
                 'Vraag onder Statistics <strong>Estimates</strong> en <strong>Model fit</strong> op.',
                 'Lees B uit Coefficients voor de vergelijking. Verbind vervolgens Model Summary en ANOVA: '
                 'R² = SSR/TotalSS en Std. Error of the Estimate = √MSE.',
                 'Dubbelklik op de grafiek en kies <strong>Elements → Fit Line at Total</strong> om de geschatte '
                 'lijn zichtbaar te maken. Controleer de schaal en het label met de vergelijking.'])
        + '<p><strong>Op te leveren:</strong> één diagram, de vergelijking met eenheden, de interpretatie '
        'van de helling en één zelf berekend residu. Daarmee controleer je of je de uitvoer begrijpt; '
        'alleen screenshots van menu’s leveren dat inzicht niet.</p>',
        [ref('spss',5,'SPSS-uitwerkingen, college 3, PDF 5–10')])

    add(L['anova'], sources, 'ANOVA vergelijkt de lijn met voorspellen door het gemiddelde',
        '<p>Zonder x zou je voor iedereen hetzelfde steekproefgemiddelde ȳ voorspellen. '
        '<strong>TotalSS</strong> meet de totale gekwadrateerde afwijking van die eenvoudige voorspelling. '
        'Met de regressielijn voorspelt iedere x een eigen ŷ. <strong>SSE</strong> meet wat daarna '
        'onverklaard blijft. Het verschil is <strong>SSR</strong>: de verbetering ten opzichte van '
        'alleen het gemiddelde. Daarom is R² een aandeel van de variatie en geen slagingspercentage '
        'van losse voorspellingen.</p>'
        '<p>Een <strong>vrijheidsgraad</strong> is de hoeveelheid onafhankelijke informatie die na het '
        'schatten overblijft. Het gemiddelde kost één vrijheidsgraad. Een regressiemodel schat k '
        'hellingen én een constante, zodat n − k − 1 vrijheidsgraden voor de residuen overblijven. '
        'SS moet daarom door de eigen df worden gedeeld voordat je gemiddelde kwadraten vergelijkt.</p>'
        '<p>Voor de accountant hangen de maatstaven samen met verschillende vragen: R² beschrijft '
        'verklaarde variatie, sₑ beschrijft de resterende spreiding in bedragen of aantallen, en F '
        'toetst of het model statistisch informatie toevoegt. Een hoge R² kan samengaan met een '
        'voor het controledoel te brede voorspellingsmarge.</p>',
        [bookref('boek-h9a',248),bookref('boek-h9b',250),ref('attentie',4,'Attentiepunten, variantieanalyse, PDF 4')], first=True)

    add(L['anova'], sources, 'Een volledige ANOVA-tabel reconstrueren',
        '<p>In cursusopgave H9.1 wordt het gewicht van een auto voorspeld met het bouwjaar. '
        'Dit is een enkelvoudige regressie: er is één verklarende variabele (k = 1). '
        'Hieronder zijn de drie kwadratensommen en het totale aantal vrijheidsgraden al gegeven.</p>'
        '<p><strong>Oefening:</strong> bereken zelf de vijf ontbrekende waarden, op papier of in je eigen notities. '
        'De cellen met <em>zelf berekenen</em> laten zien welke waarden je zoekt. '
        '<em>N.v.t.</em> betekent dat die cel in deze ANOVA-tabel niet wordt gebruikt. '
        'Open daarna de uitwerking om je tabel te vergelijken.</p>'
        + table('Oefentabel H9.1: gegeven waarden en vijf te berekenen cellen', ['Rij','Sum of Squares','df','Mean Square','F'], [
            ['Regression','17.923,10303','Zelf berekenen','Zelf berekenen','Zelf berekenen'],
            ['Residual','2.357,29697','Zelf berekenen','Zelf berekenen','n.v.t.'],
            ['Total','20.280,40000','9','n.v.t.','n.v.t.'],
        ])
        + answer('Bereken df voor Regression en Residual, beide Mean Squares en F. '
                 'Bepaal vervolgens n, R², sᵧ en sₑ en leg het verschil tussen beide spreidingen uit.',
            table('Uitwerking H9.1: de volledig ingevulde ANOVA-tabel', ['Rij','Sum of Squares','df','Mean Square','F'], [
                ['Regression','17.923,10303','1','17.923,10303','60,82595'],
                ['Residual','2.357,29697','8','294,66212','n.v.t.'],
                ['Total','20.280,40000','9','n.v.t.','n.v.t.'],
            ])
            + '<h4>Zo kom je aan de uitkomst: zes reken- en uitlegstappen</h4>'
            '<p>De stappen 1–3 vullen de vijf ontbrekende tabelwaarden in. '
            'Stap 4 berekent het verklaarde aandeel; stap 5 berekent twee spreidingsmaten; stap 6 legt hun verschil uit. '
            'Reken tussendoor met ongeronde waarden; de tabel toont afgeronde uitkomsten.</p>'
            + steps(['<strong>Bepaal n en de vrijheidsgraden.</strong> Total df = n − 1 = 9, dus n = 10. '
                   'Regression df = k = 1 en Residual df = n − k − 1 = 10 − 1 − 1 = 8.',
                   '<strong>Deel iedere SS door de bijbehorende df.</strong> '
                   'MSR = 17.923,10303 / 1 = 17.923,10303; MSE = 2.357,29697 / 8 ≈ 294,66212.',
                   '<strong>Bereken F als MSR / MSE.</strong> F = 17.923,10303 / 294,66212 ≈ 60,82595.',
                   '<strong>Bereken het verklaarde aandeel R².</strong> '
                   'R² = 17.923,10303 / 20.280,4 ≈ 0,883765. Circa 88,38% van de gewichtvariatie wordt verklaard.',
                   '<strong>Bereken de twee standaardafwijkingen.</strong> '
                   'sᵧ = √(20.280,4 / 9) ≈ 47,46976 kg; sₑ = √294,66212 ≈ 17,16572 kg.',
                   '<strong>Leg het verschil uit.</strong> sᵧ beschrijft spreiding rond het algemene gemiddelde. '
                   'sₑ beschrijft spreiding rond '
                   'de bijpassende voorspelling voor elk bouwjaar. Met x blijft hier minder spreiding over.']))
        + '<p><strong>Controleer jezelf:</strong> SSR + SSE = TotalSS; de twee df tellen op tot Total df; '
        '√MSE sluit aan op Model Summary. Deze controles vinden veel verwisselingen voordat je een toetsconclusie trekt.</p>',
        [ref('uitwerkingen',14,'Uitwerkingenbundel, H9.1, PDF 14–15'),ref('formules',3,'Formuleblad, formules 35–43, PDF 3')])

    add(L['toetsen'], sources, 'Van de onderzoeksvraag naar de juiste toets',
        '<p>Een toets verdeelt de gevonden helling door haar onzekerheid. Een helling van 10 kan '
        'overtuigend zijn als de standaardfout 1 is, en weinig overtuigend als die 20 is. '
        'Daarom beoordeel je de verhouding t en niet alleen B. De p-waarde vertelt hoe uitzonderlijk '
        'de uitkomst is onder de nulhypothese; de grootte van B vertelt wat het verband inhoudelijk betekent.</p>'
        + table('Kies eerst het doel van de toets', ['Doel','Toets','Wat deze toets niet beantwoordt'], [
            ['Een specifieke stijgende of dalende helling aantonen','Eenzijdige t-toets met vooraf gekozen richting.',
             'Een F-toets bewaart het teken van de helling niet.'],
            ['Nagaan of één enkelvoudig model een lineair verband bevat','Tweezijdige t-toets of globale F-toets.',
             'Significantie bewijst geen oorzakelijk verband.'],
            ['Nagaan of een meervoudig model als geheel informatie bevat','Globale F met k en n − k − 1 vrijheidsgraden.',
             'Een significante F bewijst niet dat iedere variabele afzonderlijk nodig is.'],
            ['De extra bijdrage van één coëfficiënt binnen een meervoudig model toetsen','t = B/Std. Error bij βⱼ = 0.',
             'De totale R van het model vervangt de individuele coëfficiënt en haar standaardfout niet.'],
        ])
        + '<p>Bij een controleverwachting zijn zowel <strong>statistische significantie</strong> als '
        'de omvang en precisie van het verband van belang. Een kleine p-waarde maakt een brede '
        'voorspellingsmarge niet smaller. Beoordeel dus ook de residuele spreiding en de modelvoorwaarden.</p>',
        [bookref('boek-h9b',252),bookref('boek-h9b',256),ref('attentie',8,'Attentiepunten, toetsen meervoudige regressie, PDF 8')], first=True)

    add(L['toetsen'], sources, 'Tabellenbundel gebruiken: dezelfde casus, drie toetsroutes',
        '<p>H9.1 geeft t ≈ 7,79910, F ≈ 60,82595, n = 10 en één verklarende variabele. '
        'Neem α = 0,05. De tabellenbundel geeft <strong>overschrijdingskansen</strong>: de kans '
        'rechts van de positieve tabelwaarde.</p>'
        + table('Werkelijk af te lezen tabelwaarden', ['Vraag','Tabel en keuze','Kritiek gebied'], [
            ['Positief verband?','Tabel 13.4, df = 8, kolom 0,05: 1,860.','t &gt; 1,860.'],
            ['Enig lineair verband?','Tabel 13.4, df = 8, kolom 0,025: 2,306.','t &lt; −2,306 of t &gt; 2,306.'],
            ['Hetzelfde tweezijdige enkelvoudige verband via F?','Tabel 13.8, ν₁ = 1, ν₂ = 8, α = 0,05: 5,32.','F &gt; 5,32.'],
        ])
        + '<p>Bij de tweezijdige t-toets verdeel je α over twee staarten. Bij F gebruik je α '
        'volledig in de rechterstaart: de toetsingsgrootheid is een verhouding van niet-negatieve '
        'gemiddelde kwadraten. Bij één helling is F = t². Daardoor kan F beide richtingen aantonen, '
        'maar niet zelfstandig vaststellen dat de richting positief is.</p>'
        + answer('Schrijf het volledige antwoord voor een positief verband tussen gecodeerd bouwjaar en gewicht. '
                 'Wat verandert er wanneer de vraag alleen “een verband” zegt?',
                 steps(['H₀: β₁ ≤ 0; H₁: β₁ &gt; 0. β₁ is de populatiehelling voor gewicht ten opzichte van bouwjaar.',
                        't ≈ 7,79910, df = 8; uit tabel 13.4 volgt t<sub>0,05;8</sub> = 1,860.',
                        '7,79910 &gt; 1,860, dus H₀ verwerpen. Er is een significant positief lineair verband '
                        'tussen bouwjaar en gewicht. Het α-risico is relevant.',
                        'Voor “een verband” gebruik je H₀: β₁ = 0 en H₁: β₁ ≠ 0. Dan geldt |t| &gt; 2,306 '
                        'of F &gt; 5,32. Ook die H₀ wordt verworpen; de onderzoeksconclusie is tweezijdig.']))
        + '<p class="note">SPSS Sig. = ,000 betekent een zeer kleine afgeronde p-waarde, '
        'geen kans van exact nul. Noteer bij een weergave met drie decimalen bijvoorbeeld p &lt; 0,001. '
        'Vergelijk een reeds tweezijdige Sig. met α; verdeel die α niet nogmaals over twee staarten.</p>',
        [ref('tabellen',12,'Tabellenbundel, tabel 13.4, PDF 12'),ref('tabellen',20,'Tabellenbundel, tabel 13.8, PDF 20'),
         ref('uitwerkingen',15,'Uitwerkingenbundel, H9.1g/h, PDF 15')])

    add(L['diagnostiek'], sources, 'Een modelcontrole begint bij het gegevensproces',
        '<p>Diagnostiek onderzoekt of de berekende lijn en onzekerheid passen bij de gegevens. '
        'Dat gaat verder dan een lijst grenswaarden invullen. Een p-waarde uit een ongeschikt model '
        'kan een onterecht overtuigende indruk geven; een voorspellingsinterval kan te smal of verkeerd gecentreerd zijn.</p>'
        '<p>De eerste vier analyses onderzoeken de structuur en bijzondere waarnemingen: samengevoegde groepen, '
        'tijdsvertraging, uitbijters en invloed. Daarna onderzoek je normaliteit, constante spreiding en '
        'bij tijdreeksen autocorrelatie. De volgorde helpt oorzaken te herkennen: een ten onrechte '
        'samengevoegde groep kan bijvoorbeeld zowel een krom patroon als afwijkende residuen veroorzaken.</p>'
        + table('Signaal, verklaring en beslissing', ['Vaststelling','Wat moet je vervolgens begrijpen?'], [
            ['Twee groepen volgen verschillende lijnen.','Eén lijn kan de verschillen tussen groepen verwarren met samenhang binnen groepen.'],
            ['Een groot gestandaardiseerd residu.','De y-waarde is onverwacht gegeven het model; onderzoek invoer, context en modelvorm.'],
            ['Een hoge Cook’s Distance.','De geschatte lijn is gevoelig voor deze waarneming; dat maakt haar nog niet ongeldig.'],
            ['Een diagnose verwerpt H₀.','Zoek een onderbouwde aanpassing en herhaal daarna de analyses op de nieuwe residuen.'],
        ])
        + '<p>De accountantsbetekenis is een betrouwbare basis voor cijferbeoordeling. '
        'Een opvallende post kan juist controle-informatie bevatten. Het verwijderen ervan uitsluitend '
        'om R² of normaliteit te verbeteren zou het controleprobleem uit beeld halen.</p>',
        [bookref('boek-h9b',259),ref('attentie',5,'Attentiepunten, analyses 1–4, PDF 5–6')], first=True)

    add(L['diagnostiek'], sources, 'Samengevoegde groepen: eerst zichtbaar maken, dan modelleren',
        '<p>In SPSS-opdracht college 4 onderzoekt Bank X de roodstand van 195 klanten. '
        'Een ongesplitst diagram van gemiddeld inkomen en roodstand lijkt één relatie te tonen. '
        'Na inkleuren naar <strong>vast of variabel inkomen</strong> blijken er groepen te zijn: '
        'het inkomenstype hangt met beide variabelen samen. De ene regressielijn mengt dan twee patronen.</p>'
        + table('Wat de officiële verkenning laat zien', ['Kandidaat x','Beoordeling uit de casus'], [
            ['Leeftijd','Geen duidelijk verband met de roodstand in het getoonde diagram.'],
            ['Aantal keren loon ontvangen','Een dalend verband binnen de groep met variabel inkomen; vaste inkomens hebben vrijwel altijd 12 of 13 betalingen.'],
            ['Absolute hypotheeklasten','Geen duidelijk rechtstreeks verband in de getoonde verkenning.'],
            ['Hypotheeklasten als percentage van inkomen','Wel een stijgend patroon bij beide inkomenstypen.'],
        ])
        + '<p><strong>Methodekeuze:</strong> splitsen geeft iedere groep een eigen lijn. Een dummy kan '
        'een verschil in niveau binnen één meervoudig model verwerken. Als ook de hellingen verschillen, '
        'is alleen een niveaudummy onvoldoende. Kies dus op basis van wat de groepen laten zien, niet '
        'uitsluitend op de hoogste gezamenlijke correlatie.</p>'
        + '<h3>SPSS-praktijkroute college 4</h3>'
        + steps(['Lees College4 in en maak <strong>Graphs → Chart Builder → Simple Scatter</strong>, '
                 'met Gem Inkomsten p/m op x en Grootte Roodstand op y.',
                 'Maak daarna een <strong>Grouped Scatter</strong> met dezelfde assen en Type Inkomen bij '
                 '<strong>Set color</strong>. Deze vergelijking laat zien wat de groepsindeling toevoegt.',
                 'Herhaal de verkenning met de andere kandidaten, waaronder de relatieve hypotheeklast. '
                 'Geef per kandidaat aan of het patroon binnen de groepen standhoudt.',
                 'Lever de gewone en gegroepeerde grafiek plus een gemotiveerde modelkeuze op. '
                 'Bij deze crosssectie zijn tijdsvertraging en de cursusroute voor autocorrelatie niet van toepassing.']),
        [ref('spss',11,'SPSS-uitwerkingen, college 4, PDF 11–13'),bookref('boek-h9c',261)])

    add(L['diagnostiek'], sources, 'Tijdsvertraging lezen in grafieken én Correlations',
        '<p><strong>Tijdsvertraging</strong> betekent dat x uit een eerdere periode bij de huidige y hoort. '
        'Reclame kan bijvoorbeeld pas later in afzet doorwerken. Een vergelijking van reclame en afzet '
        'in dezelfde maand kan daardoor weinig samenhang laten zien, terwijl een verschoven vergelijking '
        'een duidelijk patroon heeft. Begin met de tijdsvolgorde en een inhoudelijk aannemelijke vertraging.</p>'
        + figure('lag-timeseries',95,
                 'Tijdreeksen reclame en afzet en Correlations bij geen verschuiving en verschuiving van één periode.',
                 'De pieken en dalen vallen niet vanzelf in dezelfde maand. Kijk ook naar het aantal bruikbare paren in de correlatiematrix.')
        + table('Brongegevens van de verschuivingen', ['Verschuiving','Pearson r','Sig. (2-tailed)','Bruikbare paren','Beoordeling'], [
            ['0','−0,118','0,584','24','Geen overtuigende lineaire samenhang op hetzelfde tijdstip.'],
            ['1','0,207','0,343','23','Een periode verschuiven is hier onvoldoende.'],
            ['2','0,963',',000 (p &lt; 0,001)','22','Sterk positief patroon; de collegeslide kiest deze vertraging.'],
            ['3','Zie bronfiguur','Zie bronuitvoer','21 bij drie verloren randparen','De puntenwolk wordt weer duidelijk losser.'],
        ])
        + figure('lag-diagrams',98,
                 'Vier oorspronkelijke spreidingsdiagrammen voor verschuiving nul, één, twee en drie. Twee geeft het strakste stijgende patroon.',
                 'Vergelijk eerst zelf de vier puntenwolken; de derde geeft het duidelijkste lineaire patroon.')
        + answer('Hoe formuleer je het aangepaste model en waarom verandert n? Betekent een gekozen vertraging '
                 'dat autocorrelatie niet meer hoeft te worden onderzocht?',
                 steps(['Koppel afzet in periode t aan reclame in periode t − 2: ŷₜ = b₀ + b₁xₜ₋₂.',
                        'Voor de eerste twee afzetperioden ontbreken binnen deze reeks de bijpassende eerdere '
                        'reclamewaarden. Er blijven 22 complete paren over; gebruik niet automatisch n = 24.',
                        'Dit gaat over de koppeling tussen x en y. Autocorrelatie gaat over samenhang tussen '
                        'opeenvolgende storingen. Controleer daarom ook de residuen van het aangepaste tijdreeksmodel.',
                        'Een grote correlatie bewijst geen oorzaak. Onderbouw de vertraging inhoudelijk en beoordeel '
                        'de bruikbaarheid op nieuwe perioden; kies niet achteraf onbeperkt uit verschuivingen alleen om een kleine p te vinden.'])),
        [ref('slides',94,'Slides, tijdsvertraging, PDF 94–99'),bookref('boek-h9c',262)])

    add(L['diagnostiek'], sources, 'Residuals Statistics: drie verschillende waarschuwingen',
        '<p>De collegeslides onderzoeken huur per maand met n = 40. Lees eerst de rijnaam. '
        '<strong>Std. Residual</strong> meet een afwijking in y relatief aan de residuele spreiding; '
        '<strong>Mahalanobis Distance</strong> meet hoe uitzonderlijk x is; <strong>Cook’s Distance</strong> '
        'meet de invloed op de geschatte regressie. De drie vragen kunnen verschillende antwoorden geven.</p>'
        + table('Relevante rijen uit de oorspronkelijke huurcasus', ['Rij','Minimum','Maximum','Mean','Std. Deviation','N'], [
            ['Std. Residual','−1,352','2,490','0,000','0,987','40'],
            ['Mahal. Distance','0,000','2,388','0,975','0,815','40'],
            ["Cook’s Distance",'0,000','0,313','0,030','0,060','40'],
        ])
        + answer('Beoordeel uitbijters in y, uitbijters in x en invloedrijke punten met de cursusgrenzen.',
            steps(['n = 40 ≤ 100, dus de grenzen voor Std. Residual zijn −2 en +2. '
                   'Het minimum −1,352 blijft binnen de grens; het maximum 2,490 overschrijdt +2. '
                   'Er is minstens één potentiële uitbijter in y.',
                   'MD<sub>kritiek</sub> = 0,975 + 3 × 0,815 = 3,420. Het maximum 2,388 is lager; '
                   'geen x-uitbijtersignaal volgens deze cursusregel.',
                   'CD<sub>kritiek</sub> = 0,030 + 3 × 0,060 = 0,210. Het maximum 0,313 is hoger; '
                   'onderzoek het potentiële invloedrijke punt.',
                   'Deze samenvatting identificeert niet welke rijen het betreft. Zoek de individuele '
                   'residuen/afstanden en het spreidingsdiagram op. Onderbouw een behandeling met de casusinformatie.']))
        + figure('residuals',100,'Volledige oorspronkelijke Residuals Statistics met het omcirkelde maximum Std. Residual van 2,490.',
                 'De volledige tabel bevat ook andere soorten residuen. Gebruik voor deze cursusregel de rij Std. Residual.')
        + '<p><strong>Let op:</strong> 2,490 is hier geen t-toetsingsgrootheid uit Coefficients. '
        'Zoek er dus geen t-grens uit de tabellenbundel bij. Het is evenmin de ruwe afwijking in euro’s. '
        'De standaardisering maakt afwijkingen vergelijkbaar met de cursusvuistregel.</p>',
        [ref('slides',100,'Slides, uitbijters en invloed, PDF 100–108'),ref('formules',3,'Formuleblad, formules 44–45 en 48, PDF 3')])

    add(L['diagnostiek'], sources, 'Tests of Normality en ABSRES: kies de juiste rij en grootheid',
        '<p><strong>Normaliteit</strong> en <strong>homoscedasticiteit</strong> onderzoeken verschillende '
        'eigenschappen. Normaliteit gaat over de vorm van de verdeling van de storingen, benaderd met '
        'residuen. Homoscedasticiteit betekent dat hun spreiding niet systematisch verandert met x. '
        'Bij dezelfde huurcasus kan de ene diagnose dus wel en de andere geen probleem aanwijzen.</p>'
        + table('Tests of Normality, oorspronkelijke huurcasus', ['Toets','Statistic','df / n','Sig.'], [
            ['Kolmogorov-Smirnov','0,103','40','0,200*'],['Shapiro-Wilk','0,928','40','0,014'],
        ])
        + '<p>Omdat n = 40 ≤ 50 schrijft de cursus <strong>Shapiro-Wilk</strong> voor. '
        'H₀: de residuen zijn normaal verdeeld; H₁: niet normaal verdeeld. '
        '0,014 &lt; 0,05, dus H₀ verwerpen. De andere kolom is geen uitwijkmogelijkheid '
        'om toch een gunstige conclusie te krijgen. Het sterretje bij 0,200 zegt bovendien '
        'dat deze uitvoer een ondergrens voor die p-waarde weergeeft.</p>'
        + figure('normality',110,'Tests of Normality met Shapiro-Wilk p 0,014 voor veertig gestandaardiseerde residuen en een histogram.',
                 'Het histogram geeft een beeld; de cursusbeslissing gebruikt de toets die bij n past.')
        + '<h3>Waarom absolute residuen?</h3><p>Een gewoon residu kan positief of negatief zijn. '
        'Voor de spreiding telt de grootte van de afwijking, ongeacht de richting. '
        'Daarom neem je ABSRES = |e| en onderzoek je de samenhang met de verklarende variabele.</p>'
        + table('De juiste cel in Correlations, huurcasus', ['Vergelijking','Pearson r','Sig. (2-tailed)','Gebruik'], [
            ['ABSRES met oppervlakte in m²','−0,103','0,526','Dit is de bedoelde heteroscedasticiteitsdiagnose.'],
            ['ABSRES met huur per maand','0,099','0,545','Niet de in deze opgave gevraagde vergelijking met x.'],
            ['Huur met oppervlakte','0,892',',000','Dit beschrijft de hoofdrelatie; het test geen constante residuspreiding.'],
        ])
        + '<p>Voor ABSRES tegenover oppervlakte is p = 0,526 &gt; 0,05. De cursus-H₀ van '
        'constante spreiding wordt niet verworpen. Daarmee is normaliteit nog steeds een probleem. '
        'Controleer ook het diagram: geen significant lineair verband van ABSRES met x bewijst '
        'niet dat iedere denkbare vorm van veranderende spreiding ontbreekt.</p>'
        + figure('absres',112,'Correlatiematrix ABSRES, huur en oppervlakte plus het diagram van ABSRES tegenover oppervlakte.',
                 'De omcirkelde cel hoort bij ABSRES en de verklarende variabele oppervlakte.')
        + '<p><strong>Vervolg:</strong> onderzoek bijzondere waarnemingen, een betere variabele of modelvorm, '
        'en waar passend gewogen regressie. Bij WLS krijgen waarnemingen met meer variantie minder '
        'gewicht in de kwadratensom. Het cursusvoorbeeld gebruikt gewicht 1/x² bij een specifieke '
        'spreidingsstructuur; pas dat niet als universele reparatie toe. Beoordeel na elke wijziging '
        'de nieuwe residuen en leg vast waarom de wijziging inhoudelijk gerechtvaardigd is.</p>',
        [ref('slides',110,'Slides, normaliteit en ABSRES, PDF 110–116'),ref('attentie',6,'Attentiepunten, diagnoses 5 en 6, PDF 6'),
         bookref('boek-h9d',274)])

    add(L['diagnostiek'], sources, 'Durbin-Watson: van tabellenbundel naar beslissing',
        '<p>Bij een tijdreeks kan een positieve storing worden gevolgd door opnieuw een positieve '
        'storing. Dan zijn de afwijkingen niet onafhankelijk. De d-grootheid vergelijkt veranderingen '
        'tussen opeenvolgende residuen met de totale residugrootte. Weinig verandering geeft een '
        'lage d; afwisselend positieve en negatieve residuen kunnen juist een hoge d geven.</p>'
        '<p>Neem het cursusvoorbeeld met n = 24, k = 1 en α = 0,05. Zoek in '
        '<strong>tabel 13.9</strong> de rij n = 24, daarna de juiste α-regel en de twee kolommen '
        'voor k = 1. Je vindt d<sub>L</sub> = 1,27 en d<sub>U</sub> = 1,45. '
        'Spiegel ze om 2: 4 − d<sub>U</sub> = 2,55 en 4 − d<sub>L</sub> = 2,73.</p>'
        + table('Beslissingsgebieden bij deze tabelkeuze', ['Gebied','Conclusie volgens de cursusroute'], [
            ['d ≤ 1,27','Aanwijzing voor positieve autocorrelatie.'],
            ['1,27 &lt; d &lt; 1,45','Onbeslist; de tabel geeft hier geen definitieve beslissing.'],
            ['1,45 ≤ d ≤ 2,55','Geen autocorrelatie aangetoond.'],
            ['2,55 &lt; d &lt; 2,73','Onbeslist.'],
            ['d ≥ 2,73','Aanwijzing voor negatieve autocorrelatie.'],
        ])
        + answer('Eigen afleesvarianten bij dezelfde brontabel: beoordeel d = 1,35, d = 1,90 en d = 2,80. '
                 'Welke fout maak je als je “d dicht bij 2” als enige regel gebruikt?',
                 '<p>1,35 ligt in het onbesliste gebied; 1,90 in het gebied waarin geen autocorrelatie '
                 'wordt aangetoond; 2,80 geeft een aanwijzing voor negatieve autocorrelatie. '
                 'Een globale vuistregel mist de afhankelijke grenzen en de onbesliste gebieden. '
                 'Bij ander n, k of α moet je opnieuw aflezen.</p>')
        + '<p class="note">De boekcorrectie die elders in deze les wordt uitgewerkt gebruikt '
        'α = 0,01 en daarom d<sub>L</sub> = 1,04 en d<sub>U</sub> = 1,20. '
        'Deze waarden spreken de bovenstaande grenzen bij α = 0,05 niet tegen. '
        'Een andere betrouwbaarheid geeft een andere toets.</p>',
        [ref('tabellen',30,'Tabellenbundel, tabel 13.9, PDF 30–31'),ref('slides',118,'Slides, Durbin-Watson, PDF 118–119'),
         bookref('boek-h9d',282)])

    add(L['diagnostiek'], sources, 'SPSS-praktijkroute college 5: diagnoses en herbeoordeling',
        '<p><strong>Doel:</strong> voor de 60 personen uit de leeftijd-bloeddrukcasus begrijpen '
        'waarom een significante lijn nog moet worden onderzocht. De oorspronkelijke lijn is '
        'bloeddruk = 83,463 + 1,044 × leeftijd. De bronuitvoer geeft t = 8,862 en Sig. = ,000.</p>'
        + steps(['Lees College5 in en schat <strong>Analyze → Regression → Linear</strong>: '
                 'Dependent = Blood pressure, Independent = Age. Maak ook een spreidingsdiagram.',
                 'Bewaar onder <strong>Save</strong> de relevante residuen en afstanden: '
                 'gestandaardiseerde residuen, Mahalanobis en Cook. Hiermee kun je de samenvatting '
                 'in Residuals Statistics terugvoeren naar individuele personen.',
                 'De oorspronkelijke Std. Residual minimumwaarde is −6,166, MD<sub>max</sub> = 3,380 '
                 'bij grens 4,088, en CD<sub>max</sub> = 0,328 bij grens 0,140. Onderzoek de '
                 'betreffende personen met de omschrijvingen uit de bronopgave.',
                 'De officiële uitwerking sluit persoon 33 uit voor bloeddruk en behoudt de sportieve '
                 'persoon 24. Behandel dit als een casusbeslissing die toelichting vereist. Bewaar '
                 'de oorspronkelijke gegevens en documenteer een uitsluiting, zodat de keuze controleerbaar blijft.',
                 'Voer de regressie opnieuw uit. Gebruik vervolgens in <strong>Analyze → Descriptive '
                 'Statistics → Explore → Plots → Normality plots with tests</strong> de residuen '
                 'van juist dit nieuwe model. De nieuwe n is 59; de cursus kiest dus Kolmogorov-Smirnov.',
                 'Maak via <strong>Transform → Compute Variable</strong> ABSRES = ABS(residu van het '
                 'actuele model). Bereken via <strong>Analyze → Correlate → Bivariate</strong> de '
                 'Pearson-correlatie met Age. De bron vindt p = 0,470: geen heteroscedasticiteit aangetoond.',
                 'Rapporteer per analyse de tabel of grafiek, relevante waarden, conclusie en eventuele '
                 'remedie. Tijdsvertraging en autocorrelatie zijn in deze crosssectie niet van toepassing.'])
        + '<p class="note">SPSS kan bij herhalen ZRE_1, ZRE_2 of andere volgnummers maken. '
        'De officiële uitleg noemt soms ZRE_1 terwijl een hernieuwde regressie is uitgevoerd. '
        'Selecteer op basis van het bijbehorende model, niet blind op de naam. '
        'Gebruik binnen dezelfde diagnose ook hetzelfde aantal complete waarnemingen.</p>',
        [ref('spss',14,'SPSS-uitwerkingen, college 5, PDF 14–21')])

    add(L['voorspellen'], sources, 'De voorspelling is een verwachting met een onzekerheidsmarge',
        '<p>Een puntvoorspelling ligt op de lijn en is zelden exact de realisatie. '
        'Voor een accountant is daarom de vervolgvraag van belang: hoeveel afwijking is '
        'nog verenigbaar met de gebruikelijke spreiding? Een <strong>individueel voorspellingsinterval</strong> '
        'bevat zowel onzekerheid over de lijn als de extra storing van de nieuwe waarneming.</p>'
        + table('Lees eerst wat wordt gevraagd', ['Gevraagd','Passend antwoord','Gevolg'], [
            ['De verwachte productie bij één gegeven hoeveelheid arbeidsuren','Puntvoorspelling ŷ₀.','Geeft één centrumwaarde; geen informatie over de marge.'],
            ['Het gemiddelde van alle vergelijkbare situaties bij x₀','Interval voor de gemiddelde respons.','Geen extra individuele storing; daarom smaller.'],
            ['De productie van één concrete nieuwe maand','Individueel voorspellingsinterval, formule 50.','De eerste 1 onder de wortel blijft staan.'],
        ])
        + '<p>De term 1/n weerspiegelt dat meer basisgegevens de lijn preciezer schatten. '
        'De afstandsterm (x₀ − x̄)² maakt de marge groter buiten het centrum van de onderzochte '
        'x-waarden. Extra basisgegevens nemen de natuurlijke spreiding van één nieuwe uitkomst '
        'niet weg. Daarom verdwijnt het individuele interval niet zodra n groot wordt.</p>',
        [bookref('boek-h9d',283),ref('formules',3,'Formuleblad, individueel voorspellingsinterval, formule 50, PDF 3')], first=True)

    add(L['voorspellen'], sources, 'Boekcasus Productiviteit: een controlemaand beoordelen',
        '<p>Het boek gebruikt 24 basismaanden en onderzoekt daarna de controleperiode. '
        'Voor januari is x₀ = 55,5 in duizenden arbeidsuren. De benodigde waarden zijn '
        'sₑ = 1,10, sₓ = 6,31 en x̄ = 48,683. De voorspelling is ŷ₀ = 32,75 '
        'in tienduizenden producten. De werkelijke productie is 34,3.</p>'
        + table('Vul de onderdelen van de intervalformule afzonderlijk in', ['Onderdeel','Invulling','Reden'], [
            ['Vrijheidsgraden','24 − 2 = 22','Een enkelvoudig model schat een helling en een constante.'],
            ['Kritieke t','Tabel 13.4: df 22, overschrijdingskans 0,025 → 2,074','Een tweezijdig 95%-interval verdeelt 5% over beide staarten.'],
            ['Onzekerheidsfactor','√[1 + 1/24 + (55,5 − 48,683)²/(23 × 6,31²)] ≈ 1,04519','Individuele storing, lijnonzekerheid en afstand tot x̄.'],
            ['Marge','2,074 × 1,10 × 1,04519 ≈ 2,3845','De schaal blijft tienduizenden producten.'],
        ])
        + answer('Stel het interval op en formuleer de controleconclusie. Wat betekent de marge in stuks?',
            '<p>32,75 ± 2,3845 geeft ongeveer [30,37; 35,13] × 10.000 stuks. '
            'De marge is circa 23.845 stuks. De realisatie 34,3 × 10.000 ligt binnen het interval: '
            'deze modelvergelijking geeft geen bijzonder afwijkingssignaal voor januari. '
            'Dat bewijst niet dat elke productieboeking juist is. Een realisatie buiten het interval '
            'zou gericht onderzoek vragen naar brongegevens, omstandigheden en modelgeschiktheid.</p>')
        + '<p>Controleer bij iedere nieuwe maand opnieuw de x-waarde en dus de afstandsterm. '
        'Gebruik niet voor alle maanden automatisch de marge van januari. '
        'Extrapolatie buiten het onderzochte bereik vraagt bovendien een inhoudelijke beoordeling; '
        'een ingevulde formule kan daar een schijnbaar precies maar ongefundeerd antwoord geven.</p>',
        [bookref('boek-h9d',283),bookref('boek-h9d',284),ref('tabellen',12,'Tabellenbundel, tabel 13.4, df 22, PDF 12')])

    add(L['meervoudig'], sources, 'Een extra variabele verandert de vraag die de helling beantwoordt',
        '<p>Een enkelvoudig salarismodel kan een verschil tussen groepen laten zien doordat '
        'die groepen ook verschillen in leeftijd, opleiding of leidinggeven. Een meervoudig model '
        'vergelijkt kenmerken <strong>bij gelijkblijvende overige opgenomen variabelen</strong>. '
        'Daardoor kan de betekenis en grootte van een coëfficiënt veranderen na uitbreiding.</p>'
        '<p>Dat maakt het model bruikbaar voor een meer gerichte verwachting bij cijferbeoordeling. '
        'Het blijft nodig om te onderzoeken of de gekozen kenmerken voldoende en juist gemeten zijn. '
        'Een gedeeltelijk gecorrigeerd salarisverschil is niet automatisch een oorzakelijk effect.</p>'
        '<p>Dummy’s maken categorieën bruikbaar zonder een verzonnen afstand tussen categorieën '
        'te introduceren. Bij drie categorieën en een constante gebruik je twee dummy’s: '
        'de derde categorie is de referentie. Alle drie de dummy’s plus de constante opnemen '
        'geeft een exacte afhankelijkheid, want de drie dummy’s tellen voor iedere waarneming op tot één.</p>',
        [bookref('boek-h10a',290),ref('spss',32,'SPSS-uitwerkingen, dummyvariabelen, PDF 32–35'),
         ref('exam2025',9,'Tentamen 17 maart 2025, salarisuitvoer, PDF 9')], first=True)

    salary = [['(Constant)','739,508','490,677','1,507','0,133'],
              ['Leeftijd','38,495','6,492','5,929','&lt; 0,001'],
              ['Beoordeling','71,550','53,000','1,350','0,179'],
              ['Vrouw','−273,746','111,998','−2,444','0,015'],
              ['HBO','644,888','123,861','5,207','&lt; 0,001'],
              ['WO','1.010,210','170,216','5,935','&lt; 0,001'],
              ['Leidinggevende','2.237,947','177,802','12,587','&lt; 0,001']]
    add(L['meervoudig'], sources, 'Volledige toepassing: salaris, dummy’s en modeltoets',
        '<p>Dit is de oorspronkelijke Coefficients-uitvoer van het tentamen 17 maart 2025. '
        'De ANOVA-tabel heeft Total df = 199, Regression df = 6 en Residual df = 193. '
        'Daaruit volgen n = 200 en k = 6. Model Summary vermeldt R² = 0,647, '
        'adjusted R² = 0,636 en sₑ = 758,06049.</p>'
        + table('Coefficients, relevante kolommen uit afbeelding 13', ['Variabele','B','Std. Error','t','Sig.'],salary)
        + answer('1. Hoeveel hoger is de voorspelling voor WO dan voor HBO bij gelijke overige kenmerken? '
                 '2. Voorspel het salaris van een man van 50, leidinggevende, zonder HBO/WO, beoordeling 10. '
                 '3. Hoe toets je de coëfficiënt Vrouw op een negatieve richting?',
            steps(['WO en HBO worden allebei met dezelfde referentiegroep vergeleken. Het verschil is '
                   '1.010,210 − 644,888 = € 365,322. Het antwoord is dus circa € 365,32; '
                   '1.010,210 is het verschil met de referentie, niet met HBO.',
                   'De dummy’s Vrouw, HBO en WO zijn nul, Leidinggevende is één. '
                   'ŷ = 739,508 + 38,495 × 50 + 71,550 × 10 + 2.237,947 = € 5.617,705. '
                   'Op hele euro’s afgerond: € 5.618.',
                   'H₀: β<sub>Vrouw</sub> ≥ 0, H₁: β<sub>Vrouw</sub> &lt; 0. Gebruik t = −2,444 '
                   'en df = 193. De oorspronkelijke sleutel gebruikt tabelrij 190: t-grens = −1,653 '
                   'bij eenzijdig α = 0,05. H₀ verwerpen: binnen dit model is de voorspelling voor '
                   'vrouwen significant lager bij gelijke opgenomen kenmerken. Het α-risico is relevant.',
                   'De globale F = 58,923 met p &lt; 0,001 levert statistisch bewijs dat minstens één hellingscoëfficiënt '
                   'niet nul is. Beoordeling kan tegelijk individueel niet significant zijn (p = 0,179).']))
        + '<p class="note"><strong>Rekenverschil met de sleutel:</strong> de officiële uitwerking '
        'drukt bij vraag 20 € 5.617 af. De daar afgedrukte coëfficiënten en invulling tellen op '
        'tot € 5.617,705, dus gebruikelijk afronden geeft € 5.618. De methode en dummykeuze '
        'blijven gelijk; deze leeromgeving laat het rekenverschil expliciet zien.</p>'
        + '<p>Gebruik de vergelijking die de opgave aanwijst. Laat Beoordeling in deze '
        'voorspellingsvraag staan, ook al is zij niet significant: verwijderen zou een ander model '
        'vereisen waarin ook de overige coëfficiënten opnieuw worden geschat.</p>',
        [ref('exam2025',9,'Tentamen 17 maart 2025, vragen 19–21 en uitvoer, PDF 9'),
         ref('exam2025',14,'Tentamen 17 maart 2025, officiële uitwerking, PDF 14–15'),
         ref('tabellen',13,'Tabellenbundel, tabel 13.4, rij 190, PDF 13')])

    add(L['transformaties'], sources, 'Een transformatie verandert welk patroon lineair wordt',
        '<p>Een rechte lijn in de verkeerde variabelen kan systematisch naast de waarnemingen '
        'liggen. Bij een <strong>transformatie</strong> verander je de schaal, zodat een inhoudelijk '
        'passend niet-recht patroon met een lineair model kan worden geschat. Je kiest de '
        'transformatie op basis van de puntenwolk, mogelijke samenhang en de residuen.</p>'
        + table('Herkenningsvragen voor modelkeuze', ['Patroon','Model','Wat verandert er?'], [
            ['Een vaste toename van y bij één extra x','Lineair: ŷ = b₀ + b₁x','B is een absolute toename.'],
            ['Dezelfde vermenigvuldigingsfactor in y bij één extra x','Exponentieel: ln(ŷ) = b₀ + b₁x','De factor is exp(b₁); y moet positief zijn.'],
            ['Dezelfde verandering in y bij eenzelfde verhouding in x','Logaritmisch: ŷ = b₀ + b₁ln(x)','Een verdubbeling van x verandert y met b₁ln(2); x moet positief zijn.'],
            ['Een vaste verhouding in x geeft een vaste factor in y','Machtsmodel: ln(ŷ) = b₀ + b₁ln(x)','Verdubbelen van x geeft factor 2<sup>b₁</sup>; x en y moeten positief zijn.'],
        ])
        + '<p>Een transformatie kan een kromming of veranderende spreiding verminderen. '
        'Zij maakt foute of niet-vergelijkbare gegevens niet alsnog juist. Controleer na schatting '
        'de residuen op de gekozen modelschaal en vertaal de voorspelling terug naar de eenheden '
        'waarin de accountant de uitkomst beoordeelt.</p>',
        [bookref('boek-h10a',292),bookref('boek-h10a',298),ref('attentie',7,'Attentiepunten, transformaties, PDF 7')], first=True)

    add(L['transformaties'], sources, 'Terugtransformeren: de hele logwaarde en beide intervalgrenzen',
        '<p>Een logmodel voorspelt eerst een logwaarde. Alleen de laatste term terugtransformeren '
        'of de constante ongemoeid laten geeft een ander model. '
        'Als een interval op logschaal is gegeven, transformeer je de onder- en bovengrens afzonderlijk; '
        'de resulterende marge op de oorspronkelijke schaal is meestal niet symmetrisch.</p>'
        + answer('Eigen rekenvoorbeeld bij de cursusformules: ln(ŷ) = 2 + 0,3x. '
                 'Neem x = 4 en een gegeven individueel interval [2,8; 3,6] op logschaal. '
                 'Wat zijn voorspelling, interval en het effect van één extra x op de oorspronkelijke schaal?',
                 steps(['De voorspelde logwaarde is 2 + 0,3 × 4 = 3,2. De directe terugtransformatie is '
                        'exp(3,2) ≈ 24,5325 oorspronkelijke eenheden.',
                        'De grenzen worden exp(2,8) ≈ 16,4446 en exp(3,6) ≈ 36,5982. '
                        'De afstanden tot 24,5325 zijn ongelijk: circa 8,0878 omlaag en 12,0657 omhoog.',
                        'Eén extra x geeft factor exp(0,3) ≈ 1,34986, dus circa 34,99% hoger. '
                        'De coëfficiënt 0,3 is geen toename van 0,3 oorspronkelijke eenheden.',
                        'Dit is de directe terugtransformatie volgens de cursus. Zonder aanvullende '
                        'aannames is exp(voorspelde logwaarde) niet automatisch het rekenkundig gemiddelde van y.']))
        + '<p><strong>Rekenvolgorde:</strong> controleer positiviteit, bepaal de juiste getransformeerde '
        'variabelen, vul B in, reken de hele rechterkant uit en transformeer pas daarna terug. '
        'Rond de logwaarde niet vroeg af: exponentiëren kan de afronding zichtbaar vergroten.</p>',
        [ref('formules',3,'Formuleblad, transformaties, formules 55–58, PDF 3'),bookref('boek-h10c',321)])

    add(L['transformaties'], sources, 'SPSS-praktijkroute college 6: vier patronen, vier modelkeuzes',
        '<p><strong>Doel:</strong> bij de plantgegevens het patroon herkennen voordat je een '
        'regressie kiest. De steellengte is telkens de verklarende variabele. '
        'De officiële uitwerking kiest per uitkomst een andere vorm.</p>'
        + table('Modellen uit de officiële college-6-uitwerking', ['Uitkomst y','Modelvorm','Independent','Dependent'], [
            ['Bladlengte','Exponentieel','Steellengte','LN(Bladlengte)'],
            ['Bloembreedte','Lineair','Steellengte','Bloembreedte'],
            ['Bloembladlengte','Macht','LN(Steellengte)','LN(Bloembladlengte)'],
            ['Aantal bloemen','Logaritmisch','LN(Steellengte)','Aantal bloemen'],
        ])
        + steps(['Lees College6 in en maak met <strong>Chart Builder</strong> een scattermatrix '
                 'of vier afzonderlijke spreidingsdiagrammen. Lees de assen; in de oorspronkelijke '
                 'matrix staat steellengte alleen in de relevante kolom steeds op de x-as.',
                 'Maak noodzakelijke logvariabelen met <strong>Transform → Compute Variable</strong>, '
                 'bijvoorbeeld LnBladLengte = LN(Bladlengtemm). Controleer vooraf of alle te logaritmeren waarden positief zijn.',
                 'Schat per uitkomst het lineaire model en de in de tabel gekozen getransformeerde variant '
                 'via <strong>Analyze → Regression → Linear</strong>. Bewaar welke y-schaal bij welke uitvoer hoort.',
                 'Vergelijk de vorm van de puntenwolk en de residuen; noteer ook R² en sₑ met hun modelschaal. '
                 'De bronopgave vraagt expliciet om R² te vergelijken, maar R² van y en R² van ln(y) '
                 'meten variatie in verschillende grootheden. Een hogere waarde bewijst daarom op zichzelf '
                 'geen betere voorspelling op de oorspronkelijke schaal.',
                 'Maak ten minste één voorspelling per gekozen model en toon de benodigde '
                 'terugtransformatie. Optioneel biedt <strong>Analyze → Regression → Curve Estimation</strong> '
                 'meerdere modelvormen tegelijk; dezelfde inhoudelijke beoordelingsregels blijven gelden.']),
        [ref('spss',22,'SPSS-uitwerkingen, college 6, PDF 22–27'),ref('attentie',7,'Attentiepunten, transformaties, PDF 7')])

    add(L['modelbouw'], sources, 'Modelbouw balanceert extra informatie en onnodige complexiteit',
        '<p>Een extra variabele kan ontbrekende samenhang verklaren, maar ook vooral toeval '
        'uit de bestaande gegevens volgen. Gewone R² daalt bij uitbreiding van hetzelfde OLS-model '
        'op dezelfde data niet. Zij is daarom geen eerlijke beloning voor iedere nieuwe variabele. '
        '<strong>Adjusted R²</strong> rekent de hoeveelheid overgebleven informatie mee en '
        'kan dalen wanneer de extra variabele weinig toevoegt.</p>'
        '<p>Bij <strong>multicollineariteit</strong> bevatten verklarende variabelen sterk '
        'overlappende informatie. Het model kan gezamenlijk goed passen, terwijl de afzonderlijke '
        'bijdragen onzeker zijn. Voor de accountant is dit verschil van belang: een bruikbare gezamenlijke '
        'verwachting is iets anders dan een onderbouwde verklaring waarom een afzonderlijk kenmerk '
        'een bedrag verhoogt of verlaagt.</p>'
        '<p>VIF kijkt voor iedere x naar een hulpregressie op alle andere x-variabelen. '
        'Een losse correlatiematrix geeft aanwijzingen, maar vervangt die gezamenlijke vergelijking niet. '
        'Verwijderen kan de overlap beperken; de inhoudelijke functie van een variabele blijft '
        'meewegen en het model moet na verwijderen opnieuw worden geschat en beoordeeld.</p>',
        [bookref('boek-h10b',305),bookref('boek-h10b',308),ref('attentie',7,'Attentiepunten, modelbouw en multicollineariteit, PDF 7–8')], first=True)

    add(L['modelbouw'], sources, 'Geneste modellen: de extra bijdrage zichtbaar berekenen',
        '<p><strong>Genest</strong> betekent dat het kleine model in het uitgebreide model zit. '
        'De uitkomst y, waarnemingen en weging moeten gelijk zijn. Dan kun je de afname in '
        'onverklaarde variatie toeschrijven aan de extra variabelen, in plaats van aan een andere dataset.</p>'
        + table('Eigen rekenvoorbeeld bij formule 63: dezelfde 50 waarnemingen', ['Model','k','SSR','SSE','Residual df'], [
            ['Klein','2','800','200','47'],['Uitgebreid','3','850','150','46'],
        ])
        + answer('Bereken de partiële F voor de ene extra variabele en beide adjusted R²-waarden. '
                 'Waarom gebruik je de MSE van het uitgebreide model?',
            steps(['TotalSS is in beide modellen 1.000. De extra variabele verklaart 850 − 800 = 50 extra.',
                   'MSE<sub>uitgebreid</sub> = 150/46 ≈ 3,26087. '
                   'F = (850 − 800)/(150/46) ≈ 15,3333, met ν₁ = 1 en ν₂ = 46.',
                   'Deze MSE beschrijft de resterende foutvariatie nadat de extra variabele is opgenomen. '
                   'De teller meet de verbetering door precies die toevoeging.',
                   'Klein: adjusted R² = 1 − (200/47)/(1.000/49) ≈ 0,79149. '
                   'Uitgebreid: 1 − (150/46)/(1.000/49) ≈ 0,84022.',
                   'De fit na correctie verbetert. Voor een formele toets kies je vooraf α en zoek je '
                   'de bijbehorende F-grens met 1 en 46 vrijheidsgraden in tabel 13.8. '
                   'Een betere fit vervangt validatie en modeldiagnoses niet.']))
        + '<p>Bij één extra variabele sluit deze tweezijdige vergelijking aan op de gekwadrateerde '
        't-toets van die variabele in het uitgebreide model. Voor een blok van q extra variabelen '
        'deel je de toename van SSR ook door q. Vergelijk geen model voor y met een model voor ln(y) '
        'met deze formule.</p>',
        [ref('formules',3,'Formuleblad, adjusted R², formule 51, PDF 3'),
         ref('formules',4,'Formuleblad, partiële F, formule 63, PDF 4'),
         ref('tabellen',20,'Tabellenbundel, tabel 13.8, PDF 20–29'),bookref('boek-h10c',319)])

    add(L['modelbouw'], sources, 'SPSS-praktijkroute college 7: huizen, selectie en overlap',
        '<p><strong>Doel:</strong> uit een reeks woningkenmerken een verklaarbaar model voor '
        'Verkoopprijs maken. De officiële uitwerking laat eerst handmatige backwardselectie zien. '
        'De dependent is Verkoopprijs; de tekst op bronpagina 28 noemt haar eenmaal ten onrechte onafhankelijk.</p>'
        + steps(['Lees College7 in, controleer de meetniveaus en begin met de bruikbare kwantitatieve '
                 'kenmerken. Een nominale categoriecode is niet vanzelf een hoeveelheid: gebruik '
                 'voor categorieën later dummy’s.',
                 'Schat via <strong>Analyze → Regression → Linear</strong> een volledig model. '
                 'Noteer per stap k, n, adjusted R², de grootste Sig. van de kandidaten en de inhoudelijke betekenis.',
                 'De college-uitwerking gebruikt als verwijderingsgrens 0,05. Verwijder eerst '
                 'Aantal verdiepingen en schat opnieuw; daarna kan Aantal badkamers vervallen. '
                 'Lees de nieuwe p-waarden steeds uit de nieuwe uitvoer.',
                 'Vraag onder <strong>Statistics → Collinearity diagnostics</strong> Tolerance en VIF op. '
                 'Vergelijk het beginmodel met het geselecteerde model en bekijk een correlatiematrix '
                 'om de overlap met Woonoppervlakte te begrijpen.',
                 'Maak voor de optionele categorische uitbreiding dummy’s via <strong>Transform → '
                 'Create Dummy Variables</strong>, of via <strong>Compute Variable</strong> met bijvoorbeeld '
                 'Buurt = "Kippenbuurt". Laat per categorievariabele één dummy als referentie weg.',
                 'Automatische selectie kan met <strong>Method = Backward</strong>. Controleer de ingestelde '
                 'invoer- en verwijderingscriteria en de gebruikte waarnemingen; een standaardinstelling '
                 'hoeft niet gelijk te zijn aan de handmatige grens uit de opdracht.',
                 'Lever het selectieverloop en een modelinterpretatie op. Voer na selectie de '
                 'relevante diagnoses opnieuw uit; backwardselectie garandeert geen afwezigheid van multicollineariteit.'])
        + '<p class="note"><strong>Bronverschil:</strong> deze praktijkuitwerking gebruikt Sig. &lt; 0,05; '
        'de attentiepunten noemen bij backward ½α. Gebruik de expliciete selectiegrens van de '
        'opgave. Een gewone tweezijdige p-waarde wordt bij een toets met de totale α vergeleken.</p>',
        [ref('spss',28,'SPSS-uitwerkingen, college 7, PDF 28–36'),ref('attentie',7,'Attentiepunten, backward, PDF 7')])

    add(L['validatie'], sources, 'Een sterke fit in de training kan buiten de training tegenvallen',
        '<p>Het model en de variabelen zijn gekozen met de trainingsgegevens. Diezelfde '
        'gegevens nogmaals beoordelen geeft daarom een gunstig beeld van de prestatie. '
        '<strong>Validatie</strong> onderzoekt of het vaste model ook bruikbaar is voor gegevens '
        'die bij die keuze niet zijn gebruikt. Dit sluit aan op het controledoel: nieuwe waarnemingen '
        'beoordelen met een eerder opgebouwde verwachting.</p>'
        '<p>Bij data splitting kies je eerst training en test. Bereken coëfficiënten, selectiestappen '
        'en eventuele transformaties met de training. Gebruik vervolgens precies dat vaste model '
        'voor de test. Als je na iedere testuitkomst het model aanpast, is de testset zelf '
        'onderdeel van de modelkeuze geworden en is een onafhankelijke eindbeoordeling nodig.</p>'
        + table('MSE en MSPR beantwoorden verschillende vragen', ['Grootheid','Berekening','Interpretatie'], [
            ['MSE op training','SSE/(n<sub>train</sub> − k − 1)','Geschatte residuele variantie na schatting op de training.'],
            ['MSPR op test','Σ(y − ŷ)²/n<sub>test</sub>','Gemiddelde gekwadrateerde fout bij voorspellen met het vaste model.'],
        ])
        + '<p>De noemer van MSPR is het aantal getoetste voorspellingen. Je schat geen k + 1 '
        'nieuwe parameters uit die testset. Beide maten hebben gekwadrateerde eenheden. '
        'Vergelijk ze op dezelfde y-schaal; MSE van ln(y) en MSPR van eurobedragen zijn '
        'niet rechtstreeks vergelijkbaar.</p>',
        [ref('attentie',8,'Attentiepunten, validatie, PDF 8–9'),ref('formules',4,'Formuleblad, validatieformule 64, PDF 4')], first=True)

    add(L['validatie'], sources, 'Voorspelfouten op een onafhankelijke testset uitwerken',
        '<p><strong>Eigen rekenvoorbeeld bij de cursusmethode.</strong> Een vast regressiemodel '
        'voorspelt de waarden in de onderstaande testset. Neem als trainings-MSE 1. '
        'De variabelen hebben in training en test dezelfde schaal.</p>'
        + table('Testgegevens en gekwadrateerde fouten', ['Waarneming','Werkelijke y','Vaste voorspelling ŷ','y − ŷ','(y − ŷ)²'], [
            ['1','10','12','−2','4'],['2','14','13','1','1'],['3','20','17','3','9'],
        ])
        + answer('Bereken MSPR en formuleer een gevolg voor het gebruik van de trainingsonzekerheid. '
                 'Kun je hieruit een harde algemene afkeurgrens afleiden?',
                 '<p>MSPR = (4 + 1 + 9)/3 = 4,6667. De gemiddelde gekwadrateerde fout op de test '
                 'is veel groter dan de trainings-MSE 1. De training geeft hier een te gunstige '
                 'indruk van nieuwe voorspelfouten. Onderzoek onder meer overfitting, een andere '
                 'samenstelling van de testgegevens of veranderde omstandigheden. De attentiepunten '
                 'noemen MSPR als een beter uitgangspunt wanneer deze duidelijk groter is. '
                 'Er staat geen universele numerieke afkeurgrens en deze kleine oefentest geeft '
                 'op zichzelf geen zekerheid over de toekomstige prestatie.</p>')
        + '<p>Laat in een tentamenantwoord zien waar de voorspellingen vandaan komen, '
        'wat de noemer is en welke vergelijking je maakt. Alleen “MSPR = 4,67” laat '
        'de betekenis voor de bruikbaarheid van het model onbesproken.</p>',
        [ref('attentie',9,'Attentiepunten, data splitting en MSPR, PDF 9'),ref('formules',4,'Formuleblad, formule 64, PDF 4')])

    add(L['tentamen'], sources, 'Van SPSS-uitvoer naar een beargumenteerd tentamenantwoord',
        '<p>Het tentamen vraagt om informatie uit meerdere tabellen en grafieken te verbinden. '
        'Begin bij de gevraagde uitspraak. Lees daarna de afhankelijke variabele, opgenomen '
        'voorspellers, n, modelnummer en eventuele weging in de uitvoer. Een getal uit een vorige '
        'modelstap kan correct afgelezen zijn en toch bij de verkeerde vraag horen.</p>'
        + table('Welke prestatie moet je zelfstandig kunnen leveren?', ['Onderdeel','Volledig antwoord'], [
            ['Vergelijking en voorspelling','B-coëfficiënten, correcte dummy’s/transformaties, invulling, eenheden en interpretatie.'],
            ['ANOVA','SS en df reconstrueren, MSE/F/R² berekenen en de grootheden onderscheiden.'],
            ['Toetsen','Populatieparameter, H₀/H₁, α, df, tabelkeuze of p, beslissing, context en risico.'],
            ['Diagnostiek','Relevante tabel/figuur, gekozen maat en grens, conclusie en onderbouwde vervolgactie.'],
            ['Modelbouw','Selectiecriterium, één wijziging per stap, opnieuw schatten, overlap en bruikbaarheid beoordelen.'],
            ['Validatie','Vast model op ongebruikte gegevens, MSPR correct berekenen en met passende MSE vergelijken.'],
        ])
        + '<p>Oefen eerst met markeringen bij de relevante cellen en daarna met volledige '
        'ongemarkeerde uitvoer. Gebruik zowel open berekeningen als MC-vragen: de eerste '
        'controleren je gehele redenering, de tweede helpen veelgemaakte interpretatiefouten herkennen.</p>',
        [ref('programma',4,'Onderwijsprogramma, toetsing, PDF 4'),ref('exam2025',9,'Tentamen 17 maart 2025, vragen 19–21, PDF 9'),
         ref('attentie',5,'Attentiepunten, vereiste diagnoseconclusies, PDF 5')], first=True)

    add(L['tentamen'], sources, 'SPSS-praktijkroute college 8: één volledige analyse van autoverkoop',
        '<p><strong>Doel:</strong> de onderdelen zelfstandig verbinden. De opdrachttekst noemt 163 '
        'auto’s. Het oorspronkelijke Excelblad College8 bevat echter 162 datarijen, zonder '
        'ontbrekende waarden; alle 162 worden in de getoonde modellen gebruikt. '
        'De kopregel is geen waarneming. De gecontroleerde data bevatten geen verkoopwaarde nul, '
        'hoewel de casustekst onverkoopbare auto’s met waarde nul noemt.</p>'
        + steps(['Open College8_data.sav of het tabblad College8. Leg vast dat Verkoopwaarde '
                 'de dependent is en welke bouwjaar- of leeftijdcodering je gebruikt. '
                 'Maak spreidingsdiagrammen, ook met groepen zichtbaar.',
                 'Schat de enkelvoudige regressie en bewaar actuele residuen, Mahalanobis en Cook. '
                 'De bron geeft Std. Residual maximum 3,469 bij grens 3; MD maximum 2,813 '
                 'bij grens 3,634; Cook maximum 0,075 bij grens 0,039. '
                 'De afwijkende auto’s lijken in de casus geen invoerfouten en blijven behouden.',
                 'Voer <strong>Explore → Normality plots with tests</strong> uit op de actuele '
                 'residuen. Bij n = 162 gebruik je volgens de cursus Kolmogorov-Smirnov. '
                 'De oorspronkelijke tabel op PDF 40 toont Statistic = 0,059 en Sig. = 0,200*. '
                 'De tekst eronder verwart de toetsingsgrootheid met de p-waarde. '
                 'Het sterretje betekent dat 0,200 een ondergrens is; H₀ wordt niet verworpen. '
                 'Maak ABSRES = ABS(RES van dit model) en correleer met Bouwjaar: '
                 'Sig. = ,000 wijst hier wel op heteroscedasticiteit. Leg uit waarom deze '
                 'twee diagnoses verschillende conclusies kunnen geven.',
                 'Maak waar nodig dummy’s met <strong>Transform → Create Dummy Variables</strong>. '
                 'De categorie met weggelaten dummy is de referentie. Controleer logvoorwaarden '
                 'vóór transformatie. Een werkelijke nul mag je niet logaritmeren of stilzwijgend verwijderen; '
                 'in het hier gecontroleerde Excelblad zijn verkoopwaarde en kilometerstand positief.',
                 'Schat het meervoudige model, voer backwardselectie uit en beoordeel VIF. '
                 'De uitwerking kiest in deze casus Kilometerstand óf LnKmStand. Leg de gemaakte '
                 'keuze uit en controleer na de selectiestappen opnieuw de residuen.',
                 'De eerste groepscontrole keek naar merk; later blijkt Aandrijving relevant. '
                 'Vergelijk daarom een model met aandrijvingsdummy’s met inhoudelijk verdedigbare '
                 'afzonderlijke modellen. Alleen “geen groepen gezien” in de eerste grafiek '
                 'is onvoldoende om alle groepsstructuur uit te sluiten.',
                 'Optioneel: <strong>Data → Split File → Compare Groups: Aandrijving</strong> '
                 'en daarna <strong>Regression → Linear → Method: Backward</strong>. '
                 'Zet Split File na deze vergelijking weer uit. Onderzoek per groep opnieuw n, '
                 'de vuistregel n ≥ 10k en de modelvoorwaarden.'])
        + '<p><strong>Wat de bron wel en niet afrondt:</strong> het gezamenlijke model met '
        'dummy’s heeft adjusted R² = 0,868. Het benzinemodel heeft 0,919, maar de groepen '
        'bevatten 81, 41 en 40 waarnemingen en zijn verschillende datasets. Dit is geen '
        'zuivere vergelijking van geneste modellen. De officiële uitwerking werkt de volledige '
        'diagnostiek van alle drie afzonderlijke modellen niet uit. De aanvullende '
        'herberekening hieronder vult die controle vanuit de oorspronkelijke Exceldata aan, '
        'met herkenbaar onderscheid tussen bronuitvoer en eigen berekening.</p>',
        [ref('spss',37,'SPSS-uitwerkingen, college 8, PDF 37–47')])

    add(L['tentamen'], sources, 'Zelfstandige eindopdracht met bronuitvoer',
        '<p>Open de salarisuitvoer van het tentamen 17 maart 2025, PDF-pagina 9. '
        'Werk zonder uitwerking een kort controlememo uit. Neem de oorspronkelijke '
        'onderzoeksvraag en variabelen als uitgangspunt.</p>'
        + steps(['Reconstrueer n en k uit ANOVA en leg R² = 0,647 en adjusted R² = 0,636 uit.',
                 'Stel de vergelijking op met alle B-coëfficiënten en benoem de referentiegroepen.',
                 'Beantwoord vragen 19–21 met berekening, correcte tabelkeuze en volledige conclusie.',
                 'Bepaal de eerste backwardkandidaat bij de in de vraag gebruikte grens en beoordeel '
                 'de VIF-uitvoer. Voer geen voorspelling uit met een denkbeeldig opnieuw geschat model.',
                 'Schrijf welke diagnoses en nieuwe gegevens nog nodig zijn voordat je het model '
                 'als betrouwbare controleverwachting gebruikt.'])
        + '<details class="worked-answer"><summary>Controleer de kern van je redenering</summary>'
        '<p>n = 200, k = 6 en residual df = 193. R² beschrijft het aandeel salarisvariatie '
        'dat dit model in deze dataset verklaart; adjusted R² corrigeert voor modelomvang. '
        'WO tegenover HBO is € 365,32 bij gelijke overige kenmerken. '
        'De gevraagde puntvoorspelling is met de afgedrukte coëfficiënten € 5.617,705 '
        '(gebruikelijk afgerond € 5.618; de sleutel drukt € 5.617 af). '
        'De eenzijdige t voor Vrouw is −2,444 met kritieke grens −1,653. '
        'Beoordeling heeft p = 0,179 en is de eerste selectiekandidaat; maximale VIF '
        '1,355 geeft volgens de cursusgrens geen multicollineariteitssignaal. '
        'Significantie en VIF alleen bewijzen nog geen bruikbaarheid op nieuwe gegevens.</p></details>',
        [ref('exam2025',9,'Tentamen 17 maart 2025, PDF 9–10'),ref('exam2025',14,'Officiële uitwerking, PDF 14–15')])

    add(L['anova'], sources, 'De huurcasus: correlatie, ANOVA en voorspelling verbinden',
        '<p>De collegeslides gebruiken een doorlopende casus met huur per maand als y en '
        'oppervlakte in m² als x. Het spreidingsdiagram laat een stijgend patroon zien, '
        'maar de punten liggen niet allemaal op de lijn. ANOVA meet hoeveel variatie de '
        'oppervlakte verklaart en hoeveel voor de vervolgdiagnoses overblijft.</p>'
        + figure('rent-output',72,'Spreidingsdiagram huur tegen oppervlakte en Correlations met r 0,892 en n 40.',
                 'De combinatie van grafiek, variabelen en aantallen bepaalt hoe je de uitvoer leest.')
        + table('ANOVA van het oorspronkelijke huurmodel', ['Rij','SS','df','MS'], [
            ['Regression','472.578,299','1','472.578,299'],
            ['Residual','121.859,201','38','3.206,821'],
            ['Total','594.437,500','39',''],
        ])
        + steps(['n = 40 en k = 1. R² = 472.578,299/594.437,500 ≈ 0,7950. '
                 'De oppervlakte verklaart circa 79,5% van de huurvariatie in deze dataset.',
                 'sₑ = √(121.859,201/38) ≈ € 56,63 per maand. Dit is de spreiding rond '
                 'de lijn; het is geen standaardfout van de helling.',
                 'F = 472.578,299/(121.859,201/38) ≈ 147,367. Toets het model met '
                 'ν₁ = 1 en ν₂ = 38; lees bij gebruik van een tabelbenadering de gekozen rij expliciet af.',
                 'De lijn is ŷ = 485,971 + 6,757x. Bij 100 m² volgt met deze afgedrukte '
                 'coëfficiënten ŷ = € 1.161,671, afgerond € 1.161,67 per maand.',
                 'De combinatie van hoge R² en significante F maakt de diagnoses niet overbodig. '
                 'In de les diagnostiek blijkt dezelfde casus een normaliteitsprobleem te hebben.'])
        + '<p class="note">In de breuk op slide PDF 75 ontbreekt een cijfer in SSE '
        '(12.189,201 in plaats van 121.859,201). De ANOVA-uitvoer en '
        'TotalSS − SSR geven 121.859,201; alleen dit bedrag levert de afgedrukte MSE '
        '3.206,821 op. Controleer een formule-invulling dus met de oorspronkelijke tabel.</p>',
        [ref('slides',72,'Slides, huurcasus en ANOVA, PDF 72–76'),ref('slides',86,'Slides, F-toets huurcasus, PDF 86–87')])

    add(L['voorspellen'], sources, 'Voorspellen met de huurcasus na modelaanpassing',
        '<p>Na de aanpassing in de collegeslides gebruikt de huurcasus 39 waarnemingen. '
        'De nieuwe lijn is ŷ = 512,479 + 6,388x, met MSE = 2.706,538, '
        'x̄ = 81,54 en sₓ = 15,992. Gebruik alle onderdelen van ditzelfde model. '
        'Een oude helling combineren met de nieuwe MSE levert geen geldig interval op.</p>'
        + answer('Bereken voor 80 m² een individueel 95%-voorspellingsinterval met de '
                 'tabelbenadering uit de slide: df = 37, tabelrij 35, t = 2,030.',
                 steps(['Puntvoorspelling: 512,479 + 6,388 × 80 = 1.023,519, dus circa € 1.023,52.',
                        'Neem de wortel van de MSE: sₑ = √2.706,538 ≈ 52,0244.',
                        'Marge = 2,030 × 52,0244 × √[1 + 1/39 + (80 − 81,54)²/(38 × 15,992²)] '
                        '≈ € 106,97. De slide rondt sₑ op 52,02 af en geeft € 106,96.',
                        'Het interval met de ongeronde tussenwaarde is ongeveer [€ 916,55; € 1.130,49] '
                        'per maand. Een huur buiten dit interval is een onderzoeksaanleiding, geen automatische boekingsfout.',
                        'De oppervlakte 80 ligt dicht bij x̄; de afstandsterm is klein. '
                        'Bij een ver weg gelegen oppervlakte wordt de marge groter.']))
        + '<p>De slide kiest een lagere beschikbare df-rij als benadering. Vermeld die keuze '
        'in je antwoord. Houd daarnaast het verschil tussen een statistische verbetering '
        'en een inhoudelijk gerechtvaardigde uitsluiting in het oog: een gunstiger interval '
        'rechtvaardigt op zichzelf geen verwijdering.</p>',
        [ref('slides',116,'Slides, aanpassing huurmodel, PDF 116'),ref('slides',121,'Slides, voorspelling huurmodel, PDF 121'),
         ref('tabellen',12,'Tabellenbundel, tabel 13.4, rij 35, PDF 12')])

    add(L['modelbouw'], sources, 'Doorlopende collegecasus Life Expectancy: selecteren met uitvoer',
        '<p>De slides beginnen met 171 landen en vijf kandidaten voor de levensverwachting: '
        'Adult Mortality, BMI, HIV/AIDS, ICOR en Schooling. Het <strong>conceptuele model</strong> '
        'beschrijft vooraf welke verbanden inhoudelijk worden verwacht. De selectie onderzoekt '
        'daarna de extra statistische bijdrage binnen het gezamenlijke model.</p>'
        + table('Enter: relevante Coefficients-kolommen uit slide 141', ['Kandidaat','B','Sig.','VIF'], [
            ['Adult Mortality','−0,016',',000','2,583'],['BMI','−0,008','0,565','1,425'],
            ['HIV/AIDS','−0,951',',000','1,726'],['ICOR','35,523',',000','8,476'],
            ['Schooling','0,124','0,570','6,244'],
        ])
        + answer('Welke kandidaat valt bij backward met grens 0,05 eerst af? '
                 'Waarom mag je niet meteen alle oorspronkelijke niet-significante kandidaten tegelijk schrappen?',
                 steps(['Schooling heeft met 0,570 de grootste p-waarde boven 0,05. '
                        'De constante telt niet als gewone selectiekandidaat.',
                        'Na verwijderen wordt het model opnieuw geschat. De tweede uitvoer geeft '
                        'voor BMI p = 0,545; daarna valt ook BMI af.',
                        'Het derde model bevat Adult Mortality, HIV/AIDS en ICOR. '
                        'Op dezelfde 171 waarnemingen zijn de residuele df achtereenvolgens 165, 166 en 167.',
                        'De coëfficiënt ICOR verandert van 35,523 naar 37,792 en vervolgens 37,138. '
                        'Een effectschatting hangt dus af van welke andere kenmerken zijn opgenomen.',
                        'De grootste VIF in het beginmodel is 8,476 &lt; 10. Dat overschrijdt de '
                        'cursusgrens niet, maar er is wel merkbare overlap. Een grenswaarde is geen bewijs '
                        'dat de verklarende variabelen volledig onafhankelijk zijn.']))
        + figure('life-backward',143,'Oorspronkelijke ANOVA en Coefficients voor drie backwardstappen met 171 landen.',
                 'Lees bij iedere berekening hetzelfde modelnummer in beide tabellen.')
        + '<p>Forward en stepwise komen in deze collegecasus op dezelfde drie kandidaten uit. '
        'Dat is een uitkomst van deze gegevens en selectie-instellingen, geen algemene garantie '
        'dat alle methoden hetzelfde model vinden.</p>',
        [ref('slides',126,'Slides, conceptueel model en kandidaten, PDF 126–132'),
         ref('slides',140,'Slides, Enter/backward/forward/stepwise, PDF 140–145')])

    add(L['diagnostiek'], sources, 'Meervoudige diagnostiek: samenhangende keuzes in Life Expectancy',
        '<p>De controles van enkelvoudige regressie blijven bij meervoudige regressie nodig. '
        'Er komt multicollineariteit bij. Bovendien onderzoek je de residuspreiding tegenover '
        'de relevante verklarende variabelen, niet alleen tegenover de x die toevallig eerst '
        'in de uitvoer staat.</p>'
        + table('Diagnostisch verloop in de collegecasus', ['Bronstap','Uitvoer of keuze','Wat je daarvan moet begrijpen'], [
            ['Transformaties, slides 149–152','Een logtransformatie van HIV/AIDS lijkt enkelvoudig beter, maar geeft in het meervoudige model geen noemenswaardige verbetering.',
             'Een gekozen y-transformatie moet passen bij alle opgenomen verklarende variabelen. Een losse bivariate verbetering bepaalt niet het eindmodel.'],
            ['Uitbijter in y, slide 153','n = 171; grens ±3; z<sub>max</sub> = 3,172.',
             'Het maximum is een signaal; identificeer het land en de context.'],
            ['Uitbijter in x, slide 154','MD-grens = 2,982 + 3 × 4,779 = 17,319; MD<sub>max</sub> = 42,190.',
             'Meervoudige afstand kan een combinatie van kenmerken uitzonderlijk maken.'],
            ['Invloed, slides 157–158','CD-grens = 0,007 + 3 × 0,022 = 0,073; CD<sub>max</sub> = 0,251.',
             'Een invloedrijk land kan het gezamenlijke model sterk sturen.'],
            ['Na de bronselecties, slide 159','n = 163; Kolmogorov-Smirnov p = 0,070.',
             'De actuele n bepaalt de diagnosekeuze en de nieuwe vrijheidsgraden.'],
            ['Heteroscedasticiteit, slide 160','Geen significante ABSRES-correlatie met ICOR, HIV/AIDS of Adult Mortality.',
             'Volgens deze controles geen heteroscedasticiteit aangetoond; beoordeel ook de grafische patronen.'],
        ])
        + '<p><strong>Kritische bronlezing:</strong> de slides verwijderen in opeenvolgende stappen '
        'landen, deels omdat gegevens mogelijk minder betrouwbaar zijn of punten herkenbaar '
        'invloedrijk zijn. Die aannames worden niet volledig onderbouwd met onafhankelijke '
        'gegevenscontrole. Leer het verloop en de rekenregels, maar maak hiervan geen '
        'algemene regel dat kleine landen of invloedrijke punten moeten worden verwijderd. '
        'Leg bij iedere uitsluiting het bewijs, de relatie tot de onderzoekspopulatie en de '
        'gevolgen voor de uitkomsten vast. Vergelijk waar nodig resultaten met en zonder de betwiste waarneming.</p>',
        [ref('slides',146,'Slides, meervoudige diagnostiek en aanpassingen, PDF 146–160'),
         ref('attentie',5,'Attentiepunten, onderbouwing behandeling uitbijters, PDF 5–6')])

    add(L['meervoudig'], sources, 'Life Expectancy: eindmodel, globale toets en voorspelling',
        '<p>Na de in de slides besproken selecties bevat het eindmodel 163 landen en drie '
        'verklarende variabelen. Gebruik deze uitvoer niet door elkaar met de eerdere '
        'backwarduitvoer voor 171 landen.</p>'
        + table('Eindmodel uit slides 162–163', ['Onderdeel','Bronwaarde'], [
            ['ANOVA Regression SS; df','8.173,121; 3'],['ANOVA Residual SS; df','1.372,702; 159'],
            ['ANOVA Total SS; df','9.545,823; 162'],['Model Summary R²; adjusted R²','0,856; 0,853'],
            ['Constante B','50,065'],['ICOR: B; Beta','36,011; 0,694'],
            ['Adult Mortality: B; Beta','−0,015; −0,181'],['HIV/AIDS: B; Beta','−1,409; −0,164'],
        ])
        + answer('Bereken de globale F en interpreteer B tegenover Beta. Maak daarna de Nederlandse '
                 'puntvoorspelling met de afgedrukte invoer ICOR = 0,92, Adult Mortality = 58 en HIV/AIDS = 0,1.',
            steps(['MSR = 8.173,121/3 ≈ 2.724,374; MSE = 1.372,702/159 ≈ 8,633. '
                   'F ≈ 315,564. Toets H₀: alle drie hellingen nul tegenover H₁: minstens één niet nul.',
                   'De slide benadert F<sub>0,05;3;159</sub> met tabelrij ν₂ = 100: 2,696. '
                   '315,564 &gt; 2,696, dus H₀ verwerpen. Dit is een uitspraak over het gezamenlijke model.',
                   'B voor ICOR is 36,011 in de oorspronkelijke modelvergelijking. Beta = 0,694 '
                   'is gestandaardiseerd en beschrijft verandering in standaardafwijkingen. '
                   'Gebruik B voor een voorspelling in jaren.',
                   '50,065 + 36,011 × 0,92 − 0,015 × 58 − 1,409 × 0,1 = 82,18422, '
                   'dus circa 82,18 jaar met de afgedrukte getallen.',
                   'De slide noemt de werkelijke Nederlandse waarde 81,7. Het residu op basis '
                   'van deze afgedrukte invoer is 81,7 − 82,18422 ≈ −0,48 jaar. '
                   'Een residu alleen zegt niet of het verschil statistisch uitzonderlijk is.']))
        + '<p class="note">Slide 164 drukt een voorspelling 82,28 af; de getoonde '
        'coëfficiënten en invoer geven 82,18. Er kunnen meer decimalen in de oorspronkelijke '
        'gegevens zijn gebruikt, maar die zijn in deze slide niet zichtbaar. De leeromgeving '
        'rekent controleerbaar met de afgedrukte waarden en benoemt het verschil.</p>',
        [ref('slides',161,'Slides, eindmodel en voorspellen Life Expectancy, PDF 161–165'),
         ref('tabellen',20,'Tabellenbundel, tabel 13.8, PDF 20–29')])

    add(L['diagnostiek'], sources, 'Gewogen regressie: de WLS-voetnoot bepaalt hoe je uitvoer leest',
        '<p><strong>Weighted Least Squares</strong> gebruikt gewichten in de gekwadrateerde '
        'afwijkingen: waarnemingen met relatief veel spreiding tellen minder zwaar mee. '
        'Dit is gericht op de foutstructuur. Het is een andere ingreep dan een logtransformatie '
        'om een krom verband rechter te maken of een dummy voor verschillende groepen.</p>'
        '<p>In de boekcasus Productiviteit geeft Weight Estimation een gewicht evenredig '
        'aan 1/x². De uitvoervoetnoot schrijft dit als ARBEIDSU**−2,000. '
        'Een waarneming bij x = 80 krijgt daardoor een kwart van het gewicht van een '
        'waarneming bij x = 40: (1/80²)/(1/40²) = 1/4. Dit is een eigen invulvoorbeeld '
        'bij het gewicht uit de bron; het zijn geen extra waarnemingen uit de boekdataset.</p>'
        + table('WLS-uitvoer uit boektabellen 9.18–9.20', ['Uitvoer','Bronwaarde','Leespunt'], [
            ['Model Summary: R²','0,934','Deze fit hoort bij de aangegeven weging.'],
            ['Model Summary: Std. Error of the Estimate','0,0224','De foutmaat hoort bij de gewogen berekening; vergelijk haar niet rechtstreeks met de ongewogen sₑ.'],
            ['ANOVA: Regression df / Residual df','1 / 22','Het aantal geschatte hellingen blijft één; de weging voegt geen waarnemingen toe.'],
            ['ANOVA: F','310,736','Gebruik voldoende precisie; de afgedrukte MS-waarden zijn sterk afgerond.'],
            ['Coefficients: constante B','−1,408','De coëfficiënten zijn na weging opnieuw geschat.'],
            ['Coefficients: arbeidsuren B','0,616','De vergelijking is ŷ = −1,408 + 0,616x in de oorspronkelijke variabelen van de casus.'],
        ])
        + '<p>De bronroute is <strong>Analyze → Regression → Weight Estimation</strong>, '
        'met productie als Dependent, arbeidsuren als Independent en als Weight Variable. '
        'Bewaar het beste gewicht en geef dat bij <strong>Regression → Linear → WLS Weight</strong> '
        'op. Gebruik de broninstelling als oefenroute; een andere dataset kan een andere '
        'weging vragen. Controleer daarna opnieuw de residuen en verklaar waarom de '
        'gekozen weging bij de waargenomen spreiding past.</p>'
        + '<p class="note">De ongewogen casusdiagnose in het boek vindt op zichzelf '
        'geen significant heteroscedasticiteitsprobleem (p = 0,193). De WLS-tabellen '
        'illustreren de mogelijke techniek en vormen geen algemene opdracht om ieder '
        'model toch te wegen. Ook een hogere gewogen R² is op zichzelf geen bewijs '
        'van een betere voorspelling op nieuwe ongewogen waarnemingen.</p>',
        [bookref('boek-h9d',275),bookref('boek-h9d',276),bookref('boek-h9d',277),bookref('boek-h9d',278)])

    # Een gerichte rekenroute per les is ook beschikbaar bij de formulegids.
    # De eigen bronlinks en refs blijven behouden, zonder alle bronfiguren te dupliceren.
    guide_titles = {
        'regressielijn':'Van gegevens naar Coefficients: cursusopgave H9.1',
        'anova':'Een volledige ANOVA-tabel reconstrueren',
        'toetsen':'Tabellenbundel gebruiken: dezelfde casus, drie toetsroutes',
        'diagnostiek':'Durbin-Watson: van tabellenbundel naar beslissing',
        'voorspellen':'Boekcasus Productiviteit: een controlemaand beoordelen',
        'meervoudig':'Volledige toepassing: salaris, dummy’s en modeltoets',
        'transformaties':'Terugtransformeren: de hele logwaarde en beide intervalgrenzen',
        'modelbouw':'Geneste modellen: de extra bijdrage zichtbaar berekenen',
        'validatie':'Voorspelfouten op een onafhankelijke testset uitwerken',
        'tentamen':'Zelfstandige eindopdracht met bronuitvoer',
    }
    for slug, title in guide_titles.items():
        section = next(s for s in L[slug]['sections'] if s['title'] == title)
        L[slug]['formulaGuide'].append(dict(section))
