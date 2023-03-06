import axios from 'axios';
import React, {useState, useEffect} from 'react'
import env from 'react-dotenv';

const FormUser = (props) => {
    const {getUsers, statuses} = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nomorHp, setNomorHp] = useState("");
    const [password, setPassword] = useState("");
    const [statusId, setStatusId] = useState("");
    const [msg, setMsg] = useState("");

    const saveUsers = async(e) => {
        e.preventDefault();
        try {
            const action = await axios.post(process.env.REACT_APP_API_URL+'/usersByAdmin',{
                                name:name,
                                email:email,
                                nomorHp:nomorHp,
                                password:password,
                                statusId:statusId
                            });
            getUsers();
            setName("");
            setEmail("");
            setNomorHp("");
            setPassword("");
            setStatusId("");
            setMsg("success");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className='bg-white'>
            <form onSubmit={saveUsers} className='px-8 py-8 text-[9pt]'>
                <div className='w-full'>
                    <div className='mb-6 w-full flex justify-end'>
                        <div className='bg-cyan-500 px-2 rounded-sm text-white'>{msg}</div>
                    </div>
                    <div className='grid grid-cols-2 gap-6 mb-10'>
                        <div className='w-full'>
                            <div className='mb-1'>Name</div>
                            <input 
                                type="text" 
                                className='outline-cyan-500 ring-1 ring-cyan-500 px-4 w-full py-1'
                                onChange={(e)=>setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className='w-full'>
                            <div className='mb-1'>Email</div>
                            <input 
                                type="email" 
                                className='outline-cyan-500 ring-1 ring-cyan-500 px-4 w-full py-1'
                                onChange={(e)=>setEmail(e.target.value)}
                                value={email} 
                            />
                        </div>
                        <div className='w-full'>
                            <div className='mb-1'>Nomor Hp</div>
                            <input 
                                type="text" 
                                className='outline-cyan-500 ring-1 ring-cyan-500 px-4 w-full py-1'
                                onChange={(e)=>setNomorHp(e.target.value)}
                                value={nomorHp}  
                            />
                        </div>
                        <div className='w-full'>
                            <div className='mb-1'>Password</div>
                            <input 
                                type="password" 
                                className='outline-cyan-500 ring-1 ring-cyan-500 px-4 w-full py-1'
                                onChange={(e)=>setPassword(e.target.value)}
                                value={password}  
                            />
                        </div>
                        <div className='w-full'>
                            <div className='mb-1'>Status</div>
                            <select
                                className='outline-cyan-500 ring-1 ring-cyan-500 px-4 w-full py-1'
                                onChange={(e)=>setStatusId(e.target.value)}
                                value={statusId}  
                            >
                                <option value=""></option>
                                {statuses.map((status,index)=>(
                                    <option key={index} value={status.uuid}>{status.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='w-full mb-4'>
                        <button type='submit' className='w-full text-center bg-cyan-500 hover:bg-cyan-400 text-white'>Create User</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormUser