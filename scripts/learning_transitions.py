"""Zes compacte leesbruggen. Behoud bestaande leerstof, bronnen en vraag-ID's."""
from collections import Counter
from html import escape
from itertools import product
from math import ceil, exp, floor, log10, sqrt
import re
from formula_visuals import num

VALUES = (80, 90, 110, 120)
MEAN = sum(VALUES) / len(VALUES)
DEVIATIONS = tuple(value - MEAN for value in VALUES)
SQUARES = tuple(value ** 2 for value in DEVIATIONS)
VARIANCE = sum(SQUARES) / (len(VALUES) - 1)
SD = sqrt(VARIANCE)
PAIR_MEANS = Counter((a + b) / 2 for a, b in product(VALUES, repeat=2))


def signed(value, digits=0):
    """Getal met typografisch minteken."""
    return num(value, digits).replace('-', '−')


def axis_ticks(lo, hi, min_step=0):
    """Twee tot vier ronde asgetallen, elk op de eigen waarde in plaats van een afgeronde tussenpositie.
    min_step houdt genoeg ruimte tussen de labels."""
    power = floor(log10(hi - lo or 1))
    for step in sorted(m * 10 ** e for e in range(power - 1, power + 2) for m in (1, 2, 5)):
        values = [round(k * step, 10) for k in range(ceil(lo / step - 1e-9), floor(hi / step + 1e-9) + 1)]
        if step >= min_step and 2 <= len(values) <= 4:
            return values
    return [lo, hi]


def chart(title, points, xlabel, ylabel, *, reference=None, labels=True, stems=False, line=False):
    """Kleine statische SVG; tekst en berekeningen blijven ook buiten de figuur staan."""
    xs, ys = zip(*points)
    xmin, xmax = min(xs), max(xs)
    ymin = min(ys + ((reference,) if reference is not None else ()))
    ymax = max(ys + ((reference,) if reference is not None else ()))
    xpad, ypad = (xmax - xmin or 1) * .18, (ymax - ymin or 1) * .3
    X = lambda x: 48 + (x - xmin + xpad) / (xmax - xmin + 2 * xpad) * 198
    Y = lambda y: 127 - (y - ymin + ypad) / (ymax - ymin + 2 * ypad) * 96
    out = [f'<svg class="transition-chart" viewBox="0 0 260 170" role="img" '
           f'aria-label="{escape(title, quote=True)}" xmlns="http://www.w3.org/2000/svg">'
           f'<title>{escape(title)}</title><rect class="transition-frame" x="48" y="28" width="198" height="102"/>'
           f'<text class="axis-title" x="4" y="16">{escape(ylabel)}</text>']
    tick = lambda value: signed(value, 0 if float(value).is_integer() else 2)
    # Minimaal 20 px tussen y-labels en 30 px tussen x-labels in het viewBox-raster, ook bij 320 px schermbreedte.
    y_ticks = axis_ticks(ymin, ymax, 20 * (ymax - ymin + 2 * ypad) / 96)
    for y in sorted(set(y_ticks + ([reference] if reference is not None else []))):
        out.append(f'<text x="41" y="{Y(y)+4:.2f}" text-anchor="end">{tick(y)}</text>')
    for x in sorted(set(xs)) if len(set(xs)) <= 4 else axis_ticks(xmin, xmax, 30 * (xmax - xmin + 2 * xpad) / 198):
        out.append(f'<text x="{X(x):.2f}" y="148" text-anchor="middle">{tick(x)}</text>')
    if reference is not None:
        out.append(f'<path class="transition-reference" d="M48 {Y(reference):.2f}H246"/>')
    if line:
        out.append('<polyline class="transition-line" points="' + ' '.join(f'{X(x):.2f},{Y(y):.2f}' for x,y in points) + '"/>')
    for x, y in points:
        if stems:
            out.append(f'<path class="transition-line" d="M{X(x):.2f} {Y(reference):.2f}V{Y(y):.2f}"/>')
        out.append(f'<circle class="transition-point" cx="{X(x):.2f}" cy="{Y(y):.2f}" r="4"/>')
        if labels:
            label = signed(y, 0 if float(y).is_integer() else 2)
            if reference == 0 and y > 0 and ymin < 0:
                label = '+' + label
            dx, dy, anchor = (8, 4, 'start') if reference is not None and y < reference else (0, -10, 'middle')
            out.append(f'<text x="{X(x)+dx:.2f}" y="{Y(y)+dy:.2f}" text-anchor="{anchor}">{label}</text>')
    out.append(f'<text class="axis-title" x="147" y="167" text-anchor="middle">{escape(xlabel)}</text></svg>')
    return ''.join(out)


