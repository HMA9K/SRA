"""Vraaggerichte uitleg, afgeleid van de SRA-lessen en hun bronverwijzingen.

De nummering volgt de oorspronkelijke opties in build_content/build_mc.
Pas bij het samenstellen van de MC-reeks worden opties én uitleg samen geroteerd.
Een ontbrekende uitleg is een bouwfout; er is bewust geen generieke fallback.
"""

from question_patterns import apply_pattern

BASIC = {}
APPLICATION = {}


def basic(key, steps, pattern, trap, options):
    BASIC[key] = dict(steps=steps, pattern=pattern, trap=trap,
                      optionExplanations=options)


def application(key, insight, options):
    APPLICATION[key] = dict(insight=insight, optionExplanations=options)


basic('beginnen-1', [
    'De populatie bestaat uit alle 2.000 facturen waarover je een uitspraak wilt doen; daarom is N = 2.000.',
    'De steekproef bestaat uit de 80 facturen die werkelijk zijn onderzocht. De kleine letter n staat voor dat aantal: n = 80.',
    'De 1.920 overige facturen behoren wel tot de populatie, maar niet tot de onderzochte steekproef.'
], 'Zie je “onderzoekt … van …”? Het onderzochte aantal is n; het volledige aantal is N.',
    'Verwissel de populatieomvang N niet met de steekproefomvang n.', [
    '2.000 is N: het aantal facturen in de volledige populatie. Voor n tel je uitsluitend de onderzochte facturen.',
    '80 is het daadwerkelijk onderzochte aantal. Daarmee is dit de steekproefomvang n.',
    '1.920 = 2.000 − 80 is het aantal niet-onderzochte facturen. Dat is noch n, noch de volledige N.'
])
basic('beginnen-2', [
    'W is de onbekende totale werkelijke waarde van de populatie.',
    'Met steekproefgegevens bereken je een benadering van W. Het dakje in Ŵ geeft aan dat het om die schatting gaat.',
    'Een puntschatting kan met veel decimalen worden berekend en toch onzeker zijn; afronding en schattingsonzekerheid zijn verschillende zaken.'
], 'Een dakje boven een grootheid betekent: dit is de uit gegevens geschatte waarde.',
    'Een precies weergegeven getal is niet automatisch een exact bekende populatiewaarde.', [
    'Een exact bekend populatietotaal schrijf je hier als W. Het dakje laat juist zien dat het totaal wordt geschat.',
    'Ŵ is de uit de steekproef berekende schatting van W. Een interval kan vervolgens de onzekerheid rond die schatting beschrijven.',
    'Het dakje zegt niets over afronden. Ook een onafgeronde uitkomst blijft Ŵ zolang het een schatting is.'
])
basic('beginnen-3', [
    'Bij schatten zoek je de omvang van een onbekende grootheid, bijvoorbeeld het totale bedrag W.',
    'Bij toetsen beoordeel je een bewering met H₀ en H₁ en onderzoek je of er voldoende bewijs tegen H₀ is.',
    '“Hoe groot is de totale werkelijke voorraadwaarde?” vraagt dus een puntschatting, eventueel aangevuld met een betrouwbaarheidsinterval.'
], '“Hoe groot?” wijst op schatten; “significant?” of “H₀ verwerpen?” wijst op toetsen.',
    'Kies niet eerst een formule: stel eerst vast welk soort uitspraak de vraag verlangt.', [
    'Hier wordt een onbekend bedrag gevraagd. Een schatter levert een geschat totaal; een interval voegt informatie over onzekerheid toe.',
    'Het woord significant vraagt of de data voldoende bewijs voor een stijgend verband leveren. Dat is een hypothesetoets.',
    'Het verwerpen van H₀ is een toetsbeslissing. Je zoekt daarbij geen schatting van een voorraadbedrag.'
])
basic('rekenen-1', [
    'Bij Σw² hoort het kwadraat bij iedere afzonderlijke waarde w.',
    'Kwadrateer eerst: 2² = 4 en 4² = 16. Tel daarna op: Σw² = 4 + 16 = 20.',
    'Ter vergelijking: eerst optellen en daarna kwadrateren geeft (Σw)² = (2 + 4)² = 36.'
], 'Let op de plaats van de haakjes: Σw² is de som van kwadraten; (Σw)² is het kwadraat van de som.',
    'Eerst optellen en dan kwadrateren verwisselt twee verschillende onderdelen van de variantieformule.', [
    '36 is (2 + 4)² en hoort bij (Σw)². In de gevraagde Σw² moet je iedere waarde eerst afzonderlijk kwadrateren.',
    '20 = 2² + 4². De afzonderlijke kwadraten zijn 4 en 16; hun som is 20.',
    '6 is alleen Σw = 2 + 4. De gevraagde kwadraten ontbreken nog.'
])
basic('rekenen-2', [
    'De variantie is s² = 225 euro². Een variantie gebruikt gekwadrateerde afwijkingen en dus gekwadrateerde eenheden.',
    'De standaardafwijking is de wortel uit de variantie: s = √225 = 15 euro.',
    'Controleer de omzetting: 15² = 225. De eenheid is weer euro, dezelfde eenheid als de waarnemingen.'
], 'Van s² naar s? Neem de vierkantswortel en ga terug naar de oorspronkelijke eenheid.',
    'Alleen “euro²” door “euro” vervangen verandert de variantie niet in een standaardafwijking.', [
    '225 is nog de numerieke waarde van de variantie. Je moet de wortel nemen voordat je het resultaat als standaardafwijking in euro schrijft.',
    '15 euro klopt: √225 = 15 en de wortel uit euro² is euro.',
    '50.625 is 225². Je hebt dan opnieuw gekwadrateerd, terwijl de omzetting van variantie naar standaardafwijking een wortel vraagt.'
])
basic('rekenen-3', [
    's beschrijft hoe de individuele waarnemingen rond hun gemiddelde spreiden.',
    'Delen door √n geeft de standaardfout van het gemiddelde: de geschatte onzekerheid van het steekproefgemiddelde.',
    'Bij dezelfde spreiding s wordt die standaardfout kleiner als n groter wordt. Voor een eindige populatie kan nog een eindigheidscorrectie nodig zijn.'
], 'Een spreidingsmaat gedeeld door √n verwijst naar onzekerheid van een gemiddelde.',
    'Spreiding tussen posten en onzekerheid van een geschat gemiddelde zijn niet dezelfde grootheid.', [
    's/√n is de standaardfout van het gemiddelde vóór eindigheidscorrectie. Deze maat gebruik je voor de onzekerheid van de schatting.',
    'Een populatietotaal wordt bijvoorbeeld geschat met Nw̄. De uitdrukking s/√n bevat een spreidingsmaat en levert geen totaalbedrag.',
    'De individuele spreiding wordt beschreven door s. Door √n delen verandert het doel naar onzekerheid van het gemiddelde.'
])
basic('onzekerheid-1', [
    '90% betrouwbaarheid laat α = 1 − 0,90 = 0,10 buiten het centrale interval.',
    'Een tweezijdig interval verdeelt die totale overschrijdingskans over twee staarten.',
    'Per staart is de kans α/2 = 0,10/2 = 0,05, dus 5%.'
], 'Twee grenzen bij een betrouwbaarheidsinterval: verdeel 1 − betrouwbaarheid over twee staarten.',
    'De totale overschrijdingskans α is tweemaal de kans in één staart.', [
    '0,10 is de totale kans buiten het 90%-interval. De vraag vraagt de kans per staart, dus moet je nog door twee delen.',
    '0,05 klopt: de resterende 10% wordt gelijk verdeeld over de linker- en rechterstaart.',
    '0,90 is de kans in het centrale gebied, niet de kans buiten één van de grenzen.'
])
basic('onzekerheid-2', [
    'Een symmetrisch interval loopt van schatting − E tot schatting + E.',
    'De afstand tussen beide grenzen is daardoor E + E = 2E.',
    'Bij een totale breedte van € 12.000 is de halve breedte E = € 12.000/2 = € 6.000.'
], 'Staat er “totale breedte”? Halveer die voordat je E in een formule invult.',
    'De marge E ligt aan één kant van de schatting; de totale breedte omvat beide kanten.', [
    '€ 24.000 verdubbelt de al gegeven totale breedte. Voor E moet je juist halveren.',
    '€ 12.000 is de afstand tussen onder- en bovengrens. E is slechts de helft van die afstand.',
    '€ 6.000 is de juiste marge: een interval van schatting − 6.000 tot schatting + 6.000 is in totaal € 12.000 breed.'
])
basic('onzekerheid-3', [
    'De berekende vrijheidsgraden zijn 164, maar die rij is niet beschikbaar in de opgegeven tabel.',
    'Volgens de tabelafspraak in het SRA-onderwijsprogramma neem je de naast lagere beschikbare waarde.',
    'Van 160 en 170 is 160 de naast lagere rij. Dit is een tabelkeuze; de berekende df blijven 164.'
], 'Een df ontbreekt in de tabel? Pas de cursusafspraak voor de naast lagere tabelrij toe.',
    'Ga niet afronden naar de dichtstbijzijnde rij of zelf interpoleren als de cursus een vaste tabelafspraak geeft.', [
    '160 is de grootste beschikbare rij die lager is dan 164, en volgt daarmee de voorgeschreven SRA-tabelafspraak.',
    '170 ligt boven 164. Dat volgt niet de afspraak om de naast lagere beschikbare df te gebruiken.',
    'Het middelen van twee tabelrijen is interpolatie. De cursus schrijft hier een rijkeuze voor, geen interpolatie.'
])
basic('mpu-1', [
    'De directe schatter MPU gebruikt het gemiddelde van de werkelijke steekproefwaarden voor de gehele populatie.',
    'Vermenigvuldig het gemiddelde per post met het aantal populatieposten: Ŵ_MPU = Nw̄.',
    'Invullen geeft 2.000 × € 150 = € 300.000. Dit is een geschat totaal, nog zonder onzekerheidsmarge.'
], 'Werkelijk gemiddelde per post en populatieomvang gegeven: totaal schatten met N × gemiddelde.',
    'Een bedrag per post is nog geen totaalbedrag voor alle posten.', [
    '€ 300.000 klopt: iedere populatiepost krijgt in deze schatting het gemiddelde van € 150 mee.',
    '€ 150 is het gemiddelde per post. Voor het populatietotaal ontbreekt de vermenigvuldiging met 2.000.',
    '€ 13,33 ontstaat ongeveer uit 2.000/150. De directe schatter vermenigvuldigt het aantal posten met het bedrag per post.'
])
basic('mpu-2', [
    'MPU schat W rechtstreeks uit de werkelijke steekproefwaarden w.',
    'De bijpassende spreidingsmaat is daarom s_w, de standaardafwijking van die werkelijke waarden.',
    'Voor de standaardfout van het totaal wordt s_w geschaald met N/√n en, indien van toepassing, de eindigheidscorrectie.'
], 'Kijk waarop de schatter is gebaseerd: MPU op w, verschilschatter op e = b − w.',
    'Kies de spreidingsmaat bij de gebruikte schatter; boekwaarden en fouten zijn andere gegevens.', [
    'MPU gebruikt de werkelijke waarden. De standaardafwijking s_w beschrijft de spreiding die in zijn standaardfout nodig is.',
    'De spreiding van b − w hoort bij de verschilschatter. Dat is een andere schatter, die het bekende boektotaal corrigeert.',
    'Alleen de boekwaarden laten de spreiding van de gecontroleerde werkelijke waarden niet zien. Voor MPU heb je s_w nodig.'
])
basic('mpu-3', [
    'De eindigheidscorrectie is √((N − n)/(N − 1)).',
    'Als alle populatieposten zijn onderzocht, is n = N en wordt N − n = 0; de correctiefactor is dus nul.',
    'Daarmee verdwijnt de onzekerheid door steekproeftrekking. De individuele posten kunnen onderling nog wel verschillen.'
], 'Alle posten onderzocht, dus n = N? De steekproefstandaardfout wordt nul.',
    'Geen steekproefonzekerheid betekent niet dat er geen spreiding of geen mogelijke meetfout bestaat.', [
    'Een factor 1 zou de standaardfout ongewijzigd laten. Bij integrale controle is juist geen onzekerheid door steekproeftrekking over.',
    'De teller N − n is nul, dus de wortel en daarmee de correctiefactor worden nul.',
    'N is een aantal posten, geen uitkomst van deze correctiefactor. Invullen in de teller geeft N − N = 0.'
])
basic('verschil-1', [
    'In dit onderdeel is de controlefout gedefinieerd als e = b − w.',
    'Vul boekwaarde b = 120 en werkelijke waarde w = 135 in: e = 120 − 135 = −15.',
    'Het negatieve teken betekent onderwaardering in de boeken: de werkelijke waarde ligt 15 hoger.'
], 'Bij een controlefout eerst de afspraak e = boekwaarde − werkelijke waarde opschrijven.',
    'Het regressieresidu y − ŷ en de controlefout b − w gebruiken verschillende grootheden.', [
    '15 bereken je met 135 − 120. Daarmee draai je de voorgeschreven volgorde b − w om.',
    '−15 volgt uit 120 − 135. De boekwaarde is 15 lager dan de werkelijke waarde.',
    '255 telt boekwaarde en werkelijke waarde op. Een controlefout is juist het verschil tussen beide.'
])
basic('verschil-2', [
    'De les verwijst voor deze toepassing naar de cursusvoorwaarde van minstens 30 aangetroffen fouten.',
    'Er zijn 200 posten gecontroleerd, maar slechts 12 daarvan bevatten een fout.',
    '12 is kleiner dan 30. De genoemde voorwaarde is dus niet vervuld, ondanks de grotere steekproefomvang.'
], 'Let op de eenheid achter een minimum: aantal fouten is iets anders dan aantal controles.',
    'Maak van de cursusvoorwaarde “30 fouten” niet ongemerkt “30 waarnemingen”.', [
    'n = 200 is groter dan 30, maar de lesvoorwaarde gaat over het aantal aangetroffen fouten. Daarvan zijn er slechts 12.',
    'De cursusvoorwaarde is hier niet vervuld: 12 fouten is minder dan de genoemde 30.',
    'De genoemde cursusvoorwaarde gaat om het aantal fouten, niet om hun teken. Ook alleen positieve fouten maken 12 niet tot 30.'
])
basic('verschil-3', [
    'De verschilschatter corrigeert het bekende boektotaal B met de geschatte totale fout Nē.',
    'De onzekerheid hangt daarbij samen met s_e: de spreiding van de verschillen b − w.',
    'Als die verschillen onderling weinig variëren, kun je hun gemiddelde en totale correctie relatief nauwkeurig schatten.'
], 'Ongeveer een vast verschil per post? Dan kan de spreiding van de fouten klein zijn.',
    'Een groot of klein gemiddeld verschil zegt op zichzelf nog niet hoe sterk de verschillen spreiden.', [
    'De formule Ŵ_V = B − Nē gebruikt juist het bekende populatieboektotaal B. Het ontbreken daarvan is geen voordeel van deze schatter.',
    'Kleine spreiding van de fouten betekent een kleine s_e. Die verkleint, bij overige gelijke gegevens, de standaardfout van de correctie.',
    'De fouten worden expliciet verwerkt via Nē. Ze negeren zou geen verschilschatter opleveren.'
])
basic('quotient-1', [
    'De goedratio q vergelijkt de totale werkelijke waarde met de totale boekwaarde in de steekproef.',
    'Gebruik q = Σw/Σb = 90.000/100.000 = 0,90.',
    'De werkelijke waarde is hier dus 90% van de boekwaarde; de ontbrekende 10% is het foutaandeel ten opzichte van de boekwaarde.'
], 'Een goedratio vraagt werkelijke waarde gedeeld door boekwaarde, in die volgorde.',
    'q en 1 − q hebben een andere betekenis: goedaandeel tegenover foutaandeel.', [
    '1,111 is ongeveer 100.000/90.000. Dat is de omgekeerde verhouding en niet de gevraagde goedratio.',
    '0,90 klopt: per euro boekwaarde is in de steekproef € 0,90 werkelijke waarde vastgesteld.',
    '0,10 is 1 − 0,90: het foutaandeel. De vraag vraagt het aandeel dat wél werkelijke waarde vertegenwoordigt.'
])
basic('quotient-2', [
    'De quotiëntschatter gebruikt een relatief stabiele verhouding tussen werkelijke waarde en boekwaarde.',
    'Een afwijking van ongeveer hetzelfde percentage per post past bij zo’n verhouding.',
    'Een ongeveer vast euroverschil per post past eerder bij de verschilschatter.'
], 'Percentage ongeveer gelijk bij kleine én grote posten? Denk aan de quotiëntschatter.',
    'Een vast percentage is niet hetzelfde als een vast bedrag.', [
    'Circa € 5 verschil per post wijst op een stabiele absolute fout. Dat patroon past eerder bij de verschilschatter.',
    'Circa 8% overwaardering duidt op een vergelijkbare verhouding tussen boekwaarde en werkelijke waarde. Dat past bij een quotiëntschatter.',
    'Zonder boekwaarden kun je Σw/Σb niet bepalen en de ratio niet op B toepassen.'
])
basic('quotient-3', [
    'De goedratio geeft welk deel van de boekwaarde als werkelijke waarde wordt geschat.',
    'Ŵ_Q = qB = 0,96 × 1.000.000 = 960.000.',
    'De bijbehorende geschatte totale overwaardering is B − Ŵ_Q = 40.000, maar dat is niet het gevraagde werkelijke totaal.'
], 'Lees of de vraag het werkelijke bedrag qB of de fout (1 − q)B verlangt.',
    'Een juist berekend foutbedrag beantwoordt geen vraag naar de werkelijke waarde.', [
    '40.000 is de geschatte fout: 4% van 1.000.000. Gevraagd is het resterende werkelijke bedrag.',
    '960.000 is de geschatte werkelijke waarde: 96% van het bekende boektotaal.',
    '1.040.000 telt 4% bij de boekwaarde op. Bij q = 0,96 ligt de geschatte werkelijke waarde juist lager dan B.'
])
basic('regressieschatter-1', [
    'De regressieschatter is Ŵ_R = Nw̄ + b₁(B − Nb̄).',
    'Als B = Nb̄, is het verschil tussen het bekende en het geschatte boektotaal nul.',
    'De volledige correctie wordt b₁ × 0 = 0. Daardoor valt Ŵ_R in dit geval samen met MPU: Nw̄.'
], 'Bekend boektotaal gelijk aan N × steekproefgemiddelde boekwaarde? Dan ontbreekt een correctieverschil.',
    'Een niet-nulle regressiehelling veroorzaakt geen correctie als de factor ernaast nul is.', [
    'N is de populatieomvang. De correctie is b₁(B − Nb̄), en die wordt hier nul ongeacht de omvang van N.',
    '0 klopt: het verschil B − Nb̄ is nul en daarmee ook het product met b₁.',
    'b₁ is alleen de helling. Voor de correctie moet je die vermenigvuldigen met B − Nb̄, en dat verschil is nul.'
])
basic('regressieschatter-2', [
    'Volgens de behandelde formule vermenigvuldig je s_MPU met √(1 − R²).',
    'Bij R = 0,8 is R² = 0,64 en 1 − R² = 0,36.',
    'Neem de wortel: √0,36 = 0,6. De nieuwe standaardfout is dus 60% van s_MPU.'
], 'Een correctie op een standaardfout bevat hier een wortel uit de resterende variantiefractie.',
    'R, R² en √(1 − R²) zijn drie verschillende getallen.', [
    '0,2 is 1 − R. De formule vraagt eerst R kwadrateren, van 1 aftrekken en daarna de wortel nemen.',
    '0,64 is R², niet de correctiefactor voor de standaardfout. De factor is √(1 − 0,64).',
    '0,6 klopt: √(1 − 0,8²) = √0,36 = 0,6.'
])
basic('regressieschatter-3', [
    'Deze regressieschatter staat in het onderdeel schatten van totale populatiewaarden.',
    'Het lineaire verband tussen boekwaarde b en werkelijke waarde w helpt het populatietotaal W te schatten.',
    'Dat is een ander doel dan een regressielijn gebruiken om y voor één nieuwe persoon te voorspellen.'
], 'Let op het doel en de hoofdletter W: een populatietotaal, met B als hulpinformatie.',
    'Het woord regressie betekent niet dat iedere opgave een individuele voorspelling vraagt.', [
    'Het doel is het totale W van de populatie. De regressie levert daarbij een correctie op de directe totaalschatting.',
    'Een nieuwe persoon voorspellen hoort bij regressievoorspelling. De hier behandelde schatter gebruikt N en B voor een populatietotaal.',
    'Correlatie is een hulpmiddel in de berekening en onzekerheid. De uiteindelijke gevraagde grootheid is W.'
])
basic('steekproefomvang-1', [
    'De formule levert de minimumomvang die nodig is voor de gestelde nauwkeurigheid.',
    '83 posten is minder dan de berekende 83,02 en voldoet daarom niet aan die berekende minimumomvang.',
    'Omdat je alleen hele posten kunt controleren, rond je naar boven af: n = 84.'
], 'Een benodigde steekproefomvang altijd naar het volgende gehele aantal afronden.',
    'Gewoon afronden op het dichtstbijzijnde gehele getal kan onder het vereiste minimum uitkomen.', [
    '83 is gewone afronding, maar ligt onder 83,02. De gewenste nauwkeurigheid is daarmee volgens de formule niet gedekt.',
    '84 is het kleinste gehele aantal dat minstens 83,02 bedraagt.',
    '82 ligt nog verder onder de berekende minimumomvang. Naar beneden afronden past niet bij een vereiste nauwkeurigheid.'
])
basic('steekproefomvang-2', [
    'De totale benodigde omvang is 84 controles, inclusief de controles die al bruikbaar zijn uitgevoerd.',
    'Trek daarom de 40 eerdere controles van die totale behoefte af.',
    'Uitbreiding = 84 − 40 = 44 nieuwe controles. Controle: 40 + 44 = 84.'
], 'Het woord “uitbreiding” vraagt het verschil tussen benodigd totaal en al uitgevoerd.',
    'Tel de eerdere controles niet opnieuw op bij een totaal waarin ze al zijn begrepen.', [
    '124 telt 40 bij 84 op. Daarmee behandel je de totale behoefte ten onrechte als een extra behoefte.',
    '84 is het totale aantal controles. De vraag vraagt uitsluitend hoeveel er nog bij moeten.',
    '44 extra controles brengen het al uitgevoerde aantal van 40 op het vereiste totaal van 84.'
])
basic('steekproefomvang-3', [
    'De verschilschatter schat de correctie op B via de verschillen e = b − w.',
    'De benodigde omvang moet daarom worden afgestemd op de spreiding van die verschillen.',
    'Gebruik s²_e in de omvangsformule. s²_w hoort bij de directe schatter en s²_b beschrijft alleen boekwaarden.'
], 'Bepaal eerst welke schatter wordt gebruikt; kies daarna de bijpassende variantie.',
    'De drie varianties kunnen verschillende waarden hebben en zijn niet uitwisselbaar.', [
    's²_w is de variantie van werkelijke waarden. Voor de onzekerheid van een verschilcorrectie heb je de variantie van e nodig.',
    's²_e is de juiste variantie, omdat de verschilschatter de fouten e = b − w gebruikt.',
    's²_b beschrijft verschillen tussen boekwaarden. Daaruit volgt niet hoe sterk de controlefouten b − w spreiden.'
])
basic('stratificatie-1', [
    'Bij evenredige allocatie krijgt een stratum hetzelfde aandeel van de steekproef als van de populatie.',
    'De totale populatieomvang is 600 + 400 = 1.000; het aandeel van stratum 1 is 600/1.000 = 0,60.',
    'n₁ = 0,60 × 100 = 60. Voor stratum 2 blijven dan 40 controles over.'
], 'Evenredig verdelen? Gebruik alleen Nᵢ/N; bij Neyman wordt ook de spreiding meegewogen.',
    'Gelijke aantallen per groep zijn alleen evenredig als de groepen even groot zijn.', [
    '50 verdeelt de controles gelijk over de strata. Stratum 1 is echter groter en krijgt bij evenredige allocatie 60%.',
    '60 is 600/1.000 × 100 en volgt het populatieaandeel van stratum 1.',
    '40 is de evenredige omvang voor stratum 2, met 400 van de 1.000 posten.'
])
basic('stratificatie-2', [
    'Voor onafhankelijke strata tel je de varianties van de schattingen op.',
    'Kwadrateer de standaardfouten: 3² + 4² = 9 + 16 = 25.',
    'Neem daarna de wortel voor de gecombineerde standaardfout: √25 = 5.'
], 'Onafhankelijke schattingen samenvoegen: kwadrateren, optellen, één wortel nemen.',
    'De som van standaardfouten is niet de standaardfout van de som.', [
    '7 = 3 + 4 telt de standaardfouten rechtstreeks op. Bij onafhankelijke strata moet je hun kwadraten optellen.',
    '25 is de gecombineerde variantie. Voor de gevraagde standaardfout ontbreekt nog de wortel.',
    '5 = √(3² + 4²), dus dit is de gecombineerde standaardfout.'
])
basic('stratificatie-3', [
    'Integraal gecontroleerd betekent dat elke post in het topstratum is onderzocht.',
    'Het werkelijke totaal van dat stratum is dan bekend en wordt aan de geschatte totalen van de andere strata toegevoegd.',
    'Voor dit topstratum is nᵢ = Nᵢ. De eindigheidscorrectie en de steekproefvariantie van het totaal zijn dus nul.'
], 'Een volledig gecontroleerd stratum levert een bekend totaal en nul steekproefvariantie.',
    'De posten kunnen onderling spreiden, terwijl hun volledig vastgestelde totaal geen steekproefonzekerheid meer heeft.', [
    'Nul klopt: er is binnen dit stratum niet meer van een deel naar het geheel geëxtrapoleerd.',
    'De boekwaarde is een bedrag en geen variantie. Bovendien telt voor het totaal het gecontroleerde werkelijke bedrag mee.',
    'Er is geen onbekende steekproefvariantie van dit totaal: alle elementen zijn onderzocht, zodat deze component nul is.'
])
basic('regressielijn-1', [
    'De lijn ŷ = 10 + 2x heeft constante 10 en helling 2.',
    'Vul x = 4 in en vermenigvuldig eerst: 2 × 4 = 8.',
    'Tel de constante erbij op: ŷ = 10 + 8 = 18. Dit is de voorspelling, niet automatisch de waargenomen y.'
], 'Bij een voorspelling alle waarden in de lijn invullen en de constante één keer meenemen.',
    'De helling vermenigvuldigt x; de constante wordt daarna opgeteld.', [
    '18 volgt rechtstreeks uit 10 + 2 × 4 = 10 + 8.',
    '16 volgt niet uit de gegeven lijn. De bijdrage van x is 8 en de constante is 10, dus samen 18.',
    '24 volgt niet uit 10 + 2 × 4. De bijdrage van x is 8 en met de constante 10 wordt de voorspelling 18.'
])
basic('regressielijn-2', [
    'Een regressieresidu is het verschil tussen de waargenomen en de voorspelde uitkomst: e = y − ŷ.',
    'Vul de waarden in: e = 25 − 18 = 7.',
    'Het positieve teken betekent dat de waarneming 7 boven de regressielijn ligt.'
], 'Waarneming én voorspelling gegeven? Voor het residu trek je voorspeld af van waargenomen.',
    'ŷ − y draait het teken van het residu om.', [
    '−7 is 18 − 25 en gebruikt de omgekeerde volgorde. Het regressieresidu is y − ŷ.',
    '7 klopt: de werkelijke uitkomst 25 ligt 7 boven de voorspelde 18.',
    '43 telt waarneming en voorspelling op. Het residu meet juist hun verschil.'
])
basic('regressielijn-3', [
    'OLS betekent gewone kleinste kwadraten: het model wordt gekozen op basis van de residuen y − ŷ.',
    'Ieder residu wordt gekwadrateerd, zodat positieve en negatieve afwijkingen elkaar niet kunnen opheffen.',
    'OLS kiest de coëfficiënten waarvoor Σe², de som van die kwadraten, het kleinst is.'
], '“Kleinste kwadraten” verwijst naar kwadraten van voorspellingsafwijkingen.',
    'Een residusom van nul kan toch grote afzonderlijke fouten bevatten.', [
    'De gewone som laat positieve en negatieve residuen wegvallen. Die som beoordeelt daarom niet de totale grootte van de afwijkingen.',
    'De som van gekwadrateerde residuen is het OLS-criterium. Grotere afwijkingen wegen door het kwadrateren zwaarder mee.',
    'OLS kiest coëfficiënten voor de gegeven waarnemingen. De methode minimaliseert niet het aantal gegevens.'
])
basic('anova-1', [
    'SSR is de door het model verklaarde kwadratensom; TotalSS is de totale kwadratensom.',
    'R² = SSR/TotalSS = 80/100 = 0,80.',
    'Het model verklaart hiermee 80% van de variatie in y. De resterende 20% is onverklaard.'
], 'Verklaard gedeeld door totaal geeft de verklaarde fractie R².',
    'Verklaarde variatie is niet hetzelfde als het percentage exact juiste voorspellingen.', [
    '0,20 = 1 − 0,80 is de onverklaarde fractie. De vraag vraagt het verklaarde aandeel.',
    '0,80 is 80/100: 80% van de totale variatie wordt door het model verklaard.',
    '1,25 is 100/80, de omgekeerde verhouding. In de hier behandelde OLS-regressie met constante ligt R² tussen 0 en 1.'
])
basic('anova-2', [
    'Bij n waarnemingen en k verklarende variabelen worden k hellingen en één constante geschat.',
    'De resterende vrijheidsgraden zijn daarom n − k − 1.',
    'Invullen geeft 50 − 3 − 1 = 46 residual df. De total df zijn 49 en regression df zijn 3.'
], 'Residual df: trek zowel de k verklarende variabelen als de constante van n af.',
    'k telt de constante niet mee, maar in de residual df moet je die wel afzonderlijk aftrekken.', [
    '49 = n − 1 zijn de total df. Voor residual df moeten ook de drie verklarende variabelen worden verwerkt.',
    '47 = n − k vergeet de geschatte constante. Die kost nog één vrijheid.',
    '46 = n − k − 1 is juist. Controle: regression df 3 plus residual df 46 geeft total df 49.'
])
basic('anova-3', [
    'MSE is de gemiddelde kwadratensom van de residuen en schat hun variantie s²_e.',
    'Std. Error of the Estimate is de bijbehorende standaardafwijking s_e.',
    'Neem dus de wortel: s_e = √MSE = √16 = 4, in de oorspronkelijke eenheid van y.'
], 'Mean Square of variantie omzetten naar een standaardafwijking: één wortel nemen.',
    'MSE en Std. Error of the Estimate beschrijven dezelfde residuen, maar staan op een andere schaal.', [
    '4 is √16 en daarmee de gevraagde standaardafwijking van de residuen.',
    '16 is nog de MSE, dus de variantie. Voor de standaardfout ontbreekt de wortel.',
    '256 is 16². Daarmee kwadrateer je opnieuw in plaats van de variantie terug te brengen naar een standaardafwijking.'
])
basic('toetsen-1', [
    'De hellingscoëfficiënt β₁ beschrijft in het populatiemodel de richting van het verband.',
    'Een dalend verband betekent dat y afneemt als x toeneemt: de helling is negatief.',
    'De alternatieve hypothese voor het aantonen van een dalend verband is daarom H₁: β₁ < 0; de bijbehorende H₀ is β₁ ≥ 0.'
], '“Dalend” of “negatief” aantonen: kies vooraf een linkszijdige alternatieve hypothese.',
    'De richting hoort uit de vraag te komen, niet achteraf uit het teken van de gevonden coëfficiënt.', [
    'β₁ > 0 beschrijft een stijgend verband, precies de andere richting dan gevraagd.',
    'β₁ = 0 beschrijft geen helling en vormt de grenswaarde van de nulhypothese. Het toont geen dalend verband aan.',
    'β₁ < 0 beschrijft een negatieve populatiehelling en sluit aan bij het gevraagde dalende verband.'
])
basic('toetsen-2', [
    'De opgegeven p = 0,03 is al tweezijdig en houdt dus al rekening met beide staarten.',
    'Vergelijk deze p rechtstreeks met de totale α = 0,05: 0,03 < 0,05.',
    'Verwerp H₀ op het 5%-niveau. Daarmee is er statistisch bewijs tegen H₀; de toets geeft geen absolute zekerheid.'
], 'Een tweezijdige p-waarde vergelijk je met α, zonder α nogmaals te halveren.',
    'α/2 gebruik je bij de verdeling over staarten voor een kritieke tabelgrens, niet als extra correctie op een tweezijdige p.', [
    'H₀ verwerpen is juist, omdat de tweezijdige p = 0,03 kleiner is dan α = 0,05.',
    'Deze vergelijking corrigeert dubbel voor tweezijdigheid. De p-waarde omvat beide staarten al en moet met 0,05 worden vergeleken.',
    'De gegevens leveren hier aanleiding H₀ te verwerpen. Een toets bewijst H₀ bovendien niet, ook niet als je H₀ niet zou verwerpen.'
])
basic('toetsen-3', [
    'De globale F-toets heeft als H₀ dat alle drie de hellingscoëfficiënten gezamenlijk nul zijn.',
    'Een significante F geeft aanleiding die gezamenlijke nulhypothese te verwerpen.',
    'De conclusie is dat minstens één hellingscoëfficiënt niet nul is. Welke coëfficiënten afzonderlijk bijdragen, beoordeel je met hun eigen toetsen.'
], 'F gaat hier over het hele model; een t-toets gaat over één coëfficiënt gegeven de andere.',
    'Gezamenlijke significantie betekent niet dat iedere afzonderlijke variabele significant is.', [
    'De F-toets onderscheidt niet welke van de drie coëfficiënten afwijken. Voor “alle drie” zijn afzonderlijke beoordelingen nodig.',
    'Dit is de alternatieve hypothese van de globale F-toets: niet alle hellingen zijn nul, dus minstens één wijkt af.',
    'Normaliteit van de residuen is een modeldiagnose, geen uitkomst van de globale F-toets.'
])
basic('diagnostiek-1', [
    'Het formuleblad gebruikt voor mogelijke y-uitbijters grenzen voor gestandaardiseerde residuen.',
    'Bij n ≤ 100 zijn de cursusgrenzen ±2; bij n > 100 zijn ze ±3.',
    'Omdat 178 > 100 gebruik je −3 en +3. Controleer zowel het minimum als het maximum van de residuen.'
], 'Voor de cursusgrens bij gestandaardiseerde residuen eerst n vergelijken met 100.',
    'De grens signaleert een mogelijk afwijkende waarneming; zij is geen automatische verwijderregel.', [
    '±2 hoort volgens het formuleblad bij n ≤ 100. Hier is n = 178, dus geldt de andere cursusgrens.',
    '±3 is de behandelde grens voor n > 100. Zowel grote negatieve als grote positieve residuen verdienen aandacht.',
    '±1 is niet de cursusgrens voor deze uitbijtercontrole.'
])
basic('diagnostiek-2', [
    'Een invloedrijk punt kan de geschatte regressie sterk veranderen.',
    'Cook’s Distance is in de cursus de maat voor die mogelijke invloed; Mahalanobis Distance heeft betrekking op afwijkende x-waarden.',
    'Een hoge Cook’s Distance vraagt om onderzoek van de waarneming en de invloed, niet om automatisch verwijderen.'
], '“Invloed op de geschatte regressie” hoort bij Cook’s Distance.',
    'Een uitbijter, een invloedrijk punt en een hoge R² zijn verschillende begrippen.', [
    'Cook’s Distance beoordeelt de mogelijke invloed van een afzonderlijke waarneming op de regressieschatting.',
    'R² beschrijft verklaarde variatie voor het model als geheel. Het identificeert geen individuele invloedrijke punten.',
    'De constante is de voorspelde y als alle verklarende variabelen nul zijn. Zij is geen diagnostische maat voor invloed.'
])
basic('diagnostiek-3', [
    'Bij de Shapiro-Wilk-toets luidt H₀ hier dat de residuen normaal verdeeld zijn.',
    'De p-waarde 0,01 is kleiner dan α = 0,05, dus verwerp H₀.',
    'Formuleer het resultaat als een aanwijzing voor niet-normale residuen. Onderzoek vervolgens de data en het gekozen model.'
], 'Een kleine p bij een normaliteitstoets geeft bewijs tégen de normaliteitsaanname.',
    'Noem de normaliteit van de residuen; de toets gaat hier niet zonder meer over de verdeling van y.', [
    'Een kleine p ondersteunt geen bewijs voor normaliteit. Zij geeft juist aanleiding de nulhypothese van normale residuen te verwerpen.',
    'Dit koppelt de juiste nulhypothese aan 0,01 < 0,05 en geeft de juiste inhoudelijke conclusie.',
    'De gegevens bevatten p en α, dus je kunt wel een toetsbeslissing nemen. Niet iedere vervolgvraag over de oorzaak is daarmee beantwoord.'
])
basic('voorspellen-1', [
    'De standaardfout van de voorspelling bevat een term met (x₀ − x̄)².',
    'Bij x₀ = x̄ is die term nul, de kleinst mogelijke waarde van een kwadraat.',
    'Bij hetzelfde model en dezelfde betrouwbaarheid is het interval daar dus het smalst.'
], 'De onzekerheid door afstand tot het centrum is minimaal bij het gemiddelde van x.',
    'x = 0 is alleen het centrum als x̄ toevallig ook nul is.', [
    'Bij x₀ = x̄ verdwijnt de afstandsterm. Daardoor is de intervalmarge binnen dit model minimaal.',
    'Nul heeft geen vaste bijzondere positie in de geobserveerde x-data. Alleen als x̄ = 0 valt dit samen met het smalste interval.',
    'Verder van x̄ wordt de afstandsterm groter en daarmee ook de onzekerheid en intervalbreedte.'
])
basic('voorspellen-2', [
    'Een interval voor de gemiddelde respons beschrijft onzekerheid over de gemiddelde y bij een gegeven x₀.',
    'Eén nieuwe waarneming kan bovendien door individuele storing van dat gemiddelde afwijken.',
    'Het individuele voorspellingsinterval bevat daarom een extra 1 onder de wortel en is bij hetzelfde model doorgaans breder.'
], 'Eén nieuwe persoon of post voorspellen? Neem ook individuele storing mee.',
    'Een interval voor een gemiddelde is te smal als de vraag één nieuwe waarneming betreft.', [
    'Het gemiddelde responsinterval bevat geen extra individuele storing. Het is daardoor doorgaans smaller dan het individuele interval.',
    'Het interval voor één nieuwe waarneming is breder, omdat naast schattingsonzekerheid ook nieuwe individuele afwijking meetelt.',
    'De formules verschillen door de extra storingsterm. Daardoor zijn hun breedten bij hetzelfde model niet in het algemeen gelijk.'
])
basic('voorspellen-3', [
    'Een voorspellingsinterval beschrijft het verwachte bereik onder het gekozen model en de aannames.',
    'Een realisatie buiten dat interval is een opvallende afwijking, maar vertelt niet waarom die optreedt.',
    'Onderzoek daarom de waarneming, de gegevens en de modelaannames voordat je een inhoudelijke oorzaak toeschrijft.'
], 'Buiten een statistisch interval betekent een signaal dat uitleg vraagt, geen vastgestelde oorzaak.',
    'Verwar een ongebruikelijke uitkomst niet met bewijs van fraude of een reden om data te verwijderen.', [
    'Het interval toetst geen intentie en bewijst geen fraude. Ook modelproblemen, fouten of toevallige afwijkingen kunnen een rol spelen.',
    'Nader onderzoek is de passende stap: de afwijking vraagt een verklaring die niet uit het interval alleen volgt.',
    'Automatisch verwijderen zou de informatie over de afwijking wegnemen. Eerst moet worden onderzocht of er een inhoudelijke reden voor correctie is.'
])
basic('meervoudig-1', [
    'De dummycoëfficiënten voor HBO en WO zijn beide verschillen ten opzichte van dezelfde referentiegroep.',
    'Voor het onderlinge verschil trek je die effecten van elkaar af: B_WO − B_HBO.',
    '1.000 − 600 = 400. De voorspelling voor WO ligt dus 400 hoger dan voor HBO, bij gelijke overige opgenomen kenmerken.'
], 'Twee dummy’s met dezelfde referentiegroep vergelijken? Trek hun B-coëfficiënten van elkaar af.',
    'Een dummycoëfficiënt is geen verschil met elke willekeurige andere groep.', [
    '1.600 telt beide referentieverschillen op. Voor WO ten opzichte van HBO moet je het HBO-effect aftrekken.',
    '1.000 is het verschil tussen WO en de referentiegroep. HBO ligt zelf al 600 boven diezelfde referentie.',
    '400 = 1.000 − 600 is het onderlinge verschil, wanneer de overige verklarende variabelen gelijk worden gehouden.'
])
basic('meervoudig-2', [
    'k is in de gebruikte regressieformules het aantal verklarende variabelen.',
    'Er zijn vier verklarende variabelen, dus k = 4.',
    'De constante is wel een geschatte coëfficiënt, maar telt niet mee in k. Daarom worden residual df als n − k − 1 berekend.'
], 'Tel voor k de voorspellers; houd de constante afzonderlijk.',
    'Het aantal geschatte coëfficiënten inclusief constante is k + 1, niet k.', [
    '5 telt de constante mee. Dat is hier het aantal geschatte coëfficiënten, terwijl k alleen de vier voorspellers telt.',
    '4 is correct: er zijn vier verklarende variabelen en de constante blijft buiten k.',
    '3 laat één verklarende variabele weg. Je hoeft van de gegeven vier voorspellers niets af te trekken.'
])
basic('meervoudig-3', [
    'Gewone R² kan bij het toevoegen van verklarende variabelen stijgen, ook als hun extra bijdrage beperkt is.',
    'Adjusted R² corrigeert de verklaarde variatie voor het aantal opgenomen voorspellers en de steekproefomvang.',
    'Daarom helpt adjusted R² om modellen van verschillende omvang op dezelfde y en gegevens te vergelijken.'
], 'Modellen met verschillende aantallen voorspellers? Beoordeel ook de voor modelomvang gecorrigeerde R².',
    'Een hogere gewone R² alleen rechtvaardigt niet automatisch een complexer model.', [
    'Dit is het doel van adjusted R²: de modelomvang meewegen in de beoordeling van de verklaarde variatie.',
    'De richting lees je uit het teken van de relevante coëfficiënt. Adjusted R² is geen richtingsmaat.',
    'Een maat voor verklaarde variatie bewijst geen oorzaak-gevolgverband. Ook adjusted R² levert dat bewijs niet.'
])
basic('transformaties-1', [
    'Een machtsmodel heeft de vorm y = a × xᵇ.',
    'Logaritmeren van beide kanten geeft ln(y) = ln(a) + b × ln(x).',
    'Het verband is dan lineair tussen ln(x) en ln(y). Daarom worden bij Power beide variabelen getransformeerd.'
], 'Power of machtsverband: een rechte lijn tussen ln(x) en ln(y).',
    'Verwar Power niet met Logarithmic, waarbij alleen x is gelogaritmeerd.', [
    'Alleen ln(x) hoort bij het logaritmische model y = b₀ + b₁ln(x). Voor een machtsmodel wordt ook y gelogaritmeerd.',
    'Alleen ln(y) hoort bij het exponentiële model ln(y) = b₀ + b₁x. Een machtsmodel vraagt ook ln(x).',
    'Beide transformaties maken y = a × xᵇ lineair: ln(y) = ln(a) + b × ln(x).'
])
basic('transformaties-2', [
    'De uitkomst 2 is de voorspelling op de natuurlijke logschaal: ln(ŷ) = 2.',
    'De omgekeerde bewerking van ln is exp, oftewel e tot de gegeven macht.',
    'De teruggetransformeerde puntschatting is daarom ŷ = exp(2) ≈ 7,389.'
], 'Staat ln(ŷ) links? Voer na invullen exp uit om terug te gaan naar de oorspronkelijke schaal.',
    'Een waarde op logschaal is nog geen waarde in de oorspronkelijke meeteenheid.', [
    '2 is de voorspelling op logschaal. De vraag vraagt de teruggetransformeerde waarde.',
    'exp(2) keert de natuurlijke logaritme om en geeft ongeveer 7,389 op de oorspronkelijke schaal.',
    'ln(2) voert opnieuw een logaritme uit. Om terug te transformeren moet je juist de inverse exp gebruiken.'
])
basic('transformaties-3', [
    'Op de logschaal verhoogt één extra eenheid x de voorspelde ln(y) met b₁.',
    'Terugtransformeren geeft exp(b₀ + b₁x + b₁) = exp(b₀ + b₁x) × exp(b₁).',
    'De voorspelling wordt dus vermenigvuldigd met exp(b₁). De procentuele verandering is 100 × [exp(b₁) − 1].'
], 'Een optelling op logschaal wordt na exp een vermenigvuldiging op de oorspronkelijke schaal.',
    'De coëfficiënt b₁ zelf is niet de exacte vermenigvuldigingsfactor op de oorspronkelijke schaal.', [
    'b₁ is de toename van ln(y), niet de factor waarmee y wordt vermenigvuldigd.',
    'exp(b₁) is de juiste factor doordat exp(a + b₁) = exp(a) × exp(b₁).',
    'ln(b₁) transformeert de coëfficiënt de verkeerde kant op. Teruggaan vanaf logschaal vraagt exp.'
])
basic('modelbouw-1', [
    'Tolerance en VIF beschrijven overlap tussen een voorspeller en de overige voorspellers.',
    'Hun relatie is VIF = 1/tolerance.',
    'Bij tolerance = 0,25 is VIF = 1/0,25 = 4. Dat ligt onder de in de cursus gebruikte probleemgrens VIF > 10.'
], 'Tolerance gegeven en VIF gevraagd? Neem het omgekeerde.',
    'Een kleinere tolerance geeft een grotere VIF; de maten bewegen tegengesteld.', [
    '0,75 = 1 − 0,25 is niet VIF. Je moet door tolerance delen, niet tolerance van 1 aftrekken.',
    '4 klopt: 0,25 × 4 = 1, dus beide maten zijn elkaars omgekeerde.',
    '25 behandelt 0,25 alsof je alleen de komma mag verplaatsen. De formule is 1/0,25 = 4.'
])
basic('modelbouw-2', [
    'Backward-selectie start met alle kandidaatvariabelen in het model.',
    'Vervolgens wordt volgens het selectiecriterium stapsgewijs een variabele verwijderd.',
    'Na iedere verwijdering wordt het model opnieuw geschat voordat een volgende keuze wordt gemaakt.'
], 'Alle variabelen eerst opnemen en daarna verwijderen heet backward-selectie.',
    'Forward werkt juist vanuit een klein beginmodel en voegt variabelen toe.', [
    'Forward begint met een klein beginmodel en voegt geschikte voorspellers toe. Het start niet met alle kandidaten.',
    'Backward begint met het volledige kandidaatmodel en werkt door verwijdering naar een kleiner model.',
    'Een enkelvoudige correlatie bekijkt een verband tussen twee variabelen. Dat is geen selectieprocedure die alle kandidaten in een regressiemodel opneemt.'
])
basic('modelbouw-3', [
    'Een coëfficiënt in meervoudige regressie beschrijft de bijdrage gegeven de overige opgenomen voorspellers.',
    'Na het verwijderen van een voorspeller verandert die gezamenlijke context, omdat variabelen informatie kunnen delen.',
    'Schat het nieuwe model daarom opnieuw en beoordeel de nieuwe coëfficiënten, standaardfouten en p-waarden.'
], 'Iedere wijziging van de opgenomen voorspellers vraagt een nieuwe schatting vóór de volgende toetsbeslissing.',
    'Oude p-waarden horen bij het oude model en zijn niet automatisch geldig voor het gewijzigde model.', [
    'Juist: de geschatte bijdrage van een variabele hangt af van de andere variabelen die nog in het model zitten.',
    'Opnieuw schatten voegt geen waarnemingen toe en verdubbelt n niet. Het berekent het model opnieuw voor de gewijzigde set voorspellers.',
    'Zonder opnieuw schatten zou je beslissen met uitkomsten van het vorige model. Die kunnen na verwijdering veranderen.'
])
basic('validatie-1', [
    'MSPR is het gemiddelde van de gekwadrateerde voorspelfouten op de testset.',
    'Kwadrateer beide fouten: 2² = 4 en (−4)² = 16. Hun som is 20.',
    'De testset bevat twee waarnemingen, dus MSPR = 20/2 = 10.'
], 'Testfouten middelen: eerst kwadrateren en daarna delen door het aantal testwaarnemingen.',
    'Ook een negatieve fout krijgt een positief kwadraat; deel hier niet door residual df van het trainingsmodel.', [
    '2 is niet het gemiddelde van de gekwadrateerde fouten. Voor MSPR moeten 4 en 16 worden gemiddeld.',
    '10 = (4 + 16)/2 is het gemiddelde kwadraat van de twee testfouten.',
    '20 is de som van de kwadraten. De letter M staat voor Mean, dus delen door twee ontbreekt nog.'
])
basic('validatie-2', [
    'Een regressievergelijking in de oorspronkelijke eenheden gebruikt de ongestandaardiseerde coëfficiënten.',
    'Lees daarvoor de constante en hellingen uit Coefficients → Unstandardized Coefficients → B.',
    'ANOVA beschrijft de variatieverdeling; Model Summary beschrijft modelkwaliteit. Die tabellen leveren niet de benodigde B-coëfficiënten.'
], 'Een vergelijking opstellen? Zoek de kolom B in Coefficients.',
    'De gestandaardiseerde Beta hoort niet in een vergelijking met de oorspronkelijke eenheden.', [
    'SS in ANOVA zijn kwadratensommen van variatie. Zij zijn geen constante of hellingscoëfficiënten.',
    'Unstandardized B bevat de constante en hellingen die je in de vergelijking met de oorspronkelijke variabelen invult.',
    'R in Model Summary beschrijft de samenhang voor het model. Eén R geeft niet de afzonderlijke regressiecoëfficiënten.'
])
basic('validatie-3', [
    'In de ANOVA-tabel gelden voor de Total-rij n − 1 vrijheidsgraden.',
    'Als Total df = 49, dan is n − 1 = 49.',
    'Tel één op aan beide kanten: n = 50. Controle: 50 − 1 = 49.'
], 'Total df gegeven? Het aantal waarnemingen is één hoger.',
    'Gebruik voor deze rij niet de formule n − k − 1; die hoort bij Residual.', [
    '48 trekt nog één af van de total df. Om n uit n − 1 te vinden moet je juist één optellen.',
    '49 is het gegeven aantal vrijheidsgraden, niet het aantal waarnemingen.',
    '50 klopt, omdat Total df = 50 − 1 = 49.'
])
basic('tentamen-1', [
    'Lees eerst wat je moet opleveren: bijvoorbeeld een totaal, interval, toetsbeslissing of diagnose.',
    'Noteer daarna welke gegevens en methode nodig zijn om precies die uitspraak te onderbouwen.',
    'Een formule kiezen vóórdat het doel duidelijk is, vergroot de kans op een juiste berekening van de verkeerde grootheid.'
], 'Begin bij het gevraagde eindantwoord en werk terug naar gegevens en methode.',
    'De opvallendste tabel of bekendste formule hoeft niet bij de vraag te horen.', [
    'Een bekende formule kan een andere grootheid berekenen dan gevraagd. Bepaal eerst het doel van de vraag.',
    'Dit is de juiste start: de verlangde uitspraak bepaalt de methode, benodigde gegevens en vorm van de conclusie.',
    'De omvang van een tabel zegt niet of zij relevant is. Selecteer de tabel op basis van de gevraagde analyse.'
])
basic('tentamen-2', [
    'Een diagnose moet controleerbaar laten zien op welke uitvoer je je baseert.',
    'Noem de relevante tabel of afbeelding, de gebruikte grens/berekening of het waargenomen patroon en de inhoudelijke conclusie.',
    'Geef bij een vastgesteld probleem een passende, onderbouwde remedie. Onderzoek daarna of de aanpassing het probleem verhelpt.'
], '“Beoordeel en motiveer” vraagt bron in de uitvoer, redenering, conclusie en zo nodig een vervolgstap.',
    'Een los getal of ja/nee laat niet zien of je de juiste aanname hebt beoordeeld.', [
    'Alleen ja of nee mist de gebruikte uitvoer, beoordelingsregel en onderbouwing van de conclusie.',
    'Deze onderdelen maken de diagnose navolgbaar. Een remedie is relevant wanneer uit de diagnose een probleem blijkt.',
    'Een p-waarde krijgt pas betekenis naast de nulhypothese en α. Bovendien worden sommige diagnoses met grafieken of andere grenzen beoordeeld.'
])
basic('tentamen-3', [
    'Begripchecks laten zien of je afzonderlijke begrippen en stappen herkent.',
    'Open tentamenvragen vragen daarnaast om zelf gegevens te selecteren, berekeningen te combineren en een volledige conclusie te formuleren.',
    'Werk daarom ook volledige open opgaven zelfstandig uit en vergelijk daarna je redenering met de uitwerking.'
], 'Herkennen van een antwoord is een andere vaardigheid dan zelfstandig een volledige uitwerking opbouwen.',
    'Een hoge score op korte checks is geen vervanging voor oefenen met samenhang en eigen formulering.', [
    'Korte checks dekken niet alle vaardigheden van een open tentamen. Zelf een complete redenering opbouwen blijft nodig.',
    'Zelfstandig open vragen uitwerken oefent de samenhang, methodekeuze en verantwoording die niet volledig in meerkeuzechecks zitten.',
    'Formules kennen is slechts een onderdeel. Je moet ze ook passend kiezen, correct toepassen en de uitkomst in de casus uitleggen.'
])


