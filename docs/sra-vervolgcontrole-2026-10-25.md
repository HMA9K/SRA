# SRA: tentamenweging en college 8

Lokale vervolgcontrole van 25 oktober 2026. Basis: `58d5e90d1fa0af15dd2e6ec4adf3a4436887cb1a`, branch `codex/puntenanalyse-20261025`, met de nieuwe bestanden en wijzigingen van deze werkronde. De kandidaat is na de lokale controle op een afzonderlijke preview geplaatst; zie de aanvulling onderaan. De bestaande productieleeromgeving en meetgeschiedenis zijn niet gewijzigd.

## Punten en leerroute

De negen unieke tentamens sluiten aan op 196 vraagnummers, 221 oorspronkelijke deelvragen en 900 punten: 315 sampling en 585 regressie. Maart en juni 2020 tellen eenmaal. Hun volledige geëxtraheerde opgavetekst is gelijk na uitsluitend datum, datumvoetregel en witruimte te normaliseren. De PDF-bestanden zijn niet bytegelijk. Iedere oorspronkelijke puntentoekenning is daarnaast afzonderlijk gecontroleerd.

Het [puntenregister](tentamen-puntenanalyse-2026-10-25.md) geeft per onderwerp alle negen scores, aantallen tentamens/vragen/deelvragen, totaal, gemiddelde inclusief nullen, aandeel en spreiding. De drie recentste tentamens staan afzonderlijk. Er blijven 20 gezamenlijke punten staan waarvoor geen afzonderlijke verdeling uit de normering volgt. Bij geïntegreerde stratificatie worden de gebruikte schatters niet nogmaals van punten voorzien. De historische verdeling is geen voorspelling van een volgend tentamen.

Elke les heeft nu een route met passende oefendiepte. De bestaande uitleg, voorbeelden, formules, labs en vragen blijven beschikbaar. De gewone syllabus-MC's en tentamenpraktijk zijn inhoudelijk ongewijzigd; bestaande vraag-ID's en antwoordindices blijven gelijk. De enige gewijzigde bestaande uitlegsectie is de gerichte broncorrectie bij college 8. Nieuwe onderdelen hebben eigen bronlinks, zonder de bronlijst van bestaande oefenvragen achteraf te veranderen.

## Gerichte boekcontrole

Het onderwijsprogramma blijft leidend: sampling 35%, regressie 65%, H8–H10 met de genoemde uitzondering voor de inverse functie. Validatie blijft een actueel leerdoel, ook met nul afzonderlijke historische tentamenpunten. De vervolgcontrole vergeleek geselecteerde boekpassages en de benodigde rekenroute met de bestaande lessen; niet iedere boekalinea is opnieuw vergeleken. De eerdere [dekkingsmatrix](dekking-regressie-2026-09-25.md) blijft de bredere bronverantwoording.

