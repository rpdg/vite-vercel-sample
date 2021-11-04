var Q=Object.defineProperty;var z=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var B=(l,t,n)=>t in l?Q(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n,M=(l,t)=>{for(var n in t||(t={}))W.call(t,n)&&B(l,n,t[n]);if(z)for(var n of z(t))X.call(t,n)&&B(l,n,t[n]);return l};var u=(l,t,n)=>(B(l,typeof t!="symbol"?t+"":t,n),n);import{B as Z,g as tt,p as f,l as h}from"./index.2bff5079.js";import{u as et}from"./vue-i18n.0711e616.js";import{s as nt}from"./index.module.c389607c.js";import{u as D,v as q,F as d,R as $,h as m,k as v,I as g,e as A,n as N}from"./ant-design-vue.034afe85.js";import{d as b,j as k,k as e,u as G,o as at,l as E,c as lt,i as rt,F as _,B as ot,I as st}from"./@vue.fa05379c.js";import"./vue-router.8ec3c3d8.js";import"./moment.29305b8e.js";import"./@ant-design.8f5596ac.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.19d3e859.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";var it=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,x=(l,t,n,a)=>{for(var o=a>1?void 0:a?ut(t,n):t,s=l.length-1,r;s>=0;s--)(r=l[s])&&(o=(a?r(t,n,o):r(o))||o);return a&&o&&it(t,n,o),o};class y extends Z{constructor(){super();u(this,"userInfo");u(this,"currentLng");u(this,"reserveType","translation");u(this,"translateServices");u(this,"sumApplyPrice",0);u(this,"appliedList");u(this,"sumAppliedPrice",0);u(this,"pageIndex",0);u(this,"pageSize",10);u(this,"totalRecords",0)}async getUserMoreInfo(){let t=await tt("user/GetCurrentUserMoreInfo");return this.userInfo=t[0],t[0]}async getAllTranslations(){let t=await f("/Operation/Getalltranslation",{reservetype:this.reserveType,currentlng:this.currentLng});t.forEach(n=>{n.quantity1=n.quantity2=n.quantity3=0}),this.translateServices=t}caculateSum(){var n;let t=0;(n=this.translateServices)==null||n.forEach(a=>{t+=(a.quantity1+a.quantity2+a.quantity3)*a.unitprice}),this.sumApplyPrice=t}async postResourceApply(t){var o,s;const n=(o=this.translateServices)==null?void 0:o.map(r=>r.itemno).join("|"),a=(s=this.translateServices)==null?void 0:s.map(r=>`${r.quantity1},${r.quantity2},${r.quantity3}`).join("|");await f("/Operation/AddTranslation",M({reservetype:this.reserveType,currentlng:this.currentLng,itemno:n,itemqty:a},t))}async getAppliedList(t,n){let a=await f("Operation/Gettranslationlistbyuser",{reservetype:this.reserveType,currentlng:this.currentLng,pageIndex:t,pageSize:n||this.pageSize});this.appliedList=a.results,this.pageIndex=t,this.totalRecords=a.totalRecord}async getServiceSum(){var n;let t=await f("Operation/Getservicelisttotalsumbyuser",{pageIndex:0,reservetype:this.reserveType,currentlng:this.currentLng});return this.sumAppliedPrice=((n=t[0])==null?void 0:n.totalsum)||0,this.sumAppliedPrice}}x([h],y.prototype,"getAllTranslations",1);x([h],y.prototype,"postResourceApply",1);x([h],y.prototype,"getAppliedList",1);x([h],y.prototype,"getServiceSum",1);const V=new y,pt=function(l){return V.currentLng=l,{translateStore:V}};var dt=b({props:{t:{type:Function,required:!0},translateStore:{type:Object,required:!0}},setup(l){const{t,translateStore:n}=l;let a=k(()=>({current:n.pageIndex,total:n.totalRecords}));const o=[{title:t("planBooth.translation.standno"),width:100,dataIndex:"standno"},{title:t("planBooth.translation.company"),width:100,dataIndex:"company"},{title:t("planBooth.translation.country"),width:100,dataIndex:"country"},{title:t("planBooth.translation.contactperson"),width:100,dataIndex:"contactperson"},{title:t("planBooth.translation.phonenum"),width:100,dataIndex:"phonenum"},{title:t("planBooth.translation.email"),width:100,dataIndex:"email"},{title:t("planBooth.translation.payment"),width:100,dataIndex:"payment"},{title:t("planBooth.translation.reserveitemno"),width:100,dataIndex:"reserveitemno"},{title:t("planBooth.translation.itemname"),width:100,dataIndex:"itemname"},{title:t("planBooth.translation.description"),width:100,dataIndex:"description"},{title:t("planBooth.translation.unitprice"),width:100,dataIndex:"unitprice"},{title:t("planBooth.translation.reserveqty1"),width:100,dataIndex:"oneday"},{title:t("planBooth.translation.reserveqty2"),width:100,dataIndex:"twoday"},{title:t("planBooth.translation.reserveqty3"),width:100,dataIndex:"threeday"},{title:t("planBooth.translation.hostess"),width:100,dataIndex:"hostess"},{title:t("planBooth.translation.createtime"),width:100,dataIndex:"createtime"},{title:t("planBooth.translation.status"),width:100,fixed:"right",dataIndex:"status",customRender:function({record:s}){return e("b",null,[t(`planBooth.translation.statustype[${s.status}]`)])}}];return()=>e("div",{class:"pd_tb_20"},[e(D,{size:"small",bordered:!0,rowKey:"reserveid",columns:o,loading:n.loading,scroll:{x:1400,y:500},dataSource:n.appliedList,pagination:{current:a.value.current,total:a.value.total,onChange:s=>{n.getAppliedList(s)}}},{title:()=>e("h3",null,[t("planBooth.translation.serviceApplylist")]),footer:()=>e("h3",{class:"text_red text_right"},[t("planBooth.resource.totalsum"),G(": "),n.sumAppliedPrice])})])}}),ct=b({props:{t:{type:Function,required:!0},translateStore:{type:Object,required:!0}},setup(l){const{t,translateStore:n}=l,a="planBooth.translation",o=[{title:t(`${a}.reserveitemno`),dataIndex:"itemno",width:150},{title:t(`${a}.itemname`),dataIndex:"itemname",width:150},{title:t(`${a}.description`),dataIndex:"description"},{title:t(`${a}.unitprice`),dataIndex:"unitprice",width:150},{title:t(`${a}.reserveqty1`),dataIndex:"itemno",width:100,customRender({record:s}){return e(q,{value:s.quantity1,"onUpdate:value":r=>s.quantity1=r,min:0,precision:0,size:"small",style:{width:"50px"},onChange:()=>{n.caculateSum()}},null)}},{title:t(`${a}.reserveqty2`),dataIndex:"itemno",width:100,customRender({record:s}){return e(q,{value:s.quantity2,"onUpdate:value":r=>s.quantity2=r,min:0,precision:0,size:"small",style:{width:"50px"},onChange:()=>{n.caculateSum()}},null)}},{title:t(`${a}.reserveqty3`),dataIndex:"itemno",width:100,customRender({record:s}){return e(q,{value:s.quantity3,"onUpdate:value":r=>s.quantity3=r,min:0,precision:0,size:"small",style:{width:"50px"},onChange:()=>{n.caculateSum()}},null)}}];return()=>e(D,{dataSource:n.translateServices,rowKey:"itemno",columns:o,scroll:{y:"60vh"},pagination:!1},null)}});function c(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!rt(l)}var mt=b({props:{t:{type:Function,required:!0},translateStore:{type:Object,required:!0}},setup(l){var R,O,T,L,U,C,P,F;const{t,translateStore:n}=l,a="planBooth.translation";at(()=>{n.getAppliedList(0),n.getServiceSum()});const o=E(!1),s=E(),r=lt({payment:"CNY",country:(O=(R=n.userInfo)==null?void 0:R.country)!=null?O:"",contactperson:((T=n.userInfo)==null?void 0:T.firstname)+" "+((L=n.userInfo)==null?void 0:L.lastname),phonenum:(C=(U=n.userInfo)==null?void 0:U.mobile)!=null?C:"",email:(F=(P=n.userInfo)==null?void 0:P.email)!=null?F:"",hostess:"no"});let K=k(()=>{let p=!0;return p&&(p=r.payment.length>0),p&&(p=r.country.length>0),p&&(p=r.contactperson.length>0),p&&(p=r.phonenum.length>0),p&&(p=r.email.length>0),p});const Y=()=>{o.value=!1},H=async()=>{await n.getAllTranslations(),o.value=!0};function J(){n.sumApplyPrice>0&&N.confirm({content:e("div",null,[t("planBooth.translation.submitinfo"),e("br",null,null),t("planBooth.translation.submitinfo2")]),onOk:async()=>{await n.postResourceApply(ot(r)),o.value=!1,n.getAppliedList(0),n.getServiceSum()},onCancel:()=>{}})}return()=>{let p,I,w,S;return e(_,null,[e(d,{ref:s},{default:()=>[e($,{gutter:20},{default:()=>[e(m,{span:12},{default:()=>[e(d.Item,{label:t(`${a}.payment`),rules:{required:!0,message:""}},{default:()=>[e(v,{value:r.payment,"onUpdate:value":i=>r.payment=i},{default:()=>[e(v.Option,{value:"CNY"},c(p=t(`${a}.paymenttypeD[0]`))?p:{default:()=>[p]}),e(v.Option,{value:"EUR"},c(I=t(`${a}.paymenttypeD[1]`))?I:{default:()=>[I]}),e(v.Option,{value:"USD"},c(w=t(`${a}.paymenttypeD[2]`))?w:{default:()=>[w]})]})]})]}),e(m,{span:12},{default:()=>[e(d.Item,{label:t(`${a}.country`),rules:{required:!0,message:""}},{default:()=>[e(g,{type:"text",value:r.country,"onUpdate:value":i=>r.country=i},null)]})]})]}),e($,{gutter:20},{default:()=>[e(m,{span:12},{default:()=>[e(d.Item,{label:t(`${a}.contactperson`),rules:{required:!0,message:""}},{default:()=>[e(g,{type:"text",value:r.contactperson,"onUpdate:value":i=>r.contactperson=i},null)]})]}),e(m,{span:12},{default:()=>[e(d.Item,{label:t(`${a}.phonenum`),rules:{required:!0,message:""}},{default:()=>[e(g,{type:"text",value:r.phonenum,"onUpdate:value":i=>r.phonenum=i},null)]})]})]}),e($,{gutter:20},{default:()=>[e(m,{span:12},{default:()=>[e(d.Item,{label:t(`${a}.email`),rules:{required:!0,message:""}},{default:()=>[e(g,{type:"text",value:r.email,"onUpdate:value":i=>r.email=i},null)]})]})]})]}),e("div",null,[e("span",{class:"text_red"},[e("b",null,[t(`${a}.forminfo`)])]),e("br",null,null),e("span",null,[t(`${a}.forminfo2`)]),e("br",null,null),e("span",null,[t(`${a}.forminfo3`)]),e("br",null,null),e("span",null,[t(`${a}.forminfo4`)]),e("br",null,null),e("span",null,[t(`${a}.forminfo5`)]),e("br",null,null),e("span",null,[t(`${a}.forminfo6`)]),e("br",null,null),e("span",null,[t(`${a}.forminfo7`)]),e("br",null,null),e("span",null,[t(`${a}.forminfo8`)]),e("br",null,null),e("span",null,[t(`${a}.forminfo9`)]),e("br",null,null),e("span",null,[t(`${a}.forminfo10`)]),e("br",null,null),e("span",null,[t(`${a}.forminfo11`)]),e("br",null,null),e("br",null,null),e("p",{class:"text_center"},[e(A,{type:"primary",onClick:H,disabled:!K.value,loading:n.loading},c(S=t(`${a}.serviceApply`))?S:{default:()=>[S]})])]),e(N,{visible:o.value,"onUpdate:visible":i=>o.value=i,width:1080,centered:!0,title:t(`${a}.serviceApplylist`)},{default:()=>[o.value&&e(ct,{t,translateStore:n},null)],footer:()=>{let i,j;return e(_,null,[e("b",{class:"text_red",style:{marginRight:"3em"}},[t("planBooth.resource.totalsum"),G(": "),n.sumApplyPrice]),e(A,{key:"back",onClick:Y},c(i=t("common.cancel"))?i:{default:()=>[i]}),e(A,{key:"submit",type:"primary",onClick:J},c(j=t("common.submit"))?j:{default:()=>[j]})])}})])}}}),yt="/assets/translate.70bb2d53.jpg",Nt=b({setup(){const{t:l,locale:t}=et();let n=t.value==="en-US"?"en":"cn";const{translateStore:a}=pt(n);return st(()=>{a.getUserMoreInfo()}),()=>e(_,null,[e("div",{class:nt.formInfoSection},[e("img",{src:yt},null),e("div",null,[e("h2",{class:"text_red"},[l("planBooth.translation.formtitle")]),e("div",null,[l("planBooth.translation.info1")]),e("div",null,[l("planBooth.translation.info2")]),e("div",null,[l("planBooth.translation.info3",{email:"Frederic.raposo@aimresult.com"})])])]),a.userInfo&&e(mt,{t:l,translateStore:a},null),e(dt,{t:l,translateStore:a},null)])}});export{Nt as default};
