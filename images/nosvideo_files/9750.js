!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1bb94b2f-d598-4bb1-bfc5-1302a1a1f590",e._sentryDebugIdIdentifier="sentry-dbid-1bb94b2f-d598-4bb1-bfc5-1302a1a1f590")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9750],{20343:function(e,t,n){n.d(t,{u:function(){return l}});var r=n(73076),i=n(39424),o=n(29531),s=n(41001),a=n(36096);async function u(){try{a.X&&s.kg.log("Flushing events..."),await (0,i.yl)(2e3),a.X&&s.kg.log("Done flushing events")}catch(e){a.X&&s.kg.log("Error while flushing events:\n",e)}}async function l(e){let{req:t,res:n,err:s}=e,a=n&&n.statusCode||e.statusCode;if(a&&a<500||!e.pathname)return Promise.resolve();(0,r.$e)(e=>{t&&e.setSDKProcessingMetadata({request:t}),(0,i.Tb)(s||`_error.js called with falsy error (${s})`,{mechanism:{type:"instrument",handled:!1,data:{function:"_error.getInitialProps"}}})}),function(e){let t=o.GLOBAL_OBJ[Symbol.for("@vercel/request-context")],n=t&&t.get&&t.get()?t.get():{};n&&n.waitUntil&&n.waitUntil(e)}(u())}},89899:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(22810),i=n(35938);function o(e){return new Proxy(e,{apply:async(e,t,n)=>{if((0,r.E)())return e.apply(t,n);let[o]=n,{req:s,res:a}=o,u=(0,i.PO)(e);if(!s||!a)return u.apply(t,n);{let e=(0,i.KT)(u,s,a,{dataFetcherRouteName:"/_error",requestedRouteName:o.pathname,dataFetchingMethodName:"getInitialProps"}),{data:r,baggage:l,sentryTrace:c}=await e.apply(t,n);return c&&(r._sentryTraceData=c),l&&(r._sentryBaggage=l),r}}})}},4631:function(e,t,n){n.d(t,{j:function(){return s}});var r=n(93128),i=n(29675),o=n(86366);function s(e,t,n){var s=(0,r._)((0,i.d)(null==n?void 0:n.in,e,t),2),u=s[0],l=s[1],c=a(u,l),d=Math.abs((0,o.w)(u,l));u.setDate(u.getDate()-c*d);var f=Number(a(u,l)===-c),g=c*(d-f);return 0===g?0:g}function a(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}},44816:function(e,t,n){n.d(t,{K:function(){return s}});var r=n(93128),i=n(29675),o=n(40324);function s(e,t,n){var s=(0,r._)((0,i.d)(null==n?void 0:n.in,e,t),2),a=s[0],u=s[1];return+(0,o.b)(a)==+(0,o.b)(u)}},49578:function(e,t,n){n.d(t,{k:function(){return i}});var r=n(6916);function i(e,t,n){return(0,r.E)(e,-t,n)}},42708:function(e,t,n){n.d(t,{YD:function(){return l}});var r=n(67294),i=Object.defineProperty,o=new Map,s=new WeakMap,a=0,u=void 0;function l({threshold:e,delay:t,trackVisibility:n,rootMargin:i,root:l,triggerOnce:c,skip:d,initialInView:f,fallbackInView:g,onChange:b}={}){var h;let[y,v]=r.useState(null),p=r.useRef(),[w,_]=r.useState({inView:!!f,entry:void 0});p.current=b,r.useEffect(()=>{let r;if(!d&&y)return r=function(e,t,n={},r=u){if(void 0===window.IntersectionObserver&&void 0!==r){let i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:l,elements:c}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return`${t}_${"root"===t?(n=e.root)?(s.has(n)||(a+=1,s.set(n,a.toString())),s.get(n)):"0":e[t]}`}).toString(),n=o.get(t);if(!n){let r;let i=new Map,s=new IntersectionObserver(t=>{t.forEach(t=>{var n;let o=t.isIntersecting&&r.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=i.get(t.target))||n.forEach(e=>{e(o,t)})})},e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:i},o.set(t,n)}return n}(n),d=c.get(e)||[];return c.has(e)||c.set(e,d),d.push(t),l.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(c.delete(e),l.unobserve(e)),0===c.size&&(l.disconnect(),o.delete(i))}}(y,(e,t)=>{_({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&c&&r&&(r(),r=void 0)},{root:l,rootMargin:i,threshold:e,trackVisibility:n,delay:t},g),()=>{r&&r()}},[Array.isArray(e)?e.toString():e,y,l,i,c,d,n,g,t]);let m=null==(h=w.entry)?void 0:h.target,k=r.useRef();y||!m||c||d||k.current===m||(k.current=m,_({inView:!!f,entry:void 0}));let D=[v,w.inView,w.entry];return D.ref=D[0],D.inView=D[1],D.entry=D[2],D}r.Component}}]);