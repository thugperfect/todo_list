import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { useState,useEffect } from 'react';
import Setinput from './Components/Setinput';
import Search from './Components/Search';

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
    if(!key) return
    const id = todo.length+1
    const newItem = {id:id,checked:false,item:key}
    const listItem = [...todo,newItem]
    
    localStorage.setItem("todoList",JSON.stringify(listItem))
    setTodo(listItem) 
    setNewTodo("")   
  }
  const [search,setSearch] = useState('')
  const filteredTodo = search
  ? todo.filter(ke => (ke.item.toLowerCase()).includes(search.toLowerCase()))
  : todo
  return (
    <div className="container mx-auto w-4/5  min-h-[100vh]  bg-black  outline-1 outline-slate-600">
      <Header/>
      <Setinput
      setNewTodo={setNewTodo}
      addItem={addItem}
      newtodo={newtodo}
      />
      <Search
      setSearch={setSearch}
      />
      <Body
     
      todo={filteredTodo?.length>0?filteredTodo:"no toDo's marked"}
      deleteTodo={deleteTodo}
      handleChecked={handleChecked}
      />
    </div>
  );
}

export default App;
