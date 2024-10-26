import { setsinglecompany } from '@/redux/companyslice';

import { COMPANY_END_POINT } from '@/utilities/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const  Getcompanybyidhook=(companyid)=> {
  
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchsinglecomapny = async()=>{
            try{
                const res = await axios.get(`${COMPANY_END_POINT}/get/${companyid}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setsinglecompany(res.data.company));
                }

            }catch(error){
                console.log(error);
            }
        }
        fetchsinglecomapny();

    },[companyid,dispatch])
  
}

export default Getcompanybyidhook