import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Logo from '../../attributs/logo.png';
import { BiLowVision } from "react-icons/bi";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nomorHp, setNomorHp] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [idMsg, setIdMsg] = useState("");

    const navigate = useNavigate();

    const clearForm = () => {
        setName("");
        setEmail("");
        setNomorHp("");
        setPassword("");
        setConfPassword("");
    }

    const Register = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post(process.env.REACT_APP_API_URL+'/users', {
                name: name,
                email: email,
                nomorHp: nomorHp,
                password: password,
                confPassword: confPassword
            });
            const message = response.data.msg;
            setMsg(message);
            setIdMsg(1);
            clearForm();
        } catch (error) {
            if(error.response){
                const message = error.response.data.msg;
                setMsg(message);
                setIdMsg(2);
            }
        }
    }

  return (
    <div className='w-full bg-cyan-500 h-screen flex justify-center items-center'>
        <div className='w-1/4 bg-white min-h-[15rem] rounded-md px-8 py-10 shadow-2xl'>
            <div className='w-full flex justify-center mb-8'>
                <img className='h-24' src={Logo} alt="" />
            </div>
            <div className={`w-full text-white rounded-md text-center mb-4 ${idMsg === 1 ? 'bg-teal-500' : 'bg-red-500'}`}>
                {msg}
            </div>
            <form onSubmit={Register}>
                <div className='grid gap-8 mb-6 text-[10pt]'>
                    <div>
                        <input 
                            className='outline-cyan-500 ring-1 w-full rounded-md ring-cyan-500 px-4 py-1'
                            required 
                            value={name} 
                            onChange={(e)=>setName(e.target.value)} 
                            placeholder='name' 
                            type="text" 
                        />
                    </div>
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
                    <div>
                        <input 
                            className='outline-cyan-500 ring-1 w-full rounded-md ring-cyan-500 px-4 py-1'
                            required 
                            value={nomorHp} 
                            onChange={(e)=>setNomorHp(e.target.value)} 
                            placeholder='Nomor HP' 
                            type="text" 
                        />
                    </div>
                    <div className='flex'>
                        <input 
                            className='outline-cyan-500 ring-1 w-full rounded-md ring-cyan-500 px-4 py-1' 
                            placeholder='password' 
                            required 
                            type={`password`}
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex'>
                        <input 
                            className='outline-cyan-500 ring-1 w-full rounded-md ring-cyan-500 px-4 py-1' 
                            placeholder='conf password' 
                            required 
                            type={`password`}
                            value={confPassword} 
                            onChange={(e)=>setConfPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button 
                            type='submit' 
                            className='hover:bg-cyan-400 bg-cyan-500 w-full rounded-md py-1 text-white'
                        >
                            Register
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

export default Register