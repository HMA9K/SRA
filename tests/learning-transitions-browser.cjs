/* Compacte leesbruggen: grafiek bij de eigen uitleg, leesbare figuren en alle stappen zichtbaar. */
const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const root=path.resolve(__dirname,'..'),out=path.join(root,'tmp/transition-qa');fs.mkdirSync(out,{recursive:true});
const server=http.createServer((req,res)=>{
 const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
 if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end();return;}
 res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.pdf':'application/pdf','.png':'image/png','.jpg':'image/jpeg'})[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);
});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;
 try{
  browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{})});
  const context=await browser.newContext(),page=await context.newPage(),errors=[],checks=[];
  page.on('pageerror',e=>errors.push(String(e)));
  const base=process.env.TEST_BASE_URL||'http://127.0.0.1:'+server.address().port;
  for(const width of [1366,900,768,390,320])for(const theme of ['light','dark']){
   await page.setViewportSize({width,height:950});
   for(const id of ['beginnen','rekenen','onzekerheid','steekproefomvang','transformaties']){
    await page.goto(base+'/index.html#les/'+id);
    await page.locator('.learning-transition').first().waitFor();
    await page.evaluate(theme=>window.StudyTheme.setMode(theme),theme);
    const info=await page.locator('.learning-transition').evaluateAll(blocks=>blocks.map(block=>{
     const panels=[...block.querySelectorAll('.transition-panel')];
     const aligned=panels.every((panel,i)=>{
      const row=panel.getBoundingClientRect(),copy=panel.querySelector('.transition-copy').getBoundingClientRect(),chart=panel.querySelector('svg').getBoundingClientRect();
      const placement=row.width>=620?chart.left>=copy.right+19&&Math.abs(chart.top-copy.top)<1:chart.top>=copy.bottom+7;
      const gap=i?row.top-panels[i-1].getBoundingClientRect().bottom:16;
      return placement&&gap>=15&&gap<=17;
     });
     const charts=[...block.querySelectorAll('svg')].map(svg=>{
      const labels=[...svg.querySelectorAll('text')].map(text=>({text:text.textContent,b:text.getBBox()}));
      const collisions=[];
      for(let i=0;i<labels.length;i++)for(let j=i+1;j<labels.length;j++){
       const a=labels[i].b,b=labels[j].b;
       if(a.x<b.x+b.width+2 && a.x+a.width+2>b.x && a.y<b.y+b.height+2 && a.y+a.height+2>b.y)collisions.push([labels[i].text,labels[j].text]);
      }
      return {width:svg.getBoundingClientRect().width,height:svg.getBoundingClientRect().height,
       labelSize:parseFloat(getComputedStyle(svg.querySelector('text')).fontSize)*svg.getBoundingClientRect().width/svg.viewBox.baseVal.width,
       clipped:labels.filter(({b})=>b.x<0||b.x+b.width>svg.viewBox.baseVal.width+1).map(l=>l.text),collisions};
     });
     return {key:block.dataset.learningTransition,aligned,visible:panels.every(p=>p.getBoundingClientRect().height>0),charts};
    }));
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,`${id} ${width}: overloop`);
    assert.equal(info.length,id==='rekenen'?2:1);
    for(const block of info){
     assert.ok(block.aligned,`${block.key} ${width}: grafiek niet naast eigen tekst of onnodige tussenruimte`);assert.ok(block.visible);
     for(const chart of block.charts){assert.ok(chart.width<=280.5&&chart.height<=184,`Grafiek te groot: ${JSON.stringify({id,width,chart})}`);assert.ok(chart.labelSize>=11,JSON.stringify({id,width,chart}));assert.deepEqual(chart.clipped,[],JSON.stringify({id,width,chart}));assert.deepEqual(chart.collisions,[],JSON.stringify({id,width,chart}));}
    }
    checks.push({id,width,theme,blocks:info.length});
    if(id==='rekenen'){
     assert.equal(await page.locator('.section-title').filter({hasText:'Rekenen zonder verborgen stappen'}).count(),1);
     assert.equal(await page.locator('.section-title').filter({hasText:'Waarom kwadrateren?'}).count(),0);
     const combined=page.locator('details.section').filter({has:page.locator('[data-learning-transition="gemiddelde-kwadraten"]')});
     assert.ok((await combined.innerText()).includes('Van kwadraten naar variantie en standaardafwijking'));
     assert.ok((await combined.innerText()).includes('Rekenvolgorde en twee verschillende sommen'));
    }
    if(['beginnen','rekenen'].includes(id)&&[1366,390].includes(width)){
     await page.locator('.learning-transition').first().screenshot({path:path.join(out,`${id}-${width}-${theme}.png`)});
    }
   }
  }
  // Losse HTML en scriptvrije leesversie bevatten dezelfde zes zichtbare leesbruggen.
  for(const width of [1366,390])for(const file of ['SRA%20interactieve%20samenvatting.html#les/rekenen','SRA%20leesversie.html']){
   await page.setViewportSize({width,height:950});
   await page.goto(base+'/'+file);await page.locator('.learning-transition').first().waitFor();
   assert.equal(await page.locator('.learning-transition').count(),file.includes('leesversie')?6:2);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,file);
   assert.equal(await page.locator('script[data-goatcounter]').count(),1,'SVG-titels mogen geen extra paginascripts krijgen');
   assert.ok(await page.locator('.transition-chart').evaluateAll(charts=>charts.every(chart=>chart.getBoundingClientRect().width<=280.5&&chart.getBoundingClientRect().height<=184)),`${file} ${width}: grafiek te groot`);
  }
  assert.deepEqual(errors,[]);console.log(JSON.stringify({ok:true,routes:checks.length,viewports:[1366,900,768,390,320],themes:['light','dark'],checks:['alle leesbruggen','grafiek rechts bij eigen uitleg; op smalle schermen eronder','twee rekenblokken samengevoegd','compact formaat en tussenruimte','labelgrootte en overlap','geen overloop','zelfstandige HTML en leesversie']}));
 }finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
