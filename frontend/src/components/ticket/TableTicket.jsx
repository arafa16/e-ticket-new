import React, {useState, useRef, useEffect} from 'react'
import { BiTimer, BiEditAlt } from "react-icons/bi";
import SubStatus from './SubStatus';
import Moment from 'react-moment';
import env from 'react-dotenv';
import axios from 'axios';

const TableTicket = (props) => {
    const {name, tickets, updateStatus, updateResponsible, pages, prevPage, pageNow, clickPage, nextPage} = props;

    //menghitung page
    const rowPages = [];
    for (var i = 1; i<= pages; i++){
        rowPages.push(i)
    }
    //___________________________________________________________________

    return (
        <div className=''>
            <div className='bg-white w-full min-h-[10rem] px-10 py-7'>
                <div className='mb-4 flex justify-between gap-4'>
                    {name}
                    <div className={`w-fit flex items-center rounded-md px-2 bg-sky-500 text-center text-[10pt] text-white ${pages ? 'hidden' : ''}`}>Belum ada data</div>
                </div>
                <div className='scroll-auto'>
                    <table className={`border border-slate-500 w-full text-[12px] ${!pages ? 'hidden' : ''}`}>
                        <thead>
                            <tr>
                                <th className="border border-slate-600 w-1/12 p-1">No</th>
                                <th className="border border-slate-600 w-1/12 p-1">No Ticket</th>
                                <th className="border border-slate-600 w-1/12 p-1">Name</th>
                                <th className="border border-slate-600 w-1/12 p-1">Jenis Ticket</th>
                                <th className="border border-slate-600 w-3/12 p-1">Deskripsi Kendala</th>
                                <th className="border border-slate-600 w-2/12 p-1">Tgl Pengajuan</th>
                                <th className="border border-slate-600 w-2/12 p-1">Tgl Update</th>
                                <th className="border border-slate-600 w-1/12 p-1">Responsible</th>
                                <th className="border border-slate-600 w-1/12 p-1">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map((ticket, index)=>(
                                <tr key={index} className='hover:bg-gray-100 cursor-pointer py-1'>
                                    <td className="border border-slate-700 text-center">{index + 1}</td>
                                    <td className="border border-slate-700 px-4 text-center">{ticket.user && ticket.nomor}</td>
                                    <td className="border border-slate-700 px-4">{ticket.user && ticket.user.name}</td>
                                    <td className="border border-slate-700 px-4">{ticket.type && ticket.type.name}</td>
                                    <td className="border border-slate-700 px-4">{ticket.request}</td>
                                    <td className="border border-slate-700 px-4"><Moment date={ticket.startDate} format='YYYY-MM-DD HH:mm'/></td>
                                    <td className="border border-slate-700 px-4"><Moment date={ticket.endDate} format='YYYY-MM-DD HH:mm:ss'/></td>
                                    <td className="border border-slate-700 text-[10pt] px-2">
                                            {ticket.responsible && ticket.responsible.user.name}
                                    </td>
                                    <td className="border border-slate-700 relative w-full">
                                        <button className='px-2 px-4 w-full'>{ticket.status_ticket && ticket.status_ticket.name}</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={`w-full flex justify-end mt-4 text-[8pt] ${!pages ? 'hidden' : ''}`}>
                    <div className='px-2 border border-gray-500 hover:border-white mx-2 cursor-pointer hover:bg-cyan-500 hover:text-white' onClick={()=>prevPage()}>Prev</div>
                    {rowPages.map((page, index)=>(
                        <div 
                            key={index} 
                            className={`px-2 border border-gray-500 hover:border-white mx-2 cursor-pointer hover:bg-cyan-500 hover:text-white ${page === pageNow ? 'bg-cyan-500 text-white border-0' : '' }`}
                            onClick={()=>clickPage(page)}
                            >{page}
                        </div>
                    ))}
                    <div className='px-2 border border-gray-500 hover:border-white mx-2 cursor-pointer hover:bg-cyan-500 hover:text-white' onClick={()=>nextPage()}>Next</div>
                </div>
            </div>
        </div>
    )
}

export default TableTicket