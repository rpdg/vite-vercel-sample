import{L as b,u as j}from"./index.939dba6a.js";import{M as u}from"./MainSectionHead.b9e7274a.js";import{u as _}from"./ExhibitorStore.e77797b5.js";import{u as y}from"./vue-i18n.0711e616.js";import{d as g}from"./vue-router.8ec3c3d8.js";import{s as d}from"./index.module.af86f0bd.js";import{C as v}from"./ContactToolbar.702d763f.js";import{s}from"./index.module.b07d7155.js";import{d as x,I as h,k as t,i as S,O as n,F as C}from"./@vue.fa05379c.js";import"./ant-design-vue.0c94ae40.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./FavouriteStore.c9b179cd.js";import"./vue-clipboard3.ca4b4e55.js";import"./clipboard.18fc16a5.js";function f(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!S(o)}var rt=x({props:{contactBarcode:{type:String,required:!0},companyBarcode:{type:String,required:!0}},setup(o){const{t:r}=y();let{appStore:i}=j(),{exhibitiorStore:p}=_();return h(async()=>{p.getContactInfo(o.contactBarcode)}),()=>{let c=p.contactInfo;if(c){let l,m,e=c.info,a=c.companyList[0];return t(C,null,[t(u,{redLead:!1},f(l=r("exhibitor.contactDetail"))?l:{default:()=>[l]}),t("div",{class:"pd_20 bg_white"},[t("div",{class:s.item},[t("img",{class:s.avatar,src:e.HeadImageUrl},null),t("div",{class:s.profile},[t("h4",null,[i.isEn?`${e.firstname}  ${e.lastname}`:e.lastname_cn+e.firstname_cn]),t("p",{class:"text_gray"},[i.isEn?e.company:e.company_cn]),t("p",{class:"text_gray"},[e.job_title]),t("hr",null,null),t("div",{class:s.iconBar},[t(v,{user:e},null)])])]),t(n("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[r("exhibitor.introduce")]),t("div",{class:"text_gray"},null)]}),t(n("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[r("exhibitor.interests")])]}),t(n("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[r("exhibitor.products")])]})]),t(u,{redLead:!0},f(m=r("exhibitor.company"))?m:{default:()=>[m]}),t(n("dir"),{class:`bg_white pd_20 ${d.contactListItem}`},{default:()=>[t("img",{src:a.company_logo,class:d.avatar},null),t("div",{class:d.profile},[t(g,{to:`/exhibitors/${o.companyBarcode}`},{default:()=>[t("h4",null,[i.isEn?a.companyname_en:a.companyname_cn])]}),t("div",{class:"text_gray"},[i.isEn?a.company_introduction_en:a.company_introduction])])]})])}else return t(b,null,null)}}});export{rt as default};
