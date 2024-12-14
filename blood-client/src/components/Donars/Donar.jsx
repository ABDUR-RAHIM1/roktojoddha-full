import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import demoImg from '../../images/demo.jpg'

function Donar(props) {
    const { photo, name, bloodGroup, gender, address } = props.donar

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1
            }}
            viewport={{ once: true }}
            className='group w-full md:w-[31%] bg-white shadow-lg rounded-xl overflow-hidden p-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl'>
            {/* Image Section */}
            <div className="w-full h-[50vh] overflow-hidden relative">
                <img
                    className='w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-80'
                    src={photo || demoImg}
                    alt={`${name}'s profile`}
                />
                {/* Add a subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 group-hover:opacity-60 transition-all duration-300"></div>
            </div>

            {/* Content Section */}
            <div className="p-4">
                <table className="w-full">
                    <tbody>
                        <tr className="border-b border-gray-200 py-2">
                            <td className="font-semibold text-gray-700">Name:</td>
                            <td className="text-gray-600">{name}</td>
                        </tr>
                        <tr className="border-b border-gray-200 py-2">
                            <td className="font-semibold text-gray-700">Blood Group:</td>
                            <td className="text-gray-600">{bloodGroup}</td>
                        </tr>
                        <tr className="border-b border-gray-200 py-2">
                            <td className="font-semibold text-gray-700">Gender:</td>
                            <td className="text-gray-600">{gender}</td>
                        </tr>
                        <tr className="border-b border-gray-200 py-2">
                            <td className="font-semibold text-gray-700">Address:</td>
                            <td className="text-gray-600">{address}</td>
                        </tr>
                    </tbody>
                </table>

                {/* See Details Button */}
                <Link to='/donars-details' state={props.donar}>
                    <button
                        className="w-full py-3 mt-4 text-white bg-red-600 rounded-md text-lg font-semibold transition-all duration-300 transform hover:bg-red-500 hover:scale-105"
                    >
                        See Details
                    </button>
                </Link>
            </div>
        </motion.div>
    )
}

export default Donar
