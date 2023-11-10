"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[1493],{6242:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=a(5893),r=a(1151),i=a(4866),l=a(5162);const s={id:"brain-install",title:"Brain ADK Install"},o="Brain ADK Installation",c={id:"brain/brain-install",title:"Brain ADK Install",description:"PyPI version",source:"@site/docs/brain/brain-install.md",sourceDirName:"brain",slug:"/brain/brain-install",permalink:"/docs/brain/brain-install",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/brain/brain-install.md",tags:[],version:"current",frontMatter:{id:"brain-install",title:"Brain ADK Install"},sidebar:"Documentation",previous:{title:"Access and Develop on the Brain",permalink:"/docs/ssh/"},next:{title:"Next Steps",permalink:"/docs/brain/next-steps"}},u={},d=[{value:"Install from pip [recommended]",id:"install-from-pip-recommended",level:2},{value:"Setup environment",id:"setup-environment",level:3},{value:"Package install",id:"package-install",level:3},{value:"Package updates",id:"package-updates",level:3},{value:"Install from source [advanced]",id:"install-from-source-advanced",level:2},{value:"Clone the repository",id:"clone-the-repository",level:3},{value:"Build the package",id:"build-the-package",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"brain-adk-installation",children:"Brain ADK Installation"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://pypi.org/project/farm-ng-amiga",children:(0,t.jsx)(n.img,{src:"https://badge.fury.io/py/farm-ng-amiga.svg",alt:"PyPI version"})})}),"\n",(0,t.jsx)(n.h2,{id:"install-from-pip-recommended",children:"Install from pip [recommended]"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"We recommend running the brain SDK applications in a virtual\nenvironment to avoid conflicts with other packages / versions\ninstalled on your system.\nThough this is not a requirement and you are welcome to decide\nhow/where to install."})}),"\n",(0,t.jsx)(n.h3,{id:"setup-environment",children:"Setup environment"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to install ",(0,t.jsx)(n.a,{href:"https://pypi.org/project/farm-ng-amiga",children:(0,t.jsx)(n.code,{children:"farm-ng-amiga"})})," in a virtual environment:"]}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.code,{children:"pip3"})," & ",(0,t.jsx)(n.code,{children:"virtualenv"})]}),"\n","\n","\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(l.Z,{value:"linux",label:"Linux",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install python3-pip\nsudo pip3 install virtualenv\n"})})}),(0,t.jsx)(l.Z,{value:"macos",label:"MacOs",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew install python3\n# to check if the installation was successful input command\npip --version\nsudo pip3 install virtualenv\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Start a virtual environment"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# assuming you're in the directory where you want to create your\n# `venv`\npython3 -m venv venv\nsource venv/bin/activate\n"})}),"\n",(0,t.jsxs)(n.p,{children:["[optional] when you want to exit / re-enter your ",(0,t.jsx)(n.code,{children:"venv"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"deactivate # exit\nsource venv/bin/activate # re-enter, assuming you're in the root\n# containing `venv/`\n"})}),"\n",(0,t.jsx)(n.h3,{id:"package-install",children:"Package install"}),"\n",(0,t.jsxs)(n.p,{children:["Now install the package with ",(0,t.jsx)(n.code,{children:"pip"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip3 install farm-ng-amiga\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can check the installed version"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip3 list | grep farm-ng\n\n# You should see something like:\n# farm-ng-amiga      2.0.0\n# farm-ng-core       2.0.0\n# farm-ng-package    0.1.3\n"})}),"\n",(0,t.jsx)(n.h3,{id:"package-updates",children:"Package updates"}),"\n",(0,t.jsx)(n.p,{children:"As new releases come out, you can keep your farm-ng packages up\nto date"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip3 install farm-ng-package --upgrade\npip3 install farm-ng-core --upgrade\npip3 install farm-ng-amiga --upgrade\n"})}),"\n",(0,t.jsx)(n.h2,{id:"install-from-source-advanced",children:"Install from source [advanced]"}),"\n",(0,t.jsx)(n.h3,{id:"clone-the-repository",children:"Clone the repository"}),"\n",(0,t.jsxs)(n.p,{children:["To install the\n",(0,t.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga",children:(0,t.jsx)(n.code,{children:"farm-ng-amiga"})}),"\npackage and test the available examples, start by cloning the\nrepo"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/farm-ng/farm-ng-amiga.git\ncd farm-ng-amiga/\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["If you want to clone with ",(0,t.jsx)(n.code,{children:"git"})," instead of ",(0,t.jsx)(n.code,{children:"https"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:farm-ng/farm-ng-amiga.git\n"})}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["NOTE: This requires that you have an ssh key set up.",(0,t.jsx)("br",{}),"\nSee ",(0,t.jsx)(n.a,{href:"/docs/support/github-101#set-up-an-ssh-key",children:"farm-ng Github 101 - Set up an SSH key"}),"\nfor more information and instructions."]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"Keep the repo up-to-date with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# from farm-ng-amiga/ dir\ngit checkout main\ngit pull\n"})}),"\n",(0,t.jsx)(n.h3,{id:"build-the-package",children:"Build the package"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Install ",(0,t.jsx)(n.code,{children:"pip3"})," & setup a ",(0,t.jsx)(n.code,{children:"virtualenv"})," (shown above)"]}),"\n",(0,t.jsxs)(n.li,{children:["Create and install the ",(0,t.jsx)(n.code,{children:"farm-ng-amiga"})," Python package"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd farm-ng-amiga/py/\n# install to system\npip3 install .\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# or for development mode\npip3 install -e .[dev]\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5162:(e,n,a)=>{a.d(n,{Z:()=>l});a(7294);var t=a(6010);const r={tabItem:"tabItem_Ymn6"};var i=a(5893);function l(e){let{children:n,hidden:a,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>k});var t=a(7294),r=a(6010),i=a(2466),l=a(6550),s=a(469),o=a(1980),c=a(7392),u=a(12);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,i=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:a,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),v=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(5893);function x(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,a=o.indexOf(n),r=s[a].value;r!==t&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function k(e){const n=(0,f.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>l});var t=a(7294);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);