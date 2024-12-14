import React from 'react'
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs"
import { Link } from 'react-router-dom'

function Footer() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Donors", path: "/donars" },
    { name: "Recipients", path: "/users" },
    { name: "About Us", path: "/about" },
    { name: "Blogs", path: "/blogs" },
  ];
  return (
    <>
      <div className='wrap py-20  pt-20 pb-3  flex justify-between flex-wrap items-start bg-black text-slate-100'>

        <div className='w-full md:w-[48%] my-5'>
          <h1 className=' text-3xl md:text-5xl font-bold my-5'>About Us</h1>
          <div className=' my-7'>
            <p className=' text-xl tracking-[2px]'>We are dedicated to connecting donors with those in urgent need of life-saving blood. Our mission is to make blood donation simple, accessible, and impactful, ensuring that no one goes without the help they need. Join us in our efforts to save lives and make a difference today!</p>
          </div>
        </div>
        <div className='w-full md:w-[48%] my-5'>
          <h1 className=' text-3xl md:text-5xl font-bold my-5'>Quick Links</h1>

          <div className='my-7  flex flex-col gap-5 '>
            {
              navItems.map((n, i) => (
                <Link to={n.path} key={i} className=' border-b text-2xl hover:text-red-500'>{n.name}</Link>
              ))
            }
          </div>
        </div>



      </div>


      {/*  copyright */}
      <div className='bg-slate-900 py-3  text-white'>
        <p className='text-center'>Copyright@ <a className='underline hover:text-red-500' href="http://abdr.netlify.app" target="_blank" rel="noopener noreferrer">AR It Solutions</a></p>
      </div>
      {/*  copyright */}
    </>
  )
}

export default Footer