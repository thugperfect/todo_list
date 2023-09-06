import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { useState } from 'react';

function App() {
  const [todo,setTodo] = useState([
    {
      id:1,
      checked:true,
      item:"Complete ToDO APP"
    },{
      id:2,
      checked:false,
      item:"Optimise Movie_Fetch"
    },{
      id:3,
      checked:false,
      item:"Optimise Java_DSA"
    },{
      id:4,
      checked:false,
      item:"Complete React YT video"
    }
  ])
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

  return (
    <div className="container mx-auto w-4/5  min-h-[100vh]  bg-black  outline-1 outline-slate-600">
      <Header/>
      <Body
      todo={todo}
      deleteTodo={deleteTodo}
      handleChecked={handleChecked}
      />
    </div>
  );
}

export default App;
