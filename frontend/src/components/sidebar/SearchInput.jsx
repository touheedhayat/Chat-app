import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast';
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';

const SearchInput = () => {

  const [search, setSearch] = useState("")
  const {setSelectedConversaton} = useConversation()
  const {conversations} =useGetConversation()

  const handleSubmit = (e)=>{
   
    e.preventDefault()
    if (!search) return;

    if (search.length < 3 ){
      toast.error("Search term must be least 3 characters long")
    }
     const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))
     
     if(conversation){
      setSelectedConversaton(conversation);
     setSearch("")

     }else toast.error(`No user found with name`)
     
     

  }
  return (

    <form onSubmit={handleSubmit} className='flex item-center gap-2' >
        <input
         type='text'
        placeholder='Search..'
        className='input input-bordered rounded-full'
        value={search}  
        onChange={(e)=> setSearch(e.target.value) } />
        
        <button type='submit' className='btn btn-circle bg-sky-500 text-while'><FaSearch className=' w-6 h-5 outline-none' /></button>
    </form>
    )
}

export default SearchInput







// Started code snippet
// import React from 'react'
// import { FaSearch } from "react-icons/fa";

// const SearchInput = () => {
//   return (

//     <form className='flex item-center gap-2'>
//         <input type="text" placeholder='Search..' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-sky-500 text-while'><FaSearch className=' w-6 h-5 outline-none' /></button>
//     </form>
//     )
// }

// export default SearchInput