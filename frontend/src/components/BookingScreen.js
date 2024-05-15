import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loder from '../components/Loder';
import Error from '../components/Error';
import moment from 'moment'
export default function BookingScreen() {
  const { roomid , fromDate,toDate} = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [room, setRoom] = useState();
  const [totalamount,setTotalamount] =useState();

  const room_id=roomid;
  const fromdate=moment(fromDate);
  const todate=moment(toDate);

  const totaldays=todate.diff(fromdate, 'days')+1

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/api/rooms/getroombyid', { roomid });
        setTotalamount(response.data.rentperday*totaldays)
        setRoom(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (roomid) {
      fetchData();
    }
  }, [roomid]); // Include roomid as a dependency in the dependency array

  if (!roomid) {
    // Handle the case where roomid is not available
    return <div>No room id available</div>;
  }
  async function bookRoom() {
    if (loading) {
      return;
    }
  
    setLoading(true);
  
    const bookingDetails = {
      room,
      userid: JSON.parse(localStorage.getItem("currentuser"))._id,
      fromdate,
      todate,
      totalamount,
      totaldays,
    };

    
    try {
      
      // Example axios.post request in your client-side code
      const result = await axios.post('/api/bookings/bookroom', bookingDetails);
      console.log('Booking successful:', result.data);


      //console.log('Booking successful:', result.data);
      // Optionally handle success or perform additional logic
    } catch (error) {
      console.error(error);
      // Optionally handle errors or perform additional error-related logic
    }finally {
      setLoading(false);
    }
  }
  

  return (
    <div>
      <div className='mt-5'>

        {loading ? (
          <Loder></Loder>
        ) : error ? (
          <Error></Error>
        ) : <div>
          <div className='row justify-content-center bs'>
            <div className='col-md-6'>
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} className="bigimg" />
            </div>
            <div className='col-md-6'>
              <div style={{ textAlign: 'right' }} >
                <h1>Booking Details</h1>
                <hr />
                <b>
                  <p>Name : {JSON.parse(localStorage.getItem('currentuser')).name}</p>
                  <p>From Date : {fromdate.format('DD MM YYYY')}</p>
                    <p>To Date : {todate.format('DD MM YYYY')}</p>
                  <p>Max Count : {room.maxcount}</p>
                </b>
              </div>
              <div style={{ textAlign: 'right' }}>
                <b>
                  <h1>Amount</h1>
                  <hr />
                  <p>Total days : {totaldays}</p>
                  <p>Rent Per day : {room.rentperday}</p>
                  <p>Total Amount : {totalamount}</p>
                </b>
              </div>
              <div style={{ float: 'right' }}>
              <button className='btn btn-primary' onClick={bookRoom}>Pay Now</button>

                
              </div>
                
            </div>
          </div>

        </div>}

      </div>
    </div>
  );
}
