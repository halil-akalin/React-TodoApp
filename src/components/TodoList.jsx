import React from 'react'
import "./TodoList.css"


const TodoList = ({todos,setTodos}) => {
  const deleteTodo  = (id) =>{
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const toogleCompleted = (id) => {
    const newTodos = todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed}:todo)
    setTodos(newTodos)
  }
  return (
    <div>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <h2>Todos List</h2>
        <ul className='todos-wrapper'>
          {todos.map((todo)=> (
            <li className={`todo-list ${todo.completed ?'completed':''}`} onClick={()=>toogleCompleted(todo.id)} role='button'>{todo.text} <span className={`${todo.completed ?'completed':''}`}></span> 
            <span>
              <i 
                class='bx bxs-trash' 
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTodo(todo.id);
                }}
                role='button'

              ></i>
            </span>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TodoList