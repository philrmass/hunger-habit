(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports={box:"Averages_box__26Sjt",month:"Averages_month__25tZa",date:"Averages_date__3Y9ER",label:"Averages_label__lNs6N",value:"Averages_value__3X4k2"}},,function(e,t,a){e.exports={box:"WeightInput_box__3Ps7C",content:"WeightInput_content__3GQeI",title:"WeightInput_title__1J5ME",input:"WeightInput_input__1TNok",time:"WeightInput_time__33S0W",exportButton:"WeightInput_exportButton__1bz5g"}},function(e,t,a){e.exports={box:"Weights_box__2JWc0",value:"Weights_value__3DwNj",weight:"Weights_weight__1ufNe",time:"Weights_time__35D-9",deleteButton:"Weights_deleteButton__2Keu2"}},function(e,t,a){e.exports={box:"Graph_box__3lZbO",weights:"Graph_weights__nWRpu",normal:"Graph_normal__fmLIr",minor:"Graph_minor__10MWi",major:"Graph_major__3_RfE",year:"Graph_year__32fq3"}},,,,function(e,t,a){e.exports=a(17)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),o=(a(16),a(3)),l=a(1);var s=a(2),u=a.n(s),m=a(9);var g=function(e){var t=e.weights,a=Object(n.useState)([]),i=Object(l.a)(a,2),c=i[0],s=i[1],g=new Date;return Object(n.useEffect)(function(){var e=function(e){var t=e.reduce(function(e,t){var a=new Date(t.time),n=a.getFullYear(),r=a.getMonth()+1,i="0".concat(r).slice(0,2),c="".concat(n,"_").concat(i);return e[c]||(e[c]={year:n,month:r,weights:[]}),e[c].weights=[].concat(Object(o.a)(e[c].weights),[t]),e},{});return Object.values(t)}(t),a=function(e){return e.map(function(e){var t=e.weights.map(function(t){return parseFloat(t.weight,10)-e.average}).reduce(function(e,t){return e+t*t},0),a=Math.sqrt(t/e.count);return{year:e.year,month:e.month,count:e.count,average:e.average,stdDev:a}})}(e.map(function(e){var t=e.weights.reduce(function(e,t){return e+parseFloat(t.weight,10)},0),a=e.weights.length,n=t/a;return Object(m.a)({},e,{count:a,average:n})}));s(a)},[t]),r.a.createElement("section",{className:"averagesSection"},r.a.createElement("div",{className:u.a.box},r.a.createElement("ul",null,c.slice(0).reverse().map(function(e){return r.a.createElement("li",{key:"".concat(e.year,"_").concat(e.month)},r.a.createElement("div",{className:u.a.month},r.a.createElement("div",{className:u.a.date},new Date(g.setMonth(e.month-1)).toLocaleString("en",{month:"long"})," ",e.year),r.a.createElement("div",null,r.a.createElement("span",{className:u.a.label},"Average"),r.a.createElement("span",{className:u.a.value},e.average.toFixed(1))),r.a.createElement("div",null,r.a.createElement("span",{className:u.a.label},"Measurements"),r.a.createElement("span",{className:u.a.value},e.count)),r.a.createElement("div",null,r.a.createElement("span",{className:u.a.label},"Std Dev"),r.a.createElement("span",{className:u.a.value},e.stdDev.toFixed(1)))))}))))},h=a(6),v=a.n(h);var w=function(e){var t=e.weights,a=3456e5,i=Object(n.useState)(null),c=Object(l.a)(i,2),s=c[0],u=c[1];function m(e,t){return e/a-t.timeMin}function g(e,t){var a=parseFloat(e,10);return t.weightRange+t.weightMin-a}function h(e,t){var n=function(e,t){return e.reduce(function(e,a,n){var r=m(a.time,t),i=g(a.weight,t);return e+=0===n?"M ":"L ",e+="".concat(r.toFixed(2)," ").concat(i.toFixed(2))},"")}(e,t);return r.a.createElement("svg",{height:"100%",viewBox:"0 0 ".concat(t.timeRange," ").concat(t.weightRange)},r.a.createElement("path",{d:n,className:v.a.weights}),function(e){for(var t=Math.round(e.weightMin+e.weightRange),a=[];t>=e.weightMin;)a=[].concat(Object(o.a)(a),[t]),t-=1;return a.map(function(t){var a="normal";t%10===0?a="major":t%5===0&&(a="minor");var n=g(t,e);return r.a.createElement("line",{key:n,x1:"0",y1:n,x2:e.timeRange,y2:n,className:v.a[a]})})}(t),function(e){var t=a*e.timeMin,n=a*(e.timeMin+e.timeRange),i=new Date(t),c=new Date(n);c.setHours(0),c.setMinutes(0),c.setSeconds(0),c.setMilliseconds(0);for(var l=[];c>=i;){var s="normal";1===c.getDate()&&(s=0===c.getMonth()?"year":"major"),0===c.getDay()&&(s="minor");var u=m(c.getTime(),e);l=[].concat(Object(o.a)(l),[[u,s]]),c.setDate(c.getDate()-1)}return l.map(function(t){return r.a.createElement("line",{key:t[0],x1:t[0],y1:"0",x2:t[0],y2:e.weightRange,className:v.a[t[1]]})})}(t))}return Object(n.useEffect)(function(){var e=function(e){var t=.1*(e.weightMax-e.weightMin),n=e.weightMin-t,r=e.weightMax+t-n,i=e.timeMin/a;return{weightMin:n,weightRange:r,timeMin:i,timeRange:e.timeMax/a-i}}(function(e){var t={timeMin:1/0,timeMax:0,weightMin:1/0,weightMax:0};return e.reduce(function(e,t){e.timeMin=t.time<e.timeMin?t.time:e.timeMin,e.timeMax=t.time>e.timeMax?t.time:e.timeMax;var a=parseFloat(t.weight,10);return e.weightMin=a<e.weightMin?a:e.weightMin,e.weightMax=a>e.weightMax?a:e.weightMax,e},t)}(t));u(h(t,e))},[t]),r.a.createElement("section",{className:"graphSection"},r.a.createElement("div",{className:v.a.box},s))},d=a(4),_=a.n(d);var f=function(e){var t=e.saveWeight,a=e.exportWeights,i=Object(n.useState)(""),c=Object(l.a)(i,2),o=c[0],s=c[1],u=new Date,m=u.toLocaleString("en-us",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),g=u.toLocaleString("en-us",{hour:"numeric",minute:"2-digit"});return r.a.createElement("section",{className:"weightInputSection"},r.a.createElement("div",{className:_.a.box},r.a.createElement("div",null,r.a.createElement("div",{className:_.a.title},"Add Current Weight"),r.a.createElement("div",{className:_.a.input},r.a.createElement("div",null,r.a.createElement("input",{id:"yo",type:"number",min:"0",max:"1000",step:"0.1",value:o,onChange:function(e){s(e.target.value)},onKeyUp:function(e){13===e.keyCode&&(t(o),s(""))}})),r.a.createElement("div",{className:_.a.time},r.a.createElement("div",null,m),r.a.createElement("div",null,g)),r.a.createElement("div",null,r.a.createElement("button",{className:_.a.exportButton,onClick:a},"Export"))))))},p=a(5),E=a.n(p);var x=function(e){var t=e.weights,a=e.deleteWeight;return r.a.createElement("section",{className:"weightsSection"},r.a.createElement("div",{className:E.a.box},t.slice(0).reverse().map(function(e){return function(e){var t=new Date(e.time),n=t.toLocaleString("en-us",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),i=t.toLocaleString("en-us",{hour:"numeric",minute:"2-digit"});return r.a.createElement("div",{key:e.time,className:E.a.value},r.a.createElement("div",{className:E.a.weight},e.weight),r.a.createElement("div",{className:E.a.time},r.a.createElement("div",null,n),r.a.createElement("div",null,i)),r.a.createElement("div",null,r.a.createElement("button",{className:E.a.deleteButton,onClick:function(){return a(e.time)}},"X")))}(e)})))};var b=function(){var e=function(e,t){var a=Object(n.useState)(function(){var a=window.localStorage.getItem(e);if(a)try{return JSON.parse(a)}catch(n){console.error("localStorage error:",e,a,n)}return window.localStorage.setItem(e,JSON.stringify(t)),t}),r=Object(l.a)(a,2),i=r[0],c=r[1];return Object(n.useEffect)(function(){window.localStorage.setItem(e,JSON.stringify(i))},[e,i]),[i,c]}("weights",[]),t=Object(l.a)(e,2),a=t[0],i=t[1];return r.a.createElement("main",{className:"page"},r.a.createElement(f,{saveWeight:function(e){i([].concat(Object(o.a)(a),[{time:Date.now(),weight:e}]))},exportWeights:function(){console.log("Export",a.length)}}),r.a.createElement(x,{weights:a,deleteWeight:function(e){i(a.filter(function(t){return t.time!==e}))}}),r.a.createElement("div",{className:"spacer"}),r.a.createElement(g,{weights:a}),r.a.createElement("div",{className:"spacer"}),r.a.createElement(w,{weights:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.f527be11.chunk.js.map