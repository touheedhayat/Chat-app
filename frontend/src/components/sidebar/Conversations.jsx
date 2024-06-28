// import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
import { getRandomEmoji } from '../../utils/emojis'

const Conversations = () => {
  const {loading, conversations} = useGetConversation();
  // console.log("Conversation", conversations);

  return (
    
    <div className=' py-2 flex flex-col overflow-y-auto'>

      { conversations.map((conversation, idx)=>( //we are using ( round bracket instead of curly because we don't need to write return here) 

       <Conversation 

       key={conversation._id}
       conversation={conversation}
       emoji ={getRandomEmoji()}
       lastIdx= {idx === conversations.length-1}
       />

      ))}
       {loading ? <span className='loading loading-spinner mx-auto'></span> : null}


        </div>


  )
}

export default Conversations

// console.log("Convo", Conversation);
       

// Starting code snipet

// import React from 'react'
// import Conversation from './Conversation'
// const Conversations = () => {
//   return (

    
//     <div className=' py-2 flex flex-col overflow-y-auto'>

//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />


//         </div>
//   )
// }

// export default Conversations