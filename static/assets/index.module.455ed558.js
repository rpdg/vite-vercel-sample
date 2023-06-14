import{I as c,b as a,c as m,d as B,M as b,r as L,e as w,a as N}from"./index.701896b1.js";import{u as q}from"./FavouriteStore.3758c764.js";import{J as g}from"./@rpdg.bcb9de75.js";import{M as p,p as y,n as v,m as _}from"./ant-design-vue.3fff3ad8.js";import{_ as x}from"./vue-clipboard3.ca4b4e55.js";import{u as J}from"./vue-i18n.28a5a3dd.js";import{d as U,l as E,c as A,I as G,k as n,i as H,F as K}from"./@vue.92a87908.js";function h(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!H(e)}var oe=U({name:"ContactToolbar",props:{user:{type:Object,required:!0}},setup(e){const{t:i}=J();let{toClipboard:C}=x(),{favoriteStore:d}=q();const{chatStore:f}=w(),{appStore:F}=N();async function T(){try{await C(window.location.href),v.success({message:i("common.copied")})}catch(t){console.error(t)}}const u=E(!1);function k(){var t,r;((t=a.user)==null?void 0:t.barcode)&&((r=a.user)==null?void 0:r.barcode.length)>7?_.info(i("calendar.quickvisitor.denyinfo")):p.confirm({title:i("common.confirm"),content:i("myItb.chat.request_business_card"),onOk(){const o=a.user,s=e.user;let O={FromBarcode:o.barcode,FromCompany:o.company,FromCompany_cn:o.companyCn,FromCompanyLogo:m(o.companyLogo),FromFirstname:o.firstName,FromLastname:o.lastName,FromFirstname_cn:o.firstname_cn,FromLastname_cn:o.lastname_cn,FromHeadImage:m(o.headImageUrl),FromJobTitle:"",ToBarcode:s.employee_id,ToCompany:s.company,ToCompany_cn:s.company_cn,ToCompanyLogo:m(s.logoUrl),ToFirstname:s.firstname,ToLastname:s.lastname,ToFirstname_cn:s.firstname_cn,ToLastname_cn:s.lastname_cn,ToHeadImage:m(s.HeadImageUrl),ToJobTitle:s.job_title};f.chatWith(e.user),f.sendChattingMessage(JSON.stringify(O),6).then(()=>{v.success({message:i("myItb.chat.request_business_card_waiting")})},()=>{})}})}function I(){var t,r;((t=a.user)==null?void 0:t.barcode)&&((r=a.user)==null?void 0:r.barcode.length)>7?_.info(i("calendar.quickvisitor.denyinfo")):(F.myItbModule=B.Chat,f.chatWith(e.user))}let l=A({visibility:!1,isOnlineMeeting:1});function j(){return a.role&&(a.role==="buyer"||a.role==="exhibition")?a.role==="exhibition"&&(e.user.employee_id.substr(0,1)==="2"||e.user.employee_id.substr(0,1)==="3")?!0:a.role==="buyer"&&(e.user.employee_id.substr(0,1)==="1"||e.user.employee_id.substr(0,1)==="4"||e.user.employee_id.substr(0,1)==="7"):!1}function M(){l.visibility=!1,e.user.IsOnline===1&&(l.visibility=!0),g.set(b,e.user)}function S(){var t;e.user.employee_id.substr(0,1)==="1"||e.user.employee_id.substr(0,1)==="4"||e.user.employee_id.substr(0,1)==="7"||((t=a.user)==null?void 0:t.roleName)==="exhibition"?(g.set(b,e.user),L.push("/schedule/1")):_.info(i("calendar.offline_btn_info2"))}return G(async()=>{u.value=await d.judge({type:0,foreignKey:e.user.employee_id})}),()=>{let t,r;return n(K,null,[n(p,{visible:l.visibility,title:i("calendar.select_type"),onOk:M,onCancel:()=>{l.visibility=!1}},{default:()=>[n(y.Group,{value:l.isOnlineMeeting,"onUpdate:value":o=>l.isOnlineMeeting=o},{default:()=>[n(y.Button,{key:"1",value:1},h(t=i("calendar.online"))?t:{default:()=>[t]}),n(y.Button,{key:"0",value:0},h(r=i("calendar.offline"))?r:{default:()=>[r]})]})]}),n(c,{type:"icon-namecard",onClick:k},null),n(c,{type:"icon-icon-test",onClick:I},null),j()&&n(c,{type:"icon-icon-test2",onClick:S},null),n(c,{type:"icon-icon-test1",onClick:T},null),u.value?n(c,{type:"icon-collection-fill",onClick:async()=>{await d.delete({type:0,foreignKey:e.user.employee_id}),u.value=!1}},null):n(c,{type:"icon-collection",onClick:async()=>{await d.add({type:0,foreignKey:e.user.employee_id}),u.value=!0}},null)])}}});const R="_item_10mhg_1",V="_avatar_10mhg_6",W="_profile_10mhg_15",z="_iconBar_10mhg_19",D="_avatar_special_10mhg_36",P="_iconfontcolor_10mhg_41";var ae={item:R,avatar:V,profile:W,iconBar:z,avatar_special:D,iconfontcolor:P};export{oe as C,ae as s};
