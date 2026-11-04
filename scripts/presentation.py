"""Offline mathematical typography for the formulas in build_content.py.

Presentation only: definitions and source references remain in the course data.
Native MathML retains fractions, roots and indices in both HTML editions.
"""
import html
import re
import unicodedata
import xml.etree.ElementTree as ET

def tag(name, value):
    return f'<{name}>{value}</{name}>'

def v(value):
    return tag('mi', html.escape(str(value)))

def num(value):
    return tag('mn', str(value))

def text(value):
    return tag('mtext', html.escape(value))

def op(value):
    return tag('mo', html.escape(value))

def row(*values):
    return tag('mrow', ''.join(values))

def sub(a, b):
    return tag('msub', a + b)

def sup(a, b):
    return tag('msup', a + b)

def sq(a):
    return sup(a, num(2))

def frac(a, b):
    return tag('mfrac', row(a) + row(b))

def root(a):
    return tag('msqrt', a)

def bar(a):
    # Vaste hoogte: browsers negeren de relatieve vorm "+0.15em", waardoor het streepje de letter raakte.
    return '<mover accent="true"><mpadded height="0.8em">' + a + '</mpadded><mo stretchy="true">¯</mo></mover>'

def hat(a):
    return '<mover accent="true">' + a + op('^') + '</mover>'

def group(a):
    return row(op('('), a, op(')'))

def add(*args):
    return op('+').join(args)

def mul(*args):
    return op('×').join(args)

def minus(a, b):
    return a + op('−') + b

def eq(*args):
    return op('=').join(args)

def summ(a):
    return op('∑') + a

N,n,w,b,s,t,k,x,y = map(v, ['N','n','w','b','s','t','k','x','y'])
one=num(1)
i,j=v('i'),v('j')
wb,bb,xb,yb=map(bar,[w,b,x,y])
wh,yh=hat(v('W')),hat(y)
sw,sb,se,sx=[sub(s,a) for a in [w,b,v('e'),x]]
Rbw=sub(v('R'),v('bw'))
df=minus(minus(n,k),one)
finite=root(frac(minus(N,n),minus(N,one)))
W=lambda label: sub(wh,text(label))
S=lambda label: sub(s,text(label))
total_se=lambda sd: mul(N,frac(sd,root(n)),finite)
interval=lambda label: eq(text('Interval'),W(label)+op('±')+mul(t,S(label)))
variance=lambda a: frac(minus(summ(sq(a)),frac(sq(group(summ(a))),n)),minus(n,one))
ssr,sse,total,msr,mse=map(v,['SSR','SSE','TotalSS','MSR','MSE'])
b0,b1=sub(b,num(0)),sub(b,num(1))
ni,Ni,si=sub(n,i),sub(N,i),sub(s,i)
ratio_variance=add(minus(sq(sw),row(num(2),v('q'),Rbw,sb,sw)),row(sq(v('q')),sq(sb)))
stratum_se=mul(Ni,frac(si,root(ni)),root(frac(minus(Ni,ni),minus(Ni,one))))
prediction_factor=root(add(one,frac(one,n),frac(sq(group(minus(sub(x,num(0)),xb))),row(group(minus(n,one)),sq(sx)))))

