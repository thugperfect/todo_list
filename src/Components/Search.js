import React from 'react'

const Search = ({setSearch}) => {
  return (
    <div className='flex justify-center items-center h-[60px]'>
        <input onChange={e=>setSearch(e.target.value)} className='outline-none text-black h-[30px] px-5'  type='search' placeholder="find ToDO's" />  
    </div>
  )
}

export default Search
