import React from 'react'
import Home from './components/Home/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import DonarRegister from './components/DonarRegister/DonarRegister'
import Blogs from './components/Blogs/Blogs'
import Error from './components/Error/Error'
import AdminLogin from './components/Admin/AdminLogin/AdminLogin'
import BlogDetails from './components/BlogDetails/BlogDetails'
import Footer from './components/Footer/footer'
import GetBlogs from './components/Admin/Admin/GetBlogs'
import Add_Volunteer from './components/Admin/Admin/Add_Volunteer'
import Manage_volunteer from './components/Admin/Admin/Manage_volunteer'
import Donars from './components/Donars/Donars'
import Dashboard from './components/Admin/Admin/Dashboard/DashboardHome/Dashboard'
import Manage_content from './components/Admin/Admin/ManageContent/Manage_content'
import DonarProtected from './ProtectedRoute/DonarProtected'
import UsersLogin from './components/Users/UsersLogin'
import DonarDetails from './components/Donars/DonarDetails'
// import AddBlog from './components/utils/AddBlog'
import Profile from './Profiles/ProfileHome/Profile'
import RecipientDetails from './components/Donars/RecipientDetails'
import AdminProtected from './ProtectedRoute/AdminProtected'
import AddBLog from './components/Admin/Admin/AddBLog'
import Recipients from './components/Donars/Recipients'
import Manage_users from './components/Admin/Admin/ManageContent/Manage_users'
import Navbar from './components/Header/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appoinment from './Profiles/Appoinment/Appoinment'
import DonarCard from './Profiles/DonarCard/DonarCard'
import RecipientCard from './Profiles/RecipientCard/RecipientCard'
import ManageBlogs from './Profiles/ManageBlogs/ManageBlogs'
import ProfileNavbar from './Profiles/Navbar/ProfileNavbar'
import AddBlog from './components/Forms/AddBlog'
import About from './components/About/About'
function App() {

  const path = useLocation().pathname;

  const isProfile = path.includes("/profile")

  return (
    <div className='relative'>
      {
        isProfile ? <ProfileNavbar /> : <Navbar />
      }
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donars" element={<Donars />} />
        <Route path="/recipients" element={<Recipients />} />
        <Route path="/donars-details" element={<DonarDetails />} />
        <Route path="/recipient-details" element={<RecipientDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/auth" element={<UsersLogin />} />


        <Route element={<DonarProtected />}>
          <Route path="/profile" element={<Profile />} />
          <Route path='/profile/donar-registration' element={<DonarRegister />} />
          <Route path="/profile/add-blog" element={<AddBlog />} />
          <Route path='/profile/request-blood' element={<Appoinment />} />
          <Route path='/profile/donar-card' element={<DonarCard />} />
          <Route path='/profile/recipient-card' element={<RecipientCard />} />
          <Route path='/profile/manage-blogs' element={<ManageBlogs />} />
        </Route>

        {/*  admin routes */}

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route element={<AdminProtected />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin-add-blog" element={<AddBLog />} />
          <Route path="/admin-get-blog" element={<GetBlogs />} />
          <Route path="/admin-add-volunteer" element={<Add_Volunteer />} />
          <Route path="/admin-manage-volunteer" element={<Manage_volunteer />} />
          <Route path="/admin-manage-content" element={<Manage_content />} />
          <Route path="/admin-manage-users" element={<Manage_users />} />

        </Route>

        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App