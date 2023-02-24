import React, { useEffect, useState } from 'react'
import CountUser from '../../components/user/CountUser'
import TableUser from '../../components/user/TableUser'
import Layout from '../Layout'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getMe } from '../../features/authSlice'
import axios from 'axios'
import env from 'react-dotenv'
import SubUser from '../../components/navbar/SubUser'

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  //users
  const [users, setUser] = useState([]);
  const [countUsers, setCountUsers] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  useEffect(()=>{
    dispatch(getMe())
  },[dispatch]);

  useEffect(()=>{
    if(isError){
      navigate('/')
    }
  },[isError, navigate]);

  //get data user

  useEffect(()=>{
    getUsers();
  },[users, countUsers])

  const getUsers = async() => {
    const response = await axios.get(env.API_URL+'/users/'+limit+'&'+page);
    setUser(response.data.rows);
    setCountUsers(response.data.count);
  }

  useEffect(()=>{
    countUserPage();
  },[countUsers, limit]);

  const countUserPage = () => {
    const total = countUsers / limit;
    setPages(Math.ceil(total));
  }

  //______________________________________________________________________

  return (
    <Layout>
        <div className='w-full px-4'>
          <SubUser />
        </div>
        <div className='w-full px-4 grid grid-cols-4 gap-8 mb-6'>
          <CountUser name="Jumlah User" count={countUsers} />
          <CountUser name="User Aktif" count="X" />
          <CountUser name="User Tidak Aktif" count="X" />
          <CountUser name="User Mendaftar" count="X" />
        </div>
        <div className='w-full px-4'>
          <TableUser pages={pages} users={users} />
        </div>
    </Layout>
  )
}

export default User