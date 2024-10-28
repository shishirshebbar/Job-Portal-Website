import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import Navbar from '../structure/Navbar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { APPLICATION_END_POINT } from '@/utilities/constants'
import { toast } from 'sonner'
const state=["Accepted","Rejected"]
function ApplicantsTable() {
    const {applicants}  = useSelector(store=>store.application);
    const applicationstatus = async(status,id)=>{
        try{
            axios.defaults.withCredentials = true;// configures Axios to send cookies and other credentials with cross-origin requests. 

            const res= await axios.post(`${APPLICATION_END_POINT}/status/${id}/update`,{status},{
                withCredentials:true
            })
            if(res.data.success){
                toast.success(res.data.message);
            }
        }catch(error){
            toast.error(error.response.data.message)
        }
    }
  return (
    <div>
        
        <Table>
            <TableCaption>
                List of applicants
            </TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead>Full Name</TableHead>
                <TableHead>Email id</TableHead>
                <TableHead>Contact number</TableHead>
                <TableHead>Resume</TableHead>
                <TableHead>Date of application</TableHead>
                <TableHead>Action</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        applicants&& applicants?.applications?.map((item)=>(
                            <tr key={item._id}>
                    <TableCell>{item?.applicant?.fullname}</TableCell>
                <TableCell>{item?.applicant?.email}</TableCell>
                <TableCell>{item?.applicant?.phonenumber}</TableCell>
                <TableCell>
                {
                item.applicant?.profile?.resume ? <a className="text-blue-600 cursor-pointer" href={item?.applicant?.profile?.resume} target="_blank" rel="noopener noreferrer">{item?.applicant?.profile?.resumeoriginalname}</a> : <span>NA</span>
            }
                    </TableCell>
                    <TableCell>
                    {item?.applicant.createdAt && (() => {
                        const date = item.applicant.createdAt.split("T")[0];
                        const [year, month, day] = date.split("-");
                        return `${day}-${month}-${year}`;
                    })()}
                </TableCell>

                <TableCell className=" cursor-pointer">
                    <Popover>
                        <PopoverTrigger>
                            <MoreHorizontal/>
                        </PopoverTrigger>
                        <PopoverContent className="w-32">
                            {
                                state.map((status,index)=>{
                                    return(
                                        <div onClick={()=>applicationstatus(status,item?._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
                                            <span>{status}</span>
                                        </div>
                                    )
                                })
                            }

                        </PopoverContent>
                    </Popover>


                </TableCell>
                    </tr>

                        ))
                    }
                    
                </TableBody>
            
            

        </Table>
    </div>
  )
}

export default ApplicantsTable