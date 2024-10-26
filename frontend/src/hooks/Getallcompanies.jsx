import { setcompanies } from '@/redux/companyslice';

import { COMPANY_END_POINT } from '@/utilities/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const  Getallcompanies=()=> {
  
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchcompanies = async()=>{
            try{
                const res = await axios.get(`${COMPANY_END_POINT}/get`,{withCredentials:true});
                console.log("called");
                if(res.data.success){
                    dispatch(setcompanies(res.data.companies));
                }

            }catch(error){
                console.log(error);
            }
        }
        fetchcompanies();

    },[])
  
}

export default Getallcompanies