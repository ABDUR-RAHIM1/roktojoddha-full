import React, { useState } from 'react'
import { motion } from 'framer-motion'
import uploadFile from '../../../utils/UploadFile';
import { useContext } from 'react';
import { GlobalState } from '../../../../State/State';
import Loading from '../../../utils/Loading'; 
import Inputs from '../../../utils/Inputs'; 
import Notification from '../../../utils/Notification';

function Add_logo(props) {
  const {isLoading , message } = useContext(GlobalState)
  const { handleAddLogo, logo } = props;
  const [imgLoading, setImgIsLoading] = useState(false)
  const [register, setRegister] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value })
  }

  const handleFileChange = async (e) => {
    const image = e.target.files[0];
    await uploadFile(image, setRegister, setImgIsLoading);
  }; 
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: '2'
      }}
      className='add_form'
    >
      <h1 className="manageHeading">Add logo</h1>
      <form onSubmit={(e) => handleAddLogo(e, register)}>
        <Inputs
          type="number"
          name="logoWidth"
          required={true}
          value={register.logoWidth}
          placeholder="Logo Width"
          lable="set logo Width"
          handleChange={handleChange}
        />
        <Inputs
          type="number"
          name="logoHeight"
          required={true}
          value={register.logoHeight}
          placeholder="Logo height"
          lable="set logo Height"
          handleChange={handleChange}
        />
         <Inputs
          type="number"
          name="radius"
          required={true}
          value={register.radius}
          placeholder="Border radius"
          lable="Set Border radius"
          handleChange={handleChange}
        />
        <input disabled={imgLoading} onChange={handleFileChange} type="file" name='profilePic' className=' mt-4 form-control' />
        <small>
          {
            imgLoading ? <small className='text-red-500'>Image Uploding . . .</small> :
              <small className='text-white'>Upload a photo</small>
          }
        </small>
        <button className='button button_blue'>
          {
            isLoading ? <Loading size='sm' /> : "Change Now"
          }
        </button>
       {
        message && <Notification /> 
       }
      </form>

      <div className='flex justify-start h-24 bg-gray-100 items-center flex-wrap py-1 px-2  gap-3 w-full overflow-y-scroll scroll-none' >
        {
          logo && logo.map(lg => (
            <Logos element={lg} key={lg._id} />
          ))
        }
      </div>

    </motion.div>
  )
}

export default Add_logo

export function Logos(props) {
  const { profilePic } = props.element;

  return (
    <div className='w-20 relative'>
      <img className=' w-full h-20' src={profilePic} alt={profilePic} />

    </div>

  )
}