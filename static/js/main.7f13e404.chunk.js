(this["webpackJsonpreact-redux-counter"]=this["webpackJsonpreact-redux-counter"]||[]).push([[0],{17:function(t,e,n){},24:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),o=n(2),u=n.n(o),a=(n(17),n(4)),s=n(3),i=n(8),p=n(9),j=n(11),O=n(10),b=(n(24),n(12)),C=Object(b.a)({},{INCREASE_COUNT:"INCREASE_COUNT",DECREASE_COUNT:"DECREASE_COUNT"}),d=function(){return{type:C.INCREASE_COUNT}},E=function(){return{type:C.DECREASE_COUNT}},h=n(1),l=function(t){Object(j.a)(n,t);var e=Object(O.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var t=this.props,e=t.increaseCount,n=t.decreaseCount;return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:e,children:"Increment"}),Object(h.jsx)("span",{children:this.props.count}),Object(h.jsx)("button",{onClick:n,children:"Decrement"})]})}}]),n}(c.Component);l.mapStateToProps=function(t){return{count:t.count}},l.mapDispatchToProps=function(t){return Object(a.a)({increaseCount:d,decreaseCount:E},t)};var f=Object(s.b)(l.mapStateToProps,l.mapDispatchToProps)(l),N={count:0};n(26);var v=Object(a.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case C.INCREASE_COUNT:return{count:t.count+1};case C.DECREASE_COUNT:return{count:t.count-1};default:return t}}));var T=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(s.a,{store:v,children:Object(h.jsx)(f,{})})})};u.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.7f13e404.chunk.js.map