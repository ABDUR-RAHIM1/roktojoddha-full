import React from 'react'
import AdminDashboard from '../Dashboard/AdminDashboard'
import { useEffect } from 'react'
import { useContext } from 'react'
import { GlobalState } from '../../../State/State'
import Heading from '../../utils/Heading'  
import VolaanteersCard from "../../Home/VolaanteersCard"
import Notification from '../../utils/Notification'

function Manage_volunteer() {
  const {handleGetOneVolunteer, volunteer, message , isDelete} = useContext(GlobalState);

  useEffect(()=>{
    handleGetOneVolunteer()
  } ,[isDelete]); 
  
  return (
    <AdminDashboard> 
         <Heading text="Manage volunteers" />
         {
                message && <Notification/>
            }
         <div className='flex-b flex-wrap mt-5'>
            
            {
              volunteer && volunteer.map(vt => (
                 <VolaanteersCard key={vt._id} vt={vt} />
                
              ))
            }
               
         </div>
    </AdminDashboard>
  )
}

 

export default Manage_volunteer