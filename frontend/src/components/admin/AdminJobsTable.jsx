import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import store from '@/redux/store'
function AdminJobsTable() {
    const {alladminjobs,searchjob} = useSelector(store=>store.job);
    
    const [filter,setfilter]  = useState(alladminjobs);
    const navigate = useNavigate();
    useEffect(()=>{
      const filterjobs= alladminjobs.length>=0&&alladminjobs.filter((job)=>{
        if(!searchjob){
          return true;
        }
        return job?.title?.toLowerCase().includes(searchjob.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchjob.toLowerCase());

      })
        setfilter(filterjobs);
    },[alladminjobs,searchjob])
  return (
    <div>
        <Table>
            <TableCaption>List of your recently posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Comapny Name
                        </TableHead>
                        <TableHead>
                            Role
                        </TableHead>
                        <TableHead>
                            Date
                        </TableHead>
                        <TableHead className="text-right">
                            Action
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {filter?.map((job) => (
                    <tr>
                         
        <TableCell>{job?.company?.name}</TableCell>
        <TableCell>{job?.title}</TableCell>
        <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
        <TableCell className="text-right cursor-pointer">
          <Popover>
            <PopoverTrigger>
              <MoreHorizontal />
            </PopoverTrigger>
            <PopoverContent className="w-32">
              <div onClick={()=>navigate(`/admin/companies/${job._id}`)} className="flex items-center gap-2 w-fit cursor-pointer">
                <Edit2 className="w-4" />
                <span>Edit</span>
              </div>
              
              <div onClick={()=> navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer mt-2'>
                <Eye className='w-4'/>
                <span>Applicants</span>
            </div>
            </PopoverContent>
          </Popover>
        </TableCell>
                    </tr>
       
      
    )
  
)}

                    
                    </TableBody>

            
        </Table>

    </div>
  )
}

export default AdminJobsTable