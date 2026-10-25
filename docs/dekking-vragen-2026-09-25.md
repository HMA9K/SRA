# Dekking van nieuwe toepassingen in de SRA-vragenbank

Datum: 25 september 2026. Geautoriseerde uitbreiding van de leeromgeving met brongebonden tabellen, grafieken, SPSS-uitvoer, berekeningen en controleconclusies.

## Resultaat en afbakening

De vragenbank bevat 175 MC-vragen: de oorspronkelijke 134 plus 41 nieuwe leertoepassingen. Alle 19 onderwerpen hebben minstens één nieuwe toepassing. Dit is een uitbreiding van de eigen oefenvragen; het aantal oorspronkelijke tentamenvragen is hierdoor niet gewijzigd. De 41 nieuwe vragen zijn geen officiële tentamenvragen en hun aantal per onderwerp is geen voorspelling van tentamenfrequentie.

De uitbreiding gebruikt uitsluitend de aangeleverde cursusbronnen. Drie vragen gebruiken getranscribeerde oorspronkelijke collegegegevens, zichtbaar aangeduid als brongegevens. De overige 38 gebruiken herkenbaar gelabelde eigen oefengegevens om de bronmethoden toe te passen. De presentatie van eigen SPSS-tabellen is een oefenreconstructie; er wordt niet beweerd dat deze tabellen door een uitgevoerde SPSS-sessie zijn geproduceerd.

De nieuwe module is [learning_questions.py](../scripts/learning_questions.py). Zij levert `stimulusHtml` met de zelfstandige casus, semantische tabellen en waar passend een SVG-grafiek met tekstalternatief. De stimulus staat los van de vraagzin, zodat de leerling de gegevens moet selecteren en interpreteren. `practiceMode` onderscheidt begeleide vragen van zelfstandige toepassingen. De bestaande optionele herkenningshulp en vraaggerichte basisregels blijven beschikbaar.

## Dekking per onderwerp

| Onderwerp | Nieuwe vragen | Concrete toepassing |
|---|---:|---|
| Beginnen | 1 | Controlebestand, steekproefgemiddelde, populatietotaal en resterende onzekerheid |
| Rekenen | 1 | Postentabel met w en w², variantie tegenover standaardafwijking |
| Onzekerheid | 2 | Werkelijke t-tabel voor 95%-interval; ontbrekende df 99 en correcte lagere rij 95 |
| MPU | 2 | Volledig interval uit somkolommen met eindigheidscorrectie; schatterkeuze op foutpatronen |
| Verschilschatter | 2 | Projectie van alle controleverschillen; verschilvariantie en vergelijking met postspreiding |
| Quotiëntschatter | 1 | Verhouding van sommen uit twee groepen tegenover onjuist middelen van percentages |
| Regressieschatter | 2 | Helling, boekwaardecorrectie en standaardfout; precisie tegenover betrouwbaarheid |
| Steekproefomvang | 1 | Gewenste totale intervalbreedte vertalen naar minimaal aanvullend controlewerk |
| Stratificatie | 4 | Cumulatieve boekwaardetabel; bronrij met Nᵢ, nᵢ, Σwᵢ, Σwᵢ²; combineren inclusief topstratum; Neyman-allocatie |
| Regressielijn | 1 | Coefficients en een controlewaarneming samen gebruiken voor verwachting en residu |
| ANOVA | 2 | Ontbrekende gemiddelde kwadratensommen, n, F en R²; globale toets met echte F-tabel |
| Toetsen | 3 | P-waarde en t-grens naast elkaar; verkeerde richting bij eenzijdigheid; expliciet gegeven afwijkende nulwaarde |
| Diagnostiek | 7 | Residuals Statistics voor y, MD en Cook; Tests of Normality; trechtergrafiek; ABSRES-correlatie; onbesliste DW-uitkomst; lag-grafieken; negatieve én positieve grote residuen |
| Voorspellen | 1 | Het verschil in onzekerheidsmarge tussen gemiddelde respons en één nieuwe waarneming |
| Meervoudige regressie | 2 | Contrast tussen twee niet-referentiecategorieën; adjusted R² bij extra variabelen |
| Transformaties | 2 | Afhankelijke logvariabele herkennen in Coefficients; verschillende gevolgen van verdubbelen bij drie modelvormen |
| Modelbouw | 3 | Backward met expliciete verwijdergrens; VIF/Tolerance; partiële F en geneste modellen |
| Validatie en SPSS | 3 | MSPR op testdata; kruiscontrole van drie uitvoertabellen; doelgerichte keuze van diagnose-uitvoer |
| Tentamenaanpak | 1 | Nieuwe controlemaand, residu tegenover intervaloverschrijding, inhoudelijk begrensde auditconclusie |
| **Totaal** | **41** | **Alle 19 onderwerpen uitgebreid** |

