import{d as Q,l as X,I as Y,j as Z,k as e,i as ee,t as u,z as p,F as W}from"./@vue.b2913f50.js";import{S as G}from"./Config.41849c7b.js";import{P as te}from"./index.787335e1.js";import{M as d}from"./MainSectionHead.dad211bc.js";import{r as ae,a as ie}from"./index.1d3976e6.js";import{u as oe}from"./ExhibitorStore.8957a3ec.js";import{u as re}from"./FavouriteStore.c45f938a.js";import{s as r}from"./index.module.6e348a91.js";import{q as v,r as se}from"./ant-design-vue.3c113ab5.js";import{_ as ne}from"./vue-clipboard3.5287e840.js";import{u as le}from"./vue-i18n.f56f8be1.js";import{d as R}from"./vue-router.82b024de.js";import{b as de}from"./banner.93874b08.js";import{d as ce}from"./avator_red.2a3a1020.js";import{d as me}from"./itb_logo_gray.5050f3d7.js";import{A as ue,p as pe,G as fe}from"./@ant-design.838dcc22.js";import"./xgplayer.7c524c7c.js";import"./@rpdg.8b8261fd.js";import"./moment.29305b8e.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";import"./@ctrl.2e36ce53.js";import"./clipboard.8b2d5081.js";function c(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!ee(o)}var Ye=Q({props:{barcode:{type:String,required:!0}},setup(o){const{t:s}=le();let{appStore:n}=ie(),{exhibitiorStore:a}=oe(),{favoriteStore:j}=re(),{toClipboard:T}=ne();const J=async()=>{try{await T(window.location.href),se.success({message:s("common.copied")})}catch(i){console.error(i)}};let f=X(!1);Y(async()=>{a.getDetail(o.barcode)});function m(i){return Number(i)>0}let h=Z(()=>{var l;let i=(l=a==null?void 0:a.data)==null?void 0:l.unionExhibitionList.length;return i!=null&&i>0});return()=>{var y,L,$,w,S,x,I,E,C,k,F,A,H,M,P,O,q,N,U,z,B,D,K,V;let i,l,_,b,g;return e(W,null,[e(d,{redLead:!1},c(i=s(h.value?"exhibitor.detailPavilion":"exhibitor.detail"))?i:{default:()=>[i]}),((L=(y=a.data)==null?void 0:y.bannerList[0])==null?void 0:L.pic_path)!=null&&((w=($=a.data)==null?void 0:$.bannerList[0])==null?void 0:w.pic_filename)!=null?e("img",{class:"fullWidthImage mg_b_20 cursor_normal",src:`${(x=(S=a.data)==null?void 0:S.bannerList[0])==null?void 0:x.pic_path}/${(E=(I=a.data)==null?void 0:I.bannerList[0])==null?void 0:E.pic_filename}`},null):e("img",{class:"fullWidthImage mg_b_20 cursor_normal",src:de},null),e("div",{class:"pd_20 bg_white"},[e("div",{class:"fl_right"},[e(ue,{class:"pd_r_10 cursor_hand",onClick:J},null),f.value?e(pe,{class:"cursor_hand",style:{color:"#FFB329"},onClick:async()=>{await j.delete({type:1,foreignKey:o.barcode}),f.value=!1}},null):e(fe,{class:"cursor_hand",onClick:async()=>{await j.add({type:1,foreignKey:o.barcode}),f.value=!0}},null)]),e("h3",null,[n.isEn?(k=(C=a.data)==null?void 0:C.info[0])==null?void 0:k.companyname_en:(A=(F=a.data)==null?void 0:F.info[0])==null?void 0:A.companyname_cn]),e("div",{class:"text_gray mg_b_20"},[n.isEn?(M=(H=a.data)==null?void 0:H.info[0])==null?void 0:M.company_introduction_en:(O=(P=a.data)==null?void 0:P.info[0])==null?void 0:O.company_introduction])]),u(e(d,{redLead:!0},c(l=s(h.value?"exhibitor.videoPavilion":"exhibitor.video"))?l:{default:()=>[l]}),[[p,m(`${(q=a.data)==null?void 0:q.videoList.length}`)]]),u(e("div",{class:"pd_20 bg_white gridCols2"},[(N=a.data)==null?void 0:N.videoList.map(t=>e("div",{class:"rectangleItem"},[e(te,{key:t.id,video:`${t.video_path}/${t.video_filename}`,poster:`${t.welcome_pic_path}/${t.welcome_pic_filename}`},null)]))]),[[p,m(`${(U=a.data)==null?void 0:U.videoList.length}`)]]),u(e(d,{redLead:!0},c(_=s("exhibitor.products"))?_:{default:()=>[_]}),[[p,m(`${(z=a.data)==null?void 0:z.productList.length}`)]]),u(e("div",{class:"pd_20 bg_white"},[e(v,{itemLayout:"vertical",dataSource:(B=a.data)==null?void 0:B.productList},{renderItem:({item:t})=>e(v.Item,{class:r.verticalListItem},{default:()=>[e(v.Item.Meta,null,{title:()=>e(R,{to:`/products/${t.id}`},{default:()=>[n.isEn?t.product_name_en:t.product_name]}),description:()=>e("div",{class:r.content},[n.isEn?t.product_comment_en:t.product_comment])})]})})]),[[p,m(`${(D=a.data)==null?void 0:D.productList.length}`)]]),e(d,{redLead:!0},c(b=s("exhibitor.contact"))?b:{default:()=>[b]}),e("div",{class:r.contactList},[(K=a.data)==null?void 0:K.contactList.map(t=>e("div",{class:r.contactListItem},[t.HeadImageUrl!=null&&t.HeadImageUrl!=""?e("img",{class:r.avatar,src:`${G}${t.HeadImageUrl}`},null):e("img",{class:r.avatar,src:ce},null),e("div",{class:r.profile},[e(R,{to:`/exhibitors/${o.barcode}/contact/${t.employee_id}`},{default:()=>[e("h4",null,[n.isEn?`${t.firstname}  ${t.lastname}`:t.lastname_cn+t.firstname_cn])]}),e("div",{class:"text_gray"},[t.job_title])])]))]),(a==null?void 0:a.data)&&(a==null?void 0:a.data.unionExhibitionList.length)>0&&e(W,null,[e(d,{redLead:!0},c(g=s("exhibitor.co_exhibitor"))?g:{default:()=>[g]}),e("div",{class:"pd_20 bg_white gridCols4"},[(V=a.data)==null?void 0:V.unionExhibitionList.map(t=>e("div",{class:"cursor_hand",onClick:()=>{ae.push("/exhibitors/"+t.barcode)}},[e("div",{class:"squareItem2"},[t.company_logo!=null&&t.company_logo!=""?e("img",{src:`${G}${t.company_logo}`},null):e("img",{src:me},null)]),e("h4",null,[n.isEn?t.companyname_en:t.companyname_cn])]))])])])}}});export{Ye as default};
