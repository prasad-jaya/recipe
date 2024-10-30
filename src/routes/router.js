import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import FavouritePage from "../pages/FavouritePage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/home',
        element:<HomePage/>
    },
    {
        path:'/favourite',
        element:<FavouritePage/>
    },
])