"""Formulenummers van het formuleblad en het doel van ieder formuleblok.

Het formuleblad (versie augustus 2024) is leidend. Een formule die er niet op staat
krijgt geen nummer, maar een herkomst: afgeleid van een nummer of niet op het blad.
"""
import re

NOT_ON_SHEET = 'Niet op het formuleblad'


def number(*values):
    joined = ' en '.join(str(value) for value in values)
    return ('Formules ' if len(values) > 1 else 'Formule ') + joined


def derived(*values):
    return 'Afgeleid van ' + number(*values).lower()


# Lesnaam, formulelabel. Zelfde label in uitleg en formulepagina betekent dezelfde formule.
NUMBERS = {
    'beginnen': {'Gemiddelde in de steekproef': NOT_ON_SHEET, 'Puntschatting': number(3)},
    'rekenen': {'Gemiddelde': NOT_ON_SHEET, 'Variantie': derived(1), 'Standaardafwijking': derived(1), 'Rekenen met totalen': number(1)},
    'onzekerheid': {'Interval': derived(2), 'Marge': derived(2), 'Totale breedte': NOT_ON_SHEET},
    'mpu': {'Puntschatting': number(3), 'Standaardfout': number(4), 'Interval': number(2)},
    'verschil': {'Verschil per post': number(6), 'Gemiddeld verschil': derived(6), 'Puntschatting': number(9),
                 'Variantie verschillen': number(7), 'Standaardfout': number(10), 'Interval': number(8)},
    'quotient': {'Goedratio': number(12), 'Puntschatting': number(16), 'Resterende spreiding': number(13), 'Standaardfout': number(17)},
    'regressieschatter': {'Helling': number(19), 'Puntschatting': number(21), 'Standaardfout': number(22), 'Vergelijk met MPU': number(23)},
    'steekproefomvang': {'Tussenstap': number(5, 11), 'Benodigde omvang': number(5, 11)},
    'stratificatie': {'Evenredig': number(26), 'Neyman': number(25), 'Totaalschatting': number(28),
                      'Gecombineerde variantie': number(29), 'Interval': number(27)},
    'regressielijn': {'Populatiemodel': number(30), 'Geschatte lijn': number(31), 'Residu': NOT_ON_SHEET, 'Helling': number(32),
                      'Constante': number(32), 'Residuele variantie': number(34)},
    'anova': {'Verdeling van kwadratensommen': NOT_ON_SHEET, 'Gemiddelde verklaarde kwadratensom': number(37),
              'Gemiddelde residuele kwadratensom': number(36), 'Verklaarde variatie': number(38), 'Residuele variantie': number(36),
              'Standaardfout': derived(36), 'Globale toets': number(42)},
    'toetsen': {'Toetsingsgrootheid': derived(39, 62), 'Bij H₀: βⱼ = 0': number(39, 62), 'Vrijheidsgraden': number(41),
                'Globale F-toets': number(42, 61), 'Standaardfout van de helling': number(39), 'Correlatie toetsen': number(40),
                'Interval voor de populatiehelling': NOT_ON_SHEET},
    'diagnostiek': {'Y-signaal bij n ≤ 100': number(44), 'Y-signaal bij n > 100': number(44), 'Grens voor MD': number(45), 'Grens voor CD': number(45)},
    'voorspellen': {'Puntvoorspelling': derived(31), 'Individueel voorspellingsinterval': number(50)},
    'meervoudig': {'Geschatte vergelijking': number(53), 'Gecorrigeerde verklaarde variatie': number(51)},
    'transformaties': {'Logaritmisch model': number(58), 'Terug naar y': number(55), 'Machtsfunctie': number(57),
                       'Meervoudig machtsmodel': derived(57), 'Terug naar de oorspronkelijke schaal': derived(57)},
    'modelbouw': {'Variance Inflation Factor': number(59), 'Eén extra variabele': number(63)},
    'validatie': {'Voorspelfout op de testset': number(64)},
    'tentamen': {'Bij een interval': derived(2), 'Bij een coëfficiënt toetsen': derived(62)},
}

# Dezelfde labelnaam met een andere formule, per bloktitel.
OVERRIDES = {
    ('steekproefomvang', 'Alle strata uitbreiden of gericht één bijdrage verkleinen', 'Tussenstap'): derived(5),
    ('steekproefomvang', 'Alle strata uitbreiden of gericht één bijdrage verkleinen', 'Benodigde omvang'): number(5, 11),
    ('transformaties', 'Een exponentieel model: terug van ln(y) naar y', 'Lineaire vorm'): number(55),
    ('transformaties', 'Een machtsmodel: zowel x als y heeft een logvorm', 'Lineaire vorm'): number(57),
}

