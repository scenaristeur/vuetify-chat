(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3939:function(t,e,n){"use strict";var a=n("b77e"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawerToggle,callback:function(e){t.drawerToggle=e},expression:"drawerToggle"}},[n("v-list",[n("v-list-item",[n("v-list-item-action",[n("v-icon",[t._v("mdi-account")])],1),n("v-list-item-content",[t._v(" Online Users "+t._s(t.onlineUsers[0])+" ")])],1)],1),n("v-list",t._l(t.onlineUsers[1],(function(e){return n("v-list-item",{key:e.user.username,attrs:{avatar:""}},[n("v-list-item-avatar",[n("img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})]),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.user.username))])],1)],1)})),1)],1),n("v-app-bar",{staticClass:"light-blue darken-1",attrs:{app:""}},[n("v-app-bar-nav-icon",{nativeOn:{click:function(e){e.stopPropagation(),t.drawerToggle=!t.drawerToggle}}}),n("v-toolbar-title",[n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/chat/0",tag:"span"}},[t._v("Vuetify Chat")])],1),n("v-spacer"),t._l(t.menuItems,(function(e){return n("v-toolbar-items",{key:e.route},[n("v-btn",{key:e.title,attrs:{text:"",to:e.route}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),n("div",{staticClass:"hidden-xs-only"},[t._v(t._s(e.title))])],1)],1)}))],2),n("v-content",[n("router-view")],1)],1)},r=[],o={data:function(){return{drawerToggle:!1}},computed:{menuItems:function(){var t=[{icon:"mdi-face",title:"Register",route:"/register"},{icon:"mdi-lock-open",title:"Login",route:"/login"}];return this.userIsAuthenticated&&(t=[{icon:"mdi-forum",title:"Create a Chat",route:"/create"},{icon:"mdi-chat",title:"Chat List",route:"/discover"}]),t},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},onlineUsers:function(){return this.$store.getters.onlineUsers}}},i=o,c=n("2877"),l=n("6544"),u=n.n(l),d=n("7496"),m=n("40dc"),h=n("5bc1"),f=n("8336"),v=n("a75b"),p=n("132d"),g=n("8860"),b=n("da13"),w=n("1800"),C=n("8270"),y=n("5d23"),_=n("f774"),x=n("2fa4"),k=n("2a7f"),V=Object(c["a"])(i,s,r,!1,null,null,null),E=V.exports;u()(V,{VApp:d["a"],VAppBar:m["a"],VAppBarNavIcon:h["a"],VBtn:f["a"],VContent:v["a"],VIcon:p["a"],VList:g["a"],VListItem:b["a"],VListItemAction:w["a"],VListItemAvatar:C["a"],VListItemContent:y["a"],VListItemTitle:y["c"],VNavigationDrawer:_["a"],VSpacer:x["a"],VToolbarItems:k["a"],VToolbarTitle:k["b"]});var $=n("f309");a["default"].use($["a"]);var j=new $["a"]({}),L=n("8aa5"),D=n("8c4f"),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[n("h3",[t._v("Select a chat to start! Or create yours. ")]),n("chats")],1)],1)],1)],1)},T=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{subheader:""}},[n("v-subheader",[t._v("Your Chats")]),t._l(t.chats,(function(e,a){return n("v-list-item",{key:e.name,attrs:{avatar:"",to:/chat/+a}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{innerHTML:t._s(e.name)}})],1),n("v-list-item-action",[n("v-icon",[t._v("mdi-chat")])],1)],1)}))],2)},P=[],S={created:function(){this.$store.dispatch("loadUserChats")},computed:{chats:function(){return this.$store.getters.chats}}},O=S,U=n("e0c7"),A=Object(c["a"])(O,F,P,!1,null,null,null),M=A.exports;u()(A,{VIcon:p["a"],VList:g["a"],VListItem:b["a"],VListItemAction:w["a"],VListItemContent:y["a"],VListItemTitle:y["c"],VSubheader:U["a"]});var B={components:{chats:M}},R=B,N=n("a523"),H=n("0e8f"),q=n("a722"),J=Object(c["a"])(R,I,T,!1,null,null,null),K=J.exports;u()(J,{VContainer:N["a"],VFlex:H["a"],VLayout:q["a"]});var z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{padding:"0"},attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"scrollable",attrs:{sm:"2"}},[n("chats")],1),n("v-col",{staticStyle:{position:"relative"},attrs:{sm:"10"}},[n("div",{ref:"chatContainer",staticClass:"chat-container",on:{scroll:t.onScroll}},[n("message",{attrs:{messages:t.messages},on:{imageLoad:t.scrollToEnd}})],1),n("emoji-picker",{attrs:{show:t.emojiPanel},on:{close:t.toggleEmojiPanel,click:t.addEmojiToMessage}}),n("div",{staticClass:"typer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{type:"text",placeholder:"Type here..."},domProps:{value:t.content},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage(e)},input:function(e){e.target.composing||(t.content=e.target.value)}}}),n("v-btn",{staticClass:"blue--text emoji-panel",attrs:{icon:""},on:{click:t.toggleEmojiPanel}},[n("v-icon",[t._v("mdi-emoticon-outline")])],1)],1)],1)],1)],1)},W=[],G=(n("4160"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.messages,(function(e,a){return n("div",{key:a,staticClass:"message",class:{own:e.user==t.username}},[a>0&&t.messages[a-1].user!=e.user?n("div",{staticClass:"username"},[t._v(t._s(e.user))]):t._e(),0==a?n("div",{staticClass:"username"},[t._v(t._s(e.user))]):t._e(),n("div",{staticStyle:{"margin-top":"5px"}}),n("div",{staticClass:"content"},[n("div",{domProps:{innerHTML:t._s(e.content)}}),e.image?n("chat-image",{attrs:{imgsrc:e.image},on:{imageLoad:t.imageLoad}}):t._e()],1)])})),0)}),Y=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image"},[n("img",{attrs:{src:t.imgSrc}})])},Q=[],X={props:["imgsrc"],data:function(){return{imgSrc:"https://media.tenor.com/images/d6cd5151c04765d1992edfde14483068/tenor.gif"}},mounted:function(){var t,e;t=new Image,e=this,t.onload=function(){e.imgSrc=e.imgsrc,e.$emit("imageLoad")},t.src=this.imgsrc}},tt=X,et=(n("afd2"),Object(c["a"])(tt,Z,Q,!1,null,null,null)),nt=et.exports,at={data:function(){return{}},props:["messages"],components:{"chat-image":nt},computed:{username:function(){return this.$store.getters.user.username}},methods:{imageLoad:function(){}}},st=at,rt=(n("3939"),Object(c["a"])(st,G,Y,!1,null,null,null)),ot=rt.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"emoji-picker"},[t.show?n("v-card",{attrs:{height:"300px"}},[n("v-card-title",{staticClass:"blue white--text"},[n("span",{staticClass:"headline"},[t._v("Emoji Picker")])]),n("v-card-text",[n("div",{staticClass:"emoji-content"},t._l(t.emojis,(function(e){return n("emoji",{key:e.key,attrs:{emoji:e},on:{click:t.onEmojiClick}})})),1)])],1):t._e()],1):t._e()},ct=[],lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{on:{click:t.onEmojiClick}},[t._v(t._s(t.emoji.value))])},ut=[],dt={data:function(){return{}},props:{emoji:""},methods:{onEmojiClick:function(){this.$emit("click",this.emoji)}}},mt=dt,ht=Object(c["a"])(mt,lt,ut,!1,null,null,null),ft=ht.exports,vt={data:function(){return{emojis:[]}},props:{show:!0},created:function(){var t=this;this.$http.get("https://raw.githubusercontent.com/shanraisshan/EmojiCodeSheet/master/json/string/People.json").then((function(e){t.emojis=e.body.peoples.people}),(function(t){}))},methods:{onEmojiClick:function(t){this.$emit("click",t)},closePicker:function(){this.$emit("close")}},components:{emoji:ft}},pt=vt,gt=(n("b96a"),n("b0af")),bt=n("99d9"),wt=Object(c["a"])(pt,it,ct,!1,null,null,null),Ct=wt.exports;u()(wt,{VCard:gt["a"],VCardText:bt["b"],VCardTitle:bt["c"]});var yt={data:function(){return{content:"",chatMessages:[],emojiPanel:!1,currentRef:{},loading:!1,totalChatHeight:0}},props:["id"],mounted:function(){this.loadChat(),this.$store.dispatch("loadOnlineUsers")},components:{message:ot,"emoji-picker":Ct,chats:M},computed:{messages:function(){return this.chatMessages},username:function(){return this.$store.getters.user.username},onNewMessageAdded:function(){var t=this,e=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=e.val();a.key=e.key;var s=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;a.content=a.content.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),a.content=a.content.replace(s,"<a href='$1'>$1</a>"),n?(t.chatMessages.push(t.processMessage(a)),t.scrollToEnd()):(t.chatMessages.unshift(t.processMessage(a)),t.scrollTo())};return e}},watch:{"$route.params.id":function(t,e){this.currentRef.off("child_added",this.onNewMessageAdded),this.loadChat()}},methods:{loadChat:function(){if(this.totalChatHeight=this.$refs.chatContainer.scrollHeight,this.loading=!1,void 0!==this.id){this.chatMessages=[];var t=this.id;this.currentRef=L["database"]().ref("messages").child(t).child("messages").limitToLast(20),this.currentRef.on("child_added",this.onNewMessageAdded)}},onScroll:function(){var t=this.$refs.chatContainer.scrollTop,e=this;if(t<100&&!this.loading){this.totalChatHeight=this.$refs.chatContainer.scrollHeight,this.loading=!0;var n=this.id,a=this.chatMessages[0];if(void 0===a)return void(this.loading=!1);L["database"]().ref("messages").child(n).child("messages").orderByKey().endAt(a.key).limitToLast(20).once("value").then((function(t){var n=[];t.forEach((function(t){n.push(t)})),n[0].key!==n[1].key&&(n.reverse(),n.forEach((function(t){e.onNewMessageAdded(t,!1)})),e.loading=!1)}))}},processMessage:function(t){var e=/([^\s\']+).(?:jpg|jpeg|gif|png)/i;e.test(t.content)&&(t.image=e.exec(t.content)[0]);var n=/((?:[\u2600-\u27BF\u2934-\uD7FF\uE000-\uFFFF]|[\uD800-\uD83B][\uDC00-\uDFFF]|\uD83C[\uDC00-\uDD8E\uDD91-\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF]|\uD83E[\uDD00-\uDDFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))/g;return n.test(t.content)&&(t.content=t.content.replace(n,'<span class="emoji">$1</span>')),t},sendMessage:function(){""!==this.content&&(this.$store.dispatch("sendMessage",{username:this.username,content:this.content,date:(new Date).toString(),chatID:this.id}),this.content="")},scrollToEnd:function(){var t=this;this.$nextTick((function(){var e=t.$el.querySelector(".chat-container");e.scrollTop=e.scrollHeight}))},scrollTo:function(){var t=this;this.$nextTick((function(){var e=t.$refs.chatContainer.scrollHeight,n=e-t.totalChatHeight,a=t.$el.querySelector(".chat-container");a.scrollTop=n}))},addEmojiToMessage:function(t){this.content+=t.value},toggleEmojiPanel:function(){this.emojiPanel=!this.emojiPanel}}},_t=yt,xt=(n("ca71"),n("62ad")),kt=n("0fd9"),Vt=Object(c["a"])(_t,z,W,!1,null,null,null),Et=Vt.exports;u()(Vt,{VBtn:f["a"],VCol:xt["a"],VContainer:N["a"],VIcon:p["a"],VRow:kt["a"]});var $t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{sm:"6",xs:"12","offset-sm":"3"}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.createChat(e)}}},[n("v-col",{attrs:{xs:"12"}},[n("v-text-field",{attrs:{name:"chatname",label:"Chat Name",id:"chatname",type:"text",required:""},model:{value:t.chatName,callback:function(e){t.chatName=e},expression:"chatName"}}),n("v-btn",{attrs:{type:"submit"}},[t._v("Create")])],1)],1)])],1)],1)},jt=[],Lt={data:function(){return{chatName:"",loading:!1}},computed:{user:function(){return this.$store.getters.user}},methods:{createChat:function(){var t=this;if(""!=this.chatName&&!this.loading){this.loading=!0;var e=(new Date).valueOf(),n=L["database"]().ref().child("chats").push().key,a={};a["/chats/"+n]={name:this.chatName},a["/chat_members/"+n+"/users/"+this.user.id]={timestamp:e},a["users/"+this.user.id+"/chats/"+n]={timestamp:e},L["database"]().ref().update(a).then((function(){t.loading=!1,t.$router.push("/chat/"+n)}))}}}},Dt=Lt,It=n("8654"),Tt=Object(c["a"])(Dt,$t,jt,!1,null,null,null),Ft=Tt.exports;u()(Tt,{VBtn:f["a"],VCol:xt["a"],VContainer:N["a"],VRow:kt["a"],VTextField:It["a"]});var Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{ref:"chatlistContainer",on:{scroll:t.onScroll}},[n("v-row",{attrs:{"no-gutters":""}},t._l(t.chats,(function(e){return n("v-col",{key:e.name,attrs:{cols:"12",sm:"4"}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"overline mb-4"},[t._v(t._s(e.key))]),n("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(e.name))]),null!=e.userCount?n("v-list-item-subtitle",[t._v(t._s(e.userCount)+" members have joined this chat.")]):n("v-list-item-subtitle",[t._v("Loading user count...")])],1)],1),n("v-card-actions",[e.isAlreadyJoined||null==e.userCount?t._e():n("v-btn",{attrs:{text:""},on:{click:function(n){return t.enterChat(e)}}},[t._v("Join")]),e.isAlreadyJoined?n("v-btn",{attrs:{text:"",disabled:""}},[t._v("Joined")]):t._e()],1)],1)],1)})),1)],1)},St=[],Ot={data:function(){return{loadedChats:[],loading:!1}},mounted:function(){this.loadRecentChats()},computed:{user:function(){return this.$store.getters.user},chats:function(){return this.loadedChats}},methods:{loadRecentChats:function(t){var e=this;L["database"]().ref("chats").orderByKey().limitToLast(20).once("value",(function(t){t.forEach((function(t){var n=t.val();n.key=t.key,e.getUserCountForChat(n),e.loadedChats.unshift(n)}))}))},loadRecentChatsByLastKey:function(t){var e=this;e.loading=!0,L["database"]().ref("chats").orderByKey().endAt(t).limitToLast(20).once("value",(function(n){var a=[];n.forEach((function(e){if(e.key!=t){var n=e.val();n.key=e.key,a.push(n)}})),a[0].key!==a[1].key&&(a.reverse(),a.forEach((function(t){e.getUserCountForChat(t),e.loadedChats.push(t)})),e.loading=!1)}))},enterChat:function(t){var e=this;if(!t.isAlreadyJoined&&null!=t.userCount){var n=t.key,a=(new Date).valueOf(),s={};s["/chat_members/"+n+"/users/"+this.user.id]={timestamp:a},s["users/"+this.user.id+"/chats/"+n]={timestamp:a};L["database"]().ref().update(s).then((function(){e.$router.push("/chat/"+n)}))}},onScroll:function(){window.top.scrollY+window.innerHeight>=document.body.scrollHeight-100&&!this.loading&&this.loadRecentChatsByLastKey(this.loadedChats[this.loadedChats.length-1].key)},getUserCountForChat:function(t){var e=this;L["database"]().ref("chat_members").child(t.key).child("users").once("value",(function(n){e.$set(t,"userCount",n.numChildren()),n.forEach((function(n){n.key==e.user.id&&e.$set(t,"isAlreadyJoined",!0)}))}))}},created:function(){window.addEventListener("scroll",this.onScroll)},destroyed:function(){window.removeEventListener("scroll",this.onScroll)},watch:{loadedChats:{deep:!0,handler:function(){}}}},Ut=Ot,At=Object(c["a"])(Ut,Pt,St,!1,null,null,null),Mt=At.exports;u()(At,{VBtn:f["a"],VCard:gt["a"],VCardActions:bt["a"],VCol:xt["a"],VContainer:N["a"],VListItem:b["a"],VListItemContent:y["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VRow:kt["a"]});var Bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("Profile")])])}],Nt={},Ht=Object(c["a"])(Nt,Bt,Rt,!1,null,null,null),qt=Ht.exports,Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t.error?n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-card",[n("v-card-text",[n("v-container",[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSignup(e)}}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{name:"email",label:"E-mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{name:"username",label:"Username",id:"username",type:"text",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{name:"confirmPassword",label:"Validate Password",id:"confirmPassword",type:"password",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),n("v-layout",[n("v-flex",{attrs:{xs12:""}},[n("v-btn",{attrs:{type:"submit",loading:t.loading}},[t._v("Register")])],1)],1)],1)])],1)],1)],1)],1)],1)},Kt=[],zt={data:function(){return{email:"",username:"",password:"",confirmPassword:""}},computed:{comparePasswords:function(){return this.password===this.confirmPassword||"Passwords do not match."},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignup:function(){this.$store.dispatch("signUserUp",{email:this.email,password:this.password,username:this.username})},onDismissed:function(){this.$store.dispatch("clearError")}}},Wt=zt,Gt=Object(c["a"])(Wt,Jt,Kt,!1,null,null,null),Yt=Gt.exports;u()(Gt,{VBtn:f["a"],VCard:gt["a"],VCardText:bt["b"],VContainer:N["a"],VFlex:H["a"],VLayout:q["a"],VTextField:It["a"]});var Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[t._v(" SIGIN SOLID "),n("div",{staticClass:"solid-login"},[0==t.logged?n("b-button",{attrs:{variant:"success"},on:{click:t.login}},[t._v("Login")]):n("b-button",{attrs:{variant:"danger"},on:{click:t.logout}},[t._v("Logout")]),n("div",{staticClass:"brute-hide"},[t._v(" logged : "+t._s(t.logged)),n("br"),t._v(" webId : "+t._s(t.webId)),n("br"),t._v(" storage: "+t._s(t.storage)+" "),n("hr")])],1),n("hr"),t.error?n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-card",[n("v-card-text",[n("v-container",[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSignin(e)}}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{name:"email",label:"E-mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("v-layout",[n("v-flex",{attrs:{xs12:""}},[n("v-btn",{attrs:{type:"submit",loading:t.loading}},[t._v("Login")])],1)],1)],1)])],1)],1)],1)],1)],1)},Qt=[],Xt=(n("96cf"),n("1da1")),te=n("00e8"),ee=n.n(te);console.log("data",ee.a);var ne={name:"SolidLogin",components:{auth:ee.a},data:function(){return{email:"",password:"",logged:!1,webId:null,storage:"boo"}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/chat/0")}},methods:{onSignin:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")},login:function(){this.popupLogin()},logout:function(){ee.a.logout()},popupLogin:function(){return Object(Xt["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ee.a.currentSession();case 2:if(e=t.sent,n="https://solid.community/common/popup.html",e){t.next=8;break}return t.next=7,ee.a.popupLogin({popupUri:n});case 7:e=t.sent;case 8:case"end":return t.stop()}}),t)})))()}},created:function(){var t=this;ee.a.trackSession(function(){var e=Object(Xt["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n?(t.logged=!0,t.webId=n.webId,console.log("The user is ".concat(n.webId))):(t.logged=!1,t.webId=null,console.log("The user is not logged in",t.logged,t.webId),t.$store.commit("local/setWebId",t.webId),t.$store.commit("local/setStorage",""));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},ae=ne,se=Object(c["a"])(ae,Zt,Qt,!1,null,null,null),re=se.exports;u()(se,{VBtn:f["a"],VCard:gt["a"],VCardText:bt["b"],VContainer:N["a"],VFlex:H["a"],VLayout:q["a"],VTextField:It["a"]});var oe=n("2f62"),ie={state:{user:null},mutations:{setUser:function(t,e){t.user=e;var n=L["database"]().ref("presence"),a=n.push();L["database"]().ref(".info/connected").on("value",(function(t){if(t.val()){a.onDisconnect().remove();var n={user:e,status:"online"};a.set(n)}else{var s={user:e,status:"offline"};a.set(s)}}))}},actions:{signUserUp:function(t,e){var n=t.commit;n("setLoading",!0),n("clearError"),L["auth"]().createUserWithEmailAndPassword(e.email,e.password).then((function(t){L["database"]().ref("users").child(t.user.uid).set({name:e.username}).then((function(a){n("setLoading",!1);var s={id:t.user.uid,username:e.username};n("setUser",s)})).catch((function(t){n("setLoading",!1),n("setError",t)}))})).catch((function(t){n("setLoading",!1),n("setError",t)}))},signUserIn:function(t,e){var n=t.commit;n("setLoading",!0),n("clearError"),L["auth"]().signInWithEmailAndPassword(e.email,e.password).then((function(t){L["database"]().ref("users").child(t.user.uid).once("value",(function(e){n("setLoading",!1);var a={id:t.user.uid,username:t.user.email};n("setUser",a)}))})).catch((function(t){n("setLoading",!1),n("setError",t)}))}},getters:{user:function(t){return t.user}}},ce=ie,le=(n("b0c0"),{state:{chats:{}},mutations:{setChats:function(t,e){e["0"]={name:"Default"},t.chats=e}},actions:{sendMessage:function(t,e){var n=e.chatID,a={user:e.username,content:e.content,date:e.date};L["database"]().ref("messages").child(n).child("messages").push(a).then((function(t){})).catch((function(t){console.log(t)}))},loadUserChats:function(t){var e=t.getters.user;L["database"]().ref("users").child(e.id).child("chats").orderByChild("timestamp").once("value",(function(e){var n=e.val();null==n&&(n={});var a=function(e){n[e].name="Loading...",L["database"]().ref("chats").child(e).once("value",(function(a){n[e].name=a.val().name,t.commit("setChats",n)}))};for(var s in n)a(s)}))}},getters:{chats:function(t){return t.chats}}}),ue=le;a["default"].use(oe["a"]);var de=new oe["a"].Store({modules:{auth:ce,chat:ue},state:{loading:!1,error:null,onlineUsers:[]},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null},setOnlineUsers:function(t,e){t.onlineUsers=e}},actions:{loadOnlineUsers:function(t){var e=t.commit;L["database"]().ref("presence").on("value",(function(t){var n=[];n[0]=t.numChildren(),n[1]=t.val(),e("setOnlineUsers",n)}))},clearError:function(t){var e=t.commit;e("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error},onlineUsers:function(t){return t.onlineUsers}}}),me=function(t,e,n){de.getters.user?n():n("/login")};a["default"].use(D["a"]);var he=new D["a"]({routes:[{path:"/",name:"Home",component:K,beforeEnter:me},{path:"/login",name:"Signin",component:re},{path:"/register",name:"Signup",component:Yt},{path:"/profile",name:"Profile",component:qt},{path:"/chat/:id",name:"Chat",component:Et,props:!0,beforeEnter:me},{path:"/create",name:"CreateChat",component:Ft,beforeEnter:me},{path:"/discover",name:"JoinChat",component:Mt,beforeEnter:me}],mode:"history"}),fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-alert",{attrs:{error:"",dismissible:"",value:!0},on:{input:t.onClose}},[t._v(" "+t._s(t.text)+" ")])},ve=[],pe={props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}},ge=pe,be=n("0798"),we=Object(c["a"])(ge,fe,ve,!1,null,null,null),Ce=we.exports;u()(we,{VAlert:be["a"]});var ye={constructor:function(){this.storage="",this.folder=""},initializeApp:function(t){this.storagePod=t.storagePod,this.folder=t.folder}},_e=n("5f5b"),xe=n("b1e0");n("f9e3"),n("2dd8");a["default"].config.productionTip=!1,a["default"].component("app-alert",Ce),a["default"].use(_e["a"]),a["default"].use(xe["a"]),new a["default"]({vuetify:j,router:he,store:de,render:function(t){return t(E)},created:function(){ye.initializeApp({storage:"https://parle.solid.community/",folder:"public/test/"}),console.log(ye),L["initializeApp"]({apiKey:"AIzaSyBiqUbF0rN5LUD9G9msHN4xHF3f00MpOFE",authDomain:"mutfak-chat.firebaseapp.com",databaseURL:"https://mutfak-chat.firebaseio.com",projectId:"mutfak-chat",storageBucket:"mutfak-chat.appspot.com"})}}).$mount("#app")},"8e92":function(t,e,n){},afd2:function(t,e,n){"use strict";var a=n("ded1"),s=n.n(a);s.a},b77e:function(t,e,n){},b7b1:function(t,e,n){},b96a:function(t,e,n){"use strict";var a=n("b7b1"),s=n.n(a);s.a},ca71:function(t,e,n){"use strict";var a=n("8e92"),s=n.n(a);s.a},ded1:function(t,e,n){}});
//# sourceMappingURL=app.4fd8e084.js.map