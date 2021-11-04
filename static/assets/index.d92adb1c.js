import{L as j,a as b}from"./index.581105e7.js";import{S as g}from"./Config.41849c7b.js";import{M as u}from"./MainSectionHead.a516428a.js";import{u as y}from"./ExhibitorStore.76ceec58.js";import{u as v}from"./vue-i18n.6a1efd87.js";import{d as x}from"./vue-router.b758f417.js";import{s as m}from"./index.module.6e348a91.js";import{s,C as h}from"./index.module.d8ac5bfe.js";import{d as S}from"./avator_red.2a3a1020.js";import{d as E,I,k as e,i as L,O as c,F as f}from"./@vue.6f7c75f1.js";import"./ant-design-vue.00c2c9f0.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.d39a0d88.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.f7b2a17f.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.078afd90.js";import"./FavouriteStore.103d68ed.js";import"./vue-clipboard3.ca4b4e55.js";import"./clipboard.18fc16a5.js";function _(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!L(r)}var ne=E({props:{contactBarcode:{type:String,required:!0},companyBarcode:{type:String,required:!0}},setup(r){const{t:i}=v();let{appStore:o}=b(),{exhibitiorStore:p}=y();return I(async()=>{p.getContactInfo(r.contactBarcode)}),()=>{let n=p.contactInfo;if(n){let l,d,t=n.info,a=n.companyList[0];return e(f,null,[e(u,{redLead:!1},_(l=i("exhibitor.contactDetail"))?l:{default:()=>[l]}),e("div",{class:"pd_20 bg_white"},[e("div",{class:s.item},[t.HeadImageUrl!=null&&t.HeadImageUrl!=""?e("img",{class:s.avatar,src:`${g}${t.HeadImageUrl}`},null):e("img",{class:s.avatar,src:S},null),e("div",{class:s.profile},[e("h4",null,[o.isEn?`${t.firstname}  ${t.lastname}`:t.lastname_cn+t.firstname_cn]),e("p",{class:"text_gray"},[o.isEn?t.company:t.company_cn]),e("p",{class:"text_gray"},[t.job_title]),e("hr",null,null),e("div",{class:s.iconBar},[e(h,{user:t},null)])])]),e(c("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[e("h4",null,[i("exhibitor.introduce")]),e("div",{class:"text_gray"},[o.isEn?t.staff_introduce_en:t.staff_introduce_cn])]}),e(c("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[e("h4",null,[i("exhibitor.interests")]),e("div",{class:"text_gray word_break"},[o.isEn?t.region2_en.join(", "):t.region2_cn.join(", ")])]}),e(c("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[e("h4",null,[i("exhibitor.products")]),e("div",{class:"text_gray word_break"},[o.isEn?t.product_en.join(", "):t.product_cn.join(", ")])]})]),a&&n.companyList.length>0&&e(f,null,[e(u,{redLead:!0},_(d=i("exhibitor.company"))?d:{default:()=>[d]}),e(c("dir"),{class:`bg_white pd_20 ${m.contactListItem}`},{default:()=>[e("img",{src:a.company_logo,class:m.avatar},null),e("div",{class:m.profile},[e(x,{to:`/exhibitors/${r.companyBarcode}`},{default:()=>[e("h4",null,[o.isEn?a.companyname_en:a.companyname_cn])]}),e("div",{class:"text_gray"},[o.isEn?a.company_introduction_en:a.company_introduction])])]})])])}else return e(j,null,null)}}});export{ne as default};
