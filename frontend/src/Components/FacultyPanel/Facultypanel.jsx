import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Validation from './FCValidation';
import axios from 'axios';
const Facultypanel = () => {

  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [values, setValues] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    nationality: '',
    DOB: '',
    Gender: '',
    category: '',
    martialStatus: '',
    ID_Proof: '',
    fathersName: '',
    correspondenceAddress: '',
    permanentAddress: '',
    email: '',
    altEmail: '',
    Mobile: '',
    altMobile: '',
    landlineNo: ''
  })

  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    console.log(event.target.value);
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    const err = Validation(values);
    axios.post('http://localhost:8081/faculty_panel', values)
    .then(res => {
        navigate('/academic');
      }
    )
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className=' w-full min-w-96 overflow-auto'
    style={{ backgroundColor: "#d3d3d3" }}> 

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
          className="flex flex-wrap gap-10 justify-evenly rounded-xs shadow-lg overflow-auto bg-sky-100
        max-w-xs md:w-full md:max-w-5xl min-w-96
        mb-10 px-7 py-4"
        >
          <div className='flex flex-wrap items-center w-full'>
            <div className='w-4/6 font-semibold text-xl'><h1>Welcome <span className='text-teal-800'></span></h1></div>
            <div className='flex flex-wrap gap-4 w-2/6 justify-end'>
              <Link to='/forgotpassword' className='bg-green-500 px-2 py-1 my-2 text-white font-normal rounded-md'
              onClick={() => {/* handle change password */}}>
                Change Password
              </Link>
              <Link to='/' className='bg-red-500 px-2 py-1 my-2 text-white font-normal rounded-md'
              onClick={() => {/* handle logout */}}>
                Logout
              </Link>
          </div>

          <div className='w-screen'>
            <form action='' onSubmit={handleSubmit}>
          
              {/* First Column */}
              <div className='grid grid-cols-2 gap-y-4 mb-4 justify-center px-2 py-5 rounded-md' style={{backgroundColor:"#8ecae6"}}>
                <div className='grid grid-cols-2'>
                  <div><label>Advertisement Number:</label></div>
                  <div>
                    <select name='advertismentNumber' value='<%= advertismentNumber%>' className='w-5/6 text-sm p-1' required>
                      <option value="IITP/FACREC-CHE/2023/JULY/02">IITP/FACREC-CHE/2023/JULY/02</option>
                    </select>
                  </div>
                </div>

                <div className='grid grid-cols-2'>
                  <div><label>Application Number:</label></div>
                  <div><input type="text" className='w-5/6 text-sm p-1' defaultValue={240002} required
                  onChange={handleInput} /></div>
                </div>

                <div className='grid grid-cols-2'>
                  <div><label>Date of Application:</label></div>
                  <div><input type="date" className='w-5/6 text-sm p-1' required 
                  onChange={handleInput}/></div>
                </div>

                <div className='grid grid-cols-2'>
                  <div><label>Post Applied:</label></div>
                  <div><select className='w-5/6 text-sm p-1' value='<%= postApplied%>' name='postApplied' required>
                    <option value="Professor">Professor</option>
                    <option value="Associate Professor">Associate Professor</option>
                    <option value="Associate Professor with Grade I">Associate Professor with Grade I</option>
                    <option value="Associate Professor with Grade II">Associate Professor with Grade II</option>
                  </select>
                  </div>
                </div>

                <div className='grid grid-cols-2'>
                  <div><label>Department:</label></div>
                  <div>
                    <select value='<%= department%>' name='department' className='w-5/6 text-sm p-1' required>
                      <option value="CSE">CSE</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Chemical">Chemical</option>
                      <option value="Physics">Physics</option>
                    </select>
                  </div>
                </div>

              </div>

              <hr style={{height:"2px", color:"lime", backgroundColor:"black"}}/>

              <div className='mt-4'>
                <div>
                  <h2 className='text-center text-white font-semibold text-xl py-1' style={{backgroundColor:"#284b63"}}>1. Personal Details</h2>
                </div>
                <div className='flex gap-x-20 gap-y-2 mb-4  justify-center px-2 py-5'style={{backgroundColor:"#8ecae6"}}>
                  <div className='grid grid-cols-2 w-3/4 gap-4'>
                    <div className='grid grid-cols-2'>
                      <div><label>First Name*:</label></div>
                      <div><input type="text" className='w-5/6' 
                      name='firstName' onChange={handleInput} required /></div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div><label>Middle Name:</label></div>
                      <div><input type="text"
                      name='middleName' onChange={handleInput} className='w-5/6' /></div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div><label>Last Name*:</label></div>
                      <div><input type="text" className='w-5/6'
                      name='lastName' onChange={handleInput} required /></div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div><label>Nationality*:</label></div>
                      <select className='w-5/6'
                      name='nationality' onChange={handleInput} required>
                        <option value="Indian">Indian</option>
                        {/* Add other nationality options here */}
                      </select>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div><label>Date of Birth*:</label></div>
                      <div><input type="date" className='w-5/6'
                      name='DOB' onChange={handleInput} required /></div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div><label>Gender*:</label></div>
                      <div><select className='w-5/6'
                      name='gender' onChange={handleInput} required>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      </div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div><label>Marital Status*:</label></div>
                      <div>
                        <select className='w-5/6'
                        name='martialStatus' onChange={handleInput} required>
                          <option value="Married">Married</option>
                          <option value="Unmarried">Unmarried</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div><label>Category*:</label></div>
                      <div><input type="text" className='w-5/6'
                      name='category' onChange={handleInput} required /></div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div><label>ID Proof*:</label></div>
                      <div>
                      <select className='w-5/6'
                      name='ID_Proof' onChange={handleInput} required>
                        <option value="AADHAR">AADHAR</option>  
                        <option value="Pan Card">Pan Card</option>  
                        <option value="Driving License">Driving License</option>  
                        <option value="Voter ID">Voter ID</option>  
                        <option value="Passport">Passport</option>  
                        <option value="Ration Card">Ration Card</option> 
                        <option value="Others">Others</option> 
                      </select>
                      </div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div><label>Father's Name*:</label></div>
                      <div><input type="text" className='w-5/6'
                      name='fathersName' onChange={handleInput} required /></div>
                    </div>
                    <div className='grid grid-cols-2'>
                      <div><label>ID Proof File*:</label></div>
                      <div><input type="file" className='w-5/6'
                      name='' onChange={handleInput} required /></div>
                    </div>
                  </div>

                  <div className='w-1/4 h-20 text-sm'>
                  <div className="App">
                    <h2>Upload Profile:</h2>
                    <input type="file" onChange={handleChange} required/>
                    <img src={file} />
                  </div>
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-2 px-2 py-5 rounded-md justify-center' style={{backgroundColor:"#8ecae6"}}>
                <div className='flex flex-wrap gap-6'>
                  <div className='w-full'><h2>Correspondance Address</h2></div>
                  <div className='w-full'>
                    <textarea rows="2" cols="50"
                    name='correspondanceAddress' onChange={handleInput} className='rounded-md'>
                    </textarea>
                  </div>
                </div>
                <div className='flex flex-wrap gap-6'>
                  <div><h2>Permanent Address</h2></div>
                  <div className='w-full'>
                    <textarea rows="2" cols="50"
                    name='permanentAddress' onChange={handleInput} className='rounded-md'>
                    </textarea>
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-x-20 gap-y-4 my-4 justify-center px-2 py-5 rounded-md' style={{backgroundColor:"#8ecae6"}}>
                <div className='grid grid-cols-2'>
                  <div><label>Mobile Number:</label></div>
                  <div><input type="text" className='w-5/6'
                  name='Mobile' onChange={handleInput} required /></div>
                </div>

                <div className='grid grid-cols-2'>
                  <div><label>Email:</label></div>
                  <div><input type="email" className='w-5/6'
                  name='email' onChange={handleInput} required /></div>
                </div>

                <div className='grid grid-cols-2'>
                  <div><label>Alternate Mobile Number:</label></div>
                  <div><input type='BigInt' className='w-5/6'
                  name='altMobile' onChange={handleInput} required /></div>
                </div>

                <div className='grid grid-cols-2'>
                  <div><label>Alternate Email:</label></div>
                  <div>
                    <input type="email"
                    name='altEmail' onChange={handleInput} className='w-5/6'></input>
                  </div>
                </div>

                <div className='grid grid-cols-2'>
                  <div><label>Landline No:</label></div>
                  <div><input type="BigInt"
                  name='landlineNo' onChange={handleInput} className='w-5/6'/></div>
                </div>

              </div>

              <div className='flex flex-wrap justify-end'>
                <button type='submit' className='bg-green-500 text-white p-1 rounded-md'>
                  Save & Next
                </button>
              </div>
              </form>
          </div>  
          
          
        </div>
        
          
        </div>
      
      </div>
    </div>
  );
};

export default Facultypanel;
