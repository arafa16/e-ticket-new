import axios from 'axios';
import React, {useState, useEffect} from 'react';
import env from 'react-dotenv';
import FormStatus3 from './FormStatus3';
import { BiTrash } from "react-icons/bi";

const Type = () => {
    const [types, setTypes] = useState([]);

    //form create type
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [status, setStatus] = useState("");
    const [active, setActive] = useState(false);
    const [msg, setMsg] = useState("");

    //form update type
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

    // __________________________________________________________//

    useEffect(()=>{
        getTypes()
    },[]);
    
    const getTypes = async() => {
        const response = await axios.get(process.env.REACT_APP_API_URL+'/types');
        setTypes(response.data);
    }

    //delete___________________________________ //

    const deleteType = async(id) => {
        try {
            await axios.delete(process.env.REACT_APP_API_URL+'/types/'+id);
            getTypes();
        } catch (error) {
            if(error){
                setMsg(error.response.data.msg)
            }
        }
    }

    // __________________________________________________________//

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

    const handleForm = async(e) => {
        e.preventDefault();
        try {
            await axios.post(process.env.REACT_APP_API_URL+'/types',{
                name:name,
                code:code,
                idStatus:status
            });
            getTypes();
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

    const updateForm = async(e) => {
        e.preventDefault();
        try {
            await axios.put(process.env.REACT_APP_API_URL+'/types/'+id,{
                name:name3,
                code:code3,
                idStatus:status3
            });
            getTypes();
            closeUpdate();
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
                    <div className='text-[12pt]'>Type</div>
                </div>
                <div>
                    <button className={` text-white px-2 text-[8pt] rounded-md ${active ? 'bg-red-500 hover:bg-red-400' : 'bg-cyan-500 hover:bg-cyan-400'}`} onClick={()=>setActive(!active)}>{active ? 'close' : '+ create'}</button>
                </div>
            </div>
            <div className={`w-full mb-4 px-4 ${active ? '' : 'hidden'}`}>
                <FormStatus3 
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
                            <th className="border border-slate-600 w-6/12 p-1">Name</th>
                            <th className="border border-slate-600 w-5/12 p-1">Code</th>
                            <th className="border border-slate-600 w-5/12 p-1">Status</th>
                            <th className="border border-slate-600 w-2/12 p-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {types.map((type, index)=>(
                            <tr key={index} className='hover:bg-gray-100 cursor-pointer' onClick={()=>handleClick(type.uuid, type.name, (type.status && type.status.uuid), type.code)}>
                                <td className="border border-slate-700 text-center">{index + 1}</td>
                                <td className="border border-slate-700 px-4">{type.name}</td>
                                <td className="border border-slate-700 px-4">{type.code}</td>
                                <td className="border border-slate-700 px-4">{type.status && type.status.name}</td>
                                <td className="border border-slate-700 px-4 ">
                                    <BiTrash 
                                        onClick={()=>deleteType(type.uuid)} 
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
                <FormStatus3 
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

export default Type