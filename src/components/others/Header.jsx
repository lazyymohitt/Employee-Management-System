import React from 'react'

const Header = ({data}) => {
  return (
    <div className=' flex items-center justify-between '>
        <h1 className='text-xl font-medium'>Hello <br /> <span className='text-2xl font-semibold'> {data.firstName}👋 </span> </h1>
        <button className='bg-red-600 px-2 py-1 rounded-sm text-xs'>Log Out</button>
    </div>
  )
}

export default Header