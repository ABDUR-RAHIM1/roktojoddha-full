import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { motion } from 'framer-motion'
import { FaRegArrowAltCircleLeft } from "react-icons/fa"
function AdminDashboard({ children }) {
  const [arrowClick, setArrowClick] = useState(false)

  return (
    <motion.div
      className='flex-b items-start'>
      <div className={`${arrowClick ? 'w-0  px-0' : 'w-32 sm:w-56 md:w-72 px-3'} sidebar scroll-none  border-r border-slate-50`}>
        <Sidebar />
      </div>
      <div className="dahboard_main scroll-none pb-32 relative">

        <FaRegArrowAltCircleLeft onClick={() => setArrowClick(!arrowClick)} className={`${arrowClick ? "rotate-180" : "rotate-0"} duration-200 arrow`} />
        {children}
      </div>
    </motion.div>
  )
}

export default AdminDashboard