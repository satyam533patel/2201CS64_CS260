import React from 'react'
import { Link } from 'react-router-dom'

export default function Payment() {
  return (
    <>
        {/* <Link to='/submissions' className='bg-red-500 rounded-xl px-3 py-1 text-white'>Back</Link>
        <br/>
        <br/>
        <br/>
        <Link to='/applicationForm' className='bg-green-500 text-center rounded-xl px-3 py-1 text-white w-20'>Save & Next</Link> */}

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
              <div>
                <h2 className='text-white font-semibold text-xl py-1 px-3' style={{backgroundColor:"#284b63"}}>23. Final Declaration</h2>
              </div>
              <div className='gap-x-20 gap-y-2 mb-4  justify-center px-2 py-5'style={{backgroundColor:"#8ecae6"}}>
                <p className='text-sm border border-collapse bg-slate-400 p-4'>
                I hereby declare that I have carefully read and understood the instructions and particulars mentioned in the advertisment and this application form. I further declare that all the entries along with the attachments uploaded in this form are true to the best of my knowledge and belief.
                </p>
                <input type="checkbox" className='px-3 mx-3'/>
              </div>

              <div className='text-red-500 font-medium text-md'>Note: The form can be edited till the cutoff date of the rolling advertisment.</div>
              

            </div>
          
            <div>
              <Link to="/submissions" className='bg-blue-900 text-white px-2 py-1 rounded-md'>
                Back
              </Link>
            </div>
            <div>
              <Link to="/applicationForm" className='bg-green-500 text-white px-2 py-1 rounded-md'>
                Save & Submit
              </Link>
            </div>

          </div>
          
        </div>

        </div>
    </>
  )
}
