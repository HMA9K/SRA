# Controle van de interactieve grafieken

Gemaakt met Codex · 18 september 2026

Alle 19 werkbladen zijn gecontroleerd op invoer, berekening, getekende waarden en situaties waarin een parameter terecht geen invloed heeft. Een schuif hoeft niet iedere grafiek te veranderen: soms verandert alleen de schatting, een interval of een afzonderlijke toets. De toelichting bij de betreffende bediening maakt dat onderscheid zichtbaar.

**Wat is aangepast?**

- Bediening en effect staan nu bij elkaar: op een breed scherm staan de invoervelden links en blijft het resultaat rechts in beeld. Op een smal scherm staat een compact resultaatpaneel boven de invoer en blijft dat zichtbaar tijdens het scrollen. Het paneel heeft daar een vaste hoogte, zodat wisselen van grafiek de bediening niet verschuift.
- Bij het aanpassen van een veld verschijnt automatisch de bijbehorende grafiek of tabel. Bijvoorbeeld: betrouwbaarheid toont het staartschema met de marge, de spreiding van verschillen toont het interval, en n/k bij ANOVA tonen de vrijheidsgraden in de tabel. De keuzelijst laat ook de andere weergaven openen. De volledige toelichting en rekenstappen staan in een apart uitklapbaar blok.
- In het intervalwerkblad bepaalt de betrouwbaarheid standaard automatisch de kritieke t bij `df = n − 1`. Veranderen van betrouwbaarheid werkt daardoor door in t, marge, interval en staartschema. Een andere n actualiseert t en de onzekerheid. In de stand **Zelf invullen uit de tabellenbundel** gebruik je een eigen t en is de betrouwbaarheidsschuif uitgeschakeld.
- Een grijze beginreferentie maakt veranderingen zichtbaar bij de margecurve en transformaties, ook wanneer de assen meeschalen. De referentie bewaart de eerste geldige instelling zolang het werkblad geopend blijft. Iedere margecurve houdt de eigen t vast; de oranje stip gebruikt de actuele n en t.
- De directe, verschil-, quotiënt- en regressieschatter tonen ook een afzonderlijke intervalgrafiek. Zo zijn een verplaatsing van de schatting en een verandering van de onzekerheid zichtbaar naast het schematische verband.
- Bediening die bij een keuze niet van toepassing is, wordt uitgeschakeld. Dit geldt onder meer voor spreiding bij evenredige allocatie en het selectienummer bij alleen goedkope artikelen.
- Schuif en getalveld behouden dezelfde precieze invoer, ook bij de OLS-oplossing of een waarde tussen schuifstappen. Het maximale n volgt N in de interval- en MPU-werkbladen. Als N onder de huidige n wordt gebracht, daalt n mee tot N.
- Een ingevoerde waarde buiten het getoonde grafiekbereik krijgt een melding. De berekende uitkomst blijft beschikbaar.

**Overzicht van de 19 werkbladen**

