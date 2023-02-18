
import React, {useEffect, useState} from 'react'


const SubStatus = (props) => {
  const {id, idActive, status} = props;
  

  const handleAction = (idNew) => {
    alert(idNew)
  }

  return (
    <div className={`absolute bg-white z-10 py-1 grid grid-cols-1 gap-2 rounded-md ${idActive === id ? '' : 'hidden'}`}>
      {status.map((status, index)=>(
        <div key={index} className='w-full hover:bg-cyan-500 hover:text-white px-3' onClick={()=>handleAction(idActive)}>Pengajuan</div>
      ))}
    </div>
    
  )
}

export default SubStatus