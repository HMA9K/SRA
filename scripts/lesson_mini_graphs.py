"""Kleine figuren naast de bestaande uitleg; alle tekst en bronlinks blijven staan."""
from html import escape, unescape
from html.parser import HTMLParser
from math import sqrt, gamma, pi
import re
from learning_transitions import chart
from formula_visuals import num, curve


def svg(title, body, height=170):
    return (f'<svg class="transition-chart mini-chart" viewBox="0 0 260 {height}" role="img" '
            f'aria-label="{escape(title, quote=True)}" xmlns="http://www.w3.org/2000/svg">'
            f'<title>{escape(title)}</title>{body}</svg>')


def text(x, y, value, anchor='start'):
    return f'<text x="{x}" y="{y}" text-anchor="{anchor}">{escape(str(value))}</text>'


def bars(title, labels, values, unit, digits=2):
    """Gemeenschappelijke nul en schaal, met waarden direct bij de balken."""
    body = text(4, 16, unit)
    scale = 240 / max(values)
    for i, (label, value) in enumerate(zip(labels, values)):
        y = 40 + i * 51
        body += text(4, y, label) + text(248, y, num(value, 0 if float(value).is_integer() else digits), 'end')
        body += f'<rect class="mini-bar mini-series-{i}" x="4" y="{y+7}" width="{value*scale:.2f}" height="13"/>'
    return svg(title, body, 18 + len(values)*51)


def residuals():
    # Punten met OLS-lijn y = 2x; som residuen en som x*residu zijn beide nul.
    points = [(1, 3), (2, 2), (3, 7)]
    X, Y = lambda x: 45 + 62*x, lambda y: 135 - 15*y
    body = text(4, 16, 'Waarde y')
    body += '<path class="transition-frame" d="M45 25V135H246"/>'
    body += f'<path class="mini-prediction" d="M{X(0)} {Y(0)}L{X(3.2)} {Y(6.4)}"/>'
    for x, y in points:
        body += f'<path class="transition-line" d="M{X(x)} {Y(2*x)}V{Y(y)}"/>'
        body += f'<circle class="transition-point" cx="{X(x)}" cy="{Y(y)}" r="4"/>'
        body += text(X(x)+8, (Y(y)+Y(2*x))/2+4, f'{y-2*x:+d}'.replace('-', '−'))
        body += text(X(x), 147, x, 'middle')
    body += text(145, 166, 'Verklarende waarde x', 'middle')
    return svg('Verticale residuen +1, −2 en +1 bij de OLS-lijn y = 2x.', body)


def allocation():
    even, neyman = [141, 58, 30, 21], [114, 58, 36, 42]
    body = text(4, 16, 'Controles per stratum (n = 250)')
    for i, (a, b) in enumerate(zip(even, neyman)):
        x = 27 + i*60
        for j, value in enumerate((a, b)):
            height = value/141*73
            body += f'<rect class="mini-bar mini-series-{j}" x="{x+j*26}" y="{120-height:.2f}" width="17" height="{height:.2f}"/>'
            body += text(x+j*26+8.5, round(114-height, 2), value, 'middle')
        body += text(x+20, 139, i+1, 'middle')
    body += '<rect class="mini-bar mini-series-0" x="4" y="154" width="12" height="9"/>' + text(21, 163, 'Evenredig')
    body += '<rect class="mini-bar mini-series-1" x="135" y="154" width="12" height="9"/>' + text(152, 163, 'Neyman')
    return svg('Evenredig: 141, 58, 30, 21 controles. Neyman: 114, 58, 36, 42. Beide tellen op tot 250.', body)


def variance_share():
    body = text(4, 16, 'Totale variatie: 100%')
    body += '<rect class="mini-bar mini-series-0" x="4" y="35" width="192" height="22"/>'
    body += '<rect class="mini-bar mini-series-1" x="196" y="35" width="48" height="22"/>'
    body += text(4, 82, 'SSR: 80% verklaard') + text(4, 106, 'SSE: 20% resterend')
    body += text(4, 136, 'R² = SSR / TotalSS = 0,80')
    return svg('R² = 0,80: 80 procent verklaarde en 20 procent resterende variatie.', body, 144)


