import{u}from"./FavouriteStore.674af0b4.js";import{k as s,E as p,C as y}from"./ant-design-vue.33c90099.js";import{u as b}from"./vue-i18n.0711e616.js";import{a as m}from"./index.c213d1c2.js";import{u as f}from"./vue-router.8ec3c3d8.js";import{s as c}from"./index.module.b3e7dc10.js";import{p as v}from"./@ant-design.8f5596ac.js";import{d,k as t}from"./@vue.fa05379c.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./nprogress.35503c85.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./axios.a57df465.js";import"./@ctrl.2e36ce53.js";var j=d({name:"Favourite_CompanyList",setup(i){const{appStore:r}=m(),{favoriteStore:e}=u();let l=f();function n(o){l.push("/exhibitors/"+o)}return()=>{var o;return t(s,{itemLayout:"vertical",dataSource:(o=e.data)==null?void 0:o.companyList},{renderItem:({item:a})=>t(s.Item,{class:`${c.listItem} `},{default:()=>[t(s.Item.Meta,null,{title:()=>t("div",{class:"cursor_hand",onClick:()=>n(a.barcode)},[r.isEn?a.companyname_en:a.companyname_cn]),avatar:()=>t("img",{class:`cursor_hand ${c.avatar}`,src:a.company_logo,onClick:()=>n(a.barcode)},null)})],extra:()=>t(v,{style:{fontSize:"32px",color:"#AB2B2F"}},null)})})}}}),_=d({name:"Favourite_ContactList",setup(i){const{appStore:r}=m(),{favoriteStore:e}=u();let l=f();function n(o,a){l.push(`/exhibitors/${o}/contact/${a}`)}return()=>{var o;return t(s,{itemLayout:"vertical",dataSource:(o=e.data)==null?void 0:o.concatList},{renderItem:({item:a})=>t(s.Item,{class:c.listItem},{default:()=>[t(s.Item.Meta,null,{title:()=>t("div",{class:"cursor_hand",onClick:()=>n(a.barcode,a.employee_id)},[r.isEn?`${a.firstname}  ${a.lastname}`:a.lastname_cn+a.firstname_cn]),description:()=>t("div",{class:c.content},[r.isEn?a.company:a.company_cn]),avatar:()=>t("img",{class:`cursor_hand ${c.avatar}`,src:a.HeadImageUrl,onClick:()=>n(a.barcode,a.employee_id)},null)})],extra:()=>t(v,{style:{fontSize:"32px",color:"#AB2B2F"}},null)})})}}}),I=d({name:"Favourite_ProductList",setup(i){const{appStore:r}=m(),{favoriteStore:e}=u();let l=f();function n(o){l.push(`/products/${o}`)}return()=>{var o;return t(s,{itemLayout:"vertical",dataSource:(o=e.data)==null?void 0:o.productList},{renderItem:({item:a})=>t(s.Item,{class:c.listItem},{default:()=>[t(s.Item.Meta,null,{title:()=>t("div",{class:"cursor_hand",onClick:()=>n(a.id)},[r.isEn?a.product_name_en:a.product_name]),description:()=>t("div",{class:c.content},[r.isEn?a.product_comment_en:a.product_comment]),avatar:()=>t("img",{class:`cursor_hand ${c.avatar}`,src:a.zip_pic_path,onClick:()=>n(a.id)},null)})],extra:()=>t(v,{style:{fontSize:"32px",color:"#AB2B2F"}},null)})})}}}),J=d({name:"Favourite",setup(){const{t:i}=b();let{favoriteStore:r}=u();return()=>t(y,{title:i("myItb.dockIcons.favourite")},{default:()=>[t(p,{defaultActiveKey:1,style:{marginTop:"-24px"}},{default:()=>[t(p.TabPane,{key:1,tab:i("myItb.favourite.contact")},{default:()=>{var e;return[((e=r.data)==null?void 0:e.concatList)&&t(_,null,null)]}}),t(p.TabPane,{key:2,tab:i("myItb.favourite.company")},{default:()=>{var e;return[((e=r.data)==null?void 0:e.companyList)&&t(j,null,null)]}}),t(p.TabPane,{key:3,tab:i("myItb.favourite.products")},{default:()=>{var e;return[((e=r.data)==null?void 0:e.productList)&&t(I,null,null)]}})]})]})}});export{J as default};
