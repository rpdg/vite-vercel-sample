import{u}from"./FavouriteStore.b60c025b.js";import{o as s,l as d,C as j}from"./ant-design-vue.e660bee2.js";import{u as _}from"./vue-i18n.0711e616.js";import{a as m}from"./index.38f2740c.js";import{p as f}from"./Image.bfd5119e.js";import{d as b}from"./itb_logo_gray.5050f3d7.js";import{u as v}from"./vue-router.8ec3c3d8.js";import{s as i}from"./index.module.25c2564a.js";import{A as y}from"./@ant-design.2067dcee.js";import{d as p,k as t}from"./@vue.fa05379c.js";import{d as g}from"./avator_red.2a3a1020.js";import"./@babel.a04268fa.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./nprogress.35503c85.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./axios.7aed06b8.js";import"./@ctrl.2e36ce53.js";import"./BlankGif.8ca146ab.js";import"./Config.87ac60ee.js";var I=p({name:"Favourite_CompanyList",setup(c){const{appStore:r}=m(),{favoriteStore:e}=u();let l=v();function n(o){l.push("/exhibitors/"+o)}return()=>{var o;return t(s,{itemLayout:"vertical",dataSource:(o=e.data)==null?void 0:o.companyList},{renderItem:({item:a})=>t(s.Item,{class:`${i.listItem} `},{default:()=>[t(s.Item.Meta,null,{title:()=>t("div",{class:"cursor_hand",onClick:()=>n(a.barcode)},[r.isEn?a.companyname_en:a.companyname_cn]),avatar:()=>t("img",{class:`cursor_hand ${i.avatar}`,src:f(a.company_logo,b),onClick:()=>n(a.barcode)},null)})],extra:()=>t(y,{style:{fontSize:"24px",color:"#FFB329"}},null)})})}}}),S=p({name:"Favourite_ContactList",setup(c){const{appStore:r}=m(),{favoriteStore:e}=u();let l=v();function n(o,a){l.push(`/exhibitors/${o}/contact/${a}`)}return()=>{var o;return t(s,{itemLayout:"vertical",dataSource:(o=e.data)==null?void 0:o.concatList},{renderItem:({item:a})=>t(s.Item,{class:i.listItem},{default:()=>[t(s.Item.Meta,null,{title:()=>t("div",{class:"cursor_hand",onClick:()=>n(a.barcode,a.employee_id)},[r.isEn?`${a.firstname}  ${a.lastname}`:a.lastname_cn+a.firstname_cn]),description:()=>t("div",{class:i.content},[r.isEn?a.company:a.company_cn]),avatar:()=>t("img",{class:`cursor_hand ${i.avatar}`,src:f(a.HeadImageUrl,g),onClick:()=>n(a.barcode,a.employee_id)},null)})],extra:()=>t(y,{style:{fontSize:"24px",color:"#FFB329"}},null)})})}}}),L=p({name:"Favourite_ProductList",setup(c){const{appStore:r}=m(),{favoriteStore:e}=u();let l=v();function n(o){l.push(`/products/${o}`)}return()=>{var o;return t(s,{itemLayout:"vertical",dataSource:(o=e.data)==null?void 0:o.productList},{renderItem:({item:a})=>t(s.Item,{class:i.listItem},{default:()=>[t(s.Item.Meta,null,{title:()=>t("div",{class:"cursor_hand",onClick:()=>n(a.id)},[r.isEn?a.product_name_en:a.product_name]),description:()=>t("div",{class:i.content},[r.isEn?a.product_comment_en:a.product_comment]),avatar:()=>t("img",{class:`cursor_hand ${i.avatar}`,src:f(a.pic_filename,b),onClick:()=>n(a.id)},null)})],extra:()=>t(y,{style:{fontSize:"24px",color:"#FFB329"}},null)})})}}}),at=p({name:"Favourite",setup(){const{t:c}=_();let{favoriteStore:r}=u();return()=>t(j,{title:c("myItb.dockIcons.favourite")},{default:()=>[t(d,{defaultActiveKey:1,style:{marginTop:"-24px"}},{default:()=>[t(d.TabPane,{key:1,tab:c("myItb.favourite.contact")},{default:()=>{var e;return[((e=r.data)==null?void 0:e.concatList)&&t(S,null,null)]}}),t(d.TabPane,{key:2,tab:c("myItb.favourite.company")},{default:()=>{var e;return[((e=r.data)==null?void 0:e.companyList)&&t(I,null,null)]}}),t(d.TabPane,{key:3,tab:c("myItb.favourite.products")},{default:()=>{var e;return[((e=r.data)==null?void 0:e.productList)&&t(L,null,null)]}})]})]})}});export{at as default};
