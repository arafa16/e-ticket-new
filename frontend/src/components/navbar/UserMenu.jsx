import React from 'react'
import { useSelector } from 'react-redux';

const UserMenu = (props) => {
  const {logout} = props;
  const { user } = useSelector((state) => state.auth);
  
  return (
    <div className='bg-white grid grid-cols-1 gap-2  py-2 text-[10pt] shadow-xl'>
        <div className='hover:bg-cyan-500 w-full px-6 cursor-pointer hover:text-white'>{user && user.name}</div>
        <div className='hover:bg-cyan-500 w-full px-6 cursor-pointer hover:text-white'>Change password</div>
        <div className='hover:bg-cyan-500 w-full px-6 cursor-pointer hover:text-white' onClick={logout}>Log out</div>
    </div>
  )
}

export default UserMenu