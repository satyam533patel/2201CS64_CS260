import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Submissions() {
  const [values, setValues] = useState({
    ref_name: '',
    ref_position: '',
    ref_association: '',
    ref_organization: '',
    ref_mail: '',
    ref_contact: ''
  })
  
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    console.log(event.target.value);
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/submissions', values)
    .then(res => {
      navigate('/payment');
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
              <form onSubmit={handleSubmit}>
              <div className='text-purple-700 text-center font-semibold text-xl mb-3'>
                <h1>20. Reprints of 5 Best Research Papers *</h1>
              </div> 

              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>Upload 5 Best Research Papers in a single PDF less than 6MB</h2></div>
                <div><button className='text-white bg-blue-600 p-0.5 text-sm rounded-md' >View Uploaded File</button></div>
              </div>
              <div className='grid grid-cols-3' style={{backgroundColor:"#8ecae6"}}>
                <div className='col-span-1 p-5'><label>Update 5 best papers</label></div>
                <div className='col-span-2 p-5'><input type="file" className='w-5/6' required /></div>
              </div>

              <div className='text-purple-700 text-center font-semibold text-xl my-3'>
                <h1>21. Check List of the documents attached with the online application *</h1>
              </div>

              <div>
                <h2 className='text-center text-white font-semibold text-xl py-1' style={{backgroundColor:"#284b63"}}>Check List of the documents attached with the online application (Documents should be uploaded in PDF format only):</h2>
              </div>

              <div className='grid grid-cols-3 gap-4'>
                <div>
                  <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                    <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>PHD Certificate</h2></div>
                    <div><button className='text-white bg-blue-600 p-0.5 text-sm rounded-md' >View Uploaded File</button></div>
                  </div>
                  <div className='flex flex-wrap justify-center items-center' style={{backgroundColor:"#8ecae6"}}>
                    <div className='p-3 text-md font-semibold text-center'><label>Update PHD Certificate</label></div>
                    <div className='p-3 text-center justify-center'><input type="file" required /></div>
                  </div>
                </div>

                <div>
                  <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                    <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>PG Documents</h2></div>
                    <div><button className='text-white bg-blue-600 p-0.5 text-sm rounded-md' >View Uploaded File</button></div>
                  </div>
                  <div className='flex flex-wrap justify-center items-center' style={{backgroundColor:"#8ecae6"}}>
                    <div className='p-3 text-md font-semibold text-center'><label>Update All semester/year-Marksheets and degree certificate</label></div>
                    <div className='p-3'><input type="file" required /></div>
                  </div>
                </div>

                <div>
                  <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                    <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>UG Documents</h2></div>
                    <div><button className='text-white bg-blue-600 p-0.5 text-sm rounded-md' >View Uploaded File</button></div>
                  </div>
                  <div className='flex flex-wrap justify-center items-center' style={{backgroundColor:"#8ecae6"}}>
                    <div className='p-3 text-md font-semibold text-center'><label>Update All semester/year-Marksheets and degree certificate</label></div>
                    <div className='p-3'><input type="file" required /></div>
                  </div>
                </div>

                <div>
                  <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                    <div><h2 className='text-white text-md px-4' style={{backgroundColor:"#284b63"}}>12th/HSC Documents</h2></div>
                    <div><button className='text-white bg-blue-600 p-0.5 text-sm rounded-md' >View Uploaded File</button></div>
                  </div>
                  <div className='flex flex-wrap justify-center items-center' style={{backgroundColor:"#8ecae6"}}>
                    <div className='p-3 text-md font-semibold text-center'><label>Update 12th/HSC/Marksheet(s) and passing certificate</label></div>
                    <div className='p-3 text-center justify-center'><input type="file" required /></div>
                  </div>
                </div>

                <div>
                  <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                    <div><h2 className='text-white text-md px-4' style={{backgroundColor:"#284b63"}}>10th/SSC Documents</h2></div>
                    <div><button className='text-white bg-blue-600 p-0.5 text-sm rounded-md' >View Uploaded File</button></div>
                  </div>
                  <div className='flex flex-wrap justify-center items-center' style={{backgroundColor:"#8ecae6"}}>
                    <div className='p-3 text-md font-semibold text-center'><label>Update 10th/SSC/Marksheet(s) and passing certificate</label></div>
                    <div className='p-3'><input type="file" required /></div>
                  </div>
                </div>

                <div>
                  <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                    <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>Pay Slip</h2></div>
                    <div><button className='text-white bg-blue-600 p-0.5 text-sm rounded-md' >View Uploaded File</button></div>
                  </div>
                  <div className='flex flex-wrap justify-center items-center' style={{backgroundColor:"#8ecae6"}}>
                    <div className='p-3 text-md font-semibold text-center'><label>Update Pay Slip</label></div>
                    <div className='p-3'><input type="file" required /></div>
                  </div>
                </div>                
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                    <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>NOC or Undertaking</h2></div>
                    <div><button className='text-white bg-blue-600 p-0.5 text-sm rounded-md' >View Uploaded File</button></div>
                  </div>
                  <div className='flex flex-wrap justify-center items-center' style={{backgroundColor:"#8ecae6"}}>
                    <div className='p-3 text-md font-semibold text-center'><label>Undertaking-in case, NOC is not available at the time of application but will be provided at the time of interview</label></div>
                    <div className='p-3'><input type="file" required /></div>
                  </div>
                </div> 
                <div>
                  <div className='flex mt-5 justify-center items-center py-1' style={{backgroundColor:"#284b63"}}>
                    <div><h2 className='text-white text-md px-2' style={{backgroundColor:"#284b63"}}>Post phd Experience Certificate/All Experience Certificates/ Last Pay slip</h2></div>
                    <div><button className='text-white bg-blue-600 mx-2 text-sm rounded-md'>View Uploaded File</button></div>
                  </div>
                  <div className='flex flex-wrap justify-center items-center' style={{backgroundColor:"#8ecae6"}}>
                    <div className='p-3 text-md font-semibold text-center'><label>Update Certificate</label></div>
                    <div className='p-3'><input type="file" required /></div>
                  </div>
                </div> 
              </div>

              <div>
                <div className='flex mt-5 justify-center items-center py-1' style={{backgroundColor:"#284b63"}}>
                  <div><h2 className='text-white text-md px-2' style={{backgroundColor:"#284b63"}}>Upload any other relevant document in a single PDF (For example award certificate, experience certificate etc) . If there are multiple documents, combine all the documents in a single PDF less than 1MB.</h2></div>
                  {/* <div><button className='text-white bg-blue-600 mx-2 text-sm rounded-md'>View Uploaded File</button></div> */}
                </div>
                <div className='flex flex-wrap justify-center items-center' style={{backgroundColor:"#8ecae6"}}>
                  <div className='p-3 text-md font-semibold text-center'><label>Upload any other document</label></div>
                  <div className='p-3'><input type="file" required /></div>
                </div>
              </div>

              <div className='w-2/5'>
                <div className='flex mt-5 justify-center items-center py-1' style={{backgroundColor:"#284b63"}}>
                  <div><h2 className='text-white text-md px-2' style={{backgroundColor:"#284b63"}}>Upload your Signature in JPG only</h2></div>
                </div>
                <div className='flex flex-wrap justify-center items-center' style={{backgroundColor:"#8ecae6"}}>
                  <div className='p-3'><input type="file" required /></div>
                </div>
              </div>

              <div className='text-purple-700 text-center font-semibold text-xl my-3'>
                <h1>22. Referees *</h1>
              </div>

              <div>
                <h2 className='text-white text-lg py-1 px-4' style={{backgroundColor:"#284b63"}}>Fill in the Details</h2>
              </div>
              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead className='text-sm'>
                    <tr>
                      <th className='border border-slate-700 px-1'>Name </th>
                      <th className='border border-slate-700 px-1'>Position</th>
                      <th className='border border-slate-700 px-1'>Association with Refree</th>
                      <th className='border border-slate-700 px-1'>Institution/Organisation</th>
                      <th className='border border-slate-700 px-1'>E-mail</th>
                      <th className='border border-slate-700 px-1'>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='ref_name' onChange={handleInput} className='w-11/12'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='ref_position' onChange={handleInput} className='w-11/12'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><select
                        name='ref_association' onChange={handleInput} required>
                          <option value='Select'>Select</option>
                          <option value='Thesis Supervisor'>Thesis Supervisor</option>
                          <option value='PostDoc Supervisor'>PostDoc Supervisor</option>
                          <option value='Research Collaborator'>Research Collaborator</option>
                          <option value='Other'>Other</option>
                        </select></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='ref_organization' onChange={handleInput} className='w-11/12'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='ref_mail' onChange={handleInput} className='w-11/12'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='ref_contact' onChange={handleInput} className='w-11/12'/></div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>

              <div className='flex flex-wrap items-center justify-between mt-3'>
              <div>
                <Link to="/rel_info" className='bg-blue-900 text-white px-2 py-1 rounded-md'>
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
