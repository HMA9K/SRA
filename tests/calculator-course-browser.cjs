// Course integration: preserve old SRA history and compare the shared widget in both apps.
const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const url=process.env.CALCULATOR_URL||'http://127.0.0.1:8870/';
const peer=process.env.CALCULATOR_PEER_URL;
const portable=process.env.CALCULATOR_PORTABLE_URL;
const storageKey='sra-calculator-history-v1';
async function fingerprint(page){
  await page.waitForFunction(()=>!!window.CafaCalculator);
  await page.locator('[data-calc]').first().click();
  const panel=page.locator('#calculator-dialog');
  await panel.locator('[data-calc-key="C"]').click();
  await panel.locator('[data-calc-input]').fill('100');
  await panel.locator('[data-calc-input]').press('Enter');
  const read=()=>panel.evaluate(p=>({markup:p.innerHTML.replace(/data-calc-history-id="[^"]+"/g,''),styles:[p,...p.querySelectorAll('button,input,.calc-help,.calc-copy,.calc-controls,.calc-history')].map(e=>{const s=getComputedStyle(e);return {tag:e.tagName,key:e.dataset.calcKey,font:s.font,color:s.color,background:s.backgroundColor,border:s.border,padding:s.padding,margin:s.margin,width:s.width,height:s.height};})}));
  const normal=await read();
  await panel.locator('[data-calc-compact]').click();const compact=await read();
  await page.evaluate(()=>document.documentElement.dataset.studyTheme='dark');const dark=await read();
  return {normal,compact,dark};
}
(async()=>{
  const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
  try{
    for(const width of [1366,390]){
      const context=await browser.newContext({viewport:{width,height:900},hasTouch:width===390});
      await context.addInitScript(({storageKey})=>{if(!localStorage.getItem(storageKey))localStorage.setItem(storageKey,JSON.stringify({version:1,entries:[{id:'previous',expression:'50*2',value:100}],memory:-25,lastValue:100,formula:'-',continueFromResult:false,size:{w:240,h:380}}));},{storageKey});
      const page=await context.newPage();await page.goto(url);await page.waitForFunction(()=>!!window.SRACalculator);
      assert.equal(await page.evaluate(()=>SRACalculator===CafaCalculator),true);
      await page.locator('[data-calc]').first().click();const input=page.locator('#calculator-dialog [data-calc-input]');
      // Native focus preserves the restored caret; pressSequentially otherwise resets an unfocused input.
      assert.equal(await input.inputValue(),'-');await input.focus();await input.pressSequentially('550');assert.equal(await input.inputValue(),'-550');await input.press('Enter');
      assert.equal(await page.evaluate(()=>SRACalculator.getState().lastValue),-550);
      assert.equal(await page.evaluate(()=>SRACalculator.getState().memory),-25);
      assert.equal(await page.evaluate(()=>SRACalculator.getState().history[0].expression),'50*2');
      await input.pressSequentially('+500');assert.equal(await input.inputValue(),'Ans+500');await input.press('Enter');
      await page.reload();await page.waitForFunction(()=>!!window.SRACalculator);await page.locator('[data-calc]').first().click();
      assert.equal(await page.evaluate(()=>SRACalculator.getState().lastValue),-50);
      const saved=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),storageKey);assert.equal(saved.lastValue,-50);assert.equal(saved.memory,-25);assert.equal(saved.entries.length,3);
      await page.locator('[data-calc-key="-"]').click();await input.focus();await input.evaluate(e=>e.setSelectionRange(0,3));await input.press('Backspace');
      assert.equal(await input.inputValue(),'-');await input.pressSequentially('550');assert.equal(await input.inputValue(),'-550');await input.press('Enter');
      assert.equal(await page.evaluate(()=>SRACalculator.getState().lastValue),-550);
      await context.close();
      if(peer){
        const pair=await browser.newContext({viewport:{width,height:900},hasTouch:width===390});
        const a=await pair.newPage(),b=await pair.newPage();await a.goto(url);await b.goto(peer);
        const actual=await fingerprint(a),expected=await fingerprint(b),differences=[];
        for(const mode of ['normal','compact','dark']){
          if(actual[mode].markup!==expected[mode].markup)differences.push({mode,markup:false});
          actual[mode].styles.forEach((style,i)=>{for(const property of Object.keys(style))if(style[property]!==expected[mode].styles[i][property])differences.push({mode,element:style.key||style.tag,index:i,property,sra:style[property],cafa2:expected[mode].styles[i][property]});});
        }
        assert.deepEqual(differences,[],'Identical markup and computed styles at '+width);
        await pair.close();
      }
    }
    if(portable){const context=await browser.newContext();const page=await context.newPage();await page.goto(portable);await page.waitForFunction(()=>!!window.SRACalculator);await page.locator('[data-calc]').first().click();await page.locator('[data-calc-key="negative"]').click();const input=page.locator('[data-calc-input]');await input.pressSequentially('550');await input.press('Enter');assert.equal(await page.evaluate(()=>SRACalculator.getState().lastValue),-550);await context.close();}
    console.log(JSON.stringify({status:'geslaagd',widths:[1366,390],preservedStorage:true,identicalWidget:!!peer,portable:!!portable}));
  }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});
