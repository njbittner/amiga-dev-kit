"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8685],{2542:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));t(1839);const l={id:"file-reader-can",title:"File Reader CAN"},i="File Reader CAN Example",o={unversionedId:"examples/file_reader_can/file-reader-can",id:"examples/file_reader_can/file-reader-can",title:"File Reader CAN",description:"This file_reader_can example",source:"@site/docs/examples/file_reader_can/README.md",sourceDirName:"examples/file_reader_can",slug:"/examples/file_reader_can/",permalink:"/docs/examples/file_reader_can/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/file_reader_can/README.md",tags:[],version:"current",frontMatter:{id:"file-reader-can",title:"File Reader CAN"},sidebar:"examples",previous:{title:"File Reader",permalink:"/docs/examples/file_reader/"},next:{title:"File Reader GPS",permalink:"/docs/examples/file_reader_gps/"}},d={},s=[{value:"Download the log file",id:"download-the-log-file",level:2},{value:"Optional Make a Data folder",id:"optional-make-a-data-folder",level:2},{value:"Setup",id:"setup",level:2},{value:"Install",id:"install",level:2},{value:"Run example",id:"run-example",level:2}],p={toc:s};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"file-reader-can-example"},"File Reader CAN Example"),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples/file_reader_can"},(0,r.kt)("strong",{parentName:"a"},"file_reader_can example")),"\nparses the CAN data from a recorded log and prints the ",(0,r.kt)("inlineCode",{parentName:"p"},"AmigaTpdo1")," parsed\nvalues. The ",(0,r.kt)("inlineCode",{parentName:"p"},"AmigaTpdo1")," can packet contains\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"speed"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"angular rate")," of the Amiga, as\nreported by the vehicle control unit (VCU)."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you haven't already cloned the ",(0,r.kt)("inlineCode",{parentName:"p"},"farm-ng-amiga")," repository, do\nso ",(0,r.kt)("a",{parentName:"p",href:"/docs/brain/brain-install#clone-the-repository"},(0,r.kt)("strong",{parentName:"a"},"here")),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you already have the log file you want to run with this\nexample you can skip to ",(0,r.kt)("a",{parentName:"p",href:"#setup"},(0,r.kt)("strong",{parentName:"a"},"set up")))),(0,r.kt)("h2",{id:"download-the-log-file"},"Download the log file"),(0,r.kt)("admonition",{title:"deprecation warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This log file comes from a brain running Amiga OS ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.x")," versions.",(0,r.kt)("br",null),"\nPlease check back for an updated log file from a brain running ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.x")," Amiga OS software.")),(0,r.kt)("p",null,"Now you are going to download the log file that you will use in\nthis example.\n",(0,r.kt)("a",{parentName:"p",href:"https://farm-ng-dev-auto-plot-mvp.s3.us-west-2.amazonaws.com/datasets/western-growers-2022-12-05/events_12052022115852.bin"},(0,r.kt)("strong",{parentName:"a"},"Click here to download"))),(0,r.kt)("h2",{id:"optional-make-a-data-folder"},"[Optional]"," Make a Data folder"),(0,r.kt)("p",null,"We are going to make a folder that will store all of our log\nfiles, including the one you just downloaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd <to-your-base-directory>\nmkdir <data-file>\ncd <data-file>\npwd # the output of this is your <path>\n\n# Now that the file is downloaded you will do the following\n\ncd ~ # navigate to home directory\ncd Downloads\nmv events_12052022115852.bin <path-to-where-data-file-is-above> # moving the data to to data-folder\n")),(0,r.kt)("p",null," Now that you have your log file in the correct place, in your\nterminal navigate to where the repository ",(0,r.kt)("inlineCode",{parentName:"p"},"farm-ng-amiga")," is and\nopen Visual Studio Code."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Create first a virtual environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\nsource venv/bin/activate\n")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd py/examples/file_reader_can\npip install -r requirements.txt\n")),(0,r.kt)("h2",{id:"run-example"},"Run example"),(0,r.kt)("p",null,"Specify the file (download before)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --file-name <path-to-file>/events_12052022115852.bin\n")),(0,r.kt)("p",null,"If everything worked correctly you should now see a large stream\nof text come up in your terminal!"),(0,r.kt)("p",null,"The output should look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"AMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular\nrate 0.000 @ time 1512.775886915\nAMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular\nrate 0.000 @ time 1512.843416858\nAMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular\nrate 0.000 @ time 1512.866171608\nAMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular\nrate 0.000 @ time 1512.928378193\nAMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular\nrate 0.000 @ time 1512.985744047\nAMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular\nrate 0.000 @ time 1513.019865388\nAMIGA TPDO1 Amiga state 2 Measured speed 0.000 Measured angular\nrate 0.000 @ time 1513.076998664\n")),(0,r.kt)("p",null,"Congrats you are done!"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"There is another tutorial that walks you through getting data\ndirectly from the Amiga\n",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/import_log_file/"},(0,r.kt)("strong",{parentName:"a"},"here")),".")))}m.isMDXComponent=!0}}]);