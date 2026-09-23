/* Gemaakt met Codex. Eerste poging blijft bewaard, los van bestaande leschecks. */
(function(root){
 'use strict';
 function create(data,storage){
  const key='sra-mc-v1',questions=new Map(data.topics.flatMap(t=>t.questions.map(q=>[q.id,q])));
  let state={version:1,answers:{},marked:{}},readOnly=false,error='';
  function clean(raw){
   if(!raw||raw.version!==1||typeof raw.answers!=='object'||!raw.answers||typeof raw.marked!=='object'||!raw.marked)throw Error('Dit is geen geldige SRA-MC-back-up.');
   const result={version:1,answers:{},marked:{}};
   for(const [id,q] of questions){const a=raw.answers[id];if(a){if(!Number.isInteger(a.choice)||a.choice<0||a.choice>=q.options.length||!Number.isInteger(a.firstChoice)||a.firstChoice<0||a.firstChoice>=q.options.length)throw Error('Ongeldig antwoord in de MC-back-up.');result.answers[id]={choice:a.choice,firstChoice:a.firstChoice,attempts:Number.isInteger(a.attempts)?Math.max(1,Math.min(10000,a.attempts)):1};}if(raw.marked[id]===true)result.marked[id]=true;}
   return result;
  }
  try{const raw=storage.getItem(key);if(raw)state=clean(JSON.parse(raw));}catch(e){readOnly=true;error='Bestaande MC-opslag kan niet worden gelezen. Deze wordt niet overschreven; exporteer nieuwe antwoorden vóór afsluiten.';}
  function save(){if(readOnly)return false;try{storage.setItem(key,JSON.stringify(state));error='';return true;}catch(e){error='Browseropslag is niet beschikbaar. Exporteer je MC-voortgang vóór afsluiten.';return false;}}
  function record(id,choice){const q=questions.get(id);if(!q||!Number.isInteger(choice)||choice<0||choice>=q.options.length)throw Error('Kies een geldig antwoord.');const prev=state.answers[id];state.answers[id]={choice,firstChoice:prev?prev.firstChoice:choice,attempts:prev?Math.min(10000,prev.attempts+1):1};save();return state.answers[id];}
  function summary(topic){const items=topic?topic.questions:[...questions.values()];return {total:items.length,done:items.filter(q=>state.answers[q.id]).length,correct:items.filter(q=>state.answers[q.id]?.choice===q.correct).length,first:items.filter(q=>state.answers[q.id]?.firstChoice===q.correct).length};}
  return {record,summary,get:id=>state.answers[id],isMarked:id=>!!state.marked[id],mark(id,value){if(!questions.has(id))throw Error('Onbekende vraag.');state.marked[id]=!!value;save();},snapshot:()=>JSON.parse(JSON.stringify(state)),status:()=>error,restore(raw){const next=clean(raw);state=next;readOnly=false;save();return summary();}};
 }
 if(typeof module==='object'&&module.exports)module.exports={create};else root.SRAMCState={create};
})(typeof window==='undefined'?globalThis:window);
