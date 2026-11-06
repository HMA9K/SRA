"""Koppelt iedere rekenstap in een uitwerking aan zijn formule op het formuleblad.

De formules en nummers komen uit de lessen: dezelfde opmaak, dezelfde verwijzing.
Alleen wat geen les toont, staat hier in EXTRA. Eén formule verschijnt één keer per
vraag, bij de eerste stap die haar gebruikt. Staat de formule al in letters in de stap,
dan volstaat de verwijzing.
"""
import json
import re
from html import escape
from pathlib import Path

from formula_numbers import derived, number
from presentation import formula, mathml

ROOT = Path(__file__).resolve().parents[1]
ROW = re.compile(r'<div class="formula-row"[^>]*>.*?</math>', re.S)
LABEL = re.compile(r'formula-label">(.*?)<span class="formula-number"[^>]*>(.*?)</span>', re.S)
MATH = re.compile(r'<math.*</math>', re.S)

# Sleutel, label, herkomst en formule in lineaire notatie.
EXTRA = {
    'omvang-mpu-gamma': ('Tussenstap', number(5), 'γ = E²/{t² × N × s_w²}'),
    'omvang-mpu-n': ('Benodigde omvang', number(5), 'n = N/{1 + γ}'),
    'omvang-verschil-gamma': ('Tussenstap', number(11), 'γ = E²/{t² × N × s_e²}'),
    'omvang-verschil-n': ('Benodigde omvang', number(11), 'n = N/{1 + γ}'),
    'omvang-regressie-gamma': ('Tussenstap', number(24), 'γ = E²/{t² × N × s_w² × (1 − R_bw²)}'),
    'omvang-regressie-n': ('Benodigde omvang', number(24), 'n = N/{1 + γ}'),
    'omvang-quotient-gamma': ('Tussenstap', derived(5), 'γ = E²/{t² × N × s_q²}'),
    'omvang-quotient-n': ('Benodigde omvang', derived(5), 'n = N/{1 + γ}'),
    'quotient|Interval': ('Interval', number(15), 'Ŵ_Q ± t × s_Q'),
    'regressieschatter|Interval': ('Interval', number(20), 'Ŵ_R ± t × s_R'),
    'variantie-ms': ('Variantie of Mean Square', number(35), 'MS = SS/df'),
    'se-uit-marge': ('Standaardfout uit de marge', derived(27), 's = E/t'),
    't-en-f': ('Verband tussen t en F bij k = 1', derived(40, 42), 't² = F'),
    'interval-gemiddelde': ('Interval voor het gemiddelde', derived(50), 'ŷ_0 ± t × s_e × √{1/n + (x_0 − x̄)²/{(n − 1) × s_x²}}'),
    'z-residu': ('Gestandaardiseerd residu', derived(44), 'z = e/s_e'),
    'strata-puntschatting': ('Puntschatting', number(28), 'Ŵ_tot = Σ(N_i × w̄_i)'),
    'se-gemiddelde': ('Standaardfout van het gemiddelde', derived(4), 's/√n'),
    'multicollineariteit': ('Multicollineariteit', number(60), 'VIF_i > 10'),
    'overfitting': ('Vuistregel overfitting', number(54), 'n ≥ 10 k'),
}
# Regels op het formuleblad die geen rekenformule zijn.
TEXT = {
    'normaliteit': ('Normaliteit', number(46), 'Shapiro-Wilk bij n ≤ 50; Kolmogorov-Smirnov bij n > 50'),
    'durbin-watson': ('Autocorrelatie', 'Formules 47 tot en met 49', 'd ≤ d_L: positief; d_U ≤ d ≤ 4 − d_U: geen; d ≥ 4 − d_L: negatief'),
    'f-grens': ('Kritieke grens', number(43), 'F-tabel met v₁ = k en v₂ = n − k − 1'),
}

ESTIMATORS = ('mpu', 'verschil', 'quotient', 'regressieschatter')
SE = {e: f'{e}|Standaardfout' for e in ESTIMATORS} | {'stratificatie': 'stratificatie|Gecombineerde variantie'}
INTERVAL = {e: f'{e}|Interval' for e in ESTIMATORS} | {'stratificatie': 'stratificatie|Interval', None: 'onzekerheid|Interval'}
POINT = {e: f'{e}|Puntschatting' for e in ESTIMATORS} | {'stratificatie': 'strata-puntschatting'}
SIZE = {'mpu': 'mpu', 'verschil': 'verschil', 'quotient': 'quotient', 'regressieschatter': 'regressie'}

WIDTH = 'onzekerheid|Totale breedte'
EVEN = 'stratificatie|Evenredig'
NEYMAN = 'stratificatie|Neyman'
VARIANCE = 'rekenen|Rekenen met totalen'
ROOT_S = 'rekenen|Standaardafwijking'
MEAN = 'beginnen|Gemiddelde in de steekproef'
LINE = 'regressielijn|Geschatte lijn'
MULTI = 'meervoudig|Geschatte vergelijking'
PREDICT = 'voorspellen|Individueel voorspellingsinterval'
POINT_PREDICT = 'voorspellen|Puntvoorspelling'
R2 = 'anova|Verklaarde variatie'
ADJ = 'meervoudig|Gecorrigeerde verklaarde variatie'
MSR = 'anova|Gemiddelde verklaarde kwadratensom'
MSE = 'anova|Gemiddelde residuele kwadratensom'
SSE = 'anova|Verdeling van kwadratensommen'
S_E = 'anova|Standaardfout'
F = 'toetsen|Globale F-toets'
DF = 'toetsen|Vrijheidsgraden'
T = 'toetsen|Bij H₀: βⱼ = 0'
MD = 'diagnostiek|Grens voor MD'
CD = 'diagnostiek|Grens voor CD'
Z2 = 'diagnostiek|Y-signaal bij n ≤ 100'
Z3 = 'diagnostiek|Y-signaal bij n > 100'
VIF = 'modelbouw|Variance Inflation Factor'
MSPR = 'validatie|Voorspelfout op de testset'
RESIDUAL = 'regressielijn|Residu'
LOG = 'transformaties|Logaritmisch model'
EXP_LINE = 'transformaties|Lineaire vorm|55'
EXP_BACK = 'transformaties|Terug naar y'
POWER_LINE = 'transformaties|Lineaire vorm|57'
POWER_BACK = 'transformaties|Machtsfunctie'

# Allocatie en stratumtotalen lijken in de tekst op elkaar; de vraag bepaalt de formule.
EVEN_QUESTIONS = {'exam-20200323-vraag-10', 'exam-20230315-vraag-4', 'exam-20240318-vraag-5', 'exam-20241028-vraag-4',
                  'exam-20250317-vraag-4-a', 'exam-20251028-vraag-5', 'stratificatie-1', 'mc-stratificatie-basis-1'}
NEYMAN_QUESTIONS = {'exam-20231030-vraag-6', 'exam-20260323-vraag-5', 'mc-stratificatie-leertoepassing-neyman-allocatie'}
TOTAL_QUESTIONS = {'exam-20231030-vraag-7-a', 'exam-20240318-vraag-6', 'exam-20241028-vraag-5', 'exam-20250317-vraag-5',
                   'exam-20251028-vraag-7', 'exam-20260323-vraag-7', 'exam-20221031-vraag-5'}

