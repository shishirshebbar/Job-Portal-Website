import React from 'react'
import Navbar from './structure/Navbar'
import Description from '@/components/Description'
import Category from './Category'
import LatestJobs from './LatestJobs'
import Footer from './structure/Footer'
import Getalljobshooks from '@/hooks/Getalljobshooks'

function Home() {
  Getalljobshooks();
  return (
    <div><Navbar/>
    <Description/>
    <Category/>
    <LatestJobs/>
    <Footer/></div>
  )
}

export default Home