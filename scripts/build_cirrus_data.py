"""Gemaakt met Codex: SRA-broninhoud voor de overgenomen CAFA2-bediening.

Casustekst en PDF-tabellen worden opnieuw opgebouwd als HTML. Afzonderlijke
bronfiguren blijven herkenbaar; er worden geen tentamenpagina's als casus getoond.
"""
from pathlib import Path
import json, re, html
import pdfplumber
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
Q = re.compile(r'^Vraag\s+(\d+)\s*[.:]?\s*\((\d+)\s*punt', re.I)
AQ = re.compile(r'^Vraag\s+(\d+)\s*[.:(]', re.I)

def case_fragments(doc, source_pages, folder, start, stop, label):
    """Zet een casusbereik om naar lopende tekst, tabellen en losse figuren."""
    parts=[]; audit=[]
    for page_index in range(start[0],stop[0]+1):
        page=doc.pages[page_index]
        top=start[1] if page_index==start[0] else 45
        bottom=stop[1] if page_index==stop[0] else page.height-45
        footers=[line['top']-3 for line in page.extract_text_lines(return_chars=False)
                 if line['text'].strip()==str(page_index+1) and line['top']>page.height-70]
        bottom=min(bottom,min(footers,default=page.height-30))
        if bottom-top<8: continue
        crop=page.crop((35,top,page.width-30,bottom))
        audit.append(crop.extract_text() or '')
        tables=[table for table in crop.find_tables() if len(table.rows)>1]
        images=[img for img in crop.images if img['width']>15 and img['height']>12]
        lines=crop.extract_text_lines(return_chars=False)
        occupied=[item.bbox for item in tables]
        occupied += [(img['x0'],img['top'],img['x1'],img['bottom']) for img in images]
        text_lines=[]
        for line in lines:
            center=((line['x0']+line['x1'])/2,(line['top']+line['bottom'])/2)
            if any(box[0]-1<=center[0]<=box[2]+1 and box[1]-1<=center[1]<=box[3]+1 for box in occupied): continue
            content=line['text'].strip()
            if not content or re.match(r'^Pagina\s+\d+\s+van\s+\d+$',content,re.I): continue
            text_lines.append(line)
        blocks=[]
        for line in text_lines: blocks.append((line['top'],0,'line',line))
        for table in tables: blocks.append((table.bbox[1],1,'table',table))
        for image in images: blocks.append((image['top'],2,'image',image))
        blocks.sort(key=lambda item:(item[0],item[1]))
        prose=[]; previous=None; image_number=0; last_bullet=False
        def flush():
            if prose:
                value=' '.join(prose).replace(' €2',' €²')
                parts.append('<p>'+html.escape(value)+'</p>')
                prose.clear()
        for _,_,kind,obj in blocks:
            if kind=='line':
                value=obj['text'].strip()
                gap=obj['top']-previous['bottom'] if previous else 100
                if gap>7: flush();last_bullet=False
                if re.match(r'^Opgave\s+\d',value,re.I):
                    flush();parts.append('<h3>'+html.escape(value)+'</h3>');last_bullet=False
                elif re.match(r'^Afbeelding\s+\d+[a-z]?(?:\s|$)',value,re.I):
                    flush();parts.append('<p class="sra-case-caption">'+html.escape(value)+'</p>');last_bullet=False
                elif value.startswith(('●','•','- ')):
                    flush();parts.append('<p class="sra-case-list-item">'+html.escape(value.lstrip('●•- '))+'</p>');last_bullet=True
                elif last_bullet and gap<=7 and parts:
                    parts[-1]=parts[-1][:-4]+' '+html.escape(value)+'</p>'
                elif len(value)==1 and value.isalpha() and gap<=7 and prose:
                    prose[-1]=re.sub(r'\b([A-Za-z])\s+(is\s+[\d.,]+\.)$',lambda m:m[1]+'_'+value+' '+m[2],prose[-1])
                elif gap>7 and len(value)<48 and not value.endswith(('.',':',';','!','?')) and not re.search(r'\d{3}',value):
                    flush();parts.append('<h4>'+html.escape(value)+'</h4>');last_bullet=False
                else: prose.append(value);last_bullet=False
                previous=obj
            elif kind=='table':
                flush(); previous=None
                rows=obj.extract()
                if not rows: continue
                cells=[]
                for row_index,row in enumerate(rows):
                    tag='th' if row_index==0 else 'td'
                    cells.append('<tr>'+''.join(f'<{tag}'+(' scope="col"' if row_index==0 else '')+'>'+html.escape(re.sub(r'\b([NnWwSs])\s+i\b',r'\1ᵢ',(cell or '').replace('\n',' ').strip()))+f'</{tag}>' for cell in row)+'</tr>')
                parts.append('<div class="sra-case-table-scroll"><table><thead>'+cells[0]+'</thead><tbody>'+''.join(cells[1:])+'</tbody></table></div>')
            else:
                flush(); previous=None; image_number+=1
                image=obj
                with Image.open(source_pages[page_index]) as page_image:
                    scale_x=page_image.width/page.width;scale_y=page_image.height/page.height
                    bounds=(max(0,int((image['x0']-2)*scale_x)),max(0,int((image['top']-2)*scale_y)),
                            min(page_image.width,int((image['x1']+2)*scale_x)),min(page_image.height,int((image['bottom']+2)*scale_y)))
                    target=folder/f'figuur-{label}-{page_index+1}-{image_number}.jpg'
                    page_image.crop(bounds).save(target,quality=95)
                path=target.relative_to(ROOT).as_posix()
                nearby=[]
                for line in text_lines:
                    if not re.match(r'^Afbeelding\s+\d+[a-z]?',line['text'].strip(),re.I): continue
                    vertical=max(0,image['top']-line['bottom'],line['top']-image['bottom'])
                    horizontal=max(0,image['x0']-line['x1'],line['x0']-image['x1'])
                    distance=vertical*3+horizontal
                    if distance<125: nearby.append((distance,line['text'].strip()))
                description=min(nearby)[1] if nearby else f'Figuur op bronpagina {page_index+1}'
                parts.append('<figure class="sra-case-figure"><img src="'+path+'" alt="'+html.escape(description)+'"></figure>')
        flush()
    return ''.join(parts),'\n'.join(audit)

