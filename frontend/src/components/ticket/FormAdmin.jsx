import axios from 'axios';
import moment from 'moment';
import React, {useState, useEffect} from 'react'
import env from 'react-dotenv';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';

const FormAdmin = (props) => {
    const {setTicket, newTicket, clearTicket, user} = props;

    const [type, setType] = useState([]);
    const [typeId, setTypeId] = useState("");
    const [request, setRequest] = useState("");
    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState(null);
    const [idUser, setIdUser] = useState("");
    const [endDate, setEndDate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [idResponseble, setIdResponsible] = useState("");
    const [responsebles, setResponsibles] = useState([]);
    const [idStatus, setIdStatus] = useState("");
    const [statuses, setStatuses] = useState([]);
    const [active, setActive] = useState(false);
    const [msg, setMsg] = useState("");
    const date = new Date();

    useEffect(()=>{
        getTypes();
        getResponsible();
        getStatus();
    },[]);

    const handleUsers = (name) => {
        setUserName(name);
        setActive(true);
        getUsers(name);
    }

    const getUsers = async(name) => {
        const response = await axios.get(process.env.REACT_APP_API_URL+'/findUsers/'+name);
        setUsers(response.data)
    }

    const submitName = (name, uuid) => {
        setUserName(name);
        setIdUser(uuid)
        setActive(false);
    }

    const getTypes = async() => {
        const response = await axios.get(process.env.REACT_APP_API_URL+'/types');
        setType(response.data)
    }

    const getStatus = async() => {
        const response = await axios.get(process.env.REACT_APP_API_URL+'/statusTicket');
        setStatuses(response.data)
    }

    const getResponsible = async() => {
        const response = await axios.get(process.env.REACT_APP_API_URL+'/responsible');
        setResponsibles(response.data)
    }

    const saveTickets = async(e) => {
        e.preventDefault();
        try { 
            await axios.post(process.env.REACT_APP_API_URL+"/tickets", {
                userId: idUser,
                request: request,
                typeId: typeId,
                statusTicketId: idStatus,
                startDate: moment(startDate).format('YYYY-MM-DD HH:mm:ss'),
                endDate: moment(endDate).format('YYYY-MM-DD HH:mm:ss'),
                responsebleId: idResponseble
            });
            newTicket();
            clearTicket();
            setTypeId("");
            setRequest("");
            setUserName("");
            setIdResponsible("");
            setIdStatus("");
            setStartDate("");
            setEndDate("");
            setTicket(false);
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }

    return (
        <div className='w-full'>
            <div className='w-full flex justify-end'>
                <div className='w-2/3 bg-white min-h-[10rem] px-10 py-7 text-[10pt]'>
                    <form onSubmit={saveTickets}>
                        <div>{msg}</div>
                        <div className='grid grid-cols-2 gap-6 mb-4'>
                            <div className=' w-full'>
                                <div className='mr-6 mb-1'>User</div>
                                <input 
                                    type="text" 
                                    className='outline-cyan-500 ring-1 ring-cyan-500 px-4 w-full py-1' 
                                    onChange={(e)=>handleUsers(e.target.value)}
                                    value={userName}  
                                />
                                <div className={`absolute mt-2 w-[26rem] bg-white shadow-xl shadow-cyan-100 ${active ? '' : 'hidden' }`}>
                                    {users.map((user, index)=>(
                                        <div className='w-full px-4 py-1 hover:bg-cyan-500 hover:text-white cursor-pointer' onClick={()=>submitName(user.name, user.uuid)}>{user.name}</div>
                                    ))}
                                </div>
                            </div>
                            <div className=' w-full'>
                                <div className='mr-6 mb-1'>Jenis Kendala</div>
                                <select 
                                    className='outline-cyan-500 ring-1 ring-cyan-500 px-4 w-full py-1' 
                                    type="text"
                                    value={typeId}
                                    onChange={(e)=> setTypeId(e.target.value)}
                                    >
                                        <option value=""></option>
                                    {type.map((type, index)=>(
                                        <option key={index} value={type.uuid}>{type.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className=' w-full'>
                                <div className='mr-6 mb-1'>Responsible</div>
                                <select 
                                    className='outline-cyan-500 ring-1 ring-cyan-500 px-4 w-full py-1' 
                                    type="text"
                                    value={idResponseble}
                                    onChange={(e)=> setIdResponsible(e.target.value)}
                                    >
                                        <option value=""></option>
                                    {responsebles.map((res, index)=>(
                                        <option key={index} value={res.id}>{res.user.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className=' w-full'>
                                <div className='mr-6 mb-1'>Status</div>
                                <select 
                                    className='outline-cyan-500 ring-1 ring-cyan-500 px-4 w-full py-1' 
                                    type="text"
                                    value={idStatus}
                                    onChange={(e)=> setIdStatus(e.target.value)}
                                    >
                                        <option value=""></option>
                                    {statuses.map((status, index)=>(
                                        <option key={index} value={status.id}>{status.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='w-full'>
                                <div className='mr-6 mb-1'>Start Date</div>
                                <input
                                    className='outline-cyan-500 ring-1 ring-cyan-500 px-4 w-full py-1' 
                                    type="datetime-local"
                                    value={startDate}
                                    onChange={(e)=> setStartDate(e.target.value)}
                                    />
                            </div>
                            <div className='w-full'>
                                <div className='mr-6 mb-1'>End Date</div>
                                <input
                                    className='outline-cyan-500 ring-1 ring-cyan-500 px-4 w-full py-1' 
                                    type="datetime-local"
                                    value={endDate}
                                    onChange={(e)=> setEndDate(e.target.value)}
                                    />
                            </div>
                            <div className='w-full'>
                                <div className='mr-6 mb-1'>Keterangan Kendala</div>
                                <textarea 
                                    className='outline-cyan-500 ring-1 ring-cyan-500 px-4 py-2 w-full h-32' 
                                    type="text"
                                    value={request}
                                    onChange={(e)=> setRequest(e.target.value)}
                                    />
                            </div>
                        </div>
                        <button type='submit' className='w-full bg-cyan-500 hover:bg-cyan-400 text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormAdmin