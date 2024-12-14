import React from 'react'
import { Link } from 'react-router-dom';

function Total_volunteers(props) {
  const { volunteer } = props;
  return (
    <Link to="/admin-manage-volunteer" className='dash_board_items card-five bg-green-300 text-white '>
      <h1 className='text-2xl text-center my-2'>Volnteers Info</h1>
      <h3 className='dash_card '> Volunteers : {volunteer && volunteer.length}</h3>
    </Link>
  )
}

export default Total_volunteers