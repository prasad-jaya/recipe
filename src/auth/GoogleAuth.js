import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaS } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";

const GoogleAuth  = () =>{
    const [isSignedIn, setIsSignedItn] = useState();
    let auth;
    useEffect(() =>{
            gapi.load('client:auth2',() =>{
                gapi.client.init({
                    clientId: '194764610188-pou5hqf6s16ru06ip02qea1h2utao8uq.apps.googleusercontent.com',
                    scope: "email profile",
                    plugin_name:'cookme',
                }).then(() =>{ 
                    auth = gapi.auth2.getAuthInstance();
                    setIsSignedItn(auth.isSignedIn.get());
                    auth.isSignedIn.listen(onAuthChange);
                })
            })  
    },[isSignedIn]);

    const onAuthChange = () =>{
        setIsSignedItn(auth.isSignedIn.get());
    }

    const signIn = () =>{
        auth?.signIn().then(
            (user) => {
              console.log("User signed in:", user.getBasicProfile().getName());
            })
            .catch(error =>{
                if (error && error.error === "popup_closed_by_user"){
                    console.log("Popup closed by user. Please try signing in again." + error.error);
                } else {
                    console.error("Sign-in error:", error);
                }
            })
    }

    let gButton = isSignedIn 
    ? <IoIosLogOut  onClick={() => auth?.signOut()} className="text-2xl cursor-pointer "/> 
    : <button className="bg-red-600 rounded px-3 py-2 flex text-white place-items-center" onClick={() =>signIn()}><FaGoogle className="text-white mr-2"/>Sign In with Google</button>

    return <>
        { gButton }
    </>
}
export default GoogleAuth;