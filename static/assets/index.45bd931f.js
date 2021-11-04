import{u as d}from"./FavouriteStore.d55e03a9.js";import{o as s,l as u,C as b}from"./ant-design-vue.f58d1dfe.js";import{u as _}from"./vue-i18n.91e137c0.js";import{a as m}from"./index.03db05d1.js";import{p as f}from"./Image.bfd5119e.js";import{d as j}from"./itb_logo_gray.5050f3d7.js";import{u as v}from"./vue-router.3cf61558.js";import{s as i}from"./index.module.25c2564a.js";import{A as y}from"./@ant-design.28314839.js";import{d as p,k as t}from"./@vue.5a203696.js";import{d as g}from"./avator_red.2a3a1020.js";import"./@babel.a04268fa.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.e6447313.js";import"./source-map.3671d69c.js";import"./vue.a418a381.js";import"./nprogress.dae1515a.js";import"./axios.7aed06b8.js";import"./@ctrl.2e36ce53.js";import"./BlankGif.8ca146ab.js";import"./Config.87ac60ee.js";var I=p({name:"Favourite_CompanyList",setup(c){const{appStore:r}=m(),{favoriteStore:o}=d();let l=v();function n(e){l.push("/exhibitors/"+e)}return()=>{var e;return t(s,{itemLayout:"vertical",dataSource:(e=o.data)==null?void 0:e.companyList},{renderItem:({item:a})=>t(s.Item,{class:`${i.listItem} `},{default:()=>[t(s.Item.Meta,null,{title:()=>t("div",{class:"cursor_hand",onClick:()=>n(a.barcode)},[r.isEn?a.companyname_en:a.companyname_cn]),avatar:()=>t("img",{class:`cursor_hand ${i.avatar}`,src:f(a.company_logo,j),onClick:()=>n(a.barcode)},null)})],extra:()=>t(y,{style:{fontSize:"24px",color:"#FFB329"}},null)})})}}}),S=p({name:"Favourite_ContactList",setup(c){const{appStore:r}=m(),{favoriteStore:o}=d();let l=v();function n(e,a){l.push(`/exhibitors/${e}/contact/${a}`)}return()=>{var e;return t(s,{itemLayout:"vertical",dataSource:(e=o.data)==null?void 0:e.concatList},{renderItem:({item:a})=>t(s.Item,{class:i.listItem},{default:()=>[t(s.Item.Meta,null,{title:()=>t("div",{class:"cursor_hand",onClick:()=>n(a.barcode,a.employee_id)},[r.isEn?`${a.firstname}  ${a.lastname}`:a.lastname_cn+a.firstname_cn]),description:()=>t("div",{class:i.content},[r.isEn?a.company:a.company_cn]),avatar:()=>t("img",{class:`cursor_hand ${i.avatar}`,src:f(a.HeadImageUrl,g),onClick:()=>n(a.barcode,a.employee_id)},null)})],extra:()=>t(y,{style:{fontSize:"24px",color:"#FFB329"}},null)})})}}}),L=p({name:"Favourite_ProductList",setup(c){const{appStore:r}=m(),{favoriteStore:o}=d();let l=v();function n(e){l.push(`/products/${e}`)}return()=>{var e;return t(s,{itemLayout:"vertical",dataSource:(e=o.data)==null?void 0:e.productList},{renderItem:({item:a})=>t(s.Item,{class:i.listItem},{default:()=>[t(s.Item.Meta,null,{title:()=>t("div",{class:"cursor_hand",onClick:()=>n(a.id)},[r.isEn?a.product_name_en:a.product_name]),description:()=>t("div",{class:i.content},[r.isEn?a.product_comment_en:a.product_comment]),avatar:()=>t("img",{class:`cursor_hand ${i.avatar}`,src:f(a.pic_filename,j),onClick:()=>n(a.id)},null)})],extra:()=>t(y,{style:{fontSize:"24px",color:"#FFB329"}},null)})})}}}),at=p({name:"Favourite",setup(){const{t:c}=_();let{favoriteStore:r}=d();return()=>t(b,{title:c("myItb.dockIcons.favourite")},{default:()=>[t(u,{defaultActiveKey:1,style:{marginTop:"-24px"}},{default:()=>[t(u.TabPane,{key:1,tab:c("myItb.favourite.contact")},{default:()=>{var o;return[((o=r.data)==null?void 0:o.concatList)&&t(S,null,null)]}}),t(u.TabPane,{key:2,tab:c("myItb.favourite.company")},{default:()=>{var o;return[((o=r.data)==null?void 0:o.companyList)&&t(I,null,null)]}}),t(u.TabPane,{key:3,tab:c("myItb.favourite.products")},{default:()=>{var o;return[((o=r.data)==null?void 0:o.productList)&&t(L,null,null)]}})]})]})}});export{at as default};
