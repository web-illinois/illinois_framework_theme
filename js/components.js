!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=1)}([function(t,e){class s{constructor(t){this.elem=t,this.initializeLinks()}collapseTopLevelItem(t){t.classList.remove("il-main-nav__top-level-item--expanded")}expandTopLevelItem(t){t.classList.add("il-main-nav__top-level-item--expanded")}getLinks(){return this.elem.querySelectorAll("a")}getTopLevelList(){return this.elem.querySelector("ul")}handleMenuItemBlur(t){this.collapseTopLevelItem(t.currentTarget.parentNode.parentNode.parentNode)}handleMenuItemFocus(t){this.expandTopLevelItem(t.currentTarget.parentNode.parentNode.parentNode)}handleTopLevelItemBlur(t){this.collapseTopLevelItem(t.currentTarget.parentNode)}handleTopLevelItemFocus(t){this.expandTopLevelItem(t.currentTarget.parentNode)}handleTopLevelItemMouseOut(t){this.collapseTopLevelItem(t.currentTarget)}handleTopLevelItemMouseOver(t){this.expandTopLevelItem(t.currentTarget)}initializeLinks(){this.getTopLevelList().childNodes.forEach(t=>{t.nodeType})}initializeTopLevelItemLink(t){t.parentNode.addEventListener("mouseover",this.handleTopLevelItemMouseOver.bind(this)),t.parentNode.addEventListener("mouseout",this.handleTopLevelItemMouseOut.bind(this)),t.addEventListener("focus",this.handleTopLevelItemFocus.bind(this)),t.addEventListener("blur",this.handleTopLevelItemBlur.bind(this))}isTopLevelLink(t){return t.parentNode.parentNode.parentNode===this.elem}}window.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("nav.il-main-nav").forEach(t=>new s(t))})},function(t,e,s){"use strict";s.r(e);s.p,s(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},o=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${o}--\x3e`,a=new RegExp(`${o}|${r}`);class l{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],n=document.createTreeWalker(e.content,133,null,!1);let r=0,l=-1,h=0;const{strings:u,values:{length:g}}=t;for(;h<g;){const t=n.nextNode();if(null!==t){if(l++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)c(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=u[h],s=p.exec(e)[2],i=s.toLowerCase()+"$lit$",n=t.getAttribute(i);t.removeAttribute(i);const o=n.split(a);this.parts.push({type:"attribute",index:l,name:s,strings:o}),h+=o.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(o)>=0){const i=t.parentNode,n=e.split(a),o=n.length-1;for(let e=0;e<o;e++){let s,o=n[e];if(""===o)s=d();else{const t=p.exec(o);null!==t&&c(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(o)}i.insertBefore(s,t),this.parts.push({type:"node",index:++l})}""===n[o]?(i.insertBefore(d(),t),s.push(t)):t.data=n[o],h+=o}}else if(8===t.nodeType)if(t.data===o){const e=t.parentNode;null!==t.previousSibling&&l!==r||(l++,e.insertBefore(d(),t)),r=l,this.parts.push({type:"node",index:l}),null===t.nextSibling?t.data="":(s.push(t),l--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(o,e+1));)this.parts.push({type:"node",index:-1}),h++}}else n.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const c=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},h=t=>-1!==t.index,d=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,133,null,!1);let o=m(i),r=i[o],a=-1,l=0;const c=[];let h=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==r&&r.index===a;)r.index=null!==h?-1:r.index-l,o=m(i,o),r=i[o]}c.forEach(t=>t.parentNode.removeChild(t))}const g=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},m=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(h(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const v=new WeakMap,f=t=>"function"==typeof t&&v.has(t),x={},w={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,r=0,a=0,l=n.nextNode();for(;r<s.length;)if(o=s[r],h(o)){for(;a<o.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=e.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return i&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=` ${o} `;class b{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===t.indexOf("--\x3e",n+1);const a=p.exec(t);e+=null===a?t+(s?_:r):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+o}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const S=t=>null===t||!("object"==typeof t||"function"==typeof t),k=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class P{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new T(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(S(t)||!k(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class T{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===x||S(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=x,t(this)}this.value!==x&&this.committer.commit()}}class M{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=x,t(this)}const t=this.__pendingValue;t!==x&&(S(t)?t!==this.value&&this.__commitText(t):t instanceof b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):k(t)?this.__commitIterable(t):t===w?(this.value=w,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const s=new y(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new M(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=x,t(this)}if(this.__pendingValue===x)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=x}}class z extends P{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends T{}let V=!1;(()=>{try{const t={get capture(){return V=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class E{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=x,t(this)}if(this.__pendingValue===x)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=L(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=x}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const L=t=>t&&(V?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function A(t){let e=I.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},I.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(o);return s=e.keyString.get(i),void 0===s&&(s=new l(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const I=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new z(t,e.slice(1),s).parts}return"@"===n?[new E(t,e.slice(1),i.eventContext)]:"?"===n?[new C(t,e.slice(1),s)]:new P(t,e,s).parts}handleTextExpression(t){return new M(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.0");const B=(t,...e)=>new b(t,e,"html",U),H=(t,e)=>`${t}--${e}`;let $=!0;void 0===window.ShadyCSS?$=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),$=!1);const q=t=>e=>{const s=H(e.type,t);let i=I.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},I.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(o);if(n=i.keyString.get(r),void 0===n){const s=e.getTemplateElement();$&&window.ShadyCSS.prepareTemplateDom(s,t),n=new l(e,s),i.keyString.set(r,n)}return i.stringsArray.set(e.strings,n),n},R=["html","svg"],j=new Set,F=(t,e,s)=>{j.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{R.forEach(e=>{const s=I.get(H(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),u(t,s)})})})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const o=document.createTreeWalker(i,133,null,!1);let r=m(n),a=0,l=-1;for(;o.nextNode();){for(l++,o.currentNode===s&&(a=g(e),s.parentNode.insertBefore(e,s));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=m(n,r);return}r=m(n,r)}}}(s,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),u(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const D={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:W};class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||J}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=W){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||D,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||D.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=J){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,n=i.getPropertyOptions(t);i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Y.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const G="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Q{constructor(t,e){if(e!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const X=(t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof Q)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new Q(s,K)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.0");const Z={};class tt extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),i=[];s.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Z&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Z}}tt.finalized=!0,tt.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,o=O.has(e),r=$&&11===e.nodeType&&!!e.host,a=r&&!j.has(i),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let i=O.get(e);void 0===i&&(n(e,e.firstChild),O.set(e,i=new M(Object.assign({templateFactory:A},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:q(i)},s)),a){const t=O.get(l);O.delete(l);const s=t.value instanceof y?t.value.template:void 0;F(i,l,s),n(e,e.firstChild),e.appendChild(l),O.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)};customElements.define("il-back-to-top",class extends tt{static get styles(){return X`
:host {
    position: fixed;
    display: block;
    right: 20px;
    bottom: 20px;
}
button {
    position: relative;
    cursor: pointer;
    display: block;
    font-size: 1.25em;
    margin: 0;
    line-height: 45px;
    padding: 0;
    width: 45px;
    height: 45px;
    box-sizing: border-box;
    overflow: hidden;
    background: #06162C;
    border-radius: 30px;
    border: 2px solid white;
    transition: transform .4s;
    text-decoration: none;
    z-index: 100;
}
i.fa.fa-chevron-up {
  color: white;
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: 14px;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
  position: relative;
  bottom: 4px;
}
i.fa.fa-chevron-up::before {
    content: "\\f077";
}
button.top-of-page {
    transform: translateY(100px);
}
svg {
    position: absolute;
    fill: white;
    top: 20px;
    left: 17px;
}
        `}constructor(){super(),this.expectedPositionAfterScroll=null,this.continueScroll=this.continueScroll.bind(this),this.handleScroll=this.handleScroll.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this.handleScroll)}continueScroll(){!this.isTopOfPage()&&this.isInExpectedPosition()&&this.scrollToTop()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.handleScroll)}getNextScrollPosition(){return Math.max(0,this.getScrollPosition()-200)}getScrollPosition(){return window.pageYOffset||document.documentElement.scrollTop}handleClick(t){t.preventDefault(),this.startScrollToTop()}handleScroll(t){this.updateButton()}isInExpectedPosition(){return this.getScrollPosition()===this.expectedPositionAfterScroll}isNearTopOfPage(){return this.getScrollPosition()<100}isTopOfPage(){return this.getScrollPosition()<=0}scrollToTop(){this.expectedPositionAfterScroll=this.getNextScrollPosition(),window.scrollTo(0,this.expectedPositionAfterScroll),setTimeout(this.continueScroll,10)}startScrollToTop(){this.scrollToTop()}updateButton(){this.shadowRoot.querySelector("button").classList[this.isNearTopOfPage()?"add":"remove"]("top-of-page")}render(){return B`
<button @click="${this.handleClick}" class="${this.isTopOfPage()?"top-of-page":""}" aria-label="Back to the top of the page">
    <i class="fa fa-chevron-up" aria-hidden="true"></i>
</button>
        `}});customElements.define("il-wordmark",class extends tt{static get styles(){return X`
.block-i__fill {
    fill: var(--il-orange);
}
.block-i__outline, .text {
    fill: #fff;
}
        `}render(){return B`
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 300.9 78.2" xml:space="preserve">
    <title>University of Illinois Urbana-Champaign</title>
    <g class="block-i">
        <path class="block-i__outline" d="M54.2 21.1V0H0v21.1h12v36.1H0v21.1h54.2V57.2h-12V21.1h12zM42.1 60.2h9v15H3v-15h9c1.7 0 3-1.3 3-3V21.1c0-1.7-1.3-3-3-3H3V3h48.1v15h-9c-1.7 0-3 1.3-3 3v36.1c0 1.7 1.4 3.1 3 3.1"/>
        <path class="block-i__fill" d="M42.1 18.1h9V3H3v15h9c1.7 0 3 1.3 3 3v36.1c0 1.7-1.3 3-3 3H3v15h48.1v-15h-9c-1.7 0-3-1.3-3-3v-36c0-1.7 1.4-3 3-3" />
    </g>
    <g class="text">
        <path class="university-of" d="M101 15.9c-3.4 0-5.5-1.9-5.5-5.6V3.1h2.8v7.2c0 2.1 1 3.1 2.7 3.1 1.7 0 2.7-1 2.7-3V3.1h2.8v7.1c.1 3.9-2.1 5.7-5.5 5.7zM123.4 15.7l-6.1-8v8h-2.7V3.1h2.6l5.9 7.8V3.1h2.7v12.7h-2.4zM134 15.7V3.1h2.8v12.7H134zM151.2 15.8h-2.5L143.6 3h3.1l3.3 9 3.3-8.9h3l-5.1 12.7zM163.2 15.7V3.1h9.6v2.5H166v2.6h6v2.5h-6v2.7h6.9v2.5h-9.7zM188.1 15.7l-2.7-4.1h-2.2v4.1h-2.8V3.1h5.8c3 0 4.8 1.6 4.8 4.2 0 2-1.1 3.3-2.7 3.9l3.1 4.5h-3.3zm.1-8.3c0-1.2-.8-1.8-2.2-1.8h-2.8v3.6h2.8c1.4 0 2.2-.7 2.2-1.8zM203 15.9c-1.9 0-3.9-.7-5.4-2l1.6-2c1.1.9 2.3 1.5 3.8 1.5 1.1 0 1.8-.5 1.8-1.2s-.4-1.1-2.6-1.6c-2.6-.7-4.2-1.4-4.2-3.9 0-2.3 1.8-3.8 4.4-3.8 1.8 0 3.4.6 4.7 1.6l-1.4 2.1c-1.1-.8-2.2-1.2-3.3-1.2-1.1 0-1.6.5-1.6 1.1 0 .8.5 1.1 2.7 1.7 2.6.7 4 1.6 4 3.8.1 2.5-1.8 3.9-4.5 3.9zM215.1 15.7V3.1h2.8v12.7h-2.8zM231.5 5.7v10.1h-2.8V5.7h-3.9V3.1h10.5v2.6h-3.8zM249.3 10.7v5h-2.8v-5L241.6 3h3.3l3 5.1L251 3h3.2l-4.9 7.7zM276.9 16c-3.9 0-6.7-2.9-6.7-6.5S273 3 276.9 3s6.7 2.9 6.7 6.5c0 3.5-2.8 6.5-6.7 6.5zm3.8-6.6c0-2.2-1.6-4-3.8-4-2.2 0-3.8 1.8-3.8 3.9 0 2.2 1.6 4 3.8 4 2.2.1 3.8-1.7 3.8-3.9zM293.9 5.6v2.7h6v2.5h-6v4.9h-2.8V3.1h9.6v2.5h-6.8z"/>
        <path class="illinois" d="M96.6 57.6V25.2h7.1v32.4h-7.1zM112.2 57.6V25.2h7.1v25.9h16.2v6.5h-23.3zM140.8 57.6V25.2h7.1v25.9h16.2v6.5h-23.3zM169.5 57.6V25.2h7.1v32.4h-7.1zM207.8 57.6L192.1 37v20.6h-7V25.2h6.6l15.2 20v-20h7v32.4h-6.1zM237.8 58.2c-10 0-17.2-7.5-17.2-16.7v-.1c0-9.2 7.3-16.8 17.3-16.8s17.2 7.5 17.2 16.7v.1c0 9.2-7.3 16.8-17.3 16.8zm9.8-16.8c0-5.6-4.1-10.2-9.8-10.2-5.7 0-9.7 4.5-9.7 10.1v.1c0 5.6 4.1 10.2 9.8 10.2 5.8 0 9.7-4.6 9.7-10.2zM262 57.6V25.2h7.1v32.4H262zM289 58.1c-4.9 0-9.9-1.7-13.8-5.2l4.2-5.1c2.9 2.4 6 3.9 9.7 3.9 2.9 0 4.7-1.2 4.7-3.1v-.1c0-1.8-1.1-2.7-6.5-4.1-6.5-1.7-10.7-3.5-10.7-9.9v-.1c0-5.9 4.7-9.8 11.4-9.8 4.7 0 8.8 1.5 12 4.1l-3.7 5.4c-2.9-2-5.7-3.2-8.4-3.2s-4.2 1.3-4.2 2.8v.1c0 2.1 1.4 2.8 7 4.3 6.6 1.7 10.3 4.1 10.3 9.7v.2c-.1 6.4-5 10.1-12 10.1z"/>
        <path class="urbana-champaign" d="M96.6 71.7V67h1.8v4.6c0 1.3.7 2 1.8 2s1.8-.7 1.8-2V67h1.8v4.6c0 2.5-1.4 3.7-3.6 3.7-2.3 0-3.6-1.2-3.6-3.6zM110.4 67h3.7c1 0 1.8.3 2.4.8.5.5.7 1.1.7 1.9 0 1.3-.7 2.1-1.8 2.5l2 2.9h-2.1l-1.8-2.6h-1.4v2.6h-1.8V67zm3.6 4c.9 0 1.4-.5 1.4-1.2 0-.8-.5-1.2-1.4-1.2h-1.8V71h1.8zM123.7 67h3.8c.9 0 1.7.3 2.1.7.4.4.6.8.6 1.4 0 .9-.5 1.4-1.1 1.8.9.4 1.5.9 1.5 2 0 1.5-1.2 2.2-3.1 2.2h-3.9V67zm4.7 2.5c0-.5-.4-.8-1.2-.8h-1.8v1.7h1.7c.8-.1 1.3-.3 1.3-.9zm-.9 2.3h-2.1v1.8h2.1c.8 0 1.3-.3 1.3-.9.1-.5-.3-.9-1.3-.9zM139.8 67h1.7l3.5 8.2h-1.9l-.7-1.8h-3.5l-.7 1.8h-1.8l3.4-8.2zm1.9 4.8l-1.1-2.7-1.1 2.7h2.2zM151.1 67h1.7l3.8 5v-5h1.8v8.2h-1.5l-4-5.2v5.2h-1.8V67zM167.9 67h1.7l3.5 8.2h-1.9l-.7-1.8H167l-.7 1.8h-1.8l3.4-8.2zm1.9 4.8l-1.1-2.7-1.1 2.7h2.2zM178.6 70.7h3.6v1.7h-3.6v-1.7zM187.8 71.1c0-2.3 1.8-4.2 4.3-4.2 1.5 0 2.5.5 3.2 1.3l-1.1 1.3c-.6-.6-1.3-.9-2.1-.9-1.4 0-2.4 1.1-2.4 2.5s1 2.6 2.4 2.6c.9 0 1.5-.4 2.1-1l1.1 1.2c-.8.9-1.8 1.5-3.4 1.5-2.3-.1-4.1-1.9-4.1-4.3zM201.6 67h1.8v3.2h3.3V67h1.8v8.2h-1.8v-3.3h-3.3v3.3h-1.8V67zM218.1 67h1.7l3.5 8.2h-1.9l-.7-1.8h-3.5l-.7 1.8h-1.8l3.4-8.2zm1.9 4.8l-1.1-2.7-1.1 2.7h2.2zM229.4 67h1.9l2.1 3.5 2.1-3.5h1.9v8.2h-1.8v-5.3l-2.3 3.5-2.3-3.5v5.3h-1.8V67zM244.4 67h3.3c1.9 0 3.1 1.2 3.1 2.8 0 1.9-1.5 2.9-3.3 2.9h-1.4v2.5h-1.8V67zm3.2 4.2c.9 0 1.4-.5 1.4-1.2 0-.8-.6-1.2-1.5-1.2h-1.4v2.5h1.5zM259 67h1.7l3.5 8.2h-1.9l-.7-1.8h-3.5l-.7 1.8h-1.8L259 67zm1.9 4.8l-1.1-2.7-1.1 2.7h2.2zM270.4 67h1.8v8.2h-1.8V67zM278.7 71.1c0-2.3 1.8-4.2 4.3-4.2 1.5 0 2.4.4 3.2 1.1l-1.1 1.4c-.6-.5-1.2-.8-2.1-.8-1.3 0-2.3 1.2-2.3 2.5 0 1.5 1 2.6 2.5 2.6.7 0 1.2-.2 1.7-.5V72H283v-1.6h3.5v3.5c-.8.7-2 1.3-3.5 1.3-2.5.1-4.3-1.6-4.3-4.1zM293.1 67h1.7l3.8 5v-5h1.8v8.2h-1.5l-4-5.2v5.2h-1.8V67z"/>
    </g>
</svg>
        `}});customElements.define("il-footer",class extends tt{static get styles(){return X`
:host {

    font-size: 20px;
    line-height: 30px;
    font-family: var(--il-source-sans);
}
.main {
    margin: 0 auto;
    max-width: var(--il-framework--max-width);
    padding: 0 0 45px;
}

.main > div {
    display: grid;
    grid-gap: 95px;
    max-width: var(--il-framework--max-width);
    padding: 0 30px;
}
@media (max-width: 599px) {
    .main > div {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: "info" "links";
    }
}
@media (min-width: 600px) {
    .main > div {
        grid-template-columns: 1fr 2fr;
        grid-template-areas: "info links";
    }
}
.info {
    grid-area: info;
}
.links {
    grid-area: links;
}
.campus-wordmark {
    width: 235px;
    height: 61px;
}
.campus-wordmark a {
    display: block;
    text-decoration: none;
}

.campus-wordmark a:focus {
  outline: 2px dashed var(--il-orange);
}
.social {
    margin-top: 25px;
}
.site {
    margin-top: 45px;
}
.site ::slotted(p) {
    margin: 0;
    padding: 0;
}
.site ::slotted(*:first-child) {
    font-weight: 700;
}
@supports (font-variation-settings: normal) {
    .site ::slotted(*:first-child) {
        font-weight: normal;
        font-variation-settings: "wght" 700;
    }
}
.parent {
    background-color: var(--il-alma-mater);
    color: white;
    font: 700 18px var(--il-montserrat);
    height: 5px;
    letter-spacing: 1.1px;
    line-height: 1.56;
    text-transform: uppercase;
}
.parent__inner {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: var(--il-framework--max-width);
    padding: 0 10px;
}
.parent ::slotted(*) {
    height: 5px;
    margin: 0;
    padding: 0;
    font-size: 1em;
}
        `}render(){return B`
<div>
    <div class="main">
        <div>
            <div class="info">
                <div class="campus-wordmark">
                    <a aria-label="University of Illinois Homepage" href="https://illinois.edu/"><il-wordmark></il-wordmark></a>
                </div>
                <div class="site">
                    <slot></slot>
                </div>
                <div class="social">
                    <slot name="social"></slot>
                </div>
                <div class="colleges">
                    <slot name="colleges"></slot>
                </div>
            </div>
            <div class="links">
                <slot name="links"></slot>
                <div class="actions">
                    <slot name="actions"></slot>
                </div>
            </div>
        </div>
    </div>
    <div class="parent">
        <div class="parent__inner">
            <slot name="parent"></slot>
        </div>
    </div>
</div>
        `}});customElements.define("il-block-i",class extends tt{static get styles(){return X`
.outline {
    fill: var(--il-blue);
}
.fill {
    fill: var(--il-orange);
}
        `}render(){return B`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.2 78.2">
    <title>Block I logo</title>
    <path class="outline" d="M54.2 21.1V0H0v21.1h12v36.1H0v21.1h54.2V57.2h-12V21.1h12zM42.1 60.2h9v15H3v-15h9c1.7 0 3-1.3 3-3V21.1c0-1.7-1.3-3-3-3H3V3h48.1v15h-9c-1.7 0-3 1.3-3 3v36.1c0 1.7 1.4 3.1 3 3.1z"/>
    <path class="fill" d="M42.1 18.1h9V3H3v15h9c1.7 0 3 1.3 3 3v36.1c0 1.7-1.3 3-3 3H3v15h48.1v-15h-9c-1.7 0-3-1.3-3-3v-36c0-1.7 1.4-3 3-3z"/>
</svg>
        `}});customElements.define("il-unit-wordmark",class extends tt{static get styles(){return X`
.wordmark {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    font-family: var(--il-source-sans);
    margin: 0 30px;
    max-width: var(--il-framework--max-width);
    position: relative;
}
.block-i {
    flex: 0 0 50px;
}
.block-i a {
    text-decoration: none;
}
.block-i a:focus {
  outline: 2px dashed var(--il-orange);
}
il-block-i {
    display: block;
    height: 43px;
    width: 30px;
}
.name {
    flex-grow: 1;
}
.name ::slotted(p) {
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    margin: 0;
    padding: 0;
}
.name ::slotted(h1) {
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    margin: 0;
    padding: 0;
}
@supports (font-variation-settings: normal) {
    .name ::slotted(p) {
        font-weight: normal;
        font-variation-settings: "wght" 400;
    }
    .name ::slotted(h1) {
        font-weight: normal;
        font-variation-settings: "wght" 600;
    }
}
@media (min-width: 480px) {
    .wordmark {
        min-height: 54px;
    }
    .wordmark::after {
        background-color: var(--il-industrial-blue);
        content: "";
        height: 100%;
        left: 54px;
        position: absolute;
        top: 0;
        width: 1px;
    }
    .block-i {
        flex-basis: 70px;
    }
    .name ::slotted(h1) {
        font-size: 24px;
        line-height: 26px;
    }
}
        `}render(){return B`
<div class="wordmark">
    <div class="block-i">
        <a aria-label="University of Illinois Homepage" href="https://illinois.edu"><il-block-i></il-block-i></a>
    </div>
    <div class="name">
        <slot></slot>
    </div>
</div>
        `}});customElements.define("il-menu-button",class extends tt{static get properties(){return{compact:{type:Boolean}}}static get styles(){return X`
button {
    background-color: var(--il-orange);
    border: 0;
    border-radius: 5px;
    color: white;
    display: inline-block;
    height: 32px;
    padding: 8px 12px 8px 38px;
    position: relative;
    white-space: nowrap;
}
button.compact {
    padding: 0;
    width: 32px;
}
.label {
    box-sizing: border-box;
    display: block;
    font-family: var(--il-source-sans);
    font-size: 16px;
    font-weight: bold;
    letter-spacing: .71px;
    line-height: 16px;
    text-transform: uppercase;
}
button.compact .label {
    display: none;
}
.icon, .icon::before, .icon::after {
    background-color: white;
    border-radius: 1px;
    display: block;
    height: 3px;
    position: absolute;
    width: 16px;
}
.icon {
    left: 12px;
    top: 14px;
}
button.compact .icon {
    left: 8px;
}
.icon::before, .icon::after {
    content: "";
    left: 0;
}
.icon::before {
    top: -5px;
}
.icon::after {
    content: "";
    left: 0;
    top: 5px;
}
@supports (font-variation-settings: normal) {
    .label {
        font-weight: normal;
        font-variation-settings: "wght" 700;
    }
}
        `}constructor(){super(),this.compact=!1}handleClick(t){console.debug("Click")}get displayMode(){return this.compact?"compact":"full"}render(){return B`
<button type="button" class="${this.displayMode}" @click="${this.handleClick}">
    <span class="label"><slot>Menu</slot></span>
    <span class="icon" role="presentation"></span>
</button>
        `}});customElements.define("il-header",class extends tt{static get properties(){return{name:{type:String}}}static get styles(){return X`
.campus {
    border-top: 9px solid var(--il-orange);
 }
.site {
     background-color: white;
}

.campus > div, .site > div {
    box-sizing: border-box;
    width: 100%;
}
.campus > div {
    display: flex;
    padding: 4px 30px;
    font: 700 10px/1em var(--il-montserrat);
    letter-spacing: 1px;
    text-align: left;
    text-transform: uppercase;
    margin: 0 auto;
    max-width: var(--il-framework--max-width);
}
.campus > div > a {
  color: var(--il-blue);
  text-decoration: none;
}
.campus > div > a:hover {
  color: var(--il-orange);
}
.campus > div > a:focus {
  color: var(--il-orange);
  outline: 2px dashed var(--il-orange);
}
.campus span {
    white-space: nowrap;
}
.site > div {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}
@media screen and (max-width: 767px) {
  .site > div {

  }
}
.site .identity {
    flex-grow: 1;
    font-family: var(--il-source-sans);
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    margin: 0 auto;
    max-width: var(--il-framework--max-width);
    padding: 15px 0 20px;
}
.site .menu {
    padding-left: 0px;
    width: 100%;
}
.site .identity ::slotted(*) {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 0;
}
@supports (font-variation-settings: normal) {
    .site .identity {
        font-weight: normal;
        font-variation-settings: "wght" 600;
    }
}
@media (min-width: 360px) {
    .campus > div {
        font-size: 12px;
    }
}
@media (min-width: 400px) {
    .campus > div {
        letter-spacing: 1.75px;
    }
}
@media (min-width: 600px) {
    .site > div {
        display: block;
    }
    .site .identity {
        font-size: 24px;
        line-height: 26px;
    }
    .site .menu {
        padding-left: 0;
    }
}
@media (max-width: 979px) {
  .campus {

  }
}
        `}constructor(){super(),window.addEventListener("DOMContentLoaded",()=>{this.hasMenu()&&this.getMenu().addEventListener("toggle",this.handleMenuToggle.bind(this)),this.hasSearch()&&this.getSearch().addEventListener("toggle",this.handleSearchToggle.bind(this))})}getMenu(){return this.querySelector("il-menubar")}getSearch(){return this.querySelector("il-search")}handleMenuToggle(t){t.target.expanded&&this.searchIsExpanded()&&this.getSearch().collapse()}handleSearchToggle(t){t.target.expanded&&this.menuIsExpanded()&&this.getMenu().collapse()}hasMenu(){return null!==this.getMenu()}hasSearch(){return null!==this.getSearch()}menuIsExpanded(){return this.hasMenu()&&this.getMenu().expanded}searchIsExpanded(){return this.hasSearch()&&this.getSearch().expanded}render(){return B`
<div class="header">
    <div class="campus">
        <div>
          <a aria-label="University of Illinois Homepage" href="https://illinois.edu">
            <span>University of Illinois</span>
            <span>Urbana&hyphen;Champaign</span>
           </a>
          <slot name="link-list"></slot>
        </div>
    </div>
    <div class="site">
        <div>
            <div class="identity">
                <slot></slot>
            </div>
            <div class="menu">
                <slot name="menu"></slot>
            </div>
        </div>
    </div>
</div>
        `}});customElements.define("il-main-nav",class extends tt{constructor(){super(),window.addEventListener("DOMContentLoaded",()=>{this.initializeNavigation()})}static get styles(){return X`
nav {
}
.heading {
    height: 1px;
    left: -9999vw;
    overflow: hidden;
    position: absolute;
    width: 1px;
}
.button {
    display: none;
}
.nav {
    background-color: var(--il-cloud-1);
}
@media (max-width: 600px) {
    .button {
        display: block;
    }
    .nav {
        display: none;
    }
}
        `}initializeNavigation(){console.debug(this.querySelectorAll(":host > ul"))}render(){return B`
<nav>
    <div class="heading">
        <slot name="heading">
            <h2>Main navigation</h2>
        </slot>
    </div>
    <div class="button">
        <il-menu-button></il-menu-button>
    </div>
    <div class="nav">
        <slot />
    </div>
</nav>
        `}});customElements.define("il-section-nav",class extends tt{static get styles(){return X`
h2 {
    color: var(--il-orange);
}
        `}constructor(){super(),window.addEventListener("DOMContentLoaded",()=>{this.addButtons()})}addButtons(){document.querySelectorAll("ul ul").forEach(t=>{const e=this.makeButton();e.addEventListener("click",this.handleButtonClick.bind(this)),t.parentNode.insertBefore(e,t.parentNode.firstChild)})}handleButtonClick(t){const e=t.currentTarget,s="true"===e.getAttribute("aria-expanded");e.setAttribute("aria-expanded",s?"false":"true")}makeButton(){const t=document.createElement("button");return t.setAttribute("aria-expanded","false"),t.appendChild(document.createElement("span")),t.appendChild(document.createTextNode("Expand")),t}render(){return B`
<nav class="il-section-nav">
    <slot name="heading">
        <h2>In this section</h2>
    </slot>
    <slot />
</nav>
        `}});class et extends tt{static get properties(){return{href:{type:String},service:{type:String},username:{type:String}}}static get styles(){return X`
a {
    display: inline-block;
    position: relative;
}
a.with-icon {
    height: 24px;
    overflow: hidden;
    width: 24px;
}
.icon {
    display: block;
    height: 24px;
    width: 24px;
}
svg {
    fill: var(--il-blue);
    height: 100%;
    width: 100%;
}
a:hover svg, a:focus svg {
    fill: var(--il-industrial-blue);
}
        `}static get facebookIcon(){return B`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>`}static get instagramIcon(){return B`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>`}static get linkedInIcon(){return B`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>`}static get pinterestIcon(){return B`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>`}static get rssIcon(){return B`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"/></svg>`}static get snapchatIcon(){return B`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M510.846 392.673c-5.211 12.157-27.239 21.089-67.36 27.318-2.064 2.786-3.775 14.686-6.507 23.956-1.625 5.566-5.623 8.869-12.128 8.869l-.297-.005c-9.395 0-19.203-4.323-38.852-4.323-26.521 0-35.662 6.043-56.254 20.588-21.832 15.438-42.771 28.764-74.027 27.399-31.646 2.334-58.025-16.908-72.871-27.404-20.714-14.643-29.828-20.582-56.241-20.582-18.864 0-30.736 4.72-38.852 4.72-8.073 0-11.213-4.922-12.422-9.04-2.703-9.189-4.404-21.263-6.523-24.13-20.679-3.209-67.31-11.344-68.498-32.15a10.627 10.627 0 0 1 8.877-11.069c69.583-11.455 100.924-82.901 102.227-85.934.074-.176.155-.344.237-.515 3.713-7.537 4.544-13.849 2.463-18.753-5.05-11.896-26.872-16.164-36.053-19.796-23.715-9.366-27.015-20.128-25.612-27.504 2.437-12.836 21.725-20.735 33.002-15.453 8.919 4.181 16.843 6.297 23.547 6.297 5.022 0 8.212-1.204 9.96-2.171-2.043-35.936-7.101-87.29 5.687-115.969C158.122 21.304 229.705 15.42 250.826 15.42c.944 0 9.141-.089 10.11-.089 52.148 0 102.254 26.78 126.723 81.643 12.777 28.65 7.749 79.792 5.695 116.009 1.582.872 4.357 1.942 8.599 2.139 6.397-.286 13.815-2.389 22.069-6.257 6.085-2.846 14.406-2.461 20.48.058l.029.01c9.476 3.385 15.439 10.215 15.589 17.87.184 9.747-8.522 18.165-25.878 25.018-2.118.835-4.694 1.655-7.434 2.525-9.797 3.106-24.6 7.805-28.616 17.271-2.079 4.904-1.256 11.211 2.46 18.748.087.168.166.342.239.515 1.301 3.03 32.615 74.46 102.23 85.934 6.427 1.058 11.163 7.877 7.725 15.859z"/></svg>`}static get twitterIcon(){return B`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>`}static get youtubeIcon(){return B`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>`}get icon(){return this.iconImage?B`<span class="icon">${this.iconImage}</span>`:""}get iconImage(){switch(this.service){case"facebook":return et.facebookIcon;case"instagram":return et.instagramIcon;case"linkedin":return et.linkedInIcon;case"pinterest":return et.pinterestIcon;case"rss":return et.rssIcon;case"snapchat":return et.snapchatIcon;case"twitter":return et.twitterIcon;case"youtube":return et.youtubeIcon;default:return}}hasIcon(){return void 0!==this.icon}render(){return B`
<a href="#" class="${this.hasIcon()?"with-icon":"without-icon"}">
    ${this.icon}
    <span class="label"><slot></slot></span>
</a>
        `}}customElements.define("il-social-link",et);customElements.define("il-skip-to-content",class extends tt{static get properties(){return{href:{type:String}}}static get styles(){return X`
a {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: block;
    background-color: black;
    color: white;
    padding: 10px;
    font: 18px var(--il-source-sans);
    z-index: 9999;
    text-decoration: none;
    transform: translateY(-100%);
    transition: all 400ms;
}
a:focus {
    transform: translateY(0);
}
        `}getContentPosition(){return(window.pageYOffset||document.documentElement.scrollTop)+this.getContent().getBoundingClientRect().top}getHref(){return this.href||"#"}getContent(){return document.querySelector("main")}handleClick(t){this.href||(t.preventDefault(),console.debug(this.getContentPosition()),window.scrollTo(0,this.getContentPosition()),this.getContent().focus())}render(){return B`
<a href="${this.getHref()}" @click="${this.handleClick}">Skip to main content</a>
        `}})}]);

