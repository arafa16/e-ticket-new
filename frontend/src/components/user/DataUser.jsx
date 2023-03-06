import React, {useState, useEffect} from 'react'
import axios from 'axios';

const DataUser = (props) => {
    const {
        selectStatus,
        id
    } = props;

    //get user
    const [users, setUsers] = useState([]);

    //get status
    const [statuses, setStatuses] = useState([]);

    //set active
    const [active, setActive] = useState(false);

    //update user
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nomorHp, setNomorHp] = useState("");
    const [status, setStatus] = useState("");
    const [msg, setMsg] = useState("");

    
    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = async() => {
        const response = await axios.get(process.env.REACT_APP_API_URL+'/users/'+id);
        setUsers(response.data);
    }

    //update user by id

    const updateUser = async(e) => {
        e.preventDefault();
        try {
            await axios.put(process.env.REACT_APP_API_URL+"/users/"+id,{
                name:name,
                email:email,
                nomorHp:nomorHp,
                statusId:status
            });
            getUsers();
            setActive(false);
        } catch (error) {
            if(error){
                setMsg(error.response.data.msg)
            }
        }
    }

    //active form
    const clickActive = () => {
        setActive(!active);
        setName(users.name ? users.name : '');
        setEmail(users.email ? users.email : '');
        setNomorHp(users.nomorHp ? users.nomorHp : '');
        setStatus(users.status && users.status.uuid);
    }

    //get status
    useEffect(()=>{
        getStatus();
    },[])
    
    const getStatus = async() => {
        const response = await axios.get(process.env.REACT_APP_API_URL+'/status');
        setStatuses(response.data);
    }

    
    return (
        <div>
            <div className='bg-white min-h-fit px-4 pt-4 pb-8 text-[9pt]'>
                <div className='mb-6 flex justify-between'>
                    <p className='bg-teal-500 text-white px-2 rounded-md'>Data Diri</p>
                    <button className='bg-cyan-500 px-2 rounded-md text-[9pt] text-white' onClick={()=>clickActive()}>edit</button>
                </div>
                <div className={`grid grid-cols-1 gap-5 px-2 ${!active ? '' : 'hidden'}`}>
                    <div className='w-full flex'>
                        <div className='w-1/3'>Nama</div>
                        <div className='w-2/3'>: {users.name}</div>
                    </div>
                    <div className='w-full flex'>
                        <div className='w-1/3'>Email</div>
                        <div className='w-2/3'>: {users.email}</div>
                    </div>
                    <div className='w-full flex'>
                        <div className='w-1/3'>No HP/Telp</div>
                        <div className='w-2/3'>: {users.nomorHp}</div>
                    </div>
                    <div className='w-full flex'>
                        <div className='w-1/3'>Status</div>
                        <div className='w-2/3'>: {users.status && users.status.name}</div>
                    </div>
                </div>
                
                <div className={` ${!active ? 'hidden' : ''}`}>
                    <form className='grid grid-cols-1 gap-5' onSubmit={updateUser}>
                        <div className='w-full flex'>
                            <div className='w-1/3'>Nama</div>
                            <div className='w-2/3'>
                                :   <input
                                        className='w-[95%] outline-1 outline-cyan-500 px-2 py-1 border border-cyan-500 rounded-md' 
                                        value={name}
                                        onChange={(e)=>setName(e.target.value)} 
                                    />
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <div className='w-1/3'>Email</div>
                            <div className='w-2/3'>
                                :   <input
                                        className='w-[95%] outline-1 outline-cyan-500 px-2 py-1 border border-cyan-500 rounded-md' 
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <div className='w-1/3'>No HP/Telp</div>
                            <div className='w-2/3'>
                                :   <input
                                        className='w-[95%] outline-1 outline-cyan-500 px-2 py-1 border border-cyan-500 rounded-md' 
                                        value={nomorHp}
                                        onChange={(e)=>setNomorHp(e.target.value)} 
                                    />
                                    
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <div className='w-1/3'>Status</div>
                            <div className='w-2/3'>
                                :   <select
                                        className='w-[95%] outline-1 outline-cyan-500 px-2 py-1 border border-cyan-500 rounded-md' 
                                        value={status}
                                        onChange={(e)=>setStatus(e.target.value)} 
                                    >
                                        <option value=""></option>
                                        {statuses.map((status, index)=>(
                                            <option key={index} value={status.uuid}>{status.name}</option>
                                        ))}
                                    </select>
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <button type='submit' className='bg-cyan-500 hover:bg-cyan-400 w-full rounded-sm text-white py-1'>Update Data</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DataUser