# Stappen die geen regel vangt, of die een regel juist niet mag vangen. Leeg betekent geen formule.
STEPS = {
    'mc-beginnen-toepassing-1': {1: ['beginnen|Puntschatting']},
    'mc-beginnen-leertoepassing-controlebestand': {1: [MEAN], 2: ['beginnen|Puntschatting']},
    'mc-beginnen-toepassing-3': {0: ['onzekerheid|Marge']},
    'rekenen-1': {1: [VARIANCE]},
    'mc-rekenen-basis-1': {1: [VARIANCE]},
    'mc-mpu-toepassing-1': {0: ['se-gemiddelde'], 1: ['mpu|Standaardfout']},
    'onzekerheid-2': {1: [WIDTH]},
    'mc-onzekerheid-basis-2': {1: [WIDTH]},
    'exam-20211101-vraag-6': {0: ['verschil|Puntschatting'], 3: ['strata-puntschatting']},
    'exam-20220316-vraag-8': {1: [SE['stratificatie']], 4: [SE['stratificatie']], 5: [INTERVAL['stratificatie']]},
    'exam-20230315-vraag-3': {},
    'exam-20221031-vraag-7': {1: [EVEN]},
    'exam-20260323-vraag-6': {0: [NEYMAN]},
    'exam-20251028-vraag-6': {0: [EVEN], 1: [NEYMAN]},
    'exam-20231030-vraag-1': {0: ['mpu|Standaardfout']},
    'exam-20231030-vraag-3': {3: ['mpu|Standaardfout']},
    'exam-20241028-vraag-3': {0: ['mpu|Standaardfout'], 1: ['regressieschatter|Vergelijk met MPU'], 2: ['mpu|Interval']},
    'exam-20251028-vraag-3': {0: ['mpu|Puntschatting'], 1: ['verschil|Puntschatting'], 2: ['mpu|Standaardfout', 'verschil|Standaardfout']},
    'exam-20240318-vraag-2': {0: ['mpu|Puntschatting'], 1: ['quotient|Puntschatting']},
    'exam-20220316-vraag-6': {},
    'exam-20200323-vraag-5': {},
    'exam-20200323-vraag-2': {1: ['verschil|Gemiddeld verschil']},
    'exam-20200323-vraag-3': {0: ['verschil|Variantie verschillen'], 1: ['verschil|Variantie verschillen']},
    'exam-20200323-vraag-6': {0: ['quotient|Goedratio'], 2: ['quotient|Puntschatting']},
    'exam-20221031-vraag-3': {},
    'exam-20250317-vraag-3': {0: ['verschil|Gemiddeld verschil']},
    'mc-stratificatie-toepassing-1': {0: [NEYMAN]},
    'mc-stratificatie-aanvulling-wortel': {},
    'mc-stratificatie-aanvulling-varianties': {0: ['stratificatie|Interval'], 2: [SE['stratificatie']]},
    'mc-stratificatie-leertoepassing-stratum-uitwerken': {1: ['mpu|Puntschatting', VARIANCE], 2: [SE['stratificatie']]},
    'mc-stratificatie-leertoepassing-onzekerheid-combineren': {0: ['strata-puntschatting'], 1: [SE['stratificatie']], 2: ['stratificatie|Interval']},
    'exam-20231030-vraag-7-b': {4: ['stratificatie|Interval']},
    'exam-20220316-vraag-23-a': {0: [MULTI]},
    'exam-20220316-vraag-23-b': {3: [MULTI]},
    'exam-20251028-vraag-17': {1: [MULTI], 3: [RESIDUAL]},
    'exam-20221031-vraag-13-a': {0: [MULTI]},
    'exam-20250317-vraag-20': {1: [MULTI]},
    'exam-20250317-vraag-19': {},
    'exam-20220316-vraag-21': {},
    'mc-meervoudig-toepassing-1': {1: [MULTI]},
    'mc-meervoudig-toepassing-2': {0: [MULTI]},
    'mc-meervoudig-basis-1': {},
    'mc-meervoudig-leertoepassing-dummy-contrast': {},
    'exam-20200323-vraag-16': {0: [R2], 2: [ADJ]},
    'exam-20211101-vraag-9': {0: ['variantie-ms']},
    'exam-20221031-vraag-10-d': {2: [ADJ]},
    'exam-20241028-vraag-9': {1: [R2], 3: [SSE]},
    'exam-20241028-vraag-10': {0: [DF], 4: ['f-grens']},
    'exam-20221031-vraag-15': {0: [MSR], 1: [SSE], 2: [DF, MSE], 3: [R2], 4: [F], 5: [T]},
    'exam-20240318-vraag-12': {0: [SSE], 1: [DF], 2: [MSE], 3: [MSR], 4: [F]},
    'exam-20200323-vraag-18': {0: [MSR], 1: [MSE], 2: [F]},
    'mc-anova-leertoepassing-volledige-tabel': {1: [MSR, MSE, F], 2: [R2]},
    'mc-anova-leertoepassing-f-grens-bundel': {1: [F, 'f-grens']},
    'mc-toetsen-aanvulling-hellingse': {0: [DF], 2: ['toetsen|Standaardfout van de helling']},
    'mc-toetsen-aanvulling-correlatie': {0: [DF], 2: ['toetsen|Correlatie toetsen']},
    'mc-toetsen-aanvulling-interval': {0: ['toetsen|Interval voor de populatiehelling']},
    'mc-toetsen-toepassing-1': {0: [T]},
    'mc-toetsen-leertoepassing-p-en-t-route': {0: [DF], 1: [T]},
    'mc-toetsen-leertoepassing-niet-nul-hypothese': {1: ['toetsen|Toetsingsgrootheid', DF]},
    'mc-diagnostiek-aanvulling-autocorrectie': {},
    'mc-diagnostiek-aanvulling-dw': {},
    'mc-diagnostiek-leertoepassing-residual-statistics': {0: [Z2], 1: [MD, CD]},
    'mc-diagnostiek-leertoepassing-minimum-residu': {1: [Z2]},
    'mc-voorspellen-leertoepassing-gemiddelde-individu': {2: [PREDICT]},
    'mc-voorspellen-toepassing-2': {0: [PREDICT]},
    'exam-20241028-vraag-13': {0: [POINT_PREDICT], 3: [PREDICT]},
    'exam-20251028-vraag-21': {0: [LOG]},
    'exam-20260323-vraag-14': {1: [LOG]},
    'exam-20240318-vraag-14-b': {0: [LOG]},
    'exam-20220316-vraag-13': {3: [LOG]},
    'exam-20250317-vraag-12': {1: [POWER_LINE]},
    'mc-transformaties-basis-1': {0: [POWER_BACK], 1: [POWER_LINE]},
    'transformaties-1': {0: [POWER_BACK], 1: [POWER_LINE]},
    'mc-transformaties-basis-2': {0: [EXP_LINE], 2: [EXP_BACK]},
    'transformaties-2': {0: [EXP_LINE], 2: [EXP_BACK]},
    'mc-transformaties-basis-3': {1: [EXP_BACK]},
    'transformaties-3': {1: [EXP_BACK]},
    'mc-transformaties-toepassing-1': {1: [LOG]},
    'mc-transformaties-toepassing-2': {0: [EXP_LINE], 1: [EXP_BACK]},
    'mc-transformaties-toepassing-3': {0: [POWER_BACK]},
    'mc-transformaties-aanvulling-meervoudig': {2: ['transformaties|Terug naar de oorspronkelijke schaal']},
    'mc-transformaties-leertoepassing-terugtransformeren-tabel': {1: [EXP_LINE], 2: [EXP_BACK]},
    'mc-transformaties-leertoepassing-modelvorm-verdubbeling': {1: [LOG], 2: [POWER_BACK]},
    'exam-20211101-vraag-10': {1: ['overfitting']},
    'mc-modelbouw-toepassing-2': {0: ['modelbouw|Eén extra variabele']},
    'mc-modelbouw-leertoepassing-extra-variabele': {1: ['modelbouw|Eén extra variabele']},
    'mc-validatie-leertoepassing-uitvoer-kruiscontrole': {0: [DF], 1: [MULTI], 2: [S_E]},
    'exam-20230315-vraag-14': {0: [MSE], 1: [S_E]},
    'mc-regressielijn-aanvulling-mse': {0: [DF], 2: ['regressielijn|Residuele variantie']},
    'exam-20211101-vraag-12': {0: [LINE], 1: ['regressielijn|Constante']},
}


