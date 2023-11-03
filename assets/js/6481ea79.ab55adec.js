"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[1292],{109:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=s(5893),t=s(1151);const r={id:"control-states",title:"Amiga Control States"},l=void 0,o={id:"dashboard/control-states",title:"Amiga Control States",description:"Amiga control states",source:"@site/docs/dashboard/control_states.mdx",sourceDirName:"dashboard",slug:"/dashboard/control-states",permalink:"/docs/dashboard/control-states",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/dashboard/control_states.mdx",tags:[],version:"current",frontMatter:{id:"control-states",title:"Amiga Control States"},sidebar:"Documentation",previous:{title:"Dashboard User Guide",permalink:"/docs/dashboard/dashboard-user-guide"},next:{title:"Dashboard Firmware Updates",permalink:"/docs/dashboard/dashboard-fw"}},d={},a=[{value:"Amiga control states",id:"amiga-control-states",level:2},{value:"State transition flowchart",id:"state-transition-flowchart",level:3},{value:"State descriptions",id:"state-descriptions",level:3},{value:"Transition descriptions",id:"transition-descriptions",level:3}];function c(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"amiga-control-states",children:"Amiga control states"}),"\n",(0,i.jsx)(e.h3,{id:"state-transition-flowchart",children:"State transition flowchart"}),"\n",(0,i.jsx)(e.mermaid,{chart:"  flowchart TB;\n    subgraph Start_Up\n        Boot-- Warm up --\x3eManual_Ready\n    end\n\n    subgraph Active___states__\n        direction LR\n        Manual_Active <-- O / CRUISE --\x3e Cruise_Control\n        subgraph Auto\n            direction TB\n            Auto_Ready <-- AmigaRpdo1 --\x3e Auto_Active\n        end\n        Manual_Active-- Auto mode tab --\x3eAuto\n        Manual_Active <-. X / BRAKE .- Auto\n        Manual_Active <-. X / BRAKE .- Cruise_Control\n    end\n\n    Manual_Ready -- Start / Vamos --\x3e Manual_Active\n    Active___states__ -- E-stop condition --\x3e E-stopped\n    Start_Up -- E-stop condition --\x3e E-stopped\n    Manual_Ready <-. Clear E-stop condition .- E-stopped\n"}),"\n",(0,i.jsx)(e.h3,{id:"state-descriptions",children:"State descriptions"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Boot"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Amiga is starting up"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Manual Ready"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Amiga is ready to use!"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Manual Active"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Manual driving with the pendant. Amiga does not hold fwd/rev or turning speed"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Cruise Control"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Pendant adjusts fwd/rev speed. Amiga holds fwd/rev speed"}),"\n",(0,i.jsx)(e.li,{children:"Perturb pendant left/right for turning. Amiga does not hold turning speed"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Auto Ready"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Amiga is ready for auto control to take over"}),"\n",(0,i.jsx)(e.li,{children:"Pendant only has button interactions"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Auto Active"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Amiga is actively being driven by auto mode"}),"\n",(0,i.jsx)(e.li,{children:"Pendant only has button interactions"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"E-stopped"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["An E-stop condition has been triggered by","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Physical press of the large E-stop button"}),"\n",(0,i.jsx)(e.li,{children:"Loss of communication with a critical component (pendant, motor controllers, etc.)"}),"\n",(0,i.jsx)(e.li,{children:"Over / under charged batteries"}),"\n",(0,i.jsx)(e.li,{children:"Motor temperature or current spike"}),"\n",(0,i.jsx)(e.li,{children:"Etc."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"E-stop condition must be cleared before transition to Manual Ready state"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"transition-descriptions",children:"Transition descriptions"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Warm up"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Amiga components go through start up procedures"}),"\n",(0,i.jsx)(e.li,{children:"Dashboard waits for all components to signal they are ready"}),"\n",(0,i.jsxs)(e.li,{children:["Transitions","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Boot -> Manual Ready"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Start / Vamos"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["The ",(0,i.jsx)(e.code,{children:"[Start / Vamos]"})," button on the dashboard touchscreen is pressed"]}),"\n",(0,i.jsxs)(e.li,{children:["Transitions","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Manual Ready -> Manual Active"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"O / CRUISE"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["The O / CRUISE pendant button is pressed","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"The top left button either has a circle or the word CRUISE, depending on your pendant version"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Transitions","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Manual Active <--\x3e Cruise Control"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"X / BRAKE"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["The X / BRAKE pendant button is pressed","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"The bottom left button either has an X or the word BRAKE, depending on your pendant version"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"Amiga speed is brought to a stop"}),"\n",(0,i.jsxs)(e.li,{children:["Transitions","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Cruise Control -> Manual Active"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Auto Ready -> Manual Active"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Auto Active -> Manual Active"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Auto mode tab"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Navigate to the auto mode tab on the dashboard"}),"\n",(0,i.jsxs)(e.li,{children:["Press the ",(0,i.jsx)(e.code,{children:"[AUTO CONTROL]"})," button"]}),"\n",(0,i.jsxs)(e.li,{children:["The ",(0,i.jsx)(e.code,{children:"AUTO READY"})," state will illuminate, if state transition is permitted"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"AmigaRpdo1"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Transition between Auto ready and auto active state (both directions) is requested over CAN with an AmigaRpdo1 message"}),"\n",(0,i.jsxs)(e.li,{children:["The ",(0,i.jsx)(e.code,{children:"AUTO READY"})," or ",(0,i.jsx)(e.code,{children:"AUTO ACTIVE"})," state will illuminate, corresponding to the state the Amiga is in"]}),"\n",(0,i.jsxs)(e.li,{children:["Transitions","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Auto Ready <--\x3e Auto Active"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"E-stop condition"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"E-stopped mode is automatically triggered by a qualifying issue (see above)"}),"\n",(0,i.jsxs)(e.li,{children:["Transitions","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Manual Ready -> E-stopped"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Manual Active -> E-stopped"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Cruise Control -> E-stopped"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Auto Ready -> E-stopped"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"Auto Active -> E-stopped"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Clear E-stop condition"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"E-stopped mode is automatically cleared by resolving the issue that triggered it"}),"\n",(0,i.jsxs)(e.li,{children:["Transitions","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"E-stopped -> Manual Ready"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>o,a:()=>l});var i=s(7294);const t={},r=i.createContext(t);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);