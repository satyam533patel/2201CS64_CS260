import './App.css'
import './index.css'
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup'
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Facultypanel from './Components/FacultyPanel/Facultypanel';
import Academic from './Components/Academic/Academic';
import Employment from './Components/Employment/Employment'
import Publications from './Components/Publications/Publications';
import Professional from './Components/ProfessionalSocieties/Professional'
import Thesis from './Components/Thesis/Thesis';
import Relatedinfo from './Components/RelatedInfo/Relatedinfo';
import Submissions from './Components/Submissions/Submissions';
import Payment from './Components/Payment/Payment';
import ApplicationForm from './Components/ApplicationForm/ApplicationForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
          <Route path='/faculty_panel' element={<Facultypanel/>}></Route>
          <Route path='/academic' element={<Academic/>}></Route>
          <Route path='/employment' element={<Employment/>}></Route>
          <Route path='/publications' element={<Publications/>}></Route>
          <Route path='/professional' element={<Professional/>}></Route>
          <Route path='/thesis' element={<Thesis/>}></Route>
          <Route path='/rel_info' element={<Relatedinfo/>}></Route>
          <Route path='/submissions' element={<Submissions/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/applicationForm' element={<ApplicationForm/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
    </>
  )
}

export default App
