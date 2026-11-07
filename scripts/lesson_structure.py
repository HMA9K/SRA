"""Vaste leslijn: vraag, idee, formule, voorbeeld, tentamenaanpak, let op, zelf oefenen.

De lessen zijn in lagen gegroeid. Deze stap zet een les in de vaste lijn en bewaart
tekst, figuren, bronnen en oefeningen. Proeflessen met een doorlopende casus: de
directe schatter (magazijn) en de regressielijn (productie). Alle casusgetallen komen
uit casus_data. Blokken met `afterExample` staan op de pagina na het uitgewerkte voorbeeld.
"""
import html
import json
import re
from pathlib import Path

from presentation import inline_formulas
from casus_data import PRODUCTION, STOCK, mpu as stock_mpu, predict, regression, source_ref
from formula_visuals import GREEN, ORANGE, PURPLE, block, finite_total, interval_graphic, num, panel, plot, table
from lesson_mini_graphs import bars
from course_completion import bookref

LINES = json.loads((Path(__file__).with_name('lesson_lines.json')).read_text(encoding='utf-8'))


def _refs(*sections):
    seen, refs = [], []
    for section in sections:
        for ref in section.get('refs', []):
            if ref not in seen:
                seen.append(ref)
                refs.append(ref)
    return refs


def _mpu(lesson):
    sections = {s['title']: s for s in lesson['sections']}
    focus = lesson['sections'][0]
    use = sections['Wanneer gebruik je deze schatter?']
    formula = sections['Van steekproef naar interval voor het totaal']
    steps = sections['Een vaste werkvolgorde']
    limit = sections['Wanneer een grote steekproef toch onvoldoende kan zijn']
    case = sections['Van samenvattingstabel naar een volledig voorraadinterval']

    assert len(re.findall(r'<p>.*?</p>', use['html'], flags=re.S)) == 4, 'Controleer de opbouw van de MPU-les'
    figure = re.search(r'<div class="mini-explanation".*?(<figure>.*?</figure>)\s*</div>', use['html'], flags=re.S)[1]
    worked, exercise = case['html'].split('<h3>Zelf toepassen</h3>')
    # De oefening opent haar eigen blok; houd tentamenvoorbeeld en oefening elk in een gesloten blok.
    worked = worked.split('</p>', 1)[1].replace('<div class="learning-exercise">', '')
    exercise = '<div class="learning-exercise"><h3>Zelf toepassen</h3>' + exercise

    # Doorlopende casus: het magazijn van Autogroep Linderhof.
    d, s, bron = STOCK, stock_mpu(), source_ref('voorraad')
    N, n, B, E, W = (num(d[k], 0) for k in ('N', 'n', 'B', 'E_required', 'W'))
    margin = num(s['margin'], 0)
    data = block('casus-gegevens', 'Gegevens van de magazijncontrole', [panel(
        'Wat de assistent aanlevert', table(['Gegeven', 'Waarde', 'Rol bij MPU'], [
            ['Artikelregels in het magazijn, N', N, 'Van gemiddelde naar totaal'],
            ['Gecontroleerde regels, n', n, 'Gemiddelde, spreiding en df'],
            ['Som van de werkelijke waarden, Σw', '€ ' + num(d['sum_w'], 0), 'Gemiddelde w̄'],
            ['Kwadratensom, Σw²', num(d['sum_w2'], 0) + ' euro²', 'Spreiding s_w'],
            ['Boekwaarde, B', '€ ' + B, 'Niet nodig bij MPU'],
            ['Gewenste marge, E', '€ ' + E, 'Eis bij 95% betrouwbaarheid']],
            'Magazijncontrole'), '')],
        'de boekwaarde staat erbij omdat de accountant juist wil weten of die klopt; MPU rekent er niet mee.', '')
    question = inline_formulas(
        f'<p>De accountant van Autogroep Linderhof, dealer van Volkswagen en Audi, wil weten wat het '
        f'onderdelen- en accessoiremagazijn werkelijk waard is: {N} artikelregels, geboekt voor € {B}. Een '
        f'assistent stelt van {n} aselect gekozen regels de werkelijke waarde vast. De accountant wil het totaal '
        f'op € {E} nauwkeurig weten, met 95% betrouwbaarheid.</p>'
        '<p>De directe schatter is de eenvoudigste van de vier schatters: je neemt het gemiddelde van de '
        'werkelijke waarden en vermenigvuldigt dat met het aantal posten. Vandaar de naam Mean Per Unit: '
        'gemiddelde per eenheid.</p>' + data)
    idea = inline_formulas(
        '<div class="mini-explanation" data-mini-graph="mpu"><div class="mini-copy"><p>Weet je hoe groot een '
        'gemiddelde post is, dan weet je ook ongeveer hoe groot N posten samen zijn. De onzekerheid groeit mee: een '
        'kleine fout in het gemiddelde wordt N keer zo groot in het totaal.</p></div>' + figure + '</div>'
        '<p>MPU werkt goed als de werkelijke waarden niet te veel uiteenlopen. Een paar zeer grote posten '
        'tussen veel kleine maken s_w groot en het interval breed. Kies dan een andere schatter op grond van '
        'het foutpatroon, niet omdat het interval smaller uitvalt.</p>')
    formula = dict(formula, html=formula['html'] + inline_formulas(finite_total()), refs=formula['refs'] + [bron])
    approach = re.search(r'<ol.*?</ol>', steps['html'], flags=re.S)[0] + inline_formulas(
        '<h3>Dezelfde stappen met een tentamenvoorbeeld</h3>'
        '<p>Oefen de stappen met een tweede voorraad: 5.230 artikelen, waarvan er 180 zijn gecontroleerd. '
        'De kwadratensom is in euro², niet in euro.</p>') + worked
    band = (s['estimate'] - d['E_required'], s['estimate'] + d['E_required'], 'gewenste marge')
    limits = (s['lower'] - 60000, s['upper'] + 60000)
    check = block('casus-eis', 'Marge tegenover de eis', [
        panel('Interval, eis en werkelijk totaal', interval_graphic(
            'Interval MPU met eisband en werkelijk totaal', s['estimate'], s['lower'], s['upper'], limits,
            'Totale werkelijke waarde (€)', digits=0, band=band, mark=(d['W'], 'Werkelijk W')),
            f'De balk is het interval (± € {margin}), de strook de eis (± € {E}) en de stippellijn het '
            'werkelijke totaal W.'),
        panel('Routes naar een smaller interval', table(['Route', 'In de casus', 'Les'], [
            ['Meer artikelregels controleren', f"MPU vraagt {s['needed']} regels: {s['extra']} extra", 'Les 8'],
            ['De boekwaarde per regel benutten', 'Verschil-, quotiënt- of regressieschatter', 'Les 5 tot en met 7'],
            ['Het magazijn in groepen verdelen', 'Stratificatie', 'Les 9']], 'Drie manieren om de marge te verkleinen'),
            f"Hoe je die {s['needed']} berekent, leer je in les 8.")],
        '', '')
    watch = inline_formulas(
        f'<p>Achteraf is het werkelijke totaal bekend: € {W}. Het interval bevat die waarde; het probleem is de '
        'breedte, niet de ligging.</p>' + check +
        '<p>Let daarnaast op het volgende.</p><ul>'
        '<li><strong>Vergeet de factor N niet</strong> bij de standaardfout van het totaal.</li>'
        '<li><strong>Een smal interval volgt niet automatisch uit een grote populatie.</strong></li>'
        '<li>Het interval veronderstelt een ongeveer normaal verdeeld steekproefgemiddelde. <strong>De '
        'vuistregel n ≥ 100 garandeert dat niet</strong> bij extreem scheve verdelingen; let op opvallend grote posten.</li></ul>')

    # Het slot van het uitgewerkte voorbeeld toont marge en eis als staafjes op één schaal.
    example = lesson['example']['stepsHtml']
    staafjes = bars(f'Marge {margin} euro tegenover gewenste marge {E} euro.', ['Marge MPU', 'Gewenste marge'],
                    [round(s['margin']), d['E_required']], 'Bedrag (€)')
    example[-1] = (f'<div class="mini-explanation" data-mini-graph="mpu-marge"><div class="mini-copy"><p>{example[-1]}</p></div>'
                   f'<figure>{staafjes}</figure></div>')

    lesson['sections'] = [
        focus,
        dict(title='Welke vraag beantwoordt de directe schatter?', html=question, refs=_refs(use) + [bron]),
        dict(title='Het idee: van gemiddelde per post naar totaal', html=idea, refs=_refs(use) + [bron]),
        formula,
        dict(title='Zo pak je een tentamenvraag aan', html=approach, refs=_refs(steps, case), afterExample=True),
        dict(title='Waar je op moet letten', html=watch, afterExample=True, refs=_refs(use, limit) + [bron]),
        dict(title='Zelf oefenen', html=exercise, refs=_refs(case), afterExample=True),
    ]
    lesson['pitfalls'] = []


