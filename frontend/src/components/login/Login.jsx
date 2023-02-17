import React from 'react'
import Logo from '../../attributs/logo.png';
import { BiLowVision } from "react-icons/bi";

const Login = () => {
  return (
    <div className='w-full bg-cyan-500 h-screen flex justify-center items-center'>
        <div className='w-1/4 bg-white min-h-[15rem] rounded-md px-8 py-10 shadow-2xl'>
            <div className='w-full flex justify-center mb-8'>
                <img className='h-24' src={Logo} alt="" />
            </div>
            <div className='grid gap-8 mb-6 text-[10pt]'>
                <div>
                    <input className='outline-cyan-500 ring-1 w-full rounded-md ring-cyan-500 px-4 py-1' placeholder='email' type="email" />
                </div>
                <div className='flex'>
                    <input className='outline-cyan-500 ring-1 w-[88%] rounded-md ring-cyan-500 px-4 py-1' placeholder='password' type="password" />
                    <button className='mx-2 hover:bg-cyan-500 w-[10%] p-2 rounded-md hover:text-white'><BiLowVision /></button>
                </div>
                <div>
                    <button className='hover:bg-cyan-400 bg-cyan-500 w-full rounded-md py-1 text-white'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login