application('beginnen-1', 'De 100 onderzochte facturen bepalen het gemiddelde; de 4.000 populatiefacturen bepalen naar welk totaal je dat gemiddelde opschaalt.', [
    '€ 7.000 = 100 × 70 is het totaal van de onderzochte facturen. Gevraagd is het geschatte totaal van alle 4.000 facturen.',
    '€ 280.000 = 4.000 × 70 past het steekproefgemiddelde toe op de volledige populatie.',
    '€ 70 is een bedrag per factuur. Voor het populatietotaal ontbreekt de vermenigvuldiging met N.',
    '€ 400.000 ontstaat niet uit het gegeven gemiddelde van € 70. Het aantal onderzochte facturen 100 is geen gemiddeld factuurbedrag.'
])
application('beginnen-2', 'Representativiteit betreft de aansluiting tussen selectie en populatie. Selecteren op lage bedragen kan het geschatte gemiddelde systematisch te laag maken.', [
    'Uit alleen het aantal 1.000 kun je niet besluiten dat de steekproef te klein is. Het duidelijke probleem is de selectie op prijs.',
    'De goedkoopste facturen zijn doelgericht geselecteerd en kunnen in waarde afwijken van de overige facturen. Dat bedreigt een uitspraak over de hele populatie.',
    'Afronding verandert niets aan de selectie van uitsluitend goedkope facturen en herstelt de daardoor mogelijke vertekening niet.',
    'Een betrouwbaarheidsinterval beschrijft onzekerheid binnen de gebruikte aanpak. Het maakt een systematisch selectieve steekproef niet alsnog representatief.'
])
application('beginnen-3', 'De standaardfout van € 5.000 beschrijft onzekerheid van de totaalschatting. De intervalgrenzen zijn dus grenzen voor W, niet voor aantallen of afzonderlijke facturen.', [
    '€ 240.000 is een puntschatting. De gegeven standaardfout maakt duidelijk dat dit geen exact bekend totaal is.',
    '5.000 is hier de standaardfout in euro en geen populatieomvang. Voor aantallen zou de vraag N moeten geven.',
    'De marge is 2 × € 5.000 = € 10.000. Aftrekken en optellen bij € 240.000 geeft [€ 230.000; € 250.000].',
    'Het interval heeft betrekking op het populatietotaal W. Het zegt niet welk aandeel afzonderlijke posten binnen die bedragen ligt.'
])
application('rekenen-1', 's² = 4 is de variantie; de bijbehorende standaardafwijking is √4 = 2. Houd die twee uitkomsten apart.', [
    '4 klopt: het gemiddelde is 4 en de kwadratensom van de afwijkingen is 8; delen door n − 1 = 2 geeft 4.',
    '8/3 deelt de kwadratensom door n. De gevraagde steekproefvariantie gebruikt n − 1 omdat het gemiddelde uit deze steekproef is geschat.',
    '8 is alleen de som van de gekwadrateerde afwijkingen. Delen door de vrijheidsgraden ontbreekt nog.',
    '2 is de wortel uit de variantie, dus de standaardafwijking s. Gevraagd is s².'
])
application('rekenen-2', 'Rond de variantie niet onnodig vroeg af. Bereken de wortel uit 20/3 en rond pas de gevraagde standaardafwijking af.', [
    '6,67 is ongeveer s² = 20/3. Voor s moet je nog de vierkantswortel nemen.',
    '2,24 is ongeveer √5. Dat krijg je hier door de gecorrigeerde kwadratensom 20 door n = 4 te delen, in plaats van door n − 1 = 3.',
    '2,58 is √(20/3), afgerond op twee decimalen. Zowel de correctie voor het gemiddelde als de deling door n − 1 zijn verwerkt.',
    '10,95 is ongeveer √120. Σw² is niet zelf de variantie: de correctie (Σw)²/n en de deling door n − 1 ontbreken.'
])
application('rekenen-3', 'Het gemiddelde van 36 waarnemingen is minder onzeker dan één afzonderlijke waarneming, terwijl de gemeten spreiding van de posten zelf 12 blijft.', [
    'De twee maten zijn omgedraaid. De individuele spreiding is s = 12 en de standaardfout van het gemiddelde is 12/6 = 2.',
    'Dit onderscheid klopt: s = 12 beschrijft de posten, en s/√n = 2 beschrijft de onzekerheid van het gemiddelde.',
    'De standaardfout is niet gelijk aan s omdat n = 36. De deling door √36 ontbreekt.',
    '144 = 12² is de variantie van de individuele waarden. Beide gevraagde maten zijn standaardafwijkingen of standaardfouten, geen varianties.'
])
application('onzekerheid-1', 'Het centrale gebied bevat 95%; de twee buitengebieden bevatten samen 5%. Bij gelijke verdeling is ieder buitengebied 2,5%.', [
    '0,95 is de centrale betrouwbaarheid, niet de overschrijdingskans in één staart.',
    '0,05 is de totale overschrijdingskans α. Bij twee staarten moet je die nog halveren.',
    '0,025 = (1 − 0,95)/2 is de kans in elk van de twee staarten.',
    '0,475 is de helft van het centrale gebied van 0,95. De vraag gaat over de buitenste staarten.'
])
application('onzekerheid-2', 'Naar buiten afronden mag het berekende interval verruimen, maar geen mogelijke waarden uit het oorspronkelijke interval afsnijden.', [
    'De bovengrens is goed naar buiten afgerond, maar 98.900 ligt boven de exacte ondergrens 98.850 en maakt het interval onderaan te klein.',
    '98.800 ligt onder 98.850 en 103.700 boven 103.650. Beide grenzen zijn dus op honderden naar buiten afgerond.',
    'De ondergrens klopt, maar 103.600 ligt onder de exacte bovengrens 103.650. Daarmee rond je bovenaan naar binnen af.',
    'Deze grenzen volgen niet uit de marge van € 2.400. Bereken eerst 101.250 ± 2.400 en rond daarna de afzonderlijke grenzen naar buiten af.'
])
application('onzekerheid-3', 'De intervalmarge is een kritieke waarde maal een standaardfout. Bij gelijkblijvende betrouwbaarheid en spreiding kan meer informatie die standaardfout verkleinen.', [
    'Een kleinere steekproef vergroot doorgaans de standaardfout en dus de intervalmarge.',
    'Een grotere n verkleint de standaardfout, bijvoorbeeld via s/√n. De marge wordt daardoor kleiner bij dezelfde betrouwbaarheid.',
    'Minder decimalen verandert alleen de weergave. Het levert geen extra informatie en verlaagt de berekende onzekerheid niet.',
    'De totale breedte is 2E en een standaardfout is een andere grootheid. Het verwisselen van de maten verbetert de nauwkeurigheid niet.'
])
application('mpu-1', 'De standaardfout hoort bij de gevraagde grootheid. Opschalen van een gemiddelde naar een totaal met N schaalt ook de standaardfout met N.', [
    '2 = 20/√100 is de standaardfout van het gemiddelde. Voor de standaardfout van het totaal ontbreekt N = 1.000.',
    '20 is de individuele standaardafwijking s_w, geen standaardfout van het totaal.',
    '200 = 100 × 2 schaalt met n. Het totale bedrag betreft alle N = 1.000 posten en vraagt dus 1.000 × 2.',
    '2.000 = 1.000 × (20/√100) is de standaardfout van het geschatte populatietotaal.'
])
application('mpu-2', 'De eindigheidscorrectie verlaagt de standaardfout omdat 100 van de 1.000 posten zijn waargenomen. De marge blijft t maal die gecorrigeerde standaardfout.', [
    'De marge is ongeveer 4 in plaats van 3.797. Dat mist de opschaling van onzekerheid van een gemiddelde naar die van het totaal met N.',
    'Het centrum is € 80.000 en de marge circa € 3.796,63. Afronden van de grenzen geeft ongeveer [€ 76.203; € 83.797].',
    'De marge van € 40.000 volgt niet uit de standaardfoutformule. Onder meer de deling door √100 moet worden verwerkt.',
    'Een marge van € 2.000 verwerkt de gegeven combinatie van t en eindigheidscorrectie niet. De berekende standaardfout is circa € 1.898,32 en moet nog met 2 worden vermenigvuldigd.'
])
application('mpu-3', 'Het totaal van alle gecontroleerde werkelijke waarden is bekend. De nulstandaardfout betreft alleen onzekerheid door steekproeftrekking, niet alle denkbare registratieproblemen.', [
    '500 × € 40 = € 20.000. Omdat n = N is de eindigheidscorrectie nul en resteert geen steekproefstandaardfout.',
    '€ 40 is het gemiddelde per post, niet het totaal. Het totaal is berekenbaar en de steekproefstandaardfout is hier nul.',
    'Het totaal klopt, maar 40 is een gemiddelde en geen standaardfout. Bij integrale controle is de steekproefstandaardfout nul.',
    'Zowel het aantal posten als hun werkelijke gemiddelde is bekend. Daarmee is het totaal juist direct te berekenen.'
])
application('verschil-1', 'Een positieve fout e = b − w betekent dat de boekwaarde te hoog is. De geschatte totale fout moet daarom van B worden afgetrokken.', [
    '€ 104.000 telt de fout bij B op. Bij positieve e zijn de boeken te hoog en moet je juist € 4.000 aftrekken.',
    '€ 4.000 = Nē is de geschatte totale fout. De gevraagde werkelijke waarde is B min dat foutbedrag.',
    '€ 96.000 = € 100.000 − 1.000 × € 4 is de correcte schatting van het werkelijke totaal.',
    '€ 100.004 verwerkt slechts één gemiddelde fout en gebruikt bovendien het verkeerde teken. De correctie betreft alle 1.000 posten.'
])
application('verschil-2', 'Een negatieve gemiddelde fout betekent dat de werkelijke waarden hoger liggen dan de boekwaarden. Daarom verhoogt de verschilschatter hier het totaal.', [
    '€ 8.500 trekt een positieve € 1.500 af. De geschatte fout is hier negatief, zodat aftrekken juist een verhoging geeft.',
    '€ 11.500 klopt: 10.000 − 500 × (−3) = 10.000 + 1.500.',
    '−€ 1.500 is de totale geschatte fout Nē. Het is nog niet het geschatte werkelijke totaal.',
    '€ 10.003 corrigeert slechts één keer voor € 3. De gemiddelde fout moet over alle N = 500 posten worden opgeschaald.'
])
application('verschil-3', 'De foutcorrectie bepaalt het centrum € 9.000; s_e bepaalt de onzekerheid rond dat centrum. Dat zijn twee afzonderlijke onderdelen van de berekening.', [
    'Dit interval heeft centrum € 9.000 en marge 2 × 500 × 5/√50 ≈ € 707,11. Beide onderdelen volgen uit de verschilschatter.',
    'De marge is passend, maar het interval is gecentreerd op B = € 10.000. De geschatte totale fout van € 1.000 is niet afgetrokken.',
    'De marge van € 10 gebruikt alleen t × s_e. De standaardfout van het totale verschil moet met N/√n worden geschaald.',
    'De marge van circa € 1.414 is tweemaal de juiste marge. De factor t = 2 mag slechts eenmaal op de standaardfout worden toegepast.'
])
application('quotient-1', 'De goedratio past het in de steekproef gevonden goedaandeel toe op het bekende populatieboektotaal. Het overblijvende verschil is de geschatte fout.', [
    '€ 20.000 is 10% van B en dus de geschatte overwaardering. De gevraagde werkelijke waarde is het goedaandeel van 90%.',
    '€ 180.000 = (72.000/80.000) × 200.000. De ratio en het populatietotaal zijn correct gecombineerd.',
    '€ 222.222 gebruikt ongeveer de omgekeerde verhouding 80.000/72.000. Voor q moet de werkelijke waarde in de teller staan.',
    '€ 192.000 trekt het steekproefverschil 8.000 rechtstreeks van B af. Dat verschil moet via de ratio naar de populatie worden vertaald.'
])
application('quotient-2', 'De absolute fout wordt groter bij grotere posten, maar het goedaandeel blijft steeds 90%. Juist dat relatieve patroon is van belang.', [
    '€ 10 geldt alleen voor de eerste post. De overige verschillen zijn € 20 en € 40, dus het euroverschil is niet constant.',
    '90/100, 180/200 en 360/400 zijn allemaal 0,90. De goedratio is dus steeds gelijk.',
    'Er is juist een volledig zichtbaar patroon: iedere werkelijke waarde is 90% van de bijbehorende boekwaarde.',
    '1,10 zou een werkelijke waarde boven de boekwaarde suggereren. Alle gegeven werkelijke waarden liggen juist 10% lager.'
])
application('quotient-3', 'De vraag vraagt de overwaardering in de boeken. Rond de berekening daarom af met B − Ŵ_Q, niet met alleen het geschatte werkelijke bedrag.', [
    '€ 480.000 is de geschatte werkelijke waarde qB. Het gevraagde foutbedrag is het verschil met B = € 500.000.',
    '€ 520.000 verhoogt B met 4%, terwijl een goedratio onder 1 juist een lagere werkelijke waarde geeft.',
    '€ 20.000 = (1 − 0,96) × € 500.000 is de geschatte totale overwaardering.',
    '0,04 is het foutaandeel zonder geldeenheid. Om een totaalbedrag te vinden moet je het met € 500.000 vermenigvuldigen.'
])
application('regressieschatter-1', 'Correlatie is dimensieloos. De verhouding s_w/s_b zet haar om in een helling met de schaal van w per eenheid b.', [
    '0,533 gebruikt ongeveer 0,8 × 20/30. Dat verwisselt s_w en s_b in de hellingsformule.',
    '1,2 = 0,8 × 30/20. De correlatie wordt vermenigvuldigd met de juiste verhouding van de standaardafwijkingen.',
    '0,8 is de correlatie zelf. De verschillende spreidingen 30 en 20 zijn nog niet verwerkt.',
    '24 = 0,8 × 30. De deling door s_b = 20 ontbreekt.'
])
application('regressieschatter-2', 'De steekproef onderschat hier het bekende boektotaal met € 5.000. De regressiehelling vertaalt dat verschil naar een correctie van € 4.000 op de werkelijke totaalschatting.', [
    '€ 90.000 is alleen Nw̄, dus de directe MPU-schatting. De bekende hulpinformatie vraagt nog een positieve correctie.',
    '€ 84.000 is 0,8 × B. De regressieschatter past b₁ niet op heel B toe, maar op B − Nb̄, naast Nw̄.',
    '€ 94.000 = 90.000 + 0,8 × (105.000 − 100.000). Dit gebruikt zowel MPU als de correctie op het geschatte boektotaal.',
    '€ 105.000 is het bekende boektotaal. Dat is hulpinformatie en is niet zonder meer gelijk aan het werkelijke totaal.'
])
application('regressieschatter-3', 'De resterende variantiefractie is 1 − R² = 0,64. Een standaardfout staat op wortelschaal, zodat de vermenigvuldigingsfactor 0,8 is.', [
    '4.000 gebruikt de factor 1 − 0,6 = 0,4. De formule vraagt √(1 − R²).',
    '6.000 gebruikt R zelf als factor. De standaardfoutcorrectie is niet de correlatie.',
    '6.400 gebruikt 1 − R² = 0,64, maar vergeet de wortel voor de standaardfout.',
    '8.000 = 10.000 × √(1 − 0,6²). De juiste standaardfoutfactor is 0,8.'
])
application('steekproefomvang-1', 'E staat voor de afstand van de schatting tot één grens. Een verkeerde E werkt in γ door via E² en verandert de berekende omvang sterk.', [
    '16.000 verdubbelt de totale breedte. E is juist de helft van de gegeven breedte.',
    '8.000 is 2E. Daarmee zou je een tweemaal zo ruime marge toestaan als gevraagd.',
    '4.000 is de halve breedte: 2 × 4.000 = 8.000.',
    '2.000 halveert de totale breedte tweemaal. De formule vraagt één halve breedte.'
])
application('steekproefomvang-2', 'De formule geeft de totale vereiste omvang. Naar boven afronden garandeert dat het gehele aantal niet onder de berekende 714,286 ligt.', [
    '285 is niet de benodigde n. N − 715 = 285 is het aantal populatieposten dat na de vereiste controle ongecontroleerd blijft.',
    '286 is ongeveer N − 714,286. Dat is het complement van de berekende omvang, niet de benodigde steekproef zelf.',
    '714 rondt 714,286 naar beneden af. Daarmee blijft de omvang onder het berekende minimum.',
    '715 is het kleinste gehele aantal boven 714,286 en voldoet daarmee aan de berekende minimumomvang.'
])
application('steekproefomvang-3', 'Doe de twee bewerkingen in de juiste volgorde: bepaal eerst de gehele totale behoefte en trek daarna de bestaande controles af.', [
    '44 zou een totaal van 124 geven. Dat ligt onder de berekende vereiste 124,01.',
    '45 extra controles brengen de 80 bestaande controles op 125, het naar boven afgeronde vereiste totaal.',
    '124 is een naar beneden afgeronde totale omvang en beantwoordt bovendien niet hoeveel extra controles nodig zijn.',
    '125 is de juiste totale omvang. Voor het gevraagde extra aantal moet je de 80 eerdere controles er nog van aftrekken.'
])
application('stratificatie-1', 'Het volledig gecontroleerde topstratum is een extra bekend onderdeel van het populatietotaal. Het moet één keer naast de geschatte overige strata worden opgenomen.', [
    '7.000 trekt het topstratum van de € 8.000 af. Het bekende werkelijke topstratum maakt deel uit van de populatie en moet worden opgeteld.',
    '8.000 telt alleen de eerste twee strata op. De bekende € 1.000 van het topstratum ontbreekt.',
    '9.000 = 100 × 20 + 200 × 30 + 1.000. Elk stratum is met zijn eigen omvang verwerkt.',
    '15.000 is bijvoorbeeld (100 + 200) × (20 + 30). Daarmee geef je elk stratum ook het gemiddelde van de andere groep, en ontbreekt een correcte weging.'
])
application('stratificatie-2', 'Neyman-allocatie verdeelt bij gelijke controlekosten op basis van Nᵢsᵢ. Het kleinere tweede stratum krijgt hier meer controles door zijn grotere spreiding.', [
    '54 en 36 volgt alleen de populatieverhouding 600:400. Dat is evenredige allocatie en negeert het verschil in spreiding.',
    '45 en 45 is een gelijke verdeling. De Neyman-gewichten zijn hier niet gelijk, maar 6.000 en 12.000.',
    '30 en 60 verdeelt 90 controles in de verhouding 6.000:12.000 = 1:2 en volgt de Neyman-formule.',
    '60 en 30 keert de gewichten om. Stratum 2 heeft het grootste product Nᵢsᵢ en moet daarom de meeste controles krijgen.'
])
application('stratificatie-3', 'Het gegeven totaal van € 20.000 bevat het topstratum al. Voeg dat niet opnieuw toe; combineer alleen de onzekerheid van de onafhankelijke schattingen.', [
    'De marge van 1.400 gebruikt 2 × (300 + 400). Je moet eerst de varianties optellen en dan de wortel nemen.',
    'De gecombineerde standaardfout is 500 en de marge 1.000. Het interval is daarom 20.000 ± 1.000.',
    'De marge van 500 is alleen de gecombineerde standaardfout. De kritieke factor t = 2 ontbreekt nog.',
    'De marge van 700 telt standaardfouten op en mist bovendien de toepassing van t op een correct gecombineerde standaardfout.'
])
application('regressielijn-1', 'Het positieve residu betekent dat de werkelijke y drie eenheden boven de voorspelde y ligt. De lijn voorspelt 17, maar de waarneming is 20.', [
    '−3 gebruikt ŷ − y = 17 − 20. Een regressieresidu is juist y − ŷ.',
    '3 = 20 − (5 + 3 × 4) is het verschil tussen de waarneming en de voorspelling.',
    '17 is de voorspelling ŷ. Voor het residu moet je die nog van y = 20 aftrekken.',
    '20 is de waargenomen y zelf. Een residu vergelijkt die waarde met de voorspelling.'
])
application('regressielijn-2', 'Beide modellen hebben een residusom van nul, maar model B maakt grotere afwijkingen. De kwadratensom legt dat verschil wel vast.', [
    'Model A heeft SSE = (−2)² + 2² = 8, tegen 18 voor model B. Daarmee heeft A de kleinste kwadratensom.',
    'Model B heeft een gewone residusom van nul, maar de SSE is 9 + 9 = 18. De kwadraten heffen elkaar niet op.',
    'Gelijke residusommen zeggen niet dat de totale fouten even groot zijn. OLS vergelijkt de som van kwadraten.',
    '6 is de som van de absolute afwijkingen van model B. OLS gebruikt hun kwadraten, waardoor SSE = 18 ontstaat.'
])
application('regressielijn-3', 'Een positieve samenhang is een beschrijving van de onderzochte gegevens. Voor individuele garanties of een oorzaak-gevolgconclusie is dat resultaat op zichzelf onvoldoende.', [
    '“Veroorzaakt altijd” gaat verder dan een statistisch verband. Correlatie toont op zichzelf geen causaliteit of vaste individuele verandering aan.',
    'Een positief gemiddeld patroon betekent niet dat elke oudere persoon meer verdient dan elke jongere persoon.',
    'Dit beperkt de conclusie tot de aangetoonde positieve samenhang binnen de onderzochte data.',
    'Een sterk enkelvoudig verband sluit de bijdrage van andere verklarende variabelen niet uit.'
])
application('anova-1', 'De drie kwadratensommen horen bij dezelfde verdeling van variatie. Controleer altijd dat verklaard plus onverklaard weer het totaal oplevert.', [
    'SSE = 200 − 150 = 50 en R² = 150/200 = 0,75. Zowel de ontbrekende kwadratensom als de verklaarde fractie klopt.',
    '350 telt SSR en TotalSS op. SSE is het resterende deel van TotalSS; bovendien is 0,25 het onverklaarde aandeel.',
    'SSE = 50 klopt, maar 0,25 = SSE/TotalSS beschrijft onverklaarde variatie. R² is 0,75.',
    'R² = 0,75 klopt, maar SSE kan geen 150 zijn: SSR 150 plus SSE 150 zou TotalSS 300 geven.'
])
application('anova-2', 'Een F-verhouding gebruikt Mean Squares, dus variatie per vrijheid. De twee kwadratensommen hebben verschillende aantallen vrijheidsgraden.', [
    '90 is MSR = 180/2. Voor F moet je MSR nog delen door MSE = 2.',
    '5,29 is ongeveer SSR/SSE = 180/34. Daarbij worden de verschillende vrijheidsgraden niet verwerkt.',
    '45 = (180/2)/(34/17) is de verhouding van de juiste Mean Squares.',
    '2 is MSE = 34/17. De gevraagde F is MSR/MSE, niet MSE alleen.'
])
application('anova-3', 'R² is dimensieloos; √MSE heeft de eenheid van salaris. Ze beschrijven verschillende kanten van het model en mogen niet onderling worden verwisseld.', [
    '81% verklaarde variatie betekent niet dat 81% van de personen exact wordt voorspeld. Individuele residuen kunnen blijven bestaan.',
    'R² = 0,81 betekent 81% verklaarde variatie. √25 = 5 is de residuele standaardafwijking in de eenheid van salaris.',
    '0,81 is R² en niet automatisch de correlatie. Zelfs in enkelvoudige regressie is de grootte van r dan √0,81 = 0,90; het teken volgt uit de helling.',
    '25 is de residuele variantie MSE. De standaardafwijking is de wortel daarvan: 5.'
])
application('toetsen-1', 'De t-waarde drukt uit hoeveel geschatte standaardfouten B van de nulwaarde af ligt. Hier zijn dat drie standaardfouten.', [
    '12 = 6 × 2 vermenigvuldigt B met de standaardfout. De toetsingsgrootheid gebruikt de verhouding.',
    '0,333 is ongeveer 2/6, de omgekeerde verhouding. B min de nulwaarde hoort in de teller.',
    '3 = (6 − 0)/2 is de juiste t-waarde voor H₀: β = 0.',
    '4 = 6 − 2 trekt één standaardfout af. Dat is niet het standaardiseren van het verschil met de nulwaarde.'
])
application('toetsen-2', 'Omdat het waargenomen teken tegen de vooraf gekozen richting in gaat, is de rechtszijdige p hier 1 − 0,02/2 = 0,99. Dat levert geen bewijs voor β > 0.', [
    'Halveren naar 0,01 mag voor de gevraagde richting alleen als het teken met H₁ overeenkomt. De negatieve helling doet dat hier niet.',
    'Er is geen bewijs voor de gevraagde stijging. De eenzijdige p in die richting is 0,99 en dus groter dan 0,05.',
    'Geen bewijs voor een stijging is geen bewijs dat β exact nul is. De gevonden richting is zelfs negatief.',
    'Een kleine tweezijdige p geeft geen richting aan. Het teken van de coëfficiënt bepaalt welke richting door de data wordt ondersteund.'
])
application('toetsen-3', 'De F-toets stelt een gezamenlijke vraag over alle hellingen; individuele t-toetsen stellen ieder een andere vraag binnen hetzelfde meervoudige model.', [
    'Een significante globale F vereist niet dat alle drie de afzonderlijke t-toetsen significant zijn. De nulhypothesen verschillen.',
    'Dit is juist: F beoordeelt de gezamenlijke nulhypothese, terwijl individuele t-toetsen één coëfficiënt gegeven de andere voorspellers toetsen.',
    'De globale regressie-F is geen normaliteitstoets. Normaliteit wordt met de diagnostische uitvoer beoordeeld.',
    'Ook t-toetsen gebruiken H₀ en H₁. Hun afzonderlijke nulhypothesen verschillen van de gezamenlijke F-nulhypothese.'
])
application('diagnostiek-1', 'De breedte van de residuwolk beschrijft de foutspreiding. Een toenemende breedte wijst op een variantie die met het voorspelde niveau verandert.', [
    'Multicollineariteit betreft onderlinge overlap tussen verklarende variabelen. Een trechter in residuen is een signaal over foutvariantie.',
    'Heteroscedasticiteit betekent niet-constante foutvariantie. De steeds bredere wolk is precies zo’n signaal.',
    'Een residuplot bewijst geen causaal verband. Het beschreven patroon betreft een modelaanname.',
    'Bij een exact passend model zouden de residuen nul zijn. Een brede en veranderende wolk laat juist afwijkingen en veranderende spreiding zien.'
])
application('diagnostiek-2', 'De toets levert onvoldoende tegenbewijs tegen normaliteit op. Dat is een beperkte toetsconclusie en geen garantie dat alle modelaannames kloppen.', [
    'H₀ niet verwerpen is niet hetzelfde als normaliteit bewijzen. De toets vond onvoldoende tegenbewijs bij dit α.',
    '0,40 > 0,05, dus H₀ wordt niet verworpen. Deze formulering blijft bij wat de toets ondersteunt.',
    '0,40 is een p-waarde en geen R². Zij geeft niet het percentage verklaarde variatie aan.',
    'Een normaliteitstoets sluit niet alle individuele uitschieters uit. Uitbijterdiagnostiek is een aparte beoordeling.'
])
application('diagnostiek-3', 'Invloed kan ook bij een inhoudelijk geldige waarneming voorkomen. Onderzoek daarom zowel datakwaliteit als het effect op de regressieschatting.', [
    'Automatisch verwijderen is niet gerechtvaardigd door alleen een grote Cook’s Distance. Eerst moet de waarneming inhoudelijk worden onderzocht.',
    'Dit gebruikt Cook’s Distance als onderzoekssignaal: controleer de data en beoordeel hoe sterk het punt de regressie beïnvloedt.',
    'Vervangen door het gemiddelde verandert de waarneming zonder inhoudelijke onderbouwing en kan het model vertekenen.',
    'Cook’s Distance meet invloed, geen normaliteit. Voor normaliteit is andere diagnostische uitvoer nodig.'
])
application('voorspellen-1', 'Extrapolatie gebruikt de geschatte lijn buiten het onderzochte gebied. De berekening is mogelijk, maar de geldigheid van hetzelfde verband is daar niet door de gegevens onderbouwd.', [
    'Interpolatie betreft een x₀ binnen het onderzochte bereik. 80 ligt niet tussen 20 en 60.',
    'Extrapolatie is voorspellen buiten het waargenomen x-bereik; 80 is hoger dan de waargenomen maximumleeftijd 60.',
    'Stratificatie verdeelt een populatie in groepen. De beschreven stap is een voorspelling buiten het waargenomen bereik.',
    'Buiten het gegevensbereik bestaat geen garantie dat het geschatte verband hetzelfde blijft of de voorspelling nauwkeurig is.'
])
application('voorspellen-2', 'Zelfs bij x₀ = x̄ blijft individuele storing bestaan. Daarom verdwijnt alleen de afstandsterm, niet de extra 1 voor een nieuwe waarneming.', [
    'De marge 2 volgt uit 2 × 5/√25. Dat is hier het interval voor de gemiddelde respons en mist de nieuwe individuele storing.',
    'De marge 10 gebruikt 2 × 5, maar laat de factor √1,04 weg. Met de gegeven formule is de marge ongeveer 10,20.',
    '50 ± 2 × 5 × √1,04 geeft ongeveer [39,80; 60,20], met zowel individuele storing als schattingsonzekerheid.',
    'De marge 5 is alleen s_e. De kritieke factor t en de extra onzekerheidsfactor zijn niet verwerkt.'
])
application('voorspellen-3', 'Bij gelijkblijvende modelgegevens vergroot verder van x̄ voorspellen de standaardfout. De gekozen betrouwbaarheid verandert daarmee niet vanzelf.', [
    'Verder van x̄ wordt de gekwadrateerde afstand juist groter. Dat vergroot de intervalmarge.',
    'Het interval wordt breder doordat (x₀ − x̄)² toeneemt en de standaardfout van de voorspelling vergroot.',
    'De intervalbreedte hangt in de gegeven formule af van x₀. Alleen dezelfde overige modelgegevens houden de breedte niet constant.',
    'Betrouwbaarheid is een gekozen niveau. Verder van het centrum voorspellen maakt die niet automatisch 100%.'
])
application('meervoudig-1', 'De dummy D is voor groep B gelijk aan 1. Het groepseffect van 200 komt daardoor boven op de constante en de bijdrage van x.', [
    '1.200 verwerkt 1.000 + 50 × 4, maar laat de groepsdummy 200 × 1 weg.',
    '1.250 volgt niet uit het invullen van x = 4 en D = 1. De twee bijdragen zijn 200 en 200, naast de constante 1.000.',
    '1.400 = 1.000 + 50 × 4 + 200 × 1. Alle termen zijn op de juiste manier ingevuld.',
    '5.200 volgt niet uit de gegeven vergelijking. De constante telt één keer mee: 1.000 + 50 × 4 + 200 × 1 = 1.400.'
])
application('meervoudig-2', 'De dummycoëfficiënt van 200 is het groepsverschil bij gelijke x. Deze personen hebben verschillende x, dus het verschil in x moet ook worden meegenomen.', [
    '200 is alleen het dummy-effect. Persoon B heeft daarnaast twee eenheden minder x, wat 100 van dit voordeel afhaalt.',
    '100 = 200 + 50 × (4 − 6). Het positieve groepseffect en negatieve verschil in x zijn beide verwerkt.',
    '300 telt het verschil in x met het verkeerde teken op. B heeft minder x en krijgt daarvoor juist 100 minder voorspelde y.',
    '−100 is het verschil A − B. Gevraagd is hoeveel hoger B is, dus B − A = +100.'
])
application('meervoudig-3', 'Bij gelijke waarnemingen en uitkomstmaat is de daling van adjusted R² een aanwijzing dat de winst in verklaarde variatie de extra modelomvang volgens deze maat niet compenseert.', [
    'De gewone R² stijgt makkelijk bij extra voorspellers. Alleen die stijging bewijst niet dat de extra complexiteit nuttig is.',
    'Adjusted R² daalt van 0,68 naar 0,67. Volgens deze voor modelomvang gecorrigeerde maat verbetert model B dus niet.',
    'Geen van deze fitmaten bewijst causaliteit. Model A kan met deze cijfers niet als zeker causaal worden aangeduid.',
    'Deze combinatie is mogelijk: gewone R² kan stijgen terwijl de voor extra voorspellers gecorrigeerde R² daalt.'
])
application('transformaties-1', 'Het model heeft y zelf aan de linkerkant en alleen ln(x) aan de rechterkant. De berekende 12 staat dus al op de oorspronkelijke schaal van y.', [
    '10 laat de bijdrage 2 × ln(e) weg. Omdat ln(e) = 1, komt er 2 bij de constante.',
    '12 = 10 + 2 × 1. Er is geen terugtransformatie van y nodig.',
    'exp(12) zou passend zijn als ln(ŷ) = 12 was berekend. Hier is uitsluitend x gelogaritmeerd.',
    '2 is alleen de bijdrage 2 × ln(e). De constante 10 ontbreekt.'
])
application('transformaties-2', 'Keer de logaritme om nadat de hele lineaire voorspelling is berekend. exp op een som betekent een product van exponentiële factoren, geen som daarvan.', [
    '2 is de voorspelling ln(ŷ). De vraag vraagt de teruggetransformeerde waarde op de oorspronkelijke schaal.',
    'ln(2) logaritmeert opnieuw en keert de bewerking niet om. De inverse van ln is exp.',
    'exp(2) ≈ 7,389 volgt uit ln(ŷ) = 1 + 0,5 × 2 = 2.',
    'exp(1 + 1) = exp(1) × exp(1), niet exp(1) + exp(1). De twee getransformeerde bijdragen mogen niet worden opgeteld.'
])
application('transformaties-3', 'De voorfactor 3 komt voor in zowel de oude als de nieuwe voorspelling en valt bij de verhouding weg. De exponent 2 bepaalt de factor 2².', [
    '2 zou bij een lineair evenredig verband passen. Hier wordt de verdubbeling door de exponent gekwadrateerd.',
    '3 is de vaste voorfactor van het model. Zij bepaalt niet de verhouding na verdubbelen van x.',
    '4 = (2x)²/x². De exponent 2 maakt van de verdubbeling van x een verviervoudiging van de voorspelling.',
    '6 vermenigvuldigt de verdubbeling met de voorfactor 3. Die voorfactor is al in zowel de oude als de nieuwe waarde aanwezig en valt weg in de verhouding.'
])
application('modelbouw-1', 'Tolerance en VIF meten hetzelfde overlapprobleem vanuit tegengestelde richting. Vergelijk pas na de omzetting de VIF met de genoemde cursusgrens.', [
    '0,92 is 1 − 0,08, niet 1/0,08. De berekende VIF is 12,5 en ligt wel boven de grens.',
    'VIF = 1/0,08 = 12,5 en 12,5 > 10. Dat levert volgens de genoemde cursusgrens een probleemsignaal op.',
    '8 volgt niet uit de omgekeerde van 0,08. Bovendien zou 8 niet boven de aangegeven grens VIF > 10 liggen.',
    '0,08 is tolerance zelf. VIF is het omgekeerde en bedraagt 12,5.'
])
application('modelbouw-2', 'De extra verklaarde kwadratensom is 50 voor één toegevoegde variabele. Je vergelijkt deze bijdrage per extra vrijheid met MSE van het uitgebreide model.', [
    'F = ((850 − 800)/1)/10 = 5. Omdat 5 groter is dan de kritieke 4, is de extra bijdrage significant.',
    '50 is alleen de extra SSR. De deling door MSE ontbreekt, en de conclusie niet significant volgt niet uit de juiste F = 5.',
    '0,2 is de omgekeerde verhouding 10/50. De extra verklaarde variatie hoort in de teller.',
    'Normaliteit volgt niet uit R². De gegeven cijfers zijn bedoeld om de extra bijdrage van de toegevoegde voorspeller te toetsen.'
])
application('modelbouw-3', 'Na verwijdering wordt ieder overgebleven effect opnieuw geschat in de context van de resterende voorspellers. Dat kan de rangorde van p-waarden veranderen.', [
    'De oude p-waarden horen bij het eerdere model. Zij kunnen veranderen wanneer een voorspeller wordt verwijderd.',
    'Dit is de juiste volgende stap: schat het gewijzigde model en gebruik zijn nieuwe uitvoer voor de volgende beslissing.',
    'Correlatie alleen is geen reden om alle betreffende variabelen te verwijderen. De selectie beoordeelt hun bijdrage binnen het model.',
    'Een grote B kan door de meeteenheid ontstaan. De grootte van B op zichzelf is geen geldig verwijdercriterium.'
])
application('validatie-1', 'MSPR gebruikt het aantal testwaarnemingen in de noemer. De aftrek voor geschatte coëfficiënten hoort bij de trainings-MSE en wordt hier niet gebruikt.', [
    '2 is niet het gemiddelde van de kwadraten 4, 1 en 9. MSPR vraagt eerst kwadrateren en daarna middelen.',
    '14 is de som van de gekwadrateerde voorspelfouten. Delen door de drie testwaarnemingen ontbreekt.',
    '14/3 ≈ 4,67 is het gemiddelde van 4, 1 en 9 en dus de juiste MSPR.',
    '7 deelt de som 14 door twee. De testset bevat drie waarnemingen en vraagt hier geen noemer n − 1.'
])
application('validatie-2', 'Het verschil is een signaal over generalisatie: hoe goed het model op ongebruikte gegevens werkt. Het wijst niet zonder meer één oorzaak aan.', [
    'MSPR = 25 ligt duidelijk boven trainings-MSE = 4. Het model presteert op de ongebruikte testgegevens slechter dan op de training.',
    'Een grotere voorspelfout bewijst geen fraude. Onderzoek modelkeuze, gegevens en toepassingsgebied voordat je oorzaken benoemt.',
    'Uit deze twee foutmaten volgt niet dat R² negatief moet zijn. R² is een andere maat en is hier niet gegeven.',
    'MSPR is al een gemiddelde kwadratische voorspelfout. Delen door de trainings-MSE kan een verhouding geven, maar is geen vereiste om MSPR geldig te maken.'
])
application('validatie-3', 'Een onafhankelijke eindcontrole verlangt gegevens die de modelkeuze niet hebben gestuurd. Herhaald selecteren op dezelfde uitkomsten maakt de beoordeling onderdeel van de modelbouw.', [
    'De naam testset garandeert geen onafhankelijkheid. Het feitelijke gebruik voor de modelkeuze is doorslaggevend.',
    'De selectie van het model is afgestemd op deze set. Daardoor is de prestatie op diezelfde gegevens geen onafhankelijke eindcontrole meer.',
    'Het wel of niet opnemen van een intercept herstelt de onafhankelijkheid van de modelselectie niet.',
    'Zelfs een MSPR van nul verandert niets aan het feit dat de set voor selectie is gebruikt. Foutgrootte en onafhankelijkheid zijn verschillende zaken.'
])
application('tentamen-1', 'Een volledige conclusie noemt waarover de normaliteitstoets gaat: de residuen. Verbind de gekozen toets, p-waarde en α expliciet aan die aanname.', [
    'Alleen “nee” laat niet zien welke aanname, uitvoer of beslisregel is gebruikt en voldoet niet aan “motiveer”.',
    'R² beschrijft verklaarde variatie. Het is geen maat waarmee je normaliteit van residuen beoordeelt.',
    'Dit antwoord noemt de juiste toetsinformatie en maakt de conclusie over de residuen controleerbaar.',
    'Een steekproefomvang berekenen beantwoordt niet de gevraagde beoordeling van normaliteit aan de hand van de uitvoer.'
])
application('tentamen-2', 'Vermeld zowel het extra aantal als het totaal wanneer dat de uitkomst verduidelijkt. Dan is zichtbaar dat de eerdere controles niet dubbel zijn geteld.', [
    '521 is de totale benodigde omvang. Het zegt niet hoeveel controles boven op de bestaande 180 nodig zijn.',
    '341 extra plus 180 al uitgevoerd is samen 521. Dit beantwoordt de gevraagde uitbreiding en controleert het totaal.',
    '180 is het aantal al uitgevoerde controles. Dat is niet het verschil tussen de totale behoefte en het bestaande aantal.',
    '701 telt 180 op bij de totale behoefte 521. Daarmee tel je de bestaande controles dubbel.'
])
application('tentamen-3', 'Statistische afwijking en inhoudelijke oorzaak moeten afzonderlijk worden beoordeeld. Het interval is een hulpmiddel om een waarneming te onderzoeken.', [
    'Een waarde buiten een interval kan opvallend zijn, maar het interval bevat geen bewijs over intentie of oorzaak.',
    'Een waarde binnen het interval sluit fraude niet uit. Het interval beoordeelt modelmatige plausibiliteit, niet de herkomst van de waarneming.',
    'Dit onderscheidt het statistische signaal van een inhoudelijke oorzaak. Onderzoek is mogelijk passend, maar fraude volgt niet automatisch.',
    'Een opvallende realisatie vervangen zonder onderbouwing verandert de gegevens. Eerst moet de oorzaak en juistheid worden onderzocht.'
])


