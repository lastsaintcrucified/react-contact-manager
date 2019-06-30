(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){},40:function(e,t,a){e.exports=a(68)},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),o=a.n(c),l=(a(25),a(15)),s=a(3),i=a(6),m=a(7),u=a(9),p=a(8),d=a(10),h=a(2),f=a.n(h),b=a(13),E=a(39),v=a(19),y=a(14),g=a.n(y),N=r.a.createContext(),O=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(v.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return alert("Added Successfully!"),Object(v.a)({},e,{contacts:[t.payload].concat(Object(E.a)(e.contacts))});case"UPDATE_CONTACT":return alert("Updated Successfully!!"),Object(v.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?t.payload:e})});default:return e}},j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState(function(t){return O(t,e)})}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(N.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),C=N.Consumer,k=a(12),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={showInfo:!1},a.toggleInfo=function(){a.setState({showInfo:!a.state.showInfo})},a.deleteOnClick=function(){var e=Object(b.a)(f.a.mark(function e(t,a){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone;return r.a.createElement(C,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n,r.a.createElement("i",{onClick:e.toggleInfo,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{float:"right",cursor:"pointer"},onClick:e.deleteOnClick.bind(e,a,l)}),r.a.createElement(k.a,{to:"contacts/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{float:"right",cursor:"pointer",marginRight:"1rem"}}))),e.state.showInfo?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},c),r.a.createElement("li",{className:"list-group-item"},o)):null)})}}]),t}(n.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,function(e){var t=e.contacts;return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," Manager"),t.map(function(e){return r.a.createElement(w,{key:e.id,contact:e})}))})}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Contact Manager"),r.a.createElement("p",null,"This is an app that can store and delete contacts"),r.a.createElement("h4",null,"version 1.0.0"))}}]),t}(n.Component);function A(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("span",{className:"text-danger"},"404")," NOT FOUND!"),r.a.createElement("p",null,"The page you are looking for can't be found or this destination doesn't exist!!"),r.a.createElement("h3",null,"Peace!"))}var T=function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(k.a,{to:"/",className:"navbar-brand"},"Contact Manager"),r.a.createElement("ul",{className:"navbar-nav mr-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.a,{to:"/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(k.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About"))))),t)};T.defaultProps={branding:"My App"};var I=T,D=a(16),P=a(38),V=a.n(P),q=function(e){var t=e.label,a=e.name,n=e.placeholder,c=e.value,o=e.type,l=e.onChange,s=e.error,i=e.onKeyPress;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,className:V()("form-control form-control-sm",{"is-invalid":s}),name:a,placeholder:n,value:c,onChange:l,onKeyPress:i}),s?r.a.createElement("div",{className:"invalid-feedback"},s):null)};q.defaultProps={type:"text"};var M=q,_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{name:"",email:"",phone:""},showInfo:!1},a.toggleInfo=function(){a.setState({showInfo:!a.state.showInfo})},a.onSubmit=function(){var e=Object(b.a)(f.a.mark(function e(t,n){var r,c,o,l,s,i,m;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,s=r.errors,""!==c){e.next=5;break}return a.setState({errors:{name:"Name field is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email field is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone field is required"}}),e.abrupt("return");case 11:return i={name:c,email:o,phone:l,errors:s},e.next=14,g.a.post("https://jsonplaceholder.typicode.com/users",i);case 14:m=e.sent,t({type:"ADD_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.onChangeValue=function(e){return a.setState(Object(D.a)({},e.target.name,e.target.value))},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(C,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header",onClick:e.toggleInfo,style:{cursor:"pointer"}},"Add Contact"),e.state.showInfo?r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(M,{label:"Name",className:"form-control form-control-sm",name:"name",placeholder:"insert name..",value:a,onChange:e.onChangeValue,error:o.name}),r.a.createElement(M,{label:"Email",type:"email",className:"form-control form-control-sm",name:"email",placeholder:"insert email..",value:n,onChange:e.onChangeValue,error:o.email}),r.a.createElement(M,{label:"Phone",className:"form-control form-control-sm",name:"phone",placeholder:"insert phone number..",value:c,onChange:e.onChangeValue,error:o.phone}),r.a.createElement("button",{type:"submit",className:"btn btn-success btn-sm btn-block"},"Add contact"))):null)})}}]),t}(n.Component),U=Object(l.f)(_),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{name:"",email:"",phone:""}},a.onSubmit=function(){var e=Object(b.a)(f.a.mark(function e(t,n){var r,c,o,l,s,i,m,u;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,s=r.errors,""!==c){e.next=5;break}return a.setState({errors:{name:"Name field is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email field is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone field is required"}}),e.abrupt("return");case 11:return i={name:c,email:o,phone:l,errors:s},m=a.props.match.params.id,e.next=15,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(m),i);case 15:u=e.sent,t({type:"UPDATE_CONTACT",payload:u.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.onChangeValue=function(e){return a.setState(Object(D.a)({},e.target.name,e.target.value))},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark(function e(){var t,a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(C,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header",onClick:e.toggleInfo,style:{cursor:"pointer"}},r.a.createElement("h3",null,"Edit Contact")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(M,{label:"Name",className:"form-control form-control-sm",name:"name",placeholder:"insert name..",value:a,onChange:e.onChangeValue,error:o.name}),r.a.createElement(M,{label:"Email",type:"email",className:"form-control form-control-sm",name:"email",placeholder:"insert email..",value:n,onChange:e.onChangeValue,error:o.email}),r.a.createElement(M,{label:"Phone",className:"form-control form-control-sm",name:"phone",placeholder:"insert phone number..",value:c,onChange:e.onChangeValue,error:o.phone}),r.a.createElement("button",{type:"submit",className:"btn btn-success btn-sm btn-block"},"Update contact"))))})}}]),t}(n.Component),F=Object(l.f)(B);a(67);var J=function(){return r.a.createElement(j,null,r.a.createElement(l.b,{history:Object(s.a)(),basename:"/react-contact-manager"},r.a.createElement("div",{className:"App"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",render:function(){return r.a.createElement(I,null,r.a.createElement(x,null))}}),r.a.createElement(l.a,{exact:!0,path:"/contacts/add",render:function(){return r.a.createElement(I,null,r.a.createElement(U,null))}}),r.a.createElement(l.a,{exact:!0,path:"/contacts/edit/:id",render:function(){return r.a.createElement(I,null,r.a.createElement(F,null))}}),r.a.createElement(l.a,{exact:!0,path:"/about",render:function(){return r.a.createElement(I,null,r.a.createElement(S,null))}}),r.a.createElement(l.a,{render:function(){return r.a.createElement(I,null,r.a.createElement(A,null))}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.56ffa5aa.chunk.js.map