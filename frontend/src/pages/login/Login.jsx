import React from 'react'

const Login = () => {
  return (
<div className ="flex flex-col items-center justify-center min-w-96 m-auto">
<div className= "w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

    <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
    <span className='text-blue-500'> ChatApp</span>
    </h1>
    <form  action="">
        <div >
            
        <label className='label p-2 mt-4'> <span className='text-base label-text text-white'>Username</span> </label>
            <input type='text' placeholder='Enter username' className= 'w-full input input-bordered input: bg-gray-900 text-white  h-10 ' />

            
            <div>
            <label className='label p-2'> <span className='text-base label-text text-white'>Password</span> </label>
            <input type="text" placeholder = ' Enter your Password' className =' w-full input input-bordered input: bg-gray-900 text-white h-10' />
            </div>       
        

            <a href="#" className=' text-sm hover:underline text-white hover:text-blue-400 mt-5 inline-block'> {"Don't"} have an aacount?</a>


            <button className="btn btn-block btn-sm mt-2 ">Login</button>

        </div>
    </form>
</div>
    </div>
  )
}

export default Login











// Starter code for jsx file    

// import React from 'react'

// const Login = () => {
//   return (
// <div className ="flex flex-col items-center justify-center min-w-96 m-auto">
// <div className= "w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

//     <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
//     <span className='text-blue-500'> ChatApp</span>
//     </h1>
//     <form  action="">
//         <div >
//             <label className='label p-2'>
//                 <span className='text-base text-gray-100 mt-4 label-text'>Username</span>
//             </label>
//             <input type='text' placeholder='Enter username' className= 'w-full input input-bordered h-10 ' />

//             <label className='label p-2'>
//                 <span className='text-base mt-1 text-gray-100 label-text'>Password</span>
//             </label>
//             <input type='text' placeholder='Enter your password' className= 'w-full input input-bordered h-10 ' />


//             <a href="#" className=' text-sm hover:underline text-gray-100 hover:text-blue-400 mt-5 inline-block'> {"Don't"} have an aacount?</a>


//             <button className="btn btn-block btn-sm mt-2 ">Login</button>

//         </div>
//     </form>
// </div>
//     </div>
//   )
// }

// export default Login