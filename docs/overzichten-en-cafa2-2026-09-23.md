# SRA-overzichten en CAFA2-menu

## Uitgevoerd op 23 september 2026

SRA heeft een compact onderwerpenoverzicht volgens de aangeleverde CAFA2-screenshot: één kader, een titel met aantallen, twee kolommen met genummerde kaarten, beschrijvingen, voortgang en acties. De vijf hoofdonderwerpen en alle negentien uitklapbare deelonderwerpen blijven bereikbaar. De bestaande keuze voor direct nakijken is ook vanuit het overzicht instelbaar.

De terugknop staat in een afzonderlijke balk onder de kop. Het tentamendashboard heeft daardoor dezelfde verticale volgorde als CAFA2: kop, terugbalk, titelstrook, kruimelpad, filter en tabel. De gewone lessen, grafieken en zijbalk houden rekening met de hoogte van de terugbalk.

In CAFA2 is de ondertitel gewijzigd naar LEER- EN OEFENOMGEVING, in de oefenomgeving, samenvatting en statische varianten. Het Meer-menu is toegevoegd naast de terugnavigatie, met IC-kernschema, Voortgang, Begrippen, Bronnen en Wetsartikelen. Het werkt in licht- en donkerstand, met toetsenbordbediening en op mobiel. Terugnavigatie accepteert ook de verkorte pagina-adressen die Cloudflare online gebruikt.

## Validatie en publicatie

- Alle negentien SRA-testonderdelen geslaagd. De gewijzigde terugbalk is meegenomen in de route-isolatietest; de donkere-kleurencontrole slaagt.
- De volledige CAFA2-testsuite geslaagd. Extra routecontroles dekken HTML- en verkorte productieadressen, zonder externe bestemmingen toe te laten.
- In de browser: kaarten op desktop en mobiel, uitklappen van deelonderwerpen, gedeelde nakijkvoorkeur, openen van een vraag, terugkeer naar het overzicht, dashboardposities, CAFA2-menu, navigatie naar de samenvatting en terug, donkerstand en Escape.
- De live kernbestanden van beide websites zijn opgehaald en byte voor byte vergeleken met de geteste bestanden. Resultaten staan in `overzichten-en-cafa2-publicatiecontrole-2026-09-23.json`.
- SRA-deployment: `bc621e09-c501-4454-a1f1-1066504ed959`.
- CAFA2-deployment: `ac2ccc4e-05ea-444c-a1dd-bc6e600589a4`; online terugnavigatie tussen Begrippen, Bronnen en Oefenen bevestigd.
- CAFA2-wijziging: `ccd1fc4b352dfda047f8bf84305fc0e49b15d64d`; afrondende routecorrectie: `95081d67bfbb094f2f4f5e923b2b24c2f0e98ccf`.

CAFA2-code staat lokaal in `%USERPROFILE%/Documents/Claude/Projects/CAFA2-web` en is opgenomen in de bestaande GitHub-repository. De gezamenlijke SRA-stijlbron is versie 1.1.1. De twee projecten worden nog afzonderlijk gepubliceerd.

## Bronnen

- Aangeleverde vergelijking van de onderwerpenpagina en het tentamendashboard.
- [SRA](https://sra-2xt.pages.dev/#tentamen/mc).
- [CAFA2](https://cafa2.pages.dev/#oefenen).
- [CAFA2-codewijziging](https://github.com/HMA9K/CAFA2/commit/95081d67bfbb094f2f4f5e923b2b24c2f0e98ccf).
