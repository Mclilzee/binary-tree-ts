(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"h1 {\n  background-color: red;\n}\n",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var p=n(f),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var v=o(d,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:v,references:1})}i.push(f)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var u=r(t,o),s=0;s<a.length;s++){var l=n(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=u}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{const t=function(){function t(t){this.value=t,this.left=null,this.right=null}return t.prototype.compareTo=function(t){return this.value-t.value},t}();var e=function(){function e(){this.root=null}return e.prototype.buildNewTree=function(t){var e=this;this.root=null,t.forEach((function(t){return e.insert(t)}))},e.prototype.insert=function(e){var n=new t(e);return console.log(n),this.traverse(this.root,n),this},e.prototype.delete=function(t){},e.prototype.traverse=function(t,e){console.log(t,e),null!==t?e.value<t.value?this.traverse(t.left,e):e.value>t.value&&this.traverse(t.right,e):t=e},e}();const r=e;var o=n(379),a=n.n(o),i=n(795),c=n.n(i),u=n(569),s=n.n(u),l=n(565),f=n.n(l),p=n(216),d=n.n(p),v=n(589),h=n.n(v),m=n(426),y={};y.styleTagTransform=h(),y.setAttributes=f(),y.insert=s().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=d(),a()(m.Z,y),m.Z&&m.Z.locals&&m.Z.locals;var g=function(t){for(var e=[],n=0;n<10;n++)e.push(Math.floor(100*Math.random()));return e}(),b=new r;b.buildNewTree(g),function t(e,n,r){void 0===n&&(n=""),void 0===r&&(r=!0),null!==e&&(null!==e.right&&t(e.right,"".concat(n).concat(r?"│   ":"    "),!1),console.log("".concat(n).concat(r?"└── ":"┌── ").concat(e.value)),null!==e.left&&t(e.left,"".concat(n).concat(r?"    ":"│   "),!0))}(b.root)})()})();