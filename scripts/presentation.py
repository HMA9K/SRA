"""Offline mathematical typography for the formulas in build_content.py.

Presentation only: definitions and source references remain in the course data.
Native MathML retains fractions, roots and indices in both HTML editions.
"""
import html
import re
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
    return '<mover accent="true"><mpadded height="+0.15em">' + a + '</mpadded><mo stretchy="true">¯</mo></mover>'

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
 'rekenen':'Σ betekent optellen; wᵢ is waarde i; w̄ is het gemiddelde; n is het aantal waarden; s² is de variantie; s is de standaardafwijking.',
 'onzekerheid':'± betekent: één keer aftrekken voor de ondergrens en één keer optellen voor de bovengrens. E is de halve intervalbreedte.',
 'mpu':'N = populatieomvang; n = steekproefomvang; w̄ = gemiddelde werkelijke waarde; s_w = standaardafwijking; t = kritieke tabelwaarde. Het dakje op W betekent geschat.',
 'verschil':'e = boekwaarde minus werkelijke waarde; B = bekend boekwaardetotaal; s_e = spreiding van de verschillen; s_V = standaardfout van het geschatte totaal.',
 'quotient':'q = goedratio; R_bw = correlatie tussen b en w; s_b en s_w = standaardafwijkingen; s_Q = standaardfout van het geschatte totaal.',
 'regressieschatter':'b₁ = helling; R_bw = correlatie; B = bekend boekwaardetotaal. De factor √(1 − R²_bw) verlaagt de standaardfout ten opzichte van MPU.',
 'steekproefomvang':'E = toegestane marge aan één kant; t = kritieke waarde; N = populatieomvang; s² = de variantie passend bij de schatter; γ = tussenuitkomst.',
 'stratificatie':'Index i verwijst naar stratum i. Nᵢ = groepsomvang; nᵢ = controles; sᵢ = spreiding. W_top is het bekende werkelijke totaal van het volledig gecontroleerde topstratum.',
 'regressielijn':'β = onbekende populatiecoëfficiënt; b = geschatte coëfficiënt; ŷ = voorspelde y; ε = storing; eᵢ = residu bij waarneming i.',
 'anova':'SSR = verklaarde kwadratensom; SSE = residuele kwadratensom; TotalSS = totale kwadratensom; MSR en MSE zijn kwadratensommen gedeeld door hun vrijheidsgraden.',
 'toetsen':'bⱼ = geschatte coëfficiënt; βⱼ,₀ = waarde onder H₀; s_bⱼ = standaardfout van die coëfficiënt; k = aantal verklarende variabelen, zonder constante.',
 'diagnostiek':'MD = Mahalanobis Distance; CD = Cook’s Distance. Een streep boven MD of CD betekent gemiddelde; s is de standaardafwijking.',
 'voorspellen':'x₀ = nieuwe x; x̄ = gemiddelde x; s_x = standaardafwijking van x; s_e = residuele standaardfout; t hoort hier bij n − 2 vrijheidsgraden.',
 'meervoudig':'k = aantal verklarende variabelen; bⱼ is het effect bij gelijkblijvende overige variabelen. R²_adj corrigeert voor het aantal verklarende variabelen.',
 'modelbouw':'R²ᵢ hoort bij de hulpregressie van xᵢ op de overige verklarende variabelen. Bij de F-formule gaat het om precies één extra variabele.',
 'validatie':'n_test = aantal testwaarnemingen; yᵢ = werkelijk gemeten testwaarde; ŷᵢ = voorspelling met het model uit de trainingsset.',
}

def mathml(content, inline=False):
    result = f'<math xmlns="http://www.w3.org/1998/Math/MathML" display="{"inline" if inline else "block"}">{row(content)}</math>'
    ET.fromstring(result)  # Never ship malformed mathematical markup.
    return result

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
            out='<div class="formula formula-typeset">'
            for label,formula in formulas:
                out+=f'<div class="formula-row"><span class="formula-label">{html.escape(label)}</span><div class="math-scroll" tabindex="0" role="region" aria-label="Formule: {html.escape(label)}">{mathml(formula)}</div></div>'
            out+='</div>'
            if used==1:
                out+=f'<details class="symbols"><summary>Wat betekenen de symbolen?</summary><p>{LEGENDS[lesson["id"]]}</p></details>'
            return out
        for section in lesson['sections']:
            section['html']=re.sub(r'<div class="formula">(.*?)</div>',replace,section['html'],flags=re.S)
            for original,formula in CELL_FORMULAS.items():
                section['html']=section['html'].replace(f'<td>{original}</td>',f'<td>{mathml(formula,inline=True)}</td>')
            section['html']=section['html'].replace('<th>','<th scope="col">')
            if '<table>' in section['html']:
                section['html']=section['html'].replace('<table>',f'<table><caption>{html.escape(section["title"])}</caption>')
        if next(blocks,None) is not None:
            raise ValueError(f'Unused typeset formula in {lesson["id"]}')

    # A short symbol keeps the combined estimate legible, with its meaning above.
    for lesson in lessons:
        if lesson['id']=='stratificatie':
            for section in lesson['sections']:
                section['html']=section['html'].replace(W('top'),sub(v('W'),text('top')))
