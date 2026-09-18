# SRA interactieve samenvatting

Een leerroute vanaf nulkennis naar de voorgeschreven onderwerpen van Sampling & Regression Analysis, najaar 2026. De vormgeving en modulaire statische opzet sluiten aan op HMA9K/CAFA2. SRA is een zelfstandige app en verandert CAFA2 niet.

## Openen

- **SRA interactieve samenvatting.html**: zelfstandig openen op een computer. Stijlen, lessen en scripts zitten in dit bestand. De map `bronnen` moet ernaast blijven voor bronlinks.
- **index.html**: dezelfde app, met losse bestanden voor onderhoud en hosting.
- **SRA leesversie.html**: alle uitleg en checks zonder scripts. Geschikt voor een bestandsvoorvertoning die scripts blokkeert.
- De ZIP in de bovenliggende outputmap bevat de app en lokale bronbestanden. Pak deze eerst volledig uit.

## Inhoud

19 lessen, 57 begripchecks, 19 interactieve reken-/onderzoeksbladen, een begrippenlijst en 6 routes naar concrete tentamenvragen. Stapsgewijs geopende voorbeelden, lokale voortgang, aparte eerste/laatste pogingen, export/import, tentamenaantekeningen en een rekenmachine.

De cijfers bij de checks zijn geen tentamencijfer. De routes bij oktober 2024 zijn reconstructies uit het beschikbare antwoordmodel en worden zo gelabeld. Het volledige tentamen van maart 2025 wordt geopend als oorspronkelijke PDF, niet nagebouwd als automatische examenafname.

De hoofdpagina geeft drie keuzes: **Leren**, **Oefenvragen maken** en **Tentamens oefenen**. Leren opent het lesoverzicht; alleen binnen een les verschijnt de onderwerpenlijst. Oefenvragen opent een aparte oefenomgeving met keuze per onderdeel of les, één vraag tegelijk en een link naar de bijbehorende uitleg. Beide gebruiken dezelfde opgeslagen begripchecks. Tentamens opent het dashboard in de CAFA2/Cirrus-vormgeving, met de zes beschikbare oefenroutes. Iedere route heeft een eigen uitwerking en een verstelbaar paneel met controlepunten. Op mobiel staan de panelen onder elkaar. Voortgang, begrippen en bronnen staan bij de hulpmiddelen.

Elke les bevat een eigen onderzoek. De grafieken reageren op invoer en tonen naast de afbeelding ook rekenwaarden en een interpretatie. Bij de eerste les en de tentamenaanpak helpt een interactief schema bij het maken van keuzes. Demonstratiegegevens zijn herkenbaar; het wijzigen van zulke gegevens verandert de oorspronkelijke cursusbronnen niet.

De structuur met keuzekaarten is gebaseerd op [BELRE3](https://github.com/HMA9K/BELRE3/blob/27f3479fe53908a2486ad19e85351896add6e577/index.html). Het tentamendashboard volgt [CAFA2](https://github.com/HMA9K/CAFA2/blob/382add0fb67ed503438876e40dbba46497e02c02/js/exams.js).

## Layout gezamenlijk onderhouden

De actuele CAFA2-vormgeving is overgenomen uit commit `382add0fb67ed503438876e40dbba46497e02c02`. De algemene componenten staan in `packages/study-ui`; de opgenomen distributie staat in `vendor/study-ui`. SRA-specifieke aansluiting staat in `css/sra-layout.css`, de wiskundige presentatie in `css/presentation.css`.

Na een wijziging in het bronpakket: `python scripts/sync_layout.py`, `python scripts/sync_layout.py --check` en `python scripts/package.py`. De build controleert de distributiecontrolesommen en neemt alle stylesheets uit index.html mee in de zelfstandige HTML. Alleen de versie in SRA is nu aangesloten; CAFA2 is nog niet gemigreerd naar het gedeelde pakket. Zie [de gedeelde layout onderhouden](docs/gedeelde-layout.md) voor releases over afzonderlijke repositories en het monorepo-alternatief.

## Structuur

```text
index.html
css/app.css
data/course.js
js/math.js
js/labs.js
js/app.js
assets/favicon.svg
scripts/build_content.py
scripts/package.py
tests/validate.cjs
bronnen/                 lokale kopieën, niet gevolgd in Git
```

Inhoud aanpassen in `scripts/build_content.py`. Met Node.js en Python 3 beschikbaar kun je vanuit een gewone clone `npm test` en `npm run build` uitvoeren. Er zijn geen npm-afhankelijkheden om te installeren. Deze bouwmodus maakt de data, zelfstandige HTML, leesversie en een ZIP zonder bronbestanden. De app heeft geen externe libraries, fonts of netwerkdiensten nodig.

Gebruik lokaal `npm run build:full` (of `python scripts/package.py`) wanneer de oorspronkelijke SRA-projectbestanden een map hoger staan. Deze opdracht kopieert ook de bronnen en maakt de complete ZIP. De bronloze en complete ZIP hebben verschillende namen, zodat de complete lokale oplevering behouden blijft. De bronloze ZIP neemt ook eventueel aanwezige oude PDF's niet mee.

## Controleren

De formulepresentatie staat in `scripts/presentation.py` en `css/presentation.css`: 60 vergelijkingen met native MathML, zonder downloads of externe lettertypen. Breuken, wortels, machten en indices werken ook in de zelfstandige leesversie. Per les is de betekenis van de symbolen uitklapbaar. Rekenbladen tonen uitgelijnde decimalen, tussenstappen, tabelkoppen en totalen. Grafieken passen zich aan de beschikbare breedte aan; brede formules en tabellen hebben een eigen schuifgebied.

`npm test` controleert de leerdataset, de koppeling van alle 19 labs, de bronpaden en de statistische rekenfuncties tegen onafhankelijk berekende waarden en de officiële uitwerkingen. `npm run test:sources` controleert aanvullend de aanwezigheid en PDF-headers van de lokale bronbestanden. De lokale browsercontrole omvat desktop, mobiel, navigatie, checks, voortgang en rekenbladen.

## Opslag

Alle antwoorden en aantekeningen staan in `localStorage` onder `sra-learning-v1`. Export/import maakt verplaatsen naar een ander apparaat mogelijk. Bij geweigerde browseropslag blijft de sessie werken en kan de voortgang worden geëxporteerd. Geen analytics, login of verzending van persoonsgegevens.

## Publicatie

De broncode staat in [HMA9K/SRA](https://github.com/HMA9K/SRA). De site is statisch; hosting en een publieke website zijn afzonderlijke stappen. De bron-PDF's zijn lokale kopieën, worden door `.gitignore` uitgesloten en staan niet in de repository. De interactieve uitleg en tools werken zonder deze PDF's; de links naar oorspronkelijke documenten vereisen de bijbehorende lokale `bronnen`-map. Kies bij eventuele websitepublicatie passende toegankelijke bronlinks. De complete ZIP is bedoeld als lokale oplevering met documenten.

## Bronnen en inhoudelijke keuzes

De bronregistratie staat in `data/course.js` en de app. Per les zijn PDF-pagina's en waar mogelijk formulenummers genoemd. De cursusgrenzen en afrondingsafspraken volgen het onderwijsprogramma, het formuleblad en de recente uitwerkingen. Bronverschillen worden expliciet getoond (tweezijdige Sig., de individuele meervoudige t-toets, het teken van R en vraag 20 van maart 2025). Het volledige boek blijft in de oorspronkelijke projectmap.
