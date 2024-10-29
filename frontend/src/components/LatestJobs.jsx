import React from 'react'
import JobCards from './JobCards'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



// const randomjobs = [1,2,3,4,5,6,7,8]
function LatestJobs() {
  
  const {alljobs}  = useSelector(store=>store.job)
 
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-3xl font-bold'><span className='text-blue-900'>Latest Job Openings</span></h1>
        <div className='grid my-5 grid-cols-3 gap-4'>
        {
        alljobs.length <= 0 ? (
          <span>No job available</span>
        ) : (
          alljobs?.slice(0, 3).map((job) => <JobCards  key={job._id} job={job} />)
        )
}

</div>
    </div>
  )
}

export default LatestJobs