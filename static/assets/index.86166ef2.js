import{L as y,R as _,u as C}from"./index.581105e7.js";import{u as h}from"./HomeStore.30301377.js";import{q as w}from"./ant-design-vue.00c2c9f0.js";import{u as p}from"./vue-i18n.6a1efd87.js";import{u as S,d as k}from"./vue-router.b758f417.js";import{d,I as f,k as e,i as g,F as m,o as I,f as L}from"./@vue.6f7c75f1.js";import{M as j}from"./MainSectionHead.a516428a.js";import{u as H}from"./NewsStore.9cc4d642.js";import{S as x}from"./Config.41849c7b.js";import{u as $}from"./RecommendStroe.e60dbd11.js";import{d as O}from"./avator_red.2a3a1020.js";import{d as R}from"./itb_logo_gray.5050f3d7.js";import"./@rpdg.f7b2a17f.js";import"./moment.29305b8e.js";import"./@ant-design.d39a0d88.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.078afd90.js";function P(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!g(t)}var N=d({name:"HomePage_Banner",setup(){p({useScope:"global"});let{homeStore:t}=h();const a=S();f(()=>{t.getBanner()});function s(n){let r=n.target,l=r.dataset.id;var o=r.dataset.url;if(o!=""&&o!=null&&o!=null)window.open(o);else{if(l==""||l==null||l==null)return!1;a.push("/exhibitors/"+l)}}return()=>{if(t.banners){let n;return e(m,null,[e("p",null,null),e(w,{autoplay:!0},P(n=t.banners.map(r=>e("img",{key:r.id,class:"fullWidthImage","data-id":r.logic_id,"data-url":r.url,src:r.image,onClick:s},null)))?n:{default:()=>[n]})])}else return e(y,null,null)}}});const q="_newsCard_14log_1",B="_title_14log_11",M="_content_14log_23",D="_newsimgcircle_14log_36",U="_text_bold_14log_40";var v={newsCard:q,title:B,content:M,newsimgcircle:D,text_bold:U};function A(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!g(t)}var E=d({name:"HomePage_NewsSection",setup(){const{t}=p({useScope:"global"}),a=S(),{newsStore:s}=H();f(()=>{s.getNewsList(0,6)});function n(r){let o=r.currentTarget.dataset.news;a.push("/news/"+o)}return()=>{if(s.newsList){let r;return e(m,null,[e(j,{moreLink:"/news"},A(r=t("homePage.news"))?r:{default:()=>[r]}),e("div",{class:"gridCols3 pd_20 bg_white"},[s.newsList.results.map(l=>e("div",{key:l.id,class:`cursor_hand ${v.newsCard}`,"data-news":l.id,onClick:n},[e("img",{class:v.newsimgcircle,src:l.coverpicture,alt:""},null),e("div",{class:v.title},[l.title]),e("div",{class:v.content},[l.digest])]))])])}else return e(y,null,null)}}});function F(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!g(t)}var T=d({name:"HomePage_RecommendSection",props:{role:{type:String,required:!0}},setup(t){const{t:a}=p({useScope:"global"});let{recommendStore:s}=$();f(()=>{t.role===_.buyer?s.getRecommedExhibitiors(8):t.role===_.exhibition&&s.getRecommedBuyers(8)});function n(){var r,l;return t.role===_.buyer?(r=s.recommendExhibitiors)==null?void 0:r.slice(0,8).map(o=>e(k,{to:`/exhibitors/${o.barcode}`,class:"bg_white"},{default:()=>[e("div",{class:"squareItem2",key:o.barcode},[o.logourl!=null&&o.logourl!=""?e("img",{src:`${x}${o.logourl}`},null):e("img",{src:R},null)]),e("div",{class:"text_black text_left pd_10"},[o.company])]})):t.role===_.exhibition?(l=s.recommendBuyers)==null?void 0:l.slice(0,8).map(o=>e(k,{to:`/buyer/${o.barcode}`,class:"bg_white"},{default:()=>[e("div",{class:"squareItem2",key:o.barcode},[o.headImageUrl!=null&&o.headImageUrl!=""?e("img",{src:`${x}${o.headImageUrl}`},null):e("img",{src:O},null)]),e("div",{class:"text_black text_left pd_10 text_bold"},[o.name]),e("div",{class:"text_black text_left pd_10"},[o.company])]})):e("p",{class:"squareItem"},null)}return()=>{let r;return e(m,null,[e(j,{moreLink:"/recommends"},F(r=a("homePage.recommended"))?r:{default:()=>[r]}),e("div",{class:"gridCols4"},[n()])])}}});function V(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!g(t)}var W=d({name:"HomePage_SpeakerSection",setup(){const{t}=p({useScope:"global"}),a=S();let{homeStore:s}=h();f(()=>{s.getSpeakers()});function n(r){let o=r.currentTarget.dataset.speaker;a.push("/speakers/"+o)}return()=>{var l;let r;return e(m,null,[e(j,{moreLink:"/speakers"},V(r=t("homePage.speaker"))?r:{default:()=>[r]}),e(w,{autoplay:!0,style:{backgroundColor:"#eee"}},{default:()=>{var o;return[(o=s.speakers)==null?void 0:o.map(u=>e("img",{key:u.id,class:"fullWidthImage",src:u.image,"data-speaker":u.logic_id,onClick:n},null))]}}),e("div",{class:"gridCols5 mg_t_20"},[(l=s.speakerList)==null?void 0:l.map(o=>e("div",{class:"squareItem cursor_hand","data-speaker":o.id,onClick:n},[e("img",{src:o.picture},null)]))])])}}});function z(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!g(t)}var G=d({name:"HomePage_Sponor",setup(){const{t}=p({useScope:"global"});let{homeStore:a}=h();const s=S();let n;f(()=>{a.getSponor()}),I(()=>{n=setInterval(()=>{r()},5e3)}),L(()=>{l()});function r(){a.getSponor()}function l(){clearInterval(n)}function o(u){let c=u.target,i=c.dataset.id;var b=c.dataset.url;if(b!=""&&b!=null&&b!=null)window.open(b);else{if(i==""||i==null||i==null)return!1;s.push("/exhibitors/"+i)}}return()=>{var u;if(a.sponsors){let c;return e(m,null,[e(j,{moreLink:"/sponsors"},z(c=t("homePage.sponsor"))?c:{default:()=>[c]}),e("div",{class:"gridCols2"},[(u=a.sponsors)==null?void 0:u.map(i=>e(k,{class:"rectangleItem",to:"",key:i.id},{default:()=>[e("img",{src:i.image,onClick:o,"data-id":i.logic_id,"data-url":i.url},null)]}))])])}else return e(y,null,null)}}}),Ce=d({name:"Home",setup(){let{authenStore:t}=C();return()=>e(m,null,[e(N,null,null),e(G,null,null),e(W,null,null),t.role&&e(T,{role:t.role},null),e(E,null,null)])}});export{Ce as default};
