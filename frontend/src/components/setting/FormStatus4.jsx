import React, {useState, useEffect} from 'react'
import env from 'react-dotenv';
import axios from 'axios';

const FormStatus4 = (props) => {
    const {name, setName, status, setStatus, status2, users, active, active2, handleAction, submitName, handleUsers, name2} = props;

    return (
        <div>
            <form onSubmit={handleAction}>
                <div className='w-full grid grid-cols-2 gap-4 text-[9pt] mb-4'>
                    <div className='grid grid-cols-1 gap-2'>
                        <p>Name</p>
                        <input 
                            type="text" 
                            className='outline-1 outline-cyan-500 border border-cyan-500 py-1 px-2'
                            onChange={(e)=>handleUsers(e.target.value)}
                            value={name}  
                        />
                        <div className={`absolute mt-16 w-[12rem] bg-white shadow-xl shadow-cyan-100 ${active2 ? '' : 'hidden' }`}>
                            {users.map((user, index)=>(
                                <div className='w-full px-4 py-1 hover:bg-cyan-500 hover:text-white cursor-pointer' 
                                onClick={()=>submitName(user.name, user.uuid)}
                                >{user.name}</div>
                            ))}
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-2'>
                        <p>Status</p>
                        <select
                            className='outline-1 outline-cyan-500 border border-cyan-500 py-1 px-2'
                            value={status} 
                            onChange={(e)=>setStatus(e.target.value)} 
                        >
                            <option></option>
                            {status2.map((status,index)=>(
                                <option key={index} value={status.uuid}>{status.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <button type='submit' className='text-[9pt] w-full bg-cyan-500 hover:bg-cyan-400 text-white'>{name2}</button>
                </div>
            </form>
        </div>
    )
}

export default FormStatus4