import { useContext } from "react";
import AuthContext from "../auth/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import RootLayout from "../pages/RootLayout";

const PrivateRoute = () =>{
    const { isSignedIn } = useContext(AuthContext);
    
    return isSignedIn ? <RootLayout/> : <Navigate to={'/'}/>;
}
export default PrivateRoute;