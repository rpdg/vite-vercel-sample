import{r as _}from"./regenerator-runtime.8463e994.js";function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(n){g(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function c(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?c=function(r){return typeof r}:c=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},c(e)}function m(e){if(Array.isArray(e))return e}function O(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],a=!0,u=!1,f,l;try{for(r=r.call(e);!(a=(f=r.next()).done)&&(n.push(f.value),!(t&&n.length===t));a=!0);}catch(o){u=!0,l=o}finally{try{!a&&r.return!=null&&r.return()}finally{if(u)throw l}}return n}}function s(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){if(!!e){if(typeof e=="string")return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(e,t){return m(e)||O(e,t)||y(e,t)||h()}function w(e){if(Array.isArray(e))return s(e)}function d(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function S(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(e){return w(e)||d(e)||y(e)||S()}function T(e){return m(e)||d(e)||y(e)||h()}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),e}var C=_.exports;function D(e,t){var r=typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=y(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(i){throw i},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u=!0,f=!1,l;return{s:function(){r=r.call(e)},n:function(){var i=r.next();return u=i.done,i},e:function(i){f=!0,l=i},f:function(){try{!u&&r.return!=null&&r.return()}finally{if(f)throw l}}}}export{c as _,P as a,p as b,j as c,g as d,I as e,T as f,x as g,E as h,D as i,C as r};
