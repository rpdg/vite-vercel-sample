import{s as i,L as y,a as T}from"./index.8bb54af3.js";import{u as k,a as I}from"./index.fb345625.js";import{F as s,b as r,x as S,f as x,M as c}from"./ant-design-vue.fcf1ac88.js";import{u as R}from"./vue-i18n.1e3f796f.js";import{u as U,d as f}from"./vue-router.b7316d96.js";import{d as q,l as w,c as b,k as e,i as N,B as _}from"./@vue.ca0c2fb5.js";import"./@rpdg.9741c2f9.js";import"./moment.29305b8e.js";import"./@ant-design.45c2fd2e.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.a04268fa.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.08638ec1.js";function p(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!N(a)}var le=q({name:"FastPass",setup(){const{t:a}=R({useScope:"global"}),{authenStore:d}=k(),{appStore:m}=I(),j=U(),g=w(),t=b({firstname:"",lastname:"",mobile:"",mail:"",company:"",jobtitle:"",agreed:!1}),v=b({firstname:[{required:!0,message:a("login.firstNameTip"),trigger:"change"}],lastname:[{required:!0,message:a("login.lastNameTip"),trigger:"change"}],mobile:[{required:!0,message:a("login.phoneTip"),trigger:"change"}],mail:[{required:!0,message:a("login.emailTip"),trigger:"change"},{type:"email",message:a("login.emailTip2"),trigger:"blur"}],company:[{required:!0,message:a("login.companyTip"),trigger:"change"}],jobtitle:[{required:!0,message:a("login.jobTitleTip"),trigger:"change"}]});async function h(){try{await g.value.validate();let o=_(t);m.isEn?o.lastname=o.firstname+o.lastname:o.lastname=o.firstname+" "+o.lastname,o.firstname="",await d.fastRegist(o),c.success({content:a("login.fastPass_OK"),okText:a("login.okbtn"),onOk:()=>{j.push("/login")}})}catch(o){let n=o.message.split("|");c.error({content:n[m.isEn?0:1],okText:a("login.okbtn")})}}return()=>{let o,n,u;return e(T,null,{default:()=>[e("div",{class:i.outer},[e("div",{class:i.padding},[e(y,null,null)]),e("div",{class:`${i.form} ${i.regForm}`},[e("h1",null,[a("login.fastPass")]),e("p",{style:"color:red;"},[a("login.fastpasstips")]),e(s,{ref:g,model:t,rules:v},{default:()=>[e(s.Item,{name:"firstname"},{default:()=>[e(r,{value:t.firstname,"onUpdate:value":l=>t.firstname=l,placeholder:a("login.firstName")},null)]}),e(s.Item,{name:"lastname"},{default:()=>[e(r,{value:t.lastname,"onUpdate:value":l=>t.lastname=l,placeholder:a("login.lastName")},null)]}),e(s.Item,{name:"mobile"},{default:()=>[e(r,{value:t.mobile,"onUpdate:value":l=>t.mobile=l,placeholder:a("login.phone")},null)]}),e(s.Item,{name:"mail"},{default:()=>[e(r,{value:t.mail,"onUpdate:value":l=>t.mail=l,placeholder:a("login.email")},null)]}),e(s.Item,{name:"company"},{default:()=>[e(r,{value:t.company,"onUpdate:value":l=>t.company=l,placeholder:a("login.company")},null)]}),e(s.Item,{name:"jobtitle"},{default:()=>[e(r,{value:t.jobtitle,"onUpdate:value":l=>t.jobtitle=l,placeholder:a("login.jobTitle")},null)]}),e(s.Item,{name:"agreed"},{default:()=>[e(S,{checked:t.agreed,"onUpdate:checked":l=>t.agreed=l},{default:()=>[e(f,{to:m.isEn?"/agreementEn":"/agreement"},p(o=a("login.agreeTip"))?o:{default:()=>[o]})]})]}),e(s.Item,null,{default:()=>[e(x,{type:"primary",block:!0,disabled:!0,loading:d.loading,onClick:h},p(n=a("login.login"))?n:{default:()=>[n]})]})]})]),e("div",{class:i.padding},[e("p",{class:i.registTip},[e(f,{to:"/login"},p(u=a("login.loginTip"))?u:{default:()=>[u]})])])])]})}}});export{le as default};
