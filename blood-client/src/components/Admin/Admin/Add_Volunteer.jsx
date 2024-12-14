import React, { useState } from 'react'
import Inputs from '../../utils/Inputs'
import { motion } from 'framer-motion'
import AdminDashboard from '../Dashboard/AdminDashboard'
import uploadFile from '../../utils/UploadFile'
import { useContext } from 'react'
import { GlobalState } from '../../../State/State'
import Loading from '../../utils/Loading'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Notification from '../../utils/Notification'
function Add_Volunteer() {

  const state = useLocation().state;

  const { handleAddVolunteer, handleUpdateVolunteer, isLoading, message } = useContext(GlobalState);

  const [register, setRegister] = useState({ profilePic: "" })
  const [isImgLoading, setImgIsLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value })
  }
  const handleFileChange = async (e) => {
    const image = e.target.files[0];
    await uploadFile(image, setRegister, setImgIsLoading);
  };

  useEffect(() => {
    if (state) {
      setRegister(state)
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
        className='add_form'>
        <div className="title">
          {
            state ? "Update Volunteer" : "Add Volunteer"
          }
        </div>
        <form onSubmit={(e) => {
          state ?
            handleUpdateVolunteer(e, state._id, register)
            :
            handleAddVolunteer(e, register)
        }}>
          <Inputs
            type='text'
            name='name'
            value={register.name}
            required={true}
            placeholder='Name'
            handleChange={handleChange}
            lable='Enter Volunteer Name'
          />
          <Inputs
            type='text'
            name='title'
            value={register.title}
            required={true}
            placeholder='Title'
            handleChange={handleChange}
            lable='Title of volunteer'
          />
          <Inputs
            type='text'
            name='fb_link'
            value={register.fb_link}
            required={true}
            placeholder='facebook Link'
            handleChange={handleChange}
            lable='Enter facebook id link'
          />
          <Inputs
            type='text'
            name='t_link'
            value={register.t_link}
            required={true}
            placeholder='twitter Link'
            handleChange={handleChange}
            lable='Enter twitter id link'
          />
          <Inputs
            type='text'
            name='l_link'
            value={register.l_link}
            required={true}
            placeholder='linkedin Link'
            handleChange={handleChange}
            lable='Enter linkedin id link'
          />
          <input onChange={handleFileChange} name='profilePic' type="file" className='form-control mt-3' />
          {
            isImgLoading ?
              <small className='text-red-600 mb-4'>Uplaoding Photo</small>
              : <small className='text-green-700 mb-4'>Uplaod Volunteer Photo</small>
          }
          <button disabled={isImgLoading} className='button button_blue my-3'>
            {
              isLoading ? <Loading size="sm" /> : state ? "Update volunteer" : "Add volunteer"
            }
          </button>
          {
            message && <Notification />
          }
        </form>
      </motion.div>
    </AdminDashboard>
  )
}

export default Add_Volunteer