def enrich_basic(lessons):
    expected = {q['id'] for lesson in lessons for q in lesson['questions']}
    if set(BASIC) != expected:
        raise ValueError(f'Begripcheck-uitleg ontbreekt of is verouderd: {set(BASIC) ^ expected}')
    for lesson in lessons:
        for question in lesson['questions']:
            detail = BASIC[question['id']]
            question.update({key: list(value) if isinstance(value, list) else value
                             for key, value in detail.items()})
            question['explanation'] = ' '.join(question['steps'])
            question['refs'] = [dict(ref) for ref in lesson['refs']]
            apply_pattern(question)
            validate_question(question)


def enrich_application(question, lesson_id, number, refs):
    detail = APPLICATION[f'{lesson_id}-{number}']
    question['steps'] = [*question['steps'], detail['insight']]
    question['explanation'] = ' '.join(question['steps'])
    question['optionExplanations'] = list(detail['optionExplanations'])
    question['refs'] = [dict(ref) for ref in refs]
    apply_pattern(question)
    validate_question(question)
    return question


def validate_question(question):
    if len(question['optionExplanations']) != len(question['options']):
        raise ValueError(f"Aantal optietoelichtingen wijkt af: {question['id']}")
    if len(question['steps']) < 2 or not question['pattern'] or not question['trap']:
        raise ValueError(f"Onvolledige stapsgewijze uitleg: {question['id']}")
    if not all(isinstance(value, str) and value.strip() for value in question['optionExplanations']):
        raise ValueError(f"Lege optietoelichting: {question['id']}")
    if not question['refs']:
        raise ValueError(f"Bronverwijzing ontbreekt: {question['id']}")
