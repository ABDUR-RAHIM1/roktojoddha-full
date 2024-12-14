import React from 'react'
import { MdDelete } from "react-icons/md"; 
function Images(props) {
    const { _id , profilePic } = props.element;
    const {handleDelete} = props 
   
    return (
      <div className='w-16 relative'>
        <img  className=' w-full h-20' src={profilePic} alt={profilePic} />  
        <MdDelete onClick={()=>handleDelete(_id)}  className="cursor-pointer absolute top-0 left-0 bg-fuchsia-400 text-black text-2xl"/> 
      </div>
  
    )
}

export default Images