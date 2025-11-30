import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-15 w-full px-20 py-10 uppercase shadow-2xs'>
      <h4 className='py-2 px-6 rounded-full bg-black text-white'>Target Audience</h4>
      <button className='py-2 px-6 rounded-full uppercase bg-gray-500 tracking-widest text-white text-sm cursor-pointer'>Web Development Plateform</button>
    </div>
  )
}

export default Navbar
