"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var CcmCookie=function(){function a(b){_classCallCheck(this,a),this.isSet=!1,this.name=b,this.value=null,this.domain=ccmWrapper.config.cookieDomain,this.path=ccmWrapper.config.cookiePath,this.sameSite="lax",this.expires=new Date,this.expires.setTime(this.expires.getTime()+31536000000),this.read()}return _createClass(a,[{key:"read",value:function read(){var a=document.cookie.match("(^|;) ?"+this.name+"=([^;]*)(;|$)");a&&(this.value=a[2],this.isSet=!0,CcmLog.debug("Loaded cookie: "+this.name,this,document.cookie))}},{key:"store",value:function store(){var a=[this.name+"="+this.value,"expires="+this.expires.toUTCString(),"sameSite="+this.sameSite];this.domain&&a.push("domain="+this.domain),this.path&&a.push("path="+this.path),document.cookie=a.join(";"),this.isSet?CcmLog.debug("Stored cookie: "+this.name,this,document.cookie):CcmLog.debug("Created cookie: "+this.name,this,document.cookie),this.isSet=!0}},{key:"delete",value:function _delete(){this.isSet&&(this.value=null,this.expires=new Date(0),this.store(),this.isSet=!1,CcmLog.debug("Deleted cookie: "+this.name,document.cookie))}},{key:"setExpireTime",value:function setExpireTime(a){this.expires=new Date,this.expires.setTime(this.expires.getTime()+3600000*a)}}]),a}(),CcmLog=function(){function a(){_classCallCheck(this,a)}return _createClass(a,null,[{key:"log",value:function log(a){var b=!0;if("undefined"!=typeof ccmWrapper.config.log.log&&(b=ccmWrapper.config.log.log),b)try{for(var c=arguments.length,d=Array(1<c?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];if(0<d.length){var f;(f=console).log.apply(f,[a].concat(d))}else console.log(a)}catch(a){}}},{key:"info",value:function info(b){var c=!0;if("undefined"!=typeof ccmWrapper.config.log.info&&(c=ccmWrapper.config.log.info),c){for(var d=arguments.length,f=Array(1<d?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];try{if(0<f.length){var h;(h=console).info.apply(h,[b].concat(f))}else console.info(b)}catch(c){a.error(c),a.log.apply(a,[b].concat(f))}}}},{key:"debug",value:function debug(b){var c=!0;if("undefined"!=typeof ccmWrapper.config.log.debug&&(c=ccmWrapper.config.log.debug),c){for(var d=arguments.length,f=Array(1<d?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];try{if(0<f.length){var h;(h=console).debug.apply(h,[b].concat(f))}else console.debug(b)}catch(c){a.error(c),a.log.apply(a,[b].concat(f))}}}},{key:"warning",value:function warning(b){var c=!0;if("undefined"!=typeof ccmWrapper.config.log.warning&&(c=ccmWrapper.config.log.warning),c){for(var d=arguments.length,f=Array(1<d?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];try{if(0<f.length){var h;(h=console).warn.apply(h,[b].concat(f))}else console.warn(b)}catch(c){a.error(c),a.log.apply(a,[b].concat(f))}}}},{key:"error",value:function error(b){var c=!0;if("undefined"!=typeof ccmWrapper.config.log.error&&(c=ccmWrapper.config.log.error),c){for(var d=arguments.length,f=Array(1<d?d-1:0),g=1;g<d;g++)f[g-1]=arguments[g];try{if(0<f.length){var h;(h=console).error.apply(h,[b].concat(f))}else console.error(b)}catch(c){a.error(c),a.log.apply(a,[b].concat(f))}}}}]),a}();"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(a){'use strict';if(null==a)throw new TypeError("Cannot convert undefined or null to object");for(var b,c=Object(a),d=1;d<arguments.length;d++)if(b=arguments[d],null!=b)for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(c[e]=b[e]);return c},writable:!0,configurable:!0});var ccmWrapper,Wrapper=function(){function a(){_classCallCheck(this,a),this.config={log:{log:!1,info:!1,debug:!1,warning:!1,error:!1},organisation:"NOS",site:"nos.nl",cookieDomain:"nos.nl",cookiePath:"/",wrapperCacheCookieName:"CCM_Wrapper_Cache",assetsBaseUrl:"https://cookies.nos.nl",ccmSettingsBaseUrl:"https://cookies.nos.nl",ccmScript:"ccm_",ccmAutoLoad:!0,ccmConfig:{},XMLHttpRequestTimeout:8000,executed:!1},this.dispatchEvent("CCM_Wrapper_loaded")}return _createClass(a,[{key:"preprocess",value:function preprocess(){"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?ccmWrapper.dispatchEvent("CCM_Wrapper_ready"):document.onreadystatechange=function(){("complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState)&&ccmWrapper.dispatchEvent("CCM_Wrapper_ready")}}},{key:"init",value:function init(a){if(ccmWrapper.config.executed)return!1;if(ccmWrapper.config.executed=!0,CcmLog.info("Running init()"),a&&(CcmLog.debug("Init contains an overruling config",a),ccmWrapper.config=Object.assign(ccmWrapper.config,a),CcmLog.debug("New wrapper config",ccmWrapper.config)),ccmWrapper.WrapperCacheCookie=new CcmCookie(ccmWrapper.config.wrapperCacheCookieName),!ccmWrapper.WrapperCacheCookie.isSet){CcmLog.info("Getting wrapper version data");var b=XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");b.open("GET",ccmWrapper.config.assetsBaseUrl+"/sites/"+ccmWrapper.config.organisation+"/"+ccmWrapper.config.site+"/version.txt",!0),b.timeout=ccmWrapper.config.XMLHttpRequestTimeout,b.onreadystatechange=function(){if(CcmLog.debug("XHR ready state changed",b),4==b.readyState)if(200==b.status)CcmLog.debug("Fetched wrapper data",b.responseText),ccmWrapper.WrapperCacheCookie.value=btoa(b.responseText),ccmWrapper.WrapperCacheCookie.domain=ccmWrapper.config.cookieDomain,ccmWrapper.WrapperCacheCookie.path=ccmWrapper.config.cookiePath,ccmWrapper.WrapperCacheCookie.expires=new Date,ccmWrapper.WrapperCacheCookie.expires.setTime(ccmWrapper.WrapperCacheCookie.expires.getTime()+3600000),ccmWrapper.WrapperCacheCookie.store(),ccmWrapper.processWrapperData(JSON.parse(b.responseText)),ccmWrapper.loadCCM();else throw CcmLog.error("Received HTTP status code "+b.status+" on requesting CCM Wrapper data",b),"exit"},b.onerror=function(a){throw CcmLog.error("Error on requesting CCM Wrapper data",a),"exit"},b.ontimeout=function(a){throw CcmLog.error("Timeout on requesting CCM Wrapper data",a),"exit"},b.send()}else CcmLog.info("Loading existing CCM Wrapper cache cookie"),ccmWrapper.processWrapperData(),ccmWrapper.loadCCM();ccmWrapper.config.ccmAutoLoad&&window.addEventListener("CCM_ready",function(){CcmLog.info("Autoloading CCM"),ccm.init(ccmWrapper.config.ccmConfig)},!1)}},{key:"processWrapperData",value:function processWrapperData(a){if(!a)try{a=JSON.parse(atob(ccmWrapper.WrapperCacheCookie.value))}catch(a){throw CcmLog.error("Could not load cached wrapper data",ccmWrapper.WrapperCacheCookie.value,atob(ccmWrapper.WrapperCacheCookie.value)),ccmWrapper.WrapperCacheCookie["delete"](),"exit"}CcmLog.log("CCM Wrapper cache",a),ccmWrapper.version=a.ver,ccmWrapper.jsHash=a.jsh,ccmWrapper.cookieId=a.cid,ccmWrapper.contentId=a.conid}},{key:"loadCCM",value:function loadCCM(){var a=ccmWrapper.createScript(ccmWrapper.config.assetsBaseUrl+"/sites/"+ccmWrapper.config.organisation+"/"+ccmWrapper.config.site+"/"+ccmWrapper.config.ccmScript+ccmWrapper.version+"-"+ccmWrapper.contentId+".js"),b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b),ccmWrapper.dispatchEvent("CCM_Wrapper_done")}},{key:"dispatchEvent",value:function dispatchEvent(a){try{var b;"function"==typeof window.CustomEvent?b=new Event(a):(b=document.createEvent("HTMLEvents"),b.initEvent(a,!1,!0)),window.dispatchEvent(b)}catch(a){CcmLog.error(a)}}},{key:"createScript",value:function createScript(a,b,c){var d=document.createElement("script");return d.src=a,d.crossOrigin="anonymous",c&&(d.integrity=c),b&&(d.async=b,d.defer=b),d}},{key:"createStyle",value:function createStyle(a,b,c){var d=document.createElement("link");return d.rel="stylesheet",d.href=a,d.crossOrigin="anonymous",c&&(d.integrity=c),b&&(d.async=b,d.defer=b),d}}]),a}();ccmWrapper=new Wrapper,CcmLog.debug("Wrapper config",ccmWrapper.config),ccmWrapper.preprocess();