import React, { useState } from 'react'
import Navbar from '../structure/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { COMPANY_END_POINT } from '@/utilities/constants'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'


function CompanySetup() {
    const [input,setinput] = useState({
        name:"",
        description:"",
        website:"",
        location:"",
        file:null

    });

    const [loading,setloading]  = useState(false);
    const params= useParams();
    const navigate = useNavigate();
    const eventchangehandler=(e)=>{
        setinput({...input,[e.target.name]:e.target.value});
    }
    const changefilehandler=(e)=>{
        const file = e.target.files?.[0];
        setinput({...input,file})
    }
    const submithandler=async(e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("name",input.name);
        formdata.append("description",input.description);
        formdata.append("website",input.website);
        formdata.append("location",input.location);
        if(input.file){
            formdata.append("file",input.file);
        }
        try{
            setloading(true);
            const res = await axios.put(`${COMPANY_END_POINT}/update/${params.id}`,
                formdata,{
                    headers:{
                        "Content-Type":"multipart/form-data"
                    },
                    withCredentials:true
                }
            )
            if(res.data.success){
                toast.success(res.data.message);
                navigate("/admin/companies")
            }
        }catch(error){
            console.log(error);
            toast.error(error.response.data.message)
            
        }finally{
            setloading(false)
        }
    }
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto my-10'>
            <form onSubmit={submithandler}>
                <div className='flex items-center gap-8 p-8'>
                <Button onClick={()=>navigate("/admin/companies")} variant = "outline" className="flex items-center gap-2 mx-0 text-gray-500 font-bold">
                    <ArrowLeft/>
                    <span>Back</span>
                </Button>
                <h1 className='font-bold text-2xl'>Company Setup</h1>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                    <Label className="mx-7 my-3 text-l ">Company Name</Label>
                <Input
                 type="text"
                  name="name" 
                  className="mx-7 my-4 border border-black"
                  value={input.name}
                  onChange={eventchangehandler}/>
                    </div>
                    <div>
                    <Label className="mx-7 my-3 text-l ">Description</Label>
                <Input
                 type="text"
                  name="description" 
                  className="mx-7 my-4 border border-black"
                  value={input.description}
                  onChange={eventchangehandler}/>
                    </div>
                    <div>
                    <Label className="mx-7 my-3 text-l ">Website</Label>
                <Input
                 type="text"
                  name="website" 
                  className="mx-7 my-4 border border-black"
                  value={input.website}
                  onChange={eventchangehandler}/>
                    </div>
                    <div>
                    <Label className="mx-7 my-3 text-l ">Location</Label>
                <Input
                 type="text"
                  name="location" 
                  className="mx-7 my-4 border border-black"
                  value={input.location}
                  onChange={eventchangehandler}/>
                    </div>
                    <div>
                    <Label className="mx-7 my-3 text-l ">Logo</Label>
                <Input
                 type="file"
                   
                  className="mx-7 my-4 border border-black"
                  accept="image/*"
                  onChange={changefilehandler}
                  
                  />
                    </div>
                </div>
                {
                loading?<Button className="w-full my-4"><Loader2 className='mr-2 animate-spin h-4 w-4 '/>Please wait..</Button>
                :<Button type="submit" className="w-full my-4 ">Update</Button>
                }
                
                </form>
        </div>
    </div>
  )
}

export default CompanySetup