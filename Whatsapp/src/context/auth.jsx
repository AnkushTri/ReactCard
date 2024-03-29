import { useState, createContext } from "react";


export const AuthContext=createContext();

const AuthContextProvider=(props)=>{
    const [isAuthenticated,setIsAuthenticated]=useState(false)
    return(
        <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider