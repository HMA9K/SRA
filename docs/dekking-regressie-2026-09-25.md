# Broncontrole en didactische uitbreiding regressie, 25 september 2026

Vervolg op 25 oktober 2026: de oorspronkelijke college-8-data zijn gevonden en vijf modellen zijn lokaal herberekend, inclusief groepsdiagnoses. Puntenweging en een gerichte boekcontrole zijn toegevoegd. Zie [vervolgcontrole](sra-vervolgcontrole-2026-10-25.md). De beperkingen hieronder beschrijven de oorspronkelijke controle; deze aanvulling vervangt uitsluitend de genoemde onderdelen en bewijst geen nieuwe publicatie of SPSS-bediening.

## Afbakening en gerealiseerde wijziging

De gebruiker heeft de inhoudelijke herziening van de leeromgeving goedgekeurd. Dit onderdeel betreft de tien lessen `regressielijn`, `anova`, `toetsen`, `diagnostiek`, `voorspellen`, `meervoudig`, `transformaties`, `modelbouw`, `validatie` en `tentamen`. De uitvoering staat in `scripts/learning_regression.py`, na `course_completion.enhance`.

Deze module voegt 35 afgebakende leerblokken en tien toepassingsroutes in de formulegidsen toe. Bestaande les-ID's en de drie begripchecks per les blijven intact. De MC-bank, bronmetadata met hoofdstuk/hoorcollege, begrippeninteractie en algemene vormgeving worden buiten deze module beheerd.

De uitbreiding geeft redenen voor methodekeuze, betekenis van parameters en stappen, grenzen aan conclusies, aansluiting op cijferbeoordeling, echte tabellen, zeven oorspronkelijke bronfiguren, open toepassingen met uitklapbare uitwerkingen en SPSS-praktijkroutes voor colleges 3 tot en met 8. Dit document rapporteert onderwerpdekking en controlegrenzen. Het verklaart niet ieder afzonderlijk boekvoorbeeld of iedere opdracht tot volledig gereproduceerd.

## Geraadpleegde primaire bronnen

- `bronnen/slides.pdf`, Slides SRA najaar 2026: onderwerpen in PDF 50–171 systematisch langsgelopen via de beschikbare tekstextractie; de gebruikte grafieken/tabellen bovendien visueel gecontroleerd.
- `bronnen/attentiepunten.pdf`, Attentiepunten regressieanalyse NJ26: PDF 3–9, integraal inhoudelijk gelezen voor de regressieroute, grenzen, formuleringen en validatie.
- Boekuitsneden `boek-h9a.pdf` tot en met `boek-h9d.pdf` en `boek-h10a.pdf` tot en met `boek-h10c.pdf`: gericht gelezen bij de betreffende onderwerpen. Gedrukte boekpagina's worden via `course_completion.bookref` gekoppeld aan de juiste uitsnede. De boekbron is *Statistiek voor audit en controlling*.
- `bronnen/spss-uitwerkingen.pdf`: opdrachten en routes colleges 3–8, PDF 5–47. De SPSS-opgaven 2026 uit de oorspronkelijke projectmap zijn daarnaast gelezen, PDF 3–5.
- `bronnen/opgavenbundel.pdf` en `bronnen/uitwerkingenbundel.pdf`: H9.1, PDF 10 respectievelijk 14–15, inclusief brondata autogewichten.
- `bronnen/tentamen-2025-03.pdf`: salarisuitvoer en uitwerking, vooral PDF 9 en 14–15; de Coefficients-tabel is visueel gecontroleerd.
- `bronnen/tabellenbundel.pdf`: tabel 13.4 (t), PDF 12–13; tabel 13.8 (F), PDF 20–29; tabel 13.9 (Durbin-Watson), PDF 30–31.
- `bronnen/formuleblad.pdf`: formules voor regressie, diagnose, voorspelling, transformaties, modelbouw en validatie.

Er zijn geen externe internetbronnen voor deze inhoud gebruikt. Er zijn geen nieuwe claims over een systematische SET-vergelijking gemaakt. Nieuwe oefengetallen zijn als eigen rekenvoorbeeld of afleesvariant benoemd.

