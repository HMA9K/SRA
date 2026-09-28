# Gemeenschappelijke rekenmachine

SRA en CAFA2 gebruiken identieke bestanden voor `js/calculator.js`, `js/calculator-input.js`, `css/calculator.css` en `css/calculator-cirrus.css`. Pas de component in beide repositories samen aan; behoud identieke bestandsinhoud en vernieuw de assetversies bij publicatie.

SRA stelt uitsluitend zijn eigen opslagsleutel en API-alias in via `CourseCalculatorOptions` in `js/app.js`. Daardoor blijven bestaande SRA-historie, geheugen, invoer en vensterformaat beschikbaar. De statistische rekenfuncties in `js/math.js` blijven afzonderlijk beschikbaar voor de leerbladen.

`tests/calculator-course-browser.cjs` controleert bestaande opslag en de zelfstandige HTML. Met `CALCULATOR_PEER_URL` vergelijkt deze controle ook de opbouw en berekende CSS van beide apps, in normale, kleine en donkere weergave. `CALCULATOR_URL` en `CALCULATOR_PORTABLE_URL` wijzen naar de te controleren SRA-versies.

Broncomponent: [CAFA2-rekenmachine](https://github.com/HMA9K/CAFA2/blob/main/js/calculator.js).
