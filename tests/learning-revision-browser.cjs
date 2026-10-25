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
  const duplicates=()=>page.evaluate(()=>[...document.querySelectorAll('details.section,.formula-guide-card')].flatMap(block=>{
   const ids=[...block.querySelectorAll('[data-sra-auto-term]')].map(e=>e.dataset.sraTerm);
   return ids.filter((id,i)=>ids.indexOf(id)!==i).map(id=>block.querySelector('summary,h2')?.textContent+': '+id);
  }));
  for(const width of [1366,768,390,320]){
   await page.setViewportSize({width,height:950});
   for(const theme of ['light','dark']){
   await page.evaluate(theme=>window.StudyTheme.setMode(theme),theme);
   for(const lesson of course){
    await page.evaluate(id=>location.hash='#les/'+id,lesson.id);
    await page.waitForFunction(id=>document.querySelector('.lesson-top h1')?.textContent.endsWith(window.SRA.lessons.find(l=>l.id===id).title)&&location.hash==='#les/'+id&&document.querySelectorAll('#uitleg>details').length===window.SRA.lessons.find(l=>l.id===id).sections.length,lesson.id);
    await page.evaluate(()=>window.SRATerms.annotate(document.querySelector('#main')));
    assert.equal(await page.locator('#uitleg>details').count(),lesson.sections);
    assert.match(await page.locator('.lesson-source-title').textContent(),/Hoorcollege/);
    assert.equal(await page.locator('aside.learning-context').count(),1);
    assert.deepEqual(await duplicates(),[],`${lesson.id}: dubbel begrip bij ${width}px`);
    assert.equal(await overflow(),false,`${lesson.id}: horizontale pagina-overloop bij ${width}px`);
    assert.equal(await page.locator('.lesson-preparation').getAttribute('open'),null);
    assert.ok((await page.locator('.lesson-opening').innerText()).length>150);
    assert.ok((await page.locator('.lesson-conclusion').innerText()).length>150);
    assert.match(await page.locator('.example-context').innerText(),/\?/);
    assert.equal(await page.locator('.formula-help-hint,.term-hint').count(),0);
    assert.equal(await page.locator('.section-body p').first().evaluate(el=>getComputedStyle(el).textAlign),'justify');
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
  // De uitleg bij een inline breuk blijft met het toetsenbord bereikbaar.
  await page.evaluate(()=>{window.StudyTheme.setMode('light');location.hash='#les/rekenen';});
  await page.locator('.section-body math[display="inline"] mfrac').first().waitFor();
  const symbol=page.locator('.section-body math[display="inline"] [data-formula-help]').first();
  await symbol.focus();await page.keyboard.press('Enter');
  await page.locator('#formula-help-popup').waitFor({state:'visible'});await page.keyboard.press('Escape');
  await page.locator('#formula-help-popup').waitFor({state:'hidden'});
  // De voorbeeldvraag is zichtbaar voordat de leerling een stap opent.
  await page.locator('[data-scroll="voorbeeld"]').click();
  await page.locator('#next-step').click();assert.equal(await page.locator('#example-steps>li').count(),1);
  await page.locator('#all-steps').click();assert.equal(await page.locator('#example-steps>li').count(),5);
  await page.locator('#reset-steps').click();assert.equal(await page.locator('#example-steps>li').count(),0);
  await page.locator('.lesson-preparation>summary').focus();await page.keyboard.press('Enter');
  assert.equal(await page.locator('.lesson-preparation').getAttribute('open'),'');
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
  await page.evaluate(()=>location.hash='#formules/stratificatie');await page.locator('.formula-guide-card').first().waitFor();
  await page.evaluate(()=>window.SRATerms.annotate(document.querySelector('#main')));assert.deepEqual(await duplicates(),[]);
  await page.goto(base+'/SRA%20interactieve%20samenvatting.html#les/diagnostiek');await page.locator('.lesson-source-title').waitFor({state:'attached'});
  assert.match(await page.locator('.lesson-source-title').textContent(),/9.6/);assert.equal(await overflow(),false);
  await page.goto(base+'/SRA%20leesversie.html');assert.ok(await page.getByText('Hoorcollege 2',{exact:false}).count());assert.equal(await overflow(),false);
  assert.deepEqual(errors,[]);
  console.log(JSON.stringify({ok:true,lessons:course.length,stimuli,viewports:[1366,768,390,320],themes:['light','dark'],checks:['vaste leskop tijdens scrollen','uitgevulde tekst','lesverhaal en voorbeeldcontext','ingeklapte voorbereiding','inline breuk en toetsenbord','boek- en collegekoppen','tentamenfocus','unieke begrippen per blok','invoegen en verwijderen eerste term','toetsenbord','tabellen en grafieken','antwoord bewaren','formulegids','zelfstandige HTML en leesversie']}));
 }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
