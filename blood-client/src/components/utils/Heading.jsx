import React from 'react'

function Heading({ text }) {
  return (
    <span className='text-4xl md:text-5xl my-20 font-semibold italic text-center  bg-red-400'>
      <h2>{text}</h2>
    </span>
  )
}

export default Heading