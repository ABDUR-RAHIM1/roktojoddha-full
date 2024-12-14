import React, { useContext } from 'react'
import ProifleLayout from '../ProifleLayout'
import useFetch from '../../hooks/usefetch'
import { GlobalState } from '../../State/State'
import RecipientTable from './RecipientTable'
import ProfileLoading from '../Loading/ProfileLoading'
import { motion } from 'framer-motion'
import DataNotFound from '../../components/utils/DataNotFound'

export default function RecipientCard() {
    const { token } = useContext(GlobalState)
    const API = "/users-register/users-one"
    const { isLoading, data } = useFetch(API, token)
    console.log(data)

    if (isLoading) {
        return <ProfileLoading />
    }

    return (
        <ProifleLayout>

            <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >

                {
                    data && data.length > 0 ? <RecipientTable data={data} /> : <DataNotFound />
                }
            </motion.div>
        </ProifleLayout>
    )
}