# Controle per stap: wat alleen afleest of concludeert krijgt geen formule, ook niet door een woordmatch.
NONE = {
    'exam-20211101-vraag-15': (0, 1), 'exam-20211101-vraag-16': (0, 1), 'exam-20230315-vraag-17-a': (0, 1),
    'exam-20240318-vraag-23': (1, 2), 'exam-20251028-vraag-20': (0, 1), 'exam-20260323-vraag-18': (0, 1, 2),
    'exam-20221031-vraag-10-d': (2, 3), 'exam-20220316-vraag-3': (3,), 'exam-20250317-vraag-22': (2,),
    'exam-20260323-vraag-15-y': (2,), 'exam-20260323-vraag-15-cook': (2,), 'exam-20260323-vraag-16-normaal': (3,),
    'exam-20260323-vraag-16-homo': (2,), 'exam-20260323-vraag-17-b': (1,), 'exam-20221031-vraag-16': (1,),
    'exam-20251028-vraag-22': (2,), 'exam-20230315-vraag-2': (0,), 'exam-20241028-vraag-12-normaliteit': (2,),
    'exam-20231030-vraag-22': (4,), 'exam-20250317-vraag-24': (4,), 'diagnostiek-3': (0,), 'mc-diagnostiek-basis-3': (0,),
    'mc-anova-toepassing-3': (2,), 'mc-validatie-toepassing-2': (0,), 'meervoudig-2': (1,), 'mc-meervoudig-basis-2': (1,),
    'exam-20230315-vraag-17-b': (1,), 'exam-20231030-vraag-19': (0,), 'exam-20241028-vraag-18': (2,),
    'exam-20221031-vraag-14': (0,), 'mc-voorspellen-leertoepassing-gemiddelde-individu': (1,), 'exam-20241028-vraag-13': (5,),
    'exam-20221031-vraag-15': (5,), 'exam-20211101-vraag-9': (2,),
}
for question_id, indexes in NONE.items():
    STEPS.setdefault(question_id, {}).update({index: [] for index in indexes})
