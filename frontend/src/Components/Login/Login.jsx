import './Login.css';
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios';
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    const err = Validation(values);
    if(err.email === "" && err.password === ""){
      axios.post('http://localhost:8081/', values)
      .then(res => {
        if(res.data === "Success"){
          navigate('/faculty_panel');
        } else {
          alert('No record exists');
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
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
          style={{ fontFamily: "Oswald" }}
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
            <div className="">
            <form action='' onSubmit={handleSubmit}>
            
            <div className='text-center text-green-700 font-bold text-xl' style={{textDecoration: 'underline'}}>LOGIN HERE</div>
            
            <div className='flex flex-wrap items-center gap-1
            my-5'>
              <FaEnvelope style={{color: 'black', fontSize: '20px'}}/>
              <input 
                type='email'
                name='email'
                placeholder='Your email'
                className='rounded-md shadow px-2 py-0.5 text-black outline-none'
                onChange={handleInput}
              />
              <span>{errors.email && <span className='text-red-500 text-sm font-semibold'>{errors.email}</span>}</span>
            </div>

            <div className='flex flex-wrap items-center gap-1
            my-5'>
              <FaLock style={{color: 'black', fontSize: '20px'}}/>
              <input 
                type='password'
                name='password'
                placeholder='Enter your password'
                className='rounded-md shadow px-2 py-0.5 text-black outline-none'
                onChange={handleInput}
              />
              <span>{errors.password && <span className='text-red-500 text-sm font-semibold'>{errors.password}</span>}</span>
            </div>

            <div className='flex flex-wrap justify-around
            my-5'>
              {/* <Link to='/faculty_panel' className='bg-green-500 rounded-xl px-3 py-1 text-white'>Login</Link> */}
              <button type='submit' className='bg-green-500 rounded-xl px-3 py-1 text-white'>Login</button>
              <Link to='/forgotPassword' className='bg-red-500 rounded-xl px-3 py-1 text-white'>Reset Password</Link>
            </div>

            <div className='flex flex-wrap justify-around items-center gap-2
            my-5'>
              <div>Not Registered Yet?</div>
              <Link to='/signup' className='bg-blue-500 text-white rounded-xl px-3 py-1 text-decoration-none'> Sign Up </Link> 
            </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
