import React from 'react'

function Total_blogs(props) {
  const { allBLogs, adminBlog, userBlog } = props;
  return (
    <div className='dash_board_items card-two bg-blue-600 text-white '>
      <h1 className='text-2xl text-center my-2'>Blogs Info</h1>
      <progress className='rounded-md' value={allBLogs && allBLogs.length} max="100"> {allBLogs && allBLogs.length} </progress>
      <h3 className='dash_card '>Total Blogs : {allBLogs && allBLogs.length}</h3>
      <progress className='rounded-md bg-red-300' value={adminBlog && adminBlog.length} max="100"> {adminBlog && adminBlog.length} </progress>
      <h3 className='dash_card '> Admin : {adminBlog && adminBlog.length}</h3>
      <progress className='rounded-md bg-red-300' value={userBlog && userBlog.length} max="100"> {userBlog && userBlog.length} </progress>
      <h3 className='dash_card '> User : {userBlog && userBlog.length}</h3>

    </div>
  )
}

export default Total_blogs