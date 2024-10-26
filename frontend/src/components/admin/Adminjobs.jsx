import React, { useEffect, useState } from 'react'
import Navbar from '../structure/Navbar'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import AdminJobsTable from './AdminJobsTable'
import GetAdminJobshook from '@/hooks/GetAdminJobshook'
import { setsearchjob } from '@/redux/jobslice'

function AdminJobs() {
  GetAdminJobshook();
    const [input,setinput] = useState("");
    const navigate=useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(setsearchjob(input))
    },[input])
  return (
  <div>
    <Navbar/>
    <div className='max-w-7xl mx-auto my-10'>
    <div className=' flex items-center justify-between'>
        <Input className = "w-60 border border-black text-left" placeholder = "Filter by company name or role"
        onChange={(e)=>setinput(e.target.value)}/>
        <Button onClick={()=>navigate("/admin/jobs/create")}>New Jobs</Button>
    </div>
    <AdminJobsTable/>
    </div>
  </div>
  )
}

export default AdminJobs