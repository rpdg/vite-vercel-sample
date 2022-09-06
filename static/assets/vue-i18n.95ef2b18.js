import{s as Ze,c as et}from"./@intlify.19fb0a11.js";import{v as tt}from"./vue.9582b89e.js";var k={};/*!
  * vue-i18n v9.2.0-beta.17
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */Object.defineProperty(k,"__esModule",{value:!0});var a=Ze.exports,f=et.exports,g=tt.exports;const me="9.2.0-beta.17";let _e=f.CoreWarnCodes.__EXTEND_POINT__;const D=()=>_e++,N={FALLBACK_TO_ROOT:_e,NOT_SUPPORTED_PRESERVE:D(),NOT_SUPPORTED_FORMATTER:D(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:D(),NOT_SUPPORTED_GET_CHOICE_INDEX:D(),COMPONENT_NAME_LEGACY_COMPATIBLE:D(),NOT_FOUND_PARENT_SCOPE:D(),NOT_SUPPORT_MULTI_I18N_INSTANCE:D()},at={[N.FALLBACK_TO_ROOT]:"Fall back to {type} '{key}' with root locale.",[N.NOT_SUPPORTED_PRESERVE]:"Not supported 'preserve'.",[N.NOT_SUPPORTED_FORMATTER]:"Not supported 'formatter'.",[N.NOT_SUPPORTED_PRESERVE_DIRECTIVE]:"Not supported 'preserveDirectiveContent'.",[N.NOT_SUPPORTED_GET_CHOICE_INDEX]:"Not supported 'getChoiceIndex'.",[N.COMPONENT_NAME_LEGACY_COMPATIBLE]:"Component name legacy compatible: '{name}' -> 'i18n'",[N.NOT_FOUND_PARENT_SCOPE]:"Not found parent scope. use the global scope.",[N.NOT_SUPPORT_MULTI_I18N_INSTANCE]:"Not support multi i18n instance."};function y(e,...s){return a.format(at[e],...s)}let fe=f.CompileErrorCodes.__EXTEND_POINT__;const v=()=>fe++,d={UNEXPECTED_RETURN_TYPE:fe,INVALID_ARGUMENT:v(),MUST_BE_CALL_SETUP_TOP:v(),NOT_INSLALLED:v(),NOT_AVAILABLE_IN_LEGACY_MODE:v(),REQUIRED_VALUE:v(),INVALID_VALUE:v(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:v(),NOT_INSLALLED_WITH_PROVIDE:v(),UNEXPECTED_ERROR:v(),NOT_COMPATIBLE_LEGACY_VUE_I18N:v(),BRIDGE_SUPPORT_VUE_2_ONLY:v(),__EXTEND_POINT__:v()};function I(e,...s){return f.createCompileError(e,null,{messages:nt,args:s})}const nt={[d.UNEXPECTED_RETURN_TYPE]:"Unexpected return type in composer",[d.INVALID_ARGUMENT]:"Invalid argument",[d.MUST_BE_CALL_SETUP_TOP]:"Must be called at the top of a `setup` function",[d.NOT_INSLALLED]:"Need to install with `app.use` function",[d.UNEXPECTED_ERROR]:"Unexpected error",[d.NOT_AVAILABLE_IN_LEGACY_MODE]:"Not available in legacy mode",[d.REQUIRED_VALUE]:"Required in value: {0}",[d.INVALID_VALUE]:"Invalid value",[d.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]:"Cannot setup vue-devtools plugin",[d.NOT_INSLALLED_WITH_PROVIDE]:"Need to install with `provide` function",[d.NOT_COMPATIBLE_LEGACY_VUE_I18N]:"Not compatible legacy VueI18n.",[d.BRIDGE_SUPPORT_VUE_2_ONLY]:"vue-i18n-bridge support Vue 2.x only"},z=a.makeSymbol("__transrateVNode"),J=a.makeSymbol("__datetimeParts"),q=a.makeSymbol("__numberParts"),Q=a.makeSymbol("__enableEmitter"),Z=a.makeSymbol("__disableEmitter"),ge=a.makeSymbol("__setPluralRules");a.makeSymbol("__intlifyMeta");const be=a.makeSymbol("__injectWithOption");function ee(e){if(!a.isObject(e))return e;for(const s in e)if(!!a.hasOwn(e,s))if(!s.includes("."))a.isObject(e[s])&&ee(e[s]);else{const t=s.split("."),i=t.length-1;let n=e;for(let r=0;r<i;r++)t[r]in n||(n[t[r]]={}),n=n[t[r]];n[t[i]]=e[s],delete e[s],a.isObject(n[t[i]])&&ee(n[t[i]])}return e}function te(e,s){const{messages:t,__i18n:i,messageResolver:n,flatJson:r}=s,c=a.isPlainObject(t)?t:a.isArray(i)?{}:{[e]:{}};if(a.isArray(i)&&i.forEach(u=>{if("locale"in u&&"resource"in u){const{locale:_,resource:E}=u;_?(c[_]=c[_]||{},$(E,c[_])):$(E,c)}else a.isString(u)&&$(JSON.parse(u),c)}),n==null&&r)for(const u in c)a.hasOwn(c,u)&&ee(c[u]);return c}const x=e=>!a.isObject(e)||a.isArray(e);function $(e,s){if(x(e)||x(s))throw I(d.INVALID_VALUE);for(const t in e)a.hasOwn(e,t)&&(x(e[t])||x(s[t])?s[t]=e[t]:$(e[t],s[t]))}function Ee(e){return e.type}const de="__INTLIFY_META__";let Te=0;function Oe(e){return(s,t,i,n)=>e(t,i,g.getCurrentInstance()||void 0,n)}const rt=()=>{const e=g.getCurrentInstance();let s=null;return e&&(s=Ee(e)[de])?{[de]:s}:null};function ae(e={},s){const{__root:t}=e,i=t===void 0;let n=a.isBoolean(e.inheritLocale)?e.inheritLocale:!0;const r=g.ref(t&&n?t.locale.value:a.isString(e.locale)?e.locale:f.DEFAULT_LOCALE),c=g.ref(t&&n?t.fallbackLocale.value:a.isString(e.fallbackLocale)||a.isArray(e.fallbackLocale)||a.isPlainObject(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:r.value),u=g.ref(te(r.value,e)),_=g.ref(a.isPlainObject(e.datetimeFormats)?e.datetimeFormats:{[r.value]:{}}),E=g.ref(a.isPlainObject(e.numberFormats)?e.numberFormats:{[r.value]:{}});let b=t?t.missingWarn:a.isBoolean(e.missingWarn)||a.isRegExp(e.missingWarn)?e.missingWarn:!0,T=t?t.fallbackWarn:a.isBoolean(e.fallbackWarn)||a.isRegExp(e.fallbackWarn)?e.fallbackWarn:!0,R=t?t.fallbackRoot:a.isBoolean(e.fallbackRoot)?e.fallbackRoot:!0,F=!!e.fallbackFormat,S=a.isFunction(e.missing)?e.missing:null,C=a.isFunction(e.missing)?Oe(e.missing):null,h=a.isFunction(e.postTranslation)?e.postTranslation:null,U=a.isBoolean(e.warnHtmlMessage)?e.warnHtmlMessage:!0,V=!!e.escapeParameter;const H=t?t.modifiers:a.isPlainObject(e.modifiers)?e.modifiers:{};let M=e.pluralRules||t&&t.pluralRules,m;function ie(){const l={version:me,locale:r.value,fallbackLocale:c.value,messages:u.value,modifiers:H,pluralRules:M,missing:C===null?void 0:C,missingWarn:b,fallbackWarn:T,fallbackFormat:F,unresolving:!0,postTranslation:h===null?void 0:h,warnHtmlMessage:U,escapeParameter:V,messageResolver:e.messageResolver,__meta:{framework:"vue"}};return l.datetimeFormats=_.value,l.numberFormats=E.value,l.__datetimeFormatters=a.isPlainObject(m)?m.__datetimeFormatters:void 0,l.__numberFormatters=a.isPlainObject(m)?m.__numberFormatters:void 0,l.__v_emitter=a.isPlainObject(m)?m.__v_emitter:void 0,f.createCoreContext(l)}m=ie(),f.updateFallbackLocale(m,r.value,c.value);function W(){return[r.value,c.value,u.value,_.value,E.value]}const w=g.computed({get:()=>r.value,set:l=>{r.value=l,m.locale=r.value}}),X=g.computed({get:()=>c.value,set:l=>{c.value=l,m.fallbackLocale=c.value,f.updateFallbackLocale(m,r.value,l)}}),Pe=g.computed(()=>u.value),Fe=g.computed(()=>_.value),ve=g.computed(()=>E.value);function ye(){return a.isFunction(h)?h:null}function Se(l){h=l,m.postTranslation=l}function ke(){return S}function he(l){l!==null&&(C=Oe(l)),S=l,m.missing=C}function pe(l,o){return l!=="translate"||!o.resolvedMessage}function A(l,o,P,L,K,B){W();let j;try{f.setAdditionalMeta(rt()),j=l(m)}finally{f.setAdditionalMeta(null)}if(a.isNumber(j)&&j===f.NOT_REOSLVED){const[p,Qe]=o();if(t&&a.isString(p)&&pe(P,Qe)){R&&(f.isTranslateFallbackWarn(T,p)||f.isTranslateMissingWarn(b,p))&&a.warn(y(N.FALLBACK_TO_ROOT,{key:p,type:P}));{const{__v_emitter:ue}=m;ue&&R&&ue.emit("fallback",{type:P,key:p,to:"global",groupId:`${P}:${p}`})}}return t&&R?L(t):K(p)}else{if(B(j))return j;throw I(d.UNEXPECTED_RETURN_TYPE)}}function ce(...l){return A(o=>Reflect.apply(f.translate,null,[o,...l]),()=>f.parseTranslateArgs(...l),"translate",o=>Reflect.apply(o.t,o,[...l]),o=>o,o=>a.isString(o))}function De(...l){const[o,P,L]=l;if(L&&!a.isObject(L))throw I(d.INVALID_ARGUMENT);return ce(o,P,a.assign({resolvedMessage:!0},L||{}))}function Ce(...l){return A(o=>Reflect.apply(f.datetime,null,[o,...l]),()=>f.parseDateTimeArgs(...l),"datetime format",o=>Reflect.apply(o.d,o,[...l]),()=>f.MISSING_RESOLVE_VALUE,o=>a.isString(o))}function Me(...l){return A(o=>Reflect.apply(f.number,null,[o,...l]),()=>f.parseNumberArgs(...l),"number format",o=>Reflect.apply(o.n,o,[...l]),()=>f.MISSING_RESOLVE_VALUE,o=>a.isString(o))}function Ae(l){return l.map(o=>a.isString(o)?g.createVNode(g.Text,null,o,0):o)}const Ue={normalize:Ae,interpolate:l=>l,type:"vnode"};function Ve(...l){return A(o=>{let P;const L=o;try{L.processor=Ue,P=Reflect.apply(f.translate,null,[L,...l])}finally{L.processor=null}return P},()=>f.parseTranslateArgs(...l),"translate",o=>o[z](...l),o=>[g.createVNode(g.Text,null,o,0)],o=>a.isArray(o))}function We(...l){return A(o=>Reflect.apply(f.number,null,[o,...l]),()=>f.parseNumberArgs(...l),"number format",o=>o[q](...l),()=>[],o=>a.isString(o)||a.isArray(o))}function we(...l){return A(o=>Reflect.apply(f.datetime,null,[o,...l]),()=>f.parseDateTimeArgs(...l),"datetime format",o=>o[J](...l),()=>[],o=>a.isString(o)||a.isArray(o))}function je(l){M=l,m.pluralRules=M}function $e(l,o){const P=a.isString(o)?o:r.value,L=oe(P);return m.messageResolver(L,l)!==null}function He(l){let o=null;const P=f.fallbackWithLocaleChain(m,c.value,r.value);for(let L=0;L<P.length;L++){const K=u.value[P[L]]||{},B=m.messageResolver(K,l);if(B!=null){o=B;break}}return o}function Be(l){const o=He(l);return o!=null?o:t?t.tm(l)||{}:{}}function oe(l){return u.value[l]||{}}function xe(l,o){u.value[l]=o,m.messages=u.value}function Ge(l,o){u.value[l]=u.value[l]||{},$(o,u.value[l]),m.messages=u.value}function Ye(l){return _.value[l]||{}}function Xe(l,o){_.value[l]=o,m.datetimeFormats=_.value,f.clearDateTimeFormat(m,l,o)}function Ke(l,o){_.value[l]=a.assign(_.value[l]||{},o),m.datetimeFormats=_.value,f.clearDateTimeFormat(m,l,o)}function ze(l){return E.value[l]||{}}function Je(l,o){E.value[l]=o,m.numberFormats=E.value,f.clearNumberFormat(m,l,o)}function qe(l,o){E.value[l]=a.assign(E.value[l]||{},o),m.numberFormats=E.value,f.clearNumberFormat(m,l,o)}Te++,t&&(g.watch(t.locale,l=>{n&&(r.value=l,m.locale=l,f.updateFallbackLocale(m,r.value,c.value))}),g.watch(t.fallbackLocale,l=>{n&&(c.value=l,m.fallbackLocale=l,f.updateFallbackLocale(m,r.value,c.value))}));const O={id:Te,locale:w,fallbackLocale:X,get inheritLocale(){return n},set inheritLocale(l){n=l,l&&t&&(r.value=t.locale.value,c.value=t.fallbackLocale.value,f.updateFallbackLocale(m,r.value,c.value))},get availableLocales(){return Object.keys(u.value).sort()},messages:Pe,get modifiers(){return H},get pluralRules(){return M||{}},get isGlobal(){return i},get missingWarn(){return b},set missingWarn(l){b=l,m.missingWarn=b},get fallbackWarn(){return T},set fallbackWarn(l){T=l,m.fallbackWarn=T},get fallbackRoot(){return R},set fallbackRoot(l){R=l},get fallbackFormat(){return F},set fallbackFormat(l){F=l,m.fallbackFormat=F},get warnHtmlMessage(){return U},set warnHtmlMessage(l){U=l,m.warnHtmlMessage=l},get escapeParameter(){return V},set escapeParameter(l){V=l,m.escapeParameter=l},t:ce,getLocaleMessage:oe,setLocaleMessage:xe,mergeLocaleMessage:Ge,getPostTranslationHandler:ye,setPostTranslationHandler:Se,getMissingHandler:ke,setMissingHandler:he,[ge]:je};return O.datetimeFormats=Fe,O.numberFormats=ve,O.rt=De,O.te=$e,O.tm=Be,O.d=Ce,O.n=Me,O.getDateTimeFormat=Ye,O.setDateTimeFormat=Xe,O.mergeDateTimeFormat=Ke,O.getNumberFormat=ze,O.setNumberFormat=Je,O.mergeNumberFormat=qe,O[be]=e.__injectWithOption,O[z]=Ve,O[q]=We,O[J]=we,O[Q]=l=>{m.__v_emitter=l},O[Z]=()=>{m.__v_emitter=void 0},O}function lt(e){const s=a.isString(e.locale)?e.locale:f.DEFAULT_LOCALE,t=a.isString(e.fallbackLocale)||a.isArray(e.fallbackLocale)||a.isPlainObject(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s,i=a.isFunction(e.missing)?e.missing:void 0,n=a.isBoolean(e.silentTranslationWarn)||a.isRegExp(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,r=a.isBoolean(e.silentFallbackWarn)||a.isRegExp(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,c=a.isBoolean(e.fallbackRoot)?e.fallbackRoot:!0,u=!!e.formatFallbackMessages,_=a.isPlainObject(e.modifiers)?e.modifiers:{},E=e.pluralizationRules,b=a.isFunction(e.postTranslation)?e.postTranslation:void 0,T=a.isString(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,R=!!e.escapeParameterHtml,F=a.isBoolean(e.sync)?e.sync:!0;e.formatter&&a.warn(y(N.NOT_SUPPORTED_FORMATTER)),e.preserveDirectiveContent&&a.warn(y(N.NOT_SUPPORTED_PRESERVE_DIRECTIVE));let S=e.messages;if(a.isPlainObject(e.sharedMessages)){const m=e.sharedMessages;S=Object.keys(m).reduce((W,w)=>{const X=W[w]||(W[w]={});return a.assign(X,m[w]),W},S||{})}const{__i18n:C,__root:h,__injectWithOption:U}=e,V=e.datetimeFormats,H=e.numberFormats,M=e.flatJson;return{locale:s,fallbackLocale:t,messages:S,flatJson:M,datetimeFormats:V,numberFormats:H,missing:i,missingWarn:n,fallbackWarn:r,fallbackRoot:c,fallbackFormat:u,modifiers:_,pluralRules:E,postTranslation:b,warnHtmlMessage:T,escapeParameter:R,messageResolver:e.messageResolver,inheritLocale:F,__i18n:C,__root:h,__injectWithOption:U}}function ne(e={},s){{const t=ae(lt(e)),i={id:t.id,get locale(){return t.locale.value},set locale(n){t.locale.value=n},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(n){t.fallbackLocale.value=n},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return a.warn(y(N.NOT_SUPPORTED_FORMATTER)),{interpolate(){return[]}}},set formatter(n){a.warn(y(N.NOT_SUPPORTED_FORMATTER))},get missing(){return t.getMissingHandler()},set missing(n){t.setMissingHandler(n)},get silentTranslationWarn(){return a.isBoolean(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(n){t.missingWarn=a.isBoolean(n)?!n:n},get silentFallbackWarn(){return a.isBoolean(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(n){t.fallbackWarn=a.isBoolean(n)?!n:n},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(n){t.fallbackFormat=n},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(n){t.setPostTranslationHandler(n)},get sync(){return t.inheritLocale},set sync(n){t.inheritLocale=n},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(n){t.warnHtmlMessage=n!=="off"},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(n){t.escapeParameter=n},get preserveDirectiveContent(){return a.warn(y(N.NOT_SUPPORTED_PRESERVE_DIRECTIVE)),!0},set preserveDirectiveContent(n){a.warn(y(N.NOT_SUPPORTED_PRESERVE_DIRECTIVE))},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...n){const[r,c,u]=n,_={};let E=null,b=null;if(!a.isString(r))throw I(d.INVALID_ARGUMENT);const T=r;return a.isString(c)?_.locale=c:a.isArray(c)?E=c:a.isPlainObject(c)&&(b=c),a.isArray(u)?E=u:a.isPlainObject(u)&&(b=u),Reflect.apply(t.t,t,[T,E||b||{},_])},rt(...n){return Reflect.apply(t.rt,t,[...n])},tc(...n){const[r,c,u]=n,_={plural:1};let E=null,b=null;if(!a.isString(r))throw I(d.INVALID_ARGUMENT);const T=r;return a.isString(c)?_.locale=c:a.isNumber(c)?_.plural=c:a.isArray(c)?E=c:a.isPlainObject(c)&&(b=c),a.isString(u)?_.locale=u:a.isArray(u)?E=u:a.isPlainObject(u)&&(b=u),Reflect.apply(t.t,t,[T,E||b||{},_])},te(n,r){return t.te(n,r)},tm(n){return t.tm(n)},getLocaleMessage(n){return t.getLocaleMessage(n)},setLocaleMessage(n,r){t.setLocaleMessage(n,r)},mergeLocaleMessage(n,r){t.mergeLocaleMessage(n,r)},d(...n){return Reflect.apply(t.d,t,[...n])},getDateTimeFormat(n){return t.getDateTimeFormat(n)},setDateTimeFormat(n,r){t.setDateTimeFormat(n,r)},mergeDateTimeFormat(n,r){t.mergeDateTimeFormat(n,r)},n(...n){return Reflect.apply(t.n,t,[...n])},getNumberFormat(n){return t.getNumberFormat(n)},setNumberFormat(n,r){t.setNumberFormat(n,r)},mergeNumberFormat(n,r){t.mergeNumberFormat(n,r)},getChoiceIndex(n,r){return a.warn(y(N.NOT_SUPPORTED_GET_CHOICE_INDEX)),-1},__onComponentInstanceCreated(n){const{componentInstanceCreatedListener:r}=e;r&&r(n,i)}};return i.__enableEmitter=n=>{const r=t;r[Q]&&r[Q](n)},i.__disableEmitter=()=>{const n=t;n[Z]&&n[Z]()},i}}const re={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}},G=g.defineComponent({name:"i18n-t",props:a.assign({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>a.isNumber(e)||!isNaN(e)}},re),setup(e,s){const{slots:t,attrs:i}=s,n=e.i18n||Y({useScope:e.scope,__useComponent:!0}),r=Object.keys(t).filter(c=>c!=="_");return()=>{const c={};e.locale&&(c.locale=e.locale),e.plural!==void 0&&(c.plural=a.isString(e.plural)?+e.plural:e.plural);const u=st(s,r),_=n[z](e.keypath,u,c),E=a.assign({},i),b=a.isString(e.tag)||a.isObject(e.tag)?e.tag:g.Fragment;return g.h(b,E,_)}}});function st({slots:e},s){return s.length===1&&s[0]==="default"?e.default?e.default():[]:s.reduce((t,i)=>{const n=e[i];return n&&(t[i]=n()),t},{})}function Ne(e,s,t,i){const{slots:n,attrs:r}=s;return()=>{const c={part:!0};let u={};e.locale&&(c.locale=e.locale),a.isString(e.format)?c.key=e.format:a.isObject(e.format)&&(a.isString(e.format.key)&&(c.key=e.format.key),u=Object.keys(e.format).reduce((R,F)=>t.includes(F)?a.assign({},R,{[F]:e.format[F]}):R,{}));const _=i(e.value,c,u);let E=[c.key];a.isArray(_)?E=_.map((R,F)=>{const S=n[R.type];return S?S({[R.type]:R.value,index:F,parts:_}):[R.value]}):a.isString(_)&&(E=[_]);const b=a.assign({},r),T=a.isString(e.tag)||a.isObject(e.tag)?e.tag:g.Fragment;return g.h(T,b,E)}}const it=["localeMatcher","style","unit","unitDisplay","currency","currencyDisplay","useGrouping","numberingSystem","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","notation","formatMatcher"],le=g.defineComponent({name:"i18n-n",props:a.assign({value:{type:Number,required:!0},format:{type:[String,Object]}},re),setup(e,s){const t=e.i18n||Y({useScope:"parent",__useComponent:!0});return Ne(e,s,it,(...i)=>t[q](...i))}}),ct=["dateStyle","timeStyle","fractionalSecondDigits","calendar","dayPeriod","numberingSystem","localeMatcher","timeZone","hour12","hourCycle","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"],se=g.defineComponent({name:"i18n-d",props:a.assign({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},re),setup(e,s){const t=e.i18n||Y({useScope:"parent",__useComponent:!0});return Ne(e,s,ct,(...i)=>t[J](...i))}});function ot(e,s){const t=e;if(e.mode==="composition")return t.__getInstance(s)||e.global;{const i=t.__getInstance(s);return i!=null?i.__composer:e.global.__composer}}function Re(e){const s=(t,{instance:i,value:n,modifiers:r})=>{if(!i||!i.$)throw I(d.UNEXPECTED_ERROR);const c=ot(e,i.$);r.preserve&&a.warn(y(N.NOT_SUPPORTED_PRESERVE));const u=ut(n);t.textContent=Reflect.apply(c.t,c,[...mt(u)])};return{beforeMount:s,beforeUpdate:s}}function ut(e){if(a.isString(e))return{path:e};if(a.isPlainObject(e)){if(!("path"in e))throw I(d.REQUIRED_VALUE,"path");return e}else throw I(d.INVALID_VALUE)}function mt(e){const{path:s,locale:t,args:i,choice:n,plural:r}=e,c={},u=i||{};return a.isString(t)&&(c.locale=t),a.isNumber(n)&&(c.plural=n),a.isNumber(r)&&(c.plural=r),[s,u,c]}function _t(e,s,...t){const i=a.isPlainObject(t[0])?t[0]:{},n=!!i.useI18nComponentName,r=a.isBoolean(i.globalInstall)?i.globalInstall:!0;r&&n&&a.warn(y(N.COMPONENT_NAME_LEGACY_COMPATIBLE,{name:G.name})),r&&(e.component(n?"i18n":G.name,G),e.component(le.name,le),e.component(se.name,se)),e.directive("t",Re(s))}function ft(e,s,t){return{beforeCreate(){const i=g.getCurrentInstance();if(!i)throw I(d.UNEXPECTED_ERROR);const n=this.$options;if(n.i18n){const r=n.i18n;n.__i18n&&(r.__i18n=n.__i18n),r.__root=s,this===this.$root?this.$i18n=Ie(e,r):(r.__injectWithOption=!0,this.$i18n=ne(r))}else n.__i18n?this===this.$root?this.$i18n=Ie(e,n):this.$i18n=ne({__i18n:n.__i18n,__injectWithOption:!0,__root:s}):this.$i18n=e;e.__onComponentInstanceCreated(this.$i18n),t.__setInstance(i,this.$i18n),this.$t=(...r)=>this.$i18n.t(...r),this.$rt=(...r)=>this.$i18n.rt(...r),this.$tc=(...r)=>this.$i18n.tc(...r),this.$te=(r,c)=>this.$i18n.te(r,c),this.$d=(...r)=>this.$i18n.d(...r),this.$n=(...r)=>this.$i18n.n(...r),this.$tm=r=>this.$i18n.tm(r)},mounted(){},unmounted(){const i=g.getCurrentInstance();if(!i)throw I(d.UNEXPECTED_ERROR);g.nextTick(()=>{delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,t.__deleteInstance(i),delete this.$i18n})}}}function Ie(e,s){e.locale=s.locale||e.locale,e.fallbackLocale=s.fallbackLocale||e.fallbackLocale,e.missing=s.missing||e.missing,e.silentTranslationWarn=s.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=s.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=s.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=s.postTranslation||e.postTranslation,e.warnHtmlInMessage=s.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=s.escapeParameterHtml||e.escapeParameterHtml,e.sync=s.sync||e.sync,e.__composer[ge](s.pluralizationRules||e.pluralizationRules);const t=te(e.locale,{messages:s.messages,__i18n:s.__i18n});return Object.keys(t).forEach(i=>e.mergeLocaleMessage(i,t[i])),s.datetimeFormats&&Object.keys(s.datetimeFormats).forEach(i=>e.mergeDateTimeFormat(i,s.datetimeFormats[i])),s.numberFormats&&Object.keys(s.numberFormats).forEach(i=>e.mergeNumberFormat(i,s.numberFormats[i])),e}const Le=a.makeSymbol("global-vue-i18n");function gt(e={},s){const t=a.isBoolean(e.legacy)?e.legacy:!0,i=!!e.globalInjection,n=new Map,r=bt(e,t),c=a.makeSymbol("vue-i18n");function u(b){return n.get(b)||null}function _(b,T){n.set(b,T)}function E(b){n.delete(b)}{const b={get mode(){return t?"legacy":"composition"},async install(T,...R){T.__VUE_I18N_SYMBOL__=c,T.provide(T.__VUE_I18N_SYMBOL__,b),!t&&i&&Pt(T,b.global),_t(T,b,...R),t&&T.mixin(ft(r,r.__composer,b))},get global(){return r},__instances:n,__getInstance:u,__setInstance:_,__deleteInstance:E};return b}}function Y(e={}){const s=g.getCurrentInstance();if(s==null)throw I(d.MUST_BE_CALL_SETUP_TOP);if(!s.isCE&&s.appContext.app!=null&&!s.appContext.app.__VUE_I18N_SYMBOL__)throw I(d.NOT_INSLALLED);const t=Et(s),i=Tt(t),n=Ee(s),r=dt(e,n);if(r==="global")return Ot(i,e,n),i;if(r==="parent"){let _=Nt(t,s,e.__useComponent);return _==null&&(a.warn(y(N.NOT_FOUND_PARENT_SCOPE)),_=i),_}if(t.mode==="legacy")throw I(d.NOT_AVAILABLE_IN_LEGACY_MODE);const c=t;let u=c.__getInstance(s);if(u==null){const _=a.assign({},e);"__i18n"in n&&(_.__i18n=n.__i18n),i&&(_.__root=i),u=ae(_),Rt(c,s),c.__setInstance(s,u)}return u}function bt(e,s,t){return s?ne(e):ae(e)}function Et(e){{const s=g.inject(e.isCE?Le:e.appContext.app.__VUE_I18N_SYMBOL__);if(!s)throw I(e.isCE?d.NOT_INSLALLED_WITH_PROVIDE:d.UNEXPECTED_ERROR);return s}}function dt(e,s){return a.isEmptyObject(e)?"__i18n"in s?"local":"global":e.useScope?e.useScope:"local"}function Tt(e){return e.mode==="composition"?e.global:e.global.__composer}function Ot(e,s,t){let i=a.isObject(s.messages)?s.messages:{};"__i18nGlobal"in t&&(i=te(e.locale.value,{messages:i,__i18n:t.__i18nGlobal}));const n=Object.keys(i);n.length&&n.forEach(r=>{e.mergeLocaleMessage(r,i[r])});{if(a.isObject(s.datetimeFormats)){const r=Object.keys(s.datetimeFormats);r.length&&r.forEach(c=>{e.mergeDateTimeFormat(c,s.datetimeFormats[c])})}if(a.isObject(s.numberFormats)){const r=Object.keys(s.numberFormats);r.length&&r.forEach(c=>{e.mergeNumberFormat(c,s.numberFormats[c])})}}}function Nt(e,s,t=!1){let i=null;const n=s.root;let r=s.parent;for(;r!=null;){const c=e;if(e.mode==="composition")i=c.__getInstance(r);else{const u=c.__getInstance(r);u!=null&&(i=u.__composer,t&&i&&!i[be]&&(i=null))}if(i!=null||n===r)break;r=r.parent}return i}function Rt(e,s,t){g.onMounted(()=>{},s),g.onUnmounted(()=>{e.__deleteInstance(s)},s)}const It=["locale","fallbackLocale","availableLocales"],Lt=["t","rt","d","n","tm"];function Pt(e,s){const t=Object.create(null);It.forEach(i=>{const n=Object.getOwnPropertyDescriptor(s,i);if(!n)throw I(d.UNEXPECTED_ERROR);const r=g.isRef(n.value)?{get(){return n.value.value},set(c){n.value.value=c}}:{get(){return n.get&&n.get()}};Object.defineProperty(t,i,r)}),e.config.globalProperties.$i18n=t,Lt.forEach(i=>{const n=Object.getOwnPropertyDescriptor(s,i);if(!n||!n.value)throw I(d.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${i}`,n)})}f.registerMessageCompiler(f.compileToFunction);f.registerMessageResolver(f.resolveValue);f.registerLocaleFallbacker(f.fallbackWithLocaleChain);{const e=a.getGlobalThis();e.__INTLIFY__=!0,f.setDevToolsHook(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}k.DatetimeFormat=se;k.I18nInjectionKey=Le;k.NumberFormat=le;k.Translation=G;k.VERSION=me;var St=k.createI18n=gt,kt=k.useI18n=Y;k.vTDirective=Re;export{St as c,kt as u};
