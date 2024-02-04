
import AboutPage from "./pages/AboutPage/AboutPage";
import AboutParam from "./pages/AboutParams/AboutPParam";
import LinkLayout from "./layout/LinkLlayout";
import Homeppage from "./pages/homepage/Homeppage";
import Errorpage from "./pages/errorpage/Errorpage";

const router  = [
  
 
 {
    element: <LinkLayout/>, 
    path: '/',
    children:[
        { 
            element: <Homeppage/>,
            index:true
         },
         
         
         {
            element: <AboutPage/>, 
            path: '/about'
         },

         {
            element: <AboutParam/>, 
            path: '/about/:factId'
         },


         {
            element: <Errorpage/>,
            path:'*'
         }


    ]
 }

]

 export default router