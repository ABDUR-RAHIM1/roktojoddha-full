import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalState } from '../../State/State';
import { MdClose, MdHome, MdLogout, MdMenu } from 'react-icons/md';
import Cookies from 'js-cookie';

export default function ProfileNavbar() {
    const { profileArrow, setProfileArrow } = useContext(GlobalState)
    const navigate = useNavigate()


    const handleLogout = () => {
        Cookies.remove("BLOOD_USER_TOKEN")

        setTimeout(() => {
            navigate("/")
        }, 1000);
    }

    const handleArrowClick = () => {
        setProfileArrow(!profileArrow)
    }


    return (
        <div className='px-5 md:px-10 py-5 md:py-0 flex items-center justify-between flex-wrap h-auto md:h-[100px] sticky top-0  primaryBg z-[111] border-b border-b-red-500 text-center'>
            <div className={` w-full md:w-[280px] flex items-center justify-between   px-2 md:p-4 h-full `}>
                <Link to="/" className="text-3xl md:text-5xl font-bold primaryBg2 py-2 px-3  rounded-md text-gray-50 hover:text-gray-200">
                    <MdHome />
                </Link>

                <span onClick={handleArrowClick} className={` text-2xl md:text-3xl font-bold primaryBg2 py-2 px-3  rounded-md text-gray-50 hover:text-gray-200 ${profileArrow ? " rotate-0" : " rotate-180"} duration-200 cursor-pointer`}>
                    {
                        profileArrow ? <MdClose /> : <MdMenu />

                    }
                </span>
            </div>

            <div className=' m-auto md:m-0'>
                <button onClick={handleLogout} className=' py-2 md:py-5 px-3 md:px-6  primaryBg2 text-gray-100 font-medium flex items-center gap-3'>
                    Log Out
                    <span className=' text-3xl'>
                        <MdLogout />
                    </span>
                </button>
            </div>
        </div>
    )
}
