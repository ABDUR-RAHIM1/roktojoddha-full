import React from 'react'
import DonarRegisterForm from '../Forms/DonarRegisterForm'
import { useLocation } from 'react-router-dom';
import Banner from '../utils/Banner';
import ProifleLayout from '../../Profiles/ProifleLayout';
import { motion } from 'framer-motion';

function DonarRegister() {

  const state = useLocation().state;


  return (
    <ProifleLayout>
      <motion.section
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=' overflow-hidden'>
        <div className=" w-full p-5 md:p-10 bg-white">
          <DonarRegisterForm state={state} />
        </div>
      </motion.section>
    </ProifleLayout>
  )
}

export default DonarRegister