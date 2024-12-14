import React from 'react'
import { Link } from 'react-router-dom'

export default function SliderCard() {

    return (

        <div className='bg-black bg-opacity-80 p-6 z-[-1]'>
            <h2 className=' text-3xl text-red-500 tracking-wide font-bold capitalize'>Donate Blood  , Save Life !</h2>

            <h1 className=' text-3xl md:text-8xl tracking-wide font-bold my-10 italic capitalize text-white'>
                Donate Blood And <br /> Inspire Others.
            </h1>

            <Link to={"/profile"} className=' inline-block py-3 px-8 text-3xl font-bold bg-red-600 text-white rounded-sm my-6'>Explore Now</Link>
        </div>
    )
}
