# Inhoudscontrole SRA: samenvatting tegenover het boek

**Vervolg op 20 september 2026:** de onderstaande historische bevindingen zijn verwerkt in de leeromgeving. Zie [afronding, dekkingsmatrix en afbakening van de controle](afronding-sra-2026-09-20.md). De tekst hieronder beschrijft de versie van 18 september en is als controlehistorie bewaard.

Gemaakt door Codex op 18 september 2026. Dit verslag beoordeelt de huidige samenvatting; de lesinhoud is bij deze controle niet gewijzigd.

**Oordeel: de aanwezige kernuitleg en gecontroleerde rekenformules sluiten grotendeels aan op het boek, maar de samenvatting dekt de voorgeschreven stof nog niet volledig. Er is één concrete tekstfout gevonden, naast belangrijke ontbrekende rekenroutes en toepassingen.** Vooral stratificatie en toetsen bij regressie moeten worden aangevuld voordat de samenvatting als volledige leerroute kan gelden.

## Wat is gecontroleerd?

De 19 lessen en hun afzonderlijke formulegidsen zijn vergeleken met *Statistiek voor audit en controlling*, P. Touw en L.A. Hoogduin, derde druk, 2011. De voorgeschreven hoofdstukken zijn inhoudelijk gelezen:

| Onderdeel | Boekpagina's | PDF-pagina's |
|---|---:|---:|
| Hoofdstuk 8: schattingsmethoden en stratificatie | 201-232 | 219-250 |
| Hoofdstuk 9: enkelvoudige regressie | 233-286 | 251-304 |
| Hoofdstuk 10: meervoudige regressie | 287-323 | 305-341 |

