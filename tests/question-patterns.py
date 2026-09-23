"""Controleer vraagdekking en behoud van inhoud zonder browserbestanden te bouwen."""
import copy
import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
import build_content
from build_mc import make_topics
from question_patterns import PATTERNS, apply_pattern, key_for, validate_coverage


class RecognitionRoutes(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.topics = make_topics()
        cls.questions = {q['id']: q for t in cls.topics for q in t['questions']}

    def test_every_existing_question_has_an_explicit_route(self):
        self.assertEqual(len(self.questions), 134)
        self.assertEqual(len(PATTERNS), 134)
        validate_coverage(self.questions.values())
        self.assertEqual(len({q['pattern'] for q in self.questions.values()}), 134)
        for question in self.questions.values():
            with self.subTest(question=question['id']):
                route = question['recognition']
                self.assertEqual(set(route), {'signals', 'meaning', 'approach', 'answer'})
                self.assertTrue(all(isinstance(s, str) and len(s) > 20 for s in route.values()))
                self.assertTrue(all(s in question['pattern'] for s in route.values()))
                self.assertNotIn('juiste antwoord is', question['pattern'].lower())

    def test_57_lesson_checks_share_the_same_routes(self):
        checks = [q for lesson in build_content.lessons for q in lesson['questions']]
        self.assertEqual(len(checks), 57)
        for check in checks:
            lesson, number = check['id'].rsplit('-', 1)
            mc = self.questions[f'mc-{lesson}-basis-{number}']
            self.assertEqual(check['recognition'], mc['recognition'])
            self.assertEqual(check['pattern'], mc['pattern'])

    def test_missing_and_obsolete_routes_fail_instead_of_falling_back(self):
        with self.assertRaises(ValueError):
            apply_pattern({'id': 'nieuwe-niet-beoordeelde-vraag'})
        with self.assertRaises(ValueError):
            validate_coverage(list(self.questions.values())[1:])
        self.assertEqual(key_for('mc-meervoudig-basis-2'), 'meervoudig-2')

    def test_route_enrichment_preserves_question_and_answer_data(self):
        for source in self.questions.values():
            q = copy.deepcopy(source)
            before = {k: v for k, v in q.items() if k not in ('pattern', 'recognition')}
            apply_pattern(q)
            after = {k: v for k, v in q.items() if k not in ('pattern', 'recognition')}
            self.assertEqual(before, after)
        # Vergelijk de gegenereerde vragen bovendien met de bestaande publicatie.
        # Dit blijft ook geldig nadat de hoofd-build de verrijkte data schrijft.
        text = (ROOT / 'data/mc.js').read_text(encoding='utf8')
        old = json.loads(text[text.index('{'):].rstrip(';\n'))
        for topic in old['topics']:
            for original in topic['questions']:
                current = self.questions[original['id']]
                for field in ('id', 'prompt', 'options', 'correct', 'level', 'steps', 'refs'):
                    self.assertEqual(original[field], current[field], f'{original["id"]}: {field}')

    def test_cues_distinguish_similar_questions(self):
        def route(key):
            return PATTERNS[key]
        # Een totale breedte is geen marge; een totaal is geen uitbreiding.
        self.assertIn('Totale breedte'.lower(), route('onzekerheid-2')['signals'].lower())
        self.assertIn('halveer', route('onzekerheid-2')['approach'].lower())
        self.assertIn('omhoog', route('mc-steekproefomvang-toepassing-3')['approach'])
        self.assertIn('bestaande', route('mc-steekproefomvang-toepassing-3')['approach'])
        # Vraagwoorden wijzen naar een ander eindbedrag bij dezelfde goedratio.
        self.assertIn('werkelijke waarde', route('quotient-3')['signals'])
        self.assertIn('overwaardering', route('mc-quotient-toepassing-3')['signals'])
        self.assertIn('1 − q', route('mc-quotient-toepassing-3')['approach'])
        # Individu versus gemiddelde en welke variabele gelogd is.
        self.assertIn('Eén nieuwe waarneming', route('mc-voorspellen-toepassing-2')['signals'])
        self.assertIn('extra 1', route('mc-voorspellen-toepassing-2')['approach'])
        self.assertIn('alleen x', route('mc-transformaties-toepassing-1')['signals'])
        self.assertIn('exp', route('mc-transformaties-toepassing-2')['approach'])
        # Tegenstrijdige toetsrichting en onbewezen oorzaken blijven beperkt.
        self.assertIn('tegengesteld', route('mc-toetsen-toepassing-2')['meaning'])
        self.assertIn('1 − p_tweezijdig/2', route('mc-toetsen-toepassing-2')['approach'])
        self.assertIn('geen oorzaak', route('voorspellen-3')['meaning'])
        # Een compleet diagnoseantwoord vraagt uitvoerbewijs en een vervolgstap.
        self.assertIn('tabel of afbeelding', route('tentamen-2')['approach'])
        self.assertIn('remedie', route('tentamen-2')['approach'])


if __name__ == '__main__':
    unittest.main(verbosity=2)
