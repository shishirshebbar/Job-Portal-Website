import React, { useEffect, useState } from 'react';
import Navbar from './structure/Navbar';
import Filter from './Filter';
import Job from './Job';
import { useSelector } from 'react-redux';
import { all } from 'axios';
import {motion} from "framer-motion";
function Jobs() {
  const {alljobs,searchrequest} = useSelector(store=>store.job)
  const [filterjobs,setfilterjobs]= useState(alljobs)
  useEffect(()=>{
    if(searchrequest){
      const filteredjobs = alljobs.filter((job)=>{
        return job.title.toLowerCase().includes(searchrequest.toLowerCase()) ||
        job.description.toLowerCase().includes(searchrequest.toLowerCase()) ||
        job.location.toLowerCase().includes(searchrequest.toLowerCase())
      })
      setfilterjobs(filteredjobs);
    }else{
      setfilterjobs(alljobs)
    }
  },[alljobs,searchrequest])
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mt-5 px-4"> 
        <div className="flex gap-5">
          <div className="w-[15%]"> 
            <Filter />
          </div>

          {filterjobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-6"> 
                {alljobs.map((job) => (
                   <motion.div
                   initial={{ opacity: 0, x: 100 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -100 }}
                   transition={{ duration: 0.3 }}
                   key={job?._id}>
                   <Job job={job} />
               </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
