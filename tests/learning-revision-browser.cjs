/* Browsercontrole: inhoudsblokken, bronkoppen, casussen en bestaande voortgang. */
const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const root=path.resolve(__dirname,'..'),out=path.join(root,'tmp/learning-revision-qa');fs.mkdirSync(out,{recursive:true});
const server=http.createServer((req,res)=>{
 const rel=decodeURIComponent(new URL(req.url,'http://localhost').pathname),file=path.resolve(root,'.'+(rel==='/'?'/index.html':rel));
 if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end();return;}
 res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.pdf':'application/pdf'})[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);
});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;
 try{
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
  const context=await browser.newContext({viewport:{width:1366,height:950}}),page=await context.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(String(e)));
  const base=process.env.TEST_BASE_URL||'http://127.0.0.1:'+server.address().port;
  await page.goto(base+'/index.html#les/stratificatie');await page.locator('.lesson-source-title').waitFor({state:'attached'});
  const course=await page.evaluate(()=>window.SRA.lessons.map(l=>({id:l.id,sections:l.sections.length}))),mc=await page.evaluate(()=>window.SRAMCData.topics.map(t=>({id:t.id,questions:t.questions.map(q=>({id:q.id,stimulus:!!q.stimulusHtml,correct:q.correct,prompt:q.prompt}))})));
  const overflow=()=>page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);
  const duplicates=()=>page.evaluate(()=>[...document.querySelectorAll('section.section,.formula-guide-card')].flatMap(block=>{
   const ids=[...block.querySelectorAll('[data-sra-auto-term]')].map(e=>e.dataset.sraTerm);
   return ids.filter((id,i)=>ids.indexOf(id)!==i).map(id=>block.querySelector('summary,h2')?.textContent+': '+id);
  }));
  for(const width of [1366,768,390,320]){
   await page.setViewportSize({width,height:950});
   for(const theme of ['light','dark']){
   await page.evaluate(theme=>window.StudyTheme.setMode(theme),theme);
   for(const lesson of course){
    await page.evaluate(id=>location.hash='#les/'+id,lesson.id);
    await page.waitForFunction(id=>document.querySelector('.lesson-top h1')?.textContent.endsWith(window.SRA.lessons.find(l=>l.id===id).title)&&location.hash==='#les/'+id&&document.querySelectorAll('#uitleg>section').length===window.SRA.lessons.find(l=>l.id===id).sections.length,lesson.id);
    await page.evaluate(()=>window.SRATerms.annotate(document.querySelector('#main')));
    assert.equal(await page.locator('#uitleg>section').count(),lesson.sections);
    assert.match(await page.locator('.lesson-source-title').textContent(),/Hoorcollege/);
    assert.equal(await page.locator('#uitleg>.lesson-exam-focus').count(),1);
    assert.deepEqual(await duplicates(),[],`${lesson.id}: dubbel begrip bij ${width}px`);
    assert.equal(await overflow(),false,`${lesson.id}: horizontale pagina-overloop bij ${width}px`);
    const results=page.locator('#onderzoek .lab-all-results');
    await results.evaluate(el=>el.open=true);
    for(const chart of await results.locator('.chart-scroll svg').all()){
     const box=await chart.boundingBox();
     assert.ok(box.height<=281,`${lesson.id}: compacte grafiekhoogte ${box.height}`);
    }
    assert.equal(await overflow(),false,`${lesson.id}: open labresultaten bij ${width}px`);
    if(lesson.id==='rekenen'&&width===1366&&theme==='light')await results.screenshot({path:path.join(out,'rekenen-results.png')});
    await results.evaluate(el=>el.open=false);
    assert.equal(await page.locator('.lesson-start').isVisible(),true);
    assert.ok((await page.locator('.lesson-opening').innerText()).length>150);
    assert.ok((await page.locator('.lesson-conclusion').innerText()).length>150);
    assert.match(await page.locator('.example-context').innerText(),/\?/);
    assert.equal(await page.locator('.formula-help-hint,.term-hint').count(),0);
    // Uitvullen alleen waar de regel breed genoeg is; op smalle schermen geeft het grote woordgaten.
    assert.equal(await page.locator('.section-body p').first().evaluate(el=>getComputedStyle(el).textAlign),width<=600?'left':'justify');
    await page.evaluate(()=>window.scrollTo({top:800,behavior:'instant'}));
    await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
    const bounds=await page.evaluate(()=>{
     const rect=s=>document.querySelector(s).getBoundingClientRect();
     return {header:rect('.study-topbar').top,nav:rect('.study-topbar').bottom,title:rect('.learning-page-head').top};
    });
    assert.ok(Math.abs(bounds.header)<2 && Math.abs(bounds.nav-bounds.title)<2,JSON.stringify({lesson:lesson.id,width,theme,bounds}));
   }
   }
  }
  // Bronnummers per blok openen de ingeklapte bronnenlijst onderaan, zonder routewissel.
  await page.evaluate(()=>{window.StudyTheme.setMode('light');location.hash='#les/stratificatie';});
  await page.locator('#lesson-sources').waitFor({state:'attached'});
  assert.equal(await page.locator('#lesson-sources').getAttribute('open'),null);
  const note=page.locator('#uitleg .source-note:visible').nth(3),noteTarget=(await note.getAttribute('href')).slice(1);
  await note.click();
  await page.waitForFunction(id=>{const r=document.getElementById(id).getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight;},noteTarget);
  assert.notEqual(await page.locator('#lesson-sources').getAttribute('open'),null);
  assert.equal(await page.evaluate(()=>location.hash),'#les/stratificatie');
  // Iedere ingevulde samenvatting per hoofdonderwerp heeft een link op Leren en een eigen pagina met alleen die samenvatting.
  await page.evaluate(()=>location.hash='#leren');
  await page.locator('.sra-learning-phase').first().waitFor();
  const summaryLinks=await page.locator('.sra-phase-summary-link').evaluateAll(links=>links.map(a=>a.getAttribute('href')));
  assert.equal(summaryLinks.length,await page.evaluate(()=>Object.values(window.SRA.summaries).filter(Boolean).length));
  await page.setViewportSize({width:1366,height:950});
  const heights=await page.locator('.sra-learning-phase').evaluateAll(nodes=>nodes.slice(0,4).map(n=>Math.round(n.getBoundingClientRect().height)));
  assert.equal(new Set(heights).size,1,'De vier fasekaarten zijn even hoog: '+heights);
  await page.setViewportSize({width:320,height:900});
  for(const href of summaryLinks){
   await page.evaluate(h=>location.hash=h,href);await page.locator('.sra-summary-page .sra-phase-summary-body').waitFor();
   assert.equal(await page.locator('.sra-phase-summary-body').count(),1,href+': alleen de samenvatting van deze fase');
   assert.equal(await overflow(),false,href+': horizontale pagina-overloop bij 320px');
   assert.equal(await page.locator('.sra-phase-summary-body table').count(),await page.locator('.sra-phase-summary-body .table-scroll table').count());
  }
  // Brede schermen: lesinhoud in het midden van de beschikbare ruimte en formules in één vak naast elkaar.
  await page.setViewportSize({width:1840,height:950});
  await page.evaluate(()=>{location.hash='#les/verschil';});
  await page.locator('#uitleg .formula-typeset').first().waitFor();
  // Gemeten aan de positie: de browser meldt automatische marges van een rasteritem als 0px.
  const wide=await page.evaluate(()=>{const main=document.querySelector('#main'),m=main.getBoundingClientRect(),p=main.parentElement.getBoundingClientRect(),cols=getComputedStyle(main.parentElement).gridTemplateColumns.split(' ').map(parseFloat),colLeft=p.left+(cols.length>1?cols[0]:0);
   return {left:Math.round(m.left-colLeft),right:Math.round(p.right-m.right),rows:[...document.querySelector('#uitleg .formula-typeset').children].map(r=>Math.round(r.getBoundingClientRect().top))};});
  assert.ok(wide.left>0&&Math.abs(wide.left-wide.right)<=2,'lesinhoud gecentreerd: '+JSON.stringify(wide));
  assert.equal(new Set(wide.rows).size,1,'formules staan naast elkaar: '+JSON.stringify(wide.rows));
  await page.setViewportSize({width:1366,height:950});
  // De uitleg bij een inline breuk blijft met het toetsenbord bereikbaar.
  await page.evaluate(()=>{window.StudyTheme.setMode('light');location.hash='#les/rekenen';});
  await page.locator('.section-body math[display="inline"] mfrac').first().waitFor();
  const formulaSection=page.locator('#uitleg>section').filter({has:page.locator('math[display="inline"] [data-formula-help]')}).first();
  // Tekstblokken zijn vast open: geen uitklapknop.
  assert.equal(await formulaSection.locator(':scope>summary').count(),0);
  assert.equal(await page.locator('#uitleg details.section').count(),0);
  const symbol=page.locator('.section-body math[display="inline"] [data-formula-help]').first();
  await symbol.scrollIntoViewIfNeeded();
  await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
  await symbol.focus();await page.keyboard.press('Enter');
  await page.locator('#formula-help-popup').waitFor({state:'visible'});await page.keyboard.press('Escape');
  await page.locator('#formula-help-popup').waitFor({state:'hidden'});
  const spreadTable=page.locator('table').filter({has:page.locator('caption',{hasText:'Drie verschillende soorten spreiding'})});
  const formulaSizes=await spreadTable.locator('tbody td:first-child math').evaluateAll(nodes=>nodes.map(n=>({compound:!!n.querySelector('mfrac,msqrt,mroot'),math:parseFloat(getComputedStyle(n).fontSize),cell:parseFloat(getComputedStyle(n.closest('td')).fontSize)})));
  assert.equal(formulaSizes.length,3);
  // Gewone symbolen hebben de tekstgrootte; breuken en wortels zijn groter zodat teller en noemer leesbaar blijven.
  assert.ok(formulaSizes.filter(s=>s.compound).length===2&&formulaSizes.every(s=>s.compound?s.math>=s.cell*1.29:s.math===s.cell),'Tabelformules: '+JSON.stringify(formulaSizes));
  // De voorbeeldvraag is zichtbaar voordat de leerling een stap opent.
  await page.locator('[data-scroll="voorbeeld"]').click();
  await page.locator('#next-step').click();assert.equal(await page.locator('#example-steps>li').count(),1);
  await page.locator('#all-steps').click();assert.equal(await page.locator('#example-steps>li').count(),5);
  await page.locator('#reset-steps').click();assert.equal(await page.locator('#example-steps>li').count(),0);
  // Een begrip telt eenmaal over titel, lopende tekst, subkoppen en waarschuwing.
  await page.evaluate(()=>{
   document.querySelector('#main').insertAdjacentHTML('beforeend','<section id="term-fixture" data-term-scope><h2>Standaardfout</h2><p>standaardfout en standaardfouten</p><aside>Let op de standaardfout.</aside></section><section id="term-fixture-next" data-term-scope><p>standaardfout, standaardfout</p></section>');
  });
  await page.waitForFunction(()=>document.querySelectorAll('#term-fixture [data-sra-auto-term]').length===1);
  assert.equal(await page.locator('#term-fixture-next [data-sra-auto-term]').count(),1);
  await page.evaluate(()=>document.querySelector('#term-fixture').insertAdjacentHTML('afterbegin','<p class="inserted">standaardfout</p>'));
  await page.waitForFunction(()=>document.querySelector('#term-fixture>.inserted [data-sra-auto-term]'));
  assert.equal(await page.locator('#term-fixture [data-sra-auto-term]').count(),1);
  await page.evaluate(()=>document.querySelector('#term-fixture>.inserted').remove());
  await page.waitForFunction(()=>document.querySelector('#term-fixture>h2 [data-sra-auto-term]'));
  await page.locator('#term-fixture [data-sra-auto-term]').scrollIntoViewIfNeeded();
  await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
  await page.locator('#term-fixture [data-sra-auto-term]').focus();await page.keyboard.press('Enter');
  await page.locator('#sra-term-popup').waitFor({state:'visible'});await page.keyboard.press('Escape');
  await page.locator('#sra-term-popup').waitFor({state:'hidden'});
  // Alle nieuwe stimuli moeten leesbaar zijn zonder dat de hele pagina schuift.
  let stimuli=0;
  for(const topic of mc){
   for(let i=0;i<topic.questions.length;i++){
    const q=topic.questions[i];if(!q.stimulus)continue;stimuli++;
    await page.evaluate(hash=>location.hash=hash,`#tentamen/mc/${topic.id}/${i+1}`);
    await page.waitForFunction(prompt=>document.querySelector('#mc-prompt')?.textContent===prompt,q.prompt);await page.locator('.mc-stimulus').waitFor();assert.equal(await overflow(),false,q.id+' overloop');
   }
  }
  assert.ok(stimuli>=19,'Er zijn toepassingen over de hele cursus');
  const topic=mc.find(t=>t.id==='diagnostiek'),n=topic.questions.findIndex(q=>q.stimulus),q=topic.questions[n];
  await page.evaluate(hash=>location.hash=hash,`#tentamen/mc/diagnostiek/${n+1}`);await page.waitForFunction(prompt=>document.querySelector('#mc-prompt')?.textContent===prompt,q.prompt);await page.locator('.mc-stimulus').waitFor();
  await page.locator('#mc-choice-'+q.correct).check();await page.locator('#mc-check').click();
  await page.locator('[data-mc-feedback="'+q.correct+'"] .is-correct').waitFor();
  await page.reload();await page.locator('#mc-choice-'+q.correct).waitFor();assert.ok(await page.locator('#mc-choice-'+q.correct).isChecked());
  await page.setViewportSize({width:390,height:844});await page.locator('.mc-stimulus').scrollIntoViewIfNeeded();await page.screenshot({path:path.join(out,'mc-mobile.png')});
  for(const [id,width] of [['diagnostiek',1366],['stratificatie',1366],['onzekerheid',390]]){
   await page.setViewportSize({width,height:950});await page.evaluate(id=>location.hash='#les/'+id,id);await page.locator('.lesson-source-title').waitFor({state:'attached'});
   await page.screenshot({path:path.join(out,id+'-'+width+'.png')});
  }
  // Vraagletters zijn geen statistische symbolen en krijgen geen formule-popup.
  const questionLetters=page.locator('.learning-solution td>[data-no-terms]');
  assert.equal(await questionLetters.count(),3);
  assert.deepEqual(await questionLetters.allTextContents(),['a','b','c']);
  assert.equal(await questionLetters.locator('[data-formula-help],[data-sra-term]').count(),0);
  await page.evaluate(()=>location.hash='#formules/stratificatie');await page.locator('.formula-guide-card').first().waitFor();
  await page.evaluate(()=>window.SRATerms.annotate(document.querySelector('#main')));assert.deepEqual(await duplicates(),[]);
  await page.goto(base+'/SRA%20interactieve%20samenvatting.html#les/diagnostiek');await page.locator('.lesson-source-title').waitFor({state:'attached'});
  assert.match(await page.locator('.lesson-source-title').textContent(),/9.6/);assert.equal(await overflow(),false);
  await page.goto(base+'/SRA%20leesversie.html');assert.ok(await page.getByText('Hoorcollege 2',{exact:false}).count());assert.equal(await overflow(),false);
  assert.deepEqual(errors,[]);
  console.log(JSON.stringify({ok:true,lessons:course.length,stimuli,viewports:[1366,768,390,320],themes:['light','dark'],checks:['vaste leskop tijdens scrollen','uitgevulde tekst','lesverhaal en voorbeeldcontext','ingeklapte voorbereiding','inline breuk en toetsenbord','boek- en collegekoppen','tentamenfocus','unieke begrippen per blok','invoegen en verwijderen eerste term','toetsenbord','tabellen en grafieken','antwoord bewaren','formulegids','zelfstandige HTML en leesversie']}));
 }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
