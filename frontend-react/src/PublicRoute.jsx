import { AuthContext } from "./AuthProvider";
import AuthProvider from "./AuthProvider";
import { Navigate } from "react-router-dom";
import React, { useContext } from 'react'

const PublicRoute = ({children}) => {
    const {isLoggedIn}= useContext(AuthContext)

  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to= '/dashboard'/>
  )
}

export default PublicRoute