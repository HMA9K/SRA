"""Voorkennis en formule-uitleg bij de bestaande, brongebonden SRA-lessen.

Geen nieuwe methode of tentamenstof: de formuleweergave komt uit presentation.py.
De rekenvoorbeelden worden zo veel mogelijk rechtstreeks uit de les hergebruikt.
Deze module leest geen SET-map; SET wordt alleen als voorkennis benoemd.
"""
from __future__ import annotations

from html import escape
import presentation as p


PREREQUISITES = {
    "beginnen": [
        "Geen statistische voorkennis nodig: begin hier met populatie, steekproef en waarneming.",
        "SET is de door SRA veronderstelde voorkennis. De benodigde basis wordt in deze leerroute opnieuw uitgelegd.",
    ],
    "rekenen": [
        "Les 1: onderscheid tussen populatieomvang N en steekproefomvang n.",
        "SET-basisvaardigheden zoals optellen, delen, breuken en percentages; de benodigde stappen worden hier herhaald.",
    ],
    "onzekerheid": [
        "Les 2: gemiddelde, variantie, standaardafwijking, machten en wortels.",
        "SET-basis: een percentage omzetten naar een kans, bijvoorbeeld 5% = 0,05. Deze les herhaalt dit.",
    ],
    "mpu": [
        "Lessen 1–2: populatie, steekproefgemiddelde en standaardafwijking.",
        "Les 3: marge, betrouwbaarheid, t-tabel en eindigheidscorrectie.",
    ],
    "verschil": [
        "Les 4: een totaalschatting en haar standaardfout onderscheiden.",
        "Lessen 2–3: variantie uit totalen berekenen en een tweezijdig interval maken.",
    ],
    "quotient": [
        "Les 4: boekwaardetotaal, steekproefgegevens en onzekerheidsmarge onderscheiden.",
        "Les 2: rekenen met verhoudingen, kwadraten en standaardafwijkingen.",
    ],
    "regressieschatter": [
        "Les 4: de MPU-schatting en de standaardfout van een geschat totaal.",
        "Les 6: boekwaarde en werkelijke waarde kunnen extra samenhang bevatten.",
        "Een helling lezen: hoeveel de geschatte werkelijke waarde verandert als de boekwaarde één eenheid stijgt.",
    ],
    "steekproefomvang": [
        "Les 3: de marge E is de helft van de totale intervalbreedte.",
        "Lessen 4–7: de spreiding kiezen die bij de gebruikte schatter hoort.",
    ],
    "stratificatie": [
        "Les 4: een totaal en standaardfout per deelpopulatie uitrekenen.",
        "Les 2: een variantie is het kwadraat van de bijbehorende standaardafwijking.",
        "Les 3: voor een interval is een passende kritieke t-waarde nodig.",
    ],
    "regressielijn": [
        "Les 1: herkennen wat een variabele en een waarneming zijn.",
        "Les 2: gemiddelden, spreiding, vermenigvuldigen en het invullen van een formule.",
    ],
    "anova": [
        "Les 10: werkelijke y, voorspelde ŷ en residu uit elkaar houden.",
        "Les 2: gekwadrateerde afwijkingen optellen en een wortel nemen.",
    ],
    "toetsen": [
        "Les 3: kansen, α, eenzijdigheid, tweezijdigheid en tabelgrenzen.",
        "Les 10: de betekenis van een regressiecoëfficiënt.",
        "Les 11: ANOVA, F en residuele vrijheidsgraden.",
    ],
    "diagnostiek": [
        "Les 10: een residu is y minus ŷ.",
        "Les 12: nulhypothese, p-waarde en significantieniveau α.",
        "Les 2: gemiddelde en standaardafwijking uit elkaar houden.",
    ],
    "voorspellen": [
        "Les 10: een nieuwe x-waarde in de regressielijn invullen.",
        "Les 11: sₑ = √MSE en de residuele vrijheidsgraden.",
        "Lessen 3 en 13: een interval lezen en beoordelen of het model bruikbaar is.",
    ],
    "meervoudig": [
        "Les 10: de regressielijn en de betekenis van een coëfficiënt.",
        "Lessen 11–12: R², ANOVA en het verschil tussen een globale en een individuele toets.",
    ],
    "transformaties": [
        "Les 2: machten en wortels; een waarde zorgvuldig in een formule invullen.",
        "Les 10: regressiecoëfficiënten horen bij een specifieke keuze van x en y.",
        "De les legt ln en exp vanaf hun betekenis uit; ze hoeven nog niet paraat te zijn.",
    ],
    "modelbouw": [
        "Les 15: meervoudige regressie en afzonderlijke bijdragen van verklarende variabelen.",
        "Lessen 11–12: SSR, MSE, vrijheidsgraden en significantietoetsen.",
    ],
    "validatie": [
        "Lessen 10 en 14: voorspellingen maken en fouten y − ŷ berekenen.",
        "Lessen 11 en 17: trainings-MSE en het kiezen van een regressiemodel.",
    ],
    "tentamen": [
        "Lessen 1–18: de schatters, regressie, toetsen, diagnoses en voorspellingen.",
        "Het formuleblad en de tabellenbundel kunnen gebruiken; een tabelwaarde is geen vervanging voor methodekeuze.",
    ],
}


def _existing(slug: str, *indices: int) -> list[tuple[str, str]]:
    blocks = p.FORMULAS[slug]
    selected = indices or tuple(range(len(blocks)))
    formulas = [item for index in selected for item in blocks[index]]
    if slug == 'stratificatie':
        # Het topstratum is volledig gecontroleerd: zijn totaal is bekend, zonder dakje.
        formulas = [(label, formula.replace(p.W('top'), p.sub(p.v('W'), p.text('top'))))
                    for label, formula in formulas]
    return formulas


