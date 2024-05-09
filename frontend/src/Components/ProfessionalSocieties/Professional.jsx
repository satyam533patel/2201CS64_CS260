import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Professional() {
  const [values, setValues] = useState({
    name: '',
    membership: '',
    pttype: '',
    ptorganization: '',
    ptyear: '',
    ptduration: '',
    arname: '',
    awardedby: '',
    aryear: '',
    sp_agency: '',
    sp_title: '',
    sp_amount: '',
    sp_period: '',
    sp_role: '',
    sp_status: '',
    cp_agency: '',
    cp_title: '',
    cp_amount: '',
    cp_period: '',
    cp_role: '',
    cp_status: ''
  })

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    console.log(event.target.value);
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/professional', values)
    .then(res => {
      navigate('/thesis');
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
              <form action='' 
              onSubmit={handleSubmit}
              >
              <div className='text-purple-700 text-center font-semibold text-xl mb-3'>
                <h1>9. Membership of Professional Societies</h1>
              </div>
              
              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>Fill the Details</h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>

              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead>
                    <tr>
                      <th className='border border-slate-700 w-1/6 px-1'>Name of the Professional Society</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Membership Status (Lifetime/Annual)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='name' onChange={handleInput}
                        className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='membership' onChange={handleInput}
                        className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='text-purple-700 text-center font-semibold text-xl my-3'>
                <h1>10. Professional Training</h1>
              </div>
              
              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>Fill the Details</h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>

              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead>
                    <tr>
                      <th className='border border-slate-700 w-1/6 px-1'>Type of Training Received</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Organization</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Years</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Duration (in Years & Months)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='pttype'
                        onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='ptorganization'
                        onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='ptyear'
                        onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='ptduration'
                        onChange={handleInput} className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='text-purple-700 text-center font-semibold text-xl my-3'>
                <h1>11. Award(s) and Recognition(s)</h1>
              </div>
              
              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>Fill the Details</h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>

              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead>
                    <tr>
                      <th className='border border-slate-700 w-1/6 px-1'>Name of the Award</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Awarded By</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>

              <div className='text-purple-700 text-center font-semibold text-xl my-3'>
                <h1>12. Sponsored Projects/ Consultancy Details</h1>
              </div>

              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>(A) Sponsored Projects</h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>

              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead>
                    <tr>
                      <th className='border border-slate-700 w-1/6 px-1'>Sponsoring Agency</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Title of Project</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Sanctioned Amount (₹)</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Period</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Role</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Status (Completed/On-going)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='sp_agency'
                        onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='sp_title'
                        onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='sp_amount'
                        onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='sp_period'
                        onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'>
                        <select className='w-full' name='sp_role'
                        onChange={handleInput}>
                          <option value='Select'>Select</option>
                          <option value='Principal Investigator'>Principal Investigator</option>
                          <option value='Co-Investigator'>Co-Investigator</option>
                        </select>
                        </div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='sp_status'
                        onChange={handleInput} className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>(B) Consultancy Project</h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>

              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead>
                    <tr>
                      <th className='border border-slate-700 w-1/6 px-1'>Organization</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Title of Project</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Amount of Grant</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Period</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Role</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Status (Completed/On-going)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='cp_agency'
                        onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='cp_title'
                        onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='cp_amount'
                        onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='cp_period'
                        onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'>
                        <select className='w-full' name='cp_role'
                        onChange={handleInput}>
                          <option value='Select'>Select</option>
                          <option value='Principal Investigator'>Principal Investigator</option>
                          <option value='Co-Investigator'>Co-Investigator</option>
                        </select>
                        </div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' name='cp_status'
                        onChange={handleInput} className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex flex-wrap items-center justify-between mt-3'>
                <div>
                  <Link to="/publications" className='bg-blue-900 text-white px-2 py-1 rounded-md'>
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
