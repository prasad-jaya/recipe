import { Link } from "react-router-dom";

import GoogleAuth from "../auth/GoogleAuth";

const Header = () =>{
    return (
        <div className="flex justify-between">
            <div>
                <h1 className="text-2xl font-bold text-pink-700">COOK<span className="text-gray-800">Me!</span></h1>
            </div>
            <div className="flex gap-3">
                <Link to={'/home'}>Home</Link>
                <Link to={'/favourite'}>Favourite</Link>
            </div>
            <div className="flex gap-4 justify-between place-items-center">
                <GoogleAuth/>
            </div>
        </div>
    )
}
export default Header;