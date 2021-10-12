import{L as m,u as p}from"./index.5a3916c7.js";import{M as d}from"./MainSectionHead.b9e7274a.js";import{u}from"./ExhibitorStore.e3cd23e2.js";import{u as b}from"./vue-i18n.0711e616.js";import{C as f}from"./ContactToolbar.e54b5ae9.js";import{s}from"./index.module.b07d7155.js";import{d as j,I as _,k as t,i as y,O as n,F as g}from"./@vue.fa05379c.js";import"./ant-design-vue.0721aa65.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./vue-router.8ec3c3d8.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./FavouriteStore.88d61909.js";import"./vue-clipboard3.ca4b4e55.js";import"./clipboard.18fc16a5.js";function v(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!y(o)}var Y=j({props:{contactBarcode:{type:String,required:!0}},setup(o){const{t:a}=b();let{appStore:r}=p(),{exhibitiorStore:l}=u();return _(async()=>{l.getBuyerInfo(o.contactBarcode)}),()=>{let e=l.buyerInfo;if(e){let i,c={employee_id:e.barcode,company:e.company,company_cn:e.company_cn,firstname_cn:e.firstname_cn,firstname:e.firstname,HeadImageUrl:e.HeadImageUrl,job_title:e.position,lastname_cn:e.lastname_cn,lastname:e.lastname,timezone:"",IsOnline:e.IsOnline};return t(g,null,[t(d,{redLead:!1},v(i=a("exhibitor.buyer.detail"))?i:{default:()=>[i]}),t("div",{class:"pd_20 bg_white"},[t("div",{class:s.item},[t("img",{class:s.avatar,src:e.HeadImageUrl},null),t("div",{class:s.profile},[t("h4",null,[r.isEn?`${e.firstname}  ${e.lastname}`:e.lastname_cn+e.firstname_cn]),t("p",{class:"text_gray"},[r.isEn?e.company:e.company_cn]),t("p",{class:"text_gray"},[r.isEn?e.position:e.position_cn]),t("hr",null,null),t("div",{class:s.iconBar},[t(f,{user:c},null)])])]),t(n("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[a("exhibitor.buyer.introduce")]),t("div",{class:"text_gray"},[e.company_describe])]}),t(n("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[a("exhibitor.buyer.regions")]),t("div",{class:"text_gray"},[r.isEn?e.q_en:e.q_cn])]}),t(n("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[a("exhibitor.buyer.product")]),t("div",{class:"text_gray"},[r.isEn?e.p_en:e.p_cn])]})])])}else return t(m,null,null)}}});export{Y as default};
