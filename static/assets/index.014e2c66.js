import{L as j,a as b}from"./index.2f2c270b.js";import{S as g}from"./Config.41849c7b.js";import{M as u}from"./MainSectionHead.743546ec.js";import{u as y}from"./ExhibitorStore.85ba0ddd.js";import{u as v}from"./vue-i18n.532c4af8.js";import{d as x}from"./vue-router.8e73f157.js";import{s as m}from"./index.module.6e348a91.js";import{s,C as h}from"./index.module.0741d38c.js";import{d as S}from"./avator_red.2a3a1020.js";import{d as E,I,k as t,i as L,O as c,F as f}from"./@vue.7a36ac42.js";import"./ant-design-vue.109ff973.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.4b470cc8.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.0f36269b.js";import"./nprogress.c26b133a.js";import"./axios.7aed06b8.js";import"./@intlify.9c0a92d2.js";import"./source-map.3671d69c.js";import"./vue.a54dcdd3.js";import"./FavouriteStore.94d673d3.js";import"./vue-clipboard3.5ae8d1c7.js";import"./clipboard.682bb09e.js";function _(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!L(r)}var nt=E({props:{contactBarcode:{type:String,required:!0},companyBarcode:{type:String,required:!0}},setup(r){const{t:i}=v();let{appStore:o}=b(),{exhibitiorStore:p}=y();return I(async()=>{p.getContactInfo(r.contactBarcode)}),()=>{let n=p.contactInfo;if(n){let l,d,e=n.info,a=n.companyList[0];return t(f,null,[t(u,{redLead:!1},_(l=i("exhibitor.contactDetail"))?l:{default:()=>[l]}),t("div",{class:"pd_20 bg_white"},[t("div",{class:s.item},[e.HeadImageUrl!=null&&e.HeadImageUrl!=""?t("img",{class:s.avatar,src:`${g}${e.HeadImageUrl}`},null):t("img",{class:s.avatar,src:S},null),t("div",{class:s.profile},[t("h4",null,[o.isEn?`${e.firstname}  ${e.lastname}`:e.lastname_cn+e.firstname_cn]),t("p",{class:"text_gray"},[o.isEn?e.company:e.company_cn]),t("p",{class:"text_gray"},[e.job_title]),t("hr",null,null),t("div",{class:s.iconBar},[t(h,{user:e},null)])])]),t(c("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[i("exhibitor.introduce")]),t("div",{class:"text_gray"},[o.isEn?e.staff_introduce_en:e.staff_introduce_cn])]}),t(c("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[i("exhibitor.interests")]),t("div",{class:"text_gray word_break"},[o.isEn?e.region2_en.join(", "):e.region2_cn.join(", ")])]}),t(c("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[i("exhibitor.products")]),t("div",{class:"text_gray word_break"},[o.isEn?e.product_en.join(", "):e.product_cn.join(", ")])]})]),a&&n.companyList.length>0&&t(f,null,[t(u,{redLead:!0},_(d=i("exhibitor.company"))?d:{default:()=>[d]}),t(c("dir"),{class:`bg_white pd_20 ${m.contactListItem}`},{default:()=>[t("img",{src:a.company_logo,class:m.avatar},null),t("div",{class:m.profile},[t(x,{to:`/exhibitors/${r.companyBarcode}`},{default:()=>[t("h4",null,[o.isEn?a.companyname_en:a.companyname_cn])]}),t("div",{class:"text_gray"},[o.isEn?a.company_introduction_en:a.company_introduction])])]})])])}else return t(j,null,null)}}});export{nt as default};
