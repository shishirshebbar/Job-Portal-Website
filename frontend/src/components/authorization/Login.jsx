import React, { useState } from 'react'
import Navbar from '../structure/Navbar'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'
import { API_END_POINT } from '@/utilities/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setloading } from '@/redux/authorizedslice'
import store from '@/redux/store'
import { Loader2 } from 'lucide-react'
function Login() {
    const [input,setinput]  =useState({
        
        email:"",        
        password:"",
        role:""
        
    })
    const navigate = useNavigate();
    const changeEventHandler = (e)=>{
        setinput({...input,[e.target.name]:e.target.value});
    }
    const {loading} = useSelector(store=>store.auth)
    const dispatch = useDispatch();
    const submithandler = async(e)=>{
      e.preventDefault();
      
      try{
          dispatch(setloading(true));
          const res= await axios.post(`${API_END_POINT}/login`,input,{
              headers:{
                  "Content-Type":"application/json"
              },withCredentials:true,
          });
          if(res.data.success){
              navigate("/");
              toast.success(res.data.message);
              console.log(res.data.message)
          }
      }catch(error){
          console.log(error);
          toast.error(error.response.data.message)
      }finally{
        dispatch(setloading(false));
      }
  }
  return (
    <div><Navbar/>
    <div className='flex items-center justify-center max-w-7xl mx-auto'>
    <form onSubmit={submithandler}  className='w-1/2 border border-gray-300 rounded-md p-4 my-10'>
        <h1 className='font-bold text-xl mb-5'>
            Login
        </h1>
        
        <div className='my-2'>
            <Label>Email:</Label>
            <Input type="email" placeholder="Enter your Email ID" value={input.email}
            name="email" onChange={changeEventHandler}/>
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
    
    </div>
    {
      loading?<Button className="w-full my-4"><Loader2 className='mr-2 animate-spin h-4 w-4 '/>Please wait..</Button>
      :<Button type="submit" className="w-full my-4 ">Login</Button>
    }
    
    <span className='text-sm'>Don't have an account? <Link to ="/signup" className="text-blue-800">Signup</Link></span>
    </form>
    </div>
    </div>
  )
}

export default Login