STEPS.setdefault('exam-20230315-vraag-17-b', {})[2] = ['multicollineariteit']
STEPS.setdefault('exam-20231030-vraag-19', {})[1] = ['multicollineariteit']
STEPS.setdefault('exam-20241028-vraag-18', {})[3] = ['multicollineariteit']
STEPS.setdefault('exam-20260323-vraag-20', {})[2] = ['multicollineariteit']
STEPS.setdefault('exam-20231030-vraag-3', {})[3] = ['verschil|Standaardfout']
STEPS.setdefault('anova-2', {})[2] = [DF]
STEPS.setdefault('mc-anova-basis-2', {})[2] = [DF]
STEPS.setdefault('mc-anova-toepassing-2', {})[1] = [DF, MSE]
STEPS.setdefault('exam-20240318-vraag-14-b', {})[3] = [LOG]
STEPS.setdefault('exam-20260323-vraag-14', {})[3] = [LOG]
STEPS.setdefault('mc-rekenen-toepassing-1', {})[3] = ['rekenen|Variantie']
STEPS.setdefault('mc-mpu-leertoepassing-controleoverzicht', {})[0] = [MEAN, VARIANCE]
# Afgeleide formules: de verwijzing noemt de formule op het blad waaruit ze volgen.
STEPS['exam-20220316-vraag-8'][1] = ['se-uit-marge', SE['stratificatie']]
STEPS['mc-stratificatie-aanvulling-varianties'][0] = ['se-uit-marge']
STEPS['exam-20221031-vraag-15'][5] = ['t-en-f']
STEPS.setdefault('exam-20200323-vraag-18', {})[3] = ['t-en-f']
STEPS.setdefault('exam-20241028-vraag-10', {})[6] = ['t-en-f']
STEPS['exam-20241028-vraag-13'][4] = ['interval-gemiddelde']
STEPS['mc-voorspellen-leertoepassing-gemiddelde-individu'][1] = ['interval-gemiddelde']
STEPS.setdefault('exam-20200323-vraag-14-y', {})[3] = ['z-residu']
STEPS.setdefault('exam-20240318-vraag-17-y', {})[3] = ['z-residu']
STEPS['exam-20241028-vraag-3'][2] = ['mpu|Interval', 'regressieschatter|Interval']
STEPS['exam-20260323-vraag-6'][0] = [NEYMAN, EVEN]


def estimator(question):
    for topic in question['topics']:
        if topic in ESTIMATORS:
            return topic
    return 'stratificatie' if 'stratificatie' in question['topics'] else None


def size_keys(question, part):
    """De spreiding in de uitwerking bepaalt welke omvangsformule geldt."""
    steps = ' '.join(question['steps'])
    if 's_q' in steps:
        return f'omvang-quotient-{part}'
    if 's_e' in steps:
        return f'omvang-verschil-{part}'
    if estimator(question):
        return f'omvang-{SIZE[estimator(question)]}-{part}'
    if question['id'].startswith('exam-'):
        return f'omvang-mpu-{part}'
    return 'steekproefomvang|' + ('Tussenstap' if part == 'gamma' else 'Benodigde omvang')


