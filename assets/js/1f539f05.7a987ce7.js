"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5544],{3187:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));a(1839);const p={id:"template-starter",title:"01 - Template Starter"},r="Template Starter",o={unversionedId:"examples/virtual_joystick/template-starter",id:"examples/virtual_joystick/template-starter",title:"01 - Template Starter",description:"Set up your Amiga brain template",source:"@site/docs/examples/virtual_joystick/01_template_starter.md",sourceDirName:"examples/virtual_joystick",slug:"/examples/virtual_joystick/template-starter",permalink:"/docs/examples/virtual_joystick/template-starter",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/examples/virtual_joystick/01_template_starter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"template-starter",title:"01 - Template Starter"},sidebar:"examples",previous:{title:"00 - Virtual Joystick Overview",permalink:"/docs/examples/virtual_joystick/virtual-joystick-overview"},next:{title:"02 - Template Overview",permalink:"/docs/examples/virtual_joystick/template-overview"}},l={},s=[{value:"Set up your Amiga brain template",id:"set-up-your-amiga-brain-template",level:2},{value:"Rename the <code>TemplateApp</code>",id:"rename-the-templateapp",level:2},{value:"Run the app - template",id:"run-the-app---template",level:3}],m={toc:s};function u(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"template-starter"},"Template Starter"),(0,i.kt)("h2",{id:"set-up-your-amiga-brain-template"},"Set up your Amiga brain template"),(0,i.kt)("p",null,"Follow the instructions in ",(0,i.kt)("a",{parentName:"p",href:"/docs/brain/brain-apps"},(0,i.kt)("strong",{parentName:"a"},"Developing Custom Applications")),"\nto clone and set up the app template amiga-app-template."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Feel free to choose any repository name, but it's recommended to go with ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual-joystick"),".")),(0,i.kt)("h2",{id:"rename-the-templateapp"},"Rename the ",(0,i.kt)("inlineCode",{parentName:"h2"},"TemplateApp")),(0,i.kt)("p",null,"Now that you've created the template, it's time to rename it for your app.\nIn this tutorial, we'll go with ",(0,i.kt)("inlineCode",{parentName:"p"},"VirtualJoystickApp"),"."),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," in your app and open it with a text editor."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We recommend ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},(0,i.kt)("strong",{parentName:"a"},"Visual Studio Code")),"!")),(0,i.kt)("p",null,"There's 3 places to change the templated name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'# 1. Rename the class\nclass VirtualJoystickApp(App):\n    def __init__(self) -> None:\n        super().__init__()\n\n...\n\n# 2. Rename the program\nif __name__ == "__main__":\n    parser = argparse.ArgumentParser(prog="virtual-joystick")\n\n...\n\n# 3. Run with the new class name\ntry:\n    loop.run_until_complete(VirtualJoystickApp().app_func())\nexcept asyncio.CancelledError:\n    pass\n')),(0,i.kt)("h3",{id:"run-the-app---template"},"Run the app - template"),(0,i.kt)("p",null,"Now sync the app to the Brain and launch it with the following instructions!"),(0,i.kt)("admonition",{title:"Deploy Instructions",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/docs/brain/brain-apps#develop-and-test-in-the-robot"},(0,i.kt)("strong",{parentName:"a"},"Deploy Instructions"))," for syncing the app onto the Amiga Brain.")),(0,i.kt)("p",null,"After following the deploy instructions, you should see a blank kivy app pop up with only a ",(0,i.kt)("inlineCode",{parentName:"p"},"Back")," button.\nTry using the 'Back' button to exit the app."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53625197/200450581-7c93eb1f-3aa2-49f5-9c52-51e8b051c76e.png",alt:"template"})),(0,i.kt)("admonition",{title:"Coming soon",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Link to this checkpoint")))}u.isMDXComponent=!0}}]);