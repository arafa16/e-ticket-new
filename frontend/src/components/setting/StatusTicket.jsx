import axios from 'axios';
import React, {useState, useEffect} from 'react'
import env from 'react-dotenv';
import FormStatus2 from './FormStatus2';
import { BiTrash } from "react-icons/bi";

const StatusTicket = () => {
    const [status1, setStatus1] = useState([]);

    //form create status ticket
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [status, setStatus] = useState("");
    const [active, setActive] = useState(false);
    const [msg, setMsg] = useState("");

    //form update status ticket
    const [id, setId] = useState("");
    const [name3, setName3] = useState("");
    const [code3, setCode3] = useState("");
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

    //__________________________________________________________

    useEffect(()=>{
        getStatus();
    },[]);

    const getStatus = async() => {
        const response = await axios.get(process.env.REACT_APP_API_URL+'/statusTicket');
        setStatus1(response.data);
    }

    const deleteStatus2 = async(id) => {
        try {
            await axios.delete(process.env.REACT_APP_API_URL+'/status2/'+id);
            getStatus();
        } catch (error) {
            if(error){
                setMsg(error.response.data.msg)
            }
        }
    }

    const handleForm = async(e) => {
        e.preventDefault();
        try {
            await axios.post(process.env.REACT_APP_API_URL+'/statusTicket',{
                name:name,
                code:code,
                idStatus:status
            });
            getStatus();
            setName("");
            setCode("");
            setStatus("");
            setMsg("");
        } catch (error) {
            if(error){
                setMsg(error.response.data.msg)
            }
        }
    }

    const handleClick = (id, name, status, code) => {
        setId(id);
        setName3(name);
        setCode3(code);
        setStatus3(status);
        setActive3(true)
    }

    const closeUpdate = () => {
        setName3("");
        setCode3("");
        setStatus3("");
        setActive3(false);
    }

    const updateForm = async(e) => {
        e.preventDefault();
        try {
            await axios.put(process.env.REACT_APP_API_URL+'/statusTicket/'+id,{
                name:name3,
                code:code3,
                idStatus:status3
            });
            getStatus();
            setName3("");
            setCode3("");
            setStatus3("");
            setActive3(false);
            setMsg("");
        } catch (error) {
            if(error){
                setMsg(error.response.data.msg)
            }
        }
    }

    return (
        <div className='w-full bg-white rounded-md p-2'>
            <div className='flex justify-between m-4'>
                <div className='flex gap-4 items-center'>
                    <div className='text-[12pt]'>Status Ticket</div>
                </div>
                <div>
                <button className={` text-white px-2 text-[8pt] rounded-md ${active ? 'bg-red-500 hover:bg-red-400' : 'bg-cyan-500 hover:bg-cyan-400'}`} onClick={()=>setActive(!active)}>{active ? 'close' : '+ create'}</button>
                </div>
            </div>
            <div className={`w-full mb-4 px-4 ${active ? '' : 'hidden'}`}>
                <FormStatus2 
                    name={name}
                    setName={setName}
                    code={code}
                    setCode={setCode}
                    status={status}
                    setStatus={setStatus} 
                    status2={status2}
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
                            <th className="border border-slate-600 w-3/12 p-1">Name</th>
                            <th className="border border-slate-600 w-3/12 p-1">Code</th>
                            <th className="border border-slate-600 w-2/12 p-1">Status</th>
                            <th className="border border-slate-600 w-2/12 p-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {status1.map((status, index)=>(
                            <tr key={index} className='hover:bg-gray-100 cursor-pointer'>
                                <td className="border border-slate-700 text-center" onClick={()=>handleClick(status.uuid, status.name, status.status.uuid, status.code)}>{index + 1}</td>
                                <td className="border border-slate-700 px-4" onClick={()=>handleClick(status.uuid, status.name, status.status.uuid, status.code)}>{status.name}</td>
                                <td className="border border-slate-700 px-4" onClick={()=>handleClick(status.uuid, status.name, status.status.uuid, status.code)}>{status.code}</td>
                                <td className="border border-slate-700 px-4" onClick={()=>handleClick(status.uuid, status.name, status.status.uuid, status.code)}>{status.status && status.status.name}</td>
                                <td className="border border-slate-700 px-4 ">
                                    <BiTrash onClick={()=>deleteStatus2(status.uuid)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={`w-full mb-4 px-4 ${active3 ? '' : 'hidden'}`}>
                <div className='w-full flex justify-end'>
                    <div className='bg-red-500 text-white rounded-md px-2 text-[8pt] cursor-pointer' onClick={()=>closeUpdate()}>close</div>
                </div>
                <FormStatus2 
                    name={name3}
                    setName={setName3}
                    code={code3}
                    setCode={setCode3}
                    status={status3}
                    setStatus={setStatus3} 
                    status2={status2}
                    handleAction={updateForm}
                    name2="Update"
                />
            </div>
        </div>
    )
}

export default StatusTicket