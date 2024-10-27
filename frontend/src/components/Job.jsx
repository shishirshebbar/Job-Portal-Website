import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import logo from '../assets/logo.jpg';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const jobid = "abcdef"
function Job({job}) {
  const daysago=(mongodbTime)=>{
    const createdAt = new Date(mongodbTime);
    const currenttime = new Date();
    const time = currenttime - createdAt
    return Math.floor(time/(1000*24*60*60))
  }
  const navigate = useNavigate();
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-900'>{daysago(job?.createdAt)==0?"Today":`${daysago(job?.createdAt)}days ago`}</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      
      <div className='flex items-center gap-2 my-2'>
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        
        <div>
          <h1 className="text-lg font-bold">{job?.company?.name}</h1> 
          <p className="text-gray-600">India</p> 
        </div>
      </div>
      
    
      <div className='mt-2'>
        <h1 className="text-lg font-bold my-2">{job?.title}</h1> 
        <p className="text-gray-600 text-sm">{job?.description}</p>
      </div>
    <div className='flex items-center gap-3 mt-4'>
                <Badge className={'text-red-900 font-bold'} variant="primary">{job?.position} Postions</Badge>
                <Badge className={'text-blue-900 font-bold'}  variant="primary">{job?.jobtype}</Badge>
                <Badge className={'text-violet-900 font-bold'}  variant="primary">{job?.salary}</Badge>

            </div>
            <div className='flex items-center gap-4 mt-4'>
              <Button onClick={()=>navigate(`/description/${job?._id}`)} variant="outline" className="bg-purple-300" >
                Details
              </Button>
              <Button variant="outline" className="bg-purple-300">
                Save for Later
              </Button>

            </div>
    </div>
  );
}

export default Job;
