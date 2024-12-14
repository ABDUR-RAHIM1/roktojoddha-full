import React, { useEffect, useContext } from 'react';
import Blog from './Blog';
import AdminDashboard from '../Dashboard/AdminDashboard';
import { motion } from 'framer-motion';
import { GlobalState } from '../../../State/State';
import LoadingSpinner from '../../utils/Spinner';

function GetBlogs() {
  const { getOneBlogAdmin, oneBlog, isLoading, isDelete } = useContext(GlobalState);

  useEffect(() => {
    getOneBlogAdmin();
  }, [isDelete]);

  console.log(oneBlog)
  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <AdminDashboard>
      <div className="title">Manage Your Blogs</div>
      <hr />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: '2',
        }}
      >
        {/* <table className='table'>
          <thead>
            <tr>
              <th>Photo</th>
              <th>role</th>
              <th>title</th>
              <th>date</th>
              <th>Edit / delete</th>
            </tr>
          </thead>
          <tbody>
            {oneBlog &&
              oneBlog.slice().reverse().map((bl) => (
                <tr className='p-3' key={bl._id}>
                  <Blog blog={bl} />
                </tr>
              ))}
          </tbody>
        </table> */}

        <h3 className=' text-4xl font-bold text-center text-red-500'>Under Proccesing</h3>
      </motion.div>
    </AdminDashboard>
  );
}

export default GetBlogs;
