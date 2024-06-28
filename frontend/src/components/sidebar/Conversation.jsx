// import React from 'react'
// import Conversations from './Conversations'
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation"

const Conversation = ({conversation,lastIdx, emoji}) => {
const {selectedConversation, setSelectedConversaton} = useConversation()

  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext()
  console.log("olineusers", onlineUsers)

const isOnline = onlineUsers.includes(conversation._id)
return( 

<>

    <div className={` flex gap-2  items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" :" "}`}
   
   onClick={() => setSelectedConversaton(conversation)}>

    <div className={`avatar ${isOnline ? "online" : " "}`}>
  <div className="w-12 rounded-full">
    <img src= {conversation.profilePic} alt='User avatar'/>
  </div>
</div> 

   <div className=' flex flex-col flex-1' >
   <div className='flex gap-3 justify-between'>
   <p className=' font-bold text-gray-200'>{conversation.fullName}</p>
   <span className='text-xl'>{emoji}</span>
   </div>
   </div>
  </div>
  
   {!lastIdx && <div className=' divider my-0 py-0 h-1'/>} </>
)}

export default Conversation





// Started code Snippet

// import React from 'react'

// const Conversation = () => {
//   return <>

//     <div className=' flex gap-2 mt-3 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>

//     <div className="avatar online">
//   <div className="w-12 rounded-full">
//     <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='User avatar'/>
//   </div>
// </div> 

//    <div className=' flex flex-col flex-1' >
//    <div className='flex gap-3 justify-between'>
//    <p className=' font-bold text-gray-200'>Jhon Doe</p>
//    <span className='text-xl'>🎃</span>
//    </div>
//    </div>
//     </div>
    
//     <div className=' divider my-0 py-0 h-1'/>
//     </>
// }

// export default Conversation