# Each entry corresponds to one existing formula block, in source order.
FORMULAS = {
 'rekenen': [
  [('Variantie',eq(sq(s),frac(summ(sq(group(minus(sub(w,i),wb)))),minus(n,one)))),('Standaardafwijking',eq(s,root(sq(s))))],
  [('Rekenen met totalen',eq(sq(s),variance(w)))],
 ],
 'onzekerheid': [[
  ('Interval',eq(text('Interval'),text('puntschatting')+op('±')+v('E'))),
  ('Marge',eq(v('E'),mul(text('kritieke waarde'),text('standaardfout')))),
 ]],
 'mpu': [[('Puntschatting',eq(W('MPU'),mul(N,wb))),('Standaardfout',eq(S('MPU'),total_se(sw))),('Interval',interval('MPU'))]],
 'verschil': [
  [('Verschil per post',eq(sub(v('e'),i),minus(sub(b,i),sub(w,i)))),('Gemiddeld verschil',eq(bar(v('e')),minus(bb,wb))),('Puntschatting',eq(W('V'),minus(v('B'),mul(N,bar(v('e'))))))],
  [('Variantie verschillen',eq(sq(se),variance(v('e')))),('Standaardfout',eq(S('V'),total_se(se))),('Interval',interval('V'))],
 ],
 'quotient': [
  [('Goedratio',eq(v('q'),frac(summ(w),summ(b)),frac(wb,bb))),('Puntschatting',eq(W('Q'),mul(v('q'),v('B'))))],
  [('Resterende spreiding',eq(S('q'),root(ratio_variance))),('Standaardfout',eq(S('Q'),total_se(S('q'))))],
 ],
 'regressieschatter': [
  [('Helling',eq(b1,mul(Rbw,frac(sw,sb)))),('Puntschatting',eq(W('R'),add(row(N,wb),row(b1,group(minus(v('B'),row(N,bb)))))))],
  [('Standaardfout',eq(S('R'),mul(total_se(sw),root(minus(one,sq(Rbw)))))),('Vergelijk met MPU',eq(S('R'),mul(S('MPU'),root(minus(one,sq(Rbw))))))],
 ],
 'steekproefomvang': [[('Tussenstap',eq(v('γ'),frac(sq(v('E')),mul(sq(t),N,sq(s))))),('Benodigde omvang',eq(n,frac(N,add(one,v('γ')))))]],
 'stratificatie': [
  [('Evenredig',eq(ni,mul(frac(Ni,N),n))),('Neyman',eq(ni,mul(frac(row(Ni,si),summ(group(row(Ni,si)))),n)))],
  [('Totaalschatting',eq(W('tot'),add(summ(group(row(Ni,sub(wb,i)))),W('top')))),
   ('Gecombineerde variantie',eq(sq(S('tot')),summ(sq(group(stratum_se))))),
   ('Interval',eq(text('Interval'),W('tot')+op('±')+mul(t,root(sq(S('tot'))))))],
 ],
 'regressielijn': [
  [('Populatiemodel',eq(y,add(sub(v('β'),num(0)),row(sub(v('β'),num(1)),x),v('ε')))),('Geschatte lijn',eq(yh,add(b0,row(b1,x)))),('Residu',eq(sub(v('e'),i),minus(sub(y,i),sub(yh,i))))],
  [('Helling',eq(b1,frac(minus(summ(row(x,y)),row(n,xb,yb)),row(group(minus(n,one)),sq(sx))))),('Constante',eq(b0,minus(yb,row(b1,xb))))],
 ],
 'anova': [[('Verklaarde variatie',eq(sq(v('R')),frac(ssr,total),minus(one,frac(sse,total)))),('Residuele variantie',eq(mse,sq(se))),('Standaardfout',eq(se,root(mse))),('Globale toets',eq(v('F'),frac(msr,mse)))]],
 'toetsen': [[('Toetsingsgrootheid',eq(t,frac(minus(sub(b,j),sub(v('β'),row(j,op(','),num(0)))),sub(s,sub(b,j))))),('Bij H₀: βⱼ = 0',eq(t,frac(sub(b,j),sub(s,sub(b,j))))),('Vrijheidsgraden',eq(v('df'),df))]],
 'diagnostiek': [[('Grens voor MD',eq(sub(v('MD'),text('kritiek')),add(bar(v('MD')),mul(num(3),S('MD'))))),('Grens voor CD',eq(sub(v('CD'),text('kritiek')),add(bar(v('CD')),mul(num(3),S('CD')))))]],
 'voorspellen': [[('Individueel voorspellingsinterval',sub(yh,num(0))+op('±')+mul(t,se,prediction_factor))]],
 'meervoudig': [
  [('Geschatte vergelijking',eq(yh,add(b0,row(b1,sub(x,num(1))),row(sub(b,num(2)),sub(x,num(2))),op('…'),row(sub(b,k),sub(x,k)))))],
  [('Gecorrigeerde verklaarde variatie',eq(sub(sq(v('R')),text('adj')),minus(sq(v('R')),frac(row(k,group(minus(one,sq(v('R'))))),df))))],
 ],
 'modelbouw': [
  [('Variance Inflation Factor',eq(sub(v('VIF'),i),frac(one,sub(v('Tolerance'),i)),frac(one,minus(one,sq(sub(v('R'),i))))))],
  [('Eén extra variabele',eq(v('F'),frac(minus(sub(ssr,text('uitgebreid')),sub(ssr,text('klein'))),sub(mse,text('uitgebreid')))))],
 ],
 'validatie': [[('Voorspelfout op de testset',eq(v('MSPR'),frac(summ(sq(group(minus(sub(y,i),sub(yh,i))))),sub(n,text('test')))))]],
}

