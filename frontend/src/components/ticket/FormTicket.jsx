import axios from 'axios';
import moment from 'moment';
import React, {useState, useEffect} from 'react'
import env from 'react-dotenv';
import Moment from 'react-moment';
import { useSelector } from 'react-redux';

const FormTicket = (props) => {
    const {setTicket, newTicket, clearTicket, user} = props;

    const [type, setType] = useState([]);
    const [typeId, setTypeId] = useState("");
    const [request, setRequest] = useState("");
    const [msg, setMsg] = useState("");
    const date = new Date();

    useEffect(()=>{
        getTypes();
    },[]);

    const getTypes = async() => {
        const response = await axios.get(env.API_URL+'/types');
        setType(response.data)
    }

    const saveTickets = async(e) => {
        e.preventDefault();
        try { 
            await axios.post(env.API_URL+"/tickets", {
                userId: user.uuid,
                request: request,
                typeId: typeId,
                statusTicketId: '1',
                startDate: moment(date).format('YYYY-MM-DD HH:mm:ss'),
                endDate: moment(date).format('YYYY-MM-DD HH:mm:ss')
            });
            newTicket();
            clearTicket();
            setTypeId("");
            setRequest("");
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
                <div className='w-1/2 bg-white min-h-[10rem] px-10 py-7 text-[10pt]'>
                    <form onSubmit={saveTickets}>
                        <div className='grid grid-cols-1 gap-6 mb-4'>
                            <div>{msg}</div>
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
                            <div className='w-full'>
                                <div className='mr-6 mb-1'>Keterangan Kendala</div>
                                <textarea 
                                    className='outline-cyan-500 caret-cyan-500 ring-1 ring-cyan-500 px-4 py-2 w-full h-32' 
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

export default FormTicket