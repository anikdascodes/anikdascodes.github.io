import{r as b,a as m}from"./index._OACqPSs.js";var _={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function L(){if(x)return l;x=1;var e=b(),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(u,n,h){var a,p={},f=null,y=null;h!==void 0&&(f=""+h),n.key!==void 0&&(f=""+n.key),n.ref!==void 0&&(y=n.ref);for(a in n)r.call(n,a)&&!s.hasOwnProperty(a)&&(p[a]=n[a]);if(u&&u.defaultProps)for(a in n=u.defaultProps,n)p[a]===void 0&&(p[a]=n[a]);return{$$typeof:t,type:u,key:f,ref:y,props:p,_owner:i.current}}return l.Fragment=o,l.jsx=d,l.jsxs=d,l}var g;function T(){return g||(g=1,_.exports=L()),_.exports}var k=T();/**
 * @license lucide-react v0.519.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,r)=>r?r.toUpperCase():o.toLowerCase()),w=e=>{const t=S(e);return t.charAt(0).toUpperCase()+t.slice(1)},R=(...e)=>e.filter((t,o,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===o).join(" ").trim(),M=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.519.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.519.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=m.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:d,...u},n)=>m.createElement("svg",{ref:n,...A,width:t,height:t,stroke:e,strokeWidth:r?Number(o)*24/Number(t):o,className:R("lucide",i),...!s&&!M(u)&&{"aria-hidden":"true"},...u},[...d.map(([h,a])=>m.createElement(h,a)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.519.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(e,t)=>{const o=m.forwardRef(({className:r,...i},s)=>m.createElement(N,{ref:s,iconNode:t,className:R(`lucide-${j(w(e))}`,`lucide-${e}`,r),...i}));return o.displayName=w(e),o};/**
 * @license lucide-react v0.519.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],I=C("moon",O);/**
 * @license lucide-react v0.519.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],q=C("sun",$),E="theme",c="dark",v="light";function J(){const[e,t]=m.useState(null);m.useEffect(()=>{const r=localStorage.getItem(E),i=window.matchMedia("(prefers-color-scheme: dark)").matches,s=r||(i?c:v);s===c?document.documentElement.classList.add(c):document.documentElement.classList.remove(c),t(s)},[]);const o=()=>{const r=e===c?v:c;t(r),localStorage.setItem(E,r),r===c?document.documentElement.classList.add(c):document.documentElement.classList.remove(c)};return e===null?null:k.jsx("button",{onClick:o,className:"hidden md:block fixed z-50 top-0 mt-5 mr-5 right-0 p-2 rounded-full bg-muted-foreground/40 hover:bg-muted-foreground/60 text-headings transition-colors cursor-pointer","aria-label":`Switch to ${e===c?"light":"dark"} theme`,children:e===c?k.jsx(q,{className:"w-5 h-5"}):k.jsx(I,{className:"w-5 h-5"})})}export{J as default};
