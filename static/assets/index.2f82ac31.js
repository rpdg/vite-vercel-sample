import{L as t,u as a}from"./index.09ffdfbb.js";import{M as e}from"./MainSectionHead.8ba49e1e.js";import{u as o}from"./ExhibitorStore.92a27a76.js";import{u as r}from"./FavouriteStore.86b91829.js";import{_ as i}from"./vue-clipboard3.e3c4c0a4.js";import{u as s}from"./vue-i18n.bbad715b.js";import{d as n}from"./vue-router.0532eeed.js";import{s as c}from"./index.module.ba9314b5.js";import{C as l}from"./ContactToolbar.597e48fd.js";import{a2 as m,al as d,a0 as p,ag as u,aE as f,I as b}from"./@vue.5723de44.js";import"./ant-design-vue.7939872f.js";import"./@babel.dc475c8c.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.503097a2.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.60ec16aa.js";import"./moment.29305b8e.js";import"./warning.4abaefa0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./nprogress.3e43c680.js";import"./axios.a57df465.js";import"./@intlify.c2b61631.js";import"./source-map.3671d69c.js";import"./vue.3a1030aa.js";import"./clipboard.4b9ff286.js";var j="_item_1xdjy_1",_="_avatar_1xdjy_6",y="_profile_1xdjy_10",g="_iconBar_1xdjy_14";function v(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!u(t)}var x=m({props:{contactBarcode:{type:String,required:!0},companyBarcode:{type:String,required:!0}},setup(m){const{t:u}=s();let{appStore:x}=a(),{exhibitiorStore:h}=o();return r(),i(),d((async()=>{h.getContactInfo(m.contactBarcode)})),()=>{let a=h.contactInfo;if(a){let t,o,r=a.info,i=a.companyList[0];return p(b,null,[p(e,{redLead:!1},v(t=u("exhibitor.contactDetail"))?t:{default:()=>[t]}),p("div",{class:"pd_20 bg_white"},[p("div",{class:j},[p("img",{class:_,src:r.HeadImageUrl},null),p("div",{class:y},[p("h4",null,[x.isEn?`${r.firstname}  ${r.lastname}`:r.lastname_cn+r.firstname_cn]),p("p",{class:"text_gray"},[x.isEn?r.company:r.company_cn]),p("p",{class:"text_gray"},[r.job_title]),p("hr",null,null),p("div",{class:g},[p(l,{user:r},null)])])]),p(f("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[p("h4",null,[u("exhibitor.introduce")]),p("div",{class:"text_gray"},null)]}),p(f("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[p("h4",null,[u("exhibitor.interests")])]}),p(f("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[p("h4",null,[u("exhibitor.products")])]})]),p(e,{redLead:!0},v(o=u("exhibitor.company"))?o:{default:()=>[o]}),p(f("dir"),{class:`bg_white pd_20 ${c.contactListItem}`},{default:()=>[p("img",{src:i.company_logo,class:c.avatar},null),p("div",{class:c.profile},[p(n,{to:`/exhibitors/${m.companyBarcode}`},{default:()=>[p("h4",null,[x.isEn?i.companyname_en:i.companyname_cn])]}),p("div",{class:"text_gray"},[x.isEn?i.company_introduction_en:i.company_introduction])])]})])}return p(t,null,null)}}});export default x;
