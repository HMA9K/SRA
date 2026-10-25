/* Leesbreedte moet behouden blijven wanneer het lesmenu uit het grid verdwijnt. */
const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const root=path.resolve(__dirname,'..'),out=path.join(root,'tmp/lesson-panel-qa');fs.mkdirSync(out,{recursive:true});
const server=http.createServer((req,res)=>{
 const rel=decodeURIComponent(new URL(req.url,'http://localhost').pathname),file=path.resolve(root,'.'+(rel==='/'?'/index.html':rel));
 if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end();return;}
 res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png'})[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);
});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;
 try{
  browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH});
  const base=process.env.LEARNING_URL||'http://127.0.0.1:'+server.address().port+'/';
  for(const width of [1482,1024,768,761,760,390,320])for(const theme of ['light','dark']){
   const context=await browser.newContext({viewport:{width,height:950}}),page=await context.newPage();
   await context.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());
   await page.goto(base+'#les/beginnen');await page.locator('.lesson-opening').waitFor();
   await page.evaluate(t=>StudyTheme.setMode(t),theme);
   const menu=page.locator('#menu-toggle'),sidebar=page.locator('#sidebar');
   const checkWidth=async()=>{
    const b=await page.evaluate(()=>{const main=document.querySelector('#main'),layout=document.querySelector('.layout');return {width:main.getBoundingClientRect().width,available:layout.getBoundingClientRect().width,max:parseFloat(getComputedStyle(main).maxWidth)||Infinity,overflow:document.documentElement.scrollWidth>innerWidth+1};});
    assert.ok(b.width>=Math.min(b.available,b.max)-2,`${width}/${theme}: lesinhoud te smal ${JSON.stringify(b)}`);
    assert.equal(b.overflow,false);
   };
   if(width>760){
    assert.equal(await sidebar.isVisible(),true);
    await menu.click();assert.equal(await sidebar.isVisible(),false);await checkWidth();
    await page.reload();await page.locator('.lesson-opening').waitFor();assert.equal(await sidebar.isVisible(),false);await checkWidth();
    await page.evaluate(()=>location.hash='#les/rekenen');await page.waitForFunction(()=>document.querySelector('.lesson-top h1')?.textContent.endsWith(SRA.lessons.find(l=>l.id==='rekenen').title));await checkWidth();
    await menu.focus();await page.keyboard.press('Enter');assert.equal(await sidebar.isVisible(),true);
    const handle=page.locator('#lesson-panel-resizer');await handle.focus();await page.keyboard.press('End');assert.equal(await handle.getAttribute('aria-valuenow'),'420');
    await menu.click();await checkWidth();
    await page.setViewportSize({width:390,height:844});await checkWidth();
    await page.setViewportSize({width,height:950});await checkWidth();
    if(width===1482&&theme==='light')await page.screenshot({path:path.join(out,'desktop-gesloten.png')});
    await page.goto(base+'SRA%20interactieve%20samenvatting.html#les/beginnen');await page.locator('.lesson-opening').waitFor();await checkWidth();
   }else{
    await checkWidth();await menu.click();assert.equal(await sidebar.isVisible(),true);await checkWidth();
    await page.keyboard.press('Escape');assert.equal(await sidebar.isVisible(),false);await checkWidth();
    await menu.click();await menu.click();assert.equal(await sidebar.isVisible(),false);await checkWidth();
    if(width===390&&theme==='light')await page.screenshot({path:path.join(out,'mobiel-gesloten.png')});
   }
   await context.close();
  }
  console.log('OK: lesbreedte bij menu open/dicht, herladen, leswissel, toetsenbord, paneelbreedte, schermwissel en zelfstandige HTML; zeven breedtes en twee thema’s.');
 }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
