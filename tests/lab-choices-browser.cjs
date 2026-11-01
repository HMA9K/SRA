/* Alle interactieve lessen bieden zichtbare keuzes met behoud van invoer. */
const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const root=path.resolve(__dirname,'..'),out=path.join(root,'tmp/lab-choices-qa');fs.mkdirSync(out,{recursive:true});
const server=http.createServer((req,res)=>{
 const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
 if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);return res.end();}
 res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'})[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);
});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;
try{
 browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH});
 const page=await browser.newPage(),errors=[],checks=[],base='http://127.0.0.1:'+server.address().port;
 page.on('pageerror',e=>errors.push(String(e)));await page.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());
 await page.goto(base+'/index.html#les/beginnen');await page.locator('[data-lab-view]').waitFor();
 const lessons=await page.evaluate(()=>SRA.lessons.map(l=>({id:l.id,lab:l.lab})));
 const lab=page.locator('#onderzoek');
 const inputs=()=>lab.locator('input[name],textarea[name]').evaluateAll(nodes=>nodes.map(n=>[n.name,n.value]));
 async function views(){
  const before=await inputs(),full=await lab.locator('.lab-result').textContent();
  const keys=await lab.locator('[data-lab-choice]').evaluateAll(nodes=>nodes.map(n=>n.dataset.labChoice));assert.ok(keys.length);
  for(const [i,key] of keys.entries()){
   const button=lab.locator('[data-lab-choice="'+key+'"]');
   assert.ok((await button.locator('strong').innerText()).length>1);assert.ok((await button.locator('span').innerText()).length>15);
   assert.ok((await button.boundingBox()).height>=44);assert.ok(await button.evaluate(n=>n.scrollWidth<=n.clientWidth+1),page.url()+' '+page.viewportSize().width+' '+await button.innerText());
   await button.focus();await page.keyboard.press(i%2?'Space':'Enter');
   assert.equal(await button.getAttribute('aria-pressed'),'true');assert.equal(await lab.locator('[data-lab-choice][aria-pressed="true"]').count(),1);
   const rendered=await lab.evaluate((el,key)=>{const result=SRALabLayout.analyse(el.querySelector('.lab-result').innerHTML),expected=document.createElement('div');expected.innerHTML=result.metrics+result.views.find(v=>v.key===key).html;const content=node=>({text:node.textContent.replace(/\s+/g,' ').trim(),graphs:[...node.querySelectorAll('svg')].map(n=>n.outerHTML)});return {actual:content(el.querySelector('.lab-live')),expected:content(expected)};},key);
   assert.deepEqual(rendered.actual,rendered.expected);assert.equal(await lab.locator('.lab-result').textContent(),full);assert.deepEqual(await inputs(),before);
   if(page.viewportSize().width===390&&key.startsWith('chart-'))assert.ok(await lab.locator('.lab-output').evaluate(n=>n.scrollHeight<=n.clientHeight+2),page.url()+' '+key+': grafiek past onder de keuzes');
  }
 }
 async function settings(skipMode=false){
  for(const field of await lab.locator('.lab-choice-field').all()){
   if(!await field.isVisible())continue;
   const name=await field.locator('input[type=hidden]').getAttribute('name');if(skipMode&&name==='mode')continue;
   assert.ok((await field.locator('legend').innerText()).length>3);
   for(const button of await field.locator('[data-lab-setting]').all()){
    assert.ok((await button.locator('span').innerText()).length>15);
    assert.ok(await button.evaluate(n=>n.scrollWidth<=n.clientWidth+1),name+' '+await button.innerText());
    if(await button.isDisabled())continue;
    const value=await button.getAttribute('data-value');if(page.viewportSize().width===390)await button.click();else{await button.focus();await page.keyboard.press('Enter');}
    assert.equal(await field.locator('input[type=hidden]').inputValue(),value);assert.equal(await button.getAttribute('aria-pressed'),'true');
    assert.equal(await field.locator('[aria-pressed="true"]').count(),1);assert.equal(await lab.locator('.lab-error').count(),0);
   }
  }
 }
 for(const width of [1197,390])for(const theme of ['light','dark'])for(const lesson of lessons){
  await page.setViewportSize({width,height:950});await page.goto(base+'/index.html?choices='+width+'-'+theme+'#les/'+lesson.id);await lab.locator('[data-lab-view]').waitFor();await page.evaluate(t=>StudyTheme.setMode(t),theme);
  assert.equal(await page.locator('main select').count(),0,lesson.id+': geen dropdowns in de les');
  if(lesson.lab==='diagnose'){
   for(const mode of ['residual','normal','outlier','distance','dw']){
    await lab.locator('[data-lab-setting="mode"][data-value="'+mode+'"]').focus();await page.keyboard.press('Enter');await settings(true);await views();
   }
  }else{await settings();await views();}
  const input=lab.locator('input[type=number]:not(:disabled):not([readonly])').first();
  if(await input.count()){
   const range=lab.locator('input[type=range]:not(:disabled)').first();
   if(await range.count()){await range.focus();await page.keyboard.press('ArrowRight');assert.equal(await lab.locator('.lab-error').count(),0);}
  }
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),lesson.id+' '+width+' '+theme);
  const state=await inputs(),active=await lab.locator('[data-lab-choice][aria-pressed="true"]').getAttribute('data-lab-choice');
  await page.setViewportSize({width:width===1197?1100:320,height:950});await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
  assert.deepEqual(await inputs(),state);assert.equal(await lab.locator('[data-lab-choice][aria-pressed="true"]').getAttribute('data-lab-choice'),active);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  await page.setViewportSize({width,height:950});
  if(theme==='light'&&['beginnen','onzekerheid','diagnostiek','transformaties','tentamen'].includes(lesson.id)){
   await lab.scrollIntoViewIfNeeded();await page.mouse.move(0,0);await lab.screenshot({path:path.join(out,lesson.id+'-'+width+'.png'),style:'.study-topbar,.learning-page-head,.skip{visibility:hidden!important}'});
  }
  checks.push({id:lesson.id,width,theme});
  if(lesson.id===lessons.at(-1).id)console.log('Keuzes gecontroleerd: '+width+' px, '+theme+'.');
 }
 // Een tijdelijk niet toepasselijke keuze blijft bewaard en krijgt geen klikactie.
 await page.goto(base+'/index.html#les/toetsen');await lab.locator('[data-lab-setting="direction"]').first().waitFor();
 assert.equal(await lab.locator('[data-lab-setting="sign"]:disabled').count(),2);
 await lab.locator('[data-lab-setting="direction"][data-value="positive"]').click();await lab.locator('[data-lab-setting="sign"][data-value="negative"]').click();
 await lab.locator('[data-lab-setting="direction"][data-value="two"]').click();assert.equal(await lab.locator('[data-lab-setting="sign"]:disabled').count(),2);
 await lab.locator('[data-lab-setting="direction"][data-value="negative"]').click();assert.equal(await lab.locator('[name="sign"]').inputValue(),'negative');
 // De zelfstandige HTML gebruikt dezelfde bediening als de losse webbestanden.
 await page.goto(base+'/SRA%20interactieve%20samenvatting.html#les/onzekerheid');await lab.locator('[data-lab-view]').waitFor();
 assert.equal(await page.locator('main select').count(),0);await settings();await views();
 assert.deepEqual(errors,[]);fs.writeFileSync(path.join(out,'results.json'),JSON.stringify(checks,null,2));
 console.log(`${checks.length} lesweergaven: geen dropdowns; alle resultaatkeuzes, instellingen en diagnosemodi bedienbaar; invoer behouden bij wisselen en resize.`);
}finally{await browser?.close();await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exitCode=1;});
