import{ab as ue,S as W,i as Y,s as Z,e as v,k as w,t as T,c as _,a as m,d as c,n as S,g as j,b as o,$ as F,T as M,f as G,I as t,H as Q,ac as ee,a2 as re,M as de,U as he,X as fe,l as oe,u as K,w as pe,x as O,A as ve,r as _e,ad as me,ae as ge,af as be,j as ae,m as se,o as te,v as le,D as $e,E as ke,F as Ee,G as Ie}from"../../chunks/vendor-c53e2aa3.js";import{u as ne}from"../../chunks/stores-31a253bf.js";import{g as ce}from"../../chunks/firebase-3e4355ad.js";import{g as ye,L as Ae}from"../../chunks/loader-ef6a9610.js";import"../../chunks/singletons-12a22614.js";const Ne=()=>{const n=ue("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session}},ie={subscribe(n){return Ne().page.subscribe(n)}};function Le(n){let a,l,e,r,h,u,p,f,d,s,i,g,A,x,N,$,k,P,V,I,q;return{c(){a=v("div"),l=v("ul"),e=v("li"),r=w(),h=v("li"),u=v("a"),p=v("div"),f=v("span"),d=T("house"),s=w(),i=v("span"),g=T("\xA0Home"),A=T(`\r
		\xA0\xA0\xA0\xA0\r
		`),x=v("li"),N=v("a"),$=v("div"),k=v("span"),P=T("manage_accounts"),V=w(),I=v("span"),q=T("\xA0Manage"),this.h()},l(E){a=_(E,"DIV",{class:!0});var y=m(a);l=_(y,"UL",{class:!0});var b=m(l);e=_(b,"LI",{class:!0,style:!0}),m(e).forEach(c),r=S(b),h=_(b,"LI",{class:!0});var L=m(h);u=_(L,"A",{href:!0,class:!0});var H=m(u);p=_(H,"DIV",{class:!0});var U=m(p);f=_(U,"SPAN",{class:!0});var B=m(f);d=j(B,"house"),B.forEach(c),s=S(U),i=_(U,"SPAN",{class:!0});var D=m(i);g=j(D,"\xA0Home"),D.forEach(c),U.forEach(c),H.forEach(c),L.forEach(c),A=j(b,`\r
		\xA0\xA0\xA0\xA0\r
		`),x=_(b,"LI",{class:!0});var R=m(x);N=_(R,"A",{href:!0,class:!0});var X=m(N);$=_(X,"DIV",{class:!0});var C=m($);k=_(C,"SPAN",{class:!0});var z=m(k);P=j(z,"manage_accounts"),z.forEach(c),V=S(C),I=_(C,"SPAN",{class:!0});var J=m(I);q=j(J,"\xA0Manage"),J.forEach(c),C.forEach(c),X.forEach(c),R.forEach(c),b.forEach(c),y.forEach(c),this.h()},h(){o(e,"class","indicator svelte-o1m2ae"),F(e,"left",n[0].path==="/dashboard"?"calc(25% - 54px)":"calc(75% - 58px)"),F(e,"width",n[0].path==="/dashboard"?"100px":"124px"),o(f,"class","material-icons-round icon svelte-o1m2ae"),o(i,"class","tab-text svelte-o1m2ae"),o(p,"class","tab svelte-o1m2ae"),M(p,"activeTab",n[0].path==="/dashboard"),o(u,"href","/dashboard"),o(u,"class","svelte-o1m2ae"),M(u,"active",n[0].path==="/dashboard"),o(h,"class","link svelte-o1m2ae"),o(k,"class","material-icons-round icon svelte-o1m2ae"),o(I,"class","tab-text svelte-o1m2ae"),o($,"class","tab svelte-o1m2ae"),M($,"activeTab",n[0].path==="/dashboard/manage"),o(N,"href","/dashboard/manage"),o(N,"class","svelte-o1m2ae"),M(N,"active",n[0].path==="/dashboard/manage"),o(x,"class","link svelte-o1m2ae"),o(l,"class","links svelte-o1m2ae"),o(a,"class","bottomNav svelte-o1m2ae")},m(E,y){G(E,a,y),t(a,l),t(l,e),t(l,r),t(l,h),t(h,u),t(u,p),t(p,f),t(f,d),t(p,s),t(p,i),t(i,g),t(l,A),t(l,x),t(x,N),t(N,$),t($,k),t(k,P),t($,V),t($,I),t(I,q)},p(E,[y]){y&1&&F(e,"left",E[0].path==="/dashboard"?"calc(25% - 54px)":"calc(75% - 58px)"),y&1&&F(e,"width",E[0].path==="/dashboard"?"100px":"124px"),y&1&&M(p,"activeTab",E[0].path==="/dashboard"),y&1&&M(u,"active",E[0].path==="/dashboard"),y&1&&M($,"activeTab",E[0].path==="/dashboard/manage"),y&1&&M(N,"active",E[0].path==="/dashboard/manage")},i:Q,o:Q,d(E){E&&c(a)}}}function Me(n,a,l){let e;return ee(n,ie,r=>l(0,e=r)),[e]}class xe extends W{constructor(a){super();Y(this,a,Me,Le,Z,{})}}function we(n){let a,l,e,r,h,u,p,f,d,s,i,g,A,x,N,$,k,P,V,I,q,E,y;return{c(){a=v("link"),l=w(),e=v("nav"),r=v("a"),h=v("img"),p=w(),f=v("div"),d=v("ul"),s=v("li"),i=w(),g=v("li"),A=v("a"),x=T("Home"),N=T(`\r
			\xA0\xA0\xA0\xA0\r
			`),$=v("li"),k=v("a"),P=T("Manage"),V=w(),I=v("span"),q=T("logout"),this.h()},l(b){const L=re('[data-svelte="svelte-bgie3x"]',document.head);a=_(L,"LINK",{href:!0,rel:!0}),L.forEach(c),l=S(b),e=_(b,"NAV",{class:!0});var H=m(e);r=_(H,"A",{href:!0,class:!0});var U=m(r);h=_(U,"IMG",{class:!0,src:!0,alt:!0}),U.forEach(c),p=S(H),f=_(H,"DIV",{class:!0});var B=m(f);d=_(B,"UL",{class:!0});var D=m(d);s=_(D,"LI",{class:!0,style:!0}),m(s).forEach(c),i=S(D),g=_(D,"LI",{class:!0});var R=m(g);A=_(R,"A",{href:!0,class:!0});var X=m(A);x=j(X,"Home"),X.forEach(c),R.forEach(c),N=j(D,`\r
			\xA0\xA0\xA0\xA0\r
			`),$=_(D,"LI",{class:!0});var C=m($);k=_(C,"A",{href:!0,class:!0});var z=m(k);P=j(z,"Manage"),z.forEach(c),C.forEach(c),D.forEach(c),V=S(B),I=_(B,"SPAN",{class:!0});var J=m(I);q=j(J,"logout"),J.forEach(c),B.forEach(c),H.forEach(c),this.h()},h(){o(a,"href","https://fonts.googleapis.com/css2?family=Blinker&display=swap"),o(a,"rel","stylesheet"),o(h,"class","logo svelte-8xn891"),de(h.src,u="/logo.svg")||o(h,"src",u),o(h,"alt",""),o(r,"href","/"),o(r,"class","svelte-8xn891"),o(s,"class","indicator svelte-8xn891"),F(s,"left",n[0].path==="/dashboard"?0:"calc(100% - 100px)"),o(A,"href","/dashboard"),o(A,"class","svelte-8xn891"),M(A,"active",n[0].path==="/dashboard"),o(g,"class","link svelte-8xn891"),o(k,"href","/dashboard/manage"),o(k,"class","svelte-8xn891"),M(k,"active",n[0].path==="/dashboard/manage"),o($,"class","link svelte-8xn891"),o(d,"class","links svelte-8xn891"),o(I,"class","material-icons-round logoutIcon svelte-8xn891"),o(f,"class","right svelte-8xn891"),o(e,"class","nav svelte-8xn891")},m(b,L){t(document.head,a),G(b,l,L),G(b,e,L),t(e,r),t(r,h),t(e,p),t(e,f),t(f,d),t(d,s),t(d,i),t(d,g),t(g,A),t(A,x),t(d,N),t(d,$),t($,k),t(k,P),t(f,V),t(f,I),t(I,q),E||(y=he(I,"click",n[1]),E=!0)},p(b,[L]){L&1&&F(s,"left",b[0].path==="/dashboard"?0:"calc(100% - 100px)"),L&1&&M(A,"active",b[0].path==="/dashboard"),L&1&&M(k,"active",b[0].path==="/dashboard/manage")},i:Q,o:Q,d(b){c(a),b&&c(l),b&&c(e),E=!1,y()}}}function Se(n,a,l){let e;return ee(n,ie,h=>l(0,e=h)),[e,()=>{localStorage.clear(),fe(ce()).signOut(),ye("/")}]}class De extends W{constructor(a){super();Y(this,a,Se,we,Z,{})}}function Te(n){let a,l;return a=new Ae({props:{text:"Loading your passwords!"}}),{c(){ae(a.$$.fragment)},l(e){se(a.$$.fragment,e)},m(e,r){te(a,e,r),l=!0},p:Q,i(e){l||(O(a.$$.fragment,e),l=!0)},o(e){K(a.$$.fragment,e),l=!1},d(e){le(a,e)}}}function je(n){let a,l,e,r,h,u,p;l=new De({});const f=n[2].default,d=$e(f,n,n[1],null);return u=new xe({}),{c(){a=v("main"),ae(l.$$.fragment),e=w(),r=v("div"),d&&d.c(),h=w(),ae(u.$$.fragment),this.h()},l(s){a=_(s,"MAIN",{class:!0});var i=m(a);se(l.$$.fragment,i),e=S(i),r=_(i,"DIV",{class:!0});var g=m(r);d&&d.l(g),g.forEach(c),h=S(i),se(u.$$.fragment,i),i.forEach(c),this.h()},h(){o(r,"class","content svelte-la7v5q"),o(a,"class","svelte-la7v5q")},m(s,i){G(s,a,i),te(l,a,null),t(a,e),t(a,r),d&&d.m(r,null),t(a,h),te(u,a,null),p=!0},p(s,i){d&&d.p&&(!p||i&2)&&ke(d,f,s,s[1],p?Ie(f,s[1],i,null):Ee(s[1]),null)},i(s){p||(O(l.$$.fragment,s),O(d,s),O(u.$$.fragment,s),p=!0)},o(s){K(l.$$.fragment,s),K(d,s),K(u.$$.fragment,s),p=!1},d(s){s&&c(a),le(l),d&&d.d(s),le(u)}}}function Pe(n){let a,l,e,r,h,u;const p=[je,Te],f=[];function d(s,i){var g;return((g=s[0])==null?void 0:g.id)?0:1}return e=d(n),r=f[e]=p[e](n),{c(){a=v("link"),l=w(),r.c(),h=oe(),this.h()},l(s){const i=re('[data-svelte="svelte-uokepm"]',document.head);a=_(i,"LINK",{href:!0,rel:!0}),i.forEach(c),l=S(s),r.l(s),h=oe(),this.h()},h(){o(a,"href","https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"),o(a,"rel","stylesheet")},m(s,i){t(document.head,a),G(s,l,i),f[e].m(s,i),G(s,h,i),u=!0},p(s,[i]){let g=e;e=d(s),e===g?f[e].p(s,i):(_e(),K(f[g],1,1,()=>{f[g]=null}),pe(),r=f[e],r?r.p(s,i):(r=f[e]=p[e](s),r.c()),O(r,1),r.m(h.parentNode,h))},i(s){u||(O(r),u=!0)},o(s){K(r),u=!1},d(s){c(a),s&&c(l),f[e].d(s),s&&c(h)}}}function Ve(n,a,l){let e;ee(n,ne,u=>l(0,e=u));let{$$slots:r={},$$scope:h}=a;return ve(()=>{const u=localStorage.getItem("userID");me(ge(be(ce()),"Users",u),p=>{ne.update(f=>({id:p.id,email:p.data().email,passwords:p.data().passwords}))})}),n.$$set=u=>{"$$scope"in u&&l(1,h=u.$$scope)},[e,h,r]}class Fe extends W{constructor(a){super();Y(this,a,Ve,Pe,Z,{})}}export{Fe as default};
