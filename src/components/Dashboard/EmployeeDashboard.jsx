import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'

const EmployeeDashboard = () => {
  return (
    <div className='h-screen p-8 bg-[#1C1C1C]'>
        <Header/>
        <TaskListNumbers/>
    </div>
  )
}

export default EmployeeDashboard