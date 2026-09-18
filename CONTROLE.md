# Oplevercontrole

Gecontroleerd op 18 september 2026.

- 19 lessen en 57 begripchecks; unieke identifiers, geldige antwoordindices en bronverwijzingen.
- 10 interactieve rekenbladen en 6 routes naar aangeleverde tentamens.
- Alle 19 lesroutes geopend in de browser, ieder met 3 checks en zonder fout in de standaardinvoer van de rekenbladen.
- Alle hoofdpagina's geopend, ook in de zelfstandige HTML-versie.
- Berekeningen voor de verschilschatter en stratificatie van maart 2025 en de regressieschatter, ANOVA en voorspelling van oktober 2024 nagerekend. Rekenverschillen door tussentijdse afronding zijn in de uitleg benoemd.
- Validatie van invoer: onder andere lege of ongeldige getallen, n > N, ongeldige vrijheidsgraden en ongedefinieerde rekenmachine-uitkomsten.
- Begripcheck en stapsgewijs voorbeeld bediend; antwoorden blijven na herladen bewaard.
- Eigen tentamenaantekening ingevoerd en na herladen teruggevonden. Testgegevens daarna via de bevestigingsdialoog gewist.
- Mobiele lesnavigatie, Neyman-allocatie, eenzijdige p-waarde, begrippenzoeker en rekenmachine bediend.
- Visuele controle op standaard desktopformaat en 390 pixels breed. Op 320 pixels geen horizontale pagina-overloop bij de onderzochte les- en hoofdpagina's. Brede tabellen en de bovenste navigatie kunnen binnen hun eigen gebied horizontaal scrollen.
- De definitieve zelfstandige versie geeft geen browserconsolefouten in de gecontroleerde routes.
- Een echte iPhone-bestandsvoorvertoning is niet getest. Daarvoor is de zelfstandige leesversie zonder scripts meegeleverd.

De oorspronkelijke bronbestanden zijn niet gewijzigd. De website is lokaal beschikbaar; er is geen publieke SRA-repository of hosting aangemaakt.

## Aanvullende controle van de presentatie

- 24 formuleblokken en de formulecellen in de ANOVA- en transformatietabellen zijn gezet als 60 MathML-vergelijkingen. De build controleert de XML-structuur en de volledige koppeling met de bestaande formuleblokken.
- Rekentabellen voor spreiding, MPU, intervallen, residuen en ANOVA hebben benoemde kolommen, rijlabels, vaste decimalen en waar van toepassing een totaalrij.
- De regressie- en intervalgrafieken passen zich aan de breedte aan, met leesbare labels en waarden in een bijbehorende tabel. De ANOVA-balk toont verklaarde en residuele variatie als aandelen van 100%.
- De OLS-knop gebruikt de ongeronde coëfficiënten. In de browser geven de gekozen lijn en het optimum dezelfde SSE: 11,12. Bij n = N valt het interval zichtbaar samen tot één punt.
- Alle 19 routes van de vernieuwde zelfstandige HTML zijn op 320 pixels gecontroleerd: geen horizontale pagina-overloop of rekenbladfouten. Desktop en 390 pixels zijn visueel bekeken.
- Gewijzigde ANOVA-invoer met SSR = SSE geeft R² = 50% en F = 28 bij n = 30 en k = 1. De bestaande statistische controles slagen.
- De leesversie zonder scripts toont alle 60 vergelijkingen, ook op mobiel zonder pagina-overloop. Geen browserconsolefouten in de gecontroleerde interactieve routes.

## CAFA2-layout overnemen

- CAFA2 live opgehaald op commit 382add0fb67ed503438876e40dbba46497e02c02; bovenbalk, dashboard, resultaatrijen en uitwerkingspanelen vergeleken met de lokale referentie.
- Frameworkvrij layoutpakket 1.0.0 met bronvermelding, gemeenschappelijke CSS-variabelen en componentklassen. Distributiecontrole via SHA-256. Tests voor ontbrekende, gewijzigde en ongeldige bronbestanden en check zonder schrijven geslaagd.
- Dashboardfilter, navigatie, conditionele resetknop voor tekstgrootte, begripcheck en uitklapbare resultaten in de browser bediend.
- Eigen uitwerking ingevoerd op een aparte testorigin, na herladen teruggevonden. Paneelbreedte met toetsenbord gewijzigd van 58 naar 60 procent. De bestaande opslagstructuur en identifiers blijven behouden.
- Geen CAFA2-bestanden op GitHub gewijzigd. Er is nog geen centrale repository of automatische koppeling tussen de twee vakken aangemaakt.
- Alle 30 hoofd-, les- en tentamenroutes van de vernieuwde zelfstandige HTML gecontroleerd op 320 pixels: geen horizontale pagina-overloop en geen rekenbladfouten.
- Het compacte vragenoverzicht toont de opgeslagen antwoordstatus. Navigatie van vraag 4 naar rekenen-1 en vraag 18 naar stratificatie-3 verplaatst ook de toetsenbordfocus. De huidige vraag wordt gemarkeerd. Escape sluit het venster en brengt de focus terug naar Vragenoverzicht.
- Vragenoverzicht met 18 checks op 320 pixels: dialoog 288 pixels breed, intern scrollbaar zonder horizontale overloop. Geen browserconsolefouten. Tijdelijke browserformaatinstelling hersteld.

