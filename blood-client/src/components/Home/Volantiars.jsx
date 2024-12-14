import React from 'react'
import { useContext } from 'react'
import { GlobalState } from '../../State/State'
import { useEffect } from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
function Volantiars() {
    const { handleGetVolunteer, volunteer } = useContext(GlobalState);


    // const volunteers = volunteer.filter(vl => vl.title === "co-founder" || vl.title === "founder");

    useEffect(() => {
        handleGetVolunteer()
    }, [])

    return (
        <div className="text-lg my-10 bg-white py-10 md:py-20 px-5 md:px-10">
            <div className=' text-center my-10'>
                <h2 className=' text-red-500 text-xl md:text-2xl my-5'>Team members</h2>
                <h1 className=' text-3xl md:text-5xl my-5 font-bold '>
                    Meet Volunteers
                </h1>
            </div>

            {/*  voluteers card */}
            <div className='flex justify-center gap-4 md:gap-6 flex-wrap'>
                {
                    volunteer && volunteer.slice(0, 3).map(vt => (
                        <Card
                            key={vt._id}
                            volunteer={vt}
                        />
                    ))
                }

            </div>
            {/*  voluteers card */}
        </div>

    )
}

export default Volantiars


const Card = (props) => {
    const { name, title, profilePic, fb_link, t_link, l_link } = props.volunteer
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className=' group relative w-full md:w-[47%] py-4 px-3 md:px-5  rounded-md shadow-2xl shadow-gray-300'>
            <div className='w-full h-[70vh] overflow-hidden'>
                <img src={profilePic} className='w-full h-full' alt="roktojoddha" />
            </div>
            <div className=' text-center my-10 capitalize'>
                <h2 className='text-3xl font-bold '>{name}</h2>
                <h2 className='text-2xl font-medium mt-4 text-gray-600 '>{title}</h2>
            </div>
            <div className=' scale-y-0 group-hover:scale-y-100 origin-top duration-300 w-full h-full bg-black bg-opacity-70 absolute top-0 left-0  flex items-center justify-center gap-5'>
                <a className=' text-3xl  bg-white p-4 text-red-500 rounded-tl-full rounded-bl-full' href={fb_link} target='_blank'><FaFacebook /></a>
                <a className=' text-3xl  bg-white p-4 text-red-500 rounded-md' href={t_link} target='_blank'> <FaTwitter /></a>
                <a className=' text-3xl  bg-white p-4 text-red-500 rounded-tr-full rounded-br-full' href={l_link} target='_blank'>  <FaLinkedin /></a>
            </div>
        </motion.div>
    )
}