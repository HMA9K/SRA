/* Numerieke invoer blijft exact bruikbaar naast de schuifregelaar, in iedere les. */
const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const root=path.resolve(__dirname,'..'),out=path.join(root,'tmp/lab-sliders-qa');fs.mkdirSync(out,{recursive:true});
const server=http.createServer((req,res)=>{
 const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
 if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);return res.end();}
 res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'})[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);
});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;
try{
 browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH});
 const page=await browser.newPage(),errors=[],base='http://127.0.0.1:'+server.address().port;
 page.on('pageerror',e=>errors.push(String(e)));await page.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());
 await page.goto(base+'/index.html#les/mpu');const lessons=await page.evaluate(()=>SRA.lessons.map(l=>l.id));let checked=0;
 for(const width of [1197,390]){
  await page.setViewportSize({width,height:950});
  for(const id of lessons){
   await page.goto(base+'/index.html#les/'+id);const lab=page.locator('#onderzoek');await lab.locator('[data-lab-view]').waitFor();
   const view=lab.locator('[data-lab-choice]').last();await view.click();const key=await view.getAttribute('data-lab-choice');
   for(const number of await lab.locator('input[type=number][name]').all()){
    const name=await number.getAttribute('name'),slider=lab.locator('[data-sync="'+name+'"]');assert.equal(await slider.count(),1,id+'.'+name);
    const locked=await number.evaluate(n=>n.disabled||n.readOnly);assert.equal(await slider.isDisabled(),locked);
    if(locked||!await number.isVisible())continue;
    const original=await number.inputValue(),initial=Number(original),current=Number(await slider.inputValue());
    assert.ok(Math.abs(current-initial)<=1e-10*Math.max(1,Math.abs(initial)),id+'.'+name+' precision');
    await slider.click();await slider.press(current>=Number(await slider.getAttribute('max'))?'ArrowLeft':'ArrowRight');
    assert.equal(await view.getAttribute('aria-pressed'),'true',id+'.'+name+' keeps '+key);
    assert.equal(Number(await number.inputValue()),Number(await slider.inputValue()),id+'.'+name+' sync');
    await number.fill(original);await number.dispatchEvent('change');
    assert.equal(await number.inputValue(),original,id+'.'+name+' exact typed value');
    assert.equal(await lab.locator('.lab-error').count(),0,id+'.'+name+' recovers');checked++;
   }
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),id+' overflow');
   if(width===390)assert.equal(await lab.locator('.lab-output').evaluate(n=>getComputedStyle(n).position),'static',id+' mobile controls remain reachable');
   if(id==='regressieschatter'){await lab.locator('[data-lab-choice]').first().click();await lab.screenshot({path:path.join(out,'regressieschatter-'+width+'.png'),style:'.study-topbar,.learning-page-head,.skip{visibility:hidden!important}'});}
  }
  console.log('Schuifregelaars gecontroleerd: alle 19 lessen op '+width+' px.');
 }
 await page.goto(base+'/SRA%20interactieve%20samenvatting.html#les/regressieschatter');await page.locator('#onderzoek [data-sync="N"]').waitFor();assert.equal(await page.locator('#onderzoek input[type=range]').count(),9);
 assert.deepEqual(errors,[]);console.log(JSON.stringify({ok:true,lessons:19,widths:[1197,390],sliderEdits:checked,standalone:true}));
}finally{await browser?.close();await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exitCode=1;});
