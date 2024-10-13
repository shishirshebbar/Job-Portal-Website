import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
const filterdata = [
  {
    filtertype:"Location",
    array:["Delhi","Bangalore","Hyderabad","Chennai","Mumbai","Gurugram","Noida"]
  },{
  filtertype:"Role",
  array:["Full Stack Developer","Frontend Developer","ML Engineer","Backend Developer","Devops Engineer","Cloud Enginner"]}
  ,{
    filtertype:"Salary",
    array:["0-30k","30-80k","80k-1.5L"]
  }
]
function Filter() {
  return (
    <div className='w-full bg-white p-3 rounded-md'><h1 className='font-bold text-lg'>Filter Jobs</h1>
    <hr className='mt-1.5'/>
    <RadioGroup>
      {
        filterdata.map((data,index)=>(
          <div>
            <h1 className='font-bold text-lg'> {data.filtertype}</h1>
            {
              data.array.map((item,index)=>{
                return (
                  <div className='flex items-center font-semibold space-x-2 my-2'>
                    <RadioGroupItem value={item}/>
                    <Label>{item}</Label>
                  </div>
                )
              })
            }
          </div>
        ))
      }
    </RadioGroup>
    </div>
  )
}

export default Filter