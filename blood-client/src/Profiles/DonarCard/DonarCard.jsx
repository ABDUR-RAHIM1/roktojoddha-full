import React, { useContext } from 'react'
import ProifleLayout from '../ProifleLayout'
import useFetch from '../../hooks/usefetch'
import { GlobalState } from '../../State/State'
import { MdDelete, MdEdit } from 'react-icons/md'
import ProfileLoading from '../Loading/ProfileLoading'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DataNotFound from '../../components/utils/DataNotFound'

export default function DonarCard() {
    const { token, deleteHandler } = useContext(GlobalState)
    const API = '/donar-register/donars-one'
    const { isLoading, data } = useFetch(API, token);

    if (isLoading) {
        return <ProfileLoading />
    }


    const handleDeleteDonar = (id) => {
        const DELETE_API = `/donar-register/delete/${id}`
        const res = window.confirm("Are You Sure ? ")

        res ?
            deleteHandler(DELETE_API)
            : null

    }

    if (!data) {
        return <DataNotFound message={"Data not Found"} />
    }

    const {
        photo,
        email,
        address,
        dob,
        weight,
        gender,
        beforeDonation,
        bloodGroup,
        contactNumber,
        emergencyContact,
        relationshipContact,
        donationDate,
        preferredDonationTime,
        message,
        allergies,
        donationLocation,
        lastDonationLocation,
        medicalCondition,
        createdAt,
        updatedAt
    } = data;



    return (

        <ProifleLayout>

            <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='overflow-x-auto'
            >
                <div className='w-full py-5 px-10 primaryBg2 my-5 flex items-center justify-between'>
                    <div>Actions</div>
                    <div className='flex items-center gap-10'>
                        <Link to={"/profile/donar-registration"}
                            state={data}
                            className='inline-block text-4xl text-blue-600 cursor-pointer bg-blue-50 p-2 hover:shadow-xl'>
                            <MdEdit />
                        </Link>
                        <span onClick={() => handleDeleteDonar(data._id)} className='text-4xl text-red-600 cursor-pointer bg-blue-50 p-2 hover:shadow-xl'>
                            <MdDelete />
                        </span>
                    </div>
                </div>

                <div className=' w-full h-[70vh]'>
                    <img className=' w-full h-full' src={photo} alt="roktojoddha" />
                </div>



                <table className="bg-white px-5 min-w-full table-auto border-collapse overflow-auto my-6">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left font-bold border-b w-[28%]">Key</th>
                            <th className="px-6 py-3 text-left font-bold border-b w-[68%]">Value</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Blood Group:</td>
                            <td className="px-6 py-4">{bloodGroup}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Email:</td>
                            <td className="px-6 py-4 lowercase">{email}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Address:</td>
                            <td className="px-6 py-4 lowercase">{address}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Date of Birth:</td>
                            <td className="px-6 py-4">{new Date(dob).toLocaleDateString()}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Weight:</td>
                            <td className="px-6 py-4">{weight} KG</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Gender:</td>
                            <td className="px-6 py-4">{gender}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Contact Number:</td>
                            <td className="px-6 py-4">+888 {contactNumber}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Emergency Contact:</td>
                            <td className="px-6 py-4">+888 {emergencyContact}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Relationship Contact:</td>
                            <td className="px-6 py-4">{relationshipContact ? "+888 " + relationshipContact : "N/A"}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Previous Donations:</td>
                            <td className="px-6 py-4">{beforeDonation} Times</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Last Donation Date:</td>
                            <td className="px-6 py-4">{new Date(donationDate).toLocaleDateString()}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Preferred Donation Time:</td>
                            <td className="px-6 py-4">{preferredDonationTime} AM/PM</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Donation Location:</td>
                            <td className="px-6 py-4">{donationLocation}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Last Donation Location:</td>
                            <td className="px-6 py-4">{lastDonationLocation}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Allergies:</td>
                            <td className="px-6 py-4">{allergies}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Medical Condition:</td>
                            <td className="px-6 py-4">{medicalCondition}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Created At:</td>
                            <td className="px-6 py-4">{new Date(createdAt).toLocaleString()}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Updated At:</td>
                            <td className="px-6 py-4">{new Date(updatedAt).toLocaleString()}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="px-6 py-4 font-medium text-gray-900">Conditions:</td>
                            <td className="px-6 py-4">
                                {message && message.split(".").map((m, i) => (
                                    <p key={i} className='my-3'>{m}</p>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </motion.div>

        </ProifleLayout>
    )
}
