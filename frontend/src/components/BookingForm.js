// BookingForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../style/Bookingform.css';
const BookingForm = () => {
  const navigate=useNavigate( );
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    // Implement booking logic, e.g., make an API call
    console.log('Booking submitted:', { pickupLocation, dropoffLocation, date, time });
  };

  return (
    
    <div  className='cont'>
      <h2 >Book Transportation</h2>
      <form className="form"onSubmit={handleBooking}>
        <label>
          Pickup Location:
          <input className='input' type="text" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} placeholder='location'/>
        </label>
        <br/>
        <label>
          Drop-off Location:
          <input  className="input"type="text" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} />
        </label>
        <br/>
        <label>
          Date:
          <input   className="input"type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br/>
        <label>
          Time:
          <input  className="input" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <br/>
       <center><button className="buttonstyle"type="submit" onClick={()=> navigate('VehicleInfo')}>Book Now</button></center>
     
      </form>
    </div>
  );
};

export default BookingForm;
