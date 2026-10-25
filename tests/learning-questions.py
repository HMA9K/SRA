"""Onafhankelijke reken- en broncontroles voor de leertoepassingen.

Geen build: make_topics levert de vraagdata in geheugen. De PDF-controles lezen
de oorspronkelijke meegeleverde tabellenbundel. Bestaande antwoordindices worden
met de Git-baseline vergeleken, zodat gebruikersvoortgang betekenis houdt.
"""
import json
import math
from pathlib import Path
import re
import subprocess
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'scripts'))
import build_mc
from learning_questions import ADDED_COUNT, QUESTIONS, LAG_PAIRS, LAG_ROWS
from question_patterns import validate_coverage


class LearningApplications(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.topics = build_mc.make_topics()
        cls.all = {q['id']: q for topic in cls.topics for q in topic['questions']}
        cls.new = {key: q for key, q in cls.all.items() if '-leertoepassing-' in key}

    def answer(self, key):
        q = self.all['mc-'+key]
        return q['options'][q['correct']]

    def test_all_topics_have_real_applications_with_local_feedback(self):
        self.assertEqual(ADDED_COUNT, 41)
        self.assertEqual(len(self.all), 134+ADDED_COUNT)
        self.assertEqual(len(self.new), ADDED_COUNT)
        self.assertEqual(set(QUESTIONS), {t['id'] for t in self.topics})
        for q in self.new.values():
            with self.subTest(question=q['id']):
                self.assertGreater(len(q['stimulusHtml']), 180)
                self.assertTrue(q['prompt'].startswith('Eigen oefenvraag.'))
                self.assertIn(q['dataOrigin'], ['eigen','bron'])
                self.assertIn(q['practiceMode'], ['begeleid','zelfstandig'])
                self.assertEqual(len(q['steps']), 3)
                self.assertGreater(len(q['explanation']), 150)
                self.assertEqual(len(set(q['options'])), 4)
                self.assertEqual(len(set(q['optionExplanations'])), 4)
                self.assertTrue(all(len(x)>35 for x in q['optionExplanations']))
                self.assertEqual(q['refs'], q['guidance']['refs'])
        validate_coverage(self.all.values())

    def test_old_answers_and_option_order_survive(self):
        raw = subprocess.run(['git','show','HEAD:data/mc.js'],cwd=ROOT,
                             capture_output=True,check=True,encoding='utf8').stdout
        baseline = json.loads(raw[raw.index('{'):].rstrip(';\n'))
        old = [q for t in baseline['topics'] for q in t['questions'] if '-leertoepassing-' not in q['id']]
        self.assertEqual(len(old),134)
        for previous in old:
            current = self.all[previous['id']]
            for field in ['id','options','correct','optionExplanations']:
                self.assertEqual(previous[field],current[field],previous['id']+': '+field)

    def test_rotation_preserves_each_new_option_explanation(self):
        for topic in QUESTIONS.values():
            for original in topic:
                current = self.all[original['id']]
                self.assertEqual(original['options'][original['correct']],current['options'][current['correct']])
                self.assertEqual(dict(zip(original['options'],original['optionExplanations'])),
                                 dict(zip(current['options'],current['optionExplanations'])))
        self.assertEqual(build_mc.make_topics(),self.topics)

    def test_sampling_results_recomputed_without_answer_letters(self):
        values=[10,20,30,40]
        mean=sum(values)/len(values)
        variance=sum((x-mean)**2 for x in values)/(len(values)-1)
        self.assertAlmostEqual(variance,166.6666666667)
        self.assertIn('12,91',self.answer('rekenen-leertoepassing-kwadratenkolom'))
        mean=8000/100
        sw=math.sqrt((679600-8000**2/100)/99)
        se=1000*sw/math.sqrt(100)*math.sqrt(900/999)
        bounds=(math.floor(1000*mean-2*se),math.ceil(1000*mean+2*se))
        self.assertEqual(bounds,(76203,83797))
        self.assertEqual(self.answer('mpu-leertoepassing-controleoverzicht'),'[€ 76.203; € 83.797]')
        self.assertEqual(210000-2000*(10500-10200)/100,204000)
        self.assertEqual(self.answer('verschil-leertoepassing-verschillentabel'),'€ 204.000')
        self.assertEqual((2880-300**2/100)/99,20)
        self.assertIn('√20',self.answer('verschil-leertoepassing-verschilvariantie'))
        self.assertEqual((7200+10200)/(8000+12000)*1000000,870000)
        self.assertEqual(self.answer('quotient-leertoepassing-ratio-uit-tabel'),'q = 0,87; Ŵ_Q = € 870.000')
        total=1000*90+(.8*30/20)*(105000-1000*100)
        se=3000*math.sqrt(1-.8**2)
        self.assertEqual(total,96000)
        self.assertAlmostEqual(se,1800)
        self.assertEqual(self.answer('regressieschatter-leertoepassing-hulpinformatie'),'Ŵ_R = € 96.000 en SE_R = € 1.800')
        size=math.ceil(1000/(1+(800/2)**2/(2**2*1000*10**2)))
        self.assertEqual((size,size-200),(715,515))
        self.assertEqual(self.answer('steekproefomvang-leertoepassing-uitbreidingsplan'),'515 extra controles; totaal 715')

    def test_source_stratum_and_combination(self):
        n,N,total,squares=114,2700,7000,475000
        var=(squares-total**2/n)/(n-1)
        se=N*math.sqrt(var/n)*math.sqrt((N-n)/(N-1))
        self.assertAlmostEqual(var,399.7826424468251)
        self.assertAlmostEqual(se,4949.212755979559)
        self.assertEqual(round(N*total/n),165789)
        self.assertEqual(round(se),4949)
        self.assertIn('4.949',self.answer('stratificatie-leertoepassing-stratum-uitwerken'))
        target=14306659/4
        candidates={1000:513513,2000:1708623,3000:3554809,4000:5948884,5000:7807828,6000:9459065}
        boundary=min(candidates,key=lambda x:abs(candidates[x]-target))
        self.assertEqual(boundary,3000)
        self.assertIn('€ 3.000',self.answer('stratificatie-leertoepassing-cumulatieve-grens'))
        center=160000+240000+50000
        se=math.hypot(3000,4000)
        self.assertEqual((center-2*se,center+2*se),(440000,460000))
        self.assertEqual(self.answer('stratificatie-leertoepassing-onzekerheid-combineren'),'[€ 440.000; € 460.000]')
        self.assertEqual(100*(800*10)/(800*10+200*40),50)
        self.assertEqual(self.answer('stratificatie-leertoepassing-neyman-allocatie'),'50 in A en 50 in B')

    def test_anova_model_comparison_and_validation(self):
        self.assertEqual((180/2)/(40/20),45)
        self.assertAlmostEqual(180/220,.81818181818)
        self.assertIn('F = 45',self.answer('anova-leertoepassing-volledige-tabel'))
        self.assertEqual((180-120)/(40/(23-2-1)),30)
        self.assertIn('F = 30',self.answer('modelbouw-leertoepassing-extra-variabele'))
        small=.8-1*(1-.8)/(30-1-1)
        large=.81-3*(1-.81)/(30-3-1)
        self.assertGreater(small,large)
        self.assertEqual((round(small,3),round(large,3)),(.793,.788))
        self.assertIn('0,793 naar 0,788',self.answer('meervoudig-leertoepassing-adjusted-vergelijking'))
        self.assertEqual(1/.08,12.5)
        self.assertIn('12,5',self.answer('modelbouw-leertoepassing-vif-tolerance'))
        mspr=sum((y-yhat)**2 for y,yhat in [(10,12),(14,13),(20,17)])/3
        self.assertEqual(mspr,14/3)
        self.assertIn('14/3',self.answer('validatie-leertoepassing-testset-tabel'))

    def test_diagnostics_graphs_and_p_values(self):
        md=.975+3*.815
        cd=.030+3*.060
        self.assertAlmostEqual(md,3.42)
        self.assertAlmostEqual(cd,.21)
        self.assertLess(2.388,md)
        self.assertGreater(.313,cd)
        self.assertEqual(self.answer('diagnostiek-leertoepassing-residual-statistics'),
                         'Aanwijzing voor uitbijter(s) in y en invloed; geen MD-overschrijding')
        # Correlatie zelfstandig via gecentreerde producten, buiten statistics.correlation.
        rs=[]
        for pairs in LAG_PAIRS:
            xbar=sum(x for x,y in pairs)/len(pairs)
            ybar=sum(y for x,y in pairs)/len(pairs)
            r=sum((x-xbar)*(y-ybar) for x,y in pairs)/math.sqrt(
                sum((x-xbar)**2 for x,y in pairs)*sum((y-ybar)**2 for x,y in pairs))
            rs.append(r)
        self.assertEqual(max(range(len(rs)),key=lambda i:rs[i]),2)
        for i,r in enumerate(rs):
            self.assertEqual(f'{r:.3f}'.replace('.',','),LAG_ROWS[i][2])
        self.assertEqual([len(p) for p in LAG_PAIRS],[12,11,10,9])
        self.assertIn('twee maanden eerder',self.answer('diagnostiek-leertoepassing-tijdsvertraging-grafieken'))
        self.assertAlmostEqual(1-.040/2,.980)
        self.assertIn('0,980',self.answer('toetsen-leertoepassing-richting-eenzijdig'))

    def test_transformations_and_prediction(self):
        self.assertEqual(round(math.exp(2+.1*10),2),20.09)
        self.assertIn('20,09',self.answer('transformaties-leertoepassing-terugtransformeren-tabel'))
        self.assertAlmostEqual((5+3*math.log(20))-(5+3*math.log(10)),3*math.log(2))
        self.assertEqual((20/10)**3,8)
        self.assertEqual(2*5/math.sqrt(25),2)
        self.assertAlmostEqual(2*5*math.sqrt(1+1/25),10.19803902718557)
        self.assertIn('±10,20',self.answer('voorspellen-leertoepassing-gemiddelde-individu'))
        self.assertEqual(700-350,350)
        self.assertEqual(self.answer('meervoudig-leertoepassing-dummy-contrast'),'WO ligt € 350 hoger dan HBO')

    def test_actual_table_cells_and_links(self):
        from pypdf import PdfReader
        pdf=PdfReader(ROOT.parent/'Onderwijsmateriaal'/'Tabellenbundel.pdf')
        t12=pdf.pages[11].extract_text()
        t13=pdf.pages[12].extract_text()
        # Tabelkolommen: df plus 18 overschrijdingskansen. 0,025 is kolom 14.
        def tcell(text,df,column):
            line=next(line for line in text.splitlines() if line.startswith(str(df)+' '))
            return line.split()[column]
        self.assertEqual(tcell(t12,24,14),'2,064')
        self.assertEqual(tcell(t12,20,14),'2,086')
        self.assertEqual(tcell(t13,95,14),'1,985')
        rows=pdf.pages[20].extract_text().splitlines()
        row20=next(i for i,line in enumerate(rows) if line.startswith('20 0,1 '))
        self.assertEqual(rows[row20+1].split()[:3],['0,05','4,351','3,493'])
        dw=next(line for line in pdf.pages[29].extract_text().splitlines() if line.startswith('30 α = 0,05'))
        self.assertIn('1,35 1,49 1,28 1,57',dw)
        pages=set()
        for q in self.new.values():
            for match in re.finditer(r'tabellenbundel\.pdf#page=(\d+)',q['stimulusHtml']):
                pages.add(int(match.group(1)))
        self.assertEqual(pages,{12,13,21,30})


if __name__ == '__main__':
    unittest.main()
