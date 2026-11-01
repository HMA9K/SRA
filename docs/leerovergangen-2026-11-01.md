# Zes overgangen in de leerstof

De lessen beginnen bij een klein voorbeeld en verbinden dat met de bestaande uitleg. Alle eerdere leerstof, bronnen, oefeningen, les-ID's en opgeslagen voortgang blijven behouden.

- Les 1: populatie en steekproef vóór parameters en de SET-opfrisser.
- Les 2: de blokken over rekenregels en kwadrateren vormen één doorlopende uitleg. Gemiddelde, afwijkingen en kwadraten hebben elk een eigen grafiek bij de uitleg; daarna volgen variantie, standaardafwijking, rekenvolgorde en het verschil tussen de twee sommen. De standaardfout volgt vóór de rekenvorm met totalen.
- Les 3: losse waarden tegenover de gemiddelden van alle zestien mogelijke geordende paren, met teruglegging. Dit kleine voorbeeld claimt geen normaliteit.
- Les 8: een korte introductie van strata vóór de bestaande uitbreidingsberekening. De volledige behandeling in les 9 blijft staan.
- Les 16: uitleg van ln en exp vóór het modellenoverzicht, met hetzelfde exponentiële voorbeeld op oorspronkelijke en logschaal.

De voorbeelden hebben geen wisselknoppen. Elke kleine grafiek staat rechts van de eigen uitleg. Tekst en figuur lopen op smalle schermen onder elkaar door. De grafieken zijn maximaal 280 pixels breed; de stippenfiguren hebben een uitsnede zonder lege ruimte onder de laatste rij.

`tests/learning-transitions.py` vergelijkt de volledige cursus vóór en na de nieuwe bouwstap, inclusief alle zinnen en formules uit de samengevoegde blokken, en controleert de rekenbasis. `tests/learning-transitions-browser.cjs` controleert de zes overgangen op vijf schermbreedtes in licht en donker, inclusief de plaats van de grafiek, het samenvoegen, compacte tussenruimte, leesbare grafieklabels en de twee zelfstandige HTML-versies. Dit is browseremulatie, geen fysieke-telefoontest. De bestaande projectcontroles voor inhoud, bronnen, antwoorden, stijlen, toetsenbordbediening en antwoordbehoud blijven van toepassing.

De bundelaar voegt de bestaande paginascripts alleen bij de documenttitel in. Toegankelijke SVG-titels krijgen daardoor geen extra scripts.

Bronnen: [bestaande SRA-leerstof](https://sra-2xt.pages.dev/#leren), [projecthandleiding](https://github.com/HMA9K/SRA/blob/main/PROJECT_GUIDE.md). De verkleinde voorbeelden zijn didactische illustraties bij deze stof.
