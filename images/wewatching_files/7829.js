!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a570fe12-52e8-4e50-9ade-551114749ac1",e._sentryDebugIdIdentifier="sentry-dbid-a570fe12-52e8-4e50-9ade-551114749ac1")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7829],{37829:function(e,t,n){n.d(t,{MT:function(){return P}});let r=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},o=e=>e&&"window"in e&&e.window===e?e:r(e).defaultView||window,i=new Map,u=new Set;function l(){if("undefined"==typeof window)return;function e(e){return"propertyName"in e}let t=n=>{if(!e(n)||!n.target)return;let r=i.get(n.target);if(r&&(r.delete(n.propertyName),0===r.size&&(n.target.removeEventListener("transitioncancel",t),i.delete(n.target)),0===i.size)){for(let e of u)e();u.clear()}};document.body.addEventListener("transitionrun",n=>{if(!e(n)||!n.target)return;let r=i.get(n.target);r||(r=new Set,i.set(n.target,r),n.target.addEventListener("transitioncancel",t,{once:!0})),r.add(n.propertyName)}),document.body.addEventListener("transitionend",t)}function d(e){if(function(){if(null==a){a=!1;try{document.createElement("div").focus({get preventScroll(){return a=!0,!0}})}catch(e){}}return a}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}"undefined"!=typeof document&&("loading"!==document.readyState?l():document.addEventListener("DOMContentLoaded",l));let a=null;function c(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function s(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function f(e){let t=null;return()=>(null==t&&(t=e()),t)}let v=f(function(){return s(/^Mac/i)}),p=f(function(){return s(/^iPhone/i)}),m=f(function(){return s(/^iPad/i)||v()&&navigator.maxTouchPoints>1}),E=f(function(){return p()||m()});f(function(){return v()||E()}),f(function(){return c(/AppleWebKit/i)&&!b()});let b=f(function(){return c(/Chrome/i)}),h=f(function(){return c(/Android/i)});f(function(){return c(/Firefox/i)});var y=n(67294);let g=null,L=new Set,N=new Map,w=!1,T=!1;function R(e,t){for(let n of L)n(e,t)}function M(e){w=!0,e.metaKey||!v()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(g="keyboard",R("keyboard",e))}function S(e){g="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(w=!0,R("pointer",e))}function k(e){(0===e.mozInputSource&&e.isTrusted||(h()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType))&&(w=!0,g="virtual")}function x(e){e.target!==window&&e.target!==document&&(w||T||(g="virtual",R("virtual",e)),w=!1,T=!1)}function C(){w=!1,T=!0}function A(e){if("undefined"==typeof window||N.get(o(e)))return;let t=o(e),n=r(e),i=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){w=!0,i.apply(this,arguments)},n.addEventListener("keydown",M,!0),n.addEventListener("keyup",M,!0),n.addEventListener("click",k,!0),t.addEventListener("focus",x,!0),t.addEventListener("blur",C,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",S,!0),n.addEventListener("pointermove",S,!0),n.addEventListener("pointerup",S,!0)):(n.addEventListener("mousedown",S,!0),n.addEventListener("mousemove",S,!0),n.addEventListener("mouseup",S,!0)),t.addEventListener("beforeunload",()=>{F(e)},{once:!0}),N.set(t,{focus:i})}let F=(e,t)=>{let n=o(e),i=r(e);t&&i.removeEventListener("DOMContentLoaded",t),N.has(n)&&(n.HTMLElement.prototype.focus=N.get(n).focus,i.removeEventListener("keydown",M,!0),i.removeEventListener("keyup",M,!0),i.removeEventListener("click",k,!0),n.removeEventListener("focus",x,!0),n.removeEventListener("blur",C,!1),"undefined"!=typeof PointerEvent?(i.removeEventListener("pointerdown",S,!0),i.removeEventListener("pointermove",S,!0),i.removeEventListener("pointerup",S,!0)):(i.removeEventListener("mousedown",S,!0),i.removeEventListener("mousemove",S,!0),i.removeEventListener("mouseup",S,!0)),N.delete(n))};"undefined"!=typeof document&&function(e){let t;let n=r(void 0);"loading"!==n.readyState?A(void 0):(t=()=>{A(void 0)},n.addEventListener("DOMContentLoaded",t)),()=>F(e,t)}();let K="undefined"!=typeof document?y.useLayoutEffect:()=>{},D=y.createContext(null),_="react-aria-focus-scope-restore",I=null;function P(e){var t,n,o;let i,u,{children:l,contain:d,restoreFocus:a,autoFocus:c}=e,s=(0,y.useRef)(null),f=(0,y.useRef)(null),v=(0,y.useRef)([]),{parentNode:p}=(0,y.useContext)(D)||{},m=(0,y.useMemo)(()=>new Z({scopeRef:v}),[v]);K(()=>{let e=p||$.root;if($.getTreeNode(e.scopeRef)&&I&&!G(I,e.scopeRef)){let t=$.getTreeNode(I);t&&(e=t)}e.addChild(m),$.addNode(m)},[m,p]),K(()=>{let e=$.getTreeNode(v);e&&(e.contain=!!d)},[d]),K(()=>{var e;let t=null===(e=s.current)||void 0===e?void 0:e.nextSibling,n=[],r=e=>e.stopPropagation();for(;t&&t!==f.current;)n.push(t),t.addEventListener(_,r),t=t.nextSibling;return v.current=n,()=>{for(let e of n)e.removeEventListener(_,r)}},[l]),K(()=>{if(n||o)return;let e=t.current,i=r(e?e[0]:void 0),u=e=>{let n=e.target;q(n,t.current)?I=t:V(n)||(I=null)};return i.addEventListener("focusin",u,!1),null==e||e.forEach(e=>e.addEventListener("focusin",u,!1)),()=>{i.removeEventListener("focusin",u,!1),null==e||e.forEach(e=>e.removeEventListener("focusin",u,!1))}},[t=v,n=a,o=d]),i=(0,y.useRef)(void 0),u=(0,y.useRef)(void 0),K(()=>{let e=v.current;if(!d){u.current&&(cancelAnimationFrame(u.current),u.current=void 0);return}let t=r(e?e[0]:void 0),n=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!j(v)||e.isComposing)return;let n=t.activeElement,r=v.current;if(!r||!q(n,r))return;let o=Q(O(r),{tabbable:!0},r);if(!n)return;o.currentNode=n;let i=e.shiftKey?o.previousNode():o.nextNode();i||(o.currentNode=e.shiftKey?r[r.length-1].nextElementSibling:r[0].previousElementSibling,i=e.shiftKey?o.previousNode():o.nextNode()),e.preventDefault(),i&&J(i,!0)},o=e=>{(!I||G(I,v))&&q(e.target,v.current)?(I=v,i.current=e.target):j(v)&&!V(e.target,v)?i.current?i.current.focus():I&&I.current&&Y(I.current):j(v)&&(i.current=e.target)},l=e=>{u.current&&cancelAnimationFrame(u.current),u.current=requestAnimationFrame(()=>{if(t.activeElement&&j(v)&&!V(t.activeElement,v)){if(I=v,t.body.contains(e.target)){var n;i.current=e.target,null===(n=i.current)||void 0===n||n.focus()}else I.current&&Y(I.current)}})};return t.addEventListener("keydown",n,!1),t.addEventListener("focusin",o,!1),null==e||e.forEach(e=>e.addEventListener("focusin",o,!1)),null==e||e.forEach(e=>e.addEventListener("focusout",l,!1)),()=>{t.removeEventListener("keydown",n,!1),t.removeEventListener("focusin",o,!1),null==e||e.forEach(e=>e.removeEventListener("focusin",o,!1)),null==e||e.forEach(e=>e.removeEventListener("focusout",l,!1))}},[v,d]),K(()=>()=>{u.current&&cancelAnimationFrame(u.current)},[u]),function(e,t,n){let o=(0,y.useRef)("undefined"!=typeof document?r(e.current?e.current[0]:void 0).activeElement:null);K(()=>{let o=e.current,i=r(o?o[0]:void 0);if(!t||n)return;let u=()=>{(!I||G(I,e))&&q(i.activeElement,e.current)&&(I=e)};return i.addEventListener("focusin",u,!1),null==o||o.forEach(e=>e.addEventListener("focusin",u,!1)),()=>{i.removeEventListener("focusin",u,!1),null==o||o.forEach(e=>e.removeEventListener("focusin",u,!1))}},[e,n]),K(()=>{let o=r(e.current?e.current[0]:void 0);if(!t)return;let i=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||!j(e)||t.isComposing)return;let n=o.activeElement;if(!q(n,e.current))return;let r=$.getTreeNode(e);if(!r)return;let i=r.nodeToRestore,u=Q(o.body,{tabbable:!0});u.currentNode=n;let l=t.shiftKey?u.previousNode():u.nextNode();if(i&&o.body.contains(i)&&i!==o.body||(i=void 0,r.nodeToRestore=void 0),(!l||!q(l,e.current))&&i){u.currentNode=i;do l=t.shiftKey?u.previousNode():u.nextNode();while(q(l,e.current));(t.preventDefault(),t.stopPropagation(),l)?J(l,!0):V(i)?J(i,!0):n.blur()}};return n||o.addEventListener("keydown",i,!0),()=>{n||o.removeEventListener("keydown",i,!0)}},[e,t,n]),K(()=>{var n;let i=r(e.current?e.current[0]:void 0);if(!t)return;let u=$.getTreeNode(e);if(u)return u.nodeToRestore=null!==(n=o.current)&&void 0!==n?n:void 0,()=>{let n=$.getTreeNode(e);if(!n)return;let r=n.nodeToRestore;if(t&&r&&(q(i.activeElement,e.current)||i.activeElement===i.body&&function(e){let t=$.getTreeNode(I);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(null==t?void 0:t.scopeRef)===e}(e))){let t=$.clone();requestAnimationFrame(()=>{if(i.activeElement===i.body){let n=t.getTreeNode(e);for(;n;){if(n.nodeToRestore&&n.nodeToRestore.isConnected){B(n.nodeToRestore);return}n=n.parent}for(n=t.getTreeNode(e);n;){if(n.scopeRef&&n.scopeRef.current&&$.getTreeNode(n.scopeRef)){B(U(n.scopeRef.current,!0));return}n=n.parent}}})}}},[e,t])}(v,a,d),function(e,t){let n=y.useRef(t);(0,y.useEffect)(()=>{n.current&&(I=e,!q(r(e.current?e.current[0]:void 0).activeElement,I.current)&&e.current&&Y(e.current)),n.current=!1},[e])}(v,c),(0,y.useEffect)(()=>{let e=r(v.current?v.current[0]:void 0).activeElement,t=null;if(q(e,v.current)){for(let n of $.traverse())n.scopeRef&&q(e,n.scopeRef.current)&&(t=n);t===$.getTreeNode(v)&&(I=t.scopeRef)}},[v]),K(()=>()=>{var e,t,n;let r=null!==(n=null===(t=$.getTreeNode(v))||void 0===t?void 0:null===(e=t.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null;(v===I||G(v,I))&&(!r||$.getTreeNode(r))&&(I=r),$.removeTreeNode(v)},[v]);let E=(0,y.useMemo)(()=>({focusNext(e={}){let t=v.current,{from:n,tabbable:o,wrap:i,accept:u}=e,l=n||r(t[0]).activeElement,d=t[0].previousElementSibling,a=Q(O(t),{tabbable:o,accept:u},t);a.currentNode=q(l,t)?l:d;let c=a.nextNode();return!c&&i&&(a.currentNode=d,c=a.nextNode()),c&&J(c,!0),c},focusPrevious(e={}){let t=v.current,{from:n,tabbable:o,wrap:i,accept:u}=e,l=n||r(t[0]).activeElement,d=t[t.length-1].nextElementSibling,a=Q(O(t),{tabbable:o,accept:u},t);a.currentNode=q(l,t)?l:d;let c=a.previousNode();return!c&&i&&(a.currentNode=d,c=a.previousNode()),c&&J(c,!0),c},focusFirst(e={}){let t=v.current,{tabbable:n,accept:r}=e,o=Q(O(t),{tabbable:n,accept:r},t);o.currentNode=t[0].previousElementSibling;let i=o.nextNode();return i&&J(i,!0),i},focusLast(e={}){let t=v.current,{tabbable:n,accept:r}=e,o=Q(O(t),{tabbable:n,accept:r},t);o.currentNode=t[t.length-1].nextElementSibling;let i=o.previousNode();return i&&J(i,!0),i}}),[]),b=(0,y.useMemo)(()=>({focusManager:E,parentNode:m}),[m,E]);return y.createElement(D.Provider,{value:b},y.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:s}),l,y.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:f}))}let H=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],z=H.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";H.push('[tabindex]:not([tabindex="-1"]):not([disabled])');let W=H.join(':not([hidden]):not([tabindex="-1"]),');function O(e){return e[0].parentElement}function j(e){let t=$.getTreeNode(I);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function q(e,t){return!!e&&!!t&&t.some(t=>t.contains(e))}function V(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:n}of $.traverse($.getTreeNode(t)))if(n&&q(e,n.current))return!0;return!1}function G(e,t){var n;let r=null===(n=$.getTreeNode(t))||void 0===n?void 0:n.parent;for(;r;){if(r.scopeRef===e)return!0;r=r.parent}return!1}function J(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(e){}}else try{!function(e){let t=r(e);if("virtual"===g){var n;let r=t.activeElement;n=()=>{t.activeElement===r&&e.isConnected&&d(e)},requestAnimationFrame(()=>{0===i.size?n():u.add(n)})}else d(e)}(e)}catch(e){}}function U(e,t=!0){let n=e[0].previousElementSibling,r=O(e),o=Q(r,{tabbable:t},e);o.currentNode=n;let i=o.nextNode();return t&&!i&&((o=Q(r=O(e),{tabbable:!1},e)).currentNode=n,i=o.nextNode()),i}function Y(e,t=!0){J(U(e,t))}function B(e){e.dispatchEvent(new CustomEvent(_,{bubbles:!0,cancelable:!0}))&&J(e)}function Q(e,t,n){let i=(null==t?void 0:t.tabbable)?W:z,u=r(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var r;return(null==t?void 0:null===(r=t.from)||void 0===r?void 0:r.contains(e))?NodeFilter.FILTER_REJECT:e.matches(i)&&function e(t,n){return"#comment"!==t.nodeName&&function(e){let t=o(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:n,visibility:r}=e.style,i="none"!==n&&"hidden"!==r&&"collapse"!==r;if(i){let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:r}=t(e);i="none"!==n&&"hidden"!==r&&"collapse"!==r}return i}(t)&&!t.hasAttribute("hidden")&&!t.hasAttribute("data-react-aria-prevent-focus")&&("DETAILS"!==t.nodeName||!n||"SUMMARY"===n.nodeName||t.hasAttribute("open"))&&(!t.parentElement||e(t.parentElement,t))}(e)&&(!n||q(e,n))&&(!(null==t?void 0:t.accept)||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return(null==t?void 0:t.from)&&(u.currentNode=t.from),u}class X{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let o=new Z({scopeRef:e});r.addChild(o),o.parent=r,this.fastMap.set(e,o),n&&(o.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&q(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach(e=>n&&n.addChild(e))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e,t;let n=new X;for(let r of this.traverse())n.addTreeNode(r.scopeRef,null!==(t=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==t?t:null,r.nodeToRestore);return n}constructor(){this.fastMap=new Map,this.root=new Z({scopeRef:null}),this.fastMap.set(null,this.root)}}class Z{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}let $=new X}}]);