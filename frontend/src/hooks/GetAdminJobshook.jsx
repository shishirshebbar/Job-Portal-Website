import { setalladminjobs} from '@/redux/jobslice';
import { JOB_END_POINT } from '@/utilities/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function GetAdminJobshook() {
  
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchalljobs = async()=>{
            try{
                const res = await axios.get(`${JOB_END_POINT}/getadminjobs`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setalladminjobs(res.data.jobs));
                }

            }catch(error){
                console.log(error);
            }
        }
        fetchalljobs();

    },[])
  
}

export default GetAdminJobshook