def dots(title, groups):
    """Schematische groepen posten, geen kansverdeling of nieuwe brongegevens."""
    height = 68 + (len(groups) - 1) * 62
    out = [f'<svg class="transition-chart" viewBox="0 0 260 {height}" role="img" aria-label="{escape(title, quote=True)}" '
           f'xmlns="http://www.w3.org/2000/svg"><title>{escape(title)}</title>']
    for row, (label, count) in enumerate(groups):
        y = 42 + row * 62
        out.append(f'<text x="8" y="{y-15}">{escape(label)}</text>')
        for i in range(count):
            out.append(f'<circle class="transition-point" cx="{20+i*29}" cy="{y+7}" r="7"/>')
    return ''.join(out) + '</svg>'


def panel(title, picture, calculations, result, meaning, intro=''):
    return ('<section class="transition-panel"><div class="transition-copy"><h4>' + title + '</h4>' + intro
            + '<div class="transition-work">' + ''.join('<div>'+s+'</div>' for s in calculations) + '</div>'
            + '<p class="transition-result">' + result + '</p><p class="transition-meaning">' + meaning + '</p></div>' + picture + '</section>')


def block(key, title, panels, note=''):
    return ('<div class="learning-transition" data-learning-transition="' + key + '"><h3>' + title
            + '</h3><div class="transition-panels' + (' transition-pair' if len(panels) == 2 else '') + '">' + ''.join(panels) + '</div>'
            + ('<p class="transition-note">' + note + '</p>' if note else '') + '</div>')


def spread_example(arithmetic_html, spread_html):
    # ponytail: alleen deze twee vaste bronblokken; pas bij een nieuwe HTML-structuur ook de verdeling en behoudtest aan.
    arithmetic = re.findall(r'<p>.*?</p>', arithmetic_html)
    spread = spread_html.split('</p>', 2)
    assert len(arithmetic) == 2 and len(spread) == 3
    rules = arithmetic[0][3:-4].split('. ')
    assert len(rules) == 4
    mean, square, root, order = ('<p>' + sentence.rstrip('.') + '.</p>' for sentence in rules)
    return block('gemiddelde-kwadraten', 'Van het gemiddelde naar spreiding: dezelfde vier posten', [
        panel('1. Gemiddelde', chart('Vier waarden; de stippellijn is het gemiddelde 100 euro', list(enumerate(VALUES, 1)), 'Post', 'Waarde (€)', reference=MEAN),
              ['80 + 90 + 110 + 120 = 400', '400 ÷ 4 = 100'], 'Gemiddelde: € 100', 'Het gemiddelde is het vertrekpunt voor de afwijkingen.', mean),
        panel('2. Afwijkingen', chart('Afwijkingen: −20, −10, +10 en +20 euro', list(enumerate(DEVIATIONS, 1)), 'Post', 'Afwijking (€)', reference=0, stems=True),
              [f'{value} − 100 = {signed(value-MEAN)}' for value in VALUES], 'Som van de afwijkingen: 0', 'Min en plus heffen elkaar op. Toch verschillen de waarden.', spread[0] + '</p>'),
        panel('3. Kwadraten', chart('Gekwadrateerde afwijkingen: 400, 100, 100 en 400 euro²', list(enumerate(SQUARES, 1)), 'Post', 'Afwijking² (euro²)', reference=0, stems=True),
              ['(−20)² = (−20) × (−20) = 400'] + [f'({"+" if d > 0 else ""}{signed(d)})² = {num(d*d, 0)}' for d in DEVIATIONS[1:]], 'Samen: 1.000 euro²', 'Elke afwijking wordt met zichzelf vermenigvuldigd. Zo tellen beide kanten mee.', square)]) + (
        '<h4>4. Van kwadraten naar variantie en standaardafwijking</h4>' + spread[1] + '</p>' + root + spread[2]
        + '<p>In dit voorbeeld: steekproefvariantie = 1.000 ÷ (4 − 1) ≈ 333,33 euro²; standaardafwijking = √(1.000 ÷ 3) ≈ € 18,26. '
        '</p>'
        '<h4>5. Rekenvolgorde en twee verschillende sommen</h4>' + order + arithmetic[1])


