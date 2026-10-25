# Leerstof: leesbaarheid en open taken

## Wijziging

De negentien lessen hebben een compactere indeling, een vaste leskop en een smaller, strakker uitgelijnd lesmenu. Voorkennis, leerdoelen, boek-/collegeverwijzing en tentamenfocus blijven beschikbaar in een gesloten uitklapblok. Bedieningsteksten over klikken, browseropslag en de formulering van bronnen zijn verwijderd. De inhoudelijke bronverwijzingen blijven staan.

Elke les begint met een inhoudelijk vertrekpunt en sluit af met de kern en het vervolg. Ieder bestaand stappenvoorbeeld heeft nu een expliciete vraag, context en doel. Bij het quotiëntvoorbeeld blijft zichtbaar dat het voorbeeld nog geen volledig interval berekent. De oorspronkelijke stappen, cijfers, vragen en bronverwijzingen zijn behouden.

Bekende inline breuken, wortels en indices worden tijdens de bestaande bouwstap omgezet naar MathML. Dit is ingebouwde wiskundige HTML-opmaak. De omzetting raakt geen attributen, bestaande MathML of figuren. Dezelfde inhoud komt terug in de zelfstandige interactieve HTML en leesversie. Lopende tekst is uitgevuld; formules, tabellen en bediening behouden hun passende uitlijning.

De wijziging is overgezet op de actuele hoofdtak van 3 oktober 2026. De nieuwere gedeelde navigatie, rekenmachine en invoercomponenten zijn behouden. De eerdere werkmap blijft lokaal beschikbaar.

## Controles

- De bestaande JavaScript-controles controleren onder andere 19 lessen, 57 begripchecks, 19 rekenbladen, 175 MC-vragen, 224 tentamenvragen, bronkoppelingen, formule-uitleg, navigatie en voortgang.
- `tests/lesson-reading.py` controleert alle lesinleidingen, afsluitingen en voorbeeldvragen, plus breuken, wortels, indices, herhaalde opmaak en behoud van HTML-attributen en figuren.
- `tests/learning-revision-browser.cjs` doorloopt alle 19 lessen bij 1366, 768, 390 en 320 pixels, zowel licht als donker. Controlepunten: vaste kop bij scrollen, geen pagina-overloop, uitgevulde tekst, ingeklapte voorbereiding, bronkoppen, begrippenscopes en leesverband.
- Dezelfde browsercontrole toetst toetsenbordbediening van inline formule-uitleg, openen en herstellen van voorbeeldstappen, 41 MC-casussen, bewaren van een antwoord na herladen, formulegidsen en de twee zelfstandige HTML-versies.
- De donkere opmaak is opnieuw gegenereerd en met de bestaande stijltests gecontroleerd. Desktop en mobiele weergave zijn ook visueel bekeken.

Dit betreft lokale browser- en technische controles. Een fysieke telefoon en de productieversie zijn niet voor deze wijziging getest.

## Nog open in de repository

De [takenmatrix van 27 september](gelijkloop-en-open-taken-2026-09-27.md) is leidend. De oudere lijst met tien taken is niet de actuele status. De navigatievolgorde en dubbele home-navigatie waren al opgelost en blijven behouden.

Nog te behandelen: volledige tentamendeelvraagkoppeling en zelfstandige oefenvragen met casus en eerdere uitkomsten; bronfilter; zelf uitwerken met passende statistische invoer; verstelbare casus- en leerpanelen; oorspronkelijke PDF-panelen; herstart via de intro en dashboardreset; volledige beoordeling van rekenstappen. De matrix noemt daarnaast gezamenlijke distributie en daadwerkelijke ontvangst van gebruiksmetingen. De 175 huidige MC-vragen betekenen nog geen volledige koppeling met alle 224 tentamenvragen.

De GitHub-controle op 25 oktober 2026 vond daarnaast één open issue: [#5, centrale projecthandleiding en overdracht](https://github.com/HMA9K/SRA/issues/5). Er zijn op dat controlemoment geen open pull requests gevonden.

Oude boekcontrolebevindingen zijn deels opgevolgd in de herziening van 25 september. Zij zijn daarom niet zonder vergelijking als nieuwe open fouten geteld. De [regressiedekking](dekking-regressie-2026-09-25.md) vermeldt nog grenzen: geen volledige vergelijking van iedere boekalinea, geen apart geteste actuele SPSS-uitvoering voor tijdslags/autocorrelatiecorrectie en ontbrekende volledige herhaalde diagnostiek in de oorspronkelijke college-uitwerking.

Bronnen: bestaande lesdata en bouwmodules, de hierboven gekoppelde lokale controleverslagen, [SRA-repository](https://github.com/HMA9K/SRA) en [open GitHub-issue](https://github.com/HMA9K/SRA/issues/5). Er zijn geen externe leerstofbronnen toegevoegd.
