import React, { useState } from 'react'

const AddTask = ({addTask}) => {
  const[text,setText]=useState('')
  const handleChange =e=> setText(e.target.value)
  const onClick =e=> text!==''? addTask({id:Date.now(),taskName:text,isDone:false})&& setText(''):alert('please enter valid task')
  return (
    <div className="my-todos">
      <h1 className="title">My toDo list</h1>
      <div className="input-group">
        <input value= {text} type="text" placeholder="Add ToDo..." onChange={handleChange}/>
        <button className="addBtn" onClick={onClick} >Add</button>
      </div>
    </div>
  )
}

export default AddTask