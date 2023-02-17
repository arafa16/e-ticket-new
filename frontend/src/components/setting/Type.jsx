import React from 'react'

const Type = () => {
  return (
    <div className='w-full bg-white rounded-md p-2'>
            <div className='flex justify-between m-4'>
                <div className='flex gap-4 items-center'>
                    <div className='text-[12pt]'>Type</div>
                </div>
                <div>
                    <button className='bg-cyan-500 hover:bg-cyan-400 text-white px-2 text-[8pt] rounded-md'>+ create</button>
                </div>
            </div>
            <hr/>
            <div className='min-h-[7rem] m-4'>
                <table className='border border-slate-500 w-full text-[12px]'>
                    <thead>
                        <tr>
                            <th class="border border-slate-600 w-1/12 p-1">No</th>
                            <th class="border border-slate-600 w-6/12 p-1">Name</th>
                            <th class="border border-slate-600 w-5/12 p-1">Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='hover:bg-gray-100 cursor-pointer' onClick={()=>alert("haiiii")}>
                            <td class="border border-slate-700 text-center">1</td>
                            <td class="border border-slate-700 px-4">active</td>
                            <td class="border border-slate-700 px-4">1</td>
                        </tr>
                        <tr className='hover:bg-gray-100 cursor-pointer' onClick={()=>alert("haiiii")}>
                            <td class="border border-slate-700 text-center">1</td>
                            <td class="border border-slate-700 px-4">active</td>
                            <td class="border border-slate-700 px-4">1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Type