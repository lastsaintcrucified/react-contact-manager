(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(43)},35:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),o=t.n(l),c=(t(35),t(10)),s=t(2),i=t(5),m=t(6),u=t(8),d=t(7),h=t(9),p=t(29),f=t(16),b=r.a.createContext(),E=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(f.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return alert("Added Successfully!"),Object(f.a)({},e,{contacts:[a.payload].concat(Object(p.a)(e.contacts))});case"ERROR":return alert("Need all the fields to be filled!");default:return e}},v=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[{id:1,name:"John Doe",email:"johnDoe@gmail.com",phone:"222-222-3333"},{id:2,name:"Sofia Karen",email:"sofiaKaren@gmail.com",phone:"222-222-3444"},{id:3,name:"Mandy Fury",email:"fury@gmail.com",phone:"222-222-3555"}],dispatch:function(e){return t.setState(function(a){return E(a,e)})}},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(b.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),g=b.Consumer,y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={showInfo:!1},t.toggleInfo=function(){t.setState({showInfo:!t.state.showInfo})},t.deleteOnClick=function(e,a){a({type:"DELETE_CONTACT",payload:e})},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,l=a.email,o=a.phone;return r.a.createElement(g,null,function(a){var c=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n,r.a.createElement("i",{onClick:e.toggleInfo,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{float:"right",cursor:"pointer"},onClick:e.deleteOnClick.bind(e,t,c)})),e.state.showInfo?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},l),r.a.createElement("li",{className:"list-group-item"},o)):null)})}}]),a}(n.Component),N=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(g,null,function(e){var a=e.contacts;return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," Manager"),a.map(function(e){return r.a.createElement(y,{key:e.id,contact:e})}))})}}]),a}(n.Component),O=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Contact Manager"),r.a.createElement("p",null,"This is an app that can store and delete contacts"),r.a.createElement("h4",null,"version 1.0.0"))}}]),a}(n.Component);function C(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("span",{className:"text-danger"},"404")," NOT FOUND!"),r.a.createElement("p",null,"The page you are looking for can't be found or this destination doesn't exist!!"),r.a.createElement("h3",null,"Peace!"))}var j=t(11),w=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(j.a,{to:"/",className:"navbar-brand"},a),r.a.createElement("ul",{className:"navbar-nav mr-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(j.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(j.a,{to:"/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(j.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About")))))};w.defaultProps={branding:"My App"};var k=w,A=t(14),I=t(27),S=t.n(I),T=function(e){var a=e.label,t=e.name,n=e.placeholder,l=e.value,o=e.type,c=e.onChange,s=e.error,i=e.onKeyPress;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,className:S()("form-control form-control-sm",{"is-invalid":s}),name:t,placeholder:n,value:l,onChange:c,onKeyPress:i}),s?r.a.createElement("div",{className:"invalid-feedback"},s):null)};T.defaultProps={type:"text"};var x=T,D=t(28),P=t.n(D),M=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{name:"",email:"",phone:""},showInfo:!1},t.toggleInfo=function(){t.setState({showInfo:!t.state.showInfo})},t.onSubmit=function(e,a){a.preventDefault();var n=t.state,r=n.name,l=n.email,o=n.phone,c=n.errors;""!==r?""!==l?""!==o?(e({type:"ADD_CONTACT",payload:{id:P()(),name:r,email:l,phone:o,errors:c}}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/")):t.setState({errors:{phone:"Phone field is required"}}):t.setState({errors:{email:"Email field is required"}}):t.setState({errors:{name:"Name field is required"}})},t.onChangeValue=function(e){return t.setState(Object(A.a)({},e.target.name,e.target.value))},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,l=a.phone,o=a.errors;return r.a.createElement(g,null,function(a){var c=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header",onClick:e.toggleInfo,style:{cursor:"pointer"}},"Add Contact"),e.state.showInfo?r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,c)},r.a.createElement(x,{label:"Name",className:"form-control form-control-sm",name:"name",placeholder:"insert name..",value:t,onChange:e.onChangeValue,error:o.name}),r.a.createElement(x,{label:"Email",type:"email",className:"form-control form-control-sm",name:"email",placeholder:"insert email..",value:n,onChange:e.onChangeValue,error:o.email}),r.a.createElement(x,{label:"Phone",className:"form-control form-control-sm",name:"phone",placeholder:"insert phone number..",value:l,onChange:e.onChangeValue,error:o.phone}),r.a.createElement("button",{type:"submit",className:"btn btn-success btn-sm btn-block"},"Add contact"))):null)})}}]),a}(n.Component);t(42);var q=function(){return r.a.createElement(v,null,r.a.createElement(c.b,{history:Object(s.a)()},r.a.createElement("div",{className:"App"},r.a.createElement(k,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:"true",path:"/",component:N}),r.a.createElement(c.a,{exact:"true",path:"/add",component:M}),r.a.createElement(c.a,{exact:"true",path:"/about",component:O}),r.a.createElement(c.a,{component:C}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.49051ceb.chunk.js.map