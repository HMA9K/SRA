# Gelijkloop van CAFA2 en SRA

Bijgewerkt op 25 oktober 2026. De oorspronkelijke gezamenlijke controle dateert van 27 september 2026. Dit document is de actuele ingang voor de gezamenlijke bediening en de nog openstaande verschillen. Oudere verslagen blijven historische controles; hun vinkjes bewijzen niet de actuele toestand van de andere omgeving.

## Gezamenlijke opzet

Algemene wijzigingen aan navigatie, thema, paginakoppen en hulpmiddelen moeten in dezelfde wijzigingsronde in beide omgevingen worden verwerkt en getest. Vakinhoud, formules, bronmateriaal en aantallen vragen blijven cursusgebonden. Een financiële voorraadmatrix wordt niet zonder bijbehorende statistische vraag aan SRA toegevoegd.

De bestanden `js/exam-cirrus-layout.js`, `css/exam-cirrus-layout.css` en `tests/learning-layout-browser.cjs` waren bij de gezamenlijke controle identiek. Op 25 oktober is in SRA een cursusgebonden routevoorwaarde toegevoegd: Dashboard/Onderwerpen verschijnt in de paginakop alleen bij oefenen en tentamens, niet bij leerstof of naslag. De SRA-browsercontrole toetst dit onderscheid. Dit is geen nieuwe wijziging of controle van CAFA2. De cursuscontrollers blijven verantwoordelijk voor routes, antwoorden en opslag. Er is nog geen centrale distributie die beide repositories automatisch bijwerkt.

## In deze wijziging uitgevoerd

- Eén paginakop met Home, de passende terugbestemming, titel en Meer voor home, overzichten, oefenvragen en leerpagina's. Tentamens behouden de goedgekeurde kop.
- Bovenbalk in vaste volgorde: lichtmodus, klok en opslagvinkje wanneer van toepassing, rekenmachine, tekstgrootte en profiel. Het vinkje blijft de werkelijke opslagstatus volgen.
- Geen zichtbaar Home-kruimelpad en geen extra lange route boven oefenvragen. Meetnamen en browserpaginatitels blijven beschikbaar.
- Vraagnummer en Casus-bediening in de vraagkolom; dezelfde uitlijning bij open en gesloten casus. De CAFA2-oefenruimte rekent de nieuwe kophoogte mee, zodat de onderbalk bereikbaar blijft.
- Begrippen vóór Voortgang in Meer en de kleinere home-tegels. SRA heeft dezelfde kleine naslagtegels met zijn eigen bestemmingen.
- Introductie is niet meer zichtbaar of via Tab bereikbaar in de SRA-MC-knoppenbalk, overeenkomstig CAFA2.

`tests/learning-layout-browser.cjs` controleert echte routes, Home, Meer en Escape, knopvolgorde, desktop en mobiel, donkere modus, het bewaren van een SRA-MC-antwoord, de CAFA2-casusschakelaar en de samenvattingsroute. De bestaande tentamencontrole blijft afzonderlijk van deze controle.

## Actuele takenmatrix

