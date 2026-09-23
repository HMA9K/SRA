# SRA interactieve samenvatting

Een leerroute vanaf nulkennis naar de voorgeschreven onderwerpen van Sampling & Regression Analysis, najaar 2026. De vormgeving en modulaire statische opzet sluiten aan op HMA9K/CAFA2. SRA is een zelfstandige app en verandert CAFA2 niet.

## Openen

- **SRA interactieve samenvatting.html**: zelfstandig openen op een computer. Stijlen, lessen en scripts zitten in dit bestand. De map `bronnen` moet ernaast blijven voor bronlinks.
- **index.html**: dezelfde app, met losse bestanden voor onderhoud en hosting.
- **SRA leesversie.html**: alle uitleg en checks zonder scripts. Geschikt voor een bestandsvoorvertoning die scripts blokkeert.
- De ZIP in de map `output` binnen deze projectmap bevat de app en lokale bronbestanden. Pak deze eerst volledig uit.

## Herkenbare werkmap

Alle gemaakte appbestanden, downloads en werkbestanden staan bij elkaar in `sra-interactief` binnen de oorspronkelijke SRA-map. Het bestand `00 - GEMAAKT MET CODEX.md` markeert deze map herkenbaar. De originele cursusdocumenten blijven buiten deze werkmap. `bronnen` bevat lokale kopieën en staat buiten Git. `output` bevat de twee ZIP-versies; `tmp` bevat tijdelijke controles en referentiecheckouts.

## Begrippen, kennisstart en formules

Elke les begint met verwachte voorkennis en leerdoelen. SRA bouwt voort op SET; de kennisstart is voorlopig geformuleerd vanuit de aanwezige SRA-bronnen. SET-bestanden zijn nog niet toegevoegd.

De 189 vaktermen openen een compact venster met betekenis, eigen voorbeeld en bron. Het venster navigeert niet naar een andere les. De begrippenlijst zoekt ook op aliassen en betekenis. Formules uitgelegd opent per onderwerp een aparte pagina met toepassing, symbolen, berekening, interpretatie en valkuilen.

De knop Terug staat voor Home in het kruimelpad en gebruikt de browsergeschiedenis en herstelt leespositie, geopende uitleg, voorbeeldstappen en tijdelijke invoer binnen de geopende app. Ook Vooruit van de browser werkt. Opgeslagen tentamennotities behouden altijd de nieuwste versie. Een herladen pagina start een nieuwe navigatiesessie; de gewone leer- en tentamenvoortgang blijft bewaard.

Catalogus: `scripts/terminology.py`. Kennisstart en formules: `scripts/lesson_guides.py`. Navigatie: `js/navigation.js`. Begrippenvensters: `js/terms.js`.

## Inhoud

19 lessen, 57 begripchecks, 134 meerkeuzevragen, 19 interactieve reken-/onderzoeksbladen, een begrippenlijst en 10 volledige tentamens met 224 vragen. Stapsgewijs geopende voorbeelden, lokale voortgang, aparte eerste/laatste pogingen, export/import, tentamenuitwerkingen en een rekenmachine.

De cijfers bij de checks zijn geen tentamencijfer. Volledige tentamens gebruiken de oorspronkelijke vragen, casussen, tabellen en antwoordmodellen. Open antwoorden worden met het officiële model vergeleken en door de student zelf beoordeeld.

De hoofdpagina geeft vier keuzes: **Leren**, **Oefenvragen**, **Tentamenanalyse** en **Tentamens**. Oefenvragen biedt per onderwerp zes vragen met oplopende moeilijkheid. De begripchecks uit de lessen blijven ook afzonderlijk bereikbaar. Naast iedere controleknop staat de keuze om een antwoord direct na aanklikken na te kijken; deze voorkeur geldt voor beide omgevingen en blijft bewaard. De toelichting verschijnt onder het gekozen antwoord, met rekenstappen, patroonherkenning, valkuilen en uitleg per antwoordmogelijkheid. Tentamens gebruikt de CAFA2-bediening met één vraag per scherm, een antwoordeditor en de knoppen Overzicht, Sectie, Introductie, Markeren en Toets voltooien. Het antwoordmodel verschijnt onder de eigen uitwerking. De oude oefenroutes zijn verwijderd; bestaande links openen de bijbehorende volledige tentamenvraag. Oude aantekeningen blijven beschikbaar bij Voortgang.

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

