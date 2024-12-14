import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import demoImg from '../../images/demo.jpg'

function Recipient(props) {
    const {
        donationStatus,
        patientName,
        bloodGroup,
        howMuch,
        location,
        createdAt,
        preferredDate, photo } = props.recipient

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1
            }}
            viewport={{ once: true }}
            className=' group w-full md:w-[32%] my-5 bg-white shadow-md shadow-gray-300 rounded-md  p-3'>
            <div className="w-full h-[50vh] overflow-hidden scrollbar-hide relative" >
                <img className='w-full h-full group-hover:scale-110 group-hover:opacity-80   duration-300' src={photo || demoImg} alt="roktojoddha" />
                <div className=' py-2 px-4 bg-black  absolute left-0 bottom-0'>
                    <p className=' text-white'>
                        {new Date(createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
            <div className='h-[270px] mt-3 overflow-y-auto scrollbar-hide cursor-all-scroll'>
                <table className="my-0 w-full  border-collapse">
                    <tbody className="space-y-4">
                        <tr className="border-b border-b-gray-100">
                            <td className="p-2 font-bold">Name:</td>
                            <td className="p-2">{patientName}</td>
                        </tr>
                        <tr className="border-b border-b-gray-100">
                            <td className="p-2 font-bold">Required Group:</td>
                            <td className="p-2">{bloodGroup}</td>
                        </tr>
                        <tr className="border-b border-b-gray-100">
                            <td className="p-2 font-bold">Bags Required:</td>
                            <td className="p-2">{howMuch}</td>
                        </tr>
                        <tr className="border-b border-b-gray-100">
                            <td className="p-2 font-bold">Address:</td>
                            <td className="p-2">{location}</td>
                        </tr>
                        <tr className="border-b border-b-gray-100">
                            <td className="p-2 font-bold">Required Time:</td>
                            <td className="p-2">{new Date(preferredDate).toLocaleDateString()}</td>
                        </tr>

                        <tr className="border-b border-b-gray-100">
                            <td className="p-2 font-bold">Status:</td>
                            <td className="p-2">
                                <button className={`py-2 px-3 rounded-sm border w-full text-white ${donationStatus === "yes" ? "bg-green-700" : "bg-red-600"}`}>
                                    {donationStatus}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
            <Link to='/recipient-details' state={props.recipient} >
                <button
                    className="group-hover:bg-red-500 duration-300 py-4 px-6 bg-black text-white text-center rounded-sm my-5 w-full"
                > See Details</button>
            </Link>
        </motion.div >
    )
}

export default Recipient