import React from 'react'

const UserMenu = () => {
  return (
    <div className='bg-white grid grid-cols-1 gap-2 px-6 py-2 text-[10pt] shadow-xl'>
        <div>User Name</div>
        <div>Change password</div>
        <div>Log out</div>
    </div>
  )
}

export default UserMenu