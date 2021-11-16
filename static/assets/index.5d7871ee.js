import{d as Y,l as Z,I as ee,j as ae,k as e,i as te,t as p,z as u,F as G}from"./@vue.f0a33739.js";import{S as v,r as ie,a as oe}from"./index.9456dc5f.js";import{P as ne}from"./index.eb983d1f.js";import{M as d}from"./MainSectionHead.3a39449d.js";import{u as se}from"./ExhibitorStore.ebfd7862.js";import{u as re}from"./FavouriteStore.2ab5d542.js";import{s as n}from"./index.module.6e348a91.js";import{r as j,n as le}from"./ant-design-vue.f8ac2ba9.js";import{_ as de}from"./vue-clipboard3.ca4b4e55.js";import{u as ce}from"./vue-i18n.df730e9c.js";import{d as J}from"./vue-router.85e08d32.js";import{b as me}from"./banner.93874b08.js";import{d as pe}from"./avator_red.2a3a1020.js";import{d as ue}from"./itb_logo_gray.5050f3d7.js";import{K as fe,s as _e,M as be}from"./@ant-design.a109b705.js";import"./nprogress.35503c85.js";import"./@rpdg.e35df5be.js";import"./moment.29305b8e.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./@ctrl.2e36ce53.js";import"./xgplayer.1ae44471.js";import"./clipboard.18fc16a5.js";function c(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!te(o)}var Ze=Y({props:{barcode:{type:String,required:!0}},setup(o){const{t:s}=ce();let{appStore:r}=oe(),{exhibitiorStore:t}=se(),{favoriteStore:y}=re(),{toClipboard:Q}=de();const X=async()=>{try{await Q(window.location.href),le.success({message:s("common.copied")})}catch(i){console.error(i)}};let f=Z(!1);ee(async()=>{t.getDetail(o.barcode)});function m(i){return Number(i)>0}let h=ae(()=>{var l;let i=(l=t==null?void 0:t.data)==null?void 0:l.unionExhibitionList.length;return i!=null&&i>0});return()=>{var L,$,w,S,I,x,E,C,k,F,M,H,P,A,O,K,N,U,q,z,B,D,V,W,R,T;let i,l,_,b,g;return e(G,null,[e(d,{redLead:!1},c(i=s(h.value?"exhibitor.detailPavilion":"exhibitor.detail"))?i:{default:()=>[i]}),(($=(L=t.data)==null?void 0:L.bannerList[0])==null?void 0:$.pic_path)!=null&&((S=(w=t.data)==null?void 0:w.bannerList[0])==null?void 0:S.pic_filename)!=null?e("img",{class:"fullWidthImage mg_b_20 cursor_normal",src:`${(x=(I=t.data)==null?void 0:I.bannerList[0])==null?void 0:x.pic_path}/${(C=(E=t.data)==null?void 0:E.bannerList[0])==null?void 0:C.pic_filename}`},null):e("img",{class:"fullWidthImage mg_b_20 cursor_normal",src:me},null),e("div",{class:"pd_20 bg_white"},[e("div",{class:"fl_right"},[e(fe,{class:"pd_r_10 cursor_hand",onClick:X},null),f.value?e(_e,{class:"cursor_hand",style:{color:"#FFB329"},onClick:async()=>{await y.delete({type:1,foreignKey:o.barcode}),f.value=!1}},null):e(be,{class:"cursor_hand",onClick:async()=>{await y.add({type:1,foreignKey:o.barcode}),f.value=!0}},null)]),e("h3",null,[r.isEn?(F=(k=t.data)==null?void 0:k.info[0])==null?void 0:F.companyname_en:(H=(M=t.data)==null?void 0:M.info[0])==null?void 0:H.companyname_cn]),e("div",{class:"text_gray mg_b_20"},[r.isEn?(A=(P=t.data)==null?void 0:P.info[0])==null?void 0:A.company_introduction_en:(K=(O=t.data)==null?void 0:O.info[0])==null?void 0:K.company_introduction]),e("div",{class:"text_gray mg_b_20"},[(U=(N=t.data)==null?void 0:N.info[0])==null?void 0:U.company_website])]),p(e(d,{redLead:!0},c(l=s(h.value?"exhibitor.videoPavilion":"exhibitor.video"))?l:{default:()=>[l]}),[[u,m(`${(q=t.data)==null?void 0:q.videoList.length}`)]]),p(e("div",{class:"pd_20 bg_white gridCols2"},[(z=t.data)==null?void 0:z.videoList.map(a=>e("div",{class:"rectangleItem"},[e(ne,{key:a.id,video:`${a.video_path}/${a.video_filename}`,poster:`${a.welcome_pic_path}/${a.welcome_pic_filename}`},null)]))]),[[u,m(`${(B=t.data)==null?void 0:B.videoList.length}`)]]),p(e(d,{redLead:!0},c(_=s("exhibitor.products"))?_:{default:()=>[_]}),[[u,m(`${(D=t.data)==null?void 0:D.productList.length}`)]]),p(e("div",{class:"pd_20 bg_white"},[e(j,{itemLayout:"vertical",dataSource:(V=t.data)==null?void 0:V.productList},{renderItem:({item:a})=>e(j.Item,{class:n.verticalListItem},{default:()=>[e(j.Item.Meta,null,{title:()=>e(J,{to:`/products/${a.id}`},{default:()=>[r.isEn?a.product_name_en:a.product_name]}),description:()=>e("div",{class:n.content},[r.isEn?a.product_comment_en:a.product_comment])})]})})]),[[u,m(`${(W=t.data)==null?void 0:W.productList.length}`)]]),e(d,{redLead:!0},c(b=s("exhibitor.contact"))?b:{default:()=>[b]}),e("div",{class:n.contactList},[(R=t.data)==null?void 0:R.contactList.map(a=>e("div",{class:n.contactListItem},[a.HeadImageUrl!=null&&a.HeadImageUrl!=""?e("img",{class:n.avatar,src:`${v}${a.HeadImageUrl}`},null):e("img",{class:n.avatar,src:pe},null),e("div",{class:n.profile},[e(J,{to:`/exhibitors/${o.barcode}/contact/${a.employee_id}`},{default:()=>[e("h4",null,[r.isEn?a.firstname==""&&a.lastname==""?a.lastname_cn+a.firstname_cn:`${a.firstname} ${a.lastname}`:a.firstname_cn==""&&a.lastname_cn==""?`${a.firstname} ${a.lastname}`:a.lastname_cn+a.firstname_cn])]}),e("div",{class:"text_gray"},[a.job_title])])]))]),(t==null?void 0:t.data)&&(t==null?void 0:t.data.unionExhibitionList.length)>0&&e(G,null,[e(d,{redLead:!0},c(g=s("exhibitor.co_exhibitor"))?g:{default:()=>[g]}),e("div",{class:"pd_20 bg_white gridCols4"},[(T=t.data)==null?void 0:T.unionExhibitionList.map(a=>e("div",{class:"cursor_hand",onClick:()=>{ie.push("/exhibitors/"+a.barcode)}},[e("div",{class:"squareItem2"},[a.company_logo!=null&&a.company_logo!=""?e("img",{src:`${v}${a.company_logo}`},null):a.company_logo_en!=null&&a.company_logo_en!=""?e("img",{src:`${v}${a.company_logo_en}`},null):e("img",{src:ue},null)]),e("h4",null,[r.isEn?a.companyname_en:a.companyname_cn])]))])])])}}});export{Ze as default};
