import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between gap-5 mt-5'>
        <div className='bg-red-500 px-10 py-3 w-[45%] rounded-xl'>
            <h2>{data.taskCounts.newTask}</h2>
            <h3>New Task</h3>
        </div><div className='bg-blue-500 px-10 py-3 w-[45%] rounded-xl'>
            <h2>{data.taskCounts.completed}</h2>
            <h3>Completed Task</h3>
        </div>
        <div className='bg-green-500 px-10 py-3 w-[45%] rounded-xl'>
            <h2>{data.taskCounts.active}</h2>
            <h3>Accepted Task</h3>
        </div>
        <div className='bg-red-500 px-10 py-3 w-[45%] rounded-xl'>
            <h2>{data.taskCounts.active}</h2>
            <h3>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers