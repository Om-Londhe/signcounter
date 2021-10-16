import{S as se,i as ae,s as ne,e as S,t as X,k as P,c as $,a as E,g as Y,d as _,n as I,b as j,f as W,I as h,U as re,H as R,aq as Ee,j as F,m as D,T as Z,o as T,V as Ie,h as me,r as pe,u as b,w as he,x as w,J as oe,N as le,L as _e,v as A,_ as je,ac as ge,A as Ce,ah as Fe,ar as be,ae as ie,af as we,as as De,Q as Te,ai as Ae,aj as Ne,al as Ue,a0 as Oe,a6 as Be,am as Me,an as Ve,ao as ke,P as ve}from"../../chunks/vendor-c53e2aa3.js";import{u as ye}from"../../chunks/stores-31a253bf.js";import{F as Je,S as qe,A as Re}from"../../chunks/activityIndicator-236182aa.js";import{S as x}from"../../chunks/snackbar-9e55794d.js";import{g as Se}from"../../chunks/firebase-3e4355ad.js";function He(r){let e,t,s,l,o,d,p,m;return{c(){e=S("button"),t=S("span"),s=X("delete"),l=P(),o=S("span"),d=X("Delete"),this.h()},l(n){e=$(n,"BUTTON",{class:!0,type:!0});var a=E(e);t=$(a,"SPAN",{class:!0});var i=E(t);s=Y(i,"delete"),i.forEach(_),l=I(a),o=$(a,"SPAN",{class:!0});var k=E(o);d=Y(k,"Delete"),k.forEach(_),a.forEach(_),this.h()},h(){j(t,"class","material-icons-outlined icon svelte-68wywt"),j(o,"class","buttonText svelte-68wywt"),j(e,"class","deleteButton svelte-68wywt"),j(e,"type","button")},m(n,a){W(n,e,a),h(e,t),h(t,s),h(e,l),h(e,o),h(o,d),p||(m=re(e,"click",r[0]),p=!0)},p:R,i:R,o:R,d(n){n&&_(e),p=!1,m()}}}function Le(r){function e(t){Ee.call(this,r,t)}return[e]}class Qe extends se{constructor(e){super();ae(this,e,Le,He,ne,{})}}function ze(r){let e,t,s,l;return e=new qe({props:{title:"Update"}}),s=new Qe({}),s.$on("click",r[14]),{c(){F(e.$$.fragment),t=P(),F(s.$$.fragment)},l(o){D(e.$$.fragment,o),t=I(o),D(s.$$.fragment,o)},m(o,d){T(e,o,d),W(o,t,d),T(s,o,d),l=!0},p:R,i(o){l||(w(e.$$.fragment,o),w(s.$$.fragment,o),l=!0)},o(o){b(e.$$.fragment,o),b(s.$$.fragment,o),l=!1},d(o){A(e,o),o&&_(t),A(s,o)}}}function Ge(r){let e,t;return e=new Re({}),{c(){F(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,l){T(e,s,l),t=!0},p:R,i(s){t||(w(e.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),t=!1},d(s){A(e,s)}}}function Ke(r){let e,t,s,l,o,d,p,m,n,a,i,k,O,v,B=(r[1]?"expand_less":"add")+"",q,H,y,L,M,Q,C,g,c,V,N,ee,ce;t=new x({props:{backgroundColor:"#cf6679",borderColor:"tomato",iconColor:"black",text:"Title must be at least 2 characters long.",showSnackbar:r[5],hideSnackbar:r[9]}}),l=new x({props:{backgroundColor:"#cf6679",borderColor:"tomato",iconColor:"black",text:"Password cannot be less than 8 letters.",showSnackbar:r[6],hideSnackbar:r[10]}}),d=new x({props:{backgroundColor:"#cf6679",borderColor:"tomato",iconColor:"black",text:"Password deleted.",showSnackbar:r[8],hideSnackbar:r[12]}}),m=new x({props:{text:"Password added successfully!",showSnackbar:r[7],hideSnackbar:r[11]}}),y=new Je({props:{type:"password",placeholder:"Password",id:"password-input",value:r[3]}}),y.$on("change",r[19]);const fe=[Ge,ze],U=[];function de(f,u){return f[4]?0:1}return g=de(r),c=U[g]=fe[g](r),{c(){e=S("form"),F(t.$$.fragment),s=P(),F(l.$$.fragment),o=P(),F(d.$$.fragment),p=P(),F(m.$$.fragment),n=P(),a=S("div"),i=S("p"),k=X(r[0]),O=P(),v=S("span"),q=X(B),H=P(),F(y.$$.fragment),L=P(),M=S("div"),Q=P(),C=S("div"),c.c(),this.h()},l(f){e=$(f,"FORM",{class:!0});var u=E(e);D(t.$$.fragment,u),s=I(u),D(l.$$.fragment,u),o=I(u),D(d.$$.fragment,u),p=I(u),D(m.$$.fragment,u),n=I(u),a=$(u,"DIV",{class:!0});var J=E(a);i=$(J,"P",{class:!0});var z=E(i);k=Y(z,r[0]),z.forEach(_),O=I(J),v=$(J,"SPAN",{class:!0});var G=E(v);q=Y(G,B),G.forEach(_),J.forEach(_),H=I(u),D(y.$$.fragment,u),L=I(u),M=$(u,"DIV",{class:!0}),E(M).forEach(_),Q=I(u),C=$(u,"DIV",{class:!0});var K=E(C);c.l(K),K.forEach(_),u.forEach(_),this.h()},h(){j(i,"class","title svelte-4r99a3"),Z(i,"titleExpanded",r[1]),j(v,"class","material-icons-outlined title-icons svelte-4r99a3"),j(a,"class","titleSection svelte-4r99a3"),j(M,"class","gap svelte-4r99a3"),j(C,"class","bottom svelte-4r99a3"),j(e,"class","inputForm svelte-4r99a3"),Z(e,"inputFormExpanded",r[1])},m(f,u){W(f,e,u),T(t,e,null),h(e,s),T(l,e,null),h(e,o),T(d,e,null),h(e,p),T(m,e,null),h(e,n),h(e,a),h(a,i),h(i,k),h(a,O),h(a,v),h(v,q),r[18](v),h(e,H),T(y,e,null),h(e,L),h(e,M),h(e,Q),h(e,C),U[g].m(C,null),N=!0,ee||(ce=[re(a,"click",r[13]),re(e,"submit",Ie(r[15]))],ee=!0)},p(f,[u]){const J={};u&32&&(J.showSnackbar=f[5]),t.$set(J);const z={};u&64&&(z.showSnackbar=f[6]),l.$set(z);const G={};u&256&&(G.showSnackbar=f[8]),d.$set(G);const K={};u&128&&(K.showSnackbar=f[7]),m.$set(K),(!N||u&1)&&me(k,f[0]),u&2&&Z(i,"titleExpanded",f[1]),(!N||u&2)&&B!==(B=(f[1]?"expand_less":"add")+"")&&me(q,B);const ue={};u&8&&(ue.value=f[3]),y.$set(ue);let te=g;g=de(f),g===te?U[g].p(f,u):(pe(),b(U[te],1,1,()=>{U[te]=null}),he(),c=U[g],c?c.p(f,u):(c=U[g]=fe[g](f),c.c()),w(c,1),c.m(C,null)),u&2&&Z(e,"inputFormExpanded",f[1])},i(f){N||(w(t.$$.fragment,f),w(l.$$.fragment,f),w(d.$$.fragment,f),w(m.$$.fragment,f),w(y.$$.fragment,f),w(c),V||oe(()=>{V=le(e,_e,{}),V.start()}),N=!0)},o(f){b(t.$$.fragment,f),b(l.$$.fragment,f),b(d.$$.fragment,f),b(m.$$.fragment,f),b(y.$$.fragment,f),b(c),N=!1},d(f){f&&_(e),A(t),A(l),A(d),A(m),r[18](null),A(y),U[g].d(),ee=!1,je(ce)}}}function We(r,e,t){let s;ge(r,ye,c=>t(20,s=c));let{title:l}=e,{timestamp:o}=e,{oldPassword:d}=e,p=!1,m,n="",a=!1,i=!1,k=!1,O=!1,v=!1;const B=()=>t(5,i=!1),q=()=>t(6,k=!1),H=()=>t(7,O=!1),y=()=>t(8,v=!1);Ce(()=>{fetch("/api/password/depass",{body:JSON.stringify({encryptedPassword:d}),headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"}).then(c=>c.json()).then(c=>t(3,n=c.decryptedPassword))});const L=()=>{t(1,p=!p),p?t(2,m.style.transform="rotate(360deg)",m):t(2,m.style.transform="rotate(0deg)",m)},M=()=>{Fe(ie(we(Se()),"Users",s==null?void 0:s.id),{passwords:be({timestamp:o,title:l,password:d})}).then(()=>{t(8,v=!0)})},Q=()=>{l.length<2?t(5,i=!0):n.length<8?t(6,k=!0):(t(4,a=!0),fetch("/api/password/encpass",{body:JSON.stringify({decryptedPassword:n}),headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"}).then(c=>c.json()).then(c=>{const V=we(Se());De(V,async N=>{N.update(ie(V,"Users",s==null?void 0:s.id),{passwords:be({timestamp:o,title:l,password:d})}).update(ie(V,"Users",s==null?void 0:s.id),{passwords:Ae({timestamp:new Date,title:l,password:c.encryptedPassword})})}).then(()=>{t(4,a=!1),t(1,p=!1),t(7,O=!0)})}))};function C(c){Te[c?"unshift":"push"](()=>{m=c,t(2,m)})}const g=c=>t(3,n=c.target.value);return r.$$set=c=>{"title"in c&&t(0,l=c.title),"timestamp"in c&&t(16,o=c.timestamp),"oldPassword"in c&&t(17,d=c.oldPassword)},[l,p,m,n,a,i,k,O,v,B,q,H,y,L,M,Q,o,d,C,g]}class Xe extends se{constructor(e){super();ae(this,e,We,Ke,ne,{title:0,timestamp:16,oldPassword:17})}}function Pe(r,e,t){const s=r.slice();return s[2]=e[t],s}function $e(r,e){let t,s,l,o,d,p=R,m;return s=new Xe({props:{timestamp:e[2].timestamp,title:e[2].title,oldPassword:e[2].password}}),{key:r,first:null,c(){t=S("div"),F(s.$$.fragment),l=P(),this.h()},l(n){t=$(n,"DIV",{});var a=E(t);D(s.$$.fragment,a),l=I(a),a.forEach(_),this.h()},h(){this.first=t},m(n,a){W(n,t,a),T(s,t,null),h(t,l),m=!0},p(n,a){e=n;const i={};a&1&&(i.timestamp=e[2].timestamp),a&1&&(i.title=e[2].title),a&1&&(i.oldPassword=e[2].password),s.$set(i)},r(){d=t.getBoundingClientRect()},f(){Ne(t),p()},a(){p(),p=Ue(t,d,Me,{duration:200})},i(n){m||(w(s.$$.fragment,n),o||oe(()=>{o=le(t,_e,{}),o.start()}),m=!0)},o(n){b(s.$$.fragment,n),m=!1},d(n){n&&_(t),A(s)}}}function Ye(r){let e,t=[],s=new Map,l,o,d,p=r[0];const m=n=>n[2].timestamp.toDate();for(let n=0;n<p.length;n+=1){let a=Pe(r,p,n),i=m(a);s.set(i,t[n]=$e(i,a))}return{c(){e=S("main");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=$(n,"MAIN",{class:!0});var a=E(e);for(let i=0;i<t.length;i+=1)t[i].l(a);a.forEach(_),this.h()},h(){j(e,"class","svelte-ai80e1")},m(n,a){W(n,e,a);for(let i=0;i<t.length;i+=1)t[i].m(e,null);d=!0},p(n,[a]){if(r=n,a&1){p=r[0],pe();for(let i=0;i<t.length;i+=1)t[i].r();t=Oe(t,a,m,1,r,p,s,e,Ve,$e,null,Pe);for(let i=0;i<t.length;i+=1)t[i].a();he()}},i(n){if(!d){for(let a=0;a<p.length;a+=1)w(t[a]);n&&oe(()=>{o&&o.end(1),l=le(e,ve,{x:500,duration:444,delay:444,opacity:0,easing:ke}),l.start()}),d=!0}},o(n){for(let a=0;a<t.length;a+=1)b(t[a]);l&&l.invalidate(),n&&(o=Be(e,ve,{x:500,opacity:0,easing:ke})),d=!1},d(n){n&&_(e);for(let a=0;a<t.length;a+=1)t[a].d();n&&o&&o.end()}}}function Ze(r,e,t){let s,l;return ge(r,ye,o=>t(1,l=o)),r.$$.update=()=>{r.$$.dirty&2&&t(0,s=l==null?void 0:l.passwords.sort((o,d)=>d.timestamp-o.timestamp))},[s,l]}class nt extends se{constructor(e){super();ae(this,e,Ze,Ye,ne,{})}}export{nt as default};
