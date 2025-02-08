import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import NewTasks from '../TaskList/TaskLists'
import TaskLists from '../TaskList/TaskLists'

const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className='h-screen p-8 bg-[#1C1C1C]'>
        <Header/>
        <TaskListNumbers/>
        <TaskLists/>
    </div>
  )
}

export default EmployeeDashboard