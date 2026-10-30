"""Korte samenvatting per hoofdonderwerp, getoond op de pagina Leren en in de leesversie.

Iedere samenvatting dekt alle tentamenrelevante stof van dat onderwerp. Een
onderwerp zonder tentamenpunten wordt alleen als zodanig gemeld.
Basis en Schatten staan hier; Regressie en Meervoudige regressie in
summary_regression.py.
"""
from summary_regression import SUMMARIES as REGRESSION

SAMPLING = {
    'Basis': '',
    'Schatten': '',
}

SUMMARIES = {**SAMPLING, **REGRESSION}
