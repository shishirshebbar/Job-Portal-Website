import React from 'react'
import Navbar from './structure/Navbar'
import Description from '@/components/Description'
import Category from './Category'
import LatestJobs from './LatestJobs'

function Home() {
  return (
    <div><Navbar/>
    <Description/>
    <Category/>
    <LatestJobs/></div>
  )
}

export default Home