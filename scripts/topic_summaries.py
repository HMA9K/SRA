"""Korte samenvatting per hoofdonderwerp, getoond op de pagina Leren en in de leesversie.

Iedere samenvatting dekt alle tentamenrelevante stof van dat onderwerp. Een
onderwerp zonder tentamenpunten wordt alleen als zodanig gemeld.
Basis en Schatten staan hier; Regressie en Meervoudige regressie in
summary_regression.py.
"""
from summary_regression import SUMMARIES as REGRESSION

SAMPLING = {
    'Basis': (
        '<p><strong>Tentamengewicht:</strong> geen eigen punten in de negen tentamens, maar elke '
        'rekenvraag in het schattingsdeel (35 punten per tentamen) leunt erop.</p>'
        '<ul>'
        '<li><strong>Populatie en steekproef.</strong> De populatie (N posten, totaal W, boektotaal B) '
        'is waarover je een uitspraak wilt doen; de steekproef (n posten) is wat je controleert. '
        'Hoofdletters horen bij de populatie, kleine letters bij de steekproef; een dakje betekent geschat. '
        'De steekproef moet aselect zijn: een grote maar scheve selectie helpt niet.</li>'
        '<li><strong>Schatten of toetsen.</strong> Bij weinig verwachte fouten toets je of een post '
        'goedgekeurd kan worden; bij veel verwachte fouten schat je de werkelijke waarde met een interval.</li>'
        '<li><strong>Gemiddelde en spreiding.</strong> w̄ = Σw/n en s² = [Σw² − (Σw)²/n]/(n − 1). '
        'Let op Σw² tegenover (Σw)². s is de wortel van s² en heeft weer de eenheid van de gegevens.</li>'
        '<li><strong>Standaardafwijking of standaardfout.</strong> s beschrijft verschillen tussen posten; '
        's/√n met eindigheidscorrectie √((N − n)/(N − 1)) beschrijft de onzekerheid van het gemiddelde; '
        'maal N wordt dat de onzekerheid van het totaal.</li>'
        '<li><strong>Interval.</strong> Puntschatting ± t × standaardfout. De marge E is de halve breedte. '
        'Betrouwbaarheid 1 − α; tweezijdig ligt α/2 in elke staart. Gebruik df = n − 1, bij een ontbrekende '
        'rij de naast lagere, bij df &gt; 200 de onderste rij. Rond grenzen naar buiten af.</li>'
        '<li><strong>Normaliteit.</strong> Vanaf n = 100 mag je het steekproefgemiddelde normaal verdeeld '
        'nemen (centrale limietstelling); bij kleinere n beoordeel je de verdeling eerst.</li>'
        '</ul>'),
    'Schatten': (
        '<p><strong>Tentamengewicht:</strong> opgave 1 van elk tentamen, 35 van de 100 punten. '
        'Stratificatie is het zwaartepunt: 143 van de 900 historische punten (totaalschatting en '
        'interval 99, grenzen en allocatie 44). Daarna volgen de verschilschatter (44), MPU (39), '
        'quotiëntschatter (32), regressieschatter (26), steekproefomvang (17) en schatters kiezen (14).</p>'
        '<table><caption>De vier schatters in één oogopslag</caption><thead><tr><th scope="col">Schatter</th>'
        '<th scope="col">Kies als</th><th scope="col">Puntschatting</th><th scope="col">Spreiding s</th>'
        '<th scope="col">Voorwaarde</th></tr></thead><tbody>'
        '<tr><td>Direct (MPU)</td><td>Geen bruikbare boekwaarden of weinig uiteenlopende waarden</td>'
        '<td>N × w̄</td><td>s<sub>w</sub></td><td>Aselect; n ≥ 100 of normaliteit beoordelen</td></tr>'
        '<tr><td>Verschil</td><td>Vast foutbedrag per post</td><td>B − N × ē, met e = b − w</td>'
        '<td>s<sub>e</sub></td><td>Minstens 30 fouten</td></tr>'
        '<tr><td>Quotiënt</td><td>Vast foutpercentage</td><td>q × B, met q = Σw/Σb</td>'
        '<td>s<sub>q</sub> (rest w − qb)</td><td>Minstens 30 fouten</td></tr>'
        '<tr><td>Regressie</td><td>Lineair verband tussen b en w</td><td>N × w̄ + b₁(B − N × b̄)</td>'
        '<td>s<sub>w</sub> × √(1 − R²)</td><td>Foutverdeling beoordelen</td></tr>'
        '</tbody></table>'
        '<ul>'
        '<li><strong>Standaardfout.</strong> Voor alle vier: N × s/√n × √((N − n)/(N − 1)); interval = '
        'puntschatting ± t × standaardfout met df = n − 1. Alleen s verschilt per schatter.</li>'
        '<li><strong>Samenhang.</strong> De regressieschatter is de algemene vorm: met b₁ = 1 wordt het de '
        'verschilschatter, met een lijn door de oorsprong de quotiëntschatter, met b₁ = 0 MPU. Hij is nooit '
        'minder nauwkeurig dan MPU. Bij veel nulfouten kan elk interval op basis van fouten te smal uitvallen.</li>'
        '<li><strong>Steekproefomvang.</strong> γ = E²/(t² × N × s²) en n = N/(1 + γ), met de s² van de '
        'gekozen schatter. E is de halve breedte; rond n naar boven af en trek bestaande controles af '
        'voor de uitbreiding.</li>'
        '<li><strong>Stratificatie.</strong> Haal kritische posten eerst apart (volledig controleren, geen '
        'variantie). Begrens de strata met de cumulatieve boekwaarde of met de cumulatieve wortel van '
        'breedte × frequentie (nauwkeuriger). Verdeel de controles evenredig, nᵢ = Nᵢ/N × n, of volgens '
        'Neyman, nᵢ = Nᵢsᵢ/ΣNᵢsᵢ × n. Schat elk stratum met de eigen Nᵢ en nᵢ, tel de schattingen en de '
        'varianties op, neem één wortel en gebruik de gegeven effectieve df. Voor extra nauwkeurigheid '
        'breid je alle strata uit of gericht het stratum met de grootste variantiebijdrage.</li>'
        '</ul>'),
}

FOOTER = ('<p class="note">Deze samenvatting vat de lessen van dit onderwerp samen; de bronnen staan '
          'genummerd onderaan elke les. Puntentallen komen uit de tentamenpuntenanalyse.</p>')
SUMMARIES = {phase: html + FOOTER if html else '' for phase, html in {**SAMPLING, **REGRESSION}.items()}
