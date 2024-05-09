import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Academic() {
  const [values, setValues] = useState({
    phd_university: '',
    phd_department: '',
    phd_supervisor: '',
    phd_yoj: '',
    phd_doThesis: '',
    phd_doAward: '',
    phd_title: '',
    pg_degree: '',
    pg_university: '',
    pg_branch: '',
    pg_yoj: '',
    pg_yoc: '',
    pg_duration: '',
    pg_percentage: '',
    pg_divison: '',
    ug_degree: '',
    ug_university: '',
    ug_branch: '',
    ug_yoj: '',
    ug_yoc: '',
    ug_duration: '',
    ug_percentage: '',
    ug_divison: '',
    hsc_school: '',
    hsc_yop: '',
    hsc_percentage: '',
    hsc_divison: '',
    ssc_school: '',
    ssc_yop: '',
    ssc_percentage: '',
    ssc_divison: '',
    degree: '',
    university: '',
    branch: '',
    yoj: '',
    yoc: '',
    duration: '',
    percentage: '',
    divison: ''
  })
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    console.log(event.target.value);
  }
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/academic', values)
    .then(res => {
      navigate('/employment');
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
                <h1>2. Educational Qualifications</h1>
              </div>

              <div>
                <h2 className='text-white text-lg py-1 px-4' style={{backgroundColor:"#284b63"}}>(A) Details of PHD *</h2>
              </div>
              <div className='flex flex-wrap gap-y-2 mb-4 px-2 py-5'style={{backgroundColor:"#8ecae6"}}>
                <div className='grid grid-cols-2 gap-4 gap-x-24'>
                  <div className='grid grid-cols-2'>
                    <div><label>University/Institue: </label></div>
                    <div><input type="text" 
                    name='phd_university' onChange={handleInput}
                    required/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Department: </label></div>
                    <div><input type="text"
                    name='phd_department' onChange={handleInput}
                    required/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>PHD Supervisor: </label></div>
                    <div><input type="text"
                    name='phd_supervisor' onChange={handleInput}
                    required/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Joining Year: </label></div>
                    <div><input type="text"
                    name='phd_yoj' onChange={handleInput}
                    required/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Date of Thesis Defence: </label></div>
                    <div><input type="text"
                    name='phd_doThesis' onChange={handleInput}
                    required/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Date of Award: </label></div>
                    <div><input type="text"
                    name='phd_doAward' onChange={handleInput}
                    required/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Title of PHD Thesis: </label></div>
                    <div><input type="text"
                    name='phd_title' onChange={handleInput}
                    required/></div>
                  </div>
                </div>
                
              </div>

              <div>
                <h2 className='text-white text-lg py-1 px-4' style={{backgroundColor:"#284b63"}}>(B) Academic Details - M. Tech/ M.E./ PG Detail</h2>
              </div>
              <div className='flex flex-wrap gap-y-2 mb-4 px-2 py-5'style={{backgroundColor:"#8ecae6"}}>
                <div className='grid grid-cols-2 gap-4 gap-x-24'>
                  <div className='grid grid-cols-2'>
                    <div><label>Degree/Certificate: </label></div>
                    <div><input type="text"
                    name='pg_degree' onChange={handleInput} /></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>University/Institue: </label></div>
                    <div><input type="text"
                    name='pg_university' onChange={handleInput} /></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Branch/ Stream: </label></div>
                    <div><input type="text"
                    name='pg_branch' onChange={handleInput}/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Year of Joining: </label></div>
                    <div><input type="text"
                    name='pg_yoj' onChange={handleInput}/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Year of Completion: </label></div>
                    <div><input type="text"
                    name='pg_yoc' onChange={handleInput}/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Duration (in Years): </label></div>
                    <div><input type="text"
                    name='pg_duration' onChange={handleInput}/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Percentage: </label></div>
                    <div><input type="text"
                    name='pg_percentage' onChange={handleInput}/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>divison/ Class: </label></div>
                    <div><input type="text"
                    name='pg_divison' onChange={handleInput}/></div>
                  </div>
                </div>
                
              </div>

              <div>
                <h2 className='text-white text-lg py-1 px-4' style={{backgroundColor:"#284b63"}}>(C) Academic Details - B. Tech/ B.E./ UG Details *</h2>
              </div>
              <div className='flex flex-wrap gap-y-2 mb-4 px-2 py-5'style={{backgroundColor:"#8ecae6"}}>
                <div className='grid grid-cols-2 gap-4 gap-x-24'>
                  <div className='grid grid-cols-2'>
                    <div><label>Degree/Certificate: </label></div>
                    <div><input type="text" required
                    name='ug_degree' onChange={handleInput} /></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>University/Institue: </label></div>
                    <div><input type="text" required
                    name='ug_university' onChange={handleInput} /></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Branch/ Stream: </label></div>
                    <div><input type="text" required
                    name='ug_branch' onChange={handleInput}/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Year of Joining: </label></div>
                    <div><input type="text" required
                    name='ug_yoj' onChange={handleInput}/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Year of Completion: </label></div>
                    <div><input type="text" required
                    name='ug_yoc' onChange={handleInput}/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Duration (in Years): </label></div>
                    <div><input type="text" required
                    name='ug_duration' onChange={handleInput}/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>Percentage: </label></div>
                    <div><input type="text" required
                    name='ug_percentage' onChange={handleInput}/></div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div><label>divison/ Class: </label></div>
                    <div><input type="text" required
                    name='ug_divison' onChange={handleInput}/></div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='text-white text-lg py-1 px-4' style={{backgroundColor:"#284b63"}}>(D) Academic Details - School *</h2>
              </div>
              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead className='text-sm'>
                    <tr>
                      <th className='border border-slate-700 w-1/5'>10th/12th/HSC/Diploma</th>
                      <th className='border border-slate-700 w-1/5'>School</th>
                      <th className='border border-slate-700 w-1/5'>Year of Passing</th>
                      <th className='border border-slate-700 w-1/5'>Percentage/ Grade</th>
                      <th className='border border-slate-700 w-1/5'>Divison/ Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 w-1/5 p-1'>
                        <div><input type="text" placeholder='12th/HSC/Diploma' readOnly/></div>
                      </td>
                      <td className='border border-slate-700 w-1/5 p-1'>
                        <div><input type="text" required
                        name='hsc_school' onChange={handleInput}/></div>
                      </td>
                      <td className='border border-slate-700 w-1/5 p-1'>
                        <div><input type="text" required
                        name='hsc_yop' onChange={handleInput}/></div>
                      </td>
                      <td className='border border-slate-700 w-1/5 p-1'>
                        <div><input type="text" required
                        name='hsc_percentage' onChange={handleInput}/></div>
                      </td>
                      <td className='border border-slate-700 w-1/5 p-1'>
                        <div><input type="text" required
                        name='hsc_divison' onChange={handleInput}/></div>
                      </td>
                    </tr>
                    <tr>
                      <td className='border border-slate-700 w-1/5 p-1'>
                        <div><input type="text" placeholder='10th' readOnly/></div>
                      </td>
                      <td className='border border-slate-700 w-1/5 p-1'>
                        <div><input type="text" required
                        name='ssc_school' onChange={handleInput}/></div>
                      </td>
                      <td className='border border-slate-700 w-1/5 p-1'>
                        <div><input type="text" required
                        name='ssc_yop' onChange={handleInput}/></div>
                      </td>
                      <td className='border border-slate-700 w-1/5 p-1'>
                        <div><input type="text" required
                        name='ssc_percentage' onChange={handleInput}/></div>
                      </td>
                      <td className='border border-slate-700 w-1/5 p-1'>
                        <div><input type="text" required
                        name='ssc_divison' onChange={handleInput}/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>(E) Additional Educational Qualifications</h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>
              <div className='' style={{backgroundColor:"#8ecae6"}}>
              <table className='border-separate border border-slate-800 py-5'>
                  <thead  className='text-sm'>
                    <tr>
                      <th className='border border-slate-700 px-1'>Degree/Certificate</th>
                      <th className='border border-slate-700 px-1'>University/Institute</th>
                      <th className='border border-slate-700 px-1'>Branch/Stream</th>
                      <th className='border border-slate-700 px-1'>Year of Joining</th>
                      <th className='border border-slate-700 px-1'>Year of Completion</th>
                      <th className='border border-slate-700 px-1'>Duration (in Years)</th>
                      <th className='border border-slate-700 px-1'>Percentage/Grade</th>
                      <th className='border border-slate-700 px-1'>Divison/Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' className='w-11/12'
                        onChange={handleInput} name='degree' /></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' className='w-11/12'
                        onChange={handleInput} name='university' /></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' className='w-11/12'
                        onChange={handleInput} name='branch' /></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' className='w-11/12'
                        onChange={handleInput} name='yoj' /></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' className='w-11/12'
                        onChange={handleInput} name='yoc' /></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' className='w-11/12'
                        onChange={handleInput} name='duration' /></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' className='w-11/12'
                        onChange={handleInput} name='percentage' /></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text' className='w-11/12'
                        onChange={handleInput} name='divison' /></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
