import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const Header = () =>{
    return (
       <div className="flex justify-between">
        <div>
            <h1 className="text-2xl font-bold text-pink-700">COOK</h1>
        </div>
        <div className="flex gap-3">
            <Link to={'/home'}>Home</Link>
            <Link to={'/favourite'}>Favourite</Link>
        </div>
        <div>
            <IoIosLogOut className="text-2xl"/>
        </div>
       </div>
    )

}
export default Header;