LEGENDS = {
 'rekenen':'wᵢ = waarde i; w̄ = gemiddelde; n = aantal waarden; s² = variantie; s = standaardafwijking',
 'onzekerheid':'E = halve intervalbreedte',
 'mpu':'N = populatieomvang; n = steekproefomvang; w̄ = gemiddelde werkelijke waarde; s_w = standaardafwijking; t = kritieke tabelwaarde',
 'verschil':'e = boekwaarde minus werkelijke waarde; B = bekend boekwaardetotaal; s_e = spreiding van de verschillen; s_V = standaardfout van het geschatte totaal',
 'quotient':'q = goedratio; R_bw = correlatie tussen b en w; s_b en s_w = standaardafwijkingen; s_Q = standaardfout van het geschatte totaal',
 'regressieschatter':'b₁ = helling; R_bw = correlatie; B = bekend boekwaardetotaal',
 'steekproefomvang':'E = toegestane marge aan één kant; t = kritieke waarde; N = populatieomvang; s² = de variantie passend bij de schatter; γ = tussenuitkomst',
 'stratificatie':'Nᵢ = groepsomvang; nᵢ = controles; sᵢ = spreiding; W_top = bekend werkelijk totaal van het topstratum',
 'regressielijn':'β = onbekende populatiecoëfficiënt; b = geschatte coëfficiënt; ŷ = voorspelde y; ε = storing; eᵢ = residu bij waarneming i',
 'anova':'SSR = verklaarde kwadratensom; SSE = residuele kwadratensom; TotalSS = totale kwadratensom',
 'toetsen':'bⱼ = geschatte coëfficiënt; βⱼ,₀ = waarde onder H₀; s_bⱼ = standaardfout van die coëfficiënt; k = aantal verklarende variabelen',
 'diagnostiek':'MD = Mahalanobis Distance; CD = Cook’s Distance; s = standaardafwijking',
 'voorspellen':'x₀ = nieuwe x; x̄ = gemiddelde x; s_x = standaardafwijking van x; s_e = residuele standaardfout; t = kritieke tabelwaarde',
 'meervoudig':'k = aantal verklarende variabelen; bⱼ = geschatte coëfficiënt; R²_adj = gecorrigeerde verklaarde variatie',
 'modelbouw':'VIFᵢ = variantie-inflatiefactor; R²ᵢ = verklaarde variatie in de hulpregressie',
 'validatie':'n_test = aantal testwaarnemingen; yᵢ = werkelijk gemeten testwaarde; ŷᵢ = voorspelling met het model',
}

