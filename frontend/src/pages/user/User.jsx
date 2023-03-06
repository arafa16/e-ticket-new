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
import FormUser from '../../components/user/FormUser'
import { BiXCircle } from "react-icons/bi";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  //status
  const [status,  setStatus ] = useState([]);
  const [form, setForm] = useState(false);

  //users
  const [datas, setDatas] = useState([]);
  const [countUsers, setCountUsers] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  //users2
  const [code2, setCode2] = useState(2);
  const [datas2, setDatas2] = useState([]);
  const [countUsers2, setCountUsers2] = useState(0);
  const [limit2, setLimit2] = useState(10);
  const [page2, setPage2] = useState(1);
  const [pages2, setPages2] = useState(0);

  //users3
  const [code3, setCode3] = useState(1);
  const [datas3, setDatas3] = useState([]);
  const [countUsers3, setCountUsers3] = useState(0);
  const [limit3, setLimit3] = useState(10);
  const [page3, setPage3] = useState(1);
  const [pages3, setPages3] = useState(0);

  useEffect(()=>{
      dispatch(getMe());
  },[dispatch]);

  useEffect(()=>{
      if(isError){
          navigate("/")
      }
  },[isError, navigate]);

  //get status

  useEffect(()=>{
    getStatus();
  },[user])

  const getStatus = async() => {
    const response = await axios.get(process.env.REACT_APP_API_URL+'/status');
    setStatus(response.data);
  }

  //get data user

  useEffect(()=>{
    getUsers();
  },[page]);

  const getUsers = async() => {
    const response = await axios.get(process.env.REACT_APP_API_URL+'/users/'+limit+'&'+page);
    setDatas(response.data.rows);
    setCountUsers(response.data.count);
  }

  useEffect(()=>{
    getUsers2();
  },[]);

  const getUsers2 = async() => {
    const response = await axios.get(process.env.REACT_APP_API_URL+'/users2/'+code2+'&'+limit2+'&'+page2);
    setDatas2(response.data.rows);
    setCountUsers2(response.data.count);
  }

  useEffect(()=>{
    getUsers3();
  },[]);

  const getUsers3 = async() => {
    const response = await axios.get(process.env.REACT_APP_API_URL+'/users2/'+code3+'&'+limit3+'&'+page3);
    setDatas3(response.data.rows);
    setCountUsers3(response.data.count);
  }

  useEffect(()=>{
    countUserPage();
  },[countUsers, limit]);

  const countUserPage = () => {
    const total = countUsers / limit;
    setPages(Math.ceil(total));
  }

  const nextPage = () => {
    const count = page + 1;
    if(count <= pages){
      setPage(count);
    }
  }

  const prevPage = () => {
    const count = page - 1;
    if(count >= 1){
      setPage(count);
    }
  }

  const clickPage = (page) => {
    setPage(page)
  }

  //______________________________________________________________________

  const handleForm = () =>{
    setForm(!form)
  }

  const handleUser = (id) => {
    navigate(`/users/${id}`)
  }

  return (
    <Layout>
        <div className='w-full px-4'>
          <SubUser />
        </div>
        <div className='w-full px-4 grid grid-cols-4 gap-8 mb-6'>
          <CountUser name="Jumlah User" count={countUsers} />
          <CountUser name="User Aktif" count={countUsers2} />
          <CountUser name="User Tidak Aktif" count={countUsers3} />
          <div className='w-full flex items-end justify-end'>
            <div className={`px-2 bg-white flex justify-center py-1 ${form ? 'hidden' : ''}`}>
              <button className={`bg-white hover:bg-cyan-500 hover:text-white px-2 text-[10pt] rounded-sm `} onClick={()=>setForm(true)}>
                + create user
              </button>
            </div>
            <BiXCircle className={`text-[24px] cursor-pointer text-white animate-bounce hover:animate-pulse ${form ? '' : 'hidden'}`} onClick={()=>setForm(false)} />
          </div>
        </div>
        <div className={`w-full flex justify-end px-4 mb-6 ${!form ? 'hidden' : ''}`}>
          <div className='w-1/2'>
            <FormUser
            getUsers={getUsers}
            statuses={status} 
            />
          </div>
        </div>
        <div className='w-full px-4 pb-6'>
          <TableUser 
            pageNow={page}
            pages={pages} 
            datas={datas}
            handleUser={handleUser}
            clickPage={clickPage}
            nextPage={nextPage} 
            prevPage={prevPage}
            />
        </div>
    </Layout>
  )
}

export default User