def _equations(formulas: list[tuple[str, str]]) -> str:
    if not formulas:
        return ""
    rows = []
    for label, formula in formulas:
        rows.append(
            '<div class="formula-row"><span class="formula-label">'
            + escape(label) + '</span><div class="math-scroll" tabindex="0" role="region" aria-label="Formule: '
            + escape(label, quote=True) + '">' + p.mathml(formula) + '</div></div>'
        )
    return '<div class="formula formula-typeset">' + ''.join(rows) + '</div>'


def _list(items: list[str], ordered: bool = False) -> str:
    tag = 'ol' if ordered else 'ul'
    return f'<{tag}>' + ''.join('<li>' + escape(item) + '</li>' for item in items) + f'</{tag}>'


def _guide(title: str, when: str, formulas: list[tuple[str, str]], symbols: str,
           steps: list[str], example: dict, pitfall: str) -> dict:
    return {
        'title': title,
        'html': (
            '<h3>Wanneer gebruik je dit?</h3><p>' + escape(when) + '</p>'
            + _equations(formulas)
            + '<h3>Wat betekenen de symbolen?</h3><p>' + escape(symbols) + '</p>'
            + '<h3>Zo reken je stap voor stap</h3>' + _list(steps, ordered=True)
            + '<h3>' + escape(example['title']) + '</h3>' + _list(example['steps'], ordered=True)
            + '<p class="note"><strong>Let op:</strong> ' + escape(pitfall) + '</p>'
        ),
    }


def _example(lesson: dict, indices: list[int] | None = None) -> dict:
    original = lesson['example']
    steps = original['steps'] if indices is None else [original['steps'][index] for index in indices]
    return {'title': original['title'], 'steps': list(steps)}


def _own_example(title: str, *steps: str) -> dict:
    return {'title': 'Voorbeeld: ' + title, 'steps': list(steps)}