# Per formuleblok wat de symbolenlijst zelf niet zegt; de plek volgt het blok waar de formule staat.
LEGEND_NOTES = {
 'onzekerheid':['E is de halve intervalbreedte.'],
 'mpu':['Het dakje op W betekent geschat.'],
 'regressieschatter':['','De factor √(1 − R²_bw) verlaagt de standaardfout ten opzichte van MPU.'],
 'stratificatie':['Index i verwijst naar stratum i.','W_top is het bekende werkelijke totaal van het volledig gecontroleerde topstratum.'],
 'anova':['MSR en MSE zijn kwadratensommen gedeeld door hun vrijheidsgraden.'],
 'toetsen':['k telt de verklarende variabelen, zonder constante.'],
 'diagnostiek':['Een streep boven MD of CD betekent gemiddelde.'],
 'voorspellen':['t hoort hier bij n − 2 vrijheidsgraden.'],
 'meervoudig':['bⱼ is het effect bij gelijkblijvende overige variabelen.','R²_adj corrigeert voor het aantal verklarende variabelen.'],
 'modelbouw':['R²ᵢ hoort bij de hulpregressie van xᵢ op de overige verklarende variabelen.','In deze F-formule voor geneste modellen gaat het om precies één extra variabele.'],
 'validatie':['ŷᵢ komt uit het model dat op de trainingsset is geschat.'],
}


def symbol_list(lesson_id):
    """Symbolen zonder scripts, zoals in de leesversie; js/formula-help.js maakt hier de lijst per formule van."""
    rows = ''.join(f'<dt>{html.escape(symbol)}</dt><dd>{html.escape(meaning)}</dd>'
                   for symbol, meaning in (part.split(' = ', 1) for part in LEGENDS[lesson_id].split('; ')))
    return f'<div class="symbols" data-no-terms data-no-formula-text><dl>{rows}</dl></div>'


def note_list(text):
    """Eén opmerking per regel; de punt in 'SPSS Sig.' sluit geen zin af."""
    notes = [note for note in re.split(r'(?<!Sig\.)(?<=\.)\s+', text.strip()) if note]
    return ('<ul class="symbols-notes">' + ''.join(f'<li>{html.escape(note, quote=False)}</li>' for note in notes) + '</ul>') if notes else ''


def legend_html(lesson_id, extra=''):
    return symbol_list(lesson_id) + note_list(' '.join(LEGEND_NOTES.get(lesson_id, [])) + extra)


def mathml(content, inline=False):
    result = f'<math xmlns="http://www.w3.org/1998/Math/MathML" display="{"inline" if inline else "block"}">{row(content)}</math>'
    ET.fromstring(result)  # Never ship malformed mathematical markup.
    return result



def formula_block(formulas):
    """Dezelfde toegankelijke formuleopmaak voor oorspronkelijke en aanvullende uitleg."""
    out = '<div class="formula formula-typeset">'
    for label, formula in formulas:
        out += (f'<div class="formula-row"><span class="formula-label">{html.escape(label)}</span>'
                f'<div class="math-scroll" tabindex="0" role="region" aria-label="Formule: {html.escape(label)}">'
                f'{mathml(formula)}</div></div>')
    return out + '</div>'

STRATIFIED_PLANNING = [
    ('Tussenstap', eq(v('γ'), frac(sq(v('E')), mul(sq(t), summ(group(row(Ni, sq(si)))))))),
    ('Benodigde omvang', eq(n, frac(N, add(one, v('γ'))))),
]


