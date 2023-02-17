import React from 'react'
import { BiTimer } from "react-icons/bi";

const TableUser = () => {
  return (
    <div className='w-full px-28'>
        <div className='bg-white w-full min-h-[10rem] px-10 py-7'>
            <div className='mb-4'>
                Tabel User
            </div>
            <table className='border border-slate-500 w-full text-[12px]'>
                <thead>
                    <tr>
                        <th class="border border-slate-600 w-1/12 p-1">No</th>
                        <th class="border border-slate-600 w-4/12 p-1">Name</th>
                        <th class="border border-slate-600 w-4/12 p-1">Devisi</th>
                        <th class="border border-slate-600 w-3/12 p-1">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='hover:bg-gray-100 cursor-pointer'>
                        <td class="border border-slate-700 text-center">1</td>
                        <td class="border border-slate-700 px-4">Name</td>
                        <td class="border border-slate-700 px-4">IT</td>
                        <td class="border border-slate-700 px-4">active</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TableUser