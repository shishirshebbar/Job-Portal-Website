import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
function JobDescription() {
    const ifapplied=true;
  return (
    <div className='max-w-7xl mx-auto my-10'>
        <div className='flex items-center justify-between'>
            <div>
        <h2 className='font-bold text-3xl '>Title</h2>
            
            <div className='flex items-center gap-3 mt-4'>
                <Badge className={'text-red-900 font-bold'} variant="primary">10 Postions</Badge>
                <Badge className={'text-blue-900 font-bold'}  variant="primary">Part time</Badge>
                <Badge className={'text-violet-900 font-bold'}  variant="primary">20 LPA</Badge>
            </div>
            </div>
            <Button className={`rouded-lg ${ifapplied?'bg-gray-500 cursor-not-allowed':'bg-purple-900 hover:bg-purple-300'}`}>
                {ifapplied?"Already applied":"Apply Now"}</Button>
            </div> 
            <h1 className='border-b-2 border-b-gray-500 font-medium py-4'>Job Description</h1>  
            <div >
            <h1 className='font-bold my-1 py-2'>Role:<span className='pl-1 font-normal text-gray-500'>Full Stack Developer</span>
            
            </h1>
            <h1 className='font-bold my-1 py-2'>Location:<span className='pl-1 font-normal text-gray-500'>Bangalore</span>
            
            </h1>
            <h1 className='font-bold my-1 py-2'>Job Description:<span className='pl-1 font-normal text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </span>
            
            </h1>
            <h1 className='font-bold my-1 py-2'>Experience:<span className='pl-1 font-normal text-gray-500'>3 years</span>
            
            </h1>
            <h1 className='font-bold my-1 py-2'>EXpected Salary:<span className='pl-1 font-normal text-gray-500'>10 LPA</span>
            
            </h1>
            <h1 className='font-bold my-1 py-2'>Openings:<span className='pl-1 font-normal text-gray-500'>5</span>
            
            </h1>
            <h1 className='font-bold my-1 py-2'>Posted Date:<span className='pl-1 font-normal text-gray-500'>10/10/2010</span>
            
            </h1>

            </div>     
    </div>
  )
}

export default JobDescription