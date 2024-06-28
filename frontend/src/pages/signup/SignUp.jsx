import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox.jsx'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

  const [inputs , setInputs] = useState({

    fullName: " ",
    username: " ",
    password: " ",
    confirmPassword: " ",
    gender: " "

  });

  const {loading, signup} = useSignup() 

  const handleCheckboxChange = (gender) =>{

    setInputs({...inputs, gender})

  }

  const handleSubmit = async (e) =>{

    e.preventDefault();
   await signup(inputs);
  //  console.log(inputs) 
  }




  return (
    <div className=' flex flex-col items-center justify-center min-w-96 m-auto'>
      <div className=' w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>  

      <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up <span className='text-blue-500'> ChatApp </span></h1>

      <form onSubmit= {handleSubmit}>
        <div>

            <label className='label p-2 mt-4'>
                <span className='text-base label-text text-white'> Full Name </span>
            </label>
            
            <input type="text" placeholder= 'Touheed Hayat'  className=' w-full input input-bordered h-10 input: bg-gray-900 text-white' 
            value={inputs.fullName}  onChange={(e)=> setInputs({...inputs, fullName: e.target.value}) }
            />
        </div>

        <div>

            <label htmlFor="" className='label p-2 '> <span className=' text-base label-text text-white'> Username </span></label>

            <input type="text" placeholder='for example: touheedhayat' className=' w-full input input-bordered input: bg-gray-900 text-white h-10' 
            value={inputs.username}  onChange={(e)=> setInputs({...inputs, username: e.target.value}) }
            />

        </div>

        <div>
            <label className='label p-2'> <span className='text-base label-text text-white'>Password</span> </label>
            <input type= "password" placeholder = 'Password' className =' w-full input input-bordered input: bg-gray-900 text-white h-10'
            value={inputs.password}  onChange={(e)=> setInputs({...inputs, password: e.target.value}) }
            />
        </div>

        <div>

            <label htmlFor="" className='label p-2'> <span className='text-base label-text text-white'> Confirm Password</span></label>

            <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10 input: bg-gray-900 text-white '
            value={inputs.confirmPassword}  onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value}) }
            />       
        </div>

        <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender} /> 

        <div>
        <Link to ="/login" className='text-sm hover:underline text-white hover:text-blue-400 mt-5 inline-block'>already have an account?</Link>
        </div>

        <button className='btn btn-block btn-sm mt-4 border border-slate-700 ' disabled= {loading}>
          
          {loading ? <span className=' loading loading-spinner'></span> : "Sign Up" }</button>


      </form>


      </div>
    </div>
  )
}

export default SignUp




// Starter Codoe 

// import React from 'react'
// import GenderCheckBox from './GenderCheckBox.jsx'

// const SignUp = () => {
//   return (
//     <div className=' flex flex-col items-center justify-center min-w-96 m-auto'>
//       <div className=' w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>  

//       <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up <span className='text-blue-500'> ChatApp </span></h1>

//       <form action="">
//         <div>

//             <label className='label p-2 mt-4'>
//                 <span className='text-base label-text text-white'> Full Name </span>
//             </label>
            
//             <input type="text" placeholder= 'Touheed Hayat'  className=' w-full input input-bordered h-10 input: bg-gray-900 text-white' />
//         </div>

//         <div>

//             <label htmlFor="" className='label p-2 '> <span className=' text-base label-text text-white'> Username </span></label>

//             <input type="text" placeholder='for example: touheedhayat' className=' w-full input input-bordered input: bg-gray-900 text-white h-10' />

//         </div>

//         <div>
//             <label className='label p-2'> <span className='text-base label-text text-white'>Password</span> </label>
//             <input type="text" placeholder = 'Password' className =' w-full input input-bordered input: bg-gray-900 text-white h-10' />
//         </div>

//         <div>

//             <label htmlFor="" className='label p-2'> <span className='text-base label-text text-white'> Confirm Password</span></label>

//             <input type="text" placeholder='Confirm Password' className='w-full input input-bordered h-10 input: bg-gray-900 text-white ' />       
//         </div>

//         <GenderCheckBox /> 

//         <div>
//         <a href="" className='text-sm hover:underline text-white hover:text-blue-400 mt-5 inline-block'>already have an account?</a>
//         </div>

//         <button className='btn btn-block btn-sm mt-4 border border-slate-700 '> Sign Up</button>


//       </form>


//       </div>
//     </div>
//   )
// }

// export default SignUp


