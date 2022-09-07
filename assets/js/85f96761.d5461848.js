"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6150],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),v=i,m=d["".concat(s,".").concat(v)]||d[v]||u[v]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_label:"version",title:"utils.version"},o=void 0,l={unversionedId:"reference/circuitpy/utils/version",id:"reference/circuitpy/utils/version",title:"utils.version",description:"Update values following semantic versioning convention.",source:"@site/docs/reference/circuitpy/utils/version.md",sourceDirName:"reference/circuitpy/utils",slug:"/reference/circuitpy/utils/version",permalink:"/amiga-dev-kit/docs/reference/circuitpy/utils/version",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/reference/circuitpy/utils/version.md",tags:[],version:"current",frontMatter:{sidebar_label:"version",title:"utils.version"},sidebar:"api",previous:{title:"packet",permalink:"/amiga-dev-kit/docs/reference/circuitpy/utils/packet"},next:{title:"Install",permalink:"/amiga-dev-kit/docs/brain/brain-install"}},s={},c=[{value:"version_tuple",id:"version_tuple",level:4},{value:"version_string",id:"version_string",level:4},{value:"BoardType Objects",id:"boardtype-objects",level:2},{value:"get_board_type",id:"get_board_type",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Update values following semantic versioning convention."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MAJOR: Major version"),(0,i.kt)("li",{parentName:"ul"},"MINOR: Minor version"),(0,i.kt)("li",{parentName:"ul"},"PATCH: Patch version"),(0,i.kt)("li",{parentName:"ul"},"DEV: Boolean indicating it is a development release")),(0,i.kt)("h4",{id:"version_tuple"},"version","_","tuple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def version_tuple()\n")),(0,i.kt)("p",null,"Returns tuple containing firmware version."),(0,i.kt)("h4",{id:"version_string"},"version","_","string"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def version_string()\n")),(0,i.kt)("p",null,"Returns string containing firmware version."),(0,i.kt)("h2",{id:"boardtype-objects"},"BoardType Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class BoardType()\n")),(0,i.kt)("p",null,"Enum representing the Amiga Board type (where Amiga application layer is running)."),(0,i.kt)("h4",{id:"get_board_type"},"get","_","board","_","type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def get_board_type()\n")),(0,i.kt)("p",null,"Return the Board type based on the operating system."))}u.isMDXComponent=!0}}]);