# Doel per uitlegblok, en of de regels samen stappen naar dat doel vormen.
GOALS = {
    ('rekenen', 'Rekenen zonder verborgen stappen'): ('de standaardafwijking: één getal voor hoe ver losse waarden rond het gemiddelde liggen.', True),
    ('rekenen', 'De rekenvorm op het formuleblad'): ('dezelfde variantie, maar dan rechtstreeks uit Σw en Σw², zonder iedere afwijking apart uit te rekenen.', False),
    ('onzekerheid', 'Van kans naar interval'): ('een interval: de schatting met daaromheen de marge.', False),
    ('mpu', 'Van steekproef naar interval voor het totaal'): ('een interval voor de totale werkelijke waarde, dus de puntschatting met daaromheen de marge.', True),
    ('verschil', 'Wat is hier een fout?'): ('de puntschatting: je corrigeert de bekende totale boekwaarde met de geschatte totale fout.', True),
    ('verschil', 'De spreiding van de verschillen'): ('het interval rond die puntschatting, op basis van de spreiding van de verschillen.', True),
    ('quotient', 'Een vast percentage herkennen'): ('de puntschatting: de goedratio uit de steekproef maal de bekende totale boekwaarde.', True),
    ('quotient', 'Spreiding die na de verhouding overblijft'): ('de standaardfout van de quotiëntschatter, die je nodig hebt voor het interval.', True),
    ('regressieschatter', 'Corrigeren voor een afwijkende steekproef'): ('de puntschatting: het MPU-totaal, gecorrigeerd voor het verschil tussen steekproef en boektotaal.', True),
    ('regressieschatter', 'Waarom kan het interval smaller worden?'): ('de standaardfout van de regressieschatter, en hoeveel kleiner die is dan bij MPU.', False),
    ('steekproefomvang', 'Werk terug vanaf de gewenste precisie'): ('het aantal posten n dat je moet controleren om de gewenste marge te halen. De tussenstap γ is een rekenhulp: hij vergelijkt de toegestane variantie (E/t)² met de spreiding in de populatie.', True),
    ('steekproefomvang', 'Alle strata uitbreiden of gericht één bijdrage verkleinen'): ('de benodigde omvang wanneer ieder stratum meetelt. De tussenstap γ werkt als bij formule 5, maar Σ(Nᵢ × sᵢ²) staat op de plek van N × s².', True),
    ('stratificatie', 'Hoe verdeel je de steekproef?'): ('de verdeling van de steekproef over de strata. Dit zijn twee manieren; je kiest er één.', False),
    ('stratificatie', 'De groepen samenvoegen'): ('één interval voor de totale werkelijke waarde van alle strata samen.', True),
    ('regressielijn', 'Een rechte lijn leren lezen'): ('de lijn die je uit de steekproef schat, en het residu als verschil tussen waarneming en lijn.', False),
    ('regressielijn', 'Hoe wordt de lijn gekozen?'): ('de twee getallen van de lijn: eerst de helling, daarna de constante.', True),
    ('regressielijn', 'Residuele variantie berekenen zonder ANOVA-tabel'): ('de residuele variantie, rechtstreeks uit r en de spreiding van y.', False),
    ('anova', 'Van de tabel naar betekenis'): ('wat de ANOVA-tabel zegt: hoeveel de lijn verklaart, hoeveel spreiding overblijft en of het model significant is.', False),
    ('toetsen', 't en de p-waarde'): ('de t-waarde en de vrijheidsgraden waarmee je de tabel opzoekt.', False),
    ('toetsen', 'Toetsen en het interval voor de regressiehelling'): ('de toets en het interval voor de helling, ook als de SPSS-tabel ontbreekt.', False),
    ('diagnostiek', 'Uitbijter is niet hetzelfde als invloedrijk punt'): ('de grenswaarden waarboven een waarneming een mogelijke uitbijter of een invloedrijk punt is.', False),
    ('voorspellen', 'Waarom staat er een 1 onder de wortel?'): ('het interval voor één nieuwe waarneming.', False),
    ('meervoudig', 'Eén model, meerdere verklaringen'): ('één vergelijking die y voorspelt uit meerdere verklarende variabelen.', False),
    ('meervoudig', 'Vergelijk modellen met beleid'): ('een R² waarmee je modellen met een verschillend aantal variabelen eerlijk vergelijkt.', False),
    ('transformaties', 'Een meervoudig logmodel terugtransformeren'): ('de voorspelling in de oorspronkelijke eenheid van y.', False),
    ('modelbouw', 'Overlap tussen verklarende variabelen'): ('één getal dat aangeeft hoe sterk een variabele overlapt met de andere variabelen.', False),
    ('modelbouw', 'Een extra variabele toetsen'): ('de F-waarde waarmee je beslist of de extra variabele iets toevoegt.', False),
    ('validatie', 'Beoordelen op ongebruikte gegevens'): ('de voorspelfout op gegevens die het model niet eerder heeft gezien.', False),
}

LABEL = re.compile(r'<span class="formula-label">(.*?)</span>')
BLOCK = '<div class="formula formula-typeset">'


def _label(lesson, title, match):
    text = re.sub(r'^Formule \d+: (.)', lambda m: m[1].upper(), match[1])
    plain = text.replace('&gt;', '>').replace('&lt;', '<')
    source = OVERRIDES.get((lesson, title, plain)) or NUMBERS[lesson].get(plain)
    if source is None:
        raise ValueError(f'Geen formulenummer voor {lesson}: {plain}')
    return f'<span class="formula-label">{text}<span class="formula-number" data-no-terms>{source}</span></span>'


def enhance(lessons):
    for lesson in lessons:
        slug = lesson['id']
        for section in lesson['sections']:
            html = section['html']
            if BLOCK not in html:
                continue
            html = LABEL.sub(lambda m: _label(slug, section['title'], m), html)
            goal = GOALS.get((slug, section['title']))
            if goal is None:
                raise ValueError(f'Geen doel voor formuleblok {slug}: {section["title"]}')
            text, steps = goal
            start = '<div class="formula formula-typeset formula-steps">' if steps else BLOCK
            html = html.replace(BLOCK, f'<p class="formula-goal"><strong>Hier werk je naartoe:</strong> {text}</p>{start}', 1)
            section['html'] = html
        for guide in lesson.get('formulaGuide', []):
            guide['html'] = LABEL.sub(lambda m: _label(slug, guide['title'], m), guide['html'])
