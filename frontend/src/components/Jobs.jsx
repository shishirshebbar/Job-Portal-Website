import React from 'react';
import Navbar from './structure/Navbar';
import Filter from './Filter';
import Job from './Job';

const jobsarray = [1, 2, 3, 4, 5, 6, 7, 8];

function Jobs() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mt-5 px-4"> {/* Added horizontal padding */}
        <div className="flex gap-5">
          {/* Filter Section */}
          <div className="w-[25%]"> {/* Adjust the width as needed */}
            <Filter />
          </div>

          {/* Jobs Section */}
          {jobsarray.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4"> {/* Maintain 3 columns */}
                {jobsarray.map((item, index) => (
                  <div key={index} className="flex">
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
