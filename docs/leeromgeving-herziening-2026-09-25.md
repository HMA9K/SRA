# Herziening van de SRA-leeromgeving

Datum: 25 september 2026. Uitgevoerd na akkoord op uitbreiding van de leeromgeving over de hele voorgeschreven cursus. De screenshots zijn gebruikt als voorbeelden van ontbrekende soorten inhoud, niet als begrenzing van de opdracht.

## Inhoud en bronafbakening

Alle 19 lessen zijn uitgebreid. De samplinguitbreiding voegt 18 leerblokken toe en verdiept 10 bestaande blokken; de regressieuitbreiding voegt 35 leerblokken toe. Zij bevatten methodekeuze, de reden achter stappen, aannames, toepassingsgrenzen, uitgewerkte gegevens en de betekenis voor accountant en tentamen. De formulegidsen sluiten op deze routes aan.

De onderwerpcontrole omvat het voorgeschreven boekmateriaal in H8 tot en met H10 en slides 1 tot en met 171. Uitgesloten stof blijft herkenbaar uitgesloten. Aanvullende collegestof zoals validatie krijgt geen verzonnen boekparagraaf. Deze controle is op onderwerpen en vaardigheden uitgevoerd; niet ieder bronvoorbeeld is afzonderlijk gereproduceerd. De precieze dekking en resterende beperkingen staan in:

- [Sampling: bronplaatsen, vaardigheden en controles](dekking-sampling-2026-09-25.md).
- [Regressie: bronplaatsen, vaardigheden en controles](dekking-regressie-2026-09-25.md).
- [Toepassingsvragen: herkomst, rekencontrole en tabellenbundel](dekking-vragen-2026-09-25.md).

De leerstof steunt op de aangeleverde boekuitsneden, NJ26-colleges, onderwijsprogramma, attentiepunten, formuleblad, tabellenbundel, SPSS-opgaven en uitwerkingen. Alleen voor publicatie zijn technische Cloudflare-documentatie en de API gebruikt. Er zijn geen externe onderwijssites als inhoudelijke bron toegevoegd.

## Tentamen en SPSS

Het onderwijsprogramma vermeldt 35 punten sampling en 65 punten regressie. Elke les toont wat zelfstandig moet kunnen worden uitgevoerd, plus de bestaande tentamenfrequentie met herleidbare vragen en de gebruikte noemer van negen unieke tentamens. Frequentie is historische evidentie, geen garantie over een komend tentamen.

De MC-bank groeit van 134 naar 175 vragen. Alle 19 onderwerpen krijgen nieuwe toepassingen: 8 begeleid en 33 zelfstandig. Ze vragen om selecteren, rekenen en concluderen vanuit tabellen, grafieken en casussen. Eigen oefengegevens zijn herkenbaar onderscheiden van getranscribeerde collegegegevens. De 57 bestaande begripchecks en 224 oorspronkelijke vragen in 10 tentamenbestanden blijven beschikbaar.

Tabellenbundelgebruik wordt daadwerkelijk geoefend. Nieuwe vragen laten de juiste t-, F- of Durbin-Watson-grens opzoeken; de uitwerking verklaart rij, kolom, vrijheidsgraden, staartkans en beslissing. Voor df 99 gebruikt de aangeleverde bundel de lagere beschikbare rij 95, met t = 1,985. De eerdere route via rij 90 is gecorrigeerd.

Voor colleges 3 tot en met 8 zijn SPSS-praktijkroutes toegevoegd: doel, benodigde handelingen, gewenste uitvoer, interpretatie en verbinding met het tentamen. Uitvoer lezen, ontbrekende waarden afleiden en beslissingen onderbouwen krijgen nadruk. De routes zijn gecontroleerd tegen de aangeleverde opgaven en uitwerkingen; SPSS is tijdens deze wijziging niet live uitgevoerd. Verschillen tussen afgedrukte bronuitkomsten en herberekeningen worden zichtbaar uitgelegd in plaats van verborgen.

