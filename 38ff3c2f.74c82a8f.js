(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{192:function(e,t,n){"use strict";n.r(t);var a=n(1),i=(n(65),n(393),n(0)),r=n.n(i),o=n(263),c=n.n(o),l=n(334),s=n(396),u=n.n(s);var d=function(){var e=Object(i.useState)({width:window.innerWidth,height:window.innerHeight}),t=e[0],n=e[1];return Object(i.useEffect)((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t},h=n(347),m=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.t.bind(null,441,7))}));var f,g=function(e){var t=Object(h.a)().isDarkTheme;return r.a.createElement(i.Suspense,{fallback:r.a.createElement("div",null,"Loading")},r.a.createElement(m,Object(a.a)({},e,{editorWillMount:function(t){t.editor.defineTheme("vs-dark",{base:"vs-dark",inherit:!0,rules:[{background:"121212"}],colors:{"editor.background":"#121212"}}),e.editorWillMount&&e.editorWillMount(t)},theme:t?"vs-dark":"vs-light"})))},w=n(122),p=n.n(w);function b(e,t){switch(t.type){case"request":return Object.assign({},e,{loading:!0,lastTime:new Date});case"success":return Object.assign({},e,{loading:!1,output:t.result,ellapsed:new Date-e.lastTime+" ms"})}}"undefined"!=typeof window&&(f=new u.a);var v={loading:!1,output:"",lastTime:void 0,ellapsed:void 0};function E(e){return e.loading?r.a.createElement("i",{"aria-label":"icon: load"},r.a.createElement("svg",{viewBox:"0 0 1024 1024","data-icon":"loading",width:"1.5em",height:"1.5em",fill:"currentColor","aria-hidden":"true",className:c()(p.a.spinner)},r.a.createElement("path",{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}))):r.a.createElement("i",{"aria-label":"icon: run"},r.a.createElement("svg",{viewBox:"0 0 1200 1200","data-icon":"run",width:"1.5em",height:"1.5em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M 600,1200 C 268.65,1200 0,931.35 0,600 0,268.65 268.65,0 600,0 c 331.35,0 600,268.65 600,600 0,331.35 -268.65,600 -600,600 z M 450,300.45 450,899.55 900,600 450,300.45 z"})))}t.default=function(){if("undefined"==typeof window)return null;var e=Object(i.useReducer)(b,v),t=e[0],n=t.loading,o=t.ellapsed,s=t.output,u=e[1],h=Object(i.useState)("const a = 1; \nprint(a);"),m=h[0],w=h[1],j=Object(i.useState)("-O -dump-bytecode"),O=j[0],k=j[1],y=d(),C=100,x={xs:{width:y.width,height:200},lg:{width:1/3*y.width,height:y.height-C}},S={xs:{width:y.width,height:y.height-C-x.xs.height},lg:{width:2/3*y.width,height:y.height}};function W(e){if(!n){var t=e.split(/\s+/).filter((function(e){return e}));u({type:"request"}),f.postMessage(["run",t,m])}}return Object(i.useEffect)((function(){f.onmessage=function(e){switch(e.data[0]){case"result":u({type:"success",result:e.data[1].result})}},W(O)}),[]),r.a.createElement(l.a,{title:"Hermes",description:"Hermes Playground",noFooter:!0},r.a.createElement("div",{className:c()(p.a.headerContainer)},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),W(O)},className:c()(p.a.argsInputContainer)},r.a.createElement("input",{className:c()(p.a.argsInputField),name:"args",placeholder:"args",type:"text",value:O,onChange:function(e){k(e.target.value)}}),r.a.createElement("button",{onClick:function(){W(O)},className:c()(p.a.argsIconContainer)},r.a.createElement(E,{loading:n}))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){W("-help")},className:c()(p.a.helperButton)},"?"),r.a.createElement("span",null,o))),r.a.createElement("div",{className:c()(p.a.row)},r.a.createElement(g,Object(a.a)({},y.width>600?x.lg:x.xs,{language:"javascript",value:m,onChange:w,options:{minimap:{enabled:!1},wordWrap:"on"}})),r.a.createElement(g,Object(a.a)({},y.width>600?S.lg:S.xs,{language:"json",value:s,options:{readOnly:!0,minimap:{enabled:!1},wordWrap:"on"}}))))}},393:function(e,t,n){var a=n(16);a(a.S+a.F,"Object",{assign:n(394)})},394:function(e,t,n){"use strict";var a=n(12),i=n(23),r=n(395),o=n(68),c=n(48),l=n(67),s=Object.assign;e.exports=!s||n(17)((function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach((function(e){t[e]=e})),7!=s({},e)[n]||Object.keys(s({},t)).join("")!=a}))?function(e,t){for(var n=c(e),s=arguments.length,u=1,d=r.f,h=o.f;s>u;)for(var m,f=l(arguments[u++]),g=d?i(f).concat(d(f)):i(f),w=g.length,p=0;w>p;)m=g[p++],a&&!h.call(f,m)||(n[m]=f[m]);return n}:s},395:function(e,t){t.f=Object.getOwnPropertySymbols},396:function(e,t,n){e.exports=function(){return new Worker(n.p+"9b9aab8c606fec6fad3a.worker.js")}}}]);