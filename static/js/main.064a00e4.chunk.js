(this["webpackJsonpfera-twitter"]=this["webpackJsonpfera-twitter"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),i=(a(64),a(12)),u=a(55),s=a(16),o=a(50),m=a(9).a({basename:"/fera-twitter"}),p=a(8),f=a(20),E=a(5),d=a.n(E),b=a(19),v=a(51),g=a.n(v).a.create({baseURL:"https://potfolio.redirectme.net/feratwitter"});a(87);var O=function(e){var t=e.waitUpload,a=Object(f.c)("image_url"),c=a.defaultValue,l=a.registerField,i=Object(n.useState)(c),u=Object(p.a)(i,2),s=u[0],o=u[1],m=Object(n.useRef)();function E(){return(E=Object(b.a)(d.a.mark((function e(a){var n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),(n=new FormData).append("file",a.target.files[0]),e.next=5,g.post("files",n);case 5:r=e.sent,c=r.data.url,o(c),t(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){m.current&&l({name:"image_url",ref:m.current,path:"dataset.file"})}),[m,l]),r.a.createElement("div",{className:"avatar-input-container"},r.a.createElement("label",{htmlFor:"avatar"},r.a.createElement("img",{src:s||"https://api.adorable.io/avatars/50/abott@adorable.png",alt:""}),r.a.createElement("input",{type:"file",id:"avatar",accept:"image/*","data-file":s,onChange:function(e){return E.apply(this,arguments)},ref:m})))};a(88);var j=function(e){var t=e.waitUpload,a=Object(f.c)("background_url"),c=a.defaultValue,l=a.registerField,i=Object(n.useState)(c),u=Object(p.a)(i,2),s=u[0],o=u[1],m=Object(n.useRef)();function E(){return(E=Object(b.a)(d.a.mark((function e(a){var n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),(n=new FormData).append("file",a.target.files[0]),e.next=5,g.post("files",n);case 5:r=e.sent,c=r.data.url,o(c),t(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){m.current&&l({name:"background_url",ref:m.current,path:"dataset.file"})}),[m,l]),r.a.createElement("div",{className:"background-input-container"},r.a.createElement("label",{htmlFor:"background"},r.a.createElement("img",{src:s||"https://api.adorable.io/avatars/50/abott@adorable.png",alt:""}),r.a.createElement("input",{type:"file",id:"background",accept:"image/*","data-file":s,onChange:function(e){return E.apply(this,arguments)},ref:m})))};function h(e){return{type:"@auth/USER_SUCCESS",payload:{user:e}}}var w=a(58);a(89);var y=function(e){var t=e.children,a=Object(w.a)(e,["children"]);return r.a.createElement("div",{className:"button-container"},r.a.createElement("button",a,t))};a(90);var S=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.user.data})),a=Object(n.useState)(!1),c=Object(p.a)(a,2),l=c[0],i=c[1],u=Object(n.useState)(!1),o=Object(p.a)(u,2),E=o[0],d=o[1];return r.a.createElement("div",{className:"edit-profile-container"},r.a.createElement("div",{className:"title"},r.a.createElement("strong",null,t.name)),r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"details"},r.a.createElement(f.a,{initialData:t,onSubmit:function(t){e(function(e){return{type:"@user/UPDATE_USER_REQUEST",payload:{data:e}}}(t)),m.push("/profile")}},r.a.createElement(j,{name:"background_url",waitUpload:d}),r.a.createElement(O,{name:"image_url",waitUpload:i}),r.a.createElement("div",{className:"inputs"},r.a.createElement("label",{htmlFor:"identify"},"Identificador"),r.a.createElement(f.b,{type:"text",name:"identify"}),r.a.createElement("label",{htmlFor:"name"},"Nome"),r.a.createElement(f.b,{type:"text",name:"name"}),r.a.createElement(f.b,{type:"text",name:"_id",style:{display:"none"}}),!l&&!E&&r.a.createElement(y,{type:"submit"},"Salvar"),(!!l||!!E)&&r.a.createElement("span",null,"Aguarde, carregando imagem..."))))))},_=a(34),x=a(31),U=a(26);a(91);var k=function(e){var t=e.value,a=e.onChange,c=e.name,l=e.waitUpload,i=Object(n.useState)(t),u=Object(p.a)(i,2),s=u[0],o=u[1],m=Object(n.useState)(null),f=Object(p.a)(m,2),E=f[0],v=f[1];function O(){return(O=Object(b.a)(d.a.mark((function e(t){var n,r,i,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),n=new FormData,r=t.target.files[0].name,n.append("file",t.target.files[0]),e.next=6,g.post("files",n);case 6:i=e.sent,v(r),u=i.data.url,o(u),a({target:{name:c,value:u}}),l(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){(!t||t&&""===t)&&v(null)}),[t]),r.a.createElement("div",{className:"image-input-container"},r.a.createElement("label",{htmlFor:"background"},r.a.createElement("img",{src:"assets/icons/image.svg",alt:""}),r.a.createElement("input",{type:"file",id:"background",accept:"image/*","data-file":s,onChange:function(e){return O.apply(this,arguments)}})),r.a.createElement("span",null,E))},N=a(103),R=a(104),C=a(56);a(92);var F=function(e){var t=e.tweet,a=t.content,c=t.createdAt,l=t.image_url,i=t.author,u=i.name,s=i.identify,o=i.image_url,m=Object(n.useMemo)((function(){return Object(N.a)(Object(R.a)(c),{locale:C.a})}),[c]);return r.a.createElement("div",{className:"tweet-container"},r.a.createElement("img",{src:o,alt:"perfil"}),r.a.createElement("div",null,r.a.createElement("strong",null,u),r.a.createElement("span",null,s," - ",m),r.a.createElement("p",null,a),l&&r.a.createElement("img",{src:l,alt:"tweet"})))};a(93);var T=function(){var e=Object(s.c)((function(e){return e.user.data})),t=Object(n.useState)({}),a=Object(p.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)([]),u=Object(p.a)(i,2),o=u[0],m=u[1],f=Object(n.useState)(!1),E=Object(p.a)(f,2),v=E[0],O=E[1];function j(e){var t=e.target,a=t.name,n=t.value;l(Object(U.a)(Object(U.a)({},c),{},Object(x.a)({},a,n)))}function h(){return(h=Object(b.a)(d.a.mark((function t(a){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=Object(U.a)(Object(U.a)({},c),{},{author:e._id}),t.next=4,g.post("/tweets",n);case 4:r=t.sent,l({content:"",image_url:""}),m([r.data].concat(Object(_.a)(o)));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/tweets");case 2:t=e.sent,m(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"title"},r.a.createElement("strong",null,"P\xe1gina Inicial")),r.a.createElement("div",{className:"post"},!!e&&r.a.createElement("img",{src:e.image_url,alt:"perfil"}),r.a.createElement("form",{onSubmit:function(e){return h.apply(this,arguments)}},r.a.createElement("textarea",{value:c.content,type:"text",name:"content",placeholder:"O que est\xe1 acontecendo?",onChange:j}),r.a.createElement("div",{className:"actions"},r.a.createElement(k,{name:"image_url",value:c.image_url,onChange:j,waitUpload:O}),!v&&r.a.createElement(y,{type:"submit"},"Tweetar"),!!v&&r.a.createElement("span",null,"Aguarde, carregando imagem...")))),o.map((function(e){return r.a.createElement(F,{key:e._id,tweet:e})})))};a(94);var A=[{path:"/",exact:!0,component:T},{path:"/profile",component:function(){var e=Object(s.c)((function(e){return e.user.data}));return r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",{className:"title"},!!e&&r.a.createElement("strong",null,e.name)),r.a.createElement("div",{className:"profile"},!!e&&r.a.createElement(r.a.Fragment,null,!!e.background_url&&r.a.createElement("img",{src:e.background_url,alt:"profile"}),!e.background_url&&r.a.createElement("div",{className:"no-picture"}),r.a.createElement("div",{className:"details"},r.a.createElement("img",{src:e.image_url,alt:"profile"}),r.a.createElement("strong",null,e.name),r.a.createElement("br",null),r.a.createElement("span",null,e.identify),r.a.createElement(y,{onClick:function(){m.push("/edit-profile")}},"Editar Perfil")))))}},{path:"/edit-profile",component:S}],D=a(23);a(95);var P=function(){var e=Object(s.b)();return Object(n.useEffect)((function(){e({type:"@user/USER_REQUEST"})}),[e]),r.a.createElement("div",{className:"navigation-container"},r.a.createElement("ul",null,r.a.createElement(D.a,{to:"/"},r.a.createElement("li",null,r.a.createElement("img",{src:"assets/icons/twitter.svg",alt:"twitter"}))),r.a.createElement(D.a,{to:"/"},r.a.createElement("li",null,r.a.createElement("img",{src:"assets/icons/home.svg",alt:"home"}),r.a.createElement("strong",null,"P\xe1gina In\xedcial"))),r.a.createElement(D.a,{to:"/profile"},r.a.createElement("li",{component:D.a,to:"/profile"},r.a.createElement("img",{src:"assets/icons/profile.svg",alt:"home"}),r.a.createElement("strong",null,"Perfil")))))};a(97);var Q=function(){return r.a.createElement("div",{className:"trend-topics-container"},r.a.createElement("input",{type:"text",name:"search",placeholder:"Buscar no Twitter"}),r.a.createElement("div",{className:"panel"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Assuntos para voc\xea")),r.a.createElement("li",null,r.a.createElement("span",null,"Assuntos no momento no brasil"),r.a.createElement("br",null),r.a.createElement("strong",null,"#MeContrate"),r.a.createElement("br",null),r.a.createElement("span",null,"18,9 mil tweets")),r.a.createElement("li",null,r.a.createElement("span",null,"Assuntos no momento no brasil"),r.a.createElement("br",null),r.a.createElement("strong",null,"#FERACODE"),r.a.createElement("br",null),r.a.createElement("span",null,"300 mil tweets")))))},I=a(33),M=a(57),B=a(11),J=a(53),V=a.n(J),q=a(54),L={data:null,loading:!1};var z=Object(B.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;return Object(q.a)(e,(function(e){switch(t.type){case"@user/USER_REQUEST":case"@user/UPDATE_USER_REQUEST":e.loading=!0;break;case"@auth/USER_SUCCESS":e.data=t.payload.user,e.loading=!1}}))}}),G=a(18),H=d.a.mark(W),K=d.a.mark(X);function W(){var e,t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(G.b)(g.get,"users");case 2:return e=a.sent,t=e.data,a.next=6,Object(G.c)(h(t));case 6:case"end":return a.stop()}}),H)}function X(e){var t,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(G.b)(g.put,"users/".concat(t.data._id),t.data);case 3:return a=n.sent,n.next=6,Object(G.c)(h(a.data));case 6:case"end":return n.stop()}}),K)}var Y=Object(G.a)([Object(G.d)("@user/USER_REQUEST",W),Object(G.d)("@user/UPDATE_USER_REQUEST",X)]),Z=d.a.mark($);function $(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Y]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),Z)}var ee,te=Object(M.a)(),ae=[te],ne=function(e,t){var a=B.a.apply(void 0,Object(_.a)(t));return Object(B.e)(e,a)}((ee=z,Object(I.a)({key:"feratwitter",storage:V.a,whitelist:["user"]},ee)),ae),re=Object(I.b)(ne);te.run($);a(100);var ce=function(){return r.a.createElement(s.a,{store:ne},r.a.createElement(o.a,{persistor:re},r.a.createElement(i.b,{history:m},r.a.createElement("div",{className:"app-container"},r.a.createElement(P,null),r.a.createElement("div",{className:"pages"},Object(u.a)(A)),r.a.createElement(Q,null)))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root"))},59:function(e,t,a){e.exports=a(101)},64:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.064a00e4.chunk.js.map