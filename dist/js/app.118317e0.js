(function(){"use strict";var e={513:function(e,n,t){var r=t(9242),o=t(3396),i={__name:"App",setup(e){return(0,o.bv)((()=>{})),(e,n)=>{const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}}};const u=i;var a=u,c=t(2483),l=(t(7658),t(7139)),s=t(7585),f=t(4870),d=t(65);const p={class:"home"},m={class:"createWindow col-12 col-md-6 col-sm-8"},v=(0,o._)("div",{class:"title"},"創建/加入房間",-1),h=(0,o._)("hr",null,null,-1),b={class:"input-group",style:{"margin-top":"1rem"}};var g={__name:"HomeView",setup(e){const n=(0,f.iH)(""),t=(0,c.tv)(),i=(0,d.oR)(),u=(0,f.iH)("");(0,o.bv)((()=>{let e;e=setInterval((()=>{null!=i.getters.getPeerjsObj.id&&(u.value=i.getters.getPeerjsObj.id,clearInterval(e))}),1e3),i.dispatch("newPeerObj")}));const a=()=>{""!=u.value&&(""==n.value?t.push({name:"joinRoom",params:{id:u.value}}):t.push({name:"joinRoom",params:{id:n.value}}))};return(e,t)=>((0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("div",m,[v,(0,o._)("div",null,"您的ID: "+(0,l.zw)(u.value),1),h,(0,o._)("div",b,[(0,o.wy)((0,o._)("input",{class:"roomname form-control","onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),placeholder:"請輸入房間ID"},null,512),[[r.nr,n.value]]),(0,o.Wm)(s.Z,{style:{"--bor":"0 4px 4px 0"},onClick:a},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(""==n.value?"創建房間":"加入房間"),1)])),_:1})])])]))}};const y=g;var w=y;const j=[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,833))},{path:"/room",name:"room",component:()=>t.e(443).then(t.bind(t,7556))},{path:"/room/:id",name:"joinRoom",component:()=>t.e(443).then(t.bind(t,7556))}],O=(0,c.p7)({history:(0,c.r5)(),routes:j});var _=O,k=t(2412),P=(0,d.MT)({state:{peerjsObj:new k.ZP},getters:{getPeerjsObj(e){return e.peerjsObj}},mutations:{newPeerObj(e){e.peerjsObj=new k.ZP}},actions:{newPeerObj({commit:e}){e("newPeerObj")}},modules:{}});(0,r.ri)(a).use(P).use(_).mount("#app")},7585:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(3396);const o={class:"btn",style:{"--bor":"4px"}};function i(e,n){return(0,r.wg)(),(0,r.iD)("span",o,[(0,r.WI)(e.$slots,"default")])}var u=t(89);const a={},c=(0,u.Z)(a,[["render",i]]);var l=c}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.7b6a60b5.js"}}(),function(){t.miniCssF=function(e){return"css/about.22be925a.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="draw_topic:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var u=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={443:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],l=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(n&&n(r);l<u.length;l++)i=u[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunkdraw_topic"]=self["webpackChunkdraw_topic"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(513)}));r=t.O(r)})();
//# sourceMappingURL=app.118317e0.js.map