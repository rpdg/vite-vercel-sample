import{d as Q,l as X,I as Y,j as Z,k as e,i as ee,t as u,z as p,F as W}from"./@vue.7a36ac42.js";import{S as G}from"./Config.41849c7b.js";import{P as ae}from"./index.3257a265.js";import{M as d}from"./MainSectionHead.743546ec.js";import{r as te,a as ie}from"./index.dd6cbf3a.js";import{u as oe}from"./ExhibitorStore.3a4090a7.js";import{u as re}from"./FavouriteStore.917c0bd2.js";import{s as r}from"./index.module.6e348a91.js";import{o as v,p as se}from"./ant-design-vue.109ff973.js";import{_ as ne}from"./vue-clipboard3.5ae8d1c7.js";import{u as le}from"./vue-i18n.532c4af8.js";import{d as R}from"./vue-router.8e73f157.js";import{b as de}from"./banner.93874b08.js";import{d as ce}from"./avator_red.2a3a1020.js";import{d as me}from"./itb_logo_gray.5050f3d7.js";import{z as ue,A as pe,G as fe}from"./@ant-design.4b470cc8.js";import"./xgplayer.dd911c20.js";import"./@rpdg.0f36269b.js";import"./moment.29305b8e.js";import"./nprogress.c26b133a.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.9c0a92d2.js";import"./source-map.3671d69c.js";import"./vue.a54dcdd3.js";import"./@ctrl.2e36ce53.js";import"./clipboard.682bb09e.js";function c(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!ee(o)}var Ye=Q({props:{barcode:{type:String,required:!0}},setup(o){const{t:s}=le();let{appStore:n}=ie(),{exhibitiorStore:t}=oe(),{favoriteStore:j}=re(),{toClipboard:T}=ne();const J=async()=>{try{await T(window.location.href),se.success({message:s("common.copied")})}catch(i){console.error(i)}};let f=X(!1);Y(async()=>{t.getDetail(o.barcode)});function m(i){return Number(i)>0}let h=Z(()=>{var l;let i=(l=t==null?void 0:t.data)==null?void 0:l.unionExhibitionList.length;return i!=null&&i>0});return()=>{var y,L,$,w,S,x,I,E,C,k,F,A,H,M,P,O,z,N,U,q,B,D,K,V;let i,l,_,b,g;return e(W,null,[e(d,{redLead:!1},c(i=s(h.value?"exhibitor.detailPavilion":"exhibitor.detail"))?i:{default:()=>[i]}),((L=(y=t.data)==null?void 0:y.bannerList[0])==null?void 0:L.pic_path)!=null&&((w=($=t.data)==null?void 0:$.bannerList[0])==null?void 0:w.pic_filename)!=null?e("img",{class:"fullWidthImage mg_b_20 cursor_normal",src:`${(x=(S=t.data)==null?void 0:S.bannerList[0])==null?void 0:x.pic_path}/${(E=(I=t.data)==null?void 0:I.bannerList[0])==null?void 0:E.pic_filename}`},null):e("img",{class:"fullWidthImage mg_b_20 cursor_normal",src:de},null),e("div",{class:"pd_20 bg_white"},[e("div",{class:"fl_right"},[e(ue,{class:"pd_r_10 cursor_hand",onClick:J},null),f.value?e(pe,{class:"cursor_hand",style:{color:"#FFB329"},onClick:async()=>{await j.delete({type:1,foreignKey:o.barcode}),f.value=!1}},null):e(fe,{class:"cursor_hand",onClick:async()=>{await j.add({type:1,foreignKey:o.barcode}),f.value=!0}},null)]),e("h3",null,[n.isEn?(k=(C=t.data)==null?void 0:C.info[0])==null?void 0:k.companyname_en:(A=(F=t.data)==null?void 0:F.info[0])==null?void 0:A.companyname_cn]),e("div",{class:"text_gray mg_b_20"},[n.isEn?(M=(H=t.data)==null?void 0:H.info[0])==null?void 0:M.company_introduction_en:(O=(P=t.data)==null?void 0:P.info[0])==null?void 0:O.company_introduction])]),u(e(d,{redLead:!0},c(l=s(h.value?"exhibitor.videoPavilion":"exhibitor.video"))?l:{default:()=>[l]}),[[p,m(`${(z=t.data)==null?void 0:z.videoList.length}`)]]),u(e("div",{class:"pd_20 bg_white gridCols2"},[(N=t.data)==null?void 0:N.videoList.map(a=>e("div",{class:"rectangleItem"},[e(ae,{key:a.id,video:`${a.video_path}/${a.video_filename}`,poster:`${a.welcome_pic_path}/${a.welcome_pic_filename}`},null)]))]),[[p,m(`${(U=t.data)==null?void 0:U.videoList.length}`)]]),u(e(d,{redLead:!0},c(_=s("exhibitor.products"))?_:{default:()=>[_]}),[[p,m(`${(q=t.data)==null?void 0:q.productList.length}`)]]),u(e("div",{class:"pd_20 bg_white"},[e(v,{itemLayout:"vertical",dataSource:(B=t.data)==null?void 0:B.productList},{renderItem:({item:a})=>e(v.Item,{class:r.verticalListItem},{default:()=>[e(v.Item.Meta,null,{title:()=>e(R,{to:`/products/${a.id}`},{default:()=>[n.isEn?a.product_name_en:a.product_name]}),description:()=>e("div",{class:r.content},[n.isEn?a.product_comment_en:a.product_comment])})]})})]),[[p,m(`${(D=t.data)==null?void 0:D.productList.length}`)]]),e(d,{redLead:!0},c(b=s("exhibitor.contact"))?b:{default:()=>[b]}),e("div",{class:r.contactList},[(K=t.data)==null?void 0:K.contactList.map(a=>e("div",{class:r.contactListItem},[a.HeadImageUrl!=null&&a.HeadImageUrl!=""?e("img",{class:r.avatar,src:`${G}${a.HeadImageUrl}`},null):e("img",{class:r.avatar,src:ce},null),e("div",{class:r.profile},[e(R,{to:`/exhibitors/${o.barcode}/contact/${a.employee_id}`},{default:()=>[e("h4",null,[n.isEn?`${a.firstname}  ${a.lastname}`:a.lastname_cn+a.firstname_cn])]}),e("div",{class:"text_gray"},[a.job_title])])]))]),(t==null?void 0:t.data)&&(t==null?void 0:t.data.unionExhibitionList.length)>0&&e(W,null,[e(d,{redLead:!0},c(g=s("exhibitor.co_exhibitor"))?g:{default:()=>[g]}),e("div",{class:"pd_20 bg_white gridCols4"},[(V=t.data)==null?void 0:V.unionExhibitionList.map(a=>e("div",{class:"cursor_hand",onClick:()=>{te.push("/exhibitors/"+a.barcode)}},[e("div",{class:"squareItem2"},[a.company_logo!=null&&a.company_logo!=""?e("img",{src:`${G}${a.company_logo}`},null):e("img",{src:me},null)]),e("h4",null,[n.isEn?a.companyname_en:a.companyname_cn])]))])])])}}});export{Ye as default};
