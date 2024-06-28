import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import TodoList from "./components/TodoList.jsx"

function App() {
  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <div className="container">
      <Header setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
