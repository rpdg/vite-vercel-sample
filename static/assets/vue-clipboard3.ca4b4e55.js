import{c as u}from"./nprogress.35503c85.js";import{c as l}from"./clipboard.18fc16a5.js";var a={},p=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});var s=p(l.exports),v=a.default=function(e){var t=(e==null?void 0:e.appendToBody)===void 0?!0:e.appendToBody;return{toClipboard:function(i,d){return new Promise(function(c,f){var o=document.createElement("button"),n=new s.default(o,{text:function(){return i},action:function(){return"copy"},container:d!==void 0?d:document.body});n.on("success",function(r){n.destroy(),c(r)}),n.on("error",function(r){n.destroy(),f(r)}),t&&document.body.appendChild(o),o.click(),t&&document.body.removeChild(o)})}}};export{v as _};
