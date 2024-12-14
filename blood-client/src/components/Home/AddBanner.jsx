import React from 'react';
import { MdArrowCircleRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function AddBanner() {
    const sections = [
        {
            title: "Donate Blood",
            text: "Save lives by donating blood. Your small effort can make a big difference for those in need.",
            buttonText: "Become a Donor",
            link: "/profile/donar-registration",
            bgColor: "bg-red-500",
            textColor: "text-white",
        },
        {
            title: "Need Blood",
            text: "Urgently need blood? Request now and let donors help you or your loved ones in critical times.",
            buttonText: "Request Blood",
            link: "/profile/request-blood",
            bgColor: "bg-gray-900",
            textColor: "text-gray-200",
        }
    ];

    return (
        <section className='flex flex-wrap items-center justify-between bg-gray-100 py-20 px-5'>
            {sections.map((section, index) => (
                <motion.div
                    key={index}
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                    className={`w-full md:w-[48%] p-8 my-4 md:my-0 rounded-lg shadow-lg ${section.bgColor}`}
                >
                    <div className={`${section.textColor}`}>
                        <h2 className='text-3xl font-bold mb-4'>{section.title}</h2>
                        <p className='text-lg mb-6'>{section.text}</p>
                        <div className='flex items-center justify-between'>
                            <Link to={section.link} className='text-xl font-semibold underline hover:no-underline hover:text-red-300'>
                                {section.buttonText}
                            </Link>
                            <Link to={section.link} className='text-4xl hover:text-red-400'>
                                <MdArrowCircleRight />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            ))}
        </section>
    );
}

export default AddBanner;
