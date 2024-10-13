import React from 'react'
import Navbar from './structure/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'

import logo from '../assets/logo.jpg';

function ViewProfile() {
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto my-5 p-8 bg-white border border-gray-500 rounded-2xl'>
        <div className='flex items-center gap-8'>        
            <Avatar className="h-24 w-24">
            <AvatarImage src={logo} alt="profile"/>
        </Avatar>    
        <div>
        <h1>Full Name</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default ViewProfile