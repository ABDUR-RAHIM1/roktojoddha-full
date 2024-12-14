import React from 'react'

function Total_admin(props) {
  const { admin, adminBlog } = props; 
  
  return (
    <div className='dash_board_items card-one bg-cyan-500 text-white '>
      <h1 className='text-2xl text-center my-2'>Admin Info</h1>
      {
        admin && admin.map(ad => (
          <div key={ad._id}>
            <img className='w-16 h-16 mb-3 m-auto' src={ad.profilePic} alt="" />
            <p style={{fontSize :"13px"}}>Name : {ad.name}</p>
            <p style={{fontSize :"11px"}}>email : {ad.email}</p>
          </div>
        ))
      }
      <h3 className='dash_card '> Blog : {adminBlog && adminBlog.length}</h3>
    </div>
  )
}

export default Total_admin