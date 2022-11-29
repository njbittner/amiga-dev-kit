"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1493],{6995:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));t(1839);const l={id:"brain-install",title:"Install"},r="Brain ADK Installation",o={unversionedId:"brain/brain-install",id:"brain/brain-install",title:"Install",description:"PyPI version",source:"@site/docs/brain/brain-install.md",sourceDirName:"brain",slug:"/brain/brain-install",permalink:"/docs/brain/brain-install",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/brain/brain-install.md",tags:[],version:"current",frontMatter:{id:"brain-install",title:"Install"},sidebar:"docs",previous:{title:"Brain Overview",permalink:"/docs/brain/"},next:{title:"Next Steps",permalink:"/docs/brain/next-steps"}},p={},s=[{value:"Install",id:"install",level:2},{value:"Clone the repo",id:"clone-the-repo",level:3},{value:"optional Set up virtual environment",id:"optional-set-up-virtual-environment",level:3},{value:"Package install",id:"package-install",level:3},{value:"Package updates",id:"package-updates",level:3},{value:"Advanced From source",id:"advanced-from-source",level:3}],m={toc:s};function u(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"brain-adk-installation"},"Brain ADK Installation"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/farm-ng-amiga"},(0,i.kt)("img",{parentName:"a",src:"https://badge.fury.io/py/farm-ng-amiga.svg",alt:"PyPI version"}))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you would like to test your installation by running the ",(0,i.kt)("inlineCode",{parentName:"p"},"farm-ng-amiga")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/tree/main/py/examples"},(0,i.kt)("strong",{parentName:"a"},"examples")),",\nplease start below with ",(0,i.kt)("a",{parentName:"p",href:"#clone-the-repo"},"Clone the repo"),"."),(0,i.kt)("p",{parentName:"admonition"},"If you only want to install the package, you can simply install the latest release with ",(0,i.kt)("inlineCode",{parentName:"p"},"pip")," and enjoy the ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/farm-ng-amiga"},(0,i.kt)("inlineCode",{parentName:"a"},"farm-ng-amiga"))," package!"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install farm-ng-amiga\n"))),(0,i.kt)("h3",{id:"clone-the-repo"},"Clone the repo"),(0,i.kt)("p",null,"To install the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga"},(0,i.kt)("inlineCode",{parentName:"a"},"farm-ng-amiga"))," package and test the available examples, start by cloning the repo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:farm-ng/farm-ng-amiga.git\ncd farm-ng-amiga/\n")),(0,i.kt)("admonition",{title:"troubleshooting",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you have trouble cloning this public repo, Github is likely not able to authenticate your SSH public key."),(0,i.kt)("p",{parentName:"admonition"},"If this is the case, you can either:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Create a personal access token")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh"},"Connect to GitHub with SSH")),(0,i.kt)("li",{parentName:"ol"},"Clone with ",(0,i.kt)("inlineCode",{parentName:"li"},"https"),". E.g.,")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/farm-ng/farm-ng-amiga.git\n"))),(0,i.kt)("h3",{id:"optional-set-up-virtual-environment"},"[optional]"," Set up virtual environment"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We recommend running the brain SDK applications in a virtual environment to avoid conflicts with other packages / versions installed on your system.\nThough this is not a requirement and you are welcome to decide how/where to install.")),(0,i.kt)("p",null,"If you want to install ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/farm-ng-amiga"},(0,i.kt)("inlineCode",{parentName:"a"},"farm-ng-amiga"))," in a virtual environment:"),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"pip3")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"virtualenv"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install python3-pip\nsudo pip3 install virtualenv\n")),(0,i.kt)("p",null,"Start a virtual environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# assuming you're in the directory where you want to create your `venv`\npython3 -m venv venv\nsource venv/bin/activate\n")),(0,i.kt)("p",null,"Later, when you want to exit / re-enter your ",(0,i.kt)("inlineCode",{parentName:"p"},"venv"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"deactivate # exit\nsource venv/bin/activate # re-enter, assuming you're in the root containing `venv/`\n")),(0,i.kt)("h3",{id:"package-install"},"Package install"),(0,i.kt)("p",null,"Now install the package with ",(0,i.kt)("inlineCode",{parentName:"p"},"pip")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install farm-ng-amiga\n")),(0,i.kt)("p",null,"You can check the installed version with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 list | grep farm-ng\n\n# You should see something like:\n# farm-ng-amiga      0.0.3\n# farm-ng-core       0.1.2\n# farm-ng-package    0.1.1\n")),(0,i.kt)("h3",{id:"package-updates"},"Package updates"),(0,i.kt)("p",null,"As new releases come out, you can keep your farm-ng packages up to date with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install farm-ng-package --upgrade\npip3 install farm-ng-core --upgrade\npip3 install farm-ng-amiga --upgrade\n")),(0,i.kt)("h3",{id:"advanced-from-source"},"[Advanced]"," From source"),(0,i.kt)("p",null,"If you want to edit the package, or contribute, you can install from source."),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"pip3")," & setup a ",(0,i.kt)("inlineCode",{parentName:"p"},"virtualenv")," (as above)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install python3-pip\nsudo pip3 install virtualenv\n")),(0,i.kt)("p",null,"Create and install the ",(0,i.kt)("inlineCode",{parentName:"p"},"farm-ng-amiga")," Python package"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd farm-ng-amiga/py/\n# install to system\npip3 install .\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# or for development mode\npip3 install -e .[dev]\n")))}u.isMDXComponent=!0}}]);