(function(e){function t(t){for(var a,r,i=t[0],u=t[1],l=t[2],s=0,d=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{"chunk-e2c33cbc":"9d6e96fb","chunk-1812164e":"5cfb2bbd","chunk-2d209b31":"8c067160",about:"88a1dacc","chunk-51346ecc":"4b5c7924","chunk-12183f66":"5647c4f3","chunk-4f87815a":"ac8b5d56","chunk-5ebc57b1":"11833e61","chunk-69cf6566":"8d2829df"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1812164e":1,"chunk-51346ecc":1,"chunk-4f87815a":1,"chunk-5ebc57b1":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{"chunk-e2c33cbc":"31d6cfe0","chunk-1812164e":"74fe06e8","chunk-2d209b31":"31d6cfe0",about:"31d6cfe0","chunk-51346ecc":"d7351559","chunk-12183f66":"31d6cfe0","chunk-4f87815a":"19190b17","chunk-5ebc57b1":"f21c059d","chunk-69cf6566":"31d6cfe0"}[e]+".css",c=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===a||s===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],p.parentNode.removeChild(p),n(o)},p.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09f9":function(e,t,n){e.exports=n.p+"img/kpjlogo.4979d8d9.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[e._l(e.items,(function(t){return[t.heading?a("v-row",{key:t.heading,attrs:{align:"center"}},[a("v-col",{attrs:{cols:"6"}},[t.heading?a("v-subheader",[e._v(e._s(t.heading))]):e._e()],1),a("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[a("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[e._v("EDIT")])])],1):t.children?a("v-list-group",{key:t.text,attrs:{"prepend-icon":t.model?t.icon:t["icon-alt"],"append-icon":""},scopedSlots:e._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.text))])],1)]},proxy:!0}],null,!0),model:{value:t.model,callback:function(n){e.$set(t,"model",n)},expression:"item.model"}},e._l(t.children,(function(t,n){return a("v-list-item",{key:n,attrs:{link:"",to:t.path}},[t.icon?a("v-list-item-action",[a("v-icon",[e._v(e._s(t.icon))])],1):e._e(),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.text))])],1)],1)})),1):a("v-list-item",{key:t.text,attrs:{link:"",to:t.path}},[a("v-list-item-action",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.text))])],1)],1)]}))],2)],1),a("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-3",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[a("span",{staticClass:"hidden-sm-and-down"},[e._v("HITS Dashboard")])]),a("v-spacer"),a("v-btn",{attrs:{icon:"",large:""}},[a("v-avatar",{attrs:{size:"32px",item:""}},[a("v-img",{attrs:{src:n("09f9"),alt:"Vuetify"}})],1)],1)],1),a("v-main",[a("v-container",{staticClass:"fill-height blue lighten-5",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("router-view")],1)],1)],1)],1)},c=[],o={props:{source:String},data:function(){return{dialog:!1,drawer:null,items:[{icon:"mdi-alpha-e-circle-outline",text:"Episodes",path:"/episodes"},{icon:"mdi-bed",text:"BOR",path:"/bor"}]}}},i=o,u=n("2877"),l=n("6544"),s=n.n(l),d=n("7496"),p=n("40dc"),f=n("5bc1"),h=n("8212"),b=n("8336"),v=n("62ad"),m=n("a523"),k=n("132d"),g=n("adda"),y=n("8860"),w=n("56b0"),_=n("da13"),x=n("1800"),V=n("5d23"),P=n("f6c4"),S=n("f774"),C=n("0fd9"),O=n("2fa4"),j=n("e0c7"),A=n("2a7f"),E=Object(u["a"])(i,r,c,!1,null,null,null),T=E.exports;s()(E,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:f["a"],VAvatar:h["a"],VBtn:b["a"],VCol:v["a"],VContainer:m["a"],VIcon:k["a"],VImg:g["a"],VList:y["a"],VListGroup:w["a"],VListItem:_["a"],VListItemAction:x["a"],VListItemContent:V["a"],VListItemTitle:V["b"],VMain:P["a"],VNavigationDrawer:S["a"],VRow:C["a"],VSpacer:O["a"],VSubheader:j["a"],VToolbarTitle:A["a"]});n("d3b7");var L=n("8c4f");a["a"].use(L["a"]);var I=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-e2c33cbc"),n.e("chunk-1812164e"),n.e("chunk-51346ecc"),n.e("chunk-2d209b31"),n.e("chunk-5ebc57b1")]).then(n.bind(null,"3bf4"))}},{path:"/about",name:"About",component:function(){return Promise.all([n.e("chunk-e2c33cbc"),n.e("chunk-1812164e"),n.e("chunk-2d209b31"),n.e("about")]).then(n.bind(null,"f820"))}},{path:"/dash2",name:"Dashboard2",component:function(){return Promise.all([n.e("chunk-e2c33cbc"),n.e("chunk-1812164e"),n.e("chunk-51346ecc"),n.e("chunk-12183f66")]).then(n.bind(null,"9cc9"))}},{path:"/dash3",name:"Dashboard3",component:function(){return Promise.all([n.e("chunk-e2c33cbc"),n.e("chunk-69cf6566")]).then(n.bind(null,"53a0"))}},{path:"/episodes",name:"Episodes",component:function(){return Promise.all([n.e("chunk-e2c33cbc"),n.e("chunk-1812164e"),n.e("chunk-51346ecc"),n.e("chunk-2d209b31"),n.e("chunk-5ebc57b1")]).then(n.bind(null,"3bf4"))}},{path:"/bor",name:"BOR",component:function(){return Promise.all([n.e("chunk-e2c33cbc"),n.e("chunk-1812164e"),n.e("chunk-51346ecc"),n.e("chunk-2d209b31"),n.e("chunk-4f87815a")]).then(n.bind(null,"dc4a"))}}],B=new L["a"]({mode:"history",base:"/",routes:I}),D=B,N=n("2f62");a["a"].use(N["a"]);var $=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=n("f309");a["a"].use(M["a"]);var H=new M["a"]({}),R=n("bc3a"),U=n.n(R);a["a"].prototype.$http=U.a,a["a"].config.productionTip=!1,new a["a"]({router:D,store:$,vuetify:H,axios:U.a,render:function(e){return e(T)}}).$mount("#app")}});
//# sourceMappingURL=app.306f1d2d.js.map