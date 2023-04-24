import{S as j,L as b,a as g}from"./index.0bceb754.js";import{M as u}from"./MainSectionHead.99c217de.js";import{u as y}from"./ExhibitorStore.d6816e3f.js";import{u as v}from"./vue-i18n.df730e9c.js";import{d as x}from"./vue-router.85e08d32.js";import{s as m}from"./index.module.6e348a91.js";import{s as i,C as h}from"./index.module.e5e33063.js";import{d as S}from"./avator_red.2a3a1020.js";import{d as E,I as $,k as e,i as I,O as c,F as f}from"./@vue.f0a33739.js";import"./ant-design-vue.a99caae8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.dd8d38e4.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.647f38fa.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.e35df5be.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./FavouriteStore.972ecda9.js";import"./vue-clipboard3.ca4b4e55.js";import"./clipboard.18fc16a5.js";function _(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!I(o)}var ie=E({props:{contactBarcode:{type:String,required:!0},companyBarcode:{type:String,required:!0}},setup(o){const{t:s}=v();let{appStore:a}=g(),{exhibitiorStore:p}=y();return $(async()=>{p.getContactInfo(o.contactBarcode)}),()=>{let n=p.contactInfo;if(n){let l,d,t=n.info,r=n.companyList[0];return e(f,null,[e(u,{redLead:!1},_(l=s("exhibitor.contactDetail"))?l:{default:()=>[l]}),e("div",{class:"pd_20 bg_white"},[e("div",{class:i.item},[t.HeadImageUrl!=null&&t.HeadImageUrl!=""?e("img",{class:i.avatar,src:`${j}${t.HeadImageUrl}`},null):e("img",{class:i.avatar,src:S},null),e("div",{class:i.profile},[e("h4",null,[a.isEn?t.firstname==""&&t.lastname==""?t.lastname_cn+t.firstname_cn:`${t.firstname} ${t.lastname}`:t.firstname_cn==""&&t.lastname_cn==""?`${t.firstname} ${t.lastname}`:t.lastname_cn+t.firstname_cn]),e("p",{class:"text_gray"},[a.isEn?t.company:t.company_cn]),e("p",{class:"text_gray"},[t.job_title]),e("hr",null,null),e("div",{class:i.iconBar},[e(h,{user:t},null)])])]),e(c("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[e("h4",null,[s("exhibitor.introduce")]),e("div",{class:"text_gray"},[t.staff_introduce_en===""&&t.staff_introduce_cn===""?a.isEn?t.company:t.company_cn:a.isEn?t.staff_introduce_en:t.staff_introduce_cn])]}),e(c("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[e("h4",null,[s("exhibitor.interests")]),e("div",{class:"text_gray word_break"},[a.isEn?t.region2_en.join(", "):t.region2_cn.join(", ")])]}),e(c("dir"),{class:"mg_tb_20 pd_0"},{default:()=>[e("h4",null,[s("exhibitor.products")]),e("div",{class:"text_gray word_break"},[a.isEn?t.product_en.join(", "):t.product_cn.join(", ")])]})]),r&&n.companyList.length>0&&e(f,null,[e(u,{redLead:!0},_(d=s("exhibitor.company"))?d:{default:()=>[d]}),e(c("dir"),{class:`bg_white pd_20 ${m.contactListItem}`},{default:()=>[e("img",{src:r.company_logo,class:m.avatar},null),e("div",{class:m.profile},[e(x,{to:`/exhibitors/${o.companyBarcode}`},{default:()=>[e("h4",null,[a.isEn?r.companyname_en:r.companyname_cn])]}),e("div",{class:"text_gray"},[a.isEn?r.company_introduction_en:r.company_introduction])])]})])])}else return e(b,null,null)}}});export{ie as default};
