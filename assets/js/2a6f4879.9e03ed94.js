"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4149],{8168:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));a(1839);const r={id:"debug-cable",title:"Debug Cable Overview"},i="farm-ng Debug Cable",o={unversionedId:"debug_cable/debug-cable",id:"debug_cable/debug-cable",title:"Debug Cable Overview",description:"IMG_9574",source:"@site/docs/debug_cable/README.md",sourceDirName:"debug_cable",slug:"/debug_cable/",permalink:"/docs/debug_cable/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/debug_cable/README.md",tags:[],version:"current",frontMatter:{id:"debug-cable",title:"Debug Cable Overview"},sidebar:"docs",previous:{title:"Amiga Control States",permalink:"/docs/dashboard/control-states"},next:{title:"Service Cable Overview",permalink:"/docs/debug_cable/service-cable"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Product specific uses",id:"product-specific-uses",level:3},{value:"How to Connect",id:"how-to-connect",level:4},{value:"Dash",id:"dash",level:4},{value:"Brain",id:"brain",level:4},{value:"Pinout",id:"pinout",level:2}],s={toc:u};function c(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"farm-ng-debug-cable"},"farm-ng Debug Cable"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/64480560/205400778-1bfa084c-a187-4f42-8840-7b91714ab7f0.jpg",alt:"IMG_9574"})),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Cable used to update and debug farm-ng products. It includes rest functionality along with USB and serial communication."),(0,l.kt)("p",null,"The larger circuit board on the left is the USB / debug breakout, and the smaller board on the right is the serial interface."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/64480560/205400599-f79e0cae-35f3-4610-bbcf-9a4e50857fac.jpg",alt:"IMG_9578"})),(0,l.kt)("h3",{id:"product-specific-uses"},"Product specific uses"),(0,l.kt)("h4",{id:"how-to-connect"},"How to Connect"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/64480560/206007745-b36c59c7-22dd-4435-9cae-8503956174f3.png",alt:"187535995-d4ad8c7c-05a0-482b-8be9-6b6fb6b87ac3"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Connect cable to the debug port on the back of dashboard")),(0,l.kt)("h4",{id:"dash"},"Dash"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"USB interface is for REPL, filesystem access as well as updating firmware and applications,"),(0,l.kt)("li",{parentName:"ul"},"Serial interface is not used at the moment"),(0,l.kt)("li",{parentName:"ul"},"A reset button is connected to the Microcontroller and used for hard reset. It also can be double pressed to force bootloader mode.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See update process documentation for more information ",(0,l.kt)("a",{parentName:"strong",href:"/docs/dashboard/dashboard-fw"},"here"))),(0,l.kt)("h4",{id:"brain"},"Brain"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"USB interface is used for connecting for lashing images"),(0,l.kt)("li",{parentName:"ul"},"Serial interface is used for operating system terminal"),(0,l.kt)("li",{parentName:"ul"},"Reset / Flash button is used for enabling the firmware update mode (press on boot)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See flashing and operating system documentation for more information ",(0,l.kt)("a",{parentName:"strong",href:"/docs/brain/"},"here"))),(0,l.kt)("h2",{id:"pinout"},"Pinout"),(0,l.kt)("p",null,"Connector M12-8 A code female used to connect to farm-ng products. The debug cable connects the IO to two MicroUSB connectors and a reset button."),(0,l.kt)("p",null,"Debug wire colors based on common cable with flying leads used on farm-ng built debug kits."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PIN"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Typical Wire Color"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"RESET"),(0,l.kt)("td",{parentName:"tr",align:null},"Black"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"TTL RX (3.3v)"),(0,l.kt)("td",{parentName:"tr",align:null},"Brown"),(0,l.kt)("td",{parentName:"tr",align:null},"Connect to TX of interface")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"TTL TX (3.3v)"),(0,l.kt)("td",{parentName:"tr",align:null},"Red"),(0,l.kt)("td",{parentName:"tr",align:null},"Connect to RX of interface")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"USB D-"),(0,l.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"UDB D+"),(0,l.kt)("td",{parentName:"tr",align:null},"Green"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"USB VBUS"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"NC"),(0,l.kt)("td",{parentName:"tr",align:null},"Gray"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"GND"),(0,l.kt)("td",{parentName:"tr",align:null},"White"),(0,l.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);