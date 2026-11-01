/* Leesmarkering en checkresultaten blijven onderscheiden en bewaard. */
const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright'),root=path.resolve(__dirname,'..'),out=path.join(root,'tmp/lesson-status-qa');
fs.mkdirSync(out,{recursive:true});
const server=http.createServer((req,res)=>{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);return res.end();}res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'})[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;
try{browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH});const errors=[],base='http://127.0.0.1:'+server.address().port;
for(const width of [1197,390])for(const theme of ['light','dark']){
 const context=await browser.newContext({viewport:{width,height:950}}),page=await context.newPage();page.on('pageerror',e=>errors.push(String(e)));await page.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());
 await page.goto(base+'/index.html#les/beginnen');await page.locator('#mark-read').waitFor();
 const answers=await page.evaluate(()=>{const answers=Object.fromEntries(SRA.lessons[0].questions.map(q=>[q.id,{choice:q.correct,correct:true,firstCorrect:true,attempts:1}]));localStorage.setItem('sra-learning-v1',JSON.stringify({version:1,read:[],answers,notes:{e1:'Bewaarde testnotitie'}}));return answers;});
 await page.reload();await page.locator('#mark-read').waitFor();await page.evaluate(t=>StudyTheme.setMode(t),theme);
 const side=page.locator('.lesson-link[href="#les/beginnen"]');assert.equal(await side.locator('.lesson-no').innerText(),'01');assert.match(await side.locator('.lesson-progress').innerText(),/Nog te lezen/);assert.match(await side.locator('.lesson-progress').innerText(),/Checks: 3\/3 goed/);
 for(const read of [true,false]){
  const button=page.locator('#mark-read');await button.focus();await page.keyboard.press('Enter');assert.equal(await button.getAttribute('aria-pressed'),String(read));assert.match(await button.innerText(),read?/ongedaan maken/:/Markeer deze les als gelezen/);
  const expected=await side.locator('.lesson-progress').textContent();assert.match(expected,read?/Gelezen/:/Nog te lezen/);assert.match(expected,/Checks: 3\/3 goed/);
  await page.evaluate(()=>location.hash='#leren');await page.locator('.sra-learning-item').first().waitFor();assert.equal(await page.locator('.sra-learning-item[href="#les/beginnen"] .lesson-progress').textContent(),expected);
  if(read&&theme==='light')await page.screenshot({path:path.join(out,'overview-'+width+'.png')});
  await page.evaluate(()=>location.hash='#les/beginnen');await page.locator('#mark-read').waitFor();await page.reload();await page.locator('#mark-read').waitFor();assert.equal(await page.locator('#mark-read').getAttribute('aria-pressed'),String(read));
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('sra-learning-v1')));assert.deepEqual(saved.answers,answers);assert.equal(saved.notes.e1,'Bewaarde testnotitie');assert.equal(saved.read.includes('beginnen'),read);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 }
 await context.close();
}
assert.deepEqual(errors,[]);console.log('Leesstatus: beide richtingen met toetsenbord, consistente overzichtslabels, herladen en behoud van antwoorden/notities; desktop en mobiel, licht en donker.');
}finally{await browser?.close();await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exitCode=1;});