def curated_table(headers, rows):
    heading='<tr>'+''.join('<th scope="col">'+html.escape(cell)+'</th>' for cell in headers)+'</tr>'
    body=''.join('<tr>'+''.join('<td>'+html.escape(cell)+'</td>' for cell in row)+'</tr>' for row in rows)
    return '<div class="sra-case-table-scroll"><table><thead>'+heading+'</thead><tbody>'+body+'</tbody></table></div>'

CURATED_TABLES={
    ('20200323',0):[
        (['Stratum','Nᵢ'],[['1. Eigen adviseurs','503'],['2. Advies kantoor','321'],['3. Zelfstandigen','88']]),
        (['Stratum','Nᵢ','nᵢ','Wᵢ','sᵢ'],[['1. Eigen adviseurs','503','44','€ 99.528.000','170'],['2. Advies kantoor','321','46','€ 63.261.000','214'],['3. Zelfstandigen','88','20','€ 15.369.000','456'],['Totaal','912','110','€ 178.158.000','']])],
    ('20200626',0):[
        (['Stratum','Nᵢ'],[['1. Eigen adviseurs','503'],['2. Advies kantoor','321'],['3. Zelfstandigen','88']]),
        (['Stratum','Nᵢ','nᵢ','Wᵢ','sᵢ'],[['1. Eigen adviseurs','503','44','€ 99.528.000','170'],['2. Advies kantoor','321','46','€ 63.261.000','214'],['3. Zelfstandigen','88','20','€ 15.369.000','456'],['Totaal','912','110','€ 178.158.000','']])],
    ('20211101',0):[(
        ['Stratum','Totaal aantal posten','Steekproefomvang','Som verschillen boekwaarde en werkelijke waarde (€)','Standaarddeviatie verschil (sₑ)','Boekwaarde (€)'],
        [['1','1.000','100','15.400','300','6.500.000'],['2','1.200','120','19.800','400','8.000.000'],['3','1.800','180','57.200','800','10.500.000']])],
    ('20230315',0):[
        (['Boekwaarden (€)','Aantal posten','Som boekwaarden (€)','Cumulatieve som boekwaarden (€)'],
         [['0–<1.000','1.240','564.200','564.200'],['1.000–<2.000','895','1.315.650','1.879.850'],['2.000–<3.000','836','2.030.644','3.910.494'],['3.000–<4.000','769','2.633.825','6.544.319'],['4.000–<5.000','453','2.043.936','8.588.255'],['5.000–<6.000','330','1.816.361','10.404.616'],['6.000–<7.000','294','1.891.432','12.296.048'],['7.000–<8.000','239','1.749.196','14.045.244'],['≥ 8.000','132','1.204.236','']]),
        (['Stratum','Nᵢ','nᵢ','w̄ᵢ (€)','sᵢ (€)','Nᵢ × sᵢ/√nᵢ × √((Nᵢ−nᵢ)/(Nᵢ−1)) (€)'],
         [['1','560','66','1.332,0','341,9','22.155,05'],['2','1.240','123','1.754,6','436,2','46.306,90'],['3','1.135','108','2.349,2','402,5','41.833,92']])],
    ('20231030',0):[
        (['Stratum','Nᵢ','sᵢ'],[['1','831','127,2'],['2','587','109,3'],['3','551','92,3'],['4','504','89,3'],['Som','2.473','']]),
        (['Stratum','Nᵢ','nᵢ','w̄ᵢ','sᵢ'],[['1','387','17','517','124'],['2','240','13','383','105'],['3','204','10','337','88'],['Totaal','831','40','','']])],
    ('20240318',0):[(
        ['Stratum','Nᵢ','nᵢ','Σwᵢ (€)','sᵢ (€)'],
        [['1','1.515','32','70.432','232'],['2','529','33','89.265','326'],['3','382','37','94.535','457'],['4','242','29','80.185','320']])],
    ('20241028',0):[(
        ['Stratum','Nᵢ','nᵢ','Σwᵢ (€)','Nᵢ × sᵢ/√nᵢ × √((Nᵢ−nᵢ)/(Nᵢ−1))'],
        [['1','1.150','100','140.000','36.600'],['2','800','77','128.898','59.600'],['3','600','60','123.495','47.710'],['4','500','38','93.176','15.350'],['Totaal','3.050','275','','']])],
    ('20250317',0):[
        (['Stratum','Nᵢ'],[['1','940'],['2','677'],['3','639'],['4','592']]),
        (['Stratum','Nᵢ','nᵢ','w̄ᵢ (€)','sᵢ (€)'],[['1','940','45','60','16'],['2','677','32','53','13'],['3','639','30','50','14'],['4','592','30','41','13']])]
}

