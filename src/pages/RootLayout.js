import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () =>{
    return(
        <div>
            <Header/>
            <div className="mx-auto bg-pink-50 w-full">
                <div className="container mx-auto px-20 pt-12">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default RootLayout;