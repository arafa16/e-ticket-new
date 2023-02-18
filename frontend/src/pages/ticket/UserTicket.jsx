import React, { useEffect, useState } from 'react'
import SubMenu from '../../components/navbar/SubMenu'
import CountTicket from '../../components/ticket/CountTicket'
import Layout from '../Layout';
import TableTicket from '../../components/ticket/TableTicket';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../features/authSlice'; 
import axios from 'axios';
import env from 'react-dotenv';


const UserTicket = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);
    const [tickets, setTickets] = useState([]);

    useEffect(()=>{
        dispatch(getMe());
    },[dispatch]);

    useEffect(()=>{
        if(isError){
            navigate("/")
        }
    },[isError, navigate]);

    useEffect(()=>{
        getTickets();
    },[])

    const getTickets = async() => {
        const response = await axios.get(env.API_URL+'/tickets');
        setTickets(response.data);
    }

    const updateStatus = () => {
        alert("update status");
    }
    
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
            <TableTicket updateStatus={updateStatus} tickets={tickets} name="Ticket Baru" />
        </div>
        {/* <div className='pb-6'>
            <TableTicket name="Ticket Hold" />
        </div>
        <div className='pb-6'>
            <TableTicket name="Ticket Selesai" />
        </div> */}
    </Layout>
  )
}

export default UserTicket