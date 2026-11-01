# Controle van de leerweergave in alle lessen

Lokale vervolgcontrole van 1 november 2026, op de wijzigingen na `ba4cf161e9c914c43e84bc7ca4ea6d0611f72ddc`. Deze controle publiceert niets. De werkversie omvat de eerdere verbeteringen aan uitleg, grafieken, formules, vraagfeedback en voortgang.

## Dekking en herstel

| Onderdeel | Toepassing en controle |
|---|---|
| Interactieve invoer | Alle 19 lessen: getalvelden naast hun label; schuifregelaar en getal naast elkaar; begripslink en symbool blijven op dezelfde tekstregel. Inhoudelijke aanwijzingen blijven zichtbaar. De herhaalde bedieningshint blijft beschikbaar voor voorleessoftware. |
| Keuzes bij grafieken en instellingen | Alle 19 lessen: knoppen met beschrijving; geen dropdowns in de les. De vijf diagnosemodi zijn afzonderlijk doorlopen. Wisselen en wijzigen van vensterbreedte behouden de invoer. |
| Volledige resultaten | Ook uitgeklapte grafieken hebben een begrensde hoogte van maximaal 280 pixels. Berekeningen, tabellen en toelichtingen blijven beschikbaar. |
| Uitleg en voorbeelden | De zes overgangen, samengevoegde rekenuitleg, vergelijking van populatie en steekproef en 15 mini-grafieken opnieuw gecontroleerd. Grafieken staan naast hun uitleg waar daarvoor ruimte is; op smalle schermen eronder. |
| Begripvragen | Alle 57 vragen nagelezen. Tien onduidelijke vraagzinnen verduidelijkt, ook in het vragenoverzicht. Antwoordvolgorde, antwoordindices, feedback, bronverwijzingen en vraag-ID's behouden. De korte checks gebruiken het compacte blok 'Onthoud'; uitgebreide tentamenvragen behouden hun passende uitwerking. |
| Dubbele uitleg | De gezamenlijke leeswijzer bij de vijf College-8-modellen staat eenmaal vóór de modeluitwerkingen. Modeltabellen, figuren, waarden, afzonderlijke beoordelingen en alle unieke toelichting blijven behouden. |
| Formules en begrippen | Direct zichtbare symbooluitleg, leesbare formuleopmaak, breuken, wortels, indices en bronnummering opnieuw gecontroleerd. De zichtbare lesuitleg bevat geen aanduiding 'eigen'. |
| Uitwerkingen en bronnen | Compacte getinte antwoordblokken, compacte feedback en bronregels; geen inhoudelijke uitwerkingen verwijderd. |
| Tentameninformatie | Voorkomen en puntengewicht blijven afzonderlijke gegevens. Gemiddeld puntengewicht geldt voor tentamens waarin het onderwerp voorkomt. Deelvragen zijn als totaal aangeduid. De controle omvat negen unieke tentamens en 900 punten. |
| Leesstatus en antwoorden | Leesmarkering in beide richtingen bedienbaar. Overzicht en lesmenu onderscheiden lezen en goede begripchecks. Antwoorden en notities blijven bij wijzigen van de leesstatus en herladen behouden. |

## Gemeten invoerkolommen

Hoogte in pixels bij een venster van 1197 × 950, standaardinstellingen. Dit is de invoerkolom inclusief de inleidende uitleg, niet de hoogte van de hele les. Iedere kolom is korter; mobiel blijft de bediening onder het resultaat beschikbaar.

| Les | Voor | Na |
|---|---:|---:|
| Beginnen | 537 | 388 |
| Rekenen | 239 | 209 |
| Onzekerheid | 1026 | 679 |
| Directe schatter | 747 | 457 |
| Verschilschatter | 803 | 542 |
| Quotiëntschatter | 1057 | 662 |
| Regressieschatter | 1089 | 637 |
| Steekproefomvang | 794 | 515 |
| Stratificatie | 874 | 591 |
| Regressielijn | 413 | 288 |
| ANOVA | 711 | 404 |
| Toetsen | 645 | 533 |
| Diagnostiek | 802 | 657 |
| Voorspellen | 1090 | 665 |
| Meervoudige regressie | 943 | 633 |
| Transformaties | 603 | 447 |
| Modelbouw | 948 | 600 |
| Validatie | 622 | 427 |
| Tentamen | 661 | 566 |

## Bewijs en grenzen

- Bestaande reken-, bron-, inhouds- en stijlcontroles: `npm test`, `npm run test:learning`, `npm run test:points`, `npm run test:sources`, `npm run test:audit`, `npm run test:patterns` en `npm run test:styles`.
- De uitgebreide `tests/lab-choices-browser.cjs` controleert alle 19 lessen in licht en donker op desktop en een mobiele vensterbreedte. Deze controle bewaakt nu ook de compacte invoer, alle uitgeklapte grafieken en feedback van alle 57 begripvragen.
- Bestaande browsercontroles voor compacte uitleg, leesstatus, puntengewicht, de zes overgangen, mini-grafieken en de volledige lesuitbreidingen worden samen gebruikt. Schermafbeeldingen en meetresultaten blijven lokaal onder `tmp/`.
- Vergelijking met de vorige lokale versie: alle 57 basisantwoorden en alle 175 vragen in het vragenoverzicht behouden hun opties en correcte antwoordindex. Alle modeltabellen, figuren, unieke alinea-inhoud en bronnen zijn behouden. Alleen de tien genoemde vraagformuleringen en de plaatsing van herhaalde modeluitleg veranderen.
- De browsercontroles gebruiken Edge met verschillende vensterbreedtes. Dit is geen fysieke-telefoontest of volledige toegankelijkheidsaudit. Toetsenbordbediening, focus, invoerbehoud, labels en pagina-overloop worden wel gecontroleerd.
- Geen push, samenvoeging of deployment. De live website is geen bewijs voor deze lokale werkversie. Voor publicatie moeten de actuele versie en publicatievolgorde opnieuw worden gecontroleerd.

Bronnen: [SRA-project](https://github.com/HMA9K/SRA), de bestaande cursusbronnen via de lesverwijzingen, `PROJECT_GUIDE.md` en de genoemde uitvoerbare controles.
