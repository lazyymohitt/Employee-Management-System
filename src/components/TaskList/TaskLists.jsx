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
                    return <AcceptTask key={idx} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx}/>
                }
                if (elem.completed) {
                    return <CompleteTask key={idx}/>
                }
                if (elem.failed) {
                    return <FailedTask key={idx}/>
                }

            
      })}
      
     
 
    </div>
  );
}

export default TaskLists