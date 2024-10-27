import { Popover, PopoverContent,PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { LogOut,User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { API_END_POINT } from '@/utilities/constants'
import { setuser } from '@/redux/authorizedslice'
import { toast } from 'sonner'
function Navbar() {
    const {user} = useSelector(store=>store.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logouthandler = async() =>{
      try{
        const res=  await axios.get(`${API_END_POINT}/logout`,{withCredentials:true});
        if(res.data.success){
          dispatch(setuser(null));
          navigate("/");
          toast.success(res.data.message);
        }
      }catch(error){
        console.log(error);
        toast.error(error.response.data.message)
      }
    }
  return (
    <div className='bg-white'>
        <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        <div>
            <Link to={"/"}  className='text-2xl font-bold text-[#F83002]'>Job Portal</Link>
        </div>
        <div className='flex items-center gap-12'>
            <ul className='flex font-medium items-center gap-5'>
              {
                user && user.role=="recruiter"?(
                  <>
                  <li><Link to ="/admin/companies" >Companies</Link></li>
                  <li><Link to = "/admin/jobs">Jobs</Link></li>
                  </>
                ):(
                    <>
                   <li><Link to ="/">Home</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/browse">Browse</Link></li> 
                    </>
                )
              
              }
             
                
                
            </ul>
            {!user?(
                <div className='flex items-center gap-2'>
                    <Link to='/signup'>
                    <Button variant = "outline">Signup</Button></Link>
                    <Link to ='/login'><Button  className="bg-blue-900 hover:bg-blue-100">Login</Button>
                    </Link>
                </div>
            ):(<Popover>
                <PopoverTrigger asChild>
                <Avatar className="w-4 h-4  cursor-pointer">
                <AvatarImage className ="rounded-full" src={user?.profile?.profilephoto} alt="@shadcn" />
                
              </Avatar>
                </PopoverTrigger>
                <PopoverContent className='w-80 border border-white bg-white shadow-lg'>
                  <div className='flex gap-6 space-y-1'>
                <Avatar className="w-4 h-4 cursor-pointer mt-2">
                <AvatarImage className ="rounded-full" src={user?.profile?.profilephoto} alt="@shadcn" />
                
              </Avatar>
             <div>
              <h4 className='font-medium'>{user?.fullname}</h4>
              <p className='text-sm text-muted-foreground'>{user?.profile?.biography}</p>
              </div>
                  </div>
                  <div className='flex flex-col text-grey-900'>
                    {
                      user && user.role == "student" &&  (
                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <User2/>
                        <Button variant= "link"><Link to="/profile">View Profile</Link></Button>
                        
                        </div>
                      )
                    }
                     
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                          <LogOut/>
                      <Button onClick = {logouthandler} variant= "link">Logout</Button>
                      </div>
                  </div>
                </PopoverContent>
                </Popover>)}
        </div>
        </div>
        </div>
   
  )
}

export default Navbar