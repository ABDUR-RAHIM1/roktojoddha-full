import React from 'react'

export default function DataNotFound({ text }) {
    return (
        <div className=' my-10 px-10 flex items-center justify-center flex-col'>
            <h2 className=' text-3xl font-bold text-red-500'>
                {
                    text || "No items to display. . . "
                }
            </h2>
        </div>
    )
}
