import React, { useState } from 'react'
import Navbar from '../structure/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { JOB_END_POINT } from '@/utilities/constants'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'



function AddNewJob() {
    const [input,setinput]   = useState({
            title:"",
            description:"",
            requirements:"",
            salary:"",
            location:"",
            jobtype:"",
            experiencelevel:"",
            position:0,
            companyid:""
    })
    const [loading,setloading]=useState(false);
    const navigate = useNavigate();
    const {companies}  = useSelector(store=>store.company);
    const changeevent =(e)=>{
        setinput({...input,[e.target.name]:e.target.value})
    }
    const selectchange = (e) =>{
      const selectedcompany = companies.find((company)=>company.name.toLowerCase()==e);
      setinput({...input,companyid:selectedcompany._id})
    }
    const submithandler = async (e) => {
      e.preventDefault();
      console.log("Input data:", input);
    
      try {
        setloading(true);
        const res = await axios.post(`${JOB_END_POINT}/post`, input, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
    
        if (res.data.success) {
          toast.success(res.data.message);
          console.log("Submission successful");
          navigate("/admin/jobs");
        }
      } catch (error) {
        console.log("Error response:", error.response); // Additional logging
        if (error.response && error.response.data) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An unexpected error occurred.");
        }
      } finally {
        setloading(false);
      }
    };
    
  return (
    <div>
        <Navbar/>
        <div className="flex items-center justify-center w-screen my-5">
        <form onSubmit={submithandler} className='max-w-7xl border border-gray-200 shadow-lg p-10 rounded-lg'>
        <div className="grid grid-cols-4 gap-5">
    <div>
      <Label className="text-l font-bold mx-14">Job Title</Label>
      <Input
        value={input.title}
        onChange={changeevent}
        type="text"
        name="title"
        className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 border border-black"
      />
    </div>
    <div>
      <Label className="text-l font-bold mx-14">Description</Label>
      <Input
        value={input.description}
        onChange={changeevent}
        type="text"
        name="description"
        className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 border border-black"
      />
    </div>
    <div>
      <Label className="text-l font-bold mx-14">Requirements</Label>
      <Input
        value={input.requirements}
        onChange={changeevent}
        type="text"
        name="requirements"
        className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 border border-black"
      />
    </div>
    <div>
      <Label className="text-l font-bold mx-14">Salary(in LPA)</Label>
      <Input
        value={input.salary}
        onChange={changeevent}
        type="text"
        name="salary"
        className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 border border-black"
      />
    </div>
    <div>
      <Label className="text-l font-bold mx-14">Location</Label>
      <Input
        value={input.location}
        onChange={changeevent}
        type="text"
        name="location"
        className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 border border-black"
      />
    </div>
    <div>
      <Label className="text-l font-bold mx-14">Job Type</Label>
      <Input
        value={input.jobtype}
        onChange={changeevent}
        type="text"
        name="jobtype"
        className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 border border-black"
      />
    </div>
    <div>
      <Label className="text-l font-bold mx-14">Experience Level(in years)</Label>
      <Input
        value={input.experiencelevel}
        onChange={changeevent}
        type="text"
        name="experiencelevel"
        className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 border border-black"
      />
    </div>
    <div>
      <Label className="text-l font-bold mx-14">Number of Positions</Label>
      <Input
        value={input.position}
        onChange={changeevent}
        type="number"
        name="position"
        className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 border border-black"
      />
    </div>
    {
        companies.length>0&&(
            <Select onValueChange={selectchange}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="select a company"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {companies.map((company) => {
                        return(
                          <SelectItem value={company?.name?.toLowerCase()}>{company.name}</SelectItem>
                        )
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
              )
    }
    
  </div>
  {
  loading?<Button className="w-full my-4"><Loader2 className='mr-2 animate-spin h-4 w-4 '/>Please wait..</Button>
  :<Button type="submit" className="w-full my-4 ">Add Job</Button>
  }
  {
    companies.length==0&&<p className='  mt-5  text-xs text-red-500 font-bold text-center'>Please register your company before adding a job.</p>
  }
</form>
</div>



    </div>
  )
}

export default AddNewJob