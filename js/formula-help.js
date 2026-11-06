/* Gemaakt met Codex. Korte, contextgebonden uitleg bij de SRA-formules.
 * Inhoud: bestaande lessen, formulegidsen en hun bronverwijzingen.
 * MathML blijft intact; uitleg verandert geen berekening of leespositie. */
(function (root, factory) {
  'use strict';
  const api = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root.document) root.SRAFormulaHelp = api;
})(typeof window === 'undefined' ? globalThis : window, function (root) {
  'use strict';
  const entry = (title, text) => ({ title, text });
  const D = {
    r: entry('r: Pearson-correlatie', 'r zegt hoe strak de punten een rechte lijn volgen. Het ligt tussen −1 en 1: het teken geeft de richting, en hoe dichter bij −1 of 1, hoe sterker het lineaire verband. Bij enkelvoudige regressie gebruik je r ook om de spreiding rond de lijn te berekenen en om het verband te toetsen.'),
    sb1: entry('s_b₁: standaardfout van de regressiehelling', 'Dit beschrijft de onzekerheid van de geschatte helling b₁ over mogelijke steekproeven. Je gebruikt deze standaardfout voor de t-toets en het betrouwbaarheidsinterval van de populatiehelling.'),
    N: entry('N: populatieomvang', 'Dit is het aantal posten of eenheden in de hele populatie. Je gebruikt N bijvoorbeeld om een gemiddelde per post om te rekenen naar een geschat totaal.'),
    n: entry('n: steekproefomvang', 'Dit is het aantal waarnemingen in je steekproef. De kleine n gaat dus over de onderzochte eenheden, terwijl de hoofdletter N de hele populatie beschrijft.'),
    w: entry('w: werkelijke waarde', 'Dit is de waarde van een post zoals die bij controle is vastgesteld. Je gebruikt deze gecontroleerde waarden om het werkelijke populatietotaal te schatten.'),
    b: entry('b: boekwaarde', 'Dit is de waarde die voor een post in de administratie staat. Je vergelijkt deze met de gecontroleerde werkelijke waarde w.'),
    B: entry('B: boekwaardetotaal', 'Dit is de som van de boekwaarden van alle posten in de populatie. Het is een bekend administratief totaal, geen schatting uit alleen de steekproef.'),
    'w¯': entry('w̄: gemiddelde werkelijke waarde', 'Dit is het gemiddelde van de gecontroleerde werkelijke waarden in de steekproef. Je berekent het door hun som te delen door het aantal gecontroleerde posten n.'),
    'b¯': entry('b̄: gemiddelde boekwaarde', 'Dit is de gemiddelde boekwaarde van de posten in de steekproef. Het gaat om de administratiebedragen van dezelfde gecontroleerde posten, niet om het gemiddelde van de hele populatie.'),
    wi: entry('wᵢ: werkelijke waarde van post i', 'Dit is de gecontroleerde werkelijke waarde van één specifieke post. De index i geeft aan welke post je bedoelt.'),
    bi: entry('bᵢ: boekwaarde van post i', 'Dit is het administratiebedrag van één specifieke post. Met dezelfde index i bij b en w vergelijk je de boekwaarde en werkelijke waarde van dezelfde post.'),
    s: entry('s: standaardafwijking', 'Dit getal beschrijft hoeveel de afzonderlijke waarnemingen rond hun gemiddelde verspreid liggen. De standaardafwijking heeft dezelfde eenheid als de waarnemingen, bijvoorbeeld euro.'),
    s2: entry('s²: variantie', 'Dit is een maat voor de spreiding, gebaseerd op gekwadrateerde afwijkingen van het gemiddelde. De standaardafwijking s is de vierkantswortel van deze variantie.'),
    sw: entry('s_w: standaardafwijking van werkelijke waarden', 'Dit meet de spreiding van de gecontroleerde werkelijke waarden in de steekproef. Het beschrijft verschillen tussen posten en is nog niet de standaardfout van een geschat totaal.'),
    sy: entry('s_y: standaardafwijking van y', 'Dit meet de spreiding van de waargenomen y-waarden in de steekproef. Je gebruikt deze spreiding bij de residuele variantie en de standaardfout van de helling.'),
    sb: entry('s_b: standaardafwijking van boekwaarden', 'Dit meet de spreiding van de boekwaarden van de gecontroleerde posten. Bij de quotiëntschatter en de regressieschatter gebruik je deze spreiding samen met die van de werkelijke waarden en hun correlatie.'),
    E: entry('E: onzekerheidsmarge', 'Dit is de afstand van de puntschatting tot één grens van het interval. Bij een tweezijdig interval is de totale breedte dus 2 × E.'),
    t: entry('t: kritieke tabelwaarde', 'Dit is de grenswaarde uit de t-verdeling die past bij je betrouwbaarheid, vrijheidsgraden en keuze voor één of twee zijden. Je vermenigvuldigt deze waarde met de standaardfout om de onzekerheidsmarge te krijgen.'),
    q: entry('q: goedratio', 'Dit is de som van de werkelijke waarden gedeeld door de som van de boekwaarden in de steekproef. Je vermenigvuldigt deze verhouding met B om het werkelijke populatietotaal te schatten.'),
    sq: entry('s_q: resterende spreiding bij de quotiëntschatter', 'Dit is de spreiding van de verschillen tussen w en q × b. De quotiëntschatter gebruikt deze resterende spreiding om de standaardfout van het geschatte totaal te bepalen.'),
    Rbw: entry('R_bw: correlatie tussen boekwaarde en werkelijke waarde', 'Dit getal tussen −1 en 1 beschrijft hun lineaire samenhang. Een sterke samenhang kan de onzekerheid van een schatter die boekwaarden gebruikt verkleinen.'),
    R: entry('R: correlatiecoëfficiënt', 'Dit getal beschrijft de richting en sterkte van een lineair verband. Het ligt tussen −1 en 1 en bewijst op zichzelf geen oorzakelijk verband.'),
    'W^': entry('Ŵ: geschat werkelijk totaal', 'Dit is een schatting van de som van alle werkelijke waarden in de populatie. Het dakje geeft aan dat het totaal uit steekproefgegevens is geschat.'),
    'W^MPU': entry('Ŵ_MPU: directe totaalschatting', 'Dit is de populatieomvang N maal de gemiddelde gecontroleerde werkelijke waarde. De MPU-schatter trekt het steekproefgemiddelde door naar de hele populatie.'),
    'W^V': entry('Ŵ_V: verschilschatter', 'Dit is het boekwaardetotaal B, gecorrigeerd voor het geschatte totale verschil tussen boekwaarde en werkelijke waarde. Bij e = b − w trek je N × ē van B af.'),
    'W^Q': entry('Ŵ_Q: quotiëntschatter', 'Dit is het geschatte werkelijke totaal dat je krijgt door B met de goedratio q te vermenigvuldigen. De steekproefverhouding tussen werkelijke waarde en boekwaarde wordt toegepast op de hele populatie.'),
    'W^R': entry('Ŵ_R: regressieschatter', 'Dit is een totaalschatting die de MPU-schatting corrigeert met behulp van de regressiehelling en het bekende boekwaardetotaal. De correctie gebruikt het verschil tussen B en N × b̄.'),
    sMPU: entry('s_MPU: standaardfout van de MPU-schatter', 'Dit beschrijft de onzekerheid van het geschatte populatietotaal volgens MPU. Vermenigvuldigen met de passende t-waarde geeft de marge rond die totaalschatting.'),
    sV: entry('s_V: standaardfout van de verschilschatter', 'Dit beschrijft de onzekerheid van het geschatte totaal volgens de verschilschatter. Je berekent deze met de spreiding van de verschillen e, de aantallen n en N en de eindigheidscorrectie.'),
    sQ: entry('s_Q: standaardfout van de quotiëntschatter', 'Dit beschrijft de onzekerheid van het totaal dat met q × B is geschat. Hoofdletter Q duidt de schatter aan; de kleine q bij s_q hoort bij de resterende spreiding per post.'),
    sR: entry('s_R: standaardfout van de regressieschatter', 'Dit beschrijft de onzekerheid van het geschatte populatietotaal met regressie. In de getoonde formule verlaagt de factor √(1 − R²_bw) de standaardfout ten opzichte van MPU.'),
    'γ': entry('γ: tussenuitkomst voor steekproefplanning', 'Gamma bundelt de toegestane marge E, de kritieke t-waarde, de populatieomvang en de variantie. Je vult deze tussenuitkomst daarna in bij n = N / (1 + γ).'),
    Ni: entry('Nᵢ: omvang van stratum i', 'Dit is het aantal posten in één deelpopulatie of stratum. De index i geeft aan over welke groep de formule gaat.'),
    ni: entry('nᵢ: controles in stratum i', 'Dit is het aantal posten dat je uit stratum i in de steekproef opneemt. Bij het verdelen van de steekproef bepaal je dit aantal voor iedere groep apart.'),
    si: entry('sᵢ: spreiding binnen stratum i', 'Dit is de standaardafwijking van de waarden binnen één stratum. Bij Neyman-allocatie krijgt een grotere of sterker gespreide groep meer controles.'),
    'w¯i': entry('w̄ᵢ: gemiddelde binnen stratum i', 'Dit is de gemiddelde gecontroleerde werkelijke waarde in één stratum. Met Nᵢ × w̄ᵢ schat je het werkelijke totaal van die groep.'),
    'W^tot': entry('Ŵ_tot: gecombineerde totaalschatting', 'Dit is de som van de geschatte totalen van de afzonderlijke strata en het bekende totaal van het topstratum. Zo combineer je de deelpopulaties tot één schatting voor de hele populatie.'),
    Wtop: entry('W_top: werkelijk totaal van het topstratum', 'Dit is het bekende werkelijke totaal van de volledig gecontroleerde grote posten. Het heeft geen steekproefonzekerheid, omdat alle posten in deze groep zijn gecontroleerd.'),
    stot: entry('s_tot: gecombineerde standaardfout', 'Dit beschrijft de onzekerheid van de gezamenlijke totaalschatting over de strata. Je telt daarvoor de varianties op en neemt daarna de wortel, niet de som van de afzonderlijke standaardfouten.'),
    x: entry('x: verklarende variabele', 'Dit is de variabele waarmee je de uitkomst y probeert te verklaren of voorspellen. Vul x in zoals het in de formule staat: is x omgerekend, dan gebruik je de omgerekende waarde.'),
    y: entry('y: waargenomen uitkomst', 'Dit is de werkelijk gemeten waarde van de variabele die je wilt verklaren of voorspellen. Het verschil tussen y en de voorspelde waarde ŷ is het residu.'),
    'y^': entry('ŷ: voorspelde uitkomst', 'Dit is de waarde die het geschatte regressiemodel voorspelt. Het dakje onderscheidt de voorspelling van de werkelijk waargenomen y. Is de uitkomst omgerekend, dan staat ook de voorspelling op die omgerekende schaal.'),
    b0: entry('b₀: geschatte constante', 'Dit is het vaste begingetal in de geschatte regressievergelijking: de voorspelling als alle variabelen in de formule nul zijn. Is een variabele omgerekend, dan gaat het om de omgerekende waarde.'),
    b1: entry('b₁: geschatte regressiecoëfficiënt', 'Dit getal zegt hoeveel de voorspelling verandert als de bijbehorende variabele één eenheid stijgt; bij meer variabelen blijven de andere daarbij gelijk. Bij één variabele is dit de helling van de lijn. Is een variabele of de uitkomst omgerekend, dan geldt dit voor de omgerekende waarden.'),
    bj: entry('bⱼ: geschatte coëfficiënt van variabele j', 'Dit is het geschatte effect van de j-de verklarende variabele. Bij meervoudige regressie lees je dit effect terwijl de andere verklarende variabelen gelijk blijven.'),
    bk: entry('bₖ: geschatte coëfficiënt van variabele k', 'Dit is de coëfficiënt bij de laatste van de k verklarende variabelen in het model. Je vermenigvuldigt hem met de bijbehorende waarde xₖ.'),
    b2: entry('b₂: geschatte coëfficiënt van de tweede variabele', 'Dit is het geschatte effect van de tweede verklarende variabele. De interpretatie geldt terwijl de overige verklarende variabelen in het model gelijk blijven.'),
    'β': entry('β: populatiecoëfficiënt', 'Dit is een onbekende coëfficiënt van het regressiemodel in de populatie. Je gebruikt steekproefgegevens om deze met een b-coëfficiënt te schatten.'),
    'β0': entry('β₀: populatieconstante', 'Dit is de onbekende constante in het populatiemodel. De geschatte tegenhanger uit de steekproef is b₀.'),
    'β1': entry('β₁: populatiehelling', 'Dit is de onbekende helling van het verband in de populatie. Met de steekproef schat je deze parameter als b₁.'),
    'βj,0': entry('βⱼ,₀: waarde onder de nulhypothese', 'Dit is de waarde die je in de nulhypothese voor de j-de populatiecoëfficiënt veronderstelt. Bij de gebruikelijke toets op geen effect is deze waarde nul.'),
    sbj: entry('s_bⱼ: standaardfout van de coëfficiënt', 'Dit beschrijft de onzekerheid van de geschatte regressiecoëfficiënt bⱼ. In de t-toets deel je de afwijking van de veronderstelde waarde door deze standaardfout.'),
    'ε': entry('ε: storing in het populatiemodel', 'Dit is het deel van een individuele uitkomst dat het populatiemodel niet verklaart. Deze onbekende storing is iets anders dan het berekende residu e bij de geschatte lijn.'),
    e: entry('e: residu', 'Dit is het verschil tussen een waargenomen uitkomst y en de voorspelling ŷ. Een positief residu betekent dat de waarneming boven de voorspelde lijn ligt.'),
    ei: entry('eᵢ: residu van waarneming i', 'Dit is yᵢ − ŷᵢ: de werkelijke uitkomst min de voorspelling voor dezelfde waarneming. Het is de verticale afstand van dat punt tot de geschatte lijn.'),
    yi: entry('yᵢ: waargenomen uitkomst van waarneming i', 'Dit is de werkelijk gemeten uitkomst voor één waarneming. Vergelijk deze met ŷᵢ om de bijbehorende voorspellingsfout te vinden.'),
    'y^i': entry('ŷᵢ: voorspelling voor waarneming i', 'Dit is de voorspelde uitkomst voor één waarneming, berekend met het geschatte model. Dezelfde index i bij y en ŷ zorgt dat je de juiste waarneming en voorspelling vergelijkt.'),
    'y^0': entry('ŷ₀: voorspelling bij de nieuwe x₀', 'Dit is de voorspelde uitkomst voor de nieuwe invoerwaarde x₀. Het vormt het midden van het getoonde voorspellingsinterval.'),
    'x¯': entry('x̄: gemiddelde van x', 'Dit is het gemiddelde van de x-waarden in de steekproef waarmee het model is geschat. Je gebruikt het om de lijn te berekenen; hoe verder een nieuwe x hiervan ligt, hoe onzekerder de voorspelling.'),
    'y¯': entry('ȳ: gemiddelde van y', 'Dit is het gemiddelde van de waargenomen y-waarden. Je gebruikt het om de lijn te berekenen en om te zien hoeveel de uitkomsten en voorspellingen hiervan afwijken.'),
    x0: entry('x₀: nieuwe invoerwaarde', 'Dit is de waarde van x waarvoor je een voorspelling wilt maken. Je vult deze waarde in het geschatte regressiemodel in.'),
    sx: entry('s_x: standaardafwijking van x', 'Dit meet de spreiding van de x-waarden in de steekproef. Je gebruikt deze spreiding bij de helling en, in de intervalformule, om te bepalen hoe ver de nieuwe x₀ van de gebruikte gegevens ligt.'),
    se: entry('s_e: residuele standaardfout', 'Dit is de spreiding van de waarnemingen rond de voorspellingen van het model, in de eenheid van y. Je gebruikt haar onder meer bij voorspellingsintervallen; in een ANOVA-tabel vind je haar als √MSE.'),
    k: entry('k: aantal verklarende variabelen', 'Dit is het aantal verklarende variabelen in het regressiemodel, zonder de constante. Daarom zijn de residuele vrijheidsgraden n − k − 1.'),
    df: entry('df: vrijheidsgraden', 'Dit getal bepaalt welke rij of kolom je in de t- of F-tabel gebruikt. Het geeft aan hoeveel waarnemingen overblijven na het schatten: bij de schatters meestal n − 1, bij regressie n − k − 1.'),
    SSR: entry('SSR: verklaarde kwadratensom', 'Dit is de som van de gekwadrateerde verschillen tussen de voorspelde waarden en het gemiddelde van y. Het beschrijft het deel van de variatie dat het regressiemodel verklaart.'),
    SSE: entry('SSE: residuele kwadratensom', 'Dit is de som van de gekwadrateerde residuen yᵢ − ŷᵢ. Het meet de variatie die het geschatte regressiemodel niet verklaart.'),
    TotalSS: entry('TotalSS: totale kwadratensom', 'Dit is de som van de gekwadrateerde afwijkingen van de waargenomen y-waarden ten opzichte van hun gemiddelde. In het getoonde model met constante geldt TotalSS = SSR + SSE.'),
    MSE: entry('MSE: gemiddelde residuele kwadratensom', 'Dit is SSE gedeeld door de residuele vrijheidsgraden n − k − 1. Het schat de residuele variantie; de wortel is de residuele standaardfout s_e.'),
    MSR: entry('MSR: gemiddelde verklaarde kwadratensom', 'Dit is SSR gedeeld door het aantal verklarende variabelen k. De globale F-toets vergelijkt deze waarde met MSE.'),
    F: entry('F: toetsingsgrootheid', 'F is een verhouding: wat het model of de uitbreiding verklaart, gedeeld door de variatie die onverklaard blijft. Hoe groter F, hoe sterker de aanwijzing dat het model iets toevoegt. De precieze teller en vrijheidsgraden hangen af van de globale toets of de toets op een modeluitbreiding.'),
    R2: entry('R²: welk deel is verklaard?', 'R² zegt welk deel van de verschillen tussen de waarden je kunt verklaren. Het ligt tussen 0 en 1: bij 0,80 is 80% verklaard en blijft 20% onverklaard. Bij de schatters is het de correlatie R in het kwadraat (R = 0,9 geeft 0,81), in een ANOVA-tabel SSR gedeeld door TotalSS.'),
    R2adj: entry('R²_adj: gecorrigeerde verklaarde variatie', 'Dit is R² met een correctie voor het aantal verklarende variabelen en waarnemingen. De correctie voorkomt dat iedere extra variabele automatisch als verbetering wordt gezien.'),
    MD: entry('MD: Mahalanobis-afstand', 'Dit meet hoe ongewoon de combinatie van x-waarden van een waarneming is. Een grote MD betekent dat de waarneming ver van de andere x-waarden ligt; het zegt op zichzelf niet dat het residu groot is.'),
    CD: entry('CD: Cook-afstand', 'Dit meet hoeveel invloed één waarneming op het geschatte regressiemodel heeft. Een grote CD is aanleiding om te onderzoeken hoe sterk het model verandert als dat punt wordt weggelaten.'),
    z: entry('z: gestandaardiseerde afwijking', 'Dit drukt een afwijking uit in aantallen standaardafwijkingen. Daardoor kun je de grootte van de afwijking beoordelen zonder de oorspronkelijke meeteenheid.'),
    ln: entry('ln: natuurlijke logaritme', 'ln vraagt tot welke macht je het getal e ≈ 2,718 moet verheffen om een positief getal te krijgen. In regressie verandert ln de schaal van een variabele; ln(x) is dus niet hetzelfde als x.'),
    exp: entry('exp: terugrekenen vanuit een natuurlijke logaritme', 'exp(a) betekent e tot de macht a en is de omgekeerde bewerking van ln. Wanneer je model ln(y) voorspelt, reken je met exp terug naar de oorspronkelijke schaal van y.'),
    VIFi: entry('VIFᵢ: variantie-inflatiefactor', 'Dit meet hoeveel de variantie van een regressiecoëfficiënt wordt vergroot doordat de bijbehorende verklarende variabele met andere verklarende variabelen samenhangt. Je berekent VIFᵢ als 1 / (1 − R²ᵢ).'),
    Tolerancei: entry('Toleranceᵢ: tolerantie', 'Dit is 1 − R²ᵢ uit de hulpregressie van xᵢ op de overige verklarende variabelen. Een lage tolerantie betekent veel overlap en hoort bij een hoge VIF.'),
    Ri2: entry('R²ᵢ: verklaarde variatie in de hulpregressie', 'Dit komt uit de regressie van verklarende variabele xᵢ op alle andere verklarende variabelen. Het is dus niet de R² van het hoofdmodel dat y voorspelt.'),
    SSRklein: entry('SSR_klein: verklaarde kwadratensom van het kleinere model', 'Dit is de verklaarde kwadratensom van het model zonder de extra variabele. Je vergelijkt deze met SSR van het uitgebreide model op dezelfde waarnemingen.'),
    SSRuitgebreid: entry('SSR_uitgebreid: verklaarde kwadratensom na uitbreiding', 'Dit is de verklaarde kwadratensom van het model met de extra variabele. Het verschil met SSR_klein geeft haar extra verklaarde bijdrage.'),
    MSEuitgebreid: entry('MSE_uitgebreid: residuele variantieschatting na uitbreiding', 'Dit is SSE gedeeld door de residuele vrijheidsgraden van het uitgebreide model. De getoonde F-toets gebruikt deze waarde als maat voor de resterende ruis.'),
    MSPR: entry('MSPR: gemiddelde gekwadrateerde voorspellingsfout', 'Dit is het gemiddelde van de gekwadrateerde voorspellingsfouten op de testset. Het beoordeelt voorspellen op gegevens die niet zijn gebruikt om het model te schatten.'),
    ntest: entry('n_test: aantal testwaarnemingen', 'Dit is het aantal waarnemingen in de testset. Bij MSPR deel je de som van hun gekwadrateerde voorspellingsfouten door dit aantal.'),
    i: entry('i: index van een waarneming', 'Deze letter geeft aan welke waarneming of post wordt bedoeld. In een som loop je de bijbehorende waarnemingen één voor één langs.'),
    j: entry('j: index van een verklarende variabele', 'Deze letter wijst een specifieke verklarende variabele of coëfficiënt aan. Bij bⱼ gaat het om de coëfficiënt die bij variabele j hoort.'),
    Interval: entry('Interval: ondergrens en bovengrens', 'Dit is het bereik rond de puntschatting dat je met de gekozen methode en betrouwbaarheid berekent. Trek de marge af voor de ondergrens en tel haar op voor de bovengrens.'),
    puntschatting: entry('Puntschatting: één getal als schatting', 'Dit is één getal waarmee je een onbekende populatiegrootheid schat. In de getoonde intervalformule ligt deze schatting in het midden tussen ondergrens en bovengrens.'),
    standaardfout: entry('Standaardfout: onzekerheid van de schatting', 'Dit meet de onzekerheid van een schatting door het gebruik van een steekproef. Het is iets anders dan de spreiding van de afzonderlijke waarnemingen.'),
    'kritieke waarde': entry('Kritieke waarde: grens uit de tabel', 'Dit is de tabelgrens die bij de gekozen verdeling, betrouwbaarheid en vrijheidsgraden hoort. Vermenigvuldigd met de standaardfout bepaalt zij de marge van het interval.'),
    Rbw2: entry('R²_bw: welk deel hangt samen met de boekwaarde?', 'Dit is het kwadraat van de correlatie R_bw: het deel van de spreiding in de werkelijke waarden dat met de boekwaarden samenhangt. Hoe hoger, hoe meer de regressieschatter de standaardfout verlaagt.'),
    frequentie: entry('Frequentie: aantal posten in de klasse', 'Dit is het aantal posten dat in deze klasse valt. Bij ongelijke klassen vermenigvuldig je de frequentie eerst met de klassebreedte en neem je daarna de wortel.'),
    klassebreedte: entry('Klassebreedte: afstand tussen de klassegrenzen', 'Dit is de afstand tussen de onder- en bovengrens van een klasse. Bij ongelijke klassebreedtes hoort deze breedte onder de wortel.'),
    breedte: entry('Breedte: bovengrens min ondergrens', 'Dit is de bovengrens min de ondergrens. Bij het getoonde symmetrische interval is dit tweemaal de marge E.'),
    'α': entry('α: kans om ernaast te zitten', 'Dit is de kans die je vooraf accepteert om ernaast te zitten. Bij een interval heet dat de onbetrouwbaarheid (de betrouwbaarheid is 1 − α), bij een toets het significantieniveau: de kans dat je de nulhypothese verwerpt terwijl die waar is. Bij een tweezijdig interval hoort α/2 bij elke staart van de verdeling.'),
    '±': entry('±: plus én min', 'Maak twee berekeningen: één met aftrekken en één met optellen. Daarmee krijg je de ondergrens en bovengrens van het interval.'),
    '∑': entry('Σ: somteken', 'Tel de waarden of uitdrukkingen achter dit teken over de betreffende waarnemingen bij elkaar op. Bij Σw² kwadrateer je elke waarde vóór het optellen; bij (Σw)² kwadrateer je de uiteindelijke som.'),
    '…': entry('…: hetzelfde patroon voortzetten', 'De weggelaten termen volgen hetzelfde patroon als de termen ernaast. Bij meervoudige regressie loopt bⱼxⱼ zo door tot de laatste verklarende variabele.'),
  };
  D['Σ'] = D['∑'];
  const difference = {
    e: entry('e: verschil tussen boekwaarde en werkelijke waarde', 'In deze les is e gedefinieerd als b − w. Een positief verschil betekent dat de boekwaarde hoger is dan de gecontroleerde werkelijke waarde.'),
    ei: entry('eᵢ: verschil bij post i', 'Hier bereken je eᵢ als bᵢ − wᵢ voor dezelfde post. Positief betekent dat de boekwaarde hoger is dan de werkelijke waarde, negatief dat die lager is.'),
    'e¯': entry('ē: gemiddeld verschil per post', 'Dit is het gemiddelde van de verschillen bᵢ − wᵢ in de steekproef. Vermenigvuldigen met N geeft het geschatte totale verschil dat je van B aftrekt.'),
    se: entry('s_e: standaardafwijking van de verschillen', 'Dit is de spreiding van de verschillen e = b − w tussen de gecontroleerde posten. Bij de verschilschatter gebruik je deze spreiding om de standaardfout van het geschatte totaal te berekenen.'),
  };
  const regressionLessons = ['regressielijn','anova','toetsen','diagnostiek','voorspellen','meervoudig','transformaties','modelbouw','validatie','tentamen'];
  const testT = entry('t: berekende toetsingsgrootheid', 'Dit is het verschil tussen de geschatte coëfficiënt en de waarde onder H₀, gedeeld door de standaardfout. Je vergelijkt deze berekende t met een kritieke tabelwaarde of gebruikt de bijbehorende p-waarde.');
  const normalized = text => String(text).replace(/[\s_{}]/g, '').replace(/₀/g,'0').replace(/₁/g,'1').replace(/₂/g,'2').replace(/ᵢ/g,'i').replace(/ⱼ/g,'j').replace(/ₖ/g,'k').replace(/²/g,'2').replace(/ŷ/g,'y^').replace(/Ŵ/g,'W^').replace(/ȳ/g,'y¯').replace(/ē/g,'e¯').replace(/([wbxe])\u0304/g,'$1¯').replace(/ₑ/g,'e');
  const distance = key => key.includes('MD') ? 'Mahalanobis-afstand' : 'Cook-afstand';
  function lookup(key, context = '', formula = '') {
    if (!D[key]) key = normalized(key);
    if (key === 'R2i') key = 'Ri2';
    if (key === 'R2bw') key = 'Rbw2';
    if (key === 'breedte' && context === 'stratificatie') key = 'klassebreedte';
    if (context === 'transformaties' && key === 'e') return entry('e: grondtal van de natuurlijke logaritme', 'Dit is het vaste getal e ≈ 2,718. Bij exp(z) bereken je e tot de macht z; de natuurlijke logaritme ln draait die bewerking om.');
    if (context === 'transformaties' && key === 'z') return entry('z: invoer van de exponentiële functie', 'Hier is z de waarde die je als exponent invoert bij exp(z). Het is in deze uitleg een tijdelijke naam voor die invoer en geen gestandaardiseerd residu.');
    if (key === 'B' && regressionLessons.includes(context) && !/N, n, B/.test(formula)) return entry('B: geschatte coëfficiënt in SPSS', 'Dit is de kolom in de SPSS-tabel Coefficients met de geschatte coëfficiënten, zoals b₀ bij de constante en b₁ bij een variabele. Uit deze kolom lees je de regressievergelijking af.');
    if (key === 'b' && regressionLessons.includes(context)) return entry('b: geschatte regressiecoëfficiënt', 'De letter b staat hier voor een coëfficiënt die met de steekproef is geschat. De index geeft aan of het om de constante b₀ of het effect van een verklarende variabele gaat.');
    if (['beginnen','verschil','quotient','regressieschatter','steekproefomvang'].includes(context) && difference[key]) return difference[key];
    if (key === 't' && /±/.test(formula)) return D.t;
    if (key === 't' && (['toetsen','meervoudig','validatie'].includes(context) || (context === 'tentamen' && /β|b[jⱼ]/u.test(formula)))) return testT;
    if (key === 'q' && context === 'modelbouw') return entry('q: aantal extra variabelen', 'Dit is het aantal variabelen dat je in één keer aan het model toevoegt. Bij de F-toets op dit blok deel je de toename van SSR ook door q.');
    if (key === 's2' && context === 'steekproefomvang') return entry('s²: variantie die bij de schatter hoort', 'Vul de variantie in van de schatter die je gebruikt: s_w² bij MPU, s_e² bij de verschilschatter en s_q² bij de quotiëntschatter. Bij de regressieschatter is dat s_w² × (1 − R²_bw).');
    if (key === 'z' && context === 'diagnostiek') return entry('z: gestandaardiseerd residu', 'Dit is het residu uitgedrukt in aantallen standaardafwijkingen. Bij n ≤ 100 is |z| > 2 een signaal voor een uitbijter in de y-richting, bij n > 100 geldt |z| > 3.');
    if (key === 'b1' && /x1/.test(formula)) return entry('b₁: geschatte coëfficiënt van de eerste variabele', D.b1.text);
    if (key === 'b1' && context === 'regressieschatter') return entry('b₁: helling tussen boekwaarde en werkelijke waarde', 'Deze helling geeft de verandering van de geschatte werkelijke waarde als de boekwaarde één eenheid stijgt. Je berekent haar met de correlatie en de verhouding tussen de twee standaardafwijkingen.');
    if (key === 'i' && context === 'stratificatie') return entry('i: index van een stratum', 'Deze index geeft aan welke deelpopulatie of welk stratum wordt bedoeld. Bij een som over i tel je de bijdragen van de verschillende strata op.');
    if (D[key]) return D[key];
    if (/^x[12k]$/.test(key)) return entry(`${key.replace(/1/g,'₁').replace(/2/g,'₂').replace(/k/g,'ₖ')}: ${{1:'eerste',2:'tweede',k:'laatste'}[key[1]]} verklarende variabele`, 'Dit is de waarde van de verklarende variabele met dit nummer of deze index. Vermenigvuldig haar met de coëfficiënt met dezelfde index.');
    if (/^(MD|CD)(¯|kritiek)$/.test(key)) return entry(key.endsWith('¯') ? `${key.slice(0,2)}\u0304: gemiddelde ${distance(key)}` : `${key.slice(0,2)}_kritiek: kritieke grens voor de ${distance(key)}`, key.endsWith('¯') ? 'Dit is het gemiddelde van deze afstandsmaat over de waarnemingen. De getoonde grensregel telt hier drie standaardafwijkingen bij op.' : 'Dit is de signaleringsgrens die je met de getoonde regel berekent. Waarden erboven zijn aanleiding om de betreffende waarneming nader te onderzoeken.');
    if (/^s(MD|CD)$/.test(key)) return entry(`s_${key.slice(1)}: standaardafwijking van de ${distance(key)}`, 'Dit beschrijft de spreiding van deze afstandsmaat over de waarnemingen. In de getoonde grensregel wordt driemaal deze spreiding bij het gemiddelde opgeteld.');
    return null;
  }
  function keyOf(node) { return normalized(node.textContent || ''); }
  function describe(node, context, formula) {
    if (['mn','mfrac','msqrt'].includes(node.localName)) return null;
    if (node.localName === 'msup') return lookup(keyOf(node), context, formula);
    return lookup(node.textContent || '', context, formula);
  }

  let host, course, popup, observer, pending = false;
  const help = new WeakMap();
  const excluded = 'a,button,input,textarea,select,nav,svg,[contenteditable],[data-no-terms],.sra-term,[data-sra-term],[data-formula-help],.formula-help-hint';
  function contextOf(node) {
    const tagged = node.closest('[data-formula-context]');
    if (tagged) return tagged.dataset.formulaContext;
    const question = node.closest('[data-question]');
    if (question) return course.lessons.find(l=>l.questions.some(q=>q.id===question.dataset.question))?.id || '';
    const parts = root.location.hash.slice(1).split('/');
    if (parts[0] === 'tentamen' && parts[1] === 'mc') return root.SRAMCData?.topics.find(t=>t.id===parts[2])?.lesson || '';
    return ['les','formules'].includes(parts[0]) ? parts[1] || '' : '';
  }
  function mark(node, info, context) {
    node.setAttribute('data-formula-help', '');
    node.setAttribute('tabindex', '0');
    node.setAttribute('role', 'button');
    node.setAttribute('aria-haspopup', 'dialog');
    node.setAttribute('aria-label', info.title + ': uitleg openen');
    help.set(node, { ...info, context });
  }
  function annotateMath(math) {
    const context = contextOf(math), formula = math.textContent;
    function visit(node) {
      if (node.hasAttribute('data-formula-help')) return;
      const tag = node.localName, info = describe(node, context, formula);
      const atomic = ['mi','mtext','mo','msub','msubsup','mover','msup'].includes(tag) && info;
      if (atomic) { mark(node, info, context); return; }
      for (const child of node.children) visit(child);
    }
    visit(math);
  }
  // Alleen tekst in de uitleg en rekenregels; nooit een antwoordeditor of invoerveld.
  const aliases = ['R²_adj','R²ᵢ','R²_bw','s_MPU','s_tot','s_bⱼ','s_Q','s_V','s_R','s_q','s_w','s_b','s_e','s_x','s_y','n_test','Ŵ_MPU','Ŵ_tot','Ŵ_Q','Ŵ_V','Ŵ_R','W_top','βⱼ,₀','b₀','b₁','b₂','bⱼ','bₖ','β₀','β₁','ŷᵢ','ŷ₀','x₀','x₁','x₂','xₖ','yᵢ','wᵢ','bᵢ','eᵢ','Nᵢ','nᵢ','sᵢ','w̄ᵢ','w̄','b̄','x̄','ȳ','ē','s²','R²','sₑ','MSPR','TotalSS','SSR','SSE','MSR','MSE','VIF','Tolerance','MD','CD','ln','exp','df','N','n','B','E','q','s','t','k','x','y','z','w','b','e','ŷ','Ŵ','γ','α','β','ε','Σ','±'].sort((a,b)=>b.length-a.length);
  D.VIF = D.VIFi; D.Tolerance = D.Tolerancei;
  const word = /[\p{L}\p{N}\p{M}_’]/u;
  // Formulebladnotatie in platte tekst (s_e, Ŵ_MPU, e_(t−1)) verschijnt als subscript.
  // Eén letter of een vaste afkorting als basis; SPSS-namen zoals LN_MORT of ZRE_1 blijven letterlijk.
  // Een cijfer of N mag direct voorafgaan, zoals in 2x_t en Ns_q.
  const notation = /(?<=(?:^|[^\p{L}_])N?)((?:Σ)?(?:SSR|SSE|MSE|MSR|VIF|SE|MD|CD|df|\p{L}\p{M}?)[²³]?)_(\([^()\s]{1,12}\)|[\p{L}0-9]+(?:,[\p{L}0-9]+)?)(?![\p{L}0-9_])/gu;
  const notationSkip = 'script,style,textarea,input,select,option,svg,math,code,pre,[contenteditable]';
  function notationParts(text) {
    const parts = []; let offset = 0;
    for (const m of text.matchAll(notation)) {
      parts.push(text.slice(offset, m.index) + m[1], {sub: m[2].replace(/^\((.*)\)$/, '$1')});
      offset = m.index + m[0].length;
    }
    if (offset) parts.push(text.slice(offset));
    return parts;
  }
  function formatNotation(container) {
    const walker = document.createTreeWalker(container, 4), nodes = [];
    while (walker.nextNode()) if (walker.currentNode.textContent.includes('_') && !walker.currentNode.parentElement.closest(notationSkip)) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const parts = notationParts(node.textContent);
      if (!parts.length) continue;
      node.replaceWith(...parts.map(part => {
        if (typeof part === 'string') return part;
        const sub = document.createElement('sub'); sub.textContent = part.sub; return sub;
      }));
    }
  }
  function textMatches(text, context) {
    const matches = [];
    for (let i = 0; i < text.length;) {
      const token = aliases.find(a => {
        if (!text.startsWith(a,i)) return false;
        if (!word.test(a)) return true;
        const before = !word.test(text[i-1] || '') || matches.at(-1)?.end === i;
        const end = i+a.length;
        const after = !word.test(text[end] || '') || (/[₀₁₂ⱼₖᵢ]$/.test(a) && aliases.some(b => text.startsWith(b,end) && !word.test(text[end+b.length] || '')));
        return before && after;
      });
      const info = token && lookup(token, context, text);
      if (info) { matches.push({start:i,end:i+token.length,info}); i += token.length; } else i++;
    }
    return matches;
  }
  function annotateText(container) {
    const walker = document.createTreeWalker(container, 4), nodes = [];
    while (walker.nextNode()) if (!walker.currentNode.parentElement.closest(excluded + ',math')) nodes.push(walker.currentNode);
    for (const node of nodes) {
      // Een losse letter binnen een index (de t in e_(t−1)) krijgt geen eigen uitleg; zo blijft de notatie heel.
      const indexes = [...node.textContent.matchAll(notation)].map(m => [m.index + m[0].indexOf('_') + 1, m.index + m[0].length]);
      const context = contextOf(node.parentElement), matches = textMatches(node.textContent, context).filter(m => !indexes.some(([a, b]) => m.start >= a && m.start < b));
      if (!matches.length) continue;
      const fragment = document.createDocumentFragment(); let offset = 0;
      for (const m of matches) {
        fragment.append(document.createTextNode(node.textContent.slice(offset,m.start)));
        const trigger = document.createElement('span'); trigger.className = 'formula-text-component'; trigger.textContent = node.textContent.slice(m.start,m.end);
        mark(trigger, m.info, context); fragment.append(trigger); offset = m.end;
      }
      fragment.append(document.createTextNode(node.textContent.slice(offset))); node.replaceWith(fragment);
    }
  }
  // De lijst volgt de formuleregels: per regel de symbolen die daar voor het eerst voorkomen.
  // Tekens als ± horen niet in de lijst; zij houden alleen hun klikuitleg in de formule.
  function legendGroups(block) {
    const seen = new Set(), rows = block.querySelectorAll('.formula-row');
    return [...(rows.length ? rows : [block])].map(row => {
      const label = row.querySelector('.formula-label')?.cloneNode(true);
      label?.querySelector('.formula-number')?.remove();
      const items = [...row.querySelectorAll('[data-formula-help]')].map(node => help.get(node))
        .filter(info => info && !/^[Σ±…]:/.test(info.title) && !seen.has(info.title) && seen.add(info.title));
      return { label: label?.textContent.trim() || '', items };
    }).filter(group => group.items.length);
  }
  function legendGroup(group, titled) {
    const box = document.createElement('div'), list = document.createElement('dl');
    box.className = 'symbol-group';
    if (titled) {
      const title = document.createElement('p');
      title.className = 'symbol-group-title';
      title.textContent = group.label;
      box.append(title);
    }
    for (const info of group.items) {
      const split = info.title.indexOf(': ');
      const symbol = document.createElement('dt'), meaning = document.createElement('dd'), trigger = document.createElement('span');
      trigger.className = 'formula-text-component';
      trigger.textContent = info.title.slice(0, split);
      mark(trigger, info, info.context);
      symbol.append(trigger);
      meaning.textContent = info.title.slice(split + 2);
      list.append(symbol, meaning);
    }
    box.append(list);
    return box;
  }
  function legends() {
    for (const block of host.querySelectorAll('.formula-typeset:not([data-legend])')) {
      const groups = legendGroups(block);
      if (!groups.length) continue;
      block.setAttribute('data-legend', '');
      let anchor = block, line = block.nextElementSibling;
      if (line?.matches('.symbols-heading')) { anchor = line; line = line.nextElementSibling; }
      if (!line?.matches('.symbols')) {
        line = document.createElement('div');
        line.className = 'symbols';
        line.setAttribute('data-no-terms', '');
        line.setAttribute('data-no-formula-text', '');
        anchor.after(line);
      }
      line.replaceChildren(...groups.map(group => legendGroup(group, groups.length > 1)));
    }
  }
  function annotate() {
    if (!host) return;
    observer?.disconnect();
    root.SRAFormulaText?.annotate(host);
    host.querySelectorAll('math').forEach(math => { if (!math.closest('a,button,[contenteditable]')) annotateMath(math); });
    host.querySelectorAll('.section-body p,.section-body li,.section-body td,.formula-guide-card p,.formula-guide-card li,.lab-equation,.example li,.question-feedback .feedback,.mc-feedback p,.mc-feedback li').forEach(annotateText);
    legends();
    formatNotation(host);
    observer?.observe(host,{childList:true,subtree:true});
  }
  function close(restore = true) {
    root.SRAInlineHelp?.close(popup, restore);
  }
  function open(trigger) {
    const info = help.get(trigger); if (!info) return;
    popup.querySelector('h2').textContent = info.title;
    popup.querySelector('.formula-help-definition').textContent = info.text;
    const sources = popup.querySelector('.formula-help-source'); sources.replaceChildren();
    const lesson = course.lessons.find(l=>l.id===info.context);
    const ref = lesson?.refs.find(r=>r.source==='formules') || lesson?.refs[0];
    const source = ref && course.sources[ref.source];
    if (source) {
      const a = document.createElement('a'); a.href = 'bronnen/'+encodeURIComponent(source.file)+'#page='+ref.page; a.target='_blank';a.rel='noopener';a.textContent='Bron: '+source.title+' · p. '+ref.page; sources.append(a);
    }
    root.SRAInlineHelp.open(popup, trigger);
  }
  function init(element, data) {
    host = element; course = data;
    popup = document.createElement('div'); popup.id='formula-help-popup'; popup.hidden=true; popup.setAttribute('role','dialog'); popup.setAttribute('aria-modal','false'); popup.className = 'sra-term-popup formula-help-popup'; popup.setAttribute('aria-labelledby','formula-help-title'); popup.setAttribute('aria-describedby','formula-help-definition');
    popup.innerHTML='<header class="sra-term-head"><h2 id="formula-help-title"></h2><button type="button" class="sra-term-close" aria-label="Formule-uitleg sluiten">×</button></header><div class="sra-term-content"><p class="formula-help-definition" id="formula-help-definition"></p><p class="formula-help-source"></p></div>';
    document.body.append(popup);
    popup.querySelector('button').onclick = () => close();
    host.addEventListener('click',e=>{const trigger=e.target.closest('[data-formula-help]');if(trigger&&help.has(trigger)){e.preventDefault();e.stopPropagation();open(trigger);}});
    host.addEventListener('keydown',e=>{if(!['Enter',' '].includes(e.key))return;const trigger=e.target.closest('[data-formula-help]');if(trigger&&help.has(trigger)){e.preventDefault();e.stopPropagation();open(trigger);}});
    root.addEventListener('hashchange',()=>close(false));
    observer = new MutationObserver(records=>{
      if (pending || !records.some(r=>[...r.addedNodes].some(n=>n.nodeType===1||n.nodeType===3))) return;
      pending=true;root.requestAnimationFrame(()=>{pending=false;annotate();});
    });
    annotate();
  }
  return {init,annotate,close,lookup,describe,textMatches,keyOf,notationParts};
});
