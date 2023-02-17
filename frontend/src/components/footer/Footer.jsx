import React from 'react'
import Logo from '../../attributs/logo.png';

const Footer = () => {
  return (
    <div className='w-[98%] bg-white p-4 rounded-t-xl'>
        <div className='p-4 flex justify-end'>
            <img className='h-16' src={Logo} alt="" />
        </div>
    </div>
  )
}

export default Footer