import React from "react";
import { Link } from 'react-router-dom'
import { FaEnvelope } from "react-icons/fa";

function ForgotPassword() {
  return (
    <div
      className=" w-full min-w-96 overflow-auto"
      style={{ backgroundColor: "#d3d3d3" }}
    >
      <div
        className="flex flex-wrap justify-center content-start gap-y-6 md:gap-y-12
      w-full min-w-96
      h-screen min-h-fit"
      >
        <div
          className="w-full min-w-full bg-blue-900
        text-center text-white font-semibold 
        text-2xl md:text-3xl lg:text-3xl xl:text-3xl 
        py-2 h-fit"
          style={{ fontFamily: "Oswald"}}
        >
          <h1>Indian Institute of Technology Patna</h1>
        </div>

        <div
          className="w-full min-w-full
        text-center text-red-600 bg-inherit font-bold
        text-2xl blink_me"
          style={{ fontFamily: "Noto-serif" }}
        >
          <h1>Application for Faculty Position</h1>
        </div>

        <div
          className="flex flex-wrap gap-10 justify-evenly rounded-3xl shadow-lg overflow-hidden bg-sky-100
        max-w-xs md:w-full md:max-w-4xl min-w-96 md:h-80
        mb-10"
        >
          <div className="my-4 ml-4 flex justify-center items-center">
            <img src={"./src/Assets/iitp_logo.png"} className=" w-48 md:w-64" />
          </div>

          <div className="flex justify-center items-center gap-x-3 md:w-2/5">
            <form action=''>
            <div className="flex flex-wrap justify-center items-center">
            
            <div className='text-center font-semibold text-xl text-red-600 w-3/4' 
            style={{textDecoration: 'underline'}}>FORGOT PASSWORD</div>
            
            <div className='flex flex-wrap items-center gap-1
            mt-10'>
              <FaEnvelope style={{color: 'black', fontSize: '20px'}}/>
              <input 
                type='email'
                placeholder='Enter Registered Email'
                className='rounded-md shadow px-2 py-0.5 text-black outline-none'
              />
            </div>

            <div className='flex flex-wrap gap-x-10 my-10 justify-evenly'>
              <button className='bg-blue-500 text-center rounded-xl px-3 py-1 text-white w-20'>Submit</button>
              <Link to='/' className='bg-green-500 text-center rounded-xl px-3 py-1 text-white w-20'>Login</Link>
            </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
