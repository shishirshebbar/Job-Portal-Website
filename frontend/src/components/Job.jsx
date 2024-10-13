import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import logo from '../assets/logo.jpg';
import { Badge } from './ui/badge';

function Job() {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-900'>1 day ago</p>
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
        <h1 className="text-lg font-bold my-2">Job Title</h1> 
        <p className="text-gray-600 text-sm">This is a brief description of the job role and responsibilities.</p> {/* Job description */}
      </div>
    <div className='flex items-center gap-3 mt-4'>
                <Badge className={'text-red-900 font-bold'} variant="primary">10 Postions</Badge>
                <Badge className={'text-blue-900 font-bold'}  variant="primary">Part time</Badge>
                <Badge className={'text-violet-900 font-bold'}  variant="primary">20 LPA</Badge>

            </div>
            <div className='flex items-center gap-4 mt-4'>
              <Button variant="outline" className="bg-purple-300">
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