def sampling(question, text):
    """Schatters: de vraag bepaalt de schatter, de stap bepaalt het onderdeel."""
    method, id = estimator(question), question['id']
    strata = 'stratificatie' in question['topics']
    if id in EVEN_QUESTIONS:
        return [EVEN] if re.match(r'Stratum|n₁', text) else []
    if id in NEYMAN_QUESTIONS:
        return [NEYMAN] if re.match(r'Stratum|Producten|Noemer|Bereken per|Tabel|Totaal:|Het totaal', text) else []
    if id in TOTAL_QUESTIONS:
        return ['strata-puntschatting'] if re.match(r'Stratum|Totaal|Som|Met topstratum|Hele populatie', text) else []
    if strata and re.match(r'Stratum\b.*√|Standaardfout per stratum|Formule per stratum|Standaardfout: √|Samen:|Kwadraten|Totaal: s|Totale|Variantie: \d'
                           r'|Tel de vier|Standaardafwijking van het totaal|Gecombineerde|Kwadrateer de|Neem daarna', text):
        return [SE['stratificatie']]
    if re.match(r'Gemiddelde( per post| werkelijke)?:|Bereken de werkelijke waarde', text):
        return [MEAN]
    if re.match(r'Gemiddelden:', text):
        return [MEAN]
    if re.search(r'^(Goedratio|Verhouding): q|q = Σw|^q = |Gebruik q', text):
        return ['quotient|Goedratio']
    if re.search(r'^Spreiding: s_q', text):
        return ['quotient|Resterende spreiding']
    if re.search(r'^(Helling: b₁|b₁ = R_bw|Bereken b₁|0,8 × 30/20)', text):
        return ['regressieschatter|Helling']
    if re.search(r'^(Som van de verschillen|Verschil in de steekproef|Definieer e|Vul boekwaarde)|^In dit onderdeel is de controlefout|e = b − w\.$', text):
        return ['verschil|Verschil per post']
    if re.search(r'^(Gemiddeld verschil|Het gemiddelde verschil|Deel door n = 100)', text):
        return ['verschil|Gemiddeld verschil']
    if method == 'verschil' and re.search(r'^(Spreiding|Variantie|Standaardafwijking)\b|s_e² =', text):
        return ['verschil|Variantie verschillen']
    if re.search(r'^(Variantie|Standaardafwijking|Spreiding): s²?_?w?²? ?=|^Gemiddelde: 8\.000', text):
        return [VARIANCE]
    if re.search(r'Eindigheidscorrectie|^Standaardfout van het totaal|^De eindigheidscorrectie', text) and method:
        return [SE[method]]
    if re.search(r'^(SE|Standaardfout|S_R|sr|s_[A-Za-z]+ =)|^Ŵ = .*SE =|Voor de standaardfout|SE_R|^s_V|^s_MPU', text) and method:
        if 'SE_R' in text or '× √(1 − ' in text and method == 'regressieschatter' and 'N' not in text and '/ √' not in text:
            return ['regressieschatter|Vergelijk met MPU']
        return [SE[method]]
    if re.search(r'^(Correctiefactor|Volgens de behandelde formule|De factor √\(1 − R²\)|Bij R = 0,8|Neem de wortel: √0,36|10\.000 × 0,8)', text):
        return ['regressieschatter|Vergelijk met MPU']
    if re.search(r'^(Hulpgrootheid|Hulpgetal|Noemer: 1,974|γ = )|γ = ', text):
        return [size_keys(question, 'gamma')]
    if re.search(r'^(Steekproefomvang|Omvang)\b|^n ≥ |^n = .*(1 \+|/1,4)', text):
        return [size_keys(question, 'n')]
    if re.search(r'^(Puntschatting|Schatting van het totaal|Geschatte werkelijke waarde|Startwaarde|Correctie|Correctieterm|MPU geeft)\b|^Ŵ|^Projecteer|^Schat het totaal'
                 r'|^Het totaal is|^Invullen geeft 2\.000|^Vermenigvuldig het gemiddelde|^B − Nb̄|^De regressieschatter is|^Als B = Nb̄|^De volledige correctie'
                 r'|^B − Nē|^De totale geschatte fout|^Nē|^Geschat totaal verschil|^Totale fout|^Daarna trekt hij|^Het bekende B', text) and method:
        return [POINT[method]]
    if re.search(r'E = [\d.]+ ?/ ?2|^De totale breedte is 2E', text):
        return [WIDTH]
    if re.search(r't-waarde|^Zoek in tabel|^Lees t =', text):
        return [INTERVAL[method]]
    if re.search(r'^(Foutmarge|Marge|Grenzen|Ondergrens|Bovengrens|Interval)\b|^\d[\d.,]* ± ', text):
        margin_with_se = '√' in text and method and method != 'stratificatie'
        return ([SE[method]] if margin_with_se else []) + [INTERVAL[method] if method else 'onzekerheid|Marge']
    return []


