import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Relatedinfo() {
  const [values, setValues] = useState({
    research: '',
    teaching: '',
    other_info: '',
    professional: '',
    journal: ''
  })

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    console.log(event.target.value);
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/rel_info', values)
    .then(res => {
      navigate('/submissions');
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>

        <div className=' w-full min-w-96 overflow-auto' style={{ backgroundColor: "#d3d3d3" }}> 

        <div className="flex flex-wrap justify-center content-start gap-y-6 md:gap-y-12 w-full min-w-96 h-screen min-h-fit">
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

          <div className="flex flex-wrap gap-10 justify-between rounded-xs shadow-lg overflow-auto bg-sky-100
            max-w-xs md:w-full md:max-w-5xl min-w-96
            mb-10 px-7 py-4"
          >
            <div className='flex flex-wrap items-center w-full'>
              <div className='w-4/6 font-semibold text-xl'><h1>Welcome <span className='text-teal-800'></span></h1></div>
              <div className='flex flex-wrap gap-4 w-2/6 justify-end'>
                <Link to='/forgotpassword' className='bg-green-500 px-2 py-1 my-2 text-white font-normal rounded-md hidden'
                onClick={() => {/* handle change password */}}>
                  Change Password
                </Link>
                <Link to='/' className='bg-red-500 px-2 py-1 my-2 text-white font-normal rounded-md'
                onClick={() => {/* handle logout */}}>
                  Logout
                </Link>
              </div>
            </div>

            {/* block */}
            <div className='w-screen'>
              <form action='' onSubmit={handleSubmit}>
              <div className='text-white text-lg py-1 px-4' style={{backgroundColor:"#284b63"}}>
                <h2 >14. Significant research contribution and future plans *</h2>
                <p className='text-sm'>(Please provide a Research Statement describing your research plans and one or two specific research projects to be conducted at IIT Patna in 2-3 years time frame)</p>
              </div>

              <div className='flex flex-wrap gap-y-2 mb-4 px-2 py-5'style={{backgroundColor:"#8ecae6"}}>
                <textarea rows='10' cols='125' 
                name='research' onChange={handleInput} className='mx-1' required>

                </textarea>
              </div>

              <div className='text-white text-lg py-1 px-4' style={{backgroundColor:"#284b63"}}>
                <h2 >15. Significant teaching contribution and future plans * </h2>
                <p className='text-sm'>(Please list UG/PG courses that you would like to develop and/or teach at IIT Patna)</p>
              </div>

              <div className='flex flex-wrap gap-y-2 mb-4 px-2 py-5'style={{backgroundColor:"#8ecae6"}}>
                <textarea rows='10' cols='125' 
                name='teaching' onChange={handleInput} className='mx-1' required>

                </textarea>
              </div>

              <div className='text-white text-lg py-1 px-4' style={{backgroundColor:"#284b63"}}>
                <h2 >16. Any other relevant information *</h2>
                {/* <p className='text-sm'>(Please provide a Research Statement describing your research plans and one or two specific research projects to be conducted at IIT Patna in 2-3 years time frame)</p> */}
              </div>

              <div className='flex flex-wrap gap-y-2 mb-4 px-2 py-5'style={{backgroundColor:"#8ecae6"}}>
                <textarea rows='10' cols='125' 
                name='other_info' onChange={handleInput} className='mx-1' required>

                </textarea>
              </div>

              <div className='text-white text-lg py-1 px-4' style={{backgroundColor:"#284b63"}}>
                <h2 >17. Professional Service : Editorship/Reviewership *</h2>
                {/* <p className='text-sm'>(Please provide a Research Statement describing your research plans and one or two specific research projects to be conducted at IIT Patna in 2-3 years time frame)</p> */}
              </div>

              <div className='flex flex-wrap gap-y-2 mb-4 px-2 py-5'style={{backgroundColor:"#8ecae6"}}>
                <textarea rows='10' cols='125' 
                name='professional' onChange={handleInput} className='mx-1' required>

                </textarea>
              </div>

              <div className='text-white text-lg py-1 px-4' style={{backgroundColor:"#284b63"}}>
                <h2 >18. Detailed List of Journal Publication *</h2>
                <p className='text-sm'>(Including Sr. No., Author's Names, Paper Title, Volume, Issue, Year, Page Nos., Impact Factor (if any), DOI, Status[Published/Accepted] )</p>
              </div>

              <div className='flex flex-wrap gap-y-2 mb-4 px-2 py-5'style={{backgroundColor:"#8ecae6"}}>
                <textarea rows='10' cols='125' 
                name='journal' onChange={handleInput} className='mx-1' required>

                </textarea>
              </div>

              <div className='flex flex-wrap items-center justify-between mt-3'>
                <div>
                  <Link to="/thesis" className='bg-blue-900 text-white px-2 py-1 rounded-md'>
                    Back
                  </Link>
                </div>
                <div>
                  <button type='submit' className='bg-green-500 text-white px-2 py-1 rounded-md'>
                    Save & Next
                  </button>
                </div>
              </div>
            </form>



            </div>
          </div>
          
        </div>

        </div>
    </>
  )
}
