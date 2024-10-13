import { Popover, PopoverContent,PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { LogOut,User2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Navbar() {
    const {user} = useSelector(store=>store.auth)
  return (
    <div className='bg-white'>
        <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        <div>
            <h1 className='text-2xl font-bold'>Job <span className='text-[#F83002]'>Portal</span></h1>
        </div>
        <div className='flex items-center gap-12'>
            <ul className='flex font-medium items-center gap-5'>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/browse">Browse</Link></li>
                
                
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
                <Avatar className="w-8 h-8  cursor-pointer">
                <AvatarImage className ="rounded-full" src="https://github.com/shadcn.png" alt="@shadcn" />
                
              </Avatar>
                </PopoverTrigger>
                <PopoverContent className='w-80 border border-white bg-white shadow-lg'>
                  <div className='flex gap-6 space-y-1'>
                <Avatar className="w-10 h-10 cursor-pointer mt-2">
                <AvatarImage className ="rounded-full" src="https://github.com/shadcn.png" alt="@shadcn" />
                
              </Avatar>
             <div>
              <h4 className='font-medium'>ABC</h4><p className='text-sm text-muted-foreground'>Hello </p>
              </div>
                  </div>
                  <div className='flex flex-col text-grey-900'>
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <User2/>
                      <Button variant= "link"><Link to="/profile">View Profile</Link></Button>
                      
                      </div>
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                          <LogOut/>
                      <Button variant= "link">Logout</Button>
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