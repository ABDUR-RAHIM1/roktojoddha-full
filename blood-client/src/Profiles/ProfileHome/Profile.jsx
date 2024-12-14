import React, { useContext } from 'react'
import ProifleLayout from '../ProifleLayout'
import { motion } from 'framer-motion'
import { GlobalState } from '../../State/State';
import useFetch from '../../hooks/usefetch';
import ProfileLoading from "../../Profiles/Loading/ProfileLoading"
import Welcome from './Welcome';
import DonationInfo from './DonationInfo';
import Shedule from './Shedule';
export default function Profile() {

  const { token } = useContext(GlobalState);
  const API = `/users/users-one`;
  const { isLoading, data } = useFetch(API, token);

  if (isLoading) {
    return <ProfileLoading />
  }

  if (!data) {
    return <div className=' py-5 px-10 text-center'>Data not Found</div>
  }



  return (
    <ProifleLayout>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5
        }}
        >
        <Welcome />
        <DonationInfo />
        <Shedule />

        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Why Donate Blood Regularly?</h3>
          <p className="text-gray-600">Donating blood not only helps those in need but also improves your health by reducing the risk of heart diseases and stimulating blood cell production.</p>
        </div>


      </motion.div>
    </ProifleLayout>
  )
}
