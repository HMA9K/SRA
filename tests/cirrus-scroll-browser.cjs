const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');

const root = path.resolve(__dirname, '..');
const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://local').pathname);
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    response.writeHead(404); response.end(); return;
  }
  response.setHeader('Content-Type', ({
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml'
  })[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(response);
});

async function state(page) {
  return page.evaluate(() => {
    const panel = document.querySelector('.exam-case-layout > .exam-case-panel');
    const question = document.querySelector('.exam-case-layout > .exam-question-body');
    const layout = document.querySelector('.exam-case-layout');
    const head = document.querySelector('.exam-work-head');
    const footer = document.querySelector('.exam-footer');
    const bars = ['.topbar', '#study-returnbar', '.topnav'].map(selector => document.querySelector(selector));
    const visible = node => node && getComputedStyle(node).display !== 'none' && !node.hidden;
    return {
      pageY: scrollY,
      pageRange: document.documentElement.scrollHeight - innerHeight,
      documentHeight: document.documentElement.scrollHeight,
      viewportHeight: innerHeight,
      panelY: panel.scrollTop,
      panelRange: panel.scrollHeight - panel.clientHeight,
      questionY: question.scrollTop,
      questionRange: question.scrollHeight - question.clientHeight,
      headerBottom: Math.max(0, ...bars.filter(visible).map(node => node.getBoundingClientRect().bottom)),
      panelRect: panel.getBoundingClientRect().toJSON(),
      questionRect: question.getBoundingClientRect().toJSON(),
      layoutRect: layout.getBoundingClientRect().toJSON(),
      headRect: head.getBoundingClientRect().toJSON(),
      footerRect: footer.getBoundingClientRect().toJSON(),
      overflowX: document.documentElement.scrollWidth > innerWidth + 1
    };
  });
}

function desktopFrame(current, width) {
  assert.ok(current.headRect.top >= current.headerBottom - 4,
    `${width}px: vraagkop blijft onder de bovenbalken`);
  assert.ok(current.layoutRect.top >= current.headRect.bottom - 4,
    `${width}px: beide kolommen beginnen onder de vraagkop`);
  assert.ok(current.panelRect.top >= current.layoutRect.top - 3 && current.panelRect.bottom <= current.footerRect.top + 4,
    `${width}px: casus raakt kop en footer niet`);
  assert.ok(current.questionRect.top >= current.layoutRect.top - 3 && current.questionRect.bottom <= current.footerRect.top + 4,
    `${width}px: antwoordkolom raakt kop en footer niet`);
  assert.ok(current.footerRect.top > current.headerBottom && current.footerRect.bottom <= current.viewportHeight + 4,
    `${width}px: de footer is zichtbaar in het venster`);
}

