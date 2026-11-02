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

## Bekende grenzen

De bestaande browsertest `tests/formula-visuals-browser.cjs` faalt ook op de ongewijzigde hoofdtak (zoeken op de formulepagina toont geen formulefiguren); dat valt buiten deze wijziging. De mobiele controle is browseremulatie, geen fysieke-telefoontest.
