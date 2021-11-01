import{B as x}from"./BlankGif.8ca146ab.js";import{u as V,a as R}from"./index.316ce18f.js";import{F as l,I as d,e as m,s as _,p as P}from"./ant-design-vue.034afe85.js";import{u as T}from"./vue-i18n.0711e616.js";import{a as w,u as B,d as F}from"./vue-router.8ec3c3d8.js";import{M as O,K as L,J as M}from"./@ant-design.8f5596ac.js";import{d as U,I as q,l as g,c as f,k as o,i as A}from"./@vue.fa05379c.js";function E(a){return/^1[3456789]\d{9}$/.test(a)}function p(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!A(a)}var D=U({name:"Login_SmsForm",setup(){const{authenStore:a}=V(),{appStore:v}=R(),h=w(),y=B(),{t:i}=T({useScope:"global"});q(()=>{a.getImgCode()});const u=g(),e=f({action:"sms",mobile:"",graphVerifyCode:"",verifyCode:"",agreed:!0,sendingSms:!1}),c=i("myItb.chat.send"),b="59",s=g(c);let C=async(t,n)=>E(n)?Promise.resolve():Promise.reject(i("login.mobileTip2")),S=async(t,n)=>e.action==="login"&&n===""?Promise.reject(i("login.smsCodeTip")):Promise.resolve();const k=f({mobile:[{required:!0,message:i("login.mobileTip"),trigger:"change"},{validator:C,trigger:"change"}],graphVerifyCode:[{required:!0,message:i("login.graphicCodeTip"),trigger:"change"}],verifyCode:[{validator:S,trigger:"change"}]});async function I(){e.action="sms";try{await u.value.validate(),e.sendingSms=!0,s.value=b;let t=setInterval(function(){~~s.value-1<1?(clearInterval(t),e.sendingSms=!1,s.value=c):s.value=~~s.value-1},1e3);await a.sendSmsCode(e.mobile,e.graphVerifyCode)&&P.success({message:i("login.smsSendSuccess")})}catch(t){console.log("error",t)}}async function j(){var t,n;e.action="login";try{await u.value.validate(),await a.loginWithSms(e.mobile,e.verifyCode),y.push((n=(t=h.query)==null?void 0:t.redirect)!=null?n:"/home")}catch(r){console.log("error",r)}}return()=>{let t,n;return o(l,{ref:u,model:e,rules:k},{default:()=>[o(l.Item,{name:"mobile",validateFirst:!0},{default:()=>[o(d,{value:e.mobile,"onUpdate:value":r=>e.mobile=r,placeholder:i("login.mobile")},{prefix:()=>o(O,{style:"color: rgba(0, 0, 0, 0.25)"},null)})]}),o(l.Item,{name:"graphVerifyCode"},{default:()=>[o(d,{value:e.graphVerifyCode,"onUpdate:value":r=>e.graphVerifyCode=r,placeholder:i("login.graphicCode")},{prefix:()=>o(L,{style:"color: rgba(0, 0, 0, 0.25)"},null),suffix:()=>{var r;return o("img",{src:((r=a.graphicRes)==null?void 0:r.graphVerifyCodeImg)||x},null)}})]}),o(l.Item,{name:"verifyCode"},{default:()=>[o(d,{value:e.verifyCode,"onUpdate:value":r=>e.verifyCode=r,placeholder:i("login.smsCode")},{prefix:()=>o(M,{style:"color: rgba(0, 0, 0, 0.25)"},null),suffix:()=>o(m,{style:{backgroundColor:"black",color:"white"},onClick:I,disabled:e.sendingSms},{default:()=>[s.value]})})]}),o(l.Item,{name:"agreed"},{default:()=>[o(_,{checked:e.agreed,"onUpdate:checked":r=>e.agreed=r},{default:()=>[o(F,{to:v.isEn?"/agreementEn":"/agreement"},p(t=i("login.agreeTip"))?t:{default:()=>[t]})]})]}),o(l.Item,null,{default:()=>[o(m,{type:"primary",block:!0,disabled:!e.agreed,loading:a.loading,onClick:j},p(n=i("login.login"))?n:{default:()=>[n]})]})]})}}});export{D as S};
