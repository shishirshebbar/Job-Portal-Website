import React, { useState } from 'react'
import Navbar from './structure/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'

import logo from '../assets/logo.jpg';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import Appliedjobs from './Appliedjobs';
import UpdateProfile from './UpdateProfile';
import { useSelector } from 'react-redux';
import Getallappliedjobshooks from '@/hooks/Getallappliedjobshooks';

// const skillsarray = ["html","css","python","javascript","java","c++"]

function ViewProfile() {
    const hasresume =true;
    Getallappliedjobshooks();

    const [open,setopen] = useState(false);
    const {user} = useSelector(store=>store.auth);
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto my-5 p-8 bg-white border border-gray-500 rounded-2xl'>
        <div className='flex justify-between'>
        <div className='flex items-center gap-8'>        
            <Avatar className="h-24 w-24">
            <AvatarImage src={user?.profile?.profilephoto} alt="profile"/>
        </Avatar>    
        <div>
        <h1 className='font-semibold text-xl'>{user?.fullname}</h1>
            <p>{user?.profile?.biography}</p>
            </div>
            </div>
            <Button onClick={()=>setopen(true)} className="text-right size-15" variant="outline"><Pen/></Button>
             </div>
             <div className='my-5 mx-2'>
                <div className='flex items-center my-2 gap-3'>
                    <Mail/>
                    <span>{user?.email}</span>

                </div>
                <div className='flex items-center my-2 gap-3'>
                    <Contact/>
                    <span>{user?.phonenumber}</span>

                </div>
                
             </div>
             <div className='my-5 '>
                <h1 className='font-semibold'>Skills</h1>
                <div className='flex items-start gap-1 my-2 mx-0'>
                {
                    user?.profile?.skills.length!==0?user?.profile?.skills.map((item,index)=><Badge key={item}>
                        {item}
                    </Badge>):<span>NA</span>

                }
                </div>

             </div>
             <div className='grid w-full max-w-sm items-center gap-1.5 '>
                <Label className="text-md font-semibold">Resume</Label>
                {
                    hasresume?<a target ='blank' href={user?.profile?.resume} className='text-red-500  w-full hover:underline cursor-pointer'>{user?.profile?.resumeoriginalname}</a>
                :
                <span>NA</span>}
             </div>
             </div>
             <div className='max-w-7xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-semibold text-lg my-5'>Applied Jobs</h1>
                <Appliedjobs/>
             </div>
            <UpdateProfile open={open} setopen={setopen}/>
        
        
    </div>
  )
}

export default ViewProfile