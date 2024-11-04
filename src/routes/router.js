import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FavouritePage from "../pages/FavouritePage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import SignInPage from "../pages/SignInPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginPage/>,
    },
    {
        element:<PrivateRoute/>,
        children:[
            {
                path:'/home',
                element:<HomePage/>
            },
            {
                path:'/favourite',
                element:<FavouritePage/>
            },
        ]
    },
    {
        path:'/signup',
        element:<SignInPage/>
    }
   
])