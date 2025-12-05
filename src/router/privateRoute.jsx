import React, { useContext } from "react";
import router from "./Routes";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const privateRoute =({children}) => {
  const {user, loading} =useContext(AuthContext)

  const location = useLocation();
  
  
 
  if(loading){
    return <p>Loading......</p>
  }

  if(user){
    return children
  }
  return <Navigate state={location.pathname} to ='/login'></Navigate>
  
    
  };


export default privateRoute;