def uncertainty_example():
    return block('standaardafwijking-standaardfout', 'Van verschillen tussen posten naar onzekerheid van het gemiddelde', [
        panel('1. Losse posten', chart('De vier postwaarden rond het gemiddelde 100', list(enumerate(VALUES, 1)), 'Post', 'Waarde (€)', reference=MEAN),
              ['Variantie: 1.000 ÷ 3', 's = √(1.000 ÷ 3)'], 's ≈ € 18,26', 's beschrijft hoe sterk de afzonderlijke posten verschillen.'),
        panel('2. Het geschatte gemiddelde', chart('Standaardfout bij gelijkgehouden s en toenemend n', [(n, SD/sqrt(n)) for n in (4,16,64)], 'n (posten)', 'Standaardfout (€)', labels=False, line=True),
              [f'n = {n}: s ÷ √{n} ≈ € {num(SD/sqrt(n))}' for n in (4,16,64)], 'Meer posten: kleinere standaardfout', 'Een gemiddelde van meer onafhankelijke waarnemingen varieert minder tussen steekproeven.')],
        'Rekenvergelijking met dezelfde s, vóór eindigheidscorrectie. Nieuwe steekproeven kunnen een andere s opleveren. '
        '')


def distribution_example():
    means = sorted((value, count/16*100) for value,count in PAIR_MEANS.items())
    return block('waarden-steekproefgemiddelden', 'Wat varieert: één waarde of het gemiddelde van twee waarden?', [
        panel('1. Eén trekking', chart('Vier even waarschijnlijke waarden: elk 25 procent', [(v,25) for v in VALUES], 'Waarde (€)', 'Kans (%)', reference=0, stems=True, labels=False),
              ['Mogelijk: 80, 90, 110 of 120.', 'Elke waarde heeft kans 1/4.'], 'Vier mogelijke waarden', 'Deze verdeling gaat over één losse trekking.'),
        panel('2. Twee trekkingen middelen', chart('Verdeling van de gemiddelden van alle zestien geordende paren', means, 'Gemiddelde (€)', 'Kans (%)', reference=0, stems=True, labels=False),
              ['(80 + 90) ÷ 2 = 85', '(80 + 120) ÷ 2 = 100', '(110 + 120) ÷ 2 = 115'], '100 komt bij 4 van de 16 paren voor', 'Nu bestaat elke uitkomst uit een gemiddelde. De kansen liggen meer rond het midden.')],
        'Twee onafhankelijke trekkingen mét teruglegging uit 80, 90, 110 en 120. '
        'Alle 16 geordende paren zijn even waarschijnlijk. Dit is nog geen normale verdeling. '
        '')


def population_example():
    return block('populatie-steekproef', 'Eerst het geheel, dan het onderzochte deel', [
        panel('1. Populatie', dots('Alle acht voorbeeldposten', [('Alle posten: N = 8',8)]),
              ['Je wilt de waarde van alle 8 posten weten.'], 'Het geheel waarover je iets zegt', 'Dit heet de populatie. Het werkelijke totaal is nog onbekend.'),
        panel('2. Steekproef', chart('Vier gecontroleerde voorbeeldposten met gemiddelde 100 euro', list(enumerate(VALUES,1)), 'Post', 'Waarde (€)', reference=MEAN),
              ['4 gecontroleerd: 80, 90, 110 en 120.', 'Gemiddelde = 400 ÷ 4 = 100.'], 'Het onderzochte deel: n = 4', 'Geschat totaal: 8 × € 100 = € 800.')])


def strata_diagram(planned=False):
    title = ('A: twee gecontroleerd; B: twee gecontroleerd en één extra controle. Lege cirkels zijn nog niet gecontroleerd.'
             if planned else 'Elke cirkel is één post. De bedragen zijn boekwaarden; A bevat lage en B hoge boekwaarden.')
    out = [f'<svg class="transition-chart" viewBox="0 0 260 170" role="img" aria-label="{title}" xmlns="http://www.w3.org/2000/svg"><title>{title}</title>']
    for row, (label, values) in enumerate([('A: lage boekwaarden', (80,90,110,120)), ('B: hoge boekwaarden', (800,900,1100,1200))]):
        y = 38 + row * 78
        out.append(f'<text x="8" y="{y-21}">{label}</text>')
        for i, value in enumerate(values):
            x = 30 + i * 62
            mark = '✓' if planned and i < 2 else '+' if planned and row == 1 and i == 2 else ''
            style = 'transition-checked' if mark == '✓' else 'transition-extra' if mark else 'transition-unchecked'
            out.append(f'<circle class="{style}" cx="{x}" cy="{y}" r="9"/>')
            if mark:
                out.append(f'<text class="transition-check" x="{x}" y="{y+4}" text-anchor="middle">{mark}</text>')
            out.append(f'<text x="{x}" y="{y+27}" text-anchor="middle">{num(value,0)}</text>')
    return ''.join(out) + '</svg>'


