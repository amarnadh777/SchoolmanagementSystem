import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Staff from './pages/stafff/Staff';
import FeesHistory from './components/feesHistory/FeesHistory';
import LibraryHistory from './components/libraryHistory/LibraryHistory';
import StudentDetails from './pages/studentDetails/StudentDetails';
import Navbar from "./components/navbar/Navbar"
import FeesRemarksForm from './components/feeRemarkForm/FeeRemarkForm';
import EditFeeForm from './components/editFeeForm/EditFeeForm';
import StudentForm from './components/studentForm/StudentForm';
function App() {

  return (
    <>

          <Router>
            <Routes>
              <Route path='/login' element={<Login/>}></Route>
              <Route  path='/staff' element={<Staff/>}></Route>
              <Route path='/feehistory' element={<FeesHistory/>}></Route>
              <Route path='/libaryhistory' element={<LibraryHistory/>}></Route>
              <Route path='/studentDetails' element={<StudentDetails/>}></Route>
              <Route path='/create/fee' element={<FeesRemarksForm/>}></Route>
              <Route path='/editfee' element={<EditFeeForm/>}></Route>
              <Route path='/create/student' element={<StudentForm/>}></Route>

              
            </Routes>
          </Router>
    </>
  )
}

export default App
