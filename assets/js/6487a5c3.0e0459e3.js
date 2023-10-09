"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4731],{3214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));n(1839);const s={id:"multi-client-geoimage",title:"Multi Client GeoImage"},o=void 0,l={unversionedId:"examples/multi_client_geoimage/multi-client-geoimage",id:"examples/multi_client_geoimage/multi-client-geoimage",title:"Multi Client GeoImage",description:"Link to multiclientgeoimage/main.py",source:"@site/docs/examples/multi_client_geoimage/README.md",sourceDirName:"examples/multi_client_geoimage",slug:"/examples/multi_client_geoimage/",permalink:"/docs/examples/multi_client_geoimage/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/multi_client_geoimage/README.md",tags:[],version:"current",frontMatter:{id:"multi-client-geoimage",title:"Multi Client GeoImage"},sidebar:"examples",previous:{title:"Motor State",permalink:"/docs/examples/motor_state/"},next:{title:"Multi Client Subscriber",permalink:"/docs/examples/multi_client_subscriber/"}},r={},p=[{value:"Link to <code>multi_client_geoimage/main.py</code>",id:"link-to-multi_client_geoimagemainpy",level:3},{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:3},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:3},{value:"3. Create a client wrapper",id:"3-create-a-client-wrapper",level:3},{value:"4. Run the client",id:"4-run-the-client",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"link-to-multi_client_geoimagemainpy"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/multi_client_geoimage/main.py"},"Link to ",(0,a.kt)("inlineCode",{parentName:"a"},"multi_client_geoimage/main.py"))),(0,a.kt)("p",null,"This example shows how to leverage a multi client application to create a geoimage\nfrom the ",(0,a.kt)("inlineCode",{parentName:"p"},"oak")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"gps")," services. We show how to implement a simple technique to\nsynchronize the images and the gps data."),(0,a.kt)("p",null,"You can either run this example directly on a brain by ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh"),"'ing in, or use your local PC.\nTo successfully run this example, ensure that a ",(0,a.kt)("a",{parentName:"p",href:"/docs/brain/"},(0,a.kt)("strong",{parentName:"a"},"farm-ng brain"))," running\nOak cameras and GPS is active. Your local PC should be either connected to the same local\nnetwork as the brain or linked to it through tailscale."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We recommend to read first the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/examples/multi_client_subscriber"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"Multi Client Subscriber")))," tutorial.")),(0,a.kt)("h3",{id:"1-install-the-farm-ng-brain-adk-package"},"1. Install the ",(0,a.kt)("a",{parentName:"h3",href:"/docs/brain/brain-install"},"farm-ng Brain ADK package")),(0,a.kt)("h3",{id:"2-install-the-examples-dependencies"},"2. Install the example's dependencies"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# assuming you're already in the amiga-dev-kit/ directory\ncd farm-ng-amiga/py/examples/multi_client_geoimage\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r requirements.txt\n")),(0,a.kt)("h3",{id:"3-create-a-client-wrapper"},"3. Create a client wrapper"),(0,a.kt)("p",null,"We first create a ",(0,a.kt)("inlineCode",{parentName:"p"},"GeoTaggedImageSubscriber")," class that will encapsulate\nthe needed clients and the subscriptions. In order to showcase the synchronization\ntechnique, we will also create a queue to store the images since they come\nin faster than we can process them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class GeoTaggedImageSubscriber:\n    """Example of subscribing to events from multiple clients."""\n\n    def __init__(self, service_config: EventServiceConfigList) -> None:\n        """Initialize the multi-client subscriber.\n\n        Args:\n            service_config: The service config.\n        """\n        self.service_config = service_config\n        self.clients: dict[str, EventClient] = {}\n\n        # populate the clients\n        config: EventServiceConfig\n        for config in self.service_config.configs:\n            if not config.port:\n                self.subscriptions = config.subscriptions\n                continue\n            self.clients[config.name] = EventClient(config)\n\n        # create a queue to store the images since they come in faster than we can process them\n        self.image_queue: asyncio.Queue = asyncio.Queue()\n')),(0,a.kt)("p",null,"This class will also have a method called ",(0,a.kt)("inlineCode",{parentName:"p"},"_subscribe")," that will allow us to\nsubscribe to the particular service. In the first place, we show how to filter the message type and\nif the message is of type ",(0,a.kt)("inlineCode",{parentName:"p"},"farm_ng.oak.proto.OakFrame")," we store it in the queue.\nIf the message is of type ",(0,a.kt)("inlineCode",{parentName:"p"},"farm_ng.gps.proto.GpsFrame")," we try to find the closest image in the queue."),(0,a.kt)("p",null,"In this example, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"get_stamp_by_semantics_and_clock_type")," function to get\nthe timestamp of the event. This function is used to get the timestamp of the event\nbased on the semantics and the clock type. The semantics is the type of event and\nthe clock type is the type of clock used to timestamp the event."),(0,a.kt)("p",null,"The threshold used to synchronize the images and the gps data is defined by\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"stamp_diff")," variable. This threshold depends on the precision of your application."),(0,a.kt)("p",null,"For educational purposes, we left a lot of ",(0,a.kt)("inlineCode",{parentName:"p"},"print")," statements in the code to\nvisualize the flow of the program. We recommend to remove them later in your application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'async def _subscribe(self, subscription: SubscribeRequest) -> None:\n  # the client name is the last part of the query\n  client_name: str = subscription.uri.query.split("=")[-1]\n  client: EventClient = self.clients[client_name]\n  # subscribe to the event\n  async for event, message in client.subscribe(subscription, decode=True):\n      print(f"Received event from {client_name}{event.uri.path}")\n      if isinstance(message, oak_pb2.OakFrame):\n          await self.image_queue.put((event, message))\n      elif isinstance(message, gps_pb2.GpsFrame):\n          stamp_gps = get_stamp_by_semantics_and_clock_type(\n              event, semantics="service/send", clock_type="monotonic"\n          )\n          if stamp_gps is None:\n              continue\n\n          geo_image = None\n\n          while self.image_queue.qsize() > 0:\n              event_image, image = await self.image_queue.get()\n              stamp_image = get_stamp_by_semantics_and_clock_type(\n                  event_image, semantics="service/send", clock_type="monotonic"\n              )\n              if stamp_image is None:\n                  continue\n              stamp_diff = abs(stamp_gps - stamp_image)\n\n              # NOTE: define this threshold depending on the precision of your application\n              if stamp_diff > 0.05:\n                  print(f"Skipping image because stamp_diff is too large: {stamp_diff}")\n                  continue\n              else:\n                  print(f"Synced image and gps data with stamp_diff: {stamp_diff}")\n                  geo_image = ((event_image, image), (event, message))\n                  break\n\n          if geo_image is None:\n              print("Could not sync image and gps data")\n              continue\n')),(0,a.kt)("p",null,"In addition, we provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," file example that contains the configuration of the\nservice. Notice that we subscribe to the ",(0,a.kt)("inlineCode",{parentName:"p"},"oak0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"gps")," services,\nin particular to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/left")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/pvt")," paths respectively."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you want to better understand the different GPS message types,\nmake sure to check this ",(0,a.kt)("a",{parentName:"p",href:"/docs/examples/file_reader_gps/"},"link"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "configs": [\n    {\n      "name": "gps",\n      "port": 3001,\n      "host": "localhost"\n    },\n    {\n      "name": "oak0",\n      "port": 50010,\n      "host": "localhost"\n    },\n    {\n      "name": "multi_subscriber",\n      "subscriptions": [\n        {\n          "uri": {\n            "path": "/left",\n            "query": "service_name=oak0"\n          },\n          "every_n": 2\n        },\n        {\n          "uri": {\n            "path": "/pvt",\n            "query": "service_name=gps"\n          },\n          "every_n": 1\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"4-run-the-client"},"4. Run the client"),(0,a.kt)("p",null,"In a terminal, run the client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --config config.json\n")),(0,a.kt)("p",null,"you should see the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Received event from gps/pvt\nCould not sync image and gps data\nReceived event from oak0/right\nReceived event from oak0/right\nReceived event from oak0/right\nReceived event from oak0/right\nReceived event from gps/pvt\nSkipping image because stamp_diff is too large: 0.3942121310028597\nSkipping image because stamp_diff is too large: 0.2926876120036468\nSkipping image because stamp_diff is too large: 0.1811352020013146\nSynced image and gps data with stamp_diff: 0.07548795500042615\nReceived event from oak0/right\nReceived event from oak0/right\nReceived event from oak0/right\nReceived event from oak0/right\nReceived event from oak0/right\nReceived event from gps/pvt\nSkipping image because stamp_diff is too large: 0.3935612499990384\nSkipping image because stamp_diff is too large: 0.3073112889978802\nSkipping image because stamp_diff is too large: 0.20796539900038624\nSkipping image because stamp_diff is too large: 0.10631262399692787\nSynced image and gps data with stamp_diff: 0.00445908099936787\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We highly recommend to have some basic knowledge about\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"asyncio"))),".")))}c.isMDXComponent=!0}}]);