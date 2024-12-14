import { motion } from 'framer-motion'
import React from 'react'
import banner from "../../images/blog/b.jpg"
import { useLocation } from 'react-router-dom'
export default function Banner({ image, path }) {

    const pathname = useLocation().pathname;

    const profilePath = pathname.includes("/profile")

    return (
        <div className={` ${profilePath ? "hidden" : "block"} blogbanner w-full h-[400px] relative`}>
            <img src={image || banner} className=' w-full h-full ' alt="" />
            <div className=' w-full h-full bg-black absolute top-0 left-0 bg-opacity-70 flex items-center justify-center'>
                <motion.h2
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className=' text-3xl md:text-6xl font-bold text-white'>{path || "No path"}</motion.h2>
            </div>
        </div>
    )
}
