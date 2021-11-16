import{S as g,a as _,I as v,L as U}from"./index.e9b15ac0.js";import{s as p,u as j}from"./index.module.27360dce.js";import{m as $}from"./@rpdg.e35df5be.js";import{S as x,q as S,p as b,K as F}from"./ant-design-vue.a99caae8.js";import{d as A}from"./vue-router.85e08d32.js";import{d as k}from"./itb_logo_gray.5050f3d7.js";import{d as f,l as L,k as e,o as R,w as M,i as w,F as y,c as O}from"./@vue.f0a33739.js";import{M as B}from"./MainSectionHead.99c217de.js";import{u as T}from"./vue-i18n.df730e9c.js";import"./moment.29305b8e.js";import"./@ant-design.dd8d38e4.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";var I=f({props:{exhibitor:{type:Object,required:!0},onClick:{type:Function,required:!1}},name:"ShowfloorIndex_Card",setup(o){var n;let{appStore:a}=_();L((n=o.exhibitor.company_logo)!=null?n:"");let i="";return a.isEn?o.exhibitor.company_logo_en!=null&&o.exhibitor.company_logo_en!=""?i=g+o.exhibitor.company_logo_en:o.exhibitor.company_logo!=null&&o.exhibitor.company_logo!=""?i=g+o.exhibitor.company_logo:i=k:o.exhibitor.company_logo!=null&&o.exhibitor.company_logo!=""?i=g+o.exhibitor.company_logo:o.exhibitor.company_logo_en!=null&&o.exhibitor.company_logo_en!=""?i=g+o.exhibitor.company_logo_en:i=k,()=>e("div",{class:p.card,onClick:o.onClick},[e("div",{class:"squareItem2"},[e("img",{src:i},null)]),e("div",{class:p.title},[a.isEn?o.exhibitor.companyname_en:o.exhibitor.companyname_cn])])}});function q(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!w(o)}var z=f({name:"Showfloor_SearchBar",setup(){const{t:o}=T();let{showfloorStore:a}=j(),{appStore:i}=_(),n=a.state;R(()=>{a.doSearchShowFloor({region:"",product:"",companyType:""})}),M([n],h);function h(){var d,u,r,l;n.iconIndex===0?a.doSearchShowFloor({region:(d=n.destination)!=null?d:"",product:(u=n.product)!=null?u:"",companyType:""}):n.iconIndex===1?a.doSearchShowFloor({region:(r=n.destination)!=null?r:"",product:"",companyType:(l=n.company)!=null?l:""}):n.iconIndex===2&&a.getExhibitor()}return()=>{let d;return e(y,null,[e(B,{redLead:!1},q(d=o("menu.showFloor"))?d:{default:()=>[d]}),e("div",{class:"bg_white pd_10"},[e(x,{size:15},{default:()=>{var u,r,l;return[n.iconIndex!=2&&e(S,{allowClear:!0,placeholder:o("showFloor.destination"),style:"width: 150px",value:n.destination,"onUpdate:value":t=>n.destination=t,options:(u=a.continentList)==null?void 0:u.map(t=>({value:i.isEn?t.chau_en:t.chau_cn}))},null),n.iconIndex===0&&e(S,{allowClear:!0,placeholder:o("showFloor.product"),style:{width:"300px"},value:n.product,"onUpdate:value":t=>n.product=t,options:(r=a.productTypes)==null?void 0:r.map(t=>({value:t.id,label:i.isEn?t.group_en:t.group_cn}))},null),n.iconIndex===1&&e(S,{allowClear:!0,placeholder:o("showFloor.company"),style:{width:"300px"},value:n.company,"onUpdate:value":t=>n.company=t,options:(l=a.companyTypes)==null?void 0:l.map(t=>({value:t.id,label:i.isEn?t.companytype_en:t.companytype_cn}))},null),e(b.Group,{value:n.iconIndex,"onUpdate:value":t=>n.iconIndex=t,class:"iconGroup"},{default:()=>[e(b.Button,{value:1},{default:()=>[e(v,{type:"icon-category"},null)]}),e(b.Button,{value:0},{default:()=>[e(v,{type:"icon-all"},null)]}),e(b.Button,{value:2},{default:()=>[e(v,{type:"icon-connections"},null)]})]})]}})])])}}});function H(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!w(o)}var V=f({name:"ShowfloorIndex_Results",setup(){let{appStore:o}=_(),{showfloorStore:a}=j();const i=L(),n="ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");let h=O({});function d(r){var l;return(l=r.children)==null?void 0:l.map(t=>e("div",{class:"gridCols4"},[e("div",null,null),e(I,{exhibitor:t},null)]))}function u(r=!1){var m;let l={};(m=a.results)==null||m.forEach(c=>{var C,E;let s=o.isEn?(C=c.companyname_en)==null?void 0:C.substr(0,1).toLocaleUpperCase():c.companyname_cn?$((E=c.companyname_cn)==null?void 0:E.substr(0,1))[0].toLocaleUpperCase():"#";l[s]||(n.indexOf(s)===-1&&(s="#"),l[s]=[]),l[s].push(c)});let t=[];return n.forEach(c=>{l[c]&&(t.push(e(y,null,[e("p",{id:`#${c}`},[c]),e("hr",null,null)])),r?l[c].forEach(s=>t.push(e("div",{class:"bg_white mg_tb_20 pd_20"},[e("div",{class:"gridCols4"},[e(I,{exhibitor:s,onClick:()=>a.getExhibitorChildren(s)},null)]),d(s)]))):t.push(e("div",{class:"gridCols4 bg_white mg_t_20 pd_20"},[l[c].map(s=>e(A,{to:`/exhibitors/${s.barcode}`,target:"_blank"},{default:()=>[e(I,{exhibitor:s},null)]}))])))}),h=O(l),t}return()=>{let r;return e("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},[e("div",{style:{height:""}},[e(z,null,null),e("div",{class:"mg_t_20 bg_white",style:{height:"30px"}},[e(F,{bounds:0,affix:!1,getContainer:()=>i.value,onClick:(l,t)=>{if(l.preventDefault(),t.href){let m=document.getElementById(t.href);m&&m.scrollIntoView({block:"start"})}}},{default:()=>[e(x,{size:1},H(r=Object.keys(h).sort().map((l,t)=>e(F.Link,{key:`${l}-${t}`,title:l,href:`#${l}`},null)))?r:{default:()=>[r]})]})])]),e("div",{style:{flex:1,overflow:"auto"}},[e("div",{ref:"divScroll",class:"bg_white pd_20"},[a.loading?e(U,null,null):u(a.state.iconIndex===2)])])])}}}),D="/assets/sponsor1.dc993968.jpg",G="/assets/sponsor2.609c8684.jpg",N="/assets/sponsor3.d53bea36.jpg",K="/assets/sponsor4.fbff65d4.jpg";function P(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!w(o)}var J=f({name:"ShowfloorIndex_Sponsor",setup(){const{t:o}=T();return j(),()=>{let a;return e(y,null,[e(B,{redLead:!1},P(a=o("showFloor.sponsors"))?a:{default:()=>[a]}),e("div",{class:"gridCols4 bg_white mg_t_20 pd_20"},[e(x,{size:20},{default:()=>[e("img",{class:p.sponsorImage,src:D},null),e("img",{class:p.sponsorImage,src:G},null),e("img",{class:p.sponsorImage,src:N},null),e("img",{class:p.sponsorImage,src:K},null)]})])])}}}),Se=f({name:"ShowfloorIndex",setup(){return()=>e(y,null,[e(J,null,null),e(V,null,null)])}});export{Se as default};
