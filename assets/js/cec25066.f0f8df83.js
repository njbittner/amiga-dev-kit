"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1130],{4123:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));a(1839);const s={id:"auto-control",title:"06 - Auto Control"},i="Auto Control",r={unversionedId:"examples/virtual_joystick/auto-control",id:"examples/virtual_joystick/auto-control",title:"06 - Auto Control",description:"Control the Amiga",source:"@site/docs/examples/virtual_joystick/06_auto_control.md",sourceDirName:"examples/virtual_joystick",slug:"/examples/virtual_joystick/auto-control",permalink:"/docs/examples/virtual_joystick/auto-control",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/virtual_joystick/06_auto_control.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"auto-control",title:"06 - Auto Control"},sidebar:"examples",previous:{title:"05 - Virtual Joystick Widget",permalink:"/docs/examples/virtual_joystick/virtual-joystick-widget"},next:{title:"07 - Further Exercises",permalink:"/docs/examples/virtual_joystick/further-exercises"}},l={},p=[{value:"Control the Amiga",id:"control-the-amiga",level:3},{value:"imports",id:"imports",level:4},{value:"Additional args",id:"additional-args",level:4},{value:"send_can_msgs",id:"send_can_msgs",level:4},{value:"pose_generator",id:"pose_generator",level:4},{value:"add as an task",id:"add-as-an-task",level:4},{value:"Run the app - Amiga control",id:"run-the-app---amiga-control",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"auto-control"},"Auto Control"),(0,o.kt)("h3",{id:"control-the-amiga"},"Control the Amiga"),(0,o.kt)("p",null,"Finally, we will use this virtual joystick and the canbus client / service connection to control the Amiga to get us to the full Virtual Joystick example."),(0,o.kt)("h4",{id:"imports"},"imports"),(0,o.kt)("p",null,"The imports we need to add for this step are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Python"},"import logging\nfrom farm_ng.canbus.packet import make_amiga_rpdo1_proto\n")),(0,o.kt)("h4",{id:"additional-args"},"Additional args"),(0,o.kt)("p",null,"We'll add two ",(0,o.kt)("inlineCode",{parentName:"p"},"float")," parameters to the ",(0,o.kt)("inlineCode",{parentName:"p"},"VirtualJoystickApp")," in the constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Python"},"# Parameters\nself.max_speed: float = 1.0\nself.max_angular_rate: float = 1.0\n")),(0,o.kt)("h4",{id:"send_can_msgs"},"send_can_msgs"),(0,o.kt)("p",null,"To control the robot from our app, we will use the canbus client to send can messages to the canbus service.\nThe service will then unpack, reformat, and forward the can message onto the CAN bus."),(0,o.kt)("p",null,"This task uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto"},"sendCanbusMessage")," RPC, which defines a client stream.\nThe client stream can be thought of as the inverse of the server streams we've seen so far.\nIn this client stream, the canbus client can sends a stream of requests, of type ",(0,o.kt)("inlineCode",{parentName:"p"},"SendCanbusMessageRequest"),", to the canbus service and receives a single message, of type ",(0,o.kt)("inlineCode",{parentName:"p"},"SendCanbusMessageReply"),",  until the stream is explicitly stopped, or either of the client or service is killed.\nIn this app, we never actually stop the stream, so don't expect to receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"SendCanbusMessageReply"),"."),(0,o.kt)("p",null,"The client streaming RPC is started by passing an iterator containing the messages we want to stream.\nWe use the ",(0,o.kt)("a",{parentName:"p",href:"https://book.pythontips.com/en/latest/generators.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Generator"))," defined in ",(0,o.kt)("a",{parentName:"p",href:"#pose_generator"},"pose_generator")," for our iterator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Python"},'async def send_can_msgs(self, client: CanbusClient) -> None:\n    """This task ensures the canbus client sendCanbusMessage method has the pose_generator it will use to send\n    messages on the can bus."""\n    while self.root is None:\n        await asyncio.sleep(0.01)\n\n    while True:\n        if client.state.value != canbus_pb2.CanbusServiceState.RUNNING:\n            logging.debug("Controller requires running canbus service")\n            client.stub.sendCanbusMessage(self.pose_generator())\n        await asyncio.sleep(0.25)\n')),(0,o.kt)("p",null,"This task ensures the canbus client ",(0,o.kt)("inlineCode",{parentName:"p"},"sendCanbusMessage")," method has the ",(0,o.kt)("a",{parentName:"p",href:"#pose_generator"},(0,o.kt)("inlineCode",{parentName:"a"},"pose_generator"))," it will use to send messages on the can bus."),(0,o.kt)("p",null,"Once the root of the kivy app is created, this task ensures the ",(0,o.kt)("inlineCode",{parentName:"p"},"sendCanbusMessage")," RPC starts and then loops forever.\nWhile it seems unnecessary to loop forever here, it gives you a placeholder for additional logic you may want to implement!"),(0,o.kt)("h4",{id:"pose_generator"},"pose_generator"),(0,o.kt)("p",null,"We create a ",(0,o.kt)("a",{parentName:"p",href:"https://book.pythontips.com/en/latest/generators.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Generator"))," that will run forever as an iterator.\nIf you're not familiar with the concept, you can think of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Genrator")," as a function that returns an array one element at a time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Python"},'async def pose_generator(self, period: float = 0.02):\n    """The pose generator yields an AmigaRpdo1 (auto control command) for the canbus client to send on the bus\n    at the specified period (recommended 50hz) based on the onscreen joystick position."""\n    while self.root is None:\n        await asyncio.sleep(0.01)\n\n    joystick: VirtualJoystickWidget = self.root.ids["joystick"]\n    while True:\n        msg: canbus_pb2.RawCanbusMessage = make_amiga_rpdo1_proto(\n            state_req=AmigaControlState.STATE_AUTO_ACTIVE,\n            cmd_speed=self.max_speed * joystick.joystick_pose.y,\n            cmd_ang_rate=self.max_angular_rate * -joystick.joystick_pose.x,\n        )\n        yield canbus_pb2.SendCanbusMessageRequest(message=msg)\n        await asyncio.sleep(period)\n')),(0,o.kt)("p",null,"Once the root of the kivy app is created, the ",(0,o.kt)("inlineCode",{parentName:"p"},"VirtualJoystickWidget")," is accessed by its ",(0,o.kt)("inlineCode",{parentName:"p"},"id:"),"."),(0,o.kt)("p",null,"The pose generator yields an ",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaRpdo1")," (auto control command) for the canbus client to send on the bus at the specified period (recommended 50hz) based on the onscreen joystick position.\nIt makes use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"make_amiga_rpdo1_proto()")," method that takes a:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"requested state (AmigaControlState)"),(0,o.kt)("li",{parentName:"ul"},"request speed (forward positive)"),(0,o.kt)("li",{parentName:"ul"},"requested angular rate (left positive)")),(0,o.kt)("p",null,"to construct a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/protos/farm_ng/canbus/canbus.proto"},(0,o.kt)("inlineCode",{parentName:"a"},"RawCanbusMessage")),".\nThese messages, packed into a ",(0,o.kt)("inlineCode",{parentName:"p"},"SendCanbusMessageRequest"),", are ",(0,o.kt)("inlineCode",{parentName:"p"},"yield"),"-ed to the canbus service to send on the CAN bus."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaRpdo1")," message is only a request. The vehicle control unit (VCU) in the Amiga dashboard has safety critical logic that prevents unsafe auto control.")),(0,o.kt)("p",null,"Each loop we sleep to enforce the ideal rate of streaming ",(0,o.kt)("inlineCode",{parentName:"p"},"AmigaRpdo1")," CAN messages, which is 50 hz. You can modify the period parameter, but go to slow and you lose responsiveness, and go too fast and you risk saturating the CAN bus, which can cause loss of communication between all components on the bus."),(0,o.kt)("h4",{id:"add-as-an-task"},"add as an task"),(0,o.kt)("p",null,"Remember to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"send_can_msgs()")," method to the ",(0,o.kt)("inlineCode",{parentName:"p"},"asyncio.Task")," in our list in ",(0,o.kt)("inlineCode",{parentName:"p"},"app_func()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Python"},"self.async_tasks.append(asyncio.ensure_future(self.send_can_msgs(canbus_client)))\n")),(0,o.kt)("h3",{id:"run-the-app---amiga-control"},"Run the app - Amiga control"),(0,o.kt)("p",null,"Now sync the app to the Brain and launch it with the following instructions!"),(0,o.kt)("admonition",{title:"Deploy Instructions",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/docs/brain/brain-apps"},"Deploy Instructions")," for syncing the app onto the Amiga Brain.")),(0,o.kt)("p",null,"Everything should look just like the last checkpoint, but now you can drive the Amiga the the virtual joystick!"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure all your cables are disconnected from the Amiga and no one is in the way of the Amiga before driving around!")),(0,o.kt)("p",null,"Navigate to the auto tab and enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"Auto Ready")," state.\nThe Brain should take control and enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"Auto Active")," state right away, allowing you to drive with the screen.\nYou should see the state on the dashboard match that displayed on the Brain in your app."),(0,o.kt)("admonition",{title:"Coming soon",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Link to dashboard instructions to enter auto mode")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/200641685-a712fb2d-66f7-4ec2-bf92-e6d96c93cadb.png",alt:"auto_control"})),(0,o.kt)("admonition",{title:"Coming soon",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Link to virtual joystick example")))}u.isMDXComponent=!0}}]);