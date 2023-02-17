import React from 'react'

const NotFound = () => {
  return (
    <div className='w-full h-screen bg-gray-200 flex justify-center items-center'>
        <div className='text-center text-gray-700'>
            <p className='text-[40pt] '>404 | NOT FOUND</p>
            <button className='bg-gray-700 text-white px-4 mt-4 rounded-md'>back to start</button>
        </div>
    </div>
  )
}

export default NotFound