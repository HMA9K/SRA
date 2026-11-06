# Formules bij uitwerkingen

Gebruikerseis 6 november 2026: bij de uitleg van oefenvragen en tentamenvragen staan de gebruikte formule en de verwijzing naar het formuleblad, op dezelfde manier als in de leerstof.

- `scripts/step_formulas.py` koppelt iedere rekenstap aan een formule en schrijft `data/step-formulas.js`. De bouw draait dit na `data/course.js`.
- Formule, label en verwijzing komen uit de lessen. Alleen wat geen les toont staat in `EXTRA` of `TEXT`.
- De schatter van de vraag bepaalt het nummer: een puntschatting is formule 3, 9, 16, 21 of 28.
- Een formule staat één keer per vraag, bij de eerste stap die haar gebruikt. Noemt de stap de formule al in letters, dan staat alleen de verwijzing erbij.
- Stappen die alleen aflezen of concluderen krijgen geen formule.
- Nieuw tentamen: draai de bouw en bekijk welke rekenstappen geen formule kregen. Vul zo nodig `STEPS` aan.

De antwoordmodellen bij de open tentamens zijn oorspronkelijke documenten en vallen hierbuiten.

Controle: `node tests/step-formulas.cjs`, onderdeel van `npm test`.
