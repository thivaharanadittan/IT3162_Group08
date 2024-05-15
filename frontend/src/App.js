import logo from './logo.svg';
import React from 'react';
import './App.css';
import './css/custom.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import HomeScreen from './component/RoomReservation/HomeScreen';
import BookingScreen from './component/RoomReservation/BookingScreen';
import Login from './component/Login';
import Register from './component/Register';
import ProfileScreen from './component/RoomReservation/ProfileScreen';
import FeedbackForm from './component/Feedback/form';
import Submissions from './component/Feedback/submissions';
import Complaint from './component/Feedback/Complaint';
import Inventory from './component/Inventory/Inventory';
import EmployeeHome from './component/EmployeeManagement/EmployeeHome';
import EmployeeLogin from './component/EmployeeManagement/EmployeeLogin';
import EmployeeSignup from './component/EmployeeManagement/EmployeeSignup';
import EmployeeProfileView from './component/EmployeeManagement/EmployeeProfileView';
import EmployeeViewDetails from './component/EmployeeManagement/EmployeeViewDetails';
import AdminView from './component/EmployeeManagement/EmployeeAdminView';
import EmployeeAdminUpdate from './component/EmployeeManagement/EmployeeAdminUpdate';
import EmployeeSalaryManagement from './component/EmployeeManagement/EmployeeSalaryManagement';
import EmployeeLeaveManagement from './component/EmployeeManagement/EmployeeLeaveManagement';
import About from './component/About';
import Gallery from './component/Gallery';

import TransportHome from './component/Transportation/components/TransportHome';
import BookingForm from './component/Transportation/components/BookingForm';
import VehicleInfo from './component/Transportation/components/VehicleInfo';

//import TransportBookingForm from './component/Transportation/BookingForm';
//import VehicleInfo from './component/Transportation/VehicleInfo';
//import TransportFeedback from './component/Transportation/Feedback'

function App() {
  return (
    <div className='app'>

      <BrowserRouter>
        <Routes>
          {/* Use 'element' prop with the component imported correctly */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/gallery' element={<Gallery/>}/>

          <Route path='/roomReservation' element={<HomeScreen />} />
          <Route path='/book/:roomid/:fromDate/:toDate' element={<BookingScreen />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<ProfileScreen />} />

          <Route path='/feedback' element={<FeedbackForm />} />
          <Route path='submissions' element={<Submissions />} />
          <Route path='submission/:id' element={<Submissions />} />
          <Route path='/complaint' element={<Complaint />} />

          <Route path='/employee-home' element={<EmployeeHome />} />
          <Route path='/employee-login' element={<EmployeeLogin/>}/>
          <Route path='/employee-signup' element={<EmployeeSignup/>}/>
          <Route path="/employee-profile-view" element={<EmployeeProfileView />} />
          <Route path="/employee-view-details" element={<EmployeeViewDetails />} />
          
          <Route path="/employee-admin-view" element={<AdminView />} />
          <Route path="/employee-admin-update" element={<EmployeeAdminUpdate />} />
          <Route path="/employee-salary-management" element={<EmployeeSalaryManagement />} />
          <Route path="/employee-leaving" element={<EmployeeLeaveManagement />} />
         
          
          
          
          

          <Route path='/inventory' element={<Inventory />} />
           
          <Route path='/transportationHome' element={<TransportHome/>}/>
          <Route path='BookingForm' element={<BookingForm/>}/>
          <Route path='BookingForm/VehicleInfo' element={<VehicleInfo/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
