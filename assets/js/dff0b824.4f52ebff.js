"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9680],{2719:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));a(1839);const o={id:"dashboard-user-guide",title:"Dashboard User Guide"},r=void 0,l={unversionedId:"dashboard/dashboard-user-guide",id:"dashboard/dashboard-user-guide",title:"Dashboard User Guide",description:"This is subject for change with new updates to the Dashboard.",source:"@site/docs/dashboard/dashboard_user_guide.md",sourceDirName:"dashboard",slug:"/dashboard/dashboard-user-guide",permalink:"/docs/dashboard/dashboard-user-guide",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/dashboard/dashboard_user_guide.md",tags:[],version:"current",frontMatter:{id:"dashboard-user-guide",title:"Dashboard User Guide"},sidebar:"Documentation",previous:{title:"Dashboard Overview",permalink:"/docs/dashboard/"},next:{title:"Amiga Control States",permalink:"/docs/dashboard/control-states"}},s={},d=[{value:"Dashboard overview video",id:"dashboard-overview-video",level:2},{value:"Entry Screen",id:"entry-screen",level:2},{value:"Home Screen",id:"home-screen",level:2},{value:"Motor Status Screen",id:"motor-status-screen",level:2},{value:"Auto Control Screen",id:"auto-control-screen",level:2},{value:"General Settings Tab",id:"general-settings-tab",level:2},{value:"The General Settings Tab",id:"the-general-settings-tab",level:3},{value:"The Pendant Settings",id:"the-pendant-settings",level:3},{value:"Advanced settings",id:"advanced-settings",level:3},{value:"H-bridge settings",id:"h-bridge-settings",level:3},{value:"PTO settings",id:"pto-settings",level:3},{value:"ID settings",id:"id-settings",level:3},{value:"Updator App",id:"updator-app",level:4},{value:"State Indicators",id:"state-indicators",level:3},{value:"E-stopped",id:"e-stopped",level:4},{value:"Cruise Control",id:"cruise-control",level:4},{value:"Auto Control",id:"auto-control",level:4}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This is subject for change with new updates to the Dashboard.\nThe current version of the Dashboard Firmware is ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.1.9"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11846963/186734463-aa149b3a-7510-4d5a-99ea-f9a8a96775d2.jpg",alt:"DSCF6570-2-16x9-aspect-reduced"})),(0,i.kt)("h2",{id:"dashboard-overview-video"},"Dashboard overview video"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/PKOhI4hbGUs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("h2",{id:"entry-screen"},"Entry Screen"),(0,i.kt)("p",null,'This is the entry screen of the dashboard. This screen will appear when you first turn on the Amiga.\n\u201cAmiga is ready\u201d and \u201cAmiga esta lista\u201d will appear and once you touch the "START" / "VAMOS" button\nyou will be taken to the home screen.'),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/233126363-7aee7937-d308-4d79-a424-33a1fe531bae.jpg",width:"320",height:"300"}),(0,i.kt)("p",null,'Alternatively if you receive the "Check pendant calibration" page,\nthis means that either you have defective pendant or your pendant needs to be calibrated.'),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/233126475-5416e312-9d77-4552-876c-f4129d30f244.jpg",width:"400",height:"500"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This button will take you to the same page as the ",(0,i.kt)("inlineCode",{parentName:"p"},"pendant")," section of the Settings tab.")),(0,i.kt)("p",null,"If your pendant is not being detected at all and if it says ",(0,i.kt)("inlineCode",{parentName:"p"},"No Pendant Detected"),"\nplease contact the Farm-ng Support immediately by visiting ",(0,i.kt)("a",{parentName:"p",href:"https://amiga.farm-ng.com/docs/support/"},"our Support page"),"."),(0,i.kt)("h2",{id:"home-screen"},"Home Screen"),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/233131301-372ac33f-1a21-4aa9-999e-5093eaa53360.jpg",width:"400",height:"500"}),(0,i.kt)("p",null,"This is the home screen of the dashboard. On this screen you will find:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The speedometer"),(0,i.kt)("li",{parentName:"ul"},"A preview of motor health"),(0,i.kt)("li",{parentName:"ul"},"Average motor temperature"),(0,i.kt)("li",{parentName:"ul"},"Battery level of the amiga")),(0,i.kt)("h2",{id:"motor-status-screen"},"Motor Status Screen"),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/232093032-cd99e871-5f09-41bb-9485-6e3cf1c3871b.jpg",width:"330",height:"300"}),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/232093025-48b6792e-08a3-48f8-b83e-52d4813d84e9.jpg",width:"330",height:"300"}),(0,i.kt)("p",null,"This screen for monitoring each motor in much more detail than that of the home screen.\nOn this screen you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Monitor the control state of the Amiga"),(0,i.kt)("li",{parentName:"ul"},"Voltage, RPM, temperature, and current of each motor / motor controller"),(0,i.kt)("li",{parentName:"ul"},"State of the CAN bus")),(0,i.kt)("h2",{id:"auto-control-screen"},"Auto Control Screen"),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/233127552-3a6f2f56-cddd-4b48-b947-bbd9292e2843.jpg",width:"320",height:"300"}),(0,i.kt)("p",null,"This screen is where the autonomous control of the amiga comes to life. Here you will be able to :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable and disable Auto Control"),(0,i.kt)("li",{parentName:"ul"},"Monitor the auto control state"),(0,i.kt)("li",{parentName:"ul"},"Monitor the commanded & measured speed and turning rates of the amiga")),(0,i.kt)("p",null,"If you are controlling the Amiga with a brain or other micro-controller,\nhere is where you will enable & monitor the auto control commands sent to your Amiga.\nAuto control examples include the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/virtual_joystick/virtual-joystick-overview"},"Virtual Joystick Example")," (brain)\nand the ",(0,i.kt)("a",{parentName:"p",href:"/docs/examples/FPV/"},"FPV example")," (micro-controller)."),(0,i.kt)("h2",{id:"general-settings-tab"},"General Settings Tab"),(0,i.kt)("p",null,"Now we have the settings tab, which may be the most important tab.\nHere on the settings tab you have a few options. Here you can find:"),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/233127789-39f05f32-e17e-4e7b-8118-91500a4bc75f.jpg",width:"320",height:"300"}),(0,i.kt)("h3",{id:"the-general-settings-tab"},"The General Settings Tab"),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/233127855-eafd4df9-555f-4154-a238-48c8a2961e3c.jpg",width:"320",height:"300"}),(0,i.kt)("p",null,"This page is where all of the general settings are located.\nHere you will be able to set the total ",(0,i.kt)("inlineCode",{parentName:"p"},"wheel_track")," of the Amiga,\nor even motor you would like to disable or enable."),(0,i.kt)("p",null,"The settings you can set on this page are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wheel_track")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"v_max_default")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_turn_rate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_turn_rate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"turtle_v")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"turtle_turn_rate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_accel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flip_joystick")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"steering_gamma")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"batt_lo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"batt_hi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pto_gear_ratio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_pto_rpm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_pto_rpm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_pto_rpm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"m10_on")," (motor A on)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"m11_on")," (motor B on)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"m12_on")," (motor C on)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"m13_on")," (motor D on)")),(0,i.kt)("h3",{id:"the-pendant-settings"},"The Pendant Settings"),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/231795336-43477c82-db0d-4fa7-9cfc-638af2e11ede.GIF",width:"320",height:"300"}),(0,i.kt)("p",null,"This page is the hub for the pendant. Here is where you will go to calibrate it,\nand to ensure all of the functions of the pendant are operational.\nThis including the buttons, joystick, and data reception."),(0,i.kt)("h3",{id:"advanced-settings"},"Advanced settings"),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/233129573-9df7f43f-14ea-49e0-a4e0-8efbfcf3e36f.jpg",width:"320",height:"300"}),(0,i.kt)("p",null,"This page are for specific function of the dashboard firmware.\nThe options under ",(0,i.kt)("inlineCode",{parentName:"p"},"Advance Settings")," are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Reboot Dashboard"),": This will give a soft reboot to the dashboard\nwithout having to power cycle your Amiga."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Factory Setting Reset"),": This setting will revert the general settings such as\n",(0,i.kt)("inlineCode",{parentName:"li"},"wheel_track"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"max_turn_rate"),", and more, back to the factory default values.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NOTE: These may not match the values when you first received your Amiga\nif you do not have the standard configuration."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Mount CIRCUITPY"),": When you would like to Mount CIRCUITPY to update the Dashboard Firmware,\nhere is where you will do that in order for your computer to communicate with your Dashboard."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Bootloader Mode"),": Similar to ",(0,i.kt)("inlineCode",{parentName:"li"},"Mount CIRCUITPY"),",\nwhen you would like to update the UF2 file on the dashboard you will need to\nplace it in a ",(0,i.kt)("inlineCode",{parentName:"li"},"Bootloader")," state. With this button you can perform that action.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For more information about Firmware Updates or how to perform an update,\nplease visit ",(0,i.kt)("a",{parentName:"p",href:"https://amiga.farm-ng.com/docs/dashboard/dashboard-fw"},"Dashboard Firmware Update"))),(0,i.kt)("h3",{id:"h-bridge-settings"},"H-bridge settings"),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/233127456-1f294f6f-69ac-4563-a070-9b25c2e78ac3.jpg",width:"320",height:"300"}),(0,i.kt)("p",null,"This page shows the status of the H-bridge linear actuators on your Amiga.\nThe H-bridge actuators are controlled with the arrow keys on the pendant.\nOnly one H-bridge can be actuated at a time,\nso the ",(0,i.kt)("inlineCode",{parentName:"p"},"left")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"right")," arrow keys are to select the active H-bridge device\nand the ",(0,i.kt)("inlineCode",{parentName:"p"},"up")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"down")," arrows are to move an ",(0,i.kt)("inlineCode",{parentName:"p"},"Active")," actuator.\nThere are three states you will see for the H-bridge actuators."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Red: ",(0,i.kt)("inlineCode",{parentName:"li"},"Not detected")),(0,i.kt)("li",{parentName:"ul"},"Yellow: ",(0,i.kt)("inlineCode",{parentName:"li"},"Idle")," (detected, but not selected)"),(0,i.kt)("li",{parentName:"ul"},"Green: ",(0,i.kt)("inlineCode",{parentName:"li"},"Active")," (detected and selected)")),(0,i.kt)("h3",{id:"pto-settings"},"PTO settings"),(0,i.kt)("p",null,"Currently only 1 PTO (power take-off) device is supported.\nYou will see a message that no PTO is detected if there is not a detected PTO device."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'If you see the "No PTO" message and expect a PTO device, contact farm-ng for support by visiting\n',(0,i.kt)("a",{parentName:"p",href:"https://amiga.farm-ng.com/docs/support/"},"our Support page"),".")),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/53625197/233201899-59ddb864-75dd-45d3-86c9-bdb7b3c4a358.jpg",width:"320"}),(0,i.kt)("p",null,"If there is detected a PTO device, you will see the following features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A direction toggle"),(0,i.kt)("li",{parentName:"ul"},"A PTO rpm slider",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The default, min, & max values of this slider can be configured on the settings page."))),(0,i.kt)("li",{parentName:"ul"},"A graph of PTO set-point & measured rpm values.")),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/53625197/233201446-d6ef777f-3650-4b69-bdce-7f61e10075ac.jpg",width:"320"}),(0,i.kt)("p",null,"Note that the PTO rpm values are the output RPM.\nThe PTO gear ratio can also be configured on the settings page."),(0,i.kt)("h3",{id:"id-settings"},"ID settings"),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/233126613-838261d6-a3ee-4f7c-b126-8f26162551c4.jpg",width:"320",height:"300"}),(0,i.kt)("p",null,"On this page, you will find important information about your Amiga, including the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Tractor Hardware ID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard Firmware")," version number, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Updator App"),"."),(0,i.kt)("h4",{id:"updator-app"},"Updator App"),(0,i.kt)("p",null,"On the ",(0,i.kt)("inlineCode",{parentName:"p"},"Updator App"),", you will be able to update your Amiga dashboard and Updator app itself\nthrough here. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Updator App")," to perform an Over-the-air update."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For more information about Firmware Updates or how to perform an update,\nplease visit ",(0,i.kt)("a",{parentName:"p",href:"https://amiga.farm-ng.com/docs/dashboard/dashboard-fw"},"Dashboard Firmware Update"))),(0,i.kt)("h3",{id:"state-indicators"},"State Indicators"),(0,i.kt)("p",null,"The state indicators are for distacting and understanding which control state your Amiga is in.\nThese states include, but are not limited to, ",(0,i.kt)("inlineCode",{parentName:"p"},"E-stopped"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Auto_ready"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Cruise Control"),"."),(0,i.kt)("h4",{id:"e-stopped"},"E-stopped"),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/232072807-af5208a0-786f-4ae8-8204-a5eef1999d02.jpg",width:"320",height:"300"}),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/232072818-d87e312f-88a2-4a6a-8f42-d8682aecd6c5.jpg",width:"315",height:"300"}),(0,i.kt)("p",null,"When your Amiga is E-stopped, a red border will display around the edges of your dashboard screen.\nWhen your Amiga is in this state, your motor controller will be un able to move on command."),(0,i.kt)("h4",{id:"cruise-control"},"Cruise Control"),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/232084662-8b3dcd53-06ac-4479-946a-97471815cb60.gif",width:"315",height:"300"}),(0,i.kt)("p",null,"This state will enable you to place your Amiga at a given speed and allow your Amiga to ",(0,i.kt)("inlineCode",{parentName:"p"},"cruise"),"\nat that speed. When this control state is activated,\na green border will be at the edge of your dashboard screen."),(0,i.kt)("h4",{id:"auto-control"},"Auto Control"),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/64480560/232085022-4a475981-e7fa-4e8f-967b-06827ca8924c.gif",width:"315",height:"300"}),(0,i.kt)("p",null,"This state will enable you to control your Amiga via external controls and through remote source.\nSome of these sources include the ",(0,i.kt)("a",{parentName:"p",href:"https://amiga.farm-ng.com/docs/tutorials/virtual_joystick/virtual-joystick-overview"},(0,i.kt)("inlineCode",{parentName:"a"},"virtual_joy_stick")),"."),(0,i.kt)("p",null,"When you activate the ",(0,i.kt)("inlineCode",{parentName:"p"},"auto_control")," feature on your dashboard.\nYou will see a yellow border appear around the edge of your dashboard.\nThis yellow border means your Amiga in the ",(0,i.kt)("inlineCode",{parentName:"p"},"auto_ready")," state and once the connection is secure\nit will then gain a green border meaning it is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"auto_active")," state."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For more information about Amiga Control States , please visit ",(0,i.kt)("a",{parentName:"p",href:"https://amiga.farm-ng.com/docs/dashboard/control-states"},"Amiga Control States"))))}p.isMDXComponent=!0}}]);