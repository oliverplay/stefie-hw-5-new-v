"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[537],{6024:function(e,n,t){t.d(n,{r:function(){return r},y:function(){return c}});var r="cc8aceddc1acb4be5d6024b16563f8b2",c="https://image.tmdb.org/t/p/w500"},7537:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(9439),c=t(7689),a=t(2791),o=t(5861),i=t(7757),s=t.n(i),u=t(1243),h=t(6024);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var l,f=function(){var e=(0,o.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(n,"/").concat("reviews","?api_key=").concat(h.r,"&language=").concat("en-US"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log("Something wrong with API",e.t0.message);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),p=t(168),d=t(6444).ZP.div(l||(l=(0,p.Z)(["\n    li {\n        margin: 10px;\n    }\n    h5 {\n        color: grey;\n        border-bottom: .5px solid #4FB3F3;\n    }\n    p{\n        font-size: 14px;\n        color: grey;\n    }\n\n"]))),m=t(184),v=function(){var e=(0,c.UO)().movieID,n=(0,a.useState)([]),t=(0,r.Z)(n,2),o=t[0],i=t[1];return(0,a.useEffect)((function(){f(e).then((function(e){i(e.results)}))}),[]),(0,m.jsx)(d,{children:(0,m.jsx)("ul",{children:0===o.length?(0,m.jsx)("li",{children:"There are no reviews in the TMDB database for this film."}):o.map((function(e,n){return(0,m.jsxs)("li",{children:[(0,m.jsx)("h4",{children:"Author"}),(0,m.jsx)("p",{children:e.author}),(0,m.jsx)("h4",{children:"Review"}),(0,m.jsx)("h5",{children:e.content})]},n)}))})})}}}]);
//# sourceMappingURL=537.37d4a788.chunk.js.map