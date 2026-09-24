const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const root=path.resolve(__dirname,'..'),out=process.env.QA_OUTPUT||path.join(root,'tmp/topic-overview');fs.mkdirSync(out,{recursive:true});
const server=http.createServer((req,res)=>{const rel=decodeURIComponent(new URL(req.url,'http://localhost').pathname),file=path.resolve(root,'.'+(rel==='/'?'/index.html':rel));if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end();return;}res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json'})[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;try{
 browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
 const context=await browser.newContext(),page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(String(e)));
 const base='http://127.0.0.1:'+server.address().port;
 const geometry=()=>page.evaluate(()=>({scroll:scrollY,height:document.documentElement.scrollHeight,cards:[...document.querySelectorAll('.mc-main-card,.mc-topic-group-head')].map(n=>{const r=n.getBoundingClientRect();return [r.x,r.y+scrollY,r.width,r.height];})}));
 let toggles=0;
 for(const width of [1366,768,390,320]){
  await page.setViewportSize({width,height:900});await page.goto(base+'/index.html#tentamen/mc');await page.locator('.mc-main-card').first().waitFor();
  assert.equal(await page.locator('.mc-main-card').count(),19);assert.equal(await page.locator('.mc-topic-group').count(),5);
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
 }
 await page.setViewportSize({width:1366,height:900});await page.goto(base+'/index.html#tentamen/mc');await page.locator('#mc-home-direct').check();await page.locator('[data-topic="mpu"] .actions .primary').click();
 const correct=await page.evaluate(()=>SRAMCData.topics.find(t=>t.id==='mpu').questions[0].correct);await page.locator('.mc-option>label').nth(correct).click();await page.locator('[data-mc-feedback="'+correct+'"] .is-correct').waitFor();
 await page.goto(base+'/index.html#tentamen/mc');assert.ok(await page.locator('#mc-home-direct').isChecked());assert.match(await page.locator('[data-topic="mpu"] .mc-topic-score').innerText(),/^1 \/.*1 goed$/);
 await page.goto(base+'/index.html#tentamen/mc/hoofd-steekproeven');await page.locator('.mc-question-title').waitFor();assert.ok(await page.locator('[data-direct-check]').isChecked());
 await page.goto(base+'/SRA%20interactieve%20samenvatting.html#tentamen/mc');await page.locator('.mc-main-card').first().waitFor();assert.equal(await page.locator('.mc-main-card').count(),19);assert.ok(await page.locator('.topic-exam-toggle').count()>8);
 assert.deepEqual(errors,[]);console.log(JSON.stringify({ok:true,viewports:[1366,768,390,320],toggles,checks:'Stabiele kaarten, paginahoogte en scrollpositie, toetsenbord, lichte/donkere weergave, directe feedback, herladen, groeproutes en zelfstandige HTML',screenshots:out}));
 }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exitCode=1;});

