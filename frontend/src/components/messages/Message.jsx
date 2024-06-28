// import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from '../../utils/extractTime';



const Message = ({message}) => {


	const { authUser } = useAuthContext();
  const {selectedConversation} = useConversation();
const formattedTime = extractTime(message.createdAt)
  const fromMe = message.senderId === authUser.id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor=  fromMe ? "bg-blue-500" : " ";
  const shakeClass = message.shouldShake? 'shake' : '';

  console.log('shakeClass', shakeClass)

  console.log('fromMe:', fromMe);

  const senderId = String(message.senderId);
  const userId = String(authUser._id);
  console.log(senderId)
  console.log(userId)

  // console.log('chatClassName:', chatClassName);
  // console.log('bubbleBgColor:', bubbleBgColor);


  return (

        <div className={`chat ${chatClassName} ` }>
      <div className="chat-image avatar">
       <div className="w-10 rounded-full">
         <img alt="Tailwind CSS chat bubble component" src={`${profilePic}`} />
      </div>
     </div>
     <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}> {message.message} </div>
     <div className=' chat-footer opacity-100 text-yellow-50 text-xs flex gap-1 items-center'>{formattedTime}</div>


    </div>

  )
}

export default Message;



// STARTER CODE <SNNIPET>

// import React from 'react'

// const Message = () => {
//   return (

//         <div className="chat chat-end">
//       <div className="chat-image avatar">
//        <div className="w-10 rounded-full">
//          <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//       </div>
//      </div>
//      <div className={'chat-bubble text-white bg-blue-500 '}> Hey how's it going? </div>
//      <div className=' chat-footer opacity-100 text-yellow-50 text-xs flex gap-1 items-center'> 12:42</div>


//     </div>

//   )
// }

// export default Message;