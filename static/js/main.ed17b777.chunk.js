(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,n){e.exports={inputBox:"WeightInput_inputBox__chyph",label:"WeightInput_label__1eYzl",input:"WeightInput_input__1TNok",weights:"WeightInput_weights__2DdLt"}},function(e,t,n){e.exports={box:"Averages_box__26Sjt",values:"Averages_values__2H5Qh",value:"Averages_value__3X4k2"}},function(e,t,n){e.exports={box:"Weights_box__2JWc0",values:"Weights_values__22XK3"}},,,function(e,t,n){e.exports={main:"Graph_main__2RKkZ",thing:"Graph_thing__RrQXJ"}},,function(e,t,n){e.exports=n(17)},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),c=n.n(i),o=(n(16),n(2)),u=n(1);var l=n(4),s=n.n(l),m=n(9);var h=function(e){var t=e.weights,n=(e.years,Object(a.useState)([])),i=Object(u.a)(n,2),c=i[0],l=i[1],h=new Date;return Object(a.useEffect)(function(){var e=function(e){var t=e.reduce(function(e,t){var n=new Date(t.time),a=n.getFullYear(),r=n.getMonth()+1,i="0".concat(r).slice(0,2),c="".concat(a,"_").concat(i);return e[c]||(e[c]={year:a,month:r,weights:[]}),e[c].weights=[].concat(Object(o.a)(e[c].weights),[t]),e},{});return Object.values(t)}(t),n=function(e){return e.map(function(e){var t=e.weights.map(function(t){return parseInt(t.weight,10)-e.average}).reduce(function(e,t){return e+t*t},0),n=Math.sqrt(t/e.count);return{year:e.year,month:e.month,count:e.count,average:e.average,stdDev:n}})}(e.map(function(e){var t=e.weights.reduce(function(e,t){return e+parseInt(t.weight,10)},0),n=e.weights.length,a=t/n;return Object(m.a)({},e,{count:n,average:a})}));l(n)},[t]),r.a.createElement("section",{className:"averagesSection"},r.a.createElement("div",{className:s.a.box},r.a.createElement("div",{className:s.a.values},r.a.createElement("ul",null,c.map(function(e){return r.a.createElement("li",{key:"".concat(e.year,"_").concat(e.month)},r.a.createElement("div",null,new Date(h.setMonth(e.month-1)).toLocaleString("en",{month:"long"})),r.a.createElement("div",null,e.year),r.a.createElement("div",null,e.average),r.a.createElement("div",null,e.stdDev),r.a.createElement("div",null,e.count))})))))},g=n(8),v=n.n(g);var f=function(e){return e.weights,r.a.createElement("section",{className:"graphSection"},r.a.createElement("div",{className:v.a.thing}))},w=n(3),d=n.n(w);var p=function(e){var t=e.saveWeight,n=Object(a.useState)(""),i=Object(u.a)(n,2),c=i[0],o=i[1],l=new Date,s=l.toLocaleString("en-us",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),m=l.toLocaleString("en-us",{hour:"numeric",minute:"2-digit"});return r.a.createElement("section",{className:"weightInputSection"},r.a.createElement("div",{className:d.a.inputBox},r.a.createElement("div",{className:d.a.label},"Add Current Weight"),r.a.createElement("div",{className:d.a.input},r.a.createElement("div",null,r.a.createElement("input",{id:"yo",type:"number",min:"0",max:"1000",step:"0.1",value:c,onChange:function(e){o(e.target.value)},onKeyUp:function(e){13===e.keyCode&&(t(c),o(""))}})),r.a.createElement("div",null,r.a.createElement("div",null,s),r.a.createElement("div",null,m)),r.a.createElement("div",null))))},E=n(5),y=n.n(E);var _=function(e){var t=e.weights,n=e.deleteWeight;return r.a.createElement("section",{className:"weightsSection"},r.a.createElement("div",{className:y.a.box},r.a.createElement("div",{className:y.a.values},t.slice(0).reverse().map(function(e){return function(e){var t=new Date(e.time),i=t.toLocaleString("en-us",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),c=t.toLocaleString("en-us",{hour:"numeric",minute:"2-digit"});return r.a.createElement(a.Fragment,{key:e.time},r.a.createElement("div",{className:"weight"},e.weight),r.a.createElement("div",{className:"time"},r.a.createElement("div",null,i),r.a.createElement("div",null,c)),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return n(e.time)}},"X")))}(e)}))))};function b(e,t){var n=Array.from(Array(12),function(){return 0}),a=Array.from(Array(12),function(){return 0});return e.forEach(function(e){var r=parseInt(e.weight,10)-t[e.month];n[e.month]+=r*r,a[e.month]++}),n.map(function(e,t){return 0===a[t]?0:Math.sqrt(e/a[t])})}var S=function(){var e=function(e,t){var n=Object(a.useState)(function(){var n=window.localStorage.getItem(e);if(n)try{return JSON.parse(n)}catch(a){console.error("localStorage error:",e,n,a)}return window.localStorage.setItem(e,JSON.stringify(t)),t}),r=Object(u.a)(n,2),i=r[0],c=r[1];return Object(a.useEffect)(function(){window.localStorage.setItem(e,JSON.stringify(i))},[e,i]),[i,c]}("weights",[]),t=Object(u.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)([]),l=Object(u.a)(c,2),s=l[0],m=l[1];return Object(a.useEffect)(function(){var e=n.sort(function(e,t){return e.time-t.time});i(e);var t=n.reduce(function(e,t){var n=new Date(t.time),a=n.getFullYear(),r=n.getMonth();return e[a]||(e[a]={year:a,weights:[]}),e[a].weights.push({month:r,weight:t.weight}),e},{}),a=Object.values(t).sort(function(e,t){return e.year-t.year}).map(function(e){var t=function(e){var t=Array.from(Array(12),function(){return 0}),n=Array.from(Array(12),function(){return 0});return e.forEach(function(e){t[e.month]+=parseInt(e.weight,10),n[e.month]++}),t.map(function(e,t){return 0===n[t]?0:e/n[t]})}(e.weights);return{year:e.year,monthAves:t,monthStdDevs:b(e.weights,t)}});m(a)},[n]),r.a.createElement("main",{className:"page"},r.a.createElement(p,{saveWeight:function(e){i([].concat(Object(o.a)(n),[{time:Date.now(),weight:e}]))}}),r.a.createElement(_,{weights:n,deleteWeight:function(e){i(n.filter(function(t){return t.time!==e}))}}),r.a.createElement(h,{weights:n,years:s}),r.a.createElement(f,{weights:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.ed17b777.chunk.js.map