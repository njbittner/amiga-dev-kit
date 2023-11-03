"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[7420],{5635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(5893),i=t(1151);const r={id:"controller-overview",title:"Controller"},s="Controller Service Overview",l={id:"concepts/controller_service/controller-overview",title:"Controller",description:"The Controller is the autonomy hub of the Amiga.",source:"@site/docs/concepts/controller_service/README.md",sourceDirName:"concepts/controller_service",slug:"/concepts/controller_service/",permalink:"/docs/concepts/controller_service/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/concepts/controller_service/README.md",tags:[],version:"current",frontMatter:{id:"controller-overview",title:"Controller"},sidebar:"Concepts",previous:{title:"Recorder",permalink:"/docs/concepts/recorder_service/"}},a={},c=[{value:"Subscriptions",id:"subscriptions",level:2},{value:"API",id:"api",level:2},{value:"Requirements",id:"requirements",level:2},{value:"The Controller in practice",id:"the-controller-in-practice",level:2},{value:"Features",id:"features",level:3},{value:"Requirements for Following a Track",id:"requirements-for-following-a-track",level:3},{value:"Tracks",id:"tracks",level:2},{value:"Define a Track",id:"define-a-track",level:3},{value:"Examples",id:"examples",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"controller-service-overview",children:"Controller Service Overview"}),"\n",(0,o.jsx)(n.p,{children:"The Controller is the autonomy hub of the Amiga.\nIt takes in user commands and turns them into actions the robot can perform."}),"\n",(0,o.jsx)(n.p,{children:"The main goal of the Controller is to act as a bridge between what you want the Amiga to\ndo and how the robot actually does it. It hides the complicated details, letting users focus\non their main tasks without needing to know the complex workings underneath."}),"\n",(0,o.jsx)(n.p,{children:"In short, the Controller does the heavy lifting, allowing users to easily command the Amiga without\ndeep technical knowledge."}),"\n",(0,o.jsx)(n.h2,{id:"subscriptions",children:"Subscriptions"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Controller"})," is a client of the following services:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Canbus"}),"\n",(0,o.jsx)(n.li,{children:"Filter (state estimation)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The State estimation filter service is a client of the following services:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Canbus"}),"\n",(0,o.jsx)(n.li,{children:"GPS"}),"\n",(0,o.jsx)(n.li,{children:"Oak0"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For this reason, all of the above-mentioned services must be up and running for the ",(0,o.jsx)(n.code,{children:"Controller"}),"\nto work."]}),"\n",(0,o.jsx)(n.h1,{id:"data-streams",children:"Data Streams"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/state"}),": The Controller state is a combination of information from the various tasks\nperformed by the Controller.\nIt cannot be defined by a single protobuf definition, but instead, a combination of them.\nCheck the protobuf definitions for the Controller service for more details:\n",(0,o.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/protos/farm_ng/control/control.proto",children:"control_pb2."})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsxs)(n.p,{children:["These are the commands you can use to interact with the controller service with\nan ",(0,o.jsx)(n.code,{children:"EventClient"})," of the controller service."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/get_pose"}),": Retrieve the current position and orientation of the Amiga."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/set_track"}),": Provide a specific track (series of waypoints) for the Amiga to follow."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/follow_track"}),": Instruct the Amiga to commence following the previously set track."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/stop"}),": Instruct the Amiga to halt all movements immediately."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(n.p,{children:["There are a few requirements on the ",(0,o.jsx)(n.code,{children:"/state"})," output of the state estimation filter\nfor the controller service to consider the results valid and allow for following a track.\nThese include:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"GPS service is connected to an RTK base station"}),"\n",(0,o.jsx)(n.li,{children:"State estimation is receiving all required sensor data"}),"\n",(0,o.jsxs)(n.li,{children:["State estimation results have converged","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Requires a few seconds of driving around after starting the filter service"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"the-controller-in-practice",children:"The Controller in practice"}),"\n",(0,o.jsxs)(n.p,{children:["Before the controller can drive the Amiga autonomously, users must set a predefined track\nfor the robot to follow using the ",(0,o.jsx)(n.code,{children:"/set_track"})," API."]}),"\n",(0,o.jsxs)(n.p,{children:["Once a track is set, the next step is to command the controller to make the robot follow it.\nThis is done using the ",(0,o.jsx)(n.code,{children:"/follow_track"})," API.\nThe controller will then navigate the robot through each waypoint in the sequence, ensuring it follows\nthe predefined path."]}),"\n",(0,o.jsx)(n.admonition,{title:"Remember",type:"info",children:(0,o.jsx)(n.p,{children:"It's crucial first to set the track before asking the robot to follow it.\nThe controller expects the sequence of waypoints in the order they should be traversed.\nWithout a set track, the controller wouldn't know where to direct the robot."})}),"\n",(0,o.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,o.jsx)(n.p,{children:"The controller offers a level of flexibility and intelligence that goes beyond simply following\na predefined path.\nOnce a track is set, the robot can also traverse it in a few unique ways:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Reversing the Track"}),":\nAfter the Amiga has learned a track, it's not restricted to following it in just the direction\nit was taught.\nThe end point of the learned track can seamlessly become the starting point, provided the robot is\noriented towards its recorded initial position.\nThis allows the robot to navigate environments bidirectionally, offering greater autonomy and\nadaptability in dynamic settings."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Initiating from Intermediate Points"}),":\nYou don't always have to start the robot from the beginning of a track.\nThe controller is smart enough to allow track following from any intermediate point within the path.\nThis is especially useful if the robot needs to start its journey from a point that's not the\ntraditional beginning or end."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"requirements-for-following-a-track",children:"Requirements for Following a Track"}),"\n",(0,o.jsx)(n.p,{children:"For the controller to begin guiding the robot along a track, certain conditions must be met to\nensure accurate and safe navigation:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Proximity to the Track"}),": The robot must be situated within a maximum distance of 0.1 meters from\nany existing point on the track.\nThis ensures it's close enough to align itself correctly and follow the track."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Orientation or Heading"}),": The robot's heading needs to align closely with the heading of the nearest\npoint on the track.\nSpecifically, it should be within 30 degrees of the track point's heading.\nThis condition ensures the robot is oriented correctly and can safely navigate along the desired\npath without sudden, unexpected maneuvers."]}),"\n",(0,o.jsx)(n.h2,{id:"tracks",children:"Tracks"}),"\n",(0,o.jsx)(n.p,{children:"A track is essentially a sequence of waypoints, guiding the robot from its starting point,\nthrough various intermediary points, to its destination.\nEach waypoint in this track provides specific spatial information about where the robot should\nbe and how it should be oriented at that point."}),"\n",(0,o.jsx)(n.h3,{id:"define-a-track",children:"Define a Track"}),"\n",(0,o.jsx)(n.p,{children:"A track is represented as a JSON file, where each waypoint is defined by a pose.\nA pose captures the robot's position and orientation in the world.\nHere's an example of what a single pose looks like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "pose": {\n    "aFromB": {\n      "rotation": {\n        "unitQuaternion": {\n          "imag": {\n            "z": -0.9932486190247055\n          },\n          "real": 0.11600508956729176\n        }\n      },\n      "translation": {\n        "x": 2674.593868581748,\n        "y": 4297.325262829638\n      }\n    },\n    "frameA": "world",\n    "frameB": "robot",\n    "tangentOfBInA": {\n      "linearVelocity": {\n        "x": 0.4467579546503179\n      },\n      "angularVelocity": {\n        "z": 0.00475509022854358\n      }\n    }\n  },\n  "heading": -2.909058930621276\n},\n'})}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.p,{children:"Now that you have a good understanding of how the controller works, try some of the\ncontroller examples:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/examples/record_track",children:"Record a Track"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/examples/controller_track",children:"Follow a Track"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/examples/controller_square",children:"Drive a Square"})}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{title:"Warning",type:"caution",children:[(0,o.jsx)(n.p,{children:"The controller examples will cause the Amiga to drive when the dashboard is in auto mode.\nMake sure the area is clear before running examples."}),(0,o.jsxs)(n.p,{children:["You can also run the examples when the Amiga dashboard is not in ",(0,o.jsx)(n.code,{children:"AUTO READY"})," or ",(0,o.jsx)(n.code,{children:"AUTO ACTIVE"}),"\nand see the commands being sent with the red needle on the auto page without the Amiga actually moving."]})]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var o=t(7294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);