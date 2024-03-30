import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (

    <form className='flex item-center gap-2'>
        <input type="text" placeholder='Search..' className='input input-bordered rounded-full' />
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