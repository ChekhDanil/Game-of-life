(this.webpackJsonpproj=this.webpackJsonpproj||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(4),o=n.n(a),u=n(1),i=n(2),l=(n(11),[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]),f=function(){for(var t=[],e=0;e<8;e++)t.push(Array.from(Array(8),(function(){return 0})));return t},s=function(){var t=Object(r.useState)((function(){return f()})),e=Object(u.a)(t,2),n=e[0],a=e[1],o=Object(r.useState)(!1),s=Object(u.a)(o,2),m=s[0],b=s[1],d=Object(r.useRef)(m);d.current=m;var p=Object(r.useCallback)((function(){d.current&&(a((function(t){return Object(i.a)(t,(function(e){for(var n=function(n){for(var r=function(r){var c=0;l.forEach((function(e){var a=Object(u.a)(e,2),o=a[0],i=a[1],l=n+o,f=r+i;l>=0&&l<8&&f>=0&&f<8&&(c+=t[l][f])})),c<2||c>3?e[n][r]=0:0===t[n][r]&&3===c&&(e[n][r]=1)},c=0;c<8;c++)r(c)},r=0;r<8;r++)n(r)}))})),setTimeout(p,200))}),[]);return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(){b(!m),m||(d.current=!0,p())}},m?"stop":"start"),c.a.createElement("button",{onClick:function(){for(var t=[],e=0;e<8;e++)t.push(Array.from(Array(8),(function(){return Math.random()>.7?1:0})));a(t)}},"random"),c.a.createElement("button",{onClick:function(){a(f())}},"clear")),c.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(8,", ").concat(45,"px)")},className:"cell-grid"},n.map((function(t,e){return t.map((function(t,r){return c.a.createElement("div",{key:"".concat(e,"-").concat(r),onClick:function(){var t=Object(i.a)(n,(function(t){t[e][r]=n[e][r]?0:1}));a(t)},style:{width:45,height:45,backgroundColor:n[e][r]?"DimGrey":void 0,border:"solid 1px black"}},e,r)}))}))))};o.a.render(c.a.createElement(s,null),document.getElementById("root"))},5:function(t,e,n){t.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.3c6572ad.chunk.js.map