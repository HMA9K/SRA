"""Theme changes colour without altering layout, including nested selectors."""
import sys, unittest
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'scripts'))
import build_study_dark as dark
import tinycss2

class DarkStyles(unittest.TestCase):
    def compile(self,css):
        dark.SCOPE='html[data-study-theme=dark]'
        return dark.compile_rules(tinycss2.parse_stylesheet(css,skip_comments=True,skip_whitespace=True))
    def test_no_geometry_or_visibility(self):
        result=self.compile('.card{display:grid;width:90%;padding:20px;color:#17364e;background:#fff}')
        self.assertNotIn('display',result);self.assertNotIn('width',result);self.assertNotIn('padding',result)
        self.assertIn('color:',result);self.assertIn('background:',result)
    def test_nested_selectors_and_media(self):
        result=self.compile('@media(max-width:600px){.x:is(.a,.b),.y:has([data-x="a,b"]){color:#333}}')
        self.assertIn('.x:is(.a,.b),html[data-study-theme=dark] .y:has([data-x="a,b"])',result)
        self.assertTrue(result.startswith('@media (max-width:600px)'))
    def test_print_and_images_untouched(self):
        self.assertEqual(self.compile('@media print{body{color:#111}}img{filter:invert(1);opacity:.5}'),'')
    def test_token_foreground(self):
        result=self.compile('.x{color:var(--study-purple);background:var(--purple)}')
        self.assertIn('color:var(--study-ink)',result)
        self.assertNotIn('background',result)
    def test_styles_are_valid_and_study_scope_is_separate(self):
        generated=dark.build()
        self.assertIn('html[data-study-theme=dark]:not(:has(body.cirrus-mode)) body.study-shell',generated)
        self.assertIn('html[data-study-theme=dark] body.cirrus-mode',generated)
        rules=tinycss2.parse_stylesheet(generated,skip_comments=True,skip_whitespace=True)
        self.assertFalse(any(rule.type=='error' for rule in rules))

if __name__=='__main__':unittest.main()
