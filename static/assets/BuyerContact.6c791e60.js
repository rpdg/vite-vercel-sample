import{S as m,L as p,a as d}from"./index.ae657a86.js";import{M as u}from"./MainSectionHead.21260b67.js";import{u as _}from"./ExhibitorStore.0a3c5894.js";import{d as f}from"./avator_red.2a3a1020.js";import{d as b}from"./itb_logo_gray.5050f3d7.js";import{u as g}from"./vue-i18n.f56f8be1.js";import{s as t,C as j}from"./index.module.75b8acfe.js";import{d as y,I as v,k as a,i as x,O as i,F as S}from"./@vue.b2913f50.js";import"./ant-design-vue.185fab3e.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.3b6fcf97.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.647f38fa.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.8b8261fd.js";import"./vue-router.82b024de.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";import"./FavouriteStore.907aea5b.js";import"./vue-clipboard3.5287e840.js";import"./clipboard.8b2d5081.js";function h(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!x(s)}var re=y({props:{contactBarcode:{type:String,required:!0}},setup(s){const{t:o}=g();let{appStore:r}=d(),{exhibitiorStore:l}=_();return v(async()=>{l.getBuyerInfo(s.contactBarcode)}),()=>{let e=l.buyerInfo;if(e){let n,c={employee_id:e.barcode,company:e.company,company_cn:e.company_cn,firstname_cn:e.firstname_cn,firstname:e.firstname,HeadImageUrl:e.HeadImageUrl,job_title:e.position,lastname_cn:e.lastname_cn,lastname:e.lastname,logoUrl:e.company_logo,timezone:"",IsOnline:e.IsOnline};return a(S,null,[a(u,{redLead:!1},h(n=o("exhibitor.buyer.detail"))?n:{default:()=>[n]}),a("div",{class:"pd_20 bg_white"},[a("div",{class:t.item},[e.HeadImageUrl!=null&&e.HeadImageUrl!=""?a("img",{class:t.avatar_special,src:`${m}${e.HeadImageUrl}`},null):a("img",{class:t.avatar_special,src:f},null),a("div",{class:t.profile},[a("h4",null,[r.isEn?e.firstname==""&&e.lastname==""?e.lastname_cn+e.firstname_cn:`${e.firstname} ${e.lastname}`:e.firstname_cn==""&&e.lastname_cn==""?`${e.firstname} ${e.lastname}`:e.lastname_cn+e.firstname_cn]),a("p",{class:"text_gray"},[r.isEn?e.company:e.company_cn]),a("p",{class:"text_gray"},[r.isEn?e.position:e.position_cn]),a("hr",null,null),a("div",{class:t.iconBar},[a(j,{user:c},null)])])]),a(i("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[a("h4",null,[o("exhibitor.buyer.introduce")]),a("div",{class:"text_gray"},[r.isEn?e.company_describe.toString().split("/")[0]:e.company_describe.toString().split("/")[1]])]}),a(i("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[e.company_logo!=null&&e.company_logo!=""?a("img",{class:t.avatar_special,src:`${m}${e.company_logo}`},null):a("img",{class:t.avatar_special,src:b},null)]}),a(i("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[a("h4",null,[o("exhibitor.buyer.regions")]),a("div",{class:"text_gray word_break"},[r.isEn?e.q_en:e.q_cn])]}),a(i("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[a("h4",null,[o("exhibitor.buyer.product")]),a("div",{class:"text_gray word_break"},[r.isEn?e.p_en:e.p_cn])]})])])}else return a(p,null,null)}}});export{re as default};