## Systematische onderwerpdekking

| Onderwerp in bron | Bronplaats | Bestaande dekking die behouden blijft | Toegevoegde uitleg/toepassing |
|---|---|---|---|
| Doel regressie, analyserend/voorspellend, x/y, crosssectie/tijdreeks | Slides 50–58; boek §9.1–9.2, p. 236–239; introductie p. 233–237 | Lijn/model, x/y, basisvorm en gegevenstype | Controleverwachting, onderscheid schatter H8/regressie H9, modelkeuze vanuit controlevraag, afhankelijkheid van de gegevenscontext |
| Model tegenover regressielijn, OLS, residuen, constante en helling | Slides 59–64; boek §9.3, p. 240–244 | Formules en een eenvoudig kostenvoorbeeld | Oorspronkelijke H9.1-autogewichten, Coefficients, eigen residuberekening, jaarkodering, lijn door gemiddelden en SPSS-route college 3 |
| Correlatie, richting, residuele variantie | Slides 65–67; boek §9.3, p. 244–247 | r, SPSS-R, formule 34 met H9.1 en bestaande ongeronde controle | Verbanden tussen r/R²/sₑ in bronuitvoer; uitleg spreiding om gemiddelde tegenover spreiding om lijn; tijdsvertraging laat verkeerde koppeling zien |
| ANOVA, SS, df, MS, R² en F | Slides 68–76; boek §9.4, p. 248–251 | Begrippen/formules en tentamenvoorbeeld oktober 2024 | Volledige H9.1-reconstructie; drie som- en df-controles; doorlopende huurcasus inclusief bronfiguur en bronfout in SSE |
| Eenzijdige/tweezijdige t en p; F en richting | Slides 77–88; boek §9.5.1–9.5.2, p. 252–258 | H₀/H₁, vierdelige conclusie, p-halvering, formule 39/40, hellingsinterval | Beslistabel op basis van onderzoeksvraag; echte tabelwaarden df 8; drie toetsroutes voor één casus; uitleg waarom F geen richting bewaart en p niet exact nul is |
| Zeven analyses en toepasselijkheid | Slides 89–91; boek §9.6, p. 259–260 | Overzicht diagnoses en crosssectie/tijdreeks | Logische onderzoeksvolgorde, gevolgen voor controleverwachting, signaal tegenover inhoudelijke beslissing |
| Samengevoegde groepen | Slides 92–93; boek §9.6.1 p. 261; SPSS 11–13 | Groepen splitsen/model aanpassen | Bank X: 195 klanten, gewone/gegroepeerde scatter, absolute/relatieve hypotheeklast en inkomensgroepen; SPSS college 4; dummy tegenover afzonderlijke lijnen |
| Tijdsvertraging | Slides 94–99; boek §9.6.2 p. 262 | Korte definitie en koppeling yₜ/xₜ₋₁ | Echte tijdreeksfiguur; vier oorspronkelijke spreidingsdiagrammen; tabel r −0,118 / 0,207 / 0,963, p en bruikbare paren; twee perioden vertraging; onderscheid met autocorrelatie |
| Uitbijters in y | Slides 100–102; boek §9.6.3.1 p. 263–265 | Regels ±2/±3, beide uitersten controleren | Huurcasus n40 z_min −1,352/z_max 2,490; volledige tabel en figuur; uitleg standaardisering en waarom geen t-grens nodig is; bloeddrukroute n60 |
| Uitbijters in x | Slides 103–106; boek §9.6.3.2 p. 265–267 | MD en gemiddelde + 3s | Echte huur-MD 2,388 tegenover grens 3,420; Life Expectancy gezamenlijke x-afstand; gegevens controleren en handhaven tenzij inhoudelijk onderbouwd |
| Invloedrijke punten | Slides 107–109; boek §9.6.4 p. 268–270 | Cook, signaal/actie en eerdere bronvoorbeelden | Huur-CD 0,313 tegenover 0,210; gegevensrijen identificeren; invloed onderscheiden van ongebruikelijke x of y; bronkritiek op verwijdering |
| Normaliteit | Slide 110; boek §9.6.5 p. 271 | SW/KS-keuze en residuen | Volledige twee-kolomstabel n40, SW p0,014 versus KS0,200*; bronfiguur; toelichting sterretje en geen gunstige kolom uitkiezen; n59/n162 in SPSS-routes |
| Heteroscedasticiteit en remedies | Slides 111–116; boek §9.6.6 p. 272–278 | ABSRES-toets, eigen berekening, WLS-kern | Echte correlatiematrix ABSRES/x/y plus figuur; waarom absolute residuen; juiste cel; WLS-tabellen9.18–9.20 met voetnoot en gewichten, praktijkroute en schaalverschil; grenzen aan verwijdering |
| Autocorrelatie en correctie | Slides 117–119; boek §9.6.7 p. 278–282 | Berekening d uit residuen, onbesliste zones, eerder boekmodel met vorige storing | Tabel13.9 aflezen n24/k1/α0,05, vijf gebieden met echte grenzen; drie eigen afleesvarianten; onderscheid α0,05 versus eerdere boekcorrectie α0,01 |
| Individuele voorspelling en basis-/controleperiode | Slides 120–122; boek §9.7 p. 283–286 | Formule50, eerste1, interpolatie/extrapolatie, basis/controle | Volledige Productiviteitberekening met eenheden/echte t-waarde; huurcasus na aanpassing n39; alle modelonderdelen uit dezelfde uitvoer; auditconclusie |
| Meervoudige regressie, adjusted R² en n≥10k | Slides 123–125; boek §10.1 p. 289–291 | Model, adjusted R², vuistregel | Conditionele interpretatie, constant houden overige kenmerken; geneste vergelijking met adjusted R²-berekening; groeps-n in college8 |
| Conceptueel model | Slides 126–132 | Algemene kandidaatkeuze | Life Expectancy: vijf inhoudelijke kandidaten, onderscheid verwachte samenhang en toegevoegde bijdrage, echte Enter-kolommen |
| Logaritmen, drie voorgeschreven transformaties | Slides 133–139; boek §10.2.1–10.2.2 p. 292–304 | Logdefinitie, modelvormen, eerste rekenvoorbeeld | Keuzepatronen, effectfactoren, hele logwaarde en beide intervalgrenzen terugtransformeren, SPSS college6 met vier officiële modelkeuzes |
| Inverse functie | Onderwijsprogramma en attentiepunten p. 7 sluiten deze uit | Bestaande afbakeningsnotitie | Bewust niet uitgebreid; geen onterecht ontbrekend tentamenonderwerp |
| Enter, backward, forward, stepwise | Slides 140–145; boek §10.3 p. 305–307 | Definities en selectievoorwaarden | Life Expectancy originele backwardtabellen en stappen; coëfficiënten/n/df per stap; SPSS college7 met expliciete selectiegrens |
| Meervoudige diagnoses en transformatiekeuze | Slides 146–160; boek §10.4 p. 308–315 | Algemene relevantie diagnoses en VIF | Life Expectancy volledig besluitverloop in één overzicht; n171 naar n163; log(y) moet bij alle x passen; afzonderlijke ABSRES-controles; onderbouwing uitsluiting kritisch gemaakt |
| B, Beta en relatieve bijdrage | Boek §10.5 p. 316–318 | B/Beta-uitleg en GDP-brontabel | Salaris- en Life Expectancy-tabellen met conditionele interpretatie; Beta niet voor oorspronkelijke voorspelling gebruiken |
| Globale toets, individuele toets en extra variabele | Slides 161–163; boek §10.6 p. 319–323 | Globale F, individuele t, formule63 | Echte Life Expectancy-ANOVA; geneste modellen één extra x met numeriek F en adjusted R²; verschillende datasets/y-schalen niet vergelijken als geneste modellen |
| Meervoudig voorspellen en residuen | Slides 164–165 | Algemene invulroute | Volledige salariscasus en Life Expectancy-Nederland met controleerbare rekenstappen, eenheden en zichtbare bronrekenverschillen |
| Dummyvariabelen en referentiegroepen | Slides 166–168 | 0/1 en r−1-dummyregel | Reden voor r−1 met constante; echte HBO/WO-vergelijking; softwaredummy-route en categorieën correct gebruiken |
| Validatie/data splitting/MSPR | Slides 169–171; attentiepunten 8–9, buiten boek | Basisdefinitie en voorbeeld | Training/test-methodekeuze, testnoemer, schaalvoorwaarde, volledige testtabel, interpretatie en voorkomen van gebruik testset voor selectie |

