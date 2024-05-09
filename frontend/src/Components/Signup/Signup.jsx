import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';

function Signup() {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    category: ''
  })
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    console.log(event.target.value);
  }
  // console.log(category.value);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    const err = Validation(values);
    if(err.firstName === "" && err.lastName === "" && err.email === "" && err.password === ""){
      axios.post('http://localhost:8081/signup', values)
      .then(res => {
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  const noteList = [
      {description: 'Applicant should kindly check their email for activation link to access the portal.'
      , key: 0},
      {description: 'Please check SPAM folder also, in case activation link is not received in INBOX.', key: 1},
      {description: 'Applicant applying for more than one position/ department should use different email id for each application.', key: 2}
  ];
  const [captcha, setCaptcha] = useState("captcha")

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

        <div className='flex flex-wrap gap-10 justify-evenly rounded-3xl shadow-lg bg-sky-100 h-auto
        max-w-xs md:w-full md:max-w-5xl min-w-96
        mb-10 md:mb-0'
        >
          
          <div className='my-4 ml-4 flex justify-center items-center'>
            <img src={'./src/Assets/iitp_logo.png'} 
            className='w-48 md:w-64'
            />
          </div>

          <div className='flex justify-center items-center gap-x-3 md:w-2/5'>
            <div className=''>
              <form action='' onSubmit={handleSubmit}>
              <div className='text-center font-bold text-xl text-green-700 md:mt-10' style={{textDecoration: 'underline'}}>CREATE YOUR PROFILE</div>
              
              <div className='flex flex-wrap items-center justify-center gap-x-3 gap-y-3
              my-5'>
                <div className='w-1/2 md:w-5/12'>
                    <input 
                    type='text'
                    placeholder='First Name'
                    name='firstName'
                    onChange={handleInput}
                    className='rounded-md shadow px-2 py-0.5 text-black outline-none text-base w-11/12'
                    />
                    <span>{errors.firstName && <span className='text-red-500 text-sm font-semibold'>{errors.firstName}</span>}</span>
                </div>
                <div className='w-1/2 md:w-5/12'>
                    <input 
                    type='text'
                    placeholder='Last Name'
                    name='lastName'
                    onChange={handleInput}
                    className='rounded-md shadow px-2 py-0.5 text-black outline-none text-base w-11/12'
                    />
                    <span>{errors.lastName && <span className='text-red-500 text-sm font-semibold'>{errors.lastName}</span>}</span>
                </div>
                <div className='w-1/2 md:w-5/12'>
                    <input 
                    type='email'
                    placeholder='Your Email'
                    name='email'
                    onChange={handleInput}
                    className='rounded-md shadow px-2 py-0.5 text-black outline-none text-base w-11/12'
                    />
                    <span>{errors.email && <span className='text-red-500 text-sm font-semibold'>{errors.email}</span>}</span>
                </div>
                <div className='w-1/2 md:w-5/12'>
                    <select className='rounded-md shadow px-2 py-0.5 text-black outline-none text-ms w-11/12' name='category'
                    onChange={handleInput} 
                    >
                        <option value="" disabled='disabled' className='text-xs font-medium'>Select Category</option>
                        <option value="UR" className='text-xs font-medium'>UR</option>
                        <option value="OBC" className='text-xs font-medium'>OBC</option>
                        <option value="SC" className='text-xs font-medium'>SC</option>
                        <option value="ST" className='text-xs font-medium'>ST</option>
                        <option value="EWS" className='text-xs font-medium'>EWS</option>
                        <option value="PWD" className='text-xs font-medium'>PWD</option>
                    </select>
                    <span>{errors.category && <span className='text-red-500 text-sm font-semibold'>{errors.category}</span>}</span>
                </div>
                <div className='w-1/2 md:w-5/12'>
                    <input 
                    type='password'
                    placeholder='Enter password'
                    name='password'
                    onChange={handleInput}
                    className='rounded-md shadow px-2 py-0.5 text-black outline-none text-base w-11/12'
                    />
                    <span>{errors.password && <span className='text-red-500 text-sm font-semibold'>{errors.password}</span>}</span>
                </div>
                <div className='w-1/2 md:w-5/12'>
                    <input 
                    type='password'
                    placeholder='ReEnter password'
                    name='reEnterPassword'
                    onChange={handleInput}
                    className='rounded-md shadow px-2 py-0.5 text-black outline-none text-base w-11/12'
                    />
                    <span>{errors.reEnterPassword && <span className='text-red-500 text-sm font-semibold'>{errors.reEnterPassword}</span>}</span>
                </div>
                <div className='w-1/2 md:w-5/12'>
                <input className='rounded-md shadow px-2 py-0.5 text-center font-extrabold text-white outline-none text-base bg-blue-700 w-11/12'
                style={{fontFamily: 'Oswald'}}
                value={captcha}
                readOnly />
                </div>
                
                <div className='w-1/2 md:w-5/12'>
                <input 
                  type='text'
                  placeholder='Enter Captcha'
                  name='cap'
                  onChange={handleInput}
                  className='rounded-md shadow px-2 py-0.5 text-black outline-none text-base w-11/12'
                />
                <span>{errors.cap && <span className='text-red-500 text-sm font-semibold'>{errors.cap}</span>}</span>
                </div>
                
              </div>

              <div className='text-red-700 text-md font-bold mx-6 md:mx-0'>Note: 
                <ol className='text-xs font-semibold text-teal-950'> 
                    {noteList.map(question => {
                        return (
                            <li key={question.key}>{question.key+1}. {question.description}</li>
                        );
                    })}  
                </ol>
              </div>

              <div className='flex flex-wrap justify-around
              my-5'>
                <button type='submit' className='bg-blue-600 rounded-xl px-3 py-1 text-white'>Register</button>
                <div className='flex flex-wrap justify-center items-center gap-2'>
                    <div className='text-xs text-slate-800 font-medium'>Already Registered?</div>
                    <Link to='/' className='bg-green-500 rounded-xl px-3 py-1 text-white'>Login</Link>
                </div>
                
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Signup