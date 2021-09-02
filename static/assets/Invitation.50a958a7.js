var e=Object.defineProperty,t=(t,a,n)=>(((t,a,n)=>{a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n})(t,"symbol"!=typeof a?a+"":a,n),n);import{B as a,p as n,l as i}from"./index.51e3cabe.js";import{F as l,m as r,n as o,I as p,o as s,R as d,p as u,W as m,k as c,l as y,h as f,T as v}from"./ant-design-vue.a82685c5.js";import{u as b}from"./vue-i18n.f94f7590.js";import{a2 as g,k as T,r as M,a0 as h,ag as j,$ as x,I,aq as w,c as P}from"./@vue.40aa8880.js";import"./vue-router.f87f9226.js";import"./@ant-design.c79ca412.js";import"./@ctrl.2e36ce53.js";import"./nprogress.3e43c680.js";import"./moment.fe945fe1.js";import"./@babel.dc475c8c.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.60ec16aa.js";import"./warning.4abaefa0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.c2b61631.js";import"./source-map.3671d69c.js";import"./vue.23a295e8.js";var k=Object.defineProperty,R=Object.getOwnPropertyDescriptor,O=(e,t,a,n)=>{for(var i,l=n>1?void 0:n?R(t,a):t,r=e.length-1;r>=0;r--)(i=e[r])&&(l=(n?i(t,a,l):i(l))||l);return n&&l&&k(t,a,l),l};class U extends a{constructor(){super(),t(this,"currentRecord"),t(this,"list"),t(this,"pageIndex"),t(this,"pageSize"),t(this,"totalRecords"),this.pageIndex=0,this.totalRecords=0,this.pageSize=10}async fetchList(e,t=10){let a=await n("/operation/Getletterlistbyuser",{pageIndex:e,pageSize:t});this.list=a.results,this.pageIndex=e,this.totalRecords=a.totalRecord}async addLetter(e){return await n("Operation/AddLetter",e)}async downloadPdf(e){let t=await n("Operation/CreatePDF",{letterid:e});window.open(t.filename,"_blank")}}O([i],U.prototype,"fetchList",1),O([i],U.prototype,"addLetter",1),O([i],U.prototype,"downloadPdf",1);const S=new U,L=function(){return{invitationStore:S}};var F="_formInfoSection_oi42b_1";function _(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!j(e)}const $=l.useForm;var z=g({name:"InvitationForm",setup(){const e="YYYY-MM-DD",{t:t}=b(),{invitationStore:a}=L(),n=T(),i=M({countryname:"",username:"",position:"",gender:"Male",dateofbirth:"",nationality:"",passportnumber:"",passportvalidity:"",employer:"",starttime:"",stoptime:"",iknow:!1,residence:[],dateofbirthP:void 0,passportvalidityP:void 0});const v=M({dateofbirthP:[{required:!0,message:t("planMyTrip.dateofbirthTip")}],passportvalidityP:[{required:!0,message:t("planMyTrip.passportvalidityTip")}],residence:[{validator:async(e,a)=>a?a.length<2?Promise.reject(t("planMyTrip.errortimeinfo")):Promise.resolve():Promise.reject(t("planMyTrip.errortimeinfo"))}]}),{resetFields:g}=$(i,v);async function j(){var l,r,o,p;try{await n.value.validate(),i.dateofbirth=null==(l=i.dateofbirthP)?void 0:l.format(e),i.passportvalidity=null==(r=i.passportvalidityP)?void 0:r.format(e),i.starttime=null==(o=i.residence[0])?void 0:o.format(e),i.stoptime=null==(p=i.residence[1])?void 0:p.format(e),await a.addLetter(i)&&(f.success({message:t("planMyTrip.submitinfo"),placement:"topRight"}),g(),a.fetchList(0))}catch(s){}}return()=>{let e,f,b,T,M;return h(I,null,[h("div",{class:F},[h("img",{src:"/assets/pic.1ad2cc7c.jpg"},null),h("div",null,[h("h3",{class:"text_red"},[t("planMyTrip.formtitle")]),h("p",null,[t("planMyTrip.topinfo1")]),h("p",null,[t("planMyTrip.topinfo2",{email:"contact@itb-china.com"})]),h("p",null,[t("planMyTrip.topinfo3")])])]),h(l,{ref:n,model:i,rules:v},{default:()=>[h(r,{gutter:20},{default:()=>[h(o,{span:12},{default:()=>[h(l.Item,{name:"countryname",label:t("planMyTrip.countryname")},{default:()=>[h(p,{type:"text",value:i.countryname,"onUpdate:value":e=>i.countryname=e},null)]})]}),h(o,{span:12},{default:()=>[h(l.Item,{name:"username",label:t("planMyTrip.username")},{default:()=>[h(p,{type:"text",value:i.username,"onUpdate:value":e=>i.username=e},null)]})]})]}),h(r,{gutter:20},{default:()=>[h(o,{span:12},{default:()=>[h(l.Item,{name:"position",label:t("planMyTrip.position")},{default:()=>[h(p,{type:"text",value:i.position,"onUpdate:value":e=>i.position=e},null)]})]}),h(o,{span:12},{default:()=>[h(l.Item,{name:"gender",label:t("planMyTrip.gender")},{default:()=>[h(s,{value:i.gender,"onUpdate:value":e=>i.gender=e},{default:()=>[h(d,{value:"Male"},_(e=t("planMyTrip.gendercontent[0]"))?e:{default:()=>[e]}),h(d,{value:"Female"},_(f=t("planMyTrip.gendercontent[1]"))?f:{default:()=>[f]})]})]})]})]}),h(r,{gutter:20},{default:()=>[h(o,{span:12},{default:()=>[h(l.Item,{name:"dateofbirthP",label:t("planMyTrip.dateofbirth")},{default:()=>[h(u,{style:{width:"100%"},value:i.dateofbirthP,"onUpdate:value":e=>i.dateofbirthP=e},null)]})]}),h(o,{span:12},{default:()=>[h(l.Item,{name:"nationality",label:t("planMyTrip.nationality")},{default:()=>[h(p,{type:"text",value:i.nationality,"onUpdate:value":e=>i.nationality=e},null)]})]})]}),h(r,{gutter:20},{default:()=>[h(o,{span:12},{default:()=>[h(l.Item,{name:"passportnumber",label:t("planMyTrip.passportnumber")},{default:()=>[h(p,{type:"text",value:i.passportnumber,"onUpdate:value":e=>i.passportnumber=e},null)]})]}),h(o,{span:12},{default:()=>[h(l.Item,{name:"passportvalidityP",label:t("planMyTrip.passportvalidity")},{default:()=>[h(u,{style:{width:"100%"},value:i.passportvalidityP,"onUpdate:value":e=>i.passportvalidityP=e},null)]})]})]}),h(r,{gutter:20},{default:()=>[h(o,{span:12},{default:()=>[h(l.Item,{name:"employer",label:t("planMyTrip.employer")},{default:()=>[h(p,{type:"text",value:i.employer,"onUpdate:value":e=>i.employer=e},null)]})]}),h(o,{span:12},{default:()=>[h(l.Item,{name:"residence",label:t("planMyTrip.residence")},{default:()=>[h(m,{style:{width:"100%"},value:i.residence,"onUpdate:value":e=>i.residence=e,disabledDate:e=>e<moment("2021-05-03").startOf("day")||e>moment("2021-05-10").endOf("day")},null)]})]})]}),h(r,null,{default:()=>[h(l.Item,{name:"iknow"},{default:()=>[h(c,{checked:i.iknow,"onUpdate:checked":e=>i.iknow=e},_(b=t("planMyTrip.formatattention"))?b:{default:()=>[b]})]})]}),h(r,null,{default:()=>[h("p",{class:"text_red"},[t("planMyTrip.formatattention2"),x(" "),h("br",null,null),x(" "),t("planMyTrip.formatattention3")])]}),h(r,{type:"flex",gutter:20},{default:()=>[h(o,{flex:1,style:{textAlign:"right"}},{default:()=>[h(y,{type:"primary",disabled:!i.iknow,loading:a.loading,onClick:j},_(T=t("planMyTrip.sendApply"))?T:{default:()=>[T]})]}),h(o,{flex:1},{default:()=>[h(y,{onClick:g},_(M=t("planMyTrip.reset"))?M:{default:()=>[M]})]})]})]})])}}});const C={Table:g({name:"InvitationTable",setup(){const{t:e}=b(),{invitationStore:t}=L();w((()=>{t.fetchList(0)}));let a=P((()=>({current:t.pageIndex,total:t.totalRecords})));const n=[{title:e("planMyTrip.countryname"),dataIndex:"countryname"},{title:e("planMyTrip.username"),dataIndex:"username"},{title:e("planMyTrip.gender"),dataIndex:"gender"},{title:e("planMyTrip.dateofbirth"),dataIndex:"dateofbirth",customRender:({record:e})=>`${e.dateofbirth.split(" ")[0]}`},{title:e("planMyTrip.position"),dataIndex:"position"},{title:e("planMyTrip.nationality"),dataIndex:"nationality"},{title:e("planMyTrip.passportnumber"),dataIndex:"passportnumber"},{title:e("planMyTrip.passportvalidity"),dataIndex:"passportvalidity",customRender:({record:e})=>`${e.passportvalidity.split(" ")[0]}`},{title:e("planMyTrip.employer"),dataIndex:"employer"},{title:e("planMyTrip.residence"),dataIndex:"strattime",customRender:({record:e})=>`${e.starttime.split(" ")[0]} -- ${e.stoptime.split(" ")[0]}`},{title:e("planMyTrip.createtime"),dataIndex:"createtime"},{title:e("planMyTrip.status"),dataIndex:"status",customRender:({record:t})=>e(`planMyTrip.statustype[${t.status}]`)},{title:e("planMyTrip.operation"),dataIndex:"invitationid",align:"center",fixed:"right",customRender({record:a}){if("1"===a.status){let i;return h(y,{type:"link",onClick:()=>{t.downloadPdf(a.invitationid)}},"function"==typeof(n=i=e("planMyTrip.operationbutton"))||"[object Object]"===Object.prototype.toString.call(n)&&!j(n)?i:{default:()=>[i]})}var n}}];return()=>h("div",{class:"pd_tb_20"},[h(v,{size:"small",bordered:!0,rowKey:"invitationid",dataSource:t.list,columns:n,loading:t.loading,scroll:{x:1400,y:500},pagination:{current:a.value.current,total:a.value.total,onChange:e=>{t.fetchList(e)}}},{title:()=>h("h3",null,[e("planMyTrip.list")])})])}}),Form:z};var D=g({name:"PlanMyInvitation",setup:()=>()=>h(I,null,[h(C.Form,null,null),h(C.Table,null,null)])});export default D;