## SPSS-praktijkroutes

| College | Plaats in leeromgeving | Exacte primaire route | Op te leveren begrip |
|---|---|---|---|
| 3 | Regressielijn | Uitwerkingen PDF5–10 | Dataset/meetschaal, scatter, eigen berekening en Coefficients/Model Summary/ANOVA verbinden |
| 4 | Diagnostiek | Uitwerkingen PDF11–13 | Gegroepeerde scatter en geschikte x beoordelen bij Bank X |
| 5 | Diagnostiek | Uitwerkingen PDF14–21 | Residuen bewaren, individuele personen onderzoeken, model opnieuw schatten, actuele residuen in Explore en ABSRES gebruiken |
| 6 | Transformaties | Uitwerkingen PDF22–27 | Vier patronen herkennen, noodzakelijke LN-variabelen maken, voorspellingen en schaalvergelijking |
| 7 | Modelbouw | Uitwerkingen PDF28–36 | Handmatige backward, juiste afhankelijke variabele, VIF, categorieën/dummy’s, automatische criteria controleren |
| 8 | Tentamen/eindtoepassing | Uitwerkingen PDF37–47 | Gehele autocasus, werkelijk n, diagnoses, meervoudig model, aandrijvingsgroepen, beperking bronuitwerking en Split File herstellen |

