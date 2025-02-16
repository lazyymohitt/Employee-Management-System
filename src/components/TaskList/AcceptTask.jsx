import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data)
  return (
    <div className=" rounded-lg py-4 px-2 flex-shrink-0 bg-emerald-400 h-full w-[26vw]">
    <div className='flex items-center justify-between'>
      <h2 className='bg-red-500 px-2 py-1 text-xs rounded-sm'>{data.category}</h2>
      <h3 className='text-xs'>{data.taskDate}</h3>
    </div>
    <h1 className='font-bold  tracking-tight mt-4'>{data.taskTitle}</h1>
    <p className='text-xs mt-2'>{data.taskDescription}</p>
    <div className='flex justify-between mt-6 '>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
  </div>
  )
}

export default AcceptTask