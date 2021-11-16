import{u}from"./FavouriteStore.7bf40685.js";import{q as c,p as d,C as _}from"./ant-design-vue.d54a5a56.js";import{u as j}from"./vue-i18n.df730e9c.js";import{a as m}from"./index.6e402105.js";import{d as b}from"./itb_logo_gray.5050f3d7.js";import{u as f}from"./vue-router.85e08d32.js";import{s as n}from"./index.module.c5e11e53.js";import{S as y}from"./Config.41849c7b.js";import{p as v}from"./@ant-design.08538744.js";import{d as p,k as t}from"./@vue.f0a33739.js";import{d as g}from"./avator_red.2a3a1020.js";import"./@rpdg.e35df5be.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./nprogress.35503c85.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";import"./axios.7aed06b8.js";import"./@ctrl.2e36ce53.js";var I=p({name:"Favourite_CompanyList",setup(i){const{appStore:r}=m(),{favoriteStore:e}=u();let l=f();function s(o){l.push(`/exhibitors/${o}`)}return()=>{var o;return t(c,{itemLayout:"vertical",dataSource:(o=e.data)==null?void 0:o.companyList},{renderItem:({item:a})=>t(c.Item,{class:`${n.listItem} `},{default:()=>[t(c.Item.Meta,null,{title:()=>t("div",{class:"cursor_hand",onClick:()=>s(a.barcode)},[r.isEn?a.companyname_en:a.companyname_cn]),avatar:()=>a.company_logo!=null&&a.company_logo!=""?t("div",{style:"width:64px;height:64px;"},[t("div",{class:"squareItem2"},[t("img",{class:"cursor_hand",src:`${y}${a.company_logo}`,onClick:()=>s(a.barcode)},null)])]):t("img",{class:`cursor_hand ${n.avatar}`,src:b,onClick:()=>s(a.barcode)},null)})],extra:()=>t(v,{style:{fontSize:"24px",color:"#FFB329"}},null)})})}}}),h=p({name:"Favourite_ContactList",setup(i){const{appStore:r}=m(),{favoriteStore:e}=u();let l=f();function s(o,a){a.substr(0,1)!=="1"&&a.substr(0,1)!=="4"&&a.substr(0,1)!=="7"?l.push(`/buyer/${a}`):l.push(`/exhibitors/${o}/contact/${a}`)}return()=>{var o;return t(c,{itemLayout:"vertical",dataSource:(o=e.data)==null?void 0:o.concatList},{renderItem:({item:a})=>t(c.Item,{class:n.listItem},{default:()=>[t(c.Item.Meta,null,{title:()=>t("div",{class:"cursor_hand",onClick:()=>s(a.barcode,a.employee_id)},[r.isEn?`${a.firstname}  ${a.lastname}`:a.lastname_cn+a.firstname_cn]),description:()=>t("div",{class:n.content},[r.isEn?a.company:a.company_cn]),avatar:()=>a.HeadImageUrl!=null&&a.HeadImageUrl!=""?t("img",{class:`cursor_hand ${n.avatar}`,src:`${y}${a.HeadImageUrl}`,onClick:()=>s(a.barcode,a.employee_id)},null):t("img",{class:`cursor_hand ${n.avatar}`,src:g,onClick:()=>s(a.barcode,a.employee_id)},null)})],extra:()=>t(v,{style:{fontSize:"24px",color:"#FFB329"}},null)})})}}}),S=p({name:"Favourite_ProductList",setup(i){const{appStore:r}=m(),{favoriteStore:e}=u();let l=f();function s(o){l.push(`/products/${o}`)}return()=>{var o;return t(c,{itemLayout:"vertical",dataSource:(o=e.data)==null?void 0:o.productList},{renderItem:({item:a})=>t(c.Item,{class:n.listItem},{default:()=>[t(c.Item.Meta,null,{title:()=>t("div",{class:"cursor_hand",onClick:()=>s(a.id)},[r.isEn?a.product_name_en:a.product_name]),description:()=>t("div",{class:n.content},[r.isEn?a.product_comment_en:a.product_comment]),avatar:()=>a.pic_filename!=null&&a.pic_filename!=""?t("img",{class:`cursor_hand ${n.avatar}`,src:a.pic_path+"/"+a.pic_filename,onClick:()=>s(a.id)},null):t("img",{class:`cursor_hand ${n.avatar}`,src:b,onClick:()=>s(a.id)},null)})],extra:()=>t(v,{style:{fontSize:"24px",color:"#FFB329"}},null)})})}}}),aa=p({name:"Favourite",setup(){const{t:i}=j();let{favoriteStore:r}=u();return()=>t(_,{title:i("myItb.dockIcons.favourite")},{default:()=>[t(d,{defaultActiveKey:1,style:{marginTop:"-24px"}},{default:()=>[t(d.TabPane,{key:1,tab:i("myItb.favourite.contact")},{default:()=>{var e;return[((e=r.data)==null?void 0:e.concatList)&&t(h,null,null)]}}),t(d.TabPane,{key:2,tab:i("myItb.favourite.company")},{default:()=>{var e;return[((e=r.data)==null?void 0:e.companyList)&&t(I,null,null)]}}),t(d.TabPane,{key:3,tab:i("myItb.favourite.products")},{default:()=>{var e;return[((e=r.data)==null?void 0:e.productList)&&t(S,null,null)]}})]})]})}});export{aa as default};
