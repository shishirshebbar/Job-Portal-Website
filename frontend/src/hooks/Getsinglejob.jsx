import {  setsinglejob } from '@/redux/jobslice';
import { JOB_END_POINT } from '@/utilities/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function Getsinglejob(jobid) {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchsinglejob = async()=>{
            try{
                const res = await axios.get(`${JOB_END_POINT}/get/${jobid}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setsinglejob(res.data.jobs));
                }

            }catch(error){
                console.log(error);
            }
        }
        fetchsinglejob();

    },[])
}

export default Getsinglejob