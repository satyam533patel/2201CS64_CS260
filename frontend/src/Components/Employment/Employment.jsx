import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Employment() {

  const [values, setValues] = useState({
    e_position: '',
    e_organization: '',
    e_status: '',
    e_doj: '',
    e_doc: '',
    e_duration: '',
    em_position: '',
    em_organization: '',
    em_doj: '',
    em_dol: '',
    em_duration: '',
    t_position: '',
    t_employer: '',
    t_course: '',
    t_ugnpg: '',
    t_nostudent: '',
    t_doj: '',
    t_dol: '',
    t_duration: '',
    r_position: '',
    r_institute: '',
    r_supervisor: '',
    r_doj: '',
    r_dol: '',
    r_duration: '',
    i_organization: '',
    i_profile: '',
    i_doj: '',
    i_dol: '',
    i_duration: '',
    aos: '',
    aor: ''
  })
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    console.log(event.target.value);
  }
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/employment', values)
    .then(res => {
      navigate('/publications');
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
              <div className='text-purple-700 text-center font-semibold text-xl mb-3'>
                <h1>3. Employment Details</h1>
              </div>

              <div>
                <h2 className='text-white text-lg py-1 px-4' style={{backgroundColor:"#284b63"}}>(A) Present Employment *</h2>
              </div>
              <div className='flex flex-wrap gap-y-2 mb-4 px-2 py-5'style={{backgroundColor:"#8ecae6"}}>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='grid grid-cols-2 gap-2'>
                    <div><label>Position: </label></div>
                    <div><input type="text"
                    name='e_position' onChange={handleInput} required/></div>
                  </div>
                  <div className='grid grid-cols-2 gap-2'>
                    <div><label>Organisation/Institution: </label></div>
                    <div><input type="text"
                    name='e_organization' onChange={handleInput} required/></div>
                  </div>
                  <div className='grid grid-cols-2 gap-2'>
                    <div><label>Status: </label></div>
                    <div><input type="text"
                    name='e_status' onChange={handleInput} required/></div>
                  </div>
                  <div className='grid grid-cols-2 gap-2'>
                    <div><label>Date of Joining: </label></div>
                    <div><input type="text"
                    name='e_doj' onChange={handleInput} required/></div>
                  </div>
                  <div className='grid grid-cols-2 gap-2'>
                    <div><label>Date of Completion: </label></div>
                    <div><input type="text"
                    name='e_doc' onChange={handleInput} required/></div>
                  </div>
                  <div className='grid grid-cols-2 gap-2'>
                    <div><label>Duration (in Years & Months): </label></div>
                    <div><input type="text"
                    name='e_duration' onChange={handleInput} required/></div>
                  </div>
                </div>
              </div>

              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>(B) Employment History (After PHD, Starting with Latest)</h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>
              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead className=''>
                    <tr>
                      <th className='border border-slate-700 w-1/5 px-1'>Position</th>
                      <th className='border border-slate-700 w-1/5 px-1'>Organization/Institution</th>
                      <th className='border border-slate-700 w-1/5 px-1'>Date of Joining</th>
                      <th className='border border-slate-700 w-1/5 px-1'>Date of Leaving</th>
                      <th className='border border-slate-700 w-1/5 px-1'>Duration (in Years & Months)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='em_position' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='em_organization' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='em_doj' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='em_dol' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='em_duration' onChange={handleInput} className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className='text-red-700 bg-white font-medium mx-3 mt-3 px-3'>
                    <p>Experience: Minimum 6 years’ experience of which at least 3 years should be at the level of Assistant Professor Grade I/Senior Scientific Officer/Senior Design Engineer.</p>
                </div>
                <div className='mx-3'>
                  <input type='checkbox' name='minExp' onChange={handleInput}/>
                  <label> Yes </label>
                </div>

              </div>

              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>(C) Teaching Experience (After PHD)</h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>
              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead className=''>
                    <tr>
                      <th className='border border-slate-700 px-1'>Position</th>
                      <th className='border border-slate-700 px-1'>Employer</th>
                      <th className='border border-slate-700 px-1'>Course Taught</th>
                      <th className='border border-slate-700 px-1'>UG/PG</th>
                      <th className='border border-slate-700 px-1'>No of Students</th>
                      <th className='border border-slate-700 px-1'>Date of Joining</th>
                      <th className='border border-slate-700 px-1'>Date of Leaving</th>
                      <th className='border border-slate-700 px-1'>Duration (in Years & Months)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='t_position' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='t_employer' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='t_course' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='t_ugnpg' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='t_nostudent' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='t_doj' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='t_dol' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='t_duration' onChange={handleInput} className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>(D) Research Experience (Post PHD, including Post Doctoral) </h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>
              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead className='text-sm'>
                    <tr>
                      <th className='border border-slate-700 px-1 w-1/4'>Position</th>
                      <th className='border border-slate-700 px-1 w-1/4'>Institute</th>
                      <th className='border border-slate-700 px-1 w-1/4'>Supervisor</th>
                      <th className='border border-slate-700 px-1 w-1/12'>Date of Joining</th>
                      <th className='border border-slate-700 px-1 w-1/12'>Date of Leaving</th>
                      <th className='border border-slate-700 px-1 w-1/12'>Duration (in Years & Months)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='r_position' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='r_institute' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='r_supervisor' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='r_doj' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='r_dol' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='r_duration' onChange={handleInput} className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>(E) Industrial Experience </h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>
              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead>
                    <tr>
                      <th className='border border-slate-700 px-1'>Organization</th>
                      <th className='border border-slate-700 px-1'>Work Profile</th>
                      <th className='border border-slate-700 px-1'>Date of Joining</th>
                      <th className='border border-slate-700 px-1'>Date of Leaving</th>
                      <th className='border border-slate-700 px-1'>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='i_organization' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='i_profile' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='i_doj' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='i_dol' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='i_duration' onChange={handleInput} className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='text-purple-700 text-center font-semibold text-xl my-3'>
                <h1>4. Area(s) of Specialization and Current Area(s) of Research</h1>
              </div>

              <div className='grid grid-cols-2'>
                <div className='px-4' style={{backgroundColor:"#8ecae6"}}>
                  <div className='w-full font-medium py-0.5 px-2'><label>Areas of specialization</label></div>
                  <div>
                    <textarea rows="6" cols="50"
                    name='aos' onChange={handleInput} className='rounded-lg'>
                    </textarea>
                  </div>
                </div>
                <div className='px-4' style={{backgroundColor:"#8ecae6"}}>
                  <div className='w-full font-medium py-0.5 px-2'><label>Current Area of research</label></div>
                  <div>
                    <textarea rows="6" cols="50"
                    name='aor' onChange={handleInput} className='rounded-lg'>
                    </textarea>
                  </div>
                </div>
              </div>

              <div className='flex flex-wrap items-center justify-between mt-3'>
              <div>
                <Link to="/faculty_panel" className='bg-blue-900 text-white px-2 py-1 rounded-md'>
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
