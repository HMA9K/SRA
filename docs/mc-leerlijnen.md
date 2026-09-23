# MC-vragen per onderwerp

Gemaakt met Codex, 18 september 2026.

Het dashboard houdt de CAFA2-indeling aan: eerst één rij **SRA oefenvragen / SRA-MC**, daaronder de gedateerde open tentamens. De MC-ingang opent een eigen onderwerpskeuze binnen de Cirrus-omgeving.

## Vraagbank

- 19 onderwerpen, gekoppeld aan de 19 bestaande lessen.
- Vanaf 21 september kun je dezelfde vragen ook als doorlopende reeks per hoofdonderwerp maken: Basis statistiek (19), Steekproeven en schatten (43), Regressie en toetsen (39), Meervoudige regressie en modelbouw (27) en Tentamenaanpak (6).
- 134 vragen: de 57 bestaande begripchecks, 57 eerdere oefenvarianten en 20 aanvullingen van 20 september.
- De oorspronkelijke zes vragen per onderwerp bevatten twee makkelijke, twee gemiddelde en twee moeilijke vragen. De nieuwe brongebonden varianten zijn op passend niveau toegevoegd. De niveaus zijn didactische inschattingen, geen psychometrisch gemeten moeilijkheidsgraden.
- Uitleg per vraag, herkenningspatroon, valkuil en verwijzingen naar les en projectbronnen.
- De patroonherkenning verbindt per vraag concrete woorden, symbolen of gegevens met hun betekenis, de passende aanpak en het vereiste antwoord. De vier onderdelen zijn afzonderlijk leesbaar na het controleren. Dezelfde uitwerking geldt voor de 57 leschecks.
- De aanvullende rekenvragen gebruiken eigen getallen op basis van de aangeleverde formules. Het zijn geen officiële tentamenvragen.

De bron staat in `scripts/build_mc.py`. `scripts/package.py` bouwt `data/mc.js` en neemt de gegevens en oefenomgeving op in de zelfstandige HTML. De antwoordopties hebben een vaste volgorde per vraag, met afwisselende juiste letters. Bestaande voortgang mag bij latere inhoudelijke wijzigingen niet stilzwijgend aan andere antwoordletters worden gekoppeld: gebruik dan nieuwe vraag-id's of een expliciete migratie.

## Navigatie en voortgang

- `#tentamen/mc`: onderwerpen.
- `#tentamen/mc/<onderwerp>/<vraagnummer>`: vraag.
- `#tentamen/mc/<onderwerp>/resultaat`: resultaat en uitleg per vraag.
- `#tentamen/mc/hoofd-<slug>/<vraagnummer>`: doorlopende hoofdonderwerpreeks, met de oorspronkelijke vraag-ID's en de les- en bronverwijzing van elke afzonderlijke vraag.
- `#tentamen/mc/resultaten`: voortgang over alle onderwerpen.
- Afgeronde onderwerpen verschijnen ook in het dashboard onder Voltooid.

De browser bewaart MC-antwoorden apart onder `sra-mc-v1`. De eerste antwoordkeuze en de meest recente gecontroleerde antwoordkeuze blijven beide behouden. De score wordt afgeleid uit de antwoordkeuzes; opgeslagen correctheidsvlaggen worden niet vertrouwd. Export en import zijn bereikbaar bij MC-voortgang. Een ongeldige import verandert de bestaande antwoorden niet; onleesbare browseropslag wordt niet overschreven.

Hoofdonderwerpen en losse lesonderwerpen delen dezelfde MC-antwoorden en markeringen. Een vraag die in een hoofdonderwerp is gemaakt, telt dus ook mee bij het bijbehorende lesonderwerp. In de totaalscore wordt die vraag eenmaal geteld.

Leschecks en open tentamenantwoorden blijven in hun bestaande opslag staan. De nieuwe MC-bank begint met eigen voortgang, zodat een eerder beantwoorde lescheck niet ten onrechte als een gemaakte nieuwe MC-poging telt.

## Referenties en controle

- Inhoud: `scripts/build_content.py`, het projectformuleblad, slides en de bronverwijzingen van de betrokken lessen.
- [CAFA2 dashboard](https://github.com/HMA9K/CAFA2/blob/382add0fb67ed503438876e40dbba46497e02c02/js/exams.js) en de screenshot van de gebruiker: dashboardstructuur en Cirrus-stijl.
- `tests/mc.cjs`: niveauvolgorde, bronkoppelingen, onafhankelijke controles van rekenantwoorden, herhaalde pogingen, herladen, import/export en opslagfouten.
- Browsercontrole: dashboard, onderwerpen, eenvoudige en moeilijke vraag, fout/goed, feedback, markeren, teruggaan, resultaten en mobiele weergave.
