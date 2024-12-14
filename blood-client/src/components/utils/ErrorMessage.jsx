import React from 'react'

export default function ErrorMessage({ message }) {
    return (
        <div className='w-full h-screen py-10 flex flex-col items-center justify-center text-2xl font-bold text-red-500'>
            {
                message || "ErrorMessage"
            }
        </div>
    )
}
