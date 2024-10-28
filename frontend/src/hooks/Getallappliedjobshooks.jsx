import { setallappliedjobs } from '@/redux/jobslice';
import { APPLICATION_END_POINT } from '@/utilities/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function Getallappliedjobshooks() {
 const dispatch  = useDispatch();
 useEffect(()=>{
    const getappliedjobs = async()=>{
        try{
            const res = await axios.get(`${APPLICATION_END_POINT}/get`,{withCredentials:true})
            if(res.data.success){
                dispatch(setallappliedjobs(res.data.application))
            }

        }catch(error){
            console.log(error);

        }
    }
    getappliedjobs();
 },[])
}

export default Getallappliedjobshooks