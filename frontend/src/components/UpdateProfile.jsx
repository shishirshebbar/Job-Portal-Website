import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { API_END_POINT } from '@/utilities/constants'
import { setuser } from '@/redux/authorizedslice'
import { toast } from 'sonner'
import axios from 'axios'

const UpdateProfile = ({open,setopen})=> {
    const dispatch = useDispatch();
    const [loading,setloading]= useState(false);
    const {user}  = useSelector(store=>store.auth);
    const [input,setinput]=useState({
        fullname:user?.fullname,
        email:user?.email,
        phonenumber:user?.phonenumber,
        biography:user?.profile?.biography,
        skills:user?.profile?.skills?.map(skill=>skill),
        file :user?.profile?.resume
    })
    const changeEvent =(e)=>{
        setinput({...input,[e.target.name]:e.target.value})
    }
    const submithandler = async (e) =>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("fullname",input.fullname);
        formdata.append("email",input.email);
        formdata.append("phonenumber",input.phonenumber);
        formdata.append("biography",input.biography);
        formdata.append("skills",input.skills);
        if(input.file){
            formdata.append("file",input.file);
        }
        try{
            const res= await axios.post(`${API_END_POINT}/profile/update`,formdata,{
                headers:{
                    'Content-Type':'multipart/form-data'
                },
                withCredentials:true
            })
            if(res.data.success){
                dispatch(setuser(res.data.user))
                toast.success(res.data.message)
            }

        }catch(error){

            console.log(error);
            toast.error(error.response.data.message)
        }
        setopen(false);
        console.log(input);
    }
    const filechange = (e)=>{
        const file = e.target.files?.[0];
        setinput({...input,file})
    }
    
    
  return (
    <div>
        <Dialog open={open} onOpenChange={setopen} >
            <DialogContent className="sm:max-w-[450px]" onInteractOutside={()=>setopen(false)} >
                <DialogHeader>
                    <DialogTitle>Update Profile</DialogTitle>
                </DialogHeader>
                <form onSubmit={submithandler}>
                    <div className='grid gap-4 py-4'>
                        <div className='grid grid-cols-2 items-center gap-4'>
                        <Label htmlFor="name" >Name:</Label>
                        <Input
                        id="name"
                        name = "name"
                        type="text"
                        value={input.fullname}
                        onChange={changeEvent}
                        className="col-span-3 border border-black"
                        />
                        </div>
                        <div className='grid grid-cols-2 items-center gap-4'>
                        <Label htmlFor="name" >Email:</Label>
                        <Input
                        id="email"
                        name = "email"
                        type= "email"
                        onChange={changeEvent}
                        value={input.email}
                        className="col-span-3 border border-black"
                        />
                        </div>
                        <div className='grid grid-cols-2 items-center gap-4'>
                        <Label htmlFor="name" >Number:</Label>
                        <Input
                        id="number"
                        name = "number"
                        value={input.phonenumber}
                        onChange={changeEvent}
                        className="col-span-3 border border-black"
                        />
                        </div>
                        <div className='grid grid-cols-2 items-center gap-4'>
                        <Label htmlFor="name" >biography:</Label>
                        <Input
                        id="biography"
                        name = "biography"
                        value={input.biography}
                        onChange={changeEvent}
                        className="col-span-3 border border-black"
                        />
                        </div>
                        <div className='grid grid-cols-2 items-center gap-4'>
                        <Label htmlFor="name" >Skills:</Label>
                        <Input
                        id="skills"
                        name = "skills"
                        value={input.skills}
                        onChange={changeEvent}
                        className="col-span-3 border border-black"
                        />
                        </div>
                        <div className='grid grid-cols-2 items-center gap-4'>
                        <Label htmlFor="name" >Resume:</Label>
                        <Input
                        id="file"
                        name = "file"
                        type="file"
                        onChange={filechange}
                        accept="application/pdf"
                        className="col-span-3 border border-black"
                        />
                        </div>
                        
                    </div>
                    <DialogFooter>
                    {
                    loading?<Button className="w-full my-4"><Loader2 className='mr-2 animate-spin h-4 w-4 '/>Please wait..</Button>
                    :<Button type="submit" className="w-full my-4 ">Update</Button>
    }
                    </DialogFooter>

                </form>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default UpdateProfile