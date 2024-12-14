import React from 'react'
import { motion } from 'framer-motion';
import ProifleLayout from '../../Profiles/ProifleLayout';
import AppoinmentForm from '../../components/Forms/AppoinmentForm';

export default function Appoinment() {


    return (
        <ProifleLayout>
            <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >

                <div className=' w-full  bg-white text-black py-10 px-3 md:px-5'>

                    <div className='my-5'>
                        <AppoinmentForm />
                    </div>
                </div>
            </motion.div>
        </ProifleLayout>
    )
}