def inline_formulas(content):
    """Typeset known inline notation without touching markup or existing MathML."""
    from html.parser import HTMLParser

    formulas = {
        's/√n': frac(s, root(n)),
        's / √n': frac(s, root(n)),
        's_w/√n': frac(sw, root(n)),
        'n/N': frac(n, N),
        'α/2': frac(v('α'), num(2)),
        'N × s_w/√n': mul(N, frac(sw, root(n))),
        's_w/s_b': frac(sw, sb),
        's_w / s_b': frac(sw, sb),
        'Σw / n': frac(summ(w), n),
        'Σw/n': frac(summ(w), n),
        'Σb / n': frac(summ(b), n),
        'Σb/n': frac(summ(b), n),
        '√(1 − R_bw²)': root(minus(one, sq(Rbw))),
    }
    tokens = re.compile(r'(?<![\w/])(?:' + '|'.join(re.escape(key) for key in sorted(formulas, key=len, reverse=True))
                        + r'|[sRbŴn][²³]?_(?:MPU|test|tot|adj|bw|[wbexqQRVij01])[²³]?)(?![\w/])')
    # Markeer alleen herkenbare rekenuitdrukkingen; gewone woorden, datums en HTML blijven intact.
    symbol = r'(?:TotalSS|SSR|SSE|MSR|MSE|MSPR|VIF|df|[NnBWŴEqsxtkwbeRyαβγμσρŷēȳ])(?:_[A-Za-z0-9]+|_\([^()\s]+\)|[₀-₉ᵢⱼₖₑ²³\u0304])*'
    atom = r'(?:Σ\s*|√)?(?:' + symbol + r'|[−-]?\d+(?:[.,]\d+)*|∞)'
    operator = r'(?:[=<>≤≥≈±×÷/+−]|&lt;|&gt;|-(?=\s))'
    # Een index tussen haakjes, zoals in e_(t−1), blijft bij zijn symbool.
    expressions = re.compile(r'(?<![\w/])(?<!_\()' + atom + r'(?:\s*' + operator + r'\s*' + atom + r')+(?![\w/])')
    values = re.compile(r'(?<![\w/.])(?:€\s*[−-]?\d+(?:[.,]\d+)*|[−-]?\d+(?:[.,]\d+)*%|[−-]?\d+(?:\.\d{3})*,\d+)(?![\w/]|\.\w)')

    # Blijft als één geheel staan; js/formula-text.js zet dit om naar een wortel of breuk.
    group = r'\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)'
    wide = re.compile(r'(?<![\w/])(?:[^\s()\[\]]+\s*=\s*)?(?:\[[^\[\]]*\]\s*/\s*\d[\d.,]*\d|(?:\[[^\[\]]*\]|[^\s()\[\]/]+|' + group + r')\s*/\s*' + group + r')'
                      + r'|(?:(?<![\w/])[^\s()\[\]]+\s*=\s*)?(?:(?<![\w/])[^\s()]+/)?√(?:' + group + r'|\[[^\[\]]*\])(?:/' + group + r')?')

    def replace(match):
        token = match.group()
        formula = formulas.get(token)
        if formula is None:
            base, index = token.split('_')
            power = '2' if '²' in token else '3' if '³' in token else None
            base = base.rstrip('²³')
            index = index.rstrip('²³')
            formula = sub(hat(v('W')) if base == 'Ŵ' else v(base), text(index) if len(index) > 1 else v(index))
            if power:
                formula = sub(sup(v(base), num(power)), text(index)) if index == 'adj' else sup(formula, num(power))
        return mathml(formula, inline=True)

    def format_plain(value):
        parts, previous = [], 0
        mark_values = lambda raw: values.sub(lambda match: '<span class="inline-value">' + match[0] + '</span>', raw)
        for match in tokens.finditer(value):
            parts.extend([mark_values(value[previous:match.start()]), replace(match)])
            previous = match.end()
        return ''.join(parts) + mark_values(value[previous:])

    def format_text(value):
        parts, previous = [], 0
        for match in wide.finditer(value):
            parts.extend([format_chunk(value[previous:match.start()]), '<span class="inline-expression">' + match[0] + '</span>'])
            previous = match.end()
        return ''.join(parts) + format_chunk(value[previous:])

    def format_chunk(value):
        parts, previous = [], 0
        for match in expressions.finditer(value):
            parts.append(format_plain(value[previous:match.start()]))
            content = tokens.sub(replace, match[0])
            if re.search(r'[A-Za-zα-ωΣ√=<>≤≥≈±×÷+−]', match[0]):
                content = '<span class="inline-expression">' + content + '</span>'
            parts.append(content)
            previous = match.end()
        parts.append(format_plain(value[previous:]))
        return ''.join(parts)

    class InlineParser(HTMLParser):
        def __init__(self):
            super().__init__(convert_charrefs=False)
            self.parts = []
            self.skip = 0
            self.pending = []

        def flush(self):
            if self.pending:
                self.parts.append(format_text(''.join(self.pending)))
                self.pending.clear()

        def handle_starttag(self, name, attrs):
            self.flush()
            if name in ('math', 'svg', 'script', 'style', 'a', 'code', 'pre', 'span'):
                self.skip += 1
            self.parts.append(self.get_starttag_text())

        def handle_endtag(self, name):
            self.flush()
            self.parts.append(f'</{name}>')
            if name in ('math', 'svg', 'script', 'style', 'a', 'code', 'pre', 'span'):
                self.skip -= 1

        def handle_startendtag(self, name, attrs):
            self.flush()
            self.parts.append(self.get_starttag_text())

        def handle_data(self, value):
            (self.parts if self.skip else self.pending).append(value)

        def handle_entityref(self, name):
            (self.parts if self.skip else self.pending).append(f'&{name};')

        def handle_charref(self, name):
            (self.parts if self.skip else self.pending).append(f'&#{name};')

        def handle_comment(self, value):
            self.flush()
            self.parts.append(f'<!--{value}-->')

    parser = InlineParser()
    parser.feed(content)
    parser.close()
    parser.flush()
    return ''.join(parser.parts)

