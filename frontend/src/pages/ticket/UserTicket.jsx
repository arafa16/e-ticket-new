import React from 'react'
import SubMenu from '../../components/navbar/SubMenu'
import CountTicket from '../../components/ticket/CountTicket'
import Layout from '../Layout'

import TableTicket from '../../components/ticket/TableTicket';

const UserTicket = () => {
  return (
    <Layout>
        <div className='w-full px-28'>
            <SubMenu>
                <div className='hover:bg-cyan-500 hover:text-white cursor-pointer px-4'>Ticket</div>
                <div className='hover:bg-cyan-500 hover:text-white cursor-pointer px-4'>Admin Ticket</div>
            </SubMenu>
        </div>
        <div className='w-full px-28 grid grid-cols-4 gap-8 mb-6'>
            <CountTicket name="Jumlah Ticket" count="200" />
            <CountTicket name="Ticket Di Proses" count="0" />
            <CountTicket name="Ticket Hold" count="2" />
            <CountTicket name="Ticket Selesai" count="168" />
        </div>
        <div className='pb-6'>
            <TableTicket name="Ticket Baru" />
        </div>
        <div className='pb-6'>
            <TableTicket name="Ticket Hold" />
        </div>
        <div className='pb-6'>
            <TableTicket name="Ticket Selesai" />
        </div>
    </Layout>
  )
}

export default UserTicket