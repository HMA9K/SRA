/* College- en hoofdstukkoppelingen mogen niet achter een uitklapblok verdwijnen. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const base=process.env.LEARNING_URL,out=process.env.QA_OUTPUT||'tmp/curriculum-qa';
if(!base)throw Error('Geef LEARNING_URL op.');fs.mkdirSync(out,{recursive:true});
(async()=>{const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH});try{
 const page=await browser.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());
 for(const width of [1366,390,320])for(const theme of ['light','dark']){
  await page.setViewportSize({width,height:950});await page.goto(base+'#leren');
  await page.locator('.sra-learning-item').first().waitFor();await page.evaluate(t=>StudyTheme.setMode(t),theme);
  const expected=await page.evaluate(()=>SRA.lessons.map(l=>({id:l.id,title:l.curriculum.title})));
  assert.equal(expected.length,19);
  for(const l of expected){const label=page.locator(`.sra-learning-item[href="#les/${l.id}"] .learning-list-source`);assert.equal(await label.isVisible(),true);assert.equal(await label.textContent(),l.title);}
  assert.equal(await page.getByRole('heading',{name:'Verdieping',exact:true}).count(),0);
  const group=page.locator('.sra-learning-phase').filter({has:page.getByRole('heading',{name:'Meervoudige regressie en modelcontrole',exact:true})});
  await group.scrollIntoViewIfNeeded();await page.screenshot({path:path.join(out,`overzicht-${width}-${theme}.png`)});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);
  await group.locator('a[href="#les/meervoudig"]').click();await page.locator('.lesson-opening').waitFor();
  // De paginakop toont de titel; fase, lesnummer en bronregel staan alleen in het lesmenu.
  assert.equal(await page.locator('.lesson-top').isVisible(),false);
  const label=lesson=>page.locator(`#sidebar a[href="#les/${lesson}"] .learning-list-source`);
  assert.match(await label('meervoudig').textContent(),/H10.*Hoorcollege 6–7/);
  assert.equal(await page.locator('.lesson-start').isVisible(),true);
  assert.equal(await page.locator('#sidebar .learning-list-source').count(),19);
  if(width<761)await page.locator('#menu-toggle').click();
  await page.locator('#sidebar a[href="#les/validatie"]').click();await page.waitForFunction(()=>location.hash==='#les/validatie'&&document.querySelector('.lesson-top h1')?.textContent.includes('Valideren'));
  assert.equal(await page.locator('.lesson-top').isVisible(),false);assert.match(await label('validatie').textContent(),/geen boekparagraaf.*Hoorcollege 7; toepassing in 8/);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);
  // Het bronlabel staat naast de kop, anders plakt het tegen de paginatitel aan.
  await page.evaluate(()=>{location.hash='#formules/verschil'});await page.waitForFunction(()=>document.querySelector('.formula-guide h1'));
  assert.match(await page.locator('.formula-guide .lesson-source-title').textContent(),/Hoorcollege/);
  assert.equal(await page.title(),'SRA / Formules / De verschilschatter');
  await page.evaluate(()=>{location.hash='#les/validatie'});await page.waitForFunction(()=>document.querySelector('.lesson-top h1'));
  await page.screenshot({path:path.join(out,`les-${width}-${theme}.png`)});
 }
 assert.deepEqual(errors,[]);console.log('OK: 19 zichtbare koppelingen, duidelijke groepsnaam, bronregel in het lesmenu in plaats van boven de les; drie breedtes, licht/donker.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});
