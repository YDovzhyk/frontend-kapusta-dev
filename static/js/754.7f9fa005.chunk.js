"use strict";(self.webpackChunkkapusta=self.webpackChunkkapusta||[]).push([[754],{2347:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var o=n(9434),r=n(9869),i=n(2791),s=n(1087),a=n(9195);function c(e){this.message=e}c.prototype=new Error,c.prototype.name="InvalidCharacterError";var l="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new c("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,r=0,i=0,s="";o=t.charAt(i++);~o&&(n=r%4?64*n+o:o,r++%4)?s+=String.fromCharCode(255&n>>(-2*r&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return s};function d(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(l(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(e){return l(t)}}function u(e){this.message=e}u.prototype=new Error,u.prototype.name="InvalidTokenError";var h=function(e,t){if("string"!=typeof e)throw new u("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(d(e.split(".")[n]))}catch(e){throw new u("Invalid token specified: "+e.message)}},g=n(8724),m=n(188),f=n(6053),p=n(2714),w=n(9400),x="FormLogin_form__1TSn5",v="FormLogin_googleButton__uqn3h",b="FormLogin_buttonsLay__TZ2uM",j="FormLogin_link__qFctS",C="FormLogin_active__3P2t2",k=n(7810),y=n(3329);function Z(){var e=(0,o.I0)(),t="626323858136-ebsgebl9r3vfj0okcknk20nspcl33qir.apps.googleusercontent.com";(0,i.useEffect)((function(){google.accounts.id.initialize({client_id:t,callback:function(t){var n=h(t.credential);e((0,g.HQ)(n))}}),google.accounts.id.renderButton(document.getElementById("singInDiv"),{theme:"outline",type:"icon",size:"large"}),e((0,m.fw)())}),[e,t]);var n=(0,a.cI)({defaultValues:{email:"",password:""}}),r=n.control,c=n.handleSubmit,l=n.reset;return(0,y.jsxs)("form",{className:x,onSubmit:c((function(t){e((0,g.Ib)(t)),l()})),children:[(0,y.jsx)(f.Z,{text:"You can log in with your Google \xad Account:",textClass:"textFormHead"}),(0,y.jsx)("div",{id:"singInDiv",className:v}),(0,y.jsx)(f.Z,{text:"Or log in using an email and password,\nafter registering:",textClass:"textFormCommit"}),(0,y.jsx)(f.Z,{text:"Email:",textClass:"textFormEmail"}),(0,y.jsx)(p.Z,{name:"email",control:r,label:"your@email.com",type:"email",required:"This is a required field"}),(0,y.jsx)(f.Z,{text:"Password:",textClass:"textFormPassword"}),(0,y.jsx)(w.Z,{name:"password",control:r,label:"Password",type:"password",required:"This is a required field"}),(0,y.jsxs)("div",{className:b,children:[(0,y.jsx)(k.Z,{text:"Log In",btnClass:"btnLogin"}),(0,y.jsx)(s.OL,{className:function(e){return e.isActive?"".concat(j," ").concat(C):j},to:"/signup",children:"Sign Up"})]})]})}var _=n(2377),I=n(7653),F=n(1099),L=n(5194),S=n(2394),E=n(2311),q=n(7e3);function T(){var e=(0,o.v9)(r.hg);return(0,y.jsxs)(I.Z,{sectionClass:"section",children:[e&&(0,y.jsx)(_.Z,{}),(0,y.jsx)(E.Z,{iconClass:"home",width:"183",height:"63"}),(0,y.jsx)(q.Z,{iconClass:"home",width:"305",height:"100"}),(0,y.jsx)(F.Z,{iconClass:"home",width:"1334",height:"232"}),(0,y.jsx)(L.Z,{iconClass:"homeTop",width:"83",heigth:"89",transform:"rotate(180)"}),(0,y.jsx)(Z,{}),(0,y.jsx)(L.Z,{iconClass:"homeBottom",width:"83",height:"89"}),(0,y.jsx)(S.Z,{iconClass:"homeBottom",width:"183",height:"142"})]})}}}]);
//# sourceMappingURL=754.7f9fa005.chunk.js.map