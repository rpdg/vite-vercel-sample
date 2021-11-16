import{L as S,R as m,S as k,u as x}from"./index.4fa8ec46.js";import{u as j}from"./HomeStore.c4e8bb6f.js";import{s as w}from"./ant-design-vue.f71b2c4d.js";import{u as p}from"./vue-i18n.f56f8be1.js";import{u as v,d as h}from"./vue-router.82b024de.js";import{d as c,I as f,k as e,i as g,F as d,o as C,f as I}from"./@vue.b2913f50.js";import{M as b}from"./MainSectionHead.dad211bc.js";import{u as L}from"./NewsStore.96d97f7b.js";import{u as P}from"./RecommendStroe.2dd3fe40.js";import{d as H}from"./avator_red.2a3a1020.js";import{d as O}from"./itb_logo_gray.5050f3d7.js";import{P as $}from"./index.1f18d2d7.js";import"./@rpdg.8b8261fd.js";import"./moment.29305b8e.js";import"./@ant-design.148651e0.js";import"./@ctrl.2e36ce53.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";import"./xgplayer.7c524c7c.js";function R(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!g(t)}var N=c({name:"HomePage_Banner",setup(){p({useScope:"global"});let{homeStore:t}=j();v(),f(()=>{t.getBanner()});function a(r){let n=r.target,l=n.dataset.id;var s=n.dataset.url;if(s!=""&&s!=null&&s!=null)window.open(s);else{if(l==""||l==null||l==null)return!1;window.open("#/exhibitors/"+l)}}return()=>{if(t.banners){let r;return e(d,null,[e("p",null,null),e(w,{autoplay:!0},R(r=t.banners.map(n=>e("img",{key:n.id,class:"fullWidthImage","data-id":n.logic_id,"data-url":n.url,src:n.image,onClick:a},null)))?r:{default:()=>[r]})])}else return e(S,null,null)}}});const B="_newsCard_14log_1",q="_title_14log_11",M="_content_14log_23",V="_newsimgcircle_14log_36",D="_text_bold_14log_40";var y={newsCard:B,title:q,content:M,newsimgcircle:V,text_bold:D};function U(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!g(t)}var A=c({name:"HomePage_NewsSection",setup(){const{t}=p({useScope:"global"}),a=v(),{newsStore:r}=L();f(()=>{r.getNewsList(0,6)});function n(l){let o=l.currentTarget.dataset.news;a.push("/news/"+o)}return()=>{if(r.newsList){let l;return e(d,null,[e(b,{moreLink:"/news"},U(l=t("homePage.news"))?l:{default:()=>[l]}),e("div",{class:"gridCols3 pd_20 bg_white"},[r.newsList.results.map(s=>e("div",{key:s.id,class:`cursor_hand ${y.newsCard}`,"data-news":s.id,onClick:n},[e("img",{class:y.newsimgcircle,src:s.coverpicture,alt:""},null),e("div",{class:y.title},[s.title]),e("div",{class:y.content},[s.digest])]))])])}else return e(S,null,null)}}});function E(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!g(t)}var F=c({name:"HomePage_RecommendSection",props:{role:{type:String,required:!0}},setup(t){const{t:a}=p({useScope:"global"});let{recommendStore:r}=P();f(()=>{t.role===m.buyer?r.getRecommedExhibitiors(8):t.role===m.exhibition&&r.getRecommedBuyers(8)});function n(){var l,s;return t.role===m.buyer?(l=r.recommendExhibitiors)==null?void 0:l.slice(0,8).map(o=>e(h,{to:`/exhibitors/${o.barcode}`,class:"bg_white"},{default:()=>[e("div",{class:"squareItem2",key:o.barcode},[o.logourl!=null&&o.logourl!=""?e("img",{src:`${k}${o.logourl}`},null):e("img",{src:O},null)]),e("div",{class:"text_black text_left pd_10"},[o.company])]})):t.role===m.exhibition?(s=r.recommendBuyers)==null?void 0:s.slice(0,8).map(o=>e(h,{to:`/buyer/${o.barcode}`,class:"bg_white"},{default:()=>[e("div",{class:"squareItem2",key:o.barcode},[o.headImageUrl!=null&&o.headImageUrl!=""?e("img",{src:`${k}${o.headImageUrl}`},null):e("img",{src:H},null)]),e("div",{class:"text_black text_left pd_10 text_bold"},[o.name]),e("div",{class:"text_black text_left pd_10"},[o.company])]})):e("p",{class:"squareItem"},null)}return()=>{let l;return e(d,null,[e(b,{moreLink:"/recommends"},E(l=a("homePage.recommended"))?l:{default:()=>[l]}),e("div",{class:"gridCols4"},[n()])])}}});function T(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!g(t)}var W=c({name:"HomePage_SpeakerSection",setup(){const{t}=p({useScope:"global"}),a=v();let{homeStore:r}=j();f(()=>{r.getSpeakers()});function n(l){let o=l.currentTarget.dataset.speaker;a.push("/speakers/"+o)}return()=>{var s;let l;return e(d,null,[e(b,{moreLink:"/speakers"},T(l=t("homePage.speaker"))?l:{default:()=>[l]}),e(w,{autoplay:!0,style:{backgroundColor:"#eee"}},{default:()=>{var o;return[(o=r.speakers)==null?void 0:o.map(i=>e("img",{key:i.id,class:"fullWidthImage",src:i.image,"data-speaker":i.logic_id,onClick:n},null))]}}),e("div",{class:"gridCols5 mg_t_20"},[(s=r.speakerList)==null?void 0:s.map(o=>e("div",{class:"squareItem cursor_hand","data-speaker":o.id,onClick:n},[e("img",{src:o.picture},null)]))])])}}});function z(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!g(t)}var G=c({name:"HomePage_Sponor",setup(){const{t}=p({useScope:"global"});let{homeStore:a}=j();v();let r;f(()=>{a.getSponor()}),C(()=>{r=setInterval(()=>{n()},5e3)}),I(()=>{l()});function n(){a.getSponor()}function l(){clearInterval(r)}function s(o){let i=o.target,u=i.dataset.id;var _=i.dataset.url;if(_!=""&&_!=null&&_!=null)window.open(_);else{if(u==""||u==null||u==null)return!1;window.open("#/exhibitors/"+u)}}return()=>{var o;if(a.sponsors){let i;return e(d,null,[e(b,{moreLink:"/sponsors"},z(i=t("homePage.sponsor"))?i:{default:()=>[i]}),e("div",{class:"gridCols2"},[(o=a.sponsors)==null?void 0:o.map(u=>e(h,{class:"rectangleItem",to:"",key:u.id},{default:()=>[e("img",{src:u.image,onClick:s,"data-id":u.logic_id,"data-url":u.url},null)]}))])])}else return e(S,null,null)}}});function J(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!g(t)}var K=c({name:"HomePage_Video",setup(){const{t}=p({useScope:"global"});let{homeStore:a}=j();return f(()=>{a.getVideo()}),()=>{if(a.videoes){let r;return e(d,null,[e(b,{moreLink:"/presentation"},J(r=t("homePage.presentation"))?r:{default:()=>[r]}),e("div",{class:"gridCols2"},[a.videoes.map(n=>e("div",{class:"rectangleItem"},[e($,{key:n.id,video:n.url,poster:n.image},null)]))])])}else return e(S,null,null)}}}),Pe=c({name:"Home",setup(){let{authenStore:t}=x();return()=>e(d,null,[e(N,null,null),e(K,null,null),e(G,null,null),e(W,null,null),t.role&&(t.role===m.buyer||t.role===m.exhibition)&&e(F,{role:t.role},null),e(A,null,null)])}});export{Pe as default};
