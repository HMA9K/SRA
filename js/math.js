(function(root){
  'use strict';
  function finite(...xs){if(!xs.every(Number.isFinite))throw Error('Vul alle velden in met geldige getallen.');}
  function sample(N,n){finite(N,n);if(!Number.isInteger(N)||!Number.isInteger(n)||N<2||n<2||n>N)throw Error('Gebruik gehele aantallen met 2 ≤ n ≤ N.');}
  function stats(values){if(values.length<2||!values.every(Number.isFinite))throw Error('Vul minstens twee geldige waarden in.');const n=values.length,sum=values.reduce((a,b)=>a+b,0),mean=sum/n,ss=values.reduce((a,b)=>a+(b-mean)**2,0);return {n,sum,mean,variance:ss/(n-1),sd:Math.sqrt(ss/(n-1)),ss};}
  function estimate({N,n,mean,sd,t}){sample(N,n);finite(mean,sd,t);if(sd<0||t<=0)throw Error('De spreiding mag niet negatief zijn en t moet positief zijn.');const correction=Math.sqrt((N-n)/(N-1)),point=N*mean,se=N*sd/Math.sqrt(n)*correction,margin=t*se;return {point,se,correction,margin,low:point-margin,high:point+margin};}
  function difference({N,n,B,meanError,sdError,t}){finite(B,meanError);const r=estimate({N,n,mean:meanError,sd:sdError,t});r.point=B-N*meanError;r.low=r.point-r.margin;r.high=r.point+r.margin;return r;}
  function ratio({N,n,B,sumW,sumB,sw,sb,r,t}){finite(B,sumW,sumB,sw,sb,r);if(sumB===0||sw<0||sb<0||Math.abs(r)>1)throw Error('Controleer som boekwaarden, spreidingen en correlatie.');const q=sumW/sumB,sq=Math.sqrt(Math.max(0,sw*sw-2*q*r*sb*sw+q*q*sb*sb)),res=estimate({N,n,mean:q*B/N,sd:sq,t});return {...res,q,sq};}
  function regressionEstimator({N,n,B,mw,mb,sw,sb,r,t}){finite(B,mw,mb,sw,sb,r);if(sb<=0||sw<0||Math.abs(r)>1)throw Error('Gebruik s_b > 0, s_w ≥ 0 en −1 ≤ R ≤ 1.');const b1=r*sw/sb,point=N*mw+b1*(B-N*mb),base=estimate({N,n,mean:point/N,sd:sw*Math.sqrt(1-r*r),t});return {...base,b1};}
  function anova(n,k,SSR,SSE){finite(n,k,SSR,SSE);if(!Number.isInteger(n)||!Number.isInteger(k)||k<1||n<=k+1||SSR<0||SSE<=0)throw Error('Gebruik gehele n en k, n > k + 1, SSR ≥ 0 en SSE > 0.');const total=SSR+SSE,df=n-k-1,MSR=SSR/k,MSE=SSE/df,R2=SSR/total;return {total,df,MSR,MSE,R2,F:MSR/MSE,se:Math.sqrt(MSE),adjusted:R2-k*(1-R2)/df};}
  function predict({n,b0,b1,x0,xbar,sx,se,t}){finite(n,b0,b1,x0,xbar,sx,se,t);if(!Number.isInteger(n)||n<3||sx<=0||se<0||t<=0)throw Error('Gebruik n ≥ 3, s_x > 0, s_e ≥ 0 en t > 0.');const point=b0+b1*x0,extra=(x0-xbar)**2/((n-1)*sx*sx),factor=Math.sqrt(1+1/n+extra),margin=t*se*factor;return {point,extra,factor,margin,low:point-margin,high:point+margin};}
  function ols(xs,ys){if(xs.length!==ys.length)throw Error('Ongelijke reeksen.');const sx=stats(xs),sy=stats(ys);if(!sx.ss)throw Error('x moet variëren.');const cov=xs.reduce((s,x,i)=>s+(x-sx.mean)*(ys[i]-sy.mean),0),b1=cov/sx.ss,b0=sy.mean-b1*sx.mean,pred=xs.map(x=>b0+b1*x),sse=ys.reduce((s,y,i)=>s+(y-pred[i])**2,0);return {b0,b1,sse,r:sy.ss?cov/Math.sqrt(sx.ss*sy.ss):0,pred};}
  function allocate(Ns,ss,n,method){finite(...Ns,...ss,n);if(Ns.length!==ss.length||Ns.some(N=>!Number.isInteger(N)||N<1)||ss.some(s=>s<0)||!Number.isInteger(n)||n<1||n>Ns.reduce((a,b)=>a+b,0))throw Error('Controleer de groepsomvang, spreiding en totale steekproefomvang.');const weights=Ns.map((N,i)=>N*(method==='neyman'?ss[i]:1)),sum=weights.reduce((a,b)=>a+b,0);if(sum===0)throw Error('Er moet minstens één positieve spreiding zijn.');const raw=weights.map(w=>n*w/sum);if(raw.some((v,i)=>v>Ns[i]))throw Error('Een stratum krijgt meer controles dan posten. Maak dit stratum integraal en verdeel het restant opnieuw.');const rounded=raw.map(Math.floor);let remain=n-rounded.reduce((a,b)=>a+b,0);const order=raw.map((v,i)=>({i,r:v-rounded[i]})).sort((a,b)=>b.r-a.r);for(const {i} of order){if(remain<=0)break;if(rounded[i]<Ns[i]){rounded[i]++;remain--;}}return {raw,rounded};}
  function stratified(rows,top,t){finite(top,t);if(t<=0)throw Error('t moet positief zijn.');const parts=rows.map(r=>estimate({...r,t:1})),point=top+parts.reduce((s,r)=>s+r.point,0),se=Math.sqrt(parts.reduce((s,r)=>s+r.se*r.se,0)),margin=t*se;return {point,se,margin,low:point-margin,high:point+margin};}
  function calc(expression){
    const source=expression.replaceAll(',','.').replaceAll('×','*').replaceAll('÷','/').replaceAll('−','-').replaceAll('√','sqrt');
    if(source.length>500)throw Error('Berekening te lang.');
    const tokens=source.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?|sqrt|ln|exp|[()+\-*/^]/g)||[];
    if(tokens.join('')!==source.replace(/\s/g,''))throw Error('Gebruik getallen, + − × ÷, machten, haakjes, sqrt, ln of exp.');
    let i=0;
    function atom(){const token=tokens[i++];if(token==='('){const v=add();if(tokens[i++]!==')')throw Error('Haakje sluiten ontbreekt.');return v;}if(['sqrt','ln','exp'].includes(token)){if(tokens[i++]!=='(')throw Error('Gebruik haakjes na de functie.');const v=add();if(tokens[i++]!==')')throw Error('Haakje sluiten ontbreekt.');return token==='sqrt'?Math.sqrt(v):token==='ln'?Math.log(v):Math.exp(v);}if(token===undefined||!Number.isFinite(Number(token)))throw Error('Vul een volledige berekening in.');return Number(token);}
    function power(){const a=atom();if(tokens[i]==='^'){i++;return a**unary();}return a;}
    function unary(){if(tokens[i]==='+'){i++;return unary();}if(tokens[i]==='-'){i++;return -unary();}return power();}
    function mul(){let a=unary();while(['*','/'].includes(tokens[i])){const op=tokens[i++],b=unary();a=op==='*'?a*b:a/b;}return a;}
    function add(){let a=mul();while(['+','-'].includes(tokens[i])){const op=tokens[i++],b=mul();a=op==='+'?a+b:a-b;}return a;}
    const result=add();if(i!==tokens.length||!Number.isFinite(result))throw Error('Deze berekening heeft geen geldige eindige uitkomst.');return result;
  }
  const api={stats,estimate,difference,ratio,regressionEstimator,anova,predict,ols,allocate,stratified,calc};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  root.SRAMath=api;
})(typeof window!=='undefined'?window:globalThis);
