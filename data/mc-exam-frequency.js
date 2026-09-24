/* Gegenereerd met scripts/build_mc_exam_frequency.py; bronkoppelingen in data/mc-exam-frequency-map.json. */
window.SRAMCExamFrequency = {
  "version": 1,
  "reviewed": "2026-09-24",
  "examCount": 9,
  "examLabel": "unieke tentamens",
  "administrationCount": 10,
  "method": "Expliciete vragen of deelvragen per inhoudelijk verschillend tentamen; een onderwerp telt per tentamen eenmaal. De verwijzingen zijn voorbeelden die het voorkomen aantonen, geen uitputtende opsomming van alle deelvragen. Onderwerpen kunnen overlappen. Dit is geen voorspelling van een volgend tentamen.",
  "duplicateNote": "Maart en juni 2020 bevatten dezelfde vragen en tellen eenmaal.",
  "duplicates": [
    {
      "id": "20200626",
      "date": "26-06-2020",
      "duplicateOf": "20200323"
    }
  ],
  "sources": [
    {
      "path": "data/exam-analysis.json",
      "sha256": "c7462972db994273dd497e2443852c4d0df36f2576b54cd5e6b0073013355788"
    },
    {
      "path": "data/exams.js",
      "sha256": "3cbc44c1b7217a6b394c272af83503eccd4a2ccea52b1c99b9bf0b45fc3f1dc4"
    },
    {
      "path": "data/mc-exam-frequency-map.json",
      "sha256": "3e451cf6153064722189a6985f4d792fd6968dd3200d8d33a91e0ab8f71a6aae"
    }
  ],
  "topics": {
    "beginnen": {
      "status": "not-counted",
      "count": null,
      "exams": [],
      "note": "Basisbegrippen worden binnen andere opgaven gebruikt en zijn niet afzonderlijk geïnventariseerd."
    },
    "rekenen": {
      "status": "not-counted",
      "count": null,
      "exams": [],
      "note": "Gemiddelde en spreiding worden binnen andere opgaven gebruikt en zijn niet afzonderlijk geïnventariseerd."
    },
    "onzekerheid": {
      "status": "not-counted",
      "count": null,
      "exams": [],
      "note": "De algemene basis over kans, betrouwbaarheid en tabellen is niet afzonderlijk geïnventariseerd. Intervalvragen zijn bij de betreffende schatter of regressie opgenomen."
    },
    "mpu": {
      "status": "counted",
      "count": 9,
      "exams": [
        {
          "id": "20200323",
          "label": "23-03-2020",
          "date": "23-03-2020",
          "questions": [
            11
          ],
          "evidence": [
            {
              "question": 11,
              "displayNumber": "1.11",
              "page": 5,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20200323/opgaven-05.jpg",
              "reasons": [
                "Ondergrens uit gestratificeerde werkelijke waarden: directe schatter per stratum."
              ]
            }
          ],
          "href": "bronnen/tentamens/20200323/opgaven.pdf#page=5"
        },
        {
          "id": "20211101",
          "label": "01-11-2021",
          "date": "01-11-2021",
          "questions": [
            1,
            2
          ],
          "evidence": [
            {
              "question": 1,
              "displayNumber": "1",
              "page": 3,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20211101/opgaven-03.jpg",
              "reasons": [
                "Voorraad Groningen zonder boekadministratie: interval op basis van werkelijke waarden en uitbreiding van de steekproef."
              ]
            },
            {
              "question": 2,
              "displayNumber": "2",
              "page": 3,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20211101/opgaven-03.jpg",
              "reasons": [
                "Voorraad Groningen zonder boekadministratie: interval op basis van werkelijke waarden en uitbreiding van de steekproef."
              ]
            }
          ],
          "href": "bronnen/tentamens/20211101/opgaven.pdf#page=3"
        },
        {
          "id": "20220316",
          "label": "16-03-2022",
          "date": "16-03-2022",
          "questions": [
            1,
            2,
            3,
            6,
            8
          ],
          "evidence": [
            {
              "question": 1,
              "displayNumber": "1",
              "page": 3,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20220316/opgaven-03.jpg",
              "reasons": [
                "Directe schatter, vergelijking met verschil en gestratificeerd totaal."
              ]
            },
            {
              "question": 2,
              "displayNumber": "2",
              "page": 3,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20220316/opgaven-03.jpg",
              "reasons": [
                "Directe schatter, vergelijking met verschil en gestratificeerd totaal."
              ]
            },
            {
              "question": 3,
              "displayNumber": "3",
              "page": 3,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20220316/opgaven-03.jpg",
              "reasons": [
                "Directe schatter, vergelijking met verschil en gestratificeerd totaal."
              ]
            },
            {
              "question": 6,
              "displayNumber": "6",
              "page": 3,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20220316/opgaven-03.jpg",
              "reasons": [
                "Directe schatter, vergelijking met verschil en gestratificeerd totaal."
              ]
            },
            {
              "question": 8,
              "displayNumber": "8",
              "page": 4,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20220316/opgaven-04.jpg",
              "reasons": [
                "Directe schatter, vergelijking met verschil en gestratificeerd totaal."
              ]
            }
          ],
          "href": "bronnen/tentamens/20220316/opgaven.pdf#page=3"
        },
        {
          "id": "20221031",
          "label": "31-10-2022",
          "date": "31-10-2022",
          "questions": [
            4,
            5,
            6
          ],
          "evidence": [
            {
              "question": 4,
              "displayNumber": "4",
              "page": 4,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20221031/opgaven-04.jpg",
              "reasons": [
                "Expliciet mean-per-unit, daarna directe schatting binnen twee strata."
              ]
            },
            {
              "question": 5,
              "displayNumber": "5",
              "page": 4,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20221031/opgaven-04.jpg",
              "reasons": [
                "Expliciet mean-per-unit, daarna directe schatting binnen twee strata."
              ]
            },
            {
              "question": 6,
              "displayNumber": "6",
              "page": 4,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20221031/opgaven-04.jpg",
              "reasons": [
                "Expliciet mean-per-unit, daarna directe schatting binnen twee strata."
              ]
            }
          ],
          "href": "bronnen/tentamens/20221031/opgaven.pdf#page=4"
        },
        {
          "id": "20230315",
          "label": "15-03-2023",
          "date": "15-03-2023",
          "questions": [
            5
          ],
          "evidence": [
            {
              "question": 5,
              "displayNumber": "5",
              "page": 4,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20230315/opgaven-04.jpg",
              "reasons": [
                "Gestratificeerd interval uit gemiddelden van werkelijke waarden."
              ]
            }
          ],
          "href": "bronnen/tentamens/20230315/opgaven.pdf#page=4"
        },
        {
          "id": "20231030",
          "label": "30-10-2023",
          "date": "30-10-2023",
          "questions": [
            2,
            7
          ],
          "evidence": [
            {
              "question": 2,
              "displayNumber": "2",
              "page": 3,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20231030/opgaven-03.jpg",
              "reasons": [
                "Directe ondergrens en expliciet MPU per stratum in vraag 7."
              ]
            },
            {
              "question": 7,
              "displayNumber": "7",
              "page": 4,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20231030/opgaven-04.jpg",
              "reasons": [
                "Directe ondergrens en expliciet MPU per stratum in vraag 7."
              ]
            }
          ],
          "href": "bronnen/tentamens/20231030/opgaven.pdf#page=3"
        },
        {
          "id": "20240318",
          "label": "18-03-2024",
          "date": "18-03-2024",
          "questions": [
            1,
            2,
            6,
            7
          ],
          "evidence": [
            {
              "question": 1,
              "displayNumber": "1",
              "page": 3,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20240318/opgaven-03.jpg",
              "reasons": [
                "Directe schatter, vergelijking met ratio en directe schatting binnen strata."
              ]
            },
            {
              "question": 2,
              "displayNumber": "2",
              "page": 3,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20240318/opgaven-03.jpg",
              "reasons": [
                "Directe schatter, vergelijking met ratio en directe schatting binnen strata."
              ]
            },
            {
              "question": 6,
              "displayNumber": "6",
              "page": 4,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20240318/opgaven-04.jpg",
              "reasons": [
                "Directe schatter, vergelijking met ratio en directe schatting binnen strata."
              ]
            },
            {
              "question": 7,
              "displayNumber": "7",
              "page": 4,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20240318/opgaven-04.jpg",
              "reasons": [
                "Directe schatter, vergelijking met ratio en directe schatting binnen strata."
              ]
            }
          ],
          "href": "bronnen/tentamens/20240318/opgaven.pdf#page=3"
        },
        {
          "id": "20241028",
          "label": "28-10-2024",
          "date": "28-10-2024",
          "questions": [
            3,
            5,
            6
          ],
          "evidence": [
            {
              "question": 3,
              "displayNumber": "3",
              "page": 1,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=1",
              "image": "bronnen/tentamens/20241028/opgaven-01.jpg",
              "reasons": [
                "Expliciete vergelijking met directe schatter en toepassing binnen strata."
              ]
            },
            {
              "question": 5,
              "displayNumber": "5",
              "page": 2,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=2",
              "image": "bronnen/tentamens/20241028/opgaven-02.jpg",
              "reasons": [
                "Expliciete vergelijking met directe schatter en toepassing binnen strata."
              ]
            },
            {
              "question": 6,
              "displayNumber": "6",
              "page": 2,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=2",
              "image": "bronnen/tentamens/20241028/opgaven-02.jpg",
              "reasons": [
                "Expliciete vergelijking met directe schatter en toepassing binnen strata."
              ]
            }
          ],
          "href": "bronnen/tentamens/20241028/opgaven.pdf#page=1"
        },
        {
          "id": "20250317",
          "label": "17-03-2025",
          "date": "17-03-2025",
          "questions": [
            5,
            6
          ],
          "evidence": [
            {
              "question": 5,
              "displayNumber": "5",
              "page": 2,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=2",
              "image": "bronnen/tentamens/20250317/opgaven-02.jpg",
              "reasons": [
                "Vraag 5 benoemt expliciet de MPU-schatter; vraag 6 vormt het bijbehorende interval."
              ]
            },
            {
              "question": 6,
              "displayNumber": "6",
              "page": 2,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=2",
              "image": "bronnen/tentamens/20250317/opgaven-02.jpg",
              "reasons": [
                "Vraag 5 benoemt expliciet de MPU-schatter; vraag 6 vormt het bijbehorende interval."
              ]
            }
          ],
          "href": "bronnen/tentamens/20250317/opgaven.pdf#page=2"
        }
      ],
      "note": "Toepassing van de directe schatter, ook binnen strata, of een expliciete vergelijking met een andere schatter."
    },
    "verschil": {
      "status": "counted",
      "count": 6,
      "exams": [
        {
          "id": "20200323",
          "label": "23-03-2020",
          "date": "23-03-2020",
          "questions": [
            1,
            2,
            3,
            4,
            5,
            7
          ],
          "evidence": [
            {
              "question": 1,
              "displayNumber": "1.1",
              "page": 3,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20200323/opgaven-03.jpg",
              "reasons": [
                "Toepassingsvoorwaarde, foutschatting, grens en vergelijking met de quotiëntschatter."
              ]
            },
            {
              "question": 2,
              "displayNumber": "1.2",
              "page": 3,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20200323/opgaven-03.jpg",
              "reasons": [
                "Toepassingsvoorwaarde, foutschatting, grens en vergelijking met de quotiëntschatter."
              ]
            },
            {
              "question": 3,
              "displayNumber": "1.3",
              "page": 3,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20200323/opgaven-03.jpg",
              "reasons": [
                "Toepassingsvoorwaarde, foutschatting, grens en vergelijking met de quotiëntschatter."
              ]
            },
            {
              "question": 4,
              "displayNumber": "1.4",
              "page": 4,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20200323/opgaven-04.jpg",
              "reasons": [
                "Toepassingsvoorwaarde, foutschatting, grens en vergelijking met de quotiëntschatter."
              ]
            },
            {
              "question": 5,
              "displayNumber": "1.5",
              "page": 4,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20200323/opgaven-04.jpg",
              "reasons": [
                "Toepassingsvoorwaarde, foutschatting, grens en vergelijking met de quotiëntschatter."
              ]
            },
            {
              "question": 7,
              "displayNumber": "1.7",
              "page": 4,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20200323/opgaven-04.jpg",
              "reasons": [
                "Toepassingsvoorwaarde, foutschatting, grens en vergelijking met de quotiëntschatter."
              ]
            }
          ],
          "href": "bronnen/tentamens/20200323/opgaven.pdf#page=3"
        },
        {
          "id": "20211101",
          "label": "01-11-2021",
          "date": "01-11-2021",
          "questions": [
            6,
            7
          ],
          "evidence": [
            {
              "question": 6,
              "displayNumber": "6",
              "page": 4,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20211101/opgaven-04.jpg",
              "reasons": [
                "Probed BV gebruikt volgens de casus de verschilschatter binnen strata."
              ]
            },
            {
              "question": 7,
              "displayNumber": "7",
              "page": 4,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20211101/opgaven-04.jpg",
              "reasons": [
                "Probed BV gebruikt volgens de casus de verschilschatter binnen strata."
              ]
            }
          ],
          "href": "bronnen/tentamens/20211101/opgaven.pdf#page=4"
        },
        {
          "id": "20220316",
          "label": "16-03-2022",
          "date": "16-03-2022",
          "questions": [
            4,
            5,
            6
          ],
          "evidence": [
            {
              "question": 4,
              "displayNumber": "4",
              "page": 3,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20220316/opgaven-03.jpg",
              "reasons": [
                "Toepassingsvoorwaarde, bovengrens en vergelijking met de directe schatter."
              ]
            },
            {
              "question": 5,
              "displayNumber": "5",
              "page": 3,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20220316/opgaven-03.jpg",
              "reasons": [
                "Toepassingsvoorwaarde, bovengrens en vergelijking met de directe schatter."
              ]
            },
            {
              "question": 6,
              "displayNumber": "6",
              "page": 3,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20220316/opgaven-03.jpg",
              "reasons": [
                "Toepassingsvoorwaarde, bovengrens en vergelijking met de directe schatter."
              ]
            }
          ],
          "href": "bronnen/tentamens/20220316/opgaven.pdf#page=3"
        },
        {
          "id": "20221031",
          "label": "31-10-2022",
          "date": "31-10-2022",
          "questions": [
            1
          ],
          "evidence": [
            {
              "question": 1,
              "displayNumber": "1",
              "page": 3,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20221031/opgaven-03.jpg",
              "reasons": [
                "Expliciete vergelijking: waarom is de quotiëntschatter hier geschikter dan de verschilschatter?"
              ]
            }
          ],
          "href": "bronnen/tentamens/20221031/opgaven.pdf#page=3"
        },
        {
          "id": "20231030",
          "label": "30-10-2023",
          "date": "30-10-2023",
          "questions": [
            3,
            4,
            5
          ],
          "evidence": [
            {
              "question": 3,
              "displayNumber": "3",
              "page": 3,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20231030/opgaven-03.jpg",
              "reasons": [
                "Standaardafwijking van de verschillen, ondergrens en uitbreiding op basis van de verschilschatter."
              ]
            },
            {
              "question": 4,
              "displayNumber": "4",
              "page": 3,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20231030/opgaven-03.jpg",
              "reasons": [
                "Standaardafwijking van de verschillen, ondergrens en uitbreiding op basis van de verschilschatter."
              ]
            },
            {
              "question": 5,
              "displayNumber": "5",
              "page": 3,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20231030/opgaven-03.jpg",
              "reasons": [
                "Standaardafwijking van de verschillen, ondergrens en uitbreiding op basis van de verschilschatter."
              ]
            }
          ],
          "href": "bronnen/tentamens/20231030/opgaven.pdf#page=3"
        },
        {
          "id": "20250317",
          "label": "17-03-2025",
          "date": "17-03-2025",
          "questions": [
            1,
            2,
            3
          ],
          "evidence": [
            {
              "question": 1,
              "displayNumber": "1",
              "page": 1,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=1",
              "image": "bronnen/tentamens/20250317/opgaven-01.jpg",
              "reasons": [
                "Voorkeur, toepassingsvoorwaarde en schattingsinterval met de verschilschatter."
              ]
            },
            {
              "question": 2,
              "displayNumber": "2",
              "page": 1,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=1",
              "image": "bronnen/tentamens/20250317/opgaven-01.jpg",
              "reasons": [
                "Voorkeur, toepassingsvoorwaarde en schattingsinterval met de verschilschatter."
              ]
            },
            {
              "question": 3,
              "displayNumber": "3",
              "page": 1,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=1",
              "image": "bronnen/tentamens/20250317/opgaven-01.jpg",
              "reasons": [
                "Voorkeur, toepassingsvoorwaarde en schattingsinterval met de verschilschatter."
              ]
            }
          ],
          "href": "bronnen/tentamens/20250317/opgaven.pdf#page=1"
        }
      ],
      "note": "Toepassing, toepassingsvoorwaarden of expliciete vergelijking van de verschilschatter, ook binnen strata."
    },
    "quotient": {
      "status": "counted",
      "count": 4,
      "exams": [
        {
          "id": "20200323",
          "label": "23-03-2020",
          "date": "23-03-2020",
          "questions": [
            4,
            5,
            6,
            7
          ],
          "evidence": [
            {
              "question": 4,
              "displayNumber": "1.4",
              "page": 4,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20200323/opgaven-04.jpg",
              "reasons": [
                "Vergelijking van schatters, goedratio en ondergrens met quotiëntschatter."
              ]
            },
            {
              "question": 5,
              "displayNumber": "1.5",
              "page": 4,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20200323/opgaven-04.jpg",
              "reasons": [
                "Vergelijking van schatters, goedratio en ondergrens met quotiëntschatter."
              ]
            },
            {
              "question": 6,
              "displayNumber": "1.6",
              "page": 4,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20200323/opgaven-04.jpg",
              "reasons": [
                "Vergelijking van schatters, goedratio en ondergrens met quotiëntschatter."
              ]
            },
            {
              "question": 7,
              "displayNumber": "1.7",
              "page": 4,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20200323/opgaven-04.jpg",
              "reasons": [
                "Vergelijking van schatters, goedratio en ondergrens met quotiëntschatter."
              ]
            }
          ],
          "href": "bronnen/tentamens/20200323/opgaven.pdf#page=4"
        },
        {
          "id": "20211101",
          "label": "01-11-2021",
          "date": "01-11-2021",
          "questions": [
            3,
            4
          ],
          "evidence": [
            {
              "question": 3,
              "displayNumber": "3",
              "page": 3,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20211101/opgaven-03.jpg",
              "reasons": [
                "Filiaal Zwolle: ondergrens met quotiëntschatter en voorwaarde voor kleinere steekproef."
              ]
            },
            {
              "question": 4,
              "displayNumber": "4",
              "page": 3,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20211101/opgaven-03.jpg",
              "reasons": [
                "Filiaal Zwolle: ondergrens met quotiëntschatter en voorwaarde voor kleinere steekproef."
              ]
            }
          ],
          "href": "bronnen/tentamens/20211101/opgaven.pdf#page=3"
        },
        {
          "id": "20221031",
          "label": "31-10-2022",
          "date": "31-10-2022",
          "questions": [
            1,
            2
          ],
          "evidence": [
            {
              "question": 1,
              "displayNumber": "1",
              "page": 3,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20221031/opgaven-03.jpg",
              "reasons": [
                "Voorkeur voor quotiëntschatter en bovengrens van werkelijke inkomens."
              ]
            },
            {
              "question": 2,
              "displayNumber": "2",
              "page": 3,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20221031/opgaven-03.jpg",
              "reasons": [
                "Voorkeur voor quotiëntschatter en bovengrens van werkelijke inkomens."
              ]
            }
          ],
          "href": "bronnen/tentamens/20221031/opgaven.pdf#page=3"
        },
        {
          "id": "20240318",
          "label": "18-03-2024",
          "date": "18-03-2024",
          "questions": [
            2,
            3
          ],
          "evidence": [
            {
              "question": 2,
              "displayNumber": "2",
              "page": 3,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20240318/opgaven-03.jpg",
              "reasons": [
                "Nauwkeurigheid van de quotiëntschatter en ondergrens met dezelfde methode."
              ]
            },
            {
              "question": 3,
              "displayNumber": "3",
              "page": 3,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20240318/opgaven-03.jpg",
              "reasons": [
                "Nauwkeurigheid van de quotiëntschatter en ondergrens met dezelfde methode."
              ]
            }
          ],
          "href": "bronnen/tentamens/20240318/opgaven.pdf#page=3"
        }
      ],
      "note": "Toepassing, toepassingsvoorwaarden of expliciete vergelijking van de quotiëntschatter."
    },
    "regressieschatter": {
      "status": "counted",
      "count": 2,
      "exams": [
        {
          "id": "20230315",
          "label": "15-03-2023",
          "date": "15-03-2023",
          "questions": [
            1,
            2
          ],
          "evidence": [
            {
              "question": 1,
              "displayNumber": "1",
              "page": 3,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20230315/opgaven-03.jpg",
              "reasons": [
                "Elkeukapp BV kiest expliciet de regressieschatter; interval en conclusie."
              ]
            },
            {
              "question": 2,
              "displayNumber": "2",
              "page": 3,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20230315/opgaven-03.jpg",
              "reasons": [
                "Elkeukapp BV kiest expliciet de regressieschatter; interval en conclusie."
              ]
            }
          ],
          "href": "bronnen/tentamens/20230315/opgaven.pdf#page=3"
        },
        {
          "id": "20241028",
          "label": "28-10-2024",
          "date": "28-10-2024",
          "questions": [
            1,
            2,
            3
          ],
          "evidence": [
            {
              "question": 1,
              "displayNumber": "1",
              "page": 1,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=1",
              "image": "bronnen/tentamens/20241028/opgaven-01.jpg",
              "reasons": [
                "Witgoedelectro BV kiest expliciet de regressieschatter; interval, omvang en vergelijking."
              ]
            },
            {
              "question": 2,
              "displayNumber": "2",
              "page": 1,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=1",
              "image": "bronnen/tentamens/20241028/opgaven-01.jpg",
              "reasons": [
                "Witgoedelectro BV kiest expliciet de regressieschatter; interval, omvang en vergelijking."
              ]
            },
            {
              "question": 3,
              "displayNumber": "3",
              "page": 1,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=1",
              "image": "bronnen/tentamens/20241028/opgaven-01.jpg",
              "reasons": [
                "Witgoedelectro BV kiest expliciet de regressieschatter; interval, omvang en vergelijking."
              ]
            }
          ],
          "href": "bronnen/tentamens/20241028/opgaven.pdf#page=1"
        }
      ],
      "note": "De regressieschatter voor een populatietotaal met boekwaarden als hulpinformatie."
    },
    "steekproefomvang": {
      "status": "counted",
      "count": 4,
      "exams": [
        {
          "id": "20211101",
          "label": "01-11-2021",
          "date": "01-11-2021",
          "questions": [
            2
          ],
          "evidence": [
            {
              "question": 2,
              "displayNumber": "2",
              "page": 3,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20211101/opgaven-03.jpg",
              "reasons": [
                "Benodigde steekproefomvang"
              ]
            }
          ],
          "href": "bronnen/tentamens/20211101/opgaven.pdf#page=3"
        },
        {
          "id": "20220316",
          "label": "16-03-2022",
          "date": "16-03-2022",
          "questions": [
            3
          ],
          "evidence": [
            {
              "question": 3,
              "displayNumber": "3",
              "page": 3,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20220316/opgaven-03.jpg",
              "reasons": [
                "Benodigde steekproefomvang"
              ]
            }
          ],
          "href": "bronnen/tentamens/20220316/opgaven.pdf#page=3"
        },
        {
          "id": "20231030",
          "label": "30-10-2023",
          "date": "30-10-2023",
          "questions": [
            5
          ],
          "evidence": [
            {
              "question": 5,
              "displayNumber": "5",
              "page": 3,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20231030/opgaven-03.jpg",
              "reasons": [
                "Benodigde steekproefomvang"
              ]
            }
          ],
          "href": "bronnen/tentamens/20231030/opgaven.pdf#page=3"
        },
        {
          "id": "20241028",
          "label": "28-10-2024",
          "date": "28-10-2024",
          "questions": [
            2
          ],
          "evidence": [
            {
              "question": 2,
              "displayNumber": "2",
              "page": 1,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=1",
              "image": "bronnen/tentamens/20241028/opgaven-01.jpg",
              "reasons": [
                "Benodigde steekproefomvang"
              ]
            }
          ],
          "href": "bronnen/tentamens/20241028/opgaven.pdf#page=1"
        }
      ],
      "note": "Berekening van de benodigde totale steekproefomvang of uitbreiding."
    },
    "stratificatie": {
      "status": "counted",
      "count": 9,
      "exams": [
        {
          "id": "20200323",
          "label": "23-03-2020",
          "date": "23-03-2020",
          "questions": [
            8,
            9,
            10,
            11
          ],
          "evidence": [
            {
              "question": 8,
              "displayNumber": "1.8",
              "page": 5,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20200323/opgaven-05.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 9,
              "displayNumber": "1.9",
              "page": 5,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20200323/opgaven-05.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 10,
              "displayNumber": "1.10",
              "page": 5,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20200323/opgaven-05.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 11,
              "displayNumber": "1.11",
              "page": 5,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20200323/opgaven-05.jpg",
              "reasons": [
                "Stratificatie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20200323/opgaven.pdf#page=5"
        },
        {
          "id": "20211101",
          "label": "01-11-2021",
          "date": "01-11-2021",
          "questions": [
            5,
            6,
            7
          ],
          "evidence": [
            {
              "question": 5,
              "displayNumber": "5",
              "page": 4,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20211101/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 6,
              "displayNumber": "6",
              "page": 4,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20211101/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 7,
              "displayNumber": "7",
              "page": 4,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20211101/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20211101/opgaven.pdf#page=4"
        },
        {
          "id": "20220316",
          "label": "16-03-2022",
          "date": "16-03-2022",
          "questions": [
            7,
            8
          ],
          "evidence": [
            {
              "question": 7,
              "displayNumber": "7",
              "page": 4,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20220316/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 8,
              "displayNumber": "8",
              "page": 4,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20220316/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20220316/opgaven.pdf#page=4"
        },
        {
          "id": "20221031",
          "label": "31-10-2022",
          "date": "31-10-2022",
          "questions": [
            5,
            6,
            7
          ],
          "evidence": [
            {
              "question": 5,
              "displayNumber": "5",
              "page": 4,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20221031/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 6,
              "displayNumber": "6",
              "page": 4,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20221031/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 7,
              "displayNumber": "7",
              "page": 4,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20221031/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20221031/opgaven.pdf#page=4"
        },
        {
          "id": "20230315",
          "label": "15-03-2023",
          "date": "15-03-2023",
          "questions": [
            3,
            4,
            5
          ],
          "evidence": [
            {
              "question": 3,
              "displayNumber": "3",
              "page": 4,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20230315/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 4,
              "displayNumber": "4",
              "page": 4,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20230315/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 5,
              "displayNumber": "5",
              "page": 4,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20230315/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20230315/opgaven.pdf#page=4"
        },
        {
          "id": "20231030",
          "label": "30-10-2023",
          "date": "30-10-2023",
          "questions": [
            6,
            7
          ],
          "evidence": [
            {
              "question": 6,
              "displayNumber": "6",
              "page": 4,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20231030/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 7,
              "displayNumber": "7",
              "page": 4,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20231030/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20231030/opgaven.pdf#page=4"
        },
        {
          "id": "20240318",
          "label": "18-03-2024",
          "date": "18-03-2024",
          "questions": [
            4,
            5,
            6,
            7
          ],
          "evidence": [
            {
              "question": 4,
              "displayNumber": "4",
              "page": 3,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20240318/opgaven-03.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 5,
              "displayNumber": "5",
              "page": 4,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20240318/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 6,
              "displayNumber": "6",
              "page": 4,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20240318/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 7,
              "displayNumber": "7",
              "page": 4,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20240318/opgaven-04.jpg",
              "reasons": [
                "Stratificatie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20240318/opgaven.pdf#page=3"
        },
        {
          "id": "20241028",
          "label": "28-10-2024",
          "date": "28-10-2024",
          "questions": [
            4,
            5,
            6,
            7
          ],
          "evidence": [
            {
              "question": 4,
              "displayNumber": "4",
              "page": 2,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=2",
              "image": "bronnen/tentamens/20241028/opgaven-02.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 5,
              "displayNumber": "5",
              "page": 2,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=2",
              "image": "bronnen/tentamens/20241028/opgaven-02.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 6,
              "displayNumber": "6",
              "page": 2,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=2",
              "image": "bronnen/tentamens/20241028/opgaven-02.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 7,
              "displayNumber": "7",
              "page": 2,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=2",
              "image": "bronnen/tentamens/20241028/opgaven-02.jpg",
              "reasons": [
                "Stratificatie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20241028/opgaven.pdf#page=2"
        },
        {
          "id": "20250317",
          "label": "17-03-2025",
          "date": "17-03-2025",
          "questions": [
            4,
            5,
            6
          ],
          "evidence": [
            {
              "question": 4,
              "displayNumber": "4",
              "page": 2,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=2",
              "image": "bronnen/tentamens/20250317/opgaven-02.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 5,
              "displayNumber": "5",
              "page": 2,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=2",
              "image": "bronnen/tentamens/20250317/opgaven-02.jpg",
              "reasons": [
                "Stratificatie"
              ]
            },
            {
              "question": 6,
              "displayNumber": "6",
              "page": 2,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=2",
              "image": "bronnen/tentamens/20250317/opgaven-02.jpg",
              "reasons": [
                "Stratificatie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20250317/opgaven.pdf#page=2"
        }
      ],
      "note": "Stratificatie, allocatie of een gestratificeerde schatting."
    },
    "regressielijn": {
      "status": "not-counted",
      "count": null,
      "exams": [],
      "note": "De basis van regressielijnen wordt binnen andere regressievragen gebruikt en is niet afzonderlijk geïnventariseerd."
    },
    "anova": {
      "status": "counted",
      "count": 9,
      "exams": [
        {
          "id": "20200323",
          "label": "23-03-2020",
          "date": "23-03-2020",
          "questions": [
            16,
            18,
            27
          ],
          "evidence": [
            {
              "question": 16,
              "displayNumber": "2.5",
              "page": 10,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20200323/opgaven-10.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 18,
              "displayNumber": "2.7",
              "page": 10,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20200323/opgaven-10.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 27,
              "displayNumber": "3.7",
              "page": 15,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=15",
              "image": "bronnen/tentamens/20200323/opgaven-15.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            }
          ],
          "href": "bronnen/tentamens/20200323/opgaven.pdf#page=10"
        },
        {
          "id": "20211101",
          "label": "01-11-2021",
          "date": "01-11-2021",
          "questions": [
            15,
            16
          ],
          "evidence": [
            {
              "question": 15,
              "displayNumber": "15",
              "page": 11,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=11",
              "image": "bronnen/tentamens/20211101/opgaven-11.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 16,
              "displayNumber": "16",
              "page": 11,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=11",
              "image": "bronnen/tentamens/20211101/opgaven-11.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            }
          ],
          "href": "bronnen/tentamens/20211101/opgaven.pdf#page=11"
        },
        {
          "id": "20220316",
          "label": "16-03-2022",
          "date": "16-03-2022",
          "questions": [
            10,
            13
          ],
          "evidence": [
            {
              "question": 10,
              "displayNumber": "10",
              "page": 5,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20220316/opgaven-05.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 13,
              "displayNumber": "13",
              "page": 7,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=7",
              "image": "bronnen/tentamens/20220316/opgaven-07.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            }
          ],
          "href": "bronnen/tentamens/20220316/opgaven.pdf#page=5"
        },
        {
          "id": "20221031",
          "label": "31-10-2022",
          "date": "31-10-2022",
          "questions": [
            10,
            12,
            15
          ],
          "evidence": [
            {
              "question": 10,
              "displayNumber": "10",
              "page": 6,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20221031/opgaven-06.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 12,
              "displayNumber": "12",
              "page": 9,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20221031/opgaven-09.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 15,
              "displayNumber": "15",
              "page": 12,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=12",
              "image": "bronnen/tentamens/20221031/opgaven-12.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            }
          ],
          "href": "bronnen/tentamens/20221031/opgaven.pdf#page=6"
        },
        {
          "id": "20230315",
          "label": "15-03-2023",
          "date": "15-03-2023",
          "questions": [
            10,
            17,
            19
          ],
          "evidence": [
            {
              "question": 10,
              "displayNumber": "10",
              "page": 6,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20230315/opgaven-06.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 17,
              "displayNumber": "17",
              "page": 12,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=12",
              "image": "bronnen/tentamens/20230315/opgaven-12.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 19,
              "displayNumber": "19",
              "page": 13,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=13",
              "image": "bronnen/tentamens/20230315/opgaven-13.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            }
          ],
          "href": "bronnen/tentamens/20230315/opgaven.pdf#page=6"
        },
        {
          "id": "20231030",
          "label": "30-10-2023",
          "date": "30-10-2023",
          "questions": [
            10,
            17,
            18
          ],
          "evidence": [
            {
              "question": 10,
              "displayNumber": "10",
              "page": 6,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20231030/opgaven-06.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 17,
              "displayNumber": "17",
              "page": 10,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20231030/opgaven-10.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 18,
              "displayNumber": "18",
              "page": 10,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20231030/opgaven-10.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            }
          ],
          "href": "bronnen/tentamens/20231030/opgaven.pdf#page=6"
        },
        {
          "id": "20240318",
          "label": "18-03-2024",
          "date": "18-03-2024",
          "questions": [
            8,
            12,
            13,
            23
          ],
          "evidence": [
            {
              "question": 8,
              "displayNumber": "8",
              "page": 5,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20240318/opgaven-05.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 12,
              "displayNumber": "12",
              "page": 6,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20240318/opgaven-06.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 13,
              "displayNumber": "13",
              "page": 6,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20240318/opgaven-06.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 23,
              "displayNumber": "23",
              "page": 10,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20240318/opgaven-10.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            }
          ],
          "href": "bronnen/tentamens/20240318/opgaven.pdf#page=5"
        },
        {
          "id": "20241028",
          "label": "28-10-2024",
          "date": "28-10-2024",
          "questions": [
            9,
            10,
            16
          ],
          "evidence": [
            {
              "question": 9,
              "displayNumber": "9",
              "page": 3,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20241028/opgaven-03.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 10,
              "displayNumber": "10",
              "page": 4,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20241028/opgaven-04.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 16,
              "displayNumber": "16",
              "page": 9,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20241028/opgaven-09.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            }
          ],
          "href": "bronnen/tentamens/20241028/opgaven.pdf#page=3"
        },
        {
          "id": "20250317",
          "label": "17-03-2025",
          "date": "17-03-2025",
          "questions": [
            7,
            8,
            11
          ],
          "evidence": [
            {
              "question": 7,
              "displayNumber": "7",
              "page": 4,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20250317/opgaven-04.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 8,
              "displayNumber": "8",
              "page": 4,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20250317/opgaven-04.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            },
            {
              "question": 11,
              "displayNumber": "11",
              "page": 5,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20250317/opgaven-05.jpg",
              "reasons": [
                "Verklaarde variatie / modelvergelijking"
              ]
            }
          ],
          "href": "bronnen/tentamens/20250317/opgaven.pdf#page=4"
        }
      ],
      "note": "Verklaarde variatie, ANOVA of vergelijking van modelkwaliteit."
    },
    "toetsen": {
      "status": "counted",
      "count": 9,
      "exams": [
        {
          "id": "20200323",
          "label": "23-03-2020",
          "date": "23-03-2020",
          "questions": [
            15,
            17,
            21,
            28
          ],
          "evidence": [
            {
              "question": 15,
              "displayNumber": "2.4",
              "page": 10,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20200323/opgaven-10.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            },
            {
              "question": 17,
              "displayNumber": "2.6",
              "page": 10,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20200323/opgaven-10.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            },
            {
              "question": 21,
              "displayNumber": "3.1",
              "page": 13,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=13",
              "image": "bronnen/tentamens/20200323/opgaven-13.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            },
            {
              "question": 28,
              "displayNumber": "3.8",
              "page": 16,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=16",
              "image": "bronnen/tentamens/20200323/opgaven-16.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20200323/opgaven.pdf#page=10"
        },
        {
          "id": "20211101",
          "label": "01-11-2021",
          "date": "01-11-2021",
          "questions": [
            19
          ],
          "evidence": [
            {
              "question": 19,
              "displayNumber": "19",
              "page": 13,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=13",
              "image": "bronnen/tentamens/20211101/opgaven-13.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20211101/opgaven.pdf#page=13"
        },
        {
          "id": "20220316",
          "label": "16-03-2022",
          "date": "16-03-2022",
          "questions": [
            9,
            18
          ],
          "evidence": [
            {
              "question": 9,
              "displayNumber": "9",
              "page": 5,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20220316/opgaven-05.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            },
            {
              "question": 18,
              "displayNumber": "18",
              "page": 10,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20220316/opgaven-10.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20220316/opgaven.pdf#page=5"
        },
        {
          "id": "20221031",
          "label": "31-10-2022",
          "date": "31-10-2022",
          "questions": [
            8,
            10,
            16
          ],
          "evidence": [
            {
              "question": 8,
              "displayNumber": "8",
              "page": 5,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20221031/opgaven-05.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            },
            {
              "question": 10,
              "displayNumber": "10",
              "page": 6,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20221031/opgaven-06.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            },
            {
              "question": 16,
              "displayNumber": "16",
              "page": 12,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=12",
              "image": "bronnen/tentamens/20221031/opgaven-12.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20221031/opgaven.pdf#page=5"
        },
        {
          "id": "20230315",
          "label": "15-03-2023",
          "date": "15-03-2023",
          "questions": [
            8,
            15
          ],
          "evidence": [
            {
              "question": 8,
              "displayNumber": "8",
              "page": 6,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20230315/opgaven-06.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            },
            {
              "question": 15,
              "displayNumber": "15",
              "page": 11,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=11",
              "image": "bronnen/tentamens/20230315/opgaven-11.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20230315/opgaven.pdf#page=6"
        },
        {
          "id": "20231030",
          "label": "30-10-2023",
          "date": "30-10-2023",
          "questions": [
            20
          ],
          "evidence": [
            {
              "question": 20,
              "displayNumber": "20",
              "page": 11,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=11",
              "image": "bronnen/tentamens/20231030/opgaven-11.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20231030/opgaven.pdf#page=11"
        },
        {
          "id": "20240318",
          "label": "18-03-2024",
          "date": "18-03-2024",
          "questions": [
            11
          ],
          "evidence": [
            {
              "question": 11,
              "displayNumber": "11",
              "page": 5,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20240318/opgaven-05.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20240318/opgaven.pdf#page=5"
        },
        {
          "id": "20241028",
          "label": "28-10-2024",
          "date": "28-10-2024",
          "questions": [
            8,
            10,
            17
          ],
          "evidence": [
            {
              "question": 8,
              "displayNumber": "8",
              "page": 3,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=3",
              "image": "bronnen/tentamens/20241028/opgaven-03.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            },
            {
              "question": 10,
              "displayNumber": "10",
              "page": 4,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20241028/opgaven-04.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            },
            {
              "question": 17,
              "displayNumber": "17",
              "page": 10,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20241028/opgaven-10.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20241028/opgaven.pdf#page=3"
        },
        {
          "id": "20250317",
          "label": "17-03-2025",
          "date": "17-03-2025",
          "questions": [
            9,
            21
          ],
          "evidence": [
            {
              "question": 9,
              "displayNumber": "9",
              "page": 4,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20250317/opgaven-04.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            },
            {
              "question": 21,
              "displayNumber": "21",
              "page": 9,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20250317/opgaven-09.jpg",
              "reasons": [
                "Hypothesen / significantie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20250317/opgaven.pdf#page=4"
        }
      ],
      "note": "Expliciete hypothesen of significantietoetsing."
    },
    "diagnostiek": {
      "status": "counted",
      "count": 9,
      "exams": [
        {
          "id": "20200323",
          "label": "23-03-2020",
          "date": "23-03-2020",
          "questions": [
            14,
            17
          ],
          "evidence": [
            {
              "question": 14,
              "displayNumber": "2.3",
              "page": 9,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20200323/opgaven-09.jpg",
              "reasons": [
                "Uitschieters / invloed"
              ]
            },
            {
              "question": 17,
              "displayNumber": "2.6",
              "page": 10,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20200323/opgaven-10.jpg",
              "reasons": [
                "Normaliteit",
                "Heteroscedasticiteit"
              ]
            }
          ],
          "href": "bronnen/tentamens/20200323/opgaven.pdf#page=9"
        },
        {
          "id": "20211101",
          "label": "01-11-2021",
          "date": "01-11-2021",
          "questions": [
            13,
            14,
            20
          ],
          "evidence": [
            {
              "question": 13,
              "displayNumber": "13",
              "page": 9,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20211101/opgaven-09.jpg",
              "reasons": [
                "Uitschieters / invloed"
              ]
            },
            {
              "question": 14,
              "displayNumber": "14",
              "page": 10,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20211101/opgaven-10.jpg",
              "reasons": [
                "Normaliteit",
                "Heteroscedasticiteit"
              ]
            },
            {
              "question": 20,
              "displayNumber": "20",
              "page": 14,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=14",
              "image": "bronnen/tentamens/20211101/opgaven-14.jpg",
              "reasons": [
                "Normaliteit"
              ]
            }
          ],
          "href": "bronnen/tentamens/20211101/opgaven.pdf#page=9"
        },
        {
          "id": "20220316",
          "label": "16-03-2022",
          "date": "16-03-2022",
          "questions": [
            14,
            15,
            16,
            17
          ],
          "evidence": [
            {
              "question": 14,
              "displayNumber": "14",
              "page": 9,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20220316/opgaven-09.jpg",
              "reasons": [
                "Uitschieters / invloed"
              ]
            },
            {
              "question": 15,
              "displayNumber": "15",
              "page": 9,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20220316/opgaven-09.jpg",
              "reasons": [
                "Uitschieters / invloed"
              ]
            },
            {
              "question": 16,
              "displayNumber": "16",
              "page": 10,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20220316/opgaven-10.jpg",
              "reasons": [
                "Normaliteit"
              ]
            },
            {
              "question": 17,
              "displayNumber": "17",
              "page": 10,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20220316/opgaven-10.jpg",
              "reasons": [
                "Heteroscedasticiteit"
              ]
            }
          ],
          "href": "bronnen/tentamens/20220316/opgaven.pdf#page=9"
        },
        {
          "id": "20221031",
          "label": "31-10-2022",
          "date": "31-10-2022",
          "questions": [
            11,
            13,
            14
          ],
          "evidence": [
            {
              "question": 11,
              "displayNumber": "11",
              "page": 9,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20221031/opgaven-09.jpg",
              "reasons": [
                "Uitschieters / invloed"
              ]
            },
            {
              "question": 13,
              "displayNumber": "13",
              "page": 10,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20221031/opgaven-10.jpg",
              "reasons": [
                "Normaliteit"
              ]
            },
            {
              "question": 14,
              "displayNumber": "14",
              "page": 11,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=11",
              "image": "bronnen/tentamens/20221031/opgaven-11.jpg",
              "reasons": [
                "Uitschieters / invloed"
              ]
            }
          ],
          "href": "bronnen/tentamens/20221031/opgaven.pdf#page=9"
        },
        {
          "id": "20230315",
          "label": "15-03-2023",
          "date": "15-03-2023",
          "questions": [
            11,
            12,
            13
          ],
          "evidence": [
            {
              "question": 11,
              "displayNumber": "11",
              "page": 7,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=7",
              "image": "bronnen/tentamens/20230315/opgaven-07.jpg",
              "reasons": [
                "Uitschieters / invloed"
              ]
            },
            {
              "question": 12,
              "displayNumber": "12",
              "page": 9,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20230315/opgaven-09.jpg",
              "reasons": [
                "Uitschieters / invloed"
              ]
            },
            {
              "question": 13,
              "displayNumber": "13",
              "page": 10,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20230315/opgaven-10.jpg",
              "reasons": [
                "Normaliteit",
                "Heteroscedasticiteit"
              ]
            }
          ],
          "href": "bronnen/tentamens/20230315/opgaven.pdf#page=7"
        },
        {
          "id": "20231030",
          "label": "30-10-2023",
          "date": "30-10-2023",
          "questions": [
            14,
            15,
            22
          ],
          "evidence": [
            {
              "question": 14,
              "displayNumber": "14",
              "page": 8,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=8",
              "image": "bronnen/tentamens/20231030/opgaven-08.jpg",
              "reasons": [
                "Uitschieters / invloed"
              ]
            },
            {
              "question": 15,
              "displayNumber": "15",
              "page": 9,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20231030/opgaven-09.jpg",
              "reasons": [
                "Normaliteit",
                "Heteroscedasticiteit"
              ]
            },
            {
              "question": 22,
              "displayNumber": "22",
              "page": 12,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=12",
              "image": "bronnen/tentamens/20231030/opgaven-12.jpg",
              "reasons": [
                "Normaliteit"
              ]
            }
          ],
          "href": "bronnen/tentamens/20231030/opgaven.pdf#page=8"
        },
        {
          "id": "20240318",
          "label": "18-03-2024",
          "date": "18-03-2024",
          "questions": [
            17,
            18,
            19
          ],
          "evidence": [
            {
              "question": 17,
              "displayNumber": "17",
              "page": 7,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=7",
              "image": "bronnen/tentamens/20240318/opgaven-07.jpg",
              "reasons": [
                "Uitschieters / invloed"
              ]
            },
            {
              "question": 18,
              "displayNumber": "18",
              "page": 7,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=7",
              "image": "bronnen/tentamens/20240318/opgaven-07.jpg",
              "reasons": [
                "Uitschieters / invloed"
              ]
            },
            {
              "question": 19,
              "displayNumber": "19",
              "page": 7,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=7",
              "image": "bronnen/tentamens/20240318/opgaven-07.jpg",
              "reasons": [
                "Normaliteit",
                "Heteroscedasticiteit"
              ]
            }
          ],
          "href": "bronnen/tentamens/20240318/opgaven.pdf#page=7"
        },
        {
          "id": "20241028",
          "label": "28-10-2024",
          "date": "28-10-2024",
          "questions": [
            11,
            12
          ],
          "evidence": [
            {
              "question": 11,
              "displayNumber": "11",
              "page": 4,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=4",
              "image": "bronnen/tentamens/20241028/opgaven-04.jpg",
              "reasons": [
                "Uitschieters / invloed"
              ]
            },
            {
              "question": 12,
              "displayNumber": "12",
              "page": 6,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20241028/opgaven-06.jpg",
              "reasons": [
                "Normaliteit",
                "Heteroscedasticiteit"
              ]
            }
          ],
          "href": "bronnen/tentamens/20241028/opgaven.pdf#page=4"
        },
        {
          "id": "20250317",
          "label": "17-03-2025",
          "date": "17-03-2025",
          "questions": [
            13,
            14,
            15,
            16,
            24
          ],
          "evidence": [
            {
              "question": 13,
              "displayNumber": "13",
              "page": 7,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=7",
              "image": "bronnen/tentamens/20250317/opgaven-07.jpg",
              "reasons": [
                "Uitschieters / invloed"
              ]
            },
            {
              "question": 14,
              "displayNumber": "14",
              "page": 7,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=7",
              "image": "bronnen/tentamens/20250317/opgaven-07.jpg",
              "reasons": [
                "Uitschieters / invloed"
              ]
            },
            {
              "question": 15,
              "displayNumber": "15",
              "page": 8,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=8",
              "image": "bronnen/tentamens/20250317/opgaven-08.jpg",
              "reasons": [
                "Normaliteit"
              ]
            },
            {
              "question": 16,
              "displayNumber": "16",
              "page": 8,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=8",
              "image": "bronnen/tentamens/20250317/opgaven-08.jpg",
              "reasons": [
                "Heteroscedasticiteit"
              ]
            },
            {
              "question": 24,
              "displayNumber": "24",
              "page": 10,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20250317/opgaven-10.jpg",
              "reasons": [
                "Normaliteit"
              ]
            }
          ],
          "href": "bronnen/tentamens/20250317/opgaven.pdf#page=7"
        }
      ],
      "note": "Ten minste één van: uitschieters, invloed, normaliteit of heteroscedasticiteit."
    },
    "voorspellen": {
      "status": "counted",
      "count": 5,
      "exams": [
        {
          "id": "20200323",
          "label": "23-03-2020",
          "date": "23-03-2020",
          "questions": [
            20
          ],
          "evidence": [
            {
              "question": 20,
              "displayNumber": "2.9",
              "page": 11,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=11",
              "image": "bronnen/tentamens/20200323/opgaven-11.jpg",
              "reasons": [
                "Voorspellingsinterval regressie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20200323/opgaven.pdf#page=11"
        },
        {
          "id": "20230315",
          "label": "15-03-2023",
          "date": "15-03-2023",
          "questions": [
            16
          ],
          "evidence": [
            {
              "question": 16,
              "displayNumber": "16",
              "page": 11,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=11",
              "image": "bronnen/tentamens/20230315/opgaven-11.jpg",
              "reasons": [
                "Voorspellingsinterval regressie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20230315/opgaven.pdf#page=11"
        },
        {
          "id": "20231030",
          "label": "30-10-2023",
          "date": "30-10-2023",
          "questions": [
            12
          ],
          "evidence": [
            {
              "question": 12,
              "displayNumber": "12",
              "page": 7,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=7",
              "image": "bronnen/tentamens/20231030/opgaven-07.jpg",
              "reasons": [
                "Voorspellingsinterval regressie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20231030/opgaven.pdf#page=7"
        },
        {
          "id": "20240318",
          "label": "18-03-2024",
          "date": "18-03-2024",
          "questions": [
            15
          ],
          "evidence": [
            {
              "question": 15,
              "displayNumber": "15",
              "page": 6,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20240318/opgaven-06.jpg",
              "reasons": [
                "Voorspellingsinterval regressie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20240318/opgaven.pdf#page=6"
        },
        {
          "id": "20241028",
          "label": "28-10-2024",
          "date": "28-10-2024",
          "questions": [
            13
          ],
          "evidence": [
            {
              "question": 13,
              "displayNumber": "13",
              "page": 7,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=7",
              "image": "bronnen/tentamens/20241028/opgaven-07.jpg",
              "reasons": [
                "Voorspellingsinterval regressie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20241028/opgaven.pdf#page=7"
        }
      ],
      "note": "Deze telling betreft uitsluitend regressie-intervallen. Losse puntvoorspellingen zijn niet afzonderlijk geïnventariseerd."
    },
    "meervoudig": {
      "status": "counted",
      "count": 9,
      "exams": [
        {
          "id": "20200323",
          "label": "23-03-2020",
          "date": "23-03-2020",
          "questions": [
            24,
            28
          ],
          "evidence": [
            {
              "question": 24,
              "displayNumber": "3.4",
              "page": 14,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=14",
              "image": "bronnen/tentamens/20200323/opgaven-14.jpg",
              "reasons": [
                "Transformatie bij meervoudige regressie en significantie van variabelen in het uiteindelijke model."
              ]
            },
            {
              "question": 28,
              "displayNumber": "3.8",
              "page": 16,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=16",
              "image": "bronnen/tentamens/20200323/opgaven-16.jpg",
              "reasons": [
                "Transformatie bij meervoudige regressie en significantie van variabelen in het uiteindelijke model."
              ]
            }
          ],
          "href": "bronnen/tentamens/20200323/opgaven.pdf#page=14"
        },
        {
          "id": "20211101",
          "label": "01-11-2021",
          "date": "01-11-2021",
          "questions": [
            16,
            18
          ],
          "evidence": [
            {
              "question": 16,
              "displayNumber": "16",
              "page": 11,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=11",
              "image": "bronnen/tentamens/20211101/opgaven-11.jpg",
              "reasons": [
                "Vergelijking met meervoudige regressie en multicollineariteit in dit model."
              ]
            },
            {
              "question": 18,
              "displayNumber": "18",
              "page": 13,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=13",
              "image": "bronnen/tentamens/20211101/opgaven-13.jpg",
              "reasons": [
                "Vergelijking met meervoudige regressie en multicollineariteit in dit model."
              ]
            }
          ],
          "href": "bronnen/tentamens/20211101/opgaven.pdf#page=11"
        },
        {
          "id": "20220316",
          "label": "16-03-2022",
          "date": "16-03-2022",
          "questions": [
            21,
            23
          ],
          "evidence": [
            {
              "question": 21,
              "displayNumber": "21",
              "page": 11,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=11",
              "image": "bronnen/tentamens/20220316/opgaven-11.jpg",
              "reasons": [
                "Dummycoëfficiënt voor geslacht en voorspellingen met het meervoudige model."
              ]
            },
            {
              "question": 23,
              "displayNumber": "23",
              "page": 12,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=12",
              "image": "bronnen/tentamens/20220316/opgaven-12.jpg",
              "reasons": [
                "Dummycoëfficiënt voor geslacht en voorspellingen met het meervoudige model."
              ]
            }
          ],
          "href": "bronnen/tentamens/20220316/opgaven.pdf#page=11"
        },
        {
          "id": "20221031",
          "label": "31-10-2022",
          "date": "31-10-2022",
          "questions": [
            10,
            13
          ],
          "evidence": [
            {
              "question": 10,
              "displayNumber": "10",
              "page": 6,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20221031/opgaven-06.jpg",
              "reasons": [
                "Significantie en adjusted R² bij het model met meerdere tabletkenmerken; prijsverschil op basis van het model."
              ]
            },
            {
              "question": 13,
              "displayNumber": "13",
              "page": 10,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20221031/opgaven-10.jpg",
              "reasons": [
                "Significantie en adjusted R² bij het model met meerdere tabletkenmerken; prijsverschil op basis van het model."
              ]
            }
          ],
          "href": "bronnen/tentamens/20221031/opgaven.pdf#page=6"
        },
        {
          "id": "20230315",
          "label": "15-03-2023",
          "date": "15-03-2023",
          "questions": [
            17,
            19
          ],
          "evidence": [
            {
              "question": 17,
              "displayNumber": "17",
              "page": 12,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=12",
              "image": "bronnen/tentamens/20230315/opgaven-12.jpg",
              "reasons": [
                "Toevoegen van meerdere variabelen en vergelijking met het model met alle variabelen."
              ]
            },
            {
              "question": 19,
              "displayNumber": "19",
              "page": 13,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=13",
              "image": "bronnen/tentamens/20230315/opgaven-13.jpg",
              "reasons": [
                "Toevoegen van meerdere variabelen en vergelijking met het model met alle variabelen."
              ]
            }
          ],
          "href": "bronnen/tentamens/20230315/opgaven.pdf#page=12"
        },
        {
          "id": "20231030",
          "label": "30-10-2023",
          "date": "30-10-2023",
          "questions": [
            17,
            18,
            21
          ],
          "evidence": [
            {
              "question": 17,
              "displayNumber": "17",
              "page": 10,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20231030/opgaven-10.jpg",
              "reasons": [
                "Meervoudige modellen vergelijken en voorspellen voor een vrouw met gegeven leeftijd en bloeddruk."
              ]
            },
            {
              "question": 18,
              "displayNumber": "18",
              "page": 10,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20231030/opgaven-10.jpg",
              "reasons": [
                "Meervoudige modellen vergelijken en voorspellen voor een vrouw met gegeven leeftijd en bloeddruk."
              ]
            },
            {
              "question": 21,
              "displayNumber": "21",
              "page": 11,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=11",
              "image": "bronnen/tentamens/20231030/opgaven-11.jpg",
              "reasons": [
                "Meervoudige modellen vergelijken en voorspellen voor een vrouw met gegeven leeftijd en bloeddruk."
              ]
            }
          ],
          "href": "bronnen/tentamens/20231030/opgaven.pdf#page=10"
        },
        {
          "id": "20240318",
          "label": "18-03-2024",
          "date": "18-03-2024",
          "questions": [
            22,
            23,
            24
          ],
          "evidence": [
            {
              "question": 22,
              "displayNumber": "22",
              "page": 9,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20240318/opgaven-09.jpg",
              "reasons": [
                "Meervoudige puntvoorspelling, vergelijking met enkelvoudig model en dummycoëfficiënt voor geslacht."
              ]
            },
            {
              "question": 23,
              "displayNumber": "23",
              "page": 10,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20240318/opgaven-10.jpg",
              "reasons": [
                "Meervoudige puntvoorspelling, vergelijking met enkelvoudig model en dummycoëfficiënt voor geslacht."
              ]
            },
            {
              "question": 24,
              "displayNumber": "24",
              "page": 10,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20240318/opgaven-10.jpg",
              "reasons": [
                "Meervoudige puntvoorspelling, vergelijking met enkelvoudig model en dummycoëfficiënt voor geslacht."
              ]
            }
          ],
          "href": "bronnen/tentamens/20240318/opgaven.pdf#page=9"
        },
        {
          "id": "20241028",
          "label": "28-10-2024",
          "date": "28-10-2024",
          "questions": [
            16,
            17,
            18
          ],
          "evidence": [
            {
              "question": 16,
              "displayNumber": "16",
              "page": 9,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20241028/opgaven-09.jpg",
              "reasons": [
                "Meervoudig model met dummy geslacht vergelijken, toetsen en controleren."
              ]
            },
            {
              "question": 17,
              "displayNumber": "17",
              "page": 10,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20241028/opgaven-10.jpg",
              "reasons": [
                "Meervoudig model met dummy geslacht vergelijken, toetsen en controleren."
              ]
            },
            {
              "question": 18,
              "displayNumber": "18",
              "page": 10,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20241028/opgaven-10.jpg",
              "reasons": [
                "Meervoudig model met dummy geslacht vergelijken, toetsen en controleren."
              ]
            }
          ],
          "href": "bronnen/tentamens/20241028/opgaven.pdf#page=9"
        },
        {
          "id": "20250317",
          "label": "17-03-2025",
          "date": "17-03-2025",
          "questions": [
            19,
            20
          ],
          "evidence": [
            {
              "question": 19,
              "displayNumber": "19",
              "page": 9,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20250317/opgaven-09.jpg",
              "reasons": [
                "Verschil tussen opleidingsdummy’s en puntvoorspelling met het meervoudige salarismodel."
              ]
            },
            {
              "question": 20,
              "displayNumber": "20",
              "page": 9,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20250317/opgaven-09.jpg",
              "reasons": [
                "Verschil tussen opleidingsdummy’s en puntvoorspelling met het meervoudige salarismodel."
              ]
            }
          ],
          "href": "bronnen/tentamens/20250317/opgaven.pdf#page=9"
        }
      ],
      "note": "Expliciete vragen over een meervoudig regressiemodel, waaronder coëfficiënten, dummyvariabelen, voorspellingen en modelvergelijking."
    },
    "transformaties": {
      "status": "counted",
      "count": 7,
      "exams": [
        {
          "id": "20200323",
          "label": "23-03-2020",
          "date": "23-03-2020",
          "questions": [
            23,
            24
          ],
          "evidence": [
            {
              "question": 23,
              "displayNumber": "3.3",
              "page": 13,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=13",
              "image": "bronnen/tentamens/20200323/opgaven-13.jpg",
              "reasons": [
                "Niet-lineaire modellen"
              ]
            },
            {
              "question": 24,
              "displayNumber": "3.4",
              "page": 14,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=14",
              "image": "bronnen/tentamens/20200323/opgaven-14.jpg",
              "reasons": [
                "Niet-lineaire modellen"
              ]
            }
          ],
          "href": "bronnen/tentamens/20200323/opgaven.pdf#page=13"
        },
        {
          "id": "20211101",
          "label": "01-11-2021",
          "date": "01-11-2021",
          "questions": [
            15
          ],
          "evidence": [
            {
              "question": 15,
              "displayNumber": "15",
              "page": 11,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=11",
              "image": "bronnen/tentamens/20211101/opgaven-11.jpg",
              "reasons": [
                "Niet-lineaire modellen"
              ]
            }
          ],
          "href": "bronnen/tentamens/20211101/opgaven.pdf#page=11"
        },
        {
          "id": "20220316",
          "label": "16-03-2022",
          "date": "16-03-2022",
          "questions": [
            13
          ],
          "evidence": [
            {
              "question": 13,
              "displayNumber": "13",
              "page": 7,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=7",
              "image": "bronnen/tentamens/20220316/opgaven-07.jpg",
              "reasons": [
                "Niet-lineaire modellen"
              ]
            }
          ],
          "href": "bronnen/tentamens/20220316/opgaven.pdf#page=7"
        },
        {
          "id": "20221031",
          "label": "31-10-2022",
          "date": "31-10-2022",
          "questions": [
            12
          ],
          "evidence": [
            {
              "question": 12,
              "displayNumber": "12",
              "page": 9,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20221031/opgaven-09.jpg",
              "reasons": [
                "Niet-lineaire modellen"
              ]
            }
          ],
          "href": "bronnen/tentamens/20221031/opgaven.pdf#page=9"
        },
        {
          "id": "20230315",
          "label": "15-03-2023",
          "date": "15-03-2023",
          "questions": [
            10
          ],
          "evidence": [
            {
              "question": 10,
              "displayNumber": "10",
              "page": 6,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20230315/opgaven-06.jpg",
              "reasons": [
                "Niet-lineaire modellen"
              ]
            }
          ],
          "href": "bronnen/tentamens/20230315/opgaven.pdf#page=6"
        },
        {
          "id": "20240318",
          "label": "18-03-2024",
          "date": "18-03-2024",
          "questions": [
            13,
            14
          ],
          "evidence": [
            {
              "question": 13,
              "displayNumber": "13",
              "page": 6,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20240318/opgaven-06.jpg",
              "reasons": [
                "Niet-lineaire modellen"
              ]
            },
            {
              "question": 14,
              "displayNumber": "14",
              "page": 6,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20240318/opgaven-06.jpg",
              "reasons": [
                "Niet-lineaire modellen"
              ]
            }
          ],
          "href": "bronnen/tentamens/20240318/opgaven.pdf#page=6"
        },
        {
          "id": "20250317",
          "label": "17-03-2025",
          "date": "17-03-2025",
          "questions": [
            11,
            12
          ],
          "evidence": [
            {
              "question": 11,
              "displayNumber": "11",
              "page": 5,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20250317/opgaven-05.jpg",
              "reasons": [
                "Niet-lineaire modellen"
              ]
            },
            {
              "question": 12,
              "displayNumber": "12",
              "page": 5,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20250317/opgaven-05.jpg",
              "reasons": [
                "Niet-lineaire modellen"
              ]
            }
          ],
          "href": "bronnen/tentamens/20250317/opgaven.pdf#page=5"
        }
      ],
      "note": "Niet-lineaire modellen beoordelen of transformaties gebruiken."
    },
    "modelbouw": {
      "status": "counted",
      "count": 9,
      "exams": [
        {
          "id": "20200323",
          "label": "23-03-2020",
          "date": "23-03-2020",
          "questions": [
            13,
            22,
            25,
            26
          ],
          "evidence": [
            {
              "question": 13,
              "displayNumber": "2.2",
              "page": 7,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=7",
              "image": "bronnen/tentamens/20200323/opgaven-07.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            },
            {
              "question": 22,
              "displayNumber": "3.2",
              "page": 13,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=13",
              "image": "bronnen/tentamens/20200323/opgaven-13.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            },
            {
              "question": 25,
              "displayNumber": "3.5",
              "page": 14,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=14",
              "image": "bronnen/tentamens/20200323/opgaven-14.jpg",
              "reasons": [
                "Variabelenselectie"
              ]
            },
            {
              "question": 26,
              "displayNumber": "3.6",
              "page": 15,
              "source": "2020-03_SRA_Tentamen.pdf",
              "href": "bronnen/tentamens/20200323/opgaven.pdf#page=15",
              "image": "bronnen/tentamens/20200323/opgaven-15.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            }
          ],
          "href": "bronnen/tentamens/20200323/opgaven.pdf#page=7"
        },
        {
          "id": "20211101",
          "label": "01-11-2021",
          "date": "01-11-2021",
          "questions": [
            11,
            17,
            18
          ],
          "evidence": [
            {
              "question": 11,
              "displayNumber": "11",
              "page": 6,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20211101/opgaven-06.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            },
            {
              "question": 17,
              "displayNumber": "17",
              "page": 13,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=13",
              "image": "bronnen/tentamens/20211101/opgaven-13.jpg",
              "reasons": [
                "Variabelenselectie"
              ]
            },
            {
              "question": 18,
              "displayNumber": "18",
              "page": 13,
              "source": "20211101_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20211101/opgaven.pdf#page=13",
              "image": "bronnen/tentamens/20211101/opgaven-13.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            }
          ],
          "href": "bronnen/tentamens/20211101/opgaven.pdf#page=6"
        },
        {
          "id": "20220316",
          "label": "16-03-2022",
          "date": "16-03-2022",
          "questions": [
            11,
            20,
            22
          ],
          "evidence": [
            {
              "question": 11,
              "displayNumber": "11",
              "page": 5,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20220316/opgaven-05.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            },
            {
              "question": 20,
              "displayNumber": "20",
              "page": 11,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=11",
              "image": "bronnen/tentamens/20220316/opgaven-11.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            },
            {
              "question": 22,
              "displayNumber": "22",
              "page": 11,
              "source": "20220316_Opgaven SRA.pdf",
              "href": "bronnen/tentamens/20220316/opgaven.pdf#page=11",
              "image": "bronnen/tentamens/20220316/opgaven-11.jpg",
              "reasons": [
                "Variabelenselectie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20220316/opgaven.pdf#page=5"
        },
        {
          "id": "20221031",
          "label": "31-10-2022",
          "date": "31-10-2022",
          "questions": [
            9,
            10,
            13
          ],
          "evidence": [
            {
              "question": 9,
              "displayNumber": "9",
              "page": 5,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20221031/opgaven-05.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            },
            {
              "question": 10,
              "displayNumber": "10",
              "page": 6,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=6",
              "image": "bronnen/tentamens/20221031/opgaven-06.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            },
            {
              "question": 13,
              "displayNumber": "13",
              "page": 10,
              "source": "20221031_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20221031/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20221031/opgaven-10.jpg",
              "reasons": [
                "Variabelenselectie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20221031/opgaven.pdf#page=5"
        },
        {
          "id": "20230315",
          "label": "15-03-2023",
          "date": "15-03-2023",
          "questions": [
            17,
            18
          ],
          "evidence": [
            {
              "question": 17,
              "displayNumber": "17",
              "page": 12,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=12",
              "image": "bronnen/tentamens/20230315/opgaven-12.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            },
            {
              "question": 18,
              "displayNumber": "18",
              "page": 13,
              "source": "20230315_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20230315/opgaven.pdf#page=13",
              "image": "bronnen/tentamens/20230315/opgaven-13.jpg",
              "reasons": [
                "Variabelenselectie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20230315/opgaven.pdf#page=12"
        },
        {
          "id": "20231030",
          "label": "30-10-2023",
          "date": "30-10-2023",
          "questions": [
            8,
            16,
            17,
            19
          ],
          "evidence": [
            {
              "question": 8,
              "displayNumber": "8",
              "page": 5,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20231030/opgaven-05.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            },
            {
              "question": 16,
              "displayNumber": "16",
              "page": 9,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20231030/opgaven-09.jpg",
              "reasons": [
                "Variabelenselectie"
              ]
            },
            {
              "question": 17,
              "displayNumber": "17",
              "page": 10,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20231030/opgaven-10.jpg",
              "reasons": [
                "Variabelenselectie"
              ]
            },
            {
              "question": 19,
              "displayNumber": "19",
              "page": 10,
              "source": "20231030_SRA_Opgaven.pdf",
              "href": "bronnen/tentamens/20231030/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20231030/opgaven-10.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            }
          ],
          "href": "bronnen/tentamens/20231030/opgaven.pdf#page=5"
        },
        {
          "id": "20240318",
          "label": "18-03-2024",
          "date": "18-03-2024",
          "questions": [
            9,
            10,
            20,
            21
          ],
          "evidence": [
            {
              "question": 9,
              "displayNumber": "9",
              "page": 5,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20240318/opgaven-05.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            },
            {
              "question": 10,
              "displayNumber": "10",
              "page": 5,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=5",
              "image": "bronnen/tentamens/20240318/opgaven-05.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            },
            {
              "question": 20,
              "displayNumber": "20",
              "page": 9,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20240318/opgaven-09.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            },
            {
              "question": 21,
              "displayNumber": "21",
              "page": 9,
              "source": "20240318 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20240318/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20240318/opgaven-09.jpg",
              "reasons": [
                "Variabelenselectie"
              ]
            }
          ],
          "href": "bronnen/tentamens/20240318/opgaven.pdf#page=5"
        },
        {
          "id": "20241028",
          "label": "28-10-2024",
          "date": "28-10-2024",
          "questions": [
            15,
            18
          ],
          "evidence": [
            {
              "question": 15,
              "displayNumber": "15",
              "page": 9,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=9",
              "image": "bronnen/tentamens/20241028/opgaven-09.jpg",
              "reasons": [
                "Variabelenselectie"
              ]
            },
            {
              "question": 18,
              "displayNumber": "18",
              "page": 10,
              "source": "20241028 SRA Opgaven.pdf",
              "href": "bronnen/tentamens/20241028/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20241028/opgaven-10.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            }
          ],
          "href": "bronnen/tentamens/20241028/opgaven.pdf#page=9"
        },
        {
          "id": "20250317",
          "label": "17-03-2025",
          "date": "17-03-2025",
          "questions": [
            22,
            23
          ],
          "evidence": [
            {
              "question": 22,
              "displayNumber": "22",
              "page": 10,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20250317/opgaven-10.jpg",
              "reasons": [
                "Variabelenselectie"
              ]
            },
            {
              "question": 23,
              "displayNumber": "23",
              "page": 10,
              "source": "20250317 SRA _Opgaven+uitwerkingen.pdf",
              "href": "bronnen/tentamens/20250317/opgaven.pdf#page=10",
              "image": "bronnen/tentamens/20250317/opgaven-10.jpg",
              "reasons": [
                "Multicollineariteit"
              ]
            }
          ],
          "href": "bronnen/tentamens/20250317/opgaven.pdf#page=10"
        }
      ],
      "note": "Multicollineariteit of selectie van verklarende variabelen."
    },
    "validatie": {
      "status": "not-counted",
      "count": null,
      "exams": [],
      "note": "Validatie en het lezen van SPSS-uitvoer vormen geen afzonderlijke categorie in de bestaande tentameninventarisatie."
    },
    "tentamen": {
      "status": "not-counted",
      "count": null,
      "exams": [],
      "note": "Dit is een oefenroute voor de antwoordaanpak en geen afzonderlijk geteld tentamenonderwerp."
    }
  }
};