| Werkblad | Wat verandert? | Correcte uitzondering |
|---|---|---|
| Populatie (`populatie`) | n en selectie wijzigen de geselecteerde punten, het gemiddelde en de totaalschatting. | Bij alleen goedkope artikelen is het selectienummer uitgeschakeld; bij n = 20 is de hele voorraad gecontroleerd. |
| Spreiding (`spreiding`) | Ingevoerde waarden wijzigen punten, gemiddelde, variantie en standaardafwijking. | Alle waarden evenveel verschuiven verandert hun spreiding niet. |
| Interval (`interval`) | N, n, gemiddelde, spreiding en betrouwbaarheid of handmatige t wijzigen de relevante schatting en intervalgrenzen. | Het gemiddelde verplaatst het interval, maar verandert de marge niet. Bij n = N is de steekproefmarge nul. |
| Directe schatter (`schatter`) | Invoer wijzigt de MPU-schatting, margecurve en intervalgrafiek. | t wordt hier handmatig ingevuld; opnieuw opzoeken bij een andere n. |
| Verschilschatter (`verschil`) | Het gemiddelde verschil verplaatst de correctielijn en schatting; spreiding, n en t wijzigen de intervalbreedte. | De schematische lijn hangt niet van de spreiding af. |
| Quotiëntschatter (`quotient`) | De verhouding van de sommen bepaalt de helling; correlatie en spreidingen bepalen mede het interval. | Correlatie verandert de verhoudingslijn niet. |
| Regressieschatter (`regressieschatter`) | Gemiddelden, boekwaardetotaal, spreidingen en correlatie wijzigen de correctie en onzekerheid. | n en t beïnvloeden onzekerheid, niet de correctielijn. Bij R = 0 vervalt de correctie. |
| Steekproefomvang (`omvang`) | Gewenste marge, N, spreiding, correlatie en t bepalen de vereiste omvang. | Al gecontroleerde posten veranderen uitsluitend het resterende werk; de omvang wordt naar boven afgerond. |
| Stratificatie (`strata`) | Methode, groepsomvang en n wijzigen de verdeling; Neyman gebruikt ook spreiding. | Spreiding is uitgeschakeld bij evenredige allocatie. Afronding kan kleine invoerwijzigingen in gehele aantallen verbergen. |
| Regressielijn (`regressie`) | b₀ en b₁ wijzigen lijn, residuen en SSE. De OLS-knop vindt de kleinste SSE. | Waargenomen punten blijven vast. |
| ANOVA (`anova`) | SSR/SSE wijzigen de verklaarde variatie; n/k wijzigen ook vrijheidsgraden, F en standaardfout. | Bij vaste SSR/SSE blijft de R²-balk gelijk als alleen n/k veranderen. |
| Toetsen (`toets`) | p, α en eenzijdige richting bepalen marker, grens en beslissing. | Het teken van B is uitgeschakeld bij een tweezijdige toets. |
| Diagnose (`diagnose`) | Patroonsterkte, scheefheid, residu, afstanden en DW-invoer wijzigen hun eigen diagram of grenscontrole. | Normaliteits-n kiest de cursusnormaliteitstoets, niet het aantal van de 12 demonstratiepunten. De uitbijtergrens verandert bij n = 100 naar 101. |
| Voorspelling (`voorspelling`) | x₀ verplaatst de gekozen voorspelling; model, n, spreidingen en t bepalen de onzekerheidsbanden. | Bij x₀ = x̄ heeft sₓ geen invloed op de marge van precies die geselecteerde voorspelling. |
| Transformaties (`transformatie`) | Model en coëfficiënten wijzigen beide lijnen; de gekozen x krijgt in beide grafieken een marker. | Bij b₁ = 0 is de voorspelling onafhankelijk van x. |
| Meervoudige regressie (`meervoudig`) | Coëfficiënten en beoordeling wijzigen groepslijnen; leeftijd en groep bepalen de gekozen persoon. | Bij een dummycoëfficiënt van nul vallen de groepslijnen samen. |
| Modelbouw (`modelbouw`) | Hulp-R² wijzigt VIF; n/k/q/SSR/MSE werken door in de afzonderlijke partiële F-berekening. | De partiële F-invoer verandert de VIF-grafiek niet. |
| Validatie (`validatie`) | Nieuwe werkelijke uitkomsten wijzigen punten, fouten en MSPR. | Het getrainde model blijft vast; trainings-MSE is een vergelijkingsgetal. |
| Methode kiezen (`keuzeroute`) | Doel en beschikbaar patroon bepalen methode, gegevens en controles. | Patroon is uitgeschakeld als het doel geen populatietotaal betreft. Dit is een keuzediagram, geen numerieke grafiek. |

**Nauwkeurigheid en controles**

Getallen worden voor leesbaarheid afgerond weergegeven. Berekeningen gebruiken de ongeronde invoer en tussenresultaten. De automatische t wordt numeriek bepaald voor de opgegeven betrouwbaarheid en het exacte aantal vrijheidsgraden. Een t uit een afgeronde tabelrij kan daarom een iets andere uitkomst geven; daarvoor is de handmatige stand beschikbaar.

Voer vanuit de projectmap uit:

```text
node tests/math-t.cjs
node tests/labs.cjs
node tests/labs-interactions.cjs
node tests/lab-layout.cjs
node tests/validate.cjs --sources
```

De t-test controleert 48 lokale tabelwaarden, analytische gevallen met 1 en 2 vrijheidsgraden, 140 onafhankelijke integraalberekeningen, grote aantallen vrijheidsgraden en ongeldige invoer. De labtests controleren alle 19 werkbladen met 152 invoerwijzigingen en extra geometriecontroles. De indelingstest controleert 70 resultaatweergaven, de koppeling aan invoervelden, behoud van focus en de grafiekkeuze bij formaatwijzigingen. `npm test` voert ook de overige projectcontroles uit.

Bronnen: [werkbladen en grafieken](../js/labs.js), [statistische berekeningen](../js/math.js), [interactietests](../tests/labs-interactions.cjs), [numerieke t-tests](../tests/math-t.cjs) en [Tabellenbundel, §13.4, PDF-pagina 12-13](../bronnen/tabellenbundel.pdf).