Inhoud aanpassen in `scripts/build_content.py`. De brongebonden aanvullingen en extra oefenvragen staan in `scripts/course_completion.py` en `scripts/completion_questions.py`. Installeer voor het bouwen eerst de Python-kleurparser met `python -m pip install -r requirements-build.txt`. Met Node.js en Python 3 beschikbaar kun je vanuit een gewone clone `npm test` en `npm run build` uitvoeren. Er zijn geen npm-afhankelijkheden om te installeren. Deze bouwmodus maakt de data, zelfstandige HTML, leesversie en een ZIP zonder bronbestanden. De app heeft geen externe libraries, fonts of netwerkdiensten nodig.

Maak bij een nieuwe lokale opbouw eerst de boek- en SET-uitsneden met `python scripts/prepare_completion_sources.py`. Dat vereist het oorspronkelijke boek in de SRA-map en `Attentiepunten SET V23.pdf` in de naastgelegen SET-studiemap zoals in dat script vastgelegd.

Gebruik lokaal `npm run build:full` (of `python scripts/package.py`) wanneer de oorspronkelijke SRA-projectbestanden een map hoger staan. Deze opdracht kopieert ook de bronnen en maakt de complete ZIP. De bronloze en complete ZIP hebben verschillende namen, zodat de complete lokale oplevering behouden blijft. De bronloze ZIP neemt ook eventueel aanwezige oude PDF's niet mee.

## Controleren

De formulepresentatie staat in `scripts/presentation.py` en `css/presentation.css`: vergelijkingen met native MathML, zonder downloads of externe lettertypen. Breuken, wortels, machten en indices werken ook in de zelfstandige leesversie. Per les is de betekenis van de symbolen uitklapbaar. Rekenbladen tonen uitgelijnde decimalen, tussenstappen, tabelkoppen en totalen. Grafieken passen zich aan de beschikbare breedte aan; brede formules en tabellen hebben een eigen schuifgebied.

`npm test` controleert de leerdataset, de koppeling van alle 19 labs, de bronpaden en de statistische rekenfuncties tegen onafhankelijk berekende waarden en de officiële uitwerkingen. `npm run test:sources` controleert aanvullend de aanwezigheid en PDF-headers van de lokale bronbestanden. De lokale browsercontrole omvat desktop, mobiel, navigatie, checks, voortgang en rekenbladen.

## Opslag

Antwoorden en aantekeningen staan in lokale browseropslag: lessen onder `sra-learning-v1`, MC onder `sra-mc-v1` en Cirrus-pogingen onder `sra-cirrus-exams-v1`. Export/import maakt verplaatsen naar een ander apparaat mogelijk. Bij geweigerde browseropslag blijft de sessie werken en kan de voortgang worden geëxporteerd. De app heeft geen login. De onlineversie gebruikt de reeds ingestelde Cloudflare Web Analytics voor bezoekstatistieken.

## Publicatie

De broncode staat in [HMA9K/SRA](https://github.com/HMA9K/SRA). De bron-PDF's worden door `.gitignore` uitgesloten. Alleen de repository publiceren levert daarom geen complete tentamenomgeving op. `python scripts/build_site.py` maakt na de gewone build een publiceerbaar pakket in `output/site`, met controles op de benodigde bronbestanden. Publiceer uitsluitend die uitvoermap. Werkbestanden, Git, tools en het volledige studieboek worden niet opgenomen. `404.html` voorkomt dat een ontbrekende documentlink als een ongeformatteerde kopie van de app wordt geopend.

## Bronnen en inhoudelijke keuzes

De bronregistratie staat in `data/course.js` en de app. Per les zijn PDF-pagina's en waar mogelijk formulenummers genoemd. De cursusgrenzen en afrondingsafspraken volgen het onderwijsprogramma, het formuleblad en de recente uitwerkingen. Bronverschillen worden expliciet getoond (tweezijdige Sig., de individuele meervoudige t-toets, het teken van R en vraag 20 van maart 2025). Het volledige boek blijft in de oorspronkelijke projectmap.


De [afronding en dekkingsmatrix van 20 september](docs/afronding-sra-2026-09-20.md) beschrijven de inhoudelijke aanvullingen, bronafbakening en uitgevoerde controles.

### Kop en lichtmodus

Alle interactieve pagina’s delen de CAFA2-kop, met het vinkje op de S en de ondertitel LEER- EN OEFENOMGEVING. Lichtmodus biedt Aan, Uit en Automatisch; een handmatige keuze geldt voor de browsersessie. Automatisch volgt het apparaat. De bestaande Meer-navigatie blijft beschikbaar. De gedeelde bestanden staan in `packages/study-ui` versie 1.1.0.