def _regressielijn(lesson):
    """Doorlopende casus Linderhof Components in de vaste leslijn van les 10."""
    m, bron = regression(), source_ref('productie')
    output = [bookref('boek-h9a', 242), bookref('boek-h9a', 247)]   # tabel 9.4 en 9.5
    sections = {s['title']: s for s in lesson['sections']}
    b0, b1 = num(m['b0'], 3).replace('-', '−'), num(m['b1'], 3)

    def insert(title, content, before=None, after_bridge=False, refs=()):
        section = sections[title]
        content, body = inline_formulas(content), section['html']
        if after_bridge:
            at = body.index('</p>') + len('</p>')
        elif before:
            assert body.count(before) == 1, (title, before)
            at = body.index(before)
        else:
            at = len(body)
        section['html'] = body[:at] + content + body[at:]
        section['refs'] = section['refs'] + [bron, *refs]

    x6, y6 = PRODUCTION[m['largest']]
    scatter = plot('Productie tegen arbeidsuren, 24 basismaanden', [
        (f'ŷ = {b0} + {b1}x', [(36, predict(m, 36)), (60, predict(m, 60))], PURPLE, False),
        ('Basismaand', list(PRODUCTION), GREEN, True),
        ('Juni 2008', [(x6, y6)], ORANGE, True)],
        'Arbeidsuren (× 1.000)', 'Productie (× 10.000 stuks)', (36, 60, 20, 36),
        segments=[((x6, predict(m, x6)), (x6, y6), ORANGE)])
    insert('Het idee: voor iedere x één verwachte y',
           '<p>Zo ziet dat eruit bij Linderhof Components; de lijn bereken je in het volgende onderdeel.</p>'
           + block('casus-spreiding', 'Productie tegen arbeidsuren', [panel(
               'De basismaanden en de geschatte lijn', scatter,
               'Elk punt is één maand. Het oranje lijnstuk is het residu van juni 2008, de grootste afwijking.')],
               'punten boven de lijn hebben een positief residu, punten eronder een negatief.', ''))
    insert('Zo bereken je de lijn en de spreiding eromheen',
           block('casus-sommen', 'De sommen van Linderhof Components', [panel(
               'Invoer voor de formules', table(['Grootheid', 'Waarde', 'Gebruik'], [
                   ['n', str(m['n']), 'Aantal basismaanden'],
                   ['Σx', num(m['sum_x'], 1), 'Gemiddelde x̄'],
                   ['Σy', num(m['sum_y'], 1), 'Gemiddelde ȳ'],
                   ['Σxy', num(m['sum_xy']), 'Teller van b₁'],
                   ['sₓ', num(m['sx'], 4), 'Noemer van b₁ en r'],
                   ['s_y', num(m['sy'], 4), 'r en sₑ']], 'x = arbeidsuren (× 1.000), y = productie (× 10.000 stuks)'), '')],
               'het uitgewerkte voorbeeld rekent hiermee de lijn, r en sₑ uit.', ''),
           before='<h3>Hoe strak de punten de lijn volgen</h3>')
    two = 2 * m['se']
    months = list(range(1, m['n'] + 1))
    residuals = plot(f'Residuen van de 24 basismaanden met band ± {num(m["se"], 3)} en ± {num(two, 3)}; '
                     f'juni 2008 (+{num(m["residuals"][m["largest"]], 2)}) ligt net buiten 2sₑ', [
        ('Residu', [(i, e) for i, e in zip(months, m['residuals'])], GREEN, True),
        ('Juni 2008', [(m['largest'] + 1, m['residuals'][m['largest']])], ORANGE, True)],
        'Maand (1 = januari 2008)', 'Residu e (× 10.000 stuks)', (0, 25, -3, 3),
        horizontal=[(0, '0', PURPLE)],
        bands=[(GREEN, [(0, -two), (25, -two)], [(0, two), (25, two)]),
               (GREEN, [(0, -m['se']), (25, -m['se'])], [(0, m['se']), (25, m['se'])])],
        xticks=[(1, 'jan 08'), (7, 'jul 08'), (13, 'jan 09'), (19, 'jul 09'), (24, 'dec 09')])
    insert('Zo bereken je de lijn en de spreiding eromheen',
           block('casus-residuen', 'Residuen van Linderhof Components', [panel(
               'Residuen in maandvolgorde', residuals,
               f'Banden ± sₑ en ± 2sₑ (sₑ = {num(m["se"], 3)}, stap 9 van het voorbeeld). De meeste maanden liggen '
               f'binnen één sₑ; juni 2008 (+{num(m["residuals"][m["largest"]], 2)}) ligt net buiten 2sₑ.')],
               '', ''))
    insert('Zo pak je een vraag over de lijn aan: van gegevens naar Coefficients',
           '<h3>De lijn van Linderhof Components in SPSS</h3><p>De vergelijking lees je uit de kolom B van '
           'Coefficients. Bij één verklarende variabele is Beta gelijk aan r. De volledige tabel bevat ook '
           'Std. Error, t en Sig.; die gebruik je in les 12.</p>'
           + block('casus-coefficients', 'SPSS-uitvoer van de productiecasus', [
               panel('Coefficients', table(['Model', 'B', 'Beta'], [
                   ['(Constant)', b0, ''], ['arbeidsuren (1.000)', b1, num(m['r'], 3)]],
                   'Dependent Variable: productie (10.000)'), f'ŷ = {b0} + {b1}x.'),
               panel('Model Summary', table(['R', 'R Square', 'Std. Error of the Estimate'], [
                   [num(m['r'], 3), num(m['r2'], 3), num(m['se'], 3)]], 'Predictors: (Constant), arbeidsuren (1.000)'),
                   f'R is r zonder teken. R Square {num(m["r2"], 3)}: de lijn verklaart ongeveer '
                   f'{num(m["r2"] * 100, 0)}% van de variatie in productie (les 11). Std. Error of the '
                   'Estimate is sₑ.')],
               '', ''),
           after_bridge=True, refs=output)


