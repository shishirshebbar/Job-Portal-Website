import React, { useState } from 'react'
import Navbar from '../structure/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_END_POINT } from '@/utilities/constants'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setsinglecompany } from '@/redux/companyslice'

function CreateCompany() {
    const navigate = useNavigate();
    const [companyname,setcompanyname] = useState();
    const dispatch = useDispatch();
    const registernewcomapny = async()=>{
        try{
            const res= await axios.post(`${COMPANY_END_POINT}/register`,
                {companyname},
                {
                    headers:{"Content-type":"application/json"},
                    withCredentials:true
                });
            if(res?.data?.success){
                dispatch(setsinglecompany(res.data.company))
                toast.success(res.data.success);
                const companyid =  res?.data?.company?._id;
                navigate(`/admin/companies/${companyid}`)
            }
        }catch(error){
            if (error.response) {
                console.log('Error Status:', error.response.status);
                console.log('Error Data:', error.response.data);
                toast.error(error.response.data.message);
            } else {
                console.log('Error Message:', error.message);
            }
        }
    }
  return (

    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto'>
            <div className='my-5'>
            <h1 className='font-bold text-2xl'>Your company name.</h1>
            <p className='text-gray-700 my-2'>Give a name for your company.</p>

            </div>
            <Label className="mt-2">Company Name</Label>
            <Input type="text" className="my-3 mx-0 border border-black" placeholder="Microsoft, Google" onChange={(e)=>setcompanyname(e.target.value)}/>
            <div className='flex items-center gap-2 my-10'>
                <Button variant="outline" className="bg-gray-200" onClick={()=>navigate("/admin/companies")} >
                    Cancel</Button>
                <Button onClick={registernewcomapny}>Continue</Button>
            </div>
        </div>


    </div>
  )
}

export default CreateCompany