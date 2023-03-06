import axios from 'axios';
import React, {useEffect, useState} from 'react';
import env from 'react-dotenv';
import { BiTrash } from "react-icons/bi";
import FormStatus from './FormStatus';

const Status = () => {
    const [status, setStatus] = useState([]);
    const [msg, setMsg] = useState("");
    const [active, setActive] = useState(false);

    //form create new status
    const [name, setName] = useState("");
    const [code, setCode] = useState("");

    //form update status
    const [name2, setName2] = useState("");
    const [code2, setCode2] = useState("");
    const [id, setId] = useState("");
    const [active2, setActive2] = useState(false);

    useEffect(()=>{
        getStatus();
    },[])

    const getStatus = async() => {
        const response = await axios.get(process.env.REACT_APP_API_URL+'/status');
        setStatus(response.data);
    }

    const deleteStatus = async(id) => {
        try {
            await axios.delete(process.env.REACT_APP_API_URL+'/status/'+id);
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
            await axios.post(process.env.REACT_APP_API_URL+'/status',{
                name:name,
                code:code
            });
            getStatus();
            setName("");
            setCode("");
            setMsg("");
        } catch (error) {
            if(error){
                setMsg(error.response.data.msg)
            }
        }
    }

    const handleValue = (uuid, name, code) => {
        setActive2(true);
        setName2(name);
        setCode2(code);
        setId(uuid);
    }

    const handleUpdate = async(e) => {
        e.preventDefault();
        try {
            await axios.put(process.env.REACT_APP_API_URL+'/status/'+id,{
                name:name2,
                code:code2
            });
            getStatus();
            setName2("");
            setCode2("");
            setId("");
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
                    <div className='text-[12pt]'>Status</div>
                </div>
                <div>
                    <button className={` text-white px-2 text-[8pt] rounded-md ${active ? 'bg-red-500 hover:bg-red-400' : 'bg-cyan-500 hover:bg-cyan-400'}`} onClick={()=>setActive(!active)}>{active ? 'close' : '+ create'}</button>
                </div>
            </div>
            <div className={`w-full mb-4 px-4 ${active ? '' : 'hidden'}`}>
                <FormStatus
                    name={name}
                    setName={setName}
                    code={code}
                    setCode={setCode} 
                    handleAction={handleForm}
                    name2="Create New"
                />
            </div>
            <hr/>
            <div className='min-h-[7rem] mx-4'>
                <div className={`w-full bg-orange-500 text-[9pt] text-white mb-4 text-center ${(msg !== null || msg !== "") ? '' : 'hidden'}`}>{msg}</div>
                <table className='border border-slate-500 w-full text-[12px]'>
                    <thead>
                        <tr>
                            <th className="border border-slate-600 w-1/12 p-1">No</th>
                            <th className="border border-slate-600 w-6/12 p-1">Name</th>
                            <th className="border border-slate-600 w-5/12 p-1">Code</th>
                            <th className="border border-slate-600 w-5/12 p-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {status.map((res, index)=>(
                            <tr key={index} className='hover:bg-gray-100 cursor-pointer' >
                                <td className="border border-slate-700 text-center" onClick={()=>handleValue(res.uuid, res.name, res.code)}>{index + 1}</td>
                                <td className="border border-slate-700 px-4" onClick={()=>handleValue(res.uuid, res.name, res.code)}>{res.name}</td>
                                <td className="border border-slate-700 px-4" onClick={()=>handleValue(res.uuid, res.name, res.code)}>{res.code}</td>
                                <td className="border border-slate-700 px-4"><BiTrash onClick={()=>deleteStatus(res.uuid)} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={`w-full mb-4 px-4 ${active2 ? '' : 'hidden'}`}>
                <div className='w-full flex justify-end text-[9pt]'>
                    <div className='bg-orange-500 hover:bg-orange-400 px-2 rounded-md text-white cursor-pointer' onClick={()=>setActive2(false)}>close</div>
                </div>
                <FormStatus
                    name={name2}
                    setName={setName2}
                    code={code2}
                    setCode={setCode2} 
                    handleAction={handleUpdate}
                    name2="Update"
                />
            </div>
        </div>
  )
}

export default Status