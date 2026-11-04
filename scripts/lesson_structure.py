"""Vaste leslijn: vraag, idee, formule, voorbeeld, tentamenaanpak, let op, zelf oefenen.

De lessen zijn in lagen gegroeid. Deze stap zet een les in de vaste lijn en bewaart
tekst, figuren, bronnen en oefeningen. Proefles: de directe schatter.
Blokken met `afterExample` staan op de pagina na het uitgewerkte voorbeeld.
"""
import re

from presentation import inline_formulas


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

    paragraphs = re.findall(r'<p>.*?</p>', use['html'], flags=re.S)
    idea = re.search(r'<div class="mini-explanation".*?</figure>\s*</div>', use['html'], flags=re.S)[0]
    assert len(paragraphs) == 4, 'Controleer de opbouw van de MPU-les'
    worked, exercise = case['html'].split('<h3>Zelf toepassen</h3>')
    worked = worked.split('</p>', 1)[1]

    question = inline_formulas(
        '<p>Een accountant wil weten hoeveel een voorraad werkelijk waard is. Alle posten controleren kost te veel '
        'tijd, dus je controleert een aselecte steekproef en rekent die door naar het geheel. De directe schatter '
        'is daarvoor de eenvoudigste van de vier schatters: je kijkt alleen naar de werkelijke waarden die je bij '
        'controle vaststelt. De boekwaarden doen niet mee; of een post te hoog of te laag geboekt stond, speelt in de '
        'formule geen rol. Je neemt het gemiddelde per gecontroleerde post en vermenigvuldigt dat met het aantal '
        'posten. Vandaar de Engelse naam Mean Per Unit: gemiddelde per eenheid.</p>'
        '<p>Je gebruikt deze schatter dus wanneer je alleen de werkelijke waarden en de populatieomvang nodig hebt, '
        'en de werkelijke waarden niet te veel uiteenlopen.</p>')
    approach = inline_formulas(
        '<p>Gebruik deze stappen zodra een opgave om het totaal of een interval met de directe schatter vraagt. '
        'Elke stap gebruikt de uitkomst van de vorige; een fout in het begin werkt dus door in alles daarna.</p>'
    ) + re.search(r'<ol.*?</ol>', steps['html'], flags=re.S)[0] + inline_formulas(
        '<h3>Dezelfde stappen met gegevens uit de colleges</h3>'
        '<p>Op een tentamen krijg je meestal geen losse waarden, maar een samenvattingstabel. Dit zijn de '
        'voorraadgegevens uit de colleges. De kwadratensom is in euro²; deze is dus niet de som van de waarden '
        'nogmaals in euro.</p>') + worked
    watch = inline_formulas(
        '<p>De berekening kan kloppen terwijl de uitkomst toch weinig zegt. Let daarom op deze punten.</p><ul>'
        '<li><strong>Vergeet de factor N niet</strong> bij de standaardfout van het totaal.</li>'
        '<li><strong>Een smal interval volgt niet automatisch uit een grote populatie.</strong></li>'
        '<li><strong>Grote spreiding geeft een breed interval.</strong> Het boek zegt dat MPU goed werkt als de '
        'werkelijke waarden niet te veel uiteenlopen. Liggen ze ver uit elkaar, dan is s_w groot. Er zijn dan twee '
        'uitwegen: je deelt de populatie op in groepen met weinig spreiding (stratificatie, les 9), of je gebruikt '
        'een schatter die naar de fout per post kijkt (les 5 tot en met 7).</li>'
        '<li><strong>Enkele zeer grote posten</strong> tussen veel kleine kunnen s_w sterk vergroten. Kies een '
        'alternatief dan op basis van populatie en foutpatroon, niet alleen omdat het berekende interval smaller '
        'uitvalt.</li>'
        '<li><strong>De regel n ≥ 100 is geen garantie.</strong> Het interval gaat ervan uit dat het '
        'steekproefgemiddelde ongeveer normaal verdeeld is. Daarvoor geldt deze vuistregel, maar het boek waarschuwt '
        'dat extreem scheve verdelingen een grotere steekproef kunnen vragen. Bij een voorraad met veel kleine en '
        'een paar heel grote posten kan een steekproef van 100 die grote posten missen. Kijk daarom eerst of de '
        'steekproef aselect is en of er opvallend grote posten zijn.</li></ul>')

    lesson['sections'] = [
        focus,
        dict(title='Welke vraag beantwoordt de directe schatter?', html=question, refs=_refs(use)),
        dict(title='Het idee: van gemiddelde per post naar totaal', html=idea, refs=_refs(use)),
        formula,
        dict(title='Zo pak je een tentamenvraag aan', html=approach, refs=_refs(steps, case), afterExample=True),
        dict(title='Waar je op moet letten', html=watch, refs=_refs(use, limit), afterExample=True),
        dict(title='Zelf oefenen', html='<h3>Zelf toepassen</h3>' + exercise, refs=_refs(case), afterExample=True),
    ]
    lesson['pitfalls'] = []


def enhance(lessons):
    _mpu(next(lesson for lesson in lessons if lesson['id'] == 'mpu'))