def _line(lesson, blocks):
    """Zet bestaande blokken in de vaste lijn; ieder oud blok komt precies één keer terug."""
    old = {s['title']: s for s in lesson['sections'][1:]}
    used = [part['old'] for block in blocks for part in block['parts']]
    if sorted(used) != sorted(old):
        raise ValueError(f'Leslijn {lesson["id"]} klopt niet: {sorted(set(used) ^ set(old))}')
    sections = lesson['sections'][:1]
    for block in blocks:
        body = inline_formulas(f'<p class="lesson-bridge">{html.escape(block["intro"], quote=False)}</p>')
        for part in block['parts']:
            if part.get('heading'):
                body += f'<h3>{html.escape(part["heading"], quote=False)}</h3>'
            body += old[part['old']]['html']
        section = dict(title=block['title'], html=body, refs=_refs(*(old[p['old']] for p in block['parts'])),
                       sourceTitles=[p['old'] for p in block['parts']])
        if block.get('afterExample'):
            section['afterExample'] = True
        sections.append(section)
    lesson['sections'] = sections


def enhance(lessons):
    for lesson in lessons:
        if lesson['id'] == 'mpu':
            _mpu(lesson)
        elif lesson['id'] in LINES:
            _line(lesson, LINES[lesson['id']])
            if lesson['id'] == 'regressielijn':
                _regressielijn(lesson)
