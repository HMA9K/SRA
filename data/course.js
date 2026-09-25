window.SRA = {
  "lessons": [
    {
      "id": "beginnen",
      "title": "Van losse waarneming naar uitspraak",
      "phase": "Basis",
      "intro": "Een accountant kan niet altijd alles controleren. Statistiek helpt om met een deel van de gegevens een onderbouwde uitspraak over het geheel te doen.",
      "goals": [
        "Populatie en steekproef uit elkaar houden",
        "De letters in een formule lezen",
        "Schatten onderscheiden van toetsen"
      ],
      "sections": [
        {
          "title": "SET-opfrisser: populatie en een eerlijke steekproef",
          "html": "<p>Een parameter zoals μ beschrijft de populatie; een steekproefgemiddelde schat die parameter. Een aselecte selectie geeft de posten de voorgeschreven trekkingskansen. Een grotere selectieve steekproef kan nog steeds systematisch verkeerd uitkomen. In SRA bepaal je eerst welke populatie en periode je onderzoekt en welke selectie bij de uitspraak past.</p>"
        },
        {
          "title": "Begin met een concrete vraag",
          "html": "<p>Stel: in een magazijn liggen 1.000 artikelen. Je wilt de totale werkelijke waarde weten. Alles controleren kost tijd. Je onderzoekt 100 willekeurig gekozen artikelen en gebruikt die informatie voor een schatting van de hele voorraad. De 1.000 artikelen vormen de <strong>populatie</strong>: de volledige verzameling waarover je iets wilt zeggen. De 100 gecontroleerde artikelen vormen de <strong>steekproef</strong>.</p><p>Een <strong>waarneming</strong> is één vastgelegde uitkomst, bijvoorbeeld de werkelijke waarde van één artikel. Een <strong>variabele</strong> is wat je meet, zoals waarde, salaris of leeftijd. Leg eerst vast wat één waarneming is, wat je meet en in welke eenheid.</p>"
        },
        {
          "title": "Een klein woordenboek voor formules",
          "html": "<table><caption>Een klein woordenboek voor formules</caption><tr><th scope=\"col\">Symbool</th><th scope=\"col\">Betekenis</th></tr><tr><td>N / n</td><td>Aantal elementen in de populatie / steekproef</td></tr><tr><td>wᵢ / bᵢ</td><td>Werkelijke waarde / boekwaarde van artikel i</td></tr><tr><td>W / B</td><td>Totale werkelijke waarde / totale boekwaarde in de populatie</td></tr><tr><td>w̄</td><td>Gemiddelde werkelijke waarde in de steekproef</td></tr><tr><td>Ŵ</td><td>Schatting van de totale werkelijke waarde; het dakje betekent geschat</td></tr><tr><td>Σ</td><td>Tel alle bedoelde waarden op</td></tr></table><p>Een <strong>parameter</strong> beschrijft de populatie, bijvoorbeeld het onbekende gemiddelde μ (mu). Een <strong>steekproefgrootheid</strong>, zoals het gemiddelde w̄, bereken je uit de onderzochte gegevens. Je kent de uitkomst van de steekproef; de uitspraak over de populatie blijft onzeker.</p>"
        },
        {
          "title": "Twee soorten vragen",
          "html": "<p><strong>Schatten:</strong> hoe groot is de werkelijke voorraadwaarde? Je geeft een geschat bedrag met een onzekerheidsmarge. <strong>Toetsen:</strong> ondersteunen de gegevens de bewering dat salaris stijgt met leeftijd? Je formuleert hypothesen en beslist of de gegevens voldoende bewijs tegen de nulhypothese geven.</p><p>Een grotere steekproef kan de toevallige onzekerheid verkleinen. Een verkeerde selectie los je daarmee niet op. Alleen de goedkoopste artikelen onderzoeken geeft geen goede basis voor een uitspraak over alle artikelen.</p>"
        }
      ],
      "example": {
        "title": "De eerste vertaling naar cijfers",
        "steps": [
          "Er zijn 1.000 artikelen: N = 1.000. Je controleert 100 artikelen: n = 100.",
          "De totale werkelijke waarde van die 100 artikelen is € 8.000: Σw = 8.000.",
          "Gemiddelde per gecontroleerd artikel: w̄ = 8.000 / 100 = € 80.",
          "Met de directe schatter wordt het geschatte totaal: Ŵ = 1.000 × 80 = € 80.000. Dit is nog geen interval."
        ]
      },
      "pitfalls": [
        "N en n verwisselen verandert de betekenis van je berekening.",
        "De som van de steekproef is niet de totale populatiewaarde."
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
      "questions": [
        {
          "id": "beginnen-1",
          "prompt": "Je onderzoekt 80 van 2.000 facturen. Wat is n?",
          "options": [
            "2.000",
            "80",
            "1.920"
          ],
          "correct": 1,
          "explanation": "De populatie bestaat uit alle 2.000 facturen waarover je een uitspraak wilt doen; daarom is N = 2.000. De steekproef bestaat uit de 80 facturen die werkelijk zijn onderzocht. De kleine letter n staat voor dat aantal: n = 80. De 1.920 overige facturen behoren wel tot de populatie, maar niet tot de onderzochte steekproef.",
          "steps": [
            "De populatie bestaat uit alle 2.000 facturen waarover je een uitspraak wilt doen; daarom is N = 2.000.",
            "De steekproef bestaat uit de 80 facturen die werkelijk zijn onderzocht. De kleine letter n staat voor dat aantal: n = 80.",
            "De 1.920 overige facturen behoren wel tot de populatie, maar niet tot de onderzochte steekproef."
          ],
          "pattern": "Herken: “80 van 2.000 facturen” en de kleine letter n. → Betekenis: Er zijn twee aantallen: onderzochte posten en de volledige populatie. → Aanpak: Koppel n aan de werkelijk onderzochte posten en N aan alle posten. → Gevraagd antwoord: Een aantal onderzochte facturen, geen bedrag of populatieomvang.",
          "trap": "Verwissel de populatieomvang N niet met de steekproefomvang n.",
          "optionExplanations": [
            "2.000 is N: het aantal facturen in de volledige populatie. Voor n tel je uitsluitend de onderzochte facturen.",
            "80 is het daadwerkelijk onderzochte aantal. Daarmee is dit de steekproefomvang n.",
            "1.920 = 2.000 − 80 is het aantal niet-onderzochte facturen. Dat is noch n, noch de volledige N."
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
          }
        },
        {
          "id": "beginnen-2",
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
          }
        },
        {
          "id": "beginnen-3",
          "prompt": "Welke vraag vraagt om een schatting?",
          "options": [
            "Hoe groot is de totale werkelijke voorraadwaarde?",
            "Is er een significant stijgend verband?",
            "Kunnen we H₀ verwerpen?"
          ],
          "correct": 0,
          "explanation": "Bij schatten zoek je de omvang van een onbekende grootheid, bijvoorbeeld het totale bedrag W. Bij toetsen beoordeel je een bewering met H₀ en H₁ en onderzoek je of er voldoende bewijs tegen H₀ is. “Hoe groot is de totale werkelijke voorraadwaarde?” vraagt dus een puntschatting, eventueel aangevuld met een betrouwbaarheidsinterval.",
          "steps": [
            "Bij schatten zoek je de omvang van een onbekende grootheid, bijvoorbeeld het totale bedrag W.",
            "Bij toetsen beoordeel je een bewering met H₀ en H₁ en onderzoek je of er voldoende bewijs tegen H₀ is.",
            "“Hoe groot is de totale werkelijke voorraadwaarde?” vraagt dus een puntschatting, eventueel aangevuld met een betrouwbaarheidsinterval."
          ],
          "pattern": "Herken: Vergelijk in de antwoordopties “hoe groot”, “significant” en “H₀ verwerpen”. → Betekenis: Een omvang bepalen hoort bij schatten; bewijs tegen een bewering beoordelen hoort bij toetsen. → Aanpak: Zoek de vraag die een onbekende populatiegrootheid wil benaderen. → Gevraagd antwoord: De vraag naar een geschatte waarde, eventueel met een onzekerheidsinterval.",
          "trap": "Kies niet eerst een formule: stel eerst vast welk soort uitspraak de vraag verlangt.",
          "optionExplanations": [
            "Hier wordt een onbekend bedrag gevraagd. Een schatter levert een geschat totaal; een interval voegt informatie over onzekerheid toe.",
            "Het woord significant vraagt of de data voldoende bewijs voor een stijgend verband leveren. Dat is een hypothesetoets.",
            "Het verwerpen van H₀ is een toetsbeslissing. Je zoekt daarbij geen schatting van een voorraadbedrag."
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
          }
        }
      ],
      "lab": "populatie",
      "exam": null,
      "prerequisites": [
        "Geen statistische voorkennis nodig: begin hier met populatie, steekproef en waarneming.",
        "SET is de door SRA veronderstelde voorkennis. De benodigde basis wordt in deze leerroute opnieuw uitgelegd."
      ],
      "formulaGuide": [
        {
          "title": "Van steekproefsom naar gemiddelde en geschat totaal",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik deze eerste relaties om cijfers aan hun betekenis te koppelen: je kent een steekproefsom en wilt eerst het gemiddelde per gecontroleerde post weten. Met de populatieomvang kun je dat gemiddelde daarna omrekenen naar een directe totaalschatting.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Gemiddelde in de steekproef</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Gemiddelde in de steekproef\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mo>∑</mo><mi>w</mi></mrow><mrow><mi>n</mi></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Puntschatting</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Puntschatting\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>MPU</mtext></msub><mo>=</mo><mi>N</mi><mo>×</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>Σ betekent optellen. Σw is de som van de werkelijke waarden in de steekproef. n is het aantal gecontroleerde posten. w̄ is hun gemiddelde. N is het aantal posten in de gehele populatie. Het dakje op Ŵ betekent dat het om een schatting gaat.</p><h3>Zo reken je stap voor stap</h3><ol><li>Schrijf eerst op wat één post is en in welke eenheid de waarde wordt gemeten.</li><li>Deel de som van de gecontroleerde waarden door n. De uitkomst is een bedrag per post.</li><li>Vermenigvuldig dit gemiddelde met N voor een schatting van het populatietotaal.</li><li>Noem de uitkomst een puntschatting. Een betrouwbaarheidsinterval vraagt extra informatie over spreiding en betrouwbaarheid.</li></ol><h3>De eerste vertaling naar cijfers</h3><ol><li>Er zijn 1.000 artikelen: N = 1.000. Je controleert 100 artikelen: n = 100.</li><li>De totale werkelijke waarde van die 100 artikelen is € 8.000: Σw = 8.000.</li><li>Gemiddelde per gecontroleerd artikel: w̄ = 8.000 / 100 = € 80.</li><li>Met de directe schatter wordt het geschatte totaal: Ŵ = 1.000 × 80 = € 80.000. Dit is nog geen interval.</li></ol><p class=\"note\"><strong>Let op:</strong> Deel de steekproefsom niet door N. Daarmee bereken je niet het gemiddelde van de gecontroleerde posten. Deze les introduceert geen afzonderlijke nieuwe schattingsmethode.</p>"
        }
      ]
    },
    {
      "id": "rekenen",
      "title": "Gemiddelde, variantie en standaardafwijking",
      "phase": "Basis",
      "intro": "Een gemiddelde vertelt waar de waarden ongeveer liggen. Spreiding vertelt hoeveel die waarden van elkaar verschillen. Voor SRA heb je beide nodig.",
      "goals": [
        "Σ, machten en wortels gebruiken",
        "Variantie omzetten naar standaardafwijking",
        "Spreiding van posten onderscheiden van onzekerheid van een schatting"
      ],
      "sections": [
        {
          "title": "SET-opfrisser: spreiding tegenover onzekerheid",
          "html": "<p>De standaardafwijking s beschrijft verschillen tussen losse waarnemingen. De standaardfout s/√n beschrijft de onzekerheid van het steekproefgemiddelde. Voor een populatietotaal vermenigvuldig je die standaardfout met N. Bij trekken zonder teruglegging kan de eindigheidscorrectie nodig zijn. De variantie heeft gekwadrateerde eenheden; de standaardafwijking en standaardfout hebben de eenheid van de bijbehorende grootheid.</p>"
        },
        {
          "title": "Rekenen zonder verborgen stappen",
          "html": "<p>Een <strong>gemiddelde</strong> is de som gedeeld door het aantal: w̄ = Σw / n. Een <strong>kwadraat</strong> betekent een getal met zichzelf vermenigvuldigen: 4² = 16 en (−4)² = 16. De <strong>vierkantswortel</strong> keert dat om: √16 = 4. Bereken eerst wat tussen haakjes staat, daarna machten en wortels, daarna vermenigvuldigen en delen en ten slotte optellen en aftrekken.</p><p>Let op het verschil: bij 2 en 4 is Σw² = 2² + 4² = 20, maar (Σw)² = (2 + 4)² = 36. In formule 1 komen beide soorten bewerkingen voor.</p>"
        },
        {
          "title": "Waarom kwadrateren?",
          "html": "<p>Afwijkingen boven en onder het gemiddelde heffen elkaar op als je ze gewoon optelt. Daarom kwadrateren we ze. De <strong>steekproefvariantie</strong> s² is de som van de gekwadrateerde afwijkingen gedeeld door n − 1. Door de schatting van het gemiddelde blijft één vrijheid minder over.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Variantie</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Variantie\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mo>∑</mo><msup><mrow><mo>(</mo><msub><mi>w</mi><mi>i</mi></msub><mo>−</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>)</mo></mrow><mn>2</mn></msup></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Standaardafwijking</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Standaardafwijking\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>s</mi><mo>=</mo><msqrt><msup><mi>s</mi><mn>2</mn></msup></msqrt></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>Σ betekent optellen; wᵢ is waarde i; w̄ is het gemiddelde; n is het aantal waarden; s² is de variantie; s is de standaardafwijking.</p></details><p>De <strong>standaardafwijking</strong> s is de wortel uit de variantie. Meet je waarden in euro, dan is de variantie in euro² en de standaardafwijking weer in euro.</p>"
        },
        {
          "title": "De rekenvorm op het formuleblad",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Rekenen met totalen</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Rekenen met totalen\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mo>∑</mo><msup><mi>w</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><msup><mrow><mo>(</mo><mo>∑</mo><mi>w</mi><mo>)</mo></mrow><mn>2</mn></msup></mrow><mrow><mi>n</mi></mrow></mfrac></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math></div></div></div><p>Deze vorm is handig als een opgave alleen totalen geeft. Bereken de teller eerst volledig. Neem pas daarna de wortel als je s nodig hebt. De <strong>standaardfout</strong> van een gemiddelde is iets anders: s / √n, eventueel met eindigheidscorrectie. Die beschrijft de onzekerheid van het geschatte gemiddelde, niet de verschillen tussen individuele posten.</p>"
        }
      ],
      "example": {
        "title": "Vier gecontroleerde waarden: 80, 90, 110 en 120",
        "steps": [
          "Som = 400; gemiddelde = 400 / 4 = 100.",
          "Afwijkingen van 100: −20, −10, 10 en 20.",
          "Kwadraten: 400, 100, 100 en 400; samen 1.000.",
          "Steekproefvariantie = 1.000 / (4 − 1) = 333,3333.",
          "Standaardafwijking = √333,3333 = 18,2574. Dit kleine voorbeeld leert het rekenen; het rechtvaardigt op zichzelf nog geen populatie-interval."
        ]
      },
      "pitfalls": [
        "Deel bij de steekproefvariantie door n − 1, niet door n.",
        "Rond tussenuitkomsten niet onnodig af.",
        "Een variantie is geen standaardafwijking."
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
      "questions": [
        {
          "id": "rekenen-1",
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
          }
        },
        {
          "id": "rekenen-2",
          "prompt": "De variantie is 225 euro². Wat is s?",
          "options": [
            "225 euro",
            "15 euro",
            "50.625 euro"
          ],
          "correct": 1,
          "explanation": "De variantie is s² = 225 euro². Een variantie gebruikt gekwadrateerde afwijkingen en dus gekwadrateerde eenheden. De standaardafwijking is de wortel uit de variantie: s = √225 = 15 euro. Controleer de omzetting: 15² = 225. De eenheid is weer euro, dezelfde eenheid als de waarnemingen.",
          "steps": [
            "De variantie is s² = 225 euro². Een variantie gebruikt gekwadrateerde afwijkingen en dus gekwadrateerde eenheden.",
            "De standaardafwijking is de wortel uit de variantie: s = √225 = 15 euro.",
            "Controleer de omzetting: 15² = 225. De eenheid is weer euro, dezelfde eenheid als de waarnemingen."
          ],
          "pattern": "Herken: “Variantie”, euro² en gevraagd s zonder kwadraat. → Betekenis: De gegeven maat is s²; gevraagd is de standaardafwijking. → Aanpak: Neem de vierkantswortel van de variantie en controleer de eenheid. → Gevraagd antwoord: Een spreidingsmaat in euro, de oorspronkelijke eenheid.",
          "trap": "Alleen “euro²” door “euro” vervangen verandert de variantie niet in een standaardafwijking.",
          "optionExplanations": [
            "225 is nog de numerieke waarde van de variantie. Je moet de wortel nemen voordat je het resultaat als standaardafwijking in euro schrijft.",
            "15 euro klopt: √225 = 15 en de wortel uit euro² is euro.",
            "50.625 is 225². Je hebt dan opnieuw gekwadrateerd, terwijl de omzetting van variantie naar standaardafwijking een wortel vraagt."
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
          }
        },
        {
          "id": "rekenen-3",
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
          }
        }
      ],
      "lab": "spreiding",
      "exam": null,
      "prerequisites": [
        "Les 1: onderscheid tussen populatieomvang N en steekproefomvang n.",
        "Gemiddelde en spreiding uit SET worden hier opgefrist; elementaire rekenbewerkingen worden bekend verondersteld."
      ],
      "formulaGuide": [
        {
          "title": "Gemiddelde, variantie en standaardafwijking uitrekenen",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik het gemiddelde voor het centrum van de gegevens en de variantie of standaardafwijking voor hun spreiding. De rekenvorm met totalen is handig wanneer een opgave Σw en Σw² geeft in plaats van alle afzonderlijke waarden.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Gemiddelde</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Gemiddelde\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mo>∑</mo><mi>w</mi></mrow><mrow><mi>n</mi></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Variantie</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Variantie\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mo>∑</mo><msup><mrow><mo>(</mo><msub><mi>w</mi><mi>i</mi></msub><mo>−</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>)</mo></mrow><mn>2</mn></msup></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Standaardafwijking</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Standaardafwijking\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>s</mi><mo>=</mo><msqrt><msup><mi>s</mi><mn>2</mn></msup></msqrt></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Rekenen met totalen</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Rekenen met totalen\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mo>∑</mo><msup><mi>w</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><msup><mrow><mo>(</mo><mo>∑</mo><mi>w</mi><mo>)</mo></mrow><mn>2</mn></msup></mrow><mrow><mi>n</mi></mrow></mfrac></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>Σ betekent optellen; wᵢ is waarde i; w̄ is het gemiddelde; n is het aantal waarden; s² is de variantie; s is de standaardafwijking. Σw² betekent: eerst elke waarde kwadrateren en daarna optellen. (Σw)² betekent: eerst optellen en daarna de hele som kwadrateren.</p><h3>Zo reken je stap voor stap</h3><ol><li>Bereken w̄ = Σw / n.</li><li>Trek bij losse gegevens het gemiddelde van elke waarde af. Kwadrateer die afwijkingen en tel de kwadraten op.</li><li>Deel de som door n − 1. Bij de rekenvorm uit totalen bereken je eerst Σw² − (Σw)²/n en deel je die hele teller door n − 1.</li><li>Neem de vierkantswortel als om de standaardafwijking s wordt gevraagd.</li><li>Controleer de eenheid: bij bedragen is de variantie in euro² en de standaardafwijking in euro.</li></ol><h3>Vier gecontroleerde waarden: 80, 90, 110 en 120</h3><ol><li>Som = 400; gemiddelde = 400 / 4 = 100.</li><li>Afwijkingen van 100: −20, −10, 10 en 20.</li><li>Kwadraten: 400, 100, 100 en 400; samen 1.000.</li><li>Steekproefvariantie = 1.000 / (4 − 1) = 333,3333.</li><li>Standaardafwijking = √333,3333 = 18,2574. Dit kleine voorbeeld leert het rekenen; het rechtvaardigt op zichzelf nog geen populatie-interval.</li></ol><p class=\"note\"><strong>Let op:</strong> Een negatieve berekende variantie wijst op verkeerde invoer, verwisselde totalen of te vroege afronding. Het delen door √n hoort bij een standaardfout, niet bij de standaardafwijking van de losse waarden.</p>"
        }
      ]
    },
    {
      "id": "onzekerheid",
      "title": "Kans, betrouwbaarheid en tabellen",
      "phase": "Basis",
      "intro": "Een puntschatting is één bedrag. Een interval maakt zichtbaar hoe onzeker die schatting is. Betrouwbaarheid en nauwkeurigheid zijn verschillende begrippen.",
      "goals": [
        "Een interval en de marge E lezen",
        "α en α/2 onderscheiden",
        "De juiste rij en kolom in de t-tabel kiezen"
      ],
      "sections": [
        {
          "title": "SET-opfrisser: betrouwbaarheid, staarten en tabellen",
          "html": "<p>Bij 95% tweezijdige betrouwbaarheid is α = 0,05 en ligt 0,025 in iedere staart. Bij een eenzijdige bovengrens ligt de volledige α = 0,05 in de rechterstaart. Betrouwbaarheid gaat over de dekking van de methode bij herhaalde steekproeven, niet over 95% van de losse waarnemingen.</p><p>De SET-attentiepunten gebruiken bij n/N &lt; 0,10 vaak geen eindigheidscorrectie en bij df &gt; 200 de oneindigrij. Het actuele SRA-formuleblad en de SRA-opgave zijn hier leidend: schatters bevatten de eindigheidscorrectie en regressie gebruikt eigen vrijheidsgraden. Neem een SET-vuistregel dus niet automatisch over.</p><h3>Voorbeeld: alleen een bovengrens</h3><ol><li>Gegeven: gemiddelde 80, standaardfout 2, df = 24. Gevraagd: een 95%-bovengrens voor het populatiegemiddelde.</li><li>Gebruik de eenzijdige tabelwaarde t = 1,711, dus geen 0,025-staart.</li><li>Bovengrens = 80 + 1,711 × 2 = 83,422. Het eenzijdige interval is (−∞; 83,422].</li><li>Bij een eenzijdige ondergrens gebruik je 80 − 1,711 × 2 = 76,578 en [76,578; ∞). Een tweezijdig 95%-interval gebruikt een andere t-waarde.</li></ol>"
        },
        {
          "title": "Van kans naar interval",
          "html": "<p>Een kans ligt tussen 0 en 1. Een kans van 0,05 is 5%. De <strong>betrouwbaarheid</strong> is 1 − α. Bij 95% betrouwbaarheid is α = 0,05. Een tweezijdig interval heeft een onder- en bovengrens. Het totale risico verdeel je over twee staarten: α/2 = 0,025 per kant.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Interval</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Interval\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtext>Interval</mtext><mo>=</mo><mtext>puntschatting</mtext><mo>±</mo><mi>E</mi></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Marge</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Marge\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>E</mi><mo>=</mo><mtext>kritieke waarde</mtext><mo>×</mo><mtext>standaardfout</mtext></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>± betekent: één keer aftrekken voor de ondergrens en één keer optellen voor de bovengrens. E is de halve intervalbreedte.</p></details><p>E is de <strong>onnauwkeurigheidsmarge</strong>: de afstand van het midden tot één grens. De totale breedte is 2E. Bij herhaald trekken van steekproeven met dezelfde werkwijze bevatten ongeveer 95 van 100 op deze manier gemaakte 95%-intervallen de vaste werkelijke waarde. Het gaat om de betrouwbaarheid van de methode.</p>"
        },
        {
          "title": "Wat is een verdeling?",
          "html": "<p>Een <strong>verdeling</strong> beschrijft welke waarden mogelijk zijn en hoe vaak of met welke kans ze voorkomen. In een histogram groepeer je waarnemingen in klassen; hoge staven laten zien waar veel waarden zitten. Een <strong>normale verdeling</strong> heeft een symmetrische klokvorm: veel waarden rond het gemiddelde en minder waarden ver daarvandaan.</p><p>Bij een kansverdeling beschrijven de staarten de extreme uitkomsten. De t-verdeling heeft bij weinig vrijheidsgraden zwaardere staarten dan de normale verdeling: voor dezelfde betrouwbaarheid heb je dan een grotere kritieke waarde nodig. Bij veel vrijheidsgraden naderen t en de standaardnormale z-verdeling elkaar. De SRA-tabelregels bepalen welke rij je op het tentamen gebruikt.</p>"
        },
        {
          "title": "Waar komt de t-waarde vandaan?",
          "html": "<p>De <strong>Student-t-verdeling</strong> houdt rekening met het schatten van de spreiding. De <strong>vrijheidsgraden</strong> (df) bepalen welke rij je gebruikt. Bij de schatters in hoofdstuk 8 is dat doorgaans n − 1. Bij een regressiemodel met k verklarende variabelen is het n − k − 1.</p><ol><li>Bepaal de betrouwbaarheid en of de vraag een- of tweezijdig is.</li><li>Bepaal df.</li><li>Kies de kolom voor de staartkans: α/2 bij een tweezijdig t-interval.</li><li>Ontbreekt df in de tabel, neem volgens het onderwijsprogramma de naast lagere beschikbare df. Bij df &gt; 200 gebruik je de onderste rij.</li></ol><p>Bij een F-toets gebruik je twee vrijheidsgraden. Ontbreken ze, kies ook daar de naast lagere tabelwaarden. Je halveert α niet voor de F-kritieke grens.</p>"
        },
        {
          "title": "Wat maakt een interval breder?",
          "html": "<p>Meer spreiding geeft meer onzekerheid. Hogere betrouwbaarheid vraagt een grotere kritieke waarde en dus een breder interval. Een grotere steekproef maakt het interval doorgaans smaller. <strong>Eindigheidscorrectie</strong> is de factor √((N − n)/(N − 1)): bij controle van een groter deel van een eindige populatie blijft minder onzekerheid over. In de geldbedragschattingen van SRA neem je deze factor steeds mee.</p><p>Bij een gevraagde afronding van een schattingsinterval volgen de aangeleverde uitwerkingen een afronding naar buiten: ondergrens omlaag, bovengrens omhoog.</p>"
        }
      ],
      "example": {
        "title": "Een 95%-interval uitrekenen",
        "steps": [
          "Puntschatting = € 100.000; standaardfout = € 2.000; gegeven t = 2,00.",
          "Marge E = 2 × 2.000 = € 4.000.",
          "Interval = [€ 96.000; € 104.000]; breedte = € 8.000.",
          "Bij dezelfde gegevens en een hogere kritieke waarde van 2,60 wordt E € 5.200 en dus het interval breder."
        ]
      },
      "pitfalls": [
        "95% betrouwbaarheid betekent niet dat 95% van de individuele artikelen binnen het interval voor het totaal valt.",
        "Als de totale intervalbreedte € 10.000 mag zijn, is E € 5.000."
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
      "questions": [
        {
          "id": "onzekerheid-1",
          "prompt": "Een tweezijdig 90%-interval heeft per staart een kans van:",
          "options": [
            "0,10",
            "0,05",
            "0,90"
          ],
          "correct": 1,
          "explanation": "90% betrouwbaarheid laat α = 1 − 0,90 = 0,10 buiten het centrale interval. Een tweezijdig interval verdeelt die totale overschrijdingskans over twee staarten. Per staart is de kans α/2 = 0,10/2 = 0,05, dus 5%.",
          "steps": [
            "90% betrouwbaarheid laat α = 1 − 0,90 = 0,10 buiten het centrale interval.",
            "Een tweezijdig interval verdeelt die totale overschrijdingskans over twee staarten.",
            "Per staart is de kans α/2 = 0,10/2 = 0,05, dus 5%."
          ],
          "pattern": "Herken: “Tweezijdig”, 90% en “per staart”. → Betekenis: De kans buiten het centrale interval wordt over twee uiteinden verdeeld. → Aanpak: Bepaal eerst α = 1 − betrouwbaarheid en neem daarna α/2. → Gevraagd antwoord: De overschrijdingskans aan één kant, niet de totale α.",
          "trap": "De totale overschrijdingskans α is tweemaal de kans in één staart.",
          "optionExplanations": [
            "0,10 is de totale kans buiten het 90%-interval. De vraag vraagt de kans per staart, dus moet je nog door twee delen.",
            "0,05 klopt: de resterende 10% wordt gelijk verdeeld over de linker- en rechterstaart.",
            "0,90 is de kans in het centrale gebied, niet de kans buiten één van de grenzen."
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
          }
        },
        {
          "id": "onzekerheid-2",
          "prompt": "De totale breedte is € 12.000. Hoe groot is E?",
          "options": [
            "€ 24.000",
            "€ 12.000",
            "€ 6.000"
          ],
          "correct": 2,
          "explanation": "Een symmetrisch interval loopt van schatting − E tot schatting + E. De afstand tussen beide grenzen is daardoor E + E = 2E. Bij een totale breedte van € 12.000 is de halve breedte E = € 12.000/2 = € 6.000.",
          "steps": [
            "Een symmetrisch interval loopt van schatting − E tot schatting + E.",
            "De afstand tussen beide grenzen is daardoor E + E = 2E.",
            "Bij een totale breedte van € 12.000 is de halve breedte E = € 12.000/2 = € 6.000."
          ],
          "pattern": "Herken: “Totale breedte” en de gevraagde marge E. → Betekenis: Het interval bevat links én rechts een marge E. → Aanpak: Gebruik breedte = 2E en halveer de gegeven afstand tussen de grenzen. → Gevraagd antwoord: Een halve intervalbreedte in euro.",
          "trap": "De marge E ligt aan één kant van de schatting; de totale breedte omvat beide kanten.",
          "optionExplanations": [
            "€ 24.000 verdubbelt de al gegeven totale breedte. Voor E moet je juist halveren.",
            "€ 12.000 is de afstand tussen onder- en bovengrens. E is slechts de helft van die afstand.",
            "€ 6.000 is de juiste marge: een interval van schatting − 6.000 tot schatting + 6.000 is in totaal € 12.000 breed."
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
          }
        },
        {
          "id": "onzekerheid-3",
          "prompt": "df = 164 ontbreekt; 160 en 170 staan in de tabel. Welke rij gebruik je?",
          "options": [
            "160",
            "170",
            "Het gemiddelde van beide"
          ],
          "correct": 0,
          "explanation": "De berekende vrijheidsgraden zijn 164, maar die rij is niet beschikbaar in de opgegeven tabel. Volgens de tabelafspraak in het SRA-onderwijsprogramma neem je de naast lagere beschikbare waarde. Van 160 en 170 is 160 de naast lagere rij. Dit is een tabelkeuze; de berekende df blijven 164.",
          "steps": [
            "De berekende vrijheidsgraden zijn 164, maar die rij is niet beschikbaar in de opgegeven tabel.",
            "Volgens de tabelafspraak in het SRA-onderwijsprogramma neem je de naast lagere beschikbare waarde.",
            "Van 160 en 170 is 160 de naast lagere rij. Dit is een tabelkeuze; de berekende df blijven 164."
          ],
          "pattern": "Herken: De berekende df ontbreken, maar een lagere en hogere tabelrij zijn beschikbaar. → Betekenis: Dit is een tabelkeuze volgens de cursusafspraak, geen nieuwe df-berekening. → Aanpak: Kies de naast lagere beschikbare rij; interpoleer niet. → Gevraagd antwoord: De te gebruiken tabelrij, met behoud van de oorspronkelijk berekende df.",
          "trap": "Ga niet afronden naar de dichtstbijzijnde rij of zelf interpoleren als de cursus een vaste tabelafspraak geeft.",
          "optionExplanations": [
            "160 is de grootste beschikbare rij die lager is dan 164, en volgt daarmee de voorgeschreven SRA-tabelafspraak.",
            "170 ligt boven 164. Dat volgt niet de afspraak om de naast lagere beschikbare df te gebruiken.",
            "Het middelen van twee tabelrijen is interpolatie. De cursus schrijft hier een rijkeuze voor, geen interpolatie."
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
          }
        }
      ],
      "lab": "interval",
      "exam": null,
      "prerequisites": [
        "Les 2: gemiddelde, variantie, standaardafwijking, machten en wortels.",
        "SET-basis: een percentage omzetten naar een kans, bijvoorbeeld 5% = 0,05. Deze les herhaalt dit."
      ],
      "formulaGuide": [
        {
          "title": "Van puntschatting naar betrouwbaarheidsinterval",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik een interval als de vraag niet alleen een geschat getal verlangt, maar ook de nauwkeurigheid van die schatting. Zoek vóór het rekenen uit of een onder- én bovengrens of een eenzijdige grens wordt gevraagd.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Interval</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Interval\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtext>Interval</mtext><mo>=</mo><mtext>puntschatting</mtext><mo>±</mo><mi>E</mi></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Marge</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Marge\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>E</mi><mo>=</mo><mtext>kritieke waarde</mtext><mo>×</mo><mtext>standaardfout</mtext></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Totale breedte</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Totale breedte\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtext>breedte</mtext><mo>=</mo><mn>2</mn><mo>×</mo><mi>E</mi></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>De puntschatting is het midden van het interval. E is de marge aan één kant. α is het totale onbetrouwbaarheidsrisico; 1 − α is de betrouwbaarheid. Bij een tweezijdig t-interval hoort α/2 bij iedere staart. De standaardfout meet de onzekerheid van de schatting.</p><h3>Zo reken je stap voor stap</h3><ol><li>Bepaal de betrouwbaarheid en zet die om naar α. Bij 95% is α = 0,05.</li><li>Bepaal de juiste vrijheidsgraden. Bij de gewone schatters doorgaans n − 1; bij regressie n − k − 1.</li><li>Lees t af met de juiste staartkans. Ontbreekt df, gebruik dan de naast lagere beschikbare tabelrij volgens het onderwijsprogramma. Voor df boven 200 geldt de onderste rij.</li><li>Vermenigvuldig t met de standaardfout: dit is E.</li><li>Trek E af van de puntschatting voor de ondergrens en tel E op voor de bovengrens. Rond alleen volgens de gevraagde afspraak; bij deze schattingsopgaven worden grenzen naar buiten afgerond.</li></ol><h3>Een 95%-interval uitrekenen</h3><ol><li>Puntschatting = € 100.000; standaardfout = € 2.000; gegeven t = 2,00.</li><li>Marge E = 2 × 2.000 = € 4.000.</li><li>Interval = [€ 96.000; € 104.000]; breedte = € 8.000.</li><li>Bij dezelfde gegevens en een hogere kritieke waarde van 2,60 wordt E € 5.200 en dus het interval breder.</li></ol><p class=\"note\"><strong>Let op:</strong> De betrouwbaarheid beschrijft de intervalmethode bij herhaalde steekproeven. Zij zegt niet dat 95% van de afzonderlijke posten binnen het interval voor een totaal valt. Verwar de marge E niet met de totale breedte 2E.</p>"
        }
      ]
    },
    {
      "id": "mpu",
      "title": "De directe schatter (MPU)",
      "phase": "Schatten",
      "intro": "De directe schatter rekent het gemiddelde uit je gecontroleerde posten door naar de volledige populatie. MPU staat voor Mean Per Unit: gemiddelde per eenheid.",
      "goals": [
        "De totale waarde en haar standaardfout berekenen",
        "Formules 1–4 in de juiste volgorde gebruiken",
        "Een interval in woorden toelichten"
      ],
      "sections": [
        {
          "title": "Wanneer gebruik je deze schatter?",
          "html": "<p>Je hebt gecontroleerde werkelijke waarden en een populatieomvang. Je schat het totaal rechtstreeks uit die werkelijke waarden. De boekwaarden spelen in de formule geen rol. Als werkelijke waarden sterk uiteenlopen, kan het interval breed worden. Andere schatters kunnen extra informatie uit de boekwaarden gebruiken.</p><p>De berekening veronderstelt een bruikbare aselecte steekproef. Het boek gebruikt voor de normale benadering van het gemiddelde de cursusgrens n ≥ 100; bij een kleinere steekproef beoordeel je de verdeling. Een groot aantal posten herstelt een selectieve steekproef niet.</p>"
        },
        {
          "title": "Bouw de formule op",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Puntschatting</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Puntschatting\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>MPU</mtext></msub><mo>=</mo><mi>N</mi><mo>×</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Standaardfout</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Standaardfout\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><mtext>MPU</mtext></msub><mo>=</mo><mi>N</mi><mo>×</mo><mfrac><mrow><msub><mi>s</mi><mi>w</mi></msub></mrow><mrow><msqrt><mi>n</mi></msqrt></mrow></mfrac><mo>×</mo><msqrt><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Interval</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Interval\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtext>Interval</mtext><mo>=</mo><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>MPU</mtext></msub><mo>±</mo><mi>t</mi><mo>×</mo><msub><mi>s</mi><mtext>MPU</mtext></msub></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>N = populatieomvang; n = steekproefomvang; w̄ = gemiddelde werkelijke waarde; s_w = standaardafwijking; t = kritieke tabelwaarde. Het dakje op W betekent geschat.</p></details><p>Begin bij s<sub>w</sub>, de spreiding van losse werkelijke waarden. Deel door √n om de onzekerheid van het gemiddelde te krijgen. Vermenigvuldig met N voor de onzekerheid van het totaal. Pas de eindigheidscorrectie toe. Vermenigvuldig ten slotte met t voor de marge.</p>"
        },
        {
          "title": "Een vaste werkvolgorde",
          "html": "<ol><li>Schrijf N, n, Σw, Σw² en betrouwbaarheid op.</li><li>Bereken w̄ en s² met formule 1. Neem de wortel.</li><li>Bereken het totaal met formule 3 en de standaardfout met formule 4.</li><li>Zoek t met df = n − 1 en de juiste staartkans.</li><li>Maak het interval; rond alleen de eindgrenzen af zoals gevraagd.</li></ol>"
        },
        {
          "title": "Wanneer een grote steekproef toch onvoldoende kan zijn",
          "html": "<p>n ≥ 100 is de cursusvuistregel voor de normale benadering, geen garantie voor iedere populatie. Het boek waarschuwt dat extreem scheve verdelingen een grotere steekproef kunnen vragen. Beoordeel daarom selectie, verdeling en opvallende posten voordat je het interval interpreteert. Zie boek p. 92, voetnoot 2.</p>"
        }
      ],
      "example": {
        "title": "Voorbeeld: een voorraad van 1.000 artikelen",
        "steps": [
          "Gegeven: N = 1.000, n = 100, w̄ = € 80, s_w = € 20. 95% tweezijdig: df = 99; gebruik tabelrij 90 en t = 1,987.",
          "Ŵ = 1.000 × 80 = € 80.000.",
          "Eindigheidscorrectie = √(900 / 999) ≈ 0,9492.",
          "s_MPU = 1.000 × (20 / 10) × 0,9492 ≈ € 1.898,32.",
          "Reken door met onafgeronde tussenwaarden: E ≈ 1,987 × 1.898,31599 = € 3.771,95. Interval ≈ [€ 76.228,05; € 83.771,95]."
        ]
      },
      "pitfalls": [
        "Vergeet de factor N bij de standaardfout van het totaal niet.",
        "Een smal interval volgt niet automatisch uit een grote populatie."
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
      "questions": [
        {
          "id": "mpu-1",
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
          }
        },
        {
          "id": "mpu-2",
          "prompt": "Welke spreiding gebruikt MPU?",
          "options": [
            "Die van de werkelijke waarden",
            "Die van de verschillen b − w",
            "Alleen de boekwaarden"
          ],
          "correct": 0,
          "explanation": "MPU schat W rechtstreeks uit de werkelijke steekproefwaarden w. De bijpassende spreidingsmaat is daarom s_w, de standaardafwijking van die werkelijke waarden. Voor de standaardfout van het totaal wordt s_w geschaald met N/√n en, indien van toepassing, de eindigheidscorrectie.",
          "steps": [
            "MPU schat W rechtstreeks uit de werkelijke steekproefwaarden w.",
            "De bijpassende spreidingsmaat is daarom s_w, de standaardafwijking van die werkelijke waarden.",
            "Voor de standaardfout van het totaal wordt s_w geschaald met N/√n en, indien van toepassing, de eindigheidscorrectie."
          ],
          "pattern": "Herken: “Welke spreiding” in combinatie met MPU. → Betekenis: De onzekerheid moet aansluiten bij de gegevens waarop de schatter berust. → Aanpak: MPU gebruikt werkelijke waarden w; zoek dus hun standaardafwijking s_w. → Gevraagd antwoord: De bijbehorende spreidingsmaat, geen spreiding van boekwaarden of controlefouten.",
          "trap": "Kies de spreidingsmaat bij de gebruikte schatter; boekwaarden en fouten zijn andere gegevens.",
          "optionExplanations": [
            "MPU gebruikt de werkelijke waarden. De standaardafwijking s_w beschrijft de spreiding die in zijn standaardfout nodig is.",
            "De spreiding van b − w hoort bij de verschilschatter. Dat is een andere schatter, die het bekende boektotaal corrigeert.",
            "Alleen de boekwaarden laten de spreiding van de gecontroleerde werkelijke waarden niet zien. Voor MPU heb je s_w nodig."
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
          }
        },
        {
          "id": "mpu-3",
          "prompt": "Wat doet de eindigheidscorrectie als n = N?",
          "options": [
            "Wordt 1",
            "Wordt 0",
            "Wordt N"
          ],
          "correct": 1,
          "explanation": "De eindigheidscorrectie is √((N − n)/(N − 1)). Als alle populatieposten zijn onderzocht, is n = N en wordt N − n = 0; de correctiefactor is dus nul. Daarmee verdwijnt de onzekerheid door steekproeftrekking. De individuele posten kunnen onderling nog wel verschillen.",
          "steps": [
            "De eindigheidscorrectie is √((N − n)/(N − 1)).",
            "Als alle populatieposten zijn onderzocht, is n = N en wordt N − n = 0; de correctiefactor is dus nul.",
            "Daarmee verdwijnt de onzekerheid door steekproeftrekking. De individuele posten kunnen onderling nog wel verschillen."
          ],
          "pattern": "Herken: n = N bij de eindigheidscorrectie. → Betekenis: Iedere populatiepost is onderzocht: er blijft geen onzekerheid door steekproeftrekking over. → Aanpak: Vul n = N in √((N − n)/(N − 1)) in en bekijk de teller. → Gevraagd antwoord: Het gevolg voor correctiefactor en standaardfout, niet voor de spreiding tussen posten.",
          "trap": "Geen steekproefonzekerheid betekent niet dat er geen spreiding of geen mogelijke meetfout bestaat.",
          "optionExplanations": [
            "Een factor 1 zou de standaardfout ongewijzigd laten. Bij integrale controle is juist geen onzekerheid door steekproeftrekking over.",
            "De teller N − n is nul, dus de wortel en daarmee de correctiefactor worden nul.",
            "N is een aantal posten, geen uitkomst van deze correctiefactor. Invullen in de teller geeft N − N = 0."
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
          }
        }
      ],
      "lab": "schatter",
      "exam": "uitwerkingen:4:H8, opgave 1–3",
      "prerequisites": [
        "Lessen 1–2: populatie, steekproefgemiddelde en standaardafwijking.",
        "Les 3: marge, betrouwbaarheid, t-tabel en eindigheidscorrectie."
      ],
      "formulaGuide": [
        {
          "title": "De directe totaalschatting met haar standaardfout",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik MPU wanneer je het populatietotaal rechtstreeks schat uit de gecontroleerde werkelijke waarden. Je hebt N, n, het steekproefgemiddelde en de spreiding van de werkelijke waarden nodig.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Puntschatting</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Puntschatting\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>MPU</mtext></msub><mo>=</mo><mi>N</mi><mo>×</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Standaardfout</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Standaardfout\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><mtext>MPU</mtext></msub><mo>=</mo><mi>N</mi><mo>×</mo><mfrac><mrow><msub><mi>s</mi><mi>w</mi></msub></mrow><mrow><msqrt><mi>n</mi></msqrt></mrow></mfrac><mo>×</mo><msqrt><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Interval</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Interval\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtext>Interval</mtext><mo>=</mo><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>MPU</mtext></msub><mo>±</mo><mi>t</mi><mo>×</mo><msub><mi>s</mi><mtext>MPU</mtext></msub></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>N = populatieomvang; n = steekproefomvang; w̄ = gemiddelde werkelijke waarde; s_w = standaardafwijking; t = kritieke tabelwaarde. Het dakje op W betekent geschat. s_MPU is de standaardfout van het totale geschatte bedrag. Dat is niet dezelfde grootheid als s_w, de spreiding van individuele werkelijke waarden.</p><h3>Zo reken je stap voor stap</h3><ol><li>Bereken w̄ en s_w uit de gecontroleerde werkelijke waarden.</li><li>Bereken het midden Ŵ_MPU = N × w̄.</li><li>Deel s_w door √n om de standaardfout van het gemiddelde te krijgen.</li><li>Vermenigvuldig met N en met √((N − n)/(N − 1)). Dit is s_MPU.</li><li>Kies de juiste t-waarde, bereken E = t × s_MPU en maak de twee intervalgrenzen.</li><li>Controleer dat de bedragen in het interval totalschattingen in euro zijn.</li></ol><h3>Voorbeeld: een voorraad van 1.000 artikelen</h3><ol><li>Gegeven: N = 1.000, n = 100, w̄ = € 80, s_w = € 20. 95% tweezijdig: df = 99; gebruik tabelrij 90 en t = 1,987.</li><li>Ŵ = 1.000 × 80 = € 80.000.</li><li>Eindigheidscorrectie = √(900 / 999) ≈ 0,9492.</li><li>s_MPU = 1.000 × (20 / 10) × 0,9492 ≈ € 1.898,32.</li><li>Reken door met onafgeronde tussenwaarden: E ≈ 1,987 × 1.898,31599 = € 3.771,95. Interval ≈ [€ 76.228,05; € 83.771,95].</li></ol><p class=\"note\"><strong>Let op:</strong> Een grotere steekproef herstelt geen selectieve steekproeftrekking. Vergeet N niet bij de standaardfout van het totaal en gebruik niet de boekwaardespreiding s_b.</p>"
        }
      ]
    },
    {
      "id": "verschil",
      "title": "De verschilschatter",
      "phase": "Schatten",
      "intro": "Als posten ongeveer hetzelfde bedrag te hoog of te laag staan, schat je eerst de totale fout. Die trek je af van de bekende totale boekwaarde.",
      "goals": [
        "De richting van de fout bewaken",
        "De voorwaarde van minstens 30 fouten controleren",
        "Een volledige tentamenberekening volgen"
      ],
      "sections": [
        {
          "title": "Wat is hier een fout?",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Verschil per post</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Verschil per post\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>e</mi><mi>i</mi></msub><mo>=</mo><msub><mi>b</mi><mi>i</mi></msub><mo>−</mo><msub><mi>w</mi><mi>i</mi></msub></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Gemiddeld verschil</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Gemiddeld verschil\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>e</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>=</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>b</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>−</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Puntschatting</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Puntschatting\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>V</mtext></msub><mo>=</mo><mi>B</mi><mo>−</mo><mi>N</mi><mo>×</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>e</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>e = boekwaarde minus werkelijke waarde; B = bekend boekwaardetotaal; s_e = spreiding van de verschillen; s_V = standaardfout van het geschatte totaal.</p></details><p>Een artikel staat voor € 100 in de boeken, maar is € 90 waard. Dan is e = +€ 10: de boekwaarde is te hoog. Daarom trek je de geschatte fout van B af. Is de werkelijke waarde hoger, dan is e negatief en leidt aftrekken juist tot een hogere schatting.</p><p>De verschilschatter past bij redelijk constante verschillen, onafhankelijk van de grootte van de boekwaarde. Volgens de slides en de tentamenuitwerking moet de steekproef minstens 30 fouten bevatten. Dat zijn 30 afwijkende posten, niet alleen 30 onderzochte posten.</p>"
        },
        {
          "title": "De spreiding van de verschillen",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Variantie verschillen</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Variantie verschillen\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><msub><mi>s</mi><mi>e</mi></msub><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mo>∑</mo><msup><mi>e</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><msup><mrow><mo>(</mo><mo>∑</mo><mi>e</mi><mo>)</mo></mrow><mn>2</mn></msup></mrow><mrow><mi>n</mi></mrow></mfrac></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Standaardfout</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Standaardfout\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><mtext>V</mtext></msub><mo>=</mo><mi>N</mi><mo>×</mo><mfrac><mrow><msub><mi>s</mi><mi>e</mi></msub></mrow><mrow><msqrt><mi>n</mi></msqrt></mrow></mfrac><mo>×</mo><msqrt><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Interval</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Interval\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtext>Interval</mtext><mo>=</mo><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>V</mtext></msub><mo>±</mo><mi>t</mi><mo>×</mo><msub><mi>s</mi><mtext>V</mtext></msub></mrow></math></div></div></div><p>Posten zonder verschil tellen ook mee: hun e is nul. Gebruik dus n van de hele steekproef als noemer, niet alleen het aantal fouten. De methode kan nauwkeurig zijn als de fouten weinig variëren, ook als de werkelijke waarden zelf sterk verschillen.</p>"
        }
      ],
      "example": {
        "title": "Tentamen 17 maart 2025: Elektroconsum, vraag 3",
        "steps": [
          "N = 3.740; B = € 1.980.000; n = 165; b̄ = € 636; Σw = € 97.185; Σe² = 395.000. Er zijn 43 fouten, dus aan de cursusvoorwaarde is voldaan.",
          "w̄ = 97.185 / 165 = 589; ē = 636 − 589 = 47; Σe = 165 × 47 = 7.755.",
          "Ŵ_V = 1.980.000 − 3.740 × 47 = € 1.804.220.",
          "s²_e = [395.000 − 7.755²/165] / 164 = 186,0670732; s_e = 13,6406405.",
          "s_V = 3.740 × 13,6406405 / √165 × √(3.575/3.739) = € 3.883,51229.",
          "95% tweezijdig: df = 164; tabelrij 160; t = 1,975. E = € 7.669,94.",
          "Onafgerond: [€ 1.796.550,06; € 1.811.889,94]. Naar buiten op € 10.000: [€ 1.790.000; € 1.820.000]."
        ]
      },
      "pitfalls": [
        "Gebruik de spreiding van e, niet die van w of b.",
        "Een positieve fout trek je van de boekwaarde af."
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
      "questions": [
        {
          "id": "verschil-1",
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
          }
        },
        {
          "id": "verschil-2",
          "prompt": "Je controleert 200 posten en vindt 12 fouten. Is de cursusvoorwaarde vervuld?",
          "options": [
            "Ja, n is groter dan 30",
            "Nee, er zijn minder dan 30 fouten",
            "Alleen als de fouten positief zijn"
          ],
          "correct": 1,
          "explanation": "De les verwijst voor deze toepassing naar de cursusvoorwaarde van minstens 30 aangetroffen fouten. Er zijn 200 posten gecontroleerd, maar slechts 12 daarvan bevatten een fout. 12 is kleiner dan 30. De genoemde voorwaarde is dus niet vervuld, ondanks de grotere steekproefomvang.",
          "steps": [
            "De les verwijst voor deze toepassing naar de cursusvoorwaarde van minstens 30 aangetroffen fouten.",
            "Er zijn 200 posten gecontroleerd, maar slechts 12 daarvan bevatten een fout.",
            "12 is kleiner dan 30. De genoemde voorwaarde is dus niet vervuld, ondanks de grotere steekproefomvang."
          ],
          "pattern": "Herken: Een aantal gecontroleerde posten én een apart aantal aangetroffen fouten. → Betekenis: De genoemde cursusvoorwaarde gaat over fouten, niet over alle controles. → Aanpak: Vergelijk het aantal aangetroffen fouten met het cursusminimum van 30. → Gevraagd antwoord: Een oordeel of juist deze toepassingsvoorwaarde is vervuld.",
          "trap": "Maak van de cursusvoorwaarde “30 fouten” niet ongemerkt “30 waarnemingen”.",
          "optionExplanations": [
            "n = 200 is groter dan 30, maar de lesvoorwaarde gaat over het aantal aangetroffen fouten. Daarvan zijn er slechts 12.",
            "De cursusvoorwaarde is hier niet vervuld: 12 fouten is minder dan de genoemde 30.",
            "De genoemde cursusvoorwaarde gaat om het aantal fouten, niet om hun teken. Ook alleen positieve fouten maken 12 niet tot 30."
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
          }
        },
        {
          "id": "verschil-3",
          "prompt": "Waarom kan de verschilschatter nauwkeurig zijn?",
          "options": [
            "B hoeft niet bekend te zijn",
            "De verschillen kunnen weinig spreiden",
            "Elke fout wordt genegeerd"
          ],
          "correct": 1,
          "explanation": "De verschilschatter corrigeert het bekende boektotaal B met de geschatte totale fout Nē. De onzekerheid hangt daarbij samen met s_e: de spreiding van de verschillen b − w. Als die verschillen onderling weinig variëren, kun je hun gemiddelde en totale correctie relatief nauwkeurig schatten.",
          "steps": [
            "De verschilschatter corrigeert het bekende boektotaal B met de geschatte totale fout Nē.",
            "De onzekerheid hangt daarbij samen met s_e: de spreiding van de verschillen b − w.",
            "Als die verschillen onderling weinig variëren, kun je hun gemiddelde en totale correctie relatief nauwkeurig schatten."
          ],
          "pattern": "Herken: “Waarom nauwkeurig” bij de verschilschatter. → Betekenis: De onzekerheid hangt af van de variatie in de absolute controlefouten. → Aanpak: Zoek een geringe spreiding s_e van b − w, niet alleen een kleine gemiddelde fout. → Gevraagd antwoord: Een verklaring waarom de standaardfout van de correctie klein kan zijn.",
          "trap": "Een groot of klein gemiddeld verschil zegt op zichzelf nog niet hoe sterk de verschillen spreiden.",
          "optionExplanations": [
            "De formule Ŵ_V = B − Nē gebruikt juist het bekende populatieboektotaal B. Het ontbreken daarvan is geen voordeel van deze schatter.",
            "Kleine spreiding van de fouten betekent een kleine s_e. Die verkleint, bij overige gelijke gegevens, de standaardfout van de correctie.",
            "De fouten worden expliciet verwerkt via Nē. Ze negeren zou geen verschilschatter opleveren."
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
          }
        }
      ],
      "lab": "verschil",
      "exam": "exam2025:1:Vraag 1–3",
      "prerequisites": [
        "Les 4: een totaalschatting en haar standaardfout onderscheiden.",
        "Lessen 2–3: variantie uit totalen berekenen en een tweezijdig interval maken."
      ],
      "formulaGuide": [
        {
          "title": "Boekwaarde corrigeren met het gemiddelde controleverschil",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik de verschilschatter als de absolute controleverschillen redelijk constant zijn en niet sterk afhangen van de boekwaarde. Controleer ook de toepassingsvoorwaarde uit de cursus; het tentamenvoorbeeld noemt minstens dertig gevonden fouten.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Verschil per post</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Verschil per post\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>e</mi><mi>i</mi></msub><mo>=</mo><msub><mi>b</mi><mi>i</mi></msub><mo>−</mo><msub><mi>w</mi><mi>i</mi></msub></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Gemiddeld verschil</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Gemiddeld verschil\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>e</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>=</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>b</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>−</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Puntschatting</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Puntschatting\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>V</mtext></msub><mo>=</mo><mi>B</mi><mo>−</mo><mi>N</mi><mo>×</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>e</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Variantie verschillen</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Variantie verschillen\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><msub><mi>s</mi><mi>e</mi></msub><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mo>∑</mo><msup><mi>e</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><msup><mrow><mo>(</mo><mo>∑</mo><mi>e</mi><mo>)</mo></mrow><mn>2</mn></msup></mrow><mrow><mi>n</mi></mrow></mfrac></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Standaardfout</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Standaardfout\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><mtext>V</mtext></msub><mo>=</mo><mi>N</mi><mo>×</mo><mfrac><mrow><msub><mi>s</mi><mi>e</mi></msub></mrow><mrow><msqrt><mi>n</mi></msqrt></mrow></mfrac><mo>×</mo><msqrt><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Interval</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Interval\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtext>Interval</mtext><mo>=</mo><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>V</mtext></msub><mo>±</mo><mi>t</mi><mo>×</mo><msub><mi>s</mi><mtext>V</mtext></msub></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>e = boekwaarde minus werkelijke waarde; B = bekend boekwaardetotaal; s_e = spreiding van de verschillen; s_V = standaardfout van het geschatte totaal. n en N zijn de steekproef- en populatieomvang. Σe² is de som van de afzonderlijk gekwadrateerde verschillen; t is de kritieke tabelwaarde.</p><h3>Zo reken je stap voor stap</h3><ol><li>Houd één tekenafspraak aan: e = b − w. Een positieve e betekent dat de boekwaarde te hoog is.</li><li>Bereken ē en vermenigvuldig met N. Trek dit geschatte totale verschil af van het bekende populatieboekwaardetotaal B.</li><li>Bereken de steekproefvariantie van de verschillen en neem de wortel voor s_e.</li><li>Vul s_e in de standaardfout van de totaalschatting in, met √n en de eindigheidscorrectie.</li><li>Maak het interval rond Ŵ_V met de juiste t-waarde. Rond de eindgrenzen naar buiten af als de opgave dit vraagt.</li></ol><h3>Tentamen 17 maart 2025: Elektroconsum, vraag 3</h3><ol><li>N = 3.740; B = € 1.980.000; n = 165; b̄ = € 636; Σw = € 97.185; Σe² = 395.000. Er zijn 43 fouten, dus aan de cursusvoorwaarde is voldaan.</li><li>w̄ = 97.185 / 165 = 589; ē = 636 − 589 = 47; Σe = 165 × 47 = 7.755.</li><li>Ŵ_V = 1.980.000 − 3.740 × 47 = € 1.804.220.</li><li>s²_e = [395.000 − 7.755²/165] / 164 = 186,0670732; s_e = 13,6406405.</li><li>s_V = 3.740 × 13,6406405 / √165 × √(3.575/3.739) = € 3.883,51229.</li><li>95% tweezijdig: df = 164; tabelrij 160; t = 1,975. E = € 7.669,94.</li><li>Onafgerond: [€ 1.796.550,06; € 1.811.889,94]. Naar buiten op € 10.000: [€ 1.790.000; € 1.820.000].</li></ol><p class=\"note\"><strong>Let op:</strong> Gebruik in deze schatter de spreiding van de verschillen. Een positieve fout moet van B worden afgetrokken; een verkeerd gekozen teken kan een te hoge boekwaarde juist nog hoger maken.</p>"
        }
      ]
    },
    {
      "id": "quotient",
      "title": "De quotiëntschatter",
      "phase": "Schatten",
      "intro": "Bij een ongeveer vast foutpercentage past een verhouding beter dan een vast foutbedrag. Je vermenigvuldigt de totale boekwaarde met de geschatte goedratio.",
      "goals": [
        "Een foutbedrag onderscheiden van een foutpercentage",
        "De goedratio correct berekenen",
        "De onzekerheid van de quotiëntschatter bepalen"
      ],
      "sections": [
        {
          "title": "Een vast percentage herkennen",
          "html": "<p>Een artikel van € 100 blijkt € 90 waard, een artikel van € 200 blijkt € 180 waard. Het verschil is niet hetzelfde bedrag, maar de werkelijke waarde is telkens 90% van de boekwaarde. De <strong>goedratio</strong> q is de verhouding werkelijke waarde / boekwaarde.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Goedratio</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Goedratio\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>q</mi><mo>=</mo><mfrac><mrow><mo>∑</mo><mi>w</mi></mrow><mrow><mo>∑</mo><mi>b</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow><mrow><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>b</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Puntschatting</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Puntschatting\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>Q</mtext></msub><mo>=</mo><mi>q</mi><mo>×</mo><mi>B</mi></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>q = goedratio; R_bw = correlatie tussen b en w; s_b en s_w = standaardafwijkingen; s_Q = standaardfout van het geschatte totaal.</p></details><p>Bereken de verhouding van de sommen. Neem niet zomaar het gemiddelde van alle losse verhoudingen wᵢ/bᵢ. De slides noemen ook hier als voorwaarde minstens 30 fouten in de steekproef.</p>"
        },
        {
          "title": "Spreiding die na de verhouding overblijft",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Resterende spreiding</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Resterende spreiding\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><mtext>q</mtext></msub><mo>=</mo><msqrt><msup><msub><mi>s</mi><mi>w</mi></msub><mn>2</mn></msup><mo>−</mo><mrow><mn>2</mn><mi>q</mi><msub><mi>R</mi><mi>bw</mi></msub><msub><mi>s</mi><mi>b</mi></msub><msub><mi>s</mi><mi>w</mi></msub></mrow><mo>+</mo><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><msub><mi>s</mi><mi>b</mi></msub><mn>2</mn></msup></mrow></msqrt></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Standaardfout</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Standaardfout\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><mtext>Q</mtext></msub><mo>=</mo><mi>N</mi><mo>×</mo><mfrac><mrow><msub><mi>s</mi><mtext>q</mtext></msub></mrow><mrow><msqrt><mi>n</mi></msqrt></mrow></mfrac><mo>×</mo><msqrt><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt></mrow></math></div></div></div><p>R<sub>bw</sub> is de correlatie tussen boekwaarde en werkelijke waarde. Het formuleblad noemt s<sub>q</sub> de standaardafwijking van q, maar deze tussenmaat wordt volgens formule 13 in dezelfde geldeenheid als b en w berekend. Gebruik daarna formule 17 voor de standaardfout van het geschatte totaal.</p><p>Heb je fouttotalen, dan biedt formule 14 een tweede route: s<sub>q</sub> = √([Σe² − 2(1−q)Σbe + (1−q)²Σb²]/(n−1)). Kies de route die past bij de verstrekte gegevens. Het interval is weer de puntschatting ± t × standaardfout.</p>"
        }
      ],
      "example": {
        "title": "Voorbeeld: 95% van de boekwaarde",
        "steps": [
          "Σw = € 19.000 en Σb = € 20.000: q = 0,95.",
          "Bij B = € 500.000 is Ŵ_Q = 0,95 × 500.000 = € 475.000.",
          "Stel s_w = 38, s_b = 40 en R_bw = 0,98. Dan s_q² = 38² − 2 × 0,95 × 0,98 × 40 × 38 + 0,95² × 40² = 57,76.",
          "Dus s_q = 7,60. Vul deze spreiding samen met N en n in formule 17 in om de totale standaardfout te krijgen."
        ]
      },
      "pitfalls": [
        "De goedratio is w/b, niet b/w.",
        "Een verhouding van sommen is niet hetzelfde als een ongewogen gemiddelde van ratios."
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
      "questions": [
        {
          "id": "quotient-1",
          "prompt": "Σw = 90.000 en Σb = 100.000. Wat is q?",
          "options": [
            "1,111",
            "0,90",
            "0,10"
          ],
          "correct": 1,
          "explanation": "De goedratio q vergelijkt de totale werkelijke waarde met de totale boekwaarde in de steekproef. Gebruik q = Σw/Σb = 90.000/100.000 = 0,90. De werkelijke waarde is hier dus 90% van de boekwaarde; de ontbrekende 10% is het foutaandeel ten opzichte van de boekwaarde.",
          "steps": [
            "De goedratio q vergelijkt de totale werkelijke waarde met de totale boekwaarde in de steekproef.",
            "Gebruik q = Σw/Σb = 90.000/100.000 = 0,90.",
            "De werkelijke waarde is hier dus 90% van de boekwaarde; de ontbrekende 10% is het foutaandeel ten opzichte van de boekwaarde."
          ],
          "pattern": "Herken: Σw en Σb, met de goedratio q als vraag. → Betekenis: De ratio geeft de werkelijke waarde per euro boekwaarde in de steekproef. → Aanpak: Deel de som van de werkelijke waarden door de som van de boekwaarden. → Gevraagd antwoord: Een dimensieloze goedratio, niet haar omgekeerde of het foutaandeel.",
          "trap": "q en 1 − q hebben een andere betekenis: goedaandeel tegenover foutaandeel.",
          "optionExplanations": [
            "1,111 is ongeveer 100.000/90.000. Dat is de omgekeerde verhouding en niet de gevraagde goedratio.",
            "0,90 klopt: per euro boekwaarde is in de steekproef € 0,90 werkelijke waarde vastgesteld.",
            "0,10 is 1 − 0,90: het foutaandeel. De vraag vraagt het aandeel dat wél werkelijke waarde vertegenwoordigt."
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
          }
        },
        {
          "id": "quotient-2",
          "prompt": "Welk patroon past het best?",
          "options": [
            "Elke post is circa € 5 te hoog",
            "Elke post is circa 8% te hoog",
            "Geen enkele boekwaarde is bekend"
          ],
          "correct": 1,
          "explanation": "De quotiëntschatter gebruikt een relatief stabiele verhouding tussen werkelijke waarde en boekwaarde. Een afwijking van ongeveer hetzelfde percentage per post past bij zo’n verhouding. Een ongeveer vast euroverschil per post past eerder bij de verschilschatter.",
          "steps": [
            "De quotiëntschatter gebruikt een relatief stabiele verhouding tussen werkelijke waarde en boekwaarde.",
            "Een afwijking van ongeveer hetzelfde percentage per post past bij zo’n verhouding.",
            "Een ongeveer vast euroverschil per post past eerder bij de verschilschatter."
          ],
          "pattern": "Herken: Vergelijk in de opties een vast euroverschil met een vast foutpercentage. → Betekenis: Een quotiëntschatter past bij een ongeveer constante verhouding w/b. → Aanpak: Zoek het patroon waarbij kleine en grote posten relatief ongeveer evenveel afwijken. → Gevraagd antwoord: Een herkenning van relatieve afwijkingen als grond voor de schatterkeuze.",
          "trap": "Een vast percentage is niet hetzelfde als een vast bedrag.",
          "optionExplanations": [
            "Circa € 5 verschil per post wijst op een stabiele absolute fout. Dat patroon past eerder bij de verschilschatter.",
            "Circa 8% overwaardering duidt op een vergelijkbare verhouding tussen boekwaarde en werkelijke waarde. Dat past bij een quotiëntschatter.",
            "Zonder boekwaarden kun je Σw/Σb niet bepalen en de ratio niet op B toepassen."
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
          }
        },
        {
          "id": "quotient-3",
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
          }
        }
      ],
      "lab": "quotient",
      "exam": null,
      "prerequisites": [
        "Les 4: boekwaardetotaal, steekproefgegevens en onzekerheidsmarge onderscheiden.",
        "Les 2: rekenen met verhoudingen, kwadraten en standaardafwijkingen."
      ],
      "formulaGuide": [
        {
          "title": "Een redelijk vaste verhouding gebruiken",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik de quotiëntschatter wanneer werkelijke waarde en boekwaarde ongeveer evenredig samenhangen: bij grotere boekwaarden zijn de afwijkingen vooral procentueel vergelijkbaar. Je gebruikt de verhouding van de totale gecontroleerde waarden.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Goedratio</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Goedratio\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>q</mi><mo>=</mo><mfrac><mrow><mo>∑</mo><mi>w</mi></mrow><mrow><mo>∑</mo><mi>b</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow><mrow><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>b</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Puntschatting</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Puntschatting\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>Q</mtext></msub><mo>=</mo><mi>q</mi><mo>×</mo><mi>B</mi></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Resterende spreiding</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Resterende spreiding\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><mtext>q</mtext></msub><mo>=</mo><msqrt><msup><msub><mi>s</mi><mi>w</mi></msub><mn>2</mn></msup><mo>−</mo><mrow><mn>2</mn><mi>q</mi><msub><mi>R</mi><mi>bw</mi></msub><msub><mi>s</mi><mi>b</mi></msub><msub><mi>s</mi><mi>w</mi></msub></mrow><mo>+</mo><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><msub><mi>s</mi><mi>b</mi></msub><mn>2</mn></msup></mrow></msqrt></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Standaardfout</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Standaardfout\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><mtext>Q</mtext></msub><mo>=</mo><mi>N</mi><mo>×</mo><mfrac><mrow><msub><mi>s</mi><mtext>q</mtext></msub></mrow><mrow><msqrt><mi>n</mi></msqrt></mrow></mfrac><mo>×</mo><msqrt><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>q = goedratio; R_bw = correlatie tussen b en w; s_b en s_w = standaardafwijkingen; s_Q = standaardfout van het geschatte totaal. B is het boekwaardetotaal van de hele populatie. s_q is de resterende spreiding na de verhoudingcorrectie; n en N horen daarna in de standaardfout van het totaal.</p><h3>Zo reken je stap voor stap</h3><ol><li>Bereken q = Σw / Σb. Controleer dat de gebruikte boekwaardesom niet nul is.</li><li>Vermenigvuldig q met B voor de geschatte totale werkelijke waarde.</li><li>Bereken de drie termen van s_q² zorgvuldig, inclusief het minteken van de middelste term.</li><li>Neem één wortel om s_q te krijgen. Vul vervolgens s_q in de standaardfoutformule in.</li><li>Als een interval gevraagd wordt: bepaal t en maak Ŵ_Q ± t × s_Q. Zonder N en n kun je uit het korte voorbeeld nog geen numerieke standaardfout van het totaal berekenen.</li></ol><h3>Voorbeeld: 95% van de boekwaarde</h3><ol><li>Σw = € 19.000 en Σb = € 20.000: q = 0,95.</li><li>Bij B = € 500.000 is Ŵ_Q = 0,95 × 500.000 = € 475.000.</li><li>Stel s_w = 38, s_b = 40 en R_bw = 0,98. Dan s_q² = 38² − 2 × 0,95 × 0,98 × 40 × 38 + 0,95² × 40² = 57,76.</li><li>Dus s_q = 7,60. Vul deze spreiding samen met N en n in formule 17 in om de totale standaardfout te krijgen.</li></ol><p class=\"note\"><strong>Let op:</strong> Het gaat om Σw/Σb, niet om het ongewogen gemiddelde van de verhoudingen per post. Bij q = 0,95 is de geschatte werkelijke waarde 95% van B, niet een afwijking van 95%.</p>"
        }
      ]
    },
    {
      "id": "regressieschatter",
      "title": "De regressieschatter",
      "phase": "Schatten",
      "intro": "Boekwaarden kunnen veel vertellen over werkelijke waarden, zonder dat het verschil of percentage constant is. De regressieschatter benut een lineair verband.",
      "goals": [
        "De correctie op MPU begrijpen",
        "De richtingscoëfficiënt berekenen",
        "Het voordeel van sterke correlatie verklaren"
      ],
      "sections": [
        {
          "title": "Corrigeren voor een afwijkende steekproef",
          "html": "<p>Een aselecte steekproef kan toevallig artikelen met relatief hoge boekwaarden bevatten. De regressieschatter gebruikt het bekende populatietotaal B om daarvoor te corrigeren. Een <strong>lineair verband</strong> is een verband dat je met een rechte lijn beschrijft.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Helling</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Helling\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>b</mi><mn>1</mn></msub><mo>=</mo><msub><mi>R</mi><mi>bw</mi></msub><mo>×</mo><mfrac><mrow><msub><mi>s</mi><mi>w</mi></msub></mrow><mrow><msub><mi>s</mi><mi>b</mi></msub></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Puntschatting</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Puntschatting\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>R</mtext></msub><mo>=</mo><mrow><mi>N</mi><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><mrow><mo>(</mo><mi>B</mi><mo>−</mo><mrow><mi>N</mi><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>b</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow><mo>)</mo></mrow></mrow></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>b₁ = helling; R_bw = correlatie; B = bekend boekwaardetotaal. De factor √(1 − R²_bw) verlaagt de standaardfout ten opzichte van MPU.</p></details><p>Het eerste deel is MPU. Het tweede deel corrigeert het verschil tussen de echte totale boekwaarde B en de vanuit de steekproef geschatte boekwaarde Nb̄. Let op: bᵢ is een boekwaarde, maar b₁ is hier een regressiecoëfficiënt. De context bepaalt de betekenis.</p>"
        },
        {
          "title": "Waarom kan het interval smaller worden?",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Standaardfout</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Standaardfout\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><mtext>R</mtext></msub><mo>=</mo><mi>N</mi><mo>×</mo><mfrac><mrow><msub><mi>s</mi><mi>w</mi></msub></mrow><mrow><msqrt><mi>n</mi></msqrt></mrow></mfrac><mo>×</mo><msqrt><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt><mo>×</mo><msqrt><mn>1</mn><mo>−</mo><msup><msub><mi>R</mi><mi>bw</mi></msub><mn>2</mn></msup></msqrt></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Vergelijk met MPU</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Vergelijk met MPU\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><mtext>R</mtext></msub><mo>=</mo><msub><mi>s</mi><mtext>MPU</mtext></msub><mo>×</mo><msqrt><mn>1</mn><mo>−</mo><msup><msub><mi>R</mi><mi>bw</mi></msub><mn>2</mn></msup></msqrt></mrow></math></div></div></div><p>De factor √(1−R²) haalt het verklaarde deel van de spreiding weg. Bij R = 0,8 is die factor 0,6. De standaardfout is dan 60% van die bij MPU, onder dezelfde overige omstandigheden. Bij zwakke correlatie is de winst beperkt.</p><p>Dit is de regressieschatter uit hoofdstuk 8: het doel is een <strong>populatietotaal</strong>. Later gebruik je regressie om een y-waarde bij een x-waarde te voorspellen. Dat is een andere vraag en heeft een andere intervalformule.</p>"
        },
        {
          "title": "Een smaller interval moet ook geldig zijn",
          "html": "<p>De factor √(1 − R²) verkleint de berekende standaardfout, maar maakt een ongeschikte foutverdeling niet geschikt. Het boek bespreekt dat het interval bij ongunstige foutpatronen de werkelijke waarde te vaak kan missen. Kies dus op grond van het verband en de foutstructuur, en controleer de voorwaarden. Een smaller interval is meer berekende precisie, geen hogere gekozen betrouwbaarheid.</p>"
        }
      ],
      "example": {
        "title": "Tentamen 28 oktober 2024, vraag 1",
        "steps": [
          "N = 2.130; n = 180; B = € 1.810.500; Σw = 161.300; Σb = 164.500; s_w = 82,1; s_b = 83,3; R = 0,925.",
          "b₁ = 0,925 × 82,1/83,3 = 0,9116747.",
          "w̄ = 896,1111 en b̄ = 913,8889.",
          "De officiële uitwerking geeft Ŵ_R = € 1.784.652,89. Met volledig onafgeronde tussenwaarden volgt € 1.784.652,94; het verschil van enkele centen verandert de gevraagde afgeronde grenzen niet.",
          "De bron geeft s_R = € 4.739,8643; volledig onafgerond volgt € 4.739,8214. Bij 95% en df = 179 gebruik je tabelrij 170: t = 1,974.",
          "Interval vóór afronding: [€ 1.775.296,40; € 1.794.009,38]. Op € 100 naar buiten: [€ 1.775.200; € 1.794.100]."
        ]
      },
      "pitfalls": [
        "B is de boekwaarde van de hele populatie, Σb alleen die van de steekproef.",
        "Gebruik hier geen voorspellingsinterval voor een individuele nieuwe waarneming."
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
      "questions": [
        {
          "id": "regressieschatter-1",
          "prompt": "B = Nb̄. Wat wordt de correctie op MPU?",
          "options": [
            "N",
            "0",
            "b₁"
          ],
          "correct": 1,
          "explanation": "De regressieschatter is Ŵ_R = Nw̄ + b₁(B − Nb̄). Als B = Nb̄, is het verschil tussen het bekende en het geschatte boektotaal nul. De volledige correctie wordt b₁ × 0 = 0. Daardoor valt Ŵ_R in dit geval samen met MPU: Nw̄.",
          "steps": [
            "De regressieschatter is Ŵ_R = Nw̄ + b₁(B − Nb̄).",
            "Als B = Nb̄, is het verschil tussen het bekende en het geschatte boektotaal nul.",
            "De volledige correctie wordt b₁ × 0 = 0. Daardoor valt Ŵ_R in dit geval samen met MPU: Nw̄."
          ],
          "pattern": "Herken: B = Nb̄ en “correctie op MPU”. → Betekenis: De regressieschatter corrigeert het verschil tussen bekend en via de steekproef geschat boektotaal. → Aanpak: Bekijk de factor B − Nb̄ in b₁(B − Nb̄) voordat je verder rekent. → Gevraagd antwoord: De correctieterm; onderscheid die van de volledige schatting.",
          "trap": "Een niet-nulle regressiehelling veroorzaakt geen correctie als de factor ernaast nul is.",
          "optionExplanations": [
            "N is de populatieomvang. De correctie is b₁(B − Nb̄), en die wordt hier nul ongeacht de omvang van N.",
            "0 klopt: het verschil B − Nb̄ is nul en daarmee ook het product met b₁.",
            "b₁ is alleen de helling. Voor de correctie moet je die vermenigvuldigen met B − Nb̄, en dat verschil is nul."
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
          }
        },
        {
          "id": "regressieschatter-2",
          "prompt": "R = 0,8. Met welke factor vermenigvuldig je s_MPU?",
          "options": [
            "0,2",
            "0,64",
            "0,6"
          ],
          "correct": 2,
          "explanation": "Volgens de behandelde formule vermenigvuldig je s_MPU met √(1 − R²). Bij R = 0,8 is R² = 0,64 en 1 − R² = 0,36. Neem de wortel: √0,36 = 0,6. De nieuwe standaardfout is dus 60% van s_MPU.",
          "steps": [
            "Volgens de behandelde formule vermenigvuldig je s_MPU met √(1 − R²).",
            "Bij R = 0,8 is R² = 0,64 en 1 − R² = 0,36.",
            "Neem de wortel: √0,36 = 0,6. De nieuwe standaardfout is dus 60% van s_MPU."
          ],
          "pattern": "Herken: R gegeven en gevraagd naar een factor voor s_MPU. → Betekenis: Een standaardfout gebruikt de wortel uit het onverklaarde variantieaandeel. → Aanpak: Bereken achtereenvolgens R², 1 − R² en √(1 − R²). → Gevraagd antwoord: Een vermenigvuldigingsfactor voor de standaardfout, niet R of R².",
          "trap": "R, R² en √(1 − R²) zijn drie verschillende getallen.",
          "optionExplanations": [
            "0,2 is 1 − R. De formule vraagt eerst R kwadrateren, van 1 aftrekken en daarna de wortel nemen.",
            "0,64 is R², niet de correctiefactor voor de standaardfout. De factor is √(1 − 0,64).",
            "0,6 klopt: √(1 − 0,8²) = √0,36 = 0,6."
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
          }
        },
        {
          "id": "regressieschatter-3",
          "prompt": "Wat schat je hier?",
          "options": [
            "Het totale W van de populatie",
            "De waarde van één nieuwe persoon",
            "Alleen de correlatie"
          ],
          "correct": 0,
          "explanation": "Deze regressieschatter staat in het onderdeel schatten van totale populatiewaarden. Het lineaire verband tussen boekwaarde b en werkelijke waarde w helpt het populatietotaal W te schatten. Dat is een ander doel dan een regressielijn gebruiken om y voor één nieuwe persoon te voorspellen.",
          "steps": [
            "Deze regressieschatter staat in het onderdeel schatten van totale populatiewaarden.",
            "Het lineaire verband tussen boekwaarde b en werkelijke waarde w helpt het populatietotaal W te schatten.",
            "Dat is een ander doel dan een regressielijn gebruiken om y voor één nieuwe persoon te voorspellen."
          ],
          "pattern": "Herken: “Hier” verwijst naar de regressieschatter met W, N en B in deze les. → Betekenis: Regressie wordt hier ingezet om een werkelijk populatietotaal te schatten. → Aanpak: Koppel W aan het totale bedrag en B aan de beschikbare hulpinformatie. → Gevraagd antwoord: Het schattingsdoel: een populatietotaal, geen voorspelling voor één persoon.",
          "trap": "Het woord regressie betekent niet dat iedere opgave een individuele voorspelling vraagt.",
          "optionExplanations": [
            "Het doel is het totale W van de populatie. De regressie levert daarbij een correctie op de directe totaalschatting.",
            "Een nieuwe persoon voorspellen hoort bij regressievoorspelling. De hier behandelde schatter gebruikt N en B voor een populatietotaal.",
            "Correlatie is een hulpmiddel in de berekening en onzekerheid. De uiteindelijke gevraagde grootheid is W."
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
          }
        }
      ],
      "lab": "regressieschatter",
      "exam": "exam2024:1:Vraag 1–3",
      "prerequisites": [
        "Les 4: de MPU-schatting en de standaardfout van een geschat totaal.",
        "Les 6: boekwaarde en werkelijke waarde kunnen extra samenhang bevatten.",
        "Een helling lezen: hoeveel de geschatte werkelijke waarde verandert als de boekwaarde één eenheid stijgt."
      ],
      "formulaGuide": [
        {
          "title": "De directe schatting aanpassen met de boekwaarde",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik de regressieschatter wanneer de samenhang tussen boekwaarde en werkelijke waarde door een rechte lijn kan worden beschreven, zonder dat die lijn noodzakelijk door de oorsprong loopt. Het bekende boekwaardetotaal helpt de directe schatting te verbeteren.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Helling</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Helling\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>b</mi><mn>1</mn></msub><mo>=</mo><msub><mi>R</mi><mi>bw</mi></msub><mo>×</mo><mfrac><mrow><msub><mi>s</mi><mi>w</mi></msub></mrow><mrow><msub><mi>s</mi><mi>b</mi></msub></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Puntschatting</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Puntschatting\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>R</mtext></msub><mo>=</mo><mrow><mi>N</mi><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><mrow><mo>(</mo><mi>B</mi><mo>−</mo><mrow><mi>N</mi><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>b</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow><mo>)</mo></mrow></mrow></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Standaardfout</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Standaardfout\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><mtext>R</mtext></msub><mo>=</mo><mi>N</mi><mo>×</mo><mfrac><mrow><msub><mi>s</mi><mi>w</mi></msub></mrow><mrow><msqrt><mi>n</mi></msqrt></mrow></mfrac><mo>×</mo><msqrt><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt><mo>×</mo><msqrt><mn>1</mn><mo>−</mo><msup><msub><mi>R</mi><mi>bw</mi></msub><mn>2</mn></msup></msqrt></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Vergelijk met MPU</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Vergelijk met MPU\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><mtext>R</mtext></msub><mo>=</mo><msub><mi>s</mi><mtext>MPU</mtext></msub><mo>×</mo><msqrt><mn>1</mn><mo>−</mo><msup><msub><mi>R</mi><mi>bw</mi></msub><mn>2</mn></msup></msqrt></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>b₁ = helling; R_bw = correlatie; B = bekend boekwaardetotaal. De factor √(1 − R²_bw) verlaagt de standaardfout ten opzichte van MPU. s_w en s_b zijn de standaardafwijkingen van de werkelijke en geboekte steekproefwaarden. w̄ en b̄ zijn de bijbehorende gemiddelden. s_R is de standaardfout van de totale schatting.</p><h3>Zo reken je stap voor stap</h3><ol><li>Bereken de helling b₁ = R_bw × s_w/s_b.</li><li>Bereken eerst de directe totaalschatting N × w̄.</li><li>Bereken B − N × b̄. Dit is het verschil tussen het bekende boekwaardetotaal en het boekwaardetotaal dat de steekproef suggereert.</li><li>Vermenigvuldig dit verschil met b₁ en tel de correctie bij N × w̄ op.</li><li>Bereken de MPU-standaardfout uit s_w en vermenigvuldig met √(1 − R_bw²).</li><li>Gebruik die s_R voor de intervalmarge. Bewaar voldoende decimalen en vermeld een relevant afrondingsverschil met de uitwerking.</li></ol><h3>Tentamen 28 oktober 2024, vraag 1</h3><ol><li>N = 2.130; n = 180; B = € 1.810.500; Σw = 161.300; Σb = 164.500; s_w = 82,1; s_b = 83,3; R = 0,925.</li><li>b₁ = 0,925 × 82,1/83,3 = 0,9116747.</li><li>w̄ = 896,1111 en b̄ = 913,8889.</li><li>De officiële uitwerking geeft Ŵ_R = € 1.784.652,89. Met volledig onafgeronde tussenwaarden volgt € 1.784.652,94; het verschil van enkele centen verandert de gevraagde afgeronde grenzen niet.</li><li>De bron geeft s_R = € 4.739,8643; volledig onafgerond volgt € 4.739,8214. Bij 95% en df = 179 gebruik je tabelrij 170: t = 1,974.</li><li>Interval vóór afronding: [€ 1.775.296,40; € 1.794.009,38]. Op € 100 naar buiten: [€ 1.775.200; € 1.794.100].</li></ol><p class=\"note\"><strong>Let op:</strong> Σb is alleen de som in de steekproef; B is het bekende populatietotaal. Dit interval hoort bij de totale waarde, niet bij één toekomstige individuele waarneming.</p>"
        },
        {
          "title": "Een smaller interval moet ook geldig zijn",
          "html": "<p>De factor √(1 − R²) verkleint de berekende standaardfout, maar maakt een ongeschikte foutverdeling niet geschikt. Het boek bespreekt dat het interval bij ongunstige foutpatronen de werkelijke waarde te vaak kan missen. Kies dus op grond van het verband en de foutstructuur, en controleer de voorwaarden. Een smaller interval is meer berekende precisie, geen hogere gekozen betrouwbaarheid.</p>"
        }
      ]
    },
    {
      "id": "steekproefomvang",
      "title": "Hoeveel posten moet je controleren?",
      "phase": "Schatten",
      "intro": "Als het interval te breed is, kun je berekenen hoeveel waarnemingen nodig zijn voor de gewenste marge. Daarbij moet je eerst bepalen welke spreiding bij de schatter hoort.",
      "goals": [
        "Breedte vertalen naar E",
        "De juiste variantie kiezen",
        "Omvang en uitbreiding uit elkaar houden"
      ],
      "sections": [
        {
          "title": "Werk terug vanaf de gewenste precisie",
          "html": "<p>De gebruikelijke vraag luidt: hoe groot moet n zijn om een bepaalde <strong>onnauwkeurigheid</strong> E te halen? E is de halve intervalbreedte. Het formuleblad gebruikt een tussenstap γ (gamma). Die maakt de omvangsformule overzichtelijk.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Tussenstap</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Tussenstap\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mrow><msup><mi>E</mi><mn>2</mn></msup></mrow><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>×</mo><mi>N</mi><mo>×</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Benodigde omvang</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Benodigde omvang\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mi>N</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>γ</mi></mrow></mfrac></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>E = toegestane marge aan één kant; t = kritieke waarde; N = populatieomvang; s² = de variantie passend bij de schatter; γ = tussenuitkomst.</p></details><p>Voor MPU is s² = s²_w. Voor de verschilschatter is s² = s²_e. Voor de regressieschatter staat in de noemer bovendien de factor (1 − R²_bw). Gebruik de in de opgave of uitwerking gehanteerde t-waarde; deze planningsformule is de formulebladroute.</p>"
        },
        {
          "title": "Rond in de veilige richting",
          "html": "<p>Een vereiste omvang van 520,122 wordt 521. Naar beneden afronden levert minder waarnemingen dan vereist. Is er al een steekproef van 180 posten, dan is de <strong>uitbreiding</strong> 521 − 180 = 341. Geef duidelijk aan welk aantal je antwoord is.</p><p>Bij gelijkblijvende andere gegevens vraagt hogere betrouwbaarheid een grotere steekproef. Een kleinere toegestane marge vraagt ook meer waarnemingen. Verdubbeling van de marge maakt de vereiste steekproef juist kleiner. De eindige populatie begrenst de omvang.</p>"
        },
        {
          "title": "Uitbreiding na stratificatie",
          "html": "<p>De totale variantie is de som van de variantiebijdragen van de strata. Bij een gewenste marge E hoort maximaal (E/t)² totale variantie. Houd voor een planningsberekening de gegeven t-waarde en geschatte spreidingen vast; na de aanvullende controle beoordeel je de nieuwe uitkomsten opnieuw.</p><h3>Cursusopgave H8.9b/c</h3><ol><li>De oorspronkelijke schatting is € 6.678.000 met s_tot ≈ € 256.153 en t = 1,978. De marge is circa € 506.670, dus meer dan de gewenste € 500.000.</li><li>De maximaal toegestane standaardfout is 500.000 / 1,978 ≈ € 252.780. De totale variantie moet ongeveer 1,717 × 10⁹ afnemen.</li><li>Stratum 3 draagt het meest bij: s_3,totaal ≈ € 135.645,95. Trek de benodigde vermindering van deze gekwadrateerde bijdrage af. De gewenste bijdrage wordt circa 1,6683 × 10¹⁰.</li><li>Gebruik de cursusbenadering γ₃ = gewenste variantiebijdrage / (N₃ × s₃²). Met N₃ = 300 en s₃ = 2.606,15 volgt γ₃ ≈ 8,1876.</li><li>Nieuwe totale n₃ = 300 / (1 + 8,1876) ≈ 32,65. Rond omhoog naar 33. Er waren 30 controles, dus voeg 3 toe.</li><li>Controleer de marge met n₃ = 33 en de overige strata ongewijzigd. Bij de vastgehouden planningswaarden daalt die tot ongeveer € 499.443.</li></ol><p class=\"note\">De cursusuitwerking gebruikt de gebruikelijke N − 1 ≈ N-benadering bij het terugrekenen van n. Met de exacte eindigheidscorrectie volgt hier eveneens 33. Wordt de benodigde bijdrage negatief, dan kan uitbreiding van alleen dit stratum niet volstaan. Meer controles dan Nᵢ zijn onmogelijk. Voeg varianties samen, niet standaardfouten.</p>"
        },
        {
          "title": "Omvang bij de quotiëntschatter",
          "html": "<p>Gebruik dezelfde planningsstructuur als bij de andere totaalschatters, met de resterende spreiding s_q van de quotiëntschatter: γ = E²/(t² × N × s_q²) en n = N/(1 + γ). Dit is de cursusbenadering met N − 1 ≈ N. s_q heeft een waarde-eenheid; vul hier niet de dimensieloze goedratio q in. Houd bij planning de gegeven t en spreiding vast en rond n naar boven af.</p><h3>Voorbeeld bij slides PDF 34–36</h3><ol><li>N = 1.000, t = 2, s_q = 7,60 en gewenste marge E = € 1.000.</li><li>γ = 1.000²/(2² × 1.000 × 7,60²) ≈ 4,32825.</li><li>n = 1.000/(1 + 4,32825) ≈ 187,679. Plan dus minimaal 188 controles.</li><li>Als al 100 posten zijn gecontroleerd, zijn volgens deze planning nog 88 nodig. Herbeoordeel het interval na de uitbreiding.</li></ol>"
        },
        {
          "title": "Zelf oefenen met deze aanvulling",
          "html": "<p>Maak de eigen oefenvarianten bij dit onderwerp. Je krijgt na controle rekenstappen, uitleg per antwoord en de gebruikte bronnen.</p><p><a class=\"study-btn\" href=\"#tentamen/mc/steekproefomvang\">Oefen Hoeveel posten moet je controleren?</a></p>"
        }
      ],
      "example": {
        "title": "Tentamen 28 oktober 2024, vraag 2",
        "steps": [
          "Gewenste totale breedte: € 10.000, dus E = € 5.000.",
          "Gebruik de gegevens van de regressieschatter: N = 2.130, s_w = 82,1, R = 0,925 en t = 1,974.",
          "γ = 5.000² / [1,974² × 2.130 × 82,1² × (1 − 0,925²)] ≈ 3,09519.",
          "n = 2.130 / (1 + 3,09519) ≈ 520,122. Rond op naar 521.",
          "Er zijn al 180 posten gecontroleerd; nog nodig: 341."
        ]
      },
      "pitfalls": [
        "Gebruik geen volledige intervalbreedte in plaats van E.",
        "Verwar totale omvang niet met aanvullende controles."
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
      "questions": [
        {
          "id": "steekproefomvang-1",
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
          }
        },
        {
          "id": "steekproefomvang-2",
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
          }
        },
        {
          "id": "steekproefomvang-3",
          "prompt": "Welke variantie hoort in de omvangsformule voor de verschilschatter?",
          "options": [
            "s²_w",
            "s²_e",
            "s²_b"
          ],
          "correct": 1,
          "explanation": "De verschilschatter schat de correctie op B via de verschillen e = b − w. De benodigde omvang moet daarom worden afgestemd op de spreiding van die verschillen. Gebruik s²_e in de omvangsformule. s²_w hoort bij de directe schatter en s²_b beschrijft alleen boekwaarden.",
          "steps": [
            "De verschilschatter schat de correctie op B via de verschillen e = b − w.",
            "De benodigde omvang moet daarom worden afgestemd op de spreiding van die verschillen.",
            "Gebruik s²_e in de omvangsformule. s²_w hoort bij de directe schatter en s²_b beschrijft alleen boekwaarden."
          ],
          "pattern": "Herken: “Omvangsformule” samen met “verschilschatter”. → Betekenis: De planning moet dezelfde onzekerheidsbron gebruiken als de gekozen schatter. → Aanpak: Selecteer de variantie van e = b − w in plaats van die van w of b. → Gevraagd antwoord: De passende foutvariantie s_e² voor de omvangsberekening.",
          "trap": "De drie varianties kunnen verschillende waarden hebben en zijn niet uitwisselbaar.",
          "optionExplanations": [
            "s²_w is de variantie van werkelijke waarden. Voor de onzekerheid van een verschilcorrectie heb je de variantie van e nodig.",
            "s²_e is de juiste variantie, omdat de verschilschatter de fouten e = b − w gebruikt.",
            "s²_b beschrijft verschillen tussen boekwaarden. Daaruit volgt niet hoe sterk de controlefouten b − w spreiden."
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
          }
        }
      ],
      "lab": "omvang",
      "exam": null,
      "prerequisites": [
        "Les 3: de marge E is de helft van de totale intervalbreedte.",
        "Lessen 4–7: de spreiding kiezen die bij de gebruikte schatter hoort."
      ],
      "formulaGuide": [
        {
          "title": "Terugrekenen vanaf de toegestane marge",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik de omvangsformule vóór of tijdens een controle als je wilt weten hoeveel posten nodig zijn om een gegeven nauwkeurigheid te bereiken. De onderstaande vorm is de planningsroute van het formuleblad.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Tussenstap</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Tussenstap\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mrow><msup><mi>E</mi><mn>2</mn></msup></mrow><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>×</mo><mi>N</mi><mo>×</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Benodigde omvang</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Benodigde omvang\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mi>N</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>γ</mi></mrow></mfrac></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>E = toegestane marge aan één kant; t = kritieke waarde; N = populatieomvang; s² = de variantie passend bij de schatter; γ = tussenuitkomst. Voor MPU gebruik je s_w²; voor verschillen s_e². Bij de regressieschatter is de passende resterende variantie s_w² × (1 − R_bw²).</p><h3>Zo reken je stap voor stap</h3><ol><li>Vertaal de gewenste totale intervalbreedte naar E door de breedte te halveren.</li><li>Kies de variantie die bij de schatter hoort. Bij regressie moet de factor 1 − R_bw² dus worden meegenomen.</li><li>Gebruik de t-waarde volgens de opgave of de gevolgde uitwerking en bereken γ.</li><li>Bereken n = N/(1 + γ). Rond het vereiste aantal altijd naar boven af.</li><li>Wordt om uitbreiding gevraagd? Trek het aantal al gecontroleerde posten van het benodigde totale aantal af.</li></ol><h3>Tentamen 28 oktober 2024, vraag 2</h3><ol><li>Gewenste totale breedte: € 10.000, dus E = € 5.000.</li><li>Gebruik de gegevens van de regressieschatter: N = 2.130, s_w = 82,1, R = 0,925 en t = 1,974.</li><li>γ = 5.000² / [1,974² × 2.130 × 82,1² × (1 − 0,925²)] ≈ 3,09519.</li><li>n = 2.130 / (1 + 3,09519) ≈ 520,122. Rond op naar 521.</li><li>Er zijn al 180 posten gecontroleerd; nog nodig: 341.</li></ol><p class=\"note\"><strong>Let op:</strong> Vul geen totale intervalbreedte in waar E staat. Een uitkomst van 520,122 vraagt om 521 controles in totaal; hoeveel extra nodig zijn hangt af van wat al gecontroleerd is.</p>"
        },
        {
          "title": "Uitbreiding na stratificatie",
          "html": "<p>De totale variantie is de som van de variantiebijdragen van de strata. Bij een gewenste marge E hoort maximaal (E/t)² totale variantie. Houd voor een planningsberekening de gegeven t-waarde en geschatte spreidingen vast; na de aanvullende controle beoordeel je de nieuwe uitkomsten opnieuw.</p><h3>Cursusopgave H8.9b/c</h3><ol><li>De oorspronkelijke schatting is € 6.678.000 met s_tot ≈ € 256.153 en t = 1,978. De marge is circa € 506.670, dus meer dan de gewenste € 500.000.</li><li>De maximaal toegestane standaardfout is 500.000 / 1,978 ≈ € 252.780. De totale variantie moet ongeveer 1,717 × 10⁹ afnemen.</li><li>Stratum 3 draagt het meest bij: s_3,totaal ≈ € 135.645,95. Trek de benodigde vermindering van deze gekwadrateerde bijdrage af. De gewenste bijdrage wordt circa 1,6683 × 10¹⁰.</li><li>Gebruik de cursusbenadering γ₃ = gewenste variantiebijdrage / (N₃ × s₃²). Met N₃ = 300 en s₃ = 2.606,15 volgt γ₃ ≈ 8,1876.</li><li>Nieuwe totale n₃ = 300 / (1 + 8,1876) ≈ 32,65. Rond omhoog naar 33. Er waren 30 controles, dus voeg 3 toe.</li><li>Controleer de marge met n₃ = 33 en de overige strata ongewijzigd. Bij de vastgehouden planningswaarden daalt die tot ongeveer € 499.443.</li></ol><p class=\"note\">De cursusuitwerking gebruikt de gebruikelijke N − 1 ≈ N-benadering bij het terugrekenen van n. Met de exacte eindigheidscorrectie volgt hier eveneens 33. Wordt de benodigde bijdrage negatief, dan kan uitbreiding van alleen dit stratum niet volstaan. Meer controles dan Nᵢ zijn onmogelijk. Voeg varianties samen, niet standaardfouten.</p>"
        },
        {
          "title": "Omvang bij de quotiëntschatter",
          "html": "<p>Gebruik dezelfde planningsstructuur als bij de andere totaalschatters, met de resterende spreiding s_q van de quotiëntschatter: γ = E²/(t² × N × s_q²) en n = N/(1 + γ). Dit is de cursusbenadering met N − 1 ≈ N. s_q heeft een waarde-eenheid; vul hier niet de dimensieloze goedratio q in. Houd bij planning de gegeven t en spreiding vast en rond n naar boven af.</p><h3>Voorbeeld bij slides PDF 34–36</h3><ol><li>N = 1.000, t = 2, s_q = 7,60 en gewenste marge E = € 1.000.</li><li>γ = 1.000²/(2² × 1.000 × 7,60²) ≈ 4,32825.</li><li>n = 1.000/(1 + 4,32825) ≈ 187,679. Plan dus minimaal 188 controles.</li><li>Als al 100 posten zijn gecontroleerd, zijn volgens deze planning nog 88 nodig. Herbeoordeel het interval na de uitbreiding.</li></ol>"
        }
      ],
      "completionVersion": "2026-09-20"
    },
    {
      "id": "stratificatie",
      "title": "Stratificatie en allocatie",
      "phase": "Schatten",
      "intro": "Verdeel een gemengde populatie in meer homogene groepen. Je schat elke groep afzonderlijk en voegt de uitkomsten samen.",
      "goals": [
        "Evenredige en Neyman-allocatie vergelijken",
        "Een topstratum goed verwerken",
        "Varianties in plaats van standaardafwijkingen optellen",
        "Stratagrenzen bepalen met beide cursusmethoden",
        "De steekproef gericht binnen één stratum uitbreiden"
      ],
      "sections": [
        {
          "title": "Waarom opdelen?",
          "html": "<p><strong>Stratificatie</strong> is het verdelen van een populatie in strata, oftewel deelpopulaties. Binnen elk stratum wil je relatief weinig spreiding. Bijvoorbeeld: goedkope, middeldure en dure voorraadartikelen. Dit kan de schatting nauwkeuriger maken en levert informatie per groep.</p><p>Een <strong>topstratum</strong> bevat bijvoorbeeld alle posten boven een grensbedrag. Worden die integraal gecontroleerd, dan ken je hun werkelijke totaal. Tel dat bij de schatting op. Voor dat volledig gecontroleerde deel is de steekproefvariantie nul.</p>"
        },
        {
          "title": "Hoe verdeel je de steekproef?",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Evenredig</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Evenredig\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>N</mi><mi>i</mi></msub></mrow><mrow><mi>N</mi></mrow></mfrac><mo>×</mo><mi>n</mi></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Neyman</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Neyman\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mfrac><mrow><mrow><msub><mi>N</mi><mi>i</mi></msub><msub><mi>s</mi><mi>i</mi></msub></mrow></mrow><mrow><mo>∑</mo><mrow><mo>(</mo><mrow><msub><mi>N</mi><mi>i</mi></msub><msub><mi>s</mi><mi>i</mi></msub></mrow><mo>)</mo></mrow></mrow></mfrac><mo>×</mo><mi>n</mi></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>Index i verwijst naar stratum i. Nᵢ = groepsomvang; nᵢ = controles; sᵢ = spreiding. W_top is het bekende werkelijke totaal van het volledig gecontroleerde topstratum.</p></details><p><strong>Allocatie</strong> is de verdeling van je beschikbare controles. Evenredige allocatie houdt alleen rekening met de groepsomvang. Neyman geeft bij gelijke kosten meer controles aan grote groepen én aan groepen met meer spreiding. Zonder informatie over sᵢ kun je Neyman niet uitrekenen.</p><p>Na afronden moeten de aantallen nog steeds het gewenste n vormen. Controleer ook dat nᵢ niet groter is dan Nᵢ. Een volledig gecontroleerd topstratum tel je niet nog eens mee in de allocatie over de overige groepen.</p>"
        },
        {
          "title": "De groepen samenvoegen",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Totaalschatting</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Totaalschatting\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>tot</mtext></msub><mo>=</mo><mo>∑</mo><mrow><mo>(</mo><mrow><msub><mi>N</mi><mi>i</mi></msub><msub><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mi>i</mi></msub></mrow><mo>)</mo></mrow><mo>+</mo><msub><mi>W</mi><mtext>top</mtext></msub></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Gecombineerde variantie</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Gecombineerde variantie\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><msub><mi>s</mi><mtext>tot</mtext></msub><mn>2</mn></msup><mo>=</mo><mo>∑</mo><msup><mrow><mo>(</mo><msub><mi>N</mi><mi>i</mi></msub><mo>×</mo><mfrac><mrow><msub><mi>s</mi><mi>i</mi></msub></mrow><mrow><msqrt><msub><mi>n</mi><mi>i</mi></msub></msqrt></mrow></mfrac><mo>×</mo><msqrt><mfrac><mrow><msub><mi>N</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub></mrow><mrow><msub><mi>N</mi><mi>i</mi></msub><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt><mo>)</mo></mrow><mn>2</mn></msup></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Interval</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Interval\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtext>Interval</mtext><mo>=</mo><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>tot</mtext></msub><mo>±</mo><mi>t</mi><mo>×</mo><msqrt><msup><msub><mi>s</mi><mtext>tot</mtext></msub><mn>2</mn></msup></msqrt></mrow></math></div></div></div><p>Je telt de <strong>varianties</strong> van de afzonderlijke schattingen op, daarna neem je één wortel. De effectieve vrijheidsgraden voor t worden volgens het formuleblad in de opgave gegeven. Gebruik dus niet zelf automatisch n − 1.</p>"
        },
        {
          "title": "Stratagrenzen bepalen vanuit de cursusopgave",
          "html": "<p><strong>Stratificatie</strong> bepaalt de groepsgrenzen; <strong>allocatie</strong> verdeelt daarna de controles over die groepen. Haal het volledig te controleren topstratum eerst uit de berekening.</p><h3>Cursusopgave H8.8a: cumulatieve boekwaarde</h3><ol><li>Van € 16.647.206 totale boekwaarde gaat € 775.078 naar het 100%-stratum. Er resteert € 15.872.128 voor vier strata.</li><li>Doel per stratum: 15.872.128 / 4 = € 3.968.032. Cumulatieve doelen: € 3.968.032, € 7.936.064 en € 11.904.096.</li><li>Vergelijk ieder doel met de cumulatieve bedragen op bestaande klassegrenzen. De uitwerking kiest de dichtstbijzijnde beschikbare grenzen; je splitst geen klasse met verzonnen individuele gegevens.</li><li>De bedragen € 3.405.577, € 7.496.144 en € 12.137.408 horen bij bovengrenzen € 1.600, € 3.000 en € 5.000. De laatste grens is € 10.000.</li></ol><table><caption>Cumulatieve boekwaarde: doel en gekozen grens</caption><thead><tr><th scope=\"col\">Doel</th><th scope=\"col\">Cumulatief gekozen</th><th scope=\"col\">Bovengrens</th></tr></thead><tbody><tr><td>€ 3.968.032</td><td>€ 3.405.577</td><td>€ 1.600</td></tr><tr><td>€ 7.936.064</td><td>€ 7.496.144</td><td>€ 3.000</td></tr><tr><td>€ 11.904.096</td><td>€ 12.137.408</td><td>€ 5.000</td></tr></tbody></table><h3>Cursusopgave H8.8b: cumulatieve wortel</h3><p>Bereken per klasse de wortel van <strong>klassebreedte × frequentie</strong> en tel deze wortels cumulatief op. Neem niet de wortel van de totale cumulatieve frequentie. Bij ongelijke klassen moet de breedte meetellen.</p><table><caption>Begin van de oorspronkelijke berekening</caption><thead><tr><th scope=\"col\">Klasse</th><th scope=\"col\">Breedte</th><th scope=\"col\">Frequentie</th><th scope=\"col\">√(breedte × frequentie)</th><th scope=\"col\">Cumulatief</th></tr></thead><tbody><tr><td>0–400</td><td>400</td><td>772</td><td>555,70</td><td>555,70</td></tr><tr><td>400–800</td><td>400</td><td>1016</td><td>637,50</td><td>1.193,20</td></tr><tr><td>800–1.200</td><td>400</td><td>1408</td><td>750,47</td><td>1.943,67</td></tr></tbody></table><ol><li>Voor alle elf klassen samen is het worteltotaal 7.208,79. Doel per stratum: 7.208,79 / 4 ≈ 1.802,20.</li><li>Vergelijk cumulatieve doelen 1.802,20, 3.604,40 en 5.406,60 met de beschikbare klassegrenzen.</li><li>De uitwerking kiest 1.943,67, 3.671,02 en 5.618,65. Dat geeft bovengrenzen € 1.200, € 2.500, € 5.000 en € 10.000.</li><li>Gebruik de nieuwe groepsomvangen 3.196, 2.329, 1.587 en 547 pas daarna voor de allocatie van 300 controles. De 54 topstratumposten komen daar apart bij.</li></ol><p class=\"note\">Bron: opgavenbundel PDF 7 en uitwerkingenbundel PDF 10–11. De twee methoden verdelen verschillende grootheden en hoeven dus niet dezelfde grenzen op te leveren. In boektabel 8.6 is 2.500 × 23 gelijk aan 57.500; de gedrukte 75.500 is een drukfout.</p>"
        },
        {
          "title": "Gericht extra controles in één stratum",
          "html": "<p>De totale variantie is de som van de variantiebijdragen van de strata. Bij een gewenste marge E hoort maximaal (E/t)² totale variantie. Houd voor een planningsberekening de gegeven t-waarde en geschatte spreidingen vast; na de aanvullende controle beoordeel je de nieuwe uitkomsten opnieuw.</p><h3>Cursusopgave H8.9b/c</h3><ol><li>De oorspronkelijke schatting is € 6.678.000 met s_tot ≈ € 256.153 en t = 1,978. De marge is circa € 506.670, dus meer dan de gewenste € 500.000.</li><li>De maximaal toegestane standaardfout is 500.000 / 1,978 ≈ € 252.780. De totale variantie moet ongeveer 1,717 × 10⁹ afnemen.</li><li>Stratum 3 draagt het meest bij: s_3,totaal ≈ € 135.645,95. Trek de benodigde vermindering van deze gekwadrateerde bijdrage af. De gewenste bijdrage wordt circa 1,6683 × 10¹⁰.</li><li>Gebruik de cursusbenadering γ₃ = gewenste variantiebijdrage / (N₃ × s₃²). Met N₃ = 300 en s₃ = 2.606,15 volgt γ₃ ≈ 8,1876.</li><li>Nieuwe totale n₃ = 300 / (1 + 8,1876) ≈ 32,65. Rond omhoog naar 33. Er waren 30 controles, dus voeg 3 toe.</li><li>Controleer de marge met n₃ = 33 en de overige strata ongewijzigd. Bij de vastgehouden planningswaarden daalt die tot ongeveer € 499.443.</li></ol><p class=\"note\">De cursusuitwerking gebruikt de gebruikelijke N − 1 ≈ N-benadering bij het terugrekenen van n. Met de exacte eindigheidscorrectie volgt hier eveneens 33. Wordt de benodigde bijdrage negatief, dan kan uitbreiding van alleen dit stratum niet volstaan. Meer controles dan Nᵢ zijn onmogelijk. Voeg varianties samen, niet standaardfouten.</p>"
        },
        {
          "title": "Zelf oefenen met deze aanvulling",
          "html": "<p>Maak de eigen oefenvarianten bij dit onderwerp. Je krijgt na controle rekenstappen, uitleg per antwoord en de gebruikte bronnen.</p><p><a class=\"study-btn\" href=\"#tentamen/mc/stratificatie\">Oefen Stratificatie en allocatie</a></p>"
        }
      ],
      "example": {
        "title": "Tentamen 17 maart 2025, vraag 4–6",
        "steps": [
          "Vier strata hebben Nᵢ = 940, 677, 639 en 592, samen 2.848. Voor n = 130 geeft evenredige allocatie 43, 31, 29 en 27.",
          "Voor de berekening gebruikt de casus vervolgens andere, gegeven steekproefgroottes: 45, 32, 30 en 30. Gebruik die werkelijke aantallen.",
          "De gemiddelden zijn 60, 53, 50 en 41. Het totaal van de vier schattingen is 940×60 + 677×53 + 639×50 + 592×41 = € 148.503.",
          "Tel de € 22.580 van het volledig gecontroleerde topstratum erbij op: Ŵ_tot = € 171.083.",
          "De gecombineerde variantie is 11.524.549,74; de standaardfout is € 3.394,7827.",
          "90% betrouwbaarheid, effectieve df = 109, tabelrij 100: t = 1,660. Interval naar buiten op € 100: [€ 165.400; € 176.800]."
        ]
      },
      "pitfalls": [
        "Tel geen standaardafwijkingen op.",
        "Neem de werkelijke topstratumwaarde op, niet de boekwaarde.",
        "Gebruik bij evaluatie de werkelijk gebruikte nᵢ, ook als eerder een andere allocatie is berekend."
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
      "questions": [
        {
          "id": "stratificatie-1",
          "prompt": "N₁ = 600, N₂ = 400 en n = 100. Wat is evenredig n₁?",
          "options": [
            "50",
            "60",
            "40"
          ],
          "correct": 1,
          "explanation": "Bij evenredige allocatie krijgt een stratum hetzelfde aandeel van de steekproef als van de populatie. De totale populatieomvang is 600 + 400 = 1.000; het aandeel van stratum 1 is 600/1.000 = 0,60. n₁ = 0,60 × 100 = 60. Voor stratum 2 blijven dan 40 controles over.",
          "steps": [
            "Bij evenredige allocatie krijgt een stratum hetzelfde aandeel van de steekproef als van de populatie.",
            "De totale populatieomvang is 600 + 400 = 1.000; het aandeel van stratum 1 is 600/1.000 = 0,60.",
            "n₁ = 0,60 × 100 = 60. Voor stratum 2 blijven dan 40 controles over."
          ],
          "pattern": "Herken: Stratumomvangen N₁ en N₂, totale n en “evenredig”. → Betekenis: De controles worden verdeeld naar het aandeel posten per stratum. → Aanpak: Bereken N₁/(N₁ + N₂) en vermenigvuldig dat aandeel met n. → Gevraagd antwoord: Het aantal controles voor stratum 1, niet de omvang van dat stratum.",
          "trap": "Gelijke aantallen per groep zijn alleen evenredig als de groepen even groot zijn.",
          "optionExplanations": [
            "50 verdeelt de controles gelijk over de strata. Stratum 1 is echter groter en krijgt bij evenredige allocatie 60%.",
            "60 is 600/1.000 × 100 en volgt het populatieaandeel van stratum 1.",
            "40 is de evenredige omvang voor stratum 2, met 400 van de 1.000 posten."
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
          }
        },
        {
          "id": "stratificatie-2",
          "prompt": "Twee onafhankelijke strata hebben standaardfouten 3 en 4. Gecombineerd?",
          "options": [
            "7",
            "25",
            "5"
          ],
          "correct": 2,
          "explanation": "Voor onafhankelijke strata tel je de varianties van de schattingen op. Kwadrateer de standaardfouten: 3² + 4² = 9 + 16 = 25. Neem daarna de wortel voor de gecombineerde standaardfout: √25 = 5.",
          "steps": [
            "Voor onafhankelijke strata tel je de varianties van de schattingen op.",
            "Kwadrateer de standaardfouten: 3² + 4² = 9 + 16 = 25.",
            "Neem daarna de wortel voor de gecombineerde standaardfout: √25 = 5."
          ],
          "pattern": "Herken: “Onafhankelijke strata” met elk een standaardfout. → Betekenis: Bij optellen van onafhankelijke schattingen tel je varianties op. → Aanpak: Kwadrateer beide standaardfouten, tel op en neem de wortel. → Gevraagd antwoord: De gecombineerde standaardfout, niet de som van de twee standaardfouten.",
          "trap": "De som van standaardfouten is niet de standaardfout van de som.",
          "optionExplanations": [
            "7 = 3 + 4 telt de standaardfouten rechtstreeks op. Bij onafhankelijke strata moet je hun kwadraten optellen.",
            "25 is de gecombineerde variantie. Voor de gevraagde standaardfout ontbreekt nog de wortel.",
            "5 = √(3² + 4²), dus dit is de gecombineerde standaardfout."
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
          }
        },
        {
          "id": "stratificatie-3",
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
          }
        }
      ],
      "lab": "strata",
      "exam": "exam2025:2:Vraag 4–6",
      "prerequisites": [
        "Les 4: een totaal en standaardfout per deelpopulatie uitrekenen.",
        "Les 2: een variantie is het kwadraat van de bijbehorende standaardafwijking.",
        "Les 3: voor een interval is een passende kritieke t-waarde nodig."
      ],
      "formulaGuide": [
        {
          "title": "De steekproef verdelen over strata",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik allocatie als de populatie in groepen is verdeeld en je het geplande aantal controles n over die groepen moet verdelen. Evenredige allocatie gebruikt alleen omvang; Neyman gebruikt bij gelijke controlekosten ook de spreiding.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Evenredig</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Evenredig\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>N</mi><mi>i</mi></msub></mrow><mrow><mi>N</mi></mrow></mfrac><mo>×</mo><mi>n</mi></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Neyman</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Neyman\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mfrac><mrow><mrow><msub><mi>N</mi><mi>i</mi></msub><msub><mi>s</mi><mi>i</mi></msub></mrow></mrow><mrow><mo>∑</mo><mrow><mo>(</mo><mrow><msub><mi>N</mi><mi>i</mi></msub><msub><mi>s</mi><mi>i</mi></msub></mrow><mo>)</mo></mrow></mrow></mfrac><mo>×</mo><mi>n</mi></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>Nᵢ is het aantal posten in stratum i; nᵢ wordt het aantal controles daarin. N en n zijn de totalen van de strata waarover je verdeelt. sᵢ is de spreiding binnen het stratum. ΣNᵢsᵢ is de som van alle omvang-maal-spreidingproducten.</p><h3>Zo reken je stap voor stap</h3><ol><li>Zet per stratum de omvang Nᵢ op een rij. Een integraal gecontroleerd topstratum blijft buiten deze verdeling.</li><li>Bereken bij evenredige allocatie per groep Nᵢ/N en vermenigvuldig met n.</li><li>Bereken bij Neyman eerst Nᵢ × sᵢ per groep. Deel elk product door de som van die producten en vermenigvuldig met n.</li><li>Rond af tot gehele aantallen en controleer dat hun som precies n is. Geen nᵢ mag groter zijn dan Nᵢ.</li></ol><h3>Tentamen 17 maart 2025, vraag 4–6</h3><ol><li>Vier strata hebben Nᵢ = 940, 677, 639 en 592, samen 2.848. Voor n = 130 geeft evenredige allocatie 43, 31, 29 en 27.</li><li>Voor de berekening gebruikt de casus vervolgens andere, gegeven steekproefgroottes: 45, 32, 30 en 30. Gebruik die werkelijke aantallen.</li></ol><p class=\"note\"><strong>Let op:</strong> Een berekende allocatie is een planning. Voor de latere evaluatie gebruik je de werkelijk gegeven of gerealiseerde steekproefaantallen, ook wanneer die afwijken van het plan.</p>"
        },
        {
          "title": "De schattingen en onzekerheid samenvoegen",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik deze combinatie nadat voor ieder stratum gegevens beschikbaar zijn. Je schat het totaal door de stratumtotalen op te tellen, maar combineert de onzekerheid via varianties.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Totaalschatting</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Totaalschatting\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>tot</mtext></msub><mo>=</mo><mo>∑</mo><mrow><mo>(</mo><mrow><msub><mi>N</mi><mi>i</mi></msub><msub><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>w</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mi>i</mi></msub></mrow><mo>)</mo></mrow><mo>+</mo><msub><mi>W</mi><mtext>top</mtext></msub></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Gecombineerde variantie</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Gecombineerde variantie\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><msub><mi>s</mi><mtext>tot</mtext></msub><mn>2</mn></msup><mo>=</mo><mo>∑</mo><msup><mrow><mo>(</mo><msub><mi>N</mi><mi>i</mi></msub><mo>×</mo><mfrac><mrow><msub><mi>s</mi><mi>i</mi></msub></mrow><mrow><msqrt><msub><mi>n</mi><mi>i</mi></msub></msqrt></mrow></mfrac><mo>×</mo><msqrt><mfrac><mrow><msub><mi>N</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub></mrow><mrow><msub><mi>N</mi><mi>i</mi></msub><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt><mo>)</mo></mrow><mn>2</mn></msup></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Interval</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Interval\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtext>Interval</mtext><mo>=</mo><msub><mover accent=\"true\"><mi>W</mi><mo>^</mo></mover><mtext>tot</mtext></msub><mo>±</mo><mi>t</mi><mo>×</mo><msqrt><msup><msub><mi>s</mi><mtext>tot</mtext></msub><mn>2</mn></msup></msqrt></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>Index i verwijst naar stratum i. Nᵢ = groepsomvang; nᵢ = controles; sᵢ = spreiding. W_top is het bekende werkelijke totaal van het volledig gecontroleerde topstratum. s_tot² is de som van de varianties van de stratumtotaalschattingen. s_tot is de wortel daarvan. Een integraal gecontroleerd topstratum heeft geen steekproefonzekerheid.</p><h3>Zo reken je stap voor stap</h3><ol><li>Bereken Nᵢ × w̄ᵢ voor ieder getrokken stratum en tel die bedragen op.</li><li>Tel het bekende werkelijke totaal van het integraal gecontroleerde topstratum eenmaal erbij.</li><li>Bereken per getrokken stratum de standaardfout van het totaal, inclusief de eigen eindigheidscorrectie.</li><li>Kwadrateer die standaardfouten, tel de varianties op en neem daarna één wortel.</li><li>Gebruik de gegeven effectieve vrijheidsgraden voor t. Maak het interval rond het volledige totaal.</li></ol><h3>Tentamen 17 maart 2025, vraag 4–6</h3><ol><li>Voor de berekening gebruikt de casus vervolgens andere, gegeven steekproefgroottes: 45, 32, 30 en 30. Gebruik die werkelijke aantallen.</li><li>De gemiddelden zijn 60, 53, 50 en 41. Het totaal van de vier schattingen is 940×60 + 677×53 + 639×50 + 592×41 = € 148.503.</li><li>Tel de € 22.580 van het volledig gecontroleerde topstratum erbij op: Ŵ_tot = € 171.083.</li><li>De gecombineerde variantie is 11.524.549,74; de standaardfout is € 3.394,7827.</li><li>90% betrouwbaarheid, effectieve df = 109, tabelrij 100: t = 1,660. Interval naar buiten op € 100: [€ 165.400; € 176.800].</li></ol><p class=\"note\"><strong>Let op:</strong> Tel standaardfouten niet rechtstreeks op. Neem van het topstratum de werkelijke waarde op, niet de ongecontroleerde boekwaarde, en tel de topgroep niet dubbel.</p>"
        },
        {
          "title": "Stratagrenzen bepalen vanuit de cursusopgave",
          "html": "<p><strong>Stratificatie</strong> bepaalt de groepsgrenzen; <strong>allocatie</strong> verdeelt daarna de controles over die groepen. Haal het volledig te controleren topstratum eerst uit de berekening.</p><h3>Cursusopgave H8.8a: cumulatieve boekwaarde</h3><ol><li>Van € 16.647.206 totale boekwaarde gaat € 775.078 naar het 100%-stratum. Er resteert € 15.872.128 voor vier strata.</li><li>Doel per stratum: 15.872.128 / 4 = € 3.968.032. Cumulatieve doelen: € 3.968.032, € 7.936.064 en € 11.904.096.</li><li>Vergelijk ieder doel met de cumulatieve bedragen op bestaande klassegrenzen. De uitwerking kiest de dichtstbijzijnde beschikbare grenzen; je splitst geen klasse met verzonnen individuele gegevens.</li><li>De bedragen € 3.405.577, € 7.496.144 en € 12.137.408 horen bij bovengrenzen € 1.600, € 3.000 en € 5.000. De laatste grens is € 10.000.</li></ol><table><caption>Cumulatieve boekwaarde: doel en gekozen grens</caption><thead><tr><th scope=\"col\">Doel</th><th scope=\"col\">Cumulatief gekozen</th><th scope=\"col\">Bovengrens</th></tr></thead><tbody><tr><td>€ 3.968.032</td><td>€ 3.405.577</td><td>€ 1.600</td></tr><tr><td>€ 7.936.064</td><td>€ 7.496.144</td><td>€ 3.000</td></tr><tr><td>€ 11.904.096</td><td>€ 12.137.408</td><td>€ 5.000</td></tr></tbody></table><h3>Cursusopgave H8.8b: cumulatieve wortel</h3><p>Bereken per klasse de wortel van <strong>klassebreedte × frequentie</strong> en tel deze wortels cumulatief op. Neem niet de wortel van de totale cumulatieve frequentie. Bij ongelijke klassen moet de breedte meetellen.</p><table><caption>Begin van de oorspronkelijke berekening</caption><thead><tr><th scope=\"col\">Klasse</th><th scope=\"col\">Breedte</th><th scope=\"col\">Frequentie</th><th scope=\"col\">√(breedte × frequentie)</th><th scope=\"col\">Cumulatief</th></tr></thead><tbody><tr><td>0–400</td><td>400</td><td>772</td><td>555,70</td><td>555,70</td></tr><tr><td>400–800</td><td>400</td><td>1016</td><td>637,50</td><td>1.193,20</td></tr><tr><td>800–1.200</td><td>400</td><td>1408</td><td>750,47</td><td>1.943,67</td></tr></tbody></table><ol><li>Voor alle elf klassen samen is het worteltotaal 7.208,79. Doel per stratum: 7.208,79 / 4 ≈ 1.802,20.</li><li>Vergelijk cumulatieve doelen 1.802,20, 3.604,40 en 5.406,60 met de beschikbare klassegrenzen.</li><li>De uitwerking kiest 1.943,67, 3.671,02 en 5.618,65. Dat geeft bovengrenzen € 1.200, € 2.500, € 5.000 en € 10.000.</li><li>Gebruik de nieuwe groepsomvangen 3.196, 2.329, 1.587 en 547 pas daarna voor de allocatie van 300 controles. De 54 topstratumposten komen daar apart bij.</li></ol><p class=\"note\">Bron: opgavenbundel PDF 7 en uitwerkingenbundel PDF 10–11. De twee methoden verdelen verschillende grootheden en hoeven dus niet dezelfde grenzen op te leveren. In boektabel 8.6 is 2.500 × 23 gelijk aan 57.500; de gedrukte 75.500 is een drukfout.</p>"
        },
        {
          "title": "Gericht extra controles in één stratum",
          "html": "<p>De totale variantie is de som van de variantiebijdragen van de strata. Bij een gewenste marge E hoort maximaal (E/t)² totale variantie. Houd voor een planningsberekening de gegeven t-waarde en geschatte spreidingen vast; na de aanvullende controle beoordeel je de nieuwe uitkomsten opnieuw.</p><h3>Cursusopgave H8.9b/c</h3><ol><li>De oorspronkelijke schatting is € 6.678.000 met s_tot ≈ € 256.153 en t = 1,978. De marge is circa € 506.670, dus meer dan de gewenste € 500.000.</li><li>De maximaal toegestane standaardfout is 500.000 / 1,978 ≈ € 252.780. De totale variantie moet ongeveer 1,717 × 10⁹ afnemen.</li><li>Stratum 3 draagt het meest bij: s_3,totaal ≈ € 135.645,95. Trek de benodigde vermindering van deze gekwadrateerde bijdrage af. De gewenste bijdrage wordt circa 1,6683 × 10¹⁰.</li><li>Gebruik de cursusbenadering γ₃ = gewenste variantiebijdrage / (N₃ × s₃²). Met N₃ = 300 en s₃ = 2.606,15 volgt γ₃ ≈ 8,1876.</li><li>Nieuwe totale n₃ = 300 / (1 + 8,1876) ≈ 32,65. Rond omhoog naar 33. Er waren 30 controles, dus voeg 3 toe.</li><li>Controleer de marge met n₃ = 33 en de overige strata ongewijzigd. Bij de vastgehouden planningswaarden daalt die tot ongeveer € 499.443.</li></ol><p class=\"note\">De cursusuitwerking gebruikt de gebruikelijke N − 1 ≈ N-benadering bij het terugrekenen van n. Met de exacte eindigheidscorrectie volgt hier eveneens 33. Wordt de benodigde bijdrage negatief, dan kan uitbreiding van alleen dit stratum niet volstaan. Meer controles dan Nᵢ zijn onmogelijk. Voeg varianties samen, niet standaardfouten.</p>"
        }
      ],
      "completionVersion": "2026-09-20"
    },
    {
      "id": "regressielijn",
      "title": "Regressie: een lijn door gegevens",
      "phase": "Regressie",
      "intro": "Regressie beschrijft hoe een uitkomst y samenhangt met een verklarende variabele x. De lijn voorspelt; de residuen laten zien wat de lijn mist.",
      "goals": [
        "Model en geschatte lijn onderscheiden",
        "Een helling en constante interpreteren",
        "Een residu berekenen en correlatie begrijpen"
      ],
      "sections": [
        {
          "title": "Een rechte lijn leren lezen",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Populatiemodel</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Populatiemodel\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>β</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>β</mi><mn>1</mn></msub><mi>x</mi></mrow><mo>+</mo><mi>ε</mi></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Geschatte lijn</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Geschatte lijn\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>=</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><mi>x</mi></mrow></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Residu</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Residu\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>e</mi><mi>i</mi></msub><mo>=</mo><msub><mi>y</mi><mi>i</mi></msub><mo>−</mo><msub><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mi>i</mi></msub></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>β = onbekende populatiecoëfficiënt; b = geschatte coëfficiënt; ŷ = voorspelde y; ε = storing; eᵢ = residu bij waarneming i.</p></details><p>x is de verklarende variabele, y de te verklaren variabele. β₀ en β₁ zijn onbekende populatiecoëfficiënten; b₀ en b₁ schat je uit de steekproef. ε (epsilon) is de onbekende storing. Het residu e is de berekende afwijking van een waarneming ten opzichte van de geschatte lijn.</p><p>b₀ is de <strong>constante</strong>: de voorspelde y bij x = 0. b₁ is de <strong>richtingscoëfficiënt</strong>: de verandering in voorspelde y bij één eenheid meer x. Geef altijd de eenheden erbij. x = 0 kan buiten het onderzochte gebied liggen; de constante heeft dan niet vanzelf een praktische betekenis.</p>"
        },
        {
          "title": "Hoe wordt de lijn gekozen?",
          "html": "<p>De <strong>kleinste-kwadratenmethode</strong> (OLS) kiest de lijn waarvoor de som van de gekwadrateerde residuen zo klein mogelijk is. Positieve en negatieve afwijkingen kunnen elkaar door het kwadrateren niet wegstrepen.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Helling</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Helling\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>b</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mo>∑</mo><mrow><mi>x</mi><mi>y</mi></mrow><mo>−</mo><mrow><mi>n</mi><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>x</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>y</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow></mrow><mrow><mrow><mrow><mo>(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>)</mo></mrow><msup><msub><mi>s</mi><mi>x</mi></msub><mn>2</mn></msup></mrow></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Constante</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Constante\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>b</mi><mn>0</mn></msub><mo>=</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>y</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>−</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>x</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow></mrow></math></div></div></div><p>In SPSS lees je b₀ en b₁ af in <strong>Coefficients → Unstandardized Coefficients → B</strong>. De kolom Beta is gestandaardiseerd en hoort niet in de gewone vergelijking met oorspronkelijke eenheden.</p>"
        },
        {
          "title": "Correlatie: richting en sterkte",
          "html": "<p>Pearsons <strong>correlatiecoëfficiënt</strong> r ligt tussen −1 en 1 en beschrijft een lineair verband. Een negatieve r hoort bij een dalende lijn. Bij enkelvoudige regressie geldt r = b₁s_x/s_y. r dicht bij nul betekent weinig lineaire samenhang, maar sluit een krom verband niet uit.</p><p>Een verband bewijst geen oorzaak-gevolgrelatie. Een derde variabele of samengevoegde groepen kunnen de samenhang beïnvloeden. SPSS toont bij Model Summary een niet-negatieve R; voor de richting gebruik je r uit Correlations of het teken van B.</p>"
        },
        {
          "title": "Residuele variantie berekenen zonder ANOVA-tabel",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Formule 34: residuele variantie</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Formule 34: residuele variantie\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><msub><mi>s</mi><mi>e</mi></msub><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></mfrac><mo>×</mo><mrow><mo>(</mo><mn>1</mn><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo>)</mo></mrow><mo>×</mo><msup><msub><mi>s</mi><mi>y</mi></msub><mn>2</mn></msup></mrow></math></div></div></div><p>Je gebruikt deze vorm bij enkelvoudige regressie met een constante wanneer n, r en sᵧ gegeven zijn. sₑ² is de resterende variantie rond de regressielijn; sₑ = √sₑ². Vanuit een ANOVA-tabel krijg je hetzelfde met SSE/(n − 2). Het aandeel 1 − r² is niet verklaard door de lijn.</p><h3>Cursusopgave H9.1: autogewichten</h3><ol><li>De tien oorspronkelijke gewichten zijn 946, 950, 965, 978, 980, 990, 1.055, 1.015, 1.055 en 1.080 kg; x loopt van 1 tot en met 10.</li><li>Met de onafgeronde brongegevens: sᵧ ≈ 47,46976, sₓ ≈ 3,02765 en r ≈ 0,940088. Gebruik de afgeronde r = 0,940 alleen als niet meer cijfers beschikbaar zijn.</li><li>sₑ² = (9/8) × (1 − r²) × sᵧ² ≈ 294,66212 kg². Neem de wortel: sₑ ≈ 17,16572 kg.</li><li>Controle: de ANOVA-tabel geeft SSE = 2.357,29697 en df = 8. SSE/df = 294,66212. Beide berekeningen beschrijven dezelfde resterende spreiding.</li></ol>"
        },
        {
          "title": "Zelf oefenen met deze aanvulling",
          "html": "<p>Maak de eigen oefenvarianten bij dit onderwerp. Je krijgt na controle rekenstappen, uitleg per antwoord en de gebruikte bronnen.</p><p><a class=\"study-btn\" href=\"#tentamen/mc/regressielijn\">Oefen Regressie: een lijn door gegevens</a></p>"
        }
      ],
      "example": {
        "title": "Voorbeeld: kosten en productie",
        "steps": [
          "Lijn: voorspelde kosten = 200 + 3 × productie.",
          "Bij x = 50 voorspelt de lijn 200 + 3×50 = 350.",
          "De werkelijke kosten zijn 380. Het residu is 380 − 350 = +30.",
          "Bij één extra product stijgen de voorspelde kosten met 3 geldeenheden. De constante 200 is de voorspelling bij nul productie."
        ]
      },
      "pitfalls": [
        "Een regressieresidu is y − ŷ; de controlefout in hoofdstuk 8 is b − w.",
        "Gebruik B, niet Beta, voor de regressielijn."
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
      "questions": [
        {
          "id": "regressielijn-1",
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
          }
        },
        {
          "id": "regressielijn-2",
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
          }
        },
        {
          "id": "regressielijn-3",
          "prompt": "Wat minimaliseert OLS?",
          "options": [
            "De som van de residuen",
            "De som van de gekwadrateerde residuen",
            "Het aantal waarnemingen"
          ],
          "correct": 1,
          "explanation": "OLS betekent gewone kleinste kwadraten: het model wordt gekozen op basis van de residuen y − ŷ. Ieder residu wordt gekwadrateerd, zodat positieve en negatieve afwijkingen elkaar niet kunnen opheffen. OLS kiest de coëfficiënten waarvoor Σe², de som van die kwadraten, het kleinst is.",
          "steps": [
            "OLS betekent gewone kleinste kwadraten: het model wordt gekozen op basis van de residuen y − ŷ.",
            "Ieder residu wordt gekwadrateerd, zodat positieve en negatieve afwijkingen elkaar niet kunnen opheffen.",
            "OLS kiest de coëfficiënten waarvoor Σe², de som van die kwadraten, het kleinst is."
          ],
          "pattern": "Herken: Het werkwoord “minimaliseert” bij OLS. → Betekenis: De kleinste-kwadratenmethode kiest coëfficiënten via een foutcriterium. → Aanpak: Koppel OLS aan kwadraten van residuen en de som daarvan. → Gevraagd antwoord: Het te minimaliseren criterium, niet de gewone som van getekende residuen.",
          "trap": "Een residusom van nul kan toch grote afzonderlijke fouten bevatten.",
          "optionExplanations": [
            "De gewone som laat positieve en negatieve residuen wegvallen. Die som beoordeelt daarom niet de totale grootte van de afwijkingen.",
            "De som van gekwadrateerde residuen is het OLS-criterium. Grotere afwijkingen wegen door het kwadrateren zwaarder mee.",
            "OLS kiest coëfficiënten voor de gegeven waarnemingen. De methode minimaliseert niet het aantal gegevens."
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
          }
        }
      ],
      "lab": "regressie",
      "exam": null,
      "prerequisites": [
        "Les 1: herkennen wat een variabele en een waarneming zijn.",
        "Les 2: gemiddelden, spreiding, vermenigvuldigen en het invullen van een formule."
      ],
      "formulaGuide": [
        {
          "title": "De lijn berekenen, invullen en het residu lezen",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik een enkelvoudige regressielijn om y te beschrijven of te voorspellen met één verklarende variabele x. De helling en constante kun je uit gegevens berekenen of uit de ongestandaardiseerde B-kolom van SPSS overnemen.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Populatiemodel</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Populatiemodel\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>β</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>β</mi><mn>1</mn></msub><mi>x</mi></mrow><mo>+</mo><mi>ε</mi></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Geschatte lijn</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Geschatte lijn\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>=</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><mi>x</mi></mrow></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Residu</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Residu\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>e</mi><mi>i</mi></msub><mo>=</mo><msub><mi>y</mi><mi>i</mi></msub><mo>−</mo><msub><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mi>i</mi></msub></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Helling</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Helling\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>b</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mo>∑</mo><mrow><mi>x</mi><mi>y</mi></mrow><mo>−</mo><mrow><mi>n</mi><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>x</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>y</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow></mrow><mrow><mrow><mrow><mo>(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>)</mo></mrow><msup><msub><mi>s</mi><mi>x</mi></msub><mn>2</mn></msup></mrow></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Constante</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Constante\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>b</mi><mn>0</mn></msub><mo>=</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>y</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>−</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>x</mi></mpadded><mo stretchy=\"true\">¯</mo></mover></mrow></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>β = onbekende populatiecoëfficiënt; b = geschatte coëfficiënt; ŷ = voorspelde y; ε = storing; eᵢ = residu bij waarneming i. b₀ is de constante en b₁ de helling. x̄ en ȳ zijn de steekproefgemiddelden. s_x² is de steekproefvariantie van x. Een residu heeft dezelfde eenheid als y.</p><h3>Zo reken je stap voor stap</h3><ol><li>Leg vast wat x en y voorstellen en welke eenheden ze hebben.</li><li>Als je de lijn moet schatten: bereken b₁ met de totalen en de variantie van x; bereken daarna b₀ = ȳ − b₁x̄.</li><li>Als de coëfficiënten al gegeven zijn: schrijf ŷ = b₀ + b₁x op met de getallen uit B.</li><li>Vul de gevraagde x in om ŷ te krijgen.</li><li>Is de werkelijke y bekend? Bereken e = y − ŷ en interpreteer het teken. Een positief residu betekent dat de werkelijke y boven de voorspelling ligt.</li></ol><h3>Voorbeeld: kosten en productie</h3><ol><li>Lijn: voorspelde kosten = 200 + 3 × productie.</li><li>Bij x = 50 voorspelt de lijn 200 + 3×50 = 350.</li><li>De werkelijke kosten zijn 380. Het residu is 380 − 350 = +30.</li><li>Bij één extra product stijgen de voorspelde kosten met 3 geldeenheden. De constante 200 is de voorspelling bij nul productie.</li></ol><p class=\"note\"><strong>Let op:</strong> De Beta-kolom bevat gestandaardiseerde coëfficiënten en hoort niet in de vergelijking in oorspronkelijke eenheden. Een residu y − ŷ heeft een andere betekenis dan een controleverschil b − w.</p>"
        },
        {
          "title": "Residuele variantie berekenen zonder ANOVA-tabel",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Formule 34: residuele variantie</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Formule 34: residuele variantie\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><msub><mi>s</mi><mi>e</mi></msub><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></mfrac><mo>×</mo><mrow><mo>(</mo><mn>1</mn><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo>)</mo></mrow><mo>×</mo><msup><msub><mi>s</mi><mi>y</mi></msub><mn>2</mn></msup></mrow></math></div></div></div><p>Je gebruikt deze vorm bij enkelvoudige regressie met een constante wanneer n, r en sᵧ gegeven zijn. sₑ² is de resterende variantie rond de regressielijn; sₑ = √sₑ². Vanuit een ANOVA-tabel krijg je hetzelfde met SSE/(n − 2). Het aandeel 1 − r² is niet verklaard door de lijn.</p><h3>Cursusopgave H9.1: autogewichten</h3><ol><li>De tien oorspronkelijke gewichten zijn 946, 950, 965, 978, 980, 990, 1.055, 1.015, 1.055 en 1.080 kg; x loopt van 1 tot en met 10.</li><li>Met de onafgeronde brongegevens: sᵧ ≈ 47,46976, sₓ ≈ 3,02765 en r ≈ 0,940088. Gebruik de afgeronde r = 0,940 alleen als niet meer cijfers beschikbaar zijn.</li><li>sₑ² = (9/8) × (1 − r²) × sᵧ² ≈ 294,66212 kg². Neem de wortel: sₑ ≈ 17,16572 kg.</li><li>Controle: de ANOVA-tabel geeft SSE = 2.357,29697 en df = 8. SSE/df = 294,66212. Beide berekeningen beschrijven dezelfde resterende spreiding.</li></ol>"
        }
      ],
      "completionVersion": "2026-09-20"
    },
    {
      "id": "anova",
      "title": "ANOVA en verklaarde variatie",
      "phase": "Regressie",
      "intro": "De ANOVA-tabel splitst de totale variatie op: welk deel verklaart het model en welk deel blijft over? Daarmee bereken je R², de standaardfout en F.",
      "goals": [
        "Een onvolledige ANOVA-tabel aanvullen",
        "R² in een zin uitleggen",
        "SSE, MSE en s_e onderscheiden"
      ],
      "sections": [
        {
          "title": "Drie soorten kwadratensommen",
          "html": "<table><caption>Drie soorten kwadratensommen</caption><tr><th scope=\"col\">Rij</th><th scope=\"col\">Kwadratensom</th><th scope=\"col\">Vrijheidsgraden</th><th scope=\"col\">Mean Square</th></tr><tr><td>Regression</td><td><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>SSR</mi><mo>=</mo><mo>∑</mo><msup><mrow><mo>(</mo><msub><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mi>i</mi></msub><mo>−</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>y</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>)</mo></mrow><mn>2</mn></msup></mrow></math></td><td>k</td><td><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mfrac><mrow><mi>SSR</mi></mrow><mrow><mi>k</mi></mrow></mfrac></mrow></math></td></tr><tr><td>Residual</td><td><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>SSE</mi><mo>=</mo><mo>∑</mo><msup><mrow><mo>(</mo><msub><mi>y</mi><mi>i</mi></msub><mo>−</mo><msub><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mi>i</mi></msub><mo>)</mo></mrow><mn>2</mn></msup></mrow></math></td><td>n−k−1</td><td><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mfrac><mrow><mi>SSE</mi></mrow><mrow><mi>n</mi><mo>−</mo><mi>k</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math></td></tr><tr><td>Total</td><td><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>TotalSS</mi><mo>=</mo><mo>∑</mo><msup><mrow><mo>(</mo><msub><mi>y</mi><mi>i</mi></msub><mo>−</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>y</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>)</mo></mrow><mn>2</mn></msup></mrow></math></td><td>n−1</td><td><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mfrac><mrow><mi>TotalSS</mi></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math></td></tr></table><p><strong>ANOVA</strong> betekent variantieanalyse. k is het aantal verklarende variabelen; de constante telt niet mee. Bij de gewone OLS-regressie met constante geldt TotalSS = SSR + SSE. De vrijheidsgraden van Regression en Residual tellen op tot die van Total.</p>"
        },
        {
          "title": "Van de tabel naar betekenis",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Verklaarde variatie</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Verklaarde variatie\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>SSR</mi></mrow><mrow><mi>TotalSS</mi></mrow></mfrac><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mi>SSE</mi></mrow><mrow><mi>TotalSS</mi></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Residuele variantie</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Residuele variantie\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>MSE</mi><mo>=</mo><msup><msub><mi>s</mi><mi>e</mi></msub><mn>2</mn></msup></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Standaardfout</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Standaardfout\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><mi>e</mi></msub><mo>=</mo><msqrt><mi>MSE</mi></msqrt></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Globale toets</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Globale toets\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><mi>MSR</mi></mrow><mrow><mi>MSE</mi></mrow></mfrac></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>SSR = verklaarde kwadratensom; SSE = residuele kwadratensom; TotalSS = totale kwadratensom; MSR en MSE zijn kwadratensommen gedeeld door hun vrijheidsgraden.</p></details><p><strong>R²</strong>, de determinatiecoëfficiënt, is het aandeel van de variatie in y dat het model verklaart. R² = 0,80 betekent dus 80% verklaarde variatie, niet dat 80% van de voorspellingen exact juist is. De standaardfout s_e geeft aan hoeveel de waarnemingen rond de lijn spreiden, in de eenheid van y.</p><p>Een grote F vergelijkt veel verklaarde variatie met weinig resterende variatie. Of F groot genoeg is, beoordeel je met de juiste kritieke grens of de Sig.-waarde. Een hoge R² vervangt de controles van modelaannames niet.</p>"
        }
      ],
      "example": {
        "title": "Tentamen 28 oktober 2024: spronghoogte en beenkracht",
        "steps": [
          "Gegeven: SSR = 1.351,262; SSE = 44,105; TotalSS = 1.395,367; n = 30; k = 1.",
          "Vrijheidsgraden: 1, 28 en 29.",
          "MSR = 1.351,262 / 1 = 1.351,262; MSE = 44,105 / 28 ≈ 1,57518.",
          "F ≈ 857,85; s_e ≈ √1,57518 = 1,2551.",
          "R² = 1.351,262 / 1.395,367 ≈ 0,9684. Ongeveer 96,84% van de variatie in spronghoogte wordt in dit model verklaard door beenkracht."
        ]
      },
      "pitfalls": [
        "MSE is een variantie; neem de wortel voor de standaardfout.",
        "R² zegt iets over variatie, niet over het percentage mensen dat correct voorspeld is."
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
      "questions": [
        {
          "id": "anova-1",
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
          }
        },
        {
          "id": "anova-2",
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
          }
        },
        {
          "id": "anova-3",
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
          }
        }
      ],
      "lab": "anova",
      "exam": "exam2024:4:Vraag 9–10",
      "prerequisites": [
        "Les 10: werkelijke y, voorspelde ŷ en residu uit elkaar houden.",
        "Les 2: gekwadrateerde afwijkingen optellen en een wortel nemen."
      ],
      "formulaGuide": [
        {
          "title": "De ANOVA-tabel en verklaarde variatie aanvullen",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik ANOVA om totale variatie in y te verdelen in verklaarde variatie en residuele variatie. De tabel levert ook MSE, de residuele standaardfout en de globale F-toets.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Verdeling van kwadratensommen</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Verdeling van kwadratensommen\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>TotalSS</mi><mo>=</mo><mi>SSR</mi><mo>+</mo><mi>SSE</mi></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Gemiddelde verklaarde kwadratensom</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Gemiddelde verklaarde kwadratensom\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>MSR</mi><mo>=</mo><mfrac><mrow><mi>SSR</mi></mrow><mrow><mi>k</mi></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Gemiddelde residuele kwadratensom</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Gemiddelde residuele kwadratensom\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>MSE</mi><mo>=</mo><mfrac><mrow><mi>SSE</mi></mrow><mrow><mi>n</mi><mo>−</mo><mi>k</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Verklaarde variatie</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Verklaarde variatie\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>SSR</mi></mrow><mrow><mi>TotalSS</mi></mrow></mfrac><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mi>SSE</mi></mrow><mrow><mi>TotalSS</mi></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Residuele variantie</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Residuele variantie\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>MSE</mi><mo>=</mo><msup><msub><mi>s</mi><mi>e</mi></msub><mn>2</mn></msup></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Standaardfout</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Standaardfout\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><mi>e</mi></msub><mo>=</mo><msqrt><mi>MSE</mi></msqrt></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Globale toets</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Globale toets\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><mi>MSR</mi></mrow><mrow><mi>MSE</mi></mrow></mfrac></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>SSR = verklaarde kwadratensom; SSE = residuele kwadratensom; TotalSS = totale kwadratensom; MSR en MSE zijn kwadratensommen gedeeld door hun vrijheidsgraden. n is het aantal gebruikte waarnemingen en k het aantal verklarende variabelen, zonder constante. De vrijheidsgraden zijn k, n − k − 1 en n − 1.</p><h3>Zo reken je stap voor stap</h3><ol><li>Noteer n en k. Bereken de drie vrijheidsgraden en controleer dat regressie plus residu gelijk is aan totaal.</li><li>Vul een ontbrekende kwadratensom aan met TotalSS = SSR + SSE.</li><li>Deel SSR door k voor MSR en SSE door n − k − 1 voor MSE.</li><li>Bereken F = MSR/MSE en s_e = √MSE.</li><li>Bereken R² = SSR/TotalSS en interpreteer dit als het verklaarde aandeel van de variatie in y.</li></ol><h3>Tentamen 28 oktober 2024: spronghoogte en beenkracht</h3><ol><li>Gegeven: SSR = 1.351,262; SSE = 44,105; TotalSS = 1.395,367; n = 30; k = 1.</li><li>Vrijheidsgraden: 1, 28 en 29.</li><li>MSR = 1.351,262 / 1 = 1.351,262; MSE = 44,105 / 28 ≈ 1,57518.</li><li>F ≈ 857,85; s_e ≈ √1,57518 = 1,2551.</li><li>R² = 1.351,262 / 1.395,367 ≈ 0,9684. Ongeveer 96,84% van de variatie in spronghoogte wordt in dit model verklaard door beenkracht.</li></ol><p class=\"note\"><strong>Let op:</strong> R² is geen percentage correct voorspelde personen. MSE en s_e hebben verschillende eenheden; gebruik de wortel van MSE als de standaardfout nodig is.</p>"
        }
      ]
    },
    {
      "id": "toetsen",
      "title": "Hypothesen, t-toets en F-toets",
      "phase": "Regressie",
      "intro": "Een zichtbaar verband kan toeval zijn. Met een toets bepaal je of de gegevens voldoende aanleiding geven om de nulhypothese te verwerpen.",
      "goals": [
        "Hypothesen over populatiecoëfficiënten formuleren",
        "Eenzijdig en tweezijdig toetsen",
        "Een conclusie met richting, context en risico schrijven"
      ],
      "sections": [
        {
          "title": "SET-opfrisser: hypothesen en foutkansen",
          "html": "<p>Formuleer H₀ en H₁ over een populatieparameter. Bij een positief regressieverband: H₀: β₁ ≤ 0, H₁: β₁ &gt; 0. Het α-risico is het ten onrechte verwerpen van een ware H₀. Het β-risico is het niet verwerpen van een onware H₀. Niet verwerpen betekent dat het bewijs onvoldoende is, niet dat H₀ bewezen is.</p><p>Schrijf steeds parameter, hypothesen, toetsingsgrootheid, grens of p-waarde en conclusie in de context op. Voor het gemiddelde gebruikte SET vaak n − 1 vrijheidsgraden; bij enkelvoudige regressie zijn dat n − 2 en bij meervoudige regressie n − k − 1.</p>"
        },
        {
          "title": "Begin bij wat je wilt aantonen",
          "html": "<table><caption>Begin bij wat je wilt aantonen</caption><tr><th scope=\"col\">Vraag</th><th scope=\"col\">H₀</th><th scope=\"col\">H₁</th></tr><tr><td>Is er een verband?</td><td>β₁ = 0</td><td>β₁ ≠ 0</td></tr><tr><td>Is het verband positief?</td><td>β₁ ≤ 0</td><td>β₁ &gt; 0</td></tr><tr><td>Is het verband negatief?</td><td>β₁ ≥ 0</td><td>β₁ &lt; 0</td></tr></table><p>De <strong>nulhypothese</strong> H₀ blijft staan tenzij de gegevens voldoende tegenbewijs geven. De <strong>alternatieve hypothese</strong> H₁ bevat wat je wilt aantonen. Kies de richting op basis van de vraag, voordat je naar de uitkomst kijkt. Toets β, de populatieparameter; b is al uit de steekproef berekend.</p>"
        },
        {
          "title": "t en de p-waarde",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Toetsingsgrootheid</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Toetsingsgrootheid\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>t</mi><mo>=</mo><mfrac><mrow><msub><mi>b</mi><mi>j</mi></msub><mo>−</mo><msub><mi>β</mi><mrow><mi>j</mi><mo>,</mo><mn>0</mn></mrow></msub></mrow><mrow><msub><mi>s</mi><msub><mi>b</mi><mi>j</mi></msub></msub></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Bij H₀: βⱼ = 0</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Bij H₀: βⱼ = 0\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>t</mi><mo>=</mo><mfrac><mrow><msub><mi>b</mi><mi>j</mi></msub></mrow><mrow><msub><mi>s</mi><msub><mi>b</mi><mi>j</mi></msub></msub></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Vrijheidsgraden</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Vrijheidsgraden\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>df</mi><mo>=</mo><mi>n</mi><mo>−</mo><mi>k</mi><mo>−</mo><mn>1</mn></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>bⱼ = geschatte coëfficiënt; βⱼ,₀ = waarde onder H₀; s_bⱼ = standaardfout van die coëfficiënt; k = aantal verklarende variabelen, zonder constante.</p></details><p>De <strong>p-waarde</strong> is de kans, uitgaande van H₀, op een minstens zo extreme toetsingsuitkomst. Het is niet de kans dat H₀ waar is. Bij een tweezijdige toets verwerp je H₀ wanneer |t| groter is dan de kritieke waarde, of wanneer de tweezijdige p-waarde kleiner is dan α.</p><p>SPSS Coefficients geeft een tweezijdige Sig. Voor een vooraf gekozen eenzijdige toets mag je halveren als het teken overeenkomt met H₁. Ligt het teken juist verkeerd, dan is de eenzijdige p gelijk aan 1 − p_tweezijdig/2. Een tweezijdige p vergelijk je met α, niet nog eens met α/2. De verdeling over twee staarten zit al in die p-waarde.</p>"
        },
        {
          "title": "Het hele model toetsen met F",
          "html": "<p>Bij meervoudige regressie toets je met F: H₀: alle hellingscoëfficiënten zijn nul; H₁: minstens één is niet nul. F = MSR/MSE, met v₁ = k en v₂ = n − k − 1. Het kritieke gebied ligt rechts. Een significante F zegt nog niet welke individuele variabelen significant zijn. Bij enkelvoudige regressie is F = t² voor dezelfde nulhypothese.</p>"
        },
        {
          "title": "De conclusie in vier stappen",
          "html": "<ol><li>Vergelijk toetsingsgrootheid met kritiek gebied, of p met α.</li><li>Vermeld: H₀ wel of niet verwerpen.</li><li>Vertaal naar de genoemde variabelen, met de richting als de toets eenzijdig is.</li><li>Benoem het relevante risico.</li></ol><p><strong>α-risico</strong>: een ware H₀ toch verwerpen. <strong>β-risico</strong>: een onware H₀ niet verwerpen. Bij niet verwerpen schrijf je dat het bewijs onvoldoende is; daarmee is H₀ niet bewezen. De waarde van β is niet automatisch 1 − α.</p>"
        },
        {
          "title": "Toetsen en het interval voor de regressiehelling",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Formule 39: standaardfout van de helling</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Formule 39: standaardfout van de helling\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><msub><mi>b</mi><mn>1</mn></msub></msub><mo>=</mo><mfrac><mrow><msub><mi>s</mi><mi>y</mi></msub></mrow><mrow><msub><mi>s</mi><mi>x</mi></msub></mrow></mfrac><mo>×</mo><msqrt><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup></mrow><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></mfrac></msqrt></mrow></math></div></div></div><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Formule 40: correlatie toetsen</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Formule 40: correlatie toetsen\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>t</mi><mo>=</mo><mfrac><mrow><mi>r</mi><mo>×</mo><msqrt><mi>n</mi><mo>−</mo><mn>2</mn></msqrt></mrow><mrow><msqrt><mn>1</mn><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup></msqrt></mrow></mfrac></mrow></math></div></div></div><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Interval voor de populatiehelling</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Interval voor de populatiehelling\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mrow><msub><mi>b</mi><mn>1</mn></msub><mo>±</mo><mi>t</mi><mo>×</mo><msub><mi>s</mi><msub><mi>b</mi><mn>1</mn></msub></msub></mrow></mrow></math></div></div></div><p>Deze vormen met de gewone Pearson-correlatie r horen bij enkelvoudige regressie met constante. Voor H₀: ρ = 0 of H₀: β₁ = 0 geven ze dezelfde t als b₁/s_b₁. Gebruik ze niet met de totale R van een meervoudig model. Voor H₀: β₁ = een andere waarde neem je (b₁ − die waarde)/s_b₁.</p><h3>Vervolg op cursusopgave H9.1</h3><ol><li>De regressiehelling is b₁ ≈ 14,73939 kg/jaar. Met n = 10, r ≈ 0,940088, sᵧ ≈ 47,46976 en sₓ ≈ 3,02765 volgt s_b₁ ≈ 1,88988 kg/jaar.</li><li>t = b₁/s_b₁ ≈ 7,79910. Formule 40 geeft dezelfde waarde; df = 10 − 2 = 8.</li><li>De cursusvraag vraagt een positief verband: H₀: β₁ ≤ 0, H₁: β₁ > 0. Bij α = 0,05 is de eenzijdige grens 1,860. Verwerp H₀: er is statistisch bewijs voor een positief lineair verband.</li><li>Aanvullende toepassing uit boek p. 255: voor een tweezijdig 95%-interval gebruik je t = 2,306. Het interval is 14,73939 ± 2,306 × 1,88988 ≈ [10,38; 19,10] kg/jaar.</li><li>Nul ligt buiten dit tweezijdige interval. Daarmee verwerp je ook H₀: β₁ = 0 bij een tweezijdige toets met α = 0,05. Koppel een interval alleen aan een toets met passend niveau en passende richting.</li></ol>"
        },
        {
          "title": "Zelf oefenen met deze aanvulling",
          "html": "<p>Maak de eigen oefenvarianten bij dit onderwerp. Je krijgt na controle rekenstappen, uitleg per antwoord en de gebruikte bronnen.</p><p><a class=\"study-btn\" href=\"#tentamen/mc/toetsen\">Oefen Hypothesen, t-toets en F-toets</a></p>"
        }
      ],
      "example": {
        "title": "Tentamen 17 maart 2025, vraag 21",
        "steps": [
          "Dummy Vrouw: 1 = vrouw, 0 = man. Gevraagd: aantonen dat de coëfficiënt negatief is.",
          "H₀: β₁ ≥ 0; H₁: β₁ < 0. De tabel geeft t = −2,444.",
          "De officiële uitwerking gebruikt df = 193, tabelrij 190 en de eenzijdige grens −1,653 bij α = 0,05.",
          "−2,444 < −1,653: de uitkomst ligt in het kritieke gebied; H₀ wordt verworpen.",
          "Binnen dit model is het voorspelde salaris voor vrouwen significant lager, bij gelijkblijvende overige opgenomen kenmerken. Het α-risico is relevant."
        ]
      },
      "pitfalls": [
        "Een grote p-waarde bewijst niet dat er geen verband bestaat.",
        "Gebruik bij individuele meervoudige coëfficiënten t = B/Std. Error, niet de enkelvoudige formule met de totale model-R."
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
      "questions": [
        {
          "id": "toetsen-1",
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
          }
        },
        {
          "id": "toetsen-2",
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
          }
        },
        {
          "id": "toetsen-3",
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
          }
        }
      ],
      "lab": "toets",
      "exam": "exam2025:9:Vraag 21",
      "prerequisites": [
        "Les 3: kansen, α, eenzijdigheid, tweezijdigheid en tabelgrenzen.",
        "Les 10: de betekenis van een regressiecoëfficiënt.",
        "Les 11: ANOVA, F en residuele vrijheidsgraden."
      ],
      "formulaGuide": [
        {
          "title": "Eén coëfficiënt toetsen met t",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik de t-toets voor een uitspraak over één populatiecoëfficiënt. De richting van de onderzoeksvraag bepaalt of H₁ linkszijdig, rechtszijdig of tweezijdig is.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Toetsingsgrootheid</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Toetsingsgrootheid\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>t</mi><mo>=</mo><mfrac><mrow><msub><mi>b</mi><mi>j</mi></msub><mo>−</mo><msub><mi>β</mi><mrow><mi>j</mi><mo>,</mo><mn>0</mn></mrow></msub></mrow><mrow><msub><mi>s</mi><msub><mi>b</mi><mi>j</mi></msub></msub></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Bij H₀: βⱼ = 0</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Bij H₀: βⱼ = 0\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>t</mi><mo>=</mo><mfrac><mrow><msub><mi>b</mi><mi>j</mi></msub></mrow><mrow><msub><mi>s</mi><msub><mi>b</mi><mi>j</mi></msub></msub></mrow></mfrac></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Vrijheidsgraden</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Vrijheidsgraden\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>df</mi><mo>=</mo><mi>n</mi><mo>−</mo><mi>k</mi><mo>−</mo><mn>1</mn></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>bⱼ = geschatte coëfficiënt; βⱼ,₀ = waarde onder H₀; s_bⱼ = standaardfout van die coëfficiënt; k = aantal verklarende variabelen, zonder constante. De berekende t is een toetsingsgrootheid. De kritieke t komt uit de tabel en hangt af van α, richting en df. SPSS Sig. bij een coëfficiënt is gewoonlijk tweezijdig.</p><h3>Zo reken je stap voor stap</h3><ol><li>Definieer de populatiecoëfficiënt en schrijf H₀ en H₁ op voordat je de getallen bekijkt.</li><li>Bereken t = (bⱼ − βⱼ,₀)/s_bⱼ. Bij een grenswaarde nul wordt dit B/Std. Error.</li><li>Gebruik df = n − k − 1. Kies de juiste eenzijdige of tweezijdige kritieke grens.</li><li>Vergelijk met het juiste kritieke gebied. Bij een linkszijdige toets horen ook de mintekens bij de beslissing.</li><li>Schrijf de conclusie in de context van de vraag. Bij verwerpen is het α-risico relevant.</li></ol><h3>Tentamen 17 maart 2025, vraag 21</h3><ol><li>Dummy Vrouw: 1 = vrouw, 0 = man. Gevraagd: aantonen dat de coëfficiënt negatief is.</li><li>H₀: β₁ ≥ 0; H₁: β₁ &lt; 0. De tabel geeft t = −2,444.</li><li>De officiële uitwerking gebruikt df = 193, tabelrij 190 en de eenzijdige grens −1,653 bij α = 0,05.</li><li>−2,444 &lt; −1,653: de uitkomst ligt in het kritieke gebied; H₀ wordt verworpen.</li><li>Binnen dit model is het voorspelde salaris voor vrouwen significant lager, bij gelijkblijvende overige opgenomen kenmerken. Het α-risico is relevant.</li></ol><p class=\"note\"><strong>Let op:</strong> Een tweezijdige p-waarde mag je voor een eenzijdige toets alleen halveren als het gevonden teken bij H₁ past. Een grote p-waarde bewijst niet dat de coëfficiënt nul is.</p>"
        },
        {
          "title": "Het gehele regressiemodel toetsen met F",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik de globale F-toets om te onderzoeken of de verklarende variabelen gezamenlijk lineaire verklaringskracht hebben. Onder H₀ zijn alle k hellingscoëfficiënten nul.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Globale F-toets</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Globale F-toets\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><mi>MSR</mi></mrow><mrow><mi>MSE</mi></mrow></mfrac></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>MSR = SSR/k en MSE = SSE/(n − k − 1). De teller heeft k vrijheidsgraden en de noemer n − k − 1. De F-kritieke grens gebruikt de rechterstaart met kans α.</p><h3>Zo reken je stap voor stap</h3><ol><li>Bereken MSR en MSE uit de ANOVA-tabel.</li><li>Deel MSR door MSE voor F.</li><li>Vergelijk F met de F-tabelgrens met beide vrijheidsgraden, of vergelijk de globale Sig. met α.</li><li>Concludeer bij verwerpen dat minstens één opgenomen hellingscoëfficiënt afwijkt van nul.</li></ol><h3>Voorbeeld: de ANOVA-gegevens uit de bestaande les</h3><ol><li>Bij n = 30, k = 1, SSR = 1.351,262 en SSE = 44,105 is MSE = 44,105/28 ≈ 1,57518.</li><li>MSR = 1.351,262/1 = 1.351,262. Dus F ≈ 857,85.</li><li>Voor een formele conclusie hoort daarbij de gegeven α en de passende F-grens of globale p-waarde.</li></ol><p class=\"note\"><strong>Let op:</strong> Een significante globale F-toets maakt niet alle afzonderlijke coëfficiënten significant. Halveer α niet voor de rechterstaart van deze F-toets.</p>"
        },
        {
          "title": "Toetsen en het interval voor de regressiehelling",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Formule 39: standaardfout van de helling</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Formule 39: standaardfout van de helling\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>s</mi><msub><mi>b</mi><mn>1</mn></msub></msub><mo>=</mo><mfrac><mrow><msub><mi>s</mi><mi>y</mi></msub></mrow><mrow><msub><mi>s</mi><mi>x</mi></msub></mrow></mfrac><mo>×</mo><msqrt><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup></mrow><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></mfrac></msqrt></mrow></math></div></div></div><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Formule 40: correlatie toetsen</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Formule 40: correlatie toetsen\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>t</mi><mo>=</mo><mfrac><mrow><mi>r</mi><mo>×</mo><msqrt><mi>n</mi><mo>−</mo><mn>2</mn></msqrt></mrow><mrow><msqrt><mn>1</mn><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup></msqrt></mrow></mfrac></mrow></math></div></div></div><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Interval voor de populatiehelling</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Interval voor de populatiehelling\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mrow><msub><mi>b</mi><mn>1</mn></msub><mo>±</mo><mi>t</mi><mo>×</mo><msub><mi>s</mi><msub><mi>b</mi><mn>1</mn></msub></msub></mrow></mrow></math></div></div></div><p>Deze vormen met de gewone Pearson-correlatie r horen bij enkelvoudige regressie met constante. Voor H₀: ρ = 0 of H₀: β₁ = 0 geven ze dezelfde t als b₁/s_b₁. Gebruik ze niet met de totale R van een meervoudig model. Voor H₀: β₁ = een andere waarde neem je (b₁ − die waarde)/s_b₁.</p><h3>Vervolg op cursusopgave H9.1</h3><ol><li>De regressiehelling is b₁ ≈ 14,73939 kg/jaar. Met n = 10, r ≈ 0,940088, sᵧ ≈ 47,46976 en sₓ ≈ 3,02765 volgt s_b₁ ≈ 1,88988 kg/jaar.</li><li>t = b₁/s_b₁ ≈ 7,79910. Formule 40 geeft dezelfde waarde; df = 10 − 2 = 8.</li><li>De cursusvraag vraagt een positief verband: H₀: β₁ ≤ 0, H₁: β₁ > 0. Bij α = 0,05 is de eenzijdige grens 1,860. Verwerp H₀: er is statistisch bewijs voor een positief lineair verband.</li><li>Aanvullende toepassing uit boek p. 255: voor een tweezijdig 95%-interval gebruik je t = 2,306. Het interval is 14,73939 ± 2,306 × 1,88988 ≈ [10,38; 19,10] kg/jaar.</li><li>Nul ligt buiten dit tweezijdige interval. Daarmee verwerp je ook H₀: β₁ = 0 bij een tweezijdige toets met α = 0,05. Koppel een interval alleen aan een toets met passend niveau en passende richting.</li></ol>"
        }
      ],
      "completionVersion": "2026-09-20"
    },
    {
      "id": "diagnostiek",
      "title": "Controleer of je het model kunt gebruiken",
      "phase": "Regressie",
      "intro": "Een significante lijn kan toch onbruikbaar zijn. Onderzoek de gegevens en residuen vóór je conclusies trekt of voorspellingen gebruikt.",
      "goals": [
        "De zeven regressieanalyses herkennen",
        "Een signaal onderscheiden van een reden om data te verwijderen",
        "Per analyse bron, conclusie en remedie geven"
      ],
      "sections": [
        {
          "title": "Eerst de structuur van de gegevens",
          "html": "<p><strong>Crosssectie</strong>: verschillende personen of bedrijven op ongeveer hetzelfde moment. <strong>Tijdreeks</strong>: waarnemingen opeenvolgend in de tijd. In de SRA-analyseroute onderzoek je tijdsvertraging en autocorrelatie bij tijdreeksen.</p><table><caption>Eerst de structuur van de gegevens</caption><tr><th scope=\"col\">Analyse</th><th scope=\"col\">Waar kijk je?</th><th scope=\"col\">Wat doe je met een probleem?</th></tr><tr><td>1. Samengevoegde groepen</td><td>Spreidingsdiagram: verschillende patronen per groep</td><td>Groepen splitsen of het model passend aanpassen</td></tr><tr><td>2. Tijdsvertraging</td><td>Tijdsdiagram en inhoudelijke logica</td><td>Bijvoorbeeld yₜ koppelen aan xₜ₋₁</td></tr><tr><td>3. Uitbijters</td><td>Gestandaardiseerde residuen en Mahalanobis Distance</td><td>Oorzaak onderzoeken, fouten herstellen, valide gegevens behouden</td></tr><tr><td>4. Invloedrijke punten</td><td>Cook’s Distance en spreidingsdiagram</td><td>Onderzoek de invloed en inhoudelijke verklaring</td></tr></table>"
        },
        {
          "title": "Uitbijter is niet hetzelfde als invloedrijk punt",
          "html": "<p>Een <strong>uitbijter in y</strong> heeft een groot gestandaardiseerd residu. De cursusgrens is |z| &gt; 2 bij n ≤ 100 en |z| &gt; 3 bij n &gt; 100. Controleer zowel het minimum als maximum. Een <strong>uitbijter in x</strong> ligt ongewoon ver in de verklarende variabelen; gebruik Mahalanobis Distance (MD). Een <strong>invloedrijk punt</strong> verandert de geschatte regressie sterk; gebruik Cook’s Distance (CD).</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Grens voor MD</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Grens voor MD\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>MD</mi><mtext>kritiek</mtext></msub><mo>=</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>MD</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>+</mo><mn>3</mn><mo>×</mo><msub><mi>s</mi><mtext>MD</mtext></msub></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Grens voor CD</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Grens voor CD\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>CD</mi><mtext>kritiek</mtext></msub><mo>=</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>CD</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>+</mo><mn>3</mn><mo>×</mo><msub><mi>s</mi><mtext>CD</mtext></msub></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>MD = Mahalanobis Distance; CD = Cook’s Distance. Een streep boven MD of CD betekent gemiddelde; s is de standaardafwijking.</p></details><p>Vergelijk het maximum met de grens en zoek in de afbeelding welke waarnemingen het betreft. Een signaal is reden voor onderzoek. Verwijder een waarneming niet uitsluitend omdat het model daarna mooier wordt.</p>"
        },
        {
          "title": "De drie modelvoorwaarden",
          "html": "<table><caption>De drie modelvoorwaarden</caption><tr><th scope=\"col\">Analyse</th><th scope=\"col\">H₀ en beoordeling</th><th scope=\"col\">Mogelijke reactie</th></tr><tr><td>5. Normaliteit</td><td>H₀: residuen normaal verdeeld. Shapiro-Wilk bij n ≤ 50; Kolmogorov-Smirnov bij n &gt; 50. Kleine p: verwerpen.</td><td>Gegevens en uitschieters onderzoeken; model of transformatie aanpassen</td></tr><tr><td>6. Homoscedasticiteit</td><td>H₀: residuen hebben constante spreiding. Onderzoek absolute residuen (ABSRES) tegenover x; een trechtervorm of significante samenhang is een signaal.</td><td>Model aanpassen of passende gewogen regressie (WLS)</td></tr><tr><td>7. Autocorrelatie</td><td>H₀: geen autocorrelatie. Gebruik bij tijdreeksen Durbin-Watson.</td><td>Een passende tijdreeks-/autocorrelatiecorrectie; daarna opnieuw controleren</td></tr></table><p><strong>Heteroscedasticiteit</strong> betekent dat de spreiding niet constant is. <strong>WLS</strong> is gewogen kleinste kwadraten: waarnemingen met andere spreiding krijgen een ander gewicht. Het in het lesmateriaal getoonde gewicht 1/x² hoort bij die specifieke correctie en is geen universele oplossing.</p>"
        },
        {
          "title": "Durbin-Watson heeft ook onbesliste gebieden",
          "html": "<p>d ligt tussen 0 en 4. Volgens het formuleblad: bij d ≤ dL is er een aanwijzing voor positieve autocorrelatie; bij d ≥ 4 − dL voor negatieve. Tussen dU en 4 − dU wordt geen autocorrelatie aangetoond. De zones tussen dL en dU en tussen 4 − dU en 4 − dL zijn <strong>onbeslist</strong>. Zoek dL en dU met de bijpassende n en k. Neem niet automatisch k = 1 bij een meervoudig model.</p><p>Schrijf bij iedere analyse: welke tabel/afbeelding en waarden je gebruikt, je conclusie en een onderbouwde remedie. Benoem bij normaliteit altijd de <em>residuen</em>.</p>"
        },
        {
          "title": "Van uitbijtersignaal naar onderbouwde aanpassing",
          "html": "<table><caption>Na een uitbijtersignaal</caption><thead><tr><th scope=\"col\">Onderzoek</th><th scope=\"col\">Vervolgactie</th></tr></thead><tbody><tr><td>Invoer- of meetfout?</td><td>Controleer de bron en herstel alleen een aantoonbare fout. Schat daarna opnieuw.</td></tr><tr><td>Terugkerende bijzondere omstandigheid?</td><td>Overweeg een inhoudelijk verdedigbare extra variabele of dummy, bijvoorbeeld voor een terugkerend seizoen.</td></tr><tr><td>Eenmalige gebeurtenis?</td><td>Onderzoek of de waarneming bij het doel en de relevante populatie hoort. Motiveer iedere behandeling en vergelijk de gevolgen.</td></tr><tr><td>Geldige waarneming zonder verklaring?</td><td>Behoud die als uitgangspunt; verwijder niet uitsluitend om R² of significantie te verbeteren.</td></tr></tbody></table>"
        },
        {
          "title": "Autocorrelatie corrigeren en opnieuw controleren",
          "html": "<p>Bij eerste-orde autocorrelatie hangen opeenvolgende storingen samen. In het boek wordt de vorige storing meegenomen: ŷ_t = b₀ + b₁x_t + r₁e_(t−1). r₁ is de geschatte autocorrelatiecoëfficiënt; e_(t−1) is het residu van de vorige periode. De coëfficiënten worden bij de correctie opnieuw geschat.</p><h3>Boekmodel met voorbeeld</h3><ol><li>Het boek geeft na correctie: ŷ_t = 14,92 + 0,2154x_t + 0,6496e_(t−1).</li><li>Neem voor het invulvoorbeeld x_t = 20 en het vorige residu e_(t−1) = 1,5. De correctieterm is 0,6496 × 1,5 = 0,9744.</li><li>De voorspelling is 14,92 + 0,2154 × 20 + 0,9744 = 20,2024. Gebruik het vorige residu, niet het nog onbekende residu van de periode die je voorspelt.</li><li>Controleer de nieuwe residuen opnieuw. In het boek is de nieuwe Durbin-Watson d = 1,2048, net boven d_U = 1,20 en onder 4 − d_U. De toets toont op het gebruikte niveau geen autocorrelatie aan. Dat is geen bewijs dat iedere modelaanname klopt.</li></ol>"
        },
        {
          "title": "Diagnostische toetsingsgrootheden zelf berekenen",
          "html": "<h3>Durbin-Watson uit residuen</h3><p>d = Σ(e_t − e_(t−1))² / Σe_t². De teller begint bij de tweede waarneming, want de eerste heeft geen voorganger in de reeks. De noemer bevat alle residuen. De tijdsvolgorde is essentieel.</p><p><strong>Voorbeeld:</strong> voor residuen 1, 1, −1, −1 is de teller 0² + (−2)² + 0² = 4 en de noemer 1 + 1 + 1 + 1 = 4. Dus d = 1. Voor een toetsbeslissing zijn passende d_L en d_U uit de tabel nodig; dit kleine voorbeeld oefent alleen de berekening.</p><h3>ABSRES en heteroscedasticiteit</h3><p>Maak de absolute residuen |eᵢ| en bepaal hun correlatie met de verklarende variabele volgens de cursusdiagnose. Toets H₀: ρ = 0 met de correlatie-t-toets. Een significant verband is een aanwijzing dat de spreiding samenhangt met x. Controleer daarnaast het residudiagram; een niet-significante toets bewijst geen constante spreiding.</p><p><strong>Voorbeeld:</strong> n = 22, r(x, |e|) = 0,50 geeft t = 0,50√20/√0,75 ≈ 2,582. Bij tweezijdig α = 0,05 en df = 20 is de grens 2,086. Onderzoek heteroscedasticiteit en een passende transformatie of gewogen regressie; controleer het aangepaste model opnieuw.</p>"
        },
        {
          "title": "Zelf oefenen met deze aanvulling",
          "html": "<p>Maak de eigen oefenvarianten bij dit onderwerp. Je krijgt na controle rekenstappen, uitleg per antwoord en de gebruikte bronnen.</p><p><a class=\"study-btn\" href=\"#tentamen/mc/diagnostiek\">Oefen Controleer of je het model kunt gebruiken</a></p>"
        }
      ],
      "example": {
        "title": "Tentamen 28 oktober 2024, vraag 11–12",
        "steps": [
          "n = 30: de y-uitbijtergrenzen zijn −2 en +2. z_min = −2,016 en z_max = 2,053 signaleren potentiële uitbijters.",
          "MD-grens = 0,967 + 3×1,112 = 4,303. MD_max = 4,245 is lager: geen signaal in x.",
          "CD-grens = 0,045 + 3×0,071 = 0,258. CD_max = 0,284 is hoger: onderzoek het betreffende punt.",
          "Shapiro-Wilk is passend bij n = 30. p = 0,879 > 0,05: H₀ niet verwerpen; geen aangetoond normaliteitsprobleem.",
          "Voor heteroscedasticiteit is p = 0,084 > 0,05: ook daar geen aangetoond probleem. Dat is geen bewijs dat elke aanname perfect geldt."
        ]
      },
      "pitfalls": [
        "Test de normaliteit van de residuen, niet zonder meer die van y.",
        "Een niet-significante diagnosetoets bewijst de aanname niet.",
        "Een tijdreeks met d dicht bij 2 moet nog met de toepasselijke tabelgrenzen beoordeeld worden."
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
      "questions": [
        {
          "id": "diagnostiek-1",
          "prompt": "n = 178. Wat zijn de cursusgrenzen voor gestandaardiseerde residuen?",
          "options": [
            "±2",
            "±3",
            "±1"
          ],
          "correct": 1,
          "explanation": "Het formuleblad gebruikt voor mogelijke y-uitbijters grenzen voor gestandaardiseerde residuen. Bij n ≤ 100 zijn de cursusgrenzen ±2; bij n > 100 zijn ze ±3. Omdat 178 > 100 gebruik je −3 en +3. Controleer zowel het minimum als het maximum van de residuen.",
          "steps": [
            "Het formuleblad gebruikt voor mogelijke y-uitbijters grenzen voor gestandaardiseerde residuen.",
            "Bij n ≤ 100 zijn de cursusgrenzen ±2; bij n > 100 zijn ze ±3.",
            "Omdat 178 > 100 gebruik je −3 en +3. Controleer zowel het minimum als het maximum van de residuen."
          ],
          "pattern": "Herken: n en “cursusgrenzen voor gestandaardiseerde residuen”. → Betekenis: Je zoekt de cursusregel voor opvallende residuen, afhankelijk van de omvangscategorie. → Aanpak: Vergelijk n met 100: de cursus gebruikt ±2 bij n ≤ 100 en ±3 bij n > 100. → Gevraagd antwoord: Twee residugrenzen, geen Cook-grens of toets op normaliteit.",
          "trap": "De grens signaleert een mogelijk afwijkende waarneming; zij is geen automatische verwijderregel.",
          "optionExplanations": [
            "±2 hoort volgens het formuleblad bij n ≤ 100. Hier is n = 178, dus geldt de andere cursusgrens.",
            "±3 is de behandelde grens voor n > 100. Zowel grote negatieve als grote positieve residuen verdienen aandacht.",
            "±1 is niet de cursusgrens voor deze uitbijtercontrole."
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
          }
        },
        {
          "id": "diagnostiek-2",
          "prompt": "Welke grootheid hoort bij invloedrijke punten?",
          "options": [
            "Cook’s Distance",
            "R²",
            "De constante"
          ],
          "correct": 0,
          "explanation": "Een invloedrijk punt kan de geschatte regressie sterk veranderen. Cook’s Distance is in de cursus de maat voor die mogelijke invloed; Mahalanobis Distance heeft betrekking op afwijkende x-waarden. Een hoge Cook’s Distance vraagt om onderzoek van de waarneming en de invloed, niet om automatisch verwijderen.",
          "steps": [
            "Een invloedrijk punt kan de geschatte regressie sterk veranderen.",
            "Cook’s Distance is in de cursus de maat voor die mogelijke invloed; Mahalanobis Distance heeft betrekking op afwijkende x-waarden.",
            "Een hoge Cook’s Distance vraagt om onderzoek van de waarneming en de invloed, niet om automatisch verwijderen."
          ],
          "pattern": "Herken: Het woord “invloedrijke” bij waarnemingen. → Betekenis: Invloed gaat over hoeveel een punt de geschatte regressie verandert. → Aanpak: Koppel dit aan Cook’s Distance; een groot residu en een extreme x zijn afzonderlijke kenmerken. → Gevraagd antwoord: De diagnostische maat voor invloed op het model.",
          "trap": "Een uitbijter, een invloedrijk punt en een hoge R² zijn verschillende begrippen.",
          "optionExplanations": [
            "Cook’s Distance beoordeelt de mogelijke invloed van een afzonderlijke waarneming op de regressieschatting.",
            "R² beschrijft verklaarde variatie voor het model als geheel. Het identificeert geen individuele invloedrijke punten.",
            "De constante is de voorspelde y als alle verklarende variabelen nul zijn. Zij is geen diagnostische maat voor invloed."
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
          }
        },
        {
          "id": "diagnostiek-3",
          "prompt": "Shapiro-Wilk p = 0,01 bij α = 0,05. Conclusie?",
          "options": [
            "Normaliteit bewezen",
            "H₀ verwerpen: aanwijzing voor niet-normale residuen",
            "Geen uitspraak mogelijk"
          ],
          "correct": 1,
          "explanation": "Bij de Shapiro-Wilk-toets luidt H₀ hier dat de residuen normaal verdeeld zijn. De p-waarde 0,01 is kleiner dan α = 0,05, dus verwerp H₀. Formuleer het resultaat als een aanwijzing voor niet-normale residuen. Onderzoek vervolgens de data en het gekozen model.",
          "steps": [
            "Bij de Shapiro-Wilk-toets luidt H₀ hier dat de residuen normaal verdeeld zijn.",
            "De p-waarde 0,01 is kleiner dan α = 0,05, dus verwerp H₀.",
            "Formuleer het resultaat als een aanwijzing voor niet-normale residuen. Onderzoek vervolgens de data en het gekozen model."
          ],
          "pattern": "Herken: Shapiro-Wilk met p en α. → Betekenis: Dit is een toets op normaliteit van de residuen. → Aanpak: Vergelijk p met α en verbind de beslissing expliciet aan de normaliteitsaanname. → Gevraagd antwoord: Een toetsconclusie over residunormaliteit, niet over verbandsterkte of constante variantie.",
          "trap": "Noem de normaliteit van de residuen; de toets gaat hier niet zonder meer over de verdeling van y.",
          "optionExplanations": [
            "Een kleine p ondersteunt geen bewijs voor normaliteit. Zij geeft juist aanleiding de nulhypothese van normale residuen te verwerpen.",
            "Dit koppelt de juiste nulhypothese aan 0,01 < 0,05 en geeft de juiste inhoudelijke conclusie.",
            "De gegevens bevatten p en α, dus je kunt wel een toetsbeslissing nemen. Niet iedere vervolgvraag over de oorzaak is daarmee beantwoord."
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
          }
        }
      ],
      "lab": "diagnose",
      "exam": "exam2024:5:Vraag 11–12",
      "prerequisites": [
        "Les 10: een residu is y minus ŷ.",
        "Les 12: nulhypothese, p-waarde en significantieniveau α.",
        "Les 2: gemiddelde en standaardafwijking uit elkaar houden."
      ],
      "formulaGuide": [
        {
          "title": "Signalen voor uitbijters en invloedrijke waarnemingen berekenen",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik deze controles voordat je conclusies of voorspellingen op een regressiemodel baseert. Een ongebruikelijke y, een ongebruikelijke combinatie van x-waarden en een invloedrijke waarneming zijn verschillende signalen.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Y-signaal bij n ≤ 100</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Y-signaal bij n ≤ 100\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mrow><mo>|</mo><mi>z</mi><mo>|</mo><mo>&gt;</mo><mn>2</mn></mrow></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Y-signaal bij n &gt; 100</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Y-signaal bij n &gt; 100\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mrow><mo>|</mo><mi>z</mi><mo>|</mo><mo>&gt;</mo><mn>3</mn></mrow></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Grens voor MD</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Grens voor MD\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>MD</mi><mtext>kritiek</mtext></msub><mo>=</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>MD</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>+</mo><mn>3</mn><mo>×</mo><msub><mi>s</mi><mtext>MD</mtext></msub></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Grens voor CD</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Grens voor CD\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>CD</mi><mtext>kritiek</mtext></msub><mo>=</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>CD</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>+</mo><mn>3</mn><mo>×</mo><msub><mi>s</mi><mtext>CD</mtext></msub></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>MD = Mahalanobis Distance; CD = Cook’s Distance. Een streep boven MD of CD betekent gemiddelde; s is de standaardafwijking. z is hier het gestandaardiseerde residu uit de diagnostische uitvoer. De absolute waarde |z| gebruikt de afstand tot nul, ongeacht het teken.</p><h3>Zo reken je stap voor stap</h3><ol><li>Kies de y-grens op basis van n en vergelijk zowel het kleinste als het grootste gestandaardiseerde residu.</li><li>Bereken het gemiddelde van MD plus drie keer de standaardafwijking van MD. Vergelijk MD_max met die grens.</li><li>Bereken op dezelfde manier de grens voor CD en vergelijk CD_max ermee.</li><li>Zoek bij een overschrijding op welke waarneming het gaat. Onderzoek invoer, inhoud en invloed; verwijder niet automatisch.</li><li>Controleer daarnaast normaliteit, homoscedasticiteit en waar relevant autocorrelatie. Dat vraagt de passende uitvoer, grafieken en toetsen; een uitbijtergrens vervangt die controles niet.</li></ol><h3>Tentamen 28 oktober 2024, vraag 11–12</h3><ol><li>n = 30: de y-uitbijtergrenzen zijn −2 en +2. z_min = −2,016 en z_max = 2,053 signaleren potentiële uitbijters.</li><li>MD-grens = 0,967 + 3×1,112 = 4,303. MD_max = 4,245 is lager: geen signaal in x.</li><li>CD-grens = 0,045 + 3×0,071 = 0,258. CD_max = 0,284 is hoger: onderzoek het betreffende punt.</li><li>Shapiro-Wilk is passend bij n = 30. p = 0,879 &gt; 0,05: H₀ niet verwerpen; geen aangetoond normaliteitsprobleem.</li><li>Voor heteroscedasticiteit is p = 0,084 &gt; 0,05: ook daar geen aangetoond probleem. Dat is geen bewijs dat elke aanname perfect geldt.</li></ol><p class=\"note\"><strong>Let op:</strong> De grenzen signaleren nader te onderzoeken punten. Een niet-significante diagnosetoets bewijst geen perfecte aanname. Bij Durbin-Watson bestaan ook onbesliste gebieden; d rond 2 is op zichzelf geen volledige tabelbeslissing.</p>"
        },
        {
          "title": "Van uitbijtersignaal naar onderbouwde aanpassing",
          "html": "<table><caption>Na een uitbijtersignaal</caption><thead><tr><th scope=\"col\">Onderzoek</th><th scope=\"col\">Vervolgactie</th></tr></thead><tbody><tr><td>Invoer- of meetfout?</td><td>Controleer de bron en herstel alleen een aantoonbare fout. Schat daarna opnieuw.</td></tr><tr><td>Terugkerende bijzondere omstandigheid?</td><td>Overweeg een inhoudelijk verdedigbare extra variabele of dummy, bijvoorbeeld voor een terugkerend seizoen.</td></tr><tr><td>Eenmalige gebeurtenis?</td><td>Onderzoek of de waarneming bij het doel en de relevante populatie hoort. Motiveer iedere behandeling en vergelijk de gevolgen.</td></tr><tr><td>Geldige waarneming zonder verklaring?</td><td>Behoud die als uitgangspunt; verwijder niet uitsluitend om R² of significantie te verbeteren.</td></tr></tbody></table>"
        },
        {
          "title": "Autocorrelatie corrigeren en opnieuw controleren",
          "html": "<p>Bij eerste-orde autocorrelatie hangen opeenvolgende storingen samen. In het boek wordt de vorige storing meegenomen: ŷ_t = b₀ + b₁x_t + r₁e_(t−1). r₁ is de geschatte autocorrelatiecoëfficiënt; e_(t−1) is het residu van de vorige periode. De coëfficiënten worden bij de correctie opnieuw geschat.</p><h3>Boekmodel met voorbeeld</h3><ol><li>Het boek geeft na correctie: ŷ_t = 14,92 + 0,2154x_t + 0,6496e_(t−1).</li><li>Neem voor het invulvoorbeeld x_t = 20 en het vorige residu e_(t−1) = 1,5. De correctieterm is 0,6496 × 1,5 = 0,9744.</li><li>De voorspelling is 14,92 + 0,2154 × 20 + 0,9744 = 20,2024. Gebruik het vorige residu, niet het nog onbekende residu van de periode die je voorspelt.</li><li>Controleer de nieuwe residuen opnieuw. In het boek is de nieuwe Durbin-Watson d = 1,2048, net boven d_U = 1,20 en onder 4 − d_U. De toets toont op het gebruikte niveau geen autocorrelatie aan. Dat is geen bewijs dat iedere modelaanname klopt.</li></ol>"
        },
        {
          "title": "Diagnostische toetsingsgrootheden zelf berekenen",
          "html": "<h3>Durbin-Watson uit residuen</h3><p>d = Σ(e_t − e_(t−1))² / Σe_t². De teller begint bij de tweede waarneming, want de eerste heeft geen voorganger in de reeks. De noemer bevat alle residuen. De tijdsvolgorde is essentieel.</p><p><strong>Voorbeeld:</strong> voor residuen 1, 1, −1, −1 is de teller 0² + (−2)² + 0² = 4 en de noemer 1 + 1 + 1 + 1 = 4. Dus d = 1. Voor een toetsbeslissing zijn passende d_L en d_U uit de tabel nodig; dit kleine voorbeeld oefent alleen de berekening.</p><h3>ABSRES en heteroscedasticiteit</h3><p>Maak de absolute residuen |eᵢ| en bepaal hun correlatie met de verklarende variabele volgens de cursusdiagnose. Toets H₀: ρ = 0 met de correlatie-t-toets. Een significant verband is een aanwijzing dat de spreiding samenhangt met x. Controleer daarnaast het residudiagram; een niet-significante toets bewijst geen constante spreiding.</p><p><strong>Voorbeeld:</strong> n = 22, r(x, |e|) = 0,50 geeft t = 0,50√20/√0,75 ≈ 2,582. Bij tweezijdig α = 0,05 en df = 20 is de grens 2,086. Onderzoek heteroscedasticiteit en een passende transformatie of gewogen regressie; controleer het aangepaste model opnieuw.</p>"
        }
      ],
      "completionVersion": "2026-09-20"
    },
    {
      "id": "voorspellen",
      "title": "Van regressielijn naar voorspellingsinterval",
      "phase": "Regressie",
      "intro": "De lijn geeft één voorspelling. Voor een nieuwe individuele waarneming is ook een marge nodig. Die marge groeit als je verder van het centrum van de gegevens voorspelt.",
      "goals": [
        "Een puntschatting bij x₀ berekenen",
        "Formule 50 per onderdeel begrijpen",
        "Een afwijkende realisatie beoordelen"
      ],
      "sections": [
        {
          "title": "Eerst de puntvoorspelling",
          "html": "<p>x₀ is de nieuwe waarde van x waarvoor je iets wilt weten. Vul die in: ŷ₀ = b₀ + b₁x₀. Controleer de eenheden. Zijn bedragen in duizenden euro’s uitgedrukt, dan is de voorspelling dat ook.</p><p><strong>Interpolatie</strong> is voorspellen binnen het onderzochte x-gebied. <strong>Extrapolatie</strong> is voorspellen daarbuiten. Het oorspronkelijke verband hoeft buiten het waargenomen gebied niet door te lopen. Onderzoek eerst het relevante bereik en de regressieaannames.</p>"
        },
        {
          "title": "Waarom staat er een 1 onder de wortel?",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Individueel voorspellingsinterval</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Individueel voorspellingsinterval\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mn>0</mn></msub><mo>±</mo><mi>t</mi><mo>×</mo><msub><mi>s</mi><mi>e</mi></msub><mo>×</mo><msqrt><mn>1</mn><mo>+</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>n</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mrow><mo>(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>x</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>)</mo></mrow><mn>2</mn></msup></mrow><mrow><mrow><mrow><mo>(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>)</mo></mrow><msup><msub><mi>s</mi><mi>x</mi></msub><mn>2</mn></msup></mrow></mrow></mfrac></msqrt></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>x₀ = nieuwe x; x̄ = gemiddelde x; s_x = standaardafwijking van x; s_e = residuele standaardfout; t hoort hier bij n − 2 vrijheidsgraden.</p></details><p>De eerste <strong>1</strong> staat voor de extra spreiding van één nieuwe waarneming rond de lijn. De term 1/n hoort bij de onzekerheid van de geschatte lijn. De laatste term vergroot de marge wanneer x₀ ver van x̄ ligt. Daarom is het individuele voorspellingsinterval het smalst bij x₀ = x̄.</p><p>Dit is het <strong>voorspellingsinterval voor één nieuwe waarneming</strong> uit formule 50. Het interval voor de gemiddelde respons bij x₀ mist die eerste 1 en is smaller. Lees dus eerst wat er precies wordt voorspeld. Gebruik voor enkelvoudige regressie df = n − 2 en s_e = √MSE.</p>"
        },
        {
          "title": "Een werkelijke uitkomst vergelijken",
          "html": "<p>Ligt de gerealiseerde y buiten het interval, dan is dat aanleiding voor nader onderzoek. Het is geen automatisch bewijs van een fout of fraude. Controleer eerst de invoer, modelaannames en of de situatie vergelijkbaar is met de gegevens waarop het model is geschat.</p>"
        },
        {
          "title": "Basisperiode en controleperiode gescheiden houden",
          "html": "<p>In de <strong>basisperiode</strong> schat en beoordeel je het model. In de <strong>controleperiode</strong> gebruik je dat model om nieuwe waarnemingen op plausibiliteit te onderzoeken. Het boek gebruikt 24 maanden als basis en daarna 12 maanden voor controle. Bepaal voor iedere nieuwe x de voorspelling en het individuele voorspellingsinterval. Een nieuwe realisatie buiten het interval is aanleiding voor onderzoek, geen automatisch bewijs van een boekingsfout of fraude.</p><p>Pas het model niet stilzwijgend aan met dezelfde controlewaarneming die je wilt beoordelen. Als het proces aantoonbaar verandert, motiveer een nieuwe basisperiode en controleer het model opnieuw.</p>"
        }
      ],
      "example": {
        "title": "Tentamen 28 oktober 2024, vraag 13: gemiddelde of individu?",
        "steps": [
          "Gegeven: ŷ = 7,159 + 0,099x; x₀ = x̄ = 228,1; n = 30; s_e = 1,25506.",
          "Puntvoorspelling: 7,159 + 0,099×228,1 = 29,7409. Omdat x₀ = x̄ is de laatste term onder de wortel nul.",
          "De opgave vraagt het gemiddelde. Bij 95% en df = 28 is t = 2,048; de marge voor dat gemiddelde is 2,048 × 1,25506 / √30 ≈ 0,4693.",
          "Het interval voor de gemiddelde respons is [29,2716; 30,2102]. Naar buiten op één decimaal afgerond: [29,2; 30,3].",
          "Het officiële antwoordmodel gebruikt wél de extra 1 en berekent daardoor het bredere individuele interval [27,1; 32,4]. Dat antwoord past bij één nieuwe persoon, maar niet bij het woord gemiddelde in de vraag."
        ]
      },
      "pitfalls": [
        "Gebruik bij een individuele voorspelling de eerste 1 onder de wortel.",
        "s_e is √MSE, niet MSE zelf."
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
      "questions": [
        {
          "id": "voorspellen-1",
          "prompt": "Waar is het voorspellingsinterval het smalst?",
          "options": [
            "Bij x₀ = x̄",
            "Bij x₀ = 0, altijd",
            "Zo ver mogelijk van x̄"
          ],
          "correct": 0,
          "explanation": "De standaardfout van de voorspelling bevat een term met (x₀ − x̄)². Bij x₀ = x̄ is die term nul, de kleinst mogelijke waarde van een kwadraat. Bij hetzelfde model en dezelfde betrouwbaarheid is het interval daar dus het smalst.",
          "steps": [
            "De standaardfout van de voorspelling bevat een term met (x₀ − x̄)².",
            "Bij x₀ = x̄ is die term nul, de kleinst mogelijke waarde van een kwadraat.",
            "Bij hetzelfde model en dezelfde betrouwbaarheid is het interval daar dus het smalst."
          ],
          "pattern": "Herken: “Waar het smalst” bij een voorspellingsinterval. → Betekenis: De afstand tussen x₀ en het steekproefgemiddelde van x beïnvloedt de onzekerheid. → Aanpak: Zoek waar de term (x₀ − x̄)² minimaal is. → Gevraagd antwoord: Een plaats op de x-as, geen betrouwbaarheidspercentage.",
          "trap": "x = 0 is alleen het centrum als x̄ toevallig ook nul is.",
          "optionExplanations": [
            "Bij x₀ = x̄ verdwijnt de afstandsterm. Daardoor is de intervalmarge binnen dit model minimaal.",
            "Nul heeft geen vaste bijzondere positie in de geobserveerde x-data. Alleen als x̄ = 0 valt dit samen met het smalste interval.",
            "Verder van x̄ wordt de afstandsterm groter en daarmee ook de onzekerheid en intervalbreedte."
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
          }
        },
        {
          "id": "voorspellen-2",
          "prompt": "Welk interval is doorgaans breder?",
          "options": [
            "Voor de gemiddelde respons",
            "Voor één nieuwe waarneming",
            "Ze zijn altijd even breed"
          ],
          "correct": 1,
          "explanation": "Een interval voor de gemiddelde respons beschrijft onzekerheid over de gemiddelde y bij een gegeven x₀. Eén nieuwe waarneming kan bovendien door individuele storing van dat gemiddelde afwijken. Het individuele voorspellingsinterval bevat daarom een extra 1 onder de wortel en is bij hetzelfde model doorgaans breder.",
          "steps": [
            "Een interval voor de gemiddelde respons beschrijft onzekerheid over de gemiddelde y bij een gegeven x₀.",
            "Eén nieuwe waarneming kan bovendien door individuele storing van dat gemiddelde afwijken.",
            "Het individuele voorspellingsinterval bevat daarom een extra 1 onder de wortel en is bij hetzelfde model doorgaans breder."
          ],
          "pattern": "Herken: Een vergelijking tussen een interval voor het gemiddelde en voor één nieuwe waarneming. → Betekenis: Een individueel interval bevat naast schattingsonzekerheid ook individuele residuspreiding. → Aanpak: Herken in de individuele formule de extra 1 onder de wortel bij gelijk model en niveau. → Gevraagd antwoord: Welk interval breder is en welke extra onzekerheid dat verklaart.",
          "trap": "Een interval voor een gemiddelde is te smal als de vraag één nieuwe waarneming betreft.",
          "optionExplanations": [
            "Het gemiddelde responsinterval bevat geen extra individuele storing. Het is daardoor doorgaans smaller dan het individuele interval.",
            "Het interval voor één nieuwe waarneming is breder, omdat naast schattingsonzekerheid ook nieuwe individuele afwijking meetelt.",
            "De formules verschillen door de extra storingsterm. Daardoor zijn hun breedten bij hetzelfde model niet in het algemeen gelijk."
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
          }
        },
        {
          "id": "voorspellen-3",
          "prompt": "Een realisatie ligt buiten het interval. Wat volgt?",
          "options": [
            "Fraude staat vast",
            "Nader onderzoek is nodig",
            "De realisatie moet worden verwijderd"
          ],
          "correct": 1,
          "explanation": "Een voorspellingsinterval beschrijft het verwachte bereik onder het gekozen model en de aannames. Een realisatie buiten dat interval is een opvallende afwijking, maar vertelt niet waarom die optreedt. Onderzoek daarom de waarneming, de gegevens en de modelaannames voordat je een inhoudelijke oorzaak toeschrijft.",
          "steps": [
            "Een voorspellingsinterval beschrijft het verwachte bereik onder het gekozen model en de aannames.",
            "Een realisatie buiten dat interval is een opvallende afwijking, maar vertelt niet waarom die optreedt.",
            "Onderzoek daarom de waarneming, de gegevens en de modelaannames voordat je een inhoudelijke oorzaak toeschrijft."
          ],
          "pattern": "Herken: Een realisatie buiten het interval en de vraag wat daaruit volgt. → Betekenis: Het interval signaleert een modelmatige afwijking, geen oorzaak. → Aanpak: Scheid het statistische signaal van een bewijs van fout of fraude. → Gevraagd antwoord: Een aanleiding voor onderzoek, zonder een ongefundeerde oorzakelijke conclusie.",
          "trap": "Verwar een ongebruikelijke uitkomst niet met bewijs van fraude of een reden om data te verwijderen.",
          "optionExplanations": [
            "Het interval toetst geen intentie en bewijst geen fraude. Ook modelproblemen, fouten of toevallige afwijkingen kunnen een rol spelen.",
            "Nader onderzoek is de passende stap: de afwijking vraagt een verklaring die niet uit het interval alleen volgt.",
            "Automatisch verwijderen zou de informatie over de afwijking wegnemen. Eerst moet worden onderzocht of er een inhoudelijke reden voor correctie is."
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
          }
        }
      ],
      "lab": "voorspelling",
      "exam": "exam2024:5:Vraag 13",
      "prerequisites": [
        "Les 10: een nieuwe x-waarde in de regressielijn invullen.",
        "Les 11: sₑ = √MSE en de residuele vrijheidsgraden.",
        "Lessen 3 en 13: een interval lezen en beoordelen of het model bruikbaar is."
      ],
      "formulaGuide": [
        {
          "title": "Een individueel voorspellingsinterval opbouwen",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik deze formule voor de mogelijke y van één nieuwe waarneming bij x₀ in een enkelvoudig regressiemodel. Eerst moet het model inhoudelijk en volgens de diagnoses bruikbaar zijn.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Puntvoorspelling</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Puntvoorspelling\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mn>0</mn></msub><mo>=</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><msub><mi>x</mi><mn>0</mn></msub></mrow></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Individueel voorspellingsinterval</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Individueel voorspellingsinterval\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mn>0</mn></msub><mo>±</mo><mi>t</mi><mo>×</mo><msub><mi>s</mi><mi>e</mi></msub><mo>×</mo><msqrt><mn>1</mn><mo>+</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>n</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mrow><mo>(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><mover accent=\"true\"><mpadded height=\"+0.15em\"><mi>x</mi></mpadded><mo stretchy=\"true\">¯</mo></mover><mo>)</mo></mrow><mn>2</mn></msup></mrow><mrow><mrow><mrow><mo>(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>)</mo></mrow><msup><msub><mi>s</mi><mi>x</mi></msub><mn>2</mn></msup></mrow></mrow></mfrac></msqrt></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>x₀ = nieuwe x; x̄ = gemiddelde x; s_x = standaardafwijking van x; s_e = residuele standaardfout; t hoort hier bij n − 2 vrijheidsgraden. De eerste 1 onder de wortel staat voor de extra individuele spreiding. De term 1/n en de afstandsterm hebben betrekking op onzekerheid van de geschatte lijn.</p><h3>Zo reken je stap voor stap</h3><ol><li>Bereken de puntvoorspelling ŷ₀ door x₀ in de geschatte lijn in te vullen.</li><li>Lees MSE af of bereken die; neem de wortel om s_e te krijgen.</li><li>Bereken apart 1/n en (x₀ − x̄)²/((n − 1)s_x²). Tel beide bij 1 op en neem één wortel.</li><li>Vermenigvuldig die factor met s_e en de passende t-waarde met n − 2 vrijheidsgraden.</li><li>Trek de marge van ŷ₀ af en tel haar erbij op. Interpreteer de grenzen in de oorspronkelijke y-eenheid.</li></ol><h3>Tentamen 28 oktober 2024, vraag 13: gemiddelde of individu?</h3><ol><li>Gegeven: ŷ = 7,159 + 0,099x; x₀ = x̄ = 228,1; n = 30; s_e = 1,25506.</li><li>Puntvoorspelling: 7,159 + 0,099×228,1 = 29,7409. Omdat x₀ = x̄ is de laatste term onder de wortel nul.</li><li>De opgave vraagt het gemiddelde. Bij 95% en df = 28 is t = 2,048; de marge voor dat gemiddelde is 2,048 × 1,25506 / √30 ≈ 0,4693.</li><li>Het interval voor de gemiddelde respons is [29,2716; 30,2102]. Naar buiten op één decimaal afgerond: [29,2; 30,3].</li><li>Het officiële antwoordmodel gebruikt wél de extra 1 en berekent daardoor het bredere individuele interval [27,1; 32,4]. Dat antwoord past bij één nieuwe persoon, maar niet bij het woord gemiddelde in de vraag.</li></ol><p class=\"note\"><strong>Let op:</strong> Laat de eerste 1 onder de wortel niet weg bij een individuele voorspelling. Een voorspelling buiten het waargenomen x-bereik is extrapolatie en vraagt extra inhoudelijke terughoudendheid.</p>"
        }
      ]
    },
    {
      "id": "meervoudig",
      "title": "Meervoudige regressie en dummyvariabelen",
      "phase": "Verdieping",
      "intro": "Salaris hangt mogelijk samen met leeftijd, opleiding en leidinggeven tegelijk. Meervoudige regressie beschrijft de samenhang met meerdere kenmerken in één model.",
      "goals": [
        "Coëfficiënten bij gelijkblijvende overige kenmerken interpreteren",
        "Dummy’s correct invullen",
        "R² en adjusted R² uit elkaar houden"
      ],
      "sections": [
        {
          "title": "Eén model, meerdere verklaringen",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Geschatte vergelijking</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Geschatte vergelijking\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>=</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mrow><mo>+</mo><mrow><msub><mi>b</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub></mrow><mo>+</mo><mo>…</mo><mo>+</mo><mrow><msub><mi>b</mi><mi>k</mi></msub><msub><mi>x</mi><mi>k</mi></msub></mrow></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>k = aantal verklarende variabelen; bⱼ is het effect bij gelijkblijvende overige variabelen. R²_adj corrigeert voor het aantal verklarende variabelen.</p></details><p>Elke bⱼ beschrijft de verandering in de voorspelde y bij één eenheid meer xⱼ, <strong>terwijl de andere opgenomen variabelen gelijk blijven</strong>. Een coëfficiënt uit een enkelvoudig model kan veranderen zodra je andere variabelen toevoegt. Het blijft een statistische samenhang.</p><p>Gebruik uit Coefficients de kolom B. De constante telt niet mee in k. Voor een individuele coëfficiënt is t = B/Std. Error. Het hele model toets je met F.</p>"
        },
        {
          "title": "Een categorie in cijfers",
          "html": "<p>Een <strong>dummyvariabele</strong> is 0 of 1. Bijvoorbeeld: leidinggevende = 1 bij ja en 0 bij nee. Een coëfficiënt van 500 betekent dat de groep met 1 een 500 eenheden hogere voorspelling krijgt, bij gelijke overige kenmerken.</p><p>Bij drie opleidingsgroepen gebruik je met een constante twee dummy’s, bijvoorbeeld HBO en WO. Wie op beide nul heeft, behoort tot de referentiegroep. Het verschil WO tegenover HBO is b_WO − b_HBO. Vul niet beide dummy’s met 1 in als de categorieën elkaar uitsluiten.</p>"
        },
        {
          "title": "Vergelijk modellen met beleid",
          "html": "<div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Gecorrigeerde verklaarde variatie</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Gecorrigeerde verklaarde variatie\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><msup><mi>R</mi><mn>2</mn></msup><mtext>adj</mtext></msub><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><mrow><mi>k</mi><mrow><mo>(</mo><mn>1</mn><mo>−</mo><msup><mi>R</mi><mn>2</mn></msup><mo>)</mo></mrow></mrow></mrow><mrow><mi>n</mi><mo>−</mo><mi>k</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math></div></div></div><p><strong>Adjusted R²</strong> corrigeert de verklaarde variatie voor het aantal verklarende variabelen. Bij dezelfde y en dezelfde waarnemingen kan gewone R² door toevoeging van een variabele niet dalen. Adjusted R² kan wel dalen wanneer de extra variabele onvoldoende toevoegt. De cursus gebruikt deze maat bij vergelijking van modellen met verschillende aantallen verklarende variabelen.</p><p>De cursusvuistregel n ≥ 10k helpt <strong>overfitting</strong> te beperken: een model dat vooral de toevalligheden van de gebruikte data leert. Die vuistregel vervangt validatie op nieuwe gegevens niet.</p>"
        },
        {
          "title": "B en gestandaardiseerde Beta vergelijken",
          "html": "<p><strong>B</strong> is de coëfficiënt in de eenheden van het gekozen model. <strong>Beta</strong> drukt de verandering uit in standaardafwijkingen: bij één standaardafwijking meer x verandert de voorspelde y met Beta standaardafwijkingen, bij gelijkblijvende andere verklarende variabelen. Het teken geeft de richting; vergelijk absolute waarden voor een vergelijking binnen hetzelfde model.</p><h3>Boekvoorbeeld GDP, tabel 10.24</h3><table><caption>B en Beta in hetzelfde logmodel</caption><thead><tr><th scope=\"col\">Variabele</th><th scope=\"col\">B</th><th scope=\"col\">Beta</th></tr></thead><tbody><tr><td>LN_MORT</td><td>−0,434</td><td>−0,385</td></tr><tr><td>LN_ELECT</td><td>0,353</td><td>0,592</td></tr></tbody></table><p>LN_ELECT heeft in dit model de grootste absolute Beta: 0,592 &gt; 0,385. Het verband is positief; dat van LN_MORT is negatief. Dit is geen ranglijst van causale invloed. Onderlinge samenhang en de keuze van het model blijven relevant. Voorspellen in de gekozen modeleenheden doe je met B, niet met Beta.</p>"
        },
        {
          "title": "Zelf oefenen met deze aanvulling",
          "html": "<p>Maak de eigen oefenvarianten bij dit onderwerp. Je krijgt na controle rekenstappen, uitleg per antwoord en de gebruikte bronnen.</p><p><a class=\"study-btn\" href=\"#tentamen/mc/meervoudig\">Oefen Meervoudige regressie en dummyvariabelen</a></p>"
        }
      ],
      "example": {
        "title": "Tentamen 17 maart 2025, vraag 19–20",
        "steps": [
          "Het verschil tussen WO en HBO is 1.010,210 − 644,888 = € 365,322. Dit is een vergelijking binnen hetzelfde model.",
          "Voor de gegeven man: Vrouw = 0, HBO = 0, WO = 0, Leidinggevende = 1, Leeftijd = 50, Beoordeling = 10.",
          "Voorspelling = 739,508 + 38,495×50 + 71,550×10 + 2.237,947.",
          "Uitkomst = € 5.617,705. De officiële uitwerking vermeldt € 5.617; bij gewoon afronden op gehele euro’s uit de getoonde coëfficiënten is het € 5.618. De samenvatting laat dit bronverschil zichtbaar."
        ]
      },
      "pitfalls": [
        "De invloed van een dummy hangt af van de gekozen 0- en 1-codering.",
        "Een significante globale F maakt niet iedere coëfficiënt significant."
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
      "questions": [
        {
          "id": "meervoudig-1",
          "prompt": "B_HBO = 600 en B_WO = 1.000. Wat is WO tegenover HBO?",
          "options": [
            "1.600",
            "1.000",
            "400"
          ],
          "correct": 2,
          "explanation": "De dummycoëfficiënten voor HBO en WO zijn beide verschillen ten opzichte van dezelfde referentiegroep. Voor het onderlinge verschil trek je die effecten van elkaar af: B_WO − B_HBO. 1.000 − 600 = 400. De voorspelling voor WO ligt dus 400 hoger dan voor HBO, bij gelijke overige opgenomen kenmerken.",
          "steps": [
            "De dummycoëfficiënten voor HBO en WO zijn beide verschillen ten opzichte van dezelfde referentiegroep.",
            "Voor het onderlinge verschil trek je die effecten van elkaar af: B_WO − B_HBO.",
            "1.000 − 600 = 400. De voorspelling voor WO ligt dus 400 hoger dan voor HBO, bij gelijke overige opgenomen kenmerken."
          ],
          "pattern": "Herken: Twee dummycoëfficiënten B_HBO en B_WO; gevraagd is WO tegenover HBO. → Betekenis: Beide coëfficiënten zijn verschillen met dezelfde referentiegroep. → Aanpak: Trek B_HBO van B_WO af, bij gelijk gehouden overige voorspellers. → Gevraagd antwoord: Het voorspelde groepsverschil WO − HBO, niet het verschil met de referentiegroep.",
          "trap": "Een dummycoëfficiënt is geen verschil met elke willekeurige andere groep.",
          "optionExplanations": [
            "1.600 telt beide referentieverschillen op. Voor WO ten opzichte van HBO moet je het HBO-effect aftrekken.",
            "1.000 is het verschil tussen WO en de referentiegroep. HBO ligt zelf al 600 boven diezelfde referentie.",
            "400 = 1.000 − 600 is het onderlinge verschil, wanneer de overige verklarende variabelen gelijk worden gehouden."
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
          }
        },
        {
          "id": "meervoudig-2",
          "prompt": "Vier verklarende variabelen plus constante: wat is k?",
          "options": [
            "5",
            "4",
            "3"
          ],
          "correct": 1,
          "explanation": "k is in de gebruikte regressieformules het aantal verklarende variabelen. Er zijn vier verklarende variabelen, dus k = 4. De constante is wel een geschatte coëfficiënt, maar telt niet mee in k. Daarom worden residual df als n − k − 1 berekend.",
          "steps": [
            "k is in de gebruikte regressieformules het aantal verklarende variabelen.",
            "Er zijn vier verklarende variabelen, dus k = 4.",
            "De constante is wel een geschatte coëfficiënt, maar telt niet mee in k. Daarom worden residual df als n − k − 1 berekend."
          ],
          "pattern": "Herken: Een aantal verklarende variabelen “plus constante”, met k als vraag. → Betekenis: k telt de voorspellers; de constante krijgt een aparte plaats in n − k − 1. → Aanpak: Tel de verklarende variabelen en laat de constante buiten k. → Gevraagd antwoord: Het aantal voorspellers voor de model- en vrijheidsgradenformules.",
          "trap": "Het aantal geschatte coëfficiënten inclusief constante is k + 1, niet k.",
          "optionExplanations": [
            "5 telt de constante mee. Dat is hier het aantal geschatte coëfficiënten, terwijl k alleen de vier voorspellers telt.",
            "4 is correct: er zijn vier verklarende variabelen en de constante blijft buiten k.",
            "3 laat één verklarende variabele weg. Je hoeft van de gegeven vier voorspellers niets af te trekken."
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
          }
        },
        {
          "id": "meervoudig-3",
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
          }
        }
      ],
      "lab": "meervoudig",
      "exam": "exam2025:9:Vraag 19–20",
      "prerequisites": [
        "Les 10: de regressielijn en de betekenis van een coëfficiënt.",
        "Lessen 11–12: R², ANOVA en het verschil tussen een globale en een individuele toets."
      ],
      "formulaGuide": [
        {
          "title": "Meerdere verklarende variabelen en dummy’s invullen",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik de meervoudige vergelijking wanneer het model meer dan één verklarende variabele bevat. Een dummy is een codering met 0 of 1 voor een categorie.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Geschatte vergelijking</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Geschatte vergelijking\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>=</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mrow><mo>+</mo><mrow><msub><mi>b</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub></mrow><mo>+</mo><mo>…</mo><mo>+</mo><mrow><msub><mi>b</mi><mi>k</mi></msub><msub><mi>x</mi><mi>k</mi></msub></mrow></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>b₀ is de constante. Elke bⱼ hoort bij precies één xⱼ en beschrijft de verandering in voorspelde y bij één eenheid extra xⱼ, terwijl de overige opgenomen variabelen gelijk blijven. Een dummycoëfficiënt vergelijkt de categorie met waarde 1 met de referentiecategorie.</p><h3>Zo reken je stap voor stap</h3><ol><li>Schrijf de vergelijking met de ongestandaardiseerde B-coëfficiënten op.</li><li>Vertaal de beschreven persoon of situatie naar een waarde voor iedere x en een 0/1 voor iedere dummy.</li><li>Vermenigvuldig iedere coëfficiënt met de juiste waarde. Tel de producten en de constante op.</li><li>Vergelijk twee categorieën via hun verschil in voorspelling, met de andere kenmerken gelijk.</li><li>Controleer eenheid en afronding. Maak een relevant verschil met het bronantwoord zichtbaar.</li></ol><h3>Tentamen 17 maart 2025, vraag 19–20</h3><ol><li>Het verschil tussen WO en HBO is 1.010,210 − 644,888 = € 365,322. Dit is een vergelijking binnen hetzelfde model.</li><li>Voor de gegeven man: Vrouw = 0, HBO = 0, WO = 0, Leidinggevende = 1, Leeftijd = 50, Beoordeling = 10.</li><li>Voorspelling = 739,508 + 38,495×50 + 71,550×10 + 2.237,947.</li><li>Uitkomst = € 5.617,705. De officiële uitwerking vermeldt € 5.617; bij gewoon afronden op gehele euro’s uit de getoonde coëfficiënten is het € 5.618. De samenvatting laat dit bronverschil zichtbaar.</li></ol><p class=\"note\"><strong>Let op:</strong> De dummycodering bepaalt de betekenis van het teken. Bij meerdere dummies voor één categorische variabele staan niet zomaar alle dummies tegelijk op 1.</p>"
        },
        {
          "title": "R² corrigeren voor het aantal verklarende variabelen",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik adjusted R² wanneer je de verklaarde variatie wilt beoordelen met een correctie voor het aantal opgenomen verklarende variabelen. Het toevoegen van variabelen maakt gewone R² niet kleiner, maar kan adjusted R² wel verlagen.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Gecorrigeerde verklaarde variatie</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Gecorrigeerde verklaarde variatie\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><msup><mi>R</mi><mn>2</mn></msup><mtext>adj</mtext></msub><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><mrow><mi>k</mi><mrow><mo>(</mo><mn>1</mn><mo>−</mo><msup><mi>R</mi><mn>2</mn></msup><mo>)</mo></mrow></mrow></mrow><mrow><mi>n</mi><mo>−</mo><mi>k</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>R² is de gewone verklaarde variatie. k telt de verklarende variabelen, zonder constante; n is het aantal gebruikte waarnemingen. n − k − 1 zijn de residuele vrijheidsgraden.</p><h3>Zo reken je stap voor stap</h3><ol><li>Bereken 1 − R²: het niet-verklaarde aandeel.</li><li>Vermenigvuldig met k en deel door n − k − 1.</li><li>Trek deze correctie af van R².</li><li>Beoordeel de uitkomst naast inhoud, modelvoorwaarden en validatie.</li></ol><h3>Voorbeeld: een correctie voor twee verklarende variabelen</h3><ol><li>Stel n = 30, k = 2 en R² = 0,80.</li><li>Correctie = 2 × (1 − 0,80)/(30 − 2 − 1) = 0,4/27 ≈ 0,01481.</li><li>Adjusted R² ≈ 0,78519. De correctie ligt hier onder de gewone R² van 0,80.</li></ol><p class=\"note\"><strong>Let op:</strong> Een hoge adjusted R² vervangt geen controle van aannamen en maakt een individueel effect nog niet significant.</p>"
        },
        {
          "title": "B en gestandaardiseerde Beta vergelijken",
          "html": "<p><strong>B</strong> is de coëfficiënt in de eenheden van het gekozen model. <strong>Beta</strong> drukt de verandering uit in standaardafwijkingen: bij één standaardafwijking meer x verandert de voorspelde y met Beta standaardafwijkingen, bij gelijkblijvende andere verklarende variabelen. Het teken geeft de richting; vergelijk absolute waarden voor een vergelijking binnen hetzelfde model.</p><h3>Boekvoorbeeld GDP, tabel 10.24</h3><table><caption>B en Beta in hetzelfde logmodel</caption><thead><tr><th scope=\"col\">Variabele</th><th scope=\"col\">B</th><th scope=\"col\">Beta</th></tr></thead><tbody><tr><td>LN_MORT</td><td>−0,434</td><td>−0,385</td></tr><tr><td>LN_ELECT</td><td>0,353</td><td>0,592</td></tr></tbody></table><p>LN_ELECT heeft in dit model de grootste absolute Beta: 0,592 &gt; 0,385. Het verband is positief; dat van LN_MORT is negatief. Dit is geen ranglijst van causale invloed. Onderlinge samenhang en de keuze van het model blijven relevant. Voorspellen in de gekozen modeleenheden doe je met B, niet met Beta.</p>"
        }
      ],
      "completionVersion": "2026-09-20"
    },
    {
      "id": "transformaties",
      "title": "Kromme verbanden en logaritmen",
      "phase": "Verdieping",
      "intro": "Niet elk verband is recht op de oorspronkelijke schaal. Door x, y of beide te transformeren kun je soms toch een lineair model schatten.",
      "goals": [
        "ln en exp als omgekeerde bewerkingen begrijpen",
        "Logaritmisch, exponentieel en machtsmodel herkennen",
        "Terugrekenen naar de oorspronkelijke eenheid"
      ],
      "sections": [
        {
          "title": "Wat doet een logaritme?",
          "html": "<p>De <strong>natuurlijke logaritme</strong> ln gebruikt grondtal e ≈ 2,718. Je kunt ln zien als de vraag: tot welke macht moet ik e verheffen om dit getal te krijgen? ln(1) = 0, ln(e) = 1 en exp(ln(x)) = x. De functie exp(z) betekent eᶻ. Voor ln(x) moet x positief zijn.</p><p>Een logaritme drukt grote getallen relatief sterker samen. Dat kan een krom verband rechter maken. Kijk naar de puntenwolk en de modelvorm. Het onderwijsprogramma sluit de inverse functie uit; die behandelen we daarom niet.</p>"
        },
        {
          "title": "Drie modelvormen",
          "html": "<table><caption>Drie modelvormen</caption><tr><th scope=\"col\">Model</th><th scope=\"col\">Lineair geschatte vorm</th><th scope=\"col\">Terug in oorspronkelijke y</th></tr><tr><td>Logaritmisch</td><td><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>=</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><mi>ln</mi><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow></mrow></math></td><td>Geen terugtransformatie van y nodig</td></tr><tr><td>Exponentieel</td><td><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mrow><mi>ln</mi><mrow><mo>(</mo><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>)</mo></mrow></mrow><mo>=</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><mi>x</mi></mrow></mrow></math></td><td><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>=</mo><mrow><mi>exp</mi><mrow><mo>(</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><mi>x</mi></mrow><mo>)</mo></mrow></mrow></mrow></math></td></tr><tr><td>Machtsfunctie / Power</td><td><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mrow><mi>ln</mi><mrow><mo>(</mo><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>)</mo></mrow></mrow><mo>=</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><mi>ln</mi><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow></mrow></math></td><td><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>=</mo><mrow><mi>exp</mi><mrow><mo>(</mo><msub><mi>b</mi><mn>0</mn></msub><mo>)</mo></mrow></mrow><mo>×</mo><msup><mi>x</mi><msub><mi>b</mi><mn>1</mn></msub></msup></mrow></math></td></tr></table><p>Gebruik precies de variabelen waarvoor de coëfficiënten zijn geschat. ln(x) is niet hetzelfde als x. Als y is getransformeerd, moet je de uiteindelijke uitkomst terugtransformeren volgens het formuleblad.</p>"
        },
        {
          "title": "Wat verandert er aan de interpretatie?",
          "html": "<p>Bij een exponentieel model vermenigvuldigt de voorspelde y bij één extra x met exp(b₁). Bij een machtsmodel zorgt een verdubbeling van x voor een factor 2ᵇ¹ in y. Bij een logaritmisch model is de toename in y bij verdubbeling van x gelijk aan b₁ln(2).</p><p>In meervoudige regressie is er één afhankelijke variabele. Als je ln(y) gebruikt, moet die keuze bij alle opgenomen verklarende variabelen passen. Beoordeel de residuen opnieuw na een transformatie. Een grotere fitmaat alleen is niet voldoende om de modelkeuze te dragen.</p>"
        },
        {
          "title": "Een meervoudig logmodel terugtransformeren",
          "html": "<p>Bij meerdere verklarende variabelen transformeer je de volledige voorspelde logwaarde terug. De constante wordt een vermenigvuldigingsfactor; coëfficiënten bij ln(x) worden machten van x.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Meervoudig machtsmodel</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Meervoudig machtsmodel\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mrow><mi>ln</mi><mrow><mo>(</mo><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>)</mo></mrow></mrow><mo>=</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><msub><mi>b</mi><mn>1</mn></msub><mo>×</mo><mrow><mi>ln</mi><mrow><mo>(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>)</mo></mrow></mrow><mo>+</mo><msub><mi>b</mi><mn>2</mn></msub><mo>×</mo><mrow><mi>ln</mi><mrow><mo>(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>)</mo></mrow></mrow></mrow></math></div></div></div><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Terug naar de oorspronkelijke schaal</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Terug naar de oorspronkelijke schaal\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>=</mo><mrow><mi>exp</mi><mrow><mo>(</mo><msub><mi>b</mi><mn>0</mn></msub><mo>)</mo></mrow></mrow><mo>×</mo><msup><msub><mi>x</mi><mn>1</mn></msub><msub><mi>b</mi><mn>1</mn></msub></msup><mo>×</mo><msup><msub><mi>x</mi><mn>2</mn></msub><msub><mi>b</mi><mn>2</mn></msub></msup></mrow></math></div></div></div><h3>Boekvoorbeeld GDP, p. 321</h3><p>ln(ŷ) = 9,080 + 0,353 ln(elect) − 0,434 ln(mort) wordt ŷ = exp(9,080) × elect<sup>0,353</sup> × mort<sup>−0,434</sup>. De constante factor is ongeveer 8.778. De negatieve macht kun je ook als delen door mort<sup>0,434</sup> schrijven.</p><h3>Voorbeeld bij die boekvergelijking</h3><ol><li>Neem elect = 100 en mort = 10, beide positief.</li><li>De voorspelde logwaarde is 9,080 + 0,353 × ln(100) − 0,434 × ln(10) ≈ 9,70630.</li><li>Terugtransformeren met de onafgeronde logwaarde geeft ongeveer 16.420,78. De productvorm geeft dezelfde uitkomst.</li><li>Bij verdubbeling van elect en gelijkblijvende mort verandert de teruggetransformeerde voorspelling met factor 2^0,353 ≈ 1,277. Het gaat dus niet om 0,353 extra oorspronkelijke eenheden.</li></ol><p class=\"note\">Dit is de directe terugtransformatie van de geschatte logwaarde volgens de cursus. Noem dit niet zonder aanvullende aannames het rekenkundige gemiddelde op de oorspronkelijke schaal. Bij een interval op logschaal transformeer je de twee grenzen afzonderlijk terug.</p>"
        },
        {
          "title": "R² vergelijken na een transformatie",
          "html": "<p>R² is verklaarde variatie gedeeld door totale variatie in de gekozen afhankelijke variabele. Linear en Logarithmic gebruiken dezelfde y; Power en Exponential gebruiken ln(y). Een ranglijst van hun R²-waarden vergelijkt daardoor verschillende grootheden. Enkele tentamenmodellen maken deze vergelijking toch: bij de oorspronkelijke vraag staat nu welke keuze de sleutel verwacht en welk voorbehoud daarbij hoort.</p><p>Vergelijk de voorspelkwaliteit op dezelfde y-schaal en dezelfde waarnemingen, en controleer de residuen. Het hoogste getal in een tabel met verschillende y-transformaties bewijst op zichzelf niet dat het model op de oorspronkelijke schaal het beste voorspelt.</p>"
        },
        {
          "title": "Zelf oefenen met deze aanvulling",
          "html": "<p>Maak de eigen oefenvarianten bij dit onderwerp. Je krijgt na controle rekenstappen, uitleg per antwoord en de gebruikte bronnen.</p><p><a class=\"study-btn\" href=\"#tentamen/mc/transformaties\">Oefen Kromme verbanden en logaritmen</a></p>"
        }
      ],
      "example": {
        "title": "Voorbeeld: een machtsfunctie",
        "steps": [
          "ln(ŷ) = 1 + 0,5ln(x). Gevraagd: de voorspelling bij x = 16.",
          "ln(16) ≈ 2,772589. De voorspelde logwaarde is 1 + 0,5×2,772589 = 2,386294.",
          "Terugtransformeren: exp(2,386294) ≈ 10,8731.",
          "De korte route geeft hetzelfde: exp(1) × 16^0,5 = 2,71828 × 4 = 10,8731."
        ]
      },
      "pitfalls": [
        "Een voorspelde logwaarde is nog geen bedrag op de oorspronkelijke schaal.",
        "Gebruik ln, niet ongemerkt log met grondtal 10."
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
      "questions": [
        {
          "id": "transformaties-1",
          "prompt": "Welke transformatie hoort bij Power?",
          "options": [
            "Alleen ln(x)",
            "Alleen ln(y)",
            "Zowel ln(x) als ln(y)"
          ],
          "correct": 2,
          "explanation": "Een machtsmodel heeft de vorm y = a × xᵇ. Logaritmeren van beide kanten geeft ln(y) = ln(a) + b × ln(x). Het verband is dan lineair tussen ln(x) en ln(y). Daarom worden bij Power beide variabelen getransformeerd.",
          "steps": [
            "Een machtsmodel heeft de vorm y = a × xᵇ.",
            "Logaritmeren van beide kanten geeft ln(y) = ln(a) + b × ln(x).",
            "Het verband is dan lineair tussen ln(x) en ln(y). Daarom worden bij Power beide variabelen getransformeerd."
          ],
          "pattern": "Herken: De modelnaam “Power”. → Betekenis: Een machtsverband wordt lineair door beide variabelen te logaritmeren. → Aanpak: Koppel y = ax^b aan ln(y) = ln(a) + b ln(x). → Gevraagd antwoord: De passende transformatie van zowel y als x.",
          "trap": "Verwar Power niet met Logarithmic, waarbij alleen x is gelogaritmeerd.",
          "optionExplanations": [
            "Alleen ln(x) hoort bij het logaritmische model y = b₀ + b₁ln(x). Voor een machtsmodel wordt ook y gelogaritmeerd.",
            "Alleen ln(y) hoort bij het exponentiële model ln(y) = b₀ + b₁x. Een machtsmodel vraagt ook ln(x).",
            "Beide transformaties maken y = a × xᵇ lineair: ln(y) = ln(a) + b × ln(x)."
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
          }
        },
        {
          "id": "transformaties-2",
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
          }
        },
        {
          "id": "transformaties-3",
          "prompt": "Bij ln(ŷ) = b₀ + b₁x, welke factor hoort bij één extra x?",
          "options": [
            "b₁",
            "exp(b₁)",
            "ln(b₁)"
          ],
          "correct": 1,
          "explanation": "Op de logschaal verhoogt één extra eenheid x de voorspelde ln(y) met b₁. Terugtransformeren geeft exp(b₀ + b₁x + b₁) = exp(b₀ + b₁x) × exp(b₁). De voorspelling wordt dus vermenigvuldigd met exp(b₁). De procentuele verandering is 100 × [exp(b₁) − 1].",
          "steps": [
            "Op de logschaal verhoogt één extra eenheid x de voorspelde ln(y) met b₁.",
            "Terugtransformeren geeft exp(b₀ + b₁x + b₁) = exp(b₀ + b₁x) × exp(b₁).",
            "De voorspelling wordt dus vermenigvuldigd met exp(b₁). De procentuele verandering is 100 × [exp(b₁) − 1]."
          ],
          "pattern": "Herken: ln(ŷ) = b₀ + b₁x en “factor bij één extra x”. → Betekenis: Een vaste toename op de logschaal wordt een vermenigvuldigingsfactor op de oorspronkelijke schaal. → Aanpak: Neem exp van de verandering b₁ × 1 in de logvoorspelling. → Gevraagd antwoord: Een vermenigvuldigingsfactor, geen absoluut verschil van b₁ y-eenheden.",
          "trap": "De coëfficiënt b₁ zelf is niet de exacte vermenigvuldigingsfactor op de oorspronkelijke schaal.",
          "optionExplanations": [
            "b₁ is de toename van ln(y), niet de factor waarmee y wordt vermenigvuldigd.",
            "exp(b₁) is de juiste factor doordat exp(a + b₁) = exp(a) × exp(b₁).",
            "ln(b₁) transformeert de coëfficiënt de verkeerde kant op. Teruggaan vanaf logschaal vraagt exp."
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
          }
        }
      ],
      "lab": "transformatie",
      "exam": null,
      "prerequisites": [
        "Les 2: machten en wortels; een waarde zorgvuldig in een formule invullen.",
        "Les 10: regressiecoëfficiënten horen bij een specifieke keuze van x en y.",
        "De les legt ln en exp vanaf hun betekenis uit; ze hoeven nog niet paraat te zijn."
      ],
      "formulaGuide": [
        {
          "title": "Een logaritmisch model: alleen x wordt getransformeerd",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik deze vorm wanneer de geschatte vergelijking x via ln(x) opneemt, terwijl y in de oorspronkelijke eenheid blijft. Voor ln(x) moet x positief zijn.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Logaritmisch model</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Logaritmisch model\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>=</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><mi>ln</mi><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>ln is de natuurlijke logaritme, met grondtal e. b₀ en b₁ horen bij de regressie op ln(x). ŷ is in deze modelvorm al een voorspelling van y op de oorspronkelijke schaal.</p><h3>Zo reken je stap voor stap</h3><ol><li>Controleer dat x positief is en bereken ln(x).</li><li>Vermenigvuldig ln(x) met b₁ en tel b₀ op.</li><li>Stop op de y-schaal: hier hoeft geen exp op de einduitkomst te worden toegepast.</li><li>Bij verdubbeling van x neemt de voorspelde y toe met b₁ × ln(2), als deze modelvorm passend blijft.</li></ol><h3>Voorbeeld: dezelfde getallen op de logaritmische schaal van x</h3><ol><li>Stel ŷ = 1 + 0,5ln(x) en x = 16.</li><li>ln(16) ≈ 2,772589, dus ŷ = 1 + 0,5 × 2,772589 ≈ 2,386294.</li><li>Deze 2,386294 is al de voorspelde y, geen voorspelde ln(y).</li></ol><p class=\"note\"><strong>Let op:</strong> Kijk welke variabele is getransformeerd. Alleen het voorkomen van ln in de vergelijking betekent niet dat je de hele uitkomst moet terugtransformeren.</p>"
        },
        {
          "title": "Een exponentieel model: terug van ln(y) naar y",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik deze vorm wanneer ln(y) lineair wordt verklaard uit x. Het formuleblad brengt de geschatte logwaarde terug met exp.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Lineaire vorm</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Lineaire vorm\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mrow><mi>ln</mi><mrow><mo>(</mo><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>)</mo></mrow></mrow><mo>=</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><mi>x</mi></mrow></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Terug naar y</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Terug naar y\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>=</mo><mrow><mi>exp</mi><mrow><mo>(</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><mi>x</mi></mrow><mo>)</mo></mrow></mrow></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>exp(z) betekent e tot de macht z. De coëfficiënten b₀ en b₁ horen bij het model voor ln(y). Bij één extra eenheid x wordt de teruggetransformeerde voorspelling vermenigvuldigd met exp(b₁).</p><h3>Zo reken je stap voor stap</h3><ol><li>Bereken b₀ + b₁x. Dit is de voorspelde logwaarde.</li><li>Neem exp van de gehele uitkomst, dus exp(b₀ + b₁x).</li><li>Schrijf de voorspelling in de oorspronkelijke y-eenheid op.</li><li>Beoordeel de residuen van het gekozen model opnieuw; de transformatie garandeert geen goed model.</li></ol><h3>Voorbeeld: een voorspelde logwaarde terugrekenen</h3><ol><li>Stel ln(ŷ) = 1 + 0,5x en x = 2.</li><li>De voorspelde logwaarde is 1 + 0,5 × 2 = 2.</li><li>Terug volgens het formuleblad: ŷ = exp(2) ≈ 7,3891.</li></ol><p class=\"note\"><strong>Let op:</strong> De waarde 2 is hier niet de voorspelde y. Gebruik exp en niet de inverse van de gewone logaritme met grondtal 10.</p>"
        },
        {
          "title": "Een machtsmodel: zowel x als y heeft een logvorm",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik een machtsfunctie als het lineair geschatte model ln(y) verbindt met ln(x). De les en het formuleblad geven twee gelijkwaardige routes om terug te rekenen.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Lineaire vorm</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Lineaire vorm\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mrow><mi>ln</mi><mrow><mo>(</mo><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>)</mo></mrow></mrow><mo>=</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><mrow><msub><mi>b</mi><mn>1</mn></msub><mi>ln</mi><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Machtsfunctie</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Machtsfunctie\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>=</mo><mrow><mi>exp</mi><mrow><mo>(</mo><msub><mi>b</mi><mn>0</mn></msub><mo>)</mo></mrow></mrow><mo>×</mo><msup><mi>x</mi><msub><mi>b</mi><mn>1</mn></msub></msup></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>b₀ is de constante op de logschaal; exp(b₀) is de factor op de oorspronkelijke schaal. b₁ is de macht van x. De oorspronkelijke waarden x en y waarop je een logaritme toepast moeten positief zijn. De logwaarden zelf mogen nul of negatief zijn: ln(1) = 0 en ln(0,5) ≈ −0,693.</p><h3>Zo reken je stap voor stap</h3><ol><li>Bereken ln(x) en vul die in bij b₀ + b₁ln(x).</li><li>Neem exp van deze voorspelde logwaarde.</li><li>Controleer desgewenst met exp(b₀) × x tot de macht b₁.</li><li>Bij verdubbeling van x verandert de teruggetransformeerde voorspelling met factor 2 tot de macht b₁.</li></ol><h3>Voorbeeld: een machtsfunctie</h3><ol><li>ln(ŷ) = 1 + 0,5ln(x). Gevraagd: de voorspelling bij x = 16.</li><li>ln(16) ≈ 2,772589. De voorspelde logwaarde is 1 + 0,5×2,772589 = 2,386294.</li><li>Terugtransformeren: exp(2,386294) ≈ 10,8731.</li><li>De korte route geeft hetzelfde: exp(1) × 16^0,5 = 2,71828 × 4 = 10,8731.</li></ol><p class=\"note\"><strong>Let op:</strong> Verwar het machtsmodel niet met het exponentiële model. De inverse functie behoort volgens het onderwijsprogramma niet tot deze SRA-stof en wordt hier niet toegevoegd.</p>"
        },
        {
          "title": "Een meervoudig logmodel terugtransformeren",
          "html": "<p>Bij meerdere verklarende variabelen transformeer je de volledige voorspelde logwaarde terug. De constante wordt een vermenigvuldigingsfactor; coëfficiënten bij ln(x) worden machten van x.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Meervoudig machtsmodel</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Meervoudig machtsmodel\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mrow><mi>ln</mi><mrow><mo>(</mo><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>)</mo></mrow></mrow><mo>=</mo><msub><mi>b</mi><mn>0</mn></msub><mo>+</mo><msub><mi>b</mi><mn>1</mn></msub><mo>×</mo><mrow><mi>ln</mi><mrow><mo>(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>)</mo></mrow></mrow><mo>+</mo><msub><mi>b</mi><mn>2</mn></msub><mo>×</mo><mrow><mi>ln</mi><mrow><mo>(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>)</mo></mrow></mrow></mrow></math></div></div></div><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Terug naar de oorspronkelijke schaal</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Terug naar de oorspronkelijke schaal\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mo>=</mo><mrow><mi>exp</mi><mrow><mo>(</mo><msub><mi>b</mi><mn>0</mn></msub><mo>)</mo></mrow></mrow><mo>×</mo><msup><msub><mi>x</mi><mn>1</mn></msub><msub><mi>b</mi><mn>1</mn></msub></msup><mo>×</mo><msup><msub><mi>x</mi><mn>2</mn></msub><msub><mi>b</mi><mn>2</mn></msub></msup></mrow></math></div></div></div><h3>Boekvoorbeeld GDP, p. 321</h3><p>ln(ŷ) = 9,080 + 0,353 ln(elect) − 0,434 ln(mort) wordt ŷ = exp(9,080) × elect<sup>0,353</sup> × mort<sup>−0,434</sup>. De constante factor is ongeveer 8.778. De negatieve macht kun je ook als delen door mort<sup>0,434</sup> schrijven.</p><h3>Voorbeeld bij die boekvergelijking</h3><ol><li>Neem elect = 100 en mort = 10, beide positief.</li><li>De voorspelde logwaarde is 9,080 + 0,353 × ln(100) − 0,434 × ln(10) ≈ 9,70630.</li><li>Terugtransformeren met de onafgeronde logwaarde geeft ongeveer 16.420,78. De productvorm geeft dezelfde uitkomst.</li><li>Bij verdubbeling van elect en gelijkblijvende mort verandert de teruggetransformeerde voorspelling met factor 2^0,353 ≈ 1,277. Het gaat dus niet om 0,353 extra oorspronkelijke eenheden.</li></ol><p class=\"note\">Dit is de directe terugtransformatie van de geschatte logwaarde volgens de cursus. Noem dit niet zonder aanvullende aannames het rekenkundige gemiddelde op de oorspronkelijke schaal. Bij een interval op logschaal transformeer je de twee grenzen afzonderlijk terug.</p>"
        }
      ],
      "completionVersion": "2026-09-20"
    },
    {
      "id": "modelbouw",
      "title": "Modelkeuze en multicollineariteit",
      "phase": "Verdieping",
      "intro": "Meer variabelen betekent niet automatisch een beter bruikbaar model. Onderzoek hun extra bijdrage en of ze grotendeels dezelfde informatie bevatten.",
      "goals": [
        "Backward, forward en stepwise herkennen",
        "VIF en tolerance interpreteren",
        "Een extra variabele met een partiële F-toets beoordelen"
      ],
      "sections": [
        {
          "title": "Hoe komt een variabele in het model?",
          "html": "<p><strong>Enter</strong> neemt de opgegeven variabelen tegelijk op. <strong>Backward elimination</strong> begint met alle kandidaten en verwijdert stapsgewijs een onvoldoende bijdragende variabele. <strong>Forward</strong> begint klein en voegt toe. <strong>Stepwise</strong> controleert bij het toevoegen ook of eerdere variabelen weer kunnen vervallen.</p><p>Bij backward is de variabele met de grootste niet-significante p-waarde de eerste kandidaat. Daarna moet het model opnieuw worden geschat: coëfficiënten en p-waarden kunnen veranderen. De constante verwijder je niet zomaar als gewone kandidaat.</p><p class=\"note\"><strong>Bronverschil:</strong> de attentiepunten noemen bij backward een grens ½α voor p-waarden. Een reeds tweezijdige SPSS Sig. wordt bij een gewone tweezijdige toets met α vergeleken; α/2 is de staartkans voor een kritieke t-grens. Volg bij selectiemethoden de expliciet gegeven verwijderingsgrens. In het voorbeeld uit 2025 is p = 0,179 boven beide grenzen, zodat de keuze daar niet afhangt van dit verschil.</p>"
        },
        {
          "title": "Overlap tussen verklarende variabelen",
          "html": "<p><strong>Multicollineariteit</strong> betekent sterke onderlinge samenhang tussen verklarende variabelen. Het wordt moeilijker hun afzonderlijke bijdragen te onderscheiden. <strong>VIF</strong> en <strong>tolerance</strong> vind je in Coefficients.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Variance Inflation Factor</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Variance Inflation Factor\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>VIF</mi><mi>i</mi></msub><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msub><mi>Tolerance</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>1</mn><mo>−</mo><msup><msub><mi>R</mi><mi>i</mi></msub><mn>2</mn></msup></mrow></mfrac></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>R²ᵢ hoort bij de hulpregressie van xᵢ op de overige verklarende variabelen. Bij de F-formule gaat het om precies één extra variabele.</p></details><p>R²ᵢ komt hier uit een hulpregressie van xᵢ op de andere verklarende variabelen. Het is niet zomaar de R² van het hoofdmodel. De cursusvuistregel is VIF &gt; 10: een probleemsignaal. Onderzoek welke overlappende variabele kan worden weggelaten en schat daarna opnieuw. Voor interpretatie van individuele effecten is dit probleem bijzonder relevant.</p>"
        },
        {
          "title": "Een extra variabele toetsen",
          "html": "<p>Vergelijk geneste modellen: het uitgebreide model bevat alle variabelen uit het kleinere model plus de extra variabele. De modellen moeten dezelfde y en dezelfde waarnemingen gebruiken.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Eén extra variabele</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Eén extra variabele\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><msub><mi>SSR</mi><mtext>uitgebreid</mtext></msub><mo>−</mo><msub><mi>SSR</mi><mtext>klein</mtext></msub></mrow><mrow><msub><mi>MSE</mi><mtext>uitgebreid</mtext></msub></mrow></mfrac></mrow></math></div></div></div><p>Dit is formule 63 voor één extra variabele. De teller heeft dan één vrijheidsgraad; de noemer n − k_uitgebreid − 1. Test je een blok van meerdere extra variabelen, dan deel je het verschil in SSR ook door het aantal extra variabelen. Een hoge F wijst op een extra bijdrage.</p>"
        }
      ],
      "example": {
        "title": "Voorbeeld: overlap en extra bijdrage",
        "steps": [
          "Tolerance = 0,08. Dan VIF = 1/0,08 = 12,5: boven de cursusgrens van 10.",
          "Vergelijk vervolgens twee geldige geneste modellen met één verschil: SSR_klein = 800, SSR_uitgebreid = 850 en MSE_uitgebreid = 10.",
          "F = (850 − 800)/10 = 5.",
          "Vergelijk 5 met de toepasselijke F-grens. Alleen deze berekening geeft nog geen conclusie over significantie zonder α en vrijheidsgraden."
        ]
      },
      "pitfalls": [
        "Correlatie tussen x en y is iets anders dan multicollineariteit tussen de x-variabelen.",
        "Vergelijk geen modellen op verschillende datasets alsof ze genest zijn."
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
      "questions": [
        {
          "id": "modelbouw-1",
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
          }
        },
        {
          "id": "modelbouw-2",
          "prompt": "Welke methode begint met alle kandidaatvariabelen?",
          "options": [
            "Forward",
            "Backward",
            "Een enkelvoudige correlatie"
          ],
          "correct": 1,
          "explanation": "Backward-selectie start met alle kandidaatvariabelen in het model. Vervolgens wordt volgens het selectiecriterium stapsgewijs een variabele verwijderd. Na iedere verwijdering wordt het model opnieuw geschat voordat een volgende keuze wordt gemaakt.",
          "steps": [
            "Backward-selectie start met alle kandidaatvariabelen in het model.",
            "Vervolgens wordt volgens het selectiecriterium stapsgewijs een variabele verwijderd.",
            "Na iedere verwijdering wordt het model opnieuw geschat voordat een volgende keuze wordt gemaakt."
          ],
          "pattern": "Herken: “Begint met alle kandidaatvariabelen” bij een selectiemethode. → Betekenis: De startpositie en de richting van selectie onderscheiden de methoden. → Aanpak: Koppel starten met het volledige model en stapsgewijs verwijderen aan backward-selectie. → Gevraagd antwoord: De naam van de passende selectiemethode.",
          "trap": "Forward werkt juist vanuit een klein beginmodel en voegt variabelen toe.",
          "optionExplanations": [
            "Forward begint met een klein beginmodel en voegt geschikte voorspellers toe. Het start niet met alle kandidaten.",
            "Backward begint met het volledige kandidaatmodel en werkt door verwijdering naar een kleiner model.",
            "Een enkelvoudige correlatie bekijkt een verband tussen twee variabelen. Dat is geen selectieprocedure die alle kandidaten in een regressiemodel opneemt."
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
          }
        },
        {
          "id": "modelbouw-3",
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
          }
        }
      ],
      "lab": "modelbouw",
      "exam": null,
      "prerequisites": [
        "Les 15: meervoudige regressie en afzonderlijke bijdragen van verklarende variabelen.",
        "Lessen 11–12: SSR, MSE, vrijheidsgraden en significantietoetsen."
      ],
      "formulaGuide": [
        {
          "title": "Overlap tussen verklarende variabelen meten met VIF",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik VIF en tolerance om te beoordelen of verklarende variabelen onderling zoveel overlap vertonen dat hun afzonderlijke effecten moeilijk te onderscheiden zijn.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Variance Inflation Factor</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Variance Inflation Factor\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>VIF</mi><mi>i</mi></msub><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msub><mi>Tolerance</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>1</mn><mo>−</mo><msup><msub><mi>R</mi><mi>i</mi></msub><mn>2</mn></msup></mrow></mfrac></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>Tolerance komt uit de Coefficients-uitvoer. Rᵢ² hoort bij een hulpregressie waarin xᵢ wordt verklaard uit de overige x-variabelen. VIF is het omgekeerde van tolerance; dit is niet de R² van het hoofdmodel met y.</p><h3>Zo reken je stap voor stap</h3><ol><li>Lees tolerance of VIF per verklarende variabele af.</li><li>Als alleen tolerance bekend is, deel 1 door die tolerance.</li><li>Vergelijk met de cursusvuistregel: VIF groter dan 10 is een probleemsignaal.</li><li>Onderzoek inhoudelijke overlap en schat een aangepast model opnieuw als een variabele wordt weggelaten.</li></ol><h3>Voorbeeld: overlap en extra bijdrage</h3><ol><li>Tolerance = 0,08. Dan VIF = 1/0,08 = 12,5: boven de cursusgrens van 10.</li></ol><p class=\"note\"><strong>Let op:</strong> Correlatie van x met y is iets anders dan samenhang tussen de x-variabelen. Een automatisch selectieproces vervangt geen inhoudelijke keuze.</p>"
        },
        {
          "title": "De extra bijdrage van één toegevoegde variabele toetsen",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik deze F-verhouding om twee geneste modellen met precies één extra verklarende variabele te vergelijken. Beide modellen moeten dezelfde y en dezelfde waarnemingen gebruiken.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Eén extra variabele</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Eén extra variabele\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><msub><mi>SSR</mi><mtext>uitgebreid</mtext></msub><mo>−</mo><msub><mi>SSR</mi><mtext>klein</mtext></msub></mrow><mrow><msub><mi>MSE</mi><mtext>uitgebreid</mtext></msub></mrow></mfrac></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>SSR_klein is de verklaarde kwadratensom van het kleine model. SSR_uitgebreid en MSE_uitgebreid horen bij het model met de extra variabele. De teller heeft hier één vrijheidsgraad; de noemer n − k_uitgebreid − 1.</p><h3>Zo reken je stap voor stap</h3><ol><li>Controleer eerst dat het uitgebreide model alle variabelen van het kleine model bevat, plus precies één extra variabele.</li><li>Trek SSR_klein af van SSR_uitgebreid.</li><li>Deel het verschil door MSE_uitgebreid.</li><li>Vergelijk de uitkomst met de passende F-grens of beoordeel de relevante toetsuitvoer.</li><li>Bij selectie op SPSS Sig. gebruik je de expliciet gegeven selectiegrens. Een al tweezijdige p-waarde wordt niet zonder reden met α/2 vergeleken.</li></ol><h3>Voorbeeld: overlap en extra bijdrage</h3><ol><li>Vergelijk vervolgens twee geldige geneste modellen met één verschil: SSR_klein = 800, SSR_uitgebreid = 850 en MSE_uitgebreid = 10.</li><li>F = (850 − 800)/10 = 5.</li><li>Vergelijk 5 met de toepasselijke F-grens. Alleen deze berekening geeft nog geen conclusie over significantie zonder α en vrijheidsgraden.</li></ol><p class=\"note\"><strong>Let op:</strong> Deze formulevorm geldt voor één extra variabele. Voor meerdere extra variabelen moet de teller ook door hun aantal worden gedeeld. Vergelijk geen modellen op verschillende datasets alsof zij genest zijn.</p>"
        }
      ]
    },
    {
      "id": "validatie",
      "title": "Valideren en SPSS-uitvoer lezen",
      "phase": "Verdieping",
      "intro": "Een model kan de gebruikte gegevens goed beschrijven en toch slecht voorspellen op nieuwe gegevens. Validatie onderzoekt juist dat verschil.",
      "goals": [
        "Training en test uit elkaar houden",
        "MSPR berekenen en vergelijken met MSE",
        "De juiste SPSS-tabel voor een vraag kiezen"
      ],
      "sections": [
        {
          "title": "Beoordelen op ongebruikte gegevens",
          "html": "<p>Bij <strong>data splitting</strong> splits je de waarnemingen in een trainingsset en testset. Je schat en selecteert het model op de trainingsset. Met dat vaste model voorspel je de y-waarden in de testset. De werkelijke testuitkomsten gebruik je om de voorspelfouten te meten.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Voorspelfout op de testset</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Voorspelfout op de testset\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>MSPR</mi><mo>=</mo><mfrac><mrow><mo>∑</mo><msup><mrow><mo>(</mo><msub><mi>y</mi><mi>i</mi></msub><mo>−</mo><msub><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mi>i</mi></msub><mo>)</mo></mrow><mn>2</mn></msup></mrow><mrow><msub><mi>n</mi><mtext>test</mtext></msub></mrow></mfrac></mrow></math></div></div></div><details class=\"symbols\"><summary>Wat betekenen de symbolen?</summary><p>n_test = aantal testwaarnemingen; yᵢ = werkelijk gemeten testwaarde; ŷᵢ = voorspelling met het model uit de trainingsset.</p></details><p><strong>MSPR</strong> is Mean Squared Prediction Error: de gemiddelde gekwadrateerde voorspelfout op de testset. Deel hier door het aantal testwaarnemingen, niet door n − k − 1. Het formuleblad wisselt de lettervolgorde van de afkorting; de formule en betekenis blijven dezelfde.</p><p>Is MSPR ongeveer gelijk aan de MSE van de trainingsset, dan ondersteunt dit de bruikbaarheid op nieuwe data. Een veel grotere MSPR wijst op slechtere generalisatie. De attentiepunten noemen in dat geval MSPR als een beter uitgangspunt voor voorspellingsonzekerheid. Er staat geen universele numerieke grens voor “ongeveer gelijk”.</p>"
        },
        {
          "title": "Een leesroute door SPSS",
          "html": "<table><caption>Een leesroute door SPSS</caption><tr><th scope=\"col\">Tabel / afbeelding</th><th scope=\"col\">Wat haal je eruit?</th></tr><tr><td>Correlations</td><td>r, richting en samenhang; niet de regressievergelijking</td></tr><tr><td>Model Summary</td><td>R², adjusted R², Std. Error of the Estimate, eventueel Durbin-Watson</td></tr><tr><td>ANOVA</td><td>SS, df, MS, globale F en Sig.</td></tr><tr><td>Coefficients</td><td>B voor de vergelijking, Std. Error, t, Sig., Beta, tolerance en VIF</td></tr><tr><td>Residuals Statistics</td><td>Minimum, maximum, gemiddelde en spreiding van residuen, MD en CD</td></tr><tr><td>Tests of Normality</td><td>Shapiro-Wilk of Kolmogorov-Smirnov voor de residuen</td></tr></table><p>Lees ook de voetnoten: afhankelijke variabele, opgenomen verklarende variabelen, selectieprocedure en eventuele WLS-weging. Het aantal bruikbare waarnemingen kan na verwijderingen of ontbrekende waarden veranderd zijn. Uit Total df volgt n = df + 1.</p>"
        },
        {
          "title": "Geen conclusie zonder context",
          "html": "<p>Schrijf bij ieder getal wat het betekent voor de casus. “R² = 0,70” is onvolledig. “Het model verklaart 70% van de variatie in salaris binnen deze steekproef” geeft wel betekenis. Vermeld de gebruikte tabel en sluit af met wat je wel en niet uit de uitkomst kunt afleiden.</p>"
        },
        {
          "title": "Herkomst van validatie",
          "html": "<p>De MSPR-validatie staat in de aanvullende attentiepunten, PDF-pagina 8, en niet in het boek. Gebruik deze cursusaanvulling naast hoofdstuk 10.</p>"
        }
      ],
      "example": {
        "title": "Voorbeeld",
        "steps": [
          "Werkelijke testwaarden: 10, 14 en 20. Voorspellingen: 12, 13 en 17.",
          "Fouten y − ŷ: −2, 1 en 3. Kwadraten: 4, 1 en 9.",
          "MSPR = (4 + 1 + 9)/3 = 14/3 ≈ 4,6667.",
          "Als de trainings-MSE 1 is, zijn de fouten op de testset aanzienlijk groter. De training geeft dan een te gunstig beeld van de voorspelfout."
        ]
      },
      "pitfalls": [
        "Gebruik de testset niet voortdurend om het model opnieuw te kiezen en behandel haar daarna als onafhankelijk.",
        "Deel MSPR door n_test, niet door residual df van de training."
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
      "questions": [
        {
          "id": "validatie-1",
          "prompt": "Fouten op de testset: 2 en −4. Wat is MSPR?",
          "options": [
            "2",
            "10",
            "20"
          ],
          "correct": 1,
          "explanation": "MSPR is het gemiddelde van de gekwadrateerde voorspelfouten op de testset. Kwadrateer beide fouten: 2² = 4 en (−4)² = 16. Hun som is 20. De testset bevat twee waarnemingen, dus MSPR = 20/2 = 10.",
          "steps": [
            "MSPR is het gemiddelde van de gekwadrateerde voorspelfouten op de testset.",
            "Kwadrateer beide fouten: 2² = 4 en (−4)² = 16. Hun som is 20.",
            "De testset bevat twee waarnemingen, dus MSPR = 20/2 = 10."
          ],
          "pattern": "Herken: Voorspelfouten op een testset en de maat MSPR. → Betekenis: MSPR is de gemiddelde gekwadrateerde voorspelfout op nieuwe waarnemingen. → Aanpak: Kwadrateer alle testfouten, tel ze op en deel door het aantal testwaarnemingen. → Gevraagd antwoord: Een gemiddelde kwadratische fout; geen trainingsnoemer n − k − 1.",
          "trap": "Ook een negatieve fout krijgt een positief kwadraat; deel hier niet door residual df van het trainingsmodel.",
          "optionExplanations": [
            "2 is niet het gemiddelde van de gekwadrateerde fouten. Voor MSPR moeten 4 en 16 worden gemiddeld.",
            "10 = (4 + 16)/2 is het gemiddelde kwadraat van de twee testfouten.",
            "20 is de som van de kwadraten. De letter M staat voor Mean, dus delen door twee ontbreekt nog."
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
          }
        },
        {
          "id": "validatie-2",
          "prompt": "Waar staan de coëfficiënten voor de vergelijking?",
          "options": [
            "ANOVA → SS",
            "Coefficients → Unstandardized B",
            "Model Summary → R"
          ],
          "correct": 1,
          "explanation": "Een regressievergelijking in de oorspronkelijke eenheden gebruikt de ongestandaardiseerde coëfficiënten. Lees daarvoor de constante en hellingen uit Coefficients → Unstandardized Coefficients → B. ANOVA beschrijft de variatieverdeling; Model Summary beschrijft modelkwaliteit. Die tabellen leveren niet de benodigde B-coëfficiënten.",
          "steps": [
            "Een regressievergelijking in de oorspronkelijke eenheden gebruikt de ongestandaardiseerde coëfficiënten.",
            "Lees daarvoor de constante en hellingen uit Coefficients → Unstandardized Coefficients → B.",
            "ANOVA beschrijft de variatieverdeling; Model Summary beschrijft modelkwaliteit. Die tabellen leveren niet de benodigde B-coëfficiënten."
          ],
          "pattern": "Herken: “Coëfficiënten voor de vergelijking” in de regressie-uitvoer. → Betekenis: Een vergelijking in oorspronkelijke modeleenheden gebruikt ongestandaardiseerde coëfficiënten. → Aanpak: Zoek de kolom B in Coefficients, inclusief de constante. → Gevraagd antwoord: De juiste tabel en kolom, geen Beta-kolom of ANOVA-waarde.",
          "trap": "De gestandaardiseerde Beta hoort niet in een vergelijking met de oorspronkelijke eenheden.",
          "optionExplanations": [
            "SS in ANOVA zijn kwadratensommen van variatie. Zij zijn geen constante of hellingscoëfficiënten.",
            "Unstandardized B bevat de constante en hellingen die je in de vergelijking met de oorspronkelijke variabelen invult.",
            "R in Model Summary beschrijft de samenhang voor het model. Eén R geeft niet de afzonderlijke regressiecoëfficiënten."
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
          }
        },
        {
          "id": "validatie-3",
          "prompt": "De ANOVA-tabel heeft Total df = 49. Hoe groot is n?",
          "options": [
            "48",
            "49",
            "50"
          ],
          "correct": 2,
          "explanation": "In de ANOVA-tabel gelden voor de Total-rij n − 1 vrijheidsgraden. Als Total df = 49, dan is n − 1 = 49. Tel één op aan beide kanten: n = 50. Controle: 50 − 1 = 49.",
          "steps": [
            "In de ANOVA-tabel gelden voor de Total-rij n − 1 vrijheidsgraden.",
            "Als Total df = 49, dan is n − 1 = 49.",
            "Tel één op aan beide kanten: n = 50. Controle: 50 − 1 = 49."
          ],
          "pattern": "Herken: “Total df” in de ANOVA-tabel en gevraagd n. → Betekenis: De totale kwadratensom gebruikt n − 1 vrijheidsgraden. → Aanpak: Keer Total df = n − 1 om tot n = Total df + 1. → Gevraagd antwoord: Het aantal gebruikte waarnemingen, zonder aftrek voor k.",
          "trap": "Gebruik voor deze rij niet de formule n − k − 1; die hoort bij Residual.",
          "optionExplanations": [
            "48 trekt nog één af van de total df. Om n uit n − 1 te vinden moet je juist één optellen.",
            "49 is het gegeven aantal vrijheidsgraden, niet het aantal waarnemingen.",
            "50 klopt, omdat Total df = 50 − 1 = 49."
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
          }
        }
      ],
      "lab": "validatie",
      "exam": null,
      "prerequisites": [
        "Lessen 10 en 14: voorspellingen maken en fouten y − ŷ berekenen.",
        "Lessen 11 en 17: trainings-MSE en het kiezen van een regressiemodel."
      ],
      "formulaGuide": [
        {
          "title": "De voorspelfout op ongebruikte testgegevens meten",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Gebruik MSPR nadat het model met trainingsgegevens is geschat. Je beoordeelt hoe goed dat vaste model voorspelt op andere, niet voor de schatting gebruikte waarnemingen.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Voorspelfout op de testset</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Voorspelfout op de testset\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>MSPR</mi><mo>=</mo><mfrac><mrow><mo>∑</mo><msup><mrow><mo>(</mo><msub><mi>y</mi><mi>i</mi></msub><mo>−</mo><msub><mover accent=\"true\"><mi>y</mi><mo>^</mo></mover><mi>i</mi></msub><mo>)</mo></mrow><mn>2</mn></msup></mrow><mrow><msub><mi>n</mi><mtext>test</mtext></msub></mrow></mfrac></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>n_test = aantal testwaarnemingen; yᵢ = werkelijk gemeten testwaarde; ŷᵢ = voorspelling met het model uit de trainingsset. De fout is werkelijk y minus voorspeld ŷ. Door te kwadrateren heffen positieve en negatieve fouten elkaar niet op. MSPR heeft de eenheid van y².</p><h3>Zo reken je stap voor stap</h3><ol><li>Houd het geschatte trainingsmodel vast en voorspel voor iedere testwaarneming de y.</li><li>Bereken per testwaarneming y − ŷ en kwadrateer die fout.</li><li>Tel de gekwadrateerde fouten op en deel door n_test.</li><li>Vergelijk MSPR met de trainings-MSE als aanwijzing voor hoe goed de trainingsprestatie overdraagbaar is.</li><li>Lees SPSS steeds per functie: Coefficients voor B en individuele toetsen, ANOVA voor MSE en globale F, Model Summary voor R² en adjusted R².</li></ol><h3>Voorbeeld</h3><ol><li>Werkelijke testwaarden: 10, 14 en 20. Voorspellingen: 12, 13 en 17.</li><li>Fouten y − ŷ: −2, 1 en 3. Kwadraten: 4, 1 en 9.</li><li>MSPR = (4 + 1 + 9)/3 = 14/3 ≈ 4,6667.</li><li>Als de trainings-MSE 1 is, zijn de fouten op de testset aanzienlijk groter. De training geeft dan een te gunstig beeld van de voorspelfout.</li></ol><p class=\"note\"><strong>Let op:</strong> De noemer is n_test, niet de residuele vrijheidsgraad van de training. Blijf je het model aanpassen op dezelfde testset, dan is die set niet meer een onafhankelijke eindcontrole.</p>"
        }
      ]
    },
    {
      "id": "tentamen",
      "title": "Van begrip naar een volledig tentamenantwoord",
      "phase": "Tentamen",
      "intro": "Nu verbind je de losse onderdelen. Begin iedere vraag met de gevraagde uitspraak en kies daarna pas een formule of tabel.",
      "goals": [
        "Een schattings- of regressievraag zelfstandig aanpakken",
        "Een volledige redenering opschrijven",
        "Gericht herhalen op basis van fouten"
      ],
      "sections": [
        {
          "title": "Wat het onderwijsprogramma vraagt",
          "html": "<p>Het onderwijsprogramma najaar 2026 noemt een tentamen van drie uur: 35 punten voor schattingsmethoden en 65 punten voor regressie. De voorgeschreven kern is hoofdstuk 8, 9 en 10, met SET als voorkennis. De samenvatting volgt die inhoudelijke verdeling. Oudere tentamens kunnen een andere indeling in opgaven hebben.</p><p>Werk eerst de lessen en begripchecks door. Maak daarna echte opgaven zonder de uitwerking te openen. Een goede score op meerkeuzechecks is een aanwijzing voor begrip, maar vervangt het zelfstandig uitwerken van een volledig tentamen niet.</p>"
        },
        {
          "title": "Een waarde schatten: werkvolgorde",
          "html": "<ol><li>Gevraagd: gemiddelde, totaal, fout, interval of steekproefomvang?</li><li>Schrijf N, n, B, de benodigde steekproeftotalen, spreidingen en betrouwbaarheid op.</li><li>Kies de schatter en motiveer de keuze; controleer de toepassingsvoorwaarden.</li><li>Bereken puntschatting en de bijbehorende standaardfout.</li><li>Kies t en df; maak het interval of bereken de omvang.</li><li>Verwerk topstratum, afronding en de betekenis in euro’s.</li></ol>"
        },
        {
          "title": "Een regressieonderzoek beoordelen: werkvolgorde",
          "html": "<ol><li>Identificeer y, x-variabelen, eenheden en type gegevens.</li><li>Lees de juiste vergelijking uit B; verwerk dummy’s of transformaties.</li><li>Beoordeel fit met R² of adjusted R² en vul ANOVA aan als gevraagd.</li><li>Formuleer H₀ en H₁; voer de gevraagde toets met α, df en richting uit.</li><li>Onderzoek de relevante diagnoses met bron, conclusie en remedie.</li><li>Voorspel pas met een passend model en het juiste interval.</li></ol>"
        },
        {
          "title": "Oefen in twee rondes",
          "html": "<p><strong>Leerronde:</strong> gebruik het formuleblad en bekijk pas na je eigen poging de tussenstappen. Noteer of een fout zat in begrip, formulekeuze, rekenen of formuleren.</p><p><strong>Tentamenronde:</strong> gebruik de oorspronkelijke opgaven en de toegestane tabellen/formules uit je materiaal. Een praktische tijdsverdeling naar punten is circa 63 minuten voor 35 punten en 117 minuten voor 65 punten; houd binnen die tijd ruimte voor controle. Dit is een oefenstrategie, geen officiële tijdsregel.</p><p>Je kunt via “Tentamens oefenen” op de hoofdpagina de bronopgaven openen en je eigen aanpak per casus bewaren. Vergelijk pas daarna met de uitwerking.</p>"
        }
      ],
      "example": {
        "title": "Voorbeeld van een volledig toetsantwoord",
        "steps": [
          "Vraag: toon bij α = 0,05 een positief lineair verband tussen productie en kosten aan.",
          "H₀: β₁ ≤ 0; H₁: β₁ > 0. β₁ is de helling in het populatiemodel.",
          "Stel gegeven: t = 3,10 en de juiste eenzijdige kritieke t = 1,70.",
          "3,10 > 1,70: de toetsingsgrootheid ligt in het kritieke gebied. H₀ wordt verworpen.",
          "Er is een significant positief lineair verband tussen productie en kosten. Het α-risico is relevant. Dit toont op zichzelf geen causaliteit aan."
        ]
      },
      "pitfalls": [
        "Alleen een getal opschrijven laat formulekeuze en interpretatie onzichtbaar.",
        "Een formuleblad is een hulpmiddel; het bepaalt niet welke vraag je moet beantwoorden."
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
      "questions": [
        {
          "id": "tentamen-1",
          "prompt": "Wat doe je als eerste bij een nieuwe vraag?",
          "options": [
            "Een bekende formule invullen",
            "Vaststellen welke uitspraak wordt gevraagd",
            "De grootste tabel kiezen"
          ],
          "correct": 1,
          "explanation": "Lees eerst wat je moet opleveren: bijvoorbeeld een totaal, interval, toetsbeslissing of diagnose. Noteer daarna welke gegevens en methode nodig zijn om precies die uitspraak te onderbouwen. Een formule kiezen vóórdat het doel duidelijk is, vergroot de kans op een juiste berekening van de verkeerde grootheid.",
          "steps": [
            "Lees eerst wat je moet opleveren: bijvoorbeeld een totaal, interval, toetsbeslissing of diagnose.",
            "Noteer daarna welke gegevens en methode nodig zijn om precies die uitspraak te onderbouwen.",
            "Een formule kiezen vóórdat het doel duidelijk is, vergroot de kans op een juiste berekening van de verkeerde grootheid."
          ],
          "pattern": "Herken: Een nieuwe vraag kan een waarde, methode, toets of gemotiveerde conclusie verlangen. → Betekenis: Het gevraagde eindresultaat bepaalt welke gegevens en bewerkingen relevant zijn. → Aanpak: Markeer eerst het vraagwerkwoord en de grootheid of beslissing die je moet opleveren. → Gevraagd antwoord: Een passende eerste aanpakstap voordat je een formule of tabel kiest.",
          "trap": "De opvallendste tabel of bekendste formule hoeft niet bij de vraag te horen.",
          "optionExplanations": [
            "Een bekende formule kan een andere grootheid berekenen dan gevraagd. Bepaal eerst het doel van de vraag.",
            "Dit is de juiste start: de verlangde uitspraak bepaalt de methode, benodigde gegevens en vorm van de conclusie.",
            "De omvang van een tabel zegt niet of zij relevant is. Selecteer de tabel op basis van de gevraagde analyse."
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
          }
        },
        {
          "id": "tentamen-2",
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
          }
        },
        {
          "id": "tentamen-3",
          "prompt": "Je hebt alle checks goed. Ben je daarmee klaar?",
          "options": [
            "Ja, een echt tentamen is overbodig",
            "Nee, werk ook volledige open tentamenvragen zelfstandig uit",
            "Alleen als je alle formules uit je hoofd kent"
          ],
          "correct": 1,
          "explanation": "Begripchecks laten zien of je afzonderlijke begrippen en stappen herkent. Open tentamenvragen vragen daarnaast om zelf gegevens te selecteren, berekeningen te combineren en een volledige conclusie te formuleren. Werk daarom ook volledige open opgaven zelfstandig uit en vergelijk daarna je redenering met de uitwerking.",
          "steps": [
            "Begripchecks laten zien of je afzonderlijke begrippen en stappen herkent.",
            "Open tentamenvragen vragen daarnaast om zelf gegevens te selecteren, berekeningen te combineren en een volledige conclusie te formuleren.",
            "Werk daarom ook volledige open opgaven zelfstandig uit en vergelijk daarna je redenering met de uitwerking."
          ],
          "pattern": "Herken: Alle korte checks zijn goed, maar gevraagd wordt of de voorbereiding klaar is. → Betekenis: Herkenning in korte vragen is iets anders dan zelfstandig een volledige open opgave uitwerken. → Aanpak: Beoordeel ook methodekeuze, tussenstappen en conclusie in complete tentamenopgaven. → Gevraagd antwoord: Een vervolgstap om toepassen te oefenen, geen garantie van beheersing door alleen check-scores.",
          "trap": "Een hoge score op korte checks is geen vervanging voor oefenen met samenhang en eigen formulering.",
          "optionExplanations": [
            "Korte checks dekken niet alle vaardigheden van een open tentamen. Zelf een complete redenering opbouwen blijft nodig.",
            "Zelfstandig open vragen uitwerken oefent de samenhang, methodekeuze en verantwoording die niet volledig in meerkeuzechecks zitten.",
            "Formules kennen is slechts een onderdeel. Je moet ze ook passend kiezen, correct toepassen en de uitkomst in de casus uitleggen."
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
          }
        }
      ],
      "lab": "keuzeroute",
      "exam": null,
      "prerequisites": [
        "Lessen 1–18: de schatters, regressie, toetsen, diagnoses en voorspellingen.",
        "Het formuleblad en de tabellenbundel kunnen gebruiken; een tabelwaarde is geen vervanging voor methodekeuze."
      ],
      "formulaGuide": [
        {
          "title": "Een formule kiezen en een volledig antwoord opbouwen",
          "html": "<h3>Wanneer gebruik je dit?</h3><p>Dit onderwerp introduceert geen nieuwe formule. Je kiest uit de eerder behandelde relaties op basis van wat de opgave vraagt: een schatting, toets, diagnose of voorspelling.</p><div class=\"formula formula-typeset\"><div class=\"formula-row\"><span class=\"formula-label\">Bij een interval</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Bij een interval\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mtext>Interval</mtext><mo>=</mo><mtext>puntschatting</mtext><mo>±</mo><mi>E</mi></mrow></math></div></div><div class=\"formula-row\"><span class=\"formula-label\">Bij een coëfficiënt toetsen</span><div class=\"math-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Formule: Bij een coëfficiënt toetsen\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>t</mi><mo>=</mo><mfrac><mrow><msub><mi>b</mi><mi>j</mi></msub><mo>−</mo><msub><mi>β</mi><mrow><mi>j</mi><mo>,</mo><mn>0</mn></mrow></msub></mrow><mrow><msub><mi>s</mi><msub><mi>b</mi><mi>j</mi></msub></msub></mrow></mfrac></mrow></math></div></div></div><h3>Wat betekenen de symbolen?</h3><p>N, n, B en de spreidingen horen bij een schattingsprobleem. Bij regressie leg je y, de x-variabelen, coëfficiënten en eenheden vast. Bij een toets zijn de berekende toetsingsgrootheid en de kritieke tabelgrens verschillende zaken.</p><h3>Zo reken je stap voor stap</h3><ol><li>Onderstreep de gevraagde uitkomst: welk bedrag, welke hypothese of welke voorspelling moet je geven?</li><li>Noteer de relevante gegevens met betekenis en eenheid. Scheid populatietotalen van steekproefgegevens.</li><li>Noem de methode en controleer de toepassingsvoorwaarden.</li><li>Schrijf de formule op, vul de getallen in en bewaar voldoende tussenliggende decimalen.</li><li>Geef de einduitkomst met de gevraagde afronding én een conclusie in de taal van de casus.</li></ol><h3>Voorbeeld van een volledig toetsantwoord</h3><ol><li>Vraag: toon bij α = 0,05 een positief lineair verband tussen productie en kosten aan.</li><li>H₀: β₁ ≤ 0; H₁: β₁ &gt; 0. β₁ is de helling in het populatiemodel.</li><li>Stel gegeven: t = 3,10 en de juiste eenzijdige kritieke t = 1,70.</li><li>3,10 &gt; 1,70: de toetsingsgrootheid ligt in het kritieke gebied. H₀ wordt verworpen.</li><li>Er is een significant positief lineair verband tussen productie en kosten. Het α-risico is relevant. Dit toont op zichzelf geen causaliteit aan.</li></ol><p class=\"note\"><strong>Let op:</strong> Een los getal laat de methode en interpretatie onzichtbaar. Gebruik de originele open opgaven om zelfstandig uitwerken te oefenen; goede meerkeuze-antwoorden vormen geen volledig tentamenantwoord.</p>"
        }
      ]
    }
  ],
  "sources": {
    "programma": {
      "title": "Onderwijsprogramma SRA NJ26",
      "file": "onderwijsprogramma.pdf",
      "original": "Onderwijsmateriaal/Onderwijsprogramma/Onderwijsprogramma SRA NJ26.pdf"
    },
    "formules": {
      "title": "Formuleblad SRA, augustus 2024",
      "file": "formuleblad.pdf",
      "original": "Onderwijsmateriaal/Formuleblad Sampling  Regression Analysis versie 20240823.pdf"
    },
    "slides": {
      "title": "Slides SRA najaar 2026",
      "file": "slides.pdf",
      "original": "Onderwijsmateriaal/Slides SRA najaar2026.pdf"
    },
    "attentie": {
      "title": "Attentiepunten regressieanalyse NJ26",
      "file": "attentiepunten.pdf",
      "original": "Onderwijsmateriaal/Attentiepunten regressieanalyse SRA NJ26.pdf"
    },
    "uitwerkingen": {
      "title": "Uitwerkingenbundel SRA NJ26",
      "file": "uitwerkingenbundel.pdf",
      "original": "Onderwijsmateriaal/Opgaven en uitwerkingenbundel/Uitwerkingenbundel SRA NJ26.pdf"
    },
    "opgaven": {
      "title": "Opgavenbundel SRA NJ26",
      "file": "opgavenbundel.pdf",
      "original": "Onderwijsmateriaal/Opgaven en uitwerkingenbundel/Opgavenbundel SRA NJ26.pdf"
    },
    "tabellen": {
      "title": "Tabellenbundel",
      "file": "tabellenbundel.pdf",
      "original": "Onderwijsmateriaal/Tabellenbundel.pdf"
    },
    "spss": {
      "title": "SPSS-opgaven: uitwerkingen 2026",
      "file": "spss-uitwerkingen.pdf",
      "original": "Onderwijsmateriaal/SPSS opgaven en uitwerkingen/SRA SPSS Opgaven - Uitwerkingen 2026.pdf"
    },
    "exam2025": {
      "title": "Tentamen en uitwerkingen 17 maart 2025",
      "file": "tentamen-2025-03.pdf",
      "original": "Tentamenopgaven & Uitwerkingen/20250317 SRA _Opgaven+uitwerkingen.pdf"
    },
    "exam2024": {
      "title": "Tentamenuitwerkingen 28 oktober 2024",
      "file": "uitwerking-2024-10.pdf",
      "original": "Tentamenopgaven & Uitwerkingen/20241028_SRA_uitwerkingen.pdf"
    },
    "boek-basis": {
      "title": "Statistiek voor audit en controlling, boek p. 92–99",
      "file": "boek-basis.pdf",
      "original": "sra-interactief/source-excerpts/boek-basis.pdf"
    },
    "boek-h8a": {
      "title": "Statistiek voor audit en controlling, boek p. 201–210",
      "file": "boek-h8a.pdf",
      "original": "sra-interactief/source-excerpts/boek-h8a.pdf"
    },
    "boek-h8b": {
      "title": "Statistiek voor audit en controlling, boek p. 211–220",
      "file": "boek-h8b.pdf",
      "original": "sra-interactief/source-excerpts/boek-h8b.pdf"
    },
    "boek-h8c": {
      "title": "Statistiek voor audit en controlling, boek p. 221–232",
      "file": "boek-h8c.pdf",
      "original": "sra-interactief/source-excerpts/boek-h8c.pdf"
    },
    "boek-h9a": {
      "title": "Statistiek voor audit en controlling, boek p. 233–248",
      "file": "boek-h9a.pdf",
      "original": "sra-interactief/source-excerpts/boek-h9a.pdf"
    },
    "boek-h9b": {
      "title": "Statistiek voor audit en controlling, boek p. 249–259",
      "file": "boek-h9b.pdf",
      "original": "sra-interactief/source-excerpts/boek-h9b.pdf"
    },
    "boek-h9c": {
      "title": "Statistiek voor audit en controlling, boek p. 260–272",
      "file": "boek-h9c.pdf",
      "original": "sra-interactief/source-excerpts/boek-h9c.pdf"
    },
    "boek-h9d": {
      "title": "Statistiek voor audit en controlling, boek p. 273–286",
      "file": "boek-h9d.pdf",
      "original": "sra-interactief/source-excerpts/boek-h9d.pdf"
    },
    "boek-h10a": {
      "title": "Statistiek voor audit en controlling, boek p. 287–300",
      "file": "boek-h10a.pdf",
      "original": "sra-interactief/source-excerpts/boek-h10a.pdf"
    },
    "boek-h10b": {
      "title": "Statistiek voor audit en controlling, boek p. 303–313",
      "file": "boek-h10b.pdf",
      "original": "sra-interactief/source-excerpts/boek-h10b.pdf"
    },
    "boek-h10c": {
      "title": "Statistiek voor audit en controlling, boek p. 314–323",
      "file": "boek-h10c.pdf",
      "original": "sra-interactief/source-excerpts/boek-h10c.pdf"
    },
    "set-basis": {
      "title": "SET-attentiepunten: noodzakelijke basis voor SRA (oorspronkelijke PDF p. 3–7)",
      "file": "set-basis.pdf",
      "original": "sra-interactief/source-excerpts/set-basis.pdf"
    }
  },
  "glossary": [
    [
      "Populatie",
      "De volledige verzameling waarover je een uitspraak wilt doen. Omvang N.",
      "beginnen"
    ],
    [
      "Steekproef",
      "De onderzochte selectie uit de populatie. Omvang n.",
      "beginnen"
    ],
    [
      "Parameter",
      "Een kenmerk van de populatie, zoals μ of β₁.",
      "beginnen"
    ],
    [
      "Puntschatting",
      "Eén getal dat een onbekende populatiewaarde schat.",
      "onzekerheid"
    ],
    [
      "Variantie",
      "Gemiddelde gekwadrateerde spreiding; voor de steekproef deel je door n − 1.",
      "rekenen"
    ],
    [
      "Standaardafwijking",
      "De wortel uit de variantie, in de oorspronkelijke eenheid.",
      "rekenen"
    ],
    [
      "Standaardfout",
      "Spreiding van een schatter over mogelijke steekproeven.",
      "rekenen"
    ],
    [
      "Betrouwbaarheid",
      "1 − α; de gekozen dekking van de intervalmethode bij herhaalde steekproeven.",
      "onzekerheid"
    ],
    [
      "Eindigheidscorrectie",
      "Factor √((N−n)/(N−1)) bij steekproeven zonder teruglegging uit een eindige populatie.",
      "mpu"
    ],
    [
      "Goedratio",
      "Verhouding Σw/Σb in de quotiëntschatter.",
      "quotient"
    ],
    [
      "Stratum",
      "Een deelpopulatie; meervoud: strata.",
      "stratificatie"
    ],
    [
      "Allocatie",
      "Verdeling van de steekproef over strata.",
      "stratificatie"
    ],
    [
      "Residu",
      "Waargenomen y minus de door de regressielijn voorspelde ŷ.",
      "regressielijn"
    ],
    [
      "Richtingscoëfficiënt",
      "Verandering van de voorspelde y bij één extra eenheid x.",
      "regressielijn"
    ],
    [
      "Correlatie",
      "Sterkte en richting van de lineaire samenhang. Geen bewijs voor causaliteit.",
      "regressielijn"
    ],
    [
      "R²",
      "Het aandeel van de totale variatie in y dat het model verklaart.",
      "anova"
    ],
    [
      "ANOVA",
      "Variantieanalyse: opsplitsing van totale, verklaarde en resterende variatie.",
      "anova"
    ],
    [
      "Vrijheidsgraden",
      "Het aantal vrij variërende componenten; bij residuen in regressie n−k−1.",
      "anova"
    ],
    [
      "p-waarde",
      "Kans op minstens zo extreme toetsuitkomsten onder H₀.",
      "toetsen"
    ],
    [
      "α-risico",
      "Risico een ware nulhypothese te verwerpen.",
      "toetsen"
    ],
    [
      "β-risico",
      "Risico een onware nulhypothese niet te verwerpen.",
      "toetsen"
    ],
    [
      "Homoscedasticiteit",
      "Constante spreiding van de storingsterm.",
      "diagnostiek"
    ],
    [
      "Autocorrelatie",
      "Samenhang tussen storingen op verschillende tijdstippen.",
      "diagnostiek"
    ],
    [
      "Dummy",
      "Een variabele met waarde 0 of 1 die een categorie vertegenwoordigt.",
      "meervoudig"
    ],
    [
      "Multicollineariteit",
      "Sterke onderlinge samenhang tussen verklarende variabelen.",
      "modelbouw"
    ],
    [
      "VIF",
      "Maat voor variantie-inflatie door samenhang tussen verklarende variabelen; 1/tolerance.",
      "modelbouw"
    ],
    [
      "Overfitting",
      "Een model past ook toevalligheden uit de trainingsdata en werkt daardoor minder goed op nieuwe data.",
      "meervoudig"
    ],
    [
      "MSPR",
      "Gemiddelde gekwadrateerde voorspelfout op de testset.",
      "validatie"
    ]
  ],
  "examCases": [
    {
      "id": "e1",
      "title": "Voorraad schatten met verschillen",
      "source": "exam2025",
      "page": 1,
      "solutionPage": 11,
      "questions": "Vraag 1–3",
      "lessons": [
        "verschil",
        "onzekerheid"
      ],
      "task": "Werk de keuze, toepassingsvoorwaarde en het volledige 95%-interval voor Elektroconsum uit. Rond pas op het einde naar buiten af.",
      "rubric": [
        "De verschillen zijn redelijk constant / niet afhankelijk van de boekwaarde.",
        "43 fouten voldoet aan de cursusvoorwaarde van minstens 30.",
        "ē = 47; Ŵ = 1.804.220; s_e = 13,6406405; s_V = 3.883,51229.",
        "t = 1,975 en het naar buiten afgeronde interval is [1.790.000; 1.820.000]."
      ]
    },
    {
      "id": "e2",
      "title": "Strata en een integraal topstratum",
      "source": "exam2025",
      "page": 2,
      "solutionPage": 12,
      "questions": "Vraag 4–6",
      "lessons": [
        "stratificatie"
      ],
      "task": "Bereken de allocatie, de totale werkelijke waarde en het 90%-interval voor Snel-in-huis. Houd de geplande en gerealiseerde steekproefaantallen uit elkaar.",
      "rubric": [
        "Evenredige allocatie: 43, 31, 29, 27.",
        "Gebruik voor evaluatie de gegeven 45, 32, 30, 30.",
        "Puntschatting inclusief topstratum = 171.083.",
        "s_tot = 3.394,7827; t = 1,660; afgerond [165.400; 176.800]."
      ]
    },
    {
      "id": "e3",
      "title": "Regressieschatter en uitbreiding",
      "source": "exam2024",
      "page": 1,
      "solutionPage": 1,
      "questions": "Vraag 1–3 (reconstructie uit uitwerking)",
      "lessons": [
        "regressieschatter",
        "steekproefomvang"
      ],
      "task": "Gebruik de gegevens uit het voorbeeld in les 7. Bereken eerst zonder uitwerking het interval. Bepaal daarna de extra controles voor een totale intervalbreedte van € 10.000. De bron bevat het antwoordmodel; open dit pas na je poging.",
      "rubric": [
        "b₁ = 0,9116747; Ŵ_R = 1.784.652,89.",
        "s_R = 4.739,8643; interval op € 100: [1.775.200; 1.794.100].",
        "E = 5.000; totale n = 521; uitbreiding = 341.",
        "De factor √(1−R²) verklaart de kleinere standaardfout tegenover MPU."
      ]
    },
    {
      "id": "e4",
      "title": "ANOVA, diagnose en voorspelling",
      "source": "exam2024",
      "page": 4,
      "solutionPage": 4,
      "questions": "Vraag 9–14 (reconstructie uit uitwerking)",
      "lessons": [
        "anova",
        "diagnostiek",
        "voorspellen"
      ],
      "task": "Gebruik de gegevens uit de voorbeelden bij ANOVA, diagnostiek en voorspellen. Schrijf vóór openen van de bron alle ontbrekende ANOVA-waarden en de verklarende conclusies op.",
      "rubric": [
        "R² ≈ 0,9684; MSE ≈ 1,57518; F ≈ 857,85.",
        "Bij n = 30: y-grens ±2; MD-grens 4,303; CD-grens 0,258.",
        "Shapiro-Wilk p = 0,879 en heteroscedasticiteit p = 0,084: H₀ niet verwerpen.",
        "ŷ = 29,7409; individueel voorspellingsinterval volgens uitwerking [27,1; 32,4]."
      ]
    },
    {
      "id": "e5",
      "title": "Salaris: dummy’s en een gerichte toets",
      "source": "exam2025",
      "page": 9,
      "solutionPage": 14,
      "questions": "Vraag 19–23",
      "lessons": [
        "toetsen",
        "meervoudig",
        "modelbouw"
      ],
      "task": "Lees de coëfficiëntentabel. Vergelijk WO met HBO, voorspel het salaris van de beschreven persoon en voer de eenzijdige toets voor Vrouw uit. Beoordeel daarna selectie en VIF.",
      "rubric": [
        "WO − HBO = 365,322 euro.",
        "Met de getoonde coëfficiënten is de voorspelling 5.617,705: afgerond 5.618; de bron vermeldt 5.617.",
        "H₁: β_Vrouw < 0; t = −2,444 < −1,653; H₀ verwerpen.",
        "Beoordeling heeft p = 0,179; VIF_max = 1,355 < 10."
      ]
    },
    {
      "id": "e6",
      "title": "Het volledige tentamen van maart 2025",
      "source": "exam2025",
      "page": 1,
      "solutionPage": 11,
      "questions": "Vraag 1–25",
      "lessons": [
        "tentamen"
      ],
      "task": "Werk alle vragen uit het oorspronkelijke tentamen zelfstandig uit. Gebruik het formuleblad en de tabellenbundel. Houd de uitwerking vanaf PDF-pagina 11 tijdens je poging gesloten.",
      "rubric": [
        "Controleer vraag voor vraag met de officiële puntenverdeling.",
        "Maak onderscheid tussen rekenfouten, verkeerde methode en ontbrekende interpretatie.",
        "Herhaal de gekoppelde lessen voor onderdelen die nog niet zelfstandig lukken.",
        "Noteer de bronverschillen uit de samenvatting bij het nakijken."
      ]
    }
  ],
  "terms": [
    {
      "id": "populatie",
      "term": "Populatie",
      "aliases": [
        "populaties"
      ],
      "definition": "De volledige verzameling waarover je een uitspraak wilt doen. N is het aantal elementen in die verzameling.",
      "example": "Alle 1.000 facturen van een onderneming vormen de populatie; N = 1.000.",
      "lesson": "beginnen",
      "refs": [
        {
          "source": "slides",
          "page": 12,
          "locator": "Inleiding schatten, PDF-pagina 12 tot en met 15"
        }
      ]
    },
    {
      "id": "populatieomvang",
      "term": "Populatieomvang",
      "aliases": [
        "populatiegrootte"
      ],
      "definition": "Het aantal elementen in de populatie, aangeduid met hoofdletter N. Het is een aantal, geen geldbedrag.",
      "example": "Bij een voorraad van 2.500 artikelen is de populatieomvang 2.500, ongeacht hun waarde.",
      "lesson": "beginnen",
      "refs": [
        {
          "source": "slides",
          "page": 12,
          "locator": "Inleiding schatten, PDF-pagina 12 tot en met 15"
        }
      ]
    },
    {
      "id": "steekproef",
      "term": "Steekproef",
      "aliases": [
        "steekproeven"
      ],
      "definition": "De onderzochte selectie uit de populatie. Je gebruikt gegevens uit die selectie om iets over de hele populatie te schatten of te toetsen.",
      "example": "Je controleert 100 van de 1.000 facturen; die 100 vormen de steekproef.",
      "lesson": "beginnen",
      "refs": [
        {
          "source": "slides",
          "page": 12,
          "locator": "Inleiding schatten, PDF-pagina 12 tot en met 15"
        }
      ]
    },
    {
      "id": "steekproefgrootte",
      "term": "Steekproefgrootte",
      "aliases": [
        "steekproefgroottes",
        "steekproefomvang",
        "steekproefomvangen",
        "steekproefaantal",
        "steekproefaantallen"
      ],
      "definition": "Het aantal onderzochte elementen, aangeduid met kleine letter n. Bij evaluatie gebruik je het werkelijk onderzochte aantal.",
      "example": "Er waren 80 controles gepland, maar er zijn er 85 uitgevoerd. Voor de berekening gebruik je n = 85.",
      "lesson": "steekproefomvang",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formule 24; vergelijk ook formule 5 en 11 op PDF-pagina 1"
        },
        {
          "source": "exam2024",
          "page": 1,
          "locator": "Vraag 2: omvang en uitbreiding"
        }
      ]
    },
    {
      "id": "aselect",
      "term": "Aselecte steekproef",
      "aliases": [
        "aselect",
        "aselecte",
        "aselecte steekproeven"
      ],
      "definition": "Een steekproef die met een toevalsprocedure wordt getrokken, zodat persoonlijke voorkeur de selectie niet bepaalt. De SRA-schatters veronderstellen een passende steekproeftrekking.",
      "example": "Je loot factuurnummers in plaats van alleen eenvoudig te controleren facturen te kiezen.",
      "lesson": "mpu",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formules 1 tot en met 5: directe schatter"
        },
        {
          "source": "slides",
          "page": 13,
          "locator": "MPU, PDF-pagina 13 tot en met 19"
        }
      ]
    },
    {
      "id": "selectiebias",
      "term": "Selectieve steekproef",
      "aliases": [
        "selectieve steekproeven",
        "selectiebias",
        "verkeerde selectie"
      ],
      "definition": "Een selectie die bepaalde soorten elementen systematisch bevoordeelt. Een groter aantal controles verhelpt zo’n selectieprobleem niet automatisch.",
      "example": "Alleen goedkope artikelen controleren geeft hier een te laag beeld van de gemiddelde voorraadwaarde.",
      "lesson": "beginnen",
      "refs": [
        {
          "source": "slides",
          "page": 12,
          "locator": "Inleiding schatten, PDF-pagina 12 tot en met 15"
        }
      ]
    },
    {
      "id": "waarneming",
      "term": "Waarneming",
      "aliases": [
        "waarnemingen",
        "observatie",
        "observaties"
      ],
      "definition": "Eén vastgelegd onderzoeksgeval met de bijbehorende gemeten waarden. Leg vast of één geval bijvoorbeeld een artikel, persoon of tijdstip is.",
      "example": "Eén werknemer met leeftijd 40 en salaris € 3.500 vormt één waarneming in een salarisbestand.",
      "lesson": "beginnen",
      "refs": [
        {
          "source": "slides",
          "page": 12,
          "locator": "Inleiding schatten, PDF-pagina 12 tot en met 15"
        }
      ]
    },
    {
      "id": "variabele",
      "term": "Variabele",
      "aliases": [
        "variabelen"
      ],
      "definition": "Een kenmerk dat je per waarneming vastlegt en dat verschillende waarden kan aannemen.",
      "example": "Leeftijd en salaris zijn twee variabelen die je voor dezelfde werknemers kunt meten.",
      "lesson": "beginnen",
      "refs": [
        {
          "source": "slides",
          "page": 12,
          "locator": "Inleiding schatten, PDF-pagina 12 tot en met 15"
        }
      ]
    },
    {
      "id": "parameter",
      "term": "Parameter",
      "aliases": [
        "parameters",
        "populatieparameter",
        "populatieparameters"
      ],
      "definition": "Een meestal onbekend kenmerk van de populatie of het populatiemodel. Je schat het met gegevens uit een steekproef.",
      "example": "De werkelijke gemiddelde waarde van alle artikelen is een parameter; het gemiddelde van 100 gecontroleerde artikelen schat die waarde.",
      "lesson": "beginnen",
      "refs": [
        {
          "source": "slides",
          "page": 12,
          "locator": "Inleiding schatten, PDF-pagina 12 tot en met 15"
        }
      ]
    },
    {
      "id": "steekproefgrootheid",
      "term": "Steekproefgrootheid",
      "aliases": [
        "steekproefgrootheden"
      ],
      "definition": "Een getal dat je uit de steekproef berekent. De uitkomst kan anders zijn als je een andere steekproef trekt.",
      "example": "Het gemiddelde van de gecontroleerde artikelen is een steekproefgrootheid.",
      "lesson": "beginnen",
      "refs": [
        {
          "source": "slides",
          "page": 12,
          "locator": "Inleiding schatten, PDF-pagina 12 tot en met 15"
        }
      ]
    },
    {
      "id": "boekwaarde",
      "term": "Boekwaarde",
      "aliases": [
        "boekwaarden",
        "boekwaardetotaal"
      ],
      "definition": "De administratief geregistreerde waarde. In de schatters staat bᵢ voor een post en B voor het bekende boekwaardetotaal van de populatie.",
      "example": "Een artikel staat voor € 100 in de administratie: de boekwaarde is € 100.",
      "lesson": "beginnen",
      "refs": [
        {
          "source": "slides",
          "page": 12,
          "locator": "Inleiding schatten, PDF-pagina 12 tot en met 15"
        }
      ]
    },
    {
      "id": "werkelijke-waarde",
      "term": "Werkelijke waarde",
      "aliases": [
        "werkelijke waarden",
        "werkelijk totaal"
      ],
      "definition": "De waarde die je voor het onderzoek wilt vaststellen. Bij geldbedragschattingen vergelijk je deze met de boekwaarde; het volledige werkelijke populatietotaal is meestal onbekend.",
      "example": "Een artikel met boekwaarde € 100 blijkt na controle € 90 waard.",
      "lesson": "beginnen",
      "refs": [
        {
          "source": "slides",
          "page": 12,
          "locator": "Inleiding schatten, PDF-pagina 12 tot en met 15"
        }
      ]
    },
    {
      "id": "eenheid",
      "term": "Meeteenheid",
      "aliases": [
        "meeteenheden",
        "eenheden"
      ],
      "definition": "De schaal waarin een variabele is gemeten, zoals euro’s, jaren of centimeters. De eenheid bepaalt hoe je coëfficiënten en uitkomsten uitlegt.",
      "example": "Een voorspelling van 3,5 betekent € 3.500 als de salarisvariabele in duizenden euro’s staat.",
      "lesson": "beginnen",
      "refs": [
        {
          "source": "slides",
          "page": 12,
          "locator": "Inleiding schatten, PDF-pagina 12 tot en met 15"
        }
      ]
    },
    {
      "id": "gemiddelde",
      "term": "Gemiddelde",
      "aliases": [
        "gemiddelden",
        "steekproefgemiddelde",
        "rekenkundig gemiddelde",
        "Mean"
      ],
      "definition": "De som van de waarden gedeeld door het aantal waarden. Een streep boven een letter geeft vaak dit gemiddelde aan.",
      "example": "Bij 80, 100 en 120 is het gemiddelde (80 + 100 + 120) / 3 = 100.",
      "lesson": "rekenen",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formule 1 en 7: gemiddelde en steekproefspreiding"
        }
      ]
    },
    {
      "id": "somteken",
      "term": "Somteken",
      "aliases": [
        "somnotatie",
        "sigma",
        "sommatie"
      ],
      "definition": "Het teken Σ betekent: tel de aangegeven termen op. Let erop of je eerst kwadrateert of pas na het optellen.",
      "example": "Bij 2 en 4 is Σw² = 4 + 16 = 20, maar (Σw)² = 6² = 36.",
      "lesson": "rekenen",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formule 1 en 7: gemiddelde en steekproefspreiding"
        }
      ]
    },
    {
      "id": "kwadraat",
      "term": "Kwadraat",
      "aliases": [
        "kwadraten",
        "kwadrateren",
        "gekwadrateerd",
        "gekwadrateerde"
      ],
      "definition": "Een getal vermenigvuldigd met zichzelf. Ook een negatief getal heeft een niet-negatief kwadraat.",
      "example": "(−3)² = (−3) × (−3) = 9.",
      "lesson": "rekenen",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formule 1 en 7: gemiddelde en steekproefspreiding"
        }
      ]
    },
    {
      "id": "vierkantswortel",
      "term": "Vierkantswortel",
      "aliases": [
        "vierkantswortels",
        "worteltrekken"
      ],
      "definition": "De niet-negatieve waarde die, met zichzelf vermenigvuldigd, het getal onder het wortelteken oplevert.",
      "example": "√225 = 15, want 15 × 15 = 225.",
      "lesson": "rekenen",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formule 1 en 7: gemiddelde en steekproefspreiding"
        }
      ]
    },
    {
      "id": "spreiding",
      "term": "Spreiding",
      "aliases": [
        "spreiden"
      ],
      "definition": "Hoe sterk waarden van elkaar en van hun centrum verschillen. Standaardafwijking en variantie zijn manieren om die verschillen in een getal samen te vatten.",
      "example": "90, 100 en 110 hebben hetzelfde gemiddelde als 0, 100 en 200, maar veel minder spreiding.",
      "lesson": "rekenen",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formule 1 en 7: gemiddelde en steekproefspreiding"
        }
      ]
    },
    {
      "id": "afwijking",
      "term": "Afwijking van het gemiddelde",
      "aliases": [
        "afwijkingen van het gemiddelde"
      ],
      "definition": "De waarde van een waarneming minus het gemiddelde. Afwijkingen boven en onder het gemiddelde tellen samen op tot nul.",
      "example": "Bij een gemiddelde van 100 is de afwijking van 80 gelijk aan −20.",
      "lesson": "rekenen",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formule 1 en 7: gemiddelde en steekproefspreiding"
        }
      ]
    },
    {
      "id": "variantie",
      "term": "Variantie",
      "aliases": [
        "varianties",
        "steekproefvariantie",
        "steekproefvarianties"
      ],
      "definition": "Een maat voor gekwadrateerde spreiding. De steekproefvariantie is de som van de gekwadrateerde afwijkingen van het gemiddelde, gedeeld door n − 1.",
      "example": "Bij 90 en 110 is het gemiddelde 100 en s² = (100 + 100) / 1 = 200.",
      "lesson": "rekenen",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formule 1 en 7: gemiddelde en steekproefspreiding"
        }
      ]
    },
    {
      "id": "standaardafwijking",
      "term": "Standaardafwijking",
      "aliases": [
        "standaardafwijkingen",
        "standaarddeviatie",
        "Std. Deviation",
        "Std.Deviation",
        "Std. dev"
      ],
      "definition": "De wortel uit de variantie. Zij beschrijft de spreiding van individuele waarden in dezelfde eenheid als die waarden.",
      "example": "Een variantie van 225 euro² hoort bij een standaardafwijking van 15 euro.",
      "lesson": "rekenen",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formule 1 en 7: gemiddelde en steekproefspreiding"
        }
      ]
    },
    {
      "id": "standaardfout",
      "term": "Standaardfout",
      "aliases": [
        "standaardfouten",
        "standard error",
        "Std. Error",
        "Std.Error",
        {
          "text": "SE",
          "caseSensitive": true
        }
      ],
      "definition": "De spreiding van een schatter over mogelijke steekproeven. Zij beschrijft de onzekerheid van een schatting, niet de spreiding van individuele posten.",
      "example": "Bij s = 20 en n = 100 is de standaardfout van het gemiddelde vóór eindigheidscorrectie 20 / √100 = 2.",
      "lesson": "rekenen",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formules 4, 10 en 17: standaardfouten van de geschatte totalen"
        },
        {
          "source": "slides",
          "page": 13,
          "locator": "Onzekerheid van populatiegemiddelde en populatietotaal"
        }
      ]
    },
    {
      "id": "tussenafronding",
      "term": "Tussenafronding",
      "aliases": [
        "tussenafrondingen",
        "tussenuitkomst",
        "tussenuitkomsten"
      ],
      "definition": "Afronden voordat de hele berekening af is. Dit kan de einduitkomst veranderen; reken in SRA bij voorkeur verder met onafgeronde tussenwaarden.",
      "example": "Gebruik een berekende standaardfout van 1.898,31599 in de volgende stap, ook als je 1.898,32 toont.",
      "lesson": "rekenen",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formule 1 en 7: gemiddelde en steekproefspreiding"
        }
      ]
    },
    {
      "id": "kans",
      "term": "Kans",
      "aliases": [
        "kansen",
        "kanswaarde"
      ],
      "definition": "Een getal tussen 0 en 1 dat aangeeft hoe waarschijnlijk een uitkomst of gebeurtenis is binnen het gebruikte kansmodel.",
      "example": "Een kans van 0,05 is hetzelfde als 5%.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "verdeling",
      "term": "Verdeling",
      "aliases": [
        "verdelingen",
        "kansverdeling",
        "kansverdelingen"
      ],
      "definition": "Een beschrijving van welke waarden voorkomen of mogelijk zijn en hoe vaak of met welke kans dat gebeurt.",
      "example": "Een verdeling kan laten zien dat de meeste waarden rond 100 liggen en slechts enkele rond 200.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "normale-verdeling",
      "term": "Normale verdeling",
      "aliases": [
        "normaalverdeling",
        "normaal verdeeld",
        "normaal verdeelde",
        "klokvorm"
      ],
      "definition": "Een symmetrische, klokvormige kansverdeling met veel waarden rond het gemiddelde en minder waarden verder daarvan af.",
      "example": "Bij een gemiddelde van 100 liggen waarden 90 en 110 even ver van het midden van dezelfde normale verdeling.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "standaardnormaal",
      "term": "Standaardnormale verdeling",
      "aliases": [
        "z-verdeling",
        "standaardnormale z-verdeling"
      ],
      "definition": "De normale verdeling op een gestandaardiseerde schaal, met gemiddelde 0 en standaardafwijking 1. Bij veel vrijheidsgraden nadert de t-verdeling deze vorm.",
      "example": "Een z-waarde van 2 ligt twee standaardafwijkingen boven het gemiddelde.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "t-verdeling",
      "term": "Student-t-verdeling",
      "aliases": [
        "t-verdeling",
        "Student t",
        "Student-t"
      ],
      "definition": "Een symmetrische verdeling die rekening houdt met onzekerheid door het schatten van spreiding. De vorm hangt af van de vrijheidsgraden; bij weinig vrijheidsgraden zijn de staarten zwaarder.",
      "example": "Voor dezelfde betrouwbaarheid is bij weinig vrijheidsgraden doorgaans een grotere kritieke t nodig.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "staart",
      "term": "Staart",
      "aliases": [
        "staarten",
        "staartkans",
        "staartkansen",
        "linkerstaart",
        "rechterstaart"
      ],
      "definition": "Het uiterste linker- of rechterdeel van een verdeling. De staartkans is de kans op uitkomsten in dat gebied.",
      "example": "Een tweezijdig 95%-interval laat 2,5% in elke staart over.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "betrouwbaarheid",
      "term": "Betrouwbaarheid",
      "aliases": [
        "betrouwbaarheidsniveau"
      ],
      "definition": "De gekozen dekking van een intervalmethode, 1 − α. Bij herhaalde geschikte steekproeven bevat ongeveer dit aandeel van de op dezelfde manier gemaakte intervallen de vaste werkelijke parameter.",
      "example": "Bij een 95%-methode bevatten op lange termijn ongeveer 95 van 100 intervallen de werkelijke waarde.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "betrouwbaarheidsinterval",
      "term": "Betrouwbaarheidsinterval",
      "aliases": [
        "betrouwbaarheidsintervallen",
        "schattingsinterval",
        "schattingsintervallen"
      ],
      "definition": "Een onder- en bovengrens voor een onbekende parameter, gemaakt met een gekozen intervalmethode en betrouwbaarheid. Het is geen interval waarin datzelfde percentage individuele waarnemingen moet vallen.",
      "example": "Een interval voor de totale voorraadwaarde is [€ 96.000; € 104.000], niet een bereik voor losse artikelen.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "puntschatting",
      "term": "Puntschatting",
      "aliases": [
        "puntschattingen"
      ],
      "definition": "Eén getal als schatting van een onbekende populatiewaarde. Een puntschatting alleen laat de onzekerheid nog niet zien.",
      "example": "€ 100.000 is de puntschatting van de totale voorraadwaarde.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "marge",
      "term": "Onnauwkeurigheidsmarge",
      "aliases": [
        "onnauwkeurigheidsmarges",
        "onzekerheidsmarge",
        "onzekerheidsmarges",
        "marge",
        "marges",
        "onnauwkeurigheid"
      ],
      "definition": "De afstand van de puntschatting tot één intervalgrens bij een symmetrisch interval. Deze marge E is de kritieke waarde maal de standaardfout.",
      "example": "Een standaardfout van € 2.000 en kritieke t = 2 geven E = € 4.000.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "intervalbreedte",
      "term": "Intervalbreedte",
      "aliases": [
        "totale breedte",
        "totale intervalbreedte"
      ],
      "definition": "Het verschil tussen bovengrens en ondergrens. Bij een symmetrisch interval is de totale breedte tweemaal de marge E.",
      "example": "Bij [96; 104] is de breedte 8 en de marge 4.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "intervalgrenzen",
      "term": "Intervalgrenzen",
      "aliases": [
        "ondergrens",
        "bovengrens"
      ],
      "definition": "De laagste en hoogste waarde van het berekende interval. Bij een symmetrisch interval trek je de marge van het midden af en tel je haar erbij op.",
      "example": "Bij puntschatting 100 en marge 4 zijn de grenzen 96 en 104.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "kritieke-waarde",
      "term": "Kritieke waarde",
      "aliases": [
        "kritieke waarden",
        "kritieke t",
        "tabelwaarde",
        "tabelwaarden",
        "kritieke grens",
        "F-grens"
      ],
      "definition": "Een grens uit de passende kansverdeling. Je kiest haar met de gewenste betrouwbaarheid of α, de toetsrichting en de juiste vrijheidsgraden.",
      "example": "Gebruik een gegeven kritieke t van 2 om de standaardfout met 2 te vermenigvuldigen.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "vrijheidsgraden",
      "term": "Vrijheidsgraden",
      "aliases": [
        "vrijheidsgraad",
        "degrees of freedom",
        "df",
        "residual df"
      ],
      "definition": "Het aantal vrij variërende componenten nadat parameters zijn geschat. Bij steekproefvariantie is dit n − 1; bij regressieresiduen met k verklarende variabelen is het n − k − 1.",
      "example": "Bij n = 50 en k = 3 zijn er 50 − 3 − 1 = 46 residuele vrijheidsgraden.",
      "lesson": "anova",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 35 tot en met 43"
        },
        {
          "source": "exam2024",
          "page": 4,
          "locator": "Vraag 9 tot en met 10: ANOVA"
        }
      ]
    },
    {
      "id": "eindigheidscorrectie",
      "term": "Eindigheidscorrectie",
      "aliases": [
        "eindige-populatiecorrectie",
        "finite population correction"
      ],
      "definition": "De factor √((N − n)/(N − 1)) die de steekproefonzekerheid verkleint bij trekking zonder teruglegging uit een eindige populatie. Bij volledige controle wordt de factor nul.",
      "example": "Als je alle 100 van de 100 posten controleert, is de resterende steekproefonzekerheid nul.",
      "lesson": "mpu",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formules 1 tot en met 5: directe schatter"
        },
        {
          "source": "slides",
          "page": 13,
          "locator": "MPU, PDF-pagina 13 tot en met 19"
        }
      ]
    },
    {
      "id": "afronden-buiten",
      "term": "Afronden naar buiten",
      "aliases": [
        "afronding naar buiten",
        "naar buiten afronden"
      ],
      "definition": "Een interval afronden zonder het smaller te maken: de ondergrens omlaag en de bovengrens omhoog, op de gevraagde afrondingseenheid.",
      "example": "[€ 1.234; € 1.876] wordt op € 100 naar buiten [€ 1.200; € 1.900].",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "schatter",
      "term": "Schatter",
      "aliases": [
        "schatters",
        "schattingsmethode",
        "schattingsmethoden"
      ],
      "definition": "Een rekenregel waarmee je uit steekproefgegevens een onbekende populatiewaarde schat. De uitkomst van de regel is de schatting.",
      "example": "De regel N × steekproefgemiddelde is een schatter van het populatietotaal.",
      "lesson": "mpu",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formules 1 tot en met 5: directe schatter"
        },
        {
          "source": "slides",
          "page": 13,
          "locator": "MPU, PDF-pagina 13 tot en met 19"
        }
      ]
    },
    {
      "id": "mpu",
      "term": "Directe schatter (MPU)",
      "aliases": [
        "directe schatter",
        "MPU",
        "Mean Per Unit",
        "MPU-schatter"
      ],
      "definition": "De schatter die het gemiddelde van de gecontroleerde werkelijke waarden met N vermenigvuldigt. MPU betekent Mean Per Unit: gemiddelde per eenheid.",
      "example": "Bij N = 1.000 en een steekproefgemiddelde van € 80 is Ŵ_MPU = € 80.000.",
      "lesson": "mpu",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formules 1 tot en met 5: directe schatter"
        },
        {
          "source": "slides",
          "page": 13,
          "locator": "MPU, PDF-pagina 13 tot en met 19"
        }
      ]
    },
    {
      "id": "controlefout",
      "term": "Controlefout",
      "aliases": [
        "controlefouten",
        "boekwaardefout",
        "verschil per post"
      ],
      "definition": "In de schattingslessen is dit boekwaarde minus werkelijke waarde: e = b − w. Een positieve e betekent dat de boekwaarde te hoog is. Deze e is iets anders dan een regressieresidu.",
      "example": "Boekwaarde € 100 en werkelijke waarde € 90 geven e = +€ 10.",
      "lesson": "verschil",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formules 6 tot en met 11: verschilschatter"
        },
        {
          "source": "slides",
          "page": 20,
          "locator": "Verschilschatter en toepassingsvoorwaarden"
        }
      ]
    },
    {
      "id": "verschilschatter",
      "term": "Verschilschatter",
      "aliases": [
        "verschilschatting",
        "verschilschattingen"
      ],
      "definition": "Een methode die de gemiddelde boekwaardefout naar de populatie doorrekent en van B aftrekt: Ŵ = B − Nē. Zij past bij ongeveer constante foutbedragen; de cursus noemt minstens 30 afwijkende posten als voorwaarde.",
      "example": "Bij B = € 100.000, N = 1.000 en ē = € 10 wordt het geschatte werkelijke totaal € 90.000.",
      "lesson": "verschil",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formules 6 tot en met 11: verschilschatter"
        },
        {
          "source": "slides",
          "page": 20,
          "locator": "Verschilschatter en toepassingsvoorwaarden"
        }
      ]
    },
    {
      "id": "goedratio",
      "term": "Goedratio",
      "aliases": [
        "goedratio’s",
        "goedratios",
        "verhouding van de sommen"
      ],
      "definition": "De verhouding van de som van werkelijke waarden tot de som van boekwaarden in de steekproef: q = Σw/Σb. Dit is niet in het algemeen het gemiddelde van losse postverhoudingen.",
      "example": "Σw = € 19.000 en Σb = € 20.000 geven q = 0,95.",
      "lesson": "quotient",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formules 12 tot en met 17: quotiëntschatter"
        },
        {
          "source": "slides",
          "page": 23,
          "locator": "Quotiëntschatter en toepassingsvoorwaarden"
        }
      ]
    },
    {
      "id": "quotientschatter",
      "term": "Quotiëntschatter",
      "aliases": [
        "quotiëntschatting",
        "quotientschatter",
        "ratioschatter"
      ],
      "definition": "Een methode die de goedratio met het bekende boekwaardetotaal vermenigvuldigt: Ŵ = qB. Zij past bij een ongeveer vaste verhouding; controleer ook de cursusvoorwaarde van minstens 30 afwijkende posten.",
      "example": "Bij q = 0,95 en B = € 500.000 is het geschatte werkelijke totaal € 475.000.",
      "lesson": "quotient",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formules 12 tot en met 17: quotiëntschatter"
        },
        {
          "source": "slides",
          "page": 23,
          "locator": "Quotiëntschatter en toepassingsvoorwaarden"
        }
      ]
    },
    {
      "id": "regressieschatter",
      "term": "Regressieschatter",
      "aliases": [
        "regressieschatting"
      ],
      "definition": "De schatter van een populatietotaal die MPU corrigeert met het verschil tussen het bekende boekwaardetotaal B en de uit de steekproef doorgerekende boekwaarde Nb̄. Dit is een andere vraag dan een nieuwe y voorspellen.",
      "example": "Als B en Nb̄ gelijk zijn, is de correctieterm b₁(B − Nb̄) nul.",
      "lesson": "regressieschatter",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 18 tot en met 24: regressieschatter"
        },
        {
          "source": "exam2024",
          "page": 1,
          "locator": "Vraag 1 tot en met 3"
        }
      ]
    },
    {
      "id": "boekwaardecorrectie",
      "term": "Correctieterm",
      "aliases": [
        "correctietermen",
        "boekwaardecorrectie"
      ],
      "definition": "Bij de regressieschatter is dit b₁(B − Nb̄): de aanpassing van de directe schatting met behulp van de bekende boekwaarden.",
      "example": "Bij b₁ = 0,8 en B − Nb̄ = −€ 1.000 verlaagt de correctieterm de schatting met € 800.",
      "lesson": "regressieschatter",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 18 tot en met 24: regressieschatter"
        },
        {
          "source": "exam2024",
          "page": 1,
          "locator": "Vraag 1 tot en met 3"
        }
      ]
    },
    {
      "id": "planningsformule",
      "term": "Planningsformule",
      "aliases": [
        "omvangsformule",
        "benodigde omvang",
        "vereiste omvang"
      ],
      "definition": "De formulebladroute waarmee je vooraf de benodigde steekproefomvang berekent uit N, gewenste marge, passende variantie en kritieke t. De benodigde omvang wordt naar boven afgerond.",
      "example": "Een berekende omvang van 520,122 vraagt minstens 521 controles.",
      "lesson": "steekproefomvang",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formule 24; vergelijk ook formule 5 en 11 op PDF-pagina 1"
        },
        {
          "source": "exam2024",
          "page": 1,
          "locator": "Vraag 2: omvang en uitbreiding"
        }
      ]
    },
    {
      "id": "gamma",
      "term": "Gamma bij steekproefplanning",
      "aliases": [
        "gamma",
        "tussenstap gamma"
      ],
      "definition": "De tussenuitkomst γ waarmee de cursus de omvangsformule schrijft als n = N/(1 + γ). γ hangt af van de gewenste marge en de variantie die bij de gekozen schatter hoort.",
      "example": "Bij N = 1.000 en γ = 3 volgt n = 1.000 / 4 = 250.",
      "lesson": "steekproefomvang",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formule 24; vergelijk ook formule 5 en 11 op PDF-pagina 1"
        },
        {
          "source": "exam2024",
          "page": 1,
          "locator": "Vraag 2: omvang en uitbreiding"
        }
      ]
    },
    {
      "id": "uitbreiding",
      "term": "Steekproefuitbreiding",
      "aliases": [
        "uitbreiding",
        "uitbreiding van de steekproef",
        "extra controles"
      ],
      "definition": "Het aantal nog te controleren posten nadat je de totale vereiste omvang hebt bepaald. Trek het al gecontroleerde aantal af; de uitbreiding kan niet negatief zijn.",
      "example": "Een vereiste omvang van 521 en 180 bestaande controles betekenen 341 extra controles.",
      "lesson": "steekproefomvang",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formule 24; vergelijk ook formule 5 en 11 op PDF-pagina 1"
        },
        {
          "source": "exam2024",
          "page": 1,
          "locator": "Vraag 2: omvang en uitbreiding"
        }
      ]
    },
    {
      "id": "stratificatie",
      "term": "Stratificatie",
      "aliases": [
        "stratificeren",
        "gestratificeerd",
        "gestratificeerde steekproef"
      ],
      "definition": "Een populatie verdelen in deelpopulaties en per groep steekproeven of controles uitvoeren. Relatief gelijksoortige groepen kunnen de precisie verbeteren.",
      "example": "Verdeel voorraadartikelen in lage, middelhoge en hoge boekwaarden en schat elke groep afzonderlijk.",
      "lesson": "stratificatie",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 25 tot en met 29"
        },
        {
          "source": "exam2025",
          "page": 12,
          "locator": "Vraag 4 tot en met 6: allocatie en topstratum"
        }
      ]
    },
    {
      "id": "stratum",
      "term": "Stratum",
      "aliases": [
        "strata",
        "stratums",
        "deelpopulatie",
        "deelpopulaties"
      ],
      "definition": "Eén van de groepen waarin een populatie bij stratificatie is verdeeld. Elke groep heeft haar eigen omvang, gemiddelde en spreiding.",
      "example": "Alle artikelen met boekwaarde van € 100 tot € 500 vormen één stratum.",
      "lesson": "stratificatie",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 25 tot en met 29"
        },
        {
          "source": "exam2025",
          "page": 12,
          "locator": "Vraag 4 tot en met 6: allocatie en topstratum"
        }
      ]
    },
    {
      "id": "topstratum",
      "term": "Topstratum",
      "aliases": [
        "topstrata"
      ],
      "definition": "Een apart stratum met bijvoorbeeld de posten boven een hoog grensbedrag. Bij integrale controle ken je de werkelijke waarde ervan en is er voor dat deel geen steekproefonzekerheid.",
      "example": "Je controleert alle zeer dure machines en telt hun vastgestelde werkelijke waarde bij de overige schattingen op.",
      "lesson": "stratificatie",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 25 tot en met 29"
        },
        {
          "source": "exam2025",
          "page": 12,
          "locator": "Vraag 4 tot en met 6: allocatie en topstratum"
        }
      ]
    },
    {
      "id": "integrale-controle",
      "term": "Integrale controle",
      "aliases": [
        "integraal gecontroleerd",
        "integraal gecontroleerde",
        "volledige controle"
      ],
      "definition": "Alle elementen van de bedoelde populatie of groep controleren. Daardoor resteert voor die groep geen onzekerheid door steekproeftrekking.",
      "example": "Van een topstratum met 12 posten controleer je alle 12.",
      "lesson": "stratificatie",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 25 tot en met 29"
        },
        {
          "source": "exam2025",
          "page": 12,
          "locator": "Vraag 4 tot en met 6: allocatie en topstratum"
        }
      ]
    },
    {
      "id": "allocatie",
      "term": "Allocatie",
      "aliases": [
        "allocatiemethode",
        "allocatiemethoden",
        "alloceren"
      ],
      "definition": "De verdeling van het beschikbare steekproefaantal over strata. Na afronden moeten de aantallen samen nog steeds het gewenste totaal vormen.",
      "example": "Van 100 controles gaan er 60 naar stratum 1 en 40 naar stratum 2.",
      "lesson": "stratificatie",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 25 tot en met 29"
        },
        {
          "source": "exam2025",
          "page": 12,
          "locator": "Vraag 4 tot en met 6: allocatie en topstratum"
        }
      ]
    },
    {
      "id": "evenredige-allocatie",
      "term": "Evenredige allocatie",
      "aliases": [
        "evenredig alloceren",
        "proportionele allocatie"
      ],
      "definition": "De steekproef verdelen naar groepsomvang: nᵢ = (Nᵢ/N)n. De spreiding per groep speelt in deze verdeling geen rol.",
      "example": "Een stratum met 60% van alle posten krijgt bij deze methode 60% van de controles.",
      "lesson": "stratificatie",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 25 tot en met 29"
        },
        {
          "source": "exam2025",
          "page": 12,
          "locator": "Vraag 4 tot en met 6: allocatie en topstratum"
        }
      ]
    },
    {
      "id": "neyman",
      "term": "Neyman-allocatie",
      "aliases": [
        "Neyman",
        "Neyman allocatie"
      ],
      "definition": "Bij gelijke kosten de controles verdelen in verhouding tot Nᵢsᵢ. Een grotere groep of een groep met meer spreiding krijgt dan meer controles.",
      "example": "Twee even grote strata met spreiding 10 en 30 krijgen controles in de verhouding 1 op 3.",
      "lesson": "stratificatie",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 25 tot en met 29"
        },
        {
          "source": "exam2025",
          "page": 12,
          "locator": "Vraag 4 tot en met 6: allocatie en topstratum"
        }
      ]
    },
    {
      "id": "regressie",
      "term": "Regressie",
      "aliases": [
        "regressieanalyse",
        "regressiemodel",
        "regressiemodellen"
      ],
      "definition": "Een model voor de samenhang tussen een uitkomst y en één of meer verklarende variabelen. Het model kan voorspellen, maar toont op zichzelf geen oorzaak-gevolgrelatie aan.",
      "example": "Je beschrijft hoe voorspelde kosten samenhangen met productie.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "enkelvoudige-regressie",
      "term": "Enkelvoudige regressie",
      "aliases": [
        "enkelvoudig regressiemodel",
        "enkelvoudige lineaire regressie"
      ],
      "definition": "Regressie met één verklarende variabele. Bij een rechte lijn is de geschatte vergelijking ŷ = b₀ + b₁x.",
      "example": "Voorspel kosten uitsluitend uit het aantal geproduceerde artikelen.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "afhankelijke-variabele",
      "term": "Afhankelijke variabele",
      "aliases": [
        "afhankelijke variabelen",
        "te verklaren variabele",
        "uitkomstvariabele",
        "Dependent Variable"
      ],
      "definition": "De uitkomst y die je met het model wilt beschrijven of voorspellen. Een meervoudig regressiemodel heeft nog steeds één afhankelijke variabele.",
      "example": "In een salarisregressie is salaris de afhankelijke variabele.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "verklarende-variabele",
      "term": "Verklarende variabele",
      "aliases": [
        "verklarende variabelen",
        "onafhankelijke variabele",
        "onafhankelijke variabelen",
        "predictor",
        "predictoren"
      ],
      "definition": "Een x-variabele die je in het model opneemt om verschillen in y te beschrijven. De naam betekent niet dat een causaal effect is aangetoond.",
      "example": "Leeftijd kan een verklarende variabele zijn in een model voor salaris.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "coefficient",
      "term": "Regressiecoëfficiënt",
      "aliases": [
        "regressiecoëfficiënten",
        "coëfficiënt",
        "coëfficiënten"
      ],
      "definition": "Een getal in de regressievergelijking, zoals de constante of een helling. De geschatte coëfficiënten b worden uit de data berekend; de populatiecoëfficiënten β zijn onbekend.",
      "example": "In ŷ = 200 + 3x zijn 200 en 3 de geschatte coëfficiënten.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "constante",
      "term": "Constante",
      "aliases": [
        "intercept",
        "Constant"
      ],
      "definition": "De voorspelde y wanneer alle verklarende variabelen nul zijn. Als nul buiten het onderzochte gebied ligt, heeft deze waarde niet vanzelf een praktische interpretatie.",
      "example": "In ŷ = 200 + 3x is 200 de voorspelling bij x = 0.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "helling",
      "term": "Richtingscoëfficiënt",
      "aliases": [
        "richtingscoëfficiënten",
        "helling",
        "hellingscoëfficiënt",
        "hellingscoëfficiënten",
        "slope"
      ],
      "definition": "De verandering in voorspelde y bij één extra eenheid x. In meervoudige regressie geldt dit bij gelijkblijvende overige opgenomen variabelen.",
      "example": "Bij ŷ = 200 + 3x gaat de voorspelling met 3 omhoog als x van 50 naar 51 gaat.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "storingsterm",
      "term": "Storingsterm",
      "aliases": [
        "storingstermen",
        "storing",
        "epsilon"
      ],
      "definition": "Het onbekende deel van y dat het populatiemodel niet verklaart. De storing ε is niet direct waarneembaar; na schatting bereken je residuen als benadering.",
      "example": "Twee personen met dezelfde opgenomen kenmerken kunnen toch een ander salaris hebben.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "residu",
      "term": "Residu",
      "aliases": [
        "residuen",
        "residuele afwijking",
        "Unstandardized Residual"
      ],
      "definition": "De waargenomen y minus de door het geschatte model voorspelde ŷ: e = y − ŷ. Een positief residu betekent dat de waarneming boven de voorspelling ligt.",
      "example": "Bij werkelijke kosten 380 en voorspelde kosten 350 is het residu +30.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "ols",
      "term": "Kleinste-kwadratenmethode",
      "aliases": [
        "kleinste kwadraten",
        "OLS",
        "Ordinary Least Squares"
      ],
      "definition": "De methode die coëfficiënten kiest waarmee de som van de gekwadrateerde residuen zo klein mogelijk is.",
      "example": "Vergelijk twee lijnen: OLS kiest de lijn met de laagste Σ(yᵢ − ŷᵢ)².",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "ongestandaardiseerde-coefficient",
      "term": "Ongestandaardiseerde coëfficiënt",
      "aliases": [
        "ongestandaardiseerde coëfficiënten",
        "Unstandardized Coefficients",
        "Unstandardized B"
      ],
      "definition": "Een geschatte coëfficiënt in de oorspronkelijke meeteenheden. Gebruik in SPSS de kolom B van Coefficients voor de gewone regressievergelijking.",
      "example": "B = 30 bij leeftijd betekent 30 salariseenheden meer per extra jaar, bij gelijkblijvende andere kenmerken.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "gestandaardiseerde-coefficient",
      "term": "Gestandaardiseerde coëfficiënt",
      "aliases": [
        "gestandaardiseerde coëfficiënten",
        "Standardized Coefficients",
        "kolom Beta",
        {
          "text": "Beta",
          "caseSensitive": true
        }
      ],
      "definition": "Een coëfficiënt nadat variabelen op een standaardafwijkingsschaal zijn uitgedrukt. SPSS noemt deze kolom Beta; gebruik haar niet in een vergelijking met de oorspronkelijke eenheden.",
      "example": "Vul een Beta van 0,6 niet als eurocoëfficiënt in wanneer de vergelijking het salaris in euro’s moet voorspellen.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "correlatie",
      "term": "Correlatie",
      "aliases": [
        "correlaties",
        "correlatiecoëfficiënt",
        "correlatiecoëfficiënten",
        "Pearsons correlatie",
        "Pearson"
      ],
      "definition": "Pearsons r beschrijft richting en sterkte van lineaire samenhang en ligt tussen −1 en 1. Een r dicht bij nul sluit een krom verband niet uit.",
      "example": "r = −0,8 wijst op een sterk dalend lineair verband; het bewijst geen oorzaak-gevolgrelatie.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "causaliteit",
      "term": "Causaliteit",
      "aliases": [
        "causaal",
        "causale",
        "oorzaak-gevolgrelatie"
      ],
      "definition": "Een oorzaak-gevolgrelatie. Een correlatie of regressie op zichzelf laat zo’n relatie niet zien; andere variabelen of groepsverschillen kunnen de samenhang beïnvloeden.",
      "example": "Dat salaris met leeftijd samenhangt, toont op zichzelf niet aan dat één extra verjaardag het salaris veroorzaakt.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "scatterplot",
      "term": "Spreidingsdiagram",
      "aliases": [
        "spreidingsdiagrammen",
        "scatterplot",
        "scatter plot",
        "scatterplots",
        "puntenwolk"
      ],
      "definition": "Een grafiek waarin elke waarneming een punt krijgt op de x- en y-as. Zo zie je de vorm, richting en spreiding van een verband en mogelijke groepen of uitschieters.",
      "example": "Zet leeftijd horizontaal en salaris verticaal; iedere werknemer wordt één punt.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "spss",
          "page": 13,
          "locator": "Spreidingsdiagrammen bij opdracht 4B"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Regressie en spreidingsdiagram"
        }
      ]
    },
    {
      "id": "anova",
      "term": "ANOVA",
      "aliases": [
        "variantieanalyse",
        "Analysis of Variance",
        "ANOVA-tabel"
      ],
      "definition": "De tabel die de variatie in y bij gewone OLS-regressie met constante splitst in verklaarde en resterende variatie. De tabel bevat kwadratensommen, vrijheidsgraden, gemiddelde kwadratensommen en F.",
      "example": "Een totale kwadratensom van 100 kan worden gesplitst in 80 verklaard en 20 resterend.",
      "lesson": "anova",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 35 tot en met 43"
        },
        {
          "source": "exam2024",
          "page": 4,
          "locator": "Vraag 9 tot en met 10: ANOVA"
        }
      ]
    },
    {
      "id": "kwadratensom",
      "term": "Kwadratensom",
      "aliases": [
        "kwadratensommen",
        "Sum of Squares",
        "SS"
      ],
      "definition": "Een som van gekwadrateerde afwijkingen. Welke afwijkingen worden gebruikt, bepaalt of het om totale, verklaarde of residuele variatie gaat.",
      "example": "Residuen −2 en 3 leveren een residuele kwadratensom van 4 + 9 = 13.",
      "lesson": "anova",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 35 tot en met 43"
        },
        {
          "source": "exam2024",
          "page": 4,
          "locator": "Vraag 9 tot en met 10: ANOVA"
        }
      ]
    },
    {
      "id": "totalss",
      "term": "Totale kwadratensom",
      "aliases": [
        "TotalSS",
        "Total SS",
        "SST",
        "totale variatie"
      ],
      "definition": "Σ(yᵢ − ȳ)²: alle gekwadrateerde afwijkingen van y ten opzichte van het gemiddelde. Bij gewone OLS met constante geldt TotalSS = SSR + SSE.",
      "example": "Bij SSR = 80 en SSE = 20 is TotalSS = 100.",
      "lesson": "anova",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 35 tot en met 43"
        },
        {
          "source": "exam2024",
          "page": 4,
          "locator": "Vraag 9 tot en met 10: ANOVA"
        }
      ]
    },
    {
      "id": "ssr",
      "term": "Verklaarde kwadratensom",
      "aliases": [
        "SSR",
        "verklaarde variatie",
        "Regression Sum of Squares"
      ],
      "definition": "Σ(ŷᵢ − ȳ)²: het deel van de variatie dat de geschatte regressie verklaart. Gebruik de betekenis van de rij Regression in de SRA-ANOVA-tabel.",
      "example": "Bij SSR = 80 en TotalSS = 100 verklaart het model 80% van de variatie.",
      "lesson": "anova",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 35 tot en met 43"
        },
        {
          "source": "exam2024",
          "page": 4,
          "locator": "Vraag 9 tot en met 10: ANOVA"
        }
      ]
    },
    {
      "id": "sse",
      "term": "Residuele kwadratensom",
      "aliases": [
        "SSE",
        "resterende kwadratensom",
        "Sum of Squared Errors",
        "Sum of Squared Residuals"
      ],
      "definition": "Σ(yᵢ − ŷᵢ)²: de som van de gekwadrateerde residuen. OLS kiest de coëfficiënten die deze som minimaliseren.",
      "example": "Residuen −2, 1 en 3 geven SSE = 4 + 1 + 9 = 14.",
      "lesson": "anova",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 35 tot en met 43"
        },
        {
          "source": "exam2024",
          "page": 4,
          "locator": "Vraag 9 tot en met 10: ANOVA"
        }
      ]
    },
    {
      "id": "ms",
      "term": "Gemiddelde kwadratensom",
      "aliases": [
        "Mean Square",
        "MS"
      ],
      "definition": "Een kwadratensom gedeeld door de bijbehorende vrijheidsgraden. In ANOVA zijn MSR en MSE de waarden die je voor de F-verhouding gebruikt.",
      "example": "Een SS van 80 met 2 vrijheidsgraden geeft MS = 40.",
      "lesson": "anova",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 35 tot en met 43"
        },
        {
          "source": "exam2024",
          "page": 4,
          "locator": "Vraag 9 tot en met 10: ANOVA"
        }
      ]
    },
    {
      "id": "msr",
      "term": "MSR",
      "aliases": [
        "Mean Square Regression"
      ],
      "definition": "De verklaarde kwadratensom gedeeld door het aantal verklarende variabelen: SSR/k. Dit is de teller van de globale F-verhouding.",
      "example": "SSR = 80 en k = 2 geven MSR = 40.",
      "lesson": "anova",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 35 tot en met 43"
        },
        {
          "source": "exam2024",
          "page": 4,
          "locator": "Vraag 9 tot en met 10: ANOVA"
        }
      ]
    },
    {
      "id": "mse",
      "term": "MSE",
      "aliases": [
        "Mean Squared Error",
        "Mean Square Error",
        "Mean Square Residual",
        "residuele variantie",
        "trainings-MSE"
      ],
      "definition": "De residuele kwadratensom gedeeld door de residuele vrijheidsgraden: SSE/(n − k − 1). De wortel is de geschatte residuele standaardfout.",
      "example": "SSE = 112 en 28 residuele vrijheidsgraden geven MSE = 4.",
      "lesson": "anova",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 35 tot en met 43"
        },
        {
          "source": "exam2024",
          "page": 4,
          "locator": "Vraag 9 tot en met 10: ANOVA"
        }
      ]
    },
    {
      "id": "residuele-standaardfout",
      "term": "Residuele standaardfout",
      "aliases": [
        "Std. Error of the Estimate",
        "standaardfout van het regressiemodel"
      ],
      "definition": "De wortel uit MSE, in de eenheid van y. Zij beschrijft de geschatte spreiding rond de regressielijn en wordt in het voorspellingsinterval gebruikt.",
      "example": "MSE = 16 geeft Std. Error of the Estimate = 4.",
      "lesson": "anova",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 35 tot en met 43"
        },
        {
          "source": "exam2024",
          "page": 4,
          "locator": "Vraag 9 tot en met 10: ANOVA"
        }
      ]
    },
    {
      "id": "r-kwadraat",
      "term": "R²",
      "aliases": [
        "R-kwadraat",
        "R2",
        "R Square",
        "determinatiecoëfficiënt"
      ],
      "definition": "Het aandeel van de totale variatie in y dat het model verklaart: SSR/TotalSS. Het is niet het percentage waarnemingen dat exact goed voorspeld is.",
      "example": "R² = 0,70 betekent 70% verklaarde variatie in y binnen de gebruikte gegevens.",
      "lesson": "anova",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 35 tot en met 43"
        },
        {
          "source": "exam2024",
          "page": 4,
          "locator": "Vraag 9 tot en met 10: ANOVA"
        }
      ]
    },
    {
      "id": "hypothese",
      "term": "Hypothese",
      "aliases": [
        "hypothesen",
        "hypotheses"
      ],
      "definition": "Een toetsbare uitspraak over een populatie of modelparameter. Bij een toets schrijf je een nulhypothese en een alternatief op voordat je de uitkomst beoordeelt.",
      "example": "De uitspraak dat de populatiehelling nul is, kan als nulhypothese worden getoetst.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "nulhypothese",
      "term": "Nulhypothese",
      "aliases": [
        "nulhypothesen",
        "nulhypotheses",
        "H₀",
        "H0"
      ],
      "definition": "De uitspraak waarvan je bij de toetsberekening uitgaat. Je verwerpt haar als de gegevens voldoende tegenbewijs geven volgens de vooraf gekozen toets.",
      "example": "H₀: β₁ = 0 zegt dat de populatiehelling in het onderzochte model nul is.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "alternatieve-hypothese",
      "term": "Alternatieve hypothese",
      "aliases": [
        "alternatieve hypothesen",
        "alternatieve hypotheses",
        "H₁",
        "H1"
      ],
      "definition": "De uitspraak waarvoor je met de toets bewijs zoekt. Zij kan een verschil in beide richtingen of juist een vooraf gekozen positieve of negatieve richting betreffen.",
      "example": "H₁: β₁ < 0 past bij de vraag of het verband dalend is.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "toetsingsgrootheid",
      "term": "Toetsingsgrootheid",
      "aliases": [
        "toetsingsgrootheden",
        "toetsingsuitkomst",
        "toetsstatistiek"
      ],
      "definition": "Een uit de steekproef berekend getal dat je met een toetsverdeling of kritieke grens vergelijkt, zoals t of F.",
      "example": "Bij B = 6 en Std. Error = 2 is t = 6/2 = 3 voor een nulhypothese met coëfficiënt nul.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "p-waarde",
      "term": "p-waarde",
      "aliases": [
        "p-waarden",
        "p-value",
        "p-values",
        "Sig.",
        "Sig"
      ],
      "definition": "De kans, uitgaande van H₀ en de toetsaannames, op een minstens zo extreme toetsingsuitkomst. Dit is niet de kans dat H₀ waar is. SPSS noemt deze waarde vaak Sig.",
      "example": "Een tweezijdige p = 0,03 is kleiner dan α = 0,05; bij deze toets verwerp je H₀.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "significantieniveau",
      "term": "Significantieniveau",
      "aliases": [
        "significantieniveaus",
        "alfa",
        "alpha"
      ],
      "definition": "De vooraf gekozen grens α voor de toets. Zij begrenst onder de toetsaannames het risico dat je een ware nulhypothese verwerpt.",
      "example": "Bij α = 0,05 vergelijk je een tweezijdige p-waarde met 0,05, niet opnieuw met 0,025.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "significant",
      "term": "Statistische significantie",
      "aliases": [
        "statistisch significant",
        "significant",
        "significante",
        "significantie"
      ],
      "definition": "Een toetsuitkomst die volgens het gekozen α voldoende bewijs tegen H₀ geeft. Zij zegt op zichzelf niets over de praktische grootte van een verband of causaliteit.",
      "example": "Een significant positieve helling kan nog steeds een kleine verandering in euro’s per jaar betekenen.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "eenzijdig",
      "term": "Eenzijdig",
      "aliases": [
        "eenzijdige toets",
        "eenzijdige",
        "eenzijdige toetsen",
        "eenzijdig interval"
      ],
      "definition": "Gericht op één kant: bij een toets een vooraf gekozen richting in H₁, bij een interval één relevante grens. Een tweezijdige SPSS-p mag voor een eenzijdige toets alleen worden gehalveerd als het teken bij H₁ past; anders gebruik je 1 − p/2.",
      "example": "Bij H₁: β₁ > 0, positief B en tweezijdige p = 0,04 is de eenzijdige p = 0,02.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "tweezijdig",
      "term": "Tweezijdig",
      "aliases": [
        "tweezijdige toets",
        "tweezijdige",
        "tweezijdige toetsen",
        "tweezijdig interval"
      ],
      "definition": "Gericht op beide kanten: bij een toets afwijkingen in beide richtingen, bij een interval een onder- en bovengrens. Bij de symmetrische t-verdeling krijgt elke staart α/2; een al tweezijdige p vergelijk je met de totale α.",
      "example": "H₁: β₁ ≠ 0 vraagt of de helling positief of negatief van nul afwijkt.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "t-toets",
      "term": "t-toets",
      "aliases": [
        "t-toetsen",
        "individuele t-toets"
      ],
      "definition": "De toets van één coëfficiënt met t = (bⱼ − βⱼ,₀)/s_bⱼ. Bij toetsing tegen nul wordt dit B/Std. Error. In regressie horen n − k − 1 vrijheidsgraden bij de toets.",
      "example": "B = −6 en Std. Error = 2 geven t = −3 voor toetsing tegen nul.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "f-toets",
      "term": "Globale F-toets",
      "aliases": [
        "F-toets",
        "F-toetsen",
        "globale toets"
      ],
      "definition": "De toets of alle hellingscoëfficiënten tegelijk nul zijn. F = MSR/MSE gebruikt k en n − k − 1 vrijheidsgraden. Een significante uitkomst wijst op minstens één niet-nulle helling.",
      "example": "Een significante F bij drie x-variabelen betekent niet dat alle drie afzonderlijk significant zijn.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "kritiek-gebied",
      "term": "Kritiek gebied",
      "aliases": [
        "kritieke gebied",
        "verwerpingsgebied"
      ],
      "definition": "De toetsuitkomsten waarbij je H₀ verwerpt volgens de gekozen toetsrichting en α.",
      "example": "Bij een linkse grens −1,70 ligt t = −3 in het kritieke gebied.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "alpha-risico",
      "term": "α-risico",
      "aliases": [
        "alfa-risico",
        "alpha-risico",
        "type-I-fout",
        "type I-fout"
      ],
      "definition": "Het risico een ware nulhypothese te verwerpen. α is niet de kans dat een al verworpen individuele hypothese toch waar blijkt.",
      "example": "Je concludeert ten onrechte dat de populatiehelling afwijkt van nul terwijl zij in werkelijkheid nul is.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "beta-risico",
      "term": "β-risico",
      "aliases": [
        "bèta-risico",
        "beta-risico",
        "type-II-fout",
        "type II-fout"
      ],
      "definition": "Het risico een onware nulhypothese niet te verwerpen. De waarde van dit risico is niet automatisch 1 − α.",
      "example": "Er bestaat een populatieverband, maar de steekproef levert onvoldoende bewijs op om H₀ te verwerpen.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "niet-verwerpen",
      "term": "H₀ niet verwerpen",
      "aliases": [
        "niet verwerpen",
        "onvoldoende bewijs"
      ],
      "definition": "De gegevens leveren bij de gekozen toets niet genoeg bewijs tegen H₀. Dit is geen bewijs dat H₀ waar is.",
      "example": "p = 0,20 bij α = 0,05 betekent onvoldoende bewijs tegen H₀; niet dat geen enkel verband kan bestaan.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "crosssectie",
      "term": "Crosssectie",
      "aliases": [
        "cross-section",
        "crosssectioneel",
        "crosssectionele gegevens"
      ],
      "definition": "Gegevens van verschillende personen, bedrijven of andere eenheden op ongeveer hetzelfde moment.",
      "example": "De salarissen van 200 werknemers in dezelfde maand vormen crosssectiegegevens.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "tijdreeks",
      "term": "Tijdreeks",
      "aliases": [
        "tijdreeksen",
        "tijdsreeks",
        "tijdsreeksen"
      ],
      "definition": "Waarnemingen die op opeenvolgende tijdstippen zijn gemeten. Hun tijdsvolgorde is relevant bij vertraging en autocorrelatie.",
      "example": "De maandelijkse omzet van één onderneming gedurende drie jaar is een tijdreeks.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "tijdsvertraging",
      "term": "Tijdsvertraging",
      "aliases": [
        "tijdsvertragingen",
        "vertraagde variabele",
        "lag"
      ],
      "definition": "Een verband waarbij de relevante x eerder optreedt dan de bijbehorende y. De koppeling moet inhoudelijk passen bij de casus.",
      "example": "Je onderzoekt of reclame-uitgaven in maand t − 1 samenhangen met omzet in maand t.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "modelaanname",
      "term": "Modelaanname",
      "aliases": [
        "modelaannames",
        "regressieaannames",
        "modelvoorwaarden",
        "aannames"
      ],
      "definition": "Een voorwaarde waaronder de gebruikte modelberekeningen en gevolgtrekkingen passend zijn. SRA onderzoekt onder meer normaliteit, constante spreiding en autocorrelatie.",
      "example": "Een hoge R² maakt een trechtervorm in de residuen niet onbelangrijk.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "regressiediagnostiek",
      "term": "Regressiediagnostiek",
      "aliases": [
        "regressiediagnose",
        "diagnostiek",
        "diagnoses"
      ],
      "definition": "Het onderzoeken van data, tabellen en residuen om te beoordelen of het regressiemodel bruikbaar is en welke problemen nader onderzoek vragen.",
      "example": "Je bekijkt uitbijters, normaliteit en veranderende spreiding voordat je het voorspellingsinterval gebruikt.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "residuendiagram",
      "term": "Residuendiagram",
      "aliases": [
        "residuenplot",
        "residuendiagrammen",
        "residual plot"
      ],
      "definition": "Een grafiek van residuen tegenover bijvoorbeeld x, voorspelde y of de tijd. Een systematisch patroon kan aangeven wat het model mist.",
      "example": "Een boog in de residuen kan erop wijzen dat een rechte lijn het verband onvoldoende beschrijft.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "uitbijter",
      "term": "Uitbijter",
      "aliases": [
        "uitbijters",
        "uitschieter",
        "uitschieters",
        "outlier",
        "outliers"
      ],
      "definition": "Een waarneming die ongewoon ver van het patroon ligt. Onderscheid afwijking in y, afwijking in x en invloed op het model; een signaal is geen automatische reden om een geldige waarneming te verwijderen.",
      "example": "Een ongewoon salaris kan een invoerfout zijn, maar ook een geldige bijzondere functie betreffen.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "gestandaardiseerd-residu",
      "term": "Gestandaardiseerd residu",
      "aliases": [
        "gestandaardiseerde residuen",
        "Standardized Residual",
        "Standardized Residuals",
        "Std. Residual"
      ],
      "definition": "Een residu uitgedrukt op een standaardafwijkingsschaal. De cursus signaleert een y-uitbijter bij |z| > 2 als n ≤ 100 en bij |z| > 3 als n > 100.",
      "example": "z = 2,5 overschrijdt de cursusgrens bij n = 100, maar niet bij n = 101.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "mahalanobis",
      "term": "Mahalanobis Distance",
      "aliases": [
        "Mahalanobis",
        "MD",
        "Mahal.Distance",
        "uitbijter in x"
      ],
      "definition": "Een maat voor een ongebruikelijke positie in de verklarende variabelen. De SRA-cursus vergelijkt het maximum met gemiddelde MD + 3 × standaardafwijking MD.",
      "example": "Gemiddelde MD = 1 en s_MD = 0,5 geven een cursusgrens van 2,5.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "cooks-distance",
      "term": "Cook’s Distance",
      "aliases": [
        "Cook's Distance",
        "Cooks Distance",
        "Cook’s",
        "CD"
      ],
      "definition": "Een maat voor de potentiële invloed van een waarneming op de geschatte regressie. De cursusgrens is gemiddelde CD + 3 × standaardafwijking CD.",
      "example": "Gemiddelde CD = 0,04 en s_CD = 0,07 geven een grens van 0,25.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "invloedrijk-punt",
      "term": "Invloedrijk punt",
      "aliases": [
        "invloedrijke punten",
        "invloedrijke waarneming",
        "invloedrijke waarnemingen"
      ],
      "definition": "Een waarneming waarvan de aanwezigheid de geschatte regressie sterk kan veranderen. Grootte van een residu alleen is daarvoor niet voldoende; SRA gebruikt Cook’s Distance.",
      "example": "Een ver weg gelegen punt kan de helling sterk sturen, ook als het dicht bij de geschatte lijn ligt.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "normaliteit",
      "term": "Normaliteit",
      "aliases": [
        "normaliteitsaanname",
        "niet-normaliteit",
        "normaliteit van de residuen"
      ],
      "definition": "De aanname dat de relevante storingsterm normaal verdeeld is, onderzocht via de residuen. Een niet-significante normaliteitstoets bewijst deze aanname niet.",
      "example": "Bij Shapiro-Wilk p = 0,20 en α = 0,05 wordt normaliteit van de residuen niet verworpen.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "shapiro-wilk",
      "term": "Shapiro-Wilk",
      "aliases": [
        "Shapiro Wilk",
        "Shapiro-Wilk-toets"
      ],
      "definition": "Een normaliteitstoets. De SRA-analyseroute gebruikt haar voor residuen bij n ≤ 50. H₀ is normaliteit; een kleine p geeft aanleiding H₀ te verwerpen.",
      "example": "Bij n = 30 en p = 0,01 verwerp je normaliteit op niveau 0,05.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "kolmogorov-smirnov",
      "term": "Kolmogorov-Smirnov",
      "aliases": [
        "Kolmogorov Smirnov",
        "Kolmogorov-Smirnov-toets"
      ],
      "definition": "De normaliteitstoets die de SRA-analyseroute gebruikt voor residuen bij n > 50. Beoordeel de p-waarde tegenover α.",
      "example": "Bij n = 59 en p = 0,20 is er op niveau 0,05 onvoldoende bewijs om normaliteit te verwerpen.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "attentie",
          "page": 5,
          "locator": "Normaliteit van residuen"
        },
        {
          "source": "spss",
          "page": 19,
          "locator": "Tests of Normality bij n = 59"
        }
      ]
    },
    {
      "id": "histogram",
      "term": "Histogram",
      "aliases": [
        "histogrammen"
      ],
      "definition": "Een grafiek die numerieke waarden groepeert in aaneengesloten klassen. Bij gelijke klassebreedte laat de hoogte zien hoeveel waarnemingen in elke klasse vallen.",
      "example": "Van 12 residuen liggen er 5 tussen −1 en 0; die klasse krijgt frequentie 5.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "spss",
          "page": 19,
          "locator": "Histogram van de gestandaardiseerde residuen bij de normaliteitsanalyse"
        }
      ]
    },
    {
      "id": "frequentie",
      "term": "Frequentie",
      "aliases": [
        "frequenties",
        "Frequency",
        "frequentietabel"
      ],
      "definition": "Het aantal waarnemingen dat een bepaalde waarde heeft of binnen een gekozen klasse valt.",
      "example": "Als vier residuen tussen 0 en 1 liggen, is de frequentie van die klasse 4.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "spss",
          "page": 19,
          "locator": "Histogram met Frequency op de verticale as"
        }
      ]
    },
    {
      "id": "klassebreedte",
      "term": "Klassebreedte",
      "aliases": [
        "klassebreedten",
        "klassebreedtes",
        "histogramklasse",
        "klassen"
      ],
      "definition": "Het verschil tussen de onder- en bovengrens van een histogramklasse. In de didactische histogramtool zijn alle klassen even breed.",
      "example": "De klasse van −1 tot 0 heeft breedte 1, net als de klasse van 0 tot 1.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "spss",
          "page": 19,
          "locator": "Klassen in het residuenhistogram"
        }
      ]
    },
    {
      "id": "qq-plot",
      "term": "Q-Q-plot",
      "aliases": [
        "Q-Q",
        "QQ-plot",
        "QQ",
        "Q-Q-plots",
        "normaliteitsplot"
      ],
      "definition": "De didactische grafiek vergelijkt overeenkomstige kwantielen van geordende residuen en een theoretische normaalreferentie. Een ongeveer rechte puntenrij past bij een overeenkomstige verdelingsvorm; de grafiek berekent geen p-waarde.",
      "example": "In het lab buigt de puntenrij wanneer je de verdelingsvorm schever maakt.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "spss",
          "page": 19,
          "locator": "Normaliteitsanalyse; aanvullende uitleg bij de didactische Q-Q-grafiek in het SRA-lab"
        }
      ]
    },
    {
      "id": "kwantiel",
      "term": "Kwantiel",
      "aliases": [
        "kwantielen",
        "quantile",
        "theoretische kwantielen"
      ],
      "definition": "Een grenswaarde bij een bepaalde positie in een verdeling. De Q-Q-tool vergelijkt gelijke posities, bijvoorbeeld een lage positie in de residuen met dezelfde lage positie in de normaalreferentie.",
      "example": "Vergelijk een punt uit de onderste helft van de residuen met de overeenkomstige positie in de normaalreferentie.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "spss",
          "page": 19,
          "locator": "Normaliteitsanalyse; begripsuitleg bij de didactische Q-Q-grafiek"
        }
      ]
    },
    {
      "id": "homoscedasticiteit",
      "term": "Homoscedasticiteit",
      "aliases": [
        "homoscedastisch",
        "homoscedastische",
        "constante spreiding"
      ],
      "definition": "De aanname dat de spreiding van de storingsterm niet verandert met de verklarende waarden. Je beoordeelt dit met de residuen.",
      "example": "Rond zowel lage als hoge x-waarden blijft de verticale spreiding van residuen ongeveer even groot.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "heteroscedasticiteit",
      "term": "Heteroscedasticiteit",
      "aliases": [
        "heteroscedastisch",
        "heteroscedastische",
        "veranderende spreiding",
        "trechtervorm",
        "waaier"
      ],
      "definition": "Een situatie waarin de spreiding van de storingsterm verandert met de verklarende waarden. Een trechter in het residuendiagram is een onderzoekssignaal.",
      "example": "Bij hoge productie lopen de residuen veel verder uiteen dan bij lage productie.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "absres",
      "term": "Absolute residuen",
      "aliases": [
        "absoluut residu",
        "ABSRES",
        "absolute gestandaardiseerde residuen"
      ],
      "definition": "De grootte van residuen zonder hun plus- of minteken. SRA gebruikt absolute residuen in het onderzoek naar samenhang tussen spreiding en verklarende variabelen.",
      "example": "De absolute waarden van residuen −3 en +2 zijn 3 en 2.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "attentie",
          "page": 5,
          "locator": "Onderzoek heteroscedasticiteit"
        },
        {
          "source": "spss",
          "page": 20,
          "locator": "ABSRES aanmaken voor de analyse"
        }
      ]
    },
    {
      "id": "wls",
      "term": "Gewogen kleinste kwadraten",
      "aliases": [
        "WLS",
        "Weighted Least Squares",
        "gewogen regressie"
      ],
      "definition": "Regressie waarbij waarnemingen verschillende gewichten krijgen. Dit kan passen bij verschillen in spreiding; het juiste gewicht hangt af van het probleem.",
      "example": "Het cursusvoorbeeld met gewicht 1/x² is een specifieke correctie, geen algemene keuze voor elk model.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "autocorrelatie",
      "term": "Autocorrelatie",
      "aliases": [
        "autocorrelaties"
      ],
      "definition": "Samenhang tussen storingen op verschillende tijdstippen. Bij tijdreeksen kunnen residuen daardoor systematisch na elkaar bewegen.",
      "example": "Meerdere opeenvolgende positieve residuen gevolgd door negatieve residuen kunnen aanleiding geven dit te onderzoeken.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "durbin-watson",
      "term": "Durbin-Watson",
      "aliases": [
        "Durbin Watson",
        "DW",
        "Durbin-Watson-toets"
      ],
      "definition": "De SRA-toets voor autocorrelatie bij tijdreeksen. De grootheid d ligt tussen 0 en 4; vergelijk haar met dL, dU en de afgeleide grenzen 4 − dU en 4 − dL.",
      "example": "d = 2 moet met de passende tabelgrenzen worden beoordeeld; de afstand tot 2 alleen is niet de volledige toets.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "onbeslist-gebied",
      "term": "Onbeslist gebied",
      "aliases": [
        "onbesliste gebieden",
        "onbeslist"
      ],
      "definition": "Een gebied waarin de Durbin-Watson-regel geen eenduidige beslissing geeft. Het ligt tussen dL en dU en tussen 4 − dU en 4 − dL.",
      "example": "Bij dL = 1,35, dU = 1,49 en d = 1,40 is de uitkomst onbeslist.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "puntvoorspelling",
      "term": "Puntvoorspelling",
      "aliases": [
        "puntvoorspellingen",
        "voorspelde waarde",
        "voorspelde waarden",
        "Predicted Value"
      ],
      "definition": "De voorspelde y nadat je de gekozen x-waarden in het geschatte model hebt ingevuld. Zij beschrijft nog geen interval.",
      "example": "Bij ŷ = 10 + 2x en x = 4 is de puntvoorspelling 18.",
      "lesson": "voorspellen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formule 50: individueel voorspellingsinterval"
        },
        {
          "source": "attentie",
          "page": 6,
          "locator": "Voorspelling"
        }
      ]
    },
    {
      "id": "voorspellingsinterval",
      "term": "Individueel voorspellingsinterval",
      "aliases": [
        "voorspellingsinterval",
        "voorspellingsintervallen",
        "individuele voorspelling"
      ],
      "definition": "Een interval voor één nieuwe waarneming. Het neemt zowel onzekerheid in de geschatte lijn als individuele spreiding rond de lijn mee; daarom staat in formule 50 de extra 1 onder de wortel.",
      "example": "Voor één nieuw artikel kan het interval [27; 33] zijn terwijl de puntvoorspelling 30 is.",
      "lesson": "voorspellen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formule 50: individueel voorspellingsinterval"
        },
        {
          "source": "attentie",
          "page": 6,
          "locator": "Voorspelling"
        }
      ]
    },
    {
      "id": "gemiddelde-respons",
      "term": "Gemiddelde respons",
      "aliases": [
        "gemiddelde respons bij x",
        "interval voor de gemiddelde respons"
      ],
      "definition": "De gemiddelde y bij bepaalde verklarende waarden. Het interval hiervoor mist de extra individuele spreiding en is bij dezelfde invoer smaller dan een individueel voorspellingsinterval.",
      "example": "Het gemiddelde salaris bij leeftijd 40 is een andere vraag dan het salaris van één nieuwe 40-jarige.",
      "lesson": "voorspellen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formule 50: individueel voorspellingsinterval"
        },
        {
          "source": "attentie",
          "page": 6,
          "locator": "Voorspelling"
        }
      ]
    },
    {
      "id": "interpolatie",
      "term": "Interpolatie",
      "aliases": [
        "interpoleren"
      ],
      "definition": "Voorspellen binnen het onderzochte bereik van de verklarende variabele.",
      "example": "Je gegevens bevatten leeftijden van 20 tot 60; een voorspelling bij 40 ligt binnen dat bereik.",
      "lesson": "voorspellen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formule 50: individueel voorspellingsinterval"
        },
        {
          "source": "attentie",
          "page": 6,
          "locator": "Voorspelling"
        }
      ]
    },
    {
      "id": "extrapolatie",
      "term": "Extrapolatie",
      "aliases": [
        "extrapoleren"
      ],
      "definition": "Voorspellen buiten het onderzochte bereik. Het waargenomen verband hoeft buiten dat bereik niet op dezelfde manier door te lopen.",
      "example": "Bij gegevens van leeftijden 20 tot 60 is voorspellen voor leeftijd 85 extrapolatie.",
      "lesson": "voorspellen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formule 50: individueel voorspellingsinterval"
        },
        {
          "source": "attentie",
          "page": 6,
          "locator": "Voorspelling"
        }
      ]
    },
    {
      "id": "meervoudige-regressie",
      "term": "Meervoudige regressie",
      "aliases": [
        "meervoudig regressiemodel",
        "multiple regression"
      ],
      "definition": "Regressie met meerdere verklarende variabelen en één afhankelijke variabele. Elke helling beschrijft samenhang bij gelijkblijvende overige opgenomen kenmerken.",
      "example": "Je voorspelt salaris uit leeftijd, beoordelingsscore en leidinggeven samen.",
      "lesson": "meervoudig",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 51 tot en met 54; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Meervoudige regressie"
        },
        {
          "source": "exam2025",
          "page": 14,
          "locator": "Vraag 19 tot en met 20: salaris en dummyvariabelen"
        }
      ]
    },
    {
      "id": "dummy",
      "term": "Dummyvariabele",
      "aliases": [
        "dummy",
        "dummy’s",
        "dummy's",
        "dummies",
        "dummyvariabelen"
      ],
      "definition": "Een variabele met waarde 0 of 1 die een categorie aanduidt. Haar coëfficiënt vergelijkt die categorie met de referentiegroep, bij gelijke andere kenmerken.",
      "example": "Leidinggevende = 1 voor ja en 0 voor nee. Een coëfficiënt van 500 geeft een verschil van 500 eenheden.",
      "lesson": "meervoudig",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 51 tot en met 54; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Meervoudige regressie"
        },
        {
          "source": "exam2025",
          "page": 14,
          "locator": "Vraag 19 tot en met 20: salaris en dummyvariabelen"
        }
      ]
    },
    {
      "id": "referentiegroep",
      "term": "Referentiegroep",
      "aliases": [
        "referentiecategorie",
        "referentiegroepen"
      ],
      "definition": "De categorie waarmee de opgenomen dummycategorieën worden vergeleken. Bij drie exclusieve categorieën en een constante gebruik je doorgaans twee dummy’s; beide nul duidt de referentie aan.",
      "example": "Als HBO en WO de dummy’s zijn, vormt de groep met beide op nul de referentie.",
      "lesson": "meervoudig",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 51 tot en met 54; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Meervoudige regressie"
        },
        {
          "source": "exam2025",
          "page": 14,
          "locator": "Vraag 19 tot en met 20: salaris en dummyvariabelen"
        }
      ]
    },
    {
      "id": "adjusted-r2",
      "term": "Adjusted R²",
      "aliases": [
        "Adjusted R Square",
        "adjusted R2",
        "gecorrigeerde R²",
        "gecorrigeerde determinatiecoëfficiënt"
      ],
      "definition": "R² gecorrigeerd voor het aantal verklarende variabelen en de beschikbare waarnemingen. Deze maat kan dalen als een extra variabele onvoldoende toevoegt.",
      "example": "Gewone R² stijgt na toevoeging van x₂, maar adjusted R² kan dalen doordat de extra verbetering te klein is.",
      "lesson": "meervoudig",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 51 tot en met 54; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Meervoudige regressie"
        },
        {
          "source": "exam2025",
          "page": 14,
          "locator": "Vraag 19 tot en met 20: salaris en dummyvariabelen"
        }
      ]
    },
    {
      "id": "overfitting",
      "term": "Overfitting",
      "aliases": [
        "overfit",
        "overfitted"
      ],
      "definition": "Een model past ook toevalligheden van de trainingsgegevens aan en kan daardoor op nieuwe gegevens minder goed werken. De cursusvuistregel n ≥ 10k vervangt geen validatie.",
      "example": "Een model met veel variabelen voorspelt de trainingsdata goed, maar maakt grote fouten op een ongebruikte testset.",
      "lesson": "meervoudig",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 51 tot en met 54; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Meervoudige regressie"
        },
        {
          "source": "exam2025",
          "page": 14,
          "locator": "Vraag 19 tot en met 20: salaris en dummyvariabelen"
        }
      ]
    },
    {
      "id": "transformatie",
      "term": "Transformatie",
      "aliases": [
        "transformaties",
        "transformeren",
        "getransformeerd",
        "getransformeerde"
      ],
      "definition": "Een variabele via een wiskundige bewerking op een andere schaal uitdrukken, bijvoorbeeld ln(x). Hierdoor kan een krom verband beter bij een lineair geschatte vorm passen.",
      "example": "Je gebruikt ln(x) als verklarende variabele in plaats van x zelf.",
      "lesson": "transformaties",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 55 tot en met 58"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Transformaties, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "logaritme",
      "term": "Natuurlijke logaritme",
      "aliases": [
        "logaritme",
        "logaritmen",
        "natuurlijke logaritmen",
        "ln-functie"
      ],
      "definition": "De bewerking ln(x) vraagt tot welke macht je e moet verheffen om x te krijgen. Zij is alleen gedefinieerd voor x > 0.",
      "example": "ln(1) = 0, want e⁰ = 1.",
      "lesson": "transformaties",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 55 tot en met 58"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Transformaties, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "exp",
      "term": "Exponentiële functie",
      "aliases": [
        "exp",
        "exp-functie",
        "exponentiëren"
      ],
      "definition": "De bewerking exp(z) = eᶻ, die ln omkeert. Zij zet een voorspelling op logschaal terug naar de oorspronkelijke schaal volgens de gebruikte modelvorm.",
      "example": "exp(ln(16)) = 16.",
      "lesson": "transformaties",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 55 tot en met 58"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Transformaties, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "logaritmisch-model",
      "term": "Logaritmisch model",
      "aliases": [
        "logaritmische functie",
        "logaritmisch"
      ],
      "definition": "Een model met ln(x) als verklarende grootheid en y op de oorspronkelijke schaal: ŷ = b₀ + b₁ln(x).",
      "example": "Bij b₁ = 2 verhoogt een verdubbeling van x de voorspelde y met 2ln(2).",
      "lesson": "transformaties",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 55 tot en met 58"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Transformaties, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "exponentieel-model",
      "term": "Exponentieel model",
      "aliases": [
        "exponentiële regressie",
        "exponentieel"
      ],
      "definition": "Een model met ln(y) lineair in x. Na terugtransformatie is de cursusvorm ŷ = exp(b₀ + b₁x).",
      "example": "Bij één extra x vermenigvuldigt de voorspelde y met exp(b₁).",
      "lesson": "transformaties",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 55 tot en met 58"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Transformaties, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "machtsmodel",
      "term": "Machtsmodel",
      "aliases": [
        "machtsfunctie",
        "machtsfuncties",
        "Power",
        "power-model"
      ],
      "definition": "Een model dat lineair wordt geschreven met ln(y) en ln(x). Op de oorspronkelijke schaal is de cursusvorm ŷ = exp(b₀) × xᵇ¹.",
      "example": "Bij b₁ = 0,5 vermenigvuldigt een verdubbeling van x de voorspelde y met √2.",
      "lesson": "transformaties",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 55 tot en met 58"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Transformaties, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "terugtransformatie",
      "term": "Terugtransformatie",
      "aliases": [
        "terugtransformeren",
        "teruggetransformeerd"
      ],
      "definition": "De voorspelde uitkomst terugzetten naar de oorspronkelijke schaal volgens de gekozen modelvorm. Als y is gelogaritmeerd, is alleen de lineaire uitkomst nog geen voorspelling in de oorspronkelijke eenheid.",
      "example": "Een voorspelde logwaarde van 2 wordt op de oorspronkelijke schaal exp(2), ongeveer 7,39.",
      "lesson": "transformaties",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 55 tot en met 58"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Transformaties, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "enter",
      "term": "Enter-methode",
      "aliases": [
        "Enter"
      ],
      "definition": "Een modelbouwmethode waarbij alle opgegeven verklarende variabelen tegelijk in het model worden opgenomen.",
      "example": "Neem leeftijd, beoordeling en leidinggeven in één keer op.",
      "lesson": "modelbouw",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formules 59 tot en met 63"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Modelbouw en multicollineariteit, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "backward",
      "term": "Backward elimination",
      "aliases": [
        "Backward",
        "backward-methode"
      ],
      "definition": "Een methode die begint met alle kandidaatvariabelen en stapsgewijs een onvoldoende bijdragende variabele verwijdert. Na verwijderen wordt opnieuw geschat.",
      "example": "De variabele met de grootste p boven de gegeven verwijderingsgrens is de eerste kandidaat.",
      "lesson": "modelbouw",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formules 59 tot en met 63"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Modelbouw en multicollineariteit, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "forward",
      "term": "Forward selection",
      "aliases": [
        "Forward",
        "forward-methode"
      ],
      "definition": "Een methode die klein begint en stapsgewijs verklarende variabelen toevoegt volgens het selectiecriterium.",
      "example": "Na een eerste variabele onderzoekt de procedure welke volgende variabele nog voldoende toevoegt.",
      "lesson": "modelbouw",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formules 59 tot en met 63"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Modelbouw en multicollineariteit, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "stepwise",
      "term": "Stepwise",
      "aliases": [
        "stepwise-methode",
        "stapsgewijze selectie"
      ],
      "definition": "Een selectiemethode die bij toevoeging van variabelen ook opnieuw controleert of eerder opgenomen variabelen moeten vervallen.",
      "example": "Na toevoeging van x₃ kan x₁ alsnog onvoldoende bijdragen en worden verwijderd.",
      "lesson": "modelbouw",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formules 59 tot en met 63"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Modelbouw en multicollineariteit, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "multicollineariteit",
      "term": "Multicollineariteit",
      "aliases": [
        "multicollineair",
        "multicollineaire"
      ],
      "definition": "Sterke onderlinge samenhang tussen verklarende variabelen, waardoor hun afzonderlijke bijdragen moeilijker te onderscheiden zijn. Dit is iets anders dan een sterk verband tussen x en y.",
      "example": "Twee x-variabelen meten bijna hetzelfde kenmerk; hun afzonderlijke coëfficiënten worden moeilijker te interpreteren.",
      "lesson": "modelbouw",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formules 59 tot en met 63"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Modelbouw en multicollineariteit, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "hulpregressie",
      "term": "Hulpregressie",
      "aliases": [
        "hulpregressies",
        "hulp-R²",
        "hulpregressie R²"
      ],
      "definition": "Bij VIF: een regressie van één verklarende variabele op de overige verklarende variabelen. De R² hiervan meet hoeveel overlap die variabele met de andere x-variabelen heeft.",
      "example": "Voor VIF van x₁ voorspel je x₁ met de overige x-variabelen, niet met de oorspronkelijke y.",
      "lesson": "modelbouw",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formules 59 tot en met 63"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Modelbouw en multicollineariteit, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "tolerance",
      "term": "Tolerance",
      "aliases": [
        "tolerantie"
      ],
      "definition": "Bij een verklarende variabele: 1 − R² van haar hulpregressie. Een lage tolerance betekent veel overlap met de overige verklarende variabelen.",
      "example": "Hulp-R² = 0,92 geeft tolerance = 0,08.",
      "lesson": "modelbouw",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formules 59 tot en met 63"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Modelbouw en multicollineariteit, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "vif",
      "term": "Variance Inflation Factor",
      "aliases": [
        "VIF",
        "variance-inflatiefactor"
      ],
      "definition": "De maat VIF = 1/tolerance = 1/(1 − R²ᵢ) op basis van de hulpregressie. De cursus gebruikt VIF > 10 als probleemsignaal voor multicollineariteit.",
      "example": "Tolerance 0,08 geeft VIF 12,5; VIF precies 10 overschrijdt de strikte grens niet.",
      "lesson": "modelbouw",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formules 59 tot en met 63"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Modelbouw en multicollineariteit, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "geneste-modellen",
      "term": "Geneste modellen",
      "aliases": [
        "genest model",
        "geneste regressiemodellen"
      ],
      "definition": "Modellen waarbij het uitgebreide model alle verklarende variabelen van het kleinere model bevat, plus extra variabelen. Vergelijk ze op dezelfde y en dezelfde waarnemingen.",
      "example": "Een model met x₁ en x₂ is genest in een model met x₁, x₂ en x₃ op dezelfde dataset.",
      "lesson": "modelbouw",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formules 59 tot en met 63"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Modelbouw en multicollineariteit, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "partiele-f",
      "term": "Partiële F-toets",
      "aliases": [
        "partiële F",
        "extra bijdrage",
        "toets van extra variabelen"
      ],
      "definition": "Een F-toets van de verbetering door extra variabelen in geneste modellen. Deel de extra SSR door het aantal toegevoegde variabelen en vervolgens door MSE van het uitgebreide model.",
      "example": "Voor één extra variabele: (850 − 800)/10 = F van 5; vergelijk daarna met de passende grens.",
      "lesson": "modelbouw",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formules 59 tot en met 63"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Modelbouw en multicollineariteit, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "validatie",
      "term": "Validatie",
      "aliases": [
        "valideren",
        "modelvalidatie"
      ],
      "definition": "Onderzoeken hoe bruikbaar het geschatte model is op gegevens die niet voor schatting en selectie zijn gebruikt.",
      "example": "Schat het model op de training en vergelijk de vaste voorspellingen met werkelijke testuitkomsten.",
      "lesson": "validatie",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formule 64: voorspelfout op testgegevens"
        },
        {
          "source": "attentie",
          "page": 9,
          "locator": "Validatie, zie ook PDF-pagina 8"
        }
      ]
    },
    {
      "id": "data-splitting",
      "term": "Data splitting",
      "aliases": [
        "datasplitsing",
        "data-splitting"
      ],
      "definition": "Gegevens opsplitsen in een trainingsset en een testset. De scheiding voorkomt dat beoordeling op nieuwe data in feite dezelfde gegevens als de modelkeuze gebruikt.",
      "example": "Een deel van de waarnemingen blijft buiten de schatting en wordt pas voor beoordeling gebruikt.",
      "lesson": "validatie",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formule 64: voorspelfout op testgegevens"
        },
        {
          "source": "attentie",
          "page": 9,
          "locator": "Validatie, zie ook PDF-pagina 8"
        }
      ]
    },
    {
      "id": "trainingsset",
      "term": "Trainingsset",
      "aliases": [
        "trainingsdata",
        "trainingsgegevens",
        "training set",
        "trainings-set"
      ],
      "definition": "De gegevens waarop je het model schat en selecteert. Een goede passing op deze gegevens is op zichzelf nog geen bewijs voor goede voorspellingen op nieuwe gevallen.",
      "example": "De coëfficiënten worden berekend uit de training en daarna vastgehouden voor de test.",
      "lesson": "validatie",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formule 64: voorspelfout op testgegevens"
        },
        {
          "source": "attentie",
          "page": 9,
          "locator": "Validatie, zie ook PDF-pagina 8"
        }
      ]
    },
    {
      "id": "testset",
      "term": "Testset",
      "aliases": [
        "testdata",
        "testgegevens",
        "test set",
        "test-set"
      ],
      "definition": "Gegevens die buiten de schatting en modelselectie zijn gehouden en waarmee je de voorspelfouten van het vaste model beoordeelt.",
      "example": "Verandering van een werkelijke testuitkomst verandert de testfout, niet de al geschatte coëfficiënten.",
      "lesson": "validatie",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formule 64: voorspelfout op testgegevens"
        },
        {
          "source": "attentie",
          "page": 9,
          "locator": "Validatie, zie ook PDF-pagina 8"
        }
      ]
    },
    {
      "id": "mspr",
      "term": "MSPR",
      "aliases": [
        "MSPE",
        "MSRP",
        "MPSR",
        "Mean Squared Prediction Error",
        "gemiddelde gekwadrateerde voorspelfout"
      ],
      "definition": "De som van gekwadrateerde voorspelfouten op de testset gedeeld door n_test. Deel hier niet door de residuele vrijheidsgraden van de training. De aangeleverde bronnen gebruiken ook de lettervolgorden MSRP en MPSR voor deze formule.",
      "example": "Testfouten −2, 1 en 3 geven MSPR = (4 + 1 + 9)/3 = 4,6667.",
      "lesson": "validatie",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formule 64: voorspelfout op testgegevens"
        },
        {
          "source": "attentie",
          "page": 9,
          "locator": "Validatie, zie ook PDF-pagina 8"
        }
      ]
    },
    {
      "id": "generalisatie",
      "term": "Generalisatie",
      "aliases": [
        "generaliseren",
        "generaliseerbaarheid"
      ],
      "definition": "De mate waarin het op trainingsgegevens gevonden model ook bruikbaar is op nieuwe gegevens.",
      "example": "Een veel grotere MSPR dan trainings-MSE wijst op minder goede voorspellingen buiten de training.",
      "lesson": "validatie",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formule 64: voorspelfout op testgegevens"
        },
        {
          "source": "attentie",
          "page": 9,
          "locator": "Validatie, zie ook PDF-pagina 8"
        }
      ]
    },
    {
      "id": "spss",
      "term": "SPSS",
      "aliases": [
        "SPSS-uitvoer",
        "SPSS-output"
      ],
      "definition": "Het statistische programma waarvan de tabellen en grafieken in de SRA-opgaven worden gebruikt. Je moet niet alleen de getallen, maar ook tabelnamen en voetnoten lezen.",
      "example": "Coefficients geeft coëfficiënten; ANOVA geeft kwadratensommen en de globale F-toets.",
      "lesson": "validatie",
      "refs": [
        {
          "source": "spss",
          "page": 5,
          "locator": "SPSS gebruiken voor de regressieopgave"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Lezen en interpreteren van regressie-uitvoer"
        }
      ]
    },
    {
      "id": "correlations",
      "term": "Correlations",
      "aliases": [
        "correlatietabel",
        "correlatiematrix"
      ],
      "definition": "De SPSS-tabel met correlaties tussen variabelen. Gebruik haar voor richting en lineaire samenhang, niet als regressievergelijking.",
      "example": "Een negatieve r in Correlations geeft de richting die een niet-negatieve model-R niet laat zien.",
      "lesson": "validatie",
      "refs": [
        {
          "source": "spss",
          "page": 16,
          "locator": "Correlations bij leeftijd en bloeddruk"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Correlatie en regressie"
        }
      ]
    },
    {
      "id": "model-summary",
      "term": "Model Summary",
      "aliases": [
        "modeloverzicht"
      ],
      "definition": "De SPSS-tabel met onder meer R, R², adjusted R² en Std. Error of the Estimate; soms staat ook Durbin-Watson hier.",
      "example": "Lees R² af voor verklaarde variatie en gebruik het teken van B of r voor de richting.",
      "lesson": "validatie",
      "refs": [
        {
          "source": "spss",
          "page": 9,
          "locator": "Model Summary bij bouwjaar en gewicht"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Beoordeling van de regressie"
        }
      ]
    },
    {
      "id": "coefficients",
      "term": "Coefficients",
      "aliases": [
        "coëfficiëntentabel",
        "coefficiententabel"
      ],
      "definition": "De SPSS-tabel met onder meer B, Std. Error, t, Sig. en eventueel Beta, tolerance en VIF. De kolom B levert de gewone regressievergelijking.",
      "example": "Gebruik B = 6 en Std. Error = 2 om t = 3 te controleren.",
      "lesson": "validatie",
      "refs": [
        {
          "source": "spss",
          "page": 9,
          "locator": "Coefficients bij bouwjaar en gewicht"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "De regressievergelijking aflezen"
        }
      ]
    },
    {
      "id": "residuals-statistics",
      "term": "Residuals Statistics",
      "aliases": [
        "residuentabel",
        "residuenstatistieken"
      ],
      "definition": "De SPSS-tabel met samenvattingen van voorspelde waarden, residuen en eventueel afstandsmaten. Voor diagnostiek lees je onder meer minimum, maximum, gemiddelde en standaardafwijking.",
      "example": "Vergelijk de grootste Cook’s Distance met gemiddelde plus drie standaardafwijkingen uit de bijbehorende rij.",
      "lesson": "validatie",
      "refs": [
        {
          "source": "spss",
          "page": 16,
          "locator": "Residuals Statistics bij uitbijters en invloedrijke punten"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Diagnostiek"
        }
      ]
    },
    {
      "id": "tests-normality",
      "term": "Tests of Normality",
      "aliases": [
        "normaliteitstoetsen"
      ],
      "definition": "De SPSS-tabel met normaliteitstoetsen zoals Shapiro-Wilk en Kolmogorov-Smirnov. Controleer dat de getoetste variabele de juiste residuen bevat.",
      "example": "Lees de p-waarde bij de volgens de cursus passende toets voor het aantal waarnemingen.",
      "lesson": "validatie",
      "refs": [
        {
          "source": "spss",
          "page": 19,
          "locator": "Tests of Normality voor Standardized Residual"
        }
      ]
    },
    {
      "id": "toepassingsvoorwaarde",
      "term": "Toepassingsvoorwaarde",
      "aliases": [
        "toepassingsvoorwaarden"
      ],
      "definition": "Een eis die je controleert voordat je een methode gebruikt. Een rekenbare formule betekent nog niet dat de methode inhoudelijk past.",
      "example": "Bij de verschilschatter controleer je het foutpatroon en de cursusvoorwaarde van minstens 30 afwijkende posten.",
      "lesson": "tentamen",
      "refs": [
        {
          "source": "programma",
          "page": 4,
          "locator": "Toetsing en literatuur, PDF-pagina 4 tot en met 5"
        },
        {
          "source": "exam2025",
          "page": 11,
          "locator": "Uitwerkingen met berekening en conclusie"
        }
      ]
    },
    {
      "id": "interpretatie",
      "term": "Interpretatie",
      "aliases": [
        "interpreteren"
      ],
      "definition": "De uitkomst in woorden verbinden met de variabelen, eenheden en vraag van de casus. Benoem wat de berekening ondersteunt en wat daar niet uit volgt.",
      "example": "Schrijf bij R² = 0,70 dat het model 70% van de variatie in salaris verklaart, niet alleen het getal.",
      "lesson": "tentamen",
      "refs": [
        {
          "source": "programma",
          "page": 4,
          "locator": "Toetsing en literatuur, PDF-pagina 4 tot en met 5"
        },
        {
          "source": "exam2025",
          "page": 11,
          "locator": "Uitwerkingen met berekening en conclusie"
        }
      ]
    },
    {
      "id": "remedie",
      "term": "Remedie",
      "aliases": [
        "remedies",
        "modelaanpassing"
      ],
      "definition": "Een inhoudelijk passende reactie op een vastgesteld modelprobleem, gevolgd door opnieuw schatten en controleren waar nodig.",
      "example": "Bij een duidelijke kromming onderzoek je een passende modelvorm in plaats van willekeurig punten weg te laten.",
      "lesson": "tentamen",
      "refs": [
        {
          "source": "programma",
          "page": 4,
          "locator": "Toetsing en literatuur, PDF-pagina 4 tot en met 5"
        },
        {
          "source": "exam2025",
          "page": 11,
          "locator": "Uitwerkingen met berekening en conclusie"
        }
      ]
    },
    {
      "id": "schatting",
      "term": "Schatting",
      "aliases": [
        "schattingen",
        "schatten",
        "geschatte waarde"
      ],
      "definition": "De uitkomst waarmee je een onbekende populatiewaarde benadert. De schatter is de rekenregel; de schatting is het getal dat deze regel met jouw gegevens oplevert.",
      "example": "De directe schatter Nw̄ levert met jouw invoer de schatting € 80.000 op.",
      "lesson": "beginnen",
      "refs": [
        {
          "source": "slides",
          "page": 12,
          "locator": "Inleiding schatten, PDF-pagina 12 tot en met 15"
        }
      ]
    },
    {
      "id": "populatietotaal",
      "term": "Populatietotaal",
      "aliases": [
        "populatietotalen",
        "totale populatiewaarde"
      ],
      "definition": "De som van de betreffende waarden van alle elementen in de populatie. Bij SRA-geldbedragschattingen is het werkelijke totaal W de onbekende grootheid die je wilt schatten.",
      "example": "Drie artikelen met werkelijke waarden 10, 20 en 30 vormen samen een populatietotaal van 60.",
      "lesson": "beginnen",
      "refs": [
        {
          "source": "slides",
          "page": 12,
          "locator": "Inleiding schatten, PDF-pagina 12 tot en met 15"
        }
      ]
    },
    {
      "id": "toets",
      "term": "Statistische toets",
      "aliases": [
        "statistische toetsen",
        "toets",
        "toetsen",
        "toetsing"
      ],
      "definition": "Een procedure waarmee je beoordeelt of de steekproef voldoende bewijs tegen een nulhypothese geeft, met een vooraf gekozen risicogrens en toetsrichting.",
      "example": "Je toetst of de populatiehelling positief is in plaats van alleen te kijken of de getekende lijn stijgt.",
      "lesson": "toetsen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 39 tot en met 43; vergelijk formule 61 en 62 op PDF-pagina 4"
        },
        {
          "source": "attentie",
          "page": 4,
          "locator": "Toetsen, PDF-pagina 4 tot en met 5 en 8"
        }
      ]
    },
    {
      "id": "lineair-verband",
      "term": "Lineair verband",
      "aliases": [
        "lineaire samenhang",
        "lineair",
        "lineaire",
        "lineaire verbanden"
      ],
      "definition": "Een verband dat met een rechte lijn wordt beschreven. Bij een vaste helling hoort bij één extra eenheid x steeds dezelfde verandering in de voorspelde y.",
      "example": "Bij ŷ = 10 + 2x geeft iedere extra x steeds 2 extra voorspelde y.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "symmetrie",
      "term": "Symmetrie",
      "aliases": [
        "symmetrisch",
        "symmetrische"
      ],
      "definition": "Een vorm waarvan de linker- en rechterkant elkaars spiegelbeeld zijn. Bij een symmetrisch interval liggen de grenzen even ver van het midden.",
      "example": "De grenzen 96 en 104 liggen beide 4 van het midden 100.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "homogene-groep",
      "term": "Homogene groep",
      "aliases": [
        "homogene groepen",
        "homogeen",
        "homogene"
      ],
      "definition": "Een groep waarvan de relevante waarden relatief weinig uiteenlopen. Bij stratificatie probeer je binnen groepen minder spreiding te krijgen.",
      "example": "Artikelen in dezelfde prijsklasse kunnen onderling gelijksoortiger zijn dan een gemengde voorraad.",
      "lesson": "stratificatie",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 25 tot en met 29"
        },
        {
          "source": "exam2025",
          "page": 12,
          "locator": "Vraag 4 tot en met 6: allocatie en topstratum"
        }
      ]
    },
    {
      "id": "foutpercentage",
      "term": "Foutpercentage",
      "aliases": [
        "foutpercentages"
      ],
      "definition": "De fout uitgedrukt als aandeel van een gekozen basis. Bij de quotiëntschatter is 1 − q de foutfractie ten opzichte van de totale boekwaarde in de steekproef.",
      "example": "Goedratio q = 0,95 betekent een foutfractie van 0,05, oftewel 5% van de boekwaarde.",
      "lesson": "quotient",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formules 12 tot en met 17: quotiëntschatter"
        },
        {
          "source": "slides",
          "page": 23,
          "locator": "Quotiëntschatter en toepassingsvoorwaarden"
        }
      ]
    },
    {
      "id": "resterende-ratiospreiding",
      "term": "Resterende spreiding bij de quotiëntschatter",
      "aliases": [
        "resterende spreiding",
        "s_q"
      ],
      "definition": "De tussenmaat s_q uit formule 13 voor wat na de geschatte verhouding overblijft. Ondanks de aanduiding in het formuleblad heeft deze berekening de geldeenheid van b en w; zij is niet de standaardfout van het populatietotaal.",
      "example": "s_q = € 7,60 wordt nog met N/√n en de eindigheidscorrectie doorgerekend naar de totale standaardfout.",
      "lesson": "quotient",
      "refs": [
        {
          "source": "formules",
          "page": 1,
          "locator": "Formules 12 tot en met 17: quotiëntschatter"
        },
        {
          "source": "slides",
          "page": 23,
          "locator": "Quotiëntschatter en toepassingsvoorwaarden"
        }
      ]
    },
    {
      "id": "effectieve-vrijheidsgraden",
      "term": "Effectieve vrijheidsgraden",
      "aliases": [
        "effectieve df"
      ],
      "definition": "De vrijheidsgraden die bij het samengestelde interval horen. Volgens de SRA-formulebladroute voor strata worden ze in de opgave gegeven; neem niet automatisch het totale n − 1.",
      "example": "Geeft een strata-opgave effectieve df = 109, dan kies je de t-tabelrij volgens de bijbehorende cursusregel.",
      "lesson": "stratificatie",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 25 tot en met 29"
        },
        {
          "source": "exam2025",
          "page": 12,
          "locator": "Vraag 4 tot en met 6: allocatie en topstratum"
        }
      ]
    },
    {
      "id": "kromming",
      "term": "Kromming",
      "aliases": [
        "krom verband",
        "kromme verbanden",
        "boogvorm"
      ],
      "definition": "Een verandering van richting of helling waardoor het patroon niet goed met één rechte lijn wordt beschreven. Kromming in residuen kan op een ongeschikte lineaire modelvorm wijzen.",
      "example": "Negatieve residuen in het midden en positieve aan beide randen vormen een boog.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "dw-grenzen",
      "term": "Durbin-Watson-tabelgrenzen",
      "aliases": [
        "dL",
        "dU",
        "Durbin-Watson-grenzen"
      ],
      "definition": "De twee tabelgrenzen dL en dU waarmee de Durbin-Watson-uitkomst wordt beoordeeld. Ze horen bij de steekproefomvang n en het aantal verklarende variabelen k.",
      "example": "Bij dL = 1,35 en dU = 1,49 is 1,40 tussen de grenzen onbeslist.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 44 tot en met 49"
        },
        {
          "source": "attentie",
          "page": 5,
          "locator": "Regressiediagnostiek, PDF-pagina 5 tot en met 6"
        }
      ]
    },
    {
      "id": "realisatie",
      "term": "Realisatie",
      "aliases": [
        "realisaties",
        "gerealiseerde waarde",
        "gerealiseerde uitkomst"
      ],
      "definition": "De werkelijk waargenomen nieuwe uitkomst die je met een voorspelling kunt vergelijken. Buiten een voorspellingsinterval vallen is een signaal voor onderzoek, geen automatische verklaring.",
      "example": "De voorspelling is 30, maar de later gemeten uitkomst is 35; 35 is de realisatie.",
      "lesson": "voorspellen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formule 50: individueel voorspellingsinterval"
        },
        {
          "source": "attentie",
          "page": 6,
          "locator": "Voorspelling"
        }
      ]
    },
    {
      "id": "model-r",
      "term": "Model-R",
      "aliases": [
        "Model Summary R",
        "modelcorrelatie"
      ],
      "definition": "De niet-negatieve R uit SPSS Model Summary. Gebruik het teken van de coëfficiënt B of de correlatie r uit Correlations om de richting van het verband te bepalen.",
      "example": "Een dalend enkelvoudig verband kan r = −0,8 hebben terwijl Model Summary R = 0,8 toont.",
      "lesson": "regressielijn",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 30 tot en met 34"
        },
        {
          "source": "attentie",
          "page": 3,
          "locator": "Enkelvoudige regressie, PDF-pagina 3 tot en met 4"
        }
      ]
    },
    {
      "id": "model-fit",
      "term": "Model fit",
      "aliases": [
        "fitmaat",
        "fitmaten",
        "passing",
        "modelpassing"
      ],
      "definition": "Hoe goed het model de gebruikte gegevens beschrijft. R² en adjusted R² geven aspecten van die passing weer; goede passing vervangt geen diagnose of validatie.",
      "example": "Een hoge R² op de training kan samengaan met een hoge MSPR op nieuwe gegevens.",
      "lesson": "anova",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 35 tot en met 43"
        },
        {
          "source": "exam2024",
          "page": 4,
          "locator": "Vraag 9 tot en met 10: ANOVA"
        }
      ]
    },
    {
      "id": "kandidaatvariabele",
      "term": "Kandidaatvariabele",
      "aliases": [
        "kandidaatvariabelen",
        "kandidaten"
      ],
      "definition": "Een verklarende variabele die bij modelselectie overwogen wordt, maar niet noodzakelijk in het uiteindelijke model blijft.",
      "example": "Backward begint met alle kandidaten en kan een variabele met te hoge p verwijderen.",
      "lesson": "modelbouw",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formules 59 tot en met 63"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Modelbouw en multicollineariteit, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "verwijderingsgrens",
      "term": "Verwijderingsgrens",
      "aliases": [
        "selectiegrens",
        "selectiecriterium",
        "selectiecriteria"
      ],
      "definition": "Het opgegeven criterium waarmee een selectieprocedure beslist of een variabele voldoende bijdraagt. Gebruik de grens uit de opgave en verwar haar niet met het automatisch halveren van een tweezijdige p.",
      "example": "Bij een gegeven verwijderingsgrens 0,10 is een p van 0,18 een kandidaat voor verwijderen.",
      "lesson": "modelbouw",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formules 59 tot en met 63"
        },
        {
          "source": "attentie",
          "page": 7,
          "locator": "Modelbouw en multicollineariteit, PDF-pagina 7 tot en met 8"
        }
      ]
    },
    {
      "id": "voetnoot",
      "term": "Tabelvoetnoot",
      "aliases": [
        "tabelvoetnoten",
        "voetnoot",
        "voetnoten"
      ],
      "definition": "Toelichting onder een tabel met informatie die de interpretatie bepaalt, zoals afhankelijke variabele, opgenomen verklarende variabelen, selectieprocedure of weging.",
      "example": "Controleer in de voetnoot of y het salaris of ln(salaris) is voordat je de coëfficiënten gebruikt.",
      "lesson": "validatie",
      "refs": [
        {
          "source": "formules",
          "page": 4,
          "locator": "Formule 64: voorspelfout op testgegevens"
        },
        {
          "source": "attentie",
          "page": 9,
          "locator": "Validatie, zie ook PDF-pagina 8"
        }
      ]
    },
    {
      "id": "anova-rijen",
      "term": "Regression, Residual en Total",
      "aliases": [
        "Regression",
        "Residual",
        "Total"
      ],
      "definition": "De drie rijen van de SRA-ANOVA-tabel: Regression is de door het model verklaarde variatie, Residual de resterende variatie en Total de totale variatie in y.",
      "example": "De SS-kolom kan achtereenvolgens 80, 20 en 100 tonen; verklaard plus resterend is totaal.",
      "lesson": "anova",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formules 35 tot en met 43"
        },
        {
          "source": "exam2024",
          "page": 4,
          "locator": "Vraag 9 tot en met 10: ANOVA"
        }
      ]
    },
    {
      "id": "onafhankelijke-strata",
      "term": "Onafhankelijke strata",
      "aliases": [
        "onafhankelijke schattingen"
      ],
      "definition": "Bij afzonderlijke onafhankelijke steekproeven per stratum hangen de toevallige schattingsafwijkingen niet met elkaar samen. Daarom tel je voor het totaal de varianties op en neem je daarna de wortel.",
      "example": "Standaardfouten 3 en 4 combineren tot √(3² + 4²) = 5, niet tot 7.",
      "lesson": "stratificatie",
      "refs": [
        {
          "source": "formules",
          "page": 2,
          "locator": "Formules 25 tot en met 29"
        },
        {
          "source": "exam2025",
          "page": 12,
          "locator": "Vraag 4 tot en met 6: allocatie en topstratum"
        }
      ]
    },
    {
      "id": "interval",
      "term": "Interval",
      "aliases": [
        "intervallen"
      ],
      "definition": "Een bereik tussen een onder- en bovengrens. Welke uitspraak je met dat bereik doet, hangt af van het soort interval: bijvoorbeeld een populatieparameter schatten of een nieuwe waarneming voorspellen.",
      "example": "[96; 104] loopt van 96 tot 104. Lees de vraag om te bepalen of dit een interval voor een totaal, gemiddelde of nieuwe uitkomst is.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "voorspelling",
      "term": "Voorspelling",
      "aliases": [
        "voorspellingen",
        "voorspellen"
      ],
      "definition": "Een met het geschatte model berekende uitkomst bij gekozen verklarende waarden. Een puntvoorspelling geeft één getal; een passend interval beschrijft de bijbehorende onzekerheid.",
      "example": "Vul x = 4 in ŷ = 10 + 2x in: de voorspelling is 18. De werkelijke nieuwe uitkomst kan daarvan afwijken.",
      "lesson": "voorspellen",
      "refs": [
        {
          "source": "formules",
          "page": 3,
          "locator": "Formule 50: individueel voorspellingsinterval"
        },
        {
          "source": "attentie",
          "page": 6,
          "locator": "Voorspelling"
        }
      ]
    },
    {
      "id": "nauwkeurigheid",
      "term": "Nauwkeurigheid",
      "aliases": [
        "precisie",
        "preciezer",
        "nauwkeuriger"
      ],
      "definition": "In de SRA-intervalberekeningen: hoe klein de onzekerheidsmarge E is. Een smaller interval is preciezer. Betrouwbaarheid gaat over de dekking van de intervalmethode en is dus een ander begrip.",
      "example": "Twee intervallen gebruiken beide 95% betrouwbaarheid. Het interval met marge € 1.000 is preciezer dan dat met marge € 2.000.",
      "lesson": "onzekerheid",
      "refs": [
        {
          "source": "slides",
          "page": 3,
          "locator": "Kans, betrouwbaarheid en schatten, PDF-pagina 3 tot en met 5 en 14 tot en met 17"
        },
        {
          "source": "programma",
          "page": 4,
          "locator": "Tabelregels"
        }
      ]
    },
    {
      "id": "referentieverdeling",
      "term": "Referentieverdeling",
      "aliases": [
        "referentieverdelingen",
        "normaalreferentie"
      ],
      "definition": "De theoretische verdeling waarmee je de waargenomen vorm vergelijkt. In het Q-Q-lab is dat een normaalreferentie; de vergelijking is een grafische aanwijzing en berekent geen p-waarde.",
      "example": "De horizontale coördinaten in het Q-Q-lab komen uit de normaalreferentie; de verticale uit de geordende demo-residuen.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "spss",
          "page": 19,
          "locator": "Normaliteitsanalyse; aanvullende uitleg bij de didactische Q-Q-grafiek in het SRA-lab"
        }
      ]
    },
    {
      "id": "scheefheid",
      "term": "Scheefheid",
      "aliases": [
        "scheef",
        "scheve",
        "schevere"
      ],
      "definition": "Een asymmetrische verdelingsvorm waarbij de waarden aan de ene kant anders uitlopen dan aan de andere kant. In het normaliteitslab kun je zo’n vormverschil tegenover de symmetrische normaalreferentie bekijken.",
      "example": "Enkele grote positieve residuen kunnen de rechterkant verder laten uitlopen dan de linkerkant.",
      "lesson": "diagnostiek",
      "refs": [
        {
          "source": "spss",
          "page": 19,
          "locator": "Residuenhistogram bij de normaliteitsanalyse; vormillustratie in het SRA-lab"
        }
      ]
    }
  ]
};