def regression(question, text):
    id = question['id']
    if re.search(r'Shapiro-Wilk|Kolmogorov-Smirnov', text):
        return ['normaliteit']
    if re.search(r'd_L|d_U|Durbin', text):
        return ['durbin-watson']
    if re.search(r'^(Uitbijters in x: grens|Grens.*MDkr|Grens: MD|Afbeelding 5, kritieke grens|Grens uit (a|A)fbeelding|Grens: \d|Kritieke waarde: \d)|MD_kritiek', text) or re.search(r'^Uitbijters in x', text):
        return [CD if re.search(r'invloed|cook|vraag-15$|vraag-14$', id) and 'x' not in id.split('-')[-1] else MD]
    if re.search(r'^(Invloedrijke punten: grens|Grens, Afbeelding 6: CDkr)|CD_kritiek', text):
        return [CD]
    if re.search(r'^Grens, Afbeelding 6: MDkr', text):
        return [MD]
    if re.search(r'(z|zkritiek|zkr|grens is|grenzen zijn( z =)?|grenzen)\s*=?\s*± ?3|grenzen zijn ±3', text):
        return [Z3]
    if re.search(r'(z|zkritiek|zkr|grens is)\s*=?\s*± ?2', text):
        return [Z2]
    if re.search(r'^(Residu\b|Een regressieresidu|Vul de waarden in: e|e = y|Voor elke waarneming geldt: residu)|e = y − ŷ', text):
        return [RESIDUAL]
    if re.search(r'^(Voorspelling|Puntschatting).*ŷ₀|^Voorspelling, Afbeelding|^Uit vraag 11a: ŷ₀', text):
        return [POINT_PREDICT]
    if 'voorspellen' in question['topics'] and re.search(r'^(t-waarde|Afstandsterm|Onder de wortel|Wortel|Wortelterm|Laatste term|Foutmarge|Marge|Grenzen|Bovengrens|Interval)\b|^De marge|^√\(1 \+', text):
        return [PREDICT]
    if re.search(r'^(Standaardfout van de regressie|Standaardfout: s_e|Spreiding: s_e)|s_e = √MSE|√MSE', text):
        return [S_E]
    if re.search(r'^(Vergelijking|Invullen|Uitkomst|Rekenkundig|Optellen|Som|Leeftijd|Beoordeling)\b|^De (lijn|regressielijn) ŷ|^Voorspelling: 5|^Tel de constante|^Vul x|^Afbeelding \d+, (L|l)inear: ŷ|^Afbeelding \d+: 1,92|^Lees de vergelijking', text) \
            and not re.search(r'Sig\.|R² =|, Sig', text):
        return [MULTI if 'meervoudig' in question['topics'] else LINE]
    if re.search(r'^Afbeelding \d+, model \d: (ŷ|prijs)|^Afbeelding \d+, Model \d: ŷ', text):
        return [MULTI]
    if re.search(r'adjusted R²|Adjusted R²|R²_adj', text):
        return [ADJ]
    if re.search(r'^(R²|Route|Verklaarde spreiding|Kwadrateer: 0,971|c\. R²)|R² = SSR|^Afbeelding \d+: R² =|R² = \(|R² = 0,\d+ ×|R² = 0,124|\)² = 0,\d|Controle met afbeelding 8: 0,984²', text):
        return [R2]
    if re.search(r'^(SSE|b\. SSE) =', text):
        return [SSE]
    if re.search(r'^MSR =', text):
        return [MSR]
    if re.search(r'^(c\. )?F = ', text):
        return [F]
    if re.search(r'(?<!-)MSE = \d|Residual df', text):
        return [DF, MSE] if 'df' in text else [MSE]
    if re.search(r'^Vrijheidsgraden|^Invullen geeft 50|^Er zijn vier verklarende variabelen|^Het model heeft één|df = n − 2|^Kritieke grens', text):
        return [DF]
    if re.search(r'^(Toetsingsgrootheid|t = )', text):
        return [T]
    if re.search(r'^F-tabel|^Lees F_', text):
        return ['f-grens']
    if re.search(r'VIF', text):
        return [VIF] if re.search(r'= 1/|1 / 0,|Bereken VIF', text) else ['multicollineariteit'] if re.search(r'VIF ?(max)? ?= ', text) else []
    if re.search(r'MSPR|^Kwadrateer beide fouten', text):
        return [MSPR]
    return []


def keys_for(question, index, text):
    fixed = STEPS.get(question['id'])
    if fixed is not None and (index in fixed or not fixed):
        return fixed.get(index, [])
    if 'voorspellen' not in question['topics'] and (estimator(question) or 'onzekerheid' in question['topics'] or 'steekproefomvang' in question['topics']):
        found = sampling(question, text)
        if found or estimator(question):
            return found
    if question['topics'][0] == 'rekenen':
        return rekenen(text)
    return regression(question, text)


def rekenen(text):
    if re.search(r'^Gemiddelde:', text):
        return [MEAN]
    if re.search(r'^(De standaardfout van het gemiddelde|Delen door √n)', text):
        return ['se-gemiddelde']
    if re.search(r'^(s²? = \[|Delen door n − 1)', text):
        return [VARIANCE]
    if re.search(r'^(s = √|De standaardafwijking is de wortel|s² = 4)', text):
        return [ROOT_S]
    return []


def spelled_out(text):
    """De stap noemt de formule al in letters: alleen de verwijzing is dan nodig."""
    parts = re.split(r'[=≥]', text)
    return len(parts) > 1 and not re.search(r'[0-9]', parts[1]) and bool(re.search(r'[A-Za-zΣγ√]', parts[1]))


def lesson_formulas(lessons):
    catalog = {}
    for lesson in lessons:
        blocks = [section['html'] for section in lesson['sections']] + [guide['html'] for guide in lesson.get('formulaGuide', [])]
        for row in ROW.findall(''.join(blocks)):
            found = LABEL.search(row)
            if not found:
                continue
            label = found[1].replace('&gt;', '>').replace('&lt;', '<')
            key = f"{lesson['id']}|{label}"
            entry = dict(label=found[1], source=found[2], html=MATH.search(row)[0])
            if key in catalog and catalog[key]['source'] != found[2]:
                key += '|' + re.search(r'\d+', found[2])[0]
            elif label == 'Lineaire vorm':
                key += '|' + re.search(r'\d+', found[2])[0]
            catalog.setdefault(key, entry)
    return catalog


def extra_formulas():
    catalog = {key: dict(label=escape(label), source=source, html=mathml(formula(text))) for key, (label, source, text) in EXTRA.items()}
    catalog |= {key: dict(label=escape(label), source=source, html=f'<span class="step-formula-text">{escape(text)}</span>') for key, (label, source, text) in TEXT.items()}
    return catalog