## Tabellengrenzen worden echt opgezocht

De onderstaande vragen bevatten een directe link naar de benodigde pagina van de gepubliceerde tabellenbundel. De relevante kritieke grens wordt niet vooraf in de casus uitgeschreven. Zoals gebruikelijk bij MC staat zij wel tussen de mogelijke antwoorden. De uitwerking benoemt rij, kolom, staartkans en beslissing.

| Vraag-ID-suffix | Bundelplaats | Te vinden waarde |
|---|---|---|
| onzekerheid-leertoepassing-t-tabel-interval | PDF 12, tabel 13.4; df 24, overschrijdingskans 0,025 | 2,064 |
| onzekerheid-leertoepassing-ontbrekende-df | PDF 13, tabel 13.4; effectieve df 99, lagere tabelrij 95, kans 0,025 | 1,985 |
| toetsen-leertoepassing-p-en-t-route | PDF 12, tabel 13.4; df 20, kans 0,025 | 2,086 |
| toetsen-leertoepassing-niet-nul-hypothese | PDF 12, tabel 13.4; df 24, kans 0,025 | 2,064 |
| anova-leertoepassing-f-grens-bundel | PDF 21, tabel 13.8; teller-df 2, noemer-df 20, α 0,05 | 3,493 |
| modelbouw-leertoepassing-extra-variabele | PDF 21, tabel 13.8; teller-df 1, noemer-df 20, α 0,05 | 4,351 |
| diagnostiek-leertoepassing-dw-echte-tabel | PDF 30, tabel 13.9; n 30, k 2, α 0,05 | d_L 1,28 en d_U 1,57 |

Alle volledige vraag-ID's hebben het voorvoegsel `mc-`. De tabelregel voor ontbrekende vrijheidsgraden volgt het onderwijsprogramma NJ26, PDF-pagina 4. Bij de tweezijdige t-toets wordt Sig. met α vergeleken; α/2 wordt alleen gebruikt als overschrijdingskans voor de kritieke t. Bij de globale en partiële F-toets wordt α niet gehalveerd. Bij DW is expliciet alleen positieve autocorrelatie gevraagd om toetsrichting en grensinterpretatie helder te houden.

De vraag met H₀: β = 1 is een eigen oefenvariant die de aangepaste formule expliciet geeft. Formule 62 op het officiële blad betreft de standaardtoets tegen nul; de bronverwijzing maakt dit onderscheid zichtbaar.

## Herkomst van brongetallen en grafieken

- Slides SRA NJ26, PDF-pagina 40: de volledige cumulatieve boekwaardetabel inclusief de apart gecontroleerde topgroep. Het eerste streefbedrag is 14.306.659 / 4 = 3.576.664,75. De beschikbare klassegrens 3.000 ligt daarbij het dichtst.
- Slides SRA NJ26, PDF-pagina 48: de vier stratumrijen. Voor stratum 1 geeft herberekening zonder tussentijds afronden s² = 399,7826424468 en standaardfout van het stratumtotaal 4.949,212756. De afgeronde antwoordwaarden stemmen overeen met de collegepresentatie.
- Slides SRA NJ26, PDF-pagina 100: geselecteerde rijen van Residuals Statistics. De vraag combineert de y-grens, de Mahalanobis-grens en de Cook-grens, zonder te suggereren dat hun maxima dezelfde waarneming betreffen.
- De trechtergrafiek en twee lag-grafieken zijn eigen SVG-grafieken. De afzonderlijke punten zijn via een gegevenstabel toegankelijk. De vier lag-correlaties worden berekend uit precies dezelfde getekende gegevens; zij zijn niet geschat op basis van het uiterlijk van de grafiek.

