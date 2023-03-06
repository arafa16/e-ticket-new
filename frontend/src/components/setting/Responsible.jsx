import axios from 'axios';
import React, {useState, useEffect} from 'react';
import env from 'react-dotenv';
import FormStatus4 from './FormStatus4';
import { BiTrash } from "react-icons/bi";

const Responsible = () => {
    const [responsibles, setRespoonsibles] = useState([]);
    const [users, setUsers] = useState([]);

    //form create responsible
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const [msg, setMsg] = useState("");

    //form update responsible
    const [id3, setId3] = useState("");
    const [userId3, setUserId3] = useState("");
    const [name3, setName3] = useState("");
    const [status3, setStatus3] = useState("");
    const [active3, setActive3] = useState(false);

    //get all status___________________________________ //

    const [status2, setStatus2] = useState([]);
  
    useEffect(()=>{
      getStatus2();
    },[]);
  
    const getStatus2 = async() => {
      const response = await axios.get(process.env.REACT_APP_API_URL+'/status');
      setStatus2(response.data);
    } 

    // __________________________________________________________//

    //get all status___________________________________ //
    
    useEffect(()=>{
        getUsers();
    },[]);

    const handleUsers = (name) => {
        setName(name);
        setActive2(true);
        getUsers(name);
    }

    const getUsers = async(name) => {
        const response = await axios.get(process.env.REACT_APP_API_URL+'/findUsers/'+name);
        setUsers(response.data)
    }

    const submitName = (name, uuid) => {
        setName(name);
        setId(uuid)
        setActive2(false);
    }

    const handleForm = async(e) => {
        e.preventDefault();
        try {
            await axios.post(process.env.REACT_APP_API_URL+'/responsible',{
                id:id,
                idStatus:status
            });
            getResponsible();
            setName("");
            setStatus("");
            setMsg("");
        } catch (error) {
            if(error){
                setMsg(error.response.data.msg)
            }
        }
    }

    const updateForm = async(e) => {
        e.preventDefault();
        try {
            await axios.put(process.env.REACT_APP_API_URL+'/responsible/'+id3,{
                id:id3,
                idStatus:status3,
                userId:userId3
            });
            getResponsible();
            setName3("");
            setStatus3("");
            setMsg("");
            setActive3(false);
        } catch (error) {
            if(error){
                setMsg(error.response.data.msg)
            }
        }
    }

    const closeUpdate = () => {
        setId3("")
        setName3("");
        setUserId3("");
        setStatus3("");
        setActive3(false);
    }

    // __________________________________________________________//

    useEffect(()=>{
        getResponsible();
    },[]);

    const getResponsible = async() => {
        const response = await axios.get(process.env.REACT_APP_API_URL+'/responsible');
        setRespoonsibles(response.data);
    }

    const deleteResponsible = async(id) => {
        try {
            await axios.delete(process.env.REACT_APP_API_URL+'/responsible/'+id);
            getResponsible();
        } catch (error) {
            if(error){
                setMsg(error.response.data.msg)
            }
        }
    }

    const handleClick = (id, userId,  name, status) => {
        setId3(id);
        setUserId3(userId);
        setName3(name);
        setStatus3(status);
        setActive3(true)
    }

    return (
        <div className='w-full bg-white rounded-md p-2'>
            <div className='flex justify-between m-4'>
                <div className='flex gap-4 items-center'>
                    <div className='text-[12pt]'>Responsible</div>
                </div>
                <div>
                    <button className={` text-white px-2 text-[8pt] rounded-md ${active ? 'bg-red-500 hover:bg-red-400' : 'bg-cyan-500 hover:bg-cyan-400'}`} onClick={()=>setActive(!active)}>{active ? 'close' : '+ create'}</button>
                </div>
            </div>
            <div className={`w-full mb-4 px-4 ${active ? '' : 'hidden'}`}>
                <FormStatus4 
                    name={name}
                    setName={setName}
                    status={status}
                    setStatus={setStatus} 
                    status2={status2}
                    users={users}
                    active={active}
                    active2={active2}
                    submitName={submitName}
                    handleUsers={handleUsers}       
                    handleAction={handleForm}
                    name2="Create New"
                />
            </div>
            <hr/>
            <div className='min-h-[7rem] m-4'>
                <table className='border border-slate-500 w-full text-[12px]'>
                    <thead>
                        <tr>
                            <th className="border border-slate-600 w-1/12 p-1">No</th>
                            <th className="border border-slate-600 w-6/12 p-1">Name</th>
                            <th className="border border-slate-600 w-6/12 p-1">Status</th>
                            <th className="border border-slate-600 w-6/12 p-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {responsibles.map((responsible, index)=>(
                            <tr key={index} className='hover:bg-gray-100 cursor-pointer' >
                                <td className="border border-slate-700 text-center" onClick={()=>handleClick(responsible.uuid, responsible.user.uuid, responsible.user.name, (responsible.status && responsible.status.uuid))}>{index + 1}</td>
                                <td className="border border-slate-700 px-4" onClick={()=>handleClick(responsible.uuid, responsible.user.uuid, responsible.user.name, (responsible.status && responsible.status.uuid))}>{responsible.user && responsible.user.name}</td>
                                <td className="border border-slate-700 px-4" onClick={()=>handleClick(responsible.uuid, responsible.user.uuid, responsible.user.name, (responsible.status && responsible.status.uuid))}>{responsible.status && responsible.status.name}</td>
                                <td className="border border-slate-700 px-4">
                                    <BiTrash
                                        onClick={()=>deleteResponsible(responsible.uuid)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={`w-full mb-4 px-4 ${active3 ? '' : 'hidden'}`}>
                <div className='w-full flex justify-end'>
                    <div className='bg-red-500 text-white rounded-md px-2 text-[8pt] cursor-pointer' 
                        onClick={()=>closeUpdate()}
                    >close</div>
                </div>
                <FormStatus4 
                    name={name3}
                    setName={setName3}
                    status={status3}
                    setStatus={setStatus3} 
                    status2={status2}
                    users={users}
                    active={active3}
                    active2={active2}
                    submitName={submitName}
                    handleUsers={handleUsers}       
                    handleAction={updateForm}
                    name2="Update"
                />
            </div>
        </div>
    )
}

export default Responsible