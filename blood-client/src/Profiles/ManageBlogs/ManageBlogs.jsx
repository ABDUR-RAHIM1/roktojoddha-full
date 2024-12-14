import React, { useContext } from 'react'
import ProifleLayout from '../ProifleLayout'
import useFetch from '../../hooks/usefetch'
import { GlobalState } from '../../State/State'
import BlogTable from './BlogTable'
import ProfileLoading from '../Loading/ProfileLoading'
import { motion } from 'framer-motion'
import DataNotFound from '../../components/utils/DataNotFound'

export default function ManageBlogs() {
    const { token } = useContext(GlobalState)
    const API = "/blogs/blogs-one"

    const { isLoading, data } = useFetch(API, token)


    if (isLoading) {
        return <ProfileLoading />
    }


    return (
        <ProifleLayout>

            <motion.div
                initial={{ x: 20 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >


                {
                    data && data.length > 0 ? <BlogTable blogs={data} /> : <DataNotFound />
                }

            </motion.div>
        </ProifleLayout>
    )
}
