import { setalljobs } from '@/redux/jobslice';
import { JOB_END_POINT } from '@/utilities/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function Getalljobshooks() {
  
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchalljobs = async()=>{
            try{
                const res = await axios(`${JOB_END_POINT}/get`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setalljobs(res.data.jobs));
                }

            }catch(error){
                console.log(error);
            }
        }
        fetchalljobs();

    },[])
  
}

export default Getalljobshooks