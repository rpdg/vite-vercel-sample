import{s as p,u as L,v as S}from"./ant-design-vue.fcf1ac88.js";import{_ as w,g as I,c as $,a as k,S as b}from"./index.fb345625.js";import{u as A}from"./vue-i18n.1e3f796f.js";import{M as C}from"./MainSectionHead.713b3d1f.js";import{d as D}from"./vue-router.b7316d96.js";import{d as g}from"./avator_red.2a3a1020.js";import{d as u}from"./itb_logo_gray.5050f3d7.js";import{d as E,c as M,o as q,O as y,S as z,k as a,Q as s,U as n,F as B,R as H,u as i,Y as c,W as N,X as P}from"./@vue.ca0c2fb5.js";import"./@babel.a04268fa.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./@ant-design.45c2fd2e.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.647f38fa.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@rpdg.9741c2f9.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.08638ec1.js";const V=E({props:{keyword:{type:String,required:!1,default:""}},components:{MainSectionHead:C,AList:p,AListItem:p.Item,AListItemMeta:p.Item.Meta,RouterLink:D},setup(e){const{t:m}=A(),{appStore:f}=k();let d=M({companyList:[],concatList:[],productList:[]});q(()=>{e.keyword&&I(`Common/GlobalSearch?keyword=${e.keyword}&limit=60`).then(t=>{d.companyList=t.companyList,d.concatList=t.concatList,d.productList=t.productList})});function h(t,r){return r.substr(0,1)==="1"||r.substr(0,1)==="4"?"/exhibitors/"+r+"/contact/"+r:"/exhibitors/"+t+"/contact/"+r}function v(t){return t!=null&&t!=""?b+t:u}function l(t){return t!=null&&t!=""?t:u}function _(t){return t!=null&&t!=""?b+t:g}return{defaultAvator:g,defaultLogo:u,gotoContact:h,isEn:f.isEn,paddingSrc:$,results:d,t:m,showDefaultLogo:v,showDefaultAvator:_,showDefaultProduct:l}}}),F=e=>(N("data-v-2be24d04"),e=e(),P(),e),R={class:"pd_20 bg_white mg_b_20"},U={class:"logo"},x={class:"squareItem2"},G=["src"],O={class:"pd_20 bg_white mg_b_20"},Q={class:"logo"},T={class:"squareItem2"},W=["src"],X={class:"mg_t_10"},Y=F(()=>n("br",null,null,-1));function J(e,m,f,d,h,v){const l=y("main-section-head"),_=y("router-link"),t=L,r=S,j=p;return H(),z(B,null,[a(l,{redLead:!1},{default:s(()=>[i(c(e.t("homePage.search_reaults_company")),1)]),_:1}),n("div",R,[a(j,{"item-layout":"horizontal","data-source":e.results.companyList},{renderItem:s(({item:o})=>[a(r,null,{default:s(()=>[a(t,null,{title:s(()=>[a(_,{to:`/exhibitors/${o.barcode}`},{default:s(()=>[i(c(e.isEn||o.company_cn===""?o.company:o.company_cn),1)]),_:2},1032,["to"])]),avatar:s(()=>[n("div",U,[n("div",x,[n("img",{src:e.showDefaultLogo(o.company_logo)},null,8,G)])])]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"])]),a(l,{redLead:!1},{default:s(()=>[i(c(e.t("homePage.search_reaults_contactor")),1)]),_:1}),n("div",O,[a(j,{"item-layout":"horizontal","data-source":e.results.concatList},{renderItem:s(({item:o})=>[a(r,null,{default:s(()=>[a(t,null,{title:s(()=>[a(_,{to:e.gotoContact(`${o.parent_barcode}`,`${o.barcode}`)},{default:s(()=>[i(c(e.isEn?`${o.firstname} ${o.lastname}`:`${o.lastname}${o.firstname}`),1)]),_:2},1032,["to"])]),avatar:s(()=>[n("div",Q,[n("div",T,[n("img",{src:e.showDefaultAvator(o.HeadImageUrl)},null,8,W)])])]),description:s(()=>[n("div",X,[i(c(e.isEn?o.company:o.company_cn)+" ",1),Y,i(" "+c(o.job_title),1)])]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"])])],64)}var $t=w(V,[["render",J],["__scopeId","data-v-2be24d04"]]);export{$t as default};
