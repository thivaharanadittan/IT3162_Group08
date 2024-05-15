import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import Loder from '../components/Loder';
import Error from '../components/Error';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
const { TabPane } = Tabs;

export default function ProfileScreen() {
    const user = JSON.parse(localStorage.getItem('currentuser'))

    useEffect(() => {
        if (!user) {
            window.location.href = '/login'
        }
    }, [])
    return (
        <div className='ml-3 mt-3'>
            <Tabs defaultActiveKey='1'>
                <TabPane tab="Profile" key="1">
                    <h1>Profile</h1>
                    <br />
                    <h1>Name : {user.name}</h1>
                    <h1>Email : {user.email}</h1>
                    <h1>Admin : {user.isAdmin ? 'yes' : 'No'}</h1>
                </TabPane>
                <TabPane tab="Booking" key="2">
                    <MyBookings />
                </TabPane>

            </Tabs>
        </div>
    )
}

export function MyBookings() {
    const user = JSON.parse(localStorage.getItem('currentuser'))
    const [bookings,setBookings]=useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await (
                    await axios.post('/api/bookings/getbookingsbyuserid', { userid: user._id })
                ).data;
                console.log(data);
                setBookings(data);
                setLoading(false);
                /*swal.fire({
                    title: 'Congrats',
                    text: 'Your Booking has been Cancelled',
                    icon: 'success'
                });*/
    
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
                /*Swal.fire({
                    title: 'Ooops',
                    text: 'Something went Wrong',
                    icon: 'error'
                });*/
            }
        };
    
        // Check if the user has changed before making the API call
        if (user && user._id) {
            fetchData();
        }
    }, [user]); // Include user as a dependency in the dependency array
    
    
    async function cancelBooking(bookingid, roomid) {
        try {
            setLoading(true);
            const result = await axios.post('/api/bookings/cancelbooking', { bookingid, roomid });
            console.log(result.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    
    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    {loading && (<Loder/>)}
                    {bookings && (bookings.map(booking =>{
                        return <div className='bs' key={booking._id}>
                            <h1>{booking.room}</h1>
                            <p><b>BookingID : </b> {booking._id}</p>
                            <p><b>Checkin : </b>{booking.fromdate}</p>
                            <p><b>Checkout : </b>{booking.todate}</p>
                            <p><b>Amount : </b>{booking.totalamount}</p>
                            <p><b>Status : </b>{booking.status == 'booked' ? 'CONFIRMED' : 'CANCELED'}</p>

                            <div className='text-right'>
                                <button className='btn btn-primary' onClick={() => cancelBooking(booking._id,booking.roomid)}>Cancel Booking</button>

                            </div>
                        </div>
                    }))}
                </div>
            </div>
        </div>
    )
}