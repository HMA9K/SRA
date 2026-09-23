"""Gemaakt met Codex. Controle van CSS-isolatie voor de CAFA2-import."""

from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from cirrus_styles import scope


class CirrusStyleTests(unittest.TestCase):
    def test_root_and_body(self):
        self.assertEqual(scope(":root, body { --base:14px; }"),
                         "body.cirrus-mode,body.cirrus-mode{ --base:14px; }")
        self.assertEqual(scope("body.exam-running > main{padding:0}"),
                         "body.cirrus-mode.exam-running > main{padding:0}")
        self.assertEqual(scope("html body #app-content{margin:0}"),
                         "html:has(body.cirrus-mode) body.cirrus-mode #main{margin:0}")
        self.assertEqual(scope("html:not(.enhanced):has(#font14:checked){--base:14px}"),
                         "html:has(body.cirrus-mode):not(.enhanced):has(#font14:checked){--base:14px}")

    def test_body_state_exact_identifier(self):
        self.assertEqual(scope(".exam-dashboard main,.exam-running .frame,.exam-surface .top-score{display:none}"),
                         "body.cirrus-mode.exam-dashboard main,body.cirrus-mode.exam-running .frame,body.cirrus-mode.exam-surface .top-score{display:none}")
        self.assertEqual(scope(".exam-dashboard-title,.exam-running-note,.exam-surface2{color:red}"),
                         "body.cirrus-mode .exam-dashboard-title,body.cirrus-mode .exam-running-note,body.cirrus-mode .exam-surface2{color:red}")

    def test_function_and_attribute_commas(self):
        self.assertEqual(scope(':is(.one,.two):has(> :not(a,b)),[data-x="a,b"]{color:red}'),
                         'body.cirrus-mode :is(.one,.two):has(> :not(a,b)),body.cirrus-mode [data-x="a,b"]{color:red}')
        self.assertEqual(scope(r'.escaped\,comma,button{color:red}'),
                         r'body.cirrus-mode .escaped\,comma,body.cirrus-mode button{color:red}')

    def test_nested_group_rules(self):
        css = '@media (max-width:680px){@supports selector(:has(a,b)){@layer components{.exam-dashboard main{padding:0}}}}'
        self.assertEqual(scope(css), css.replace('.exam-dashboard main', 'body.cirrus-mode.exam-dashboard main'))

    def test_nonselector_at_rules_unchanged(self):
        css = '@font-face{font-family:"x";src:url("a{b}.woff2")}@keyframes pulse{from{opacity:0}50%,to{opacity:1}}@-webkit-keyframes blink{0%{opacity:0}100%{opacity:1}}'
        self.assertEqual(scope(css), css)
        self.assertEqual(scope('@charset "UTF-8";a{color:red}'), '@charset "UTF-8";body.cirrus-mode a{color:red}')

    def test_comments_strings_and_host_mapping(self):
        css = '/* {,} */ #app-content:is(a,b),[href="#app-content"]{content:"}, /* x */";background:url("data:image/svg+xml,{x}")}/* end */'
        result = scope(css)
        self.assertEqual(result, css.replace('#app-content:is(a,b),[href', 'body.cirrus-mode #main:is(a,b),body.cirrus-mode [href'))
        self.assertEqual(scope('body/* comment */.exam-surface{color:red}'), 'body.cirrus-mode.exam-surface{color:red}')
        self.assertEqual(scope('[href=#app-content],:is(#app-content,a){color:red}'),
                         'body.cirrus-mode [href=#app-content],body.cirrus-mode :is(#main,a){color:red}')
        self.assertEqual(scope('#app-content-other,#app-content{color:red}'),
                         'body.cirrus-mode #app-content-other,body.cirrus-mode #main{color:red}')

    def test_html_feature_class(self):
        self.assertEqual(scope('.enhanced .js-only{display:initial!important}'),
                         'html.enhanced:has(body.cirrus-mode) body.cirrus-mode .js-only{display:initial!important}')

    def test_invalid_input_is_rejected(self):
        for css in ['a{color:red', 'a{content:"unterminated}', '/* no end', 'a:is(.x,.y{color:red}', 'a,b, {color:red}', 'a{color:red}}']:
            with self.subTest(css=css), self.assertRaises(ValueError):
                scope(css)

    def test_real_reference_styles(self):
        reference = ROOT / 'tmp/cafa2-layout-reference/css'
        paths = sorted(reference.glob('*.css'))
        self.assertTrue(paths, 'De actuele CAFA2-referentie ontbreekt')
        for path in paths:
            with self.subTest(file=path.name):
                css = path.read_text(encoding='utf-8')
                scoped = scope(css)
                self.assertTrue(scoped.strip())
                self.assertNotIn('body.cirrus-mode html', scoped)
                self.assertNotIn('body.cirrus-mode body', scoped)
                self.assertNotRegex(scoped, r'body\.cirrus-mode\.exam-dashboard-title\b')
                # Scope wijzigt selectors, geen declaraties of aantal blokken.
                self.assertEqual(css.count('{'), scoped.count('{'))
                self.assertEqual(css.count('}'), scoped.count('}'))
        app = scope((reference / 'app.css').read_text(encoding='utf-8'))
        exams = scope((reference / 'exams.css').read_text(encoding='utf-8'))
        self.assertIn('html:has(body.cirrus-mode){font-size:var(--base)', app)
        self.assertIn('body.cirrus-mode .notice{', app)
        self.assertIn('body.cirrus-mode.exam-dashboard main{', exams)
        self.assertIn('body.cirrus-mode .exam-dashboard-title{', exams)
        self.assertIn('body.cirrus-mode.exam-surface #main > .screen{', exams)


if __name__ == '__main__':
    unittest.main(verbosity=2)
