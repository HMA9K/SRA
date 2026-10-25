# SRA projecthandleiding

Deze handleiding geldt onafhankelijk van het gebruikte hulpmiddel. Lees eerst `AGENTS.md` en de actuele takenmatrix `docs/gelijkloop-en-open-taken-2026-09-27.md`. Een taakstatus is alleen actueel als versie en controlebewijs erbij staan.

## Inhoud en bronvolgorde

Het onderwijsprogramma bepaalt de leerdoelen. Het aangeleverde cursusboek, formuleblad, colleges en oorspronkelijke tentamens onderbouwen de uitleg. Een oud tentamen bepaalt niet zelfstandig de huidige leerdoelen. SET wordt alleen gebruikt voor de benodigde voorkennis. Bestaande broncorrecties in `scripts/answer_audit_records.py` en de gegenereerde `answerAudit`-velden blijven zichtbaar naast het oorspronkelijke antwoordmodel.

Wijzig inhoud in de bouwmodules onder `scripts/`, nooit uitsluitend in gegenereerde data. `build_content.py`, `course_completion.py`, `lesson_reading.py` en `lesson_guides.py` bevatten lessen en uitleg. De syllabusvragen worden opgebouwd door `build_mc.py`. De brongebonden tentamenoefeningen staan in `scripts/exam_mc/`; `build_exam_practice.py` koppelt deze aan de bestaande tentamenrecords. Scan daarvoor geen PDF opnieuw. Maart en juni 2020 delen oefeningen en voortgang. De bronregistratie in de data noemt pagina en vindplaats.

`data/course.js`, `data/mc.js`, `data/exam-practice.js`, `css/study-dark.css` en de twee zelfstandige HTML-versies zijn gegenereerd. Appbediening staat onder `js/` en `css/`. De kopieën onder `vendor/study-ui` volgen het manifest van `packages/study-ui`; gebruik `scripts/sync_layout.py`.

## Lokale bronnen

Originele cursusbestanden staan lokaal buiten Git. De volledige build verwacht de bronindeling uit `build_content.sources` in de bovenliggende projectmap. In een werkboom kan zonder herinlezen worden gebouwd met `python scripts/package.py --without-sources`, mits de reeds gecontroleerde data en benodigde lokale bronkopieën beschikbaar zijn. `bronnen/tentamens/<datum>/opgaven.pdf` en `uitwerking.pdf` zijn de oorspronkelijke tentamenkopieën. `build_original_pdfs.py` maakt metadata-vrije readerkopieën onder `bronnen/original-pdfs`, zonder het origineel te veranderen. Beide documenten per tentamen zijn vereist voor publicatie.

Een volgende uitvoerder moet de werkelijke bronbeschikbaarheid controleren met `npm run test:sources`. Een verwijzing of eerdere overdracht bewijst geen toegang. Gebruik geen absolute gebruikerspaden in gedeelde documenten. Voeg geen volledige cursusboeken aan de website toe.

## Bouwen en controleren

1. Installeer de bouwvereisten met `python -m pip install -r requirements-build.txt`.
2. Bouw met `python scripts/package.py --without-sources`; gebruik `python scripts/package.py` alleen als de oorspronkelijke bronindeling beschikbaar is. Bij nieuwe oorspronkelijke PDF's: `python scripts/build_original_pdfs.py`.
3. Draai `npm test`, `npm run test:sources`, `npm run test:audit`, `npm run test:patterns` en `npm run test:learning` bij inhoudswijzigingen. Controleer kleur-/stijlwijzigingen met `npm run test:styles`. De Cirrus-stijltest vereist de CAFA2-CSS-referentie in `tmp/cafa2-layout-reference/css`.
4. Gebruik de bestaande browsertests bij bediening: `npm run test:learning-browser`, `npm run test:parked-browser`, `node tests/pdf-reader-browser.cjs` en `node tests/learning-layout-browser.cjs`. Stel zo nodig `PLAYWRIGHT_PATH`, `CHROMIUM_PATH` en de in de test genoemde proef-URL in. Bewaar schermafbeeldingen lokaal onder `tmp/`.
5. Geef bij een controle aan of deze lokaal, in de preview of in productie is uitgevoerd. Browseremulatie is geen fysieke-telefoontest.

## Samenwerken en publiceren

Werk op een eigen branch of werkboom vanuit de actuele hoofdtak. Bewaar bestaande lokale wijzigingen. Eén schrijver per bestand; leg bij expliciet verdeelde uitvoering de bestanden en afhankelijkheden vast. Een overdracht bevat taakvoorwaarden, branch/commit, gewijzigde bestanden, actuele bewijzen, bronbeschikbaarheid en resterend werk, zonder persoonlijke gespreksinhoud. Issue #5 is op 25 oktober 2026 gesloten als achterhaald door deze handleiding en de actuele Duo-werkwijze. Een afzonderlijke overdrachtstest is geen open SRA-taak; bij daadwerkelijk gevraagde samenwerking blijft feitelijke bronbeschikbaarheid te controleren. Er wordt geen geslaagde overdrachtstest geclaimd.

Productie: <https://sra-2xt.pages.dev/>. Publiceer uitsluitend de complete map `output/site`, opgebouwd met `python scripts/prepare_publication.py`. Deze stap controleert bronbestanden en bewaart de bestaande meet- en privacy-integratie met een vastgezette controlesom. Automatische productie-uitrol vanuit de bronloze Git-clone staat uit; PR-previews vanuit Git zijn geen bewijs voor de complete bronpublicatie.

Publicatieroute: lokale controles, volledige Cloudflare Pages-preview met `wrangler pages deploy output/site --project-name sra --branch <werkbranch>`, pull request, geslaagde controles en previewbeoordeling, samenvoegen, daarna dezelfde uitvoermap met `--branch main --commit-hash <mergecommit>` publiceren. Vergelijk voor en na publicatie de actuele Git-hoofdtak, andere publicaties, het productieadres en de bestanden van de geteste build. Voeg geen onbeoordeelde nieuwe commits of wijzigingen toe. De bestaande repository heeft geen bevestigde verplichte branchcontroles; een groen lokaal resultaat is geen bewijs van ingeschakelde branchbeveiliging.

Privacy blijft een publicatievoorwaarde. Controleer tekst, metadata, bestandsnamen, commit-auteur en geschiedenis. Bronafbeeldingen, leermateriaal, berekeningen, toegankelijkheid en opgeslagen antwoorden mogen niet verdwijnen door vereenvoudiging.

Bronnen: [SRA](https://github.com/HMA9K/SRA), [takenmatrix](https://github.com/HMA9K/SRA/blob/main/docs/gelijkloop-en-open-taken-2026-09-27.md), [overdrachtsopdracht #5](https://github.com/HMA9K/SRA/issues/5).
