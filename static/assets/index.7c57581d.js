import{L as S,R as j,u as L}from"./index.5a197180.js";import{M as p}from"./MainSectionHead.b9e7274a.js";import{u as v}from"./HomeStore.42684304.js";import{q as w}from"./ant-design-vue.034afe85.js";import{u as g}from"./vue-i18n.0711e616.js";import{u as y,d as k}from"./vue-router.8ec3c3d8.js";import{d as c,I as f,k as e,i as b,F as d,o as I,f as P}from"./@vue.fa05379c.js";import{u as H}from"./NewsStore.ebc540ea.js";import{S as x}from"./Config.87ac60ee.js";import{u as O}from"./RecommendStroe.8b3de285.js";import{d as $}from"./avator_red.ac077e2d.js";import{d as R}from"./itb_logo_gray.16279932.js";import{P as N}from"./index.75d7397f.js";import"./moment.29305b8e.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.19d3e859.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./xgplayer.1ae44471.js";function C(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!b(t)}var q=c({name:"HomePage_Banner",setup(){const{t}=g({useScope:"global"});let{homeStore:s}=v();const n=y();f(()=>{s.getBanner()});function a(r){let l=r.target,o=l.dataset.id;var i=l.dataset.url;if(i!=""&&i!=null&&i!=null)window.open(i);else{if(o==""||o==null||o==null)return!1;n.push("/exhibitors/"+o)}}return()=>{if(s.banners){let r,l;return e(d,null,[e(p,{redLead:!1},C(r=t("menu.home"))?r:{default:()=>[r]}),e(w,{autoplay:!0},C(l=s.banners.map(o=>e("img",{key:o.id,class:"fullWidthImage","data-id":o.logic_id,"data-url":o.url,src:o.image,onClick:a},null)))?l:{default:()=>[l]})])}else return e(S,null,null)}}});const B="_newsCard_14log_1",M="_title_14log_11",V="_content_14log_23",D="_newsimgcircle_14log_36",U="_text_bold_14log_40";var h={newsCard:B,title:M,content:V,newsimgcircle:D,text_bold:U};function A(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!b(t)}var E=c({name:"HomePage_NewsSection",setup(){const{t}=g({useScope:"global"}),s=y(),{newsStore:n}=H();f(()=>{n.getNewsList(0,6)});function a(r){let o=r.currentTarget.dataset.news;s.push("/news/"+o)}return()=>{if(n.newsList){let r;return e(d,null,[e(p,{moreLink:"/news"},A(r=t("homePage.news"))?r:{default:()=>[r]}),e("div",{class:"gridCols3 pd_20 bg_white"},[n.newsList.results.map(l=>e("div",{key:l.id,class:`cursor_hand ${h.newsCard}`,"data-news":l.id,onClick:a},[e("img",{class:h.newsimgcircle,src:l.coverpicture,alt:""},null),e("div",{class:h.title},[l.title]),e("div",{class:h.content},[l.digest])]))])])}else return e(S,null,null)}}});function F(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!b(t)}var T=c({name:"HomePage_RecommendSection",props:{role:{type:String,required:!0}},setup(t){const{t:s}=g({useScope:"global"});let{recommendStore:n}=O();f(()=>{t.role===j.buyer?n.getRecommedExhibitiors(4):t.role===j.exhibition&&n.getRecommedBuyers(4)});function a(){var r,l;return t.role===j.buyer?(r=n.recommendExhibitiors)==null?void 0:r.slice(0,4).map(o=>e(k,{to:`/exhibitors/${o.barcode}`,class:"bg_white"},{default:()=>[e("div",{class:"squareItem2",key:o.barcode},[o.logourl!=null&&o.logourl!=""?e("img",{src:`${x}${o.logourl}`},null):e("img",{src:R},null)]),e("div",{class:"text_black text_left pd_10"},[o.company])]})):t.role===j.exhibition?(l=n.recommendBuyers)==null?void 0:l.slice(0,4).map(o=>e(k,{to:`/buyer/${o.barcode}`,class:"bg_white"},{default:()=>[e("div",{class:"squareItem2",key:o.barcode},[o.headImageUrl!=null&&o.headImageUrl!=""?e("img",{src:`${x}${o.headImageUrl}`},null):e("img",{src:$},null)]),e("div",{class:"text_black text_left pd_10 text_bold"},[o.name]),e("div",{class:"text_black text_left pd_10"},[o.company])]})):e("p",{class:"squareItem"},null)}return()=>{let r;return e(d,null,[e(p,{moreLink:"/recommends"},F(r=s("homePage.recommended"))?r:{default:()=>[r]}),e("div",{class:"gridCols4"},[a()])])}}});function W(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!b(t)}var z=c({name:"HomePage_SpeakerSection",setup(){const{t}=g({useScope:"global"}),s=y();let{homeStore:n}=v();f(()=>{n.getSpeakers()});function a(r){let o=r.currentTarget.dataset.speaker;s.push("/speakers/"+o)}return()=>{var l;let r;return e(d,null,[e(p,{moreLink:"/speakers"},W(r=t("homePage.speaker"))?r:{default:()=>[r]}),e(w,{autoplay:!0,style:{backgroundColor:"#eee"}},{default:()=>{var o;return[(o=n.speakers)==null?void 0:o.map(i=>e("img",{key:i.id,class:"fullWidthImage",src:i.image,"data-speaker":i.logic_id,onClick:a},null))]}}),e("div",{class:"gridCols5 mg_t_20"},[(l=n.speakerList)==null?void 0:l.map(o=>e("div",{class:"squareItem cursor_hand","data-speaker":o.id,onClick:a},[e("img",{src:o.picture},null)]))])])}}});function G(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!b(t)}var J=c({name:"HomePage_Sponor",setup(){const{t}=g({useScope:"global"});let{homeStore:s}=v();const n=y();let a;f(()=>{s.getSponor()}),I(()=>{a=setInterval(()=>{r()},5e3)}),P(()=>{l()});function r(){s.getSponor()}function l(){clearInterval(a)}function o(i){let m=i.target,u=m.dataset.id;var _=m.dataset.url;if(_!=""&&_!=null&&_!=null)window.open(_);else{if(u==""||u==null||u==null)return!1;n.push("/exhibitors/"+u)}}return()=>{var i;if(s.sponsors){let m;return e(d,null,[e(p,{moreLink:"/sponsors"},G(m=t("homePage.sponsor"))?m:{default:()=>[m]}),e("div",{class:"gridCols2"},[(i=s.sponsors)==null?void 0:i.map(u=>e(k,{class:"rectangleItem",to:"",key:u.id},{default:()=>[e("img",{src:u.image,onClick:o,"data-id":u.logic_id,"data-url":u.url},null)]}))])])}else return e(S,null,null)}}});function K(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!b(t)}var Q=c({name:"HomePage_Video",setup(){const{t}=g({useScope:"global"});let{homeStore:s}=v();return f(()=>{s.getVideo()}),()=>{if(s.videoes){let n;return e(d,null,[e(p,{moreLink:"/presentation"},K(n=t("homePage.presentation"))?n:{default:()=>[n]}),e("div",{class:"gridCols2"},[s.videoes.map(a=>e("div",{class:"rectangleItem"},[e(N,{key:a.id,video:a.url,poster:a.image},null)]))])])}else return e(S,null,null)}}}),He=c({name:"Home",setup(){let{authenStore:t}=L();return()=>e(d,null,[e(q,null,null),e(J,null,null),e(Q,null,null),e(z,null,null),t.role&&e(T,{role:t.role},null),e(E,null,null)])}});export{He as default};
