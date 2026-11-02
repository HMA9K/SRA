/* Open ook de nieuwe uitwerkingen: een gesloten details-element bewijst geen leesbaarheid. */
const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const root=path.resolve(__dirname,'..'),out=path.join(root,'tmp/exam-focus-qa');fs.mkdirSync(out,{recursive:true});
const pointData=JSON.parse(fs.readFileSync(path.join(root,'data/exam-point-analysis.json'),'utf8'));
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
    const blocks=page.locator('#uitleg>section').filter({has:page.locator('.section-head').filter({hasText:/Gemiddeld puntengewicht in tentamens|Belang voor het tentamen|College 8:/})});
    assert.equal(await blocks.count(),id==='tentamen'?8:1);
    for(let i=0;i<await blocks.count();i++){
     const block=blocks.nth(i);sections++;
     assert.equal(await block.locator(':scope>summary').count(),0,'tekstblok is vast open');
     if(i===0){
      assert.doesNotMatch(await block.innerText(),/Historische punten, geen voorspelling|[Rr]oute|Gemiddelden omvatten nullen|Alle tentamens, de spreiding en de puntentoerekening/);
      if(await block.locator('table').count()){
       assert.deepEqual((await block.locator('th').allTextContents()).map(text=>text.replaceAll('­','')),['Onderwerp','Voorkomen in Tentamens','Deelvragen (totaal)','Gemiddeld puntengewicht per tentamen (%) Alleen als het onderwerp voorkomt']);
       for(const row of await block.locator('tr').all())assert.equal(await row.locator('th,td').count(),4);
       for(const row of await block.locator('tbody tr').all()){
        const cells=await row.locator('td').allTextContents(),topic=pointData.topics.find(t=>t.label===cells[0]);
        assert.ok(topic,cells[0]);
        const scores=pointData.rows.filter(r=>r.topic===topic.id),exams=new Set(scores.map(r=>r.exam));
        const expected=exams.size?(scores.reduce((n,r)=>n+r.points,0)/exams.size).toFixed(2).replace('.',',')+'%':'n.v.t.';
        assert.equal(cells[3],expected,topic.id+': puntengewicht bij voorkomen');
       }
      }
      assert.ok(await block.locator('.source-note').count()>0);
     }
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
     if(id==='toetsen'&&i===0)await block.screenshot({path:path.join(out,`studieroute-${width}-${theme}.png`)});
    }
   }
  }
  const report=await page.request.get(base+'/docs/tentamen-puntenanalyse-2026-10-25.md');assert.equal(report.status(),200);assert.match(await report.text(),/900 punten/);
  assert.deepEqual(errors,[]);console.log(JSON.stringify({ok:true,openedSections:sections,viewports:[1366,390,320],themes:['light','dark'],checks:['toetsenbord open/dicht','tabellen horizontaal bereikbaar','vijf figuren geladen','open uitwerkingen','puntenrapport bereikbaar']}));
 }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