| Tentamenroute | Gewicht /900 | Bron en inhoudelijke controle | Uitleg, toepassing en uitwerking |
|---|---:|---|---|
| Schatters en keuze | 155 | H8: MPU, verschil, quotiënt, regressieschatter; gegevenspatroon, schattingsdoel en onzekerheid onderscheiden | Vier bestaande volledige rekenroutes; nieuwe prioritering en expliciete scheiding van geïntegreerde stratificatiepunten |
| Steekproefomvang | 17 | H8.9: breedte naar marge, benodigde totale n en aanvullende controles | Bestaande rekenroute en open toepassing behouden; gerichte oefening aanbevolen |
| Stratificatie | 143 | Boekuitsnede H8c, PDF 2–12: grenzen, allocatie, werkelijke steekproefomvang, som van schattingen en varianties, volledig gecontroleerde top | Les stratificatie met voorbeelden, lab en uitwerkingen; uitgebreid oefenen, inclusief topstratum |
| Basis en correlatie | 41 | H9.1–9.3: model, OLS, residuen en betekenis van r; SET alleen als noodzakelijke voorkennis | Bestaande broncasus en begripsvragen; nieuwe route onderscheidt richting, sterkte en significantie |
| ANOVA en toetsen | 130 | H9.4–9.5, gerichte herlezing H9b PDF 4–10: SS/df/MS, t versus F, richting en rechtszijdige F | Volledige tabelreconstructie, p/kritieke-grensroute en onderbouwde casusconclusie blijven kern |
| Diagnostiek | 157 | H9.6 en actuele collegeregels: eigen modelresiduen, passende grens, signaal en vervolgactie | Bestaande zeven diagnoses plus vijf complete herberekeningen van college 8 |
| Voorspellen en interval | 61 | H9.7 en meervoudige voorspelling: juiste modelschaal, extrapolatie, individuele onzekerheid | Bestaande voorbeelden en labs behouden; ongeschikte modellen leveren geen aanvaarde controlegrens |
| Coëfficiënten | 16 | H10.1: conditionele betekenis en referentiegroep | Bestaande uitleg en nieuwe dieselinterpretatie met open uitwerking |
| Transformaties | 30 | H10.2 en SPSS PDF 44: log(x), log(y), terugtransformatie en uitgesloten inverse functie | Bestaande volledige routes; nieuw onderscheid tussen LnKmStand en exponentieel y-model |
| Modelvergelijking, VIF en selectie | 130 | H10.3–10.4, gerichte herlezing H10b PDF 3–10: één verwijdering per stap, opnieuw schatten, selectiecriterium en diagnoses herhalen | Bestaande selectiecassus en labs; nieuwe groepsvergelijking en kritiek op selectie bij p boven 0,05 |
| Validatie | 0 | Actueel programma en attentiepunten PDF 8–9: onafhankelijke testgegevens en MSPR | Compacte kern en volledige bestaande toepassing behouden; geen verzonnen onafhankelijke testset voor college 8 |
| Gezamenlijke rubricpunten | 20 | Meerdere gevraagde onderdelen zonder verdedigbare afzonderlijke normering | Zichtbaar in tentamenles en detailregister; eenmaal geteld |

De rijtotalen zijn 900. Basisvaardigheden zoals gemiddelde, spreiding, standaardfout en tabelaflezen blijven noodzakelijke verbindingen; zij krijgen geen extra punten boven de oorspronkelijke vraagpunten. SPSS-menuklikken en tijdreeksuitvoering zijn niet uitgebreid zonder noodzaak vanuit deze routes.

## College 8 uit werkelijke gegevens

Bron: `SRA SPSS data.xlsx`, blad `College8`, bereik `A1:Q163`. Er zijn 162 complete auto-observaties: 81 benzine, 41 diesel en 40 elektrisch. Er zijn geen verkoopwaarden van nul. Het bronbestand is uitsluitend gelezen; zijn SHA-256 is vóór en na de analyse gelijk en staat in `data/college8-analysis.json`.

Vijf modellen zijn opnieuw berekend met de variabelen uit de gepubliceerde eindtabellen: enkelvoudig bouwjaar, gezamenlijk, benzine, diesel en elektrisch. De gepubliceerde coëfficiënten uit SPSS PDF 45–47 sluiten aan binnen hun afronding op drie decimalen. Een tweede oplossing via gecentreerde normale vergelijkingen controleert de regressiecoëfficiënten; residu-, variantie- en Cook-relaties zijn afzonderlijk gecontroleerd.

| Model | n | k | Adjusted R² | sₑ (€) | Normaliteit p |
|---|---:|---:|---:|---:|---:|
| Enkelvoudig | 162 | 1 | 0,615 | 5.408,22 | 0,233 |
| Gezamenlijk | 162 | 7 | 0,868 | 3.166,09 | 0,005 |
| Benzine | 81 | 9 | 0,919 | 2.367,14 | 0,220 |
| Diesel | 41 | 5 | 0,817 | 2.332,58 | 0,075 |
| Elektrisch | 40 | 5 | 0,808 | 4.014,79 | 0,609 |

