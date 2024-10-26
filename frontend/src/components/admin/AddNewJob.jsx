import React, { useState } from 'react'
import Navbar from '../structure/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'


const comapnylist = []

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
    const {companies}  = useSelector(store=>store.company);
    const changeevent =(e)=>{
        setinput({...input,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <Navbar/>
        <div className="flex items-center justify-center w-screen my-5">
        <form action='' className='max-w-7xl border border-gray-200 shadow-lg p-10 rounded-lg'>
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
      <Label className="text-l font-bold mx-14">Salary</Label>
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
      <Label className="text-l font-bold mx-14">Experience Level</Label>
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
            <Select>
            <SelectTrigger style={{ textAlign: 'left', width: '100%' }}>
                <SelectValue placeholder="select" style={{ textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {companies.map((company) => (
                        <SelectItem key={company.name}>{company.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
              )
    }
    
  </div>
  <Button className ="w-full mt-5">Post New Job</Button>
  {
    comapnylist.length==0&&<p className='  mt-5  text-xs text-red-500 font-bold text-center'>Please register your company before adding a job.</p>
  }
</form>
</div>



    </div>
  )
}

export default AddNewJob