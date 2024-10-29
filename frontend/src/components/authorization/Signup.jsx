import React ,{useState} from 'react'
import Navbar from '../structure/Navbar'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_END_POINT } from '@/utilities/constants'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import store from '@/redux/store';

import { Loader2 } from 'lucide-react'
import { setloading } from '@/redux/authorizedslice'
function Signup() {
    const [input,setinput]  =useState({
        fullname:"",
        email:"",
        phonenumber:"",
        password:"",
        role:"",
        file:""
    })
    const navigate = useNavigate();
    const {loading} = useSelector(store=>store.auth)
    const dispatch = useDispatch();
    const changeEventHandler = (e)=>{
        setinput({...input,[e.target.name]:e.target.value});
    }
    const changeFileHandler = (e)=>{
        setinput({...input,file:e.target.files?.[0]})
    }
    const submithandler = async(e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("fullname",input.fullname);
        formdata.append("email",input.email);
        formdata.append("phonenumber",input.phonenumber);
        formdata.append("password",input.password);
        formdata.append("role",input.role);
        if(input.file){
            formdata.append("file",input.file)
        }
        try{
            dispatch(setloading(true));
            const res= await axios.post(`${API_END_POINT}/register`,formdata,{
                headers:{
                    "Content-Type":"multipart/form-data"
                },withCredentials:true,
                
            });console.log('Response Data:', res.data);
            if(res.data.success){
                navigate("/login")
                toast.success(res.data.message);

            }
        }catch(error){
            if (error.response) {
                console.log('Error Response Data:', error.response.data);
                console.log('Error Status:', error.response.status); 
            } else {
                console.log('Error Message:', error.message); 
            }
        }finally{
            dispatch(setloading(false));
        }
    }
    useEffect(()=>{
        if(user){
            navigate("/");
        }
    },[])
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
    {
      loading?<Button className="w-full my-4"><Loader2 className='mr-2 animate-spin h-4 w-4 '/>Please wait..</Button>
      :<Button type="submit" className="w-full my-4 ">Sign</Button>
    }
    <span className='text-sm'>Already have an account? <Link to ="/login" className="text-blue-800">Login</Link></span>
    </form>
    </div>
    </div>
  )
}

export default Signup