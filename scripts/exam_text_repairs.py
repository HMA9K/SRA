"""Handmatig tegen de originele pagina's gecontroleerde formules voor de tekstversie van tentamens.

De pdf-extractie knipt formules met een wortel in losse regels en beschadigt sommige tekens.
De originele pagina-afbeelding blijft leidend; dit herstelt alleen de tekst eronder.
Sleutel: tentamen, tekstveld, paginanummer. Waarde: eerste regel, laatste regel (vanaf 0) en nieuwe regels.
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
}


def apply(exam):
    """Herstel de tekstpagina's van één tentamen; een onverwachte bron stopt de bouw."""
    for (code, field, page), repairs in REPAIRS.items():
        if code != exam['id']:
            continue
        lines = exam[field][page - 1].split('\n')
        for first, last, new in sorted(repairs, reverse=True):
            if not any(ord(char) > 0x2FF for line in lines[first:last + 1] for char in line):
                raise ValueError(f'Bron gewijzigd: {code} {field} p. {page}, regel {first}')
            lines[first:last + 1] = new
        exam[field][page - 1] = '\n'.join(lines)
