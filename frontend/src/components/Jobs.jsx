import React from 'react';
import Navbar from './structure/Navbar';
import Filter from './Filter';
import Job from './Job';
import { useSelector } from 'react-redux';
import { all } from 'axios';

const jobsarray = [1, 2, 3, 4, 5, 6, 7, 8];

function Jobs() {
  const {alljobs} = useSelector(store=>store.job)
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mt-5 px-4"> 
        <div className="flex gap-5">
          <div className="w-[15%]"> 
            <Filter />
          </div>

          {alljobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-6"> 
                {alljobs.map((job) => (
                  <div key={job?._id}>
                    <Job job={job} />
                  </div>
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
