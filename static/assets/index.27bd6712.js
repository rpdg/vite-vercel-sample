import{S as v}from"./Config.87ac60ee.js";import{a as d,I as h}from"./index.388fe986.js";import{u as p,s as n}from"./index.module.ef3ad872.js";import{d as m}from"./vue-router.8ec3c3d8.js";import{d as f}from"./itb_logo_gray.16279932.js";import{d as c,k as e,o as b,w as S,i as y,F as _}from"./@vue.fa05379c.js";import{M as w}from"./MainSectionHead.b9e7274a.js";import{S as x,k as j,e as P}from"./ant-design-vue.034afe85.js";import{u as $}from"./vue-i18n.0711e616.js";import"./moment.29305b8e.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.19d3e859.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";var C=c({name:"Products_Result",setup(){let{showfloorStore:o}=p(),{appStore:a}=d();return()=>e("div",{class:"bg_white pd_20"},[e("div",{class:"gridCols4"},[o.products&&o.products.map(t=>e("div",{class:n.card,key:t.id},[e(m,{to:`/products/${t.id}`},{default:()=>[t.pic_filename!=null&&t.pic_filename!=""?e("img",{src:`${t.pic_path}/${t.pic_filename}`,class:n.thumb},null):e("img",{src:f,class:n.thumb},null)]}),e("div",{class:"mg_tb_10",style:{display:"flex",gap:"12px"}},[e("div",{style:{flex:1}},[e("div",{class:"squareItem2"},[t.logourl!=null&&t.logourl!=""?e("img",{src:`${v}${t.logourl}`},null):e("img",{src:f},null)])]),e("div",{style:{flex:3}},[e(m,{to:`/products/${t.id}`},{default:()=>[e("b",{class:"clip_1_line"},[a.isEn?t.product_name_en:t.product_name])]}),e("div",{class:"mg_t_10 text_gray clip_2_line"},[a.isEn?t.product_comment_en:t.product_comment])])])]))])])}});function F(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!y(o)}var L=c({name:"Products_SearchBar",setup(){const{t:o}=$();let{showfloorStore:a}=p(),{appStore:t}=d(),i=a.state;b(()=>{a.doSearchProduct({region:"",product:""})}),S([i],g);function g(){var r,l;a.doSearchProduct({region:(r=i.destination)!=null?r:"",product:(l=i.product)!=null?l:""})}return()=>{let r;return e(_,null,[e(w,{redLead:!1},F(r=o("menu.products"))?r:{default:()=>[r]}),e("div",{class:"bg_white mg_b_20 pd_20"},[e(x,{size:15},{default:()=>{var l,u;return[e(j,{allowClear:!0,placeholder:o("showFloor.destination"),style:"width: 150px",value:i.destination,"onUpdate:value":s=>i.destination=s,options:(l=a.continentList)==null?void 0:l.map(s=>({value:t.isEn?s.chau_en:s.chau_cn}))},null),e(j,{allowClear:!0,placeholder:o("showFloor.product"),style:{width:"300px"},value:i.product,"onUpdate:value":s=>i.product=s,options:(u=a.productTypes)==null?void 0:u.map(s=>({value:s.id,label:t.isEn?s.group_en:s.group_cn}))},null),e(P,{type:"primary"},{icon:()=>e(h,{type:"icon-all",style:{fontSize:"20px"}},null)})]}})])])}}}),ae=c({name:"ProductList",setup(){return()=>e(_,null,[e(L,null,null),e(C,null,null)])}});export{ae as default};
