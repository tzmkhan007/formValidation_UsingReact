(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),s=a.n(l),c=(a(13),a(1)),i=a(2),o=a(4),u=a(3),m=(a(14),a(7)),d=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){var t=e.target.name,a=e.target.value,r=n.state.errors;switch(t){case"username":r.username=a.length<6?"Username must be 6 character":"";break;case"email":r.email=a.length<6?"Email must be 6 character":"";var l=a.indexOf("@"),s=a.lastIndexOf(".");(l<1||s-l<2)&&(r.email="Please enter valid email id");break;case"password":r.password=a.length<8?"Password must be 8 character":""}n.setState(Object(m.a)({errors:r},t,a))},n.submitHandler=function(e){e.preventDefault(),0===n.state.errors.username.length&&0===n.state.errors.password.length&&0===n.state.errors.email.length?alert("Form is valid"):alert("Form is invalid")},n.state={errors:{username:"",password:"",email:""}},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"main_container"},r.a.createElement("h1",null,"Login Form"),r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("input",{type:"text",placeholder:"Enter your Username",name:"username",onChange:this.changeHandler}),r.a.createElement("p",null,e.username),r.a.createElement("input",{type:"text",placeholder:"Enter your Email",name:"email",onChange:this.changeHandler}),r.a.createElement("p",null,e.email),r.a.createElement("input",{type:"text",placeholder:"Enter your Password",name:"password",onChange:this.changeHandler}),r.a.createElement("p",null,e.password),r.a.createElement("input",{type:"submit",value:"Login"})))}}]),a}(n.Component),h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))}}]),a}(n.Component),p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),l(e),s(e)})};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),p()},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.b19cc742.chunk.js.map