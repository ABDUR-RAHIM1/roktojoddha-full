import React from 'react'

function TextArea(props) {
    const { name, required, value, placeholder, label, handleChange } = props
    return (
        <div className=' my-5'>
            <label htmlFor={name} className=' capitalize'>{label}</label>
            <textarea name={name}
                value={value}
                required={required}
                className='`w-full h-[150px] input bg-gray-100 focus:outline-red-500 focus:bg-gray-200 focus:border-red-500`'
                placeholder={placeholder}
                onChange={handleChange}
            ></textarea>
        </div>
    )
}

export default TextArea