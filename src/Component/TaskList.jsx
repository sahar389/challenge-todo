import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({todos,deleteTask,completeTask}) => {
    
  return (
    <ul className="todo-list">
    {todos.map(todo=><TaskItem todo={todo} key={todo.id} deleteTask={deleteTask} completeTask={completeTask}/>)}
    
    
    </ul>
  
  )
}

export default TaskList