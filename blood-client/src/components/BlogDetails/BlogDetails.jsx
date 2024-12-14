import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import demoImg from '../../images/demo1.png'
import { useContext } from 'react';
import { GlobalState } from '../../State/State';
import { IoIosTimer } from "react-icons/io"
import banner from "../../images/blog/b.jpg"
import { FaComments } from 'react-icons/fa';
import { MdMan } from 'react-icons/md';
import Banner from '../utils/Banner';

function BlogDetails() {
    //  blog data pass using useLocation state
    const { state, pathname } = useLocation();
    const { times } = useContext(GlobalState)

    const { photo, title, desc, name, role, postAt, } = state;


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: '1'
            }}

        >

            <Banner path={pathname} />

            <div className=' px-5  py-10  flex-b flex-wrap items-start'>
                <div className="w-full">
                    <img className=' w-full h-auto max-h-[80vh]' src={photo ? photo : demoImg} alt="" />


                    <div className='my-8 flex flex-wrap items-center gap-4 md:gap-8 justify-center md:justify-start'>
                        <p className='text-sm md:text-xl text-red-500 font-medium flex items-center gap-2'>
                            <IoIosTimer /> {times(postAt)}
                        </p>
                        <p className='text-sm md:text-xl text-red-500 font-medium flex items-center gap-2'>
                            <FaComments /> {desc && desc.split(".").length || 1} Comments
                        </p>
                        <p className='hidden md:block'>||</p>
                        <p className='text-sm md:text-xl text-red-500 font-medium flex items-center gap-2'>
                            <MdMan />
                            {name} {`(${role})`}
                        </p>
                    </div>


                    <div className='my-[15px]'>
                        <h1 className=' my-20 md:my-[35px] font-extrabold text-3xl md:text-6xl tracking-[2px]'>{title}</h1>


                        {
                            desc.length > 1 && desc.split(".").map((t, i) => (
                                <p key={i} style={{ lineHeight: "2.5rem" }} className=' text-xl md:text-2xl my-8 tracking-[2px] '>
                                    {t}
                                </p>
                            ))
                        }



                    </div>


                    <Link to='/blogs'>
                        <button className='py-5 px-10 bg-red-500 text-white font-bold  my-5 rounded-sm'>Back</button>
                    </Link>
                </div>
            </div>

        </motion.div >
    )
}

export default BlogDetails