(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){e.exports=a(230)},145:function(e,t,a){},146:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),o=(a(145),a(30)),s=(a(146),a(26)),l=a(265),m=a(33),u=a(34),p=a(42),d=a(40),h=a(14),g=a(43),f=a(257),b=a(258),E=a(260),v=a(274),y=a(261),N=a(262),w=a(259),_=a(18),j=a.n(_),C=a(61),O=a.n(C),x=function(e){var t=e.errMsg,a=[],n=!0,i=!1,c=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var l=o.value;a.push(r.a.createElement(O.a,{key:l,variant:"body2",color:"error"},l))}}catch(m){i=!0,c=m}finally{try{n||null==s.return||s.return()}finally{if(i)throw c}}return r.a.createElement(r.a.Fragment,null,a)},S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={accountName:"",password:""},a._onSubmit=a._onSubmit.bind(Object(h.a)(a)),a._onChangeAccountName=a._onChangeAccountName.bind(Object(h.a)(a)),a._onChangePassword=a._onChangePassword.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"_onSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.accountName,n=t.password;this.props.onSubmit(a,n)}},{key:"_onChangeAccountName",value:function(e){this.setState({accountName:e.target.value})}},{key:"_onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.accountName,a=e.password,n=this.props.classes;return r.a.createElement("div",{className:n.paper},r.a.createElement(b.a,{className:n.avatar},r.a.createElement(w.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h5"},"\u30ed\u30b0\u30a4\u30f3\u30da\u30fc\u30b8"),r.a.createElement("form",{className:n.form,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"accountName",label:"\u30e6\u30fc\u30b6\u540d",name:"accountName",autoFocus:!0,value:t,onChange:this._onChangeAccountName}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"\u30d1\u30b9\u30ef\u30fc\u30c9",name:"password",type:"password",autoComplete:"current-password",value:a,onChange:this._onChangePassword}),0!==this.props.errors.length&&r.a.createElement(x,{errMsg:this.props.errors}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:this._onSubmit,className:n.submit},"\u30ed\u30b0\u30a4\u30f3"),r.a.createElement(N.a,{container:!0},r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(o.a,{to:it.register.path},"\u65b0\u898f\u767b\u9332\u306f\u3053\u3061\u3089")))))}}]),t}(r.a.Component),I=j()(function(e){return Object(f.a)({paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}})})(S),k=a(23),P=a(53),T=a.n(P),U=a(96),A={apiUrl:"http://localhost:8000"},D=new(function(){function e(){Object(m.a)(this,e),this.baseUrl=A.apiUrl,this.defaultHeaders={}}return Object(u.a)(e,[{key:"get",value:function(){var e=Object(U.a)(T.a.mark(function e(t){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseUrl).concat(t),{method:"GET",headers:this.defaultHeaders});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(U.a)(T.a.mark(function e(t,a){var n,r;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",mode:"same-origin",headers:Object.assign({},this.defaultHeaders,{"Content-Type":"application/json"}),credentials:"same-origin"},a&&(r=JSON.stringify(a),n.body=r),e.next=4,fetch("".concat(this.baseUrl).concat(t),n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()}]),e}()),W=a(15),M="LOGIN_SUCCESS",F="LOGIN_FAIL";function L(e,t){return function(a){D.post("/login",{account_name:e,password:t}).then(function(e){if(200!==e.status)throw new Error("HTTP status not 200");return e.json()}).then(function(e){var t;a((t={userId:e.id,accountName:e.account_name,address:e.address},{type:M,payload:t})),a(Object(W.d)(it.top.path))}).catch(function(e){var t;a((t={errorMsg:[e.message]},{type:F,payload:t}))})}}var z=Object(k.c)(function(e){return{errors:e.formError.errorMsg}},function(e){return{onSubmit:function(t,a){e(L(t,a))}}})(I),q=a(130),R=a(263),B=a(264),G=Object(q.a)({palette:{background:{default:"white"}}}),H=function(e){var t=e.children;return r.a.createElement(R.a,{theme:G},r.a.createElement(B.a,{maxWidth:"lg",children:t}))},J=function(e){return function(){return r.a.createElement(H,null,r.a.createElement(e,null))}},V=Object(l.a)(function(e){return{paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"}}}),K=J(function(){var e=V();return r.a.createElement("div",{className:e.paper},r.a.createElement(z,null))}),Q=a(19),X=a.n(Q),Y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={accountName:"",address:"",password:""},a._onSubmit=a._onSubmit.bind(Object(h.a)(a)),a._onChangeAccountName=a._onChangeAccountName.bind(Object(h.a)(a)),a._onChangeAddress=a._onChangeAddress.bind(Object(h.a)(a)),a._onChangePassword=a._onChangePassword.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"_onSubmit",value:function(e){e.preventDefault(),this.props.register({account_name:this.state.accountName,address:this.state.address,password:this.state.password})}},{key:"_onChangeAccountName",value:function(e){this.setState({accountName:e.target.value})}},{key:"_onChangeAddress",value:function(e){this.setState({address:e.target.value})}},{key:"_onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.accountName,n=t.address,i=t.password;return r.a.createElement("div",{className:e.paper},r.a.createElement(b.a,{className:e.avatar},r.a.createElement(w.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h5"},"\u65b0\u898f\u767b\u9332"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"\u30e6\u30fc\u30b6\u540d",name:"name",value:a,onChange:this._onChangeAccountName,autoFocus:!0}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"address",label:"\u4f4f\u6240",name:"address",value:n,onChange:this._onChangeAddress}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"\u30d1\u30b9\u30ef\u30fc\u30c9",name:"password",type:"password",value:i,onChange:this._onChangePassword}),0!==this.props.errors.length&&r.a.createElement(x,{errMsg:this.props.errors}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this._onSubmit},"\u65b0\u898f\u767b\u9332"),r.a.createElement(N.a,{container:!0},r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(o.a,{to:it.login.path},"\u3059\u3067\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u304a\u6301\u3061\u306e\u65b9\u306f\u3053\u3061\u3089")))))}}]),t}(r.a.Component),Z=j()(function(e){return Object(f.a)({paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}})})(Y),$="REGISTER_SUCCESS",ee="REGISTER_FAIL";function te(e){return function(t){D.post("/register",e).then(function(e){if(200!==e.status)throw new Error("HTTP status not 200");return e.json()}).then(function(e){var a;t((a={userId:e.id,accountName:e.account_name,address:e.address},{type:$,payload:a})),t(Object(W.d)(it.top.path))}).catch(function(e){var a;t((a={errorMsg:[e.message]},{type:ee,payload:a}))})}}var ae=Object(k.c)(function(e){return{errors:e.formError.errorMsg}},function(e){return{register:function(t){e(te(t))}}})(Z),ne=X()(function(e){return{paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"}}}),re=J(function(){var e=ne();return r.a.createElement("div",{className:e.paper},r.a.createElement(ae,null))}),ie=a(123),ce=a.n(ie),oe=a(124),se=a.n(oe),le=a(266),me=a(122),ue=a.n(me),pe=a(73),de=a.n(pe),he=a(125),ge=a.n(he),fe=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={imagePreviewUrl:""},a._handleImageChange=a._handleImageChange.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"_handleImageChange",value:function(e){var t=this;if(e.preventDefault(),null!==e.target.files){var a=new FileReader,n=e.target.files[0];a.onloadend=function(){if("string"!==typeof a.result)throw new Error;t.setState({file:n,imagePreviewUrl:a.result})},a.readAsDataURL(n)}}},{key:"render",value:function(){var e=this.props.classes,t=this.state.imagePreviewUrl,a=null;return console.log(t),a=t?r.a.createElement("img",{alt:"\u30d7\u30ec\u30d3\u30e5\u30fc",src:t}):r.a.createElement(ce.a,null,r.a.createElement(se.a,{className:e.avatar},r.a.createElement(le.a,null)),r.a.createElement(O.a,null,"\u5546\u54c1\u753b\u50cf")),r.a.createElement(de.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(de.a,{item:!0,xs:8},a),r.a.createElement(de.a,{item:!0,xs:4},r.a.createElement("input",{accept:"image/*",className:e.upload,id:"outlined-button-file",type:"file",onChange:this._handleImageChange}),r.a.createElement("label",{htmlFor:"outlined-button-file"},r.a.createElement(ge.a,{variant:"outlined",component:"span",className:e.button},"Upload"))))}}]),t}(r.a.Component),be=j()(function(e){return ue()({upload:{display:"none"},avatar:{margin:e.spacing(1)},button:{margin:e.spacing(1)}})})(fe),Ee=a(126),ve=a.n(Ee),ye=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={name:"",description:"",price:0},a._onSubmit=a._onSubmit.bind(Object(h.a)(a)),a._onChangeName=a._onChangeName.bind(Object(h.a)(a)),a._onChangeDescription=a._onChangeDescription.bind(Object(h.a)(a)),a._onChangePrice=a._onChangePrice.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"_onSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.name,n=t.description,r=t.price;this.props.sellItem(a,n,r)}},{key:"_onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"_onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"_onChangePrice",value:function(e){var t=e.target.value;ve.a.isNumeric(t,{no_symbols:!0})?this.setState({price:Number(t)}):e.preventDefault()}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.name,n=t.description,i=t.price;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{component:"h1",variant:"h5"},"\u51fa\u54c1\u30da\u30fc\u30b8"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(be,null),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"\u5546\u54c1\u540d",name:"name",value:a,onChange:this._onChangeName,autoFocus:!0}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"description",label:"\u5546\u54c1\u8aac\u660e",name:"description",value:n,onChange:this._onChangeDescription,multiline:!0,rows:5}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"price",label:"\u5024\u6bb5",name:"price",value:i,onChange:this._onChangePrice}),0!==this.props.errors.length&&r.a.createElement(x,{errMsg:this.props.errors}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this._onSubmit},"\u51fa\u54c1\u3059\u308b")))}}]),t}(r.a.Component),Ne=j()(function(e){return Object(f.a)({form:{width:"80%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}})})(ye),we="SELLING_ITEM_SUCCESS",_e="SELLING_ITEM_FAIL";function je(e,t,a){return function(n){D.get("/settings").then(function(e){if(!e.ok)throw new Error("CSRF token\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f");return e.json()}).then(function(n){var r={name:e,description:t,price:a,csrf_token:n.csrf_token};return D.post("/sell",r)}).then(function(e){if(!e.ok)throw new Error("HTTP status not 200");return e.json()}).then(function(e){var t;n((t=e.id,{type:we,payload:{itemId:t}})),n(Object(W.d)(it.top.path))}).catch(function(e){var t;n((t={errorMsg:[e.message]},{type:_e,payload:t}))})}}var Ce,Oe=Object(k.c)(function(e){return{errors:e.formError.errorMsg}},function(e){return{sellItem:function(t,a,n){e(je(t,a,n))}}})(Ne),xe=Object(l.a)(function(e){return{paper:{marginTop:e.spacing(1),display:"flex",flexDirection:"column",alignItems:"center"}}}),Se=J(function(){var e=xe();return r.a.createElement("div",{className:e.paper},r.a.createElement(Oe,null))}),Ie=a(267),ke=a(268),Pe=X()(function(e){return{title:{margin:e.spacing(3)},itemImage:{width:"100%",maxWidth:"500px",height:"auto"},avatar:{width:"50px",height:"50px"},divider:{margin:e.spacing(1)},descSection:{marginTop:e.spacing(3),marginBottom:e.spacing(3)},link:{textDecoration:"none"},appBar:{top:"auto",bottom:0},buyButton:{margin:e.spacing(1)}}}),Te={id:1,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},Ue=J(function(){var e=Pe(),t=Te;return r.a.createElement("div",null,"Item Page",r.a.createElement(E.a,{className:e.title,variant:"h3"},t.name),r.a.createElement(N.a,{container:!0,spacing:2},r.a.createElement(N.a,{item:!0},r.a.createElement("img",{className:e.itemImage,alt:t.name,src:t.thumbnailUrl})),r.a.createElement(N.a,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(N.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement("div",{className:e.descSection},r.a.createElement(E.a,{variant:"h4"},"\u5546\u54c1\u8aac\u660e"),r.a.createElement(Ie.a,{className:e.divider,variant:"middle"}),r.a.createElement(E.a,{variant:"body1"},t.description)),r.a.createElement("div",{className:e.descSection},r.a.createElement(E.a,{variant:"h4"},"\u51fa\u54c1\u8005"),r.a.createElement(Ie.a,{className:e.divider,variant:"middle"}),r.a.createElement(N.a,{container:!0,direction:"row",justify:"center",alignItems:"center",wrap:"nowrap",spacing:2},r.a.createElement(N.a,{item:!0},r.a.createElement(o.a,{className:e.link,to:it.user.getPath(1)},r.a.createElement(b.a,{className:e.avatar},'"T"'))),r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(E.a,{variant:"body1"},'"TODO"')))))))),r.a.createElement(ke.a,{color:"primary",position:"fixed",className:e.appBar},r.a.createElement(N.a,{container:!0,spacing:2,direction:"row",alignItems:"center"},r.a.createElement(N.a,{item:!0},r.a.createElement(E.a,{variant:"h5"},"\xa5",t.price)),r.a.createElement(N.a,{item:!0},r.a.createElement(y.a,{variant:"contained",className:e.buyButton},"\u8cfc\u5165")))))}),Ae=J(function(){return r.a.createElement("div",null,"Item Edit Page")}),De=J(function(){return r.a.createElement("div",null,"Item buying Page")}),We=J(function(){return r.a.createElement("div",null,"Transaction Page")}),Me=a(272),Fe=a(269),Le=a(270),ze=X()(function(e){return{itemImage:{height:"100%"}}}),qe=function(e){var t=e.itemId,a=e.imageUrl,n=e.title,i=e.price,c=ze();return r.a.createElement(Fe.a,null,r.a.createElement(o.a,{to:it.item.getPath(t)},r.a.createElement("img",{className:c.itemImage,src:a,alt:n})),r.a.createElement(Le.a,{title:n,subtitle:"\xa5".concat(i)}))},Re=a(271),Be=X()(function(e){return{grid:{width:"300px",height:"300px"}}}),Ge=function(e){var t=e.items,a=Be(),n=[],i=!0,c=!1,o=void 0;try{for(var s,l=t[Symbol.iterator]();!(i=(s=l.next()).done);i=!0){var m=s.value;n.push(r.a.createElement(Re.a,{className:a.grid,key:m.id},r.a.createElement(qe,{itemId:m.id,imageUrl:m.thumbnailUrl,title:m.name,price:m.price})))}}catch(u){c=!0,o=u}finally{try{i||null==l.return||l.return()}finally{if(c)throw o}}return r.a.createElement(Me.a,{cols:3},n)},He=a(127),Je=a.n(He),Ve=a(273),Ke=X()(function(e){return{fab:{margin:e.spacing(1),position:"fixed",top:"auto",bottom:"30px",right:"30px",width:"100px",height:"100px"}}}),Qe=Object(k.c)(function(e){return{}},function(e){return{onClick:function(t){t.preventDefault(),e(Object(W.d)(it.sell.path))}}})(function(e){var t=e.onClick,a=Ke();return r.a.createElement(Je.a,{className:a.fab,color:"secondary",onClick:t},r.a.createElement(Ve.a,{fontSize:"large"}))}),Xe=X()(function(e){return{avatar:{margin:e.spacing(3),width:"100px",height:"100px"},itemList:{marginTop:e.spacing(4)}}}),Ye=[{id:1,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:2,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:3,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:4,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"}],Ze={id:1235,accountName:"Kirin",address:"Tokyo"},$e=J(function(){var e=Xe(),t=Ze,a=Ye;return r.a.createElement("div",null,r.a.createElement("p",null,"User Page"),r.a.createElement(N.a,{container:!0,direction:"row",justify:"center",alignItems:"center",wrap:"nowrap",spacing:2},r.a.createElement(N.a,{item:!0},r.a.createElement(b.a,{className:e.avatar},t.accountName.charAt(0))),r.a.createElement(N.a,{item:!0,xs:!0},r.a.createElement(E.a,{variant:"h3"},t.accountName))),r.a.createElement(Ie.a,{variant:"middle"}),r.a.createElement("div",{className:e.itemList},r.a.createElement(Ge,{items:a})),r.a.createElement(Qe,null))}),et=J(function(){return r.a.createElement("div",null,"User setting Page")}),tt=J(function(){return r.a.createElement("div",null,"Item buying Page")}),at=X()(function(e){return{root:{display:"flex",flexWrap:"wrap",marginTop:e.spacing(1),justifyContent:"space-around",overflow:"hidden"}}}),nt=[{id:1,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:2,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:3,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"},{id:4,name:"\u3044\u3059",price:1e4,description:"\u3044\u3059\u3067\u3059",createdAt:"2\u65e5\u524d",thumbnailUrl:"https://i.gyazo.com/c61ab08bca188410e81dbdcf7684e07e.png"}],rt=J(function(){var e=at(),t=nt;return r.a.createElement("div",{className:e.root},r.a.createElement(Ge,{items:t}),r.a.createElement(Qe,null))}),it={top:{path:"/",getPath:function(){return"/"}},login:{path:"/login",getPath:function(){return"/login"}},register:{path:"/register",getPath:function(){return"register"}},sell:{path:"/sell",getPath:function(){return"/sell"}},item:{path:"/items/:item_id",getPath:function(e){return"/items/".concat(e)}},itemEdit:{path:"/items/:item_id/edit",getPath:function(e){return"/items/".concat(e,"/edit")}},buy:{path:"/items/:item_id/buy",getPath:function(e){return"/items".concat(e,"/buy")}},buyComplete:{path:"/buy/complete",getPath:function(){return"/buy/complete"}},transaction:{path:"/transactions/:transaction_id",getPath:function(e){return"/transactions/".concat(e)}},user:{path:"/users/:user_id",getPath:function(e){return"/users/".concat(e)}},userSetting:{path:"/users/setting",getPath:function(){return"/users/setting"}}},ct=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:it.top.path,component:rt}),r.a.createElement(s.a,{exact:!0,path:it.login.path,component:K}),r.a.createElement(s.a,{exact:!0,path:it.register.path,component:re}),r.a.createElement(s.a,{exact:!0,path:it.sell.path,component:Se}),r.a.createElement(s.a,{exact:!0,path:it.item.path,component:Ue}),r.a.createElement(s.a,{exact:!0,path:it.itemEdit.path,component:Ae}),r.a.createElement(s.a,{exact:!0,path:it.buy.path,component:De}),r.a.createElement(s.a,{exact:!0,path:it.buyComplete.path,component:tt}),r.a.createElement(s.a,{exact:!0,path:it.transaction.path,component:We}),r.a.createElement(s.a,{exact:!0,path:it.user.path,component:$e}),r.a.createElement(s.a,{exact:!0,path:it.userSetting.path,component:et}))},ot=[{path:"/",pageName:"Top page"},{path:"/login",pageName:"Sign in page"},{path:"/register",pageName:"Sign up page"},{path:"/items/:item_id",pageName:"Item page"},{path:"/items/:item_id/edit",pageName:"Item edit page"},{path:"/items/:item_id/buy",pageName:"Item edit page"},{path:"/buy/complete",pageName:"Buying complete page"},{path:"/sell",pageName:"Sell page"},{path:"/transactions/:transaction_id",pageName:"Transaction page"},{path:"/users/:user_id",pageName:"User page"},{path:"/users/:user_id/setting",pageName:"User setting page"}],st=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("ul",null,function(){for(var e=[],t=0,a=ot;t<a.length;t++){var n=a[t];e.push(r.a.createElement("li",null,r.a.createElement(o.a,{to:n.path},n.pageName)))}return e}())),r.a.createElement("hr",null),r.a.createElement(ct,null))},lt=a(41),mt=a(72),ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:case $:return Object(mt.a)({},e,t.payload);default:return e}},pt={errorMsg:[]},dt=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case F:case ee:case _e:return Object(mt.a)({},e.payload);default:return pt}},ht=a(39),gt=a(22),ft=a(116),bt=a(128),Et=a(129),vt=Object(gt.a)(),yt=Object(lt.createStore)((Ce=vt,Object(lt.combineReducers)({router:Object(ht.b)(Ce),authStatus:ut,formError:dt})),Object(Et.composeWithDevTools)(Object(lt.applyMiddleware)(bt.a,Object(ft.a)(vt))));c.a.render(r.a.createElement(k.a,{store:yt},r.a.createElement(ht.a,{history:vt},r.a.createElement(st,null))),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.864caa2c.chunk.js.map