def question_steps(question):
    """Per stap de sleutels; het teken = betekent alleen de verwijzing tonen."""
    shown, result = set(), []
    for index, text in enumerate(question['steps']):
        keys = [key for key in keys_for(question, index, text) if key not in shown]
        shown.update(keys)
        result.append(['=' + key if spelled_out(text) and len(keys) == 1 else key for key in keys])
    return result


def read_data(name, prefix):
    text = (ROOT / name).read_text(encoding='utf-8')
    return json.JSONDecoder().raw_decode(text, text.index(prefix) + len(prefix))[0]


def all_questions():
    lessons = read_data('data/course.js', 'window.SRA = ')['lessons']
    topics = read_data('data/mc.js', 'window.SRAMCData = ')['topics']
    practice = read_data('data/exam-practice.js', 'window.SRAExamPractice = ')['questions']
    questions = {q['id']: dict(q, topics=[lesson['id']]) for lesson in lessons for q in lesson['questions']}
    questions |= {q['id']: dict(q, topics=[topic['id']]) for topic in topics for q in topic['questions']}
    questions |= {q['id']: q for q in practice}
    return lessons, list(questions.values())


def payload():
    lessons, questions = all_questions()
    catalog = lesson_formulas(lessons) | extra_formulas()
    mapped = {q['id']: question_steps(q) for q in q_with_steps(questions)}
    mapped = {id: steps for id, steps in mapped.items() if any(steps)}
    exams = {}
    for q in questions:
        if q.get('sourceExamId') and q['id'] in mapped:
            keys = exams.setdefault(f"{q['sourceExamId']}|{q['sourceQuestionId']}", [])
            keys += [key.lstrip('=') for step in mapped[q['id']] for key in step if key.lstrip('=') not in keys]
    # Het tentamen van juni 2020 is gelijk aan dat van maart; zie build_exam_practice.
    exams |= {key.replace('20200323|', '20200626|'): value for key, value in exams.items() if key.startswith('20200323|')}
    used = {key.lstrip('=') for steps in mapped.values() for keys in steps for key in keys}
    missing = used - catalog.keys()
    if missing:
        raise ValueError('Formule niet gevonden: ' + ', '.join(sorted(missing)))
    return dict(formulas={key: catalog[key] for key in sorted(used)}, questions=mapped, exams=exams)


def q_with_steps(questions):
    return [q for q in questions if q.get('steps')]


def formula_html(entry, with_formula=True):
    """Dezelfde opmaak als een formuleregel in de les."""
    label = f'<span class="formula-label">{entry["label"]}<span class="formula-number">{entry["source"]}</span></span>'
    body = f'<div class="math-scroll" tabindex="0" role="region" aria-label="Formule: {entry["label"]}">{entry["html"]}</div>' if with_formula else ''
    return f'<div class="step-formula" data-no-terms>{label}{body}</div>'


def step_html(data, question_id, index):
    keys = data['questions'].get(question_id, [])
    keys = keys[index] if index < len(keys) else []
    return ''.join(formula_html(data['formulas'][key.lstrip('=')], not key.startswith('=')) for key in keys)


SCRIPT = '''/* Gegenereerd door scripts/step_formulas.py: formules bij rekenstappen. */
window.SRAStepFormulas = %s;
window.SRAStepFormulas.row = key => {
  const brief = key.startsWith('='), entry = window.SRAStepFormulas.formulas[brief ? key.slice(1) : key];
  return `<div class="step-formula" data-no-terms><span class="formula-label">${entry.label}<span class="formula-number">${entry.source}</span></span>${brief ? '' : `<div class="math-scroll" tabindex="0" role="region" aria-label="Formule: ${entry.label}">${entry.html}</div>`}</div>`;
};
window.SRAStepFormulas.html = (id, index) => (window.SRAStepFormulas.questions[id]?.[index] || []).map(window.SRAStepFormulas.row).join('');
window.SRAStepFormulas.exam = (examId, questionId) => {
  const keys = window.SRAStepFormulas.exams[`${examId}|${questionId}`];
  return keys ? `<section class="step-formula-list"><h3>Formules bij deze vraag</h3>${keys.map(window.SRAStepFormulas.row).join('')}</section>` : '';
};
'''


def build():
    data = payload()
    (ROOT / 'data/step-formulas.js').write_text(SCRIPT % json.dumps(data, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')
    print('Formules bij uitwerkingen:', len(data['questions']), 'vragen,', len(data['formulas']), 'formules.')
    return data


if __name__ == '__main__':
    build()
