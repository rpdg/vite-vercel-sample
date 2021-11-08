var $=Object.defineProperty;var C=(a,o,i)=>o in a?$(a,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[o]=i;var S=(a,o,i)=>(C(a,typeof o!="symbol"?o+"":o,i),i);import{p as F,L as D,a as O}from"./index.1d3976e6.js";import{M as y}from"./MainSectionHead.dad211bc.js";import{u as P}from"./FavouriteStore.c45f938a.js";import{B as A,l as E}from"./@rpdg.8b8261fd.js";import{I as B,f as H,d as M,l as U,k as e,i as q,F as K}from"./@vue.b2913f50.js";import{s as r}from"./index.module.6e348a91.js";import{s as N,r as W}from"./ant-design-vue.3c113ab5.js";import{_ as k}from"./vue-clipboard3.5287e840.js";import{u as V}from"./vue-i18n.f56f8be1.js";import{d as w}from"./vue-router.82b024de.js";import{S as x}from"./Config.41849c7b.js";import{d as z}from"./avator_red.2a3a1020.js";import{d as j}from"./itb_logo_gray.5050f3d7.js";import{A as G,p as R,G as J}from"./@ant-design.838dcc22.js";import"./moment.29305b8e.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";import"./@ctrl.2e36ce53.js";import"./clipboard.8b2d5081.js";var Q=Object.defineProperty,T=Object.getOwnPropertyDescriptor,X=(a,o,i,c)=>{for(var s=c>1?void 0:c?T(o,i):o,l=a.length-1,p;l>=0;l--)(p=a[l])&&(s=(c?p(o,i,s):p(s))||s);return c&&s&&Q(o,i,s),s};class L extends A{constructor(){super();S(this,"detail")}async getDetail(o){this.detail=await F("/newproduct/detail",{productId:o})}}X([E],L.prototype,"getDetail",1);const b=new L;function Y(a){return B(()=>{b.getDetail(a)}),H(()=>{b.detail=void 0}),{productStore:b}}function h(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!q(a)}var Ae=M({name:"ProductDetail",props:{productId:{type:Number,required:!0}},setup(a){let{productStore:o}=Y(a.productId),{appStore:i}=O(),{favoriteStore:c}=P(),{toClipboard:s}=k();const{t:l}=V(),p=async()=>{try{await s(window.location.href),W.success({message:l("common.copied")})}catch(m){console.error(m)}};let u=U(!1);return()=>{if(o.loading)return e(D,null,null);{let m=o.detail,d=m.info[0],n=m.companyList[0],f=m.resourceList,I=m.contactList;if(u.value=c.checkAdded({type:2,foreignKey:a.productId}),m){let _,v,g;return e(K,null,[e(y,{redLead:!1},h(_=l("showFloor.productDetail"))?_:{default:()=>[_]}),e(N,{autoplay:!0},{default:()=>[f.length===0?e("img",{class:"specialWidthImage cursor_normal",src:j},null):f.filter(t=>t.type==="1").map(t=>t.pic_filename!=null&&t.pic_filename!=""?e("img",{class:"specialWidthImage cursor_normal",src:`${t.pic_path}/${t.pic_filename}`},null):e("img",{class:"specialWidthImage cursor_normal",src:j},null))]}),e("div",{class:"bg_white mg_tb_20 pd_20"},[e("div",{class:"fl_right"},[e(G,{class:"pd_r_10 cursor_hand",onClick:p},null),u.value?e(R,{class:"cursor_hand",style:{color:"#FFB329"},onClick:async()=>{await c.delete({type:2,foreignKey:d.id}),u.value=!1}},null):e(J,{class:"cursor_hand",onClick:async()=>{await c.add({type:2,foreignKey:d.id}),u.value=!0}},null)]),e("h3",null,[i.isEn?d.product_name_en:d.product_name]),e("div",{class:"text_gray mg_b_20"},[i.isEn?d.product_comment_en:d.product_comment]),e("div",{class:"text_gray mg_b_20"},[i.isEn?d.product_detail_en:d.product_detail]),f.length===0?e("div",null,null):f.filter(t=>t.type==="3").map(t=>t.video_filename!=null&&t.video_filename!=""?e("a",{href:`${t.video_path}/${t.video_filename}`},[e("b",null,[l("showFloor.brochure")])]):e("div",null,null))]),e(y,{redLead:!0},h(v=l("exhibitor.contact"))?v:{default:()=>[v]}),e("div",{class:r.contactList},[I.map(t=>e("div",{class:r.contactListItem},[t.HeadImageUrl!=null&&t.HeadImageUrl!=""?e("img",{class:r.avatar,src:`${x}${t.HeadImageUrl}`},null):e("img",{class:r.avatar,src:z},null),e("div",{class:r.profile},[e(w,{to:`/exhibitors/${n.barcode}/contact/${t.employee_id}`},{default:()=>[e("h4",null,[i.isEn?`${t.firstname}  ${t.lastname}`:t.lastname_cn+t.firstname_cn])]}),e("div",{class:"text_gray"},[t.job_title]),e("div",{class:r.iconBar},null)])]))]),e(y,{redLead:!0},h(g=l("exhibitor.company"))?g:{default:()=>[g]}),e("div",{class:r.contactListItem},[n.company_logo_en!=null&&n.company_logo_en!=""?e("div",{style:"width:100px;height:100px;"},[e("div",{class:"squareItem2"},[e("img",{class:r.avatar,src:`${x}${n.company_logo_en}`},null)])]):e("div",{style:"width:100px;height:100px;"},[e("div",{class:"squareItem2"},[e("img",{class:r.avatar,src:j},null)])]),e("div",{class:r.profile},[e(w,{to:`/exhibitors/${n.barcode}`},{default:()=>[e("h4",null,[i.isEn?n.companyname_en:n.companyname_cn])]}),e("div",{class:"text_gray"},[i.isEn?n.company_introduction_en:n.company_introduction])])])])}}}}});export{Ae as default};
