import React from 'react'
import img1 from "../../images/blog/r1.jpg"
import img2 from "../../images/blog/r2.jpg"
import img3 from "../../images/blog/r3.jpg"
import { motion } from 'framer-motion'

export default function BecomeDonate() {

    const donationInformation = [
        {
            title: "Become a Donate",
            photo: img1,
            description: "Become a blood donor and save lives. Your donation can make a huge difference in someone's life during emergencies, surgeries, and medical treatments."
        },
        {
            title: "Why Give Blood?",
            photo: img2,
            description: "Giving blood is a selfless act that helps patients in need of transfusions due to accidents, surgeries, childbirth complications, and various medical conditions."
        },
        {
            title: "How Donations Help",
            photo: img3,
            description: "Blood donations provide critical support to healthcare systems by ensuring an adequate supply of blood for patients. Your donation can help save lives and improve health outcomes."
        }
    ];

    return (
        <div className='my-10 md:my-20 px-4 md:px-10'>
            <div className='flex flex-col items-center gap-6'>
                {/* Top Center Card */}
                <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className='group w-full md:w-[60%] bg-white rounded-sm px-4 py-5 shadow-md hover:shadow-lg transition-shadow duration-300'
                >
                    <div className='w-full h-[300px] overflow-hidden rounded-sm'>
                        <img
                            src={donationInformation[0].photo}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                            alt={donationInformation[0].title}
                        />
                    </div>
                    <div className='my-5'>
                        <h2 className='text-2xl md:text-3xl font-semibold my-3 group-hover:text-red-600 transition-colors duration-300'>
                            {donationInformation[0].title}
                        </h2>
                        <p className='text-lg text-gray-700'>
                            {donationInformation[0].description}
                        </p>
                    </div>
                    <button className='text-lg font-bold py-3 px-4 bg-slate-950 group-hover:bg-red-500 text-white w-full rounded-sm transition-colors duration-300'>
                        Read More
                    </button>
                </motion.div>

                {/* Bottom Two Side-by-Side Cards */}
                <div className='flex flex-wrap justify-center gap-6 w-full'>
                    {donationInformation.slice(1).map((d, i) => (
                        <motion.div
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            key={i}
                            className='group w-full md:w-[48%] bg-white rounded-sm px-4 py-5 shadow-md hover:shadow-lg transition-shadow duration-300'
                        >
                            <div className='w-full h-[300px] overflow-hidden rounded-sm'>
                                <img
                                    src={d.photo}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                                    alt={d.title}
                                />
                            </div>
                            <div className='my-5'>
                                <h2 className='text-2xl md:text-3xl font-semibold my-3 group-hover:text-red-600 transition-colors duration-300'>
                                    {d.title}
                                </h2>
                                <p className='text-lg text-gray-700'>
                                    {d.description}
                                </p>
                            </div>
                            <button className='text-lg font-bold py-3 px-4 bg-slate-950 group-hover:bg-red-500 text-white w-full rounded-sm transition-colors duration-300'>
                                Read More
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
