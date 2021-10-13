import{m as P,F as A,I as E,w as G,h as M,R as Q,U as T,p as W,g as Y}from"./ant-design-vue.0721aa65.js";import{_ as Z,p as F,b as H,g as J}from"./index.65172a69.js";import{g as K}from"./Image.f0a737d7.js";import{u as X}from"./vue-i18n.0711e616.js";import{s as x}from"./index.module.c389607c.js";import{N as ee}from"./@ant-design.8f5596ac.js";import{d as ae,l as b,c as B,o as te,w as ne,O as le,S as V,U as t,Y as s,u as m,Z as oe,k as n,Q as o,F as se,B as ie,V as re,W as ue,R as L,_ as pe,$ as de}from"./@vue.fa05379c.js";import"./@babel.288dabcc.js";import"./regenerator-runtime.8463e994.js";import"./omit.js.0925d6dc.js";import"./lodash-es.e58a7599.js";import"./moment.29305b8e.js";import"./warning.ca82f8e0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./async-validator.1fa0d626.js";import"./scroll-into-view-if-needed.c68eec67.js";import"./compute-scroll-into-view.6058b3be.js";import"./vue-types.6e6d84ba.js";import"./dom-align.f1b5d360.js";import"./vue-router.8ec3c3d8.js";import"./nprogress.35503c85.js";import"./axios.a57df465.js";import"./@intlify.0eca950e.js";import"./source-map.3671d69c.js";import"./vue.d22487d2.js";import"./@ctrl.2e36ce53.js";import"./BlankGif.8ca146ab.js";import"./Config.87ac60ee.js";var me="/assets/booth.e4ab25be.jpg";const ce=ae({components:{UploadOutlined:ee},setup(){const{t:e,locale:r}=X(),h="planBooth.boothDesign";let C=r.value==="en-US"?"en":"cn",k=0;const I=b(),u=b(!1),l=B({standno:"",exhibitor:"",company:"",email:"",contactperson:"",contacttel:"",designremark:"",designpic:"",icon:[]}),c={exhibitor:[{required:!0,message:""}],email:[{required:!0,message:""}],contactperson:[{required:!0,message:""}],contacttel:[{required:!0,message:""}]},d=b([]);let v=B({results:[]});const _=b(""),j=b(""),g=b("");function $(a){l.standno=a.standno,l.exhibitor=a.exhibitor,l.company="",l.email=a.email,l.contactperson=a.contactperson,l.contacttel=a.contacttel,l.designremark=a.designremark,l.designpic=a.designpic,d.value.length=0,l.icon.length=0,a.designpic&&a.designpic.split("|").forEach((y,S)=>{d.value.push({uid:S,url:y,status:"done"}),l.icon.push(y)})}te(p);function p(){u.value=!0,F("/Operation/Getboothdesignlistbyuser",{currentlng:C,pageIndex:k,pageSize:10}).then(a=>{u.value=!1,v.results=a.results})}ne(()=>v.results,()=>{if(v.results[0]){let a=v.results[0];switch(_.value=a.createtime?`${a.createtime}   ${e(`${h}.statustype[0]`)}`:"",j.value=a.approvaltime?`${a.approvaltime}   ${e(`${h}.statustype[${a.status}]`)}`:"",a.status){case"1":g.value="green";break;case"2":g.value="red";break;default:g.value=""}$(a)}else J("user/GetCurrentUserMoreInfo").then(a=>{var f={exhibitor:"",email:"",contacttel:""};f.exhibitor=a[0].firstname+" "+a[0].lastname,f.email=a[0].email,f.contacttel=a[0].mobile,$(f)})});const w=b(!1),U=b(""),R=()=>{w.value=!1},z=async a=>{!a.url&&!a.preview&&(a.preview=await K(a.originFileObj)),U.value=a.url||a.preview,w.value=!0},N=a=>{u.value=!0;let{file:f}=a;if(f.response){u.value=!1;let y=f.response.data[0].downloadLink,S=d.value.find(D=>D.uid===f.uid);S&&(S.url=y)}else f.status==="removed"&&(u.value=!1)},O=()=>{u.value=!0,l.icon.length=0,d.value.forEach(a=>{l.icon.push(a.url)}),l.designpic=l.icon.join("|"),l.exhibitor===""||l.email===""||l.contactperson===""||l.contacttel===""?(P.info(e(`${h}.alertinfo`)),u.value=!1):F("Operation/Addboothdesign",ie(l)).then(a=>{a&&p(),u.value=!1})},q=()=>{var a;$((a=v.results[0])!=null?a:{})};return{handlePreview:z,approvalStatusColor:g,previewVisible:w,fileList:d,formRef:I,rules:c,namespace:h,previewImage:U,data:v,handleCancel:R,handleChange:N,styles:x,submitStatus:_,t:e,approvalStatus:j,formState:l,handleSubmit:O,loading:u,headers:{Authorization:H.token},resetForm:q}}}),i=e=>(re("data-v-2b58a55e"),e=e(),ue(),e),fe=i(()=>t("img",{src:me},null,-1)),ve={class:"text_red"},be=i(()=>t("br",null,null,-1)),ge={style:{"font-weight":"bold",color:"red"}},he=i(()=>t("br",null,null,-1)),$e=i(()=>t("br",null,null,-1)),_e=i(()=>t("br",null,null,-1)),je=i(()=>t("br",null,null,-1)),ye=i(()=>t("br",null,null,-1)),Se=i(()=>t("br",null,null,-1)),we=i(()=>t("br",null,null,-1)),Ce=i(()=>t("br",null,null,-1)),ke={class:"bg_white pd_20"},Ie={key:0},Ue={class:"ant-upload-text"},Fe=["src"],Be={class:"text_gray pd_b_20"},Ve=i(()=>t("br",null,null,-1)),Le=i(()=>t("br",null,null,-1)),Re=i(()=>t("br",null,null,-1)),ze=i(()=>t("br",null,null,-1)),Ne=i(()=>t("br",null,null,-1)),Oe=i(()=>t("br",null,null,-1)),qe=i(()=>t("br",null,null,-1)),De=i(()=>t("br",null,null,-1)),Pe=i(()=>t("br",null,null,-1)),Ae={class:"text_center",style:{width:"100%"}};function Ee(e,r,h,C,k,I){const u=E,l=G,c=M,d=Q,v=le("upload-outlined"),_=T,j=W,g=Y,$=A;return L(),V(se,null,[t("div",{class:oe(e.styles.formInfoSection)},[fe,t("div",null,[t("h2",ve,s(e.t(`${e.namespace}.formtitle`)),1),t("div",null,[m(s(e.t(`${e.namespace}.formcontact1`))+" ",1),be,m(" "+s(e.t(`${e.namespace}.formcontact2`)),1),t("span",ge,s(e.t(`${e.namespace}.formcontact3`)),1),he,m(" "+s(e.t(`${e.namespace}.formcontact4`))+" ",1),$e,m(" "+s(e.t(`${e.namespace}.formcontact5`))+" ",1),_e,m(" "+s(e.t(`${e.namespace}.formcontact6`))+" ",1),je,m(" "+s(e.t(`${e.namespace}.formcontact7`))+" ",1),ye,m(" "+s(e.t(`${e.namespace}.formcontact8`))+" ",1),Se,m(" "+s(e.t(`${e.namespace}.formcontact9`))+" ",1),we,m(" "+s(e.t(`${e.namespace}.formcontact10`))+" ",1),Ce])])],2),t("div",ke,[n($,{ref:"formRef",model:e.formState,rules:e.rules},{default:o(()=>[n(d,{gutter:20},{default:o(()=>[n(c,{span:12},{default:o(()=>[n(l,{name:"standno",label:e.t(`${e.namespace}.booth`)},{default:o(()=>[n(u,{value:e.formState.standno,"onUpdate:value":r[0]||(r[0]=p=>e.formState.standno=p)},null,8,["value"])]),_:1},8,["label"])]),_:1}),n(c,{span:12},{default:o(()=>[n(l,{name:"exhibitor",label:e.t(`${e.namespace}.exhibitor`)},{default:o(()=>[n(u,{value:e.formState.exhibitor,"onUpdate:value":r[1]||(r[1]=p=>e.formState.exhibitor=p)},null,8,["value"])]),_:1},8,["label"])]),_:1})]),_:1}),n(d,{gutter:20},{default:o(()=>[n(c,{span:12},{default:o(()=>[n(l,{name:"email",label:e.t(`${e.namespace}.email`)},{default:o(()=>[n(u,{value:e.formState.email,"onUpdate:value":r[2]||(r[2]=p=>e.formState.email=p)},null,8,["value"])]),_:1},8,["label"])]),_:1}),n(c,{span:12},{default:o(()=>[n(l,{name:"contactperson",label:e.t(`${e.namespace}.chargepeople`)},{default:o(()=>[n(u,{value:e.formState.contactperson,"onUpdate:value":r[3]||(r[3]=p=>e.formState.contactperson=p)},null,8,["value"])]),_:1},8,["label"])]),_:1})]),_:1}),n(d,{gutter:20},{default:o(()=>[n(c,{span:12},{default:o(()=>[n(l,{name:"contacttel",label:e.t(`${e.namespace}.chargetel`)},{default:o(()=>[n(u,{value:e.formState.contacttel,"onUpdate:value":r[4]||(r[4]=p=>e.formState.contacttel=p)},null,8,["value"])]),_:1},8,["label"])]),_:1}),n(c,{span:12},{default:o(()=>[n(l,{name:"designremark",label:e.t(`${e.namespace}.remark`)},{default:o(()=>[n(u,{value:e.formState.designremark,"onUpdate:value":r[5]||(r[5]=p=>e.formState.designremark=p)},null,8,["value"])]),_:1},8,["label"])]),_:1})]),_:1}),n(d,null,{default:o(()=>[n(_,{action:"/api/upload/files",accept:"image/jpg, image/jpeg, image/png, image/tif, image/gif",multiple:"","list-type":"picture-card","file-list":e.fileList,"onUpdate:file-list":r[6]||(r[6]=p=>e.fileList=p),headers:e.headers,onPreview:e.handlePreview,onChange:e.handleChange},{default:o(()=>[e.fileList.length<8?(L(),V("div",Ie,[n(v),t("div",Ue,s(e.t(`${e.namespace}.upload`))+" "+s(e.t(`${e.namespace}.pic${e.fileList.length+1}`)),1)])):pe("",!0)]),_:1},8,["file-list","headers","onPreview","onChange"]),n(j,{visible:e.previewVisible,footer:null,onCancel:e.handleCancel},{default:o(()=>[t("img",{alt:"example",style:{width:"100%"},src:e.previewImage},null,8,Fe)]),_:1},8,["visible","onCancel"])]),_:1}),n(d,{gutter:20},{default:o(()=>[n(c,{span:12},{default:o(()=>[n(l,{label:e.t(`${e.namespace}.applyinfo`)},{default:o(()=>[m(s(e.submitStatus),1)]),_:1},8,["label"])]),_:1}),n(c,{span:12},{default:o(()=>[n(l,{label:e.t(`${e.namespace}.approvalinfo`)},{default:o(()=>[t("span",{style:de({color:e.approvalStatusColor})},s(e.approvalStatus),5)]),_:1},8,["label"])]),_:1})]),_:1}),n(d,null,{default:o(()=>[t("div",Be,[t("span",null,s(e.t(`${e.namespace}.info1`)),1),Ve,t("span",null,s(e.t(`${e.namespace}.info2`)),1),Le,t("span",null,s(e.t(`${e.namespace}.info3`)),1),Re,t("span",null,s(e.t(`${e.namespace}.info4`,{email:"cherry.gong@syma.com.cn"})),1),ze,t("span",null,s(e.t(`${e.namespace}.info5`)),1),Ne,t("span",null,s(e.t(`${e.namespace}.info6`)),1),Oe,t("span",null,s(e.t(`${e.namespace}.info7`,{email:"crystal.jiang@syma.com.cn"})),1),qe,t("span",null,s(e.t(`${e.namespace}.info8`)),1),De,t("span",null,s(e.t(`${e.namespace}.info9`)),1),Pe])]),_:1}),n(d,{gutter:20},{default:o(()=>[t("p",Ae,[n(g,{type:"primary",onClick:e.handleSubmit,loading:e.loading},{default:o(()=>[m(s(e.t("boothactivity.sendApply")),1)]),_:1},8,["onClick","loading"]),n(g,{style:{"margin-left":"1em"},onClick:e.resetForm,disabled:e.loading},{default:o(()=>[m(s(e.t("boothactivity.reset")),1)]),_:1},8,["onClick","disabled"])])]),_:1})]),_:1},8,["model","rules"])])],64)}var ba=Z(ce,[["render",Ee],["__scopeId","data-v-2b58a55e"]]);export{ba as default};
