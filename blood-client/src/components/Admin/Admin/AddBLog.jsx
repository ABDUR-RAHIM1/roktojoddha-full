import React from 'react'
import Inputs from '../../utils/Inputs'
import TextArea from '../../utils/TextArea'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { GlobalState } from '../../../State/State'
import AdminDashboard from '../Dashboard/AdminDashboard'
import Notification from '../../utils/Notification'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import uploadFile from '../../utils/UploadFile'
import Loading from '../../utils/Loading'
import { useEffect } from 'react'

//  admin add blog component
function AddBLog() {
   const state = useLocation().state;
   const { handleAddBlogAdmin, handleEditBlog, isLoading, message } = useContext(GlobalState)
   const [blog, setBlog] = useState({ ProfilePic: "" })
   const [imgLoading, setImgIsLoading] = useState(false)
   const handleChange = (e) => {
      setBlog({ ...blog, [e.target.name]: e.target.value })
   }

   const handleFileChange = async (e) => {
      const image = e.target.files[0];
      await uploadFile(image, setBlog, setImgIsLoading);
   };


   useEffect(() => {
      if (state) {
         setBlog(state)
      }
   }, [])
 
   return (
      <AdminDashboard>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
               duration: '2'
            }}
            className='mt-10'>
            <form
               onSubmit={state ?
                  (e) => handleEditBlog(e, state._id, blog)
                  :
                  (e) => handleAddBlogAdmin(e, blog)

               }
               className='add_form'>
               <h3 className='text-center my-4 text-slate-800 text-3xl uppercase'>
                  {state ? "Update Blog" : "Add Blog"}
               </h3>
               <Inputs
                  name="title"
                  value={blog.title}
                  handleChange={handleChange}
                  required={true}
                  placeholder="Enter Title"
                  lable="Enter  Blog Title"
               />
               <TextArea
                  name="desc"
                  value={blog.desc}
                  handleChange={handleChange}
                  required={true}
                  placeholder="Enter Description"
                  lable="Enter  Blog Description"
               />
               <input onChange={handleFileChange} type="file" name='profilePic' className='form-control mt-4' />
               <small className='text-green-800 my-3'>
                  {imgLoading ? <p className='text-red-600'>Uploading Image</p> : <p>Add Photo</p>}
               </small>
               <br />
               <button disabled={imgLoading} className='button button_blue my-2'>
                  {state ? "Update Blog" : isLoading ? <Loading size='sm' /> : "Add Blog"}
               </button>
             
               {
                  message && <Notification />
               }
            </form>
         </motion.div>
      </AdminDashboard>
   )
}

export default AddBLog