import{s as u,u as L,v as w}from"./ant-design-vue.2fa23891.js";import{_ as S,g as I,c as $,a as k,S as j}from"./index.85c56bf3.js";import{u as A}from"./vue-i18n.97207468.js";import{M as E}from"./MainSectionHead.7e49931e.js";import{d as D}from"./vue-router.c781243b.js";import{d as b}from"./avator_red.2a3a1020.js";import{d as m}from"./itb_logo_gray.5050f3d7.js";import{d as C,c as M,o as P,O as y,S as z,k as a,Q as s,U as r,F as q,R as B,u as c,Y as i,W as H,X as N}from"./@vue.c3fad188.js";import"./@babel.a04268fa.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.f49dba90.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.647f38fa.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.2a67823e.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.f1721d35.js";const V=C({props:{keyword:{type:String,required:!1,default:""}},components:{MainSectionHead:E,AList:u,AListItem:u.Item,AListItemMeta:u.Item.Meta,RouterLink:D},setup(e){const{t:f}=A(),{appStore:h}=k();let d=M({companyList:[],concatList:[],productList:[]});P(()=>{e.keyword&&I(`Common/GlobalSearch?keyword=${e.keyword}&limit=60`).then(o=>{d.companyList=o.companyList,d.concatList=o.concatList,d.productList=o.productList})});function v(o,n){return n.substr(0,1)==="1"||n.substr(0,1)==="4"?"/exhibitors/"+n+"/contact/"+n:"/exhibitors/"+o+"/contact/"+n}function g(o){return o!=null&&o!=""?j+o:m}function l(o){return o!=null&&o!=""?o:m}function _(o){return o!=null&&o!=""?j+o:b}return{defaultAvator:b,defaultLogo:m,gotoContact:v,isEn:h.isEn,paddingSrc:$,results:d,t:f,showDefaultLogo:g,showDefaultAvator:_,showDefaultProduct:l}}}),F=e=>(H("data-v-21d11f5f"),e=e(),N(),e),R={class:"pd_20 bg_white mg_b_20"},U={class:"logo"},G={class:"squareItem2"},O=["src"],Q={class:"pd_20 bg_white mg_b_20"},T={class:"logo"},W={class:"squareItem2"},X=["src"],Y={class:"mg_t_10"},J=F(()=>r("br",null,null,-1)),K={class:"pd_20 bg_white mg_b_20"},Z=["src"],x={class:"clip_4_line"};function tt(e,f,h,d,v,g){const l=y("main-section-head"),_=y("router-link"),o=L,n=w,p=u;return B(),z(q,null,[a(l,{redLead:!1},{default:s(()=>[c(i(e.t("homePage.search_reaults_company")),1)]),_:1}),r("div",R,[a(p,{"item-layout":"horizontal","data-source":e.results.companyList},{renderItem:s(({item:t})=>[a(n,null,{default:s(()=>[a(o,null,{title:s(()=>[a(_,{to:`/exhibitors/${t.barcode}`},{default:s(()=>[c(i(e.isEn||t.company_cn===""?t.company:t.company_cn),1)]),_:2},1032,["to"])]),avatar:s(()=>[r("div",U,[r("div",G,[r("img",{src:e.showDefaultLogo(t.company_logo)},null,8,O)])])]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"])]),a(l,{redLead:!1},{default:s(()=>[c(i(e.t("homePage.search_reaults_contactor")),1)]),_:1}),r("div",Q,[a(p,{"item-layout":"horizontal","data-source":e.results.concatList},{renderItem:s(({item:t})=>[a(n,null,{default:s(()=>[a(o,null,{title:s(()=>[a(_,{to:e.gotoContact(`${t.parent_barcode}`,`${t.barcode}`)},{default:s(()=>[c(i(e.isEn?`${t.firstname} ${t.lastname}`:`${t.lastname}${t.firstname}`),1)]),_:2},1032,["to"])]),avatar:s(()=>[r("div",T,[r("div",W,[r("img",{src:e.showDefaultAvator(t.HeadImageUrl)},null,8,X)])])]),description:s(()=>[r("div",Y,[c(i(e.isEn?t.company:t.company_cn)+" ",1),J,c(" "+i(t.job_title),1)])]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"])]),a(l,{redLead:!1},{default:s(()=>[c(i(e.t("homePage.search_reaults_product")),1)]),_:1}),r("div",K,[a(p,{"item-layout":"horizontal","data-source":e.results.productList},{renderItem:s(({item:t})=>[a(n,null,{default:s(()=>[a(o,null,{title:s(()=>[a(_,{to:`/products/${t.id}`},{default:s(()=>[c(i(e.isEn?t.product_name_en:t.product_name),1)]),_:2},1032,["to"])]),avatar:s(()=>[r("img",{class:"productslogo",src:e.showDefaultProduct(`${t.pic_path}/${t.pic_filename}`)},null,8,Z)]),description:s(()=>[r("div",x,i(e.isEn?t.product_comment_en:t.product_comment),1)]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"])])],64)}var Et=S(V,[["render",tt],["__scopeId","data-v-21d11f5f"]]);export{Et as default};
