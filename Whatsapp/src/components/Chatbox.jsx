import React from 'react'
import {googleLogout} from "@react-oauth/google"
import { AuthContext } from '../context/auth';
import { useContext } from 'react';
const Chatbox = () => {

  const { isAuthenticated, setIsAuthenticated }=useContext(AuthContext)
  console.log(isAuthenticated)
  const logOut = () => {
    googleLogout();
    console.log("logout")
    setIsAuthenticated(false)
  };
  return (
    <div>
      <p>This is chat</p>
     <button onClick={logOut}>Log out</button>
    </div>
  )
}

export default Chatbox