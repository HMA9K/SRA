# study-ui 1.1.1

Een kleine distributie van CSS voor de algemene vormgeving van studie-apps. Gebaseerd op [CAFA2, commit 382add0](https://github.com/HMA9K/CAFA2/tree/382add0fb67ed503438876e40dbba46497e02c02), inclusief het compacte vragenoverzicht. De exacte herkomst staat in `provenance.json`.

De kop en lichtmodus volgen daarnaast de gepubliceerde CAFA2-versie van 23 september 2026. Het pakket gebruikt gewone CSS en een klein zelfstandig themascript, zonder framework, externe lettertypen of netwerkverbinding. De distributie is lokaal; er bestaat binnen deze oplevering nog geen afzonderlijke gedeelde repository. CAFA2 gebruikt dit pakket nog niet.

## Gebruiken

Laad `theme.js` direct in de head, vóór de stylesheets, en geef het html-element een eigen `data-study-storage`-sleutel. Laad `tokens.css` gevolgd door `shell.css` en geef de body de class `study-shell`. Laad `header.css`, `theme.css` en de door `scripts/build_study_dark.py` opgebouwde donkere kleuren als laatste, ook in de tentamenmodus. Voeg de onderstaande componentklassen toe aan de bijbehorende bestaande elementen. Vakspecifieke CSS volgt na de gedeelde bestanden en mag tokens expliciet overschrijven.

```html
<link rel="stylesheet" href="vendor/study-ui/tokens.css">
<link rel="stylesheet" href="vendor/study-ui/shell.css">
<body class="study-shell">
  <header class="study-topbar">
    <div class="bar-inner">
    <a class="study-brand" href="#start">SRA <small>SAMENVATTING</small></a>
    <div class="study-controls">
      <div class="study-font-group" role="group" aria-label="Tekstgrootte">
        <button data-font="-1" aria-label="Kleinere letters">A−</button>
        <button data-font="0" aria-label="Standaardgrootte" hidden>A</button>
        <button data-font="1" aria-label="Grotere letters">A+</button>
      </div>
    </div>
    </div>
  </header>
</body>
```

| Component | Contract |
|---|---|
| `study-topbar` | De sticky header met een `bar-inner`-flexcontainer voor merk en bediening. |
| `study-brand` | Merknaam als link, optioneel SVG en `small` voor toelichting. |
| `study-controls` | Groep headerknoppen; gedrag blijft onderdeel van de app. |
| `study-font-group` | A−/A/A+ met `data-font` of SRA's bestaande knop-ID's. `hidden` wordt gerespecteerd. |
| `study-profile` | Weergave van bestaande lokale profielinformatie. De stijl voegt geen account of opslag toe. |
| `study-nav` | Navigatie; huidige link gebruikt `aria-current="page"`. |
| `study-page-title` | H1 zelf of titelcontainer met een H1. |
| `study-dashboard` | Binnenruimte voor overzichten en secties. |
| `study-table` | Overzichtstabel, geen rekenmatrix. Gebruik `th scope="col"` en waar passend `th scope="row"`. Middenkolommen krijgen `td data-label="Kolomnaam"`. Eerste kolom is titel, laatste kolom actie. |
| `study-btn` | Algemene knop/link. Voeg `primary` toe voor groene hoofdacties. |
| `study-score` | Tekstscore met `full`, `partial`, `zero` of `ungraded`; tekst moet ook zonder kleur begrijpelijk zijn. |
| `study-result-row` | Drie kinderen: nummer, omschrijving, score/status. |
| `study-overview-dialog` | Native `dialog` met `aria-labelledby`; de app beheert openen, sluiten en focus. |
| `study-overview-head` | Titel `h2` en sluitknop met een toegankelijke naam. |
| `study-overview-body` | Scrollgebied met een optionele fase-intro en daarna `study-overview-body-inner`. |
| `study-overview-body-inner` | Flexcontainer met `study-overview-remaining` en `ol.study-overview-grid`; op mobiel onder elkaar. |
| `study-overview-remaining` | Aantal resterende vragen in `strong`, met een verklarend tekstlabel. |
| `study-overview-grid` | Genummerde lijst met `--overview-columns`; tien rijen per kolom op desktop, maximaal twee kolommen op mobiel. |
| `study-overview-item` | Link met `study-overview-number` en `study-overview-state`. `is-answered` markeert beantwoorde vragen; `aria-current` markeert de huidige vraag. |
| `study-overview-divider` | Class op een bestaand `li` om een inhoudelijke scheiding erboven te tekenen; geen extra lege lijstregel. |
| `study-overview-footer` | Voettekst met `study-overview-range` voor de nummerreeks en een sluitknop. |

De antwoordstatus moet ook tekstueel leesbaar zijn. Gebruik bijvoorbeeld `aria-label="Vraag 3, beantwoord"`; kleuren alleen zijn onvoldoende. De mobiele variant gebruikt de normale lijstvolgorde per rij. SRA heeft per leerfase maximaal achttien vragen en gebruikt twee kolommen. De gedeelde CSS bevat geen vraagselectie, antwoordlogica of scoreberekening.

De tabel wordt op schermen tot 680 px in rijen weergegeven. Gebruik de component niet voor formules, rekentabellen of tabellen met samengevoegde cellen. Die behouden hun vakspecifieke presentatie en eigen schuifgebied. De kolomkoppen blijven voor hulpsoftware in de HTML aanwezig.

`--study-*` zijn de gedeelde ontwerptokens. `--study-content-font-size` documenteert de basis van 16 px, maar het pakket wijzigt de root-lettergrootte niet. De app beheert de leesgrootte. De header is standaard 64 px, mobiel 58 px; een afnemer met extra headerregels moet zijn eigen navigatiepositie afstemmen op de werkelijke hoogte.

`theme.js` verzorgt Aan, Uit en Automatisch, bewaart een handmatige keuze in sessionStorage en volgt bij Automatisch de apparaatinstelling. Het script meet ook de werkelijke headerhoogte voor de navigatie en grafieken. Zie `index.html` voor de toegankelijke dropdownmarkup. Antwoorden, voortgang, routering en overige knopfuncties blijven bij de app.

`dark-palette.css` bevat semantische kleurcorrecties voor de kleurcompiler. De compiler vertaalt alleen kleuren en laat indeling, afbeeldingen en afdrukstijlen intact.

## Bijwerken

Wijzig de bronbestanden hier, verhoog `version` in `package.json` en `provenance.json` en werk herkomst en wijzigingstoelichting bij. Voer daarna in SRA uit:

```powershell
python scripts/sync_layout.py
python scripts/sync_layout.py --check
```

Een uitgecheckte toekomstige gedeelde release kan als lokale bron worden gebruikt:

```powershell
python scripts/sync_layout.py --source 'C:\Projects\study-ui'
```

Er worden vier CSS-bestanden, het themascript en een controlemanifest naar `vendor/study-ui` geschreven. Voeg het bronpakket en de gesynchroniseerde distributie toe aan versiebeheer. Lees [de gezamenlijke werkwijze](../../docs/gedeelde-layout.md) voor releases over meerdere repositories.
