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
          "explanation": "n is de steekproefomvang. N is de populatieomvang van 2.000."
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
          "explanation": "Ŵ is een schatting van het onbekende populatietotaal W."
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
          "explanation": "De eerste vraag vraagt om een omvang, eventueel met een interval. De andere vragen gaan over toetsen."
        }
      ],
      "lab": "populatie",
      "exam": null
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
          "explanation": "Je kwadrateert eerst beide waarden: 4 + 16 = 20."
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
          "explanation": "s = √225 = 15 euro."
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
          "explanation": "Dit is de standaardfout van het gemiddelde vóór een eventuele eindigheidscorrectie."
        }
      ],
      "lab": "spreiding",
      "exam": null
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
          "explanation": "α = 0,10; elke staart krijgt α/2 = 0,05."
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
          "explanation": "De totale breedte is 2E, dus E = 6.000."
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
          "explanation": "Het onderwijsprogramma schrijft de naast lagere beschikbare df voor."
        }
      ],
      "lab": "interval",
      "exam": null
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
        }
      ],
      "example": {
        "title": "Eigen rekenvoorbeeld: een voorraad van 1.000 artikelen",
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
          "explanation": "2.000 × 150 = 300.000."
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
          "explanation": "s_w hoort bij de werkelijke waarden."
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
          "explanation": "De teller N − n wordt 0. Bij volledige controle is er geen steekproefonzekerheid meer."
        }
      ],
      "lab": "schatter",
      "exam": "uitwerkingen:4:H8, opgave 1–3"
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
          "explanation": "e = b − w = 120 − 135 = −15."
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
          "explanation": "De slides noemen minstens 30 fouten, niet minstens 30 waarnemingen."
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
          "explanation": "Een kleine s_e geeft een kleine standaardfout van de geschatte totale fout."
        }
      ],
      "lab": "verschil",
      "exam": "exam2025:1:Vraag 1–3"
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
        "title": "Eigen voorbeeld: 95% van de boekwaarde",
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
          "explanation": "De goedratio is 90.000 / 100.000 = 0,90."
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
          "explanation": "De quotiëntschatter past bij een redelijk constante verhouding."
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
          "explanation": "Ŵ_Q = qB. Het bedrag 40.000 is de geschatte totale fout, niet de werkelijke waarde."
        }
      ],
      "lab": "quotient",
      "exam": null
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
          "explanation": "B − Nb̄ = 0, dus Ŵ_R = Nw̄."
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
          "explanation": "√(1 − 0,8²) = √0,36 = 0,6."
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
          "explanation": "Dit hoofdstuk gaat over het populatietotaal W."
        }
      ],
      "lab": "regressieschatter",
      "exam": "exam2024:1:Vraag 1–3"
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
          "explanation": "De benodigde omvang wordt naar boven afgerond."
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
          "explanation": "84 − 40 = 44."
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
          "explanation": "De verschilschatter gebruikt de spreiding van de verschillen."
        }
      ],
      "lab": "omvang",
      "exam": null
    },
    {
      "id": "stratificatie",
      "title": "Stratificatie en allocatie",
      "phase": "Schatten",
      "intro": "Verdeel een gemengde populatie in meer homogene groepen. Je schat elke groep afzonderlijk en voegt de uitkomsten samen.",
      "goals": [
        "Evenredige en Neyman-allocatie vergelijken",
        "Een topstratum goed verwerken",
        "Varianties in plaats van standaardafwijkingen optellen"
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
          "explanation": "600/1.000 × 100 = 60."
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
          "explanation": "√(3² + 4²) = 5."
        },
        {
          "id": "stratificatie-3",
          "prompt": "Wat is de steekproefvariantie van een integraal gecontroleerd topstratum?",
          "options": [
            "Nul",
            "Gelijk aan de boekwaarde",
            "Onbekend"
          ],
          "correct": 0,
          "explanation": "Alle elementen zijn gecontroleerd; er is geen steekproefonzekerheid voor dat stratum."
        }
      ],
      "lab": "strata",
      "exam": "exam2025:2:Vraag 4–6"
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
        }
      ],
      "example": {
        "title": "Eigen voorbeeld: kosten en productie",
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
          "explanation": "10 + 2×4 = 18."
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
          "explanation": "e = y − ŷ = 7."
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
          "explanation": "OLS kiest de coëfficiënten die Σe² minimaliseren."
        }
      ],
      "lab": "regressie",
      "exam": null
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
          "explanation": "R² = SSR/TotalSS = 0,80."
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
          "explanation": "n − k − 1 = 50 − 3 − 1 = 46."
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
          "explanation": "De standaardfout is √MSE = 4."
        }
      ],
      "lab": "anova",
      "exam": "exam2024:4:Vraag 9–10"
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
          "explanation": "Een dalend verband vraagt een negatieve hellingscoëfficiënt."
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
          "explanation": "De tweezijdige p wordt met de totale α vergeleken."
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
          "explanation": "De globale F-toets zegt dat minstens één coëfficiënt afwijkt van nul."
        }
      ],
      "lab": "toets",
      "exam": "exam2025:9:Vraag 21"
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
          "explanation": "Bij n > 100 gebruikt het formuleblad ±3."
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
          "explanation": "Cook’s Distance beoordeelt potentiële invloedrijke punten."
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
          "explanation": "H₀ is normaliteit van de residuen. De kleine p geeft aanleiding H₀ te verwerpen."
        }
      ],
      "lab": "diagnose",
      "exam": "exam2024:5:Vraag 11–12"
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
        }
      ],
      "example": {
        "title": "Tentamen 28 oktober 2024, vraag 13",
        "steps": [
          "Gegeven: ŷ = 7,159 + 0,099x; x₀ = x̄ = 228,1; n = 30; s_e = 1,25506.",
          "Puntvoorspelling: 7,159 + 0,099×228,1 = 29,7409.",
          "Omdat x₀ = x̄ is de laatste term onder de wortel nul.",
          "Bij 95% en df = 28 is t = 2,048. Marge = 2,048 × 1,25506 × √(1 + 1/30) ≈ 2,61.",
          "De officiële uitwerking geeft na afronding [27,1; 32,4]."
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
          "explanation": "Dan is de term (x₀ − x̄)² nul."
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
          "explanation": "Een nieuwe waarneming heeft ook individuele storing."
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
          "explanation": "Een afwijking is een signaal, geen automatische verklaring."
        }
      ],
      "lab": "voorspelling",
      "exam": "exam2024:5:Vraag 13"
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
          "explanation": "Beide vergelijken met dezelfde referentiegroep; het onderlinge verschil is 1.000 − 600 = 400."
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
          "explanation": "De constante telt niet mee."
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
          "explanation": "Adjusted R² weegt modelomvang mee."
        }
      ],
      "lab": "meervoudig",
      "exam": "exam2025:9:Vraag 19–20"
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
        }
      ],
      "example": {
        "title": "Eigen voorbeeld: een machtsfunctie",
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
          "explanation": "Een machtsfunctie wordt lineair door beide variabelen te logaritmeren."
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
          "explanation": "De omgekeerde bewerking van ln is exp."
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
          "explanation": "Op de oorspronkelijke schaal is exp(b₁) de vermenigvuldigingsfactor."
        }
      ],
      "lab": "transformatie",
      "exam": null
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
        "title": "Eigen voorbeeld: overlap en extra bijdrage",
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
          "explanation": "VIF = 1/0,25 = 4."
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
          "explanation": "Backward begint volledig en verwijdert stapsgewijs."
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
          "explanation": "Variabelen delen informatie; hun geschatte bijdrage hangt af van de overige opgenomen variabelen."
        }
      ],
      "lab": "modelbouw",
      "exam": null
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
        }
      ],
      "example": {
        "title": "Eigen validatievoorbeeld",
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
          "explanation": "(2² + (−4)²)/2 = 20/2 = 10."
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
          "explanation": "Gebruik Unstandardized B."
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
          "explanation": "Total df = n − 1, dus n = 50."
        }
      ],
      "lab": "validatie",
      "exam": null
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
          "title": "Route A: een waarde schatten",
          "html": "<ol><li>Gevraagd: gemiddelde, totaal, fout, interval of steekproefomvang?</li><li>Schrijf N, n, B, de benodigde steekproeftotalen, spreidingen en betrouwbaarheid op.</li><li>Kies de schatter en motiveer de keuze; controleer de toepassingsvoorwaarden.</li><li>Bereken puntschatting en de bijbehorende standaardfout.</li><li>Kies t en df; maak het interval of bereken de omvang.</li><li>Verwerk topstratum, afronding en de betekenis in euro’s.</li></ol>"
        },
        {
          "title": "Route B: een regressieonderzoek beoordelen",
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
          "explanation": "De vraag bepaalt het type antwoord en de passende methode."
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
          "explanation": "De attentiepunten vragen om verwijzing, conclusie en eventuele remedie."
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
          "explanation": "De checks trainen onderdelen; tentamens vragen ook samenhang en een volledige eigen uitwerking."
        }
      ],
      "lab": "keuzeroute",
      "exam": null
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
  ]
};
