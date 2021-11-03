var $=Object.defineProperty;var D=(e,o,r)=>o in e?$(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r;var v=(e,o,r)=>(D(e,typeof o!="symbol"?o+"":o,r),r);import{B as G,p as R,l as B}from"./index.2d426314.js";import{f as K,d as A,j as E,k as t,u as S,l as q,o as H,c as J,i as Q,F as z}from"./@vue.f0f90a02.js";import{u as U,v as W,F as x,R as V,h as T,I as O,e as y,n as P,m as X}from"./ant-design-vue.84b208bc.js";import{u as Y}from"./vue-i18n.8989ea2a.js";import{s as Z}from"./index.module.c389607c.js";import"./vue-router.65bc85cf.js";import"./moment.29305b8e.js";import"./@ant-design.b29a0759.js";import"./@ctrl.2e36ce53.js";import"./nprogress.8b9ed5b7.js";import"./axios.19d3e859.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.35d5f340.js";import"./source-map.3671d69c.js";import"./vue.8bc7d658.js";var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,j=(e,o,r,n)=>{for(var i=n>1?void 0:n?te(o,r):o,a=e.length-1,p;a>=0;a--)(p=e[a])&&(i=(n?p(o,r,i):p(i))||i);return n&&i&&ee(o,r,i),i},u;(function(e){e.furniture="furniture",e.power="power",e.other="other"})(u||(u={}));class g extends G{constructor(o){super();v(this,"reserveType");v(this,"currentLng");v(this,"resourceList");v(this,"serviceList");v(this,"sumApplyPrice",0);v(this,"sumServicePrice",0);v(this,"pageIndex",0);v(this,"pageSize",10);v(this,"totalRecords",0);this.reserveType=o}async fetchServiceList(o,r){let n=await R("Operation/Getservicelistbyuser",{reservetype:this.reserveType,currentlng:this.currentLng,pageIndex:o,pageSize:r||this.pageSize});this.serviceList=n.results,this.pageIndex=o,this.totalRecords=n.totalRecord}async getServiceSum(){var r;let o=await R("Operation/Getservicelisttotalsumbyuser",{pageIndex:0,reservetype:this.reserveType,currentlng:this.currentLng});return this.sumServicePrice=((r=o[0])==null?void 0:r.totalsum)||0,this.sumServicePrice}async fetchResources(){let o=await R("Operation/getAllresource",{reservetype:this.reserveType,currentlng:this.currentLng});o.forEach(r=>{r.quantity=0}),this.resourceList=o}caculateSum(){var r;let o=0;(r=this.resourceList)==null||r.forEach(n=>{o+=n.quantity*n.unitprice}),this.sumApplyPrice=o}async postResourceApply(o,r,n){var p,m;const i=(p=this.resourceList)==null?void 0:p.map(h=>h.itemno).join("|"),a=(m=this.resourceList)==null?void 0:m.map(h=>h.quantity).join("|");await R("/Operation/AddResource",{reservetype:this.reserveType,currentlng:this.currentLng,contactperson:o,contactemail:r,contactphone:n,itemno:i,itemqty:a})}}j([B],g.prototype,"fetchServiceList",1);j([B],g.prototype,"getServiceSum",1);j([B],g.prototype,"fetchResources",1);j([B],g.prototype,"postResourceApply",1);const C=function(e,o){const r=new g(e);return r.currentLng=o,K(()=>{r.serviceList=void 0,r.pageIndex=0,r.totalRecords=0}),{serviceStore:r}};var oe="/assets/funitureicon.c560a427.png",re="/assets/funitureicon2.d851f585.png",ne="/assets/furniture.d51494e7.jpg",ie="/assets/Furniture1.44075b44.jpg",se="/assets/Furniture2.07d9b4a8.jpg",F=A({name:"ServiceApplyTable",props:{t:{type:Function,required:!0},serviceStore:{type:Object,required:!0}},setup(e){const{t:o,serviceStore:r}=e;let n=E(()=>({current:r.pageIndex,total:r.totalRecords}));const i=[{title:o("planBooth.standno"),dataIndex:"standno"},{title:o("planBooth.exhibitor"),dataIndex:"exhibitor"},{title:o("planBooth.company"),dataIndex:"company"},{title:o("planBooth.serviceRent.contactperson"),dataIndex:"contactperson"},{title:o("planBooth.serviceRent.contactemail"),dataIndex:"contactemail"},{title:o("planBooth.serviceRent.contactphone"),dataIndex:"contactphone"},{title:o("planBooth.company"),dataIndex:"company"},{title:o("planBooth.resource.itemno"),dataIndex:"reserveitemno"},{title:o("planBooth.resource.itemname"),dataIndex:"itemname"},{title:o("planBooth.resource.description"),dataIndex:"description"},{title:o("planBooth.resource.qty"),dataIndex:"reserveqty"},{title:o("planBooth.resource.unitprice"),dataIndex:"unitprice"},{title:o("planBooth.createtime"),dataIndex:"createtime"},{title:o("planBooth.status"),dataIndex:"status",fixed:"right",customRender:({record:a})=>t("b",null,[o(`planBooth.statustype[${a.status}]`)])}];return()=>t("div",{class:"pd_tb_20"},[t(U,{size:"small",bordered:!0,rowKey:"reserveid",columns:i,loading:r.loading,scroll:{x:1400,y:500},dataSource:r.serviceList,pagination:{current:n.value.current,total:n.value.total,onChange:a=>{r.fetchServiceList(a)}}},{title:()=>t("h3",null,[o(`planBooth.serviceRent.list_${r.reserveType}`)]),footer:()=>t("h3",{class:"text_red text_right"},[o("planBooth.resource.totalsum"),S(": "),r.sumServicePrice])})])}}),ae=A({name:"ServiceResourceList",props:{t:{type:Function,required:!0},serviceStore:{type:Object,required:!0}},setup(e){const{t:o,serviceStore:r}=e,n=[{title:o("planBooth.resource.itemno"),dataIndex:"itemno",width:150},{title:o("planBooth.resource.itemname"),dataIndex:"itemname",width:150},{title:o("planBooth.resource.description"),dataIndex:"description"},{title:o("planBooth.resource.unitprice"),dataIndex:"unitprice",width:150},{title:o("planBooth.resource.qty"),dataIndex:"itemno",width:100,customRender({record:i}){return t(W,{value:i.quantity,"onUpdate:value":a=>i.quantity=a,min:0,precision:0,size:"small",style:{width:"50px"},onChange:()=>{r.caculateSum()}},null)}}];return()=>t(U,{dataSource:r.resourceList,rowKey:"itemno",columns:n,scroll:{y:"60vh"},pagination:!1},null)}});function b(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Q(e)}var Fe=A({setup(){const{t:e,locale:o}=Y();let r=o.value==="en-US"?"en":"cn";const n=10,{serviceStore:i}=C(u.furniture,r),{serviceStore:a}=C(u.power,r),{serviceStore:p}=C(u.other,r),m=q(u.furniture),h=q(),l={furniture:i,power:a,other:p};H(()=>{for(let s in l)l[s].fetchServiceList(0,n),l[s].getServiceSum()});const f=q(!1),c=J({company:"",contactemail:"",contactphone:"",contactperson:"",createtime:"",description:"",exhibitor:"",itemname:"",reserveid:0,reserveitemno:"",reserveqty:0,standno:"",status:"",unitprice:0}),k=s=>{P.confirm({centered:!0,title:e(`planBooth.serviceRent.${s===1?"serviceApply":"formTitle"}`),content:t("img",{style:"height:65vh;",src:s===1?ie:se},null),width:"70vh",okText:e("planBooth.serviceRent.download"),cancelText:e("planBooth.serviceRent.cancel"),onOk:()=>{window.open(s===1?"//wapp.itb-china.com/Pages/pc/pages/logistics/serviceRental/service/Furniture1.jpg":"//wapp.itb-china.com/Pages/pc/pages/logistics/serviceRental/service/Furniture2.jpg")}})},M=()=>{f.value=!1},w=async s=>{c.contactperson===""||c.contactemail===""||c.contactphone===""?X.info(e("planBooth.serviceRent.alertinfo")):(m.value=s,await l[s].fetchResources(),f.value=!0)},N=()=>{const s=m.value;l[s].sumApplyPrice>0&&P.confirm({content:t("div",null,[e("planBooth.serviceRent.submitinfo"),t("br",null,null),e("planBooth.serviceRent.submitinfo2")]),onOk:async()=>{await l[s].postResourceApply(c.contactperson,c.contactemail,c.contactphone),f.value=!1,l[s].fetchServiceList(0,n),l[s].getServiceSum(),h.value.resetFields()},okText:e("planBooth.serviceRent.sendApply"),onCancel:()=>{},cancelText:e("planBooth.serviceRent.cancel")})};return()=>{let s,I,L;return t(z,null,[t("div",{class:Z.formInfoSection},[t("img",{src:ne},null),t("div",null,[t("h2",{class:"text_red"},[e("planBooth.serviceRent.formTitle")]),t("div",null,[e("planBooth.serviceRent.info1")]),t("div",null,[e("planBooth.serviceRent.info2")]),t("div",null,[t("b",null,[e("planBooth.serviceRent.info3")]),e("planBooth.serviceRent.info4")]),t("div",null,[e("planBooth.serviceRent.info4_1"),t("span",{style:"color:red;font-weight:bold;"},[e("planBooth.serviceRent.info4_2")]),e("planBooth.serviceRent.info4_3")]),t("div",null,[e("planBooth.serviceRent.info5",{email:"cai.wl@sunhills.cn"})]),t("div",null,[e("planBooth.serviceRent.info6")]),t("div",null,[e("planBooth.serviceRent.info7")]),t("div",null,[e("planBooth.serviceRent.info8",{email:"cherry.gong@syma.com.cn"})]),t("div",null,[e("planBooth.serviceRent.info9")]),t("div",null,[e("planBooth.serviceRent.info10")]),t("div",null,[e("planBooth.serviceRent.info11",{email:"crystal.jiang@syma.com.cn"})]),t("div",null,[e("planBooth.serviceRent.info12")])])]),t("div",null,[e("planBooth.serviceRent.furniturepic")," ",t("img",{onClick:()=>{k(1)},src:oe,width:"32",class:"cursor_hand"},null),t("img",{onClick:()=>{k(2)},src:re,width:"32",class:"cursor_hand"},null),t("br",null,null),t("br",null,null),t(x,{ref:h,model:c},{default:()=>[t(V,{gutter:20},{default:()=>[t(T,{span:12},{default:()=>[t(x.Item,{name:"contactperson",label:e("planBooth.serviceRent.contactperson"),rules:{required:!0,message:""}},{default:()=>[t(O,{type:"text",value:c.contactperson,"onUpdate:value":d=>c.contactperson=d},null)]})]}),t(T,{span:12},{default:()=>[t(x.Item,{name:"contactemail",label:e("planBooth.serviceRent.contactemail"),rules:{required:!0,message:""}},{default:()=>[t(O,{type:"text",value:c.contactemail,"onUpdate:value":d=>c.contactemail=d},null)]})]})]}),t(V,{gutter:20},{default:()=>[t(T,{span:12},{default:()=>[t(x.Item,{name:"contactphone",label:e("planBooth.serviceRent.contactphone"),rules:{required:!0,message:""}},{default:()=>[t(O,{type:"text",value:c.contactphone,"onUpdate:value":d=>c.contactphone=d},null)]})]})]})]}),t("div",{style:"text-align:center;"},[t(y,{type:"primary",onClick:()=>{w(u.furniture)},disabled:!i.serviceList||i.serviceList.length>0,loading:l[u.furniture].loading},b(s=e("planBooth.serviceRent.serviceApply"))?s:{default:()=>[s]}),S("\u2003"),t(y,{type:"primary",onClick:()=>{w(u.power)},disabled:!a.serviceList||a.serviceList.length>0,loading:l[u.power].loading},b(I=e("planBooth.serviceRent.serviceApply2"))?I:{default:()=>[I]}),S("\u2003"),t(y,{type:"primary",onClick:()=>{w(u.other)},disabled:!p.serviceList||p.serviceList.length>0,loading:l[u.other].loading},b(L=e("planBooth.serviceRent.serviceApply3"))?L:{default:()=>[L]})])]),t(P,{visible:f.value,"onUpdate:visible":d=>f.value=d,width:1080,centered:!0,title:e(`planBooth.serviceRent.list_${m.value}`)},{default:()=>[f.value&&t(ae,{t:e,serviceStore:l[m.value]},null)],footer:()=>{let d,_;return t(z,null,[t("b",{class:"text_red",style:{marginRight:"3em"}},[e("planBooth.resource.totalsum"),S(": "),l[m.value].sumApplyPrice]),t(y,{key:"back",onClick:M},b(d=e("common.cancel"))?d:{default:()=>[d]}),t(y,{key:"submit",type:"primary",onClick:N},b(_=e("common.submit"))?_:{default:()=>[_]})])}}),t(F,{t:e,serviceStore:i},null),t(F,{t:e,serviceStore:a},null),t(F,{t:e,serviceStore:p},null)])}}});export{Fe as default};
