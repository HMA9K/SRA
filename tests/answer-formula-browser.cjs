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
  const id=await page.evaluate(()=>SRAMCData.topics.find(t=>t.id==='verschil').questions.filter(q=>q.sourceExamId)[0].id);
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
  await page.waitForFunction(id=>{const d=SRAMC.snapshot().drafts[id];return d?.includes('answer-frac')&&d.includes('71,7')&&!d.includes('﻿');},id);
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
  assert.equal(await empty.textContent(),'2Σw','Somteken werkt in een vakje');
  await toEnd();await button('Σ');await page.keyboard.type('v');
  assert.ok((await body.innerText()).includes('Σv'),'Somteken werkt in de tekst');
  for(const width of [390,320]){
   await page.setViewportSize({width,height:800});await page.waitForTimeout(100);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,'Geen zijwaarts scrollen op '+width);
  }
  assert.deepEqual(errors,[]);
  console.log('OK: breuk en wortel typen, doortypen, bewaren, herladen, pijltjes, duizendtallen, wissen, opschonen en mobiel.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
