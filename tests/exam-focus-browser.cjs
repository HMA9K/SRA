/* Open ook de nieuwe uitwerkingen: een gesloten details-element bewijst geen leesbaarheid. */
const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const root=path.resolve(__dirname,'..'),out=path.join(root,'tmp/exam-focus-qa');fs.mkdirSync(out,{recursive:true});
const server=http.createServer((req,res)=>{
 const rel=decodeURIComponent(new URL(req.url,'http://localhost').pathname),file=path.resolve(root,'.'+(rel==='/'?'/index.html':rel));
 if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end();return;}
 res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.md':'text/plain; charset=utf-8'})[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);
});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;
 try{
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
  const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(String(e)));
  // Lokale inhoudstest: geen analyticsproeven of wijzigingen aan gebruikersopslag.
  await page.route('https://**/*',route=>route.abort());
  const base='http://127.0.0.1:'+server.address().port;
  await page.goto(base+'/index.html#les/tentamen');await page.locator('.lesson-source-title').waitFor({state:'attached'});
  const lessons=await page.evaluate(()=>window.SRA.lessons.map(l=>l.id));let sections=0;
  for(const width of [1366,390,320])for(const theme of ['light','dark']){
   await page.setViewportSize({width,height:950});await page.evaluate(t=>window.StudyTheme.setMode(t),theme);
   for(const id of lessons){
    await page.evaluate(id=>location.hash='#les/'+id,id);
    await page.waitForFunction(id=>document.querySelector('.lesson-top h1')?.textContent.endsWith(window.SRA.lessons.find(l=>l.id===id).title),id);
    const blocks=page.locator('#uitleg>details').filter({has:page.locator('summary').filter({hasText:/Studieroute en puntengewicht|College 8:/})});
    assert.equal(await blocks.count(),id==='tentamen'?8:1);
    for(let i=0;i<await blocks.count();i++){
     const block=blocks.nth(i);sections++;
     if(await block.getAttribute('open')===null){await block.locator(':scope>summary').focus();await page.keyboard.press('Enter');}
     await block.scrollIntoViewIfNeeded();
     assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,`${id}/${i}/${width}/${theme}: pagina-overloop`);
     for(const img of await block.locator('img').all()){
      await img.scrollIntoViewIfNeeded();await img.evaluate(el=>el.decode());
      assert.ok(await img.evaluate(el=>el.naturalWidth>0&&el.getBoundingClientRect().width<=innerWidth));
     }
     for(const wrap of await block.locator('.table-scroll').all()){
      assert.equal(await wrap.getAttribute('tabindex'),'0');
      if(await wrap.evaluate(el=>el.scrollWidth>el.clientWidth+2)){
       await wrap.scrollIntoViewIfNeeded();await wrap.focus();
       await page.keyboard.press('ArrowRight');await page.keyboard.press('ArrowRight');
       await page.waitForFunction(el=>el.scrollLeft>0,await wrap.elementHandle());
      }
     }
     if(id==='tentamen'&&i===7){
      const answer=block.locator('details').first();await answer.locator(':scope>summary').focus();await page.keyboard.press('Enter');
      assert.notEqual(await answer.getAttribute('open'),null);
      assert.match(await answer.innerText(),/2.879,45/);
      await answer.locator(':scope>summary').focus();await page.keyboard.press('Enter');
     }
     if(id==='tentamen'&&i===2&&width!==320)await block.screenshot({path:path.join(out,`college8-${width}-${theme}.png`)});
    }
   }
  }
  const report=await page.request.get(base+'/docs/tentamen-puntenanalyse-2026-10-25.md');assert.equal(report.status(),200);assert.match(await report.text(),/900 punten/);
  assert.deepEqual(errors,[]);console.log(JSON.stringify({ok:true,openedSections:sections,viewports:[1366,390,320],themes:['light','dark'],checks:['toetsenbord open/dicht','tabellen horizontaal bereikbaar','vijf figuren geladen','open uitwerkingen','puntenrapport bereikbaar']}));
 }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
