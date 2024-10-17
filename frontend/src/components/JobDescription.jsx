import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import Getsinglejob from '@/hooks/Getsinglejob';
import { APPLICATION_END_POINT, JOB_END_POINT } from '@/utilities/constants';
import { setsinglejob } from '@/redux/jobslice';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
function JobDescription() {
    const {singlejob} = useSelector(store=>store.job);
     const {user} = useSelector(store=>store.auth);
     const ifappliedinitially=singlejob?.applications?.some(application=>application.applicant==user?._id)||false;
    const [ifapplied,setifapplied] = useState(ifappliedinitially);
    console.log("checking state",ifapplied)
     const params = useParams();
    const jobid = params.id;
    const dispatch= useDispatch();
    
   
    const applyforjob=async()=>{
        try{
            const res = await axios(`${APPLICATION_END_POINT}/apply/${jobid}`,{withCredentials:true});
            if(res.data.success){
                setifapplied(true);
                const updatesinglejob= {...singlejob,applications:[...singlejob.applications,{applicant:user?._id}]}
                dispatch(setsinglejob(updatesinglejob));
                toast.success(res.data.message);
            }

        }
        catch(error){
            console.log(error);
            toast.error(error.response.data.message)
        }
    }
    
   
    useEffect(()=>{
        const fetchsinglejob = async()=>{
            try{
                const res = await axios(`${JOB_END_POINT}/get/${jobid}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setsinglejob(res.data.job));
                    setifapplied(res.data.job.applications.some(application=>application.applicant==user?._id))
                }

            }catch(error){
                console.log(error);
            }
        }
        fetchsinglejob();

    },[jobid,dispatch,user?._id])
  return (
    <div className='max-w-7xl mx-auto my-10'>
        <div className='flex items-center justify-between'>
            <div>
        <h2 className='font-bold text-3xl '>{singlejob?.title}</h2>
            
            <div className='flex items-center gap-3 mt-4'>
                <Badge className={'text-red-900 font-bold'} variant="primary">{singlejob?.position} Positions</Badge>
                <Badge className={'text-blue-900 font-bold'}  variant="primary">{singlejob?.jobtype}</Badge>
                <Badge className={'text-violet-900 font-bold'}  variant="primary">{singlejob?.salary} LPA</Badge>
            </div>
            </div>
            <Button 
            onClick={ifapplied?null:applyforjob}
            disabled={ifapplied}
            className={`rouded-lg ${ifapplied?'bg-gray-500 cursor-not-allowed':'bg-purple-900 hover:bg-purple-300'}`}>
                {ifapplied?"Already applied":"Apply Now"}</Button>
            </div> 
            <h1 className='border-b-2 border-b-gray-500 font-medium py-4'>Job Description</h1>  
            <div >
            <h1 className='font-bold my-1 py-2'>Role:<span className='pl-1 font-normal text-gray-500'>{singlejob?.title}</span>
            
            </h1>
            <h1 className='font-bold my-1 py-2'>Location:<span className='pl-1 font-normal text-gray-500'>{singlejob?.location}</span>
            
            </h1>
            <h1 className='font-bold my-1 py-2'>Job Description:<span className='pl-1 font-normal text-gray-500'>{singlejob?.description}</span>
            
            </h1>
            <h1 className='font-bold my-1 py-2'>Experience:<span className='pl-1 font-normal text-gray-500'>{singlejob?.experiencelevel} years</span>
            
            </h1>
            <h1 className='font-bold my-1 py-2'>Expected Salary:<span className='pl-1 font-normal text-gray-500'>{singlejob?.salary} LPA</span>
            
            </h1>
            <h1 className='font-bold my-1 py-2'>Applicants:<span className='pl-1 font-normal text-gray-500'>{singlejob?.applications?.length}</span>
            
            </h1>
            <h1 className='font-bold my-1 py-2'>Posted Date:<span className='pl-1 font-normal text-gray-500'>{singlejob?.createdAt ? singlejob.createdAt.split("T")[0] : "Date not available"}
            </span>
            
            </h1>

            </div>     
    </div>
  )
}

export default JobDescription