def intervals():
    mean, individual = 2.306*2/sqrt(10), 2.306*2*sqrt(1+1/10)
    X = lambda value: 20+(value-10)*20
    body = text(4, 16, 'Voorspelling bij x₀ = x̄: 16')
    for y, label, margin in [(61, 'Gemiddelde', mean), (119, 'Eén waarneming', individual)]:
        lo, hi = 16-margin, 16+margin
        body += text(4, y-20, label)
        body += f'<path class="transition-line" d="M{X(lo):.2f} {y}H{X(hi):.2f}M{X(lo):.2f} {y-5}v10M{X(hi):.2f} {y-5}v10"/>'
        body += f'<circle class="transition-point" cx="{X(16)}" cy="{y}" r="4"/>'
        body += text(X(lo), y+20, num(lo), 'middle') + text(X(hi), y+20, num(hi), 'middle')
    return svg('Zelfde voorspelling 16. Interval gemiddelde: 14,54 tot 17,46. Individueel: 11,16 tot 20,84.', body, 145)


def slope_interval():
    X = lambda value: 24 + value*10
    body = text(4, 16, '95%-interval voor de helling')
    body += '<path class="transition-frame" d="M24 43V111M24 93H240"/>'
    body += f'<path class="transition-line" d="M{X(10.38)} 68H{X(19.10)}M{X(10.38)} 61v14M{X(19.10)} 61v14"/>'
    body += f'<circle class="transition-point" cx="{X(14.73939)}" cy="68" r="4"/>'
    body += text(X(10.38), 48, '10,38', 'middle') + text(X(19.1), 48, '19,10', 'middle')
    body += text(24, 128, '0', 'middle') + text(X(14.73939), 89, '14,74', 'middle')
    body += text(4, 151, 'Nul ligt buiten het interval.')
    return svg('Helling 14,74 kg per jaar; 95%-interval 10,38 tot 19,10. Nul ligt erbuiten.', body, 160)


def fan():
    body = text(4, 16, 'Residu') + '<path class="transition-frame" d="M30 28V130H248"/>'
    body += '<path class="transition-reference" d="M30 79H248"/>' + text(22, 83, '0', 'end')
    for x, spread in [(55, 7), (95, 14), (135, 22), (175, 31), (215, 43)]:
        for offset in [-spread, spread]:
            body += f'<circle class="transition-point" cx="{x}" cy="{79+offset}" r="4"/>'
    body += text(137, 151, 'Verklarende waarde x', 'middle')
    return svg('Schematische trechter: de residuen spreiden verder uiteen bij grotere x.', body, 160)


def tail_comparison():
    density = lambda value: gamma(12.5)/(sqrt(24*pi)*gamma(12))*(1+value*value/24)**-12.5
    body = ''
    for left, title, critical, two in [(4, 'Tweezijdig', 2.064, True), (138, 'Eenzijdig', 1.711, False)]:
        X = lambda value: left + 114*(value+4)/8
        Y = lambda value: 112-145*value
        points = curve(density, -4, 4, 120)
        body += text(left, 16, title) + text(left+57, 53, '95%', 'middle')
        for start, stop in ([(-4,-critical),(critical,4)] if two else [(critical,4)]):
            shaded = [(start,0)] + curve(density,start,stop,32) + [(stop,0)]
            body += '<polygon class="mini-tail" points="' + ' '.join(f'{X(x):.2f},{Y(y):.2f}' for x,y in shaded) + '"/>'
        body += '<polyline class="transition-line" points="' + ' '.join(f'{X(x):.2f},{Y(y):.2f}' for x,y in points) + '"/>'
        body += f'<path class="transition-frame" d="M{left} 112h114"/>'
        body += text(left+114, 137, '0,025' if two else '0,05', 'end')
        body += f'<path class="mini-tail-pointer" d="M{left+103} 123V109"/>'
        if two:
            body += text(left, 137, '0,025') + f'<path class="mini-tail-pointer" d="M{left+11} 123V109"/>'
        body += text(left+57, 162, '2 × 2,5% = 5%' if two else '1 × 5% = 5%', 'middle')
    return svg('t-verdeling met 24 vrijheidsgraden. Tweezijdig: 95% midden en 2,5% in elke staart. Eenzijdig: 95% links en 5% in de rechterstaart. Oranje zijn de staarten.', body, 170)


def estimate_interval():
    body = text(130, 16, 'Bedragen in euro', 'middle')
    body += '<path class="transition-line" d="M24 84H236M24 77v14M236 77v14"/>'
    body += '<circle class="transition-point" cx="130" cy="84" r="4"/>'
    body += text(130, 43, 'Puntschatting', 'middle') + text(130, 62, '100.000', 'middle')
    body += text(24, 108, '96.000', 'middle') + text(228, 108, '104.000', 'middle')
    body += '<path class="mini-tail-pointer" d="M24 117v5h106v-5M130 117v5h106v-5"/>'
    body += text(77, 143, 'E = 4.000', 'middle') + text(188, 143, 'E = 4.000', 'middle')
    body += text(130, 166, 'Totale breedte: 2E = 8.000', 'middle')
    return svg('Puntschatting 100.000 euro, marge E 4.000 euro. Interval van 96.000 tot 104.000 euro; totale breedte 8.000 euro.', body, 175)


