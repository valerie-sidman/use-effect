(this["webpackJsonpstore-func"]=this["webpackJsonpstore-func"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(6),a=n.n(s),o=(n(11),n(2)),i=n.n(o),u=n(4),l=n(3),j=n(0);function f(e){var t=e.info,n=Object(c.useState)({details:{}}),r=Object(l.a)(n,2),s=r[0],a=r[1];return Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/".concat(t.id,".json"));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.message);case 6:return e.next=8,n.json();case 8:c=e.sent,a(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(j.jsxs)("div",{children:[s?Object(j.jsx)("img",{src:s.avatar,alt:""}):null,s?Object(j.jsxs)("div",{children:["Name: ",s.name]}):null,s.details?Object(j.jsxs)("div",{children:["City: ",s.details.city]}):null,s.details?Object(j.jsxs)("div",{children:["Company: ",s.details.company]}):null,s.details?Object(j.jsxs)("div",{children:["Position: ",s.details.position]}):null]})}function d(){var e=Object(c.useState)({items:[]}),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)({}),a=Object(l.a)(s,2),o=a[0],d=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error(t.message);case 6:return e.next=8,t.json();case 8:n=e.sent,r({items:n}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("ul",{children:n.items.map((function(e){return Object(j.jsx)("li",{onClick:function(){return t=e,void d((function(){return t}));var t},children:e.name},e.id)}))}),o.id?Object(j.jsx)(f,{info:o}):null]})}function h(){return Object(j.jsx)(d,{})}var b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.b8f89fc4.chunk.js.map