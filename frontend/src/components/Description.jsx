import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

function Description() {
  return (
    <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
        <span className='px-4 py-2 rounded-full bg-gray-100 text-black font-medium'>No.1 Job Finding Website</span>
        <h1 className='text-3xl font-bold'>Search,Refer & Get Your Job</h1>
        <div className='flex w-[40%] shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
            <input
            type="text"
            placeholder='Find your job'
            className='outline-none border-none w-full'/>
            <Button className="rounded-r-full">
                <Search className='h-9'/>
            </Button>
        </div>
    
    </div></div>
  )
}

export default Description