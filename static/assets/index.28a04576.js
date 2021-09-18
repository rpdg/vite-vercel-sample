var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(e,n,a)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,r=(t,e,n)=>(o(t,"symbol"!=typeof e?e+"":e,n),n);import{B as l,p as i,g as c,l as s}from"./index.247a591d.js";import{u}from"./vue-i18n.bbad715b.js";import{s as p}from"./index.module.08f1abaa.js";import{s as d,T as m,F as g,m as h,n as y,I as v,l as f,t as b}from"./ant-design-vue.caf0e0b9.js";import{a2 as x,a0 as I,k as B,r as j,c as w,ag as S,I as C,$ as q,t as A,al as L}from"./@vue.5723de44.js";import"./vue-router.0532eeed.js";import"./moment.29305b8e.js";import"./@ant-design.503097a2.js";import"./@ctrl.2e36ce53.js";import"./nprogress.3e43c680.js";import"./axios.a57df465.js";import"./@babel.dc475c8c.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.60ec16aa.js";import"./warning.4abaefa0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.c2b61631.js";import"./source-map.3671d69c.js";import"./vue.3a1030aa.js";var P=Object.defineProperty,O=Object.getOwnPropertyDescriptor,$=(t,e,n,a)=>{for(var o,r=a>1?void 0:a?O(e,n):e,l=t.length-1;l>=0;l--)(o=t[l])&&(r=(a?o(e,n,r):o(r))||r);return a&&r&&P(e,n,r),r};class U extends l{constructor(){super(),r(this,"reserveType","catering"),r(this,"userInfo"),r(this,"currentLng"),r(this,"serviceList"),r(this,"sumApplyPrice",0),r(this,"appliedList"),r(this,"sumAppliedPrice",0),r(this,"pageIndex",0),r(this,"pageSize",10),r(this,"totalRecords",0)}async getAllServices(){let t=await i("/Operation/Getallcatering",{reservetype:this.reserveType,currentlng:this.currentLng});t.forEach((t=>{t.quantity1=t.quantity2=t.quantity3=0})),this.serviceList=t}caculateSum(){var t;let e=0;null==(t=this.serviceList)||t.forEach((t=>{e+=(t.quantity1+t.quantity2+t.quantity3)*t.unitprice})),this.sumApplyPrice=e}async getAppliedList(t,e){let n=await i("Operation/Getcateringlistbyuser",{reservetype:this.reserveType,currentlng:this.currentLng,pageIndex:t,pageSize:e||this.pageSize});this.appliedList=n.results,this.pageIndex=t,this.totalRecords=n.totalRecord}async getAppliedSum(){var t;let e=await i("Operation/Getcateringlisttotalsumbyuser",{pageIndex:0,reservetype:this.reserveType,currentlng:this.currentLng});return this.sumAppliedPrice=(null==(t=e[0])?void 0:t.totalsum)||0,this.sumAppliedPrice}async postResourceApply(t){var r,l;const c=null==(r=this.serviceList)?void 0:r.map((t=>t.itemno)).join("|"),s=null==(l=this.serviceList)?void 0:l.map((t=>`${t.quantity1},${t.quantity2},${t.quantity3}`)).join("|");await i("/Operation/AddCatering",((t,r)=>{for(var l in r||(r={}))n.call(r,l)&&o(t,l,r[l]);if(e)for(var l of e(r))a.call(r,l)&&o(t,l,r[l]);return t})({reservetype:this.reserveType,currentlng:this.currentLng,itemno:c,itemqty:s},t))}async getUserMoreInfo(){let t=await c("user/GetCurrentUserMoreInfo");return this.userInfo=t[0],t[0]}}$([s],U.prototype,"getAllServices",1),$([s],U.prototype,"getAppliedList",1),$([s],U.prototype,"getAppliedSum",1),$([s],U.prototype,"postResourceApply",1);const R=new U;var k=x({props:{t:{type:Function,required:!0},cateringStore:{type:Object,required:!0}},setup(t){const{t:e,cateringStore:n}=t,a="planBooth.resource",o=[{title:e(`${a}.itemno`),dataIndex:"itemno",width:150},{title:e(`${a}.itemname`),dataIndex:"itemname",width:150},{title:e(`${a}.description`),dataIndex:"description"},{title:e(`${a}.unitprice`),dataIndex:"unitprice",width:150},{title:e("planBooth.catering.reserveqty1"),dataIndex:"itemno",width:100,customRender:({record:t})=>I(d,{value:t.quantity1,"onUpdate:value":e=>t.quantity1=e,min:0,precision:0,size:"small",style:{width:"50px"},onChange:()=>{n.caculateSum()}},null)},{title:e("planBooth.catering.reserveqty2"),dataIndex:"itemno",width:100,customRender:({record:t})=>I(d,{value:t.quantity2,"onUpdate:value":e=>t.quantity2=e,min:0,precision:0,size:"small",style:{width:"50px"},onChange:()=>{n.caculateSum()}},null)},{title:e("planBooth.catering.reserveqty3"),dataIndex:"itemno",width:100,customRender:({record:t})=>I(d,{value:t.quantity3,"onUpdate:value":e=>t.quantity3=e,min:0,precision:0,size:"small",style:{width:"50px"},onChange:()=>{n.caculateSum()}},null)}];return()=>I(m,{dataSource:n.serviceList,rowKey:"itemno",columns:o,scroll:{y:"60vh"},pagination:!1},null)}});function z(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!S(t)}var _=x({props:{t:{type:Function,required:!0},cateringStore:{type:Object,required:!0}},setup(t){var e,n,a,o,r,l,i,c;const{t:s,cateringStore:u}=t,p="planBooth.catering",d=B(!1),m=B(),x=j({ContactStandno:"",ContactCompany:null!=(n=null==(e=u.userInfo)?void 0:e.company)?n:"",ContactEmail:null!=(o=null==(a=u.userInfo)?void 0:a.email)?o:"",ContactPhone:null!=(l=null==(r=u.userInfo)?void 0:r.mobile)?l:"",ContactPerson:(null==(i=u.userInfo)?void 0:i.firstname)+" "+(null==(c=u.userInfo)?void 0:c.lastname)});let S=w((()=>{let t=!0;return t&&(t=x.ContactStandno.length>0),t&&(t=x.ContactCompany.length>0),t&&(t=x.ContactEmail.length>0),t&&(t=x.ContactPhone.length>0),t&&(t=x.ContactPerson.length>0),t}));const L=()=>{d.value=!1},P=async()=>{await u.getAllServices(),d.value=!0};function O(){u.sumApplyPrice>0&&b.confirm({content:I("div",null,[s("planBooth.catering.submitinfo"),I("br",null,null),s("planBooth.catering.submitinfo2")]),onOk:async()=>{await u.postResourceApply(A(x)),d.value=!1,u.getAppliedList(0),u.getAppliedSum()},onCancel:()=>{}})}return()=>{let t;return I(C,null,[I(g,{ref:m},{default:()=>[I(h,{gutter:20},{default:()=>[I(y,{span:12},{default:()=>[I(g.Item,{label:s(`${p}.contactstandno`)},{default:()=>[I(v,{type:"text",value:x.ContactStandno,"onUpdate:value":t=>x.ContactStandno=t},null)]})]}),I(y,{span:12},{default:()=>[I(g.Item,{label:s(`${p}.contactcompany`)},{default:()=>[I(v,{type:"text",value:x.ContactCompany,"onUpdate:value":t=>x.ContactCompany=t},null)]})]})]}),I(h,{gutter:20},{default:()=>[I(y,{span:12},{default:()=>[I(g.Item,{label:s(`${p}.contactemail`)},{default:()=>[I(v,{type:"text",value:x.ContactEmail,"onUpdate:value":t=>x.ContactEmail=t},null)]})]}),I(y,{span:12},{default:()=>[I(g.Item,{label:s(`${p}.contactphone`)},{default:()=>[I(v,{type:"text",value:x.ContactPhone,"onUpdate:value":t=>x.ContactPhone=t},null)]})]})]}),I(h,{gutter:20},{default:()=>[I(y,{span:12},{default:()=>[I(g.Item,{label:s(`${p}.contactperson`)},{default:()=>[I(v,{type:"text",value:x.ContactPerson,"onUpdate:value":t=>x.ContactPerson=t},null)]})]})]})]}),I("p",{class:"text_center"},[I(f,{type:"primary",disabled:!u.appliedList||u.appliedList.length>0||!S,onClick:P,loading:u.loading},z(t=s(`${p}.serviceApply`))?t:{default:()=>[t]})]),I(b,{visible:d.value,"onUpdate:visible":t=>d.value=t,width:1080,centered:!0,title:s(`${p}.serviceApplylist`)},{default:()=>[d.value&&I(k,{t:s,cateringStore:u},null)],footer:()=>{let t,e;return I(C,null,[I("b",{class:"text_red",style:{marginRight:"3em"}},[s("planBooth.resource.totalsum"),q(": "),u.sumApplyPrice]),I(f,{key:"back",onClick:L},z(t=s("common.cancel"))?t:{default:()=>[t]}),I(f,{key:"submit",type:"primary",onClick:O},z(e=s("common.submit"))?e:{default:()=>[e]})])}})])}}}),E=x({props:{t:{type:Function,required:!0},cateringStore:{type:Object,required:!0}},setup(t){const{t:e,cateringStore:n}=t;let a=w((()=>({current:n.pageIndex,total:n.totalRecords})));const o=[{title:e("planBooth.catering.standno"),width:100,dataIndex:"standno"},{title:e("planBooth.catering.contactperson"),width:100,dataIndex:"contactperson"},{title:e("planBooth.catering.company"),width:100,dataIndex:"company"},{title:e("planBooth.catering.reserveitemno"),width:100,dataIndex:"reserveitemno"},{title:e("planBooth.catering.itemname"),width:100,dataIndex:"itemname"},{title:e("planBooth.catering.description"),width:100,dataIndex:"description"},{title:e("planBooth.catering.unitprice"),width:100,dataIndex:"unitprice"},{title:e("planBooth.catering.reserveqty1"),width:100,dataIndex:"oneday"},{title:e("planBooth.catering.reserveqty2"),width:100,dataIndex:"twoday"},{title:e("planBooth.catering.reserveqty3"),width:100,dataIndex:"threeday"},{title:e("planBooth.catering.createtime"),width:100,dataIndex:"createtime"},{title:e("planBooth.catering.status"),width:100,fixed:"right",dataIndex:"status",customRender:function({record:t}){return I("b",null,[e(`planBooth.catering.statustype[${t.status}]`)])}}];return()=>I("div",{class:"pd_tb_20"},[I(m,{size:"small",bordered:!0,rowKey:"reserveid",columns:o,loading:n.loading,scroll:{x:1400,y:500},dataSource:n.appliedList,pagination:{current:a.value.current,total:a.value.total,onChange:t=>{n.getAppliedList(t)}}},{title:()=>I("h3",null,[e("planBooth.catering.serviceApplylist")]),footer:()=>I("h3",{class:"text_red text_right"},[e("planBooth.resource.totalsum"),q(": "),n.sumAppliedPrice])})])}}),T=x({setup(){const{t:t,locale:e}=u();let n="en-US"===e.value?"en":"cn";const{cateringStore:a}=(o=n,R.currentLng=o,{cateringStore:R});var o;return L((()=>{a.getUserMoreInfo(),a.getAppliedList(0),a.getAppliedSum()})),()=>I(C,null,[I("div",{class:p.formInfoSection},[I("img",{src:"/assets/catering.bf276f2c.jpg"},null),I("div",null,[I("h2",{class:"text_red"},[t("planBooth.catering.formtitle")]),I("div",null,[t("planBooth.catering.formcontact1"),I("br",null,null),t("planBooth.catering.formcontact2"),I("br",null,null),t("planBooth.catering.formcontact3"),I("br",null,null),t("planBooth.catering.formcontact4"),I("br",null,null),t("planBooth.catering.formcontact5"),I("br",null,null),t("planBooth.catering.formcontact6"),I("br",null,null),t("planBooth.catering.formcontact7"),I("br",null,null),I("b",null,[t("planBooth.catering.formcontact8")]),I("br",null,null),t("planBooth.catering.formcontact9",{email:"yoyo@itb-china.com"}),I("br",null,null),t("planBooth.catering.formcontact10"),I("br",null,null),t("planBooth.catering.formcontact11"),I("br",null,null),t("planBooth.catering.formcontact12"),I("br",null,null),t("planBooth.catering.formcontact13"),I("br",null,null),t("planBooth.catering.formcontact14"),I("br",null,null),t("planBooth.catering.formcontact15"),I("br",null,null),t("planBooth.catering.formcontact16"),I("br",null,null),t("planBooth.catering.formcontact17"),I("br",null,null),t("planBooth.catering.formcontact18",{email:"gusto_jan@163.com"}),I("br",null,null)])])]),a.userInfo&&I(_,{t:t,cateringStore:a},null),I(E,{t:t,cateringStore:a},null)])}});export default T;
