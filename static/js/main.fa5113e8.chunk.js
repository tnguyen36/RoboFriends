(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),c=n.n(a),i=n(8),s=n(6),l=(n(28),n(2)),u=n(3),h=n(5),d=n(4),f=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(r,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},p=function(e){var t=e.robots;return o.a.createElement("div",null,t.map((function(e,t){return o.a.createElement(f,{key:t,id:e.id,name:e.name,email:e.email})})))},b=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},v=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},m=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ooops. That is not good"):this.props.children}}]),n}(o.a.Component),E=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(t){return{count:e.state.count+1}}))},e.state={count:0},e}return Object(u.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return o.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),n}(r.PureComponent),g=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"f2"},"RoboFriends"),o.a.createElement(E,{color:"red"}))}}]),n}(r.Component),O=n(12),w=n.n(O),y=n(15),j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).onSearchChange=function(t){e.props.setSearchField(t.target.value)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.requestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.robots,r=e.isPending,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r?o.a.createElement("h1",null,"Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement(g,null),o.a.createElement(v,{searchChange:this.onSearchChange}),o.a.createElement(b,null,o.a.createElement(m,null,o.a.createElement(p,{robots:a}))))}}]),n}(o.a.Component),S=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),{setSearchField:function(e){return{type:"CHANGE_SEARCH_FIELD",payload:e}},requestRobots:function(){return function(){var e=Object(y.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return t({type:"REQUEST_ROBOTS_SUCCESS",payload:e})})).catch((function(e){return t({type:"REQUEST_ROBOTS_FAILED",payload:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(j),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=n(1),_={searchField:""},T={isPending:!1,robots:[],error:""},F=n(16),N=(n(30),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(k.a)(Object(k.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(k.a)(Object(k.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(k.a)(Object(k.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}})),U=Object(s.d)(N,Object(s.a)(F.a));c.a.render(o.a.createElement(i.a,{store:U},o.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RoboFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/RoboFriends","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.fa5113e8.chunk.js.map