import React from 'react'
import { Link } from 'react-router-dom'

export default function ApplicationForm() {
  return (
    <div className=' w-full min-w-96 overflow-auto' 
    style={{backgroundColor: '#d3d3d3'}}
    >
      <div className='flex flex-wrap justify-center content-start gap-y-6 md:gap-y-12
      w-full min-w-96
      h-screen min-h-fit'>
        <div className='w-full min-w-full bg-blue-900
        text-center text-white font-semibold 
        text-2xl md:text-3xl lg:text-3xl xl:text-3xl 
        py-2 h-auto'style={{fontFamily: 'Oswald'}}>
          <h1>Indian Institute of Technology Patna</h1>
          
        </div>

        {/* <div className='w-full min-w-full
        text-center text-red-600 bg-inherit font-bold
        text-2xl blink_me' 
        style={{fontFamily: 'Noto-serif'}}>
          <h1>Application for Faculty Position</h1>
        </div> */}

        <div className='flex flex-wrap justify-evenly rounded-3xl shadow-lg bg-sky-100 h-auto
        max-w-xs md:w-full md:max-w-5xl min-w-96
       md:mb-0'
        >  <div className='flex flex-wrap items-center justify-end w-full'>
        <div className='w-4/6 font-semibold text-xl hidden'><h1>Welcome <span className='text-teal-800'></span></h1></div>
        <div className='flex flex-wrap gap-4 w-2/6 justify-end'>
          <Link to='/forgotpassword' className='bg-green-500 px-2 py-1 my-2 text-white font-normal hidden rounded-md'
          onClick={() => {/* handle change password */}}>
            Change Password
          </Link>
          <Link to='/' className='bg-red-500 px-2 py-1 my-3 mx-5 text-white font-normal rounded-md'
          onClick={() => {/* handle logout */}}>
            Logout
          </Link>
        </div>
      </div>
          <div>
          <div className='mt-4 ml-4 flex justify-center items-center'>
            <img src={'./src/Assets/iitp_logo.png'} 
            className='w-48 md:w-64'
            />
          </div>
          
          <div className='text-center text-teal-700 text-4xl mx-24 my-10'>
            Thank You for Applying at IIT Patna.
          </div>
          
          </div>
          
        </div>
        
      </div>      
    </div>
  )
}
