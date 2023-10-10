"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1077],{2900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));t(1839);const i={id:"service-client",title:"Service Client"},s=void 0,l={unversionedId:"examples/service_client/service-client",id:"examples/service_client/service-client",title:"Service Client",description:"This example is the hello world of the farm-ng-core Event Service framework.",source:"@site/docs/examples/service_client/README.md",sourceDirName:"examples/service_client",slug:"/examples/service_client/",permalink:"/docs/examples/service_client/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/service_client/README.md",tags:[],version:"current",frontMatter:{id:"service-client",title:"Service Client"},sidebar:"examples",previous:{title:"Drive a Square",permalink:"/docs/examples/controller_square/"},next:{title:"Service Counter",permalink:"/docs/examples/service_counter/"}},o={},p=[{value:"Requirements",id:"requirements",level:3},{value:"Define your protobuf messages",id:"define-your-protobuf-messages",level:3},{value:"Create your own service",id:"create-your-own-service",level:3},{value:"Create the client",id:"create-the-client",level:3},{value:"Run the example",id:"run-the-example",level:2},{value:"1. Run the service",id:"1-run-the-service",level:3},{value:"2. Run the client",id:"2-run-the-client",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example is the hello world of the farm-ng-core Event Service framework."),(0,a.kt)("p",null,"The Event Service is a publish-subscribe service that allows to stream\ndata from the farm-ng-core services to its respective clients. The central piece\nof the Event Service is the ",(0,a.kt)("inlineCode",{parentName:"p"},"EventServiceGrpc")," service that is the main\nclass encapsulating the gRPC server."),(0,a.kt)("p",null,"In the following example, we will explain how to define your own service\nand how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"EventClient")," to subscribe to the service.\nYou will need a file to create the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/service_client/service.py"},"service"),"\nand another one to create the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/service_client/client.py"},"client")),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"This example only requires the farm-ng-core package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install farm-ng-core\n\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We highly recommend to have some basic knowledge about\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"asyncio"))),",\n",(0,a.kt)("a",{parentName:"p",href:"https://grpc.io/docs/what-is-grpc/introduction/"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"gRPC"))),",\nand ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/pythontutorial"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"protobuf"))),".")),(0,a.kt)("h3",{id:"define-your-protobuf-messages"},"Define your protobuf messages"),(0,a.kt)("p",null,"The farm-ng-core Event Service uses protobuf messages and leverages\ngRPC to communicate between client and server. The first step is to\ndefine your own protobuf messages."),(0,a.kt)("p",null,"For this example, we provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"two_ints.proto"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\n// The request message containing the two integers.\nmessage AddTwoIntsRequest {\n    int32 a = 1;\n    int32 b = 2;\n}\n\n// The response message containing the sum.\nmessage AddTwoIntsResponse {\n    int32 sum = 1;\n}\n')),(0,a.kt)("p",null,"We provide the generated Python code in the ",(0,a.kt)("inlineCode",{parentName:"p"},"two_ints_pb2.py")," file and\nits corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"two_ints_pb2.pyi")," file for type hinting. Optionally,\nyou can regenerate the Python code yourself using the ",(0,a.kt)("inlineCode",{parentName:"p"},"genprotos.py"),"."),(0,a.kt)("h3",{id:"create-your-own-service"},"Create your own service"),(0,a.kt)("p",null,"In order to create your own service, we will create an auxiliary class\nto encapsulate the ",(0,a.kt)("inlineCode",{parentName:"p"},"EventServiceGrpc")," class. This auxiliary class will\nbe called ",(0,a.kt)("inlineCode",{parentName:"p"},"AddTwoIntsServer")," and will easily allow us to define the\nservice."),(0,a.kt)("p",null,"The class ",(0,a.kt)("inlineCode",{parentName:"p"},"AddTwoIntsServer")," will have a method called ",(0,a.kt)("inlineCode",{parentName:"p"},"request_reply_handler"),"\nthat will be called every time a request is received. The method\n",(0,a.kt)("inlineCode",{parentName:"p"},"request_reply_handler")," will receive two arguments: the ",(0,a.kt)("inlineCode",{parentName:"p"},"Event")," and the\nrequest message. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Event")," contains the metadata of the request and\nthe request message contains the actual request message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class AddTwoIntServer:\n    """A simple service that implements the AddTwoInts service."""\n\n    def __init__(self, event_service: EventServiceGrpc) -> None:\n        """Initialize the service.\n\n        Args:\n            event_service: The event service to use for communication.\n        """\n        self._event_service = event_service\n        self._event_service.add_request_reply_handler(self.request_reply_handler)\n\n    @property\n    def logger(self) -> logging.Logger:\n        """Return the logger for this service."""\n        return self._event_service.logger\n\n    async def request_reply_handler(self, event: Event, message: two_ints_pb2.AddTwoIntsRequest) -> Message:\n        """The callback for handling request/reply messages."""\n        if event.uri.path == "/sum":\n            self.logger.info(f"Requested to sum {message.a} + {message.b}")\n\n            return two_ints_pb2.AddTwoIntsResponse(sum=message.a + message.b)\n\n        return Empty()\n')),(0,a.kt)("p",null,"To wrap up, we need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"service.py")," program that will instantiate\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"EventServiceGrpc")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"AddTwoIntServer")," and run the service leveraging\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"serve")," method with the ",(0,a.kt)("inlineCode",{parentName:"p"},"asyncio")," event loop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'if __name__ == "__main__":\n    parser = argparse.ArgumentParser(prog="farm-ng-service")\n    parser.add_argument("--service-config", type=Path, required=True, help="The service config.")\n    args = parser.parse_args()\n\n    # load the service config\n    service_config: EventServiceConfig = proto_from_json_file(args.service_config, EventServiceConfig())\n\n    # create the grpc server\n    event_service: EventServiceGrpc = EventServiceGrpc(grpc.aio.server(), service_config)\n\n    loop = asyncio.get_event_loop()\n\n    try:\n        # wrap and run the service\n        loop.run_until_complete(AddTwoIntServer(event_service).serve())\n    except KeyboardInterrupt:\n        print("Exiting...")\n    finally:\n        loop.close()\n')),(0,a.kt)("p",null,"Additionally, we provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"service_config.json")," file that contains the\nconfiguration of the service. The ",(0,a.kt)("inlineCode",{parentName:"p"},"service_config.json")," file contains\nthe following fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "two_int",\n    "port": 5001,\n    "host": "localhost",\n    "log_level": "DEBUG"\n}\n')),(0,a.kt)("h3",{id:"create-the-client"},"Create the client"),(0,a.kt)("p",null,"The client is a simple Python script that will connect to the service\nand subscribe to the service. For the client, we will leverage the\n",(0,a.kt)("inlineCode",{parentName:"p"},"EventClient")," class that will allow us to interact with the service."),(0,a.kt)("p",null,"In this example, we will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"client.py")," program that will instantiate\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"EventServiceConfig")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"EventClient"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"EventClient")," will\nrequest the service to sum two integers implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"request_reply"),"\nmethod. The ",(0,a.kt)("inlineCode",{parentName:"p"},"request_reply")," method is a coroutine that triggers a the\n",(0,a.kt)("inlineCode",{parentName:"p"},"request_reply_handler")," method in the service and returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Future"),"\nobject. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," object is used to retrieve the result of the\nrequest."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'async def main() -> None:\n    parser = argparse.ArgumentParser(prog="farm-ng-client")\n    parser.add_argument("--service-config", type=Path, required=True, help="The service config.")\n    parser.add_argument("--a", type=int, required=True, help="The first integer.")\n    parser.add_argument("--b", type=int, required=True, help="The second integer.")\n    args = parser.parse_args()\n\n    # create a client to the camera service\n    config: EventServiceConfig = proto_from_json_file(args.service_config, EventServiceConfig())\n\n    # request the sum of two integers\n    result = await EventClient(config).request_reply("/sum", AddTwoIntsRequest(a=args.a, b=args.b), decode=True)\n\n    print(f"Result of {args.a} + {args.b} = {result.sum}")\n\n\nif __name__ == "__main__":\n    asyncio.run(main())\n')),(0,a.kt)("h2",{id:"run-the-example"},"Run the example"),(0,a.kt)("h3",{id:"1-run-the-service"},"1. Run the service"),(0,a.kt)("p",null,"In a first terminal, run the service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python service.py --service-config config.json\n")),(0,a.kt)("p",null,"you should see the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Starting server on port 5001\nServer started\nSending /health: 0 to 0 clients\nSending /health: 1 to 0 clients\nSending /health: 2 to 0 clients\nSending /health: 3 to 0 clients\n...\n...\n")),(0,a.kt)("h3",{id:"2-run-the-client"},"2. Run the client"),(0,a.kt)("p",null,"In a second terminal, run the client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python client.py --service-config config.json --a 1 --b 2\n")),(0,a.kt)("p",null,"you should see the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Result of 1 + 2 = 3\n")))}u.isMDXComponent=!0}}]);