## Presentatie en gedrag

Les- en formulekoppen vermelden boekhoofdstuk, paragraaf en hoorcollege. Alle uitlegblokken vormen een eigen begrippenscope: een begrip is eenmaal klikbaar over de hele kaart, inclusief titel, subkoppen en slotwaarschuwing. Synoniemen tellen als hetzelfde begrip. Bij een nieuwe kaart begint de telling opnieuw.

De zeven oorspronkelijke regressiefiguren blijven beschikbaar in de website én ingebed in de zelfstandige HTML en leesversie. Brede tabellen en formules hebben een eigen schuifgebied op smalle schermen. De nieuwe MC-casus blijft zichtbaar boven de vraag. Bestaande vraag-ID's, antwoordvolgorde en antwoordindices zijn behouden zodat opgeslagen antwoorden hun betekenis houden.

## Controle en oplevering

De inhoud wordt deterministisch opgebouwd uit de bronmodules. De controles omvatten onafhankelijke herberekening van schatters, strata, steekproefomvang, ANOVA, t/F/DW, modelvergelijking, voorspelling en transformaties. Bronverwijzingen worden gecontroleerd tegen de lengte van de werkelijke PDF's.

De browsercontrole doorloopt alle 19 lessen op 1366, 390 en 320 pixels en alle 41 nieuwe casusstimuli. Zij controleert afgrenzing van begrippen, nieuwe eerste vermeldingen na invoegen of verwijderen, toetsenbordbediening, afwezigheid van horizontale pagina-overloop, opgeslagen MC-antwoorden, formulegidsen, zelfstandige HTML en leesversie. De bestaande onderwerpcontrole blijft aanvullend beschikbaar.

De herziening is gepubliceerd op [SRA-leeromgeving](https://sra-2xt.pages.dev/). Productiedeployment `e016c16c-7d45-4072-874b-f8abd624c6e2` heeft status `success`, bevestigd op 25 september 2026. De productie-uitvoer is uitsluitend opgebouwd in `output/site`, met de benodigde bronuitsneden.

Daadwerkelijk geslaagde eindcontroles:

- De volledige bestaande JavaScript-testreeks en de nieuwe inhoudscontrole, met 19 lessen, 163 sectiebronverwijzingen en zeven bronfiguren.
- Negen onafhankelijke toepassingscontroles, vijf herkenningsroutecontroles, drie optietoelichtingscontroles en de samplingherberekeningen.
- Alle 3.949 bronverwijzingen in de les- en MC-data vallen binnen de werkelijke paginagrenzen van de 22 geregistreerde PDF-bronnen.
- Browsercontrole van alle 19 lessen en 41 nieuwe stimuli op 1366, 390 en 320 pixels, zowel lokaal als op de productiesite.
- Bestaand onderwerpoverzicht op 1366, 768, 390 en 320 pixels: 104 open-/sluitacties zonder verschuivende kaarten; lichte/donkere weergave, hervatten en gedeelde antwoorden behouden.
- Visuele controle van tijdsvertraging, volledige stratumtabellen en SPSS-residu-uitvoer. Een gevonden afbreekprobleem in lange mobiele koppen is hersteld en opnieuw bekeken.
- Veertien gepubliceerde kernbestanden, inclusief alle zeven bronfiguren, zijn byte voor byte gelijk aan de lokale productie-uitvoer. Hoofdpagina, `index.html`, beide zelfstandige HTML-paden en vier centrale bron-PDF's openen online correct.
- De volledige ZIP, zelfstandige interactieve HTML en leesversie zijn opnieuw opgebouwd met de laatste inhoud en opmaak.

De uitgebreide herziening is een nieuwe inhoudscontrole naast [de eerdere boekcontrole](codex-boekcontrole-sra.md); oude controleverslagen blijven als historische verantwoording bewaard.
