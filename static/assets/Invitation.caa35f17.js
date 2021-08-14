import{B as t,p as e,l as a}from"./index.9ebfa7a0.js";import{F as n,k as i,l,I as r,m as o,R as p,n as s,W as d,i as u,j as m,o as c,T as y}from"./ant-design-vue.0b90b305.js";import{u as f}from"./vue-i18n.683f3bc1.js";import{a7 as v,k as b,r as g,a5 as M,al as T,a4 as h,M as j,av as x,c as I}from"./@vue.01a79c59.js";import"./moment.fe945fe1.js";import"./vue-router.1edc7a6a.js";import"./@ant-design.bd6efab4.js";import"./@ctrl.2e36ce53.js";import"./nprogress.3e43c680.js";import"./@babel.c1abb07f.js";import"./regenerator-runtime.df0ff768.js";import"./omit.js.0925d6dc.js";import"./lodash-es.4607ccff.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.c2b61631.js";import"./source-map.3671d69c.js";import"./vue.bd1bc7e8.js";var w=Object.defineProperty,P=Object.getOwnPropertyDescriptor,k=(t,e,a,n)=>{for(var i,l=n>1?void 0:n?P(e,a):e,r=t.length-1;r>=0;r--)(i=t[r])&&(l=(n?i(e,a,l):i(l))||l);return n&&l&&w(e,a,l),l};class O extends t{constructor(){super(),this.pageIndex=0,this.totalRecords=0,this.pageSize=10}async fetchList(t,a=10){let n=await e("/operation/Getletterlistbyuser",{pageIndex:t,pageSize:a});this.list=n.results,this.pageIndex=t,this.totalRecords=n.totalRecord}async addLetter(t){return await e("Operation/AddLetter",t)}async downloadPdf(t){let a=await e("Operation/CreatePDF",{letterid:t});window.open(a.filename,"_blank")}}k([a],O.prototype,"fetchList",1),k([a],O.prototype,"addLetter",1),k([a],O.prototype,"downloadPdf",1);const R=new O,U=function(){return{invitationStore:R}};var L="_formInfoSection_oi42b_1";function S(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!T(t)}const F=n.useForm;var _=v({name:"InvitationForm",setup(){const t="YYYY-MM-DD",{t:e}=f(),{invitationStore:a}=U(),y=b(),v=g({countryname:"",username:"",position:"",gender:"Male",dateofbirth:"",nationality:"",passportnumber:"",passportvalidity:"",employer:"",starttime:"",stoptime:"",iknow:!1,residence:[],dateofbirthP:void 0,passportvalidityP:void 0});const T=g({dateofbirthP:[{required:!0,message:e("planMyTrip.dateofbirthTip")}],passportvalidityP:[{required:!0,message:e("planMyTrip.passportvalidityTip")}],residence:[{validator:async(t,a)=>a?a.length<2?Promise.reject(e("planMyTrip.errortimeinfo")):Promise.resolve():Promise.reject(e("planMyTrip.errortimeinfo"))}]}),{resetFields:x}=F(v,T);async function I(){var n,i,l,r;try{await y.value.validate(),v.dateofbirth=null==(n=v.dateofbirthP)?void 0:n.format(t),v.passportvalidity=null==(i=v.passportvalidityP)?void 0:i.format(t),v.starttime=null==(l=v.residence[0])?void 0:l.format(t),v.stoptime=null==(r=v.residence[1])?void 0:r.format(t),await a.addLetter(v)&&(c.success({message:e("planMyTrip.submitinfo"),placement:"topRight"}),x(),a.fetchList(0))}catch(o){}}return()=>{let t,c,f,b,g;return M(j,null,[M("div",{class:L},[M("img",{src:"/assets/pic.1ad2cc7c.jpg"},null),M("div",null,[M("h3",{class:"text_red"},[e("planMyTrip.formtitle")]),M("p",null,[e("planMyTrip.topinfo1")]),M("p",null,[e("planMyTrip.topinfo2",{email:"contact@itb-china.com"})]),M("p",null,[e("planMyTrip.topinfo3")])])]),M(n,{ref:y,model:v,rules:T},{default:()=>[M(i,{gutter:20},{default:()=>[M(l,{span:12},{default:()=>[M(n.Item,{name:"countryname",label:e("planMyTrip.countryname")},{default:()=>[M(r,{type:"text",value:v.countryname,"onUpdate:value":t=>v.countryname=t},null)]})]}),M(l,{span:12},{default:()=>[M(n.Item,{name:"username",label:e("planMyTrip.username")},{default:()=>[M(r,{type:"text",value:v.username,"onUpdate:value":t=>v.username=t},null)]})]})]}),M(i,{gutter:20},{default:()=>[M(l,{span:12},{default:()=>[M(n.Item,{name:"position",label:e("planMyTrip.position")},{default:()=>[M(r,{type:"text",value:v.position,"onUpdate:value":t=>v.position=t},null)]})]}),M(l,{span:12},{default:()=>[M(n.Item,{name:"gender",label:e("planMyTrip.gender")},{default:()=>[M(o,{value:v.gender,"onUpdate:value":t=>v.gender=t},{default:()=>[M(p,{value:"Male"},S(t=e("planMyTrip.gendercontent[0]"))?t:{default:()=>[t]}),M(p,{value:"Female"},S(c=e("planMyTrip.gendercontent[1]"))?c:{default:()=>[c]})]})]})]})]}),M(i,{gutter:20},{default:()=>[M(l,{span:12},{default:()=>[M(n.Item,{name:"dateofbirthP",label:e("planMyTrip.dateofbirth")},{default:()=>[M(s,{style:{width:"100%"},value:v.dateofbirthP,"onUpdate:value":t=>v.dateofbirthP=t},null)]})]}),M(l,{span:12},{default:()=>[M(n.Item,{name:"nationality",label:e("planMyTrip.nationality")},{default:()=>[M(r,{type:"text",value:v.nationality,"onUpdate:value":t=>v.nationality=t},null)]})]})]}),M(i,{gutter:20},{default:()=>[M(l,{span:12},{default:()=>[M(n.Item,{name:"passportnumber",label:e("planMyTrip.passportnumber")},{default:()=>[M(r,{type:"text",value:v.passportnumber,"onUpdate:value":t=>v.passportnumber=t},null)]})]}),M(l,{span:12},{default:()=>[M(n.Item,{name:"passportvalidityP",label:e("planMyTrip.passportvalidity")},{default:()=>[M(s,{style:{width:"100%"},value:v.passportvalidityP,"onUpdate:value":t=>v.passportvalidityP=t},null)]})]})]}),M(i,{gutter:20},{default:()=>[M(l,{span:12},{default:()=>[M(n.Item,{name:"employer",label:e("planMyTrip.employer")},{default:()=>[M(r,{type:"text",value:v.employer,"onUpdate:value":t=>v.employer=t},null)]})]}),M(l,{span:12},{default:()=>[M(n.Item,{name:"residence",label:e("planMyTrip.residence")},{default:()=>[M(d,{style:{width:"100%"},value:v.residence,"onUpdate:value":t=>v.residence=t,disabledDate:t=>t<moment("2021-05-03").startOf("day")||t>moment("2021-05-10").endOf("day")},null)]})]})]}),M(i,null,{default:()=>[M(n.Item,{name:"iknow"},{default:()=>[M(u,{checked:v.iknow,"onUpdate:checked":t=>v.iknow=t},S(f=e("planMyTrip.formatattention"))?f:{default:()=>[f]})]})]}),M(i,null,{default:()=>[M("p",{class:"text_red"},[e("planMyTrip.formatattention2"),h(" "),M("br",null,null),h(" "),e("planMyTrip.formatattention3")])]}),M(i,{type:"flex",gutter:20},{default:()=>[M(l,{flex:1,style:{textAlign:"right"}},{default:()=>[M(m,{type:"primary",disabled:!v.iknow,loading:a.loading,onClick:I},S(b=e("planMyTrip.sendApply"))?b:{default:()=>[b]})]}),M(l,{flex:1},{default:()=>[M(m,{onClick:x},S(g=e("planMyTrip.reset"))?g:{default:()=>[g]})]})]})]})])}}});const C={Table:v({name:"InvitationTable",setup(){const{t:t}=f(),{invitationStore:e}=U();x((()=>{e.fetchList(0)}));let a=I((()=>({current:e.pageIndex,total:e.totalRecords})));const n=[{title:t("planMyTrip.countryname"),dataIndex:"countryname"},{title:t("planMyTrip.username"),dataIndex:"username"},{title:t("planMyTrip.gender"),dataIndex:"gender"},{title:t("planMyTrip.dateofbirth"),dataIndex:"dateofbirth",customRender:({record:t})=>`${t.dateofbirth.split(" ")[0]}`},{title:t("planMyTrip.position"),dataIndex:"position"},{title:t("planMyTrip.nationality"),dataIndex:"nationality"},{title:t("planMyTrip.passportnumber"),dataIndex:"passportnumber"},{title:t("planMyTrip.passportvalidity"),dataIndex:"passportvalidity",customRender:({record:t})=>`${t.passportvalidity.split(" ")[0]}`},{title:t("planMyTrip.employer"),dataIndex:"employer"},{title:t("planMyTrip.residence"),dataIndex:"strattime",customRender:({record:t})=>`${t.starttime.split(" ")[0]} -- ${t.stoptime.split(" ")[0]}`},{title:t("planMyTrip.createtime"),dataIndex:"createtime"},{title:t("planMyTrip.status"),dataIndex:"status",customRender:({record:e})=>t(`planMyTrip.statustype[${e.status}]`)},{title:t("planMyTrip.operation"),dataIndex:"invitationid",align:"center",fixed:"right",customRender({record:a}){if("1"===a.status){let i;return M(m,{type:"link",onClick:()=>{e.downloadPdf(a.invitationid)}},"function"==typeof(n=i=t("planMyTrip.operationbutton"))||"[object Object]"===Object.prototype.toString.call(n)&&!T(n)?i:{default:()=>[i]})}var n}}];return()=>M("div",{class:"pd_tb_20"},[M(y,{size:"small",bordered:!0,rowKey:"invitationid",dataSource:e.list,columns:n,loading:e.loading,scroll:{x:1400,y:500},pagination:{current:a.value.current,total:a.value.total,onChange:t=>{e.fetchList(t)}}},{title:()=>M("h3",null,[t("planMyTrip.list")])})])}}),Form:_};var D=v({name:"PlanMyInvitation",setup:()=>()=>M(j,null,[M(C.Form,null,null),M(C.Table,null,null)])});export{D as default};
