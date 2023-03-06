import React, {useState, useEffect} from 'react'
import env from 'react-dotenv';
import axios from 'axios';

const FormStatus3 = (props) => {
    const {name, setName, code, setCode, status, setStatus, status2, handleAction, name2} = props;

    return (
        <div>
            <form onSubmit={handleAction}>
                <div className='w-full grid grid-cols-2 gap-4 text-[9pt] mb-4'>
                    <div className='grid grid-cols-1 gap-2'>
                        <p>Name</p>
                        <input 
                            className='outline-1 outline-cyan-500 border border-cyan-500 py-1 px-2'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-2'>
                        <p>Code</p>
                        <input 
                            className='outline-1 outline-cyan-500 border border-cyan-500 py-1 px-2'
                            value={code} 
                            onChange={(e)=>setCode(e.target.value)} 
                        />
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

export default FormStatus3