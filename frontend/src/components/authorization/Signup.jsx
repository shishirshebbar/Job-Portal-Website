import React ,{useState} from 'react'
import Navbar from '../structure/Navbar'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Signup() {
    const [input,setinput]  =useState({
        fullname:"",
        email:"",
        phonenumber:"",
        password:"",
        role:"",
        file:""
    })
    const changeEventHandler = (e)=>{
        setinput({...input,[e.target.name]:e.target.value});
    }
    const changeFileHandler = (e)=>{
        setinput({...input,e:e.target.files?.[0]})
    }
    const submithandler = (e)=>{
        e.preventDefault();
        console.log(input);
    }
  return (
    <div><Navbar/>
    <div className='flex items-center justify-center max-w-7xl mx-auto'>
    <form onSubmit={submithandler} className='w-1/2 border border-gray-300 rounded-md p-4 my-10'>
        <h1 className='font-bold text-xl mb-5'>
            Sign Up
        </h1>
       
        <div className='my-2'>
            <Label>Full Name:</Label>
            <Input type="text" placeholder="Enter full name" value={input.fullname}
            name="fullname" onChange={changeEventHandler}/>
        </div>
        <div className='my-2'>
            <Label>Email:</Label>
            <Input type="email" placeholder="Enter your Email ID" value={input.email}
            name="email" onChange={changeEventHandler}/>
        </div>
        <div className='my-2'>
            <Label>Phone number:</Label>
            <Input type="text" placeholder="Enter your phone number"
            value={input.phonenumber}
            name="phonenumber" onChange={changeEventHandler}/>
        </div>
        <div className='my-2'>
            <Label>Password:</Label>
            <Input type="password" placeholder="Enter the password"
            value={input.password}
            name="password" onChange={changeEventHandler}/>
        </div>
        <div className='flex items-center justify-between'>
        <RadioGroup className='flex items-center gap-4 my-5' >
      <div className="flex items-center space-x-2">
            <Input type="radio" name="role" value="student" className='cursor-pointer'
            checked={input.role==='student'}  onChange={changeEventHandler}/>
       
        <Label htmlFor="r1">Student</Label>
      </div>
      <div className="flex items-center space-x-2">
      <Input type="radio" name="role" value="recruiter" className='cursor-pointer'
      checked={input.role==='recruiter'}  onChange={changeEventHandler}/>
        <Label htmlFor="r2">Recruiter</Label>
      </div>
     
    </RadioGroup>
    <div className='flex items-center gap-2'>
        <Label>Profile</Label>
        <Input accept ="image/*"
        type="file"
        onChange={changeFileHandler}
        className="cursor-pointer"/>
    </div>
   
    </div>
    <Button type="submit" className="w-full my-4 bg-slate-500">Signup</Button>
    <span className='text-sm'>Already have an account? <Link to ="/login" className="text-blue-800">Login</Link></span>
    </form>
    </div>
    </div>
  )
}

export default Signup