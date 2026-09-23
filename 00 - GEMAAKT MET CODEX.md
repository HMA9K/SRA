# SRA: gemaakte bestanden

Deze map bevat de met Codex gemaakte interactieve SRA-leeromgeving.

- Start met **SRA interactieve samenvatting.html**.
- **index.html** is de onderhoudbare website.
- **SRA leesversie.html** opent zonder scripts.
- **output** bevat de volledige download en de versie zonder bronbestanden.
- **tmp** bevat tijdelijke controles en referentiemateriaal voor de bouw.
- **bronnen** bevat kopieën van het aangeleverde cursusmateriaal. De originele documenten blijven in de bovenliggende SRA-map.
- **Tentamens oefenen** bevat een Cirrus-dashboard met de MC-reeks en de originele tentamens per datum. De tentamenanalyse bevat vraagtypen, onderwerpen en een opgaveoverzicht per tentamen.
- **SRA oefenvragen** bovenaan het dashboard opent 134 MC-vragen in 19 onderwerpen. Elk onderwerp heeft drie oplopende niveaus, uitleg, patroonherkenning en een eigen voortgangsoverzicht.
- **Tentamenanalyse** heeft een eigen kaart op de hoofdpagina, tussen Oefenvragen en Tentamens.
- **Formules begrijpen en uitproberen** opent het centrale doorzoekbare overzicht met 19 onderwerpen en interactieve rekenbladen.
- **Grafiekencontrole** beschrijft de controle van alle 19 werkbladen, de koppeling tussen betrouwbaarheid en t, en welke bediening op welke uitkomst werkt. Zie **docs/grafiekencontrole.md**.
- **Klikbare formulecomponenten** geven in twee of drie zinnen uitleg over het aangeklikte symbool of de bewerking. Dit werkt in lesformules, formulegidsen, rekenregels en antwoorduitleg. De betekenis is afgestemd op het onderwerp; zie **docs/klikbare-formulecomponenten.md**.
- **vendor/cafa2-cirrus** bevat de overgenomen CAFA2-bediening en herkomstgegevens. De integratie omvat editor, klok, pauzeren, secties, overzicht, inzage en scorerapport. Zie **docs/cirrus-en-formuleoverzicht.md**.
- **bronnen/tentamens** bevat de originele PDF's en gemaakte pagina-afbeeldingen voor de vraagweergave; **docs/tentamenanalyse-en-dashboard.md** beschrijft de herkomst en controles.

De documentatie, code en samengestelde uitleg in deze map zijn gemaakte werkbestanden. De bron-PDF's en referentierepositories in tmp blijven herkenbaar als oorspronkelijke bronnen.

Repository: https://github.com/HMA9K/SRA


### Tentamenopmaak gelijkgetrokken met CAFA2

De ontbrekende CAFA2-basisstijl is toegevoegd. SRA-stijlen worden tijdens volledige
tentamens apart uitgeschakeld en daarna hersteld. Dashboard, welkom, vraagpagina,
vragenoverzicht en nakijken gebruiken de oorspronkelijke CAFA2-regels.
Het minutenveld is hersteld. Zie `docs/cirrus-en-formuleoverzicht.md` voor herkomst,
controle en de twee nieuwe regressietests. Ook de zelfstandige HTML bevat dit herstel.
