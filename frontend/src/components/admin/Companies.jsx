import React from 'react'
import Navbar from '../structure/Navbar'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import CompanyTable from './CompanyTable'
import { useNavigate } from 'react-router-dom'

function Companies() {
    const navigate=useNavigate();
  return (
  <div>
    <Navbar/>
    <div className='max-w-7xl mx-auto my-10'>
    <div className=' flex items-center justify-between'>
        <Input className = "w-fit border border-black text-center" placeholder = "Filter by company name"/>
        <Button onClick={()=>navigate("/admin/companies/create")}>New Company</Button>
    </div>
    <CompanyTable/>
    </div>
  </div>
  )
}

export default Companies