import React, { useState, useContext, useEffect } from 'react'
import Inputs from '../utils/Inputs'
import TextArea from '../utils/TextArea';
import { GlobalState } from '../../State/State';
import Loading from '../utils/Loading';
import { useLocation } from 'react-router-dom';
import ProifleLayout from '../../Profiles/ProifleLayout';
import FileField from '../utils/FileField';
import useFileUploader from '../../hooks/useFileUploader';
import { motion } from 'framer-motion';

function AddBlog() {

  const { state } = useLocation();
  const { postHandler, posting, editHandler, updating } = useContext(GlobalState)
  const [formData, setFormData] = useState({ title: "", desc: "", photo: "" });

  const { fileLoading, uploadFile } = useFileUploader()



  const handleAddBlog = (e) => {
    e.preventDefault()
    const POST_API = "/blogs/blogs"
    postHandler(POST_API, formData)
  }

  const handleEditBlog = (e) => {
    e.preventDefault()
    const UPDATE_API = `/blogs/blogs/${state._id}`
    editHandler(UPDATE_API, formData)
  }


  const handleChange = async (e) => {
    const { name, value } = e.target;
    if (name === "photo") {
      const image = e.target.files[0];
      await uploadFile(image, setFormData);
    } else {

      setFormData({ ...formData, [name]: value })
    }
  }

  console.log(formData)

  useEffect(() => {

    if (state) {
      setFormData(state)
    }
  }, [state])


  return (
    <ProifleLayout>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='w-full px-4 bg-white'>
        <form
          onSubmit={state ?
            handleEditBlog
            :
            handleAddBlog
          }
          className='w-full  p-4 '>
          <h3 className='text-center my-10 text-gray-900 text-3xl uppercase'>
            {state ? "Update Post" : "Add New Post"}
          </h3>
          <Inputs
            name="title"
            value={formData.title}
            handleChange={handleChange}
            required={true}
            placeholder="Enter Title"
            lable="Enter  Blog Title"
          />
          <TextArea
            name="desc"
            value={formData.desc}
            handleChange={handleChange}
            required={true}
            placeholder="Enter Description"
            lable="Enter  Blog Description"
          />

          <FileField
            name="photo"
            label={fileLoading ? "Uploading . . ." : "Upload Photo"}
            required={false}
            handleChange={handleChange}
          />

          <button disabled={fileLoading} className=' py-4 px-10 text-center primaryBg2 hover:secondaryBg  my-5'>
            {posting || updating ? <Loading /> : state ? "Update The Post" : "Add Post"}
          </button>

        </form>
      </motion.div>
    </ProifleLayout>
  )
}

export default AddBlog