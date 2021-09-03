import{P as a}from"./index.ab00fa8a.js";import{M as e}from"./MainSectionHead.8ba49e1e.js";import{r as o,u as i}from"./index.fb38be39.js";import{u as t}from"./ExhibitorStore.201a28db.js";import{u as l}from"./FavouriteStore.ad38a7be.js";import{s as r}from"./index.module.ba9314b5.js";import{g as s,h as n}from"./ant-design-vue.5d3dfc69.js";import{_ as d}from"./vue-clipboard3.e3c4c0a4.js";import{u as c}from"./vue-i18n.bbad715b.js";import{d as u}from"./vue-router.0532eeed.js";import{C as m}from"./ContactToolbar.6ad1f774.js";import{v as p,p as v,w as b,x as f}from"./@ant-design.eb6e5cf6.js";import{a2 as _,k as h,al as j,c as g,a0 as y,ag as x,$ as L,I as w}from"./@vue.5723de44.js";import"./xgplayer.a1ba0d4b.js";import"./nprogress.3e43c680.js";import"./axios.a57df465.js";import"./moment.29305b8e.js";import"./@babel.dc475c8c.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.60ec16aa.js";import"./warning.4abaefa0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.c2b61631.js";import"./source-map.3671d69c.js";import"./vue.3a1030aa.js";import"./@ctrl.2e36ce53.js";import"./clipboard.4b9ff286.js";function E(a){return"function"==typeof a||"[object Object]"===Object.prototype.toString.call(a)&&!x(a)}var I=_({props:{barcode:{type:String,required:!0}},setup(_){const{t:x}=c();let{appStore:I}=i(),{exhibitiorStore:C}=t(),{favoriteStore:S}=l(),{toClipboard:k}=d();const $=async()=>{try{await k(window.location.href),n.success({message:x("common.copied")})}catch(a){console.error(a)}};let F=h(!1);j((async()=>{C.getDetail(_.barcode),F.value=S.checkAdded({type:1,foreignKey:_.barcode})}));let K=g((()=>{var a;let e=null==(a=null==C?void 0:C.data)?void 0:a.unionExhibitionList.length;return null!=e&&e>0}));return()=>{var i,t,l,n,d,c,h,j,g,k,M,P,q,z,B,H;let O,A,D,T,U;return y(w,null,[y(e,{redLead:!1},E(O=x(K.value?"exhibitor.detailPavilion":"exhibitor.detail"))?O:{default:()=>[O]}),y("img",{class:"fullWidthImage mg_b_20 cursor_normal",src:null==(t=null==(i=C.data)?void 0:i.bannerList[0])?void 0:t.pic_path},null),y("div",{class:"pd_20 bg_white"},[y("div",{class:"fl_right"},[y(p,{class:"pd_r_10 cursor_hand",onClick:$},null),F.value?y(v,{class:"cursor_hand",style:{color:"#FFB329"},onClick:async()=>{await S.delete({type:1,foreignKey:_.barcode}),F.value=!1}},null):y(b,{class:"cursor_hand",onClick:async()=>{await S.add({type:1,foreignKey:_.barcode}),F.value=!0}},null)]),y("h3",null,[I.isEn?null==(n=null==(l=C.data)?void 0:l.info[0])?void 0:n.companyname_en:null==(c=null==(d=C.data)?void 0:d.info[0])?void 0:c.companyname_cn]),y("h4",null,[y(f,null,null),L(" "),null==(j=null==(h=C.data)?void 0:h.info[0])?void 0:j.booth_no]),y("div",{class:"text_gray mg_b_20"},[I.isEn?null==(k=null==(g=C.data)?void 0:g.info[0])?void 0:k.company_introduction_en:null==(P=null==(M=C.data)?void 0:M.info[0])?void 0:P.company_introduction])]),y(e,{redLead:!0},E(A=x(K.value?"exhibitor.videoPavilion":"exhibitor.video"))?A:{default:()=>[A]}),y("div",{class:"pd_20 bg_white gridCols2"},[null==(q=C.data)?void 0:q.videoList.map((e=>y("div",{class:"rectangleItem"},[y(a,{video:e.video_path,poster:e.zip_welcome_pic_path},null)])))]),y(e,{redLead:!0},E(D=x("exhibitor.products"))?D:{default:()=>[D]}),y("div",{class:"pd_20 bg_white"},[y(s,{itemLayout:"vertical",dataSource:null==(z=C.data)?void 0:z.productList},{renderItem:({item:a})=>y(s.Item,{class:r.verticalListItem},{default:()=>[y(s.Item.Meta,null,{title:()=>y(u,{to:`/products/${a.id}`},{default:()=>[I.isEn?a.product_name_en:a.product_name]}),description:()=>y("div",{class:r.content},[I.isEn?a.product_comment_en:a.product_comment])})]})})]),y(e,{redLead:!0},E(T=x("exhibitor.contact"))?T:{default:()=>[T]}),y("div",{class:r.contactList},[null==(B=C.data)?void 0:B.contactList.map((a=>y("div",{class:r.contactListItem},[y("img",{class:r.avatar,src:a.HeadImageUrl},null),y("div",{class:r.profile},[y(u,{to:`/exhibitors/${_.barcode}/contact/${a.employee_id}`},{default:()=>[y("h4",null,[I.isEn?`${a.firstname}  ${a.lastname}`:a.lastname_cn+a.firstname_cn])]}),y("div",{class:"text_gray"},[a.job_title]),y("div",{class:r.iconBar},[y(m,{user:a},null)])])])))]),(null==C?void 0:C.data)&&(null==C?void 0:C.data.unionExhibitionList.length)>0&&y(w,null,[y(e,{redLead:!0},E(U=x("exhibitor.co_exhibitor"))?U:{default:()=>[U]}),y("div",{class:"pd_20 bg_white gridCols4"},[null==(H=C.data)?void 0:H.unionExhibitionList.map((a=>y("div",{class:"cursor_hand",onClick:()=>{o.push("/exhibitors/"+a.barcode)}},[y("img",{class:"squareItem block",src:a.company_logo},null),y("h4",null,[I.isEn?a.companyname_en:a.companyname_cn])])))])])])}}});export default I;
