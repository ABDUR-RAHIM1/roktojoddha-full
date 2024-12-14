import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GlobalState } from '../../State/State';
import { MdOutlineExpandLess } from "react-icons/md"

export default function Nav(props) {
    const { show } = props
    const path = useLocation().pathname;

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Donors", path: "/donars" },
        { name: "Recipients", path: "/recipients" },
        { name: "Blogs", path: "/blogs" },
        { name: "About Us", path: "/about" },
    ];

    const { token } = useContext(GlobalState)



    return (
        <div className={` ${show ? " scale-x-1" : " scale-x-0"} origin-left w-[75%] md:w-[48%] primaryBg duration-200 h-screen  z-[20] fixed top-0 left-0 px-10 py-10 md:pb-10 overflow-y-auto`}>

            <div className=' w-full h-[100px] flex items-center justify-between flex-col md:flex-row gap-3'>
                <Link to={"/"} className=' text-3xl md:text-5xl font-bold   border-b md:border-0' >Roktojoddha</Link>

            </div>

            <div className=' w-full md:w-[75%] m-auto flex flex-col text-2xl md:text-3xl font-bold gap-5 my-5'>

                {
                    navItems.map((n, i) => (
                        <Link to={n.path} key={i} className={` flex items-center justify-between ${path === n.path ? "scale-110 text-black font-extrabold" : ""}`}>
                            <span>{n.name}</span>
                            <span className=' text-4xl text-white rotate-[90deg]'>
                                <MdOutlineExpandLess />
                            </span>
                        </Link>
                    ))
                }

                <div className=' my-10 w-full'>
                    {
                        token
                            ? <Link to="/profile" className=' py-3 px-6 bg-red-800 text-white font-bold rounded-sm hover:shadow-md duration-200 text-center'>
                                Profile
                            </Link>
                            :
                            <Link as={Link} to='/auth' className=' py-3 px-6 bg-red-800 text-white font-bold rounded-sm hover:shadow-md duration-200 text-center'>
                                Log-in
                            </Link>


                    }
                </div>

            </div>

        </div>
    )
}
