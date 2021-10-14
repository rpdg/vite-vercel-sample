import{u}from"./FavouriteStore.4efe020d.js";import{n as s,l as p,C as b}from"./ant-design-vue.0721aa65.js";import{u as j}from"./vue-i18n.0711e616.js";import{S as y}from"./Config.87ac60ee.js";import{u as m}from"./index.ca77624f.js";import{u as f}from"./vue-router.8ec3c3d8.js";import{s as c}from"./index.module.b3e7dc10.js";import{p as v}from"./@ant-design.8f5596ac.js";import{d,k as a}from"./@vue.fa05379c.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./nprogress.35503c85.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./axios.a57df465.js";import"./@ctrl.2e36ce53.js";var _=d({name:"Favourite_CompanyList",setup(i){const{appStore:r}=m(),{favoriteStore:e}=u();let l=f();function n(o){l.push("/exhibitors/"+o)}return()=>{var o;return a(s,{itemLayout:"vertical",dataSource:(o=e.data)==null?void 0:o.companyList},{renderItem:({item:t})=>a(s.Item,{class:`${c.listItem} `},{default:()=>[a(s.Item.Meta,null,{title:()=>a("div",{class:"cursor_hand",onClick:()=>n(t.barcode)},[r.isEn?t.companyname_en:t.companyname_cn]),avatar:()=>a("img",{class:`cursor_hand ${c.avatar}`,src:`${y}${t.company_logo}`,onClick:()=>n(t.barcode)},null)})],extra:()=>a(v,{style:{fontSize:"24px",color:"#FFB329"}},null)})})}}}),S=d({name:"Favourite_ContactList",setup(i){const{appStore:r}=m(),{favoriteStore:e}=u();let l=f();function n(o,t){l.push(`/exhibitors/${o}/contact/${t}`)}return()=>{var o;return a(s,{itemLayout:"vertical",dataSource:(o=e.data)==null?void 0:o.concatList},{renderItem:({item:t})=>a(s.Item,{class:c.listItem},{default:()=>[a(s.Item.Meta,null,{title:()=>a("div",{class:"cursor_hand",onClick:()=>n(t.barcode,t.employee_id)},[r.isEn?`${t.firstname}  ${t.lastname}`:t.lastname_cn+t.firstname_cn]),description:()=>a("div",{class:c.content},[r.isEn?t.company:t.company_cn]),avatar:()=>a("img",{class:`cursor_hand ${c.avatar}`,src:`${y}${t.HeadImageUrl}`,onClick:()=>n(t.barcode,t.employee_id)},null)})],extra:()=>a(v,{style:{fontSize:"24px",color:"#FFB329"}},null)})})}}}),I=d({name:"Favourite_ProductList",setup(i){const{appStore:r}=m(),{favoriteStore:e}=u();let l=f();function n(o){l.push(`/products/${o}`)}return()=>{var o;return a(s,{itemLayout:"vertical",dataSource:(o=e.data)==null?void 0:o.productList},{renderItem:({item:t})=>a(s.Item,{class:c.listItem},{default:()=>[a(s.Item.Meta,null,{title:()=>a("div",{class:"cursor_hand",onClick:()=>n(t.id)},[r.isEn?t.product_name_en:t.product_name]),description:()=>a("div",{class:c.content},[r.isEn?t.product_comment_en:t.product_comment]),avatar:()=>a("img",{class:`cursor_hand ${c.avatar}`,src:`${t.pic_path}/${t.pic_filename}`,onClick:()=>n(t.id)},null)})],extra:()=>a(v,{style:{fontSize:"24px",color:"#FFB329"}},null)})})}}}),Q=d({name:"Favourite",setup(){const{t:i}=j();let{favoriteStore:r}=u();return()=>a(b,{title:i("myItb.dockIcons.favourite")},{default:()=>[a(p,{defaultActiveKey:1,style:{marginTop:"-24px"}},{default:()=>[a(p.TabPane,{key:1,tab:i("myItb.favourite.contact")},{default:()=>{var e;return[((e=r.data)==null?void 0:e.concatList)&&a(S,null,null)]}}),a(p.TabPane,{key:2,tab:i("myItb.favourite.company")},{default:()=>{var e;return[((e=r.data)==null?void 0:e.companyList)&&a(_,null,null)]}}),a(p.TabPane,{key:3,tab:i("myItb.favourite.products")},{default:()=>{var e;return[((e=r.data)==null?void 0:e.productList)&&a(I,null,null)]}})]})]})}});export{Q as default};
