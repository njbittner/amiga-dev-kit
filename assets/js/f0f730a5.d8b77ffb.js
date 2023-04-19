"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5586],{3678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),s=(n(7294),n(3905));n(1839);const r={sidebar_label:"canbus_client",title:"canbus.canbus_client"},c=void 0,i={unversionedId:"reference/brain/canbus/canbus_client",id:"reference/brain/canbus/canbus_client",title:"canbus.canbus_client",description:"CanbusClient Objects",source:"@site/docs/reference/brain/canbus/canbus_client.md",sourceDirName:"reference/brain/canbus",slug:"/reference/brain/canbus/canbus_client",permalink:"/docs/reference/brain/canbus/canbus_client",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/reference/brain/canbus/canbus_client.md",tags:[],version:"current",frontMatter:{sidebar_label:"canbus_client",title:"canbus.canbus_client"},sidebar:"api",previous:{title:"version",permalink:"/docs/reference/circuitpy/utils/version"},next:{title:"packet",permalink:"/docs/reference/brain/canbus/packet"}},l={},u=[{value:"CanbusClient Objects",id:"canbusclient-objects",level:2},{value:"stream_raw",id:"stream_raw",level:4},{value:"stream_motors",id:"stream_motors",level:4},{value:"stream",id:"stream",level:4}],o={toc:u};function b(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"canbusclient-objects"},"CanbusClient Objects"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class CanbusClient(ServiceClient)\n")),(0,s.kt)("p",null,"Amiga canbus client."),(0,s.kt)("p",null,"Client class to connect with the Amiga brain canbus service.\nInherits from ServiceClient."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"config")," ",(0,s.kt)("em",{parentName:"li"},"ClientConfig")," - the grpc configuration data structure.")),(0,s.kt)("h4",{id:"stream_raw"},"stream","_","raw"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def stream_raw()\n")),(0,s.kt)("p",null,"Return the async streaming object of raw canbus messages."),(0,s.kt)("h4",{id:"stream_motors"},"stream","_","motors"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def stream_motors()\n")),(0,s.kt)("p",null,"Return the async streaming object of motor states."),(0,s.kt)("h4",{id:"stream"},"stream"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def stream()\n")),(0,s.kt)("p",null,"DEPRECATED: Use ",(0,s.kt)("inlineCode",{parentName:"p"},"stream_raw")," with v0.0.6+.\nThis will be phased out in v0.1.0"),(0,s.kt)("p",null,"Return the async streaming object of raw canbus messages."))}b.isMDXComponent=!0}}]);