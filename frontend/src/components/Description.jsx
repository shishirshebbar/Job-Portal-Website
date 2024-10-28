import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setsearchrequest } from '@/redux/jobslice';

function Description() {
  const [request,setrequest] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const searchhandler  = ()=>{
    dispatch(setsearchrequest(request))
    navigate("/browse")
  }

  return (

    <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
        <span className='px-4 py-2 rounded-full bg-gray-100 text-black font-medium'>No.1 Job Finding Website</span>
        <h1 className='text-3xl font-bold'>Search,Refer & Get Your Job</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        <div className='flex w-[40%] shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
            <input
            type="text"
            onChange={(e)=>setrequest(e.target.value)}
            placeholder='Find your job'
            className='outline-none border-none w-full'/>
            <Button onClick={searchhandler} className="rounded-r-full">
                <Search className='h-9'/>
            </Button>
        </div>
    
    </div></div>
  )
}

export default Description