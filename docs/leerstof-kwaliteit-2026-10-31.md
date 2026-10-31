# Leerstof: duidelijkere uitleg, bronnen per blok en samenvattingen

Herziening van 30 en 31 oktober 2026, uitgevoerd als gezamenlijke opdracht (Duo, vorm Tandem): Claude Code herzag de lessen 1–9 en de gedeelde structuur, Codex de lessen 10–19. Beide deelnemers controleerden elkaars deel; de bevindingen zijn verwerkt.

## Wat is veranderd

| Onderdeel | Wijziging |
| --- | --- |
| Uitleg per les | De kernblokken van alle 19 lessen zijn herschreven op basis van het boek (H3.2, H8, H9 en H10). Eerst het idee, dan waarom het werkt, dan de rekenstappen en de betekenis in de casus. Doelen, cijfers, berekeningen, figuren en begripchecks zijn behouden. |
| Bronnen | Blokken bevatten geen bronvermelding meer in de tekst. Ieder uitlegblok en ieder uitgewerkt voorbeeld heeft bronnummers [n]; de genummerde bronnenlijst staat onderaan de les en is standaard ingeklapt. Een klik op [n] opent de lijst en toont die bron. Dezelfde nummering staat in de leesversie. |
| Kern en Vervolg | Gesplitst en uitgebreid: de Kern vat de les samen (minstens vier zinnen), het Vervolg legt de brug naar de volgende les. |
| Schattervergelijking | Nieuw blok "De vier schatters vergeleken" (les regressieschatter): keuze, benodigde gegevens, puntschatting, spreiding, voorwaarden, keuzestappen en de resultaten uit het boek, inclusief gestratificeerde MPU. |
| Andere vergelijkingen | Alleen waar ze helpen: grensmethoden en allocatiemethoden bij stratificatie, selectiemethoden bij modelbouw. |
| Stratificatie | Logische leesvolgorde: opdelen, grenzen, allocatie, schatten, uitbreiden. |
| Samenvattingen | Per hoofdonderwerp (Basis, Schatten, Regressie, Meervoudige regressie) op de pagina Leren en in de leesversie, met het tentamengewicht. |

## Tentamenweging

De diepgang volgt `docs/tentamen-puntenanalyse-2026-10-25.md`. Validatie met testset en MSPR komt in geen van de negen onderzochte tentamens voor (0 van 900 punten). Dat staat bovenaan de les validatie; de samenvatting meldt het alleen. De basislessen hebben geen eigen punten maar zijn voorkennis voor alle rekenvragen. Tijdsvertraging en autocorrelatie (5 van 900 punten) blijven compact, met de uitgebreide uitwerking als naslag.

## Bronnuances

- Tentamen 17 maart 2025, opgave 1: de gegeven kwadratensom van de verschillen is kleiner dan bij 43 foutposten mogelijk is. De officiële rekenroute blijft; de les meldt het verschil.
- Boek, partiële F bij de casus met ln_dens: het boek deelt door de MSE van het kleinere model; de les gebruikt de MSE van het uitgebreide model en verwijst naar het formuleblad.
- De eigen quotiëntcasus is consistent gemaakt (70 in plaats van 40 afwijkingen), met een rekencontrole.

## Controles

Lokaal geslaagd: `npm test`, `test:sources`, `test:audit`, `test:patterns`, `test:learning` (inclusief `tests/lesson-reading.py` en `tests/regression-reading.py`), `test:styles` en de browsercontrole `test:learning-browser` (19 lessen, 1366/768/390/320 px, licht en donker, bronnummers, samenvattingen op 320 px). Browsercontrole is headless uitgevoerd; geen fysieke telefoon.

## Bewuste keuzes en open punten

- Kern, Vervolg en de samenvattingen krijgen geen eigen bronnummer: ze vatten de les samen. De samenvattingen zeggen waar de bronnen staan.
- De puntenanalyse staat als aanvullend document in de genummerde bronnenlijst; het studierouteblok verwijst er met een bronnummer naar.
- Tabelrij- en kolomverwijzingen in rekenstappen blijven staan: het opzoeken in de tabellenbundel is de vaardigheid die wordt geoefend.
- De Review-route kon de oorspronkelijke PDF's niet visueel lezen; formules uit de boektekst zijn waar nodig op de PDF-pagina gecontroleerd door de bouwende deelnemer.
