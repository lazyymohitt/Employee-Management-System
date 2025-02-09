import React from 'react'

const AcceptTask = () => {
  return (
    <div className=" rounded-lg py-4 px-2 flex-shrink-0 bg-emerald-400 h-full w-[26vw]">
    <div className='flex items-center justify-between'>
      <h2 className='bg-red-500 px-2 py-1 text-xs rounded-sm'>High</h2>
      <h3 className='text-xs'>11 Jan 2025</h3>
    </div>
    <h1 className='font-bold  tracking-tight mt-4'>Make Some Good For Meh</h1>
    <p className='text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus quasi voluptatum!</p>
    <div className='flex justify-between mt-6 '>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
  </div>
  )
}

export default AcceptTask