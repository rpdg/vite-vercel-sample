var $=Object.defineProperty;var C=(t,a,o)=>a in t?$(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o;var S=(t,a,o)=>(C(t,typeof a!="symbol"?a+"":a,o),o);import{B as F,p as D,l as O,L as P,a as A}from"./index.3be6f241.js";import{M as v}from"./MainSectionHead.b9e7274a.js";import{u as E}from"./FavouriteStore.e8be1d33.js";import{I as B,f as H,d as M,l as U,k as e,i as K,F as N}from"./@vue.fa05379c.js";import{s}from"./index.module.6e348a91.js";import{q as W,p as k}from"./ant-design-vue.f84da452.js";import{_ as q}from"./vue-clipboard3.ca4b4e55.js";import{u as z}from"./vue-i18n.0711e616.js";import{d as L}from"./vue-router.8ec3c3d8.js";import{S as w}from"./Config.87ac60ee.js";import{d as V}from"./avator_red.ac077e2d.js";import{d as y}from"./itb_logo_gray.16279932.js";import{z as G,A as R,G as J}from"./@ant-design.2067dcee.js";import"./moment.29305b8e.js";import"./nprogress.35503c85.js";import"./axios.19d3e859.js";import"./@babel.a04268fa.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./@ctrl.2e36ce53.js";import"./clipboard.18fc16a5.js";var Q=Object.defineProperty,T=Object.getOwnPropertyDescriptor,X=(t,a,o,n)=>{for(var i=n>1?void 0:n?T(a,o):a,c=t.length-1,p;c>=0;c--)(p=t[c])&&(i=(n?p(a,o,i):p(i))||i);return n&&i&&Q(a,o,i),i};class x extends F{constructor(){super();S(this,"detail")}async getDetail(a){this.detail=await D("/newproduct/detail",{productId:a})}}X([O],x.prototype,"getDetail",1);const j=new x;function Y(t){return B(()=>{j.getDetail(t)}),H(()=>{j.detail=void 0}),{productStore:j}}function b(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!K(t)}var Pe=M({name:"ProductDetail",props:{productId:{type:Number,required:!0}},setup(t){let{productStore:a}=Y(t.productId),{appStore:o}=A(),{favoriteStore:n}=E(),{toClipboard:i}=q();const{t:c}=z(),p=async()=>{try{await i(window.location.href),k.success({message:c("common.copied")})}catch(m){console.error(m)}};let u=U(!1);return()=>{if(a.loading)return e(P,null,null);{let m=a.detail,d=m.info[0],l=m.companyList[0],h=m.resourceList,I=m.contactList;if(u.value=n.checkAdded({type:2,foreignKey:t.productId}),m){let f,_,g;return e(N,null,[e(v,{redLead:!1},b(f=c("showFloor.productDetail"))?f:{default:()=>[f]}),e(W,{autoplay:!0},{default:()=>[h.length===0?e("img",{class:"specialWidthImage cursor_normal",src:y},null):h.filter(r=>r.type==="1").map(r=>r.pic_filename!=null&&r.pic_filename!=""?e("img",{class:"specialWidthImage cursor_normal",src:`${r.pic_path}/${r.pic_filename}`},null):e("img",{class:"specialWidthImage cursor_normal",src:y},null))]}),e("div",{class:"bg_white mg_tb_20 pd_20"},[e("div",{class:"fl_right"},[e(G,{class:"pd_r_10 cursor_hand",onClick:p},null),u.value?e(R,{class:"cursor_hand",style:{color:"#FFB329"},onClick:async()=>{await n.delete({type:2,foreignKey:d.id}),u.value=!1}},null):e(J,{class:"cursor_hand",onClick:async()=>{await n.add({type:2,foreignKey:d.id}),u.value=!0}},null)]),e("h3",null,[o.isEn?d.product_name_en:d.product_name]),e("div",{class:"text_gray mg_b_20"},[o.isEn?d.product_comment_en:d.product_comment]),e("div",{class:"text_gray mg_b_20"},[o.isEn?d.product_detail_en:d.product_detail])]),e(v,{redLead:!0},b(_=c("exhibitor.contact"))?_:{default:()=>[_]}),e("div",{class:s.contactList},[I.map(r=>e("div",{class:s.contactListItem},[r.HeadImageUrl!=null&&r.HeadImageUrl!=""?e("img",{class:s.avatar,src:`${w}${r.HeadImageUrl}`},null):e("img",{class:s.avatar,src:V},null),e("div",{class:s.profile},[e(L,{to:`/exhibitors/${l.barcode}/contact/${r.employee_id}`},{default:()=>[e("h4",null,[o.isEn?`${r.firstname}  ${r.lastname}`:r.lastname_cn+r.firstname_cn])]}),e("div",{class:"text_gray"},[r.job_title]),e("div",{class:s.iconBar},null)])]))]),e(v,{redLead:!0},b(g=c("exhibitor.company"))?g:{default:()=>[g]}),e("div",{class:s.contactListItem},[l.company_logo_en!=null&&l.company_logo_en!=""?e("img",{class:s.avatar,src:`${w}${l.company_logo_en}`},null):e("img",{class:s.avatar,src:y},null),e("div",{class:s.profile},[e(L,{to:`/exhibitors/${l.barcode}`},{default:()=>[e("h4",null,[o.isEn?l.companyname_en:l.companyname_cn])]}),e("div",{class:"text_gray"},[o.isEn?l.company_introduction_en:l.company_introduction])])])])}}}}});export{Pe as default};
