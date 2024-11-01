import React, { useEffect, useState } from 'react'
import Navbar from '../structure/Navbar'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import CompanyTable from './CompanyTable'
import { useNavigate } from 'react-router-dom'
import Getallcompanies from '@/hooks/Getallcompanies'
import { useDispatch } from 'react-redux'
import { setsearchcompany } from '@/redux/companyslice'

function Companies() {
  Getallcompanies();
    const [input,setinput] = useState("");
    const navigate=useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(setsearchcompany(input))
    },[input])
  return (
  <div>
    <Navbar/>
    <div className='max-w-7xl mx-auto my-10'>
    <div className=' flex items-center justify-between'>
        <Input className = "w-fit border border-black text-center" placeholder = "Filter by company name"
        onChange={(e)=>setinput(e.target.value)}/>
        <Button onClick={()=>navigate("/admin/companies/create")}>New Company</Button>
    </div>
    <CompanyTable/>
    </div>
  </div>
  )
}

export default Companies