De les geeft per model alle B's, SE's, t's, p's, VIF's, eigen grafieken, z-residuen, Mahalanobis- en Cook-grenzen en betrokken autonummers. Heteroscedasticiteit wordt gecontroleerd met ABSRES tegen iedere opgenomen x, volgens de cursus. Dit zijn verkennende afzonderlijke toetsen. De vijf modellen hebben daarbij signalen van ongelijke residuspreiding. De drie groepsmodellen voldoen niet aan de cursusvuistregel n ≥ 10k. Er is geen automatische verwijdering van observaties of goedkeuring voor onafhankelijke voorspellingen.

Broncorrecties en grenzen:

Iedere modeluitwerking bevat ook de volledige ANOVA-tabel (SS, df, MS, F en p) en de verbinding met R² en de residuele standaardafwijking. De globale significantie wordt uitdrukkelijk onderscheiden van modelgeschiktheid.

- De tekst noemt 163 auto's, maar het oorspronkelijke blad bevat 162 observaties.
- Bij het enkelvoudige model is 0,059 de KS-Statistic, niet de p-waarde. De oorspronkelijke tabel heeft Sig. 0,200*. De eigen Lilliefors-benadering geeft circa 0,233; dat verschil is verklaarbaar door de afkapping en benadering. De conclusie bij 0,05 verandert niet.
- De bron noemt een exponentieel verband en maakt vervolgens ln(Kilometerstand). Alleen x logaritmeren is een logaritmisch model; de gepubliceerde eindtabellen gebruiken ongetransformeerde kilometerstand.
- Het elektrische eindmodel houdt twee variabelen met p boven 0,05. Zonder vastgestelde selectie-instelling wordt dit niet beschreven als backward met verwijderingsgrens 0,05.
- Geen nieuwe SPSS-bediening, geen reconstructie van alle backwardtussenstappen, geen onafhankelijke testset en geen fysieke telefooncontrole. De herberekening bewijst uitsluitend de gerapporteerde modellen en diagnoses.

Reproductie: installeer desgewenst `requirements-analysis.txt` in een afzonderlijke lokale analyseomgeving en voer `python scripts/analyze_college8.py --source <bronmap>/SRA-SPSS-data.xlsx --figures` uit, met het werkelijke lokale bronbestand. De gewone websitebuild gebruikt de gecontroleerde JSON en heeft deze analysepakketten niet nodig.

## Bestaande metingen behouden

De huidige productie-HTML is alleen gelezen. Aangetroffen SRA-identiteiten:

| Onderdeel | Vastgesteld | Open afhankelijkheid |
|---|---|---|
| Productie | `https://sra-2xt.pages.dev/` | Deze nieuwe kandidaat is daar niet geplaatst |
| GoatCounter-site | `https://sra.goatcounter.com/`, teladres `/count` | Dashboard, interne site-ID, export en bestaande tellingen niet bereikbaar/vastgesteld |
| GoatCounter-script | `https://gc.zgo.at/count.js` | Lokale DNS antwoordt 0.0.0.0 en ::, net als bij de dashboardhost; browseropening geeft ERR_ADDRESS_INVALID |
| Aanvullend script | `https://leeromgeving-statistieken.pages.dev/collect.js?v=1` | Alleen aangetroffen scriptadres; leesverzoek geeft HTTP 403. Backendidentiteit, toegang en export onbekend |
| Lokale ontdubbeling | `study-measure-actions-v1-SRA` | Bestaande sleutel, meetpaden, filters en opslagcode ongewijzigd |

Er is geen dashboard aangemaakt, vervangen, hernoemd, gemigreerd of gereset. Geen gebruikersopslag gewist. Geen herkenbare proefmeting verstuurd, omdat de bestaande dashboardidentiteit en beschikbare export eerst moeten zijn vastgelegd. De ontvangst en aantallen zijn dus **niet bewezen**. Nodig voor de vervolgcontrole: bereikbare bestaande dienst, toegang tot dat dashboard en vastlegging van de bestaande export/telstand, gevolgd door één begrensde herkenbare proef en vergelijking. Een ontbrekende ontvangst mag niet worden verward met ontbrekende code.

