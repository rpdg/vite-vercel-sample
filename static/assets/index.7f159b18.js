import{a as u,I as v}from"./index.c213d1c2.js";import{u as p,s as d}from"./index.module.6c96e5e5.js";import{d as m}from"./vue-router.8ec3c3d8.js";import{d as n,k as e,o as h,w as g,i as b,F as f}from"./@vue.fa05379c.js";import{M as y}from"./MainSectionHead.b9e7274a.js";import{S,s as _,i as w}from"./ant-design-vue.33c90099.js";import{u as x}from"./vue-i18n.0711e616.js";import"./moment.29305b8e.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";var P=n({name:"Products_Result",setup(){let{showfloorStore:t}=p(),{appStore:r}=u();return()=>e("div",{class:"bg_white pd_20"},[e("div",{class:"gridCols4"},[t.products&&t.products.map(o=>e("div",{class:d.card},[e(m,{to:`/products/${o.id}`},{default:()=>[e("img",{src:o.zip_pic_path,class:d.thumb},null)]}),e("div",{class:"mg_tb_10",style:{display:"flex",gap:"12px"}},[e("div",{style:{flex:1}},[e("img",{src:"//via.placeholder.com/32x32.jpg?text=logo",class:"squareItem round",style:{width:"100%",height:"auto"}},null)]),e("div",{style:{flex:3}},[e(m,{to:`/products/${o.id}`},{default:()=>[e("b",{class:"clip_1_line"},[r.isEn?o.product_name_en:o.product_name])]}),e("div",{class:"mg_t_10 text_gray clip_2_line"},[r.isEn?o.product_comment_en:o.product_comment])])])]))])])}});function F(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!b(t)}var z=n({name:"Products_SearchBar",setup(){const{t}=x();let{showfloorStore:r}=p(),{appStore:o}=u(),a=r.state;h(()=>{r.doSearchProduct({region:"",product:""})}),g([a],j);function j(){var i,l;r.doSearchProduct({region:(i=a.destination)!=null?i:"",product:(l=a.product)!=null?l:""})}return()=>{let i;return e(f,null,[e(y,{redLead:!1},F(i=t("menu.products"))?i:{default:()=>[i]}),e("div",{class:"bg_white mg_b_20 pd_20"},[e(S,{size:15},{default:()=>{var l,c;return[e(_,{allowClear:!0,placeholder:t("showFloor.destination"),style:"width: 150px",value:a.destination,"onUpdate:value":s=>a.destination=s,options:(l=r.continentList)==null?void 0:l.map(s=>({value:o.isEn?s.chau_en:s.chau_cn}))},null),e(_,{allowClear:!0,placeholder:t("showFloor.product"),style:{width:"300px"},value:a.product,"onUpdate:value":s=>a.product=s,options:(c=r.productTypes)==null?void 0:c.map(s=>({value:o.isEn?s.group_en:s.group_cn}))},null),e(w,{type:"primary"},{icon:()=>e(v,{type:"icon-all",style:{fontSize:"20px"}},null)})]}})])])}}}),ee=n({name:"ProductList",setup(){return()=>e(f,null,[e(z,null,null),e(P,null,null)])}});export{ee as default};
