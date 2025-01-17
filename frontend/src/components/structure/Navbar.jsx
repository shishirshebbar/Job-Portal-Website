import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import React from 'react';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { API_END_POINT } from '@/utilities/constants';
import { setuser } from '@/redux/authorizedslice';
import { toast } from 'sonner';

function Navbar() {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logouthandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setuser(null));
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='bg-gradient-to-r from-red-300 to-orange-800'>
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-6'>
        <div>
          <Link to={"/"} className='text-3xl font-extrabold text-white'>
            Jobs&ReferralsBridge
          </Link>
        </div>
        <div className='flex items-center justify-center flex-grow'>
          <ul className='flex font-medium items-center gap-6 text-white'>
            {user && user.role === "recruiter" ? (
              <>
                <li><Link to="/admin/companies" className="hover:text-orange-300">Companies</Link></li>
                <li><Link to="/admin/jobs" className="hover:text-orange-300">Jobs</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/" className="hover:text-orange-300">Home</Link></li>
                <li><Link to="/jobs" className="hover:text-orange-300">Jobs</Link></li>
                <li><Link to="/referral" className="hover:text-orange-300">Referrals</Link></li>
                <li><Link to="/browse" className="hover:text-orange-300">Browse</Link></li>
              </>
            )}
          </ul>
        </div>
        <div className='flex items-center gap-6'>
          {!user ? (
            <div className='flex items-center gap-2'>
              <Link to='/signup'>
                <Button variant="outline" className="bg-red-500 text-white hover:bg-red-300 transition-all">
                  Signup
                </Button>
              </Link>
              <Link to='/login'>
                <Button className="bg-red-500 text-white hover:bg-red-300 transition-all">
                  Login
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="w-12 h-12 cursor-pointer">
                  <AvatarImage className="rounded-full" src={user?.profile?.profilephoto} alt="@shadcn" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className='w-80 bg-white shadow-lg rounded-lg p-4'>
                <div className='flex gap-4 items-center'>
                  <Avatar className="w-14 h-14 cursor-pointer">
                    <AvatarImage className="rounded-full" src={user?.profile?.profilephoto} alt="@shadcn" />
                  </Avatar>
                  <div>
                    <h4 className='font-medium'>{user?.fullname}</h4>
                    <p className='text-sm text-gray-500'>{user?.profile?.biography}</p>
                  </div>
                </div>
                <div className='mt-4'>
                  {user && user.role === "student" && (
                    <div className='flex items-center gap-2 cursor-pointer'>
                      <User2 />
                      <Button variant="link" className="text-orange-600">
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}
                  <div className='flex items-center gap-2 cursor-pointer mt-2'>
                    <LogOut />
                    <Button onClick={logouthandler} variant="link" className="text-red-600">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
