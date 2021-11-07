var z=Object.defineProperty;var Y=(n,a,l)=>a in n?z(n,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[a]=l;var v=(n,a,l)=>(Y(n,typeof a!="symbol"?a+"":a,l),l);import{p as h}from"./index.25c5da6b.js";import{B as A,l as j}from"./@rpdg.8b8261fd.js";import{F as r,R as u,i as s,I as b,v as B,k as R,j as _,W as N,u as V,e as I,p as q,w as G}from"./ant-design-vue.33d5ec34.js";import{h as S}from"./moment.29305b8e.js";import{u as k}from"./vue-i18n.f56f8be1.js";import{s as W}from"./index.module.c8493ae7.js";import{d as x,l as K,c as F,k as e,i as O,u as U,F as C,o as E,j as H}from"./@vue.b2913f50.js";import"./vue-router.82b024de.js";import"./@ant-design.8ced1675.js";import"./@ctrl.2e36ce53.js";import"./nprogress.9dcdc490.js";import"./axios.7aed06b8.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./@intlify.e28dde39.js";import"./source-map.e9534891.js";import"./vue.7093eef6.js";var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,w=(n,a,l,o)=>{for(var t=o>1?void 0:o?Q(a,l):a,p=n.length-1,c;p>=0;p--)(c=n[p])&&(t=(o?c(a,l,t):c(t))||t);return o&&t&&J(a,l,t),t};class M extends A{constructor(){super();v(this,"currentRecord");v(this,"list");v(this,"pageIndex");v(this,"pageSize");v(this,"totalRecords");this.pageIndex=0,this.totalRecords=0,this.pageSize=10}async fetchList(a,l){let o=await h("/operation/Getletterlistbyuser",{pageIndex:a,pageSize:l||this.pageSize});this.list=o.results,this.pageIndex=a,this.totalRecords=o.totalRecord}async addLetter(a){return await h("Operation/AddLetter",a)}async downloadPdf(a){let l=await h("Operation/CreatePDF",{letterid:a});window.open(l.filename,"_blank")}}w([j],M.prototype,"fetchList",1);w([j],M.prototype,"addLetter",1);w([j],M.prototype,"downloadPdf",1);const X=new M,L=function(){return{invitationStore:X}};var Z="/assets/pic.ff892424.jpg";function T(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!O(n)}const ee=r.useForm;var te=x({name:"InvitationForm",setup(){const n="YYYY-MM-DD",{t:a}=k(),{invitationStore:l}=L(),o=K(),t=F({countryname:"",username:"",position:"",gender:"Male",dateofbirth:"",nationality:"",passportnumber:"",passportvalidity:"",employer:"",starttime:"",stoptime:"",iknow:!1,residence:[],dateofbirthP:void 0,passportvalidityP:void 0});let p=async(m,d)=>!d||d.length<2?Promise.reject(a("planMyTrip.errortimeinfo")):Promise.resolve();const c=F({dateofbirthP:[{required:!0,message:a("planMyTrip.dateofbirthTip")}],passportvalidityP:[{required:!0,message:a("planMyTrip.passportvalidityTip")}],residence:[{validator:p}]}),{resetFields:P}=ee(t,c);async function D(){var m,d,f,y;try{await o.value.validate(),t.dateofbirth=(m=t.dateofbirthP)==null?void 0:m.format(n),t.passportvalidity=(d=t.passportvalidityP)==null?void 0:d.format(n),t.starttime=(f=t.residence[0])==null?void 0:f.format(n),t.stoptime=(y=t.residence[1])==null?void 0:y.format(n),await l.addLetter(t)&&(q.success({message:a("planMyTrip.submitinfo"),placement:"topRight"}),P(),l.fetchList(0))}catch(g){}}return()=>{let m,d,f,y,g;return e(C,null,[e("div",{class:W.formInfoSection},[e("img",{src:Z},null),e("div",null,[e("h3",{class:"text_red"},[a("planMyTrip.formtitle")]),e("span",null,[a("planMyTrip.topinfo1")]),e("span",null,[a("planMyTrip.topinfo2",{email:"contact@itb-china.com"})]),e("br",null,null),e("span",null,[e("b",null,[a("planMyTrip.topinfo4")])]),e("span",null,[a("planMyTrip.topinfo3")])])]),e(r,{ref:o,model:t,rules:c},{default:()=>[e(u,{gutter:20},{default:()=>[e(s,{span:12},{default:()=>[e(r.Item,{name:"countryname",label:a("planMyTrip.countryname")},{default:()=>[e(b,{type:"text",value:t.countryname,"onUpdate:value":i=>t.countryname=i},null)]})]}),e(s,{span:12},{default:()=>[e(r.Item,{name:"username",label:a("planMyTrip.username")},{default:()=>[e(b,{type:"text",value:t.username,"onUpdate:value":i=>t.username=i},null)]})]})]}),e(u,{gutter:20},{default:()=>[e(s,{span:12},{default:()=>[e(r.Item,{name:"position",label:a("planMyTrip.position")},{default:()=>[e(b,{type:"text",value:t.position,"onUpdate:value":i=>t.position=i},null)]})]}),e(s,{span:12},{default:()=>[e(r.Item,{name:"gender",label:a("planMyTrip.gender")},{default:()=>[e(B,{value:t.gender,"onUpdate:value":i=>t.gender=i},{default:()=>[e(R,{value:"Male"},T(m=a("planMyTrip.gendercontent[0]"))?m:{default:()=>[m]}),e(R,{value:"Female"},T(d=a("planMyTrip.gendercontent[1]"))?d:{default:()=>[d]})]})]})]})]}),e(u,{gutter:20},{default:()=>[e(s,{span:12},{default:()=>[e(r.Item,{name:"dateofbirthP",label:a("planMyTrip.dateofbirth")},{default:()=>[e(_,{style:{width:"100%"},value:t.dateofbirthP,"onUpdate:value":i=>t.dateofbirthP=i},null)]})]}),e(s,{span:12},{default:()=>[e(r.Item,{name:"nationality",label:a("planMyTrip.nationality")},{default:()=>[e(b,{type:"text",value:t.nationality,"onUpdate:value":i=>t.nationality=i},null)]})]})]}),e(u,{gutter:20},{default:()=>[e(s,{span:12},{default:()=>[e(r.Item,{name:"passportnumber",label:a("planMyTrip.passportnumber")},{default:()=>[e(b,{type:"text",value:t.passportnumber,"onUpdate:value":i=>t.passportnumber=i},null)]})]}),e(s,{span:12},{default:()=>[e(r.Item,{name:"passportvalidityP",label:a("planMyTrip.passportvalidity")},{default:()=>[e(_,{style:{width:"100%"},value:t.passportvalidityP,"onUpdate:value":i=>t.passportvalidityP=i},null)]})]})]}),e(u,{gutter:20},{default:()=>[e(s,{span:12},{default:()=>[e(r.Item,{name:"employer",label:a("planMyTrip.employer")},{default:()=>[e(b,{type:"text",value:t.employer,"onUpdate:value":i=>t.employer=i},null)]})]}),e(s,{span:12},{default:()=>[e(r.Item,{name:"residence",label:a("planMyTrip.residence")},{default:()=>[e(N,{style:{width:"100%"},value:t.residence,"onUpdate:value":i=>t.residence=i,disabledDate:i=>i<S("2021-11-20").startOf("day")||i>S("2021-11-28").endOf("day")},null)]})]})]}),e(u,null,{default:()=>[e(r.Item,{name:"iknow"},{default:()=>[e(V,{checked:t.iknow,"onUpdate:checked":i=>t.iknow=i},T(f=a("planMyTrip.formatattention"))?f:{default:()=>[f]})]})]}),e(u,null,{default:()=>[e("p",{class:"text_red"},[a("planMyTrip.formatattention2"),U(" "),e("br",null,null),U(" "),a("planMyTrip.formatattention3")])]}),e(u,{type:"flex",gutter:20},{default:()=>[e(s,{flex:1,style:{textAlign:"right"}},{default:()=>[e(I,{type:"primary",disabled:!t.iknow,loading:l.loading,onClick:D},T(y=a("planMyTrip.sendApply"))?y:{default:()=>[y]})]}),e(s,{flex:1},{default:()=>[e(I,{onClick:P},T(g=a("planMyTrip.reset"))?g:{default:()=>[g]})]})]})]})])}}});function ae(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!O(n)}var ne=x({name:"InvitationTable",setup(){const{t:n}=k(),{invitationStore:a}=L();E(()=>{a.fetchList(0)});let l=H(()=>({current:a.pageIndex,total:a.totalRecords}));const o=[{title:n("planMyTrip.countryname"),dataIndex:"countryname"},{title:n("planMyTrip.username"),dataIndex:"username"},{title:n("planMyTrip.gender"),dataIndex:"gender"},{title:n("planMyTrip.dateofbirth"),dataIndex:"dateofbirth",customRender:({record:t})=>`${t.dateofbirth.split(" ")[0]}`},{title:n("planMyTrip.position"),dataIndex:"position"},{title:n("planMyTrip.nationality"),dataIndex:"nationality"},{title:n("planMyTrip.passportnumber"),dataIndex:"passportnumber"},{title:n("planMyTrip.passportvalidity"),dataIndex:"passportvalidity",customRender:({record:t})=>`${t.passportvalidity.split(" ")[0]}`},{title:n("planMyTrip.employer"),dataIndex:"employer"},{title:n("planMyTrip.residence"),dataIndex:"strattime",customRender:({record:t})=>`${t.starttime.split(" ")[0]} -- ${t.stoptime.split(" ")[0]}`},{title:n("planMyTrip.createtime"),dataIndex:"createtime"},{title:n("planMyTrip.status"),dataIndex:"status",customRender:({record:t})=>n(`planMyTrip.statustype[${t.status}]`)},{title:n("planMyTrip.operation"),dataIndex:"invitationid",align:"center",fixed:"right",customRender({record:t}){if(t.status==="1"){let p;return e(I,{type:"link",onClick:()=>{a.downloadPdf(t.invitationid)}},ae(p=n("planMyTrip.operationbutton"))?p:{default:()=>[p]})}}}];return()=>e("div",{class:"pd_tb_20"},[e(G,{size:"small",bordered:!0,rowKey:"invitationid",dataSource:a.list,columns:o,loading:a.loading,scroll:{x:1400,y:500},pagination:{current:l.value.current,total:l.value.total,onChange:t=>{a.fetchList(t)}}},{title:()=>e("h3",null,[n("planMyTrip.list")])})])}});const $={Table:ne,Form:te};var Fe=x({name:"PlanMyInvitation",setup(){return()=>e(C,null,[e($.Form,null,null),e($.Table,null,null)])}});export{Fe as default};
