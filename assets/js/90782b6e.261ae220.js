"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9945],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),o=a(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),o=a(7294),i=a(6010),r=a(2389),l=a(7392),s=a(7094),p=a(2466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,a;const{lazy:r,block:c,defaultValue:d,values:h,groupId:k,className:g}=e,y=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=h?h:y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,l.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===d?d:null!=(t=null!=d?d:null==(a=y.find((e=>e.props.default)))?void 0:a.props.value)?t:y[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[C,T]=(0,o.useState)(f),S=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=k){const e=v[k];null!=e&&e!==C&&N.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,a=S.indexOf(t),n=N[a].value;n!==C&&(I(t),T(n),null!=k&&w(k,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{var n;const t=S.indexOf(e.currentTarget)+1;a=null!=(n=S[t])?n:S[0];break}case"ArrowLeft":{var o;const t=S.indexOf(e.currentTarget)-1;a=null!=(o=S[t])?o:S[S.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},g)},N.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>S.push(e),onKeyDown:O,onClick:E},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),r?(0,o.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,r.Z)();return o.createElement(c,(0,n.Z)({key:String(t)},e))}},7009:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(7462),o=(a(7294),a(3905)),i=(a(1839),a(5488)),r=a(5162);const l={id:"brain-apps",title:"Developing Custom Applications"},s="Developing Custom Applications",p={unversionedId:"brain/brain-apps",id:"brain/brain-apps",title:"Developing Custom Applications",description:"We now have a full tutorial that walks you through creating custom applications that interact with cameras and drive your Amiga from the brain!",source:"@site/docs/brain/custom-applications.mdx",sourceDirName:"brain",slug:"/brain/brain-apps",permalink:"/docs/brain/brain-apps",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/brain/custom-applications.mdx",tags:[],version:"current",frontMatter:{id:"brain-apps",title:"Developing Custom Applications"},sidebar:"examples",previous:{title:"07 - Further Exercises",permalink:"/docs/examples/virtual_joystick/further-exercises"}},u={},m=[{value:"Quick Tips",id:"quick-tips",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare an app",id:"prepare-an-app",level:2},{value:"Select an app",id:"select-an-app",level:3},{value:"Create an app",id:"create-an-app",level:3},{value:"Create a repository from the template",id:"create-a-repository-from-the-template",level:4},{value:"Project structure",id:"project-structure",level:2},{value:"How to setup the project",id:"how-to-setup-the-project",level:2},{value:"Customizing an app",id:"customizing-an-app",level:2},{value:"Development and Debug an app",id:"development-and-debug-an-app",level:2},{value:"Optional Test your application",id:"optional-test-your-application",level:2},{value:"Initial Configuration",id:"initial-configuration",level:2},{value:"SSH Configuration",id:"ssh-configuration",level:2},{value:"ssh to the robot",id:"ssh-to-the-robot",level:4},{value:"Develop and test in the robot",id:"develop-and-test-in-the-robot",level:2}],c={toc:m};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developing-custom-applications"},"Developing Custom Applications"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We now have a full tutorial that walks you through creating custom applications that interact with cameras and drive your Amiga from the brain!"),(0,o.kt)("p",{parentName:"admonition"},"Check it out at ",(0,o.kt)("a",{parentName:"p",href:"/docs/examples/virtual_joystick/virtual-joystick-overview"},(0,o.kt)("strong",{parentName:"a"},"Virtual Joystick Tutorial")),". Note: after clicking the link you will start with an overview of the tutorial then you will be directed back to this page to complete the steps listed below as the first step of the tutorial.")),(0,o.kt)("h2",{id:"quick-tips"},"Quick Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Amiga user is able to install APT packages.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Edit the "entry.sh" script in the sample git repository.'))),(0,o.kt)("li",{parentName:"ul"},"We leverage a venv per application.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The contents of requirements.txt will be installed by the bootstrap.sh script."))),(0,o.kt)("li",{parentName:"ul"},'If you\'ve updated the requirements.txt remove the hidden ".lock" before relaunching the app from the Brain UI.'),(0,o.kt)("li",{parentName:"ul"},"You may use VSCode remote development/containers to edit directly on the Amiga brain as well.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"linux",label:"Linux/WSL",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt install wget\npython3 -m pip install --user cookiecutter\n"))),(0,o.kt)(r.Z,{value:"macos",label:"MacOs",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install wget\nbrew install cookiecutter\n")))),(0,o.kt)("h2",{id:"prepare-an-app"},"Prepare an app"),(0,o.kt)("p",null,"Follow the instructions below to select an example from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"farm-ng-amiga")," examples"))," or create an app from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-app-template"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"amiga-app-template")))," repository."),(0,o.kt)("h3",{id:"select-an-app"},"Select an app"),(0,o.kt)("admonition",{title:"coming soon",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The folder structure of the examples in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples"},(0,o.kt)("strong",{parentName:"a"},"farm-ng-amiga examples"))," will soon be updated to match\nthe template repository for setup / install on the amiga."),(0,o.kt)("p",{parentName:"admonition"},"In the meantime, follow the instructions to ",(0,o.kt)("a",{parentName:"p",href:"#create-an-app"},(0,o.kt)("strong",{parentName:"a"},"Create an app")),".\nYou can then copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"assets/")," directory (if present)\nfrom the example and drop them into an app you create with the template repository.")),(0,o.kt)("h3",{id:"create-an-app"},"Create an app"),(0,o.kt)("h4",{id:"create-a-repository-from-the-template"},"Create a repository from the template"),(0,o.kt)("p",null,"To create your own custom application navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/amiga-app-template"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"amiga-app-template")))," repository on GitHub."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You need to be signed into your GitHub account to see the option to ",(0,o.kt)("inlineCode",{parentName:"p"},"Use this template"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5157099/205272492-356c1540-948e-43dc-8f60-8992caa8d511.gif",alt:"Create a new templated repository"})),(0,o.kt)("p",null,"Written instructions (same as video above):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on green ",(0,o.kt)("em",{parentName:"li"},"Use this template")," button (top right) to create a new repository based on this repo"),(0,o.kt)("li",{parentName:"ol"},"Fill out:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"- Owner: (your_username)\n- Repository Name: whatever-you-want\n    - Should be between between 4-17 characters, and\n    - Use underscores (_) or dashes (-) for separating words (no spaces!)\n-Select Public box\n-Click [Create repository from template]\n")),"Done!")),(0,o.kt)("p",null,"Now that you are done creating your repository, you have two options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Work in your local workspace."),(0,o.kt)("li",{parentName:"ol"},"Work in a remote Remote-SSH session using in vs-code.")),(0,o.kt)("p",null,"In both cases you will have to clone the repository you created above by following the commands below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <to-your-base-directory>\ngit clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git\n")),(0,o.kt)("h2",{id:"project-structure"},"Project structure"),(0,o.kt)("p",null,"In vs-code, you can see the project structure on the left side in the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXPLORER"),":"),(0,o.kt)("p",null,"Below are listed the most important components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"repository-name/  # Root level of the project.\n\u251c\u2500\u2500 libs/ # Contains private libraries.\n|   \u2514\u2500\u2500 project_name/\n|       \u251c\u2500\u2500 ops.py  # e.g a operators submodule\n|       \u2514\u2500\u2500 project_name_subpackage/\n|           \u2514\u2500\u2500 utils.py  # e.g a utilities submodule\n\u251c\u2500\u2500 src/ # Contains all code needed to run the main gui application.\n|   \u251c\u2500\u2500 assets/  # Contains files needed to run the application\n|   |   \u2514\u2500\u2500 app_logo.png  # static images or images for buttons.\n|   \u251c\u2500\u2500 res/  # Contains the layout files and UI strings.\n|   |   \u2514\u2500\u2500 main.kv  # main ui layout in Kivy languague\n|   \u2514\u2500\u2500 main.py  # Is the main entry point for the gui application.\n\u251c\u2500\u2500 test/  # Contains code for test of the private libs.\n|   \u2514\u2500\u2500 test_dummy.py  # sets of unit test.\n\u251c\u2500\u2500 entry.sh\n|    # The script to setup the project, create a virtual env. and install dependencies.\n\u2514\u2500\u2500 setup.cfg\n    # The file containing the metadata of the package, including the name, versioning, etc. Learn more here: https://setuptools.pypa.io/en/latest/userguide/declarative_config.html\n\n")),(0,o.kt)("h2",{id:"how-to-setup-the-project"},"How to setup the project"),(0,o.kt)("p",null,"Before any changes, lets see if we can run this app locally on your system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd YOUR_REPOSITORY/\n./entry.sh  # install and run\n")),(0,o.kt)("p",null,"When running the above script, a virtual environment ",(0,o.kt)("inlineCode",{parentName:"p"},"venv")," will be created and any dependencies will be installed."),(0,o.kt)("p",null,"If all goes well, you'll see an dummy kivy application on your screen."),(0,o.kt)("h2",{id:"customizing-an-app"},"Customizing an app"),(0,o.kt)("p",null,"In order to customize an app we leverage the ",(0,o.kt)("inlineCode",{parentName:"p"},"setup.cfg")," that contains all the metadata and package configuration. More: ",(0,o.kt)("a",{parentName:"p",href:"https://setuptools.pypa.io/en/latest/userguide/declarative_config.html"},"https://setuptools.pypa.io/en/latest/userguide/declarative_config.html")),(0,o.kt)("p",null,"The most important first steps are to modify the metadata of the project and dependencies:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"setup.cfg")," file, adjust the fields under the tag ",(0,o.kt)("inlineCode",{parentName:"li"},"[metadata]"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For basic users, the package name (",(0,o.kt)("inlineCode",{parentName:"li"},"project_name")," in the project structure above) goes in the ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," field, and must match with the directory name right under the ",(0,o.kt)("inlineCode",{parentName:"li"},"libs/")," directory.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"I.e., change both the ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," field and the directory name under ",(0,o.kt)("inlineCode",{parentName:"li"},"libs/")," to your new app name."),(0,o.kt)("li",{parentName:"ul"},"VScode should prompt you to change the import names in ",(0,o.kt)("inlineCode",{parentName:"li"},"test_dummy.py")," once you change the directory name.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If not, manually change:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"from amiga_package import __version__\nfrom amiga_package import ops\n"))),(0,o.kt)("li",{parentName:"ul"},"To:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"from <project_name> import __version__\nfrom <project_name> import ops\n"))))))),(0,o.kt)("li",{parentName:"ul"},"For advanced users, you can modify as much is compliant with Python ",(0,o.kt)("inlineCode",{parentName:"li"},"setuptools"),"."))),(0,o.kt)("li",{parentName:"ol"},"Adjust the package dependencies",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Include whatever extra dependency you need in the ",(0,o.kt)("inlineCode",{parentName:"li"},"install_requires")," field."),(0,o.kt)("li",{parentName:"ul"},"Our only requirements are:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wheel"),": for packaging the app."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kivy"),": to generate the graphical user interface (GUI)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"farm-ng-amiga"),": the Farm-ng Amiga public SDK.")))))),(0,o.kt)("p",null,"In case you face issues, connect with us and the community:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discourse.farm-ng.com/c/support/5"},"https://discourse.farm-ng.com/c/support/5"))),(0,o.kt)("h2",{id:"development-and-debug-an-app"},"Development and Debug an app"),(0,o.kt)("p",null,"The workflow for development is pretty much the same as any standard gui application."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make changes in the code."),(0,o.kt)("li",{parentName:"ol"},"Run the code with the play button in vs-code.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"[Optionally]"," Add a breakpoint to any line and use the Debug Console to interact."))),(0,o.kt)("li",{parentName:"ol"},"Go to step 1)")),(0,o.kt)("h2",{id:"optional-test-your-application"},"[Optional]"," Test your application"),(0,o.kt)("p",null,"In order to validate your functionality, we suggest to add test cases for the internal ",(0,o.kt)("inlineCode",{parentName:"p"},"libs/[package_name]"),"\nlocated under ",(0,o.kt)("inlineCode",{parentName:"p"},"test/test_[test_name].py"),"."),(0,o.kt)("p",null,"To launch the tests: ",(0,o.kt)("inlineCode",{parentName:"p"},"pytest test/"),"\nTo run specific tests: ",(0,o.kt)("inlineCode",{parentName:"p"},"pytest test/test_dummy.py::TestDummy::test_add")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"initial-configuration"},"Initial Configuration"),(0,o.kt)("p",null,"To make ssh between our workstation and the Amiga easier, we'll add some configuration to our ssh on the workstation.\nTo set up ssh, make sure the Amiga and your computer are on the same network."),(0,o.kt)("p",null,"First check if a file ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/config")," exists on your workstation.\n",(0,o.kt)("inlineCode",{parentName:"p"},"~/")," is the home folder on your workstation."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"To check if this file exists put the commands below in your terminal. If this file does not exist, you'll have to create it.")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~ # Navigate to your home folder\nls -a # Check for a folder called `.ssh/`\n")),(0,o.kt)("ol",{parentName:"admonition",start:2},(0,o.kt)("li",{parentName:"ol"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.ssh/")," does not exist, run:")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen # create ~/.ssh/ folder\n")),(0,o.kt)("ol",{parentName:"admonition",start:3},(0,o.kt)("li",{parentName:"ol"},"Create a file called ",(0,o.kt)("inlineCode",{parentName:"li"},"config")," (no extension) in ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.ssh"))),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"linux",label:"Linux/WSL",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gedit ~/.ssh/config\n"))),(0,o.kt)(r.Z,{value:"macos",label:"MacOs",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd .ssh\ncat > config # Then press control D on your keyboard\nopen config # Then edit directly in the text editor that pops up and save your changes\n"))))),(0,o.kt)("p",null,"Add the following to your  ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/config"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Host amiga\n    HostName <ip address>\n    Port 22\n    User amiga\n    StrictHostKeyChecking no\n")),(0,o.kt)("admonition",{title:"tips",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<ip address>")," can be found on the bottom right of the Amiga Brain screen"),(0,o.kt)("li",{parentName:"ul"},"Remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"<")," & ",(0,o.kt)("inlineCode",{parentName:"li"},">")," symbols."),(0,o.kt)("li",{parentName:"ul"},"Your development station and your Amiga should be on the same network."))),(0,o.kt)("p",null,"This utilizes the IP address displayed on the bottom right of the brain display:"),(0,o.kt)("p",null,"Let\u2019s copy our keys to the robot as well (you may need to do this any time you are working with a new robot)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-copy-id amiga\n")),(0,o.kt)("p",null,"Now you are all set up to ",(0,o.kt)("a",{parentName:"p",href:"#ssh-to-the-robot"},"ssh into the amiga")),(0,o.kt)("h2",{id:"ssh-configuration"},"SSH Configuration"),(0,o.kt)("p",null,"Now it is time to configure your ",(0,o.kt)("em",{parentName:"p"},"config")," file to ",(0,o.kt)("em",{parentName:"p"},"ssh")," in your Amiga."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"linux",label:"Linux/WSL",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gedit ~/.ssh/config\n"))),(0,o.kt)(r.Z,{value:"macos",label:"MacOs",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd .ssh\nopen config # Then edit directly in the text editor that pops up and save your changes\n")))),(0,o.kt)("p",null,"Edit your ",(0,o.kt)("em",{parentName:"p"},".ssh/config")," file to include the below information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Host amiga\n    HostName <intranet ip address>\n    Port 22\n    User amiga\n    StrictHostKeyChecking no\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<intranet ip address>")," can be found on the bottom right of the Amiga Brain screen."),(0,o.kt)("p",null,"Copy your SSH key to the Amiga"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you do not have a key created",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-copy-id amiga\n")),(0,o.kt)("h4",{id:"ssh-to-the-robot"},"ssh to the robot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh amiga\nexit # If you want to exit the ssh\n")),(0,o.kt)("admonition",{title:"troubleshooting",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If, after a docker image update, you cannot ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," into your amiga or run the ",(0,o.kt)("inlineCode",{parentName:"p"},"sync.sh")," script,\nyou may have an error similar to:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# $ ssh amiga\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\nSomeone could be eavesdropping on you right now (man-in-the-middle attack)!\nIt is also possible that a host key has just been changed.\nThe fingerprint for the ECDSA key sent by the remote host is\nSHA256:QsdOvROYuKMa5NqaPTFHwF3kfPCwKaTzgBAj9N/eKCI.\nPlease contact your system administrator.\nAdd correct host key in /home/<YOUR_NAME>/.ssh/known_hosts to get rid of this message.\nOffending ECDSA key in /home/<YOUR_NAME>/.ssh/known_hosts:29\n  remove with:\n  ssh-keygen -f "/home/<YOUR_NAME>/.ssh/known_hosts" -R "192.168.XX.XX"\nECDSA host key for 192.168.XX.XX has changed and you have requested strict checking.\nHost key verification failed.\n')),(0,o.kt)("p",{parentName:"admonition"},"Follow the instructions they provide and run:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -f "/home/<YOUR_NAME>/.ssh/known_hosts" -R "192.168.XX.XX"\n# With correct values for <YOUR_NAME> and IP Address XX.XX\n')),(0,o.kt)("p",{parentName:"admonition"},"You should now be able to ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," into your amiga and/or run the ",(0,o.kt)("inlineCode",{parentName:"p"},"sync.sh")," script")),(0,o.kt)("h2",{id:"develop-and-test-in-the-robot"},"Develop and test in the robot"),(0,o.kt)("p",null,"In order to test your app in the robot, we require to push the changes to the remote repository created before and clone it to the robot."),(0,o.kt)("p",null,"We recommend to follow the next steps:"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you are on the ",(0,o.kt)("strong",{parentName:"p"},"Linux")," tab when you go to the GitHub docs (links below). The page defaults to the system you are on and doesn't know you are SSH'd into a Linux machine, which the Amiga is.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"ssh to robot ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh amiga")," (if have not configured ssh do so ",(0,o.kt)("a",{parentName:"li",href:"#ssh-configuration"},"here"),")"),(0,o.kt)("li",{parentName:"ol"},"Create an ssh key for github on the amiga ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh-keygen"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"See: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"GitHub Docs: Generate an SSH key")))),(0,o.kt)("li",{parentName:"ol"},"Copy and add the key to your github user",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"See: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account"},"GitHub Docs: Add an SSH key")))),(0,o.kt)("li",{parentName:"ol"},"Set your username in git config")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global user.email "YOUR_EMAIL"\ngit config --global user.name "YOUR-USERNAME"\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Clone your repository")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd apps/\n# Replace 'YOUR-USERNAME/YOUR-REPOSITORY' below with the correct link to your new repo\n# You can get this path from the SSH tab on the green '<> code' button of your new repo\ngit clone git@github.com:YOUR-USERNAME/YOUR-REPOSITORY.git\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you cannot clone with SSH, you can try https:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"# You can get this path from the HTTPS tab on the green '<> code' button of your new repo\ngit clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git\n"))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Run the app on your Amiga")),(0,o.kt)("p",null,"If your brain is on the launcher screen, your new app should appear!\nYou can launch it by clicking your the app on the screen, and it should begin loading."),(0,o.kt)("admonition",{title:"NOTE",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The first entry will take a while as the requirements have to install")),(0,o.kt)("p",null,"Alternatively, you can launch from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd YOUR_REPOSITORY/\n./entry.sh  # install and run\n")))}d.isMDXComponent=!0}}]);