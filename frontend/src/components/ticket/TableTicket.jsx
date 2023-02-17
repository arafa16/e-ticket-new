import React, {useState} from 'react'
import { BiTimer } from "react-icons/bi";
import SubStatus from './SubStatus';

const TableTicket = (props) => {
    const {name} = props;
    const [subStatus, setSubStatus] = useState(false);

  return (
    <div className='w-full px-28'>
        <div className='bg-white w-full min-h-[10rem] px-10 py-7'>
            <div className='mb-4'>
                {name}
            </div>
            <table className='border border-slate-500 w-full text-[12px]'>
                <thead>
                    <tr>
                        <th class="border border-slate-600 w-1/12 p-1">No</th>
                        <th class="border border-slate-600 w-2/12 p-1">Name</th>
                        <th class="border border-slate-600 w-1/12 p-1">Jenis Ticket</th>
                        <th class="border border-slate-600 w-4/12 p-1">Deskripsi Kendala</th>
                        <th class="border border-slate-600 w-1/12 p-1">Time</th>
                        <th class="border border-slate-600 w-2/12 p-1">Responsible</th>
                        <th class="border border-slate-600 w-1/12 p-1">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='hover:bg-gray-100 cursor-pointer'>
                        <td class="border border-slate-700 text-center">1</td>
                        <td class="border border-slate-700 px-4">Name</td>
                        <td class="border border-slate-700 px-4">ERP</td>
                        <td class="border border-slate-700 px-4">Login tidak bisa, dan privilege</td>
                        <td class="border border-slate-700 px-4 text-[14pt]"><div className='flex justify-center' onClick={()=>alert("clock")}><BiTimer className='hover:text-cyan-500' /></div></td>
                        <td class="border border-slate-700 px-4">Ara</td>
                        <td class="border border-slate-700 px-4 relative">
                            <button className='hover:bg-cyan-400 hover:text-white px-2 rounded-md' onClick={()=>setSubStatus(!subStatus)}>Pengajuan</button>
                            <SubStatus status={subStatus} />
                        </td>
                    </tr>
                    <tr className='hover:bg-gray-100 cursor-pointer'>
                        <td class="border border-slate-700 text-center">2</td>
                        <td class="border border-slate-700 px-4">Name</td>
                        <td class="border border-slate-700 px-4">ERP</td>
                        <td class="border border-slate-700 px-4">Login tidak bisa, dan privilege</td>
                        <td class="border border-slate-700 px-4 text-[14pt]"><div className='flex justify-center' onClick={()=>alert("clock")}><BiTimer className='hover:text-cyan-500' /></div></td>
                        <td class="border border-slate-700 px-4">Ara</td>
                        <td class="border border-slate-700 px-4">pengajuan</td>
                    </tr>
                    <tr className='hover:bg-gray-100 cursor-pointer'>
                        <td class="border border-slate-700 text-center">3</td>
                        <td class="border border-slate-700 px-4">Name</td>
                        <td class="border border-slate-700 px-4">ERP</td>
                        <td class="border border-slate-700 px-4">Login tidak bisa, dan privilege</td>
                        <td class="border border-slate-700 px-4 text-[14pt]"><div className='flex justify-center' onClick={()=>alert("clock")}><BiTimer className='hover:text-cyan-500' /></div></td>
                        <td class="border border-slate-700 px-4">Ara</td>
                        <td class="border border-slate-700 px-4">pengajuan</td>
                    </tr>
                    <tr className='hover:bg-gray-100 cursor-pointer'>
                        <td class="border border-slate-700 text-center">3</td>
                        <td class="border border-slate-700 px-4">Name</td>
                        <td class="border border-slate-700 px-4">ERP</td>
                        <td class="border border-slate-700 px-4">Login tidak bisa, dan privilege</td>
                        <td class="border border-slate-700 px-4 text-[14pt]"><div className='flex justify-center' onClick={()=>alert("clock")}><BiTimer className='hover:text-cyan-500' /></div></td>
                        <td class="border border-slate-700 px-4">Ara</td>
                        <td class="border border-slate-700 px-4">pengajuan</td>
                    </tr>
                    <tr className='hover:bg-gray-100 cursor-pointer'>
                        <td class="border border-slate-700 text-center">3</td>
                        <td class="border border-slate-700 px-4">Name</td>
                        <td class="border border-slate-700 px-4">ERP</td>
                        <td class="border border-slate-700 px-4">Login tidak bisa, dan privilege</td>
                        <td class="border border-slate-700 px-4 text-[14pt]"><div className='flex justify-center' onClick={()=>alert("clock")}><BiTimer className='hover:text-cyan-500' /></div></td>
                        <td class="border border-slate-700 px-4">Ara</td>
                        <td class="border border-slate-700 px-4">pengajuan</td>
                    </tr>
                    <tr className='hover:bg-gray-100 cursor-pointer'>
                        <td class="border border-slate-700 text-center">3</td>
                        <td class="border border-slate-700 px-4">Name</td>
                        <td class="border border-slate-700 px-4">ERP</td>
                        <td class="border border-slate-700 px-4">Login tidak bisa, dan privilege</td>
                        <td class="border border-slate-700 px-4 text-[14pt]"><div className='flex justify-center' onClick={()=>alert("clock")}><BiTimer className='hover:text-cyan-500' /></div></td>
                        <td class="border border-slate-700 px-4">Ara</td>
                        <td class="border border-slate-700 px-4">pengajuan</td>
                    </tr>
                    <tr className='hover:bg-gray-100 cursor-pointer'>
                        <td class="border border-slate-700 text-center">3</td>
                        <td class="border border-slate-700 px-4">Name</td>
                        <td class="border border-slate-700 px-4">ERP</td>
                        <td class="border border-slate-700 px-4">Login tidak bisa, dan privilege</td>
                        <td class="border border-slate-700 px-4 text-[14pt]"><div className='flex justify-center' onClick={()=>alert("clock")}><BiTimer className='hover:text-cyan-500' /></div></td>
                        <td class="border border-slate-700 px-4">Ara</td>
                        <td class="border border-slate-700 px-4">pengajuan</td>
                    </tr>
                    <tr className='hover:bg-gray-100 cursor-pointer'>
                        <td class="border border-slate-700 text-center">3</td>
                        <td class="border border-slate-700 px-4">Name</td>
                        <td class="border border-slate-700 px-4">ERP</td>
                        <td class="border border-slate-700 px-4">Login tidak bisa, dan privilege</td>
                        <td class="border border-slate-700 px-4 text-[14pt]"><div className='flex justify-center' onClick={()=>alert("clock")}><BiTimer className='hover:text-cyan-500' /></div></td>
                        <td class="border border-slate-700 px-4">Ara</td>
                        <td class="border border-slate-700 px-4">pengajuan</td>
                    </tr>
                    <tr className='hover:bg-gray-100 cursor-pointer'>
                        <td class="border border-slate-700 text-center">3</td>
                        <td class="border border-slate-700 px-4">Name</td>
                        <td class="border border-slate-700 px-4">ERP</td>
                        <td class="border border-slate-700 px-4">Login tidak bisa, dan privilege</td>
                        <td class="border border-slate-700 px-4 text-[14pt]"><div className='flex justify-center' onClick={()=>alert("clock")}><BiTimer className='hover:text-cyan-500' /></div></td>
                        <td class="border border-slate-700 px-4">Ara</td>
                        <td class="border border-slate-700 px-4">pengajuan</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TableTicket