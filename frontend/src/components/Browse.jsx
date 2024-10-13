import React from 'react'
import Navbar from './structure/Navbar'
import Job from './Job'

const randomjobs = [1,2,3,4,5,6,7,8];
function Browse() {
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='font-semibold text-xl  my-2'>Search Results({randomjobs.length})</h1>
            <div className='grid grid-cols-3 gap-4'>{
                randomjobs.map((item,index)=>{
                    return (
                        <Job/>
                    )
                })
            }</div>
        </div>
    </div>
  )
}

export default Browse