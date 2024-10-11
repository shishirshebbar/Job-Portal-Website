import React from 'react'
import JobCards from './JobCards'
const randomjobs = [1,2,3,4,5,6,7,8]

function LatestJobs() {
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-3xl font-bold'><span className='text-blue-900'>Latest Job Openings</span></h1>
        <div className='grid my-5 grid-cols-3 gap-4'>{
            randomjobs.slice(0,6).map((item,index)=><JobCards/>)
        }
</div>
    </div>
  )
}

export default LatestJobs