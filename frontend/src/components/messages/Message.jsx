import React from 'react'

const Message = () => {
  return (

        <div className="chat chat-end">
      <div className="chat-image avatar">
       <div className="w-10 rounded-full">
         <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
     </div>
     <div className={'chat-bubble text-white bg-blue-500 '}> Hey how's it going? </div>
     <div className=' chat-footer opacity-100 text-yellow-50 text-xs flex gap-1 items-center'> 12:42</div>


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