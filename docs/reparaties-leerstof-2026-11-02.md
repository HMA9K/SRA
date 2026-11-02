# Reparaties leerstof en weergave

Controle van de gepubliceerde versie `e0e7667` op 2 november 2026. Deze wijziging repareert de gevonden fouten; alle leerstof, vragen, antwoordindices, bronnen en opgeslagen voortgang blijven behouden.

## Inhoud

| Onderdeel | Reparatie |
|---|---|
| Logaritmegrafiek les 16 | Asgetallen stonden op afgeronde tussenposities (een "2" op x = 1,5). Assen gebruiken nu ronde waarden op hun eigen positie; dit geldt voor alle leesbruggen en mini-grafieken met dezelfde bouwfunctie. |
| Les 2 | "De vierkantswortel keert dat om" verwees na het samenvoegen naar de variantie; nu "keert het kwadrateren om". Negatieve getallen gebruiken het minteken. |
| Les 1 t/m 3 | De kop "Gemiddeld puntengewicht in tentamens" beloofde een getal dat bij basislessen ontbreekt; deze lessen gebruiken nu "Belang voor het tentamen". |
| Les 8 | De toelichting bij het strata-schema onderscheidt nu de keuze van de uitbreiding (variantiebijdragen) van de verdeling vooraf volgens Neyman (Nᵢ × sᵢ). |
| Vaktaal | "Route" in lesteksten, koppen, vragen en oefeningen is vervangen door gewone woorden zoals werkwijze, rekenwijze of aanpak. "Hoofdstuk-8-doel" en "een schatter uit hoofdstuk 8" zijn omschreven. |

## Weergave

| Onderdeel | Reparatie |
|---|---|
| Leerblokken | Formulebladnotatie zoals s_w, s_b en R_bw verschijnt als subscript. Startwaarden hebben hoogstens vier decimalen; een automatisch bepaalde kritieke t wordt met drie decimalen getoond. |
| Notatie overal | Platte notatie zoals s_e, Ŵ_MPU, e_(t−1) en SSR_klein verschijnt in lessen, begripchecks, MC-vragen, tentamenoefeningen en de leesversie als subscript. Eén regel in `js/formula-help.js` doet dit na de formule-uitleg; `scripts/package.py` past dezelfde regel toe op de leesversie zonder scripts. SPSS-variabelen (LN_MORT, ZRE_1, Hartritme_max) en bestandsnamen blijven letterlijk. |
| Nadruk op getallen | Alleen berekeningen en formules krijgen nadruk; losse getallen in een zin niet meer. De symbolenkolom in les 1 en de rekenregels in de leesbruggen zijn gelijk opgemaakt. |
| Smalle schermen | Lopende tekst is links uitgelijnd in plaats van uitgevuld. De puntentabel past met zachte afbreekpunten in de koppen. |
| Leren en Oefenvragen maken | De lege titelbalk onder de paginakop is weg; de titel staat al in de paginakop. Fases, lesrijen en samenvattingen zijn compacter. Op brede schermen staan de vier fases met samenvatting van Leren in een raster van 2 × 2 met even hoge kaarten; Tentamen staat eronder. "Samenvatting" in een fasekop opent een eigen pagina (`#samenvatting/<fasenummer>`) met alleen de samenvatting van die fase. Bij 1366 × 900 is Leren 1150 px hoog (was 2739); Oefenvragen maken past in één scherm. De zin "Je kunt ook rechtstreeks een onderwerp kiezen." is verwijderd. |

De verouderde controlesom in `data/mc-exam-frequency.js` is door de bouwstap bijgewerkt; `npm run test:frequencies` faalde daardoor op de hoofdtak.

## Rustiger lesbeeld

| Onderdeel | Wijziging |
|---|---|
| Vet in de lopende tekst | Begrippen midden in een zin zijn niet meer vet (`calm_emphasis` in `scripts/lesson_reading.py`, ook voor de samenvattingen). Koplabels zoals "Let op:" en "Noodzakelijke basis." en vette uitkomsten blijven. De vette regels in de leesbruggen en de symbolenkolom zijn teruggezet naar gewone tekst. |
| Lettertype van formules | Letters en cijfers in formules gebruiken het lettertype van de tekst, in de lopende tekst ook dezelfde grootte en hetzelfde gewicht. Wortels, haakjes en sommatietekens houden het wiskundefont, zodat ze blijven meerekken. Het gemiddeldestreepje (ē, b̄, w̄) staat weer boven de letter; de relatieve hoogte "+0.15em" werd door browsers genegeerd. |
| Formulevakken | Formules in één vak staan naast elkaar zolang ze passen; een te brede formule krijgt een eigen regel. |
| Lespagina | De lesinhoud staat gecentreerd in de beschikbare ruimte. Fase, lesnummer en bronregel boven de les zijn weg; ze staan in het lesmenu. De genummerde tekstblokken zijn vaste blokken met een kop in plaats van in- en uitklapbare blokken. |
| Witruimte | Een kleine figuur naast een korte alinea neemt aangrenzende alinea's, lijsten of één formulevak mee, en een tabel die erop volgt. Zo blijft er geen lege ruimte onder de tekst. Bij de regressieschatter blijft circa 55 px over, omdat daar geen geschikt blok direct naast de alinea staat. De leesbruggen hebben minder marge. |
| Zelf onderzoeken | Invoervakken zijn 30 px hoog (was 40 px) en de regels staan dichter op elkaar, zodat de bediening naast de grafiek past. Op smalle schermen blijven de vakken 44 px voor aanraakbediening. |
| Leren | De zin "Volg de lessen van boven naar beneden. Elke les verbindt de uitleg met een voorbeeld, zelf onderzoeken en korte begripchecks." is verwijderd. |

## Bekende grenzen

De bestaande browsertest `tests/formula-visuals-browser.cjs` faalt ook op de ongewijzigde hoofdtak (zoeken op de formulepagina toont geen formulefiguren); dat valt buiten deze wijziging. De mobiele controle is browseremulatie, geen fysieke-telefoontest.
