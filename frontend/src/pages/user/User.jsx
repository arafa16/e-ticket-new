import React from 'react'
import SubMenu from '../../components/navbar/SubMenu'
import CountUser from '../../components/user/CountUser'
import TableUser from '../../components/user/TableUser'
import Layout from '../Layout'

const User = () => {
  return (
    <Layout>
        <div className='w-full px-28'>
          <SubMenu>
              <div className='hover:bg-cyan-500 hover:text-white cursor-pointer px-4'>Ticket</div>
              <div className='hover:bg-cyan-500 hover:text-white cursor-pointer px-4'>Admin Ticket</div>
          </SubMenu>
        </div>
        <div className='w-full px-28 grid grid-cols-4 gap-8 mb-6'>
          <CountUser name="Jumlah User" count="9" />
          <CountUser name="User Aktif" count="200" />
          <CountUser name="User Tidak Aktif" count="21" />
          <CountUser name="User Mendaftar" count="5" />
        </div>
        <div>
          <TableUser />
        </div>
    </Layout>
  )
}

export default User