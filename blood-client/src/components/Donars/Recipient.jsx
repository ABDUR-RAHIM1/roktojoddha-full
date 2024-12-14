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
        preferredDate, photo
    } = props.recipient

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1
            }}
            viewport={{ once: true }}
            className='group w-full md:w-[32%] my-5 bg-white shadow-lg rounded-xl p-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl'>
            {/* Image Section */}
            <div className="w-full h-[50vh] overflow-hidden relative">
                <img
                    className='w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-80'
                    src={photo || demoImg}
                    alt="Roktojoddha"
                />
                {/* Overlay with date */}
                <div className='absolute bottom-0 left-0 py-2 px-4 bg-gradient-to-t from-black opacity-50 group-hover:opacity-70 transition-all duration-300'>
                    <p className='text-white'>
                        {new Date(createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className='mt-3'>
                <table className="w-full border-collapse">
                    <tbody>
                        <tr className="border-b border-gray-200 py-2">
                            <td className="font-semibold text-gray-700">Name:</td>
                            <td className="text-gray-600">{patientName}</td>
                        </tr>
                        <tr className="border-b border-gray-200 py-2">
                            <td className="font-semibold text-gray-700">Required Group:</td>
                            <td className="text-gray-600">{bloodGroup}</td>
                        </tr>
                        <tr className="border-b border-gray-200 py-2">
                            <td className="font-semibold text-gray-700">Bags Required:</td>
                            <td className="text-gray-600">{howMuch}</td>
                        </tr>
                        <tr className="border-b border-gray-200 py-2">
                            <td className="font-semibold text-gray-700">Address:</td>
                            <td className="text-gray-600">{location}</td>
                        </tr>
                        <tr className="border-b border-gray-200 py-2">
                            <td className="font-semibold text-gray-700">Required Time:</td>
                            <td className="text-gray-600">{new Date(preferredDate).toLocaleDateString()}</td>
                        </tr>

                        <tr className="border-b border-gray-200 py-2">
                            <td className="font-semibold text-gray-700">Status:</td>
                            <td className="text-gray-600">
                                <button
                                    className={`py-2 px-4 rounded-md text-white w-full ${donationStatus === "yes" ? "bg-green-700" : "bg-red-600"}`}
                                >
                                    {donationStatus}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* See Details Button */}
            <Link to='/recipient-details' state={props.recipient}>
                <button
                    className="w-full py-3 mt-4 text-white bg-red-600 rounded-md text-lg font-semibold transition-all duration-300 transform hover:bg-red-500 hover:scale-105"
                >
                    See Details
                </button>
            </Link>
        </motion.div>
    )
}

export default Recipient
