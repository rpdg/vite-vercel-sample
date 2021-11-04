var H=Object.defineProperty;var O=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var B=(a,t,n)=>t in a?H(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,U=(a,t)=>{for(var n in t||(t={}))J.call(t,n)&&B(a,n,t[n]);if(O)for(var n of O(t))Q.call(t,n)&&B(a,n,t[n]);return a};var u=(a,t,n)=>(B(a,typeof t!="symbol"?t+"":t,n),n);import{B as W,p as h,g as X,l as f}from"./index.3be6f241.js";import{u as Y}from"./vue-i18n.0711e616.js";import{s as Z}from"./index.module.c389607c.js";import{w as C,v as z,F as p,R as x,h as d,I as m,e as I,n as F,m as tt}from"./ant-design-vue.f84da452.js";import{d as y,k as e,l as T,c as et,j as E,i as nt,F as w,u as M,B as G,I as at}from"./@vue.fa05379c.js";import"./vue-router.8ec3c3d8.js";import"./moment.29305b8e.js";import"./@ant-design.2067dcee.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.19d3e859.js";import"./@babel.a04268fa.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";var rt=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,v=(a,t,n,r)=>{for(var l=r>1?void 0:r?ot(t,n):t,i=a.length-1,o;i>=0;i--)(o=a[i])&&(l=(r?o(t,n,l):o(l))||l);return r&&l&&rt(t,n,l),l};class g extends W{constructor(){super();u(this,"reserveType","catering");u(this,"userInfo");u(this,"currentLng");u(this,"serviceList");u(this,"sumApplyPrice",0);u(this,"appliedList");u(this,"sumAppliedPrice",0);u(this,"pageIndex",0);u(this,"pageSize",10);u(this,"totalRecords",0)}async getAllServices(){let t=await h("/Operation/Getallcatering",{reservetype:this.reserveType,currentlng:this.currentLng});t.forEach(n=>{n.quantity1=n.quantity2=n.quantity3=0}),this.serviceList=t}caculateSum(){var n;let t=0;(n=this.serviceList)==null||n.forEach(r=>{t+=(r.quantity1+r.quantity2+r.quantity3)*r.unitprice}),this.sumApplyPrice=t}async getAppliedList(t,n){let r=await h("Operation/Getcateringlistbyuser",{reservetype:this.reserveType,currentlng:this.currentLng,pageIndex:t,pageSize:n||this.pageSize});this.appliedList=r.results,this.pageIndex=t,this.totalRecords=r.totalRecord}async getAppliedSum(){var n;let t=await h("Operation/Getcateringlisttotalsumbyuser",{pageIndex:0,reservetype:this.reserveType,currentlng:this.currentLng});return this.sumAppliedPrice=((n=t[0])==null?void 0:n.totalsum)||0,this.sumAppliedPrice}async postResourceApply(t){var l,i;const n=(l=this.serviceList)==null?void 0:l.map(o=>o.itemno).join("|"),r=(i=this.serviceList)==null?void 0:i.map(o=>`${o.quantity1},${o.quantity2},${o.quantity3}`).join("|");await h("/Operation/AddCatering",U({reservetype:this.reserveType,currentlng:this.currentLng,itemno:n,itemqty:r},t))}async getUserMoreInfo(){let t=await X("user/GetCurrentUserMoreInfo");return this.userInfo=t[0],t[0]}}v([f],g.prototype,"getAllServices",1);v([f],g.prototype,"getAppliedList",1);v([f],g.prototype,"getAppliedSum",1);v([f],g.prototype,"postResourceApply",1);const N=new g,lt=function(a){return N.currentLng=a,{cateringStore:N}};var it=y({props:{t:{type:Function,required:!0},cateringStore:{type:Object,required:!0}},setup(a){const{t,cateringStore:n}=a,r="planBooth.resource",l=[{title:t(`${r}.itemno`),dataIndex:"itemno",width:150},{title:t(`${r}.itemname`),dataIndex:"itemname",width:150},{title:t(`${r}.description`),dataIndex:"description"},{title:t(`${r}.unitprice`),dataIndex:"unitprice",width:150},{title:t("planBooth.catering.reserveqty1"),dataIndex:"itemno",width:100,customRender({record:i}){return e(C,{value:i.quantity1,"onUpdate:value":o=>i.quantity1=o,min:0,precision:0,size:"small",style:{width:"50px"},onChange:()=>{n.caculateSum()}},null)}},{title:t("planBooth.catering.reserveqty2"),dataIndex:"itemno",width:100,customRender({record:i}){return e(C,{value:i.quantity2,"onUpdate:value":o=>i.quantity2=o,min:0,precision:0,size:"small",style:{width:"50px"},onChange:()=>{n.caculateSum()}},null)}},{title:t("planBooth.catering.reserveqty3"),dataIndex:"itemno",width:100,customRender({record:i}){return e(C,{value:i.quantity3,"onUpdate:value":o=>i.quantity3=o,min:0,precision:0,size:"small",style:{width:"50px"},onChange:()=>{n.caculateSum()}},null)}}];return()=>e(z,{dataSource:n.serviceList,rowKey:"itemno",columns:l,scroll:{y:"60vh"},pagination:!1},null)}});function S(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!nt(a)}var st=y({props:{t:{type:Function,required:!0},cateringStore:{type:Object,required:!0}},setup(a){var j,q,A,L,P,_,R,$;const{t,cateringStore:n}=a,r="planBooth.catering",l=T(!1),i=T(),o=et({ContactStandno:"",ContactCompany:(q=(j=n.userInfo)==null?void 0:j.company)!=null?q:"",ContactEmail:(L=(A=n.userInfo)==null?void 0:A.email)!=null?L:"",ContactPhone:(_=(P=n.userInfo)==null?void 0:P.mobile)!=null?_:"",ContactPerson:((R=n.userInfo)==null?void 0:R.firstname)+" "+(($=n.userInfo)==null?void 0:$.lastname)});let k=E(()=>{let s=!0;return s&&(s=o.ContactStandno.length>0),s&&(s=o.ContactCompany.length>0),s&&(s=o.ContactEmail.length>0),s&&(s=o.ContactPhone.length>0),s&&(s=o.ContactPerson.length>0),s});const D=()=>{l.value=!1},V=async()=>{let s=G(o);if(s.ContactCompany==""||s.ContactEmail==""||s.ContactPerson==""||s.ContactPhone==""||s.ContactStandno==""){tt.info(t("planBooth.catering.alertinfo"));return}else await n.getAllServices(),l.value=!0};function K(){n.sumApplyPrice>0&&F.confirm({content:e("div",null,[t("planBooth.catering.submitinfo"),e("br",null,null),t("planBooth.catering.submitinfo2")]),onOk:async()=>{await n.postResourceApply(G(o)),l.value=!1,n.getAppliedList(0),n.getAppliedSum()},onCancel:()=>{}})}return()=>{let s;return e(w,null,[e(p,{ref:i},{default:()=>[e(x,{gutter:20},{default:()=>[e(d,{span:12},{default:()=>[e(p.Item,{label:t(`${r}.contactstandno`),rules:{required:!0,message:""}},{default:()=>[e(m,{type:"text",value:o.ContactStandno,"onUpdate:value":c=>o.ContactStandno=c},null)]})]}),e(d,{span:12},{default:()=>[e(p.Item,{label:t(`${r}.contactcompany`),rules:{required:!0,message:""}},{default:()=>[e(m,{type:"text",value:o.ContactCompany,"onUpdate:value":c=>o.ContactCompany=c},null)]})]})]}),e(x,{gutter:20},{default:()=>[e(d,{span:12},{default:()=>[e(p.Item,{label:t(`${r}.contactemail`),rules:{required:!0,message:""}},{default:()=>[e(m,{type:"text",value:o.ContactEmail,"onUpdate:value":c=>o.ContactEmail=c},null)]})]}),e(d,{span:12},{default:()=>[e(p.Item,{label:t(`${r}.contactphone`),rules:{required:!0,message:""}},{default:()=>[e(m,{type:"text",value:o.ContactPhone,"onUpdate:value":c=>o.ContactPhone=c},null)]})]})]}),e(x,{gutter:20},{default:()=>[e(d,{span:12},{default:()=>[e(p.Item,{label:t(`${r}.contactperson`),rules:{required:!0,message:""}},{default:()=>[e(m,{type:"text",value:o.ContactPerson,"onUpdate:value":c=>o.ContactPerson=c},null)]})]})]})]}),e("p",{class:"text_center"},[e(I,{type:"primary",disabled:!n.appliedList||n.appliedList.length>0||!k,onClick:V,loading:n.loading},S(s=t(`${r}.serviceApply`))?s:{default:()=>[s]})]),e(F,{visible:l.value,"onUpdate:visible":c=>l.value=c,width:1080,centered:!0,title:t(`${r}.serviceApplylist`)},{default:()=>[l.value&&e(it,{t,cateringStore:n},null)],footer:()=>{let c,b;return e(w,null,[e("b",{class:"text_red",style:{marginRight:"3em"}},[t("planBooth.resource.totalsum"),M(": "),n.sumApplyPrice]),e(I,{key:"back",onClick:D},S(c=t("common.cancel"))?c:{default:()=>[c]}),e(I,{key:"submit",type:"primary",onClick:K},S(b=t("common.submit"))?b:{default:()=>[b]})])}})])}}}),ct=y({props:{t:{type:Function,required:!0},cateringStore:{type:Object,required:!0}},setup(a){const{t,cateringStore:n}=a;let r=E(()=>({current:n.pageIndex,total:n.totalRecords}));const l=[{title:t("planBooth.catering.standno"),width:100,dataIndex:"standno"},{title:t("planBooth.catering.contactperson"),width:100,dataIndex:"contactperson"},{title:t("planBooth.catering.company"),width:100,dataIndex:"company"},{title:t("planBooth.catering.reserveitemno"),width:100,dataIndex:"reserveitemno"},{title:t("planBooth.catering.itemname"),width:100,dataIndex:"itemname"},{title:t("planBooth.catering.description"),width:100,dataIndex:"description"},{title:t("planBooth.catering.unitprice"),width:100,dataIndex:"unitprice"},{title:t("planBooth.catering.reserveqty1"),width:100,dataIndex:"oneday"},{title:t("planBooth.catering.reserveqty2"),width:100,dataIndex:"twoday"},{title:t("planBooth.catering.reserveqty3"),width:100,dataIndex:"threeday"},{title:t("planBooth.catering.createtime"),width:100,dataIndex:"createtime"},{title:t("planBooth.catering.status"),width:100,fixed:"right",dataIndex:"status",customRender:function({record:i}){return e("b",null,[t(`planBooth.catering.statustype[${i.status}]`)])}}];return()=>e("div",{class:"pd_tb_20"},[e(z,{size:"small",bordered:!0,rowKey:"reserveid",columns:l,loading:n.loading,scroll:{x:1400,y:500},dataSource:n.appliedList,pagination:{current:r.value.current,total:r.value.total,onChange:i=>{n.getAppliedList(i)}}},{title:()=>e("h3",null,[t("planBooth.catering.serviceApplylist")]),footer:()=>e("h3",{class:"text_red text_right"},[t("planBooth.resource.totalsum"),M(": "),n.sumAppliedPrice])})])}}),ut="/assets/catering.bf276f2c.jpg",Ft=y({setup(){const{t:a,locale:t}=Y();let n=t.value==="en-US"?"en":"cn";const{cateringStore:r}=lt(n);return at(()=>{r.getUserMoreInfo(),r.getAppliedList(0),r.getAppliedSum()}),()=>e(w,null,[e("div",{class:Z.formInfoSection},[e("img",{src:ut},null),e("div",null,[e("h2",{class:"text_red"},[a("planBooth.catering.formtitle")]),e("div",null,[a("planBooth.catering.formcontact1"),e("br",null,null),a("planBooth.catering.formcontact2"),e("br",null,null),a("planBooth.catering.formcontact3"),e("br",null,null),a("planBooth.catering.formcontact4"),e("br",null,null),a("planBooth.catering.formcontact5"),e("br",null,null),a("planBooth.catering.formcontact6"),e("br",null,null),a("planBooth.catering.formcontact7"),e("br",null,null),e("b",null,[a("planBooth.catering.formcontact8")]),e("br",null,null),a("planBooth.catering.formcontact9",{email:"yoyo@itb-china.com"}),e("br",null,null),a("planBooth.catering.formcontact10"),e("br",null,null),a("planBooth.catering.formcontact11"),e("br",null,null),a("planBooth.catering.formcontact12"),e("br",null,null),a("planBooth.catering.formcontact13"),e("br",null,null),a("planBooth.catering.formcontact14"),e("b",null,[a("planBooth.catering.formcontact14_1")]),a("planBooth.catering.formcontact14_2"),e("br",null,null),a("planBooth.catering.formcontact15"),e("br",null,null),a("planBooth.catering.formcontact16"),e("br",null,null),a("planBooth.catering.formcontact17"),e("br",null,null),a("planBooth.catering.formcontact18",{email:"gusto_jan@163.com"}),e("br",null,null)])])]),r.userInfo&&e(st,{t:a,cateringStore:r},null),e(ct,{t:a,cateringStore:r},null)])}});export{Ft as default};
