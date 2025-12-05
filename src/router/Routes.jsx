import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/home";
import Services from "../pages/services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "./privateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import ForgetPass from "../pages/ForgetPass";
import Error from "../pages/Error";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path: '/services',
        element:<Services></Services>
      },{
        path: '/login',
        element:<Login></Login>
      },{
        path: '/signup',
        element:<Register></Register>
      },{
        path: '/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },{
        path: '/details/:myId',
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
      },{
        path: '/forget/:email',
        element:<ForgetPass></ForgetPass>
      }
    ]
    
  },
]);

export default router;