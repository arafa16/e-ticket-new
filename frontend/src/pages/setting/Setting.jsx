import React from 'react'
import Responsible from '../../components/setting/Responsible.jsx';
import Status from '../../components/setting/Status.jsx';
import StatusTicket from '../../components/setting/StatusTicket.jsx';
import Type from '../../components/setting/Type.jsx';
import Layout from '../Layout.jsx';

const Setting = () => {
  return (
    <Layout>
        <div className='w-full grid grid-cols-4 gap-8 p-4'>
            <Status />
            <StatusTicket/>
            <Type />
            <Responsible />
        </div>
    </Layout>
  )
}

export default Setting