import{B as V}from"./BlankGif.8ca146ab.js";import{u as _,a as R}from"./index.2167a810.js";import{v as T}from"./@rpdg.c2e06738.js";import{F as l,I as u,B as c,t as w,n as B,f as P}from"./ant-design-vue.04da4757.js";import{u as F}from"./vue-i18n.95ef2b18.js";import{a as M,u as O,d as U}from"./vue-router.5ade7376.js";import{M as L,J as q,G}from"./@ant-design.b68099c7.js";import{d as A,I as E,l as g,c as f,k as o,i as N}from"./@vue.c37eb56a.js";function p(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!N(n)}var Y=A({name:"Login_SmsForm",setup(){const{authenStore:n}=_(),{appStore:v}=R(),b=M(),h=O(),{t:r}=F({useScope:"global"});E(()=>{n.getImgCode()});const d=g(),e=f({action:"sms",mobile:"",graphVerifyCode:"",verifyCode:"",agreed:!0,sendingSms:!1}),m=r("myItb.chat.send"),y="59",s=g(m);let C=async(t,i)=>T(i)?Promise.resolve():Promise.reject(r("login.mobileTip2")),S=async(t,i)=>e.action==="login"&&i===""?Promise.reject(r("login.smsCodeTip")):Promise.resolve();const k=f({mobile:[{required:!0,message:r("login.mobileTip"),trigger:"change"},{validator:C,trigger:"change"}],graphVerifyCode:[{required:!0,message:r("login.graphicCodeTip"),trigger:"change"}],verifyCode:[{validator:S,trigger:"change"}]});async function j(){e.action="sms";try{await d.value.validate(),e.sendingSms=!0,s.value=y;let t=setInterval(function(){~~s.value-1<1?(clearInterval(t),e.sendingSms=!1,s.value=m):s.value=~~s.value-1},1e3);await n.sendSmsCode(e.mobile,e.graphVerifyCode)&&B.success({message:r("login.smsSendSuccess")})}catch(t){console.log("error",t)}}async function I(){var t,i;e.action="login";try{await d.value.validate(),await n.loginWithSms(e.mobile,e.verifyCode),h.push((i=(t=b.query)==null?void 0:t.redirect)!=null?i:"/home")}catch(a){let x=a.message;P.error({content:r(x==="Username or password error"?"login.login_error1":"login.login_error2"),okText:r("login.okbtn")})}}return()=>{let t,i;return o(l,{ref:d,model:e,rules:k},{default:()=>[o(l.Item,{name:"mobile",validateFirst:!0},{default:()=>[o(u,{value:e.mobile,"onUpdate:value":a=>e.mobile=a,placeholder:r("login.mobile")},{prefix:()=>o(L,{style:"color: rgba(0, 0, 0, 0.25)"},null)})]}),o(l.Item,{name:"graphVerifyCode"},{default:()=>[o(u,{value:e.graphVerifyCode,"onUpdate:value":a=>e.graphVerifyCode=a,placeholder:r("login.graphicCode")},{prefix:()=>o(q,{style:"color: rgba(0, 0, 0, 0.25)"},null),suffix:()=>{var a;return o("img",{src:((a=n.graphicRes)==null?void 0:a.graphVerifyCodeImg)||V},null)}})]}),o(l.Item,{name:"verifyCode"},{default:()=>[o(u,{value:e.verifyCode,"onUpdate:value":a=>e.verifyCode=a,placeholder:r("login.smsCode")},{prefix:()=>o(G,{style:"color: rgba(0, 0, 0, 0.25)"},null),suffix:()=>o(c,{style:{backgroundColor:"black",color:"white"},onClick:j,disabled:e.sendingSms},{default:()=>[s.value]})})]}),o(l.Item,{name:"agreed"},{default:()=>[o(w,{checked:e.agreed,"onUpdate:checked":a=>e.agreed=a},{default:()=>[o(U,{to:v.isEn?"/agreementEn":"/agreement"},p(t=r("login.agreeTip"))?t:{default:()=>[t]})]})]}),o(l.Item,null,{default:()=>[o(c,{type:"primary",block:!0,disabled:!e.agreed,loading:n.loading,onClick:I},p(i=r("login.login"))?i:{default:()=>[i]})]})]})}}});export{Y as S};