(async () => {
  let browser;
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    browser = await chromium.launch({
      headless: true,
      ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {})
    });
    const base = process.env.TEST_BASE_URL || `http://127.0.0.1:${server.address().port}`;
    const entry = process.env.TEST_ENTRY || '/index.html';
    for (const [width, height] of [[1440, 800], [1366, 900], [390, 844]]) {
      const context = await browser.newContext({ viewport: { width, height } });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(String(error)));
      page.setDefaultTimeout(15000);

      await page.goto(`${base}${entry}#welkom/20231030`);
      await page.locator('[data-exam-untimed]').check();
      await page.locator('[data-exam-action="start"]').click();
      const panel = page.locator('.exam-case-layout > .exam-case-panel');
      await panel.waitFor();
      await page.waitForFunction(() => [...document.querySelectorAll('#exam-case-panel img')].every(image => image.complete));
      const initial = await state(page);
      if (process.env.DEBUG_SCROLL) console.log(`${width}px begin: ${JSON.stringify(initial)}`);
      assert.ok(initial.panelRange > 100, `${width}px: de casus van 20231030 heeft eigen scrollruimte`);
      assert.ok(!initial.overflowX, `${width}px: geen horizontale paginaoverloop`);
      if (width > 760) {
        assert.ok(initial.panelRect.right < initial.questionRect.left + 3,
          `${width}px: casus staat links van de vraag`);
        desktopFrame(initial, width);
      } else {
        assert.ok(initial.pageRange > 20, `${width}px: mobiel gebruikt documentflow`);
        assert.ok(initial.panelRect.bottom <= initial.questionRect.top + 3,
          `${width}px: de vraag staat onder de casus`);
      }

      const panelBox = await panel.boundingBox();
      await page.mouse.move(panelBox.x + Math.min(90, panelBox.width / 2), panelBox.y + panelBox.height / 2);
      await page.mouse.wheel(0, 160);
      await page.waitForFunction(() => document.querySelector('#exam-case-panel').scrollTop > 10);
      const afterCase = await state(page);
      assert.ok(afterCase.panelY > initial.panelY + 10, `${width}px: muiswiel in de casus scrolt de casus`);
      assert.ok(Math.abs(afterCase.questionY - initial.questionY) <= 2,
        `${width}px: vraagpositie verandert niet bij casusscroll`);
      assert.ok(Math.abs(afterCase.pageY - initial.pageY) <= 2,
        `${width}px: documentpositie verandert niet zolang de casus kan scrollen`);
      if (width > 760) desktopFrame(afterCase, width);

      await panel.evaluate(element => { element.scrollTop = 210; });
      const beforeNext = await state(page);
      await page.locator('#exam-app [contenteditable="true"]').first().fill(`Proefantwoord ${width}px`);
      await page.locator('[data-exam-action="next"]').click();
      assert.match(await page.locator('.exam-position').innerText(), /VRAAG\s*2\s*VAN/);
      await page.waitForFunction(() => [...document.querySelectorAll('#exam-case-panel img,.exam-question-body img')].every(image => image.complete));
      const second = await state(page);
      assert.ok(Math.abs(second.panelY - beforeNext.panelY) <= 3,
        `${width}px: Volgende binnen opgave 1 behoudt de casuspositie`);
      assert.ok(!second.overflowX, `${width}px: geen horizontale paginaoverloop na Volgende`);

      if (width > 760) {
        assert.ok(second.questionRange > 8, `${width}px: rechter vraagkolom heeft eigen scrollruimte`);
        desktopFrame(second, width);
        const x = second.questionRect.left + Math.min(100, second.questionRect.width / 2);
        const y = second.questionRect.top + Math.min(160, second.questionRect.height / 2);
        await page.mouse.move(x, y);
        await page.mouse.wheel(0, 180);
        await page.waitForFunction(() => document.querySelector('.exam-case-layout > .exam-question-body').scrollTop > 5);
        const afterRight = await state(page);
        assert.ok(afterRight.questionY > second.questionY + 5,
          `${width}px: muiswiel rechts scrolt de vraag en het antwoord`);
        assert.ok(Math.abs(afterRight.panelY - second.panelY) <= 2,
          `${width}px: rechts scrollen laat de casuspositie staan`);
        assert.ok(Math.abs(afterRight.pageY - second.pageY) <= 2,
          `${width}px: rechts scrollen laat het document staan`);
        assert.ok(Math.abs(afterRight.documentHeight - second.documentHeight) <= 5,
          `${width}px: documenthoogte blijft stabiel bij rechts scrollen`);
        desktopFrame(afterRight, width);

        await page.locator('.exam-case-layout > .exam-question-body').evaluate(element => {
          element.scrollTop = element.scrollHeight;
        });
        const rightEnd = await state(page);
        assert.ok(rightEnd.questionY >= rightEnd.questionRange - 2,
          `${width}px: onderste antwoordknoppen zijn rechts bereikbaar`);
        assert.ok(Math.abs(rightEnd.panelY - second.panelY) <= 2,
          `${width}px: casus blijft staan bij doorscrollen rechts`);
        desktopFrame(rightEnd, width);
        await page.mouse.wheel(0, 300);
        await page.waitForTimeout(80);
        await page.mouse.wheel(0, 300);
        const afterRightEdge = await state(page);
        assert.ok(Math.abs(afterRightEdge.pageY - second.pageY) <= 2,
          `${width}px: doorscrollen aan de rechterrand verplaatst het document niet`);
        assert.ok(Math.abs(afterRightEdge.panelY - second.panelY) <= 2,
          `${width}px: doorscrollen aan de rechterrand verplaatst de casus niet`);
        desktopFrame(afterRightEdge, width);
      } else {
        await panel.evaluate(element => { element.scrollTop = element.scrollHeight; });
        const beforeEdge = await state(page);
        const box = await panel.boundingBox();
        await page.mouse.move(box.x + Math.min(90, box.width / 2), box.y + box.height / 2);
        await page.waitForTimeout(350);
        await page.mouse.wheel(0, 400);
        await page.waitForTimeout(80);
        await page.mouse.wheel(0, 400);
        try {
          await page.waitForFunction(previous => scrollY > previous + 10, beforeEdge.pageY, { timeout: 2500 });
        } catch (_) {}
        const afterEdge = await state(page);
        assert.ok(afterEdge.pageY > beforeEdge.pageY + 10,
          `${width}px: onderaan de casus scrolt mobiel door naar de vraag`);
        assert.ok(afterEdge.footerRect.top > afterEdge.headerBottom && afterEdge.footerRect.bottom <= height + 4,
          `${width}px: de mobiele navigatie blijft zichtbaar na doorscrollen`);
        assert.ok(!afterEdge.overflowX, `${width}px: geen horizontale paginaoverloop na doorscrollen`);
      }

      assert.deepEqual(errors, [], `${width}px: geen JavaScript-fouten`);
      await context.close();
    }
    console.log('SRA Cirrus-scroll geslaagd: zelfstandige desktopkolommen, mobiele documentflow en casuspositie bij Volgende.');
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
