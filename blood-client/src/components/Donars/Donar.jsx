import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import demoImg from '../../images/demo.jpg'
function Donar(props) {
    const { profilePic, name, bloodGroup, gender, address } = props.donar

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1
            }}
            viewport={{ once: true }}
            className=' group w-full md:w-[31%] bg-white shadow-md shadow-gray-300 rounded-md  p-3'>
            <div className="w-full h-[60vh] overflow-hidden" >
                <img className='w-full h-full group-hover:scale-110 group-hover:opacity-80   duration-300' src={profilePic || demoImg} alt="" />
            </div>
            <table className="my-6 w-full border-collapse">
                <tbody className="space-y-4">
                    <tr className="border-b border-b-gray-100">
                        <td className="p-2 font-bold">Name:</td>
                        <td className="p-2">{name}</td>
                    </tr>
                    <tr className="border-b border-b-gray-100">
                        <td className="p-2 font-bold">Blood Group:</td>
                        <td className="p-2">{bloodGroup}</td>
                    </tr>
                    <tr className="border-b border-b-gray-100">
                        <td className="p-2 font-bold">Gender:</td>
                        <td className="p-2">{gender}</td>
                    </tr>
                    <tr className="border-b border-b-gray-100">
                        <td className="p-2 font-bold">Address:</td>
                        <td className="p-2">{address}</td>
                    </tr>
                </tbody>
            </table>

            <Link to='/donars-details' state={props.donar} >
                <button
                    className="group-hover:bg-red-500 duration-300 py-4 px-6 bg-black text-white text-center rounded-sm my-5 w-full"
                > See Details</button>
            </Link>
        </motion.div >
    )
}

export default Donar