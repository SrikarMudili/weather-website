(this["webpackJsonpmy-resume"]=this["webpackJsonpmy-resume"]||[]).push([[0],{17:function(e,a,t){e.exports=t(41)},22:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(11),m=t.n(r),c=(t(22),t(12)),l=t(13),i=t(16),o=t(15),u=t(14),h=t.n(u);t(40);var g=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=a.call(this,e)).state={resume:null},s}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return h.a.get("https://srikar-resume.herokuapp.com/resume").then((function(a){e.setState({resume:a.data})})),n.a.createElement("div",{className:"container"},null==this.state.resume?n.a.createElement("h4",null," Resume is loading "):n.a.createElement("div",null,n.a.createElement("h1",{className:"bg-danger"}," Hello, my name is ",this.state.resume.name,". "),n.a.createElement("h3",{className:"bg-success"}," I am ",this.state.resume.age," years old! "),n.a.createElement("h3",{className:"bg-info"}," I got a ",this.state.resume.gpa," out of 4.3 GPA!"),n.a.createElement("h2",{className:"bg-warning"}," This is my Resume \ua71c\ua71c\ua71c\ua71c\ua71c\ua71c"),n.a.createElement("h3",{className:"bg-danger"}," HOBBIES: "),n.a.createElement("ul",{className:"bg-danger"},this.state.resume.hobbies.map((function(e){return n.a.createElement("li",{className:"list-group-item"},e)}))),n.a.createElement("h3",{className:"bg-success"}," SPORTS: "),n.a.createElement("ul",{className:"bg-success"},this.state.resume.sports.map((function(e){return n.a.createElement("li",{className:"list-group-item"},e)}))),n.a.createElement("h3",{className:"bg-info"}," COURSES I HAVE TAKEN: "),n.a.createElement("ul",{className:"bg-info"},this.state.resume.courses.map((function(e){return n.a.createElement("li",{className:"list-group-item"},e)}))),n.a.createElement("h3",{className:"bg-warning"}," AWARDS: "),n.a.createElement("ul",{className:"bg-warning"},this.state.resume.awards.map((function(e){return n.a.createElement("li",{className:"list-group-item"},e)}))),n.a.createElement("img",{src:"nhdpicture.jpg",className:"profile-image",alt:"Picture of me."}),n.a.createElement("img",{src:"portrait.jpg",className:"portrait-image",alt:"Portrait I drew of myself with my left hand (non-dominant hand)."})))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.34d7cb4c.chunk.js.map