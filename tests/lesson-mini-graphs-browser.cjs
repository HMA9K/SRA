const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const root=path.resolve(__dirname,'..'),out=path.join(root,'tmp/mini-graphs-qa');fs.mkdirSync(out,{recursive:true});
const server=http.createServer((req,res)=>{
 const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
 if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end();return;}
 res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg'})[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);
});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;
 try{
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
  const page=await browser.newPage(),errors=[],checks=[];
  page.on('pageerror',e=>errors.push(String(e)));
  const base=process.env.TEST_BASE_URL||'http://127.0.0.1:'+server.address().port;
  for(const width of [1366,1197,768,390,320])for(const theme of ['light','dark']){
   await page.setViewportSize({width,height:950});
   for(const id of ['mpu','verschil','quotient','regressieschatter','stratificatie','regressielijn','anova','toetsen','diagnostiek','voorspellen','meervoudig','modelbouw','validatie']){
    await page.goto(base+'/index.html#les/'+id);
    const block=page.locator('[data-mini-graph="'+id+'"]');await block.waitFor({state:'attached'});
    await page.evaluate(theme=>{window.StudyTheme.setMode(theme);document.querySelectorAll('details').forEach(d=>d.open=true)},theme);
    await block.scrollIntoViewIfNeeded();
    await page.mouse.move(0,0);
    const info=await block.evaluate(el=>{
     const copy=el.querySelector('.mini-copy').getBoundingClientRect(),figure=el.querySelector('figure').getBoundingClientRect(),svg=el.querySelector('svg'),b=svg.getBoundingClientRect();
     const labels=[...svg.querySelectorAll('text')].map(t=>({text:t.textContent,b:t.getBBox()})),collisions=[];
     for(let i=0;i<labels.length;i++)for(let j=i+1;j<labels.length;j++){
      const a=labels[i].b,b=labels[j].b;
      if(a.x<b.x+b.width+1&&a.x+a.width+1>b.x&&a.y<b.y+b.height+1&&a.y+a.height+1>b.y)collisions.push([labels[i].text,labels[j].text]);
     }
     return {width:b.width,height:b.height,side:figure.left>=copy.right+19,stack:figure.top>=copy.bottom+7,aligned:Math.abs(figure.top-copy.top)<1,
      room:el.getBoundingClientRect().width,clipped:labels.filter(({b})=>b.x<-.5||b.x+b.width>svg.viewBox.baseVal.width+.5||b.y<-.5||b.y+b.height>svg.viewBox.baseVal.height+.5).map(l=>l.text),collisions,
      font:parseFloat(getComputedStyle(svg.querySelector('text')).fontSize)*b.width/svg.viewBox.baseVal.width};
    });
    assert.ok(info.width<=260.5&&info.height<=185,JSON.stringify({id,width,info}));
    assert.ok(info.font>=11,JSON.stringify({id,width,info}));
    assert.deepEqual(info.clipped,[],JSON.stringify({id,width,info}));
    assert.deepEqual(info.collisions,[],JSON.stringify({id,width,info}));
    assert.ok(info.room>=610?(info.side&&info.aligned):info.stack,JSON.stringify({id,width,info}));
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,`${id} ${width}: overloop`);
    assert.doesNotMatch(await page.locator('main').innerText(),/\beigen\b/i);
    checks.push({id,width,theme});
    if((width===1197||width===390)&&theme==='light')await block.screenshot({path:path.join(out,`${id}-${width}.png`)});
   }
  }
  assert.deepEqual(errors,[]);fs.writeFileSync(path.join(out,'results.json'),JSON.stringify(checks,null,2));
  console.log(`${checks.length} mini-grafiekweergaven: compact, leesbaar, uitgelijnd, geen overloop of scriptfouten.`);
 }finally{await browser?.close();server.close();}
})().catch(e=>{console.error(e);process.exitCode=1;server.close();});
