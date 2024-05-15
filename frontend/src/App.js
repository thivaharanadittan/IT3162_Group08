// App.js
import React from 'react';
//import Dashboard from './components/Dashboard';
import { Routes,Route } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import VehicleInfo from './components/VehicleInfo';
import Feedback from './components/Feedback';
import Home from './components/Home';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='BookingForm' element={<BookingForm/>}/>
      <Route path='BookingForm/VehicleInfo' element={<VehicleInfo/>} />
      <Route path='BookingForm/VehicleInfo/Feedback' element={<Feedback/>}/>
    </Routes>

  );
};

export default App;