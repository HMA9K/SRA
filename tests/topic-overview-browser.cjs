const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const root=path.resolve(__dirname,'..'),out=process.env.QA_OUTPUT||path.join(root,'tmp/topic-overview');fs.mkdirSync(out,{recursive:true});
const server=http.createServer((req,res)=>{const rel=decodeURIComponent(new URL(req.url,'http://localhost').pathname),file=path.resolve(root,'.'+(rel==='/'?'/index.html':rel));if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end();return;}res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json'})[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;try{
 browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const context=await browser.newContext(),page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(String(e)));
 const base=process.env.TEST_BASE_URL||'http://127.0.0.1:'+server.address().port;
 const geometry=()=>page.evaluate(()=>({scroll:scrollY,height:document.documentElement.scrollHeight,cards:[...document.querySelectorAll('.mc-part-card,.mc-main-card,.mc-topic-group-head')].map(n=>{const r=n.getBoundingClientRect();return [r.x,r.y+scrollY,r.width,r.height];})}));
 const parts=page.getByRole('region',{name:'Oefenen per deel',exact:true}),subjects=page.getByRole('region',{name:'Oefenen per onderwerp',exact:true});
 const samplingPart=()=>parts.locator('.mc-part-card').filter({has:page.locator('a.primary[href^="#tentamen/mc/hoofd-steekproeven/"]')});
 async function checkOverview(){
  await parts.locator('.mc-part-card').first().waitFor();
  assert.equal(await parts.locator('.mc-part-card').count(),4);assert.equal(await subjects.locator('.mc-main-card').count(),19);assert.equal(await subjects.locator('.mc-topic-group').count(),5);
  assert.equal(await page.locator('.mc-part-card,.mc-main-card').getByRole('link',{name:'Resultaten',exact:true}).count(),23);
  assert.ok(await parts.evaluate((n,other)=>!!(n.compareDocumentPosition(other)&Node.DOCUMENT_POSITION_FOLLOWING),await subjects.elementHandle()),'Oefenen per deel staat voor oefenen per onderwerp');
  assert.equal(await parts.getByRole('heading',{name:'Oefenen per deel',level:2,exact:true}).count(),1);assert.equal(await subjects.getByRole('heading',{name:'Oefenen per onderwerp',level:2,exact:true}).count(),1);
  assert.equal(await parts.locator('.mc-part-card h3').count(),4);assert.equal(await subjects.locator('.mc-topic-group-head h3').count(),5);assert.equal(await subjects.locator('.mc-main-card h4').count(),19);
  const basis=subjects.locator('.mc-topic-group').first();assert.match(await basis.innerText(),/basis/i);assert.deepEqual(await basis.locator('[data-topic]').evaluateAll(nodes=>nodes.map(n=>n.dataset.topic)),['beginnen','rekenen','onzekerheid']);
 }
 let toggles=0;
 for(const width of [1366,768,390,320]){
  await page.setViewportSize({width,height:900});await page.goto(base+'/index.html#tentamen/mc');await page.locator('.mc-main-card').first().waitFor();
  await checkOverview();
  assert.ok(await page.locator('.topic-exam-toggle').count()>8);
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Geen horizontale paginaoverloop');
  const ids=await page.locator('.mc-main-card').evaluateAll(nodes=>nodes.map(n=>n.dataset.topic));assert.equal(new Set(ids).size,19);assert.ok(ids.indexOf('stratificatie')<ids.indexOf('steekproefomvang'));
  for(const button of await page.locator('.topic-exam-toggle').all()){
   await button.evaluate(n=>n.scrollIntoView({block:'center',behavior:'instant'}));await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
   const before=await geometry();await button.click();assert.equal(await button.getAttribute('aria-expanded'),'true');assert.deepEqual(await geometry(),before,'Openen verplaatst geen kaarten, pagina of scrollpositie');
   const id=await button.getAttribute('aria-controls');assert.ok(await page.locator('#'+id).isVisible());
   await button.press('Enter');assert.equal(await button.getAttribute('aria-expanded'),'false');assert.deepEqual(await geometry(),before,'Sluiten verplaatst geen kaarten, pagina of scrollpositie');toggles+=2;
  }
  await page.evaluate(()=>{document.documentElement.dataset.studyTheme='dark';scrollTo({top:0,behavior:"instant"});});await page.screenshot({path:path.join(out,`sra-${width}-dark.png`)});
  await page.evaluate(()=>{document.documentElement.dataset.studyTheme='light';scrollTo({top:0,behavior:"instant"});});await page.screenshot({path:path.join(out,`sra-${width}-light.png`)});
  await page.getByRole('link',{name:'Alle resultaten',exact:true}).click();await page.locator('.mc-all-results').waitFor();assert.equal(await page.locator('.mc-total-row').count(),19);assert.equal(await page.locator('.mc-part-card,.mc-main-card').count(),0);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));assert.ok((await page.locator('.mc-total-row').first().innerText()).includes('Nog niet gemaakt'));
  await page.screenshot({path:path.join(out,`sra-results-${width}.png`)});await page.getByRole('link',{name:'Terug naar onderwerpen',exact:true}).click();await checkOverview();
 }
 await page.setViewportSize({width:1366,height:900});await page.goto(base+'/index.html#tentamen/mc');await page.locator('#mc-home-direct').check();
 const first=await page.evaluate(()=>{const group=SRAMC.groups.find(g=>g.id==='hoofd-steekproeven'),q=group.questions[0];return {id:q.id,correct:q.correct,prompt:q.prompt,topic:SRAMCData.topics.find(t=>t.questions.some(item=>item.id===q.id)).id};});
 assert.equal(first.topic,'mpu');assert.equal(await samplingPart().locator('a.primary').getAttribute('href'),'#tentamen/mc/hoofd-steekproeven/1');await samplingPart().locator('a.primary').click();
 assert.match(page.url(),/#tentamen\/mc\/hoofd-steekproeven\/1$/);await page.locator('.mc-question-title').waitFor();assert.equal(await page.locator('#mc-prompt').innerText(),first.prompt);
 await page.locator('.mc-option>label').nth(first.correct).click();await page.locator('[data-mc-feedback="'+first.correct+'"] .is-correct').waitFor();
 await page.goto(base+'/index.html#tentamen/mc');assert.ok(await page.locator('#mc-home-direct').isChecked());assert.match(await samplingPart().locator('.mc-topic-score').innerText(),/^1 \/.*1 goed$/);assert.match(await subjects.locator('[data-topic="mpu"] .mc-topic-score').innerText(),/^1 \/.*1 goed$/);
 assert.equal(await samplingPart().locator('a.primary').getAttribute('href'),'#tentamen/mc/hoofd-steekproeven/2','De groepskaart hervat na de beantwoorde vraag');
 await subjects.locator('[data-topic="mpu"]').getByRole('link',{name:'Resultaten',exact:true}).click();await page.locator('.mc-result-list>details').first().locator(':scope>summary').click();await page.getByRole('link',{name:'Open vraag 1',exact:true}).click();
 assert.match(page.url(),/#tentamen\/mc\/mpu\/1$/);assert.equal(await page.locator('#mc-prompt').innerText(),first.prompt);assert.ok(await page.locator('[data-direct-check]').isChecked());assert.ok(await page.locator('[data-mc-feedback="'+first.correct+'"] .is-correct').isVisible(),'Het antwoord uit de groepsreeks blijft bij hetzelfde deelonderwerp zichtbaar');
 await page.evaluate(()=>location.hash='#tentamen/mc/resultaten');await page.locator('.mc-all-results').waitFor();assert.match(await page.locator('.mc-stats').innerText(),/1 \/ 134/);assert.match(await page.locator('[data-result-topic="mpu"]').innerText(),/1 \/ 1 laatste poging goed/);assert.match(await page.locator('[data-result-topic="mpu"]').innerText(),/1 \/ 1 eerste poging goed/);
 await page.goto(base+'/SRA%20interactieve%20samenvatting.html#tentamen/mc');await page.locator('.mc-main-card').first().waitFor();await checkOverview();assert.ok(await page.locator('.topic-exam-toggle').count()>8);
 assert.deepEqual(errors,[]);console.log(JSON.stringify({ok:true,viewports:[1366,768,390,320],toggles,checks:'Eerst 4 delen en daarna 19 onderwerpen, basislabel, koppenhiërarchie, stabiele kaarten/paginahoogte/scrollpositie, toetsenbord, lichte/donkere weergave, groep starten en hervatten, gedeeld antwoord bij deelonderwerp, directe feedback en zelfstandige HTML',screenshots:out}));
 }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exitCode=1;});

