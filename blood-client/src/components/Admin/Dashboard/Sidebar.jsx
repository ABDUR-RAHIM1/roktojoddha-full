import React from 'react'
import SidebarItems from '../../utils/SidebarItems'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate()

  const items = [
    { item: 'dashboard', link: '/admin' },
    { item: 'add blog', link: '/admin-add-blog' },
    { item: 'get blog', link: '/admin-get-blog' },
    { item: 'add volunteer', link: '/admin-add-volunteer' },
    { item: 'manage volunteer', link: '/admin-manage-volunteer' },
    { item: 'Manage users', link: '/admin-manage-users' }, 
    { item: 'Manage Content', link: '/admin-manage-content' }, 
  ]


  const handleLogOutAdmin = () => {
    localStorage.removeItem("ADMIN_TOKEN");
    setTimeout(() => {
      navigate("/admin-login")
    }, 1500);
  }

  return (
    <div className='h-full scroll-none overflow-y-auto'>
      {
        items.map((item, index) => <SidebarItems key={index} item={item} />)
      }
      <button onClick={handleLogOutAdmin} className='sidebarBtn'>Log-out</button>

    </div>
  )
}

export default Sidebar