De relevante oorspronkelijke PDF-pagina's zijn uitgelezen. De brontabellen van slides 40, 48 en 100 en de F-tabel op bundelpagina 21 zijn daarnaast visueel geïnspecteerd. De formuleverwijzingen zijn gecontroleerd tegen alle vier pagina's van het officiële formuleblad.

Aanvullende geraadpleegde bronplaatsen:

- Formuleblad SRA augustus 2024: PDF-pagina 1-4, met voor deze uitbreiding onder meer formules 1-29, 35-45, 47-64. Adjusted R² is formule 51; DW-beslisgebieden zijn formules 47-49. Het onderzoek naar ABSRES volgt de slides en attentiepunten, geen vermeende heteroscedasticiteitsformule 48.
- Attentiepunten regressieanalyse NJ26: PDF-pagina 4-8 voor toetsen, diagnose, transformaties, modelbouw en validatie.
- SPSS-uitwerkingen 2026: PDF-pagina 9 (§3.4, uitvoer lezen) en 16-19 (§5.2-5.3, diagnostiek). De bestaande bron-ID `spss` verwijst naar de uitwerkingenbundel, niet naar de losse opgavenbundel.
- Boekuitsneden: boek p. 216 over regressieschatter en intervaldekking; p. 222 over stratificatie; p. 284 over individuele voorspelling. Het boek is hierbij gericht op deze bronplaatsen geraadpleegd.

## Bestaande voortgang en validatie

De integratie in [build_mc.py](../scripts/build_mc.py) voegt de nieuwe vragen pas toe nadat de oorspronkelijke antwoordrotatie is voltooid. De nieuwe vragen hebben afzonderlijke ID's van de vorm `mc-<onderwerp>-leertoepassing-<naam>`. De oorspronkelijke 134 ID's, antwoordopties, juiste antwoordindices en koppelingen van optietoelichtingen blijven gelijk aan de Git-baseline. Daardoor behouden opgeslagen antwoordkeuzes hun betekenis.

De nieuwe vragen registreren hun eigen herkenningsroute en vraaggerichte hulp in de bestaande registers. De bestaande strenge volledigheidscontrole blijft gelden; nieuwe vragen krijgen geen generieke terugvaltekst. Bronverwijzingen in de hulp zijn gelijk aan de precieze vraagbronnen, waaronder de benodigde bundelpagina.

[learning-questions.py](../tests/learning-questions.py) bevat negen geslaagde controles:

1. Dekking van alle 19 onderwerpen, herkomstlabel, zelfstandige stimulus en optiegebonden uitleg.
2. Behoud van alle oorspronkelijke antwoordopties, antwoordindices en optietoelichtingen tegenover de Git-baseline.
3. Correcte antwoordrotatie van de nieuwe vragen en herhaalbare samenstelling zonder mutatie.
4. Onafhankelijke herberekening van MPU, verschil, quotiënt, regressieschatter en uitbreidingsomvang.
5. Onafhankelijke herberekening van de bronrij voor stratificatie, de cumulatieve grens, variantiecombinatie en allocatie.
6. ANOVA, partiële F, adjusted R², VIF en MSPR.
7. Diagnosegrenzen, lag-correlaties via zelfstandig berekende gecentreerde producten en de eenzijdige p bij verkeerde richting.
8. Terugtransformaties, verdubbelingsreacties, voorspelmarges en dummycontrast.
9. De daadwerkelijk aanwezige t-, F- en DW-cellen uit de oorspronkelijke tabellenbundel en de gekoppelde PDF-pagina's.

De nieuwe MC-uitbreiding alleen bewijst geen volledige beheersing van alle open tentamenvaardigheden. Zij is bedoeld naast de verdiept uitgewerkte leerstof, oorspronkelijke open tentamens en gerichte SPSS-praktijkroute. Browsercontrole, uiteindelijke pakketbuild en eventuele publicatie worden voor de volledige wijziging gezamenlijk uitgevoerd.
