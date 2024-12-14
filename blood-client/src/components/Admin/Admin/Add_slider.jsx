import React from 'react'
import { useState } from 'react';
import uploadFile from '../../utils/UploadFile';
import Loading from '../../utils/Loading';
import Images from './ManageContent/Images';
import { useContext } from 'react';
import { GlobalState } from '../../../State/State';

function Add_slider(props) {
  const {handleSliderDelete, isLoading} = useContext(GlobalState)
  const { handleAddSlider, sliders } = props;
  const [register, setRegister] = useState({});
  const [imgLoading, setImgIsLoading] = useState(false);

  const handleFileChange = async (e) => {
    const image = e.target.files[0];
    await uploadFile(image, setRegister, setImgIsLoading);
  }; 
  
  return (
    <div className='add_form' >
      <form onSubmit={(e) => {
        handleAddSlider(e, register)
      }}>
        <input required onChange={handleFileChange} type="file" name='profilePic' className='form-control' />
        {
          imgLoading ? <small className=' text-red-600'>Image Uploading . . .</small> : <small className=' text-white'>Add Slider Image</small>
        }
        <button disabled={imgLoading} className='button  button_blue my-3'>
          {
            isLoading ? <Loading size='sm' /> : "Add Slider"
          }
        </button>
      </form>

      <div className='flex justify-start h-48 bg-gray-100 items-start flex-wrap px-2  gap-3 w-full overflow-y-scroll scroll-none' >
        {
          sliders && sliders.map(sl => (
            <Images handleDelete={handleSliderDelete} element={sl} key={sl._id} />
          ))
        }
      </div>

    </div>
  )
}

export default Add_slider

 