import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from "js-cookie" 
function DonarProtected() {

  const token = Cookies.get("BLOOD_USER_TOKEN")

  return token ? <Outlet /> : <Navigate to="/auth" />;
}

export default DonarProtected