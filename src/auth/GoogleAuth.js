import { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaS } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import AuthContext from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const GoogleAuth  = () =>{
    const { isSignedIn, setIsSignedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    let auth;
    useEffect(() =>{
            gapi.load('client:auth2', () =>{
                    gapi.client.init({
                    clientId: '194764610188-pou5hqf6s16ru06ip02qea1h2utao8uq.apps.googleusercontent.com',
                    scope: "email profile",
                    plugin_name:'cookme',
                   
                }).then(() =>{ 
                    auth = gapi.auth2.getAuthInstance();
                    setIsSignedIn(auth.isSignedIn.get());
                    auth.isSignedIn.listen(onAuthChange);
                })
            });
            
            if(isSignedIn){
              navigate('/home');
            }
    },[isSignedIn]);

    const onAuthChange = () =>{
        setIsSignedIn(auth.isSignedIn.get());
    }

    const signIn = () =>{
        gapi.auth2.getAuthInstance().signIn().then(
            (user) => {
              console.log("User signed in:", user.getBasicProfile().getName());
              navigate('/home');
            })
            .catch(error =>{
                if (error && error.error === "popup_closed_by_user"){
                    console.log("Popup closed by user. Please try signing in again." + error.error);
                } else {
                    console.error("Sign-in error:", error);
                }
            })
    }

    const signOut = () =>{
        console.log('signour');
        gapi.auth2.getAuthInstance().signOut();
    }

    let gButton = isSignedIn 
    ? <IoIosLogOut  onClick={() => signOut()} className="text-2xl cursor-pointer "/> 
    : <button className="bg-red-600 rounded-md px-3 py-2 flex text-white place-items-center w-full justify-center" onClick={() =>signIn()}><FaGoogle className="text-white mr-2"/>Sign In with Google</button>

    return gButton;

}
export default GoogleAuth;