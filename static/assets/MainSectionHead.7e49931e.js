import{u as s}from"./vue-i18n.97207468.js";import{d as u}from"./vue-router.c781243b.js";import{k as a,i as m}from"./@vue.c3fad188.js";const f="_mainSecHeadText_5dtea_1",_="_label_5dtea_9",p="_more_5dtea_13",S="_redCap_5dtea_22";var t={mainSecHeadText:f,label:_,more:p,redCap:S};function b(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!m(e)}const o=(e,{slots:n,emit:l})=>{var r;let i;const{t:c}=s({useScope:"global"}),d=()=>{l("click")};return a("div",{class:t.mainSecHeadText,style:e.inner?{margin:"0"}:void 0},[a("span",{class:t.label},[e.redLead&&a("span",{class:t.redCap},null),(r=n.default)==null?void 0:r.call(n)]),e.moreLink&&a(u,{class:t.more,to:e.moreLink},b(i=c("common.more"))?i:{default:()=>[i]}),e.actionTxt&&a("div",{class:t.more,style:{display:"inline-block"},onClick:d},[e.actionTxt])])};o.props={redLead:{type:Boolean,required:!1,default:!0},moreLink:{type:String,required:!1,default:""},inner:{type:Boolean,required:!1,default:!1},actionTxt:{type:String,required:!1,default:""}};o.emits=["click"];var v=o;export{v as M};