## Controlebewijs en grenzen

- Geslaagd: lokale build, `npm test`, `test:points`, `test:learning`, broncontrole van puntmarkeringen en identieke 2020-opgavetekst, onafhankelijke berekeningen en bronbehoud.
- Geslaagd: `test:learning-browser` in Edge bij 1366/768/390/320 px, licht en donker. Alle 19 lessen, 41 toepassingen met casusmateriaal, toetsenbord/formulehulp, antwoordbehoud na herladen en de zelfstandige HTML/leesversie zijn gecontroleerd. De bestaande formuletoets opent nu expliciet de juiste sectie en wacht op de afgeronde scroll voordat de hulp wordt geopend.
- Geslaagd: `test:points-browser` op de definitieve inhoud, inclusief de toegevoegde ANOVA-tabellen, bij 1366/390/320 px en beide thema's. Alle 26 nieuwe secties zijn geopend, samen 156 controles. Tabellen zijn met pijltoetsen horizontaal bereikbaar, vijf figuren laden, open uitwerkingen werken en het puntenrapport geeft HTTP 200. Dit is lokaal Edge-browserbewijs, geen fysieke telefoontest.
- Geslaagd: vergelijking met de uitgangsversie op behoud van bestaande 19 les-ID's, vragen, voorbeelden, formules, labs en uitlegsecties, behalve de gedocumenteerde college-8-correctie. Nieuwe tekstbestanden zijn gecontroleerd op persoonsgegevens, gebruikerspaden en e-mailadressen; PNG-metadata bevat alleen software/resolutie.
- Niet uitgevoerd: fysieke telefoonbediening. Er is geen bedienbaar fysiek toestel vastgesteld.
- Niet uitgevoerd: dashboardontvangst en telvergelijking, om bovenstaande toegangsredenen.
- Niet uitgevoerd: CI-run, merge of productieacceptatie van deze kandidaat. De afzonderlijke preview staat hieronder verantwoord.
- Issue #5 is gesloten als achterhaald; een losse overdrachtstest is geen open taak. Dit is geen claim van een uitgevoerde overdrachtsproef.

Vingerafdrukken van de lokaal geteste inhoud (SHA-256):

| Bestand | SHA-256 |
|---|---|
| `data/course.js` | `502ddc3408500d5bff9756402bd0bef7e23b9aeaf892b76d45c02fa51351b644` |
| `data/college8-analysis.json` | `195102bf746bb22da3f7e93d50a9da6c1a2a2ef67c8e8338e272fc3e7c1e65c8` |
| `data/exam-point-analysis.json` | `f9e62dc4b33010ff459dd4d77aabf108734de2c5cdc51c4f594c814f9a795d05` |

Vervolg: de kandidaat kan via de onderstaande preview worden beoordeeld. Voor dashboardontvangst is toegang tot de bestaande dienst de afhankelijkheid; voor telefoonbewijs een bedienbaar fysiek toestel. Productiepublicatie vraagt een afzonderlijke eindcontrole van actuele branch, privacybouwstap, preview en toestemming. Deze werkronde claimt daarvoor geen afgerond bewijs.

## Aanvulling: afzonderlijke mobiele preview

