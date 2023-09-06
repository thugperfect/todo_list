import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { useState } from 'react';
import Setinput from './Components/Setinput';

function App() {
  const [todo,setTodo] = useState(JSON.parse(localStorage.getItem('todoList')) || [])
  const handleChecked = (key)=>{
    const addCheck = todo.map(k=>
      (k.id === key)? {...k,checked:!k.checked}:k
    )
    setTodo(addCheck)
    localStorage.setItem("todoList",JSON.stringify(addCheck))
   
  }
  const deleteTodo = (key) =>{
    const changeList = todo.filter(k=> k.id!==key)
    setTodo(changeList)
    localStorage.setItem("todoList",JSON.stringify(changeList))
    
  }
  const [newtodo,setNewTodo] = useState("")
  
  const addItem = (key)=>{
    const id = todo.length+1
    const newItem = {id:id,checked:false,item:key}
    const listItem = [...todo,newItem]
    localStorage.setItem("todoList",JSON.stringify(listItem))
    setTodo(listItem)    
  }

  return (
    <div className="container mx-auto w-4/5  min-h-[100vh]  bg-black  outline-1 outline-slate-600">
      <Header/>
      <Setinput
      setNewTodo={setNewTodo}
      addItem={addItem}
      newtodo={newtodo}
      />
      <Body
      todo={todo}
      deleteTodo={deleteTodo}
      handleChecked={handleChecked}
      />
    </div>
  );
}

export default App;
