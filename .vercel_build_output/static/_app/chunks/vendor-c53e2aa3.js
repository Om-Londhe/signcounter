function le(){}const Jt=t=>t;function nd(t,e){for(const n in e)t[n]=e[n];return t}function ra(t){return t()}function sa(){return Object.create(null)}function We(t){t.forEach(ra)}function Zt(t){return typeof t=="function"}function id(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let oi;function Z_(t,e){return oi||(oi=document.createElement("a")),oi.href=e,t===oi.href}function rd(t){return Object.keys(t).length===0}function sd(t,...e){if(t==null)return le;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function eI(t,e,n){t.$$.on_destroy.push(sd(e,n))}function tI(t,e,n,i){if(t){const r=oa(t,e,n,i);return t[0](r)}}function oa(t,e,n,i){return t[1]&&i?nd(n.ctx.slice(),t[1](i(e))):n.ctx}function nI(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function iI(t,e,n,i,r,s){if(r){const o=oa(e,n,i,s);t.p(o,r)}}function rI(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function sI(t){const e={};for(const n in t)e[n]=!0;return e}const aa=typeof window!="undefined";let ai=aa?()=>window.performance.now():()=>Date.now(),Br=aa?t=>requestAnimationFrame(t):le;const It=new Set;function ca(t){It.forEach(e=>{e.c(t)||(It.delete(e),e.f())}),It.size!==0&&Br(ca)}function ci(t){let e;return It.size===0&&Br(ca),{promise:new Promise(n=>{It.add(e={c:t,f:n})}),abort(){It.delete(e)}}}let ui=!1;function od(){ui=!0}function ad(){ui=!1}function cd(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ud(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const l=e[u];l.claim_order!==void 0&&c.push(l)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,l=(r>0&&e[n[r]].claim_order<=u?r+1:cd(1,r,d=>e[n[d]].claim_order,u))-1;i[c]=n[l]+1;const h=l+1;n[h]=c,r=Math.max(h,r)}const s=[],o=[];let a=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(s.push(e[c-1]);a>=c;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<s.length&&o[c].claim_order>=s[u].claim_order;)u++;const l=u<s.length?s[u]:null;t.insertBefore(o[c],l)}}function ld(t,e){t.appendChild(e)}function ua(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function hd(t){const e=la("style");return dd(ua(t),e),e}function dd(t,e){ld(t.head||t,e)}function fd(t,e){if(ui){for(ud(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function oI(t,e,n){ui&&!n?fd(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function pd(t){t.parentNode.removeChild(t)}function la(t){return document.createElement(t)}function gd(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Hr(t){return document.createTextNode(t)}function aI(){return Hr(" ")}function cI(){return Hr("")}function uI(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function lI(t){return function(e){return e.preventDefault(),t.call(this,e)}}function md(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function hI(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:md(t,e,n)}function yd(t){return Array.from(t.childNodes)}function vd(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ha(t,e,n,i,r=!1){vd(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const c=n(a);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const c=n(a);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function da(t,e,n,i){return ha(t,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const a=r.attributes[o];n[a.name]||s.push(a.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function dI(t,e,n){return da(t,e,n,la)}function fI(t,e,n){return da(t,e,n,gd)}function wd(t,e){return ha(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Hr(e),!0)}function pI(t){return wd(t," ")}function gI(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function mI(t,e){t.value=e==null?"":e}function yI(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}function vI(t,e,n){t.classList[n?"add":"remove"](e)}function _d(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function wI(t,e=document.body){return Array.from(e.querySelectorAll(t))}const zr=new Set;let li=0;function Id(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function en(t,e,n,i,r,s,o,a=0){const c=16.666/i;let u=`{
`;for(let w=0;w<=1;w+=c){const k=e+(n-e)*s(w);u+=w*100+`%{${o(k,1-k)}}
`}const l=u+`100% {${o(n,1-n)}}
}`,h=`__svelte_${Id(l)}_${a}`,d=ua(t);zr.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=hd(t).sheet),g=d.__svelte_rules||(d.__svelte_rules={});g[h]||(g[h]=!0,f.insertRule(`@keyframes ${h} ${l}`,f.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${h} ${i}ms linear ${r}ms 1 both`,li+=1,h}function tn(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),li-=r,li||Ed())}function Ed(){Br(()=>{li||(zr.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),zr.clear())})}function _I(t,e,n,i){if(!e)return le;const r=t.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return le;const{delay:s=0,duration:o=300,easing:a=Jt,start:c=ai()+s,end:u=c+o,tick:l=le,css:h}=n(t,{from:e,to:r},i);let d=!0,f=!1,g;function _(){h&&(g=en(t,0,1,o,s,a,h)),s||(f=!0)}function w(){h&&tn(t,g),d=!1}return ci(k=>{if(!f&&k>=c&&(f=!0),f&&k>=u&&(l(1,0),w()),!d)return!1;if(f){const L=k-c,x=0+1*a(L/o);l(x,1-x)}return!0}),_(),l(0,1),w}function II(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Td(t,r)}}function Td(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),r=i.transform==="none"?"":i.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let hi;function di(t){hi=t}function fi(){if(!hi)throw new Error("Function called outside component initialization");return hi}function EI(t){fi().$$.on_mount.push(t)}function TI(t){fi().$$.after_update.push(t)}function bI(t,e){fi().$$.context.set(t,e)}function SI(t){return fi().$$.context.get(t)}function AI(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const nn=[],fa=[],pi=[],pa=[],bd=Promise.resolve();let Gr=!1;function Sd(){Gr||(Gr=!0,bd.then(ga))}function Et(t){pi.push(t)}let Kr=!1;const Wr=new Set;function ga(){if(!Kr){Kr=!0;do{for(let t=0;t<nn.length;t+=1){const e=nn[t];di(e),Ad(e.$$)}for(di(null),nn.length=0;fa.length;)fa.pop()();for(let t=0;t<pi.length;t+=1){const e=pi[t];Wr.has(e)||(Wr.add(e),e())}pi.length=0}while(nn.length);for(;pa.length;)pa.pop()();Gr=!1,Kr=!1,Wr.clear()}}function Ad(t){if(t.fragment!==null){t.update(),We(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Et)}}let rn;function Yr(){return rn||(rn=Promise.resolve(),rn.then(()=>{rn=null})),rn}function Ye(t,e,n){t.dispatchEvent(_d(`${e?"intro":"outro"}${n}`))}const gi=new Set;let _e;function kI(){_e={r:0,c:[],p:_e}}function NI(){_e.r||We(_e.c),_e=_e.p}function ma(t,e){t&&t.i&&(gi.delete(t),t.i(e))}function kd(t,e,n,i){if(t&&t.o){if(gi.has(t))return;gi.add(t),_e.c.push(()=>{gi.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Xr={duration:0};function CI(t,e,n){let i=e(t,n),r=!1,s,o,a=0;function c(){s&&tn(t,s)}function u(){const{delay:h=0,duration:d=300,easing:f=Jt,tick:g=le,css:_}=i||Xr;_&&(s=en(t,0,1,d,h,f,_,a++)),g(0,1);const w=ai()+h,k=w+d;o&&o.abort(),r=!0,Et(()=>Ye(t,!0,"start")),o=ci(L=>{if(r){if(L>=k)return g(1,0),Ye(t,!0,"end"),c(),r=!1;if(L>=w){const x=f((L-w)/d);g(x,1-x)}}return r})}let l=!1;return{start(){l||(l=!0,tn(t),Zt(i)?(i=i(),Yr().then(u)):u())},invalidate(){l=!1},end(){r&&(c(),r=!1)}}}function RI(t,e,n){let i=e(t,n),r=!0,s;const o=_e;o.r+=1;function a(){const{delay:c=0,duration:u=300,easing:l=Jt,tick:h=le,css:d}=i||Xr;d&&(s=en(t,1,0,u,c,l,d));const f=ai()+c,g=f+u;Et(()=>Ye(t,!1,"start")),ci(_=>{if(r){if(_>=g)return h(0,1),Ye(t,!1,"end"),--o.r||We(o.c),!1;if(_>=f){const w=l((_-f)/u);h(1-w,w)}}return r})}return Zt(i)?Yr().then(()=>{i=i(),a()}):a(),{end(c){c&&i.tick&&i.tick(1,0),r&&(s&&tn(t,s),r=!1)}}}function DI(t,e,n,i){let r=e(t,n),s=i?0:1,o=null,a=null,c=null;function u(){c&&tn(t,c)}function l(d,f){const g=d.b-s;return f*=Math.abs(g),{a:s,b:d.b,d:g,duration:f,start:d.start,end:d.start+f,group:d.group}}function h(d){const{delay:f=0,duration:g=300,easing:_=Jt,tick:w=le,css:k}=r||Xr,L={start:ai()+f,b:d};d||(L.group=_e,_e.r+=1),o||a?a=L:(k&&(u(),c=en(t,s,d,g,f,_,k)),d&&w(0,1),o=l(L,g),Et(()=>Ye(t,d,"start")),ci(x=>{if(a&&x>a.start&&(o=l(a,g),a=null,Ye(t,o.b,"start"),k&&(u(),c=en(t,s,o.b,o.duration,0,_,r.css))),o){if(x>=o.end)w(s=o.b,1-s),Ye(t,o.b,"end"),a||(o.b?u():--o.group.r||We(o.group.c)),o=null;else if(x>=o.start){const pe=x-o.start;s=o.a+o.d*_(pe/o.duration),w(s,1-s)}}return!!(o||a)}))}return{run(d){Zt(r)?Yr().then(()=>{r=r(),h(d)}):h(d)},end(){u(),o=a=null}}}function Nd(t,e){kd(t,1,1,()=>{e.delete(t.key)})}function OI(t,e){t.f(),Nd(t,e)}function LI(t,e,n,i,r,s,o,a,c,u,l,h){let d=t.length,f=s.length,g=d;const _={};for(;g--;)_[t[g].key]=g;const w=[],k=new Map,L=new Map;for(g=f;g--;){const M=h(r,s,g),ue=n(M);let ge=o.get(ue);ge?i&&ge.p(M,e):(ge=u(ue,M),ge.c()),k.set(ue,w[g]=ge),ue in _&&L.set(ue,Math.abs(g-_[ue]))}const x=new Set,pe=new Set;function Le(M){ma(M,1),M.m(a,l),o.set(M.key,M),l=M.first,f--}for(;d&&f;){const M=w[f-1],ue=t[d-1],ge=M.key,Me=ue.key;M===ue?(l=M.first,d--,f--):k.has(Me)?!o.has(ge)||x.has(ge)?Le(M):pe.has(Me)?d--:L.get(ge)>L.get(Me)?(pe.add(ge),Le(M)):(x.add(Me),d--):(c(ue,o),d--)}for(;d--;){const M=t[d];k.has(M.key)||c(M,o)}for(;f;)Le(w[f-1]);return w}function MI(t,e){const n={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const c in o)c in a||(i[c]=1);for(const c in a)r[c]||(n[c]=a[c],r[c]=1);t[s]=a}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function PI(t){return typeof t=="object"&&t!==null?t:{}}function xI(t){t&&t.c()}function UI(t,e){t&&t.l(e)}function Cd(t,e,n,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:a}=t.$$;r&&r.m(e,n),i||Et(()=>{const c=s.map(ra).filter(Zt);o?o.push(...c):We(c),t.$$.on_mount=[]}),a.forEach(Et)}function Rd(t,e){const n=t.$$;n.fragment!==null&&(We(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dd(t,e){t.$$.dirty[0]===-1&&(nn.push(t),Sd(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function FI(t,e,n,i,r,s,o,a=[-1]){const c=hi;di(t);const u=t.$$={fragment:null,ctx:null,props:s,update:le,not_equal:r,bound:sa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:sa(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(t,e.props||{},(h,d,...f)=>{const g=f.length?f[0]:d;return u.ctx&&r(u.ctx[h],u.ctx[h]=g)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](g),l&&Dd(t,h)),d}):[],u.update(),l=!0,We(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){od();const h=yd(e.target);u.fragment&&u.fragment.l(h),h.forEach(pd)}else u.fragment&&u.fragment.c();e.intro&&ma(t.$$.fragment),Cd(t,e.target,e.anchor,e.customElement),ad(),ga()}di(c)}class VI{$destroy(){Rd(this,1),this.$destroy=le}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!rd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Tt=[];function $I(t,e=le){let n;const i=new Set;function r(a){if(id(t,a)&&(t=a,n)){const c=!Tt.length;for(const u of i)u[1](),Tt.push(u,t);if(c){for(let u=0;u<Tt.length;u+=2)Tt[u][0](Tt[u+1]);Tt.length=0}}}function s(a){r(a(t))}function o(a,c=le){const u=[a,c];return i.add(u),i.size===1&&(n=e(r)||le),a(t),()=>{i.delete(u),i.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:o}}function jI(t){const e=1.70158*1.525;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}function Od(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function mi(t){const e=t-1;return e*e*e+1}function qI(t,{delay:e=0,duration:n=400,easing:i=Od,amount:r=5,opacity:s=0}={}){const o=getComputedStyle(t),a=+o.opacity,c=o.filter==="none"?"":o.filter,u=a*(1-s);return{delay:e,duration:n,easing:i,css:(l,h)=>`opacity: ${a-u*h}; filter: ${c} blur(${h*r}px);`}}function BI(t,{delay:e=0,duration:n=400,easing:i=Jt}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:s=>`opacity: ${s*r}`}}function HI(t,{delay:e=0,duration:n=400,easing:i=mi,x:r=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(t),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-o);return{delay:e,duration:n,easing:i,css:(h,d)=>`
			transform: ${u} translate(${(1-h)*r}px, ${(1-h)*s}px);
			opacity: ${c-l*d}`}}function zI(t,{delay:e=0,duration:n=400,easing:i=mi}={}){const r=getComputedStyle(t),s=+r.opacity,o=parseFloat(r.height),a=parseFloat(r.paddingTop),c=parseFloat(r.paddingBottom),u=parseFloat(r.marginTop),l=parseFloat(r.marginBottom),h=parseFloat(r.borderTopWidth),d=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:i,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*s};height: ${f*o}px;padding-top: ${f*a}px;padding-bottom: ${f*c}px;margin-top: ${f*u}px;margin-bottom: ${f*l}px;border-top-width: ${f*h}px;border-bottom-width: ${f*d}px;`}}function GI(t,{delay:e=0,duration:n=400,easing:i=mi,start:r=0,opacity:s=0}={}){const o=getComputedStyle(t),a=+o.opacity,c=o.transform==="none"?"":o.transform,u=1-r,l=a*(1-s);return{delay:e,duration:n,easing:i,css:(h,d)=>`
			transform: ${c} scale(${1-u*d});
			opacity: ${a-l*d}
		`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)==55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)==56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Md=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),i.push(n[l],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ld(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Md(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(i.push(d),u!==64){const f=a<<4&240|u>>2;if(i.push(f),h!==64){const g=u<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},xd=function(t){try{return Pd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ya(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(B())}function Qr(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function va(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fd(){return B().indexOf("Electron/")>=0}function wa(){const t=B();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vd(){return B().indexOf("MSAppHost/")>=0}function $d(){return typeof indexedDB=="object"}function jd(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function qd(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="FirebaseError";class Pe extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=Bd,Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xe.prototype.create)}}class Xe{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Hd(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Pe(r,a,i)}}function Hd(t,e){return t.replace(zd,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const zd=/\{\$([^}]+)}/g;function Gd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(_a(s)&&_a(o)){if(!sn(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function _a(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function an(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function cn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Kd(t,e){const n=new Wd(t,e);return n.subscribe.bind(n)}class Wd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Yd(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Jr),r.error===void 0&&(r.error=Jr),r.complete===void 0&&(r.complete=Jr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jr(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=1e3,Qd=2,Jd=4*60*60*1e3,Zd=.5;function Ia(t,e=Xd,n=Qd){const i=e*Math.pow(n,t),r=Math.round(Zd*i*(Math.random()-.5)*2);return Math.min(Jd,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){return t&&t._delegate?t._delegate:t}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Zr(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function ef(t,e,n,i){function r(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(l){try{u(i.next(l))}catch(h){o(h)}}function c(l){try{u(i.throw(l))}catch(h){o(h)}}function u(l){l.done?s(l.value):r(l.value).then(a,c)}u((i=i.apply(t,e||[])).next())})}function tf(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(l){return c([u,l])}}function c(u){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,r&&(s=u[0]&2?r.return:u[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,u[1])).done)return s;switch(r=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,r=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(l){u=[6,l],r=0}finally{i=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function es(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function yi(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function Ea(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}var Ie=function(){function t(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nf=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var i=new Ud;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,i;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(sf(e))try{this.getOrInitializeService({instanceIdentifier:Qe})}catch{}try{for(var r=es(this.instancesDeferred.entries()),s=r.next();!s.done;s=r.next()){var o=yi(s.value,2),a=o[0],c=o[1],u=this.normalizeInstanceIdentifier(a);try{var l=this.getOrInitializeService({instanceIdentifier:u});c.resolve(l)}catch{}}}catch(h){n={error:h}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=Qe),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return ef(this,void 0,void 0,function(){var e;return tf(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Ea(Ea([],yi(e.filter(function(i){return"INTERNAL"in i}).map(function(i){return i.INTERNAL.delete()}))),yi(e.filter(function(i){return"_delete"in i}).map(function(i){return i._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=Qe),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=Qe),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,i;e===void 0&&(e={});var r=e.options,s=r===void 0?{}:r,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var c=es(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=yi(u.value,2),h=l[0],d=l[1],f=this.normalizeInstanceIdentifier(h);o===f&&d.resolve(a)}}catch(g){n={error:g}}finally{try{u&&!u.done&&(i=c.return)&&i.call(c)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var i,r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);var o=this.instances.get(r);return o&&e(o,r),function(){s.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var i,r,s=this.onInitCallbacks.get(n);if(!!s)try{for(var o=es(s),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(e,n)}catch{}}}catch(u){i={error:u}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,i=e.options,r=i===void 0?{}:i,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rf(n),options:r}),this.instances.set(n,s),this.instancesOptions.set(n,r),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch{}return s||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=Qe),this.component?this.component.multipleInstances?e:Qe:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function rf(t){return t===Qe?void 0:t}function sf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var of=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new nf(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const af={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},cf=R.INFO,uf={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},lf=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=uf[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vi{constructor(e){this.name=e,this._logLevel=cf,this._logHandler=lf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?af[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(df(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function df(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ta="@firebase/app",ff="0.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new vi("@firebase/app"),pf="@firebase/app-compat",gf="@firebase/analytics-compat",mf="@firebase/analytics",yf="@firebase/app-check-compat",vf="@firebase/app-check",wf="@firebase/auth",_f="@firebase/auth-compat",If="@firebase/database",Ef="@firebase/database-compat",Tf="@firebase/functions",bf="@firebase/functions-compat",Sf="@firebase/installations",Af="@firebase/installations-compat",kf="@firebase/messaging",Nf="@firebase/messaging-compat",Cf="@firebase/performance",Rf="@firebase/performance-compat",Df="@firebase/remote-config",Of="@firebase/remote-config-compat",Lf="@firebase/storage",Mf="@firebase/storage-compat",Pf="@firebase/firestore",xf="@firebase/firestore-compat",Uf="firebase",Ff="9.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="[DEFAULT]",Vf={[Ta]:"fire-core",[pf]:"fire-core-compat",[mf]:"fire-analytics",[gf]:"fire-analytics-compat",[vf]:"fire-app-check",[yf]:"fire-app-check-compat",[wf]:"fire-auth",[_f]:"fire-auth-compat",[If]:"fire-rtdb",[Ef]:"fire-rtdb-compat",[Tf]:"fire-fn",[bf]:"fire-fn-compat",[Sf]:"fire-iid",[Af]:"fire-iid-compat",[kf]:"fire-fcm",[Nf]:"fire-fcm-compat",[Cf]:"fire-perf",[Rf]:"fire-perf-compat",[Df]:"fire-rc",[Of]:"fire-rc-compat",[Lf]:"fire-gcs",[Mf]:"fire-gcs-compat",[Pf]:"fire-fst",[xf]:"fire-fst-compat","fire-js":"fire-js",[Uf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Map,ns=new Map;function $f(t,e){try{t.container.addComponent(e)}catch(n){ts.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ae(t){const e=t.name;if(ns.has(e))return ts.debug(`There were multiple attempts to register component ${e}.`),!1;ns.set(e,t);for(const n of un.values())$f(n,t);return!0}function Je(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},wi=new Xe("app","Firebase",jf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=Ff;function KI(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ba,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw wi.create("bad-app-name",{appName:String(i)});const r=un.get(i);if(r){if(sn(t,r.options)&&sn(n,r.config))return r;throw wi.create("duplicate-app",{appName:i})}const s=new of(i);for(const a of ns.values())s.addComponent(a);const o=new qf(t,n,s);return un.set(i,o),o}function is(t=ba){const e=un.get(t);if(!e)throw wi.create("no-app",{appName:t});return e}function WI(){return Array.from(un.values())}function bt(t,e,n){var i;let r=(i=Vf[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ts.warn(a.join(" "));return}Ae(new Ie(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t){Ae(new Ie("platform-logger",e=>new hf(e),"PRIVATE")),bt(Ta,ff,t),bt("fire-js","")}Bf();function Sa(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hf=Sa,Aa=new Xe("auth","Firebase",Sa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new vi("@firebase/auth");function _i(t,...e){ka.logLevel<=R.ERROR&&ka.error(`Auth (${ln}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,...e){throw rs(t,...e)}function Ee(t,...e){return rs(t,...e)}function zf(t,e,n){const i=Object.assign(Object.assign({},Hf()),{[e]:n});return new Xe("auth","Firebase",i).create(e,{appName:t.name})}function rs(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Aa.create(t,...e)}function I(t,e,...n){if(!t)throw rs(e,...n)}function ke(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _i(e),new Error(e)}function Ne(t,e){t||ke(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new Map;function Ce(t){Ne(t instanceof Function,"Expected a class definition");let e=Na.get(t);return e?(Ne(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Na.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t,e){const n=Je(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(sn(s,e!=null?e:{}))return r;ye(r,"already-initialized")}return n.initialize({options:e})}function Kf(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ce);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wf(){return Ca()==="http:"||Ca()==="https:"}function Ca(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wf()||Qr()||"connection"in navigator)?navigator.onLine:!0}function Xf(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ne(n>e,"Short delay should be less than long delay!"),this.isMobile=ya()||va()}get(){return Yf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,e){Ne(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=new hn(3e4,6e4);function dn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function St(t,e,n,i,r={}){return Ra(t,r,()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=on(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(os.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),os.fetch()(Da(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ra(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Qf),e);try{const r=new Zf(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw as(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw as(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw as(t,"email-already-in-use",o);const l=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zf(t,l,u);ye(t,l)}}catch(r){if(r instanceof Pe)throw r;ye(t,"network-request-failed")}}async function Ei(t,e,n,i,r={}){const s=await St(t,e,n,i,r);return"mfaPendingCredential"in s&&ye(t,"multi-factor-auth-required",{serverResponse:s}),s}function Da(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?ss(t.config,r):`${t.config.apiScheme}://${r}`}class Zf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Ee(this.auth,"timeout")),Jf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function as(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Ee(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(t,e){return St(t,"POST","/v1/accounts:delete",e)}async function tp(t,e){return St(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function np(t,e=!1){const n=V(t),i=await n.getIdToken(e),r=us(i);I(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:fn(cs(r.auth_time)),issuedAtTime:fn(cs(r.iat)),expirationTime:fn(cs(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cs(t){return Number(t)*1e3}function us(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return _i("JWT malformed, contained fewer than 3 sections"),null;try{const r=xd(n);return r?JSON.parse(r):(_i("Failed to decode base64 JWT payload"),null)}catch(r){return _i("Caught error parsing JWT payload as JSON",r),null}}function ip(t){const e=us(t);return I(e,"internal-error"),I(typeof e.exp!="undefined","internal-error"),I(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Pe&&rp(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function rp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fn(this.lastLoginAt),this.creationTime=fn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t){var e;const n=t.auth,i=await t.getIdToken(),r=await pn(t,tp(n,{idToken:i}));I(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?cp(s.providerUserInfo):[],a=ap(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Oa(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function op(t){const e=V(t);await Ti(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ap(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function cp(t){return t.map(e=>{var{providerId:n}=e,i=Zr(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(t,e){const n=await Ra(t,{},()=>{const i=on({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=Da(t,r,"/v1/token",`key=${s}`);return os.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken!="undefined","internal-error"),I(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):ip(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await up(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new gn;return i&&(I(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(I(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(I(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,e){I(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ze{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Zr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new sp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.metadata=new Oa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pn(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return np(this,e)}reload(){return op(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ti(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pn(this,ep(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,u,l;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:x,emailVerified:pe,isAnonymous:Le,providerData:M,stsTokenManager:ue}=n;I(x&&ue,e,"internal-error");const ge=gn.fromJSON(this.name,ue);I(typeof x=="string",e,"internal-error"),xe(h,e.name),xe(d,e.name),I(typeof pe=="boolean",e,"internal-error"),I(typeof Le=="boolean",e,"internal-error"),xe(f,e.name),xe(g,e.name),xe(_,e.name),xe(w,e.name),xe(k,e.name),xe(L,e.name);const Me=new Ze({uid:x,auth:e,email:d,emailVerified:pe,displayName:h,isAnonymous:Le,photoURL:g,phoneNumber:f,tenantId:_,stsTokenManager:ge,createdAt:k,lastLoginAt:L});return M&&Array.isArray(M)&&(Me.providerData=M.map(td=>Object.assign({},td))),w&&(Me._redirectEventId=w),Me}static async _fromIdTokenResponse(e,n,i=!1){const r=new gn;r.updateFromServerResponse(n);const s=new Ze({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ti(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}La.type="NONE";const Ma=La;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t,e,n){return`firebase:${t}:${e}:${n}`}class At{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=bi(this.userKey,r.apiKey,s),this.fullPersistenceKey=bi("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ze._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new At(Ce(Ma),e,i);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||Ce(Ma);const o=bi(i,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Ze._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new At(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new At(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($a(e))return"Blackberry";if(ja(e))return"Webos";if(ls(e))return"Safari";if((e.includes("chrome/")||Ua(e))&&!e.includes("edge/"))return"Chrome";if(Va(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function xa(t=B()){return/firefox\//i.test(t)}function ls(t=B()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ua(t=B()){return/crios\//i.test(t)}function Fa(t=B()){return/iemobile/i.test(t)}function Va(t=B()){return/android/i.test(t)}function $a(t=B()){return/blackberry/i.test(t)}function ja(t=B()){return/webos/i.test(t)}function Si(t=B()){return/iphone|ipad|ipod/i.test(t)}function lp(t=B()){var e;return Si(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function hp(){return wa()&&document.documentMode===10}function qa(t=B()){return Si(t)||Va(t)||ja(t)||$a(t)||/windows phone/i.test(t)||Fa(t)}function dp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t,e=[]){let n;switch(t){case"Browser":n=Pa(B());break;case"Worker":n=`${Pa(B())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ln}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ha(this),this.idTokenSubscription=new Ha(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Aa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ce(n)),this._initializationPromise=this.queue(async()=>{var i;this._deleted||(this.persistenceManager=await At.create(this,e),!this._deleted&&(((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ti(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?V(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ce(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xe("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ce(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await At.create(this,[Ce(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ba(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function hs(t){return V(t)}class Ha{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kd(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ke("not implemented")}_getIdTokenResponse(e){return ke("not implemented")}_linkToIdToken(e,n){return ke("not implemented")}_getReauthenticationResolver(e){return ke("not implemented")}}async function pp(t,e){return St(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gp(t,e){return Ei(t,"POST","/v1/accounts:signInWithPassword",dn(t,e))}async function mp(t,e){return St(t,"POST","/v1/accounts:sendOobCode",dn(t,e))}async function yp(t,e){return mp(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(t,e){return Ei(t,"POST","/v1/accounts:signInWithEmailLink",dn(t,e))}async function wp(t,e){return Ei(t,"POST","/v1/accounts:signInWithEmailLink",dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends ds{constructor(e,n,i,r=null){super("password",i);this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new mn(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new mn(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return gp(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vp(e,{email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return pp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wp(e,{idToken:n,email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(t,e){return Ei(t,"POST","/v1/accounts:signInWithIdp",dn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="http://localhost";class et extends ds{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Zr(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new et(i,r);return Object.assign(o,s),o}_getIdTokenResponse(e){const n=this.buildRequest();return kt(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,kt(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kt(e,n)}buildRequest(){const e={requestUri:_p,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=on(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ep(t){const e=an(cn(t)).link,n=e?an(cn(e)).deep_link_id:null,i=an(cn(t)).deep_link_id;return(i?an(cn(i)).link:null)||i||n||e||t}class Ai{constructor(e){var n,i,r,s,o,a;const c=an(cn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(i=c.oobCode)!==null&&i!==void 0?i:null,h=Ip((r=c.mode)!==null&&r!==void 0?r:null);I(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ep(e);try{return new Ai(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.providerId=Nt.PROVIDER_ID}static credential(e,n){return mn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Ai.parseLink(n);return I(i,"argument-error"),mn._fromEmailAndCode(e,i.code,i.tenantId)}}Nt.PROVIDER_ID="password";Nt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends za{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends yn{constructor(){super("facebook.com")}static credential(e){return et._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ue.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends yn{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return et._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Fe.credential(n,i)}catch{return null}}}Fe.GOOGLE_SIGN_IN_METHOD="google.com";Fe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends yn{constructor(){super("github.com")}static credential(e){return et._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.GITHUB_SIGN_IN_METHOD="github.com";Ve.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends yn{constructor(){super("twitter.com")}static credential(e,n){return et._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return $e.credential(n,i)}catch{return null}}}$e.TWITTER_SIGN_IN_METHOD="twitter.com";$e.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Ze._fromIdTokenResponse(e,i,r),o=Ga(i);return new Ct({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Ga(i);return new Ct({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Ga(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Pe{constructor(e,n,i,r){var s;super(n.code,n.message);this.operationType=i,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,ki.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,i,r){return new ki(e,n,i,r)}}function Ka(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ki._fromErrorAndOperation(t,s,e,i):s})}async function Tp(t,e,n=!1){const i=await pn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ct._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await pn(t,Ka(i,r,e,t),n);I(s.idToken,i,"internal-error");const o=us(s.idToken);I(o,i,"internal-error");const{sub:a}=o;return I(t.uid===a,i,"user-mismatch"),Ct._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ye(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(t,e,n=!1){const i="signIn",r=await Ka(t,i,e),s=await Ct._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Sp(t,e){return Wa(hs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t,e,n){var i;I(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),I(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iosBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(t,e,n){const i=V(t),r={requestType:"EMAIL_SIGNIN",email:e};I(n.handleCodeInApp,i,"argument-error"),n&&Ap(i,r,n),await yp(i,r)}function XI(t,e){const n=Ai.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function QI(t,e,n){const i=V(t),r=Nt.credentialWithLink(e,n||Ii());return I(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Sp(i,r)}const Ni="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ni,"1"),this.storage.removeItem(Ni),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(){const t=B();return ls(t)||Si(t)}const Np=1e3,Cp=10;class Xa extends Ya{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kp()&&dp(),this.fallbackToPolling=qa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);hp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Cp):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Np)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xa.type="LOCAL";const Rp=Xa;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends Ya{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qa.type="SESSION";const Ja=Qa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Ci(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await Dp(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ci.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=fs("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return window}function Lp(t){Te().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(){return typeof Te().WorkerGlobalScope!="undefined"&&typeof Te().importScripts=="function"}async function Mp(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xp(){return Za()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="firebaseLocalStorageDb",Up=1,Ri="firebaseLocalStorage",tc="fbase_key";class vn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Di(t,e){return t.transaction([Ri],e?"readwrite":"readonly").objectStore(Ri)}function Fp(){const t=indexedDB.deleteDatabase(ec);return new vn(t).toPromise()}function ps(){const t=indexedDB.open(ec,Up);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ri,{keyPath:tc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ri)?e(i):(i.close(),await Fp(),e(await ps()))})})}async function nc(t,e,n){const i=Di(t,!0).put({[tc]:e,value:n});return new vn(i).toPromise()}async function Vp(t,e){const n=Di(t,!1).get(e),i=await new vn(n).toPromise();return i===void 0?null:i.value}function ic(t,e){const n=Di(t,!0).delete(e);return new vn(n).toPromise()}const $p=800,jp=3;class rc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ps(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>jp)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Za()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ci._getInstance(xp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mp(),!this.activeServiceWorker)return;this.sender=new Op(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ps();return await nc(e,Ni,"1"),await ic(e,Ni),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>nc(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Vp(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ic(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Di(r,!1).getAll();return new vn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$p)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rc.type="LOCAL";const qp=rc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Hp(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Ee("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Bp().appendChild(i)})}function zp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new hn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t,e){return e?Ce(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends ds{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return kt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return kt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Kp(t){return Wa(t.auth,new gs(t),t.bypassAuthState)}function Wp(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),bp(n,new gs(t),t.bypassAuthState)}async function Yp(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Tp(n,new gs(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kp;case"linkViaPopup":case"linkViaRedirect":return Yp;case"reauthViaPopup":case"reauthViaRedirect":return Wp;default:ye(this.auth,"internal-error")}}resolve(e){Ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=new hn(2e3,1e4);class Rt extends sc{constructor(e,n,i,r,s){super(e,n,r,s);this.provider=i,this.authWindow=null,this.pollId=null,Rt.currentPopupAction&&Rt.currentPopupAction.cancel(),Rt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Ne(this.filter.length===1,"Popup operations only handle one event");const e=fs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ee(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Xp.get())};e()}}Rt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="pendingRedirect",oc=new Map;class Jp extends sc{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const i=await Zp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}oc.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zp(t,e){const n=eg(e),i=await ac(t)._get(n)==="true";return await ac(t)._remove(n),i}function ac(t){return Ce(t._redirectPersistence)}function eg(t){return bi(Qp,t.config.apiKey,t.name)}async function tg(t,e,n=!1){const i=hs(t),r=Gp(i,e),o=await new Jp(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=10*60*1e3;class ig{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!uc(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Ee(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ng&&this.cachedEventUids.clear(),this.cachedEventUids.has(cc(e))}saveEventToCache(e){this.cachedEventUids.add(cc(e)),this.lastProcessedEventTime=Date.now()}}function cc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(t,e={}){return St(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ag=/^https?/;async function cg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sg(t);for(const n of e)try{if(ug(n))return}catch{}ye(t,"unauthorized-domain")}function ug(t){const e=Ii(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!ag.test(n))return!1;if(og.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=new hn(3e4,6e4);function lc(){const t=Te().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hg(t){return new Promise((e,n)=>{var i,r,s;function o(){lc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lc(),n(Ee(t,"network-request-failed"))},timeout:lg.get()})}if((r=(i=Te().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((s=Te().gapi)===null||s===void 0?void 0:s.load)o();else{const a=zp("iframefcb");return Te()[a]=()=>{gapi.load?o():n(Ee(t,"network-request-failed"))},Hp(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Oi=null,e})}let Oi=null;function dg(t){return Oi=Oi||hg(t),Oi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=new hn(5e3,15e3),pg="__/auth/iframe",gg="emulator/auth/iframe",mg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},yg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vg(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ss(e,gg):`https://${t.config.authDomain}/${pg}`,i={apiKey:e.apiKey,appName:t.name,v:ln},r=yg.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${on(i).slice(1)}`}async function wg(t){const e=await dg(t),n=Te().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:vg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mg,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Ee(t,"network-request-failed"),a=Te().setTimeout(()=>{s(o)},fg.get());function c(){Te().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ig=500,Eg=600,Tg="_blank",bg="http://localhost";class hc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sg(t,e,n,i=Ig,r=Eg){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},_g),{width:i.toString(),height:r.toString(),top:s,left:o}),u=B().toLowerCase();n&&(a=Ua(u)?Tg:n),xa(u)&&(e=e||bg,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(lp(u)&&a!=="_self")return Ag(e||"",a),new hc(null);const h=window.open(e||"",a,l);I(h,t,"popup-blocked");try{h.focus()}catch{}return new hc(h)}function Ag(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="__/auth/handler",Ng="emulator/auth/handler";function dc(t,e,n,i,r,s){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ln,eventId:r};if(e instanceof za){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof yn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Cg(t)}?${on(a).slice(1)}`}function Cg({config:t}){return t.emulator?ss(t,Ng):`https://${t.authDomain}/${kg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="webStorageSupport";class Rg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ja,this._completeRedirectFn=tg}async _openPopup(e,n,i,r){var s;Ne((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=dc(e,n,i,Ii(),r);return Sg(e,o,fs())}async _openRedirect(e,n,i,r){return await this._originValidation(e),Lp(dc(e,n,i,Ii(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Ne(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i}async initAndGetManager(e){const n=await wg(e),i=new ig(e);return n.register("authEvent",r=>(I(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ms,{type:ms},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[ms];o!==void 0&&n(!!o),ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qa()||ls()||Si()}}const Dg=Rg;var Og="@firebase/auth",Lg="0.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xg(t){Ae(new Ie("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(o=>{I(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),I(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:r,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ba(t)},c=new fp(o,a);return Kf(c,n),c})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ae(new Ie("auth-internal",e=>{const n=hs(e.getProvider("auth").getImmediate());return(i=>new Mg(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(Og,Lg,Pg(t))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t=is()){const e=Je(t,"auth");return e.isInitialized()?e.getImmediate():Gf(t,{popupRedirectResolver:Dg,persistence:[qp,Rp,Ja]})}xg("Browser");function Ug(t){return Array.prototype.slice.call(t)}function fc(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function ys(t,e,n){var i,r=new Promise(function(s,o){i=t[e].apply(t,n),fc(i).then(s,o)});return r.request=i,r}function Fg(t,e,n){var i=ys(t,e,n);return i.then(function(r){if(!!r)return new wn(r,i.request)})}function Dt(t,e,n){n.forEach(function(i){Object.defineProperty(t.prototype,i,{get:function(){return this[e][i]},set:function(r){this[e][i]=r}})})}function vs(t,e,n,i){i.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return ys(this[e],r,arguments)})})}function Li(t,e,n,i){i.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function pc(t,e,n,i){i.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return Fg(this[e],r,arguments)})})}function tt(t){this._index=t}Dt(tt,"_index",["name","keyPath","multiEntry","unique"]);vs(tt,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);pc(tt,"_index",IDBIndex,["openCursor","openKeyCursor"]);function wn(t,e){this._cursor=t,this._request=e}Dt(wn,"_cursor",["direction","key","primaryKey","value"]);vs(wn,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(wn.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),fc(e._request).then(function(i){if(!!i)return new wn(i,e._request)})})})});function be(t){this._store=t}be.prototype.createIndex=function(){return new tt(this._store.createIndex.apply(this._store,arguments))};be.prototype.index=function(){return new tt(this._store.index.apply(this._store,arguments))};Dt(be,"_store",["name","keyPath","indexNames","autoIncrement"]);vs(be,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);pc(be,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);Li(be,"_store",IDBObjectStore,["deleteIndex"]);function _n(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}_n.prototype.objectStore=function(){return new be(this._tx.objectStore.apply(this._tx,arguments))};Dt(_n,"_tx",["objectStoreNames","mode"]);Li(_n,"_tx",IDBTransaction,["abort"]);function Mi(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new _n(n)}Mi.prototype.createObjectStore=function(){return new be(this._db.createObjectStore.apply(this._db,arguments))};Dt(Mi,"_db",["name","version","objectStoreNames"]);Li(Mi,"_db",IDBDatabase,["deleteObjectStore","close"]);function Pi(t){this._db=t}Pi.prototype.transaction=function(){return new _n(this._db.transaction.apply(this._db,arguments))};Dt(Pi,"_db",["name","version","objectStoreNames"]);Li(Pi,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[be,tt].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=Ug(arguments),i=n[n.length-1],r=this._store||this._index,s=r[t].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})})});[tt,be].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var i=this,r=[];return new Promise(function(s){i.iterateCursor(e,function(o){if(!o){s(r);return}if(r.push(o.value),n!==void 0&&r.length==n){s(r);return}o.continue()})})})});function Vg(t,e,n){var i=ys(indexedDB,"open",[t,e]),r=i.request;return r&&(r.onupgradeneeded=function(s){n&&n(new Mi(r.result,s.oldVersion,r.transaction))}),i.then(function(s){return new Pi(s)})}const $g="@firebase/installations",gc="0.5.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=1e4,yc=`w:${gc}`,vc="FIS_v2",jg="https://firebaseinstallations.googleapis.com/v1",qg=60*60*1e3,Bg="installations",Hg="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},nt=new Xe(Bg,Hg,zg);function wc(t){return t instanceof Pe&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c({projectId:t}){return`${jg}/projects/${t}/installations`}function Ic(t){return{token:t.token,requestStatus:2,expiresIn:Kg(t.expiresIn),creationTime:Date.now()}}async function Ec(t,e){const i=(await e.json()).error;return nt.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Tc({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Gg(t,{refreshToken:e}){const n=Tc(t);return n.append("Authorization",Wg(e)),n}async function bc(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Kg(t){return Number(t.replace("s","000"))}function Wg(t){return`${vc} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(t,{fid:e}){const n=_c(t),i=Tc(t),r={fid:e,authVersion:vc,appId:t.appId,sdkVersion:yc},s={method:"POST",headers:i,body:JSON.stringify(r)},o=await bc(()=>fetch(n,s));if(o.ok){const a=await o.json();return{fid:a.fid||e,registrationStatus:2,refreshToken:a.refreshToken,authToken:Ic(a.authToken)}}else throw await Ec("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=/^[cdef][\w-]{21}$/,ws="";function Jg(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Zg(t);return Qg.test(n)?n:ws}catch{return ws}}function Zg(t){return Xg(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=new Map;function kc(t,e){const n=xi(t);Nc(n,e),em(n,e)}function Nc(t,e){const n=Ac.get(t);if(!!n)for(const i of n)i(e)}function em(t,e){const n=tm();n&&n.postMessage({key:t,fid:e}),nm()}let it=null;function tm(){return!it&&"BroadcastChannel"in self&&(it=new BroadcastChannel("[Firebase] FID Change"),it.onmessage=t=>{Nc(t.data.key,t.data.fid)}),it}function nm(){Ac.size===0&&it&&(it.close(),it=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="firebase-installations-database",rm=1,rt="firebase-installations-store";let _s=null;function Is(){return _s||(_s=Vg(im,rm,t=>{switch(t.oldVersion){case 0:t.createObjectStore(rt)}})),_s}async function Ui(t,e){const n=xi(t),r=(await Is()).transaction(rt,"readwrite"),s=r.objectStore(rt),o=await s.get(n);return await s.put(e,n),await r.complete,(!o||o.fid!==e.fid)&&kc(t,e.fid),e}async function Cc(t){const e=xi(t),i=(await Is()).transaction(rt,"readwrite");await i.objectStore(rt).delete(e),await i.complete}async function Fi(t,e){const n=xi(t),r=(await Is()).transaction(rt,"readwrite"),s=r.objectStore(rt),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.complete,a&&(!o||o.fid!==a.fid)&&kc(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t){let e;const n=await Fi(t,i=>{const r=sm(i),s=om(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===ws?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function sm(t){const e=t||{fid:Jg(),registrationStatus:0};return Dc(e)}function om(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(nt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=am(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cm(t)}:{installationEntry:e}}async function am(t,e){try{const n=await Yg(t,e);return Ui(t,n)}catch(n){throw wc(n)&&n.customData.serverCode===409?await Cc(t):await Ui(t,{fid:e.fid,registrationStatus:0}),n}}async function cm(t){let e=await Rc(t);for(;e.registrationStatus===1;)await Sc(100),e=await Rc(t);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Es(t);return i||n}return e}function Rc(t){return Fi(t,e=>{if(!e)throw nt.create("installation-not-found");return Dc(e)})}function Dc(t){return um(t)?{fid:t.fid,registrationStatus:0}:t}function um(t){return t.registrationStatus===1&&t.registrationTime+mc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm({appConfig:t,platformLoggerProvider:e},n){const i=hm(t,n),r=Gg(t,n),s=e.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:yc}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await bc(()=>fetch(i,a));if(c.ok){const u=await c.json();return Ic(u)}else throw await Ec("Generate Auth Token",c)}function hm(t,{fid:e}){return`${_c(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(t,e=!1){let n;const i=await Fi(t.appConfig,s=>{if(!Lc(s))throw nt.create("not-registered");const o=s.authToken;if(!e&&pm(o))return s;if(o.requestStatus===1)return n=dm(t,e),s;{if(!navigator.onLine)throw nt.create("app-offline");const a=mm(s);return n=fm(t,a),a}});return n?await n:i.authToken}async function dm(t,e){let n=await Oc(t.appConfig);for(;n.authToken.requestStatus===1;)await Sc(100),n=await Oc(t.appConfig);const i=n.authToken;return i.requestStatus===0?Ts(t,e):i}function Oc(t){return Fi(t,e=>{if(!Lc(e))throw nt.create("not-registered");const n=e.authToken;return ym(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function fm(t,e){try{const n=await lm(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Ui(t.appConfig,i),n}catch(n){if(wc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Cc(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ui(t.appConfig,i)}throw n}}function Lc(t){return t!==void 0&&t.registrationStatus===2}function pm(t){return t.requestStatus===2&&!gm(t)}function gm(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+qg}function mm(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ym(t){return t.requestStatus===1&&t.requestTime+mc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(t){const e=t,{installationEntry:n,registrationPromise:i}=await Es(e.appConfig);return i?i.catch(console.error):Ts(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wm(t,e=!1){const n=t;return await _m(n.appConfig),(await Ts(n,e)).token}async function _m(t){const{registrationPromise:e}=await Es(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t){if(!t||!t.options)throw bs("App Configuration");if(!t.name)throw bs("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bs(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bs(t){return nt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="installations",Em="installations-internal",Tm=t=>{const e=t.getProvider("app").getImmediate(),n=Im(e),i=Je(e,"platform-logger");return{app:e,appConfig:n,platformLoggerProvider:i,_delete:()=>Promise.resolve()}},bm=t=>{const e=t.getProvider("app").getImmediate(),n=Je(e,Mc).getImmediate();return{getId:()=>vm(n),getToken:r=>wm(n,r)}};function Sm(){Ae(new Ie(Mc,Tm,"PUBLIC")),Ae(new Ie(Em,bm,"PRIVATE"))}Sm();bt($g,gc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="analytics",Am="firebase_id",km="origin",Nm=60*1e3,Cm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new vi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Rm(t,e){const n=document.createElement("script");n.src=`${Pc}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Dm(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Om(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const c=(await xc(n)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(a){he.error(a)}t("config",r,s)}async function Lm(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await xc(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)s.push(l);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(s){he.error(s)}}function Mm(t,e,n,i){async function r(s,o,a){try{s==="event"?await Lm(t,e,n,o,a):s==="config"?await Om(t,e,n,i,o,a):t("set",o)}catch(c){he.error(c)}}return r}function Pm(t,e,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=Mm(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}function xm(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Pc))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},me=new Xe("analytics","Analytics",Um);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=30,Vm=1e3;class $m{constructor(e={},n=Vm){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Uc=new $m;function jm(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function qm(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:jm(i)},s=Cm.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();((e=c.error)===null||e===void 0?void 0:e.message)&&(a=c.error.message)}catch{}throw me.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Bm(t,e=Uc,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw me.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw me.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Gm;return setTimeout(async()=>{a.abort()},n!==void 0?n:Nm),Fc({appId:i,apiKey:r,measurementId:s},o,a,e)}async function Fc(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=Uc){const{appId:s,measurementId:o}=t;try{await Hm(i,e)}catch(a){if(o)return he.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}try{const a=await qm(t);return r.deleteThrottleMetadata(s),a}catch(a){if(!zm(a)){if(r.deleteThrottleMetadata(s),o)return he.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}const c=Number(a.customData.httpStatus)===503?Ia(n,r.intervalMillis,Fm):Ia(n,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return r.setThrottleMetadata(s,u),he.debug(`Calling attemptFetch again in ${c} millis`),Fc(t,u,i,r)}}function Hm(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(s),i(me.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zm(t){if(!(t instanceof Pe)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Gm{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Km(){if($d())try{await jd()}catch(t){return he.warn(me.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return he.warn(me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Wm(t,e,n,i,r,s,o){var a;const c=Bm(t);c.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&he.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>he.error(f)),e.push(c);const u=Km().then(f=>{if(f)return i.getId()}),[l,h]=await Promise.all([c,u]);xm()||Rm(s,l.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[km]="firebase",d.update=!0,h!=null&&(d[Am]=h),r("config",l.measurementId,d),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.app=e}_delete(){return delete In[this.app.options.appId],Promise.resolve()}}let In={},Vc=[];const $c={};let Ss="dataLayer",Xm="gtag",jc,qc,Bc=!1;function Qm(){const t=[];if(Qr()&&t.push("This is a browser extension environment."),qd()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=me.create("invalid-analytics-context",{errorInfo:e});he.warn(n.message)}}function Jm(t,e,n){Qm();const i=t.options.appId;if(!i)throw me.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)he.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw me.create("no-api-key");if(In[i]!=null)throw me.create("already-exists",{id:i});if(!Bc){Dm(Ss);const{wrappedGtag:s,gtagCore:o}=Pm(In,Vc,$c,Ss,Xm);qc=s,jc=o,Bc=!0}return In[i]=Wm(t,Vc,$c,e,jc,Ss,n),new Ym(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});t("event",n,o)}}function ZI(t=is()){t=V(t);const e=Je(t,Vi);return e.isInitialized()?e.getImmediate():ey(t)}function ey(t,e={}){const n=Je(t,Vi);if(n.isInitialized()){const r=n.getImmediate();if(sn(e,n.getOptions()))return r;throw me.create("already-initialized")}return n.initialize({options:e})}function ty(t,e,n,i){t=V(t),Zm(qc,In[t.app.options.appId],e,n,i).catch(r=>he.error(r))}const ny="@firebase/analytics",iy="0.7.1";function ry(){Ae(new Ie(Vi,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Jm(i,r,n)},"PUBLIC")),Ae(new Ie("analytics-internal",t,"PRIVATE")),bt(ny,iy);function t(e){try{const n=e.getProvider(Vi).getImmediate();return{logEvent:(i,r,s)=>ty(n,i,r,s)}}catch(n){throw me.create("interop-component-reg-failed",{reason:n})}}}ry();var sy=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},y,As=As||{},S=sy||self;function $i(){}function ks(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function En(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function oy(t){return Object.prototype.hasOwnProperty.call(t,Ns)&&t[Ns]||(t[Ns]=++ay)}var Ns="closure_uid_"+(1e9*Math.random()>>>0),ay=0;function cy(t,e,n){return t.call.apply(t.bind,arguments)}function uy(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function K(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?K=cy:K=uy,K.apply(null,arguments)}function ji(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function W(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function je(){this.s=this.s,this.o=this.o}var ly=0,hy={};je.prototype.s=!1;je.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),ly!=0)){var t=oy(this);delete hy[t]}};je.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},zc=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function dy(t){e:{var e=iv;const n=t.length,i=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Gc(t){return Array.prototype.concat.apply([],arguments)}function Cs(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function qi(t){return/^[\s\xa0]*$/.test(t)}var Kc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function te(t,e){return t.indexOf(e)!=-1}function Rs(t,e){return t<e?-1:t>e?1:0}var ne;e:{var Wc=S.navigator;if(Wc){var Yc=Wc.userAgent;if(Yc){ne=Yc;break e}}ne=""}function Ds(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Xc(t){const e={};for(const n in t)e[n]=t[n];return e}var Qc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jc(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Qc.length;s++)n=Qc[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Os(t){return Os[" "](t),t}Os[" "]=$i;function fy(t){var e=my;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var py=te(ne,"Opera"),Ot=te(ne,"Trident")||te(ne,"MSIE"),Zc=te(ne,"Edge"),Ls=Zc||Ot,eu=te(ne,"Gecko")&&!(te(ne.toLowerCase(),"webkit")&&!te(ne,"Edge"))&&!(te(ne,"Trident")||te(ne,"MSIE"))&&!te(ne,"Edge"),gy=te(ne.toLowerCase(),"webkit")&&!te(ne,"Edge");function tu(){var t=S.document;return t?t.documentMode:void 0}var Bi;e:{var Ms="",Ps=function(){var t=ne;if(eu)return/rv:([^\);]+)(\)|;)/.exec(t);if(Zc)return/Edge\/([\d\.]+)/.exec(t);if(Ot)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(gy)return/WebKit\/(\S+)/.exec(t);if(py)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ps&&(Ms=Ps?Ps[1]:""),Ot){var xs=tu();if(xs!=null&&xs>parseFloat(Ms)){Bi=String(xs);break e}}Bi=Ms}var my={};function yy(){return fy(function(){let t=0;const e=Kc(String(Bi)).split("."),n=Kc("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=Rs(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Rs(r[2].length==0,s[2].length==0)||Rs(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var Us;if(S.document&&Ot){var nu=tu();Us=nu||parseInt(Bi,10)||void 0}else Us=void 0;var vy=Us,wy=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{S.addEventListener("test",$i,e),S.removeEventListener("test",$i,e)}catch{}return t}();function J(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};function Tn(t,e){if(J.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(eu){e:{try{Os(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_y[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Tn.Z.h.call(this)}}W(Tn,J);var _y={2:"touch",3:"pen",4:"mouse"};Tn.prototype.h=function(){Tn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bn="closure_listenable_"+(1e6*Math.random()|0),Iy=0;function Ey(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++Iy,this.ca=this.fa=!1}function Hi(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function zi(t){this.src=t,this.g={},this.h=0}zi.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Vs(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Ey(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};function Fs(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=Hc(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Hi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vs(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}var $s="closure_lm_"+(1e6*Math.random()|0),js={};function iu(t,e,n,i,r){if(i&&i.once)return su(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)iu(t,e[s],n,i,r);return null}return n=zs(n),t&&t[bn]?t.N(e,n,En(i)?!!i.capture:!!i,r):ru(t,e,n,!1,i,r)}function ru(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=En(r)?!!r.capture:!!r,a=Bs(t);if(a||(t[$s]=a=new zi(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=Ty(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)wy||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(au(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ty(){function t(n){return e.call(t.src,t.listener,n)}var e=by;return t}function su(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)su(t,e[s],n,i,r);return null}return n=zs(n),t&&t[bn]?t.O(e,n,En(i)?!!i.capture:!!i,r):ru(t,e,n,!0,i,r)}function ou(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)ou(t,e[s],n,i,r);else i=En(i)?!!i.capture:!!i,n=zs(n),t&&t[bn]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Vs(s,n,i,r),-1<n&&(Hi(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Bs(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vs(e,n,i,r)),(n=-1<t?e[t]:null)&&qs(n))}function qs(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[bn])Fs(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(au(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Bs(e))?(Fs(n,t),n.h==0&&(n.src=null,e[$s]=null)):Hi(t)}}}function au(t){return t in js?js[t]:js[t]="on"+t}function by(t,e){if(t.ca)t=!0;else{e=new Tn(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&qs(t),t=n.call(i,e)}return t}function Bs(t){return t=t[$s],t instanceof zi?t:null}var Hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function zs(t){return typeof t=="function"?t:(t[Hs]||(t[Hs]=function(e){return t.handleEvent(e)}),t[Hs])}function H(){je.call(this),this.i=new zi(this),this.P=this,this.I=null}W(H,je);H.prototype[bn]=!0;H.prototype.removeEventListener=function(t,e,n,i){ou(this,t,e,n,i)};function Y(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new J(e,t);else if(e instanceof J)e.target=e.target||t;else{var r=e;e=new J(i,t),Jc(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Gi(o,i,!0,e)&&r}if(o=e.g=t,r=Gi(o,i,!0,e)&&r,r=Gi(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Gi(o,i,!1,e)&&r}H.prototype.M=function(){if(H.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Hi(n[i]);delete t.g[e],t.h--}}this.I=null};H.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};H.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Gi(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Fs(t.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var Gs=S.JSON.stringify;function Sy(){var t=uu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ay{constructor(){this.h=this.g=null}add(e,n){const i=cu.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var cu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ky,t=>t.reset());class ky{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ny(t){S.setTimeout(()=>{throw t},0)}function Ks(t,e){Ws||Cy(),Ys||(Ws(),Ys=!0),uu.add(t,e)}var Ws;function Cy(){var t=S.Promise.resolve(void 0);Ws=function(){t.then(Ry)}}var Ys=!1,uu=new Ay;function Ry(){for(var t;t=Sy();){try{t.h.call(t.g)}catch(n){Ny(n)}var e=cu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ys=!1}function Ki(t,e){H.call(this),this.h=t||1,this.g=e||S,this.j=K(this.kb,this),this.l=Date.now()}W(Ki,H);y=Ki.prototype;y.da=!1;y.S=null;y.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Y(this,"tick"),this.da&&(Xs(this),this.start()))}};y.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xs(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}y.M=function(){Ki.Z.M.call(this),Xs(this),delete this.g};function Qs(t,e,n){if(typeof t=="function")n&&(t=K(t,n));else if(t&&typeof t.handleEvent=="function")t=K(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:S.setTimeout(t,e||0)}function lu(t){t.g=Qs(()=>{t.g=null,t.i&&(t.i=!1,lu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Dy extends je{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lu(this)}M(){super.M(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sn(t){je.call(this),this.h=t,this.g={}}W(Sn,je);var hu=[];function du(t,e,n,i){Array.isArray(n)||(n&&(hu[0]=n.toString()),n=hu);for(var r=0;r<n.length;r++){var s=iu(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function fu(t){Ds(t.g,function(e,n){this.g.hasOwnProperty(n)&&qs(e)},t),t.g={}}Sn.prototype.M=function(){Sn.Z.M.call(this),fu(this)};Sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wi(){this.g=!0}Wi.prototype.Aa=function(){this.g=!1};function Oy(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Ly(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function Lt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Py(t,n)+(i?" "+i:"")})}function My(t,e){t.info(function(){return"TIMEOUT: "+e})}Wi.prototype.info=function(){};function Py(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Gs(n)}catch{return e}}var st={},pu=null;function Yi(){return pu=pu||new H}st.Ma="serverreachability";function gu(t){J.call(this,st.Ma,t)}W(gu,J);function An(t){const e=Yi();Y(e,new gu(e,t))}st.STAT_EVENT="statevent";function mu(t,e){J.call(this,st.STAT_EVENT,t),this.stat=e}W(mu,J);function ie(t){const e=Yi();Y(e,new mu(e,t))}st.Na="timingevent";function yu(t,e){J.call(this,st.Na,t),this.size=e}W(yu,J);function kn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){t()},e)}var Xi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},vu={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Js(){}Js.prototype.h=null;function wu(t){return t.h||(t.h=t.i())}function _u(){}var Nn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Zs(){J.call(this,"d")}W(Zs,J);function eo(){J.call(this,"c")}W(eo,J);var to;function Qi(){}W(Qi,Js);Qi.prototype.g=function(){return new XMLHttpRequest};Qi.prototype.i=function(){return{}};to=new Qi;function Cn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Sn(this),this.P=xy,t=Ls?125:void 0,this.W=new Ki(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Iu}function Iu(){this.i=null,this.g="",this.h=!1}var xy=45e3,no={},Ji={};y=Cn.prototype;y.setTimeout=function(t){this.P=t};function io(t,e,n){t.K=1,t.v=ir(Re(e)),t.s=n,t.U=!0,Eu(t,null)}function Eu(t,e){t.F=Date.now(),Rn(t),t.A=Re(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Du(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Iu,t.g=el(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Dy(K(t.Ia,t,t.g),t.O)),du(t.V,t.g,"readystatechange",t.gb),e=t.H?Xc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),An(1),Oy(t.j,t.u,t.A,t.m,t.X,t.s)}y.gb=function(t){t=t.target;const e=this.L;e&&De(t)==3?e.l():this.Ia(t)};y.Ia=function(t){try{if(t==this.g)e:{const l=De(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Ls||this.g&&(this.h.h||this.g.ga()||Bu(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?An(3):An(2)),Zi(this);var n=this.g.ba();this.N=n;t:if(Tu(this)){var i=Bu(this.g);t="";var r=i.length,s=De(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ot(this),Dn(this);var o="";break t}this.h.i=new S.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Ly(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qi(a)){var u=a;break t}}u=null}if(n=u)Lt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ro(this,n);else{this.i=!1,this.o=3,ie(12),ot(this),Dn(this);break e}}this.U?(bu(this,l,o),Ls&&this.i&&l==3&&(du(this.V,this.W,"tick",this.fb),this.W.start())):(Lt(this.j,this.m,o,null),ro(this,o)),l==4&&ot(this),this.i&&!this.I&&(l==4?Xu(this.l,this):(this.i=!1,Rn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ie(12)):(this.o=0,ie(13)),ot(this),Dn(this)}}}catch{}finally{}};function Tu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function bu(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=Uy(t,n),r==Ji){e==4&&(t.o=4,ie(14),i=!1),Lt(t.j,t.m,null,"[Incomplete Response]");break}else if(r==no){t.o=4,ie(15),Lt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Lt(t.j,t.m,r,null),ro(t,r);Tu(t)&&r!=Ji&&r!=no&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ie(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mo(e),e.L=!0,ie(11))):(Lt(t.j,t.m,n,"[Invalid Chunked Response]"),ot(t),Dn(t))}y.fb=function(){if(this.g){var t=De(this.g),e=this.g.ga();this.C<e.length&&(Zi(this),bu(this,t,e),this.i&&t!=4&&Rn(this))}};function Uy(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Ji:(n=Number(e.substring(n,i)),isNaN(n)?no:(i+=1,i+n>e.length?Ji:(e=e.substr(i,n),t.C=i+n,e)))}y.cancel=function(){this.I=!0,ot(this)};function Rn(t){t.Y=Date.now()+t.P,Su(t,t.P)}function Su(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=kn(K(t.eb,t),e)}function Zi(t){t.B&&(S.clearTimeout(t.B),t.B=null)}y.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(My(this.j,this.A),this.K!=2&&(An(3),ie(17)),ot(this),this.o=2,Dn(this)):Su(this,this.Y-t)};function Dn(t){t.l.G==0||t.I||Xu(t.l,t)}function ot(t){Zi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Xs(t.W),fu(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ro(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ao(n.i,t))){if(n.I=t.N,!t.J&&ao(n.i,t)&&n.G==3){try{var i=n.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ur(n),ar(n);else break e;go(n),ie(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=kn(K(n.ab,n),6e3));if(1>=Mu(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ut(n,11)}else if((t.J||n.g==t)&&ur(n),!qi(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=i.i;!s.g&&(te(g,"spdy")||te(g,"quic")||te(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(co(s,s.h),s.h=null))}if(i.D){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(i.sa=_,U(i.F,i.D,_))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Zu(i,i.H?i.la:null,i.W),o.J){Pu(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(Zi(a),Rn(a)),i.g=o}else Wu(i);0<n.l.length&&cr(n)}else u[0]!="stop"&&u[0]!="close"||ut(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ut(n,7):fo(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}An(4)}catch{}}function Fy(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(ks(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function so(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ks(t)||typeof t=="string")zc(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(ks(t)||typeof t=="string"){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=Fy(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function Mt(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Mt)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}y=Mt.prototype;y.R=function(){oo(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};y.T=function(){return oo(this),this.g.concat()};function oo(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];at(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],at(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}y.get=function(t,e){return at(this.h,t)?this.h[t]:e};y.set=function(t,e){at(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};y.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};function at(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Au=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Vy(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ct(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ct){this.g=e!==void 0?e:t.g,er(this,t.j),this.s=t.s,tr(this,t.i),nr(this,t.m),this.l=t.l,e=t.h;var n=new Mn;n.i=e.i,e.g&&(n.g=new Mt(e.g),n.h=e.h),ku(this,n),this.o=t.o}else t&&(n=String(t).match(Au))?(this.g=!!e,er(this,n[1]||"",!0),this.s=On(n[2]||""),tr(this,n[3]||"",!0),nr(this,n[4]),this.l=On(n[5]||"",!0),ku(this,n[6]||"",!0),this.o=On(n[7]||"")):(this.g=!!e,this.h=new Mn(null,this.g))}ct.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ln(e,Nu,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ln(e,Nu,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ln(n,n.charAt(0)=="/"?Hy:By,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ln(n,Gy)),t.join("")};function Re(t){return new ct(t)}function er(t,e,n){t.j=n?On(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tr(t,e,n){t.i=n?On(e,!0):e}function nr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ku(t,e,n){e instanceof Mn?(t.h=e,Ky(t.h,t.g)):(n||(e=Ln(e,zy)),t.h=new Mn(e,t.g))}function U(t,e,n){t.h.set(e,n)}function ir(t){return U(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $y(t){return t instanceof ct?Re(t):new ct(t,void 0)}function jy(t,e,n,i){var r=new ct(null,void 0);return t&&er(r,t),e&&tr(r,e),n&&nr(r,n),i&&(r.l=i),r}function On(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ln(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qy),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qy(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Nu=/[#\/\?@]/g,By=/[#\?:]/g,Hy=/[#\?]/g,zy=/[#\?@]/g,Gy=/#/g;function Mn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qe(t){t.g||(t.g=new Mt,t.h=0,t.i&&Vy(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}y=Mn.prototype;y.add=function(t,e){qe(this),this.i=null,t=Pt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Cu(t,e){qe(t),e=Pt(t,e),at(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,at(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&oo(t)))}function Ru(t,e){return qe(t),e=Pt(t,e),at(t.g.h,e)}y.forEach=function(t,e){qe(this),this.g.forEach(function(n,i){zc(n,function(r){t.call(e,r,i,this)},this)},this)};y.T=function(){qe(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n};y.R=function(t){qe(this);var e=[];if(typeof t=="string")Ru(this,t)&&(e=Gc(e,this.g.get(Pt(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Gc(e,t[n])}return e};y.set=function(t,e){return qe(this),this.i=null,t=Pt(this,t),Ru(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};y.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Du(t,e,n){Cu(t,e),0<n.length&&(t.i=null,t.g.set(Pt(t,e),Cs(n)),t.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;i[s]!==""&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};function Pt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ky(t,e){e&&!t.j&&(qe(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(Cu(this,i),Du(this,r,n))},t)),t.j=e}var Wy=class{constructor(t,e){this.h=t,this.g=e}};function Ou(t){this.l=t||Yy,S.PerformanceNavigationTiming?(t=S.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(S.g&&S.g.Ea&&S.g.Ea()&&S.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Yy=10;function Lu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Mu(t){return t.h?1:t.g?t.g.size:0}function ao(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function co(t,e){t.g?t.g.add(e):t.h=e}function Pu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ou.prototype.cancel=function(){if(this.i=xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Cs(t.i)}function uo(){}uo.prototype.stringify=function(t){return S.JSON.stringify(t,void 0)};uo.prototype.parse=function(t){return S.JSON.parse(t,void 0)};function Xy(){this.g=new uo}function Qy(t,e,n){const i=n||"";try{so(t,function(r,s){let o=r;En(r)&&(o=Gs(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Jy(t,e){const n=new Wi;if(S.Image){const i=new Image;i.onload=ji(rr,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ji(rr,n,i,"TestLoadImage: error",!1,e),i.onabort=ji(rr,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ji(rr,n,i,"TestLoadImage: timeout",!1,e),S.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function rr(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Pn(t){this.l=t.$b||null,this.j=t.ib||!1}W(Pn,Js);Pn.prototype.g=function(){return new sr(this.l,this.j)};Pn.prototype.i=function(t){return function(){return t}}({});function sr(t,e){H.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=lo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}W(sr,H);var lo=0;y=sr.prototype;y.open=function(t,e){if(this.readyState!=lo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Un(this)};y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||S).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xn(this)),this.readyState=lo};y.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof S.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Uu(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Uu(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}y.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xn(this):Un(this),this.readyState==3&&Uu(this)}};y.Ua=function(t){this.g&&(this.response=this.responseText=t,xn(this))};y.Ta=function(t){this.g&&(this.response=t,xn(this))};y.ha=function(){this.g&&xn(this)};function xn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Un(t)}y.setRequestHeader=function(t,e){this.v.append(t,e)};y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Zy=S.JSON.parse;function $(t){H.call(this),this.headers=new Mt,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fu,this.K=this.L=!1}W($,H);var Fu="",ev=/^https?$/i,tv=["POST","PUT"];y=$.prototype;y.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():to.g(),this.C=this.u?wu(this.u):wu(to),this.g.onreadystatechange=K(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Vu(this,s);return}t=n||"";const r=new Mt(this.headers);i&&so(i,function(s,o){r.set(o,s)}),i=dy(r.T()),n=S.FormData&&t instanceof S.FormData,!(0<=Hc(tv,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{qu(this),0<this.B&&((this.K=nv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=K(this.pa,this)):this.A=Qs(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Vu(this,s)}};function nv(t){return Ot&&yy()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function iv(t){return t.toLowerCase()=="content-type"}y.pa=function(){typeof As!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Y(this,"timeout"),this.abort(8))};function Vu(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$u(t),or(t)}function $u(t){t.D||(t.D=!0,Y(t,"complete"),Y(t,"error"))}y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Y(this,"complete"),Y(this,"abort"),or(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),or(this,!0)),$.Z.M.call(this)};y.Fa=function(){this.s||(this.F||this.v||this.l?ju(this):this.cb())};y.cb=function(){ju(this)};function ju(t){if(t.h&&typeof As!="undefined"&&(!t.C[1]||De(t)!=4||t.ba()!=2)){if(t.v&&De(t)==4)Qs(t.Fa,0,t);else if(Y(t,"readystatechange"),De(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(Au)[1]||null;if(!r&&S.self&&S.self.location){var s=S.self.location.protocol;r=s.substr(0,s.length-1)}i=!ev.test(r?r.toLowerCase():"")}n=i}if(n)Y(t,"complete"),Y(t,"success");else{t.m=6;try{var o=2<De(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",$u(t)}}finally{or(t)}}}}function or(t,e){if(t.g){qu(t);const n=t.g,i=t.C[0]?$i:null;t.g=null,t.C=null,e||Y(t,"ready");try{n.onreadystatechange=i}catch{}}}function qu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(S.clearTimeout(t.A),t.A=null)}function De(t){return t.g?t.g.readyState:0}y.ba=function(){try{return 2<De(this)?this.g.status:-1}catch{return-1}};y.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Zy(e)}};function Bu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}y.Da=function(){return this.m};y.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function rv(t){let e="";return Ds(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function ho(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=rv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):U(t,e,n))}function Fn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Hu(t){this.za=0,this.l=[],this.h=new Wi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Fn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Fn("baseRetryDelayMs",5e3,t),this.$a=Fn("retryDelaySeedMs",1e4,t),this.Ya=Fn("forwardChannelMaxRetries",2,t),this.ra=Fn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ou(t&&t.concurrentRequestLimit),this.Ca=new Xy,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}y=Hu.prototype;y.ma=8;y.G=1;function fo(t){if(zu(t),t.G==3){var e=t.V++,n=Re(t.F);U(n,"SID",t.J),U(n,"RID",e),U(n,"TYPE","terminate"),Vn(t,n),e=new Cn(t,t.h,e,void 0),e.K=2,e.v=ir(Re(n)),n=!1,S.navigator&&S.navigator.sendBeacon&&(n=S.navigator.sendBeacon(e.v.toString(),"")),!n&&S.Image&&(new Image().src=e.v,n=!0),n||(e.g=el(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Rn(e)}Ju(t)}y.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ar(t){t.g&&(mo(t),t.g.cancel(),t.g=null)}function zu(t){ar(t),t.u&&(S.clearTimeout(t.u),t.u=null),ur(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&S.clearTimeout(t.m),t.m=null)}function po(t,e){t.l.push(new Wy(t.Za++,e)),t.G==3&&cr(t)}function cr(t){Lu(t.i)||t.m||(t.m=!0,Ks(t.Ha,t),t.C=0)}function sv(t,e){return Mu(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=kn(K(t.Ha,t,e),Qu(t,t.C)),t.C++,!0)}y.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Cn(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Xc(s),Jc(s,this.P)):s=this.P),this.o===null&&(r.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var i=this.l[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ku(this,r,e),n=Re(this.F),U(n,"RID",t),U(n,"CVER",22),this.D&&U(n,"X-HTTP-Session-Id",this.D),Vn(this,n),this.o&&s&&ho(n,this.o,s),co(this.i,r),this.Ra&&U(n,"TYPE","init"),this.ja?(U(n,"$req",e),U(n,"SID","null"),r.$=!0,io(r,n,null)):io(r,n,e),this.G=2}}else this.G==3&&(t?Gu(this,t):this.l.length==0||Lu(this.i)||Gu(this))};function Gu(t,e){var n;e?n=e.m:n=t.V++;const i=Re(t.F);U(i,"SID",t.J),U(i,"RID",n),U(i,"AID",t.U),Vn(t,i),t.o&&t.s&&ho(i,t.o,t.s),n=new Cn(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Ku(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),co(t.i,n),io(n,i,e)}function Vn(t,e){t.j&&so({},function(n,i){U(e,i,n)})}function Ku(t,e,n){n=Math.min(t.l.length,n);var i=t.j?K(t.j.Oa,t.j,t):null;e:{var r=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=s,0>u)s=Math.max(0,r[c].h-100),a=!1;else try{Qy(l,o,"req"+u+"_")}catch{i&&i(l)}}if(a){i=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,i}function Wu(t){t.g||t.u||(t.Y=1,Ks(t.Ga,t),t.A=0)}function go(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=kn(K(t.Ga,t),Qu(t,t.A)),t.A++,!0)}y.Ga=function(){if(this.u=null,Yu(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=kn(K(this.bb,this),t)}};y.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ie(10),ar(this),Yu(this))};function mo(t){t.B!=null&&(S.clearTimeout(t.B),t.B=null)}function Yu(t){t.g=new Cn(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Re(t.oa);U(e,"RID","rpc"),U(e,"SID",t.J),U(e,"CI",t.N?"0":"1"),U(e,"AID",t.U),Vn(t,e),U(e,"TYPE","xmlhttp"),t.o&&t.s&&ho(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ir(Re(e)),n.s=null,n.U=!0,Eu(n,t)}y.ab=function(){this.v!=null&&(this.v=null,ar(this),go(this),ie(19))};function ur(t){t.v!=null&&(S.clearTimeout(t.v),t.v=null)}function Xu(t,e){var n=null;if(t.g==e){ur(t),mo(t),t.g=null;var i=2}else if(ao(t.i,e))n=e.D,Pu(t.i,e),i=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=Yi(),Y(i,new yu(i,n,e,r)),cr(t)}else Wu(t);else if(r=e.o,r==3||r==0&&0<t.I||!(i==1&&sv(t,e)||i==2&&go(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:ut(t,5);break;case 4:ut(t,10);break;case 3:ut(t,6);break;default:ut(t,2)}}}function Qu(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ut(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var i=K(t.jb,t);n||(n=new ct("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||er(n,"https"),ir(n)),Jy(n.toString(),i)}else ie(2);t.G=0,t.j&&t.j.va(e),Ju(t),zu(t)}y.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ie(2)):(this.h.info("Failed to ping google.com"),ie(1))};function Ju(t){t.G=0,t.I=-1,t.j&&((xu(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Cs(t.l),t.l.length=0),t.j.ua())}function Zu(t,e,n){let i=$y(n);if(i.i!="")e&&tr(i,e+"."+i.i),nr(i,i.m);else{const r=S.location;i=jy(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&Ds(t.aa,function(r,s){U(i,s,r)}),e=t.D,n=t.sa,e&&n&&U(i,e,n),U(i,"VER",t.ma),Vn(t,i),i}function el(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new $(new Pn({ib:!0})):new $(t.qa),e.L=t.H,e}function tl(){}y=tl.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Oa=function(){};function lr(){if(Ot&&!(10<=Number(vy)))throw Error("Environmental error: no available transport.")}lr.prototype.g=function(t,e){return new de(t,e)};function de(t,e){H.call(this),this.g=new Hu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!qi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xt(this)}W(de,H);de.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ks(K(t.hb,t,e))),ie(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Zu(t,null,t.W),cr(t)};de.prototype.close=function(){fo(this.g)};de.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,po(this.g,e)}else this.v?(e={},e.__data__=Gs(t),po(this.g,e)):po(this.g,t)};de.prototype.M=function(){this.g.j=null,delete this.j,fo(this.g),delete this.g,de.Z.M.call(this)};function nl(t){Zs.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}W(nl,Zs);function il(){eo.call(this),this.status=1}W(il,eo);function xt(t){this.g=t}W(xt,tl);xt.prototype.xa=function(){Y(this.g,"a")};xt.prototype.wa=function(t){Y(this.g,new nl(t))};xt.prototype.va=function(t){Y(this.g,new il(t))};xt.prototype.ua=function(){Y(this.g,"b")};lr.prototype.createWebChannel=lr.prototype.g;de.prototype.send=de.prototype.u;de.prototype.open=de.prototype.m;de.prototype.close=de.prototype.close;Xi.NO_ERROR=0;Xi.TIMEOUT=8;Xi.HTTP_ERROR=6;vu.COMPLETE="complete";_u.EventType=Nn;Nn.OPEN="a";Nn.CLOSE="b";Nn.ERROR="c";Nn.MESSAGE="d";H.prototype.listen=H.prototype.N;$.prototype.listenOnce=$.prototype.O;$.prototype.getLastError=$.prototype.La;$.prototype.getLastErrorCode=$.prototype.Da;$.prototype.getStatus=$.prototype.ba;$.prototype.getResponseJson=$.prototype.Qa;$.prototype.getResponseText=$.prototype.ga;$.prototype.send=$.prototype.ea;var ov=function(){return new lr},av=function(){return Yi()},yo=Xi,cv=vu,uv=st,rl={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},lv=Pn,hr=_u,hv=$;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oe.UNAUTHENTICATED=new oe(null),oe.GOOGLE_CREDENTIALS=new oe("google-credentials-uid"),oe.FIRST_PARTY=new oe("first-party-uid"),oe.MOCK_USER=new oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut="9.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new vi("@firebase/firestore");function sl(){return lt.logLevel}function E(t,...e){if(lt.logLevel<=R.DEBUG){const n=e.map(vo);lt.debug(`Firestore (${Ut}): ${t}`,...n)}}function Be(t,...e){if(lt.logLevel<=R.ERROR){const n=e.map(vo);lt.error(`Firestore (${Ut}): ${t}`,...n)}}function ol(t,...e){if(lt.logLevel<=R.WARN){const n=e.map(vo);lt.warn(`Firestore (${Ut}): ${t}`,...n)}}function vo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${Ut}) INTERNAL ASSERTION FAILED: `+t;throw Be(e),new Error(e)}function D(t,e){t||b()}function A(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class fv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(oe.UNAUTHENTICATED))}shutdown(){}}class pv{constructor(e){this.t=e,this.currentUser=oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new Oe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Oe,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{E("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Oe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(E("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(D(typeof i.accessToken=="string"),new dv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return D(e===null||typeof e=="string"),new oe(e)}}class gv{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=oe.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class mv{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new gv(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.g(i),this.p=i=>n.writeSequenceNumber(i))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wo.T=-1;class al{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=yv(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function O(t,e){return t<e?-1:t>e?1:0}function Ft(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new v(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new v(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new v(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new v(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new fe(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.timestamp=e}static fromTimestamp(e){return new C(e)}static min(){return new C(new fe(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ht(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ul(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,i){n===void 0?n=0:n>e.length&&b(),i===void 0?i=e.length-n:i>e.length-n&&b(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return $n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $n?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class F extends $n{construct(e,n,i){return new F(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new v(p.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new F(n)}static emptyPath(){return new F([])}}const vv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends $n{construct(e,n,i){return new ae(e,n,i)}static isValidIdentifier(e){return vv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ae(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new v(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new v(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new v(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(n)}static emptyPath(){return new ae([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.fields=e,e.sort(ae.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ft(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Z(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new Z(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Z.EMPTY_BYTE_STRING=new Z("");const wv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function He(t){if(D(!!t),typeof t=="string"){let e=0;const n=wv.exec(t);if(D(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:j(t.seconds),nanos:j(t.nanos)}}function j(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vt(t){return typeof t=="string"?Z.fromBase64String(t):Z.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hl(t){const e=t.mapValue.fields.__previous_value__;return ll(e)?hl(e):e}function qn(t){const e=He(t.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t){return t==null}function dr(t){return t===0&&1/t==-1/0}function _v(t){return typeof t=="number"&&Number.isInteger(t)&&!dr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(F.fromString(e))}static fromName(e){return new T(F.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&F.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return F.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new F(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ll(t)?4:10:b()}function Se(t,e){const n=ft(t);if(n!==ft(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qn(t).isEqual(qn(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=He(i.timestampValue),o=He(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Vt(i.bytesValue).isEqual(Vt(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return j(i.geoPointValue.latitude)===j(r.geoPointValue.latitude)&&j(i.geoPointValue.longitude)===j(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return j(i.integerValue)===j(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=j(i.doubleValue),o=j(r.doubleValue);return s===o?dr(s)===dr(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ft(t.arrayValue.values||[],e.arrayValue.values||[],Se);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(cl(s)!==cl(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Se(s[a],o[a])))return!1;return!0}(t,e);default:return b()}}function Bn(t,e){return(t.values||[]).find(n=>Se(n,e))!==void 0}function $t(t,e){const n=ft(t),i=ft(e);if(n!==i)return O(n,i);switch(n){case 0:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=j(r.integerValue||r.doubleValue),a=j(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return dl(t.timestampValue,e.timestampValue);case 4:return dl(qn(t),qn(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(r,s){const o=Vt(r),a=Vt(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=O(o[c],a[c]);if(u!==0)return u}return O(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=O(j(r.latitude),j(s.latitude));return o!==0?o:O(j(r.longitude),j(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=$t(o[c],a[c]);if(u)return u}return O(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){const o=r.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=O(a[l],u[l]);if(h!==0)return h;const d=$t(o[a[l]],c[u[l]]);if(d!==0)return d}return O(a.length,u.length)}(t.mapValue,e.mapValue);default:throw b()}}function dl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return O(t,e);const n=He(t),i=He(e),r=O(n.seconds,i.seconds);return r!==0?r:O(n.nanos,i.nanos)}function _o(t){return Io(t)}function Io(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=He(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Vt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,T.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Io(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Io(i.fields[a])}`;return s+"}"}(t.mapValue):b();var e,n}function fl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Eo(t){return!!t&&"integerValue"in t}function To(t){return!!t&&"arrayValue"in t}function pl(t){return!!t&&"nullValue"in t}function gl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fr(t){return!!t&&"mapValue"in t}function Hn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ht(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Hn(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hn(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.value=e}static empty(){return new ce({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!fr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hn(n)}setAll(e){let n=ae.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Hn(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());fr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Se(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];fr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){ht(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new ce(Hn(this.value))}}function ml(t){const e=[];return ht(t.fields,(n,i)=>{const r=new ae([n]);if(fr(i)){const s=ml(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new jn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n,i,r,s){this.key=e,this.documentType=n,this.version=i,this.data=r,this.documentState=s}static newInvalidDocument(e){return new z(e,0,C.min(),ce.empty(),0)}static newFoundDocument(e,n,i){return new z(e,1,n,i,0)}static newNoDocument(e,n){return new z(e,2,n,ce.empty(),0)}static newUnknownDocument(e,n){return new z(e,3,n,ce.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ce.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof z&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new z(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function yl(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Iv(t,e,n,i,r,s,o)}function bo(t){const e=A(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Tv(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),dt(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=pr(e.startAt)),e.endAt&&(n+="|ub:",n+=pr(e.endAt)),e.A=n}return e.A}function Ev(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${_o(i.value)}`;var i}).join(", ")}]`),dt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+pr(t.startAt)),t.endAt&&(e+=", endAt: "+pr(t.endAt)),`Target(${e})`}function So(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Dv(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!Se(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_l(t.startAt,e.startAt)&&_l(t.endAt,e.endAt)}function Ao(t){return T.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class re extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,i):new bv(e,n,i):n==="array-contains"?new kv(e,i):n==="in"?new Nv(e,i):n==="not-in"?new Cv(e,i):n==="array-contains-any"?new Rv(e,i):new re(e,n,i)}static R(e,n,i){return n==="in"?new Sv(e,i):new Av(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P($t(n,this.value)):n!==null&&ft(this.value)===ft(n)&&this.P($t(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Tv(t){return t.field.canonicalString()+t.op.toString()+_o(t.value)}class bv extends re{constructor(e,n,i){super(e,n,i),this.key=T.fromName(i.referenceValue)}matches(e){const n=T.comparator(e.key,this.key);return this.P(n)}}class Sv extends re{constructor(e,n){super(e,"in",n),this.keys=vl("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Av extends re{constructor(e,n){super(e,"not-in",n),this.keys=vl("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vl(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>T.fromName(i.referenceValue))}class kv extends re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return To(n)&&Bn(n.arrayValue,this.value)}}class Nv extends re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bn(this.value.arrayValue,n)}}class Cv extends re{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Bn(this.value.arrayValue,n)}}class Rv extends re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!To(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Bn(this.value.arrayValue,i))}}class ko{constructor(e,n){this.position=e,this.before=n}}function pr(t){return`${t.before?"b":"a"}:${t.position.map(e=>_o(e)).join(",")}`}class zn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Dv(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function wl(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=T.comparator(T.fromName(o.referenceValue),n.key):i=$t(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return t.before?i<=0:i<0}function _l(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Se(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function Ov(t,e,n,i,r,s,o,a){return new Gn(t,e,n,i,r,s,o,a)}function No(t){return new Gn(t)}function gr(t){return!dt(t.limit)&&t.limitType==="F"}function mr(t){return!dt(t.limit)&&t.limitType==="L"}function Il(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function El(t){for(const e of t.filters)if(e.v())return e.field;return null}function Tl(t){return t.collectionGroup!==null}function Kn(t){const e=A(t);if(e.V===null){e.V=[];const n=El(e),i=Il(e);if(n!==null&&i===null)n.isKeyField()||e.V.push(new zn(n)),e.V.push(new zn(ae.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new zn(ae.keyField(),s))}}}return e.V}function pt(t){const e=A(t);if(!e.S)if(e.limitType==="F")e.S=yl(e.path,e.collectionGroup,Kn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Kn(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new zn(s.field,o))}const i=e.endAt?new ko(e.endAt.position,!e.endAt.before):null,r=e.startAt?new ko(e.startAt.position,!e.startAt.before):null;e.S=yl(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e.S}function Lv(t,e,n){return new Gn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yr(t,e){return So(pt(t),pt(e))&&t.limitType===e.limitType}function bl(t){return`${bo(pt(t))}|lt:${t.limitType}`}function Co(t){return`Query(target=${Ev(pt(t))}; limitType=${t.limitType})`}function vr(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):T.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!wl(n.startAt,Kn(n),i)||n.endAt&&wl(n.endAt,Kn(n),i))}(t,e)}function Sl(t){return(e,n)=>{let i=!1;for(const r of Kn(t)){const s=Mv(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function Mv(t,e,n){const i=t.field.isKeyField()?T.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),c=o.data.field(r);return a!==null&&c!==null?$t(a,c):b()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dr(e)?"-0":e}}function kl(t){return{integerValue:""+t}}function Pv(t,e){return _v(e)?kl(e):Al(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this._=void 0}}function xv(t,e,n){return t instanceof _r?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof jt?Cl(t,e):t instanceof qt?Rl(t,e):function(i,r){const s=Nl(i,r),o=Dl(s)+Dl(i.C);return Eo(s)&&Eo(i.C)?kl(o):Al(i.N,o)}(t,e)}function Uv(t,e,n){return t instanceof jt?Cl(t,e):t instanceof qt?Rl(t,e):n}function Nl(t,e){return t instanceof Ir?Eo(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class _r extends wr{}class jt extends wr{constructor(e){super(),this.elements=e}}function Cl(t,e){const n=Ol(e);for(const i of t.elements)n.some(r=>Se(r,i))||n.push(i);return{arrayValue:{values:n}}}class qt extends wr{constructor(e){super(),this.elements=e}}function Rl(t,e){let n=Ol(e);for(const i of t.elements)n=n.filter(r=>!Se(r,i));return{arrayValue:{values:n}}}class Ir extends wr{constructor(e,n){super(),this.N=e,this.C=n}}function Dl(t){return j(t.integerValue||t.doubleValue)}function Ol(t){return To(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this.field=e,this.transform=n}}function Fv(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof jt&&i instanceof jt||n instanceof qt&&i instanceof qt?Ft(n.elements,i.elements,Se):n instanceof Ir&&i instanceof Ir?Se(n.C,i.C):n instanceof _r&&i instanceof _r}(t.transform,e.transform)}class Vv{constructor(e,n){this.version=e,this.transformResults=n}}class ve{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ve}static exists(e){return new ve(void 0,e)}static updateTime(e){return new ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Er(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Tr{}function $v(t,e,n){t instanceof br?function(i,r,s){const o=i.value.clone(),a=Ul(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof gt?function(i,r,s){if(!Er(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=Ul(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(xl(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ro(t,e,n){t instanceof br?function(i,r,s){if(!Er(i.precondition,r))return;const o=i.value.clone(),a=Fl(i.fieldTransforms,s,r);o.setAll(a),r.convertToFoundDocument(Pl(r),o).setHasLocalMutations()}(t,e,n):t instanceof gt?function(i,r,s){if(!Er(i.precondition,r))return;const o=Fl(i.fieldTransforms,s,r),a=r.data;a.setAll(xl(i)),a.setAll(o),r.convertToFoundDocument(Pl(r),a).setHasLocalMutations()}(t,e,n):function(i,r){Er(i.precondition,r)&&r.convertToNoDocument(C.min())}(t,e)}function jv(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=Nl(i.transform,r||null);s!=null&&(n==null&&(n=ce.empty()),n.set(i.field,s))}return n||null}function Ml(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ft(n,i,(r,s)=>Fv(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Pl(t){return t.isFoundDocument()?t.version:C.min()}class br extends Tr{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}}class gt extends Tr{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}}function xl(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Ul(t,e,n){const i=new Map;D(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Uv(o,a,n[r]))}return i}function Fl(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,xv(s,o,e))}return i}class Vl extends Tr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class $l extends Tr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q,N;function jl(t){switch(t){case p.OK:return b();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0;default:return b()}}function ql(t){if(t===void 0)return Be("GRPC error has no .code"),p.UNKNOWN;switch(t){case q.OK:return p.OK;case q.CANCELLED:return p.CANCELLED;case q.UNKNOWN:return p.UNKNOWN;case q.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case q.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case q.INTERNAL:return p.INTERNAL;case q.UNAVAILABLE:return p.UNAVAILABLE;case q.UNAUTHENTICATED:return p.UNAUTHENTICATED;case q.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case q.NOT_FOUND:return p.NOT_FOUND;case q.ALREADY_EXISTS:return p.ALREADY_EXISTS;case q.PERMISSION_DENIED:return p.PERMISSION_DENIED;case q.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case q.ABORTED:return p.ABORTED;case q.OUT_OF_RANGE:return p.OUT_OF_RANGE;case q.UNIMPLEMENTED:return p.UNIMPLEMENTED;case q.DATA_LOSS:return p.DATA_LOSS;default:return b()}}(N=q||(q={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,n){this.comparator=e,this.root=n||X.EMPTY}insert(e,n){return new ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,X.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,X.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sr(this.root,e,this.comparator,!0)}}class Sr{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class X{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:X.RED,this.left=r!=null?r:X.EMPTY,this.right=s!=null?s:X.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new X(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return X.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return X.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}X.EMPTY=null,X.RED=!0,X.BLACK=!1;X.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,i,r){return this}insert(t,e,n){return new X(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bl(this.data.getIterator())}getIteratorFrom(e){return new Bl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Q)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Q(this.comparator);return n.data=e,n}}class Bl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=new ee(T.comparator);function mt(){return Bv}const Hv=new ee(T.comparator);function Do(){return Hv}const zv=new ee(T.comparator);function Gv(){return zv}const Kv=new Q(T.comparator);function P(...t){let e=Kv;for(const n of t)e=e.add(n);return e}const Wv=new Q(O);function Hl(){return Wv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,Wn.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ar(C.min(),i,Hl(),mt(),P())}}class Wn{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Wn(Z.EMPTY_BYTE_STRING,n,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,i,r){this.k=e,this.removedTargetIds=n,this.key=i,this.$=r}}class zl{constructor(e,n){this.targetId=e,this.O=n}}class Gl{constructor(e,n,i=Z.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Kl{constructor(){this.F=0,this.M=Yl(),this.L=Z.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=P(),n=P(),i=P();return this.M.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:b()}}),new Wn(this.L,this.B,e,n,i)}G(){this.U=!1,this.M=Yl()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Yv{constructor(e){this.tt=e,this.et=new Map,this.nt=mt(),this.st=Wl(),this.it=new Q(O)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ct(e){this.forEachTarget(e,n=>{const i=this.ut(n);switch(e.state){case 0:this.ht(n)&&i.j(e.resumeToken);break;case 1:i.X(),i.q||i.G(),i.j(e.resumeToken);break;case 2:i.X(),i.q||this.removeTarget(n);break;case 3:this.ht(n)&&(i.Z(),i.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),i.j(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((i,r)=>{this.ht(r)&&n(r)})}ft(e){const n=e.targetId,i=e.O.count,r=this.dt(n);if(r){const s=r.target;if(Ao(s))if(i===0){const o=new T(s.path);this.at(n,o,z.newNoDocument(o,C.min()))}else D(i===1);else this.wt(n)!==i&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&Ao(a.target)){const c=new T(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.at(o,c,z.newNoDocument(c,e))}s.K&&(n.set(o,s.W()),s.G())}});let i=P();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.dt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))});const r=new Ar(e,n,this.it,this.nt,i);return this.nt=mt(),this.st=Wl(),this.it=new Q(O),r}ot(e,n){if(!this.ht(e))return;const i=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,i),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}at(e,n,i){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,n)?r.H(n,1):r.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),i&&(this.nt=this.nt.insert(n,i))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new Kl,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new Q(O),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||E("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new Kl),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function Wl(){return new ee(T.comparator)}function Yl(){return new ee(T.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Qv=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Jv{constructor(e,n){this.databaseId=e,this.D=n}}function Nr(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xl(t,e){return t.D?e.toBase64():e.toUint8Array()}function Zv(t,e){return Nr(t,e.toTimestamp())}function we(t){return D(!!t),C.fromTimestamp(function(e){const n=He(e);return new fe(n.seconds,n.nanos)}(t))}function Oo(t,e){return function(n){return new F(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ql(t){const e=F.fromString(t);return D(rh(e)),e}function Cr(t,e){return Oo(t.databaseId,e.path)}function Yn(t,e){const n=Ql(e);if(n.get(1)!==t.databaseId.projectId)throw new v(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new v(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new T(Jl(n))}function Lo(t,e){return Oo(t.databaseId,e)}function ew(t){const e=Ql(t);return e.length===4?F.emptyPath():Jl(e)}function Xn(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jl(t){return D(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Zl(t,e,n){return{name:Cr(t,e),fields:n.value.mapValue.fields}}function tw(t,e){return"found"in e?function(n,i){D(!!i.found),i.found.name,i.found.updateTime;const r=Yn(n,i.found.name),s=we(i.found.updateTime),o=new ce({mapValue:{fields:i.found.fields}});return z.newFoundDocument(r,s,o)}(t,e):"missing"in e?function(n,i){D(!!i.missing),D(!!i.readTime);const r=Yn(n,i.missing),s=we(i.readTime);return z.newNoDocument(r,s)}(t,e):b()}function nw(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(c,u){return c.D?(D(u===void 0||typeof u=="string"),Z.fromBase64String(u||"")):(D(u===void 0||u instanceof Uint8Array),Z.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?p.UNKNOWN:ql(c.code);return new v(u,c.message||"")}(o);n=new Gl(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Yn(t,i.document.name),s=we(i.document.updateTime),o=new ce({mapValue:{fields:i.document.fields}}),a=z.newFoundDocument(r,s,o),c=i.targetIds||[],u=i.removedTargetIds||[];n=new kr(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Yn(t,i.document),s=i.readTime?we(i.readTime):C.min(),o=z.newNoDocument(r,s),a=i.removedTargetIds||[];n=new kr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Yn(t,i.document),s=i.removedTargetIds||[];n=new kr([],s,r,null)}else{if(!("filter"in e))return b();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new qv(r),o=i.targetId;n=new zl(o,s)}}return n}function eh(t,e){let n;if(e instanceof br)n={update:Zl(t,e.key,e.value)};else if(e instanceof Vl)n={delete:Cr(t,e.key)};else if(e instanceof gt)n={update:Zl(t,e.key,e.data),updateMask:dw(e.fieldMask)};else{if(!(e instanceof $l))return b();n={verify:Cr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof _r)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof jt)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof qt)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ir)return{fieldPath:s.field.canonicalString(),increment:o.C};throw b()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Zv(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:b()}(t,e.precondition)),n}function iw(t,e){return t&&t.length>0?(D(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?we(i.updateTime):we(r);return s.isEqual(C.min())&&(s=we(r)),new Vv(s,i.transformResults||[])}(n,e))):[]}function rw(t,e){return{documents:[Lo(t,e.path)]}}function sw(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Lo(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Lo(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(a){if(a.length===0)return;const c=a.map(u=>function(l){if(l.op==="=="){if(gl(l.value))return{unaryFilter:{field:Bt(l.field),op:"IS_NAN"}};if(pl(l.value))return{unaryFilter:{field:Bt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(gl(l.value))return{unaryFilter:{field:Bt(l.field),op:"IS_NOT_NAN"}};if(pl(l.value))return{unaryFilter:{field:Bt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bt(l.field),op:uw(l.op),value:l.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(a){if(a.length!==0)return a.map(c=>function(u){return{field:Bt(u.field),direction:cw(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,c){return a.D||dt(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=nh(e.startAt)),e.endAt&&(n.structuredQuery.endAt=nh(e.endAt)),n}function ow(t){let e=ew(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){D(i===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=th(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new zn(Ht(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,dt(h)?null:h}(n.limit));let c=null;n.startAt&&(c=ih(n.startAt));let u=null;return n.endAt&&(u=ih(n.endAt)),Ov(e,r,o,s,a,"F",c,u)}function aw(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function th(t){return t?t.unaryFilter!==void 0?[hw(t)]:t.fieldFilter!==void 0?[lw(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>th(e)).reduce((e,n)=>e.concat(n)):b():[]}function nh(t){return{before:t.before,values:t.position}}function ih(t){const e=!!t.before,n=t.values||[];return new ko(n,e)}function cw(t){return Xv[t]}function uw(t){return Qv[t]}function Bt(t){return{fieldPath:t.canonicalString()}}function Ht(t){return ae.fromServerFormat(t.fieldPath)}function lw(t){return re.create(Ht(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)}function hw(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ht(t.unaryFilter.field);return re.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ht(t.unaryFilter.field);return re.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ht(t.unaryFilter.field);return re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ht(t.unaryFilter.field);return re.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return b()}}function dw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const fw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new m((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):m.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):m.reject(n)}static resolve(e){return new m((n,i)=>{n(e)})}static reject(e){return new m((n,i)=>{i(e)})}static waitFor(e){return new m((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},c=>i(c))}),o=!0,s===r&&n()})}static or(e){let n=m.resolve(!1);for(const i of e)n=n.next(r=>r?m.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}}function Qn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&$v(s,e,i[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Ro(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Ro(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const i=e.get(n.key),r=i;this.applyToLocalView(r),i.isValidDocument()||r.convertToNoDocument(C.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),P())}isEqual(e){return this.batchId===e.batchId&&Ft(this.mutations,e.mutations,(n,i)=>Ml(n,i))&&Ft(this.baseMutations,e.baseMutations,(n,i)=>Ml(n,i))}}class Mo{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){D(e.mutations.length===i.length);let r=Gv();const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Mo(e,n,i,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,i,r,s=C.min(),o=C.min(),a=Z.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new yt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.Wt=e}}function yw(t){const e=ow({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lv(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.Gt=new ww}addToCollectionParentIndex(e,n){return this.Gt.add(n),m.resolve()}getCollectionParents(e,n){return m.resolve(this.Gt.getEntries(n))}}class ww{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new Q(F.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Q(F.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new zt(0)}static ie(){return new zt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(t){if(t.code!==p.FAILED_PRECONDITION||t.message!==fw)throw t;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r!==void 0){for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n])}else this.inner[i]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),!0;return!1}forEach(e){ht(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return ul(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(){this.changes=new Zn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:C.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:z.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?m.resolve(i.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n,i){this.He=e,this.In=n,this.Ht=i}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(i=>this.Rn(e,n,i))}Rn(e,n,i){return this.He.getEntry(e,n).next(r=>{for(const s of i)s.applyToLocalView(r);return r})}bn(e,n){e.forEach((i,r)=>{for(const s of n)s.applyToLocalView(r)})}Pn(e,n){return this.He.getEntries(e,n).next(i=>this.vn(e,i).next(()=>i))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>this.bn(n,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return T.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Vn(e,n.path):Tl(n)?this.Sn(e,n,i):this.Dn(e,n,i)}Vn(e,n){return this.An(e,new T(n)).next(i=>{let r=Do();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}Sn(e,n,i){const r=n.collectionGroup;let s=Do();return this.Ht.getCollectionParents(e,r).next(o=>m.forEach(o,a=>{const c=function(u,l){return new Gn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.Dn(e,c,i).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}Dn(e,n,i){let r,s;return this.He.getDocumentsMatchingQuery(e,n,i).next(o=>(r=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Cn(e,s,r).next(a=>{r=a;for(const c of s)for(const u of c.mutations){const l=u.key;let h=r.get(l);h==null&&(h=z.newInvalidDocument(l),r=r.insert(l,h)),Ro(u,h,c.localWriteTime),h.isFoundDocument()||(r=r.remove(l))}}))).next(()=>(r.forEach((o,a)=>{vr(n,a)||(r=r.remove(o))}),r))}Cn(e,n,i){let r=P();for(const o of n)for(const a of o.mutations)a instanceof gt&&i.get(a.key)===null&&(r=r.add(a.key));let s=i;return this.He.getEntries(e,r).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(s=s.insert(a,c))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Nn=i,this.xn=r}static kn(e,n){let i=P(),r=P();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Po(e,n.fromCache,i,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,i,r){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||i.isEqual(C.min())?this.Fn(e,n):this.On.Pn(e,r).next(s=>{const o=this.Mn(n,s);return(gr(n)||mr(n))&&this.Ln(n.limitType,o,r,i)?this.Fn(e,n):(sl()<=R.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Co(n)),this.On.getDocumentsMatchingQuery(e,n,i).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,n){let i=new Q(Sl(e));return n.forEach((r,s)=>{vr(e,s)&&(i=i.add(s))}),i}Ln(e,n,i,r){if(i.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Fn(e,n){return sl()<=R.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",Co(n)),this.On.getDocumentsMatchingQuery(e,n,C.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n,i,r){this.persistence=e,this.Bn=n,this.N=r,this.Un=new ee(O),this.qn=new Zn(s=>bo(s),So),this.Kn=C.min(),this.In=e.getMutationQueue(i),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new sh(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function Tw(t,e,n,i){return new Ew(t,e,n,i)}async function oh(t,e){const n=A(t);let i=n.In,r=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(c=>(a=c,i=n.persistence.getMutationQueue(e),r=new sh(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(o))).next(c=>{const u=[],l=[];let h=P();for(const d of a){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of c){l.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return r.Pn(o,h).next(d=>({Wn:d,removedBatchIds:u,addedBatchIds:l}))})});return n.In=i,n.Qn=r,n.Bn.$n(n.Qn),s}function bw(t,e){const n=A(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=m.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(g=>{const _=c.docVersions.get(f);D(_!==null),g.version.compareTo(_)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&u.addEntry(g,c.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,l))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.In.performConsistencyCheck(i)).next(()=>n.Qn.Pn(i,r))})}function ah(t){const e=A(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function Sw(t,e){const n=A(t),i=e.snapshotVersion;let r=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});r=n.Un;const a=[];e.targetChanges.forEach((u,l)=>{const h=r.get(l);if(!h)return;a.push(n.ze.removeMatchingKeys(s,u.removedDocuments,l).next(()=>n.ze.addMatchingKeys(s,u.addedDocuments,l)));const d=u.resumeToken;if(d.approximateByteSize()>0){const f=h.withResumeToken(d,i).withSequenceNumber(s.currentSequenceNumber);r=r.insert(l,f),function(g,_,w){return D(_.resumeToken.approximateByteSize()>0),g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(h,f,u)&&a.push(n.ze.updateTargetData(s,f))}});let c=mt();if(e.documentUpdates.forEach((u,l)=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(Aw(s,o,e.documentUpdates,i,void 0).next(u=>{c=u})),!i.isEqual(C.min())){const u=n.ze.getLastRemoteSnapshotVersion(s).next(l=>n.ze.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(u)}return m.waitFor(a).next(()=>o.apply(s)).next(()=>n.Qn.vn(s,c)).next(()=>c)}).then(s=>(n.Un=r,s))}function Aw(t,e,n,i,r){let s=P();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=mt();return n.forEach((c,u)=>{const l=o.get(c),h=(r==null?void 0:r.get(c))||i;u.isNoDocument()&&u.version.isEqual(C.min())?(e.removeEntry(c,h),a=a.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u,h),a=a.insert(c,u)):E("LocalStore","Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)}),a})}function kw(t,e){const n=A(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(i,e)))}function Nw(t,e){const n=A(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.ze.getTargetData(i,e).next(s=>s?(r=s,m.resolve(r)):n.ze.allocateTargetId(i).next(o=>(r=new yt(e,o,0,i.currentSequenceNumber),n.ze.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Un.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(i.targetId,i),n.qn.set(e,i.targetId)),i})}async function xo(t,e,n){const i=A(t),r=i.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Qn(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Un=i.Un.remove(e),i.qn.delete(r.target)}function ch(t,e,n){const i=A(t);let r=C.min(),s=P();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=A(a),h=l.qn.get(u);return h!==void 0?m.resolve(l.Un.get(h)):l.ze.getTargetData(c,u)}(i,o,pt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>i.Bn.getDocumentsMatchingQuery(o,e,n?r:C.min(),n?s:P())).next(a=>({documents:a,Gn:s})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return m.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var i;return this.Yn.set(n.id,{id:(i=n).id,version:i.version,createTime:we(i.createTime)}),m.resolve()}getNamedQuery(e,n){return m.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(i){return{name:i.name,query:yw(i.bundledQuery),readTime:we(i.readTime)}}(n)),m.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.Zn=new Q(G.ts),this.es=new Q(G.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const i=new G(e,n);this.Zn=this.Zn.add(i),this.es=this.es.add(i)}ss(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.rs(new G(e,n))}os(e,n){e.forEach(i=>this.removeReference(i,n))}cs(e){const n=new T(new F([])),i=new G(n,e),r=new G(n,e+1),s=[];return this.es.forEachInRange([i,r],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new T(new F([])),i=new G(n,e),r=new G(n,e+1);let s=P();return this.es.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new G(e,0),i=this.Zn.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class G{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return T.comparator(e.key,n.key)||O(e.ls,n.ls)}static ns(e,n){return O(e.ls,n.ls)||T.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new Q(G.ts)}checkEmpty(e){return m.resolve(this.In.length===0)}addMutationBatch(e,n,i,r){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new gw(s,n,i,r);this.In.push(o);for(const a of r)this.ds=this.ds.add(new G(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,n){return m.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this._s(i),s=r<0?0:r;return m.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return m.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new G(n,0),r=new G(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([i,r],o=>{const a=this.ws(o.ls);s.push(a)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Q(O);return n.forEach(r=>{const s=new G(r,0),o=new G(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{i=i.add(a.ls)})}),m.resolve(this.gs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;T.isDocumentKey(s)||(s=s.child(""));const o=new G(new T(s),0);let a=new Q(O);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.ls)),!0)},o),m.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(i=>{const r=this.ws(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){D(this.ys(n.batchId,"removed")===0),this.In.shift();let i=this.ds;return m.forEach(n.mutations,r=>{const s=new G(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=i})}te(e){}containsKey(e,n){const i=new G(n,0),r=this.ds.firstAfterOrEqual(i);return m.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,m.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new ee(T.comparator),this.size=0}addEntry(e,n,i){const r=n.key,s=this.docs.get(r),o=s?s.size:0,a=this.ps(n);return this.docs=this.docs.insert(r,{document:n.clone(),size:a,readTime:i}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return m.resolve(i?i.document.clone():z.newInvalidDocument(n))}getEntries(e,n){let i=mt();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.clone():z.newInvalidDocument(r))}),m.resolve(i)}getDocumentsMatchingQuery(e,n,i){let r=mt();const s=new T(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c,readTime:u}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;u.compareTo(i)<=0||vr(n,c)&&(r=r.insert(c.key,c.clone()))}return m.resolve(r)}Es(e,n){return m.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new Ow(this)}getSize(e){return m.resolve(this.size)}}class Ow extends _w{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.document.isValidDocument()?n.push(this.Se.addEntry(e,r.document,this.getReadTime(i))):this.Se.removeEntry(i)}),m.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.persistence=e,this.Ts=new Zn(n=>bo(n),So),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Is=0,this.As=new Uo,this.targetCount=0,this.Rs=zt.se()}forEachTarget(e,n){return this.Ts.forEach((i,r)=>n(r)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Is&&(this.Is=n),m.resolve()}ae(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new zt(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,m.resolve()}updateTargetData(e,n){return this.ae(n),m.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),m.waitFor(s).next(()=>r)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,n){const i=this.Ts.get(n)||null;return m.resolve(i)}addMatchingKeys(e,n,i){return this.As.ss(n,i),m.resolve()}removeMatchingKeys(e,n,i){this.As.os(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),m.resolve()}getMatchingKeysForTargetId(e,n){const i=this.As.hs(n);return m.resolve(i)}containsKey(e,n){return m.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,n){this.bs={},this.Le=new wo(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new Lw(this),this.Ht=new vw,this.He=function(i,r){return new Dw(i,r)}(this.Ht,i=>this.referenceDelegate.Ps(i)),this.N=new mw(n),this.Je=new Cw(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new Rw(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,i){E("MemoryPersistence","Starting transaction:",e);const r=new Pw(this.Le.next());return this.referenceDelegate.vs(),i(r).next(s=>this.referenceDelegate.Vs(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ss(e,n){return m.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,n)))}}class Pw extends pw{constructor(e){super(),this.currentSequenceNumber=e}}class Fo{constructor(e){this.persistence=e,this.Ds=new Uo,this.Cs=null}static Ns(e){return new Fo(e)}get xs(){if(this.Cs)return this.Cs;throw b()}addReference(e,n,i){return this.Ds.addReference(i,n),this.xs.delete(i.toString()),m.resolve()}removeReference(e,n,i){return this.Ds.removeReference(i,n),this.xs.add(i.toString()),m.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),m.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(r=>this.xs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.xs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.xs,i=>{const r=T.fromPath(i);return this.ks(e,r).next(s=>{s||n.removeEntry(r)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(i=>{i?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return m.or([()=>m.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class uh{constructor(){this.activeTargetIds=Hl()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xw{constructor(){this.yi=new uh,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,i){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new uh,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,i,r){const s=this.Bi(e,n);E("RestConnection","Sending: ",s,i);const o={};return this.Ui(o,r),this.qi(e,s,o,i).then(a=>(E("RestConnection","Received: ",a),a),a=>{throw ol("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",i),a})}Ki(e,n,i,r){return this.Li(e,n,i,r)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Ut,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const i in n.authHeaders)n.authHeaders.hasOwnProperty(i)&&(e[i]=n.authHeaders[i])}Bi(e,n){const i=Fw[e];return`${this.Fi}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,i,r){return new Promise((s,o)=>{const a=new hv;a.listenOnce(cv.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case yo.NO_ERROR:const u=a.getResponseJson();E("Connection","XHR received:",JSON.stringify(u)),s(u);break;case yo.TIMEOUT:E("Connection",'RPC "'+e+'" timed out'),o(new v(p.DEADLINE_EXCEEDED,"Request time out"));break;case yo.HTTP_ERROR:const l=a.getStatus();if(E("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const g=f.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(g)>=0?g:p.UNKNOWN}(h.status);o(new v(d,h.message))}else o(new v(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new v(p.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{E("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,i,15)})}ji(e,n){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=ov(),s=av(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new lv({})),this.Ui(o.initMessageHeaders,n),ya()||va()||Fd()||wa()||Vd()||Qr()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");E("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let u=!1,l=!1;const h=new Vw({vi:f=>{l?E("Connection","Not sending because WebChannel is closed:",f):(u||(E("Connection","Opening WebChannel transport."),c.open(),u=!0),E("Connection","WebChannel sending:",f),c.send(f))},Vi:()=>c.close()}),d=(f,g,_)=>{f.listen(g,w=>{try{_(w)}catch(k){setTimeout(()=>{throw k},0)}})};return d(c,hr.EventType.OPEN,()=>{l||E("Connection","WebChannel transport opened.")}),d(c,hr.EventType.CLOSE,()=>{l||(l=!0,E("Connection","WebChannel transport closed"),h.$i())}),d(c,hr.EventType.ERROR,f=>{l||(l=!0,ol("Connection","WebChannel transport errored:",f),h.$i(new v(p.UNAVAILABLE,"The operation could not be completed")))}),d(c,hr.EventType.MESSAGE,f=>{var g;if(!l){const _=f.data[0];D(!!_);const w=_,k=w.error||((g=w[0])===null||g===void 0?void 0:g.error);if(k){E("Connection","WebChannel received error:",k);const L=k.status;let x=function(Le){const M=q[Le];if(M!==void 0)return ql(M)}(L),pe=k.message;x===void 0&&(x=p.INTERNAL,pe="Unknown error status: "+L+" with message "+k.message),l=!0,h.$i(new v(x,pe)),c.close()}else E("Connection","WebChannel received:",_),h.Oi(_)}}),d(s,uv.STAT_EVENT,f=>{f.stat===rl.PROXY?E("Connection","Detected buffering proxy"):f.stat===rl.NOPROXY&&E("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function Vo(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t){return new Jv(t,!0)}class $o{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Qi=i,this.Wi=r,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),i=Math.max(0,Date.now()-this.Ji),r=Math.max(0,n-i);r>0&&E("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n,i,r,s,o){this.Oe=e,this.er=i,this.nr=r,this.credentialsProvider=s,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new $o(e,n)}ar(){return this.state===1||this.state===2||this.state===4}cr(){return this.state===2}start(){this.state!==3?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&this.ir===null&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,n){this._r(),this.rr.cancel(),this.sr++,e!==3?this.rr.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Be(n.toString()),Be("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):n&&n.code===p.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),n=this.sr;this.credentialsProvider.getToken().then(i=>{this.sr===n&&this.yr(i)},i=>{e(()=>{const r=new v(p.UNKNOWN,"Fetching auth token failed: "+i.message);return this.pr(r)})})}yr(e){const n=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si(()=>{n(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(i=>{n(()=>this.pr(i))}),this.stream.onMessage(i=>{n(()=>this.onMessage(i))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return E("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return n=>{this.Oe.enqueueAndForget(()=>this.sr===e?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jw extends hh{constructor(e,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle",n,i,s),this.N=r}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const n=nw(this.N,e),i=function(r){if(!("targetChange"in r))return C.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?C.min():s.readTime?we(s.readTime):C.min()}(e);return this.listener.Tr(n,i)}Ir(e){const n={};n.database=Xn(this.N),n.addTarget=function(r,s){let o;const a=s.target;return o=Ao(a)?{documents:rw(r,a)}:{query:sw(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Xl(r,s.resumeToken):s.snapshotVersion.compareTo(C.min())>0&&(o.readTime=Nr(r,s.snapshotVersion.toTimestamp())),o}(this.N,e);const i=aw(this.N,e);i&&(n.labels=i),this.wr(n)}Ar(e){const n={};n.database=Xn(this.N),n.removeTarget=e,this.wr(n)}}class qw extends hh{constructor(e,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle",n,i,s),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(e){return this.nr.ji("Write",e)}onMessage(e){if(D(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const n=iw(e.writeResults,e.commitTime),i=we(e.commitTime);return this.listener.vr(i,n)}return D(!e.writeResults||e.writeResults.length===0),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=Xn(this.N),this.wr(e)}Pr(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>eh(this.N,i))};this.wr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw extends class{}{constructor(e,n,i){super(),this.credentials=e,this.nr=n,this.N=i,this.Dr=!1}Cr(){if(this.Dr)throw new v(p.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,i){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Li(e,n,i,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new v(p.UNKNOWN,r.toString())})}Ki(e,n,i){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Ki(e,n,i,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new v(p.UNKNOWN,r.toString())})}terminate(){this.Dr=!0}}class Hw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){this.Nr===0&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){this.state==="Online"?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,e==="Online"&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(Be(n),this.$r=!1):E("OnlineStateTracker",n)}Br(){this.kr!==null&&(this.kr.cancel(),this.kr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=s,this.Qr.Ei(o=>{i.enqueueAndForget(async()=>{vt(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=A(a);c.Kr.add(4),await ei(c),c.Wr.set("Unknown"),c.Kr.delete(4),await Dr(c)}(this))})}),this.Wr=new Hw(i,r)}}async function Dr(t){if(vt(t))for(const e of t.jr)await e(!0)}async function ei(t){for(const e of t.jr)await e(!1)}function dh(t,e){const n=A(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),Bo(n)?qo(n):Gt(n).cr()&&jo(n,e))}function fh(t,e){const n=A(t),i=Gt(n);n.qr.delete(e),i.cr()&&ph(n,e),n.qr.size===0&&(i.cr()?i.lr():vt(n)&&n.Wr.set("Unknown"))}function jo(t,e){t.Gr.Y(e.targetId),Gt(t).Ir(e)}function ph(t,e){t.Gr.Y(e),Gt(t).Ar(e)}function qo(t){t.Gr=new Yv({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),Gt(t).start(),t.Wr.Or()}function Bo(t){return vt(t)&&!Gt(t).ar()&&t.qr.size>0}function vt(t){return A(t).Kr.size===0}function gh(t){t.Gr=void 0}async function Gw(t){t.qr.forEach((e,n)=>{jo(t,e)})}async function Kw(t,e){gh(t),Bo(t)?(t.Wr.Lr(e),qo(t)):t.Wr.set("Unknown")}async function Ww(t,e,n){if(t.Wr.set("Online"),e instanceof Gl&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.qr.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.qr.delete(o),i.Gr.removeTarget(o))}(t,e)}catch(i){E("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Or(t,i)}else if(e instanceof kr?t.Gr.rt(e):e instanceof zl?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(C.min()))try{const i=await ah(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.Gr._t(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.qr.get(c);u&&r.qr.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=r.qr.get(a);if(!c)return;r.qr.set(a,c.withResumeToken(Z.EMPTY_BYTE_STRING,c.snapshotVersion)),ph(r,a);const u=new yt(c.target,a,1,c.sequenceNumber);jo(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){E("RemoteStore","Failed to raise snapshot:",i),await Or(t,i)}}async function Or(t,e,n){if(!Qn(e))throw e;t.Kr.add(1),await ei(t),t.Wr.set("Offline"),n||(n=()=>ah(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Dr(t)})}function mh(t,e){return e().catch(n=>Or(t,n,e))}async function Lr(t){const e=A(t),n=ze(e);let i=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;Yw(e);)try{const r=await kw(e.localStore,i);if(r===null){e.Ur.length===0&&n.lr();break}i=r.batchId,Xw(e,r)}catch(r){await Or(e,r)}yh(e)&&vh(e)}function Yw(t){return vt(t)&&t.Ur.length<10}function Xw(t,e){t.Ur.push(e);const n=ze(t);n.cr()&&n.br&&n.Pr(e.mutations)}function yh(t){return vt(t)&&!ze(t).ar()&&t.Ur.length>0}function vh(t){ze(t).start()}async function Qw(t){ze(t).Sr()}async function Jw(t){const e=ze(t);for(const n of t.Ur)e.Pr(n.mutations)}async function Zw(t,e,n){const i=t.Ur.shift(),r=Mo.from(i,e,n);await mh(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Lr(t)}async function e_(t,e){e&&ze(t).br&&await async function(n,i){if(r=i.code,jl(r)&&r!==p.ABORTED){const s=n.Ur.shift();ze(n).hr(),await mh(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Lr(n)}var r}(t,e),yh(t)&&vh(t)}async function t_(t,e){const n=A(t);e?(n.Kr.delete(2),await Dr(n)):e||(n.Kr.add(2),await ei(n),n.Wr.set("Unknown"))}function Gt(t){return t.zr||(t.zr=function(e,n,i){const r=A(e);return r.Cr(),new jw(n,r.nr,r.credentials,r.N,i)}(t.datastore,t.asyncQueue,{Si:Gw.bind(null,t),Ci:Kw.bind(null,t),Tr:Ww.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),Bo(t)?qo(t):t.Wr.set("Unknown")):(await t.zr.stop(),gh(t))})),t.zr}function ze(t){return t.Hr||(t.Hr=function(e,n,i){const r=A(e);return r.Cr(),new qw(n,r.nr,r.credentials,r.N,i)}(t.datastore,t.asyncQueue,{Si:Qw.bind(null,t),Ci:e_.bind(null,t),Vr:Jw.bind(null,t),vr:Zw.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Lr(t)):(await t.Hr.stop(),t.Ur.length>0&&(E("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Oe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Ho(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zo(t,e){if(Be("AsyncQueue",`${e}: ${t}`),Qn(t))return new v(p.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.comparator=e?(n,i)=>e(n,i)||T.comparator(n.key,i.key):(n,i)=>T.comparator(n.key,i.key),this.keyedMap=Do(),this.sortedSet=new ee(this.comparator)}static emptySet(e){return new Kt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Kt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Kt;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.Jr=new ee(T.comparator)}track(e){const n=e.doc.key,i=this.Jr.get(n);i?e.type!==0&&i.type===3?this.Jr=this.Jr.insert(n,e):e.type===3&&i.type!==1?this.Jr=this.Jr.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Jr=this.Jr.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Jr=this.Jr.remove(n):e.type===1&&i.type===2?this.Jr=this.Jr.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):b():this.Jr=this.Jr.insert(n,e)}Yr(){const e=[];return this.Jr.inorderTraversal((n,i)=>{e.push(i)}),e}}class Wt{constructor(e,n,i,r,s,o,a,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,i,r){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Wt(e,n,Kt.emptySet(n),s,i,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(){this.Xr=void 0,this.listeners=[]}}class i_{constructor(){this.queries=new Zn(e=>bl(e),yr),this.onlineState="Unknown",this.Zr=new Set}}async function _h(t,e){const n=A(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new n_),r)try{s.Xr=await n.onListen(i)}catch(o){const a=zo(o,`Initialization of query '${Co(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&Go(n)}async function Ih(t,e){const n=A(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function r_(t,e){const n=A(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.no(r)&&(i=!0);o.Xr=r}}i&&Go(n)}function s_(t,e,n){const i=A(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function Go(t){t.Zr.forEach(e=>{e.next()})}class Eh{constructor(e,n,i){this.query=e,this.so=n,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=i||{}}no(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Wt(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.io?this.oo(e)&&(this.so.next(e),n=!0):this.ao(e,this.onlineState)&&(this.co(e),n=!0),this.ro=e,n}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let n=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),n=!0),n}ao(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.uo||!i)&&(!e.docs.isEmpty()||n==="Offline")}oo(e){if(e.docChanges.length>0)return!0;const n=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}co(e){e=Wt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this.key=e}}class bh{constructor(e){this.key=e}}class o_{constructor(e,n){this.query=e,this._o=n,this.mo=null,this.current=!1,this.yo=P(),this.mutatedKeys=P(),this.po=Sl(e),this.Eo=new Kt(this.po)}get To(){return this._o}Io(e,n){const i=n?n.Ao:new wh,r=n?n.Eo:this.Eo;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=gr(this.query)&&r.size===this.query.limit?r.last():null,u=mr(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),f=vr(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?g!==_&&(i.track({type:3,doc:f}),w=!0):this.Ro(d,f)||(i.track({type:2,doc:f}),w=!0,(c&&this.po(f,c)>0||u&&this.po(f,u)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),w=!0):d&&!f&&(i.track({type:1,doc:d}),w=!0,(c||u)&&(a=!0)),w&&(f?(o=o.add(f),s=_?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),gr(this.query)||mr(this.query))for(;o.size>this.query.limit;){const l=gr(this.query)?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),i.track({type:1,doc:l})}return{Eo:o,Ao:i,Ln:a,mutatedKeys:s}}Ro(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;const s=e.Ao.Yr();s.sort((u,l)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return f(h)-f(d)}(u.type,l.type)||this.po(u.doc,l.doc)),this.bo(i);const o=n?this.Po():[],a=this.yo.size===0&&this.current?1:0,c=a!==this.mo;return this.mo=a,s.length!==0||c?{snapshot:new Wt(this.query,e.Eo,r,s,e.mutatedKeys,a===0,c,!1),vo:o}:{vo:o}}eo(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new wh,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach(n=>this._o=this._o.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this._o=this._o.delete(n)),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=P(),this.Eo.forEach(i=>{this.Vo(i.key)&&(this.yo=this.yo.add(i.key))});const n=[];return e.forEach(i=>{this.yo.has(i)||n.push(new bh(i))}),this.yo.forEach(i=>{e.has(i)||n.push(new Th(i))}),n}So(e){this._o=e.Gn,this.yo=P();const n=this.Io(e.documents);return this.applyChanges(n,!0)}Do(){return Wt.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,this.mo===0)}}class a_{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class c_{constructor(e){this.key=e,this.Co=!1}}class u_{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new Zn(a=>bl(a),yr),this.ko=new Map,this.$o=new Set,this.Oo=new ee(T.comparator),this.Fo=new Map,this.Mo=new Uo,this.Lo={},this.Bo=new Map,this.Uo=zt.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return this.qo===!0}}async function l_(t,e){const n=__(t);let i,r;const s=n.xo.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.Do();else{const o=await Nw(n.localStore,pt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await h_(n,e,i,a==="current"),n.isPrimaryClient&&dh(n.remoteStore,o)}return r}async function h_(t,e,n,i){t.Ko=(l,h,d)=>async function(f,g,_,w){let k=g.view.Io(_);k.Ln&&(k=await ch(f.localStore,g.query,!1).then(({documents:pe})=>g.view.Io(pe,k)));const L=w&&w.targetChanges.get(g.targetId),x=g.view.applyChanges(k,f.isPrimaryClient,L);return Rh(f,g.targetId,x.vo),x.snapshot}(t,l,h,d);const r=await ch(t.localStore,e,!0),s=new o_(e,r.Gn),o=s.Io(r.documents),a=Wn.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),c=s.applyChanges(o,t.isPrimaryClient,a);Rh(t,n,c.vo);const u=new a_(e,n,s);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function d_(t,e){const n=A(t),i=n.xo.get(e),r=n.ko.get(i.targetId);if(r.length>1)return n.ko.set(i.targetId,r.filter(s=>!yr(s,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await xo(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),fh(n.remoteStore,i.targetId),Ko(n,i.targetId)}).catch(Jn)):(Ko(n,i.targetId),await xo(n.localStore,i.targetId,!0))}async function f_(t,e,n){const i=I_(t);try{const r=await function(s,o){const a=A(s),c=fe.now(),u=o.reduce((h,d)=>h.add(d.key),P());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,u).next(d=>{l=d;const f=[];for(const g of o){const _=jv(g,l.get(g.key));_!=null&&f.push(new gt(g.key,_,ml(_.value.mapValue),ve.exists(!0)))}return a.In.addMutationBatch(h,c,f,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let c=s.Lo[s.currentUser.toKey()];c||(c=new ee(O)),c=c.insert(o,a),s.Lo[s.currentUser.toKey()]=c}(i,r.batchId,n),await ti(i,r.changes),await Lr(i.remoteStore)}catch(r){const s=zo(r,"Failed to persist write");n.reject(s)}}async function Sh(t,e){const n=A(t);try{const i=await Sw(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.Fo.get(s);o&&(D(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Co=!0:r.modifiedDocuments.size>0?D(o.Co):r.removedDocuments.size>0&&(D(o.Co),o.Co=!1))}),await ti(n,i,e)}catch(i){await Jn(i)}}function Ah(t,e,n){const i=A(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.xo.forEach((s,o)=>{const a=o.view.eo(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=A(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.eo(o)&&(c=!0)}),c&&Go(a)}(i.eventManager,e),r.length&&i.No.Tr(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function p_(t,e,n){const i=A(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Fo.get(e),s=r&&r.key;if(s){let o=new ee(T.comparator);o=o.insert(s,z.newNoDocument(s,C.min()));const a=P().add(s),c=new Ar(C.min(),new Map,new Q(O),o,a);await Sh(i,c),i.Oo=i.Oo.remove(s),i.Fo.delete(e),Wo(i)}else await xo(i.localStore,e,!1).then(()=>Ko(i,e,n)).catch(Jn)}async function g_(t,e){const n=A(t),i=e.batch.batchId;try{const r=await bw(n.localStore,e);Nh(n,i,null),kh(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ti(n,r)}catch(r){await Jn(r)}}async function m_(t,e,n){const i=A(t);try{const r=await function(s,o){const a=A(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.In.lookupMutationBatch(c,o).next(l=>(D(l!==null),u=l.keys(),a.In.removeMutationBatch(c,l))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,u))})}(i.localStore,e);Nh(i,e,n),kh(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ti(i,r)}catch(r){await Jn(r)}}function kh(t,e){(t.Bo.get(e)||[]).forEach(n=>{n.resolve()}),t.Bo.delete(e)}function Nh(t,e,n){const i=A(t);let r=i.Lo[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.Lo[i.currentUser.toKey()]=r}}function Ko(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ko.get(e))t.xo.delete(i),n&&t.No.jo(i,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(i=>{t.Mo.containsKey(i)||Ch(t,i)})}function Ch(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);n!==null&&(fh(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),Wo(t))}function Rh(t,e,n){for(const i of n)i instanceof Th?(t.Mo.addReference(i.key,e),y_(t,i)):i instanceof bh?(E("SyncEngine","Document no longer in limbo: "+i.key),t.Mo.removeReference(i.key,e),t.Mo.containsKey(i.key)||Ch(t,i.key)):b()}function y_(t,e){const n=e.key,i=n.path.canonicalString();t.Oo.get(n)||t.$o.has(i)||(E("SyncEngine","New document in limbo: "+n),t.$o.add(i),Wo(t))}function Wo(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new T(F.fromString(e)),i=t.Uo.next();t.Fo.set(i,new c_(n)),t.Oo=t.Oo.insert(n,i),dh(t.remoteStore,new yt(pt(No(n.path)),i,2,wo.T))}}async function ti(t,e,n){const i=A(t),r=[],s=[],o=[];i.xo.isEmpty()||(i.xo.forEach((a,c)=>{o.push(i.Ko(c,e,n).then(u=>{if(u){i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const l=Po.kn(c.targetId,u);s.push(l)}}))}),await Promise.all(o),i.No.Tr(r),await async function(a,c){const u=A(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>m.forEach(c,h=>m.forEach(h.Nn,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>m.forEach(h.xn,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Qn(l))throw l;E("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Un.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);u.Un=u.Un.insert(h,g)}}}(i.localStore,s))}async function v_(t,e){const n=A(t);if(!n.currentUser.isEqual(e)){E("SyncEngine","User change. New user:",e.toKey());const i=await oh(n.localStore,e);n.currentUser=e,function(r,s){r.Bo.forEach(o=>{o.forEach(a=>{a.reject(new v(p.CANCELLED,s))})}),r.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ti(n,i.Wn)}}function w_(t,e){const n=A(t),i=n.Fo.get(e);if(i&&i.Co)return P().add(i.key);{let r=P();const s=n.ko.get(e);if(!s)return r;for(const o of s){const a=n.xo.get(o);r=r.unionWith(a.view.To)}return r}}function __(t){const e=A(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=w_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=p_.bind(null,e),e.No.Tr=r_.bind(null,e.eventManager),e.No.jo=s_.bind(null,e.eventManager),e}function I_(t){const e=A(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=g_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=m_.bind(null,e),e}class E_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Rr(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return Tw(this.persistence,new Iw,e.initialUser,this.N)}Go(e){return new Mw(Fo.Ns,this.N)}Wo(e){return new xw}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class T_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ah(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=v_.bind(null,this.syncEngine),await t_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new i_}createDatastore(e){const n=Rr(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new $w(r));var r;return function(s,o,a){return new Bw(s,o,a)}(e.credentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>Ah(this.syncEngine,a,0),o=lh.bt()?new lh:new Uw,new zw(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,c,u){const l=new u_(i,r,s,o,a,c);return u&&(l.qo=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=A(e);E("RemoteStore","RemoteStore shutting down."),n.Kr.add(5),await ei(n),n.Qr.shutdown(),n.Wr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new v(p.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,r){const s=A(i),o=Xn(s.N)+"/documents",a={documents:r.map(h=>Cr(s.N,h))},c=await s.Ki("BatchGetDocuments",o,a),u=new Map;c.forEach(h=>{const d=tw(s.N,h);u.set(d.key.toString(),d)});const l=[];return r.forEach(h=>{const d=u.get(h.toString());D(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Vl(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const r=T.fromPath(i);this.mutations.push(new $l(r,this.precondition(r)))}),await async function(n,i){const r=A(n),s=Xn(r.N)+"/documents",o={writes:i.map(a=>eh(r.N,a))};await r.Li("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw b();n=C.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new v(p.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?ve.updateTime(n):ve.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(C.min()))throw new v(p.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ve.updateTime(n)}return ve.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n,i,r){this.asyncQueue=e,this.datastore=n,this.updateFunction=i,this.deferred=r,this.aa=5,this.rr=new $o(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi(async()=>{const e=new b_(this.datastore),n=this.ua(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(r=>{this.ha(r)}))}).catch(i=>{this.ha(i)})})}ua(e){try{const n=this.updateFunction(e);return!dt(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget(()=>(this.ca(),Promise.resolve()))):this.deferred.reject(e)}la(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!jl(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n,i){this.credentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=oe.UNAUTHENTICATED,this.clientId=al.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async r=>{E("FirestoreClient","Received user=",r.uid),await this.credentialListener(r),this.user=r})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Oe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const i=zo(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function k_(t,e){t.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await oh(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function N_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await C_(t);E("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>async function(s,o){const a=A(s);a.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const c=vt(a);a.Kr.add(3),await ei(a),c&&a.Wr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Kr.delete(3),await Dr(a)}(e.remoteStore,r)),t.onlineComponents=e}async function C_(t){return t.offlineComponents||(E("FirestoreClient","Using default OfflineComponentProvider"),await k_(t,new E_)),t.offlineComponents}async function Yo(t){return t.onlineComponents||(E("FirestoreClient","Using default OnlineComponentProvider"),await N_(t,new T_)),t.onlineComponents}function R_(t){return Yo(t).then(e=>e.syncEngine)}async function Xo(t){const e=await Yo(t),n=e.eventManager;return n.onListen=l_.bind(null,e.syncEngine),n.onUnlisten=d_.bind(null,e.syncEngine),n}function D_(t,e,n={}){const i=new Oe;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,c){const u=new Dh({next:h=>{s.enqueueAndForget(()=>Ih(r,l)),h.fromCache&&a.source==="server"?c.reject(new v(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Eh(o,u,{includeMetadataChanges:!0,uo:!0});return _h(r,l)}(await Xo(t),t.asyncQueue,e,n,i)),i.promise}function O_(t,e){const n=new Oe;return t.asyncQueue.enqueueAndForget(async()=>{const i=await function(r){return Yo(r).then(s=>s.datastore)}(t);new S_(t.asyncQueue,i,e,n).run()}),n.promise}class L_{constructor(e,n,i,r,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t,e,n){if(!n)throw new v(p.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function M_(t,e,n,i){if(e===!0&&i===!0)throw new v(p.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mh(t){if(!T.isDocumentKey(t))throw new v(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ph(t){if(T.isDocumentKey(t))throw new v(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function Ge(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new v(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mr(t);throw new v(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new v(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new v(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,M_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xh({}),this._settingsFrozen=!1,e instanceof ni?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new v(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(i.options.projectId)}(e))}get app(){if(!this._app)throw new v(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new v(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xh(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new fv;switch(n.type){case"gapi":const i=n.client;return D(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new mv(i,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new v(p.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Oh.get(e);n&&(E("ComponentProvider","Removing Datastore"),Oh.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ke(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new se(this.firestore,e,this._key)}}class Yt{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Yt(this.firestore,e,this._query)}}class Ke extends Yt{constructor(e,n,i){super(e,n,No(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new se(this.firestore,null,new T(e))}withConverter(e){return new Ke(this.firestore,e,this._path)}}function eE(t,e,...n){if(t=V(t),Lh("collection","path",e),t instanceof Qo){const i=F.fromString(e,...n);return Ph(i),new Ke(t,null,i)}{if(!(t instanceof se||t instanceof Ke))throw new v(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(F.fromString(e,...n));return Ph(i),new Ke(t.firestore,null,i)}}function P_(t,e,...n){if(t=V(t),arguments.length===1&&(e=al.I()),Lh("doc","path",e),t instanceof Qo){const i=F.fromString(e,...n);return Mh(i),new se(t,null,new T(i))}{if(!(t instanceof se||t instanceof Ke))throw new v(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(F.fromString(e,...n));return Mh(i),new se(t.firestore,t instanceof Ke?t.converter:null,new T(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new $o(this,"async_queue_retry"),this.Ea=()=>{const n=Vo();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.rr.tr()};const e=Vo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const n=Vo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise(()=>{});const n=new Oe;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(this.da.length!==0){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!Qn(e))throw e;E("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const n=this.fa.then(()=>(this.ga=!0,e().catch(i=>{throw this.ma=i,this.ga=!1,Be("INTERNAL UNHANDLED ERROR: ",function(r){let s=r.message||"";return r.stack&&(s=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),s}(i)),i}).then(i=>(this.ga=!1,i))));return this.fa=n,n}enqueueAfterDelay(e,n,i){this.Ta(),this.pa.indexOf(e)>-1&&(n=0);const r=Ho.createAndSchedule(this,e,n,i,s=>this.Ra(s));return this._a.push(r),r}Ta(){this.ma&&b()}verifyOperationInProgress(){}async ba(){let e;do e=this.fa,await e;while(e!==this.fa)}Pa(e){for(const n of this._a)if(n.timerId===e)return!0;return!1}va(e){return this.ba().then(()=>{this._a.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this._a)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ba()})}Va(e){this.pa.push(e)}Ra(e){const n=this._a.indexOf(e);this._a.splice(n,1)}}function Uh(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of n)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Xt extends Qo{constructor(e,n){super(e,n),this.type="firestore",this._queue=new x_,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Fh(this),this._firestoreClient.terminate()}}function tE(t=is()){return Je(t,"firestore").getImmediate()}function Pr(t){return t._firestoreClient||Fh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Fh(t){var e;const n=t._freezeSettings(),i=function(r,s,o,a){return new L_(r,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new A_(t._credentials,t._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new v(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wt(Z.fromBase64String(e))}catch(n){throw new v(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wt(Z.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new v(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new v(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=/^__.*__$/;class F_{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new gt(e,this.data,this.fieldMask,n,this.fieldTransforms):new br(e,this.data,n,this.fieldTransforms)}}class Vh{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new gt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $h(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class xr{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.N=i,this.ignoreUndefinedProperties=r,s===void 0&&this.Sa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new xr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Ca({path:i,xa:!1});return r.ka(e),r}$a(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Ca({path:i,xa:!1});return r.Sa(),r}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return Vr(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(e.length===0)throw this.Fa("Document fields must not be empty");if($h(this.Da)&&U_.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class V_{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=i||Rr(e)}Ba(e,n,i,r=!1){return new xr({Da:e,methodName:n,La:i,path:ae.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Ur(t){const e=t._freezeSettings(),n=Rr(t._databaseId);return new V_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jh(t,e,n,i,r,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,r);Zo("Data must be an object, but it was:",o,i);const a=zh(i,o);let c,u;if(s.merge)c=new jn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=ea(e,h,n);if(!o.contains(d))throw new v(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Kh(l,d)||l.push(d)}c=new jn(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new F_(new ce(a),c,u)}class Fr extends ri{_toFieldTransform(e){if(e.Da!==2)throw e.Da===1?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fr}}function qh(t,e,n){return new xr({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class $_ extends ri{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=qh(this,e,!0),i=this.Ua.map(s=>_t(s,n)),r=new jt(i);return new Ll(e.path,r)}isEqual(e){return this===e}}class j_ extends ri{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=qh(this,e,!0),i=this.Ua.map(s=>_t(s,n)),r=new qt(i);return new Ll(e.path,r)}isEqual(e){return this===e}}function Bh(t,e,n,i){const r=t.Ba(1,e,n);Zo("Data must be an object, but it was:",r,i);const s=[],o=ce.empty();ht(i,(c,u)=>{const l=ta(e,c,n);u=V(u);const h=r.$a(l);if(u instanceof Fr)s.push(l);else{const d=_t(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new jn(s);return new Vh(o,a,r.fieldTransforms)}function Hh(t,e,n,i,r,s){const o=t.Ba(1,e,n),a=[ea(e,i,n)],c=[r];if(s.length%2!=0)throw new v(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(ea(e,s[d])),c.push(s[d+1]);const u=[],l=ce.empty();for(let d=a.length-1;d>=0;--d)if(!Kh(u,a[d])){const f=a[d];let g=c[d];g=V(g);const _=o.$a(f);if(g instanceof Fr)u.push(f);else{const w=_t(g,_);w!=null&&(u.push(f),l.set(f,w))}}const h=new jn(u);return new Vh(l,h,o.fieldTransforms)}function q_(t,e,n,i=!1){return _t(n,t.Ba(i?4:3,e))}function _t(t,e){if(Gh(t=V(t)))return Zo("Unsupported field value:",e,t),zh(t,e);if(t instanceof ri)return function(n,i){if(!$h(i.Da))throw i.Fa(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&e.Da!==4)throw e.Fa("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=_t(o,i.Oa(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=V(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Pv(i.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=fe.fromDate(n);return{timestampValue:Nr(i.N,r)}}if(n instanceof fe){const r=new fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Nr(i.N,r)}}if(n instanceof Jo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wt)return{bytesValue:Xl(i.N,n._byteString)};if(n instanceof se){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.Fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Oo(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.Fa(`Unsupported field value: ${Mr(n)}`)}(t,e)}function zh(t,e){const n={};return ul(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ht(t,(i,r)=>{const s=_t(r,e.Na(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function Gh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof Jo||t instanceof wt||t instanceof se||t instanceof ri)}function Zo(t,e,n){if(!Gh(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Mr(n);throw i==="an object"?e.Fa(t+" a custom object"):e.Fa(t+" "+i)}}function ea(t,e,n){if((e=V(e))instanceof ii)return e._internalPath;if(typeof e=="string")return ta(t,e);throw Vr("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const B_=new RegExp("[~\\*/\\[\\]]");function ta(t,e,n){if(e.search(B_)>=0)throw Vr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ii(...e.split("."))._internalPath}catch{throw Vr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vr(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new v(p.INVALID_ARGUMENT,a+t+c)}function Kh(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new H_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(na("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class H_ extends $r{data(){return super.data()}}function na(t,e){return typeof e=="string"?ta(t,e):e instanceof ii?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ia extends $r{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(na("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class jr extends ia{data(e={}){return super.data(e)}}class Wh{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Qt(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new jr(this._firestore,this._userDataWriter,i.key,i,new Qt(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new v(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new jr(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Qt(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:s++}))}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new jr(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Qt(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:z_(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function z_(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t){if(mr(t)&&t.explicitOrderBy.length===0)throw new v(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class G_{}function nE(t,...e){for(const n of e)t=n._apply(t);return t}class K_ extends G_{constructor(e,n,i){super(),this.Ka=e,this.ja=n,this.Qa=i,this.type="where"}_apply(e){const n=Ur(e.firestore),i=function(r,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new v(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on FieldPath.documentId().`);if(u==="in"||u==="not-in"){Qh(l,u);const f=[];for(const g of l)f.push(Xh(a,r,g));h={arrayValue:{values:f}}}else h=Xh(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Qh(l,u),h=q_(o,s,l,u==="in"||u==="not-in");const d=re.create(c,u,h);return function(f,g){if(g.v()){const w=El(f);if(w!==null&&!w.isEqual(g.field))throw new v(p.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${g.field.toString()}'`);const k=Il(f);k!==null&&W_(f,g.field,k)}const _=function(w,k){for(const L of w.filters)if(k.indexOf(L.op)>=0)return L.op;return null}(f,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(_!==null)throw _===g.op?new v(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new v(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${_.toString()}' filters.`)}(r,d),d}(e._query,"where",n,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Yt(e.firestore,e.converter,function(r,s){const o=r.filters.concat([s]);return new Gn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,i))}}function iE(t,e,n){const i=e,r=na("where",t);return new K_(r,i,n)}function Xh(t,e,n){if(typeof(n=V(n))=="string"){if(n==="")throw new v(p.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tl(e)&&n.indexOf("/")!==-1)throw new v(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(F.fromString(n));if(!T.isDocumentKey(i))throw new v(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return fl(t,new T(i))}if(n instanceof se)return fl(t,n._key);throw new v(p.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mr(n)}.`)}function Qh(t,e){if(!Array.isArray(t)||t.length===0)throw new v(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new v(p.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function W_(t,e,n){if(!n.isEqual(e))throw new v(p.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{convertValue(e,n="none"){switch(ft(e)){case 0:return null;case 1:return e.booleanValue;case 2:return j(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){const i={};return ht(e.fields,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new Jo(j(e.latitude),j(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=hl(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(qn(e));default:return null}}convertTimestamp(e){const n=He(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=F.fromString(e);D(rh(i));const r=new ni(i.get(1),i.get(3)),s=new T(i.popFirst(5));return r.isEqual(n)||Be(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class Y_ extends Jh{constructor(e){super(),this.firestore=e}convertBytes(e){return new wt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,n)}}function si(t,e){if((t=V(t)).firestore!==e)throw new v(p.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}class qr extends Jh{constructor(e){super(),this.firestore=e}convertBytes(e){return new wt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,n)}}function rE(t){t=Ge(t,Yt);const e=Ge(t.firestore,Xt),n=Pr(e),i=new qr(e);return Yh(t._query),D_(n,t._query).then(r=>new Wh(e,i,t,r))}function sE(t,e,n,...i){t=Ge(t,se);const r=Ge(t.firestore,Xt),s=Ur(r);let o;return o=typeof(e=V(e))=="string"||e instanceof ii?Hh(s,"updateDoc",t._key,e,n,i):Bh(s,"updateDoc",t._key,e),ed(r,[o.toMutation(t._key,ve.exists(!0))])}function oE(t,e){const n=Ge(t.firestore,Xt),i=P_(t),r=Zh(t.converter,e);return ed(n,[jh(Ur(t.firestore),"addDoc",i._key,r,t.converter!==null,{}).toMutation(i._key,ve.exists(!1))]).then(()=>i)}function aE(t,...e){var n,i,r;t=V(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Uh(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Uh(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(t instanceof se)u=Ge(t.firestore,Xt),l=No(t._key.path),c={next:h=>{e[o]&&e[o](X_(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ge(t,Yt);u=Ge(h.firestore,Xt),l=h._query;const d=new qr(u);c={next:f=>{e[o]&&e[o](new Wh(u,d,h,f))},error:e[o+1],complete:e[o+2]},Yh(t._query)}return function(h,d,f,g){const _=new Dh(g),w=new Eh(d,_,f);return h.asyncQueue.enqueueAndForget(async()=>_h(await Xo(h),w)),()=>{_.Xo(),h.asyncQueue.enqueueAndForget(async()=>Ih(await Xo(h),w))}}(Pr(u),l,a,c)}function ed(t,e){return function(n,i){const r=new Oe;return n.asyncQueue.enqueueAndForget(async()=>f_(await R_(n),i,r)),r.promise}(Pr(t),e)}function X_(t,e,n){const i=n.docs.get(e._key),r=new qr(t);return new ia(t,r,e._key,i,new Qt(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_ extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ur(e)}get(e){const n=si(e,this._firestore),i=new Y_(this._firestore);return this._transaction.lookup([n._key]).then(r=>{if(!r||r.length!==1)return b();const s=r[0];if(s.isFoundDocument())return new $r(this._firestore,i,s.key,s,n.converter);if(s.isNoDocument())return new $r(this._firestore,i,n._key,null,n.converter);throw b()})}set(e,n,i){const r=si(e,this._firestore),s=Zh(r.converter,n,i),o=jh(this._dataReader,"Transaction.set",r._key,s,r.converter!==null,i);return this._transaction.set(r._key,o),this}update(e,n,i,...r){const s=si(e,this._firestore);let o;return o=typeof(n=V(n))=="string"||n instanceof ii?Hh(this._dataReader,"Transaction.update",s._key,n,i,r):Bh(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=si(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=si(e,this._firestore),i=new qr(this._firestore);return super.get(e).then(r=>new ia(this._firestore,i,n._key,r._document,new Qt(!1,!1),n.converter))}}function cE(t,e){return O_(Pr(t),n=>e(new Q_(t,n)))}function uE(...t){return new $_("arrayUnion",t)}function lE(...t){return new j_("arrayRemove",t)}var J_;(function(t){Ut=t})(ln),Ae(new Ie("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=new Xt(n,new pv(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),i._setSettings(e),i},"PUBLIC")),bt("@firebase/firestore","3.1.0",J_);function hE(t,{from:e,to:n},i={}){const r=getComputedStyle(t),s=r.transform==="none"?"":r.transform,[o,a]=r.transformOrigin.split(" ").map(parseFloat),c=e.left+e.width*o/n.width-(n.left+o),u=e.top+e.height*a/n.height-(n.top+a),{delay:l=0,duration:h=f=>Math.sqrt(f)*120,easing:d=mi}=i;return{delay:l,duration:Zt(h)?h(Math.sqrt(c*c+u*u)):h,easing:d,css:(f,g)=>{const _=g*c,w=g*u,k=f+g*e.width/n.width,L=f+g*e.height/n.height;return`transform: ${s} translate(${_}px, ${w}px) scale(${k}, ${L});`}}}export{yI as $,EI as A,nd as B,$I as C,tI as D,iI as E,rI as F,nI as G,le as H,fd as I,Et as J,DI as K,BI as L,Z_ as M,CI as N,qI as O,HI as P,fa as Q,zI as R,VI as S,vI as T,uI as U,lI as V,YI as W,JI as X,hI as Y,mI as Z,We as _,yd as a,LI as a0,Nd as a1,wI as a2,gd as a3,fI as a4,Zt as a5,RI as a6,WI as a7,KI as a8,ZI as a9,is as aa,SI as ab,eI as ac,aE as ad,P_ as ae,tE as af,GI as ag,sE as ah,uE as ai,II as aj,Td as ak,_I as al,hE as am,OI as an,jI as ao,sI as ap,AI as aq,lE as ar,cE as as,XI as at,QI as au,oE as av,eE as aw,rE as ax,nE as ay,iE as az,md as b,dI as c,pd as d,la as e,oI as f,wd as g,gI as h,FI as i,xI as j,aI as k,cI as l,UI as m,pI as n,Cd as o,MI as p,PI as q,kI as r,id as s,Hr as t,kd as u,Rd as v,NI as w,ma as x,bI as y,TI as z};
