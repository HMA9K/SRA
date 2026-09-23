/* Gemaakt met Codex: regressies voor uitleg bij het aangeklikte woord.
 * Werkelijke helper in een kleine DOM-harnas; browsercontrole blijft nodig
 * voor letterhoogtes en de uiteindelijke CSS-layout. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');

function harness(width = 1024, height = 768) {
  const handlers = new Map(), frames = [];
  const document = {documentElement:{clientWidth:width}, activeElement:null};
  const window = {innerHeight:height};
  for (const [target, name] of [[document,'document'],[window,'window']]) {
    target.addEventListener = (type, handler) => {
      const key = name + ':' + type;
      handlers.set(key, [...(handlers.get(key) || []), handler]);
    };
  }
  function emit(target, type, extra = {}) {
    const event = {type, target:document, defaultPrevented:false, preventDefault(){this.defaultPrevented=true;}, ...extra};
    for (const handler of handlers.get(target + ':' + type) || []) handler(event);
    return event;
  }
  function element(id, rect = {}) {
    return {
      id, hidden:true, isConnected:true, style:{}, dataset:{}, attrs:{}, parent:null,
      rect:{top:200,bottom:220,left:200,right:270,...rect},
      getBoundingClientRect(){return this.rect;},
      get offsetWidth(){return Math.min(360,parseFloat(this.style.maxWidth) || 360);},
      get offsetHeight(){return Math.min(220,parseFloat(this.style.maxHeight) || 220);},
      setAttribute(name,value){this.attrs[name]=value;},
      removeAttribute(name){delete this.attrs[name];},
      contains(node){for(let n=node;n;n=n.parent)if(n===this)return true;return false;},
      querySelector(){return this.first || null;},
      focus(options){this.focusOptions=options;document.activeElement=this;emit('document','focusin',{target:this});}
    };
  }
  vm.runInNewContext(fs.readFileSync(path.join(root,'js/inline-help.js'),'utf8'), {
    window, document, requestAnimationFrame(callback){frames.push(callback);return frames.length;}
  });
  return {help:window.SRAInlineHelp, element, document, window, emit,
    flush(){while(frames.length)frames.shift()();}};
}

{
  const h=harness(), anchor=h.element('term'), panel=h.element('help');
  anchor.focus(); h.help.open(panel,anchor);
  assert.equal(panel.hidden,false);
  assert.equal(panel.style.top,'227px','Uitleg staat direct onder het aangeklikte woord.');
  assert.equal(panel.style.left,'200px');
  assert.equal(panel.dataset.placement,'below');
  assert.equal(anchor.attrs['aria-expanded'],'true');
  assert.equal(anchor.attrs['aria-controls'],'help');
  assert.equal(h.document.activeElement,anchor,'Openen verplaatst de toetsenbordfocus niet naar een groot venster.');
  h.help.open(panel,anchor);
  assert.equal(panel.hidden,true,'Tweede klik op hetzelfde woord sluit de uitleg.');
  assert.equal(anchor.attrs['aria-expanded'],'false');
  assert.equal(Object.hasOwn(panel.attrs,'open'),false);
}

{
  const h=harness(), term=h.element('term'), formula=h.element('formula'), a=h.element('terms-help'), b=h.element('formula-help');
  h.help.open(a,term); formula.focus(); h.help.open(b,formula);
  assert.equal(a.hidden,true,'Begrippen en formules mogen geen gestapelde vensters achterlaten.');
  assert.equal(term.attrs['aria-expanded'],'false');
  assert.equal(b.hidden,false);
  h.help.close(a);
  assert.equal(b.hidden,false,'Een inactief uitlegtype sluit niet de actieve formule-uitleg.');
  const outside=h.element('outside'); outside.focus();
  assert.equal(b.hidden,true);
  assert.equal(h.document.activeElement,outside,'Buiten de uitleg lezen blijft mogelijk zonder focus terug te stelen.');
}

{
  const h=harness(), anchor=h.element('term'), panel=h.element('help'), close=h.element('close'), outside=h.element('outside');
  close.parent=panel; panel.first=close; anchor.focus(); h.help.open(panel,anchor);
  assert.equal(h.emit('document','keydown',{key:'Tab',target:anchor}).defaultPrevented,true);
  assert.equal(h.document.activeElement,close,'Tab bereikt de sluitknop zonder langs de hele pagina te gaan.');
  assert.equal(h.emit('document','keydown',{key:'Tab',target:close,shiftKey:true}).defaultPrevented,true);
  assert.equal(h.document.activeElement,anchor);
  close.focus(); h.emit('document','keydown',{key:'Escape',target:close});
  assert.equal(panel.hidden,true); assert.equal(h.document.activeElement,anchor);
  assert.equal(anchor.focusOptions.preventScroll,true,'Sluiten springt niet naar een andere leespositie.');
  h.help.open(panel,anchor); h.emit('document','pointerdown',{target:close});
  assert.equal(panel.hidden,false,'Klikken in de uitleg sluit haar niet voortijdig.');
  h.emit('document','pointerdown',{target:outside}); assert.equal(panel.hidden,true);
}

{
  const h=harness(390,844), anchor=h.element('term',{left:340,right:380,top:120,bottom:144}), panel=h.element('help');
  h.help.open(panel,anchor);
  assert.ok(parseFloat(panel.style.left)>=12);
  assert.ok(parseFloat(panel.style.left)+panel.offsetWidth<=378,'Uitleg bij een woord rechts past op mobiel.');
  assert.equal(panel.dataset.placement,'below');
  anchor.rect={left:20,right:80,top:795,bottom:815};
  h.emit('document','scroll'); h.flush();
  assert.equal(panel.dataset.placement,'above','Alleen bij ruimtegebrek onderaan wijkt de uitleg naar boven uit.');
  assert.ok(parseFloat(panel.style.top)+panel.offsetHeight<anchor.rect.top);
  h.window.innerHeight=1100; h.emit('window','resize'); h.flush();
  assert.equal(panel.dataset.placement,'below','Bij meer ruimte komt uitleg weer onder het woord.');
  anchor.rect.top=-80; anchor.rect.bottom=-40; h.emit('document','scroll'); h.flush();
  assert.equal(panel.hidden,true,'Uitleg blijft niet los van een weggerold woord hangen.');
}

{
  const h=harness(), anchor=h.element('term'), panel=h.element('help');
  h.help.open(panel,anchor); h.emit('window','hashchange');
  assert.equal(panel.hidden,true,'Navigeren sluit resterende uitleg.');
  h.help.open(panel,anchor); anchor.isConnected=false; h.emit('document','scroll'); h.flush();
  assert.equal(panel.hidden,true,'Een verwijderd of vervangen woord houdt geen uitlegvenster open.');
}

// The independent producers must keep using the same non-modal behavior.
for (const file of ['js/terms.js','js/formula-help.js']) {
  const script=fs.readFileSync(path.join(root,file),'utf8');
  assert.match(script,/SRAInlineHelp\.open\(/,file+' gebruikt de gedeelde uitleg.');
  assert.doesNotMatch(script,/\.showModal\s*\(/,file+' mag geen schermvullende modal openen.');
  assert.match(script,/['"]aria-modal['"],\s*['"]false['"]/,file+' beschrijft niet-modale uitleg.');
}
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.ok(index.indexOf('js/inline-help.js')<index.indexOf('js/terms.js'));
const portable=fs.readFileSync(path.join(root,'SRA interactieve samenvatting.html'),'utf8').replace(/\r\n/g,'\n');
assert.ok(portable.includes(fs.readFileSync(path.join(root,'js/inline-help.js'),'utf8').replace(/\r\n/g,'\n')),
  'De zelfstandige HTML bevat de actuele uitleghelper; bouw opnieuw als deze achterloopt.');
console.log('OK: uitleg onder het woord, mobiele randen, wisselen, focus, Escape, buitenklik, scroll en zelfstandige HTML.');