Deze routes zijn gebaseerd op het meegeleverde lesmateriaal voor SPSS. De menu's zijn niet in een live geïnstalleerde SPSS-versie uitgevoerd. De brondata zijn niet opnieuw in SPSS doorgerekend. De leeromgeving presenteert softwarehandelingen als brongebonden oefenroute; zij claimt geen eigen succesvolle software-uitvoering.

## Rekenkundige en inhoudelijke bronverschillen

1. **Salaris 2025, vraag20:** 739,508 + 38,495×50 + 71,550×10 + 2.237,947 = 5.617,705. Gebruikelijke afronding op euro's is 5.618. De officiële uitwerking drukt 5.617 af. De leeromgeving meldt het verschil expliciet en behoudt het oorspronkelijke model.
2. **Life Expectancy, slide164:** 50,065 + 36,011×0,92 − 0,015×58 − 1,409×0,1 = 82,18422. De slide drukt82,28 af. Meer precisie in niet-zichtbare brondata is mogelijk; de uitkomst is met de afgedrukte getallen niet reproduceerbaar. Het verschil wordt als zodanig benoemd.
3. **Huurcasus, slide75:** de invulbreuk drukt SSE12.189,201 af; de ANOVA-tabel geeft121.859,201. TotalSS − SSR en de MSE ondersteunen de ANOVA-waarde. Zowel tabel als foutieve breuk zijn visueel gecontroleerd.
4. **H9.1 afronding:** r op0,940 afgerond geeft sₑ≈17,18; de oorspronkelijke tien gewichten geven sₑ≈17,16572. De bestaande correctie wordt behouden en bij de nieuwe broncasus toegelicht.
5. **Backwardgrens:** attentiepunten noemt½α; college7 gebruikt0,05 voor de reeds tweezijdige Sig. De module maakt het verschil zichtbaar en volgt per bronopdracht de expliciete selectiegrens.
6. **SPSS college7 p28:** Verkoopprijs wordt in de tekst eenmaal onafhankelijk genoemd. De opdracht en analyse maken duidelijk dat dit de afhankelijke variabele is; de leeromgeving corrigeert dat expliciet.
7. **Actuele residuen:** na een nieuwe SPSS-regressie kan het volgnummer ZRE_1/ZRE_2 veranderen. De praktijkroute verlangt de residuen van het actuele model, in plaats van blind een oude variabelenaam te kopiëren.
8. **R tegenover r:** bestaande uitleg dat Model Summary R niet-negatief is, blijft behouden. De Pearson-correlatie draagt het teken; een formule met de totale meervoudige R is geen individuele t-toets.
9. **Transformatie en R²:** in de bronpraktijk worden soms R²-waarden bij verschillende y-schalen gerangschikt. De module beschrijft die opdracht en maakt de vergelijkingsbeperking zichtbaar; zij noemt dat geen bewezen verbetering op de oorspronkelijke schaal.
10. **Dataverwijdering:** in huur- en landencasus kiest de bron later soms alsnog voor uitsluiting zonder volledige onafhankelijke onderbouwing. De module bespreekt het bronverloop, maar leert geen regel dat uitsluiting gerechtvaardigd is door een gunstigere fit/normaliteits-p.
11. **WLS-schaal:** de gewogen sₑ en R² uit boek p277 horen bij de weging. Ze worden niet zonder meer met ongewogen maten vergeleken. De sterk afgeronde MSE uit de WLS-tabel is onvoldoende om de exacte F na te rekenen.

