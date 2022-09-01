import{a as _,I as v,L as U}from"./index.2167a810.js";import{s as p,u as j}from"./index.module.00241f51.js";import{m as $}from"./@rpdg.c2e06738.js";import{S as x,k as S,j as g,E as k}from"./ant-design-vue.04da4757.js";import{d as A}from"./vue-router.5ade7376.js";import{S as b}from"./Config.41849c7b.js";import{d as F}from"./itb_logo_gray.5050f3d7.js";import{d as f,l as L,k as e,o as R,w as M,i as w,F as y,c as O}from"./@vue.c37eb56a.js";import{M as B}from"./MainSectionHead.644d549e.js";import{u as T}from"./vue-i18n.95ef2b18.js";import"./moment.29305b8e.js";import"./@ant-design.b68099c7.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.9582b89e.js";var I=f({props:{exhibitor:{type:Object,required:!0},onClick:{type:Function,required:!1}},name:"ShowfloorIndex_Card",setup(o){var n;let{appStore:s}=_();L((n=o.exhibitor.company_logo)!=null?n:"");let a="";return s.isEn?o.exhibitor.company_logo_en!=null&&o.exhibitor.company_logo_en!=""?a=b+o.exhibitor.company_logo_en:o.exhibitor.company_logo!=null&&o.exhibitor.company_logo!=""?a=b+o.exhibitor.company_logo:a=F:o.exhibitor.company_logo!=null&&o.exhibitor.company_logo!=""?a=b+o.exhibitor.company_logo:o.exhibitor.company_logo_en!=null&&o.exhibitor.company_logo_en!=""?a=b+o.exhibitor.company_logo_en:a=F,()=>e("div",{class:p.card,onClick:o.onClick},[e("div",{class:"squareItem2"},[e("img",{src:a},null)]),e("div",{class:p.title},[s.isEn?o.exhibitor.companyname_en:o.exhibitor.companyname_cn])])}});function z(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!w(o)}var H=f({name:"Showfloor_SearchBar",setup(){const{t:o}=T();let{showfloorStore:s}=j(),{appStore:a}=_(),n=s.state;R(()=>{s.doSearchShowFloor({region:"",product:"",companyType:""})}),M([n],h);function h(){var u,d,r,l;n.iconIndex===0?s.doSearchShowFloor({region:(u=n.destination)!=null?u:"",product:(d=n.product)!=null?d:"",companyType:""}):n.iconIndex===1?s.doSearchShowFloor({region:(r=n.destination)!=null?r:"",product:"",companyType:(l=n.company)!=null?l:""}):n.iconIndex===2&&s.getExhibitor()}return()=>{let u;return e(y,null,[e(B,{redLead:!1},z(u=o("menu.showFloor"))?u:{default:()=>[u]}),e("div",{class:"bg_white pd_10"},[e(x,{size:15},{default:()=>{var d,r,l;return[n.iconIndex!=2&&e(S,{allowClear:!0,placeholder:o("showFloor.destination"),style:"width: 150px",value:n.destination,"onUpdate:value":t=>n.destination=t,options:(d=s.continentList)==null?void 0:d.map(t=>({value:a.isEn?t.chau_en:t.chau_cn}))},null),n.iconIndex===0&&e(S,{allowClear:!0,placeholder:o("showFloor.product"),style:{width:"300px"},value:n.product,"onUpdate:value":t=>n.product=t,options:(r=s.productTypes)==null?void 0:r.map(t=>({value:t.id,label:a.isEn?t.group_en:t.group_cn}))},null),n.iconIndex===1&&e(S,{allowClear:!0,placeholder:o("showFloor.company"),style:{width:"300px"},value:n.company,"onUpdate:value":t=>n.company=t,options:(l=s.companyTypes)==null?void 0:l.map(t=>({value:t.id,label:a.isEn?t.companytype_en:t.companytype_cn}))},null),e(g.Group,{value:n.iconIndex,"onUpdate:value":t=>n.iconIndex=t,class:"iconGroup"},{default:()=>[e(g.Button,{value:1},{default:()=>[e(v,{type:"icon-category"},null)]}),e(g.Button,{value:0},{default:()=>[e(v,{type:"icon-all"},null)]}),e(g.Button,{value:2},{default:()=>[e(v,{type:"icon-connections"},null)]})]})]}})])])}}});function V(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!w(o)}var q=f({name:"ShowfloorIndex_Results",setup(){let{appStore:o}=_(),{showfloorStore:s}=j();const a=L(),n="ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");let h=O({});function u(r){var l;return(l=r.children)==null?void 0:l.map(t=>e("div",{class:"gridCols4"},[e("div",null,null),e(I,{exhibitor:t},null)]))}function d(r=!1){var m;let l={};(m=s.results)==null||m.forEach(c=>{var C,E;let i=o.isEn?(C=c.companyname_en)==null?void 0:C.substr(0,1).toLocaleUpperCase():c.companyname_cn?$((E=c.companyname_cn)==null?void 0:E.substr(0,1))[0].toLocaleUpperCase():"#";l[i]||(n.indexOf(i)===-1&&(i="#"),l[i]=[]),l[i].push(c)});let t=[];return n.forEach(c=>{l[c]&&(t.push(e(y,null,[e("p",{id:`#${c}`},[c]),e("hr",null,null)])),r?l[c].forEach(i=>t.push(e("div",{class:"bg_white mg_tb_20 pd_20"},[e("div",{class:"gridCols4"},[e(I,{exhibitor:i,onClick:()=>s.getExhibitorChildren(i)},null)]),u(i)]))):t.push(e("div",{class:"gridCols4 bg_white mg_t_20 pd_20"},[l[c].map(i=>e(A,{to:`/exhibitors/${i.barcode}`,target:"_blank"},{default:()=>[e(I,{exhibitor:i},null)]}))])))}),h=O(l),t}return()=>{let r;return e("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},[e("div",{style:{height:""}},[e(H,null,null),e("div",{class:"mg_t_20 bg_white",style:{height:"30px"}},[e(k,{bounds:0,affix:!1,getContainer:()=>a.value,onClick:(l,t)=>{if(l.preventDefault(),t.href){let m=document.getElementById(t.href);m&&m.scrollIntoView({block:"start"})}}},{default:()=>[e(x,{size:1},V(r=Object.keys(h).sort().map((l,t)=>e(k.Link,{key:`${l}-${t}`,title:l,href:`#${l}`},null)))?r:{default:()=>[r]})]})])]),e("div",{style:{flex:1,overflow:"auto"}},[e("div",{ref:"divScroll",class:"bg_white pd_20"},[s.loading?e(U,null,null):d(s.state.iconIndex===2)])])])}}}),D="/assets/sponsor1.8a9a03b9.jpg",G="/assets/sponsor2.b00447af.jpg",N="/assets/sponsor3.678752cd.jpg",P="/assets/sponsor4.9500a34a.jpg",J="/assets/sponsor5.facefc41.jpg";function K(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!w(o)}var Q=f({name:"ShowfloorIndex_Sponsor",setup(){const{t:o}=T();return j(),()=>{let s;return e(y,null,[e(B,{redLead:!1},K(s=o("showFloor.sponsors"))?s:{default:()=>[s]}),e("div",{class:"gridCols4 bg_white mg_t_20 pd_20"},[e(x,{size:20},{default:()=>[e("img",{class:p.sponsorImage,src:D},null),e("img",{class:p.sponsorImage,src:G},null),e("img",{class:p.sponsorImage,src:N},null),e("img",{class:p.sponsorImage,src:P},null),e("img",{class:p.sponsorImage,src:J},null)]})])])}}}),Ie=f({name:"ShowfloorIndex",setup(){return()=>e(y,null,[e(Q,null,null),e(q,null,null)])}});export{Ie as default};
