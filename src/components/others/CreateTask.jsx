import React from 'react'

const CreateTask = () => {
  return (
    <div className='bg-[#1C1C1C] rounded-md mt-2'>
      <form className='flex px-4 py-2 justify-between'>
        <div className='w-1/2 '>
          <h3 className='text-sm'>Task Title </h3>
          <input className='outline-none w-5/6 bg-transparent border-[1px] text-xs rounded-sm px-2 py-1 border-gray-400' type="text" placeholder='Make a UI design'/>
          <h3 className='mt-1 text-sm'>Date</h3>
          <input className='outline-none w-5/6 bg-transparent border-[1px] text-xs rounded-sm px-2 py-1 border-gray-400' type="date" name="" id="" />
          <h3 className='mt-1 text-sm'>Assign To</h3>
          <input className='outline-none w-5/6 bg-transparent border-[1px] text-xs rounded-sm px-2 py-1 border-gray-400' type="text" placeholder='Employee Name'/>
          <h3 className='mt-1 text-sm'>Category</h3>
          <input className='outline-none w-5/6 bg-transparent border-[1px] text-xs rounded-sm px-2 py-1 border-gray-400' type="text" placeholder='design,dev,etc' />
        </div>
        <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                       className='w-full h-36 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-1 hover:bg-emerald-600 px-5 rounded text-sm mt-2 w-full'>Create Task</button>
                </div>
      </form>
    </div>
  )
}

export default CreateTask