MINI_COPY_CHARS = 650


class TopLevelBlocks(HTMLParser):
    """Begin, einde, tag en klassen van de elementen op het hoogste niveau van een HTML-fragment."""
    VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'}

    def __init__(self, fragment):
        super().__init__(convert_charrefs=False)
        self.line_starts = [0]
        for line in fragment.splitlines(keepends=True):
            self.line_starts.append(self.line_starts[-1] + len(line))
        self.depth, self.blocks = 0, []
        self.feed(fragment)
        self.close()

    def position(self):
        line, column = self.getpos()
        return self.line_starts[line - 1] + column

    def handle_starttag(self, tag, attrs):
        if tag in self.VOID:
            return
        if self.depth == 0:
            self.blocks.append([self.position(), None, tag, (dict(attrs).get('class') or '').split()])
        self.depth += 1

    def handle_endtag(self, tag):
        if tag in self.VOID:
            return
        self.depth -= 1
        if self.depth == 0:
            self.blocks[-1][1] = self.position() + len(f'</{tag}>')


def fits_beside_figure(block, after=True):
    """Tekst, lijsten en formulevakken passen naast de figuur; een tabel alleen als die op de uitleg volgt."""
    _, _, tag, classes = block
    wide = {'formula', 'table-wrap'} if after else {'formula'}
    return tag in ('p', 'ul', 'ol') or (tag == 'div' and bool(wide & set(classes)))


