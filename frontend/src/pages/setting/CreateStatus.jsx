import React, {useState} from 'react';
import Layout from '../Layout.jsx';

const CreateStatus = ({Children}) => {
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    }

    return (
        <Layout>
            <div className='w-full bg-white m-4'>
                <div className='flex justify-between m-4'>
                    <div className='flex gap-4 items-center'>
                        <div>Setting</div>
                        <div>|</div>
                        <div className='text-[10pt]'>Create Status</div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <button className={`bg-green-500 hover:bg-green-400 text-white px-2 text-[10pt] rounded-md ${edit ? 'hidden' : ''}`} onClick={()=>handleEdit()}>
                            edit
                        </button>
                        <button className={`bg-blue-500 hover:bg-blue-400 text-white px-2 text-[10pt] rounded-md ${!edit ? 'hidden' : ''}`} onClick={()=>handleEdit()}>
                            save
                        </button>
                    </div>
                </div>
                <hr/>
                <div className='min-h-[10rem] m-4'>
                    <table className='border border-slate-500 w-full text-[12px]'>
                        <thead>
                            <tr>
                                <th class="border border-slate-600 w-1/12 p-1">No</th>
                                <th class="border border-slate-600 w-6/12 p-1">Name</th>
                                <th class="border border-slate-600 w-5/12 p-1">Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='cursor-pointer'>
                                <td class="border border-slate-700 text-center">
                                    <p>1</p>
                                </td>
                                <td class="border border-slate-700">
                                    <p className={`${edit ? 'hidden' : ''} text-center`}>active</p>
                                    <input className={`w-full outline-none bg-gray-100 ${edit ? '' : 'hidden'}`} value="active"/>
                                </td>
                                <td class="border border-slate-700 ">
                                    <p className={`${edit ? 'hidden' : ''} text-center`}>1</p>
                                    <input className={`w-full outline-none bg-gray-100 ${edit ? '' : 'hidden'}`} value="1"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default CreateStatus