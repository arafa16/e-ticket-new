import React from 'react'
import { BiTimer } from "react-icons/bi";
import { Link } from 'react-router-dom';

const TableUser = (props) => {
    const {datas, pages, nextPage, prevPage, pageNow, clickPage, handleUser} = props;

    const rowPages = [];

    for(let i = 1; i <= pages; i++){
        rowPages.push(i);
    }

  return (
    <div className='w-full'>
        <div className='bg-white w-full min-h-[10rem] px-10 py-7'>
            <div className='mb-4'>
                Tabel User
            </div>
            <table className='border border-slate-500 w-full text-[12px]'>
                <thead>
                    <tr>
                        <th className="border border-slate-600 w-1/12 p-1">No</th>
                        <th className="border border-slate-600 w-4/12 p-1">Name</th>
                        <th className="border border-slate-600 w-4/12 p-1">Email</th>
                        <th className="border border-slate-600 w-3/12 p-1">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data, index)=>(
                        <tr key={index} className='hover:bg-gray-100 cursor-pointer' onClick={()=>handleUser(data.uuid)}>
                            <td className="border border-slate-700 text-center">{(index + 1)+((pageNow-1)*10)}</td>
                            <td className="border border-slate-700 px-4">{data.name}</td>
                            <td className="border border-slate-700 px-4">{data.email}</td>
                            <td className="border border-slate-700 px-4">{data.status && data.status.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={`w-full flex justify-end mt-4 text-[8pt]`}>
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

export default TableUser