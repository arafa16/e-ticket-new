import React from 'react'
import { BiTimer } from "react-icons/bi";

const TableUser = (props) => {
    const {users, pages} = props;

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
                    {users.map((user, index)=>(
                        <tr key={index} className='hover:bg-gray-100 cursor-pointer'>
                            <td className="border border-slate-700 text-center">{index + 1}</td>
                            <td className="border border-slate-700 px-4">{user.name}</td>
                            <td className="border border-slate-700 px-4">{user.email}</td>
                            <td className="border border-slate-700 px-4">{user.status.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={`w-full flex justify-end mt-4 text-[8pt]`}>
                <div className='px-2 border border-gray-500 hover:border-white mx-2 cursor-pointer hover:bg-cyan-500 hover:text-white'>Prev</div>
                {rowPages.map((page, index)=>(
                    <div 
                        key={index}
                        className={`px-2 border border-gray-500 hover:border-white mx-2 cursor-pointer hover:bg-cyan-500 hover:text-white`}
                        >{page}
                    </div>
                ))}
                <div className='px-2 border border-gray-500 hover:border-white mx-2 cursor-pointer hover:bg-cyan-500 hover:text-white'>Next</div>
            </div>
        </div>
    </div>
  )
}

export default TableUser