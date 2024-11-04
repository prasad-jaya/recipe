import { useContext } from "react";
import AuthContext from "../auth/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () =>{
    const { isSignedIn } = useContext(AuthContext);
    
    return isSignedIn ? <Outlet/> : <Navigate to={'/'}/>;
}
export default PrivateRoute;