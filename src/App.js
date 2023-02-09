import { useState } from "react";
import AddTask from "./Component/AddTask";

import TaskList from "./Component/TaskList";


function App() {
  
  const [todos,setTodos] =useState([
    {id:1,
    taskName:"Tache 1",
    isDone:true},
    {id:2,
      taskName:"Tache 2",
      isDone:false}
    
  ])
  const addTask =task=> {
    setTodos(prev=>[...prev,task])
    return true
  }
  const deleteTask =id=> setTodos(todos.filter(todo=>todo.id !== id))
  const completeTask=id =>setTodos(todos.map(todo=>todo.id===id? {...todo,isDone:!todo.isDone}:todo))
  return (
    <>
    <AddTask addTask={addTask}/>
    <TaskList todos={todos} deleteTask={deleteTask} completeTask={completeTask}/>
    
    </>
    
  );
}

export default App;
