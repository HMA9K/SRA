# Zes overgangen in de leerstof

De lessen beginnen bij een klein voorbeeld en verbinden dat met de bestaande uitleg. Alle eerdere tekstblokken, bronnen, oefeningen, les-ID's en opgeslagen voortgang blijven behouden.

- Les 1: populatie en steekproef vóór parameters en de SET-opfrisser.
- Les 2: gemiddelde, afwijkingen en kwadraten naast elkaar; daarna standaardafwijking tegenover standaardfout, vóór de rekenvorm met totalen.
- Les 3: losse waarden tegenover de gemiddelden van alle zestien mogelijke geordende paren, met teruglegging. Dit kleine voorbeeld claimt geen normaliteit.
- Les 8: een korte introductie van strata vóór de bestaande uitbreidingsberekening. De volledige behandeling in les 9 blijft staan.
- Les 16: uitleg van ln en exp vóór het modellenoverzicht, met hetzelfde exponentiële voorbeeld op oorspronkelijke en logschaal.

De voorbeelden hebben geen wisselknoppen. CSS-subgrid lijnt de grafieken, berekeningen, uitkomsten en toelichtingen per rij uit. Op smalle schermen blijven alle stappen onder elkaar zichtbaar.

`tests/learning-transitions.py` vergelijkt de volledige cursus vóór en na de nieuwe bouwstap en controleert de rekenbasis. `tests/learning-transitions-browser.cjs` controleert de zes overgangen op vijf schermbreedtes in licht en donker, inclusief tekstuitlijning, leesbare grafieklabels en de twee zelfstandige HTML-versies. Dit is browseremulatie, geen fysieke-telefoontest. De bestaande projectcontroles voor inhoud, bronnen, antwoorden, stijlen, toetsenbordbediening en antwoordbehoud blijven van toepassing.

De bundelaar voegt de bestaande paginascripts alleen bij de documenttitel in. Toegankelijke SVG-titels krijgen daardoor geen extra scripts.

Bronnen: [bestaande SRA-leerstof](https://sra-2xt.pages.dev/#leren), [projecthandleiding](https://github.com/HMA9K/SRA/blob/main/PROJECT_GUIDE.md). De verkleinde voorbeelden zijn didactische illustraties bij deze stof.
