import React from 'react'
import { MdBloodtype } from "react-icons/md"
import AppoinmentForm from '../Forms/AppoinmentForm';
import { helpfulInfo } from '../../Data/HelpfullInfo';
import { motion } from 'framer-motion';
import banner from "../../images/blog/b.jpg"

export default function Appoinment() {
    return (
        <section className='overflow-hidden'>
            <div className='relative w-full h-[700px]'>
                <img src={banner} className='w-full h-full object-cover' alt="Blood Donation" />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center flex-col'>
                    <h3 className='text-2xl font-bold uppercase my-5 text-red-600'>blood owner</h3>
                    <h1 className='text-3xl md:text-6xl font-bold text-white'>
                        We Are Blood Donor Group
                    </h1>
                </div>
            </div>

            <motion.div
                initial={{ y: 0, opacity: 0 }}
                whileInView={{ y: -200, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='px-4 md:px-10 z-[2000] flex items-start justify-between flex-wrap overflow-hidden mt-10'>

                {/* Helpful Information Section */}
                <div className='w-full md:w-[48%] bg-white text-black py-10 px-3'>
                    <h1 className='text-2xl md:text-3xl font-bold my-7'>Helpful Information</h1>
                    <div className='my-10 overflow-hidden'>
                        {helpfulInfo.map((item, index) => (
                            <motion.p
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                key={index} className='text-[15px] mb-8 flex items-center gap-3'>
                                <span className='text-3xl text-red-500'><MdBloodtype /></span>
                                {item}
                            </motion.p>
                        ))}
                    </div>
                </div>

                {/* Appointment Form Section */}
                <div className='w-full md:w-[48%] bg-white text-black py-10 px-3 md:px-5'>
                    <div className='my-5'>
                        <AppoinmentForm />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
