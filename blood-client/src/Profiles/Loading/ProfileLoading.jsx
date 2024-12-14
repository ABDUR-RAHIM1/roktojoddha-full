import React from 'react' 
import { motion } from 'framer-motion'
import SIdebar from '../Profile/SIdebar'

export default function ProfileLoading() {

    return (
        <div className=' flex' >

            <div className='w-[300px] h-screen px-4 py-10 overflow-scroll bg-gray-100 text-gray-900'>
                <SIdebar />
            </div>

            <div className=' flex-1 h-screen  flex items-center justify-center flex-col gap-4'>
                <h1 className='text-6xl text-red-500 font-bold'>ROKTOJODDHA</h1>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.5,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className='w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full'
                />
            </div>
        </div>
    )
}
