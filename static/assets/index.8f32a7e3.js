import{B as x}from"./BlankGif.8ca146ab.js";import{u as V,a as R}from"./index.10146c26.js";import{v as _}from"./@rpdg.e35df5be.js";import{F as l,I as d,e as m,u as P,p as T}from"./ant-design-vue.2e5ee588.js";import{u as w}from"./vue-i18n.1b8a7ba2.js";import{a as B,u as F,d as O}from"./vue-router.4425a21e.js";import{M as L,J as M,H as U}from"./@ant-design.20fa5911.js";import{d as q,I as A,l as g,c as f,k as o,i as E}from"./@vue.f0a33739.js";function p(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!E(s)}var Q=q({name:"Login_SmsForm",setup(){const{authenStore:s}=V(),{appStore:v}=R(),h=B(),b=F(),{t}=w({useScope:"global"});A(()=>{s.getImgCode()});const u=g(),e=f({action:"sms",mobile:"",graphVerifyCode:"",verifyCode:"",agreed:!0,sendingSms:!1}),c=t("myItb.chat.send"),y="59",n=g(c);let C=async(a,i)=>_(i)?Promise.resolve():Promise.reject(t("login.mobileTip2")),S=async(a,i)=>e.action==="login"&&i===""?Promise.reject(t("login.smsCodeTip")):Promise.resolve();const k=f({mobile:[{required:!0,message:t("login.mobileTip"),trigger:"change"},{validator:C,trigger:"change"}],graphVerifyCode:[{required:!0,message:t("login.graphicCodeTip"),trigger:"change"}],verifyCode:[{validator:S,trigger:"change"}]});async function j(){e.action="sms";try{await u.value.validate(),e.sendingSms=!0,n.value=y;let a=setInterval(function(){~~n.value-1<1?(clearInterval(a),e.sendingSms=!1,n.value=c):n.value=~~n.value-1},1e3);await s.sendSmsCode(e.mobile,e.graphVerifyCode)&&T.success({message:t("login.smsSendSuccess")})}catch(a){console.log("error",a)}}async function I(){var a,i;e.action="login";try{await u.value.validate(),await s.loginWithSms(e.mobile,e.verifyCode),b.push((i=(a=h.query)==null?void 0:a.redirect)!=null?i:"/home")}catch(r){console.log("error",r)}}return()=>{let a,i;return o(l,{ref:u,model:e,rules:k},{default:()=>[o(l.Item,{name:"mobile",validateFirst:!0},{default:()=>[o(d,{value:e.mobile,"onUpdate:value":r=>e.mobile=r,placeholder:t("login.mobile")},{prefix:()=>o(L,{style:"color: rgba(0, 0, 0, 0.25)"},null)})]}),o(l.Item,{name:"graphVerifyCode"},{default:()=>[o(d,{value:e.graphVerifyCode,"onUpdate:value":r=>e.graphVerifyCode=r,placeholder:t("login.graphicCode")},{prefix:()=>o(M,{style:"color: rgba(0, 0, 0, 0.25)"},null),suffix:()=>{var r;return o("img",{src:((r=s.graphicRes)==null?void 0:r.graphVerifyCodeImg)||x},null)}})]}),o(l.Item,{name:"verifyCode"},{default:()=>[o(d,{value:e.verifyCode,"onUpdate:value":r=>e.verifyCode=r,placeholder:t("login.smsCode")},{prefix:()=>o(U,{style:"color: rgba(0, 0, 0, 0.25)"},null),suffix:()=>o(m,{style:{backgroundColor:"black",color:"white"},onClick:j,disabled:e.sendingSms},{default:()=>[n.value]})})]}),o(l.Item,{name:"agreed"},{default:()=>[o(P,{checked:e.agreed,"onUpdate:checked":r=>e.agreed=r},{default:()=>[o(O,{to:v.isEn?"/agreementEn":"/agreement"},p(a=t("login.agreeTip"))?a:{default:()=>[a]})]})]}),o(l.Item,null,{default:()=>[o(m,{type:"primary",block:!0,disabled:!e.agreed,loading:s.loading,onClick:I},p(i=t("login.login"))?i:{default:()=>[i]})]})]})}}});export{Q as S};
