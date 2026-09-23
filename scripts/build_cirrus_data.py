"""Gemaakt met Codex: SRA-broninhoud voor de overgenomen CAFA2-bediening.

Bronuitsneden behouden formules, tabellen en grafieken; nooit antwoorden in Casus.
"""
from pathlib import Path
import json, re, html
import pdfplumber
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
Q = re.compile(r'^Vraag\s+(\d+)\s*[.:]?\s*\((\d+)\s*punt', re.I)
AQ = re.compile(r'^Vraag\s+(\d+)\s*[.:(]', re.I)

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
            markup,text,visual=fragments('opgaven',p,start,stop,label)
            if markup:
                assert not Q.search(text), (e['id'],label,'question in case')
                # Reflow prose at the default panel width. Keep source images whenever
                # mathematical notation, tabular columns or figures need their layout.
                complex_text=re.search(r'[\ufffd\U0001d400-\U0001d7ffα-ωΑ-Ω₀-₉=<>]|\b(?:tabel|figuur|afbeelding|stratum|strata|ANOVA|Coefficients|Model Summary)\b',text,re.I)
                short_numeric=any(len(line)<65 and len(re.findall(r'\d+[.,]?\d*',line))>2 for line in text.splitlines())
                if not visual and not complex_text and not short_numeric:
                    chunks=[];prose=[]
                    for line in text.splitlines():
                        if not prose and (re.match(r'^Opgave\s+\d',line,re.I) or (len(line)<45 and line.endswith(('BV','B.V.')))):
                            chunks.append('<p><strong>'+html.escape(line)+'</strong></p>')
                        else:
                            prose.append(line.strip())
                    if prose: chunks.append('<p>'+html.escape(' '.join(prose))+'</p>')
                    markup=''.join(chunks)
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
            section['caseHtml']=''.join(case_parts[j])
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
