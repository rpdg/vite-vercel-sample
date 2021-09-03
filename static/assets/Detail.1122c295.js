var e=Object.defineProperty,t=(t,a,o)=>(((t,a,o)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o})(t,"symbol"!=typeof a?a+"":a,o),o);import{B as a,p as o,l as r,L as i,u as s}from"./index.fb38be39.js";import{P as l}from"./index.ab00fa8a.js";import{M as c}from"./MainSectionHead.8ba49e1e.js";import{u as d}from"./FavouriteStore.ad38a7be.js";import{al as n,au as p,a2 as m,k as u,a0 as f,ag as b,I as v}from"./@vue.5723de44.js";import{C as j}from"./ContactToolbar.6ad1f774.js";import{s as y}from"./index.module.ba9314b5.js";import{i as _,h as g}from"./ant-design-vue.5d3dfc69.js";import{_ as h}from"./vue-clipboard3.e3c4c0a4.js";import{u as w}from"./vue-i18n.bbad715b.js";import{d as x}from"./vue-router.0532eeed.js";import{v as L,p as I,w as C}from"./@ant-design.eb6e5cf6.js";import"./nprogress.3e43c680.js";import"./axios.a57df465.js";import"./moment.29305b8e.js";import"./@babel.dc475c8c.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.60ec16aa.js";import"./warning.4abaefa0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.c2b61631.js";import"./source-map.3671d69c.js";import"./vue.3a1030aa.js";import"./@ctrl.2e36ce53.js";import"./xgplayer.a1ba0d4b.js";import"./clipboard.4b9ff286.js";var S=Object.defineProperty,D=Object.getOwnPropertyDescriptor;class O extends a{constructor(){super(),t(this,"detail")}async getDetail(e){this.detail=await o("/newproduct/detail",{productId:e})}}((e,t,a,o)=>{for(var r,i=o>1?void 0:o?D(t,a):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,a,i):r(i))||i);o&&i&&S(t,a,i)})([r],O.prototype,"getDetail",1);const k=new O;function E(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!b(e)}var F=m({name:"ProductDetail",props:{productId:{type:Number,required:!0}},setup(e){let{productStore:t}=(a=e.productId,n((()=>{k.getDetail(a)})),p((()=>{k.detail=void 0})),{productStore:k});var a;let{appStore:o}=s(),{favoriteStore:r}=d(),{toClipboard:m}=h();const{t:b}=w(),S=async()=>{try{await m(window.location.href),g.success({message:b("common.copied")})}catch(e){console.error(e)}};let D=u(!1);return()=>{if(t.loading)return f(i,null,null);{let a=t.detail,i=a.info[0],s=a.companyList[0],d=a.resourceList,n=a.contactList;if(D.value=r.checkAdded({type:2,foreignKey:e.productId}),a){let e,t,a,p,m;return f(v,null,[f(c,{redLead:!1},E(e=b("showFloor.productDetail"))?e:{default:()=>[e]}),f(_,{autoplay:!0},E(t=d.filter((e=>"1"===e.type)).map((e=>f("img",{class:"fullWidthImage cursor_normal",src:e.pic_path},null))))?t:{default:()=>[t]}),f("div",{class:"bg_white mg_tb_20 pd_20"},[f("div",{class:"fl_right"},[f(L,{class:"pd_r_10 cursor_hand",onClick:S},null),D.value?f(I,{class:"cursor_hand",style:{color:"#FFB329"},onClick:async()=>{await r.delete({type:2,foreignKey:i.id}),D.value=!1}},null):f(C,{class:"cursor_hand",onClick:async()=>{await r.add({type:2,foreignKey:i.id}),D.value=!0}},null)]),f("h3",null,[o.isEn?i.product_name_en:i.product_name]),f("div",{class:"text_gray mg_b_20"},[o.isEn?i.product_detail_en:i.product_detail])]),f(c,{redLead:!0},E(a=b("showFloor.productVideo"))?a:{default:()=>[a]}),f("div",{class:"gridCols2"},[d.filter((e=>"2"===e.type)).map((e=>f(l,{video:e.vedio_path,poster:e.vedio_welcome_pic_path},null)))]),f(c,{redLead:!0},E(p=b("exhibitor.contact"))?p:{default:()=>[p]}),f("div",{class:y.contactList},[n.map((e=>f("div",{class:y.contactListItem},[f("img",{class:y.avatar,src:e.HeadImageUrl},null),f("div",{class:y.profile},[f(x,{to:`/exhibitors/${s.barcode}/contact/${e.employee_id}`},{default:()=>[f("h4",null,[o.isEn?`${e.firstname}  ${e.lastname}`:e.lastname_cn+e.firstname_cn])]}),f("div",{class:"text_gray"},[e.job_title]),f("div",{class:y.iconBar},[f(j,{user:e},null)])])])))]),f(c,{redLead:!0},E(m=b("exhibitor.company"))?m:{default:()=>[m]}),f("div",{class:y.contactListItem},[f("img",{class:y.avatar,src:s.company_logo},null),f("div",{class:y.profile},[f(x,{to:`/exhibitors/${s.barcode}`},{default:()=>[f("h4",null,[o.isEn?s.companyname_en:s.companyname_cn])]}),f("div",{class:"text_gray"},[o.isEn?s.company_introduction_en:s.company_introduction])])])])}}}}});export default F;
