(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),c=n.n(o),s=n(8),i=n(6),u=(n(28),n(2)),l=n(3),h=n(5),d=n(4),b=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(r,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},p=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e,t){return a.a.createElement(b,{key:t,id:e.id,name:e.name,email:e.email})})))},m=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},f=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},E=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooops. That is not good"):this.props.children}}]),n}(a.a.Component),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(t){return{count:e.state.count+1}}))},e.state={count:0},e}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return a.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),n}(r.PureComponent),O=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",{className:"f2"},"RoboFriends"),a.a.createElement(v,{color:"red"}))}}]),n}(r.Component),g=n(12),j=n.n(g),y=n(15),C=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onSearchChange=function(t){e.props.setSearchField(t.target.value)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.requestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.robots,r=e.isPending,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r?a.a.createElement("h1",null,"Loading"):a.a.createElement("div",{className:"tc"},a.a.createElement(O,null),a.a.createElement(f,{searchChange:this.onSearchChange}),a.a.createElement(m,null,a.a.createElement(E,null,a.a.createElement(p,{robots:o}))))}}]),n}(a.a.Component),S=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),{setSearchField:function(e){return{type:"CHANGE_SEARCH_FIELD",payload:e}},requestRobots:function(){return function(){var e=Object(y.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return t({type:"REQUEST_ROBOTS_SUCCESS",payload:e})})).catch((function(e){return t({type:"REQUEST_ROBOTS_FAILED",payload:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(C);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(1),w={searchField:""},k={isPending:!1,robots:[],error:""},_=n(16),T=(n(30),Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(R.a)(Object(R.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(R.a)(Object(R.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(R.a)(Object(R.a)({},e),{},{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(R.a)(Object(R.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}})),F=Object(i.d)(T,Object(i.a)(_.a));c.a.render(a.a.createElement(s.a,{store:F},a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.8a5c9e5d.chunk.js.map