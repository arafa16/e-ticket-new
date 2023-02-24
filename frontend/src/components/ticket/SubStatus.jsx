
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import env from 'react-dotenv';


const SubStatus = (props) => {
  const {id, idActive, status, update} = props;
  

  const handleAction = async(idStatus) => {
    update(idStatus)
  }

  return (
    <div className={`absolute bg-white w-full z-10 py-1 grid grid-cols-1 gap-2 rounded-md shadow-2xl ${idActive === id ? '' : 'hidden'}`}>
      {status.map((status, index)=>(
        <div key={index} className='w-full hover:bg-cyan-500 hover:text-white px-3' onClick={()=>handleAction(status.uuid)}>{status.name}</div>
      ))}
    </div>
    
  )
}

export default SubStatus