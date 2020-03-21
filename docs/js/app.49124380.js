(function(e){function t(t){for(var r,i,o=t[0],l=t[1],c=t[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},n={app:0},a=[];function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/SeeShells/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"013b":function(e,t,s){"use strict";var r=s("e9fb"),n=s.n(r);n.a},"1f0d":function(e,t,s){},3048:function(e,t,s){"use strict";var r=s("3815"),n=s.n(r);n.a},3815:function(e,t,s){},"543d":function(e,t,s){"use strict";var r=s("c6b1"),n=s.n(r);n.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=s("5f5b"),a=s("b1e0"),i=(s("f9e3"),s("2dd8"),s("8c4f")),o=s("0628"),l=s.n(o),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("NavigationBar"),s("div",{attrs:{id:"page"}},[s("router-view")],1)],1)},d=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"nav"}},[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[r("img",{attrs:{alt:"Vue logo",src:s("cf05"),width:"75",height:"75"}}),r("router-link",{attrs:{to:"/SeeShells/"}},[r("b-navbar-brand",[e._v("SeeShells")])],1),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#"}},[e._v("About")]),r("b-nav-item",{attrs:{href:"#"}},[e._v("Download the Program")]),r("b-nav-item",{attrs:{href:"#"}},[e._v("Developer Team")]),r("b-nav-item",{attrs:{href:"https://github.com/RickLeinecker/SeeShells"}},[e._v("GitHub Page")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("em",[e._v("Administrative")])]},proxy:!0}])},[e.sessionExists?r("div",[r("LoggedIn")],1):r("div",[r("LoggedOut")],1)])],1)],1)],1)],1)},p=[],f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"items"}},[s("b-dropdown-item",[e._v("Approve New Admins")]),s("b-dropdown-item",[s("router-link",{attrs:{to:"/SeeShells/scripts"}},[e._v("Modify Scripts")])],1),s("b-dropdown-item",{on:{click:e.Logout}},[e._v("Logout")])],1)},m=[],h={name:"LoggedIn",methods:{Logout:function(){var e="https://seeshells.herokuapp.com/",t=e+"logout",s=new XMLHttpRequest;s.open("GET",t,!1),s.setRequestHeader("Content-type","application/json; charset=UTF-8"),s.setRequestHeader("X-Auth-Token",this.$session.get("session"));try{s.send()}catch(r){alert(r.message)}this.$session.destroy(),this.$router.push("/SeeShells/"),location.reload()}}},b=h,v=s("2877"),g=Object(v["a"])(b,f,m,!1,null,null,null),w=g.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"items"}},[s("b-dropdown-item",[s("router-link",{attrs:{to:"/SeeShells/register"}},[e._v("Register")])],1),s("b-dropdown-item",[s("router-link",{attrs:{to:"/SeeShells/login"}},[e._v("Login")])],1)],1)},_=[],x={name:"LoggedOut",methods:{}},k=x,S=Object(v["a"])(k,y,_,!1,null,null,null),T=S.exports,E={name:"NavigationBar",computed:{sessionExists:function(){return this.$session.exists()}},components:{LoggedIn:w,LoggedOut:T}},L=E,j=(s("3048"),Object(v["a"])(L,u,p,!1,null,"678d4fd4",null)),O=j.exports,C={name:"App",components:{NavigationBar:O}},$=C,A=(s("c174"),Object(v["a"])($,c,d,!1,null,"0b4bf064",null)),H=A.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"home"}},[s("p",[e._v("home!!!")])])}],F={name:"Home"},q=F,I=Object(v["a"])(q,P,R,!1,null,null,null),M=I.exports,N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"register"}},[e.show?s("b-form",{staticClass:"m-5",on:{submit:e.onRegister}},[s("b-form-group",{attrs:{label:"Username:"}},[s("b-form-input",{attrs:{required:"",placeholder:"Enter username"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),s("b-form-group",{attrs:{label:"Password:"}},[s("b-form-input",{attrs:{type:"password",required:"",placeholder:"Enter password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),s("password",{attrs:{"strength-meter-only":!0},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),s("b-form-input",{attrs:{type:"password",required:"",placeholder:"Re-enter password"},model:{value:e.form.passwordconfirm,callback:function(t){e.$set(e.form,"passwordconfirm",t)},expression:"form.passwordconfirm"}}),s("div",{attrs:{id:"messages"}})],1),s("b-button",{attrs:{type:"register",variant:"primary"}},[e._v("Register")])],1):e._e()],1)},U=[],D=(s("b0c0"),s("f20a")),B=s.n(D),G={name:"RegisterForm",components:{Password:B.a},data:function(){return{form:{name:"",password:"",passwordconfirm:""},show:!0}},methods:{onRegister:function(e){e.preventDefault();var t="https://seeshells.herokuapp.com/";if(this.form.password==this.form.passwordconfirm){var s='{"username":"'+this.form.name+'", "password":"'+this.form.password+'"}',r=t+"register",n=new XMLHttpRequest;n.open("POST",r,!1),n.setRequestHeader("Content-type","application/json; charset=UTF-8");try{n.send(s);var a=JSON.parse(n.responseText);1==a.success?document.getElementById("messages").insertAdjacentHTML("afterend",'<div class="alert alert-info alert-dismissible">  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>  <strong>Registration sent! </strong>You must wait for a current administrator to approve you now. </div>'):document.getElementById("messages").insertAdjacentHTML("afterend",'<div class="alert alert-danger alert-dismissible">  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>  <strong>Error! </strong>'+a.error+" Please try again later. </div>")}catch(i){alert(i.message)}}else document.getElementById("messages").insertAdjacentHTML("afterend",'<div class="alert alert-danger alert-dismissible">  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>  <strong>Passwords don\'t match! </strong>Re-enter the passwords. </div>')}}},X=G,J=(s("7197"),Object(v["a"])(X,N,U,!1,null,null,null)),W=J.exports,Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"login"}},[e.show?s("b-form",{staticClass:"m-5",on:{submit:e.onLogin}},[s("b-form-group",{attrs:{label:"Username:"}},[s("b-form-input",{attrs:{required:"",placeholder:"Enter username"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),s("b-form-group",{attrs:{label:"Password:"}},[s("b-form-input",{attrs:{type:"password",required:"",placeholder:"Enter password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),s("div",{attrs:{id:"messages"}})],1),s("b-button",{attrs:{type:"login",variant:"primary"}},[e._v("Login")])],1):e._e()],1)},z=[],V={name:"LoginForm",data:function(){return{form:{name:"",password:""},show:!0}},methods:{onLogin:function(e){e.preventDefault();var t="https://seeshells.herokuapp.com/",s=t+"login",r='{"username":"'+this.form.name+'", "password":"'+this.form.password+'"}',n=new XMLHttpRequest;n.open("POST",s,!1),n.setRequestHeader("Content-type","application/json; charset=UTF-8");try{n.send(r);var a=JSON.parse(n.responseText);1==a.success?(this.$session.start(),this.$session.set("session",a.session),this.$router.push("/SeeShells/"),location.reload()):document.getElementById("messages").insertAdjacentHTML("afterend",'<div class="alert alert-danger alert-dismissible">  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>  <strong>Error! </strong> Failed to login. Please try again. </div>')}catch(i){document.getElementById("messages").insertAdjacentHTML("afterend",'<div class="alert alert-danger alert-dismissible">  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>  <strong>Error! </strong> Failed to login. Please try again. </div>')}}}},K=V,Q=(s("013b"),Object(v["a"])(K,Y,z,!1,null,null,null)),Z=Q.exports,ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"scriptsHeader"}},[s("h1",[e._v("Adding and Modifying Scripts for the WPF application")]),s("br"),s("div",{attrs:{id:"scriptsContent"}},[s("CurrentScript"),s("br"),s("ExampleScript")],1)])},te=[],se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"exampleScript",align:"left"}},[s("h2",[e._v("Example Script (0x71) ")]),e._m(0),s("br"),s("h4",[e._v("Script Explanation")]),s("p",[e._v(' This script parses a Control Panel shell item (hex identifier: 0x71). Scripts must be written in Lua and can use some C# functions through the NLua library. The "shellitem" object is the binary shellbag data that must be parsed. The "properties" object holds the information that will be returned; an item must be added to "properties" for the script to be useable. Add additional items to "properties" to provide more information. Whatever is held in properties is what users will see about the shell item. "knownGUIDs" is a dictionary where the key is a GUID and the value is a human-readable string of that GUID. Some C# functions are made available in the program to aid in parsing shellbag data. See the available functions below. You can use them by typing shellitem:[function]() where [function] is the function name like unpack_guid. ')]),s("a",{attrs:{href:"https://www.lua.org/docs.html"}},[e._v("For help with writing Lua scripts, look here.")]),s("br"),s("a",{attrs:{href:"http://nlua.org/"}},[e._v("For more information on NLua, look here.")]),s("br"),s("br"),s("ScriptFunctions")],1)},re=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("code",{pre:!0},[e._v(" local guid = shellitem:unpack_guid(0x0E) "),s("br"),e._v(" local flag = shellitem:unpack_byte(0x03) "),s("br"),s("br"),e._v(' properties:Add("TypeName", "Control Panel")'),s("br"),e._v(' properties:Add("Guid", tostring(guid))'),s("br"),e._v(' properties:Add("Flags", tostring(flag))'),s("br"),s("br"),e._v(" if knownGUIDs:ContainsKey(tostring(guid)) then"),s("br"),e._v(' properties:Add("Name", string.format("{{CONTROL PANEL: %s}}", knownGUIDs[guid]))'),s("br"),e._v(" else"),s("br"),e._v(' properties:Add("Name", string.format("{{CONTROL PANEL: %s}}", guid))'),s("br"),s("br"),e._v(" end"),s("br")])}],ne=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"functionDescriptions"}},[s("h5",[e._v("View Available Functions:")]),s("b-dropdown",{staticClass:"m-2",attrs:{text:"public new byte unpack_byte(int off)",block:"",split:"","split-variant":"outline-secondary",variant:"secondary","menu-class":"w-100"}},[s("b-dropdown-text",[e._v("This function will return the value of the byte from a binary block at the offset specified in the function argument.")])],1),s("b-dropdown",{staticClass:"m-2",attrs:{text:"public new ushort unpack_word(int off)",block:"",split:"","split-variant":"outline-secondary",variant:"primary","menu-class":"w-100"}},[s("b-dropdown-text",[e._v("This function will unpack a value equal to 2 bytes from a binary block at the offset specified in the function argument.")])],1),s("b-dropdown",{staticClass:"m-2",attrs:{text:"public new string unpack_guid(int off)",block:"",split:"","split-variant":"outline-secondary",variant:"secondary","menu-class":"w-100"}},[s("b-dropdown-text",[e._v("This function will return a GUID value from a binary block at the offset specified in the function argument.")])],1),s("b-dropdown",{staticClass:"m-2",attrs:{text:"public new string unpack_wstring(int off, int length = 0)",block:"",split:"","split-variant":"outline-secondary",variant:"primary","menu-class":"w-100"}},[s("b-dropdown-text",[e._v("This function will unpack a Unicode encoded String of various sizing from a binary block at the offset specified in the function argument.")])],1),s("b-dropdown",{staticClass:"m-2",attrs:{text:"public new string unpack_string(int off, int length = 0)",block:"",split:"","split-variant":"outline-secondary",variant:"secondary","menu-class":"w-100"}},[s("b-dropdown-text",[e._v("This function will a string of various sizing from a binary block at the offset specified in the function argument.")])],1),s("b-dropdown",{staticClass:"m-2",attrs:{text:"public new uint unpack_dword(int off)",block:"",split:"","split-variant":"outline-secondary",variant:"primary","menu-class":"w-100"}},[s("b-dropdown-text",[e._v("This function will unpack a value equivalent to 4 bytes from a binary block at the offset specified in the function argument.")])],1),s("b-dropdown",{staticClass:"m-2",attrs:{text:"public new ulong UnpackQword(int off)",block:"",split:"","split-variant":"outline-secondary",variant:"secondary","menu-class":"w-100"}},[s("b-dropdown-text",[e._v("This function will unpack a value equivalent to 8 bytes from a binary block at the offset specified in the function argument.")])],1),s("b-dropdown",{staticClass:"m-2",attrs:{text:"public new DateTime unpack_dosdate(int off)",block:"",split:"","split-variant":"outline-secondary",variant:"primary","menu-class":"w-100"}},[s("b-dropdown-text",[e._v("This function will return the date value of 4 bytes from a binary block at the offset specified in the function argument.")])],1),s("b-dropdown",{staticClass:"m-2",attrs:{text:"public new DateTime UnpackFileTime(int off)",block:"",split:"","split-variant":"outline-secondary",variant:"secondary","menu-class":"w-100"}},[s("b-dropdown-text",[e._v("This function will pull out a Windows File time from its byte representation from a binary block at the offset specified in the function argument. FilesTimes are represented in 8 bytes.")])],1),s("b-dropdown",{staticClass:"m-2",attrs:{text:"public new int align(int off, int alignment)",block:"",split:"","split-variant":"outline-secondary",variant:"primary","menu-class":"w-100"}},[s("b-dropdown-text",[e._v("This function will get the offset at a specific alignment value.")])],1)],1)},ae=[],ie={name:"ScriptFunctions"},oe=ie,le=Object(v["a"])(oe,ne,ae,!1,null,null,null),ce=le.exports,de={name:"ExampleScript",components:{ScriptFunctions:ce}},ue=de,pe=(s("543d"),Object(v["a"])(ue,se,re,!1,null,null,null)),fe=pe.exports,me=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"current"}},[s("div",{attrs:{id:"container"}},[s("div",{attrs:{id:"leftContent"}},[e._v("Enter shell item identifier:")]),s("div",{attrs:{id:"middleContent"}},[s("b-form-input",{attrs:{type:"number",placeholder:"113"},on:{change:e.onChange},model:{value:e.identifier,callback:function(t){e.identifier=t},expression:"identifier"}})],1),s("div",{attrs:{id:"rightContent"}},[e._v("Hex equivalent: "+e._s(e.hexIdentifier))])]),s("br"),s("b-form-textarea",{attrs:{id:"currentScript",placeholder:"Enter Lua script here to parse the shell item...",rows:"10"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),s("br"),s("b-button",{attrs:{variant:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.buttonText))]),s("br"),s("div",{attrs:{id:"messages"}})],1)},he=[],be=(s("a9e3"),s("d3b7"),s("25f0"),{name:"CurrentScript",data:function(){return{identifier:"",hexIdentifier:"0x71",text:"",buttonText:"Select a shell item identifier above."}},methods:{onChange:function(){if(this.hexIdentifier="0x"+Number(this.identifier).toString(16).toUpperCase(),0!=this.identifier){var e="https://seeshells.herokuapp.com/",t=e+"getScript",s="identifier="+this.identifier,r=new XMLHttpRequest;r.open("GET",t+"?"+s,!1),r.setRequestHeader("Content-type","application/json; charset=UTF-8");try{r.send(null);var n=JSON.parse(r.responseText);1==n.success?(this.text=atob(n.script),this.buttonText="Update script"):(this.text="",this.buttonText="Submit new script")}catch(a){console.info(a)}}},onSubmit:function(){if(""!=this.text){var e="https://seeshells.herokuapp.com/",t=e+"updateScript",s='{"identifier":'+this.identifier+', "script":"'+btoa(this.text)+'"}',r=new XMLHttpRequest;r.open("POST",t,!1),r.setRequestHeader("Content-type","application/json; charset=UTF-8"),r.setRequestHeader("X-Auth-Token",this.$session.get("session"));try{r.send(s);var n=JSON.parse(r.responseText);1==n.success?document.getElementById("messages").insertAdjacentHTML("afterend",'<div class="alert alert-success alert-dismissible">  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>  <strong>Script saved! </strong>To use it in the desktop application, just update your script configuration file in the application. </div>'):"You must log in to perform this action."==n.message?(this.$session.destroy(),this.$router.push("/SeeShells/login"),location.reload()):document.getElementById("messages").insertAdjacentHTML("afterend",'<div class="alert alert-danger alert-dismissible">  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>  <strong>Error! </strong> Failed to update the script. </div>')}catch(a){console.log(a),document.getElementById("messages").insertAdjacentHTML("afterend",'<div class="alert alert-danger alert-dismissible">  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>  <strong>Error! </strong> Failed to update the script. </div>')}}}}}),ve=be,ge=(s("ecd0"),Object(v["a"])(ve,me,he,!1,null,"75f659f8",null)),we=ge.exports,ye={name:"Scripts",components:{ExampleScript:fe,CurrentScript:we}},_e=ye,xe=(s("901f"),Object(v["a"])(_e,ee,te,!1,null,null,null)),ke=xe.exports,Se="/SeeShells/",Te=[{path:Se,component:M},{path:Se+"register",component:W},{path:Se+"login",component:Z},{path:Se+"scripts",component:ke}],Ee=Te;r["default"].config.productionTip=!1,r["default"].use(n["a"]),r["default"].use(a["a"]),r["default"].use(i["a"]),r["default"].use(l.a);var Le=new i["a"]({mode:"history",routes:Ee});new r["default"]({router:Le,render:function(e){return e(H)}}).$mount("#app")},"5bde":function(e,t,s){},7197:function(e,t,s){"use strict";var r=s("d201"),n=s.n(r);n.a},"901f":function(e,t,s){"use strict";var r=s("5bde"),n=s.n(r);n.a},c174:function(e,t,s){"use strict";var r=s("1f0d"),n=s.n(r);n.a},c6b1:function(e,t,s){},cf05:function(e,t,s){e.exports=s.p+"img/logo.9b01295e.png"},d201:function(e,t,s){},e9fb:function(e,t,s){},ecd0:function(e,t,s){"use strict";var r=s("fccf"),n=s.n(r);n.a},fccf:function(e,t,s){}});
//# sourceMappingURL=app.49124380.js.map