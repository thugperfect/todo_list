import React from 'react'
import { BsTrash3Fill } from 'react-icons/bs'
const Body = ({todo,deleteTodo,handleChecked}) => {
  const dat = todo.map(e=>{
    console.log(e.createdAt);
  })
 
  return (
    <div  className='container mx-auto w-4/5 h-full'>
        <div>{
          todo?.length>0?
            todo.map(k=>(
                <div key={k.createdAt} className='flex w-full text-[40px] items-center gap-4 outline outline-1 px-5 outline-gray-700 mt-5' >
                   <input className='w-[30px] h-[30px]' type="checkbox" checked={k.checked?true:false} onChange={()=>handleChecked(k.id)} name="" id="" />
                   <div className='w-full'>{k.item}</div>
                  <div onClick={()=>deleteTodo(k.id)}><BsTrash3Fill /></div> 
                </div>
            )):<div className='flex justify-center items-center h-[200px]'>Nothing Found</div>
            }</div>
    </div>
  )
}

export default Body
