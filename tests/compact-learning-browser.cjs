/* Compacte uitleg, bediening en feedback blijven compleet en bedienbaar. */
const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const root=path.resolve(__dirname,'..'),out=path.join(root,'tmp/compact-learning-qa');fs.mkdirSync(out,{recursive:true});
const server=http.createServer((req,res)=>{
 const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
 if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end();return;}
 res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'})[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);
});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;
 try{
  browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH});
  const context=await browser.newContext(),page=await context.newPage(),errors=[],checks=[];
  page.on('pageerror',e=>errors.push(String(e)));
  const base=process.env.TEST_BASE_URL||'http://127.0.0.1:'+server.address().port;
  await page.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());
  for(const width of [1366,900,390,320])for(const theme of ['light','dark']){
   await page.setViewportSize({width,height:950});
   await page.goto(base+'/index.html#les/beginnen');
   await page.locator('.symbol-dictionary').waitFor();
   await page.evaluate(t=>StudyTheme.setMode(t),theme);
   const dictionary=page.locator('.symbol-dictionary'),text=await dictionary.locator('.symbol-explanation').boundingBox(),table=await dictionary.locator('.symbol-table').boundingBox();
   assert.equal(await dictionary.locator('td:first-child').count(),7);
   assert.match(await dictionary.innerText(),/uitspraak over de populatie blijft onzeker/);
   if(width>760){assert.ok(table.x>=text.x+text.width);assert.ok(Math.abs(table.y-text.y)<2);}
   else assert.ok(table.y>=text.y+text.height);
   const answer=page.locator('.learning-solution,.worked-answer').first();
   if(await answer.getAttribute('open')!==null)await answer.locator('summary').first().click();
   const closed=await answer.evaluate(n=>({height:n.getBoundingClientRect().height,padding:getComputedStyle(n).padding,summaryPadding:getComputedStyle(n.firstElementChild).padding,summaryHeight:n.firstElementChild.getBoundingClientRect().height})); assert.ok(closed.height<=(width<760?90:62),'Gesloten uitwerking: '+JSON.stringify({width,theme,...closed}));
   assert.notEqual(await answer.evaluate(n=>getComputedStyle(n).backgroundColor),'rgba(0, 0, 0, 0)');
   await answer.locator('summary').first().focus();await page.keyboard.press('Enter');
   assert.notEqual(await answer.getAttribute('open'),null);
   assert.ok((await answer.innerText()).length>200,'De volledige uitwerking blijft beschikbaar');
   await answer.locator('summary').first().focus();await page.keyboard.press('Enter');
   assert.ok((await page.locator('#uitleg .source-notes').first().boundingBox()).height<=26);
   const lab=page.locator('#onderzoek');
   const number=lab.locator('input[type=number]').first(),range=lab.locator('input[type=range]').first();
   await number.fill('8');await number.press('Tab');
   await page.waitForFunction(()=>document.querySelector('#onderzoek input[type=range]')?.value==='8');
   assert.match(await lab.locator('.lab-live').innerText(),/8\s*\/\s*20/);
   await range.focus();await page.keyboard.press('ArrowRight');assert.equal(await number.inputValue(),'9');
   const selection=lab.locator('.lab-controls select').first();await selection.selectOption('cheap');
   assert.equal(await lab.locator('input[type=number]').last().isDisabled(),true);
   await selection.selectOption('spread');assert.equal(await lab.locator('input[type=number]').last().isDisabled(),false);
   if(width===1366)assert.ok((await lab.locator('.lab-controls').boundingBox()).height<580);
   const question=page.locator('#begrip .question').nth(1),correct=await page.evaluate(()=>SRA.lessons.find(l=>l.id==='beginnen').questions[1].correct);
   await question.locator('input[type=radio]').nth(correct).check();
   const button=question.locator('[data-check]');if(await button.isEnabled())await button.click();
   const feedback=question.locator('.question-feedback').filter({visible:true});
   assert.match(await feedback.innerText(),/Goed beantwoord/);
   assert.equal(await feedback.locator('.question-recognition dt').count(),4);
   assert.ok(await feedback.locator('.question-trap').isVisible());
   assert.ok(await feedback.locator('.source-note').count()>0);
   const alternatives=feedback.locator('.answer-reasons>summary');await alternatives.focus();await page.keyboard.press('Enter');
   assert.notEqual(await feedback.locator('.answer-reasons').getAttribute('open'),null);
   if(width===1366){await alternatives.press('Enter');assert.ok((await feedback.boundingBox()).height<660);}
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Geen pagina-overloop');
   if(theme==='light'&&(width===1366||width===390)){
    await dictionary.screenshot({path:path.join(out,'dictionary-'+width+'.png')});
    await lab.screenshot({path:path.join(out,'lab-'+width+'.png')});
    await question.screenshot({path:path.join(out,'question-'+width+'.png')});
   }
   await page.reload();await page.locator('.symbol-dictionary').waitFor();
   assert.equal(await page.locator('#begrip .question').nth(1).locator('input[type=radio]').nth(correct).isChecked(),true);
   checks.push({width,theme});
  }
  assert.deepEqual(errors,[]);fs.writeFileSync(path.join(out,'result.json'),JSON.stringify({checks,errors},null,2));console.log('Compacte leerblokken: 8 weergaven, toetsenbord, invoer en antwoordbehoud gecontroleerd.');
 }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
