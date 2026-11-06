/* Formule in het antwoordveld: invoegen, doortypen, bewaren na herladen, aanpassen, opschonen en mobiel. */
const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const base=process.env.LEARNING_URL||'http://127.0.0.1:8769/';
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:900}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());
  await page.goto(base+'index.html#tentamen/mc');
  const clean=await page.evaluate(()=>CafaAnswerEditor.sanitize('<span class="answer-formula" onclick="x()"><math alttext="a/b" href="https://voorbeeld.test"><mfrac onclick="x()"><mi>a</mi><mi><img src=x onerror=x()></mi></mfrac><annotation-xml><b>weg</b></annotation-xml></math></span><span class="iets">tekst</span>'));
  assert.ok(clean.includes('<span class="answer-formula"><math alttext="a/b"><mfrac><mi>a</mi><mi></mi></mfrac></math></span>'),clean);
  assert.ok(!/onclick|href|img|annotation|iets|weg/.test(clean),clean);
  await page.locator('[data-topic="verschil"] a').filter({hasText:'Start'}).click();
  const id=await page.evaluate(()=>SRAMCData.topics.find(t=>t.id==='verschil').questions.filter(q=>q.sourceExamId)[0].id);
  await page.locator('.mc-own-work summary').click();
  await page.locator('.mc-own-work .has-tinymce').waitFor();
  const body=page.frameLocator('iframe.tox-edit-area__iframe').locator('body'),dialog=page.locator('.answer-formula-dialog'),input=dialog.locator('input');
  const open=async()=>{await page.locator('.mc-own-work .tox-tbtn',{hasText:'Formule'}).click();await dialog.waitFor();};
  await body.click();await page.keyboard.type('ni = ');
  await open();
  assert.equal(await dialog.locator('[type=submit]').isDisabled(),true,'Leeg invoegen kan niet');
  await dialog.getByRole('button',{name:'Breuk'}).click();
  assert.equal(await input.inputValue(),'()/()');
  assert.equal(await dialog.locator('[type=submit]').isDisabled(),true,'Lege breuk kan niet');
  await page.keyboard.type('N_i');await page.keyboard.press('ArrowRight');await page.keyboard.press('ArrowRight');await page.keyboard.press('ArrowRight');await page.keyboard.type('N');
  await page.keyboard.press('End');await page.keyboard.type(' * n');
  assert.equal(await input.inputValue(),'(N_i)/(N) * n');
  assert.equal(await dialog.locator('.answer-formula-preview mfrac').count(),1,'Voorbeeld toont de breuk');
  await page.keyboard.press('Enter');
  await dialog.waitFor({state:'hidden'});
  assert.equal(await body.locator('.answer-formula[contenteditable="false"] mfrac').count(),1,'Formule staat als geheel in het antwoord');
  await page.keyboard.type(' = 71,7');
  assert.ok((await body.innerText()).includes('= 71,7'),'Doortypen na de formule');
  assert.equal(await body.locator('.answer-formula').evaluate(e=>e.textContent.includes('71')),false,'Typen landt niet in de formule');
  await page.waitForFunction(id=>SRAMC.snapshot().drafts[id]?.includes('<mfrac>')&&SRAMC.snapshot().drafts[id].includes('71,7'),id);
  await page.reload();
  await page.locator('.mc-own-work summary').click();
  await page.locator('.mc-own-work .has-tinymce').waitFor();
  await body.locator('.answer-formula mfrac').waitFor();
  assert.equal(await body.locator('.answer-formula').count(),1,'Geen dubbele formule na herladen');
  await body.locator('.answer-formula').dblclick();await dialog.waitFor();
  assert.equal(await input.inputValue(),'(N_i)/(N) * n','Bron komt terug om aan te passen');
  await input.fill('√(N_i)/N');await page.keyboard.press('Enter');await dialog.waitFor({state:'hidden'});
  assert.equal(await body.locator('.answer-formula').count(),1,'Aanpassen vervangt de formule');
  assert.equal(await body.locator('.answer-formula msqrt').count(),1);
  await open();await input.fill('(a + b');
  assert.ok((await dialog.locator('.answer-formula-preview').innerText()).includes('Nog niet compleet'));
  await page.keyboard.press('Escape');await dialog.waitFor({state:'hidden'});
  assert.equal(await body.locator('.answer-formula').count(),1,'Annuleren verandert niets');
  for(const width of [390,320]){
   await page.setViewportSize({width,height:800});
   await open();
   const box=await dialog.boundingBox();assert.ok(box.x>=0&&box.x+box.width<=width,'Venster past op '+width);
   await page.keyboard.press('Escape');await dialog.waitFor({state:'hidden'});
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,'Geen zijwaarts scrollen op '+width);
  }
  assert.deepEqual(errors,[]);
  console.log('OK: formule invoegen, doortypen, bewaren, aanpassen, annuleren, opschonen en mobiel.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
