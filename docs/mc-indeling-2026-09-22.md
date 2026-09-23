# MC-indeling, 22 september 2026

De onderwerpkeuze en de vraagpagina zijn aangepast aan de twee screenshots van de gebruiker. De publicatie staat op https://sra-2xt.pages.dev/#tentamen/mc.

## Wat is aangepast

- Vijf compacte hoofdgroepen met een startknop. De negentien deelonderwerpen staan onder de bijbehorende uitklapbare groep. Antwoorden en markeringen blijven gedeeld tussen hoofdgroep en deelonderwerp.
- Moeilijkheid staat als gewone tekst bij de opbouw en bij de vraag. De drie blokken die op knoppen leken zijn verwijderd.
- Een brede vraagpagina met de titel van de oefenreeks, vraagnummer en voortgang, twee kolommen met antwoordkaarten, uitklapbare hulp rechts en een vaste navigatiebalk onderaan.
- Op smalle schermen staan de antwoordkaarten onder elkaar en staat de hulp boven de vraag. De uitleg verschijnt onder de gekozen antwoordrij; op mobiel direct onder de gekozen optie.
- Nakijken, direct nakijken, markeren, het vraagoverzicht, de introductie en afronden naar het resultatenoverzicht zijn bereikbaar. De bestaande zwevende rekenmachine blijft bruikbaar naast het beantwoorden.

## Gecontroleerd

De volledige bestaande JavaScript-testsuite en de negen stylesheettests zijn geslaagd. Na de laatste kleine afstands- en tekstcorrecties zijn de MC-, antwoordfeedback- en stijlisolatiecontroles opnieuw geslaagd.

In de browser gecontroleerd: hoofdgroep starten, deelonderwerpen uitklappen, fout en goed antwoord nakijken, directe controle, behoud van de eerste poging, markering, herladen, volgende vraag, introductie, vraagoverzicht, basishulp, resultaten en rekenen terwijl een antwoord wordt gekozen. Ook de langste combinatie van vraag en vier antwoordopties is bekeken. Breedtes 390, 1280 en 1695 pixels zijn gebruikt; geen horizontale overloop in de gecontroleerde schermen. De vaste navigatie blijft bereikbaar.

## Publicatie

- Cloudflare Pages-productiepublicatie: `b848d259-0405-46fd-95f4-934029a84ed2`.
- Status: succesvol, 22 september 2026 om 17:00:10 UTC.
- De live startpagina, MC-code, MC-opmaak, MC-vragendata, lesdata en zelfstandige HTML komen overeen met het gebouwde pakket. De door Cloudflare toegevoegde analyticscode is buiten de HTML-vergelijking gehouden.
- De live onderwerpkeuze en vraagpagina zijn apart in de browser bekeken. Geen JavaScript-fouten of waarschuwingen bij deze controle.
- Zelfstandige HTML, websitepakket en beide ZIP-pakketten zijn bijgewerkt.

## Bronnen voor deze wijziging

De twee door de gebruiker aangeleverde screenshots, de bestaande SRA-vragen en lesverwijzingen in `data/mc.js`, en de bestaande CAFA2/Cirrus-interface. Deze wijziging gaat over de indeling en bediening; de vraaginhoud is niet herschreven.
