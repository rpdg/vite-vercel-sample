var z=Object.defineProperty;var Y=(n,a,l)=>a in n?z(n,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[a]=l;var v=(n,a,l)=>(Y(n,typeof a!="symbol"?a+"":a,l),l);import{p as h}from"./index.9456dc5f.js";import{B as A,l as j}from"./@rpdg.e35df5be.js";import{F as r,i as u,j as s,I as b,x as B,o as R,k as _,W as N,w as V,e as x,n as q,y as G}from"./ant-design-vue.f8ac2ba9.js";import{h as S}from"./moment.29305b8e.js";import{u as k}from"./vue-i18n.df730e9c.js";import{s as W}from"./index.module.c8493ae7.js";import{d as I,l as K,c as F,k as t,i as O,u as U,F as C,o as E,j as H}from"./@vue.f0a33739.js";import"./vue-router.85e08d32.js";import"./@ant-design.a109b705.js";import"./@ctrl.2e36ce53.js";import"./nprogress.35503c85.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.647f38fa.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.19fb0a11.js";import"./source-map.e9534891.js";import"./vue.e0a06ef1.js";var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,w=(n,a,l,o)=>{for(var e=o>1?void 0:o?Q(a,l):a,p=n.length-1,f;p>=0;p--)(f=n[p])&&(e=(o?f(a,l,e):f(e))||e);return o&&e&&J(a,l,e),e};class M extends A{constructor(){super();v(this,"currentRecord");v(this,"list");v(this,"pageIndex");v(this,"pageSize");v(this,"totalRecords");this.pageIndex=0,this.totalRecords=0,this.pageSize=10}async fetchList(a,l){let o=await h("/operation/Getletterlistbyuser",{pageIndex:a,pageSize:l||this.pageSize});this.list=o.results,this.pageIndex=a,this.totalRecords=o.totalRecord}async addLetter(a){return await h("Operation/AddLetter",a)}async downloadPdf(a){let l=await h("Operation/CreatePDF",{letterid:a});window.open(l.filename,"_blank")}}w([j],M.prototype,"fetchList",1);w([j],M.prototype,"addLetter",1);w([j],M.prototype,"downloadPdf",1);const X=new M,L=function(){return{invitationStore:X}};var Z="/assets/pic.ff892424.jpg";function T(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!O(n)}const tt=r.useForm;var et=I({name:"InvitationForm",setup(){const n="YYYY-MM-DD",{t:a}=k(),{invitationStore:l}=L(),o=K(),e=F({countryname:"",username:"",position:"",gender:"Male",dateofbirth:"",nationality:"",passportnumber:"",passportvalidity:"",employer:"",starttime:"",stoptime:"",iknow:!1,residence:[],dateofbirthP:void 0,passportvalidityP:void 0});let p=async(m,d)=>!d||d.length<2?Promise.reject(a("planMyTrip.errortimeinfo")):Promise.resolve();const f=F({dateofbirthP:[{required:!0,message:a("planMyTrip.dateofbirthTip")}],passportvalidityP:[{required:!0,message:a("planMyTrip.passportvalidityTip")}],residence:[{validator:p}]}),{resetFields:P}=tt(e,f);async function D(){var m,d,c,y;try{await o.value.validate(),e.dateofbirth=(m=e.dateofbirthP)==null?void 0:m.format(n),e.passportvalidity=(d=e.passportvalidityP)==null?void 0:d.format(n),e.starttime=(c=e.residence[0])==null?void 0:c.format(n),e.stoptime=(y=e.residence[1])==null?void 0:y.format(n),await l.addLetter(e)&&(q.success({message:a("planMyTrip.submitinfo"),placement:"topRight"}),P(),l.fetchList(0))}catch(g){}}return()=>{let m,d,c,y,g;return t(C,null,[t("div",{class:W.formInfoSection},[t("img",{src:Z},null),t("div",null,[t("h3",{class:"text_red"},[a("planMyTrip.formtitle")]),t("span",null,[a("planMyTrip.topinfo1")]),t("span",null,[a("planMyTrip.topinfo2",{email:"contact@itb-china.com"})]),t("br",null,null),t("span",null,[t("b",null,[a("planMyTrip.topinfo4")])]),t("span",null,[a("planMyTrip.topinfo3")])])]),t(r,{ref:o,model:e,rules:f},{default:()=>[t(u,{gutter:20},{default:()=>[t(s,{span:12},{default:()=>[t(r.Item,{name:"countryname",label:a("planMyTrip.countryname")},{default:()=>[t(b,{type:"text",value:e.countryname,"onUpdate:value":i=>e.countryname=i},null)]})]}),t(s,{span:12},{default:()=>[t(r.Item,{name:"username",label:a("planMyTrip.username")},{default:()=>[t(b,{type:"text",value:e.username,"onUpdate:value":i=>e.username=i},null)]})]})]}),t(u,{gutter:20},{default:()=>[t(s,{span:12},{default:()=>[t(r.Item,{name:"position",label:a("planMyTrip.position")},{default:()=>[t(b,{type:"text",value:e.position,"onUpdate:value":i=>e.position=i},null)]})]}),t(s,{span:12},{default:()=>[t(r.Item,{name:"gender",label:a("planMyTrip.gender")},{default:()=>[t(B,{value:e.gender,"onUpdate:value":i=>e.gender=i},{default:()=>[t(R,{value:"Male"},T(m=a("planMyTrip.gendercontent[0]"))?m:{default:()=>[m]}),t(R,{value:"Female"},T(d=a("planMyTrip.gendercontent[1]"))?d:{default:()=>[d]})]})]})]})]}),t(u,{gutter:20},{default:()=>[t(s,{span:12},{default:()=>[t(r.Item,{name:"dateofbirthP",label:a("planMyTrip.dateofbirth")},{default:()=>[t(_,{style:{width:"100%"},value:e.dateofbirthP,"onUpdate:value":i=>e.dateofbirthP=i},null)]})]}),t(s,{span:12},{default:()=>[t(r.Item,{name:"nationality",label:a("planMyTrip.nationality")},{default:()=>[t(b,{type:"text",value:e.nationality,"onUpdate:value":i=>e.nationality=i},null)]})]})]}),t(u,{gutter:20},{default:()=>[t(s,{span:12},{default:()=>[t(r.Item,{name:"passportnumber",label:a("planMyTrip.passportnumber")},{default:()=>[t(b,{type:"text",value:e.passportnumber,"onUpdate:value":i=>e.passportnumber=i},null)]})]}),t(s,{span:12},{default:()=>[t(r.Item,{name:"passportvalidityP",label:a("planMyTrip.passportvalidity")},{default:()=>[t(_,{style:{width:"100%"},value:e.passportvalidityP,"onUpdate:value":i=>e.passportvalidityP=i},null)]})]})]}),t(u,{gutter:20},{default:()=>[t(s,{span:12},{default:()=>[t(r.Item,{name:"employer",label:a("planMyTrip.employer")},{default:()=>[t(b,{type:"text",value:e.employer,"onUpdate:value":i=>e.employer=i},null)]})]}),t(s,{span:12},{default:()=>[t(r.Item,{name:"residence",label:a("planMyTrip.residence")},{default:()=>[t(N,{style:{width:"100%"},value:e.residence,"onUpdate:value":i=>e.residence=i,disabledDate:i=>i<S("2021-11-20").startOf("day")||i>S("2021-11-28").endOf("day")},null)]})]})]}),t(u,null,{default:()=>[t(r.Item,{name:"iknow"},{default:()=>[t(V,{checked:e.iknow,"onUpdate:checked":i=>e.iknow=i},T(c=a("planMyTrip.formatattention"))?c:{default:()=>[c]})]})]}),t(u,null,{default:()=>[t("p",{class:"text_red"},[a("planMyTrip.formatattention2"),U(" "),t("br",null,null),U(" "),a("planMyTrip.formatattention3")])]}),t(u,{type:"flex",gutter:20},{default:()=>[t(s,{flex:1,style:{textAlign:"right"}},{default:()=>[t(x,{type:"primary",disabled:!e.iknow,loading:l.loading,onClick:D},T(y=a("planMyTrip.sendApply"))?y:{default:()=>[y]})]}),t(s,{flex:1},{default:()=>[t(x,{onClick:P},T(g=a("planMyTrip.reset"))?g:{default:()=>[g]})]})]})]})])}}});function at(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!O(n)}var nt=I({name:"InvitationTable",setup(){const{t:n}=k(),{invitationStore:a}=L();E(()=>{a.fetchList(0)});let l=H(()=>({current:a.pageIndex,total:a.totalRecords}));const o=[{title:n("planMyTrip.countryname"),dataIndex:"countryname"},{title:n("planMyTrip.username"),dataIndex:"username"},{title:n("planMyTrip.gender"),dataIndex:"gender"},{title:n("planMyTrip.dateofbirth"),dataIndex:"dateofbirth",customRender:({record:e})=>`${e.dateofbirth.split(" ")[0]}`},{title:n("planMyTrip.position"),dataIndex:"position"},{title:n("planMyTrip.nationality"),dataIndex:"nationality"},{title:n("planMyTrip.passportnumber"),dataIndex:"passportnumber"},{title:n("planMyTrip.passportvalidity"),dataIndex:"passportvalidity",customRender:({record:e})=>`${e.passportvalidity.split(" ")[0]}`},{title:n("planMyTrip.employer"),dataIndex:"employer"},{title:n("planMyTrip.residence"),dataIndex:"strattime",customRender:({record:e})=>`${e.starttime.split(" ")[0]} -- ${e.stoptime.split(" ")[0]}`},{title:n("planMyTrip.createtime"),dataIndex:"createtime"},{title:n("planMyTrip.status"),dataIndex:"status",customRender:({record:e})=>n(`planMyTrip.statustype[${e.status}]`)},{title:n("planMyTrip.operation"),dataIndex:"invitationid",align:"center",fixed:"right",customRender({record:e}){if(e.status==="1"){let p;return t(x,{type:"link",onClick:()=>{a.downloadPdf(e.invitationid)}},at(p=n("planMyTrip.operationbutton"))?p:{default:()=>[p]})}}}];return()=>t("div",{class:"pd_tb_20"},[t(G,{size:"small",bordered:!0,rowKey:"invitationid",dataSource:a.list,columns:o,loading:a.loading,scroll:{x:1400,y:500},pagination:{current:l.value.current,total:l.value.total,onChange:e=>{a.fetchList(e)}}},{title:()=>t("h3",null,[n("planMyTrip.list")])})])}});const $={Table:nt,Form:et};var Ft=I({name:"PlanMyInvitation",setup(){return()=>t(C,null,[t($.Form,null,null),t($.Table,null,null)])}});export{Ft as default};
