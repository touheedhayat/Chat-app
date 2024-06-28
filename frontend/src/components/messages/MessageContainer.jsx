import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useEffect } from 'react';
import { AuthContext, useAuthContext } from '../../context/AuthContext';

const messageContainer = () => {

const {selectedConversation, setSelectedConversaton}= useConversation()

useEffect(()=>{
    return()=> setSelectedConversaton(null);
},[setSelectedConversaton])

    return (
    <div className=' md: min-w-[450px] flex flex-col'>
        
        {!selectedConversation? <NoChatSelected/> : (
            <>

            <div className=' bg-slate-500 px-4 py-2 mb-2'>
                <span className=' label-text'>To:</span>{" "}<span className='text-gray-900 font-bold'> {selectedConversation.fullName} </span>
            </div>
            <Messages/>
            <MessageInput/>
            </>
        

        ) }
        </div>
  )
}

export default messageContainer;


const NoChatSelected =()=>{

    const {authUser} = useAuthContext();

    return(
        <div className=' w-full h-full flex items-center justify-center'>
           
           <div className=' text-gray-200 font-semibold flex flex-col '>

            <p>`Welcom👋 {authUser.fullName}`</p>
            <p> Select a chat to start messaging </p>

            <TiMessages className='w-full size-16 ' />



           </div>

        </div>
    )
}



// Starter code snipet

// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'

// const messageContainer = () => {
//   return (
//     <div className=' md: min-w-[450px] flex flex-col'>
//         <>
//         <div className=' bg-slate-500 px-4 py-2 mb-2'>
//             <span className=' label-text'>To:</span>{" "}<span className='text-gray-900 font-bold'> Jhon Doe </span>
//         </div>
//         <Messages/>
//         <MessageInput/>
//         </>
//     </div>
//   )
// }

// export default messageContainer