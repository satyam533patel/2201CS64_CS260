import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Publications() {
  const [values, setValues] = useState({
    IJP: '',
    NJP: '',
    ICP: '',
    NCP: '',
    patent: '',
    book: '',
    chapter: '',
    j_author: '',
    j_title: '',
    j_name: '',
    j_year: '',
    j_impact: '',
    j_doi: '',
    j_status: '',
    p_inventor: '',
    p_title: '',
    p_country: '',
    p_number: '',
    p_dof: '',
    p_status: '',
    b_author: '',
    b_title: '',
    b_yop: '',
    b_isbn: '',
    c_author: '',
    c_title: '',
    c_yop: '',
    c_isbn: '',
    link: ''
  })

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    console.log(event.target.value);
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/publications', values)
    .then(res => {
      navigate('/professional');
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
                <h1>5. Summary of Publications *</h1>
              </div>

              <div className='flex flex-wrap gap-y-2 mb-4 px-2 py-5'style={{backgroundColor:"#8ecae6"}}>
                <div className='grid grid-cols-2 gap-4 gap-x-24'>
                  <div className='grid grid-cols-4'>
                    <div className='col-span-3'><label>Number of International Journal Papers </label></div>
                    <div><input type="text" className='w-3/4'
                    name='IJP' onChange={handleInput} required/></div>
                  </div>
                  <div className='grid grid-cols-4'>
                    <div className='col-span-3'><label>Number of National Journal Papers </label></div>
                    <div><input type="text" className='w-3/4'
                    name='NJP' onChange={handleInput} required/></div>
                  </div>
                  <div className='grid grid-cols-4'>
                    <div className='col-span-3'><label>Number of International Conference Papers </label></div>
                    <div><input type="text" className='w-3/4'
                    name='ICP' onChange={handleInput} required/></div>
                  </div>
                  <div className='grid grid-cols-4'>
                    <div className='col-span-3'><label>Number of National Conference Papers </label></div>
                    <div><input type="text" className='w-3/4'
                    name='NCP' onChange={handleInput} required/></div>
                  </div>
                  <div className='grid grid-cols-4'>
                    <div className='col-span-3'><label>Number of Patent(s) [Filed, Published, Granted] </label></div>
                    <div><input type="text" className='w-3/4'
                    name='patent' onChange={handleInput} required/></div>
                  </div>
                  <div className='grid grid-cols-4'>
                    <div className='col-span-3'><label>Number of Book(s) </label></div>
                    <div><input type="text" className='w-3/4'
                    name='book' onChange={handleInput} required/></div>
                  </div>
                  <div className='grid grid-cols-4'>
                    <div className='col-span-3'><label>Number of Book Chapter(s)</label></div>
                    <div><input type="text" className='w-3/4'
                    name='chapter' onChange={handleInput} required/></div>
                  </div>
                </div>
              </div>

              <div className='text-purple-700 text-center font-semibold text-xl mb-3'>
                <h1>6. List of 10 Best Publications (Journal/Conference)</h1>
              </div>

              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}>List of 10 Best Publications (Journal/Conference) </h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>

              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead>
                    <tr>
                      <th className='border border-slate-700 w-1/6 px-1'>Author(s)</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Title</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Name of Journal/ Conference</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Year, Vol., Page</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Impact Factor</th>
                      <th className='border border-slate-700 w-1/12 px-1'>DOI</th>
                      <th className='border border-slate-700 w-1/12 px-1'>Status</th>
                    </tr>
                  </thead>  
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='j_author' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='j_title' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='j_name' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='j_year' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='j_impact' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='j_doi' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='j_status' onChange={handleInput} className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>  
                </table>
              </div>

              <div className='text-purple-700 text-center font-semibold text-xl my-3'>
                <h1>7. List of Patent(s), Book(s), Book Chapter(s)</h1>
              </div>

              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}> (A) Patents </h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>

              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead className='text-sm'>
                    <tr>
                      <th className='border border-slate-700 w-1/6 px-1'>Inventor(s)</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Title of Patent</th>
                      <th className='border border-slate-700 w-1/12 px-1'>Country of Patent</th>
                      <th className='border border-slate-700 w-1/12 px-1'>Patent Number</th>
                      <th className='border border-slate-700 w-1/12 px-1'>Date of Filing</th>
                      <th className='border border-slate-700 w-1/12 px-1'>Date of Published</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Status Filed/Published/Granted</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='p_inventor' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='p_title' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='p_country' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='p_number' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='p_dof' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='p_dop' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='p_status' onChange={handleInput} className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}> (B) Books </h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>

              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead className='text-sm'>
                    <tr>
                      <th className='border border-slate-700 w-2/6 px-1'>Author(s)</th>
                      <th className='border border-slate-700 w-2/6 px-1'>Title of the Book</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Year of Publication</th>
                      <th className='border border-slate-700 w-1/6 px-1'>ISBN</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='b_author' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='b_title' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='b_yop' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='b_isbn' onChange={handleInput} className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex flex-wrap mt-5 items-center py-1' style={{backgroundColor:"#284b63"}}>
                <div><h2 className='text-white text-lg px-4' style={{backgroundColor:"#284b63"}}> (C) Books Chapter(s)  </h2></div>
                <div><button className='text-white bg-red-600 p-0.5 text-sm rounded-md' >Add More</button></div>
              </div>

              <div className='' style={{backgroundColor:"#8ecae6"}}>
                <table className='border-separate border border-slate-800 py-5'>
                  <thead className='text-sm'>
                    <tr>
                    <th className='border border-slate-700 w-2/6 px-1'>Author(s)</th>
                      <th className='border border-slate-700 w-2/6 px-1'>Title of the Book Chapter(s)</th>
                      <th className='border border-slate-700 w-1/6 px-1'>Year of Publication</th>
                      <th className='border border-slate-700 w-1/6 px-1'>ISBN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='c_author' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='c_title' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='c_yop' onChange={handleInput} className='w-full'/></div>
                      </td>
                      <td className='border border-slate-700 p-1'>
                        <div className='flex flex-wrap justify-center'><input type='text'
                        name='c_isbn' onChange={handleInput} className='w-full'/></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='text-purple-700 text-center font-semibold text-xl my-3'>
                <h1>8. Google Scholar Link *</h1>
              </div>

              <div>
                <h2 className='text-white text-lg py-1 px-4' style={{backgroundColor:"#284b63"}}>URL</h2>
              </div>
              <div className='grid grid-cols-12 py-2' style={{backgroundColor:"#8ecae6"}}>
                <div className='col-span-3 px-2'><label type='link'>Google Scholar Link</label></div>
                <div className='col-span-9 w-full'><input type='link'
                name='link' onChange={handleInput} className='w-11/12' required/></div>
              </div>

              <div className='flex flex-wrap items-center justify-between mt-3'>
              <div>
                <Link to="/employment" className='bg-blue-900 text-white px-2 py-1 rounded-md'>
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
