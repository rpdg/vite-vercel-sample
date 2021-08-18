import{L as t,u as e}from"./index.69603f52.js";import{M as a}from"./MainSectionHead.8a2a8185.js";import{u as o,C as r}from"./ContactToolbar.e018f5e0.js";import{u as i}from"./FavouriteStore.6ab956e1.js";import{_ as s}from"./vue-clipboard3.e3c4c0a4.js";import{u as n}from"./vue-i18n.4205327f.js";import{d as c}from"./vue-router.d53e7fc8.js";import{s as l}from"./index.module.896cc485.js";import{a7 as m,k as d,aq as p,a5 as u,al as f,aJ as _,M as j}from"./@vue.545e4a02.js";import"./ant-design-vue.1886841a.js";import"./@babel.c1abb07f.js";import"./regenerator-runtime.df0ff768.js";import"./omit.js.0925d6dc.js";import"./@ant-design.5ba6d8e8.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.4607ccff.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./axios.a57df465.js";import"./nprogress.3e43c680.js";import"./@intlify.c2b61631.js";import"./source-map.3671d69c.js";import"./vue.e5ab7692.js";import"./clipboard.4b9ff286.js";var b="_item_1xdjy_1",y="_avatar_1xdjy_6",g="_profile_1xdjy_10",v="_iconBar_1xdjy_14";function x(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!f(t)}var h=m({props:{contactBarcode:{type:String,required:!0},companyBarcode:{type:String,required:!0}},setup(m){const{t:f}=n();let{appStore:h}=e(),{exhibitiorStore:S}=o(),{favoriteStore:w}=i();s();let B=d(!1);return p((async()=>{S.getContactInfo(m.contactBarcode),B.value=await w.judge({type:0,foreignKey:m.contactBarcode})})),()=>{let e=S.contactInfo;if(e){let t,o,i=e.info[0],s=e.companyList[0];return u(j,null,[u(a,{redLead:!1},x(t=f("exhibitor.contactDetail"))?t:{default:()=>[t]}),u("div",{class:"pd_20 bg_white"},[u("div",{class:b},[u("img",{class:y,src:i.HeadImageUrl},null),u("div",{class:g},[u("h4",null,[h.isEn?`${i.firstname}  ${i.lastname}`:i.lastname_cn+i.firstname_cn]),u("p",{class:"text_gray"},[h.isEn?i.company:i.company_cn]),u("p",{class:"text_gray"},[i.job_title]),u("hr",null,null),u("div",{class:v},[u(r,{barcode:i.employee_id},null)])])]),u(_("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[u("h4",null,[f("exhibitor.introduce")]),u("div",{class:"text_gray"},null)]}),u(_("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[u("h4",null,[f("exhibitor.interests")])]}),u(_("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[u("h4",null,[f("exhibitor.products")])]})]),u(a,{redLead:!0},x(o=f("exhibitor.company"))?o:{default:()=>[o]}),u(_("dir"),{class:`bg_white pd_20 ${l.contactListItem}`},{default:()=>[u("img",{src:s.company_logo,class:l.avatar},null),u("div",{class:l.profile},[u(c,{to:`/exhibitors/${m.companyBarcode}`},{default:()=>[u("h4",null,[h.isEn?s.companyname_en:s.companyname_cn])]}),u("div",{class:"text_gray"},[h.isEn?s.company_introduction_en:s.company_introduction])])]})])}return u(t,null,null)}}});export{h as default};