| Onderdeel | CAFA2 | SRA | Nog nodig |
|---|---|---|---|
| Algemene paginakop, Home, Meer, thema en knopvolgorde | Uitgevoerd in deze wijziging | Uitgevoerd in deze wijziging | Gezamenlijk onderhouden en beide browsercontroles uitvoeren bij een wijziging |
| Originele PDF-panelen | Aanwezig | Uitgevoerd: 20 documenten, reader en arceringen | Publicatiecontrole per release; geen SRA-assistent of samengestelde toets aanwezig |
| MC-koppeling van iedere bronvraag | Aanwezig | Uitgevoerd: 224/224 records, 234 unieke oefeningen | Bronwijzigingen via de dekkingsmatrix onderhouden |
| MC-casus, eerdere uitkomsten en gedeelde voortgang | Aanwezig | Uitgevoerd, oorspronkelijke casus/bronbeelden/uitwerking behouden | Onderhoud bij nieuwe bronvragen |
| Bronfilter | Aanwezig | Uitgevoerd voor aantallen, routes, resultaten en reset | Geen afzonderlijke open implementatietaak |
| Vraaggerichte patroonherkenning | Aanwezig | Aanwezig bij 175 syllabusvragen en 234 tentamenoefeningen | Brongebonden inhoud blijven beoordelen bij wijzigingen |
| Zelf uitwerken | Aanwezig | Bestaande tentameneditor hergebruikt, concept in export/import | Financiële matrices en journaalposten zijn zonder SRA-bronvraag niet van toepassing |
| Tabellen, grafieken en casusschema's | Aanwezig | Oorspronkelijke statistische bronbeelden en HTML behouden | Geen nieuwe reconstructie uit losse getallen |
| Opnieuw beginnen en tentamenreset | Aanwezig | Uitgevoerd en getest op behoud, annuleren, opslagfout en ander tabblad | Geen afzonderlijke open implementatietaak |
| Rekenstappen en formuleoverzicht | Bestaande uitleg | Lesinleiding, voorbeeldvraag, slot en formuleweergave verbeterd; bestaande rekencontroles slagen | College-8-brondata inmiddels gevonden en vijf modellen lokaal herberekend; zie de vervolgcontrole. Andere ontbrekende ruwe brondata blijven afzonderlijk te beoordelen |
| Compactere spacing | Vraagruimte compacter | Lessen en oefenruimte gecontroleerd, vier breedtes en licht/donker | Fysieke telefoontest niet uitgevoerd |
| Verstelbaar en inklapbaar leerpaneel | Eigen readerbediening | SRA-lesmenu uitgevoerd, inclusief toetsenbord en bewaren | Geen claim dat beide apps nu hetzelfde distributiepakket gebruiken |
| Gemeenschappelijke distributie en automatische controle op gelijkloop | Losse gedeelde bestanden | Lokale study-ui-distributie plus losse gedeelde bestanden | Beide afnemers aan dezelfde versiebron koppelen en releasecontrole automatiseren |
| Oefenactiviteit meten | StudyMeasure en gebeurtenissen aanwezig | StudyMeasure en gebeurtenissen aanwezig | Ontvangst en aantallen in de echte GoatCounter-dashboards controleren; code-aanwezigheid is geen ontvangstbewijs |

De geparkeerde SRA-bediening is uitgevoerd in de wijziging van 25 oktober. Zie [uitvoering en controlebewijs](geparkeerde-taken-2026-10-25.md). De eerste leesbaarheidsverbetering is gepubliceerd via [PR #8](https://github.com/HMA9K/SRA/pull/8). Oudere vinkjes hieronder of in andere verslagen blijven historische bewijzen. De boekcontrole is opgevolgd door `docs/afronding-sra-2026-09-20.md`.

[Issue #5](https://github.com/HMA9K/SRA/issues/5) is op 25 oktober 2026 gesloten als achterhaald door `PROJECT_GUIDE.md` en de actuele Duo-werkwijze. Een afzonderlijke overdrachtstest is geen open SRA-taak. Dit is geen bewijs dat zo’n proef is uitgevoerd; bronbeschikbaarheid blijft bij echte samenwerking taakgebonden te controleren.

De CAFA2-assistent heeft eigen historische controles en resterende validatiepunten in `docs/CAFA2_ASSISTENT_TESTSTATUS.md`. Deze wijziging bevat geen nieuwe modelkwaliteitscontrole of SRA-assistentintegratie. Volledige functionele gelijkloop omvat dus meer dan alleen deze presentatieaanpassing.

## Bronnen

Lokale vervolgcontrole van 25 oktober: [puntenweging, boekroutes, college 8 en grenzen van de meetcontrole](sra-vervolgcontrole-2026-10-25.md). De vervolgcontrole bevat de afzonderlijke preview- en publicatiestatus.

- [CAFA2-dekkingsmatrix](https://github.com/HMA9K/CAFA2/blob/main/docs/mc-audit/exam-practice-coverage.json)
- [CAFA2-herstart en reset](https://github.com/HMA9K/CAFA2/blob/main/docs/mc-audit/exam-restart-reset-2026-09-26.md)
- [SRA-geparkeerde MC-taken](https://github.com/HMA9K/SRA/blob/main/docs/cafa2-mc-vervolgtaken-2026-09-26.md)
- [SRA-afronding van de boekhiaten](https://github.com/HMA9K/SRA/blob/main/docs/afronding-sra-2026-09-20.md)
- [SRA-gedeelde distributie](https://github.com/HMA9K/SRA/blob/main/docs/gedeelde-layout.md)
- [CAFA2-meetimplementatie](https://github.com/HMA9K/CAFA2/blob/main/docs/goatcounter.md)
- [SRA-meetimplementatie](https://github.com/HMA9K/SRA/blob/main/docs/goatcounter.md)
