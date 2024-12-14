import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import demoImg from '../../images/demo.jpg'
import Banner from '../utils/Banner';
function DonarDetails() {
    const { state, pathname } = useLocation();

    const { photo, name } = state;


    return (
        <>
            <Banner path={pathname} />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: '1'
                }}

                className=' px-5 md:px-10 py-10 md:py-20 bg-gray-200'>
                <div className="w-full ">
                    <div className=' w-full  overflow-hidden'>
                        <img className='w-full m-auto  h-auto max-h-[80vh] rounded-sm' src={ photo || demoImg} alt="roktojoddha" />
                    </div>
                    <h1 className='heading text-center text-red-500 font-bold my-10 italic uppercase'>Name : {name}</h1>

                    {/*  this table component under this page */}
                    <DonarTable
                        data={state}
                    />

                    <Link to='/donars'>
                        <button className='py-5 md:py-7 px-10 md:px-16 bg-red-500 hover:bg-black duration-200 font-bold my-10 text-white'>Back</button>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}

export default DonarDetails



function DonarTable({ data }) {
    const {
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
    );

}

