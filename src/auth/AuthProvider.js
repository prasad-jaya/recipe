import { createContext, useState } from "react";

const AuthContext = createContext(undefined);

const AuthProvider = ({children}) =>{
   const [isSignedIn, setIsSignedIn] = useState();

   return <AuthContext.Provider value={{isSignedIn, setIsSignedIn}}>
        {children}
   </AuthContext.Provider>
}
export {AuthProvider}
export default AuthContext;