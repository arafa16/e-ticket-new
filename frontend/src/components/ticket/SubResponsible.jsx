import axios from 'axios';
import React, {useEffect, useState} from 'react'
import env from 'react-dotenv';


const SubResponsible = (props) => {
  const {id, idActive, responsible, update} = props;
  

  const handleAction = async(idResponsible) => {
    update(idResponsible)
  }

  return (
    <div className={`absolute shadow-2xl bg-white z-10 py-1 grid grid-cols-1 gap-2 rounded-md ${idActive === id ? '' : 'hidden'}`}>
      {responsible.map((res, index)=>(
        <div key={index} className='w-full hover:bg-cyan-500 hover:text-white px-3 ' onClick={()=>handleAction(res.uuid)} >{res.user.name}</div>
      ))}
    </div>
  )
}

export default SubResponsible