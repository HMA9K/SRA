# Tentamenanalyse en dashboard

Gemaakt met Codex, 18 september 2026.

## Inhoud en herkomst

Alle beschikbare volledige tentamens uit de aangeleverde map staan in het dashboard. De analyse telt inhoudelijk gelijke tentamens één keer: 23 maart en 26 juni 2020 bevatten dezelfde vragen. Aantal tentamens, datumbereik, totaal aantal vragen en punten, frequentienoemer en kleinste en grootste vraagaantal worden rechtstreeks uit de tentamengegevens berekend. Opgave 1 gaat over steekproeven (35 punten). Regressie telt samen 65 punten: in de nieuwere reeks één hoofdopgave; in beide versies uit 2020 twee hoofdopgaven van 40 en 25 punten. De oorspronkelijke vraagnummering per opgave blijft herkenbaar. De indeling per tentamen laat de vragen, punten en onderwerpen zien.

`data/exam-analysis.json` bewaart de gecontroleerde onderwerpverwijzingen per vraag. De vijf vraagtypen in de HTML zijn een didactische indeling met concrete voorbeelden. Ze overlappen en vormen geen exclusieve verdeling van vragen of punten.

De toegevoegde oorspronkelijke opgaven van 28 oktober 2024 zijn verwerkt als volledig oefententamen, met het officiële antwoordmodel. Ook de overige beschikbare tentamens zijn opgenomen. Inhoudelijk gelijke datumversies zijn afzonderlijk te openen, maar tellen eenmaal mee in de analyse. De oude e1-e6-routes blijven bereikbaar voor bestaande bladwijzers en notities, maar zijn geen toetsen in het nieuwe dashboard.

Het dashboard bevat tien tentamendata en 224 vragen. De analyse telt negen verschillende vraagverzamelingen en 196 vragen. De extra uitwerkingsversies voor oktober 2022 en oktober 2024 zijn geen afzonderlijke tentamens. Bij oktober 2024 blijven de oorspronkelijke beelden intact; het antwoordpaneel licht een drukfout in de ANOVA-tabel, afwijkende figuurnummers en het verschil tussen de formulering van vraag 13 en het officiële interval toe.

## Referenties

- [BELRE3, Tentamenindeling per Opgave](https://github.com/HMA9K/BELRE3/blob/27f3479fe53908a2486ad19e85351896add6e577/index.html): algemeen patroon, selectie per tentamen en tabel met opgave, punten en onderwerp.
- [CAFA2-dashboard](https://github.com/HMA9K/CAFA2/blob/382add0fb67ed503438876e40dbba46497e02c02/js/exams.js): MC eerst, gedateerde tentamens daaronder, Aankomend/Voltooid.
- [CAFA2 Cirrus-stijl](https://github.com/HMA9K/CAFA2/blob/382add0fb67ed503438876e40dbba46497e02c02/css/exams.css): paarse bovenbalk, titelstrook van 50 px, vlakke tabel, groene startknoppen, oranje vraagnummer en vaste voettekst.

CAFA2 is ook visueel vergeleken met het geopende dashboard op cafa2.pages.dev. De lokale BELRE3-kopie is versie 1.73; een verse GitHub-fetch lukte niet. De geraadpleegde versie is expliciet gelinkt.

## Bronpagina's en bouwproces

`scripts/build_exams.py` leest de oorspronkelijke project-PDF's en maakt `data/exams.js`. Bronpagina's worden met Poppler als JPEG op 1800 pixels gerenderd; de PDF's en afbeeldingen staan onder `bronnen/tentamens/`. Daardoor blijven de oorspronkelijke formules, tabellen en grafieken behouden. Onder elke opgavepagina staat ook de geëxtraheerde tekst; bij complexe notatie is de afbeelding leidend.

Een volledige build (`python scripts/package.py`) genereert en controleert deze bestanden. Poppler en pypdf zijn daarvoor nodig. De bronbestanden blijven lokaal uitgesloten van Git, net als de andere cursus-PDF's. Een build zonder bronnen bevat de interface en analyse, maar geen originele PDF's of pagina-afbeeldingen. Voor een complete lokale versie gebruik je de volledige ZIP.

Uitwerkingen uit de eerdere vraagweergave blijven onder `sra-exams-v1` bewaard. De huidige Cirrus-bediening gebruikt `sra-cirrus-exams-v1` en ondersteunt oefenen met of zonder aftelklok. De bestaande lessen, MC-antwoorden en oude routenotities blijven onder hun bestaande sleutel staan. Back-ups bevatten de bijbehorende opgeslagen uitwerkingen. Open vragen worden niet automatisch beoordeeld; zie [Cirrus-bediening en formuleoverzicht](cirrus-en-formuleoverzicht.md) voor de huidige opslag en bediening.

## Controle

- Bestaande tests: lessen, rekenfuncties, 19 interactieve tools, begrippen en navigatie.
- `node tests/exams.cjs --sources`: unieke data, vraag- en puntentotalen, alle bron- en antwoordpagina's, onderwerpverwijzingen en lokale afbeeldingen.
- Browser: dashboard, vraagweergave, bewaren, markeren, terugknop, overzicht, afronden, analysefilter, bronpagina's en mobiele weergave.
