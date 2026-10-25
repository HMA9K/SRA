"""Bronplaatsen en leerdoelen voor de volledige SRA-leeromgeving.

Boekinhoudsopgave gecontroleerd in oorspronkelijke PDF p. 9-12.
College-indeling: Onderwijsprogramma NJ26, PDF p. 5.
De frequenties zelf komen uit de afzonderlijk controleerbare tentamenanalyse.
"""

CONTEXT = {
    'beginnen': ('H8 · §8.1', '1', 'Beginnen bij de controlevraag: bepaal populatie, steekproefelement en de uitspraak die de accountant wil onderbouwen.'),
    'rekenen': ('H8 · §8.2.1 · rekenbasis', '1', 'Bereken vanuit sommen en kwadratensommen de juiste spreiding. Leg uit waarom een standaardafwijking iets anders meet dan een standaardfout.'),
    'onzekerheid': ('H3 · §3.2 · voorkennis voor H8', '1', 'Vertaal betrouwbaarheid naar staartkans en tabelrij. Leg de betekenis van het interval uit en onderscheid marge, breedte en betrouwbaarheid.'),
    'mpu': ('H8 · §8.2.1', '1; toepassing in 2', 'Herken wanneer werkelijke waarden en populatieomvang voldoende zijn. Werk van steekproeftabel naar totaalschatting, standaardfout en interval.'),
    'verschil': ('H8 · §8.2.2', '1', 'Kies de verschilschatter op basis van het foutpatroon, bewaak het teken van de fout en toets de toepassingsvoorwaarde voordat je een interval berekent.'),
    'quotient': ('H8 · §8.2.3', '1', 'Herken een proportioneel foutpatroon. Bereken de verhouding van de sommen en gebruik de spreiding die na deze verhouding overblijft.'),
    'regressieschatter': ('H8 · §8.2.4', '1', 'Gebruik de bekende boekwaarde om een scheve samenstelling van de steekproef te corrigeren. Onderbouw zowel de methodekeuze als de geldigheid van het interval.'),
    'steekproefomvang': ('H8 · §8.2.1–8.2.4 en §8.3.4', '1–2', 'Vertaal een gewenste intervalbreedte eerst naar de marge. Onderscheid totale benodigde omvang en extra controles, ook binnen één stratum.'),
    'stratificatie': ('H8 · §8.3.1–8.3.4', '2', 'Bepaal strata en allocatie, reken per stratum en voeg totalen en varianties correct samen. Behandel een integraal gecontroleerd topstratum apart.'),
    'regressielijn': ('H9 · §9.1–9.3', '3', 'Stel een regressielijn op uit gegevens of Coefficients. Leg de eenheden, het residu en de beperkingen van een gevonden verband uit.'),
    'anova': ('H9 · §9.4', '3', 'Vul ontbrekende ANOVA-cellen aan en verbind kwadratensommen, vrijheidsgraden, MSE, R² en F met hun betekenis.'),
    'toetsen': ('H9 · §9.5.1–9.5.2; H10 · §10.6', '3 en 7', 'Kies een toets die bij de onderzoeksvraag past. Gebruik de juiste uitvoer en tabelgrens en formuleer een conclusie over de benoemde variabelen.'),
    'diagnostiek': ('H9 · §9.6.1–9.6.7; H10 · §10.4', '4; herhaling in 5–7', 'Beoordeel iedere relevante modelcontrole met tabel of grafiek, criterium, conclusie en vervolgactie. Een goede fit vervangt deze controles niet.'),
    'voorspellen': ('H9 · §9.7', '5', 'Onderscheid het verwachte gemiddelde en een individuele realisatie. Bereken een passende voorspelling en onzekerheidsmarge en vertaal afwijkingen naar nader onderzoek.'),
    'meervoudig': ('H10 · §10.1 en §10.4–10.6', '6–7', 'Lees meerdere coëfficiënten binnen hetzelfde model, interpreteer dummy’s ten opzichte van de referentiegroep en onderscheid B, Beta en de gezamenlijke modeltoets.'),
    'transformaties': ('H10 · §10.2.1–10.2.2', '6', 'Herken welke variabelen zijn getransformeerd. Reken terug naar de juiste schaal en vergelijk modellen alleen wanneer die vergelijking betekenis heeft. De inverse functie is uitgezonderd.'),
    'modelbouw': ('H10 · §10.3 en §10.5', '6–7', 'Onderbouw selectie en vergelijking van modellen, herbeoordeel het model na iedere wijziging en herken de gevolgen van multicollineariteit.'),
    'validatie': ('Aanvullende collegestof · geen boekparagraaf', '7; toepassing in 8', 'Beoordeel of een model ook op nieuwe gegevens bruikbaar is. Onderscheid trainings-MSE en MSPR van een onafhankelijke testset.'),
    'tentamen': ('H8–H10 · integratie van de voorgeschreven paragrafen', '8', 'Combineer methodekeuze, uitvoer, tabellenbundel, berekening en een onderbouwde casusconclusie. Oefen volledige open vragen zonder aanwijzingen.'),
}


def enhance(lessons, sources):
    for lesson in lessons:
        book, college, focus = CONTEXT[lesson['id']]
        lesson['curriculum'] = dict(book=book, college=college, focus=focus,
            title=f'{book} · Hoorcollege {college}',
            refs=[dict(source='programma', page=5, locator='Collegeprogramma: boekparagrafen per hoorcollege'),
                  dict(source='programma', page=4, locator='Toetsing: 35 punten schattingsmethoden en 65 punten regressie')])
    return lessons