## Uitgevoerde verificatie

- Python-module geladen en `enhance` op werkelijke course-data uitgevoerd zonder schrijfoperatie naar de gegenereerde data.
- `enhance` tweemaal na elkaar geeft identieke uitkomst. De idempotente opschoning gebruikt uitsluitend de tien regressie-ID's en de unieke marker `regressionVersion`; zij raakt de negen samplinglessen niet.
- De negen overige lessen zijn voor/na vergeleken en blijven inhoudelijk identiek; begripcheckgegevens van alle lessen blijven identiek.
- Alle in de toegevoegde HTML gebruikte bronfiguurpaden bestaan. De zeven gebruikte slides zijn visueel gecontroleerd; extra inspecties betroffen bron-Coeefficients 2025, Life Expectancy-tabellen en WLS/huur-SSE.
- Numerieke controles: salaris5.617,705; Nederlandse voorspelling82,18422; boekintervalfactor1,04518537 en marge2,38448590; huurintervalmarge106,9676501; eigen partiële F15,3333333; adjusted R²0,79148936 en0,84021739.
- Regels voor t en Durbin-Watson zijn tegen de daadwerkelijk meegeleverde tabellenbundel gecontroleerd.
- De parenttaak verzorgt volledige build, browserinspectie, checks van bronlinks, mobiele weergave en publicatie. Die resultaten staan niet als reeds uitgevoerd in dit subonderdeel vermeld.

## Echte grenzen en resterende werkzaamheden buiten deze module

- Onderwerpen uit de systematische slide-/hoofdstukvergelijking zijn nu gekoppeld aan uitleg en een passende toepassing; dit is geen verklaring dat ieder boekvoorbeeld, alle opdrachtvarianten en ieder software-uitvoerblad als zelfstandige oefening zijn uitgewerkt.
- Een directe regel-voor-regel vergelijking van iedere alinea uit het volledige boek met iedere alinea in de leeromgeving is in deze subtaak niet uitgevoerd. De boekcontrole blijft een levende dekkingscontrole, geen automatische volledigheidsgarantie.
- De officiële college8-uitwerking laat de volledige herhaalde diagnostiek van drie afzonderlijke aandrijvingsmodellen zelf open. De leeromgeving benoemt die grens en geeft de te volgen route; er zijn geen diagnostische uitkomsten verzonnen.
- De exacte handelingen om tijdslags in een actuele SPSS-installatie te maken en de volledige software-uitvoering van de autocorrelatiecorrectie zijn niet apart getest. De begrips-, reken- en interpretatieroutes zijn wel opgenomen, met de oorspronkelijke bronnen.
- Examenfrequenties en puntengewichten worden centraal toegevoegd op basis van de gecontroleerde tentameninventaris. Deze module noemt concrete tentamenvragen en maakt geen eigen onbewezen claim dat een onderwerp “vaak” wordt getoetst.
- De termklikregels, hoofdstuk-/paragraaftitels, hoorcollegekoppeling en MC-uitbreidingen liggen bij de gedeelde integratie. Deze inhoudsmodule verandert die componenten niet zelfstandig.

