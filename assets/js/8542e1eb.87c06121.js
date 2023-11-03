"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[9790],{6812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(5893),a=t(1151),s=t(4866),o=t(5162);const l={id:"vnc-viewer",title:"Using a VNC Viewer"},i=void 0,c={id:"examples/vnc_viewer/vnc-viewer",title:"Using a VNC Viewer",description:"If you want to see the screen of the Amiga and interact with it from a laptop or dev station,",source:"@site/docs/examples/vnc_viewer/README.md",sourceDirName:"examples/vnc_viewer",slug:"/examples/vnc_viewer/",permalink:"/docs/examples/vnc_viewer/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/vnc_viewer/README.md",tags:[],version:"current",frontMatter:{id:"vnc-viewer",title:"Using a VNC Viewer"},sidebar:"examples",previous:{title:"Service Propagation",permalink:"/docs/examples/service_propagation/"},next:{title:"Monitor App",permalink:"/docs/examples/monitor_app/"}},u={},d=[];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"If you want to see the screen of the Amiga and interact with it from a laptop or dev station,\nuse a remote desktop / VNC viewing program.\nThere are an abundance of free VNC viewing programs available, so feel free to use your preferred tool."}),"\n",(0,r.jsx)(n.p,{children:"If you don't have a preferred tool, an option for each OS includes:"}),"\n","\n","\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(o.Z,{value:"linux",label:"Linux",default:!0,children:[(0,r.jsxs)(n.p,{children:["On Linux, you can use ",(0,r.jsx)(n.a,{href:"https://remmina.org",children:"Remmina"})]}),(0,r.jsxs)(n.p,{children:["Follow the installation instructions at ",(0,r.jsx)(n.a,{href:"https://remmina.org/how-to-install-remmina/#ubuntu",children:"Remmina Install"}),"."]}),(0,r.jsx)(n.p,{children:"Then to connect:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open Remmina"}),"\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.code,{children:"VNC"})," as the connection type."]}),"\n",(0,r.jsx)(n.li,{children:"Enter the IP address of your brain"}),"\n"]})]}),(0,r.jsxs)(o.Z,{value:"macos",label:"MacOs",default:!0,children:[(0,r.jsx)(n.p,{children:"On Mac, you can connect directly through you Safari browser."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open Safari, then where you type the url enter:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"vnc://<ip-address> # Enter chosen amiga ip-address\n# Then press enter/return\n"})})]}),(0,r.jsxs)(o.Z,{value:"windows",label:"Windows",default:!0,children:[(0,r.jsxs)(n.p,{children:["On Windows, you can use ",(0,r.jsx)(n.a,{href:"https://www.realvnc.com/en/connect/plan/lite/",children:"Real VNC Lite"}),".\nThis is there free version, but it still requires creating an account.\nThere are likely other free VNC remote desktop tools that do not require an account."]}),(0,r.jsxs)(n.p,{children:["See download at: ",(0,r.jsx)(n.a,{href:"https://www.realvnc.com/en/connect/download/viewer/",children:"Download VNC Viewer"})]}),(0,r.jsx)(n.p,{children:"Then to connect:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Open VNC VIewer"}),"\n",(0,r.jsx)(n.li,{children:"Enter the IP address of your brain"}),"\n"]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"If you have tailscale enabled, you may be able to use the Amiga name instead of the IP address"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Finally enter the password when prompted"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Contact us by e-mail at ",(0,r.jsx)(n.code,{children:"support@farm-ng.com"})," for the VNC access password."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var r=t(6010);const a={tabItem:"tabItem_Ymn6"};var s=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(7294),a=t(6010),s=t(2466),o=t(6550),l=t(469),i=t(1980),c=t(7392),u=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function w(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),a=l[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(w,{...e,...n}),(0,x.jsx)(g,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(7294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);