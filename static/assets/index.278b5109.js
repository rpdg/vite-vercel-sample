var L=Object.defineProperty;var O=(t,e,s)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var w=(t,e,s)=>(O(t,typeof e!="symbol"?e+"":e,s),s);import{d as S,c as E,w as M,I as x,B as y,k as o,i as Y,t as B,u as I,F as P,z as R}from"./@vue.f0a33739.js";import{M as T}from"./MainSectionHead.99c217de.js";import{p as N,a as C}from"./index.0bceb754.js";import{B as V,l as z}from"./@rpdg.e35df5be.js";import{p as u,w as A,s as f}from"./ant-design-vue.a99caae8.js";import{h as v}from"./moment.29305b8e.js";import{u as F}from"./vue-i18n.df730e9c.js";import{d as H}from"./vue-router.85e08d32.js";import{s as j}from"./index.module.6e348a91.js";import"./nprogress.35503c85.js";import"./@ant-design.dd8d38e4.js";import"./@ctrl.2e36ce53.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";var U=Object.defineProperty,G=Object.getOwnPropertyDescriptor,$=(t,e,s,a)=>{for(var i=a>1?void 0:a?G(e,s):e,c=t.length-1,d;c>=0;c--)(d=t[c])&&(i=(a?d(e,s,i):d(i))||i);return a&&i&&U(e,s,i),i};class D extends V{constructor(){super();w(this,"eventList")}async getEventList(e){let s=e.month.startOf("month").format("YYYY-MM-DD 00:00:00"),a=e.month.endOf("month").format("YYYY-MM-DD 23:59:59");this.eventList=await N("NewActivity/EventList",{isOnline:e.isOnline,beginDateTime:s,endDateTime:a})}}$([z],D.prototype,"getEventList",1);let q=new D;const J=function(){return{eventsStoreStore:q}};function b(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!Y(t)}var ye=S({name:"EventList",setup(){var _,g;const{t}=F();let{eventsStoreStore:e}=J();const{appStore:s}=C(),a=s.isEn?"en":"cn",i={from:v((_=s.exhibitionDate)==null?void 0:_.onlineBeginDateTime).startOf("month"),to:v((g=s.exhibitionDate)==null?void 0:g.onlineEndDateTime).endOf("month")},c=r=>r<i.from||r>i.to,d=()=>!1;let l=E({isOnline:!1,month:v(i.from)});return M(l,r=>{e.getEventList(y(r))}),x(()=>{e.getEventList(y(l))}),()=>{var h;let r,m,p;return o(P,null,[o(T,{redLead:!1},b(r=t("menu.events"))?r:{default:()=>[r]}),o("div",{class:"pd_20 bg_white mg_b_20 pd_left_0"},[B(o(u.Group,{value:l.isOnline,"onUpdate:value":n=>l.isOnline=n},{default:()=>[o(u.Button,{value:!0},b(m=t("events.online"))?m:{default:()=>[m]}),o(u.Button,{value:!1},b(p=t("events.offline"))?p:{default:()=>[p]})]}),[[R,d()]]),o("span",{class:"mg_l_20"},[o(A,{disabledDate:c,allowClear:!1,value:l.month,"onUpdate:value":n=>l.month=n},null)])]),o("div",{class:"pd_20 bg_white"},[o(f,{loading:e.loading,itemLayout:"vertical",dataSource:(h=e.eventList)==null?void 0:h.filter(n=>n.bgcolor===a)},{renderItem:({item:n})=>o(f.Item,{class:j.verticalListItem},{default:()=>[o(f.Item.Meta,null,{title:()=>o(H,{to:`/conference/${n.activity_content_id}`},{default:()=>[n.actitivity_content_title]}),description:()=>o("div",{class:j.content},[n.actitivity_content_begindate.split(" ")[0]," ",n.actitivity_content_time,I(" "),o("br",null,null),n.location]),avatar:()=>o("img",{class:j.avatar,src:n.coverpicture},null)})]})})])])}}});export{ye as default};
