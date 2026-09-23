# SRA: kop en lichtmodus volgens CAFA2

Op 23 september 2026 gepubliceerd op https://sra-2xt.pages.dev/.

## Uitgevoerd

- Eén gedeelde kop voor alle interactieve routes: leren, formules, MC, tentamendashboard en actieve toetsen.
- SRA-woordmerk met een oranje vinkje op de S, volgens de C van CAFA2. Hoogte, uitlijning, letterknoppen, rekenmachineknop en profielweergave volgen de CAFA2-kop.
- De ondertitel LEER- EN OEFENOMGEVING en de bestaande Meer-navigatie zijn behouden. Op smalle schermen wordt de ondertitel net als in CAFA2 verborgen.
- Lichtmodus met Aan, Uit en Automatisch. Automatisch volgt het apparaat; een handmatige keuze wordt alleen gedurende de browsersessie bewaard en blijft bij verversen behouden.
- De donkere kleuren gelden voor lesinhoud, MC, toetsbediening, invoervelden, rekenmachine en grafieken. Bronafbeeldingen en afdrukstijlen blijven intact.
- De kop groeit als toetsklok en bediening extra regels nodig hebben. De navigatie en mobiele themakeuze volgen de gemeten kophoogte.
- De zelfstandige interactieve HTML en lokale ZIP-pakketten bevatten dezelfde aanpassing. De afzonderlijke scriptloze leesversie blijft een leesdocument.

## Controle

Alle 19 JavaScript-controles zijn geslaagd, inclusief inhoud, antwoorden, voortgang, route-isolatie, rekenmachine en lichtmodus. Daarnaast zijn negen bestaande CSS-controles en vijf nieuwe controles voor de donkere kleuren geslaagd. Na de laatste gerichte CSS-aanpassingen zijn de relevante thema- en isolatiecontroles opnieuw uitgevoerd.

In de browser zijn de header, menu's, handmatige lichtkeuze, donkerstand, sessiebehoud, MC, lessen, formuleoverzicht, dashboard, actieve toets, rekenmachine en zelfstandige HTML gecontroleerd. Schermformaten: 1280, 800, 390 en 320 pixels breed. Een gevonden overloop bij de toetsbediening is verholpen. Op de live website zijn de lichtkeuze, verversen, Meer-navigatie en mobiele donkerstand opnieuw gecontroleerd; geen consolefouten.

Cloudflare-deployment: `493385b2-266a-4e77-998c-7f34a7b30f80`, productie, status success. Zes gepubliceerde kernbestanden zijn met HTTP 200 opgehaald en komen overeen met de lokale bouwuitvoer. Zie `kop-en-lichtmodus-publicatiecontrole-2026-09-23.json`.

## CAFA2 en gezamenlijk onderhoud

De CAFA2-projectcode is via de GitHub-connector bereikbaar met schrijfrechten. De ondertitel en Meer-navigatie kunnen vanuit deze taak ook daar worden toegevoegd. CAFA2 is in deze wijziging nog niet aangepast; de gebruiker noemde die uitbreiding als vervolgstap. Een afzonderlijke taak is daarvoor niet technisch nodig. Een exact verschil in tokenverbruik is niet vastgesteld.

De gezamenlijke kop en lichtmodus staan in `packages/study-ui` versie 1.1.0. SRA gebruikt de gesynchroniseerde distributie; CAFA2 is nog niet aangesloten als afnemer. Dit is geen automatische synchronisatie tussen beide projecten.

## Bronnen

- Referentie: aangeleverde schermafbeeldingen van CAFA2 en SRA.
- [Gepubliceerde CAFA2](https://cafa2.pages.dev/), header- en themabestanden opgehaald op 23 september 2026.
- [CAFA2-kleurcompiler](https://github.com/HMA9K/CAFA2/blob/main/scripts/build-study-dark.py), bronbestand vastgelegd met Git-blob `64ff16b1b03598aa5aafb84f81106ff3e4ce1659`.
- [Gepubliceerde SRA](https://sra-2xt.pages.dev/).
