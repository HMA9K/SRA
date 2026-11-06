# Formules bij uitwerkingen

Gebruikerseis 6 november 2026: bij de uitleg van oefenvragen en tentamenvragen staan de gebruikte formule en de verwijzing naar het formuleblad, op dezelfde manier als in de leerstof.

- `scripts/step_formulas.py` koppelt iedere rekenstap aan een formule en schrijft `data/step-formulas.js`. De bouw draait dit na `data/course.js`.
- Formule, label en verwijzing komen uit de lessen. Alleen wat geen les toont staat in `EXTRA` of `TEXT`.
- De schatter van de vraag bepaalt het nummer: een puntschatting is formule 3, 9, 16, 21 of 28.
- Een formule staat één keer per vraag, bij de eerste stap die haar gebruikt. Noemt de stap de formule al in letters, dan staat alleen de verwijzing erbij.
- Stappen die alleen aflezen of concluderen krijgen geen formule.
- Nieuw tentamen: draai de bouw en bekijk welke rekenstappen geen formule kregen. Vul zo nodig `STEPS` aan.

Een formule die niet letterlijk op het blad staat maar eruit volgt, draagt de verwijzing "Afgeleid van formule X".

Open tentamens: boven het oorspronkelijke antwoordmodel staat het blok "Formules bij deze vraag", met de formules uit de uitwerking van dezelfde bronvraag. Het antwoordmodel zelf blijft ongewijzigd.

Controle: `node tests/step-formulas.cjs`, onderdeel van `npm test`.
