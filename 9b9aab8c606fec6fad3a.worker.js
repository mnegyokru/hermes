!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t){importScripts("hermes.js");var n,r="tmp/hermes-input.js",i=[],o="",u="",a=!1,c=!1,f=!1;function l(){n=createApp({print:p,printErr:p,onRuntimeInitialized:s})}function p(e){u+=e,u+="\n"}function s(){if(!a)return n.FS.writeFile(r,"var x = 10;"),n.callMain(["-O",r]),a=!0,void l();c=!0,f&&d()}function d(){i.push("--pretty-json"),i.push(r),n.FS.writeFile(r,o),n.callMain(i),postMessage(["result",{result:u}]),i=[],o="",u="",f=!1,l()}l(),onmessage=function(e){switch(e.data[0]){case"run":!function(e,t){if(f)return;i=e,o=t,f=!0,c&&d()}(e.data[1],e.data[2])}}}]);