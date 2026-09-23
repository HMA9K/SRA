"""Controleer dat antwoordrotatie nooit uitleg aan de verkeerde optie koppelt."""
import copy
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
import build_content as course
import build_mc as mc
from question_explanations import APPLICATION
from completion_questions import QUESTIONS


class QuestionExplanationTests(unittest.TestCase):
    def test_every_question_has_specific_teaching_content(self):
        checks = [q for lesson in course.lessons for q in lesson['questions']]
        questions = [q for topic in mc.make_topics() for q in topic['questions']]
        self.assertEqual(len(checks), 57)
        self.assertEqual(len(questions), 134)
        for q in checks + questions:
            with self.subTest(question=q['id']):
                self.assertGreaterEqual(len(q['steps']), 3)
                self.assertEqual(len(q['optionExplanations']), len(q['options']))
                self.assertGreater(len(q['explanation']), 150)
                self.assertTrue(q['pattern'] and q['trap'] and q['refs'])
                self.assertEqual(len(set(q['optionExplanations'])), len(q['options']))
        self.assertEqual(len({q['pattern'] for q in questions}), 134)

    def test_rotation_preserves_option_explanations_and_correct_answer(self):
        original = {}
        for lesson in course.lessons:
            for i, q in enumerate(lesson['questions'], start=1):
                original[f"mc-{lesson['id']}-basis-{i}"] = (
                    q['options'], q['correct'], q['optionExplanations'])
        for topic, meta in mc.EXTRA.items():
            for i, row in enumerate(meta['rows'], start=1):
                original[f'mc-{topic}-toepassing-{i}'] = (
                    row[1], row[2], APPLICATION[f'{topic}-{i}']['optionExplanations'])
        for questions in QUESTIONS.values():
            for q in questions:
                original[q['id']] = (q['options'], q['correct'], q['optionExplanations'])
        for topic in mc.make_topics():
            for q in topic['questions']:
                with self.subTest(question=q['id']):
                    options, correct, explanations = original[q['id']]
                    self.assertEqual(q['options'][q['correct']], options[correct])
                    self.assertEqual(dict(zip(q['options'], q['optionExplanations'])),
                                     dict(zip(options, explanations)))

    def test_assembling_mc_does_not_mutate_lesson_checks(self):
        before = copy.deepcopy(course.lessons)
        first = mc.make_topics()
        second = mc.make_topics()
        self.assertEqual(course.lessons, before)
        self.assertEqual(first, second)


if __name__ == '__main__':
    unittest.main()
