_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7eYB":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,l=d.length;u<l;u++){var s=d[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],p=r[s]||new Set;"name"===s&&i||!p.has(f)?(p.add(f),r[s]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var b=h;t.default=b},"C+bE":function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},KckH:function(e,t,n){var r=n("7eYB");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r=n("nKUr"),o=n("g4pe"),a=n.n(o),i=n("q1tI"),c=n("vRNQ"),u=n.n(c);function l(e){if(Array.isArray(e))return e}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){return l(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||f(e,t)||d()}var h=function(e){var t=e.value,n=e.onChange;return Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:["Limit:",Object(r.jsx)("input",{value:t.replace(/{|}/g,""),onChange:function(e){return n(e.target.value?"{".concat(e.target.value,"}"):"")}})]})})},b=function(e){var t=e.value,n=e.onChange;return Object(r.jsx)("div",{children:Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",checked:"{polymorphic}"==t,onChange:function(e){return n(e.target.checked?"{polymorphic}":"")}}),"polymorphic?"]})})};function v(e){return l(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||f(e)||d()}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.text;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.text=n}var t,n,r;return t=e,(n=[{key:"split",value:function(){var e,t=v(this.text.split(/({[a-z0-9|,]+})/));return[t[0],null!==(e=t.slice(1)[0])&&void 0!==e?e:""]}}])&&m(t.prototype,n),r&&m(t,r),e}();var y=function(e){var t=e.value,n=e.onChange,o=p(t.replace(/{|}/g,"").split(","),2),a=o[0],i=o[1],c=function(e){var t=Object.assign({precision:a,scale:i},e);n("{".concat(t.precision,",").concat(t.scale,"}"))};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:["Precision:",Object(r.jsx)("input",{value:a,onChange:function(e){return c({precision:e.target.value})}})]}),Object(r.jsxs)("label",{children:["Scale:",Object(r.jsx)("input",{value:i,onChange:function(e){return c({scale:e.target.value})}})]})]})},x=function(e){var t=e.type,n=e.config,o=e.onChange;switch(t){case"references":return Object(r.jsx)(b,{value:n,onChange:o});case"integer":case"string":case"text":case"binary":return Object(r.jsx)(h,{value:n,onChange:o});case"decimal":return Object(r.jsx)(y,{value:n,onChange:o});default:return null}};function g(e){var t=e.value,n=e.onChange,o=p(new j({text:t}).split(),2),a=o[0],i=o[1],c=function(e){var t=e.newType,r=e.newConfig;n("".concat(t||a).concat(null!==r&&void 0!==r?r:i))};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("select",{value:a,onChange:function(e){return c({newType:e.target.value,newConfig:""})},children:[Object(r.jsx)("option",{disabled:!0,value:"",children:"-- required --"}),["primary_key","float","boolean","date","time","datetime","references","digest","token","integer","string","text","binary","decimal"].map((function(e){return Object(r.jsx)("option",{children:e},e)}))]}),Object(r.jsx)(x,{type:a,config:i,onChange:function(e){return c({newConfig:e})}})]})}function O(e){var t=e.value,n=e.onUpdate,o=e.onDelete,a=p(t.split(":"),3),i=a[0],c=a[1],u=void 0===c?"":c,l=a[2],s=void 0===l?"":l,f=function(e){var t=Object.assign({fieldName:i,fieldType:u,indexType:s},e);n([t.fieldName,t.fieldType,t.indexType].filter((function(e){return!!e})).join(":"))};return Object(r.jsxs)("div",{style:{marginBottom:"10px",padding:"10px",border:"1px solid"},children:[Object(r.jsx)("input",{placeholder:"field_name",defaultValue:i,onChange:function(e){return f({fieldName:e.target.value})}}),Object(r.jsx)(g,{value:u,onChange:function(e){return f({fieldType:e})}}),Object(r.jsxs)("select",{value:s,onChange:function(e){return f({indexType:e.target.value})},children:[Object(r.jsx)("option",{value:"",children:"-- optional --"}),["uniq","index"].map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))]}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:o,children:"Delete"})]})}function _(){var e=Object(i.useState)("ExampleModel"),t=e[0],n=e[1],o=Object(i.useState)(["other_model:references{polymorphic}:uniq"]),c=o[0],l=o[1],s=function(e){return function(t){var n=c.slice();n[e]=t,l(n)}};return Object(r.jsxs)("div",{className:u.a.container,children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:"Create Next App"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsxs)("main",{className:u.a.main,children:[Object(r.jsxs)("h1",{className:u.a.title,children:["Welcome to ",Object(r.jsx)("a",{href:"https://nextjs.org",children:"GuideRails!"})]}),Object(r.jsx)("h2",{children:Object(r.jsx)("label",{htmlFor:"model-name-input",children:"Model Name:"})}),Object(r.jsx)("input",{id:"model-name-input",placeholder:"ModelName",value:t,onChange:function(e){return n(e.target.value)}}),Object(r.jsxs)("section",{id:"fields",children:[Object(r.jsx)("h2",{children:"Fields:"}),c.map((function(e,t){return Object(r.jsx)(O,{value:e,onUpdate:s(t),onDelete:function(){return function(e){var t=c.slice();t.splice(e,1),l(t)}(t)}},t)})),Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){l(c.concat([""]))},children:"Add Field"})})]}),Object(r.jsx)("h2",{children:"CLI Command:"}),Object(r.jsx)("p",{className:u.a.description,children:Object(r.jsx)("code",{className:u.a.code,children:"bin/rails g model ".concat(t," ").concat(c.join(" "))})})]}),Object(r.jsxs)("footer",{className:u.a.footer,children:["a project by\xa0",Object(r.jsx)("a",{href:"https://www.wasabigeek.com",target:"_blank",rel:"noopener noreferrer",children:"wasabigeek"})]})]})}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),f=function(e){i(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qhzo:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);