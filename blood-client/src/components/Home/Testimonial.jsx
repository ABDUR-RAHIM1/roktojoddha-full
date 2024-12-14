import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

function Testimonial() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='wrap  py-10  md:py-16 bg-red-600 overflow-hidden'>

            <motion.h1
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}

                className=' text-[35px] md:text-[60px] font-bold   md:my-10 text-white tracking-[5px]'>Be a Lifesaver, Join Us Today!</motion.h1>
            <p className='my-6 text-2xl text-white'>No one seeks discomfort or hardship, yet sometimes, through small acts of giving, we can create immense joy. Donating blood may seem like a simple step, but it holds the power to save lives and bring hope to those in need. Together, we can transform lives and make the world a better place — one donation at a time.</p>

            <div className="text my-10 text-center  ">
                <Link to='/donar-register'>
                    <button className=' py-8 px-16 rounded-md bg-white text-2xl md:text-3xl font-bold hover:scale-110 duration-200 '>Join With  Us</button>
                </Link>
            </div>
        </motion.div>
    )
}

export default Testimonial