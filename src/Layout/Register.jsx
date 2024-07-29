import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Register() {

  const[isVisiblePwd, setIsVisiblePwd]=useState(false)

  const togglePwdVisibility=()=>{
    setIsVisiblePwd(true)
  }



  return (
    <div className='myForm'>
      <form>
        <h1>Registration Form with React</h1>
      <input type="text" name="" id="" placeholder='Enter your FullName' />
      <input type="text" name="" id="" placeholder='Enter your Username' />
      <input type="email" name="" id="" placeholder='Enter your Email' />
     <div className="ic">
     <input type="password" name="" id="" placeholder='Enter your Password' />
    {isVisiblePwd ?  <FaEye className='icon'/>: <FaEyeSlash className='icon'/>}
     </div>
     <div className="ic">
      <input type="password" name="" id="" placeholder='Confirm Your Password' />
      {isVisiblePwd ?  <FaEye className='icon' onClick={togglePwdVisibility}/>: <FaEyeSlash className='icon' onClick={togglePwdVisibility}/>}
     </div>
      <button>Register</button>
      </form>
      </div>
  )
}

export default Register