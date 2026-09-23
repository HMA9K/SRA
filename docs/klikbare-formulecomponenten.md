# Klikbare formulecomponenten

Gemaakt met Codex voor de interactieve SRA-samenvatting.

In de uitleg en de formulepagina's zijn statistische symbolen en coëfficiënten afzonderlijk aanklikbaar. Het compacte, niet-modale kaartje verschijnt onder het aangeklikte woord of symbool en bevat twee of drie zinnen en een verwijzing naar de bestaande lesbron. Het opent geen andere les en bewaart de leespositie. Sluiten kan met de sluitknop, Escape of een klik buiten het venster; bij Escape en de sluitknop keert de toetsenbordfocus terug naar het symbool. Een klik buiten het kaartje verplaatst de focus niet terug.

`js/formula-help.js` annoteert native MathML zonder de breuken, indices, machten of accenten te vervangen. Samengestelde symbolen zoals b₁, ŷᵢ, s_Q en R²_adj krijgen als geheel uitleg. Gewone rekentekens, haakjes, machten, wortels, breukstrepen en vaste getallen krijgen geen rekenuitleg. Statistische notatie zoals s², Σ en ± blijft aanklikbaar en is ook met Tab en Enter te openen. Gewone formuletekst in rekenregels, uitgeklapte stappen en antwoorduitleg wordt na een wijziging opnieuw verwerkt. Invoervelden en eigen antwoorden worden overgeslagen.

De context bepaalt de betekenis. Bij logaritmen is e het natuurlijke grondtal, bij de verschilschatter is e = b − w, en bij regressie is e = y − ŷ. Ook s_e, t, b en de index i worden per onderwerp onderscheiden. De R² van een hulpregressie krijgt een andere toelichting dan die van het hoofdmodel.

De inhoud is gebaseerd op de bestaande SRA-lessen, `scripts/presentation.py` en `scripts/lesson_guides.py`. De verwijzingen in het venster volgen de lesbronnen, bij voorkeur het aangeleverde formuleblad. De oorspronkelijke PDF's en afbeeldingen blijven oorspronkelijke documenten; losse symbolen binnen zo'n afbeelding zijn geen selecteerbare tekst.

Controle: `node tests/formula-help.cjs` controleert alle 127 MathML-formules in de les- en formulepagina's, betekenisverschillen, tekstgrenzen en de lengte van de toelichtingen. Browsercontroles omvatten openen, sluiten, toetsenbordbediening, dynamische rekenregels en mobiele weergave.

De zelfstandige interactieve HTML bevat deze functie ook. De leesversie blijft bewust zonder scripts.

Het centrale formuleoverzicht opent onderwerpen op dezelfde pagina met de volledige formulegids. Er zijn geen leslinks in die lijst. De optionele knop naar een apart rekenblad blijft binnen het formuleonderdeel; die pagina heeft geen leszijbalk. Alleen de expliciete knop Naar de les opent de samenvatting.

Begrippen en formules gebruiken samen `js/inline-help.js`: maximaal één kaartje tegelijk, geen verduistering en geen focussprong bij openen. Voorbeelden en bronnen bij begrippen zijn uitklapbaar. Bij onvoldoende ruimte onder het woord verschijnt het kaartje erboven; het blijft binnen de schermranden en volgt de tekst tijdens scrollen.


## Controle van de uitlegvensters, 18 september 2026

Gemaakt met Codex. Het geopende tabblad met `v=formule-uitleg-20260918`
bevatte nog de oude versie: `#sra-term-popup` was daar een native `dialog` met
actieve modaliteit en zonder de gedeelde inline-helper. De opgeslagen huidige
HTML gebruikt voor begrippen en formulecomponenten een `div` met
`aria-modal="false"`. Voorbeeld en bronnen zijn gesloten uitklappers.
Een reeds geopende zelfstandige HTML neemt latere bestandswijzigingen pas
na opnieuw laden over.

Browsercontrole op de afzonderlijke testpoort 8769:

- Alle 19 lessen: telkens een begrip in de uitleg en een begrip in het
  rekenblad aangeklikt. Alle 38 controles toonden een klein, niet-modaal
  uitlegvenster onder het woord, zonder verduistering.
- Hulpregressie bij Modelbouw gecontroleerd: breedte 360px, afstand onder
  het aangeklikte woord 7px; geen actieve modale dialoog.
- VIF-component op de formulepagina en Hulpregressie in de begrippenlijst
  gecontroleerd; beide gebruiken dezelfde positionering zonder modaliteit.
- Bij onvoldoende ruimte onder het woord kan het venster erboven verschijnen
  om binnen het scherm te blijven. De leespositie wordt niet verplaatst.

`tests/inline-help.cjs` controleert ook sluiten met Escape of buitenklik,
focusbehoud, wisselen tussen begrip en formule, schermranden, scrollen,
routewisseling en de aanwezigheid van de actuele helper in de zelfstandige HTML.
De rekenmachine, het vragenoverzicht en tentamenbevestigingen hebben hun eigen
bediening; zij zijn geen begrippen- of formule-uitleg.
