"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9418],{1223:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));a(1839);const i={id:"record-track",title:"Record Track"},o="Filter Track Recording Example",l={unversionedId:"examples/record_track/record-track",id:"examples/record_track/record-track",title:"Record Track",description:"This example",source:"@site/docs/examples/record_track/README.md",sourceDirName:"examples/record_track",slug:"/examples/record_track/",permalink:"/docs/examples/record_track/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/record_track/README.md",tags:[],version:"current",frontMatter:{id:"record-track",title:"Record Track"},sidebar:"examples",previous:{title:"Filter Client",permalink:"/docs/examples/filter_client/"},next:{title:"Monitor App",permalink:"/docs/examples/monitor_app/"}},s={},c=[{value:"1. Install the farm-ng Brain ADK package",id:"1-install-the-farm-ng-brain-adk-package",level:2},{value:"2. Install the example&#39;s dependencies",id:"2-install-the-examples-dependencies",level:2},{value:"3. Execute the Python script",id:"3-execute-the-python-script",level:2},{value:"4. Customize the run",id:"4-customize-the-run",level:2},{value:"5. Code overview",id:"5-code-overview",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"filter-track-recording-example"},"Filter Track Recording Example"),(0,n.kt)("p",null,"This ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/py/examples/record_track/main.py"},"example"),"\noperates as a standalone Python script,\nin which an ",(0,n.kt)("inlineCode",{parentName:"p"},"EventClient")," to the filter running on an Amiga brain is created.\nThis example records the filter track from the state estimation filter running on the Amiga.\nWhen recording a track for the controller to later follow,\nwe use the ",(0,n.kt)("inlineCode",{parentName:"p"},"/track")," output stream from the filter service."),(0,n.kt)("p",null,"The requirements to run this example are to have a\n",(0,n.kt)("a",{parentName:"p",href:"/docs/intelligence-kit/brain/brain-v2/"},(0,n.kt)("strong",{parentName:"a"},"farm-ng brain"))," running the ",(0,n.kt)("inlineCode",{parentName:"p"},"filter service"),"."),(0,n.kt)("p",null,"You can either run this example directly on a brain by ",(0,n.kt)("inlineCode",{parentName:"p"},"ssh"),"'ing in,\nor use your local PC.\nIf using your local PC, it should be either connected to the same local network as the brain\nor linked to it through tailscale."),(0,n.kt)("p",null,"The filter service will add to the track whenever a sufficient distance,\nas a combination of linear and angular difference from the last track pose,\nhas passed (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"0.1")," meters or radians)."),(0,n.kt)("p",null,"A valid path for the existing controller is one with motion that is either turn-in-place or forwards.\nForward motion can be either straight or curved.\nThe filter service will ",(0,n.kt)("strong",{parentName:"p"},"NOT")," add to the track under certain conditions\nthat would make following this track difficult or undesirable.\nThis includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Poor state estimation results (lack of filter convergence)"),(0,n.kt)("li",{parentName:"ul"},"State estimation missing required sensor data"),(0,n.kt)("li",{parentName:"ul"},"Driving backwards"),(0,n.kt)("li",{parentName:"ul"},"Discontinuities in the path")),(0,n.kt)("h2",{id:"1-install-the-farm-ng-brain-adk-package"},"1. Install the ",(0,n.kt)("a",{parentName:"h2",href:"/docs/brain/brain-install"},"farm-ng Brain ADK package")),(0,n.kt)("h2",{id:"2-install-the-examples-dependencies"},"2. Install the example's dependencies"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"It is recommended to also install these dependencies and run the\nexample in the brain ADK virtual environment.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# assuming you're already in the amiga-dev-kit/ directory\ncd farm-ng-amiga/py/examples/record_track\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r requirements.txt\n")),(0,n.kt)("h2",{id:"3-execute-the-python-script"},"3. Execute the Python script"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"python3 main.py --service-config service_config.json --track-name my_new_track\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"By default, the host address is assumed to be ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost"),".")),(0,n.kt)("p",null,"Once you've started the script,\ndrive your Amiga along the route you wish to record as a track for the controller to later follow.\nWhen you are done driving the track, kill the script with ",(0,n.kt)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,n.kt)("inlineCode",{parentName:"p"},"C"),"."),(0,n.kt)("h2",{id:"4-customize-the-run"},"4. Customize the run"),(0,n.kt)("p",null,"If you want to record the track on your laptop, by connecting with a gRPC client over Wifi,\nyou can change the ",(0,n.kt)("inlineCode",{parentName:"p"},"host")," field in ",(0,n.kt)("inlineCode",{parentName:"p"},"service_config.json")," from ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost"),"\nto your robot's name (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"aluminum-pineapple"),")."),(0,n.kt)("p",null,"You can optionally specify the ",(0,n.kt)("inlineCode",{parentName:"p"},"--output-dir")," to change the default directory\nin which your track file will be saved."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"python3 main.py --help\n\nusage: amiga-record-track [-h] --service-config SERVICE_CONFIG --track-name TRACK_NAME\n                          [--output-dir OUTPUT_DIR]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --service-config SERVICE_CONFIG\n                        The filter service config.\n  --track-name TRACK_NAME\n                        The name of the track.\n  --output-dir OUTPUT_DIR\n                        The directory to save the track to.\n")),(0,n.kt)("h3",{id:"5-code-overview"},"5. Code overview"),(0,n.kt)("p",null,"In this example we use the ",(0,n.kt)("inlineCode",{parentName:"p"},"EventClient")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"subscribe")," method to receive the filter track stream."),(0,n.kt)("p",null,"In this example, we:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Request that the filter reset the tracking of the filter track with the ",(0,n.kt)("inlineCode",{parentName:"li"},"/clear_track")," request",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This will clear any previously hit criteria that would cause the filter to stop adding to the\ntrack. See above for more details."))),(0,n.kt)("li",{parentName:"ul"},"Stream the ",(0,n.kt)("inlineCode",{parentName:"li"},"/track")," topic from the filter service"),(0,n.kt)("li",{parentName:"ul"},"Write (or overwrite) the full ",(0,n.kt)("inlineCode",{parentName:"li"},"FilterTrack")," proto to disk every time a pose is added to the track",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This allows you to exit the program at anytime with the track you have recorded up to that point")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'async def main(service_config_path: Path, track_name: str, output_dir: Path) -> None:\n    """Run the filter service client to record a track.\n\n    Args:\n        service_config_path (Path): The path to the filter service config.\n        track_name (str): The name of the track.\n        output_dir (Path): The directory to save the track to.\n    """\n    # create a client to the filter service\n    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())\n\n    # Clear the track so everything going forward is tracked\n    await EventClient(config).request_reply("/clear_track", Empty())\n\n    # Create a list to store the filter track states\n    filter_track_states: list[FilterState] = []\n\n    # Subscribe to the filter track topic\n    async for event, message in EventClient(config).subscribe(config.subscriptions[0], decode=True):\n\n        print("###################")\n        print("Adding to track:")\n        print(message)\n\n        # Add the filter state to the list\n        filter_track_states.append(message)\n\n        # Write the FilterTrack to disk, overwriting the file each time\n        if not proto_to_json_file(\n            output_dir / f"{track_name}.json", FilterTrack(states=filter_track_states, name=track_name)\n        ):\n            raise RuntimeError(f"Failed to write track to {output_dir}")\n\n\nif __name__ == "__main__":\n    parser = argparse.ArgumentParser(prog="amiga-record-track")\n    parser.add_argument("--service-config", type=Path, required=True, help="The filter service config.")\n    parser.add_argument("--track-name", type=str, required=True, help="The name of the track.")\n    parser.add_argument(\n        "--output-dir", type=Path, default=Path(__file__).parent,\n        help="The directory to save the track to."\n    )\n    args = parser.parse_args()\n\n    if not args.output_dir.exists() or not args.output_dir.is_dir():\n        raise ValueError(f"Invalid output directory: {args.output_dir}")\n\n    if not args.track_name:\n        raise ValueError("No track name provided.")\n\n    asyncio.run(main(args.service_config, args.track_name, args.output_dir))\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We highly recommend to have some basic knowledge about\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("inlineCode",{parentName:"strong"},"asyncio"))),".")))}d.isMDXComponent=!0}}]);