def curate_case(exam_id,section_index,markup):
    tables=CURATED_TABLES.get((exam_id,section_index))
    if tables:
        source=list(re.finditer(r'<div class="sra-case-table-scroll"><table>.*?</table></div>',markup,re.S))
        assert len(source)==len(tables),(exam_id,section_index,'table count',len(source),len(tables))
        for found,(headers,rows) in reversed(list(zip(source,tables))):
            markup=markup[:found.start()]+curated_table(headers,rows)+markup[found.end():]
    if exam_id in ('20200323','20200626') and section_index==0:
        markup=markup.replace('goedratio s_q','goedratio s<sub>q</sub>')
        markup=markup.replace('<p>Totaal 912 110 € 178.158.000</p>','')
        markup=re.sub(r'<p>W is de geschatte totale werkelijke waarde.*?€ 178\.158\.000\.</p>',
            '<p>W<sub>i</sub> is de geschatte totale werkelijke waarde in stratum i en s<sub>i</sub> is de steekproefstandaardafwijking in stratum i. De beste schatting van de totale werkelijke waarde is € 178.158.000.</p>',markup,flags=re.S)
    if exam_id=='20211101' and section_index==0:
        markup=re.sub(r'<p>bOentdroaunwksb.*?€ 120\.000\.</p>',
            '<p>Ondanks de haast die er is geboden neemt de firma geen genoegen met deze uitkomst. Autonderdeel wil het verschil tussen ondergrens en bovengrens beperken tot maximaal € 120.000.</p>',markup,flags=re.S)
        markup=re.sub(r'<p>GZweozilelen\..*?De registeraccountant is het niet met de directeur eens\.</p>',
            '<p>Gezien de relatief kleine onnauwkeurigheid van het antwoord op vraag 3 stelt de directeur van Autonderdeel dat achteraf gezien de steekproef aanzienlijk beperkt had kunnen worden tot bijvoorbeeld 130 artikelen. De registeraccountant is het niet met de directeur eens.</p>',markup,flags=re.S)
        markup=re.sub(r'<p>WDea ta icsc.*?werkelijke waarde onder de boekwaarde ligt\.</p>',
            '<p>De accountant verdeelt de totale voorraad in 3 deelpopulaties en verkrijgt daarbij de gegevens in onderstaande tabel. Hierbij wordt aangetekend dat in alle gevallen de werkelijke waarde onder de boekwaarde ligt.</p>',markup,flags=re.S)
        markup=markup.replace('De standaardafwijking blijkt € 208 te zijn.','De standaardafwijking s<sub>q</sub> blijkt € 208 te zijn.')
        markup=re.sub(r'boekwaarde van de\s*(?:<[^>]+>)*𝑠𝑠𝑞𝑞(?:</[^>]+>)*\s*gecontroleerde waarde','boekwaarde van de gecontroleerde waarde',markup)
    if exam_id=='20220316' and section_index==0:
        markup=re.sub(r'<p>De volgende bovengrenzen zijn verkregen.*?148\.881</p>',
            '<p>De volgende bovengrenzen zijn verkregen uit een gestratificeerde steekproef met de formule:</p>'
            '<p><strong>N × x̄ + t × N × s/√n × √((N − n)/(N − 1))</strong></p>'
            '<p>Stratum 1: 790 × 88 + 1,703 × 790 × 26/√28 × √((790 − 28)/(790 − 1)) = 69.520 + 6.496 = 76.016.</p>'
            '<p>Stratum 2: 1.010 × 77 + 1,725 × 1.010 × 25/√21 × √((1.010 − 21)/(1.010 − 1)) = 77.770 + 9.410 = 87.180.</p>'
            '<p>Stratum 3: 980 × 140 + 1,663 × 980 × 70/√87 × √((980 − 87)/(980 − 1)) = 137.200 + 11.681 = 148.881.</p>',markup,flags=re.S)
    if exam_id=='20230315' and section_index==0:
        markup=re.sub(r'<p>𝑤̅ is de gemiddelde werkelijke waarde.*$',
            '<p>w̄<sub>i</sub> is de gemiddelde werkelijke waarde van een post in de steekproef van het i-de stratum. s<sub>i</sub> is de standaardafwijking van de werkelijke waarden in de steekproef van het i-de stratum.</p>',markup,flags=re.S)
    if exam_id=='20240318' and section_index==0:
        markup=re.sub(r'<p>is de grootte van de populatie.*$',
            '<p>N<sub>i</sub> is de populatieomvang, n<sub>i</sub> de steekproefomvang, w<sub>i</sub> de werkelijke waarde van een post en s<sub>i</sub> de standaardafwijking van de werkelijke waarden in het i-de stratum.</p>',markup,flags=re.S)
    if exam_id=='20241028' and section_index==0:
        markup=re.sub(r'<h4>𝑁 de populatiegrootte.*$',
            '<p>N<sub>i</sub> is de populatiegrootte en n<sub>i</sub> de steekproefomvang van het i-de stratum. Σw<sub>i</sub> is de som van de werkelijke voorraadwaarden in de steekproef, in euro. s<sub>i</sub> is de standaardafwijking van de werkelijke waarden in het i-de stratum.</p>',markup,flags=re.S)
    if exam_id=='20250317' and section_index==0:
        markup=re.sub(r'met is 𝑁 het aantal artikelen in het i-de stratum:',
            'met N<sub>i</sub> als het aantal artikelen in het i-de stratum:',markup)
        markup=markup.replace('streekproefaantallen 𝑛','steekproefaantallen n<sub>i</sub>')
        markup=re.sub(r'<p>𝑤̅ is de gemiddelde werkelijk waarde.*?i-de stratum</p>',
            '<p>w̄<sub>i</sub> is de gemiddelde werkelijke waarde en s<sub>i</sub> de standaardafwijking van de werkelijke waarden in de steekproef van het i-de stratum.</p>',markup,flags=re.S)
        markup=re.sub(r'<p>𝑠 is de standaardafwijking van de werkelijke waarden van de steekproef in het i-de stratum</p>','',markup)
    return markup

