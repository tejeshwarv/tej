(this.webpackJsonptej=this.webpackJsonptej||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=(a(104),a(34)),i=a(35),s=a(43),u=a(36),m=a(44),p=(a(105),a(106),a(160)),h=a(92),b=a(161),v=(a(107),a(16)),E=a(15),d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1},a.showDrawer=function(){a.setState({visible:!0})},a.onClose=function(){a.setState({visible:!1})},a.redirect=function(e){e.preventDefault(),a.props.history.push(e.target.pathname),a.onClose()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{position:"absolute",top:"10px",right:"10px"}},r.a.createElement(h.a,{type:"menu",style:{color:"white",fontSize:"30px",position:"relative",top:"5px"},onClick:this.showDrawer}),r.a.createElement(b.a,{title:"Basic Drawer",placement:"right",closable:!1,onClose:this.onClose,visible:this.state.visible},r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(v.b,{to:"/",onClick:this.redirect},"Home")),r.a.createElement("div",null,r.a.createElement(v.b,{to:"/about",onClick:this.redirect},"About")),r.a.createElement("div",null,r.a.createElement(v.b,{to:"/users",onClick:this.redirect},"Users"))))))}}]),t}(n.Component),f=Object(E.f)(d);function w(){return r.a.createElement("h1",null,"About")}function j(){return r.a.createElement("h1",null,"Users",r.a.createElement(v.b,{to:"/about"},"home"))}var y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,null,r.a.createElement(p.a,{bg:"dark",variant:"dark"},r.a.createElement(p.a.Brand,{href:"#home"},r.a.createElement(h.a,{type:"user",style:{color:"white",fontSize:"30px",position:"relative",top:"-5px"}}),"","\xa0 React Bootstrap"),r.a.createElement(f,null)),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/about",component:w}),r.a.createElement(E.a,{exact:!0,path:"/users",component:j}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},99:function(e,t,a){e.exports=a(157)}},[[99,1,2]]]);
//# sourceMappingURL=main.6fc6a09e.chunk.js.map