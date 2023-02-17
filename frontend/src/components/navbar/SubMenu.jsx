import React from 'react'

const SubMenu = ({children}) => {
  return (
    <div>
        <div className=' w-fit bg-white px-6 flex gap-12 py-1 text-[10pt] my-6'>
            {children}
        </div>
    </div>
  )
}

export default SubMenu