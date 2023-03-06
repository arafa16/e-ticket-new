import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LoginUser, reset} from "../../features/authSlice";

import Logo from '../../attributs/logo.png';
import { BiLowVision } from "react-icons/bi";

const ResetByToken = () => {
    const navigate = useNavigate();

    return (
        <div className='w-full bg-cyan-500 h-screen flex justify-center items-center'>
            <div className='w-1/4 bg-white min-h-[15rem] rounded-md px-8 py-10 shadow-2xl'>
                <div className='w-full flex justify-center mb-8'>
                    <img className='h-24' src={Logo} alt="" />
                </div>
                <form>
                    <div className='grid gap-8 mb-6 text-[10pt]'>
                        
                        <div>
                            <input 
                                className='outline-cyan-500 ring-1 w-full rounded-md ring-cyan-500 px-4 py-1'
                                required 
                                // value={email} 
                                // onChange={(e)=>setEmail(e.target.value)} 
                                placeholder='email' 
                                type="email" 
                            />
                        </div>
                        <div>
                            <button 
                                type='submit' 
                                className='hover:bg-cyan-400 bg-cyan-500 w-full rounded-md py-1 text-white'
                            >
                                Send Email Reset Password
                            </button>
                        </div>
                    </div>
                </form>
                <div className='flex text-[9pt] justify-center'>
                    <p className='mr-2'>back to login ?</p>
                    <p onClick={()=>navigate('/')} className="hover:text-cyan-500 cursor-pointer">click here</p>
                </div>
            </div>
        </div>
    )
}

export default ResetByToken