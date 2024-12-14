import React from 'react'

function Total_user(props) {
  const { allUsers, loginUser, blog } = props;
  return (
    <div className='dash_board_items card-four bg-green-300 text-white '>
      <h1 className='text-2xl text-center my-2'>User Info</h1>
      <h3 className='dash_card '> log-in User : {loginUser && loginUser.length}</h3>
      <h3 className='dash_card '> total Register : {allUsers && allUsers.length}</h3>
      <h3 className='dash_card '> Blog : {blog && blog.length}</h3>
    </div>
  )
}

export default Total_user