def build():
    raw=(ROOT/'data/exams.js').read_text(encoding='utf8')
    records=json.loads(raw.split('window.SRAExamData = ',1)[1].rstrip(';\n'))['exams']
    cuts=json.loads((ROOT/'data/exam-question-boundaries.json').read_text(encoding='utf8'))
    exams=[]
    for e in records:
        if e['onlyAnswers']: continue
        folder=ROOT/'bronnen/tentamens'/e['id']
        def inspect(kind, start=0, end=None):
            pdf=pdfplumber.open(folder/(kind+'.pdf'))
            pages=pdf.pages[start:end]
            lines=[p.filter(lambda o:o.get('object_type')!='char' or not any(x in o.get('fontname','') for x in ('CambriaMath','Symbol'))).extract_text_lines(return_chars=False) for p in pages]
            markers=[]
            pattern=Q if kind=='opgaven' else AQ
            for p,ls in enumerate(lines,start):
                for line in ls:
                    m=pattern.search(line['text'].replace('\ufffd',''))
                    if m: markers.append((int(m[1]),p,line['top'],line['bottom']))
            return pdf,lines,markers
        p,lines,markers=inspect('opgaven',0,e['questionPages'])
        ap,alines,amarkers=inspect('uitwerking',e['answerStartPage']-1)
        assert [x[0] for x in markers]==[q['originalNumber'] for q in e['questions']], (e['id'],markers)
        assert [x[0] for x in amarkers]==[q['originalNumber'] for q in e['questions']], (e['id'],'answers',amarkers)
        footer_tops={}
        def fragments(kind,doc,start,stop,label):
            result=[]; texts=[]; has_visual=False
            for page in range(start[0],stop[0]+1):
                top=start[1] if page==start[0] else 45
                bottom=stop[1] if page==stop[0] else doc.pages[page].height-45
                if bottom-top<8: continue
                if (kind,page) not in footer_tops:
                    sourcepage=doc.pages[page]
                    footers=[line['top']-3 for line in sourcepage.extract_text_lines(return_chars=False)
                             if line['text'].strip()==str(page+1) and line['top']>sourcepage.height-70]
                    footer_tops[kind,page]=min(footers,default=sourcepage.height-30)
                bottom=min(bottom,footer_tops[kind,page])
                if bottom-top<8: continue
                crop=doc.pages[page].crop((35,top,doc.pages[page].width-30,bottom))
                text=crop.extract_text() or ''
                # SPSS tables may be embedded images or vector drawings with little extracted text.
                has_visual=has_visual or bool(crop.images or crop.curves or crop.rects or crop.lines)
                if not text.strip() and not crop.images and not crop.curves: continue
                source=ROOT/e['documents'][kind][page]
                target=folder/f'{label}-{page+1}.jpg'
                with Image.open(source) as im:
                    sx=im.width/doc.pages[page].width;sy=im.height/doc.pages[page].height
                    # Fixed source margins; retain the entire horizontal content area.
                    im.crop((int(38*sx),int(top*sy),int((doc.pages[page].width-32)*sx),int(bottom*sy))).save(target,quality=94)
                path=target.relative_to(ROOT).as_posix()
                result.append(f'<img src="{path}" alt="{html.escape(label)} · bronpagina {page+1}">')
                texts.append(text)
            return ''.join(result),'\n'.join(texts),has_visual
        # Section boundary is the original heading, not an invented task split.
        candidates={s['number']:[] for s in e['sections']}
        for page,ls in enumerate(lines):
            for line in ls:
                m=re.match(r'^Opgave\s+(\d+)\b',line['text'],re.I)
                if m and int(m[1]) in candidates: candidates[int(m[1])].append((page,max(35,line['top']-3)))
        boundaries=[]
        for section in e['sections']:
            first=markers[section['firstQuestion']-1]
            boundaries.append(max(b for b in candidates[section['number']] if b<=(first[1],first[2])))
        docend=(e['questionPages']-1,p.pages[e['questionPages']-1].height-40)
        sections=[]
        case_parts=[[] for _ in boundaries]
        case_texts=[[] for _ in boundaries]
        def add_case(section_index,start,stop):
            if start>=stop: return
            label=f'casus-{section_index+1}-{len(case_parts[section_index])+1}'
            markup,text=case_fragments(p,[ROOT/path for path in e['documents']['opgaven']],folder,start,stop,label)
            if markup:
                assert not Q.search(text), (e['id'],label,'question in case')
                case_parts[section_index].append(markup)
                case_texts[section_index].append(text)
        for j,start in enumerate(boundaries):
            stop=boundaries[j+1] if j+1<len(boundaries) else docend
            markup,_,_=fragments('opgaven',p,start,stop,f'sectie-{j+1}')
            sections.append(dict(id=e['sections'][j]['id'],title=e['sections'][j]['title'],contentHtml=markup))
            first=markers[e['sections'][j]['firstQuestion']-1]
            add_case(j,start,(first[1],first[2]-3))
        questions=[]
        for idx,q in enumerate(e['questions']):
            original,page,top,bottom=markers[idx]
            n=q['number']
            stop=(markers[idx+1][1],markers[idx+1][2]-3) if idx+1<len(markers) else docend
            section_index=next(i for i,s in enumerate(e['sections']) if s['id']==q['sectionId'])
            if n==e['sections'][section_index]['lastQuestion'] and section_index+1<len(boundaries): stop=boundaries[section_index+1]
            context_stop=stop
            cut=cuts.get(e['id'],{}).get(str(n))
            if cut:
                found=False
                for pi in range(page,stop[0]+1):
                    for line in lines[pi]:
                        if (pi,line['top'])<=(page,top) or (pi,line['top'])>=stop: continue
                        if line['text'].startswith(cut[:min(18,len(cut))]):
                            stop=(pi,line['top']-3);found=True;break
                    if found:break
                assert found,(e['id'],n,'missing context boundary',cut)
                add_case(section_index,stop,context_stop)
            markup,text,question_visual=fragments('opgaven',p,(page,top-2),stop,f'vraag-{n}')
            an,apage,atop,abottom=amarkers[idx]
            astop=(amarkers[idx+1][1],amarkers[idx+1][2]-3) if idx+1<len(amarkers) else (len(ap.pages)-1,ap.pages[-1].height-40)
            # A following opgave heading belongs to the next answer, including subopgaven 2.1/2.2.
            for pi,ls in enumerate(alines,e['answerStartPage']-1):
                for line in ls:
                    named_boundary=e.get('answerBoundaries',{}).get(str(n))
                    if (apage,atop)<(pi,line['top'])<astop and (re.match(r'^Opgave\s+\d',line['text'],re.I) or (named_boundary and line['text'].startswith(named_boundary))):
                        astop=(pi,line['top']-3)
            solution,solutiontext,answer_visual=fragments('uitwerking',ap,(apage,atop-2),astop,f'antwoord-{n}')
            clean_solution=re.sub(r'^Vraag\s+\d+\s*[.:]?\s*\([^\n]*?\)\s*','',solutiontext,count=1,flags=re.I).strip()
            if not answer_visual and len(clean_solution)<750 and not re.search(r'[\ufffd\U0001d400-\U0001d7ffα-ωΑ-Ω₀-₉]|\bH\s*:|Tabel|Figuur|Stratum|ANOVA|Coefficients',clean_solution,re.I):
                solution='<p>'+html.escape(clean_solution).replace('\n','<br>')+'</p>'
            prompt=re.sub(r'^Vraag\s+\d+\s*[.:]?\s*\([^\n]*?\)\s*','',text,count=1,flags=re.I).strip()
            prompt=re.sub(r'Pagina\s+\d+\s+van\s+\d+','',prompt,flags=re.I).strip()
            # Short, text-only questions use the same reflowing text presentation as CAFA2.
            # Complex source expressions, tables and figures retain their verified image.
            if not question_visual and len(prompt)<1200 and not re.search(r'[\ufffd\U0001d400-\U0001d7ff]|[αβ]|Model Summary|Coefficients',prompt,re.I):
                safe=html.escape(re.sub(r'\s+',' ',prompt))
                safe=re.sub(r'\s+([a-z]\.\s*\()',r'</p><p>\1',safe)
                markup='<p>'+safe+'</p>'
            for note in e.get('sourceNotes',[]):
                if n in note['questions']:
                    solution='<p><strong>Toelichting bij de bron:</strong> '+html.escape(note['text'])+'</p>'+solution
            # The complete original extract is always retained, including any accompanying data.
            questions.append(dict(id=f'vraag-{n}',number=n,originalNumber=original,displayNumber=q['displayNumber'],title=f'Vraag {q["displayNumber"]}',sectionId=q['sectionId'],type='open',points=q['points'],prompt=prompt or f'Vraag {original}',promptHtml=markup,solution=solutiontext,solutionHtml=solution,sourcePage=q['page'],hasSourceVisual=question_visual))
            questions[-1]['answerAudit']=q['answerAudit']
        for j,section in enumerate(sections):
            section['caseHtml']=curate_case(e['id'],j,''.join(case_parts[j]))
            section['caseText']='\n'.join(case_texts[j])
            assert not re.search(r'^Vraag\s+\d+\s*[.:]?\s*\(\d+\s*punt',section['caseText'],re.I|re.M), (e['id'],section['id'],'question in case')
        introduction=''
        if boundaries[0][0]>0:
            introduction,_,_=fragments('opgaven',p,(0,35),(boundaries[0][0],boundaries[0][1]-3),'introductie')
        else:
            introduction=f'<h2>SRA · {e["date"]}</h2><p>'+'. '.join(f'{html.escape(s["title"])} ({s["points"]} punten)' for s in e['sections'])+'.</p><p>Dit bronbestand begint direct met de eerste opgave. De casus, tabellen en grafieken staan tijdens het maken onder Casus.</p>'
        if any(q['originalNumber']!=q['number'] for q in e['questions']):
            introduction='<p><strong>Vraagnummering:</strong> de bron begint per opgave opnieuw. Vraag 2.1 betekent opgave 2, vraag 1. De voortgang telt alle vragen achter elkaar.</p>'+introduction
        if e.get('duplicateOf'):
            other=e['duplicateOf']; date=f'{other[6:]}-{other[4:6]}-{other[:4]}'
            introduction=f'<p>Deze versie bevat dezelfde vragen als {date}. Beide bronbestanden zijn afzonderlijk beschikbaar; de tentamenanalyse telt deze inhoud eenmaal.</p>'+introduction
        exams.append(dict(id=e['id'],title='SRA',date=f'{e["id"][:4]}-{e["id"][4:6]}-{e["id"][6:]}',durationMinutes=e['duration'] or 150,durationUnconfirmed=e['duration'] is None,maxScore=100,introductionHtml=introduction,sections=sections,questions=questions))
        p.close();ap.close()
    (ROOT/'data/cirrus-exams.js').write_text('/* Gemaakt met Codex. SRA-bronnen voor de CAFA2-tentamenbediening. */\nwindow.SRA_CIRRUS_EXAMS = '+json.dumps(exams,ensure_ascii=False)+';\n',encoding='utf8')
    print(f'Cirrus: {len(exams)} volledige tentamens, {sum(len(e["questions"]) for e in exams)} vragen met eigen bronuitsneden.')

if __name__=='__main__': build()
