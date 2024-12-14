import React from 'react' 
import { Navigate , Outlet } from 'react-router-dom'

function AdminProtected() {
      const isAdminToken = JSON.parse(localStorage.getItem('ADMIN_TOKEN'));
     
    return isAdminToken ? <Outlet/> : <Navigate to="/admin-login" />;
}

export default AdminProtected