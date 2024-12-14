import React from 'react';

function Inputs(props) {
    const { id, name, type, value, disabled, autocomplete, required, placeholder, label, handleChange } = props;

    return (
        <div className=' my-4'>
            <label htmlFor={name} className=' capitalize'>{label}</label>
            <input
                className={`w-full input bg-gray-100 focus:outline-red-500 focus:bg-gray-200 focus:border-red-500`}
                type={type}
                name={name}
                id={id}
                autoComplete={autocomplete}
                value={value}
                disabled={disabled}
                required={required}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    );
}

export default Inputs;
