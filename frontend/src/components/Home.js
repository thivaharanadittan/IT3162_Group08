// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';
import logo from '../source/MIL.png';
import home1 from '../source/home1.jpeg';
const Home = () => {
  return (
    
    <div className="home-container">
     
      <header class="main">
<div class="a b">
	<div>
    <img className='logo' src={logo}/>
	</div>	
    <div>
	<nav>
		<ul>
    <ul>
           <li className='active'><Link to="/">Home</Link></li>
            <li><Link to="/BookingForm">Booking</Link></li>
            <li><Link to="/BookingForm/VehicleInfo">Available Vehicles</Link></li>
            <li><Link to="/BookingForm/VehicleInfo/Feedback">Feedback</Link></li>
          </ul>
		</ul>
	</nav>
    </div>
</div>
</header>
<div class="display">
	<div class="border">
		<h1>River View Transport</h1>
		<p>Revel in our histories. Chase our mysteries. Discover extraordinary places. Unwind in our spaces. At River View Transport , we promise you are in good hands.</p>
    <hr/>
		<h1>Why Book with us</h1><br/>
		<p>24 HR FREE BOOKING & CANCELLATION</p>
		<p>BEST RATE GUARANTEE</p>
		<p>SAFE & SECURE TRAVEL</p>
	</div>
	<div>
		<img src={home1} style={{width:'400px'}}/>
	</div>
</div>

   
    </div>
  );
};

export default Home;