## Hoofdpagina, oefenomgeving en alle interactieve onderwerpen

- Hoofdpagina met precies drie ingangen: Leren, Oefenvragen maken en Tentamens oefenen. De onderwerpenlijst wordt uitsluitend bij lessen opgebouwd; de huidige les wordt zichtbaar gemaakt binnen die lijst.
- Alle 19 lessen hebben een gekoppelde interactieve tool. Alle 19 lesroutes op 320 pixels bezocht: geen lege labs, rekenfouten, NaN/Infinity-uitvoer of horizontale pagina-overloop.
- Alle 57 vragen in de zelfstandige oefenomgeving op 320 pixels bezocht: steeds precies één vraag, zonder leszijbalk en zonder horizontale pagina-overloop. Het overzicht bevat 57 links en blijft 288 pixels breed.
- Bestaand lesantwoord en tentamennotitie op een aparte testorigin bewaard vóór de wijziging en na herladen teruggevonden. Een eerst fout en daarna goed beantwoordde oefenvraag behoudt de eerste fout; de laatste poging verschijnt ook correct in de les.
- Hoofdroutes, resultaten, naslag en alle zes tentamencasussen op mobiel gecontroleerd. Het dashboard heeft de zes kolommen uit CAFA2 en verbergt de secundaire navigatie; filter Met uitwerking toont de bewaarde route.
- Mobiele leerroute openen bij les 17 maakt de actieve les zichtbaar. Escape sluit het menu. Ongeldige oefenscopes en ongeldige URL-encoding vallen veilig terug.
- De OLS-knop geeft opnieuw SSE = 11,12, gelijk aan het optimum. Bij x₀ = 300 toont het voorspellingslab een individuele marge 2,8523 en een gemiddelde-responsmarge 1,2365. De banden zijn op desktop visueel gecontroleerd.
- Diagnostiek: maximale trechtersterkte blijft binnen de grafiek; normaliteitsplot/histogram, y-uitbijter, afstanden en Durbin-Watson geven geen ongeldige uitvoer. Hulp-R² = 0,9 geeft VIF = 10 en wordt niet als grensoverschrijding gemeld.
- Nieuwe rekentests controleren cursusplanningsformule, afronding, geneste modellen, voorspellingsbanden, VIF en MSPR. De gewone tests vereisen geen lokale bron-PDF's; de afzonderlijke broncontrole controleert aanwezigheid en PDF-headers.
- Een tijdelijke clone zonder bronnen is gebouwd en getest. De bronloze ZIP bevat ook geen oude PDF's; de complete lokale ZIP blijft apart bestaan. Geen browserconsolefouten in de gecontroleerde nieuwe routes.

## Begrippen, kennisstart, formulepagina's en terugnavigatie

- 189 begrippen met 530 expliciete aliases. Elke canonical term en alias is getest op volledige herkenning naar de juiste definitie, met bron- en lesdekking voor alle 19 lessen. Beta en SE zijn hoofdlettergevoelig; gewone losse formuleletters blijven intact.
- Elke les heeft verwachte voorkennis en leerdoelen. SET is benoemd als basis; er is geen SET-map geraadpleegd. 19 aparte formulepagina's bevatten 25 uitlegblokken en 67 geldige native MathML-formules. De bronverwijzingen blijven bij het onderwerp staan.
- Alle 19 formulepagina's op 360 pixels en alle 19 lessen op 320 pixels gecontroleerd: geen horizontale pagina-overloop, geen ongeldige rekenuitvoer of consolefouten. Bestaande MathML- en SVG-inhoud bevat geen automatisch ingevoegde termknoppen; geen dubbel geneste termknoppen.
- Compact begrippenvenster op desktop en mobiel bekeken. Geen lesnavigatie in het venster. Escape sluit en herstelt focus. Termen in een antwoordlabel veranderen de radiokeuze niet; termen in een samenvattingsregel veranderen de uitklapstatus niet. Termen blijven aanwezig na wijzigingen in de regressietool.
- Terug herstelt een gefilterde begrippenlijst en de leespositie onderaan een les. Terug en vooruit bij dezelfde tentamencasus behouden de nieuwste opgeslagen uitwerking, ook bij meerdere eerdere bezoeken.
- tests/navigation.cjs controleert daarnaast afzonderlijke history-entries, leesstappen, tijdelijke invoer, radiokeuzes met correcte feedback, focus en leespositie. Alle reken-, bron-, catalogus- en navigatietests slagen.
- Alle gemaakte appbestanden en werkbestanden staan binnen sra-interactief, herkenbaar door 00 - GEMAAKT MET CODEX.md. De ZIP's staan in output; eerdere downloads en tijdelijke referentiecheckouts staan in tmp. Oorspronkelijke cursusbestanden buiten deze map zijn ongewijzigd.

## Terugknop bij het kruimelpad

- De terugknop staat voor Home in het kruimelpad van de inhoud, op dezelfde plek als de aangewezen regel Home / Tentamens oefenen.
- Dezelfde knop en historie blijven behouden bij paginaovergangen. Geen dubbele knop in de bovenbalk. Op de eerste bezochte apppagina is de knop verborgen omdat daar nog geen vorige apppagina is.
- Desktop en 320 pixels gecontroleerd: leesbare tekst Terug, geen pagina-overloop, correct terug naar Home en geen consolefouten. De bestaande tests voor leespositie, invoer en notities slagen.
