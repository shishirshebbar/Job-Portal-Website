import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import logo from '../assets/logo.jpg';

function Job() {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
      <div className='flex items-center justify-between'>
        <p>1 day ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      
      <div className='flex items-center gap-2 my-2'>
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={logo} />
          </Avatar>
        </Button>
        
        <div>
          <h1 className="text-lg font-bold">Company Name</h1> 
          <p className="text-gray-600">India</p> 
        </div>
      </div>
      
    
      <div className='mt-2'>
        <h2 className="text-xl font-semibold">Job Title</h2> {/* Job title */}
        <p className="text-gray-600">This is a brief description of the job role and responsibilities.</p> {/* Job description */}
      </div>
    </div>
  );
}

export default Job;
