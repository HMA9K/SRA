/* Controleer de gedeelde lesvoorbereiding met echte tekst en verschillende leesbreedtes. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const base=process.env.LEARNING_URL,out=process.env.QA_OUTPUT||'tmp/preparation-qa';
if(!base)throw Error('Geef LEARNING_URL op.');fs.mkdirSync(out,{recursive:true});
(async()=>{const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH});try{
 const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());
 for(const width of [1600,1024,390,320])for(const theme of ['light','dark']){
  await page.setViewportSize({width,height:1100});await page.goto(base+'#les/anova');
  const panel=page.locator('.lesson-preparation'),summary=panel.locator(':scope>summary');await summary.waitFor();
  await page.evaluate(t=>StudyTheme.setMode(t),theme);
  if(await panel.getAttribute('open')===null){await summary.focus();await page.keyboard.press('Enter');}
  assert.equal(await panel.locator('.lesson-start').isVisible(),true);
  const layout=await panel.evaluate(el=>{
   const blocks=[...el.querySelectorAll('.lesson-start>div')].map(e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width}});
   return {blocks,overflow:document.documentElement.scrollWidth>innerWidth+1,alignment:getComputedStyle(el.querySelector('li')).textAlign,
    backgrounds:[...el.querySelectorAll('.lesson-start,aside.learning-context')].map(e=>getComputedStyle(e).backgroundColor),
    source:document.querySelector('.lesson-top .lesson-source-title').textContent,score:el.querySelector('#lesson-score').textContent,
    goals:el.querySelectorAll('.lesson-start>div:last-child li').length,prerequisites:el.querySelectorAll('.lesson-start>div:first-child li').length};
  });
  assert.equal(layout.overflow,false);assert.equal(layout.alignment,'left');assert.ok(layout.source);assert.match(layout.score,/checks goed/);
  assert.equal(layout.goals,3);assert.equal(layout.prerequisites,2);
  assert.deepEqual(layout.backgrounds,['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0)']);
  if(width===1600){assert.ok(Math.abs(layout.blocks[0].y-layout.blocks[1].y)<1);assert.ok(Math.abs(layout.blocks[0].width-layout.blocks[1].width)<1);}
  if(width<=390){assert.ok(layout.blocks[1].y>layout.blocks[0].y);assert.ok(Math.abs(layout.blocks[0].x-layout.blocks[1].x)<1);}
  await summary.evaluate(el=>el.blur());await panel.screenshot({path:path.join(out,`voorbereiding-${width}-${theme}.png`)});
  await summary.focus();await page.keyboard.press('Enter');assert.equal(await panel.locator('.lesson-start').isVisible(),false);
 }
 assert.deepEqual(errors,[]);console.log('OK: uitlijning, volledige voorkennis/leerdoelen, metadata, toetsenbord en geen pagina-overloop; vier breedtes, twee thema’s.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});