_MATH_TOKEN = re.compile(r'\s+|"[^"]*"|\d+(?:[.,]\d+)*|(?:[A-Za-zα-ωΑ-ΡΤ-Ω][̂̄]?)+|.', re.S)
_MATH_SCRIPTS = str.maketrans({'²': '^2', '³': '^3', '₀': '_0', '₁': '_1', '₂': '_2', '₃': '_3', 'ᵢ': '_i', 'ⱼ': '_j', 'ₖ': '_k'})


def formula(source):
    """Zet lineaire notatie om, bijvoorbeeld Ŵ_MPU = N × w̄ of √{(N − n)/(N − 1)}.

    Een spatie scheidt symbolen zonder teken ertussen; {...} groepeert zonder haakjes.
    """
    prepared = unicodedata.normalize('NFD', source).replace('≠', '≠').translate(_MATH_SCRIPTS)
    tokens = [token for token in _MATH_TOKEN.findall(prepared) if not token.isspace()]
    position = 0

    def peek():
        return tokens[position] if position < len(tokens) else None

    def take():
        nonlocal position
        position += 1
        return tokens[position - 1]

    def symbol(token):
        if len(token) == 2 and token[1] in '̂̄':
            return (hat if token[1] == '̂' else bar)(v(token[0]))
        if '̂' in token or '̄' in token:
            raise ValueError(f'Zet een spatie tussen de symbolen in: {source}')
        return v(token)

    def group(closing):
        parts = []
        while peek() != closing:
            if peek() is None:
                raise ValueError(f'Haakje niet gesloten in: {source}')
            parts.append(term())
        take()
        return row(*parts)

    def atom():
        """Geef de opmaak en de inhoud zonder haakjes, voor breuken en wortels."""
        token = take()
        if token == '{':
            content = group('}')
            return content, content
        if token in ('(', '['):
            closing = ')' if token == '(' else ']'
            content = group(closing)
            return row(op(token), content, op(closing)), content
        if token == '√':
            bare = atom()[1]
            return root(bare), root(bare)
        if token == 'Σ':
            value = op('∑')
        elif token.startswith('"'):
            value = text(unicodedata.normalize('NFC', token[1:-1]))
        elif token[0].isdigit():
            value = num(token)
        elif token[0].isalpha():
            value = symbol(token)
        else:
            value = op(token)
        return value, value

    def script():
        token = peek()
        if token == '{':
            return atom()[0]
        take()
        if token[0].isdigit():
            return num(token)
        return v(token) if len(token) == 1 else text(token)

    def factor():
        value, bare = atom()
        lower = upper = None
        while peek() in ('_', '^'):
            if take() == '_':
                lower = script()
            else:
                upper = script()
        if lower and upper:
            value = tag('msubsup', value + lower + upper)
        elif lower:
            value = sub(value, lower)
        elif upper:
            value = sup(value, upper)
        return value, value if lower or upper else bare

    def term():
        value, bare = factor()
        if peek() != '/':
            return value
        take()
        return frac(bare, factor()[1])

    parts = []
    while peek() is not None:
        parts.append(term())
    return mathml(row(*parts), inline=True)


