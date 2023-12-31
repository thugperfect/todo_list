import React from 'react'
import { useRef } from 'react'
const Setinput = ({setNewTodo,addItem,newtodo}) => {
    const handleSubmit = (e)=>{
        e.preventDefault()
        inputRef.current.focus()
    }
    const inputRef = useRef()
  return (
    <form className='w-full flex justify-center mt-3 ' onSubmit={(e)=>handleSubmit(e)}>
        <div className='w-4/5 flex items-center'>
        <input ref={inputRef} type="text" value={newtodo} onChange={(e)=>setNewTodo(e.target.value)} className='w-full text-gray-600 outline-none px-5 h-[40px] text-xl' placeholder='Add TODO' />
        <button onClick={()=>addItem(newtodo)} className='h-[40px] w-[80px] bg-red-500 hover:bg-green-700'>ADD</button>
        </div>
    </form>
  )
}

export default Setinput
