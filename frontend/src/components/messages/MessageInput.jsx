import React from 'react'
import { BsSend } from "react-icons/bs";    
const MessageInput = () => {
  return (

    <form className='px-4 my-3'>

            <div className='w-full relative'>
            <input type="text"
             placeholder='Type your message here'
className=' border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white' />
            <button type='submit' className='absolute size-9 inset-y-0 end-0 flex items-center  pe-3' >            
            <BsSend />
            </button> 
            
            </div>

    </form>

  )
}

export default MessageInput





// Starter code snippet

// import React from 'react'
// import { BsSend } from "react-icons/bs";    
// const MessageInput = () => {
//   return (

//     <form className='px-4 my-3'>

//             <div className='w-full relative'>
//             <input type="text"
//              placeholder='Type your message here'
// className=' border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white' />
//             <button type='submit' className='absolute size-9 inset-y-0 end-0 flex items-center  pe-3' >            
//             <BsSend />
//             </button> 
            
//             </div>

//     </form>

//   )
// }

// export default MessageInput