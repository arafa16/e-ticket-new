import React from 'react'

const SubStatus = (props) => {
    const {status} = props;
  return (
    <div className={`absolute bg-white z-10 py-1 grid grid-cols-1 gap-2 rounded-md ${status ? '' : 'hidden'}`}>
        <div className='w-full hover:bg-cyan-500 hover:text-white px-3'>Pengajuan</div>
        <div className='w-full hover:bg-cyan-500 hover:text-white px-3'>Proses</div>
        <div className='w-full hover:bg-cyan-500 hover:text-white px-3'>Hold</div>
        <div className='w-full hover:bg-cyan-500 hover:text-white px-3'>Selesai</div>
    </div>
  )
}

export default SubStatus