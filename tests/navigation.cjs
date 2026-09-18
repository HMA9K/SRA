/* Browser-free navigation checks. The stub models only fields, history entries,
   scroll coordinates and events used by the navigation module. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const source=fs.readFileSync(path.join(__dirname,'../js/navigation.js'),'utf8');

class Target {
  constructor(){this.listeners=new Map();}
  addEventListener(type,listener){if(!this.listeners.has(type))this.listeners.set(type,[]);this.listeners.get(type).push(listener);}
  dispatchEvent(event){event.target ||= this;for(const listener of this.listeners.get(event.type)||[])listener(event);if(event.bubbles&&this.parent)this.parent.dispatchEvent(event);return true;}
}
class StubEvent {constructor(type,options={}){this.type=type;Object.assign(this,options);}}

function fixture(initialHash,render){
  const document=new Target(),root=new Target(),button={hidden:false};
  const window=new Target(),location={hash:initialHash},frames=[],scrollCalls=[];
  let entries=[{hash:initialHash,state:null}],position=0;
  document.activeElement=null;
  root.fields=[];root.details=[];root.steps=0;
  root.querySelectorAll=selector=>{
    if(selector==='input,select,textarea')return root.fields;
    if(selector==='input')return root.fields.filter(field=>field.tagName==='INPUT');
    if(selector==='details')return root.details;
    if(selector==='#example-steps>li')return Array.from({length:root.steps},()=>({}));
    throw Error('Unexpected selector: '+selector);
  };
  root.querySelector=selector=>selector==='#next-step'?{disabled:root.steps>=5,click(){root.steps++;}}:null;
  root.contains=element=>root.fields.includes(element)||root.details.includes(element);
  document.getElementById=id=>root.fields.find(field=>field.id===id)||null;
  window.scrollX=0;window.scrollY=0;
  window.scrollTo=(options,y)=>{
    const x=typeof options==='object'?options.left:options;
    const top=typeof options==='object'?options.top:y;
    window.scrollX=x;window.scrollY=top;scrollCalls.push([x,top]);
  };
  const history={
    scrollRestoration:'auto',
    get state(){return entries[position].state;},
    replaceState(state){entries[position].state=state;},
    back(){this.go(-1);},
    go(delta){const next=position+delta;if(next>=0&&next<entries.length){position=next;location.hash=entries[position].hash;}}
  };
  function field(options){
    const element=new Target();Object.assign(element,{id:'',name:'',type:'text',tagName:'INPUT',value:'',disabled:false},options);
    element.parent=root;element.value=String(element.value);element.events=[];
    const attrs=new Set(options.attributes||[]);element.hasAttribute=name=>attrs.has(name);
    let checked=!!options.checked;
    Object.defineProperty(element,'checked',{get(){return checked;},set(value){
      checked=!!value;
      if(checked&&element.type==='radio')for(const other of root.fields)if(other!==element&&other.type==='radio'&&other.name===element.name)other.checked=false;
    }});
    element.addEventListener('input',event=>{element.events.push(event.type);options.onInput?.(element);});
    element.addEventListener('change',event=>{element.events.push(event.type);options.onChange?.(element);});
    element.focus=()=>{document.activeElement=element;};
    return element;
  }
  const sandbox={window,document,location,history,Event:StubEvent,requestAnimationFrame:callback=>frames.push(callback)};
  vm.runInNewContext(source,sandbox,{filename:'navigation.js'});
  const navigation=window.SRANavigation;
  navigation.init(root,button);
  function flush(){while(frames.length)frames.shift()();}
  function renderActive(){
    const snapshot=navigation.before();
    root.fields=[];root.details=[];root.steps=0;document.activeElement=null;
    render(location.hash,{root,field,document});
    // The app renders a fresh page before applying any stored view.
    window.scrollTo({left:0,top:0,behavior:'instant'});
    navigation.after(snapshot);flush();
  }
  function captureLink(){
    const link={hasAttribute:()=>false};
    document.dispatchEvent({type:'click',defaultPrevented:false,target:{closest:()=>link}});
  }
  function navigate(hash){captureLink();entries=entries.slice(0,position+1);entries.push({hash,state:null});position++;location.hash=hash;renderActive();}
  function traverse(delta){history.go(delta);renderActive();}
  function userScroll(x,y){window.scrollX=x;window.scrollY=y;window.dispatchEvent(new StubEvent('scroll'));}
  function input(element,value){element.value=String(value);element.dispatchEvent(new StubEvent('input',{bubbles:true}));}
  renderActive();
  return {root,button,window,document,history,location,navigate,traverse,renderActive,userScroll,input,scrollCalls,get position(){return position;}};
}

// Independent entries restore their own values, expanded explanation and reading position.
let feedback='saved answer 0';
const app=fixture('#les/a',(hash,{root,field})=>{
  if(hash==='#les/a'){
    root.fields=[field({id:'lab-x',name:'x',type:'number',value:5}),
      field({id:'lab-mode',name:'mode',tagName:'SELECT',type:'select-one',value:'first'}),
      ...[0,1].map(value=>field({name:'question-a',type:'radio',value,checked:value===0,onChange:element=>{feedback='selected '+element.value;}}))];
    root.details=[{open:true},{open:false}];
    feedback='saved answer 0';
  }else root.fields=[field({id:'lab-y',name:'y',type:'number',value:7})];
});
assert.equal(app.history.scrollRestoration,'manual');
assert.equal(app.button.hidden,true,'De eerste eigen entry heeft geen terugknop.');
app.button.onclick();assert.equal(app.position,0,'Terug op de eerste eigen entry verlaat de app niet.');
app.input(app.root.fields[0],18);
app.root.fields[1].value='second';app.root.fields[1].dispatchEvent(new StubEvent('change',{bubbles:true}));
app.root.fields[3].checked=true;app.root.fields[3].dispatchEvent(new StubEvent('change',{bubbles:true}));
app.root.details[0].open=false;app.root.details[1].open=true;app.root.steps=3;
app.root.fields[0].focus();app.userScroll(12,530);
app.navigate('#les/b');
assert.equal(app.button.hidden,false);
app.input(app.root.fields[0],44);app.userScroll(0,110);
app.button.onclick();app.renderActive();
assert.equal(app.location.hash,'#les/a');
assert.equal(app.root.fields[0].value,'18');
assert.equal(app.root.fields[1].value,'second');
assert.deepEqual(app.root.fields[1].events,['change']);
assert.equal(app.root.fields[2].checked,false);
assert.equal(app.root.fields[3].checked,true,'Ook een radio zonder id moet terugkomen.');
assert.deepEqual(app.root.fields[3].events,['change'],'Herstel moet de zichtbare antwoordfeedback opnieuw laten reageren.');
assert.equal(feedback,'selected 1');
assert.deepEqual(app.root.details.map(detail=>detail.open),[false,true]);
assert.equal(app.root.steps,3);
assert.equal(app.document.activeElement.id,'lab-x');
assert.deepEqual([app.window.scrollX,app.window.scrollY],[12,530]);
assert.deepEqual(app.scrollCalls.slice(-2),[[12,530],[12,530]],'Positie wordt ook na het renderframe vastgezet.');
assert.equal(app.button.hidden,true);
app.traverse(1);
assert.equal(app.location.hash,'#les/b');
assert.equal(app.root.fields[0].value,'44');
assert.deepEqual([app.window.scrollX,app.window.scrollY],[0,110]);
assert.equal(app.button.hidden,false);

// A new visit to the same hash has a separate view, while back still finds the older one.
app.navigate('#les/a');
assert.equal(app.root.fields[0].value,'5','Een nieuw bezoek erft geen historische labinvoer.');
app.input(app.root.fields[0],29);app.userScroll(0,250);
app.traverse(-1);app.traverse(-1);
assert.equal(app.root.fields[0].value,'18');
assert.equal(app.window.scrollY,530);
app.traverse(1);app.traverse(1);
assert.equal(app.root.fields[0].value,'29');
assert.equal(app.window.scrollY,250);

// Durable notes belong to the current saved state, never to a historical view snapshot.
const notes={e1:''};let writes=0;
const cases=fixture('#tentamen/e1',(hash,{root,field})=>{
  if(hash==='#tentamen/e1')root.fields=[field({id:'note-e1',tagName:'TEXTAREA',value:notes.e1,attributes:['data-note'],onInput:element=>{notes.e1=element.value;writes++;}})];
});
cases.input(cases.root.fields[0],'Eerste uitwerking');cases.navigate('#tentamen/e2');
cases.navigate('#tentamen/e1');cases.input(cases.root.fields[0],'Nieuwste uitwerking');
assert.equal(writes,2);
cases.traverse(-1);cases.traverse(-1);
assert.equal(cases.root.fields[0].value,'Nieuwste uitwerking');
assert.equal(notes.e1,'Nieuwste uitwerking','Terug mag geen oude notitie over de nieuwste tekst schrijven.');
assert.equal(writes,2,'Herstel van de pagina mag een opgeslagen notitie niet opnieuw schrijven.');
cases.traverse(1);cases.traverse(1);
assert.equal(cases.root.fields[0].value,'Nieuwste uitwerking');
assert.equal(writes,2);

console.log('OK: heen/terug/vooruit, aparte history-snapshots, scroll en leesstappen, radioherstel met change en behoud van nieuwste notities.');
