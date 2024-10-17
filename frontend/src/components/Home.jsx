import React, { useEffect } from 'react'
import Navbar from './structure/Navbar'
import Description from '@/components/Description'
import Category from './Category'
import LatestJobs from './LatestJobs'
import Footer from './structure/Footer'
import Getalljobshooks from '@/hooks/Getalljobshooks'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
  Getalljobshooks();
  const {user}  = useSelector(store=>store.auth);
  const navigate = useNavigate();
  useEffect(()=>{
    if (user?.role=="recruiter"){
      navigate("/admin/companies")
    }
  },[])
  return (
    <div><Navbar/>
    <Description/>
    <Category/>
    <LatestJobs/>
    <Footer/></div>
  )
}

export default Home