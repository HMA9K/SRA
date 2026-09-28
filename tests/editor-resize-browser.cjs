const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const root = path.resolve(__dirname, '..');
const output = process.env.QA_OUTPUT;
const server = http.createServer((req, res) => {
  const name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const file = path.resolve(root, '.' + name);
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404); res.end(); return;
  }
  res.setHeader('Content-Type', ({ '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.mjs': 'application/javascript', '.css': 'text/css' })[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
const close = (actual, expected, message) => assert.ok(Math.abs(actual - expected) < 2, `${message}: ${actual} versus ${expected}`);

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_PATH });
  const reports = [];
  try {
    for (const width of [1366, 390]) for (const scale of [1, 10 / 14, 24 / 14]) {
      if (process.env.RESIZE_VIEWPORT && width !== Number(process.env.RESIZE_VIEWPORT)) continue;
      if (process.env.RESIZE_PERCENT && Math.round(scale * 100) !== Number(process.env.RESIZE_PERCENT)) continue;
      console.log('Editorcontrole', width, Math.round(scale * 100) + '%');
      const page = await browser.newPage({ viewport: { width, height: 1000 }, hasTouch: true });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.route('**/*', route => route.request().url().startsWith(base + '/') ? route.continue() : route.abort());
      await page.goto(base + '/' + encodeURI(process.env.CONTROL_ENTRY || 'index.html'));
      await page.waitForFunction(() => window.SRACirrus);
      await page.evaluate(() => {
        const exam = SRACirrus.catalog.find(e => e.questions.some(q => q.type === 'open'));
        const attempt = CafaExamEngine.createAttempt(exam, { id: 'resize-check', untimed: true });
        attempt.currentIndex = exam.questions.findIndex(q => q.type === 'open');
        const value = JSON.stringify({ version: 1, attempts: [attempt] });
        localStorage.setItem(SRACirrus.storageKey, value);
        dispatchEvent(new StorageEvent('storage', { key: SRACirrus.storageKey, newValue: value }));
        location.hash = 'toets/' + attempt.id;
      });
      const answer = page.locator('[data-exam-answer]');
      await answer.locator('.has-tinymce').waitFor();
      await answer.frameLocator('iframe').locator('body').fill('Berekening 125000 * 2');
      await page.waitForFunction(() => Object.values(SRACirrus.getAttempts()[0].answers).some(a => /125\.?000 \* 2/.test(a.html || '')));
      await page.evaluate(scale => StudyScale.set(Math.round(scale * 14), 14, 10, 24), scale);
      await page.waitForTimeout(100);
      const handle = answer.locator('.tox-statusbar__resize-handle');
      const position = async () => {
        await handle.scrollIntoViewIfNeeded();
        await handle.evaluate(e => {
          for (let pane = e.parentElement; pane; pane = pane.parentElement) {
            if (pane.scrollHeight > pane.clientHeight && /auto|scroll/.test(getComputedStyle(pane).overflowY)) {
              const r = e.getBoundingClientRect(), p = pane.getBoundingClientRect();
              // Keep the grip clear of the question footer and fixed mobile controls.
              pane.scrollTop += (r.bottom - p.bottom + 70) / (window.StudyScale?.get() || 1);
            }
          }
          const footer = document.querySelector('.exam-footer'), r = e.getBoundingClientRect();
          const bottom = Math.min(innerHeight, footer?.getBoundingClientRect().top || innerHeight);
          if (r.bottom > bottom - 40) window.scrollBy(0, r.bottom - bottom + 70);
        });
        const r = await handle.boundingBox(), point = { x: r.x + r.width / 2, y: r.y + r.height / 2 };
        const hit = await handle.evaluate((e, p) => {
          const target = document.elementFromPoint(p.x, p.y), ancestors = [];
          for (let a = e.parentElement; a; a = a.parentElement) ancestors.push({ className: a.className, tag: a.tagName, scroll: a.scrollTop, height: a.clientHeight, max: a.scrollHeight, overflow: getComputedStyle(a).overflowY });
          return { visible: e.contains(target), target: target?.className, point: p, ancestors };
        }, point);
        if (!hit.visible && output) await page.screenshot({ path: path.join(output, 'resize-hit-target.png') });
        assert.equal(hit.visible, true, 'De formaatgreep is daadwerkelijk bereikbaar: ' + JSON.stringify(hit));
        return point;
      };
      const sample = () => answer.locator('.tox-tinymce').evaluate(e => {
        const r = e.getBoundingClientRect(), s = StudyScale.get(), c = e.closest('[data-exam-answer]');
        let scroll = 0;
        for (let pane = e.parentElement; pane; pane = pane.parentElement) scroll += pane.scrollTop * (pane === document.scrollingElement ? 1 : s);
        return { x: r.x, y: r.y, width: r.width, height: r.height, limit: Math.floor(c.getBoundingClientRect().width / s) * s, scale: s, scroll };
      });
      async function drag(dx, dy) {
        const point = await position(), before = await sample(), steps = [];
        await page.mouse.move(point.x, point.y); await page.mouse.down();
        for (let i = 1; i <= 8; i++) {
          await page.mouse.move(point.x + dx * i, point.y + dy * i);
          const current = await sample();
          close(current.height, Math.max(220 * scale, before.height + dy * i), 'Hoogte volgt de sleepbeweging');
          close(current.width, Math.max(Math.min(260 * scale, before.limit), Math.min(before.limit, before.width + dx * i)), 'Breedte volgt de sleepbeweging');
          close(current.x, before.x, 'Linkerrand blijft staan');
          // A shrinking scroll area can reach its new maximum scroll position.
          close(current.y + current.scroll, before.y + before.scroll, 'Geen verplaatsing van het antwoordveld binnen de vraag');
          steps.push(current);
        }
        await page.mouse.up();
        const after = await sample();
        close(after.height, steps.at(-1).height, 'Geen sprong bij loslaten');
        return { before, after };
      }
      const shrink = await drag(-8, -4), grow = await drag(8, 4);
      if (width === 390) {
        const point = await position(), beforeTouch = await sample();
        const client = await page.context().newCDPSession(page);
        await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [point] });
        await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: point.x - 16, y: point.y + 24 }] });
        await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
        close((await sample()).height, beforeTouch.height + 24, 'Aanraakbediening volgt de sleepbeweging');
        await client.detach();
      }
      await position(); await handle.focus();
      const beforeKey = await sample(); await handle.press('ArrowDown');
      close((await sample()).height, beforeKey.height + 10 * scale, 'Pijltjestoetsen bedienen de formaatgreep');
      const saved = await sample();
      await page.reload(); await answer.locator('.has-tinymce').waitFor();
      await page.evaluate(scale => StudyScale.set(Math.round(scale * 14), 14, 10, 24), scale);
      const restored = await sample();
      close(restored.height, saved.height, 'Hoogte blijft behouden na herladen');
      // A full-width editor returns to 100%; fractional layout pixels are rounded.
      assert.ok(Math.abs(restored.width - saved.width) < 2 * scale + 1, 'Breedte blijft behouden na herladen');
      assert.match(await answer.frameLocator('iframe').locator('body').innerText(), /125\.?000 \* 2/);
      // Fullscreen reuses this editor; resizing must also work after returning.
      await page.evaluate(() => tinymce.activeEditor.execCommand('mceFullScreen'));
      await page.evaluate(() => tinymce.activeEditor.execCommand('mceFullScreen'));
      await drag(-4, -2);
      await answer.frameLocator('iframe').locator('body').fill('Controle 125000 * 2');
      await page.waitForFunction(() => Object.values(SRACirrus.getAttempts()[0].answers).some(a => /Controle/.test(a.html || '')));
      await page.locator('[data-exam-action="next"]').click();
      await page.locator('[data-exam-action="previous"]').click();
      await answer.locator('.has-tinymce').waitFor();
      assert.match(await answer.frameLocator('iframe').locator('body').innerText(), /Controle 125\.?000 \* 2/);
      await drag(-4, -2);
      if (output && scale === 10 / 14) {
        await position();
        await page.screenshot({ path: path.join(output, 'sra-editor-resize-' + width + '.png') });
      }
      assert.deepEqual(errors, []);
      reports.push({ width, scale, shrink, grow, restored, contentPreserved: true });
      await page.close();
    }
  } finally { await browser.close(); server.close(); }
  if (output) {
    fs.mkdirSync(output, { recursive: true });
    fs.writeFileSync(path.join(output, 'editor-resize.json'), JSON.stringify(reports, null, 2));
  }
  console.log(JSON.stringify({ status: 'geslaagd', checks: reports.length, viewportWidths: [1366, 390], scales: [1, 10 / 14, 24 / 14] }));
})().catch(error => { server.close(); console.error(error); process.exitCode = 1; });
