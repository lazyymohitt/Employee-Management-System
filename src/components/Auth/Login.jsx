import React, { useState } from 'react'

const Login = () => {

  const  [email, setemail] = useState('')
  const  [password, setpassword] = useState('')
   const submithandler = (e)=>{
    e.preventDefault()
    console.log(email)
    console.log(password)
    setemail('')
      setpassword('')
    
   }

  return (
    <div className='w-screen h-screen  flex flex-col items-center justify-center'>
        <div className='border-2 p-12  border-emerald-500 rounded-xl'>
        <form
        onSubmit={(e)=>{
          submithandler(e)
        }}
         className='flex flex-col  gap-4'>
            <input
            value={email}
            onChange={(e)=>{
              setemail(e.target.value)
            }}
             required type="Email" placeholder='Enter your Email' className='border-2 px-5 py-2 rounded-full text-xs outline-none bg-transparent border-emerald-500 placeholder:text-gray-400 placeholder:text-xs' />
            <input
            value={password}  onChange={(e)=>{
setpassword(e.target.value)
            }} required type="password" placeholder='Enter your Password' className='border-2 px-5 py-2 rounded-full text-xs outline-none bg-transparent border-emerald-500 placeholder:text-gray-400' />
            <button className='w-full bg-emerald-400 rounded-full text-xs font-semibold  py-2'>Login IN</button>
            </form>
        </div>
    </div>
  )
}

export default Login