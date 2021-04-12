(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{114:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=s(t),d=a,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||c;return t?r.a.createElement(u,l(l({ref:n},p),{},{components:t})):r.a.createElement(u,l({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<c;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),c=(t(0),t(114)),i={title:"\u5b89\u88c5"},l={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"\u5b89\u88c5",description:"\u53ef\u4ee5\u901a\u8fc7 npm \u6216 yarn \u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6765\u5b89\u88c5 RPlayer\u3002",source:"@site/docs/installation.md",slug:"/installation",permalink:"/rplayer/docs/installation",editUrl:"https://github.com/woopen/rplayer/edit/main/website/docs/installation.md",version:"current",sidebar:"docs",next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/rplayer/docs/"}},o=[{value:"CDN",id:"cdn",children:[]}],p={toc:o};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7 npm \u6216 yarn \u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6765\u5b89\u88c5 RPlayer\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"npm i -S rplayer\n")),Object(c.b)("p",null,"\u6216"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"yarn add rplayer\n")),Object(c.b)("p",null,"\u7136\u540e\u53ea\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u5f15\u5165 RPlayer \u5c31\u884c\u4e86\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"import Player from 'rplayer'\n\nconst player = new Player()\nplayer.mount('#app')\n")),Object(c.b)("p",null,"\u65e0\u9700\u5bfc\u5165 RPlayer \u7684\u6837\u5f0f\u6587\u4ef6\uff0cRPlayer \u7684\u6837\u5f0f\u6587\u4ef6\u5305\u542b\u5728 RPlayer \u7684 js \u6587\u4ef6\u4e2d\uff0c\u5728\u8fd0\u884c\u65f6\u4f1a\u81ea\u52a8\u5c06\u6837\u5f0f\u63d2\u5165 ",Object(c.b)("inlineCode",{parentName:"p"},"head")," \u4e2d\u3002"),Object(c.b)("h3",{id:"cdn"},"CDN"),Object(c.b)("p",null,"\u9664\u4e86\u4f7f\u7528 npm \u5305\u7684\u5f62\u5f0f\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7 CDN \u6765\u5b89\u88c5\uff0c\u53ea\u9700\u8981\u8981\u4e00\u4e2a\u94fe\u63a5\u5c31\u53ef\u4ee5\u5c06 RPlayer \u5f15\u5165\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'<script src="https://unpkg.com/rplayer@latest/dist/index.min.js"><\/script>\n')),Object(c.b)("p",null,"\u6216\u8005\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 ",Object(c.b)("a",{parentName:"p",href:"https://www.jsdelivr.com/package/npm/rplayer"},"jsDELIVR CDN"),"\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'<script src="https://cdn.jsdelivr.net/npm/rplayer@latest/dist/index.min.js"><\/script>\n\n\u540c\u6837\uff0c\u4f7f\u7528 CDN \u7684\u65b9\u5f0f\uff0c\u4e5f\u65e0\u9700\u5f15\u5165 RPlayer \u7684\u6837\u5f0f\u6587\u4ef6\u3002\n')),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"RPlayer \u4f7f\u7528\u7684 umd \u683c\u5f0f\uff0c\u6240\u4ee5\u5728\u6ca1\u4f7f\u7528 amd \u6216 commonjs \u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"window.RPlayer")," \u8bbf\u95ee\u5230\u3002"))),Object(c.b)("p",null,"\u5728\u5f15\u5165 CDN \u94fe\u63a5\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const player = new RPlayer.Player()\nplayer.mount('#app')\n")),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\u5728\u901a\u8fc7 CDN \u7684\u65b9\u5f0f\u4f7f\u7528\u65f6\uff0cPlayer \u7c7b\u662f\u5728 RPlayer \u5bf9\u8c61\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"Player")," \u5c5e\u6027\u4e0a\u3002\u9700\u8981 ",Object(c.b)("inlineCode",{parentName:"p"},"new RPlayer.Player()")," \u800c\u4e0d\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"new RPlayer()"),"\u3002"))))}s.isMDXComponent=!0}}]);