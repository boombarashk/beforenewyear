(this.webpackJsonpbeforenewyear=this.webpackJsonpbeforenewyear||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(3),o=n.n(a),s=(n(9),n(4)),u=n(0),i=(new Date).getFullYear()+1,f=new Date("01.01.".concat(i)).getTime(),l=6e4,b=36e5,d=864e5,j=function(e,t){var n="";if(e>0&&"s"!==t){var c=function(e){return e%10===1&&11!==e},r=function(e){var t=e%10;return t>=2&&t<5&&![12,13,14].includes(e)},a="";switch(t){case"d":a=c(e)?"\u0434\u0435\u043d\u044c":r(e)?"\u0434\u043d\u044f":"\u0434\u043d\u0435\u0439";break;case"h":a="\u0447\u0430\u0441\u043e\u0432",[2,3,4,22,23].includes(e)?a="\u0447\u0430\u0441\u0430":[1,21].includes(e)&&(a="\u0447\u0430\u0441");break;case"m":a="\u043c\u0438\u043d\u0443\u0442",c(e)&&(a+="a"),r(e)&&(a+="\u044b");break;case"s":a="\u0441\u0435\u043a\u0443\u043d\u0434",c(e)&&(a+="a"),r(e)&&(a+="\u044b")}n="".concat(e," ").concat(a)}return n},h=function(e){var t=f-e,n=Math.floor(t/d),c=t-n*d,r=Math.floor(c/b),a=c-r*b,o=Math.floor(a/l),s=Math.floor((a-o*l)/1e3);return"".concat(j(n,"d")," ").concat(j(r,"h")," ").concat(j(o,"m")," ").concat(j(s,"s"))};function v(){var e=Object(c.useState)((new Date).getTime()),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){r((function(e){return e+1e3}))}),1e3);return function(){return clearInterval(e)}}),[]),Object(u.jsx)("div",{children:h(n)})}var p=function(){return Object(u.jsx)("div",{className:"App fullscreen-bg",children:Object(u.jsxs)("div",{className:"App-text black-bg",children:["\u0434\u043e \u043d\u043e\u0432\u043e\u0433\u043e \u0433\u043e\u0434\u0430 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c ",Object(u.jsx)(v,{})]})})};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.524b14ed.chunk.js.map