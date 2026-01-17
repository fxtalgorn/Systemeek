(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Gf={exports:{}},Mo={};var Rg;function KS(){if(Rg)return Mo;Rg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=e,Mo.jsx=i,Mo.jsxs=i,Mo}var Cg;function QS(){return Cg||(Cg=1,Gf.exports=KS()),Gf.exports}var En=QS(),Vf={exports:{}},Eo={},Xf={exports:{}},kf={};var wg;function JS(){return wg||(wg=1,(function(o){function e(F,j){var X=F.length;F.push(j);t:for(;0<X;){var _t=X-1>>>1,mt=F[_t];if(0<l(mt,j))F[_t]=j,F[X]=mt,X=_t;else break t}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var j=F[0],X=F.pop();if(X!==j){F[0]=X;t:for(var _t=0,mt=F.length,O=mt>>>1;_t<O;){var nt=2*(_t+1)-1,Mt=F[nt],V=nt+1,ut=F[V];if(0>l(Mt,X))V<mt&&0>l(ut,Mt)?(F[_t]=ut,F[V]=X,_t=V):(F[_t]=Mt,F[nt]=X,_t=nt);else if(V<mt&&0>l(ut,X))F[_t]=ut,F[V]=X,_t=V;else break t}}return j}function l(F,j){var X=F.sortIndex-j.sortIndex;return X!==0?X:F.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,y=null,x=3,M=!1,A=!1,T=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function P(F){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=F)r(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function Y(F){if(T=!1,P(F),!A)if(i(m)!==null)A=!0,I||(I=!0,ct());else{var j=i(p);j!==null&&ht(Y,j.startTime-F)}}var I=!1,N=-1,it=5,U=-1;function C(){return S?!0:!(o.unstable_now()-U<it)}function J(){if(S=!1,I){var F=o.unstable_now();U=F;var j=!0;try{t:{A=!1,T&&(T=!1,L(N),N=-1),M=!0;var X=x;try{e:{for(P(F),y=i(m);y!==null&&!(y.expirationTime>F&&C());){var _t=y.callback;if(typeof _t=="function"){y.callback=null,x=y.priorityLevel;var mt=_t(y.expirationTime<=F);if(F=o.unstable_now(),typeof mt=="function"){y.callback=mt,P(F),j=!0;break e}y===i(m)&&r(m),P(F)}else r(m);y=i(m)}if(y!==null)j=!0;else{var O=i(p);O!==null&&ht(Y,O.startTime-F),j=!1}}break t}finally{y=null,x=X,M=!1}j=void 0}}finally{j?ct():I=!1}}}var ct;if(typeof D=="function")ct=function(){D(J)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,pt=G.port2;G.port1.onmessage=J,ct=function(){pt.postMessage(null)}}else ct=function(){g(J,0)};function ht(F,j){N=g(function(){F(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):it=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(F){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var X=x;x=j;try{return F()}finally{x=X}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var X=x;x=F;try{return j()}finally{x=X}},o.unstable_scheduleCallback=function(F,j,X){var _t=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?_t+X:_t):X=_t,F){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=X+mt,F={id:v++,callback:j,priorityLevel:F,startTime:X,expirationTime:mt,sortIndex:-1},X>_t?(F.sortIndex=X,e(p,F),i(m)===null&&F===i(p)&&(T?(L(N),N=-1):T=!0,ht(Y,X-_t))):(F.sortIndex=mt,e(m,F),A||M||(A=!0,I||(I=!0,ct()))),F},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(F){var j=x;return function(){var X=x;x=j;try{return F.apply(this,arguments)}finally{x=X}}}})(kf)),kf}var Dg;function $S(){return Dg||(Dg=1,Xf.exports=JS()),Xf.exports}var Wf={exports:{}},ne={};var Ug;function ty(){if(Ug)return ne;Ug=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),x=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function g(O,nt,Mt){this.props=O,this.context=nt,this.refs=S,this.updater=Mt||A}g.prototype.isReactComponent={},g.prototype.setState=function(O,nt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,nt,"setState")},g.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function L(){}L.prototype=g.prototype;function D(O,nt,Mt){this.props=O,this.context=nt,this.refs=S,this.updater=Mt||A}var P=D.prototype=new L;P.constructor=D,T(P,g.prototype),P.isPureReactComponent=!0;var Y=Array.isArray;function I(){}var N={H:null,A:null,T:null,S:null},it=Object.prototype.hasOwnProperty;function U(O,nt,Mt){var V=Mt.ref;return{$$typeof:o,type:O,key:nt,ref:V!==void 0?V:null,props:Mt}}function C(O,nt){return U(O.type,nt,O.props)}function J(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function ct(O){var nt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Mt){return nt[Mt]})}var G=/\/+/g;function pt(O,nt){return typeof O=="object"&&O!==null&&O.key!=null?ct(""+O.key):nt.toString(36)}function ht(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(nt){O.status==="pending"&&(O.status="fulfilled",O.value=nt)},function(nt){O.status==="pending"&&(O.status="rejected",O.reason=nt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function F(O,nt,Mt,V,ut){var Et=typeof O;(Et==="undefined"||Et==="boolean")&&(O=null);var yt=!1;if(O===null)yt=!0;else switch(Et){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(O.$$typeof){case o:case e:yt=!0;break;case v:return yt=O._init,F(yt(O._payload),nt,Mt,V,ut)}}if(yt)return ut=ut(O),yt=V===""?"."+pt(O,0):V,Y(ut)?(Mt="",yt!=null&&(Mt=yt.replace(G,"$&/")+"/"),F(ut,nt,Mt,"",function(Z){return Z})):ut!=null&&(J(ut)&&(ut=C(ut,Mt+(ut.key==null||O&&O.key===ut.key?"":(""+ut.key).replace(G,"$&/")+"/")+yt)),nt.push(ut)),1;yt=0;var Wt=V===""?".":V+":";if(Y(O))for(var zt=0;zt<O.length;zt++)V=O[zt],Et=Wt+pt(V,zt),yt+=F(V,nt,Mt,Et,ut);else if(zt=M(O),typeof zt=="function")for(O=zt.call(O),zt=0;!(V=O.next()).done;)V=V.value,Et=Wt+pt(V,zt++),yt+=F(V,nt,Mt,Et,ut);else if(Et==="object"){if(typeof O.then=="function")return F(ht(O),nt,Mt,V,ut);throw nt=String(O),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return yt}function j(O,nt,Mt){if(O==null)return O;var V=[],ut=0;return F(O,V,"","",function(Et){return nt.call(Mt,Et,ut++)}),V}function X(O){if(O._status===-1){var nt=O._result;nt=nt(),nt.then(function(Mt){(O._status===0||O._status===-1)&&(O._status=1,O._result=Mt)},function(Mt){(O._status===0||O._status===-1)&&(O._status=2,O._result=Mt)}),O._status===-1&&(O._status=0,O._result=nt)}if(O._status===1)return O._result.default;throw O._result}var _t=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},mt={map:j,forEach:function(O,nt,Mt){j(O,function(){nt.apply(this,arguments)},Mt)},count:function(O){var nt=0;return j(O,function(){nt++}),nt},toArray:function(O){return j(O,function(nt){return nt})||[]},only:function(O){if(!J(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ne.Activity=y,ne.Children=mt,ne.Component=g,ne.Fragment=i,ne.Profiler=l,ne.PureComponent=D,ne.StrictMode=r,ne.Suspense=m,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ne.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},ne.cache=function(O){return function(){return O.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(O,nt,Mt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var V=T({},O.props),ut=O.key;if(nt!=null)for(Et in nt.key!==void 0&&(ut=""+nt.key),nt)!it.call(nt,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&nt.ref===void 0||(V[Et]=nt[Et]);var Et=arguments.length-2;if(Et===1)V.children=Mt;else if(1<Et){for(var yt=Array(Et),Wt=0;Wt<Et;Wt++)yt[Wt]=arguments[Wt+2];V.children=yt}return U(O.type,ut,V)},ne.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},ne.createElement=function(O,nt,Mt){var V,ut={},Et=null;if(nt!=null)for(V in nt.key!==void 0&&(Et=""+nt.key),nt)it.call(nt,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ut[V]=nt[V]);var yt=arguments.length-2;if(yt===1)ut.children=Mt;else if(1<yt){for(var Wt=Array(yt),zt=0;zt<yt;zt++)Wt[zt]=arguments[zt+2];ut.children=Wt}if(O&&O.defaultProps)for(V in yt=O.defaultProps,yt)ut[V]===void 0&&(ut[V]=yt[V]);return U(O,Et,ut)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(O){return{$$typeof:h,render:O}},ne.isValidElement=J,ne.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:X}},ne.memo=function(O,nt){return{$$typeof:p,type:O,compare:nt===void 0?null:nt}},ne.startTransition=function(O){var nt=N.T,Mt={};N.T=Mt;try{var V=O(),ut=N.S;ut!==null&&ut(Mt,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(I,_t)}catch(Et){_t(Et)}finally{nt!==null&&Mt.types!==null&&(nt.types=Mt.types),N.T=nt}},ne.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ne.use=function(O){return N.H.use(O)},ne.useActionState=function(O,nt,Mt){return N.H.useActionState(O,nt,Mt)},ne.useCallback=function(O,nt){return N.H.useCallback(O,nt)},ne.useContext=function(O){return N.H.useContext(O)},ne.useDebugValue=function(){},ne.useDeferredValue=function(O,nt){return N.H.useDeferredValue(O,nt)},ne.useEffect=function(O,nt){return N.H.useEffect(O,nt)},ne.useEffectEvent=function(O){return N.H.useEffectEvent(O)},ne.useId=function(){return N.H.useId()},ne.useImperativeHandle=function(O,nt,Mt){return N.H.useImperativeHandle(O,nt,Mt)},ne.useInsertionEffect=function(O,nt){return N.H.useInsertionEffect(O,nt)},ne.useLayoutEffect=function(O,nt){return N.H.useLayoutEffect(O,nt)},ne.useMemo=function(O,nt){return N.H.useMemo(O,nt)},ne.useOptimistic=function(O,nt){return N.H.useOptimistic(O,nt)},ne.useReducer=function(O,nt,Mt){return N.H.useReducer(O,nt,Mt)},ne.useRef=function(O){return N.H.useRef(O)},ne.useState=function(O){return N.H.useState(O)},ne.useSyncExternalStore=function(O,nt,Mt){return N.H.useSyncExternalStore(O,nt,Mt)},ne.useTransition=function(){return N.H.useTransition()},ne.version="19.2.3",ne}var Lg;function Bh(){return Lg||(Lg=1,Wf.exports=ty()),Wf.exports}var qf={exports:{}},yn={};var Ng;function ey(){if(Ng)return yn;Ng=1;var o=Bh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,yn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},yn.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},yn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},yn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},yn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,y=h(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:y,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},yn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},yn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,y=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},yn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},yn.requestFormReset=function(m){r.d.r(m)},yn.unstable_batchedUpdates=function(m,p){return m(p)},yn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},yn.useFormStatus=function(){return d.H.useHostTransitionStatus()},yn.version="19.2.3",yn}var Og;function ny(){if(Og)return qf.exports;Og=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),qf.exports=ey(),qf.exports}var Pg;function iy(){if(Pg)return Eo;Pg=1;var o=$S(),e=Bh(),i=ny();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var _=!1,b=c.child;b;){if(b===a){_=!0,a=c,s=f;break}if(b===s){_=!0,s=c,a=f;break}b=b.sibling}if(!_){for(b=f.child;b;){if(b===a){_=!0,a=f,s=c;break}if(b===s){_=!0,s=f,a=c;break}b=b.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var y=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),J=Symbol.iterator;function ct(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var G=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===G?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case g:return"Profiler";case S:return"StrictMode";case Y:return"Suspense";case I:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case D:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case it:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var ht=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},_t=[],mt=-1;function O(t){return{current:t}}function nt(t){0>mt||(t.current=_t[mt],_t[mt]=null,mt--)}function Mt(t,n){mt++,_t[mt]=t.current,t.current=n}var V=O(null),ut=O(null),Et=O(null),yt=O(null);function Wt(t,n){switch(Mt(Et,n),Mt(ut,t),Mt(V,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Km(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Km(n),t=Qm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(V),Mt(V,t)}function zt(){nt(V),nt(ut),nt(Et)}function Z(t){t.memoizedState!==null&&Mt(yt,t);var n=V.current,a=Qm(n,t.type);n!==a&&(Mt(ut,t),Mt(V,a))}function Se(t){ut.current===t&&(nt(V),nt(ut)),yt.current===t&&(nt(yt),vo._currentValue=X)}var kt,Te;function Bt(t){if(kt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);kt=n&&n[1]||"",Te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+t+Te}var oe=!1;function $t(t,n){if(!t||oe)return"";oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var et=st}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(st){et=st}t.call(gt.prototype)}}else{try{throw Error()}catch(st){et=st}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&et&&typeof st.stack=="string")return[st.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],b=f[1];if(_&&b){var B=_.split(`
`),$=b.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===$.length)for(s=B.length-1,c=$.length-1;1<=s&&0<=c&&B[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==$[c]){var ft=`
`+B[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=c);break}}}finally{oe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Bt(a):""}function fe(t,n){switch(t.tag){case 26:case 27:case 5:return Bt(t.type);case 16:return Bt("Lazy");case 13:return t.child!==n&&n!==null?Bt("Suspense Fallback"):Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return $t(t.type,!1);case 11:return $t(t.type.render,!1);case 1:return $t(t.type,!0);case 31:return Bt("Activity");default:return""}}function Oe(t){try{var n="",a=null;do n+=fe(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var z=Object.prototype.hasOwnProperty,R=o.unstable_scheduleCallback,ot=o.unstable_cancelCallback,vt=o.unstable_shouldYield,Tt=o.unstable_requestPaint,St=o.unstable_now,Ht=o.unstable_getCurrentPriorityLevel,wt=o.unstable_ImmediatePriority,Ct=o.unstable_UserBlockingPriority,Zt=o.unstable_NormalPriority,At=o.unstable_LowPriority,It=o.unstable_IdlePriority,he=o.log,qt=o.unstable_setDisableYieldValue,Ut=null,Gt=null;function Qt(t){if(typeof he=="function"&&qt(t),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Ut,t)}catch{}}var ae=Math.clz32?Math.clz32:W,re=Math.log,E=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(re(t)/E|0)|0}var tt=256,xt=262144,bt=4194304;function jt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ie(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=jt(s):(_&=b,_!==0?c=jt(_):a||(a=b&~t,a!==0&&(c=jt(a))))):(b=s&~f,b!==0?c=jt(b):_!==0?c=jt(_):a||(a=s&~t,a!==0&&(c=jt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Re(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ze(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _e(){var t=bt;return bt<<=1,(bt&62914560)===0&&(bt=4194304),t}function He(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function be(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function _i(t,n,a,s,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=_&~a;0<a;){var ft=31-ae(a),gt=1<<ft;b[ft]=0,B[ft]=-1;var et=$[ft];if(et!==null)for($[ft]=null,ft=0;ft<et.length;ft++){var st=et[ft];st!==null&&(st.lane&=-536870913)}a&=~gt}s!==0&&Tn(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Tn(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-ae(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function li(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-ae(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Zn(t,n){var a=n&-n;return a=(a&42)!==0?1:Li(a),(a&(t.suspendedLanes|n))!==0?0:a}function Li(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function aa(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ls(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:yg(t.type))}function Ns(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var vi=Math.random().toString(36).slice(2),en="__reactFiber$"+vi,_n="__reactProps$"+vi,w="__reactContainer$"+vi,q="__reactEvents$"+vi,lt="__reactListeners$"+vi,rt="__reactHandles$"+vi,at="__reactResources$"+vi,Rt="__reactMarker$"+vi;function Ot(t){delete t[en],delete t[_n],delete t[q],delete t[lt],delete t[rt]}function Nt(t){var n=t[en];if(n)return n;for(var a=t.parentNode;a;){if(n=a[w]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=ag(t);t!==null;){if(a=t[en])return a;t=ag(t)}return n}t=a,a=t.parentNode}return null}function Vt(t){if(t=t[en]||t[w]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Jt(t){var n=t[at];return n||(n=t[at]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ft(t){t[Rt]=!0}var Ve=new Set,nn={};function qe(t,n){vn(t,n),vn(t+"Capture",n)}function vn(t,n){for(nn[t]=n,t=0;t<n.length;t++)Ve.add(n[t])}var xe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},ra={};function ze(t){return z.call(ra,t)?!0:z.call(te,t)?!1:xe.test(t)?ra[t]=!0:(te[t]=!0,!1)}function Kn(t,n,a){if(ze(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Wa(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function bn(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Sn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function an(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Si(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qa(t){if(!t._valueTracker){var n=an(t)?"checked":"value";t._valueTracker=Si(t,n,""+t[n])}}function An(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=an(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function sa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nc=/[\n"\\]/g;function Rn(t){return t.replace(Nc,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oc(t,n,a,s,c,f,_,b){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Sn(n)):t.value!==""+Sn(n)&&(t.value=""+Sn(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Pc(t,_,Sn(n)):a!=null?Pc(t,_,Sn(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Sn(b):t.removeAttribute("name")}function kh(t,n,a,s,c,f,_,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qa(t);return}a=a!=null?""+Sn(a):"",n=n!=null?""+Sn(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),qa(t)}function Pc(t,n,a){n==="number"&&sa(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Er(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Sn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Wh(t,n,a){if(n!=null&&(n=""+Sn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Sn(a):""}function qh(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ht(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Sn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),qa(t)}function Tr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Wv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Wv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function jh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Yh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Yh(t,f,n[f])}function zc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Po(t){return Yv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ni(){}var Bc=null;function Ic(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Ar=null;function Zh(t){var n=Vt(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(Oc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[_n]||null;if(!c)throw Error(r(90));Oc(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&An(s)}break t;case"textarea":Wh(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Er(t,!!a.multiple,n,!1)}}}var Fc=!1;function Kh(t,n,a){if(Fc)return t(n,a);Fc=!0;try{var s=t(n);return s}finally{if(Fc=!1,(br!==null||Ar!==null)&&(Ml(),br&&(n=br,t=Ar,Ar=br=null,Zh(n),t)))for(n=0;n<t.length;n++)Zh(t[n])}}function Os(t,n){var a=t.stateNode;if(a===null)return null;var s=a[_n]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=!1;if(Oi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Hc=!1}var oa=null,Gc=null,zo=null;function Qh(){if(zo)return zo;var t,n=Gc,a=n.length,s,c="value"in oa?oa.value:oa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===c[f-s];s++);return zo=c.slice(t,1<s?1-s:void 0)}function Bo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Io(){return!0}function Jh(){return!1}function Un(t){function n(a,s,c,f,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Io:Jh,this.isPropagationStopped=Jh,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=Un(Ya),zs=y({},Ya,{view:0,detail:0}),jv=Un(zs),Vc,Xc,Bs,Ho=y({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(Vc=t.screenX-Bs.screenX,Xc=t.screenY-Bs.screenY):Xc=Vc=0,Bs=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),$h=Un(Ho),Zv=y({},Ho,{dataTransfer:0}),Kv=Un(Zv),Qv=y({},zs,{relatedTarget:0}),kc=Un(Qv),Jv=y({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),$v=Un(Jv),t0=y({},Ya,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),e0=Un(t0),n0=y({},Ya,{data:0}),td=Un(n0),i0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=r0[t])?!!n[t]:!1}function Wc(){return s0}var o0=y({},zs,{key:function(t){if(t.key){var n=i0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(t){return t.type==="keypress"?Bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l0=Un(o0),c0=y({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ed=Un(c0),u0=y({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),f0=Un(u0),h0=y({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),d0=Un(h0),p0=y({},Ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),m0=Un(p0),g0=y({},Ya,{newState:0,oldState:0}),_0=Un(g0),v0=[9,13,27,32],qc=Oi&&"CompositionEvent"in window,Is=null;Oi&&"documentMode"in document&&(Is=document.documentMode);var S0=Oi&&"TextEvent"in window&&!Is,nd=Oi&&(!qc||Is&&8<Is&&11>=Is),id=" ",ad=!1;function rd(t,n){switch(t){case"keyup":return v0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function y0(t,n){switch(t){case"compositionend":return sd(n);case"keypress":return n.which!==32?null:(ad=!0,id);case"textInput":return t=n.data,t===id&&ad?null:t;default:return null}}function x0(t,n){if(Rr)return t==="compositionend"||!qc&&rd(t,n)?(t=Qh(),zo=Gc=oa=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return nd&&n.locale!=="ko"?null:n.data;default:return null}}var M0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!M0[t.type]:n==="textarea"}function ld(t,n,a,s){br?Ar?Ar.push(s):Ar=[s]:br=s,n=wl(n,"onChange"),0<n.length&&(a=new Fo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Fs=null,Hs=null;function E0(t){km(t,0)}function Go(t){var n=Kt(t);if(An(n))return t}function cd(t,n){if(t==="change")return n}var ud=!1;if(Oi){var Yc;if(Oi){var jc="oninput"in document;if(!jc){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),jc=typeof fd.oninput=="function"}Yc=jc}else Yc=!1;ud=Yc&&(!document.documentMode||9<document.documentMode)}function hd(){Fs&&(Fs.detachEvent("onpropertychange",dd),Hs=Fs=null)}function dd(t){if(t.propertyName==="value"&&Go(Hs)){var n=[];ld(n,Hs,t,Ic(t)),Kh(E0,n)}}function T0(t,n,a){t==="focusin"?(hd(),Fs=n,Hs=a,Fs.attachEvent("onpropertychange",dd)):t==="focusout"&&hd()}function b0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Go(Hs)}function A0(t,n){if(t==="click")return Go(n)}function R0(t,n){if(t==="input"||t==="change")return Go(n)}function C0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Hn=typeof Object.is=="function"?Object.is:C0;function Gs(t,n){if(Hn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!z.call(n,c)||!Hn(t[c],n[c]))return!1}return!0}function pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function md(t,n){var a=pd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=pd(a)}}function gd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?gd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function _d(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=sa(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=sa(t.document)}return n}function Zc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var w0=Oi&&"documentMode"in document&&11>=document.documentMode,Cr=null,Kc=null,Vs=null,Qc=!1;function vd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qc||Cr==null||Cr!==sa(s)||(s=Cr,"selectionStart"in s&&Zc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Vs&&Gs(Vs,s)||(Vs=s,s=wl(Kc,"onSelect"),0<s.length&&(n=new Fo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var wr={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Jc={},Sd={};Oi&&(Sd=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Za(t){if(Jc[t])return Jc[t];if(!wr[t])return t;var n=wr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Sd)return Jc[t]=n[a];return t}var yd=Za("animationend"),xd=Za("animationiteration"),Md=Za("animationstart"),D0=Za("transitionrun"),U0=Za("transitionstart"),L0=Za("transitioncancel"),Ed=Za("transitionend"),Td=new Map,$c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$c.push("scrollEnd");function ci(t,n){Td.set(t,n),qe(n,[t])}var Vo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Qn=[],Dr=0,tu=0;function Xo(){for(var t=Dr,n=tu=Dr=0;n<t;){var a=Qn[n];Qn[n++]=null;var s=Qn[n];Qn[n++]=null;var c=Qn[n];Qn[n++]=null;var f=Qn[n];if(Qn[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}f!==0&&bd(a,c,f)}}function ko(t,n,a,s){Qn[Dr++]=t,Qn[Dr++]=n,Qn[Dr++]=a,Qn[Dr++]=s,tu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function eu(t,n,a,s){return ko(t,n,a,s),Wo(t)}function Ka(t,n){return ko(t,null,null,n),Wo(t)}function bd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-ae(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Wo(t){if(50<uo)throw uo=0,ff=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={};function N0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,n,a,s){return new N0(t,n,a,s)}function nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pi(t,n){var a=t.alternate;return a===null?(a=Gn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ad(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function qo(t,n,a,s,c,f){var _=0;if(s=t,typeof t=="function")nu(t)&&(_=1);else if(typeof t=="string")_=IS(t,a,V.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case U:return t=Gn(31,a,n,c),t.elementType=U,t.lanes=f,t;case T:return Qa(a.children,c,f,n);case S:_=8,c|=24;break;case g:return t=Gn(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case Y:return t=Gn(13,a,n,c),t.elementType=Y,t.lanes=f,t;case I:return t=Gn(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:_=10;break t;case L:_=9;break t;case P:_=11;break t;case N:_=14;break t;case it:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Gn(_,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Qa(t,n,a,s){return t=Gn(7,t,s,n),t.lanes=a,t}function iu(t,n,a){return t=Gn(6,t,null,n),t.lanes=a,t}function Rd(t){var n=Gn(18,null,null,0);return n.stateNode=t,n}function au(t,n,a){return n=Gn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Cd=new WeakMap;function Jn(t,n){if(typeof t=="object"&&t!==null){var a=Cd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Oe(n)},Cd.set(t,n),n)}return{value:t,source:n,stack:Oe(n)}}var Lr=[],Nr=0,Yo=null,Xs=0,$n=[],ti=0,la=null,yi=1,xi="";function zi(t,n){Lr[Nr++]=Xs,Lr[Nr++]=Yo,Yo=t,Xs=n}function wd(t,n,a){$n[ti++]=yi,$n[ti++]=xi,$n[ti++]=la,la=t;var s=yi;t=xi;var c=32-ae(s)-1;s&=~(1<<c),a+=1;var f=32-ae(n)+c;if(30<f){var _=c-c%5;f=(s&(1<<_)-1).toString(32),s>>=_,c-=_,yi=1<<32-ae(n)+c|a<<c|s,xi=f+t}else yi=1<<f|a<<c|s,xi=t}function ru(t){t.return!==null&&(zi(t,1),wd(t,1,0))}function su(t){for(;t===Yo;)Yo=Lr[--Nr],Lr[Nr]=null,Xs=Lr[--Nr],Lr[Nr]=null;for(;t===la;)la=$n[--ti],$n[ti]=null,xi=$n[--ti],$n[ti]=null,yi=$n[--ti],$n[ti]=null}function Dd(t,n){$n[ti++]=yi,$n[ti++]=xi,$n[ti++]=la,yi=n.id,xi=n.overflow,la=t}var hn=null,Be=null,ve=!1,ca=null,ei=!1,ou=Error(r(519));function ua(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ks(Jn(n,t)),ou}function Ud(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[en]=t,n[_n]=s,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<ho.length;a++)pe(ho[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),kh(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),qh(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||jm(n.textContent,a)?(s.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),s.onScroll!=null&&pe("scroll",n),s.onScrollEnd!=null&&pe("scrollend",n),s.onClick!=null&&(n.onclick=Ni),n=!0):n=!1,n||ua(t,!0)}function Ld(t){for(hn=t.return;hn;)switch(hn.tag){case 5:case 31:case 13:ei=!1;return;case 27:case 3:ei=!0;return;default:hn=hn.return}}function Or(t){if(t!==hn)return!1;if(!ve)return Ld(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Af(t.type,t.memoizedProps)),a=!a),a&&Be&&ua(t),Ld(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Be=ig(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Be=ig(t)}else n===27?(n=Be,Ta(t.type)?(t=Uf,Uf=null,Be=t):Be=n):Be=hn?ii(t.stateNode.nextSibling):null;return!0}function Ja(){Be=hn=null,ve=!1}function lu(){var t=ca;return t!==null&&(Pn===null?Pn=t:Pn.push.apply(Pn,t),ca=null),t}function ks(t){ca===null?ca=[t]:ca.push(t)}var cu=O(null),$a=null,Bi=null;function fa(t,n,a){Mt(cu,n._currentValue),n._currentValue=a}function Ii(t){t._currentValue=cu.current,nt(cu)}function uu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function fu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),uu(f.return,a,t),s||(_=null);break t}f=b.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),uu(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Pr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var b=c.type;Hn(c.pendingProps.value,_.value)||(t!==null?t.push(b):t=[b])}}else if(c===yt.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(vo):t=[vo])}c=c.return}t!==null&&fu(n,t,a,s),n.flags|=262144}function jo(t){for(t=t.firstContext;t!==null;){if(!Hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function tr(t){$a=t,Bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function dn(t){return Nd($a,t)}function Zo(t,n){return $a===null&&tr(t),Nd(t,n)}function Nd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(t===null)throw Error(r(308));Bi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Bi=Bi.next=n;return a}var O0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},P0=o.unstable_scheduleCallback,z0=o.unstable_NormalPriority,Ke={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new O0,data:new Map,refCount:0}}function Ws(t){t.refCount--,t.refCount===0&&P0(z0,function(){t.controller.abort()})}var qs=null,du=0,zr=0,Br=null;function B0(t,n){if(qs===null){var a=qs=[];du=0,zr=_f(),Br={status:"pending",value:void 0,then:function(s){a.push(s)}}}return du++,n.then(Od,Od),n}function Od(){if(--du===0&&qs!==null){Br!==null&&(Br.status="fulfilled");var t=qs;qs=null,zr=0,Br=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function I0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Pd=F.S;F.S=function(t,n){vm=St(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&B0(t,n),Pd!==null&&Pd(t,n)};var er=O(null);function pu(){var t=er.current;return t!==null?t:Pe.pooledCache}function Ko(t,n){n===null?Mt(er,er.current):Mt(er,n.pool)}function zd(){var t=pu();return t===null?null:{parent:Ke._currentValue,pool:t}}var Ir=Error(r(460)),mu=Error(r(474)),Qo=Error(r(542)),Jo={then:function(){}};function Bd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Id(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ni,Ni),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Hd(t),t;default:if(typeof n.status=="string")n.then(Ni,Ni);else{if(t=Pe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Hd(t),t}throw ir=n,Ir}}function nr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ir=a,Ir):a}}var ir=null;function Fd(){if(ir===null)throw Error(r(459));var t=ir;return ir=null,t}function Hd(t){if(t===Ir||t===Qo)throw Error(r(483))}var Fr=null,Ys=0;function $o(t){var n=Ys;return Ys+=1,Fr===null&&(Fr=[]),Id(Fr,t,n)}function js(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function tl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Gd(t){function n(k,H){if(t){var K=k.deletions;K===null?(k.deletions=[H],k.flags|=16):K.push(H)}}function a(k,H){if(!t)return null;for(;H!==null;)n(k,H),H=H.sibling;return null}function s(k){for(var H=new Map;k!==null;)k.key!==null?H.set(k.key,k):H.set(k.index,k),k=k.sibling;return H}function c(k,H){return k=Pi(k,H),k.index=0,k.sibling=null,k}function f(k,H,K){return k.index=K,t?(K=k.alternate,K!==null?(K=K.index,K<H?(k.flags|=67108866,H):K):(k.flags|=67108866,H)):(k.flags|=1048576,H)}function _(k){return t&&k.alternate===null&&(k.flags|=67108866),k}function b(k,H,K,dt){return H===null||H.tag!==6?(H=iu(K,k.mode,dt),H.return=k,H):(H=c(H,K),H.return=k,H)}function B(k,H,K,dt){var Xt=K.type;return Xt===T?ft(k,H,K.props.children,dt,K.key):H!==null&&(H.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===it&&nr(Xt)===H.type)?(H=c(H,K.props),js(H,K),H.return=k,H):(H=qo(K.type,K.key,K.props,null,k.mode,dt),js(H,K),H.return=k,H)}function $(k,H,K,dt){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=au(K,k.mode,dt),H.return=k,H):(H=c(H,K.children||[]),H.return=k,H)}function ft(k,H,K,dt,Xt){return H===null||H.tag!==7?(H=Qa(K,k.mode,dt,Xt),H.return=k,H):(H=c(H,K),H.return=k,H)}function gt(k,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=iu(""+H,k.mode,K),H.return=k,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return K=qo(H.type,H.key,H.props,null,k.mode,K),js(K,H),K.return=k,K;case A:return H=au(H,k.mode,K),H.return=k,H;case it:return H=nr(H),gt(k,H,K)}if(ht(H)||ct(H))return H=Qa(H,k.mode,K,null),H.return=k,H;if(typeof H.then=="function")return gt(k,$o(H),K);if(H.$$typeof===D)return gt(k,Zo(k,H),K);tl(k,H)}return null}function et(k,H,K,dt){var Xt=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Xt!==null?null:b(k,H,""+K,dt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===Xt?B(k,H,K,dt):null;case A:return K.key===Xt?$(k,H,K,dt):null;case it:return K=nr(K),et(k,H,K,dt)}if(ht(K)||ct(K))return Xt!==null?null:ft(k,H,K,dt,null);if(typeof K.then=="function")return et(k,H,$o(K),dt);if(K.$$typeof===D)return et(k,H,Zo(k,K),dt);tl(k,K)}return null}function st(k,H,K,dt,Xt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return k=k.get(K)||null,b(H,k,""+dt,Xt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case M:return k=k.get(dt.key===null?K:dt.key)||null,B(H,k,dt,Xt);case A:return k=k.get(dt.key===null?K:dt.key)||null,$(H,k,dt,Xt);case it:return dt=nr(dt),st(k,H,K,dt,Xt)}if(ht(dt)||ct(dt))return k=k.get(K)||null,ft(H,k,dt,Xt,null);if(typeof dt.then=="function")return st(k,H,K,$o(dt),Xt);if(dt.$$typeof===D)return st(k,H,K,Zo(H,dt),Xt);tl(H,dt)}return null}function Lt(k,H,K,dt){for(var Xt=null,Me=null,Pt=H,le=H=0,ge=null;Pt!==null&&le<K.length;le++){Pt.index>le?(ge=Pt,Pt=null):ge=Pt.sibling;var Ee=et(k,Pt,K[le],dt);if(Ee===null){Pt===null&&(Pt=ge);break}t&&Pt&&Ee.alternate===null&&n(k,Pt),H=f(Ee,H,le),Me===null?Xt=Ee:Me.sibling=Ee,Me=Ee,Pt=ge}if(le===K.length)return a(k,Pt),ve&&zi(k,le),Xt;if(Pt===null){for(;le<K.length;le++)Pt=gt(k,K[le],dt),Pt!==null&&(H=f(Pt,H,le),Me===null?Xt=Pt:Me.sibling=Pt,Me=Pt);return ve&&zi(k,le),Xt}for(Pt=s(Pt);le<K.length;le++)ge=st(Pt,k,le,K[le],dt),ge!==null&&(t&&ge.alternate!==null&&Pt.delete(ge.key===null?le:ge.key),H=f(ge,H,le),Me===null?Xt=ge:Me.sibling=ge,Me=ge);return t&&Pt.forEach(function(wa){return n(k,wa)}),ve&&zi(k,le),Xt}function Yt(k,H,K,dt){if(K==null)throw Error(r(151));for(var Xt=null,Me=null,Pt=H,le=H=0,ge=null,Ee=K.next();Pt!==null&&!Ee.done;le++,Ee=K.next()){Pt.index>le?(ge=Pt,Pt=null):ge=Pt.sibling;var wa=et(k,Pt,Ee.value,dt);if(wa===null){Pt===null&&(Pt=ge);break}t&&Pt&&wa.alternate===null&&n(k,Pt),H=f(wa,H,le),Me===null?Xt=wa:Me.sibling=wa,Me=wa,Pt=ge}if(Ee.done)return a(k,Pt),ve&&zi(k,le),Xt;if(Pt===null){for(;!Ee.done;le++,Ee=K.next())Ee=gt(k,Ee.value,dt),Ee!==null&&(H=f(Ee,H,le),Me===null?Xt=Ee:Me.sibling=Ee,Me=Ee);return ve&&zi(k,le),Xt}for(Pt=s(Pt);!Ee.done;le++,Ee=K.next())Ee=st(Pt,k,le,Ee.value,dt),Ee!==null&&(t&&Ee.alternate!==null&&Pt.delete(Ee.key===null?le:Ee.key),H=f(Ee,H,le),Me===null?Xt=Ee:Me.sibling=Ee,Me=Ee);return t&&Pt.forEach(function(ZS){return n(k,ZS)}),ve&&zi(k,le),Xt}function Le(k,H,K,dt){if(typeof K=="object"&&K!==null&&K.type===T&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:t:{for(var Xt=K.key;H!==null;){if(H.key===Xt){if(Xt=K.type,Xt===T){if(H.tag===7){a(k,H.sibling),dt=c(H,K.props.children),dt.return=k,k=dt;break t}}else if(H.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===it&&nr(Xt)===H.type){a(k,H.sibling),dt=c(H,K.props),js(dt,K),dt.return=k,k=dt;break t}a(k,H);break}else n(k,H);H=H.sibling}K.type===T?(dt=Qa(K.props.children,k.mode,dt,K.key),dt.return=k,k=dt):(dt=qo(K.type,K.key,K.props,null,k.mode,dt),js(dt,K),dt.return=k,k=dt)}return _(k);case A:t:{for(Xt=K.key;H!==null;){if(H.key===Xt)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(k,H.sibling),dt=c(H,K.children||[]),dt.return=k,k=dt;break t}else{a(k,H);break}else n(k,H);H=H.sibling}dt=au(K,k.mode,dt),dt.return=k,k=dt}return _(k);case it:return K=nr(K),Le(k,H,K,dt)}if(ht(K))return Lt(k,H,K,dt);if(ct(K)){if(Xt=ct(K),typeof Xt!="function")throw Error(r(150));return K=Xt.call(K),Yt(k,H,K,dt)}if(typeof K.then=="function")return Le(k,H,$o(K),dt);if(K.$$typeof===D)return Le(k,H,Zo(k,K),dt);tl(k,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(k,H.sibling),dt=c(H,K),dt.return=k,k=dt):(a(k,H),dt=iu(K,k.mode,dt),dt.return=k,k=dt),_(k)):a(k,H)}return function(k,H,K,dt){try{Ys=0;var Xt=Le(k,H,K,dt);return Fr=null,Xt}catch(Pt){if(Pt===Ir||Pt===Qo)throw Pt;var Me=Gn(29,Pt,null,k.mode);return Me.lanes=dt,Me.return=k,Me}}}var ar=Gd(!0),Vd=Gd(!1),ha=!1;function gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ae&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Wo(t),bd(t,null,a),n}return ko(t,s,n,a),Wo(t)}function Zs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,li(t,a)}}function vu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Su=!1;function Ks(){if(Su){var t=Br;if(t!==null)throw t}}function Qs(t,n,a,s){Su=!1;var c=t.updateQueue;ha=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var B=b,$=B.next;B.next=null,_===null?f=$:_.next=$,_=B;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==_&&(b===null?ft.firstBaseUpdate=$:b.next=$,ft.lastBaseUpdate=B))}if(f!==null){var gt=c.baseState;_=0,ft=$=B=null,b=f;do{var et=b.lane&-536870913,st=et!==b.lane;if(st?(me&et)===et:(s&et)===et){et!==0&&et===zr&&(Su=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Lt=t,Yt=b;et=n;var Le=a;switch(Yt.tag){case 1:if(Lt=Yt.payload,typeof Lt=="function"){gt=Lt.call(Le,gt,et);break t}gt=Lt;break t;case 3:Lt.flags=Lt.flags&-65537|128;case 0:if(Lt=Yt.payload,et=typeof Lt=="function"?Lt.call(Le,gt,et):Lt,et==null)break t;gt=y({},gt,et);break t;case 2:ha=!0}}et=b.callback,et!==null&&(t.flags|=64,st&&(t.flags|=8192),st=c.callbacks,st===null?c.callbacks=[et]:st.push(et))}else st={lane:et,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?($=ft=st,B=gt):ft=ft.next=st,_|=et;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;st=b,b=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);ft===null&&(B=gt),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),Sa|=_,t.lanes=_,t.memoizedState=gt}}function Xd(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function kd(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Xd(a[t],n)}var Hr=O(null),el=O(0);function Wd(t,n){t=Yi,Mt(el,t),Mt(Hr,n),Yi=t|n.baseLanes}function yu(){Mt(el,Yi),Mt(Hr,Hr.current)}function xu(){Yi=el.current,nt(Hr),nt(el)}var Vn=O(null),ni=null;function ma(t){var n=t.alternate;Mt(Ye,Ye.current&1),Mt(Vn,t),ni===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(ni=t)}function Mu(t){Mt(Ye,Ye.current),Mt(Vn,t),ni===null&&(ni=t)}function qd(t){t.tag===22?(Mt(Ye,Ye.current),Mt(Vn,t),ni===null&&(ni=t)):ga()}function ga(){Mt(Ye,Ye.current),Mt(Vn,Vn.current)}function Xn(t){nt(Vn),ni===t&&(ni=null),nt(Ye)}var Ye=O(0);function nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wf(a)||Df(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fi=0,se=null,De=null,Qe=null,il=!1,Gr=!1,rr=!1,al=0,Js=0,Vr=null,F0=0;function ke(){throw Error(r(321))}function Eu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Hn(t[a],n[a]))return!1;return!0}function Tu(t,n,a,s,c,f){return Fi=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?wp:Fu,rr=!1,f=a(s,c),rr=!1,Gr&&(f=jd(n,a,s,c)),Yd(t),f}function Yd(t){F.H=eo;var n=De!==null&&De.next!==null;if(Fi=0,Qe=De=se=null,il=!1,Js=0,Vr=null,n)throw Error(r(300));t===null||Je||(t=t.dependencies,t!==null&&jo(t)&&(Je=!0))}function jd(t,n,a,s){se=t;var c=0;do{if(Gr&&(Vr=null),Js=0,Gr=!1,25<=c)throw Error(r(301));if(c+=1,Qe=De=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=Dp,f=n(a,s)}while(Gr);return f}function H0(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?$s(n):n,t=t.useState()[0],(De!==null?De.memoizedState:null)!==t&&(se.flags|=1024),n}function bu(){var t=al!==0;return al=0,t}function Au(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ru(t){if(il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}il=!1}Fi=0,Qe=De=se=null,Gr=!1,Js=al=0,Vr=null}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?se.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function je(){if(De===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var n=Qe===null?se.memoizedState:Qe.next;if(n!==null)Qe=n,De=t;else{if(t===null)throw se.alternate===null?Error(r(467)):Error(r(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Qe===null?se.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function rl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $s(t){var n=Js;return Js+=1,Vr===null&&(Vr=[]),t=Id(Vr,t,n),n=se,(Qe===null?n.memoizedState:Qe.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?wp:Fu),t}function sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $s(t);if(t.$$typeof===D)return dn(t)}throw Error(r(438,String(t)))}function Cu(t){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=se.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=rl(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Hi(t,n){return typeof n=="function"?n(t):n}function ol(t){var n=je();return wu(n,De,t)}function wu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=_=null,B=null,$=n,ft=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(me&gt)===gt:(Fi&gt)===gt){var et=$.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===zr&&(ft=!0);else if((Fi&et)===et){$=$.next,et===zr&&(ft=!0);continue}else gt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=gt,_=f):B=B.next=gt,se.lanes|=et,Sa|=et;gt=$.action,rr&&a(f,gt),f=$.hasEagerState?$.eagerState:a(f,gt)}else et={lane:gt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(b=B=et,_=f):B=B.next=et,se.lanes|=gt,Sa|=gt;$=$.next}while($!==null&&$!==n);if(B===null?_=f:B.next=b,!Hn(f,t.memoizedState)&&(Je=!0,ft&&(a=Br,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Du(t){var n=je(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);Hn(f,n.memoizedState)||(Je=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Zd(t,n,a){var s=se,c=je(),f=ve;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Hn((De||c).memoizedState,a);if(_&&(c.memoizedState=a,Je=!0),c=c.queue,Nu(Jd.bind(null,s,c,t),[t]),c.getSnapshot!==n||_||Qe!==null&&Qe.memoizedState.tag&1){if(s.flags|=2048,Xr(9,{destroy:void 0},Qd.bind(null,s,c,a,n),null),Pe===null)throw Error(r(349));f||(Fi&127)!==0||Kd(s,n,a)}return a}function Kd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=rl(),se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Qd(t,n,a,s){n.value=a,n.getSnapshot=s,$d(n)&&tp(t)}function Jd(t,n,a){return a(function(){$d(n)&&tp(t)})}function $d(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Hn(t,a)}catch{return!0}}function tp(t){var n=Ka(t,2);n!==null&&zn(n,t,2)}function Uu(t){var n=Cn();if(typeof t=="function"){var a=t;if(t=a(),rr){Qt(!0);try{a()}finally{Qt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:t},n}function ep(t,n,a,s){return t.baseState=a,wu(t,De,typeof s=="function"?s:Hi)}function G0(t,n,a,s,c){if(ul(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};F.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,np(n,f)):(f.next=a.next,n.pending=a.next=f)}}function np(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=F.T,_={};F.T=_;try{var b=a(c,s),B=F.S;B!==null&&B(_,b),ip(t,n,b)}catch($){Lu(t,n,$)}finally{f!==null&&_.types!==null&&(f.types=_.types),F.T=f}}else try{f=a(c,s),ip(t,n,f)}catch($){Lu(t,n,$)}}function ip(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){ap(t,n,s)},function(s){return Lu(t,n,s)}):ap(t,n,a)}function ap(t,n,a){n.status="fulfilled",n.value=a,rp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,np(t,a)))}function Lu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,rp(n),n=n.next;while(n!==s)}t.action=null}function rp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function sp(t,n){return n}function op(t,n){if(ve){var a=Pe.formState;if(a!==null){t:{var s=se;if(ve){if(Be){e:{for(var c=Be,f=ei;c.nodeType!==8;){if(!f){c=null;break e}if(c=ii(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Be=ii(c.nextSibling),s=c.data==="F!";break t}}ua(s)}s=!1}s&&(n=a[0])}}return a=Cn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sp,lastRenderedState:n},a.queue=s,a=Ap.bind(null,se,s),s.dispatch=a,s=Uu(!1),f=Iu.bind(null,se,!1,s.queue),s=Cn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=G0.bind(null,se,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function lp(t){var n=je();return cp(n,De,t)}function cp(t,n,a){if(n=wu(t,n,sp)[0],t=ol(Hi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=$s(n)}catch(_){throw _===Ir?Qo:_}else s=n;n=je();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(se.flags|=2048,Xr(9,{destroy:void 0},V0.bind(null,c,a),null)),[s,f,t]}function V0(t,n){t.action=n}function up(t){var n=je(),a=De;if(a!==null)return cp(n,a,t);je(),n=n.memoizedState,a=je();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Xr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=se.updateQueue,n===null&&(n=rl(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function fp(){return je().memoizedState}function ll(t,n,a,s){var c=Cn();se.flags|=t,c.memoizedState=Xr(1|n,{destroy:void 0},a,s===void 0?null:s)}function cl(t,n,a,s){var c=je();s=s===void 0?null:s;var f=c.memoizedState.inst;De!==null&&s!==null&&Eu(s,De.memoizedState.deps)?c.memoizedState=Xr(n,f,a,s):(se.flags|=t,c.memoizedState=Xr(1|n,f,a,s))}function hp(t,n){ll(8390656,8,t,n)}function Nu(t,n){cl(2048,8,t,n)}function X0(t){se.flags|=4;var n=se.updateQueue;if(n===null)n=rl(),se.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function dp(t){var n=je().memoizedState;return X0({ref:n,nextImpl:t}),function(){if((Ae&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function pp(t,n){return cl(4,2,t,n)}function mp(t,n){return cl(4,4,t,n)}function gp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function _p(t,n,a){a=a!=null?a.concat([t]):null,cl(4,4,gp.bind(null,n,t),a)}function Ou(){}function vp(t,n){var a=je();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Eu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Sp(t,n){var a=je();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Eu(n,s[1]))return s[0];if(s=t(),rr){Qt(!0);try{t()}finally{Qt(!1)}}return a.memoizedState=[s,n],s}function Pu(t,n,a){return a===void 0||(Fi&1073741824)!==0&&(me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ym(),se.lanes|=t,Sa|=t,a)}function yp(t,n,a,s){return Hn(a,n)?a:Hr.current!==null?(t=Pu(t,a,s),Hn(t,n)||(Je=!0),t):(Fi&42)===0||(Fi&1073741824)!==0&&(me&261930)===0?(Je=!0,t.memoizedState=a):(t=ym(),se.lanes|=t,Sa|=t,n)}function xp(t,n,a,s,c){var f=j.p;j.p=f!==0&&8>f?f:8;var _=F.T,b={};F.T=b,Iu(t,!1,n,a);try{var B=c(),$=F.S;if($!==null&&$(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=I0(B,s);to(t,n,ft,qn(t))}else to(t,n,s,qn(t))}catch(gt){to(t,n,{then:function(){},status:"rejected",reason:gt},qn())}finally{j.p=f,_!==null&&b.types!==null&&(_.types=b.types),F.T=_}}function k0(){}function zu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Mp(t).queue;xp(t,c,n,X,a===null?k0:function(){return Ep(t),a(s)})}function Mp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ep(t){var n=Mp(t);n.next===null&&(n=t.alternate.memoizedState),to(t,n.next.queue,{},qn())}function Bu(){return dn(vo)}function Tp(){return je().memoizedState}function bp(){return je().memoizedState}function W0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();t=da(a);var s=pa(n,t,a);s!==null&&(zn(s,n,a),Zs(s,n,a)),n={cache:hu()},t.payload=n;return}n=n.return}}function q0(t,n,a){var s=qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ul(t)?Rp(n,a):(a=eu(t,n,a,s),a!==null&&(zn(a,t,s),Cp(a,n,s)))}function Ap(t,n,a){var s=qn();to(t,n,a,s)}function to(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ul(t))Rp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,b=f(_,a);if(c.hasEagerState=!0,c.eagerState=b,Hn(b,_))return ko(t,n,c,0),Pe===null&&Xo(),!1}catch{}if(a=eu(t,n,c,s),a!==null)return zn(a,t,s),Cp(a,n,s),!0}return!1}function Iu(t,n,a,s){if(s={lane:2,revertLane:_f(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},ul(t)){if(n)throw Error(r(479))}else n=eu(t,a,s,2),n!==null&&zn(n,t,2)}function ul(t){var n=t.alternate;return t===se||n!==null&&n===se}function Rp(t,n){Gr=il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Cp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,li(t,a)}}var eo={readContext:dn,use:sl,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke};eo.useEffectEvent=ke;var wp={readContext:dn,use:sl,useCallback:function(t,n){return Cn().memoizedState=[t,n===void 0?null:n],t},useContext:dn,useEffect:hp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ll(4194308,4,gp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ll(4194308,4,t,n)},useInsertionEffect:function(t,n){ll(4,2,t,n)},useMemo:function(t,n){var a=Cn();n=n===void 0?null:n;var s=t();if(rr){Qt(!0);try{t()}finally{Qt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Cn();if(a!==void 0){var c=a(n);if(rr){Qt(!0);try{a(n)}finally{Qt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=q0.bind(null,se,t),[s.memoizedState,t]},useRef:function(t){var n=Cn();return t={current:t},n.memoizedState=t},useState:function(t){t=Uu(t);var n=t.queue,a=Ap.bind(null,se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ou,useDeferredValue:function(t,n){var a=Cn();return Pu(a,t,n)},useTransition:function(){var t=Uu(!1);return t=xp.bind(null,se,t.queue,!0,!1),Cn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=se,c=Cn();if(ve){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Pe===null)throw Error(r(349));(me&127)!==0||Kd(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,hp(Jd.bind(null,s,f,t),[t]),s.flags|=2048,Xr(9,{destroy:void 0},Qd.bind(null,s,f,a,n),null),a},useId:function(){var t=Cn(),n=Pe.identifierPrefix;if(ve){var a=xi,s=yi;a=(s&~(1<<32-ae(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=al++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=F0++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Bu,useFormState:op,useActionState:op,useOptimistic:function(t){var n=Cn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Iu.bind(null,se,!0,a),a.dispatch=n,[t,n]},useMemoCache:Cu,useCacheRefresh:function(){return Cn().memoizedState=W0.bind(null,se)},useEffectEvent:function(t){var n=Cn(),a={impl:t};return n.memoizedState=a,function(){if((Ae&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Fu={readContext:dn,use:sl,useCallback:vp,useContext:dn,useEffect:Nu,useImperativeHandle:_p,useInsertionEffect:pp,useLayoutEffect:mp,useMemo:Sp,useReducer:ol,useRef:fp,useState:function(){return ol(Hi)},useDebugValue:Ou,useDeferredValue:function(t,n){var a=je();return yp(a,De.memoizedState,t,n)},useTransition:function(){var t=ol(Hi)[0],n=je().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:Zd,useId:Tp,useHostTransitionStatus:Bu,useFormState:lp,useActionState:lp,useOptimistic:function(t,n){var a=je();return ep(a,De,t,n)},useMemoCache:Cu,useCacheRefresh:bp};Fu.useEffectEvent=dp;var Dp={readContext:dn,use:sl,useCallback:vp,useContext:dn,useEffect:Nu,useImperativeHandle:_p,useInsertionEffect:pp,useLayoutEffect:mp,useMemo:Sp,useReducer:Du,useRef:fp,useState:function(){return Du(Hi)},useDebugValue:Ou,useDeferredValue:function(t,n){var a=je();return De===null?Pu(a,t,n):yp(a,De.memoizedState,t,n)},useTransition:function(){var t=Du(Hi)[0],n=je().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:Zd,useId:Tp,useHostTransitionStatus:Bu,useFormState:up,useActionState:up,useOptimistic:function(t,n){var a=je();return De!==null?ep(a,De,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Cu,useCacheRefresh:bp};Dp.useEffectEvent=dp;function Hu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:y({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Gu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=qn(),c=da(s);c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,s),n!==null&&(zn(n,t,s),Zs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=qn(),c=da(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,s),n!==null&&(zn(n,t,s),Zs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=qn(),s=da(a);s.tag=2,n!=null&&(s.callback=n),n=pa(t,s,a),n!==null&&(zn(n,t,a),Zs(n,t,a))}};function Up(t,n,a,s,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Gs(a,s)||!Gs(c,f):!0}function Lp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Gu.enqueueReplaceState(n,n.state,null)}function sr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=y({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Np(t){Vo(t)}function Op(t){console.error(t)}function Pp(t){Vo(t)}function fl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function zp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Vu(t,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){fl(t,n)},a}function Bp(t){return t=da(t),t.tag=3,t}function Ip(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){zp(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){zp(n,a,s),typeof c!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function Y0(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Pr(n,a,c,!0),a=Vn.current,a!==null){switch(a.tag){case 31:case 13:return ni===null?El():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===Jo?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),pf(t,s,c)),!1;case 22:return a.flags|=65536,s===Jo?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),pf(t,s,c)),!1}throw Error(r(435,a.tag))}return pf(t,s,c),El(),!1}if(ve)return n=Vn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==ou&&(t=Error(r(422),{cause:s}),ks(Jn(t,a)))):(s!==ou&&(n=Error(r(423),{cause:s}),ks(Jn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Jn(s,a),c=Vu(t.stateNode,s,c),vu(t,c),We!==4&&(We=2)),!1;var f=Error(r(520),{cause:s});if(f=Jn(f,a),co===null?co=[f]:co.push(f),We!==4&&(We=2),n===null)return!0;s=Jn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Vu(a.stateNode,s,t),vu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ya===null||!ya.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Bp(c),Ip(c,t,a,s),vu(a,c),!1}a=a.return}while(a!==null);return!1}var Xu=Error(r(461)),Je=!1;function pn(t,n,a,s){n.child=t===null?Vd(n,null,a,s):ar(n,t.child,a,s)}function Fp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var b in s)b!=="ref"&&(_[b]=s[b])}else _=s;return tr(n),s=Tu(t,n,a,_,f,c),b=bu(),t!==null&&!Je?(Au(t,n,c),Gi(t,n,c)):(ve&&b&&ru(n),n.flags|=1,pn(t,n,s,c),n.child)}function Hp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!nu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Gp(t,n,f,s,c)):(t=qo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Qu(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Gs,a(_,s)&&t.ref===n.ref)return Gi(t,n,c)}return n.flags|=1,t=Pi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Gp(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Gs(f,s)&&t.ref===n.ref)if(Je=!1,n.pendingProps=s=f,Qu(t,c))(t.flags&131072)!==0&&(Je=!0);else return n.lanes=t.lanes,Gi(t,n,c)}return ku(t,n,a,s,c)}function Vp(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Xp(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ko(n,f!==null?f.cachePool:null),f!==null?Wd(n,f):yu(),qd(n);else return s=n.lanes=536870912,Xp(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Ko(n,f.cachePool),Wd(n,f),ga(),n.memoizedState=null):(t!==null&&Ko(n,null),yu(),ga());return pn(t,n,c,a),n.child}function no(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Xp(t,n,a,s,c){var f=pu();return f=f===null?null:{parent:Ke._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ko(n,null),yu(),qd(n),t!==null&&Pr(t,n,s,!0),n.childLanes=c,null}function hl(t,n){return n=pl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function kp(t,n,a){return ar(n,t.child,null,a),t=hl(n,n.pendingProps),t.flags|=2,Xn(n),n.memoizedState=null,t}function j0(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(s.mode==="hidden")return t=hl(n,s),n.lanes=536870912,no(null,t);if(Mu(n),(t=Be)?(t=ng(t,ei),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:yi,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},a=Rd(t),a.return=n,n.child=a,hn=n,Be=null)):t=null,t===null)throw ua(n);return n.lanes=536870912,null}return hl(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Mu(n),c)if(n.flags&256)n.flags&=-257,n=kp(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Je||Pr(t,n,a,!1),c=(a&t.childLanes)!==0,Je||c){if(s=Pe,s!==null&&(_=Zn(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ka(t,_),zn(s,t,_),Xu;El(),n=kp(t,n,a)}else t=f.treeContext,Be=ii(_.nextSibling),hn=n,ve=!0,ca=null,ei=!1,t!==null&&Dd(n,t),n=hl(n,s),n.flags|=4096;return n}return t=Pi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ku(t,n,a,s,c){return tr(n),a=Tu(t,n,a,s,void 0,c),s=bu(),t!==null&&!Je?(Au(t,n,c),Gi(t,n,c)):(ve&&s&&ru(n),n.flags|=1,pn(t,n,a,c),n.child)}function Wp(t,n,a,s,c,f){return tr(n),n.updateQueue=null,a=jd(n,s,a,c),Yd(t),s=bu(),t!==null&&!Je?(Au(t,n,f),Gi(t,n,f)):(ve&&s&&ru(n),n.flags|=1,pn(t,n,a,f),n.child)}function qp(t,n,a,s,c){if(tr(n),n.stateNode===null){var f=Ur,_=a.contextType;typeof _=="object"&&_!==null&&(f=dn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},gu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?dn(_):Ur,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Hu(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Gu.enqueueReplaceState(f,f.state,null),Qs(n,s,f,c),Ks(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,B=sr(a,b);f.props=B;var $=f.context,ft=a.contextType;_=Ur,typeof ft=="object"&&ft!==null&&(_=dn(ft));var gt=a.getDerivedStateFromProps;ft=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==_)&&Lp(n,f,s,_),ha=!1;var et=n.memoizedState;f.state=et,Qs(n,s,f,c),Ks(),$=n.memoizedState,b||et!==$||ha?(typeof gt=="function"&&(Hu(n,a,gt,s),$=n.memoizedState),(B=ha||Up(n,a,B,s,et,$,_))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=_,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,_u(t,n),_=n.memoizedProps,ft=sr(a,_),f.props=ft,gt=n.pendingProps,et=f.context,$=a.contextType,B=Ur,typeof $=="object"&&$!==null&&(B=dn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==gt||et!==B)&&Lp(n,f,s,B),ha=!1,et=n.memoizedState,f.state=et,Qs(n,s,f,c),Ks();var st=n.memoizedState;_!==gt||et!==st||ha||t!==null&&t.dependencies!==null&&jo(t.dependencies)?(typeof b=="function"&&(Hu(n,a,b,s),st=n.memoizedState),(ft=ha||Up(n,a,ft,s,et,st,B)||t!==null&&t.dependencies!==null&&jo(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,st,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,st,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=st),f.props=s,f.state=st,f.context=B,s=ft):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,dl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=ar(n,t.child,null,c),n.child=ar(n,null,a,c)):pn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Gi(t,n,c),t}function Yp(t,n,a,s){return Ja(),n.flags|=256,pn(t,n,a,s),n.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(t){return{baseLanes:t,cachePool:zd()}}function Yu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Wn),t}function jp(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Ye.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(c?ma(n):ga(),(t=Be)?(t=ng(t,ei),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:yi,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},a=Rd(t),a.return=n,n.child=a,hn=n,Be=null)):t=null,t===null)throw ua(n);return Df(t)?n.lanes=32:n.lanes=536870912,null}var b=s.children;return s=s.fallback,c?(ga(),c=n.mode,b=pl({mode:"hidden",children:b},c),s=Qa(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,s=n.child,s.memoizedState=qu(a),s.childLanes=Yu(t,_,a),n.memoizedState=Wu,no(null,s)):(ma(n),ju(n,b))}var B=t.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=Zu(t,n,a)):n.memoizedState!==null?(ga(),n.child=t.child,n.flags|=128,n=null):(ga(),b=s.fallback,c=n.mode,s=pl({mode:"visible",children:s.children},c),b=Qa(b,c,a,null),b.flags|=2,s.return=n,b.return=n,s.sibling=b,n.child=s,ar(n,t.child,null,a),s=n.child,s.memoizedState=qu(a),s.childLanes=Yu(t,_,a),n.memoizedState=Wu,n=no(null,s));else if(ma(n),Df(b)){if(_=b.nextSibling&&b.nextSibling.dataset,_)var $=_.dgst;_=$,s=Error(r(419)),s.stack="",s.digest=_,ks({value:s,source:null,stack:null}),n=Zu(t,n,a)}else if(Je||Pr(t,n,a,!1),_=(a&t.childLanes)!==0,Je||_){if(_=Pe,_!==null&&(s=Zn(_,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,Ka(t,s),zn(_,t,s),Xu;wf(b)||El(),n=Zu(t,n,a)}else wf(b)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Be=ii(b.nextSibling),hn=n,ve=!0,ca=null,ei=!1,t!==null&&Dd(n,t),n=ju(n,s.children),n.flags|=4096);return n}return c?(ga(),b=s.fallback,c=n.mode,B=t.child,$=B.sibling,s=Pi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,$!==null?b=Pi($,b):(b=Qa(b,c,a,null),b.flags|=2),b.return=n,s.return=n,s.sibling=b,n.child=s,no(null,s),s=n.child,b=t.child.memoizedState,b===null?b=qu(a):(c=b.cachePool,c!==null?(B=Ke._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=zd(),b={baseLanes:b.baseLanes|a,cachePool:c}),s.memoizedState=b,s.childLanes=Yu(t,_,a),n.memoizedState=Wu,no(t.child,s)):(ma(n),a=t.child,t=a.sibling,a=Pi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function ju(t,n){return n=pl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function pl(t,n){return t=Gn(22,t,null,n),t.lanes=0,t}function Zu(t,n,a){return ar(n,t.child,null,a),t=ju(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Zp(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),uu(t.return,n,a)}function Ku(t,n,a,s,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Kp(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var _=Ye.current,b=(_&2)!==0;if(b?(_=_&1|2,n.flags|=128):_&=1,Mt(Ye,_),pn(t,n,s,a),s=ve?Xs:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zp(t,a,n);else if(t.tag===19)Zp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&nl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ku(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&nl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Ku(n,!0,a,null,f,s);break;case"together":Ku(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Gi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Sa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Pr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Pi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Pi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Qu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&jo(t)))}function Z0(t,n,a){switch(n.tag){case 3:Wt(n,n.stateNode.containerInfo),fa(n,Ke,t.memoizedState.cache),Ja();break;case 27:case 5:Z(n);break;case 4:Wt(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?jp(t,n,a):(ma(n),t=Gi(t,n,a),t!==null?t.sibling:null);ma(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Pr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Kp(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Mt(Ye,Ye.current),s)break;return null;case 22:return n.lanes=0,Vp(t,n,a,n.pendingProps);case 24:fa(n,Ke,t.memoizedState.cache)}return Gi(t,n,a)}function Qp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Je=!0;else{if(!Qu(t,a)&&(n.flags&128)===0)return Je=!1,Z0(t,n,a);Je=(t.flags&131072)!==0}else Je=!1,ve&&(n.flags&1048576)!==0&&wd(n,Xs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=nr(n.elementType),n.type=t,typeof t=="function")nu(t)?(s=sr(t,s),n.tag=1,n=qp(null,n,t,s,a)):(n.tag=0,n=ku(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===P){n.tag=11,n=Fp(null,n,t,s,a);break t}else if(c===N){n.tag=14,n=Hp(null,n,t,s,a);break t}}throw n=pt(t)||t,Error(r(306,n,""))}}return n;case 0:return ku(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=sr(s,n.pendingProps),qp(t,n,s,c,a);case 3:t:{if(Wt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,_u(t,n),Qs(n,s,null,a);var _=n.memoizedState;if(s=_.cache,fa(n,Ke,s),s!==f.cache&&fu(n,[Ke],a,!0),Ks(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Yp(t,n,s,a);break t}else if(s!==c){c=Jn(Error(r(424)),n),ks(c),n=Yp(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Be=ii(t.firstChild),hn=n,ve=!0,ca=null,ei=!0,a=Vd(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ja(),s===c){n=Gi(t,n,a);break t}pn(t,n,s,a)}n=n.child}return n;case 26:return dl(t,n),t===null?(a=lg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(a=n.type,t=n.pendingProps,s=Dl(Et.current).createElement(a),s[en]=n,s[_n]=t,mn(s,a,t),Ft(s),n.stateNode=s):n.memoizedState=lg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Z(n),t===null&&ve&&(s=n.stateNode=rg(n.type,n.pendingProps,Et.current),hn=n,ei=!0,c=Be,Ta(n.type)?(Uf=c,Be=ii(s.firstChild)):Be=c),pn(t,n,n.pendingProps.children,a),dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((c=s=Be)&&(s=bS(s,n.type,n.pendingProps,ei),s!==null?(n.stateNode=s,hn=n,Be=ii(s.firstChild),ei=!1,c=!0):c=!1),c||ua(n)),Z(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,Af(c,f)?s=null:_!==null&&Af(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Tu(t,n,H0,null,null,a),vo._currentValue=c),dl(t,n),pn(t,n,s,a),n.child;case 6:return t===null&&ve&&((t=a=Be)&&(a=AS(a,n.pendingProps,ei),a!==null?(n.stateNode=a,hn=n,Be=null,t=!0):t=!1),t||ua(n)),null;case 13:return jp(t,n,a);case 4:return Wt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=ar(n,null,s,a):pn(t,n,s,a),n.child;case 11:return Fp(t,n,n.type,n.pendingProps,a);case 7:return pn(t,n,n.pendingProps,a),n.child;case 8:return pn(t,n,n.pendingProps.children,a),n.child;case 12:return pn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),pn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,tr(n),c=dn(c),s=s(c),n.flags|=1,pn(t,n,s,a),n.child;case 14:return Hp(t,n,n.type,n.pendingProps,a);case 15:return Gp(t,n,n.type,n.pendingProps,a);case 19:return Kp(t,n,a);case 31:return j0(t,n,a);case 22:return Vp(t,n,a,n.pendingProps);case 24:return tr(n),s=dn(Ke),t===null?(c=pu(),c===null&&(c=Pe,f=hu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},gu(n),fa(n,Ke,c)):((t.lanes&a)!==0&&(_u(t,n),Qs(n,null,null,a),Ks()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,Ke,s)):(s=f.cache,fa(n,Ke,s),s!==c.cache&&fu(n,[Ke],a,!0))),pn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Vi(t){t.flags|=4}function Ju(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Tm())t.flags|=8192;else throw ir=Jo,mu}else t.flags&=-16777217}function Jp(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!dg(n))if(Tm())t.flags|=8192;else throw ir=Jo,mu}function ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?_e():536870912,t.lanes|=n,Yr|=n)}function io(t,n){if(!ve)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ie(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function K0(t,n,a){var s=n.pendingProps;switch(su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(n),null;case 1:return Ie(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ii(Ke),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Or(n)?Vi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lu())),Ie(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Vi(n),f!==null?(Ie(n),Jp(n,f)):(Ie(n),Ju(n,c,null,s,a))):f?f!==t.memoizedState?(Vi(n),Ie(n),Jp(n,f)):(Ie(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Vi(n),Ie(n),Ju(n,c,t,s,a)),null;case 27:if(Se(n),a=Et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ie(n),null}t=V.current,Or(n)?Ud(n):(t=rg(c,s,a),n.stateNode=t,Vi(n))}return Ie(n),null;case 5:if(Se(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ie(n),null}if(f=V.current,Or(n))Ud(n);else{var _=Dl(Et.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}f[en]=n,f[_n]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(mn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Vi(n)}}return Ie(n),Ju(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Et.current,Or(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=hn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[en]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||jm(t.nodeValue,a)),t||ua(n,!0)}else t=Dl(t).createTextNode(s),t[en]=n,n.stateNode=t}return Ie(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Or(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[en]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),t=!1}else a=lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Xn(n),n):(Xn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ie(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Or(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[en]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),c=!1}else c=lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Xn(n),n):(Xn(n),null)}return Xn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),ml(n,n.updateQueue),Ie(n),null);case 4:return zt(),t===null&&xf(n.stateNode.containerInfo),Ie(n),null;case 10:return Ii(n.type),Ie(n),null;case 19:if(nt(Ye),s=n.memoizedState,s===null)return Ie(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)io(s,!1);else{if(We!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=nl(t),f!==null){for(n.flags|=128,io(s,!1),t=f.updateQueue,n.updateQueue=t,ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ad(a,t),a=a.sibling;return Mt(Ye,Ye.current&1|2),ve&&zi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&St()>yl&&(n.flags|=128,c=!0,io(s,!1),n.lanes=4194304)}else{if(!c)if(t=nl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,ml(n,t),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ve)return Ie(n),null}else 2*St()-s.renderingStartTime>yl&&a!==536870912&&(n.flags|=128,c=!0,io(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=St(),t.sibling=null,a=Ye.current,Mt(Ye,c?a&1|2:a&1),ve&&zi(n,s.treeForkCount),t):(Ie(n),null);case 22:case 23:return Xn(n),xu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ie(n),n.subtreeFlags&6&&(n.flags|=8192)):Ie(n),a=n.updateQueue,a!==null&&ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&nt(er),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(Ke),Ie(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Q0(t,n){switch(su(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ii(Ke),zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Se(n),null;case 31:if(n.memoizedState!==null){if(Xn(n),n.alternate===null)throw Error(r(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Xn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(Ye),null;case 4:return zt(),null;case 10:return Ii(n.type),null;case 22:case 23:return Xn(n),xu(),t!==null&&nt(er),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ii(Ke),null;case 25:return null;default:return null}}function $p(t,n){switch(su(n),n.tag){case 3:Ii(Ke),zt();break;case 26:case 27:case 5:Se(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&Xn(n);break;case 13:Xn(n);break;case 19:nt(Ye);break;case 10:Ii(n.type);break;case 22:case 23:Xn(n),xu(),t!==null&&nt(er);break;case 24:Ii(Ke)}}function ao(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==c)}}catch(b){we(n,n.return,b)}}function _a(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var _=s.inst,b=_.destroy;if(b!==void 0){_.destroy=void 0,c=n;var B=a,$=b;try{$()}catch(ft){we(c,B,ft)}}}s=s.next}while(s!==f)}}catch(ft){we(n,n.return,ft)}}function tm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{kd(n,a)}catch(s){we(t,t.return,s)}}}function em(t,n,a){a.props=sr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){we(t,n,s)}}function ro(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){we(t,n,c)}}function Mi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){we(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){we(t,n,c)}else a.current=null}function nm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){we(t,t.return,c)}}function $u(t,n,a){try{var s=t.stateNode;SS(s,t.type,a,n),s[_n]=n}catch(c){we(t,t.return,c)}}function im(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ta(t.type)||t.tag===4}function tf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||im(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ta(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ef(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ni));else if(s!==4&&(s===27&&Ta(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ef(t,n,a),t=t.sibling;t!==null;)ef(t,n,a),t=t.sibling}function gl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ta(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(gl(t,n,a),t=t.sibling;t!==null;)gl(t,n,a),t=t.sibling}function am(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);mn(n,s,a),n[en]=t,n[_n]=a}catch(f){we(t,t.return,f)}}var Xi=!1,$e=!1,nf=!1,rm=typeof WeakSet=="function"?WeakSet:Set,cn=null;function J0(t,n){if(t=t.containerInfo,Tf=Bl,t=_d(t),Zc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,b=-1,B=-1,$=0,ft=0,gt=t,et=null;e:for(;;){for(var st;gt!==a||c!==0&&gt.nodeType!==3||(b=_+c),gt!==f||s!==0&&gt.nodeType!==3||(B=_+s),gt.nodeType===3&&(_+=gt.nodeValue.length),(st=gt.firstChild)!==null;)et=gt,gt=st;for(;;){if(gt===t)break e;if(et===a&&++$===c&&(b=_),et===f&&++ft===s&&(B=_),(st=gt.nextSibling)!==null)break;gt=et,et=gt.parentNode}gt=st}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(bf={focusedElem:t,selectionRange:a},Bl=!1,cn=n;cn!==null;)if(n=cn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,cn=t;else for(;cn!==null;){switch(n=cn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Lt=sr(a.type,c);t=s.getSnapshotBeforeUpdate(Lt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Yt){we(a,a.return,Yt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Cf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Cf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,cn=t;break}cn=n.return}}function sm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(t,a),s&4&&ao(5,a);break;case 1:if(Wi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){we(a,a.return,_)}else{var c=sr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){we(a,a.return,_)}}s&64&&tm(a),s&512&&ro(a,a.return);break;case 3:if(Wi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{kd(t,n)}catch(_){we(a,a.return,_)}}break;case 27:n===null&&s&4&&am(a);case 26:case 5:Wi(t,a),n===null&&s&4&&nm(a),s&512&&ro(a,a.return);break;case 12:Wi(t,a);break;case 31:Wi(t,a),s&4&&cm(t,a);break;case 13:Wi(t,a),s&4&&um(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=oS.bind(null,a),RS(t,a))));break;case 22:if(s=a.memoizedState!==null||Xi,!s){n=n!==null&&n.memoizedState!==null||$e,c=Xi;var f=$e;Xi=s,($e=n)&&!f?qi(t,a,(a.subtreeFlags&8772)!==0):Wi(t,a),Xi=c,$e=f}break;case 30:break;default:Wi(t,a)}}function om(t){var n=t.alternate;n!==null&&(t.alternate=null,om(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ot(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ge=null,Ln=!1;function ki(t,n,a){for(a=a.child;a!==null;)lm(t,n,a),a=a.sibling}function lm(t,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Ut,a)}catch{}switch(a.tag){case 26:$e||Mi(a,n),ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Mi(a,n);var s=Ge,c=Ln;Ta(a.type)&&(Ge=a.stateNode,Ln=!1),ki(t,n,a),mo(a.stateNode),Ge=s,Ln=c;break;case 5:$e||Mi(a,n);case 6:if(s=Ge,c=Ln,Ge=null,ki(t,n,a),Ge=s,Ln=c,Ge!==null)if(Ln)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(a.stateNode)}catch(f){we(a,n,f)}else try{Ge.removeChild(a.stateNode)}catch(f){we(a,n,f)}break;case 18:Ge!==null&&(Ln?(t=Ge,tg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),es(t)):tg(Ge,a.stateNode));break;case 4:s=Ge,c=Ln,Ge=a.stateNode.containerInfo,Ln=!0,ki(t,n,a),Ge=s,Ln=c;break;case 0:case 11:case 14:case 15:_a(2,a,n),$e||_a(4,a,n),ki(t,n,a);break;case 1:$e||(Mi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&em(a,n,s)),ki(t,n,a);break;case 21:ki(t,n,a);break;case 22:$e=(s=$e)||a.memoizedState!==null,ki(t,n,a),$e=s;break;default:ki(t,n,a)}}function cm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{es(t)}catch(a){we(n,n.return,a)}}}function um(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{es(t)}catch(a){we(n,n.return,a)}}function $0(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new rm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new rm),n;default:throw Error(r(435,t.tag))}}function _l(t,n){var a=$0(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=lS.bind(null,t,s);s.then(c,c)}})}function Nn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,_=n,b=_;t:for(;b!==null;){switch(b.tag){case 27:if(Ta(b.type)){Ge=b.stateNode,Ln=!1;break t}break;case 5:Ge=b.stateNode,Ln=!1;break t;case 3:case 4:Ge=b.stateNode.containerInfo,Ln=!0;break t}b=b.return}if(Ge===null)throw Error(r(160));lm(f,_,c),Ge=null,Ln=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)fm(n,t),n=n.sibling}var ui=null;function fm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nn(n,t),On(t),s&4&&(_a(3,t,t.return),ao(3,t),_a(5,t,t.return));break;case 1:Nn(n,t),On(t),s&512&&($e||a===null||Mi(a,a.return)),s&64&&Xi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=ui;if(Nn(n,t),On(t),s&512&&($e||a===null||Mi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Rt]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),mn(f,s,a),f[en]=t,Ft(f),s=f;break t;case"link":var _=fg("link","href",c).get(s+(a.href||""));if(_){for(var b=0;b<_.length;b++)if(f=_[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(b,1);break e}}f=c.createElement(s),mn(f,s,a),c.head.appendChild(f);break;case"meta":if(_=fg("meta","content",c).get(s+(a.content||""))){for(b=0;b<_.length;b++)if(f=_[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(b,1);break e}}f=c.createElement(s),mn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[en]=t,Ft(f),s=f}t.stateNode=s}else hg(c,t.type,t.stateNode);else t.stateNode=ug(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?hg(c,t.type,t.stateNode):ug(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&$u(t,t.memoizedProps,a.memoizedProps)}break;case 27:Nn(n,t),On(t),s&512&&($e||a===null||Mi(a,a.return)),a!==null&&s&4&&$u(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Nn(n,t),On(t),s&512&&($e||a===null||Mi(a,a.return)),t.flags&32){c=t.stateNode;try{Tr(c,"")}catch(Lt){we(t,t.return,Lt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,$u(t,c,a!==null?a.memoizedProps:c)),s&1024&&(nf=!0);break;case 6:if(Nn(n,t),On(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Lt){we(t,t.return,Lt)}}break;case 3:if(Nl=null,c=ui,ui=Ul(n.containerInfo),Nn(n,t),ui=c,On(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{es(n.containerInfo)}catch(Lt){we(t,t.return,Lt)}nf&&(nf=!1,hm(t));break;case 4:s=ui,ui=Ul(t.stateNode.containerInfo),Nn(n,t),On(t),ui=s;break;case 12:Nn(n,t),On(t);break;case 31:Nn(n,t),On(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,_l(t,s)));break;case 13:Nn(n,t),On(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Sl=St()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,_l(t,s)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=Xi,ft=$e;if(Xi=$||c,$e=ft||B,Nn(n,t),$e=ft,Xi=$,On(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Xi||$e||or(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{b=B.stateNode;var gt=B.memoizedProps.style,et=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Lt){we(B,B.return,Lt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Lt){we(B,B.return,Lt)}}}else if(n.tag===18){if(a===null){B=n;try{var st=B.stateNode;c?eg(st,!0):eg(B.stateNode,!1)}catch(Lt){we(B,B.return,Lt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,_l(t,a))));break;case 19:Nn(n,t),On(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,_l(t,s)));break;case 30:break;case 21:break;default:Nn(n,t),On(t)}}function On(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(im(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=tf(t);gl(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Tr(_,""),a.flags&=-33);var b=tf(t);gl(t,b,_);break;case 3:case 4:var B=a.stateNode.containerInfo,$=tf(t);ef(t,$,B);break;default:throw Error(r(161))}}catch(ft){we(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function hm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;hm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Wi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)sm(t,n.alternate,n),n=n.sibling}function or(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),or(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&em(n,n.return,a),or(n);break;case 27:mo(n.stateNode);case 26:case 5:Mi(n,n.return),or(n);break;case 22:n.memoizedState===null&&or(n);break;case 30:or(n);break;default:or(n)}t=t.sibling}}function qi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:qi(c,f,a),ao(4,f);break;case 1:if(qi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){we(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Xd(B[c],b)}catch($){we(s,s.return,$)}}a&&_&64&&tm(f),ro(f,f.return);break;case 27:am(f);case 26:case 5:qi(c,f,a),a&&s===null&&_&4&&nm(f),ro(f,f.return);break;case 12:qi(c,f,a);break;case 31:qi(c,f,a),a&&_&4&&cm(c,f);break;case 13:qi(c,f,a),a&&_&4&&um(c,f);break;case 22:f.memoizedState===null&&qi(c,f,a),ro(f,f.return);break;case 30:break;default:qi(c,f,a)}n=n.sibling}}function af(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ws(a))}function rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t))}function fi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)dm(t,n,a,s),n=n.sibling}function dm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:fi(t,n,a,s),c&2048&&ao(9,n);break;case 1:fi(t,n,a,s);break;case 3:fi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t)));break;case 12:if(c&2048){fi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,b=f.onPostCommit;typeof b=="function"&&b(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){we(n,n.return,B)}}else fi(t,n,a,s);break;case 31:fi(t,n,a,s);break;case 13:fi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?fi(t,n,a,s):so(t,n):f._visibility&2?fi(t,n,a,s):(f._visibility|=2,kr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&af(_,n);break;case 24:fi(t,n,a,s),c&2048&&rf(n.alternate,n);break;default:fi(t,n,a,s)}}function kr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,b=a,B=s,$=_.flags;switch(_.tag){case 0:case 11:case 15:kr(f,_,b,B,c),ao(8,_);break;case 23:break;case 22:var ft=_.stateNode;_.memoizedState!==null?ft._visibility&2?kr(f,_,b,B,c):so(f,_):(ft._visibility|=2,kr(f,_,b,B,c)),c&&$&2048&&af(_.alternate,_);break;case 24:kr(f,_,b,B,c),c&&$&2048&&rf(_.alternate,_);break;default:kr(f,_,b,B,c)}n=n.sibling}}function so(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:so(a,s),c&2048&&af(s.alternate,s);break;case 24:so(a,s),c&2048&&rf(s.alternate,s);break;default:so(a,s)}n=n.sibling}}var oo=8192;function Wr(t,n,a){if(t.subtreeFlags&oo)for(t=t.child;t!==null;)pm(t,n,a),t=t.sibling}function pm(t,n,a){switch(t.tag){case 26:Wr(t,n,a),t.flags&oo&&t.memoizedState!==null&&FS(a,ui,t.memoizedState,t.memoizedProps);break;case 5:Wr(t,n,a);break;case 3:case 4:var s=ui;ui=Ul(t.stateNode.containerInfo),Wr(t,n,a),ui=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=oo,oo=16777216,Wr(t,n,a),oo=s):Wr(t,n,a));break;default:Wr(t,n,a)}}function mm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];cn=s,_m(s,t)}mm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gm(t),t=t.sibling}function gm(t){switch(t.tag){case 0:case 11:case 15:lo(t),t.flags&2048&&_a(9,t,t.return);break;case 3:lo(t);break;case 12:lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,vl(t)):lo(t);break;default:lo(t)}}function vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];cn=s,_m(s,t)}mm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_a(8,n,n.return),vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,vl(n));break;default:vl(n)}t=t.sibling}}function _m(t,n){for(;cn!==null;){var a=cn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,cn=s;else t:for(a=t;cn!==null;){s=cn;var c=s.sibling,f=s.return;if(om(s),s===a){cn=null;break t}if(c!==null){c.return=f,cn=c;break t}cn=f}}}var tS={getCacheForType:function(t){var n=dn(Ke),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return dn(Ke).controller.signal}},eS=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Pe=null,de=null,me=0,Ce=0,kn=null,va=!1,qr=!1,sf=!1,Yi=0,We=0,Sa=0,lr=0,of=0,Wn=0,Yr=0,co=null,Pn=null,lf=!1,Sl=0,vm=0,yl=1/0,xl=null,ya=null,rn=0,xa=null,jr=null,ji=0,cf=0,uf=null,Sm=null,uo=0,ff=null;function qn(){return(Ae&2)!==0&&me!==0?me&-me:F.T!==null?_f():Ls()}function ym(){if(Wn===0)if((me&536870912)===0||ve){var t=xt;xt<<=1,(xt&3932160)===0&&(xt=262144),Wn=t}else Wn=536870912;return t=Vn.current,t!==null&&(t.flags|=32),Wn}function zn(t,n,a){(t===Pe&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)&&(Zr(t,0),Ma(t,me,Wn,!1)),be(t,a),((Ae&2)===0||t!==Pe)&&(t===Pe&&((Ae&2)===0&&(lr|=a),We===4&&Ma(t,me,Wn,!1)),Ei(t))}function xm(t,n,a){if((Ae&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Re(t,n),c=s?aS(t,n):df(t,n,!0),f=s;do{if(c===0){qr&&!s&&Ma(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!nS(a)){c=df(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var b=t;c=co;var B=b.current.memoizedState.isDehydrated;if(B&&(Zr(b,_).flags|=256),_=df(b,_,!1),_!==2){if(sf&&!B){b.errorRecoveryDisabledLanes|=f,lr|=f,c=4;break t}f=Pn,Pn=c,f!==null&&(Pn===null?Pn=f:Pn.push.apply(Pn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){Zr(t,0),Ma(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ma(s,n,Wn,!va);break t;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Sl+300-St(),10<c)){if(Ma(s,n,Wn,!va),ie(s,0,!0)!==0)break t;ji=n,s.timeoutHandle=Jm(Mm.bind(null,s,a,Pn,xl,lf,n,Wn,lr,Yr,va,f,"Throttled",-0,0),c);break t}Mm(s,a,Pn,xl,lf,n,Wn,lr,Yr,va,f,null,-0,0)}}break}while(!0);Ei(t)}function Mm(t,n,a,s,c,f,_,b,B,$,ft,gt,et,st){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ni},pm(n,f,gt);var Lt=(f&62914560)===f?Sl-St():(f&4194048)===f?vm-St():0;if(Lt=HS(gt,Lt),Lt!==null){ji=f,t.cancelPendingCommit=Lt(Dm.bind(null,t,n,f,a,s,c,_,b,B,ft,gt,null,et,st)),Ma(t,f,_,!$);return}}Dm(t,n,f,a,s,c,_,b,B)}function nS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Hn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(t,n,a,s){n&=~of,n&=~lr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-ae(c),_=1<<f;s[f]=-1,c&=~_}a!==0&&Tn(t,a,n)}function Ml(){return(Ae&6)===0?(fo(0),!1):!0}function hf(){if(de!==null){if(Ce===0)var t=de.return;else t=de,Bi=$a=null,Ru(t),Fr=null,Ys=0,t=de;for(;t!==null;)$p(t.alternate,t),t=t.return;de=null}}function Zr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,MS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ji=0,hf(),Pe=t,de=a=Pi(t.current,null),me=n,Ce=0,kn=null,va=!1,qr=Re(t,n),sf=!1,Yr=Wn=of=lr=Sa=We=0,Pn=co=null,lf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-ae(s),f=1<<c;n|=t[c],s&=~f}return Yi=n,Xo(),a}function Em(t,n){se=null,F.H=eo,n===Ir||n===Qo?(n=Fd(),Ce=3):n===mu?(n=Fd(),Ce=4):Ce=n===Xu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,de===null&&(We=1,fl(t,Jn(n,t.current)))}function Tm(){var t=Vn.current;return t===null?!0:(me&4194048)===me?ni===null:(me&62914560)===me||(me&536870912)!==0?t===ni:!1}function bm(){var t=F.H;return F.H=eo,t===null?eo:t}function Am(){var t=F.A;return F.A=tS,t}function El(){We=4,va||(me&4194048)!==me&&Vn.current!==null||(qr=!0),(Sa&134217727)===0&&(lr&134217727)===0||Pe===null||Ma(Pe,me,Wn,!1)}function df(t,n,a){var s=Ae;Ae|=2;var c=bm(),f=Am();(Pe!==t||me!==n)&&(xl=null,Zr(t,n)),n=!1;var _=We;t:do try{if(Ce!==0&&de!==null){var b=de,B=kn;switch(Ce){case 8:hf(),_=6;break t;case 3:case 2:case 9:case 6:Vn.current===null&&(n=!0);var $=Ce;if(Ce=0,kn=null,Kr(t,b,B,$),a&&qr){_=0;break t}break;default:$=Ce,Ce=0,kn=null,Kr(t,b,B,$)}}iS(),_=We;break}catch(ft){Em(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Bi=$a=null,Ae=s,F.H=c,F.A=f,de===null&&(Pe=null,me=0,Xo()),_}function iS(){for(;de!==null;)Rm(de)}function aS(t,n){var a=Ae;Ae|=2;var s=bm(),c=Am();Pe!==t||me!==n?(xl=null,yl=St()+500,Zr(t,n)):qr=Re(t,n);t:do try{if(Ce!==0&&de!==null){n=de;var f=kn;e:switch(Ce){case 1:Ce=0,kn=null,Kr(t,n,f,1);break;case 2:case 9:if(Bd(f)){Ce=0,kn=null,Cm(n);break}n=function(){Ce!==2&&Ce!==9||Pe!==t||(Ce=7),Ei(t)},f.then(n,n);break t;case 3:Ce=7;break t;case 4:Ce=5;break t;case 7:Bd(f)?(Ce=0,kn=null,Cm(n)):(Ce=0,kn=null,Kr(t,n,f,7));break;case 5:var _=null;switch(de.tag){case 26:_=de.memoizedState;case 5:case 27:var b=de;if(_?dg(_):b.stateNode.complete){Ce=0,kn=null;var B=b.sibling;if(B!==null)de=B;else{var $=b.return;$!==null?(de=$,Tl($)):de=null}break e}}Ce=0,kn=null,Kr(t,n,f,5);break;case 6:Ce=0,kn=null,Kr(t,n,f,6);break;case 8:hf(),We=6;break t;default:throw Error(r(462))}}rS();break}catch(ft){Em(t,ft)}while(!0);return Bi=$a=null,F.H=s,F.A=c,Ae=a,de!==null?0:(Pe=null,me=0,Xo(),We)}function rS(){for(;de!==null&&!vt();)Rm(de)}function Rm(t){var n=Qp(t.alternate,t,Yi);t.memoizedProps=t.pendingProps,n===null?Tl(t):de=n}function Cm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Wp(a,n,n.pendingProps,n.type,void 0,me);break;case 11:n=Wp(a,n,n.pendingProps,n.type.render,n.ref,me);break;case 5:Ru(n);default:$p(a,n),n=de=Ad(n,Yi),n=Qp(a,n,Yi)}t.memoizedProps=t.pendingProps,n===null?Tl(t):de=n}function Kr(t,n,a,s){Bi=$a=null,Ru(n),Fr=null,Ys=0;var c=n.return;try{if(Y0(t,c,n,a,me)){We=1,fl(t,Jn(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;We=1,fl(t,Jn(a,t.current)),de=null;return}n.flags&32768?(ve||s===1?t=!0:qr||(me&536870912)!==0?t=!1:(va=t=!0,(s===2||s===9||s===3||s===6)&&(s=Vn.current,s!==null&&s.tag===13&&(s.flags|=16384))),wm(n,t)):Tl(n)}function Tl(t){var n=t;do{if((n.flags&32768)!==0){wm(n,va);return}t=n.return;var a=K0(n.alternate,n,Yi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);We===0&&(We=5)}function wm(t,n){do{var a=Q0(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);We=6,de=null}function Dm(t,n,a,s,c,f,_,b,B){t.cancelPendingCommit=null;do bl();while(rn!==0);if((Ae&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=tu,_i(t,a,f,_,b,B),t===Pe&&(de=Pe=null,me=0),jr=n,xa=t,ji=a,cf=f,uf=c,Sm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,cS(Zt,function(){return Pm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=F.T,F.T=null,c=j.p,j.p=2,_=Ae,Ae|=4;try{J0(t,n,a)}finally{Ae=_,j.p=c,F.T=s}}rn=1,Um(),Lm(),Nm()}}function Um(){if(rn===1){rn=0;var t=xa,n=jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var s=j.p;j.p=2;var c=Ae;Ae|=4;try{fm(n,t);var f=bf,_=_d(t.containerInfo),b=f.focusedElem,B=f.selectionRange;if(_!==b&&b&&b.ownerDocument&&gd(b.ownerDocument.documentElement,b)){if(B!==null&&Zc(b)){var $=B.start,ft=B.end;if(ft===void 0&&(ft=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ft,b.value.length);else{var gt=b.ownerDocument||document,et=gt&&gt.defaultView||window;if(et.getSelection){var st=et.getSelection(),Lt=b.textContent.length,Yt=Math.min(B.start,Lt),Le=B.end===void 0?Yt:Math.min(B.end,Lt);!st.extend&&Yt>Le&&(_=Le,Le=Yt,Yt=_);var k=md(b,Yt),H=md(b,Le);if(k&&H&&(st.rangeCount!==1||st.anchorNode!==k.node||st.anchorOffset!==k.offset||st.focusNode!==H.node||st.focusOffset!==H.offset)){var K=gt.createRange();K.setStart(k.node,k.offset),st.removeAllRanges(),Yt>Le?(st.addRange(K),st.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),st.addRange(K))}}}}for(gt=[],st=b;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var dt=gt[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Bl=!!Tf,bf=Tf=null}finally{Ae=c,j.p=s,F.T=a}}t.current=n,rn=2}}function Lm(){if(rn===2){rn=0;var t=xa,n=jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var s=j.p;j.p=2;var c=Ae;Ae|=4;try{sm(t,n.alternate,n)}finally{Ae=c,j.p=s,F.T=a}}rn=3}}function Nm(){if(rn===4||rn===3){rn=0,Tt();var t=xa,n=jr,a=ji,s=Sm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?rn=5:(rn=0,jr=xa=null,Om(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ya=null),aa(a),n=n.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Ut,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=F.T,c=j.p,j.p=2,F.T=null;try{for(var f=t.onRecoverableError,_=0;_<s.length;_++){var b=s[_];f(b.value,{componentStack:b.stack})}}finally{F.T=n,j.p=c}}(ji&3)!==0&&bl(),Ei(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===ff?uo++:(uo=0,ff=t):uo=0,fo(0)}}function Om(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ws(n)))}function bl(){return Um(),Lm(),Nm(),Pm()}function Pm(){if(rn!==5)return!1;var t=xa,n=cf;cf=0;var a=aa(ji),s=F.T,c=j.p;try{j.p=32>a?32:a,F.T=null,a=uf,uf=null;var f=xa,_=ji;if(rn=0,jr=xa=null,ji=0,(Ae&6)!==0)throw Error(r(331));var b=Ae;if(Ae|=4,gm(f.current),dm(f,f.current,_,a),Ae=b,fo(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Ut,f)}catch{}return!0}finally{j.p=c,F.T=s,Om(t,n)}}function zm(t,n,a){n=Jn(a,n),n=Vu(t.stateNode,n,2),t=pa(t,n,2),t!==null&&(be(t,2),Ei(t))}function we(t,n,a){if(t.tag===3)zm(t,t,a);else for(;n!==null;){if(n.tag===3){zm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ya===null||!ya.has(s))){t=Jn(a,t),a=Bp(2),s=pa(n,a,2),s!==null&&(Ip(a,s,n,t),be(s,2),Ei(s));break}}n=n.return}}function pf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new eS;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(sf=!0,c.add(a),t=sS.bind(null,t,n,a),n.then(t,t))}function sS(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Pe===t&&(me&a)===a&&(We===4||We===3&&(me&62914560)===me&&300>St()-Sl?(Ae&2)===0&&Zr(t,0):of|=a,Yr===me&&(Yr=0)),Ei(t)}function Bm(t,n){n===0&&(n=_e()),t=Ka(t,n),t!==null&&(be(t,n),Ei(t))}function oS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Bm(t,a)}function lS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Bm(t,a)}function cS(t,n){return R(t,n)}var Al=null,Qr=null,mf=!1,Rl=!1,gf=!1,Ea=0;function Ei(t){t!==Qr&&t.next===null&&(Qr===null?Al=Qr=t:Qr=Qr.next=t),Rl=!0,mf||(mf=!0,fS())}function fo(t,n){if(!gf&&Rl){gf=!0;do for(var a=!1,s=Al;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var _=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-ae(42|t)+1)-1,f&=c&~(_&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Gm(s,f))}else f=me,f=ie(s,s===Pe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Re(s,f)||(a=!0,Gm(s,f));s=s.next}while(a);gf=!1}}function uS(){Im()}function Im(){Rl=mf=!1;var t=0;Ea!==0&&xS()&&(t=Ea);for(var n=St(),a=null,s=Al;s!==null;){var c=s.next,f=Fm(s,n);f===0?(s.next=null,a===null?Al=c:a.next=c,c===null&&(Qr=a)):(a=s,(t!==0||(f&3)!==0)&&(Rl=!0)),s=c}rn!==0&&rn!==5||fo(t),Ea!==0&&(Ea=0)}function Fm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-ae(f),b=1<<_,B=c[_];B===-1?((b&a)===0||(b&s)!==0)&&(c[_]=Ze(b,n)):B<=n&&(t.expiredLanes|=b),f&=~b}if(n=Pe,a=me,a=ie(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ot(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Re(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&ot(s),aa(a)){case 2:case 8:a=Ct;break;case 32:a=Zt;break;case 268435456:a=It;break;default:a=Zt}return s=Hm.bind(null,t),a=R(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&ot(s),t.callbackPriority=2,t.callbackNode=null,2}function Hm(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(bl()&&t.callbackNode!==a)return null;var s=me;return s=ie(t,t===Pe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(xm(t,s,n),Fm(t,St()),t.callbackNode!=null&&t.callbackNode===a?Hm.bind(null,t):null)}function Gm(t,n){if(bl())return null;xm(t,n,!0)}function fS(){ES(function(){(Ae&6)!==0?R(wt,uS):Im()})}function _f(){if(Ea===0){var t=zr;t===0&&(t=tt,tt<<=1,(tt&261888)===0&&(tt=256)),Ea=t}return Ea}function Vm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Po(""+t)}function Xm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function hS(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Vm((c[_n]||null).action),_=s.submitter;_&&(n=(n=_[_n]||null)?Vm(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var b=new Fo("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ea!==0){var B=_?Xm(c,_):new FormData(c);zu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=_?Xm(c,_):new FormData(c),zu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var vf=0;vf<$c.length;vf++){var Sf=$c[vf],dS=Sf.toLowerCase(),pS=Sf[0].toUpperCase()+Sf.slice(1);ci(dS,"on"+pS)}ci(yd,"onAnimationEnd"),ci(xd,"onAnimationIteration"),ci(Md,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(D0,"onTransitionRun"),ci(U0,"onTransitionStart"),ci(L0,"onTransitionCancel"),ci(Ed,"onTransitionEnd"),vn("onMouseEnter",["mouseout","mouseover"]),vn("onMouseLeave",["mouseout","mouseover"]),vn("onPointerEnter",["pointerout","pointerover"]),vn("onPointerLeave",["pointerout","pointerover"]),qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qe("onBeforeInput",["compositionend","keypress","textInput","paste"]),qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function km(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var b=s[_],B=b.instance,$=b.currentTarget;if(b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(ft){Vo(ft)}c.currentTarget=null,f=B}else for(_=0;_<s.length;_++){if(b=s[_],B=b.instance,$=b.currentTarget,b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(ft){Vo(ft)}c.currentTarget=null,f=B}}}}function pe(t,n){var a=n[q];a===void 0&&(a=n[q]=new Set);var s=t+"__bubble";a.has(s)||(Wm(n,t,2,!1),a.add(s))}function yf(t,n,a){var s=0;n&&(s|=4),Wm(a,t,s,n)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function xf(t){if(!t[Cl]){t[Cl]=!0,Ve.forEach(function(a){a!=="selectionchange"&&(mS.has(a)||yf(a,!1,t),yf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Cl]||(n[Cl]=!0,yf("selectionchange",!1,n))}}function Wm(t,n,a,s){switch(yg(n)){case 2:var c=XS;break;case 8:c=kS;break;default:c=zf}a=c.bind(null,n,a,t),c=void 0,!Hc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Mf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var b=s.stateNode.containerInfo;if(b===c)break;if(_===4)for(_=s.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;b!==null;){if(_=Nt(b),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){s=f=_;continue t}b=b.parentNode}}s=s.return}Kh(function(){var $=f,ft=Ic(a),gt=[];t:{var et=Td.get(t);if(et!==void 0){var st=Fo,Lt=t;switch(t){case"keypress":if(Bo(a)===0)break t;case"keydown":case"keyup":st=l0;break;case"focusin":Lt="focus",st=kc;break;case"focusout":Lt="blur",st=kc;break;case"beforeblur":case"afterblur":st=kc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=$h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=f0;break;case yd:case xd:case Md:st=$v;break;case Ed:st=d0;break;case"scroll":case"scrollend":st=jv;break;case"wheel":st=m0;break;case"copy":case"cut":case"paste":st=e0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=ed;break;case"toggle":case"beforetoggle":st=_0}var Yt=(n&4)!==0,Le=!Yt&&(t==="scroll"||t==="scrollend"),k=Yt?et!==null?et+"Capture":null:et;Yt=[];for(var H=$,K;H!==null;){var dt=H;if(K=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||K===null||k===null||(dt=Os(H,k),dt!=null&&Yt.push(po(H,dt,K))),Le)break;H=H.return}0<Yt.length&&(et=new st(et,Lt,null,a,ft),gt.push({event:et,listeners:Yt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",st=t==="mouseout"||t==="pointerout",et&&a!==Bc&&(Lt=a.relatedTarget||a.fromElement)&&(Nt(Lt)||Lt[w]))break t;if((st||et)&&(et=ft.window===ft?ft:(et=ft.ownerDocument)?et.defaultView||et.parentWindow:window,st?(Lt=a.relatedTarget||a.toElement,st=$,Lt=Lt?Nt(Lt):null,Lt!==null&&(Le=u(Lt),Yt=Lt.tag,Lt!==Le||Yt!==5&&Yt!==27&&Yt!==6)&&(Lt=null)):(st=null,Lt=$),st!==Lt)){if(Yt=$h,dt="onMouseLeave",k="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Yt=ed,dt="onPointerLeave",k="onPointerEnter",H="pointer"),Le=st==null?et:Kt(st),K=Lt==null?et:Kt(Lt),et=new Yt(dt,H+"leave",st,a,ft),et.target=Le,et.relatedTarget=K,dt=null,Nt(ft)===$&&(Yt=new Yt(k,H+"enter",Lt,a,ft),Yt.target=K,Yt.relatedTarget=Le,dt=Yt),Le=dt,st&&Lt)e:{for(Yt=gS,k=st,H=Lt,K=0,dt=k;dt;dt=Yt(dt))K++;dt=0;for(var Xt=H;Xt;Xt=Yt(Xt))dt++;for(;0<K-dt;)k=Yt(k),K--;for(;0<dt-K;)H=Yt(H),dt--;for(;K--;){if(k===H||H!==null&&k===H.alternate){Yt=k;break e}k=Yt(k),H=Yt(H)}Yt=null}else Yt=null;st!==null&&qm(gt,et,st,Yt,!1),Lt!==null&&Le!==null&&qm(gt,Le,Lt,Yt,!0)}}t:{if(et=$?Kt($):window,st=et.nodeName&&et.nodeName.toLowerCase(),st==="select"||st==="input"&&et.type==="file")var Me=cd;else if(od(et))if(ud)Me=R0;else{Me=b0;var Pt=T0}else st=et.nodeName,!st||st.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&zc($.elementType)&&(Me=cd):Me=A0;if(Me&&(Me=Me(t,$))){ld(gt,Me,a,ft);break t}Pt&&Pt(t,et,$),t==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&Pc(et,"number",et.value)}switch(Pt=$?Kt($):window,t){case"focusin":(od(Pt)||Pt.contentEditable==="true")&&(Cr=Pt,Kc=$,Vs=null);break;case"focusout":Vs=Kc=Cr=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,vd(gt,a,ft);break;case"selectionchange":if(w0)break;case"keydown":case"keyup":vd(gt,a,ft)}var le;if(qc)t:{switch(t){case"compositionstart":var ge="onCompositionStart";break t;case"compositionend":ge="onCompositionEnd";break t;case"compositionupdate":ge="onCompositionUpdate";break t}ge=void 0}else Rr?rd(t,a)&&(ge="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(nd&&a.locale!=="ko"&&(Rr||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Rr&&(le=Qh()):(oa=ft,Gc="value"in oa?oa.value:oa.textContent,Rr=!0)),Pt=wl($,ge),0<Pt.length&&(ge=new td(ge,t,null,a,ft),gt.push({event:ge,listeners:Pt}),le?ge.data=le:(le=sd(a),le!==null&&(ge.data=le)))),(le=S0?y0(t,a):x0(t,a))&&(ge=wl($,"onBeforeInput"),0<ge.length&&(Pt=new td("onBeforeInput","beforeinput",null,a,ft),gt.push({event:Pt,listeners:ge}),Pt.data=le)),hS(gt,t,$,a,ft)}km(gt,n)})}function po(t,n,a){return{instance:t,listener:n,currentTarget:a}}function wl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Os(t,a),c!=null&&s.unshift(po(t,c,f)),c=Os(t,n),c!=null&&s.push(po(t,c,f))),t.tag===3)return s;t=t.return}return[]}function gS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qm(t,n,a,s,c){for(var f=n._reactName,_=[];a!==null&&a!==s;){var b=a,B=b.alternate,$=b.stateNode;if(b=b.tag,B!==null&&B===s)break;b!==5&&b!==26&&b!==27||$===null||(B=$,c?($=Os(a,f),$!=null&&_.unshift(po(a,$,B))):c||($=Os(a,f),$!=null&&_.push(po(a,$,B)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var _S=/\r\n?/g,vS=/\u0000|\uFFFD/g;function Ym(t){return(typeof t=="string"?t:""+t).replace(_S,`
`).replace(vS,"")}function jm(t,n){return n=Ym(n),Ym(t)===n}function Ue(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Tr(t,""+s);break;case"className":Wa(t,"class",s);break;case"tabIndex":Wa(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Wa(t,a,s);break;case"style":jh(t,s,f);break;case"data":if(n!=="object"){Wa(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Po(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ue(t,n,"name",c.name,c,null),Ue(t,n,"formEncType",c.formEncType,c,null),Ue(t,n,"formMethod",c.formMethod,c,null),Ue(t,n,"formTarget",c.formTarget,c,null)):(Ue(t,n,"encType",c.encType,c,null),Ue(t,n,"method",c.method,c,null),Ue(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Po(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ni);break;case"onScroll":s!=null&&pe("scroll",t);break;case"onScrollEnd":s!=null&&pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Po(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":pe("beforetoggle",t),pe("toggle",t),Kn(t,"popover",s);break;case"xlinkActuate":bn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":bn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":bn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":bn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":bn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":bn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":bn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":bn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":bn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Kn(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qv.get(a)||a,Kn(t,a,s))}}function Ef(t,n,a,s,c,f){switch(a){case"style":jh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&Tr(t,""+s);break;case"onScroll":s!=null&&pe("scroll",t);break;case"onScrollEnd":s!=null&&pe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ni);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Kn(t,a,s)}}}function mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",t),pe("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(t,n,f,_,a,null)}}c&&Ue(t,n,"srcSet",a.srcSet,a,null),s&&Ue(t,n,"src",a.src,a,null);return;case"input":pe("invalid",t);var b=f=_=c=null,B=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":c=ft;break;case"type":_=ft;break;case"checked":B=ft;break;case"defaultChecked":$=ft;break;case"value":f=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ue(t,n,s,ft,a,null)}}kh(t,f,b,B,$,_,c,!1);return;case"select":pe("invalid",t),s=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":_=b;break;case"multiple":s=b;default:Ue(t,n,c,b,a,null)}n=f,a=_,t.multiple=!!s,n!=null?Er(t,!!s,n,!1):a!=null&&Er(t,!!s,a,!0);return;case"textarea":pe("invalid",t),f=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(b=a[_],b!=null))switch(_){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ue(t,n,_,b,a,null)}qh(t,s,c,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ue(t,n,B,s,a,null));return;case"dialog":pe("beforetoggle",t),pe("toggle",t),pe("cancel",t),pe("close",t);break;case"iframe":case"object":pe("load",t);break;case"video":case"audio":for(s=0;s<ho.length;s++)pe(ho[s],t);break;case"image":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"embed":case"source":case"link":pe("error",t),pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(t,n,$,s,a,null)}return;default:if(zc(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&Ef(t,n,ft,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Ue(t,n,b,s,a,null))}function SS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,b=null,B=null,$=null,ft=null;for(st in a){var gt=a[st];if(a.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":B=gt;default:s.hasOwnProperty(st)||Ue(t,n,st,null,s,gt)}}for(var et in s){var st=s[et];if(gt=a[et],s.hasOwnProperty(et)&&(st!=null||gt!=null))switch(et){case"type":f=st;break;case"name":c=st;break;case"checked":$=st;break;case"defaultChecked":ft=st;break;case"value":_=st;break;case"defaultValue":b=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==gt&&Ue(t,n,et,st,s,gt)}}Oc(t,_,b,B,$,ft,f,c);return;case"select":st=_=b=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":st=B;default:s.hasOwnProperty(f)||Ue(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":et=f;break;case"defaultValue":b=f;break;case"multiple":_=f;default:f!==B&&Ue(t,n,c,f,s,B)}n=b,a=_,s=st,et!=null?Er(t,!!a,et,!1):!!s!=!!a&&(n!=null?Er(t,!!a,n,!0):Er(t,!!a,a?[]:"",!1));return;case"textarea":st=et=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ue(t,n,b,null,s,c)}for(_ in s)if(c=s[_],f=a[_],s.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":et=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ue(t,n,_,c,s,f)}Wh(t,et,st);return;case"option":for(var Lt in a)et=a[Lt],a.hasOwnProperty(Lt)&&et!=null&&!s.hasOwnProperty(Lt)&&(Lt==="selected"?t.selected=!1:Ue(t,n,Lt,null,s,et));for(B in s)et=s[B],st=a[B],s.hasOwnProperty(B)&&et!==st&&(et!=null||st!=null)&&(B==="selected"?t.selected=et&&typeof et!="function"&&typeof et!="symbol":Ue(t,n,B,et,s,st));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in a)et=a[Yt],a.hasOwnProperty(Yt)&&et!=null&&!s.hasOwnProperty(Yt)&&Ue(t,n,Yt,null,s,et);for($ in s)if(et=s[$],st=a[$],s.hasOwnProperty($)&&et!==st&&(et!=null||st!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ue(t,n,$,et,s,st)}return;default:if(zc(n)){for(var Le in a)et=a[Le],a.hasOwnProperty(Le)&&et!==void 0&&!s.hasOwnProperty(Le)&&Ef(t,n,Le,void 0,s,et);for(ft in s)et=s[ft],st=a[ft],!s.hasOwnProperty(ft)||et===st||et===void 0&&st===void 0||Ef(t,n,ft,et,s,st);return}}for(var k in a)et=a[k],a.hasOwnProperty(k)&&et!=null&&!s.hasOwnProperty(k)&&Ue(t,n,k,null,s,et);for(gt in s)et=s[gt],st=a[gt],!s.hasOwnProperty(gt)||et===st||et==null&&st==null||Ue(t,n,gt,et,s,st)}function Zm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,_=c.initiatorType,b=c.duration;if(f&&b&&Zm(_)){for(_=0,b=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],$=B.startTime;if($>b)break;var ft=B.transferSize,gt=B.initiatorType;ft&&Zm(gt)&&(B=B.responseEnd,_+=ft*(B<b?1:(b-$)/(B-$)))}if(--s,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Tf=null,bf=null;function Dl(t){return t.nodeType===9?t:t.ownerDocument}function Km(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Af(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rf=null;function xS(){var t=window.event;return t&&t.type==="popstate"?t===Rf?!1:(Rf=t,!0):(Rf=null,!1)}var Jm=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(t){return $m.resolve(null).then(t).catch(TS)}:Jm;function TS(t){setTimeout(function(){throw t})}function Ta(t){return t==="head"}function tg(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),es(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,mo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,b=f.nodeName;f[Rt]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&mo(t.ownerDocument.body);a=c}while(a);es(n)}function eg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Cf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Cf(a),Ot(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function bS(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Rt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ii(t.nextSibling),t===null)break}return null}function AS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ii(t.nextSibling),t===null))return null;return t}function ng(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ii(t.nextSibling),t===null))return null;return t}function wf(t){return t.data==="$?"||t.data==="$~"}function Df(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function RS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ii(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Uf=null;function ig(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ii(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function ag(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function rg(t,n,a){switch(n=Dl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ot(t)}var ai=new Map,sg=new Set;function Ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Zi=j.d;j.d={f:CS,r:wS,D:DS,C:US,L:LS,m:NS,X:PS,S:OS,M:zS};function CS(){var t=Zi.f(),n=Ml();return t||n}function wS(t){var n=Vt(t);n!==null&&n.tag===5&&n.type==="form"?Ep(n):Zi.r(t)}var Jr=typeof document>"u"?null:document;function og(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var c=Rn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),sg.has(c)||(sg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),mn(n,"link",t),Ft(n),s.head.appendChild(n)))}}function DS(t){Zi.D(t),og("dns-prefetch",t,null)}function US(t,n){Zi.C(t,n),og("preconnect",t,n)}function LS(t,n,a){Zi.L(t,n,a);var s=Jr;if(s&&t&&n){var c='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Rn(a.imageSizes)+'"]')):c+='[href="'+Rn(t)+'"]';var f=c;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}ai.has(f)||(t=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ai.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(go(f))||n==="script"&&s.querySelector(_o(f))||(n=s.createElement("link"),mn(n,"link",t),Ft(n),s.head.appendChild(n)))}}function NS(t,n){Zi.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Rn(s)+'"][href="'+Rn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!ai.has(f)&&(t=y({rel:"modulepreload",href:t},n),ai.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}s=a.createElement("link"),mn(s,"link",t),Ft(s),a.head.appendChild(s)}}}function OS(t,n,a){Zi.S(t,n,a);var s=Jr;if(s&&t){var c=Jt(s).hoistableStyles,f=$r(t);n=n||"default";var _=c.get(f);if(!_){var b={loading:0,preload:null};if(_=s.querySelector(go(f)))b.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ai.get(f))&&Lf(t,a);var B=_=s.createElement("link");Ft(B),mn(B,"link",t),B._p=new Promise(function($,ft){B.onload=$,B.onerror=ft}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Ll(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:b},c.set(f,_)}}}function PS(t,n){Zi.X(t,n);var a=Jr;if(a&&t){var s=Jt(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(t=y({src:t,async:!0},n),(n=ai.get(c))&&Nf(t,n),f=a.createElement("script"),Ft(f),mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function zS(t,n){Zi.M(t,n);var a=Jr;if(a&&t){var s=Jt(a).hoistableScripts,c=ts(t),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(t=y({src:t,async:!0,type:"module"},n),(n=ai.get(c))&&Nf(t,n),f=a.createElement("script"),Ft(f),mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function lg(t,n,a,s){var c=(c=Et.current)?Ul(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=Jt(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=Jt(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(go(t)))&&!f._p&&(_.instance=f,_.state.loading=5),ai.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(t,a),f||BS(c,t,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=Jt(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+Rn(t)+'"'}function go(t){return'link[rel="stylesheet"]['+t+"]"}function cg(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function BS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),mn(n,"link",a),Ft(n),t.head.appendChild(n))}function ts(t){return'[src="'+Rn(t)+'"]'}function _o(t){return"script[async]"+t}function ug(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Rn(a.href)+'"]');if(s)return n.instance=s,Ft(s),s;var c=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ft(s),mn(s,"style",c),Ll(s,a.precedence,t),n.instance=s;case"stylesheet":c=$r(a.href);var f=t.querySelector(go(c));if(f)return n.state.loading|=4,n.instance=f,Ft(f),f;s=cg(a),(c=ai.get(c))&&Lf(s,c),f=(t.ownerDocument||t).createElement("link"),Ft(f);var _=f;return _._p=new Promise(function(b,B){_.onload=b,_.onerror=B}),mn(f,"link",s),n.state.loading|=4,Ll(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(c=t.querySelector(_o(f)))?(n.instance=c,Ft(c),c):(s=a,(c=ai.get(f))&&(s=y({},a),Nf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Ft(c),mn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ll(s,a.precedence,t));return n.instance}function Ll(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,_=0;_<s.length;_++){var b=s[_];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Lf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Nf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Nl=null;function fg(t,n,a){if(Nl===null){var s=new Map,c=Nl=new Map;c.set(a,s)}else c=Nl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Rt]||f[en]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var b=s.get(_);b?b.push(f):s.set(_,[f])}}return s}function hg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function IS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function dg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function FS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=$r(s.href),f=n.querySelector(go(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ol.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Ft(f);return}f=n.ownerDocument||n,s=cg(s),(c=ai.get(c))&&Lf(s,c),f=f.createElement("link"),Ft(f);var _=f;_._p=new Promise(function(b,B){_.onload=b,_.onerror=B}),mn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ol.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Of=0;function HS(t,n){return t.stylesheets&&t.count===0&&zl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&zl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Of===0&&(Of=62500*yS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&zl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Of?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Ol(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pl=null;function zl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pl=new Map,n.forEach(GS,t),Pl=null,Ol.call(t))}function GS(t,n){if(!(n.state.loading&4)){var a=Pl.get(t);if(a)var s=a.get(null);else{a=new Map,Pl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,c),a.set(_,c),this.count++,s=Ol.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var vo={$$typeof:D,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function VS(t,n,a,s,c,f,_,b,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=He(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=He(0),this.hiddenUpdates=He(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function pg(t,n,a,s,c,f,_,b,B,$,ft,gt){return t=new VS(t,n,a,_,B,$,ft,gt,b),n=1,f===!0&&(n|=24),f=Gn(3,null,null,n),t.current=f,f.stateNode=t,n=hu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},gu(f),t}function mg(t){return t?(t=Ur,t):Ur}function gg(t,n,a,s,c,f){c=mg(c),s.context===null?s.context=c:s.pendingContext=c,s=da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(t,s,n),a!==null&&(zn(a,t,n),Zs(a,t,n))}function _g(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Pf(t,n){_g(t,n),(t=t.alternate)&&_g(t,n)}function vg(t){if(t.tag===13||t.tag===31){var n=Ka(t,67108864);n!==null&&zn(n,t,67108864),Pf(t,67108864)}}function Sg(t){if(t.tag===13||t.tag===31){var n=qn();n=Li(n);var a=Ka(t,n);a!==null&&zn(a,t,n),Pf(t,n)}}var Bl=!0;function XS(t,n,a,s){var c=F.T;F.T=null;var f=j.p;try{j.p=2,zf(t,n,a,s)}finally{j.p=f,F.T=c}}function kS(t,n,a,s){var c=F.T;F.T=null;var f=j.p;try{j.p=8,zf(t,n,a,s)}finally{j.p=f,F.T=c}}function zf(t,n,a,s){if(Bl){var c=Bf(s);if(c===null)Mf(t,n,s,Il,a),xg(t,s);else if(qS(c,t,n,a,s))s.stopPropagation();else if(xg(t,s),n&4&&-1<WS.indexOf(t)){for(;c!==null;){var f=Vt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=jt(f.pendingLanes);if(_!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;_;){var B=1<<31-ae(_);b.entanglements[1]|=B,_&=~B}Ei(f),(Ae&6)===0&&(yl=St()+500,fo(0))}}break;case 31:case 13:b=Ka(f,2),b!==null&&zn(b,f,2),Ml(),Pf(f,2)}if(f=Bf(s),f===null&&Mf(t,n,s,Il,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Mf(t,n,s,null,a)}}function Bf(t){return t=Ic(t),If(t)}var Il=null;function If(t){if(Il=null,t=Nt(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Il=t,null}function yg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ht()){case wt:return 2;case Ct:return 8;case Zt:case At:return 32;case It:return 268435456;default:return 32}default:return 32}}var Ff=!1,ba=null,Aa=null,Ra=null,So=new Map,yo=new Map,Ca=[],WS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xg(t,n){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function xo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Vt(n),n!==null&&vg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function qS(t,n,a,s,c){switch(n){case"focusin":return ba=xo(ba,t,n,a,s,c),!0;case"dragenter":return Aa=xo(Aa,t,n,a,s,c),!0;case"mouseover":return Ra=xo(Ra,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return So.set(f,xo(So.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,yo.set(f,xo(yo.get(f)||null,t,n,a,s,c)),!0}return!1}function Mg(t){var n=Nt(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ns(t.priority,function(){Sg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ns(t.priority,function(){Sg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Bf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Bc=s,a.target.dispatchEvent(s),Bc=null}else return n=Vt(a),n!==null&&vg(n),t.blockedOn=a,!1;n.shift()}return!0}function Eg(t,n,a){Fl(t)&&a.delete(n)}function YS(){Ff=!1,ba!==null&&Fl(ba)&&(ba=null),Aa!==null&&Fl(Aa)&&(Aa=null),Ra!==null&&Fl(Ra)&&(Ra=null),So.forEach(Eg),yo.forEach(Eg)}function Hl(t,n){t.blockedOn===n&&(t.blockedOn=null,Ff||(Ff=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,YS)))}var Gl=null;function Tg(t){Gl!==t&&(Gl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(If(s||a)===null)continue;break}var f=Vt(a);f!==null&&(t.splice(n,3),n-=3,zu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function es(t){function n(B){return Hl(B,t)}ba!==null&&Hl(ba,t),Aa!==null&&Hl(Aa,t),Ra!==null&&Hl(Ra,t),So.forEach(n),yo.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)Mg(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],_=c[_n]||null;if(typeof f=="function")_||Tg(a);else if(_){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[_n]||null)b=_.formAction;else if(If(c)!==null)continue}else b=_.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),Tg(a)}}}function bg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Hf(t){this._internalRoot=t}Vl.prototype.render=Hf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=qn();gg(a,s,t,n,null,null)},Vl.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;gg(t.current,2,null,t,null,null),Ml(),n[w]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ls();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&Mg(t)}};var Ag=e.version;if(Ag!=="19.2.3")throw Error(r(527,Ag,"19.2.3"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var jS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{Ut=Xl.inject(jS),Gt=Xl}catch{}}return Eo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Np,f=Op,_=Pp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=pg(t,1,!1,null,null,a,s,null,c,f,_,bg),t[w]=n.current,xf(t),new Hf(n)},Eo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Np,_=Op,b=Pp,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=pg(t,1,!0,n,a??null,s,c,B,f,_,b,bg),n.context=mg(null),a=n.current,s=qn(),s=Li(s),c=da(s),c.callback=null,pa(a,c,s),a=s,n.current.lanes=a,be(n,a),Ei(n),t[w]=n.current,xf(t),new Vl(n)},Eo.version="19.2.3",Eo}var zg;function ay(){if(zg)return Vf.exports;zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Vf.exports=iy(),Vf.exports}var ry=ay(),sn=Bh();const sy=({onGraphLoad:o})=>{const[e,i]=sn.useState(null),[r,l]=sn.useState(null),u=sn.useCallback(async()=>{try{const d=await fetch("/hardcoded-graph.json");if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);const h=await d.json();if(h.schemaVersion&&h.graph&&Array.isArray(h.graph.nodes)&&Array.isArray(h.graph.edges))i(h.graph),o(h.graph),l(null);else throw new Error("Invalid graph data format")}catch(d){l(d.message),console.error("Failed to import graph:",d)}},[o]);return En.jsxs("div",{children:[En.jsx("button",{onClick:u,children:"Import Graph"}),r&&En.jsxs("p",{style:{color:"red"},children:["Error: ",r]}),e&&En.jsxs("div",{children:[En.jsx("p",{children:"Graph loaded!"}),En.jsxs("p",{children:["Nodes: ",e.nodes.length]}),En.jsxs("p",{children:["Edges: ",e.edges.length]})]})]})},oy=({onGraphLoad:o})=>En.jsxs("div",{className:"left-menu",children:[En.jsx("h2",{children:"Contrôles 3D"}),En.jsx(sy,{onGraphLoad:o})]});const Ih="164",ns={ROTATE:0,DOLLY:1,PAN:2},is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ly=0,Bg=1,cy=2,dv=1,uy=2,ea=3,Ga=0,In=1,na=2,Fa=0,Ms=1,Ig=2,Fg=3,Hg=4,fy=5,gr=100,hy=101,dy=102,py=103,my=104,gy=200,_y=201,vy=202,Sy=203,Ch=204,wh=205,yy=206,xy=207,My=208,Ey=209,Ty=210,by=211,Ay=212,Ry=213,Cy=214,wy=0,Dy=1,Uy=2,vc=3,Ly=4,Ny=5,Oy=6,Py=7,pv=0,zy=1,By=2,Ha=0,Iy=1,Fy=2,Hy=3,Gy=4,Vy=5,Xy=6,ky=7,mv=300,bs=301,As=302,Dh=303,Uh=304,Ac=306,Lh=1e3,vr=1001,Nh=1002,oi=1003,Wy=1004,kl=1005,mi=1006,Yf=1007,Sr=1008,Va=1009,qy=1010,Yy=1011,gv=1012,_v=1013,Rs=1014,Ia=1015,Rc=1016,vv=1017,Sv=1018,Lo=1020,jy=35902,Zy=1021,Ky=1022,Ri=1023,Qy=1024,Jy=1025,Es=1026,Uo=1027,$y=1028,yv=1029,tx=1030,xv=1031,Mv=1033,jf=33776,Zf=33777,Kf=33778,Qf=33779,Gg=35840,Vg=35841,Xg=35842,kg=35843,Wg=36196,qg=37492,Yg=37496,jg=37808,Zg=37809,Kg=37810,Qg=37811,Jg=37812,$g=37813,t_=37814,e_=37815,n_=37816,i_=37817,a_=37818,r_=37819,s_=37820,o_=37821,Jf=36492,l_=36494,c_=36495,ex=36283,u_=36284,f_=36285,h_=36286,nx=3200,ix=3201,Ev=0,ax=1,Ba="",Ti="srgb",ka="srgb-linear",Fh="display-p3",Cc="display-p3-linear",Sc="linear",Fe="srgb",yc="rec709",xc="p3",as=7680,d_=519,rx=512,sx=513,ox=514,Tv=515,lx=516,cx=517,ux=518,fx=519,p_=35044,m_="300 es",ia=2e3,Mc=2001;class Mr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gc=Math.PI/180,Oh=180/Math.PI;function No(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[o&255]+xn[o>>8&255]+xn[o>>16&255]+xn[o>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[i&63|128]+xn[i>>8&255]+"-"+xn[i>>16&255]+xn[i>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function Dn(o,e,i){return Math.max(e,Math.min(i,o))}function hx(o,e){return(o%e+e)%e}function $f(o,e,i){return(1-i)*o+i*e}function To(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const dx={DEG2RAD:gc};class ee{constructor(e=0,i=0){ee.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(e,i,r,l,u,d,h,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],y=r[7],x=r[2],M=r[5],A=r[8],T=l[0],S=l[3],g=l[6],L=l[1],D=l[4],P=l[7],Y=l[2],I=l[5],N=l[8];return u[0]=d*T+h*L+m*Y,u[3]=d*S+h*D+m*I,u[6]=d*g+h*P+m*N,u[1]=p*T+v*L+y*Y,u[4]=p*S+v*D+y*I,u[7]=p*g+v*P+y*N,u[2]=x*T+M*L+A*Y,u[5]=x*S+M*D+A*I,u[8]=x*g+M*P+A*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-r*u*v+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],y=v*d-h*p,x=h*m-v*u,M=p*u-d*m,A=i*y+r*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=y*T,e[1]=(l*p-v*r)*T,e[2]=(h*r-l*d)*T,e[3]=x*T,e[4]=(v*i-l*m)*T,e[5]=(l*u-h*i)*T,e[6]=M*T,e[7]=(r*m-p*i)*T,e[8]=(d*i-r*u)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(th.makeScale(e,i)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,i){return this.premultiply(th.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const th=new ue;function bv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ec(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function px(){const o=Ec("canvas");return o.style.display="block",o}const g_={};function mx(o){o in g_||(g_[o]=!0,console.warn(o))}const __=new ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),v_=new ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wl={[ka]:{transfer:Sc,primaries:yc,toReference:o=>o,fromReference:o=>o},[Ti]:{transfer:Fe,primaries:yc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Cc]:{transfer:Sc,primaries:xc,toReference:o=>o.applyMatrix3(v_),fromReference:o=>o.applyMatrix3(__)},[Fh]:{transfer:Fe,primaries:xc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(v_),fromReference:o=>o.applyMatrix3(__).convertLinearToSRGB()}},gx=new Set([ka,Cc]),Ne={enabled:!0,_workingColorSpace:ka,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!gx.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Wl[e].toReference,l=Wl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Wl[o].primaries},getTransfer:function(o){return o===Ba?Sc:Wl[o].transfer}};function Ts(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function eh(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let rs;class _x{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rs===void 0&&(rs=Ec("canvas")),rs.width=e.width,rs.height=e.height;const r=rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ec("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Ts(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ts(i[r]/255)*255):i[r]=Ts(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vx=0;class Av{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(nh(l[d].image)):u.push(nh(l[d]))}else u=nh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function nh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_x.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sx=0;class Fn extends Mr{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=vr,l=vr,u=mi,d=Sr,h=Ri,m=Va,p=Fn.DEFAULT_ANISOTROPY,v=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=No(),this.name="",this.source=new Av(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lh:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Nh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lh:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Nh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=mv;Fn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,i=0,r=0,l=1){fn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],v=m[4],y=m[8],x=m[1],M=m[5],A=m[9],T=m[2],S=m[6],g=m[10];if(Math.abs(v-x)<.01&&Math.abs(y-T)<.01&&Math.abs(A-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(y+T)<.1&&Math.abs(A+S)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,P=(M+1)/2,Y=(g+1)/2,I=(v+x)/4,N=(y+T)/4,it=(A+S)/4;return D>P&&D>Y?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=I/r,u=N/r):P>Y?P<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(P),r=I/l,u=it/l):Y<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(Y),r=N/u,l=it/u),this.set(r,l,u,i),this}let L=Math.sqrt((S-A)*(S-A)+(y-T)*(y-T)+(x-v)*(x-v));return Math.abs(L)<.001&&(L=1),this.x=(S-A)/L,this.y=(y-T)/L,this.z=(x-v)/L,this.w=Math.acos((p+M+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yx extends Mr{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Fn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new Av(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends yx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Rv extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xx extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],y=r[l+3];const x=u[d+0],M=u[d+1],A=u[d+2],T=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=y;return}if(h===1){e[i+0]=x,e[i+1]=M,e[i+2]=A,e[i+3]=T;return}if(y!==T||m!==x||p!==M||v!==A){let S=1-h;const g=m*x+p*M+v*A+y*T,L=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const Y=Math.sqrt(D),I=Math.atan2(Y,g*L);S=Math.sin(S*I)/Y,h=Math.sin(h*I)/Y}const P=h*L;if(m=m*S+x*P,p=p*S+M*P,v=v*S+A*P,y=y*S+T*P,S===1-h){const Y=1/Math.sqrt(m*m+p*p+v*v+y*y);m*=Y,p*=Y,v*=Y,y*=Y}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=y}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],y=u[d],x=u[d+1],M=u[d+2],A=u[d+3];return e[i]=h*A+v*y+m*M-p*x,e[i+1]=m*A+v*x+p*y-h*M,e[i+2]=p*A+v*M+h*x-m*y,e[i+3]=v*A-h*y-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),y=h(u/2),x=m(r/2),M=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=x*v*y+p*M*A,this._y=p*M*y-x*v*A,this._z=p*v*A+x*M*y,this._w=p*v*y-x*M*A;break;case"YXZ":this._x=x*v*y+p*M*A,this._y=p*M*y-x*v*A,this._z=p*v*A-x*M*y,this._w=p*v*y+x*M*A;break;case"ZXY":this._x=x*v*y-p*M*A,this._y=p*M*y+x*v*A,this._z=p*v*A+x*M*y,this._w=p*v*y-x*M*A;break;case"ZYX":this._x=x*v*y-p*M*A,this._y=p*M*y+x*v*A,this._z=p*v*A-x*M*y,this._w=p*v*y+x*M*A;break;case"YZX":this._x=x*v*y+p*M*A,this._y=p*M*y+x*v*A,this._z=p*v*A-x*M*y,this._w=p*v*y-x*M*A;break;case"XZY":this._x=x*v*y-p*M*A,this._y=p*M*y-x*v*A,this._z=p*v*A+x*M*y,this._w=p*v*y+x*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],y=i[10],x=r+h+y;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>y){const M=2*Math.sqrt(1+r-h-y);this._w=(v-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>y){const M=2*Math.sqrt(1+h-r-y);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+y-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-r*p,this._z=u*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,h),y=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=d*y+this._w*x,this._x=r*y+this._x*x,this._y=l*y+this._y*x,this._z=u*y+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(S_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(S_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),v=2*(h*i-u*l),y=2*(u*r-d*i);return this.x=i+m*p+d*y-h*v,this.y=r+m*v+h*p-u*y,this.z=l+m*y+u*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Dn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new Q,S_=new xr;class Oo{constructor(e=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,hi):hi.fromBufferAttribute(u,d),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ql.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ql.copy(r.boundingBox)),ql.applyMatrix4(e.matrixWorld),this.union(ql)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),Yl.subVectors(this.max,bo),ss.subVectors(e.a,bo),os.subVectors(e.b,bo),ls.subVectors(e.c,bo),Da.subVectors(os,ss),Ua.subVectors(ls,os),cr.subVectors(ss,ls);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-cr.z,cr.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,cr.z,0,-cr.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-cr.y,cr.x,0];return!ah(i,ss,os,ls,Yl)||(i=[1,0,0,0,1,0,0,0,1],!ah(i,ss,os,ls,Yl))?!1:(jl.crossVectors(Da,Ua),i=[jl.x,jl.y,jl.z],ah(i,ss,os,ls,Yl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],hi=new Q,ql=new Oo,ss=new Q,os=new Q,ls=new Q,Da=new Q,Ua=new Q,cr=new Q,bo=new Q,Yl=new Q,jl=new Q,ur=new Q;function ah(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){ur.fromArray(o,u);const h=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),m=e.dot(ur),p=i.dot(ur),v=r.dot(ur);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const Mx=new Oo,Ao=new Q,rh=new Q;class wc{constructor(e=new Q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Mx.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const i=Ao.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ao,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(rh)),this.expandByPoint(Ao.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new Q,sh=new Q,Zl=new Q,La=new Q,oh=new Q,Kl=new Q,lh=new Q;class Dc{constructor(e=new Q,i=new Q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,i),Qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){sh.copy(e).add(i).multiplyScalar(.5),Zl.copy(i).sub(e).normalize(),La.copy(this.origin).sub(sh);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Zl),h=La.dot(this.direction),m=-La.dot(Zl),p=La.lengthSq(),v=Math.abs(1-d*d);let y,x,M,A;if(v>0)if(y=d*m-h,x=d*h-m,A=u*v,y>=0)if(x>=-A)if(x<=A){const T=1/v;y*=T,x*=T,M=y*(y+d*x+2*h)+x*(d*y+x+2*m)+p}else x=u,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*m)+p;else x=-u,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*m)+p;else x<=-A?(y=Math.max(0,-(-d*u+h)),x=y>0?-u:Math.min(Math.max(-u,-m),u),M=-y*y+x*(x+2*m)+p):x<=A?(y=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(y=Math.max(0,-(d*u+h)),x=y>0?u:Math.min(Math.max(-u,-m),u),M=-y*y+x*(x+2*m)+p);else x=d>0?-u:u,y=Math.max(0,-(d*x+h)),M=-y*y+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(sh).addScaledVector(Zl,x),M}intersectSphere(e,i){Qi.subVectors(e.center,this.origin);const r=Qi.dot(this.direction),l=Qi.dot(Qi)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),v>=0?(u=(e.min.y-x.y)*v,d=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,d=(e.min.y-x.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),y>=0?(h=(e.min.z-x.z)*y,m=(e.max.z-x.z)*y):(h=(e.max.z-x.z)*y,m=(e.min.z-x.z)*y),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,i,r,l,u){oh.subVectors(i,e),Kl.subVectors(r,e),lh.crossVectors(oh,Kl);let d=this.direction.dot(lh),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;La.subVectors(this.origin,e);const m=h*this.direction.dot(Kl.crossVectors(La,Kl));if(m<0)return null;const p=h*this.direction.dot(oh.cross(La));if(p<0||m+p>d)return null;const v=-h*La.dot(lh);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,i,r,l,u,d,h,m,p,v,y,x,M,A,T,S){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,v,y,x,M,A,T,S)}set(e,i,r,l,u,d,h,m,p,v,y,x,M,A,T,S){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=u,g[5]=d,g[9]=h,g[13]=m,g[2]=p,g[6]=v,g[10]=y,g[14]=x,g[3]=M,g[7]=A,g[11]=T,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/cs.setFromMatrixColumn(e,0).length(),u=1/cs.setFromMatrixColumn(e,1).length(),d=1/cs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const x=d*v,M=d*y,A=h*v,T=h*y;i[0]=m*v,i[4]=-m*y,i[8]=p,i[1]=M+A*p,i[5]=x-T*p,i[9]=-h*m,i[2]=T-x*p,i[6]=A+M*p,i[10]=d*m}else if(e.order==="YXZ"){const x=m*v,M=m*y,A=p*v,T=p*y;i[0]=x+T*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*y,i[5]=d*v,i[9]=-h,i[2]=M*h-A,i[6]=T+x*h,i[10]=d*m}else if(e.order==="ZXY"){const x=m*v,M=m*y,A=p*v,T=p*y;i[0]=x-T*h,i[4]=-d*y,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*v,i[9]=T-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const x=d*v,M=d*y,A=h*v,T=h*y;i[0]=m*v,i[4]=A*p-M,i[8]=x*p+T,i[1]=m*y,i[5]=T*p+x,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const x=d*m,M=d*p,A=h*m,T=h*p;i[0]=m*v,i[4]=T-x*y,i[8]=A*y+M,i[1]=y,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*y+A,i[10]=x-T*y}else if(e.order==="XZY"){const x=d*m,M=d*p,A=h*m,T=h*p;i[0]=m*v,i[4]=-y,i[8]=p*v,i[1]=x*y+T,i[5]=d*v,i[9]=M*y-A,i[2]=A*y-M,i[6]=h*v,i[10]=T*y+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ex,e,Tx)}lookAt(e,i,r){const l=this.elements;return Yn.subVectors(e,i),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Na.crossVectors(r,Yn),Na.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Na.crossVectors(r,Yn)),Na.normalize(),Ql.crossVectors(Yn,Na),l[0]=Na.x,l[4]=Ql.x,l[8]=Yn.x,l[1]=Na.y,l[5]=Ql.y,l[9]=Yn.y,l[2]=Na.z,l[6]=Ql.z,l[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],y=r[5],x=r[9],M=r[13],A=r[2],T=r[6],S=r[10],g=r[14],L=r[3],D=r[7],P=r[11],Y=r[15],I=l[0],N=l[4],it=l[8],U=l[12],C=l[1],J=l[5],ct=l[9],G=l[13],pt=l[2],ht=l[6],F=l[10],j=l[14],X=l[3],_t=l[7],mt=l[11],O=l[15];return u[0]=d*I+h*C+m*pt+p*X,u[4]=d*N+h*J+m*ht+p*_t,u[8]=d*it+h*ct+m*F+p*mt,u[12]=d*U+h*G+m*j+p*O,u[1]=v*I+y*C+x*pt+M*X,u[5]=v*N+y*J+x*ht+M*_t,u[9]=v*it+y*ct+x*F+M*mt,u[13]=v*U+y*G+x*j+M*O,u[2]=A*I+T*C+S*pt+g*X,u[6]=A*N+T*J+S*ht+g*_t,u[10]=A*it+T*ct+S*F+g*mt,u[14]=A*U+T*G+S*j+g*O,u[3]=L*I+D*C+P*pt+Y*X,u[7]=L*N+D*J+P*ht+Y*_t,u[11]=L*it+D*ct+P*F+Y*mt,u[15]=L*U+D*G+P*j+Y*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],y=e[6],x=e[10],M=e[14],A=e[3],T=e[7],S=e[11],g=e[15];return A*(+u*m*y-l*p*y-u*h*x+r*p*x+l*h*M-r*m*M)+T*(+i*m*M-i*p*x+u*d*x-l*d*M+l*p*v-u*m*v)+S*(+i*p*y-i*h*M-u*d*y+r*d*M+u*h*v-r*p*v)+g*(-l*h*v-i*m*y+i*h*x+l*d*y-r*d*x+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],y=e[9],x=e[10],M=e[11],A=e[12],T=e[13],S=e[14],g=e[15],L=y*S*p-T*x*p+T*m*M-h*S*M-y*m*g+h*x*g,D=A*x*p-v*S*p-A*m*M+d*S*M+v*m*g-d*x*g,P=v*T*p-A*y*p+A*h*M-d*T*M-v*h*g+d*y*g,Y=A*y*m-v*T*m-A*h*x+d*T*x+v*h*S-d*y*S,I=i*L+r*D+l*P+u*Y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return e[0]=L*N,e[1]=(T*x*u-y*S*u-T*l*M+r*S*M+y*l*g-r*x*g)*N,e[2]=(h*S*u-T*m*u+T*l*p-r*S*p-h*l*g+r*m*g)*N,e[3]=(y*m*u-h*x*u-y*l*p+r*x*p+h*l*M-r*m*M)*N,e[4]=D*N,e[5]=(v*S*u-A*x*u+A*l*M-i*S*M-v*l*g+i*x*g)*N,e[6]=(A*m*u-d*S*u-A*l*p+i*S*p+d*l*g-i*m*g)*N,e[7]=(d*x*u-v*m*u+v*l*p-i*x*p-d*l*M+i*m*M)*N,e[8]=P*N,e[9]=(A*y*u-v*T*u-A*r*M+i*T*M+v*r*g-i*y*g)*N,e[10]=(d*T*u-A*h*u+A*r*p-i*T*p-d*r*g+i*h*g)*N,e[11]=(v*h*u-d*y*u-v*r*p+i*y*p+d*r*M-i*h*M)*N,e[12]=Y*N,e[13]=(v*T*l-A*y*l+A*r*x-i*T*x-v*r*S+i*y*S)*N,e[14]=(A*h*l-d*T*l-A*r*m+i*T*m+d*r*S-i*h*S)*N,e[15]=(d*y*l-v*h*l+v*r*m-i*y*m-d*r*x+i*h*x)*N,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,y=h+h,x=u*p,M=u*v,A=u*y,T=d*v,S=d*y,g=h*y,L=m*p,D=m*v,P=m*y,Y=r.x,I=r.y,N=r.z;return l[0]=(1-(T+g))*Y,l[1]=(M+P)*Y,l[2]=(A-D)*Y,l[3]=0,l[4]=(M-P)*I,l[5]=(1-(x+g))*I,l[6]=(S+L)*I,l[7]=0,l[8]=(A+D)*N,l[9]=(S-L)*N,l[10]=(1-(x+T))*N,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=cs.set(l[0],l[1],l[2]).length();const d=cs.set(l[4],l[5],l[6]).length(),h=cs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],di.copy(this);const p=1/u,v=1/d,y=1/h;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=v,di.elements[5]*=v,di.elements[6]*=v,di.elements[8]*=y,di.elements[9]*=y,di.elements[10]*=y,i.setFromRotationMatrix(di),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=ia){const m=this.elements,p=2*u/(i-e),v=2*u/(r-l),y=(i+e)/(i-e),x=(r+l)/(r-l);let M,A;if(h===ia)M=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(h===Mc)M=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=v,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=ia){const m=this.elements,p=1/(i-e),v=1/(r-l),y=1/(d-u),x=(i+e)*p,M=(r+l)*v;let A,T;if(h===ia)A=(d+u)*y,T=-2*y;else if(h===Mc)A=u*y,T=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=T,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const cs=new Q,di=new Xe,Ex=new Q(0,0,0),Tx=new Q(1,1,1),Na=new Q,Ql=new Q,Yn=new Q,y_=new Xe,x_=new xr;class Di{constructor(e=0,i=0,r=0,l=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],y=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Dn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Dn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return y_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return x_.setFromEuler(this),this.setFromQuaternion(x_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class Hh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bx=0;const M_=new Q,us=new xr,Ji=new Xe,Jl=new Q,Ro=new Q,Ax=new Q,Rx=new xr,E_=new Q(1,0,0),T_=new Q(0,1,0),b_=new Q(0,0,1),A_={type:"added"},Cx={type:"removed"},fs={type:"childadded",child:null},ch={type:"childremoved",child:null};class gn extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new Q,i=new Di,r=new xr,l=new Q(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Xe},normalMatrix:{value:new ue}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return us.setFromAxisAngle(e,i),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,i){return us.setFromAxisAngle(e,i),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(E_,e)}rotateY(e){return this.rotateOnAxis(T_,e)}rotateZ(e){return this.rotateOnAxis(b_,e)}translateOnAxis(e,i){return M_.copy(e).applyQuaternion(this.quaternion),this.position.add(M_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(E_,e)}translateY(e){return this.translateOnAxis(T_,e)}translateZ(e){return this.translateOnAxis(b_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Jl.copy(e):Jl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Ro,Jl,this.up):Ji.lookAt(Jl,Ro,this.up),this.quaternion.setFromRotationMatrix(Ji),l&&(Ji.extractRotation(l.matrixWorld),us.setFromRotationMatrix(Ji),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(A_),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Cx),ch.child=e,this.dispatchEvent(ch),ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(A_),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,Ax),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,Rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const y=m[p];u(e.shapes,y)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),y=d(e.shapes),x=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}gn.DEFAULT_UP=new Q(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new Q,$i=new Q,uh=new Q,ta=new Q,hs=new Q,ds=new Q,R_=new Q,fh=new Q,hh=new Q,dh=new Q;class Ai{constructor(e=new Q,i=new Q,r=new Q){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),pi.subVectors(e,i),l.cross(pi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){pi.subVectors(l,i),$i.subVectors(r,i),uh.subVectors(e,i);const d=pi.dot(pi),h=pi.dot($i),m=pi.dot(uh),p=$i.dot($i),v=$i.dot(uh),y=d*p-h*h;if(y===0)return u.set(0,0,0),null;const x=1/y,M=(p*m-h*v)*x,A=(d*v-h*m)*x;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ta.x),m.addScaledVector(d,ta.y),m.addScaledVector(h,ta.z),m)}static isFrontFacing(e,i,r,l){return pi.subVectors(r,i),$i.subVectors(e,i),pi.cross($i).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),pi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ai.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ai.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;hs.subVectors(l,r),ds.subVectors(u,r),fh.subVectors(e,r);const m=hs.dot(fh),p=ds.dot(fh);if(m<=0&&p<=0)return i.copy(r);hh.subVectors(e,l);const v=hs.dot(hh),y=ds.dot(hh);if(v>=0&&y<=v)return i.copy(l);const x=m*y-v*p;if(x<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(hs,d);dh.subVectors(e,u);const M=hs.dot(dh),A=ds.dot(dh);if(A>=0&&M<=A)return i.copy(u);const T=M*p-m*A;if(T<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(ds,h);const S=v*A-M*y;if(S<=0&&y-v>=0&&M-A>=0)return R_.subVectors(u,l),h=(y-v)/(y-v+(M-A)),i.copy(l).addScaledVector(R_,h);const g=1/(S+T+x);return d=T*g,h=x*g,i.copy(r).addScaledVector(hs,d).addScaledVector(ds,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},$l={h:0,s:0,l:0};function ph(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ye{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ne.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ne.workingColorSpace){if(e=hx(e,1),i=Dn(i,0,1),r=Dn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=ph(d,u,e+1/3),this.g=ph(d,u,e),this.b=ph(d,u,e-1/3)}return Ne.toWorkingColorSpace(this,l),this}setStyle(e,i=Ti){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ti){const r=Cv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=eh(e.r),this.g=eh(e.g),this.b=eh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return Ne.fromWorkingColorSpace(Mn.copy(this),e),Math.round(Dn(Mn.r*255,0,255))*65536+Math.round(Dn(Mn.g*255,0,255))*256+Math.round(Dn(Mn.b*255,0,255))}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.fromWorkingColorSpace(Mn.copy(this),i);const r=Mn.r,l=Mn.g,u=Mn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const y=d-h;switch(p=v<=.5?y/(d+h):y/(2-d-h),d){case r:m=(l-u)/y+(l<u?6:0);break;case l:m=(u-r)/y+2;break;case u:m=(r-l)/y+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(Mn.copy(this),i),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Ti){Ne.fromWorkingColorSpace(Mn.copy(this),e);const i=Mn.r,r=Mn.g,l=Mn.b;return e!==Ti?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+e,Oa.s+i,Oa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Oa),e.getHSL($l);const r=$f(Oa.h,$l.h,i),l=$f(Oa.s,$l.s,i),u=$f(Oa.l,$l.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new ye;ye.NAMES=Cv;let wx=0;class ws extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=No(),this.name="",this.type="Material",this.blending=Ms,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=wh,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==Ga&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ch&&(r.blendSrc=this.blendSrc),this.blendDst!==wh&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==vc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(r.stencilFail=this.stencilFail),this.stencilZFail!==as&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wv extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=pv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new Q,tc=new ee;class wi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=p_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return mx("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)tc.fromBufferAttribute(this,i),tc.applyMatrix3(e),this.setXY(i,tc.x,tc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix3(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix4(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.applyNormalMatrix(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)tn.fromBufferAttribute(this,i),tn.transformDirection(e),this.setXYZ(i,tn.x,tn.y,tn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),u=Bn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==p_&&(e.usage=this.usage),e}}class Dv extends wi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Uv extends wi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class gi extends wi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Dx=0;const ri=new Xe,mh=new gn,ps=new Q,jn=new Oo,Co=new Oo,un=new Q;class Ui extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bv(e)?Uv:Dv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ue().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,i,r){return ri.makeTranslation(e,i,r),this.applyMatrix4(ri),this}scale(e,i,r){return ri.makeScale(e,i,r),this.applyMatrix4(ri),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new gi(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];jn.setFromBufferAttribute(u),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Co.setFromBufferAttribute(h),this.morphTargetsRelative?(un.addVectors(jn.min,Co.min),jn.expandByPoint(un),un.addVectors(jn.max,Co.max),jn.expandByPoint(un)):(jn.expandByPoint(Co.min),jn.expandByPoint(Co.max))}jn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)un.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(un));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)un.fromBufferAttribute(h,p),m&&(ps.fromBufferAttribute(e,p),un.add(ps)),l=Math.max(l,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let it=0;it<r.count;it++)h[it]=new Q,m[it]=new Q;const p=new Q,v=new Q,y=new Q,x=new ee,M=new ee,A=new ee,T=new Q,S=new Q;function g(it,U,C){p.fromBufferAttribute(r,it),v.fromBufferAttribute(r,U),y.fromBufferAttribute(r,C),x.fromBufferAttribute(u,it),M.fromBufferAttribute(u,U),A.fromBufferAttribute(u,C),v.sub(p),y.sub(p),M.sub(x),A.sub(x);const J=1/(M.x*A.y-A.x*M.y);isFinite(J)&&(T.copy(v).multiplyScalar(A.y).addScaledVector(y,-M.y).multiplyScalar(J),S.copy(y).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(J),h[it].add(T),h[U].add(T),h[C].add(T),m[it].add(S),m[U].add(S),m[C].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let it=0,U=L.length;it<U;++it){const C=L[it],J=C.start,ct=C.count;for(let G=J,pt=J+ct;G<pt;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const D=new Q,P=new Q,Y=new Q,I=new Q;function N(it){Y.fromBufferAttribute(l,it),I.copy(Y);const U=h[it];D.copy(U),D.sub(Y.multiplyScalar(Y.dot(U))).normalize(),P.crossVectors(I,U);const J=P.dot(m[it])<0?-1:1;d.setXYZW(it,D.x,D.y,D.z,J)}for(let it=0,U=L.length;it<U;++it){const C=L[it],J=C.start,ct=C.count;for(let G=J,pt=J+ct;G<pt;G+=3)N(e.getX(G+0)),N(e.getX(G+1)),N(e.getX(G+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new Q,u=new Q,d=new Q,h=new Q,m=new Q,p=new Q,v=new Q,y=new Q;if(e)for(let x=0,M=e.count;x<M;x+=3){const A=e.getX(x+0),T=e.getX(x+1),S=e.getX(x+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),v.subVectors(d,u),y.subVectors(l,u),v.cross(y),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,S),h.add(v),m.add(v),p.add(v),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),v.subVectors(d,u),y.subVectors(l,u),v.cross(y),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)un.fromBufferAttribute(e,i),un.normalize(),e.setXYZ(i,un.x,un.y,un.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,y=h.normalized,x=new p.constructor(m.length*v);let M=0,A=0;for(let T=0,S=m.length;T<S;T++){h.isInterleavedBufferAttribute?M=m[T]*h.data.stride+h.offset:M=m[T]*v;for(let g=0;g<v;g++)x[A++]=p[M++]}return new wi(x,v,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ui,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,y=p.length;v<y;v++){const x=p[v],M=e(x,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let y=0,x=p.length;y<x;y++){const M=p[y];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],y=u[p];for(let x=0,M=y.length;x<M;x++)v.push(y[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const y=d[p];this.addGroup(y.start,y.count,y.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const C_=new Xe,fr=new Dc,ec=new wc,w_=new Q,ms=new Q,gs=new Q,_s=new Q,gh=new Q,nc=new Q,ic=new ee,ac=new ee,rc=new ee,D_=new Q,U_=new Q,L_=new Q,sc=new Q,oc=new Q;class Ci extends gn{constructor(e=new Ui,i=new wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){nc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],y=u[m];v!==0&&(gh.fromBufferAttribute(y,e),d?nc.addScaledVector(gh,v):nc.addScaledVector(gh.sub(i),v))}i.add(nc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ec.copy(r.boundingSphere),ec.applyMatrix4(u),fr.copy(e.ray).recast(e.near),!(ec.containsPoint(fr.origin)===!1&&(fr.intersectSphere(ec,w_)===null||fr.origin.distanceToSquared(w_)>(e.far-e.near)**2))&&(C_.copy(u).invert(),fr.copy(e.ray).applyMatrix4(C_),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,fr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,y=u.attributes.normal,x=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,T=x.length;A<T;A++){const S=x[A],g=d[S.materialIndex],L=Math.max(S.start,M.start),D=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let P=L,Y=D;P<Y;P+=3){const I=h.getX(P),N=h.getX(P+1),it=h.getX(P+2);l=lc(this,g,e,r,p,v,y,I,N,it),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let S=A,g=T;S<g;S+=3){const L=h.getX(S),D=h.getX(S+1),P=h.getX(S+2);l=lc(this,d,e,r,p,v,y,L,D,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,T=x.length;A<T;A++){const S=x[A],g=d[S.materialIndex],L=Math.max(S.start,M.start),D=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let P=L,Y=D;P<Y;P+=3){const I=P,N=P+1,it=P+2;l=lc(this,g,e,r,p,v,y,I,N,it),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let S=A,g=T;S<g;S+=3){const L=S,D=S+1,P=S+2;l=lc(this,d,e,r,p,v,y,L,D,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function Ux(o,e,i,r,l,u,d,h){let m;if(e.side===In?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===Ga,h),m===null)return null;oc.copy(h),oc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(oc);return p<i.near||p>i.far?null:{distance:p,point:oc.clone(),object:o}}function lc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,ms),o.getVertexPosition(m,gs),o.getVertexPosition(p,_s);const v=Ux(o,e,i,r,ms,gs,_s,sc);if(v){l&&(ic.fromBufferAttribute(l,h),ac.fromBufferAttribute(l,m),rc.fromBufferAttribute(l,p),v.uv=Ai.getInterpolation(sc,ms,gs,_s,ic,ac,rc,new ee)),u&&(ic.fromBufferAttribute(u,h),ac.fromBufferAttribute(u,m),rc.fromBufferAttribute(u,p),v.uv1=Ai.getInterpolation(sc,ms,gs,_s,ic,ac,rc,new ee)),d&&(D_.fromBufferAttribute(d,h),U_.fromBufferAttribute(d,m),L_.fromBufferAttribute(d,p),v.normal=Ai.getInterpolation(sc,ms,gs,_s,D_,U_,L_,new Q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new Q,materialIndex:0};Ai.getNormal(ms,gs,_s,y.normal),v.face=y}return v}class Ds extends Ui{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],y=[];let x=0,M=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new gi(p,3)),this.setAttribute("normal",new gi(v,3)),this.setAttribute("uv",new gi(y,2));function A(T,S,g,L,D,P,Y,I,N,it,U){const C=P/N,J=Y/it,ct=P/2,G=Y/2,pt=I/2,ht=N+1,F=it+1;let j=0,X=0;const _t=new Q;for(let mt=0;mt<F;mt++){const O=mt*J-G;for(let nt=0;nt<ht;nt++){const Mt=nt*C-ct;_t[T]=Mt*L,_t[S]=O*D,_t[g]=pt,p.push(_t.x,_t.y,_t.z),_t[T]=0,_t[S]=0,_t[g]=I>0?1:-1,v.push(_t.x,_t.y,_t.z),y.push(nt/N),y.push(1-mt/it),j+=1}}for(let mt=0;mt<it;mt++)for(let O=0;O<N;O++){const nt=x+O+ht*mt,Mt=x+O+ht*(mt+1),V=x+(O+1)+ht*(mt+1),ut=x+(O+1)+ht*mt;m.push(nt,Mt,ut),m.push(Mt,V,ut),X+=6}h.addGroup(M,X,U),M+=X,x+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function wn(o){const e={};for(let i=0;i<o.length;i++){const r=Cs(o[i]);for(const l in r)e[l]=r[l]}return e}function Lx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Lv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const Nx={clone:Cs,merge:wn};var Ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ox,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=Lx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Nv extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ia}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new Q,N_=new ee,O_=new ee;class si extends Nv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Oh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oh*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z)}getViewSize(e,i){return this.getViewBounds(e,N_,O_),i.subVectors(O_,N_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(gc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,Ss=1;class zx extends gn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(vs,Ss,e,i);l.layers=this.layers,this.add(l);const u=new si(vs,Ss,e,i);u.layers=this.layers,this.add(u);const d=new si(vs,Ss,e,i);d.layers=this.layers,this.add(d);const h=new si(vs,Ss,e,i);h.layers=this.layers,this.add(h);const m=new si(vs,Ss,e,i);m.layers=this.layers,this.add(m);const p=new si(vs,Ss,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Mc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(y,x,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Ov extends Fn{constructor(e,i,r,l,u,d,h,m,p,v){e=e!==void 0?e:[],i=i!==void 0?i:bs,super(e,i,r,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bx extends yr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Ov(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:mi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ds(5,5,5),u=new Xa({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Fa});u.uniforms.tEquirect.value=i;const d=new Ci(l,u),h=i.minFilter;return i.minFilter===Sr&&(i.minFilter=mi),new zx(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}const _h=new Q,Ix=new Q,Fx=new ue;class za{constructor(e=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=_h.subVectors(r,i).cross(Ix.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(_h),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Fx.getNormalMatrix(e),l=this.coplanarPoint(_h).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new wc,cc=new Q;class Gh{constructor(e=new za,i=new za,r=new za,l=new za,u=new za,d=new za){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ia){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],v=l[5],y=l[6],x=l[7],M=l[8],A=l[9],T=l[10],S=l[11],g=l[12],L=l[13],D=l[14],P=l[15];if(r[0].setComponents(m-u,x-p,S-M,P-g).normalize(),r[1].setComponents(m+u,x+p,S+M,P+g).normalize(),r[2].setComponents(m+d,x+v,S+A,P+L).normalize(),r[3].setComponents(m-d,x-v,S-A,P-L).normalize(),r[4].setComponents(m-h,x-y,S-T,P-D).normalize(),i===ia)r[5].setComponents(m+h,x+y,S+T,P+D).normalize();else if(i===Mc)r[5].setComponents(h,y,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(cc.x=l.normal.x>0?e.max.x:e.min.x,cc.y=l.normal.y>0?e.max.y:e.min.y,cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pv(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Hx(o){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,y=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:y}}function r(h,m,p){const v=m.array,y=m._updateRange,x=m.updateRanges;if(o.bindBuffer(p,h),y.count===-1&&x.length===0&&o.bufferSubData(p,0,v),x.length!==0){for(let M=0,A=x.length;M<A;M++){const T=x[M];o.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}m.clearUpdateRanges()}y.count!==-1&&(o.bufferSubData(p,y.offset*v.BYTES_PER_ELEMENT,v,y.offset,y.count),y.count=-1),m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}class Uc extends Ui{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,y=e/h,x=i/m,M=[],A=[],T=[],S=[];for(let g=0;g<v;g++){const L=g*x-d;for(let D=0;D<p;D++){const P=D*y-u;A.push(P,-L,0),T.push(0,0,1),S.push(D/h),S.push(1-g/m)}}for(let g=0;g<m;g++)for(let L=0;L<h;L++){const D=L+p*g,P=L+p*(g+1),Y=L+1+p*(g+1),I=L+1+p*g;M.push(D,P,I),M.push(P,Y,I)}this.setIndex(M),this.setAttribute("position",new gi(A,3)),this.setAttribute("normal",new gi(T,3)),this.setAttribute("uv",new gi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$x=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,SM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,OM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$M=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,aE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ZE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Gx,alphahash_pars_fragment:Vx,alphamap_fragment:Xx,alphamap_pars_fragment:kx,alphatest_fragment:Wx,alphatest_pars_fragment:qx,aomap_fragment:Yx,aomap_pars_fragment:jx,batching_pars_vertex:Zx,batching_vertex:Kx,begin_vertex:Qx,beginnormal_vertex:Jx,bsdfs:$x,iridescence_fragment:tM,bumpmap_pars_fragment:eM,clipping_planes_fragment:nM,clipping_planes_pars_fragment:iM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:rM,color_fragment:sM,color_pars_fragment:oM,color_pars_vertex:lM,color_vertex:cM,common:uM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:hM,displacementmap_pars_vertex:dM,displacementmap_vertex:pM,emissivemap_fragment:mM,emissivemap_pars_fragment:gM,colorspace_fragment:_M,colorspace_pars_fragment:vM,envmap_fragment:SM,envmap_common_pars_fragment:yM,envmap_pars_fragment:xM,envmap_pars_vertex:MM,envmap_physical_pars_fragment:NM,envmap_vertex:EM,fog_vertex:TM,fog_pars_vertex:bM,fog_fragment:AM,fog_pars_fragment:RM,gradientmap_pars_fragment:CM,lightmap_pars_fragment:wM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:UM,lights_pars_begin:LM,lights_toon_fragment:OM,lights_toon_pars_fragment:PM,lights_phong_fragment:zM,lights_phong_pars_fragment:BM,lights_physical_fragment:IM,lights_physical_pars_fragment:FM,lights_fragment_begin:HM,lights_fragment_maps:GM,lights_fragment_end:VM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:kM,logdepthbuf_pars_vertex:WM,logdepthbuf_vertex:qM,map_fragment:YM,map_pars_fragment:jM,map_particle_fragment:ZM,map_particle_pars_fragment:KM,metalnessmap_fragment:QM,metalnessmap_pars_fragment:JM,morphinstance_vertex:$M,morphcolor_vertex:tE,morphnormal_vertex:eE,morphtarget_pars_vertex:nE,morphtarget_vertex:iE,normal_fragment_begin:aE,normal_fragment_maps:rE,normal_pars_fragment:sE,normal_pars_vertex:oE,normal_vertex:lE,normalmap_pars_fragment:cE,clearcoat_normal_fragment_begin:uE,clearcoat_normal_fragment_maps:fE,clearcoat_pars_fragment:hE,iridescence_pars_fragment:dE,opaque_fragment:pE,packing:mE,premultiplied_alpha_fragment:gE,project_vertex:_E,dithering_fragment:vE,dithering_pars_fragment:SE,roughnessmap_fragment:yE,roughnessmap_pars_fragment:xE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:EE,shadowmap_vertex:TE,shadowmask_pars_fragment:bE,skinbase_vertex:AE,skinning_pars_vertex:RE,skinning_vertex:CE,skinnormal_vertex:wE,specularmap_fragment:DE,specularmap_pars_fragment:UE,tonemapping_fragment:LE,tonemapping_pars_fragment:NE,transmission_fragment:OE,transmission_pars_fragment:PE,uv_pars_fragment:zE,uv_pars_vertex:BE,uv_vertex:IE,worldpos_vertex:FE,background_vert:HE,background_frag:GE,backgroundCube_vert:VE,backgroundCube_frag:XE,cube_vert:kE,cube_frag:WE,depth_vert:qE,depth_frag:YE,distanceRGBA_vert:jE,distanceRGBA_frag:ZE,equirect_vert:KE,equirect_frag:QE,linedashed_vert:JE,linedashed_frag:$E,meshbasic_vert:tT,meshbasic_frag:eT,meshlambert_vert:nT,meshlambert_frag:iT,meshmatcap_vert:aT,meshmatcap_frag:rT,meshnormal_vert:sT,meshnormal_frag:oT,meshphong_vert:lT,meshphong_frag:cT,meshphysical_vert:uT,meshphysical_frag:fT,meshtoon_vert:hT,meshtoon_frag:dT,points_vert:pT,points_frag:mT,shadow_vert:gT,shadow_frag:_T,sprite_vert:vT,sprite_frag:ST},Dt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},bi={basic:{uniforms:wn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:wn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ye(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:wn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:wn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:wn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ye(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:wn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:wn([Dt.points,Dt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:wn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:wn([Dt.common,Dt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:wn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:wn([Dt.sprite,Dt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:wn([Dt.common,Dt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:wn([Dt.lights,Dt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};bi.physical={uniforms:wn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const uc={r:0,b:0,g:0},dr=new Di,yT=new Xe;function xT(o,e,i,r,l,u,d){const h=new ye(0);let m=u===!0?0:1,p,v,y=null,x=0,M=null;function A(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function T(L){let D=!1;const P=A(L);P===null?g(h,m):P&&P.isColor&&(g(P,1),D=!0);const Y=o.xr.getEnvironmentBlendMode();Y==="additive"?r.buffers.color.setClear(0,0,0,1,d):Y==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil)}function S(L,D){const P=A(D);P&&(P.isCubeTexture||P.mapping===Ac)?(v===void 0&&(v=new Ci(new Ds(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Cs(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(Y,I,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),dr.copy(D.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),v.material.uniforms.envMap.value=P,v.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(yT.makeRotationFromEuler(dr)),v.material.toneMapped=Ne.getTransfer(P.colorSpace)!==Fe,(y!==P||x!==P.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,y=P,x=P.version,M=o.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Ci(new Uc(2,2),new Xa({name:"BackgroundMaterial",uniforms:Cs(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(P.colorSpace)!==Fe,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(y!==P||x!==P.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,y=P,x=P.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function g(L,D){L.getRGB(uc,Lv(o)),r.buffers.color.setClear(uc.r,uc.g,uc.b,D,d)}return{getClearColor:function(){return h},setClearColor:function(L,D=1){h.set(L),m=D,g(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,g(h,m)},render:T,addToRenderList:S}}function MT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,d=!1;function h(C,J,ct,G,pt){let ht=!1;const F=y(G,ct,J);u!==F&&(u=F,p(u.object)),ht=M(C,G,ct,pt),ht&&A(C,G,ct,pt),pt!==null&&e.update(pt,o.ELEMENT_ARRAY_BUFFER),(ht||d)&&(d=!1,P(C,J,ct,G),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function y(C,J,ct){const G=ct.wireframe===!0;let pt=r[C.id];pt===void 0&&(pt={},r[C.id]=pt);let ht=pt[J.id];ht===void 0&&(ht={},pt[J.id]=ht);let F=ht[G];return F===void 0&&(F=x(m()),ht[G]=F),F}function x(C){const J=[],ct=[],G=[];for(let pt=0;pt<i;pt++)J[pt]=0,ct[pt]=0,G[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ct,attributeDivisors:G,object:C,attributes:{},index:null}}function M(C,J,ct,G){const pt=u.attributes,ht=J.attributes;let F=0;const j=ct.getAttributes();for(const X in j)if(j[X].location>=0){const mt=pt[X];let O=ht[X];if(O===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),mt===void 0||mt.attribute!==O||O&&mt.data!==O.data)return!0;F++}return u.attributesNum!==F||u.index!==G}function A(C,J,ct,G){const pt={},ht=J.attributes;let F=0;const j=ct.getAttributes();for(const X in j)if(j[X].location>=0){let mt=ht[X];mt===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(mt=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(mt=C.instanceColor));const O={};O.attribute=mt,mt&&mt.data&&(O.data=mt.data),pt[X]=O,F++}u.attributes=pt,u.attributesNum=F,u.index=G}function T(){const C=u.newAttributes;for(let J=0,ct=C.length;J<ct;J++)C[J]=0}function S(C){g(C,0)}function g(C,J){const ct=u.newAttributes,G=u.enabledAttributes,pt=u.attributeDivisors;ct[C]=1,G[C]===0&&(o.enableVertexAttribArray(C),G[C]=1),pt[C]!==J&&(o.vertexAttribDivisor(C,J),pt[C]=J)}function L(){const C=u.newAttributes,J=u.enabledAttributes;for(let ct=0,G=J.length;ct<G;ct++)J[ct]!==C[ct]&&(o.disableVertexAttribArray(ct),J[ct]=0)}function D(C,J,ct,G,pt,ht,F){F===!0?o.vertexAttribIPointer(C,J,ct,pt,ht):o.vertexAttribPointer(C,J,ct,G,pt,ht)}function P(C,J,ct,G){T();const pt=G.attributes,ht=ct.getAttributes(),F=J.defaultAttributeValues;for(const j in ht){const X=ht[j];if(X.location>=0){let _t=pt[j];if(_t===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor)),_t!==void 0){const mt=_t.normalized,O=_t.itemSize,nt=e.get(_t);if(nt===void 0)continue;const Mt=nt.buffer,V=nt.type,ut=nt.bytesPerElement,Et=V===o.INT||V===o.UNSIGNED_INT||_t.gpuType===_v;if(_t.isInterleavedBufferAttribute){const yt=_t.data,Wt=yt.stride,zt=_t.offset;if(yt.isInstancedInterleavedBuffer){for(let Z=0;Z<X.locationSize;Z++)g(X.location+Z,yt.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Z=0;Z<X.locationSize;Z++)S(X.location+Z);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let Z=0;Z<X.locationSize;Z++)D(X.location+Z,O/X.locationSize,V,mt,Wt*ut,(zt+O/X.locationSize*Z)*ut,Et)}else{if(_t.isInstancedBufferAttribute){for(let yt=0;yt<X.locationSize;yt++)g(X.location+yt,_t.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let yt=0;yt<X.locationSize;yt++)S(X.location+yt);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let yt=0;yt<X.locationSize;yt++)D(X.location+yt,O/X.locationSize,V,mt,O*ut,O/X.locationSize*yt*ut,Et)}}else if(F!==void 0){const mt=F[j];if(mt!==void 0)switch(mt.length){case 2:o.vertexAttrib2fv(X.location,mt);break;case 3:o.vertexAttrib3fv(X.location,mt);break;case 4:o.vertexAttrib4fv(X.location,mt);break;default:o.vertexAttrib1fv(X.location,mt)}}}}L()}function Y(){it();for(const C in r){const J=r[C];for(const ct in J){const G=J[ct];for(const pt in G)v(G[pt].object),delete G[pt];delete J[ct]}delete r[C]}}function I(C){if(r[C.id]===void 0)return;const J=r[C.id];for(const ct in J){const G=J[ct];for(const pt in G)v(G[pt].object),delete G[pt];delete J[ct]}delete r[C.id]}function N(C){for(const J in r){const ct=r[J];if(ct[C.id]===void 0)continue;const G=ct[C.id];for(const pt in G)v(G[pt].object),delete G[pt];delete ct[C.id]}}function it(){U(),d=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:it,resetDefaultState:U,dispose:Y,releaseStatesOfGeometry:I,releaseStatesOfProgram:N,initAttributes:T,enableAttribute:S,disableUnusedAttributes:L}}function ET(o,e,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,y){y!==0&&(o.drawArraysInstanced(r,p,v,y),i.update(v,r,y))}function h(p,v,y){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<y;M++)this.render(p[M],v[M]);else{x.multiDrawArraysWEBGL(r,p,0,v,0,y);let M=0;for(let A=0;A<y;A++)M+=v[A];i.update(M,r,1)}}function m(p,v,y,x){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],v[A],x[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,y);let A=0;for(let T=0;T<y;T++)A+=v[T];for(let T=0;T<x.length;T++)i.update(A,r,x[T])}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function TT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Ri&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const N=I===Rc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Va&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ia&&!N)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const y=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),g=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=M>0,Y=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:y,maxTextures:x,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:T,maxAttributes:S,maxVertexUniforms:g,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:P,maxSamples:Y}}function bT(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new za,h=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const M=y.length!==0||x||r!==0||l;return l=x,r=y.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,x){i=v(y,x,0)},this.setState=function(y,x,M){const A=y.clippingPlanes,T=y.clipIntersection,S=y.clipShadows,g=o.get(y);if(!l||A===null||A.length===0||u&&!S)u?v(null):p();else{const L=u?0:r,D=L*4;let P=g.clippingState||null;m.value=P,P=v(A,x,D,M);for(let Y=0;Y!==D;++Y)P[Y]=i[Y];g.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,x,M,A){const T=y!==null?y.length:0;let S=null;if(T!==0){if(S=m.value,A!==!0||S===null){const g=M+T*4,L=x.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<g)&&(S=new Float32Array(g));for(let D=0,P=M;D!==T;++D,P+=4)d.copy(y[D]).applyMatrix4(L,h),d.normal.toArray(S,P),S[P+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function AT(o){let e=new WeakMap;function i(d,h){return h===Dh?d.mapping=bs:h===Uh&&(d.mapping=As),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Dh||h===Uh)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Bx(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class zv extends Nv{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const xs=4,P_=[.125,.215,.35,.446,.526,.582],_r=20,vh=new zv,z_=new ye;let Sh=null,yh=0,xh=0,Mh=!1;const mr=(1+Math.sqrt(5))/2,ys=1/mr,B_=[new Q(-mr,ys,0),new Q(mr,ys,0),new Q(-ys,0,mr),new Q(ys,0,mr),new Q(0,mr,-ys),new Q(0,mr,ys),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class I_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){Sh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,yh,xh),this._renderer.xr.enabled=Mh,e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===bs||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Rc,format:Ri,colorSpace:ka,depthBuffer:!1},l=F_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RT(u)),this._blurMaterial=CT(u,e,i)}return l}_compileMaterial(e){const i=new Ci(this._lodPlanes[0],e);this._renderer.compile(i,vh)}_sceneToCubeUV(e,i,r,l){const h=new si(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,x=v.toneMapping;v.getClearColor(z_),v.toneMapping=Ha,v.autoClear=!1;const M=new wv({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),A=new Ci(new Ds,M);let T=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,T=!0):(M.color.copy(z_),T=!0);for(let g=0;g<6;g++){const L=g%3;L===0?(h.up.set(0,m[g],0),h.lookAt(p[g],0,0)):L===1?(h.up.set(0,0,m[g]),h.lookAt(0,p[g],0)):(h.up.set(0,m[g],0),h.lookAt(0,0,p[g]));const D=this._cubeSize;fc(l,L*D,g>2?D:0,D,D),v.setRenderTarget(l),T&&v.render(A,h),v.render(e,h)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=x,v.autoClear=y,e.background=S}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===bs||e.mapping===As;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=G_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Ci(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;fc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,vh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=B_[(l-u-1)%B_.length];this._blur(e,u-1,u,d,h)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,y=new Ci(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*_r-1),T=u/A,S=isFinite(u)?1+Math.floor(v*T):_r;S>_r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${_r}`);const g=[];let L=0;for(let N=0;N<_r;++N){const it=N/T,U=Math.exp(-it*it/2);g.push(U),N===0?L+=U:N<S&&(L+=2*U)}for(let N=0;N<g.length;N++)g[N]=g[N]/L;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=g,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:D}=this;x.dTheta.value=A,x.mipInt.value=D-r;const P=this._sizeLods[l],Y=3*P*(l>D-xs?l-D+xs:0),I=4*(this._cubeSize-P);fc(i,Y,I,3*P,2*P),m.setRenderTarget(i),m.render(y,vh)}}function RT(o){const e=[],i=[],r=[];let l=o;const u=o-xs+1+P_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-xs?m=P_[d-o+xs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),v=-p,y=1+p,x=[v,v,y,v,y,y,v,v,y,y,v,y],M=6,A=6,T=3,S=2,g=1,L=new Float32Array(T*A*M),D=new Float32Array(S*A*M),P=new Float32Array(g*A*M);for(let I=0;I<M;I++){const N=I%3*2/3-1,it=I>2?0:-1,U=[N,it,0,N+2/3,it,0,N+2/3,it+1,0,N,it,0,N+2/3,it+1,0,N,it+1,0];L.set(U,T*A*I),D.set(x,S*A*I);const C=[I,I,I,I,I,I];P.set(C,g*A*I)}const Y=new Ui;Y.setAttribute("position",new wi(L,T)),Y.setAttribute("uv",new wi(D,S)),Y.setAttribute("faceIndex",new wi(P,g)),e.push(Y),l>xs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function F_(o,e,i){const r=new yr(o,e,i);return r.texture.mapping=Ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function CT(o,e,i){const r=new Float32Array(_r),l=new Q(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function H_(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function G_(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wT(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Dh||m===Uh,v=m===bs||m===As;if(p||v){let y=e.get(h);const x=y!==void 0?y.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new I_(o)),y=p?i.fromEquirectangular(h,y):i.fromCubemap(h,y),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),y.texture;if(y!==void 0)return y.texture;{const M=h.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new I_(o)),y=p?i.fromEquirectangular(h):i.fromCubemap(h),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),h.addEventListener("dispose",u),y.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function DT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function UT(o,e,i,r){const l={},u=new WeakMap;function d(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);for(const A in x.morphAttributes){const T=x.morphAttributes[A];for(let S=0,g=T.length;S<g;S++)e.remove(T[S])}x.removeEventListener("dispose",d),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(y,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(y){const x=y.attributes;for(const A in x)e.update(x[A],o.ARRAY_BUFFER);const M=y.morphAttributes;for(const A in M){const T=M[A];for(let S=0,g=T.length;S<g;S++)e.update(T[S],o.ARRAY_BUFFER)}}function p(y){const x=[],M=y.index,A=y.attributes.position;let T=0;if(M!==null){const L=M.array;T=M.version;for(let D=0,P=L.length;D<P;D+=3){const Y=L[D+0],I=L[D+1],N=L[D+2];x.push(Y,I,I,N,N,Y)}}else if(A!==void 0){const L=A.array;T=A.version;for(let D=0,P=L.length/3-1;D<P;D+=3){const Y=D+0,I=D+1,N=D+2;x.push(Y,I,I,N,N,Y)}}else return;const S=new(bv(x)?Uv:Dv)(x,1);S.version=T;const g=u.get(y);g&&e.remove(g),u.set(y,S)}function v(y){const x=u.get(y);if(x){const M=y.index;M!==null&&x.version<M.version&&p(y)}else p(y);return u.get(y)}return{get:h,update:m,getWireframeAttribute:v}}function LT(o,e,i){let r;function l(x){r=x}let u,d;function h(x){u=x.type,d=x.bytesPerElement}function m(x,M){o.drawElements(r,M,u,x*d),i.update(M,r,1)}function p(x,M,A){A!==0&&(o.drawElementsInstanced(r,M,u,x*d,A),i.update(M,r,A))}function v(x,M,A){if(A===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let S=0;S<A;S++)this.render(x[S]/d,M[S]);else{T.multiDrawElementsWEBGL(r,M,0,u,x,0,A);let S=0;for(let g=0;g<A;g++)S+=M[g];i.update(S,r,1)}}function y(x,M,A,T){if(A===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<x.length;g++)p(x[g]/d,M[g],T[g]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,T,0,A);let g=0;for(let L=0;L<A;L++)g+=M[L];for(let L=0;L<T.length;L++)i.update(g,r,T[L])}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function NT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function OT(o,e,i){const r=new WeakMap,l=new fn;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=v!==void 0?v.length:0;let x=r.get(h);if(x===void 0||x.count!==y){let C=function(){it.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const A=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,g=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let P=0;A===!0&&(P=1),T===!0&&(P=2),S===!0&&(P=3);let Y=h.attributes.position.count*P,I=1;Y>e.maxTextureSize&&(I=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const N=new Float32Array(Y*I*4*y),it=new Rv(N,Y,I,y);it.type=Ia,it.needsUpdate=!0;const U=P*4;for(let J=0;J<y;J++){const ct=g[J],G=L[J],pt=D[J],ht=Y*I*4*J;for(let F=0;F<ct.count;F++){const j=F*U;A===!0&&(l.fromBufferAttribute(ct,F),N[ht+j+0]=l.x,N[ht+j+1]=l.y,N[ht+j+2]=l.z,N[ht+j+3]=0),T===!0&&(l.fromBufferAttribute(G,F),N[ht+j+4]=l.x,N[ht+j+5]=l.y,N[ht+j+6]=l.z,N[ht+j+7]=0),S===!0&&(l.fromBufferAttribute(pt,F),N[ht+j+8]=l.x,N[ht+j+9]=l.y,N[ht+j+10]=l.z,N[ht+j+11]=pt.itemSize===4?l.w:1)}}x={count:y,texture:it,size:new ee(Y,I)},r.set(h,x),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let S=0;S<p.length;S++)A+=p[S];const T=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function PT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,y=e.get(m,v);if(l.get(y)!==p&&(e.update(y),l.set(y,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return y}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}class Bv extends Fn{constructor(e,i,r,l,u,d,h,m,p,v){if(v=v!==void 0?v:Es,v!==Es&&v!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Es&&(r=Rs),r===void 0&&v===Uo&&(r=Lo),super(null,l,u,d,h,m,v,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:oi,this.minFilter=m!==void 0?m:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Iv=new Fn,Fv=new Bv(1,1);Fv.compareFunction=Tv;const Hv=new Rv,Gv=new xx,Vv=new Ov,V_=[],X_=[],k_=new Float32Array(16),W_=new Float32Array(9),q_=new Float32Array(4);function Us(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=V_[l];if(u===void 0&&(u=new Float32Array(l),V_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function on(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function ln(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Lc(o,e){let i=X_[e];i===void 0&&(i=new Int32Array(e),X_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function zT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2fv(this.addr,e),ln(i,e)}}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(on(i,e))return;o.uniform3fv(this.addr,e),ln(i,e)}}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4fv(this.addr,e),ln(i,e)}}function HT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;q_.set(r),o.uniformMatrix2fv(this.addr,!1,q_),ln(i,r)}}function GT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;W_.set(r),o.uniformMatrix3fv(this.addr,!1,W_),ln(i,r)}}function VT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;k_.set(r),o.uniformMatrix4fv(this.addr,!1,k_),ln(i,r)}}function XT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function kT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2iv(this.addr,e),ln(i,e)}}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3iv(this.addr,e),ln(i,e)}}function qT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4iv(this.addr,e),ln(i,e)}}function YT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;o.uniform2uiv(this.addr,e),ln(i,e)}}function ZT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;o.uniform3uiv(this.addr,e),ln(i,e)}}function KT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;o.uniform4uiv(this.addr,e),ln(i,e)}}function QT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?Fv:Iv;i.setTexture2D(e||u,l)}function JT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Gv,l)}function $T(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Vv,l)}function tb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Hv,l)}function eb(o){switch(o){case 5126:return zT;case 35664:return BT;case 35665:return IT;case 35666:return FT;case 35674:return HT;case 35675:return GT;case 35676:return VT;case 5124:case 35670:return XT;case 35667:case 35671:return kT;case 35668:case 35672:return WT;case 35669:case 35673:return qT;case 5125:return YT;case 36294:return jT;case 36295:return ZT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return tb}}function nb(o,e){o.uniform1fv(this.addr,e)}function ib(o,e){const i=Us(e,this.size,2);o.uniform2fv(this.addr,i)}function ab(o,e){const i=Us(e,this.size,3);o.uniform3fv(this.addr,i)}function rb(o,e){const i=Us(e,this.size,4);o.uniform4fv(this.addr,i)}function sb(o,e){const i=Us(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ob(o,e){const i=Us(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function lb(o,e){const i=Us(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function cb(o,e){o.uniform1iv(this.addr,e)}function ub(o,e){o.uniform2iv(this.addr,e)}function fb(o,e){o.uniform3iv(this.addr,e)}function hb(o,e){o.uniform4iv(this.addr,e)}function db(o,e){o.uniform1uiv(this.addr,e)}function pb(o,e){o.uniform2uiv(this.addr,e)}function mb(o,e){o.uniform3uiv(this.addr,e)}function gb(o,e){o.uniform4uiv(this.addr,e)}function _b(o,e,i){const r=this.cache,l=e.length,u=Lc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Iv,u[d])}function vb(o,e,i){const r=this.cache,l=e.length,u=Lc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Gv,u[d])}function Sb(o,e,i){const r=this.cache,l=e.length,u=Lc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Vv,u[d])}function yb(o,e,i){const r=this.cache,l=e.length,u=Lc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Hv,u[d])}function xb(o){switch(o){case 5126:return nb;case 35664:return ib;case 35665:return ab;case 35666:return rb;case 35674:return sb;case 35675:return ob;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return fb;case 35669:case 35673:return hb;case 5125:return db;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return yb}}class Mb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=eb(i.type)}}class Eb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=xb(i.type)}}class Tb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const Eh=/(\w+)(\])?(\[|\.)?/g;function Y_(o,e){o.seq.push(e),o.map[e.id]=e}function bb(o,e,i){const r=o.name,l=r.length;for(Eh.lastIndex=0;;){const u=Eh.exec(r),d=Eh.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Y_(i,p===void 0?new Mb(h,o,e):new Eb(h,o,e));break}else{let y=i.map[h];y===void 0&&(y=new Tb(h),Y_(i,y)),i=y}}}class _c{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);bb(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function j_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Ab=37297;let Rb=0;function Cb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}function wb(o){const e=Ne.getPrimaries(Ne.workingColorSpace),i=Ne.getPrimaries(o);let r;switch(e===i?r="":e===xc&&i===yc?r="LinearDisplayP3ToLinearSRGB":e===yc&&i===xc&&(r="LinearSRGBToLinearDisplayP3"),o){case ka:case Cc:return[r,"LinearTransferOETF"];case Ti:case Fh:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function Z_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Cb(o.getShaderSource(e),d)}else return l}function Db(o,e){const i=wb(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function Ub(o,e){let i;switch(e){case Iy:i="Linear";break;case Fy:i="Reinhard";break;case Hy:i="OptimizedCineon";break;case Gy:i="ACESFilmic";break;case Xy:i="AgX";break;case ky:i="Neutral";break;case Vy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Lb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function Nb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Ob(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Do(o){return o!==""}function K_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Q_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(o){return o.replace(Pb,Bb)}const zb=new Map;function Bb(o,e){let i=ce[e];if(i===void 0){const r=zb.get(e);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ph(i)}const Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J_(o){return o.replace(Ib,Fb)}function Fb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function $_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===dv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===uy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ea&&(e="SHADOWMAP_TYPE_VSM"),e}function Gb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case bs:case As:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vb(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===As&&(e="ENVMAP_MODE_REFRACTION"),e}function Xb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case pv:e="ENVMAP_BLENDING_MULTIPLY";break;case zy:e="ENVMAP_BLENDING_MIX";break;case By:e="ENVMAP_BLENDING_ADD";break}return e}function kb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Wb(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=Hb(i),p=Gb(i),v=Vb(i),y=Xb(i),x=kb(i),M=Lb(i),A=Nb(u),T=l.createProgram();let S,g,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Do).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Do).join(`
`),g.length>0&&(g+=`
`)):(S=[$_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),g=[$_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?ce.tonemapping_pars_fragment:"",i.toneMapping!==Ha?Ub("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Db("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),d=Ph(d),d=K_(d,i),d=Q_(d,i),h=Ph(h),h=K_(h,i),h=Q_(h,i),d=J_(d),h=J_(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion===m_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===m_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=L+S+d,P=L+g+h,Y=j_(l,l.VERTEX_SHADER,D),I=j_(l,l.FRAGMENT_SHADER,P);l.attachShader(T,Y),l.attachShader(T,I),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function N(J){if(o.debug.checkShaderErrors){const ct=l.getProgramInfoLog(T).trim(),G=l.getShaderInfoLog(Y).trim(),pt=l.getShaderInfoLog(I).trim();let ht=!0,F=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,Y,I);else{const j=Z_(l,Y,"vertex"),X=Z_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+ct+`
`+j+`
`+X)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(G===""||pt==="")&&(F=!1);F&&(J.diagnostics={runnable:ht,programLog:ct,vertexShader:{log:G,prefix:S},fragmentShader:{log:pt,prefix:g}})}l.deleteShader(Y),l.deleteShader(I),it=new _c(l,T),U=Ob(l,T)}let it;this.getUniforms=function(){return it===void 0&&N(this),it};let U;this.getAttributes=function(){return U===void 0&&N(this),U};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,Ab)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Rb++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=Y,this.fragmentShader=I,this}let qb=0;class Yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new jb(e),i.set(e,r)),r}}class jb{constructor(e){this.id=qb++,this.code=e,this.usedTimes=0}}function Zb(o,e,i,r,l,u,d){const h=new Hh,m=new Yb,p=new Set,v=[],y=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return p.add(U),U===0?"uv":`uv${U}`}function S(U,C,J,ct,G){const pt=ct.fog,ht=G.geometry,F=U.isMeshStandardMaterial?ct.environment:null,j=(U.isMeshStandardMaterial?i:e).get(U.envMap||F),X=j&&j.mapping===Ac?j.image.height:null,_t=A[U.type];U.precision!==null&&(M=l.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const mt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,O=mt!==void 0?mt.length:0;let nt=0;ht.morphAttributes.position!==void 0&&(nt=1),ht.morphAttributes.normal!==void 0&&(nt=2),ht.morphAttributes.color!==void 0&&(nt=3);let Mt,V,ut,Et;if(_t){const _e=bi[_t];Mt=_e.vertexShader,V=_e.fragmentShader}else Mt=U.vertexShader,V=U.fragmentShader,m.update(U),ut=m.getVertexShaderID(U),Et=m.getFragmentShaderID(U);const yt=o.getRenderTarget(),Wt=G.isInstancedMesh===!0,zt=G.isBatchedMesh===!0,Z=!!U.map,Se=!!U.matcap,kt=!!j,Te=!!U.aoMap,Bt=!!U.lightMap,oe=!!U.bumpMap,$t=!!U.normalMap,fe=!!U.displacementMap,Oe=!!U.emissiveMap,z=!!U.metalnessMap,R=!!U.roughnessMap,ot=U.anisotropy>0,vt=U.clearcoat>0,Tt=U.dispersion>0,St=U.iridescence>0,Ht=U.sheen>0,wt=U.transmission>0,Ct=ot&&!!U.anisotropyMap,Zt=vt&&!!U.clearcoatMap,At=vt&&!!U.clearcoatNormalMap,It=vt&&!!U.clearcoatRoughnessMap,he=St&&!!U.iridescenceMap,qt=St&&!!U.iridescenceThicknessMap,Ut=Ht&&!!U.sheenColorMap,Gt=Ht&&!!U.sheenRoughnessMap,Qt=!!U.specularMap,ae=!!U.specularColorMap,re=!!U.specularIntensityMap,E=wt&&!!U.transmissionMap,W=wt&&!!U.thicknessMap,tt=!!U.gradientMap,xt=!!U.alphaMap,bt=U.alphaTest>0,jt=!!U.alphaHash,ie=!!U.extensions;let Re=Ha;U.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Re=o.toneMapping);const Ze={shaderID:_t,shaderType:U.type,shaderName:U.name,vertexShader:Mt,fragmentShader:V,defines:U.defines,customVertexShaderID:ut,customFragmentShaderID:Et,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:zt,instancing:Wt,instancingColor:Wt&&G.instanceColor!==null,instancingMorph:Wt&&G.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:yt===null?o.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:ka,alphaToCoverage:!!U.alphaToCoverage,map:Z,matcap:Se,envMap:kt,envMapMode:kt&&j.mapping,envMapCubeUVHeight:X,aoMap:Te,lightMap:Bt,bumpMap:oe,normalMap:$t,displacementMap:x&&fe,emissiveMap:Oe,normalMapObjectSpace:$t&&U.normalMapType===ax,normalMapTangentSpace:$t&&U.normalMapType===Ev,metalnessMap:z,roughnessMap:R,anisotropy:ot,anisotropyMap:Ct,clearcoat:vt,clearcoatMap:Zt,clearcoatNormalMap:At,clearcoatRoughnessMap:It,dispersion:Tt,iridescence:St,iridescenceMap:he,iridescenceThicknessMap:qt,sheen:Ht,sheenColorMap:Ut,sheenRoughnessMap:Gt,specularMap:Qt,specularColorMap:ae,specularIntensityMap:re,transmission:wt,transmissionMap:E,thicknessMap:W,gradientMap:tt,opaque:U.transparent===!1&&U.blending===Ms&&U.alphaToCoverage===!1,alphaMap:xt,alphaTest:bt,alphaHash:jt,combine:U.combine,mapUv:Z&&T(U.map.channel),aoMapUv:Te&&T(U.aoMap.channel),lightMapUv:Bt&&T(U.lightMap.channel),bumpMapUv:oe&&T(U.bumpMap.channel),normalMapUv:$t&&T(U.normalMap.channel),displacementMapUv:fe&&T(U.displacementMap.channel),emissiveMapUv:Oe&&T(U.emissiveMap.channel),metalnessMapUv:z&&T(U.metalnessMap.channel),roughnessMapUv:R&&T(U.roughnessMap.channel),anisotropyMapUv:Ct&&T(U.anisotropyMap.channel),clearcoatMapUv:Zt&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:At&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&T(U.sheenRoughnessMap.channel),specularMapUv:Qt&&T(U.specularMap.channel),specularColorMapUv:ae&&T(U.specularColorMap.channel),specularIntensityMapUv:re&&T(U.specularIntensityMap.channel),transmissionMapUv:E&&T(U.transmissionMap.channel),thicknessMapUv:W&&T(U.thicknessMap.channel),alphaMapUv:xt&&T(U.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&($t||ot),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ht.attributes.uv&&(Z||xt),fog:!!pt,useFog:U.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:G.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&J.length>0,shadowMapType:o.shadowMap.type,toneMapping:Re,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Z&&U.map.isVideoTexture===!0&&Ne.getTransfer(U.map.colorSpace)===Fe,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===na,flipSided:U.side===In,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ie&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ie&&U.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Ze.vertexUv1s=p.has(1),Ze.vertexUv2s=p.has(2),Ze.vertexUv3s=p.has(3),p.clear(),Ze}function g(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const J in U.defines)C.push(J),C.push(U.defines[J]);return U.isRawShaderMaterial===!1&&(L(C,U),D(C,U),C.push(o.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function L(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function D(U,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),U.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.skinning&&h.enable(4),C.morphTargets&&h.enable(5),C.morphNormals&&h.enable(6),C.morphColors&&h.enable(7),C.premultipliedAlpha&&h.enable(8),C.shadowMapEnabled&&h.enable(9),C.useLegacyLights&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.alphaToCoverage&&h.enable(20),U.push(h.mask)}function P(U){const C=A[U.type];let J;if(C){const ct=bi[C];J=Nx.clone(ct.uniforms)}else J=U.uniforms;return J}function Y(U,C){let J;for(let ct=0,G=v.length;ct<G;ct++){const pt=v[ct];if(pt.cacheKey===C){J=pt,++J.usedTimes;break}}return J===void 0&&(J=new Wb(o,C,U,u),v.push(J)),J}function I(U){if(--U.usedTimes===0){const C=v.indexOf(U);v[C]=v[v.length-1],v.pop(),U.destroy()}}function N(U){m.remove(U)}function it(){m.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:P,acquireProgram:Y,releaseProgram:I,releaseShaderCache:N,programs:v,dispose:it}}function Kb(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function r(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function Qb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function tv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function ev(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(y,x,M,A,T,S){let g=o[e];return g===void 0?(g={id:y.id,object:y,geometry:x,material:M,groupOrder:A,renderOrder:y.renderOrder,z:T,group:S},o[e]=g):(g.id=y.id,g.object=y,g.geometry=x,g.material=M,g.groupOrder=A,g.renderOrder=y.renderOrder,g.z=T,g.group=S),e++,g}function h(y,x,M,A,T,S){const g=d(y,x,M,A,T,S);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(y,x,M,A,T,S){const g=d(y,x,M,A,T,S);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(y,x){i.length>1&&i.sort(y||Qb),r.length>1&&r.sort(x||tv),l.length>1&&l.sort(x||tv)}function v(){for(let y=e,x=o.length;y<x;y++){const M=o[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function Jb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new ev,o.set(r,[d])):l>=u.length?(d=new ev,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function $b(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Q,color:new ye};break;case"SpotLight":i={position:new Q,direction:new Q,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[e.id]=i,i}}}function tA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let eA=0;function nA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function iA(o){const e=new $b,i=tA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const l=new Q,u=new Xe,d=new Xe;function h(p,v){let y=0,x=0,M=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let A=0,T=0,S=0,g=0,L=0,D=0,P=0,Y=0,I=0,N=0,it=0;p.sort(nA);const U=v===!0?Math.PI:1;for(let J=0,ct=p.length;J<ct;J++){const G=p[J],pt=G.color,ht=G.intensity,F=G.distance,j=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)y+=pt.r*ht*U,x+=pt.g*ht*U,M+=pt.b*ht*U;else if(G.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(G.sh.coefficients[X],ht);it++}else if(G.isDirectionalLight){const X=e.get(G);if(X.color.copy(G.color).multiplyScalar(G.intensity*U),G.castShadow){const _t=G.shadow,mt=i.get(G);mt.shadowBias=_t.bias,mt.shadowNormalBias=_t.normalBias,mt.shadowRadius=_t.radius,mt.shadowMapSize=_t.mapSize,r.directionalShadow[A]=mt,r.directionalShadowMap[A]=j,r.directionalShadowMatrix[A]=G.shadow.matrix,D++}r.directional[A]=X,A++}else if(G.isSpotLight){const X=e.get(G);X.position.setFromMatrixPosition(G.matrixWorld),X.color.copy(pt).multiplyScalar(ht*U),X.distance=F,X.coneCos=Math.cos(G.angle),X.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),X.decay=G.decay,r.spot[S]=X;const _t=G.shadow;if(G.map&&(r.spotLightMap[I]=G.map,I++,_t.updateMatrices(G),G.castShadow&&N++),r.spotLightMatrix[S]=_t.matrix,G.castShadow){const mt=i.get(G);mt.shadowBias=_t.bias,mt.shadowNormalBias=_t.normalBias,mt.shadowRadius=_t.radius,mt.shadowMapSize=_t.mapSize,r.spotShadow[S]=mt,r.spotShadowMap[S]=j,Y++}S++}else if(G.isRectAreaLight){const X=e.get(G);X.color.copy(pt).multiplyScalar(ht),X.halfWidth.set(G.width*.5,0,0),X.halfHeight.set(0,G.height*.5,0),r.rectArea[g]=X,g++}else if(G.isPointLight){const X=e.get(G);if(X.color.copy(G.color).multiplyScalar(G.intensity*U),X.distance=G.distance,X.decay=G.decay,G.castShadow){const _t=G.shadow,mt=i.get(G);mt.shadowBias=_t.bias,mt.shadowNormalBias=_t.normalBias,mt.shadowRadius=_t.radius,mt.shadowMapSize=_t.mapSize,mt.shadowCameraNear=_t.camera.near,mt.shadowCameraFar=_t.camera.far,r.pointShadow[T]=mt,r.pointShadowMap[T]=j,r.pointShadowMatrix[T]=G.shadow.matrix,P++}r.point[T]=X,T++}else if(G.isHemisphereLight){const X=e.get(G);X.skyColor.copy(G.color).multiplyScalar(ht*U),X.groundColor.copy(G.groundColor).multiplyScalar(ht*U),r.hemi[L]=X,L++}}g>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=x,r.ambient[2]=M;const C=r.hash;(C.directionalLength!==A||C.pointLength!==T||C.spotLength!==S||C.rectAreaLength!==g||C.hemiLength!==L||C.numDirectionalShadows!==D||C.numPointShadows!==P||C.numSpotShadows!==Y||C.numSpotMaps!==I||C.numLightProbes!==it)&&(r.directional.length=A,r.spot.length=S,r.rectArea.length=g,r.point.length=T,r.hemi.length=L,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=Y,r.spotShadowMap.length=Y,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=Y+I-N,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=it,C.directionalLength=A,C.pointLength=T,C.spotLength=S,C.rectAreaLength=g,C.hemiLength=L,C.numDirectionalShadows=D,C.numPointShadows=P,C.numSpotShadows=Y,C.numSpotMaps=I,C.numLightProbes=it,r.version=eA++)}function m(p,v){let y=0,x=0,M=0,A=0,T=0;const S=v.matrixWorldInverse;for(let g=0,L=p.length;g<L;g++){const D=p[g];if(D.isDirectionalLight){const P=r.directional[y];P.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),y++}else if(D.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),M++}else if(D.isRectAreaLight){const P=r.rectArea[A];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),d.identity(),u.copy(D.matrixWorld),u.premultiply(S),d.extractRotation(u),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),A++}else if(D.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const P=r.hemi[T];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(S),T++}}}return{setup:h,setupView:m,state:r}}function nv(o){const e=new iA(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function h(v){e.setup(i,v)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function aA(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new nv(o),e.set(l,[h])):u>=d.length?(h=new nv(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}class rA extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sA extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cA(o,e,i){let r=new Gh;const l=new ee,u=new ee,d=new fn,h=new rA({depthPacking:ix}),m=new sA,p={},v=i.maxTextureSize,y={[Ga]:In,[In]:Ga,[na]:na},x=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:oA,fragmentShader:lA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new Ui;A.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ci(A,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dv;let g=this.type;this.render=function(I,N,it){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const U=o.getRenderTarget(),C=o.getActiveCubeFace(),J=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(Fa),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const G=g!==ea&&this.type===ea,pt=g===ea&&this.type!==ea;for(let ht=0,F=I.length;ht<F;ht++){const j=I[ht],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const _t=X.getFrameExtents();if(l.multiply(_t),u.copy(X.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/_t.x),l.x=u.x*_t.x,X.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/_t.y),l.y=u.y*_t.y,X.mapSize.y=u.y)),X.map===null||G===!0||pt===!0){const O=this.type!==ea?{minFilter:oi,magFilter:oi}:{};X.map!==null&&X.map.dispose(),X.map=new yr(l.x,l.y,O),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const mt=X.getViewportCount();for(let O=0;O<mt;O++){const nt=X.getViewport(O);d.set(u.x*nt.x,u.y*nt.y,u.x*nt.z,u.y*nt.w),ct.viewport(d),X.updateMatrices(j,O),r=X.getFrustum(),P(N,it,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===ea&&L(X,it),X.needsUpdate=!1}g=this.type,S.needsUpdate=!1,o.setRenderTarget(U,C,J)};function L(I,N){const it=e.update(T);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new yr(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(N,null,it,x,T,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(N,null,it,M,T,null)}function D(I,N,it,U){let C=null;const J=it.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(J!==void 0)C=J;else if(C=it.isPointLight===!0?m:h,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ct=C.uuid,G=N.uuid;let pt=p[ct];pt===void 0&&(pt={},p[ct]=pt);let ht=pt[G];ht===void 0&&(ht=C.clone(),pt[G]=ht,N.addEventListener("dispose",Y)),C=ht}if(C.visible=N.visible,C.wireframe=N.wireframe,U===ea?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:y[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,it.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ct=o.properties.get(C);ct.light=it}return C}function P(I,N,it,U,C){if(I.visible===!1)return;if(I.layers.test(N.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===ea)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,I.matrixWorld);const G=e.update(I),pt=I.material;if(Array.isArray(pt)){const ht=G.groups;for(let F=0,j=ht.length;F<j;F++){const X=ht[F],_t=pt[X.materialIndex];if(_t&&_t.visible){const mt=D(I,_t,U,C);I.onBeforeShadow(o,I,N,it,G,mt,X),o.renderBufferDirect(it,null,G,mt,I,X),I.onAfterShadow(o,I,N,it,G,mt,X)}}}else if(pt.visible){const ht=D(I,pt,U,C);I.onBeforeShadow(o,I,N,it,G,ht,null),o.renderBufferDirect(it,null,G,ht,I,null),I.onAfterShadow(o,I,N,it,G,ht,null)}}const ct=I.children;for(let G=0,pt=ct.length;G<pt;G++)P(ct[G],N,it,U,C)}function Y(I){I.target.removeEventListener("dispose",Y);for(const it in p){const U=p[it],C=I.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}function uA(o){function e(){let E=!1;const W=new fn;let tt=null;const xt=new fn(0,0,0,0);return{setMask:function(bt){tt!==bt&&!E&&(o.colorMask(bt,bt,bt,bt),tt=bt)},setLocked:function(bt){E=bt},setClear:function(bt,jt,ie,Re,Ze){Ze===!0&&(bt*=Re,jt*=Re,ie*=Re),W.set(bt,jt,ie,Re),xt.equals(W)===!1&&(o.clearColor(bt,jt,ie,Re),xt.copy(W))},reset:function(){E=!1,tt=null,xt.set(-1,0,0,0)}}}function i(){let E=!1,W=null,tt=null,xt=null;return{setTest:function(bt){bt?Et(o.DEPTH_TEST):yt(o.DEPTH_TEST)},setMask:function(bt){W!==bt&&!E&&(o.depthMask(bt),W=bt)},setFunc:function(bt){if(tt!==bt){switch(bt){case wy:o.depthFunc(o.NEVER);break;case Dy:o.depthFunc(o.ALWAYS);break;case Uy:o.depthFunc(o.LESS);break;case vc:o.depthFunc(o.LEQUAL);break;case Ly:o.depthFunc(o.EQUAL);break;case Ny:o.depthFunc(o.GEQUAL);break;case Oy:o.depthFunc(o.GREATER);break;case Py:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}tt=bt}},setLocked:function(bt){E=bt},setClear:function(bt){xt!==bt&&(o.clearDepth(bt),xt=bt)},reset:function(){E=!1,W=null,tt=null,xt=null}}}function r(){let E=!1,W=null,tt=null,xt=null,bt=null,jt=null,ie=null,Re=null,Ze=null;return{setTest:function(_e){E||(_e?Et(o.STENCIL_TEST):yt(o.STENCIL_TEST))},setMask:function(_e){W!==_e&&!E&&(o.stencilMask(_e),W=_e)},setFunc:function(_e,He,be){(tt!==_e||xt!==He||bt!==be)&&(o.stencilFunc(_e,He,be),tt=_e,xt=He,bt=be)},setOp:function(_e,He,be){(jt!==_e||ie!==He||Re!==be)&&(o.stencilOp(_e,He,be),jt=_e,ie=He,Re=be)},setLocked:function(_e){E=_e},setClear:function(_e){Ze!==_e&&(o.clearStencil(_e),Ze=_e)},reset:function(){E=!1,W=null,tt=null,xt=null,bt=null,jt=null,ie=null,Re=null,Ze=null}}}const l=new e,u=new i,d=new r,h=new WeakMap,m=new WeakMap;let p={},v={},y=new WeakMap,x=[],M=null,A=!1,T=null,S=null,g=null,L=null,D=null,P=null,Y=null,I=new ye(0,0,0),N=0,it=!1,U=null,C=null,J=null,ct=null,G=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ht=!1,F=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(j)[1]),ht=F>=1):j.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ht=F>=2);let X=null,_t={};const mt=o.getParameter(o.SCISSOR_BOX),O=o.getParameter(o.VIEWPORT),nt=new fn().fromArray(mt),Mt=new fn().fromArray(O);function V(E,W,tt,xt){const bt=new Uint8Array(4),jt=o.createTexture();o.bindTexture(E,jt),o.texParameteri(E,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(E,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ie=0;ie<tt;ie++)E===o.TEXTURE_3D||E===o.TEXTURE_2D_ARRAY?o.texImage3D(W,0,o.RGBA,1,1,xt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(W+ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return jt}const ut={};ut[o.TEXTURE_2D]=V(o.TEXTURE_2D,o.TEXTURE_2D,1),ut[o.TEXTURE_CUBE_MAP]=V(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[o.TEXTURE_2D_ARRAY]=V(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ut[o.TEXTURE_3D]=V(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Et(o.DEPTH_TEST),u.setFunc(vc),oe(!1),$t(Bg),Et(o.CULL_FACE),Te(Fa);function Et(E){p[E]!==!0&&(o.enable(E),p[E]=!0)}function yt(E){p[E]!==!1&&(o.disable(E),p[E]=!1)}function Wt(E,W){return v[E]!==W?(o.bindFramebuffer(E,W),v[E]=W,E===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=W),E===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=W),!0):!1}function zt(E,W){let tt=x,xt=!1;if(E){tt=y.get(W),tt===void 0&&(tt=[],y.set(W,tt));const bt=E.textures;if(tt.length!==bt.length||tt[0]!==o.COLOR_ATTACHMENT0){for(let jt=0,ie=bt.length;jt<ie;jt++)tt[jt]=o.COLOR_ATTACHMENT0+jt;tt.length=bt.length,xt=!0}}else tt[0]!==o.BACK&&(tt[0]=o.BACK,xt=!0);xt&&o.drawBuffers(tt)}function Z(E){return M!==E?(o.useProgram(E),M=E,!0):!1}const Se={[gr]:o.FUNC_ADD,[hy]:o.FUNC_SUBTRACT,[dy]:o.FUNC_REVERSE_SUBTRACT};Se[py]=o.MIN,Se[my]=o.MAX;const kt={[gy]:o.ZERO,[_y]:o.ONE,[vy]:o.SRC_COLOR,[Ch]:o.SRC_ALPHA,[Ty]:o.SRC_ALPHA_SATURATE,[My]:o.DST_COLOR,[yy]:o.DST_ALPHA,[Sy]:o.ONE_MINUS_SRC_COLOR,[wh]:o.ONE_MINUS_SRC_ALPHA,[Ey]:o.ONE_MINUS_DST_COLOR,[xy]:o.ONE_MINUS_DST_ALPHA,[by]:o.CONSTANT_COLOR,[Ay]:o.ONE_MINUS_CONSTANT_COLOR,[Ry]:o.CONSTANT_ALPHA,[Cy]:o.ONE_MINUS_CONSTANT_ALPHA};function Te(E,W,tt,xt,bt,jt,ie,Re,Ze,_e){if(E===Fa){A===!0&&(yt(o.BLEND),A=!1);return}if(A===!1&&(Et(o.BLEND),A=!0),E!==fy){if(E!==T||_e!==it){if((S!==gr||D!==gr)&&(o.blendEquation(o.FUNC_ADD),S=gr,D=gr),_e)switch(E){case Ms:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ig:o.blendFunc(o.ONE,o.ONE);break;case Fg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Hg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Ms:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ig:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Fg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Hg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}g=null,L=null,P=null,Y=null,I.set(0,0,0),N=0,T=E,it=_e}return}bt=bt||W,jt=jt||tt,ie=ie||xt,(W!==S||bt!==D)&&(o.blendEquationSeparate(Se[W],Se[bt]),S=W,D=bt),(tt!==g||xt!==L||jt!==P||ie!==Y)&&(o.blendFuncSeparate(kt[tt],kt[xt],kt[jt],kt[ie]),g=tt,L=xt,P=jt,Y=ie),(Re.equals(I)===!1||Ze!==N)&&(o.blendColor(Re.r,Re.g,Re.b,Ze),I.copy(Re),N=Ze),T=E,it=!1}function Bt(E,W){E.side===na?yt(o.CULL_FACE):Et(o.CULL_FACE);let tt=E.side===In;W&&(tt=!tt),oe(tt),E.blending===Ms&&E.transparent===!1?Te(Fa):Te(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),u.setFunc(E.depthFunc),u.setTest(E.depthTest),u.setMask(E.depthWrite),l.setMask(E.colorWrite);const xt=E.stencilWrite;d.setTest(xt),xt&&(d.setMask(E.stencilWriteMask),d.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),d.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Oe(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?Et(o.SAMPLE_ALPHA_TO_COVERAGE):yt(o.SAMPLE_ALPHA_TO_COVERAGE)}function oe(E){U!==E&&(E?o.frontFace(o.CW):o.frontFace(o.CCW),U=E)}function $t(E){E!==ly?(Et(o.CULL_FACE),E!==C&&(E===Bg?o.cullFace(o.BACK):E===cy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):yt(o.CULL_FACE),C=E}function fe(E){E!==J&&(ht&&o.lineWidth(E),J=E)}function Oe(E,W,tt){E?(Et(o.POLYGON_OFFSET_FILL),(ct!==W||G!==tt)&&(o.polygonOffset(W,tt),ct=W,G=tt)):yt(o.POLYGON_OFFSET_FILL)}function z(E){E?Et(o.SCISSOR_TEST):yt(o.SCISSOR_TEST)}function R(E){E===void 0&&(E=o.TEXTURE0+pt-1),X!==E&&(o.activeTexture(E),X=E)}function ot(E,W,tt){tt===void 0&&(X===null?tt=o.TEXTURE0+pt-1:tt=X);let xt=_t[tt];xt===void 0&&(xt={type:void 0,texture:void 0},_t[tt]=xt),(xt.type!==E||xt.texture!==W)&&(X!==tt&&(o.activeTexture(tt),X=tt),o.bindTexture(E,W||ut[E]),xt.type=E,xt.texture=W)}function vt(){const E=_t[X];E!==void 0&&E.type!==void 0&&(o.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function Tt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function St(){try{o.compressedTexImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ht(){try{o.texSubImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function wt(){try{o.texSubImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ct(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Zt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function At(){try{o.texStorage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function It(){try{o.texStorage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function he(){try{o.texImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function qt(){try{o.texImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ut(E){nt.equals(E)===!1&&(o.scissor(E.x,E.y,E.z,E.w),nt.copy(E))}function Gt(E){Mt.equals(E)===!1&&(o.viewport(E.x,E.y,E.z,E.w),Mt.copy(E))}function Qt(E,W){let tt=m.get(W);tt===void 0&&(tt=new WeakMap,m.set(W,tt));let xt=tt.get(E);xt===void 0&&(xt=o.getUniformBlockIndex(W,E.name),tt.set(E,xt))}function ae(E,W){const xt=m.get(W).get(E);h.get(W)!==xt&&(o.uniformBlockBinding(W,xt,E.__bindingPointIndex),h.set(W,xt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},X=null,_t={},v={},y=new WeakMap,x=[],M=null,A=!1,T=null,S=null,g=null,L=null,D=null,P=null,Y=null,I=new ye(0,0,0),N=0,it=!1,U=null,C=null,J=null,ct=null,G=null,nt.set(0,0,o.canvas.width,o.canvas.height),Mt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:Et,disable:yt,bindFramebuffer:Wt,drawBuffers:zt,useProgram:Z,setBlending:Te,setMaterial:Bt,setFlipSided:oe,setCullFace:$t,setLineWidth:fe,setPolygonOffset:Oe,setScissorTest:z,activeTexture:R,bindTexture:ot,unbindTexture:vt,compressedTexImage2D:Tt,compressedTexImage3D:St,texImage2D:he,texImage3D:qt,updateUBOMapping:Qt,uniformBlockBinding:ae,texStorage2D:At,texStorage3D:It,texSubImage2D:Ht,texSubImage3D:wt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Zt,scissor:Ut,viewport:Gt,reset:re}}function fA(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ee,v=new WeakMap;let y;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(z,R){return M?new OffscreenCanvas(z,R):Ec("canvas")}function T(z,R,ot){let vt=1;const Tt=Oe(z);if((Tt.width>ot||Tt.height>ot)&&(vt=ot/Math.max(Tt.width,Tt.height)),vt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const St=Math.floor(vt*Tt.width),Ht=Math.floor(vt*Tt.height);y===void 0&&(y=A(St,Ht));const wt=R?A(St,Ht):y;return wt.width=St,wt.height=Ht,wt.getContext("2d").drawImage(z,0,0,St,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+St+"x"+Ht+")."),wt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),z;return z}function S(z){return z.generateMipmaps&&z.minFilter!==oi&&z.minFilter!==mi}function g(z){o.generateMipmap(z)}function L(z,R,ot,vt,Tt=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let St=R;if(R===o.RED&&(ot===o.FLOAT&&(St=o.R32F),ot===o.HALF_FLOAT&&(St=o.R16F),ot===o.UNSIGNED_BYTE&&(St=o.R8)),R===o.RED_INTEGER&&(ot===o.UNSIGNED_BYTE&&(St=o.R8UI),ot===o.UNSIGNED_SHORT&&(St=o.R16UI),ot===o.UNSIGNED_INT&&(St=o.R32UI),ot===o.BYTE&&(St=o.R8I),ot===o.SHORT&&(St=o.R16I),ot===o.INT&&(St=o.R32I)),R===o.RG&&(ot===o.FLOAT&&(St=o.RG32F),ot===o.HALF_FLOAT&&(St=o.RG16F),ot===o.UNSIGNED_BYTE&&(St=o.RG8)),R===o.RG_INTEGER&&(ot===o.UNSIGNED_BYTE&&(St=o.RG8UI),ot===o.UNSIGNED_SHORT&&(St=o.RG16UI),ot===o.UNSIGNED_INT&&(St=o.RG32UI),ot===o.BYTE&&(St=o.RG8I),ot===o.SHORT&&(St=o.RG16I),ot===o.INT&&(St=o.RG32I)),R===o.RGB&&ot===o.UNSIGNED_INT_5_9_9_9_REV&&(St=o.RGB9_E5),R===o.RGBA){const Ht=Tt?Sc:Ne.getTransfer(vt);ot===o.FLOAT&&(St=o.RGBA32F),ot===o.HALF_FLOAT&&(St=o.RGBA16F),ot===o.UNSIGNED_BYTE&&(St=Ht===Fe?o.SRGB8_ALPHA8:o.RGBA8),ot===o.UNSIGNED_SHORT_4_4_4_4&&(St=o.RGBA4),ot===o.UNSIGNED_SHORT_5_5_5_1&&(St=o.RGB5_A1)}return(St===o.R16F||St===o.R32F||St===o.RG16F||St===o.RG32F||St===o.RGBA16F||St===o.RGBA32F)&&e.get("EXT_color_buffer_float"),St}function D(z,R){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==oi&&z.minFilter!==mi?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function P(z){const R=z.target;R.removeEventListener("dispose",P),I(R),R.isVideoTexture&&v.delete(R)}function Y(z){const R=z.target;R.removeEventListener("dispose",Y),it(R)}function I(z){const R=r.get(z);if(R.__webglInit===void 0)return;const ot=z.source,vt=x.get(ot);if(vt){const Tt=vt[R.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&N(z),Object.keys(vt).length===0&&x.delete(ot)}r.remove(z)}function N(z){const R=r.get(z);o.deleteTexture(R.__webglTexture);const ot=z.source,vt=x.get(ot);delete vt[R.__cacheKey],d.memory.textures--}function it(z){const R=r.get(z);if(z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(R.__webglFramebuffer[vt]))for(let Tt=0;Tt<R.__webglFramebuffer[vt].length;Tt++)o.deleteFramebuffer(R.__webglFramebuffer[vt][Tt]);else o.deleteFramebuffer(R.__webglFramebuffer[vt]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[vt])}else{if(Array.isArray(R.__webglFramebuffer))for(let vt=0;vt<R.__webglFramebuffer.length;vt++)o.deleteFramebuffer(R.__webglFramebuffer[vt]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let vt=0;vt<R.__webglColorRenderbuffer.length;vt++)R.__webglColorRenderbuffer[vt]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[vt]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ot=z.textures;for(let vt=0,Tt=ot.length;vt<Tt;vt++){const St=r.get(ot[vt]);St.__webglTexture&&(o.deleteTexture(St.__webglTexture),d.memory.textures--),r.remove(ot[vt])}r.remove(z)}let U=0;function C(){U=0}function J(){const z=U;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),U+=1,z}function ct(z){const R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function G(z,R){const ot=r.get(z);if(z.isVideoTexture&&$t(z),z.isRenderTargetTexture===!1&&z.version>0&&ot.__version!==z.version){const vt=z.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(ot,z,R);return}}i.bindTexture(o.TEXTURE_2D,ot.__webglTexture,o.TEXTURE0+R)}function pt(z,R){const ot=r.get(z);if(z.version>0&&ot.__version!==z.version){nt(ot,z,R);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ot.__webglTexture,o.TEXTURE0+R)}function ht(z,R){const ot=r.get(z);if(z.version>0&&ot.__version!==z.version){nt(ot,z,R);return}i.bindTexture(o.TEXTURE_3D,ot.__webglTexture,o.TEXTURE0+R)}function F(z,R){const ot=r.get(z);if(z.version>0&&ot.__version!==z.version){Mt(ot,z,R);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ot.__webglTexture,o.TEXTURE0+R)}const j={[Lh]:o.REPEAT,[vr]:o.CLAMP_TO_EDGE,[Nh]:o.MIRRORED_REPEAT},X={[oi]:o.NEAREST,[Wy]:o.NEAREST_MIPMAP_NEAREST,[kl]:o.NEAREST_MIPMAP_LINEAR,[mi]:o.LINEAR,[Yf]:o.LINEAR_MIPMAP_NEAREST,[Sr]:o.LINEAR_MIPMAP_LINEAR},_t={[rx]:o.NEVER,[fx]:o.ALWAYS,[sx]:o.LESS,[Tv]:o.LEQUAL,[ox]:o.EQUAL,[ux]:o.GEQUAL,[lx]:o.GREATER,[cx]:o.NOTEQUAL};function mt(z,R){if(R.type===Ia&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===mi||R.magFilter===Yf||R.magFilter===kl||R.magFilter===Sr||R.minFilter===mi||R.minFilter===Yf||R.minFilter===kl||R.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,j[R.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,j[R.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,j[R.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,X[R.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,X[R.minFilter]),R.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,_t[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===oi||R.minFilter!==kl&&R.minFilter!==Sr||R.type===Ia&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const ot=e.get("EXT_texture_filter_anisotropic");o.texParameterf(z,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function O(z,R){let ot=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",P));const vt=R.source;let Tt=x.get(vt);Tt===void 0&&(Tt={},x.set(vt,Tt));const St=ct(R);if(St!==z.__cacheKey){Tt[St]===void 0&&(Tt[St]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ot=!0),Tt[St].usedTimes++;const Ht=Tt[z.__cacheKey];Ht!==void 0&&(Tt[z.__cacheKey].usedTimes--,Ht.usedTimes===0&&N(R)),z.__cacheKey=St,z.__webglTexture=Tt[St].texture}return ot}function nt(z,R,ot){let vt=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(vt=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(vt=o.TEXTURE_3D);const Tt=O(z,R),St=R.source;i.bindTexture(vt,z.__webglTexture,o.TEXTURE0+ot);const Ht=r.get(St);if(St.version!==Ht.__version||Tt===!0){i.activeTexture(o.TEXTURE0+ot);const wt=Ne.getPrimaries(Ne.workingColorSpace),Ct=R.colorSpace===Ba?null:Ne.getPrimaries(R.colorSpace),Zt=R.colorSpace===Ba||wt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let At=T(R.image,!1,l.maxTextureSize);At=fe(R,At);const It=u.convert(R.format,R.colorSpace),he=u.convert(R.type);let qt=L(R.internalFormat,It,he,R.colorSpace,R.isVideoTexture);mt(vt,R);let Ut;const Gt=R.mipmaps,Qt=R.isVideoTexture!==!0,ae=Ht.__version===void 0||Tt===!0,re=St.dataReady,E=D(R,At);if(R.isDepthTexture)qt=o.DEPTH_COMPONENT16,R.type===Ia?qt=o.DEPTH_COMPONENT32F:R.type===Rs?qt=o.DEPTH_COMPONENT24:R.type===Lo&&(qt=o.DEPTH24_STENCIL8),ae&&(Qt?i.texStorage2D(o.TEXTURE_2D,1,qt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,qt,At.width,At.height,0,It,he,null));else if(R.isDataTexture)if(Gt.length>0){Qt&&ae&&i.texStorage2D(o.TEXTURE_2D,E,qt,Gt[0].width,Gt[0].height);for(let W=0,tt=Gt.length;W<tt;W++)Ut=Gt[W],Qt?re&&i.texSubImage2D(o.TEXTURE_2D,W,0,0,Ut.width,Ut.height,It,he,Ut.data):i.texImage2D(o.TEXTURE_2D,W,qt,Ut.width,Ut.height,0,It,he,Ut.data);R.generateMipmaps=!1}else Qt?(ae&&i.texStorage2D(o.TEXTURE_2D,E,qt,At.width,At.height),re&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,It,he,At.data)):i.texImage2D(o.TEXTURE_2D,0,qt,At.width,At.height,0,It,he,At.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Qt&&ae&&i.texStorage3D(o.TEXTURE_2D_ARRAY,E,qt,Gt[0].width,Gt[0].height,At.depth);for(let W=0,tt=Gt.length;W<tt;W++)Ut=Gt[W],R.format!==Ri?It!==null?Qt?re&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,W,0,0,0,Ut.width,Ut.height,At.depth,It,Ut.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,W,qt,Ut.width,Ut.height,At.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?re&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,W,0,0,0,Ut.width,Ut.height,At.depth,It,he,Ut.data):i.texImage3D(o.TEXTURE_2D_ARRAY,W,qt,Ut.width,Ut.height,At.depth,0,It,he,Ut.data)}else{Qt&&ae&&i.texStorage2D(o.TEXTURE_2D,E,qt,Gt[0].width,Gt[0].height);for(let W=0,tt=Gt.length;W<tt;W++)Ut=Gt[W],R.format!==Ri?It!==null?Qt?re&&i.compressedTexSubImage2D(o.TEXTURE_2D,W,0,0,Ut.width,Ut.height,It,Ut.data):i.compressedTexImage2D(o.TEXTURE_2D,W,qt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?re&&i.texSubImage2D(o.TEXTURE_2D,W,0,0,Ut.width,Ut.height,It,he,Ut.data):i.texImage2D(o.TEXTURE_2D,W,qt,Ut.width,Ut.height,0,It,he,Ut.data)}else if(R.isDataArrayTexture)Qt?(ae&&i.texStorage3D(o.TEXTURE_2D_ARRAY,E,qt,At.width,At.height,At.depth),re&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,It,he,At.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,qt,At.width,At.height,At.depth,0,It,he,At.data);else if(R.isData3DTexture)Qt?(ae&&i.texStorage3D(o.TEXTURE_3D,E,qt,At.width,At.height,At.depth),re&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,It,he,At.data)):i.texImage3D(o.TEXTURE_3D,0,qt,At.width,At.height,At.depth,0,It,he,At.data);else if(R.isFramebufferTexture){if(ae)if(Qt)i.texStorage2D(o.TEXTURE_2D,E,qt,At.width,At.height);else{let W=At.width,tt=At.height;for(let xt=0;xt<E;xt++)i.texImage2D(o.TEXTURE_2D,xt,qt,W,tt,0,It,he,null),W>>=1,tt>>=1}}else if(Gt.length>0){if(Qt&&ae){const W=Oe(Gt[0]);i.texStorage2D(o.TEXTURE_2D,E,qt,W.width,W.height)}for(let W=0,tt=Gt.length;W<tt;W++)Ut=Gt[W],Qt?re&&i.texSubImage2D(o.TEXTURE_2D,W,0,0,It,he,Ut):i.texImage2D(o.TEXTURE_2D,W,qt,It,he,Ut);R.generateMipmaps=!1}else if(Qt){if(ae){const W=Oe(At);i.texStorage2D(o.TEXTURE_2D,E,qt,W.width,W.height)}re&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,It,he,At)}else i.texImage2D(o.TEXTURE_2D,0,qt,It,he,At);S(R)&&g(vt),Ht.__version=St.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Mt(z,R,ot){if(R.image.length!==6)return;const vt=O(z,R),Tt=R.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+ot);const St=r.get(Tt);if(Tt.version!==St.__version||vt===!0){i.activeTexture(o.TEXTURE0+ot);const Ht=Ne.getPrimaries(Ne.workingColorSpace),wt=R.colorSpace===Ba?null:Ne.getPrimaries(R.colorSpace),Ct=R.colorSpace===Ba||Ht===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Zt=R.isCompressedTexture||R.image[0].isCompressedTexture,At=R.image[0]&&R.image[0].isDataTexture,It=[];for(let tt=0;tt<6;tt++)!Zt&&!At?It[tt]=T(R.image[tt],!0,l.maxCubemapSize):It[tt]=At?R.image[tt].image:R.image[tt],It[tt]=fe(R,It[tt]);const he=It[0],qt=u.convert(R.format,R.colorSpace),Ut=u.convert(R.type),Gt=L(R.internalFormat,qt,Ut,R.colorSpace),Qt=R.isVideoTexture!==!0,ae=St.__version===void 0||vt===!0,re=Tt.dataReady;let E=D(R,he);mt(o.TEXTURE_CUBE_MAP,R);let W;if(Zt){Qt&&ae&&i.texStorage2D(o.TEXTURE_CUBE_MAP,E,Gt,he.width,he.height);for(let tt=0;tt<6;tt++){W=It[tt].mipmaps;for(let xt=0;xt<W.length;xt++){const bt=W[xt];R.format!==Ri?qt!==null?Qt?re&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,0,0,bt.width,bt.height,qt,bt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,Gt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,0,0,bt.width,bt.height,qt,Ut,bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,Gt,bt.width,bt.height,0,qt,Ut,bt.data)}}}else{if(W=R.mipmaps,Qt&&ae){W.length>0&&E++;const tt=Oe(It[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,E,Gt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(At){Qt?re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,It[tt].width,It[tt].height,qt,Ut,It[tt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Gt,It[tt].width,It[tt].height,0,qt,Ut,It[tt].data);for(let xt=0;xt<W.length;xt++){const jt=W[xt].image[tt].image;Qt?re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,0,0,jt.width,jt.height,qt,Ut,jt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,Gt,jt.width,jt.height,0,qt,Ut,jt.data)}}else{Qt?re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,qt,Ut,It[tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Gt,qt,Ut,It[tt]);for(let xt=0;xt<W.length;xt++){const bt=W[xt];Qt?re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,0,0,qt,Ut,bt.image[tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,Gt,qt,Ut,bt.image[tt])}}}S(R)&&g(o.TEXTURE_CUBE_MAP),St.__version=Tt.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function V(z,R,ot,vt,Tt,St){const Ht=u.convert(ot.format,ot.colorSpace),wt=u.convert(ot.type),Ct=L(ot.internalFormat,Ht,wt,ot.colorSpace);if(!r.get(R).__hasExternalTextures){const At=Math.max(1,R.width>>St),It=Math.max(1,R.height>>St);Tt===o.TEXTURE_3D||Tt===o.TEXTURE_2D_ARRAY?i.texImage3D(Tt,St,Ct,At,It,R.depth,0,Ht,wt,null):i.texImage2D(Tt,St,Ct,At,It,0,Ht,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),oe(R)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,vt,Tt,r.get(ot).__webglTexture,0,Bt(R)):(Tt===o.TEXTURE_2D||Tt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,vt,Tt,r.get(ot).__webglTexture,St),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ut(z,R,ot){if(o.bindRenderbuffer(o.RENDERBUFFER,z),R.depthBuffer&&!R.stencilBuffer){let vt=o.DEPTH_COMPONENT24;if(ot||oe(R)){const Tt=R.depthTexture;Tt&&Tt.isDepthTexture&&(Tt.type===Ia?vt=o.DEPTH_COMPONENT32F:Tt.type===Rs&&(vt=o.DEPTH_COMPONENT24));const St=Bt(R);oe(R)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,St,vt,R.width,R.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,St,vt,R.width,R.height)}else o.renderbufferStorage(o.RENDERBUFFER,vt,R.width,R.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,z)}else if(R.depthBuffer&&R.stencilBuffer){const vt=Bt(R);ot&&oe(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,vt,o.DEPTH24_STENCIL8,R.width,R.height):oe(R)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,vt,o.DEPTH24_STENCIL8,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,z)}else{const vt=R.textures;for(let Tt=0;Tt<vt.length;Tt++){const St=vt[Tt],Ht=u.convert(St.format,St.colorSpace),wt=u.convert(St.type),Ct=L(St.internalFormat,Ht,wt,St.colorSpace),Zt=Bt(R);ot&&oe(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Ct,R.width,R.height):oe(R)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Zt,Ct,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Et(z,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),G(R.depthTexture,0);const vt=r.get(R.depthTexture).__webglTexture,Tt=Bt(R);if(R.depthTexture.format===Es)oe(R)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,Tt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(R.depthTexture.format===Uo)oe(R)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,Tt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function yt(z){const R=r.get(z),ot=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!R.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");Et(R.__webglFramebuffer,z)}else if(ot){R.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[vt]),R.__webglDepthbuffer[vt]=o.createRenderbuffer(),ut(R.__webglDepthbuffer[vt],z,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=o.createRenderbuffer(),ut(R.__webglDepthbuffer,z,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Wt(z,R,ot){const vt=r.get(z);R!==void 0&&V(vt.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ot!==void 0&&yt(z)}function zt(z){const R=z.texture,ot=r.get(z),vt=r.get(R);z.addEventListener("dispose",Y);const Tt=z.textures,St=z.isWebGLCubeRenderTarget===!0,Ht=Tt.length>1;if(Ht||(vt.__webglTexture===void 0&&(vt.__webglTexture=o.createTexture()),vt.__version=R.version,d.memory.textures++),St){ot.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(R.mipmaps&&R.mipmaps.length>0){ot.__webglFramebuffer[wt]=[];for(let Ct=0;Ct<R.mipmaps.length;Ct++)ot.__webglFramebuffer[wt][Ct]=o.createFramebuffer()}else ot.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ot.__webglFramebuffer=[];for(let wt=0;wt<R.mipmaps.length;wt++)ot.__webglFramebuffer[wt]=o.createFramebuffer()}else ot.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let wt=0,Ct=Tt.length;wt<Ct;wt++){const Zt=r.get(Tt[wt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=o.createTexture(),d.memory.textures++)}if(z.samples>0&&oe(z)===!1){ot.__webglMultisampledFramebuffer=o.createFramebuffer(),ot.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let wt=0;wt<Tt.length;wt++){const Ct=Tt[wt];ot.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ot.__webglColorRenderbuffer[wt]);const Zt=u.convert(Ct.format,Ct.colorSpace),At=u.convert(Ct.type),It=L(Ct.internalFormat,Zt,At,Ct.colorSpace,z.isXRRenderTarget===!0),he=Bt(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,he,It,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,ot.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(ot.__webglDepthRenderbuffer=o.createRenderbuffer(),ut(ot.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(St){i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,R);for(let wt=0;wt<6;wt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ct=0;Ct<R.mipmaps.length;Ct++)V(ot.__webglFramebuffer[wt][Ct],z,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ct);else V(ot.__webglFramebuffer[wt],z,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);S(R)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let wt=0,Ct=Tt.length;wt<Ct;wt++){const Zt=Tt[wt],At=r.get(Zt);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),mt(o.TEXTURE_2D,Zt),V(ot.__webglFramebuffer,z,Zt,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),S(Zt)&&g(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(wt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,vt.__webglTexture),mt(wt,R),R.mipmaps&&R.mipmaps.length>0)for(let Ct=0;Ct<R.mipmaps.length;Ct++)V(ot.__webglFramebuffer[Ct],z,R,o.COLOR_ATTACHMENT0,wt,Ct);else V(ot.__webglFramebuffer,z,R,o.COLOR_ATTACHMENT0,wt,0);S(R)&&g(wt),i.unbindTexture()}z.depthBuffer&&yt(z)}function Z(z){const R=z.textures;for(let ot=0,vt=R.length;ot<vt;ot++){const Tt=R[ot];if(S(Tt)){const St=z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ht=r.get(Tt).__webglTexture;i.bindTexture(St,Ht),g(St),i.unbindTexture()}}}const Se=[],kt=[];function Te(z){if(z.samples>0){if(oe(z)===!1){const R=z.textures,ot=z.width,vt=z.height;let Tt=o.COLOR_BUFFER_BIT;const St=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=r.get(z),wt=R.length>1;if(wt)for(let Ct=0;Ct<R.length;Ct++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Ct=0;Ct<R.length;Ct++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Tt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Tt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[Ct]);const Zt=r.get(R[Ct]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Zt,0)}o.blitFramebuffer(0,0,ot,vt,0,0,ot,vt,Tt,o.NEAREST),m===!0&&(Se.length=0,kt.length=0,Se.push(o.COLOR_ATTACHMENT0+Ct),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Se.push(St),kt.push(St),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,kt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Se))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Ct=0;Ct<R.length;Ct++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[Ct]);const Zt=r.get(R[Ct]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,Zt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const R=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function Bt(z){return Math.min(l.maxSamples,z.samples)}function oe(z){const R=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function $t(z){const R=d.render.frame;v.get(z)!==R&&(v.set(z,R),z.update())}function fe(z,R){const ot=z.colorSpace,vt=z.format,Tt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ot!==ka&&ot!==Ba&&(Ne.getTransfer(ot)===Fe?(vt!==Ri||Tt!==Va)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),R}function Oe(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=C,this.setTexture2D=G,this.setTexture2DArray=pt,this.setTexture3D=ht,this.setTextureCube=F,this.rebindTextures=Wt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=V,this.useMultisampledRTT=oe}function hA(o,e){function i(r,l=Ba){let u;const d=Ne.getTransfer(l);if(r===Va)return o.UNSIGNED_BYTE;if(r===vv)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Sv)return o.UNSIGNED_SHORT_5_5_5_1;if(r===jy)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===qy)return o.BYTE;if(r===Yy)return o.SHORT;if(r===gv)return o.UNSIGNED_SHORT;if(r===_v)return o.INT;if(r===Rs)return o.UNSIGNED_INT;if(r===Ia)return o.FLOAT;if(r===Rc)return o.HALF_FLOAT;if(r===Zy)return o.ALPHA;if(r===Ky)return o.RGB;if(r===Ri)return o.RGBA;if(r===Qy)return o.LUMINANCE;if(r===Jy)return o.LUMINANCE_ALPHA;if(r===Es)return o.DEPTH_COMPONENT;if(r===Uo)return o.DEPTH_STENCIL;if(r===$y)return o.RED;if(r===yv)return o.RED_INTEGER;if(r===tx)return o.RG;if(r===xv)return o.RG_INTEGER;if(r===Mv)return o.RGBA_INTEGER;if(r===jf||r===Zf||r===Kf||r===Qf)if(d===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===jf)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===jf)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kf)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qf)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gg||r===Vg||r===Xg||r===kg)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Gg)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vg)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xg)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kg)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wg||r===qg||r===Yg)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Wg||r===qg)return d===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Yg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jg||r===Zg||r===Kg||r===Qg||r===Jg||r===$g||r===t_||r===e_||r===n_||r===i_||r===a_||r===r_||r===s_||r===o_)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===jg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$g)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===t_)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===e_)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===n_)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===i_)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===a_)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===r_)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===s_)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===o_)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jf||r===l_||r===c_)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Jf)return d===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===l_)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===c_)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ex||r===u_||r===f_||r===h_)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Jf)return u.COMPRESSED_RED_RGTC1_EXT;if(r===u_)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===f_)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===h_)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class dA extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hc extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pA={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const T of e.hand.values()){const S=i.getJointPose(T,r),g=this._getHandJoint(p,T);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const v=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],x=v.position.distanceTo(y.position),M=.02,A=.005;p.inputState.pinching&&x>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(pA)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new hc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Fn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new Xa({vertexShader:mA,fragmentShader:gA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Ci(new Uc(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class vA extends Mr{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,y=null,x=null,M=null,A=null;const T=new _A,S=i.getContextAttributes();let g=null,L=null;const D=[],P=[],Y=new ee;let I=null;const N=new si;N.layers.enable(1),N.viewport=new fn;const it=new si;it.layers.enable(2),it.viewport=new fn;const U=[N,it],C=new dA;C.layers.enable(1),C.layers.enable(2);let J=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ut=D[V];return ut===void 0&&(ut=new Th,D[V]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(V){let ut=D[V];return ut===void 0&&(ut=new Th,D[V]=ut),ut.getGripSpace()},this.getHand=function(V){let ut=D[V];return ut===void 0&&(ut=new Th,D[V]=ut),ut.getHandSpace()};function G(V){const ut=P.indexOf(V.inputSource);if(ut===-1)return;const Et=D[ut];Et!==void 0&&(Et.update(V.inputSource,V.frame,p||d),Et.dispatchEvent({type:V.type,data:V.inputSource}))}function pt(){l.removeEventListener("select",G),l.removeEventListener("selectstart",G),l.removeEventListener("selectend",G),l.removeEventListener("squeeze",G),l.removeEventListener("squeezestart",G),l.removeEventListener("squeezeend",G),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",ht);for(let V=0;V<D.length;V++){const ut=P[V];ut!==null&&(P[V]=null,D[V].disconnect(ut))}J=null,ct=null,T.reset(),e.setRenderTarget(g),M=null,x=null,y=null,l=null,L=null,Mt.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){u=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){h=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(V){p=V},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return y},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(V){if(l=V,l!==null){if(g=e.getRenderTarget(),l.addEventListener("select",G),l.addEventListener("selectstart",G),l.addEventListener("selectend",G),l.addEventListener("squeeze",G),l.addEventListener("squeezestart",G),l.addEventListener("squeezeend",G),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",ht),S.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(Y),l.renderState.layers===void 0){const ut={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ut),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new yr(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:Va,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ut=null,Et=null,yt=null;S.depth&&(yt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ut=S.stencil?Uo:Es,Et=S.stencil?Lo:Rs);const Wt={colorFormat:i.RGBA8,depthFormat:yt,scaleFactor:u};y=new XRWebGLBinding(l,i),x=y.createProjectionLayer(Wt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new yr(x.textureWidth,x.textureHeight,{format:Ri,type:Va,depthTexture:new Bv(x.textureWidth,x.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function ht(V){for(let ut=0;ut<V.removed.length;ut++){const Et=V.removed[ut],yt=P.indexOf(Et);yt>=0&&(P[yt]=null,D[yt].disconnect(Et))}for(let ut=0;ut<V.added.length;ut++){const Et=V.added[ut];let yt=P.indexOf(Et);if(yt===-1){for(let zt=0;zt<D.length;zt++)if(zt>=P.length){P.push(Et),yt=zt;break}else if(P[zt]===null){P[zt]=Et,yt=zt;break}if(yt===-1)break}const Wt=D[yt];Wt&&Wt.connect(Et)}}const F=new Q,j=new Q;function X(V,ut,Et){F.setFromMatrixPosition(ut.matrixWorld),j.setFromMatrixPosition(Et.matrixWorld);const yt=F.distanceTo(j),Wt=ut.projectionMatrix.elements,zt=Et.projectionMatrix.elements,Z=Wt[14]/(Wt[10]-1),Se=Wt[14]/(Wt[10]+1),kt=(Wt[9]+1)/Wt[5],Te=(Wt[9]-1)/Wt[5],Bt=(Wt[8]-1)/Wt[0],oe=(zt[8]+1)/zt[0],$t=Z*Bt,fe=Z*oe,Oe=yt/(-Bt+oe),z=Oe*-Bt;ut.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(z),V.translateZ(Oe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const R=Z+Oe,ot=Se+Oe,vt=$t-z,Tt=fe+(yt-z),St=kt*Se/ot*R,Ht=Te*Se/ot*R;V.projectionMatrix.makePerspective(vt,Tt,St,Ht,R,ot),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function _t(V,ut){ut===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ut.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(l===null)return;T.texture!==null&&(V.near=T.depthNear,V.far=T.depthFar),C.near=it.near=N.near=V.near,C.far=it.far=N.far=V.far,(J!==C.near||ct!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),J=C.near,ct=C.far,N.near=J,N.far=ct,it.near=J,it.far=ct,N.updateProjectionMatrix(),it.updateProjectionMatrix(),V.updateProjectionMatrix());const ut=V.parent,Et=C.cameras;_t(C,ut);for(let yt=0;yt<Et.length;yt++)_t(Et[yt],ut);Et.length===2?X(C,N,it):C.projectionMatrix.copy(N.projectionMatrix),mt(V,C,ut)};function mt(V,ut,Et){Et===null?V.matrix.copy(ut.matrixWorld):(V.matrix.copy(Et.matrixWorld),V.matrix.invert(),V.matrix.multiply(ut.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ut.projectionMatrix),V.projectionMatrixInverse.copy(ut.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Oh*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(V){m=V,x!==null&&(x.fixedFoveation=V),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=V)},this.hasDepthSensing=function(){return T.texture!==null};let O=null;function nt(V,ut){if(v=ut.getViewerPose(p||d),A=ut,v!==null){const Et=v.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let yt=!1;Et.length!==C.cameras.length&&(C.cameras.length=0,yt=!0);for(let zt=0;zt<Et.length;zt++){const Z=Et[zt];let Se=null;if(M!==null)Se=M.getViewport(Z);else{const Te=y.getViewSubImage(x,Z);Se=Te.viewport,zt===0&&(e.setRenderTargetTextures(L,Te.colorTexture,x.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(L))}let kt=U[zt];kt===void 0&&(kt=new si,kt.layers.enable(zt),kt.viewport=new fn,U[zt]=kt),kt.matrix.fromArray(Z.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Z.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Se.x,Se.y,Se.width,Se.height),zt===0&&(C.matrix.copy(kt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),yt===!0&&C.cameras.push(kt)}const Wt=l.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")){const zt=y.getDepthInformation(Et[0]);zt&&zt.isValid&&zt.texture&&T.init(e,zt,l.renderState)}}for(let Et=0;Et<D.length;Et++){const yt=P[Et],Wt=D[Et];yt!==null&&Wt!==void 0&&Wt.update(yt,ut,p||d)}T.render(e,C),O&&O(V,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),A=null}const Mt=new Pv;Mt.setAnimationLoop(nt),this.setAnimationLoop=function(V){O=V},this.dispose=function(){}}}const pr=new Di,SA=new Xe;function yA(o,e){function i(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,Lv(o)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function l(S,g,L,D,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(S,g):g.isMeshToonMaterial?(u(S,g),y(S,g)):g.isMeshPhongMaterial?(u(S,g),v(S,g)):g.isMeshStandardMaterial?(u(S,g),x(S,g),g.isMeshPhysicalMaterial&&M(S,g,P)):g.isMeshMatcapMaterial?(u(S,g),A(S,g)):g.isMeshDepthMaterial?u(S,g):g.isMeshDistanceMaterial?(u(S,g),T(S,g)):g.isMeshNormalMaterial?u(S,g):g.isLineBasicMaterial?(d(S,g),g.isLineDashedMaterial&&h(S,g)):g.isPointsMaterial?m(S,g,L,D):g.isSpriteMaterial?p(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,i(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===In&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,i(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===In&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,i(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,i(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const L=e.get(g),D=L.envMap,P=L.envMapRotation;if(D&&(S.envMap.value=D,pr.copy(P),pr.x*=-1,pr.y*=-1,pr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),S.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(pr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap){S.lightMap.value=g.lightMap;const Y=o._useLegacyLights===!0?Math.PI:1;S.lightMapIntensity.value=g.lightMapIntensity*Y,i(g.lightMap,S.lightMapTransform)}g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,S.aoMapTransform))}function d(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform))}function h(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function m(S,g,L,D){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*L,S.scale.value=D*.5,g.map&&(S.map.value=g.map,i(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function p(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,i(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,i(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function y(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function x(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,L){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,g){g.matcap&&(S.matcap.value=g.matcap)}function T(S,g){const L=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function xA(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,D){const P=D.program;r.uniformBlockBinding(L,P)}function p(L,D){let P=l[L.id];P===void 0&&(A(L),P=v(L),l[L.id]=P,L.addEventListener("dispose",S));const Y=D.program;r.updateUBOMapping(L,Y);const I=e.render.frame;u[L.id]!==I&&(x(L),u[L.id]=I)}function v(L){const D=y();L.__bindingPointIndex=D;const P=o.createBuffer(),Y=L.__size,I=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,Y,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,P),P}function y(){for(let L=0;L<h;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const D=l[L.id],P=L.uniforms,Y=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let I=0,N=P.length;I<N;I++){const it=Array.isArray(P[I])?P[I]:[P[I]];for(let U=0,C=it.length;U<C;U++){const J=it[U];if(M(J,I,U,Y)===!0){const ct=J.__offset,G=Array.isArray(J.value)?J.value:[J.value];let pt=0;for(let ht=0;ht<G.length;ht++){const F=G[ht],j=T(F);typeof F=="number"||typeof F=="boolean"?(J.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,ct+pt,J.__data)):F.isMatrix3?(J.__data[0]=F.elements[0],J.__data[1]=F.elements[1],J.__data[2]=F.elements[2],J.__data[3]=0,J.__data[4]=F.elements[3],J.__data[5]=F.elements[4],J.__data[6]=F.elements[5],J.__data[7]=0,J.__data[8]=F.elements[6],J.__data[9]=F.elements[7],J.__data[10]=F.elements[8],J.__data[11]=0):(F.toArray(J.__data,pt),pt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,J.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,D,P,Y){const I=L.value,N=D+"_"+P;if(Y[N]===void 0)return typeof I=="number"||typeof I=="boolean"?Y[N]=I:Y[N]=I.clone(),!0;{const it=Y[N];if(typeof I=="number"||typeof I=="boolean"){if(it!==I)return Y[N]=I,!0}else if(it.equals(I)===!1)return it.copy(I),!0}return!1}function A(L){const D=L.uniforms;let P=0;const Y=16;for(let N=0,it=D.length;N<it;N++){const U=Array.isArray(D[N])?D[N]:[D[N]];for(let C=0,J=U.length;C<J;C++){const ct=U[C],G=Array.isArray(ct.value)?ct.value:[ct.value];for(let pt=0,ht=G.length;pt<ht;pt++){const F=G[pt],j=T(F),X=P%Y;X!==0&&Y-X<j.boundary&&(P+=Y-X),ct.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=P,P+=j.storage}}}const I=P%Y;return I>0&&(P+=Y-I),L.__size=P,L.__cache={},this}function T(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function S(L){const D=L.target;D.removeEventListener("dispose",S);const P=d.indexOf(D.__bindingPointIndex);d.splice(P,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function g(){for(const L in l)o.deleteBuffer(l[L]);d=[],l={},u={}}return{bind:m,update:p,dispose:g}}class MA{constructor(e={}){const{canvas:i=px(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=d;const M=new Uint32Array(4),A=new Int32Array(4);let T=null,S=null;const g=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ti,this._useLegacyLights=!1,this.toneMapping=Ha,this.toneMappingExposure=1;const D=this;let P=!1,Y=0,I=0,N=null,it=-1,U=null;const C=new fn,J=new fn;let ct=null;const G=new ye(0);let pt=0,ht=i.width,F=i.height,j=1,X=null,_t=null;const mt=new fn(0,0,ht,F),O=new fn(0,0,ht,F);let nt=!1;const Mt=new Gh;let V=!1,ut=!1;const Et=new Xe,yt=new Q,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function zt(){return N===null?j:1}let Z=r;function Se(w,q){return i.getContext(w,q)}try{const w={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ih}`),i.addEventListener("webglcontextlost",E,!1),i.addEventListener("webglcontextrestored",W,!1),i.addEventListener("webglcontextcreationerror",tt,!1),Z===null){const q="webgl2";if(Z=Se(q,w),Z===null)throw Se(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,Te,Bt,oe,$t,fe,Oe,z,R,ot,vt,Tt,St,Ht,wt,Ct,Zt,At,It,he,qt,Ut,Gt,Qt;function ae(){kt=new DT(Z),kt.init(),Ut=new hA(Z,kt),Te=new TT(Z,kt,e,Ut),Bt=new uA(Z),oe=new NT(Z),$t=new Kb,fe=new fA(Z,kt,Bt,$t,Te,Ut,oe),Oe=new AT(D),z=new wT(D),R=new Hx(Z),Gt=new MT(Z,R),ot=new UT(Z,R,oe,Gt),vt=new PT(Z,ot,R,oe),It=new OT(Z,Te,fe),Ct=new bT($t),Tt=new Zb(D,Oe,z,kt,Te,Gt,Ct),St=new yA(D,$t),Ht=new Jb,wt=new aA(kt),At=new xT(D,Oe,z,Bt,vt,x,m),Zt=new cA(D,vt,Te),Qt=new xA(Z,oe,Te,Bt),he=new ET(Z,kt,oe),qt=new LT(Z,kt,oe),oe.programs=Tt.programs,D.capabilities=Te,D.extensions=kt,D.properties=$t,D.renderLists=Ht,D.shadowMap=Zt,D.state=Bt,D.info=oe}ae();const re=new vA(D,Z);this.xr=re,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(ht,F,!1))},this.getSize=function(w){return w.set(ht,F)},this.setSize=function(w,q,lt=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ht=w,F=q,i.width=Math.floor(w*j),i.height=Math.floor(q*j),lt===!0&&(i.style.width=w+"px",i.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(ht*j,F*j).floor()},this.setDrawingBufferSize=function(w,q,lt){ht=w,F=q,j=lt,i.width=Math.floor(w*lt),i.height=Math.floor(q*lt),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(mt)},this.setViewport=function(w,q,lt,rt){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,q,lt,rt),Bt.viewport(C.copy(mt).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(O)},this.setScissor=function(w,q,lt,rt){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,q,lt,rt),Bt.scissor(J.copy(O).multiplyScalar(j).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(w){Bt.setScissorTest(nt=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){_t=w},this.getClearColor=function(w){return w.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(w=!0,q=!0,lt=!0){let rt=0;if(w){let at=!1;if(N!==null){const Rt=N.texture.format;at=Rt===Mv||Rt===xv||Rt===yv}if(at){const Rt=N.texture.type,Ot=Rt===Va||Rt===Rs||Rt===gv||Rt===Lo||Rt===vv||Rt===Sv,Nt=At.getClearColor(),Vt=At.getClearAlpha(),Kt=Nt.r,Jt=Nt.g,Ft=Nt.b;Ot?(M[0]=Kt,M[1]=Jt,M[2]=Ft,M[3]=Vt,Z.clearBufferuiv(Z.COLOR,0,M)):(A[0]=Kt,A[1]=Jt,A[2]=Ft,A[3]=Vt,Z.clearBufferiv(Z.COLOR,0,A))}else rt|=Z.COLOR_BUFFER_BIT}q&&(rt|=Z.DEPTH_BUFFER_BIT),lt&&(rt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",E,!1),i.removeEventListener("webglcontextrestored",W,!1),i.removeEventListener("webglcontextcreationerror",tt,!1),Ht.dispose(),wt.dispose(),$t.dispose(),Oe.dispose(),z.dispose(),vt.dispose(),Gt.dispose(),Qt.dispose(),Tt.dispose(),re.dispose(),re.removeEventListener("sessionstart",_e),re.removeEventListener("sessionend",He),be.stop()};function E(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=oe.autoReset,q=Zt.enabled,lt=Zt.autoUpdate,rt=Zt.needsUpdate,at=Zt.type;ae(),oe.autoReset=w,Zt.enabled=q,Zt.autoUpdate=lt,Zt.needsUpdate=rt,Zt.type=at}function tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xt(w){const q=w.target;q.removeEventListener("dispose",xt),bt(q)}function bt(w){jt(w),$t.remove(w)}function jt(w){const q=$t.get(w).programs;q!==void 0&&(q.forEach(function(lt){Tt.releaseProgram(lt)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,lt,rt,at,Rt){q===null&&(q=Wt);const Ot=at.isMesh&&at.matrixWorld.determinant()<0,Nt=vi(w,q,lt,rt,at);Bt.setMaterial(rt,Ot);let Vt=lt.index,Kt=1;if(rt.wireframe===!0){if(Vt=ot.getWireframeAttribute(lt),Vt===void 0)return;Kt=2}const Jt=lt.drawRange,Ft=lt.attributes.position;let Ve=Jt.start*Kt,nn=(Jt.start+Jt.count)*Kt;Rt!==null&&(Ve=Math.max(Ve,Rt.start*Kt),nn=Math.min(nn,(Rt.start+Rt.count)*Kt)),Vt!==null?(Ve=Math.max(Ve,0),nn=Math.min(nn,Vt.count)):Ft!=null&&(Ve=Math.max(Ve,0),nn=Math.min(nn,Ft.count));const qe=nn-Ve;if(qe<0||qe===1/0)return;Gt.setup(at,rt,Nt,lt,Vt);let vn,xe=he;if(Vt!==null&&(vn=R.get(Vt),xe=qt,xe.setIndex(vn)),at.isMesh)rt.wireframe===!0?(Bt.setLineWidth(rt.wireframeLinewidth*zt()),xe.setMode(Z.LINES)):xe.setMode(Z.TRIANGLES);else if(at.isLine){let te=rt.linewidth;te===void 0&&(te=1),Bt.setLineWidth(te*zt()),at.isLineSegments?xe.setMode(Z.LINES):at.isLineLoop?xe.setMode(Z.LINE_LOOP):xe.setMode(Z.LINE_STRIP)}else at.isPoints?xe.setMode(Z.POINTS):at.isSprite&&xe.setMode(Z.TRIANGLES);if(at.isBatchedMesh)at._multiDrawInstances!==null?xe.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances):xe.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else if(at.isInstancedMesh)xe.renderInstances(Ve,qe,at.count);else if(lt.isInstancedBufferGeometry){const te=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,ra=Math.min(lt.instanceCount,te);xe.renderInstances(Ve,qe,ra)}else xe.render(Ve,qe)};function ie(w,q,lt){w.transparent===!0&&w.side===na&&w.forceSinglePass===!1?(w.side=In,w.needsUpdate=!0,aa(w,q,lt),w.side=Ga,w.needsUpdate=!0,aa(w,q,lt),w.side=na):aa(w,q,lt)}this.compile=function(w,q,lt=null){lt===null&&(lt=w),S=wt.get(lt),S.init(q),L.push(S),lt.traverseVisible(function(at){at.isLight&&at.layers.test(q.layers)&&(S.pushLight(at),at.castShadow&&S.pushShadow(at))}),w!==lt&&w.traverseVisible(function(at){at.isLight&&at.layers.test(q.layers)&&(S.pushLight(at),at.castShadow&&S.pushShadow(at))}),S.setupLights(D._useLegacyLights);const rt=new Set;return w.traverse(function(at){const Rt=at.material;if(Rt)if(Array.isArray(Rt))for(let Ot=0;Ot<Rt.length;Ot++){const Nt=Rt[Ot];ie(Nt,lt,at),rt.add(Nt)}else ie(Rt,lt,at),rt.add(Rt)}),L.pop(),S=null,rt},this.compileAsync=function(w,q,lt=null){const rt=this.compile(w,q,lt);return new Promise(at=>{function Rt(){if(rt.forEach(function(Ot){$t.get(Ot).currentProgram.isReady()&&rt.delete(Ot)}),rt.size===0){at(w);return}setTimeout(Rt,10)}kt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Re=null;function Ze(w){Re&&Re(w)}function _e(){be.stop()}function He(){be.start()}const be=new Pv;be.setAnimationLoop(Ze),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(w){Re=w,re.setAnimationLoop(w),w===null?be.stop():be.start()},re.addEventListener("sessionstart",_e),re.addEventListener("sessionend",He),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(q),q=re.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,q,N),S=wt.get(w,L.length),S.init(q),L.push(S),Et.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Mt.setFromProjectionMatrix(Et),ut=this.localClippingEnabled,V=Ct.init(this.clippingPlanes,ut),T=Ht.get(w,g.length),T.init(),g.push(T),_i(w,q,0,D.sortObjects),T.finish(),D.sortObjects===!0&&T.sort(X,_t);const lt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1;lt&&At.addToRenderList(T,w),this.info.render.frame++,V===!0&&Ct.beginShadows();const rt=S.state.shadowsArray;Zt.render(rt,w,q),V===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=T.opaque,Rt=T.transmissive;if(S.setupLights(D._useLegacyLights),q.isArrayCamera){const Ot=q.cameras;if(Rt.length>0)for(let Nt=0,Vt=Ot.length;Nt<Vt;Nt++){const Kt=Ot[Nt];li(at,Rt,w,Kt)}lt&&At.render(w);for(let Nt=0,Vt=Ot.length;Nt<Vt;Nt++){const Kt=Ot[Nt];Tn(T,w,Kt,Kt.viewport)}}else Rt.length>0&&li(at,Rt,w,q),lt&&At.render(w),Tn(T,w,q);N!==null&&(fe.updateMultisampleRenderTarget(N),fe.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(D,w,q),Gt.resetDefaultState(),it=-1,U=null,L.pop(),L.length>0?(S=L[L.length-1],V===!0&&Ct.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,g.pop(),g.length>0?T=g[g.length-1]:T=null};function _i(w,q,lt,rt){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)lt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Mt.intersectsSprite(w)){rt&&yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Et);const Ot=vt.update(w),Nt=w.material;Nt.visible&&T.push(w,Ot,Nt,lt,yt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Mt.intersectsObject(w))){const Ot=vt.update(w),Nt=w.material;if(rt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),yt.copy(w.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),yt.copy(Ot.boundingSphere.center)),yt.applyMatrix4(w.matrixWorld).applyMatrix4(Et)),Array.isArray(Nt)){const Vt=Ot.groups;for(let Kt=0,Jt=Vt.length;Kt<Jt;Kt++){const Ft=Vt[Kt],Ve=Nt[Ft.materialIndex];Ve&&Ve.visible&&T.push(w,Ot,Ve,lt,yt.z,Ft)}}else Nt.visible&&T.push(w,Ot,Nt,lt,yt.z,null)}}const Rt=w.children;for(let Ot=0,Nt=Rt.length;Ot<Nt;Ot++)_i(Rt[Ot],q,lt,rt)}function Tn(w,q,lt,rt){const at=w.opaque,Rt=w.transmissive,Ot=w.transparent;S.setupLightsView(lt),V===!0&&Ct.setGlobalState(D.clippingPlanes,lt),rt&&Bt.viewport(C.copy(rt)),at.length>0&&Zn(at,q,lt),Rt.length>0&&Zn(Rt,q,lt),Ot.length>0&&Zn(Ot,q,lt),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function li(w,q,lt,rt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[rt.id]===void 0&&(S.state.transmissionRenderTarget[rt.id]=new yr(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Rc:Va,minFilter:Sr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Rt=S.state.transmissionRenderTarget[rt.id],Ot=rt.viewport||C;Rt.setSize(Ot.z,Ot.w);const Nt=D.getRenderTarget();D.setRenderTarget(Rt),D.getClearColor(G),pt=D.getClearAlpha(),pt<1&&D.setClearColor(16777215,.5),D.clear();const Vt=D.toneMapping;D.toneMapping=Ha;const Kt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),S.setupLightsView(rt),V===!0&&Ct.setGlobalState(D.clippingPlanes,rt),Zn(w,lt,rt),fe.updateMultisampleRenderTarget(Rt),fe.updateRenderTargetMipmap(Rt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ft=0,Ve=q.length;Ft<Ve;Ft++){const nn=q[Ft],qe=nn.object,vn=nn.geometry,xe=nn.material,te=nn.group;if(xe.side===na&&qe.layers.test(rt.layers)){const ra=xe.side;xe.side=In,xe.needsUpdate=!0,Li(qe,lt,rt,vn,xe,te),xe.side=ra,xe.needsUpdate=!0,Jt=!0}}Jt===!0&&(fe.updateMultisampleRenderTarget(Rt),fe.updateRenderTargetMipmap(Rt))}D.setRenderTarget(Nt),D.setClearColor(G,pt),Kt!==void 0&&(rt.viewport=Kt),D.toneMapping=Vt}function Zn(w,q,lt){const rt=q.isScene===!0?q.overrideMaterial:null;for(let at=0,Rt=w.length;at<Rt;at++){const Ot=w[at],Nt=Ot.object,Vt=Ot.geometry,Kt=rt===null?Ot.material:rt,Jt=Ot.group;Nt.layers.test(lt.layers)&&Li(Nt,q,lt,Vt,Kt,Jt)}}function Li(w,q,lt,rt,at,Rt){w.onBeforeRender(D,q,lt,rt,at,Rt),w.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),at.onBeforeRender(D,q,lt,rt,w,Rt),at.transparent===!0&&at.side===na&&at.forceSinglePass===!1?(at.side=In,at.needsUpdate=!0,D.renderBufferDirect(lt,q,rt,at,w,Rt),at.side=Ga,at.needsUpdate=!0,D.renderBufferDirect(lt,q,rt,at,w,Rt),at.side=na):D.renderBufferDirect(lt,q,rt,at,w,Rt),w.onAfterRender(D,q,lt,rt,at,Rt)}function aa(w,q,lt){q.isScene!==!0&&(q=Wt);const rt=$t.get(w),at=S.state.lights,Rt=S.state.shadowsArray,Ot=at.state.version,Nt=Tt.getParameters(w,at.state,Rt,q,lt),Vt=Tt.getProgramCacheKey(Nt);let Kt=rt.programs;rt.environment=w.isMeshStandardMaterial?q.environment:null,rt.fog=q.fog,rt.envMap=(w.isMeshStandardMaterial?z:Oe).get(w.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,Kt===void 0&&(w.addEventListener("dispose",xt),Kt=new Map,rt.programs=Kt);let Jt=Kt.get(Vt);if(Jt!==void 0){if(rt.currentProgram===Jt&&rt.lightsStateVersion===Ot)return Ns(w,Nt),Jt}else Nt.uniforms=Tt.getUniforms(w),w.onBuild(lt,Nt,D),w.onBeforeCompile(Nt,D),Jt=Tt.acquireProgram(Nt,Vt),Kt.set(Vt,Jt),rt.uniforms=Nt.uniforms;const Ft=rt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ft.clippingPlanes=Ct.uniform),Ns(w,Nt),rt.needsLights=_n(w),rt.lightsStateVersion=Ot,rt.needsLights&&(Ft.ambientLightColor.value=at.state.ambient,Ft.lightProbe.value=at.state.probe,Ft.directionalLights.value=at.state.directional,Ft.directionalLightShadows.value=at.state.directionalShadow,Ft.spotLights.value=at.state.spot,Ft.spotLightShadows.value=at.state.spotShadow,Ft.rectAreaLights.value=at.state.rectArea,Ft.ltc_1.value=at.state.rectAreaLTC1,Ft.ltc_2.value=at.state.rectAreaLTC2,Ft.pointLights.value=at.state.point,Ft.pointLightShadows.value=at.state.pointShadow,Ft.hemisphereLights.value=at.state.hemi,Ft.directionalShadowMap.value=at.state.directionalShadowMap,Ft.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Ft.spotShadowMap.value=at.state.spotShadowMap,Ft.spotLightMatrix.value=at.state.spotLightMatrix,Ft.spotLightMap.value=at.state.spotLightMap,Ft.pointShadowMap.value=at.state.pointShadowMap,Ft.pointShadowMatrix.value=at.state.pointShadowMatrix),rt.currentProgram=Jt,rt.uniformsList=null,Jt}function Ls(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=_c.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Ns(w,q){const lt=$t.get(w);lt.outputColorSpace=q.outputColorSpace,lt.batching=q.batching,lt.instancing=q.instancing,lt.instancingColor=q.instancingColor,lt.instancingMorph=q.instancingMorph,lt.skinning=q.skinning,lt.morphTargets=q.morphTargets,lt.morphNormals=q.morphNormals,lt.morphColors=q.morphColors,lt.morphTargetsCount=q.morphTargetsCount,lt.numClippingPlanes=q.numClippingPlanes,lt.numIntersection=q.numClipIntersection,lt.vertexAlphas=q.vertexAlphas,lt.vertexTangents=q.vertexTangents,lt.toneMapping=q.toneMapping}function vi(w,q,lt,rt,at){q.isScene!==!0&&(q=Wt),fe.resetTextureUnits();const Rt=q.fog,Ot=rt.isMeshStandardMaterial?q.environment:null,Nt=N===null?D.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ka,Vt=(rt.isMeshStandardMaterial?z:Oe).get(rt.envMap||Ot),Kt=rt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Jt=!!lt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Ft=!!lt.morphAttributes.position,Ve=!!lt.morphAttributes.normal,nn=!!lt.morphAttributes.color;let qe=Ha;rt.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(qe=D.toneMapping);const vn=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,xe=vn!==void 0?vn.length:0,te=$t.get(rt),ra=S.state.lights;if(V===!0&&(ut===!0||w!==U)){const An=w===U&&rt.id===it;Ct.setState(rt,w,An)}let ze=!1;rt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==ra.state.version||te.outputColorSpace!==Nt||at.isBatchedMesh&&te.batching===!1||!at.isBatchedMesh&&te.batching===!0||at.isInstancedMesh&&te.instancing===!1||!at.isInstancedMesh&&te.instancing===!0||at.isSkinnedMesh&&te.skinning===!1||!at.isSkinnedMesh&&te.skinning===!0||at.isInstancedMesh&&te.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&te.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&te.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&te.instancingMorph===!1&&at.morphTexture!==null||te.envMap!==Vt||rt.fog===!0&&te.fog!==Rt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ct.numPlanes||te.numIntersection!==Ct.numIntersection)||te.vertexAlphas!==Kt||te.vertexTangents!==Jt||te.morphTargets!==Ft||te.morphNormals!==Ve||te.morphColors!==nn||te.toneMapping!==qe||te.morphTargetsCount!==xe)&&(ze=!0):(ze=!0,te.__version=rt.version);let Kn=te.currentProgram;ze===!0&&(Kn=aa(rt,q,at));let Wa=!1,bn=!1,Sn=!1;const an=Kn.getUniforms(),Si=te.uniforms;if(Bt.useProgram(Kn.program)&&(Wa=!0,bn=!0,Sn=!0),rt.id!==it&&(it=rt.id,bn=!0),Wa||U!==w){an.setValue(Z,"projectionMatrix",w.projectionMatrix),an.setValue(Z,"viewMatrix",w.matrixWorldInverse);const An=an.map.cameraPosition;An!==void 0&&An.setValue(Z,yt.setFromMatrixPosition(w.matrixWorld)),Te.logarithmicDepthBuffer&&an.setValue(Z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&an.setValue(Z,"isOrthographic",w.isOrthographicCamera===!0),U!==w&&(U=w,bn=!0,Sn=!0)}if(at.isSkinnedMesh){an.setOptional(Z,at,"bindMatrix"),an.setOptional(Z,at,"bindMatrixInverse");const An=at.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),an.setValue(Z,"boneTexture",An.boneTexture,fe))}at.isBatchedMesh&&(an.setOptional(Z,at,"batchingTexture"),an.setValue(Z,"batchingTexture",at._matricesTexture,fe));const qa=lt.morphAttributes;if((qa.position!==void 0||qa.normal!==void 0||qa.color!==void 0)&&It.update(at,lt,Kn),(bn||te.receiveShadow!==at.receiveShadow)&&(te.receiveShadow=at.receiveShadow,an.setValue(Z,"receiveShadow",at.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Si.envMap.value=Vt,Si.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&q.environment!==null&&(Si.envMapIntensity.value=q.environmentIntensity),bn&&(an.setValue(Z,"toneMappingExposure",D.toneMappingExposure),te.needsLights&&en(Si,Sn),Rt&&rt.fog===!0&&St.refreshFogUniforms(Si,Rt),St.refreshMaterialUniforms(Si,rt,j,F,S.state.transmissionRenderTarget[w.id]),_c.upload(Z,Ls(te),Si,fe)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(_c.upload(Z,Ls(te),Si,fe),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&an.setValue(Z,"center",at.center),an.setValue(Z,"modelViewMatrix",at.modelViewMatrix),an.setValue(Z,"normalMatrix",at.normalMatrix),an.setValue(Z,"modelMatrix",at.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const An=rt.uniformsGroups;for(let sa=0,Nc=An.length;sa<Nc;sa++){const Rn=An[sa];Qt.update(Rn,Kn),Qt.bind(Rn,Kn)}}return Kn}function en(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function _n(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,q,lt){$t.get(w.texture).__webglTexture=q,$t.get(w.depthTexture).__webglTexture=lt;const rt=$t.get(w);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=lt===void 0,rt.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,q){const lt=$t.get(w);lt.__webglFramebuffer=q,lt.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(w,q=0,lt=0){N=w,Y=q,I=lt;let rt=!0,at=null,Rt=!1,Ot=!1;if(w){const Vt=$t.get(w);Vt.__useDefaultFramebuffer!==void 0?(Bt.bindFramebuffer(Z.FRAMEBUFFER,null),rt=!1):Vt.__webglFramebuffer===void 0?fe.setupRenderTarget(w):Vt.__hasExternalTextures&&fe.rebindTextures(w,$t.get(w.texture).__webglTexture,$t.get(w.depthTexture).__webglTexture);const Kt=w.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ot=!0);const Jt=$t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Jt[q])?at=Jt[q][lt]:at=Jt[q],Rt=!0):w.samples>0&&fe.useMultisampledRTT(w)===!1?at=$t.get(w).__webglMultisampledFramebuffer:Array.isArray(Jt)?at=Jt[lt]:at=Jt,C.copy(w.viewport),J.copy(w.scissor),ct=w.scissorTest}else C.copy(mt).multiplyScalar(j).floor(),J.copy(O).multiplyScalar(j).floor(),ct=nt;if(Bt.bindFramebuffer(Z.FRAMEBUFFER,at)&&rt&&Bt.drawBuffers(w,at),Bt.viewport(C),Bt.scissor(J),Bt.setScissorTest(ct),Rt){const Vt=$t.get(w.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Vt.__webglTexture,lt)}else if(Ot){const Vt=$t.get(w.texture),Kt=q||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Vt.__webglTexture,lt||0,Kt)}it=-1},this.readRenderTargetPixels=function(w,q,lt,rt,at,Rt,Ot){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=$t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ot!==void 0&&(Nt=Nt[Ot]),Nt){Bt.bindFramebuffer(Z.FRAMEBUFFER,Nt);try{const Vt=w.texture,Kt=Vt.format,Jt=Vt.type;if(!Te.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-rt&&lt>=0&&lt<=w.height-at&&Z.readPixels(q,lt,rt,at,Ut.convert(Kt),Ut.convert(Jt),Rt)}finally{const Vt=N!==null?$t.get(N).__webglFramebuffer:null;Bt.bindFramebuffer(Z.FRAMEBUFFER,Vt)}}},this.copyFramebufferToTexture=function(w,q,lt=0){const rt=Math.pow(2,-lt),at=Math.floor(q.image.width*rt),Rt=Math.floor(q.image.height*rt);fe.setTexture2D(q,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,lt,0,0,w.x,w.y,at,Rt),Bt.unbindTexture()},this.copyTextureToTexture=function(w,q,lt,rt=0){const at=q.image.width,Rt=q.image.height,Ot=Ut.convert(lt.format),Nt=Ut.convert(lt.type);fe.setTexture2D(lt,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,lt.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,lt.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,lt.unpackAlignment),q.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,rt,w.x,w.y,at,Rt,Ot,Nt,q.image.data):q.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,rt,w.x,w.y,q.mipmaps[0].width,q.mipmaps[0].height,Ot,q.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,rt,w.x,w.y,Ot,Nt,q.image),rt===0&&lt.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Bt.unbindTexture()},this.copyTextureToTexture3D=function(w,q,lt,rt,at=0){const Rt=w.max.x-w.min.x,Ot=w.max.y-w.min.y,Nt=w.max.z-w.min.z,Vt=Ut.convert(rt.format),Kt=Ut.convert(rt.type);let Jt;if(rt.isData3DTexture)fe.setTexture3D(rt,0),Jt=Z.TEXTURE_3D;else if(rt.isDataArrayTexture||rt.isCompressedArrayTexture)fe.setTexture2DArray(rt,0),Jt=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,rt.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,rt.unpackAlignment);const Ft=Z.getParameter(Z.UNPACK_ROW_LENGTH),Ve=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),nn=Z.getParameter(Z.UNPACK_SKIP_PIXELS),qe=Z.getParameter(Z.UNPACK_SKIP_ROWS),vn=Z.getParameter(Z.UNPACK_SKIP_IMAGES),xe=lt.isCompressedTexture?lt.mipmaps[at]:lt.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,xe.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,xe.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,w.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,w.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,w.min.z),lt.isDataTexture||lt.isData3DTexture?Z.texSubImage3D(Jt,at,q.x,q.y,q.z,Rt,Ot,Nt,Vt,Kt,xe.data):rt.isCompressedArrayTexture?Z.compressedTexSubImage3D(Jt,at,q.x,q.y,q.z,Rt,Ot,Nt,Vt,xe.data):Z.texSubImage3D(Jt,at,q.x,q.y,q.z,Rt,Ot,Nt,Vt,Kt,xe),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Ft),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ve),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,nn),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,qe),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,vn),at===0&&rt.generateMipmaps&&Z.generateMipmap(Jt),Bt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?fe.setTextureCube(w,0):w.isData3DTexture?fe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?fe.setTexture2DArray(w,0):fe.setTexture2D(w,0),Bt.unbindTexture()},this.resetState=function(){Y=0,I=0,N=null,Bt.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Fh?"display-p3":"srgb",i.unpackColorSpace=Ne.workingColorSpace===Cc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class EA extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Xv extends ws{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new Q,bc=new Q,iv=new Xe,wo=new Dc,dc=new wc,bh=new Q,av=new Q;class TA extends gn{constructor(e=new Ui,i=new Xv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Tc.fromBufferAttribute(i,l-1),bc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Tc.distanceTo(bc);e.setAttribute("lineDistance",new gi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),dc.copy(r.boundingSphere),dc.applyMatrix4(l),dc.radius+=u,e.ray.intersectsSphere(dc)===!1)return;iv.copy(l).invert(),wo.copy(e.ray).applyMatrix4(iv);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const M=Math.max(0,d.start),A=Math.min(v.count,d.start+d.count);for(let T=M,S=A-1;T<S;T+=p){const g=v.getX(T),L=v.getX(T+1),D=pc(this,e,wo,m,g,L);D&&i.push(D)}if(this.isLineLoop){const T=v.getX(A-1),S=v.getX(M),g=pc(this,e,wo,m,T,S);g&&i.push(g)}}else{const M=Math.max(0,d.start),A=Math.min(x.count,d.start+d.count);for(let T=M,S=A-1;T<S;T+=p){const g=pc(this,e,wo,m,T,T+1);g&&i.push(g)}if(this.isLineLoop){const T=pc(this,e,wo,m,A-1,M);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function pc(o,e,i,r,l,u){const d=o.geometry.attributes.position;if(Tc.fromBufferAttribute(d,l),bc.fromBufferAttribute(d,u),i.distanceSqToSegment(Tc,bc,bh,av)>r)return;bh.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(bh);if(!(m<e.near||m>e.far))return{distance:m,point:av.clone().applyMatrix4(o.matrixWorld),index:l,face:null,faceIndex:null,object:o}}class Xh extends Ui{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const v=[],y=new Q,x=new Q,M=[],A=[],T=[],S=[];for(let g=0;g<=r;g++){const L=[],D=g/r;let P=0;g===0&&d===0?P=.5/i:g===r&&m===Math.PI&&(P=-.5/i);for(let Y=0;Y<=i;Y++){const I=Y/i;y.x=-e*Math.cos(l+I*u)*Math.sin(d+D*h),y.y=e*Math.cos(d+D*h),y.z=e*Math.sin(l+I*u)*Math.sin(d+D*h),A.push(y.x,y.y,y.z),x.copy(y).normalize(),T.push(x.x,x.y,x.z),S.push(I+P,1-D),L.push(p++)}v.push(L)}for(let g=0;g<r;g++)for(let L=0;L<i;L++){const D=v[g][L+1],P=v[g][L],Y=v[g+1][L],I=v[g+1][L+1];(g!==0||d>0)&&M.push(D,P,I),(g!==r-1||m<Math.PI)&&M.push(P,Y,I)}this.setIndex(M),this.setAttribute("position",new gi(A,3)),this.setAttribute("normal",new gi(T,3)),this.setAttribute("uv",new gi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bA extends ws{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ev,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kv extends gn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const Ah=new Xe,rv=new Q,sv=new Q;class AA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gh,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;rv.setFromMatrixPosition(e.matrixWorld),i.position.copy(rv),sv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(sv),i.updateMatrixWorld(),Ah.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class RA extends AA{constructor(){super(new zv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class CA extends kv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new RA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wA extends kv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const ov=new Xe;class DA{constructor(e,i,r=0,l=1/0){this.ray=new Dc(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new Hh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return ov.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ov),this}intersectObject(e,i=!0,r=[]){return zh(e,this,r,i),r.sort(lv),r}intersectObjects(e,i=!0,r=[]){for(let l=0,u=e.length;l<u;l++)zh(e[l],this,r,i);return r.sort(lv),r}}function lv(o,e){return o.distance-e.distance}function zh(o,e,i,r){if(o.layers.test(e.layers)&&o.raycast(e,i),r===!0){const l=o.children;for(let u=0,d=l.length;u<d;u++)zh(l[u],e,i,!0)}}class cv{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Dn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ih);const uv={type:"change"},Rh={type:"start"},fv={type:"end"},mc=new Dc,hv=new za,UA=Math.cos(70*dx.DEG2RAD);class LA extends Mr{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:is.ROTATE,TWO:is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",Zt),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Zt),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(uv),r.update(),u=l.NONE},this.update=(function(){const E=new Q,W=new xr().setFromUnitVectors(e.up,new Q(0,1,0)),tt=W.clone().invert(),xt=new Q,bt=new xr,jt=new Q,ie=2*Math.PI;return function(Ze=null){const _e=r.object.position;E.copy(_e).sub(r.target),E.applyQuaternion(W),h.setFromVector3(E),r.autoRotate&&u===l.NONE&&ct(C(Ze)),r.enableDamping?(h.theta+=m.theta*r.dampingFactor,h.phi+=m.phi*r.dampingFactor):(h.theta+=m.theta,h.phi+=m.phi);let He=r.minAzimuthAngle,be=r.maxAzimuthAngle;isFinite(He)&&isFinite(be)&&(He<-Math.PI?He+=ie:He>Math.PI&&(He-=ie),be<-Math.PI?be+=ie:be>Math.PI&&(be-=ie),He<=be?h.theta=Math.max(He,Math.min(be,h.theta)):h.theta=h.theta>(He+be)/2?Math.max(He,h.theta):Math.min(be,h.theta)),h.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,h.phi)),h.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(v,r.dampingFactor):r.target.add(v),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor);let _i=!1;if(r.zoomToCursor&&I||r.object.isOrthographicCamera)h.radius=mt(h.radius);else{const Tn=h.radius;h.radius=mt(h.radius*p),_i=Tn!=h.radius}if(E.setFromSpherical(h),E.applyQuaternion(tt),_e.copy(r.target).add(E),r.object.lookAt(r.target),r.enableDamping===!0?(m.theta*=1-r.dampingFactor,m.phi*=1-r.dampingFactor,v.multiplyScalar(1-r.dampingFactor)):(m.set(0,0,0),v.set(0,0,0)),r.zoomToCursor&&I){let Tn=null;if(r.object.isPerspectiveCamera){const li=E.length();Tn=mt(li*p);const Zn=li-Tn;r.object.position.addScaledVector(P,Zn),r.object.updateMatrixWorld(),_i=!!Zn}else if(r.object.isOrthographicCamera){const li=new Q(Y.x,Y.y,0);li.unproject(r.object);const Zn=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/p)),r.object.updateProjectionMatrix(),_i=Zn!==r.object.zoom;const Li=new Q(Y.x,Y.y,0);Li.unproject(r.object),r.object.position.sub(Li).add(li),r.object.updateMatrixWorld(),Tn=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Tn!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Tn).add(r.object.position):(mc.origin.copy(r.object.position),mc.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(mc.direction))<UA?e.lookAt(r.target):(hv.setFromNormalAndCoplanarPoint(r.object.up,r.target),mc.intersectPlane(hv,r.target))))}else if(r.object.isOrthographicCamera){const Tn=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/p)),Tn!==r.object.zoom&&(r.object.updateProjectionMatrix(),_i=!0)}return p=1,I=!1,_i||xt.distanceToSquared(r.object.position)>d||8*(1-bt.dot(r.object.quaternion))>d||jt.distanceToSquared(r.target)>d?(r.dispatchEvent(uv),xt.copy(r.object.position),bt.copy(r.object.quaternion),jt.copy(r.target),!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",he),r.domElement.removeEventListener("pointerdown",z),r.domElement.removeEventListener("pointercancel",ot),r.domElement.removeEventListener("wheel",St),r.domElement.removeEventListener("pointermove",R),r.domElement.removeEventListener("pointerup",ot),r.domElement.getRootNode().removeEventListener("keydown",wt,{capture:!0}),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Zt),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const d=1e-6,h=new cv,m=new cv;let p=1;const v=new Q,y=new ee,x=new ee,M=new ee,A=new ee,T=new ee,S=new ee,g=new ee,L=new ee,D=new ee,P=new Q,Y=new ee;let I=!1;const N=[],it={};let U=!1;function C(E){return E!==null?2*Math.PI/60*r.autoRotateSpeed*E:2*Math.PI/60/60*r.autoRotateSpeed}function J(E){const W=Math.abs(E*.01);return Math.pow(.95,r.zoomSpeed*W)}function ct(E){m.theta-=E}function G(E){m.phi-=E}const pt=(function(){const E=new Q;return function(tt,xt){E.setFromMatrixColumn(xt,0),E.multiplyScalar(-tt),v.add(E)}})(),ht=(function(){const E=new Q;return function(tt,xt){r.screenSpacePanning===!0?E.setFromMatrixColumn(xt,1):(E.setFromMatrixColumn(xt,0),E.crossVectors(r.object.up,E)),E.multiplyScalar(tt),v.add(E)}})(),F=(function(){const E=new Q;return function(tt,xt){const bt=r.domElement;if(r.object.isPerspectiveCamera){const jt=r.object.position;E.copy(jt).sub(r.target);let ie=E.length();ie*=Math.tan(r.object.fov/2*Math.PI/180),pt(2*tt*ie/bt.clientHeight,r.object.matrix),ht(2*xt*ie/bt.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(pt(tt*(r.object.right-r.object.left)/r.object.zoom/bt.clientWidth,r.object.matrix),ht(xt*(r.object.top-r.object.bottom)/r.object.zoom/bt.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function j(E){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?p/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function X(E){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?p*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function _t(E,W){if(!r.zoomToCursor)return;I=!0;const tt=r.domElement.getBoundingClientRect(),xt=E-tt.left,bt=W-tt.top,jt=tt.width,ie=tt.height;Y.x=xt/jt*2-1,Y.y=-(bt/ie)*2+1,P.set(Y.x,Y.y,1).unproject(r.object).sub(r.object.position).normalize()}function mt(E){return Math.max(r.minDistance,Math.min(r.maxDistance,E))}function O(E){y.set(E.clientX,E.clientY)}function nt(E){_t(E.clientX,E.clientX),g.set(E.clientX,E.clientY)}function Mt(E){A.set(E.clientX,E.clientY)}function V(E){x.set(E.clientX,E.clientY),M.subVectors(x,y).multiplyScalar(r.rotateSpeed);const W=r.domElement;ct(2*Math.PI*M.x/W.clientHeight),G(2*Math.PI*M.y/W.clientHeight),y.copy(x),r.update()}function ut(E){L.set(E.clientX,E.clientY),D.subVectors(L,g),D.y>0?j(J(D.y)):D.y<0&&X(J(D.y)),g.copy(L),r.update()}function Et(E){T.set(E.clientX,E.clientY),S.subVectors(T,A).multiplyScalar(r.panSpeed),F(S.x,S.y),A.copy(T),r.update()}function yt(E){_t(E.clientX,E.clientY),E.deltaY<0?X(J(E.deltaY)):E.deltaY>0&&j(J(E.deltaY)),r.update()}function Wt(E){let W=!1;switch(E.code){case r.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?G(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):F(0,r.keyPanSpeed),W=!0;break;case r.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?G(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):F(0,-r.keyPanSpeed),W=!0;break;case r.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?ct(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):F(r.keyPanSpeed,0),W=!0;break;case r.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?ct(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):F(-r.keyPanSpeed,0),W=!0;break}W&&(E.preventDefault(),r.update())}function zt(E){if(N.length===1)y.set(E.pageX,E.pageY);else{const W=ae(E),tt=.5*(E.pageX+W.x),xt=.5*(E.pageY+W.y);y.set(tt,xt)}}function Z(E){if(N.length===1)A.set(E.pageX,E.pageY);else{const W=ae(E),tt=.5*(E.pageX+W.x),xt=.5*(E.pageY+W.y);A.set(tt,xt)}}function Se(E){const W=ae(E),tt=E.pageX-W.x,xt=E.pageY-W.y,bt=Math.sqrt(tt*tt+xt*xt);g.set(0,bt)}function kt(E){r.enableZoom&&Se(E),r.enablePan&&Z(E)}function Te(E){r.enableZoom&&Se(E),r.enableRotate&&zt(E)}function Bt(E){if(N.length==1)x.set(E.pageX,E.pageY);else{const tt=ae(E),xt=.5*(E.pageX+tt.x),bt=.5*(E.pageY+tt.y);x.set(xt,bt)}M.subVectors(x,y).multiplyScalar(r.rotateSpeed);const W=r.domElement;ct(2*Math.PI*M.x/W.clientHeight),G(2*Math.PI*M.y/W.clientHeight),y.copy(x)}function oe(E){if(N.length===1)T.set(E.pageX,E.pageY);else{const W=ae(E),tt=.5*(E.pageX+W.x),xt=.5*(E.pageY+W.y);T.set(tt,xt)}S.subVectors(T,A).multiplyScalar(r.panSpeed),F(S.x,S.y),A.copy(T)}function $t(E){const W=ae(E),tt=E.pageX-W.x,xt=E.pageY-W.y,bt=Math.sqrt(tt*tt+xt*xt);L.set(0,bt),D.set(0,Math.pow(L.y/g.y,r.zoomSpeed)),j(D.y),g.copy(L);const jt=(E.pageX+W.x)*.5,ie=(E.pageY+W.y)*.5;_t(jt,ie)}function fe(E){r.enableZoom&&$t(E),r.enablePan&&oe(E)}function Oe(E){r.enableZoom&&$t(E),r.enableRotate&&Bt(E)}function z(E){r.enabled!==!1&&(N.length===0&&(r.domElement.setPointerCapture(E.pointerId),r.domElement.addEventListener("pointermove",R),r.domElement.addEventListener("pointerup",ot)),!Gt(E)&&(qt(E),E.pointerType==="touch"?At(E):vt(E)))}function R(E){r.enabled!==!1&&(E.pointerType==="touch"?It(E):Tt(E))}function ot(E){switch(Ut(E),N.length){case 0:r.domElement.releasePointerCapture(E.pointerId),r.domElement.removeEventListener("pointermove",R),r.domElement.removeEventListener("pointerup",ot),r.dispatchEvent(fv),u=l.NONE;break;case 1:const W=N[0],tt=it[W];At({pointerId:W,pageX:tt.x,pageY:tt.y});break}}function vt(E){let W;switch(E.button){case 0:W=r.mouseButtons.LEFT;break;case 1:W=r.mouseButtons.MIDDLE;break;case 2:W=r.mouseButtons.RIGHT;break;default:W=-1}switch(W){case ns.DOLLY:if(r.enableZoom===!1)return;nt(E),u=l.DOLLY;break;case ns.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(r.enablePan===!1)return;Mt(E),u=l.PAN}else{if(r.enableRotate===!1)return;O(E),u=l.ROTATE}break;case ns.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(r.enableRotate===!1)return;O(E),u=l.ROTATE}else{if(r.enablePan===!1)return;Mt(E),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(Rh)}function Tt(E){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;V(E);break;case l.DOLLY:if(r.enableZoom===!1)return;ut(E);break;case l.PAN:if(r.enablePan===!1)return;Et(E);break}}function St(E){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(E.preventDefault(),r.dispatchEvent(Rh),yt(Ht(E)),r.dispatchEvent(fv))}function Ht(E){const W=E.deltaMode,tt={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(W){case 1:tt.deltaY*=16;break;case 2:tt.deltaY*=100;break}return E.ctrlKey&&!U&&(tt.deltaY*=10),tt}function wt(E){E.key==="Control"&&(U=!0,r.domElement.getRootNode().addEventListener("keyup",Ct,{passive:!0,capture:!0}))}function Ct(E){E.key==="Control"&&(U=!1,r.domElement.getRootNode().removeEventListener("keyup",Ct,{passive:!0,capture:!0}))}function Zt(E){r.enabled===!1||r.enablePan===!1||Wt(E)}function At(E){switch(Qt(E),N.length){case 1:switch(r.touches.ONE){case is.ROTATE:if(r.enableRotate===!1)return;zt(E),u=l.TOUCH_ROTATE;break;case is.PAN:if(r.enablePan===!1)return;Z(E),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case is.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;kt(E),u=l.TOUCH_DOLLY_PAN;break;case is.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Te(E),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(Rh)}function It(E){switch(Qt(E),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;Bt(E),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;oe(E),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;fe(E),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Oe(E),r.update();break;default:u=l.NONE}}function he(E){r.enabled!==!1&&E.preventDefault()}function qt(E){N.push(E.pointerId)}function Ut(E){delete it[E.pointerId];for(let W=0;W<N.length;W++)if(N[W]==E.pointerId){N.splice(W,1);return}}function Gt(E){for(let W=0;W<N.length;W++)if(N[W]==E.pointerId)return!0;return!1}function Qt(E){let W=it[E.pointerId];W===void 0&&(W=new ee,it[E.pointerId]=W),W.set(E.pageX,E.pageY)}function ae(E){const W=E.pointerId===N[0]?N[1]:N[0];return it[W]}r.domElement.addEventListener("contextmenu",he),r.domElement.addEventListener("pointerdown",z),r.domElement.addEventListener("pointercancel",ot),r.domElement.addEventListener("wheel",St,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",wt,{passive:!0,capture:!0}),this.update()}}const NA=({graph:o})=>{const e=sn.useRef(null),i=sn.useRef(null),r=sn.useRef(!1),l=sn.useRef(null),u=sn.useRef(null),d=sn.useRef(null),h=sn.useRef(null),m=sn.useRef(null),p=sn.useRef(null),v=sn.useRef([]),y=sn.useRef([]),x=sn.useRef([]),M=sn.useRef([]);return sn.useEffect(()=>{if(!e.current)return;const A=new EA;A.background=new ye(2236962),d.current=A;const T=new si(75,e.current.clientWidth/e.current.clientHeight,.1,1e3);h.current=T;const S=new MA({antialias:!0});S.setPixelRatio(window.devicePixelRatio),S.setSize(e.current.clientWidth,e.current.clientHeight),e.current.appendChild(S.domElement),m.current=S;const g=new LA(T,S.domElement);g.enableDamping=!0,g.dampingFactor=.05,p.current=g,A.add(new wA(4210752,.5));const L=new CA(16777215,1);L.position.set(5,5,5).normalize(),A.add(L);const D=()=>{e.current&&h.current&&m.current&&(h.current.aspect=e.current.clientWidth/e.current.clientHeight,h.current.updateProjectionMatrix(),m.current.setSize(e.current.clientWidth,e.current.clientHeight))},P=I=>{if(!h.current||!d.current||!e.current)return;const N=new ee,it=e.current.getBoundingClientRect();N.x=(I.clientX-it.left)/it.width*2-1,N.y=-((I.clientY-it.top)/it.height)*2+1;const U=new DA;U.setFromCamera(N,h.current);const C=U.intersectObjects(v.current);if(C.length>0){const ct=C[0].object.position.clone();p.current&&(p.current.enabled=!1),r.current=!0,u.current=ct;const G=h.current.position.clone().sub(ct).normalize().multiplyScalar(10);l.current=ct.clone().add(G)}};window.addEventListener("resize",D),S.domElement.addEventListener("dblclick",P);const Y=()=>{i.current=requestAnimationFrame(Y),r.current&&l.current&&u.current&&h.current&&p.current&&(h.current.position.lerp(l.current,.08),p.current.target.lerp(u.current,.08),h.current.position.distanceTo(l.current)<.1&&(r.current=!1,l.current=null,u.current=null,p.current.enabled=!0)),p.current?.update(),S.render(A,T)};return Y(),()=>{i.current&&cancelAnimationFrame(i.current),window.removeEventListener("resize",D),S.domElement.removeEventListener("dblclick",P),g.dispose(),x.current.forEach(I=>I.dispose()),M.current.forEach(I=>I.dispose()),e.current&&S.domElement&&e.current.removeChild(S.domElement)}},[]),sn.useEffect(()=>{if(o&&d.current){v.current.forEach(T=>d.current?.remove(T)),y.current.forEach(T=>d.current?.remove(T)),x.current.forEach(T=>T.dispose()),M.current.forEach(T=>T.dispose()),v.current=[],y.current=[],x.current=[],M.current=[];const A=new Map;if(o.nodes.forEach(T=>{let S;const g=new bA({color:T.id.startsWith("sphere")?16711680:65280,metalness:.7,roughness:.3});T.id.startsWith("sphere")?S=new Xh(1.5,32,32):S=new Ds(1.5,1.5,1.5);const L=new Ci(S,g);L.position.set(T.position.x,T.position.y,T.position.z),d.current?.add(L),v.current.push(L),x.current.push(S),M.current.push(g),A.set(T.id,L.position)}),o.edges.forEach(T=>{const S=A.get(T.source),g=A.get(T.target);if(S&&g){const L=new Xv({color:16777215}),D=[S,g],P=new Ui().setFromPoints(D),Y=new TA(P,L);d.current?.add(Y),y.current.push(Y),x.current.push(P),M.current.push(L)}}),h.current&&p.current){const T=o.nodes.map(D=>D.position.y),S=Math.min(...T),g=Math.max(...T),L=(S+g)/2;h.current.position.set(0,L,50),p.current.target.set(0,L,0),p.current.update()}}},[o]),En.jsx("div",{ref:e,style:{width:"100%",height:"100%"}})};function OA(){const[o,e]=sn.useState(null),i=r=>{e(r)};return En.jsxs("div",{className:"app-container",children:[En.jsx(oy,{onGraphLoad:i}),En.jsx("div",{className:"right-canvas-container",children:En.jsx(NA,{graph:o})})]})}ry.createRoot(document.getElementById("root")).render(En.jsx(OA,{}));
