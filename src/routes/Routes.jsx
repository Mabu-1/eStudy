import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Create from "../pages/CreateAssignments/Create";
import Assignments from "../pages/Assignments/Assignments";



const router =createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
      
        children:
        [
           {
            path:'/',
            element:<Home></Home>,
          
           },
           {
            path:'/create',
            element:<PrivateRoute><Create></Create></PrivateRoute>,
          
           },
           {
            path:'/assignments',
            element:<Assignments></Assignments>,
            loader: () => fetch('http://localhost:5000/assignment')
           
          
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/register',
            element:<Register></Register>
           },
         
          
        ]
    }
   
])

export default router;