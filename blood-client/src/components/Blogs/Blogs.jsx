import React from 'react'
import Blog from './Blog'
import { motion } from 'framer-motion';
import LoadingSpinner from '../utils/Spinner';
import Banner from '../utils/Banner';
import useFetch from '../../hooks/usefetch';
import ErrorMessage from '../utils/ErrorMessage';


function Blogs() {

  const API = `/blogs/blogs`;
  const { isLoading, error, data } = useFetch(API);

  if (isLoading) return <LoadingSpinner />



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: '2'
      }}
    >
      <Banner path={"Blogs"} />
      <div>

        {
          error ? (
            <ErrorMessage message={error} />
          ) : (

            data && data.length > 0 ? data.slice().reverse().map((bl, index) => (
              <Blog
                key={bl._id}
                blog={bl}
                index={index}
              />
            ))
              : <ErrorMessage message={"no Blogs Found"} />

          )
        }


      </div>

    </motion.div>
  )
}

export default Blogs