Op 25 oktober 2026 is de complete kandidaat via de bestaande Cloudflare Pages-route geplaatst op [preview 95622ad1](https://95622ad1.sra-2xt.pages.dev/#les/tentamen). Productie is niet vervangen. De deploy gebruikt previewbranch `codex-puntenanalyse-preview-20261025`, basiscommit `58d5e90` en expliciet de dirty-markering: de kandidaat bevat nog niet gecommitteerde wijzigingen. De bovenstaande inhoudshashes identificeren de geteste wijzigingen.

- `scripts/prepare_publication.py` geslaagd, inclusief de vastgezette controlesom van de bestaande privacybouwstap. Er zijn 1654 buildbestanden, inclusief oorspronkelijke bronnen en metadata-vrije readerkopieën.
- Broncontrole opnieuw geslaagd. Bestandsnamen, tekst en PDF-metadata gecontroleerd op persoonlijke gebruikersgegevens en lokale gebruikerspaden.
- Geen open pull request en geen andere actieve SRA-publicatie aangetroffen. De hoofdtak bleef `58d5e90`; het productieadres bleef deployment `0f1d0517`.
- Elf relevante previewbestanden vergeleken met de build: cursusdata, beide analyses, puntenrapport, meetadapter en vijf college-8-figuren identiek. De index is identiek na uitsluitend de bestaande Cloudflare Analytics-beacon weg te nemen; dezelfde beacon staat in productie. De productie-index bleef bytegelijk aan de eerdere momentopname.
- Previewtests geslaagd voor bronfilters, casus, eigen uitwerking, tabelinvoer, antwoordbehoud na herladen, export/import, reset, PDF-knoppen en beide PDF-lezers. Alle acht nieuwe secties in de tentamenles openen, vijf figuren laden en de ANOVA-tabellen zijn aanwezig. Geen pagina-overloop of scriptfouten bij desktop en mobiele emulatie.
- De browserproeven gebruikten afzonderlijke schone testcontexten; externe meetverzoeken waren daarin geblokkeerd. Dit bewijst geen fysieke iPhone-bediening of ontvangst van gebruiksmetingen.

Het puntenrapport en de proefwebsite zijn bereikbaar via HTTPS. Een HTML-bestandslink in de chat toont in de mobiele app broncode en was daarom geen bruikbare mobiele proeflink.

## Herstel lesmenu, 25 oktober 2026

Bij het inklappen van het lesmenu verdween de sidebar uit de gridindeling, terwijl twee kolommen bleven bestaan. De lesinhoud werd automatisch in de eerste kolom van nul pixels geplaatst. De reproductie op preview 95622ad1 mat daardoor een totale leesbreedte van slechts 48 pixels (de binnenmarges). Er was geen horizontale pagina-overloop, zodat de eerdere overloopcontrole dit defect niet vond. Ook de eerdere menutest controleerde wel zichtbaarheid, maar niet de resterende leesbreedte.

Het herstel is één CSS-regel in `css/learning-revision.css`: de ingeklapte desktopindeling krijgt één flexibele kolom. De geopende sidebar en mobiele overlay behouden hun bestaande gedrag. De complete herbouw wijzigt uitsluitend deze stylesheet, de index met versieverwijzing en de twee zelfstandige HTML-bestanden. Alle cursusdata, analyses, meetcode en bronbestanden zijn bytegelijk aan de eerdere proefversie.

De nieuwe test `npm run test:lesson-panel-browser` faalt aantoonbaar op de oude preview en slaagt lokaal bij 1482, 1024, 768, 761, 760, 390 en 320 pixels, licht en donker. Hij controleert leesbreedte bij inklappen, herladen, leswisselen, toetsenbordbediening, een menu van 420 pixels, wisselen tussen desktop/mobiel en de zelfstandige HTML. `npm test` en de vijf donkere-stijlcontroles slagen eveneens.

Het herstel staat op [preview 375001bb](https://375001bb.sra-2xt.pages.dev/#les/beginnen) en de [vaste previewlink](https://codex-puntenanalyse-preview.sra-2xt.pages.dev/#les/beginnen). De CSS-hash is `00e3795f494e37454ca0f5b02a8b02f0bd405915bd029c1e2db191744ba9a4d1`. Previewbestanden zijn tegen de build gecontroleerd, inclusief beide zelfstandige HTML-bestanden en cursusdata; alleen de bestaande hostingbeacon wordt bij HTML toegevoegd. De productie-index is ongewijzigd. De oude, vaste deploymentlink 95622ad1 blijft de oude proefversie tonen.

Op de geplaatste preview slagen dezelfde menucontroles op alle zeven breedtes en beide thema's. Ook `tests/parked-controls-browser.cjs` slaagt daar, inclusief muis/toetsenbord, bewaren van menubreedte, herladen en behoud van bestaande antwoorden bij de synthetische herstart-/resetproeven. De proeven draaien in schone browsercontexten en veranderen geen gebruikersopslag.

Daarna is de zichtbare knopnaam `Leerroute` verduidelijkt naar `Lesmenu`: de knop opent de lessenlijst en geen afzonderlijk studiepad. De algemene toegankelijke naam is eveneens aangepast; de dynamische namen `Lesmenu openen` en `Lesmenu inklappen` bestonden al. De buildvergelijking toont uitsluitend wijzigingen in de index en de zelfstandige interactieve HTML; bediening, stijlen, inhoud en opgeslagen voortgang zijn ongewijzigd.

De naamswijziging staat op preview `de34ef4c` en dezelfde vaste previewlink. Zichtbare naam, toegankelijke naam en openen/sluiten zijn daar gecontroleerd bij 1121 en 390 pixels.

## Leernavigatie en duidelijke ANOVA-oefening, 25 oktober 2026

De dashboardknop staat in SRA alleen bij oefen- en tentamenroutes. De leerstof, begrippen, formules en overige leesroutes tonen die knop niet meer. De gedeelde navigatie heeft daarvoor een SRA-specifieke voorwaarde; andere leeromgevingen zijn niet aangepast. De bestaande browsertest controleert zichtbaarheid op tien routes, desktop en smal scherm, plus behoud van een ingevuld oefenantwoord bij navigeren.

De H9.1-oefening in de ANOVA-les legt vooraf uit dat gewicht wordt voorspeld met bouwjaar, met één verklarende variabele. De vijf vraagtekens zijn vervangen door ‘Zelf berekenen’; niet gebruikte cellen vermelden ‘n.v.t.’ met uitleg. De opdracht vermeldt dat op papier of in eigen notities wordt gerekend. De uitklapbare uitwerking bevat nu de volledig ingevulde ANOVA-tabel. De zes bestaande stappen hebben ieder een beschrijvende titel; een korte toelichting verbindt stappen 1–3 met de tabel, stap 4 met R², stap 5 met de twee spreidingsmaten en stap 6 met hun betekenis. Bronwaarden en bronverwijzingen zijn behouden, gecontroleerd tegen de uitwerkingenbundel H9.1, PDF 14–15.

Geslaagd: `npm test`, `test:learning`, `test:sources`, `test:audit` en `test:patterns`. De rekencontrole vergelijkt de ingevulde tabel via onafhankelijke relaties tussen kwadratensommen, vrijheidsgraden, gemiddelde kwadraten en F. `tests/anova-reading-browser.cjs` controleert vijf rekenvelden, de aparte uitwerking, zes stappen, toetsenbordbediening, pagina-overloop en scriptfouten bij 1190 en 390 pixels, licht en donker. Deze test en de navigatietest slagen lokaal en op de geplaatste preview. Dit is Edge-browserbewijs, geen fysieke telefoontest.

De complete kandidaat staat op [preview 09747f06](https://09747f06.sra-2xt.pages.dev/#les/anova) en de [vaste previewlink](https://codex-puntenanalyse-preview.sra-2xt.pages.dev/#les/anova). De 1654 buildbestanden zijn vergeleken met de vorige previewkandidaat: uitsluitend cursusdata, navigatiescript, index en beide zelfstandige HTML-bestanden wijzigen. Alle vijf zijn na plaatsing tegen de build gecontroleerd, bij HTML na verwijdering van uitsluitend de bestaande hostingbeacon. De actuele cursushash is `53d89c8927fd2f178d69164235bb55ec154bf33ffdc59460c52d73dd3964f6af`; de eerdere cursushash hierboven hoort bij de eerdere inhoudelijke kandidaat.

Vóór plaatsing bleef de remotehoofdtak `58d5e90`; geen open PR, lopende GitHub-build of overlappende SRA-publicatie aangetroffen. De preview bevat lokale, niet gecommitteerde wijzigingen. Privacycontrole van de gewijzigde publicatiebestanden en `git diff --check` slagen. Productie blijft ongewijzigd; er is niet samengevoegd en geen nieuwe CI-run geclaimd.

## Uitlijning lesvoorbereiding, 25 oktober 2026

Het gedeelde blok ‘Voorkennis, leerdoelen en tentamen’ heeft één rustig kader, vaste binnenmarges, één metadataregel die bij weinig ruimte doorloopt en gelijk uitgelijnde koppen. Voorkennis en leerdoelen staan naast elkaar waar de leesbreedte dit toelaat, anders onder elkaar. De opsommingen zijn links uitgelijnd. Tentamenfocus sluit binnen hetzelfde kader aan met een dunne scheidingslijn; de afzonderlijke gekleurde binnenkaders zijn ook in donkere modus verwijderd. Alle teksten, bronverwijzingen, voortgang en bedieningsmogelijkheden blijven aanwezig.

Geslaagd: `npm test`, `npm run test:styles` en `tests/lesson-preparation-browser.cjs`. De browsercontrole slaagt lokaal en op [preview 32c3cbeb](https://32c3cbeb.sra-2xt.pages.dev/#les/anova) bij 1600, 1024, 390 en 320 pixels, licht en donker: gelijke kolomuitlijning, stapelen bij smalle weergave, behoud van metadata en beide opsommingen, transparante binnenvlakken, toetsenbordbediening en geen horizontale pagina-overloop of scriptfouten. Dit is browserbewijs op schermmaten, geen fysieke telefoonproef.

De volledige publicatiebouw is opnieuw uitgevoerd. Van 1654 bestanden wijzigen alleen de index, twee zelfstandige HTML-bestanden, `js/app.js` en `css/learning-revision.css`. Cursusdata en bronnen zijn bytegelijk aan preview 09747f06. De stylesheet heeft SHA-256 `87070e7c13f46ac69a23021421e0713a05839ce01c30f31e4dabff57ec32a5d8`; het appscript `bd80533dfd3c0b7eefc05232626c25f1f951aee428b9f6700668f951ab4055af`. De vijf gewijzigde bestanden en cursusdata zijn na plaatsing tegen de build vergeleken, met alleen de bestaande hostingbeacon uitgezonderd. De vaste previewlink wijst naar deze kandidaat. Privacycontrole en whitespacecontrole slagen; remotehoofdtak en productie blijven ongewijzigd. Geen open PR of gelijktijdige deployment aangetroffen.

## Cursusindeling zichtbaar, 25 oktober 2026

Het onderwijsprogramma, PDF 4–5, schrijft hoofdstukken 8–10 voor. Colleges 6–7 behandelen de onderwerpen die de website onder de eigen groepsnaam ‘Verdieping’ plaatste. Die groep heet nu ‘Meervoudige regressie en modelcontrole’, zodat geen facultatieve status wordt gesuggereerd. De bestaande bronafbakening blijft gelden, inclusief de uitzondering voor de inverse transformatie en de afzonderlijke validatienotitie.

Alle 19 hoofdstuk-, paragraaf- en collegekoppelingen staan direct bij de les in het lessenoverzicht en lesmenu. Bovenaan de les staat de koppeling buiten het uitklapblok. De bestaande curriculumgegevens zijn hergebruikt; validatie krijgt geen verzonnen boekparagraaf. De eenheidsaanduiding bij de laatste groep is ‘1 les’.

Een vergelijking met de vorige preview toont dat alle cursusdata identiek zijn behalve de groepsnaam van vier lessen. De MC-groepskoppeling is mee aangepast, met behoud van groeps-ID, alle 175 vragen en opslagkoppelingen. De bestaande MC-regressietest signaleerde de aanvankelijk nog oude groepsnaam; na herstel slagen alle controles. Geslaagd: `npm test`, `test:learning`, `test:sources`, `test:audit`, `test:patterns` en `test:styles`. De nieuwe browsercontrole verifieert alle 19 zichtbare koppelingen, de groepsnaam, leskop buiten het gesloten uitklapblok, lesmenu en pagina-overloop bij 1366, 390 en 320 pixels, licht en donker. Die controle slaagt lokaal en op de geplaatste preview; de bestaande lesvoorbereidingscontrole slaagt eveneens lokaal op vier breedtes en beide thema's.

Geplaatst op [preview 2244b2e0](https://2244b2e0.sra-2xt.pages.dev/#leren) en de vaste previewlink. De complete bouw telt 1654 bestanden; acht wijzigen ten opzichte van 32c3cbeb: index, beide zelfstandige HTML-bestanden, de lesstylesheet, cursus- en MC-data en beide bijbehorende appscripts. Alle acht geserveerde bestanden komen overeen met de geteste build, met alleen de bestaande hostingbeacon uitgezonderd. Actuele cursushash: `474a4e85999888611b29791cffa5837e510961abb51d367c91eaf20093cb2d7d`. Privacy- en whitespacecontrole slagen; remotehoofdtak blijft `58d5e90`, geen open PR of gelijktijdige publicatie aangetroffen. Productie is bytegelijk gebleven. Browserbewijs is geen fysieke telefoonacceptatie.

Bronnen: [onderwijsprogramma](https://sra-2xt.pages.dev/bronnen/onderwijsprogramma.pdf), [SPSS-opgaven en uitwerkingen](https://sra-2xt.pages.dev/bronnen/spss-uitwerkingen.pdf#page=37), [H8c](https://sra-2xt.pages.dev/bronnen/boek-h8c.pdf), [H9b](https://sra-2xt.pages.dev/bronnen/boek-h9b.pdf), [H10b](https://sra-2xt.pages.dev/bronnen/boek-h10b.pdf), [bronregister tentamens](tentamen-puntenanalyse-2026-10-25.md). Het oorspronkelijke Excelbestand blijft lokaal; bronblad en hash staan in de analysegegevens.


## Voorbereiding productieplaatsing, 25 oktober 2026

De volledige kandidaat is vrijgegeven voor productieplaatsing via een pull request en de bestaande volledige Cloudflare-build. Voor het vastleggen zijn 42 gewijzigde of nieuwe bestanden gecontroleerd op persoonsgegevens, lokale gebruikerspaden en e-mailadressen. De vijf nieuwe PNG-bestanden bevatten alleen software- en resolutiemetadata. De commitidentiteit en alle zichtbare Git-auteurs gebruiken het bestaande projectpseudoniem en GitHub-noreplyadres. De 1654 buildbestanden zijn ongewijzigd ten opzichte van de gecontroleerde previewmanifestatie.

De eindcontrole herhaalt de punten- en college-8-controles en de volledige lesbrowsercontrole: 19 lessen, 41 toepassingen, vier schermbreedtes, lichte en donkere modus, formulehulp, toetsenbord, antwoordbehoud, zelfstandige HTML en leesversie. Op preview 2244b2e0 slagen daarnaast de herstart-/resetproeven, tentamenoefeningen en de oorspronkelijke PDF-routes, inclusief bewaren van antwoorden en markeringen. De PDF-reader blokkeert de door hosting toegevoegde analyticsbeacon volgens zijn bestaande CSP; de reader- en markeerproeven slagen. Dit is geen bewijs van dashboardontvangst. Die eerder vastgelegde externe toegangsbeperking blijft bestaan.

De repository heeft op het controlemoment geen branchbeveiliging en geen eigen Actions-testworkflow. Lokale tests en de complete preview zijn daarom afzonderlijk vastgelegd; beschikbare GitHub-/Pages-controles worden bij de pull request gecontroleerd. De hoofdtak wordt uitsluitend via de pull request bijgewerkt, waarna dezelfde geteste uitvoermap met de samenvoegcommit als versie naar het bestaande productieadres wordt geplaatst. Bovenstaande previewcontroles zijn geen claim dat die laatste plaatsing al is uitgevoerd.
