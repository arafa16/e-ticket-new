import React, {useState, useEffect} from 'react'
import Layout from '../Layout.jsx'
import { useParams, useNavigate  } from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../features/authSlice';
import DataUser from '../../components/user/DataUser.jsx';
import Privilege from '../../components/user/Privilege.jsx';


const UserById = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError} = useSelector((state) => state.auth);
    const {id} = useParams();


    

    useEffect(()=>{
        dispatch(getMe());
    },[dispatch]);
  
    useEffect(()=>{
        if(isError){
            navigate("/")
        }
    },[isError, navigate]);





    
    return (
        <Layout>
            <div className='w-full flex p-4'>
                <div className='w-1/4 mr-4'>
                    <DataUser
                        id={id}
                    />
                </div>
                <div className='w-3/4'>
                    <Privilege />
                </div>
            </div>
        </Layout>
    )
}

export default UserById