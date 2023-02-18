import React, {useState, useRef, useEffect} from 'react'
import { BiTimer } from "react-icons/bi";
import SubStatus from './SubStatus';
import Moment from 'react-moment';
import env from 'react-dotenv';
import axios from 'axios';

const TableTicket = (props) => {
    const {name, tickets, updateStatus} = props;
    const [idActive, setIdActive] = useState("");
    const [status, setStatus] = useState([]);

    const getStatus = async() => {
        const response = await axios.get(env.API_URL+'/statusTicket');
        setStatus(response.data);
        console.log(response.data);
    }

    const subRef = useRef();

    useEffect(()=>{
        const handleSubMenu = (event) => {
            if(!subRef.current.contains(event.target)){
                setIdActive("")
            }
        }

        document.addEventListener("mousedown", handleSubMenu);

        return ()=>{
            document.removeEventListener("mousedown", handleSubMenu);
        }
    })

    const statusById = () => {
        updateStatus();
    }

    const handleSubActive = (id) => {
        setIdActive(id)
        getStatus();
    }

  return (
    <div className='w-full px-28'>
        <div className='bg-white w-full min-h-[10rem] px-10 py-7'>
            <div className='mb-4'>
                {name}
            </div>
            <table className='border border-slate-500 w-full text-[12px]'>
                <thead>
                    <tr>
                        <th className="border border-slate-600 w-1/12 p-1">No</th>
                        <th className="border border-slate-600 w-1/12 p-1">Name</th>
                        <th className="border border-slate-600 w-1/12 p-1">Jenis Ticket</th>
                        <th className="border border-slate-600 w-3/12 p-1">Deskripsi Kendala</th>
                        <th className="border border-slate-600 w-2/12 p-1">Tgl Pengajuan</th>
                        <th className="border border-slate-600 w-2/12 p-1">Tgl Selesai</th>
                        <th className="border border-slate-600 w-1/12 p-1">Responsible</th>
                        <th className="border border-slate-600 w-1/12 p-1">Status</th>
                    </tr>
                </thead>
                <tbody ref={subRef}>
                    {tickets.map((ticket, index)=>(
                        <tr key={index} className='hover:bg-gray-100 cursor-pointer'>
                            <td className="border border-slate-700 text-center">1</td>
                            <td className="border border-slate-700 px-4">{ticket.user && ticket.user.name}</td>
                            <td className="border border-slate-700 px-4">{ticket.type && ticket.type.name}</td>
                            <td className="border border-slate-700 px-4">{ticket.request}</td>
                            <td className="border border-slate-700 px-4"><Moment date={ticket.startDate} format='YYYY-MM-DD hh:mm:ss'/></td>
                            <td className="border border-slate-700 px-4"><Moment date={ticket.endDate} format='YYYY-MM-DD hh:mm:ss'/></td>
                            <td className="border border-slate-700 px-4">{ticket.responsible && ticket.responsible.user.name}</td>
                            <td className="border border-slate-700 px-4 relative">
                                <button className='hover:bg-cyan-400 hover:text-white px-2 rounded-md' onClick={()=>handleSubActive(ticket.uuid)}>{ticket.status_ticket && ticket.status_ticket.name}</button>
                                <SubStatus status={status} subRef={subRef} idActive={idActive} id={ticket.uuid}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TableTicket