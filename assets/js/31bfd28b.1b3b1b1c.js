"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[4370],{5856:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=s(5893),i=s(1151);const o={id:"canbus-overview",title:"Canbus"},a="Canbus Service Overview",r={id:"concepts/canbus_service/canbus-overview",title:"Canbus",description:"The Canbus service is an integral component of the Amiga platform.",source:"@site/docs/concepts/canbus_service/README.md",sourceDirName:"concepts/canbus_service",slug:"/concepts/canbus_service/",permalink:"/docs/concepts/canbus_service/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/concepts/canbus_service/README.md",tags:[],version:"current",frontMatter:{id:"canbus-overview",title:"Canbus"},sidebar:"Concepts",previous:{title:"Tracks & Waypoints",permalink:"/docs/concepts/tracks_and_waypoints/"},next:{title:"Oak",permalink:"/docs/concepts/oak_service/"}},c={},l=[{value:"API",id:"api",level:2},{value:"Safety and Operation",id:"safety-and-operation",level:2},{value:"Common Use-Cases",id:"common-use-cases",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"canbus-service-overview",children:"Canbus Service Overview"}),"\n",(0,t.jsx)(n.p,{children:"The Canbus service is an integral component of the Amiga platform.\nThis service offers direct control over the robot's motors, allowing users to both\npublish motor states and send specific commands to manipulate the robot's movements."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Purpose"}),": Control and manage the motors on the Amiga, handling command reception,\nprocessing, and motor instruction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Communication"}),": Direct interface with motors via CAN bus, a communication standard\nor microcontrollers and devices."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dependencies"}),": Standalone service, but pivotal for many autonomous operations.\nNotably, the Track Follower service is heavily reliant on the Canbus service."]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"data-streams",children:"Data Streams"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/twist"}),": The commanded linear velocity of the vehicle in the x direction in meters per second.\nCheck the protobuf definition for more details:\n",(0,t.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto#L58-L61",children:"canbus_pb2.Twist2d"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/raw_messages"}),":A"," representation of raw CAN bus messages with timestamps, node IDs, error\nflags, remote transmission indicators, and encoded payloads.\nCheck the protobuf definition for more details:\n",(0,t.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto#L95-L107",children:"canbus_pb2.RawCanbusMessages"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"/state"}),": State of the Amiga CAN bus.\nEncapsulates key information required to evaluate the state of the Amiga robot.\nCheck the protobuf definition for more details:\n",(0,t.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/amiga_v6.proto",children:"amiga_v6_pb2.AmigaV6CanbusState"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/twist"}),": Receives twist commands (linear and angular velocities) and instructs the\nmotors accordingly."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/can_message"}),": Accepts a specific Protobuf message format (details TBD)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/get_battery_state"}),": Returns the battery state.\nA float value indicating the battery's state of charge, ranging [0.0, 1.0].\nIf no motors are connected, it returns -1.0."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"safety-and-operation",children:"Safety and Operation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Operating Mode"}),": The robot should be in automode (activated via the dashboard)\nto utilize the Canbus service."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Safety Perimeter"}),": Establish a clear perimeter when operating the robot, as motor\ncommands will induce movement, ensuring safe operation."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"common-use-cases",children:"Common Use-Cases"}),"\n",(0,t.jsx)(n.p,{children:"The Canbus service is foundational for many of Amiga's autonomous functionalities.\nFor instance, the Track Follower service is a prominent client of the Canbus service, making the\nCanbus service pivotal for any autonomous motion or activity undertaken by the Amiga."})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var t=s(7294);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);