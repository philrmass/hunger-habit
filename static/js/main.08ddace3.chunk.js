(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),o=n.n(r),c=(n(11),n(4)),l=n(1);n(12);var m=function(){var e=function(e,t){var n=localStorage.getItem(e);null===n?(n=t,localStorage.setItem(e,JSON.stringify(t))):n=JSON.parse(n);var i=Object(a.useState)(n),r=Object(l.a)(i,2),o=r[0],c=r[1];return[o,function(t){c(t),localStorage.setItem(e,JSON.stringify(t))}]}("weights",[]),t=Object(l.a)(e,2),n=t[0],r=t[1];return i.a.createElement("div",{className:"page"},i.a.createElement("main",{className:"weightMain"},i.a.createElement("section",{className:"weightInput"},i.a.createElement("div",null,"Add Current Weight"),i.a.createElement("div",null,(new Date).toLocaleString()),i.a.createElement("div",null,i.a.createElement("input",{type:"number",min:"0",max:"1000",step:"0.1",onKeyUp:function(e){13===e.keyCode&&r([].concat(Object(c.a)(n),[{time:Date.now(),weight:e.target.value}]))}}))),i.a.createElement("section",{className:"weightValues"},i.a.createElement("header",null,"Values"),i.a.createElement("main",null,n.map(function(e){return i.a.createElement("div",{key:e.time},i.a.createElement("span",{className:"weight"},e.weight),i.a.createElement("span",{className:"time"},new Date(e.time).toLocaleString()),i.a.createElement("button",{onClick:function(){return t=e.time,void r(n.filter(function(e){return e.time!==t}));var t}},"Delete"))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.08ddace3.chunk.js.map