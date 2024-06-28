import React, { useState } from 'react'
import "./Header.css"
import { v4 as uuidv4 } from 'uuid';

const Header = ({todos,setTodos}) => {

  const [task,setTask] = useState("")
  const addTodo =()=>{
    console.log(task);
    const newTodos = {
      id: uuidv4(),
      text: task,
      completed: false
    }
    console.log(newTodos);
    setTodos([...todos,newTodos])
    setTask("")
  }
  return (
    <div>
      <h1 className="text-center">Todo App</h1>
      <div className="input-bar-group">
        <input
          type="text"
          className="form-bar"
          placeholder="Please enter todo"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
        />
          <button className="input-add-button" disabled={!task.trim()} onClick={addTodo}>Add</button>
      </div>
    </div>
  )
}

export default Header
