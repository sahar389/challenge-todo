import React from 'react'

const TaskItem = ({todo,deleteTask,completeTask}) => {
const {id,taskName,isDone}= todo
const onDelete =e=>deleteTask(id)
const onCompleted =e=>completeTask(id)
  return (
    
    <li><span className={isDone ? "completed":"" } onClick={onCompleted} >{taskName}</span><i className="fa-solid fa-trash-can" onClick={onDelete}></i></li>
    
  )
}

export default TaskItem