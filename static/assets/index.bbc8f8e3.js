import{d as Q,l as X,I as Y,j as Z,k as e,i as ee,t as u,z as p,F as W}from"./@vue.f0a33739.js";import{S as R,r as ae,a as te}from"./index.f988d874.js";import{P as ie}from"./index.29da4561.js";import{M as d}from"./MainSectionHead.3a39449d.js";import{u as oe}from"./ExhibitorStore.b845bdb3.js";import{u as se}from"./FavouriteStore.3ea2c8e3.js";import{s}from"./index.module.6e348a91.js";import{r as v,n as re}from"./ant-design-vue.84ff5d3b.js";import{_ as ne}from"./vue-clipboard3.ca4b4e55.js";import{u as le}from"./vue-i18n.df730e9c.js";import{d as T}from"./vue-router.85e08d32.js";import{b as de}from"./banner.93874b08.js";import{d as ce}from"./avator_red.2a3a1020.js";import{d as me}from"./itb_logo_gray.5050f3d7.js";import{K as ue,s as pe,M as fe}from"./@ant-design.a109b705.js";import"./nprogress.35503c85.js";import"./@rpdg.e35df5be.js";import"./moment.29305b8e.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./@ctrl.2e36ce53.js";import"./xgplayer.1ae44471.js";import"./clipboard.18fc16a5.js";function c(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!ee(o)}var Xe=Q({props:{barcode:{type:String,required:!0}},setup(o){const{t:r}=le();let{appStore:n}=te(),{exhibitiorStore:t}=oe(),{favoriteStore:j}=se(),{toClipboard:G}=ne();const J=async()=>{try{await G(window.location.href),re.success({message:r("common.copied")})}catch(i){console.error(i)}};let f=X(!1);Y(async()=>{t.getDetail(o.barcode)});function m(i){return Number(i)>0}let h=Z(()=>{var l;let i=(l=t==null?void 0:t.data)==null?void 0:l.unionExhibitionList.length;return i!=null&&i>0});return()=>{var y,L,$,w,S,x,I,E,C,k,F,M,H,P,A,O,K,N,U,q,z,B,D,V;let i,l,_,b,g;return e(W,null,[e(d,{redLead:!1},c(i=r(h.value?"exhibitor.detailPavilion":"exhibitor.detail"))?i:{default:()=>[i]}),((L=(y=t.data)==null?void 0:y.bannerList[0])==null?void 0:L.pic_path)!=null&&((w=($=t.data)==null?void 0:$.bannerList[0])==null?void 0:w.pic_filename)!=null?e("img",{class:"fullWidthImage mg_b_20 cursor_normal",src:`${(x=(S=t.data)==null?void 0:S.bannerList[0])==null?void 0:x.pic_path}/${(E=(I=t.data)==null?void 0:I.bannerList[0])==null?void 0:E.pic_filename}`},null):e("img",{class:"fullWidthImage mg_b_20 cursor_normal",src:de},null),e("div",{class:"pd_20 bg_white"},[e("div",{class:"fl_right"},[e(ue,{class:"pd_r_10 cursor_hand",onClick:J},null),f.value?e(pe,{class:"cursor_hand",style:{color:"#FFB329"},onClick:async()=>{await j.delete({type:1,foreignKey:o.barcode}),f.value=!1}},null):e(fe,{class:"cursor_hand",onClick:async()=>{await j.add({type:1,foreignKey:o.barcode}),f.value=!0}},null)]),e("h3",null,[n.isEn?(k=(C=t.data)==null?void 0:C.info[0])==null?void 0:k.companyname_en:(M=(F=t.data)==null?void 0:F.info[0])==null?void 0:M.companyname_cn]),e("div",{class:"text_gray mg_b_20"},[n.isEn?(P=(H=t.data)==null?void 0:H.info[0])==null?void 0:P.company_introduction_en:(O=(A=t.data)==null?void 0:A.info[0])==null?void 0:O.company_introduction])]),u(e(d,{redLead:!0},c(l=r(h.value?"exhibitor.videoPavilion":"exhibitor.video"))?l:{default:()=>[l]}),[[p,m(`${(K=t.data)==null?void 0:K.videoList.length}`)]]),u(e("div",{class:"pd_20 bg_white gridCols2"},[(N=t.data)==null?void 0:N.videoList.map(a=>e("div",{class:"rectangleItem"},[e(ie,{key:a.id,video:`${a.video_path}/${a.video_filename}`,poster:`${a.welcome_pic_path}/${a.welcome_pic_filename}`},null)]))]),[[p,m(`${(U=t.data)==null?void 0:U.videoList.length}`)]]),u(e(d,{redLead:!0},c(_=r("exhibitor.products"))?_:{default:()=>[_]}),[[p,m(`${(q=t.data)==null?void 0:q.productList.length}`)]]),u(e("div",{class:"pd_20 bg_white"},[e(v,{itemLayout:"vertical",dataSource:(z=t.data)==null?void 0:z.productList},{renderItem:({item:a})=>e(v.Item,{class:s.verticalListItem},{default:()=>[e(v.Item.Meta,null,{title:()=>e(T,{to:`/products/${a.id}`},{default:()=>[n.isEn?a.product_name_en:a.product_name]}),description:()=>e("div",{class:s.content},[n.isEn?a.product_comment_en:a.product_comment])})]})})]),[[p,m(`${(B=t.data)==null?void 0:B.productList.length}`)]]),e(d,{redLead:!0},c(b=r("exhibitor.contact"))?b:{default:()=>[b]}),e("div",{class:s.contactList},[(D=t.data)==null?void 0:D.contactList.map(a=>e("div",{class:s.contactListItem},[a.HeadImageUrl!=null&&a.HeadImageUrl!=""?e("img",{class:s.avatar,src:`${R}${a.HeadImageUrl}`},null):e("img",{class:s.avatar,src:ce},null),e("div",{class:s.profile},[e(T,{to:`/exhibitors/${o.barcode}/contact/${a.employee_id}`},{default:()=>[e("h4",null,[n.isEn?`${a.firstname}  ${a.lastname}`:a.lastname_cn+a.firstname_cn])]}),e("div",{class:"text_gray"},[a.job_title])])]))]),(t==null?void 0:t.data)&&(t==null?void 0:t.data.unionExhibitionList.length)>0&&e(W,null,[e(d,{redLead:!0},c(g=r("exhibitor.co_exhibitor"))?g:{default:()=>[g]}),e("div",{class:"pd_20 bg_white gridCols4"},[(V=t.data)==null?void 0:V.unionExhibitionList.map(a=>e("div",{class:"cursor_hand",onClick:()=>{ae.push("/exhibitors/"+a.barcode)}},[e("div",{class:"squareItem2"},[a.company_logo!=null&&a.company_logo!=""?e("img",{src:`${R}${a.company_logo}`},null):e("img",{src:me},null)]),e("h4",null,[n.isEn?a.companyname_en:a.companyname_cn])]))])])])}}});export{Xe as default};
