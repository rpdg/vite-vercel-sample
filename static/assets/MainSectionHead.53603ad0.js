import{u as l}from"./vue-i18n.1b8a7ba2.js";import{d as c}from"./vue-router.4425a21e.js";import{k as a,i as s}from"./@vue.f0a33739.js";const u="_mainSecHeadText_r8dda_1",m="_label_r8dda_9",f="_more_r8dda_13",_="_redCap_r8dda_22";var r={mainSecHeadText:u,label:m,more:f,redCap:_};function p(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!s(e)}const d=(e,{slots:t})=>{var o;let n;const{t:i}=l({useScope:"global"});return a("div",{class:r.mainSecHeadText,style:e.inner?{margin:"0"}:void 0},[a("span",{class:r.label},[e.redLead&&a("span",{class:r.redCap},null),(o=t.default)==null?void 0:o.call(t)]),e.moreLink&&a(c,{class:r.more,to:e.moreLink},p(n=i("common.more"))?n:{default:()=>[n]})])};d.props={redLead:{type:Boolean,required:!1,default:!0},moreLink:{type:String,required:!1,default:""},inner:{type:Boolean,required:!1,default:!1}};var j=d;export{j as M};
