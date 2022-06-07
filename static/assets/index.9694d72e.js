import{u as V,B as _,a as R}from"./index.d755f037.js";import{v as T}from"./@rpdg.e35df5be.js";import{F as l,b as u,g as c,x as w,n as O,M as P}from"./ant-design-vue.a99caae8.js";import{u as F}from"./vue-i18n.df730e9c.js";import{a as M,u as U,d as B}from"./vue-router.85e08d32.js";import{Q as L,T as q,O as A}from"./@ant-design.dd8d38e4.js";import{d as E,I as N,l as g,c as f,k as o,i as W}from"./@vue.f0a33739.js";function p(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!W(n)}var X=E({name:"Login_SmsForm",setup(){const{authenStore:n}=V(),{appStore:v}=R(),h=M(),b=U(),{t:r}=F({useScope:"global"});N(()=>{n.getImgCode()});const d=g(),e=f({action:"sms",mobile:"",graphVerifyCode:"",verifyCode:"",agreed:!0,sendingSms:!1}),m=r("myItb.chat.send"),y="59",s=g(m);let C=async(t,i)=>T(i)?Promise.resolve():Promise.reject(r("login.mobileTip2")),S=async(t,i)=>e.action==="login"&&i===""?Promise.reject(r("login.smsCodeTip")):Promise.resolve();const k=f({mobile:[{required:!0,message:r("login.mobileTip"),trigger:"change"},{validator:C,trigger:"change"}],graphVerifyCode:[{required:!0,message:r("login.graphicCodeTip"),trigger:"change"}],verifyCode:[{validator:S,trigger:"change"}]});async function j(){e.action="sms";try{await d.value.validate(),e.sendingSms=!0,s.value=y;let t=setInterval(function(){~~s.value-1<1?(clearInterval(t),e.sendingSms=!1,s.value=m):s.value=~~s.value-1},1e3);await n.sendSmsCode(e.mobile,e.graphVerifyCode)&&O.success({message:r("login.smsSendSuccess")})}catch(t){console.log("error",t)}}async function I(){var t,i;e.action="login";try{await d.value.validate(),await n.loginWithSms(e.mobile,e.verifyCode),b.push((i=(t=h.query)==null?void 0:t.redirect)!=null?i:"/home")}catch(a){let x=a.message;P.error({content:r(x==="Username or password error"?"login.login_error1":"login.login_error2"),okText:r("login.okbtn")})}}return()=>{let t,i;return o(l,{ref:d,model:e,rules:k},{default:()=>[o(l.Item,{name:"mobile",validateFirst:!0},{default:()=>[o(u,{value:e.mobile,"onUpdate:value":a=>e.mobile=a,placeholder:r("login.mobile")},{prefix:()=>o(L,{style:"color: rgba(0, 0, 0, 0.25)"},null)})]}),o(l.Item,{name:"graphVerifyCode"},{default:()=>[o(u,{value:e.graphVerifyCode,"onUpdate:value":a=>e.graphVerifyCode=a,placeholder:r("login.graphicCode")},{prefix:()=>o(q,{style:"color: rgba(0, 0, 0, 0.25)"},null),suffix:()=>{var a;return o("img",{src:((a=n.graphicRes)==null?void 0:a.graphVerifyCodeImg)||_},null)}})]}),o(l.Item,{name:"verifyCode"},{default:()=>[o(u,{value:e.verifyCode,"onUpdate:value":a=>e.verifyCode=a,placeholder:r("login.smsCode")},{prefix:()=>o(A,{style:"color: rgba(0, 0, 0, 0.25)"},null),suffix:()=>o(c,{style:{backgroundColor:"black",color:"white"},onClick:j,disabled:e.sendingSms},{default:()=>[s.value]})})]}),o(l.Item,{name:"agreed"},{default:()=>[o(w,{checked:e.agreed,"onUpdate:checked":a=>e.agreed=a},{default:()=>[o(B,{to:v.isEn?"/agreementEn":"/agreement"},p(t=r("login.agreeTip"))?t:{default:()=>[t]})]})]}),o(l.Item,null,{default:()=>[o(c,{type:"primary",block:!0,disabled:!e.agreed,loading:n.loading,onClick:I},p(i=r("login.login"))?i:{default:()=>[i]})]})]})}}});export{X as S};
