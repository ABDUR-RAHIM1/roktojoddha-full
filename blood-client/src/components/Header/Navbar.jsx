import React, { useEffect, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [show, setShow] = useState(false);



    const handleShowNav = () => {
        setShow(!show);
    };

    return (
        <div className={`flex items-center justify-between h-[100px] sticky top-0 bg-white z-[111] border-b border-b-red-500`}>

            <div className={`pl-5 md:pl-10 w-[48%] h-full flex items-center justify-start   primaryBg`}>
                <Link to="/" className="text-2xl md:text-5xl font-bold text-white hover:text-gray-100">
                    Roktojoddha
                </Link>
            </div>

            {/* Menu Icon */}
            <nav className="pr-5 md:pr-10 w-[48%] h-full flex justify-end items-center">
                <span onClick={handleShowNav} className="text-5xl text-red-500 cursor-pointer">
                    {show ? <MdClose /> : <MdMenu />}
                </span>
            </nav>

            {/* Nav Component */}
            <Nav show={show} />
        </div>
    );
}
