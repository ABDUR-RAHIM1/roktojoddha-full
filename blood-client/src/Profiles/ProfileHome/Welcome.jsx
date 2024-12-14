import React from 'react'

export default function Welcome({ user }) {
    const { name, photo, email, gender, role } = user;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center space-x-4">
                {/* User Profile Image */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
                    <img src={photo || "https://via.placeholder.com/150"} alt="User Profile" className="w-full h-full object-cover" />
                </div>
                {/* User Info */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-700 capitalize">{name}</h2>
                    <p className="text-gray-500 mt-2">{role ? `Role: ${role}` : "Role: Donor"}</p>
                    <p className="text-gray-500 mt-1">{email}</p>
                    <p className="text-gray-500 mt-1">Gender: {gender}</p>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-gray-500">
                    Thank you for being a dedicated donor. Here’s an overview of your blood donation activity.
                </p>
            </div>
        </div>
    )
}
