"""Brongegevens van de doorlopende casussen en alle daaruit berekende waarden.

Eén rekenbron: lesteksten en figuren halen hun getallen hier op en maken ze op met
formula_visuals.num. Deze module rekent alleen; zij bevat geen tekst of opmaak.

Handelsvoorraden (boek H8, p. 202–207): sommen van de steekproef van 400 artikelen.
Productiviteit (boek H9, tabel 9.1, p. 235): 24 basismaanden, januari 2008 t/m december 2009.
Kritieke t volgens het onderwijsprogramma: bij df > 200 de onderste tabelrij, anders de tabelwaarde.
"""
from math import ceil, floor, sqrt

T_INF_95 = 1.960   # tabellenbundel PDF 13, onderste rij (inf.), kolom 0,025
T_22_95 = 2.074    # tabellenbundel tabel 13.4, df 22, kolom 0,025

STOCK = dict(
    N=3500, n=400, B=7360817,
    sum_w=803403, sum_w2=1798449484,
    sum_b=830066, sum_b2=1871695609, sum_bw=1817707080,
    W=7029580,            # werkelijk totaal, achteraf bekend uit het populatiebestand
    E_required=150000,    # gewenste marge bij 95% tweezijdig
)

MONTHS = ('jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec')
# (x, y): arbeidsuren × 1.000 en productie × 10.000 stuks, in maandvolgorde 2008 en daarna 2009.
PRODUCTION = (
    (58.5, 33.7), (44.2, 26.4), (52.3, 31.1), (56.0, 34.2), (53.4, 32.7), (50.1, 31.7),
    (39.5, 21.8), (39.5, 22.8), (53.1, 32.5), (55.5, 31.2), (40.3, 23.9), (51.2, 28.4),
    (48.6, 29.1), (51.3, 29.2), (48.5, 28.0), (42.2, 23.3), (56.6, 32.4), (41.3, 24.7),
    (40.9, 22.9), (40.0, 24.4), (45.1, 26.8), (55.1, 31.8), (55.0, 33.7), (50.2, 29.3),
)


def month_label(index):
    return f'{MONTHS[index % 12]} {2008 + index // 12}'


def mpu(data=STOCK, t=T_INF_95):
    """Directe schatter met eindigheidscorrectie, interval en benodigde omvang (formules 1–5)."""
    N, n = data['N'], data['n']
    mean = data['sum_w'] / n
    variance = (data['sum_w2'] - data['sum_w'] ** 2 / n) / (n - 1)
    sd = sqrt(variance)
    correction = sqrt((N - n) / (N - 1))
    factor = N / sqrt(n) * correction
    estimate = N * mean
    se = factor * sd
    margin = t * se
    gamma = data['E_required'] ** 2 / (t ** 2 * N * variance)
    needed = ceil(N / (1 + gamma))
    return dict(N=N, n=n, df=n - 1, t=t, mean=mean, variance=variance, sd=sd,
                se_mean=sd / sqrt(n), correction=correction, factor=factor,
                estimate=estimate, se=se, margin=margin,
                # Eindgrenzen naar buiten afgerond, zoals de werkvolgorde voorschrijft.
                lower=floor(estimate - margin), upper=ceil(estimate + margin),
                contains_W=estimate - margin <= data['W'] <= estimate + margin,
                meets_requirement=margin <= data['E_required'],
                gamma=gamma, needed=needed, extra=needed - n)


def regression(points=PRODUCTION):
    """Enkelvoudige kleinste-kwadratenlijn met de sommen, r, R², sₑ en de residuen."""
    n = len(points)
    sum_x = sum(x for x, _ in points)
    sum_y = sum(y for _, y in points)
    sum_xy = sum(x * y for x, y in points)
    sum_x2 = sum(x * x for x, _ in points)
    sum_y2 = sum(y * y for _, y in points)
    mean_x, mean_y = sum_x / n, sum_y / n
    sxx = sum_x2 - sum_x ** 2 / n          # (n − 1) sₓ²
    syy = sum_y2 - sum_y ** 2 / n          # (n − 1) s_y² = TotalSS
    sxy = sum_xy - sum_x * sum_y / n       # Σxy − n x̄ ȳ
    b1 = sxy / sxx
    b0 = mean_y - b1 * mean_x
    residuals = [y - (b0 + b1 * x) for x, y in points]
    sse = sum(e * e for e in residuals)
    mse = sse / (n - 2)
    largest = max(range(n), key=lambda i: abs(residuals[i]))
    return dict(n=n, sum_x=sum_x, sum_y=sum_y, sum_xy=sum_xy, sum_x2=sum_x2, sum_y2=sum_y2,
                mean_x=mean_x, mean_y=mean_y, sx=sqrt(sxx / (n - 1)), sy=sqrt(syy / (n - 1)),
                numerator=sxy, denominator=sxx, b1=b1, b0=b0,
                r=sxy / sqrt(sxx * syy), r2=1 - sse / syy, sse=sse, sst=syy, ssr=syy - sse,
                mse=mse, se=sqrt(mse), se_b1=sqrt(mse / sxx), se_b0=sqrt(mse * (1 / n + mean_x ** 2 / sxx)),
                residuals=residuals, largest=largest,
                min_x=min(x for x, _ in points), max_x=max(x for x, _ in points))


def predict(model, x):
    return model['b0'] + model['b1'] * x


def source_ref(case):
    """Bronverantwoording van een casus als bronregel (bron, pagina, vindplaats)."""
    from course_completion import bookref
    source, printed, locator = CASE_SOURCES[case]
    return dict(source=source, page=bookref(source, printed)['page'], locator=locator)


CASE_SOURCES = {
    'voorraad': ('boek-h8a', 202, 'Casus Handelsvoorraden, H8 p. 202–207; bedrijfsnaam en context aangepast; '
                 'uitkomsten met t = 1,960 volgens het onderwijsprogramma'),
    'productie': ('boek-h9a', 234, 'Casus Productiviteit, H9 p. 234–247, tabel 9.1, 9.4 en 9.5; '
                  'bedrijfsnaam en context aangepast'),
}