def rich_text(value):
    """Tekst met formules tussen dollartekens naar veilige HTML."""
    parts = value.split('$')
    if len(parts) % 2 == 0:
        raise ValueError(f'Ongesloten formule in: {value}')
    return ''.join(formula(part) if index % 2 else html.escape(part, quote=False) for index, part in enumerate(parts))


def plain_text(value):
    """Doorzoekbare tekst zonder opmaaktekens."""
    return re.sub(r'[${}"]', '', value)


CELL_FORMULAS = {
 'SSR/k': frac(ssr,k),
 'SSE/(n−k−1)': frac(sse,df),
 'TotalSS/(n−1)': frac(total,minus(n,one)),
 'SSR = Σ(ŷᵢ−ȳ)²': eq(ssr,summ(sq(group(minus(sub(yh,i),yb))))),
 'SSE = Σ(yᵢ−ŷᵢ)²': eq(sse,summ(sq(group(minus(sub(y,i),sub(yh,i)))))),
 'TotalSS = Σ(yᵢ−ȳ)²': eq(total,summ(sq(group(minus(sub(y,i),yb))))),
 'ŷ = b₀ + b₁ln(x)': eq(yh,add(b0,row(b1,v('ln'),group(x)))),
 'ln(ŷ) = b₀ + b₁x': eq(row(v('ln'),group(yh)),add(b0,row(b1,x))),
 'ŷ = exp(b₀ + b₁x)': eq(yh,row(v('exp'),group(add(b0,row(b1,x))))),
 'ln(ŷ) = b₀ + b₁ln(x)': eq(row(v('ln'),group(yh)),add(b0,row(b1,v('ln'),group(x)))),
 'ŷ = exp(b₀) × xᵇ¹': eq(yh,mul(row(v('exp'),group(b0)),sup(x,b1))),
}

def enhance(lessons):
    for lesson in lessons:
        blocks=iter(FORMULAS.get(lesson['id'], []))
        used=0
        def replace(match):
            nonlocal used
            try:
                formulas=next(blocks)
            except StopIteration:
                raise ValueError(f'Unmapped formula in {lesson["id"]}')
            used+=1
            out=formula_block(formulas)
            notes=LEGEND_NOTES.get(lesson['id'],[])
            if used==1:
                out+=symbol_list(lesson['id'])
            if used<=len(notes):
                out+=note_list(notes[used-1])
            return out
        for section in lesson['sections']:
            section['html']=re.sub(r'<div class="formula">(.*?)</div>',replace,section['html'],flags=re.S)
            for original,formula in CELL_FORMULAS.items():
                section['html']=section['html'].replace(f'<td>{original}</td>',f'<td>{mathml(formula,inline=True)}</td>')
            section['html']=section['html'].replace('<th>','<th scope="col">')
            # Alleen tabellen zonder eigen bijschrift krijgen de bloktitel als bijschrift.
            section['html']=re.sub(r'<table>(?!<caption>)',lambda m:f'<table><caption>{html.escape(section["title"])}</caption>',section['html'])
        if next(blocks,None) is not None:
            raise ValueError(f'Unused typeset formula in {lesson["id"]}')

    # A short symbol keeps the combined estimate legible, with its meaning above.
    for lesson in lessons:
        if lesson['id']=='stratificatie':
            for section in lesson['sections']:
                section['html']=section['html'].replace(W('top'),sub(v('W'),text('top')))
