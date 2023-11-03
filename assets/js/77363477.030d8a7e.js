"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[803],{3015:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=t(5893),i=t(1151);const s={id:"fpv",title:"FPV Example"},o="amiga-dev-kit FPV example",d={id:"examples/FPV/fpv",title:"FPV Example",description:"Link to FPV/code.py",source:"@site/docs/examples/FPV/README.mdx",sourceDirName:"examples/FPV",slug:"/examples/FPV/",permalink:"/docs/examples/FPV/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/FPV/README.mdx",tags:[],version:"current",frontMatter:{id:"fpv",title:"FPV Example"},sidebar:"examples",previous:{title:"Cansniffer Example",permalink:"/docs/examples/cansniffer/"},next:{title:"Record and Access data",permalink:"/docs/examples/import_log_file/"}},c={},l=[{value:"Link to <code>FPV/code.py</code>",id:"link-to-fpvcodepy",level:3},{value:"Parts required:",id:"parts-required",level:2},{value:"What is SBUS?",id:"what-is-sbus",level:2},{value:"Wiring",id:"wiring",level:2},{value:"Pairing the Taranis to the X8R Receiver",id:"pairing-the-taranis-to-the-x8r-receiver",level:2},{value:"Code",id:"code",level:2},{value:"Running the example",id:"running-the-example",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"amiga-dev-kit-fpv-example",children:"amiga-dev-kit FPV example"}),"\n",(0,n.jsx)(r.h3,{id:"link-to-fpvcodepy",children:(0,n.jsxs)(r.a,{href:"https://github.com/farm-ng/amiga-dev-kit/blob/main/circuitpy/examples/FPV/code.py",children:["Link to ",(0,n.jsx)(r.code,{children:"FPV/code.py"})]})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"https://user-images.githubusercontent.com/11846963/185976329-c65208e1-a42a-436f-a191-9dcc57ecb354.jpg",alt:"fpv-in-truck-16x9-reduced"})}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["If you have not gone through any of our examples yet, you should start with the ",(0,n.jsx)(r.a,{href:"./../hello_main_loop/",children:(0,n.jsx)(r.strong,{children:"Hello Main Loop"})})," example."]})}),"\n",(0,n.jsx)(r.p,{children:"This example shows how to connect inexpensive off the shelf FPV equipment to your Amiga to enable realtime video streaming and teleoperation through remote control.\nThis makes the Amiga remotely operable from the comfort of your office (or cab of your truck) and we're pretty psyched by how low cost and practical FPV control of the Amiga is."}),"\n",(0,n.jsxs)(r.admonition,{title:"Hot off the press!",type:"warning",children:[(0,n.jsx)(r.p,{children:"Check out the video from our first farm test!"}),(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("iframe",{allowfullscreen:"True",width:"640",height:"480",src:"https://www.youtube.com/embed/tN20_CspsyU"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"https://user-images.githubusercontent.com/11846963/189413919-56a2f380-289e-4205-bcb4-e31cba84bda4.png",alt:"fpv_wiring_diagram"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/farm-ng/amiga-dev-kit/files/9537718/fpv_wiring_diagram.pdf",children:(0,n.jsx)(r.strong,{children:"Downloadable PDF of the diagram found here"})})}),"\n",(0,n.jsx)(r.p,{children:"There are two discrete radio links in this setup:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Analog video stream"}),"\n",(0,n.jsx)(r.li,{children:"Digital data stream (abstracting a UART serial connection via this simple but perhaps esoteric SBUS format)"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"As such, there are two transmitters, and two receivers as shown in the diagram above.  They are completely separate from one another, with exception to their shared power sources."}),"\n",(0,n.jsx)(r.h2,{id:"parts-required",children:"Parts required:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Recommendation"}),(0,n.jsx)(r.th,{children:"Purchase Link"}),(0,n.jsx)(r.th,{children:"Price"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Microcontroller kit"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"./../../mcu_kit/",children:(0,n.jsx)(r.strong,{children:"farm-ng microcontroller kit"})})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://farm-ng.com/products/microcontroller-kit",children:(0,n.jsx)(r.strong,{children:"farm-ng store link"})})}),(0,n.jsx)(r.td,{children:"$100"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Radio control receiver"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.frsky-rc.com/product/x8r/",children:(0,n.jsx)(r.strong,{children:"FrSky x8r"})})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.amazon.com/dp/B00RCAHHFM",children:(0,n.jsx)(r.strong,{children:"Amazon link"})})}),(0,n.jsx)(r.td,{children:"$40"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Radio remote control"}),(0,n.jsx)(r.td,{children:"FrSky Taranis X9D Plus SE 2019"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.amazon.com/dp/B07VYRGB5Q",children:(0,n.jsx)(r.strong,{children:"Amazon link"})})}),(0,n.jsx)(r.td,{children:"$300"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Remote control battery"}),(0,n.jsx)(r.td,{children:"7.4V 3000mAh 8C 2S LiPo Battery"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.amazon.com/Upgrade-3000mAh-Rechargeable-Radiolink-Transmitter/dp/B08FC4LWCG",children:(0,n.jsx)(r.strong,{children:"Amazon link"})})}),(0,n.jsx)(r.td,{children:"$20"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"FPV video camera"}),(0,n.jsx)(r.td,{children:"Inexpensive and works"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.amazon.com/dp/B06XPX18VY",children:(0,n.jsx)(r.strong,{children:"Amazon link"})})}),(0,n.jsx)(r.td,{children:"$25"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"FPV video transmitter/receiver"}),(0,n.jsx)(r.td,{children:"Inexpensive and works"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.amazon.com/dp/B01FXGQ2KC",children:(0,n.jsx)(r.strong,{children:"Amazon link"})})}),(0,n.jsx)(r.td,{children:"$30"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Small FPV video screen"}),(0,n.jsx)(r.td,{children:'LCD 5802D 7" Receiver Monitor'}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.getfpv.com/fpv/fpv-monitors/eachine-7-lcd5802d-dvr-5-8ghz-40ch-fpv-monitor.html",children:(0,n.jsx)(r.strong,{children:"getfpv link"})})}),(0,n.jsx)(r.td,{children:"$90"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"DC/DC Buck converter - 24v to 12v"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://smile.amazon.com/Protooma-Voltage-Converter-Light%EF%BC%8CWaterproof-Transformer/dp/B0B1NRDTF5/ref=sr_1_1_sspa?crid=FDHT22Y0D5H1&keywords=24v+to+12v+converter+5a&qid=1662748022&sprefix=24v+to+12v+converter+5a%2Caps%2C107&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUlJMNjZRNFROMFVTJmVuY3J5cHRlZElkPUEwMzY4NzU5QlVNNlZFUzNKNjNIJmVuY3J5cHRlZEFkSWQ9QTA4NzcxMjEzSERJMFBGUUY0VDZKJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",children:(0,n.jsx)(r.strong,{children:"Amazon Link"})})}),(0,n.jsx)(r.td,{children:"$15"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"DC/DC Buck converter - 24v to 5v"}),(0,n.jsx)(r.td,{children:"*This comes with our microcontroller kit"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://smile.amazon.com/DROK-090581-Converter-Step-down-Transformer/dp/B00CE75K0W/ref=sr_1_3?crid=1X1SSEWY1TEG6&keywords=24v+to+5v+converter+5a&qid=1662748102&sprefix=24v+to+5v+converter+5a%2Caps%2C96&sr=8-3",children:(0,n.jsx)(r.strong,{children:"Amazon Link"})})}),(0,n.jsx)(r.td,{children:"$11"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Alternate step down, cheaper/smaller option"}),(0,n.jsx)(r.td,{children:"Will required a voltmeter to adjust output"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://smile.amazon.com/Maxmoral-Converter-Adjustable-Step-Down-Regulator/dp/B07MKQXNWG/ref=sr_1_6?crid=1ZJ4Z4GBUV64E&keywords=24v+to+5v+adjustable+step+down&qid=1662748233&sprefix=24v+to+5v+adjustable+step+down%2Caps%2C87&sr=8-6",children:(0,n.jsx)(r.strong,{children:"Amazon link"})})}),(0,n.jsx)(r.td,{children:"$8"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Enclosure"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.hammfg.com/part/1554JGY",children:(0,n.jsx)(r.strong,{children:"Hammond 1554 JGY (abs, gray, solid lid)"})})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.mouser.com/ProductDetail/Hammond-Manufacturing/1554JGY?qs=FmjOKN4Os87trO9vnjsZvg%3D%3D",children:(0,n.jsx)(r.strong,{children:"Mouser Link"})})}),(0,n.jsx)(r.td,{children:"$14"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Cord grip kit"}),(0,n.jsx)(r.td,{children:"We used a single PG-13.5"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://smile.amazon.com/MAKERELE-Electrical-NPT-Waterproof-Connector/dp/B08R86BHBC/ref=sr_1_5?crid=2SYJ7I6BJ0HZT&keywords=cord+grip+kit&qid=1662750051&sprefix=cord+grip+kit%2Caps%2C142&sr=8-5",children:(0,n.jsx)(r.strong,{children:"Amazon Link"})})}),(0,n.jsx)(r.td,{children:"$22"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"VHB Double-stick tape for mounting stuff"}),(0,n.jsx)(r.td,{children:"Our favorite"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://smile.amazon.com/Width-Length-Black-Multipurpose-Double/dp/B07K4PQG8P/ref=sxts_rp_s_1_0?content-id=amzn1.sym.14b5a3ec-ddf3-42f1-bf1e-8515f8d25a34%3Aamzn1.sym.14b5a3ec-ddf3-42f1-bf1e-8515f8d25a34&crid=QLFBHDQ2W1UQ&cv_ct_cx=vhb&keywords=vhb&pd_rd_i=B07K4PQG8P&pd_rd_r=b76fadc2-12af-4732-8736-b46b4aa63cac&pd_rd_w=WnaiQ&pd_rd_wg=USSdg&pf_rd_p=14b5a3ec-ddf3-42f1-bf1e-8515f8d25a34&pf_rd_r=WDNTEH07SBH1HZZ0N2AV&psc=1&qid=1662749091&sprefix=vhb%2Caps%2C99&sr=1-1-f0029781-b79b-4b60-9cb0-eeda4dea34d6",children:(0,n.jsx)(r.strong,{children:"Amazon Link"})})}),(0,n.jsx)(r.td,{children:"$15"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Micro-grip rod (monitor to controller hack)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.bhphotovideo.com/c/product/686707-REG/Matthews_350602_5_4_101mm_Rod_for.html",children:(0,n.jsx)(r.strong,{children:"B&H Link"})})}),(0,n.jsx)(r.td,{children:"$8"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Micro-grip head (monitor to controller hack)"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.bhphotovideo.com/c/product/686694-REG/Matthews_350604_MICROgrip_Head.html",children:(0,n.jsx)(r.strong,{children:"B&H Link"})})}),(0,n.jsx)(r.td,{children:"$48"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Charger for the RC controller battery"}),(0,n.jsx)(r.td,{children:"This should work (not tested)"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://smile.amazon.com/Battery-Charger-400-700mA-Charging-Converter/dp/B0833LVMYP/ref=sr_1_8?crid=11CS4L438QUDT&keywords=charger%2Bfor%2BRC%2Bbattery&qid=1663947279&sprefix=charger%2Bfor%2Brc%2Bbattery%2B%2Caps%2C105&sr=8-8&th=1",children:(0,n.jsx)(r.strong,{children:"Amazon Link"})})}),(0,n.jsx)(r.td,{children:"$15"})]})]})]}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["We chose the ",(0,n.jsx)(r.a,{href:"https://www.frsky-rc.com/product/x8r/",children:(0,n.jsx)(r.strong,{children:"FrSky x8r"})})," radio receiver because it supports:","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["SBUS (which is compatible with UART ports on the ",(0,n.jsx)(r.a,{href:"./../../mcu_kit/",children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Amiga Dev Kit microcontroller"})})}),")"]}),"\n",(0,n.jsx)(r.li,{children:"Sending telemetry for two way communication (note: this tutorial only demonstrates one-way communication - joystick to rover)"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.li,{children:"The recommended video transmitter/receiver requires an old-school RCA capable monitor on the receiver side, we recommend one above"}),"\n"]})}),"\n",(0,n.jsx)(r.h2,{id:"what-is-sbus",children:"What is SBUS?"}),"\n",(0,n.jsxs)(r.admonition,{title:"SBUS references",type:"tip",children:[(0,n.jsxs)(r.p,{children:["This topic is explained more thoroughly on: ",(0,n.jsx)(r.a,{href:"https://oscarliang.com/uninverted-sbus-smart-port-frsky-receivers/",children:(0,n.jsx)(r.strong,{children:"Uninverted SBUS and Smart Port on Frsky Receivers"})})]}),(0,n.jsxs)(r.p,{children:["We also recommend watching this ",(0,n.jsx)(r.a,{href:"https://youtu.be/IqLUHj7nJhI?t=398",children:(0,n.jsx)(r.strong,{children:"video overview on SBUS"})}),", that visually explains inverted vs. non-inverted uart and packet structure."]})]}),"\n",(0,n.jsx)(r.p,{children:"The SBUS protocol is fairly simple."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["A 25 byte packet","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"start byte of 0x0F"}),"\n",(0,n.jsx)(r.li,{children:"16x 11-bit integers packed into the rest"}),"\n",(0,n.jsx)(r.li,{children:"second to last byte is a parity byte"}),"\n",(0,n.jsx)(r.li,{children:"end byte of 0x00"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/robotmaker/Real-time-graphical-representation-of-16-channel-S-BUS-protocol/blob/master/ProcessingSketch_SBUS_16_Channel_Simulation/ProcessingSketch_SBUS_16_Channel_Simulation.pde",children:(0,n.jsx)(r.strong,{children:"This is a useful resource for decoding the packets"})})}),"\n",(0,n.jsx)(r.p,{children:"The UART needs to be configured with:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"busio.UART(None, board.RX, baudrate=100000, bits=8, parity=0, stop=2, timeout=0.002, receiver_buffer_size=256)\n"})}),"\n",(0,n.jsx)(r.p,{children:"TODO support TX over the x8r smart bus."}),"\n",(0,n.jsx)(r.h2,{id:"wiring",children:"Wiring"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.img,{src:"https://user-images.githubusercontent.com/11846963/185976402-ff8c4c77-5a08-42b0-865f-d2840fc0b960.jpg",alt:"fpv wiring example"}),"\nShown above, is the entire receiver rover side of the FPV setup, correctly wired and unpacked.  See also the wiring diagram above."]}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsx)(r.p,{children:'SBUS is "inverted" UART, we want the un-inverted signal.  So need to do a little hardware hacking...'})}),"\n",(0,n.jsx)(r.p,{children:"The only aspect of the wiring that is not obvious in the wiring diagrams, is that in order to get a non-inverted UART signal out of the RC receiver on the rover side, you need to open the enclosure and solder a wire to one of the test points on the PCB as shown below.\nSo we cracked open the x8r receiver, and soldered a wire directly to the output pin before it gets inverted, and connected this wire to UART RX pin on the Feather."}),"\n",(0,n.jsx)(r.p,{children:"Wiring the receiver to access the un-inverted signal"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.img,{src:"https://user-images.githubusercontent.com/11846963/185978326-a21598e7-fe93-4c99-9ff3-f3b047d586e6.jpg",alt:"x8r-receiver-solder-point-reduced"}),"\n",(0,n.jsx)(r.img,{src:"https://user-images.githubusercontent.com/11846963/189423705-24bb368b-8c13-45d8-be74-0e669eb1beeb.jpg",alt:"PXL_20220818_203916771"}),"\n",(0,n.jsx)(r.img,{src:"https://user-images.githubusercontent.com/11846963/189425493-3af80193-146f-489d-b39b-0564f36833d5.png",alt:"Screen Shot 2022-09-09 at 3 05 53 PM"}),"\n",(0,n.jsx)(r.img,{src:"https://user-images.githubusercontent.com/11846963/189423940-6301bd71-0593-43b9-9538-9274c8a51a91.jpg",alt:"PXL_20220818_204444320"}),"\n",(0,n.jsx)(r.img,{src:"https://user-images.githubusercontent.com/11846963/189423987-959061a7-e64f-4df4-a1ac-faf78f344d7c.jpg",alt:"PXL_20220818_204942366"}),"\n",(0,n.jsx)(r.img,{src:"https://user-images.githubusercontent.com/11846963/189424014-1df454db-47b3-4b6a-91e1-1086146aac36.jpg",alt:"PXL_20220818_204956620"}),"\n",(0,n.jsx)(r.img,{src:"https://user-images.githubusercontent.com/11846963/189424121-08097680-0b4f-4d71-b3e4-7da41642a83c.jpg",alt:"PXL_20220818_205352767 MP"}),"\n",(0,n.jsx)(r.img,{src:"https://user-images.githubusercontent.com/11846963/189424474-78269f8e-f0f0-421d-b0b6-20d15e67e7b1.jpg",alt:"PXL_20220818_214950616"})]}),"\n",(0,n.jsx)(r.h2,{id:"pairing-the-taranis-to-the-x8r-receiver",children:"Pairing the Taranis to the X8R Receiver"}),"\n",(0,n.jsxs)(r.p,{children:["This video does a great job of demonstrating this process and can be found ",(0,n.jsx)(r.a,{href:"https://youtu.be/xL1QglHdlYc?t=114",children:(0,n.jsx)(r.strong,{children:"here"})}),".  If the X8R displays a solid green light, you have successfully paired the two and can move on to the next step - setting up the Feather to read the commands sent from the joystick, and pass those over Canbus to the Amiga dashboard / controller to command the robot."]}),"\n",(0,n.jsx)(r.h2,{id:"code",children:"Code"}),"\n",(0,n.jsxs)(r.p,{children:["The code for this example can be found ",(0,n.jsx)(r.a,{href:"https://github.com/farm-ng/amiga-dev-kit/tree/main/circuitpy/examples/FPV",children:(0,n.jsx)(r.strong,{children:"here"})})," and builds on top of the ",(0,n.jsx)(r.a,{href:"./../hello_main_loop/",children:(0,n.jsx)(r.strong,{children:"hello_main_loop"})})," example, but replaces the keyboard input with radio control.\nInstalling the example ",(0,n.jsx)(r.code,{children:"code.py"})," file & ",(0,n.jsx)(r.code,{children:"lib/"})," directory follow the same procedure."]}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Connect your microcontroller to a PC"}),"\n",(0,n.jsxs)(r.li,{children:["Drop the ",(0,n.jsx)(r.code,{children:"code.py"})," file and the ",(0,n.jsx)(r.code,{children:"lib/"})," folder directly into the root of the mounted CIRCUITPY drive."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"running-the-example",children:"Running the example"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Wire up the SBUS"}),"\n",(0,n.jsxs)(r.li,{children:["From ",(0,n.jsx)(r.code,{children:"amiga-dev-kit/circuitpy/"}),", drop the ",(0,n.jsx)(r.code,{children:"code.py"})," file and the ",(0,n.jsx)(r.code,{children:"lib/"})," folder directly into the root of the mounted ",(0,n.jsx)(r.code,{children:"CIRCUITPY"})," drive."]}),"\n",(0,n.jsx)(r.li,{children:"Connect the microcontroller to the Amiga's canbus"}),"\n",(0,n.jsxs)(r.li,{children:["Enable ",(0,n.jsx)(r.code,{children:"Auto mode"})," on the Amiga's dashboard"]}),"\n",(0,n.jsxs)(r.li,{children:["Request ",(0,n.jsx)(r.code,{children:"Auto Active"})," mode by pushing the left joystick all the forward.","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["You should now see the ",(0,n.jsx)(r.code,{children:"Auto Active"})," mode enabled (green)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.li,{children:"Use the right joystick to enjoy driving the Amiga remotely!"}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>d,a:()=>o});var n=t(7294);const i={},s=n.createContext(i);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);