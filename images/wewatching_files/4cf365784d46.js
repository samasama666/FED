(function(){window.parent!=window&&(window.lightningjs||function(d,f){var e=d.lightningjs={modules:f.modules},r=f.modules;e.expensive=function(b){b._waitforload=!0;return b};void 0;e.require=f.require;e.provide=function(b,l){function m(){var a=d.console;if(a&&a.error)try{a.error.apply(a,arguments)}catch(c){}else if(d.opera)try{d.opera.postError.apply(d.opera,arguments)}catch(c){}}function f(a){var c=a[0],k=a[1],b=0<k?p[k]:l,f=Array.prototype.slice.call(a[2]),h=f.shift();a=g._.fh[c]=g._.fh[c]||[];
k=g._.eh[c]=g._.eh[c]||[];g._.ph[c]=g._.ph[c]||[];if(b){if(b=b[h])try{var d=b.apply(b,f)}catch(n){var e=n}else e=Error("unknown deferred method '"+h+"'"),m(e.toString());d&&(p[c]=d);if(e){for(;k.length;){c=k.shift();try{c(e)}catch(n){m(n)}}k.push=function(a){a(e)}}else{for(;a.length;){c=a.shift();try{c(d)}catch(n){m(n)}}a.push=function(a){a(d)}}}else m("cannot call deferred method '"+h+"' on 'undefined'")}function t(){for(var a=h.shift();a;){if(u)var c=!1;else{var b=a[1];c=0<b?p[b]:l;var e=Array.prototype.slice.call(a[2]).shift(),
d=void 0;b=v[b]?!0:!1;c=c?(d=c[e])?d._waitforload?!0:!1:!1:b?!0:!1}c?(v[a[0]]=!0,q.push(a)):f(a);a=h.shift()}}e.require(b);var g=r[b];if(g.provided)m("deferred module '"+b+"' is already defined");else{g.provided=!0;var h=(g._.s||[]).slice();var p={0:l};var q=[];var v={};var u=!1;h&&h[0]&&(p[h[0][1]]=l);l._load=function(){u=!0;for(var a=q.shift();a;)f(a),a=q.shift()};g._.s={push:function(a){h.push(a);t()}};t()}};r.lightningjs.provided||e.provide("lightningjs",{load:function(){var b=f.modules,d;for(d in b){var e=
b[d];e._&&e("_load")}}})}(window,window.parent.lightningjs))})();
(function(){var e=window.parent;window.usabilla_live=window.usabilla_live||{};
window.usabilla_live.events={event:function(a,f,d){var b=window.usabilla_live_settings||{},c=b.configuration||{},g=!1;"campaign"===a&&"a"===f&&(g=!0);c.ga&&c.ga.a&&c.ga[a]&&d._action&&this.ga(c.ga[a],d._action,d._label||null,d._value||null,g);c.ga4&&c.ga4.a&&this.ga4(c.ga4[a],d._action,d._label||null,d._value||null,g);c.ot&&c.ot.a&&c.ot[a+":"+f]&&this.ot(c.ot[a+":"+f],a,d,b);if(b.eventCallback&&d._action)try{b.eventCallback(a,d._action,d._label||null,d._value||null,d.user_data||{})}catch(h){}},ga:function(a,
f,d,b,c){e._gaq&&e._gaq.push?(a=["_trackEvent",a,f,d||void 0,b||void 0],c&&a.push(!0),e._gaq.push(a)):e.pageTracker&&e.pageTracker._trackEvent?(a=[a,f,d||void 0,b||void 0],c&&a.push(!0),e.pageTracker._trackEvent.apply(e.pageTracker,a)):e.GoogleAnalyticsObject&&e[e.GoogleAnalyticsObject]&&(a=["send","event",a,f],d&&a.push(d),b&&a.push(b),c&&a.push({nonInteraction:1}),e[e.GoogleAnalyticsObject].apply(e,a))},ga4:function(a,f,d,b,c){e.gtag&&e.gtag("event",a,{action:f,label:d,value:b,nonInteraction:c})},
ot:function(a,f,d,b){var c=null;b.adobe&&b.adobe.AppMeasure?c=b.adobe.AppMeasure():e.s_gi&&(e.s_account||e.s&&e.s.account)&&(c=e.s_gi(e.s_account||e.s&&e.s.account));var g=[];if(c&&c.tl){var h=!1;a.e&&(c.linkTrackEvents=c.events=a.e,g.push("events"),h=!0);if(a.l){var k=this.c(d);k&&(c[a.l]=k,g.push(a.l),h=!0)}h&&(c.linkTrackVars=g.join(","),b.adobe&&b.adobe.preTrackCallback&&b.adobe.preTrackCallback(c,f,a,d,b),c.tl(!0,"o","Usabilla"))}},c:function(a){var f=[],d=this.b(a,["data","site_id"]),b=this.b(a,
["form","hash_mappings"]),c=this.b(b,["hash"]),g=this.b(b,["fields"]);if(null===d||null===b||null===c||null===g)return null;for(b=0;b<g.length;b++){var h=this.b(a.data,g[b].field),k=g[b].answers||null,m=g[b].hash||null;if(null!==h&&null!==k&&null!==m)for(var l in k)k.hasOwnProperty(l)&&l==h&&f.push([d,c,g[b].hash,g[b].answers[l].hash].join(":"))}return 0===f.length?null:f.join(",")},b:function(a,f){if(void 0===a||null===a||void 0===f||null===f||!f.hasOwnProperty("length"))return null;if(0===f.length)return a;
var d=f.shift();return a.hasOwnProperty(d)?this.b(a[d],f):null}};
})();(function(){var d=window.parent.document;function e(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}window.usabilla_live=window.usabilla_live||{};window.usabilla_live.onEvent=e;window.usabilla_live.stopEvent=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent("on"+b,c)};window.usabilla_live.triggerEvent=function(a,b){if(d.createEventObject)a.fireEvent("on"+b,d.createEventObject());else{var c=d.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}};
window.usabilla_live.onParentLoad=function(a){"complete"==window.parent.document.readyState?setTimeout(a,0):e(window.parent,"load",a)};
})();(function(){(function(){var w,O,P,x=[].indexOf||function(b){for(var a=0,d=this.length;a<d;a++)if(a in this&&this[a]===b)return a;return-1},E=function(b,a){return function(){return b.apply(a,arguments)}},Q={}.hasOwnProperty,B=function(b,a){function d(){this.constructor=b}for(var c in a)Q.call(a,c)&&(b[c]=a[c]);d.prototype=a.prototype;b.prototype=new d;b.__super__=a.prototype;return b};(function(b){return b.ensure_json=function(a){ensure_json.loading=ensure_json.loading||!1;if("function"===typeof("undefined"!==
typeof JSON&&null!==JSON?JSON.stringify:void 0))"function"===typeof a&&a();else if(ensure_json.loading)ensure_json.callbacks=ensure_json.callbacks.push(a);else return ensure_json.loading=!0,ensure_json.callbacks=[a],a=document.createElement("script"),a.src="//cdnjs.cloudflare.com/ajax/libs/json3/3.3.0/json3.min.js",a.onload=function(){var a;ensure_json.loading=!1;var b=ensure_json.callbacks;var f=0;for(a=b.length;f<a;f++){var e=b[f];"function"===typeof e&&e()}return ensure_json.callbacks=[]},document.getElementsByTagName("head")[0].appendChild(a)}})(window);
(function(b,a,d){var c={};var f=["slideout.coffee","v2\/slideout.coffee","v2\/popout.coffee","popout.coffee"];b.ScriptExists=function(a){return 0<=x.call(f,a)};b.IncludeScript=function(b,h){if(0>x.call(f,b))return!1;var e=c[b]=c[b]||{};if(e.value)return setTimeout(function(){return"function"===typeof h?h(e.value):void 0},0),!0;if(e.tag)return h&&e.callbacks.push(h),!0;e.callbacks=[];h&&e.callbacks.push(h);var g=a.getElementsByTagName("script")[0];var k=e.tag=a.createElement(d);k.src="https://d6tizftlrpuof.cloudfront.net/live/scripts/campaign-include/a5f669c28be1979ab5e2785121a6e10b/"+b;k.async=!0;g.parentNode.insertBefore(k,
g);return!0};return b.RegisterScript=function(a,b){var d;a=c[a]=c[a]||{};a.value=b;if(a.callbacks){var f=a.callbacks;var e=0;for(d=f.length;e<d;e++){var h=f[e];h(b)}return delete a.callbacks}}})(window,document,"script");var k=window.parent;var g=k.document;var I="https:";"https:"!==g.location.protocol&&(I="http:");var n={};(function(){var b=function(a,b){a=""+I+"//w.usabilla.com/a/t?m=c&b="+encodeURIComponent("4cf365784d46")+"&c="+encodeURIComponent(a)+"&e="+encodeURIComponent(b)+"&cb="+(new Date).getTime();
return(new Image(1,1)).src=a};var a=function(a,b,f,e){var d,c;b=b||{};b._label=b._campaign_id=e;b._action=f;return null!=(d=window.usabilla_live)?null!=(c=d.events)?"function"===typeof c.event?c.event("campaign",a,b):void 0:void 0:void 0};n.hit=function(d,c){null==c&&(c=null);b(d,"a");return a("a",c,"Campaign:Open",d)};n.click=function(d,c){null==c&&(c=null);b(d,"c");return a("c",c,"Campaign:Feedback Clicked",d)};n.pageSwitch=function(b,c){null==c&&(c=null);return a("p",{user_data:c},"Campaign:Page Switch",
b)};n.success=function(d,c){null==c&&(c=null);b(d,"s");return a("s",c,"Campaign:Success",d)};return n.fail=function(d,c){null==c&&(c=null);b(d,"f");return a("f",c,"Campaign:Close",d)}})();k=window.parent;g=k.document;var l={};var r=0;l.url=function(){function b(a,b,c){this.callback=c;this.id=r++;this.invert=a.invert||!1;this.invert||(this.group="url");var d=new RegExp(a.regexp,"i");var e=this.get(a);var h=this.invert;this.triggered=function(){return d.test(e())===!h}}b.prototype.get=function(a){var b=
{href:function(a){return function(){var b;var d=(null!=g?null!=(b=g.location)?b.href:void 0:void 0)||"";if(a)return d;-1!==d.indexOf("#")&&(d=d.substring(0,d.indexOf("#")));-1!==d.indexOf("?")&&(d=d.substring(0,d.indexOf("?")));return d}},pathname:function(a){return a?function(){var a;return((null!=(a=g.location)?a.pathname:void 0)||"")+(g.location.search||"")+(g.location.hash||"")}:function(){var a;return(null!=(a=g.location)?a.pathname:void 0)||""}}};return null==b[a.match]?function(){return""}:
b[a.match](a.query||!1)};b.prototype.destroy=function(){};return b}();l.delay=function(){function b(a,b,c){var d=this;this.callback=c;this.id=r++;this.triggered=function(){return!1};this.timer=setTimeout(function(){d.timer=null;d.triggered=function(){return!0};return d.callback()},a.time)}b.prototype.destroy=function(){if(this.timer)return clearTimeout(this.timer)};return b}();l.percentage=function(){return function(b,a,d){var c,f;this.data=a;this.callback=d;this.id=r++;a="function"===typeof(c=this.data).chanceHit?
c.chanceHit():void 0;null===a&&(a=Math.random()<=b.percentage/100,"function"===typeof(f=this.data).chanceHit&&f.chanceHit(a));this.triggered=a?function(){return!0}:function(){return!1}}}();l.visitor=function(){function b(a,b,c){this.callback=c;this.id=r++;C.initialize();this.t=!1;"new"===a.state&&C.isNew()&&(this.t=!0);"returning"===a.state&&C.isReturning()&&(this.t=!0)}b.prototype.triggered=function(){return this.t};return b}();l.scroll=function(){function b(a,b,c){this.callback=c;this.onScroll=
E(this.onScroll,this);this.id=r++;this.margin=a.margin||200;this.pos=a.pos||"bottom";this.t=!1;window.usabilla_live.onEvent(k,"scroll",this.onScroll)}b.prototype.onScroll=function(){var a=k.pageYOffset||g.body.scrollTop||g.documentElement.scrollTop||0;var b=k.innerHeight||g.documentElement.clientHeight||g.body.clientHeight||0;var c=Math.max(g.body.scrollHeight||0,g.documentElement.scrollHeight||0,g.body.offsetHeight||0,g.documentElement.offsetHeight||0,g.body.clientHeight||0,g.documentElement.clientHeight||
0);if("bottom"===this.pos&&c-(a+b)<=this.margin||"top"===this.pos&&a>=this.margin)return this.t=!0,this.callback(),this.destroy()};b.prototype.triggered=function(){return this.t};b.prototype.destroy=function(){return window.usabilla_live.stopEvent(k,"scroll",this.onScroll)};return b}();l.pages=function(){return function(b,a,d){this.callback=d;this.id=r++;d=b.op||"least";var c=(("function"===typeof a.pageVisitCount?a.pageVisitCount():void 0)||0)+1;a.pageVisitCount(c);this.triggered="least"===d&&c>=
b.pages||"most"===d&&c<=b.pages?function(){return!0}:function(){return!1}}}();l.mouseout=function(){function b(a,b,c){var d=this;this.callback=c;this.mouseOut=E(this.mouseOut,this);this.id=r++;this.triggered=function(){return!1};b=1E4;"time"in a&&(b=a.time);var e=k;window.attachEvent&&(e=g);setTimeout(function(){return window.usabilla_live.onEvent(e,"mouseout",d.mouseOut)},b)}b.prototype.mouseOut=function(a){a=a||k.event;var b=a.relatedTarget||a.toElement;var c=a.clientY;var f=!0;-1<k.navigator.userAgent.indexOf("MSIE")&&
"[object HTMLSelectElement]"===a.fromElement.toString()&&(f=!1);if(!b&&1>c&&f)return this.triggered=function(){return!0},this.callback(),this.destroy()};b.prototype.destroy=function(){var a=k;window.attachEvent&&(a=g);return window.usabilla_live.stopEvent(a,"mouseout",this.mouseOut)};return b}();var p={};l.custom=function(){function b(a,b,c){this.callback=c;this.id=r++;this.name=a.name;this._triggered=!1;this.name in p||(p[this.name]={triggered:!1,list:[]});p[this.name].triggered&&(this._triggered=
!0);p[this.name].list.push(this)}b.prototype.triggered=function(){return this._triggered};b.prototype.trigger=function(){this._triggered=!0;return this.callback()};return b}();l.device=function(){function b(a,b,c){this.callback=c;this.triggered=function(){return!1};var d=a.tests;b=0;for(c=d.length;b<c;b++)a=d[b],this[a]()&&(this.triggered=function(){return!0})}b.prototype.match=function(a){return(new RegExp(a,"i")).test(k.navigator.userAgent)};b.prototype.mwin=function(){return this.match("windows")&&
this.match("phone")};b.prototype.mios=function(){return this.match("(iphone|ipod)")&&!this.match("windows")};b.prototype.mand=function(){return this.match("android")&&this.match("mobile")&&!this.match("windows")};b.prototype.mrim=function(){return this.match("(rim|bb10|blackberry)")&&!this.match("tablet")};b.prototype.mfos=function(){return this.match("firefox")&&this.match("mobile")&&!this.match("android")};b.prototype.mmee=function(){return this.match("meego")};b.prototype.twin=function(){return this.match("windows")&&
this.match("touch")&&!this.match("phone")};b.prototype.tios=function(){return this.match("ipad")};b.prototype.tand=function(){return this.match("android")&&!this.match("mobile")};b.prototype.trim=function(){return this.match("(rim|bb10|blackberry)")&&this.match("tablet")};b.prototype.tfos=function(){return this.match("firefox")&&this.match("tablet")&&!this.match("android")};b.prototype.mob=function(){return this.mios()||this.mand()||this.mwin()||this.mrim()||this.mfos()||this.mmee()};b.prototype.tab=
function(){return this.tios()||this.tand()||this.twin()||this.trim()||this.tfos()};b.prototype.desk=function(){return!this.mob()&&!this.tab()&&!this.match("(mobile|tablet)")};return b}();l.cookie=function(){function b(a,b,c){var d;this.callback=c;this.triggered=function(){return!1};this.test=a.test;this.name=a.name;this.opt="";a["case"]&&(this.opt="i");this.re=a.regexp||"";"function"===typeof this[d=this.test]&&this[d]()&&(this.triggered=function(){return!0})}b.prototype.exists=function(){return this.cookie_exists()};
b.prototype.nexists=function(){return!this.cookie_exists()};b.prototype.regexp=function(){return(new RegExp(this.re,this.opt)).test(this.cookie_get())};b.prototype.cookie_exists=function(){return(new RegExp("(?:^|;\\s*)"+encodeURIComponent(this.name).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=",this.opt)).test(g.cookie)};b.prototype.cookie_get=function(){return decodeURIComponent(g.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(this.name).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$",
this.opt),"$1"))||null};return b}();l.jsval=function(){function b(a,b,c){var d=this;this.spec=a;this.callback=c;this._triggered=!1;this.t=setInterval(function(){return d.checkValues()},1E3);this.checkValues()}b.prototype.checks={equals:function(a,b){return""+a===""+b},nequals:function(a,b){return""+a!==""+b},contains:function(a,b){return(new RegExp(b,"i")).test(a)},ncontains:function(a,b){return!(new RegExp(b,"i")).test(a)},gt:function(a,b){return a>b},gte:function(a,b){return a>=b},lt:function(a,
b){return a<b},lte:function(a,b){return a<=b},oneof:function(a,b){var d;var f=b.split(",");var e=0;for(d=f.length;e<d;e++)if(b=f[e],""+a===b.trim())return!0;return!1}};b.prototype.checkOp=function(a,b,c){var d;var e=0;for(d=b.length;e<d;e++){var h=b[e];if(this.checks[a](h,c))return!0}return!1};b.prototype.getDottedVar=function(a,b,c){var d;b=b.split(".");var e=a;var h=0;for(d=b.length;h<d;h++)if(a=b[h],a in e)e=e[a];else return c;return e};b.prototype.getVars=function(a){var b,c,f;var e=[];var h=
this.spec.vars;var g=0;for(b=h.length;g<b;g++){var t=h[g];t="*"===t?(null!=(c=window.usabilla_live_settings)?null!=(f=c.local_data)?f.custom:void 0:void 0)||{}:this.getDottedVar(k,t,{});t=this.getDottedVar(t,a,null);null!==t&&e.push(t)}return e};b.prototype.checkValues=function(){var a;var b=!0;var c=this.spec.ops;var f=0;for(a=c.length;f<a;f++){var e=c[f];var h=this.getVars(e["var"]);b&&(b=this.checkOp(e.comp,h,e.val))}if(b)return clearInterval(this.t),this._triggered=!0,this.callback()};b.prototype.triggered=
function(){return this._triggered};return b}();window.usabilla_live.campaignTrigger=function(b){var a;if(b in p){if(!p[b].triggered){var d=p[b].list;var c=0;for(a=d.length;c<a;c++){var f=d[c];f.trigger()}}return p[b].triggered=!0}return p[b]={triggered:!0,list:[]}};var y=function(b,a,d){var c;var f=["-webkit-","-moz-","-o-","-ms-"];var e=0;for(c=f.length;e<c;e++){var h=f[e];b.style[h+a]=d.replace("%p%",h)}return b.style[a]=d.replace("%p%","")};k=parent.window;g=k.document;var u=u||{};var z=function(){function b(a,
b){this.config=a;this.iframe=b;this.frameCount=this.configValue(["shakes","wobbles"],4);this.amplitude=this.configValue(["amp","amplitude"],2);this.top=this.configValue(["top"],1);this.bottom=this.configValue(["bottom"],-1);this.offset=this.configValue(["offset"],0);this.delay=this.configValue(["delay"],2E3);this.speed=this.configValue(["speed"],50);this.duration=this.configValue(["duration"],0);this.timer=null;this.initialize()}b.prototype.getTags=function(){return["move"]};b.prototype.configValue=
function(a,b){var d;var f=0;for(d=a.length;f<d;f++){var e=a[f];if(e in this.config)return this.config[e]}return b};b.prototype.frames=function(){var a,b;var c=[];var f=a=1;for(b=this.frameCount;1<=b?a<=b:a>=b;f=1<=b?++a:--a)c.push([this.speed,this.offset+this.amplitude*(f%2?this.top:this.bottom)]);c.push([this.speed,this.offset]);this.delay&&c.push([this.delay,this.offset]);return c};b.prototype.frame=function(a){return{}};b.prototype.start=function(a){var b=this;null==a&&(a=null);setTimeout(function(){return"function"===
typeof a?a():void 0},0);if(!this.timer){var c=0;var f=this.frames();var e=function(){var a=f[c];return b.timer=setTimeout(function(){b.frame(a[1]);c=(c+1)%f.length;return e()},a[0])};e();if(0<this.duration)return setTimeout(function(){return b.stop()},this.duration)}};b.prototype.stop=function(a){null==a&&(a=null);this.timer&&(clearTimeout(this.timer),this.frame(0));return setTimeout(function(){return"function"===typeof a?a():void 0},0)};b.prototype.initialize=function(){};b.prototype.destroy=function(){return this.stop()};
return b}();u.shake=function(b){function a(){return O=a.__super__.constructor.apply(this,arguments)}B(a,b);a.prototype.initialize=function(){var a=this.iframe.getAttribute("data-tags")||"";this.css="left";if(a.match(/\b(left|right)\b/))return this.css="top"};a.prototype.frame=function(a){return this.iframe.style[this.css]=""+a+"px"};return a}(z);u.skew=function(b){function a(){return P=a.__super__.constructor.apply(this,arguments)}B(a,b);a.prototype.initialize=function(){var a=this.iframe.getAttribute("data-tags")||
"";this.origin="50% 100%";a.match(/\bright\b/)&&(this.origin="100% 50%");a.match(/\bleft\b/)&&(this.origin="0% 50%");a.match(/\btop\b/)&&(this.origin="50% 0%");this.transition=this.configValue(["transition"],!0);this.type="skewX";a.match(/\b(left|right)\b/)&&(this.type="skewY");y(this.iframe,"transform-origin",this.origin);if(this.transition)return y(this.iframe,"transition","%p%transform "+this.speed/1E3+"s ease")};a.prototype.unit=function(){var a;return"skewX"===(a=this.type)||"skewY"===a||"rotate"===
a||"rotateX"===a||"rotateY"===a||"rotateZ"===a?"deg":""};a.prototype.frame=function(a){return y(this.iframe,"transform",""+this.type+"("+a+this.unit()+")")};a.prototype.destroy=function(){return this.stop(function(){y(this.iframe,"transform-origin",null);return y(this.iframe,"transition",null)})};return a}(z);u=u||{};k=window.parent;g=k.document;var m=w=null;try{m=window.localStorage,w=window.sessionStorage}catch(b){}var D="usbl."+"4cf365784d46";var C=null;var v=[];var F=[];var q=[];var G=!1;var R={"96f667ba001a":{"v":2,"a":false,"t":[{"type":"delay","time":15000,"multiplier":1000},{"type":"percentage","percentage":5},{"type":"cookie","name":"nos_dark_mode","case":false,"test":"regexp","regexp":"^true$"}],"e":false},"7fe7ec794363":{"v":5,"a":true,"t":[{"type":"delay","time":8000,"multiplier":1000},{"type":"percentage","percentage":100},{"type":"url","match":"href","query":true,"invert":false,"regexp":"(^https\\:\/\/nos\\.nl\/live$)"}],"e":{"effect":"v2\/slideout","speed":600,"location":"https:\/\/d6tizftlrpuof.cloudfront.net\/live\/i\/632c4d7e7019ef733409b970\/fe9b9f6180b9bc3bae443a7859b88c657357e81f.html","position":"right","positionOffset":50}}};
var S=[];var T=function(b){var a;if(0<=x.call(v,b))return!0;var d=b.getTags();var c=0;for(a=d.length;c<a;c++){var f=d[c];if(0<=x.call(F,f))return!1}v.push(b);a=b.getTags();b=0;for(c=a.length;b<c;b++)f=a[b],F.push(f);return!0};var J=function(b){return"T"===b?!0:"F"===b?!1:null};var H=function(b){return!0===b?"T":!1===b?"F":""};var K=function(b,a,d){return null===a?"":null===b||+new Date>parseInt(b)||0<d&&d!==a?+new Date+864E5*a:b};var L=function(){function b(a,b,c){this.key=
a;this.testing=null!=b?b:!1;this.expire=null!=c?c:null;this.clear();a=m.getItem(this.key);null==a||this.testing||(a=a.split("/"),7===a.length&&("T"===a[0]&&(this._clicked=!0),this._version=parseInt(a[1])||null,this._chanceHit=J(a[2]),this._adCampaign=J(a[3]),this._pageVisitCount=parseInt(a[4]||"0"),this._resetInterval=parseInt(a[5]||this.expire),this._expiration=K(a[6],this._resetInterval,this.expire),this._expiration>a[6]&&(this._clicked=!1)))}b.prototype._clicked=null;b.prototype._version=null;
b.prototype._chanceHit=null;b.prototype._adCampaign=null;b.prototype._pageVisitCount=null;b.prototype._resetInterval=null;b.prototype._expiration=null;b.prototype.save=function(){if(!this.testing){var a=[];a.push(H(this._clicked));a.push(this._version||"");a.push(H(this._chanceHit));a.push(H(this._adCampaign));null===this._pageVisitCount?a.push(""):a.push(parseInt(this._pageVisitCount).toString());a.push(parseInt(this.expire)||"");a.push(K(this._expiration,this.expire,parseInt(this._resetInterval||
0)));return m.setItem(this.key,a.join("/"))}};b.prototype.clear=function(){this._clicked=!1;return this._expiration=this._pageVisitCount=this._adCampaign=this._chanceHit=this._version=null};b.prototype.clicked=function(a){null==a&&(a=null);null!=a&&(this._clicked=!0===a,this.save());return this._clicked};b.prototype.version=function(a){null==a&&(a=null);null!=a&&(this._version=a,this.save());return this._version};b.prototype.chanceHit=function(a){null==a&&(a=null);null!=a&&(this._chanceHit=!0===a,
this.save());return this._chanceHit};b.prototype.adCampaign=function(a){null==a&&(a=null);null!=a&&(this._adCampaign=!0===a,this.save());return this._adCampaign};b.prototype.pageVisitCount=function(a){null==a&&(a=null);null!=a&&(this._pageVisitCount=a,this.save());return this._pageVisitCount};return b}();var U=function(){function b(a,b,c){this.campaign=c}b.prototype.getTags=function(){return[]};b.prototype.start=function(){};b.prototype.stop=function(){};return b}();z=function(){function b(a){this.iframe=
a;this.triggerUpdate=E(this.triggerUpdate,this);this.effect=null;this.triggered=!1;this.effectData=null;this.stopped=!1;this.firstTime=!0;setTimeout(this.triggerUpdate,0)}b.prototype.isBoost=function(){return!1};b.prototype.isTriggered=function(){return!1};b.prototype.initializeEffect=function(a){var b,c,f,e=this;if(null!=(null!=(b=this.effectData)?b.effect:void 0)&&null!=u[this.effectData.effect])b=u[this.effectData.effect];else{if(ScriptExists(""+(null!=(c=this.effectData)?c.effect:void 0)+".coffee")){IncludeScript(""+
(null!=(f=this.effectData)?f.effect:void 0)+".coffee",function(b){e.effect=new b(e.effectData,e.iframe,e);return"function"===typeof a?a():void 0});return}b=U}this.effect=new b(this.effectData,this.iframe,this);return"function"===typeof a?a():void 0};b.prototype.getTags=function(){return null===this.effect?[]:this.effect.getTags()};b.prototype.stop=function(){this.stopped=!0;if(null!==this.effect)return this.effect.stop()};b.prototype.destroy=function(){this.stop();if(null!==this.effect)return this.effect.destroy(),
this.effect=null};b.prototype.triggerUpdate=function(){var a=this;this.triggered=this.isTriggered();if(this.active&&!(this.stopped||null===this.effect&&!1===this.triggered||(new L(this.data.key))._clicked)&&this.shouldActivate())return this.initializeEffect(function(){if(!a.stopped&&T(a))if(a.triggered){if(a.effect.start(),a.firstTime)return a.firstTime=!1,a.activate()}else return a.effect.stop()})};b.prototype.shouldActivate=function(){return!0};b.prototype.activate=function(){};b.prototype.success=
function(){};b.prototype.failure=function(){};b.prototype.feedbackClicked=function(){};b.prototype.firstFeedback=function(){};b.prototype.markAsClicked=function(){};b.prototype.pageSwitch=function(){};return b}();var V=function(b){function a(b,c){this.data=b;a.__super__.constructor.call(this,c);this.active=!0;this.effectData=this.data.e;this.trigger={triggered:function(){return!0}};l[this.data.t.type]&&(this.trigger=new l[this.data.t.type](this.data.t,{},this.triggerUpdate))}B(a,b);a.prototype.isTriggered=
function(){return this.trigger.triggered()};a.prototype.destroy=function(){var b;a.__super__.destroy.call(this);return"function"===typeof(b=this.trigger).destroy?b.destroy():void 0};return a}(z);var W=function(b){function a(b,c,f,e){this.id=b;this.testing=null!=e?e:!1;a.__super__.constructor.call(this,f);this.version=parseInt(c.v);this.active=c.a;this.expire=parseFloat(c.r)||null;this.triggers=null;this.effectData=c.e;this.storage_name=""+D+".c."+this.id;this.data=new L(this.storage_name,this.testing,
this.expire);this.boost=!1;this.data.clicked()&&(this.active=!1);this.active?(null!==this.data.version()&&this.data.version()!==this.version&&this.data.clear(),this.data.version(this.version),this.triggers=this.initializeTriggers(c.t)):this.stop()}B(a,b);a.prototype.isBoost=function(){return this.boost};a.prototype.initializeTriggers=function(a){var b;var d=[];var e=0;for(b=a.length;e<b;e++){var h=a[e];null!=l[h.type]&&d.push(new l[h.type](h,this.data,this.triggerUpdate))}return d};a.prototype.isTriggered=
function(){var a,b;if(this.stopped||null===this.triggers)return!1;var f=!0;var e={};var h=this.triggers;var g=0;for(b=h.length;g<b;g++){var k=h[g];k.triggered()?k.group&&(e[k.group]=!0):k.group?k.group&&(e[k.group]=e[k.group]||!1):f=!1}for(a in e)(k=e[a])||(f=!1);return f};a.prototype.shouldActivate=function(){return G?!1:G=!0};a.prototype.activate=function(){if(!this.testing)return n.hit(this.id)};a.prototype.pageSwitch=function(a){if(!this.testing)return n.pageSwitch(this.id,a)};a.prototype.success=
function(){this.data.clicked(!0);if(!this.testing)return n.success(this.id)};a.prototype.successOnFeedback=function(){var a=this;return this.firstFeedback=function(){if(!a.testing)return n.success(a.id)}};a.prototype.failure=function(){this.data.clicked(!0);if(!this.testing)return n.fail(this.id)};a.prototype.feedbackClicked=function(){this.testing||n.click(this.id);if(null==this.effect.stopOnFeedback||!1!==this.effect.stopOnFeedback)return this.data.clicked(!0)};a.prototype.destroy=function(){var b;
a.__super__.destroy.call(this);if(null!==this.triggers){var c=this.triggers;var f=[];var e=0;for(b=c.length;e<b;e++){var h=c[e];f.push("function"===typeof h.destroy?h.destroy():void 0)}return f}};a.prototype.markAsClicked=function(){return this.data.clicked(!0)};return a}(z);var X=function(){function b(){this.returning=this.initialized=!1;this.key=""+D+".v";null!==m.getItem(this.key)&&this.initialize()}b.prototype.initialize=function(){if(!this.initialized){this.initialized=!0;if(null===m.getItem(this.key))return m.setItem(this.key,
1),g.cookie="usbls=1;path=/";if(!g.cookie.match(/\busbls=1\b/))return this.returning=!0}};b.prototype.isNew=function(){return!this.returning};b.prototype.isReturning=function(){return this.returning};return b}();var Y=function(){if(!m||!w)return!1;try{return m.setItem("test_storage",1),m.removeItem("test_storage"),w.setItem("test_storage",1),w.removeItem("test_storage"),!0}catch(b){return!1}};var M=function(b,a,d,c){var f,e,h;null==a&&(a=!1);null==d&&(d=null);null==c&&(c=null);if(Y()){C=new X;null===
d&&(d=R);null===c&&(c=S);var g=0;for(e=q.length;g<e;g++){var k=q[g];k.destroy()}q=[];v=[];F=[];q=function(){var c=[];for(f in d)l=d[f],c.push(new W(f,l,b,a));return c}();g=0;for(e=c.length;g<e;g++){var l=c[g];q.push(new V(l,b))}var n=function(){var a;var b=[];var c=0;for(a=q.length;c<a;c++)k=q[c],b.push(k.storage_name);return b}();c=function(a){var b=D+".c.";return null===a||0<=x.call(n,a)||a.substr(0,b.length)!==b?!1:!0};if(!a&&0!==m.length){var p=[];g=e=0;for(h=m.length-1;0<=h?e<=h:e>=h;g=0<=h?
++e:--e)c(m.key(g))&&p.push(m.removeItem(m.key(g)));return p}}};var A=null;var N=!0;window.usabilla_live||(window.usabilla_live={});window.usabilla_live.campaignInit=M;window.usabilla_live.campaignReset=function(b){G=!1;return M(b)};window.usabilla_live.setCampaignPrefix=function(b){return D=b};window.usabilla_live.stopCampaignsForFeedback=function(){var b;if(null!==A)return A;A=[];var a=0;for(b=v.length;a<b;a++){var d=v[a];d.feedbackClicked();null!=d.id&&d.isBoost()&&A.push(d.id)}a=0;for(b=q.length;a<
b;a++)d=q[a],d.stop();return A};window.usabilla_live.onFeedback=function(){var b;if(N){N=!1;var a=[];var d=0;for(b=v.length;d<b;d++){var c=v[d];a.push(c.firstFeedback())}return a}}}).call(this);
})();(function(){var d=window.parent.document;function e(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}window.usabilla_live=window.usabilla_live||{};window.usabilla_live.onEvent=e;window.usabilla_live.stopEvent=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent("on"+b,c)};window.usabilla_live.triggerEvent=function(a,b){if(d.createEventObject)a.fireEvent("on"+b,d.createEventObject());else{var c=d.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}};
window.usabilla_live.onParentLoad=function(a){"complete"==window.parent.document.readyState?setTimeout(a,0):e(window.parent,"load",a)};
})();(function(){var d=window.parent.document;function e(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}window.usabilla_live=window.usabilla_live||{};window.usabilla_live.onEvent=e;window.usabilla_live.stopEvent=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent("on"+b,c)};window.usabilla_live.triggerEvent=function(a,b){if(d.createEventObject)a.fireEvent("on"+b,d.createEventObject());else{var c=d.createEvent("HTMLEvents");c.initEvent(b,!0,!0);a.dispatchEvent(c)}};
window.usabilla_live.onParentLoad=function(a){"complete"==window.parent.document.readyState?setTimeout(a,0):e(window.parent,"load",a)};
})();(function(){var b="https:\/\/d6tizftlrpuof.cloudfront.net\/live\/",h="body { background: transparent; padding: 0; margin: 0; text-align: left; } img { cursor: pointer; display: block; margin: 0 auto; }",k="\u003cimg src='//d6tizftlrpuof.cloudfront.net/live/resources/buttons/usabilla_black_bottomFeedback.png' width='104' height='64' /\u003e",l=window.parent.document;window.usabilla_live=window.usabilla_live||{};
window.usabilla_live.createIframe=function(c,a){var d="usabilla_live_button_container_iframe"+Math.floor(1E9*Math.random("104px64px")),e=['<!DOCTYPE html>\n<html lang="nl-NL">','<base href="'+b+'"></base>',"<title>Usabilla Feedback Button</title>",a?"<style type='text/css' nonce='"+a+"'>":"<style type='text/css'>",h,"</style>\n<body>",k,"</body>\n</html>"].join("\n"),m=["iframe.usabilla-live-button#",d,"{width:104px;height:64px;margin: 0;padding: 0;border: 0;overflow: hidden;z-index: 9998;position: absolute;left: 0;top: 0;box-shadow: 0 0 0;background-color: transparent;}"].join("");
0<l.getElementsByTagName("head").length&&(a=window.createStyleElement({type:"text/css",nonce:a},m),l.getElementsByTagName("head")[0].appendChild(a));a=l.createElement("iframe");a.src=/MSIE[ ]+6/.test(navigator.userAgent)?"javascript:false":"";a.frameBorder=0;a.marginWidth=0;a.marginHeight=0;a.scrolling="no";a.allowTransparency=!0;a.setAttribute("data-tags","bottom");a.setAttribute("title","Usabilla Feedback Button");a.setAttribute("class","usabilla-live-button");a.setAttribute("id",d);c.appendChild(a);
c=a.contentWindow;d=l.body.scrollTop||0;try{c.document.open()}catch(f){var g="javascript:document.open();document.domain='"+l.domain+"';";a.src=g+"void(0);"}try{c.document.write(e),c.document.close()}catch(f){a.src=g+'document.write("'+e.replace(/"/g,String.fromCharCode(92)+'"')+'");document.close();'}try{a.contentWindow.document.body.scrollTop=0,l.location.toString().match(/#(top)?$/)&&(l.body.scrollTop=d)}catch(f){}return a};
})();(function(){var c=window.parent,e=c.document,f=null,g=null,k=null,l=window.usabilla_live=window.usabilla_live||{},m=null,n=window.usabilla_live_settings={local_data:{email:null,custom:{}},ie10focusfix:!1,eventCallback:null,form:null,zIndex:9999,configuration:{"ga":{"a":false},"ga4":{"a":false}}},p=!0,q=null,r=!1;
function t(){function a(){h||(h=!0,e.body.removeChild(b))}var b=e.createElement("div");b.style.position="fixed";b.style.zIndex=""+n.zIndex;b.style.top=0;b.style.left=0;b.style.right=0;b.style.bottom=0;b.style.background="#555";b.style.opacity="0.8";b.style.filter="alpha(opacity=80)";e.body.appendChild(b);var d=e.createElement("div");d.style.position="absolute";d.style.left="50%";d.style.top="50%";d.style.margin="-32px 0 0 -32px";d.style.width="64px";d.style.height="64px";d.style.backgroundImage="url(https://d6tizftlrpuof.cloudfront.net/live/resources/throbber.gif)";
b.appendChild(d);var h=!1;setTimeout(a,15E3);return a}
function v(){if("undefined"!=typeof c.innerWidth){var a=c.innerWidth;var b=c.innerHeight}else"undefined"!=typeof e.documentElement&&"undefined"!=typeof e.documentElement.clientWidth&&0!=e.documentElement.clientWidth?(a=e.documentElement.clientWidth,b=e.documentElement.clientHeight):(a=e.getElementsByTagName("body")[0].clientWidth,b=e.getElementsByTagName("body")[0].clientHeight);c.open("https://api.usabilla.com/v2/f/"+"4cf365784d46"+"?w="+a+"&h="+b+"&url="+encodeURIComponent(window.location),"_blank","height=470,width=465")}
function w(a,b){var d=e.createElement("style"),h,u=Object.keys(a);for(h=0;h<u.length;h++)d.setAttribute(u[h],a[u[h]]);d.styleSheet?d.styleSheet.cssText=b:d.appendChild(e.createTextNode(b));return d}window.createStyleElement=w;
if(c!=window){var y=function(a){null!==f?a():x.push(a)};l.onParentLoad(function(){var a="right:200px;position:fixed;width:104px;height:64px;z-index:999;bottom:0px",b=e.body;null!==k&&(b=e.getElementById(k)||b);var d="usabilla_live_button_container_"+Math.floor(1E9*Math.random(a));f=e.createElement("div");f.className="usabilla_live_button_container";f.setAttribute("class","usabilla_live_button_container");f.setAttribute("id",d);f.setAttribute("role","button");f.setAttribute("tabindex","0");0<e.getElementsByTagName("head").length?(d=w({type:"text/css",nonce:"4cf365784d46"},
"div.usabilla_live_button_container#"+d+'[role="button"] {'+a+"}"),f.appendChild(d)):f.setAttribute("style",a);f.setAttribute("aria-label","Usabilla Feedback Button");"setAttribute"in f.style&&f.style.setAttribute("cssText",a,0);b.appendChild(f);g=f.style.display;if(/MSIE[ ]+(6|7)/.test(navigator.userAgent))for(f.style.display="none",r=!0;0<x.length;)x.shift()();else{0<e.getElementsByTagName("head").length&&(a=w({type:"text/css",nonce:"4cf365784d46",media:"print"},".usabilla_live_button_container { display: none; }"),
e.getElementsByTagName("head")[0].appendChild(a));q=l.createIframe(f,"4cf365784d46");l.buttonClick=function(){var a=l.stopCampaignsForFeedback();null===m&&(m=window.lightningjs.require("usabilla_live_feedback","//w.usabilla.com/feedbacklet"));m("setEventHandler",l.events);m("start","4cf365784d46",a,n,t(),l.onFeedback)};l.onEvent(q.contentWindow.document,"click",function(){l.buttonClick()});for(l.onEvent(f,"keyup",function(a){!e.hasFocus()||13!==a.keyCode&&32!==a.keyCode||l.buttonClick()});0<x.length;)x.shift()();p&&l.campaignInit(q)}});
var x=[];window.lightningjs.provide("usabilla_live",{setStyle:function(a){y(function(){for(var b in a)a.hasOwnProperty(b)&&(f.style[b]=a[b])})},setButtonZIndex:function(a){y(function(){f.style.zIndex=a})},setInterfaceZIndex:function(a){n.zIndex=parseInt(a)},setParent:function(a){k=a},show:function(){y(function(){f.style.display=g})},hide:function(){y(function(){f.style.display="none"})},data:function(a){n.local_data.email=a.email||null;n.local_data.custom=a.custom||n.local_data.custom},setCampaign:function(a,
b,d){p=!1;y(function(){l.campaignInit(q,d,a,b)})},virtualPageView:function(){p=!0;y(function(){l.campaignReset(q);var a="https://w.usabilla.com/a/t?m=b&b="+encodeURIComponent("4cf365784d46")+"&e=SPAC&cb="+(new Date).getTime();(new Image(1,1)).src=a})},trigger:l.campaignTrigger,popup:v,click:function(){r?v():y(function(){l.buttonClick()})},setForm:function(a){n.form=a},disableScreenshot:function(a){n.generateScreenshot=!a},onLoad:function(a){y(a)},ie10FocusFix:function(){n.ie10focusfix=!0},setEventCallback:function(a){n.eventCallback=
a},setDataMasking:function(a,b){n.masks=a||[/[a-zA-Z0-9\+\.\_\%\-\+]{1,256}\@[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}(\.[a-zA-Z0-9][a-zA-Z0-9\-]{0,25})+/g,/[0-9]{4,}/g];n.maskCharacter=b||"X"},setSelectionCallback:function(a){n.selectionCallback=a},configureAdobeAnalytics:function(a){n.adobe=a},setCustomOptionClick:function(a){n.customOptionClick=a},setIntegrationData:function(a){n.local_data.integrations=a}})};
})();