# Oefenvragen en rekenmachine, 21 september 2026

De rekenmachine is een verplaatsbaar paneel. De pagina blijft bedienbaar terwijl het paneel open is, zodat lezen, rekenen en antwoordinvoer naast elkaar mogelijk zijn. De kop kan worden versleept of met de pijltoetsen worden verplaatst; Home herstelt de beginpositie. Inklappen en sluiten behouden de berekening binnen de geopende pagina. Het paneel blijft boven een vergroot Cirrus-antwoordvenster zichtbaar en past binnen de zichtbare viewport.

## Vraaggerichte patroonherkenning

Alle 134 MC-vragen hebben een afzonderlijk geschreven herkenningsroute. Die benoemt concrete woorden, symbolen of gegevens uit de vraag, koppelt ze aan de betekenis, beschrijft de passende aanpak en benoemt welk soort antwoord nodig is. De 57 leschecks gebruiken dezelfde routes. De vier onderdelen verschijnen na het nakijken, ook in de resultaten en de zelfstandige leesversie.

Voorbeelden van het gemaakte onderscheid:

- Een totale intervalbreedte vraagt eerst halveren voordat E wordt ingevuld.
- Een goedratio met de vraag naar overwaardering leidt naar (1 − q)B, het geschatte foutbedrag.
- Eén nieuwe waarneming vraagt de extra 1 onder de wortel van het individuele voorspellingsinterval; een gemiddelde niet.
- Een logaritme van de respons vraagt terugtransformatie van de volledige logvoorspelling.

De bestaande vraagteksten, ID's, antwoordopties, correcte antwoordindices en bronverwijzingen zijn behouden. De inhoud volgt de bestaande projectlessen en hun bronverwijzingen. De routes zijn didactische uitleg, geen nieuwe officiële leerstof.

## Hoofdonderwerpen

| Hoofdonderwerp | Vragen | Deelonderwerpen |
|---|---:|---:|
| Basis statistiek | 19 | 3 |
| Steekproeven en schatten | 43 | 6 |
| Regressie en toetsen | 39 | 5 |
| Meervoudige regressie en modelbouw | 27 | 4 |
| Tentamenaanpak | 6 | 1 |

De 19 losse deelonderwerpen blijven bereikbaar. Hoofdgroepen lopen van makkelijk naar moeilijk en delen de bestaande MC-antwoorden, eerste pogingen en markeringen met de deelonderwerpen. Iedere vraag behoudt haar eigen les- en bronkoppeling; de totaalscore telt haar eenmaal.

## Controle

- 18 JavaScript-testonderdelen geslaagd, inclusief de nieuwe calculatorcontrole en uitgebreide hoofdgroeptests.
- 5 patroontests, 3 tests op vraaguitleg en antwoordrotatie, en 9 CSS-isolatietests geslaagd.
- Alle 134 vraagteksten, ID's, opties en correcte indices vergeleken met de vastgelegde uitgangssituatie: identiek.
- Alle 134 routes gecontroleerd op dekking; de 57 leschecks delen exact dezelfde herkenning. Ontbrekende of verouderde routes blokkeren de bouw.
- Browser: verslepen, inklappen, doorklikken, rekenen en een meerkeuzeantwoord kiezen terwijl de rekenmachine open blijft. Ook een open Cirrus-antwoord met meerdere tekstregels ingevoerd en na herladen teruggevonden.
- Browser: de rekenmachine blijft zichtbaar boven een vergrote antwoordeditor. Bij 390 × 844 passen calculator en oefenomgeving binnen de paginabreedte.
- De vier herkenningsstappen zijn in de vraagfeedback bekeken. Hoofdgroepvoortgang telt tegelijk mee bij het oorspronkelijke deelonderwerp.
- De publicatie geeft lokale scripts en stijlen een inhoudsgebonden versieparameter. Dit voorkomt de tijdens ontwikkeling gevonden combinatie van nieuwe HTML met oude scripts uit de browsercache.
- Gepubliceerd op het bestaande SRA-adres: deployment `0c1b1864-4714-4680-ba22-967c847d4f96`, status `success`, 21 september 2026 om 09:40 UTC. Acht publieke kernbestanden gecontroleerd: HTTP 200 en inhoud gelijk aan het geteste websitepakket, afgezien van het door Cloudflare toegevoegde Analytics-script in HTML. De hoofdgroepkeuze en floater zijn ook in de livebrowser bevestigd. Zie [publicatiecontrole](oefenen-publicatiecontrole-2026-09-21.json).

## Bronnen en implementatie

- [SRA-oefenvragen](https://sra-2xt.pages.dev/#tentamen/mc), met bronverwijzingen bij iedere nagekeken vraag.
- [Expliciete herkenningsroutes](../scripts/question_patterns.py), [bestaande vraagbank](../scripts/build_mc.py) en [aanvullende vragen](../scripts/completion_questions.py).
- [Hoofdgroepen en feedback](../js/mc.js), [rekenmachine en lesfeedback](../js/app.js) en [patroontests](../tests/question-patterns.py).