def strata_example():
    return block('steekproefomvang-strata', 'Eerst groepen maken, daarna controles per groep plannen', [
        panel('1. Deel de populatie op', strata_diagram(),
              ['Elke cirkel is één post.', 'Het getal is de boekwaarde in euro.'], 'Elke groep heet een stratum', 'Je deelt in met bekende boekwaarden, vóórdat je de werkelijke waarden controleert.'),
        panel('2. Plan binnen elke groep', strata_diagram(planned=True),
              ['✓ = al gecontroleerd; + = extra controle.', 'Leeg = nog niet gecontroleerd.', 'A: 2; B: 2 + 1 = 3 controles.'], 'Totaal: 5; uitbreiding: 1', 'Het schema toont alleen de indeling, niet de berekening.')],
        'Nᵢ telt alle posten in een groep; nᵢ telt de controles. Welke groep extra controles krijgt, volgt uit de variantiebijdragen; de verdeling vooraf volgens Neyman gebruikt Nᵢ × sᵢ.')


def log_example():
    return block('logaritme-modelvormen', 'Dezelfde waarden op twee schalen', [
        panel('1. Oorspronkelijke schaal', chart('Voorbeeld y = exp(x): een gebogen verband', [(x/10,exp(x/10)) for x in range(31)], 'x', 'y', labels=False, line=True),
              ['x: 0, 1, 2, 3', 'y: 1; 2,72; 7,39; 20,09'], 'Bij iedere stap: maal e ≈ 2,718', 'Gelijke stappen in x geven steeds grotere toenamen van y.'),
        panel('2. Neem ln van y', chart('Dezelfde voorbeeldwaarden na logaritmeren: ln(y) = x', [(x,x) for x in range(4)], 'x', 'ln(y)', line=True),
              ['ln(1) = 0; ln(e) = 1', 'ln(e²) = 2; ln(e³) = 3'], 'Op deze schaal: steeds +1', 'Het verband is nu een rechte lijn. Met exp ga je terug naar y.')],
        'Voorbeeld y = eˣ. De y-waarden zijn afgerond; de grafiek gebruikt ongeronde waarden. Niet elk krom verband wordt recht door ln.')


def enhance(lessons):
    by_id = {lesson['id']: lesson for lesson in lessons}
    def section(slug, title):
        return next(s for s in by_id[slug]['sections'] if s['title'] == title)
    def move_after(slug, title, predecessor):
        items = by_id[slug]['sections']
        item = section(slug, title)
        items.remove(item)
        items.insert(items.index(section(slug, predecessor))+1, item)

    move_after('beginnen', 'SET-opfrisser: populatie en een eerlijke steekproef', 'Een klein woordenboek voor formules')
    item = section('beginnen', 'Begin met een concrete vraag')
    item['html'] = population_example() + item['html']
    move_after('rekenen', 'SET-opfrisser: spreiding tegenover onzekerheid', 'Waarom kwadrateren?')
    item = section('rekenen', 'Rekenen zonder verborgen stappen')
    spread = section('rekenen', 'Waarom kwadrateren?')
    item['html'] = spread_example(item['html'], spread['html'])
    item['refs'] += [ref for ref in spread['refs'] if ref not in item['refs']]
    by_id['rekenen']['sections'].remove(spread)
    item = section('rekenen', 'SET-opfrisser: spreiding tegenover onzekerheid')
    item['html'] = uncertainty_example() + item['html']
    item = section('onzekerheid', 'Wat is een verdeling?')
    item['html'] = distribution_example() + item['html']
    item = section('steekproefomvang', 'Uitbreiding na stratificatie')
    item['html'] = strata_example() + item['html']
    move_after('transformaties', 'Een transformatie verandert welk patroon lineair wordt', 'Wat doet een logaritme?')
    item = section('transformaties', 'Wat doet een logaritme?')
    item['html'] += log_example()
