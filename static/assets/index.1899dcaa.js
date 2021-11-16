import{d as Y,l as Z,I as ee,j as te,k as e,i as ae,t as p,z as u,F as T}from"./@vue.b2913f50.js";import{S as G,r as ie,a as oe}from"./index.4fa8ec46.js";import{P as ne}from"./index.1f18d2d7.js";import{M as d}from"./MainSectionHead.dad211bc.js";import{u as se}from"./ExhibitorStore.6c51e866.js";import{u as re}from"./FavouriteStore.bb29e5fd.js";import{s as n}from"./index.module.6e348a91.js";import{r as v,n as le}from"./ant-design-vue.f71b2c4d.js";import{_ as de}from"./vue-clipboard3.5287e840.js";import{u as ce}from"./vue-i18n.f56f8be1.js";import{d as J}from"./vue-router.82b024de.js";import{b as me}from"./banner.93874b08.js";import{d as pe}from"./avator_red.2a3a1020.js";import{d as ue}from"./itb_logo_gray.5050f3d7.js";import{K as fe,s as _e,M as be}from"./@ant-design.148651e0.js";import"./@rpdg.8b8261fd.js";import"./moment.29305b8e.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";import"./@ctrl.2e36ce53.js";import"./xgplayer.7c524c7c.js";import"./clipboard.8b2d5081.js";function c(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!ae(o)}var Ze=Y({props:{barcode:{type:String,required:!0}},setup(o){const{t:s}=ce();let{appStore:r}=oe(),{exhibitiorStore:a}=se(),{favoriteStore:j}=re(),{toClipboard:Q}=de();const X=async()=>{try{await Q(window.location.href),le.success({message:s("common.copied")})}catch(i){console.error(i)}};let f=Z(!1);ee(async()=>{a.getDetail(o.barcode)});function m(i){return Number(i)>0}let h=te(()=>{var l;let i=(l=a==null?void 0:a.data)==null?void 0:l.unionExhibitionList.length;return i!=null&&i>0});return()=>{var y,L,$,w,S,x,I,E,C,k,F,M,H,P,A,O,K,N,U,q,z,B,D,V,W,R;let i,l,_,b,g;return e(T,null,[e(d,{redLead:!1},c(i=s(h.value?"exhibitor.detailPavilion":"exhibitor.detail"))?i:{default:()=>[i]}),((L=(y=a.data)==null?void 0:y.bannerList[0])==null?void 0:L.pic_path)!=null&&((w=($=a.data)==null?void 0:$.bannerList[0])==null?void 0:w.pic_filename)!=null?e("img",{class:"fullWidthImage mg_b_20 cursor_normal",src:`${(x=(S=a.data)==null?void 0:S.bannerList[0])==null?void 0:x.pic_path}/${(E=(I=a.data)==null?void 0:I.bannerList[0])==null?void 0:E.pic_filename}`},null):e("img",{class:"fullWidthImage mg_b_20 cursor_normal",src:me},null),e("div",{class:"pd_20 bg_white"},[e("div",{class:"fl_right"},[e(fe,{class:"pd_r_10 cursor_hand",onClick:X},null),f.value?e(_e,{class:"cursor_hand",style:{color:"#FFB329"},onClick:async()=>{await j.delete({type:1,foreignKey:o.barcode}),f.value=!1}},null):e(be,{class:"cursor_hand",onClick:async()=>{await j.add({type:1,foreignKey:o.barcode}),f.value=!0}},null)]),e("h3",null,[r.isEn?(k=(C=a.data)==null?void 0:C.info[0])==null?void 0:k.companyname_en:(M=(F=a.data)==null?void 0:F.info[0])==null?void 0:M.companyname_cn]),e("div",{class:"text_gray mg_b_20"},[r.isEn?(P=(H=a.data)==null?void 0:H.info[0])==null?void 0:P.company_introduction_en:(O=(A=a.data)==null?void 0:A.info[0])==null?void 0:O.company_introduction]),e("div",{class:"text_gray mg_b_20"},[(N=(K=a.data)==null?void 0:K.info[0])==null?void 0:N.company_website])]),p(e(d,{redLead:!0},c(l=s(h.value?"exhibitor.videoPavilion":"exhibitor.video"))?l:{default:()=>[l]}),[[u,m(`${(U=a.data)==null?void 0:U.videoList.length}`)]]),p(e("div",{class:"pd_20 bg_white gridCols2"},[(q=a.data)==null?void 0:q.videoList.map(t=>e("div",{class:"rectangleItem"},[e(ne,{key:t.id,video:`${t.video_path}/${t.video_filename}`,poster:`${t.welcome_pic_path}/${t.welcome_pic_filename}`},null)]))]),[[u,m(`${(z=a.data)==null?void 0:z.videoList.length}`)]]),p(e(d,{redLead:!0},c(_=s("exhibitor.products"))?_:{default:()=>[_]}),[[u,m(`${(B=a.data)==null?void 0:B.productList.length}`)]]),p(e("div",{class:"pd_20 bg_white"},[e(v,{itemLayout:"vertical",dataSource:(D=a.data)==null?void 0:D.productList},{renderItem:({item:t})=>e(v.Item,{class:n.verticalListItem},{default:()=>[e(v.Item.Meta,null,{title:()=>e(J,{to:`/products/${t.id}`},{default:()=>[r.isEn?t.product_name_en:t.product_name]}),description:()=>e("div",{class:n.content},[r.isEn?t.product_comment_en:t.product_comment])})]})})]),[[u,m(`${(V=a.data)==null?void 0:V.productList.length}`)]]),e(d,{redLead:!0},c(b=s("exhibitor.contact"))?b:{default:()=>[b]}),e("div",{class:n.contactList},[(W=a.data)==null?void 0:W.contactList.map(t=>e("div",{class:n.contactListItem},[t.HeadImageUrl!=null&&t.HeadImageUrl!=""?e("img",{class:n.avatar,src:`${G}${t.HeadImageUrl}`},null):e("img",{class:n.avatar,src:pe},null),e("div",{class:n.profile},[e(J,{to:`/exhibitors/${o.barcode}/contact/${t.employee_id}`},{default:()=>[e("h4",null,[r.isEn?t.firstname==""&&t.lastname==""?t.lastname_cn+t.firstname_cn:`${t.firstname} ${t.lastname}`:t.firstname_cn==""&&t.lastname_cn==""?`${t.firstname} ${t.lastname}`:t.lastname_cn+t.firstname_cn])]}),e("div",{class:"text_gray"},[t.job_title])])]))]),(a==null?void 0:a.data)&&(a==null?void 0:a.data.unionExhibitionList.length)>0&&e(T,null,[e(d,{redLead:!0},c(g=s("exhibitor.co_exhibitor"))?g:{default:()=>[g]}),e("div",{class:"pd_20 bg_white gridCols4"},[(R=a.data)==null?void 0:R.unionExhibitionList.map(t=>e("div",{class:"cursor_hand",onClick:()=>{ie.push("/exhibitors/"+t.barcode)}},[e("div",{class:"squareItem2"},[t.company_logo!=null&&t.company_logo!=""?e("img",{src:`${G}${t.company_logo}`},null):e("img",{src:ue},null)]),e("h4",null,[r.isEn?t.companyname_en:t.companyname_cn])]))])])])}}});export{Ze as default};
