import{S as c}from"./Config.87ac60ee.js";import{L as p,u as d}from"./index.e8021e5e.js";import{M as u}from"./MainSectionHead.b9e7274a.js";import{u as f}from"./ExhibitorStore.3c1f9c0b.js";import{u as b}from"./vue-i18n.0711e616.js";import{C as _}from"./ContactToolbar.616f5fe8.js";import{s as a}from"./index.module.78f4d7e2.js";import{d as j,I as y,k as t,i as g,O as i,F as v}from"./@vue.fa05379c.js";import"./ant-design-vue.0721aa65.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./vue-router.8ec3c3d8.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./FavouriteStore.ac758a91.js";import"./vue-clipboard3.ca4b4e55.js";import"./clipboard.18fc16a5.js";function x(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!g(r)}var ee=j({props:{contactBarcode:{type:String,required:!0}},setup(r){const{t:s}=b();let{appStore:o}=d(),{exhibitiorStore:l}=f();return y(async()=>{l.getBuyerInfo(r.contactBarcode)}),()=>{let e=l.buyerInfo;if(e){let n,m={employee_id:e.barcode,company:e.company,company_cn:e.company_cn,firstname_cn:e.firstname_cn,firstname:e.firstname,HeadImageUrl:e.HeadImageUrl,job_title:e.position,lastname_cn:e.lastname_cn,lastname:e.lastname,timezone:"",IsOnline:e.IsOnline};return t(v,null,[t(u,{redLead:!1},x(n=s("exhibitor.buyer.detail"))?n:{default:()=>[n]}),t("div",{class:"pd_20 bg_white"},[t("div",{class:a.item},[t("img",{class:a.avatar,src:`${c}${e.HeadImageUrl}`},null),t("div",{class:a.profile},[t("h4",null,[o.isEn?`${e.firstname}  ${e.lastname}`:e.lastname_cn+e.firstname_cn]),t("p",{class:"text_gray"},[o.isEn?e.company:e.company_cn]),t("p",{class:"text_gray"},[o.isEn?e.position:e.position_cn]),t("hr",null,null),t("div",{class:a.iconBar},[t(_,{user:m},null)])])]),t(i("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[s("exhibitor.buyer.introduce")]),t("div",{class:"text_gray"},[e.company_describe])]}),t(i("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("img",{class:a.avatar_special,src:`${c}${e.company_logo}`},null)]}),t(i("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[s("exhibitor.buyer.regions")]),t("div",{class:"text_gray"},[o.isEn?e.q_en:e.q_cn])]}),t(i("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[s("exhibitor.buyer.product")]),t("div",{class:"text_gray"},[o.isEn?e.p_en:e.p_cn])]})])])}else return t(p,null,null)}}});export{ee as default};
