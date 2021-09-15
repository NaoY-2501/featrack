(this.webpackJsonpfeatrack=this.webpackJsonpfeatrack||[]).push([[0],{181:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c.n(n),o=c(14),i=c.n(o),r=(c(34),c(7)),s=c(10),d=c.n(s),l=c(5),j=c(29),u=(c(57),c(23),c(4)),b={0:"C",1:"C#",2:"D",3:"D#",4:"E",5:"F",6:"F#",7:"G",8:"G#",9:"A",10:"A#",11:"B"},p={0:"Minor",1:"Major"};d.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var f=function(t){var e=Object(n.useState)(""),c=Object(r.a)(e,2),a=c[0],o=c[1],i=Object(n.useState)(""),s=Object(r.a)(i,2),f=s[0],h=s[1],O=Object(n.useState)(""),x=Object(r.a)(O,2),g=x[0],m=x[1],v=Object(n.useState)(""),y=Object(r.a)(v,2),k=y[0],w=y[1],C=Object(n.useState)(""),S=Object(r.a)(C,2),B=S[0],I=S[1],T=Object(n.useState)(0),F=Object(r.a)(T,2),A=F[0],R=F[1],z=Object(n.useState)(""),H=Object(r.a)(z,2),M=H[0],D=H[1];function L(t){var e={headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json"}};d.a.get("https://api.spotify.com/v1/tracks/".concat(t),e).then((function(t){var e=t.data;console.log(e),h(e.artists[0].name),m(e.album.images[0].url),w(e.name),I(function(t){var e=Math.floor(t/6e4),c=(t%6e4/1e3).toFixed(0);return e+":"+(c<10?"0":"")+c}(e.duration_ms))})).catch((function(e){console.log("".concat(e.response.status," from https://api.spotify.com/v1/tracks/").concat(t))})),d.a.get("https://api.spotify.com/v1/audio-features?ids=".concat(t),e).then((function(t){var e=t.data.audio_features[0];console.log(e),R(e.tempo.toFixed(1)),D(b[e.key].concat(" ",p[e.mode]))})).catch((function(e){console.log("".concat(e.response.status," from https://api.spotify.com/v1/audio-features?ids=").concat(t))}))}return Object(n.useLayoutEffect)((function(){!function(){var t={headers:{Authorization:"Basic ".concat(j.Buffer.from("".concat("bb1f4a4747b241498c617ade99bd166d",":").concat("fab9e637ef614626803d203a743cdc0c"),"utf-8").toString("base64")),"Content-Type":"application/x-www-form-urlencoded"}};d.a.post("https://accounts.spotify.com/api/token","grant_type=client_credentials",t).then((function(t){o(t.data.access_token)})).catch((function(t){console.log("".concat(t.response.status," on fetch token."))}))}(),t.trackId&&(console.log(t.trackId),h(""),w(""),L(t.trackId))}),[t.trackId]),""===t.trackId?Object(u.jsx)("div",{}):"track"!==t.idType?Object(u.jsx)("div",{children:Object(u.jsx)(l.Block,{textAlign:"center",style:{width:300,margin:"auto"},children:Object(u.jsx)(l.Notification,{color:"warning",children:Object(u.jsx)("p",{children:"ERROR: URL/URI is not track."})})})}):""===f?Object(u.jsx)("div",{}):Object(u.jsx)("div",{children:Object(u.jsxs)(l.Card,{style:{width:350,margin:"auto"},children:[Object(u.jsx)(l.Card.Header,{children:Object(u.jsxs)(l.Card.Header.Title,{size:6,children:[k,Object(u.jsx)("br",{}),f]})}),Object(u.jsx)(l.Card.Image,{size:"square",src:g}),Object(u.jsxs)(l.Card.Content,{children:[Object(u.jsx)(l.Media,{children:Object(u.jsx)(l.Media.Item,{children:Object(u.jsxs)(l.Heading,{subtitle:!0,size:6,children:[Object(u.jsxs)("p",{children:["BPM: ",A]}),Object(u.jsxs)("p",{children:["Key: ",M]}),Object(u.jsxs)("p",{children:["Duration: ",B]})]})})}),Object(u.jsx)(l.Button,{onClick:function(){var t=[k,f,A,M].join();navigator.clipboard.writeText(t).then((function(e){console.log("Copy ".concat(t," to clipboard."))})).catch((function(t){console.log("Failed to copy track features to clipboard.")}))},children:"Copy audio features to clipboard"})]})]})})};d.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var h=l.Form.Input;var O=function(){var t=Object(n.useState)(""),e=Object(r.a)(t,2),c=e[0],a=e[1],o=Object(n.useState)(NaN),i=Object(r.a)(o,2),s=i[0],d=i[1],j=Object(n.useState)(""),b=Object(r.a)(j,2),p=b[0],O=b[1];function x(t){if(13===t.which){t.preventDefault();var e=function(t){var e=new URL(t);if(console.log(e),"https:"===e.protocol){var c=e.pathname.split("/");if("track"===c[1])return O(c[1]),c[2]}else if("spotify:"===e.protocol){var n=e.pathname.split(":");if(2===n.length&&"track"===n[0])return O(n[0]),n[1]}}(t.target.value);a(e),d(t.which)}}return Object(u.jsx)("div",{children:Object(u.jsx)(l.Hero,{children:Object(u.jsx)(l.Hero.Body,{children:Object(u.jsxs)(l.Container,{children:[Object(u.jsx)(l.Heading,{size:1,textAlign:"center",children:"FEATRACK"}),Object(u.jsx)(l.Heading,{subtitle:!0,size:5,textAlign:"center",children:"Browse audio features with Spotify API"}),Object(u.jsx)(l.Block,{children:Object(u.jsx)(l.Box,{style:{width:600,margin:"auto"},children:Object(u.jsx)(h,{size:"medium",type:"text",placeholder:"Track URL or Spotify URI",defaultValue:c,onKeyDown:function(t){return x(t)}})})}),Object(u.jsx)(l.Block,{children:Object(u.jsx)(f,{keyNum:s,trackId:c,idType:p})})]})})})})},x=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,182)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),o(t),i(t)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),x()},34:function(t,e,c){},57:function(t,e,c){}},[[181,1,2]]]);
//# sourceMappingURL=main.09dba3fb.chunk.js.map