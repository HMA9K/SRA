/* De oefentabel en de uitgewerkte tabel moeten ook zonder verborgen context begrijpelijk zijn. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const base=process.env.LEARNING_URL,out=process.env.QA_OUTPUT||'tmp/anova-qa';
if(!base)throw Error('Geef LEARNING_URL op.');fs.mkdirSync(out,{recursive:true});
(async()=>{const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH});try{
 for(const width of [1190,390])for(const theme of ['light','dark']){
  const page=await browser.newPage({viewport:{width,height:1000}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));await page.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());
  await page.goto(base+'#les/anova');await page.locator('.lesson-opening').waitFor();await page.evaluate(t=>StudyTheme.setMode(t),theme);
  assert.equal(await page.locator('.learning-page-head .learning-context').isVisible(),false);
  const section=page.locator('#uitleg>details').filter({has:page.locator('summary').filter({hasText:'Een volledige ANOVA-tabel reconstrueren'})});
  if(await section.getAttribute('open')===null)await section.locator(':scope>summary').click();
  const exercise=section.locator('table').first(),answer=section.locator('.worked-answer');
  assert.equal(await exercise.getByRole('cell',{name:'Zelf berekenen',exact:true}).count(),5);
  assert.equal(await exercise.getByRole('cell',{name:'?',exact:true}).count(),0);
  assert.equal(await answer.getAttribute('open'),null);
  await section.evaluate(el=>scrollTo({top:scrollY+el.getBoundingClientRect().top-document.querySelector('.learning-page-head').getBoundingClientRect().bottom-12,behavior:'instant'}));
  await page.screenshot({path:path.join(out,`opdracht-${width}-${theme}.png`)});
  await answer.locator('summary').focus();await page.keyboard.press('Enter');
  assert.equal(await answer.locator('table').isVisible(),true);
  assert.equal(await answer.locator('ol>li').count(),6);
  assert.equal(await answer.getByRole('cell',{name:'60,82595',exact:true}).count(),1);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);
  await answer.evaluate(el=>scrollTo({top:scrollY+el.getBoundingClientRect().top-document.querySelector('.learning-page-head').getBoundingClientRect().bottom-12,behavior:'instant'}));
  await page.screenshot({path:path.join(out,`uitwerking-${width}-${theme}.png`)});
  await answer.locator('summary').focus();await page.keyboard.press('Enter');assert.equal(await answer.locator('table').isVisible(),false);
  assert.deepEqual(errors,[]);await page.close();
 }
 console.log('OK: vijf expliciete rekenvelden, aparte ingevulde ANOVA-tabel, zes stappen, toetsenbord en leesbaarheid; desktop/mobiel, licht/donker.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});
