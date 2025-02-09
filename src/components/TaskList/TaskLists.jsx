import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskLists = ({data}) => {
  return (
    <div id='TaskLists' className="overflow-x-auto w-full flex gap-5 h-[67%] py-6">
     
     {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask/>
                }
                if (elem.newTask) {
                    return <NewTask/>
                }
                if (elem.completed) {
                    return <CompleteTask/>
                }
                if (elem.failed) {
                    return <FailedTask/>
                }

            
      })}
      
     
 
    </div>
  );
}

export default TaskLists