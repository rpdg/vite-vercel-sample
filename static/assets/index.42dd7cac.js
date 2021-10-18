import{L as j,u as b}from"./index.0d78e88c.js";import{M as u}from"./MainSectionHead.b9e7274a.js";import{u as _}from"./ExhibitorStore.e3183c6f.js";import{u as y}from"./vue-i18n.0711e616.js";import{d as g}from"./vue-router.8ec3c3d8.js";import{s as m}from"./index.module.6e348a91.js";import{C as v}from"./ContactToolbar.d383d0e2.js";import{s}from"./index.module.78f4d7e2.js";import{d as x,I as h,k as e,i as S,O as n,F as C}from"./@vue.fa05379c.js";import"./ant-design-vue.034afe85.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./FavouriteStore.63cbddbe.js";import"./vue-clipboard3.ca4b4e55.js";import"./clipboard.18fc16a5.js";function f(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!S(o)}var re=x({props:{contactBarcode:{type:String,required:!0},companyBarcode:{type:String,required:!0}},setup(o){const{t:a}=y();let{appStore:i}=b(),{exhibitiorStore:p}=_();return h(async()=>{p.getContactInfo(o.contactBarcode)}),()=>{let c=p.contactInfo;if(c){let l,d,t=c.info,r=c.companyList[0];return e(C,null,[e(u,{redLead:!1},f(l=a("exhibitor.contactDetail"))?l:{default:()=>[l]}),e("div",{class:"pd_20 bg_white"},[e("div",{class:s.item},[e("img",{class:s.avatar,src:t.HeadImageUrl},null),e("div",{class:s.profile},[e("h4",null,[i.isEn?`${t.firstname}  ${t.lastname}`:t.lastname_cn+t.firstname_cn]),e("p",{class:"text_gray"},[i.isEn?t.company:t.company_cn]),e("p",{class:"text_gray"},[t.job_title]),e("hr",null,null),e("div",{class:s.iconBar},[e(v,{user:t},null)])])]),e(n("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[e("h4",null,[a("exhibitor.introduce")]),e("div",{class:"text_gray"},null)]}),e(n("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[e("h4",null,[a("exhibitor.interests")])]}),e(n("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[e("h4",null,[a("exhibitor.products")])]})]),e(u,{redLead:!0},f(d=a("exhibitor.company"))?d:{default:()=>[d]}),r&&e(n("dir"),{class:`bg_white pd_20 ${m.contactListItem}`},{default:()=>[e("img",{src:r.company_logo,class:m.avatar},null),e("div",{class:m.profile},[e(g,{to:`/exhibitors/${o.companyBarcode}`},{default:()=>[e("h4",null,[i.isEn?r.companyname_en:r.companyname_cn])]}),e("div",{class:"text_gray"},[i.isEn?r.company_introduction_en:r.company_introduction])])]})])}else return e(j,null,null)}}});export{re as default};
