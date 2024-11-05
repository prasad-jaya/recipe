import { Link, useLocation } from "react-router-dom";

import GoogleAuth from "../auth/GoogleAuth";

const Header = () =>{

    const location = useLocation();
    
    return (
        <div className="flex justify-between bg-white container w-md  mx-auto p-6">
            <div>
                <h1 className="text-2xl font-bold text-pink-700">COOK<span className="text-gray-800">Me!</span></h1>
            </div>
            <div className="flex gap-4">
                <Link className={`${location.pathname === '/home' ? 'text-gray-800 font-bold' : 'text-gray-500'}`} to={'/home'}>Home</Link>
                <Link  className={`${location.pathname === '/favourite' ? 'text-gray-800 font-bold' : 'text-gray-500'}`}  to={'/favourite'}>Favourite</Link>
            </div>
            <div className="flex gap-4 justify-between place-items-center">
                <GoogleAuth/>
            </div>
        </div>
    )
}
export default Header;