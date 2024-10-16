import { Badge } from './ui/badge'
import React from 'react'

function JobCards({job}) {
  return (
  <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
    
    <div>
        
        <h1 className='font-medium text-lg'>
          {job?.company?.name}
            </h1>
            <p className='text-sm text-gray-500'>India</p></div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm terxt-gray-300'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-3 mt-4'>
                <Badge className={'text-red-900 font-bold'} variant="primary">{job?.position}</Badge>
                <Badge className={'text-blue-900 font-bold'}  variant="primary">{job?.jobtype}</Badge>
                <Badge className={'text-violet-900 font-bold'}  variant="primary">{job?.salary}</Badge>

            </div>
            </div>
            
  )
}

export default JobCards