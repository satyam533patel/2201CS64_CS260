import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Thesis() {
  const [values, setValues] = useState({
    phd_name: '',
    phd_title: '',
    phd_role: '',
    phd_status: '',
    phd_yoc: '',
    pg_name: '',
    pg_title: '',
    pg_role: '',
    pg_status: '',
    pg_yoc: '',
    ug_name: '',
    ug_title: '',
    ug_role: '',
    ug_status: '',
    ug_yoc: ''
  })

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    console.log(event.target.value);
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/thesis', values)
    .then(res => {
      navigate('/rel_info');
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
              <div className='text-purple-700 text-center font-semibold text-xl my-3'>
                <h1>13. Research Supervision</h1>
              </div>
              
              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>(A) PHD Thesis Supervision</h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>

              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead>
                    <tr>
                      <th className='border border-slate-700 w-1/6 px-1'>Name of Student/Research Scholar</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Title of Thesis</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Role</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Ongoing/Completed</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Ongoing Since/ Year of Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='phd_name' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='phd_title' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'>
                        <select className='w-full'
                        name='phd_role' onChange={handleInput}>
                          <option value='Select'>Select</option>
                          <option value='Principal Investigator'>Supervisor with no Co-Supervisor</option>
                          <option value='Co-Investigator'>Supervisor with Co-Supervisor</option>
                          <option value='Co-Investigator'>Co-Supervisor</option>
                        </select>
                        </div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='phd_status' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='phd_yoc' onChange={handleInput} className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>(B). M.Tech/M.E./Master's Degree</h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>

              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead>
                    <tr>
                      <th className='border border-slate-700 w-1/6 px-1'>Name of Student/Research Scholar</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Title of Thesis</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Role</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Ongoing/Completed</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Ongoing Since/ Year of Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='pg_name' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='pg_title' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'>
                        <select className='w-full'
                        name='pg_role' onChange={handleInput}>
                          <option value='Select'>Select</option>
                          <option value='Principal Investigator'>Supervisor with no Co-Supervisor</option>
                          <option value='Co-Investigator'>Supervisor with Co-Supervisor</option>
                          <option value='Co-Investigator'>Co-Supervisor</option>
                        </select>
                        </div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='pg_status' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='pg_yoc' onChange={handleInput} className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>(C) B.Tech/B.E./Bachelor's Degree</h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>

              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead>
                    <tr>
                      <th className='border border-slate-700 w-1/6 px-1'>Name of Student</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Title of Project</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Role</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Ongoing/Completed</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Ongoing Since/ Year of Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='ug_name' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='ug_title' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'>
                        <select className='w-full'
                        name='ug_role' onChange={handleInput}>
                          <option value='Select'>Select</option>
                          <option value='Principal Investigator'>Supervisor with no Co-Supervisor</option>
                          <option value='Co-Investigator'>Supervisor with Co-Supervisor</option>
                          <option value='Co-Investigator'>Co-Supervisor</option>
                        </select>
                        </div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='ug_status' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='ug_yoc' onChange={handleInput} className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='flex flex-wrap items-center justify-between mt-3'>
                <div>
                  <Link to="/professional" className='bg-blue-900 text-white px-2 py-1 rounded-md'>
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