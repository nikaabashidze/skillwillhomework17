
import AboutPage from "./pages/AboutPage/AboutPage";
import AboutParam from "./pages/AboutParams/AboutPParam";
import LinkLayout from "./layout/LinkLlayout";
import Homeppage from "./pages/homepage/Homeppage";
import Errorpage from "./pages/errorpage/Errorpage";

const router  = [
  
 
 {
    element: <LinkLayout/>, 
    path: '/skillwillhomework17/',
    children:[
        { 
            element: <Homeppage/>,
            index:true
         },
         
         
         {
            element: <AboutPage/>, 
            path: '/skillwillhomework17/about'
         },

         {
            element: <AboutParam/>, 
            path: '/skillwillhomework17/about/:factId'
         },


         {
            element: <Errorpage/>,
            path:'*'
         }


    ]
 }

]

 export default router