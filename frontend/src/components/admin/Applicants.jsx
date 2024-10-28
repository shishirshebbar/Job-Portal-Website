import React, { useEffect } from 'react'
import Navbar from '../structure/Navbar'
import ApplicantsTable from './ApplicantsTable'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { APPLICATION_END_POINT } from '@/utilities/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setallapplicants } from '@/redux/applicationslice';

function Applicants() {
    const params = useParams();
    const dispatch = useDispatch();
    const {applicants} = useSelector(store=>store.application);
    useEffect(()=>{
        const getapplicants = async()=>{
            try{
                const res = await axios.get(`${APPLICATION_END_POINT}/${params.id}/applicants`,
                    {withCredentials:true});
                    console.log(res.data)
                    dispatch(setallapplicants(res.data.job))
                
                
            }catch(error){
                console.log(error);
            }
        }
        getapplicants();
    },[]);
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto w-full'>
            <h1 className='font-semibold text-xl'>Applicants {applicants?.applications?.length}</h1>
            <ApplicantsTable/>
        </div>


    </div>
  )
}

export default Applicants