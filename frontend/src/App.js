import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import Register from './screens/Register';
import Login from './screens/Login';
import ProfileScreen from './screens/ProfileScreen';
import LandingScreen from './screens/LandingScreen';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <BrowserRouter>
        <Routes>
          {/* Use 'element' prop with the component imported correctly */}
          <Route path='/home' element={<HomeScreen />} />
          
          <Route path='/book/:roomid/:fromDate/:toDate' element={<BookingScreen />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/' element={<LandingScreen />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
