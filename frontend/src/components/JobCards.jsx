import { Badge } from './ui/badge'
import React from 'react'

function JobCards() {
  return (
  <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
    
    <div>
        
        <h1 className='font-medium text-lg'>Comapny Name
            </h1>
            <p className='text-sm text-gray-500'>India</p></div>
            <div>
                <h1 className='font-bold text-lg my-2'>Job title</h1>
                <p className='text-sm terxt-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
            </div>
            <div className='flex items-center gap-3 mt-4'>
                <Badge className={'text-red-900 font-bold'} variant="primary">10 Postions</Badge>
                <Badge className={'text-blue-900 font-bold'}  variant="primary">Part time</Badge>
                <Badge className={'text-violet-900 font-bold'}  variant="primary">20 LPA</Badge>

            </div>
            </div>
            
  )
}

export default JobCards