(function(root){
  'use strict';
  function finite(...xs){if(!xs.every(Number.isFinite))throw Error('Vul alle velden in met geldige getallen.');}
  function sample(N,n){finite(N,n);if(!Number.isInteger(N)||!Number.isInteger(n)||N<2||n<2||n>N)throw Error('Gebruik gehele aantallen met 2 ≤ n ≤ N.');}
  // Central two-sided Student quantiles, without rounding to a table row.
  // The incomplete beta is evaluated in the smaller tail to retain precision.
  function logGamma(z){
    const coefficients=[676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9.984369578019572e-6,1.5056327351493116e-7];
    let x=.99999999999980993;z-=1;
    for(let i=0;i<coefficients.length;i++)x+=coefficients[i]/(z+i+1);
    const t=z+7.5;return .9189385332046727+(z+.5)*Math.log(t)-t+Math.log(x);
  }
  function logStudentBeta(df){
    const a=df/2;
    // Stable gamma ratio: avoid subtracting two nearly equal, large log-gammas.
    if(a>=32){const u=1/a,u2=u*u;return .5*Math.log(Math.PI)-.5*Math.log(a)+u*(1/8+u2*(-1/192+u2*(1/640-u2*17/14336)));}
    return logGamma(a)+.5*Math.log(Math.PI)-logGamma(a+.5);
  }
  function betaFraction(a,b,x){
    const tiny=1e-300,protect=v=>Math.abs(v)<tiny?(v<0?-tiny:tiny):v;
    let c=1,d=1/protect(1-(a+b)*x/(a+1)),h=d;
    for(let m=1;m<=300;m++){
      const m2=2*m;
      let aa=m/(a+m2-1)*((b-m)*x/(a+m2));
      d=1/protect(1+aa*d);c=protect(1+aa/c);h*=d*c;
      aa=-(a+m)/(a+m2)*((a+b+m)*x/(a+m2+1));
      d=1/protect(1+aa*d);c=protect(1+aa/c);
      const delta=d*c;h*=delta;if(Math.abs(delta-1)<4*Number.EPSILON)return h;
    }
    throw Error('De t-waarde kon niet nauwkeurig worden berekend.');
  }
  function regularizedBeta(x,a,b,logBeta){
    if(x<=0)return 0;if(x>=1)return 1;
    const front=Math.exp(a*Math.log(x)+b*Math.log1p(-x)-logBeta);
    return x<(a+1)/(a+b+2)?front*betaFraction(a,b,x)/a:1-front*betaFraction(b,a,1-x)/b;
  }
  function normalUpperTail(z){
    // Integrating the scaled tail avoids subtracting a CDF close to one.
    const f=u=>Math.exp(-z*u-u*u/2);
    function integrate(a,b,fa,fm,fb,whole,tol,depth){
      const mid=(a+b)/2,l=f((a+mid)/2),r=f((mid+b)/2);
      const left=(mid-a)*(fa+4*l+fm)/6,right=(b-mid)*(fm+4*r+fb)/6,delta=left+right-whole;
      if(depth===0||Math.abs(delta)<=15*tol)return left+right+delta/15;
      return integrate(a,mid,fa,l,fm,left,tol/2,depth-1)+integrate(mid,b,fm,r,fb,right,tol/2,depth-1);
    }
    return Math.exp(-z*z/2)/Math.sqrt(2*Math.PI)*integrate(0,12,1,f(6),f(12),2*(1+4*f(6)+f(12)),2e-14,22);
  }
  function normalCritical(tail){
    const polynomial=(coeff,x)=>coeff.reduce((sum,c)=>sum*x+c,0);
    let z;
    if(tail<.02425){
      const q=Math.sqrt(-2*Math.log(tail));
      z=-polynomial([-.007784894002430293,-.3223964580411365,-2.400758277161838,-2.549732539343734,4.374664141464968,2.938163982698783],q)/polynomial([.007784695709041462,.3224671290700398,2.445134137142996,3.754408661907416,1],q);
    }else{
      const q=.5-tail,r=q*q;
      z=q*polynomial([-39.69683028665376,220.9460984245205,-275.9285104469687,138.357751867269,-30.66479806614716,2.506628277459239],r)/polynomial([-54.47609879822406,161.5858368580409,-155.6989798598866,66.80131188771972,-13.28068155288572,1],r);
    }
    return z+(normalUpperTail(z)-tail)/(Math.exp(-z*z/2)/Math.sqrt(2*Math.PI));
  }
  function studentTCritical(confidence,df){
    finite(confidence,df);
    if(confidence<=0||confidence>=1||!Number.isInteger(df)||df<1)throw Error('Gebruik 0 < betrouwbaarheid < 1 en een positief geheel aantal vrijheidsgraden.');
    const logBeta=logStudentBeta(df);
    // The inverse's local series avoids losing a tiny confidence to 1 - confidence.
    if(confidence<.001){
      const u=confidence*Math.exp(.5*Math.log(df)+logBeta-Math.LN2),v=1/df;
      return u*(1+u*u*((1+v)/6+u*u*(1+v)*(7+v)/120));
    }
    const tail=(1-confidence)/2;
    if(df>=100000){
      // At these df the fourth-order t expansion has negligible truncation error,
      // and avoids loss of precision in beta arguments indistinguishable from 1.
      const z=normalCritical(tail),z2=z*z,v=1/df;
      return z+z*(z2+1)*v/4+z*(5*z2*z2+16*z2+3)*v*v/96+z*(3*z2**3+19*z2*z2+17*z2-15)*v**3/384+z*(79*z2**4+776*z2**3+1482*z2*z2-1920*z2-945)*v**4/92160;
    }
    const upper=t=>.5*regularizedBeta(df/(df+t*t),df/2,.5,logBeta);
    const central=t=>regularizedBeta(t*t/(df+t*t),.5,df/2,logBeta);
    const below=t=>confidence<.5?central(t)<confidence:upper(t)>tail;
    let lo=0,hi=1;
    while(below(hi))hi*=2;
    for(let i=0;i<100;i++){
      const mid=lo+(hi-lo)/2;if(mid===lo||mid===hi)break;
      if(below(mid))lo=mid;else hi=mid;
      if(hi-lo<=8*Number.EPSILON*hi)break;
    }
    return lo+(hi-lo)/2;
  }
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
  const api={stats,estimate,difference,ratio,regressionEstimator,anova,predict,ols,allocate,stratified,calc,studentTCritical};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  root.SRAMath=api;
})(typeof window!=='undefined'?window:globalThis);
