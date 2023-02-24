import React, { useEffect, useState } from 'react'
import SubMenu from '../../components/navbar/SubMenu'
import CountTicket from '../../components/ticket/CountTicket'
import Layout from '../Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getMe } from '../../features/authSlice'; 
import axios from 'axios';
import env from 'react-dotenv';
import Moment from 'react-moment';
import moment from 'moment';
import FormTicket from '../../components/ticket/FormTicket';
import { BiXCircle } from "react-icons/bi";
import FormAdmin from '../../components/ticket/FormAdmin';
import TableAdmin from '../../components/ticket/TableAdmin';

const AdminTicket = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);

    //get clear tiket
    const [listClear, setListClear] = useState(0); 
    const [countClear, setCountClear] = useState(0);
    const [clearTickets, setClearTickets] = useState([]);
    const [limitClear, setLimitClear] = useState(10);
    const [pageClear, setPageClear] = useState(1);
    //_____________________________________________________//

    //get new tiket
    const [listNew, setListNew] = useState(0); 
    const [countNew, setCountNew] = useState(0);
    const [newTickets, setNewTickets] = useState([]);
    const [limitNew, setLimitNew] = useState(10);
    const [pageNew, setPageNew] = useState(1);
    //_____________________________________________________//

    const [ticket, setTicket] = useState(false);
    const {user} = useSelector((state) => state.auth);
    const date = new Date();

    useEffect(()=>{
        dispatch(getMe());
    },[dispatch]);

    useEffect(()=>{
        if(isError){
            navigate("/")
        }
    },[isError, navigate]);

    useEffect(()=>{
        getMe();
    },[user]);

    

    //data ticket yang clear

    useEffect(()=>{
        getClearTickets();
    },[limitClear, pageClear])

    const getClearTickets = async() => {
        const response = await axios.get(env.API_URL+'/clearTickets/'+limitClear+'&'+pageClear);
        setClearTickets(response.data.rows.reverse())
        setCountClear(response.data.count)
    }

    useEffect(()=>{
        countClearPages()
    },[countClear, limitClear])

    const countClearPages = () => {
        const totalPage = countClear / limitClear;
        setListClear(Math.ceil(totalPage));
    }

    const nextPageClear = () => {
        const page = pageClear + 1;
        if(page <= listClear){
            setPageClear(page);
        }
    }

    const prevPageClear = () => {
        const page = pageClear - 1;
        if(page >= 1){
            setPageClear(page);
        }
    }

    const clickPageClear = (page) => {
        setPageClear(page)
    }

    //---------------------------------------------------//

    //New Ticket ____________________________________________//

    useEffect(()=>{
        getNewTickets();
    },[limitNew, pageNew])

    const getNewTickets = async() => {
        const response = await axios.get(env.API_URL+'/newTickets/'+limitNew+'&'+pageNew);
        setNewTickets(response.data.rows.reverse());
        setCountNew(response.data.count);
    }

    useEffect(()=>{
        countNewPages()
    },[countNew, limitNew])

    const countNewPages = () => {
        const totalPage = countNew / limitNew;
        setListNew(Math.ceil(totalPage));
    }

    const nextPageNew = () => {
        const page = pageNew + 1;
        if(page <= listNew){
            setPageNew(page);
        }
    }

    const prevPageNew = () => {
        const page = pageNew - 1;
        if(page >= 1){
            setPageNew(page);
        }
    }

    const clickPageNew = (page) => {
        setPageNew(page)
    }

    //__________________________________________________________//

    const updateStatus = async(idStatus,idActive) => {
        await axios.put(env.API_URL+'/statusTickets/'+idActive,{
            endDate: moment(date).format('YYYY-MM-DD HH:mm:ss'),
            statusTicketId: idStatus            
        });
        getNewTickets();
        getClearTickets();
    }

    const updateResponsible = async(id, idResponsible) => {
        await axios.put(env.API_URL+'/responseTickets/'+idResponsible,{
            id: id         
        });
        getNewTickets();
        getClearTickets();
    }

    const handleForm = () =>{
        setTicket(!ticket);
    }
    
  return (
    <Layout>
        <div className='w-full px-4'>
            <SubMenu />
        </div>
        <div className='w-full px-4 grid grid-cols-3 gap-8 mb-6'>
            <CountTicket name="Ticket Baru" count={countNew} />
            <CountTicket name="Ticket Selesai" count={countClear} />
            <div className='flex items-end justify-end'>
                <div className={`${!ticket ? 'bg-white' : ''}  px-2 flex justify-center py-1`}>
                    <button className={` px-2 text-[10pt] hover:bg-cyan-500 hover:text-white`} onClick={()=>handleForm()}>
                        {!ticket ? 
                            '+ create ticket' 
                            : <BiXCircle className='text-[18px] text-white' />}
                    </button>
                </div>
            </div>
        </div>
        <div className={`w-full px-4 pb-6 ${!ticket ? 'hidden' : ''}`}>
            <FormAdmin user={user} newTicket={getNewTickets} clearTicket={getClearTickets} setTicket={setTicket} />
        </div>
        <div className='w-full px-4 pb-6'>
            <TableAdmin 
                updateResponsible={updateResponsible} 
                updateStatus={updateStatus} 
                pages={listNew}
                pageNow={pageNew} 
                tickets={newTickets}
                nextPage={nextPageNew} 
                prevPage={prevPageNew}
                clickPage={clickPageNew}
                name="Ticket Baru" 
            />
        </div>
        <div className='w-full px-4 pb-6'>
            <TableAdmin 
                updateResponsible={updateResponsible} 
                updateStatus={updateStatus} 
                pages={listClear}
                pageNow={pageClear}
                tickets={clearTickets}
                nextPage={nextPageClear} 
                prevPage={prevPageClear}
                clickPage={clickPageClear}
                name="Ticket Selesai" 
            />
        </div>
    </Layout>
  )
}

export default AdminTicket