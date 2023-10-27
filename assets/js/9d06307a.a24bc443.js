"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6724],{4016:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(7462),r=(i(7294),i(3905));i(1839);const a={id:"filter-overview",title:"Filter"},o="Filter Service Overview",s={unversionedId:"concepts/filter_service/filter-overview",id:"concepts/filter_service/filter-overview",title:"Filter",description:"The Filter service is the state estimation core of the Amiga, crucial for understanding the robot's",source:"@site/docs/concepts/filter_service/README.md",sourceDirName:"concepts/filter_service",slug:"/concepts/filter_service/",permalink:"/docs/concepts/filter_service/",draft:!1,editUrl:"https://github.com/farm-ng/amiga-dev-kit/tree/main/website/docs/concepts/filter_service/README.md",tags:[],version:"current",frontMatter:{id:"filter-overview",title:"Filter"},sidebar:"Concepts",previous:{title:"GPS",permalink:"/docs/concepts/gps_service/"},next:{title:"Recorder",permalink:"/docs/concepts/recorder_service/"}},l={},c=[{value:"Subscriptions",id:"subscriptions",level:2},{value:"Convergence Requirements",id:"convergence-requirements",level:2},{value:"API",id:"api",level:2},{value:"Filter Service in Practice",id:"filter-service-in-practice",level:2},{value:"Features",id:"features",level:2}],m={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"filter-service-overview"},"Filter Service Overview"),(0,r.kt)("p",null,"The Filter service is the state estimation core of the Amiga, crucial for understanding the robot's\nposition, orientation, and movement within its environment.\nUtilizing an ",(0,r.kt)("strong",{parentName:"p"},"Unscented Kalman Filter"),", it seamlessly fuses data from various sources like wheel odometry,\nGPS, and the IMU to provide a consistent and accurate representation of the robot's current state."),(0,r.kt)("p",null,"The primary goal of the Filter service is to abstract the complexity involved in state estimation,\nproviding users with clear, reliable information about the robot's pose, heading, and movement trajectory.\nThis allows users to interact with and direct the Amiga effectively, without getting immersed in the\ntechnical depths of data fusion or sensor calibration."),(0,r.kt)("p",null,"In essence, the Filter does the intricate work of synthesizing sensor data, enabling users to\nconfidently interpret and utilize the Amiga's spatial information without needing extensive expertise\nin robotics or state estimation."),(0,r.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," is a client from the following services:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Canbus (for wheel odometry)"),(0,r.kt)("li",{parentName:"ul"},"GPS"),(0,r.kt)("li",{parentName:"ul"},"Oak0 (for IMU data)")),(0,r.kt)("p",null,"For the Filter service to function correctly, these services must be operational and communicating\nrelevant sensor data.\nSince the Filter relies on GPS data, the Amiga must have a GPS connected to an RTK base station."),(0,r.kt)("h2",{id:"convergence-requirements"},"Convergence Requirements"),(0,r.kt)("p",null,"For the state estimation to be considered valid and the results to be reliable, certain criteria\nneed to be met, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The robot is connected to Wi-Fi, ensuring communication continuity."),(0,r.kt)("li",{parentName:"ul"},"The GPS service is receiving messages, with ",(0,r.kt)("inlineCode",{parentName:"li"},"accuracyNorth")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"accuracyEast")," values smaller\nthan 0.01, indicating high precision."),(0,r.kt)("li",{parentName:"ul"},"The oak0 service is active and transmitting IMU data.")),(0,r.kt)("p",null,"Upon startup or recalibration, the robot needs to be moved slightly to allow the filter to converge\n(indicated by ",(0,r.kt)("inlineCode",{parentName:"p"},"has_converged")," = true)."),(0,r.kt)("admonition",{title:"Remember",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"State estimation is a dynamic process, and environmental factors or sensor issues can affect convergence.\nRegular calibration and adherence to the recommended workflows are essential for maintaining accurate\nstate estimation.")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"Users can interact with the filter service using these commands through an EventClient of\nthe filter service:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/calibrate"),": Triggers the calibration process, adjusting the IMU orientation relative to the robot\nand calculating gyroscope biases."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/get_state"),": Retrieves a protobuf message of type FilterState, containing the robot\u2019s pose,\nheading (in radians), convergence status, and pose uncertainty."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/get_track"),": Returns the current track of the robot, essentially the path that the robot has traveled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/clear_track"),": Clears the current track, useful when initiating a new tracking sequence or\nrecalibrating the system.")),(0,r.kt)("h2",{id:"filter-service-in-practice"},"Filter Service in Practice"),(0,r.kt)("p",null,"When planning to record a new track, the recommended workflow is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start with ",(0,r.kt)("inlineCode",{parentName:"li"},"/clear_track"),'. This will clear the current track on memory and allow the user to\n"start fresh"'),(0,r.kt)("li",{parentName:"ul"},"User drives the robot to generate the desired track"),(0,r.kt)("li",{parentName:"ul"},"Once satisfied, the user stops the robot"),(0,r.kt)("li",{parentName:"ul"},"Get the track with the API ",(0,r.kt)("inlineCode",{parentName:"li"},"/get_track"),".")),(0,r.kt)("admonition",{title:"TIP",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For a comprehensive understanding of the list of variables available in the filter state messages,\nmake sure to check its ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farm-ng/farm-ng-amiga/blob/main-v2/protos/farm_ng/filter/filter.proto"},"protobuf definition"),".")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"The Filter service, while sophisticated, is designed with user-friendliness in mind.\nIt not only provides essential information on the robot's current state but also empowers users to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Track Creation and Retrieval"),":\nThe system automatically logs the robot's path, creating tracks that can be reviewed and utilized for\nfuture tasks. This feature is invaluable for repeated navigation tasks or analyzing the robot's\ncoverage over a workspace.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Real-time State Estimation"),":\nBy continuously synthesizing data from multiple sensors, the Filter offers real-time insights into\nthe robot's position, orientation, and trajectory.\nThis is crucial for tasks that require precise navigation or environment mapping.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Calibration on Demand"),":\nEnvironmental changes or operational demands may necessitate recalibration.\nThe /calibrate command simplifies this, enabling users to quickly recalibrate the IMU, ensuring\ncontinued accuracy in state estimation."))))}u.isMDXComponent=!0}}]);