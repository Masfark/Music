(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1188:function(e,t,n){e.exports=n(1189)},1189:function(e,t,n){"use strict";n.r(t),function(e){var t=n(3),r=n.n(t),a=n(19),o=n(6),c=n(25),s=n(261),i=n(101),u=n(55),E=n(5),l=n(8),f=n(670),b=n(669),d=n(89),_=n(127),p=n(10),O=n(45),R=n(64);Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(d.a)(),e.prev=1,e.next=4,Object(u.b)();case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),Object(p.a)({activity:"background_setup",level:"ERROR",message:"Initializing db threw ".concat(JSON.stringify(e.t0))}),E.b.dispatch(E.a.view.set("firefox-in-private-mode"===e.t0.message?"FirefoxPrivateMode":"SomethingWeird"));case 10:return e.next=12,Object(b.a)({logActivity:"background_setup"});case 12:return e.next=14,i.a.GLOBAL_ERROR_LOG;case 14:if(!e.sent){e.next=16;break}window.addEventListener("error",function(e){Object(p.a)({activity:"background_setup",level:"ERROR",message:"Event listener caught window err: ".concat(e)})});case 16:return e.t1=c.a,e.next=19,i.a.API_URL;case 19:return e.t2=e.sent,e.next=22,i.a.ASSETS_URL;case 22:return e.t3=e.sent,e.next=25,i.a.BACKUP_API_URL;case 25:return e.t4=e.sent,e.next=28,i.a.BACKUP_ASSETS_URL;case 28:return e.t5=e.sent,e.t6=E.b.getState().session.session_auth_hash,e.t7=l.IS_CHROME?"chrome":"firefox",e.t8={apiUrl:e.t2,assetsUrl:e.t3,backupApiUrl:e.t4,backupAssetsUrl:e.t5,sessionAuthHash:e.t6,platform:e.t7},e.t1.setConfig.call(e.t1,e.t8),e.next=35,Promise.all(Object.values(O).map(function(e){return e.initialize?e.initialize():Promise.resolve()}));case 35:return e.next=37,Promise.all(Object.values(f).map(function(e){return e()}));case 37:Object(_.c)()||Object(_.b)(),E.b.getState().missingUserFilter||µBlock.selectedFilterLists.includes("user-filters")||(Object(R.updateFilterLists)({toSelect:[].concat(Object(a.a)(µBlock.selectedFilterLists),["user-filters"])}),E.b.dispatch(E.a.missingUserFilter.set(!0))),Object(s.wrapStore)(E.b,{portName:Object({NODE_ENV:"production",PUBLIC_URL:"",WEB_EXT_CLIENT_AUTH_SECRET:"",WEB_EXT_ENV:"",WEB_EXT_SESSION_POLLER_INTERVAL:"",WEB_EXT_AUTH_ERROR_COUNT_MAX:"",WEB_EXT_PROXY_PORT:"",WEB_EXT_I18N_DEBUG:"",WEB_EXT_ENABLE_REDUX_LOGGER:"",WEB_EXT_USE_REACT_DEVTOOLS:"",WEB_EXT_COOKIE_MONSTER_ENABLED:"",WEB_EXT_DEV_USERNAME:"",WEB_EXT_DEV_PASSWORD:"",WEB_EXT_ENABLE_REACT_AXE:"true",WEB_EXT_UNSAFE_BACKGROUND_IN_IFRAME:"false",WEB_EXT_RENDER_TIMEOUT:"5000"}).REACT_APP_REDUX_PORT||"WS_BROWSER_EXTENSION_STORE"});case 40:case"end":return e.stop()}},e,null,[[1,6]])}))(),"production"!==e.NODE_ENV&&Promise.all([n.e(0),n.e(3)]).then(n.bind(null,1208)).then(function(e){return e.default()})}.call(this,n(102))},669:function(e,t,n){"use strict";var r=n(3),a=n.n(r),o=n(6),c=n(5),s=n(8),i=n(55),u=n(10);t.a=function(){var e=Object(o.a)(a.a.mark(function e(t){var n,r,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.logActivity,r=Object(i.a)(),e.next=4,r.WS_STATE.toArray();case 4:(o=e.sent).length>0&&(Object(u.a)({activity:n,level:"INFO",message:"Hydrating store..."}),o.forEach(function(e){var t=e.state,n=e.reducer;return c.b.dispatch(c.a[n.replace(s.SYNC_KEY,"")].hydrate(t))}));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},670:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),o=n(6),c=n(45),s=n(53),i=Object(o.a)(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:["Created","Activated","Updated","Removed"].forEach(function(e){Object(s.a)(browser.tabs["on".concat(e)],function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];Object.values(c).forEach(function(t){t["onTab".concat(e)]&&t["onTab".concat(e)].apply(t,n)})})});case 2:case"end":return e.stop()}},e)})),u=function(){["Offline","Online"].forEach(function(e){var t=function(){Object.values(c).forEach(function(t){t["on".concat(e)]&&t["on".concat(e)]()})};window.removeEventListener(e.toLowerCase(),t),window.addEventListener(e.toLowerCase(),t)})},E=n(5),l=n(16),f=function(){Object(s.a)(browser.runtime.onMessage,function(e,t){return new Promise(function(n,r){e.type.includes("chromex.")||("get-state"===e.type&&function(e){var t=e.message,n=e.resolve;Array.isArray(t.payload)&&t.payload.length>0?n(t.payload.map(function(e){return Object(l.get)(E.b.getState(),e)})):n(Object(l.get)(E.b.getState(),t.payload))}({message:e,resolve:n}),Object.values(c).forEach(function(a){var o,c;(null===(o=a.onMessage)||void 0===o?void 0:o[e.type])&&(null===(c=a.onMessage)||void 0===c||c[e.type](e,{resolve:n,reject:r,sender:t}))}))})})},b=function(){browser.contextMenus&&Object(s.a)(browser.contextMenus.onClicked,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Object.values(c).forEach(function(e){e.onContextMenuClicked&&e.onContextMenuClicked.apply(e,t)})})},d=function(){["FocusChanged"].forEach(function(e){Object(s.a)(browser.windows["on".concat(e)],function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];Object.values(c).forEach(function(t){t["onWindow".concat(e)]&&t["onWindow".concat(e)].apply(t,n)})})})},_=n(8),p=Object(o.a)(a.a.mark(function e(){var t,n,r,o,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Object.values(c).forEach(function(e){e.onWebRequestBeforeRequest&&e.onWebRequestBeforeRequest.apply(e,t)})},Object(s.a)(browser.webRequest.onBeforeRequest,t,_.FILTER,["requestBody"]),n=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Object.values(c).forEach(function(e){e.onWebRequestHeadersReceived&&e.onWebRequestHeadersReceived.apply(e,t)})},Object(s.a)(browser.webRequest.onHeadersReceived,n,_.FILTER,["responseHeaders"]),r=[function(){var e=Object.values(c).find(function(e){return e.onWebRequestAuthRequired});return e.onWebRequestAuthRequired.apply(e,arguments)},_.FILTER,[_.IS_CHROME?"asyncBlocking":"blocking"]],s.a.apply(void 0,[browser.webRequest.onAuthRequired].concat(r)),o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Object.values(c).forEach(function(e){e.onProxyError&&e.onProxyError.apply(e,t)})},Object(s.a)(browser.proxy[_.IS_CHROME?"onProxyError":"onError"],o),i=[function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Object.values(c).forEach(function(e){e.onWebRequestCompleted&&e.onWebRequestCompleted.apply(e,t)})},_.FILTER],s.a.apply(void 0,[browser.webRequest.onCompleted].concat(i));case 12:case"end":return e.stop()}},e)}));n.d(t,"tabs",function(){return i}),n.d(t,"connectivity",function(){return u}),n.d(t,"runtime",function(){return f}),n.d(t,"contextMenus",function(){return b}),n.d(t,"windows",function(){return d}),n.d(t,"webRequest",function(){return p})}},[[1188,5,0]]]);