import React from 'react';
import Navbar from './structure/Navbar';
import Filter from './Filter';
import Job from './Job';

const jobsarray = [1, 2, 3, 4, 5, 6, 7, 8];

function Jobs() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mt-5 px-4"> 
        <div className="flex gap-5">
          <div className="w-[15%]"> 
            <Filter />
          </div>

          {jobsarray.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-6"> 
                {jobsarray.map((item, index) => (
                  <div >
                    <Job />
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