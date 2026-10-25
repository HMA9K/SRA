# Uitvoering van de geparkeerde SRA-taken

## Inhoud en bediening

De 224 bestaande tentamenrecords zijn gekoppeld aan 234 unieke oefeningen. De 28 vragen van juni 2020 delen hun inhoud en voortgang met maart 2020. Zelfstandige onderdelen zijn gesplitst; samenhangende berekeningen blijven gezamenlijk waar dezelfde uitkomst wordt gevraagd. De 175 eerdere syllabusvragen, antwoordvolgorde en opslag-ID's blijven ongewijzigd. De volledige bank telt 409 unieke oefeningen. De machineleesbare koppelingen staan in `exam-practice-coverage.json`.

Elke tentamenoefening behoudt de oorspronkelijke casus, volledige bronvraag, relevante bronbeelden en officiële uitwerking. Benodigde uitkomsten uit eerdere vragen staan afzonderlijk bij de casus. De al gecontroleerde bronnotities blijven naast het originele antwoordmodel staan. Afleiders zijn per vraag opgesteld; juiste opties zijn inhoudelijk gecontroleerd tegen de bestaande `answerAudit`-notities. De 96 bestaande onafhankelijke rekencontroles slagen. Er zijn geen nieuwe externe leerstofbronnen of nieuwe PDF-transcripties gebruikt.

De bronfilter geldt voor aantallen, starten/hervatten, navigatie, resultaten, voltooien en resetten. De selectie blijft bewaard. Dezelfde oefening onder meerdere onderwerpen gebruikt één antwoordrecord. Eigen uitwerkingen gebruiken dezelfde bestaande antwoordeditor als tentamens, inclusief bewerkbare tabellen en opgeslagen HTML. Export/import omvat antwoorden, markeringen en eigen uitwerkingen. SRA krijgt geen financiële voorraadmatrix of journaalpostvorm zonder bijbehorende statistische bronvraag. Er waren geen eerdere tentamen-MC-ID's die bij de nieuwe splitsing als antwoord moesten worden overgezet; oorspronkelijke Cirrus-pogingen worden niet omgezet of verwijderd.

Het MC-casuspaneel ondersteunt slepen, pijltjestoetsen, Home/End, inklappen en bewaarde breedte. Op mobiel staat het boven de vraag. Het lesmenu heeft daarnaast een eigen bewaarde breedte en inklapstand. Opnieuw beginnen opent eerst de intro. Pas na expliciet starten verschijnt een nieuwe lege poging, terwijl de vorige bij Voltooid blijft. Alle tentamenvoortgang resetten vraagt bevestiging en bewaart MC-voortgang. Opslagfouten annuleren de vervanging; een ander geopend tabblad verwerkt de reset.

## Originele PDF's

Alle tien tentamens hebben opgaven en uitwerking in de linker en rechter PDF-lezer. Twintig metadata-vrije kopieën bevatten samen 200 pagina's. Paginatelling, pagina-inhoud, tekst en afmetingen zijn vergeleken; ook de gerenderde pixels van alle 200 pagina's waren gelijk. De oorspronkelijke lokale bestanden blijven behouden. Het bestand `original-pdfs-validation.json` legt de structurele vergelijking vast.

De lezer is overgenomen uit [CAFA2 commit 2450804](https://github.com/HMA9K/CAFA2/tree/2450804030812b8552c1b0cc2e99b55830fb66c4/pdf-reader), met behoud van de PDF.js-licenties. Alleen de aansluiting op SRA-data en routes is aangepast. De bestaande vraag en editor blijven staan wanneer een paneel opent of sluit. Arceringen worden lokaal opgeslagen en wijzigen geen gepubliceerde bron. Herladen bewaart arceringen en leespositie; de bestaande reader keert bij heropenen terug naar inhoudsbreedte. Een SRA-assistent en samengestelde toetsen bestaan niet in deze app en zijn daarom geen uitgevoerde integraties.

## Controlebewijs

- `npm test`: bestaande inhoud, rekenfuncties, navigatie, bediening, opslag en nieuwe bronkoppelingen.
- `npm run test:sources`: alle lokale bron-PDF's en bestaande tentamenkoppelingen.
- `tests/exam-practice.cjs`: 224/224 koppelingen, 234 unieke nieuwe ID's, behoud van broninhoud en bestaande vragen, gedeelde voortgang, concepten, reset bij geweigerde opslag.
- `tests/parked-controls-browser.cjs`: herstart, intro zonder gegevensverlies, extra tijd, reset annuleren/bevestigen/opslagfout/ander tabblad, lesmenu met muis/toetsenbord/herladen/mobiel.
- `tests/exam-practice-browser.cjs`: alle bronselecties en totalen, casusbediening, eigen tekst via de echte editor, antwoord en concept na herladen, export/import, reset, desktop en 390/320 pixels in licht en donker.
- `tests/original-pdfs-browser.cjs`: knoppen bij tien tentamens, beide readers, heropenen en vraagwisseling zonder vervangen van de linker reader of antwoorden, mobiel.
- `tests/pdf-reader-browser.cjs`: echte muisselectie voor arceren, kleurwijziging, opslag, herladen, verwijderen, leespositie, inhoudsbreedte en smalle werkbalk.
- `tests/learning-revision-browser.cjs`: alle negentien lessen bij vier schermbreedtes en twee thema's, formules, bronfiguren, voorbeelden, antwoorden en zelfstandige versies.

Dit zijn technische controles en browsercontroles. Er is geen fysieke telefoon gebruikt en geen nieuwe SPSS-analyse op ontbrekende ruwe data uitgevoerd. Controle van de complete preview en productie hoort bij de publicatieronde; een bronloze Git-preview is daarvoor onvoldoende.

## Nog afzonderlijk open

De gezamenlijke distributie moet beide repositories nog vanuit dezelfde versiebron bedienen. Ontvangst in de echte GoatCounter-dashboards is niet bewezen door de aanwezige meetcode. `PROJECT_GUIDE.md` en de verwijzingen vanuit beide instructiebestanden vullen het documentatiedeel van [issue #5](https://github.com/HMA9K/SRA/issues/5) in; een echte overdracht tussen twee uitvoerders is nog niet beproefd. Deze punten worden niet als afgerond gemarkeerd.

Bronnen: [SRA-takenmatrix](https://github.com/HMA9K/SRA/blob/main/docs/gelijkloop-en-open-taken-2026-09-27.md), [historische MC-opdracht](https://github.com/HMA9K/SRA/blob/main/docs/cafa2-mc-vervolgtaken-2026-09-26.md), bestaande cursus- en tentamenrecords en [CAFA2-PDF-specificatie](https://github.com/HMA9K/CAFA2/blob/main/docs/originele-tentamen-pdfs.md).
