import React from 'react'
import { Link } from 'react-router-dom';

function Total_donars(props) {
  const { allDonars } = props;

  return (
    <div className='dash_board_items card-three bg-orange-300 text-slate-900 '>
      <h1 className='text-2xl text-center my-2'>Donar Info</h1>
      <h3 className='dash_card '> total Register : {allDonars && allDonars.length}</h3>
    </div>
  )
}

export default Total_donars