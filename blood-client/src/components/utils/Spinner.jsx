import React from 'react'
import { motion } from 'framer-motion';

function LoadingSpinner() {

  return (
    <div className='w-full h-screen  flex items-center justify-center flex-col gap-4'>
      <h1 className=' text-3xl md:text-6xl text-red-500 font-bold'>ROKTOJODDHA</h1>
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
  )
}

export default LoadingSpinner