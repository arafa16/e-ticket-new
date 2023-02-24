import React from 'react'
import { Link } from 'react-router-dom'

const SubMenu = () => {
  return (
    <div>
        <div className=' w-fit bg-white flex px-8 py-1 text-[10pt] my-6'>
          <Link to="/ticket">
              <div className='hover:bg-cyan-500 hover:text-white cursor-pointer px-10'>Ticket</div>
          </Link>
          <Link to="/adminTicket">
              <div className='hover:bg-cyan-500 hover:text-white cursor-pointer px-10'>Admin Ticket</div>
          </Link>
        </div>
    </div>
  )
}

export default SubMenu