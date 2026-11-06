"""Handmatig tegen de originele pagina's gecontroleerde formules voor de tekstversie van tentamens.

De pdf-extractie knipt formules met een wortel in losse regels en beschadigt sommige tekens.
De originele pagina-afbeelding blijft leidend; dit herstelt alleen de tekst eronder.
Sleutel: tentamen, tekstveld, paginanummer. Waarde: eerste regel, laatste regel (vanaf 0) en nieuwe regels.
Een optioneel vierde element is de verwachte beginregel, voor regels zonder bijzondere tekens.
Bestaande schrijffouten in het origineel, zoals 81.7 en n₁, blijven staan.
"""

STRATUM_ROOT = '√((N_i − n_i)/(N_i − 1))'
FPC = '√((N − n)/(N − 1))'
PREDICTION_2020 = '1,693 + 1,729 × 0,49095 × √(1 + 1/21 + (5 − 5,6871)²/(20 × 1,25505²)) ='

REPAIRS = {
    ('20200323', 'answerText', 6): [
        (31, 31, ['se = 0,49095 (Afbeelding 6a)  of se = √MSE = √0,241 = 0,491 (zie vraag 7)         2 punten']),
        (33, 35, [PREDICTION_2020]),
    ],
    ('20200626', 'answerText', 6): [
        (30, 30, ['se = 0,49095 (Afbeelding 6a)  of se = √MSE = √0,241 = 0,491 (zie vraag 7)  2 punten']),
        (32, 34, [PREDICTION_2020]),
    ],
    ('20211101', 'answerText', 1): [
        (9, 13, ['s_w = √((Σw² − (Σw)²/n)/(n − 1)) = √((85.570.675 − 84.200²/100)/99) = 385']),
        (18, 21, ['1.271.420 ± 1,985 ∗ 1510 ∗ 385/√100 ∗ √((1510 − 100)/(1510 − 1)) = 1.271.420 ± 111.548,3432']),
    ],
    ('20211101', 'answerText', 3): [
        (10, 13, [f'Stratum Ni ni s_e N ∗ s_e/√n ∗ {FPC}']),
        (19, 19, ['s_tot = √(28.475² + 41.587² + 101.852²) = √12.914.134.100 = 113.640']),
    ],
    ('20220316', 'pageText', 4): [
        (12, 15, [f'van de formule: N ∗ x̄ + t ∗ N ∗ s/√n ∗ {FPC}']),
        (16, 19, ['Stratum 1: 790 ∗ 88 + 1,703 ∗ 790 ∗ 26/√28 ∗ √((790 − 28)/(790 − 1)) = 69.520 + 6.496 = 76.016']),
        (20, 23, ['Stratum 2: 1010 ∗ 77 + 1,725 ∗ 1010 ∗ 25/√21 ∗ √((1010 − 21)/(1010 − 1)) = 77.770 + 9.410 = 87.180']),
        (24, 27, ['Stratum 3: 980 ∗ 140 + 1,663 ∗ 980 ∗ 70/√87 ∗ √((980 − 87)/(980 − 1)) = 137.200 + 11.681 = 148.881']),
    ],
    ('20220316', 'answerText', 2): [
        (18, 22, ['s_e = √((Σe² − (Σe)²/n)/(n − 1)) = √((7.150.220 − 27.990²/160)/159) = 119,06']),
        (23, 28, [f's_V = N ∗ s_e/√n ∗ {FPC} = 3450 ∗ 119,06/√160 ∗ √((3450 − 160)/(3450 − 1)) = 31.715,84843']),
    ],
    ('20221031', 'answerText', 3): [
        (7, 13, [f'Standaarddeviatie stratum N_i ∗ s_i/√n₁ ∗ {STRATUM_ROOT}']),
        (14, 18, ['Voor A wordt dat 1.230 ∗ 6.950/√160 ∗ √((1.230 − 160)/(1.230 − 1)) = 630.588,2']),
        (19, 23, ['Voor B wordt dat 4.470 ∗ 1.250/√60 ∗ √((4.470 − 60)/(4.470 − 1)) = 716.565,7']),
        (24, 24, ['s_tot = √(630.588,2² + 716.565,7²) = 954.520']),
        (26, 27, ['t_0,05[129] ≈ t_0,05[120] = 1,658', 'Schattingsinterval 11.864.850 ± 1,658 ∗ 954.520 = 11.864.850 ± 1.582.594']),
    ],
    ('20230315', 'pageText', 4): [
        (34, 37, [f'Stratum N_i n_i w̄_i s_i N_i/√n_i × {STRATUM_ROOT} × s_i']),
    ],
    ('20230315', 'answerText', 1): [
        (22, 28, [f's_r = N ∗ s_w/√n ∗ {FPC} ∗ √(1 − R²) = 1.935 ∗ 81.7/√190 ∗ √((1.935 − 190)/(1.935 − 1)) ∗ √(1 − 0,942²)',
                  '= 11.469,01776 ∗ 0,3187924962 = 3.656,24']),
    ],
    ('20230315', 'answerText', 4): [
        (14, 14, ['s_e = √MSE = √286,296 = 16,92']),
    ],
    ('20231030', 'answerText', 1): [
        (15, 26, ['t_0,05[df = 129] ≈ t_0,05[df = 120] = 1,658',
                  f'N ∗ x̄ − t ∗ N ∗ s_w/√n ∗ {FPC} = 2.700 ∗ 416 − 1,658 ∗ 2.700 ∗ 210/√130 ∗ √((2.700 − 130)/(2.700 − 1)) =',
                  '1.123.200 − 1,658 ∗ 48.526,22 = 1.042.743,52']),
        (46, 54, [f'Ondergrens B − N ∗ ē − t ∗ N ∗ s_e/√n ∗ {FPC} = 1.233.000 − 2.700 ∗ 24 − 1,658 ∗ 2.700 ∗ 96/√130 ∗ √((2.700 − 130)/(2.700 − 1)) =']),
    ],
    ('20240318', 'answerText', 1): [
        (18, 18, ['s_w = √327.184 = 572']),
        (20, 27, ['Ŵ_MPU = N ∗ w̄ = 4.750 ∗ 9.278 = 44.070.500',
                  f'Ŵ_MPU − t ∗ N ∗ s_w/√n ∗ {FPC} = 44.070.500 − 1,661 ∗ 4.750 ∗ 572/√100 ∗ √((4.750 − 100)/(4.750 − 1))',
                  '= 44.070.500 − 446.564,9802 = 43.623.935']),
        (50, 52, ['s_q = √(s_w² − 2qR_bw s_b s_w + q²s_b²) = √(572² − 2 ∗ 0,9486707566 ∗ 0,87 ∗ 610 ∗ 572 + 0,9486707566² ∗ 610²) = 293,44']),
        (55, 61, [f'q ∗ B − t_∝ ∗ N ∗ s_q/√n ∗ {FPC} = 0,9486707566 ∗ 41.650.370 − 1,661 ∗ 4.750 ∗ 293,44/√100 ∗ √((4.750 − 100)/(4.750 − 1))',
                  '= 39.512.488,02 − 229.090,96 = 39.283.397,06']),
    ],
    ('20240318', 'answerText', 4): [
        (50, 55, ['s_e = √MSE = √879.987 = 938,08        (2)',
                  '12.880 ± 1,960 ∗ 938,08 ∗ √(1 + 1/960 + (61 − 39,47)²/(959 ∗ 14,0²)) =',
                  '12.880 ± 1.838,63 ∗ √(1 + 0,00104 + 0,00247) = 12.880 ± 1.842      (2)']),
    ],
    ('20241028', 'pageText', 2): [
        (15, 19, [f'Stratum N_i n_i Σw_i N_i ∗ s_i/√n_i ∗ {STRATUM_ROOT}']),
    ],
    ('20241028', 'answerText', 1): [
        (19, 27, [f'[Formule 22] S_R = N ∗ s_w/√n ∗ {FPC} ∗ √(1 − R_bw²) =',
                  '2.130 ∗ 82,1/√180 ∗ √((2.130 − 180)/(2.130 − 1)) ∗ √(1 − 0,925²) =']),
    ],
    ('20241028', 'answerText', 3): [
        (2, 9, [f'[Formule 29] s_tot² = Σ(N_i ∗ s_i/√n_i ∗ {STRATUM_ROOT})² =',
                '36.600² + 59.600² + 47.710² + 15.350² = 7.403.586.600 dus s_tot = 86.044,09683']),
    ],
    ('20241028', 'answerText', 5): [
        (33, 35, ['[Formule 50] ŷ₀ ± t_α/2 ∗ s_e ∗ √(1 + 1/n)']),
        (38, 40, ['Afbeelding 3: s_e = 1,25506 of s_e = √MSE = √1,575 = 1,255  (1)',
                  'Invullen: 29,74 ± 2,048 ∗ 1,25506 ∗ √(1 + 1/30) = 29,74 ± 2,61   (2)']),
    ],
    ('20250317', 'answerText', 12): [
        (31, 35, [f'Stratum N_i n_i w̄_i s_i N_i ∗ s_i/√n_i ∗ {STRATUM_ROOT}']),
    ],
    ('20251028', 'answerText', 10): [
        (3, 4, ['[Formule 3] ŵ_MPU = N × w̄']),
        (7, 15, ['[Formule 1] s_w² = (Σw² − (Σw)²/n)/(n − 1) = (10.905.600.000 − 1.112.400²/120)/119 = 4.988.672 (1 punt)']),
        (16, 17, ['s_w = √4.988.672 = 2.233,534 (1 punt)']),
        (18, 26, [f'[Formule 4] s_MPU = N × s_w/√n × {FPC} = 6.200 × 2.233,534/√120 × √((6.200 − 120)/(6.200 − 1)) = 1.251.943 (1 punt)']),
        (28, 29, ['t_α/2 = t_0,025[df = n – 1 = 119] ≈ t_0,01[110] = 1,982 (1 punt)']),
        (34, 36, ['[Formule 11] γ = E²/(t² × N × s_w²) = 2.000.000²/(1,982² × 6.200 × 4.988.672) = 32.92123 (1 punt)']),
        (37, 40, ['n ≥ N/(1 + γ) = 6.200/(1 + 32.92123) = 182.7764 → n ≥ 183 (1 punt)']),
        (45, 46, ['[Formule 9] ŵ_v = B – N × ē']),
        (49, 57, [f'[Formule 10] s_V = N × s_e/√n × {FPC} = 6.200 × 314,80/√120 × √((6.200 − 120)/(6.200 − 1)) = 176.452,1 (1 punt)']),
        (64, 68, ['[Formule 26] Steekproefgrootte stratum i = n_i = N_i/N × n'], '[Formule 26]'),
    ],
    ('20251028', 'answerText', 11): [
        (6, 7, ['1.7) [Formule 28] ŵ_tot = ΣN_i × w̄_i']),
        (13, 22, [f'1.8) [Formule 29] s²_tot = Σ(N_i × s_i/√n_i × {STRATUM_ROOT})²']),
        (23, 25, ['Bijdrage van stratum 1 (binnen de haakjes) = 1.240 × 210/√28 × √((1.240 − 28)/(1.240 − 1)) = 48.671,82']),
        (26, 28, ['Bijdrage van stratum 2 (binnen de haakjes) = 610 × 340/√36 × √((610 − 36)/(610 − 1)) = 33.558,67']),
        (29, 31, ['Bijdrage van stratum 3 (binnen de haakjes) = 455 × 480/√41 × √((455 − 41)/(455 − 1)) = 32.571,14']),
        (32, 34, ['Bijdrage van stratum 4 (binnen de haakjes) = 310 × 295/√31 × √((310 − 31)/(310 − 1)) = 15.607,23']),
        (35, 36, ['s²_tot = 48.671,82² + 33.558,67² + 32.571,14² + 15.607,23² = 4.799.595.378 (3 punten)'], 's2 = 48.671'),
        (37, 38, ['s_tot = √4.799.595.378 = 69.279,11']),
        (41, 42, ['t_α = t_0,1[df = 85] = 1,292 (1 punt)']),
        (47, 48, ['2.2) Leeftijd: H₀: β₁ ≥ 0 versus H₁: β₁ < 0 (2 punten)']),
        (49, 50, ['Hits: H₀: β₁ ≤ 0 versus H₁: β₁ > 0 (2 punten)']),
        (51, 52, ['In beide gevallen: β₁: richtingscoëfficiënt van het populatiemodel (2 punten)']),
        (53, 53, ['2.3) R² = (-0,427)² = 0,1823, oftewel 18,23% (3 punten)'], '2.3) R2'),
        (58, 59, ['[Formule 45] Afbeelding 6: MD_kr = 1,980 + 3 × 3,977 = 13,911 (1 punt)'], '[Formule 45]'),
        (60, 61, ['MD_max = 24,878 > MD_kr, er zijn potentiële uitbijters in x'], 'MD = 24,878'),
    ],
    ('20251028', 'answerText', 12): [
        (2, 3, ['[Formule 44] z_kr = ± 2, bij n ≤ 100']),
        (4, 5, ['Afbeelding 6: z_max = 2,902 > 2 en z_min = -1,981 > -2, potentiële uitbijters in y (1 punt)'], 'Afbeelding 6: z ='),
        (13, 14, ['[Formule 45] Afbeelding 6: CD_kr = 0,009 + 3 × 0,015 = 0,054'], '[Formule 45]'),
        (15, 16, ['CD_max = 0,129 > 0,054 er zijn potentiële invloedrijke punten (1 punt)'], 'CD = 0,129'),
        (24, 25, ['H₀: de residuen zijn normaal verdeeld'], 'H : de residuen'),
        (26, 27, ['H₁: de residuen zijn niet normaal verdeeld (1 punt)'], 'H : de residuen'),
        (31, 32, ['H₀: de residuen zijn homoscedastisch'], 'H : de residuen'),
        (33, 34, ['H₁: de residuen zijn niet homoscedastisch (heteroscedastisch) (1 punt)'], 'H : de residuen'),
    ],
    ('20251028', 'answerText', 13): [
        (5, 6, ['2.14) Kritieke grens: t_0,10[92] ≈ t_0,10[90] = 1,291 (1 punt)']),
        (9, 10, ['• H₀ verwerpen']),
    ],
    ('20260323', 'answerText', 8): [
        (4, 4, ['[Formule 9] ŵ_v = B – N × ē']),
        (7, 10, ['[Formule 7] s_e² = (Σe² − (Σe)²/n)/(n − 1)']),
        (11, 14, ['= (96.000.000 − 50.200²/110)/109 = 670.555,50 (1 punt)']),
        (15, 15, ['s_e = √670.555,50 = 818,8745 (1 punt)']),
        (16, 20, [f'[Formule 10] s_v = N × s_e/√n × {FPC}']),
        (21, 25, ['= 5.750 × 818,8745/√110 × √((5.750 − 110)/(5.750 − 1)) = 444.664,30 (1 punt)']),
        (33, 37, ['[Formule 11] γ = E²/(t² × N × s_e²) = 800.000²/(1,984² × 5.750 × 670.555,50) = 42,16907 (1 punt)']),
        (38, 42, ['n ≥ N/(1 + γ) = 5.750/(1 + 42,16907) = 133,1972 → n ≥ 134 (1 punt)']),
        (50, 50, ['[Formule 21] ŵ_R = N × w̄ + b₁ × (B – N × b̄)']),
        (53, 58, [f'[Formule 22] s_R = N × s_w/√n × {FPC} × √(1 − R_bw²)']),
        (59, 63, ['= 5.750 × 3.000/√110 × √((5.750 − 110)/(5.750 − 1)) = 324.178,2 (1 punt)']),
        (71, 74, ['[Formule 25] Steekproefgrootte stratum i = n_i = (N_i × s_i)/Σ(N_i × s_i) × n']),
    ],
    ('20260323', 'answerText', 9): [
        (10, 10, ['1.7) [Formule 28] ŵ_tot = ΣN_i × w̄_i']),
        (14, 19, [f'1.8) [Formule 29] s²_tot = Σ(N_i × s_i/√n_i × {STRATUM_ROOT})²']),
        (20, 24, ['Bijdrage van stratum 1 (binnen de haakjes) = 1.350 × 225/√32 × √((1.350 − 32)/(1.350 − 1)) = 53.075,37']),
        (25, 29, ['Bijdrage van stratum 2 (binnen de haakjes) = 580 × 360/√38 × √((580 − 38)/(580 − 1)) = 32.771,71']),
        (32, 32, ['s²_tot = 53.075,37² + 32.771,71² = 3.890.979.877 (3 punten)'], 's2tot ='),
        (33, 33, ['s_tot = √3.890.979.877 = 62.377,72']),
        (53, 53, ['2.5) Het logaritmische model met R² = 0,286 geeft het beste resultaat. (3 punten)'], '2.5) Het log'),
    ],
    ('20260323', 'answerText', 10): [
        (5, 5, ['[Formule 44] z = ± 3 (1 punt)'], '[Formule 44]'),
        (33, 33, ['[Formule 36] s_e = √MSE = √12.676.976.764 = 112.592,1 (2 punten)']),
        (36, 40, ['[Formule 50] 679.459,5 ± 1,977 × 112.592,1 × √(1 + 1/142 + (3.500 − 1.943,27)²/((142 − 1) × 804,954²))']),
    ],
}


def apply(exam):
    """Herstel de tekstpagina's van één tentamen; een onverwachte bron stopt de bouw."""
    for (code, field, page), repairs in REPAIRS.items():
        if code != exam['id']:
            continue
        lines = exam[field][page - 1].split('\n')
        for first, last, new, *expected in sorted(repairs, key=lambda repair: repair[0], reverse=True):
            if expected:
                unchanged = lines[first].strip().startswith(expected[0])
            else:
                unchanged = any(ord(char) > 0x2FF for line in lines[first:last + 1] for char in line)
            if not unchanged:
                raise ValueError(f'Bron gewijzigd: {code} {field} p. {page}, regel {first}')
            lines[first:last + 1] = new
        exam[field][page - 1] = '\n'.join(lines)
