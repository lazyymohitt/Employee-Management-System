import React from 'react'

const Login = () => {
  return (
    <div className='w-screen h-screen  flex flex-col items-center justify-center'>
        <div className='border-2 p-12  border-emerald-500 rounded-xl'>
        <form className='flex flex-col  gap-4'>
            <input required type="Email" placeholder='Enter your Email' className='border-2 px-5 py-2 rounded-full text-xs outline-none bg-transparent border-emerald-500 placeholder:text-gray-400' />
            <input required type="password" placeholder='Enter your password' className='border-2 px-5 py-2 rounded-full text-xs outline-none bg-transparent border-emerald-500 placeholder:text-gray-400' />
            <button className='w-full bg-emerald-400 rounded-full text-xs font-semibold  py-2'>Login In</button>
            </form>
        </div>

    </div>
  )
}

export default Login