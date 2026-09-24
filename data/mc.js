/* Gemaakt met Codex. Eigen oefenvarianten op de aangeleverde SRA-lesstof. */
window.SRAMCData = {
  "version": 2,
  "topics": [
    {
      "id": "beginnen",
      "title": "Van losse waarneming naar uitspraak",
      "phase": "Basis",
      "lesson": "beginnen",
      "signal": "Er wordt een uitspraak gevraagd over meer posten dan je onderzoekt.",
      "approach": "Benoem populatie, steekproef en de gevraagde grootheid vóór je rekent.",
      "refs": [
        {
          "source": "slides",
          "locator": "PDF-pagina 3 en 12–15",
          "page": 3
        },
        {
          "source": "programma",
          "locator": "PDF-pagina 3–5",
          "page": 3
        },
        {
          "source": "boek-h8a",
          "page": 1,
          "locator": "Boek p. 201; oorspronkelijke PDF p. 219; uitsnede p. 1"
        },
        {
          "source": "set-basis",
          "page": 1,
          "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
        }
      ],
      "questions": [
        {
          "id": "mc-beginnen-basis-1",
          "prompt": "Je onderzoekt 80 van 2.000 facturen. Wat is n?",
          "options": [
            "80",
            "1.920",
            "2.000"
          ],
          "correct": 0,
          "explanation": "De populatie bestaat uit alle 2.000 facturen waarover je een uitspraak wilt doen; daarom is N = 2.000. De steekproef bestaat uit de 80 facturen die werkelijk zijn onderzocht. De kleine letter n staat voor dat aantal: n = 80. De 1.920 overige facturen behoren wel tot de populatie, maar niet tot de onderzochte steekproef.",
          "steps": [
            "De populatie bestaat uit alle 2.000 facturen waarover je een uitspraak wilt doen; daarom is N = 2.000.",
            "De steekproef bestaat uit de 80 facturen die werkelijk zijn onderzocht. De kleine letter n staat voor dat aantal: n = 80.",
            "De 1.920 overige facturen behoren wel tot de populatie, maar niet tot de onderzochte steekproef."
          ],
          "pattern": "Herken: “80 van 2.000 facturen” en de kleine letter n. → Betekenis: Er zijn twee aantallen: onderzochte posten en de volledige populatie. → Aanpak: Koppel n aan de werkelijk onderzochte posten en N aan alle posten. → Gevraagd antwoord: Een aantal onderzochte facturen, geen bedrag of populatieomvang.",
          "trap": "Verwissel de populatieomvang N niet met de steekproefomvang n.",
          "optionExplanations": [
            "80 is het daadwerkelijk onderzochte aantal. Daarmee is dit de steekproefomvang n.",
            "1.920 = 2.000 − 80 is het aantal niet-onderzochte facturen. Dat is noch n, noch de volledige N.",
            "2.000 is N: het aantal facturen in de volledige populatie. Voor n tel je uitsluitend de onderzochte facturen."
          ],
          "refs": [
            {
              "source": "slides",
              "locator": "PDF-pagina 3 en 12–15",
              "page": 3
            },
            {
              "source": "programma",
              "locator": "PDF-pagina 3–5",
              "page": 3
            },
            {
              "source": "boek-h8a",
              "page": 1,
              "locator": "Boek p. 201; oorspronkelijke PDF p. 219; uitsnede p. 1"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "“80 van 2.000 facturen” en de kleine letter n.",
            "meaning": "Er zijn twee aantallen: onderzochte posten en de volledige populatie.",
            "approach": "Koppel n aan de werkelijk onderzochte posten en N aan alle posten.",
            "answer": "Een aantal onderzochte facturen, geen bedrag of populatieomvang."
          },
          "level": 1,
          "guidance": {
            "title": "Populatie, steekproef en schatting",
            "focus": "Houd het aantal onderzochte posten en het aantal posten waarover je een uitspraak wilt doen uit elkaar.",
            "rules": [
              "N is het aantal posten in de volledige populatie; n is het aantal onderzochte posten. Een hoofdletter W duidt hier het werkelijke populatietotaal aan; een dakje betekent dat dit totaal wordt geschat.",
              "Een schatting gebruikt steekproefgegevens om iets over de populatie te zeggen. Benoem eerst of een aantal, gemiddelde, totaal of onzekerheidsinterval wordt gevraagd."
            ],
            "refs": [
              {
                "source": "boek-h8a",
                "page": 1,
                "locator": "Boek p. 201; oorspronkelijke PDF p. 219"
              },
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 2-4: schatting, totaal en onzekerheid"
              }
            ]
          }
        },
        {
          "id": "mc-beginnen-basis-2",
          "prompt": "Wat betekent het dakje in Ŵ?",
          "options": [
            "De werkelijke waarde is exact bekend",
            "Het gaat om een geschatte waarde",
            "Het bedrag is afgerond"
          ],
          "correct": 1,
          "explanation": "W is de onbekende totale werkelijke waarde van de populatie. Met steekproefgegevens bereken je een benadering van W. Het dakje in Ŵ geeft aan dat het om die schatting gaat. Een puntschatting kan met veel decimalen worden berekend en toch onzeker zijn; afronding en schattingsonzekerheid zijn verschillende zaken.",
          "steps": [
            "W is de onbekende totale werkelijke waarde van de populatie.",
            "Met steekproefgegevens bereken je een benadering van W. Het dakje in Ŵ geeft aan dat het om die schatting gaat.",
            "Een puntschatting kan met veel decimalen worden berekend en toch onzeker zijn; afronding en schattingsonzekerheid zijn verschillende zaken."
          ],
          "pattern": "Herken: Het dakje boven W in Ŵ. → Betekenis: Het symbool maakt onderscheid tussen een onbekend populatietotaal en een schatting daarvan. → Aanpak: Lees het dakje als “geschat uit gegevens”; het zegt niets over afronden. → Gevraagd antwoord: De betekenis van de notatie, niet een numerieke berekening.",
          "trap": "Een precies weergegeven getal is niet automatisch een exact bekende populatiewaarde.",
          "optionExplanations": [
            "Een exact bekend populatietotaal schrijf je hier als W. Het dakje laat juist zien dat het totaal wordt geschat.",
            "Ŵ is de uit de steekproef berekende schatting van W. Een interval kan vervolgens de onzekerheid rond die schatting beschrijven.",
            "Het dakje zegt niets over afronden. Ook een onafgeronde uitkomst blijft Ŵ zolang het een schatting is."
          ],
          "refs": [
            {
              "source": "slides",
              "locator": "PDF-pagina 3 en 12–15",
              "page": 3
            },
            {
              "source": "programma",
              "locator": "PDF-pagina 3–5",
              "page": 3
            },
            {
              "source": "boek-h8a",
              "page": 1,
              "locator": "Boek p. 201; oorspronkelijke PDF p. 219; uitsnede p. 1"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "Het dakje boven W in Ŵ.",
            "meaning": "Het symbool maakt onderscheid tussen een onbekend populatietotaal en een schatting daarvan.",
            "approach": "Lees het dakje als “geschat uit gegevens”; het zegt niets over afronden.",
            "answer": "De betekenis van de notatie, niet een numerieke berekening."
          },
          "level": 1,
          "guidance": {
            "title": "Populatie, steekproef en schatting",
            "focus": "Een geschatte grootheid is nog niet de onbekende werkelijke waarde. Bepaal op welke populatiegrootheid de uitspraak betrekking heeft.",
            "rules": [
              "N is het aantal posten in de volledige populatie; n is het aantal onderzochte posten. Een hoofdletter W duidt hier het werkelijke populatietotaal aan; een dakje betekent dat dit totaal wordt geschat.",
              "Een schatting gebruikt steekproefgegevens om iets over de populatie te zeggen. Benoem eerst of een aantal, gemiddelde, totaal of onzekerheidsinterval wordt gevraagd."
            ],
            "refs": [
              {
                "source": "boek-h8a",
                "page": 1,
                "locator": "Boek p. 201; oorspronkelijke PDF p. 219"
              },
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 2-4: schatting, totaal en onzekerheid"
              }
            ]
          }
        },
        {
          "id": "mc-beginnen-basis-3",
          "prompt": "Welke vraag vraagt om een schatting?",
          "options": [
            "Is er een significant stijgend verband?",
            "Kunnen we H₀ verwerpen?",
            "Hoe groot is de totale werkelijke voorraadwaarde?"
          ],
          "correct": 2,
          "explanation": "Bij schatten zoek je de omvang van een onbekende grootheid, bijvoorbeeld het totale bedrag W. Bij toetsen beoordeel je een bewering met H₀ en H₁ en onderzoek je of er voldoende bewijs tegen H₀ is. “Hoe groot is de totale werkelijke voorraadwaarde?” vraagt dus een puntschatting, eventueel aangevuld met een betrouwbaarheidsinterval.",
          "steps": [
            "Bij schatten zoek je de omvang van een onbekende grootheid, bijvoorbeeld het totale bedrag W.",
            "Bij toetsen beoordeel je een bewering met H₀ en H₁ en onderzoek je of er voldoende bewijs tegen H₀ is.",
            "“Hoe groot is de totale werkelijke voorraadwaarde?” vraagt dus een puntschatting, eventueel aangevuld met een betrouwbaarheidsinterval."
          ],
          "pattern": "Herken: Vergelijk in de antwoordopties “hoe groot”, “significant” en “H₀ verwerpen”. → Betekenis: Een omvang bepalen hoort bij schatten; bewijs tegen een bewering beoordelen hoort bij toetsen. → Aanpak: Zoek de vraag die een onbekende populatiegrootheid wil benaderen. → Gevraagd antwoord: De vraag naar een geschatte waarde, eventueel met een onzekerheidsinterval.",
          "trap": "Kies niet eerst een formule: stel eerst vast welk soort uitspraak de vraag verlangt.",
          "optionExplanations": [
            "Het woord significant vraagt of de data voldoende bewijs voor een stijgend verband leveren. Dat is een hypothesetoets.",
            "Het verwerpen van H₀ is een toetsbeslissing. Je zoekt daarbij geen schatting van een voorraadbedrag.",
            "Hier wordt een onbekend bedrag gevraagd. Een schatter levert een geschat totaal; een interval voegt informatie over onzekerheid toe."
          ],
          "refs": [
            {
              "source": "slides",
              "locator": "PDF-pagina 3 en 12–15",
              "page": 3
            },
            {
              "source": "programma",
              "locator": "PDF-pagina 3–5",
              "page": 3
            },
            {
              "source": "boek-h8a",
              "page": 1,
              "locator": "Boek p. 201; oorspronkelijke PDF p. 219; uitsnede p. 1"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "Vergelijk in de antwoordopties “hoe groot”, “significant” en “H₀ verwerpen”.",
            "meaning": "Een omvang bepalen hoort bij schatten; bewijs tegen een bewering beoordelen hoort bij toetsen.",
            "approach": "Zoek de vraag die een onbekende populatiegrootheid wil benaderen.",
            "answer": "De vraag naar een geschatte waarde, eventueel met een onzekerheidsinterval."
          },
          "level": 2,
          "guidance": {
            "title": "Populatie, steekproef en schatting",
            "focus": "Een geschatte grootheid is nog niet de onbekende werkelijke waarde. Bepaal op welke populatiegrootheid de uitspraak betrekking heeft.",
            "rules": [
              "N is het aantal posten in de volledige populatie; n is het aantal onderzochte posten. Een hoofdletter W duidt hier het werkelijke populatietotaal aan; een dakje betekent dat dit totaal wordt geschat.",
              "Een schatting gebruikt steekproefgegevens om iets over de populatie te zeggen. Benoem eerst of een aantal, gemiddelde, totaal of onzekerheidsinterval wordt gevraagd."
            ],
            "refs": [
              {
                "source": "boek-h8a",
                "page": 1,
                "locator": "Boek p. 201; oorspronkelijke PDF p. 219"
              },
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 2-4: schatting, totaal en onzekerheid"
              }
            ]
          }
        },
        {
          "id": "mc-beginnen-toepassing-1",
          "prompt": "Van 4.000 facturen zijn er 100 willekeurig gekozen. Hun gemiddelde is € 70. Welk bedrag is de directe schatting van het populatietotaal?",
          "options": [
            "€ 70",
            "€ 400.000",
            "€ 7.000",
            "€ 280.000"
          ],
          "correct": 3,
          "level": 2,
          "steps": [
            "Het steekproefgemiddelde is 70; de populatieomvang N is 4.000.",
            "Schat het totaal met N × gemiddelde = 4.000 × 70 = 280.000.",
            "De 100 onderzochte facturen bepalen het gemiddelde; de 4.000 populatiefacturen bepalen naar welk totaal je dat gemiddelde opschaalt."
          ],
          "explanation": "Het steekproefgemiddelde is 70; de populatieomvang N is 4.000. Schat het totaal met N × gemiddelde = 4.000 × 70 = 280.000. De 100 onderzochte facturen bepalen het gemiddelde; de 4.000 populatiefacturen bepalen naar welk totaal je dat gemiddelde opschaalt.",
          "pattern": "Herken: “Willekeurig gekozen”, een gemiddelde per factuur en “populatietotaal”. → Betekenis: Een aselect steekproefgemiddelde wordt gebruikt om een totaal te schatten: MPU. → Aanpak: Vermenigvuldig het gemiddelde met alle facturen N, niet met de onderzochte n. → Gevraagd antwoord: Een geschat totaalbedrag in euro, geen gemiddelde per factuur.",
          "trap": "100 × 70 is alleen het steekproeftotaal.",
          "optionExplanations": [
            "€ 70 is een bedrag per factuur. Voor het populatietotaal ontbreekt de vermenigvuldiging met N.",
            "€ 400.000 ontstaat niet uit het gegeven gemiddelde van € 70. Het aantal onderzochte facturen 100 is geen gemiddeld factuurbedrag.",
            "€ 7.000 = 100 × 70 is het totaal van de onderzochte facturen. Gevraagd is het geschatte totaal van alle 4.000 facturen.",
            "€ 280.000 = 4.000 × 70 past het steekproefgemiddelde toe op de volledige populatie."
          ],
          "refs": [
            {
              "source": "slides",
              "locator": "PDF-pagina 3 en 12–15",
              "page": 3
            },
            {
              "source": "programma",
              "locator": "PDF-pagina 3–5",
              "page": 3
            },
            {
              "source": "boek-h8a",
              "page": 1,
              "locator": "Boek p. 201; oorspronkelijke PDF p. 219; uitsnede p. 1"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "“Willekeurig gekozen”, een gemiddelde per factuur en “populatietotaal”.",
            "meaning": "Een aselect steekproefgemiddelde wordt gebruikt om een totaal te schatten: MPU.",
            "approach": "Vermenigvuldig het gemiddelde met alle facturen N, niet met de onderzochte n.",
            "answer": "Een geschat totaalbedrag in euro, geen gemiddelde per factuur."
          },
          "guidance": {
            "title": "Populatie, steekproef en schatting",
            "focus": "Gebruik bij een populatietotaal het populatieaantal en het steekproefgemiddelde. Het steekproeftotaal beantwoordt een andere vraag.",
            "rules": [
              "N is het aantal posten in de volledige populatie; n is het aantal onderzochte posten. Een hoofdletter W duidt hier het werkelijke populatietotaal aan; een dakje betekent dat dit totaal wordt geschat.",
              "Een schatting gebruikt steekproefgegevens om iets over de populatie te zeggen. Benoem eerst of een aantal, gemiddelde, totaal of onzekerheidsinterval wordt gevraagd."
            ],
            "refs": [
              {
                "source": "boek-h8a",
                "page": 1,
                "locator": "Boek p. 201; oorspronkelijke PDF p. 219"
              },
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 2-4: schatting, totaal en onzekerheid"
              }
            ]
          }
        },
        {
          "id": "mc-beginnen-toepassing-2",
          "prompt": "Je kiest de 1.000 goedkoopste facturen uit 10.000 facturen. Wat is de sterkste kritiek op een schatting voor alle facturen?",
          "options": [
            "De selectie kan systematisch afwijken van de populatie",
            "Er ontbreekt alleen een afronding",
            "Een betrouwbaarheidsinterval herstelt de selectiefout",
            "1.000 waarnemingen zijn altijd te weinig"
          ],
          "correct": 0,
          "level": 3,
          "steps": [
            "De selectie hangt samen met de factuurwaarde.",
            "Meer waarnemingen of een interval nemen die selectiviteit niet weg.",
            "Representativiteit betreft de aansluiting tussen selectie en populatie. Selecteren op lage bedragen kan het geschatte gemiddelde systematisch te laag maken."
          ],
          "explanation": "De selectie hangt samen met de factuurwaarde. Meer waarnemingen of een interval nemen die selectiviteit niet weg. Representativiteit betreft de aansluiting tussen selectie en populatie. Selecteren op lage bedragen kan het geschatte gemiddelde systematisch te laag maken.",
          "pattern": "Herken: “De 1.000 goedkoopste” worden gebruikt voor een uitspraak over alle 10.000. → Betekenis: De selectie hangt van de factuurwaarde af en vertegenwoordigt dure facturen niet. → Aanpak: Beoordeel de selectiegrond voordat je de grote steekproefomvang als voordeel ziet. → Gevraagd antwoord: Een kritiek op mogelijke selectiebias, niet alleen op het aantal controles.",
          "trap": "Groot n is geen vervanging voor een geschikte selectie.",
          "optionExplanations": [
            "De goedkoopste facturen zijn doelgericht geselecteerd en kunnen in waarde afwijken van de overige facturen. Dat bedreigt een uitspraak over de hele populatie.",
            "Afronding verandert niets aan de selectie van uitsluitend goedkope facturen en herstelt de daardoor mogelijke vertekening niet.",
            "Een betrouwbaarheidsinterval beschrijft onzekerheid binnen de gebruikte aanpak. Het maakt een systematisch selectieve steekproef niet alsnog representatief.",
            "Uit alleen het aantal 1.000 kun je niet besluiten dat de steekproef te klein is. Het duidelijke probleem is de selectie op prijs."
          ],
          "refs": [
            {
              "source": "slides",
              "locator": "PDF-pagina 3 en 12–15",
              "page": 3
            },
            {
              "source": "programma",
              "locator": "PDF-pagina 3–5",
              "page": 3
            },
            {
              "source": "boek-h8a",
              "page": 1,
              "locator": "Boek p. 201; oorspronkelijke PDF p. 219; uitsnede p. 1"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "“De 1.000 goedkoopste” worden gebruikt voor een uitspraak over alle 10.000.",
            "meaning": "De selectie hangt van de factuurwaarde af en vertegenwoordigt dure facturen niet.",
            "approach": "Beoordeel de selectiegrond voordat je de grote steekproefomvang als voordeel ziet.",
            "answer": "Een kritiek op mogelijke selectiebias, niet alleen op het aantal controles."
          },
          "guidance": {
            "title": "Populatie, steekproef en schatting",
            "focus": "Controleer hoe de posten zijn gekozen. Selecteren op lage waarden kan systematisch afwijken van de hele populatie; een grotere selectieve steekproef neemt die vertekening niet vanzelf weg.",
            "rules": [
              "N is het aantal posten in de volledige populatie; n is het aantal onderzochte posten. Een hoofdletter W duidt hier het werkelijke populatietotaal aan; een dakje betekent dat dit totaal wordt geschat.",
              "Een schatting gebruikt steekproefgegevens om iets over de populatie te zeggen. Benoem eerst of een aantal, gemiddelde, totaal of onzekerheidsinterval wordt gevraagd."
            ],
            "refs": [
              {
                "source": "boek-h8a",
                "page": 1,
                "locator": "Boek p. 201; oorspronkelijke PDF p. 219"
              },
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 2-4: schatting, totaal en onzekerheid"
              }
            ]
          }
        },
        {
          "id": "mc-beginnen-toepassing-3",
          "prompt": "Een berekening levert Ŵ = € 240.000 en een standaardfout van € 5.000. Met gegeven t = 2: welke uitspraak is volledig?",
          "options": [
            "De populatie bevat 5.000 posten",
            "De schatting is € 240.000 met interval [€ 230.000; € 250.000]",
            "95% van de afzonderlijke posten ligt tussen deze grenzen",
            "W is exact € 240.000"
          ],
          "correct": 1,
          "level": 3,
          "steps": [
            "De marge is 2 × 5.000 = 10.000.",
            "Het interval rond het totale W is 240.000 ± 10.000.",
            "De standaardfout van € 5.000 beschrijft onzekerheid van de totaalschatting. De intervalgrenzen zijn dus grenzen voor W, niet voor aantallen of afzonderlijke facturen."
          ],
          "explanation": "De marge is 2 × 5.000 = 10.000. Het interval rond het totale W is 240.000 ± 10.000. De standaardfout van € 5.000 beschrijft onzekerheid van de totaalschatting. De intervalgrenzen zijn dus grenzen voor W, niet voor aantallen of afzonderlijke facturen.",
          "pattern": "Herken: Ŵ, een standaardfout, t en de vraag naar een volledige uitspraak. → Betekenis: Naast de puntschatting is ook de onzekerheid van het totaal gegeven. → Aanpak: Bereken de marge t × standaardfout en plaats die aan beide kanten van Ŵ. → Gevraagd antwoord: Een geschat totaal met onder- en bovengrens, zonder zekerheid over de werkelijke waarde te claimen.",
          "trap": "Een interval voor een totaal is geen interval voor individuele posten.",
          "optionExplanations": [
            "5.000 is hier de standaardfout in euro en geen populatieomvang. Voor aantallen zou de vraag N moeten geven.",
            "De marge is 2 × € 5.000 = € 10.000. Aftrekken en optellen bij € 240.000 geeft [€ 230.000; € 250.000].",
            "Het interval heeft betrekking op het populatietotaal W. Het zegt niet welk aandeel afzonderlijke posten binnen die bedragen ligt.",
            "€ 240.000 is een puntschatting. De gegeven standaardfout maakt duidelijk dat dit geen exact bekend totaal is."
          ],
          "refs": [
            {
              "source": "slides",
              "locator": "PDF-pagina 3 en 12–15",
              "page": 3
            },
            {
              "source": "programma",
              "locator": "PDF-pagina 3–5",
              "page": 3
            },
            {
              "source": "boek-h8a",
              "page": 1,
              "locator": "Boek p. 201; oorspronkelijke PDF p. 219; uitsnede p. 1"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "Ŵ, een standaardfout, t en de vraag naar een volledige uitspraak.",
            "meaning": "Naast de puntschatting is ook de onzekerheid van het totaal gegeven.",
            "approach": "Bereken de marge t × standaardfout en plaats die aan beide kanten van Ŵ.",
            "answer": "Een geschat totaal met onder- en bovengrens, zonder zekerheid over de werkelijke waarde te claimen."
          },
          "guidance": {
            "title": "Populatie, steekproef en schatting",
            "focus": "De onzekerheid hoort bij de geschatte grootheid. Een interval voor het totaal zegt niet waar individuele posten liggen.",
            "rules": [
              "N is het aantal posten in de volledige populatie; n is het aantal onderzochte posten. Een hoofdletter W duidt hier het werkelijke populatietotaal aan; een dakje betekent dat dit totaal wordt geschat.",
              "Een schatting gebruikt steekproefgegevens om iets over de populatie te zeggen. Benoem eerst of een aantal, gemiddelde, totaal of onzekerheidsinterval wordt gevraagd."
            ],
            "refs": [
              {
                "source": "boek-h8a",
                "page": 1,
                "locator": "Boek p. 201; oorspronkelijke PDF p. 219"
              },
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 2-4: schatting, totaal en onzekerheid"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "rekenen",
      "title": "Gemiddelde, variantie en standaardafwijking",
      "phase": "Basis",
      "lesson": "rekenen",
      "signal": "Je krijgt een som, som van kwadraten of een spreidingsmaat.",
      "approach": "Houd Σw², (Σw)², s², s en de standaardfout uit elkaar.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formule 1 en 7, PDF-pagina 1",
          "page": 1
        },
        {
          "source": "slides",
          "locator": "PDF-pagina 15–19",
          "page": 15
        },
        {
          "source": "boek-h8a",
          "page": 5,
          "locator": "Boek p. 205; oorspronkelijke PDF p. 223; uitsnede p. 5"
        },
        {
          "source": "set-basis",
          "page": 1,
          "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
        }
      ],
      "questions": [
        {
          "id": "mc-rekenen-basis-1",
          "prompt": "Voor 2 en 4: wat is Σw²?",
          "options": [
            "36",
            "20",
            "6"
          ],
          "correct": 1,
          "explanation": "Bij Σw² hoort het kwadraat bij iedere afzonderlijke waarde w. Kwadrateer eerst: 2² = 4 en 4² = 16. Tel daarna op: Σw² = 4 + 16 = 20. Ter vergelijking: eerst optellen en daarna kwadrateren geeft (Σw)² = (2 + 4)² = 36.",
          "steps": [
            "Bij Σw² hoort het kwadraat bij iedere afzonderlijke waarde w.",
            "Kwadrateer eerst: 2² = 4 en 4² = 16. Tel daarna op: Σw² = 4 + 16 = 20.",
            "Ter vergelijking: eerst optellen en daarna kwadrateren geeft (Σw)² = (2 + 4)² = 36."
          ],
          "pattern": "Herken: Σw² zonder haakjes rond de som. → Betekenis: De macht hoort bij iedere w en niet bij de totale som. → Aanpak: Kwadrateer de afzonderlijke waarden en tel hun kwadraten op. → Gevraagd antwoord: Een som van kwadraten; onderscheid die van (Σw)².",
          "trap": "Eerst optellen en dan kwadrateren verwisselt twee verschillende onderdelen van de variantieformule.",
          "optionExplanations": [
            "36 is (2 + 4)² en hoort bij (Σw)². In de gevraagde Σw² moet je iedere waarde eerst afzonderlijk kwadrateren.",
            "20 = 2² + 4². De afzonderlijke kwadraten zijn 4 en 16; hun som is 20.",
            "6 is alleen Σw = 2 + 4. De gevraagde kwadraten ontbreken nog."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 1 en 7, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 15–19",
              "page": 15
            },
            {
              "source": "boek-h8a",
              "page": 5,
              "locator": "Boek p. 205; oorspronkelijke PDF p. 223; uitsnede p. 5"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "Σw² zonder haakjes rond de som.",
            "meaning": "De macht hoort bij iedere w en niet bij de totale som.",
            "approach": "Kwadrateer de afzonderlijke waarden en tel hun kwadraten op.",
            "answer": "Een som van kwadraten; onderscheid die van (Σw)²."
          },
          "level": 1,
          "guidance": {
            "title": "Som, spreiding en standaardfout",
            "focus": "Let op de plaats van het kwadraat: schrijf bij een som van kwadraten eerst voor elke waarneming haar eigen kwadraat op.",
            "rules": [
              "Bij Σw² kwadrateer je iedere waarneming en tel je daarna op. Bij (Σw)² tel je eerst op en kwadrateer je de som. Dit zijn verschillende bewerkingen.",
              "De steekproefvariantie is s² = [Σw² − (Σw)²/n]/(n − 1). De standaardafwijking s is de wortel van s² en heeft weer dezelfde eenheid als de waarnemingen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formule 1: steekproefvariantie; formule 4: onzekerheid van de schatting"
              }
            ]
          }
        },
        {
          "id": "mc-rekenen-basis-2",
          "prompt": "De variantie is 225 euro². Wat is s?",
          "options": [
            "50.625 euro",
            "225 euro",
            "15 euro"
          ],
          "correct": 2,
          "explanation": "De variantie is s² = 225 euro². Een variantie gebruikt gekwadrateerde afwijkingen en dus gekwadrateerde eenheden. De standaardafwijking is de wortel uit de variantie: s = √225 = 15 euro. Controleer de omzetting: 15² = 225. De eenheid is weer euro, dezelfde eenheid als de waarnemingen.",
          "steps": [
            "De variantie is s² = 225 euro². Een variantie gebruikt gekwadrateerde afwijkingen en dus gekwadrateerde eenheden.",
            "De standaardafwijking is de wortel uit de variantie: s = √225 = 15 euro.",
            "Controleer de omzetting: 15² = 225. De eenheid is weer euro, dezelfde eenheid als de waarnemingen."
          ],
          "pattern": "Herken: “Variantie”, euro² en gevraagd s zonder kwadraat. → Betekenis: De gegeven maat is s²; gevraagd is de standaardafwijking. → Aanpak: Neem de vierkantswortel van de variantie en controleer de eenheid. → Gevraagd antwoord: Een spreidingsmaat in euro, de oorspronkelijke eenheid.",
          "trap": "Alleen “euro²” door “euro” vervangen verandert de variantie niet in een standaardafwijking.",
          "optionExplanations": [
            "50.625 is 225². Je hebt dan opnieuw gekwadrateerd, terwijl de omzetting van variantie naar standaardafwijking een wortel vraagt.",
            "225 is nog de numerieke waarde van de variantie. Je moet de wortel nemen voordat je het resultaat als standaardafwijking in euro schrijft.",
            "15 euro klopt: √225 = 15 en de wortel uit euro² is euro."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 1 en 7, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 15–19",
              "page": 15
            },
            {
              "source": "boek-h8a",
              "page": 5,
              "locator": "Boek p. 205; oorspronkelijke PDF p. 223; uitsnede p. 5"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "“Variantie”, euro² en gevraagd s zonder kwadraat.",
            "meaning": "De gegeven maat is s²; gevraagd is de standaardafwijking.",
            "approach": "Neem de vierkantswortel van de variantie en controleer de eenheid.",
            "answer": "Een spreidingsmaat in euro, de oorspronkelijke eenheid."
          },
          "level": 1,
          "guidance": {
            "title": "Som, spreiding en standaardfout",
            "focus": "Een variantie heeft een gekwadrateerde eenheid. Neem de wortel om de standaardafwijking in de oorspronkelijke eenheid te krijgen.",
            "rules": [
              "Bij Σw² kwadrateer je iedere waarneming en tel je daarna op. Bij (Σw)² tel je eerst op en kwadrateer je de som. Dit zijn verschillende bewerkingen.",
              "De steekproefvariantie is s² = [Σw² − (Σw)²/n]/(n − 1). De standaardafwijking s is de wortel van s² en heeft weer dezelfde eenheid als de waarnemingen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formule 1: steekproefvariantie; formule 4: onzekerheid van de schatting"
              }
            ]
          }
        },
        {
          "id": "mc-rekenen-basis-3",
          "prompt": "Wat beschrijft s / √n?",
          "options": [
            "De geschatte onzekerheid van het gemiddelde",
            "Het populatietotaal",
            "De spreiding van elke individuele post"
          ],
          "correct": 0,
          "explanation": "s beschrijft hoe de individuele waarnemingen rond hun gemiddelde spreiden. Delen door √n geeft de standaardfout van het gemiddelde: de geschatte onzekerheid van het steekproefgemiddelde. Bij dezelfde spreiding s wordt die standaardfout kleiner als n groter wordt. Voor een eindige populatie kan nog een eindigheidscorrectie nodig zijn.",
          "steps": [
            "s beschrijft hoe de individuele waarnemingen rond hun gemiddelde spreiden.",
            "Delen door √n geeft de standaardfout van het gemiddelde: de geschatte onzekerheid van het steekproefgemiddelde.",
            "Bij dezelfde spreiding s wordt die standaardfout kleiner als n groter wordt. Voor een eindige populatie kan nog een eindigheidscorrectie nodig zijn."
          ],
          "pattern": "Herken: De formule s/√n, met een spreiding gedeeld door de wortel van het aantal. → Betekenis: Die deling verandert spreiding tussen waarnemingen in onzekerheid van het gemiddelde. → Aanpak: Koppel de formule aan een standaardfout; let erop dat hier nog geen eindigheidscorrectie staat. → Gevraagd antwoord: Een uitleg van de onzekerheid van het gemiddelde, niet van een populatietotaal.",
          "trap": "Spreiding tussen posten en onzekerheid van een geschat gemiddelde zijn niet dezelfde grootheid.",
          "optionExplanations": [
            "s/√n is de standaardfout van het gemiddelde vóór eindigheidscorrectie. Deze maat gebruik je voor de onzekerheid van de schatting.",
            "Een populatietotaal wordt bijvoorbeeld geschat met Nw̄. De uitdrukking s/√n bevat een spreidingsmaat en levert geen totaalbedrag.",
            "De individuele spreiding wordt beschreven door s. Door √n delen verandert het doel naar onzekerheid van het gemiddelde."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 1 en 7, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 15–19",
              "page": 15
            },
            {
              "source": "boek-h8a",
              "page": 5,
              "locator": "Boek p. 205; oorspronkelijke PDF p. 223; uitsnede p. 5"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "De formule s/√n, met een spreiding gedeeld door de wortel van het aantal.",
            "meaning": "Die deling verandert spreiding tussen waarnemingen in onzekerheid van het gemiddelde.",
            "approach": "Koppel de formule aan een standaardfout; let erop dat hier nog geen eindigheidscorrectie staat.",
            "answer": "Een uitleg van de onzekerheid van het gemiddelde, niet van een populatietotaal."
          },
          "level": 2,
          "guidance": {
            "title": "Som, spreiding en standaardfout",
            "focus": "s beschrijft spreiding tussen posten. s/√n beschrijft, zonder eindigheidscorrectie, de standaardfout van het geschatte gemiddelde. Voor een populatietotaal komt daar een factor N bij.",
            "rules": [
              "Bij Σw² kwadrateer je iedere waarneming en tel je daarna op. Bij (Σw)² tel je eerst op en kwadrateer je de som. Dit zijn verschillende bewerkingen.",
              "De steekproefvariantie is s² = [Σw² − (Σw)²/n]/(n − 1). De standaardafwijking s is de wortel van s² en heeft weer dezelfde eenheid als de waarnemingen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formule 1: steekproefvariantie; formule 4: onzekerheid van de schatting"
              }
            ]
          }
        },
        {
          "id": "mc-rekenen-toepassing-1",
          "prompt": "Voor de waarden 2, 4 en 6 is de steekproefvariantie s² gelijk aan:",
          "options": [
            "4",
            "8/3",
            "8",
            "2"
          ],
          "correct": 0,
          "level": 2,
          "steps": [
            "Het gemiddelde is 4. De gekwadrateerde afwijkingen zijn 4, 0 en 4.",
            "Deel 8 door n − 1 = 2: s² = 4.",
            "s² = 4 is de variantie; de bijbehorende standaardafwijking is √4 = 2. Houd die twee uitkomsten apart."
          ],
          "explanation": "Het gemiddelde is 4. De gekwadrateerde afwijkingen zijn 4, 0 en 4. Deel 8 door n − 1 = 2: s² = 4. s² = 4 is de variantie; de bijbehorende standaardafwijking is √4 = 2. Houd die twee uitkomsten apart.",
          "pattern": "Herken: Een rij losse waarden en het woord “steekproefvariantie s²”. → Betekenis: De spreiding moet uit de waarnemingen worden opgebouwd. → Aanpak: Bepaal het gemiddelde, kwadrateer de afwijkingen en deel hun som door n − 1. → Gevraagd antwoord: Een variantie; neem geen wortel als s² gevraagd blijft.",
          "trap": "De wortel, 2, is s en niet s².",
          "optionExplanations": [
            "4 klopt: het gemiddelde is 4 en de kwadratensom van de afwijkingen is 8; delen door n − 1 = 2 geeft 4.",
            "8/3 deelt de kwadratensom door n. De gevraagde steekproefvariantie gebruikt n − 1 omdat het gemiddelde uit deze steekproef is geschat.",
            "8 is alleen de som van de gekwadrateerde afwijkingen. Delen door de vrijheidsgraden ontbreekt nog.",
            "2 is de wortel uit de variantie, dus de standaardafwijking s. Gevraagd is s²."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 1 en 7, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 15–19",
              "page": 15
            },
            {
              "source": "boek-h8a",
              "page": 5,
              "locator": "Boek p. 205; oorspronkelijke PDF p. 223; uitsnede p. 5"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "Een rij losse waarden en het woord “steekproefvariantie s²”.",
            "meaning": "De spreiding moet uit de waarnemingen worden opgebouwd.",
            "approach": "Bepaal het gemiddelde, kwadrateer de afwijkingen en deel hun som door n − 1.",
            "answer": "Een variantie; neem geen wortel als s² gevraagd blijft."
          },
          "guidance": {
            "title": "Som, spreiding en standaardfout",
            "focus": "Bij een uit de steekproef geschat gemiddelde heeft de steekproefvariantie n − 1 in de noemer. Neem pas daarna een wortel als s wordt gevraagd.",
            "rules": [
              "Bij Σw² kwadrateer je iedere waarneming en tel je daarna op. Bij (Σw)² tel je eerst op en kwadrateer je de som. Dit zijn verschillende bewerkingen.",
              "De steekproefvariantie is s² = [Σw² − (Σw)²/n]/(n − 1). De standaardafwijking s is de wortel van s² en heeft weer dezelfde eenheid als de waarnemingen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formule 1: steekproefvariantie; formule 4: onzekerheid van de schatting"
              }
            ]
          }
        },
        {
          "id": "mc-rekenen-toepassing-2",
          "prompt": "n = 4, Σw = 20 en Σw² = 120. Wat is de standaardafwijking s, afgerond op twee decimalen?",
          "options": [
            "2,24",
            "2,58",
            "10,95",
            "6,67"
          ],
          "correct": 1,
          "level": 3,
          "steps": [
            "s² = [120 − 20²/4]/3 = 20/3.",
            "s = √(20/3) ≈ 2,58.",
            "Rond de variantie niet onnodig vroeg af. Bereken de wortel uit 20/3 en rond pas de gevraagde standaardafwijking af."
          ],
          "explanation": "s² = [120 − 20²/4]/3 = 20/3. s = √(20/3) ≈ 2,58. Rond de variantie niet onnodig vroeg af. Bereken de wortel uit 20/3 en rond pas de gevraagde standaardafwijking af.",
          "pattern": "Herken: n, Σw en Σw² zijn gegeven; gevraagd is s op twee decimalen. → Betekenis: Dit zijn samenvattingen voor de rekenformule van de steekproefvariantie. → Aanpak: Bereken s² = [Σw² − (Σw)²/n]/(n − 1), neem daarna de wortel en rond pas af. → Gevraagd antwoord: De standaardafwijking in oorspronkelijke eenheden op twee decimalen.",
          "trap": "6,67 is de variantie; neem nog de wortel.",
          "optionExplanations": [
            "2,24 is ongeveer √5. Dat krijg je hier door de gecorrigeerde kwadratensom 20 door n = 4 te delen, in plaats van door n − 1 = 3.",
            "2,58 is √(20/3), afgerond op twee decimalen. Zowel de correctie voor het gemiddelde als de deling door n − 1 zijn verwerkt.",
            "10,95 is ongeveer √120. Σw² is niet zelf de variantie: de correctie (Σw)²/n en de deling door n − 1 ontbreken.",
            "6,67 is ongeveer s² = 20/3. Voor s moet je nog de vierkantswortel nemen."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 1 en 7, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 15–19",
              "page": 15
            },
            {
              "source": "boek-h8a",
              "page": 5,
              "locator": "Boek p. 205; oorspronkelijke PDF p. 223; uitsnede p. 5"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "n, Σw en Σw² zijn gegeven; gevraagd is s op twee decimalen.",
            "meaning": "Dit zijn samenvattingen voor de rekenformule van de steekproefvariantie.",
            "approach": "Bereken s² = [Σw² − (Σw)²/n]/(n − 1), neem daarna de wortel en rond pas af.",
            "answer": "De standaardafwijking in oorspronkelijke eenheden op twee decimalen."
          },
          "guidance": {
            "title": "Som, spreiding en standaardfout",
            "focus": "Bij een uit de steekproef geschat gemiddelde heeft de steekproefvariantie n − 1 in de noemer. Neem pas daarna een wortel als s wordt gevraagd.",
            "rules": [
              "Bij Σw² kwadrateer je iedere waarneming en tel je daarna op. Bij (Σw)² tel je eerst op en kwadrateer je de som. Dit zijn verschillende bewerkingen.",
              "De steekproefvariantie is s² = [Σw² − (Σw)²/n]/(n − 1). De standaardafwijking s is de wortel van s² en heeft weer dezelfde eenheid als de waarnemingen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formule 1: steekproefvariantie; formule 4: onzekerheid van de schatting"
              }
            ]
          }
        },
        {
          "id": "mc-rekenen-toepassing-3",
          "prompt": "s = 12 en n = 36. Negeer de eindigheidscorrectie. Welke combinatie klopt?",
          "options": [
            "Beide zijn 144",
            "Spreiding posten 2; standaardfout gemiddelde 12",
            "Spreiding posten 12; standaardfout gemiddelde 2",
            "Beide zijn 12"
          ],
          "correct": 2,
          "level": 3,
          "steps": [
            "s beschrijft de spreiding van individuele posten.",
            "De standaardfout van het gemiddelde is 12/√36 = 2.",
            "Het gemiddelde van 36 waarnemingen is minder onzeker dan één afzonderlijke waarneming, terwijl de gemeten spreiding van de posten zelf 12 blijft."
          ],
          "explanation": "s beschrijft de spreiding van individuele posten. De standaardfout van het gemiddelde is 12/√36 = 2. Het gemiddelde van 36 waarnemingen is minder onzeker dan één afzonderlijke waarneming, terwijl de gemeten spreiding van de posten zelf 12 blijft.",
          "pattern": "Herken: s en n zijn gegeven; de eindigheidscorrectie moet worden genegeerd. → Betekenis: Je moet de individuele spreiding onderscheiden van de onzekerheid van het gemiddelde. → Aanpak: Behoud s als spreiding en bereken daarnaast s/√n als standaardfout. → Gevraagd antwoord: Een combinatie van beide maten met hun juiste betekenis.",
          "trap": "De standaardfout vervangen door s maakt de intervalmarge te groot.",
          "optionExplanations": [
            "144 = 12² is de variantie van de individuele waarden. Beide gevraagde maten zijn standaardafwijkingen of standaardfouten, geen varianties.",
            "De twee maten zijn omgedraaid. De individuele spreiding is s = 12 en de standaardfout van het gemiddelde is 12/6 = 2.",
            "Dit onderscheid klopt: s = 12 beschrijft de posten, en s/√n = 2 beschrijft de onzekerheid van het gemiddelde.",
            "De standaardfout is niet gelijk aan s omdat n = 36. De deling door √36 ontbreekt."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 1 en 7, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 15–19",
              "page": 15
            },
            {
              "source": "boek-h8a",
              "page": 5,
              "locator": "Boek p. 205; oorspronkelijke PDF p. 223; uitsnede p. 5"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "s en n zijn gegeven; de eindigheidscorrectie moet worden genegeerd.",
            "meaning": "Je moet de individuele spreiding onderscheiden van de onzekerheid van het gemiddelde.",
            "approach": "Behoud s als spreiding en bereken daarnaast s/√n als standaardfout.",
            "answer": "Een combinatie van beide maten met hun juiste betekenis."
          },
          "guidance": {
            "title": "Som, spreiding en standaardfout",
            "focus": "s beschrijft spreiding tussen posten. s/√n beschrijft, zonder eindigheidscorrectie, de standaardfout van het geschatte gemiddelde. Voor een populatietotaal komt daar een factor N bij.",
            "rules": [
              "Bij Σw² kwadrateer je iedere waarneming en tel je daarna op. Bij (Σw)² tel je eerst op en kwadrateer je de som. Dit zijn verschillende bewerkingen.",
              "De steekproefvariantie is s² = [Σw² − (Σw)²/n]/(n − 1). De standaardafwijking s is de wortel van s² en heeft weer dezelfde eenheid als de waarnemingen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formule 1: steekproefvariantie; formule 4: onzekerheid van de schatting"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "onzekerheid",
      "title": "Kans, betrouwbaarheid en tabellen",
      "phase": "Basis",
      "lesson": "onzekerheid",
      "signal": "De vraag noemt betrouwbaarheid, een- of tweezijdigheid, breedte of een tabelrij.",
      "approach": "Zet betrouwbaarheid om in α, kies de juiste staart en gebruik de gegeven vrijheidsgraden.",
      "refs": [
        {
          "source": "programma",
          "locator": "Tabelregels, PDF-pagina 4",
          "page": 4
        },
        {
          "source": "slides",
          "locator": "PDF-pagina 3–5 en 14–17",
          "page": 3
        },
        {
          "source": "exam2025",
          "locator": "Vraag 3 en 6; PDF-pagina 11–12",
          "page": 11
        },
        {
          "source": "boek-basis",
          "page": 1,
          "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
        },
        {
          "source": "set-basis",
          "page": 1,
          "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
        }
      ],
      "questions": [
        {
          "id": "mc-onzekerheid-basis-1",
          "prompt": "Een tweezijdig 90%-interval heeft per staart een kans van:",
          "options": [
            "0,90",
            "0,10",
            "0,05"
          ],
          "correct": 2,
          "explanation": "90% betrouwbaarheid laat α = 1 − 0,90 = 0,10 buiten het centrale interval. Een tweezijdig interval verdeelt die totale overschrijdingskans over twee staarten. Per staart is de kans α/2 = 0,10/2 = 0,05, dus 5%.",
          "steps": [
            "90% betrouwbaarheid laat α = 1 − 0,90 = 0,10 buiten het centrale interval.",
            "Een tweezijdig interval verdeelt die totale overschrijdingskans over twee staarten.",
            "Per staart is de kans α/2 = 0,10/2 = 0,05, dus 5%."
          ],
          "pattern": "Herken: “Tweezijdig”, 90% en “per staart”. → Betekenis: De kans buiten het centrale interval wordt over twee uiteinden verdeeld. → Aanpak: Bepaal eerst α = 1 − betrouwbaarheid en neem daarna α/2. → Gevraagd antwoord: De overschrijdingskans aan één kant, niet de totale α.",
          "trap": "De totale overschrijdingskans α is tweemaal de kans in één staart.",
          "optionExplanations": [
            "0,90 is de kans in het centrale gebied, niet de kans buiten één van de grenzen.",
            "0,10 is de totale kans buiten het 90%-interval. De vraag vraagt de kans per staart, dus moet je nog door twee delen.",
            "0,05 klopt: de resterende 10% wordt gelijk verdeeld over de linker- en rechterstaart."
          ],
          "refs": [
            {
              "source": "programma",
              "locator": "Tabelregels, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 3–5 en 14–17",
              "page": 3
            },
            {
              "source": "exam2025",
              "locator": "Vraag 3 en 6; PDF-pagina 11–12",
              "page": 11
            },
            {
              "source": "boek-basis",
              "page": 1,
              "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "“Tweezijdig”, 90% en “per staart”.",
            "meaning": "De kans buiten het centrale interval wordt over twee uiteinden verdeeld.",
            "approach": "Bepaal eerst α = 1 − betrouwbaarheid en neem daarna α/2.",
            "answer": "De overschrijdingskans aan één kant, niet de totale α."
          },
          "level": 1,
          "guidance": {
            "title": "Schatting, marge en interval",
            "focus": "Zet betrouwbaarheid eerst om in α. Verdeel die resterende kans alleen over twee staarten wanneer twee grenzen worden gevraagd.",
            "rules": [
              "Een interval bestaat uit een puntschatting plus en/of min een marge E. Die marge is een kritieke t-waarde maal de standaardfout van de gevraagde schatting. De totale breedte van een tweezijdig interval is 2E.",
              "Bij betrouwbaarheid 1 − α gebruik je voor twee grenzen α/2 per staart; bij één grens gebruik je α in één staart. Kies ook de juiste vrijheidsgraden en volg de gevraagde afronding."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 2 en 4: interval en standaardfout"
              },
              {
                "source": "programma",
                "page": 4,
                "locator": "Afspraken over het gebruik van de tabellenbundel"
              }
            ]
          }
        },
        {
          "id": "mc-onzekerheid-basis-2",
          "prompt": "De totale breedte is € 12.000. Hoe groot is E?",
          "options": [
            "€ 6.000",
            "€ 24.000",
            "€ 12.000"
          ],
          "correct": 0,
          "explanation": "Een symmetrisch interval loopt van schatting − E tot schatting + E. De afstand tussen beide grenzen is daardoor E + E = 2E. Bij een totale breedte van € 12.000 is de halve breedte E = € 12.000/2 = € 6.000.",
          "steps": [
            "Een symmetrisch interval loopt van schatting − E tot schatting + E.",
            "De afstand tussen beide grenzen is daardoor E + E = 2E.",
            "Bij een totale breedte van € 12.000 is de halve breedte E = € 12.000/2 = € 6.000."
          ],
          "pattern": "Herken: “Totale breedte” en de gevraagde marge E. → Betekenis: Het interval bevat links én rechts een marge E. → Aanpak: Gebruik breedte = 2E en halveer de gegeven afstand tussen de grenzen. → Gevraagd antwoord: Een halve intervalbreedte in euro.",
          "trap": "De marge E ligt aan één kant van de schatting; de totale breedte omvat beide kanten.",
          "optionExplanations": [
            "€ 6.000 is de juiste marge: een interval van schatting − 6.000 tot schatting + 6.000 is in totaal € 12.000 breed.",
            "€ 24.000 verdubbelt de al gegeven totale breedte. Voor E moet je juist halveren.",
            "€ 12.000 is de afstand tussen onder- en bovengrens. E is slechts de helft van die afstand."
          ],
          "refs": [
            {
              "source": "programma",
              "locator": "Tabelregels, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 3–5 en 14–17",
              "page": 3
            },
            {
              "source": "exam2025",
              "locator": "Vraag 3 en 6; PDF-pagina 11–12",
              "page": 11
            },
            {
              "source": "boek-basis",
              "page": 1,
              "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "“Totale breedte” en de gevraagde marge E.",
            "meaning": "Het interval bevat links én rechts een marge E.",
            "approach": "Gebruik breedte = 2E en halveer de gegeven afstand tussen de grenzen.",
            "answer": "Een halve intervalbreedte in euro."
          },
          "level": 1,
          "guidance": {
            "title": "Schatting, marge en interval",
            "focus": "Breedte loopt van ondergrens tot bovengrens; de marge E loopt van de puntschatting tot één grens.",
            "rules": [
              "Een interval bestaat uit een puntschatting plus en/of min een marge E. Die marge is een kritieke t-waarde maal de standaardfout van de gevraagde schatting. De totale breedte van een tweezijdig interval is 2E.",
              "Bij betrouwbaarheid 1 − α gebruik je voor twee grenzen α/2 per staart; bij één grens gebruik je α in één staart. Kies ook de juiste vrijheidsgraden en volg de gevraagde afronding."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 2 en 4: interval en standaardfout"
              },
              {
                "source": "programma",
                "page": 4,
                "locator": "Afspraken over het gebruik van de tabellenbundel"
              }
            ]
          }
        },
        {
          "id": "mc-onzekerheid-basis-3",
          "prompt": "df = 164 ontbreekt; 160 en 170 staan in de tabel. Welke rij gebruik je?",
          "options": [
            "Het gemiddelde van beide",
            "160",
            "170"
          ],
          "correct": 1,
          "explanation": "De berekende vrijheidsgraden zijn 164, maar die rij is niet beschikbaar in de opgegeven tabel. Volgens de tabelafspraak in het SRA-onderwijsprogramma neem je de naast lagere beschikbare waarde. Van 160 en 170 is 160 de naast lagere rij. Dit is een tabelkeuze; de berekende df blijven 164.",
          "steps": [
            "De berekende vrijheidsgraden zijn 164, maar die rij is niet beschikbaar in de opgegeven tabel.",
            "Volgens de tabelafspraak in het SRA-onderwijsprogramma neem je de naast lagere beschikbare waarde.",
            "Van 160 en 170 is 160 de naast lagere rij. Dit is een tabelkeuze; de berekende df blijven 164."
          ],
          "pattern": "Herken: De berekende df ontbreken, maar een lagere en hogere tabelrij zijn beschikbaar. → Betekenis: Dit is een tabelkeuze volgens de cursusafspraak, geen nieuwe df-berekening. → Aanpak: Kies de naast lagere beschikbare rij; interpoleer niet. → Gevraagd antwoord: De te gebruiken tabelrij, met behoud van de oorspronkelijk berekende df.",
          "trap": "Ga niet afronden naar de dichtstbijzijnde rij of zelf interpoleren als de cursus een vaste tabelafspraak geeft.",
          "optionExplanations": [
            "Het middelen van twee tabelrijen is interpolatie. De cursus schrijft hier een rijkeuze voor, geen interpolatie.",
            "160 is de grootste beschikbare rij die lager is dan 164, en volgt daarmee de voorgeschreven SRA-tabelafspraak.",
            "170 ligt boven 164. Dat volgt niet de afspraak om de naast lagere beschikbare df te gebruiken."
          ],
          "refs": [
            {
              "source": "programma",
              "locator": "Tabelregels, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 3–5 en 14–17",
              "page": 3
            },
            {
              "source": "exam2025",
              "locator": "Vraag 3 en 6; PDF-pagina 11–12",
              "page": 11
            },
            {
              "source": "boek-basis",
              "page": 1,
              "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "De berekende df ontbreken, maar een lagere en hogere tabelrij zijn beschikbaar.",
            "meaning": "Dit is een tabelkeuze volgens de cursusafspraak, geen nieuwe df-berekening.",
            "approach": "Kies de naast lagere beschikbare rij; interpoleer niet.",
            "answer": "De te gebruiken tabelrij, met behoud van de oorspronkelijk berekende df."
          },
          "level": 2,
          "guidance": {
            "title": "Schatting, marge en interval",
            "focus": "Volgens de cursusafspraak kies je bij ontbrekende exacte vrijheidsgraden de eerst lagere beschikbare rij in de t-tabel. Bij df > 200 gebruik je echter de onderste rij van de tabel. Houd de staartkans hetzelfde.",
            "rules": [
              "Een interval bestaat uit een puntschatting plus en/of min een marge E. Die marge is een kritieke t-waarde maal de standaardfout van de gevraagde schatting. De totale breedte van een tweezijdig interval is 2E.",
              "Bij betrouwbaarheid 1 − α gebruik je voor twee grenzen α/2 per staart; bij één grens gebruik je α in één staart. Kies ook de juiste vrijheidsgraden en volg de gevraagde afronding."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 2 en 4: interval en standaardfout"
              },
              {
                "source": "programma",
                "page": 4,
                "locator": "Afspraken over het gebruik van de tabellenbundel"
              }
            ]
          }
        },
        {
          "id": "mc-onzekerheid-toepassing-1",
          "prompt": "Een tweezijdig 95%-interval heeft per staart welke overschrijdingskans?",
          "options": [
            "0,05",
            "0,025",
            "0,475",
            "0,95"
          ],
          "correct": 1,
          "level": 2,
          "steps": [
            "α = 1 − 0,95 = 0,05.",
            "Verdeel α over twee staarten: 0,025 per staart.",
            "Het centrale gebied bevat 95%; de twee buitengebieden bevatten samen 5%. Bij gelijke verdeling is ieder buitengebied 2,5%."
          ],
          "explanation": "α = 1 − 0,95 = 0,05. Verdeel α over twee staarten: 0,025 per staart. Het centrale gebied bevat 95%; de twee buitengebieden bevatten samen 5%. Bij gelijke verdeling is ieder buitengebied 2,5%.",
          "pattern": "Herken: “Tweezijdig 95%” en “per staart”. → Betekenis: De totale overschrijdingskans ligt buiten het middengebied. → Aanpak: Trek de betrouwbaarheid van 1 af en verdeel de rest gelijk over twee staarten. → Gevraagd antwoord: Een kans per staart, passend bij de kolom van een tweezijdige t-tabel.",
          "trap": "De tweezijdige p-waarde wordt later met α vergeleken, niet met α/2.",
          "optionExplanations": [
            "0,05 is de totale overschrijdingskans α. Bij twee staarten moet je die nog halveren.",
            "0,025 = (1 − 0,95)/2 is de kans in elk van de twee staarten.",
            "0,475 is de helft van het centrale gebied van 0,95. De vraag gaat over de buitenste staarten.",
            "0,95 is de centrale betrouwbaarheid, niet de overschrijdingskans in één staart."
          ],
          "refs": [
            {
              "source": "programma",
              "locator": "Tabelregels, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 3–5 en 14–17",
              "page": 3
            },
            {
              "source": "exam2025",
              "locator": "Vraag 3 en 6; PDF-pagina 11–12",
              "page": 11
            },
            {
              "source": "boek-basis",
              "page": 1,
              "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "“Tweezijdig 95%” en “per staart”.",
            "meaning": "De totale overschrijdingskans ligt buiten het middengebied.",
            "approach": "Trek de betrouwbaarheid van 1 af en verdeel de rest gelijk over twee staarten.",
            "answer": "Een kans per staart, passend bij de kolom van een tweezijdige t-tabel."
          },
          "guidance": {
            "title": "Schatting, marge en interval",
            "focus": "Zet betrouwbaarheid eerst om in α. Verdeel die resterende kans alleen over twee staarten wanneer twee grenzen worden gevraagd.",
            "rules": [
              "Een interval bestaat uit een puntschatting plus en/of min een marge E. Die marge is een kritieke t-waarde maal de standaardfout van de gevraagde schatting. De totale breedte van een tweezijdig interval is 2E.",
              "Bij betrouwbaarheid 1 − α gebruik je voor twee grenzen α/2 per staart; bij één grens gebruik je α in één staart. Kies ook de juiste vrijheidsgraden en volg de gevraagde afronding."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 2 en 4: interval en standaardfout"
              },
              {
                "source": "programma",
                "page": 4,
                "locator": "Afspraken over het gebruik van de tabellenbundel"
              }
            ]
          }
        },
        {
          "id": "mc-onzekerheid-aanvulling-bovengrens",
          "level": 2,
          "prompt": "Eigen oefenvraag. Een gemiddelde is 80, de standaardfout is 2 en de gegeven eenzijdige t-waarde is 1,711. Wat is de 95%-bovengrens?",
          "options": [
            "83,422",
            "76,578",
            "81,711",
            "86,844"
          ],
          "correct": 0,
          "optionExplanations": [
            "Tel de eenzijdige marge 1,711 × 2 = 3,422 bij het gemiddelde 80 op.",
            "Aftrekken geeft een ondergrens. Hier wordt juist om de bovengrens gevraagd.",
            "Dit telt alleen t bij het gemiddelde op en laat de standaardfout 2 weg.",
            "Dit verdubbelt de marge. Voor één bovengrens gebruik je één keer t maal standaardfout."
          ],
          "steps": [
            "Gevraagd is één bovengrens, dus gebruik de gegeven eenzijdige t.",
            "Marge = 1,711 × 2 = 3,422.",
            "Bovengrens = 80 + 3,422 = 83,422. Dit begrenst het populatiegemiddelde, niet iedere losse waarneming."
          ],
          "explanation": "Gevraagd is één bovengrens, dus gebruik de gegeven eenzijdige t. Marge = 1,711 × 2 = 3,422. Bovengrens = 80 + 3,422 = 83,422. Dit begrenst het populatiegemiddelde, niet iedere losse waarneming.",
          "pattern": "Herken: “95%-bovengrens” en een expliciet gegeven eenzijdige t-waarde. → Betekenis: Er wordt één grens voor het populatiegemiddelde gevraagd. → Aanpak: Bereken gemiddelde + t × standaardfout met de gegeven eenzijdige t. → Gevraagd antwoord: Eén bovengrens; geen tweezijdig interval of grens voor iedere losse waarneming.",
          "trap": "Gebruik niet automatisch de tweezijdige t-waarde of de volledige intervalbreedte.",
          "refs": [
            {
              "source": "programma",
              "locator": "Tabelregels, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 3–5 en 14–17",
              "page": 3
            },
            {
              "source": "exam2025",
              "locator": "Vraag 3 en 6; PDF-pagina 11–12",
              "page": 11
            },
            {
              "source": "boek-basis",
              "page": 1,
              "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "“95%-bovengrens” en een expliciet gegeven eenzijdige t-waarde.",
            "meaning": "Er wordt één grens voor het populatiegemiddelde gevraagd.",
            "approach": "Bereken gemiddelde + t × standaardfout met de gegeven eenzijdige t.",
            "answer": "Eén bovengrens; geen tweezijdig interval of grens voor iedere losse waarneming."
          },
          "guidance": {
            "title": "Schatting, marge en interval",
            "focus": "Gebruik voor een bovengrens de puntschatting plus de marge en de gegeven eenzijdige kritieke waarde.",
            "rules": [
              "Een interval bestaat uit een puntschatting plus en/of min een marge E. Die marge is een kritieke t-waarde maal de standaardfout van de gevraagde schatting. De totale breedte van een tweezijdig interval is 2E.",
              "Bij betrouwbaarheid 1 − α gebruik je voor twee grenzen α/2 per staart; bij één grens gebruik je α in één staart. Kies ook de juiste vrijheidsgraden en volg de gevraagde afronding."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 2 en 4: interval en standaardfout"
              },
              {
                "source": "programma",
                "page": 4,
                "locator": "Afspraken over het gebruik van de tabellenbundel"
              }
            ]
          }
        },
        {
          "id": "mc-onzekerheid-toepassing-2",
          "prompt": "Ŵ = € 101.250, standaardfout = € 1.200 en t = 2. Rond het interval naar buiten af op honderden euro’s.",
          "options": [
            "[€ 100.000; € 102.500]",
            "[€ 98.900; € 103.700]",
            "[€ 98.800; € 103.700]",
            "[€ 98.800; € 103.600]"
          ],
          "correct": 2,
          "level": 3,
          "steps": [
            "De marge is 2.400: exacte grenzen 98.850 en 103.650.",
            "Naar buiten afronden geeft onder 98.800 en boven 103.700.",
            "Naar buiten afronden mag het berekende interval verruimen, maar geen mogelijke waarden uit het oorspronkelijke interval afsnijden."
          ],
          "explanation": "De marge is 2.400: exacte grenzen 98.850 en 103.650. Naar buiten afronden geeft onder 98.800 en boven 103.700. Naar buiten afronden mag het berekende interval verruimen, maar geen mogelijke waarden uit het oorspronkelijke interval afsnijden.",
          "pattern": "Herken: Ŵ, standaardfout, t en “naar buiten afronden op honderden”. → Betekenis: Je zoekt een interval dat door afronding niet smaller wordt. → Aanpak: Bereken Ŵ ± t × standaardfout; rond de ondergrens omlaag en de bovengrens omhoog. → Gevraagd antwoord: Twee grenzen in honderden euro, met de juiste afrondingsrichting.",
          "trap": "Gewoon afronden kan een grens naar binnen verschuiven.",
          "optionExplanations": [
            "Deze grenzen volgen niet uit de marge van € 2.400. Bereken eerst 101.250 ± 2.400 en rond daarna de afzonderlijke grenzen naar buiten af.",
            "De bovengrens is goed naar buiten afgerond, maar 98.900 ligt boven de exacte ondergrens 98.850 en maakt het interval onderaan te klein.",
            "98.800 ligt onder 98.850 en 103.700 boven 103.650. Beide grenzen zijn dus op honderden naar buiten afgerond.",
            "De ondergrens klopt, maar 103.600 ligt onder de exacte bovengrens 103.650. Daarmee rond je bovenaan naar binnen af."
          ],
          "refs": [
            {
              "source": "programma",
              "locator": "Tabelregels, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 3–5 en 14–17",
              "page": 3
            },
            {
              "source": "exam2025",
              "locator": "Vraag 3 en 6; PDF-pagina 11–12",
              "page": 11
            },
            {
              "source": "boek-basis",
              "page": 1,
              "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "Ŵ, standaardfout, t en “naar buiten afronden op honderden”.",
            "meaning": "Je zoekt een interval dat door afronding niet smaller wordt.",
            "approach": "Bereken Ŵ ± t × standaardfout; rond de ondergrens omlaag en de bovengrens omhoog.",
            "answer": "Twee grenzen in honderden euro, met de juiste afrondingsrichting."
          },
          "guidance": {
            "title": "Schatting, marge en interval",
            "focus": "Werk eerst de berekening uit met ongeronde tussenwaarden. Bij naar buiten afronden gaat de ondergrens omlaag en de bovengrens omhoog op de gevraagde eenheid.",
            "rules": [
              "Een interval bestaat uit een puntschatting plus en/of min een marge E. Die marge is een kritieke t-waarde maal de standaardfout van de gevraagde schatting. De totale breedte van een tweezijdig interval is 2E.",
              "Bij betrouwbaarheid 1 − α gebruik je voor twee grenzen α/2 per staart; bij één grens gebruik je α in één staart. Kies ook de juiste vrijheidsgraden en volg de gevraagde afronding."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 2 en 4: interval en standaardfout"
              },
              {
                "source": "programma",
                "page": 4,
                "locator": "Afspraken over het gebruik van de tabellenbundel"
              }
            ]
          }
        },
        {
          "id": "mc-onzekerheid-toepassing-3",
          "prompt": "Je wilt een smallere intervalmarge, terwijl betrouwbaarheid en spreiding gelijk blijven. Welke ingreep helpt?",
          "options": [
            "Minder decimalen gebruiken",
            "De totale breedte als standaardfout behandelen",
            "Een kleinere steekproef",
            "Een grotere steekproef"
          ],
          "correct": 3,
          "level": 3,
          "steps": [
            "De standaardfout neemt af als n toeneemt.",
            "Bij dezelfde kritieke waarde wordt ook de marge kleiner.",
            "De intervalmarge is een kritieke waarde maal een standaardfout. Bij gelijkblijvende betrouwbaarheid en spreiding kan meer informatie die standaardfout verkleinen."
          ],
          "explanation": "De standaardfout neemt af als n toeneemt. Bij dezelfde kritieke waarde wordt ook de marge kleiner. De intervalmarge is een kritieke waarde maal een standaardfout. Bij gelijkblijvende betrouwbaarheid en spreiding kan meer informatie die standaardfout verkleinen.",
          "pattern": "Herken: “Smallere intervalmarge” terwijl betrouwbaarheid en spreiding gelijk blijven. → Betekenis: Bij gelijke t en s moet de standaardfout kleiner worden. → Aanpak: Kijk naar n in s/√n: meer waarnemingen verlagen deze onzekerheid. → Gevraagd antwoord: Een ingreep die de marge verkleint zonder het gekozen betrouwbaarheidsniveau te verlagen.",
          "trap": "Afronden verbetert de statistische nauwkeurigheid niet.",
          "optionExplanations": [
            "Minder decimalen verandert alleen de weergave. Het levert geen extra informatie en verlaagt de berekende onzekerheid niet.",
            "De totale breedte is 2E en een standaardfout is een andere grootheid. Het verwisselen van de maten verbetert de nauwkeurigheid niet.",
            "Een kleinere steekproef vergroot doorgaans de standaardfout en dus de intervalmarge.",
            "Een grotere n verkleint de standaardfout, bijvoorbeeld via s/√n. De marge wordt daardoor kleiner bij dezelfde betrouwbaarheid."
          ],
          "refs": [
            {
              "source": "programma",
              "locator": "Tabelregels, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 3–5 en 14–17",
              "page": 3
            },
            {
              "source": "exam2025",
              "locator": "Vraag 3 en 6; PDF-pagina 11–12",
              "page": 11
            },
            {
              "source": "boek-basis",
              "page": 1,
              "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
            },
            {
              "source": "set-basis",
              "page": 1,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 3; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "“Smallere intervalmarge” terwijl betrouwbaarheid en spreiding gelijk blijven.",
            "meaning": "Bij gelijke t en s moet de standaardfout kleiner worden.",
            "approach": "Kijk naar n in s/√n: meer waarnemingen verlagen deze onzekerheid.",
            "answer": "Een ingreep die de marge verkleint zonder het gekozen betrouwbaarheidsniveau te verlagen."
          },
          "guidance": {
            "title": "Schatting, marge en interval",
            "focus": "Bij gelijkblijvende betrouwbaarheid en spreiding vermindert een grotere geschikte steekproef de standaardfout. Afronden is geen statistische verbetering.",
            "rules": [
              "Een interval bestaat uit een puntschatting plus en/of min een marge E. Die marge is een kritieke t-waarde maal de standaardfout van de gevraagde schatting. De totale breedte van een tweezijdig interval is 2E.",
              "Bij betrouwbaarheid 1 − α gebruik je voor twee grenzen α/2 per staart; bij één grens gebruik je α in één staart. Kies ook de juiste vrijheidsgraden en volg de gevraagde afronding."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 2 en 4: interval en standaardfout"
              },
              {
                "source": "programma",
                "page": 4,
                "locator": "Afspraken over het gebruik van de tabellenbundel"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "mpu",
      "title": "De directe schatter (MPU)",
      "phase": "Schatten",
      "lesson": "mpu",
      "signal": "Je schat een totaal met werkelijke waarden zonder correctie op een bekend boektotaal.",
      "approach": "Gebruik Nw̄ en de spreiding s_w, inclusief de eindigheidscorrectie indien nodig.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formules 1–5, PDF-pagina 1",
          "page": 1
        },
        {
          "source": "slides",
          "locator": "PDF-pagina 13–19",
          "page": 13
        },
        {
          "source": "uitwerkingen",
          "locator": "H8 opgave 1–3, PDF-pagina 4–5",
          "page": 4
        },
        {
          "source": "boek-h8a",
          "page": 3,
          "locator": "Boek p. 203; oorspronkelijke PDF p. 221; uitsnede p. 3"
        },
        {
          "source": "boek-basis",
          "page": 1,
          "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
        }
      ],
      "questions": [
        {
          "id": "mc-mpu-basis-1",
          "prompt": "N = 2.000 en w̄ = 150. Wat is Ŵ_MPU?",
          "options": [
            "€ 300.000",
            "€ 150",
            "€ 13,33"
          ],
          "correct": 0,
          "explanation": "De directe schatter MPU gebruikt het gemiddelde van de werkelijke steekproefwaarden voor de gehele populatie. Vermenigvuldig het gemiddelde per post met het aantal populatieposten: Ŵ_MPU = Nw̄. Invullen geeft 2.000 × € 150 = € 300.000. Dit is een geschat totaal, nog zonder onzekerheidsmarge.",
          "steps": [
            "De directe schatter MPU gebruikt het gemiddelde van de werkelijke steekproefwaarden voor de gehele populatie.",
            "Vermenigvuldig het gemiddelde per post met het aantal populatieposten: Ŵ_MPU = Nw̄.",
            "Invullen geeft 2.000 × € 150 = € 300.000. Dit is een geschat totaal, nog zonder onzekerheidsmarge."
          ],
          "pattern": "Herken: N en w̄, met Ŵ_MPU als gevraagde grootheid. → Betekenis: De directe schatter projecteert het werkelijke gemiddelde naar de populatie. → Aanpak: Gebruik Ŵ_MPU = Nw̄: aantal populatieposten maal bedrag per post. → Gevraagd antwoord: Een geschat werkelijk populatietotaal.",
          "trap": "Een bedrag per post is nog geen totaalbedrag voor alle posten.",
          "optionExplanations": [
            "€ 300.000 klopt: iedere populatiepost krijgt in deze schatting het gemiddelde van € 150 mee.",
            "€ 150 is het gemiddelde per post. Voor het populatietotaal ontbreekt de vermenigvuldiging met 2.000.",
            "€ 13,33 ontstaat ongeveer uit 2.000/150. De directe schatter vermenigvuldigt het aantal posten met het bedrag per post."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 1–5, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 13–19",
              "page": 13
            },
            {
              "source": "uitwerkingen",
              "locator": "H8 opgave 1–3, PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "boek-h8a",
              "page": 3,
              "locator": "Boek p. 203; oorspronkelijke PDF p. 221; uitsnede p. 3"
            },
            {
              "source": "boek-basis",
              "page": 1,
              "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "N en w̄, met Ŵ_MPU als gevraagde grootheid.",
            "meaning": "De directe schatter projecteert het werkelijke gemiddelde naar de populatie.",
            "approach": "Gebruik Ŵ_MPU = Nw̄: aantal populatieposten maal bedrag per post.",
            "answer": "Een geschat werkelijk populatietotaal."
          },
          "level": 1,
          "guidance": {
            "title": "Directe schatter van een populatietotaal",
            "focus": "Verwar de onderzochte n posten niet met alle N posten: de vraag gaat over het totale bedrag van de populatie.",
            "rules": [
              "De MPU-schatter gebruikt de werkelijke waarden: Ŵ = N × w̄. N hoort bij de hele populatie; w̄ en de spreiding s_w worden uit de steekproef bepaald.",
              "De standaardfout van dit totaal is N × s_w/√n × √((N − n)/(N − 1)). Een interval volgt uit Ŵ ± t × standaardfout. Laat de eindigheidscorrectie alleen weg als dat is toegestaan of expliciet wordt gevraagd."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 1-5: directe schatter"
              },
              {
                "source": "boek-basis",
                "page": 1,
                "locator": "Boek p. 92; oorspronkelijke PDF p. 110: voorwaarden en scheefheid"
              }
            ]
          }
        },
        {
          "id": "mc-mpu-basis-2",
          "prompt": "Welke spreiding gebruikt MPU?",
          "options": [
            "Alleen de boekwaarden",
            "Die van de werkelijke waarden",
            "Die van de verschillen b − w"
          ],
          "correct": 1,
          "explanation": "MPU schat W rechtstreeks uit de werkelijke steekproefwaarden w. De bijpassende spreidingsmaat is daarom s_w, de standaardafwijking van die werkelijke waarden. Voor de standaardfout van het totaal wordt s_w geschaald met N/√n en, indien van toepassing, de eindigheidscorrectie.",
          "steps": [
            "MPU schat W rechtstreeks uit de werkelijke steekproefwaarden w.",
            "De bijpassende spreidingsmaat is daarom s_w, de standaardafwijking van die werkelijke waarden.",
            "Voor de standaardfout van het totaal wordt s_w geschaald met N/√n en, indien van toepassing, de eindigheidscorrectie."
          ],
          "pattern": "Herken: “Welke spreiding” in combinatie met MPU. → Betekenis: De onzekerheid moet aansluiten bij de gegevens waarop de schatter berust. → Aanpak: MPU gebruikt werkelijke waarden w; zoek dus hun standaardafwijking s_w. → Gevraagd antwoord: De bijbehorende spreidingsmaat, geen spreiding van boekwaarden of controlefouten.",
          "trap": "Kies de spreidingsmaat bij de gebruikte schatter; boekwaarden en fouten zijn andere gegevens.",
          "optionExplanations": [
            "Alleen de boekwaarden laten de spreiding van de gecontroleerde werkelijke waarden niet zien. Voor MPU heb je s_w nodig.",
            "MPU gebruikt de werkelijke waarden. De standaardafwijking s_w beschrijft de spreiding die in zijn standaardfout nodig is.",
            "De spreiding van b − w hoort bij de verschilschatter. Dat is een andere schatter, die het bekende boektotaal corrigeert."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 1–5, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 13–19",
              "page": 13
            },
            {
              "source": "uitwerkingen",
              "locator": "H8 opgave 1–3, PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "boek-h8a",
              "page": 3,
              "locator": "Boek p. 203; oorspronkelijke PDF p. 221; uitsnede p. 3"
            },
            {
              "source": "boek-basis",
              "page": 1,
              "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "“Welke spreiding” in combinatie met MPU.",
            "meaning": "De onzekerheid moet aansluiten bij de gegevens waarop de schatter berust.",
            "approach": "MPU gebruikt werkelijke waarden w; zoek dus hun standaardafwijking s_w.",
            "answer": "De bijbehorende spreidingsmaat, geen spreiding van boekwaarden of controlefouten."
          },
          "level": 1,
          "guidance": {
            "title": "Directe schatter van een populatietotaal",
            "focus": "Kies de spreiding van werkelijke waarden. MPU gebruikt geen verschil- of ratiocorrectie op een bekend boektotaal.",
            "rules": [
              "De MPU-schatter gebruikt de werkelijke waarden: Ŵ = N × w̄. N hoort bij de hele populatie; w̄ en de spreiding s_w worden uit de steekproef bepaald.",
              "De standaardfout van dit totaal is N × s_w/√n × √((N − n)/(N − 1)). Een interval volgt uit Ŵ ± t × standaardfout. Laat de eindigheidscorrectie alleen weg als dat is toegestaan of expliciet wordt gevraagd."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 1-5: directe schatter"
              },
              {
                "source": "boek-basis",
                "page": 1,
                "locator": "Boek p. 92; oorspronkelijke PDF p. 110: voorwaarden en scheefheid"
              }
            ]
          }
        },
        {
          "id": "mc-mpu-basis-3",
          "prompt": "Wat doet de eindigheidscorrectie als n = N?",
          "options": [
            "Wordt N",
            "Wordt 1",
            "Wordt 0"
          ],
          "correct": 2,
          "explanation": "De eindigheidscorrectie is √((N − n)/(N − 1)). Als alle populatieposten zijn onderzocht, is n = N en wordt N − n = 0; de correctiefactor is dus nul. Daarmee verdwijnt de onzekerheid door steekproeftrekking. De individuele posten kunnen onderling nog wel verschillen.",
          "steps": [
            "De eindigheidscorrectie is √((N − n)/(N − 1)).",
            "Als alle populatieposten zijn onderzocht, is n = N en wordt N − n = 0; de correctiefactor is dus nul.",
            "Daarmee verdwijnt de onzekerheid door steekproeftrekking. De individuele posten kunnen onderling nog wel verschillen."
          ],
          "pattern": "Herken: n = N bij de eindigheidscorrectie. → Betekenis: Iedere populatiepost is onderzocht: er blijft geen onzekerheid door steekproeftrekking over. → Aanpak: Vul n = N in √((N − n)/(N − 1)) in en bekijk de teller. → Gevraagd antwoord: Het gevolg voor correctiefactor en standaardfout, niet voor de spreiding tussen posten.",
          "trap": "Geen steekproefonzekerheid betekent niet dat er geen spreiding of geen mogelijke meetfout bestaat.",
          "optionExplanations": [
            "N is een aantal posten, geen uitkomst van deze correctiefactor. Invullen in de teller geeft N − N = 0.",
            "Een factor 1 zou de standaardfout ongewijzigd laten. Bij integrale controle is juist geen onzekerheid door steekproeftrekking over.",
            "De teller N − n is nul, dus de wortel en daarmee de correctiefactor worden nul."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 1–5, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 13–19",
              "page": 13
            },
            {
              "source": "uitwerkingen",
              "locator": "H8 opgave 1–3, PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "boek-h8a",
              "page": 3,
              "locator": "Boek p. 203; oorspronkelijke PDF p. 221; uitsnede p. 3"
            },
            {
              "source": "boek-basis",
              "page": 1,
              "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "n = N bij de eindigheidscorrectie.",
            "meaning": "Iedere populatiepost is onderzocht: er blijft geen onzekerheid door steekproeftrekking over.",
            "approach": "Vul n = N in √((N − n)/(N − 1)) in en bekijk de teller.",
            "answer": "Het gevolg voor correctiefactor en standaardfout, niet voor de spreiding tussen posten."
          },
          "level": 2,
          "guidance": {
            "title": "Directe schatter van een populatietotaal",
            "focus": "Wanneer alle posten zijn gecontroleerd, resteert geen steekproefonzekerheid over hun totaal. De posten zelf kunnen nog steeds onderling verschillen.",
            "rules": [
              "De MPU-schatter gebruikt de werkelijke waarden: Ŵ = N × w̄. N hoort bij de hele populatie; w̄ en de spreiding s_w worden uit de steekproef bepaald.",
              "De standaardfout van dit totaal is N × s_w/√n × √((N − n)/(N − 1)). Een interval volgt uit Ŵ ± t × standaardfout. Laat de eindigheidscorrectie alleen weg als dat is toegestaan of expliciet wordt gevraagd."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 1-5: directe schatter"
              },
              {
                "source": "boek-basis",
                "page": 1,
                "locator": "Boek p. 92; oorspronkelijke PDF p. 110: voorwaarden en scheefheid"
              }
            ]
          }
        },
        {
          "id": "mc-mpu-toepassing-1",
          "prompt": "N = 1.000, n = 100, w̄ = 80 en s_w = 20. Zonder eindigheidscorrectie is de standaardfout van het geschatte totaal:",
          "options": [
            "20",
            "200",
            "2.000",
            "2"
          ],
          "correct": 2,
          "level": 2,
          "steps": [
            "De standaardfout van het gemiddelde is 20/√100 = 2.",
            "Voor het totaal: N × 2 = 2.000.",
            "De standaardfout hoort bij de gevraagde grootheid. Opschalen van een gemiddelde naar een totaal met N schaalt ook de standaardfout met N."
          ],
          "explanation": "De standaardfout van het gemiddelde is 20/√100 = 2. Voor het totaal: N × 2 = 2.000. De standaardfout hoort bij de gevraagde grootheid. Opschalen van een gemiddelde naar een totaal met N schaalt ook de standaardfout met N.",
          "pattern": "Herken: “Standaardfout van het geschatte totaal”, N, n en s_w; zonder eindigheidscorrectie. → Betekenis: De standaardfout van een gemiddelde moet worden opgeschaald naar alle posten. → Aanpak: Bereken eerst s_w/√n en vermenigvuldig daarna met N. → Gevraagd antwoord: Een standaardfout van het totaal, geen totaalschatting Nw̄.",
          "trap": "2 hoort bij het gemiddelde, niet bij het totaal.",
          "optionExplanations": [
            "20 is de individuele standaardafwijking s_w, geen standaardfout van het totaal.",
            "200 = 100 × 2 schaalt met n. Het totale bedrag betreft alle N = 1.000 posten en vraagt dus 1.000 × 2.",
            "2.000 = 1.000 × (20/√100) is de standaardfout van het geschatte populatietotaal.",
            "2 = 20/√100 is de standaardfout van het gemiddelde. Voor de standaardfout van het totaal ontbreekt N = 1.000."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 1–5, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 13–19",
              "page": 13
            },
            {
              "source": "uitwerkingen",
              "locator": "H8 opgave 1–3, PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "boek-h8a",
              "page": 3,
              "locator": "Boek p. 203; oorspronkelijke PDF p. 221; uitsnede p. 3"
            },
            {
              "source": "boek-basis",
              "page": 1,
              "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "“Standaardfout van het geschatte totaal”, N, n en s_w; zonder eindigheidscorrectie.",
            "meaning": "De standaardfout van een gemiddelde moet worden opgeschaald naar alle posten.",
            "approach": "Bereken eerst s_w/√n en vermenigvuldig daarna met N.",
            "answer": "Een standaardfout van het totaal, geen totaalschatting Nw̄."
          },
          "guidance": {
            "title": "Directe schatter van een populatietotaal",
            "focus": "Gevraagd is de standaardfout van het totaal, niet die van één post of alleen het gemiddelde. Volg de expliciete aanname over de eindigheidscorrectie.",
            "rules": [
              "De MPU-schatter gebruikt de werkelijke waarden: Ŵ = N × w̄. N hoort bij de hele populatie; w̄ en de spreiding s_w worden uit de steekproef bepaald.",
              "De standaardfout van dit totaal is N × s_w/√n × √((N − n)/(N − 1)). Een interval volgt uit Ŵ ± t × standaardfout. Laat de eindigheidscorrectie alleen weg als dat is toegestaan of expliciet wordt gevraagd."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 1-5: directe schatter"
              },
              {
                "source": "boek-basis",
                "page": 1,
                "locator": "Boek p. 92; oorspronkelijke PDF p. 110: voorwaarden en scheefheid"
              }
            ]
          }
        },
        {
          "id": "mc-mpu-aanvulling-scheef",
          "level": 2,
          "prompt": "Eigen oefenvraag. Je hebt aselect 120 posten gekozen uit een extreem scheve populatie. Welke uitspraak is juist?",
          "options": [
            "De t-waarde mag altijd nul worden",
            "Beoordeel of de normale benadering bruikbaar is",
            "Vanaf n = 100 is ieder interval gegarandeerd geldig",
            "De populatie wordt normaal verdeeld door de steekproef"
          ],
          "correct": 1,
          "optionExplanations": [
            "Een grotere steekproef neemt de gekozen onzekerheidsmarge niet automatisch volledig weg.",
            "n ≥ 100 is een cursusvuistregel; extreme scheefheid kan een grotere steekproef noodzakelijk maken.",
            "De vuistregel garandeert geen geldige benadering bij iedere mogelijke populatieverdeling.",
            "Meer controles veranderen de verdeling van de oorspronkelijke populatie niet."
          ],
          "steps": [
            "De selectie is aselect, maar de populatie is extreem scheef.",
            "Het boek nuanceert de cursusgrens n ≥ 100.",
            "Beoordeel de benadering en de spreiding voordat je de intervaluitkomst gebruikt."
          ],
          "explanation": "De selectie is aselect, maar de populatie is extreem scheef. Het boek nuanceert de cursusgrens n ≥ 100. Beoordeel de benadering en de spreiding voordat je de intervaluitkomst gebruikt.",
          "pattern": "Herken: Een aselecte steekproef boven de cursusgrens én “extreem scheve populatie”. → Betekenis: Aselecte selectie en bruikbaarheid van de normale benadering zijn afzonderlijke voorwaarden. → Aanpak: Beoordeel of de scheefheid de benadering problematisch maakt ondanks de omvangsvuistregel. → Gevraagd antwoord: Een voorwaardelijk oordeel over het interval, geen automatische garantie door n alleen.",
          "trap": "Een cursusvuistregel is geen garantie voor iedere verdeling.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 1–5, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 13–19",
              "page": 13
            },
            {
              "source": "uitwerkingen",
              "locator": "H8 opgave 1–3, PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "boek-h8a",
              "page": 3,
              "locator": "Boek p. 203; oorspronkelijke PDF p. 221; uitsnede p. 3"
            },
            {
              "source": "boek-basis",
              "page": 1,
              "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "Een aselecte steekproef boven de cursusgrens én “extreem scheve populatie”.",
            "meaning": "Aselecte selectie en bruikbaarheid van de normale benadering zijn afzonderlijke voorwaarden.",
            "approach": "Beoordeel of de scheefheid de benadering problematisch maakt ondanks de omvangsvuistregel.",
            "answer": "Een voorwaardelijk oordeel over het interval, geen automatische garantie door n alleen."
          },
          "guidance": {
            "title": "Directe schatter van een populatietotaal",
            "focus": "Aselecte selectie en een grote n zijn belangrijk, maar bij een extreem scheve populatie kan een gebruikelijke omvangsgrens onvoldoende zijn voor de normale benadering.",
            "rules": [
              "De MPU-schatter gebruikt de werkelijke waarden: Ŵ = N × w̄. N hoort bij de hele populatie; w̄ en de spreiding s_w worden uit de steekproef bepaald.",
              "De standaardfout van dit totaal is N × s_w/√n × √((N − n)/(N − 1)). Een interval volgt uit Ŵ ± t × standaardfout. Laat de eindigheidscorrectie alleen weg als dat is toegestaan of expliciet wordt gevraagd."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 1-5: directe schatter"
              },
              {
                "source": "boek-basis",
                "page": 1,
                "locator": "Boek p. 92; oorspronkelijke PDF p. 110: voorwaarden en scheefheid"
              }
            ]
          }
        },
        {
          "id": "mc-mpu-toepassing-2",
          "prompt": "N = 1.000, n = 100, w̄ = 80, s_w = 20, t = 2. Met eindigheidscorrectie √(900/999): welk interval volgt bij benadering?",
          "options": [
            "[€ 40.000; € 120.000]",
            "[€ 78.000; € 82.000]",
            "[€ 79.996; € 80.004]",
            "[€ 76.203; € 83.797]"
          ],
          "correct": 3,
          "level": 3,
          "steps": [
            "Ŵ = 1.000 × 80 = 80.000.",
            "s_MPU = 1.000 × 20/10 × √(900/999) ≈ 1.898,32.",
            "De marge is circa 3.796,63.",
            "De eindigheidscorrectie verlaagt de standaardfout omdat 100 van de 1.000 posten zijn waargenomen. De marge blijft t maal die gecorrigeerde standaardfout."
          ],
          "explanation": "Ŵ = 1.000 × 80 = 80.000. s_MPU = 1.000 × 20/10 × √(900/999) ≈ 1.898,32. De marge is circa 3.796,63. De eindigheidscorrectie verlaagt de standaardfout omdat 100 van de 1.000 posten zijn waargenomen. De marge blijft t maal die gecorrigeerde standaardfout.",
          "pattern": "Herken: MPU-gegevens, t en een expliciete eindigheidscorrectie; gevraagd is een interval. → Betekenis: Het middelpunt en de marge gebruiken verschillende gegevens. → Aanpak: Neem Nw̄ als middelpunt en t × N × s_w/√n × correctiefactor als marge. → Gevraagd antwoord: Een onder- en bovengrens voor het werkelijke populatietotaal.",
          "trap": "De factor t moet ook worden toegepast.",
          "optionExplanations": [
            "De marge van € 40.000 volgt niet uit de standaardfoutformule. Onder meer de deling door √100 moet worden verwerkt.",
            "Een marge van € 2.000 verwerkt de gegeven combinatie van t en eindigheidscorrectie niet. De berekende standaardfout is circa € 1.898,32 en moet nog met 2 worden vermenigvuldigd.",
            "De marge is ongeveer 4 in plaats van 3.797. Dat mist de opschaling van onzekerheid van een gemiddelde naar die van het totaal met N.",
            "Het centrum is € 80.000 en de marge circa € 3.796,63. Afronden van de grenzen geeft ongeveer [€ 76.203; € 83.797]."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 1–5, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 13–19",
              "page": 13
            },
            {
              "source": "uitwerkingen",
              "locator": "H8 opgave 1–3, PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "boek-h8a",
              "page": 3,
              "locator": "Boek p. 203; oorspronkelijke PDF p. 221; uitsnede p. 3"
            },
            {
              "source": "boek-basis",
              "page": 1,
              "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "MPU-gegevens, t en een expliciete eindigheidscorrectie; gevraagd is een interval.",
            "meaning": "Het middelpunt en de marge gebruiken verschillende gegevens.",
            "approach": "Neem Nw̄ als middelpunt en t × N × s_w/√n × correctiefactor als marge.",
            "answer": "Een onder- en bovengrens voor het werkelijke populatietotaal."
          },
          "guidance": {
            "title": "Directe schatter van een populatietotaal",
            "focus": "Bereken achtereenvolgens de puntschatting, standaardfout en marge. De eindigheidscorrectie hoort in de standaardfout, niet in de puntschatting.",
            "rules": [
              "De MPU-schatter gebruikt de werkelijke waarden: Ŵ = N × w̄. N hoort bij de hele populatie; w̄ en de spreiding s_w worden uit de steekproef bepaald.",
              "De standaardfout van dit totaal is N × s_w/√n × √((N − n)/(N − 1)). Een interval volgt uit Ŵ ± t × standaardfout. Laat de eindigheidscorrectie alleen weg als dat is toegestaan of expliciet wordt gevraagd."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 1-5: directe schatter"
              },
              {
                "source": "boek-basis",
                "page": 1,
                "locator": "Boek p. 92; oorspronkelijke PDF p. 110: voorwaarden en scheefheid"
              }
            ]
          }
        },
        {
          "id": "mc-mpu-toepassing-3",
          "prompt": "Alle 500 posten zijn gecontroleerd. Hun werkelijke gemiddelde is € 40. Welke uitkomst past bij MPU?",
          "options": [
            "Totaal € 20.000; steekproefstandaardfout nul",
            "Totaal € 40; standaardfout onbekend",
            "Totaal € 20.000; standaardfout altijd 40",
            "Er kan geen totaal worden bepaald"
          ],
          "correct": 0,
          "level": 3,
          "steps": [
            "Het totaal is Nw̄ = 500 × 40 = 20.000.",
            "Bij n = N wordt de eindigheidscorrectie nul.",
            "Het totaal van alle gecontroleerde werkelijke waarden is bekend. De nulstandaardfout betreft alleen onzekerheid door steekproeftrekking, niet alle denkbare registratieproblemen."
          ],
          "explanation": "Het totaal is Nw̄ = 500 × 40 = 20.000. Bij n = N wordt de eindigheidscorrectie nul. Het totaal van alle gecontroleerde werkelijke waarden is bekend. De nulstandaardfout betreft alleen onzekerheid door steekproeftrekking, niet alle denkbare registratieproblemen.",
          "pattern": "Herken: “Alle 500 posten” gecontroleerd en een werkelijk gemiddelde. → Betekenis: Dit is integrale controle: n = N. → Aanpak: Vermenigvuldig N met het gemiddelde en pas de eindigheidscorrectie voor n = N toe. → Gevraagd antwoord: Het totaal met nul steekproefonzekerheid; niet de uitspraak dat alle posten gelijk zijn.",
          "trap": "Dit zegt niet dat meet- of registratiefouten onmogelijk zijn.",
          "optionExplanations": [
            "500 × € 40 = € 20.000. Omdat n = N is de eindigheidscorrectie nul en resteert geen steekproefstandaardfout.",
            "€ 40 is het gemiddelde per post, niet het totaal. Het totaal is berekenbaar en de steekproefstandaardfout is hier nul.",
            "Het totaal klopt, maar 40 is een gemiddelde en geen standaardfout. Bij integrale controle is de steekproefstandaardfout nul.",
            "Zowel het aantal posten als hun werkelijke gemiddelde is bekend. Daarmee is het totaal juist direct te berekenen."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 1–5, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 13–19",
              "page": 13
            },
            {
              "source": "uitwerkingen",
              "locator": "H8 opgave 1–3, PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "boek-h8a",
              "page": 3,
              "locator": "Boek p. 203; oorspronkelijke PDF p. 221; uitsnede p. 3"
            },
            {
              "source": "boek-basis",
              "page": 1,
              "locator": "Boek p. 92; oorspronkelijke PDF p. 110; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "“Alle 500 posten” gecontroleerd en een werkelijk gemiddelde.",
            "meaning": "Dit is integrale controle: n = N.",
            "approach": "Vermenigvuldig N met het gemiddelde en pas de eindigheidscorrectie voor n = N toe.",
            "answer": "Het totaal met nul steekproefonzekerheid; niet de uitspraak dat alle posten gelijk zijn."
          },
          "guidance": {
            "title": "Directe schatter van een populatietotaal",
            "focus": "Wanneer alle posten zijn gecontroleerd, resteert geen steekproefonzekerheid over hun totaal. De posten zelf kunnen nog steeds onderling verschillen.",
            "rules": [
              "De MPU-schatter gebruikt de werkelijke waarden: Ŵ = N × w̄. N hoort bij de hele populatie; w̄ en de spreiding s_w worden uit de steekproef bepaald.",
              "De standaardfout van dit totaal is N × s_w/√n × √((N − n)/(N − 1)). Een interval volgt uit Ŵ ± t × standaardfout. Laat de eindigheidscorrectie alleen weg als dat is toegestaan of expliciet wordt gevraagd."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 1-5: directe schatter"
              },
              {
                "source": "boek-basis",
                "page": 1,
                "locator": "Boek p. 92; oorspronkelijke PDF p. 110: voorwaarden en scheefheid"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "verschil",
      "title": "De verschilschatter",
      "phase": "Schatten",
      "lesson": "verschil",
      "signal": "Boekwaarden en werkelijke waarden verschillen ongeveer met een vast bedrag.",
      "approach": "Definieer e = b − w en corrigeer het bekende B met Nē.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formules 6–11, PDF-pagina 1",
          "page": 1
        },
        {
          "source": "slides",
          "locator": "PDF-pagina 20–22",
          "page": 20
        },
        {
          "source": "exam2025",
          "locator": "Vraag 1–3, PDF-pagina 1 en 11",
          "page": 11
        },
        {
          "source": "boek-h8a",
          "page": 7,
          "locator": "Boek p. 207; oorspronkelijke PDF p. 225; uitsnede p. 7"
        }
      ],
      "questions": [
        {
          "id": "mc-verschil-basis-1",
          "prompt": "Boekwaarde 120, werkelijke waarde 135. Wat is e?",
          "options": [
            "15",
            "−15",
            "255"
          ],
          "correct": 1,
          "explanation": "In dit onderdeel is de controlefout gedefinieerd als e = b − w. Vul boekwaarde b = 120 en werkelijke waarde w = 135 in: e = 120 − 135 = −15. Het negatieve teken betekent onderwaardering in de boeken: de werkelijke waarde ligt 15 hoger.",
          "steps": [
            "In dit onderdeel is de controlefout gedefinieerd als e = b − w.",
            "Vul boekwaarde b = 120 en werkelijke waarde w = 135 in: e = 120 − 135 = −15.",
            "Het negatieve teken betekent onderwaardering in de boeken: de werkelijke waarde ligt 15 hoger."
          ],
          "pattern": "Herken: Een boekwaarde, een werkelijke waarde en de letter e. → Betekenis: Hier betekent e een controlefout volgens de afspraak b − w. → Aanpak: Trek de werkelijke waarde van de boekwaarde af en behoud het teken. → Gevraagd antwoord: Een getekend verschil: positief is overwaardering, negatief onderwaardering.",
          "trap": "Het regressieresidu y − ŷ en de controlefout b − w gebruiken verschillende grootheden.",
          "optionExplanations": [
            "15 bereken je met 135 − 120. Daarmee draai je de voorgeschreven volgorde b − w om.",
            "−15 volgt uit 120 − 135. De boekwaarde is 15 lager dan de werkelijke waarde.",
            "255 telt boekwaarde en werkelijke waarde op. Een controlefout is juist het verschil tussen beide."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 6–11, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 20–22",
              "page": 20
            },
            {
              "source": "exam2025",
              "locator": "Vraag 1–3, PDF-pagina 1 en 11",
              "page": 11
            },
            {
              "source": "boek-h8a",
              "page": 7,
              "locator": "Boek p. 207; oorspronkelijke PDF p. 225; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "Een boekwaarde, een werkelijke waarde en de letter e.",
            "meaning": "Hier betekent e een controlefout volgens de afspraak b − w.",
            "approach": "Trek de werkelijke waarde van de boekwaarde af en behoud het teken.",
            "answer": "Een getekend verschil: positief is overwaardering, negatief onderwaardering."
          },
          "level": 1,
          "guidance": {
            "title": "Verschilschatter: teken en controledoel",
            "focus": "Gebruik consequent boekwaarde min werkelijke waarde. Kies het teken vóór je de getallen invult.",
            "rules": [
              "In SRA is een verschil e = boekwaarde b − werkelijke waarde w. Een positief verschil is overwaardering; een negatief verschil betekent dat de werkelijke waarde hoger is.",
              "Schat de totale werkelijke waarde met Ŵ_V = B − N × ē. Voor de onzekerheid gebruik je de spreiding van de verschillen s_e, niet de spreiding van de boekwaarden of de werkelijke waarden."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 6-11: verschildefinitie, schatting en spreiding"
              },
              {
                "source": "slides",
                "page": 20,
                "locator": "PDF p. 20-22: toepassing en voorwaarden van de verschilschatter"
              }
            ]
          }
        },
        {
          "id": "mc-verschil-basis-2",
          "prompt": "Je controleert 200 posten en vindt 12 fouten. Is de cursusvoorwaarde vervuld?",
          "options": [
            "Alleen als de fouten positief zijn",
            "Ja, n is groter dan 30",
            "Nee, er zijn minder dan 30 fouten"
          ],
          "correct": 2,
          "explanation": "De les verwijst voor deze toepassing naar de cursusvoorwaarde van minstens 30 aangetroffen fouten. Er zijn 200 posten gecontroleerd, maar slechts 12 daarvan bevatten een fout. 12 is kleiner dan 30. De genoemde voorwaarde is dus niet vervuld, ondanks de grotere steekproefomvang.",
          "steps": [
            "De les verwijst voor deze toepassing naar de cursusvoorwaarde van minstens 30 aangetroffen fouten.",
            "Er zijn 200 posten gecontroleerd, maar slechts 12 daarvan bevatten een fout.",
            "12 is kleiner dan 30. De genoemde voorwaarde is dus niet vervuld, ondanks de grotere steekproefomvang."
          ],
          "pattern": "Herken: Een aantal gecontroleerde posten én een apart aantal aangetroffen fouten. → Betekenis: De genoemde cursusvoorwaarde gaat over fouten, niet over alle controles. → Aanpak: Vergelijk het aantal aangetroffen fouten met het cursusminimum van 30. → Gevraagd antwoord: Een oordeel of juist deze toepassingsvoorwaarde is vervuld.",
          "trap": "Maak van de cursusvoorwaarde “30 fouten” niet ongemerkt “30 waarnemingen”.",
          "optionExplanations": [
            "De genoemde cursusvoorwaarde gaat om het aantal fouten, niet om hun teken. Ook alleen positieve fouten maken 12 niet tot 30.",
            "n = 200 is groter dan 30, maar de lesvoorwaarde gaat over het aantal aangetroffen fouten. Daarvan zijn er slechts 12.",
            "De cursusvoorwaarde is hier niet vervuld: 12 fouten is minder dan de genoemde 30."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 6–11, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 20–22",
              "page": 20
            },
            {
              "source": "exam2025",
              "locator": "Vraag 1–3, PDF-pagina 1 en 11",
              "page": 11
            },
            {
              "source": "boek-h8a",
              "page": 7,
              "locator": "Boek p. 207; oorspronkelijke PDF p. 225; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "Een aantal gecontroleerde posten én een apart aantal aangetroffen fouten.",
            "meaning": "De genoemde cursusvoorwaarde gaat over fouten, niet over alle controles.",
            "approach": "Vergelijk het aantal aangetroffen fouten met het cursusminimum van 30.",
            "answer": "Een oordeel of juist deze toepassingsvoorwaarde is vervuld."
          },
          "level": 1,
          "guidance": {
            "title": "Verschilschatter: teken en controledoel",
            "focus": "De SRA-cursus gebruikt voor deze methode als aantalsvoorwaarde ten minste 30 fouten in de steekproef: posten waarvan de boekwaarde afwijkt van de werkelijke waarde (b ≠ w). Tel deze afwijkende posten, niet het totale aantal controles.",
            "rules": [
              "In SRA is een verschil e = boekwaarde b − werkelijke waarde w. Een positief verschil is overwaardering; een negatief verschil betekent dat de werkelijke waarde hoger is.",
              "Schat de totale werkelijke waarde met Ŵ_V = B − N × ē. Voor de onzekerheid gebruik je de spreiding van de verschillen s_e, niet de spreiding van de boekwaarden of de werkelijke waarden."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 6-11: verschildefinitie, schatting en spreiding"
              },
              {
                "source": "slides",
                "page": 20,
                "locator": "PDF p. 20-22: toepassing en voorwaarden van de verschilschatter"
              }
            ]
          }
        },
        {
          "id": "mc-verschil-basis-3",
          "prompt": "Waarom kan de verschilschatter nauwkeurig zijn?",
          "options": [
            "De verschillen kunnen weinig spreiden",
            "Elke fout wordt genegeerd",
            "B hoeft niet bekend te zijn"
          ],
          "correct": 0,
          "explanation": "De verschilschatter corrigeert het bekende boektotaal B met de geschatte totale fout Nē. De onzekerheid hangt daarbij samen met s_e: de spreiding van de verschillen b − w. Als die verschillen onderling weinig variëren, kun je hun gemiddelde en totale correctie relatief nauwkeurig schatten.",
          "steps": [
            "De verschilschatter corrigeert het bekende boektotaal B met de geschatte totale fout Nē.",
            "De onzekerheid hangt daarbij samen met s_e: de spreiding van de verschillen b − w.",
            "Als die verschillen onderling weinig variëren, kun je hun gemiddelde en totale correctie relatief nauwkeurig schatten."
          ],
          "pattern": "Herken: “Waarom nauwkeurig” bij de verschilschatter. → Betekenis: De onzekerheid hangt af van de variatie in de absolute controlefouten. → Aanpak: Zoek een geringe spreiding s_e van b − w, niet alleen een kleine gemiddelde fout. → Gevraagd antwoord: Een verklaring waarom de standaardfout van de correctie klein kan zijn.",
          "trap": "Een groot of klein gemiddeld verschil zegt op zichzelf nog niet hoe sterk de verschillen spreiden.",
          "optionExplanations": [
            "Kleine spreiding van de fouten betekent een kleine s_e. Die verkleint, bij overige gelijke gegevens, de standaardfout van de correctie.",
            "De fouten worden expliciet verwerkt via Nē. Ze negeren zou geen verschilschatter opleveren.",
            "De formule Ŵ_V = B − Nē gebruikt juist het bekende populatieboektotaal B. Het ontbreken daarvan is geen voordeel van deze schatter."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 6–11, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 20–22",
              "page": 20
            },
            {
              "source": "exam2025",
              "locator": "Vraag 1–3, PDF-pagina 1 en 11",
              "page": 11
            },
            {
              "source": "boek-h8a",
              "page": 7,
              "locator": "Boek p. 207; oorspronkelijke PDF p. 225; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "“Waarom nauwkeurig” bij de verschilschatter.",
            "meaning": "De onzekerheid hangt af van de variatie in de absolute controlefouten.",
            "approach": "Zoek een geringe spreiding s_e van b − w, niet alleen een kleine gemiddelde fout.",
            "answer": "Een verklaring waarom de standaardfout van de correctie klein kan zijn."
          },
          "level": 2,
          "guidance": {
            "title": "Verschilschatter: teken en controledoel",
            "focus": "De nauwkeurigheid hangt af van de spreiding van de verschillen. Vergelijk die met de spreiding van werkelijke waarden bij MPU.",
            "rules": [
              "In SRA is een verschil e = boekwaarde b − werkelijke waarde w. Een positief verschil is overwaardering; een negatief verschil betekent dat de werkelijke waarde hoger is.",
              "Schat de totale werkelijke waarde met Ŵ_V = B − N × ē. Voor de onzekerheid gebruik je de spreiding van de verschillen s_e, niet de spreiding van de boekwaarden of de werkelijke waarden."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 6-11: verschildefinitie, schatting en spreiding"
              },
              {
                "source": "slides",
                "page": 20,
                "locator": "PDF p. 20-22: toepassing en voorwaarden van de verschilschatter"
              }
            ]
          }
        },
        {
          "id": "mc-verschil-toepassing-1",
          "prompt": "B = € 100.000, N = 1.000 en ē = € 4. Wat is de geschatte werkelijke waarde?",
          "options": [
            "€ 100.004",
            "€ 104.000",
            "€ 4.000",
            "€ 96.000"
          ],
          "correct": 3,
          "level": 2,
          "steps": [
            "De totale geschatte fout is Nē = 4.000.",
            "Ŵ_V = B − Nē = 96.000.",
            "Een positieve fout e = b − w betekent dat de boekwaarde te hoog is. De geschatte totale fout moet daarom van B worden afgetrokken."
          ],
          "explanation": "De totale geschatte fout is Nē = 4.000. Ŵ_V = B − Nē = 96.000. Een positieve fout e = b − w betekent dat de boekwaarde te hoog is. De geschatte totale fout moet daarom van B worden afgetrokken.",
          "pattern": "Herken: B, N en een positieve gemiddelde fout ē; gevraagd is de werkelijke waarde. → Betekenis: Het bekende boektotaal moet worden gecorrigeerd voor totale overwaardering. → Aanpak: Schat de totale fout als Nē en trek die van B af. → Gevraagd antwoord: Een geschat werkelijk totaal B − Nē, niet alleen het foutbedrag.",
          "trap": "De geschatte fout is niet het geschatte werkelijke totaal.",
          "optionExplanations": [
            "€ 100.004 verwerkt slechts één gemiddelde fout en gebruikt bovendien het verkeerde teken. De correctie betreft alle 1.000 posten.",
            "€ 104.000 telt de fout bij B op. Bij positieve e zijn de boeken te hoog en moet je juist € 4.000 aftrekken.",
            "€ 4.000 = Nē is de geschatte totale fout. De gevraagde werkelijke waarde is B min dat foutbedrag.",
            "€ 96.000 = € 100.000 − 1.000 × € 4 is de correcte schatting van het werkelijke totaal."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 6–11, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 20–22",
              "page": 20
            },
            {
              "source": "exam2025",
              "locator": "Vraag 1–3, PDF-pagina 1 en 11",
              "page": 11
            },
            {
              "source": "boek-h8a",
              "page": 7,
              "locator": "Boek p. 207; oorspronkelijke PDF p. 225; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "B, N en een positieve gemiddelde fout ē; gevraagd is de werkelijke waarde.",
            "meaning": "Het bekende boektotaal moet worden gecorrigeerd voor totale overwaardering.",
            "approach": "Schat de totale fout als Nē en trek die van B af.",
            "answer": "Een geschat werkelijk totaal B − Nē, niet alleen het foutbedrag."
          },
          "guidance": {
            "title": "Verschilschatter: teken en controledoel",
            "focus": "B betreft de hele populatie. Trek N maal het gemiddelde verschil af; bij een negatief gemiddeld verschil werkt de correctie juist verhogend.",
            "rules": [
              "In SRA is een verschil e = boekwaarde b − werkelijke waarde w. Een positief verschil is overwaardering; een negatief verschil betekent dat de werkelijke waarde hoger is.",
              "Schat de totale werkelijke waarde met Ŵ_V = B − N × ē. Voor de onzekerheid gebruik je de spreiding van de verschillen s_e, niet de spreiding van de boekwaarden of de werkelijke waarden."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 6-11: verschildefinitie, schatting en spreiding"
              },
              {
                "source": "slides",
                "page": 20,
                "locator": "PDF p. 20-22: toepassing en voorwaarden van de verschilschatter"
              }
            ]
          }
        },
        {
          "id": "mc-verschil-toepassing-2",
          "prompt": "B = € 10.000, N = 500 en ē = −€ 3. Wat is Ŵ_V?",
          "options": [
            "€ 11.500",
            "−€ 1.500",
            "€ 10.003",
            "€ 8.500"
          ],
          "correct": 0,
          "level": 3,
          "steps": [
            "Nē = −1.500.",
            "B − Nē = 10.000 − (−1.500) = 11.500.",
            "Een negatieve gemiddelde fout betekent dat de werkelijke waarden hoger liggen dan de boekwaarden. Daarom verhoogt de verschilschatter hier het totaal."
          ],
          "explanation": "Nē = −1.500. B − Nē = 10.000 − (−1.500) = 11.500. Een negatieve gemiddelde fout betekent dat de werkelijke waarden hoger liggen dan de boekwaarden. Daarom verhoogt de verschilschatter hier het totaal.",
          "pattern": "Herken: B, N en een negatieve gemiddelde fout ē. → Betekenis: Een negatieve b − w duidt op onderwaardering in de boeken. → Aanpak: Vul het minteken mee in B − Nē; werk de aftrekking van een negatief bedrag uit. → Gevraagd antwoord: Een geschat werkelijk totaal met het juiste teken van de correctie.",
          "trap": "Twee mintekens geven hier een verhoging van het totaal.",
          "optionExplanations": [
            "€ 11.500 klopt: 10.000 − 500 × (−3) = 10.000 + 1.500.",
            "−€ 1.500 is de totale geschatte fout Nē. Het is nog niet het geschatte werkelijke totaal.",
            "€ 10.003 corrigeert slechts één keer voor € 3. De gemiddelde fout moet over alle N = 500 posten worden opgeschaald.",
            "€ 8.500 trekt een positieve € 1.500 af. De geschatte fout is hier negatief, zodat aftrekken juist een verhoging geeft."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 6–11, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 20–22",
              "page": 20
            },
            {
              "source": "exam2025",
              "locator": "Vraag 1–3, PDF-pagina 1 en 11",
              "page": 11
            },
            {
              "source": "boek-h8a",
              "page": 7,
              "locator": "Boek p. 207; oorspronkelijke PDF p. 225; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "B, N en een negatieve gemiddelde fout ē.",
            "meaning": "Een negatieve b − w duidt op onderwaardering in de boeken.",
            "approach": "Vul het minteken mee in B − Nē; werk de aftrekking van een negatief bedrag uit.",
            "answer": "Een geschat werkelijk totaal met het juiste teken van de correctie."
          },
          "guidance": {
            "title": "Verschilschatter: teken en controledoel",
            "focus": "B betreft de hele populatie. Trek N maal het gemiddelde verschil af; bij een negatief gemiddeld verschil werkt de correctie juist verhogend.",
            "rules": [
              "In SRA is een verschil e = boekwaarde b − werkelijke waarde w. Een positief verschil is overwaardering; een negatief verschil betekent dat de werkelijke waarde hoger is.",
              "Schat de totale werkelijke waarde met Ŵ_V = B − N × ē. Voor de onzekerheid gebruik je de spreiding van de verschillen s_e, niet de spreiding van de boekwaarden of de werkelijke waarden."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 6-11: verschildefinitie, schatting en spreiding"
              },
              {
                "source": "slides",
                "page": 20,
                "locator": "PDF p. 20-22: toepassing en voorwaarden van de verschilschatter"
              }
            ]
          }
        },
        {
          "id": "mc-verschil-toepassing-3",
          "prompt": "B = € 10.000, N = 500, n = 50, ē = 2, s_e = 5 en t = 2. Negeer de eindigheidscorrectie. Welk interval volgt bij benadering?",
          "options": [
            "[€ 7.586; € 10.414]",
            "[€ 8.293; € 9.707]",
            "[€ 9.293; € 10.707]",
            "[€ 8.990; € 9.010]"
          ],
          "correct": 1,
          "level": 3,
          "steps": [
            "Ŵ_V = 10.000 − 500 × 2 = 9.000.",
            "s_V = 500 × 5/√50 ≈ 353,55.",
            "9.000 ± 2 × 353,55 geeft circa [8.293; 9.707].",
            "De foutcorrectie bepaalt het centrum € 9.000; s_e bepaalt de onzekerheid rond dat centrum. Dat zijn twee afzonderlijke onderdelen van de berekening."
          ],
          "explanation": "Ŵ_V = 10.000 − 500 × 2 = 9.000. s_V = 500 × 5/√50 ≈ 353,55. 9.000 ± 2 × 353,55 geeft circa [8.293; 9.707]. De foutcorrectie bepaalt het centrum € 9.000; s_e bepaalt de onzekerheid rond dat centrum. Dat zijn twee afzonderlijke onderdelen van de berekening.",
          "pattern": "Herken: B, ē en s_e met n, N en t; gevraagd is een interval zonder eindigheidscorrectie. → Betekenis: De fout bepaalt zowel de correctie op het boektotaal als de onzekerheid daarvan. → Aanpak: Gebruik B − Nē als middelpunt en t × N × s_e/√n als marge. → Gevraagd antwoord: Twee grenzen voor de werkelijke totale waarde, geen interval rond alleen ē.",
          "trap": "Centreer het interval rond Ŵ_V, niet rond B.",
          "optionExplanations": [
            "De marge van circa € 1.414 is tweemaal de juiste marge. De factor t = 2 mag slechts eenmaal op de standaardfout worden toegepast.",
            "Dit interval heeft centrum € 9.000 en marge 2 × 500 × 5/√50 ≈ € 707,11. Beide onderdelen volgen uit de verschilschatter.",
            "De marge is passend, maar het interval is gecentreerd op B = € 10.000. De geschatte totale fout van € 1.000 is niet afgetrokken.",
            "De marge van € 10 gebruikt alleen t × s_e. De standaardfout van het totale verschil moet met N/√n worden geschaald."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 6–11, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 20–22",
              "page": 20
            },
            {
              "source": "exam2025",
              "locator": "Vraag 1–3, PDF-pagina 1 en 11",
              "page": 11
            },
            {
              "source": "boek-h8a",
              "page": 7,
              "locator": "Boek p. 207; oorspronkelijke PDF p. 225; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "B, ē en s_e met n, N en t; gevraagd is een interval zonder eindigheidscorrectie.",
            "meaning": "De fout bepaalt zowel de correctie op het boektotaal als de onzekerheid daarvan.",
            "approach": "Gebruik B − Nē als middelpunt en t × N × s_e/√n als marge.",
            "answer": "Twee grenzen voor de werkelijke totale waarde, geen interval rond alleen ē."
          },
          "guidance": {
            "title": "Verschilschatter: teken en controledoel",
            "focus": "Gebruik s_V = N × s_e/√n wanneer de eindigheidscorrectie expliciet buiten beschouwing blijft. Vorm het interval rond B − Nē.",
            "rules": [
              "In SRA is een verschil e = boekwaarde b − werkelijke waarde w. Een positief verschil is overwaardering; een negatief verschil betekent dat de werkelijke waarde hoger is.",
              "Schat de totale werkelijke waarde met Ŵ_V = B − N × ē. Voor de onzekerheid gebruik je de spreiding van de verschillen s_e, niet de spreiding van de boekwaarden of de werkelijke waarden."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 6-11: verschildefinitie, schatting en spreiding"
              },
              {
                "source": "slides",
                "page": 20,
                "locator": "PDF p. 20-22: toepassing en voorwaarden van de verschilschatter"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "quotient",
      "title": "De quotiëntschatter",
      "phase": "Schatten",
      "lesson": "quotient",
      "signal": "De werkelijke waarde is ongeveer een vast percentage van de boekwaarde.",
      "approach": "Bereken de goedratio q = Σw/Σb en vermenigvuldig met B.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formules 12–17, PDF-pagina 1",
          "page": 1
        },
        {
          "source": "slides",
          "locator": "PDF-pagina 23–25",
          "page": 23
        },
        {
          "source": "boek-h8b",
          "page": 1,
          "locator": "Boek p. 211; oorspronkelijke PDF p. 229; uitsnede p. 1"
        }
      ],
      "questions": [
        {
          "id": "mc-quotient-basis-1",
          "prompt": "Σw = 90.000 en Σb = 100.000. Wat is q?",
          "options": [
            "0,10",
            "1,111",
            "0,90"
          ],
          "correct": 2,
          "explanation": "De goedratio q vergelijkt de totale werkelijke waarde met de totale boekwaarde in de steekproef. Gebruik q = Σw/Σb = 90.000/100.000 = 0,90. De werkelijke waarde is hier dus 90% van de boekwaarde; de ontbrekende 10% is het foutaandeel ten opzichte van de boekwaarde.",
          "steps": [
            "De goedratio q vergelijkt de totale werkelijke waarde met de totale boekwaarde in de steekproef.",
            "Gebruik q = Σw/Σb = 90.000/100.000 = 0,90.",
            "De werkelijke waarde is hier dus 90% van de boekwaarde; de ontbrekende 10% is het foutaandeel ten opzichte van de boekwaarde."
          ],
          "pattern": "Herken: Σw en Σb, met de goedratio q als vraag. → Betekenis: De ratio geeft de werkelijke waarde per euro boekwaarde in de steekproef. → Aanpak: Deel de som van de werkelijke waarden door de som van de boekwaarden. → Gevraagd antwoord: Een dimensieloze goedratio, niet haar omgekeerde of het foutaandeel.",
          "trap": "q en 1 − q hebben een andere betekenis: goedaandeel tegenover foutaandeel.",
          "optionExplanations": [
            "0,10 is 1 − 0,90: het foutaandeel. De vraag vraagt het aandeel dat wél werkelijke waarde vertegenwoordigt.",
            "1,111 is ongeveer 100.000/90.000. Dat is de omgekeerde verhouding en niet de gevraagde goedratio.",
            "0,90 klopt: per euro boekwaarde is in de steekproef € 0,90 werkelijke waarde vastgesteld."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 12–17, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 23–25",
              "page": 23
            },
            {
              "source": "boek-h8b",
              "page": 1,
              "locator": "Boek p. 211; oorspronkelijke PDF p. 229; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "Σw en Σb, met de goedratio q als vraag.",
            "meaning": "De ratio geeft de werkelijke waarde per euro boekwaarde in de steekproef.",
            "approach": "Deel de som van de werkelijke waarden door de som van de boekwaarden.",
            "answer": "Een dimensieloze goedratio, niet haar omgekeerde of het foutaandeel."
          },
          "level": 1,
          "guidance": {
            "title": "Quotiëntschatter: verhouding en totaal",
            "focus": "De teller en noemer moeten op dezelfde steekproef slaan: werkelijke waarde boven, boekwaarde onder.",
            "rules": [
              "De goedratio is q = Σw/Σb, berekend over dezelfde gecontroleerde posten. Gebruik de verhouding van de sommen; het ongewogen gemiddelde van afzonderlijke ratio’s hoeft niet gelijk te zijn.",
              "De geschatte werkelijke waarde van de hele populatie is Ŵ_Q = q × B, met B het bekende boektotaal van de populatie. Een totale overwaardering is B − Ŵ_Q."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 12-17: quotiëntschatter"
              },
              {
                "source": "boek-h8b",
                "page": 1,
                "locator": "Boek p. 211; oorspronkelijke PDF p. 229: verhouding tussen boekwaarde en werkelijke waarde"
              }
            ]
          }
        },
        {
          "id": "mc-quotient-basis-2",
          "prompt": "Welk patroon past het best?",
          "options": [
            "Elke post is circa 8% te hoog",
            "Geen enkele boekwaarde is bekend",
            "Elke post is circa € 5 te hoog"
          ],
          "correct": 0,
          "explanation": "De quotiëntschatter gebruikt een relatief stabiele verhouding tussen werkelijke waarde en boekwaarde. Een afwijking van ongeveer hetzelfde percentage per post past bij zo’n verhouding. Een ongeveer vast euroverschil per post past eerder bij de verschilschatter.",
          "steps": [
            "De quotiëntschatter gebruikt een relatief stabiele verhouding tussen werkelijke waarde en boekwaarde.",
            "Een afwijking van ongeveer hetzelfde percentage per post past bij zo’n verhouding.",
            "Een ongeveer vast euroverschil per post past eerder bij de verschilschatter."
          ],
          "pattern": "Herken: Vergelijk in de opties een vast euroverschil met een vast foutpercentage. → Betekenis: Een quotiëntschatter past bij een ongeveer constante verhouding w/b. → Aanpak: Zoek het patroon waarbij kleine en grote posten relatief ongeveer evenveel afwijken. → Gevraagd antwoord: Een herkenning van relatieve afwijkingen als grond voor de schatterkeuze.",
          "trap": "Een vast percentage is niet hetzelfde als een vast bedrag.",
          "optionExplanations": [
            "Circa 8% overwaardering duidt op een vergelijkbare verhouding tussen boekwaarde en werkelijke waarde. Dat past bij een quotiëntschatter.",
            "Zonder boekwaarden kun je Σw/Σb niet bepalen en de ratio niet op B toepassen.",
            "Circa € 5 verschil per post wijst op een stabiele absolute fout. Dat patroon past eerder bij de verschilschatter."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 12–17, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 23–25",
              "page": 23
            },
            {
              "source": "boek-h8b",
              "page": 1,
              "locator": "Boek p. 211; oorspronkelijke PDF p. 229; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "Vergelijk in de opties een vast euroverschil met een vast foutpercentage.",
            "meaning": "Een quotiëntschatter past bij een ongeveer constante verhouding w/b.",
            "approach": "Zoek het patroon waarbij kleine en grote posten relatief ongeveer evenveel afwijken.",
            "answer": "Een herkenning van relatieve afwijkingen als grond voor de schatterkeuze."
          },
          "level": 1,
          "guidance": {
            "title": "Quotiëntschatter: verhouding en totaal",
            "focus": "Onderzoek of de afwijking vooral een vast bedrag of een vaste verhouding is. Vergelijk boekwaarde en werkelijke waarde van dezelfde post.",
            "rules": [
              "De goedratio is q = Σw/Σb, berekend over dezelfde gecontroleerde posten. Gebruik de verhouding van de sommen; het ongewogen gemiddelde van afzonderlijke ratio’s hoeft niet gelijk te zijn.",
              "De geschatte werkelijke waarde van de hele populatie is Ŵ_Q = q × B, met B het bekende boektotaal van de populatie. Een totale overwaardering is B − Ŵ_Q."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 12-17: quotiëntschatter"
              },
              {
                "source": "boek-h8b",
                "page": 1,
                "locator": "Boek p. 211; oorspronkelijke PDF p. 229: verhouding tussen boekwaarde en werkelijke waarde"
              }
            ]
          }
        },
        {
          "id": "mc-quotient-basis-3",
          "prompt": "q = 0,96 en B = 1.000.000. Wat is de geschatte werkelijke waarde?",
          "options": [
            "40.000",
            "960.000",
            "1.040.000"
          ],
          "correct": 1,
          "explanation": "De goedratio geeft welk deel van de boekwaarde als werkelijke waarde wordt geschat. Ŵ_Q = qB = 0,96 × 1.000.000 = 960.000. De bijbehorende geschatte totale overwaardering is B − Ŵ_Q = 40.000, maar dat is niet het gevraagde werkelijke totaal.",
          "steps": [
            "De goedratio geeft welk deel van de boekwaarde als werkelijke waarde wordt geschat.",
            "Ŵ_Q = qB = 0,96 × 1.000.000 = 960.000.",
            "De bijbehorende geschatte totale overwaardering is B − Ŵ_Q = 40.000, maar dat is niet het gevraagde werkelijke totaal."
          ],
          "pattern": "Herken: Een goedratio q en boektotaal B; gevraagd is de werkelijke waarde. → Betekenis: q is het deel van B dat als werkelijk aanwezig wordt geschat. → Aanpak: Vermenigvuldig q met B; gebruik 1 − q alleen bij een vraag naar de fout. → Gevraagd antwoord: Een geschat werkelijk totaalbedrag, geen overwaardering.",
          "trap": "Een juist berekend foutbedrag beantwoordt geen vraag naar de werkelijke waarde.",
          "optionExplanations": [
            "40.000 is de geschatte fout: 4% van 1.000.000. Gevraagd is het resterende werkelijke bedrag.",
            "960.000 is de geschatte werkelijke waarde: 96% van het bekende boektotaal.",
            "1.040.000 telt 4% bij de boekwaarde op. Bij q = 0,96 ligt de geschatte werkelijke waarde juist lager dan B."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 12–17, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 23–25",
              "page": 23
            },
            {
              "source": "boek-h8b",
              "page": 1,
              "locator": "Boek p. 211; oorspronkelijke PDF p. 229; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "Een goedratio q en boektotaal B; gevraagd is de werkelijke waarde.",
            "meaning": "q is het deel van B dat als werkelijk aanwezig wordt geschat.",
            "approach": "Vermenigvuldig q met B; gebruik 1 − q alleen bij een vraag naar de fout.",
            "answer": "Een geschat werkelijk totaalbedrag, geen overwaardering."
          },
          "level": 2,
          "guidance": {
            "title": "Quotiëntschatter: verhouding en totaal",
            "focus": "Bereken q uit de gecontroleerde posten en pas deze vervolgens toe op B van de volledige populatie.",
            "rules": [
              "De goedratio is q = Σw/Σb, berekend over dezelfde gecontroleerde posten. Gebruik de verhouding van de sommen; het ongewogen gemiddelde van afzonderlijke ratio’s hoeft niet gelijk te zijn.",
              "De geschatte werkelijke waarde van de hele populatie is Ŵ_Q = q × B, met B het bekende boektotaal van de populatie. Een totale overwaardering is B − Ŵ_Q."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 12-17: quotiëntschatter"
              },
              {
                "source": "boek-h8b",
                "page": 1,
                "locator": "Boek p. 211; oorspronkelijke PDF p. 229: verhouding tussen boekwaarde en werkelijke waarde"
              }
            ]
          }
        },
        {
          "id": "mc-quotient-toepassing-1",
          "prompt": "Σw = € 72.000, Σb = € 80.000 en B = € 200.000. Wat is Ŵ_Q?",
          "options": [
            "€ 180.000",
            "€ 222.222",
            "€ 192.000",
            "€ 20.000"
          ],
          "correct": 0,
          "level": 2,
          "steps": [
            "q = 72.000/80.000 = 0,90.",
            "Ŵ_Q = 0,90 × 200.000 = 180.000.",
            "De goedratio past het in de steekproef gevonden goedaandeel toe op het bekende populatieboektotaal. Het overblijvende verschil is de geschatte fout."
          ],
          "explanation": "q = 72.000/80.000 = 0,90. Ŵ_Q = 0,90 × 200.000 = 180.000. De goedratio past het in de steekproef gevonden goedaandeel toe op het bekende populatieboektotaal. Het overblijvende verschil is de geschatte fout.",
          "pattern": "Herken: Beide steekproefsommen én het boektotaal van de populatie. → Betekenis: Eerst moet een steekproefratio worden bepaald, daarna toegepast op de populatie. → Aanpak: Bereken q = Σw/Σb en vervolgens Ŵ_Q = qB. → Gevraagd antwoord: Een geschat werkelijk populatietotaal in euro.",
          "trap": "20.000 is de geschatte fout; 180.000 is de werkelijke waarde.",
          "optionExplanations": [
            "€ 180.000 = (72.000/80.000) × 200.000. De ratio en het populatietotaal zijn correct gecombineerd.",
            "€ 222.222 gebruikt ongeveer de omgekeerde verhouding 80.000/72.000. Voor q moet de werkelijke waarde in de teller staan.",
            "€ 192.000 trekt het steekproefverschil 8.000 rechtstreeks van B af. Dat verschil moet via de ratio naar de populatie worden vertaald.",
            "€ 20.000 is 10% van B en dus de geschatte overwaardering. De gevraagde werkelijke waarde is het goedaandeel van 90%."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 12–17, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 23–25",
              "page": 23
            },
            {
              "source": "boek-h8b",
              "page": 1,
              "locator": "Boek p. 211; oorspronkelijke PDF p. 229; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "Beide steekproefsommen én het boektotaal van de populatie.",
            "meaning": "Eerst moet een steekproefratio worden bepaald, daarna toegepast op de populatie.",
            "approach": "Bereken q = Σw/Σb en vervolgens Ŵ_Q = qB.",
            "answer": "Een geschat werkelijk populatietotaal in euro."
          },
          "guidance": {
            "title": "Quotiëntschatter: verhouding en totaal",
            "focus": "Bereken q uit de gecontroleerde posten en pas deze vervolgens toe op B van de volledige populatie.",
            "rules": [
              "De goedratio is q = Σw/Σb, berekend over dezelfde gecontroleerde posten. Gebruik de verhouding van de sommen; het ongewogen gemiddelde van afzonderlijke ratio’s hoeft niet gelijk te zijn.",
              "De geschatte werkelijke waarde van de hele populatie is Ŵ_Q = q × B, met B het bekende boektotaal van de populatie. Een totale overwaardering is B − Ŵ_Q."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 12-17: quotiëntschatter"
              },
              {
                "source": "boek-h8b",
                "page": 1,
                "locator": "Boek p. 211; oorspronkelijke PDF p. 229: verhouding tussen boekwaarde en werkelijke waarde"
              }
            ]
          }
        },
        {
          "id": "mc-quotient-toepassing-2",
          "prompt": "Boekwaarden zijn 100, 200 en 400; werkelijke waarden 90, 180 en 360. Welk patroon past het best?",
          "options": [
            "Een vast verschil van € 10",
            "Een vaste goedratio van 0,90",
            "Geen verband tussen beide waarden",
            "Een vaste goedratio van 1,10"
          ],
          "correct": 1,
          "level": 3,
          "steps": [
            "De verhoudingen zijn steeds 0,90.",
            "De verschillen zijn 10, 20 en 40 en dus niet constant.",
            "De absolute fout wordt groter bij grotere posten, maar het goedaandeel blijft steeds 90%. Juist dat relatieve patroon is van belang."
          ],
          "explanation": "De verhoudingen zijn steeds 0,90. De verschillen zijn 10, 20 en 40 en dus niet constant. De absolute fout wordt groter bij grotere posten, maar het goedaandeel blijft steeds 90%. Juist dat relatieve patroon is van belang.",
          "pattern": "Herken: Paarsgewijze boekwaarden en werkelijke waarden voor kleine en grote posten. → Betekenis: Het relevante onderscheid is een vast bedrag tegenover een vaste verhouding. → Aanpak: Vergelijk per post zowel b − w als w/b en herken welk patroon gelijk blijft. → Gevraagd antwoord: Het constante foutbedrag of de constante goedratio, als herkenningsgrond voor een passende schatter.",
          "trap": "Het eerste verschil van 10 geldt niet voor alle posten.",
          "optionExplanations": [
            "€ 10 geldt alleen voor de eerste post. De overige verschillen zijn € 20 en € 40, dus het euroverschil is niet constant.",
            "90/100, 180/200 en 360/400 zijn allemaal 0,90. De goedratio is dus steeds gelijk.",
            "Er is juist een volledig zichtbaar patroon: iedere werkelijke waarde is 90% van de bijbehorende boekwaarde.",
            "1,10 zou een werkelijke waarde boven de boekwaarde suggereren. Alle gegeven werkelijke waarden liggen juist 10% lager."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 12–17, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 23–25",
              "page": 23
            },
            {
              "source": "boek-h8b",
              "page": 1,
              "locator": "Boek p. 211; oorspronkelijke PDF p. 229; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "Paarsgewijze boekwaarden en werkelijke waarden voor kleine en grote posten.",
            "meaning": "Het relevante onderscheid is een vast bedrag tegenover een vaste verhouding.",
            "approach": "Vergelijk per post zowel b − w als w/b en herken welk patroon gelijk blijft.",
            "answer": "Het constante foutbedrag of de constante goedratio, als herkenningsgrond voor een passende schatter."
          },
          "guidance": {
            "title": "Quotiëntschatter: verhouding en totaal",
            "focus": "Onderzoek of de afwijking vooral een vast bedrag of een vaste verhouding is. Vergelijk boekwaarde en werkelijke waarde van dezelfde post.",
            "rules": [
              "De goedratio is q = Σw/Σb, berekend over dezelfde gecontroleerde posten. Gebruik de verhouding van de sommen; het ongewogen gemiddelde van afzonderlijke ratio’s hoeft niet gelijk te zijn.",
              "De geschatte werkelijke waarde van de hele populatie is Ŵ_Q = q × B, met B het bekende boektotaal van de populatie. Een totale overwaardering is B − Ŵ_Q."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 12-17: quotiëntschatter"
              },
              {
                "source": "boek-h8b",
                "page": 1,
                "locator": "Boek p. 211; oorspronkelijke PDF p. 229: verhouding tussen boekwaarde en werkelijke waarde"
              }
            ]
          }
        },
        {
          "id": "mc-quotient-toepassing-3",
          "prompt": "De goedratio is 0,96 en B = € 500.000. Gevraagd wordt de totale overwaardering in de boeken. Wat antwoord je?",
          "options": [
            "€ 480.000",
            "€ 520.000",
            "€ 20.000",
            "€ 0,04"
          ],
          "correct": 2,
          "level": 3,
          "steps": [
            "Geschatte werkelijke waarde: 0,96 × 500.000 = 480.000.",
            "Overwaardering: B − Ŵ_Q = 20.000.",
            "De vraag vraagt de overwaardering in de boeken. Rond de berekening daarom af met B − Ŵ_Q, niet met alleen het geschatte werkelijke bedrag."
          ],
          "explanation": "Geschatte werkelijke waarde: 0,96 × 500.000 = 480.000. Overwaardering: B − Ŵ_Q = 20.000. De vraag vraagt de overwaardering in de boeken. Rond de berekening daarom af met B − Ŵ_Q, niet met alleen het geschatte werkelijke bedrag.",
          "pattern": "Herken: “Goedratio” gegeven, maar “totale overwaardering” gevraagd. → Betekenis: Je zoekt het foutdeel van de boekwaarde, niet het goede deel. → Aanpak: Bereken eerst 1 − q en pas dat aandeel toe op B. → Gevraagd antwoord: Een geschat totaal foutbedrag in euro.",
          "trap": "Een juiste formule kan alsnog het verkeerde gevraagde bedrag opleveren.",
          "optionExplanations": [
            "€ 480.000 is de geschatte werkelijke waarde qB. Het gevraagde foutbedrag is het verschil met B = € 500.000.",
            "€ 520.000 verhoogt B met 4%, terwijl een goedratio onder 1 juist een lagere werkelijke waarde geeft.",
            "€ 20.000 = (1 − 0,96) × € 500.000 is de geschatte totale overwaardering.",
            "0,04 is het foutaandeel zonder geldeenheid. Om een totaalbedrag te vinden moet je het met € 500.000 vermenigvuldigen."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 12–17, PDF-pagina 1",
              "page": 1
            },
            {
              "source": "slides",
              "locator": "PDF-pagina 23–25",
              "page": 23
            },
            {
              "source": "boek-h8b",
              "page": 1,
              "locator": "Boek p. 211; oorspronkelijke PDF p. 229; uitsnede p. 1"
            }
          ],
          "recognition": {
            "signals": "“Goedratio” gegeven, maar “totale overwaardering” gevraagd.",
            "meaning": "Je zoekt het foutdeel van de boekwaarde, niet het goede deel.",
            "approach": "Bereken eerst 1 − q en pas dat aandeel toe op B.",
            "answer": "Een geschat totaal foutbedrag in euro."
          },
          "guidance": {
            "title": "Quotiëntschatter: verhouding en totaal",
            "focus": "Lees of de werkelijke waarde of juist de overwaardering wordt gevraagd. De overwaardering is het verschil tussen boektotaal en geschatte werkelijke waarde.",
            "rules": [
              "De goedratio is q = Σw/Σb, berekend over dezelfde gecontroleerde posten. Gebruik de verhouding van de sommen; het ongewogen gemiddelde van afzonderlijke ratio’s hoeft niet gelijk te zijn.",
              "De geschatte werkelijke waarde van de hele populatie is Ŵ_Q = q × B, met B het bekende boektotaal van de populatie. Een totale overwaardering is B − Ŵ_Q."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 12-17: quotiëntschatter"
              },
              {
                "source": "boek-h8b",
                "page": 1,
                "locator": "Boek p. 211; oorspronkelijke PDF p. 229: verhouding tussen boekwaarde en werkelijke waarde"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "regressieschatter",
      "title": "De regressieschatter",
      "phase": "Schatten",
      "lesson": "regressieschatter",
      "signal": "Je kent B en corrigeert de directe schatting met een lineair verband tussen b en w.",
      "approach": "Bereken b₁ en de correctie b₁(B − Nb̄).",
      "refs": [
        {
          "source": "formules",
          "locator": "Formules 18–24, PDF-pagina 2",
          "page": 2
        },
        {
          "source": "exam2024",
          "locator": "Vraag 1 en 3, PDF-pagina 1–2",
          "page": 1
        },
        {
          "source": "boek-h8b",
          "page": 3,
          "locator": "Boek p. 213; oorspronkelijke PDF p. 231; uitsnede p. 3"
        },
        {
          "source": "boek-h8b",
          "page": 6,
          "locator": "Boek p. 216; oorspronkelijke PDF p. 234; uitsnede p. 6"
        }
      ],
      "questions": [
        {
          "id": "mc-regressieschatter-basis-1",
          "prompt": "B = Nb̄. Wat wordt de correctie op MPU?",
          "options": [
            "0",
            "b₁",
            "N"
          ],
          "correct": 0,
          "explanation": "De regressieschatter is Ŵ_R = Nw̄ + b₁(B − Nb̄). Als B = Nb̄, is het verschil tussen het bekende en het geschatte boektotaal nul. De volledige correctie wordt b₁ × 0 = 0. Daardoor valt Ŵ_R in dit geval samen met MPU: Nw̄.",
          "steps": [
            "De regressieschatter is Ŵ_R = Nw̄ + b₁(B − Nb̄).",
            "Als B = Nb̄, is het verschil tussen het bekende en het geschatte boektotaal nul.",
            "De volledige correctie wordt b₁ × 0 = 0. Daardoor valt Ŵ_R in dit geval samen met MPU: Nw̄."
          ],
          "pattern": "Herken: B = Nb̄ en “correctie op MPU”. → Betekenis: De regressieschatter corrigeert het verschil tussen bekend en via de steekproef geschat boektotaal. → Aanpak: Bekijk de factor B − Nb̄ in b₁(B − Nb̄) voordat je verder rekent. → Gevraagd antwoord: De correctieterm; onderscheid die van de volledige schatting.",
          "trap": "Een niet-nulle regressiehelling veroorzaakt geen correctie als de factor ernaast nul is.",
          "optionExplanations": [
            "0 klopt: het verschil B − Nb̄ is nul en daarmee ook het product met b₁.",
            "b₁ is alleen de helling. Voor de correctie moet je die vermenigvuldigen met B − Nb̄, en dat verschil is nul.",
            "N is de populatieomvang. De correctie is b₁(B − Nb̄), en die wordt hier nul ongeacht de omvang van N."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 18–24, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2024",
              "locator": "Vraag 1 en 3, PDF-pagina 1–2",
              "page": 1
            },
            {
              "source": "boek-h8b",
              "page": 3,
              "locator": "Boek p. 213; oorspronkelijke PDF p. 231; uitsnede p. 3"
            },
            {
              "source": "boek-h8b",
              "page": 6,
              "locator": "Boek p. 216; oorspronkelijke PDF p. 234; uitsnede p. 6"
            }
          ],
          "recognition": {
            "signals": "B = Nb̄ en “correctie op MPU”.",
            "meaning": "De regressieschatter corrigeert het verschil tussen bekend en via de steekproef geschat boektotaal.",
            "approach": "Bekijk de factor B − Nb̄ in b₁(B − Nb̄) voordat je verder rekent.",
            "answer": "De correctieterm; onderscheid die van de volledige schatting."
          },
          "level": 1,
          "guidance": {
            "title": "Regressieschatter met boekwaarden als hulpinformatie",
            "focus": "De hulpinformatie corrigeert voor het verschil tussen het bekende boektotaal B en het uit de steekproef opgeschaalde boektotaal Nb̄. Werk dit verschil afzonderlijk uit.",
            "rules": [
              "De regressieschatter schat het totale W van de populatie. Zij corrigeert de directe schatting: Ŵ_R = Nw̄ + b₁(B − Nb̄), waarbij b₁ = R_bw × s_w/s_b.",
              "Bij dezelfde gegevens is s_R = s_MPU × √(1 − R_bw²). Deze berekende standaardfout is kleiner dan of gelijk aan die van MPU en vervangt niet de controle van de toepassingsvoorwaarden."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 18-24: regressieschatter"
              },
              {
                "source": "boek-h8b",
                "page": 6,
                "locator": "Boek p. 216; oorspronkelijke PDF p. 234: onzekerheid en voorwaarden"
              }
            ]
          }
        },
        {
          "id": "mc-regressieschatter-basis-2",
          "prompt": "R = 0,8. Met welke factor vermenigvuldig je s_MPU?",
          "options": [
            "0,64",
            "0,6",
            "0,2"
          ],
          "correct": 1,
          "explanation": "Volgens de behandelde formule vermenigvuldig je s_MPU met √(1 − R²). Bij R = 0,8 is R² = 0,64 en 1 − R² = 0,36. Neem de wortel: √0,36 = 0,6. De nieuwe standaardfout is dus 60% van s_MPU.",
          "steps": [
            "Volgens de behandelde formule vermenigvuldig je s_MPU met √(1 − R²).",
            "Bij R = 0,8 is R² = 0,64 en 1 − R² = 0,36.",
            "Neem de wortel: √0,36 = 0,6. De nieuwe standaardfout is dus 60% van s_MPU."
          ],
          "pattern": "Herken: R gegeven en gevraagd naar een factor voor s_MPU. → Betekenis: Een standaardfout gebruikt de wortel uit het onverklaarde variantieaandeel. → Aanpak: Bereken achtereenvolgens R², 1 − R² en √(1 − R²). → Gevraagd antwoord: Een vermenigvuldigingsfactor voor de standaardfout, niet R of R².",
          "trap": "R, R² en √(1 − R²) zijn drie verschillende getallen.",
          "optionExplanations": [
            "0,64 is R², niet de correctiefactor voor de standaardfout. De factor is √(1 − 0,64).",
            "0,6 klopt: √(1 − 0,8²) = √0,36 = 0,6.",
            "0,2 is 1 − R. De formule vraagt eerst R kwadrateren, van 1 aftrekken en daarna de wortel nemen."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 18–24, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2024",
              "locator": "Vraag 1 en 3, PDF-pagina 1–2",
              "page": 1
            },
            {
              "source": "boek-h8b",
              "page": 3,
              "locator": "Boek p. 213; oorspronkelijke PDF p. 231; uitsnede p. 3"
            },
            {
              "source": "boek-h8b",
              "page": 6,
              "locator": "Boek p. 216; oorspronkelijke PDF p. 234; uitsnede p. 6"
            }
          ],
          "recognition": {
            "signals": "R gegeven en gevraagd naar een factor voor s_MPU.",
            "meaning": "Een standaardfout gebruikt de wortel uit het onverklaarde variantieaandeel.",
            "approach": "Bereken achtereenvolgens R², 1 − R² en √(1 − R²).",
            "answer": "Een vermenigvuldigingsfactor voor de standaardfout, niet R of R²."
          },
          "level": 1,
          "guidance": {
            "title": "Regressieschatter met boekwaarden als hulpinformatie",
            "focus": "De vermenigvuldigingsfactor zet s_MPU om in s_R. Kwadrateer eerst R, trek af van 1 en neem daarna de wortel; de factor is niet R² zelf.",
            "rules": [
              "De regressieschatter schat het totale W van de populatie. Zij corrigeert de directe schatting: Ŵ_R = Nw̄ + b₁(B − Nb̄), waarbij b₁ = R_bw × s_w/s_b.",
              "Bij dezelfde gegevens is s_R = s_MPU × √(1 − R_bw²). Deze berekende standaardfout is kleiner dan of gelijk aan die van MPU en vervangt niet de controle van de toepassingsvoorwaarden."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 18-24: regressieschatter"
              },
              {
                "source": "boek-h8b",
                "page": 6,
                "locator": "Boek p. 216; oorspronkelijke PDF p. 234: onzekerheid en voorwaarden"
              }
            ]
          }
        },
        {
          "id": "mc-regressieschatter-basis-3",
          "prompt": "Wat schat je hier?",
          "options": [
            "De waarde van één nieuwe persoon",
            "Alleen de correlatie",
            "Het totale W van de populatie"
          ],
          "correct": 2,
          "explanation": "Deze regressieschatter staat in het onderdeel schatten van totale populatiewaarden. Het lineaire verband tussen boekwaarde b en werkelijke waarde w helpt het populatietotaal W te schatten. Dat is een ander doel dan een regressielijn gebruiken om y voor één nieuwe persoon te voorspellen.",
          "steps": [
            "Deze regressieschatter staat in het onderdeel schatten van totale populatiewaarden.",
            "Het lineaire verband tussen boekwaarde b en werkelijke waarde w helpt het populatietotaal W te schatten.",
            "Dat is een ander doel dan een regressielijn gebruiken om y voor één nieuwe persoon te voorspellen."
          ],
          "pattern": "Herken: “Hier” verwijst naar de regressieschatter met W, N en B in deze les. → Betekenis: Regressie wordt hier ingezet om een werkelijk populatietotaal te schatten. → Aanpak: Koppel W aan het totale bedrag en B aan de beschikbare hulpinformatie. → Gevraagd antwoord: Het schattingsdoel: een populatietotaal, geen voorspelling voor één persoon.",
          "trap": "Het woord regressie betekent niet dat iedere opgave een individuele voorspelling vraagt.",
          "optionExplanations": [
            "Een nieuwe persoon voorspellen hoort bij regressievoorspelling. De hier behandelde schatter gebruikt N en B voor een populatietotaal.",
            "Correlatie is een hulpmiddel in de berekening en onzekerheid. De uiteindelijke gevraagde grootheid is W.",
            "Het doel is het totale W van de populatie. De regressie levert daarbij een correctie op de directe totaalschatting."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 18–24, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2024",
              "locator": "Vraag 1 en 3, PDF-pagina 1–2",
              "page": 1
            },
            {
              "source": "boek-h8b",
              "page": 3,
              "locator": "Boek p. 213; oorspronkelijke PDF p. 231; uitsnede p. 3"
            },
            {
              "source": "boek-h8b",
              "page": 6,
              "locator": "Boek p. 216; oorspronkelijke PDF p. 234; uitsnede p. 6"
            }
          ],
          "recognition": {
            "signals": "“Hier” verwijst naar de regressieschatter met W, N en B in deze les.",
            "meaning": "Regressie wordt hier ingezet om een werkelijk populatietotaal te schatten.",
            "approach": "Koppel W aan het totale bedrag en B aan de beschikbare hulpinformatie.",
            "answer": "Het schattingsdoel: een populatietotaal, geen voorspelling voor één persoon."
          },
          "level": 2,
          "guidance": {
            "title": "Regressieschatter met boekwaarden als hulpinformatie",
            "focus": "Deze schattingsmethode gebruikt het verband tussen boekwaarde en werkelijke waarde om een populatietotaal te schatten. Dat is een ander doel dan een nieuwe individuele y voorspellen.",
            "rules": [
              "De regressieschatter schat het totale W van de populatie. Zij corrigeert de directe schatting: Ŵ_R = Nw̄ + b₁(B − Nb̄), waarbij b₁ = R_bw × s_w/s_b.",
              "Bij dezelfde gegevens is s_R = s_MPU × √(1 − R_bw²). Deze berekende standaardfout is kleiner dan of gelijk aan die van MPU en vervangt niet de controle van de toepassingsvoorwaarden."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 18-24: regressieschatter"
              },
              {
                "source": "boek-h8b",
                "page": 6,
                "locator": "Boek p. 216; oorspronkelijke PDF p. 234: onzekerheid en voorwaarden"
              }
            ]
          }
        },
        {
          "id": "mc-regressieschatter-toepassing-1",
          "prompt": "R_bw = 0,8, s_w = 30 en s_b = 20. Wat is b₁?",
          "options": [
            "0,533",
            "1,2",
            "0,8",
            "24"
          ],
          "correct": 1,
          "level": 2,
          "steps": [
            "b₁ = R_bw × s_w/s_b.",
            "0,8 × 30/20 = 1,2.",
            "Correlatie is dimensieloos. De verhouding s_w/s_b zet haar om in een helling met de schaal van w per eenheid b."
          ],
          "explanation": "b₁ = R_bw × s_w/s_b. 0,8 × 30/20 = 1,2. Correlatie is dimensieloos. De verhouding s_w/s_b zet haar om in een helling met de schaal van w per eenheid b.",
          "pattern": "Herken: R_bw en de spreidingen van w en b; gevraagd is b₁. → Betekenis: Dit zijn de onderdelen van de regressiehelling van werkelijk op geboekt. → Aanpak: Gebruik b₁ = R_bw × s_w/s_b en zet de spreidingen niet omgekeerd. → Gevraagd antwoord: Een hellingscoëfficiënt in werkelijke waarde per eenheid boekwaarde.",
          "trap": "Verwissel s_w/s_b niet met s_b/s_w.",
          "optionExplanations": [
            "0,533 gebruikt ongeveer 0,8 × 20/30. Dat verwisselt s_w en s_b in de hellingsformule.",
            "1,2 = 0,8 × 30/20. De correlatie wordt vermenigvuldigd met de juiste verhouding van de standaardafwijkingen.",
            "0,8 is de correlatie zelf. De verschillende spreidingen 30 en 20 zijn nog niet verwerkt.",
            "24 = 0,8 × 30. De deling door s_b = 20 ontbreekt."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 18–24, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2024",
              "locator": "Vraag 1 en 3, PDF-pagina 1–2",
              "page": 1
            },
            {
              "source": "boek-h8b",
              "page": 3,
              "locator": "Boek p. 213; oorspronkelijke PDF p. 231; uitsnede p. 3"
            },
            {
              "source": "boek-h8b",
              "page": 6,
              "locator": "Boek p. 216; oorspronkelijke PDF p. 234; uitsnede p. 6"
            }
          ],
          "recognition": {
            "signals": "R_bw en de spreidingen van w en b; gevraagd is b₁.",
            "meaning": "Dit zijn de onderdelen van de regressiehelling van werkelijk op geboekt.",
            "approach": "Gebruik b₁ = R_bw × s_w/s_b en zet de spreidingen niet omgekeerd.",
            "answer": "Een hellingscoëfficiënt in werkelijke waarde per eenheid boekwaarde."
          },
          "guidance": {
            "title": "Regressieschatter met boekwaarden als hulpinformatie",
            "focus": "De helling gebruikt correlatie maal de verhouding van de spreidingen: s_w staat boven s_b. Het teken komt uit de correlatie.",
            "rules": [
              "De regressieschatter schat het totale W van de populatie. Zij corrigeert de directe schatting: Ŵ_R = Nw̄ + b₁(B − Nb̄), waarbij b₁ = R_bw × s_w/s_b.",
              "Bij dezelfde gegevens is s_R = s_MPU × √(1 − R_bw²). Deze berekende standaardfout is kleiner dan of gelijk aan die van MPU en vervangt niet de controle van de toepassingsvoorwaarden."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 18-24: regressieschatter"
              },
              {
                "source": "boek-h8b",
                "page": 6,
                "locator": "Boek p. 216; oorspronkelijke PDF p. 234: onzekerheid en voorwaarden"
              }
            ]
          }
        },
        {
          "id": "mc-regressieschatter-aanvulling-dekking",
          "level": 2,
          "prompt": "Eigen oefenvraag. Bij gelijk betrouwbaarheidsniveau is het berekende regressieschattingsinterval smaller dan het MPU-interval. Wat volgt daaruit?",
          "options": [
            "Meer berekende precisie, mits de voorwaarden passen",
            "De gekozen betrouwbaarheid is automatisch hoger",
            "De werkelijke waarde ligt zeker in het interval",
            "Diagnostiek en voorwaarden zijn overbodig"
          ],
          "correct": 0,
          "optionExplanations": [
            "De kleinere marge is meer berekende precisie. De geldigheid blijft afhangen van selectie en foutstructuur.",
            "Bij hetzelfde gekozen niveau stijgt de betrouwbaarheid niet door een kleinere standaardfout.",
            "Een interval uit een steekproef geeft geen zekerheid dat de onbekende waarde erin ligt.",
            "Juist een ongeschikte foutstructuur kan een te smal en slecht dekkend interval opleveren."
          ],
          "steps": [
            "De betrouwbaarheid wordt in de vraag gelijk gehouden.",
            "De factor √(1 − R²) verkleint de berekende standaardfout.",
            "Controleer of het verband en de foutverdeling die berekening rechtvaardigen."
          ],
          "explanation": "De betrouwbaarheid wordt in de vraag gelijk gehouden. De factor √(1 − R²) verkleint de berekende standaardfout. Controleer of het verband en de foutverdeling die berekening rechtvaardigen.",
          "pattern": "Herken: “Gelijk betrouwbaarheidsniveau” en een “smaller” regressieschattingsinterval. → Betekenis: De vergelijking gaat over precisie bij een gelijk gekozen niveau. → Aanpak: Verbind de kleinere marge met berekende precisie en controleer of de modelvoorwaarden passen. → Gevraagd antwoord: Een voorwaardelijk precisieoordeel, geen hogere betrouwbaarheid of gegarandeerde dekking.",
          "trap": "Verwar een kleinere marge niet met gegarandeerde dekking.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 18–24, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2024",
              "locator": "Vraag 1 en 3, PDF-pagina 1–2",
              "page": 1
            },
            {
              "source": "boek-h8b",
              "page": 3,
              "locator": "Boek p. 213; oorspronkelijke PDF p. 231; uitsnede p. 3"
            },
            {
              "source": "boek-h8b",
              "page": 6,
              "locator": "Boek p. 216; oorspronkelijke PDF p. 234; uitsnede p. 6"
            }
          ],
          "recognition": {
            "signals": "“Gelijk betrouwbaarheidsniveau” en een “smaller” regressieschattingsinterval.",
            "meaning": "De vergelijking gaat over precisie bij een gelijk gekozen niveau.",
            "approach": "Verbind de kleinere marge met berekende precisie en controleer of de modelvoorwaarden passen.",
            "answer": "Een voorwaardelijk precisieoordeel, geen hogere betrouwbaarheid of gegarandeerde dekking."
          },
          "guidance": {
            "title": "Regressieschatter met boekwaarden als hulpinformatie",
            "focus": "Een smaller berekend interval bewijst op zichzelf niet dat de beoogde betrouwbaarheid wordt gehaald. De gegevens en toepassingsvoorwaarden moeten bij de methode passen.",
            "rules": [
              "De regressieschatter schat het totale W van de populatie. Zij corrigeert de directe schatting: Ŵ_R = Nw̄ + b₁(B − Nb̄), waarbij b₁ = R_bw × s_w/s_b.",
              "Bij dezelfde gegevens is s_R = s_MPU × √(1 − R_bw²). Deze berekende standaardfout is kleiner dan of gelijk aan die van MPU en vervangt niet de controle van de toepassingsvoorwaarden."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 18-24: regressieschatter"
              },
              {
                "source": "boek-h8b",
                "page": 6,
                "locator": "Boek p. 216; oorspronkelijke PDF p. 234: onzekerheid en voorwaarden"
              }
            ]
          }
        },
        {
          "id": "mc-regressieschatter-toepassing-2",
          "prompt": "N = 1.000, w̄ = 90, b̄ = 100, B = 105.000 en b₁ = 0,8. Wat is Ŵ_R?",
          "options": [
            "€ 90.000",
            "€ 84.000",
            "€ 94.000",
            "€ 105.000"
          ],
          "correct": 2,
          "level": 3,
          "steps": [
            "MPU geeft Nw̄ = 90.000.",
            "B − Nb̄ = 105.000 − 100.000 = 5.000.",
            "Correctie: 0,8 × 5.000 = 4.000; totaal 94.000.",
            "De steekproef onderschat hier het bekende boektotaal met € 5.000. De regressiehelling vertaalt dat verschil naar een correctie van € 4.000 op de werkelijke totaalschatting."
          ],
          "explanation": "MPU geeft Nw̄ = 90.000. B − Nb̄ = 105.000 − 100.000 = 5.000. Correctie: 0,8 × 5.000 = 4.000; totaal 94.000. De steekproef onderschat hier het bekende boektotaal met € 5.000. De regressiehelling vertaalt dat verschil naar een correctie van € 4.000 op de werkelijke totaalschatting.",
          "pattern": "Herken: Nw̄, Nb̄, bekend B en een helling b₁ kunnen uit de gegevens worden opgebouwd. → Betekenis: Het verschil in boektotalen corrigeert de directe schatting van W. → Aanpak: Bereken Nw̄ + b₁(B − Nb̄), met haakjes rond het hele verschil. → Gevraagd antwoord: De volledige regressieschatting van het werkelijke populatietotaal.",
          "trap": "B is de hulpinformatie, niet automatisch het antwoord.",
          "optionExplanations": [
            "€ 90.000 is alleen Nw̄, dus de directe MPU-schatting. De bekende hulpinformatie vraagt nog een positieve correctie.",
            "€ 84.000 is 0,8 × B. De regressieschatter past b₁ niet op heel B toe, maar op B − Nb̄, naast Nw̄.",
            "€ 94.000 = 90.000 + 0,8 × (105.000 − 100.000). Dit gebruikt zowel MPU als de correctie op het geschatte boektotaal.",
            "€ 105.000 is het bekende boektotaal. Dat is hulpinformatie en is niet zonder meer gelijk aan het werkelijke totaal."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 18–24, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2024",
              "locator": "Vraag 1 en 3, PDF-pagina 1–2",
              "page": 1
            },
            {
              "source": "boek-h8b",
              "page": 3,
              "locator": "Boek p. 213; oorspronkelijke PDF p. 231; uitsnede p. 3"
            },
            {
              "source": "boek-h8b",
              "page": 6,
              "locator": "Boek p. 216; oorspronkelijke PDF p. 234; uitsnede p. 6"
            }
          ],
          "recognition": {
            "signals": "Nw̄, Nb̄, bekend B en een helling b₁ kunnen uit de gegevens worden opgebouwd.",
            "meaning": "Het verschil in boektotalen corrigeert de directe schatting van W.",
            "approach": "Bereken Nw̄ + b₁(B − Nb̄), met haakjes rond het hele verschil.",
            "answer": "De volledige regressieschatting van het werkelijke populatietotaal."
          },
          "guidance": {
            "title": "Regressieschatter met boekwaarden als hulpinformatie",
            "focus": "De hulpinformatie corrigeert voor het verschil tussen het bekende boektotaal B en het uit de steekproef opgeschaalde boektotaal Nb̄. Werk dit verschil afzonderlijk uit.",
            "rules": [
              "De regressieschatter schat het totale W van de populatie. Zij corrigeert de directe schatting: Ŵ_R = Nw̄ + b₁(B − Nb̄), waarbij b₁ = R_bw × s_w/s_b.",
              "Bij dezelfde gegevens is s_R = s_MPU × √(1 − R_bw²). Deze berekende standaardfout is kleiner dan of gelijk aan die van MPU en vervangt niet de controle van de toepassingsvoorwaarden."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 18-24: regressieschatter"
              },
              {
                "source": "boek-h8b",
                "page": 6,
                "locator": "Boek p. 216; oorspronkelijke PDF p. 234: onzekerheid en voorwaarden"
              }
            ]
          }
        },
        {
          "id": "mc-regressieschatter-toepassing-3",
          "prompt": "De standaardfout van MPU is 10.000 en R_bw = 0,6. Wat is de standaardfout van de regressieschatter?",
          "options": [
            "4.000",
            "6.000",
            "6.400",
            "8.000"
          ],
          "correct": 3,
          "level": 3,
          "steps": [
            "Correctiefactor = √(1 − 0,6²) = √0,64 = 0,8.",
            "10.000 × 0,8 = 8.000.",
            "De resterende variantiefractie is 1 − R² = 0,64. Een standaardfout staat op wortelschaal, zodat de vermenigvuldigingsfactor 0,8 is."
          ],
          "explanation": "Correctiefactor = √(1 − 0,6²) = √0,64 = 0,8. 10.000 × 0,8 = 8.000. De resterende variantiefractie is 1 − R² = 0,64. Een standaardfout staat op wortelschaal, zodat de vermenigvuldigingsfactor 0,8 is.",
          "pattern": "Herken: De standaardfout van MPU en R_bw; gevraagd is de nieuwe standaardfout. → Betekenis: Het verband met boekwaarde vermindert volgens de behandelde formule de resterende onzekerheid. → Aanpak: Vermenigvuldig de bestaande standaardfout met √(1 − R_bw²). → Gevraagd antwoord: Een standaardfout in dezelfde eenheid als de gegeven MPU-standaardfout.",
          "trap": "1 − R en 1 − R² zijn geen standaardfoutfactoren zonder wortel.",
          "optionExplanations": [
            "4.000 gebruikt de factor 1 − 0,6 = 0,4. De formule vraagt √(1 − R²).",
            "6.000 gebruikt R zelf als factor. De standaardfoutcorrectie is niet de correlatie.",
            "6.400 gebruikt 1 − R² = 0,64, maar vergeet de wortel voor de standaardfout.",
            "8.000 = 10.000 × √(1 − 0,6²). De juiste standaardfoutfactor is 0,8."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 18–24, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2024",
              "locator": "Vraag 1 en 3, PDF-pagina 1–2",
              "page": 1
            },
            {
              "source": "boek-h8b",
              "page": 3,
              "locator": "Boek p. 213; oorspronkelijke PDF p. 231; uitsnede p. 3"
            },
            {
              "source": "boek-h8b",
              "page": 6,
              "locator": "Boek p. 216; oorspronkelijke PDF p. 234; uitsnede p. 6"
            }
          ],
          "recognition": {
            "signals": "De standaardfout van MPU en R_bw; gevraagd is de nieuwe standaardfout.",
            "meaning": "Het verband met boekwaarde vermindert volgens de behandelde formule de resterende onzekerheid.",
            "approach": "Vermenigvuldig de bestaande standaardfout met √(1 − R_bw²).",
            "answer": "Een standaardfout in dezelfde eenheid als de gegeven MPU-standaardfout."
          },
          "guidance": {
            "title": "Regressieschatter met boekwaarden als hulpinformatie",
            "focus": "De vermenigvuldigingsfactor zet s_MPU om in s_R. Kwadrateer eerst R, trek af van 1 en neem daarna de wortel; de factor is niet R² zelf.",
            "rules": [
              "De regressieschatter schat het totale W van de populatie. Zij corrigeert de directe schatting: Ŵ_R = Nw̄ + b₁(B − Nb̄), waarbij b₁ = R_bw × s_w/s_b.",
              "Bij dezelfde gegevens is s_R = s_MPU × √(1 − R_bw²). Deze berekende standaardfout is kleiner dan of gelijk aan die van MPU en vervangt niet de controle van de toepassingsvoorwaarden."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 18-24: regressieschatter"
              },
              {
                "source": "boek-h8b",
                "page": 6,
                "locator": "Boek p. 216; oorspronkelijke PDF p. 234: onzekerheid en voorwaarden"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "steekproefomvang",
      "title": "Hoeveel posten moet je controleren?",
      "phase": "Schatten",
      "lesson": "steekproefomvang",
      "signal": "De opgave vraagt hoeveel controles nodig zijn voor een gewenste nauwkeurigheid.",
      "approach": "Zet breedte om naar E, kies de variantie en rond de benodigde n omhoog.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formules 5, 11 en 24, PDF-pagina 1–2",
          "page": 2
        },
        {
          "source": "exam2024",
          "locator": "Vraag 2, PDF-pagina 1–2",
          "page": 1
        },
        {
          "source": "boek-h8c",
          "page": 10,
          "locator": "Boek p. 230; oorspronkelijke PDF p. 248; uitsnede p. 10"
        },
        {
          "source": "opgaven",
          "page": 8,
          "locator": "H8 opgave 9b/c, PDF 8"
        },
        {
          "source": "uitwerkingen",
          "page": 13,
          "locator": "H8 opgave 9c, PDF 13"
        }
      ],
      "questions": [
        {
          "id": "mc-steekproefomvang-basis-1",
          "prompt": "De formule geeft n = 83,02. Hoeveel posten neem je?",
          "options": [
            "83",
            "84",
            "82"
          ],
          "correct": 1,
          "explanation": "De formule levert de minimumomvang die nodig is voor de gestelde nauwkeurigheid. 83 posten is minder dan de berekende 83,02 en voldoet daarom niet aan die berekende minimumomvang. Omdat je alleen hele posten kunt controleren, rond je naar boven af: n = 84.",
          "steps": [
            "De formule levert de minimumomvang die nodig is voor de gestelde nauwkeurigheid.",
            "83 posten is minder dan de berekende 83,02 en voldoet daarom niet aan die berekende minimumomvang.",
            "Omdat je alleen hele posten kunt controleren, rond je naar boven af: n = 84."
          ],
          "pattern": "Herken: Een berekende n met decimalen en “hoeveel posten”. → Betekenis: De formule levert een minimum; posten zijn alleen in gehele aantallen te controleren. → Aanpak: Neem het kleinste gehele aantal dat minstens de berekende n is. → Gevraagd antwoord: Een naar boven afgeronde totale steekproefomvang.",
          "trap": "Gewoon afronden op het dichtstbijzijnde gehele getal kan onder het vereiste minimum uitkomen.",
          "optionExplanations": [
            "83 is gewone afronding, maar ligt onder 83,02. De gewenste nauwkeurigheid is daarmee volgens de formule niet gedekt.",
            "84 is het kleinste gehele aantal dat minstens 83,02 bedraagt.",
            "82 ligt nog verder onder de berekende minimumomvang. Naar beneden afronden past niet bij een vereiste nauwkeurigheid."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 5, 11 en 24, PDF-pagina 1–2",
              "page": 2
            },
            {
              "source": "exam2024",
              "locator": "Vraag 2, PDF-pagina 1–2",
              "page": 1
            },
            {
              "source": "boek-h8c",
              "page": 10,
              "locator": "Boek p. 230; oorspronkelijke PDF p. 248; uitsnede p. 10"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "Een berekende n met decimalen en “hoeveel posten”.",
            "meaning": "De formule levert een minimum; posten zijn alleen in gehele aantallen te controleren.",
            "approach": "Neem het kleinste gehele aantal dat minstens de berekende n is.",
            "answer": "Een naar boven afgeronde totale steekproefomvang."
          },
          "level": 1,
          "guidance": {
            "title": "Benodigde omvang en extra controles",
            "focus": "Een fractie van een controle is niet mogelijk. Rond het vereiste totale aantal omhoog; bereken de extra controles ten opzichte van wat al is gedaan.",
            "rules": [
              "E is de gewenste halve intervalbreedte. Gebruik de spreiding die bij de gekozen schatter hoort: s_w voor MPU, s_e voor verschil en s_q voor quotiënt. De kritieke t-waarde hangt af van de betrouwbaarheid, een- of tweezijdigheid en vrijheidsgraden.",
              "De berekende omvang is een totaal. Rond dat aantal naar boven af en trek pas daarna de al gecontroleerde posten af als de uitbreiding wordt gevraagd."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 5 en 11: steekproefomvang; formule 17: onzekerheid quotiëntschatter"
              },
              {
                "source": "formules",
                "page": 2,
                "locator": "Formule 24: omvang bij de regressieschatter"
              }
            ]
          }
        },
        {
          "id": "mc-steekproefomvang-basis-2",
          "prompt": "Er zijn 40 controles gedaan en totaal zijn 84 nodig. Wat is de uitbreiding?",
          "options": [
            "124",
            "84",
            "44"
          ],
          "correct": 2,
          "explanation": "De totale benodigde omvang is 84 controles, inclusief de controles die al bruikbaar zijn uitgevoerd. Trek daarom de 40 eerdere controles van die totale behoefte af. Uitbreiding = 84 − 40 = 44 nieuwe controles. Controle: 40 + 44 = 84.",
          "steps": [
            "De totale benodigde omvang is 84 controles, inclusief de controles die al bruikbaar zijn uitgevoerd.",
            "Trek daarom de 40 eerdere controles van die totale behoefte af.",
            "Uitbreiding = 84 − 40 = 44 nieuwe controles. Controle: 40 + 44 = 84."
          ],
          "pattern": "Herken: “Al gedaan”, “totaal nodig” en “uitbreiding”. → Betekenis: Bestaande controles zijn onderdeel van het benodigde totaal. → Aanpak: Trek het al gecontroleerde aantal af van de totale behoefte. → Gevraagd antwoord: Het aantal extra controles, niet het nieuwe totaal.",
          "trap": "Tel de eerdere controles niet opnieuw op bij een totaal waarin ze al zijn begrepen.",
          "optionExplanations": [
            "124 telt 40 bij 84 op. Daarmee behandel je de totale behoefte ten onrechte als een extra behoefte.",
            "84 is het totale aantal controles. De vraag vraagt uitsluitend hoeveel er nog bij moeten.",
            "44 extra controles brengen het al uitgevoerde aantal van 40 op het vereiste totaal van 84."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 5, 11 en 24, PDF-pagina 1–2",
              "page": 2
            },
            {
              "source": "exam2024",
              "locator": "Vraag 2, PDF-pagina 1–2",
              "page": 1
            },
            {
              "source": "boek-h8c",
              "page": 10,
              "locator": "Boek p. 230; oorspronkelijke PDF p. 248; uitsnede p. 10"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "“Al gedaan”, “totaal nodig” en “uitbreiding”.",
            "meaning": "Bestaande controles zijn onderdeel van het benodigde totaal.",
            "approach": "Trek het al gecontroleerde aantal af van de totale behoefte.",
            "answer": "Het aantal extra controles, niet het nieuwe totaal."
          },
          "level": 1,
          "guidance": {
            "title": "Benodigde omvang en extra controles",
            "focus": "Een fractie van een controle is niet mogelijk. Rond het vereiste totale aantal omhoog; bereken de extra controles ten opzichte van wat al is gedaan.",
            "rules": [
              "E is de gewenste halve intervalbreedte. Gebruik de spreiding die bij de gekozen schatter hoort: s_w voor MPU, s_e voor verschil en s_q voor quotiënt. De kritieke t-waarde hangt af van de betrouwbaarheid, een- of tweezijdigheid en vrijheidsgraden.",
              "De berekende omvang is een totaal. Rond dat aantal naar boven af en trek pas daarna de al gecontroleerde posten af als de uitbreiding wordt gevraagd."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 5 en 11: steekproefomvang; formule 17: onzekerheid quotiëntschatter"
              },
              {
                "source": "formules",
                "page": 2,
                "locator": "Formule 24: omvang bij de regressieschatter"
              }
            ]
          }
        },
        {
          "id": "mc-steekproefomvang-basis-3",
          "prompt": "Welke variantie hoort in de omvangsformule voor de verschilschatter?",
          "options": [
            "s²_e",
            "s²_b",
            "s²_w"
          ],
          "correct": 0,
          "explanation": "De verschilschatter schat de correctie op B via de verschillen e = b − w. De benodigde omvang moet daarom worden afgestemd op de spreiding van die verschillen. Gebruik s²_e in de omvangsformule. s²_w hoort bij de directe schatter en s²_b beschrijft alleen boekwaarden.",
          "steps": [
            "De verschilschatter schat de correctie op B via de verschillen e = b − w.",
            "De benodigde omvang moet daarom worden afgestemd op de spreiding van die verschillen.",
            "Gebruik s²_e in de omvangsformule. s²_w hoort bij de directe schatter en s²_b beschrijft alleen boekwaarden."
          ],
          "pattern": "Herken: “Omvangsformule” samen met “verschilschatter”. → Betekenis: De planning moet dezelfde onzekerheidsbron gebruiken als de gekozen schatter. → Aanpak: Selecteer de variantie van e = b − w in plaats van die van w of b. → Gevraagd antwoord: De passende foutvariantie s_e² voor de omvangsberekening.",
          "trap": "De drie varianties kunnen verschillende waarden hebben en zijn niet uitwisselbaar.",
          "optionExplanations": [
            "s²_e is de juiste variantie, omdat de verschilschatter de fouten e = b − w gebruikt.",
            "s²_b beschrijft verschillen tussen boekwaarden. Daaruit volgt niet hoe sterk de controlefouten b − w spreiden.",
            "s²_w is de variantie van werkelijke waarden. Voor de onzekerheid van een verschilcorrectie heb je de variantie van e nodig."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 5, 11 en 24, PDF-pagina 1–2",
              "page": 2
            },
            {
              "source": "exam2024",
              "locator": "Vraag 2, PDF-pagina 1–2",
              "page": 1
            },
            {
              "source": "boek-h8c",
              "page": 10,
              "locator": "Boek p. 230; oorspronkelijke PDF p. 248; uitsnede p. 10"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "“Omvangsformule” samen met “verschilschatter”.",
            "meaning": "De planning moet dezelfde onzekerheidsbron gebruiken als de gekozen schatter.",
            "approach": "Selecteer de variantie van e = b − w in plaats van die van w of b.",
            "answer": "De passende foutvariantie s_e² voor de omvangsberekening."
          },
          "level": 2,
          "guidance": {
            "title": "Benodigde omvang en extra controles",
            "focus": "Bij de verschilschatter bepaalt s_e² de benodigde omvang. Gebruik niet automatisch de variantie van alle werkelijke waarden.",
            "rules": [
              "E is de gewenste halve intervalbreedte. Gebruik de spreiding die bij de gekozen schatter hoort: s_w voor MPU, s_e voor verschil en s_q voor quotiënt. De kritieke t-waarde hangt af van de betrouwbaarheid, een- of tweezijdigheid en vrijheidsgraden.",
              "De berekende omvang is een totaal. Rond dat aantal naar boven af en trek pas daarna de al gecontroleerde posten af als de uitbreiding wordt gevraagd."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 5 en 11: steekproefomvang; formule 17: onzekerheid quotiëntschatter"
              },
              {
                "source": "formules",
                "page": 2,
                "locator": "Formule 24: omvang bij de regressieschatter"
              }
            ]
          }
        },
        {
          "id": "mc-steekproefomvang-toepassing-1",
          "prompt": "De gewenste totale intervalbreedte is 8.000. In γ = E²/(t²Ns²) vul je voor E in:",
          "options": [
            "16.000",
            "8.000",
            "4.000",
            "2.000"
          ],
          "correct": 2,
          "level": 2,
          "steps": [
            "De breedte van het interval is 2E.",
            "E = 8.000/2 = 4.000.",
            "E staat voor de afstand van de schatting tot één grens. Een verkeerde E werkt in γ door via E² en verandert de berekende omvang sterk."
          ],
          "explanation": "De breedte van het interval is 2E. E = 8.000/2 = 4.000. E staat voor de afstand van de schatting tot één grens. Een verkeerde E werkt in γ door via E² en verandert de berekende omvang sterk.",
          "pattern": "Herken: Een “totale intervalbreedte” wordt gegeven; de formule vraagt E. → Betekenis: E is de marge aan één kant van het middelpunt. → Aanpak: Halveer de totale breedte vóór je E kwadrateert in γ. → Gevraagd antwoord: De halve breedte die als invoer voor de omvangsformule dient.",
          "trap": "Een dubbele E wordt in de formule gekwadrateerd en heeft dus veel effect.",
          "optionExplanations": [
            "16.000 verdubbelt de totale breedte. E is juist de helft van de gegeven breedte.",
            "8.000 is 2E. Daarmee zou je een tweemaal zo ruime marge toestaan als gevraagd.",
            "4.000 is de halve breedte: 2 × 4.000 = 8.000.",
            "2.000 halveert de totale breedte tweemaal. De formule vraagt één halve breedte."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 5, 11 en 24, PDF-pagina 1–2",
              "page": 2
            },
            {
              "source": "exam2024",
              "locator": "Vraag 2, PDF-pagina 1–2",
              "page": 1
            },
            {
              "source": "boek-h8c",
              "page": 10,
              "locator": "Boek p. 230; oorspronkelijke PDF p. 248; uitsnede p. 10"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "Een “totale intervalbreedte” wordt gegeven; de formule vraagt E.",
            "meaning": "E is de marge aan één kant van het middelpunt.",
            "approach": "Halveer de totale breedte vóór je E kwadrateert in γ.",
            "answer": "De halve breedte die als invoer voor de omvangsformule dient."
          },
          "guidance": {
            "title": "Benodigde omvang en extra controles",
            "focus": "Zet een gevraagde totale intervalbreedte eerst om in E. De formule gebruikt de halve breedte.",
            "rules": [
              "E is de gewenste halve intervalbreedte. Gebruik de spreiding die bij de gekozen schatter hoort: s_w voor MPU, s_e voor verschil en s_q voor quotiënt. De kritieke t-waarde hangt af van de betrouwbaarheid, een- of tweezijdigheid en vrijheidsgraden.",
              "De berekende omvang is een totaal. Rond dat aantal naar boven af en trek pas daarna de al gecontroleerde posten af als de uitbreiding wordt gevraagd."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 5 en 11: steekproefomvang; formule 17: onzekerheid quotiëntschatter"
              },
              {
                "source": "formules",
                "page": 2,
                "locator": "Formule 24: omvang bij de regressieschatter"
              }
            ]
          }
        },
        {
          "id": "mc-steekproefomvang-toepassing-2",
          "prompt": "Gebruik γ = E²/(t²Ns²) en n = N/(1 + γ). N = 1.000, E = 400, t = 2, s² = 100. Welke omvang is nodig?",
          "options": [
            "285",
            "286",
            "714",
            "715"
          ],
          "correct": 3,
          "level": 3,
          "steps": [
            "γ = 400²/(2² × 1.000 × 100) = 0,4.",
            "n = 1.000/1,4 ≈ 714,286.",
            "Rond naar boven: 715.",
            "De formule geeft de totale vereiste omvang. Naar boven afronden garandeert dat het gehele aantal niet onder de berekende 714,286 ligt."
          ],
          "explanation": "γ = 400²/(2² × 1.000 × 100) = 0,4. n = 1.000/1,4 ≈ 714,286. Rond naar boven: 715. De formule geeft de totale vereiste omvang. Naar boven afronden garandeert dat het gehele aantal niet onder de berekende 714,286 ligt.",
          "pattern": "Herken: De twee formules voor γ en n, met E, t, N en s². → Betekenis: Een maximale marge wordt teruggerekend naar benodigde totale omvang. → Aanpak: Bereken eerst γ, daarna N/(1 + γ), en rond alleen de uiteindelijke n omhoog af. → Gevraagd antwoord: Een minimaal geheel aantal te controleren posten.",
          "trap": "Afronden op het dichtstbijzijnde gehele getal is hier niet voldoende.",
          "optionExplanations": [
            "285 is niet de benodigde n. N − 715 = 285 is het aantal populatieposten dat na de vereiste controle ongecontroleerd blijft.",
            "286 is ongeveer N − 714,286. Dat is het complement van de berekende omvang, niet de benodigde steekproef zelf.",
            "714 rondt 714,286 naar beneden af. Daarmee blijft de omvang onder het berekende minimum.",
            "715 is het kleinste gehele aantal boven 714,286 en voldoet daarmee aan de berekende minimumomvang."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 5, 11 en 24, PDF-pagina 1–2",
              "page": 2
            },
            {
              "source": "exam2024",
              "locator": "Vraag 2, PDF-pagina 1–2",
              "page": 1
            },
            {
              "source": "boek-h8c",
              "page": 10,
              "locator": "Boek p. 230; oorspronkelijke PDF p. 248; uitsnede p. 10"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "De twee formules voor γ en n, met E, t, N en s².",
            "meaning": "Een maximale marge wordt teruggerekend naar benodigde totale omvang.",
            "approach": "Bereken eerst γ, daarna N/(1 + γ), en rond alleen de uiteindelijke n omhoog af.",
            "answer": "Een minimaal geheel aantal te controleren posten."
          },
          "guidance": {
            "title": "Benodigde omvang en extra controles",
            "focus": "Vul γ = E²/(t²Ns²) in met de spreiding van de opgegeven methode. Bereken daarna n = N/(1 + γ) en rond het totale n omhoog.",
            "rules": [
              "E is de gewenste halve intervalbreedte. Gebruik de spreiding die bij de gekozen schatter hoort: s_w voor MPU, s_e voor verschil en s_q voor quotiënt. De kritieke t-waarde hangt af van de betrouwbaarheid, een- of tweezijdigheid en vrijheidsgraden.",
              "De berekende omvang is een totaal. Rond dat aantal naar boven af en trek pas daarna de al gecontroleerde posten af als de uitbreiding wordt gevraagd."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 5 en 11: steekproefomvang; formule 17: onzekerheid quotiëntschatter"
              },
              {
                "source": "formules",
                "page": 2,
                "locator": "Formule 24: omvang bij de regressieschatter"
              }
            ]
          }
        },
        {
          "id": "mc-steekproefomvang-toepassing-3",
          "prompt": "Een berekende totale omvang is 124,01. Er zijn al 80 posten gecontroleerd. Hoeveel extra controles zijn nodig?",
          "options": [
            "45",
            "124",
            "125",
            "44"
          ],
          "correct": 0,
          "level": 3,
          "steps": [
            "Rond eerst de totale behoefte op naar 125.",
            "De uitbreiding is 125 − 80 = 45.",
            "Doe de twee bewerkingen in de juiste volgorde: bepaal eerst de gehele totale behoefte en trek daarna de bestaande controles af."
          ],
          "explanation": "Rond eerst de totale behoefte op naar 125. De uitbreiding is 125 − 80 = 45. Doe de twee bewerkingen in de juiste volgorde: bepaal eerst de gehele totale behoefte en trek daarna de bestaande controles af.",
          "pattern": "Herken: Een totale omvang met decimalen, een bestaand aantal en “extra”. → Betekenis: De minimumomvang en de uitbreiding zijn twee opeenvolgende stappen. → Aanpak: Rond de totale behoefte eerst omhoog af en trek daarna bestaande controles af. → Gevraagd antwoord: Een geheel aantal aanvullende controles.",
          "trap": "125 is de totale omvang, niet de uitbreiding.",
          "optionExplanations": [
            "45 extra controles brengen de 80 bestaande controles op 125, het naar boven afgeronde vereiste totaal.",
            "124 is een naar beneden afgeronde totale omvang en beantwoordt bovendien niet hoeveel extra controles nodig zijn.",
            "125 is de juiste totale omvang. Voor het gevraagde extra aantal moet je de 80 eerdere controles er nog van aftrekken.",
            "44 zou een totaal van 124 geven. Dat ligt onder de berekende vereiste 124,01."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 5, 11 en 24, PDF-pagina 1–2",
              "page": 2
            },
            {
              "source": "exam2024",
              "locator": "Vraag 2, PDF-pagina 1–2",
              "page": 1
            },
            {
              "source": "boek-h8c",
              "page": 10,
              "locator": "Boek p. 230; oorspronkelijke PDF p. 248; uitsnede p. 10"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "Een totale omvang met decimalen, een bestaand aantal en “extra”.",
            "meaning": "De minimumomvang en de uitbreiding zijn twee opeenvolgende stappen.",
            "approach": "Rond de totale behoefte eerst omhoog af en trek daarna bestaande controles af.",
            "answer": "Een geheel aantal aanvullende controles."
          },
          "guidance": {
            "title": "Benodigde omvang en extra controles",
            "focus": "Een fractie van een controle is niet mogelijk. Rond het vereiste totale aantal omhoog; bereken de extra controles ten opzichte van wat al is gedaan.",
            "rules": [
              "E is de gewenste halve intervalbreedte. Gebruik de spreiding die bij de gekozen schatter hoort: s_w voor MPU, s_e voor verschil en s_q voor quotiënt. De kritieke t-waarde hangt af van de betrouwbaarheid, een- of tweezijdigheid en vrijheidsgraden.",
              "De berekende omvang is een totaal. Rond dat aantal naar boven af en trek pas daarna de al gecontroleerde posten af als de uitbreiding wordt gevraagd."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 5 en 11: steekproefomvang; formule 17: onzekerheid quotiëntschatter"
              },
              {
                "source": "formules",
                "page": 2,
                "locator": "Formule 24: omvang bij de regressieschatter"
              }
            ]
          }
        },
        {
          "id": "mc-steekproefomvang-aanvulling-quotient",
          "level": 3,
          "prompt": "Eigen oefenvraag. Bij steekproefplanning met de quotiëntschatter zijn N = 1.000, t = 2, s_q = 7,60 en E = 1.000 gegeven. Gebruik γ = E²/(t²Ns_q²). Wat is de minimaal geplande totale n?",
          "options": [
            "1.000",
            "188",
            "187",
            "760"
          ],
          "correct": 1,
          "optionExplanations": [
            "Alle posten controleren is hier niet de minimaal berekende omvang volgens de gegeven formule.",
            "γ ≈ 4,32825 en N/(1 + γ) ≈ 187,679. Afronden naar boven geeft 188.",
            "Dit rondt naar beneden af en kan daardoor de vereiste marge overschrijden.",
            "Dit vermenigvuldigt de resterende spreiding willekeurig en volgt de omvangsformule niet."
          ],
          "steps": [
            "Gebruik s_q = 7,60 als resterende spreiding, niet de dimensieloze goedratio q.",
            "γ = 1.000²/(2² × 1.000 × 7,60²) ≈ 4,32825.",
            "n = 1.000/(1 + γ) ≈ 187,679; rond naar boven af op 188."
          ],
          "explanation": "Gebruik s_q = 7,60 als resterende spreiding, niet de dimensieloze goedratio q. γ = 1.000²/(2² × 1.000 × 7,60²) ≈ 4,32825. n = 1.000/(1 + γ) ≈ 187,679; rond naar boven af op 188.",
          "pattern": "Herken: “Quotiëntschatter” en s_q in de gegeven γ-formule. → Betekenis: De planning gebruikt resterende spreiding s_q, niet de dimensieloze goedratio q. → Aanpak: Vul s_q² in γ in, bereken N/(1 + γ) en rond de uitkomst naar boven af. → Gevraagd antwoord: Een minimale totale n; geen ratio of aanvullend aantal.",
          "trap": "Vul niet de goedratio q in waar de spreiding s_q moet staan.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 5, 11 en 24, PDF-pagina 1–2",
              "page": 2
            },
            {
              "source": "exam2024",
              "locator": "Vraag 2, PDF-pagina 1–2",
              "page": 1
            },
            {
              "source": "boek-h8c",
              "page": 10,
              "locator": "Boek p. 230; oorspronkelijke PDF p. 248; uitsnede p. 10"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "“Quotiëntschatter” en s_q in de gegeven γ-formule.",
            "meaning": "De planning gebruikt resterende spreiding s_q, niet de dimensieloze goedratio q.",
            "approach": "Vul s_q² in γ in, bereken N/(1 + γ) en rond de uitkomst naar boven af.",
            "answer": "Een minimale totale n; geen ratio of aanvullend aantal."
          },
          "guidance": {
            "title": "Benodigde omvang en extra controles",
            "focus": "Vul γ = E²/(t²Ns²) in met de spreiding van de opgegeven methode. Bereken daarna n = N/(1 + γ) en rond het totale n omhoog.",
            "rules": [
              "E is de gewenste halve intervalbreedte. Gebruik de spreiding die bij de gekozen schatter hoort: s_w voor MPU, s_e voor verschil en s_q voor quotiënt. De kritieke t-waarde hangt af van de betrouwbaarheid, een- of tweezijdigheid en vrijheidsgraden.",
              "De berekende omvang is een totaal. Rond dat aantal naar boven af en trek pas daarna de al gecontroleerde posten af als de uitbreiding wordt gevraagd."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 1,
                "locator": "Formules 5 en 11: steekproefomvang; formule 17: onzekerheid quotiëntschatter"
              },
              {
                "source": "formules",
                "page": 2,
                "locator": "Formule 24: omvang bij de regressieschatter"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "stratificatie",
      "title": "Stratificatie en allocatie",
      "phase": "Schatten",
      "lesson": "stratificatie",
      "signal": "De populatie bestaat uit groepen met eigen Nᵢ, nᵢ en spreiding.",
      "approach": "Schat per stratum, tel totalen en varianties afzonderlijk op en neem daarna de wortel.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formules 25–29, PDF-pagina 2",
          "page": 2
        },
        {
          "source": "exam2025",
          "locator": "Vraag 4–6, PDF-pagina 1–2 en 11–12",
          "page": 12
        },
        {
          "source": "boek-h8c",
          "page": 1,
          "locator": "Boek p. 221; oorspronkelijke PDF p. 239; uitsnede p. 1"
        },
        {
          "source": "opgaven",
          "page": 7,
          "locator": "H8 opgave 8a/b, PDF 7"
        },
        {
          "source": "uitwerkingen",
          "page": 10,
          "locator": "H8 opgave 8a/b, PDF 10–11"
        },
        {
          "source": "opgaven",
          "page": 8,
          "locator": "H8 opgave 9b/c, PDF 8"
        },
        {
          "source": "uitwerkingen",
          "page": 13,
          "locator": "H8 opgave 9c, PDF 13"
        }
      ],
      "questions": [
        {
          "id": "mc-stratificatie-basis-1",
          "prompt": "N₁ = 600, N₂ = 400 en n = 100. Wat is evenredig n₁?",
          "options": [
            "40",
            "50",
            "60"
          ],
          "correct": 2,
          "explanation": "Bij evenredige allocatie krijgt een stratum hetzelfde aandeel van de steekproef als van de populatie. De totale populatieomvang is 600 + 400 = 1.000; het aandeel van stratum 1 is 600/1.000 = 0,60. n₁ = 0,60 × 100 = 60. Voor stratum 2 blijven dan 40 controles over.",
          "steps": [
            "Bij evenredige allocatie krijgt een stratum hetzelfde aandeel van de steekproef als van de populatie.",
            "De totale populatieomvang is 600 + 400 = 1.000; het aandeel van stratum 1 is 600/1.000 = 0,60.",
            "n₁ = 0,60 × 100 = 60. Voor stratum 2 blijven dan 40 controles over."
          ],
          "pattern": "Herken: Stratumomvangen N₁ en N₂, totale n en “evenredig”. → Betekenis: De controles worden verdeeld naar het aandeel posten per stratum. → Aanpak: Bereken N₁/(N₁ + N₂) en vermenigvuldig dat aandeel met n. → Gevraagd antwoord: Het aantal controles voor stratum 1, niet de omvang van dat stratum.",
          "trap": "Gelijke aantallen per groep zijn alleen evenredig als de groepen even groot zijn.",
          "optionExplanations": [
            "40 is de evenredige omvang voor stratum 2, met 400 van de 1.000 posten.",
            "50 verdeelt de controles gelijk over de strata. Stratum 1 is echter groter en krijgt bij evenredige allocatie 60%.",
            "60 is 600/1.000 × 100 en volgt het populatieaandeel van stratum 1."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 25–29, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2025",
              "locator": "Vraag 4–6, PDF-pagina 1–2 en 11–12",
              "page": 12
            },
            {
              "source": "boek-h8c",
              "page": 1,
              "locator": "Boek p. 221; oorspronkelijke PDF p. 239; uitsnede p. 1"
            },
            {
              "source": "opgaven",
              "page": 7,
              "locator": "H8 opgave 8a/b, PDF 7"
            },
            {
              "source": "uitwerkingen",
              "page": 10,
              "locator": "H8 opgave 8a/b, PDF 10–11"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "Stratumomvangen N₁ en N₂, totale n en “evenredig”.",
            "meaning": "De controles worden verdeeld naar het aandeel posten per stratum.",
            "approach": "Bereken N₁/(N₁ + N₂) en vermenigvuldig dat aandeel met n.",
            "answer": "Het aantal controles voor stratum 1, niet de omvang van dat stratum."
          },
          "level": 1,
          "guidance": {
            "title": "Strata afzonderlijk berekenen en combineren",
            "focus": "Bij evenredige allocatie is het aandeel in de steekproef gelijk aan het aandeel in de populatie: nᵢ = n × Nᵢ/ΣNᵢ.",
            "rules": [
              "Maak onderscheid tussen Nᵢ (alle posten), nᵢ (gecontroleerde posten) en het steekproefgemiddelde w̄ᵢ per stratum. Tel Nᵢw̄ᵢ op over de bemonsterde strata en voeg het bekende totaal van een eventueel afzonderlijk, volledig gecontroleerd topstratum eenmaal toe.",
              "Bij onafhankelijke strata tel je de variantiebijdragen op. Neem daarna de wortel voor de gezamenlijke standaardfout. Een integraal gecontroleerd topstratum draagt wel waarde bij, maar geen steekproefvariantie."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 25-29: allocatie en combinatie van strata"
              }
            ]
          }
        },
        {
          "id": "mc-stratificatie-basis-3",
          "prompt": "Wat is de steekproefvariantie van het geschatte totaal van een integraal gecontroleerd topstratum?",
          "options": [
            "Nul",
            "Gelijk aan de boekwaarde",
            "Onbekend"
          ],
          "correct": 0,
          "explanation": "Integraal gecontroleerd betekent dat elke post in het topstratum is onderzocht. Het werkelijke totaal van dat stratum is dan bekend en wordt aan de geschatte totalen van de andere strata toegevoegd. Voor dit topstratum is nᵢ = Nᵢ. De eindigheidscorrectie en de steekproefvariantie van het totaal zijn dus nul.",
          "steps": [
            "Integraal gecontroleerd betekent dat elke post in het topstratum is onderzocht.",
            "Het werkelijke totaal van dat stratum is dan bekend en wordt aan de geschatte totalen van de andere strata toegevoegd.",
            "Voor dit topstratum is nᵢ = Nᵢ. De eindigheidscorrectie en de steekproefvariantie van het totaal zijn dus nul."
          ],
          "pattern": "Herken: Een “integraal gecontroleerd topstratum” en de steekproefvariantie van zijn totaal. → Betekenis: Alle posten in dit stratum zijn onderzocht. → Aanpak: Stel n_h = N_h: er resteert geen onzekerheid door steekproeftrekking binnen dit stratum. → Gevraagd antwoord: De variantiebijdrage aan de totaalschatting, niet de onderlinge spreiding van topstratumposten.",
          "trap": "De posten kunnen onderling spreiden, terwijl hun volledig vastgestelde totaal geen steekproefonzekerheid meer heeft.",
          "optionExplanations": [
            "Nul klopt: er is binnen dit stratum niet meer van een deel naar het geheel geëxtrapoleerd.",
            "De boekwaarde is een bedrag en geen variantie. Bovendien telt voor het totaal het gecontroleerde werkelijke bedrag mee.",
            "Er is geen onbekende steekproefvariantie van dit totaal: alle elementen zijn onderzocht, zodat deze component nul is."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 25–29, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2025",
              "locator": "Vraag 4–6, PDF-pagina 1–2 en 11–12",
              "page": 12
            },
            {
              "source": "boek-h8c",
              "page": 1,
              "locator": "Boek p. 221; oorspronkelijke PDF p. 239; uitsnede p. 1"
            },
            {
              "source": "opgaven",
              "page": 7,
              "locator": "H8 opgave 8a/b, PDF 7"
            },
            {
              "source": "uitwerkingen",
              "page": 10,
              "locator": "H8 opgave 8a/b, PDF 10–11"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "Een “integraal gecontroleerd topstratum” en de steekproefvariantie van zijn totaal.",
            "meaning": "Alle posten in dit stratum zijn onderzocht.",
            "approach": "Stel n_h = N_h: er resteert geen onzekerheid door steekproeftrekking binnen dit stratum.",
            "answer": "De variantiebijdrage aan de totaalschatting, niet de onderlinge spreiding van topstratumposten."
          },
          "level": 1,
          "guidance": {
            "title": "Strata afzonderlijk berekenen en combineren",
            "focus": "Integraal gecontroleerd betekent nᵢ = Nᵢ. Hierdoor is de eindigheidscorrectie nul; dit zegt niets over verschillen tussen de bedragen binnen dat stratum.",
            "rules": [
              "Maak onderscheid tussen Nᵢ (alle posten), nᵢ (gecontroleerde posten) en het steekproefgemiddelde w̄ᵢ per stratum. Tel Nᵢw̄ᵢ op over de bemonsterde strata en voeg het bekende totaal van een eventueel afzonderlijk, volledig gecontroleerd topstratum eenmaal toe.",
              "Bij onafhankelijke strata tel je de variantiebijdragen op. Neem daarna de wortel voor de gezamenlijke standaardfout. Een integraal gecontroleerd topstratum draagt wel waarde bij, maar geen steekproefvariantie."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 25-29: allocatie en combinatie van strata"
              }
            ]
          }
        },
        {
          "id": "mc-stratificatie-basis-2",
          "prompt": "Twee onafhankelijke strata hebben standaardfouten 3 en 4. Gecombineerd?",
          "options": [
            "25",
            "5",
            "7"
          ],
          "correct": 1,
          "explanation": "Voor onafhankelijke strata tel je de varianties van de schattingen op. Kwadrateer de standaardfouten: 3² + 4² = 9 + 16 = 25. Neem daarna de wortel voor de gecombineerde standaardfout: √25 = 5.",
          "steps": [
            "Voor onafhankelijke strata tel je de varianties van de schattingen op.",
            "Kwadrateer de standaardfouten: 3² + 4² = 9 + 16 = 25.",
            "Neem daarna de wortel voor de gecombineerde standaardfout: √25 = 5."
          ],
          "pattern": "Herken: “Onafhankelijke strata” met elk een standaardfout. → Betekenis: Bij optellen van onafhankelijke schattingen tel je varianties op. → Aanpak: Kwadrateer beide standaardfouten, tel op en neem de wortel. → Gevraagd antwoord: De gecombineerde standaardfout, niet de som van de twee standaardfouten.",
          "trap": "De som van standaardfouten is niet de standaardfout van de som.",
          "optionExplanations": [
            "25 is de gecombineerde variantie. Voor de gevraagde standaardfout ontbreekt nog de wortel.",
            "5 = √(3² + 4²), dus dit is de gecombineerde standaardfout.",
            "7 = 3 + 4 telt de standaardfouten rechtstreeks op. Bij onafhankelijke strata moet je hun kwadraten optellen."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 25–29, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2025",
              "locator": "Vraag 4–6, PDF-pagina 1–2 en 11–12",
              "page": 12
            },
            {
              "source": "boek-h8c",
              "page": 1,
              "locator": "Boek p. 221; oorspronkelijke PDF p. 239; uitsnede p. 1"
            },
            {
              "source": "opgaven",
              "page": 7,
              "locator": "H8 opgave 8a/b, PDF 7"
            },
            {
              "source": "uitwerkingen",
              "page": 10,
              "locator": "H8 opgave 8a/b, PDF 10–11"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "“Onafhankelijke strata” met elk een standaardfout.",
            "meaning": "Bij optellen van onafhankelijke schattingen tel je varianties op.",
            "approach": "Kwadrateer beide standaardfouten, tel op en neem de wortel.",
            "answer": "De gecombineerde standaardfout, niet de som van de twee standaardfouten."
          },
          "level": 2,
          "guidance": {
            "title": "Strata afzonderlijk berekenen en combineren",
            "focus": "Kwadrateer de standaardfouten, tel de varianties op en neem de wortel. Gebruik voor een totaalinterval één bijpassende kritieke t met de opgegeven effectieve vrijheidsgraden.",
            "rules": [
              "Maak onderscheid tussen Nᵢ (alle posten), nᵢ (gecontroleerde posten) en het steekproefgemiddelde w̄ᵢ per stratum. Tel Nᵢw̄ᵢ op over de bemonsterde strata en voeg het bekende totaal van een eventueel afzonderlijk, volledig gecontroleerd topstratum eenmaal toe.",
              "Bij onafhankelijke strata tel je de variantiebijdragen op. Neem daarna de wortel voor de gezamenlijke standaardfout. Een integraal gecontroleerd topstratum draagt wel waarde bij, maar geen steekproefvariantie."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 25-29: allocatie en combinatie van strata"
              }
            ]
          }
        },
        {
          "id": "mc-stratificatie-toepassing-1",
          "prompt": "Stratum 1 heeft N₁ = 100 en gemiddelde 20; stratum 2 N₂ = 200 en gemiddelde 30. Het bekende werkelijke topstratumtotaal is 1.000. Wat is het geschatte totaal?",
          "options": [
            "15.000",
            "7.000",
            "8.000",
            "9.000"
          ],
          "correct": 3,
          "level": 2,
          "steps": [
            "100 × 20 + 200 × 30 = 8.000.",
            "Tel het bekende werkelijke topstratumtotaal 1.000 erbij: 9.000.",
            "Het volledig gecontroleerde topstratum is een extra bekend onderdeel van het populatietotaal. Het moet één keer naast de geschatte overige strata worden opgenomen."
          ],
          "explanation": "100 × 20 + 200 × 30 = 8.000. Tel het bekende werkelijke topstratumtotaal 1.000 erbij: 9.000. Het volledig gecontroleerde topstratum is een extra bekend onderdeel van het populatietotaal. Het moet één keer naast de geschatte overige strata worden opgenomen.",
          "pattern": "Herken: Twee stratumomvangen met gemiddelden én een bekend werkelijk topstratumtotaal. → Betekenis: De gewone strata worden geschat; het gecontroleerde topstratum staat al vast. → Aanpak: Bereken per gewoon stratum N_h × gemiddelde en tel het bekende toptotaal eenmaal erbij. → Gevraagd antwoord: Eén totaalbedrag voor alle strata samen.",
          "trap": "Vergeet het integraal gecontroleerde deel niet.",
          "optionExplanations": [
            "15.000 is bijvoorbeeld (100 + 200) × (20 + 30). Daarmee geef je elk stratum ook het gemiddelde van de andere groep, en ontbreekt een correcte weging.",
            "7.000 trekt het topstratum van de € 8.000 af. Het bekende werkelijke topstratum maakt deel uit van de populatie en moet worden opgeteld.",
            "8.000 telt alleen de eerste twee strata op. De bekende € 1.000 van het topstratum ontbreekt.",
            "9.000 = 100 × 20 + 200 × 30 + 1.000. Elk stratum is met zijn eigen omvang verwerkt."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 25–29, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2025",
              "locator": "Vraag 4–6, PDF-pagina 1–2 en 11–12",
              "page": 12
            },
            {
              "source": "boek-h8c",
              "page": 1,
              "locator": "Boek p. 221; oorspronkelijke PDF p. 239; uitsnede p. 1"
            },
            {
              "source": "opgaven",
              "page": 7,
              "locator": "H8 opgave 8a/b, PDF 7"
            },
            {
              "source": "uitwerkingen",
              "page": 10,
              "locator": "H8 opgave 8a/b, PDF 10–11"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "Twee stratumomvangen met gemiddelden én een bekend werkelijk topstratumtotaal.",
            "meaning": "De gewone strata worden geschat; het gecontroleerde topstratum staat al vast.",
            "approach": "Bereken per gewoon stratum N_h × gemiddelde en tel het bekende toptotaal eenmaal erbij.",
            "answer": "Eén totaalbedrag voor alle strata samen."
          },
          "guidance": {
            "title": "Strata afzonderlijk berekenen en combineren",
            "focus": "Een bekend topstratumtotaal tel je eenmaal op. Het is geen steekproefgemiddelde dat opnieuw met een populatieaantal moet worden vermenigvuldigd.",
            "rules": [
              "Maak onderscheid tussen Nᵢ (alle posten), nᵢ (gecontroleerde posten) en het steekproefgemiddelde w̄ᵢ per stratum. Tel Nᵢw̄ᵢ op over de bemonsterde strata en voeg het bekende totaal van een eventueel afzonderlijk, volledig gecontroleerd topstratum eenmaal toe.",
              "Bij onafhankelijke strata tel je de variantiebijdragen op. Neem daarna de wortel voor de gezamenlijke standaardfout. Een integraal gecontroleerd topstratum draagt wel waarde bij, maar geen steekproefvariantie."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 25-29: allocatie en combinatie van strata"
              }
            ]
          }
        },
        {
          "id": "mc-stratificatie-aanvulling-boekgrens",
          "level": 2,
          "prompt": "Eigen oefenvraag. Zonder topstratum is de boekwaarde € 15.872.128. Je wilt vier strata. Wat is het eerste cumulatieve doel?",
          "options": [
            "€ 15.872.128",
            "Vier even grote aantallen posten",
            "€ 3.968.032",
            "€ 7.936.064"
          ],
          "correct": 2,
          "optionExplanations": [
            "Dit is het totaal van alle vier strata, niet het doel voor de eerste grens.",
            "Cumulatieve boekwaarde verdeelt bedragen. De aantallen posten hoeven niet gelijk te zijn.",
            "De resterende boekwaarde gedeeld door vier geeft het eerste cumulatieve streefbedrag.",
            "Dit is twee maal het streefbedrag en hoort bij de tweede grens, niet de eerste."
          ],
          "steps": [
            "Het volledig gecontroleerde topstratum is al uitgesloten.",
            "Deel 15.872.128 door vier: 3.968.032.",
            "Kies daarna een beschikbare klassegrens bij dat cumulatieve bedrag."
          ],
          "explanation": "Het volledig gecontroleerde topstratum is al uitgesloten. Deel 15.872.128 door vier: 3.968.032. Kies daarna een beschikbare klassegrens bij dat cumulatieve bedrag.",
          "pattern": "Herken: “Zonder topstratum”, “vier strata” en “eerste cumulatieve doel”. → Betekenis: Je bepaalt grenzen op basis van de resterende boekwaarde, nog geen controleaantallen. → Aanpak: Deel de resterende totale boekwaarde door het aantal strata voor het eerste streefbedrag. → Gevraagd antwoord: Een cumulatief bedrag voor de eerste grens, niet een gelijk aantal posten.",
          "trap": "Bepalen van groepsgrenzen komt vóór het verdelen van controles.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 25–29, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2025",
              "locator": "Vraag 4–6, PDF-pagina 1–2 en 11–12",
              "page": 12
            },
            {
              "source": "boek-h8c",
              "page": 1,
              "locator": "Boek p. 221; oorspronkelijke PDF p. 239; uitsnede p. 1"
            },
            {
              "source": "opgaven",
              "page": 7,
              "locator": "H8 opgave 8a/b, PDF 7"
            },
            {
              "source": "uitwerkingen",
              "page": 10,
              "locator": "H8 opgave 8a/b, PDF 10–11"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "“Zonder topstratum”, “vier strata” en “eerste cumulatieve doel”.",
            "meaning": "Je bepaalt grenzen op basis van de resterende boekwaarde, nog geen controleaantallen.",
            "approach": "Deel de resterende totale boekwaarde door het aantal strata voor het eerste streefbedrag.",
            "answer": "Een cumulatief bedrag voor de eerste grens, niet een gelijk aantal posten."
          },
          "guidance": {
            "title": "Strata afzonderlijk berekenen en combineren",
            "focus": "Bij grenzen via gelijke cumulatieve boekwaarde deel je het boektotaal zonder topstratum door het gewenste aantal strata. Zoek de cumulatieve doelen vervolgens in de klassetabel.",
            "rules": [
              "Maak onderscheid tussen Nᵢ (alle posten), nᵢ (gecontroleerde posten) en het steekproefgemiddelde w̄ᵢ per stratum. Tel Nᵢw̄ᵢ op over de bemonsterde strata en voeg het bekende totaal van een eventueel afzonderlijk, volledig gecontroleerd topstratum eenmaal toe.",
              "Bij onafhankelijke strata tel je de variantiebijdragen op. Neem daarna de wortel voor de gezamenlijke standaardfout. Een integraal gecontroleerd topstratum draagt wel waarde bij, maar geen steekproefvariantie."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 25-29: allocatie en combinatie van strata"
              },
              {
                "source": "boek-h8c",
                "page": 1,
                "locator": "Boek p. 221-232; oorspronkelijke PDF p. 239-250: grenzen en uitbreiding"
              }
            ]
          }
        },
        {
          "id": "mc-stratificatie-toepassing-2",
          "prompt": "Bij gelijke controlekosten: N₁ = 600, s₁ = 10, N₂ = 400, s₂ = 30 en n = 90. Wat is de Neyman-allocatie?",
          "options": [
            "30 en 60",
            "60 en 30",
            "54 en 36",
            "45 en 45"
          ],
          "correct": 0,
          "level": 3,
          "steps": [
            "Gewichten Nᵢsᵢ zijn 6.000 en 12.000.",
            "Verdeel 90 in de verhouding 1:2: 30 en 60.",
            "Neyman-allocatie verdeelt bij gelijke controlekosten op basis van Nᵢsᵢ. Het kleinere tweede stratum krijgt hier meer controles door zijn grotere spreiding."
          ],
          "explanation": "Gewichten Nᵢsᵢ zijn 6.000 en 12.000. Verdeel 90 in de verhouding 1:2: 30 en 60. Neyman-allocatie verdeelt bij gelijke controlekosten op basis van Nᵢsᵢ. Het kleinere tweede stratum krijgt hier meer controles door zijn grotere spreiding.",
          "pattern": "Herken: N_h én s_h per stratum, “gelijke controlekosten” en “Neyman-allocatie”. → Betekenis: De optimale verdeling weegt zowel omvang als spreiding mee. → Aanpak: Bereken gewichten N_hs_h en verdeel n naar elk gewicht gedeeld door hun som. → Gevraagd antwoord: Aantallen controles per stratum die samen n vormen.",
          "trap": "54 en 36 is de evenredige allocatie, niet Neyman.",
          "optionExplanations": [
            "30 en 60 verdeelt 90 controles in de verhouding 6.000:12.000 = 1:2 en volgt de Neyman-formule.",
            "60 en 30 keert de gewichten om. Stratum 2 heeft het grootste product Nᵢsᵢ en moet daarom de meeste controles krijgen.",
            "54 en 36 volgt alleen de populatieverhouding 600:400. Dat is evenredige allocatie en negeert het verschil in spreiding.",
            "45 en 45 is een gelijke verdeling. De Neyman-gewichten zijn hier niet gelijk, maar 6.000 en 12.000."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 25–29, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2025",
              "locator": "Vraag 4–6, PDF-pagina 1–2 en 11–12",
              "page": 12
            },
            {
              "source": "boek-h8c",
              "page": 1,
              "locator": "Boek p. 221; oorspronkelijke PDF p. 239; uitsnede p. 1"
            },
            {
              "source": "opgaven",
              "page": 7,
              "locator": "H8 opgave 8a/b, PDF 7"
            },
            {
              "source": "uitwerkingen",
              "page": 10,
              "locator": "H8 opgave 8a/b, PDF 10–11"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "N_h én s_h per stratum, “gelijke controlekosten” en “Neyman-allocatie”.",
            "meaning": "De optimale verdeling weegt zowel omvang als spreiding mee.",
            "approach": "Bereken gewichten N_hs_h en verdeel n naar elk gewicht gedeeld door hun som.",
            "answer": "Aantallen controles per stratum die samen n vormen."
          },
          "guidance": {
            "title": "Strata afzonderlijk berekenen en combineren",
            "focus": "Neyman gebruikt bij gelijke controlekosten de gewichten Nᵢsᵢ. Deel elk gewicht door de som van de gewichten en vermenigvuldig met de totale n.",
            "rules": [
              "Maak onderscheid tussen Nᵢ (alle posten), nᵢ (gecontroleerde posten) en het steekproefgemiddelde w̄ᵢ per stratum. Tel Nᵢw̄ᵢ op over de bemonsterde strata en voeg het bekende totaal van een eventueel afzonderlijk, volledig gecontroleerd topstratum eenmaal toe.",
              "Bij onafhankelijke strata tel je de variantiebijdragen op. Neem daarna de wortel voor de gezamenlijke standaardfout. Een integraal gecontroleerd topstratum draagt wel waarde bij, maar geen steekproefvariantie."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 25-29: allocatie en combinatie van strata"
              }
            ]
          }
        },
        {
          "id": "mc-stratificatie-toepassing-3",
          "prompt": "Onafhankelijke stratumtotalen hebben standaardfouten 300 en 400. Het totale geschatte bedrag inclusief gecontroleerd topstratum is 20.000. Gebruik t = 2. Welk interval volgt?",
          "options": [
            "[18.600; 21.400]",
            "[19.000; 21.000]",
            "[19.500; 20.500]",
            "[19.300; 20.700]"
          ],
          "correct": 1,
          "level": 3,
          "steps": [
            "Gecombineerde standaardfout = √(300² + 400²) = 500.",
            "Marge = 2 × 500 = 1.000.",
            "Het interval is 20.000 ± 1.000.",
            "Het gegeven totaal van € 20.000 bevat het topstratum al. Voeg dat niet opnieuw toe; combineer alleen de onzekerheid van de onafhankelijke schattingen."
          ],
          "explanation": "Gecombineerde standaardfout = √(300² + 400²) = 500. Marge = 2 × 500 = 1.000. Het interval is 20.000 ± 1.000. Het gegeven totaal van € 20.000 bevat het topstratum al. Voeg dat niet opnieuw toe; combineer alleen de onzekerheid van de onafhankelijke schattingen.",
          "pattern": "Herken: Standaardfouten van onafhankelijke stratumtotalen, een totaalschatting en t. → Betekenis: De intervalmarge vraagt eerst gecombineerde onzekerheid. → Aanpak: Neem √(s₁² + s₂²), vermenigvuldig met t en zet de marge rond het gegeven totaal. → Gevraagd antwoord: Een interval voor alle strata samen; het bekende topstratum voegt geen steekproefvariantie toe.",
          "trap": "300 + 400 gebruiken maakt de marge onjuist.",
          "optionExplanations": [
            "De marge van 1.400 gebruikt 2 × (300 + 400). Je moet eerst de varianties optellen en dan de wortel nemen.",
            "De gecombineerde standaardfout is 500 en de marge 1.000. Het interval is daarom 20.000 ± 1.000.",
            "De marge van 500 is alleen de gecombineerde standaardfout. De kritieke factor t = 2 ontbreekt nog.",
            "De marge van 700 telt standaardfouten op en mist bovendien de toepassing van t op een correct gecombineerde standaardfout."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 25–29, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2025",
              "locator": "Vraag 4–6, PDF-pagina 1–2 en 11–12",
              "page": 12
            },
            {
              "source": "boek-h8c",
              "page": 1,
              "locator": "Boek p. 221; oorspronkelijke PDF p. 239; uitsnede p. 1"
            },
            {
              "source": "opgaven",
              "page": 7,
              "locator": "H8 opgave 8a/b, PDF 7"
            },
            {
              "source": "uitwerkingen",
              "page": 10,
              "locator": "H8 opgave 8a/b, PDF 10–11"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "Standaardfouten van onafhankelijke stratumtotalen, een totaalschatting en t.",
            "meaning": "De intervalmarge vraagt eerst gecombineerde onzekerheid.",
            "approach": "Neem √(s₁² + s₂²), vermenigvuldig met t en zet de marge rond het gegeven totaal.",
            "answer": "Een interval voor alle strata samen; het bekende topstratum voegt geen steekproefvariantie toe."
          },
          "guidance": {
            "title": "Strata afzonderlijk berekenen en combineren",
            "focus": "Kwadrateer de standaardfouten, tel de varianties op en neem de wortel. Gebruik voor een totaalinterval één bijpassende kritieke t met de opgegeven effectieve vrijheidsgraden.",
            "rules": [
              "Maak onderscheid tussen Nᵢ (alle posten), nᵢ (gecontroleerde posten) en het steekproefgemiddelde w̄ᵢ per stratum. Tel Nᵢw̄ᵢ op over de bemonsterde strata en voeg het bekende totaal van een eventueel afzonderlijk, volledig gecontroleerd topstratum eenmaal toe.",
              "Bij onafhankelijke strata tel je de variantiebijdragen op. Neem daarna de wortel voor de gezamenlijke standaardfout. Een integraal gecontroleerd topstratum draagt wel waarde bij, maar geen steekproefvariantie."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 25-29: allocatie en combinatie van strata"
              }
            ]
          }
        },
        {
          "id": "mc-stratificatie-aanvulling-wortel",
          "level": 3,
          "prompt": "Eigen oefenvraag. Een klasse is € 400 breed en bevat 772 posten. Wat voeg je toe aan de cumulatieve wortelsom?",
          "options": [
            "Ongeveer 27,78",
            "308.800",
            "1.172",
            "Ongeveer 555,70"
          ],
          "correct": 3,
          "optionExplanations": [
            "Dit is alleen √772. Bij deze methode moet ook de klassebreedte meetellen.",
            "Dit is het product breedte × frequentie. De methode neemt daarvan eerst de wortel.",
            "Optellen van breedte en frequentie is niet de berekening uit deze stratificatiemethode.",
            "De bijdrage is √(400 × 772) = √308.800 ≈ 555,70."
          ],
          "steps": [
            "De klassebreedte is 400 en de frequentie is 772.",
            "Bereken het product: 400 × 772 = 308.800.",
            "Neem de wortel en tel 555,70 bij de eerdere wortelbijdragen op."
          ],
          "explanation": "De klassebreedte is 400 en de frequentie is 772. Bereken het product: 400 × 772 = 308.800. Neem de wortel en tel 555,70 bij de eerdere wortelbijdragen op.",
          "pattern": "Herken: Klassebreedte én frequentie, met “toevoegen aan de cumulatieve wortelsom”. → Betekenis: De wortelmethode verwerkt per klasse zowel breedte als aantal posten. → Aanpak: Bereken √(klassebreedte × frequentie) vóór je de klassebijdragen cumuleert. → Gevraagd antwoord: De bijdrage van deze klasse aan de wortelsom, niet de ruwe frequentie.",
          "trap": "Neem de wortel per klasse, niet pas na het cumuleren.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 25–29, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2025",
              "locator": "Vraag 4–6, PDF-pagina 1–2 en 11–12",
              "page": 12
            },
            {
              "source": "boek-h8c",
              "page": 1,
              "locator": "Boek p. 221; oorspronkelijke PDF p. 239; uitsnede p. 1"
            },
            {
              "source": "opgaven",
              "page": 7,
              "locator": "H8 opgave 8a/b, PDF 7"
            },
            {
              "source": "uitwerkingen",
              "page": 10,
              "locator": "H8 opgave 8a/b, PDF 10–11"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "Klassebreedte én frequentie, met “toevoegen aan de cumulatieve wortelsom”.",
            "meaning": "De wortelmethode verwerkt per klasse zowel breedte als aantal posten.",
            "approach": "Bereken √(klassebreedte × frequentie) vóór je de klassebijdragen cumuleert.",
            "answer": "De bijdrage van deze klasse aan de wortelsom, niet de ruwe frequentie."
          },
          "guidance": {
            "title": "Strata afzonderlijk berekenen en combineren",
            "focus": "Bij de cumulatieve wortelmethode neem je per klasse √(klassebreedte × frequentie). Tel de wortels op; neem niet achteraf één wortel van de som van producten.",
            "rules": [
              "Maak onderscheid tussen Nᵢ (alle posten), nᵢ (gecontroleerde posten) en het steekproefgemiddelde w̄ᵢ per stratum. Tel Nᵢw̄ᵢ op over de bemonsterde strata en voeg het bekende totaal van een eventueel afzonderlijk, volledig gecontroleerd topstratum eenmaal toe.",
              "Bij onafhankelijke strata tel je de variantiebijdragen op. Neem daarna de wortel voor de gezamenlijke standaardfout. Een integraal gecontroleerd topstratum draagt wel waarde bij, maar geen steekproefvariantie."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 25-29: allocatie en combinatie van strata"
              },
              {
                "source": "boek-h8c",
                "page": 1,
                "locator": "Boek p. 221-232; oorspronkelijke PDF p. 239-250: grenzen en uitbreiding"
              }
            ]
          }
        },
        {
          "id": "mc-stratificatie-aanvulling-uitbreiding",
          "level": 3,
          "prompt": "Eigen oefenvraag. Voor één stratum volgt een benodigde totale steekproefomvang van 32,65. Er zijn al 30 posten gecontroleerd. Hoeveel komen erbij?",
          "options": [
            "3",
            "33",
            "2",
            "63"
          ],
          "correct": 0,
          "optionExplanations": [
            "Rond de totale behoefte omhoog naar 33 en trek de 30 bestaande controles af.",
            "33 is het nieuwe totaal. De vraag vraagt alleen naar de aanvullende controles.",
            "Afronden naar 32 kan de vereiste nauwkeurigheid missen; de totale behoefte moet omhoog.",
            "Dit telt de bestaande controles nog eens bij de totale behoefte op en telt ze dubbel."
          ],
          "steps": [
            "32,65 is de nieuwe totale behoefte voor dit stratum.",
            "Een minimumomvang rond je naar boven af: 33.",
            "Aanvulling = 33 − 30 = 3. Je rapporteert dus drie extra controles en een nieuw stratumtotaal van 33 controles."
          ],
          "explanation": "32,65 is de nieuwe totale behoefte voor dit stratum. Een minimumomvang rond je naar boven af: 33. Aanvulling = 33 − 30 = 3. Je rapporteert dus drie extra controles en een nieuw stratumtotaal van 33 controles.",
          "pattern": "Herken: Een benodigde n met decimalen voor één stratum en reeds gecontroleerde posten. → Betekenis: De gevraagde uitbreiding betreft alleen het verschil met het nieuwe minimum. → Aanpak: Rond de totale stratumbehoefte naar boven af en trek het bestaande stratum-n af. → Gevraagd antwoord: Het extra aantal in dit stratum, met het nieuwe totaal als controle.",
          "trap": "Verwar nieuwe totale omvang niet met het aanvullende aantal.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 25–29, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2025",
              "locator": "Vraag 4–6, PDF-pagina 1–2 en 11–12",
              "page": 12
            },
            {
              "source": "boek-h8c",
              "page": 1,
              "locator": "Boek p. 221; oorspronkelijke PDF p. 239; uitsnede p. 1"
            },
            {
              "source": "opgaven",
              "page": 7,
              "locator": "H8 opgave 8a/b, PDF 7"
            },
            {
              "source": "uitwerkingen",
              "page": 10,
              "locator": "H8 opgave 8a/b, PDF 10–11"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "Een benodigde n met decimalen voor één stratum en reeds gecontroleerde posten.",
            "meaning": "De gevraagde uitbreiding betreft alleen het verschil met het nieuwe minimum.",
            "approach": "Rond de totale stratumbehoefte naar boven af en trek het bestaande stratum-n af.",
            "answer": "Het extra aantal in dit stratum, met het nieuwe totaal als controle."
          },
          "guidance": {
            "title": "Strata afzonderlijk berekenen en combineren",
            "focus": "Maak onderscheid tussen de benodigde totale nᵢ en de uitbreiding binnen dat ene stratum. Rond het totaal eerst omhoog.",
            "rules": [
              "Maak onderscheid tussen Nᵢ (alle posten), nᵢ (gecontroleerde posten) en het steekproefgemiddelde w̄ᵢ per stratum. Tel Nᵢw̄ᵢ op over de bemonsterde strata en voeg het bekende totaal van een eventueel afzonderlijk, volledig gecontroleerd topstratum eenmaal toe.",
              "Bij onafhankelijke strata tel je de variantiebijdragen op. Neem daarna de wortel voor de gezamenlijke standaardfout. Een integraal gecontroleerd topstratum draagt wel waarde bij, maar geen steekproefvariantie."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 25-29: allocatie en combinatie van strata"
              },
              {
                "source": "boek-h8c",
                "page": 1,
                "locator": "Boek p. 221-232; oorspronkelijke PDF p. 239-250: grenzen en uitbreiding"
              }
            ]
          }
        },
        {
          "id": "mc-stratificatie-aanvulling-varianties",
          "level": 3,
          "prompt": "Eigen oefenvraag. De gewenste totale marge E is 10 en t = 2. De andere strata hebben samen variantiebijdrage 16. Hoe groot mag de variantiebijdrage van het uit te breiden stratum maximaal zijn?",
          "options": [
            "−11",
            "9",
            "25",
            "3"
          ],
          "correct": 1,
          "optionExplanations": [
            "Dit trekt variantie 16 af van standaardfout 5. Die grootheden hebben verschillende eenheden.",
            "De totale variantie mag maximaal (10/2)² = 25 zijn. Na aftrek van de andere strata resteert 25 − 16 = 9.",
            "Dit is de maximaal toegestane totale variantie. De bijdrage 16 van de andere strata moet er nog af.",
            "3 is de maximaal toegestane standaardfout van dit stratum. Gevraagd is de variantiebijdrage."
          ],
          "steps": [
            "De maximaal toegestane totale standaardfout is E/t = 5.",
            "Kwadrateer: de totale variantie mag maximaal 25 zijn.",
            "Voor dit stratum resteert maximaal 25 − 16 = 9 aan variantiebijdrage; dat komt overeen met standaardfout 3."
          ],
          "explanation": "De maximaal toegestane totale standaardfout is E/t = 5. Kwadrateer: de totale variantie mag maximaal 25 zijn. Voor dit stratum resteert maximaal 25 − 16 = 9 aan variantiebijdrage; dat komt overeen met standaardfout 3.",
          "pattern": "Herken: Een gewenste totale marge E, t en de variantiebijdrage van andere strata. → Betekenis: Van de maximaal toegestane totale variantie is al een deel in gebruik. → Aanpak: Bereken (E/t)² en trek de varianties van de overige strata af. → Gevraagd antwoord: De maximaal toegestane variantiebijdrage van het aan te passen stratum.",
          "trap": "Trek geen variantie af van een standaardfout.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 25–29, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "exam2025",
              "locator": "Vraag 4–6, PDF-pagina 1–2 en 11–12",
              "page": 12
            },
            {
              "source": "boek-h8c",
              "page": 1,
              "locator": "Boek p. 221; oorspronkelijke PDF p. 239; uitsnede p. 1"
            },
            {
              "source": "opgaven",
              "page": 7,
              "locator": "H8 opgave 8a/b, PDF 7"
            },
            {
              "source": "uitwerkingen",
              "page": 10,
              "locator": "H8 opgave 8a/b, PDF 10–11"
            },
            {
              "source": "opgaven",
              "page": 8,
              "locator": "H8 opgave 9b/c, PDF 8"
            },
            {
              "source": "uitwerkingen",
              "page": 13,
              "locator": "H8 opgave 9c, PDF 13"
            }
          ],
          "recognition": {
            "signals": "Een gewenste totale marge E, t en de variantiebijdrage van andere strata.",
            "meaning": "Van de maximaal toegestane totale variantie is al een deel in gebruik.",
            "approach": "Bereken (E/t)² en trek de varianties van de overige strata af.",
            "answer": "De maximaal toegestane variantiebijdrage van het aan te passen stratum."
          },
          "guidance": {
            "title": "Strata afzonderlijk berekenen en combineren",
            "focus": "De maximaal toegestane totale variantie is (E/t)². Trek de variantiebijdragen van de overige strata daarvan af om de ruimte voor het aan te passen stratum te bepalen.",
            "rules": [
              "Maak onderscheid tussen Nᵢ (alle posten), nᵢ (gecontroleerde posten) en het steekproefgemiddelde w̄ᵢ per stratum. Tel Nᵢw̄ᵢ op over de bemonsterde strata en voeg het bekende totaal van een eventueel afzonderlijk, volledig gecontroleerd topstratum eenmaal toe.",
              "Bij onafhankelijke strata tel je de variantiebijdragen op. Neem daarna de wortel voor de gezamenlijke standaardfout. Een integraal gecontroleerd topstratum draagt wel waarde bij, maar geen steekproefvariantie."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 25-29: allocatie en combinatie van strata"
              },
              {
                "source": "boek-h8c",
                "page": 1,
                "locator": "Boek p. 221-232; oorspronkelijke PDF p. 239-250: grenzen en uitbreiding"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "regressielijn",
      "title": "Regressie: een lijn door gegevens",
      "phase": "Regressie",
      "lesson": "regressielijn",
      "signal": "Een vergelijking verbindt x met een voorspelde waarde ŷ.",
      "approach": "Bereken eerst de voorspelling en daarna het residu y − ŷ.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formules 30–34, PDF-pagina 2",
          "page": 2
        },
        {
          "source": "attentie",
          "locator": "PDF-pagina 3–4",
          "page": 3
        },
        {
          "source": "exam2024",
          "locator": "Vraag 14, PDF-pagina 5",
          "page": 5
        },
        {
          "source": "boek-h9a",
          "page": 6,
          "locator": "Boek p. 238; oorspronkelijke PDF p. 256; uitsnede p. 6"
        },
        {
          "source": "opgaven",
          "page": 10,
          "locator": "H9 opgave 1, PDF 10"
        },
        {
          "source": "uitwerkingen",
          "page": 14,
          "locator": "H9 opgave 1, PDF 14–15"
        },
        {
          "source": "boek-h9a",
          "page": 14,
          "locator": "Boek p. 246; oorspronkelijke PDF p. 264; uitsnede p. 14"
        }
      ],
      "questions": [
        {
          "id": "mc-regressielijn-basis-1",
          "prompt": "ŷ = 10 + 2x. Wat is de voorspelling bij x = 4?",
          "options": [
            "18",
            "16",
            "24"
          ],
          "correct": 0,
          "explanation": "De lijn ŷ = 10 + 2x heeft constante 10 en helling 2. Vul x = 4 in en vermenigvuldig eerst: 2 × 4 = 8. Tel de constante erbij op: ŷ = 10 + 8 = 18. Dit is de voorspelling, niet automatisch de waargenomen y.",
          "steps": [
            "De lijn ŷ = 10 + 2x heeft constante 10 en helling 2.",
            "Vul x = 4 in en vermenigvuldig eerst: 2 × 4 = 8.",
            "Tel de constante erbij op: ŷ = 10 + 8 = 18. Dit is de voorspelling, niet automatisch de waargenomen y."
          ],
          "pattern": "Herken: Een vergelijking voor ŷ en een concrete x. → Betekenis: De vraag gaat om invullen in een geschat model. → Aanpak: Vermenigvuldig de helling met x en tel de constante erbij op. → Gevraagd antwoord: Een voorspelde y-waarde, niet het residu of de helling.",
          "trap": "De helling vermenigvuldigt x; de constante wordt daarna opgeteld.",
          "optionExplanations": [
            "18 volgt rechtstreeks uit 10 + 2 × 4 = 10 + 8.",
            "16 volgt niet uit de gegeven lijn. De bijdrage van x is 8 en de constante is 10, dus samen 18.",
            "24 volgt niet uit 10 + 2 × 4. De bijdrage van x is 8 en met de constante 10 wordt de voorspelling 18."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 30–34, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "exam2024",
              "locator": "Vraag 14, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9a",
              "page": 6,
              "locator": "Boek p. 238; oorspronkelijke PDF p. 256; uitsnede p. 6"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9a",
              "page": 14,
              "locator": "Boek p. 246; oorspronkelijke PDF p. 264; uitsnede p. 14"
            }
          ],
          "recognition": {
            "signals": "Een vergelijking voor ŷ en een concrete x.",
            "meaning": "De vraag gaat om invullen in een geschat model.",
            "approach": "Vermenigvuldig de helling met x en tel de constante erbij op.",
            "answer": "Een voorspelde y-waarde, niet het residu of de helling."
          },
          "level": 1,
          "guidance": {
            "title": "Voorspelling, residu en kleinste kwadraten",
            "focus": "De lijn levert een voorspelde y. Vul de gegeven x in en voer vermenigvuldiging vóór optelling uit.",
            "rules": [
              "De geschatte lijn is ŷ = b₀ + b₁x. Vul eerst x in om de voorspelling ŷ te bepalen. Het residu is e = y − ŷ, dus waarneming min voorspelling.",
              "OLS kiest de coëfficiënten die de som van gekwadrateerde residuen (SSE) minimaliseren. Alleen de som van residuen vergelijken kan misleiden doordat positieve en negatieve fouten elkaar opheffen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 30-34: model, regressielijn en residuele variantie"
              },
              {
                "source": "boek-h9a",
                "page": 1,
                "locator": "Boek p. 233 en verder; oorspronkelijke PDF p. 251 en verder"
              }
            ]
          }
        },
        {
          "id": "mc-regressielijn-basis-2",
          "prompt": "y = 25 en ŷ = 18. Wat is het residu?",
          "options": [
            "−7",
            "7",
            "43"
          ],
          "correct": 1,
          "explanation": "Een regressieresidu is het verschil tussen de waargenomen en de voorspelde uitkomst: e = y − ŷ. Vul de waarden in: e = 25 − 18 = 7. Het positieve teken betekent dat de waarneming 7 boven de regressielijn ligt.",
          "steps": [
            "Een regressieresidu is het verschil tussen de waargenomen en de voorspelde uitkomst: e = y − ŷ.",
            "Vul de waarden in: e = 25 − 18 = 7.",
            "Het positieve teken betekent dat de waarneming 7 boven de regressielijn ligt."
          ],
          "pattern": "Herken: Een waargenomen y én een voorspelde ŷ; gevraagd is het residu. → Betekenis: Het residu is de verticale afwijking van de waarneming ten opzichte van de voorspelling. → Aanpak: Bereken e = y − ŷ en behoud het teken. → Gevraagd antwoord: Een getekende voorspelfout in de eenheid van y.",
          "trap": "ŷ − y draait het teken van het residu om.",
          "optionExplanations": [
            "−7 is 18 − 25 en gebruikt de omgekeerde volgorde. Het regressieresidu is y − ŷ.",
            "7 klopt: de werkelijke uitkomst 25 ligt 7 boven de voorspelde 18.",
            "43 telt waarneming en voorspelling op. Het residu meet juist hun verschil."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 30–34, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "exam2024",
              "locator": "Vraag 14, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9a",
              "page": 6,
              "locator": "Boek p. 238; oorspronkelijke PDF p. 256; uitsnede p. 6"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9a",
              "page": 14,
              "locator": "Boek p. 246; oorspronkelijke PDF p. 264; uitsnede p. 14"
            }
          ],
          "recognition": {
            "signals": "Een waargenomen y én een voorspelde ŷ; gevraagd is het residu.",
            "meaning": "Het residu is de verticale afwijking van de waarneming ten opzichte van de voorspelling.",
            "approach": "Bereken e = y − ŷ en behoud het teken.",
            "answer": "Een getekende voorspelfout in de eenheid van y."
          },
          "level": 1,
          "guidance": {
            "title": "Voorspelling, residu en kleinste kwadraten",
            "focus": "Het residu is waargenomen y min voorspelde ŷ. Een positief residu ligt boven de lijn, een negatief residu eronder.",
            "rules": [
              "De geschatte lijn is ŷ = b₀ + b₁x. Vul eerst x in om de voorspelling ŷ te bepalen. Het residu is e = y − ŷ, dus waarneming min voorspelling.",
              "OLS kiest de coëfficiënten die de som van gekwadrateerde residuen (SSE) minimaliseren. Alleen de som van residuen vergelijken kan misleiden doordat positieve en negatieve fouten elkaar opheffen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 30-34: model, regressielijn en residuele variantie"
              },
              {
                "source": "boek-h9a",
                "page": 1,
                "locator": "Boek p. 233 en verder; oorspronkelijke PDF p. 251 en verder"
              }
            ]
          }
        },
        {
          "id": "mc-regressielijn-basis-3",
          "prompt": "Wat minimaliseert OLS?",
          "options": [
            "Het aantal waarnemingen",
            "De som van de residuen",
            "De som van de gekwadrateerde residuen"
          ],
          "correct": 2,
          "explanation": "OLS betekent gewone kleinste kwadraten: het model wordt gekozen op basis van de residuen y − ŷ. Ieder residu wordt gekwadrateerd, zodat positieve en negatieve afwijkingen elkaar niet kunnen opheffen. OLS kiest de coëfficiënten waarvoor Σe², de som van die kwadraten, het kleinst is.",
          "steps": [
            "OLS betekent gewone kleinste kwadraten: het model wordt gekozen op basis van de residuen y − ŷ.",
            "Ieder residu wordt gekwadrateerd, zodat positieve en negatieve afwijkingen elkaar niet kunnen opheffen.",
            "OLS kiest de coëfficiënten waarvoor Σe², de som van die kwadraten, het kleinst is."
          ],
          "pattern": "Herken: Het werkwoord “minimaliseert” bij OLS. → Betekenis: De kleinste-kwadratenmethode kiest coëfficiënten via een foutcriterium. → Aanpak: Koppel OLS aan kwadraten van residuen en de som daarvan. → Gevraagd antwoord: Het te minimaliseren criterium, niet de gewone som van getekende residuen.",
          "trap": "Een residusom van nul kan toch grote afzonderlijke fouten bevatten.",
          "optionExplanations": [
            "OLS kiest coëfficiënten voor de gegeven waarnemingen. De methode minimaliseert niet het aantal gegevens.",
            "De gewone som laat positieve en negatieve residuen wegvallen. Die som beoordeelt daarom niet de totale grootte van de afwijkingen.",
            "De som van gekwadrateerde residuen is het OLS-criterium. Grotere afwijkingen wegen door het kwadrateren zwaarder mee."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 30–34, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "exam2024",
              "locator": "Vraag 14, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9a",
              "page": 6,
              "locator": "Boek p. 238; oorspronkelijke PDF p. 256; uitsnede p. 6"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9a",
              "page": 14,
              "locator": "Boek p. 246; oorspronkelijke PDF p. 264; uitsnede p. 14"
            }
          ],
          "recognition": {
            "signals": "Het werkwoord “minimaliseert” bij OLS.",
            "meaning": "De kleinste-kwadratenmethode kiest coëfficiënten via een foutcriterium.",
            "approach": "Koppel OLS aan kwadraten van residuen en de som daarvan.",
            "answer": "Het te minimaliseren criterium, niet de gewone som van getekende residuen."
          },
          "level": 2,
          "guidance": {
            "title": "Voorspelling, residu en kleinste kwadraten",
            "focus": "Het OLS-criterium vergelijkt gekwadrateerde fouten voor dezelfde gegevens. Tel de kwadraten, niet alleen de getekende residuen.",
            "rules": [
              "De geschatte lijn is ŷ = b₀ + b₁x. Vul eerst x in om de voorspelling ŷ te bepalen. Het residu is e = y − ŷ, dus waarneming min voorspelling.",
              "OLS kiest de coëfficiënten die de som van gekwadrateerde residuen (SSE) minimaliseren. Alleen de som van residuen vergelijken kan misleiden doordat positieve en negatieve fouten elkaar opheffen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 30-34: model, regressielijn en residuele variantie"
              },
              {
                "source": "boek-h9a",
                "page": 1,
                "locator": "Boek p. 233 en verder; oorspronkelijke PDF p. 251 en verder"
              }
            ]
          }
        },
        {
          "id": "mc-regressielijn-toepassing-1",
          "prompt": "ŷ = 5 + 3x. Een waarneming heeft x = 4 en y = 20. Wat is het residu?",
          "options": [
            "3",
            "17",
            "20",
            "−3"
          ],
          "correct": 0,
          "level": 2,
          "steps": [
            "Voorspelling: 5 + 3 × 4 = 17.",
            "Residu: y − ŷ = 20 − 17 = 3.",
            "Het positieve residu betekent dat de werkelijke y drie eenheden boven de voorspelde y ligt. De lijn voorspelt 17, maar de waarneming is 20."
          ],
          "explanation": "Voorspelling: 5 + 3 × 4 = 17. Residu: y − ŷ = 20 − 17 = 3. Het positieve residu betekent dat de werkelijke y drie eenheden boven de voorspelde y ligt. De lijn voorspelt 17, maar de waarneming is 20.",
          "pattern": "Herken: Een regressievergelijking, x én een werkelijke y; gevraagd is het residu. → Betekenis: Een voorspelling is hier een tussenstap naar de afwijking. → Aanpak: Bereken eerst ŷ uit x en daarna y − ŷ. → Gevraagd antwoord: Het getekende residu, niet alleen de modelvoorspelling.",
          "trap": "De voorspelling is niet het residu.",
          "optionExplanations": [
            "3 = 20 − (5 + 3 × 4) is het verschil tussen de waarneming en de voorspelling.",
            "17 is de voorspelling ŷ. Voor het residu moet je die nog van y = 20 aftrekken.",
            "20 is de waargenomen y zelf. Een residu vergelijkt die waarde met de voorspelling.",
            "−3 gebruikt ŷ − y = 17 − 20. Een regressieresidu is juist y − ŷ."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 30–34, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "exam2024",
              "locator": "Vraag 14, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9a",
              "page": 6,
              "locator": "Boek p. 238; oorspronkelijke PDF p. 256; uitsnede p. 6"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9a",
              "page": 14,
              "locator": "Boek p. 246; oorspronkelijke PDF p. 264; uitsnede p. 14"
            }
          ],
          "recognition": {
            "signals": "Een regressievergelijking, x én een werkelijke y; gevraagd is het residu.",
            "meaning": "Een voorspelling is hier een tussenstap naar de afwijking.",
            "approach": "Bereken eerst ŷ uit x en daarna y − ŷ.",
            "answer": "Het getekende residu, niet alleen de modelvoorspelling."
          },
          "guidance": {
            "title": "Voorspelling, residu en kleinste kwadraten",
            "focus": "Het residu is waargenomen y min voorspelde ŷ. Een positief residu ligt boven de lijn, een negatief residu eronder.",
            "rules": [
              "De geschatte lijn is ŷ = b₀ + b₁x. Vul eerst x in om de voorspelling ŷ te bepalen. Het residu is e = y − ŷ, dus waarneming min voorspelling.",
              "OLS kiest de coëfficiënten die de som van gekwadrateerde residuen (SSE) minimaliseren. Alleen de som van residuen vergelijken kan misleiden doordat positieve en negatieve fouten elkaar opheffen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 30-34: model, regressielijn en residuele variantie"
              },
              {
                "source": "boek-h9a",
                "page": 1,
                "locator": "Boek p. 233 en verder; oorspronkelijke PDF p. 251 en verder"
              }
            ]
          }
        },
        {
          "id": "mc-regressielijn-toepassing-2",
          "prompt": "Voor dezelfde data geeft model A residuen −2, 2 en model B residuen −3, 3. Welk model heeft volgens het OLS-criterium de kleinste fout?",
          "options": [
            "B: SSE = 6",
            "A: SSE = 8",
            "B: SSE = 0",
            "Beide: som residuen is nul"
          ],
          "correct": 1,
          "level": 3,
          "steps": [
            "A: 4 + 4 = 8. B: 9 + 9 = 18.",
            "OLS vergelijkt de som van gekwadrateerde residuen.",
            "Beide modellen hebben een residusom van nul, maar model B maakt grotere afwijkingen. De kwadratensom legt dat verschil wel vast."
          ],
          "explanation": "A: 4 + 4 = 8. B: 9 + 9 = 18. OLS vergelijkt de som van gekwadrateerde residuen. Beide modellen hebben een residusom van nul, maar model B maakt grotere afwijkingen. De kwadratensom legt dat verschil wel vast.",
          "pattern": "Herken: Twee modellen voor dezelfde data, met hun residuen en “OLS-criterium”. → Betekenis: De vergelijking gaat om de som van gekwadrateerde fouten. → Aanpak: Bereken voor elk model Σe²; laat positieve en negatieve fouten elkaar niet opheffen. → Gevraagd antwoord: Het model met de kleinste kwadratensom, met dat criterium als onderbouwing.",
          "trap": "Een som van nul kan grote positieve en negatieve fouten verbergen.",
          "optionExplanations": [
            "6 is de som van de absolute afwijkingen van model B. OLS gebruikt hun kwadraten, waardoor SSE = 18 ontstaat.",
            "Model A heeft SSE = (−2)² + 2² = 8, tegen 18 voor model B. Daarmee heeft A de kleinste kwadratensom.",
            "Model B heeft een gewone residusom van nul, maar de SSE is 9 + 9 = 18. De kwadraten heffen elkaar niet op.",
            "Gelijke residusommen zeggen niet dat de totale fouten even groot zijn. OLS vergelijkt de som van kwadraten."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 30–34, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "exam2024",
              "locator": "Vraag 14, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9a",
              "page": 6,
              "locator": "Boek p. 238; oorspronkelijke PDF p. 256; uitsnede p. 6"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9a",
              "page": 14,
              "locator": "Boek p. 246; oorspronkelijke PDF p. 264; uitsnede p. 14"
            }
          ],
          "recognition": {
            "signals": "Twee modellen voor dezelfde data, met hun residuen en “OLS-criterium”.",
            "meaning": "De vergelijking gaat om de som van gekwadrateerde fouten.",
            "approach": "Bereken voor elk model Σe²; laat positieve en negatieve fouten elkaar niet opheffen.",
            "answer": "Het model met de kleinste kwadratensom, met dat criterium als onderbouwing."
          },
          "guidance": {
            "title": "Voorspelling, residu en kleinste kwadraten",
            "focus": "Het OLS-criterium vergelijkt gekwadrateerde fouten voor dezelfde gegevens. Tel de kwadraten, niet alleen de getekende residuen.",
            "rules": [
              "De geschatte lijn is ŷ = b₀ + b₁x. Vul eerst x in om de voorspelling ŷ te bepalen. Het residu is e = y − ŷ, dus waarneming min voorspelling.",
              "OLS kiest de coëfficiënten die de som van gekwadrateerde residuen (SSE) minimaliseren. Alleen de som van residuen vergelijken kan misleiden doordat positieve en negatieve fouten elkaar opheffen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 30-34: model, regressielijn en residuele variantie"
              },
              {
                "source": "boek-h9a",
                "page": 1,
                "locator": "Boek p. 233 en verder; oorspronkelijke PDF p. 251 en verder"
              }
            ]
          }
        },
        {
          "id": "mc-regressielijn-toepassing-3",
          "prompt": "Er is een sterk positief verband tussen leeftijd en salaris. Welke conclusie is op basis daarvan verdedigbaar?",
          "options": [
            "Een extra jaar leeftijd veroorzaakt altijd dezelfde salarisstijging",
            "Iedere oudere persoon verdient meer",
            "Binnen de onderzochte data hangen leeftijd en salaris positief samen",
            "Andere verklarende variabelen zijn overbodig"
          ],
          "correct": 2,
          "level": 3,
          "steps": [
            "Correlatie beschrijft samenhang binnen de data.",
            "Causaliteit en uitspraken over iedere persoon volgen daar niet automatisch uit.",
            "Een positieve samenhang is een beschrijving van de onderzochte gegevens. Voor individuele garanties of een oorzaak-gevolgconclusie is dat resultaat op zichzelf onvoldoende."
          ],
          "explanation": "Correlatie beschrijft samenhang binnen de data. Causaliteit en uitspraken over iedere persoon volgen daar niet automatisch uit. Een positieve samenhang is een beschrijving van de onderzochte gegevens. Voor individuele garanties of een oorzaak-gevolgconclusie is dat resultaat op zichzelf onvoldoende.",
          "pattern": "Herken: “Sterk positief verband” tussen leeftijd en salaris zonder onderzoeksopzet die oorzaken vaststelt. → Betekenis: Samenhang beschrijft gezamenlijk variëren, niet automatisch een oorzakelijk effect. → Aanpak: Beperk de conclusie tot de waargenomen richting van de samenhang. → Gevraagd antwoord: Een verdedigbare associatie-uitspraak zonder bewezen causaliteit.",
          "trap": "Een sterk verband sluit andere verklaringen niet uit.",
          "optionExplanations": [
            "“Veroorzaakt altijd” gaat verder dan een statistisch verband. Correlatie toont op zichzelf geen causaliteit of vaste individuele verandering aan.",
            "Een positief gemiddeld patroon betekent niet dat elke oudere persoon meer verdient dan elke jongere persoon.",
            "Dit beperkt de conclusie tot de aangetoonde positieve samenhang binnen de onderzochte data.",
            "Een sterk enkelvoudig verband sluit de bijdrage van andere verklarende variabelen niet uit."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 30–34, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "exam2024",
              "locator": "Vraag 14, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9a",
              "page": 6,
              "locator": "Boek p. 238; oorspronkelijke PDF p. 256; uitsnede p. 6"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9a",
              "page": 14,
              "locator": "Boek p. 246; oorspronkelijke PDF p. 264; uitsnede p. 14"
            }
          ],
          "recognition": {
            "signals": "“Sterk positief verband” tussen leeftijd en salaris zonder onderzoeksopzet die oorzaken vaststelt.",
            "meaning": "Samenhang beschrijft gezamenlijk variëren, niet automatisch een oorzakelijk effect.",
            "approach": "Beperk de conclusie tot de waargenomen richting van de samenhang.",
            "answer": "Een verdedigbare associatie-uitspraak zonder bewezen causaliteit."
          },
          "guidance": {
            "title": "Voorspelling, residu en kleinste kwadraten",
            "focus": "Samenhang is geen bewijs van causaliteit en een gemiddelde tendens geldt niet noodzakelijk voor elk individu.",
            "rules": [
              "De geschatte lijn is ŷ = b₀ + b₁x. Vul eerst x in om de voorspelling ŷ te bepalen. Het residu is e = y − ŷ, dus waarneming min voorspelling.",
              "OLS kiest de coëfficiënten die de som van gekwadrateerde residuen (SSE) minimaliseren. Alleen de som van residuen vergelijken kan misleiden doordat positieve en negatieve fouten elkaar opheffen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 30-34: model, regressielijn en residuele variantie"
              },
              {
                "source": "boek-h9a",
                "page": 1,
                "locator": "Boek p. 233 en verder; oorspronkelijke PDF p. 251 en verder"
              }
            ]
          }
        },
        {
          "id": "mc-regressielijn-aanvulling-mse",
          "level": 3,
          "prompt": "Eigen oefenvraag. Bij enkelvoudige regressie zijn n = 12, r = 0,80 en s_y = 5. Wat is de residuele variantie volgens formule 34?",
          "options": [
            "9",
            "17,6",
            "Ongeveer 3,146",
            "9,9"
          ],
          "correct": 3,
          "optionExplanations": [
            "Dit mist de factor (n − 1)/(n − 2), die hier gelijk is aan 11/10.",
            "Dit gebruikt r² in plaats van het onverklaarde aandeel 1 − r².",
            "Dit is de wortel van 9,9, dus de residuele standaardafwijking en niet de variantie.",
            "(11/10) × (1 − 0,80²) × 5² = 1,1 × 0,36 × 25 = 9,9."
          ],
          "steps": [
            "Het model heeft één verklarende variabele en een constante: df = n − 2 = 10.",
            "Het onverklaarde aandeel is 1 − 0,80² = 0,36.",
            "Residuele variantie = 11/10 × 0,36 × 25 = 9,9."
          ],
          "explanation": "Het model heeft één verklarende variabele en een constante: df = n − 2 = 10. Het onverklaarde aandeel is 1 − 0,80² = 0,36. Residuele variantie = 11/10 × 0,36 × 25 = 9,9.",
          "pattern": "Herken: Enkelvoudige regressie, n, r en s_y; gevraagd is residuele variantie volgens formule 34. → Betekenis: De onverklaarde variatie moet worden aangepast voor twee geschatte coëfficiënten. → Aanpak: Bereken [(n − 1)/(n − 2)] × (1 − r²) × s_y². → Gevraagd antwoord: Een residuele variantie in y-eenheden², geen residuele standaardafwijking.",
          "trap": "Varianties zijn gekwadrateerd; neem alleen een wortel als s_e gevraagd wordt.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 30–34, PDF-pagina 2",
              "page": 2
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "exam2024",
              "locator": "Vraag 14, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9a",
              "page": 6,
              "locator": "Boek p. 238; oorspronkelijke PDF p. 256; uitsnede p. 6"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9a",
              "page": 14,
              "locator": "Boek p. 246; oorspronkelijke PDF p. 264; uitsnede p. 14"
            }
          ],
          "recognition": {
            "signals": "Enkelvoudige regressie, n, r en s_y; gevraagd is residuele variantie volgens formule 34.",
            "meaning": "De onverklaarde variatie moet worden aangepast voor twee geschatte coëfficiënten.",
            "approach": "Bereken [(n − 1)/(n − 2)] × (1 − r²) × s_y².",
            "answer": "Een residuele variantie in y-eenheden², geen residuele standaardafwijking."
          },
          "guidance": {
            "title": "Voorspelling, residu en kleinste kwadraten",
            "focus": "Zonder ANOVA-uitvoer kun je bij enkelvoudige regressie formule 34 gebruiken: s_e² = (n − 1)/(n − 2) × (1 − r²) × s_y². Dit geeft een variantie, geen standaardafwijking.",
            "rules": [
              "De geschatte lijn is ŷ = b₀ + b₁x. Vul eerst x in om de voorspelling ŷ te bepalen. Het residu is e = y − ŷ, dus waarneming min voorspelling.",
              "OLS kiest de coëfficiënten die de som van gekwadrateerde residuen (SSE) minimaliseren. Alleen de som van residuen vergelijken kan misleiden doordat positieve en negatieve fouten elkaar opheffen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 2,
                "locator": "Formules 30-34: model, regressielijn en residuele variantie"
              },
              {
                "source": "boek-h9a",
                "page": 1,
                "locator": "Boek p. 233 en verder; oorspronkelijke PDF p. 251 en verder"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "anova",
      "title": "ANOVA en verklaarde variatie",
      "phase": "Regressie",
      "lesson": "anova",
      "signal": "SPSS geeft SS, df, MS, F en R².",
      "approach": "Splits totale variatie in verklaarde en resterende variatie; deel SS door de juiste df.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formules 35–43, PDF-pagina 3",
          "page": 3
        },
        {
          "source": "attentie",
          "locator": "PDF-pagina 4–5",
          "page": 4
        },
        {
          "source": "exam2024",
          "locator": "Vraag 9–10, PDF-pagina 4",
          "page": 4
        },
        {
          "source": "boek-h9a",
          "page": 16,
          "locator": "Boek p. 248; oorspronkelijke PDF p. 266; uitsnede p. 16"
        }
      ],
      "questions": [
        {
          "id": "mc-anova-basis-1",
          "prompt": "SSR = 80 en TotalSS = 100. Wat is R²?",
          "options": [
            "0,20",
            "0,80",
            "1,25"
          ],
          "correct": 1,
          "explanation": "SSR is de door het model verklaarde kwadratensom; TotalSS is de totale kwadratensom. R² = SSR/TotalSS = 80/100 = 0,80. Het model verklaart hiermee 80% van de variatie in y. De resterende 20% is onverklaard.",
          "steps": [
            "SSR is de door het model verklaarde kwadratensom; TotalSS is de totale kwadratensom.",
            "R² = SSR/TotalSS = 80/100 = 0,80.",
            "Het model verklaart hiermee 80% van de variatie in y. De resterende 20% is onverklaard."
          ],
          "pattern": "Herken: SSR en TotalSS, met R² als gevraagde maat. → Betekenis: Je zoekt het aandeel verklaarde variatie in de totale variatie. → Aanpak: Deel SSR door TotalSS en herken het verschil met het onverklaarde aandeel. → Gevraagd antwoord: Een verklaarde fractie of percentage, geen fout in de oorspronkelijke meeteenheid.",
          "trap": "Verklaarde variatie is niet hetzelfde als het percentage exact juiste voorspellingen.",
          "optionExplanations": [
            "0,20 = 1 − 0,80 is de onverklaarde fractie. De vraag vraagt het verklaarde aandeel.",
            "0,80 is 80/100: 80% van de totale variatie wordt door het model verklaard.",
            "1,25 is 100/80, de omgekeerde verhouding. In de hier behandelde OLS-regressie met constante ligt R² tussen 0 en 1."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 35–43, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "exam2024",
              "locator": "Vraag 9–10, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "boek-h9a",
              "page": 16,
              "locator": "Boek p. 248; oorspronkelijke PDF p. 266; uitsnede p. 16"
            }
          ],
          "recognition": {
            "signals": "SSR en TotalSS, met R² als gevraagde maat.",
            "meaning": "Je zoekt het aandeel verklaarde variatie in de totale variatie.",
            "approach": "Deel SSR door TotalSS en herken het verschil met het onverklaarde aandeel.",
            "answer": "Een verklaarde fractie of percentage, geen fout in de oorspronkelijke meeteenheid."
          },
          "level": 1,
          "guidance": {
            "title": "ANOVA: verklaarde en onverklaarde variatie",
            "focus": "Het verklaarde aandeel heeft TotalSS in de noemer. De niet-verklaarde fractie is 1 − R².",
            "rules": [
              "TotalSS = SSR + SSE. SSR is de verklaarde kwadratensom en SSE de resterende kwadratensom. Het verklaarde aandeel is R² = SSR/TotalSS.",
              "Bij een model met constante is k het aantal verklarende variabelen; de constante telt niet mee in k. De vrijheidsgraden zijn k voor regressie, n − k − 1 voor residu en n − 1 voor totaal. MSE = SSE/(n − k − 1), MSR = SSR/k en F = MSR/MSE."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 35-43: variantieanalyse en globale F-toets"
              }
            ]
          }
        },
        {
          "id": "mc-anova-basis-2",
          "prompt": "n = 50 en k = 3. Hoeveel residual df?",
          "options": [
            "49",
            "47",
            "46"
          ],
          "correct": 2,
          "explanation": "Bij n waarnemingen en k verklarende variabelen worden k hellingen en één constante geschat. De resterende vrijheidsgraden zijn daarom n − k − 1. Invullen geeft 50 − 3 − 1 = 46 residual df. De total df zijn 49 en regression df zijn 3.",
          "steps": [
            "Bij n waarnemingen en k verklarende variabelen worden k hellingen en één constante geschat.",
            "De resterende vrijheidsgraden zijn daarom n − k − 1.",
            "Invullen geeft 50 − 3 − 1 = 46 residual df. De total df zijn 49 en regression df zijn 3."
          ],
          "pattern": "Herken: n en het aantal verklarende variabelen k; gevraagd is “residual df”. → Betekenis: Residu-vrijheidsgraden houden rekening met alle geschatte coëfficiënten inclusief constante. → Aanpak: Gebruik n − k − 1; tel de constante niet nogmaals bij k. → Gevraagd antwoord: Het aantal vrijheidsgraden van de residuen.",
          "trap": "k telt de constante niet mee, maar in de residual df moet je die wel afzonderlijk aftrekken.",
          "optionExplanations": [
            "49 = n − 1 zijn de total df. Voor residual df moeten ook de drie verklarende variabelen worden verwerkt.",
            "47 = n − k vergeet de geschatte constante. Die kost nog één vrijheid.",
            "46 = n − k − 1 is juist. Controle: regression df 3 plus residual df 46 geeft total df 49."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 35–43, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "exam2024",
              "locator": "Vraag 9–10, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "boek-h9a",
              "page": 16,
              "locator": "Boek p. 248; oorspronkelijke PDF p. 266; uitsnede p. 16"
            }
          ],
          "recognition": {
            "signals": "n en het aantal verklarende variabelen k; gevraagd is “residual df”.",
            "meaning": "Residu-vrijheidsgraden houden rekening met alle geschatte coëfficiënten inclusief constante.",
            "approach": "Gebruik n − k − 1; tel de constante niet nogmaals bij k.",
            "answer": "Het aantal vrijheidsgraden van de residuen."
          },
          "level": 1,
          "guidance": {
            "title": "ANOVA: verklaarde en onverklaarde variatie",
            "focus": "Trek voor residuele vrijheidsgraden zowel de k verklarende variabelen als de constante van n af.",
            "rules": [
              "TotalSS = SSR + SSE. SSR is de verklaarde kwadratensom en SSE de resterende kwadratensom. Het verklaarde aandeel is R² = SSR/TotalSS.",
              "Bij een model met constante is k het aantal verklarende variabelen; de constante telt niet mee in k. De vrijheidsgraden zijn k voor regressie, n − k − 1 voor residu en n − 1 voor totaal. MSE = SSE/(n − k − 1), MSR = SSR/k en F = MSR/MSE."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 35-43: variantieanalyse en globale F-toets"
              }
            ]
          }
        },
        {
          "id": "mc-anova-basis-3",
          "prompt": "MSE = 16. Wat is Std. Error of the Estimate?",
          "options": [
            "4",
            "16",
            "256"
          ],
          "correct": 0,
          "explanation": "MSE is de gemiddelde kwadratensom van de residuen en schat hun variantie s²_e. Std. Error of the Estimate is de bijbehorende standaardafwijking s_e. Neem dus de wortel: s_e = √MSE = √16 = 4, in de oorspronkelijke eenheid van y.",
          "steps": [
            "MSE is de gemiddelde kwadratensom van de residuen en schat hun variantie s²_e.",
            "Std. Error of the Estimate is de bijbehorende standaardafwijking s_e.",
            "Neem dus de wortel: s_e = √MSE = √16 = 4, in de oorspronkelijke eenheid van y."
          ],
          "pattern": "Herken: MSE gegeven en “Std. Error of the Estimate” gevraagd. → Betekenis: MSE is een variantie; de gevraagde uitvoermaat is een standaardafwijking. → Aanpak: Neem √MSE en controleer dat de eenheid teruggaat naar die van y. → Gevraagd antwoord: De residuele standaardafwijking, geen R² of standaardfout van een coëfficiënt.",
          "trap": "MSE en Std. Error of the Estimate beschrijven dezelfde residuen, maar staan op een andere schaal.",
          "optionExplanations": [
            "4 is √16 en daarmee de gevraagde standaardafwijking van de residuen.",
            "16 is nog de MSE, dus de variantie. Voor de standaardfout ontbreekt de wortel.",
            "256 is 16². Daarmee kwadrateer je opnieuw in plaats van de variantie terug te brengen naar een standaardafwijking."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 35–43, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "exam2024",
              "locator": "Vraag 9–10, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "boek-h9a",
              "page": 16,
              "locator": "Boek p. 248; oorspronkelijke PDF p. 266; uitsnede p. 16"
            }
          ],
          "recognition": {
            "signals": "MSE gegeven en “Std. Error of the Estimate” gevraagd.",
            "meaning": "MSE is een variantie; de gevraagde uitvoermaat is een standaardafwijking.",
            "approach": "Neem √MSE en controleer dat de eenheid teruggaat naar die van y.",
            "answer": "De residuele standaardafwijking, geen R² of standaardfout van een coëfficiënt."
          },
          "level": 2,
          "guidance": {
            "title": "ANOVA: verklaarde en onverklaarde variatie",
            "focus": "Std. Error of the Estimate is √MSE. R² betreft verklaarde variatie, niet het percentage exact voorspelde waarnemingen.",
            "rules": [
              "TotalSS = SSR + SSE. SSR is de verklaarde kwadratensom en SSE de resterende kwadratensom. Het verklaarde aandeel is R² = SSR/TotalSS.",
              "Bij een model met constante is k het aantal verklarende variabelen; de constante telt niet mee in k. De vrijheidsgraden zijn k voor regressie, n − k − 1 voor residu en n − 1 voor totaal. MSE = SSE/(n − k − 1), MSR = SSR/k en F = MSR/MSE."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 35-43: variantieanalyse en globale F-toets"
              }
            ]
          }
        },
        {
          "id": "mc-anova-toepassing-1",
          "prompt": "TotalSS = 200 en SSR = 150. Welke combinatie klopt?",
          "options": [
            "SSE = 150; R² = 0,75",
            "SSE = 50; R² = 0,75",
            "SSE = 350; R² = 0,25",
            "SSE = 50; R² = 0,25"
          ],
          "correct": 1,
          "level": 2,
          "steps": [
            "SSE = TotalSS − SSR = 50.",
            "R² = SSR/TotalSS = 150/200 = 0,75.",
            "De drie kwadratensommen horen bij dezelfde verdeling van variatie. Controleer altijd dat verklaard plus onverklaard weer het totaal oplevert."
          ],
          "explanation": "SSE = TotalSS − SSR = 50. R² = SSR/TotalSS = 150/200 = 0,75. De drie kwadratensommen horen bij dezelfde verdeling van variatie. Controleer altijd dat verklaard plus onverklaard weer het totaal oplevert.",
          "pattern": "Herken: TotalSS en SSR als twee delen van de ANOVA-opsplitsing. → Betekenis: Hieruit volgen de onverklaarde kwadratensom en het verklaarde aandeel. → Aanpak: Gebruik SSE = TotalSS − SSR en R² = SSR/TotalSS. → Gevraagd antwoord: Een combinatie van een kwadratensom en een dimensieloos verklaard aandeel.",
          "trap": "1 − R² is de onverklaarde fractie.",
          "optionExplanations": [
            "R² = 0,75 klopt, maar SSE kan geen 150 zijn: SSR 150 plus SSE 150 zou TotalSS 300 geven.",
            "SSE = 200 − 150 = 50 en R² = 150/200 = 0,75. Zowel de ontbrekende kwadratensom als de verklaarde fractie klopt.",
            "350 telt SSR en TotalSS op. SSE is het resterende deel van TotalSS; bovendien is 0,25 het onverklaarde aandeel.",
            "SSE = 50 klopt, maar 0,25 = SSE/TotalSS beschrijft onverklaarde variatie. R² is 0,75."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 35–43, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "exam2024",
              "locator": "Vraag 9–10, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "boek-h9a",
              "page": 16,
              "locator": "Boek p. 248; oorspronkelijke PDF p. 266; uitsnede p. 16"
            }
          ],
          "recognition": {
            "signals": "TotalSS en SSR als twee delen van de ANOVA-opsplitsing.",
            "meaning": "Hieruit volgen de onverklaarde kwadratensom en het verklaarde aandeel.",
            "approach": "Gebruik SSE = TotalSS − SSR en R² = SSR/TotalSS.",
            "answer": "Een combinatie van een kwadratensom en een dimensieloos verklaard aandeel."
          },
          "guidance": {
            "title": "ANOVA: verklaarde en onverklaarde variatie",
            "focus": "Het verklaarde aandeel heeft TotalSS in de noemer. De niet-verklaarde fractie is 1 − R².",
            "rules": [
              "TotalSS = SSR + SSE. SSR is de verklaarde kwadratensom en SSE de resterende kwadratensom. Het verklaarde aandeel is R² = SSR/TotalSS.",
              "Bij een model met constante is k het aantal verklarende variabelen; de constante telt niet mee in k. De vrijheidsgraden zijn k voor regressie, n − k − 1 voor residu en n − 1 voor totaal. MSE = SSE/(n − k − 1), MSR = SSR/k en F = MSR/MSE."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 35-43: variantieanalyse en globale F-toets"
              }
            ]
          }
        },
        {
          "id": "mc-anova-toepassing-2",
          "prompt": "n = 20, k = 2, SSR = 180 en SSE = 34. Wat is de globale F?",
          "options": [
            "90",
            "5,29",
            "45",
            "2"
          ],
          "correct": 2,
          "level": 3,
          "steps": [
            "MSR = SSR/k = 90.",
            "Residual df = 20 − 2 − 1 = 17; MSE = 34/17 = 2.",
            "F = MSR/MSE = 45.",
            "Een F-verhouding gebruikt Mean Squares, dus variatie per vrijheid. De twee kwadratensommen hebben verschillende aantallen vrijheidsgraden."
          ],
          "explanation": "MSR = SSR/k = 90. Residual df = 20 − 2 − 1 = 17; MSE = 34/17 = 2. F = MSR/MSE = 45. Een F-verhouding gebruikt Mean Squares, dus variatie per vrijheid. De twee kwadratensommen hebben verschillende aantallen vrijheidsgraden.",
          "pattern": "Herken: n, k, SSR en SSE; gevraagd is de globale F. → Betekenis: F vergelijkt verklaarde en onverklaarde variatie per vrijheidsgraad. → Aanpak: Bereken (SSR/k)/(SSE/(n − k − 1)). → Gevraagd antwoord: Een globale F-toetsingsgrootheid, nog zonder significantiebeslissing als grens of p ontbreekt.",
          "trap": "SSR/SSE is niet de globale F.",
          "optionExplanations": [
            "90 is MSR = 180/2. Voor F moet je MSR nog delen door MSE = 2.",
            "5,29 is ongeveer SSR/SSE = 180/34. Daarbij worden de verschillende vrijheidsgraden niet verwerkt.",
            "45 = (180/2)/(34/17) is de verhouding van de juiste Mean Squares.",
            "2 is MSE = 34/17. De gevraagde F is MSR/MSE, niet MSE alleen."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 35–43, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "exam2024",
              "locator": "Vraag 9–10, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "boek-h9a",
              "page": 16,
              "locator": "Boek p. 248; oorspronkelijke PDF p. 266; uitsnede p. 16"
            }
          ],
          "recognition": {
            "signals": "n, k, SSR en SSE; gevraagd is de globale F.",
            "meaning": "F vergelijkt verklaarde en onverklaarde variatie per vrijheidsgraad.",
            "approach": "Bereken (SSR/k)/(SSE/(n − k − 1)).",
            "answer": "Een globale F-toetsingsgrootheid, nog zonder significantiebeslissing als grens of p ontbreekt."
          },
          "guidance": {
            "title": "ANOVA: verklaarde en onverklaarde variatie",
            "focus": "Bereken eerst de twee mean squares met hun eigen vrijheidsgraden. SSR/SSE rechtstreeks delen geeft niet de globale F.",
            "rules": [
              "TotalSS = SSR + SSE. SSR is de verklaarde kwadratensom en SSE de resterende kwadratensom. Het verklaarde aandeel is R² = SSR/TotalSS.",
              "Bij een model met constante is k het aantal verklarende variabelen; de constante telt niet mee in k. De vrijheidsgraden zijn k voor regressie, n − k − 1 voor residu en n − 1 voor totaal. MSE = SSE/(n − k − 1), MSR = SSR/k en F = MSR/MSE."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 35-43: variantieanalyse en globale F-toets"
              }
            ]
          }
        },
        {
          "id": "mc-anova-toepassing-3",
          "prompt": "R² = 0,81 en MSE = 25 voor een model van salaris. Wat is een juiste interpretatie?",
          "options": [
            "De correlatie is zeker +0,81",
            "De residuele standaardafwijking is 25",
            "81% van alle salarissen wordt exact voorspeld",
            "Het model verklaart 81% van de variatie; de residuele standaardafwijking is 5"
          ],
          "correct": 3,
          "level": 3,
          "steps": [
            "R² meet de verklaarde fractie van de variatie.",
            "De residuele standaardafwijking is √MSE = 5.",
            "R² is dimensieloos; √MSE heeft de eenheid van salaris. Ze beschrijven verschillende kanten van het model en mogen niet onderling worden verwisseld."
          ],
          "explanation": "R² meet de verklaarde fractie van de variatie. De residuele standaardafwijking is √MSE = 5. R² is dimensieloos; √MSE heeft de eenheid van salaris. Ze beschrijven verschillende kanten van het model en mogen niet onderling worden verwisseld.",
          "pattern": "Herken: R² én MSE bij een salaris-model; gevraagd is interpretatie. → Betekenis: R² beschrijft een variatieaandeel, terwijl √MSE de residuele spreiding beschrijft. → Aanpak: Vertaal R² naar verklaarde variatie en neem de wortel van MSE voor de salariseenheid. → Gevraagd antwoord: Twee onderscheiden interpretaties; geen individuele juistheidskans of causaliteitsbewijs.",
          "trap": "Een hoge R² betekent geen foutloze individuele voorspellingen.",
          "optionExplanations": [
            "0,81 is R² en niet automatisch de correlatie. Zelfs in enkelvoudige regressie is de grootte van r dan √0,81 = 0,90; het teken volgt uit de helling.",
            "25 is de residuele variantie MSE. De standaardafwijking is de wortel daarvan: 5.",
            "81% verklaarde variatie betekent niet dat 81% van de personen exact wordt voorspeld. Individuele residuen kunnen blijven bestaan.",
            "R² = 0,81 betekent 81% verklaarde variatie. √25 = 5 is de residuele standaardafwijking in de eenheid van salaris."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 35–43, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "exam2024",
              "locator": "Vraag 9–10, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "boek-h9a",
              "page": 16,
              "locator": "Boek p. 248; oorspronkelijke PDF p. 266; uitsnede p. 16"
            }
          ],
          "recognition": {
            "signals": "R² én MSE bij een salaris-model; gevraagd is interpretatie.",
            "meaning": "R² beschrijft een variatieaandeel, terwijl √MSE de residuele spreiding beschrijft.",
            "approach": "Vertaal R² naar verklaarde variatie en neem de wortel van MSE voor de salariseenheid.",
            "answer": "Twee onderscheiden interpretaties; geen individuele juistheidskans of causaliteitsbewijs."
          },
          "guidance": {
            "title": "ANOVA: verklaarde en onverklaarde variatie",
            "focus": "Std. Error of the Estimate is √MSE. R² betreft verklaarde variatie, niet het percentage exact voorspelde waarnemingen.",
            "rules": [
              "TotalSS = SSR + SSE. SSR is de verklaarde kwadratensom en SSE de resterende kwadratensom. Het verklaarde aandeel is R² = SSR/TotalSS.",
              "Bij een model met constante is k het aantal verklarende variabelen; de constante telt niet mee in k. De vrijheidsgraden zijn k voor regressie, n − k − 1 voor residu en n − 1 voor totaal. MSE = SSE/(n − k − 1), MSR = SSR/k en F = MSR/MSE."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 35-43: variantieanalyse en globale F-toets"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "toetsen",
      "title": "Hypothesen, t-toets en F-toets",
      "phase": "Regressie",
      "lesson": "toetsen",
      "signal": "De vraag wil bewijs voor een verband, richting of extra bijdrage.",
      "approach": "Bepaal H₀/H₁ en een- of tweezijdigheid, bereken de toets en concludeer in de casus.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formules 39–43 en 61–62, PDF-pagina 3–4",
          "page": 3
        },
        {
          "source": "attentie",
          "locator": "PDF-pagina 4–5 en 8",
          "page": 4
        },
        {
          "source": "exam2025",
          "locator": "Vraag 21, PDF-pagina 14",
          "page": 14
        },
        {
          "source": "boek-h9b",
          "page": 4,
          "locator": "Boek p. 252; oorspronkelijke PDF p. 270; uitsnede p. 4"
        },
        {
          "source": "set-basis",
          "page": 3,
          "locator": "SET-attentiepunten, oorspronkelijke PDF p. 5; uitsnede p. 3"
        },
        {
          "source": "opgaven",
          "page": 10,
          "locator": "H9 opgave 1, PDF 10"
        },
        {
          "source": "uitwerkingen",
          "page": 14,
          "locator": "H9 opgave 1, PDF 14–15"
        },
        {
          "source": "boek-h9b",
          "page": 7,
          "locator": "Boek p. 255; oorspronkelijke PDF p. 273; uitsnede p. 7"
        }
      ],
      "questions": [
        {
          "id": "mc-toetsen-basis-1",
          "prompt": "Welke H₁ hoort bij een dalend verband?",
          "options": [
            "β₁ > 0",
            "β₁ = 0",
            "β₁ < 0"
          ],
          "correct": 2,
          "explanation": "De hellingscoëfficiënt β₁ beschrijft in het populatiemodel de richting van het verband. Een dalend verband betekent dat y afneemt als x toeneemt: de helling is negatief. De alternatieve hypothese voor het aantonen van een dalend verband is daarom H₁: β₁ < 0; de bijbehorende H₀ is β₁ ≥ 0.",
          "steps": [
            "De hellingscoëfficiënt β₁ beschrijft in het populatiemodel de richting van het verband.",
            "Een dalend verband betekent dat y afneemt als x toeneemt: de helling is negatief.",
            "De alternatieve hypothese voor het aantonen van een dalend verband is daarom H₁: β₁ < 0; de bijbehorende H₀ is β₁ ≥ 0."
          ],
          "pattern": "Herken: “Dalend verband” bij het formuleren van H₁. → Betekenis: De onderzoeksvraag is gericht op een negatieve populatiehelling. → Aanpak: Vertaal de richting naar β₁ < 0, niet naar een uitspraak over alleen de geschatte b₁. → Gevraagd antwoord: Een eenzijdige alternatieve hypothese over de populatieparameter.",
          "trap": "De richting hoort uit de vraag te komen, niet achteraf uit het teken van de gevonden coëfficiënt.",
          "optionExplanations": [
            "β₁ > 0 beschrijft een stijgend verband, precies de andere richting dan gevraagd.",
            "β₁ = 0 beschrijft geen helling en vormt de grenswaarde van de nulhypothese. Het toont geen dalend verband aan.",
            "β₁ < 0 beschrijft een negatieve populatiehelling en sluit aan bij het gevraagde dalende verband."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 39–43 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5 en 8",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Vraag 21, PDF-pagina 14",
              "page": 14
            },
            {
              "source": "boek-h9b",
              "page": 4,
              "locator": "Boek p. 252; oorspronkelijke PDF p. 270; uitsnede p. 4"
            },
            {
              "source": "set-basis",
              "page": 3,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 5; uitsnede p. 3"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9b",
              "page": 7,
              "locator": "Boek p. 255; oorspronkelijke PDF p. 273; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "“Dalend verband” bij het formuleren van H₁.",
            "meaning": "De onderzoeksvraag is gericht op een negatieve populatiehelling.",
            "approach": "Vertaal de richting naar β₁ < 0, niet naar een uitspraak over alleen de geschatte b₁.",
            "answer": "Een eenzijdige alternatieve hypothese over de populatieparameter."
          },
          "level": 1,
          "guidance": {
            "title": "Hypothese, toetsingsgrootheid en conclusie",
            "focus": "Formuleer de verwachte richting voor de populatiehelling, niet voor één losse waarneming.",
            "rules": [
              "De hypothese gaat over een populatieparameter zoals β of ρ. Een stijging hoort bij een positieve alternatieve richting, een daling bij een negatieve; een verband zonder richting is tweezijdig.",
              "Voor H₀: β = 0 gebruik je t = B/Std. Error. Vergelijk een tweezijdige p-waarde met α. Bij een eenzijdige conclusie moet ook het teken van het gevonden effect bij de gevraagde richting passen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 39-43: t- en F-toets"
              },
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 61-62: globale en individuele toets"
              },
              {
                "source": "attentie",
                "page": 4,
                "locator": "PDF p. 4-5: hypothesen en conclusies"
              }
            ]
          }
        },
        {
          "id": "mc-toetsen-basis-2",
          "prompt": "Tweezijdige p = 0,03; α = 0,05. Wat doe je?",
          "options": [
            "H₀ verwerpen",
            "Niet verwerpen omdat 0,03 > 0,025",
            "H₀ bewijzen"
          ],
          "correct": 0,
          "explanation": "De opgegeven p = 0,03 is al tweezijdig en houdt dus al rekening met beide staarten. Vergelijk deze p rechtstreeks met de totale α = 0,05: 0,03 < 0,05. Verwerp H₀ op het 5%-niveau. Daarmee is er statistisch bewijs tegen H₀; de toets geeft geen absolute zekerheid.",
          "steps": [
            "De opgegeven p = 0,03 is al tweezijdig en houdt dus al rekening met beide staarten.",
            "Vergelijk deze p rechtstreeks met de totale α = 0,05: 0,03 < 0,05.",
            "Verwerp H₀ op het 5%-niveau. Daarmee is er statistisch bewijs tegen H₀; de toets geeft geen absolute zekerheid."
          ],
          "pattern": "Herken: Een tweezijdige p-waarde en α. → Betekenis: De p-waarde hoort al bij de gevraagde toetsrichting. → Aanpak: Vergelijk p rechtstreeks met α; halveer de p niet zonder eenzijdige vraag. → Gevraagd antwoord: H₀ wel of niet verwerpen op het gegeven significantieniveau.",
          "trap": "α/2 gebruik je bij de verdeling over staarten voor een kritieke tabelgrens, niet als extra correctie op een tweezijdige p.",
          "optionExplanations": [
            "H₀ verwerpen is juist, omdat de tweezijdige p = 0,03 kleiner is dan α = 0,05.",
            "Deze vergelijking corrigeert dubbel voor tweezijdigheid. De p-waarde omvat beide staarten al en moet met 0,05 worden vergeleken.",
            "De gegevens leveren hier aanleiding H₀ te verwerpen. Een toets bewijst H₀ bovendien niet, ook niet als je H₀ niet zou verwerpen."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 39–43 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5 en 8",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Vraag 21, PDF-pagina 14",
              "page": 14
            },
            {
              "source": "boek-h9b",
              "page": 4,
              "locator": "Boek p. 252; oorspronkelijke PDF p. 270; uitsnede p. 4"
            },
            {
              "source": "set-basis",
              "page": 3,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 5; uitsnede p. 3"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9b",
              "page": 7,
              "locator": "Boek p. 255; oorspronkelijke PDF p. 273; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "Een tweezijdige p-waarde en α.",
            "meaning": "De p-waarde hoort al bij de gevraagde toetsrichting.",
            "approach": "Vergelijk p rechtstreeks met α; halveer de p niet zonder eenzijdige vraag.",
            "answer": "H₀ wel of niet verwerpen op het gegeven significantieniveau."
          },
          "level": 1,
          "guidance": {
            "title": "Hypothese, toetsingsgrootheid en conclusie",
            "focus": "Vergelijk de volledige tweezijdige p met α. H₀ niet verwerpen is iets anders dan bewijzen dat H₀ waar is.",
            "rules": [
              "De hypothese gaat over een populatieparameter zoals β of ρ. Een stijging hoort bij een positieve alternatieve richting, een daling bij een negatieve; een verband zonder richting is tweezijdig.",
              "Voor H₀: β = 0 gebruik je t = B/Std. Error. Vergelijk een tweezijdige p-waarde met α. Bij een eenzijdige conclusie moet ook het teken van het gevonden effect bij de gevraagde richting passen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 39-43: t- en F-toets"
              },
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 61-62: globale en individuele toets"
              },
              {
                "source": "attentie",
                "page": 4,
                "locator": "PDF p. 4-5: hypothesen en conclusies"
              }
            ]
          }
        },
        {
          "id": "mc-toetsen-basis-3",
          "prompt": "Een significante F bij drie verklarende variabelen betekent:",
          "options": [
            "Alle drie zijn significant",
            "Minstens één hellingscoëfficiënt is niet nul",
            "De residuen zijn normaal"
          ],
          "correct": 1,
          "explanation": "De globale F-toets heeft als H₀ dat alle drie de hellingscoëfficiënten gezamenlijk nul zijn. Een significante F geeft aanleiding die gezamenlijke nulhypothese te verwerpen. De conclusie is dat minstens één hellingscoëfficiënt niet nul is. Welke coëfficiënten afzonderlijk bijdragen, beoordeel je met hun eigen toetsen.",
          "steps": [
            "De globale F-toets heeft als H₀ dat alle drie de hellingscoëfficiënten gezamenlijk nul zijn.",
            "Een significante F geeft aanleiding die gezamenlijke nulhypothese te verwerpen.",
            "De conclusie is dat minstens één hellingscoëfficiënt niet nul is. Welke coëfficiënten afzonderlijk bijdragen, beoordeel je met hun eigen toetsen."
          ],
          "pattern": "Herken: Een significante globale F bij meerdere verklarende variabelen. → Betekenis: De nulhypothese stelt dat alle populatiehellingen tegelijk nul zijn. → Aanpak: Koppel verwerpen aan ten minste één niet-nulle helling; benoem geen specifieke variabele zonder t-toets. → Gevraagd antwoord: Een conclusie over het model als geheel, niet over iedere voorspeller afzonderlijk.",
          "trap": "Gezamenlijke significantie betekent niet dat iedere afzonderlijke variabele significant is.",
          "optionExplanations": [
            "De F-toets onderscheidt niet welke van de drie coëfficiënten afwijken. Voor “alle drie” zijn afzonderlijke beoordelingen nodig.",
            "Dit is de alternatieve hypothese van de globale F-toets: niet alle hellingen zijn nul, dus minstens één wijkt af.",
            "Normaliteit van de residuen is een modeldiagnose, geen uitkomst van de globale F-toets."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 39–43 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5 en 8",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Vraag 21, PDF-pagina 14",
              "page": 14
            },
            {
              "source": "boek-h9b",
              "page": 4,
              "locator": "Boek p. 252; oorspronkelijke PDF p. 270; uitsnede p. 4"
            },
            {
              "source": "set-basis",
              "page": 3,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 5; uitsnede p. 3"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9b",
              "page": 7,
              "locator": "Boek p. 255; oorspronkelijke PDF p. 273; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "Een significante globale F bij meerdere verklarende variabelen.",
            "meaning": "De nulhypothese stelt dat alle populatiehellingen tegelijk nul zijn.",
            "approach": "Koppel verwerpen aan ten minste één niet-nulle helling; benoem geen specifieke variabele zonder t-toets.",
            "answer": "Een conclusie over het model als geheel, niet over iedere voorspeller afzonderlijk."
          },
          "level": 2,
          "guidance": {
            "title": "Hypothese, toetsingsgrootheid en conclusie",
            "focus": "De globale F toetst gezamenlijk of alle hellingen nul zijn. Een individuele t-toets gaat over één bijdrage gegeven de overige voorspellers; de conclusies hoeven niet gelijk te zijn.",
            "rules": [
              "De hypothese gaat over een populatieparameter zoals β of ρ. Een stijging hoort bij een positieve alternatieve richting, een daling bij een negatieve; een verband zonder richting is tweezijdig.",
              "Voor H₀: β = 0 gebruik je t = B/Std. Error. Vergelijk een tweezijdige p-waarde met α. Bij een eenzijdige conclusie moet ook het teken van het gevonden effect bij de gevraagde richting passen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 39-43: t- en F-toets"
              },
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 61-62: globale en individuele toets"
              },
              {
                "source": "attentie",
                "page": 4,
                "locator": "PDF p. 4-5: hypothesen en conclusies"
              }
            ]
          }
        },
        {
          "id": "mc-toetsen-toepassing-1",
          "prompt": "B = 6 en Std. Error = 2. Wat is t voor H₀: β = 0?",
          "options": [
            "12",
            "0,333",
            "3",
            "4"
          ],
          "correct": 2,
          "level": 2,
          "steps": [
            "t = (B − 0)/Std. Error.",
            "6/2 = 3.",
            "De t-waarde drukt uit hoeveel geschatte standaardfouten B van de nulwaarde af ligt. Hier zijn dat drie standaardfouten."
          ],
          "explanation": "t = (B − 0)/Std. Error. 6/2 = 3. De t-waarde drukt uit hoeveel geschatte standaardfouten B van de nulwaarde af ligt. Hier zijn dat drie standaardfouten.",
          "pattern": "Herken: B en Std. Error uit Coefficients, met H₀: β = 0. → Betekenis: De geschatte coëfficiënt wordt uitgedrukt in aantallen standaardfouten van nul. → Aanpak: Bereken t = (B − 0)/Std. Error en behoud het teken. → Gevraagd antwoord: Een t-toetsingsgrootheid voor deze coëfficiënt.",
          "trap": "B × standaardfout is geen toetsingsgrootheid.",
          "optionExplanations": [
            "12 = 6 × 2 vermenigvuldigt B met de standaardfout. De toetsingsgrootheid gebruikt de verhouding.",
            "0,333 is ongeveer 2/6, de omgekeerde verhouding. B min de nulwaarde hoort in de teller.",
            "3 = (6 − 0)/2 is de juiste t-waarde voor H₀: β = 0.",
            "4 = 6 − 2 trekt één standaardfout af. Dat is niet het standaardiseren van het verschil met de nulwaarde."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 39–43 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5 en 8",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Vraag 21, PDF-pagina 14",
              "page": 14
            },
            {
              "source": "boek-h9b",
              "page": 4,
              "locator": "Boek p. 252; oorspronkelijke PDF p. 270; uitsnede p. 4"
            },
            {
              "source": "set-basis",
              "page": 3,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 5; uitsnede p. 3"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9b",
              "page": 7,
              "locator": "Boek p. 255; oorspronkelijke PDF p. 273; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "B en Std. Error uit Coefficients, met H₀: β = 0.",
            "meaning": "De geschatte coëfficiënt wordt uitgedrukt in aantallen standaardfouten van nul.",
            "approach": "Bereken t = (B − 0)/Std. Error en behoud het teken.",
            "answer": "Een t-toetsingsgrootheid voor deze coëfficiënt."
          },
          "guidance": {
            "title": "Hypothese, toetsingsgrootheid en conclusie",
            "focus": "Gebruik de B-coëfficiënt en haar eigen Std. Error uit dezelfde modelrij. De hypothese bepaalt welke nulwaarde je van B aftrekt.",
            "rules": [
              "De hypothese gaat over een populatieparameter zoals β of ρ. Een stijging hoort bij een positieve alternatieve richting, een daling bij een negatieve; een verband zonder richting is tweezijdig.",
              "Voor H₀: β = 0 gebruik je t = B/Std. Error. Vergelijk een tweezijdige p-waarde met α. Bij een eenzijdige conclusie moet ook het teken van het gevonden effect bij de gevraagde richting passen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 39-43: t- en F-toets"
              },
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 61-62: globale en individuele toets"
              },
              {
                "source": "attentie",
                "page": 4,
                "locator": "PDF p. 4-5: hypothesen en conclusies"
              }
            ]
          }
        },
        {
          "id": "mc-toetsen-toepassing-2",
          "prompt": "H₁: β > 0, maar de gevonden helling is negatief. De tweezijdige p is 0,02. Wat betekent dit voor de gevraagde stijging bij α = 0,05?",
          "options": [
            "β is bewezen nul",
            "Elke kleine tweezijdige p bewijst een stijging",
            "Significant stijgend, want 0,02/2 < 0,05",
            "Geen bewijs voor de gevraagde stijging"
          ],
          "correct": 3,
          "level": 3,
          "steps": [
            "Het gevonden effect ligt tegengesteld aan H₁.",
            "Je mag de tweezijdige p niet zonder controle van de richting halveren om een stijging te claimen.",
            "Omdat het waargenomen teken tegen de vooraf gekozen richting in gaat, is de rechtszijdige p hier 1 − 0,02/2 = 0,99. Dat levert geen bewijs voor β > 0."
          ],
          "explanation": "Het gevonden effect ligt tegengesteld aan H₁. Je mag de tweezijdige p niet zonder controle van de richting halveren om een stijging te claimen. Omdat het waargenomen teken tegen de vooraf gekozen richting in gaat, is de rechtszijdige p hier 1 − 0,02/2 = 0,99. Dat levert geen bewijs voor β > 0.",
          "pattern": "Herken: H₁: β > 0, een negatieve geschatte helling en een tweezijdige p. → Betekenis: De gevonden richting is tegengesteld aan de gevraagde stijging. → Aanpak: Controleer eerst het teken; voor deze eenzijdige richting hoort 1 − p_tweezijdig/2 bij de p-waarde. → Gevraagd antwoord: Een toetsbeslissing over de gevraagde stijging, niet over een willekeurig verband.",
          "trap": "Een klein p-getal vertelt op zichzelf niet welke richting wordt ondersteund.",
          "optionExplanations": [
            "Geen bewijs voor een stijging is geen bewijs dat β exact nul is. De gevonden richting is zelfs negatief.",
            "Een kleine tweezijdige p geeft geen richting aan. Het teken van de coëfficiënt bepaalt welke richting door de data wordt ondersteund.",
            "Halveren naar 0,01 mag voor de gevraagde richting alleen als het teken met H₁ overeenkomt. De negatieve helling doet dat hier niet.",
            "Er is geen bewijs voor de gevraagde stijging. De eenzijdige p in die richting is 0,99 en dus groter dan 0,05."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 39–43 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5 en 8",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Vraag 21, PDF-pagina 14",
              "page": 14
            },
            {
              "source": "boek-h9b",
              "page": 4,
              "locator": "Boek p. 252; oorspronkelijke PDF p. 270; uitsnede p. 4"
            },
            {
              "source": "set-basis",
              "page": 3,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 5; uitsnede p. 3"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9b",
              "page": 7,
              "locator": "Boek p. 255; oorspronkelijke PDF p. 273; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "H₁: β > 0, een negatieve geschatte helling en een tweezijdige p.",
            "meaning": "De gevonden richting is tegengesteld aan de gevraagde stijging.",
            "approach": "Controleer eerst het teken; voor deze eenzijdige richting hoort 1 − p_tweezijdig/2 bij de p-waarde.",
            "answer": "Een toetsbeslissing over de gevraagde stijging, niet over een willekeurig verband."
          },
          "guidance": {
            "title": "Hypothese, toetsingsgrootheid en conclusie",
            "focus": "Controleer de gevonden richting vóór je een eenzijdige p afleidt. Een klein tweezijdig p-getal bewijst geen stijging als de helling negatief is.",
            "rules": [
              "De hypothese gaat over een populatieparameter zoals β of ρ. Een stijging hoort bij een positieve alternatieve richting, een daling bij een negatieve; een verband zonder richting is tweezijdig.",
              "Voor H₀: β = 0 gebruik je t = B/Std. Error. Vergelijk een tweezijdige p-waarde met α. Bij een eenzijdige conclusie moet ook het teken van het gevonden effect bij de gevraagde richting passen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 39-43: t- en F-toets"
              },
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 61-62: globale en individuele toets"
              },
              {
                "source": "attentie",
                "page": 4,
                "locator": "PDF p. 4-5: hypothesen en conclusies"
              }
            ]
          }
        },
        {
          "id": "mc-toetsen-toepassing-3",
          "prompt": "Een globale F-toets is significant bij een model met drie voorspellers. Twee individuele t-toetsen zijn niet significant. Is dit per definitie tegenstrijdig?",
          "options": [
            "Nee, de F-toets toetst de gezamenlijke nulhypothese",
            "Ja, een F-toets toetst normaliteit",
            "Nee, want t-toetsen gebruiken geen hypothesen",
            "Ja, alle drie moeten significant zijn"
          ],
          "correct": 0,
          "level": 3,
          "steps": [
            "F toetst of alle hellingscoëfficiënten gezamenlijk nul zijn.",
            "De individuele t-toetsen beoordelen afzonderlijke bijdragen gegeven de overige voorspellers.",
            "De F-toets stelt een gezamenlijke vraag over alle hellingen; individuele t-toetsen stellen ieder een andere vraag binnen hetzelfde meervoudige model."
          ],
          "explanation": "F toetst of alle hellingscoëfficiënten gezamenlijk nul zijn. De individuele t-toetsen beoordelen afzonderlijke bijdragen gegeven de overige voorspellers. De F-toets stelt een gezamenlijke vraag over alle hellingen; individuele t-toetsen stellen ieder een andere vraag binnen hetzelfde meervoudige model.",
          "pattern": "Herken: Een significante globale F en enkele niet-significante individuele t-toetsen. → Betekenis: F toetst alle hellingen gezamenlijk; t toetst één bijdrage gegeven de andere voorspellers. → Aanpak: Vergelijk de nulhypothesen voordat je de uitslagen tegenstrijdig noemt. → Gevraagd antwoord: Een uitleg waarom deze uitkomsten naast elkaar kunnen voorkomen.",
          "trap": "“Het model is significant” betekent niet “elke variabele is significant”.",
          "optionExplanations": [
            "Dit is juist: F beoordeelt de gezamenlijke nulhypothese, terwijl individuele t-toetsen één coëfficiënt gegeven de andere voorspellers toetsen.",
            "De globale regressie-F is geen normaliteitstoets. Normaliteit wordt met de diagnostische uitvoer beoordeeld.",
            "Ook t-toetsen gebruiken H₀ en H₁. Hun afzonderlijke nulhypothesen verschillen van de gezamenlijke F-nulhypothese.",
            "Een significante globale F vereist niet dat alle drie de afzonderlijke t-toetsen significant zijn. De nulhypothesen verschillen."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 39–43 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5 en 8",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Vraag 21, PDF-pagina 14",
              "page": 14
            },
            {
              "source": "boek-h9b",
              "page": 4,
              "locator": "Boek p. 252; oorspronkelijke PDF p. 270; uitsnede p. 4"
            },
            {
              "source": "set-basis",
              "page": 3,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 5; uitsnede p. 3"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9b",
              "page": 7,
              "locator": "Boek p. 255; oorspronkelijke PDF p. 273; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "Een significante globale F en enkele niet-significante individuele t-toetsen.",
            "meaning": "F toetst alle hellingen gezamenlijk; t toetst één bijdrage gegeven de andere voorspellers.",
            "approach": "Vergelijk de nulhypothesen voordat je de uitslagen tegenstrijdig noemt.",
            "answer": "Een uitleg waarom deze uitkomsten naast elkaar kunnen voorkomen."
          },
          "guidance": {
            "title": "Hypothese, toetsingsgrootheid en conclusie",
            "focus": "De globale F toetst gezamenlijk of alle hellingen nul zijn. Een individuele t-toets gaat over één bijdrage gegeven de overige voorspellers; de conclusies hoeven niet gelijk te zijn.",
            "rules": [
              "De hypothese gaat over een populatieparameter zoals β of ρ. Een stijging hoort bij een positieve alternatieve richting, een daling bij een negatieve; een verband zonder richting is tweezijdig.",
              "Voor H₀: β = 0 gebruik je t = B/Std. Error. Vergelijk een tweezijdige p-waarde met α. Bij een eenzijdige conclusie moet ook het teken van het gevonden effect bij de gevraagde richting passen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 39-43: t- en F-toets"
              },
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 61-62: globale en individuele toets"
              },
              {
                "source": "attentie",
                "page": 4,
                "locator": "PDF p. 4-5: hypothesen en conclusies"
              }
            ]
          }
        },
        {
          "id": "mc-toetsen-aanvulling-hellingse",
          "level": 3,
          "prompt": "Eigen oefenvraag. n = 12, r = 0,80, s_x = 2 en s_y = 5. Wat is s_b1 volgens formule 39?",
          "options": [
            "0,036",
            "Ongeveer 0,47434",
            "2,5",
            "2"
          ],
          "correct": 1,
          "optionExplanations": [
            "Dit is alleen (1 − r²)/(n − 2), zonder wortel en zonder de verhouding van spreidingen.",
            "(5/2) × √((1 − 0,80²)/10) ≈ 0,47434.",
            "Dit is alleen de verhouding s_y/s_x. De wortelfactor ontbreekt.",
            "Dit is de regressiehelling r × s_y/s_x, niet de onzekerheid van die helling."
          ],
          "steps": [
            "Vrijheidsgraden: 12 − 2 = 10.",
            "De wortelfactor is √(0,36/10).",
            "Vermenigvuldig met s_y/s_x = 5/2: s_b1 ≈ 0,47434. Dit is de onzekerheid van de geschatte helling, niet de helling zelf."
          ],
          "explanation": "Vrijheidsgraden: 12 − 2 = 10. De wortelfactor is √(0,36/10). Vermenigvuldig met s_y/s_x = 5/2: s_b1 ≈ 0,47434. Dit is de onzekerheid van de geschatte helling, niet de helling zelf.",
          "pattern": "Herken: n, r, s_x en s_y; gevraagd is s_b1 volgens formule 39. → Betekenis: De vraag betreft onzekerheid van de helling, niet de helling zelf. → Aanpak: Bereken (s_y/s_x) × √((1 − r²)/(n − 2)). → Gevraagd antwoord: Een standaardfout van b₁, in dezelfde eenheid als de helling.",
          "trap": "De geschatte helling b1 en haar standaardfout s_b1 zijn verschillende grootheden.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 39–43 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5 en 8",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Vraag 21, PDF-pagina 14",
              "page": 14
            },
            {
              "source": "boek-h9b",
              "page": 4,
              "locator": "Boek p. 252; oorspronkelijke PDF p. 270; uitsnede p. 4"
            },
            {
              "source": "set-basis",
              "page": 3,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 5; uitsnede p. 3"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9b",
              "page": 7,
              "locator": "Boek p. 255; oorspronkelijke PDF p. 273; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "n, r, s_x en s_y; gevraagd is s_b1 volgens formule 39.",
            "meaning": "De vraag betreft onzekerheid van de helling, niet de helling zelf.",
            "approach": "Bereken (s_y/s_x) × √((1 − r²)/(n − 2)).",
            "answer": "Een standaardfout van b₁, in dezelfde eenheid als de helling."
          },
          "guidance": {
            "title": "Hypothese, toetsingsgrootheid en conclusie",
            "focus": "Bij enkelvoudige regressie: s_b1 = (s_y/s_x) × √((1 − r²)/(n − 2)). Verwar deze standaardfout niet met s_y of de residuele spreiding.",
            "rules": [
              "De hypothese gaat over een populatieparameter zoals β of ρ. Een stijging hoort bij een positieve alternatieve richting, een daling bij een negatieve; een verband zonder richting is tweezijdig.",
              "Voor H₀: β = 0 gebruik je t = B/Std. Error. Vergelijk een tweezijdige p-waarde met α. Bij een eenzijdige conclusie moet ook het teken van het gevonden effect bij de gevraagde richting passen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 39-43: t- en F-toets"
              },
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 61-62: globale en individuele toets"
              },
              {
                "source": "attentie",
                "page": 4,
                "locator": "PDF p. 4-5: hypothesen en conclusies"
              }
            ]
          }
        },
        {
          "id": "mc-toetsen-aanvulling-correlatie",
          "level": 3,
          "prompt": "Eigen oefenvraag. Bij enkelvoudige regressie zijn n = 12 en r = −0,80. Welke t hoort bij H0: rho = 0?",
          "options": [
            "−0,80",
            "0,64",
            "Ongeveer −4,21637",
            "Ongeveer 4,21637"
          ],
          "correct": 2,
          "optionExplanations": [
            "Dit is de correlatie zelf. Een correlatie is nog niet de t-toetsingsgrootheid.",
            "Dit is r² en beschrijft verklaarde variatie, niet de toetsingsgrootheid.",
            "Het teken van r blijft staan: −0,80√10/√0,36 ≈ −4,21637.",
            "De absolute grootte klopt, maar de richting is omgedraaid door het minteken te verliezen."
          ],
          "steps": [
            "Voor de correlatietoets is df = n − 2 = 10.",
            "Vul r = −0,80 in, inclusief het teken.",
            "t = −0,80√10/√(1 − 0,64) ≈ −4,21637. Het negatieve teken blijft behouden en beschrijft de richting van het verband."
          ],
          "explanation": "Voor de correlatietoets is df = n − 2 = 10. Vul r = −0,80 in, inclusief het teken. t = −0,80√10/√(1 − 0,64) ≈ −4,21637. Het negatieve teken blijft behouden en beschrijft de richting van het verband.",
          "pattern": "Herken: Een negatieve Pearson-r, n en H₀: ρ = 0 bij enkelvoudige regressie. → Betekenis: De correlatie wordt omgezet naar een getekende t met n − 2 vrijheidsgraden. → Aanpak: Gebruik t = r√(n − 2)/√(1 − r²) en behoud het minteken van r. → Gevraagd antwoord: Een t-toetsingsgrootheid, geen R² of alleen absolute sterkte.",
          "trap": "Gebruik de gewone r van enkelvoudige regressie, niet de meervoudige Model Summary R.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 39–43 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5 en 8",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Vraag 21, PDF-pagina 14",
              "page": 14
            },
            {
              "source": "boek-h9b",
              "page": 4,
              "locator": "Boek p. 252; oorspronkelijke PDF p. 270; uitsnede p. 4"
            },
            {
              "source": "set-basis",
              "page": 3,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 5; uitsnede p. 3"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9b",
              "page": 7,
              "locator": "Boek p. 255; oorspronkelijke PDF p. 273; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "Een negatieve Pearson-r, n en H₀: ρ = 0 bij enkelvoudige regressie.",
            "meaning": "De correlatie wordt omgezet naar een getekende t met n − 2 vrijheidsgraden.",
            "approach": "Gebruik t = r√(n − 2)/√(1 − r²) en behoud het minteken van r.",
            "answer": "Een t-toetsingsgrootheid, geen R² of alleen absolute sterkte."
          },
          "guidance": {
            "title": "Hypothese, toetsingsgrootheid en conclusie",
            "focus": "Voor H₀: ρ = 0 bij enkelvoudige regressie geldt t = r√(n − 2)/√(1 − r²). Het teken van r blijft behouden.",
            "rules": [
              "De hypothese gaat over een populatieparameter zoals β of ρ. Een stijging hoort bij een positieve alternatieve richting, een daling bij een negatieve; een verband zonder richting is tweezijdig.",
              "Voor H₀: β = 0 gebruik je t = B/Std. Error. Vergelijk een tweezijdige p-waarde met α. Bij een eenzijdige conclusie moet ook het teken van het gevonden effect bij de gevraagde richting passen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 39-43: t- en F-toets"
              },
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 61-62: globale en individuele toets"
              },
              {
                "source": "attentie",
                "page": 4,
                "locator": "PDF p. 4-5: hypothesen en conclusies"
              }
            ]
          }
        },
        {
          "id": "mc-toetsen-aanvulling-interval",
          "level": 3,
          "prompt": "Eigen oefenvraag. b1 = 2, s_b1 = 0,5 en de gegeven tweezijdige kritieke t = 2. Wat volgt uit het bijpassende interval?",
          "options": [
            "Interval [1; 3]; H0 niet verwerpen",
            "Interval [1,5; 2,5]; H0 verwerpen",
            "Interval [0; 4]; alle hellingen zijn even waarschijnlijk",
            "Interval [1; 3]; H0: beta1 = 0 verwerpen"
          ],
          "correct": 3,
          "optionExplanations": [
            "Het interval is goed, maar het uitsluiten van nul betekent juist verwerpen op het passende niveau.",
            "Dit gebruikt alleen de standaardfout als marge en vergeet de kritieke t-waarde.",
            "Dit gebruikt een verkeerde marge en een betrouwbaarheidsinterval verdeelt geen gelijke kansen over parameters.",
            "2 ± 2 × 0,5 geeft [1; 3]. Nul ligt er buiten, dus de passende tweezijdige toets verwerpt H0."
          ],
          "steps": [
            "Marge = t × s_b1 = 2 × 0,5 = 1.",
            "Interval = [2 − 1; 2 + 1] = [1; 3].",
            "Nul ligt buiten het interval: verwerp H0 bij de bijpassende tweezijdige toets op hetzelfde significantieniveau."
          ],
          "explanation": "Marge = t × s_b1 = 2 × 0,5 = 1. Interval = [2 − 1; 2 + 1] = [1; 3]. Nul ligt buiten het interval: verwerp H0 bij de bijpassende tweezijdige toets op hetzelfde significantieniveau.",
          "pattern": "Herken: b₁, zijn standaardfout en een passende tweezijdige kritieke t. → Betekenis: Een coëfficiëntinterval kan aan de bijbehorende toets tegen nul worden gekoppeld. → Aanpak: Vorm b₁ ± t × s_b1 en controleer of nul binnen de grenzen ligt. → Gevraagd antwoord: Het interval plus de passende tweezijdige toetsbeslissing op hetzelfde niveau.",
          "trap": "Trek deze conclusie niet met een interval van een ander niveau.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 39–43 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 4–5 en 8",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Vraag 21, PDF-pagina 14",
              "page": 14
            },
            {
              "source": "boek-h9b",
              "page": 4,
              "locator": "Boek p. 252; oorspronkelijke PDF p. 270; uitsnede p. 4"
            },
            {
              "source": "set-basis",
              "page": 3,
              "locator": "SET-attentiepunten, oorspronkelijke PDF p. 5; uitsnede p. 3"
            },
            {
              "source": "opgaven",
              "page": 10,
              "locator": "H9 opgave 1, PDF 10"
            },
            {
              "source": "uitwerkingen",
              "page": 14,
              "locator": "H9 opgave 1, PDF 14–15"
            },
            {
              "source": "boek-h9b",
              "page": 7,
              "locator": "Boek p. 255; oorspronkelijke PDF p. 273; uitsnede p. 7"
            }
          ],
          "recognition": {
            "signals": "b₁, zijn standaardfout en een passende tweezijdige kritieke t.",
            "meaning": "Een coëfficiëntinterval kan aan de bijbehorende toets tegen nul worden gekoppeld.",
            "approach": "Vorm b₁ ± t × s_b1 en controleer of nul binnen de grenzen ligt.",
            "answer": "Het interval plus de passende tweezijdige toetsbeslissing op hetzelfde niveau."
          },
          "guidance": {
            "title": "Hypothese, toetsingsgrootheid en conclusie",
            "focus": "Het interval voor de populatiehelling is b₁ ± t × s_b1. Nul buiten het bijpassende tweezijdige interval betekent verwerping van H₀: β₁ = 0 op dat niveau.",
            "rules": [
              "De hypothese gaat over een populatieparameter zoals β of ρ. Een stijging hoort bij een positieve alternatieve richting, een daling bij een negatieve; een verband zonder richting is tweezijdig.",
              "Voor H₀: β = 0 gebruik je t = B/Std. Error. Vergelijk een tweezijdige p-waarde met α. Bij een eenzijdige conclusie moet ook het teken van het gevonden effect bij de gevraagde richting passen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 39-43: t- en F-toets"
              },
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 61-62: globale en individuele toets"
              },
              {
                "source": "attentie",
                "page": 4,
                "locator": "PDF p. 4-5: hypothesen en conclusies"
              },
              {
                "source": "boek-h9b",
                "page": 7,
                "locator": "Boek p. 255; oorspronkelijke PDF p. 273: interval van de helling"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "diagnostiek",
      "title": "Controleer of je het model kunt gebruiken",
      "phase": "Regressie",
      "lesson": "diagnostiek",
      "signal": "Een grafiek of tabel gaat over residuen, afwijkende x-waarden of invloed.",
      "approach": "Benoem het signaal, de aanname en de consequentie; geef een remedie als gevraagd.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formules 44–49, PDF-pagina 3",
          "page": 3
        },
        {
          "source": "attentie",
          "locator": "PDF-pagina 5–6",
          "page": 5
        },
        {
          "source": "exam2024",
          "locator": "Vraag 11–12, PDF-pagina 5",
          "page": 5
        },
        {
          "source": "boek-h9c",
          "page": 1,
          "locator": "Boek p. 260; oorspronkelijke PDF p. 278; uitsnede p. 1"
        },
        {
          "source": "boek-h9c",
          "page": 8,
          "locator": "Boek p. 267; oorspronkelijke PDF p. 285; uitsnede p. 8"
        },
        {
          "source": "boek-h9d",
          "page": 2,
          "locator": "Boek p. 274; oorspronkelijke PDF p. 292; uitsnede p. 2"
        },
        {
          "source": "boek-h9d",
          "page": 7,
          "locator": "Boek p. 279; oorspronkelijke PDF p. 297; uitsnede p. 7"
        },
        {
          "source": "boek-h9d",
          "page": 10,
          "locator": "Boek p. 282; oorspronkelijke PDF p. 300; uitsnede p. 10"
        }
      ],
      "questions": [
        {
          "id": "mc-diagnostiek-basis-1",
          "prompt": "n = 178. Wat zijn de cursusgrenzen voor gestandaardiseerde residuen?",
          "options": [
            "±3",
            "±1",
            "±2"
          ],
          "correct": 0,
          "explanation": "Het formuleblad gebruikt voor mogelijke y-uitbijters grenzen voor gestandaardiseerde residuen. Bij n ≤ 100 zijn de cursusgrenzen ±2; bij n > 100 zijn ze ±3. Omdat 178 > 100 gebruik je −3 en +3. Controleer zowel het minimum als het maximum van de residuen.",
          "steps": [
            "Het formuleblad gebruikt voor mogelijke y-uitbijters grenzen voor gestandaardiseerde residuen.",
            "Bij n ≤ 100 zijn de cursusgrenzen ±2; bij n > 100 zijn ze ±3.",
            "Omdat 178 > 100 gebruik je −3 en +3. Controleer zowel het minimum als het maximum van de residuen."
          ],
          "pattern": "Herken: n en “cursusgrenzen voor gestandaardiseerde residuen”. → Betekenis: Je zoekt de cursusregel voor opvallende residuen, afhankelijk van de omvangscategorie. → Aanpak: Vergelijk n met 100: de cursus gebruikt ±2 bij n ≤ 100 en ±3 bij n > 100. → Gevraagd antwoord: Twee residugrenzen, geen Cook-grens of toets op normaliteit.",
          "trap": "De grens signaleert een mogelijk afwijkende waarneming; zij is geen automatische verwijderregel.",
          "optionExplanations": [
            "±3 is de behandelde grens voor n > 100. Zowel grote negatieve als grote positieve residuen verdienen aandacht.",
            "±1 is niet de cursusgrens voor deze uitbijtercontrole.",
            "±2 hoort volgens het formuleblad bij n ≤ 100. Hier is n = 178, dus geldt de andere cursusgrens."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 44–49, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 5–6",
              "page": 5
            },
            {
              "source": "exam2024",
              "locator": "Vraag 11–12, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9c",
              "page": 1,
              "locator": "Boek p. 260; oorspronkelijke PDF p. 278; uitsnede p. 1"
            },
            {
              "source": "boek-h9c",
              "page": 8,
              "locator": "Boek p. 267; oorspronkelijke PDF p. 285; uitsnede p. 8"
            },
            {
              "source": "boek-h9d",
              "page": 2,
              "locator": "Boek p. 274; oorspronkelijke PDF p. 292; uitsnede p. 2"
            },
            {
              "source": "boek-h9d",
              "page": 7,
              "locator": "Boek p. 279; oorspronkelijke PDF p. 297; uitsnede p. 7"
            },
            {
              "source": "boek-h9d",
              "page": 10,
              "locator": "Boek p. 282; oorspronkelijke PDF p. 300; uitsnede p. 10"
            }
          ],
          "recognition": {
            "signals": "n en “cursusgrenzen voor gestandaardiseerde residuen”.",
            "meaning": "Je zoekt de cursusregel voor opvallende residuen, afhankelijk van de omvangscategorie.",
            "approach": "Vergelijk n met 100: de cursus gebruikt ±2 bij n ≤ 100 en ±3 bij n > 100.",
            "answer": "Twee residugrenzen, geen Cook-grens of toets op normaliteit."
          },
          "level": 1,
          "guidance": {
            "title": "Diagnose onderbouwen met de juiste uitvoer",
            "focus": "De SRA-grenzen voor gestandaardiseerde residuen zijn ±2 bij n ≤ 100 en ±3 bij n > 100. Overschrijding duidt op een mogelijke uitbijter, niet meteen op een verwijderbesluit.",
            "rules": [
              "Benoem eerst welke aanname of welk soort afwijking wordt onderzocht. Gestandaardiseerde residuen betreffen uitbijters in y, Mahalanobis Distance uitbijters in x en Cook’s Distance de mogelijke invloed op het model.",
              "Een opvallende waarde is aanleiding tot onderzoek. Koppel de uitvoer aan een conclusie en een onderbouwde remedie; verwijder een geldige waarneming niet uitsluitend om het model mooier te maken."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 44-49: regressiediagnostiek"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: analyses, oorzaken en remedies"
              }
            ]
          }
        },
        {
          "id": "mc-diagnostiek-basis-2",
          "prompt": "Welke grootheid hoort bij invloedrijke punten?",
          "options": [
            "De constante",
            "Cook’s Distance",
            "R²"
          ],
          "correct": 1,
          "explanation": "Een invloedrijk punt kan de geschatte regressie sterk veranderen. Cook’s Distance is in de cursus de maat voor die mogelijke invloed; Mahalanobis Distance heeft betrekking op afwijkende x-waarden. Een hoge Cook’s Distance vraagt om onderzoek van de waarneming en de invloed, niet om automatisch verwijderen.",
          "steps": [
            "Een invloedrijk punt kan de geschatte regressie sterk veranderen.",
            "Cook’s Distance is in de cursus de maat voor die mogelijke invloed; Mahalanobis Distance heeft betrekking op afwijkende x-waarden.",
            "Een hoge Cook’s Distance vraagt om onderzoek van de waarneming en de invloed, niet om automatisch verwijderen."
          ],
          "pattern": "Herken: Het woord “invloedrijke” bij waarnemingen. → Betekenis: Invloed gaat over hoeveel een punt de geschatte regressie verandert. → Aanpak: Koppel dit aan Cook’s Distance; een groot residu en een extreme x zijn afzonderlijke kenmerken. → Gevraagd antwoord: De diagnostische maat voor invloed op het model.",
          "trap": "Een uitbijter, een invloedrijk punt en een hoge R² zijn verschillende begrippen.",
          "optionExplanations": [
            "De constante is de voorspelde y als alle verklarende variabelen nul zijn. Zij is geen diagnostische maat voor invloed.",
            "Cook’s Distance beoordeelt de mogelijke invloed van een afzonderlijke waarneming op de regressieschatting.",
            "R² beschrijft verklaarde variatie voor het model als geheel. Het identificeert geen individuele invloedrijke punten."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 44–49, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 5–6",
              "page": 5
            },
            {
              "source": "exam2024",
              "locator": "Vraag 11–12, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9c",
              "page": 1,
              "locator": "Boek p. 260; oorspronkelijke PDF p. 278; uitsnede p. 1"
            },
            {
              "source": "boek-h9c",
              "page": 8,
              "locator": "Boek p. 267; oorspronkelijke PDF p. 285; uitsnede p. 8"
            },
            {
              "source": "boek-h9d",
              "page": 2,
              "locator": "Boek p. 274; oorspronkelijke PDF p. 292; uitsnede p. 2"
            },
            {
              "source": "boek-h9d",
              "page": 7,
              "locator": "Boek p. 279; oorspronkelijke PDF p. 297; uitsnede p. 7"
            },
            {
              "source": "boek-h9d",
              "page": 10,
              "locator": "Boek p. 282; oorspronkelijke PDF p. 300; uitsnede p. 10"
            }
          ],
          "recognition": {
            "signals": "Het woord “invloedrijke” bij waarnemingen.",
            "meaning": "Invloed gaat over hoeveel een punt de geschatte regressie verandert.",
            "approach": "Koppel dit aan Cook’s Distance; een groot residu en een extreme x zijn afzonderlijke kenmerken.",
            "answer": "De diagnostische maat voor invloed op het model."
          },
          "level": 1,
          "guidance": {
            "title": "Diagnose onderbouwen met de juiste uitvoer",
            "focus": "Cook’s Distance signaleert potentiële invloed. Onderzoek daarna de positie in het spreidingsdiagram en de casusoorzaak. Een grote waarde alleen rechtvaardigt geen automatische verwijdering.",
            "rules": [
              "Benoem eerst welke aanname of welk soort afwijking wordt onderzocht. Gestandaardiseerde residuen betreffen uitbijters in y, Mahalanobis Distance uitbijters in x en Cook’s Distance de mogelijke invloed op het model.",
              "Een opvallende waarde is aanleiding tot onderzoek. Koppel de uitvoer aan een conclusie en een onderbouwde remedie; verwijder een geldige waarneming niet uitsluitend om het model mooier te maken."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 44-49: regressiediagnostiek"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: analyses, oorzaken en remedies"
              }
            ]
          }
        },
        {
          "id": "mc-diagnostiek-basis-3",
          "prompt": "Shapiro-Wilk p = 0,01 bij α = 0,05. Conclusie?",
          "options": [
            "Geen uitspraak mogelijk",
            "Normaliteit bewezen",
            "H₀ verwerpen: aanwijzing voor niet-normale residuen"
          ],
          "correct": 2,
          "explanation": "Bij de Shapiro-Wilk-toets luidt H₀ hier dat de residuen normaal verdeeld zijn. De p-waarde 0,01 is kleiner dan α = 0,05, dus verwerp H₀. Formuleer het resultaat als een aanwijzing voor niet-normale residuen. Onderzoek vervolgens de data en het gekozen model.",
          "steps": [
            "Bij de Shapiro-Wilk-toets luidt H₀ hier dat de residuen normaal verdeeld zijn.",
            "De p-waarde 0,01 is kleiner dan α = 0,05, dus verwerp H₀.",
            "Formuleer het resultaat als een aanwijzing voor niet-normale residuen. Onderzoek vervolgens de data en het gekozen model."
          ],
          "pattern": "Herken: Shapiro-Wilk met p en α. → Betekenis: Dit is een toets op normaliteit van de residuen. → Aanpak: Vergelijk p met α en verbind de beslissing expliciet aan de normaliteitsaanname. → Gevraagd antwoord: Een toetsconclusie over residunormaliteit, niet over verbandsterkte of constante variantie.",
          "trap": "Noem de normaliteit van de residuen; de toets gaat hier niet zonder meer over de verdeling van y.",
          "optionExplanations": [
            "De gegevens bevatten p en α, dus je kunt wel een toetsbeslissing nemen. Niet iedere vervolgvraag over de oorzaak is daarmee beantwoord.",
            "Een kleine p ondersteunt geen bewijs voor normaliteit. Zij geeft juist aanleiding de nulhypothese van normale residuen te verwerpen.",
            "Dit koppelt de juiste nulhypothese aan 0,01 < 0,05 en geeft de juiste inhoudelijke conclusie."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 44–49, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 5–6",
              "page": 5
            },
            {
              "source": "exam2024",
              "locator": "Vraag 11–12, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9c",
              "page": 1,
              "locator": "Boek p. 260; oorspronkelijke PDF p. 278; uitsnede p. 1"
            },
            {
              "source": "boek-h9c",
              "page": 8,
              "locator": "Boek p. 267; oorspronkelijke PDF p. 285; uitsnede p. 8"
            },
            {
              "source": "boek-h9d",
              "page": 2,
              "locator": "Boek p. 274; oorspronkelijke PDF p. 292; uitsnede p. 2"
            },
            {
              "source": "boek-h9d",
              "page": 7,
              "locator": "Boek p. 279; oorspronkelijke PDF p. 297; uitsnede p. 7"
            },
            {
              "source": "boek-h9d",
              "page": 10,
              "locator": "Boek p. 282; oorspronkelijke PDF p. 300; uitsnede p. 10"
            }
          ],
          "recognition": {
            "signals": "Shapiro-Wilk met p en α.",
            "meaning": "Dit is een toets op normaliteit van de residuen.",
            "approach": "Vergelijk p met α en verbind de beslissing expliciet aan de normaliteitsaanname.",
            "answer": "Een toetsconclusie over residunormaliteit, niet over verbandsterkte of constante variantie."
          },
          "level": 2,
          "guidance": {
            "title": "Diagnose onderbouwen met de juiste uitvoer",
            "focus": "Bij normaliteit is H₀ dat de residuen normaal verdeeld zijn. Gebruik de gegeven toets; bij eigen keuze volgt SRA Shapiro-Wilk voor n ≤ 50 en Kolmogorov-Smirnov voor n > 50. Vergelijk p met de opgegeven α.",
            "rules": [
              "Benoem eerst welke aanname of welk soort afwijking wordt onderzocht. Gestandaardiseerde residuen betreffen uitbijters in y, Mahalanobis Distance uitbijters in x en Cook’s Distance de mogelijke invloed op het model.",
              "Een opvallende waarde is aanleiding tot onderzoek. Koppel de uitvoer aan een conclusie en een onderbouwde remedie; verwijder een geldige waarneming niet uitsluitend om het model mooier te maken."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 44-49: regressiediagnostiek"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: analyses, oorzaken en remedies"
              }
            ]
          }
        },
        {
          "id": "mc-diagnostiek-toepassing-1",
          "prompt": "Een residuplot toont bij hogere voorspelde waarden een steeds bredere wolk. Welk probleem wordt gesuggereerd?",
          "options": [
            "Een bewezen causale relatie",
            "Een exact lineair model",
            "Multicollineariteit",
            "Heteroscedasticiteit"
          ],
          "correct": 3,
          "level": 2,
          "steps": [
            "Een trechter betekent veranderende spreiding van de residuen.",
            "Dat is heteroscedasticiteit: niet-constante foutvariantie.",
            "De breedte van de residuwolk beschrijft de foutspreiding. Een toenemende breedte wijst op een variantie die met het voorspelde niveau verandert."
          ],
          "explanation": "Een trechter betekent veranderende spreiding van de residuen. Dat is heteroscedasticiteit: niet-constante foutvariantie. De breedte van de residuwolk beschrijft de foutspreiding. Een toenemende breedte wijst op een variantie die met het voorspelde niveau verandert.",
          "pattern": "Herken: De residuwolk wordt breder bij hogere voorspelde waarden. → Betekenis: De spreiding verandert langs het voorspelde niveau. → Aanpak: Koppel een trechtervorm aan mogelijke heteroscedasticiteit en controleer die aanname verder. → Gevraagd antwoord: Een aanwijzing voor niet-constante residuvariantie, geen automatisch bewijs van causaliteit.",
          "trap": "Multicollineariteit gaat over overlap tussen voorspellers.",
          "optionExplanations": [
            "Een residuplot bewijst geen causaal verband. Het beschreven patroon betreft een modelaanname.",
            "Bij een exact passend model zouden de residuen nul zijn. Een brede en veranderende wolk laat juist afwijkingen en veranderende spreiding zien.",
            "Multicollineariteit betreft onderlinge overlap tussen verklarende variabelen. Een trechter in residuen is een signaal over foutvariantie.",
            "Heteroscedasticiteit betekent niet-constante foutvariantie. De steeds bredere wolk is precies zo’n signaal."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 44–49, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 5–6",
              "page": 5
            },
            {
              "source": "exam2024",
              "locator": "Vraag 11–12, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9c",
              "page": 1,
              "locator": "Boek p. 260; oorspronkelijke PDF p. 278; uitsnede p. 1"
            },
            {
              "source": "boek-h9c",
              "page": 8,
              "locator": "Boek p. 267; oorspronkelijke PDF p. 285; uitsnede p. 8"
            },
            {
              "source": "boek-h9d",
              "page": 2,
              "locator": "Boek p. 274; oorspronkelijke PDF p. 292; uitsnede p. 2"
            },
            {
              "source": "boek-h9d",
              "page": 7,
              "locator": "Boek p. 279; oorspronkelijke PDF p. 297; uitsnede p. 7"
            },
            {
              "source": "boek-h9d",
              "page": 10,
              "locator": "Boek p. 282; oorspronkelijke PDF p. 300; uitsnede p. 10"
            }
          ],
          "recognition": {
            "signals": "De residuwolk wordt breder bij hogere voorspelde waarden.",
            "meaning": "De spreiding verandert langs het voorspelde niveau.",
            "approach": "Koppel een trechtervorm aan mogelijke heteroscedasticiteit en controleer die aanname verder.",
            "answer": "Een aanwijzing voor niet-constante residuvariantie, geen automatisch bewijs van causaliteit."
          },
          "guidance": {
            "title": "Diagnose onderbouwen met de juiste uitvoer",
            "focus": "Homoscedasticiteit betekent constante spreiding van residuen. Let op de breedte van de residuwolk over x of de voorspelde waarden, niet alleen op het gemiddelde residu.",
            "rules": [
              "Benoem eerst welke aanname of welk soort afwijking wordt onderzocht. Gestandaardiseerde residuen betreffen uitbijters in y, Mahalanobis Distance uitbijters in x en Cook’s Distance de mogelijke invloed op het model.",
              "Een opvallende waarde is aanleiding tot onderzoek. Koppel de uitvoer aan een conclusie en een onderbouwde remedie; verwijder een geldige waarneming niet uitsluitend om het model mooier te maken."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 44-49: regressiediagnostiek"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: analyses, oorzaken en remedies"
              }
            ]
          }
        },
        {
          "id": "mc-diagnostiek-aanvulling-uitbijter",
          "level": 2,
          "prompt": "Eigen oefenvraag. Een opvallende waarneming blijkt juist ingevoerd en hangt samen met een jaarlijks terugkerende sluitingsweek. Wat is een passende vervolgstap?",
          "options": [
            "Vervang de waarneming door de voorspelde waarde",
            "Concludeer direct dat sprake is van fraude",
            "Onderzoek een inhoudelijk onderbouwde dummy en controleer opnieuw",
            "Verwijder de waarneming om R² te verhogen"
          ],
          "correct": 2,
          "optionExplanations": [
            "Dit wist het te onderzoeken verschil en verandert geldige gegevens zonder grond.",
            "Een statistisch signaal met een mogelijke operationele verklaring bewijst geen fraude.",
            "Een terugkerende bijzondere omstandigheid kan met een passende indicator worden gemodelleerd; toets het aangepaste model opnieuw.",
            "Een geldige waarneming weglaten uitsluitend voor een betere fit heeft geen inhoudelijke rechtvaardiging."
          ],
          "steps": [
            "De invoer is gecontroleerd en de waarneming is geldig.",
            "De bijzondere omstandigheid keert jaarlijks terug.",
            "Onderzoek een dummy, schat opnieuw en controleer de residuen."
          ],
          "explanation": "De invoer is gecontroleerd en de waarneming is geldig. De bijzondere omstandigheid keert jaarlijks terug. Onderzoek een dummy, schat opnieuw en controleer de residuen.",
          "pattern": "Herken: De waarneming is juist ingevoerd en heeft een jaarlijks terugkerende verklaring. → Betekenis: De afwijking kan een structureel patroon weerspiegelen in plaats van een invoerfout. → Aanpak: Onderzoek of een dummy het terugkerende effect inhoudelijk kan weergeven en beoordeel daarna de diagnostiek opnieuw. → Gevraagd antwoord: Een onderbouwde modelbeoordeling; verander of verwijder de waarneming niet alleen om haar afwijking.",
          "trap": "Verwijder geen geldige waarneming uitsluitend om de fit te verbeteren.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 44–49, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 5–6",
              "page": 5
            },
            {
              "source": "exam2024",
              "locator": "Vraag 11–12, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9c",
              "page": 1,
              "locator": "Boek p. 260; oorspronkelijke PDF p. 278; uitsnede p. 1"
            },
            {
              "source": "boek-h9c",
              "page": 8,
              "locator": "Boek p. 267; oorspronkelijke PDF p. 285; uitsnede p. 8"
            },
            {
              "source": "boek-h9d",
              "page": 2,
              "locator": "Boek p. 274; oorspronkelijke PDF p. 292; uitsnede p. 2"
            },
            {
              "source": "boek-h9d",
              "page": 7,
              "locator": "Boek p. 279; oorspronkelijke PDF p. 297; uitsnede p. 7"
            },
            {
              "source": "boek-h9d",
              "page": 10,
              "locator": "Boek p. 282; oorspronkelijke PDF p. 300; uitsnede p. 10"
            }
          ],
          "recognition": {
            "signals": "De waarneming is juist ingevoerd en heeft een jaarlijks terugkerende verklaring.",
            "meaning": "De afwijking kan een structureel patroon weerspiegelen in plaats van een invoerfout.",
            "approach": "Onderzoek of een dummy het terugkerende effect inhoudelijk kan weergeven en beoordeel daarna de diagnostiek opnieuw.",
            "answer": "Een onderbouwde modelbeoordeling; verander of verwijder de waarneming niet alleen om haar afwijking."
          },
          "guidance": {
            "title": "Diagnose onderbouwen met de juiste uitvoer",
            "focus": "Onderscheid een invoerfout, een eenmalige bijzondere oorzaak en een terugkerende omstandigheid. Een terugkerende omstandigheid kan aanleiding zijn om het model inhoudelijk uit te breiden.",
            "rules": [
              "Benoem eerst welke aanname of welk soort afwijking wordt onderzocht. Gestandaardiseerde residuen betreffen uitbijters in y, Mahalanobis Distance uitbijters in x en Cook’s Distance de mogelijke invloed op het model.",
              "Een opvallende waarde is aanleiding tot onderzoek. Koppel de uitvoer aan een conclusie en een onderbouwde remedie; verwijder een geldige waarneming niet uitsluitend om het model mooier te maken."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 44-49: regressiediagnostiek"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: analyses, oorzaken en remedies"
              }
            ]
          }
        },
        {
          "id": "mc-diagnostiek-toepassing-2",
          "prompt": "Shapiro-Wilk heeft p = 0,40 bij α = 0,05. Welke formulering is het zorgvuldigst?",
          "options": [
            "Normaliteit wordt niet verworpen op basis van deze toets",
            "Het model verklaart 40% van de variatie",
            "Alle uitschieters zijn uitgesloten",
            "De residuen zijn bewezen normaal"
          ],
          "correct": 0,
          "level": 3,
          "steps": [
            "0,40 > 0,05: H₀ wordt niet verworpen.",
            "Dat levert geen bewijs dat de verdeling exact normaal is.",
            "De toets levert onvoldoende tegenbewijs tegen normaliteit op. Dat is een beperkte toetsconclusie en geen garantie dat alle modelaannames kloppen."
          ],
          "explanation": "0,40 > 0,05: H₀ wordt niet verworpen. Dat levert geen bewijs dat de verdeling exact normaal is. De toets levert onvoldoende tegenbewijs tegen normaliteit op. Dat is een beperkte toetsconclusie en geen garantie dat alle modelaannames kloppen.",
          "pattern": "Herken: Shapiro-Wilk en een p-waarde boven α; gevraagd is de zorgvuldigste formulering. → Betekenis: Onvoldoende bewijs tegen een aanname is geen bewijs dat de aanname waar is. → Aanpak: Formuleer de conclusie als niet verwerpen van normaliteit op het gekozen niveau. → Gevraagd antwoord: Een beperkte toetsconclusie zonder normaliteit als bewezen feit te presenteren.",
          "trap": "Normaliteit, uitschieters en verklaarde variatie zijn verschillende vragen.",
          "optionExplanations": [
            "0,40 > 0,05, dus H₀ wordt niet verworpen. Deze formulering blijft bij wat de toets ondersteunt.",
            "0,40 is een p-waarde en geen R². Zij geeft niet het percentage verklaarde variatie aan.",
            "Een normaliteitstoets sluit niet alle individuele uitschieters uit. Uitbijterdiagnostiek is een aparte beoordeling.",
            "H₀ niet verwerpen is niet hetzelfde als normaliteit bewijzen. De toets vond onvoldoende tegenbewijs bij dit α."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 44–49, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 5–6",
              "page": 5
            },
            {
              "source": "exam2024",
              "locator": "Vraag 11–12, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9c",
              "page": 1,
              "locator": "Boek p. 260; oorspronkelijke PDF p. 278; uitsnede p. 1"
            },
            {
              "source": "boek-h9c",
              "page": 8,
              "locator": "Boek p. 267; oorspronkelijke PDF p. 285; uitsnede p. 8"
            },
            {
              "source": "boek-h9d",
              "page": 2,
              "locator": "Boek p. 274; oorspronkelijke PDF p. 292; uitsnede p. 2"
            },
            {
              "source": "boek-h9d",
              "page": 7,
              "locator": "Boek p. 279; oorspronkelijke PDF p. 297; uitsnede p. 7"
            },
            {
              "source": "boek-h9d",
              "page": 10,
              "locator": "Boek p. 282; oorspronkelijke PDF p. 300; uitsnede p. 10"
            }
          ],
          "recognition": {
            "signals": "Shapiro-Wilk en een p-waarde boven α; gevraagd is de zorgvuldigste formulering.",
            "meaning": "Onvoldoende bewijs tegen een aanname is geen bewijs dat de aanname waar is.",
            "approach": "Formuleer de conclusie als niet verwerpen van normaliteit op het gekozen niveau.",
            "answer": "Een beperkte toetsconclusie zonder normaliteit als bewezen feit te presenteren."
          },
          "guidance": {
            "title": "Diagnose onderbouwen met de juiste uitvoer",
            "focus": "Bij normaliteit is H₀ dat de residuen normaal verdeeld zijn. Gebruik de gegeven toets; bij eigen keuze volgt SRA Shapiro-Wilk voor n ≤ 50 en Kolmogorov-Smirnov voor n > 50. Vergelijk p met de opgegeven α.",
            "rules": [
              "Benoem eerst welke aanname of welk soort afwijking wordt onderzocht. Gestandaardiseerde residuen betreffen uitbijters in y, Mahalanobis Distance uitbijters in x en Cook’s Distance de mogelijke invloed op het model.",
              "Een opvallende waarde is aanleiding tot onderzoek. Koppel de uitvoer aan een conclusie en een onderbouwde remedie; verwijder een geldige waarneming niet uitsluitend om het model mooier te maken."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 44-49: regressiediagnostiek"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: analyses, oorzaken en remedies"
              }
            ]
          }
        },
        {
          "id": "mc-diagnostiek-toepassing-3",
          "prompt": "Een punt heeft een grote Cook’s Distance. Wat is de beste vervolgstap?",
          "options": [
            "Altijd verwijderen",
            "Onderzoeken of het punt klopt en hoeveel invloed het op de schatting heeft",
            "De waarde van y vervangen door het gemiddelde",
            "Concluderen dat de residuen normaal zijn"
          ],
          "correct": 1,
          "level": 3,
          "steps": [
            "Cook’s Distance signaleert mogelijke invloed op de geschatte regressie.",
            "Controleer de waarneming en beoordeel het model met inhoudelijke onderbouwing.",
            "Invloed kan ook bij een inhoudelijk geldige waarneming voorkomen. Onderzoek daarom zowel datakwaliteit als het effect op de regressieschatting."
          ],
          "explanation": "Cook’s Distance signaleert mogelijke invloed op de geschatte regressie. Controleer de waarneming en beoordeel het model met inhoudelijke onderbouwing. Invloed kan ook bij een inhoudelijk geldige waarneming voorkomen. Onderzoek daarom zowel datakwaliteit als het effect op de regressieschatting.",
          "pattern": "Herken: Een grote Cook’s Distance en de vraag naar een vervolgstap. → Betekenis: Het punt kan de regressieschatting sterk beïnvloeden, maar hoeft niet fout te zijn. → Aanpak: Onderzoek invoer, context en gevoeligheid van het model voordat je over uitsluiten beslist. → Gevraagd antwoord: Een gemotiveerde onderzoeksstap, geen automatische verwijdering.",
          "trap": "Verwijderen zonder inhoudelijke reden kan de analyse vertekenen.",
          "optionExplanations": [
            "Automatisch verwijderen is niet gerechtvaardigd door alleen een grote Cook’s Distance. Eerst moet de waarneming inhoudelijk worden onderzocht.",
            "Dit gebruikt Cook’s Distance als onderzoekssignaal: controleer de data en beoordeel hoe sterk het punt de regressie beïnvloedt.",
            "Vervangen door het gemiddelde verandert de waarneming zonder inhoudelijke onderbouwing en kan het model vertekenen.",
            "Cook’s Distance meet invloed, geen normaliteit. Voor normaliteit is andere diagnostische uitvoer nodig."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 44–49, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 5–6",
              "page": 5
            },
            {
              "source": "exam2024",
              "locator": "Vraag 11–12, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9c",
              "page": 1,
              "locator": "Boek p. 260; oorspronkelijke PDF p. 278; uitsnede p. 1"
            },
            {
              "source": "boek-h9c",
              "page": 8,
              "locator": "Boek p. 267; oorspronkelijke PDF p. 285; uitsnede p. 8"
            },
            {
              "source": "boek-h9d",
              "page": 2,
              "locator": "Boek p. 274; oorspronkelijke PDF p. 292; uitsnede p. 2"
            },
            {
              "source": "boek-h9d",
              "page": 7,
              "locator": "Boek p. 279; oorspronkelijke PDF p. 297; uitsnede p. 7"
            },
            {
              "source": "boek-h9d",
              "page": 10,
              "locator": "Boek p. 282; oorspronkelijke PDF p. 300; uitsnede p. 10"
            }
          ],
          "recognition": {
            "signals": "Een grote Cook’s Distance en de vraag naar een vervolgstap.",
            "meaning": "Het punt kan de regressieschatting sterk beïnvloeden, maar hoeft niet fout te zijn.",
            "approach": "Onderzoek invoer, context en gevoeligheid van het model voordat je over uitsluiten beslist.",
            "answer": "Een gemotiveerde onderzoeksstap, geen automatische verwijdering."
          },
          "guidance": {
            "title": "Diagnose onderbouwen met de juiste uitvoer",
            "focus": "Cook’s Distance signaleert potentiële invloed. Onderzoek daarna de positie in het spreidingsdiagram en de casusoorzaak. Een grote waarde alleen rechtvaardigt geen automatische verwijdering.",
            "rules": [
              "Benoem eerst welke aanname of welk soort afwijking wordt onderzocht. Gestandaardiseerde residuen betreffen uitbijters in y, Mahalanobis Distance uitbijters in x en Cook’s Distance de mogelijke invloed op het model.",
              "Een opvallende waarde is aanleiding tot onderzoek. Koppel de uitvoer aan een conclusie en een onderbouwde remedie; verwijder een geldige waarneming niet uitsluitend om het model mooier te maken."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 44-49: regressiediagnostiek"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: analyses, oorzaken en remedies"
              }
            ]
          }
        },
        {
          "id": "mc-diagnostiek-aanvulling-autocorrectie",
          "level": 3,
          "prompt": "Eigen oefenvraag. Een opnieuw geschat model is y-hat_t = 10 + 2x_t + 0,5e_(t−1). Bij x_t = 4 en vorig residu −2 is de voorspelling:",
          "options": [
            "19",
            "18",
            "Niet te bepalen zonder het huidige residu",
            "17"
          ],
          "correct": 3,
          "optionExplanations": [
            "Dit verliest het negatieve teken van het vorige residu en telt 1 op.",
            "Dit laat de autocorrelatiecorrectie met het vorige residu weg.",
            "Het model gebruikt het bekende vorige residu. Het huidige residu is niet nodig voor deze voorspelling.",
            "10 + 2 × 4 + 0,5 × (−2) = 18 − 1 = 17."
          ],
          "steps": [
            "De lineaire component is 10 + 2 × 4 = 18.",
            "De correctieterm is 0,5 × (−2) = −1.",
            "De voorspelling is 17; beoordeel daarna de residuen van het aangepaste model."
          ],
          "explanation": "De lineaire component is 10 + 2 × 4 = 18. De correctieterm is 0,5 × (−2) = −1. De voorspelling is 17; beoordeel daarna de residuen van het aangepaste model.",
          "pattern": "Herken: Een vergelijking met x_t én het vertraagde residu e_(t−1). → Betekenis: Het vorige residu is een bekende extra voorspeller in het opnieuw geschatte model. → Aanpak: Vul x_t en het vorige residu met hun tekens in alle termen van de vergelijking in. → Gevraagd antwoord: Een voorspelling voor tijdstip t, zonder een onbekend huidig residu te gebruiken.",
          "trap": "Verwar het bekende vorige residu niet met het nog onbekende huidige residu.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 44–49, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 5–6",
              "page": 5
            },
            {
              "source": "exam2024",
              "locator": "Vraag 11–12, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9c",
              "page": 1,
              "locator": "Boek p. 260; oorspronkelijke PDF p. 278; uitsnede p. 1"
            },
            {
              "source": "boek-h9c",
              "page": 8,
              "locator": "Boek p. 267; oorspronkelijke PDF p. 285; uitsnede p. 8"
            },
            {
              "source": "boek-h9d",
              "page": 2,
              "locator": "Boek p. 274; oorspronkelijke PDF p. 292; uitsnede p. 2"
            },
            {
              "source": "boek-h9d",
              "page": 7,
              "locator": "Boek p. 279; oorspronkelijke PDF p. 297; uitsnede p. 7"
            },
            {
              "source": "boek-h9d",
              "page": 10,
              "locator": "Boek p. 282; oorspronkelijke PDF p. 300; uitsnede p. 10"
            }
          ],
          "recognition": {
            "signals": "Een vergelijking met x_t én het vertraagde residu e_(t−1).",
            "meaning": "Het vorige residu is een bekende extra voorspeller in het opnieuw geschatte model.",
            "approach": "Vul x_t en het vorige residu met hun tekens in alle termen van de vergelijking in.",
            "answer": "Een voorspelling voor tijdstip t, zonder een onbekend huidig residu te gebruiken."
          },
          "guidance": {
            "title": "Diagnose onderbouwen met de juiste uitvoer",
            "focus": "Gebruik in de extra term het residu van de vorige periode met zijn eigen teken. Vul niet het huidige residu of de vorige voorspelling in.",
            "rules": [
              "Benoem eerst welke aanname of welk soort afwijking wordt onderzocht. Gestandaardiseerde residuen betreffen uitbijters in y, Mahalanobis Distance uitbijters in x en Cook’s Distance de mogelijke invloed op het model.",
              "Een opvallende waarde is aanleiding tot onderzoek. Koppel de uitvoer aan een conclusie en een onderbouwde remedie; verwijder een geldige waarneming niet uitsluitend om het model mooier te maken."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 44-49: regressiediagnostiek"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: analyses, oorzaken en remedies"
              },
              {
                "source": "boek-h9d",
                "page": 7,
                "locator": "Boek p. 279-283; oorspronkelijke PDF p. 297-301: autocorrelatie"
              }
            ]
          }
        },
        {
          "id": "mc-diagnostiek-aanvulling-dw",
          "level": 3,
          "prompt": "Eigen oefenvraag. Residuvolgorde: 1, 1, −1, −1. Wat is de Durbin-Watson-grootheid d?",
          "options": [
            "1",
            "0",
            "4",
            "2"
          ],
          "correct": 0,
          "optionExplanations": [
            "Teller 0² + (−2)² + 0² = 4; noemer 1² + 1² + (−1)² + (−1)² = 4. Dus d = 1.",
            "Alleen de som van de residuen is nul. De Durbin-Watson-formule gebruikt gekwadrateerde verschillen.",
            "4 is de teller. Je moet nog delen door de som van alle gekwadrateerde residuen.",
            "Dit is geen uitkomst van de gegeven residuen; d moet uit hun opeenvolgende verschillen worden berekend."
          ],
          "steps": [
            "Opeenvolgende verschillen zijn 0, −2 en 0.",
            "De som van de gekwadrateerde verschillen is 4.",
            "De som van alle gekwadrateerde residuen is 4: d = 4/4 = 1. Voor een toetsbeslissing heb je vervolgens de passende tabelgrenzen nodig."
          ],
          "explanation": "Opeenvolgende verschillen zijn 0, −2 en 0. De som van de gekwadrateerde verschillen is 4. De som van alle gekwadrateerde residuen is 4: d = 4/4 = 1. Voor een toetsbeslissing heb je vervolgens de passende tabelgrenzen nodig.",
          "pattern": "Herken: Een geordende reeks residuen en de naam Durbin-Watson. → Betekenis: d vergelijkt opeenvolgende verschillen met de totale residugrootte. → Aanpak: Behoud de tijdsvolgorde; deel Σ(e_t − e_(t−1))² door Σe_t². → Gevraagd antwoord: De d-grootheid; een toetsbeslissing vraagt daarnaast passende tabelgrenzen.",
          "trap": "Een berekende d alleen is nog geen toetsbeslissing zonder geschikte tabelgrenzen.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 44–49, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 5–6",
              "page": 5
            },
            {
              "source": "exam2024",
              "locator": "Vraag 11–12, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9c",
              "page": 1,
              "locator": "Boek p. 260; oorspronkelijke PDF p. 278; uitsnede p. 1"
            },
            {
              "source": "boek-h9c",
              "page": 8,
              "locator": "Boek p. 267; oorspronkelijke PDF p. 285; uitsnede p. 8"
            },
            {
              "source": "boek-h9d",
              "page": 2,
              "locator": "Boek p. 274; oorspronkelijke PDF p. 292; uitsnede p. 2"
            },
            {
              "source": "boek-h9d",
              "page": 7,
              "locator": "Boek p. 279; oorspronkelijke PDF p. 297; uitsnede p. 7"
            },
            {
              "source": "boek-h9d",
              "page": 10,
              "locator": "Boek p. 282; oorspronkelijke PDF p. 300; uitsnede p. 10"
            }
          ],
          "recognition": {
            "signals": "Een geordende reeks residuen en de naam Durbin-Watson.",
            "meaning": "d vergelijkt opeenvolgende verschillen met de totale residugrootte.",
            "approach": "Behoud de tijdsvolgorde; deel Σ(e_t − e_(t−1))² door Σe_t².",
            "answer": "De d-grootheid; een toetsbeslissing vraagt daarnaast passende tabelgrenzen."
          },
          "guidance": {
            "title": "Diagnose onderbouwen met de juiste uitvoer",
            "focus": "Durbin-Watson deelt Σ(e_t − e_(t−1))² door Σe_t². De teller begint bij het tweede residu; de noemer omvat alle residuen.",
            "rules": [
              "Benoem eerst welke aanname of welk soort afwijking wordt onderzocht. Gestandaardiseerde residuen betreffen uitbijters in y, Mahalanobis Distance uitbijters in x en Cook’s Distance de mogelijke invloed op het model.",
              "Een opvallende waarde is aanleiding tot onderzoek. Koppel de uitvoer aan een conclusie en een onderbouwde remedie; verwijder een geldige waarneming niet uitsluitend om het model mooier te maken."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 44-49: regressiediagnostiek"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: analyses, oorzaken en remedies"
              },
              {
                "source": "boek-h9d",
                "page": 7,
                "locator": "Boek p. 279-283; oorspronkelijke PDF p. 297-301: autocorrelatie"
              }
            ]
          }
        },
        {
          "id": "mc-diagnostiek-aanvulling-absres",
          "level": 3,
          "prompt": "Eigen oefenvraag. Voor n = 22 is r(x, |e|) = 0,50. De tweezijdige kritieke t is 2,086. Wat concludeer je met t ≈ 2,582?",
          "options": [
            "Het oorspronkelijke verband tussen y en x is causaal",
            "Een aanwijzing voor heteroscedasticiteit onderzoeken",
            "Homoscedasticiteit is bewezen",
            "Autocorrelatie is bewezen"
          ],
          "correct": 1,
          "optionExplanations": [
            "Deze diagnose gaat over spreiding van residuen en bewijst geen oorzakelijk verband.",
            "De correlatie tussen x en de absolute residuen is significant; onderzoek of de spreiding met x verandert.",
            "De significante correlatie wijst juist op samenhang tussen x en de omvang van de residuen.",
            "Deze toets gebruikt absolute residuen en x, niet de opeenvolgende samenhang in een tijdreeks."
          ],
          "steps": [
            "H0 luidt dat de populatiecorrelatie tussen x en de absolute residuen nul is.",
            "De berekende t = 2,582 is groter dan 2,086.",
            "Verwerp H0 en onderzoek een passende correctie op veranderende spreiding."
          ],
          "explanation": "H0 luidt dat de populatiecorrelatie tussen x en de absolute residuen nul is. De berekende t = 2,582 is groter dan 2,086. Verwerp H0 en onderzoek een passende correctie op veranderende spreiding.",
          "pattern": "Herken: r(x, |e|), een berekende t en een kritieke tweezijdige t. → Betekenis: Absolute residuen meten foutgrootte; samenhang met x wijst op veranderende spreiding. → Aanpak: Vergelijk |t| met de kritieke grens en koppel de beslissing aan constante variantie. → Gevraagd antwoord: Een aanwijzing over heteroscedasticiteit, niet over autocorrelatie of een causaal x-effect.",
          "trap": "Verwar heteroscedasticiteit niet met autocorrelatie of causaliteit.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 44–49, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 5–6",
              "page": 5
            },
            {
              "source": "exam2024",
              "locator": "Vraag 11–12, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9c",
              "page": 1,
              "locator": "Boek p. 260; oorspronkelijke PDF p. 278; uitsnede p. 1"
            },
            {
              "source": "boek-h9c",
              "page": 8,
              "locator": "Boek p. 267; oorspronkelijke PDF p. 285; uitsnede p. 8"
            },
            {
              "source": "boek-h9d",
              "page": 2,
              "locator": "Boek p. 274; oorspronkelijke PDF p. 292; uitsnede p. 2"
            },
            {
              "source": "boek-h9d",
              "page": 7,
              "locator": "Boek p. 279; oorspronkelijke PDF p. 297; uitsnede p. 7"
            },
            {
              "source": "boek-h9d",
              "page": 10,
              "locator": "Boek p. 282; oorspronkelijke PDF p. 300; uitsnede p. 10"
            }
          ],
          "recognition": {
            "signals": "r(x, |e|), een berekende t en een kritieke tweezijdige t.",
            "meaning": "Absolute residuen meten foutgrootte; samenhang met x wijst op veranderende spreiding.",
            "approach": "Vergelijk |t| met de kritieke grens en koppel de beslissing aan constante variantie.",
            "answer": "Een aanwijzing over heteroscedasticiteit, niet over autocorrelatie of een causaal x-effect."
          },
          "guidance": {
            "title": "Diagnose onderbouwen met de juiste uitvoer",
            "focus": "Een correlatietoets tussen x en de absolute residuen onderzoekt samenhang tussen x en de foutgrootte. Vergelijk de absolute t met de tweezijdige kritieke grens en concludeer over de spreiding.",
            "rules": [
              "Benoem eerst welke aanname of welk soort afwijking wordt onderzocht. Gestandaardiseerde residuen betreffen uitbijters in y, Mahalanobis Distance uitbijters in x en Cook’s Distance de mogelijke invloed op het model.",
              "Een opvallende waarde is aanleiding tot onderzoek. Koppel de uitvoer aan een conclusie en een onderbouwde remedie; verwijder een geldige waarneming niet uitsluitend om het model mooier te maken."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 44-49: regressiediagnostiek"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: analyses, oorzaken en remedies"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "voorspellen",
      "title": "Van regressielijn naar voorspellingsinterval",
      "phase": "Regressie",
      "lesson": "voorspellen",
      "signal": "Er wordt een nieuwe y of een interval bij een bepaalde x₀ gevraagd.",
      "approach": "Onderscheid de gemiddelde respons van één nieuwe waarneming en controleer het x-bereik.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formule 50, PDF-pagina 3",
          "page": 3
        },
        {
          "source": "attentie",
          "locator": "Voorspelling, PDF-pagina 6",
          "page": 6
        },
        {
          "source": "exam2024",
          "locator": "Vraag 13, PDF-pagina 5",
          "page": 5
        },
        {
          "source": "boek-h9d",
          "page": 11,
          "locator": "Boek p. 283; oorspronkelijke PDF p. 301; uitsnede p. 11"
        }
      ],
      "questions": [
        {
          "id": "mc-voorspellen-basis-1",
          "prompt": "Waar is het voorspellingsinterval het smalst?",
          "options": [
            "Zo ver mogelijk van x̄",
            "Bij x₀ = x̄",
            "Bij x₀ = 0, altijd"
          ],
          "correct": 1,
          "explanation": "De standaardfout van de voorspelling bevat een term met (x₀ − x̄)². Bij x₀ = x̄ is die term nul, de kleinst mogelijke waarde van een kwadraat. Bij hetzelfde model en dezelfde betrouwbaarheid is het interval daar dus het smalst.",
          "steps": [
            "De standaardfout van de voorspelling bevat een term met (x₀ − x̄)².",
            "Bij x₀ = x̄ is die term nul, de kleinst mogelijke waarde van een kwadraat.",
            "Bij hetzelfde model en dezelfde betrouwbaarheid is het interval daar dus het smalst."
          ],
          "pattern": "Herken: “Waar het smalst” bij een voorspellingsinterval. → Betekenis: De afstand tussen x₀ en het steekproefgemiddelde van x beïnvloedt de onzekerheid. → Aanpak: Zoek waar de term (x₀ − x̄)² minimaal is. → Gevraagd antwoord: Een plaats op de x-as, geen betrouwbaarheidspercentage.",
          "trap": "x = 0 is alleen het centrum als x̄ toevallig ook nul is.",
          "optionExplanations": [
            "Verder van x̄ wordt de afstandsterm groter en daarmee ook de onzekerheid en intervalbreedte.",
            "Bij x₀ = x̄ verdwijnt de afstandsterm. Daardoor is de intervalmarge binnen dit model minimaal.",
            "Nul heeft geen vaste bijzondere positie in de geobserveerde x-data. Alleen als x̄ = 0 valt dit samen met het smalste interval."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 50, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Voorspelling, PDF-pagina 6",
              "page": 6
            },
            {
              "source": "exam2024",
              "locator": "Vraag 13, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9d",
              "page": 11,
              "locator": "Boek p. 283; oorspronkelijke PDF p. 301; uitsnede p. 11"
            }
          ],
          "recognition": {
            "signals": "“Waar het smalst” bij een voorspellingsinterval.",
            "meaning": "De afstand tussen x₀ en het steekproefgemiddelde van x beïnvloedt de onzekerheid.",
            "approach": "Zoek waar de term (x₀ − x̄)² minimaal is.",
            "answer": "Een plaats op de x-as, geen betrouwbaarheidspercentage."
          },
          "level": 1,
          "guidance": {
            "title": "Voorspelling en voorspellingsinterval",
            "focus": "De afstandsterm (x₀ − x̄)² wordt groter naarmate de nieuwe x verder van het steekproefgemiddelde ligt. Houd bij vergelijken het model en de overige gegevens gelijk.",
            "rules": [
              "Bepaal of één nieuwe waarneming of het gemiddelde bij x₀ wordt gevraagd. Voor één waarneming bevat de marge de extra term 1 onder de wortel: t × s_e × √(1 + 1/n + (x₀ − x̄)²/((n − 1)s_x²)).",
              "Het interval is bij gelijk model het smalst rond x̄. Verder weg neemt de onzekerheid toe. Controleer bovendien of x₀ binnen het gebied ligt waarop het model is geschat."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formule 50: individuele voorspelling"
              },
              {
                "source": "attentie",
                "page": 6,
                "locator": "Voorspelling en nadere controle bij een afwijkende realisatie"
              }
            ]
          }
        },
        {
          "id": "mc-voorspellen-basis-2",
          "prompt": "Welk interval is doorgaans breder?",
          "options": [
            "Ze zijn altijd even breed",
            "Voor de gemiddelde respons",
            "Voor één nieuwe waarneming"
          ],
          "correct": 2,
          "explanation": "Een interval voor de gemiddelde respons beschrijft onzekerheid over de gemiddelde y bij een gegeven x₀. Eén nieuwe waarneming kan bovendien door individuele storing van dat gemiddelde afwijken. Het individuele voorspellingsinterval bevat daarom een extra 1 onder de wortel en is bij hetzelfde model doorgaans breder.",
          "steps": [
            "Een interval voor de gemiddelde respons beschrijft onzekerheid over de gemiddelde y bij een gegeven x₀.",
            "Eén nieuwe waarneming kan bovendien door individuele storing van dat gemiddelde afwijken.",
            "Het individuele voorspellingsinterval bevat daarom een extra 1 onder de wortel en is bij hetzelfde model doorgaans breder."
          ],
          "pattern": "Herken: Een vergelijking tussen een interval voor het gemiddelde en voor één nieuwe waarneming. → Betekenis: Een individueel interval bevat naast schattingsonzekerheid ook individuele residuspreiding. → Aanpak: Herken in de individuele formule de extra 1 onder de wortel bij gelijk model en niveau. → Gevraagd antwoord: Welk interval breder is en welke extra onzekerheid dat verklaart.",
          "trap": "Een interval voor een gemiddelde is te smal als de vraag één nieuwe waarneming betreft.",
          "optionExplanations": [
            "De formules verschillen door de extra storingsterm. Daardoor zijn hun breedten bij hetzelfde model niet in het algemeen gelijk.",
            "Het gemiddelde responsinterval bevat geen extra individuele storing. Het is daardoor doorgaans smaller dan het individuele interval.",
            "Het interval voor één nieuwe waarneming is breder, omdat naast schattingsonzekerheid ook nieuwe individuele afwijking meetelt."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 50, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Voorspelling, PDF-pagina 6",
              "page": 6
            },
            {
              "source": "exam2024",
              "locator": "Vraag 13, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9d",
              "page": 11,
              "locator": "Boek p. 283; oorspronkelijke PDF p. 301; uitsnede p. 11"
            }
          ],
          "recognition": {
            "signals": "Een vergelijking tussen een interval voor het gemiddelde en voor één nieuwe waarneming.",
            "meaning": "Een individueel interval bevat naast schattingsonzekerheid ook individuele residuspreiding.",
            "approach": "Herken in de individuele formule de extra 1 onder de wortel bij gelijk model en niveau.",
            "answer": "Welk interval breder is en welke extra onzekerheid dat verklaart."
          },
          "level": 1,
          "guidance": {
            "title": "Voorspelling en voorspellingsinterval",
            "focus": "Een interval voor één nieuwe waarneming omvat zowel onzekerheid in de geschatte lijn als individuele spreiding. Het interval voor het gemiddelde heeft die extra individuele spreiding niet.",
            "rules": [
              "Bepaal of één nieuwe waarneming of het gemiddelde bij x₀ wordt gevraagd. Voor één waarneming bevat de marge de extra term 1 onder de wortel: t × s_e × √(1 + 1/n + (x₀ − x̄)²/((n − 1)s_x²)).",
              "Het interval is bij gelijk model het smalst rond x̄. Verder weg neemt de onzekerheid toe. Controleer bovendien of x₀ binnen het gebied ligt waarop het model is geschat."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formule 50: individuele voorspelling"
              },
              {
                "source": "attentie",
                "page": 6,
                "locator": "Voorspelling en nadere controle bij een afwijkende realisatie"
              }
            ]
          }
        },
        {
          "id": "mc-voorspellen-basis-3",
          "prompt": "Een realisatie ligt buiten het interval. Wat volgt?",
          "options": [
            "Nader onderzoek is nodig",
            "De realisatie moet worden verwijderd",
            "Fraude staat vast"
          ],
          "correct": 0,
          "explanation": "Een voorspellingsinterval beschrijft het verwachte bereik onder het gekozen model en de aannames. Een realisatie buiten dat interval is een opvallende afwijking, maar vertelt niet waarom die optreedt. Onderzoek daarom de waarneming, de gegevens en de modelaannames voordat je een inhoudelijke oorzaak toeschrijft.",
          "steps": [
            "Een voorspellingsinterval beschrijft het verwachte bereik onder het gekozen model en de aannames.",
            "Een realisatie buiten dat interval is een opvallende afwijking, maar vertelt niet waarom die optreedt.",
            "Onderzoek daarom de waarneming, de gegevens en de modelaannames voordat je een inhoudelijke oorzaak toeschrijft."
          ],
          "pattern": "Herken: Een realisatie buiten het interval en de vraag wat daaruit volgt. → Betekenis: Het interval signaleert een modelmatige afwijking, geen oorzaak. → Aanpak: Scheid het statistische signaal van een bewijs van fout of fraude. → Gevraagd antwoord: Een aanleiding voor onderzoek, zonder een ongefundeerde oorzakelijke conclusie.",
          "trap": "Verwar een ongebruikelijke uitkomst niet met bewijs van fraude of een reden om data te verwijderen.",
          "optionExplanations": [
            "Nader onderzoek is de passende stap: de afwijking vraagt een verklaring die niet uit het interval alleen volgt.",
            "Automatisch verwijderen zou de informatie over de afwijking wegnemen. Eerst moet worden onderzocht of er een inhoudelijke reden voor correctie is.",
            "Het interval toetst geen intentie en bewijst geen fraude. Ook modelproblemen, fouten of toevallige afwijkingen kunnen een rol spelen."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 50, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Voorspelling, PDF-pagina 6",
              "page": 6
            },
            {
              "source": "exam2024",
              "locator": "Vraag 13, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9d",
              "page": 11,
              "locator": "Boek p. 283; oorspronkelijke PDF p. 301; uitsnede p. 11"
            }
          ],
          "recognition": {
            "signals": "Een realisatie buiten het interval en de vraag wat daaruit volgt.",
            "meaning": "Het interval signaleert een modelmatige afwijking, geen oorzaak.",
            "approach": "Scheid het statistische signaal van een bewijs van fout of fraude.",
            "answer": "Een aanleiding voor onderzoek, zonder een ongefundeerde oorzakelijke conclusie."
          },
          "level": 2,
          "guidance": {
            "title": "Voorspelling en voorspellingsinterval",
            "focus": "Een realisatie buiten het interval is een controlesignaal. Onderzoek gegevens, omstandigheden en modelaannamen voordat je een oorzaak concludeert.",
            "rules": [
              "Bepaal of één nieuwe waarneming of het gemiddelde bij x₀ wordt gevraagd. Voor één waarneming bevat de marge de extra term 1 onder de wortel: t × s_e × √(1 + 1/n + (x₀ − x̄)²/((n − 1)s_x²)).",
              "Het interval is bij gelijk model het smalst rond x̄. Verder weg neemt de onzekerheid toe. Controleer bovendien of x₀ binnen het gebied ligt waarop het model is geschat."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formule 50: individuele voorspelling"
              },
              {
                "source": "attentie",
                "page": 6,
                "locator": "Voorspelling en nadere controle bij een afwijkende realisatie"
              }
            ]
          }
        },
        {
          "id": "mc-voorspellen-toepassing-1",
          "prompt": "Een model is geschat voor leeftijden 20 tot 60. Voorspellen voor een 80-jarige is:",
          "options": [
            "Extrapolatie",
            "Stratificatie",
            "Een gegarandeerd nauwkeurige voorspelling",
            "Interpolatie"
          ],
          "correct": 0,
          "level": 2,
          "steps": [
            "80 ligt buiten het waargenomen bereik 20 tot 60.",
            "Dit heet extrapolatie; het verband hoeft buiten dat bereik niet hetzelfde te blijven.",
            "Extrapolatie gebruikt de geschatte lijn buiten het onderzochte gebied. De berekening is mogelijk, maar de geldigheid van hetzelfde verband is daar niet door de gegevens onderbouwd."
          ],
          "explanation": "80 ligt buiten het waargenomen bereik 20 tot 60. Dit heet extrapolatie; het verband hoeft buiten dat bereik niet hetzelfde te blijven. Extrapolatie gebruikt de geschatte lijn buiten het onderzochte gebied. De berekening is mogelijk, maar de geldigheid van hetzelfde verband is daar niet door de gegevens onderbouwd.",
          "pattern": "Herken: Een voorspelde leeftijd buiten de leeftijden waarop het model is geschat. → Betekenis: De voorspelling gebruikt een x buiten het waargenomen toepassingsgebied. → Aanpak: Vergelijk de nieuwe x met de laagste en hoogste trainings-x en herken extrapolatie. → Gevraagd antwoord: Een kwalificatie van de voorspelling met aandacht voor onzekere geldigheid buiten het bereik.",
          "trap": "De vergelijking kunnen invullen is niet hetzelfde als een verantwoorde voorspelling.",
          "optionExplanations": [
            "Extrapolatie is voorspellen buiten het waargenomen x-bereik; 80 is hoger dan de waargenomen maximumleeftijd 60.",
            "Stratificatie verdeelt een populatie in groepen. De beschreven stap is een voorspelling buiten het waargenomen bereik.",
            "Buiten het gegevensbereik bestaat geen garantie dat het geschatte verband hetzelfde blijft of de voorspelling nauwkeurig is.",
            "Interpolatie betreft een x₀ binnen het onderzochte bereik. 80 ligt niet tussen 20 en 60."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 50, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Voorspelling, PDF-pagina 6",
              "page": 6
            },
            {
              "source": "exam2024",
              "locator": "Vraag 13, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9d",
              "page": 11,
              "locator": "Boek p. 283; oorspronkelijke PDF p. 301; uitsnede p. 11"
            }
          ],
          "recognition": {
            "signals": "Een voorspelde leeftijd buiten de leeftijden waarop het model is geschat.",
            "meaning": "De voorspelling gebruikt een x buiten het waargenomen toepassingsgebied.",
            "approach": "Vergelijk de nieuwe x met de laagste en hoogste trainings-x en herken extrapolatie.",
            "answer": "Een kwalificatie van de voorspelling met aandacht voor onzekere geldigheid buiten het bereik."
          },
          "guidance": {
            "title": "Voorspelling en voorspellingsinterval",
            "focus": "Een voorspelling buiten het gebruikte x-bereik is extrapolatie. Dat de formule een getal oplevert, betekent niet dat het verband daar is onderbouwd.",
            "rules": [
              "Bepaal of één nieuwe waarneming of het gemiddelde bij x₀ wordt gevraagd. Voor één waarneming bevat de marge de extra term 1 onder de wortel: t × s_e × √(1 + 1/n + (x₀ − x̄)²/((n − 1)s_x²)).",
              "Het interval is bij gelijk model het smalst rond x̄. Verder weg neemt de onzekerheid toe. Controleer bovendien of x₀ binnen het gebied ligt waarop het model is geschat."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formule 50: individuele voorspelling"
              },
              {
                "source": "attentie",
                "page": 6,
                "locator": "Voorspelling en nadere controle bij een afwijkende realisatie"
              }
            ]
          }
        },
        {
          "id": "mc-voorspellen-aanvulling-controleperiode",
          "level": 2,
          "prompt": "Eigen oefenvraag. Een model is geschat op 24 basismaanden. Een nieuwe controlemaand ligt buiten het voorspellingsinterval. Wat is passend?",
          "options": [
            "Bewijs van een boekingsfout vaststellen",
            "De maand direct opnemen om het interval passend te maken",
            "De realisatie vervangen door de voorspelling",
            "Onderzoek de oorzaak met het vastgelegde basismodel"
          ],
          "correct": 3,
          "optionExplanations": [
            "Een statistische afwijking alleen bewijst niet dat een boeking fout is.",
            "Daarmee gebruik je de te beoordelen waarneming om het beoordelingsmodel aan te passen.",
            "Een modelvoorspelling vervangt niet zonder grond de werkelijke waarneming.",
            "Een afwijkende controlewaarneming is een onderzoekssignaal; beoordeel brongegevens en eventuele procesverandering."
          ],
          "steps": [
            "De basisperiode leverde het model en de schattingen.",
            "De nieuwe waarneming behoort tot de controleperiode.",
            "Onderzoek de afwijking; motiveer een eventuele herziening van model of basisperiode."
          ],
          "explanation": "De basisperiode leverde het model en de schattingen. De nieuwe waarneming behoort tot de controleperiode. Onderzoek de afwijking; motiveer een eventuele herziening van model of basisperiode.",
          "pattern": "Herken: Een model uit basismaanden en een nieuwe controlemaand buiten het interval. → Betekenis: De nieuwe maand wordt beoordeeld met een vooraf geschat basismodel. → Aanpak: Onderzoek de afwijking en haar context zonder de controlemaand stilzwijgend als training te gebruiken. → Gevraagd antwoord: Een passende onderzoeksstap; geen automatisch foutbewijs of vervanging door de voorspelling.",
          "trap": "Een afwijking van een model is een signaal en geen bewezen administratieve fout.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 50, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Voorspelling, PDF-pagina 6",
              "page": 6
            },
            {
              "source": "exam2024",
              "locator": "Vraag 13, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9d",
              "page": 11,
              "locator": "Boek p. 283; oorspronkelijke PDF p. 301; uitsnede p. 11"
            }
          ],
          "recognition": {
            "signals": "Een model uit basismaanden en een nieuwe controlemaand buiten het interval.",
            "meaning": "De nieuwe maand wordt beoordeeld met een vooraf geschat basismodel.",
            "approach": "Onderzoek de afwijking en haar context zonder de controlemaand stilzwijgend als training te gebruiken.",
            "answer": "Een passende onderzoeksstap; geen automatisch foutbewijs of vervanging door de voorspelling."
          },
          "guidance": {
            "title": "Voorspelling en voorspellingsinterval",
            "focus": "Een realisatie buiten het interval is een controlesignaal. Onderzoek gegevens, omstandigheden en modelaannamen voordat je een oorzaak concludeert.",
            "rules": [
              "Bepaal of één nieuwe waarneming of het gemiddelde bij x₀ wordt gevraagd. Voor één waarneming bevat de marge de extra term 1 onder de wortel: t × s_e × √(1 + 1/n + (x₀ − x̄)²/((n − 1)s_x²)).",
              "Het interval is bij gelijk model het smalst rond x̄. Verder weg neemt de onzekerheid toe. Controleer bovendien of x₀ binnen het gebied ligt waarop het model is geschat."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formule 50: individuele voorspelling"
              },
              {
                "source": "attentie",
                "page": 6,
                "locator": "Voorspelling en nadere controle bij een afwijkende realisatie"
              }
            ]
          }
        },
        {
          "id": "mc-voorspellen-toepassing-2",
          "prompt": "Voor één nieuwe waarneming bij x₀ = x̄: ŷ = 50, n = 25, s_e = 5 en t = 2. Gebruik ŷ ± t s_e √(1 + 1/n). Welk interval volgt ongeveer?",
          "options": [
            "[40; 60]",
            "[39,80; 60,20]",
            "[45; 55]",
            "[48; 52]"
          ],
          "correct": 1,
          "level": 3,
          "steps": [
            "√(1 + 1/25) = √1,04.",
            "De marge is 2 × 5 × √1,04 ≈ 10,198.",
            "Dus ongeveer [39,80; 60,20].",
            "Zelfs bij x₀ = x̄ blijft individuele storing bestaan. Daarom verdwijnt alleen de afstandsterm, niet de extra 1 voor een nieuwe waarneming."
          ],
          "explanation": "√(1 + 1/25) = √1,04. De marge is 2 × 5 × √1,04 ≈ 10,198. Dus ongeveer [39,80; 60,20]. Zelfs bij x₀ = x̄ blijft individuele storing bestaan. Daarom verdwijnt alleen de afstandsterm, niet de extra 1 voor een nieuwe waarneming.",
          "pattern": "Herken: “Eén nieuwe waarneming”, x₀ = x̄ en de formule met 1 + 1/n. → Betekenis: Dit is een individueel voorspellingsinterval in het centrum van de data. → Aanpak: Gebruik de extra 1 voor individuele spreiding en bereken ŷ ± t s_e√(1 + 1/n). → Gevraagd antwoord: Twee grenzen voor één toekomstige waarneming, niet voor het groepsgemiddelde.",
          "trap": "Die 1 weglaten geeft het veel smallere interval voor de gemiddelde respons.",
          "optionExplanations": [
            "De marge 10 gebruikt 2 × 5, maar laat de factor √1,04 weg. Met de gegeven formule is de marge ongeveer 10,20.",
            "50 ± 2 × 5 × √1,04 geeft ongeveer [39,80; 60,20], met zowel individuele storing als schattingsonzekerheid.",
            "De marge 5 is alleen s_e. De kritieke factor t en de extra onzekerheidsfactor zijn niet verwerkt.",
            "De marge 2 volgt uit 2 × 5/√25. Dat is hier het interval voor de gemiddelde respons en mist de nieuwe individuele storing."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 50, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Voorspelling, PDF-pagina 6",
              "page": 6
            },
            {
              "source": "exam2024",
              "locator": "Vraag 13, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9d",
              "page": 11,
              "locator": "Boek p. 283; oorspronkelijke PDF p. 301; uitsnede p. 11"
            }
          ],
          "recognition": {
            "signals": "“Eén nieuwe waarneming”, x₀ = x̄ en de formule met 1 + 1/n.",
            "meaning": "Dit is een individueel voorspellingsinterval in het centrum van de data.",
            "approach": "Gebruik de extra 1 voor individuele spreiding en bereken ŷ ± t s_e√(1 + 1/n).",
            "answer": "Twee grenzen voor één toekomstige waarneming, niet voor het groepsgemiddelde."
          },
          "guidance": {
            "title": "Voorspelling en voorspellingsinterval",
            "focus": "Bij x₀ = x̄ vervalt alleen de afstandsterm. Voor één nieuwe waarneming blijven 1 en 1/n onder de wortel staan.",
            "rules": [
              "Bepaal of één nieuwe waarneming of het gemiddelde bij x₀ wordt gevraagd. Voor één waarneming bevat de marge de extra term 1 onder de wortel: t × s_e × √(1 + 1/n + (x₀ − x̄)²/((n − 1)s_x²)).",
              "Het interval is bij gelijk model het smalst rond x̄. Verder weg neemt de onzekerheid toe. Controleer bovendien of x₀ binnen het gebied ligt waarop het model is geschat."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formule 50: individuele voorspelling"
              },
              {
                "source": "attentie",
                "page": 6,
                "locator": "Voorspelling en nadere controle bij een afwijkende realisatie"
              }
            ]
          }
        },
        {
          "id": "mc-voorspellen-toepassing-3",
          "prompt": "Bij hetzelfde model verschuift x₀ van x̄ naar een veel verder gelegen waarde. Alle andere gegevens blijven gelijk. Wat gebeurt doorgaans met het voorspellingsinterval?",
          "options": [
            "De betrouwbaarheid wordt vanzelf 100%",
            "Het wordt smaller",
            "Het wordt breder",
            "Het houdt altijd dezelfde breedte"
          ],
          "correct": 2,
          "level": 3,
          "steps": [
            "De term (x₀ − x̄)² wordt groter.",
            "Die extra term vergroot de standaardfout van de voorspelling.",
            "Bij gelijkblijvende modelgegevens vergroot verder van x̄ voorspellen de standaardfout. De gekozen betrouwbaarheid verandert daarmee niet vanzelf."
          ],
          "explanation": "De term (x₀ − x̄)² wordt groter. Die extra term vergroot de standaardfout van de voorspelling. Bij gelijkblijvende modelgegevens vergroot verder van x̄ voorspellen de standaardfout. De gekozen betrouwbaarheid verandert daarmee niet vanzelf.",
          "pattern": "Herken: x₀ verschuift weg van x̄ terwijl alle overige modelgegevens gelijk blijven. → Betekenis: Alleen de afstandsterm in de voorspellingsonzekerheid neemt toe. → Aanpak: Volg de term (x₀ − x̄)² in de intervalformule om het effect op de marge te bepalen. → Gevraagd antwoord: De richting van de verandering in intervalbreedte, niet een nieuw betrouwbaarheidsniveau.",
          "trap": "Een puntschatting buiten het centrum kan wel berekenbaar zijn, maar is onzekerder.",
          "optionExplanations": [
            "Betrouwbaarheid is een gekozen niveau. Verder van het centrum voorspellen maakt die niet automatisch 100%.",
            "Verder van x̄ wordt de gekwadrateerde afstand juist groter. Dat vergroot de intervalmarge.",
            "Het interval wordt breder doordat (x₀ − x̄)² toeneemt en de standaardfout van de voorspelling vergroot.",
            "De intervalbreedte hangt in de gegeven formule af van x₀. Alleen dezelfde overige modelgegevens houden de breedte niet constant."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 50, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Voorspelling, PDF-pagina 6",
              "page": 6
            },
            {
              "source": "exam2024",
              "locator": "Vraag 13, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "boek-h9d",
              "page": 11,
              "locator": "Boek p. 283; oorspronkelijke PDF p. 301; uitsnede p. 11"
            }
          ],
          "recognition": {
            "signals": "x₀ verschuift weg van x̄ terwijl alle overige modelgegevens gelijk blijven.",
            "meaning": "Alleen de afstandsterm in de voorspellingsonzekerheid neemt toe.",
            "approach": "Volg de term (x₀ − x̄)² in de intervalformule om het effect op de marge te bepalen.",
            "answer": "De richting van de verandering in intervalbreedte, niet een nieuw betrouwbaarheidsniveau."
          },
          "guidance": {
            "title": "Voorspelling en voorspellingsinterval",
            "focus": "De afstandsterm (x₀ − x̄)² wordt groter naarmate de nieuwe x verder van het steekproefgemiddelde ligt. Houd bij vergelijken het model en de overige gegevens gelijk.",
            "rules": [
              "Bepaal of één nieuwe waarneming of het gemiddelde bij x₀ wordt gevraagd. Voor één waarneming bevat de marge de extra term 1 onder de wortel: t × s_e × √(1 + 1/n + (x₀ − x̄)²/((n − 1)s_x²)).",
              "Het interval is bij gelijk model het smalst rond x̄. Verder weg neemt de onzekerheid toe. Controleer bovendien of x₀ binnen het gebied ligt waarop het model is geschat."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formule 50: individuele voorspelling"
              },
              {
                "source": "attentie",
                "page": 6,
                "locator": "Voorspelling en nadere controle bij een afwijkende realisatie"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "meervoudig",
      "title": "Meervoudige regressie en dummyvariabelen",
      "phase": "Verdieping",
      "lesson": "meervoudig",
      "signal": "De vergelijking bevat meerdere verklarende variabelen of dummy’s.",
      "approach": "Vul alle variabelen in en interpreteer een coëfficiënt bij gelijkblijvende overige variabelen.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formules 51–54 en 61–62, PDF-pagina 3–4",
          "page": 3
        },
        {
          "source": "attentie",
          "locator": "PDF-pagina 7–8",
          "page": 7
        },
        {
          "source": "exam2025",
          "locator": "Vraag 19–20, PDF-pagina 9 en 14",
          "page": 14
        },
        {
          "source": "boek-h10a",
          "page": 4,
          "locator": "Boek p. 290; oorspronkelijke PDF p. 308; uitsnede p. 4"
        },
        {
          "source": "boek-h10c",
          "page": 5,
          "locator": "Boek p. 318; oorspronkelijke PDF p. 336; uitsnede p. 5"
        }
      ],
      "questions": [
        {
          "id": "mc-meervoudig-basis-2",
          "prompt": "Vier verklarende variabelen plus constante: wat is k?",
          "options": [
            "3",
            "5",
            "4"
          ],
          "correct": 2,
          "explanation": "k is in de gebruikte regressieformules het aantal verklarende variabelen. Er zijn vier verklarende variabelen, dus k = 4. De constante is wel een geschatte coëfficiënt, maar telt niet mee in k. Daarom worden residual df als n − k − 1 berekend.",
          "steps": [
            "k is in de gebruikte regressieformules het aantal verklarende variabelen.",
            "Er zijn vier verklarende variabelen, dus k = 4.",
            "De constante is wel een geschatte coëfficiënt, maar telt niet mee in k. Daarom worden residual df als n − k − 1 berekend."
          ],
          "pattern": "Herken: Een aantal verklarende variabelen “plus constante”, met k als vraag. → Betekenis: k telt de voorspellers; de constante krijgt een aparte plaats in n − k − 1. → Aanpak: Tel de verklarende variabelen en laat de constante buiten k. → Gevraagd antwoord: Het aantal voorspellers voor de model- en vrijheidsgradenformules.",
          "trap": "Het aantal geschatte coëfficiënten inclusief constante is k + 1, niet k.",
          "optionExplanations": [
            "3 laat één verklarende variabele weg. Je hoeft van de gegeven vier voorspellers niets af te trekken.",
            "5 telt de constante mee. Dat is hier het aantal geschatte coëfficiënten, terwijl k alleen de vier voorspellers telt.",
            "4 is correct: er zijn vier verklarende variabelen en de constante blijft buiten k."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 51–54 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "exam2025",
              "locator": "Vraag 19–20, PDF-pagina 9 en 14",
              "page": 14
            },
            {
              "source": "boek-h10a",
              "page": 4,
              "locator": "Boek p. 290; oorspronkelijke PDF p. 308; uitsnede p. 4"
            },
            {
              "source": "boek-h10c",
              "page": 5,
              "locator": "Boek p. 318; oorspronkelijke PDF p. 336; uitsnede p. 5"
            }
          ],
          "recognition": {
            "signals": "Een aantal verklarende variabelen “plus constante”, met k als vraag.",
            "meaning": "k telt de voorspellers; de constante krijgt een aparte plaats in n − k − 1.",
            "approach": "Tel de verklarende variabelen en laat de constante buiten k.",
            "answer": "Het aantal voorspellers voor de model- en vrijheidsgradenformules."
          },
          "level": 1,
          "guidance": {
            "title": "Meervoudige regressie: model en vergelijking",
            "focus": "k telt uitsluitend de verklarende variabelen. De constante wordt apart geschat en heeft haar eigen vrijheidsgraad.",
            "rules": [
              "Vul alle verklarende variabelen in dezelfde modelvergelijking in: ŷ = b₀ + b₁x₁ + … + bₖxₖ. De constante telt niet mee in k. Gebruik in oorspronkelijke eenheden de B-coëfficiënten.",
              "Een dummy is 0 of 1 volgens de gegeven codering. Een coëfficiënt beschrijft het verschil bij gelijkblijvende andere kenmerken. Vergelijk modellen alleen op passende, onderling vergelijkbare gegevens en uitkomstschaal."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 51-54: model, adjusted R² en aantal variabelen"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: meervoudige regressie en uitvoer"
              }
            ]
          }
        },
        {
          "id": "mc-meervoudig-basis-3",
          "prompt": "Waarom adjusted R² gebruiken?",
          "options": [
            "Om voor extra verklarende variabelen te corrigeren",
            "Om de richting van het verband te bepalen",
            "Om causaliteit te bewijzen"
          ],
          "correct": 0,
          "explanation": "Gewone R² kan bij het toevoegen van verklarende variabelen stijgen, ook als hun extra bijdrage beperkt is. Adjusted R² corrigeert de verklaarde variatie voor het aantal opgenomen voorspellers en de steekproefomvang. Daarom helpt adjusted R² om modellen van verschillende omvang op dezelfde y en gegevens te vergelijken.",
          "steps": [
            "Gewone R² kan bij het toevoegen van verklarende variabelen stijgen, ook als hun extra bijdrage beperkt is.",
            "Adjusted R² corrigeert de verklaarde variatie voor het aantal opgenomen voorspellers en de steekproefomvang.",
            "Daarom helpt adjusted R² om modellen van verschillende omvang op dezelfde y en gegevens te vergelijken."
          ],
          "pattern": "Herken: “Waarom adjusted R²” bij modellen met meer voorspellers. → Betekenis: Gewone R² houdt geen rekening met de prijs van extra modelomvang. → Aanpak: Koppel adjusted R² aan correctie voor het aantal voorspellers en waarnemingen. → Gevraagd antwoord: Een reden om de gecorrigeerde fitmaat te gebruiken bij passende modelvergelijkingen.",
          "trap": "Een hogere gewone R² alleen rechtvaardigt niet automatisch een complexer model.",
          "optionExplanations": [
            "Dit is het doel van adjusted R²: de modelomvang meewegen in de beoordeling van de verklaarde variatie.",
            "De richting lees je uit het teken van de relevante coëfficiënt. Adjusted R² is geen richtingsmaat.",
            "Een maat voor verklaarde variatie bewijst geen oorzaak-gevolgverband. Ook adjusted R² levert dat bewijs niet."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 51–54 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "exam2025",
              "locator": "Vraag 19–20, PDF-pagina 9 en 14",
              "page": 14
            },
            {
              "source": "boek-h10a",
              "page": 4,
              "locator": "Boek p. 290; oorspronkelijke PDF p. 308; uitsnede p. 4"
            },
            {
              "source": "boek-h10c",
              "page": 5,
              "locator": "Boek p. 318; oorspronkelijke PDF p. 336; uitsnede p. 5"
            }
          ],
          "recognition": {
            "signals": "“Waarom adjusted R²” bij modellen met meer voorspellers.",
            "meaning": "Gewone R² houdt geen rekening met de prijs van extra modelomvang.",
            "approach": "Koppel adjusted R² aan correctie voor het aantal voorspellers en waarnemingen.",
            "answer": "Een reden om de gecorrigeerde fitmaat te gebruiken bij passende modelvergelijkingen."
          },
          "level": 1,
          "guidance": {
            "title": "Meervoudige regressie: model en vergelijking",
            "focus": "R² kan door toevoegen van variabelen stijgen zonder nuttige verbetering. Adjusted R² houdt rekening met n en k; vergelijk modellen voor dezelfde y en dezelfde waarnemingen.",
            "rules": [
              "Vul alle verklarende variabelen in dezelfde modelvergelijking in: ŷ = b₀ + b₁x₁ + … + bₖxₖ. De constante telt niet mee in k. Gebruik in oorspronkelijke eenheden de B-coëfficiënten.",
              "Een dummy is 0 of 1 volgens de gegeven codering. Een coëfficiënt beschrijft het verschil bij gelijkblijvende andere kenmerken. Vergelijk modellen alleen op passende, onderling vergelijkbare gegevens en uitkomstschaal."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 51-54: model, adjusted R² en aantal variabelen"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: meervoudige regressie en uitvoer"
              }
            ]
          }
        },
        {
          "id": "mc-meervoudig-basis-1",
          "prompt": "B_HBO = 600 en B_WO = 1.000. Wat is WO tegenover HBO?",
          "options": [
            "1.000",
            "400",
            "1.600"
          ],
          "correct": 1,
          "explanation": "De dummycoëfficiënten voor HBO en WO zijn beide verschillen ten opzichte van dezelfde referentiegroep. Voor het onderlinge verschil trek je die effecten van elkaar af: B_WO − B_HBO. 1.000 − 600 = 400. De voorspelling voor WO ligt dus 400 hoger dan voor HBO, bij gelijke overige opgenomen kenmerken.",
          "steps": [
            "De dummycoëfficiënten voor HBO en WO zijn beide verschillen ten opzichte van dezelfde referentiegroep.",
            "Voor het onderlinge verschil trek je die effecten van elkaar af: B_WO − B_HBO.",
            "1.000 − 600 = 400. De voorspelling voor WO ligt dus 400 hoger dan voor HBO, bij gelijke overige opgenomen kenmerken."
          ],
          "pattern": "Herken: Twee dummycoëfficiënten B_HBO en B_WO; gevraagd is WO tegenover HBO. → Betekenis: Beide coëfficiënten zijn verschillen met dezelfde referentiegroep. → Aanpak: Trek B_HBO van B_WO af, bij gelijk gehouden overige voorspellers. → Gevraagd antwoord: Het voorspelde groepsverschil WO − HBO, niet het verschil met de referentiegroep.",
          "trap": "Een dummycoëfficiënt is geen verschil met elke willekeurige andere groep.",
          "optionExplanations": [
            "1.000 is het verschil tussen WO en de referentiegroep. HBO ligt zelf al 600 boven diezelfde referentie.",
            "400 = 1.000 − 600 is het onderlinge verschil, wanneer de overige verklarende variabelen gelijk worden gehouden.",
            "1.600 telt beide referentieverschillen op. Voor WO ten opzichte van HBO moet je het HBO-effect aftrekken."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 51–54 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "exam2025",
              "locator": "Vraag 19–20, PDF-pagina 9 en 14",
              "page": 14
            },
            {
              "source": "boek-h10a",
              "page": 4,
              "locator": "Boek p. 290; oorspronkelijke PDF p. 308; uitsnede p. 4"
            },
            {
              "source": "boek-h10c",
              "page": 5,
              "locator": "Boek p. 318; oorspronkelijke PDF p. 336; uitsnede p. 5"
            }
          ],
          "recognition": {
            "signals": "Twee dummycoëfficiënten B_HBO en B_WO; gevraagd is WO tegenover HBO.",
            "meaning": "Beide coëfficiënten zijn verschillen met dezelfde referentiegroep.",
            "approach": "Trek B_HBO van B_WO af, bij gelijk gehouden overige voorspellers.",
            "answer": "Het voorspelde groepsverschil WO − HBO, niet het verschil met de referentiegroep."
          },
          "level": 2,
          "guidance": {
            "title": "Meervoudige regressie: model en vergelijking",
            "focus": "Vergelijk dummycoëfficiënten alleen binnen hetzelfde model en ten opzichte van dezelfde referentiecategorie. Bij gelijke overige kenmerken is het contrast B_groep2 − B_groep1.",
            "rules": [
              "Vul alle verklarende variabelen in dezelfde modelvergelijking in: ŷ = b₀ + b₁x₁ + … + bₖxₖ. De constante telt niet mee in k. Gebruik in oorspronkelijke eenheden de B-coëfficiënten.",
              "Een dummy is 0 of 1 volgens de gegeven codering. Een coëfficiënt beschrijft het verschil bij gelijkblijvende andere kenmerken. Vergelijk modellen alleen op passende, onderling vergelijkbare gegevens en uitkomstschaal."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 51-54: model, adjusted R² en aantal variabelen"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: meervoudige regressie en uitvoer"
              }
            ]
          }
        },
        {
          "id": "mc-meervoudig-toepassing-1",
          "prompt": "ŷ = 1.000 + 50x + 200D, met D = 1 voor groep B. Wat is ŷ bij x = 4 en groep B?",
          "options": [
            "1.250",
            "1.400",
            "5.200",
            "1.200"
          ],
          "correct": 1,
          "level": 2,
          "steps": [
            "Vul x = 4 en D = 1 in.",
            "1.000 + 50 × 4 + 200 = 1.400.",
            "De dummy D is voor groep B gelijk aan 1. Het groepseffect van 200 komt daardoor boven op de constante en de bijdrage van x."
          ],
          "explanation": "Vul x = 4 en D = 1 in. 1.000 + 50 × 4 + 200 = 1.400. De dummy D is voor groep B gelijk aan 1. Het groepseffect van 200 komt daardoor boven op de constante en de bijdrage van x.",
          "pattern": "Herken: Een vergelijking met x én een dummy D, plus de codering voor groep B. → Betekenis: Groepslidmaatschap wordt via de dummy als extra modelterm verwerkt. → Aanpak: Zet D op de code van de genoemde groep en vul zowel x als D in. → Gevraagd antwoord: Eén voorspelde y inclusief constante, continue bijdrage en groepsbijdrage.",
          "trap": "De constante wordt één keer meegenomen.",
          "optionExplanations": [
            "1.250 volgt niet uit het invullen van x = 4 en D = 1. De twee bijdragen zijn 200 en 200, naast de constante 1.000.",
            "1.400 = 1.000 + 50 × 4 + 200 × 1. Alle termen zijn op de juiste manier ingevuld.",
            "5.200 volgt niet uit de gegeven vergelijking. De constante telt één keer mee: 1.000 + 50 × 4 + 200 × 1 = 1.400.",
            "1.200 verwerkt 1.000 + 50 × 4, maar laat de groepsdummy 200 × 1 weg."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 51–54 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "exam2025",
              "locator": "Vraag 19–20, PDF-pagina 9 en 14",
              "page": 14
            },
            {
              "source": "boek-h10a",
              "page": 4,
              "locator": "Boek p. 290; oorspronkelijke PDF p. 308; uitsnede p. 4"
            },
            {
              "source": "boek-h10c",
              "page": 5,
              "locator": "Boek p. 318; oorspronkelijke PDF p. 336; uitsnede p. 5"
            }
          ],
          "recognition": {
            "signals": "Een vergelijking met x én een dummy D, plus de codering voor groep B.",
            "meaning": "Groepslidmaatschap wordt via de dummy als extra modelterm verwerkt.",
            "approach": "Zet D op de code van de genoemde groep en vul zowel x als D in.",
            "answer": "Eén voorspelde y inclusief constante, continue bijdrage en groepsbijdrage."
          },
          "guidance": {
            "title": "Meervoudige regressie: model en vergelijking",
            "focus": "Vul voor iedere persoon haar of zijn eigen x-waarden en dummycodes in. Bereken bij een verschil twee voorspellingen of trek de modeltermen zorgvuldig van elkaar af.",
            "rules": [
              "Vul alle verklarende variabelen in dezelfde modelvergelijking in: ŷ = b₀ + b₁x₁ + … + bₖxₖ. De constante telt niet mee in k. Gebruik in oorspronkelijke eenheden de B-coëfficiënten.",
              "Een dummy is 0 of 1 volgens de gegeven codering. Een coëfficiënt beschrijft het verschil bij gelijkblijvende andere kenmerken. Vergelijk modellen alleen op passende, onderling vergelijkbare gegevens en uitkomstschaal."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 51-54: model, adjusted R² en aantal variabelen"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: meervoudige regressie en uitvoer"
              }
            ]
          }
        },
        {
          "id": "mc-meervoudig-aanvulling-beta",
          "level": 2,
          "prompt": "Eigen oefenvraag. In hetzelfde model heeft X1 Beta = −0,385 en X2 Beta = 0,592. Welke interpretatie is passend?",
          "options": [
            "X2 heeft de grootste absolute gestandaardiseerde coëfficiënt",
            "X1 heeft geen verband omdat Beta negatief is",
            "Gebruik Beta om bedragen in euro te voorspellen",
            "X2 is bewezen de belangrijkste oorzaak"
          ],
          "correct": 0,
          "optionExplanations": [
            "Vergelijk |−0,385| met |0,592|. X2 heeft de grotere gestandaardiseerde coëfficiënt in dit model.",
            "Negatief geeft de richting aan. Het betekent niet dat er geen verband is.",
            "Voor voorspellen in de oorspronkelijke modeleeneenheden gebruik je B, niet de gestandaardiseerde Beta.",
            "De vergelijking binnen één model levert geen bewijs van causaliteit of universeel belang."
          ],
          "steps": [
            "Het gaat om Beta binnen hetzelfde model.",
            "De absolute waarden zijn 0,385 en 0,592.",
            "X2 heeft de grootste absolute Beta; het verband is positief, dat van X1 negatief."
          ],
          "explanation": "Het gaat om Beta binnen hetzelfde model. De absolute waarden zijn 0,385 en 0,592. X2 heeft de grootste absolute Beta; het verband is positief, dat van X1 negatief.",
          "pattern": "Herken: “Beta” voor twee voorspellers in hetzelfde model, met een positief en een negatief teken. → Betekenis: Gestandaardiseerde coëfficiënten kunnen in absolute grootte binnen dat model worden vergeleken. → Aanpak: Vergelijk |Beta| voor grootte en behoud het teken apart voor richting. → Gevraagd antwoord: De grootste absolute gestandaardiseerde coëfficiënt; geen eurovoorspelling of causale rangorde.",
          "trap": "Gebruik B voor de regressievergelijking en maak van samenhang geen causaliteit.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 51–54 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "exam2025",
              "locator": "Vraag 19–20, PDF-pagina 9 en 14",
              "page": 14
            },
            {
              "source": "boek-h10a",
              "page": 4,
              "locator": "Boek p. 290; oorspronkelijke PDF p. 308; uitsnede p. 4"
            },
            {
              "source": "boek-h10c",
              "page": 5,
              "locator": "Boek p. 318; oorspronkelijke PDF p. 336; uitsnede p. 5"
            }
          ],
          "recognition": {
            "signals": "“Beta” voor twee voorspellers in hetzelfde model, met een positief en een negatief teken.",
            "meaning": "Gestandaardiseerde coëfficiënten kunnen in absolute grootte binnen dat model worden vergeleken.",
            "approach": "Vergelijk |Beta| voor grootte en behoud het teken apart voor richting.",
            "answer": "De grootste absolute gestandaardiseerde coëfficiënt; geen eurovoorspelling of causale rangorde."
          },
          "guidance": {
            "title": "Meervoudige regressie: model en vergelijking",
            "focus": "Beta is een gestandaardiseerde coëfficiënt. Vergelijk teken en absolute grootte binnen hetzelfde model; Beta is niet de B waarmee je in oorspronkelijke eenheden voorspelt en bewijst geen causaliteit.",
            "rules": [
              "Vul alle verklarende variabelen in dezelfde modelvergelijking in: ŷ = b₀ + b₁x₁ + … + bₖxₖ. De constante telt niet mee in k. Gebruik in oorspronkelijke eenheden de B-coëfficiënten.",
              "Een dummy is 0 of 1 volgens de gegeven codering. Een coëfficiënt beschrijft het verschil bij gelijkblijvende andere kenmerken. Vergelijk modellen alleen op passende, onderling vergelijkbare gegevens en uitkomstschaal."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 51-54: model, adjusted R² en aantal variabelen"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: meervoudige regressie en uitvoer"
              },
              {
                "source": "boek-h10c",
                "page": 5,
                "locator": "Boek p. 318; oorspronkelijke PDF p. 336: gestandaardiseerde coëfficiënten"
              }
            ]
          }
        },
        {
          "id": "mc-meervoudig-toepassing-2",
          "prompt": "ŷ = 1.000 + 50x + 200D. Persoon A heeft x = 6, D = 0; persoon B x = 4, D = 1. Hoeveel hoger is de voorspelling van B?",
          "options": [
            "−100",
            "200",
            "100",
            "300"
          ],
          "correct": 2,
          "level": 3,
          "steps": [
            "A: 1.000 + 300 = 1.300. B: 1.000 + 200 + 200 = 1.400.",
            "Verschil B − A = 100.",
            "De dummycoëfficiënt van 200 is het groepsverschil bij gelijke x. Deze personen hebben verschillende x, dus het verschil in x moet ook worden meegenomen."
          ],
          "explanation": "A: 1.000 + 300 = 1.300. B: 1.000 + 200 + 200 = 1.400. Verschil B − A = 100. De dummycoëfficiënt van 200 is het groepsverschil bij gelijke x. Deze personen hebben verschillende x, dus het verschil in x moet ook worden meegenomen.",
          "pattern": "Herken: Twee personen verschillen zowel in x als in dummycode; gevraagd is hoeveel hoger B is. → Betekenis: Het totale voorspelde verschil bevat meer dan alleen het dummy-effect. → Aanpak: Bereken voorspelling B − voorspelling A, of tel b_x(x_B − x_A) en b_D(D_B − D_A) op. → Gevraagd antwoord: Een getekend totaalverschil; de gelijke constante valt weg.",
          "trap": "Alleen het dummy-effect 200 nemen negeert het verschil in x.",
          "optionExplanations": [
            "−100 is het verschil A − B. Gevraagd is hoeveel hoger B is, dus B − A = +100.",
            "200 is alleen het dummy-effect. Persoon B heeft daarnaast twee eenheden minder x, wat 100 van dit voordeel afhaalt.",
            "100 = 200 + 50 × (4 − 6). Het positieve groepseffect en negatieve verschil in x zijn beide verwerkt.",
            "300 telt het verschil in x met het verkeerde teken op. B heeft minder x en krijgt daarvoor juist 100 minder voorspelde y."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 51–54 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "exam2025",
              "locator": "Vraag 19–20, PDF-pagina 9 en 14",
              "page": 14
            },
            {
              "source": "boek-h10a",
              "page": 4,
              "locator": "Boek p. 290; oorspronkelijke PDF p. 308; uitsnede p. 4"
            },
            {
              "source": "boek-h10c",
              "page": 5,
              "locator": "Boek p. 318; oorspronkelijke PDF p. 336; uitsnede p. 5"
            }
          ],
          "recognition": {
            "signals": "Twee personen verschillen zowel in x als in dummycode; gevraagd is hoeveel hoger B is.",
            "meaning": "Het totale voorspelde verschil bevat meer dan alleen het dummy-effect.",
            "approach": "Bereken voorspelling B − voorspelling A, of tel b_x(x_B − x_A) en b_D(D_B − D_A) op.",
            "answer": "Een getekend totaalverschil; de gelijke constante valt weg."
          },
          "guidance": {
            "title": "Meervoudige regressie: model en vergelijking",
            "focus": "Vul voor iedere persoon haar of zijn eigen x-waarden en dummycodes in. Bereken bij een verschil twee voorspellingen of trek de modeltermen zorgvuldig van elkaar af.",
            "rules": [
              "Vul alle verklarende variabelen in dezelfde modelvergelijking in: ŷ = b₀ + b₁x₁ + … + bₖxₖ. De constante telt niet mee in k. Gebruik in oorspronkelijke eenheden de B-coëfficiënten.",
              "Een dummy is 0 of 1 volgens de gegeven codering. Een coëfficiënt beschrijft het verschil bij gelijkblijvende andere kenmerken. Vergelijk modellen alleen op passende, onderling vergelijkbare gegevens en uitkomstschaal."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 51-54: model, adjusted R² en aantal variabelen"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: meervoudige regressie en uitvoer"
              }
            ]
          }
        },
        {
          "id": "mc-meervoudig-toepassing-3",
          "prompt": "Model A en B gebruiken dezelfde y en waarnemingen. B heeft meer voorspellers: R² stijgt van 0,70 naar 0,71, adjusted R² daalt van 0,68 naar 0,67. Welke afweging is passend?",
          "options": [
            "A is zeker causaal",
            "De tabel kan niet kloppen",
            "B is zeker beter doordat R² hoger is",
            "De extra complexiteit verbetert de gecorrigeerde modelkwaliteit hier niet"
          ],
          "correct": 3,
          "level": 3,
          "steps": [
            "Gewone R² kan toenemen door extra voorspellers.",
            "Adjusted R² corrigeert voor de modelomvang en daalt hier.",
            "Bij gelijke waarnemingen en uitkomstmaat is de daling van adjusted R² een aanwijzing dat de winst in verklaarde variatie de extra modelomvang volgens deze maat niet compenseert."
          ],
          "explanation": "Gewone R² kan toenemen door extra voorspellers. Adjusted R² corrigeert voor de modelomvang en daalt hier. Bij gelijke waarnemingen en uitkomstmaat is de daling van adjusted R² een aanwijzing dat de winst in verklaarde variatie de extra modelomvang volgens deze maat niet compenseert.",
          "pattern": "Herken: Zelfde y en waarnemingen, meer voorspellers, hogere R² maar lagere adjusted R². → Betekenis: De extra fit wordt afgewogen tegen extra modelomvang. → Aanpak: Gebruik adjusted R² voor deze afweging en lees haar verandering apart van gewone R². → Gevraagd antwoord: Een onderbouwd fit-oordeel volgens deze maat, geen bewijs van causaliteit of universele modelkwaliteit.",
          "trap": "Alleen op de grootste R² selecteren bevoordeelt grotere modellen.",
          "optionExplanations": [
            "Geen van deze fitmaten bewijst causaliteit. Model A kan met deze cijfers niet als zeker causaal worden aangeduid.",
            "Deze combinatie is mogelijk: gewone R² kan stijgen terwijl de voor extra voorspellers gecorrigeerde R² daalt.",
            "De gewone R² stijgt makkelijk bij extra voorspellers. Alleen die stijging bewijst niet dat de extra complexiteit nuttig is.",
            "Adjusted R² daalt van 0,68 naar 0,67. Volgens deze voor modelomvang gecorrigeerde maat verbetert model B dus niet."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 51–54 en 61–62, PDF-pagina 3–4",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "exam2025",
              "locator": "Vraag 19–20, PDF-pagina 9 en 14",
              "page": 14
            },
            {
              "source": "boek-h10a",
              "page": 4,
              "locator": "Boek p. 290; oorspronkelijke PDF p. 308; uitsnede p. 4"
            },
            {
              "source": "boek-h10c",
              "page": 5,
              "locator": "Boek p. 318; oorspronkelijke PDF p. 336; uitsnede p. 5"
            }
          ],
          "recognition": {
            "signals": "Zelfde y en waarnemingen, meer voorspellers, hogere R² maar lagere adjusted R².",
            "meaning": "De extra fit wordt afgewogen tegen extra modelomvang.",
            "approach": "Gebruik adjusted R² voor deze afweging en lees haar verandering apart van gewone R².",
            "answer": "Een onderbouwd fit-oordeel volgens deze maat, geen bewijs van causaliteit of universele modelkwaliteit."
          },
          "guidance": {
            "title": "Meervoudige regressie: model en vergelijking",
            "focus": "R² kan door toevoegen van variabelen stijgen zonder nuttige verbetering. Adjusted R² houdt rekening met n en k; vergelijk modellen voor dezelfde y en dezelfde waarnemingen.",
            "rules": [
              "Vul alle verklarende variabelen in dezelfde modelvergelijking in: ŷ = b₀ + b₁x₁ + … + bₖxₖ. De constante telt niet mee in k. Gebruik in oorspronkelijke eenheden de B-coëfficiënten.",
              "Een dummy is 0 of 1 volgens de gegeven codering. Een coëfficiënt beschrijft het verschil bij gelijkblijvende andere kenmerken. Vergelijk modellen alleen op passende, onderling vergelijkbare gegevens en uitkomstschaal."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 51-54: model, adjusted R² en aantal variabelen"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: meervoudige regressie en uitvoer"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "transformaties",
      "title": "Kromme verbanden en logaritmen",
      "phase": "Verdieping",
      "lesson": "transformaties",
      "signal": "De uitvoer noemt logarithmic, exponential, power of ln.",
      "approach": "Lees welke variabele is getransformeerd en keer de bewerking zo nodig terug.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formules 55–58, PDF-pagina 3",
          "page": 3
        },
        {
          "source": "attentie",
          "locator": "Transformaties, PDF-pagina 7–8",
          "page": 7
        },
        {
          "source": "programma",
          "locator": "Afbakening, PDF-pagina 5",
          "page": 5
        },
        {
          "source": "exam2025",
          "locator": "Vraag 11–12, PDF-pagina 5 en 13",
          "page": 13
        },
        {
          "source": "boek-h10a",
          "page": 6,
          "locator": "Boek p. 292; oorspronkelijke PDF p. 310; uitsnede p. 6"
        },
        {
          "source": "boek-h10c",
          "page": 8,
          "locator": "Boek p. 321; oorspronkelijke PDF p. 339; uitsnede p. 8"
        }
      ],
      "questions": [
        {
          "id": "mc-transformaties-basis-1",
          "prompt": "Welke transformatie hoort bij Power?",
          "options": [
            "Zowel ln(x) als ln(y)",
            "Alleen ln(x)",
            "Alleen ln(y)"
          ],
          "correct": 0,
          "explanation": "Een machtsmodel heeft de vorm y = a × xᵇ. Logaritmeren van beide kanten geeft ln(y) = ln(a) + b × ln(x). Het verband is dan lineair tussen ln(x) en ln(y). Daarom worden bij Power beide variabelen getransformeerd.",
          "steps": [
            "Een machtsmodel heeft de vorm y = a × xᵇ.",
            "Logaritmeren van beide kanten geeft ln(y) = ln(a) + b × ln(x).",
            "Het verband is dan lineair tussen ln(x) en ln(y). Daarom worden bij Power beide variabelen getransformeerd."
          ],
          "pattern": "Herken: De modelnaam “Power”. → Betekenis: Een machtsverband wordt lineair door beide variabelen te logaritmeren. → Aanpak: Koppel y = ax^b aan ln(y) = ln(a) + b ln(x). → Gevraagd antwoord: De passende transformatie van zowel y als x.",
          "trap": "Verwar Power niet met Logarithmic, waarbij alleen x is gelogaritmeerd.",
          "optionExplanations": [
            "Beide transformaties maken y = a × xᵇ lineair: ln(y) = ln(a) + b × ln(x).",
            "Alleen ln(x) hoort bij het logaritmische model y = b₀ + b₁ln(x). Voor een machtsmodel wordt ook y gelogaritmeerd.",
            "Alleen ln(y) hoort bij het exponentiële model ln(y) = b₀ + b₁x. Een machtsmodel vraagt ook ln(x)."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 55–58, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Transformaties, PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "programma",
              "locator": "Afbakening, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "exam2025",
              "locator": "Vraag 11–12, PDF-pagina 5 en 13",
              "page": 13
            },
            {
              "source": "boek-h10a",
              "page": 6,
              "locator": "Boek p. 292; oorspronkelijke PDF p. 310; uitsnede p. 6"
            },
            {
              "source": "boek-h10c",
              "page": 8,
              "locator": "Boek p. 321; oorspronkelijke PDF p. 339; uitsnede p. 8"
            }
          ],
          "recognition": {
            "signals": "De modelnaam “Power”.",
            "meaning": "Een machtsverband wordt lineair door beide variabelen te logaritmeren.",
            "approach": "Koppel y = ax^b aan ln(y) = ln(a) + b ln(x).",
            "answer": "De passende transformatie van zowel y als x."
          },
          "level": 1,
          "guidance": {
            "title": "Welke variabele is getransformeerd?",
            "focus": "Bij een machtsmodel worden beide variabelen logaritmisch beschreven. Terugtransformeren levert een constante maal x tot een macht.",
            "rules": [
              "Logarithmic gebruikt ln(x) en laat y op de oorspronkelijke schaal. Exponential gebruikt ln(ŷ) met x. Power gebruikt zowel ln(ŷ) als ln(x). Lees dus eerst op welke schaal de vergelijking staat.",
              "Terugtransformeren van ln(ŷ) doe je met exp: ŷ = exp(de volledige rechterkant). Het oorspronkelijke getal binnen ln moet positief zijn; de logwaarde zelf mag nul of negatief zijn."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 55-58: exponentieel, macht en logaritmisch"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: transformaties en meervoudige terugtransformatie"
              }
            ]
          }
        },
        {
          "id": "mc-transformaties-basis-2",
          "prompt": "ln(ŷ) = 2. Wat is de oorspronkelijke voorspelling?",
          "options": [
            "2",
            "exp(2) ≈ 7,389",
            "ln(2)"
          ],
          "correct": 1,
          "explanation": "De uitkomst 2 is de voorspelling op de natuurlijke logschaal: ln(ŷ) = 2. De omgekeerde bewerking van ln is exp, oftewel e tot de gegeven macht. De teruggetransformeerde puntschatting is daarom ŷ = exp(2) ≈ 7,389.",
          "steps": [
            "De uitkomst 2 is de voorspelling op de natuurlijke logschaal: ln(ŷ) = 2.",
            "De omgekeerde bewerking van ln is exp, oftewel e tot de gegeven macht.",
            "De teruggetransformeerde puntschatting is daarom ŷ = exp(2) ≈ 7,389."
          ],
          "pattern": "Herken: ln(ŷ) is gegeven, maar de oorspronkelijke voorspelling wordt gevraagd. → Betekenis: De berekende waarde staat op de logschaal van de respons. → Aanpak: Keer de natuurlijke logaritme om met exp op de volledige logvoorspelling. → Gevraagd antwoord: Een teruggetransformeerde voorspelling in de oorspronkelijke y-eenheid.",
          "trap": "Een waarde op logschaal is nog geen waarde in de oorspronkelijke meeteenheid.",
          "optionExplanations": [
            "2 is de voorspelling op logschaal. De vraag vraagt de teruggetransformeerde waarde.",
            "exp(2) keert de natuurlijke logaritme om en geeft ongeveer 7,389 op de oorspronkelijke schaal.",
            "ln(2) voert opnieuw een logaritme uit. Om terug te transformeren moet je juist de inverse exp gebruiken."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 55–58, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Transformaties, PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "programma",
              "locator": "Afbakening, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "exam2025",
              "locator": "Vraag 11–12, PDF-pagina 5 en 13",
              "page": 13
            },
            {
              "source": "boek-h10a",
              "page": 6,
              "locator": "Boek p. 292; oorspronkelijke PDF p. 310; uitsnede p. 6"
            },
            {
              "source": "boek-h10c",
              "page": 8,
              "locator": "Boek p. 321; oorspronkelijke PDF p. 339; uitsnede p. 8"
            }
          ],
          "recognition": {
            "signals": "ln(ŷ) is gegeven, maar de oorspronkelijke voorspelling wordt gevraagd.",
            "meaning": "De berekende waarde staat op de logschaal van de respons.",
            "approach": "Keer de natuurlijke logaritme om met exp op de volledige logvoorspelling.",
            "answer": "Een teruggetransformeerde voorspelling in de oorspronkelijke y-eenheid."
          },
          "level": 1,
          "guidance": {
            "title": "Welke variabele is getransformeerd?",
            "focus": "Voer exp uit op de volledige voorspelde logwaarde. Terugtransformeer niet afzonderlijk alleen de constante of alleen de x-term.",
            "rules": [
              "Logarithmic gebruikt ln(x) en laat y op de oorspronkelijke schaal. Exponential gebruikt ln(ŷ) met x. Power gebruikt zowel ln(ŷ) als ln(x). Lees dus eerst op welke schaal de vergelijking staat.",
              "Terugtransformeren van ln(ŷ) doe je met exp: ŷ = exp(de volledige rechterkant). Het oorspronkelijke getal binnen ln moet positief zijn; de logwaarde zelf mag nul of negatief zijn."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 55-58: exponentieel, macht en logaritmisch"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: transformaties en meervoudige terugtransformatie"
              }
            ]
          }
        },
        {
          "id": "mc-transformaties-aanvulling-domein",
          "level": 1,
          "prompt": "Eigen oefenvraag. Mag x = 0,5 worden gebruikt als verklarende variabele in ln(x)?",
          "options": [
            "Alleen als x wordt vervangen door nul",
            "Ja, want x is positief",
            "Nee, want ln(0,5) is negatief",
            "Alleen als ook ln(x) positief is"
          ],
          "correct": 1,
          "optionExplanations": [
            "ln(0) is niet gedefinieerd. Nul invullen maakt deze geldige invoer juist ongeldig.",
            "De oorspronkelijke waarde 0,5 is positief. ln(0,5) is negatief, maar dat is toegestaan.",
            "De logwaarde hoeft niet positief te zijn; alleen de oorspronkelijke invoer moet positief zijn.",
            "Dat voegt een voorwaarde toe die niet geldt voor de natuurlijke logaritme."
          ],
          "steps": [
            "Controleer de oorspronkelijke invoer: 0,5 > 0.",
            "Daarom is ln(0,5) gedefinieerd.",
            "De negatieve logwaarde ongeveer −0,693 is toegestaan. Waarden tussen nul en één hebben juist een negatieve natuurlijke logaritme."
          ],
          "explanation": "Controleer de oorspronkelijke invoer: 0,5 > 0. Daarom is ln(0,5) gedefinieerd. De negatieve logwaarde ongeveer −0,693 is toegestaan. Waarden tussen nul en één hebben juist een negatieve natuurlijke logaritme.",
          "pattern": "Herken: Een positieve x kleiner dan 1 die in ln(x) wordt ingevuld. → Betekenis: Het domein van ln vraagt positieve invoer; de loguitkomst mag negatief zijn. → Aanpak: Controleer x > 0 en beoordeel het teken van ln(x) niet als domeinvoorwaarde. → Gevraagd antwoord: Een ja/nee-oordeel over toegestane invoer met de juiste voorwaarde.",
          "trap": "Positieve invoer betekent niet dat de logwaarde ook positief moet zijn.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 55–58, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Transformaties, PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "programma",
              "locator": "Afbakening, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "exam2025",
              "locator": "Vraag 11–12, PDF-pagina 5 en 13",
              "page": 13
            },
            {
              "source": "boek-h10a",
              "page": 6,
              "locator": "Boek p. 292; oorspronkelijke PDF p. 310; uitsnede p. 6"
            },
            {
              "source": "boek-h10c",
              "page": 8,
              "locator": "Boek p. 321; oorspronkelijke PDF p. 339; uitsnede p. 8"
            }
          ],
          "recognition": {
            "signals": "Een positieve x kleiner dan 1 die in ln(x) wordt ingevuld.",
            "meaning": "Het domein van ln vraagt positieve invoer; de loguitkomst mag negatief zijn.",
            "approach": "Controleer x > 0 en beoordeel het teken van ln(x) niet als domeinvoorwaarde.",
            "answer": "Een ja/nee-oordeel over toegestane invoer met de juiste voorwaarde."
          },
          "guidance": {
            "title": "Welke variabele is getransformeerd?",
            "focus": "Controleer het oorspronkelijke argument van ln. Een positief getal kleiner dan 1 heeft een negatieve logwaarde, maar is wel toegestaan.",
            "rules": [
              "Logarithmic gebruikt ln(x) en laat y op de oorspronkelijke schaal. Exponential gebruikt ln(ŷ) met x. Power gebruikt zowel ln(ŷ) als ln(x). Lees dus eerst op welke schaal de vergelijking staat.",
              "Terugtransformeren van ln(ŷ) doe je met exp: ŷ = exp(de volledige rechterkant). Het oorspronkelijke getal binnen ln moet positief zijn; de logwaarde zelf mag nul of negatief zijn."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 55-58: exponentieel, macht en logaritmisch"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: transformaties en meervoudige terugtransformatie"
              }
            ]
          }
        },
        {
          "id": "mc-transformaties-basis-3",
          "prompt": "Bij ln(ŷ) = b₀ + b₁x, welke factor hoort bij één extra x?",
          "options": [
            "ln(b₁)",
            "b₁",
            "exp(b₁)"
          ],
          "correct": 2,
          "explanation": "Op de logschaal verhoogt één extra eenheid x de voorspelde ln(y) met b₁. Terugtransformeren geeft exp(b₀ + b₁x + b₁) = exp(b₀ + b₁x) × exp(b₁). De voorspelling wordt dus vermenigvuldigd met exp(b₁). De procentuele verandering is 100 × [exp(b₁) − 1].",
          "steps": [
            "Op de logschaal verhoogt één extra eenheid x de voorspelde ln(y) met b₁.",
            "Terugtransformeren geeft exp(b₀ + b₁x + b₁) = exp(b₀ + b₁x) × exp(b₁).",
            "De voorspelling wordt dus vermenigvuldigd met exp(b₁). De procentuele verandering is 100 × [exp(b₁) − 1]."
          ],
          "pattern": "Herken: ln(ŷ) = b₀ + b₁x en “factor bij één extra x”. → Betekenis: Een vaste toename op de logschaal wordt een vermenigvuldigingsfactor op de oorspronkelijke schaal. → Aanpak: Neem exp van de verandering b₁ × 1 in de logvoorspelling. → Gevraagd antwoord: Een vermenigvuldigingsfactor, geen absoluut verschil van b₁ y-eenheden.",
          "trap": "De coëfficiënt b₁ zelf is niet de exacte vermenigvuldigingsfactor op de oorspronkelijke schaal.",
          "optionExplanations": [
            "ln(b₁) transformeert de coëfficiënt de verkeerde kant op. Teruggaan vanaf logschaal vraagt exp.",
            "b₁ is de toename van ln(y), niet de factor waarmee y wordt vermenigvuldigd.",
            "exp(b₁) is de juiste factor doordat exp(a + b₁) = exp(a) × exp(b₁)."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 55–58, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Transformaties, PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "programma",
              "locator": "Afbakening, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "exam2025",
              "locator": "Vraag 11–12, PDF-pagina 5 en 13",
              "page": 13
            },
            {
              "source": "boek-h10a",
              "page": 6,
              "locator": "Boek p. 292; oorspronkelijke PDF p. 310; uitsnede p. 6"
            },
            {
              "source": "boek-h10c",
              "page": 8,
              "locator": "Boek p. 321; oorspronkelijke PDF p. 339; uitsnede p. 8"
            }
          ],
          "recognition": {
            "signals": "ln(ŷ) = b₀ + b₁x en “factor bij één extra x”.",
            "meaning": "Een vaste toename op de logschaal wordt een vermenigvuldigingsfactor op de oorspronkelijke schaal.",
            "approach": "Neem exp van de verandering b₁ × 1 in de logvoorspelling.",
            "answer": "Een vermenigvuldigingsfactor, geen absoluut verschil van b₁ y-eenheden."
          },
          "level": 2,
          "guidance": {
            "title": "Welke variabele is getransformeerd?",
            "focus": "In een exponentieel model is de factor per extra eenheid x gelijk aan exp(b₁). Dat is een vermenigvuldigingsfactor, geen vaste optelling op de y-schaal.",
            "rules": [
              "Logarithmic gebruikt ln(x) en laat y op de oorspronkelijke schaal. Exponential gebruikt ln(ŷ) met x. Power gebruikt zowel ln(ŷ) als ln(x). Lees dus eerst op welke schaal de vergelijking staat.",
              "Terugtransformeren van ln(ŷ) doe je met exp: ŷ = exp(de volledige rechterkant). Het oorspronkelijke getal binnen ln moet positief zijn; de logwaarde zelf mag nul of negatief zijn."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 55-58: exponentieel, macht en logaritmisch"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: transformaties en meervoudige terugtransformatie"
              }
            ]
          }
        },
        {
          "id": "mc-transformaties-toepassing-1",
          "prompt": "Het logaritmische model is ŷ = 10 + 2 ln(x). Voor x = e geldt:",
          "options": [
            "ŷ = 2",
            "ŷ = 10",
            "ŷ = 12",
            "ŷ = exp(12)"
          ],
          "correct": 2,
          "level": 2,
          "steps": [
            "ln(e) = 1.",
            "ŷ = 10 + 2 × 1 = 12.",
            "Het model heeft y zelf aan de linkerkant en alleen ln(x) aan de rechterkant. De berekende 12 staat dus al op de oorspronkelijke schaal van y."
          ],
          "explanation": "ln(e) = 1. ŷ = 10 + 2 × 1 = 12. Het model heeft y zelf aan de linkerkant en alleen ln(x) aan de rechterkant. De berekende 12 staat dus al op de oorspronkelijke schaal van y.",
          "pattern": "Herken: ŷ staat links; alleen x staat binnen ln(x). → Betekenis: Het logaritmische model voorspelt y direct op de oorspronkelijke schaal. → Aanpak: Bereken eerst ln(x) en vul dat in; exponentieer de uitkomst niet als y zelf ongelogd is. → Gevraagd antwoord: De voorspelde y-waarde in oorspronkelijke eenheden.",
          "trap": "Je hoeft hier niet nog exp op de uitkomst toe te passen.",
          "optionExplanations": [
            "2 is alleen de bijdrage 2 × ln(e). De constante 10 ontbreekt.",
            "10 laat de bijdrage 2 × ln(e) weg. Omdat ln(e) = 1, komt er 2 bij de constante.",
            "12 = 10 + 2 × 1. Er is geen terugtransformatie van y nodig.",
            "exp(12) zou passend zijn als ln(ŷ) = 12 was berekend. Hier is uitsluitend x gelogaritmeerd."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 55–58, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Transformaties, PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "programma",
              "locator": "Afbakening, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "exam2025",
              "locator": "Vraag 11–12, PDF-pagina 5 en 13",
              "page": 13
            },
            {
              "source": "boek-h10a",
              "page": 6,
              "locator": "Boek p. 292; oorspronkelijke PDF p. 310; uitsnede p. 6"
            },
            {
              "source": "boek-h10c",
              "page": 8,
              "locator": "Boek p. 321; oorspronkelijke PDF p. 339; uitsnede p. 8"
            }
          ],
          "recognition": {
            "signals": "ŷ staat links; alleen x staat binnen ln(x).",
            "meaning": "Het logaritmische model voorspelt y direct op de oorspronkelijke schaal.",
            "approach": "Bereken eerst ln(x) en vul dat in; exponentieer de uitkomst niet als y zelf ongelogd is.",
            "answer": "De voorspelde y-waarde in oorspronkelijke eenheden."
          },
          "guidance": {
            "title": "Welke variabele is getransformeerd?",
            "focus": "Als alleen x is gelogaritmeerd, blijft de voorspelde y op de oorspronkelijke schaal. Gebruik de natuurlijke logaritme uit de vergelijking.",
            "rules": [
              "Logarithmic gebruikt ln(x) en laat y op de oorspronkelijke schaal. Exponential gebruikt ln(ŷ) met x. Power gebruikt zowel ln(ŷ) als ln(x). Lees dus eerst op welke schaal de vergelijking staat.",
              "Terugtransformeren van ln(ŷ) doe je met exp: ŷ = exp(de volledige rechterkant). Het oorspronkelijke getal binnen ln moet positief zijn; de logwaarde zelf mag nul of negatief zijn."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 55-58: exponentieel, macht en logaritmisch"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: transformaties en meervoudige terugtransformatie"
              }
            ]
          }
        },
        {
          "id": "mc-transformaties-toepassing-2",
          "prompt": "ln(ŷ) = 1 + 0,5x. Wat is de teruggetransformeerde puntschatting bij x = 2?",
          "options": [
            "exp(1) + exp(1) ≈ 5,437",
            "2",
            "ln(2)",
            "exp(2) ≈ 7,389"
          ],
          "correct": 3,
          "level": 3,
          "steps": [
            "Eerst op logschaal: 1 + 0,5 × 2 = 2.",
            "Keer ln om: exp(2) ≈ 7,389.",
            "Keer de logaritme om nadat de hele lineaire voorspelling is berekend. exp op een som betekent een product van exponentiële factoren, geen som daarvan."
          ],
          "explanation": "Eerst op logschaal: 1 + 0,5 × 2 = 2. Keer ln om: exp(2) ≈ 7,389. Keer de logaritme om nadat de hele lineaire voorspelling is berekend. exp op een som betekent een product van exponentiële factoren, geen som daarvan.",
          "pattern": "Herken: ln(ŷ) staat links en een concrete x wordt gegeven. → Betekenis: Invullen geeft eerst een voorspelling op de logschaal. → Aanpak: Bereken de volledige lineaire combinatie en pas daarna exp toe op die hele som. → Gevraagd antwoord: Een teruggetransformeerde puntschatting, niet de tussenuitkomst ln(ŷ).",
          "trap": "exp(a + b) is niet gelijk aan exp(a) + exp(b).",
          "optionExplanations": [
            "exp(1 + 1) = exp(1) × exp(1), niet exp(1) + exp(1). De twee getransformeerde bijdragen mogen niet worden opgeteld.",
            "2 is de voorspelling ln(ŷ). De vraag vraagt de teruggetransformeerde waarde op de oorspronkelijke schaal.",
            "ln(2) logaritmeert opnieuw en keert de bewerking niet om. De inverse van ln is exp.",
            "exp(2) ≈ 7,389 volgt uit ln(ŷ) = 1 + 0,5 × 2 = 2."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 55–58, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Transformaties, PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "programma",
              "locator": "Afbakening, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "exam2025",
              "locator": "Vraag 11–12, PDF-pagina 5 en 13",
              "page": 13
            },
            {
              "source": "boek-h10a",
              "page": 6,
              "locator": "Boek p. 292; oorspronkelijke PDF p. 310; uitsnede p. 6"
            },
            {
              "source": "boek-h10c",
              "page": 8,
              "locator": "Boek p. 321; oorspronkelijke PDF p. 339; uitsnede p. 8"
            }
          ],
          "recognition": {
            "signals": "ln(ŷ) staat links en een concrete x wordt gegeven.",
            "meaning": "Invullen geeft eerst een voorspelling op de logschaal.",
            "approach": "Bereken de volledige lineaire combinatie en pas daarna exp toe op die hele som.",
            "answer": "Een teruggetransformeerde puntschatting, niet de tussenuitkomst ln(ŷ)."
          },
          "guidance": {
            "title": "Welke variabele is getransformeerd?",
            "focus": "Voer exp uit op de volledige voorspelde logwaarde. Terugtransformeer niet afzonderlijk alleen de constante of alleen de x-term.",
            "rules": [
              "Logarithmic gebruikt ln(x) en laat y op de oorspronkelijke schaal. Exponential gebruikt ln(ŷ) met x. Power gebruikt zowel ln(ŷ) als ln(x). Lees dus eerst op welke schaal de vergelijking staat.",
              "Terugtransformeren van ln(ŷ) doe je met exp: ŷ = exp(de volledige rechterkant). Het oorspronkelijke getal binnen ln moet positief zijn; de logwaarde zelf mag nul of negatief zijn."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 55-58: exponentieel, macht en logaritmisch"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: transformaties en meervoudige terugtransformatie"
              }
            ]
          }
        },
        {
          "id": "mc-transformaties-toepassing-3",
          "prompt": "Voor een machtsmodel geldt ŷ = 3x². Met welke factor verandert ŷ als x verdubbelt?",
          "options": [
            "4",
            "6",
            "2",
            "3"
          ],
          "correct": 0,
          "level": 3,
          "steps": [
            "Bij 2x wordt de voorspelling 3(2x)² = 12x².",
            "Verhouding tot 3x² is 4.",
            "De voorfactor 3 komt voor in zowel de oude als de nieuwe voorspelling en valt bij de verhouding weg. De exponent 2 bepaalt de factor 2²."
          ],
          "explanation": "Bij 2x wordt de voorspelling 3(2x)² = 12x². Verhouding tot 3x² is 4. De voorfactor 3 komt voor in zowel de oude als de nieuwe voorspelling en valt bij de verhouding weg. De exponent 2 bepaalt de factor 2².",
          "pattern": "Herken: Een machtsmodel ax^b en een verdubbeling van x; gevraagd is een factor. → Betekenis: De verhouding tussen nieuwe en oude voorspelling wordt door de exponent bepaald. → Aanpak: Deel a(2x)^b door ax^b; de voorfactor a valt weg. → Gevraagd antwoord: Een vermenigvuldigingsfactor voor ŷ, geen nieuwe absolute voorspelling.",
          "trap": "Verdubbelen van x betekent niet automatisch verdubbelen van y.",
          "optionExplanations": [
            "4 = (2x)²/x². De exponent 2 maakt van de verdubbeling van x een verviervoudiging van de voorspelling.",
            "6 vermenigvuldigt de verdubbeling met de voorfactor 3. Die voorfactor is al in zowel de oude als de nieuwe waarde aanwezig en valt weg in de verhouding.",
            "2 zou bij een lineair evenredig verband passen. Hier wordt de verdubbeling door de exponent gekwadrateerd.",
            "3 is de vaste voorfactor van het model. Zij bepaalt niet de verhouding na verdubbelen van x."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 55–58, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Transformaties, PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "programma",
              "locator": "Afbakening, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "exam2025",
              "locator": "Vraag 11–12, PDF-pagina 5 en 13",
              "page": 13
            },
            {
              "source": "boek-h10a",
              "page": 6,
              "locator": "Boek p. 292; oorspronkelijke PDF p. 310; uitsnede p. 6"
            },
            {
              "source": "boek-h10c",
              "page": 8,
              "locator": "Boek p. 321; oorspronkelijke PDF p. 339; uitsnede p. 8"
            }
          ],
          "recognition": {
            "signals": "Een machtsmodel ax^b en een verdubbeling van x; gevraagd is een factor.",
            "meaning": "De verhouding tussen nieuwe en oude voorspelling wordt door de exponent bepaald.",
            "approach": "Deel a(2x)^b door ax^b; de voorfactor a valt weg.",
            "answer": "Een vermenigvuldigingsfactor voor ŷ, geen nieuwe absolute voorspelling."
          },
          "guidance": {
            "title": "Welke variabele is getransformeerd?",
            "focus": "In ŷ = a × x^b geeft vermenigvuldiging van x met c een factor c^b in de voorspelling.",
            "rules": [
              "Logarithmic gebruikt ln(x) en laat y op de oorspronkelijke schaal. Exponential gebruikt ln(ŷ) met x. Power gebruikt zowel ln(ŷ) als ln(x). Lees dus eerst op welke schaal de vergelijking staat.",
              "Terugtransformeren van ln(ŷ) doe je met exp: ŷ = exp(de volledige rechterkant). Het oorspronkelijke getal binnen ln moet positief zijn; de logwaarde zelf mag nul of negatief zijn."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 55-58: exponentieel, macht en logaritmisch"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: transformaties en meervoudige terugtransformatie"
              }
            ]
          }
        },
        {
          "id": "mc-transformaties-aanvulling-meervoudig",
          "level": 3,
          "prompt": "Eigen oefenvraag. ln(y-hat) = ln(2) + 0,5 ln(x1) − ln(x2). Wat is de teruggetransformeerde voorspelling bij x1 = 16 en x2 = 4?",
          "options": [
            "8",
            "Ongeveer 0,693",
            "2",
            "32"
          ],
          "correct": 2,
          "optionExplanations": [
            "Dit laat de tweede verklarende variabele weg en berekent alleen 2 × √16.",
            "Dit is de voorspelde logwaarde. De vraag vraagt om de teruggetransformeerde voorspelling.",
            "exp(ln(2)) × 16^0,5 × 4^−1 = 2 × 4 / 4 = 2.",
            "Dit vermenigvuldigt met x2 in plaats van te delen; de coëfficiënt van ln(x2) is negatief."
          ],
          "steps": [
            "exp(ln(2)) = 2 is de constante factor.",
            "De machten worden x1^0,5 en x2^−1.",
            "Vul x1 = 16 en x2 = 4 in: 2 × √16 / 4 = 2. De negatieve exponent bij x2 wordt een deling; je telt de teruggetransformeerde termen niet op."
          ],
          "explanation": "exp(ln(2)) = 2 is de constante factor. De machten worden x1^0,5 en x2^−1. Vul x1 = 16 en x2 = 4 in: 2 × √16 / 4 = 2. De negatieve exponent bij x2 wordt een deling; je telt de teruggetransformeerde termen niet op.",
          "pattern": "Herken: ln(ŷ), een logconstante en meerdere gewogen ln(x)-termen. → Betekenis: Terugtransformeren zet een som van logtermen om in een product van machten. → Aanpak: Gebruik exp van de hele som, of schrijf a × x₁^b₁ × x₂^b₂; behoud negatieve exponenten. → Gevraagd antwoord: Eén voorspelling op de oorspronkelijke y-schaal.",
          "trap": "Een negatieve macht wordt delen; vergeet de terugtransformatie niet.",
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 55–58, PDF-pagina 3",
              "page": 3
            },
            {
              "source": "attentie",
              "locator": "Transformaties, PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "programma",
              "locator": "Afbakening, PDF-pagina 5",
              "page": 5
            },
            {
              "source": "exam2025",
              "locator": "Vraag 11–12, PDF-pagina 5 en 13",
              "page": 13
            },
            {
              "source": "boek-h10a",
              "page": 6,
              "locator": "Boek p. 292; oorspronkelijke PDF p. 310; uitsnede p. 6"
            },
            {
              "source": "boek-h10c",
              "page": 8,
              "locator": "Boek p. 321; oorspronkelijke PDF p. 339; uitsnede p. 8"
            }
          ],
          "recognition": {
            "signals": "ln(ŷ), een logconstante en meerdere gewogen ln(x)-termen.",
            "meaning": "Terugtransformeren zet een som van logtermen om in een product van machten.",
            "approach": "Gebruik exp van de hele som, of schrijf a × x₁^b₁ × x₂^b₂; behoud negatieve exponenten.",
            "answer": "Eén voorspelling op de oorspronkelijke y-schaal."
          },
          "guidance": {
            "title": "Welke variabele is getransformeerd?",
            "focus": "Bij ln(ŷ) = b₀ + b₁ln(x₁) + b₂ln(x₂) wordt ŷ = exp(b₀) × x₁^b₁ × x₂^b₂. Een negatieve macht betekent delen.",
            "rules": [
              "Logarithmic gebruikt ln(x) en laat y op de oorspronkelijke schaal. Exponential gebruikt ln(ŷ) met x. Power gebruikt zowel ln(ŷ) als ln(x). Lees dus eerst op welke schaal de vergelijking staat.",
              "Terugtransformeren van ln(ŷ) doe je met exp: ŷ = exp(de volledige rechterkant). Het oorspronkelijke getal binnen ln moet positief zijn; de logwaarde zelf mag nul of negatief zijn."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 3,
                "locator": "Formules 55-58: exponentieel, macht en logaritmisch"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: transformaties en meervoudige terugtransformatie"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "modelbouw",
      "title": "Modelkeuze en multicollineariteit",
      "phase": "Verdieping",
      "lesson": "modelbouw",
      "signal": "De vraag vergelijkt modellen, selectieprocedures of overlap tussen voorspellers.",
      "approach": "Controleer vergelijkbaarheid, VIF/tolerance en de bijdrage van toegevoegde variabelen.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formules 59–63, PDF-pagina 4",
          "page": 4
        },
        {
          "source": "attentie",
          "locator": "Modelbouw en multicollineariteit, PDF-pagina 7–8",
          "page": 7
        },
        {
          "source": "exam2025",
          "locator": "Vraag 22–23, PDF-pagina 15",
          "page": 15
        },
        {
          "source": "boek-h10b",
          "page": 3,
          "locator": "Boek p. 305; oorspronkelijke PDF p. 323; uitsnede p. 3"
        }
      ],
      "questions": [
        {
          "id": "mc-modelbouw-basis-1",
          "prompt": "Tolerance = 0,25. Wat is VIF?",
          "options": [
            "0,75",
            "4",
            "25"
          ],
          "correct": 1,
          "explanation": "Tolerance en VIF beschrijven overlap tussen een voorspeller en de overige voorspellers. Hun relatie is VIF = 1/tolerance. Bij tolerance = 0,25 is VIF = 1/0,25 = 4. Dat ligt onder de in de cursus gebruikte probleemgrens VIF > 10.",
          "steps": [
            "Tolerance en VIF beschrijven overlap tussen een voorspeller en de overige voorspellers.",
            "Hun relatie is VIF = 1/tolerance.",
            "Bij tolerance = 0,25 is VIF = 1/0,25 = 4. Dat ligt onder de in de cursus gebruikte probleemgrens VIF > 10."
          ],
          "pattern": "Herken: Tolerance gegeven en VIF gevraagd. → Betekenis: De twee maten beschrijven dezelfde overlap tussen voorspellers in omgekeerde vorm. → Aanpak: Gebruik VIF = 1/tolerance, niet 1 − tolerance. → Gevraagd antwoord: Een dimensieloze VIF-waarde.",
          "trap": "Een kleinere tolerance geeft een grotere VIF; de maten bewegen tegengesteld.",
          "optionExplanations": [
            "0,75 = 1 − 0,25 is niet VIF. Je moet door tolerance delen, niet tolerance van 1 aftrekken.",
            "4 klopt: 0,25 × 4 = 1, dus beide maten zijn elkaars omgekeerde.",
            "25 behandelt 0,25 alsof je alleen de komma mag verplaatsen. De formule is 1/0,25 = 4."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 59–63, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "attentie",
              "locator": "Modelbouw en multicollineariteit, PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "exam2025",
              "locator": "Vraag 22–23, PDF-pagina 15",
              "page": 15
            },
            {
              "source": "boek-h10b",
              "page": 3,
              "locator": "Boek p. 305; oorspronkelijke PDF p. 323; uitsnede p. 3"
            }
          ],
          "recognition": {
            "signals": "Tolerance gegeven en VIF gevraagd.",
            "meaning": "De twee maten beschrijven dezelfde overlap tussen voorspellers in omgekeerde vorm.",
            "approach": "Gebruik VIF = 1/tolerance, niet 1 − tolerance.",
            "answer": "Een dimensieloze VIF-waarde."
          },
          "level": 1,
          "guidance": {
            "title": "Variabelenselectie en multicollineariteit",
            "focus": "Tolerance en VIF zijn elkaars omgekeerde. Een lage Tolerance betekent een hoge VIF; vergelijk met de expliciet gebruikte cursusgrens.",
            "rules": [
              "Backward begint met alle kandidaatvariabelen; forward bouwt het model op. Na toevoegen of verwijderen wordt het model opnieuw geschat, omdat coëfficiënten en p-waarden kunnen veranderen.",
              "VIF = 1/Tolerance. De in SRA gebruikte signaleringsgrens is VIF > 10. Bij modelselectie moet je de opgegeven selectiegrens en de bijbehorende modeluitvoer volgen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 59-63: VIF, toetsen en modelvergelijking"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: modelbouw en multicollineariteit"
              }
            ]
          }
        },
        {
          "id": "mc-modelbouw-basis-2",
          "prompt": "Welke methode begint met alle kandidaatvariabelen?",
          "options": [
            "Een enkelvoudige correlatie",
            "Forward",
            "Backward"
          ],
          "correct": 2,
          "explanation": "Backward-selectie start met alle kandidaatvariabelen in het model. Vervolgens wordt volgens het selectiecriterium stapsgewijs een variabele verwijderd. Na iedere verwijdering wordt het model opnieuw geschat voordat een volgende keuze wordt gemaakt.",
          "steps": [
            "Backward-selectie start met alle kandidaatvariabelen in het model.",
            "Vervolgens wordt volgens het selectiecriterium stapsgewijs een variabele verwijderd.",
            "Na iedere verwijdering wordt het model opnieuw geschat voordat een volgende keuze wordt gemaakt."
          ],
          "pattern": "Herken: “Begint met alle kandidaatvariabelen” bij een selectiemethode. → Betekenis: De startpositie en de richting van selectie onderscheiden de methoden. → Aanpak: Koppel starten met het volledige model en stapsgewijs verwijderen aan backward-selectie. → Gevraagd antwoord: De naam van de passende selectiemethode.",
          "trap": "Forward werkt juist vanuit een klein beginmodel en voegt variabelen toe.",
          "optionExplanations": [
            "Een enkelvoudige correlatie bekijkt een verband tussen twee variabelen. Dat is geen selectieprocedure die alle kandidaten in een regressiemodel opneemt.",
            "Forward begint met een klein beginmodel en voegt geschikte voorspellers toe. Het start niet met alle kandidaten.",
            "Backward begint met het volledige kandidaatmodel en werkt door verwijdering naar een kleiner model."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 59–63, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "attentie",
              "locator": "Modelbouw en multicollineariteit, PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "exam2025",
              "locator": "Vraag 22–23, PDF-pagina 15",
              "page": 15
            },
            {
              "source": "boek-h10b",
              "page": 3,
              "locator": "Boek p. 305; oorspronkelijke PDF p. 323; uitsnede p. 3"
            }
          ],
          "recognition": {
            "signals": "“Begint met alle kandidaatvariabelen” bij een selectiemethode.",
            "meaning": "De startpositie en de richting van selectie onderscheiden de methoden.",
            "approach": "Koppel starten met het volledige model en stapsgewijs verwijderen aan backward-selectie.",
            "answer": "De naam van de passende selectiemethode."
          },
          "level": 1,
          "guidance": {
            "title": "Variabelenselectie en multicollineariteit",
            "focus": "Let op het beginpunt van de procedure: alle kandidaatvariabelen tegelijk, of juist één voor één toevoegen.",
            "rules": [
              "Backward begint met alle kandidaatvariabelen; forward bouwt het model op. Na toevoegen of verwijderen wordt het model opnieuw geschat, omdat coëfficiënten en p-waarden kunnen veranderen.",
              "VIF = 1/Tolerance. De in SRA gebruikte signaleringsgrens is VIF > 10. Bij modelselectie moet je de opgegeven selectiegrens en de bijbehorende modeluitvoer volgen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 59-63: VIF, toetsen en modelvergelijking"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: modelbouw en multicollineariteit"
              }
            ]
          }
        },
        {
          "id": "mc-modelbouw-basis-3",
          "prompt": "Waarom opnieuw schatten na verwijderen?",
          "options": [
            "De andere coëfficiënten en p-waarden kunnen veranderen",
            "Om n automatisch te verdubbelen",
            "Dat hoeft nooit"
          ],
          "correct": 0,
          "explanation": "Een coëfficiënt in meervoudige regressie beschrijft de bijdrage gegeven de overige opgenomen voorspellers. Na het verwijderen van een voorspeller verandert die gezamenlijke context, omdat variabelen informatie kunnen delen. Schat het nieuwe model daarom opnieuw en beoordeel de nieuwe coëfficiënten, standaardfouten en p-waarden.",
          "steps": [
            "Een coëfficiënt in meervoudige regressie beschrijft de bijdrage gegeven de overige opgenomen voorspellers.",
            "Na het verwijderen van een voorspeller verandert die gezamenlijke context, omdat variabelen informatie kunnen delen.",
            "Schat het nieuwe model daarom opnieuw en beoordeel de nieuwe coëfficiënten, standaardfouten en p-waarden."
          ],
          "pattern": "Herken: Een variabele wordt verwijderd en het model moet opnieuw worden geschat. → Betekenis: Coëfficiënten en toetsen zijn conditioneel op welke voorspellers zijn opgenomen. → Aanpak: Beoordeel de resterende effecten met uitvoer uit het gewijzigde model. → Gevraagd antwoord: Een verklaring waarom oude coëfficiënten en p-waarden niet klakkeloos door kunnen worden gebruikt.",
          "trap": "Oude p-waarden horen bij het oude model en zijn niet automatisch geldig voor het gewijzigde model.",
          "optionExplanations": [
            "Juist: de geschatte bijdrage van een variabele hangt af van de andere variabelen die nog in het model zitten.",
            "Opnieuw schatten voegt geen waarnemingen toe en verdubbelt n niet. Het berekent het model opnieuw voor de gewijzigde set voorspellers.",
            "Zonder opnieuw schatten zou je beslissen met uitkomsten van het vorige model. Die kunnen na verwijdering veranderen."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 59–63, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "attentie",
              "locator": "Modelbouw en multicollineariteit, PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "exam2025",
              "locator": "Vraag 22–23, PDF-pagina 15",
              "page": 15
            },
            {
              "source": "boek-h10b",
              "page": 3,
              "locator": "Boek p. 305; oorspronkelijke PDF p. 323; uitsnede p. 3"
            }
          ],
          "recognition": {
            "signals": "Een variabele wordt verwijderd en het model moet opnieuw worden geschat.",
            "meaning": "Coëfficiënten en toetsen zijn conditioneel op welke voorspellers zijn opgenomen.",
            "approach": "Beoordeel de resterende effecten met uitvoer uit het gewijzigde model.",
            "answer": "Een verklaring waarom oude coëfficiënten en p-waarden niet klakkeloos door kunnen worden gebruikt."
          },
          "level": 2,
          "guidance": {
            "title": "Variabelenselectie en multicollineariteit",
            "focus": "Een selectiebesluit verandert het geschatte model. Gebruik voor een volgende beslissing de nieuwe coëfficiënten en p-waarden, niet die van het vorige model.",
            "rules": [
              "Backward begint met alle kandidaatvariabelen; forward bouwt het model op. Na toevoegen of verwijderen wordt het model opnieuw geschat, omdat coëfficiënten en p-waarden kunnen veranderen.",
              "VIF = 1/Tolerance. De in SRA gebruikte signaleringsgrens is VIF > 10. Bij modelselectie moet je de opgegeven selectiegrens en de bijbehorende modeluitvoer volgen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 59-63: VIF, toetsen en modelvergelijking"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: modelbouw en multicollineariteit"
              }
            ]
          }
        },
        {
          "id": "mc-modelbouw-toepassing-1",
          "prompt": "Tolerance = 0,08. Welke combinatie klopt volgens de cursusgrens VIF > 10?",
          "options": [
            "VIF = 8; probleemsignaal",
            "VIF = 0,08; probleemsignaal",
            "VIF = 0,92; geen signaal",
            "VIF = 12,5; probleemsignaal"
          ],
          "correct": 3,
          "level": 2,
          "steps": [
            "VIF = 1/0,08 = 12,5.",
            "Dit ligt boven de cursusgrens van 10.",
            "Tolerance en VIF meten hetzelfde overlapprobleem vanuit tegengestelde richting. Vergelijk pas na de omzetting de VIF met de genoemde cursusgrens."
          ],
          "explanation": "VIF = 1/0,08 = 12,5. Dit ligt boven de cursusgrens van 10. Tolerance en VIF meten hetzelfde overlapprobleem vanuit tegengestelde richting. Vergelijk pas na de omzetting de VIF met de genoemde cursusgrens.",
          "pattern": "Herken: Tolerance en een expliciete cursusgrens VIF > 10. → Betekenis: Je moet eerst de maat omzetten en daarna het aangegeven criterium toepassen. → Aanpak: Bereken 1/tolerance en vergelijk de VIF met de cursusgrens. → Gevraagd antwoord: De VIF én een oordeel over een multicollineariteitssignaal volgens die grens.",
          "trap": "Een laag tolerancegetal is geen laag VIF-getal.",
          "optionExplanations": [
            "8 volgt niet uit de omgekeerde van 0,08. Bovendien zou 8 niet boven de aangegeven grens VIF > 10 liggen.",
            "0,08 is tolerance zelf. VIF is het omgekeerde en bedraagt 12,5.",
            "0,92 is 1 − 0,08, niet 1/0,08. De berekende VIF is 12,5 en ligt wel boven de grens.",
            "VIF = 1/0,08 = 12,5 en 12,5 > 10. Dat levert volgens de genoemde cursusgrens een probleemsignaal op."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 59–63, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "attentie",
              "locator": "Modelbouw en multicollineariteit, PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "exam2025",
              "locator": "Vraag 22–23, PDF-pagina 15",
              "page": 15
            },
            {
              "source": "boek-h10b",
              "page": 3,
              "locator": "Boek p. 305; oorspronkelijke PDF p. 323; uitsnede p. 3"
            }
          ],
          "recognition": {
            "signals": "Tolerance en een expliciete cursusgrens VIF > 10.",
            "meaning": "Je moet eerst de maat omzetten en daarna het aangegeven criterium toepassen.",
            "approach": "Bereken 1/tolerance en vergelijk de VIF met de cursusgrens.",
            "answer": "De VIF én een oordeel over een multicollineariteitssignaal volgens die grens."
          },
          "guidance": {
            "title": "Variabelenselectie en multicollineariteit",
            "focus": "Tolerance en VIF zijn elkaars omgekeerde. Een lage Tolerance betekent een hoge VIF; vergelijk met de expliciet gebruikte cursusgrens.",
            "rules": [
              "Backward begint met alle kandidaatvariabelen; forward bouwt het model op. Na toevoegen of verwijderen wordt het model opnieuw geschat, omdat coëfficiënten en p-waarden kunnen veranderen.",
              "VIF = 1/Tolerance. De in SRA gebruikte signaleringsgrens is VIF > 10. Bij modelselectie moet je de opgegeven selectiegrens en de bijbehorende modeluitvoer volgen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 59-63: VIF, toetsen en modelvergelijking"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: modelbouw en multicollineariteit"
              }
            ]
          }
        },
        {
          "id": "mc-modelbouw-toepassing-2",
          "prompt": "Twee geneste modellen gebruiken dezelfde data en y. Eén variabele wordt toegevoegd: SSR klein = 800, SSR groot = 850, MSE groot = 10. De kritieke F is 4. Wat volgt?",
          "options": [
            "F = 5; de extra bijdrage is significant",
            "F = 50; niet significant",
            "F = 0,2; significant",
            "Een hoge R² bewijst normaliteit"
          ],
          "correct": 0,
          "level": 3,
          "steps": [
            "Voor één extra variabele: F = (850 − 800)/10 = 5.",
            "5 > 4, dus de extra bijdrage is significant op het gebruikte toetsniveau.",
            "De extra verklaarde kwadratensom is 50 voor één toegevoegde variabele. Je vergelijkt deze bijdrage per extra vrijheid met MSE van het uitgebreide model."
          ],
          "explanation": "Voor één extra variabele: F = (850 − 800)/10 = 5. 5 > 4, dus de extra bijdrage is significant op het gebruikte toetsniveau. De extra verklaarde kwadratensom is 50 voor één toegevoegde variabele. Je vergelijkt deze bijdrage per extra vrijheid met MSE van het uitgebreide model.",
          "pattern": "Herken: Geneste modellen met dezelfde data en y, één extra variabele, twee SSR’s en MSE van het grote model. → Betekenis: Een partiële F-toets beoordeelt de extra verklaarde variatie van de toegevoegde voorspeller. → Aanpak: Deel de SSR-toename per extra vrijheid door MSE_groot en vergelijk F met de gegeven grens. → Gevraagd antwoord: Een toetsingsgrootheid plus een conclusie over de extra bijdrage.",
          "trap": "Zonder dezelfde waarnemingen en dezelfde y is deze vergelijking niet geldig.",
          "optionExplanations": [
            "F = ((850 − 800)/1)/10 = 5. Omdat 5 groter is dan de kritieke 4, is de extra bijdrage significant.",
            "50 is alleen de extra SSR. De deling door MSE ontbreekt, en de conclusie niet significant volgt niet uit de juiste F = 5.",
            "0,2 is de omgekeerde verhouding 10/50. De extra verklaarde variatie hoort in de teller.",
            "Normaliteit volgt niet uit R². De gegeven cijfers zijn bedoeld om de extra bijdrage van de toegevoegde voorspeller te toetsen."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 59–63, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "attentie",
              "locator": "Modelbouw en multicollineariteit, PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "exam2025",
              "locator": "Vraag 22–23, PDF-pagina 15",
              "page": 15
            },
            {
              "source": "boek-h10b",
              "page": 3,
              "locator": "Boek p. 305; oorspronkelijke PDF p. 323; uitsnede p. 3"
            }
          ],
          "recognition": {
            "signals": "Geneste modellen met dezelfde data en y, één extra variabele, twee SSR’s en MSE van het grote model.",
            "meaning": "Een partiële F-toets beoordeelt de extra verklaarde variatie van de toegevoegde voorspeller.",
            "approach": "Deel de SSR-toename per extra vrijheid door MSE_groot en vergelijk F met de gegeven grens.",
            "answer": "Een toetsingsgrootheid plus een conclusie over de extra bijdrage."
          },
          "guidance": {
            "title": "Variabelenselectie en multicollineariteit",
            "focus": "Voor één toegevoegde variabele in geneste modellen op dezelfde data is de partiële F gelijk aan (SSR_groot − SSR_klein)/MSE_groot. Gebruik het uitgebreide model in de noemer.",
            "rules": [
              "Backward begint met alle kandidaatvariabelen; forward bouwt het model op. Na toevoegen of verwijderen wordt het model opnieuw geschat, omdat coëfficiënten en p-waarden kunnen veranderen.",
              "VIF = 1/Tolerance. De in SRA gebruikte signaleringsgrens is VIF > 10. Bij modelselectie moet je de opgegeven selectiegrens en de bijbehorende modeluitvoer volgen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 59-63: VIF, toetsen en modelvergelijking"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: modelbouw en multicollineariteit"
              }
            ]
          }
        },
        {
          "id": "mc-modelbouw-toepassing-3",
          "prompt": "Bij backward-selectie verdwijnt één variabele. Wat doe je vóór een volgende verwijderbeslissing?",
          "options": [
            "De oude p-waarden blijven gebruiken",
            "Het model opnieuw schatten en de nieuwe p-waarden beoordelen",
            "Alle gecorreleerde variabelen verwijderen",
            "De grootste B altijd verwijderen"
          ],
          "correct": 1,
          "level": 3,
          "steps": [
            "De geschatte bijdragen hangen af van de andere opgenomen voorspellers.",
            "Na verwijderen kunnen coëfficiënten en p-waarden veranderen.",
            "Na verwijdering wordt ieder overgebleven effect opnieuw geschat in de context van de resterende voorspellers. Dat kan de rangorde van p-waarden veranderen."
          ],
          "explanation": "De geschatte bijdragen hangen af van de andere opgenomen voorspellers. Na verwijderen kunnen coëfficiënten en p-waarden veranderen. Na verwijdering wordt ieder overgebleven effect opnieuw geschat in de context van de resterende voorspellers. Dat kan de rangorde van p-waarden veranderen.",
          "pattern": "Herken: Backward-selectie, één verwijderde variabele en een volgende verwijderbeslissing. → Betekenis: De oude p-waarden horen bij een andere combinatie van voorspellers. → Aanpak: Schat het resterende model opnieuw en gebruik zijn nieuwe uitvoer voor de volgende stap. → Gevraagd antwoord: De eerstvolgende modelbouwactie, geen keuze op basis van de oude rangorde.",
          "trap": "De grootte van B hangt ook af van de meeteenheid en is geen verwijdercriterium op zichzelf.",
          "optionExplanations": [
            "De oude p-waarden horen bij het eerdere model. Zij kunnen veranderen wanneer een voorspeller wordt verwijderd.",
            "Dit is de juiste volgende stap: schat het gewijzigde model en gebruik zijn nieuwe uitvoer voor de volgende beslissing.",
            "Correlatie alleen is geen reden om alle betreffende variabelen te verwijderen. De selectie beoordeelt hun bijdrage binnen het model.",
            "Een grote B kan door de meeteenheid ontstaan. De grootte van B op zichzelf is geen geldig verwijdercriterium."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formules 59–63, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "attentie",
              "locator": "Modelbouw en multicollineariteit, PDF-pagina 7–8",
              "page": 7
            },
            {
              "source": "exam2025",
              "locator": "Vraag 22–23, PDF-pagina 15",
              "page": 15
            },
            {
              "source": "boek-h10b",
              "page": 3,
              "locator": "Boek p. 305; oorspronkelijke PDF p. 323; uitsnede p. 3"
            }
          ],
          "recognition": {
            "signals": "Backward-selectie, één verwijderde variabele en een volgende verwijderbeslissing.",
            "meaning": "De oude p-waarden horen bij een andere combinatie van voorspellers.",
            "approach": "Schat het resterende model opnieuw en gebruik zijn nieuwe uitvoer voor de volgende stap.",
            "answer": "De eerstvolgende modelbouwactie, geen keuze op basis van de oude rangorde."
          },
          "guidance": {
            "title": "Variabelenselectie en multicollineariteit",
            "focus": "Een selectiebesluit verandert het geschatte model. Gebruik voor een volgende beslissing de nieuwe coëfficiënten en p-waarden, niet die van het vorige model.",
            "rules": [
              "Backward begint met alle kandidaatvariabelen; forward bouwt het model op. Na toevoegen of verwijderen wordt het model opnieuw geschat, omdat coëfficiënten en p-waarden kunnen veranderen.",
              "VIF = 1/Tolerance. De in SRA gebruikte signaleringsgrens is VIF > 10. Bij modelselectie moet je de opgegeven selectiegrens en de bijbehorende modeluitvoer volgen."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 4,
                "locator": "Formules 59-63: VIF, toetsen en modelvergelijking"
              },
              {
                "source": "attentie",
                "page": 7,
                "locator": "PDF p. 7-8: modelbouw en multicollineariteit"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "validatie",
      "title": "Valideren en SPSS-uitvoer lezen",
      "phase": "Verdieping",
      "lesson": "validatie",
      "signal": "Je beoordeelt voorspellingen op gegevens die niet voor het schatten zijn gebruikt.",
      "approach": "Bereken kwadratische voorspelfouten op de testset en onderscheid die van trainingsfouten.",
      "refs": [
        {
          "source": "formules",
          "locator": "Formule 64, PDF-pagina 4",
          "page": 4
        },
        {
          "source": "attentie",
          "locator": "Validatie, PDF-pagina 8–9",
          "page": 9
        },
        {
          "source": "spss",
          "locator": "SPSS-opgaven en uitwerkingen",
          "page": 1
        }
      ],
      "questions": [
        {
          "id": "mc-validatie-basis-1",
          "prompt": "Fouten op de testset: 2 en −4. Wat is MSPR?",
          "options": [
            "20",
            "2",
            "10"
          ],
          "correct": 2,
          "explanation": "MSPR is het gemiddelde van de gekwadrateerde voorspelfouten op de testset. Kwadrateer beide fouten: 2² = 4 en (−4)² = 16. Hun som is 20. De testset bevat twee waarnemingen, dus MSPR = 20/2 = 10.",
          "steps": [
            "MSPR is het gemiddelde van de gekwadrateerde voorspelfouten op de testset.",
            "Kwadrateer beide fouten: 2² = 4 en (−4)² = 16. Hun som is 20.",
            "De testset bevat twee waarnemingen, dus MSPR = 20/2 = 10."
          ],
          "pattern": "Herken: Voorspelfouten op een testset en de maat MSPR. → Betekenis: MSPR is de gemiddelde gekwadrateerde voorspelfout op nieuwe waarnemingen. → Aanpak: Kwadrateer alle testfouten, tel ze op en deel door het aantal testwaarnemingen. → Gevraagd antwoord: Een gemiddelde kwadratische fout; geen trainingsnoemer n − k − 1.",
          "trap": "Ook een negatieve fout krijgt een positief kwadraat; deel hier niet door residual df van het trainingsmodel.",
          "optionExplanations": [
            "20 is de som van de kwadraten. De letter M staat voor Mean, dus delen door twee ontbreekt nog.",
            "2 is niet het gemiddelde van de gekwadrateerde fouten. Voor MSPR moeten 4 en 16 worden gemiddeld.",
            "10 = (4 + 16)/2 is het gemiddelde kwadraat van de twee testfouten."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 64, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "attentie",
              "locator": "Validatie, PDF-pagina 8–9",
              "page": 9
            },
            {
              "source": "spss",
              "locator": "SPSS-opgaven en uitwerkingen",
              "page": 1
            }
          ],
          "recognition": {
            "signals": "Voorspelfouten op een testset en de maat MSPR.",
            "meaning": "MSPR is de gemiddelde gekwadrateerde voorspelfout op nieuwe waarnemingen.",
            "approach": "Kwadrateer alle testfouten, tel ze op en deel door het aantal testwaarnemingen.",
            "answer": "Een gemiddelde kwadratische fout; geen trainingsnoemer n − k − 1."
          },
          "level": 1,
          "guidance": {
            "title": "Uitvoer lezen en op nieuwe gegevens beoordelen",
            "focus": "Koppel iedere waarneming aan haar eigen voorspelling. Kwadrateer de fouten en deel de som door het aantal testwaarnemingen, niet door n − k − 1.",
            "rules": [
              "De vergelijking in oorspronkelijke eenheden gebruikt de kolom Unstandardized Coefficients B, inclusief Constant. In een ANOVA-tabel is Total df = n − 1.",
              "MSPR is het gemiddelde van (yᵢ − ŷᵢ)² op nieuwe testwaarnemingen. Deel door het aantal testwaarnemingen. Een model dat goed past op trainingsdata hoeft nog niet goed te voorspellen op nieuwe data."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 4,
                "locator": "Formule 64: gemiddelde kwadratische voorspelfout"
              },
              {
                "source": "attentie",
                "page": 8,
                "locator": "PDF p. 8-9: validatie"
              }
            ]
          }
        },
        {
          "id": "mc-validatie-basis-2",
          "prompt": "Waar staan de coëfficiënten voor de vergelijking?",
          "options": [
            "Coefficients → Unstandardized B",
            "Model Summary → R",
            "ANOVA → SS"
          ],
          "correct": 0,
          "explanation": "Een regressievergelijking in de oorspronkelijke eenheden gebruikt de ongestandaardiseerde coëfficiënten. Lees daarvoor de constante en hellingen uit Coefficients → Unstandardized Coefficients → B. ANOVA beschrijft de variatieverdeling; Model Summary beschrijft modelkwaliteit. Die tabellen leveren niet de benodigde B-coëfficiënten.",
          "steps": [
            "Een regressievergelijking in de oorspronkelijke eenheden gebruikt de ongestandaardiseerde coëfficiënten.",
            "Lees daarvoor de constante en hellingen uit Coefficients → Unstandardized Coefficients → B.",
            "ANOVA beschrijft de variatieverdeling; Model Summary beschrijft modelkwaliteit. Die tabellen leveren niet de benodigde B-coëfficiënten."
          ],
          "pattern": "Herken: “Coëfficiënten voor de vergelijking” in de regressie-uitvoer. → Betekenis: Een vergelijking in oorspronkelijke modeleenheden gebruikt ongestandaardiseerde coëfficiënten. → Aanpak: Zoek de kolom B in Coefficients, inclusief de constante. → Gevraagd antwoord: De juiste tabel en kolom, geen Beta-kolom of ANOVA-waarde.",
          "trap": "De gestandaardiseerde Beta hoort niet in een vergelijking met de oorspronkelijke eenheden.",
          "optionExplanations": [
            "Unstandardized B bevat de constante en hellingen die je in de vergelijking met de oorspronkelijke variabelen invult.",
            "R in Model Summary beschrijft de samenhang voor het model. Eén R geeft niet de afzonderlijke regressiecoëfficiënten.",
            "SS in ANOVA zijn kwadratensommen van variatie. Zij zijn geen constante of hellingscoëfficiënten."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 64, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "attentie",
              "locator": "Validatie, PDF-pagina 8–9",
              "page": 9
            },
            {
              "source": "spss",
              "locator": "SPSS-opgaven en uitwerkingen",
              "page": 1
            }
          ],
          "recognition": {
            "signals": "“Coëfficiënten voor de vergelijking” in de regressie-uitvoer.",
            "meaning": "Een vergelijking in oorspronkelijke modeleenheden gebruikt ongestandaardiseerde coëfficiënten.",
            "approach": "Zoek de kolom B in Coefficients, inclusief de constante.",
            "answer": "De juiste tabel en kolom, geen Beta-kolom of ANOVA-waarde."
          },
          "level": 1,
          "guidance": {
            "title": "Uitvoer lezen en op nieuwe gegevens beoordelen",
            "focus": "Voor de vergelijking lees je B in de Coefficients-tabel. Beta is gestandaardiseerd en de t- of Sig.-kolom is geen regressiecoëfficiënt.",
            "rules": [
              "De vergelijking in oorspronkelijke eenheden gebruikt de kolom Unstandardized Coefficients B, inclusief Constant. In een ANOVA-tabel is Total df = n − 1.",
              "MSPR is het gemiddelde van (yᵢ − ŷᵢ)² op nieuwe testwaarnemingen. Deel door het aantal testwaarnemingen. Een model dat goed past op trainingsdata hoeft nog niet goed te voorspellen op nieuwe data."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 4,
                "locator": "Formule 64: gemiddelde kwadratische voorspelfout"
              },
              {
                "source": "attentie",
                "page": 8,
                "locator": "PDF p. 8-9: validatie"
              }
            ]
          }
        },
        {
          "id": "mc-validatie-basis-3",
          "prompt": "De ANOVA-tabel heeft Total df = 49. Hoe groot is n?",
          "options": [
            "49",
            "50",
            "48"
          ],
          "correct": 1,
          "explanation": "In de ANOVA-tabel gelden voor de Total-rij n − 1 vrijheidsgraden. Als Total df = 49, dan is n − 1 = 49. Tel één op aan beide kanten: n = 50. Controle: 50 − 1 = 49.",
          "steps": [
            "In de ANOVA-tabel gelden voor de Total-rij n − 1 vrijheidsgraden.",
            "Als Total df = 49, dan is n − 1 = 49.",
            "Tel één op aan beide kanten: n = 50. Controle: 50 − 1 = 49."
          ],
          "pattern": "Herken: “Total df” in de ANOVA-tabel en gevraagd n. → Betekenis: De totale kwadratensom gebruikt n − 1 vrijheidsgraden. → Aanpak: Keer Total df = n − 1 om tot n = Total df + 1. → Gevraagd antwoord: Het aantal gebruikte waarnemingen, zonder aftrek voor k.",
          "trap": "Gebruik voor deze rij niet de formule n − k − 1; die hoort bij Residual.",
          "optionExplanations": [
            "49 is het gegeven aantal vrijheidsgraden, niet het aantal waarnemingen.",
            "50 klopt, omdat Total df = 50 − 1 = 49.",
            "48 trekt nog één af van de total df. Om n uit n − 1 te vinden moet je juist één optellen."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 64, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "attentie",
              "locator": "Validatie, PDF-pagina 8–9",
              "page": 9
            },
            {
              "source": "spss",
              "locator": "SPSS-opgaven en uitwerkingen",
              "page": 1
            }
          ],
          "recognition": {
            "signals": "“Total df” in de ANOVA-tabel en gevraagd n.",
            "meaning": "De totale kwadratensom gebruikt n − 1 vrijheidsgraden.",
            "approach": "Keer Total df = n − 1 om tot n = Total df + 1.",
            "answer": "Het aantal gebruikte waarnemingen, zonder aftrek voor k."
          },
          "level": 2,
          "guidance": {
            "title": "Uitvoer lezen en op nieuwe gegevens beoordelen",
            "focus": "De totale kwadratensom gebruikt afwijkingen rond een geschat gemiddelde. Daarom is Total df één kleiner dan n.",
            "rules": [
              "De vergelijking in oorspronkelijke eenheden gebruikt de kolom Unstandardized Coefficients B, inclusief Constant. In een ANOVA-tabel is Total df = n − 1.",
              "MSPR is het gemiddelde van (yᵢ − ŷᵢ)² op nieuwe testwaarnemingen. Deel door het aantal testwaarnemingen. Een model dat goed past op trainingsdata hoeft nog niet goed te voorspellen op nieuwe data."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 4,
                "locator": "Formule 64: gemiddelde kwadratische voorspelfout"
              },
              {
                "source": "attentie",
                "page": 8,
                "locator": "PDF p. 8-9: validatie"
              }
            ]
          }
        },
        {
          "id": "mc-validatie-toepassing-1",
          "prompt": "Testwaarden y zijn 10, 14, 20; voorspellingen zijn 12, 13, 17. Wat is MSPR?",
          "options": [
            "14/3 ≈ 4,67",
            "7",
            "2",
            "14"
          ],
          "correct": 0,
          "level": 2,
          "steps": [
            "Fouten zijn −2, 1, 3; kwadraten 4, 1, 9.",
            "MSPR = (4 + 1 + 9)/3 = 14/3.",
            "MSPR gebruikt het aantal testwaarnemingen in de noemer. De aftrek voor geschatte coëfficiënten hoort bij de trainings-MSE en wordt hier niet gebruikt."
          ],
          "explanation": "Fouten zijn −2, 1, 3; kwadraten 4, 1, 9. MSPR = (4 + 1 + 9)/3 = 14/3. MSPR gebruikt het aantal testwaarnemingen in de noemer. De aftrek voor geschatte coëfficiënten hoort bij de trainings-MSE en wordt hier niet gebruikt.",
          "pattern": "Herken: Werkelijke testwaarden én voorspellingen, met MSPR als vraag. → Betekenis: Eerst ontbreken de voorspelfouten; daarna volgt hun gemiddelde kwadraat. → Aanpak: Bereken per testwaarneming y − ŷ, kwadrateer, tel op en deel door het aantal testwaarden. → Gevraagd antwoord: De MSPR op de testset, niet de som van fouten of de trainings-MSE.",
          "trap": "Hier deel je niet door n − k − 1.",
          "optionExplanations": [
            "14/3 ≈ 4,67 is het gemiddelde van 4, 1 en 9 en dus de juiste MSPR.",
            "7 deelt de som 14 door twee. De testset bevat drie waarnemingen en vraagt hier geen noemer n − 1.",
            "2 is niet het gemiddelde van de kwadraten 4, 1 en 9. MSPR vraagt eerst kwadrateren en daarna middelen.",
            "14 is de som van de gekwadrateerde voorspelfouten. Delen door de drie testwaarnemingen ontbreekt."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 64, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "attentie",
              "locator": "Validatie, PDF-pagina 8–9",
              "page": 9
            },
            {
              "source": "spss",
              "locator": "SPSS-opgaven en uitwerkingen",
              "page": 1
            }
          ],
          "recognition": {
            "signals": "Werkelijke testwaarden én voorspellingen, met MSPR als vraag.",
            "meaning": "Eerst ontbreken de voorspelfouten; daarna volgt hun gemiddelde kwadraat.",
            "approach": "Bereken per testwaarneming y − ŷ, kwadrateer, tel op en deel door het aantal testwaarden.",
            "answer": "De MSPR op de testset, niet de som van fouten of de trainings-MSE."
          },
          "guidance": {
            "title": "Uitvoer lezen en op nieuwe gegevens beoordelen",
            "focus": "Koppel iedere waarneming aan haar eigen voorspelling. Kwadrateer de fouten en deel de som door het aantal testwaarnemingen, niet door n − k − 1.",
            "rules": [
              "De vergelijking in oorspronkelijke eenheden gebruikt de kolom Unstandardized Coefficients B, inclusief Constant. In een ANOVA-tabel is Total df = n − 1.",
              "MSPR is het gemiddelde van (yᵢ − ŷᵢ)² op nieuwe testwaarnemingen. Deel door het aantal testwaarnemingen. Een model dat goed past op trainingsdata hoeft nog niet goed te voorspellen op nieuwe data."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 4,
                "locator": "Formule 64: gemiddelde kwadratische voorspelfout"
              },
              {
                "source": "attentie",
                "page": 8,
                "locator": "PDF p. 8-9: validatie"
              }
            ]
          }
        },
        {
          "id": "mc-validatie-toepassing-2",
          "prompt": "Trainings-MSE = 4 en MSPR op een ongebruikte testset = 25. Wat is de belangrijkste aanwijzing?",
          "options": [
            "MSPR moet door 4 worden gedeeld om geldig te worden",
            "Het model voorspelt op nieuwe data veel slechter dan de training suggereert",
            "De testset bevat zeker fraude",
            "R² moet negatief zijn"
          ],
          "correct": 1,
          "level": 3,
          "steps": [
            "MSPR ligt veel hoger dan de trainings-MSE.",
            "Onderzoek waarom de voorspelling op ongebruikte data slechter is.",
            "Het verschil is een signaal over generalisatie: hoe goed het model op ongebruikte gegevens werkt. Het wijst niet zonder meer één oorzaak aan."
          ],
          "explanation": "MSPR ligt veel hoger dan de trainings-MSE. Onderzoek waarom de voorspelling op ongebruikte data slechter is. Het verschil is een signaal over generalisatie: hoe goed het model op ongebruikte gegevens werkt. Het wijst niet zonder meer één oorzaak aan.",
          "pattern": "Herken: Trainings-MSE tegenover MSPR op een expliciet ongebruikte testset. → Betekenis: De vergelijking gaat over generalisatie: prestaties op nieuwe gegevens. → Aanpak: Vergelijk de foutmaten en onderzoek een duidelijke verslechtering buiten de training. → Gevraagd antwoord: Een signaal over voorspelprestatie, zonder één specifieke oorzaak of fraude als bewezen te stellen.",
          "trap": "Dit patroon geeft een signaal, maar bewijst geen unieke oorzaak.",
          "optionExplanations": [
            "MSPR is al een gemiddelde kwadratische voorspelfout. Delen door de trainings-MSE kan een verhouding geven, maar is geen vereiste om MSPR geldig te maken.",
            "MSPR = 25 ligt duidelijk boven trainings-MSE = 4. Het model presteert op de ongebruikte testgegevens slechter dan op de training.",
            "Een grotere voorspelfout bewijst geen fraude. Onderzoek modelkeuze, gegevens en toepassingsgebied voordat je oorzaken benoemt.",
            "Uit deze twee foutmaten volgt niet dat R² negatief moet zijn. R² is een andere maat en is hier niet gegeven."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 64, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "attentie",
              "locator": "Validatie, PDF-pagina 8–9",
              "page": 9
            },
            {
              "source": "spss",
              "locator": "SPSS-opgaven en uitwerkingen",
              "page": 1
            }
          ],
          "recognition": {
            "signals": "Trainings-MSE tegenover MSPR op een expliciet ongebruikte testset.",
            "meaning": "De vergelijking gaat over generalisatie: prestaties op nieuwe gegevens.",
            "approach": "Vergelijk de foutmaten en onderzoek een duidelijke verslechtering buiten de training.",
            "answer": "Een signaal over voorspelprestatie, zonder één specifieke oorzaak of fraude als bewezen te stellen."
          },
          "guidance": {
            "title": "Uitvoer lezen en op nieuwe gegevens beoordelen",
            "focus": "Vergelijk trainingsfout en fout op ongebruikte testdata op dezelfde uitkomstschaal. Een veel grotere testfout is aanleiding om generaliseerbaarheid en modelkeuze te onderzoeken.",
            "rules": [
              "De vergelijking in oorspronkelijke eenheden gebruikt de kolom Unstandardized Coefficients B, inclusief Constant. In een ANOVA-tabel is Total df = n − 1.",
              "MSPR is het gemiddelde van (yᵢ − ŷᵢ)² op nieuwe testwaarnemingen. Deel door het aantal testwaarnemingen. Een model dat goed past op trainingsdata hoeft nog niet goed te voorspellen op nieuwe data."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 4,
                "locator": "Formule 64: gemiddelde kwadratische voorspelfout"
              },
              {
                "source": "attentie",
                "page": 8,
                "locator": "PDF p. 8-9: validatie"
              }
            ]
          }
        },
        {
          "id": "mc-validatie-toepassing-3",
          "prompt": "Je kiest uit twintig modellen steeds het model met de laagste fout op dezelfde testset. Is die set daarna nog een onafhankelijke eindcontrole?",
          "options": [
            "Alleen als MSPR nul is",
            "Ja, omdat hij testset heet",
            "Nee, de modelkeuze is inmiddels afgestemd op deze set",
            "Ja, zolang er geen intercept is"
          ],
          "correct": 2,
          "level": 3,
          "steps": [
            "De testresultaten zijn gebruikt om het model te selecteren.",
            "Daardoor is de uiteindelijke prestatie op die set geen onafhankelijke evaluatie meer.",
            "Een onafhankelijke eindcontrole verlangt gegevens die de modelkeuze niet hebben gestuurd. Herhaald selecteren op dezelfde uitkomsten maakt de beoordeling onderdeel van de modelbouw."
          ],
          "explanation": "De testresultaten zijn gebruikt om het model te selecteren. Daardoor is de uiteindelijke prestatie op die set geen onafhankelijke evaluatie meer. Een onafhankelijke eindcontrole verlangt gegevens die de modelkeuze niet hebben gestuurd. Herhaald selecteren op dezelfde uitkomsten maakt de beoordeling onderdeel van de modelbouw.",
          "pattern": "Herken: Herhaald modellen kiezen op basis van dezelfde “testset”. → Betekenis: Die gegevens sturen de modelkeuze en zijn daardoor onderdeel van de selectie geworden. → Aanpak: Beoordeel hoe de set feitelijk is gebruikt, niet alleen haar naam. → Gevraagd antwoord: Een oordeel over de onafhankelijkheid van de eindcontrole.",
          "trap": "Herhaald kiezen op dezelfde testset kan een te gunstig beeld geven.",
          "optionExplanations": [
            "Zelfs een MSPR van nul verandert niets aan het feit dat de set voor selectie is gebruikt. Foutgrootte en onafhankelijkheid zijn verschillende zaken.",
            "De naam testset garandeert geen onafhankelijkheid. Het feitelijke gebruik voor de modelkeuze is doorslaggevend.",
            "De selectie van het model is afgestemd op deze set. Daardoor is de prestatie op diezelfde gegevens geen onafhankelijke eindcontrole meer.",
            "Het wel of niet opnemen van een intercept herstelt de onafhankelijkheid van de modelselectie niet."
          ],
          "refs": [
            {
              "source": "formules",
              "locator": "Formule 64, PDF-pagina 4",
              "page": 4
            },
            {
              "source": "attentie",
              "locator": "Validatie, PDF-pagina 8–9",
              "page": 9
            },
            {
              "source": "spss",
              "locator": "SPSS-opgaven en uitwerkingen",
              "page": 1
            }
          ],
          "recognition": {
            "signals": "Herhaald modellen kiezen op basis van dezelfde “testset”.",
            "meaning": "Die gegevens sturen de modelkeuze en zijn daardoor onderdeel van de selectie geworden.",
            "approach": "Beoordeel hoe de set feitelijk is gebruikt, niet alleen haar naam.",
            "answer": "Een oordeel over de onafhankelijkheid van de eindcontrole."
          },
          "guidance": {
            "title": "Uitvoer lezen en op nieuwe gegevens beoordelen",
            "focus": "Een testset die herhaaldelijk voor modelkeuze wordt gebruikt, beïnvloedt die keuze. Voor een onafhankelijke eindcontrole zijn nog niet gebruikte gegevens nodig.",
            "rules": [
              "De vergelijking in oorspronkelijke eenheden gebruikt de kolom Unstandardized Coefficients B, inclusief Constant. In een ANOVA-tabel is Total df = n − 1.",
              "MSPR is het gemiddelde van (yᵢ − ŷᵢ)² op nieuwe testwaarnemingen. Deel door het aantal testwaarnemingen. Een model dat goed past op trainingsdata hoeft nog niet goed te voorspellen op nieuwe data."
            ],
            "refs": [
              {
                "source": "formules",
                "page": 4,
                "locator": "Formule 64: gemiddelde kwadratische voorspelfout"
              },
              {
                "source": "attentie",
                "page": 8,
                "locator": "PDF p. 8-9: validatie"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "tentamen",
      "title": "Van begrip naar een volledig tentamenantwoord",
      "phase": "Tentamen",
      "lesson": "tentamen",
      "signal": "Een open vraag combineert gegevens, methode, berekening en conclusie.",
      "approach": "Onderstreep eerst het gevraagde resultaat en plan de stappen die daarvoor nodig zijn.",
      "refs": [
        {
          "source": "programma",
          "locator": "Toetsing en literatuur, PDF-pagina 4–5",
          "page": 4
        },
        {
          "source": "exam2025",
          "locator": "Volledig tentamen en uitwerking",
          "page": 1
        },
        {
          "source": "exam2024",
          "locator": "Volledige uitwerking",
          "page": 1
        }
      ],
      "questions": [
        {
          "id": "mc-tentamen-basis-1",
          "prompt": "Wat doe je als eerste bij een nieuwe vraag?",
          "options": [
            "Vaststellen welke uitspraak wordt gevraagd",
            "De grootste tabel kiezen",
            "Een bekende formule invullen"
          ],
          "correct": 0,
          "explanation": "Lees eerst wat je moet opleveren: bijvoorbeeld een totaal, interval, toetsbeslissing of diagnose. Noteer daarna welke gegevens en methode nodig zijn om precies die uitspraak te onderbouwen. Een formule kiezen vóórdat het doel duidelijk is, vergroot de kans op een juiste berekening van de verkeerde grootheid.",
          "steps": [
            "Lees eerst wat je moet opleveren: bijvoorbeeld een totaal, interval, toetsbeslissing of diagnose.",
            "Noteer daarna welke gegevens en methode nodig zijn om precies die uitspraak te onderbouwen.",
            "Een formule kiezen vóórdat het doel duidelijk is, vergroot de kans op een juiste berekening van de verkeerde grootheid."
          ],
          "pattern": "Herken: Een nieuwe vraag kan een waarde, methode, toets of gemotiveerde conclusie verlangen. → Betekenis: Het gevraagde eindresultaat bepaalt welke gegevens en bewerkingen relevant zijn. → Aanpak: Markeer eerst het vraagwerkwoord en de grootheid of beslissing die je moet opleveren. → Gevraagd antwoord: Een passende eerste aanpakstap voordat je een formule of tabel kiest.",
          "trap": "De opvallendste tabel of bekendste formule hoeft niet bij de vraag te horen.",
          "optionExplanations": [
            "Dit is de juiste start: de verlangde uitspraak bepaalt de methode, benodigde gegevens en vorm van de conclusie.",
            "De omvang van een tabel zegt niet of zij relevant is. Selecteer de tabel op basis van de gevraagde analyse.",
            "Een bekende formule kan een andere grootheid berekenen dan gevraagd. Bepaal eerst het doel van de vraag."
          ],
          "refs": [
            {
              "source": "programma",
              "locator": "Toetsing en literatuur, PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Volledig tentamen en uitwerking",
              "page": 1
            },
            {
              "source": "exam2024",
              "locator": "Volledige uitwerking",
              "page": 1
            }
          ],
          "recognition": {
            "signals": "Een nieuwe vraag kan een waarde, methode, toets of gemotiveerde conclusie verlangen.",
            "meaning": "Het gevraagde eindresultaat bepaalt welke gegevens en bewerkingen relevant zijn.",
            "approach": "Markeer eerst het vraagwerkwoord en de grootheid of beslissing die je moet opleveren.",
            "answer": "Een passende eerste aanpakstap voordat je een formule of tabel kiest."
          },
          "level": 1,
          "guidance": {
            "title": "Van de vraag naar een onderbouwd antwoord",
            "focus": "Lees het werkwoord en het doel van de vraag voordat je een bekende formule kiest. Noteer welke grootheid of conclusie je uiteindelijk moet geven.",
            "rules": [
              "Benoem wat gevraagd wordt, selecteer de relevante casusgegevens en kies daarna de methode. Maak onderscheid tussen een totaal en een uitbreiding, een puntschatting en een interval, en een signaal en bewijs.",
              "Een volledig antwoord bevat berekening of relevante uitvoer, een conclusie in de context van de casus en een eventuele vervolgactie. Alleen een formule noemen of een keuze aankruisen oefent niet de hele open uitwerking."
            ],
            "refs": [
              {
                "source": "programma",
                "page": 4,
                "locator": "PDF p. 4-5: toetsing en toepassing van de leerstof"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: bij analyses uitvoer, conclusie en remedie"
              }
            ]
          }
        },
        {
          "id": "mc-tentamen-basis-2",
          "prompt": "Wat hoort bij een volledige regressiediagnose?",
          "options": [
            "Alleen ja of nee",
            "Tabel/afbeelding, berekening of signaal, conclusie en remedie",
            "Alleen de p-waarde"
          ],
          "correct": 1,
          "explanation": "Een diagnose moet controleerbaar laten zien op welke uitvoer je je baseert. Noem de relevante tabel of afbeelding, de gebruikte grens/berekening of het waargenomen patroon en de inhoudelijke conclusie. Geef bij een vastgesteld probleem een passende, onderbouwde remedie. Onderzoek daarna of de aanpassing het probleem verhelpt.",
          "steps": [
            "Een diagnose moet controleerbaar laten zien op welke uitvoer je je baseert.",
            "Noem de relevante tabel of afbeelding, de gebruikte grens/berekening of het waargenomen patroon en de inhoudelijke conclusie.",
            "Geef bij een vastgesteld probleem een passende, onderbouwde remedie. Onderzoek daarna of de aanpassing het probleem verhelpt."
          ],
          "pattern": "Herken: Het woord “volledige” bij regressiediagnose. → Betekenis: De vraag gaat om de onderdelen van een navolgbaar diagnoseantwoord. → Aanpak: Verbind de gebruikte tabel of afbeelding aan een berekening of signaal, trek de conclusie en geef bij een probleem een onderbouwde remedie. → Gevraagd antwoord: Een onderbouwde diagnose met passende vervolgstap, geen los getal of ja/nee.",
          "trap": "Een los getal of ja/nee laat niet zien of je de juiste aanname hebt beoordeeld.",
          "optionExplanations": [
            "Alleen ja of nee mist de gebruikte uitvoer, beoordelingsregel en onderbouwing van de conclusie.",
            "Deze onderdelen maken de diagnose navolgbaar. Een remedie is relevant wanneer uit de diagnose een probleem blijkt.",
            "Een p-waarde krijgt pas betekenis naast de nulhypothese en α. Bovendien worden sommige diagnoses met grafieken of andere grenzen beoordeeld."
          ],
          "refs": [
            {
              "source": "programma",
              "locator": "Toetsing en literatuur, PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Volledig tentamen en uitwerking",
              "page": 1
            },
            {
              "source": "exam2024",
              "locator": "Volledige uitwerking",
              "page": 1
            }
          ],
          "recognition": {
            "signals": "Het woord “volledige” bij regressiediagnose.",
            "meaning": "De vraag gaat om de onderdelen van een navolgbaar diagnoseantwoord.",
            "approach": "Verbind de gebruikte tabel of afbeelding aan een berekening of signaal, trek de conclusie en geef bij een probleem een onderbouwde remedie.",
            "answer": "Een onderbouwde diagnose met passende vervolgstap, geen los getal of ja/nee."
          },
          "level": 1,
          "guidance": {
            "title": "Van de vraag naar een onderbouwd antwoord",
            "focus": "Vermeld bij een diagnose de relevante tabel/grafiek en waarden, de conclusie, en waar nodig hypothesen en een passende remedie.",
            "rules": [
              "Benoem wat gevraagd wordt, selecteer de relevante casusgegevens en kies daarna de methode. Maak onderscheid tussen een totaal en een uitbreiding, een puntschatting en een interval, en een signaal en bewijs.",
              "Een volledig antwoord bevat berekening of relevante uitvoer, een conclusie in de context van de casus en een eventuele vervolgactie. Alleen een formule noemen of een keuze aankruisen oefent niet de hele open uitwerking."
            ],
            "refs": [
              {
                "source": "programma",
                "page": 4,
                "locator": "PDF p. 4-5: toetsing en toepassing van de leerstof"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: bij analyses uitvoer, conclusie en remedie"
              }
            ]
          }
        },
        {
          "id": "mc-tentamen-basis-3",
          "prompt": "Je hebt alle checks goed. Ben je daarmee klaar?",
          "options": [
            "Alleen als je alle formules uit je hoofd kent",
            "Ja, een echt tentamen is overbodig",
            "Nee, werk ook volledige open tentamenvragen zelfstandig uit"
          ],
          "correct": 2,
          "explanation": "Begripchecks laten zien of je afzonderlijke begrippen en stappen herkent. Open tentamenvragen vragen daarnaast om zelf gegevens te selecteren, berekeningen te combineren en een volledige conclusie te formuleren. Werk daarom ook volledige open opgaven zelfstandig uit en vergelijk daarna je redenering met de uitwerking.",
          "steps": [
            "Begripchecks laten zien of je afzonderlijke begrippen en stappen herkent.",
            "Open tentamenvragen vragen daarnaast om zelf gegevens te selecteren, berekeningen te combineren en een volledige conclusie te formuleren.",
            "Werk daarom ook volledige open opgaven zelfstandig uit en vergelijk daarna je redenering met de uitwerking."
          ],
          "pattern": "Herken: Alle korte checks zijn goed, maar gevraagd wordt of de voorbereiding klaar is. → Betekenis: Herkenning in korte vragen is iets anders dan zelfstandig een volledige open opgave uitwerken. → Aanpak: Beoordeel ook methodekeuze, tussenstappen en conclusie in complete tentamenopgaven. → Gevraagd antwoord: Een vervolgstap om toepassen te oefenen, geen garantie van beheersing door alleen check-scores.",
          "trap": "Een hoge score op korte checks is geen vervanging voor oefenen met samenhang en eigen formulering.",
          "optionExplanations": [
            "Formules kennen is slechts een onderdeel. Je moet ze ook passend kiezen, correct toepassen en de uitkomst in de casus uitleggen.",
            "Korte checks dekken niet alle vaardigheden van een open tentamen. Zelf een complete redenering opbouwen blijft nodig.",
            "Zelfstandig open vragen uitwerken oefent de samenhang, methodekeuze en verantwoording die niet volledig in meerkeuzechecks zitten."
          ],
          "refs": [
            {
              "source": "programma",
              "locator": "Toetsing en literatuur, PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Volledig tentamen en uitwerking",
              "page": 1
            },
            {
              "source": "exam2024",
              "locator": "Volledige uitwerking",
              "page": 1
            }
          ],
          "recognition": {
            "signals": "Alle korte checks zijn goed, maar gevraagd wordt of de voorbereiding klaar is.",
            "meaning": "Herkenning in korte vragen is iets anders dan zelfstandig een volledige open opgave uitwerken.",
            "approach": "Beoordeel ook methodekeuze, tussenstappen en conclusie in complete tentamenopgaven.",
            "answer": "Een vervolgstap om toepassen te oefenen, geen garantie van beheersing door alleen check-scores."
          },
          "level": 2,
          "guidance": {
            "title": "Van de vraag naar een onderbouwd antwoord",
            "focus": "Goede begripchecks tonen niet automatisch dat je een open casus zelfstandig kunt uitwerken. Oefen ook gegevensselectie, berekening en onderbouwing zonder antwoordopties.",
            "rules": [
              "Benoem wat gevraagd wordt, selecteer de relevante casusgegevens en kies daarna de methode. Maak onderscheid tussen een totaal en een uitbreiding, een puntschatting en een interval, en een signaal en bewijs.",
              "Een volledig antwoord bevat berekening of relevante uitvoer, een conclusie in de context van de casus en een eventuele vervolgactie. Alleen een formule noemen of een keuze aankruisen oefent niet de hele open uitwerking."
            ],
            "refs": [
              {
                "source": "programma",
                "page": 4,
                "locator": "PDF p. 4-5: toetsing en toepassing van de leerstof"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: bij analyses uitvoer, conclusie en remedie"
              }
            ]
          }
        },
        {
          "id": "mc-tentamen-toepassing-1",
          "prompt": "De vraag luidt: “Beoordeel normaliteit en motiveer met de uitvoer.” Welk antwoord sluit het best aan?",
          "options": [
            "Alleen: R² = 0,80",
            "Noem de normaliteitstoets, p ten opzichte van α en de conclusie over residuen",
            "Bereken altijd de steekproefomvang",
            "Alleen: nee"
          ],
          "correct": 1,
          "level": 2,
          "steps": [
            "Bepaal welke aanname wordt getoetst.",
            "Verwijs naar de juiste uitvoer en verbind de p-waarde met je conclusie.",
            "Een volledige conclusie noemt waarover de normaliteitstoets gaat: de residuen. Verbind de gekozen toets, p-waarde en α expliciet aan die aanname."
          ],
          "explanation": "Bepaal welke aanname wordt getoetst. Verwijs naar de juiste uitvoer en verbind de p-waarde met je conclusie. Een volledige conclusie noemt waarover de normaliteitstoets gaat: de residuen. Verbind de gekozen toets, p-waarde en α expliciet aan die aanname.",
          "pattern": "Herken: “Beoordeel normaliteit” én “motiveer met de uitvoer”. → Betekenis: De vraag vraagt een onderbouwde beslissing over residunormaliteit. → Aanpak: Noem de passende toets, vergelijk p met α en verbind de uitkomst aan de residuen. → Gevraagd antwoord: Een controleerbare toetsconclusie met uitvoerbewijs, geen losse ja/nee of R².",
          "trap": "R² is geen normaliteitstoets.",
          "optionExplanations": [
            "R² beschrijft verklaarde variatie. Het is geen maat waarmee je normaliteit van residuen beoordeelt.",
            "Dit antwoord noemt de juiste toetsinformatie en maakt de conclusie over de residuen controleerbaar.",
            "Een steekproefomvang berekenen beantwoordt niet de gevraagde beoordeling van normaliteit aan de hand van de uitvoer.",
            "Alleen “nee” laat niet zien welke aanname, uitvoer of beslisregel is gebruikt en voldoet niet aan “motiveer”."
          ],
          "refs": [
            {
              "source": "programma",
              "locator": "Toetsing en literatuur, PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Volledig tentamen en uitwerking",
              "page": 1
            },
            {
              "source": "exam2024",
              "locator": "Volledige uitwerking",
              "page": 1
            }
          ],
          "recognition": {
            "signals": "“Beoordeel normaliteit” én “motiveer met de uitvoer”.",
            "meaning": "De vraag vraagt een onderbouwde beslissing over residunormaliteit.",
            "approach": "Noem de passende toets, vergelijk p met α en verbind de uitkomst aan de residuen.",
            "answer": "Een controleerbare toetsconclusie met uitvoerbewijs, geen losse ja/nee of R²."
          },
          "guidance": {
            "title": "Van de vraag naar een onderbouwd antwoord",
            "focus": "Vermeld bij een diagnose de relevante tabel/grafiek en waarden, de conclusie, en waar nodig hypothesen en een passende remedie.",
            "rules": [
              "Benoem wat gevraagd wordt, selecteer de relevante casusgegevens en kies daarna de methode. Maak onderscheid tussen een totaal en een uitbreiding, een puntschatting en een interval, en een signaal en bewijs.",
              "Een volledig antwoord bevat berekening of relevante uitvoer, een conclusie in de context van de casus en een eventuele vervolgactie. Alleen een formule noemen of een keuze aankruisen oefent niet de hele open uitwerking."
            ],
            "refs": [
              {
                "source": "programma",
                "page": 4,
                "locator": "PDF p. 4-5: toetsing en toepassing van de leerstof"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: bij analyses uitvoer, conclusie en remedie"
              }
            ]
          }
        },
        {
          "id": "mc-tentamen-toepassing-2",
          "prompt": "Je berekent correct een totale benodigde n van 521. Er zijn al 180 controles uitgevoerd. De vraag vraagt de uitbreiding. Wat is een volledig antwoord?",
          "options": [
            "701 controles",
            "521 controles",
            "341 extra controles; totaal 521",
            "180 extra controles"
          ],
          "correct": 2,
          "level": 3,
          "steps": [
            "De totale behoefte is 521.",
            "Er zijn al 180 gedaan, dus 521 − 180 = 341 extra.",
            "Vermeld zowel het extra aantal als het totaal wanneer dat de uitkomst verduidelijkt. Dan is zichtbaar dat de eerdere controles niet dubbel zijn geteld."
          ],
          "explanation": "De totale behoefte is 521. Er zijn al 180 gedaan, dus 521 − 180 = 341 extra. Vermeld zowel het extra aantal als het totaal wanneer dat de uitkomst verduidelijkt. Dan is zichtbaar dat de eerdere controles niet dubbel zijn geteld.",
          "pattern": "Herken: Een al berekende totale n, uitgevoerde controles en expliciet “de uitbreiding”. → Betekenis: De juiste tussenuitkomst is nog niet het gevraagde extra aantal. → Aanpak: Trek het bestaande aantal van de totale behoefte af en controleer de optelsom terug. → Gevraagd antwoord: Extra controles met eventueel het nieuwe totaal ter verduidelijking.",
          "trap": "Een juiste tussenuitkomst kan nog steeds niet het gevraagde eindantwoord zijn.",
          "optionExplanations": [
            "701 telt 180 op bij de totale behoefte 521. Daarmee tel je de bestaande controles dubbel.",
            "521 is de totale benodigde omvang. Het zegt niet hoeveel controles boven op de bestaande 180 nodig zijn.",
            "341 extra plus 180 al uitgevoerd is samen 521. Dit beantwoordt de gevraagde uitbreiding en controleert het totaal.",
            "180 is het aantal al uitgevoerde controles. Dat is niet het verschil tussen de totale behoefte en het bestaande aantal."
          ],
          "refs": [
            {
              "source": "programma",
              "locator": "Toetsing en literatuur, PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Volledig tentamen en uitwerking",
              "page": 1
            },
            {
              "source": "exam2024",
              "locator": "Volledige uitwerking",
              "page": 1
            }
          ],
          "recognition": {
            "signals": "Een al berekende totale n, uitgevoerde controles en expliciet “de uitbreiding”.",
            "meaning": "De juiste tussenuitkomst is nog niet het gevraagde extra aantal.",
            "approach": "Trek het bestaande aantal van de totale behoefte af en controleer de optelsom terug.",
            "answer": "Extra controles met eventueel het nieuwe totaal ter verduidelijking."
          },
          "guidance": {
            "title": "Van de vraag naar een onderbouwd antwoord",
            "focus": "Bij uitbreiding vraagt men het nog te verrichten werk. Maak in het antwoord het onderscheid tussen vereist totaal en extra controles zichtbaar.",
            "rules": [
              "Benoem wat gevraagd wordt, selecteer de relevante casusgegevens en kies daarna de methode. Maak onderscheid tussen een totaal en een uitbreiding, een puntschatting en een interval, en een signaal en bewijs.",
              "Een volledig antwoord bevat berekening of relevante uitvoer, een conclusie in de context van de casus en een eventuele vervolgactie. Alleen een formule noemen of een keuze aankruisen oefent niet de hele open uitwerking."
            ],
            "refs": [
              {
                "source": "programma",
                "page": 4,
                "locator": "PDF p. 4-5: toetsing en toepassing van de leerstof"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: bij analyses uitvoer, conclusie en remedie"
              }
            ]
          }
        },
        {
          "id": "mc-tentamen-toepassing-3",
          "prompt": "Een vraag geeft een interval en vraagt of een opvallende realisatie fraude bewijst. Welke redenering is passend?",
          "options": [
            "De realisatie moet altijd vervangen worden",
            "Buiten het interval bewijst fraude",
            "Binnen het interval sluit fraude uit",
            "Een afwijking kan aanleiding zijn voor onderzoek, maar het interval bewijst geen oorzaak"
          ],
          "correct": 3,
          "level": 3,
          "steps": [
            "Een interval beschrijft statistische onzekerheid onder modelaannames.",
            "Een afwijking verklaart niet waarom de waarneming afwijkt.",
            "Statistische afwijking en inhoudelijke oorzaak moeten afzonderlijk worden beoordeeld. Het interval is een hulpmiddel om een waarneming te onderzoeken."
          ],
          "explanation": "Een interval beschrijft statistische onzekerheid onder modelaannames. Een afwijking verklaart niet waarom de waarneming afwijkt. Statistische afwijking en inhoudelijke oorzaak moeten afzonderlijk worden beoordeeld. Het interval is een hulpmiddel om een waarneming te onderzoeken.",
          "pattern": "Herken: Een interval, een opvallende realisatie en het werkwoord “bewijst” bij fraude. → Betekenis: Een statistische grens beschrijft onzekerheid en bevat geen bewijs over intentie of oorzaak. → Aanpak: Onderscheid een afwijkingssignaal van een inhoudelijke fraudeverklaring. → Gevraagd antwoord: Een beperkte statistische conclusie met aanleiding tot onderzoek, geen automatische fraudebeslissing.",
          "trap": "Een statistische grens is geen automatische fraudebeslissing.",
          "optionExplanations": [
            "Een opvallende realisatie vervangen zonder onderbouwing verandert de gegevens. Eerst moet de oorzaak en juistheid worden onderzocht.",
            "Een waarde buiten een interval kan opvallend zijn, maar het interval bevat geen bewijs over intentie of oorzaak.",
            "Een waarde binnen het interval sluit fraude niet uit. Het interval beoordeelt modelmatige plausibiliteit, niet de herkomst van de waarneming.",
            "Dit onderscheidt het statistische signaal van een inhoudelijke oorzaak. Onderzoek is mogelijk passend, maar fraude volgt niet automatisch."
          ],
          "refs": [
            {
              "source": "programma",
              "locator": "Toetsing en literatuur, PDF-pagina 4–5",
              "page": 4
            },
            {
              "source": "exam2025",
              "locator": "Volledig tentamen en uitwerking",
              "page": 1
            },
            {
              "source": "exam2024",
              "locator": "Volledige uitwerking",
              "page": 1
            }
          ],
          "recognition": {
            "signals": "Een interval, een opvallende realisatie en het werkwoord “bewijst” bij fraude.",
            "meaning": "Een statistische grens beschrijft onzekerheid en bevat geen bewijs over intentie of oorzaak.",
            "approach": "Onderscheid een afwijkingssignaal van een inhoudelijke fraudeverklaring.",
            "answer": "Een beperkte statistische conclusie met aanleiding tot onderzoek, geen automatische fraudebeslissing."
          },
          "guidance": {
            "title": "Van de vraag naar een onderbouwd antwoord",
            "focus": "Een afwijkend resultaat wijst op nadere controle. Een statistisch interval kan op zichzelf geen specifieke oorzaak, zoals fraude, bewijzen.",
            "rules": [
              "Benoem wat gevraagd wordt, selecteer de relevante casusgegevens en kies daarna de methode. Maak onderscheid tussen een totaal en een uitbreiding, een puntschatting en een interval, en een signaal en bewijs.",
              "Een volledig antwoord bevat berekening of relevante uitvoer, een conclusie in de context van de casus en een eventuele vervolgactie. Alleen een formule noemen of een keuze aankruisen oefent niet de hele open uitwerking."
            ],
            "refs": [
              {
                "source": "programma",
                "page": 4,
                "locator": "PDF p. 4-5: toetsing en toepassing van de leerstof"
              },
              {
                "source": "attentie",
                "page": 5,
                "locator": "PDF p. 5-6: bij analyses uitvoer, conclusie en remedie"
              }
            ]
          }
        }
      ]
    }
  ]
};
