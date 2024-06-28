import { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import { set } from 'mongoose';


const useSignup = () => {

  // console.log("using signup")
  const [loading, setLoading] = useState(false);
  const {authUser, setAuthUser } = useAuthContext()

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
      const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
         if (!success) return;

  setLoading(true);
  try {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
    });
    //// After sending data to the server let's get the response
const data = await res.json();

if(data.error){
  throw new Error(data.error)
}
localStorage.setItem('chat-user',JSON.stringify(data));
setAuthUser(data)

  }catch (error) {
    toast.error(error.message);
  }finally{
    setLoading(false);
  }
};

return {loading, signup};
};

export default useSignup;


function handleInputErrors({fullName, username, password, confirmPassword, gender}){

  if (!fullName || !username || !password || !confirmPassword || !gender){
    toast.error("Please fill all the fields");
     return false;
  }

     if (password !== confirmPassword){
      toast.error("password do not match");
      return false;
     }

     if (password.length < 6){
      toast.error("password must be of 6 digit");
      return false 
    }
      return true;
  }

