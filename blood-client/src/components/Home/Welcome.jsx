import React from 'react'
import help1 from "../../images/welcome/help1.png"
import help2 from "../../images/welcome/help2.png"
import { motion } from 'framer-motion'

export default function Welcome() {

    return (
        <section className=' my-10 md:my-20 wrap '>
            <div className='flex justify-between flex-wrap bg-gray-50'>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{once :true}}
                    className='w-full md:w-[48%] my-5 relative'>
                    <img src={help1} alt="roktojoddha" className=' w-full ' />
                    <img
                        src={help2} alt="roktojoddha" className=' w-[300px] h-[300px] rounded-full absolute top-[50%] right-0 transform   translate-y-[-50%]' />
                </motion.div>
                <div className='w-full md:w-[48%] my-5'>
                    <h3 className=' text-red-500 font-medium text-2xl my-4 uppercase'>Help The People in Need</h3>

                    <h1 className=' text-3xl md:text-5xl font-extrabold my-4 leading-[3rem] md:leading-[4rem]'>
                        Welcome to  Blood Donors Organization
                    </h1>
                    <p className=' text-xl my-4'>
                        Every second counts, and your blood donation could be the lifeline someone needs to survive. Join us in our mission to provide a continuous supply of life-saving blood to those in urgent need. Together, we can ensure that no one has to wait for the blood that could save their life.
                    </p>

                    <motion.div
                        initial={{ x: 100 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className=' flex  justify-between flex-wrap gap-3 px-3 md:px-0'>
                        <div className=' flex-1 my-2'>
                            <ul className=' flex flex-col gap-4 text-2xl font-medium list-disc'>
                                <li>Donor Recognition</li>
                                <li>Emergency Response</li>
                                <li>Emergency Blood Requests</li>
                                <li>Health Check</li>
                                <li>Help People</li>
                            </ul>
                        </div>
                        <div className=' flex-1 my-4'>
                            <ul className=' flex flex-col gap-4 text-2xl font-medium list-disc'>
                                <li>Safe & Secure Donations</li>
                                <li>Community Outreach</li>
                                <li>Blood Type Matching</li>
                                <li>Donor Registration & Support</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}
