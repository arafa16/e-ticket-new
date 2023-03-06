import React from 'react'

const CountUser = (props) => {
    const {name, count} = props;
  return (
    <div className='bg-white min-h-[4rem] rounded-md grid grid-cols-2 items-center gap-1 px-4'>
        <div className='text-[10pt] flex justify-center'>
            {name}
        </div>
        <div className='text-[12pt] flex justify-center'>
            {count}
        </div>
    </div>
  )
}

export default CountUser