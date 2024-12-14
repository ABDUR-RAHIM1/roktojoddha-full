import React, { useContext } from 'react'
import Sidebar from './Profile/SIdebar'
import { GlobalState } from '../State/State'

export default function ProifleLayout({ children }) {

    const { profileArrow } = useContext(GlobalState)

    return (

        <div className='flex w-full  relative'>

            <aside className={` ${profileArrow ? " scale-x-100" : " scale-x-0"} origin-left w-[90%] md:w-[300px] h-screen duration-200 px-4 py-10 overflow-y-auto  bg-gray-100 text-gray-900 absolute top-0 left-0 z-[20]`}>
                <Sidebar />

            </aside>
            <main className=' w-full bg-gray-200 h-screen px-5 py-10 overflow-scroll scrollbar-hide z-[10]'>
                {children}
            </main>
        </div>

    )
}