def _guides(lesson: dict) -> list[dict]:
    slug = lesson['id']
    example = _example(lesson)
    if slug == 'beginnen':
        return [_guide(
            'Van steekproefsom naar gemiddelde en geschat totaal',
            'Gebruik deze eerste relaties om cijfers aan hun betekenis te koppelen: je kent een steekproefsom en wilt eerst het gemiddelde per gecontroleerde post weten. Met de populatieomvang kun je dat gemiddelde daarna omrekenen naar een directe totaalschatting.',
            [('Gemiddelde in de steekproef', p.eq(p.wb, p.frac(p.summ(p.w), p.n))), _existing('mpu')[0]],
            'Σ betekent optellen. Σw is de som van de werkelijke waarden in de steekproef. n is het aantal gecontroleerde posten. w̄ is hun gemiddelde. N is het aantal posten in de gehele populatie. Het dakje op Ŵ betekent dat het om een schatting gaat.',
            ['Schrijf eerst op wat één post is en in welke eenheid de waarde wordt gemeten.',
             'Deel de som van de gecontroleerde waarden door n. De uitkomst is een bedrag per post.',
             'Vermenigvuldig dit gemiddelde met N voor een schatting van het populatietotaal.',
             'Noem de uitkomst een puntschatting. Een betrouwbaarheidsinterval vraagt extra informatie over spreiding en betrouwbaarheid.'],
            example,
            'Deel de steekproefsom niet door N. Daarmee bereken je niet het gemiddelde van de gecontroleerde posten. Deze les introduceert geen afzonderlijke nieuwe schattingsmethode.'
        )]
    if slug == 'rekenen':
        return [_guide(
            'Gemiddelde, variantie en standaardafwijking uitrekenen',
            'Gebruik het gemiddelde voor het centrum van de gegevens en de variantie of standaardafwijking voor hun spreiding. De rekenvorm met totalen is handig wanneer een opgave Σw en Σw² geeft in plaats van alle afzonderlijke waarden.',
            [('Gemiddelde', p.eq(p.wb, p.frac(p.summ(p.w), p.n)))] + _existing(slug),
            p.LEGENDS[slug] + ' Σw² betekent: eerst elke waarde kwadrateren en daarna optellen. (Σw)² betekent: eerst optellen en daarna de hele som kwadrateren.',
            ['Bereken w̄ = Σw / n.',
             'Trek bij losse gegevens het gemiddelde van elke waarde af. Kwadrateer die afwijkingen en tel de kwadraten op.',
             'Deel de som door n − 1. Bij de rekenvorm uit totalen bereken je eerst Σw² − (Σw)²/n en deel je die hele teller door n − 1.',
             'Neem de vierkantswortel als om de standaardafwijking s wordt gevraagd.',
             'Controleer de eenheid: bij bedragen is de variantie in euro² en de standaardafwijking in euro.'],
            example,
            'Een negatieve berekende variantie wijst op verkeerde invoer, verwisselde totalen of te vroege afronding. Het delen door √n hoort bij een standaardfout, niet bij de standaardafwijking van de losse waarden.'
        )]
    if slug == 'onzekerheid':
        return [_guide(
            'Van puntschatting naar betrouwbaarheidsinterval',
            'Gebruik een interval als de vraag niet alleen een geschat getal verlangt, maar ook de nauwkeurigheid van die schatting. Zoek vóór het rekenen uit of een onder- én bovengrens of een eenzijdige grens wordt gevraagd.',
            _existing(slug) + [('Totale breedte', p.eq(p.text('breedte'), p.mul(p.num(2), p.v('E'))))],
            'De puntschatting is het midden van het interval. E is de marge aan één kant. α is het totale onbetrouwbaarheidsrisico; 1 − α is de betrouwbaarheid. Bij een tweezijdig t-interval hoort α/2 bij iedere staart. De standaardfout meet de onzekerheid van de schatting.',
            ['Bepaal de betrouwbaarheid en zet die om naar α. Bij 95% is α = 0,05.',
             'Bepaal de juiste vrijheidsgraden. Bij de gewone schatters doorgaans n − 1; bij regressie n − k − 1.',
             'Lees t af met de juiste staartkans. Ontbreekt df, gebruik dan de naast lagere beschikbare tabelrij volgens het onderwijsprogramma. Voor df boven 200 geldt de onderste rij.',
             'Vermenigvuldig t met de standaardfout: dit is E.',
             'Trek E af van de puntschatting voor de ondergrens en tel E op voor de bovengrens. Rond alleen volgens de gevraagde afspraak; bij deze schattingsopgaven worden grenzen naar buiten afgerond.'],
            example,
            'De betrouwbaarheid beschrijft de intervalmethode bij herhaalde steekproeven. Zij zegt niet dat 95% van de afzonderlijke posten binnen het interval voor een totaal valt. Verwar de marge E niet met de totale breedte 2E.'
        )]
    if slug == 'mpu':
        return [_guide(
            'De directe totaalschatting met haar standaardfout',
            'Gebruik MPU wanneer je het populatietotaal rechtstreeks schat uit de gecontroleerde werkelijke waarden. Je hebt N, n, het steekproefgemiddelde en de spreiding van de werkelijke waarden nodig.',
            _existing(slug),
            p.LEGENDS[slug] + ' s_MPU is de standaardfout van het totale geschatte bedrag. Dat is niet dezelfde grootheid als s_w, de spreiding van individuele werkelijke waarden.',
            ['Bereken w̄ en s_w uit de gecontroleerde werkelijke waarden.',
             'Bereken het midden Ŵ_MPU = N × w̄.',
             'Deel s_w door √n om de standaardfout van het gemiddelde te krijgen.',
             'Vermenigvuldig met N en met √((N − n)/(N − 1)). Dit is s_MPU.',
             'Kies de juiste t-waarde, bereken E = t × s_MPU en maak de twee intervalgrenzen.',
             'Controleer dat de bedragen in het interval totalschattingen in euro zijn.'],
            example,
            'Een grotere steekproef herstelt geen selectieve steekproeftrekking. Vergeet N niet bij de standaardfout van het totaal en gebruik niet de boekwaardespreiding s_b.'
        )]
    if slug == 'verschil':
        return [_guide(
            'Boekwaarde corrigeren met het gemiddelde controleverschil',
            'Gebruik de verschilschatter als de absolute controleverschillen redelijk constant zijn en niet sterk afhangen van de boekwaarde. Controleer ook de toepassingsvoorwaarde uit de cursus; het tentamenvoorbeeld noemt minstens dertig gevonden fouten.',
            _existing(slug),
            p.LEGENDS[slug] + ' n en N zijn de steekproef- en populatieomvang. Σe² is de som van de afzonderlijk gekwadrateerde verschillen; t is de kritieke tabelwaarde.',
            ['Houd één tekenafspraak aan: e = b − w. Een positieve e betekent dat de boekwaarde te hoog is.',
             'Bereken ē en vermenigvuldig met N. Trek dit geschatte totale verschil af van het bekende populatieboekwaardetotaal B.',
             'Bereken de steekproefvariantie van de verschillen en neem de wortel voor s_e.',
             'Vul s_e in de standaardfout van de totaalschatting in, met √n en de eindigheidscorrectie.',
             'Maak het interval rond Ŵ_V met de juiste t-waarde. Rond de eindgrenzen naar buiten af als de opgave dit vraagt.'],
            example,
            'Gebruik in deze schatter de spreiding van de verschillen. Een positieve fout moet van B worden afgetrokken; een verkeerd gekozen teken kan een te hoge boekwaarde juist nog hoger maken.'
        )]
    if slug == 'quotient':
        return [_guide(
            'Een redelijk vaste verhouding gebruiken',
            'Gebruik de quotiëntschatter wanneer werkelijke waarde en boekwaarde ongeveer evenredig samenhangen: bij grotere boekwaarden zijn de afwijkingen vooral procentueel vergelijkbaar. Je gebruikt de verhouding van de totale gecontroleerde waarden.',
            _existing(slug),
            p.LEGENDS[slug] + ' B is het boekwaardetotaal van de hele populatie. s_q is de resterende spreiding na de verhoudingcorrectie; n en N horen daarna in de standaardfout van het totaal.',
            ['Bereken q = Σw / Σb. Controleer dat de gebruikte boekwaardesom niet nul is.',
             'Vermenigvuldig q met B voor de geschatte totale werkelijke waarde.',
             'Bereken de drie termen van s_q² zorgvuldig, inclusief het minteken van de middelste term.',
             'Neem één wortel om s_q te krijgen. Vul vervolgens s_q in de standaardfoutformule in.',
             'Als een interval gevraagd wordt: bepaal t en maak Ŵ_Q ± t × s_Q. Zonder N en n kun je uit het korte voorbeeld nog geen numerieke standaardfout van het totaal berekenen.'],
            example,
            'Het gaat om Σw/Σb, niet om het ongewogen gemiddelde van de verhoudingen per post. Bij q = 0,95 is de geschatte werkelijke waarde 95% van B, niet een afwijking van 95%.'
        )]
    if slug == 'regressieschatter':
        return [_guide(
            'De directe schatting aanpassen met de boekwaarde',
            'Gebruik de regressieschatter wanneer de samenhang tussen boekwaarde en werkelijke waarde door een rechte lijn kan worden beschreven, zonder dat die lijn noodzakelijk door de oorsprong loopt. Het bekende boekwaardetotaal helpt de directe schatting te verbeteren.',
            _existing(slug),
            p.LEGENDS[slug] + ' s_w en s_b zijn de standaardafwijkingen van de werkelijke en geboekte steekproefwaarden. w̄ en b̄ zijn de bijbehorende gemiddelden. s_R is de standaardfout van de totale schatting.',
            ['Bereken de helling b₁ = R_bw × s_w/s_b.',
             'Bereken eerst de directe totaalschatting N × w̄.',
             'Bereken B − N × b̄. Dit is het verschil tussen het bekende boekwaardetotaal en het boekwaardetotaal dat de steekproef suggereert.',
             'Vermenigvuldig dit verschil met b₁ en tel de correctie bij N × w̄ op.',
             'Bereken de MPU-standaardfout uit s_w en vermenigvuldig met √(1 − R_bw²).',
             'Gebruik die s_R voor de intervalmarge. Bewaar voldoende decimalen en vermeld een relevant afrondingsverschil met de uitwerking.'],
            example,
            'Σb is alleen de som in de steekproef; B is het bekende populatietotaal. Dit interval hoort bij de totale waarde, niet bij één toekomstige individuele waarneming.'
        )]
    if slug == 'steekproefomvang':
        return [_guide(
            'Terugrekenen vanaf de toegestane marge',
            'Gebruik de omvangsformule vóór of tijdens een controle als je wilt weten hoeveel posten nodig zijn om een gegeven nauwkeurigheid te bereiken. De onderstaande vorm is de planningsroute van het formuleblad.',
            _existing(slug),
            p.LEGENDS[slug] + ' Voor MPU gebruik je s_w²; voor verschillen s_e². Bij de regressieschatter is de passende resterende variantie s_w² × (1 − R_bw²).',
            ['Vertaal de gewenste totale intervalbreedte naar E door de breedte te halveren.',
             'Kies de variantie die bij de schatter hoort. Bij regressie moet de factor 1 − R_bw² dus worden meegenomen.',
             'Gebruik de t-waarde volgens de opgave of de gevolgde uitwerking en bereken γ.',
             'Bereken n = N/(1 + γ). Rond het vereiste aantal altijd naar boven af.',
             'Wordt om uitbreiding gevraagd? Trek het aantal al gecontroleerde posten van het benodigde totale aantal af.'],
            example,
            'Vul geen totale intervalbreedte in waar E staat. Een uitkomst van 520,122 vraagt om 521 controles in totaal; hoeveel extra nodig zijn hangt af van wat al gecontroleerd is.'
        )]
    if slug == 'stratificatie':
        return [
            _guide(
                'De steekproef verdelen over strata',
                'Gebruik allocatie als de populatie in groepen is verdeeld en je het geplande aantal controles n over die groepen moet verdelen. Evenredige allocatie gebruikt alleen omvang; Neyman gebruikt bij gelijke controlekosten ook de spreiding.',
                _existing(slug, 0),
                'Nᵢ is het aantal posten in stratum i; nᵢ wordt het aantal controles daarin. N en n zijn de totalen van de strata waarover je verdeelt. sᵢ is de spreiding binnen het stratum. ΣNᵢsᵢ is de som van alle omvang-maal-spreidingproducten.',
                ['Zet per stratum de omvang Nᵢ op een rij. Een integraal gecontroleerd topstratum blijft buiten deze verdeling.',
                 'Bereken bij evenredige allocatie per groep Nᵢ/N en vermenigvuldig met n.',
                 'Bereken bij Neyman eerst Nᵢ × sᵢ per groep. Deel elk product door de som van die producten en vermenigvuldig met n.',
                 'Rond af tot gehele aantallen en controleer dat hun som precies n is. Geen nᵢ mag groter zijn dan Nᵢ.'],
                _example(lesson, [0, 1]),
                'Een berekende allocatie is een planning. Voor de latere evaluatie gebruik je de werkelijk gegeven of gerealiseerde steekproefaantallen, ook wanneer die afwijken van het plan.'
            ),
            _guide(
                'De schattingen en onzekerheid samenvoegen',
                'Gebruik deze combinatie nadat voor ieder stratum gegevens beschikbaar zijn. Je schat het totaal door de stratumtotalen op te tellen, maar combineert de onzekerheid via varianties.',
                _existing(slug, 1),
                p.LEGENDS[slug] + ' s_tot² is de som van de varianties van de stratumtotaalschattingen. s_tot is de wortel daarvan. Een integraal gecontroleerd topstratum heeft geen steekproefonzekerheid.',
                ['Bereken Nᵢ × w̄ᵢ voor ieder getrokken stratum en tel die bedragen op.',
                 'Tel het bekende werkelijke totaal van het integraal gecontroleerde topstratum eenmaal erbij.',
                 'Bereken per getrokken stratum de standaardfout van het totaal, inclusief de eigen eindigheidscorrectie.',
                 'Kwadrateer die standaardfouten, tel de varianties op en neem daarna één wortel.',
                 'Gebruik de gegeven effectieve vrijheidsgraden voor t. Maak het interval rond het volledige totaal.'],
                _example(lesson, [1, 2, 3, 4, 5]),
                'Tel standaardfouten niet rechtstreeks op. Neem van het topstratum de werkelijke waarde op, niet de ongecontroleerde boekwaarde, en tel de topgroep niet dubbel.'
            ),
        ]
    if slug == 'regressielijn':
        return [_guide(
            'De lijn berekenen, invullen en het residu lezen',
            'Gebruik een enkelvoudige regressielijn om y te beschrijven of te voorspellen met één verklarende variabele x. De helling en constante kun je uit gegevens berekenen of uit de ongestandaardiseerde B-kolom van SPSS overnemen.',
            _existing(slug),
            p.LEGENDS[slug] + ' b₀ is de constante en b₁ de helling. x̄ en ȳ zijn de steekproefgemiddelden. s_x² is de steekproefvariantie van x. Een residu heeft dezelfde eenheid als y.',
            ['Leg vast wat x en y voorstellen en welke eenheden ze hebben.',
             'Als je de lijn moet schatten: bereken b₁ met de totalen en de variantie van x; bereken daarna b₀ = ȳ − b₁x̄.',
             'Als de coëfficiënten al gegeven zijn: schrijf ŷ = b₀ + b₁x op met de getallen uit B.',
             'Vul de gevraagde x in om ŷ te krijgen.',
             'Is de werkelijke y bekend? Bereken e = y − ŷ en interpreteer het teken. Een positief residu betekent dat de werkelijke y boven de voorspelling ligt.'],
            example,
            'De Beta-kolom bevat gestandaardiseerde coëfficiënten en hoort niet in de vergelijking in oorspronkelijke eenheden. Een residu y − ŷ heeft een andere betekenis dan een controleverschil b − w.'
        )]
    if slug == 'anova':
        return [_guide(
            'De ANOVA-tabel en verklaarde variatie aanvullen',
            'Gebruik ANOVA om totale variatie in y te verdelen in verklaarde variatie en residuele variatie. De tabel levert ook MSE, de residuele standaardfout en de globale F-toets.',
            [('Verdeling van kwadratensommen', p.eq(p.total, p.add(p.ssr, p.sse))),
             ('Gemiddelde verklaarde kwadratensom', p.eq(p.msr, p.CELL_FORMULAS['SSR/k'])),
             ('Gemiddelde residuele kwadratensom', p.eq(p.mse, p.CELL_FORMULAS['SSE/(n−k−1)']))] + _existing(slug),
            p.LEGENDS[slug] + ' n is het aantal gebruikte waarnemingen en k het aantal verklarende variabelen, zonder constante. De vrijheidsgraden zijn k, n − k − 1 en n − 1.',
            ['Noteer n en k. Bereken de drie vrijheidsgraden en controleer dat regressie plus residu gelijk is aan totaal.',
             'Vul een ontbrekende kwadratensom aan met TotalSS = SSR + SSE.',
             'Deel SSR door k voor MSR en SSE door n − k − 1 voor MSE.',
             'Bereken F = MSR/MSE en s_e = √MSE.',
             'Bereken R² = SSR/TotalSS en interpreteer dit als het verklaarde aandeel van de variatie in y.'],
            example,
            'R² is geen percentage correct voorspelde personen. MSE en s_e hebben verschillende eenheden; gebruik de wortel van MSE als de standaardfout nodig is.'
        )]
    if slug == 'toetsen':
        return [
            _guide(
                'Eén coëfficiënt toetsen met t',
                'Gebruik de t-toets voor een uitspraak over één populatiecoëfficiënt. De richting van de onderzoeksvraag bepaalt of H₁ linkszijdig, rechtszijdig of tweezijdig is.',
                _existing(slug),
                p.LEGENDS[slug] + ' De berekende t is een toetsingsgrootheid. De kritieke t komt uit de tabel en hangt af van α, richting en df. SPSS Sig. bij een coëfficiënt is gewoonlijk tweezijdig.',
                ['Definieer de populatiecoëfficiënt en schrijf H₀ en H₁ op voordat je de getallen bekijkt.',
                 'Bereken t = (bⱼ − βⱼ,₀)/s_bⱼ. Bij een grenswaarde nul wordt dit B/Std. Error.',
                 'Gebruik df = n − k − 1. Kies de juiste eenzijdige of tweezijdige kritieke grens.',
                 'Vergelijk met het juiste kritieke gebied. Bij een linkszijdige toets horen ook de mintekens bij de beslissing.',
                 'Schrijf de conclusie in de context van de vraag. Bij verwerpen is het α-risico relevant.'],
                example,
                'Een tweezijdige p-waarde mag je voor een eenzijdige toets alleen halveren als het gevonden teken bij H₁ past. Een grote p-waarde bewijst niet dat de coëfficiënt nul is.'
            ),
            _guide(
                'Het gehele regressiemodel toetsen met F',
                'Gebruik de globale F-toets om te onderzoeken of de verklarende variabelen gezamenlijk lineaire verklaringskracht hebben. Onder H₀ zijn alle k hellingscoëfficiënten nul.',
                [('Globale F-toets', p.eq(p.v('F'), p.frac(p.msr, p.mse)))],
                'MSR = SSR/k en MSE = SSE/(n − k − 1). De teller heeft k vrijheidsgraden en de noemer n − k − 1. De F-kritieke grens gebruikt de rechterstaart met kans α.',
                ['Bereken MSR en MSE uit de ANOVA-tabel.',
                 'Deel MSR door MSE voor F.',
                 'Vergelijk F met de F-tabelgrens met beide vrijheidsgraden, of vergelijk de globale Sig. met α.',
                 'Concludeer bij verwerpen dat minstens één opgenomen hellingscoëfficiënt afwijkt van nul.'],
                _own_example('de ANOVA-gegevens uit de bestaande les',
                    'Bij n = 30, k = 1, SSR = 1.351,262 en SSE = 44,105 is MSE = 44,105/28 ≈ 1,57518.',
                    'MSR = 1.351,262/1 = 1.351,262. Dus F ≈ 857,85.',
                    'Voor een formele conclusie hoort daarbij de gegeven α en de passende F-grens of globale p-waarde.'),
                'Een significante globale F-toets maakt niet alle afzonderlijke coëfficiënten significant. Halveer α niet voor de rechterstaart van deze F-toets.'
            ),
        ]
    if slug == 'diagnostiek':
        return [_guide(
            'Signalen voor uitbijters en invloedrijke waarnemingen berekenen',
            'Gebruik deze controles voordat je conclusies of voorspellingen op een regressiemodel baseert. Een ongebruikelijke y, een ongebruikelijke combinatie van x-waarden en een invloedrijke waarneming zijn verschillende signalen.',
            [('Y-signaal bij n ≤ 100', p.row(p.op('|'), p.v('z'), p.op('|'), p.op('>'), p.num(2))),
             ('Y-signaal bij n > 100', p.row(p.op('|'), p.v('z'), p.op('|'), p.op('>'), p.num(3)))] + _existing(slug),
            p.LEGENDS[slug] + ' z is hier het gestandaardiseerde residu uit de diagnostische uitvoer. De absolute waarde |z| gebruikt de afstand tot nul, ongeacht het teken.',
            ['Kies de y-grens op basis van n en vergelijk zowel het kleinste als het grootste gestandaardiseerde residu.',
             'Bereken het gemiddelde van MD plus drie keer de standaardafwijking van MD. Vergelijk MD_max met die grens.',
             'Bereken op dezelfde manier de grens voor CD en vergelijk CD_max ermee.',
             'Zoek bij een overschrijding op welke waarneming het gaat. Onderzoek invoer, inhoud en invloed; verwijder niet automatisch.',
             'Controleer daarnaast normaliteit, homoscedasticiteit en waar relevant autocorrelatie. Dat vraagt de passende uitvoer, grafieken en toetsen; een uitbijtergrens vervangt die controles niet.'],
            example,
            'De grenzen signaleren nader te onderzoeken punten. Een niet-significante diagnosetoets bewijst geen perfecte aanname. Bij Durbin-Watson bestaan ook onbesliste gebieden; d rond 2 is op zichzelf geen volledige tabelbeslissing.'
        )]
    if slug == 'voorspellen':
        return [_guide(
            'Een individueel voorspellingsinterval opbouwen',
            'Gebruik deze formule voor de mogelijke y van één nieuwe waarneming bij x₀ in een enkelvoudig regressiemodel. Eerst moet het model inhoudelijk en volgens de diagnoses bruikbaar zijn.',
            [('Puntvoorspelling', p.eq(p.sub(p.yh, p.num(0)), p.add(p.b0, p.row(p.b1, p.sub(p.x, p.num(0))))))] + _existing(slug),
            p.LEGENDS[slug] + ' De eerste 1 onder de wortel staat voor de extra individuele spreiding. De term 1/n en de afstandsterm hebben betrekking op onzekerheid van de geschatte lijn.',
            ['Bereken de puntvoorspelling ŷ₀ door x₀ in de geschatte lijn in te vullen.',
             'Lees MSE af of bereken die; neem de wortel om s_e te krijgen.',
             'Bereken apart 1/n en (x₀ − x̄)²/((n − 1)s_x²). Tel beide bij 1 op en neem één wortel.',
             'Vermenigvuldig die factor met s_e en de passende t-waarde met n − 2 vrijheidsgraden.',
             'Trek de marge van ŷ₀ af en tel haar erbij op. Interpreteer de grenzen in de oorspronkelijke y-eenheid.'],
            example,
            'Laat de eerste 1 onder de wortel niet weg bij een individuele voorspelling. Een voorspelling buiten het waargenomen x-bereik is extrapolatie en vraagt extra inhoudelijke terughoudendheid.'
        )]
    if slug == 'meervoudig':
        return [
            _guide(
                'Meerdere verklarende variabelen en dummy’s invullen',
                'Gebruik de meervoudige vergelijking wanneer het model meer dan één verklarende variabele bevat. Een dummy is een codering met 0 of 1 voor een categorie.',
                _existing(slug, 0),
                'b₀ is de constante. Elke bⱼ hoort bij precies één xⱼ en beschrijft de verandering in voorspelde y bij één eenheid extra xⱼ, terwijl de overige opgenomen variabelen gelijk blijven. Een dummycoëfficiënt vergelijkt de categorie met waarde 1 met de referentiecategorie.',
                ['Schrijf de vergelijking met de ongestandaardiseerde B-coëfficiënten op.',
                 'Vertaal de beschreven persoon of situatie naar een waarde voor iedere x en een 0/1 voor iedere dummy.',
                 'Vermenigvuldig iedere coëfficiënt met de juiste waarde. Tel de producten en de constante op.',
                 'Vergelijk twee categorieën via hun verschil in voorspelling, met de andere kenmerken gelijk.',
                 'Controleer eenheid en afronding. Maak een relevant verschil met het bronantwoord zichtbaar.'],
                example,
                'De dummycodering bepaalt de betekenis van het teken. Bij meerdere dummies voor één categorische variabele staan niet zomaar alle dummies tegelijk op 1.'
            ),
            _guide(
                'R² corrigeren voor het aantal verklarende variabelen',
                'Gebruik adjusted R² wanneer je de verklaarde variatie wilt beoordelen met een correctie voor het aantal opgenomen verklarende variabelen. Het toevoegen van variabelen maakt gewone R² niet kleiner, maar kan adjusted R² wel verlagen.',
                _existing(slug, 1),
                'R² is de gewone verklaarde variatie. k telt de verklarende variabelen, zonder constante; n is het aantal gebruikte waarnemingen. n − k − 1 zijn de residuele vrijheidsgraden.',
                ['Bereken 1 − R²: het niet-verklaarde aandeel.',
                 'Vermenigvuldig met k en deel door n − k − 1.',
                 'Trek deze correctie af van R².',
                 'Beoordeel de uitkomst naast inhoud, modelvoorwaarden en validatie.'],
                _own_example('een correctie voor twee verklarende variabelen',
                    'Stel n = 30, k = 2 en R² = 0,80.',
                    'Correctie = 2 × (1 − 0,80)/(30 − 2 − 1) = 0,4/27 ≈ 0,01481.',
                    'Adjusted R² ≈ 0,78519. De correctie ligt hier onder de gewone R² van 0,80.'),
                'Een hoge adjusted R² vervangt geen controle van aannamen en maakt een individueel effect nog niet significant.'
            ),
        ]
    if slug == 'transformaties':
        return [
            _guide(
                'Een logaritmisch model: alleen x wordt getransformeerd',
                'Gebruik deze vorm wanneer de geschatte vergelijking x via ln(x) opneemt, terwijl y in de oorspronkelijke eenheid blijft. Voor ln(x) moet x positief zijn.',
                [('Logaritmisch model', p.CELL_FORMULAS['ŷ = b₀ + b₁ln(x)'])],
                'ln is de natuurlijke logaritme, met grondtal e. b₀ en b₁ horen bij de regressie op ln(x). ŷ is in deze modelvorm al een voorspelling van y op de oorspronkelijke schaal.',
                ['Controleer dat x positief is en bereken ln(x).',
                 'Vermenigvuldig ln(x) met b₁ en tel b₀ op.',
                 'Stop op de y-schaal: hier hoeft geen exp op de einduitkomst te worden toegepast.',
                 'Bij verdubbeling van x neemt de voorspelde y toe met b₁ × ln(2), als deze modelvorm passend blijft.'],
                _own_example('dezelfde getallen op de logaritmische schaal van x',
                    'Stel ŷ = 1 + 0,5ln(x) en x = 16.',
                    'ln(16) ≈ 2,772589, dus ŷ = 1 + 0,5 × 2,772589 ≈ 2,386294.',
                    'Deze 2,386294 is al de voorspelde y, geen voorspelde ln(y).'),
                'Kijk welke variabele is getransformeerd. Alleen het voorkomen van ln in de vergelijking betekent niet dat je de hele uitkomst moet terugtransformeren.'
            ),
            _guide(
                'Een exponentieel model: terug van ln(y) naar y',
                'Gebruik deze vorm wanneer ln(y) lineair wordt verklaard uit x. Het formuleblad brengt de geschatte logwaarde terug met exp.',
                [('Lineaire vorm', p.CELL_FORMULAS['ln(ŷ) = b₀ + b₁x']), ('Terug naar y', p.CELL_FORMULAS['ŷ = exp(b₀ + b₁x)'])],
                'exp(z) betekent e tot de macht z. De coëfficiënten b₀ en b₁ horen bij het model voor ln(y). Bij één extra eenheid x wordt de teruggetransformeerde voorspelling vermenigvuldigd met exp(b₁).',
                ['Bereken b₀ + b₁x. Dit is de voorspelde logwaarde.',
                 'Neem exp van de gehele uitkomst, dus exp(b₀ + b₁x).',
                 'Schrijf de voorspelling in de oorspronkelijke y-eenheid op.',
                 'Beoordeel de residuen van het gekozen model opnieuw; de transformatie garandeert geen goed model.'],
                _own_example('een voorspelde logwaarde terugrekenen',
                    'Stel ln(ŷ) = 1 + 0,5x en x = 2.',
                    'De voorspelde logwaarde is 1 + 0,5 × 2 = 2.',
                    'Terug volgens het formuleblad: ŷ = exp(2) ≈ 7,3891.'),
                'De waarde 2 is hier niet de voorspelde y. Gebruik exp en niet de inverse van de gewone logaritme met grondtal 10.'
            ),
            _guide(
                'Een machtsmodel: zowel x als y heeft een logvorm',
                'Gebruik een machtsfunctie als het lineair geschatte model ln(y) verbindt met ln(x). De les en het formuleblad geven twee gelijkwaardige routes om terug te rekenen.',
                [('Lineaire vorm', p.CELL_FORMULAS['ln(ŷ) = b₀ + b₁ln(x)']), ('Machtsfunctie', p.CELL_FORMULAS['ŷ = exp(b₀) × xᵇ¹'])],
                'b₀ is de constante op de logschaal; exp(b₀) is de factor op de oorspronkelijke schaal. b₁ is de macht van x. Voor het model moeten de gelogaritmeerde waarden positief zijn.',
                ['Bereken ln(x) en vul die in bij b₀ + b₁ln(x).',
                 'Neem exp van deze voorspelde logwaarde.',
                 'Controleer desgewenst met exp(b₀) × x tot de macht b₁.',
                 'Bij verdubbeling van x verandert de teruggetransformeerde voorspelling met factor 2 tot de macht b₁.'],
                example,
                'Verwar het machtsmodel niet met het exponentiële model. De inverse functie behoort volgens het onderwijsprogramma niet tot deze SRA-stof en wordt hier niet toegevoegd.'
            ),
        ]
    if slug == 'modelbouw':
        return [
            _guide(
                'Overlap tussen verklarende variabelen meten met VIF',
                'Gebruik VIF en tolerance om te beoordelen of verklarende variabelen onderling zoveel overlap vertonen dat hun afzonderlijke effecten moeilijk te onderscheiden zijn.',
                _existing(slug, 0),
                'Tolerance komt uit de Coefficients-uitvoer. Rᵢ² hoort bij een hulpregressie waarin xᵢ wordt verklaard uit de overige x-variabelen. VIF is het omgekeerde van tolerance; dit is niet de R² van het hoofdmodel met y.',
                ['Lees tolerance of VIF per verklarende variabele af.',
                 'Als alleen tolerance bekend is, deel 1 door die tolerance.',
                 'Vergelijk met de cursusvuistregel: VIF groter dan 10 is een probleemsignaal.',
                 'Onderzoek inhoudelijke overlap en schat een aangepast model opnieuw als een variabele wordt weggelaten.'],
                _example(lesson, [0]),
                'Correlatie van x met y is iets anders dan samenhang tussen de x-variabelen. Een automatisch selectieproces vervangt geen inhoudelijke keuze.'
            ),
            _guide(
                'De extra bijdrage van één toegevoegde variabele toetsen',
                'Gebruik deze F-verhouding om twee geneste modellen met precies één extra verklarende variabele te vergelijken. Beide modellen moeten dezelfde y en dezelfde waarnemingen gebruiken.',
                _existing(slug, 1),
                'SSR_klein is de verklaarde kwadratensom van het kleine model. SSR_uitgebreid en MSE_uitgebreid horen bij het model met de extra variabele. De teller heeft hier één vrijheidsgraad; de noemer n − k_uitgebreid − 1.',
                ['Controleer eerst dat het uitgebreide model alle variabelen van het kleine model bevat, plus precies één extra variabele.',
                 'Trek SSR_klein af van SSR_uitgebreid.',
                 'Deel het verschil door MSE_uitgebreid.',
                 'Vergelijk de uitkomst met de passende F-grens of beoordeel de relevante toetsuitvoer.',
                 'Bij selectie op SPSS Sig. gebruik je de expliciet gegeven selectiegrens. Een al tweezijdige p-waarde wordt niet zonder reden met α/2 vergeleken.'],
                _example(lesson, [1, 2, 3]),
                'Deze formulevorm geldt voor één extra variabele. Voor meerdere extra variabelen moet de teller ook door hun aantal worden gedeeld. Vergelijk geen modellen op verschillende datasets alsof zij genest zijn.'
            ),
        ]
    if slug == 'validatie':
        return [_guide(
            'De voorspelfout op ongebruikte testgegevens meten',
            'Gebruik MSPR nadat het model met trainingsgegevens is geschat. Je beoordeelt hoe goed dat vaste model voorspelt op andere, niet voor de schatting gebruikte waarnemingen.',
            _existing(slug),
            p.LEGENDS[slug] + ' De fout is werkelijk y minus voorspeld ŷ. Door te kwadrateren heffen positieve en negatieve fouten elkaar niet op. MSPR heeft de eenheid van y².',
            ['Houd het geschatte trainingsmodel vast en voorspel voor iedere testwaarneming de y.',
             'Bereken per testwaarneming y − ŷ en kwadrateer die fout.',
             'Tel de gekwadrateerde fouten op en deel door n_test.',
             'Vergelijk MSPR met de trainings-MSE als aanwijzing voor hoe goed de trainingsprestatie overdraagbaar is.',
             'Lees SPSS steeds per functie: Coefficients voor B en individuele toetsen, ANOVA voor MSE en globale F, Model Summary voor R² en adjusted R².'],
            example,
            'De noemer is n_test, niet de residuele vrijheidsgraad van de training. Blijf je het model aanpassen op dezelfde testset, dan is die set niet meer een onafhankelijke eindcontrole.'
        )]
    if slug == 'tentamen':
        return [_guide(
            'Een formule kiezen en een volledig antwoord opbouwen',
            'Dit onderwerp introduceert geen nieuwe formule. Je kiest uit de eerder behandelde relaties op basis van wat de opgave vraagt: een schatting, toets, diagnose of voorspelling.',
            [('Bij een interval', p.FORMULAS['onzekerheid'][0][0][1]),
             ('Bij een coëfficiënt toetsen', p.FORMULAS['toetsen'][0][0][1])],
            'N, n, B en de spreidingen horen bij een schattingsprobleem. Bij regressie leg je y, de x-variabelen, coëfficiënten en eenheden vast. Bij een toets zijn de berekende toetsingsgrootheid en de kritieke tabelgrens verschillende zaken.',
            ['Onderstreep de gevraagde uitkomst: welk bedrag, welke hypothese of welke voorspelling moet je geven?',
             'Noteer de relevante gegevens met betekenis en eenheid. Scheid populatietotalen van steekproefgegevens.',
             'Noem de methode en controleer de toepassingsvoorwaarden.',
             'Schrijf de formule op, vul de getallen in en bewaar voldoende tussenliggende decimalen.',
             'Geef de einduitkomst met de gevraagde afronding én een conclusie in de taal van de casus.'],
            example,
            'Een los getal laat de methode en interpretatie onzichtbaar. Gebruik de originele open opgaven om zelfstandig uitwerken te oefenen; goede meerkeuze-antwoorden vormen geen volledig tentamenantwoord.'
        )]
    raise ValueError(f'Geen formulegids vastgelegd voor les {slug!r}')


def enhance_guides(lessons: list[dict]) -> list[dict]:
    """Voeg gidsen in-place toe en geef dezelfde lijst terug; opnieuw aanroepen is veilig."""
    unknown = [lesson.get('id') for lesson in lessons if lesson.get('id') not in PREREQUISITES]
    if unknown:
        raise ValueError(f'Onbekende lessen in formulegids: {unknown}')
    for lesson in lessons:
        lesson['prerequisites'] = list(PREREQUISITES[lesson['id']])
        lesson['formulaGuide'] = _guides(lesson)
    return lessons
