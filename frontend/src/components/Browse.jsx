import React, { useEffect } from 'react'
import Navbar from './structure/Navbar'
import Job from './Job'
import { useDispatch, useSelector } from 'react-redux';
import store from '@/redux/store';
import { setsearchrequest } from '@/redux/jobslice';
import Getalljobshooks from '@/hooks/Getalljobshooks';


function Browse() {
    Getalljobshooks()
    const {alljobs} = useSelector(store=>store.job);
    const dispatch = useDispatch();
    useEffect(()=>{
        return ()=>{
            dispatch(setsearchrequest(""));
        }
    },[])
  return (
    
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='font-semibold text-xl  my-2'>({alljobs.length}) Open Jobs</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                alljobs.map((job)=>{
                    return (
                        <Job key={job._id} job={job}/>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Browse