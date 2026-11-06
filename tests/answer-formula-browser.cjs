/* Breuk en wortel in het antwoordveld: typen in de vakjes, doortypen, bewaren, verwijderen, opschonen en mobiel. */
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
  const clean=await page.evaluate(()=>CafaAnswerEditor.sanitize('<span class="answer-formula answer-frac" onclick="x()"><span class="answer-box">a</span><span class="answer-box"><img src=x onerror=x()>b</span></span><span class="iets">tekst</span>'));
  assert.ok(clean.includes('<span class="answer-formula answer-frac"><span class="answer-box">a</span><span class="answer-box">b</span></span>'),clean);
  assert.ok(!/onclick|img|iets/.test(clean),clean);
  await page.locator('[data-topic="verschil"] a').filter({hasText:'Start'}).click();
  const open=async()=>{await page.locator('.mc-own-work summary').click();await page.locator('.mc-own-work .has-tinymce').waitFor();};
  await open();
  const body=page.frameLocator('iframe.tox-edit-area__iframe').locator('body'),boxes=body.locator('.answer-box');
  const button=name=>page.locator('.mc-own-work .tox-tbtn',{hasText:name}).click();
  const toEnd=()=>page.evaluate(()=>{const e=tinymce.activeEditor;e.focus();e.selection.select(e.getBody(),true);e.selection.collapse(false);});
  await body.click();await page.keyboard.type('ni = ');
  await button('Breuk');
  await page.keyboard.type('503');await page.keyboard.press('Tab');await page.keyboard.type('912');await page.keyboard.press('Tab');
  await page.keyboard.type(' × 130 = 71,7');
  assert.deepEqual(await boxes.allTextContents(),['503','912'],'Tab loopt door de vakjes');
  assert.ok((await body.innerText()).includes('× 130 = 71,7'),'Doortypen na de breuk');
  assert.equal(await body.locator('.answer-frac').evaluate(e=>e.textContent.includes('71')),false,'Typen landt niet in de breuk');
  // De geopende vraag bepaalt de sleutel; lees die uit wat de site werkelijk bewaarde.
  await page.waitForFunction(()=>Object.values(SRAMC.snapshot().drafts).some(d=>d.includes('answer-frac')&&d.includes('71,7')));
  const id=await page.evaluate(()=>Object.keys(SRAMC.snapshot().drafts)[0]);
  assert.equal(await page.evaluate(id=>SRAMC.snapshot().drafts[id].includes('\uFEFF'),id),false,'Cursorteken blijft uit het bewaarde antwoord');
  await page.reload();await open();
  await body.locator('.answer-frac').waitFor();
  assert.equal(await body.locator('.answer-formula[contenteditable="false"]').count(),1,'Blok blijft een geheel na herladen');
  assert.equal(await boxes.nth(1).getAttribute('contenteditable'),'true','Vakjes blijven typbaar na herladen');
  await boxes.nth(1).click();await page.keyboard.press('End');await page.keyboard.type('0');
  assert.equal(await boxes.nth(1).textContent(),'9.120','Duizendtallen werken in een vakje');
  await page.keyboard.press('ArrowUp');await page.keyboard.press('End');await page.keyboard.type('1');
  assert.equal(await boxes.nth(0).textContent(),'5.031','Pijl omhoog gaat naar de teller');
  await toEnd();await button('Wortel');await page.keyboard.type('n');await page.keyboard.press('ArrowRight');await page.keyboard.type(' klaar');
  assert.equal(await body.locator('.answer-root .answer-box').textContent(),'n');
  assert.ok((await body.innerText()).includes('klaar'),'Pijl rechts verlaat de wortel');
  await toEnd();await button('Breuk');await page.keyboard.press('Backspace');
  assert.equal(await body.locator('.answer-frac').count(),1,'Backspace wist een lege breuk');
  await page.keyboard.type('x');
  assert.ok((await body.innerText()).includes('klaarx'),'Cursor blijft op de plek van de gewiste breuk');
  await button('Breuk');await page.keyboard.type('1');
  await page.waitForFunction(id=>(SRAMC.snapshot().drafts[id].match(/answer-frac/g)||[]).length===2,id);
  await page.reload();await open();await body.locator('.answer-frac').nth(1).waitFor();
  const empty=body.locator('.answer-frac').nth(1).locator('.answer-box').nth(1);
  await empty.click();await page.keyboard.type('2');
  assert.equal(await empty.textContent(),'2','Leeg vakje blijft na herladen typbaar');
  await button('Σ');await page.keyboard.type('w');
  assert.equal(await body.locator('.answer-sum .answer-box').first().textContent(),'w','Somteken krijgt een vakje, ook in een breuk');
  await toEnd();await button('( )');await page.keyboard.type('v');await page.keyboard.press('Tab');
  assert.equal(await body.locator('.answer-paren .answer-box').textContent(),'v','Haakjes krijgen een vakje');
  await page.keyboard.type(' Σ(');await button('Breuk');await page.keyboard.type('1');await page.keyboard.press('Tab');await page.keyboard.type('2');await page.keyboard.press('Tab');await page.keyboard.type(')');
  assert.equal(await body.locator('[class^=answer-tall-]').count(),3,'Getypte Σ en haakjes groeien mee met de breuk');
  await page.keyboard.type(' z');
  assert.equal(await body.locator('[class^=answer-tall-]').last().textContent(),')','Doortypen landt naast het grote haakje');
  assert.ok((await body.innerText()).includes('z'));
  await toEnd();await page.locator('.mc-own-work [aria-label="Speciale tekens"]').click();
  const symbols=page.locator('.mc-own-work .answer-symbols');await symbols.waitFor();
  assert.equal(await page.locator('.tox-dialog').count(),0,'Speciale tekens is geen pop-up');
  await symbols.locator('[data-char="≈"]').click();await page.keyboard.type('y');
  assert.ok((await body.innerText()).includes('≈y'),'Na een teken typ je direct door');
  assert.equal(await symbols.isVisible(),true,'Paneel blijft open tijdens het typen');
  await symbols.locator('.answer-symbols-close').click();await symbols.waitFor({state:'hidden'});
  for(const width of [390,320]){
   await page.setViewportSize({width,height:800});await page.waitForTimeout(100);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,'Geen zijwaarts scrollen op '+width);
  }
  assert.deepEqual(errors,[]);
  console.log('OK: breuk en wortel typen, doortypen, bewaren, herladen, pijltjes, duizendtallen, wissen, opschonen en mobiel.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
