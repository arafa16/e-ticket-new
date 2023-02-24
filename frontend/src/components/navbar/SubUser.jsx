import React from 'react'
import { Link } from 'react-router-dom'

const SubUser = () => {
  return (
    <div>
        <div className=' w-fit bg-white flex px-8 py-1 text-[10pt] my-6'>
          <Link to="/users">
              <div className='hover:bg-cyan-500 hover:text-white cursor-pointer px-10'>Data User</div>
          </Link>
        </div>
    </div>
  )
}

export default SubUser