function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),t}function T(){return(T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function q(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function S(t,e){if(t==null)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e.indexOf(n=i[r])>=0||(o[n]=t[n]);return o}function E(t){return((e=t)!=null&&typeof e=="object"&&Array.isArray(e)===!1)==1&&Object.prototype.toString.call(t)==="[object Object]";var e}var N=Object.prototype,V=N.toString,D=N.hasOwnProperty,F=/^\s*function (\w+)/;function L(t){var e,n=(e=t==null?void 0:t.type)!==null&&e!==void 0?e:t;if(n){var r=n.toString().match(F);return r?r[1]:""}return""}var b=function(t){var e,n;return E(t)!==!1&&typeof(e=t.constructor)=="function"&&E(n=e.prototype)!==!1&&n.hasOwnProperty("isPrototypeOf")!==!1},I=function(t){return t},s=I,j=function(t,e){return D.call(t,e)},J=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t},O=Array.isArray||function(t){return V.call(t)==="[object Array]"},m=function(t){return V.call(t)==="[object Function]"},w=function(t){return b(t)&&j(t,"_vueTypes_name")},Y=function(t){return b(t)&&(j(t,"type")||["_vueTypes_name","validator","default","required"].some(function(e){return j(t,e)}))};function P(t,e){return Object.defineProperty(t.bind(e),"__original",{value:t})}function g(t,e,n){var r;n===void 0&&(n=!1);var o=!0,i="";r=b(t)?t:{type:t};var f=w(r)?r._vueTypes_name+" - ":"";if(Y(r)&&r.type!==null){if(r.type===void 0||r.type===!0||!r.required&&e===void 0)return o;O(r.type)?(o=r.type.some(function(a){return g(a,e,!0)===!0}),i=r.type.map(function(a){return L(a)}).join(" or ")):o=(i=L(r))==="Array"?O(e):i==="Object"?b(e):i==="String"||i==="Number"||i==="Boolean"||i==="Function"?function(a){if(a==null)return"";var v=a.constructor.toString().match(F);return v?v[1]:""}(e)===i:e instanceof r.type}if(!o){var l=f+'value "'+e+'" should be of type "'+i+'"';return n===!1?(s(l),!1):l}if(j(r,"validator")&&m(r.validator)){var u=s,c=[];if(s=function(a){c.push(a)},o=r.validator(e),s=u,!o){var p=(c.length>1?"* ":"")+c.join(`
* `);return c.length=0,n===!1?(s(p),o):p}}return o}function y(t,e){var n=Object.defineProperties(e,{_vueTypes_name:{value:t,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(o){return o!==void 0||this.default?m(o)||g(this,o,!0)===!0?(this.default=O(o)?function(){return[].concat(o)}:b(o)?function(){return Object.assign({},o)}:o,this):(s(this._vueTypes_name+' - invalid default value: "'+o+'"'),this):this}}}),r=n.validator;return m(r)&&(n.validator=P(r,n)),n}function d(t,e){var n=y(t,e);return Object.defineProperty(n,"validate",{value:function(r){return m(this.validator)&&s(this._vueTypes_name+` - calling .validate() will overwrite the current custom validator function. Validator info:
`+JSON.stringify(this)),this.validator=P(r,this),this}})}function B(t,e,n){var r,o,i=(r=e,o={},Object.getOwnPropertyNames(r).forEach(function(a){o[a]=Object.getOwnPropertyDescriptor(r,a)}),Object.defineProperties({},o));if(i._vueTypes_name=t,!b(n))return i;var f,l,u=n.validator,c=S(n,["validator"]);if(m(u)){var p=i.validator;p&&(p=(l=(f=p).__original)!==null&&l!==void 0?l:f),i.validator=P(p?function(a){return p.call(this,a)&&u.call(this,a)}:u,i)}return Object.assign(i,c)}function k(t){return t.replace(/^(?!\s*$)/gm,"  ")}var M=function(){return d("any",{})},R=function(){return d("function",{type:Function})},$=function(){return d("boolean",{type:Boolean})},z=function(){return d("string",{type:String})},C=function(){return d("number",{type:Number})},G=function(){return d("array",{type:Array})},H=function(){return d("object",{type:Object})},K=function(){return y("integer",{type:Number,validator:function(t){return J(t)}})},Q=function(){return y("symbol",{validator:function(t){return typeof t=="symbol"}})};function U(t,e){if(e===void 0&&(e="custom validation failed"),typeof t!="function")throw new TypeError("[VueTypes error]: You must provide a function as argument");return y(t.name||"<<anonymous function>>",{validator:function(n){var r=t(n);return r||s(this._vueTypes_name+" - "+e),r}})}function W(t){if(!O(t))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var e='oneOf - value should be one of "'+t.join('", "')+'".',n=t.reduce(function(r,o){if(o!=null){var i=o.constructor;r.indexOf(i)===-1&&r.push(i)}return r},[]);return y("oneOf",{type:n.length>0?n:void 0,validator:function(r){var o=t.indexOf(r)!==-1;return o||s(e),o}})}function X(t){if(!O(t))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var e=!1,n=[],r=0;r<t.length;r+=1){var o=t[r];if(Y(o)){if(w(o)&&o._vueTypes_name==="oneOf"){n=n.concat(o.type);continue}if(m(o.validator)&&(e=!0),o.type!==!0&&o.type){n=n.concat(o.type);continue}}n.push(o)}return n=n.filter(function(i,f){return n.indexOf(i)===f}),y("oneOfType",e?{type:n,validator:function(i){var f=[],l=t.some(function(u){var c=g(w(u)&&u._vueTypes_name==="oneOf"?u.type||null:u,i,!0);return typeof c=="string"&&f.push(c),c===!0});return l||s("oneOfType - provided value does not match any of the "+f.length+` passed-in validators:
`+k(f.join(`
`))),l}}:{type:n})}function Z(t){return y("arrayOf",{type:Array,validator:function(e){var n,r=e.every(function(o){return(n=g(t,o,!0))===!0});return r||s(`arrayOf - value validation error:
`+k(n)),r}})}function tt(t){return y("instanceOf",{type:t})}function rt(t){return y("objectOf",{type:Object,validator:function(e){var n,r=Object.keys(e).every(function(o){return(n=g(t,e[o],!0))===!0});return r||s(`objectOf - value validation error:
`+k(n)),r}})}function et(t){var e=Object.keys(t),n=e.filter(function(o){var i;return!!((i=t[o])===null||i===void 0?void 0:i.required)}),r=y("shape",{type:Object,validator:function(o){var i=this;if(!b(o))return!1;var f=Object.keys(o);if(n.length>0&&n.some(function(u){return f.indexOf(u)===-1})){var l=n.filter(function(u){return f.indexOf(u)===-1});return s(l.length===1?'shape - required property "'+l[0]+'" is not defined.':'shape - required properties "'+l.join('", "')+'" are not defined.'),!1}return f.every(function(u){if(e.indexOf(u)===-1)return i._vueTypes_isLoose===!0||(s('shape - shape definition does not include a "'+u+'" property. Allowed keys: "'+e.join('", "')+'".'),!1);var c=g(t[u],o[u],!0);return typeof c=="string"&&s('shape - "'+u+`" property validation error:
 `+k(c)),c===!0})}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),r}var h=function(){function t(){}return t.extend=function(e){var n=this;if(O(e))return e.forEach(function(a){return n.extend(a)}),this;var r=e.name,o=e.validate,i=o!==void 0&&o,f=e.getter,l=f!==void 0&&f,u=S(e,["name","validate","getter"]);if(j(this,r))throw new TypeError('[VueTypes error]: Type "'+r+'" already defined');var c,p=u.type;return w(p)?(delete u.type,Object.defineProperty(this,r,l?{get:function(){return B(r,p,u)}}:{value:function(){var a,v=B(r,p,u);return v.validator&&(v.validator=(a=v.validator).bind.apply(a,[v].concat([].slice.call(arguments)))),v}})):(c=l?{get:function(){var a=Object.assign({},u);return i?d(r,a):y(r,a)},enumerable:!0}:{value:function(){var a,v,_=Object.assign({},u);return a=i?d(r,_):y(r,_),_.validator&&(a.validator=(v=_.validator).bind.apply(v,[a].concat([].slice.call(arguments)))),a},enumerable:!0},Object.defineProperty(this,r,c))},A(t,null,[{key:"any",get:function(){return M()}},{key:"func",get:function(){return R().def(this.defaults.func)}},{key:"bool",get:function(){return $().def(this.defaults.bool)}},{key:"string",get:function(){return z().def(this.defaults.string)}},{key:"number",get:function(){return C().def(this.defaults.number)}},{key:"array",get:function(){return G().def(this.defaults.array)}},{key:"object",get:function(){return H().def(this.defaults.object)}},{key:"integer",get:function(){return K().def(this.defaults.integer)}},{key:"symbol",get:function(){return Q()}}]),t}();function nt(t){var e;return t===void 0&&(t={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),(e=function(n){function r(){return n.apply(this,arguments)||this}return q(r,n),A(r,null,[{key:"sensibleDefaults",get:function(){return T({},this.defaults)},set:function(o){this.defaults=o!==!1?T({},o!==!0?o:t):{}}}]),r}(h)).defaults=T({},t),e}h.defaults={},h.custom=U,h.oneOf=W,h.instanceOf=tt,h.oneOfType=X,h.arrayOf=Z,h.objectOf=rt,h.shape=et,h.utils={validate:function(t,e){return g(e,t,!0)===!0},toType:function(t,e,n){return n===void 0&&(n=!1),n?d(t,e):y(t,e)}};(function(t){function e(){return t.apply(this,arguments)||this}return q(e,t),e})(nt());export{nt as z};
