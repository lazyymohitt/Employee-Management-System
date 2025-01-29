import React from 'react'

const AllTask = () => {
  return (
    <div id='Tasks' className='bg-[#1c1c1c] rounded py-1 px-5 mt-4 h-[31%] overflow-auto'>
        <div className=' flex justify-between  mt-2 bg-red-500 px-4 py-1 rounded text-sm'>
            <h3>Mohit</h3>
            <h3>Make a React Project </h3>
            <h3>Pending</h3>
        </div>
        <div className=' flex justify-between mt-2 bg-yellow-500 px-4 py-1 rounded text-sm'>
            <h3>Mohit</h3>
            <h3>Make a React Project </h3>
            <h3>Pending</h3>
        </div>
        <div className=' flex justify-between mt-2 bg-blue-500 px-4 py-1 rounded text-sm'>
            <h3>Mohit</h3>
            <h3>Make a React Project </h3>
            <h3>Pending</h3>
        </div>
        <div className=' flex justify-between mt-2 bg-green-500 px-4 py-1 rounded text-sm'>
            <h3>Mohit</h3>
            <h3>Make a React Project </h3>
            <h3>Pending</h3>
        </div>
    </div>
  )
}

export default AllTask