(function(e){function t(t){for(var o,a,u=t[0],l=t[1],s=t[2],i=0,p=[];i<u.length;i++)a=u[i],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0de903":"f6736d22","chunk-2d229048":"13ff7785"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e);var s=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(i);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",s.name="ChunkLoadError",s.type=o,s.request=c,n[1](s)}r[e]=void 0}};var i=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r=(n("efe7"),n("c026")),c=n.n(r),a=(n("021b"),n("9951")),u=n.n(a),l=(n("cbe4"),n("6c9f")),s=n.n(l),i=(n("34c0"),n("aff9")),d=n.n(i),p=(n("0bd6"),n("05c2")),f=n.n(p),b=(n("8ac7"),n("e661")),h=n.n(b),j=(n("4af4"),n("44fb")),O=n.n(j);n("f3fc");const m=[O.a,h.a,f.a,d.a,s.a,u.a,c.a];var g=function(e){for(const t of m)e.component(t.name,t)};function v(e){e.use(g)}var y=n("bc3a"),w=n.n(y);w.a.get("http://123.207.32.32:8000/home/multidata").then(e=>{console.log(e.data)}),w.a.defaults.baseURL="https://httpbin.org",w.a.defaults.timeout=1e4,w.a.all([w.a.get("/get",{params:{name:"why",age:18}}),w.a.get("/post",{data:{name:"why",age:18}})]).then(e=>{console.log(e),console.log(e[0].data),console.log(e[1].data)}),w.a.interceptors.request.use(e=>(console.log("请求成功的拦截"),e),e=>(console.log("请求发送错误~"),e)),w.a.interceptors.response.use(e=>(console.log("响应成功的拦截"),e),e=>(console.log("服务器响应失败"),e));const x={class:"app"},N=Object(o["createTextVNode"])("登录"),V=Object(o["createTextVNode"])("首页"),C=Object(o["createTextVNode"])("Primary"),k=Object(o["createTextVNode"])("Success"),_=Object(o["createTextVNode"])("Info"),T=Object(o["createTextVNode"])("Warning"),P=Object(o["createTextVNode"])("Danger");function S(e,t,n,r,c,a){const u=Object(o["resolveComponent"])("router-link"),l=Object(o["resolveComponent"])("router-view"),s=Object(o["resolveComponent"])("el-button"),i=Object(o["resolveComponent"])("el-input");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",x,[Object(o["createElementVNode"])("h2",null,Object(o["toDisplayString"])(e.$store.state.name),1),Object(o["createVNode"])(u,{to:"/login"},{default:Object(o["withCtx"])(()=>[N]),_:1}),Object(o["createVNode"])(u,{to:"/main"},{default:Object(o["withCtx"])(()=>[V]),_:1}),Object(o["createVNode"])(l),Object(o["createVNode"])(s,{type:"primary"},{default:Object(o["withCtx"])(()=>[C]),_:1}),Object(o["createVNode"])(s,{type:"success"},{default:Object(o["withCtx"])(()=>[k]),_:1}),Object(o["createVNode"])(s,{type:"info"},{default:Object(o["withCtx"])(()=>[_]),_:1}),Object(o["createVNode"])(s,{type:"warning"},{default:Object(o["withCtx"])(()=>[T]),_:1}),Object(o["createVNode"])(s,{type:"danger"},{default:Object(o["withCtx"])(()=>[P]),_:1}),Object(o["createVNode"])(i)])}var E=Object(o["defineComponent"])({name:"App",components:{}}),M=n("6b0d"),A=n.n(M);const L=A()(E,[["render",S]]);var q=L,B=n("6c02");const D=[{path:"/",redirect:"/login"},{path:"/login",component:()=>n.e("chunk-2d229048").then(n.bind(null,"dc3f"))},{path:"/main",component:()=>n.e("chunk-2d0de903").then(n.bind(null,"85d4"))}],J=Object(B["a"])({routes:D,history:Object(B["b"])()});var I=J,R=n("5502");const U=Object(R["a"])({state:()=>({name:"coderwhy"}),mutations:{},getters:{},actions:{}});var W=U;const $=Object(o["createApp"])(q);$.use(v),$.use(I),$.use(W),$.mount("#app"),console.log("https://coderwhy.org/prod"),console.log("kobe")}});
//# sourceMappingURL=app.b254b240.js.map