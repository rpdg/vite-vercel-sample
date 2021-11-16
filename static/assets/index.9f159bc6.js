import{I as j,a as d,L as b,S as h}from"./index.9456dc5f.js";import{u as p,s as n}from"./index.module.2ec03c0c.js";import{d as m}from"./itb_logo_gray.5050f3d7.js";import{d as f}from"./vue-router.85e08d32.js";import{M as y}from"./MainSectionHead.3a39449d.js";import{S,p as _,e as w}from"./ant-design-vue.f8ac2ba9.js";import{u as x}from"./vue-i18n.df730e9c.js";import{d as u,o as L,w as P,k as e,i as $,F as g}from"./@vue.f0a33739.js";import"./@rpdg.e35df5be.js";import"./moment.29305b8e.js";import"./@ant-design.a109b705.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";function k(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!$(o)}var C=u({name:"Products_SearchBar",setup(){const{t:o}=x();let{showfloorStore:a}=p(),{appStore:t}=d(),l=a.state;L(()=>{a.doSearchProduct({region:"",product:""})}),P([l],v);function v(){var i,r;a.doSearchProduct({region:(i=l.destination)!=null?i:"",product:(r=l.product)!=null?r:""})}return()=>{let i;return e(g,null,[e(y,{redLead:!1},k(i=o("menu.products"))?i:{default:()=>[i]}),e("div",{class:"bg_white mg_b_20 pd_20"},[e(S,{size:15},{default:()=>{var r,c;return[e(_,{allowClear:!0,placeholder:o("showFloor.destination"),style:"width: 150px",value:l.destination,"onUpdate:value":s=>l.destination=s,options:(r=a.continentList)==null?void 0:r.map(s=>({value:t.isEn?s.chau_en:s.chau_cn}))},null),e(_,{allowClear:!0,placeholder:o("showFloor.product"),style:{width:"300px"},value:l.product,"onUpdate:value":s=>l.product=s,options:(c=a.productTypes)==null?void 0:c.map(s=>({value:s.id,label:t.isEn?s.group_en:s.group_cn}))},null),e(w,{type:"primary"},{icon:()=>e(j,{type:"icon-all",style:{fontSize:"20px"}},null)})]}})])])}}}),F=u({name:"Products_Result",setup(){let{showfloorStore:o}=p(),{appStore:a}=d();return()=>e("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},[e("div",{style:{height:"auto"}},[e(C,null,null)]),e("div",{style:{flex:1,overflow:"auto"}},[e("div",{class:"bg_white pd_20"},[e("div",{class:"gridCols4"},[o.loading&&e(b,null,null),o.products&&o.products.map(t=>e("div",{class:n.card,key:t.id},[e(f,{to:`/products/${t.id}`,target:"_blank"},{default:()=>[t.pic_filename!=null&&t.pic_filename!=""?e("img",{src:`${t.pic_path}/${t.pic_filename}`,class:n.thumb},null):e("img",{src:m,class:n.thumb},null)]}),e("div",{class:"mg_tb_10",style:{display:"flex",gap:"12px"}},[e("div",{style:{flex:1}},[e("div",{class:"squareItem2"},[t.logourl!=null&&t.logourl!=""?e("img",{src:`${h}${t.logourl}`},null):e("img",{src:m},null)])]),e("div",{style:{flex:3}},[e(f,{to:`/products/${t.id}`,target:"_blank"},{default:()=>[e("b",{class:"clip_1_line"},[a.isEn?t.product_name_en:t.product_name])]}),e("div",{class:"mg_t_10 text_gray clip_2_line"},[a.isEn?t.product_comment_en:t.product_comment])])])]))])])])])}}),le=u({name:"ProductList",setup(){return()=>e(g,null,[e(F,null,null)])}});export{le as default};
