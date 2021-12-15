import{I as v,a as d,L as j,S as h}from"./index.0b6644c7.js";import{u as p,s as n}from"./index.module.e2b704e8.js";import{d as m}from"./itb_logo_gray.5050f3d7.js";import{d as f}from"./vue-router.82b024de.js";import{M as y}from"./MainSectionHead.21260b67.js";import{S,q as g,g as w}from"./ant-design-vue.185fab3e.js";import{u as x}from"./vue-i18n.f56f8be1.js";import{d as u,o as L,w as P,k as e,i as $,F as _}from"./@vue.b2913f50.js";import"./@rpdg.8b8261fd.js";import"./moment.29305b8e.js";import"./@ant-design.3b6fcf97.js";import"./@ctrl.2e36ce53.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";function k(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!$(o)}var C=u({name:"Products_SearchBar",setup(){const{t:o}=x();let{showfloorStore:l}=p(),{appStore:t}=d(),a=l.state;L(()=>{l.doSearchProduct({region:"",product:""})}),P([a],b);function b(){var i,r;l.doSearchProduct({region:(i=a.destination)!=null?i:"",product:(r=a.product)!=null?r:""})}return()=>{let i;return e(_,null,[e(y,{redLead:!1},k(i=o("menu.products"))?i:{default:()=>[i]}),e("div",{class:"bg_white mg_b_20 pd_20"},[e(S,{size:15},{default:()=>{var r,c;return[e(g,{allowClear:!0,placeholder:o("showFloor.destination"),style:"width: 150px",value:a.destination,"onUpdate:value":s=>a.destination=s,options:(r=l.continentList)==null?void 0:r.map(s=>({value:t.isEn?s.chau_en:s.chau_cn}))},null),e(g,{allowClear:!0,placeholder:o("showFloor.product"),style:{width:"300px"},value:a.product,"onUpdate:value":s=>a.product=s,options:(c=l.productTypes)==null?void 0:c.map(s=>({value:s.id,label:t.isEn?s.group_en:s.group_cn}))},null),e(w,{type:"primary"},{icon:()=>e(v,{type:"icon-all",style:{fontSize:"20px"}},null)})]}})])])}}}),F=u({name:"Products_Result",setup(){let{showfloorStore:o}=p(),{appStore:l}=d();return()=>e("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},[e("div",{style:{height:"auto"}},[e(C,null,null)]),e("div",{style:{flex:1,overflow:"auto"}},[e("div",{class:"bg_white pd_20"},[e("div",{class:"gridCols4"},[o.loading&&e(j,null,null),o.products&&o.products.map(t=>e("div",{class:n.card,key:t.id},[e(f,{to:`/products/${t.id}`,target:"_blank"},{default:()=>[t.pic_filename!=null&&t.pic_filename!=""?e("img",{src:`${t.pic_path}/${t.pic_filename}`,class:n.thumb},null):e("img",{src:m,class:n.thumb},null)]}),e("div",{class:"mg_tb_10",style:{display:"flex",gap:"12px"}},[e("div",{style:{flex:1}},[e("div",{class:"squareItem2"},[t.logourl!=null&&t.logourl!=""?e("img",{src:`${h}${t.logourl}`},null):e("img",{src:m},null)])]),e("div",{style:{flex:3}},[e(f,{to:`/products/${t.id}`,target:"_blank"},{default:()=>[e("b",{class:"clip_1_line"},[l.isEn?t.product_name_en:t.product_name])]}),e("div",{class:"mg_t_10 text_gray clip_2_line"},[l.isEn?t.product_comment_en:t.product_comment])])])]))])])])])}}),ae=u({name:"ProductList",setup(){return()=>e(_,null,[e(F,null,null)])}});export{ae as default};
