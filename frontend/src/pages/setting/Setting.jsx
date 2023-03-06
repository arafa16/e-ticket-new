import axios from 'axios';
import React, {useState, useEffect} from 'react'
import env from 'react-dotenv';
import Responsible from '../../components/setting/Responsible.jsx';
import Status from '../../components/setting/Status.jsx';
import StatusTicket from '../../components/setting/StatusTicket.jsx';
import Type from '../../components/setting/Type.jsx';
import Layout from '../Layout.jsx';

const Setting = () => {

  return (
    <Layout>
        <div className='w-full grid grid-cols-3 gap-8 p-4'>
          <div>
            <Status />
          </div>
          <div>
            <StatusTicket
            />
          </div>
          <div>
            <Type />
          </div>
          <div>
            <Responsible />
          </div>
        </div>
    </Layout>
  )
}

export default Setting