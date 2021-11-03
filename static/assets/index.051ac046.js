import{S as V}from"./Config.87ac60ee.js";import{P as D}from"./index.9cfc3f30.js";import{M as d}from"./MainSectionHead.b9e7274a.js";import{r as G,a as R}from"./index.38f2740c.js";import{u as T}from"./ExhibitorStore.3911d94d.js";import{u as J}from"./FavouriteStore.b60c025b.js";import{s}from"./index.module.6e348a91.js";import{o as b,p as Q}from"./ant-design-vue.e660bee2.js";import{_ as X}from"./vue-clipboard3.ca4b4e55.js";import{u as Y}from"./vue-i18n.0711e616.js";import{d as z}from"./vue-router.8ec3c3d8.js";import{b as Z}from"./banner.93874b08.js";import{d as ee}from"./avator_red.2a3a1020.js";import{d as ae}from"./itb_logo_gray.5050f3d7.js";import{z as te,A as oe,G as ie,H as se}from"./@ant-design.2067dcee.js";import{d as re,l as ne,I as le,j as de,k as e,i as ce,u as me,F as B}from"./@vue.fa05379c.js";import"./xgplayer.1ae44471.js";import"./nprogress.35503c85.js";import"./moment.29305b8e.js";import"./axios.7aed06b8.js";import"./@babel.a04268fa.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./@ctrl.2e36ce53.js";import"./clipboard.18fc16a5.js";function c(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!ce(o)}var Te=re({props:{barcode:{type:String,required:!0}},setup(o){const{t:r}=Y();let{appStore:n}=R(),{exhibitiorStore:t}=T(),{favoriteStore:u}=J(),{toClipboard:W}=X();const q=async()=>{try{await W(window.location.href),Q.success({message:r("common.copied")})}catch(i){console.error(i)}};let m=ne(!1);le(async()=>{t.getDetail(o.barcode),m.value=u.checkAdded({type:1,foreignKey:o.barcode})});let g=de(()=>{var l;let i=(l=t==null?void 0:t.data)==null?void 0:l.unionExhibitionList.length;return i!=null&&i>0});return()=>{var v,j,y,h,L,x,$,w,S,I,E,C,k,F,A,H,M,O,P,K,N,U;let i,l,p,f,_;return e(B,null,[e(d,{redLead:!1},c(i=r(g.value?"exhibitor.detailPavilion":"exhibitor.detail"))?i:{default:()=>[i]}),((j=(v=t.data)==null?void 0:v.bannerList[0])==null?void 0:j.pic_path)!=null&&((h=(y=t.data)==null?void 0:y.bannerList[0])==null?void 0:h.pic_filename)!=null?e("img",{class:"fullWidthImage mg_b_20 cursor_normal",src:`${(x=(L=t.data)==null?void 0:L.bannerList[0])==null?void 0:x.pic_path}/${(w=($=t.data)==null?void 0:$.bannerList[0])==null?void 0:w.pic_filename}`},null):e("img",{class:"fullWidthImage mg_b_20 cursor_normal",src:Z},null),e("div",{class:"pd_20 bg_white"},[e("div",{class:"fl_right"},[e(te,{class:"pd_r_10 cursor_hand",onClick:q},null),m.value?e(oe,{class:"cursor_hand",style:{color:"#FFB329"},onClick:async()=>{await u.delete({type:1,foreignKey:o.barcode}),m.value=!1}},null):e(ie,{class:"cursor_hand",onClick:async()=>{await u.add({type:1,foreignKey:o.barcode}),m.value=!0}},null)]),e("h3",null,[n.isEn?(I=(S=t.data)==null?void 0:S.info[0])==null?void 0:I.companyname_en:(C=(E=t.data)==null?void 0:E.info[0])==null?void 0:C.companyname_cn]),e("h4",null,[e(se,null,null),me(" "),(F=(k=t.data)==null?void 0:k.info[0])==null?void 0:F.booth_no]),e("div",{class:"text_gray mg_b_20"},[n.isEn?(H=(A=t.data)==null?void 0:A.info[0])==null?void 0:H.company_introduction_en:(O=(M=t.data)==null?void 0:M.info[0])==null?void 0:O.company_introduction])]),e(d,{redLead:!0},c(l=r(g.value?"exhibitor.videoPavilion":"exhibitor.video"))?l:{default:()=>[l]}),e("div",{class:"pd_20 bg_white gridCols2"},[(P=t.data)==null?void 0:P.videoList.map(a=>e("div",{class:"rectangleItem"},[e(D,{video:`${a.video_path}/${a.video_filename}`,poster:`${a.welcome_pic_path}/${a.welcome_pic_filename}`},null)]))]),e(d,{redLead:!0},c(p=r("exhibitor.products"))?p:{default:()=>[p]}),e("div",{class:"pd_20 bg_white"},[e(b,{itemLayout:"vertical",dataSource:(K=t.data)==null?void 0:K.productList},{renderItem:({item:a})=>e(b.Item,{class:s.verticalListItem},{default:()=>[e(b.Item.Meta,null,{title:()=>e(z,{to:`/products/${a.id}`},{default:()=>[n.isEn?a.product_name_en:a.product_name]}),description:()=>e("div",{class:s.content},[n.isEn?a.product_comment_en:a.product_comment])})]})})]),e(d,{redLead:!0},c(f=r("exhibitor.contact"))?f:{default:()=>[f]}),e("div",{class:s.contactList},[(N=t.data)==null?void 0:N.contactList.map(a=>e("div",{class:s.contactListItem},[a.HeadImageUrl!=null&&a.HeadImageUrl!=""?e("img",{class:s.avatar,src:`${V}${a.HeadImageUrl}`},null):e("img",{class:s.avatar,src:ee},null),e("div",{class:s.profile},[e(z,{to:`/exhibitors/${o.barcode}/contact/${a.employee_id}`},{default:()=>[e("h4",null,[n.isEn?`${a.firstname}  ${a.lastname}`:a.lastname_cn+a.firstname_cn])]}),e("div",{class:"text_gray"},[a.job_title])])]))]),(t==null?void 0:t.data)&&(t==null?void 0:t.data.unionExhibitionList.length)>0&&e(B,null,[e(d,{redLead:!0},c(_=r("exhibitor.co_exhibitor"))?_:{default:()=>[_]}),e("div",{class:"pd_20 bg_white gridCols4"},[(U=t.data)==null?void 0:U.unionExhibitionList.map(a=>e("div",{class:"cursor_hand",onClick:()=>{G.push("/exhibitors/"+a.barcode)}},[a.company_logo!=null&&a.company_logo!=""?e("img",{class:"specialLogo",src:`${V}${a.company_logo}`},null):e("img",{class:"specialLogo",src:ae},null),e("h4",null,[n.isEn?a.companyname_en:a.companyname_cn])]))])])])}}});export{Te as default};
