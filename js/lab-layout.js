/* Gemaakt met Codex: koppel de bediening aan de bijbehorende zichtbare uitkomst. */
(function(root,factory){
 'use strict';
 const api=factory();
 if(typeof module==='object'&&module.exports)module.exports=api;
 if(root)root.SRALabLayout=api;
})(typeof window!=='undefined'?window:null,function(){
 'use strict';
 const voids=new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
 const decode=text=>String(text).replace(/&(#(?:x[\da-f]+|\d+)|amp|lt|gt|quot|apos|nbsp|euro|minus|times|le|ge);/gi,(entity,key)=>{
  const names={amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' ',euro:'€',minus:'−',times:'×',le:'≤',ge:'≥'};
  if(key[0]!=='#')return names[key.toLowerCase()]||entity;
  const point=key[1].toLowerCase()==='x'?parseInt(key.slice(2),16):Number(key.slice(1));
  return point>=0&&point<=0x10ffff?String.fromCodePoint(point):entity;
 });
 const plain=html=>decode(String(html).replace(/<[^>]*>/g,' ')).replace(/\s+/g,' ').trim();
 const classes=node=>(node.attrs.class||'').split(/\s+/);
 const has=(node,name)=>classes(node).includes(name);

 // A small balanced scanner keeps nested result/metric divs intact without
 // requiring a browser DOM. Input consists only of generated project markup.
 function elements(html){
  const nodes=[],stack=[];
  const tokens=/<\/?([a-z][\w:-]*)\b(?:[^"'<>]|"[^"]*"|'[^']*')*>/gi;
  for(const match of html.matchAll(tokens)){
   const token=match[0],tag=match[1].toLowerCase();
   if(token.startsWith('</')){
    let index=stack.length-1;while(index>=0&&stack[index].tag!==tag)index--;
    if(index<0)continue;
    for(let i=stack.length-1;i>=index;i--){stack[i].contentEnd=match.index;stack[i].end=match.index+token.length;}
    stack.length=index;continue;
   }
   const attrs={},body=token.slice(match[1].length+1,token.endsWith('/>')?-2:-1);
   for(const attr of body.matchAll(/([^\s=<>/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g))attrs[attr[1].toLowerCase()]=decode(attr[2]??attr[3]??attr[4]??'');
   const node={tag,attrs,start:match.index,contentStart:match.index+token.length,contentEnd:match.index+token.length,end:match.index+token.length,parent:stack.at(-1)||null};
   nodes.push(node);
   if(!voids.has(tag)&&!token.endsWith('/>'))stack.push(node);
  }
  return nodes;
 }
 const outer=(html,node)=>html.slice(node.start,node.end);
 const inner=(html,node)=>html.slice(node.contentStart,node.contentEnd);
 function compact(html){
  const notes=elements(html).filter(node=>has(node,'chart-note')||has(node,'table-hint'));
  for(const node of notes.sort((a,b)=>b.start-a.start))html=html.slice(0,node.start)+html.slice(node.end);
  return html;
 }
 function inDetails(node){for(let p=node.parent;p;p=p.parent)if(p.tag==='details')return true;return false;}
 function nestedCaption(html,node,tag,fallback){
  const match=elements(inner(html,node)).find(item=>item.tag===tag);
  return match?plain(inner(inner(html,node),match)):fallback;
 }
 function analyse(value){
  const html=String(value??''),nodes=elements(html),metricBlock=nodes.find(node=>has(node,'results'));
  const metrics=metricBlock?outer(html,metricBlock):'',views=[];
  nodes.filter(node=>node.tag==='figure').forEach((node,index)=>views.push({key:'chart-'+index,title:nestedCaption(html,node,'figcaption','Grafiek '+(index+1)),html:compact(outer(html,node))}));
  const tables=nodes.filter(node=>has(node,'table-scroll')).sort((a,b)=>Number(inDetails(a))-Number(inDetails(b))||a.start-b.start);
  tables.forEach((node,index)=>views.push({key:'table-'+index,title:nestedCaption(html,node,'caption','Rekentabel '+(index+1)),html:compact(outer(html,node))}));
  const explanation=nodes.find(node=>has(node,'lab-interpretation'));
  if(views.length){
   if(explanation)views.push({key:'uitleg',title:'Betekenis van de uitkomst',html:outer(html,explanation)});
  }else if(html.trim())views.push({key:'route',title:'Uitkomst',html:compact(html)});
  let summary='';
  if(metricBlock){
   const metricHtml=inner(html,metricBlock);
   summary=elements(metricHtml).filter(node=>has(node,'metric')).map(node=>{
    const body=inner(metricHtml,node),parts=elements(body),number=parts.find(item=>item.tag==='b'),label=parts.find(item=>item.tag==='span');
    return number&&label?plain(inner(body,label))+': '+plain(inner(body,number)):plain(body);
   }).join('. ');
  }
  if(!summary&&explanation)summary=plain(inner(html,explanation)).replace(/^Wat zie je\?\s*/, '');
  if(!summary)summary=plain(html);
  return {metrics,views,summary:summary.length>340?summary.slice(0,337).trimEnd()+'…':summary};
 }
 function choose(labId,control,currentKey,views,mode){
  const available=Array.isArray(views)?views:[],exists=key=>available.some(view=>view.key===key);
  const fallback=exists(currentKey)?currentKey:(available.find(view=>view.key.startsWith('chart-'))||available[0])?.key||null;
  if(!control)return fallback;
  const charts=available.filter(view=>view.key.startsWith('chart-')),lastChart=charts.at(-1)?.key;
  let requested;
  if(labId==='interval')requested=control==='confidence'?lastChart:control==='n'?'chart-1':'chart-0';
  else if(labId==='schatter')requested=control==='n'?'chart-1':'chart-0';
  else if(labId==='verschil')requested=control==='meanError'?'chart-0':lastChart;
  else if(labId==='quotient')requested=['sumW','sumB'].includes(control)?'chart-0':lastChart;
  else if(labId==='regressieschatter')requested=['n','t','sw'].includes(control)?lastChart:'chart-0';
  else if(labId==='anova')requested=['n','k'].includes(control)?'table-0':['SSR','SSE'].includes(control)?'chart-0':undefined;
  else if(labId==='modelbouw')requested=control==='auxR2'?'chart-0':'table-0';
  else if(labId==='diagnose'){
   if(control==='mode')requested='chart-0';
   else if(control==='n'&&mode==='normal')requested='uitleg';
   else if(control==='skew')requested=currentKey==='chart-1'?'chart-1':'chart-0';
   else requested='chart-0';
  }
  return requested&&exists(requested)?requested:fallback;
 }
 return {analyse,choose};
});
