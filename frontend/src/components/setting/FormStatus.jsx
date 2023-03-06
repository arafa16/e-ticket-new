import React from 'react'

const FormStatus = (props) => {
    const {name, setName, code, setCode, handleAction, name2} = props;

    return (
        <div>
            <form onSubmit={handleAction}>
                <div className='w-full grid grid-cols-2 gap-4 text-[9pt] mb-2'>
                    <div className='grid grid-cols-1 gap-2'>
                        <p>Name</p>
                        <input 
                            className='outline-1 outline-cyan-500 border border-cyan-500 py-1 px-2'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-2'>
                        <p>Code</p>
                        <input 
                            className='outline-1 outline-cyan-500 border border-cyan-500 py-1 px-2'
                            value={code} 
                            onChange={(e)=>setCode(e.target.value)} 
                        />
                    </div>
                </div>
                <div>
                    <button type='submit' className='text-[9pt] w-full bg-cyan-500 hover:bg-cyan-400 text-white'>{name2}</button>
                </div>
            </form>
        </div>
    )
}

export default FormStatus