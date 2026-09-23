# Gemaakt met Codex: Cirrus-bediening en formuleoverzicht

De hoofdpagina heeft vier ingangen: Leren, Oefenvragen, Tentamenanalyse en Tentamens. Het formuleoverzicht staat direct daaronder en in Meer. Per onderwerp bevat het formuleoverzicht de bestaande uitleg, symbolen, voorwaarden en rekenvoorbeeld, gevolgd door het bijbehorende interactieve rekenblad.

## Overgenomen bediening

De tentamenbediening is overgenomen van [CAFA2, commit 639f4c2](https://github.com/HMA9K/CAFA2/tree/639f4c2e8adf2f26d7e1992aadb52b8fbb9e3d42). De originele JavaScript- en CSS-bestanden met controlesommen staan in `vendor/cafa2-cirrus`. De SRA-integratie staat in `js/cirrus.js`; de stijlen zijn beperkt tot de tentamenomgeving in `css/cirrus.css` en `css/cirrus-integration.css`.

- Dashboard met MC bovenaan en volledige tentamens eronder; Aankomend en Voltooid.
- Startpagina met keuze voor tijdslimiet, extra tijd of ongetimed oefenen.
- Eén vraag met opgemaakte antwoordeditor, tabellen, symbolen, subscript/superscript, ongedaan maken en vergroten.
- Onderste bediening: Vorige, Volgende, Overzicht, Sectie, Introductie, Markeren en Toets voltooien.
- Antwoord controleren naast het antwoordmodel, verstelbare kolommen en zelfbeoordeling.
- Pauzeren, hervatten, absolute eindtijd, automatisch inleveren bij verlopen tijd.
- Resultaten, scorerapport, vraaginzage, nieuwe poging en back-up.

Er is geen automatische beoordeling van open vragen. Zelf toegekende punten worden als zelfbeoordeling weergegeven. Er wordt geen officiële uitslag berekend. De bron van maart 2025 vermeldt geen duur: de gebruiker kiest een oefenduur, met 150 minuten als zichtbare instelbare beginwaarde. De toegevoegde oorspronkelijke opgaven van oktober 2024 worden met hun antwoordmodel als volledig tentamen aangeboden.

## SRA-broninhoud

Het dashboard bevat alle beschikbare volledige tentamens, inclusief de nieuw aangeleverde opgaven van oktober 2024 en de oudere tentamens. De analyse gebruikt dezelfde tentamenreeks en telt inhoudelijk gelijke versies eenmaal: maart en juni 2020 bevatten dezelfde vragen. Aantallen vragen, punten en tentamens worden uit de gegevens afgeleid. De drie hoofdopgaven van 2020 en hun herstartende vraagnummering blijven in de bediening en analyse herkenbaar. `scripts/build_cirrus_data.py` zet de bestaande SRA-bronnen om voor de CAFA2-bediening.

De losse vraag staat boven de editor. Korte tekstvragen zijn gewone HTML. Complexe formules behouden een uitsnede van de oorspronkelijke bron. Alle casusinformatie, tabellen en figuren van de huidige opgave staan in Sectie. Vraaggrenzen zijn afzonderlijk gecontroleerd in `data/exam-question-boundaries.json`: aanvullende informatie voor de volgende vraag wordt niet als onderdeel van de vorige vraag getoond. Bronuitsneden zijn aanklikbaar om te vergroten. De officiële uitwerkingen behouden hun oorspronkelijke notatie en puntentoekenning.

## Opslag en eerdere uitwerkingen

Nieuwe pogingen gebruiken `sra-cirrus-exams-v1`. Iedere poging heeft een eigen inhoudskopie, antwoorden, markeringen, tijdinstellingen en zelfbeoordeling. Een nieuwe poging overschrijft geen eerdere poging. De vorige sleutel `sra-exams-v1` blijft behouden. Het dashboard bevat een link naar Eerder opgeslagen uitwerkingen. MC-opslag en lesvoortgang blijven apart.

Nieuwe routes zijn `#welkom/<datum>`, `#toets/<poging>` en `#inzage/<poging>`. Bestaande analyseverwijzingen naar een vraag openen de startpagina met die vraag geselecteerd voor de nieuwe poging. Het centrale formuleoverzicht staat op `#formules`; de bestaande afzonderlijke pagina's blijven op `#formules/<onderwerp>`.

## Controle

`node tests/cirrus.cjs --sources` controleert inhoud, bronbestanden, puntentotalen, vraaggrenzen, herkomst, pogingen en timerfuncties. Browsercontrole omvat antwoordopslag, markeringen, overzicht, sectie, nakijken, pauzeren, inleveren, scorerapport, formulezoeken en herberekenen. De volledige build is `python scripts/package.py`.

Bronnen: [CAFA2-bediening](https://github.com/HMA9K/CAFA2/blob/639f4c2e8adf2f26d7e1992aadb52b8fbb9e3d42/js/exams.js), [CAFA2-editor](https://github.com/HMA9K/CAFA2/blob/639f4c2e8adf2f26d7e1992aadb52b8fbb9e3d42/js/answer-editor.js) en de aangeleverde SRA-tentamens, uitwerkingen en het formuleblad in de lokale bronnenmap.


## Herstel van de CAFA2-opmaak, 18 september 2026

De eerdere integratie bevatte de tentamenbediening, maar miste CAFA2 `css/app.css`.
De algemene SRA-stijlen bleven actief en overschreven onder meer breedtes,
knoppen, tabellen en regelafstanden. Bovendien zag de CSS-omzetter
`.exam-dashboard-title` ten onrechte als een statusklasse op `body`.
Het getalveld voor de oefenduur erfde de afmetingen van een checkbox.

Dit is hersteld door de complete CAFA2-basis plus tentamenstijlen te importeren.
Tijdens de routes voor dashboard, welkom, toets en inzage worden alle
`data-study-style`-stylesheets tijdelijk uitgeschakeld. Bij lessen, MC, analyse
of formules keren hun oorspronkelijke media-instellingen terug. De zelfstandige
HTML bewaart dezelfde markeringen. CAFA2 gebruikt standaard 14px; de lessen
behouden 16px. De twee lettergroottevoorkeuren worden afzonderlijk opgeslagen.

`scripts/cirrus_styles.py` herschrijft alleen selectors, met behoud van geneste
mediaregels en komma's in selectorfuncties. `cirrus-integration.css` bevat alleen
adapters voor SRA-bronbeelden, het minutenveld, terugnavigatie en de rekenmachine.
De originele CAFA2-regels bepalen de dashboardtabel, welkomstpagina, editor,
knoppen, klok, vragenoverzicht en nakijkindeling.

### Controle

- De actuele CAFA2-repository is lokaal naast SRA geopend. Berekende stijlen voor
  dashboard, welkom, vraagpagina en vragenoverzicht zijn vergeleken: fonts,
  kleuren, randen, marges, padding, breedtebegrenzing en positionering.
- Het verschil in verticale centrering van antwoordvensters volgt uit de
  verschillende lengte van de vakinhoud; dezelfde dialoogregels zijn toegepast.
- In de browser zijn instellen van oefenduur en extra tijd, starten, antwoorden,
  markeren, vraagwisseling, sectie, nakijken, inleveren en zelfbeoordeling getest.
- Bij een mobiele breedte van 390px blijven de bediening en het minutenveld
  bruikbaar. De calculator berekent `sqrt(81)+3` als 12.
- De routewissel terug naar MC en lessen herstelt de eigen opmaak en lettergrootte.
- `tests/cirrus-isolation.cjs` controleert die overgangen en de ingebedde CSS.
  `tests/cirrus-styles.py` controleert negen groepen selector- en parsergevallen.

Alle browserpogingen voor deze controle zijn uitgevoerd op de afzonderlijke
lokale testpoort 8769, buiten de gebruikersvoortgang op 8765.

Bron: [CAFA2 op commit 639f4c2](https://github.com/HMA9K/CAFA2/tree/639f4c2e8adf2f26d7e1992aadb52b8fbb9e3d42).
