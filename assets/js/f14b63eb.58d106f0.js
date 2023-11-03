"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[4306],{9508:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(5893),t=i(1151);const r={id:"gps-client",title:"GPS Client"},a="GPS Client Example",l={id:"examples/gps_client/gps-client",title:"GPS Client",description:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:",source:"@site/docs/examples/gps_client/README.md",sourceDirName:"examples/gps_client",slug:"/examples/gps_client/",permalink:"/docs/examples/gps_client/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/gps_client/README.md",tags:[],version:"current",frontMatter:{id:"gps-client",title:"GPS Client"},sidebar:"examples",previous:{title:"File Reader CAN",permalink:"/docs/examples/file_reader_can/"},next:{title:"File Reader GPS",permalink:"/docs/examples/file_reader_gps/"}},o={},c=[{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:2},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:2},{value:"Setup",id:"setup",level:3},{value:"Install",id:"install",level:3},{value:"3. Execute the Python script",id:"3-execute-the-python-script",level:2},{value:"4. Customize the run",id:"4-customize-the-run",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.admonition,{title:"Basic Knowledge Requirements",type:"info",children:[(0,s.jsx)(n.p,{children:"Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Python Programming"}),": It's important to have a good grasp of Python, especially with concepts\nlike ",(0,s.jsx)(n.code,{children:"functions"}),", ",(0,s.jsx)(n.code,{children:"loops"}),", and ",(0,s.jsx)(n.code,{children:"classes"}),", since the example utilizes these fundamentals."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Asynchronous Programming with asyncio"}),": Familiarity with Python's asyncio for writing concurrent\ncode using the ",(0,s.jsx)(n.code,{children:"async/await"})," syntax."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/concepts/gps_service/",children:"farm-ng GPS Service Overview"})}),":\nThis overview provides a base understanding of the gRPC service the client you create will connect to.\nThis includes ",(0,s.jsx)(n.strong,{children:"GPS"})," (as PVT) & ",(0,s.jsx)(n.strong,{children:"RTK"})," (as RELPOSNED) messages."]}),"\n"]})]}),"\n",(0,s.jsx)(n.h1,{id:"gps-client-example",children:"GPS Client Example"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/gps_client/main.py",children:(0,s.jsx)(n.strong,{children:"GPS Client example"})}),"\noperates as a standalone Python script,\nin which an ",(0,s.jsx)(n.code,{children:"EventClient"})," to the farm-ng GPS service running on an Amiga brain is created."]}),"\n",(0,s.jsxs)(n.p,{children:["The script processes two types of GPS messages: ",(0,s.jsx)(n.code,{children:"relposned"})," and ",(0,s.jsx)(n.code,{children:"pvt"}),".\nThe user specifies which GPS message topics to subscribe to in the service configuration.\nThe script subscribes to the corresponding data streams and prints the output to the console."]}),"\n",(0,s.jsxs)(n.p,{children:["You can either run this example directly on a brain by ",(0,s.jsx)(n.code,{children:"ssh"}),"'ing in, or use your local PC.\nIf using your local PC, it should be either connected to the same local network as the brain\nor linked to it through tailscale."]}),"\n",(0,s.jsxs)(n.p,{children:["Ensure that a ",(0,s.jsx)(n.a,{href:"/docs/brain/",children:(0,s.jsx)(n.strong,{children:"farm-ng brain"})}),", with a GPS receiver, is actively running the GPS service.\nFor ",(0,s.jsx)(n.code,{children:"relposned"})," messages, a connection to an RTK base station is also required."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["There are two types of GPS messages: ",(0,s.jsx)(n.strong,{children:"PVT"})," and ",(0,s.jsx)(n.strong,{children:"RELPOSNED"}),"."]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"PVT"})," (Position, Velocity, and Time) messages provide the all-in-one solution: position, velocity,\nand time.\nIt contains details like longitude, latitude, altitude, speed, and UTC time."]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"RELPOSNED"}),' (Relative Positioning) messages provide relative position\ninformation in a North, East, Down (N-E-D) frame. It\'s mainly used for applications requiring relative\npositioning between two receivers, often as a part of Real Time Kinematics (RTK) solutions.\nIt shows the difference in position between a "moving" receiver and a "fixed" reference receiver.']})]}),"\n",(0,s.jsxs)(n.h2,{id:"1-install-the-farm-ng-brain-adk-package",children:["1. Install the ",(0,s.jsx)(n.a,{href:"/docs/brain/brain-install",children:"farm-ng Brain ADK package"})]}),"\n",(0,s.jsx)(n.h2,{id:"2-install-the-examples-dependencies",children:"2. Install the example's dependencies"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment."})}),"\n",(0,s.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.admonition,{title:"Recommended",type:"important",children:(0,s.jsx)(n.p,{children:"Create a virtual environment"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python3 -m venv venv\nsource venv/bin/activate\n"})}),"\n",(0,s.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd py/examples/gps_client\npip install -r requirements.txt\n"})}),"\n",(0,s.jsx)(n.h2,{id:"3-execute-the-python-script",children:"3. Execute the Python script"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python main.py --service-config service_config.json\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4-customize-the-run",children:"4. Customize the run"}),"\n",(0,s.jsxs)(n.p,{children:["You can also specify a gps interface (",(0,s.jsx)(n.code,{children:"/relposned"})," or ",(0,s.jsx)(n.code,{children:"/pvt"}),") to read by\nmodifying the ",(0,s.jsx)(n.code,{children:"uri.path"})," in the ",(0,s.jsx)(n.code,{children:"service_config.json"})," file.\nThe default value (",(0,s.jsx)(n.strong,{children:"'*'"}),") will stream all messages published by the service."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name": "gps",\n    "port": 3001,\n    "host": "localhost",\n    "log_level": "INFO",\n    "subscriptions": [\n        {\n            "uri": {\n                "path": "/relposned",\n                "query": "service_name=gps"\n            },\n            "every_n": 1\n        }\n    ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"If everything worked correctly you should now see a large stream\nof text come up in your terminal!"}),"\n",(0,s.jsx)(n.p,{children:"The output should look something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Message stamp: 913.417056353\nGPS time: 1696009971.6\nLatitude: 36.9293043\nLongitude: -121.7903499\nAltitude: 35.574\nGround speed: 0.78\nSpeed accuracy: 0.06199999898672104\nHorizontal accuracy: 0.014999999664723873\nVertical accuracy: 0.017000000923871994\nP DOP: 0.0179\n--------------------------------------------------\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Congrats you are done!"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["We highly recommend to have some basic knowledge about\n",(0,s.jsx)(n.a,{href:"https://docs.python.org/3/library/asyncio.html",children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"asyncio"})})}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>a});var s=i(7294);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);