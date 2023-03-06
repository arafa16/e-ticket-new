import React from 'react'
import { BiCog, BiSupport, BiUser, BiDesktop} from "react-icons/bi";
import {Link} from 'react-router-dom'

const BigMenu = () => {
  return (
    <div className='bg-white w-fit shadow-xl p-4 grid grid-cols-4 gap-8 '>
        <Link to={`/ticket`}>
          <div className='grid justify-items-center w-min cursor-pointer hover:text-white hover:bg-cyan-500 hover:rounded-md px-5 py-1'>
              <BiSupport className='mb-2 text-[14pt]' />
              <p className='text-[10pt] w-max'>Help Desk</p>
          </div>
        </Link>
        <Link to={`/setting`}>
          <div className='grid justify-items-center w-min cursor-pointer hover:text-white hover:bg-cyan-500 hover:rounded-md px-5 py-1'>
              <BiCog className='mb-2 text-[14pt]' />
              <p className='text-[10pt]'>Setting</p>
          </div>
        </Link>
        <Link to={`/users`}>
          <div className='grid justify-items-center w-min cursor-pointer hover:text-white hover:bg-cyan-500 hover:rounded-md px-5 py-1'>
              <BiUser className='mb-2 text-[14pt]' />
              <p className='text-[10pt]'>Users</p>
          </div>
        </Link>
        <Link to={`/users`}>
          <div className='grid justify-items-center w-min cursor-pointer hover:text-white hover:bg-cyan-500 hover:rounded-md px-5 py-1'>
              <BiDesktop className='mb-2 text-[14pt]' />
              <p className='text-[10pt]'>Dashboard</p>
          </div>
        </Link>
    </div>
  )
}

export default BigMenu