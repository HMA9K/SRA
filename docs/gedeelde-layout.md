# Dezelfde layout in verschillende repositories

De vormgeving wordt onderhoudbaar door algemene componenten een eigen bron te geven. Een **component** is hier een herbruikbaar onderdeel zoals de header of overzichtstabel. **Ontwerptokens** zijn centrale CSS-variabelen voor onder meer kleuren, afstanden en lettertypen.

## Huidige situatie

- SRA bevat een lokale distributie `packages/study-ui` versie 1.1.1, afgeleid van [CAFA2 op commit 382add0fb67ed503438876e40dbba46497e02c02](https://github.com/HMA9K/CAFA2/tree/382add0fb67ed503438876e40dbba46497e02c02). Deze bron omvat ook `css/question-overview.css`, het nieuwste compacte vragenoverzicht. Versie 1.1.1 voegt de header en lichtmodus van de gepubliceerde CAFA2-versie van 23 september 2026 toe. Het pakket wordt lokaal beheerd.
- `scripts/sync_layout.py` kopieert deze lokale bron naar `vendor/study-ui`. Het controlemanifest vermeldt versie, herkomst en SHA-256-controlesommen van vier CSS-bestanden en het themascript. SHA-256 is een vingerafdruk waarmee de controle een gewijzigde kopie herkent.
- Er is nog geen derde repository aangemaakt. CAFA2 heeft sinds 23 september 2026 dezelfde ondertitel en een Meer-menu, maar gebruikt deze gedeelde distributie nog niet. De twee apps zijn dus nog niet aan dezelfde bron gekoppeld.
- De gebruiker heeft [HMA9K/SRA](https://github.com/HMA9K/SRA) op 18 september 2026 aangemaakt. Deze repository bevat de SRA-app; de lokale bron-PDF's blijven via `.gitignore` uitgesloten. De centrale layoutrepository en aansluiting van CAFA2 blijven een afzonderlijke stap.

## Wat gezamenlijk wordt beheerd

| Gedeeld in study-ui | Onderdeel van de eigen app |
|---|---|
| Kleuren, randen, controlfonts, headerhoogte en zijbalkbreedte | Inhoud, bronnen en toetsvragen |
| Header, navigatie, titelstrook, knoppen en overzichtstabellen | Routering, antwoordcontrole en opslag |
| Scorekleuren en vormgeving van resultaatrijen | SRA-formules, grafieken en rekentabellen |
| Compact vragenoverzicht met nummerblokken en antwoordstatus | Betekenis en aantallen van vragen, fase-indeling en antwoordlogica |

De statistiekpresentatie blijft in SRA's `css/presentation.css`. Een overzichtstabel en een numerieke rekentabel hebben een verschillende functie. Alleen de overzichtstabel krijgt `study-table`; rekenmatrixen behouden hun uitlijning en schuifgebied.

Het compacte vragenoverzicht is generiek gemaakt via `study-overview-*`. Op mobiel gebruikt het maximaal twee kolommen, zodat de nummers en statuslabels leesbaar blijven. De tekstuele status en huidige vraag worden door de app aangeleverd; de gedeelde laag verzorgt alleen de presentatie.

## Een gezamenlijke wijziging uitvoeren

1. Pas algemene stijlen aan in `packages/study-ui`. De kop en lichtmodus staan in `header.css`, `theme.css`, `theme.js` en `dark-palette.css`.
2. Verhoog de pakketversie in `package.json` en `provenance.json`. Leg een nieuwe externe broncommit vast als een nieuwe CAFA2-versie is overgenomen. De huidige `source.commit` verwijst naar de CAFA2-herkomst, niet naar een nog niet bestaande gedeelde repository.
3. Synchroniseer SRA met `python scripts/sync_layout.py` en controleer met `python scripts/sync_layout.py --check`.
4. Bouw de interactieve HTML en het lokale ZIP-pakket opnieuw met het bestaande SRA-bouwproces. Controleer navigatie en overzichten op desktop en mobiel, en controleer dat formules en rekentabellen leesbaar blijven.
5. Zodra CAFA2 ook de componentklassen en distributie gebruikt, voer dezelfde versie-update en browsercontrole daar uit. Publiceer daarna beide apps volgens hun eigen publicatieproces.

Een wijziging aan een bestand in de ene repository verandert de andere repository niet vanzelf. Gezamenlijk onderhoud betekent een gedeelde release en een update van beide afnemers. Build-automatisering kan die updates later uitvoeren of voorstellen.

## Overzetten naar een derde repository

De inhoud van `packages/study-ui` kan ongewijzigd de basis vormen voor een zelfstandige `study-ui` repository. Leg versies vast met release-tags. Check de gekozen release lokaal uit en gebruik in beide apps hetzelfde bronpad:

```powershell
python scripts/sync_layout.py --source 'C:\Projects\study-ui'
python scripts/sync_layout.py --source 'C:\Projects\study-ui' --check
```

De bron moet een lokale map zijn. Het script haalt niets op van GitHub en wijzigt uitsluitend `tokens.css`, `shell.css`, `header.css`, `theme.css`, `theme.js` en `manifest.json` in de distributiemap. Bij `--check` wordt niets geschreven; een afwijkende of ontbrekende distributie geeft exitcode 1, ongeldige brongegevens exitcode 2. Het manifest bevat geen gebruikersnaam of lokaal absoluut bronpad.

Zet de gesynchroniseerde CSS en het manifest in beide repositories onder versiebeheer. Gebruik een concrete release, zodat dezelfde build dezelfde vormgeving oplevert. Een toekomstige CI-controle kan `--check` gebruiken nadat de gekozen release is uitgecheckt. Een wijziging hoort in de bron van het pakket; handmatig bewerken van `vendor` wordt door de controle herkend.

Publiceer geen directe stylesheetlink naar een bewegende `main`-branch. Een lokaal opgenomen release blijft offline beschikbaar en kan samen met de website worden teruggedraaid.

## Alternatief: één repository

Een **monorepo** bevat beide apps en de gedeelde vormgeving in één repository. Dan kan één commit de algemene stijl en beide apps tegelijk aanpassen. Dat vereenvoudigt gezamenlijke wijzigingen, maar vraagt het verplaatsen van code en het aanpassen van publicatie-instellingen. Afzonderlijke repositories met een gedeelde release passen beter bij de huidige situatie.

## Bronnen

- [CAFA2: kleuren en basisknoppen](https://github.com/HMA9K/CAFA2/blob/382add0fb67ed503438876e40dbba46497e02c02/css/app.css)
- [CAFA2: dashboard en tabellen](https://github.com/HMA9K/CAFA2/blob/382add0fb67ed503438876e40dbba46497e02c02/css/exams.css)
- [CAFA2: header en letterknoppen](https://github.com/HMA9K/CAFA2/blob/382add0fb67ed503438876e40dbba46497e02c02/css/exam-document.css)
- [CAFA2: scores en resultaatrijen](https://github.com/HMA9K/CAFA2/blob/382add0fb67ed503438876e40dbba46497e02c02/css/exam-experience.css)
- [CAFA2: compact vragenoverzicht](https://github.com/HMA9K/CAFA2/blob/382add0fb67ed503438876e40dbba46497e02c02/css/question-overview.css)