def enhance(lessons):
    by_id = {lesson['id']: lesson for lesson in lessons}
    def add(key, title, paragraph_start, picture, caption, graph_id=None, paragraphs=1):
        section = next(s for s in by_id[key]['sections'] if s['title'] == title)
        matches = [m for m in re.finditer(r'<p(?: [^>]*)?>.*?</p>', section['html'], re.S)
                   if unescape(re.sub('<[^>]+>', '', m[0])).startswith(paragraph_start)]
        if len(matches) != 1:
            raise ValueError(f'Mini-grafiek: uitleg niet uniek gevonden in {key}: {paragraph_start}')
        m = matches[0]
        start = m.start()
        end = start + list(re.finditer(r'<p(?: [^>]*)?>.*?</p>', section['html'][start:], re.S))[paragraphs - 1].end()
        # Aangrenzende alinea's, lijsten, formulevakken en tabellen schuiven mee naast de figuur, zodat er geen lege
        # ruimte onder de tekst blijft: eerst wat erna komt, anders wat ervoor staat. Koppen blijven op hun plek.
        # Een formulevak of tabel is al ongeveer zo hoog als de figuur; daarna stopt het meenemen.
        # ponytail: lengte in tekens als maat voor de figuurhoogte; meet in de browser als figuren sterk gaan verschillen.
        blocks = TopLevelBlocks(section['html']).blocks
        first = next((i for i, b in enumerate(blocks) if b[0] == start), None)
        last = next((i for i, b in enumerate(blocks) if b[1] == end), None)
        while first is not None and last is not None and len(unescape(re.sub('<[^>]+>', '', section['html'][start:end]))) < MINI_COPY_CHARS:
            if last + 1 < len(blocks) and fits_beside_figure(blocks[last + 1]):
                last += 1
                end = blocks[last][1]
                added = blocks[last]
            elif first > 0 and fits_beside_figure(blocks[first - 1], after=False):
                first -= 1
                start = blocks[first][0]
                added = blocks[first]
            else:
                break
            if added[2] == 'div':
                break
        copy = section['html'][start:end]
        caption_html = f'<figcaption>{caption}</figcaption>' if caption else ''
        wrapper = (f'<div class="mini-explanation" data-mini-graph="{graph_id or key}"><div class="mini-copy">{copy}</div>'
                   f'<figure>{picture}{caption_html}</figure></div>')
        section['html'] = section['html'][:start] + wrapper + section['html'][end:]

    add('onzekerheid', 'Eén of twee grenzen: uitgewerkt voorbeeld', 'Bij 95%', tail_comparison(),
        'Oranje oppervlak = α = 0,05. Beide figuren gebruiken dezelfde t-verdeling (df = 24).', 'onzekerheid-staarten', paragraphs=2)
    add('onzekerheid', 'Van kans naar interval', 'Een steekproefgemiddelde', estimate_interval(),
        '', 'onzekerheid-interval')

    add('mpu', 'Wanneer gebruik je deze schatter?', 'Het idee komt rechtstreeks',
        svg('Van gemiddeld 100 euro per post naar 800 euro voor acht posten.',
            text(4, 23, 'Gemiddelde: € 100 per post') + text(130, 61, '× 8 posten', 'middle')
            + '<path class="transition-line" d="M130 72v24m-5-5 5 5 5-5"/>'
            + text(4, 124, 'Geschat totaal: € 800'), 136),
        'Dezelfde vier waarden als eerder: 80, 90, 110 en 120. Het totaal blijft een schatting.')
    add('verschil', 'Wat is hier een fout?', 'Het bedrag is constant',
        chart('Bij boekwaarden 100, 200 en 500 euro is de fout steeds 10 euro.', [(100,10),(200,10),(500,10)],
              'Boekwaarde (€)', 'Fout (€)', reference=0, line=True), 'De fout blijft € 10, hoe groot de post ook is.')
    add('quotient', 'Een vast percentage herkennen', 'Bij grotere boekwaarden',
        chart('Bij boekwaarden 100, 200 en 500 euro groeit de fout van 10 naar 20 naar 50 euro.', [(100,10),(200,20),(500,50)],
              'Boekwaarde (€)', 'Fout (€)', reference=0, line=True), 'De fout groeit mee: steeds 10% van de boekwaarde. Van iedere euro boekwaarde is 90 cent goed.')
    add('regressieschatter', 'De correctie verklaren en de helling uit productsommen berekenen', 'De correctie is positief',
        bars('MPU 95.000 euro plus correctie 4.655 euro geeft 99.655 euro.', ['MPU', 'Regressieschatter'], [95000,99655], 'Geschat totaal (€)'),
        'MPU schat € 95.000. De correctie 0,931 × € 5.000 brengt de schatting op € 99.655.')
    add('stratificatie', 'Neyman en evenredige allocatie naast elkaar uitrekenen', 'Allocatie bepaalt',
        allocation(), 'De vier groepen uit de tabel. Bij Neyman verschuiven controles naar groepen met meer spreiding.')
    add('regressielijn', 'Hoe wordt de lijn gekozen?', 'Er zijn veel lijnen', residuals(),
        'Elke verticale afstand is y − ŷ. De som van de kwadraten is hier 1² + (−2)² + 1² = 6.')
    add('anova', 'Van de tabel naar betekenis', 'R² is het verklaarde', variance_share(),
        'Verklaard en resterend tellen samen op tot 100%.')
    add('toetsen', 'Toetsen en het interval voor de regressiehelling', 'Deze vormen', slope_interval(),
        'Helling in kg per jaar. Bij dezelfde tweezijdige toets met α = 0,05 verwerp je H₀: β₁ = 0.')
    add('diagnostiek', 'De drie modelvoorwaarden', 'Homoscedasticiteit betekent', fan(),
        'Trechtervorm: geen constante spreiding. Controleer het patroon met de gegevens en de diagnosetoets.')
    add('voorspellen', 'Waarom staat er een 1 onder de wortel?', 'Voor de gemiddelde respons', intervals(),
        'Bij n = 10, sₑ = 2 en t = 2,306. De extra 1 maakt het individuele interval breder, ook bij x₀ = x̄.')
    add('meervoudig', 'Een categorie in cijfers', 'Een categorie zoals',
        bars('Dummy 0: bijdrage nul. Dummy 1: bijdrage 500 eenheden, bij gelijke overige kenmerken.',
             ['Geen leiding: dummy 0', 'Wel leiding: dummy 1'], [0,500], 'Bijdrage aan voorspelde y'),
        'Met leiding is de voorspelling 500 hoger dan zonder leiding, bij gelijke overige kenmerken. De constante en overige modeltermen komen daar nog bij.')
    add('modelbouw', 'VIF lezen: van hulpregressie naar conclusie', 'Een VIF-uitkomst',
        bars('VIF 2,634 ligt onder de grens 10.', ['VIF uit het voorbeeld', 'Grens'], [2.634,10], 'VIF', digits=3),
        '2,634 &lt; 10: geen overschrijding van deze grens.')
    add('validatie', 'Voorspelfouten op een onafhankelijke testset uitwerken', 'MSPR =',
        bars('Trainings-MSE 1 tegenover test-MSPR 14/3, ongeveer 4,67.', ['Training: MSE', 'Test: MSPR'], [1,14/3], 'Gemiddelde kwadratische fout'),
        'Op dezelfde y-schaal is de testfout hier groter. Er is geen vaste algemene afkeurgrens.')
