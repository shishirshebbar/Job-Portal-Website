import { setalljobs } from '@/redux/jobslice';
import { JOB_END_POINT } from '@/utilities/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Getalljobshooks() {
  
    const dispatch = useDispatch();
    const {searchrequest} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchalljobs = async()=>{
            try{
                const res = await axios.get(`${JOB_END_POINT}/get?keyword=${searchrequest}`,{withCredentials:true});
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