import{S as c}from"./Config.41849c7b.js";import{L as p,a as d}from"./index.79a872b5.js";import{M as u}from"./MainSectionHead.3a39449d.js";import{u as _}from"./ExhibitorStore.308408d0.js";import{u as f}from"./vue-i18n.df730e9c.js";import{s as a,C as b}from"./index.module.11b08d53.js";import{d as g}from"./avator_red.2a3a1020.js";import{d as j}from"./itb_logo_gray.5050f3d7.js";import{d as y,I as v,k as t,i as x,O as i,F as S}from"./@vue.f0a33739.js";import"./ant-design-vue.2e5ee588.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.20fa5911.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.e35df5be.js";import"./vue-router.85e08d32.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./FavouriteStore.47355d2b.js";import"./vue-clipboard3.ca4b4e55.js";import"./clipboard.18fc16a5.js";function h(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!x(o)}var oe=y({props:{contactBarcode:{type:String,required:!0}},setup(o){const{t:s}=f();let{appStore:r}=d(),{exhibitiorStore:l}=_();return v(async()=>{l.getBuyerInfo(o.contactBarcode)}),()=>{let e=l.buyerInfo;if(e){let n,m={employee_id:e.barcode,company:e.company,company_cn:e.company_cn,firstname_cn:e.firstname_cn,firstname:e.firstname,HeadImageUrl:e.HeadImageUrl,job_title:e.position,lastname_cn:e.lastname_cn,lastname:e.lastname,timezone:"",IsOnline:e.IsOnline};return t(S,null,[t(u,{redLead:!1},h(n=s("exhibitor.buyer.detail"))?n:{default:()=>[n]}),t("div",{class:"pd_20 bg_white"},[t("div",{class:a.item},[e.HeadImageUrl!=null&&e.HeadImageUrl!=""?t("img",{class:a.avatar_special,src:`${c}${e.HeadImageUrl}`},null):t("img",{class:a.avatar_special,src:g},null),t("div",{class:a.profile},[t("h4",null,[r.isEn?`${e.firstname}  ${e.lastname}`:e.lastname_cn+e.firstname_cn]),t("p",{class:"text_gray"},[r.isEn?e.company:e.company_cn]),t("p",{class:"text_gray"},[r.isEn?e.position:e.position_cn]),t("hr",null,null),t("div",{class:a.iconBar},[t(b,{user:m},null)])])]),t(i("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[s("exhibitor.buyer.introduce")]),t("div",{class:"text_gray"},[r.isEn?e.company_describe.toString().split("/")[0]:e.company_describe.toString().split("/")[1]])]}),t(i("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[e.company_logo!=null&&e.company_logo!=""?t("img",{class:a.avatar_special,src:`${c}${e.company_logo}`},null):t("img",{class:a.avatar_special,src:j},null)]}),t(i("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[s("exhibitor.buyer.regions")]),t("div",{class:"text_gray word_break"},[r.isEn?e.q_en:e.q_cn])]}),t(i("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[t("h4",null,[s("exhibitor.buyer.product")]),t("div",{class:"text_gray word_break"},[r.isEn?e.p_en:e.p_cn])]})])])}else return t(p,null,null)}}});export{oe as default};
