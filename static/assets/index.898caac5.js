import{M as g}from"./MainSectionHead.644d549e.js";import{a as d}from"./index.2167a810.js";import{u}from"./vue-i18n.95ef2b18.js";import{b as h}from"./banner.93874b08.js";import{d as f,j,I as U,k as e,i as _,F as s}from"./@vue.c37eb56a.js";import"./vue-router.5ade7376.js";import"./ant-design-vue.04da4757.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.b68099c7.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.c2e06738.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.9582b89e.js";const v=[{type:"Premium Sponsor",logoUrl:"https://login365.itb-china.com/Upload/Images/aba4853e-0706-4133-a5ad-2aff3c44ab18.jpg",gotoUrl:"https://365.itb-china.com/pages/enterprisesTab/enterprisesTab?id=72",name:{en:"Pan Pacific Hotels Group",zh:"\u6CDB\u592A\u5E73\u6D0B\u9152\u5E97\u96C6\u56E2"}},{type:"Premium Sponsor",logoUrl:"https://login365.itb-china.com/Upload/Images/4746e62e-32e8-4489-bb3b-30958224e46b.jpg",gotoUrl:"https://365.itb-china.com/pages/enterprisesTab/enterprisesTab?id=70",name:{en:"German National Tourist Office, Beijing",zh:"\u5FB7\u56FD\u56FD\u5BB6\u65C5\u6E38\u5C40\u5317\u4EAC\u529E\u4E8B\u5904"}},{type:"Premium Sponsor",logoUrl:"https://login365.itb-china.com/Upload/Images/aba4853e-0706-4133-a5ad-2aff3c44ab18.jpg",gotoUrl:"https://365.itb-china.com/pages/enterprisesTab/enterprisesTab?id=72",name:{en:"Pan Pacific Hotels Group",zh:"\u6CDB\u592A\u5E73\u6D0B\u9152\u5E97\u96C6\u56E2"}},{type:"Premium Sponsor",logoUrl:"https://login365.itb-china.com/Upload/Images/4746e62e-32e8-4489-bb3b-30958224e46b.jpg",gotoUrl:"https://365.itb-china.com/pages/enterprisesTab/enterprisesTab?id=70",name:{en:"German National Tourist Office, Beijing",zh:"\u5FB7\u56FD\u56FD\u5BB6\u65C5\u6E38\u5C40\u5317\u4EAC\u529E\u4E8B\u5904"}},{type:"Premium Sponsor",logoUrl:"https://login365.itb-china.com/Upload/Images/aba4853e-0706-4133-a5ad-2aff3c44ab18.jpg",gotoUrl:"https://365.itb-china.com/pages/enterprisesTab/enterprisesTab?id=72",name:{en:"Pan Pacific Hotels Group",zh:"\u6CDB\u592A\u5E73\u6D0B\u9152\u5E97\u96C6\u56E2"}},{type:"Premium Sponsor",logoUrl:"https://login365.itb-china.com/Upload/Images/4746e62e-32e8-4489-bb3b-30958224e46b.jpg",gotoUrl:"https://365.itb-china.com/pages/enterprisesTab/enterprisesTab?id=70",name:{en:"German National Tourist Office, Beijing",zh:"\u5FB7\u56FD\u56FD\u5BB6\u65C5\u6E38\u5C40\u5317\u4EAC\u529E\u4E8B\u5904"}},{type:"Premium Sponsor",logoUrl:"https://login365.itb-china.com/Upload/Images/aba4853e-0706-4133-a5ad-2aff3c44ab18.jpg",gotoUrl:"https://365.itb-china.com/pages/enterprisesTab/enterprisesTab?id=72",name:{en:"Pan Pacific Hotels Group",zh:"\u6CDB\u592A\u5E73\u6D0B\u9152\u5E97\u96C6\u56E2"}},{type:"Premium Sponsor",logoUrl:"https://login365.itb-china.com/Upload/Images/4746e62e-32e8-4489-bb3b-30958224e46b.jpg",gotoUrl:"https://365.itb-china.com/pages/enterprisesTab/enterprisesTab?id=70",name:{en:"German National Tourist Office, Beijing",zh:"\u5FB7\u56FD\u56FD\u5BB6\u65C5\u6E38\u5C40\u5317\u4EAC\u529E\u4E8B\u5904"}},{type:"Premium Sponsor",logoUrl:"https://login365.itb-china.com/Upload/Images/aba4853e-0706-4133-a5ad-2aff3c44ab18.jpg",gotoUrl:"https://365.itb-china.com/pages/enterprisesTab/enterprisesTab?id=72",name:{en:"Pan Pacific Hotels Group",zh:"\u6CDB\u592A\u5E73\u6D0B\u9152\u5E97\u96C6\u56E2"}},{type:"Premium Sponsor",logoUrl:"https://login365.itb-china.com/Upload/Images/4746e62e-32e8-4489-bb3b-30958224e46b.jpg",gotoUrl:"https://365.itb-china.com/pages/enterprisesTab/enterprisesTab?id=70",name:{en:"German National Tourist Office, Beijing",zh:"\u5FB7\u56FD\u56FD\u5BB6\u65C5\u6E38\u5C40\u5317\u4EAC\u529E\u4E8B\u5904"}}];var b={logo:v};function T(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!_(a)}var R=f({name:"Sponsors",setup(){const{t:a}=u(),{appStore:c}=d();function n(t){var o=t.target.dataset.url;o!=""&&o!=null&&o!=null&&window.open(o)}let r=[];function l(t,i){let o=[];return t.filter(m=>{m.type===i&&o.push(m)}),o}let p=j(()=>c.isEn?"en":"zh");return U(()=>{r=l(b.logo,"Premium Sponsor"),l(b.logo,"online Sponsor")}),()=>{let t;return e(s,null,[e("div",{class:"pd_b_20"},[e(g,{redLead:!1},T(t=a("menu.partners"))?t:{default:()=>[t]}),e("img",{class:"fullWidthImage cursor_normal",src:h,style:"box-shadow: 0px 4px 8px 1px rgba(182, 182, 182, 0.74); border-radius: 2px;"},null)]),e("div",{class:"bg_white mg_b_20 pd_b_20"},[e("div",{class:"bg_white mg_b_20 pd_b_20 gridCols5"},[r.map(i=>e(s,null,[e("div",null,[e("div",{style:{margin:"10px"}},[i.name[p.value]]),e("img",{style:{margin:"auto",width:"50%",cursor:"pointer"},"data-url":i.gotoUrl,src:i.logoUrl,onClick:n},null)])]))])]),e("div",{class:"bg_white mg_b_20 pd_b_20"},[e("div",{class:"bg_white mg_b_20 pd_20 gridCols5"},[r.map(i=>e(s,null,[e("div",null,[e("div",{style:{margin:"10px"}},[i.name[p.value]]),e("img",{style:{margin:"auto",width:"50%",cursor:"pointer"},"data-url":i.gotoUrl,src:i.logoUrl,onClick:n},null)])]))])]),e("div",{class:"bg_white mg_b_20 pd_b_20"},[e("div",{class:"bg_white mg_b_20 pd_20 gridCols5"},[r.map(i=>e(s,null,[e("div",null,[e("div",{style:{margin:"10px"}},[i.name[p.value]]),e("img",{style:{margin:"auto",width:"50%",cursor:"pointer"},"data-url":i.gotoUrl,src:i.logoUrl,onClick:n},null)])]))])])])}}});export{R as default};
