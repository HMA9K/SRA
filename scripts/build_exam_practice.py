"""Build source-linked practice from existing exam records and reviewed choices."""
from pathlib import Path
from copy import deepcopy
import json,html,hashlib
from exam_mc.march_2025 import ROWS as MARCH_2025
ROOT=Path(__file__).resolve().parents[1]
from exam_mc.october_2024 import ROWS as OCTOBER_2024
from exam_mc.march_2024 import ROWS as MARCH_2024
from exam_mc.october_2023 import ROWS as OCTOBER_2023
from exam_mc.march_2023 import ROWS as MARCH_2023
from exam_mc.october_2022 import ROWS as OCTOBER_2022
from exam_mc.march_2022 import ROWS as MARCH_2022
from exam_mc.november_2021 import ROWS as NOVEMBER_2021
from exam_mc.march_2020 import ROWS as MARCH_2020
AUTHORED={'20250317':MARCH_2025,'20241028':OCTOBER_2024,'20240318':MARCH_2024,'20231030':OCTOBER_2023,'20230315':MARCH_2023,'20221031':OCTOBER_2022,'20220316':MARCH_2022,'20211101':NOVEMBER_2021,'20200323':MARCH_2020}
DEPENDENCIES={('20231030',5):[4],('20231030',12):[11],('20230315',2):[1],('20230315',4):[3],('20230315',12):[11],('20230315',16):[14],('20241028',2):[1],('20241028',6):[5],('20240318',3):[1],('20240318',7):[6],('20240318',15):[12,14],('20250317',6):[5],('20250317',8):[7],('20250317',12):[11],('20250317',18):[13,14]}
DEPENDENCIES.update({('20221031',3):[2],('20221031',6):[5],('20221031',16):[15],('20220316',2):[1],('20220316',3):[1,2],('20211101',2):[1],('20211101',7):[6],('20200323',3):[2],('20200323',7):[2,3,6],('20200323',20):[19]})
def read_data(path,marker):return json.loads((ROOT/path).read_text(encoding='utf-8').split(marker,1)[1].rstrip(';\n'))
def build():
 exams=read_data('data/cirrus-exams.js','window.SRA_CIRRUS_EXAMS = ')
 topics=read_data('data/mc.js','window.SRAMCData = ')['topics'];topicmap={t['id']:t for t in topics}
 output=[];coverage=[]
 for exam in exams:
  canonical='20200323' if exam['id']=='20200626' else exam['id']
  rows=AUTHORED.get(canonical,[])
  for source in exam['questions']:
   matches=[r for r in rows if r['number']==source['number']]
   ids=['exam-'+canonical+'-'+source['id']+('-'+r['part'] if r['part'] else '') for r in matches]
   coverage.append({'exam':exam['id'],'question':source['id'],'displayNumber':source['displayNumber'],'practiceIds':ids,'status':'mapped' if matches else 'pending','duplicateOf':'20200323' if exam['id']=='20200626' else None})
   if exam['id']!=canonical:continue
   for row,id in zip(matches,ids):
    resolved=list(row['options']);resolved[0]=resolved[0] or source.get('answerAudit',{}).get('note');assert isinstance(resolved[0],str) and resolved[0],id
    assert len(resolved)==4 and len(set(resolved))==4,id
    assert all(t in topicmap for t in row['topics']),id
    section=next(s for s in exam['sections'] if s['id']==source['sectionId'])
    audit=source.get('answerAudit',{});correct=resolved[0];note=audit.get('note','')
    needed=[next(q for q in exam['questions'] if q['number']==n) for n in DEPENDENCIES.get((canonical,source['number']),[])]
    prerequisites='<details class="mc-prerequisites"><summary>Eerdere uitkomsten voor deze vraag</summary>'+''.join('<h3>Vraag '+html.escape(str(q['displayNumber']))+'</h3>'+q['solutionHtml']+'<p>'+html.escape(q.get('answerAudit',{}).get('note',''))+'</p>' for q in needed)+'</details>' if needed else ''
    focus=row['focus'] or source['prompt']
    explanation=correct+(' '+note if note and note!=correct else '')
    options=resolved;reasons=[explanation]+['Deze optie is onjuist. '+explanation for _ in options[1:]]
    target=int(hashlib.sha256(id.encode()).hexdigest()[:8],16)%4
    options=options[-target:]+options[:-target] if target else options
    reasons=reasons[-target:]+reasons[:-target] if target else reasons
    guidance=deepcopy(topicmap[row['topics'][0]]['questions'][0]['guidance'])
    question=dict(id=id,prompt=focus,originalPrompt=source['prompt'],originalPromptHtml=source['promptHtml'],sourceVisualHtml=source['promptHtml'] if source['hasSourceVisual'] else '',options=options,correct=target,level=3,
      topics=row['topics'],sourceExamId=canonical,sourceQuestionId=source['id'],sourceQuestionNumber=source['displayNumber'],sourcePart=row['part'],sourcePage=source['sourcePage'],sourceAnswerPage=audit.get('answerPage',1),
      caseHtml=section['caseHtml'],prerequisitesHtml=prerequisites,prerequisiteIds=[q['id'] for q in needed],
      officialSolutionHtml=source['solutionHtml'],sourceNote=note,explanation=explanation,steps=[correct]+([note] if note and note!=correct else []),
      optionExplanations=reasons,pattern=focus,trap='Controleer de bronvoorwaarden, eenheden en afronding. '+note,
      recognition={'signals':source['prompt'],'meaning':focus,'approach':explanation,'answer':'Je antwoord moet deze conclusie onderbouwen: '+correct},guidance=guidance)
    output.append(question)
 payload={'version':1,'questions':output}
 script='/* Oefeningen bij bestaande oorspronkelijke tentamenrecords. */\nwindow.SRAExamPractice = '+json.dumps(payload,ensure_ascii=False,indent=2)+';\n'
 script+='for (const q of window.SRAExamPractice.questions) { for (const id of q.topics) { const topic=window.SRAMCData.topics.find(t=>t.id===id); if(!topic)throw Error("Onbekend onderwerp"); topic.questions.push(q); } }\n'
 (ROOT/'data/exam-practice.js').write_text(script,encoding='utf-8')
 (ROOT/'docs/exam-practice-coverage.json').write_text(json.dumps({'questions':coverage,'mapped':sum(r['status']=='mapped' for r in coverage),'total':len(coverage),'practiceCount':len(output)},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 print('Tentamenpraktijk:',len(output),'oefeningen;',sum(r['status']=='mapped' for r in coverage),'van',len(coverage),'bronvragen gekoppeld.')
if __name__=='__main__':build()
