import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { useState,useEffect } from 'react';
import Setinput from './Components/Setinput';
import Search from './Components/Search';
import axios from 'axios';


function App() {
  const [todo,setTodo] = useState([])
 
  const [newtodo,setNewTodo] = useState("")
  
 
  const [search,setSearch] = useState('')
  const filteredTodo = search
  ? todo.filter(ke => (ke.item.toLowerCase()).includes(search.toLowerCase()))
  : todo



  const getData =async () =>{
    
    await axios.get('http://localhost:5000/api').then(r=>{
    const d = r.data.dt
    setTodo(d)
  }).catch(err=>{
    console.log(err);
  })}

  const postData = async (k) =>{
    await axios.post('http://localhost:5000/api',{
      checked:false,
      item:k

      
    })
    setNewTodo('')
  }
  // const deleteData = async (i) =>{
  //   await axios.delete('http://localhost:5000/api',{
  //     i 
  //   }).then(r=>{
  //     console.log(r.data)
  //     localStorage.setItem('todoList',JSON.stringify(r.data.dt))
  //   })
  // }
  getData()

  useEffect(()=>{
 
  },[])
  return (
    <div className="container mx-auto w-4/5  min-h-[100vh]  bg-black  outline-1 outline-slate-600">
      <Header/>
      <Setinput
      setNewTodo={setNewTodo}
      addItem={postData}
      newtodo={newtodo}
      />
      <Search
      setSearch={setSearch}
      />
      <Body
     
     todo={filteredTodo}
      // deleteTodo={deleteTodo}
      // handleChecked={handleChecked}
      />
    </div>
  );
}

export default App;
