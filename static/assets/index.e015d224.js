import{u as c,R as t,L as p,S as n}from"./index.e4b73f61.js";import{M as f}from"./MainSectionHead.99c217de.js";import{u as b}from"./RecommendStroe.9367d080.js";import{u as g}from"./vue-i18n.df730e9c.js";import{d as m}from"./vue-router.85e08d32.js";import{s as l}from"./index.module.6e348a91.js";import{d as j}from"./avator_red.2a3a1020.js";import{d as v}from"./itb_logo_gray.5050f3d7.js";import{d as y,I as _,k as e,F as x}from"./@vue.f0a33739.js";import"./ant-design-vue.a99caae8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.dd8d38e4.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.647f38fa.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.e35df5be.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";var Y=y({name:"PartnerCompany",setup(){const{t:a}=g();let{recommendStore:s}=b(),{authenStore:o}=c();_(()=>{o.role===t.buyer?s.getRecommedExhibitiors():o.role===t.exhibition&&s.getRecommedBuyers()});function u(){var i,d;if(o.role===t.buyer)return(i=s.recommendExhibitiors)==null?void 0:i.map(r=>e(m,{to:`/exhibitors/${r.barcode}`,key:r.barcode,class:"cursor_hand mg_t_20 "},{default:()=>[e("div",{style:"width:100%;"},[e("div",{class:"squareItem2"},[r.logourl!=null&&r.logourl!=""?e("img",{src:`${n}${r.logourl}`},null):e("img",{src:v},null)])]),e("div",{class:`${l.title} text_left`},[r.company]),e("div",{class:"text_gray text_left"},[r.countryname])]}));if(o.role===t.exhibition)return(d=s.recommendBuyers)==null?void 0:d.map(r=>e(m,{to:`/buyer/${r.barcode}`,key:r.barcode,class:"cursor_hand mg_t_20"},{default:()=>[e("div",{style:"width:100%;"},[e("div",{class:"squareItem2"},[r.headImageUrl!=null&&r.headImageUrl!=""?e("img",{src:`${n}${r.headImageUrl}`},null):e("img",{src:j},null)])]),e("div",{class:`${l.title} text_left`},[r.name]),e("div",{class:"text_gray text_left"},[r.company]),e("div",{class:"text_gray text_left"},[r.position])]}))}return()=>e(x,null,[e(f,{redLead:!1},{default:()=>[o.role===t.buyer?a("menu.recommend_exhibitor"):o.role===t.exhibition?a("menu.recommend_buyer"):a("menu.recommend")]}),e("div",{class:"gridCols4 pd_20 bg_white"},[s.loading?e(p,null,null):u()])])}});export{Y as default};
