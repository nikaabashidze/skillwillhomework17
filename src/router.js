
import MainPage from "./pages/mainPage/MainPPage";
import AboutPage from "./pages/aboutPage/AboutPPage";

const router  = [
  
 { 
    element: <MainPage/>,
    path: '/',
 },
 
 {
    element: <AboutPage/>, 
    path: '/about'
 }

]

 export default router