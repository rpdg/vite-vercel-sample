var $=Object.defineProperty;var D=(e,r,o)=>r in e?$(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o;var v=(e,r,o)=>(D(e,typeof r!="symbol"?r+"":r,o),o);import{p as B}from"./index.701896b1.js";import{B as G,l as R}from"./@rpdg.bcb9de75.js";import{f as K,d as A,j as E,k as t,u as S,l as q,o as H,c as J,i as Q,F as z}from"./@vue.92a87908.js";import{G as U,H as W,F as x,j as M,k as T,b as O,g as y,M as P,m as X}from"./ant-design-vue.3fff3ad8.js";import{u as Y}from"./vue-i18n.28a5a3dd.js";import{s as Z}from"./index.module.c389607c.js";import"./vue-router.2704beb0.js";import"./moment.29305b8e.js";import"./@ant-design.754a3742.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.18c06692.js";var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,j=(e,r,o,n)=>{for(var i=n>1?void 0:n?te(r,o):r,a=e.length-1,p;a>=0;a--)(p=e[a])&&(i=(n?p(r,o,i):p(i))||i);return n&&i&&ee(r,o,i),i},u;(function(e){e.furniture="furniture",e.power="power",e.other="other"})(u||(u={}));class g extends G{constructor(r){super();v(this,"reserveType");v(this,"currentLng");v(this,"resourceList");v(this,"serviceList");v(this,"sumApplyPrice",0);v(this,"sumServicePrice",0);v(this,"pageIndex",0);v(this,"pageSize",10);v(this,"totalRecords",0);this.reserveType=r}async fetchServiceList(r,o){let n=await B("Operation/Getservicelistbyuser",{reservetype:this.reserveType,currentlng:this.currentLng,pageIndex:r,pageSize:o||this.pageSize});this.serviceList=n.results,this.pageIndex=r,this.totalRecords=n.totalRecord}async getServiceSum(){var o;let r=await B("Operation/Getservicelisttotalsumbyuser",{pageIndex:0,reservetype:this.reserveType,currentlng:this.currentLng});return this.sumServicePrice=((o=r[0])==null?void 0:o.totalsum)||0,this.sumServicePrice}async fetchResources(){let r=await B("Operation/getAllresource",{reservetype:this.reserveType,currentlng:this.currentLng});r.forEach(o=>{o.quantity=0}),this.resourceList=r}caculateSum(){var o;let r=0;(o=this.resourceList)==null||o.forEach(n=>{r+=n.quantity*n.unitprice}),this.sumApplyPrice=r}async postResourceApply(r,o,n){var p,m;const i=(p=this.resourceList)==null?void 0:p.map(h=>h.itemno).join("|"),a=(m=this.resourceList)==null?void 0:m.map(h=>h.quantity).join("|");await B("/Operation/AddResource",{reservetype:this.reserveType,currentlng:this.currentLng,contactperson:r,contactemail:o,contactphone:n,itemno:i,itemqty:a})}}j([R],g.prototype,"fetchServiceList",1);j([R],g.prototype,"getServiceSum",1);j([R],g.prototype,"fetchResources",1);j([R],g.prototype,"postResourceApply",1);const C=function(e,r){const o=new g(e);return o.currentLng=r,K(()=>{o.serviceList=void 0,o.pageIndex=0,o.totalRecords=0}),{serviceStore:o}};var re="/assets/funitureicon.c560a427.png",oe="/assets/funitureicon2.d851f585.png",ne="/assets/furniture.d51494e7.jpg",ie="/assets/Furniture1.44075b44.jpg",se="/assets/Furniture2.07d9b4a8.jpg",F=A({name:"ServiceApplyTable",props:{t:{type:Function,required:!0},serviceStore:{type:Object,required:!0}},setup(e){const{t:r,serviceStore:o}=e;let n=E(()=>({current:o.pageIndex,total:o.totalRecords}));const i=[{title:r("planBooth.standno"),dataIndex:"standno"},{title:r("planBooth.exhibitor"),dataIndex:"exhibitor"},{title:r("planBooth.company"),dataIndex:"company"},{title:r("planBooth.serviceRent.contactperson"),dataIndex:"contactperson"},{title:r("planBooth.serviceRent.contactemail"),dataIndex:"contactemail"},{title:r("planBooth.serviceRent.contactphone"),dataIndex:"contactphone"},{title:r("planBooth.company"),dataIndex:"company"},{title:r("planBooth.resource.itemno"),dataIndex:"reserveitemno"},{title:r("planBooth.resource.itemname"),dataIndex:"itemname"},{title:r("planBooth.resource.description"),dataIndex:"description"},{title:r("planBooth.resource.qty"),dataIndex:"reserveqty"},{title:r("planBooth.resource.unitprice"),dataIndex:"unitprice"},{title:r("planBooth.createtime"),dataIndex:"createtime"},{title:r("planBooth.status"),dataIndex:"status",fixed:"right",customRender:({record:a})=>t("b",null,[r(`planBooth.statustype[${a.status}]`)])}];return()=>t("div",{class:"pd_tb_20"},[t(U,{size:"small",bordered:!0,rowKey:"reserveid",columns:i,loading:o.loading,scroll:{x:1400,y:500},dataSource:o.serviceList,pagination:{current:n.value.current,total:n.value.total,onChange:a=>{o.fetchServiceList(a)}}},{title:()=>t("h3",null,[r(`planBooth.serviceRent.list_${o.reserveType}`)]),footer:()=>t("h3",{class:"text_red text_right"},[r("planBooth.resource.totalsum"),S(": "),o.sumServicePrice])})])}}),ae=A({name:"ServiceResourceList",props:{t:{type:Function,required:!0},serviceStore:{type:Object,required:!0}},setup(e){const{t:r,serviceStore:o}=e,n=[{title:r("planBooth.resource.itemno"),dataIndex:"itemno",width:150},{title:r("planBooth.resource.itemname"),dataIndex:"itemname",width:150},{title:r("planBooth.resource.description"),dataIndex:"description"},{title:r("planBooth.resource.unitprice"),dataIndex:"unitprice",width:150},{title:r("planBooth.resource.qty"),dataIndex:"itemno",width:100,customRender({record:i}){return t(W,{value:i.quantity,"onUpdate:value":a=>i.quantity=a,min:0,precision:0,size:"small",style:{width:"50px"},onChange:()=>{o.caculateSum()}},null)}}];return()=>t(U,{dataSource:o.resourceList,rowKey:"itemno",columns:n,scroll:{y:"60vh"},pagination:!1},null)}});function b(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Q(e)}var ke=A({setup(){const{t:e,locale:r}=Y();let o=r.value==="en-US"?"en":"cn";const n=10,{serviceStore:i}=C(u.furniture,o),{serviceStore:a}=C(u.power,o),{serviceStore:p}=C(u.other,o),m=q(u.furniture),h=q(),l={furniture:i,power:a,other:p};H(()=>{for(let s in l)l[s].fetchServiceList(0,n),l[s].getServiceSum()});const f=q(!1),c=J({company:"",contactemail:"",contactphone:"",contactperson:"",createtime:"",description:"",exhibitor:"",itemname:"",reserveid:0,reserveitemno:"",reserveqty:0,standno:"",status:"",unitprice:0}),k=s=>{P.confirm({centered:!0,title:e(`planBooth.serviceRent.${s===1?"serviceApply":"formTitle"}`),content:t("img",{style:"height:65vh;",src:s===1?ie:se},null),width:"70vh",okText:e("planBooth.serviceRent.download"),cancelText:e("planBooth.serviceRent.cancel"),onOk:()=>{window.open(s===1?"//wapp.itb-china.com/Pages/pc/pages/logistics/serviceRental/service/Furniture1.jpg":"//wapp.itb-china.com/Pages/pc/pages/logistics/serviceRental/service/Furniture2.jpg")}})},V=()=>{f.value=!1},w=async s=>{c.contactperson===""||c.contactemail===""||c.contactphone===""?X.info(e("planBooth.serviceRent.alertinfo")):(m.value=s,await l[s].fetchResources(),f.value=!0)},N=()=>{const s=m.value;l[s].sumApplyPrice>0&&P.confirm({content:t("div",null,[e("planBooth.serviceRent.submitinfo"),t("br",null,null),e("planBooth.serviceRent.submitinfo2")]),onOk:async()=>{await l[s].postResourceApply(c.contactperson,c.contactemail,c.contactphone),f.value=!1,l[s].fetchServiceList(0,n),l[s].getServiceSum(),h.value.resetFields()},okText:e("planBooth.serviceRent.sendApply"),onCancel:()=>{},cancelText:e("planBooth.serviceRent.cancel")})};return()=>{let s,I,L;return t(z,null,[t("div",{class:Z.formInfoSection},[t("img",{src:ne},null),t("div",null,[t("h2",{class:"text_red"},[e("planBooth.serviceRent.formTitle")]),t("div",null,[e("planBooth.serviceRent.info1")]),t("div",null,[e("planBooth.serviceRent.info2")]),t("div",null,[t("b",null,[e("planBooth.serviceRent.info3")]),e("planBooth.serviceRent.info4")]),t("div",null,[e("planBooth.serviceRent.info4_1"),t("span",{style:"color:red;font-weight:bold;"},[e("planBooth.serviceRent.info4_2")]),e("planBooth.serviceRent.info4_3")]),t("div",null,[e("planBooth.serviceRent.info5",{email:"cai.wl@sunhills.cn"})]),t("div",null,[e("planBooth.serviceRent.info6")]),t("div",null,[e("planBooth.serviceRent.info7")]),t("div",null,[e("planBooth.serviceRent.info8",{email:"cherry.gong@syma.com.cn"})]),t("div",null,[e("planBooth.serviceRent.info9")]),t("div",null,[e("planBooth.serviceRent.info10")]),t("div",null,[e("planBooth.serviceRent.info11",{email:"crystal.jiang@syma.com.cn"})]),t("div",null,[e("planBooth.serviceRent.info12")])])]),t("div",null,[e("planBooth.serviceRent.furniturepic")," ",t("img",{onClick:()=>{k(1)},src:re,width:"32",class:"cursor_hand"},null),t("img",{onClick:()=>{k(2)},src:oe,width:"32",class:"cursor_hand"},null),t("br",null,null),t("br",null,null),t(x,{ref:h,model:c},{default:()=>[t(M,{gutter:20},{default:()=>[t(T,{span:12},{default:()=>[t(x.Item,{name:"contactperson",label:e("planBooth.serviceRent.contactperson"),rules:{required:!0,message:""}},{default:()=>[t(O,{type:"text",value:c.contactperson,"onUpdate:value":d=>c.contactperson=d},null)]})]}),t(T,{span:12},{default:()=>[t(x.Item,{name:"contactemail",label:e("planBooth.serviceRent.contactemail"),rules:{required:!0,message:""}},{default:()=>[t(O,{type:"text",value:c.contactemail,"onUpdate:value":d=>c.contactemail=d},null)]})]})]}),t(M,{gutter:20},{default:()=>[t(T,{span:12},{default:()=>[t(x.Item,{name:"contactphone",label:e("planBooth.serviceRent.contactphone"),rules:{required:!0,message:""}},{default:()=>[t(O,{type:"text",value:c.contactphone,"onUpdate:value":d=>c.contactphone=d},null)]})]})]})]}),t("div",{style:"text-align:center;"},[t(y,{type:"primary",onClick:()=>{w(u.furniture)},disabled:!i.serviceList||i.serviceList.length>0,loading:l[u.furniture].loading},b(s=e("planBooth.serviceRent.serviceApply"))?s:{default:()=>[s]}),S("\u2003"),t(y,{type:"primary",onClick:()=>{w(u.power)},disabled:!a.serviceList||a.serviceList.length>0,loading:l[u.power].loading},b(I=e("planBooth.serviceRent.serviceApply2"))?I:{default:()=>[I]}),S("\u2003"),t(y,{type:"primary",onClick:()=>{w(u.other)},disabled:!p.serviceList||p.serviceList.length>0,loading:l[u.other].loading},b(L=e("planBooth.serviceRent.serviceApply3"))?L:{default:()=>[L]})])]),t(P,{visible:f.value,"onUpdate:visible":d=>f.value=d,width:1080,centered:!0,title:e(`planBooth.serviceRent.list_${m.value}`)},{default:()=>[f.value&&t(ae,{t:e,serviceStore:l[m.value]},null)],footer:()=>{let d,_;return t(z,null,[t("b",{class:"text_red",style:{marginRight:"3em"}},[e("planBooth.resource.totalsum"),S(": "),l[m.value].sumApplyPrice]),t(y,{key:"back",onClick:V},b(d=e("common.cancel"))?d:{default:()=>[d]}),t(y,{key:"submit",type:"primary",onClick:N},b(_=e("common.submit"))?_:{default:()=>[_]})])}}),t(F,{t:e,serviceStore:i},null),t(F,{t:e,serviceStore:a},null),t(F,{t:e,serviceStore:p},null)])}}});export{ke as default};
