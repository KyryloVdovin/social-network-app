"use strict";(self.webpackChunksocial_network_app=self.webpackChunksocial_network_app||[]).push([[254],{5254:function(s,e,a){a.r(e),a.d(e,{default:function(){return p}});a(2791);var n=a(7689),i=a(1087),t=a(6139),r=a(704),o={dialogs:"Dialogs_dialogs__fX9W1",dialogsItems:"Dialogs_dialogsItems__WaAfY",messages:"Dialogs_messages__xa5Ur",dialog:"Dialogs_dialog__YKavo",active:"Dialogs_active__brreu"},d=a(5304),l=a(8323),u=a(184),c=function(s){var e="/Dialogs/".concat(s.id);return(0,u.jsxs)("div",{className:o.dialog+" "+o.active,children:[(0,u.jsx)("img",{src:"".concat(s.avatarURL),alt:""}),(0,u.jsx)(i.OL,{to:e,children:s.name})]})},g=function(s){return(0,u.jsx)("div",{className:o.message,children:s.message})},m=(0,d.DT)(50),f=(0,r.Z)({form:"dialogAddMessage"})((function(s){return(0,u.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,u.jsx)("div",{children:(0,u.jsx)(t.Z,{component:l.gx,validate:[d.lp,m],name:"newMessageBody",placeholder:"Enter your message"})}),(0,u.jsx)("div",{children:(0,u.jsx)("button",{children:"Send"})})]})})),h=function(s){var e=s.dialogsPage,a=e.dialogs.map((function(s){return(0,u.jsx)(c,{name:s.name,id:s.id,avatarURL:s.avatarURL},s.id)})),i=e.messages.map((function(s){return(0,u.jsx)(g,{message:s.message},s.id)}));e.newMessageText;return s.isAuth?(0,u.jsxs)("div",{className:o.dialogs,children:[(0,u.jsx)("div",{className:o.dialogsItems,children:a}),(0,u.jsxs)("div",{className:o.messages,children:[(0,u.jsx)("div",{children:i}),(0,u.jsx)(f,{onSubmit:function(e){s.sendMessage(e.newMessageBody)}})]})]}):(0,u.jsx)(n.Fg,{to:"/login"})},v=a(9396),x=a(8687),j=a(1103),p=(0,a(7781).qC)((0,x.$j)((function(s){return{dialogsPage:s.dialogsPage}}),(function(s){return{sendMessage:function(e){var a=(0,v.$)(e);s(a)}}})),j.D)(h)},1103:function(s,e,a){a.d(e,{D:function(){return m}});var n=a(8683),i=a(5671),t=a(3144),r=a(136),o=a(516),d=a(2791),l=a(7689),u=a(8687),c=a(184),g=function(s){return{isAuth:s.auth.isAuth}},m=function(s){var e=function(e){(0,r.Z)(d,e);var a=(0,o.Z)(d);function d(){return(0,i.Z)(this,d),a.apply(this,arguments)}return(0,t.Z)(d,[{key:"render",value:function(){return this.props.isAuth?(0,c.jsx)(s,(0,n.Z)({},this.props)):(0,c.jsx)(l.Fg,{to:"/login"})}}]),d}(d.Component);return(0,u.$j)(g)(e)}}}]);
//# sourceMappingURL=254.eaa63d54.chunk.js.map