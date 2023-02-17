import React from 'react'

const CountTicket = (props) => {
    const {name, count} = props;
  return (
    <div className='bg-white min-h-[7rem] rounded-md grid grid-cols-1 gap-1 p-4'>
        <div className='text-center text-[12pt]'>
            {name}
        </div>
        <div className='text-center text-[20pt]'>
            {count}
        </div>
    </div>
  )
}

export default CountTicket