Het [onderwijsprogramma, PDF 4-5](../bronnen/onderwijsprogramma.pdf#page=4) bepaalt de afbakening. De inverse functie uit 10.2.2 Ad 3 is uitgesloten. Hoofdstuk 3 en 5 zijn gericht gebruikt voor de benodigde voorkennis over intervallen en toetsen. Dit is geen controle van alle 498 PDF-pagina's of van alle SET-stof.

Ook zijn de gekoppelde rekenfuncties en relevante begrippen nagegaan. Formulepagina's met mogelijke extractiefouten of bronverschillen zijn visueel in de oorspronkelijke PDF gecontroleerd. Het formuleblad, de attentiepunten en cursusopgaven zijn gebruikt om te bepalen of een verschil werkelijk een fout of een cursuskeuze is. Niet alle losse begripsdefinities en examenvragen zijn in deze controle afzonderlijk beoordeeld.

## Belangrijkste bevindingen

### 1. Een onjuiste voorwaarde bij logaritmen

In [Formules: transformaties](../index.html#formules/transformaties), bij het machtsmodel, staat: “Voor het model moeten de gelogaritmeerde waarden positief zijn.”

**Correct is:** de oorspronkelijke waarden waarop je een logaritme toepast moeten positief zijn. Bij een machtsmodel gaat het om x en y. De logwaarden zelf mogen nul of negatief zijn: ln(1) = 0 en ln(0,5) ≈ −0,693.

De gewone les legt dit al goed uit en het rekenblad gebruikt het juiste domein. Het is dus een tekstfout in de formulegids, geen aangetroffen fout in de berekeningscode. Het boek toont negatieve logwaarden in afbeelding 10.6, [boek p. 295 / PDF 313](../../Volledige%20boek%20Statistiek_voor_audit_en_controlling.pdf#page=313).

### 2. Stratificatie begint nu pas nadat de groepen al bestaan

De samenvatting legt **allocatie**, het verdelen van controles over bestaande groepen, goed uit. Maar **stratificatie**, het bepalen van die groepen zelf, is onvolledig:

- Grenzen bepalen met cumulatieve boekwaarde ontbreekt.
- Grenzen bepalen met de cumulatieve wortel van klassebreedte × frequentie ontbreekt.
- Gericht extra waarnemingen toevoegen aan één stratum om de totale onzekerheidsmarge te verkleinen ontbreekt.

Dit is daadwerkelijk cursuswerk: [opgavenbundel PDF 7-8, opgave 8a/b en 9b/c](../bronnen/opgavenbundel.pdf#page=7). Het boek behandelt de grenzen op [p. 221-223 / PDF 239-241](../../Volledige%20boek%20Statistiek_voor_audit_en_controlling.pdf#page=239), en uitbreiding op p. 230-231 / PDF 248-249. Een korte tabel per grensmethode en één uitgewerkt uitbreidingsvoorbeeld zijn hier nodig.

### 3. Niet alle rekenroutes voor enkelvoudige regressie worden uitgelegd

De lezer kan nu rekenen met een ANOVA-tabel of een gegeven SPSS-kolom *Std. Error*. Maar wanneer een opgave n, r, sₓ en sᵧ geeft, ontbreken de volgende routes in de lessen en formulegidsen:

| Ontbrekende route | Wat je ermee berekent | Bron |
|---|---|---|
| sₑ² = [(n − 1)/(n − 2)] × (1 − r²) × sᵧ² | Residuele variantie zonder gegeven ANOVA-tabel | Formuleblad 34; boek p. 246-247 / PDF 264-265 |
| s_b₁ = (sᵧ/sₓ) × √[(1 − r²)/(n − 2)] | Standaardfout van de geschatte helling | Formuleblad 39; boek p. 253 / PDF 271 |
| t = r√(n − 2)/√(1 − r²) | Toets op een lineair verband bij H₀: ρ = 0 | Formuleblad 40; boek p. 253 / PDF 271 |
| b₁ ± t × s_b₁, met df = n − 2 | Betrouwbaarheidsinterval voor de populatiehelling | Boek p. 255 / PDF 273 |

Bij de laatste route ontbreekt ook de koppeling met toetsen: ligt nul buiten het bijpassende tweezijdige interval, dan verwerp je H₀: β₁ = 0 op dat significantieniveau. Deze aanvullingen kunnen samen in één rekenvoorbeeld worden uitgelegd. Zie [formuleblad PDF 2-3](../bronnen/formuleblad.pdf#page=2) en [boek PDF 271-273](../../Volledige%20boek%20Statistiek_voor_audit_en_controlling.pdf#page=271).

### 4. Een kleinere marge is niet vanzelf een betrouwbaarder resultaat

Bij de regressieschatter is de factor √(1 − R²) correct. De les benadrukt het smallere interval, maar mist de boekwaarschuwing: bij ongeschikte foutverdelingen kan het berekende interval te smal zijn en de veronderstelde betrouwbaarheid missen. Voeg de toepassingsvoorwaarden toe aan de methodekeuze. [Boek p. 216 en 218 / PDF 234 en 236](../../Volledige%20boek%20Statistiek_voor_audit_en_controlling.pdf#page=234).

Ook de grens n ≥ 100 moet een cursusvuistregel blijven. Het boek vermeldt dat extreem scheve verdelingen een grotere steekproef kunnen vereisen. De les benoemt de cursusgrens al, maar niet deze uitzondering. [Boek p. 92, voetnoot 2 / PDF 110](../../Volledige%20boek%20Statistiek_voor_audit_en_controlling.pdf#page=110).

### 5. Bij meervoudige regressie ontbreken twee concrete toepassingen

**SPSS Beta interpreteren.** Er staat terecht dat je B, niet Beta, gebruikt voor de regressievergelijking in oorspronkelijke eenheden. Maar hoe je gestandaardiseerde coëfficiënten binnen hetzelfde model vergelijkt, wordt niet uitgewerkt. Daarbij geeft het teken de richting en de absolute grootte informatie over de relatieve gestandaardiseerde bijdrage. Dit is geen bewijs van causaliteit. [Boek p. 318 / PDF 336](../../Volledige%20boek%20Statistiek_voor_audit_en_controlling.pdf#page=336).

**Een meervoudig logmodel terugtransformeren.** De drie afzonderlijke modelvormen zijn correct. Er mist een uitgewerkte combinatie, bijvoorbeeld ln(ŷ) = b₀ + b₁ln(x₁) + b₂ln(x₂), die terugrekent naar ŷ = exp(b₀) × x₁^b₁ × x₂^b₂. [Boek p. 321 / PDF 339](../../Volledige%20boek%20Statistiek_voor_audit_en_controlling.pdf#page=339) en [attentiepunten PDF 8](../bronnen/attentiepunten.pdf#page=8).

### 6. Diagnostiek benoemt problemen, maar werkt remedies beperkt uit

Alle zeven analyses zijn aanwezig. De volgende stap is soms te algemeen om zelfstandig een open vraag te beantwoorden:

- Bij uitbijters: onderscheid een invoerfout, een terugkerende bijzondere omstandigheid die bijvoorbeeld een dummy rechtvaardigt, en een niet-terugkerende gebeurtenis. Verwijder geldige waarnemingen niet alleen om een betere fit te krijgen.
- Bij autocorrelatie: werk een correctie met het vorige residu uit en controleer daarna opnieuw met Durbin-Watson.

Dit staat in [boek p. 267-268 / PDF 285-286](../../Volledige%20boek%20Statistiek_voor_audit_en_controlling.pdf#page=285) en p. 282-283 / PDF 300-301. Voor verdere verdieping kunnen de berekening van Durbin-Watson uit residuen en de ABSRES-correlatietoets worden toegevoegd. Die hebben lagere prioriteit dan de ontbrekende hoofdrekenroutes bij punt 3.

### 7. Boekverwijzingen ontbreken bij de afzonderlijke lessen

De huidige 19 lessen hebben samen 52 bronverwijzingen. **Geen daarvan verwijst rechtstreeks naar een boekpagina.** Het boek is ook niet opgenomen in de registratie van tien lesbronnen; alleen op de algemene bronnenpagina staat dat het als achtergrond is geraadpleegd.

Dit bewijst niet dat het boek nooit is gebruikt. Het betekent wel dat je vanuit een les niet kunt nagaan welke boekpassage de uitleg onderbouwt. Voeg per onderwerp de passende paragraaf en zowel het gedrukte paginanummer als de PDF-pagina toe.

## Overzicht van alle lessen

“Kern correct” betekent dat de onderzochte hoofdinhoud overeenkomt, niet dat elk onderwerp uit het boek volledig is uitgewerkt.

| Les | Oordeel | Belangrijkste actie of bevestiging |
|---|---|---|
| 1. Van losse waarneming naar uitspraak | Kern correct | Populatie, steekproef, puntschatting en onderscheid schatten/toetsen sluiten aan. |
| 2. Gemiddelde, variantie en standaardafwijking | Kern correct | Variantie met n − 1 en onderscheid spreiding/standaardfout kloppen. |
| 3. Kans, betrouwbaarheid en tabellen | Kern correct | Marge en staartkansen kloppen. Werk een eenzijdige intervalgrens concreter uit; boek p. 98-99. |
| 4. Directe schatter | Kern correct | Behoud aselecte selectie en voeg de nuance bij extreem scheve verdelingen toe. |
| 5. Verschilschatter | Kern correct | Tekenafspraak klopt. Maak bij toepassing het controledoel duidelijk. |
| 6. Quotiëntschatter | Kern correct | Verhouding van sommen en resterende spreiding kloppen. |
| 7. Regressieschatter | Nuance ontbreekt | Kleinere berekende marge geeft niet automatisch geldige dekking. |
| 8. Steekproefomvang | Aanvullen | Uitbreiding binnen één stratum ontbreekt. Neem ook omvang bij de quotiëntschatter expliciet op; slides PDF 34-36. |
| 9. Stratificatie en allocatie | Belangrijk hiaat | Stratumgrenzen en doelgerichte uitbreiding ontbreken. |
| 10. Regressielijn | Kern correct, rekenroute ontbreekt | Voeg residuele variantie vanuit r en sᵧ toe. |
| 11. ANOVA | Kern correct | Kwadratensommen, vrijheidsgraden, MSE, R² en F komen overeen. |
| 12. Hypothesen, t-toets en F-toets | Belangrijk hiaat | Voeg formuleblad 39-40 en het interval voor β₁ toe. |
| 13. Diagnostiek | Aanvullen | Signalen zijn aanwezig; concrete vervolgacties zijn te kort. |
| 14. Voorspellen | Kern correct | Individueel voorspellingsinterval klopt. Basisperiode versus controleperiode kan explicieter; boek p. 236-237 en 283-286. |
| 15. Meervoudige regressie en dummy's | Aanvullen | Voeg interpretatie van gestandaardiseerde Beta toe. |
| 16. Transformaties | Tekstfout en aanvulling | Corrigeer logvoorwaarde; werk meervoudige terugtransformatie uit. |
| 17. Modelbouw | Kern correct | Behoud de expliciete modelaanduidingen bij de partiële F-toets. |
| 18. Validatie en SPSS | Correct op cursusbron | Validatie staat volgens de attentiepunten uitdrukkelijk niet in het boek. |
| 19. Tentamenaanpak | Past bij het onderwijsprogramma | De aanpak is een eigen leerstrategie, geen extra boekhoofdstuk. |

## Verschillen die niet als fout moeten worden hersteld

**Validatie hoort erbij.** De attentiepunten vermelden op PDF 8 expliciet dat dit onderwerp niet in het boek staat. De huidige MSPR-uitleg volgt de aanvullende cursusbron en formule 64 terecht.

**Effectieve vrijheidsgraden bij stratificatie.** Het boek rekent die uit, maar het actuele formuleblad zegt dat ze gegeven worden. De samenvatting hoeft die afleiding daarom niet als verplichte rekenvaardigheid toe te voegen.

**Een tweezijdige p-waarde vergelijken met α.** De uitleg maakt terecht onderscheid tussen de volledige tweezijdige p-waarde, de staartkans α/2 voor een kritieke t-waarde en een expliciete selectiedrempel bij backward. Het boek en de attentiepunten formuleren dat niet overal consequent. Zie boek p. 136 / PDF 154 en attentiepunten PDF 7.

**Partiële F-toets.** Het boekvoorbeeld op p. 307-308 / PDF 325-326 is intern inconsistent in modelnummering en noemer. De huidige app gebruikt expliciet SSR_uitgebreid − SSR_klein en MSE_uitgebreid. Neem die boekuitwerking niet letterlijk over als correctie.

**Drukfout bij stratificatie.** In boektabel 8.6, p. 222 / PDF 240, staat 75.500 waar 2.500 × 23 gelijk is aan 57.500. De daar getoonde wortel 239,79 past wel bij 57.500. Gebruik de juiste vermenigvuldiging bij het toevoegen van dit voorbeeld.

## Controle van berekeningen

Met de 24 waarnemingen uit boektabel 9.1 zijn de huidige regressiefuncties opnieuw aangeroepen. De uitkomsten komen binnen de afdrukafronding overeen met de boekuitvoer:

| Grootheid | Huidige berekening |
|---|---:|
| Constante b₀ | −1,10810545 |
| Helling b₁ | 0,60988919 |
| Correlatie r | 0,96311751 |
| MSE | 1,21005749 |
| F | 281,84782285 |

Ook het individuele voorspellingsinterval sluit aan; het kleine verschil met de gedrukte grenzen komt door tussentijdse afronding in het boek. Dit ondersteunt de juistheid van die berekeningen, maar is geen bewijs dat alle mogelijke invoer of alle oefenvragen zijn gecontroleerd.

## Aanbevolen volgorde

1. Corrigeer de logvoorwaarde en voeg boekverwijzingen toe.
2. Vul de ontbrekende stratificatie- en regressierekenroutes aan, elk met een compact voorbeeld en een begripcheck.
3. Voeg de toepassingsvoorwaarden, diagnostische remedies, Beta-interpretatie en meervoudige terugtransformatie toe.

De bestaande goede uitleg en interactieve rekenbladen vormen een bruikbare basis. Een volledige herbouw is voor deze inhoudelijke verbeteringen niet nodig.

## Bronnen

- [Statistiek voor audit en controlling, derde druk, volledige aangeleverde PDF](../../Volledige%20boek%20Statistiek_voor_audit_en_controlling.pdf), hoofdstukken 8-10 en de genoemde basispassages uit 3 en 5.
- [Onderwijsprogramma SRA NJ26](../bronnen/onderwijsprogramma.pdf), PDF 4-5.
- [Formuleblad SRA, augustus 2024](../bronnen/formuleblad.pdf), PDF 1-4.
- [Attentiepunten regressieanalyse NJ26](../bronnen/attentiepunten.pdf), PDF 3-9.
- [Opgavenbundel SRA NJ26](../bronnen/opgavenbundel.pdf), vooral PDF 7-8.
- [Uitwerkingenbundel SRA NJ26](../bronnen/uitwerkingenbundel.pdf), vooral PDF 10 en 13.
- [Slides SRA najaar 2026](../bronnen/slides.pdf), vooral PDF 34-36 en 40-41.
- Gecontroleerde samenvatting: [lesgegevens en formulegidsen](../data/course.js), [rekenfuncties](../js/math.js) en [rekenbladen](../js/labs.js).

Controleversie: SHA-256 van data/course.js begint met `bdd933656fa7c276`. Werknotities en het volledige controlemanifest staan onder `tmp/codex-boekcontrole` in dezelfde herkenbare werkmap.
