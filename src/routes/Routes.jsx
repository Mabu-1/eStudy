import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Create from "../pages/CreateAssignments/Create";
import Assignments from "../pages/Assignments/Assignments";
import View from "../pages/ViewAssignments/View";
import Update from "../pages/UpdateAssignment/Update";
import Take from "../pages/TakeAssignment/Take";
import Submit from "../pages/SubmitAssignment/Submit";
import MyAssignments from "../pages/MyAssignments/MyAssignments";
import Mark from "../pages/MarkAssignment/Mark";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,

        children:
            [
                {
                    path: '/',
                    element: <Home></Home>,

                },
                {
                    path: '/create',
                    element: <PrivateRoute><Create></Create></PrivateRoute>,

                },
                {
                    path: '/assignments',
                    element: <Assignments></Assignments>,



                },
                {
                    path: '/view/:id',
                    element: <PrivateRoute><View></View></PrivateRoute>,



                },
                {
                    path: '/update/:id',
                    element: <PrivateRoute><Update></Update></PrivateRoute>,



                },
                {
                    path: '/take/:id',
                    element: <PrivateRoute><Take></Take></PrivateRoute>,



                },
                {
                    path: '/submissions',
                    element: <PrivateRoute><Submit></Submit></PrivateRoute>,



                },
                {
                    path: '/myassignments',
                    element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>,



                },
                {
                    path: '/mark/:id',
                    element: <PrivateRoute><Mark></Mark></PrivateRoute>,



                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },


            ]
    }

])

export default router;