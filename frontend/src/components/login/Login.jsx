import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LoginUser, reset} from "../../features/authSlice";

import Logo from '../../attributs/logo.png';
import { BiLowVision } from "react-icons/bi";

const Login = () => {
    const [type, setType] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, isError, isSuccess, isLoading, message} = useSelector(
        (state) => state.auth
    );

    useEffect(()=>{
        if(user || isSuccess){
            navigate("/ticket")
        }
        dispatch(reset());
    },[user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({email, password}));
    }

  return (
    <div className='w-full bg-cyan-500 h-screen flex justify-center items-center'>
        <div className='w-1/4 bg-white min-h-[15rem] rounded-md px-8 py-10 shadow-2xl'>
            <div className='w-full flex justify-center mb-8'>
                <img className='h-24' src={Logo} alt="" />
            </div>
            <form onSubmit={Auth}>
                <div className='grid gap-8 mb-6 text-[10pt]'>
                    {isError ? <p className='text-center bg-red-500 text-white rounded-md'>{message}</p> : ''}
                    <div>
                        <input 
                            className='outline-cyan-500 ring-1 w-full rounded-md ring-cyan-500 px-4 py-1'
                            required 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)} 
                            placeholder='email' 
                            type="email" 
                        />
                    </div>
                    <div className='flex'>
                        <input 
                            className='outline-cyan-500 ring-1 w-[88%] rounded-md ring-cyan-500 px-4 py-1' 
                            placeholder='password' 
                            required 
                            type={`${!type ? 'password' : 'text' }`}
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <div className='mx-2 hover:bg-cyan-500 w-[10%] p-2 rounded-md hover:text-white cursor-pointer' onClick={()=>setType(!type)}><BiLowVision /></div>
                    </div>
                    <div>
                        <button 
                            type='submit' 
                            className='hover:bg-cyan-400 bg-cyan-500 w-full rounded-md py-1 text-white'
                        >
                            {isLoading ? 'Loading...' : 'Login'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login