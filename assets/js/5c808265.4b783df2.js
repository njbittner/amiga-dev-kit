"use strict";(self.webpackChunkamiga_developers_website=self.webpackChunkamiga_developers_website||[]).push([[3490],{2811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(5893),s=t(1151);const i={id:"service-counter",title:"Service Counter"},c=void 0,l={id:"examples/service_counter/service-counter",title:"Service Counter",description:"This is a subsequent example of the service_client example",source:"@site/docs/examples/service_counter/README.md",sourceDirName:"examples/service_counter",slug:"/examples/service_counter/",permalink:"/docs/examples/service_counter/",draft:!1,unlisted:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/service_counter/README.md",tags:[],version:"current",frontMatter:{id:"service-counter",title:"Service Counter"},sidebar:"examples",previous:{title:"Service Client",permalink:"/docs/examples/service_client/"},next:{title:"Service Propagation",permalink:"/docs/examples/service_propagation/"}},a={},o=[{value:"Requirements",id:"requirements",level:3},{value:"Create the service",id:"create-the-service",level:3},{value:"Create the client",id:"create-the-client",level:3},{value:"Run the example",id:"run-the-example",level:2},{value:"1. Run the service",id:"1-run-the-service",level:3},{value:"2. Subscribe to the service",id:"2-subscribe-to-the-service",level:3},{value:"3. Reset the counter",id:"3-reset-the-counter",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This is a subsequent example of the ",(0,r.jsx)(n.a,{href:"/docs/examples/service_client/",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"service_client"})})})," example\nwhere we will show how to use the ",(0,r.jsx)(n.code,{children:"publish"})," method from ",(0,r.jsx)(n.code,{children:"EventServiceGrpc"})," to publish messages\nto later use the ",(0,r.jsx)(n.code,{children:"EventClient"})," to interact with the service."]}),"\n",(0,r.jsx)(n.p,{children:"In particular, we will create a service that will have a counter running in a separate\ntask and will publish the counter value at fixed rate. We will show how to use the client\nto subscribe to the service and will print the counter value every time it receives a message.\nIn addition, the client will be able to request the service to reset the counter to zero."}),"\n",(0,r.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsx)(n.p,{children:"This example only requires the farm-ng-core package."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip3 install farm-ng-core\n\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["We highly recommend to have some basic knowledge about\n",(0,r.jsx)(n.a,{href:"https://docs.python.org/3/library/asyncio.html",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"asyncio"})})}),",\n",(0,r.jsx)(n.a,{href:"https://grpc.io/docs/what-is-grpc/introduction/",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"gRPC"})})}),",\nand ",(0,r.jsx)(n.a,{href:"https://developers.google.com/protocol-buffers/docs/pythontutorial",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"protobuf"})})}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"create-the-service",children:"Create the service"}),"\n",(0,r.jsxs)(n.p,{children:["We first create a ",(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/service_counter/client.py",children:"service"}),"\nthat will publish the counter value at a certain\nrate. For this, we will create a ",(0,r.jsx)(n.a,{href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/service_counter/counter.py",children:(0,r.jsx)(n.code,{children:"counter.py"})}),"\nprogram that will\ninstantiate the ",(0,r.jsx)(n.code,{children:"EventServiceGrpc"})," and will run the service leveraging\nthe ",(0,r.jsx)(n.code,{children:"serve"})," method with the ",(0,r.jsx)(n.code,{children:"asyncio"})," event loop."]}),"\n",(0,r.jsxs)(n.p,{children:["In the same program, we will create a ",(0,r.jsx)(n.code,{children:"CounterService"})," class that will\nimplement the logic of the service, including the concurrent task that\nwill run the counter. The ",(0,r.jsx)(n.code,{children:"CounterService"})," class will also have a method\nto handle the ",(0,r.jsx)(n.code,{children:"requests"})," from the client. The ",(0,r.jsx)(n.code,{children:"requests"})," method is a\ncoroutine that triggers the ",(0,r.jsx)(n.code,{children:"request_handler"})," method in the service,\nin that case to reset the counter to zero."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class CounterServer:\n    def __init__(self, event_service: EventServiceGrpc) -> None:\n        """Initialize the service.\n        Args:\n            event_service: The event service to use for communication.\n        """\n        self._event_service = event_service\n        self._event_service.add_request_reply_handler(self.request_reply_handler)\n\n        self._counter: int = 0\n        self._rate: float = 1.0\n\n    async def request_reply_handler(self, event: Event, message: Message) -> None:\n        """The callback for handling request/reply messages."""\n        if event.uri.path == "/reset_counter":\n            self._counter = 0\n\n        return Empty()\n\n    async def run(self) -> None:\n        """Run the main task."""\n        while True:\n            await self._event_service.publish("/counter", Int32Value(value=self._counter))\n            self._counter += 1\n            await asyncio.sleep(1.0 / self._rate)\n\n    async def serve(self) -> None:\n        await asyncio.gather(self._event_service.serve(), self.run())\n'})}),"\n",(0,r.jsx)(n.h3,{id:"create-the-client",children:"Create the client"}),"\n",(0,r.jsxs)(n.p,{children:["For the client, we will create a ",(0,r.jsx)(n.code,{children:"client.py"})," program that will implement a thin wrapper\nclass ",(0,r.jsx)(n.code,{children:"CounterClient"})," around the ",(0,r.jsx)(n.code,{children:"EventClient"})," class. The ",(0,r.jsx)(n.code,{children:"CounterClient"})," will\nhave a method to ",(0,r.jsx)(n.code,{children:"subscribe"})," to the events stream coming from the ",(0,r.jsx)(n.code,{children:"/counter"})," path."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class CounterClient:\n    def __init__(self, service_config: EventServiceConfig) -> None:\n        """Initialize the client.\n        Args:\n            service_config: The service config.\n        """\n        self._event_client = EventClient(service_config)\n\n    async def subscribe(self) -> None:\n        """Run the main task."""\n        async for event, message in self._event_client.subscribe(\n            request=SubscribeRequest(uri=Uri(path="/counter"), every_n=1), decode=True\n        ):\n            print(f"Received message: {message}")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In the same program, we will create a ",(0,r.jsx)(n.code,{children:"main"})," function that will instantiate the\n",(0,r.jsx)(n.code,{children:"EventServiceConfig"})," and the ",(0,r.jsx)(n.code,{children:"CounterClient"}),". The ",(0,r.jsx)(n.code,{children:"main"})," function will have a\ncouple high level commands to ",(0,r.jsx)(n.code,{children:"subscribe"})," to the ",(0,r.jsx)(n.code,{children:"/counter"})," path and to ",(0,r.jsx)(n.code,{children:"request"}),"\nthe service to reset the counter to zero."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'async def command_subscribe(client: CounterClient) -> None:\n    """Subscribe to the counter service."""\n    await client.subscribe()\n\n\nasync def command_reset(client: CounterClient) -> None:\n    """Reset the counter."""\n    await client._event_client.request_reply("/reset_counter", Empty())\n'})}),"\n",(0,r.jsx)(n.h2,{id:"run-the-example",children:"Run the example"}),"\n",(0,r.jsx)(n.h3,{id:"1-run-the-service",children:"1. Run the service"}),"\n",(0,r.jsx)(n.p,{children:"In a first terminal, run the service:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python counter.py --service-config service_config.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"you should see the following output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Starting server on port 5001\nServer started\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-subscribe-to-the-service",children:"2. Subscribe to the service"}),"\n",(0,r.jsx)(n.p,{children:"In a second terminal, run the client:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python client.py --service-config service_config.json subscribe\n"})}),"\n",(0,r.jsx)(n.p,{children:"you should see the following output and the counter value increasing:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Received message: value: 3\n\nReceived message: value: 4\n\nReceived message: value: 5\n\nReceived message: value: 6\n\n...\n...\n"})}),"\n",(0,r.jsx)(n.h3,{id:"3-reset-the-counter",children:"3. Reset the counter"}),"\n",(0,r.jsx)(n.p,{children:"In a third terminal, run the client:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python client.py --service-config service_config.json reset\n"})}),"\n",(0,r.jsx)(n.p,{children:"you should see the following output:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Received message:\nReceived message: value: 1\n\nReceived message: value: 2\n\nReceived message: value: 3\n...\n...\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var r=t(7294);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);