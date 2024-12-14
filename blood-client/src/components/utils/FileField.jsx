import React from 'react'

export default function FileField(props) {
    const { name, label, required, handleChange } = props;
    return (
        <div className=' my-4'>
            <label htmlFor={name} className=' capitalize'>{label}</label>
            <input
                className={`w-full input bg-gray-100 focus:outline-red-500 focus:bg-gray-200 focus:border-red-500`}
                type="file"
                name={name}
                required={required}
                onChange={handleChange}
            />
        </div>
    )
}
