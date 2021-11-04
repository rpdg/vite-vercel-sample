import{S as j}from"./Config.41849c7b.js";import{I as h,a as d,L as b,r as p}from"./index.581105e7.js";import{u as m,s as n}from"./index.module.b9c8b672.js";import{d as f}from"./itb_logo_gray.5050f3d7.js";import{M as y}from"./MainSectionHead.a516428a.js";import{S,l as g,e as w}from"./ant-design-vue.00c2c9f0.js";import{u as x}from"./vue-i18n.6a1efd87.js";import{d as c,o as C,w as L,k as e,i as P,F as _}from"./@vue.6f7c75f1.js";import"./@rpdg.f7b2a17f.js";import"./vue-router.b758f417.js";import"./moment.29305b8e.js";import"./@ant-design.d39a0d88.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.078afd90.js";function $(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!P(o)}var F=c({name:"Products_SearchBar",setup(){const{t:o}=x();let{showfloorStore:a}=m(),{appStore:t}=d(),l=a.state;C(()=>{a.doSearchProduct({region:"",product:""})}),L([l],v);function v(){var r,i;a.doSearchProduct({region:(r=l.destination)!=null?r:"",product:(i=l.product)!=null?i:""})}return()=>{let r;return e(_,null,[e(y,{redLead:!1},$(r=o("menu.products"))?r:{default:()=>[r]}),e("div",{class:"bg_white mg_b_20 pd_20"},[e(S,{size:15},{default:()=>{var i,u;return[e(g,{allowClear:!0,placeholder:o("showFloor.destination"),style:"width: 150px",value:l.destination,"onUpdate:value":s=>l.destination=s,options:(i=a.continentList)==null?void 0:i.map(s=>({value:t.isEn?s.chau_en:s.chau_cn}))},null),e(g,{allowClear:!0,placeholder:o("showFloor.product"),style:{width:"300px"},value:l.product,"onUpdate:value":s=>l.product=s,options:(u=a.productTypes)==null?void 0:u.map(s=>({value:s.id,label:t.isEn?s.group_en:s.group_cn}))},null),e(w,{type:"primary"},{icon:()=>e(h,{type:"icon-all",style:{fontSize:"20px"}},null)})]}})])])}}}),k=c({name:"Products_Result",setup(){let{showfloorStore:o}=m(),{appStore:a}=d();return()=>e("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},[e("div",{style:{height:"auto"}},[e(F,null,null)]),e("div",{style:{flex:1,overflow:"auto"}},[e("div",{class:"bg_white pd_20"},[e("div",{class:"gridCols4"},[o.loading&&e(b,null,null),o.products&&o.products.map(t=>e("div",{class:n.card,key:t.id},[e("a",{href:p.resolve(`/products/${t.id}`).path,target:"_blank"},[t.pic_filename!=null&&t.pic_filename!=""?e("img",{src:`${t.pic_path}/${t.pic_filename}`,class:n.thumb},null):e("img",{src:f,class:n.thumb},null)]),e("div",{class:"mg_tb_10",style:{display:"flex",gap:"12px"}},[e("div",{style:{flex:1}},[e("div",{class:"squareItem2"},[t.logourl!=null&&t.logourl!=""?e("img",{src:`${j}${t.logourl}`},null):e("img",{src:f},null)])]),e("div",{style:{flex:3}},[e("a",{href:p.resolve(`/products/${t.id}`).path,target:"_blank"},[e("b",{class:"clip_1_line"},[a.isEn?t.product_name_en:t.product_name])]),e("div",{class:"mg_t_10 text_gray clip_2_line"},[a.isEn?t.product_comment_en:t.product_comment])])])]))])])])])}}),re=c({name:"ProductList",setup(){return()=>e(_,null,[e(k,null,null)])}});export{re as default};
